# docker build

docker build .\ -t temperature

# alle images löschen

docker rmi \$(docker images -q) --force

# show running container

docker ps

# stop container

docker stop <dockerid>

# run container with port map (https://www.katacoda.com/courses/docker/create-nginx-static-web-server)

docker run -d -p 80:80 temperature
