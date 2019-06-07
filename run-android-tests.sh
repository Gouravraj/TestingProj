#!/bin/bash

set -eu

packagePath=$1

function cleanup {
    echo "cleaning up..."
	npm run cleanup
}

if [ ! -f "$packagePath" ]; then
        echo "App package file doesn't exist"; 
fi

mkdir -p app && cp "$packagePath" "app/app-debug.pkg"

trap cleanup EXIT

echo "---------npm installation-----------"
npm install ionic --loglevel verbose

npm run ci