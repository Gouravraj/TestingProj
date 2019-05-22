#!/usr/bin/env bash

adb shell getprop sys.boot_completed | tr -d '\r'
