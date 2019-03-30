FROM node:10.15.3-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 3333
CMD [ "npm", "run", "serve" ]
