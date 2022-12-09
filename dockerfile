FROM debian:buster-slim

ENV DEBIAN_FRONTEND noninteractive
RUN ln -fs /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime

RUN sed -i 's/http:\/\/archive\.ubuntu\.com/http:\/\/ftp\.cuhk\.edu\.hk\/pub\/Linux/g' /etc/apt/sources.list && \
  sed -i 's/http:\/\/security\.ubuntu\.com/http:\/\/ftp\.cuhk\.edu\.hk\/pub\/Linux/g' /etc/apt/sources.list

RUN apt update &&\
  apt-get install -qyy wget curl

# https://github.com/gohugoio/hugo/releases

RUN cd /tmp &&\
  wget https://github.com/gohugoio/hugo/releases/download/v0.103.1/hugo_0.103.1_linux-amd64.deb &&\
  apt install -qyy ./hugo_0.103.1_linux-amd64.deb

RUN apt update &&\
  apt-get install -qyy entr

RUN cd ~ &&\
  curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh &&\
  bash /tmp/nodesource_setup.sh &&\
  apt update &&\
  apt install -qyy nodejs &&\
  node -v && npm -v

CMD ['sleep infinity']
