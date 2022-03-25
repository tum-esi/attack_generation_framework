#!/usr/bin/python
# -*- coding: utf-8 -*-

# Use this import to avoid cyclic imports with type checking (requires Python >= 3.7)
from __future__ import annotations

# Imports
import os
import tornado.web

# Path to static HTML/JS/CSS files that are served for the WebUI
# also check in APIController.py when handler gets bound to address
static_html_folder = "../../webserver/sengen-web-ui/dist"


class MainHandler(tornado.web.RequestHandler):
    def get(self) -> None:
        webserver_root_path = os.path.abspath(
            os.path.dirname(__file__)) + '/' + static_html_folder

        with open(webserver_root_path + "/index.html", "r") as file:
            self.write(file.read())
