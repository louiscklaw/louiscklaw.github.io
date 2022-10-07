---
title: Allwinner v3s tryout
description: To count the number of cars passing by images only.
date: 2019-05-02

tags: ['opencv', 'python', 'docker']
designs: [Photoshop]
thumbnail: allwinner-v3s-tryout/IMG_20181226_162800.jpg
projectUrl: https://github.com/louiscklaw/car_tracking_tryout
---

This is a project of making embedded linux working on the double-layer pcb.

<!-- more  -->

### this is a tryout of homemake embedded linux project using allwinner v3s chips inspired by

- [I made an Allwinner V3s evaluation board (based loosely on LicheePi)](https://www.reddit.com/r/electronics/comments/83141t/i_made_an_allwinner_v3s_evaluation_board_based/)

## progress

currently in progress, with the 2nd try
[the first try](https://github.com/louiscklaw/allwinner-v3s-tryout/tree/20181118-print-1)

- the first try
  {% img [1st try hardware] /images/IMG_20181219_003601.800.jpg [800] %}

- the second try
  CHANGE LOG: - fix SVREF wire - 4k7 on SDIO CLK wire - fix power facilities - add GL827L sdcard reading facilities - add ATMega328p for power and reset control - add USB to serial
  {% img [1st try hardware] /images/IMG_20181219_003601.800.jpg [800] %}

### buildroot

- to setup ubuntu/docker for buildroot(tested under 18.04)
  `sudo apt-get install iputils-ping vim git wget xz-utils bzip2 gcc device-tree-compiler python python-dev time make pkg-config`

## function currently working

- testing

## references

- [allwinner-v3s-tryout](https://github.com/louiscklaw/allwinner-v3s-tryout)
- [I made an Allwinner V3s evaluation board (based loosely on LicheePi)](https://www.reddit.com/r/electronics/comments/83141t/i_made_an_allwinner_v3s_evaluation_board_based/)
- [test](https://simonrichards.com/v3s/)

### BOM/Part list

### Reference/Helpers

- https://binefa.cat/blog/?p=80
