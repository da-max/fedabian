init:
	make start
start: stop
	docker-compose -f docker-compose.dev.yml up -d
stop:
	docker-compose -f docker-compose.dev.yml down

target: init