#!/usr/bin/python

# Imports
from bridge.carla.core.Unit import Unit

# Constants
RAD_TO_DEG = 57.29578
DEG_TO_RAD = 0.017453


class MeasuringUnit:
    """
    """

    def __init__(self, base_unit: Unit):
        """
        """
        self.base_unit = base_unit

    def convert_to(self, value, target_unit: Unit = Unit.BASE_UNIT):
        """
        """
        # Check if conversion is necessary at all
        if target_unit is Unit.BASE_UNIT:
            return value

        # Check target unit
        if type(target_unit) is not Unit:
            raise ConversionError("Failed to convert from {} to {}: Unknown target unit!".format(
                self.base_unit, target_unit))

        # Convert value
        if self.base_unit is Unit.DEGREE:
            if target_unit is Unit.BASE_UNIT:
                return value
            elif target_unit is Unit.DEGREE:
                return value
            elif target_unit is Unit.RADIAN:
                return value * DEG_TO_RAD
            else:
                raise ConversionError("Failed to convert from {} to {}: Unsupported Conversion!".format(
                    self.base_unit, target_unit))
        elif self.base_unit is Unit.RADIAN:
            if target_unit is Unit.BASE_UNIT:
                return value
            elif target_unit is Unit.RADIAN:
                return value
            elif target_unit is Unit.DEGREE:
                return value * RAD_TO_DEG
            else:
                raise ConversionError("Failed to convert from {} to {}: Unsupported Conversion!".format(
                    self.base_unit, target_unit))
        elif self.base_unit is Unit.METER_PER_SECOND:
            if target_unit is Unit.BASE_UNIT:
                return value
            elif target_unit is Unit.METER_PER_SECOND:
                return value
            else:
                raise ConversionError("Failed to convert from {} to {}: Unsupported Conversion!".format(
                    self.base_unit, target_unit))
        elif self.base_unit is Unit.METER_PER_SECOND_PER_SECOND:
            if target_unit is Unit.BASE_UNIT:
                return value
            elif target_unit is Unit.METER_PER_SECOND_PER_SECOND:
                return value
            else:
                raise ConversionError("Failed to convert from {} to {}: Unsupported Conversion!".format(
                    self.base_unit, target_unit))
        elif self.base_unit is Unit.METER_PER_SECOND_PER_SECOND:
            if target_unit is Unit.BASE_UNIT:
                return value
            elif target_unit is Unit.METER_PER_SECOND_PER_SECOND:
                return value
            else:
                raise ConversionError("Failed to convert from {} to {}: Unsupported Conversion!".format(
                    self.base_unit, target_unit))
        else:
            raise ConversionError("Failed to convert from {} to {}: Unsupported Conversion!".format(
                self.base_unit, target_unit))

    def get_base_unit(self) -> Unit:
        """
        """
        return self.base_unit


class ConversionError(Exception):
    """
    """
    pass
