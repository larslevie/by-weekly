FROM node:dubnium-stretch-slim
LABEL author="Lars Levie <lars@levieindustries.com>"

WORKDIR /opt/oscar

COPY package*.json ./
RUN npm install --no-save

COPY webpack.config.js .eslintrc .babelrc ./
COPY public ./public
COPY src ./src
COPY bin ./bin

RUN ./bin/build

CMD ["bin/run"]
