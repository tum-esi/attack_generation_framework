#!/usr/bin/python
# -*- coding: utf-8 -*-

# Imports
from bridge.carla.core.SensorData import SensorData
from bridge.carla.core.Unit import Unit


class VectorData(SensorData):
    """
    """

    def __init__(self, base_unit: Unit, frame: int = 0, timestamp: float = 0.0, vector=[]) -> None:
        """
        """
        # Call constuctor of base class
        SensorData.__init__(self, base_unit, frame, timestamp)

        # Init class attributes
        self.vector = vector

    def get_vector(self, target_unit: Unit = Unit.BASE_UNIT):
        """Returns the data vector

        Paramters
        ---------
        target_unit : Unit
            Specifies the desired target unit with which the data shall be returned

        Returns
        -------
        list
            The data vector converted into the desired unit
        """
        return self.base_unit.convert_to(self.vector, target_unit)

    def set_vector(self, vector, target_unit: Unit = Unit.BASE_UNIT) -> None:
        """
        """
        self.vector = vector
