#!/usr/bin/python
# -*- coding: utf-8 -*-

# Use this import to avoid cyclic imports with type checking (requires Python >= 3.7)
from __future__ import annotations

# Imports
import threading
import math
from queue import Queue, Empty

import carla

from bridge.carla.core.SensorObserver import SensorObserver


class Sensor:
    """Abstract base class for all sensor implementations.

    This class shall serve as a template for all sensor implementations. It provides
    some interfaces for other software components (e.g. sensor observers) to deal with
    all sensors in a uniform fashion.
    """

    def __init__(self, controller: DataController, name: str = '', category: str = '', update_interval: float = 1.0) -> None:
        
        # Init class attributes
        self.controller = controller
        self.name = name
        self.type = ""
        self.category = category
        self.update_interval = update_interval
        self.enabled = False
        self.observers = []
        self.carla_actor = None
        self.carla_blueprint = None
        self.carla_transform = None
        self.pending_respawn = False
        self.data_queue = Queue()
        self.next_frame = 0

    def __del__(self) -> None:

        # Destroy object in carla simulation world
        if self.carla_actor:
            self.carla_actor.destroy()

    def sensor_callback(self, data: carla.SensorData) -> None:

        raise NotImplementedError(
            "Please implement this method in the inherited class.")

    def is_enabled(self) -> bool:
        return self.enabled

    def set_enabled(self, enabled: bool) -> None:

        # Update class attribute
        self.enabled = enabled

        # Update carla listening state if necessary
        if self.carla_actor:
            if self.carla_actor.is_listening != self.enabled:
                if self.enabled:
                    self.carla_actor.listen(
                        lambda data: self.sensor_callback(data))
                else:
                    self.carla_actor.stop()
        else:
            raise ValueError("Carla actor is None!")

    def respawn_sensor(self) -> None:

        # Destroy current sensor object (carla actor)
        if self.carla_actor:
            self.carla_actor.destroy()
        # Spawn new sensor object (carla actor)
        self.carla_actor = self.controller.get_world().spawn_actor(
            self.carla_blueprint, self.carla_transform, attach_to=self.controller.get_vehicle())
        # Add sensor callback on new carla_actor if necessary
        self.set_enabled(self.is_enabled())
        # Reset respawn flag
        self.pending_respawn = False

    def update_sensor_attribute(self, attribute: str, value: str, respawn: bool = True) -> None:

        # Update attribute and respawn sensor
        self.carla_blueprint.set_attribute(
            attribute, value)
        if respawn:
            self.pending_respawn = True

    def attach(self, observer: SensorObserver) -> None:

        self.observers.append(observer)

    def detach(self, observer: SensorObserver) -> None:

        self.observers.remove(observer)

    def get_name(self) -> str:

        return self.name

    def set_name(self, name: str) -> None:

        self.name = name

    def get_type(self) -> str:
        return self.type

    def get_category(self) -> str:

        return self.category

    def set_category(self, category: str) -> None:

        self.category = category

    def get_update_interval(self) -> float:

        return self.update_interval

    def set_update_interval(self, update_interval: float) -> None:

        self.update_interval = update_interval
        self.update_sensor_attribute('sensor_tick', f'{update_interval}')
        self.next_frame = 0

    def notify_observers(self):
        # Get data (if available)
        try:
            data = self.data_queue.get(block=True, timeout=0.01)
            while data:
                # Notify observers if data is available
                for observer in self.observers:
                    observer.sensor_update(data)
                data = self.data_queue.get(block=True, timeout=0.01)
        except Empty:
            pass

    def tick(self, frame: int):
        """frame: frame that is currently processed"""
        if self.is_enabled():
            # Update data
            # -> this is done asynchronously by the server calling sensor_callback()

            # Notify observers (the internal queue mechanism ensures data synchronicity)
            self.notify_observers()

        # Allow for sensor setting changes here (in this thread) to avoid async access to 
        # class members in respawn_sensor() (memory access violation may occur otherwise)
        if self.pending_respawn:
            self.respawn_sensor()
