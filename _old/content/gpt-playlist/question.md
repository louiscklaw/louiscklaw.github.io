---
layout: 'hello'

title: beg-comment (english)
date: '2019-05-02'
jobDate: 2019

draft: false
tags: ['carousell']
---


### Question:

May I know how much GPU memory required to run this project?

I have a pretty small txt document (less than 10 words) and running inside docker on Linux with GTX1050 (4GB ram).

at the beginning, the "ingest" stage seems OK `python ingest.py`.

But it shows something like "out of memory" when i run command `python privateGPT.py`.

It seems to me that is consume the GPU memory (expected).

So i wonder if the GPU memory is enough for running privateGPT? 
If not, what is the requirement of GPU memory ?

P.S. The same procedure pass when running with CPU only.