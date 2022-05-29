desktop_file = i18n.merge_file(
  input: 're.sonny.Workbench.desktop',
  output: 're.sonny.Workbench.desktop',
  type: 'desktop',
  po_dir: '../po',
  install: true,
  install_dir: join_paths(get_option('datadir'), 'applications')
)

previewer_desktop_file = i18n.merge_file(
  input: 're.sonny.Workbench.vala_previewer.desktop',
  output: 're.sonny.Workbench.vala_previewer.desktop',
  type: 'desktop',
  po_dir: '../po',
  install: true,
  install_dir: join_paths(get_option('datadir'), 'applications')
)

desktop_utils = find_program('desktop-file-validate', required: false)
if desktop_utils.found()
  test('Validate desktop file', desktop_utils,
    args: [desktop_file]
  )
  test('Validate desktop file', desktop_utils,
    args: [previewer_desktop_file]
  )
endif

appstream_file = i18n.merge_file(
  input: 're.sonny.Workbench.metainfo.xml',
  output: 're.sonny.Workbench.metainfo.xml',
  po_dir: '../po',
  install: true,
  install_dir: join_paths(get_option('datadir'), 'metainfo')
)

dbus_service_dir = dependency(
    'dbus-1'
).get_pkgconfig_variable(
    'session_bus_services_dir',
    define_variable: ['datadir', join_paths(prefix, datadir)]
)

service_conf = configuration_data()
service_conf.set('bindir', bindir)
configure_file(
  input: 're.sonny.Workbench.service',
  output: 're.sonny.Workbench.service',
  configuration: service_conf,
  install_dir: join_paths(get_option('datadir'), 'dbus-1/services')
)

configure_file(
  input: 're.sonny.Workbench.vala_previewer.service',
  output: 're.sonny.Workbench.vala_previewer.service',
  configuration: service_conf,
  install_dir: dbus_service_dir
)

appstream_util = find_program('appstream-util', required: false)
if appstream_util.found()
  test('Validate appstream file', appstream_util,
    args: ['validate', appstream_file]
  )
endif

install_data('re.sonny.Workbench.gschema.xml',
  install_dir: join_paths(get_option('datadir'), 'glib-2.0/schemas')
)

compile_schemas = find_program('glib-compile-schemas', required: false)
if compile_schemas.found()
  test('Validate schema file', compile_schemas,
    args: ['--strict', '--dry-run', meson.current_source_dir()]
  )
endif

install_subdir('icons/', install_dir : join_paths(get_option('datadir')))
