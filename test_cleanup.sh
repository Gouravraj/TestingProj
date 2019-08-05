#!/bin/bash

set -eu

source pipelines/services/scripts/_common.sh

echo "INFO Removing container and image"

docker rmi --force "selenium/standalone-chrome-debug"