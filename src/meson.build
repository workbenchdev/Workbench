bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').path())
bin_conf.set('PACKAGE_VERSION', meson.project_version())
bin_conf.set('PACKAGE_NAME', meson.project_name())
bin_conf.set('prefix', prefix)
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', datadir)
bin_conf.set('pkgdatadir', pkgdatadir)

blueprints = custom_target('blueprints',
  input: files(
    'shortcutsWindow.blp',
    'Library/Library.blp',
    'Library/demos/Toasts/main.blp',
    'Library/demos/WebSocket client/main.blp',
    'Library/demos/Welcome/main.blp',
    'Library/demos/Application window/main.blp',
    'Library/demos/Notifications/main.blp',
    'window.blp',
  ),
  output: '.',
  command: [find_program('blueprint-compiler'), 'batch-compile', '@OUTPUT@', '@CURRENT_SOURCE_DIR@', '@INPUT@'],
)

data_res = gnome.compile_resources('workbench',
  'workbench.gresource.xml',
  dependencies: blueprints,
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

configure_file(
  input: 're.sonny.Workbench',
  output: 're.sonny.Workbench',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)

configure_file(
  input: 'workbench',
  output: 'workbench',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)

install_data('workbench-api.vala', install_dir: datadir)
subdir('Previewer/vala-previewer')
