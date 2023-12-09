#!/usr/bin/env bash

set -ex

curl 'https://gptapi.apoidea.ai/v1/conversation/conversations' \
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0' \
    -H 'Accept: application/json, text/plain, */*' \
    -H 'Accept-Language: en-US,en;q=0.5' \
    -H 'Accept-Encoding: gzip, deflate, br' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RoZWxsb3dvcmxkMDRAZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiI3Z29vbG9va-WmueWmuSIsInJvbGUiOiJzdGFmZiIsInVzZXJJZCI6Ijg5ZWJmMWEyLWYxZWItNGJkNC1iYTI0LTBkMGIyM2ZiNzM4NyIsImNyZWF0ZWRBdCI6IjIwMjMtMTEtMzBUMDU6MTM6MzguOTQwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMTEtMzBUMDU6MTM6MzguOTQxWiIsImlhdCI6MTcwMTMyMTIxOH0.ajKMvXH-2xKR0mIM0wy1FZB4fUgMB7QEhcMbyPaKjig' \
    -H 'Origin: https://teamprompt.ai' \
    -H 'Connection: keep-alive' \
    -H 'Referer: https://teamprompt.ai/' \
    -H 'Sec-Fetch-Dest: empty' \
    -H 'Sec-Fetch-Mode: cors' \
    -H 'Sec-Fetch-Site: cross-site' \
    -H 'Pragma: no-cache' \
    -H 'Cache-Control: no-cache' \
    -H 'TE: trailers'
    