#!/usr/bin/python
# -*- coding: utf-8 -*-

# Imports
from bridge.carla.core.MeasuringUnit import MeasuringUnit
from bridge.carla.core.Unit import Unit


class SensorData:
    def __init__(self, base_unit: Unit, frame: int, timestamp: float):
        self.base_unit = MeasuringUnit(base_unit)
        self.frame = frame
        self.timestamp = timestamp

    def __copy__(self):
        cls = self.__class__
        result = cls.__new__(cls)
        result.__dict__.update(self.__dict__)
        return result
