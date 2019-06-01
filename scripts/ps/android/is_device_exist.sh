#!/usr/bin/env bash

out=$(avdmanager list avd | grep $1 | sed -e 's/^[[:space:]]*//' | head -1)

if [[ $out =~ $1 ]]; then
  echo 1
else
  echo 0
fi
