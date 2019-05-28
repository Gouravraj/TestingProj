#!/usr/bin/env bash

# xcrun simctl create tonySE com.apple.CoreSimulator.SimDeviceType.iPhone-SE com.apple.CoreSimulator.SimRuntime.iOS-12-2
xcrun simctl create $1 $2 $3
