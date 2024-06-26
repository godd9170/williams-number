# base node image
FROM node:20-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

ENV NODE_ENV production

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json ./
RUN yarn install --production=false

# Setup production node_modules
FROM base as production-deps

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json ./

# Build the app
FROM base as build

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN yarn run build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV production

RUN mkdir /app
WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

ENV PORT 8080
CMD ["yarn", "run", "start"]