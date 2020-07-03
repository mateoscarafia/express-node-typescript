FROM node:8.15-alpine

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 80

#Development
CMD ["npm", "run", "start"]
