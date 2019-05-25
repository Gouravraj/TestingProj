#!/usr/bin/env bash

avdmanager list device | grep "id:" | sed 's/[^"]*"\([^"]*\)".*/\1/'
