FROM node:20.2.0
RUN mkdir -p /usr/hullcss/src
WORKDIR /usr/hullcss/src
COPY package.json /usr/hullcss/src
RUN npm install
COPY . /usr/hullcss/src
CMD ["node", "src/index.js"]
