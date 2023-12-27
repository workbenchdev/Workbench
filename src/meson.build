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

meson.add_install_script('../build-aux/library-index.js', pkgdatadir)

install_subdir('../demos/demos', install_dir : join_paths(pkgdatadir))
install_subdir('langs/rust/template', install_dir : join_paths(pkgdatadir, 'langs/rust'))

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

install_data('langs/vala/workbench.vala', install_dir: pkgdatadir)
install_data('langs/javascript/biome.json', install_dir: pkgdatadir)
subdir('Previewer')
subdir('langs/python')

gjspack = find_program('../troll/gjspack/bin/gjspack')
custom_target('workbench gresource',
  input: ['main.js'],
  output: app_id + '.src.gresource',
  command: [
    gjspack,
    '--appid=' + app_id,
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

subdir('libworkbench')

# CLI
configure_file(
  input: 'cli/bin.js',
  output: 'workbench-cli',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
custom_target('workbench cli gresource',
  input: ['cli/main.js'],
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

