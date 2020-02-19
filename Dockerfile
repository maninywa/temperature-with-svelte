FROM node
WORKDIR /
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine 
COPY . /usr/share/nginx/html
# COPY ./index.html /usr/share/nginx/html

# ENTRYPOINT npm install && npm run dev