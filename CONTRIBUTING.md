# Contributing

If you are interested in contributing to the Library/demos, please head over to https://github.com/workbenchdev/demos instead.

Either way, don't hesitate to [get in touch](https://matrix.to/#/%23workbench:gnome.org).

## Getting started

The following is the recommended setup:

1. Install [GNOME Builder from Flathub](https://flathub.org/apps/details/org.gnome.Builder)
2. Open Builder and select "Clone Repository..."
3. Clone `https://github.com/workbenchdev/Workbench.git` (or your fork)
4. Press the Run ▶ button

Make sure that you're building the development target `re.sonny.Workbench.Devel`.

If you know what you are doing you can also use VSCode with the extensions recommended in this workspace or anything else you are comfortable with. Don't forget to fetch the submodules.

## Setup

We provide a couple of tools to make the development process pleasant.

- Code formatter that runs automatically on git commit
- Single command to run all the tests locally

```sh
# Ubuntu requirements
# sudo apt install flatpak flatpak-builder nodejs make

# Fedora requirements
# sudo dnf install flatpak flatpak-builder nodejs make

cd Workbench
make setup
```

Before submitting a PR, we recommend running tests locally with

```sh
make test
```

## Submitting a contribution

- Unless you don't want too - add your name to [the list of contributors](./src/about.js)
- Open a pull request
- Make sure to review your own changes
- Commits are squashed into a single commit on merge

## Debugging

To view debug logs, use the following command in [`src/workbench`](../src/workbench).

```sh
--command "G_MESSAGES_DEBUG=\"@app_id@\" @app_id@ $@"
```

See also

- [GJS Logging](https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/Logging.md)
- [Flatpak Debugging](https://docs.flatpak.org/en/latest/debugging.html)

## Translation

Workbench doesn't currently support translations for its user interface. GNOME documentation is only available in English and we do not want to mislead non-English speakers.

<!--
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

```sh
rm -r ~/.var/app/org.gnome.Builder/cache/
```
