#!/usr/bin/env bash
import requests
import json
# from pprint import pprint

temp_preprompt = ''

with open('./preprompt.md','r') as f_preprompt:
    temp_preprompt = ''.join(f_preprompt.readlines())

with open("./question.md",'r') as f_question:
    temp_question = ''.join(f_question.readlines())

url = 'https://gptapi.apoidea.ai/v1/conversation/conversations'
headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0',
    'Accept': 'text/event-stream',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://teamprompt.ai/',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RoZWxsb3dvcmxkMDRAZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiI3Z29vbG9va-WmueWmuSIsInJvbGUiOiJzdGFmZiIsInVzZXJJZCI6Ijg5ZWJmMWEyLWYxZWItNGJkNC1iYTI0LTBkMGIyM2ZiNzM4NyIsImNyZWF0ZWRBdCI6IjIwMjMtMTEtMzBUMDU6MTM6MzguOTQwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMTEtMzBUMDU6MTM6MzguOTQxWiIsImlhdCI6MTcwMTMyMTIxOH0.ajKMvXH-2xKR0mIM0wy1FZB4fUgMB7QEhcMbyPaKjig',
    'Origin': 'https://teamprompt.ai',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'TE': 'trailers'
}

data = {
    "prompt": temp_preprompt + '\n' + temp_question,
    "stream": False
}

response = requests.post(url, headers=headers, json=data)

y = json.loads(response.text)
print(y['text'])

