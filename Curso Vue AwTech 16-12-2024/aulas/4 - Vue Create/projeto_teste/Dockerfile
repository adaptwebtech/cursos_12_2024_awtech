FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-slim
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist /app

EXPOSE 8080
CMD ["serve", "-s", ".", "-l", "8080"]
