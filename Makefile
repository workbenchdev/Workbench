SHELL:=/bin/bash -O globstar
.PHONY: setup lint unit test ci
.DEFAULT_GOAL := ci

setup:
	flatpak remote-add --user --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
	flatpak install --user --noninteractive flathub-beta org.gnome.Sdk//45beta
	flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
	flatpak install --user --noninteractive flathub org.flatpak.Builder
	npm install

lint:
	./node_modules/.bin/rome ci .
	flatpak run --user --command=/usr/lib/sdk/rust-stable/bin/rustfmt --filesystem=host:ro org.gnome.Sdk//45beta --check --edition 2021 **/*.rs
	find po/ -type f -name "*po" -print0 | xargs -0 -n1 msgfmt -o /dev/null --check
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder --exceptions re.sonny.Workbench.json
	flatpak run --user --command=flatpak-builder-lint org.flatpak.Builder --exceptions re.sonny.Workbench.Devel.json

unit:
	flatpak run --user --filesystem=host:ro --command="gjs" org.gnome.Sdk//45beta -m ./troll/tst/bin.js test/*.test.js

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
