FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

FROM build-stage
COPY . .
RUN yarn run build
CMD [ "yarn", "run","start:prod" ]


