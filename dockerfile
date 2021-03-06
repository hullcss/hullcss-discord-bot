FROM node:16.15.0

RUN mkdir -p /usr/hullcss
WORKDIR /usr/hullcss

COPY package.json /usr/hullcss
RUN npm install

COPY . /usr/hullcss

CMD ["node", "index.js"]
