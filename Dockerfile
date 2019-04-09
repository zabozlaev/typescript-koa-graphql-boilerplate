FROM node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR ./dist

EXPOSE 8888

CMD [ "node", "src/index.js" ]
