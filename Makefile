include .env

.PHONY: start stop help build build-api
.DEFAULT_GOAL=start
WEBAPP_PORT?=3000
API_PORT?=4000

start: build-api stop ## Start docker-compose containers with target if is pass.
	docker-compose -f docker-compose.dev.yml up -d $(TARGET)
stop:
	docker-compose -f docker-compose.dev.yml stop $(TARGET)
build-api: ## APP_NAME is define in .env
	docker build -f api/Dockerfile.dev api -t $(APP_NAME)-api
build:
	docker build -f docker/production/Dockerfile -t $(APP_NAME) .
prod: build
	docker run -d -p 3000:$(WEBAPP_PORT) -p 4000:$(API_PORT) -v db:/data/db --env-file .env $(APP_NAME)