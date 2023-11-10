#!/usr/bin/env bash

set -ex

yarn

yarn build

chown 1000:1000 -R ./public
