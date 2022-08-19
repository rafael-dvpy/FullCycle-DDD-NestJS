FROM node:16-alpine

RUN apk add git sqlite

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/start.sh" ]