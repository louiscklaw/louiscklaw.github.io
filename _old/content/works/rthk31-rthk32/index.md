---
title: rthk31 rthk32 linux viewer
description: To watch rthk31, rthk32 from linux desktop.
date: '2019-05-02T19:47:09+02:00'
jobDate: 2019
Work: [linux]
techs: [linux, python, mpv, curl]
thumbnail: rthk31-rthk32/rthk31_rthk32.png
# projectUrl: https://github.com/louiscklaw/car_tracking_tryout
images: ['rthk31-rthk32/rthk31_rthk32.png']
WorkingListThumbnail: https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
---

to watch rthk31, rthk32 from linux desktop

<!-- more -->

### Whats is this ???

To connect to the world while you're working in linux environment at home......

Inspired by [Linux 桌面環境下收看 ViuTV](https://blog.wtako.net/view/23)

### Requirement:

- linux, gnome
- python3, curl, gnome-mpv

### Code:

{{< gist 6a0206c038bbe82a969c1b7677713fb3 >}}

### demo:

{{< youtube_demo hJdwEo4QNx8 >}}

#### updated 2019-07-28

##### to watch twitch under linux

###### install:

`pip3 install streamlink`

###### to use:

`streamlink --player mpv https://www.twitch.tv/shinjishinji1 720p`

##### to watch youtube under linux

###### install:

`pip3 install install youtube-dl mps-youtube==0.2.7`

###### to use:

```
$ mpsyt
> set show_video true
> exit
$ mpsyt playurl https://www.youtube.com/watch?v=wcnBl6gNIhQ
```

#### ViuTV

`mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/stream4/streamPlaylist.m3u8`
`mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/master.m3u8`

#### CableTV

`mpv http://media.fantv.hk/m3u8/archive/channel2.m3u8`

### Reference:

- [Linux 桌面環境下收看 ViuTV](https://blog.wtako.net/view/23)
