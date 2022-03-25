#!/usr/bin/python

from aenum import Enum, auto


class Unit(Enum):
    #RAW = auto()
    BASE_UNIT = auto(), 'Base Unit'
    # Length
    #METER = auto()
    # Velocity
    METER_PER_SECOND = auto(), 'm/s'
    #KILOMETER_PER_HOUR = auto()
    #MILES_PER_HOUR = auto()
    # Rotational speed
    #RPM = auto()
    # Acceleration
    METER_PER_SECOND_PER_SECOND = auto(), 'm/s^2'
    # Angle
    DEGREE = auto(), 'deg'
    RADIAN = auto(), 'rad'
    # Pressure
    #BAR = auto()
    # Image
    IMAGE_RGB = auto(), 'RGB'
    # Position
    GEOGRAPHIC_POSITION = auto(), 'lat [deg], lon [deg], alt [m]'
    # Point Cloud
    LIDAR = auto(), 'lidar'
