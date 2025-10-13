project(
  'Workbench',
  ['vala', 'c', 'rust'],
  version: '49.0',
  meson_version: '>= 1.0.0',
  license: 'GPL-3.0-only',
  default_options: [
    'libdir=lib',
    'warning_level=2',
    'werror=false',
  ],
)

gnome = import('gnome')

if get_option('profile') == 'development'
  app_id = 're.sonny.Workbench.Devel'
  vcs_tag = run_command('git', 'rev-parse', '--short', 'HEAD').stdout().strip()
  if vcs_tag == ''
    version_suffix = '-devel'
  else
    version_suffix = '-@0@'.format(vcs_tag)
  endif
else
  app_id = 're.sonny.Workbench'
  version_suffix = ''
endif

prefix = get_option('prefix')
bindir = prefix / 'bin'
datadir = prefix / get_option('datadir')
pkgdatadir = datadir / app_id

subdir('data')
subdir('src')

gnome.post_install(
  glib_compile_schemas: true,
  gtk_update_icon_cache: true,
  update_desktop_database: true,
)
