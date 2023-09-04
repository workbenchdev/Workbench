/**
 * This is similar to ../Previewer/DBusPreviewer.js, however this is for the special case
 * of using an interpreted language like Python.
 *
 * TODO: The actual Dbus setup is removed for now. The current state is a stub to just launch the process
 *       as a standalone thing. If we want to do it similar to how it was done before, we'd probably
 *       use the same DBus interface and implement it in Python just like it was done for Vala ("previewer.vala").
 *       Ideally the Run dbus method then launches the main module of the Python script, but in a way
 *       that is isolated so only the standard lib, "gi" and "workbench" packages are available.
 *
 * TODO: We may want to merge this into DBusPreviewer.js
 *       and make it more generic?
 */
import Gio from "gi://Gio";

const python_dbus_previewer = {
  async run(filename) {
    Gio.Subprocess.new(
      ["python", `${filename}/main.py`],
      Gio.SubprocessFlags.NONE,
    );
  },
};

export default python_dbus_previewer;
