#!/usr/bin/python
# -*- coding: utf-8 -*-

# Use this import to avoid cyclic imports with type checking (requires Python >= 3.7)
from __future__ import annotations

# Imports
import requests
import json

import tornado.web

import carla


class VehicleControlHandler(tornado.web.RequestHandler):
    def initialize(self, controller: APIController) -> None:
        self.controller = controller

    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin',
                        '*')  # Allow all origins (CORS)
        self.set_header('Access-Control-Allow-Headers',
                        'origin, x-requested-with, content-type, accept')
        self.set_header('Access-Control-Allow-Methods',  # Allow OPTIONS method for preflight requests (CORS)
                        'POST, GET, OPTIONS')

    def options(self):
        self.set_status(204)
        self.finish()

    def post(self):
        print("POST request received. Apply control.")

        # Decode data
        try:
            data = json.loads(self.request.body.decode('utf-8'))
        except:
            data = None

        # Process data
        try:
            throttle = data.get('throttle', 0.0)
            brake = data.get('brake', 0.0)
            steer = data.get('steer', 0.0)

            # Apply control
            self.controller.apply_vehicle_control(
                carla.VehicleControl(
                    throttle=throttle,
                    steer=steer,
                    brake=brake,
                    # hand_brake = False,
                    # reverse = False,
                    # manual_gear_shift = False,
                    # gear = 1
                )
            )

            # Set HTTP success code
            self.set_status(201)
        except:
            # Set HTTP error code
            self.set_status(400)

        # Send HTTP response
        return self.finish()
