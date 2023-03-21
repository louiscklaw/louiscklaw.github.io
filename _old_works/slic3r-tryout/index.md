---
title: slic3r tryout
description: An easy tool to export gcode from slic3r.
date: '2019-05-02T19:47:09+02:00'
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

### What is it ?:

An easy tool to export gcode from slic3r.

### background:

The option of slic3r command linx options wasn’t availabe under linux as described. The tools written to help perorming export 3mf -> save to stl -> export gcode as a batch operation.

### how to use:

```bash
# Clone repo:
# run under linux

$ git clone git@github.com:louiscklaw/slic3r_batch_export.git

$ pip install libxdo

# update the file list in:
file_3mf_list # for the list of 3mf files
WORKSPACE_DIR and PROJ_HOME
SLIC3R_ACTIVE_CONFIG for slic3r configuration wanted
SLIC3R_BIN_PATH for slic3r binary

$ python batch_slic3r.py
```

### References / Repositories:

[louiscklaw/slic3r_batch_export](louiscklaw/slic3r_batch_export)

{{< /work-three-columns >}}
