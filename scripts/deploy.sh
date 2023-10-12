#!/usr/bin/env bash

set -ex

sudo chown 1000:1000 -R .

yarn deploy
