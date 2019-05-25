#!/usr/bin/env bash

avdmanager list avd | grep Name | sed -e 's/^[[:space:]]*//'
