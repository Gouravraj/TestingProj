#!/usr/bin/env bash

open -a /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/
xcrun simctl shutdown all
xcrun simctl boot $1
