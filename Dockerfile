FROM node:alpine AS builder
WORKDIR /app/frontend
COPY package.json .
RUN npm install --production
COPY . .
EXPOSE 3000
RUN npm run build

#Final image only copies what's needed
FROM node:alpine
WORKDIR /app/frontend
COPY --from=builder /app/frontend/build ./build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]