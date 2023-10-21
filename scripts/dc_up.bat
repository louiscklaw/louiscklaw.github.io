
rmdir node_modules

docker run -it ^
  -v D:\_workspace\louiscklaw.github.io:/app ^
  -w /app ^
  -v temp_node_modules:/app/node_modules ^
  -p 3001 ^
  -p 8080:8080 ^
  --rm ^
  node:16-bullseye bash
