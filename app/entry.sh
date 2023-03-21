#!/usr/bin/env bash
set -ex

npm i

npm run build

pushd _site
	npx http-serve .
