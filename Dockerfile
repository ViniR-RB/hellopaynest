FROM node:14.15.4-alpine3.12



RUN apk add --no-cache bash


RUN yarn add  @nestjs/cli@9.0.0

USER node


WORKDIR /home/node/app