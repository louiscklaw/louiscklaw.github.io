#!/usr/bin/env bash

set -ex

docker run -it \
  --cpus=1 \
  -v $PWD:/app \
  -w /app \
  -p 3001:3001 \
  -p 8080:8080 \
  --rm \
  node:16-bullseye ./build.sh

sudo chown 1000:1000 -R . public

yarn deploy
