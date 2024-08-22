FROM node:current-alpine3.19

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY main.js  main.js

ENTRYPOINT ["node", "main.js"]
