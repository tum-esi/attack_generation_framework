#!/usr/bin/python
# -*- coding: utf-8 -*-

# Avoid cyclic imports while using type hints
from __future__ import annotations

# Imports
import numpy as np
import math

import carla

from bridge.carla.core.ScalarData import ScalarData
from bridge.carla.core.Unit import Unit
from bridge.carla.sensor.Sensor import Sensor


class TachometerSensor(Sensor):
    """
    """

    def __init__(self, controller: DataController, name: str, update_interval: float = 1.0) -> None:
        """Constructor"""
        # Call constructor of base class
        Sensor.__init__(self, controller, name, 'powertrain', update_interval)

        # Init class attributes
        self.type = 'tachometer'
        self.set_enabled(True)

    def tick(self, frame: int) -> None:
        """
        Overwrite base class method since there is no async callback from carla for this sensor
        """
        # Check if we want to process this update (only relevant if server rate is higher than user selected update rate)
        if (frame >= self.next_frame) and self.is_enabled():
            # Compute next frame when sensor data should be received
            self.next_frame = frame + \
                int(math.ceil(self.update_interval /
                              self.controller.get_world_step()))

            # Get data
            timestamp = self.controller.get_world().get_snapshot().timestamp.elapsed_seconds
            velocity_vector = self.controller.get_vehicle().get_velocity()  # 3D velocity vector
            # Vector's length is actual speed in driving direction
            velocity = math.sqrt(velocity_vector.x ** 2 +
                                 velocity_vector.y ** 2 + velocity_vector.z ** 2)
            speed = ScalarData(Unit.METER_PER_SECOND,
                               frame, timestamp, velocity)

            # Put data in queue for further processing
            if speed:
                self.data_queue.put(speed)

            # Notify observers
            self.notify_observers()

    def set_enabled(self, enabled: bool) -> None:
        """Overwrite from base class since no carla actor is available for this sensor"""
        # Update class attribute
        self.enabled = enabled

    def respawn_sensor(self) -> None:
        """Overwrite from base class since no carla actor is available for this sensor"""
        pass

    def update_sensor_attribute(self, attribute: str, value: str, respawn: bool = True) -> None:
        """Overwrite from base class since no carla actor is available for this sensor"""
        pass
