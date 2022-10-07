---
title: z transfer demo
description: simple command line utility to handle transferring file with ztransfer
date: '2019-05-02T19:47:09+02:00'
jobDate: 2019

techs: [android, appium, behave, python]
designs: [Photoshop]
thumbnail: z-transfer-demo/transfer_sh_banner.png
projectUrl: https://github.com/louiscklaw/car_tracking_tryout
plugins: ['viz']
draft: true
keywords: ['testing', 'android']
seo: ['file transfer', 'transfer.sh']
---

{{< work-two-columns >}}

{{< youtube_demo Y0K3-0SYzuY>}}

<---> <!-- magic separator, between columns -->

### What is this ?

[transfer.sh](https://transfer.sh/) is a simple file sharing service. Users can simply share files by uploading files to their web site.

This simple script can go a step further by compress files with password and upload it to [transfer.sh](https://transfer.sh/) and grab the link return from [transfer.sh](https://transfer.sh/) by using one command only.

### requirement

<!-- - {{< lang_icon ubuntu >}} -->
<!-- - {{< lang_icon python >}} -->

- ubuntu
- python
- pwgen
- curl
- p7zip-full

### How

1. install pwgen `pip3 install pwgen`
1. open `~/.bashrc` or `~/.zshrc`
1. paste the following source into it
1. logout from linux -> login
1. done

### Source

{{< gist f9a49076aff09449a5e5e0078b30ce65 >}}

### How to use?

1. `ztransfer <file_you_want_to_send>`
1. it return a link with transfer.sh

  <!-- end columns block -->

{{< /work-two-columns >}}
