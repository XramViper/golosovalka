dev:
	docker compose -f docker-compose.dev.yml up 

build:
	docker compose -f docker-compose.dev.yml up --build

stop:
	docker compose down
