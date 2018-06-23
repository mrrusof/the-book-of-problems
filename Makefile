DOCKER_SRC=Dockerfile dist $(shell find apache2 -type f -a \! -name '*~' -a \! -name '.*')
DIST_SRC=$(shell find app config public -type f -a -name .htaccess -o \! -name '*~' -a \! -name '.*')
REPO=mrrusof/the-book-of-problems
TAG=latest
TOJ_HOST ?= http://thebookofproblems.com:3000
TC_HOST ?= http://thebookofproblems.com:8080

all: build

build: .docker

.docker: $(DOCKER_SRC)
	docker build --tag $(REPO):$(TAG) .
	touch .docker

dist: $(DIST_SRC)
	rm -rf dist
	TOJ_HOST=$(TOJ_HOST) \
	TC_HOST=$(TC_HOST) \
	ember build --environment=production

exec: build
	docker run -p 8089:80 $(REPO):$(TAG)

push: build
	docker push $(REPO):$(TAG)

clean:
	rm -rf tmp dist
	docker rmi --force $(REPO) || true

.PHONY: all build exec push clean
