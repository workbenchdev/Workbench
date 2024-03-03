bin_conf = configuration_data()
bin_conf.set('pkgdatadir', pkgdatadir)

install_data('gdbus_ext.py', install_dir: pkgdatadir)
install_data('python-previewer.py', install_dir: pkgdatadir)
install_data('ruff.toml', install_dir: pkgdatadir)

configure_file(
  input: 'workbench-python-previewer',
  output: 'workbench-python-previewer',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
