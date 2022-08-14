FROM node:16.16.0

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY pnpm-lock.yaml ./

RUN pnpm fetch

ADD . .
RUN pnpm install --offline

RUN pnpm run build

CMD [ "node", "dist/index.js"]