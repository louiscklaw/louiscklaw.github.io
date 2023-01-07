---
title: Android testing stack
description: testing android application using appium, python and behave
date: '2019-05-02T19:47:09+02:00'
jobDate: 2019
Work: [testing, automation, programming]
techs: [appium, python, behave]
# thumbnail: android-testing-stack/android-testing-stack.svg
WorkingListThumbnail: https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
projectUrl: https://www.sampleorganization.org
draft: true
layout: works
---

{{< work-three-columns >}}

### Purpose:

to test mobile apps of hk observatory environment:

- linux
- appium
- python 3.6.1, behave, python-appium-client

### to setup:

```bash
$ pip install -r requirements.txt

# to execute:

$ virtualenv venv
$ source venv/bin/activate
```

### install python libraries:

```bash
$ pip install -r requirements.txt

# start appium -> connect to android / genymotion appium:

$ python behave
$ behave ./features/HKOApp_9DayForecast.feature
```

### stack on MAC machine:

```bash
$ brew cask install visual-studio-code
$ brew install zsh-history-substring-search
$ brew install zsh
$ brew install zsh-lovers
$ brew install zsh-autosuggestions
$ brew install zsh-navigation-tools
$ brew install zsh-completions
$ brew install zsh-syntax-highlighting
$ brew install zsh-git-prompt
$ brew install zshdb
$ brew install git-flow
```

<---> <!-- magic separator, between columns -->

### Demo:

##### passing example

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/Ce-v1zTHhwU" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

##### failing example

<iframe width="560" height="315" src="https://www.youtube.com/embed/uR8VLSwvf9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /work-three-columns >}}
