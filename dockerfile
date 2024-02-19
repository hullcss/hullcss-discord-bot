FROM node:21.6.2
RUN mkdir -p /usr/hullcss/src
WORKDIR /usr/hullcss/src
COPY package.json /usr/hullcss/src
RUN npm install
COPY . /usr/hullcss/src
CMD ["node", "src/index.js"]
