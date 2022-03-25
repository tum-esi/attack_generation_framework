#!/usr/bin/python
# -*- coding: utf-8 -*-

# Avoid cyclic imports while using type hints
from __future__ import annotations

# Imports
import numpy as np
import math

import carla

from bridge.carla.core.VectorData import VectorData
from bridge.carla.core.Unit import Unit
from bridge.carla.sensor.Sensor import Sensor


class GNSSSensor(Sensor):
    """
    """

    def __init__(self, controller: DataController, name: str, update_interval: float = 1.0) -> None:
        """Constructor"""
        # Call constructor of base class
        Sensor.__init__(self, controller, name, 'body', update_interval)

        # Init class attributes
        self.type = 'gnss'

        # Create IMU sensor in carla world
        self.carla_blueprint = self.controller.get_blueprint_library().find('sensor.other.gnss')
        self.carla_blueprint.set_attribute('sensor_tick', f'{self.update_interval}')
        self.carla_transform = carla.Transform(carla.Location(0, 0, 0), carla.Rotation(0, 0, 0))
        self.respawn_sensor()
        self.set_enabled(True)

    def set_noise_alt_bias(self, bias: float) -> None:
        self.update_sensor_attribute('noise_alt_bias', f'{bias}')

    def set_noise_alt_stddev(self, stddev: float) -> None:
        self.update_sensor_attribute('noise_alt_stddev', f'{stddev}')

    def set_noise_lat_bias(self, bias: float) -> None:
        self.update_sensor_attribute('noise_lat_bias', f'{bias}')

    def set_noise_lat_stddev(self, stddev: float) -> None:
        self.update_sensor_attribute('noise_lat_stddev', f'{stddev}')

    def set_noise_lon_bias(self, bias: float) -> None:
        self.update_sensor_attribute('noise_lon_bias', f'{bias}')

    def set_noise_lon_stddev(self, stddev: float) -> None:
        self.update_sensor_attribute('noise_lon_stddev', f'{stddev}')

    def get_noise_alt_bias(self) -> float:
        return self.carla_blueprint.get_attribute('noise_alt_bias').as_float()

    def get_noise_alt_stddev(self) -> float:
        return self.carla_blueprint.get_attribute('noise_alt_stddev').as_float()

    def get_noise_lat_bias(self) -> float:
        return self.carla_blueprint.get_attribute('noise_lat_bias').as_float()

    def get_noise_lat_stddev(self) -> float:
        return self.carla_blueprint.get_attribute('noise_lat_stddev').as_float()

    def get_noise_lon_bias(self) -> float:
        return self.carla_blueprint.get_attribute('noise_lon_bias').as_float()

    def get_noise_lon_stddev(self) -> float:
        return self.carla_blueprint.get_attribute('noise_lon_stddev').as_float()

    def sensor_callback(self, data: carla.SensorData) -> None:
        # Check if we want to process this update (only relevant if server rate is higher than user selected update rate)
        if (data.frame >= self.next_frame) and self.is_enabled():
            # Compute next frame when sensor data should be received
            self.next_frame = data.frame + \
                int(math.ceil(self.update_interval /
                              self.controller.get_world_step()))

            # Get data
            position = VectorData(Unit.GEOGRAPHIC_POSITION, data.frame, data.timestamp,
                                  np.array([data.latitude, data.longitude, data.altitude]))

            # Put data in queue for further processing
            if position:
                self.data_queue.put(position)
