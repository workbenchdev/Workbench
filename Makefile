SHELL:=/bin/bash -O globstar
ROOT := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
.PHONY: setup build lint unit test ci sandbox flatpak
.DEFAULT_GOAL := setup

setup:
	flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
	flatpak install --or-update --user --noninteractive flathub org.gnome.Sdk//50 org.flatpak.Builder org.freedesktop.Sdk.Extension.rust-stable//25.08 org.freedesktop.Sdk.Extension.vala//25.08 org.freedesktop.Sdk.Extension.llvm21//25.08 org.freedesktop.Sdk.Extension.node24//25.08 org.freedesktop.Sdk.Extension.typescript//25.08
# flatpak remote-add --user --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
# flatpak remote-add --user --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo
# flatpak install --or-update --user --noninteractive gnome-nightly org.gnome.Sdk//master
	git submodule update --init
	npm install --no-fund
	@echo "✅ You can use "make build" to build Workbench"

stable:
	foundry build build-aux/re.sonny.Workbench.json

devel:
	foundry build build-aux/re.sonny.Workbench.json build-aux/re.sonny.Workbench.Devel.json

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
	foundry devenv -- workbench-cli check blueprint $(ROOT)/src/**/*.blp
# Vala
	# foundry run -- workbench-cli check vala src/**/*.vala
# CSS
	foundry run -- workbench-cli check css $(ROOT)/src/**/*.css
# Flatpak manifests
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder manifest --exceptions --user-exceptions ./build-aux/exceptions.json build-aux/re.sonny.Workbench.json
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder manifest --exceptions --user-exceptions ./build-aux/exceptions.json build-aux/re.sonny.Workbench.Devel.json

unit:
	foundry run -- gjs -m $(ROOT)/troll/tst/bin.js $(ROOT)/test/*.test.js
#./build-aux/wip/run.js build-aux/re.sonny.Workbench.Devel.json -- gjs -m ./troll/tst/bin.js test/*.test.js

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
#	./build-aux/wip/run.js build-aux/re.sonny.Workbench.Devel.json -- workbench-cli ci demos/src/Welcome/

ci: setup build test
# See Permissions.js
# flatpak override --user --share=network --socket=pulseaudio --device=input re.sonny.Workbench.Devel
	foundry run -- workbench-cli ci $(ROOT)/demos/src/*

# # Note that if you have Sdk extensions installed they will be used
# # make sure to test without the sdk extensions installed
# sandbox: setup
# 	flatpak run org.flatpak.Builder --ccache --user --install --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json
# # flatpak remove --noninteractive org.freedesktop.Sdk.Extension.rust-stable//25.08 org.freedesktop.Sdk.Extension.vala//25.08 org.freedesktop.Sdk.Extension.llvm20//25.08
# 	flatpak run --command="bash" re.sonny.Workbench.Devel

flatpak:
	flatpak run org.flatpak.Builder --ccache --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json
# This is what Flathub does - consider moving to lint
	flatpak run --env=G_DEBUG=fatal-criticals --command=appstream-util org.flatpak.Builder validate flatpak/files/share/appdata/re.sonny.Workbench.Devel.appdata.xml
	flatpak run --command="desktop-file-validate" --filesystem=host:ro org.freedesktop.Sdk//25.08 flatpak/files/share/applications/re.sonny.Workbench.Devel.desktop
# appstreamcli validate --override=release-time-missing=info /path/to/your/app.metainfo.xml
	flatpak run org.flatpak.Builder --run flatpak build-aux/re.sonny.Workbench.Devel.json bash
