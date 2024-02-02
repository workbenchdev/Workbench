executable('workbench-previewer-module',
  'previewer.vala',
  dependencies: [ dependency('gtksourceview-5'), dependency('gmodule-2.0'), dependency('libadwaita-1'), dependency('shumate-1.0'), dependency('webkitgtk-6.0'), libworkbench_vapi ],
  # vala_args: [ '--gresourcesdir=' + meson.current_build_dir() ],
  install: true,
  link_with: libworkbench,
)

executable('workbench-crasher',
  'crasher.vala',
  dependencies: [ dependency('gio-2.0'), dependency('gmodule-2.0'), dependency('libadwaita-1') ],
  # vala_args: [ '--gresourcesdir=' + meson.current_build_dir() ],
  install: true,
)

install_data('previewer.xml', install_dir: pkgdatadir)
