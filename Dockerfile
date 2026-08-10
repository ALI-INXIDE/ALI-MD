FROM node:20-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        ca-certificates \
        curl \
        build-essential \
        python3 \
        libwebp-dev \
        imagemagick && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .

RUN mkdir -p sessions database temp

ENV PORT=5000
EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:5000/health || exit 1

CMD ["npm", "start"]
