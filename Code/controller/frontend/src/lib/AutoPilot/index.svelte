<script type="text/javascript">

	// IMPORTS
	import axios from "axios";
	import ImageDisplay from "$lib/ImageDisplay/index.svelte";

	// Import test track as waypoint list
	import testrun1 from "$lib/Tracks/track1.json";
	import zickzack1 from "$lib/Tracks/zickzack.json";

	import Toast from '$lib/Toast.svelte';
    import { notifications } from '$lib/notifications.js';

    import { scenarioConfigsStore, drivingData } from '$lib/store.js';
    import { onDestroy } from 'svelte';

    export let time_limit = 30; // value in seconds
    export let attack_time = 20; // if time passes value, attack starts
    let apply_attack = false;
    let finish_autopilot = false;
    let attack_mode = false;

	export let title;
	export let input_data;
	import { onMount } from 'svelte';
	let imageBase = "data:image/jpeg;base64,"
	let imageStream1 = "";
	let imageStream2 = "";
	let meta1 = {"timestamp": 0.0, "frame": 0};
	let meta2 = {"timestamp": 0.0, "frame": 0};

	// store
	let scenario_configurations = {};
	let driving_data = [];
    const subscr = scenarioConfigsStore.subscribe(value => {scenario_configurations = value;});
    const subscr2 = drivingData.subscribe(value => {driving_data = value;});
    onDestroy(() => {
        subscr();
        subscr2();
    });

	// ///////////////// VARIABLES
	let carlaURL = "http://localhost:8000";

	// Required sensors that will be created automatically if not already existing
	let requiredSensors = [
		{
		  name: "autopilot-gnss",
		  type: "gnss",
		},
		{
		  name: "autopilot-imu",
		  type: "imu",
		},
		{
		  name: "autopilot-tachometer",
		  type: "tachometer",
		},
		{
		  name: "autopilot-camera1",
		  type: "camera",
		},
		{
		  name: "autopilot-camera2",
		  type: "camera",
		},
	]

	// Auxilliary variables
	let down = false;
	let lastChar = null;
	
	// Configure vehicle control
	let manualControl = false;
	let autopilotInterval = 20; // 100ms
	let autopilotIntervalId = 0;
	let targetSpeed = 5.0; // m/s = 18 km/h
	let vehicleTrack;
	let targetWaypointIndex = 0; // Waypoint index in vehicle track
	let northVector = [0.0, -1.0, 0.0]; // Carla magnetic north vector (reference for IMU); in docs
	let maxThrottle = 0.75;
	let maxBrake = 1.0;
	let maxSteer = 1.0;
	let dt = 0.1;

	// Actual vehicle control params
	let control = {
		throttle: 0.0,
		brake: 0.0,
		steer: 0.0,
	};

	// PID controller settings
	let accelControl = {
		Kp: 0.5, // Proportional gain
		Ki: 0.001, // Integral gain
		Kd: 0.02, // Differential gain
		tau: 1.0, // Derivative low-pass filter time constant
		integrator: 0.0,
		differentiator: 0.0,
		lastError: 0.0,
		lastMeasurement: 0.0,
	};

	let steerControl = {
		Kp: 0.01, // Proportional gain
		Ki: 0.0, // Integral gain
		Kd: 0.01, // Differential gain
		tau: 1.0, // Derivative low-pass filter time constant
		integrator: 0.0,
		differentiator: 0.0,
		lastError: 0.0,
		lastMeasurement: 0.0,
	};

    let sensors = [];
    let sensorCount = 0;
    let sensorData = {};

    let speed = "";
    let speedString = "-";
    let position = "";
    let positionString = "Lat: -, Lon: -, Alt: -";
    let orientation = "";
    let orientationString = "-";

	// ///////////////// ON MOUNT
	onMount(async() => {

		// determine track file
		if (scenario_configurations["configurations"].length > 0) {
			let config = scenario_configurations["configurations"][0];
			let driving_path = config["driving_path"];
			time_limit = config["driving_time"];
			attack_time = config["driving_attack_time"];
			if (config["driving_attacks"] == "No Attack") {
				apply_attack = false;
			}
			if (config["driving_attacks"] == "Attack Mode") {
				apply_attack = true;
			}
			if (driving_path == "testrun") {
				vehicleTrack = testrun1;
			} else if (driving_path = "zickzack") {
				vehicleTrack = zickzack1;
			}
		}
		console.log("scenario_configurations", scenario_configurations)

		// fetching sensors
		axios({
            method: "POST",
            url: "/config",
            headers: { "content-type": "application/json" },
            data: { 'newSensors': requiredSensors },
        }).then( (response) => {
        	// console.log("sensor added in backend, now websocket connection")
            // Add sensor to list
            requiredSensors.forEach(s => {
        		addSensor(s);
        		// console.log("sensor added!")
            });
            
            // Apply custom sensor settings when all sensors were successfully created
			// Dash camera
			let settings_cam = {
				enabled: true,
				updateInterval: 0.1,
				imageWidth: 800,
				imageHeight: 600,
				fov: 90.0,
			};
			let url = "/sensor/camera/autopilot-camera1";

			axios({
				method: "POST",
				url: url,
				data: {settings: settings_cam,},
				headers: { "content-type": "application/json" },
			}).catch(function(e) {
				notifications.danger("axos request 1 to carla failed")
			});

			// Third person camera
			settings_cam.position = {
				x: -6.0,
				y: 0.0,
				z: 5.0,
			};
			settings_cam.rotation = {
				roll: 0.0,
				pitch: -35.0,
				yaw: 0.0,
			};
			url = "/sensor/camera/autopilot-camera2";

			axios({
				method: "POST",
				url: url,
				data: {
				settings: settings_cam,
				},
				headers: { "content-type": "application/json" },
			}).catch(function(e) {
				notifications.danger("axos request 2 to carla failed")
			});

			// IMU
			let settings_imu = {
				enabled: true,
				updateInterval: 0.1,
			};
			url = "/sensor/imu/autopilot-imu";

			axios({
				method: "POST",
				url: url,
				data: {
				settings: settings_imu,
				},
				headers: { "content-type": "application/json" },
			}).catch(function(e) {
				notifications.danger("axos request 3 to carla failed")
			});

			// GNSS
			let settings_gnss = {
				enabled: true,
				updateInterval: 0.1,
			};
			url = "/sensor/gnss/autopilot-gnss";

			axios({
				method: "POST",
				url: url,
				data: {
				settings: settings_gnss,
				},
				headers: { "content-type": "application/json" },
			}).catch(function(e) {
				notifications.danger("axos request 4 to carla failed")
			});

			// Tachometer
			let settings_tacho = {
				enabled: true,
				updateInterval: 0.1,
			};
			url = "/sensor/tachometer/autopilot-tachometer";
			axios({
				method: "POST",
				url: url,
				data: {settings: settings_tacho,},
				headers: { "content-type": "application/json" },
			}).then(() => {
			  // Enable autopilot
			  notifications.info("autopilot mode on.")
			});

			// Notify user
			notifications.success("The required sensors for the autopilot have been successfully created.")

        }, (error) => {
        	notifications.danger("failed to call /config sensor");
        });

	});

	/////////////////////////////// METHODS /////////////

	    function addSensor(sensor) {
    	sensors.push(sensor);
        sensorCount++;

    	let url = carlaURL+"/sensor/" + sensor.type + "/" + sensor.name + "/websocket";
        url = url.replace("http", "ws"); // Change to websocket protocol
        // console.log("trying websocket connection at URL:", url)
        let socket = new WebSocket(url);
        socket.onopen = function () {
            console.log("WebSocket connection established with " + url);
        };
        socket.onmessage = function (event) {
            // Get JSON object
            let data = JSON.parse(event.data);

            // Store data
            sensorData[sensor.name] = data;
            if (sensor.name == "autopilot-camera1") {
            	// console.log("data camera1", data)
            	imageStream1 = imageBase+data.image;
            	meta1 = {"timestamp": data.timestamp, "frame": data.frame};
            }
            if (sensor.name == "autopilot-camera2") {
            	// console.log("data camera2", data)
            	imageStream2 = imageBase+data.image;
            	meta2 = {"timestamp": data.timestamp, "frame": data.frame};
            }

            // update values
            if (sensor.name == "autopilot-tachometer") {
	            speed = getSensorData("autopilot-tachometer");
				if (speed) {
					speedString = speed.speed.toFixed(3) + " m/s";
				}
            }

            if (sensor.name == "autopilot-gnss") {
				position = getSensorData("autopilot-gnss");
				if (position) {
					positionString = "Lat: " + position.latitude + " °\nLon: " + position.longitude + " °\nAlt: " + position.altitude.toFixed(2) + " m";
				}
            }

            if (sensor.name == "autopilot-imu") {
				orientation = getSensorData("autopilot-imu");
				if (orientation) {
					orientationString = orientation.orientation.toFixed(3) + " °";
				}
            }
        };
    }

    function getSensorData(sensorName) {
    	let data =  sensorData[sensorName];
        return data ? data : null;
    }

	function manualControlChanged() {
		// manualControl = !manualControl;

		console.log("manual control:", manualControl);
		if (manualControl) {
			// console.log("switching manual control.");
			window.addEventListener("keydown", keyDown);
			window.addEventListener("keyup", keyUp);
			if (autopilotIntervalId) clearInterval(autopilotIntervalId);
			control.throttle = 0.0;
			control.brake = 1.0;
			control.steer = 0.0;
		} else {
			// console.log("switching auto control with path.", vehicleTrack);
			window.removeEventListener("keydown", keyDown);
			window.removeEventListener("keyup", keyUp);
			autopilotIntervalId = setInterval(
				autopilotControl,
				autopilotInterval
			);
		}
    }

    function keyDown(e) {
		// Get input char
		let cmd = String.fromCharCode(e.keyCode).toLowerCase();

		// (Prevent multiple sending from repeated keydown event)
		if (down && lastChar === cmd) return;
		down = true;
		lastChar = cmd;

		// Compute control based on input
		if (cmd === "w") control.throttle = 1.0;
		else if (cmd === "a") control.steer = -1.0;
		else if (cmd === "s") control.brake = 1.0;
		else if (cmd === "d") control.steer = 1.0;

		// Send to car
		applyControl();
    }

    function keyUp(e) {
		// Prevent repeated keydown event
		down = false;

		// Get input char
		let cmd = String.fromCharCode(e.keyCode).toLowerCase();

		// Compute control based on input
		if (cmd === "w") control.throttle = 0.0;
		else if (cmd === "a") control.steer = 0.0;
		else if (cmd === "s") control.brake = 0.0;
		else if (cmd === "d") control.steer = 0.0;

		// Send to car
		applyControl();
    }

    function applyControl() {
		axios({
			method: "POST",
			url: "/control",
			data: control,
			headers: { "content-type": "application/json" },
		}).catch( function(error) {
			notifications.danger("apply control failed")
		});
    }

    function autopilotControl() {
    	// console.log("entering autopilotControl function", vehicleTrack)

    	driving_data.push(sensorData);

    	// timing and attacks
    	end_time = performance.now();
    	// console.log("start_time", start_time, "end_time:", end_time)
		let diff = (end_time-start_time)/1000; // diff in seconds
		if (diff > time_limit) {
			// stop autopilot
			finish_autopilot = true;
		}
		// console.log("diff time", diff, "attack time;", attack_time, "time_limit", time_limit)
		if (diff > attack_time) {
			// attack gnss data
			attack_mode = true;
			console.log("starting the attack!")
		}

		// based on Carla local_planner.py example
		// Get sensor input
		// console.log("sensorData[autopilot-tachometer]", sensorData["autopilot-tachometer"])
		let currentSpeed = sensorData["autopilot-tachometer"].speed; // m/s
		let currentLocation = sensorData["autopilot-gnss"]; // geo location (lat/lon/alt)
		let currentHeading = sensorData["autopilot-imu"].orientation; // degree [0, 360]
		// Get next targets
		// targetSpeed = targetSpeed;
		let targetWaypoint = vehicleTrack[targetWaypointIndex];
		// let targetWaypoint = { altitude: 0.0, longitude: 0.0013470978970933827, latitude: 0.0009193043707966808 };
		// let targetWaypoint = { altitude: 0.0, longitude: 0.0013650978970933827, latitude: -0.1009193043707966808 };

		// console.log("Current: " + currentSpeed + " m/s, Target: " + targetSpeed + " m/s" );
		// console.log("Current: " + currentLocation + ", Target: " + targetWaypoint);

		// attack gnss
		if (apply_attack) {
			if (attack_mode) {
				if (alternate) {
					currentLocation["longitude"] += 0.002;
					alternate = !alternate;
				} else {
					currentLocation["longitude"] -= 0.002;	
				}
			}
		}

		// Compute new system input
		let acceleration = computeAcceleration(currentSpeed, targetSpeed);
		let steering = computeSteering(
			currentLocation,
			currentHeading,
			targetWaypoint
		);

		// console.log("Computed Acceleration: " + acceleration + ", Steering: " + steering);

		// Apply throttle and brake
		if (acceleration >= 0.0) {
			control.throttle = Math.min(acceleration, maxThrottle);
			control.brake = 0.0;
		} else {
			control.throttle = 0.0;
			control.brake = Math.min(Math.abs(acceleration), maxBrake);
		}

		// Steering regulation: changes cannot happen abruptly, can't steer too much.
		if (steering > control.steer + 0.1)
		steering = control.steer + 0.1;
		else if (steering < control.steer - 0.1)
		steering = control.steer - 0.1;

		// Apply steering
		if (steering >= 0) control.steer = Math.min(maxSteer, steering);
		else control.steer = Math.max(-maxSteer, steering);

		// console.log("Throttle: " + control.throttle + ", Brake: " + control.brake + ", Steer: " + control.steer);

		// Apply control
		applyControl();

		if (finish_autopilot) {
			if (autopilotIntervalId) clearInterval(autopilotIntervalId);
			resetVehicle();
			applyControl();

			drivingData.set(driving_data);
			notifications.success("simulation finished.")
			notifications.success("dataset created!")
		}
    }

	function computeAcceleration(currentSpeed, targetSpeed) {
		
		// PID controller to estimate throttle/brake input
		let error = targetSpeed - currentSpeed;
		let measurement = currentSpeed;

		// Proportional term
		let p = accelControl.Kp * error;

		// Integral term
		let i = accelControl.integrator + 0.5 * accelControl.Ki * dt * (accelControl.lastError + error);

		// Derivative term
		let d = (2.0 * accelControl.Kd * (measurement - accelControl.lastMeasurement) + (2.0 * accelControl.tau - dt) * accelControl.differentiator) / (2.0 * accelControl.tau + dt);

		// Compute actual PID controller output (clamp value to limits)
		let pid = Math.min(Math.max(p + i + d, -1.0), 1.0);

		// Update state variables
		accelControl.integrator = i;
		accelControl.differentiator = d;
		accelControl.lastError = error;
		accelControl.lastMeasurement = measurement;

		return pid;
    }

	function dotProduct(v1, v2) {
		let result = 0;
		for (let i = 0; i < 3; i++) {
			result += v1[i] * v2[i];
		}
		return result;
    }
    
    function vectorNorm(v) {
		return Math.sqrt(dotProduct(v, v));
    }

    function crossProduct(v1, v2) {
		return [
			v1[1] * v2[2] - v1[2] * v2[1],
			v1[2] * v2[0] - v1[0] * v2[2],
			v1[0] * v2[1] - v1[1] * v2[0],
		];
    }

	function computeSteering(currentLocation, currentHeading, targetLocation) {

		// Get vehicle-target vector
		let targetVector = [
			/*x*/ (targetLocation.longitude - currentLocation.longitude) *
			60 *
			1852, // convert geo position (degree) to m; 60 angular minutes, 1852m <-> 1 nautic mile
			/*y*/ -(targetLocation.latitude - currentLocation.latitude) * 60 * 1852, // convert geo position (degree) to m; 60 angular minutes, 1852m <-> 1 nautic mile, *-1 because north directs towards -y
			/*z*/ 0.0,
		];

		// Get angle between target vector and magnetic north (magnetic direction towards target waypoint)
		let targetHeading = Math.acos(
		Math.min(Math.max( dotProduct(targetVector, northVector) / (vectorNorm(targetVector) * vectorNorm(northVector)), -1.0), 1.0) );
		targetHeading = (targetHeading / Math.PI) * 180.0; // Convert rad to deg

		// Check for turning direction (error will be always positive between 0 .. 180 degree from upper formula)
		if (crossProduct(northVector, targetVector)[2] < 0.0) {
			targetHeading = 360.0 - targetHeading;
		}

		// Get difference in magnetic orientations (error)
		let error = targetHeading - currentHeading;
		if (error > 180.0) {
			error = error - 360;
		} else if (error < -180.0) {
			error = error + 360;
		}
		let measurement = currentHeading;

		// Proportional term
		let p = steerControl.Kp * error;

		// Integral term
		let i = steerControl.integrator + 0.5 * steerControl.Ki * dt * (steerControl.lastError + error);

		// Derivative term
		let d = (2.0 * steerControl.Kd * (measurement - steerControl.lastMeasurement) + (2.0 * steerControl.tau - dt) * steerControl.differentiator) / (2.0 * steerControl.tau + dt);

		//   console.log("P: " + p + ", I: " + i + ", D: " + d);

		// Compute actual PID controller output (clamp value to limits)
		let pid = Math.min(Math.max(p + i + d, -1.0), 1.0);

		// Update state variables
		steerControl.integrator = i;
		steerControl.differentiator = d;
		steerControl.lastError = error;
		steerControl.lastMeasurement = measurement;

		// Update waypoints
		if (vectorNorm(targetVector) < 2.0) targetWaypointIndex++;
		//   if (this.vectorNorm(targetVector) < 0.5) this.targetWaypointIndex++;
		if (targetWaypointIndex >= vehicleTrack.length) targetWaypointIndex = 0;

		return pid;
    }

	function resetVehicle() {

		// Reset control input
		targetWaypointIndex = 0;
		control.throttle = 0.0;
		control.brake = 1.0;
		control.steer = 0.0;

		// Reset PID variables
		accelControl.integrator = 0.0;
		accelControl.differentiator = 0.0;
		accelControl.lastError = 0.0;
		accelControl.lastMeasurement = 0.0;

		steerControl.integrator = 0.0;
		steerControl.differentiator = 0.0;
		steerControl.lastError = 0.0;
		steerControl.lastMeasurement = 0.0;

		// Reset vehicle at server
		axios({
			method: "POST",
			url: "/config",
			headers: { "content-type": "application/json" },
			data: { simulation: { reset: true } },
		}).then(
			() => {
			  console.log("Simulation was reset!");
			},
			(error) => {
			  console.log(error);
			}
		);
    }

    let start_time;
    let end_time;
    let alternate = true;
	function drivesimSimulation() {

		driving_data = [];
		drivingData.set(driving_data)

		if (autopilotIntervalId) clearInterval(autopilotIntervalId);
		finish_autopilot = false;
    	attack_mode = false;
		start_time = performance.now()
		end_time = performance.now()
		
		// start autopilot
		manualControl = false;
		window.removeEventListener("keydown", keyDown);
		window.removeEventListener("keyup", keyUp);
		autopilotIntervalId = setInterval(
			autopilotControl,
			autopilotInterval
		);


		// let data = {"configs": scenario_configurations}
		// xmlWriteRequest("/simulation/static", "POST", data, function(response) {
		// 	if (response.data) {
		// 		notifications.success("simulation started.")
		// 		console.log("response of simulation", response.data)
		// 	}
		// })
	}

	function stopDrivePilot() {
		finish_autopilot = true;
    	attack_mode = false;
    	clearInterval(autopilotIntervalId);
		resetVehicle();
		applyControl();
	}

