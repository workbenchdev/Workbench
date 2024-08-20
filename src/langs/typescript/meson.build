configure_file(
  input: 'template/tsconfig.json',
  output: 'tsconfig.json',
  install_dir: join_paths(pkgdatadir, 'langs/typescript/template/'),
  configuration: bin_conf,
)

configure_file(
  input: 'types/ambient.d.ts',
  output: 'ambient.d.ts',
  install_dir: join_paths(pkgdatadir, 'langs/typescript/types'),
  configuration: bin_conf,
)

install_subdir(
  meson.project_source_root() / 'gi-types',
  install_dir: join_paths(pkgdatadir, 'langs/typescript'),
)
