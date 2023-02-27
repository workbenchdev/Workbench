# Contributing

Thank you for considering contributing to Workbench. Feel free to [get in touch](https://matrix.to/#/%23workbench:gnome.org).

## Development

### Setup

If you know what you are doing you can also use VSCode with the extensions recommended in this workspace or anything else you are comfortable with.

The following is the simplest solution

1. Install [GNOME Builder](https://apps.gnome.org/app/org.gnome.Builder/)
2. Open Builder and select "Clone Repository..."
3. Clone `https://github.com/sonnyp/Workbench.git` (or your fork)
4. Press the Run ▶ button

If you used an other method, don't forget to fetch the submodules.

```sh
cd Workbench
git submodule update
```

Make sure that you're building the development target (`re.sonny.Workbench.Devel`).

### Learn

Here is a compilation of resources to learn more about the GNOME platform.

* [Workbench](https://github.com/sonnyp/Workbench) 😉
* [GObject](https://gjs.guide/guides/gobject/basics.html#gobject-construction)
* [GTK4 + GJS Book](https://rmnvgr.gitlab.io/gtk4-gjs-book/)
* [Asynchronous programming](https://gjs.guide/guides/gjs/asynchronous-programming.html#the-main-loop)
* [API references](https://gjs-docs.gnome.org/) make sure to enable at least GTK, GJS, GLib, Gio
* [GJS docs](https://gitlab.gnome.org/GNOME/gjs/-/tree/master/doc)
* [GJS examples](https://gitlab.gnome.org/GNOME/gjs/-/tree/master/examples)

### Library

Library examples and demos have 3 functions

1. Showcase the capabilities of the platform
2. Teach how to use the APIs, patterns and widgets
3. Provide functional snippets ready to use

The easiest way to get started is to write an entry within Workbench directly.

Keep them concise and interactive. They should have links to learn more about the topics covered. Make sure to follow the patterns of similar/existing entries.

* [Check here for ideas](https://github.com/sonnyp/Workbench/issues/69)
* Start with something small and accessible
* Make sure to select "Blueprint" instead of "XML" in the UI panel

Once you're satisfied with the result - you can send a pull request to include it in Workbench. All you need to do is add the files to [`src/Library`](./src/Library).

Make sure it's working by rebuilding Workbench and launching your entry via the Library. If not - double check what you did and compare with other Library entries.

## Debugging

To view debug logs, use the following command in [`src/workbench`](../src/workbench).

```sh
--command "G_MESSAGES_DEBUG=\"@app_id@\" @app_id@ $@"
```

See also

* [GJS Logging](https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/Logging.md)
* [Flatpak Debugging](https://docs.flatpak.org/en/latest/debugging.html)

<!--
## Translation

If you'd like to help translating Workbench into your language, please head over to [Weblate](https://hosted.weblate.org/engage/workbench/).

<a href="https://hosted.weblate.org/engage/workbench/">
  <img src="https://hosted.weblate.org/widgets/workbench/-/workbench/multi-auto.svg" alt="Translation status" />
</a>

Thank you for your help!
-->
