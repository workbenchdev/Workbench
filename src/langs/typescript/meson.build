configure_file(
  input: 'template/tsconfig.json',
  output: 'tsconfig.json',
  install_dir: join_paths(pkgdatadir, 'langs/typescript/template/'),
  configuration: bin_conf,
)

install_data(
  ['types/ambient.d.ts'],
  install_dir: join_paths(pkgdatadir, 'langs/typescript'),
  preserve_path: true,
)

install_subdir('gi-types', install_dir: join_paths(pkgdatadir, 'langs/typescript'))