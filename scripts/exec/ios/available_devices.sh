#!/usr/bin/env bash

xcrun simctl list --json devices available
# xcrun simctl list --json
# xcrun simctl list --json >> ./scripts/ci/devices_ios.json
# xcrun simctl list devicetypes runtimes
