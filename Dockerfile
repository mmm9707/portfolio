FROM node:8.9.0-alpine

RUN apk add --update --upgrade --no-cache tini \
  libc6-compat

RUN mkdir /home/service
WORKDIR /home/service

RUN yarn global add @angular/cli

COPY package.json .

RUN yarn install

RUN rm -rf /tmp/*

COPY . .

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
