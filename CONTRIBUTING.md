# Contributing

Thank you for considering contributing to Workbench. Feel free to [get in touch](https://matrix.to/#/%23workbench:gnome.org).

## Setup

The following is the recommended setup:

1. Install [GNOME Builder from Flathub](https://flathub.org/apps/details/org.gnome.Builder)
2. Open Builder and select "Clone Repository..."
3. Clone `https://github.com/sonnyp/Workbench.git` (or your fork)
4. Press the Run ▶ button

Make sure that you're building the development target `re.sonny.Workbench.Devel`.

ℹ️ Please select "Blueprint" instead of "XML" in Workbench UI panel. Blueprint is experimental but that's what we use for making Workbench.

If you know what you are doing you can also use VSCode with the extensions recommended in this workspace or anything else you are comfortable with. Don't forget to fetch the submodules.

## Getting started

If you're completely new to GNOME development this is for you.

Open the "Welcome" example from Workbench Library.

Important fundamentals are
  * objects
  * properties
  * signals

Every widget in GTK is an object. For example, `Gtk.Box`, `Gtk.Button`, ...

Properties affect an object to change its appearance or behavior.

Signals are events that can be listened to. Like `clicked` on `Gtk.Button`.

The Welcome example in the Library has all 3. Play with it, try to understand and make changes. If you break things you can always go back by select "Welcome" example from the Workbench Library again.

Once you understand these 3 things, try creating something new. There are plenty of widgets and patterns to explore.

## Your first contribution

Your first contribution should be a new example or demo for the Wokbench library.

Library examples and demos have 3 functions

1. Showcase the capabilities of the platform
2. Teach how to use the APIs, patterns and widgets
3. Provide functional snippets ready to use

Pick a widget and make a Library demo for it within Workbench directly.

Check [here for ideas](https://github.com/sonnyp/Workbench/issues/69) and [here for examples](https://github.com/sonnyp/Workbench/issues?q=label%3A%22Library+%F0%9F%93%9A%EF%B8%8F%22).

Feel free to reach out and ask for a topic or feedback.

Some guidelines

* Start with something small and accessible
* Focus on quality over quantity
* Make sure you don't pick something deprecated [or soon to be](https://docs.gtk.org/gtk4/#classes)
* Select "Blueprint" instead of "XML" in the UI panel
* Keep it concise and interactive
* Add links to follow up on the topic covered
* Follow the patterns of existing entries
* in `Code`, use properties (`widget.senstitive`) over methods (`widget.set/get_sensitive`)
## Submitting a contribution

Once you're satisfied with the result - you can send a pull request to include it in Workbench. You will need to copy the code into new files in [`src/Library/demos`](./src/Library/demos).

Make sure it's working by running Workbench and launching your entry via the Library. If not - double check what you did and compare with other Library entries.

Some guidelines:

* Unless you don't want too - add your name to [the list of contributors](./src/about.js)
* Use a short PR title - eg. "library: Add Video entry" - it will be used as commit message
* If relevant, mention the related issue in the PR description

## Learn

Here is a compilation of resources to learn more about the GNOME platform.

* [Workbench](https://github.com/sonnyp/Workbench) 😉
* [GObject](https://gjs.guide/guides/gobject/basics.html#gobject-construction)
* [GTK4 + GJS Book](https://rmnvgr.gitlab.io/gtk4-gjs-book/)
* [Asynchronous programming](https://gjs.guide/guides/gjs/asynchronous-programming.html#the-main-loop)
* [API references](https://gjs-docs.gnome.org/) make sure to enable at least GTK, GJS, GLib, Gio
* [GJS docs](https://gitlab.gnome.org/GNOME/gjs/-/tree/master/doc)
* [GJS examples](https://gitlab.gnome.org/GNOME/gjs/-/tree/master/examples)

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

Clean the build directory. On GNOME Builder, open the search palette with `Ctrl+Enter` and search/select `Clean`.

If that doesn't solve it - remove the GNOME Builder cache directory

```
rm -r ~/.var/app/org.gnome.Builder/cache/
```

### git says `blueprint-compiler` is modified

Update submodules.

On GNOME Builder, open search palette with `Ctrl+Enter` and search/select `Update Dependencies...`

or

```sh
cd workbench
git submodule update
```
