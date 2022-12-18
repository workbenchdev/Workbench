import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import { promiseTask } from "../../troll/src/util.js";

export function getObjectClass(class_name) {
  const split = class_name.split(/(?=[A-Z])/);
  if (split.length < 2) return;

  const [ns, ...rest] = split;
  return imports.gi[ns]?.[rest.join("")];
}

export function isPreviewable(class_name) {
  const klass = getObjectClass(class_name);
  if (!klass) return false;

  // GLib-GObject-ERROR: cannot create instance of abstract (non-instantiatable) type 'GtkWidget'
  if (GObject.type_test_flags(klass, GObject.TypeFlags.ABSTRACT)) return false;

  return GObject.type_is_a(klass, Gtk.Widget);
}

export async function isBuilderable(str) {
  const flags =
    Gio.SubprocessFlags.STDOUT_SILENCE | Gio.SubprocessFlags.STDERR_SILENCE;
  const proc = Gio.Subprocess.new(["workbench-crasher", str], flags);
  await promiseTask(proc, "wait_async", "wait_finish", null);
  if (!proc.get_if_exited()) return false;
  return proc.get_exit_status() === 0;
}
