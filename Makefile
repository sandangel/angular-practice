PERM = chown -hR $(shell stat -f '%u:%g' .) ./

ARGS = $(filter-out $@,$(MAKECMDGOALS))

#yarn

start:
	@docker-compose up

init:
	@docker-compose run --rm angular sh -c "yarn init && $(PERM)"

install:
	@docker-compose run --rm angular sh -c "yarn install && $(PERM)"

upgrade:
	@docker-compose run --rm angular sh -c "yarn upgrade && $(PERM)"

upgrade-interactive:
	@docker-compose run --rm angular sh -c "yarn upgrade-interactive && $(PERM)"

clean:
	@docker-compose down

add:
	@docker-compose run --rm angular sh -c "yarn add $(ARGS) && $(PERM)"

add-dev:
	@docker-compose run --rm angular sh -c "yarn add -D $(ARGS) && $(PERM)"

remove:
	@docker-compose run --rm angular yarn remove $(ARGS)

restart:
	@docker-compose down
	@docker-compose up
	
.PHONY: start init install upgrade upgrade-interactive clean add add-dev remove restart

#angular-cli

new:
	@docker-compose run --rm angular sh -c "ng new $(ARGS) --style=scss && $(PERM) && mv Makefile docker-compose.yml $(ARGS)"

g-c:
	@docker-compose run --rm angular sh -c "ng g c $(ARGS) && $(PERM)"

g-s:
	@docker-compose run --rm angular sh -c "ng g s $(ARGS) && $(PERM)"

build:
	@docker-compose run --rm angular sh -c "ng build && $(PERM)"

build-prod:
	@docker-compose run --rm angular sh -c "ng build -prod && $(PERM)"

%: ;

.PHONY: new g-c g-s build build-prod