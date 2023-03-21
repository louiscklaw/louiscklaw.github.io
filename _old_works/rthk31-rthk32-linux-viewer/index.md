---
title: rthk31 rthk32 linux viewer

date: '2019-05-02'
jobDate: 2019

techs: [opencv, python, docker]
designs: [Photoshop]
thumbnail: opencv-car-counting/hk_traffic.jpg
projectUrl: https://github.com/louiscklaw/car_tracking_tryout
WorkingListThumbnail: https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
layout: works
---

{{< work-three-columns >}}

![](./thumbnail.png)

<---> <!-- magic separator, between columns -->

### Purpose:

To connect to the world while you’re working in linux environment at home…… inspired by https://blog.wtako.net/view/23

### Requirements:

- linux, gnome
- python3, curl, gnome-mpv

### how to install:

open ~/.bashrc or ~/.zshrc and paste the following source into itlogout linux -> login
done

### Source:

##### RTHK31

```bash
rthk31 () {
link=$(curl -s -L https://www.rthk.hk/feeds/dtt/rthktv31_https.m3u8 | python2 -c 'import sys; list=sys.stdin.readlines(); print list[list.index("#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2180000,RESOLUTION=1280x720,CODECS=\"avc1.66.30, mp4a.40.2\""\n")+1]') && mpv $link &
}
```

##### RTHK32

```bash
rthk32 () {
link=$(curl -s -L https://www.rthk.hk/feeds/dtt/rthktv31_https.m3u8 | python2 -c 'import sys; list=sys.stdin.readlines(); print list[list.index("#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2148000,RESOLUTION=1280x720,CODECS=\"avc1.66.30, mp4a.40.2\"\n")+1]') && mpv $link &
}
```

### to watch twitch under linux:

```bash
# to install

$ pip3 install streamlink

# to use

$ streamlink --player mpv https://www.twitch.tv/shinjishinji1 720p

to watch youtube under linux:

# to install

$ pip3 install install youtube-dl mps-youtube==0.2.7

# to use

$ mpsyt playurl https://www.youtube.com/watch?v=wcnBl6gNIhQ

# to watch ViuTV under linux:

# to install

$ mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/stream4/streamPlaylist.m3u8
$ mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/master.m3u8

# to watch CableTV under linux

$ mpv http://media.fantv.hk/m3u8/archive/channel2.m3u8

```

{{< /work-three-columns >}}
