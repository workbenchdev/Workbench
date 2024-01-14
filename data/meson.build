desktop_file = configure_file(
  input: 'app.desktop',
  output: '@0@.desktop'.format(app_id),
  configuration: { 'app_id': app_id },
  install_dir: join_paths(get_option('datadir'), 'applications')
)

desktop_utils = find_program('desktop-file-validate', required: false)
if desktop_utils.found()
  test('Validate desktop file', desktop_utils,
    args: [desktop_file]
  )
endif

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

appstream_cli = find_program('appstreamcli', required: false)
if appstream_cli.found()
  test('Validate metainfo file', appstream_cli,
    args: ['validate', '--override=release-time-missing=info', '--no-net', '--explain', appstream_file]
  )
endif

configure_file(
  input: 'app.gschema.xml',
  output: '@0@.gschema.xml'.format(app_id),
  configuration: { 'app_id': app_id },
  install_dir: join_paths(get_option('datadir'), 'glib-2.0/schemas')
)

compile_schemas = find_program('glib-compile-schemas', required: false)
if compile_schemas.found()
  test('Validate schema file', compile_schemas,
    args: ['--strict', '--dry-run', meson.current_source_dir()]
  )
endif

install_subdir('icons/hicolor', install_dir : join_paths(get_option('datadir'), 'icons'))
