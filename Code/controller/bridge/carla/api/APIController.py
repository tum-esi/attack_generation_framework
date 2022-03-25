#!/usr/bin/python
# -*- coding: utf-8 -*-

# Use this import to avoid cyclic imports with type checking (requires Python >= 3.7)
from __future__ import annotations

# Imports
import tornado.ioloop
import tornado.web
import tornado.websocket

import threading
import asyncio

from bridge.carla.api.MainHandler import MainHandler
from bridge.carla.api.ConfigHandler import ConfigHandler
from bridge.carla.api.VehicleControlHandler import VehicleControlHandler
from bridge.carla.api.IMUSensorHandler import IMUSensorHandler
from bridge.carla.api.GNSSSensorHandler import GNSSSensorHandler
from bridge.carla.api.CameraSensorHandler import CameraSensorHandler
from bridge.carla.api.TachometerSensorHandler import TachometerSensorHandler


class APIController:
    def __init__(self, data_controller: DataController, tornado_server: None, port: int = 8000) -> None:
        # Init class attributes
        self.data_controller = data_controller
        self.tornado_server = tornado_server

    def create_handler(self, sensor_type: str, name: str, subscriber: str = None) -> None:
        # Create handler
        handler = None
        if sensor_type == 'imu':
            handler = IMUSensorHandler(
                self, name, tornado.ioloop.IOLoop.current())
        elif sensor_type == 'gnss':
            handler = GNSSSensorHandler(
                self, name, tornado.ioloop.IOLoop.current())
        elif sensor_type == 'camera':
            handler = CameraSensorHandler(
                self, name, tornado.ioloop.IOLoop.current())
        elif sensor_type == 'tachometer':
            handler = TachometerSensorHandler(
                self, name, tornado.ioloop.IOLoop.current())
        else:
            raise ValueError('No suitable handler available for selected sensor type!')

        # Register handler
        print("registering handler:", handler)
        self.data_controller.get_sensor(name).attach(handler)

        # Assign URL to handler and add it to the server (HTTP and WebSocket)
        self.tornado_server.add_handlers(
            r"(.*?)", [(r'/sensor/' + sensor_type + r'/' + name, handler.TornadoHandler, dict(handler=handler))])
        self.tornado_server.add_handlers(
            r"(.*?)", [(r'/sensor/' + sensor_type + r'/' + name + r'/websocket', handler.TornadoWebSocketHandler, dict(handler=handler))])

    def create_sensor(self, sensor_type: str, name: str) -> None:
        self.data_controller.create_sensor(sensor_type, name)

    def get_sensor(self, name: str) -> Sensor:
        return self.data_controller.get_sensor(name)

    def get_sensor_list(self) -> list:
        return self.data_controller.get_sensor_list()

    def apply_vehicle_control(self, control: carla.VehicleControl):
        self.data_controller.apply_vehicle_control(control)

    def reset_simulation(self):
        self.data_controller.reset_simulation()

    def get_world_step(self) -> float:
        return self.data_controller.get_world_step()

    def set_world_step(self, world_step: float) -> None:
        self.data_controller.set_world_step(world_step)
