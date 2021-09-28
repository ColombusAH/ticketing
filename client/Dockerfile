FROM node:alpine as buildContainer
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
# max-old-space is needed to avoid any compilation issues because of missing memory
ENV NODE_OPTIONS --max-old-space-size=2048
RUN npm run build:ssr

FROM node:alpine

WORKDIR /app
COPY --from=buildContainer ./app/package.json .

# Get all the code needed to run the app
RUN mkdir dist
COPY --from=buildContainer ./app/dist dist

EXPOSE 4000

ENV NODE_ENV production
CMD ["npm", "run", "serve:ssr"]