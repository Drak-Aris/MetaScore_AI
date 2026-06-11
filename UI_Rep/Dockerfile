FROM node:22-bookworm

RUN apt-get update && \
    apt-get install -y git python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /project

#docker compose up -d dev-env  docker compose exec dev-env /bin/bash