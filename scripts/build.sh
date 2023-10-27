#!/usr/bin/env bash

set -ex

rm -rf ./node_modules/*

npm i -D
npm run dev

