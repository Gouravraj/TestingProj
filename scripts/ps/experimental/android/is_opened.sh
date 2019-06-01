#!/usr/bin/env bash

while [ -z "`adb devices | grep emulator | cut -f1`" ]
do
  sleep 1
done
