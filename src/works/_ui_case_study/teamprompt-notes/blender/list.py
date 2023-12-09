#!/usr/bin/env bash
import os, sys
import requests
import json
from pprint import pprint

temp_preprompt = ""

with open("./preprompt.md", "r") as f_preprompt:
    temp_preprompt = "".join(f_preprompt.readlines())

with open("./question.md", "r") as f_question:
    temp_question = "".join(f_question.readlines())

url = "https://gptapi.apoidea.ai/v1/conversation/conversations"
headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0",
    "Accept": "text/event-stream",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "Referer": "https://teamprompt.ai/",
    "Content-Type": "application/json",
    "Authorization": os.getenv("BEARER"),
    "Origin": "https://teamprompt.ai",
    "Connection": "keep-alive",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "TE": "trailers",
}

data = {"prompt": temp_preprompt + "\n" + temp_question, "stream": False}

response = requests.get(url, headers=headers)

y = json.loads(response.text)
conversationIds = list(map(lambda x: x["conversationId"], y))
# pprint(y[0]['conversationId'])
pprint(conversationIds)
