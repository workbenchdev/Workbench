# SPDX-License-Identifier: GPL-3.0-only
# SPDX-FileCopyrightText: Workbench Contributors
# SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

prefix = get_option('prefix')
datadir = join_paths(prefix, get_option('datadir'))
includedir = join_paths(prefix, get_option('includedir'))
libdir = join_paths(prefix, get_option('libdir'))

girdir = join_paths(datadir, 'gir-1.0')
typelibdir = join_paths(libdir, 'girepository-1.0')
vapidir = join_paths(datadir, 'vala', 'vapi')

libworkbench_api_version = '0'
libworkbench_api_name = 'libworkbench-@0@'.format(libworkbench_api_version)


#
# Shared Library
#
libworkbench_c_args = [
  '-Wall',
  '-Wextra',
  '-Wfloat-equal',
  '-Wformat=2',
  '-Wincompatible-pointer-types',
  '-Wint-conversion',
  '-Wint-to-pointer-cast',
  '-Wmissing-include-dirs',
  '-Woverflow',
  '-Wpointer-arith',
  '-Wpointer-to-int-cast',
  '-Wredundant-decls',
  '-Wshadow',
  '-Wstrict-prototypes',
  '-Wundef',

  '-Wno-discarded-array-qualifiers',
  '-Wno-missing-field-initializers',
  '-Wno-unused-parameter',
  '-Wno-missing-declarations',

  '-DWORKBENCH_COMPILATION',
]
libworkbench_link_args = []
libworkbench_deps = [
  dependency('gio-2.0', version: '>= 2.76.0'),
  dependency('gtk4', version: '>= 4.10.0'),
  dependency('gtksourceview-5', version: '>= 5.8.0'),
  dependency('libadwaita-1', version: '>= 1.5')
]

if get_option('profile') != 'development'
  libworkbench_c_args += [
    '-DG_DISABLE_ASSERT',
    '-DG_DISABLE_CAST_CHECKS',
  ]
endif

libworkbench_headers = files([
  'workbench.h',
  'workbench-completion-provider.h',
  'workbench-completion-request.h',
  'workbench-preview-window.h'
])

libworkbench_sources = files([
  'workbench-completion-provider.c',
  'workbench-completion-request.c',
  'workbench-preview-window.c'
])

install_headers(libworkbench_headers,
  subdir: join_paths(includedir, 'libworkbench'),
)

libworkbench_enums = gnome.mkenums_simple('libworkbench-enums',
         sources: libworkbench_headers,
  install_header: true,
     install_dir: join_paths(includedir, 'libworkbench'),
)

libworkbench = shared_library('workbench-@0@'.format(libworkbench_api_version),
                              libworkbench_headers,
                              libworkbench_sources,
                              libworkbench_enums,
    include_directories: [include_directories('.')],
           dependencies: libworkbench_deps,
                 c_args: libworkbench_c_args,
              link_args: libworkbench_link_args,
              soversion: meson.project_version(),
                version: libworkbench_api_version,
                install: true,
)

# GObject Introspection
libworkbench_gir = gnome.generate_gir(libworkbench,
    identifier_prefix: meson.project_name(),
            namespace: meson.project_name(),
            nsversion: libworkbench_api_version,
        symbol_prefix: meson.project_name().to_lower(),
              sources: [libworkbench_headers, libworkbench_sources, libworkbench_enums],
           extra_args: ['--c-include=workbench.h'],
             includes: ['Gio-2.0', 'Gtk-4.0', 'GtkSource-5'],
      install_dir_gir: girdir,
  install_dir_typelib: typelibdir,
              install: true,
)

# Vala API Bindings
libworkbench_vapi = gnome.generate_vapi(libworkbench_api_name,
       sources: libworkbench_gir[0],
      packages: ['gio-2.0', 'gtk4', 'gtksourceview-5'],
       install: true,
   install_dir: vapidir,
)

blueprints = custom_target('blueprints',
  input: files(
    'workbench-preview-window.blp'
  ),
  output: '.',
  command: [find_program('blueprint-compiler'), 'batch-compile', '@OUTPUT@', '@CURRENT_SOURCE_DIR@', '@INPUT@'],
)

gnome.compile_resources(
  're.sonny.Workbench.libworkbench',
  're.sonny.Workbench.libworkbench.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
  dependencies: blueprints,
)
