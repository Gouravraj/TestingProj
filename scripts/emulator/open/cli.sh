#!/usr/bin/env bash

cd $(dirname $(which emulator)) && ./emulator -avd $1 &
