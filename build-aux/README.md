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

### Python Modules

The `modules/python-*.json` files contain Flatpak modules to install Python dependencies.

These files are (sometimes partially, see below) auto-generated. Here is how to generate it:

1. Obtain an up-to-date copy of [flatpak-builder-tools](https://github.com/flatpak/flatpak-builder-tools).
2. Make sure you have a Python virtualenv activated with the dependencies for the `pip` generator from the repo above.
3. Run `python3 <...>/flatpak-builder-tools/pip/flatpak-pip-generator <package> -o modules/python-<package> --build-isolation`

You will notice that Workbench will not build after auto-generating these files as described above.
This is due to these issues:

- https://github.com/flatpak/flatpak-builder-tools/issues/380
- https://github.com/pypa/pip/issues/7863

This means that the generated JSON file now needs its build dependencies manually added. Check the build dependencies
of the package and their dependencies and add them to the JSON as well. Brute-forcing the build to obtain missing packages
may help as does referencing old commits of the file. You can also use the generator command to generate dependencies
for them and then merge it into the file by hand, but note that you will also need to manually collect their build
dependencies too.

In some cases you may also need to manually remove some packages the generator adds (such as `packaging` with `rope`,
as the SDK and Runtime already contain a version of these packages that can not be replaced. Make sure the package
you want to install is actually compatible with the version of that dependency in the SDK/Runtime.
