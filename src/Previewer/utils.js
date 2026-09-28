import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import GIRepository from "gi://GIRepository";

const repository = new GIRepository.Repository();

// sort and reverse to make sure GtkSource is before Gtk
// and so that GtkSourceCompletionProvider matches GtkSource and not Gtk
const namespaces = getNamespaces().sort().reverse();
export function getObjectClass(class_name) {
  const namespace = namespaces.find((namespace) =>
    class_name.startsWith(namespace),
  );
  if (!namespace) return null;

  // eslint-disable-next-line no-restricted-globals
  const namespace_repository = imports.gi[namespace];
  if (!namespace_repository) return null;

  const [, name] = class_name.split(namespace);
  if (!name) return null;

  return namespace_repository[name];
}

export function isPreviewable(class_name) {
  const klass = getObjectClass(class_name);
  if (!klass) return false;

  if (GObject.type_is_a(klass, Adw.Dialog)) return false;

  // https://github.com/workbenchdev/Workbench/issues/140
  if (GObject.type_test_flags(klass, GObject.TypeFlags.ABSTRACT)) return false;

  return GObject.type_is_a(klass, Gtk.Widget);
}

export function assertBuildable(el) {
  for (const el_object of el.getChildren("object")) {
    assertObjectBuildable(el_object, true);
  }
}

function getChildProperty(el) {
  const property = getProperty(el, "child");
  return property?.getChild("object") || null;
}

function getProperty(el, name) {
  const properties = el.getChildren("property");
  return properties.find((el) => el.attrs.name === name);
}

function getKlass(el) {
  const class_name = el.attrs.class;
  if (!class_name) return null;
  return getObjectClass(class_name);
}

function assertObjectBuildable(el_object, is_root) {
  const klass = getKlass(el_object);
  if (klass) {
    // https://github.com/workbenchdev/Workbench/issues/165
    if (GObject.type_test_flags(klass, GObject.TypeFlags.ABSTRACT)) {
      throw new Error(
        `${klass.$gtype.name} is an abstract type. It cannot be instantiated.`,
      );
    }

    // https://github.com/workbenchdev/Workbench/issues/49
    // https://github.com/workbenchdev/Workbench/issues/145
    if (!GObject.type_is_a(klass, Gtk.Buildable)) {
      if (el_object.getChildren("child").length > 0) {
        throw new Error(
          `${klass.$gtype.name} is not a GtkBuildable. It cannot have children.`,
        );
      }
    }

    // https://github.com/workbenchdev/Workbench/issues/215
    if (!is_root && GObject.type_is_a(klass, Gtk.Root)) {
      throw new Error(
        `${klass.$gtype.name} is a GtkRoot. GtkRoot objects can only be used at the top-level.`,
      );
    }

    // https://github.com/workbenchdev/Workbench/pull/880
    if (!is_root && GObject.type_is_a(klass, Adw.Dialog)) {
      throw new Error(
        `${klass.$gtype.name} is a AdwDialog. AdwDialog objects can only be used at the top-level.`,
      );
    }

    // https://github.com/workbenchdev/Workbench/issues/130
    if (
      GObject.type_is_a(klass, Adw.Window) &&
      getProperty(el_object, "titlebar")
    ) {
      throw new Error(
        `${klass.$gtype.name} does not support the titlebar property.`,
      );
    }

    // https://github.com/workbenchdev/Workbench/issues/130
    if (
      GObject.type_is_a(klass, Adw.Window) &&
      getProperty(el_object, "child")
    ) {
      throw new Error(
        `${klass.$gtype.name} does not support the child property.`,
      );
    }

    // https://github.com/workbenchdev/Workbench/issues/167
    // https://github.com/workbenchdev/Workbench/issues/278
    // https://github.com/workbenchdev/Workbench/issues/998
    if (
      GObject.type_is_a(klass, Gtk.StackPage) ||
      GObject.type_is_a(klass, Gtk.NotebookPage)
    ) {
      const child = getChildProperty(el_object);
      if (!child) {
        throw new Error(`${klass.$gtype.name} is missing a child widget.`);
      }
    }
  }

  const child_property = getChildProperty(el_object);
  if (child_property) {
    const child_klass = getKlass(child_property);
    if (!GObject.type_is_a(child_klass, Gtk.Widget)) {
      throw new Error(`${child_klass.$gtype.name} is not a GtkWidget.`);
    }
    assertObjectBuildable(child_property, false);
  }

  // Iterate over properties
  for (const el_property of el_object.getChildren("property")) {
    for (const el of el_property.getChildren("object")) {
      assertObjectBuildable(el, false);
    }
  }

  // Iterate over children
  for (const el_child of el_object.getChildren("child")) {
    for (const el of el_child.getChildren("object")) {
      assertObjectBuildable(el, false);
    }
  }
}

const BROADWAY_DISPLAY = ":5";
let broadwayd = null;

function ensureBroadway() {
  if (broadwayd) return;
  // GTK4's daemon is gtk4-broadwayd (broadwayd is the GTK3 one)
  broadwayd = Gio.Subprocess.new(
    ["gtk4-broadwayd", BROADWAY_DISPLAY],
    Gio.SubprocessFlags.STDOUT_SILENCE | Gio.SubprocessFlags.STDERR_SILENCE,
  );
}

export async function detectCrash({ xml, css, object_id }) {
  ensureBroadway();

  const launcher = new Gio.SubprocessLauncher({
    flags: Gio.SubprocessFlags.NONE,
  });
  launcher.setenv("GDK_BACKEND", "broadway", true);
  launcher.setenv("BROADWAY_DISPLAY", BROADWAY_DISPLAY, true);
  launcher.setenv("G_DEBUG", "fatal-criticals", true); // optional: make criticals fail

  const proc = launcher.spawnv(["workbench-crasher", xml, css, object_id]);

  const success = await proc.wait_check_async(null).catch((_err) => {
    return false;
  });
  return !success;
}

function getNamespaces() {
  const search_paths = repository.get_search_path();

  const namespaces = [];
  for (const search_path of search_paths) {
    try {
      namespaces.push(...getSearchPathNamespaces(search_path));
    } catch {
      /* */
    }
  }
  return namespaces;
}

function getSearchPathNamespaces(search_path) {
  const enumerator = Gio.File.new_for_path(search_path).enumerate_children(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );

  const namespaces = [];

  for (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;
    const name = file_info.get_name();
    if (!name.endsWith(".typelib")) continue;
    const [namespace] = name.split("-");
    namespaces.push(namespace);
  }

  return namespaces;
}
