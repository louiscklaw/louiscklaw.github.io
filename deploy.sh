#!/usr/bin/env bash

set -ex

./scripts/dc_build.sh

sudo chown 1000:1000 -R . public

yarn deploy
