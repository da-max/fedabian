FROM alpine:latest

LABEL maintainer="da-max@tutanota.com"
WORKDIR /var/www
COPY . .

# ===== Database requirements =====
RUN mkdir -p /data/db

# ===== Configure and install core packages =====
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add --no-cache mongodb python3 py3-pip nodejs yarn gcc python3-dev jpeg-dev zlib-dev libc-dev linux-headers

# ===== Install application dependances =====
RUN cd webapp && yarn
RUN cd api && pip3 install -r requirements.txt

# ===== Entrypoint =====
ENTRYPOINT ["./docker/production/docker-entrypoint.sh"]