## Maintainance

Notes and instructions for maintainers.

## Release

```sh
$V = 45

git checkout l10n
git pull
git checkout main
git merge --squash l10n
meson compile re.sonny.Workbench-pot -C _build
meson compile re.sonny.Workbench-update-po -C _build
git commit -m 'Update translations'

# Update version
# bump version in meson.build
# add release notes to metainfo
git add meson.build

git commit -m '$V'
git tag '$V'
git push
git push origin $V
```

## Update icons

```sh
cd icon-development-kit-www
git pull
cd ..
cp -r icon-development-kit-www/img/symbolic/**/*.svg data/icons/hicolor/scalable/actions/
cat icon-development-kit-www/_data/icons.yaml | python -c 'import sys, yaml, json; print(json.dumps(yaml.safe_load(sys.stdin.read())))' > src/icon-development-kit.json
```
