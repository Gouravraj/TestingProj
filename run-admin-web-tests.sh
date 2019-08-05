#!/bin/bash

suiteType=$1

echo "---------npm installation-----------"
npm install

if [ $suiteType == "smoke" ]
then
	echo "running admin web smoke tests"
	npm run web:admin
elif [ $suiteType == "all" ]
then
	echo "running admin web functional tests"
	npm run web:admin
else
	echo "there is no tests to run............................"
fi


EXIT_CODE=$?