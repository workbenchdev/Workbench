import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import WebKit from "gi://WebKit";
import { decode } from "./util.js";
import resource from "./DocumentationViewer.blp";
import { root } from "./lib/postcss.js";

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
      search_name: GObject.ParamSpec.string(
        "search_name",
        "search_name",
        "Name used to search the item in sidebar",
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
  const button_back = builder.get_object("button_back");
  const button_forward = builder.get_object("button_forward");
  const stack = builder.get_object("stack");
  const browse_list_view = builder.get_object("browse_list_view");
  const search_list_view = builder.get_object("search_list_view");
  const browse_page = builder.get_object("browse_page");
  const search_page = builder.get_object("search_page");
  const search_entry = builder.get_object("search_entry");

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

  const expr = new Gtk.ClosureExpression(
    GObject.TYPE_STRING,
    (item) => item.search_name,
    null,
  );
  const filter = new Gtk.StringFilter({
    expression: expr,
    match_mode: Gtk.StringFilterMatchMode.SUBSTRING,
  });

  search_entry.connect("search-changed", () => {
    if (search_entry.text) {
      stack.visible_child = search_page;
      filter.search = search_entry.text;
    } else {
      stack.visible_child = browse_page;
    }
  });

  let promise_load;
  async function open() {
    if (!promise_load)
      promise_load = populateModel(base_path)
        .then((root_model) => {
          browse_list_view.model = createBrowseListModel(root_model, webview);
          search_list_view.model = createSearchListModel(
            root_model,
            filter,
            webview,
          );
        })
        .catch(logError);
    await promise_load;
    window.present();
  }

  const action_documentation = new Gio.SimpleAction({
    name: "documentation",
    parameter_type: null,
  });
  action_documentation.connect("activate", () => {
    open();
  });
  application.add_action(action_documentation);
}

async function populateModel(base_path) {
  const root_model = newListStore();
  const filter_docs = [
    "atk",
    "javascriptcoregtk-4.1",
    "libhandy-1",
    "libnotify-0",
    "webkit2gtk-4.1",
    "webkit2gtk-web-extension-4.1",
  ];
  const docs = await getNamespaces(base_path, filter_docs);
  const children = [];
  for (const doc of docs) {
    const dir_path = base_path.resolve_relative_path(doc.dir);
    children.push(getChildren(dir_path, doc.title));
    root_model.append(
      new DocumentationPage({
        name: doc.title,
        search_name: doc.title,
        uri: doc.uri,
        children: null,
      }),
    );
  }
  const results = await Promise.all(children);
  for (let i = 0; i < results.length; i++)
    root_model.get_item(i).children = results[i];

  return root_model;
}

function createBrowseListModel(root_model, webview) {
  const tree_model = Gtk.TreeListModel.new(
    root_model,
    false,
    false,
    (item) => item.children,
  );
  const sorter = Gtk.TreeListRowSorter.new(
    Gtk.CustomSorter.new((a, b) => {
      const name1 = a.name;
      const name2 = b.name;
      return name1.localeCompare(name2);
    }),
  );
  const sort_model = Gtk.SortListModel.new(tree_model, sorter);
  const selection_model = Gtk.SingleSelection.new(sort_model);

  selection_model.connect("selection-changed", () => {
    const uri = selection_model.selected_item.item.uri;
    webview.load_uri(uri);
  });
  selection_model.selected = 16;
  return selection_model;
}

function createSearchListModel(root_model, filter, webview) {
  const flattened_model = flattenModel(root_model);
  const filter_model = Gtk.FilterListModel.new(flattened_model, filter);
  const sorter = Gtk.StringSorter.new(filter.expression);
  const sort_model = Gtk.SortListModel.new(filter_model, sorter);
  const selection_model = Gtk.SingleSelection.new(sort_model);

  selection_model.connect("selection-changed", () => {
    const uri = selection_model.selected_item.uri;
    webview.load_uri(uri);
  });
  return selection_model;
}

function flattenModel(list_store, flattened_model = newListStore()) {
  for (const item of list_store) {
    flattened_model.append(item);
    if (item.children) {
      flattenModel(item.children, flattened_model);
    }
  }
  return flattened_model;
}

async function getChildren(dir, namespace) {
  const docs = await list(dir);
  return createSections(docs, dir, namespace);
}

