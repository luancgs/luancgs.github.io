FROM node:lts

WORKDIR /app/

COPY src/ /app/src/
COPY public/ /app/public/

COPY package.json yarn.lock /app/
COPY express.js /app/

RUN yarn

RUN yarn add express

RUN yarn build

CMD [ "node", "express.js" ]