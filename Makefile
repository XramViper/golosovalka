dev:
	docker compose -f docker-compose.dev.yml up 

build:
	docker compose -f docker-compose.dev.yml up --build

down:
	docker compose -f docker-compose.dev.yml down
