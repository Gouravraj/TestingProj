#!/usr/bin/env bash

adb pull $(adb shell pm path "${1}") "${2}"
