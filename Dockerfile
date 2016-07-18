FROM node:6.2.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run dist

EXPOSE 5006

CMD [ "npm", "run", "server" ]
