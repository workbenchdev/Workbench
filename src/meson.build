bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').full_path())
bin_conf.set('version', meson.project_version() + version_suffix)
bin_conf.set('app_id', app_id)
bin_conf.set('prefix', prefix)
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', datadir)
bin_conf.set('pkgdatadir', pkgdatadir)
bin_conf.set('sourcedir', meson.project_source_root())
bin_conf.set('command', 'SHELL=/bin/sh script --flush --quiet --return $XDG_RUNTIME_DIR/$FLATPAK_ID/typescript --command "' + app_id + ' $@"')

blueprint_compiler = find_program(
  '/app/bin/blueprint-compiler',
)

meson.add_install_script('../build-aux/library.js', pkgdatadir)

subdir('langs/rust/template')
subdir('langs/typescript/template')

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

clibin_conf = configuration_data()
clibin_conf.merge_from(bin_conf)
clibin_conf.set('command', app_id + '.cli "$@"')
configure_file(
  input: 'workbench',
  output: 'workbench-cli',
  configuration: clibin_conf,
  install: true,
  install_dir: get_option('bindir')
)

install_data('langs/vala/workbench.vala', install_dir: pkgdatadir)
install_data('langs/javascript/biome.json', install_dir: pkgdatadir)
install_data('project-readme.md', install_dir: pkgdatadir)
subdir('libworkbench')
subdir('Previewer')
subdir('langs/python')
subdir('langs/css')

gjspack = find_program('../troll/gjspack/bin/gjspack')
custom_target('workbench',
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

subdir('cli')