function createSections(docs, dir, namespace) {
  const index_html = dir.get_child("index.html").get_uri();

  const section_name_uri = {
    class: ["Classes", "#classes"],
    iface: ["Interfaces", "#interfaces"],
    struct: ["Structs", "#structs"],
    alias: ["Aliases", "#aliases"],
    enum: ["Enumerations", "#enums"],
    flags: ["Bitfields", "#bitfields"],
    func: ["Functions", "#functions"],
    error: ["Error Domains", "#domains"],
    callback: ["Callbacks", "#callbacks"],
    const: ["Constants", "#constants"],
  };

  const sections = {};
  for (const section in section_name_uri) sections[section] = newListStore();

  const subsection_name_uri = {
    ctor: ["Constructors", "#constructors"],
    type_func: ["Functions", "#type-functions"],
    method: ["Instance Methods", "#methods"],
    property: ["Properties", "#properties"],
    signal: ["Signals", "#signals"],
    class_method: ["Class Methods", "#class-methods"],
    vfunc: ["Virtual Methods", "#virtual-methods"],
  };

  const subsections = {};
  // List of sections that need subsections
  const subsections_required = ["class", "iface", "struct", "error"];

  for (const doc of docs) {
    const split_name = doc.split(".");
    // If file is of the form xx.xx.html for example class.Button.html
    if (split_name.length === 3 && sections[split_name[0]]) {
      const doc_page = new DocumentationPage({
        name: split_name[1],
        search_name: `${namespace.split("-")[0]}${split_name[1]}`,
        uri: dir.get_child(doc).get_uri(),
        // children is set to a non-null value later if it needs subsections
        children: null,
      });

      // If an item needs a subsection, then create empty "buckets" for it
      if (subsections_required.includes(split_name[0])) {
        const subsection = {};
        for (const sub in subsection_name_uri) subsection[sub] = newListStore();
        subsections[split_name[1]] = subsection;
      }
      // Add file into the corresponding section it belongs to
      sections[split_name[0]].append(doc_page);
    }
  }
  const camelToSnakeCase = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  for (const doc of docs) {
    const split_name = doc.split(".");
    // File is of the form xx.xx.xx.html for example ctor.Button.new.html
    if (split_name.length === 4 && subsections[split_name[1]]) {
      const doc_page = new DocumentationPage({
        name: split_name[2],
        uri: dir.get_child(doc).get_uri(),
        children: null,
      });
      if (split_name[0] === "signal") {
        doc_page.search_name = `${namespace.split("-")[0]}${split_name[1]}::${
          split_name[2]
        }`;
      } else if (split_name[0] === "property") {
        doc_page.search_name = `${namespace.split("-")[0]}${split_name[1]}:${
          split_name[2]
        }`;
      } else
        doc_page.search_name = `${namespace
          .split("-")[0]
          .toLowerCase()}${camelToSnakeCase(split_name[1])}_${split_name[2]}`;
      // Add file to the subsection it belongs to
      subsections[split_name[1]][split_name[0]].append(doc_page);
    }
  }
  // Sets the children for items that need subsections
  createSubsections(
    subsections,
    subsections_required,
    subsection_name_uri,
    sections,
  );

  const sections_model = newListStore();
  for (const section in sections) {
    // If the ListStore is empty then dont create a section for it
    if (sections[section].get_n_items() > 0)
      sections_model.append(
        new DocumentationPage({
          name: section_name_uri[section][0],
          uri: `${index_html}${section_name_uri[section][1]}`,
          children: sections[section],
        }),
      );
  }
  return sections_model;
}

function createSubsections(
  subsections,
  subsections_required,
  subsection_name_uri,
  sections,
) {
  for (const type of subsections_required) {
    for (const item of sections[type]) {
      const model = newListStore();
      const name = item.name;
      for (const subsection in subsections[name]) {
        // If the ListStore is empty then dont create a subsection for it
        if (subsections[name][subsection].get_n_items() > 0)
          model.append(
            new DocumentationPage({
              name: subsection_name_uri[subsection][0],
              uri: `${item.uri}${subsection_name_uri[subsection][1]}`,
              children: subsections[name][subsection],
            }),
          );
      }
      item.children = model;
    }
  }
}

function newListStore() {
  return Gio.ListStore.new(DocumentationPage);
}

async function getNamespaces(base_path, filter_docs) {
  const namespaces = [];
  const dirs = await list(base_path);
  const filtered = dirs.filter((dir) => !filter_docs.includes(dir));

  for (const dir of filtered) {
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
      dir,
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
