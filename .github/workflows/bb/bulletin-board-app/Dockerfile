FROM node:current-slim

WORKDIR /usr/src/app
COPY bb/bulletin-board-app/package.json .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]

COPY . .
