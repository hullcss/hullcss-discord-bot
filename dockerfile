FROM node:16.15.0

# Create the directory!
RUN mkdir -p /usr/hullcss
WORKDIR /usr/hullcss

# Copy and Install our bot
COPY package.json /usr/hullcss
RUN npm install

# Our precious bot
COPY . /usr/hullcss

# Start me!
VOLUME ["latest"]
CMD ["node", "index.js"] 