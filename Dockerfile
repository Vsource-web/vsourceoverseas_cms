# use node 18 LTS
FROM node:18-alpine AS builder
WORKDIR /srv/app

# install build deps
COPY package*.json ./
RUN npm ci

# copy source
COPY . .

RUN npm run build

FROM node:18-alpine AS runtime
WORKDIR /srv/app
ENV NODE_ENV=production

COPY --from=builder /srv/app/package*.json ./
COPY --from=builder /srv/app/node_modules ./node_modules
COPY --from=builder /srv/app/build ./build
COPY --from=builder /srv/app/public ./public
COPY --from=builder /srv/app ./

# expose port
EXPOSE 1337

CMD ["npm", "run", "start"]
