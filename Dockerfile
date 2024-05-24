FROM node:20.3.1
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "dep"]
