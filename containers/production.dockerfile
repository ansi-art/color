FROM node:18

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production