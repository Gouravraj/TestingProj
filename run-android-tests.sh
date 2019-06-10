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

export PATH=/usr/local/opt/node@10/bin:$PATH
mkdir -p app && cp "$packagePath" "app/app-debug.pkg"

trap cleanup EXIT

echo "---------npm installation-----------"
npm install

npm run ci