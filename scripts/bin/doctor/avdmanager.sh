#!/usr/bin/env bash

GREEN="\033[0;32m"
ORANGE="\033[0;33m"
RED="\033[0;31m"
NC="\033[0m"

pwd=$(pwd)

echo -e "${ORANGE}WARN${NC} This script designed only for Android Studio user."
printf "\nDo you want to proceed? [y/n] : "
read -r init

if [[ "$init" == "y" ]] || [[ "$init" == "yes" ]]; then
  if ! [ -z "$ANDRIOD_HOME" ]; then
    printf "${RED}ERROR${NC}  "
    echo "Android Home is not exist! (please run 'appium-doctor')"
    exit 1
  fi

  if ! [ -x "$(command -v sdkmanager)" ]; then
    printf "${RED}ERROR${NC}  "
    echo "avdmanager is not in PATH"
    printf "Do you want to fix it automatically? [y/n] : "
    read -r yn

    if [[ "$yn" == "y" ]] || [[ "$yn" == "yes" ]]; then
      cd /usr/local/bin
      printf "${GREEN}LOG${NC}  "
      echo "Create symbolic link"
      ln -s "${ANDROID_HOME}/tools/bin/avdmanager" .

      echo "Finished."
    else
      echo "Good bye!"
    fi
  else
    echo "You are awesome!"
  fi
else
  echo "Good bye!"
fi

cd $pwd
