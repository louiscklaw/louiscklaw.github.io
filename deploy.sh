#!/usr/bin/env bash

set -ex

rm -rf ./public/*

./scripts/dc_build.sh

sudo chown 1000:1000 -R .

yarn deploy
