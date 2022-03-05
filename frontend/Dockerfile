FROM node:17

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN yarn install

CMD ["yarn", "start"]