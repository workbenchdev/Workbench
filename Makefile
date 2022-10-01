
.PHONY: test

lint:
	./node_modules/.bin/eslint --cache --max-warnings=0 src/

test: lint
	./troll/tst/bin.js test/*.test.js
# https://github.com/ximion/appstream/issues/398#issuecomment-1129454985
# flatpak run org.freedesktop.appstream.cli validate --override=release-time-missing=info --no-net data/app.metainfo.xml
#	desktop-file-validate --no-hints data/app.desktop
# https://discourse.gnome.org/t/gtk-builder-tool-requires-and-libraries/9222
# gtk-builder-tool validate src/*.ui
	flatpak-builder --show-manifest re.sonny.Workbench.json > /dev/null
	flatpak-builder --show-manifest re.sonny.Workbench.Devel.json > /dev/null
	find po/ -type f -name "*po" -print0 | xargs -0 -n1 msgfmt -o /dev/null --check
