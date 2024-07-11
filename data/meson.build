desktop_file = configure_file(
  input: 'app.desktop',
  output: '@0@.desktop'.format(app_id),
  configuration: { 'app_id': app_id },
  install_dir: join_paths(get_option('datadir'), 'applications')
)

desktop_utils = find_program('desktop-file-validate', required: true)
test('Validate desktop file', desktop_utils,
  args: [desktop_file]
)

configure_file(
  input: 'app.service',
  output: '@0@.service'.format(app_id),
  configuration: { 'app_id': app_id, 'bindir': bindir },
  install_dir: join_paths(get_option('datadir'), 'dbus-1/services')
)

appstream_file = configure_file(
  input: 'app.metainfo.xml',
  output: '@0@.metainfo.xml'.format(app_id),
  configuration: { 'app_id': app_id },
  install_dir: join_paths(get_option('datadir'), 'metainfo')
)

appstreamcli = find_program('appstreamcli', required: false)
test(
  'Validate appstream file',
  appstreamcli,
  args: ['validate', '--no-net', '--explain', appstream_file],
)

configure_file(
  input: 'app.gschema.xml',
  output: '@0@.gschema.xml'.format(app_id),
  configuration: { 'app_id': app_id },
  install_dir: join_paths(get_option('datadir'), 'glib-2.0/schemas')
)

compile_schemas = find_program('glib-compile-schemas', required: true)
test('Validate schema file', compile_schemas,
  args: ['--strict', '--dry-run', meson.current_source_dir()]
)

install_subdir('icons/hicolor', install_dir : join_paths(get_option('datadir'), 'icons'))
