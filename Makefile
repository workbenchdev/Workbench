SHELL:=/bin/bash -O globstar
.PHONY: setup lint unit test ci sandbox flatpak
.DEFAULT_GOAL := ci

setup:
	flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
	flatpak install --or-update --user --noninteractive flathub org.gnome.Sdk//45 org.gnome.Sdk.Docs//45 org.flatpak.Builder org.freedesktop.Sdk.Extension.rust-stable//23.08 org.freedesktop.Sdk.Extension.node18//23.08 org.freedesktop.Sdk.Extension.vala//23.08 org.freedesktop.Sdk.Extension.llvm16//23.08
	npm install

lint:
# ESLint
	flatpak run --user --command=/usr/lib/sdk/node18/bin/node --filesystem=host:ro org.gnome.Sdk//45 node_modules/.bin/eslint --max-warnings=0 src
# rustfmt
	flatpak run --user --command=/usr/lib/sdk/rust-stable/bin/rustfmt --filesystem=host:ro org.gnome.Sdk//45 --check --edition 2021 src/**/*.rs
# gettext
	find po/ -type f -name "*po" -print0 | xargs -0 -n1 msgfmt -o /dev/null --check
# Flatpak manifests
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder --exceptions build-aux/re.sonny.Workbench.json
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder --exceptions build-aux/re.sonny.Workbench.Devel.json

unit:
	flatpak run --user --filesystem=host:ro --command="gjs" org.gnome.Sdk//45 -m ./troll/tst/bin.js test/*.test.js

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

# Note that if you have Sdk extensions installed they will be used
# make sure to test without the sdk extensions installed
sandbox: setup
	flatpak-builder --ccache --user --install --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json
# flatpak remove --noninteractive org.gnome.Sdk.Docs//45 org.freedesktop.Sdk.Extension.rust-stable//23.08 org.freedesktop.Sdk.Extension.vala//23.08 org.freedesktop.Sdk.Extension.llvm16//23.08
	flatpak run --command="bash" re.sonny.Workbench.Devel

flatpak: setup
	flatpak-builder --ccache --force-clean flatpak build-aux/re.sonny.Workbench.Devel.json
# This is what Flathub does - consider moving to lint
	flatpak run --env=G_DEBUG=fatal-criticals --command=appstream-util org.flatpak.Builder validate flatpak/files/share/appdata/re.sonny.Workbench.Devel.appdata.xml
	flatpak run --command="desktop-file-validate" --filesystem=host:ro org.freedesktop.Sdk//23.08 flatpak/files/share/applications/re.sonny.Workbench.Devel.desktop
# appstreamcli validate --override=release-time-missing=info /path/to/your/app.metainfo.xml
	flatpak-builder --run flatpak build-aux/re.sonny.Workbench.Devel.json bash
