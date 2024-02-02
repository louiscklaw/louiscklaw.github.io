#!/usr/bin/env bash

set -ex

docker compose kill
docker compose up

# docker compose exec -it app bash
