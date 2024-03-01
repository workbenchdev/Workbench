SHELL:=/bin/bash -O globstar
.PHONY: setup build lint unit test ci sandbox flatpak
.DEFAULT_GOAL := test

setup:
	flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
	flatpak remote-add --user --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
	flatpak install --or-update --user --noninteractive flathub-beta org.gnome.Sdk//46beta
	flatpak install --or-update --user --noninteractive flathub org.flatpak.Builder org.freedesktop.Sdk.Extension.rust-stable//23.08 org.freedesktop.Sdk.Extension.vala//23.08 org.freedesktop.Sdk.Extension.llvm16//23.08
	npm install
	make build

build:
	flatpak-builder --delete-build-dirs --disable-updates --build-only --ccache --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json

cli:
	 ./troll/gjspack/bin/gjspack src/cli/main.js --appid=re.sonny.Workbench.cli --prefix=/re/sonny/Workbench --resource-root=src/ --no-executable flatpak/files/share/re.sonny.Workbench.cli/
	cp src/cli/bin.js flatpak/files/bin/workbench-cli

lint:
# JavaScript
	./node_modules/.bin/eslint --max-warnings=0 src
# Rust
	./build-aux/fun rustfmt --check --edition 2021 src/**/*.rs
# Python
	./build-aux/fun black --check src/**/*.py
# Blueprint
	./build-aux/fun blueprint-compiler format src/**/*.blp
	./build-aux/fun workbench-cli check blueprint src/**/*.blp
# Vala
# ./build-aux/fun workbench-cli check vala src/**/*.vala
# CSS
	./build-aux/fun workbench-cli check css src/**/*.css
# Flatpak manifests
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder manifest --exceptions build-aux/re.sonny.Workbench.json
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder manifest --exceptions build-aux/re.sonny.Workbench.Devel.json

unit:
	./build-aux/fun gjs -m ./troll/tst/bin.js test/*.test.js

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
	./build-aux/fun workbench-cli ci demos/demos/Welcome

ci: setup test
	./build-aux/fun workbench-cli ci demos/demos/**

# Note that if you have Sdk extensions installed they will be used
# make sure to test without the sdk extensions installed
sandbox: setup
	flatpak-builder --ccache --user --install --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json
# flatpak remove --noninteractive org.freedesktop.Sdk.Extension.rust-stable//23.08 org.freedesktop.Sdk.Extension.vala//23.08 org.freedesktop.Sdk.Extension.llvm16//23.08
	flatpak run --command="bash" re.sonny.Workbench.Devel

flatpak:
	flatpak-builder --ccache --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json
# This is what Flathub does - consider moving to lint
	flatpak run --env=G_DEBUG=fatal-criticals --command=appstream-util org.flatpak.Builder validate flatpak/files/share/appdata/re.sonny.Workbench.Devel.appdata.xml
	flatpak run --command="desktop-file-validate" --filesystem=host:ro org.freedesktop.Sdk//23.08 flatpak/files/share/applications/re.sonny.Workbench.Devel.desktop
# appstreamcli validate --override=release-time-missing=info /path/to/your/app.metainfo.xml
	flatpak-builder --run flatpak build-aux/re.sonny.Workbench.Devel.json bash

# Sync with .gitignore
clean:
	rm -f re.sonny.Workbench.Devel.flatpak
	rm -f re.sonny.Workbench.flatpak
	rm -rf _build
	rm -rf .flatpak
	rm -rf .flatpak-builder
	rm -rf flatpak
	rm -rf flatpak-builder
	rm -rf repo
