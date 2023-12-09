#!/usr/bin/env bash

set -ex

rm -rf gpt_email.md

python ./test.py > gpt_email.md
