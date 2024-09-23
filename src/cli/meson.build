bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').full_path())
bin_conf.set('version', meson.project_version() + version_suffix)
bin_conf.set('app_id', app_id)
bin_conf.set('prefix', prefix)
bin_conf.set('libdir', get_option('prefix') / get_option('libdir'))
bin_conf.set('datadir', datadir)
bin_conf.set('pkgdatadir', pkgdatadir)
bin_conf.set('sourcedir', meson.project_source_root())

gjspack = find_program('../../troll/gjspack/bin/gjspack')

configure_file(
  input: 'bin.js',
  output: app_id + '.cli',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
custom_target('workbench-cli',
  input: ['main.js'],
  output: app_id + '.cli.src.gresource',
  command: [
    gjspack,
    '--appid=' + app_id + '.cli',
    '--prefix', '/re/sonny/Workbench',
    '--project-root', meson.project_source_root(),
    '--resource-root', meson.project_source_root() / 'src',
    '--no-executable',
    '@INPUT0@',
    '@OUTDIR@',
  ],
  install: true,
  install_dir: datadir / app_id + '.cli',
  build_always_stale: true,
)
