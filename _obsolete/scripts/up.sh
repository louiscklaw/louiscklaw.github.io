#!/usr/bin/env bash

set -ex


docker compose kill
docker compose stop
docker compose up --build -d

docker compose logs -f
