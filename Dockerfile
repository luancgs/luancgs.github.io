FROM node:18.17.1-alpine

WORKDIR /app/

COPY . /app/

RUN yarn

RUN yarn build

CMD ["yarn", "run", "start", "--host"]