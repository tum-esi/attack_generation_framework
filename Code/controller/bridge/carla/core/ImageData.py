#!/usr/bin/python
# -*- coding: utf-8 -*-

# Imports
from bridge.carla.core.SensorData import SensorData
from bridge.carla.core.Unit import Unit


class ImageData(SensorData):
    def __init__(self, base_unit: Unit, frame: int = 0, timestamp: float = 0.0, image=None) -> None:
        """Constructor"""
        # Call constuctor of base class
        SensorData.__init__(self, base_unit, frame, timestamp)

        # Init class attributes
        self.image = image

    def get_image(self, target_unit=Unit.BASE_UNIT):
        return self.base_unit.convert_to(self.image, target_unit)

    def set_image(self, image, target_unit=Unit.BASE_UNIT) -> None:
        self.image = image
