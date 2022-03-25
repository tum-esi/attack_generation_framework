#!/usr/bin/python
# -*- coding: utf-8 -*-

# Use this import to avoid cyclic imports with type checking (requires Python >= 3.7)
from __future__ import annotations

# Imports
import requests
import json

from bridge.carla.core.Unit import Unit
from bridge.carla.api.SensorHandler import SensorHandler


class IMUSensorHandler(SensorHandler):
    def __init__(self, controller: APIController, sensor_name: str, subscriber: str = None) -> None:
        # Call constructor of base class
        SensorHandler.__init__(self, controller, sensor_name, subscriber)

    def sensor_update(self, data: tuple):
        """
        data is tuple: (accel, gyro, compass)
        """
        # Build JSON message
        accel = data[0].get_vector()
        gyro = data[1].get_vector()

        json_data = {
            'name': self.sensor_name,
            'frame': data[0].frame,
            'timestamp': data[0].timestamp,
            'acceleration': {
                'x': accel[0],
                'y': accel[1],
                'z': accel[2],
            },
            'angularVelocity': {
                'x': gyro[0],
                'y': gyro[1],
                'z': gyro[2],
            },
            'orientation': data[2].get_vector(Unit.DEGREE)
        }

        # Update all subscribed clients
        self.notify_subscribers(json_data)

    class TornadoHandler(SensorHandler.TornadoHTTPHandler):

        def get(self):
            print("POST message received. Reply data of {}.".format(self.handler.sensor_name))

            # Pack sensor info in JSON object            
            sensor_info = {
                'info': {
                    'name': self.handler.sensor_name,
                    'type': 'imu',
                    'category': self.handler.get_sensor().get_category(),
                },
                'settings': {
                    'updateInterval': self.handler.get_sensor().get_update_interval(),
                    'noiseAccelStdDevX': self.handler.get_sensor().get_noise_accel_stddev_x(),
                    'noiseAccelStdDevY': self.handler.get_sensor().get_noise_accel_stddev_y(),
                    'noiseAccelStdDevZ': self.handler.get_sensor().get_noise_accel_stddev_z(),
                    'noiseGyroStdDevX': self.handler.get_sensor().get_noise_gyro_stddev_x(),
                    'noiseGyroStdDevY': self.handler.get_sensor().get_noise_gyro_stddev_y(),
                    'noiseGyroStdDevZ': self.handler.get_sensor().get_noise_gyro_stddev_z(),
                    'noiseGyroBiasX': self.handler.get_sensor().get_noise_gyro_bias_x(),
                    'noiseGyroBiasY': self.handler.get_sensor().get_noise_gyro_bias_y(),
                    'noiseGyroBiasZ': self.handler.get_sensor().get_noise_gyro_bias_z()
                },
                'attackEngine': {
                    'enabled': self.handler.get_sensor().is_attack_engine_enabled(),
                    'attackPeriod': self.handler.get_sensor().get_attack_period(),
                    'attackChance': self.handler.get_sensor().get_attack_chance(),
                    'messageDelay': self.handler.get_sensor().get_message_delay(),
                    'activeAttacks': self.handler.get_sensor().get_active_attacks(),
                    'spoofedValue': {
                        # 'acceleration': self.handler.get_sensor().get_spoofed_value(),
                        # 'angularVelocity': self.handler.get_sensor().get_spoofed_value(),
                        'orientation': self.handler.get_sensor().get_spoofed_value(),
                    },
                    'offsetValue': {
                        # 'acceleration': self.handler.get_sensor().get_offset_value(),
                        # 'angularVelocity': self.handler.get_sensor().get_offset_value(),
                        'orientation': self.handler.get_sensor().get_offset_value(),
                    },
                },
                # 'subscription': {
                #     'subscribers': self.handler.subscribers,
                # }
            }

            print("Send data: {}".format(sensor_info))

            # Configure HTTP response
            self.set_status(200)
            response_body = json.dumps(sensor_info)

            # Send HTTP response
            return self.finish(response_body)

        def post(self):
            print("POST message received. Update settings for {}.".format(
                self.handler.sensor_name))

            # Decode data
            try:
                data = json.loads(self.request.body.decode('utf-8'))
            except:
                data = None
            print("Received data: \n{}".format(data))

            # Process data
            try:
                # Update sensor params
                settings = {}
                if 'settings' in data:
                    settings = data['settings']
                if 'enabled' in settings:
                    enabled = bool(settings['enabled'])
                    self.handler.get_sensor().set_enabled(enabled)
                if 'updateInterval' in settings:
                    update_interval = float(settings['updateInterval'])
                    self.handler.get_sensor().set_update_interval(update_interval)
                if 'noiseAccelStdDevX' in settings:
                    stddev = float(settings['noiseAccelStdDevX'])
                    self.handler.get_sensor().set_noise_accel_stddev_x(stddev)
                if 'noiseAccelStdDevY' in settings:
                    stddev = float(settings['noiseAccelStdDevY'])
                    self.handler.get_sensor().set_noise_accel_stddev_y(stddev)
                if 'noiseAccelStdDevZ' in settings:
                    stddev = float(settings['noiseAccelStdDevZ'])
                    self.handler.get_sensor().set_noise_accel_stddev_z(stddev)
                if 'noiseGyroStdDevX' in settings:
                    stddev = float(settings['noiseGyroStdDevX'])
                    self.handler.get_sensor().set_noise_gyro_stddev_x(stddev)
                if 'noiseGyroStdDevY' in settings:
                    stddev = float(settings['noiseGyroStdDevY'])
                    self.handler.get_sensor().set_noise_gyro_stddev_y(stddev)
                if 'noiseGyroStdDevZ' in settings:
                    stddev = float(settings['noiseGyroStdDevZ'])
                    self.handler.get_sensor().set_noise_gyro_stddev_z(stddev)
                if 'noiseGyroBiasX' in settings:
                    bias = float(settings['noiseGyroBiasX'])
                    self.handler.get_sensor().set_noise_gyro_bias_x(bias)
                if 'noiseGyroBiasY' in settings:
                    bias = float(settings['noiseGyroBiasY'])
                    self.handler.get_sensor().set_noise_gyro_bias_y(bias)
                if 'noiseGyroBiasZ' in settings:
                    bias = float(settings['noiseGyroBiasZ'])
                    self.handler.get_sensor().set_noise_gyro_bias_z(bias)

                # Update attack engine
                attack_engine = {}
                if 'attackEngine' in data:
                    attack_engine = data['attackEngine']
                if 'enabled' in attack_engine:
                    enabled = bool(attack_engine['enabled'])
                    self.handler.get_sensor().set_attack_engine_enabled(enabled)
                if 'attackPeriod' in attack_engine:
                    attack_period = int(attack_engine['attackPeriod'])
                    self.handler.get_sensor().set_attack_period(attack_period)
                if 'attackChance' in attack_engine:
                    attack_chance = float(attack_engine['attackChance'])
                    self.handler.get_sensor().set_attack_chance(attack_chance)
                if 'messageDelay' in attack_engine:
                    message_delay = float(attack_engine['messageDelay'])
                    self.handler.get_sensor().set_message_delay(message_delay)
                if 'activeAttacks' in attack_engine:
                    active_attacks = int(attack_engine['activeAttacks'])
                    self.handler.get_sensor().clear_attacks()
                    self.handler.get_sensor().apply_attack(active_attacks)
                if 'spoofedValue' in attack_engine:
                    value = float(attack_engine['spoofedValue']['orientation'])
                    self.handler.get_sensor().set_spoofed_value(value)
                if 'offsetValue' in attack_engine:
                    value = float(attack_engine['offsetValue']['orientation'])
                    self.handler.get_sensor().set_offset_value(value)

                # Update subscribers
                # subscription = {}
                # if 'subscription' in data:
                #     subscription = data['subscription']
                # if 'subscribe' in subscription:
                #     subscriber = str(subscription['subscribe'])
                #     self.handler.register_subscriber(subscriber)
                # if 'unsubscribe' in subscription:
                #     subscriber = str(subscription['unsubscribe'])
                #     self.handler.ungister_subscriber(subscriber)

                # Configure HTTP response
                self.set_status(201)
            except Exception as e:
                print(e)

                # Configure HTTP error response
                self.set_status(400)

            # Send HTTP response
            return self.finish()
