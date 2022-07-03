<img style="vertical-align: middle;" src="data/icons/hicolor/scalable/apps/re.sonny.Workbench.svg" width="120" height="120" align="left">

# Workbench

Learn and prototype with GNOME technologies

![](data/workbench.gif)

<a href='https://beta.flathub.org/apps/details/re.sonny.Workbench'><img width='180' height='60' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.svg'/></a>

Workbench goal is to let you experiment with GNOME technologies, no matter if tinkering for the first time or building and testing a GTK user interface.

Among other things, Workbench comes with

- realtime GTK/CSS preview
- library of examples
- JavaScript and Vala runs without any setup
- XML and Blueprint for describing user interface
- syntax highlighting, undo/redo, autosave, session restore
- code formatter
- console logs

## Tips and tricks

<details>
  <summary>Disable code formatting</summary>

Workbench uses the [prettier](https://prettier.io/) code formatter. If you need to exclude some code you can use special comments.

[JavaScript](https://prettier.io/docs/en/ignore.html#javascript)

```js
// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
);
```

[XML](https://github.com/prettier/plugin-xml#ignore-ranges)

```xml
<foo>
  <!-- prettier-ignore-start -->
    <this-content-will-not-be-formatted     />
  <!-- prettier-ignore-end -->
</foo>
```

[CSS](https://prettier.io/docs/en/ignore.html#css)

```css
/* prettier-ignore */
.my    ugly rule
{

}
```

</details>

<details>
  <summary>Turn a prototype made in Workbench into an application</summary>

Use GNOME Builder to start a new project using the appropriate GNOME Application template and copy paste your Workbench code.

</details>

## Translation

If you'd like to help translating Workbench into your language, please head over to [Weblate](https://hosted.weblate.org/engage/workbench/).

<a href="https://hosted.weblate.org/engage/workbench/">
  <img src="https://hosted.weblate.org/widgets/workbench/-/workbench/multi-auto.svg" alt="Translation status" />
</a>

Thank you for your help!

## Development

1. Install [GNOME Builder](https://apps.gnome.org/app/org.gnome.Builder/)
2. Open Builder and select "Clone Repository..."
3. Clone `https://github.com/sonnyp/Workbench.git` (or your fork)
4. Press the Run ▶ button

If you used an other method, don't forget to fetch the submodules.

```sh
cd Workbench
git submodule update
```

Feel free to come by [#workbench:matrix.org](https://matrix.to/#/#workbench:matrix.org).

## Packaging

Please do not attempt to package Workbench any other way than as a Flatpak application.

It is unsupported and may put users at risk.

## Credits

Workbench would not be possible without

GTK, GLib, Flatpak, GtkSourceView, libadwaita, VTE, GJS, Blueprint, icon-development-kit, Vala

and the GNOME community 🖤

## Copyright

© 2022 [Sonny Piers](https://github.com/sonnyp) and contributors

## License

GPLv3. Please see [COPYING](COPYING) file.

Except for everything under src/Library/demos which is in the public domain under the terms of [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).

## Maintainers

### Update icons

```
cd icon-development-kit-www
git pull
cd ..
cp -r icon-development-kit-www/img/symbolic/**/*.svg data/icons/hicolor/scalable/actions/
cat icon-development-kit-www/_data/icons.yaml | python -c 'import sys, yaml, json; print(json.dumps(yaml.safe_load(sys.stdin.read())))' > src/icon-development-kit.json
```
