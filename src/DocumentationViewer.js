import GObject from "gi://GObject"
import Gtk from "gi://Gtk";
import Gio from "gi://Gio"
import Adw from "gi://Adw";
import WebKit from "gi://WebKit?version=6.0"

import resource from "./DocumentationViewer.blp";

Gio._promisify(
  WebKit.WebView.prototype,
  "evaluate_javascript",
  "evaluate_javascript_finish"
);

export default function DocumentationViewer({
  window:application_window,
  application
  }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("documentation_viewer");
  const container = builder.get_object("webview_container");
  const webview = new WebKit.WebView();
  container.child = webview;

  webview.load_uri("file:///app/share/doc/gtk4/class.Widget.html");

  webview.connect("load-changed", (view, load_event) => {
    if (load_event === WebKit.LoadEvent.FINISHED){
        disableDocSidebar(webview);
    }
  });

  const base_path = "/app/share/doc";
  const Documentation = GObject.registerClass(
    {
      GTypeName: "Documentation",
      Properties: {
        namespace: GObject.ParamSpec.string(
          "namespace",
          "Namespace",
          "Namespace of the documentation",
          GObject.ParamFlags.READWRITE,
          "",
        ),
      },
    },
    class extends GObject.Object {},
  );

  const list_store = Gio.ListStore.new(Documentation);
  const docs = getDocs(base_path);

  for (const doc in docs) {
    list_store.append(
      new Documentation({
        namespace: docs[doc][0],
      }),
    );
  }

  /*
  Print all the docs
  for (const item of list_store) {
    log(item.namespace);
  }
  */

  const factory = new Gtk.SignalListItemFactory();

  factory.connect("setup", (_, item) => {
    item.child = new Gtk.Label();
  });

  factory.connect("bind", (_, item) => {
    item.child.label = item.item.namespace;
  });

  const listview = builder.get_object("listview");
  listview.set_model(new Gtk.SingleSelection(list_store));
  listview.set_factory(factory);

  const action_documentation = new Gio.SimpleAction({
    name: "documentation",
    parameter_type: null,
  });
  action_documentation.connect("activate", () => {
    window.present();
  });
  application.add_action(action_documentation);
  application.set_accels_for_action("app.documentation", ["<Control><Shift>D"]);
}

async function disableDocSidebar(webview){
  try{
    const script = `window.document.querySelector("nav").style.display = "none"`;
    await webview.evaluate_javascript(script, -1, null, null, null);
  } catch(e) {
    logError(e);
  }
}

function getDocs(base_path) {
  // Object that maps folder name to namespace and index of doc
  const docs = {};
  for (const doc of list(base_path)) {
    const doc_path = `${base_path}/${doc}`;
    const contents = list(doc_path);
    if (contents.includes("index.json")) {
      const index = readDocIndex(base_path, doc);
      const ns = index["meta"]["ns"];
      const version = index["meta"]["version"];
      const namespace = `${ns}-${version}`;
      docs[doc] = [namespace, index];
    }
  }
  return docs;
}

function readDocIndex(base_path, doc) {
  const file = Gio.File.new_for_path(`${base_path}/${doc}/index.json`);
  const json = file.load_contents(null)[1];
  return JSON.parse(new TextDecoder().decode(json));
}

function list(dir_path) {
  const files = [];
  const dir = Gio.File.new_for_path(dir_path);
  const enumerator = dir.enumerate_children(
    "standard::name",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  for (const file_info of enumerator) {
    files.push(file_info.get_name());
  }
  return files;
}
