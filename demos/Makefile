SHELL:=/bin/bash -O globstar
.PHONY: format test ci
.DEFAULT_GOAL := ci

format:
# npx prettier --write src/*/*.json
	flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel format javascript src/*/*.js
	flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel format css src/*/*.css
	flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel format python src/*/*.py
	flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel format rust src/*/*.rs
	flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel format blueprint src/*/*.blp
	flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel format vala src/*/*.vala

test:
# list folders that have changed and run workbench-cli ci on them
# $$ is for the Makefile only - use $ otherwise
	git diff --name-only origin/main src | awk -F/ '{print $$1 FS $$2}' | uniq | xargs -d '\n' flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel ci

all:
	flatpak run --command="workbench-cli" --filesystem=host re.sonny.Workbench.Devel ci src/*

ci: test

# Sync with .gitignore
clean:
	rm -f src/*/settings
	rm -f src/*/workbench.vala
	rm -f src/*/main.ui
	rm -f src/*/libworkbenchcode.so
	rm -f src/*/Cargo.toml
	rm -f src/*/Cargo.lockfile
	rm -f src/*/lib.rs
	rm -f src/*/workbench.rs
	rm -f src/*/jsconfig.json
	rm -f src/*/*.gresource
	rm -f src/*/*.gresource.xml
	rm -rf src/*/target
	rm -rf src/*/__pycache__
