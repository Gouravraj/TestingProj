#!/usr/bin/env bash

cp -r $(xcrun simctl get_app_container booted "${1}") "${2}"
