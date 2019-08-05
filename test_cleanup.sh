#!/bin/bash

set -eu

echo "INFO Removing container and image"

docker rmi --force "selenium/standalone-chrome-debug"