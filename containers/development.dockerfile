FROM node:18

# Install app dependencies
COPY package*.json ./
RUN npm install