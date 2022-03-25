#!/usr/bin/python
# -*- coding: utf-8 -*-

# Avoid cyclic imports while using type hints
from __future__ import annotations

# Imports
import numpy as np
import math

import simplejpeg
import base64
import copy

import carla

from bridge.carla.core.Unit import Unit
from bridge.carla.core.ImageData import ImageData
from bridge.carla.sensor.Sensor import Sensor


class CameraSensor(Sensor):
    """
    """

    def __init__(self, controller: DataController, name: str, update_interval: float = 1.0) -> None:
        """Constructor"""
        # Call constructor of base class
        Sensor.__init__(self, controller, name, 'body', update_interval)

        # Init class attributes
        self.type = 'camera'

        # Create IMU sensor in carla world
        self.carla_blueprint = self.controller.get_blueprint_library().find('sensor.camera.rgb')
        self.carla_blueprint.set_attribute(
            'sensor_tick', f'{self.update_interval}')
        self.carla_transform = carla.Transform(carla.Location(
            x=1.5, y=0.0, z=2.4), carla.Rotation(0, 0, 0))
        self.respawn_sensor()
        self.set_enabled(True)

        self.image_list = []

    def set_fov(self, fov: float) -> None:
        self.update_sensor_attribute('fov', f'{fov}')

    def set_image_width(self, width: int) -> None:
        self.update_sensor_attribute('image_size_x', f'{width}')

    def set_image_height(self, height: int) -> None:
        self.update_sensor_attribute('image_size_y', f'{height}')

    def set_position(self, position: list) -> None:
        # Update position
        self.carla_transform.location = carla.Location(
            x=position[0], y=position[1], z=position[2])
        # Avoid direct manipulation via set_transform() which may cause memory access violation
        self.pending_respawn = True
        # self.respawn_sensor()

    def set_rotation(self, rotation: list) -> None:
        """
        [roll, pitch, yaw]
        """
        # Update rotation
        self.carla_transform.rotation = carla.Rotation(
            roll=rotation[0], pitch=rotation[1], yaw=rotation[2])
        # Avoid direct manipulation via set_transform() which may cause memory access violation
        self.pending_respawn = True

    def get_fov(self) -> float:
        return self.carla_blueprint.get_attribute('fov').as_float()

    def get_image_width(self) -> int:
        return self.carla_blueprint.get_attribute('image_size_x').as_int()

    def get_image_height(self) -> int:
        return self.carla_blueprint.get_attribute('image_size_y').as_int()

    def get_position(self) -> carla.Location:
        return self.carla_transform.location

    def get_rotation(self) -> carla.Rotation:
        return self.carla_transform.rotation

    def sensor_callback(self, data: carla.SensorData) -> None:
        # Check if we want to process this update (only relevant if server rate is higher than user selected update rate)
        if (data.frame >= self.next_frame) and self.is_enabled():
            # Compute next frame when sensor data should be received
            self.next_frame = data.frame + \
                int(math.ceil(self.update_interval /
                              self.controller.get_world_step()))

            # Get data
            image = ImageData(Unit.IMAGE_RGB, data.frame, data.timestamp,
                              np.frombuffer(data.raw_data, dtype=np.uint8).reshape(
                                  self.get_image_height(), self.get_image_width(), 4))  # 32-bit BRGA -> [height, width, 4] array

            # Put data in queue for further processing
            if image:
                self.data_queue.put(image)
