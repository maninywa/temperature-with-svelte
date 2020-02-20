FROM node
WORKDIR /
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine 
COPY . /usr/share/nginx/html

# EXPOSE 5000 
# ENTRYPOINT npm run serve
