FROM debian:buster-slim

ENV DEBIAN_FRONTEND noninteractive

RUN ln -fs /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime

RUN apt update &&\
  apt-get install -qqy wget curl

# https://github.com/gohugoio/hugo/releases

RUN cd /tmp &&\
  wget https://github.com/gohugoio/hugo/releases/download/v0.103.1/hugo_extended_0.103.1_linux-amd64.deb  &&\
  apt install -qqy ./hugo_extended_0.103.1_linux-amd64.deb 

RUN apt update &&\
  apt-get install -qqy entr

RUN cd ~ &&\
  curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh &&\
  bash /tmp/nodesource_setup.sh &&\
  apt update &&\
  apt install -qqy nodejs &&\
  node -v && npm -v

CMD ['sleep infinity']
