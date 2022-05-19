
.PHONY: test

lint:
	./node_modules/.bin/eslint --cache --max-warnings=0 src/

test: lint
  # https://github.com/ximion/appstream/issues/398#issuecomment-1129454985
	# flatpak run org.freedesktop.appstream.cli validate --override=release-time-missing=info --no-net data/re.sonny.Workbench.metainfo.xml
	desktop-file-validate --no-hints data/re.sonny.Workbench.desktop
	# https://discourse.gnome.org/t/gtk-builder-tool-requires-and-libraries/9222
	# gtk-builder-tool validate src/*.ui
	flatpak-builder --show-manifest re.sonny.Workbench.json > /dev/null
	find po/ -type f -name "*po" -print0 | xargs -0 -n1 msgfmt -o /dev/null --check
