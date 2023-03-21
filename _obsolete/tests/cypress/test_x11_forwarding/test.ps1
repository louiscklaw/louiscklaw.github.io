docker build -t firefox .

set-variable -name DISPLAY -value 192.168.10.180:0.0

docker run -ti --rm -e DISPLAY=$DISPLAY firefox
