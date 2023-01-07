---
title: mqtt tryout
description: mqtt tryout
date: '2019-05-02T19:47:09+02:00'
jobDate: 2019
techs: [mqtt, python]
thumbnail: opencm3-eval-board/eval_board.png
projectUrl: https://github.com/louiscklaw/mqtt-tryout
draft: true
WorkingListThumbnail: https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
---

testing mqtt

### helloworld

- subscriber
  `mosquitto_sub -h test.mosquitto.org -t "test/logic/DO"`

- publisher
  `mosquitto_pub -h test.mosquitto.org -t "test/logic/DO" -m "Hello"`
