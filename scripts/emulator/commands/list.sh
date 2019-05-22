#!/usr/bin/env bash

# adb devices -l
avdmanager list avd | grep Name | sed -e 's/^[[:space:]]*//'
