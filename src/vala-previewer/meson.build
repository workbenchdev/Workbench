previewer_blueprints = custom_target('previewer-blueprints',
  input: files(
    'previewer.blp',
  ),
  output: '.',
  command: [find_program('blueprint-compiler'), 'batch-compile', '@OUTPUT@', '@CURRENT_SOURCE_DIR@', '@INPUT@'],
)

# hack to avoid the issue https://gitlab.gnome.org/jwestman/blueprint-compiler/-/issues/18
blueprints_hack = custom_target('blueprints_hack',
	input: previewer_blueprints,
	output: 'previewer.blp.vala',
	command: [find_program('touch'), '@OUTPUT@'],
)

previewer_res = gnome.compile_resources('vala-previewer',
  'previewer.gresource.xml',
  dependencies: previewer_blueprints,
)

executable('workbench-vala-previewer',
  [ 'previewer.vala', previewer_res, blueprints_hack ],
  dependencies: [ dependency('gio-2.0'), dependency('gmodule-2.0'), dependency('libadwaita-1') ],
  vala_args: [ '--gresourcesdir=' + meson.current_build_dir() ],
  install: true,
)
