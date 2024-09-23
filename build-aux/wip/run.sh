set -eux

flatpak_id=re.sonny.Workbench.Devel
path=/home/sonny/Projects/Workbench
manifest=$path/build-aux/$flatpak_id.json
module_name=Workbench
command=workbench

function run_build_command {
  flatpak build --share=network --filesystem=$path --filesystem=$path/.flatpak/repo --env=PATH=/app/bin:/app/bin:/app/bin:/usr/bin:/home/sonny/.var/app/com.visualstudio.code/data/node_modules/bin:/app/bin:/usr/bin:/usr/lib/sdk/vala/bin:/usr/lib/sdk/rust-stable/bin:/usr/lib/sdk/node20/bin:/usr/lib/sdk/typescript/bin --env=LD_LIBRARY_PATH=/app/lib:/app/lib:/usr/lib/sdk/vala/lib --env=PKG_CONFIG_PATH=/usr/local/lib64/pkgconfig:/usr/local/lib/pkgconfig:/usr/local/share/pkgconfig:/usr/lib64/pkgconfig:/usr/lib/pkgconfig:/usr/share/pkgconfig:/app/lib/pkgconfig:/app/share/pkgconfig:/usr/lib/pkgconfig:/usr/share/pkgconfig --filesystem=$path/_build $path/.flatpak/repo $1
}

if [ ! -d "$path/.flatpak/repo" ]; then
  # initializes repo
  flatpak build-init $path/.flatpak/repo $flatpak_id org.gnome.Sdk org.gnome.Sdk 47
fi

if [ ! -d "$path/.flatpak/flatpak-builder" ]; then
  # downloads sources (de-initializes)
  flatpak-builder --ccache --force-clean --disable-updates --download-only --state-dir=$path/.flatpak/flatpak-builder --stop-at=$module_name $path/.flatpak/repo $manifest
  # builds modules (de-initializes)
  flatpak-builder --ccache --force-clean --disable-updates --disable-download --build-only --keep-build-dirs --state-dir=$path/.flatpak/flatpak-builder --stop-at=$module_name $path/.flatpak/repo $manifest
fi

# builds Workbench module
if [ ! -d "$path/_build" ]; then
  run_build_command "meson --prefix /app _build -Dprofile=development"
else
  time run_build_command "meson install -C _build"
  # time run_build_command "$path/troll/gjspack/bin/gjspack --appid=$flatpak_id --prefix=/re.sonny.Workbench --project-root=$path --resource-root=$path/src --blueprint-compiler=/app/bin/blueprint-compiler --no-executable $path/src/main.js /app/share/$flatpak_id.src.gresource"
fi

# starts workbench
flatpak build --with-appdir --allow=devel --bind-mount=/run/user/1000/doc=/run/user/1000/doc/by-app/$flatpak_id --share=ipc --socket=fallback-x11 --socket=wayland --device=dri --share=network --socket=pulseaudio --talk-name='org.freedesktop.portal.*' --talk-name=org.a11y.Bus --bind-mount=/run/flatpak/at-spi-bus=/run/user/1000/at-spi/bus --env=AT_SPI_BUS_ADDRESS=unix:path=/run/flatpak/at-spi-bus --env=AT_SPI_BUS_ADDRESS=unix:path=/run/flatpak/at-spi-bus --env=COLORTERM=truecolor --env=DESKTOP_SESSION=gnome --env=LANG=en_US.UTF-8 --env=WAYLAND_DISPLAY=wayland-0 --env=XDG_CURRENT_DESKTOP=GNOME --env=XDG_SESSION_DESKTOP=gnome --env=XDG_SESSION_TYPE=wayland --bind-mount=/run/host/fonts=/usr/share/fonts --bind-mount=/run/host/fonts-cache=/usr/lib/fontconfig/cache --filesystem=/home/sonny/.local/share/fonts:ro --filesystem=/home/sonny/.cache/fontconfig:ro --bind-mount=/run/host/user-fonts-cache=/home/sonny/.cache/fontconfig --bind-mount=/run/host/font-dirs.xml=/home/sonny/.cache/font-dirs.xml $path/.flatpak/repo $command
