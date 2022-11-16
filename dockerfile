FROM node:14.13.1-buster-slim

RUN apt-get update && \
  apt-get install -y nodejs

COPY . /home
WORKDIR /home

RUN npm install && \
    npm i @expo/ngrok@^4.1.0

ENTRYPOINT ["npm", "run"]
CMD ["start-prod"]