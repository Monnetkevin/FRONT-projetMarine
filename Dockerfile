FROM node:18-alpine

WORKDIR /front-projetmarine/

COPY public/ ./public
COPY src/ ./src
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]