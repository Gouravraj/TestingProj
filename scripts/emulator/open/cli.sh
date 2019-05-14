#!/usr/bin/env bash

# another way is set PATH
cd $(dirname $(which emulator)) && ./emulator -avd $1 &
