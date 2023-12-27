bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').full_path())
bin_conf.set('version', meson.project_version() + version_suffix)
bin_conf.set('app_id', app_id)
bin_conf.set('prefix', prefix)
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', datadir)
bin_conf.set('pkgdatadir', pkgdatadir)
bin_conf.set('sourcedir', meson.project_source_root())

blueprint_compiler = find_program(
  '/app/bin/blueprint-compiler',
)

gjspack = find_program('../../troll/gjspack/bin/gjspack')

configure_file(
  input: 'bin.js',
  output: 'workbench-cli',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
custom_target('workbench cli gresource',
  input: ['main.js'],
  output: 're.sonny.Workbench.cli.src.gresource',
  command: [
    gjspack,
    '--appid=re.sonny.Workbench.cli',
    '--prefix', '/re/sonny/Workbench',
    '--project-root', meson.project_source_root(),
    '--resource-root', meson.project_source_root() / 'src',
    '--blueprint-compiler', blueprint_compiler,
    '--no-executable',
    '@INPUT0@',
    '@OUTDIR@',
  ],
  install: true,
  install_dir: pkgdatadir,
  build_always_stale: true,
)
