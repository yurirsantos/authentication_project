FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start"]
