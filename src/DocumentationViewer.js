import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
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

  const user_content_manager = webview.get_user_content_manager();

  const stylesheet = new WebKit.UserStyleSheet(
    ".devhelp-hidden { display: none; }", // source
    WebKit.UserContentInjectedFrames.ALL_FRAMES, // injected_frames
    WebKit.UserStyleLevel.USER, // level
    null,
    null,
  );
  user_content_manager.add_style_sheet(stylesheet);

  webview.connect("load-changed", () => {
    updateButtons();
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
  const filter_docs = [
    "atk",
    "javascriptcoregtk-4.1",
    "libhandy-1",
    "libnotify-0",
    "webkit2gtk-4.1",
    "webkit2gtk-web-extension-4.1",
  ];
  async function open() {
    if (!promise_load)
      promise_load = getDirs(base_path, filter_docs)
        .then((dirs) => createIndex(base_path, dirs))
        .then((indexes) => {
          browse_list_view.model = createBrowseListModel(
            base_path,
            indexes,
            webview,
          );
          search_list_view.model = createSearchListModel(
            base_path,
            indexes,
            webview,
            filter,
          );
        });
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

function createSearchListModel(base_path, indexes, webview, filter) {
  const model = newListStore();
  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    const dir = base_path.get_child(index.dir);
    const meta = index.meta;
    const namespace = `${meta.ns}-${meta.version}`;
    model.append(
      new DocumentationPage({
        uri: dir.get_child("index.html").get_uri(),
        search_name: namespace,
      }),
    );
    for (const symbol of index.symbols) {
      model.append(
        new DocumentationPage({
          search_name: getSearchNameForDocument(symbol, meta),
          uri: `${dir.get_uri()}/${getLinkForDocument(symbol)}`,
        }),
      );
    }
  }
  return createSearchSelectionModel(model, filter, webview);
}

function createSearchSelectionModel(root_model, filter, webview) {
  const filter_model = Gtk.FilterListModel.new(root_model, filter);
  const sorter = Gtk.StringSorter.new(filter.expression);
  const sort_model = Gtk.SortListModel.new(filter_model, sorter);
  const selection_model = Gtk.SingleSelection.new(sort_model);

  selection_model.connect("selection-changed", () => {
    const uri = selection_model.selected_item.uri;
    webview.load_uri(uri);
  });
  return selection_model;
}

function createBrowseListModel(base_path, indexes, webview) {
  const model = newListStore();
  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    const dir = base_path.get_child(index.dir);
    const namespace = `${index.meta.ns}-${index.meta.version}`;
    model.append(
      new DocumentationPage({
        name: namespace,
        uri: dir.get_child("index.html").get_uri(),
        children: getChildren(index, dir),
      }),
    );
  }
  return createBrowseSelectionModel(model, webview);
}

async function createIndex(base_path, dirs) {
  const indexes = [];
  for (const dir of dirs) {
    indexes.push(readIndexJSON(base_path, dir));
  }
  const results = await Promise.allSettled(indexes);
  const fullfiled = results.filter((result) => result.status === "fulfilled");
  const values = [];
  fullfiled.forEach((result) => values.push(result.value));
  return values;
}

async function getDirs(base_path, filter_docs) {
  const dirs = await list(base_path);
  const filtered = dirs.filter((dir) => !filter_docs.includes(dir));
  return filtered;
}

function createBrowseSelectionModel(root_model, webview) {
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
  selection_model.selected = 12;
  return selection_model;
}

function getChildren(index, dir) {
  const index_html = dir.get_child("index.html").get_uri();
  const symbols = index.symbols;

  const section_types = {
    class: ["Classes", "#classes"],
    content: ["Addition Documentation", "#extra"],
    interface: ["Interfaces", "#interfaces"],
    record: ["Structs", "#structs"],
    alias: ["Aliases", "#aliases"],
    enum: ["Enumerations", "#enums"],
    bitfield: ["Bitfields", "#bitfields"],
    function: ["Functions", "#functions"],
    function_macro: ["Function Macros", "function_macros"],
    domain: ["Error Domains", "#domains"],
    callback: ["Callbacks", "#callbacks"],
    constant: ["Constants", "#constants"],
  };
  const subsection_types = {
    ctor: ["Constructors", "#constructors"],
    type_func: ["Functions", "#type-functions"],
    method: ["Instance Methods", "#methods"],
    property: ["Properties", "#properties"],
    signal: ["Signals", "#signals"],
    class_method: ["Class Methods", "#class-methods"],
    vfunc: ["Virtual Methods", "#virtual-methods"],
  };

  const sections = {};
  const subsections = {};

  for (const section in section_types) sections[section] = newListStore();

  for (const symbol of symbols) {
    let location;
    if (sections[symbol.type]) location = sections[symbol.type];
    else if (symbol.type_name) {
      if (!subsections[symbol.type_name]) {
        const newSubsection = {};
        for (const subsection in subsection_types)
          newSubsection[subsection] = newListStore();

        subsections[symbol.type_name] = newSubsection;
        location = subsections[symbol.type_name][symbol.type];
      }
    }
    if (location)
      location.append(
        new DocumentationPage({
          name: symbol.name,
          uri: `${dir.get_uri()}/${getLinkForDocument(symbol)}`,
        }),
      );
  }

  createSubsections(subsections, subsection_types, sections);

  const sections_model = newListStore();
  for (const section in sections) {
    if (sections[section].get_n_items() > 0)
      sections_model.append(
        new DocumentationPage({
          name: section_types[section][0],
          uri: `${index_html}${section_types[section][1]}`,
          children: sections[section],
        }),
      );
  }
  return sections_model;
}

function createSubsections(subsections, subsection_types, sections) {
  // Create subsections (Constructors, Methods, Signals....) for sections in "required"
  const required = ["class", "interface", "record", "domain"];
  for (const type of required) {
    for (const item of sections[type]) {
      const model = newListStore();
      const name = item.name;
      for (const subsection in subsections[name]) {
        if (subsections[name][subsection].get_n_items() > 0)
          model.append(
            new DocumentationPage({
              name: subsection_types[subsection][0],
              uri: `${item.uri}${subsection_types[subsection][1]}`,
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

function getSearchNameForDocument(doc, meta) {
  switch (doc.type) {
    case "alias":
    case "bitfield":
    case "callback":
    case "class":
    case "domain":
    case "enum":
    case "interface":
    case "record":
      return doc.ctype;

    case "class_method":
    case "constant":
    case "ctor":
    case "function":
    case "function_macro":
    case "method":
    case "type_func":
      return doc.ident;

    case "property":
      return `${meta.ns}${doc.type_name}:${doc.name}`;
    case "signal":
      return `${meta.ns}${doc.type_name}::${doc.name}`;
    case "vfunc":
      return `${meta.ns}${doc.type_name}.${doc.name}`;

    case "content":
      return doc.name;
  }
}

function getLinkForDocument(doc) {
  switch (doc.type) {
    case "alias":
      return `alias.${doc.name}.html`;
    case "bitfield":
      return `flags.${doc.name}.html`;
    case "callback":
      return `callback.${doc.name}.html`;
    case "class":
      return `class.${doc.name}.html`;
    case "class_method":
      return `class_method.${doc.struct_for}.${doc.name}.html`;
    case "constant":
      return `const.${doc.name}.html`;
    case "content":
      return doc.href;
    case "ctor":
      return `ctor.${doc.type_name}.${doc.name}.html`;
    case "domain":
      return `error.${doc.name}.html`;
    case "enum":
      return `enum.${doc.name}.html`;
    case "function":
      return `func.${doc.name}.html`;
    case "function_macro":
      return `func.${doc.name}.html`;
    case "interface":
      return `iface.${doc.name}.html`;
    case "method":
      return `method.${doc.type_name}.${doc.name}.html`;
    case "property":
      return `property.${doc.type_name}.${doc.name}.html`;
    case "record":
      return `struct.${doc.name}.html`;
    case "signal":
      return `signal.${doc.type_name}.${doc.name}.html`;
    case "type_func":
      return `type_func.${doc.type_name}.${doc.name}.html`;
    case "union":
      return `union.${doc.name}.html`;
    case "vfunc":
      return `vfunc.${doc.type_name}.${doc.name}.html`;
  }
}

async function readIndexJSON(base_path, dir) {
  // Reads index.json in the given dir
  const file = base_path.get_child(dir).get_child("index.json");
  const [data] = await file.load_contents_async(null);
  const json = JSON.parse(decode(data));
  return { dir, ...json };
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
