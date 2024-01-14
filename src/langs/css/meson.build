gjspack = find_program(meson.project_source_root() / 'troll/gjspack/bin/gjspack')
custom_target('prettier',
  input: ['prettier.js'],
  output: ['prettier', 'prettier.src.gresource'],
  command: [
    gjspack,
    '--resource-root', meson.project_source_root() / 'src',
    '@INPUT0@',
    '@OUTDIR@',
  ],
  install: true,
  install_dir: get_option('bindir'),
  build_always_stale: true,
)

