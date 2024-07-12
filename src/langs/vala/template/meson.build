project('demo', ['c', 'vala'],
          version: '0.1',
    meson_version: '>= 0.59.0',
  default_options: [ 'warning_level=2', 'werror=false', ],
)

i18n = import('i18n')
gnome = import('gnome')

source_files = [
    'main.vala',
    'workbench.vala'
]

cc = meson.get_compiler('c')
m_dep = cc.find_library('m', required : false)

add_project_arguments(
    '-shared',
    '-fpic',
    language: 'c'
)

dependencies = [
    m_dep,
    dependency('libadwaita-1'),
    dependency('shumate-1.0'),
    dependency('libportal-gtk4'),
    dependency('libsoup-3.0'),
    dependency('webkitgtk-6.0'),
    dependency('gstreamer-1.0'),
    dependency('gtksourceview-5'),
    dependency('json-glib-1.0'),
]

library('workbenchcode', source_files,
  dependencies: dependencies,
       install: true,
)