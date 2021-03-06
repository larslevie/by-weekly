FROM node:dubnium-stretch-slim
LABEL author="Lars Levie <larslevie@gmail.com>"

WORKDIR /opt/by-weekly

COPY package*.json ./
RUN npm install --no-save

COPY webpack.config.common.js webpack.config.prod.js .eslintrc .babelrc ./
COPY public ./public
COPY src ./src
COPY bin ./bin

RUN ./bin/build
