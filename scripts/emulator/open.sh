#!/usr/bin/env bash

# Nexus6P
# Pixel_2_API_28
cd $(dirname $(which emulator)) && ./emulator -avd $1 &
