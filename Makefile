SHELL:=/bin/bash -O globstar
ROOT := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
.PHONY: setup build lint unit test ci sandbox flatpak
.DEFAULT_GOAL := setup
FLATPAK_ARGS ?=

setup:
	flatpak $(FLATPAK_ARGS) remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
	flatpak $(FLATPAK_ARGS) install --or-update --noninteractive flathub org.gnome.Sdk//50 org.flatpak.Builder org.freedesktop.Sdk.Extension.rust-stable//25.08 org.freedesktop.Sdk.Extension.vala//25.08 org.freedesktop.Sdk.Extension.llvm22//25.08 org.freedesktop.Sdk.Extension.node26//25.08 org.freedesktop.Sdk.Extension.typescript//25.08
# flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
# flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo
# flatpak install --or-update --noninteractive gnome-nightly org.gnome.Sdk//master
	git submodule update --init
	npm install --no-fund
	@echo "✅ You can use "make build" to build Workbench"

stable:
	foundry build build-aux/re.sonny.Workbench.json

devel:
	foundry build build-aux/re.sonny.Workbench.Devel.json

build: devel

cli:
	./troll/gjspack/bin/gjspack src/cli/main.js --appid=re.sonny.Workbench.cli --prefix=/re/sonny/Workbench --resource-root=src/ --no-executable flatpak/files/share/re.sonny.Workbench.cli/
	cp src/cli/bin.js flatpak/files/bin/workbench-cli # FIXME

lint:
# JavaScript
	./node_modules/.bin/eslint --max-warnings=0 src
# Rust
	foundry devenv -- rustfmt --check --edition 2021 $(ROOT)/src/**/*.rs
# Python
	foundry devenv -- ruff check --config=$(ROOT)/src/langs/python/ruff.toml $(ROOT)/src/**/*.py
	foundry devenv -- ruff format --config=$(ROOT)/src/langs/python/ruff.toml --check $(ROOT)/src/**/*.py
# Blueprint
	foundry devenv -- blueprint-compiler format $(ROOT)/src/**/*.blp
	foundry run -- workbench-cli check blueprint $(ROOT)/src/**/*.blp
# Vala
	# foundry run -- workbench-cli check vala $(ROOT)/src/**/*.vala
# CSS
	foundry run -- workbench-cli check css $(ROOT)/src/**/*.css
# Flatpak manifests
	flatpak run --command=flatpak-builder-lint org.flatpak.Builder manifest --exceptions --user-exceptions ./build-aux/exceptions.json build-aux/re.sonny.Workbench.json
	flatpak run --command=flatpak-builder-lint org.flatpak.Builder manifest --exceptions --user-exceptions ./build-aux/exceptions.json build-aux/re.sonny.Workbench.Devel.json

unit:
	foundry run -- gjs -m $(ROOT)/troll/tst/bin.js $(ROOT)/test/*.test.js

# https://github.com/ximion/appstream/issues/398#issuecomment-1129454985
# flatpak run org.freedesktop.appstream.cli validate --override=release-time-missing=info --no-net data/app.metainfo.xml
#	desktop-file-validate --no-hints data/app.desktop
# https://discourse.gnome.org/t/gtk-builder-tool-requires-and-libraries/9222
# gtk-builder-tool validate src/*.ui
# flatpak run org.flathub.flatpak-external-data-checker re.sonny.Workbench.json
# flatpak run org.flathub.flatpak-external-data-checker re.sonny.Workbench.Devel.json
# as used by Flathub
# flatpak run --env=G_DEBUG=fatal-criticals --command=appstream-util org.flatpak.Builder validate data/app.metainfo.xml

test: unit lint
	foundry run -- workbench-cli ci $(ROOT)/demos/src/Welcome

install:
	artifact=$$(foundry export \
		| grep -oE 'file://[^[:space:]]+' \
		| tail -n1 \
		| sed 's|^file://||'); \
	test -n "$$artifact" || { echo "No artifact found"; exit 1; }; \
	flatpak $(FLATPAK_ARGS) install --assumeyes "$$artifact"

ci: setup build test install
# We install because foundry has no flag to override permissions
# see Permissions.js for why we need them
	flatpak run --command="workbench-cli" --share=network --socket=pulseaudio --device=input --filesystem=$(ROOT) re.sonny.Workbench.Devel ci $(ROOT)/demos/src/*


flatpak:
	flatpak run org.flatpak.Builder --ccache --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json
# This is what Flathub does - consider moving to lint
	flatpak run --env=G_DEBUG=fatal-criticals --command=appstream-util org.flatpak.Builder validate flatpak/files/share/appdata/re.sonny.Workbench.Devel.appdata.xml
	flatpak run --command="desktop-file-validate" --filesystem=host:ro org.freedesktop.Sdk//25.08 flatpak/files/share/applications/re.sonny.Workbench.Devel.desktop
# appstreamcli validate --override=release-time-missing=info /path/to/your/app.metainfo.xml
	flatpak run org.flatpak.Builder --run flatpak build-aux/re.sonny.Workbench.Devel.json bash