</script>

<Toast />

<div class="w3-row w3-section">
	<div class="w3-rest">
		<button on:click={drivesimSimulation} class="w3-col w3-input w3-border">Start Simulation</button>
	</div>
</div>

<div class="w3-row w3-section">
	<div class="w3-rest">
		<button on:click={stopDrivePilot} class="w3-col w3-input w3-border">Stop Simulation</button>
	</div>
</div>

<hr>

<div class="w3-container">
	<!-- <h5>{ title }</h5> -->
	<div class="w3-responsive">
		<div class="autopilot">
		    <div class="w3-container">
		    	<div class="col-xl-6">
					<h4>Dash Cam</h4>
					<ImageDisplay sensorName={"autopilot-camera1"} showStats={true} bind:src={imageStream1} bind:meta={meta1} />

					<ImageDisplay sensorName={"autopilot-camera2"} showStats={true} bind:src={imageStream2} bind:meta={meta2} />
		        </div>

		        <div class="col-xl-6">
		          <h4>Manual Control</h4>
		            <input type="checkbox" bind:checked={manualControl} on:change={manualControlChanged}/>

		          <h4>Vehicle Inputs</h4>
		          <div>
		            <div cols="2" class="align-self-center">
		              <label for="range-throttle">Throttle: </label>
		            </div>
		            <div class="align-self-center">
		              <div class="mt-2">{ control.throttle.toFixed(3) }</div>
		            </div>
		          </div>
		          <div>
		            <div class="align-self-center">
		              <label for="range-brake">Brake: </label>
		            </div>
		            <div class="align-self-center">
		              <div class="mt-2">{ control.brake.toFixed(3) }</div>
		            </div>
		          </div>
		          <div>
		            <div class="align-self-center">
		              <label for="range-throttle">Steer: </label>
		            </div>
		            <div cols="2" class="align-self-center">
		              <div class="mt-2">{ control.steer.toFixed(3) }</div>
		            </div>
		          </div>

		          <div class="mt-3">
		            <div>
		              <h4>Position</h4>
		              <p>{ positionString }</p>
		            </div>
		            <div>
		              <h4>Orientation</h4>
		              <p>{ orientationString }</p>
		            </div>
		            <div>
		              <h4>Speed</h4>
		              <p>{ speedString }</p>
		            </div>
		          </div>

		          <div class="text-center">
		            <button on:click={resetVehicle} class="my-1 align-self-center">Reset Vehicle</button>
		          </div>
		        </div>
		    </div>
		  </div>
	</div>
</div>

<style type="text/css">
	p {
  		white-space: pre-line;
	}
</style>
