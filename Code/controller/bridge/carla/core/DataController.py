# Use this import to avoid cyclic imports with type checking (requires Python >= 3.7)
from __future__ import annotations

# Imports
import sys
import time
import math
import threading
import atexit

import carla

from bridge.carla.sensor.IMUSensor import IMUSensor
from bridge.carla.sensor.GNSSSensor import GNSSSensor
from bridge.carla.sensor.CameraSensor import CameraSensor
from bridge.carla.sensor.TachometerSensor import TachometerSensor


class DataController:
    """
    DataController class
    """

    def __init__(self, carla_ip="localhost", carla_port=2000):
        """Constructor"""
        # Init class attributes
        self.carla_ip = carla_ip
        self.carla_port = carla_port
        self.carla_client = None
        self.carla_world = None
        self.world_step = 0.1  # 100ms
        self.carla_blueprint_library = None
        self.carla_vehicle = None
        self.spawn_point = None
        self.vehicle_control = carla.VehicleControl()
        self.external_control = True
        self.sensors = []
        self.can_encoder = None
        self.ethernet_encoder = None
        self.simulation_thread = None
        self.running = False
        self.real_time = False

        # Init carla simulation environment
        self.init_carla()

        # Create simulation thread
        self.simulation_thread = threading.Thread(target=self._simulation_loop, daemon=True)

        # Ensure destructor is called when the object goes out of scope
        atexit.register(self.__del__)

    def __del__(self):
        """Destructor"""
        # Leave synchronous mode
        settings = self.carla_world.get_settings()
        settings.synchronous_mode = False
        self.carla_world.apply_settings(settings)

        # Delete carla objects
        self.carla_vehicle.destroy()

    def init_carla(self):
        """Init carla client and setup vehicle"""

        # Init carla client for interaction with simulator
        self.carla_client = carla.Client(self.carla_ip, self.carla_port)
        self.carla_client.set_timeout(10.0)  # 10s

        # Get world instance
        try:
            self.carla_world = self.carla_client.get_world()
            print("carla_world:", self.carla_world)
        except:
            logger.critical(
                "Unable to connect to carla world, timeout reached! Please ensure that the carla framework is running on the specified ip and port.")
            sys.exit(10)

        # Set fixed simulation time step
        settings = self.carla_world.get_settings()
        # Set fixed simulation step
        settings.fixed_delta_seconds = self.world_step
        # Allow physics substepping (useful for low update rate to maintain realistic physic simulation)
        settings.substepping = True
        settings.max_substep_delta_time = 0.01  # Recommended value <= 0.01
        # (fulfill: fixed_delta_seconds <= max_substep_delta_time * max_substeps)
        settings.max_substeps = min(int(math.ceil(self.world_step / 0.01)), 16)
        # Enable synchronous mode
        settings.synchronous_mode = True
        self.carla_world.apply_settings(settings)

        # Get list of available blueprints
        self.carla_blueprint_library = self.carla_world.get_blueprint_library()

        # Setup vehicle
        vehicle_bp = self.carla_blueprint_library.find('vehicle.audi.etron')
        # vehicle_bp.set_attribute('color', '60, 140, 30')  # RGB color string
        vehicle_bp.set_attribute('color', '255, 0, 0')  # RGB color string

        # Spawn the vehicle
        self.spawn_point = self.carla_world.get_map().get_spawn_points()[
            54]  # Spawn point
        self.carla_vehicle = self.carla_world.spawn_actor(
            vehicle_bp, self.spawn_point)

    def create_sensor(self, sensor_type, name, update_interval=1.0):
        # Create sensor
        sensor = None
        if sensor_type == 'imu':
            print("adding imu")
            sensor = IMUSensor(self, name, update_interval)
        elif sensor_type == 'gnss':
            print("adding gnss")
            sensor = GNSSSensor(self, name, update_interval)
        elif sensor_type == 'camera':
            print("adding camera")
            sensor = CameraSensor(self, name, update_interval)
        elif sensor_type == 'tachometer':
            print("adding tachometer")
            sensor = TachometerSensor(self, name, update_interval)
        
        else:
            raise ValueError('Selected sensor type is not supported!')

        # Append sensor to list
        print("adding sensor:", sensor)
        self.sensors.append(sensor)
        print("create sensor finished.")

    def delete_sensor(self, name: str) -> None:
        # Remove sensor with given name
        self.sensors[:] = [
            sensor for sensor in self.sensors if sensor.name != name]

    def get_world(self):
        """Returns carla world

        Returns
        -------
        carla.World
            Carla world object
        """

        return self.carla_world

    def get_world_step(self):
        return self.world_step

    def set_world_step(self, step: float) -> None:
        # Save new value
        self.world_step = step
        # Update time step in carla world
        settings = self.carla_world.get_settings()
        settings.fixed_delta_seconds = self.world_step
        self.carla_world.apply_settings(settings)


    def get_vehicle(self):
        return self.carla_vehicle

    def get_blueprint_library(self):
        """Returns carla blueprint library

        Returns
        -------
        carla.BlueprintLibrary
            Carla blueprint library
        """

        return self.carla_blueprint_library

    def save_configuration(self, file):
        """Description

        Parameters
        ----------
        argument1 : int
            Description of arg1

        Returns
        -------
        int
            Returning value
        """

        pass

    def load_configuration(self, file):
        pass

    def get_sensor(self, name):
        return next((sensor for sensor in self.sensors if sensor.get_name() == name), None)

    def get_sensor_list(self) -> list:
        return [{'name': sensor.get_name(), 'type': sensor.get_type()} for sensor in self.sensors]

    def get_encoder(self, name):
        pass

    def apply_vehicle_control(self, control: carla.VehicleControl):
        self.vehicle_control = control

    def reset_simulation(self):
        # Stop simulation
        # self.stop_simulation()

        # Reset vehicle position
        if self.carla_vehicle and self.spawn_point:
            self.carla_vehicle.set_transform(self.spawn_point)

        # Restart simulation
        # self.start_simulation()

    def start_simulation(self):
        self.running = True
        self.simulation_thread.start()

    def stop_simulation(self):
        self.running = False

    def _simulation_loop(self):
        while self.running:
            # Start clock
            t_start = time.perf_counter()

            # Let server compute next simulation step
            frame = self.carla_world.tick()

            # Handle all sensors (TODO: maybe enable multithreading in the future)
            for sensor in self.sensors:
                sensor.tick(frame)

            # Apply control input
            if self.external_control:
                self.carla_vehicle.apply_control(self.vehicle_control)
            else:
                # Activate carla's interal autopilot to drive around
                self.carla_vehicle.set_autopilot(True)

            # Sleep until the end of the cycle
            t_elapsed = time.perf_counter() - t_start
            if self.real_time:
                sleep_time = self.world_step - t_elapsed
                if sleep_time > 0:
                    # logger.debug(
                    #     "Cycle done. Sleep {0:3f}s until next cycle.".format(sleep_time))
                    time.sleep(sleep_time)
                else:
                    logger.debug(
                        "Elapsed time: {:03f} (exceeded limit by {:03f}s)".format(t_elapsed, -sleep_time))
            else:
                pass
                # logger.debug(
                #     "Elapsed time: {0:3f}s".format(t_elapsed))

        logger.debug("Leaving simulation loop")
