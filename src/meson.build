bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').full_path())
bin_conf.set('version', meson.project_version() + version_suffix)
bin_conf.set('app_id', app_id)
bin_conf.set('prefix', prefix)
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', datadir)
bin_conf.set('pkgdatadir', pkgdatadir)
bin_conf.set('sourcedir', meson.source_root())

blueprint_compiler = find_program(
  # Flatpak
  '/app/bin/blueprint-compiler',
  # host
  '../blueprint-compiler/blueprint-compiler.py'
)

blueprints = custom_target('blueprints',
  input: files(
    'Library/demos/Toasts/main.blp',
    'Library/demos/WebSocket Client/main.blp',
    'Library/demos/Welcome/main.blp',
    'Library/demos/Window/main.blp',
    'Library/demos/Custom Widget/main.blp',
    'Library/demos/Notifications/main.blp',
    'Library/demos/Platform Tools/main.blp',
  ),
  output: '.',
  command: [
    blueprint_compiler,
    'batch-compile', '@OUTPUT@', '@CURRENT_SOURCE_DIR@', '@INPUT@'
  ],
)

gnome.compile_resources(app_id,
  'app.gresource.xml',
  dependencies: blueprints,
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

configure_file(
  input: 'bin.js',
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

install_data('langs/vala/workbench-api.vala', install_dir: pkgdatadir)
subdir('Previewer')

gjspack = find_program('../troll/gjspack/bin/gjspack')
gresource = custom_target('gjspack',
  input: ['main.js', '../po/POTFILES'],
  output: app_id + '.src.gresource',
  command: [
    gjspack,
    '--appid=' + app_id,
    '--prefix', '/re/sonny/Workbench',
    '--resource-root', meson.project_source_root(),
    '--blueprint-compiler', blueprint_compiler,
    '--no-executable',
    '@INPUT0@',
    '--potfiles', '@INPUT1@',
    '@OUTDIR@',
  ],
  install: true,
  install_dir: pkgdatadir,
  build_always_stale: true,
)
