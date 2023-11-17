import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import GIRepository from "gi://GIRepository";
// const repository = GIRepository.Repository.get_default();

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

  // GLib-GObject-ERROR: cannot create instance of abstract (non-instantiatable) type 'GtkWidget'
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

function assertObjectBuildable(el_object, root) {
  const klass = getKlass(el_object);
  if (klass) {
    // GLib-GObject-ERROR: cannot create instance of abstract (non-instantiatable) type 'GtkWidget'
    if (GObject.type_test_flags(klass, GObject.TypeFlags.ABSTRACT)) {
      throw new Error(
        `${klass.$gtype.name} is an abstract type. It cannot be instantiated.`,
      );
    }

    // Gtk:ERROR:../gtk/gtkbuilder.c:1044:_gtk_builder_add: assertion failed: (GTK_IS_BUILDABLE (parent))
    if (!GObject.type_is_a(klass, Gtk.Buildable)) {
      if (el_object.getChildren("child").length > 0) {
        throw new Error(
          `${klass.$gtype.name} is not a GtkBuildable. It cannot have children.`,
        );
      }
    }

    // Gtk:ERROR:../gtk/gtkwidget.c:2448:gtk_widget_root: assertion failed: (priv->root == NULL)
    if (!root && GObject.type_is_a(klass, Gtk.Root)) {
      throw new Error(
        `${klass.$gtype.name} is a GtkRoot. GtkRoot objects can only appear at the top-level.`,
      );
    }

    // Adwaita-gtk_window_set_titlebar() is not supported for AdwWindow
    if (
      GObject.type_is_a(klass, Adw.Window) &&
      getProperty(el_object, "titlebar")
    ) {
      throw new Error(
        `${klass.$gtype.name} does not support the titlebar property.`,
      );
    }

    // Adwaita-gtk_window_set_child() is not supported for AdwWindow
    if (
      GObject.type_is_a(klass, Adw.Window) &&
      getProperty(el_object, "child")
    ) {
      throw new Error(
        `${klass.$gtype.name} does not support the child property.`,
      );
    }
  }

  // Gtk-ERROR **: 23:19:54.204: GtkStackPage '<unnamed>' [0x55b094802eb0] is missing a child widget
  if (GObject.type_is_a(klass, Gtk.StackPage)) {
    const child = getChildProperty(el_object);
    // log(child);
    if (!child) {
      throw new Error(`${klass.$gtype.name} is missing a child widget.`);
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

export async function detectCrash(str, object_id) {
  // const flags =
  //   Gio.SubprocessFlags.STDOUT_SILENCE | Gio.SubprocessFlags.STDERR_SILENCE;
  const flags = Gio.SubprocessFlags.NONE;
  const proc = Gio.Subprocess.new(["workbench-crasher", str, object_id], flags);

  const success = await proc.wait_check_async(null).catch((_err) => {
    return false;
  });
  return !success;
}

function getNamespaces() {
  const search_paths = GIRepository.Repository.get_search_path();

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
    "standard::name",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );

  const namespaces = [];

  for (const file_info of enumerator) {
    const name = file_info.get_name();
    if (!name.endsWith(".typelib")) continue;
    const [namespace] = name.split("-");
    namespaces.push(namespace);
  }

  return namespaces;
}
