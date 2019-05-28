#!/usr/bin/env bash

open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/
xcrun simctl boot $1
