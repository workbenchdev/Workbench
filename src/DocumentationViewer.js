import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Adw from "gi://Adw";
import WebKit from "gi://WebKit";

import { decode } from "./util.js";
import resource from "./DocumentationViewer.blp";

const DocumentationPage = GObject.registerClass(
  {
    GTypeName: "DocumentationPage",
    Properties: {
      name: GObject.ParamSpec.string(
        "name",
        "name",
        "Display name in the sidebar",
        GObject.ParamFlags.READWRITE,
        "",
      ),
      uri: GObject.ParamSpec.string(
        "uri",
        "uri",
        "Uri to the documentation page",
        GObject.ParamFlags.READWRITE,
        "",
      ),
      children: GObject.ParamSpec.object(
        "children",
        "children",
        null,
        GObject.ParamFlags.READWRITE,
        Gio.ListStore,
      ),
    },
  },
  class DocumentationPage extends GObject.Object {},
);

export default function DocumentationViewer({ application }) {
  const builder = Gtk.Builder.new_from_resource(resource);

  const window = builder.get_object("documentation_viewer");
  const webview = builder.get_object("webview");
  const list_view = builder.get_object("list_view");
  const button_back = builder.get_object("button_back");
  const button_forward = builder.get_object("button_forward");

  const base_path = Gio.File.new_for_path("/app/share/doc");

  webview.connect("load-changed", (self, load_event) => {
    updateButtons();
    if (load_event === WebKit.LoadEvent.FINISHED) disableDocSidebar(webview);
  });

  webview.get_back_forward_list().connect("changed", () => {
    updateButtons();
  });

  function updateButtons() {
    button_back.sensitive = webview.can_go_back();
    button_forward.sensitive = webview.can_go_forward();
  }

  button_back.connect("clicked", () => {
    webview.go_back();
  });

  button_forward.connect("clicked", () => {
    webview.go_forward();
  });

  getNamespaces(base_path)
    .then((docs) => {
      const root = newListStore();
      for (const doc of docs) {
        const dir_path = base_path.resolve_relative_path(doc.dir);
        getChildren(dir_path)
          .then((model) => {
            root.append(new DocumentationPage({
              name: doc.title,
              uri: doc.uri,
              children: model,
            }))
          })
      }
      return root;
    })
    .then((root) => {
      const tree_model = Gtk.TreeListModel.new(
        root,
        false,
        false,
        item => item.children,
      )
      const sorter = Gtk.TreeListRowSorter.new(Gtk.CustomSorter.new((a,b) => {
        const name1 = a.name;
        const name2 = b.name;
        return name1.localeCompare(name2);
      }));
      const sort_model = Gtk.SortListModel.new(tree_model, sorter);
      const selection_model = new Gtk.SingleSelection({model: sort_model});
      selection_model.connect("notify::selected", () => {
        const uri = selection_model.selected_item.item.uri;
        if (uri) webview.load_uri(uri);
      })
      list_view.model = selection_model;
    })
    .catch(logError);

  const action_documentation = new Gio.SimpleAction({
    name: "documentation",
    parameter_type: null,
  });
  action_documentation.connect("activate", () => {
    window.present();
  });
  application.add_action(action_documentation);
}

async function getChildren(dir) {
  const docs = await list(dir);
  return createSections(docs, dir);
}

