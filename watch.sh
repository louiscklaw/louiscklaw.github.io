#!/usr/bin/env bash

set -ex

find **/*.md |entr -c -s "touch src/layouts/home.njk"