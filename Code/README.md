# Attack Data Generation Framework for AutonomousVehicle Sensors

## how to run the code in a container environment

- start the deployment by using the command `docker-compose up` in the root directory of this repository.
- move to `localhost:8000`.

## how to run the code for local development

- jump into the controller folder and run `python3 main.py`.
- jump into the repositories/data-generator folder and run `python3 main.py --config attack_config.json`, `python3 main.py --config config.json` and go into repositories/data-receiver and execute `sudo python3 main.py --config config.json`.
- move to `localhost:8000`.

## sample configuration for the static dataset scenario
#### select static data set
  - ring_front_center_modified:95: true
#### select attack
  - blurring: true
#### validate data set
  - blurring: Long-Short-Histogram-Pool_LDA: true

## sample configuration for the communication attack

#### sending container configs:
  - duration: 22
  - target: http://localhost:8030/receive
  - interval: 500
  - delay: 2
  - jitter: 0
#### attacking container configs:
  - duration: 21
  - target: http://localhost:8030/receive
  - interval: 250
  - delay: 10
  - jitter: 0
#### receiver container configs:
  - interface: lo
  - ring_buffer_duration: 2
  - duration_limit: 25
  - capfile: /tmp/evaluation2.cap
  - capfile_limit: 4
  - activate_detection: true
  - msg_number_handshake: 8
  - tolerance: 2
  - detector_interval: 2

## sample configuration for the driving simulation attack
#### gnss general settings
  - Update Interval [s]: 0.25
  - Altitude Noise Bias: 0
  - Altitude Noise Std Dev: 0
  - Latitude Noise Bias: 0
  - Latitude Noise Std Dev: 0
  - Longitude Noise Bias: 0
  - Longitude Noise Std Dev: 0

#### gnss attack settings
  - Attack Period: 1
  - Attack Chance: 1
  - Message Delay [s]: 0
  - Offset Latitude [m]: 2
  - Offset Longitude [m]: 0.5
  - Offset Altitude [m]: 0
  - Spoofed Latitude [°]: 0
  - Spoofed Longitude [°]: 0
  - Spoofed Altitude [m]: 0
  - Active Attacks: constant offset
