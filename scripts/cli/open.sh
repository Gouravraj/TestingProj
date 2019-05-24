#!/usr/bin/env bash

# another way is set PATH
cd $(dirname $(which emulator)) && exec nohup ./emulator -avd $1 &
