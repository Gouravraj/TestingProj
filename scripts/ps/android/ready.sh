#!/usr/bin/env bash

while [ -z "`adb devices | grep emulator | cut -f1`" ]
do
  sleep 1
done

sleep 4

while [ "`adb shell getprop sys.boot_completed | tr -d '\r' `" != "1" ]
do
  sleep 1
done
