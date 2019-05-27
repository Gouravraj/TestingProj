#!/bin/bash

set -eu

# Base checks
echo "INFO Verify scripts..."
find pipeline/scripts -name "*.sh" | while read -r FILE; do
  bash -n "$FILE"
  shellcheck "$FILE"
done
