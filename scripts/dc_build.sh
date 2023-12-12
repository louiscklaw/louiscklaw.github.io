#!/usr/bin/env bash

set -ex

docker run -it \
  --cpus=1 \
  -v $PWD:/app \
  -w /app \
  --rm \
  node:16-bullseye sh ./build.sh
  

yarn deploy
