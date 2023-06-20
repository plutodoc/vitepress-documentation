.POSIX:
SHELL := /bin/bash
PNPM :=  $(shell which pnpm)
# Build the application
.PHONY: build
build:
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(PNPM) run build
	@echo -e "\033[32mBuild finished.\033[0m"
# Build the application
build-local:
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(PNPM) run build:local
	@echo -e "\033[32mBuild finished.\033[0m"
# Local development
dev:
	$(PNPM) run dev
# Install dependencies
install:
	@echo -e "\033[32mInstalling dependencies...\033[0m"
	$(PNPM) install
	@echo -e "\033[32mDependencies installed.\033[0m"
deploy: pull build-local
	rsync -av --delete ./.vitepress/dist/ justin@192.168.31.49:/share/Web/vitepress-documentation
### Git ###
# Git pull
pull:
	git pull
# Git push
push:
	git add --all
	git commit -m "feat: init project"
	git push
