#!/usr/bin/python
# -*- coding: utf-8 -*-

# Imports
from bridge.carla.core.SensorData import SensorData
from bridge.carla.core.Unit import Unit


class ScalarData(SensorData):
    """
    """

    def __init__(self, base_unit: Unit, frame: int = 0, timestamp: float = 0.0, value=0.0) -> None:
        # Call constructor of base class
        SensorData.__init__(self, base_unit, frame, timestamp)

        # Init class attributes
        self.value = value

    def get_value(self, target_unit: Unit = Unit.BASE_UNIT):
        return self.base_unit.convert_to(self.value, target_unit)

    def set_value(self, value, target_unit: Unit = Unit.BASE_UNIT) -> None:
        self.value = value
