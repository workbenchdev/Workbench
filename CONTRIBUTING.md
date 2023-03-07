# Contributing

Thank you for considering contributing to Workbench. Feel free to [get in touch](https://matrix.to/#/%23workbench:gnome.org).

## Development

### Setup

The following is the recommended setup:

1. Install [GNOME Builder from Flathub](https://flathub.org/apps/details/org.gnome.Builder)
2. [Enable GNOME Nightly repository](https://wiki.gnome.org/Apps/Nightly#Setting_up_GNOME_nightlies)
2. Open Builder and select "Clone Repository..."
3. Clone `https://github.com/sonnyp/Workbench.git` (or your fork)
4. Press the Run ▶ button

Make sure that you're building the development target `re.sonny.Workbench.Devel`.

ℹ️ Please select "Blueprint" instead of "XML" in Workbench UI panel. Blueprint is experimental but that's what we use for making Workbench.

If you know what you are doing you can also use VSCode with the extensions recommended in this workspace or anything else you are comfortable with. Don't forget to fetch the submodules.

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

The easiest way to get started is to write an entry within Workbench directly. Check [here for ideas](https://github.com/sonnyp/Workbench/issues/69) and [here for examples](https://github.com/sonnyp/Workbench/issues?q=label%3A%22Library+%F0%9F%93%9A%EF%B8%8F%22).

Some guidelines

* Start with something small and accessible
* Focus on quality over quantity
* Make sure you don't pick something deprecated [or soon to be](https://docs.gtk.org/gtk4/#classes)
* Select "Blueprint" instead of "XML" in the UI panel
* Keep it concise and interactive
* Add links to follow up on the topic covered
* Follow the patterns of existing entries
* in `Code`, use properties (`widget.senstitive`) over methods (`widget.set/get_sensitive`)

Once you're satisfied with the result - you can send a pull request to include it in Workbench. All you need to do is add the files to [`src/Library/demos`](./src/Library/demos).

Make sure it's working by rebuilding Workbench and launching your entry via the Library. If not - double check what you did and compare with other Library entries.

## Submitting a contribution

1. Unless you don't want too - add your name to [the list of contributors](./src/about.js)
2. Use a short PR title - eg. "library: Add Video entry" - it will be used as commit message
3. If relevant, mention the related issue in the PR description

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

## Troubleshooting

### The app won't build/run anymore - even on clean `main`

Clean the build directory.

On GNOME Builder, open the search palette with `Ctrl+Enter` and search/select `Clean`.

### git says `blueprint-compiler` is modified

Update submodules.

On GNOME Builder, open search palette with `Ctrl+Enter` and search/select `Update Dependencies...`

or

```sh
cd workbench
git submodule update
```
