#!/usr/bin/env bash

set -ex

docker run -it \
  -v $PWD:/app \
  -w /app \
  -p 3001 \
  -p 8080 \
  -v ~/.ssh/id_rsa:/root/.ssh/id_rsa:ro \
  -v ~/.ssh/known_host:/root/.ssh/known_hosts:ro \
  --rm \
  node:16-buster bash