SHELL:=/bin/bash -O globstar
.PHONY: setup lint unit test ci sandbox flatpak
.DEFAULT_GOAL := ci

setup:
	flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
	flatpak install --or-update --user --noninteractive flathub org.gnome.Sdk//45 org.flatpak.Builder org.freedesktop.Sdk.Extension.rust-stable//23.08 org.freedesktop.Sdk.Extension.vala//23.08 org.freedesktop.Sdk.Extension.llvm16//23.08
	npm install
	flatpak-builder --delete-build-dirs --disable-updates --build-only --ccache --force-clean --stop-at=gst-plugin-gtk4 flatpak build-aux/re.sonny.Workbench.Devel.json

lint:
# JavaScript
	./node_modules/.bin/eslint --max-warnings=0 src
# Rust
	./build-aux/fun rustfmt --check --edition 2021 src/**/*.rs
# Python
	./build-aux/fun black --check src/**/*.py
# Blueprint
	./build-aux/fun blueprint-compiler format src/**/*.blp
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

ci: setup unit lint
	flatpak-builder --ccache --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json

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
