# Demos TypeScript

Here is how you generate TypeScript declaration files for the various platform
GIRs (Gtk4, Adw, GObject, etc..) and other dependencies used by Workbench
(Libportal/Xdp, Jsonrpc, Shumate, Vte, etc..).

Due to current limitations
(https://github.com/workbenchdev/Workbench/issues/980), you cannot directly
generate the types from within Workbench's sandbox automatically.

### 0. Copy the built GIRs from Workbench

First enter the Build Terminal. On VSCode you can easily do this by pressing
`Ctrl+P` then selecting `Flatpak: Enter Build Terminal`.

You can also enter Workbench Terminal using the following command:

```bash
flatpak run --command=bash --filesystem=$(pwd) re.sonny.Workbench.Devel
```

Then you can copy all the GIRs build from Workbench

```bash
mkdir -p workbench-girs
cp /app/share/gir-1.0/* workbench-girs
```

### 1. Enter the flatpak sandbox

```bash
FLATPAK_ENABLE_SDK_EXT=node20,typescript flatpak run --share=network --command=bash --filesystem=$(pwd) org.gnome.Sdk//master

# Enable the node20 and typescript SDK extensions
source /usr/lib/sdk/node20/enable.sh
export PATH=/usr/lib/sdk/typescript/bin:$PATH
```

### 2. Install ts-for-gir (in the flatpak sandbox)

```bash
YARN_GLOBAL_DIR=/tmp/yarn-global
export PATH="$YARN_GLOBAL_DIR/node_modules/.bin:$PATH"

yarn --global-folder $YARN_GLOBAL_DIR global add @ts-for-gir/cli@4.0.0-beta.16
```

### Generate modules

```bash
ts-for-gir generate -g workbench-girs/ -g /usr/share/gir-1.0/ -o workbench-types/ --ignoreVersionConflicts
```
