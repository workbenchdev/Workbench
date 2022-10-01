bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').path())
bin_conf.set('version', meson.project_version() + version_suffix)
bin_conf.set('app_id', app_id)
bin_conf.set('prefix', prefix)
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', datadir)
bin_conf.set('pkgdatadir', pkgdatadir)

blueprints = custom_target('blueprints',
  input: files(
    'Library/demos/Toasts/main.blp',
    'Library/demos/WebSocket client/main.blp',
    'Library/demos/Welcome/main.blp',
    'Library/demos/Application window/main.blp',
    'Library/demos/Custom widget/main.blp',
    'Library/demos/Notifications/main.blp',
    'Library/demos/Platform tools/main.blp',
    'Library/demos/Icon Browser/main.blp',
  ),
  output: '.',
  command: [
    find_program(
      # Flatpak
      '/app/bin/blueprint-compiler',
      # host
      '../blueprint-compiler/blueprint-compiler.py'
    ),
    'batch-compile', '@OUTPUT@', '@CURRENT_SOURCE_DIR@', '@INPUT@'
  ],
)

gnome.compile_resources(app_id + '.src',
  'app.gresource.xml',
  dependencies: blueprints,
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

configure_file(
  input: 're.sonny.Workbench',
  output: app_id,
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

install_data('workbench-api.vala', install_dir: pkgdatadir)
subdir('Previewer/vala-previewer')

gjspack = find_program('../troll/gjspack/bin/gjspack')
gresource = custom_target(app_id + '.gresource',
  input: ['main.js', '../po/POTFILES'],
  output: app_id + '.gresource',
  command: [
    gjspack,
    '--appid=' + app_id,
    '--prefix', '/re/sonny/Workbench',
    '--resource-root', meson.project_source_root(),
    '--no-executable',
    '@INPUT0@',
    '--potfiles', '@INPUT1@',
    '@OUTDIR@',
  ],
  install: true,
  install_dir: pkgdatadir,
  build_always_stale: true,
)
