#!/usr/bin/python
# -*- coding: utf-8 -*-

# Use this import to avoid cyclic imports with type checking (requires Python >= 3.7)
from __future__ import annotations

# Imports
import requests
import json
import base64
import simplejpeg

import carla

from bridge.carla.core.Unit import Unit
from bridge.carla.api.SensorHandler import SensorHandler


class CameraSensorHandler(SensorHandler):
    def __init__(self, controller: APIController, sensor_name: str, subscriber = None) -> None:
        # Call constructor of base class
        SensorHandler.__init__(self, controller, sensor_name, subscriber)
        self.images = []
        
    def sensor_update(self, data: ImageData) -> None:
        # Convert image from raw to jpg
        image_jpg = simplejpeg.encode_jpeg(
            image=data.get_image(),
            colorspace='BGRA',
        )

        # Encode image with base64
        image_base64 = base64.b64encode(image_jpg).decode('utf-8')

        # image_base64 = base64.b64encode(
        #     self.images[self.im_counter % self.im_max]).decode('utf-8')
        # self.im_counter += 1

        # Build JSON message
        json_data = {
            "name": self.sensor_name,
            "frame": data.frame,
            "timestamp": data.timestamp,
            "image": image_base64
        }

        # json_data = {
        #     "name": self.sensor_name,
        #     "frame": 0,
        #     "timestamp": 0,
        #     "image": data
        # }

        # print('Send update: {}'.format(json_data))

        # Update all subscribed clients
        self.notify_subscribers(json_data)

    class TornadoHandler(SensorHandler.TornadoHTTPHandler):

        def get(self):
            print("GET request received. Reply data of {}.".format(
                self.handler.sensor_name))

            # Pack sensor info in JSON object
            position = self.handler.get_sensor().get_position()
            rotation = self.handler.get_sensor().get_rotation()

            sensor_info = {
                'info': {
                    'name': self.handler.sensor_name,
                    'type': 'camera',
                    'category': self.handler.get_sensor().get_category(),
                },
                'settings': {
                    'enabled': self.handler.get_sensor().is_enabled(),
                    'updateInterval': self.handler.get_sensor().get_update_interval(),
                    'imageWidth': self.handler.get_sensor().get_image_width(),
                    'imageHeight': self.handler.get_sensor().get_image_height(),
                    'fov': self.handler.get_sensor().get_fov(),
                    'position': {
                        'x': position.x,
                        'y': position.y,
                        'z': position.z,
                    },
                    'rotation': {
                        'roll': rotation.roll,
                        'pitch': rotation.pitch,
                        'yaw': rotation.yaw,
                    },
                },
                'attackEngine': {
                    'enabled': self.handler.get_sensor().is_attack_engine_enabled(),
                    'attackPeriod': self.handler.get_sensor().get_attack_period(),
                    'attackChance': self.handler.get_sensor().get_attack_chance(),
                    'messageDelay': self.handler.get_sensor().get_message_delay(),
                    'activeAttacks': self.handler.get_sensor().get_active_attacks(),
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
            print("POST request received. Update settings for {}.".format(
                self.handler.sensor_name))

            # Decode data
            try:
                data = json.loads(self.request.body.decode('utf-8'))
            except:
                data = None
            print("Received data: \n{}".format(data))

            # Process data
            try:
                # Update sensor settings
                settings = {}
                if 'settings' in data:
                    settings = data['settings']
                if 'enabled' in settings:
                    enabled = bool(settings['enabled'])
                    self.handler.get_sensor().set_enabled(enabled)
                if 'updateInterval' in settings:
                    update_interval = float(settings['updateInterval'])
                    self.handler.get_sensor().set_update_interval(update_interval)
                if 'imageWidth' in settings:
                    width = int(settings['imageWidth'])
                    self.handler.get_sensor().set_image_width(width)
                if 'imageHeight' in settings:
                    height = int(settings['imageHeight'])
                    self.handler.get_sensor().set_image_height(height)
                if 'fov' in settings:
                    fov = float(settings['fov'])
                    self.handler.get_sensor().set_fov(fov)
                if 'position' in settings:
                    position = settings['position']
                    self.handler.get_sensor().set_position(
                        [float(position['x']), float(position['y']), float(position['z'])])
                if 'rotation' in settings:
                    rotation = settings['rotation']
                    self.handler.get_sensor().set_rotation(
                        [float(rotation['roll']), float(rotation['pitch']), float(rotation['yaw'])])

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

                # Set HTTP success code
                self.set_status(201)
            except Exception as e:
                print(e)

                # Set HTTP error code
                self.set_status(400)

            # Send HTTP response
            return self.finish()
