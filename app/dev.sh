#!/usr/bin/env bash
set -ex

# export MY_ENVIRONMENT=Hello
export WHATSAPP_NUMBER=THIS_IS_LOUIS_WHATSAPP_NUMBER
export MY_ENVIRONMENT=production

npm i -D

rm -rf _site/*

# npm run start
npm run dev
