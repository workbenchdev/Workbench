
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

pot:
# https://github.com/mesonbuild/meson/blob/cc8e67ce59c3b0274bc9f10cb287d5254aa74166/mesonbuild/modules/i18n.py#L97
	@find data src -path src/lib -prune -o -type f \( -iname \*.blp -o -iname \*.js -o -iname \*.xml -o -iname \*.desktop \) -print0 | xargs -0 xgettext --from-code=UTF-8 --no-wrap --add-comments --sort-by-file --package-name=re.sonny.Workbench --copyright-holder="Sonny Piers" --keyword="_" --keyword="C_" --output po/re.sonny.Workbench.pot 2>/dev/null
	@echo "Pot file updated"
# https://gitlab.com/freedesktop-sdk/freedesktop-sdk/-/issues/1427
# flatpak run --filesystem=$PWD --devel --command="sh" org.gnome.Sdk//42 -c 'make pot'
