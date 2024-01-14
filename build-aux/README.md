# Build Utilities

This directory contains the Flatpak Manifest and other build utilities.

## Workbench Flatpak Manifests

### gst-plugin-gtk4

```sh
wget https://crates.io/api/v1/crates/gst-plugin-gtk4/0.11.1/download
tar-xf download
cd gst-plugin-gtk4-0.11.1/
~/Projects/flathub/flatpak-builder-tools/cargo/flatpak-cargo-generator.py Cargo.lock
# cp generated-sources.json to gst-plugin-gtk4-sources.json
```

### Python Black Dependency

`modules/python-black.json` contains the Flatpak modules to install [https://github.com/psf/black](black), the
uncompromising Python code formatter.

This file is partially auto-generated. Here is how to generate it:

1. Obtain an up-to-date copy of [flatpak-builder-tools](https://github.com/flatpak/flatpak-builder-tools).
2. Make sure you have a Python virtualenv activated with the dependencies for the `pip` generator from the repo above.
3. Run `python3 <...>/flatpak-builder-tools/pip/flatpak-pip-generator black -o modules/python-black --build-isolation`

You will notice that Workbench will now not build. This is due to these issues:

- https://github.com/flatpak/flatpak-builder-tools/issues/380
- https://github.com/pypa/pip/issues/7863

This means that the generated JSON file now needs its build dependencies manually added. Check the build dependencies
of black and their dependencies and add them to the JSON as well. Brute-forcing the build to obtain missing packages
may help as does referencing old commits of the file. You can also use the generator command to generate dependencies
for them and then merge it into the file by hand, but note that you will also need to manually collect their build
dependencies too.
