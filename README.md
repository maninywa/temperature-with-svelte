# docker build

docker build .\ -t temperature

# alle images löschen

docker rmi \$(docker images -q) --force
