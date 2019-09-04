.PHONY: test

BYWEEKLY=docker-compose run --rm by-weekly

update:
	docker-compose stop by-weekly
	$(BYWEEKLY) npm update
	docker-compose rm -f by-weekly
	docker-compose build by-weekly