function createSections(docs, dir) {
  const index_html = dir.get_child("index.html").get_uri();

  const section_name_uri = {
    class: ["Classes", "#classes"],
    iface: ["Interfaces", "#interfaces"],
    struct: ["Structs", "#structs"],
    alias: ["Aliases", "#aliases"],
    enum: ["Enumerations", "#enums"],
    flags: ["Bitfields", "#bitfields"],
    error: ["Error Domains", "#domains"],
    callback: ["Callbacks", "#callbacks"],
    const: ["Constants", "#constants"],
  }

  const sections = {};
  for (const section in section_name_uri)
    sections[section] = newListStore();

  const subsection_name_uri = {
    ctor: ["Constructors", "#constructors"],
    type_func: ["Functions", "#type-functions"],
    method: ["Instance Methods", "#methods"],
    property: ["Properties", "#properties"],
    signal: ["Signals", "#signals"],
    class_method: ["Class Methods", "#class-methods"],
    vfunc: ["Virtual Methods", "#virtual-methods"],
  }

  // Contains all items from the namespace that need a subsection
  // A subsection is used to show an item's methods, properties, signals etc
  const subsections = {};
  // List of sections that need subsections
  const subsections_required = ["class", "iface", "struct", "error"];

  for (const doc of docs) {
    const split_name = doc.split(".");
    // If file is of the form xx.xx.html for example class.Button.html
    if (split_name.length == 3 && sections[split_name[0]]) {
      const doc_page = new DocumentationPage({
        name: split_name[1],
        uri: dir.get_child(doc).get_uri(),
        // children is set to a non-null value later if it needs subsections
        children: null,
      })

      // If an item needs a subsection, then create empty "buckets" for it
      if (subsections_required.includes(split_name[0])) {
        const subsection = {};
        for (const sub in subsection_name_uri)
          subsection[sub] = newListStore()
        subsections[split_name[1]] = subsection;
      }
      // Add file into the corresponding section it belongs to
      sections[split_name[0]].append(doc_page)
    }
  }

  // Iterate through all the files again to add items into the subsection "buckets"
  for (const doc of docs) {
    const split_name = doc.split(".");
    // File is of the form xx.xx.xx.html for example ctor.Button.new.html
    if (split_name.length == 4  && subsections[split_name[1]]) {
        const doc_page = new DocumentationPage({
        name: split_name[2],
        uri: dir.get_child(doc).get_uri(),
        children: null,
      })
      // Add file to the subsection it belongs to
      subsections[split_name[1]][split_name[0]].append(doc_page);
    }
  }
  // Sets the children for items that need subsections
  createSubsections(subsections, subsections_required, subsection_name_uri, sections);

  const sections_model = newListStore();
  for (const section in sections) {
    sections_model.append(new DocumentationPage({
      name: section_name_uri[section][0],
      uri: `${index_html}${section_name_uri[section][1]}`,
      children: sections[section],
    }))
  }
  return sections_model
}

function createSubsections(subsections, subsections_required, subsection_name_uri, sections) {
  for (const type of subsections_required) {
    for (const item of sections[type]) {
      const model = newListStore();
      const name = item.name;
      for (const subsection in subsections[name]) {
        // If the ListStore is empty then dont create a subsection for it
        if (subsections[name][subsection].get_n_items() > 0)
          model.append(new DocumentationPage({
            name: subsection_name_uri[subsection][0],
            uri: `${item.uri}${subsection_name_uri[subsection][1]}`,
            children: subsections[name][subsection],
          }))
      }
      item.children = model;
    }
  }
}

async function getNamespaces(base_path) {
  const namespaces = [];
  const dirs = await list(base_path);

  for (const dir of dirs) {
    const results = await Promise.allSettled([
      getNamespaceFromIndexJSON(base_path, dir),
      getNamespaceFromIndexHTML(base_path, dir),
    ]);

    const fulfilled = results.find((result) => result.status === "fulfilled");
    if (!fulfilled) continue;

    const title = fulfilled.value;
    const uri = base_path.get_child(dir).get_child("index.html").get_uri();
    namespaces.push({
      title,
      uri,
      dir
    });
  }

  return namespaces;
}

async function getNamespaceFromIndexJSON(base_path, dir) {
  const file = base_path.get_child(dir).get_child("index.json");
  const [data] = await file.load_contents_async(null);
  const json = JSON.parse(decode(data));
  return `${json["meta"]["ns"]}-${json["meta"]["version"]}`;
}

async function getNamespaceFromIndexHTML(base_path, dir) {
  const file = base_path.get_child(dir).get_child("api-index-full.html");
  const [data] = await file.load_contents_async(null);
  const html = decode(data);
  const pattern = /<title>Index: ([^<]+)/;
  return html.match(pattern)[1];
}

async function list(dir) {
  // List all files in dir
  const files = [];
  const enumerator = await dir.enumerate_children_async(
    "standard::name",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );
  for await (const info of enumerator) {
    files.push(info.get_name());
  }
  return files;
}

async function disableDocSidebar(webview) {
  try {
    const script = `window.document.querySelector("nav").style.display = "none"`;
    await webview.evaluate_javascript(script, -1, null, null, null);
  } catch (err) {
    if (
      !err.matches(WebKit.JavascriptError, WebKit.JavascriptError.SCRIPT_FAILED)
    ) {
      logError(err);
    }
  }
}

async function enableDocSidebar(webview) {
  try {
    const script = `window.document.querySelector("nav").style.display = "block"`;
    await webview.evaluate_javascript(script, -1, null, null, null);
  } catch (err) {
    if (
      !err.matches(WebKit.JavascriptError, WebKit.JavascriptError.SCRIPT_FAILED)
    ) {
      logError(err);
    }
  }
}

function newListStore() {
  return Gio.ListStore.new(DocumentationPage)
}
