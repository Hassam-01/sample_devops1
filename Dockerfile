FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .
RUN npm install typescript
RUN npm run build

EXPOSE 3010

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]