---
title: Slic3r-batch-export
description: An easy tool to export gcode from slic3r
date: '2019-05-02T19:47:09+02:00'
jobDate: 2019
techs: [python, libxdo, slic3r]
designs: [Photoshop]
thumbnail: slic3r-batch-export/slic3r_batch_2019-02-07_23-49.png
projectUrl: https://github.com/louiscklaw/slic3r_batch_export
WorkingListThumbnail: https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
---

An easy tool to export gcode from slic3r

<!-- more -->

### background

The option of slic3r command linx options wasn't availabe under linux as described.
The tools written to help perorming `export 3mf -> save to stl -> export gcode` as a batch operation.

{% asset_img "slic3r_documentation_2019-02-07_23-49.png" "from slic3r documenation, the export-gcode is an option from command line" %}

### How to use:

- Clone repo:

1. run under linux
1. `git clone git@github.com:louiscklaw/slic3r_batch_export.git`
1. `pip install libxdo`
1. update the file list in:
   - `file_3mf_list # for the list of 3mf files`
   - `WORKSPACE_DIR` and `PROJ_HOME`
   - `SLIC3R_ACTIVE_CONFIG` for slic3r configuration wanted
   - `SLIC3R_BIN_PATH` for slic3r binary
1. `python batch_slic3r.py`

## How it works:

{% youtube 5_bTsrpKEy0 %}
