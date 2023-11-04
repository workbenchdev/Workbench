#!/usr/bin/env sh

# fun stands for Flatpak Run
flatpak-builder --run flatpak build-aux/re.sonny.Workbench.Devel.json "$@"
