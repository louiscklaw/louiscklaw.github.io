---
title: rthk31-rthk32
description: A personal page to help search APIs provided by hk government. Also trying using gatsby.
permalink: works/{{ title | slug }}/index.html
date: "2020-11-18"
updated: "2021-02-12"
tags: [linux, bash, shell]
open_to_public: true
---

![](/images/works/rthk31-rthk32.avif)


my simple way to watch rthk31, rthk32 from linux desktop

## Whats is this ???

To connect to the world while you’re working in linux environment at home...

Inspired by Linux 桌面環境下收看 ViuTV

### Requirement:

- linux, gnome
- python3, curl, gnome-mpv


### Code/Demo:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hJdwEo4QNx8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### updated 2019-07-28

#### install:

```bash
pip3 install streamlink
```

#### to use:

```bash
streamlink --player mpv https://www.twitch.tv/shinjishinji1 720p
```

to watch youtube under linux

#### install:

```bash
pip3 install install youtube-dl mps-youtube==0.2.7
```

#### to use:

$ mpsyt
> set show_video true
> exit
$ mpsyt playurl https://www.youtube.com/watch?v=wcnBl6gNIhQ


#### ViuTV:

```bash
mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/stream4/streamPlaylist.m3u8 mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/master.m3u8
```

#### CableTV:

```bash
mpv http://media.fantv.hk/m3u8/archive/channel2.m3u8
```


### Reference:

<a href="https://blog.wtako.net/view/23">Linux 桌面環境下收看 ViuTV</a>