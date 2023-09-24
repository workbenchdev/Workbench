import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import WebKit from "gi://WebKit";
import { decode } from "./util.js";
import resource from "./DocumentationViewer.blp";
import {
  action_extensions,
  isDocumentationEnabled,
} from "./Extensions/Extensions.js";

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
  const browse_page = builder.get_object("browse_page");
  const search_page = builder.get_object("search_page");
  const search_entry = builder.get_object("search_entry");

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
  const filter_model = builder.get_object("filter_model");
  const filter = filter_model.filter;
  filter.expression = expr;

  search_entry.connect("search-changed", () => {
    if (search_entry.text) {
      stack.visible_child = search_page;
      filter.search = search_entry.text;
    } else {
      stack.visible_child = browse_page;
    }
  });

  const search_model = builder.get_object("search_model");
  const sorter = builder.get_object("search_sorter");
  sorter.expression = expr;
  search_model.connect("selection-changed", () => {
    const uri = search_model.selected_item.uri;
    webview.load_uri(uri);
  });

  async function open() {
    const root_model = Gio.ListStore.new(DocumentationPage);
    browse_list_view.model = createBrowseSelectionModel(root_model, webview);

    await scanLibraries(root_model, Gio.File.new_for_path("/usr/share/doc"));
    browse_list_view.model.selected = 12;
    await scanLibraries(root_model, Gio.File.new_for_path("/app/share/doc"));

    const search_model = flattenModel(root_model);
    filter_model.model = search_model;
  }

  const action_documentation = new Gio.SimpleAction({
    name: "documentation",
    parameter_type: null,
  });
  action_documentation.connect("activate", () => {
    if (!isDocumentationEnabled()) {
      action_extensions.activate(null);
      return;
    }

    window.present();
    open().catch(console.error);
  });
  application.add_action(action_documentation);
}

async function loadLibrary(model, directory) {
  try {
    const json_file = directory.get_child("index.json");
    const html_file = directory.get_child("index.html");

    const [data] = await json_file.load_contents_async(null);
    const index = JSON.parse(decode(data));

    const namespace = `${index.meta.ns}-${index.meta.version}`;
    const page = new DocumentationPage({
      name: namespace,
      search_name: namespace,
      uri: html_file.get_uri(),
      children: getChildren(index, directory),
    });

    model.append(page);
  } catch (error) {
    if (!error.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) throw error;
  }
}

const IGNORED_LIBRARIES = [
  "atk",
  "javascriptcoregtk-4.1",
  "libhandy-1",
  "libnotify-0",
  "webkit2gtk-4.1",
  "webkit2gtk-web-extension-4.1",
];

async function scanLibraries(model, base_dir) {
  const libraries = [];

  const iter = await base_dir.enumerate_children_async(
    "standard::name,standard::type",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const infos = await iter.next_files_async(10, GLib.PRIORITY_DEFAULT, null);
    if (infos.length === 0) break;

    for (const info of infos) {
      if (info.get_file_type() !== Gio.FileType.DIRECTORY) continue;

      if (IGNORED_LIBRARIES.includes(info.get_name())) continue;

      const directory = iter.get_child(info);
      libraries.push(loadLibrary(model, directory));
    }
  }

  return Promise.allSettled(libraries);
}

function flattenModel(list_store, flattened_model = newListStore()) {
  for (const item of list_store) {
    if (item.search_name) flattened_model.append(item);
    if (item.children) flattenModel(item.children, flattened_model);
  }
  return flattened_model;
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
  return selection_model;
}

const SECTION_TYPES = {
  class: ["Classes", "#classes"],
  content: ["Addition Documentation", "#extra"],
  interface: ["Interfaces", "#interfaces"],
  record: ["Structs", "#structs"],
  alias: ["Aliases", "#aliases"],
  enum: ["Enumerations", "#enums"],
  bitfield: ["Bitfields", "#bitfields"],
  function: ["Functions", "#functions"],
  function_macro: ["Function Macros", "#function_macros"],
  domain: ["Error Domains", "#domains"],
  callback: ["Callbacks", "#callbacks"],
  constant: ["Constants", "#constants"],
};

const SUBSECTION_TYPES = {
  ctor: ["Constructors", "#constructors"],
  type_func: ["Functions", "#type-functions"],
  method: ["Instance Methods", "#methods"],
  property: ["Properties", "#properties"],
  signal: ["Signals", "#signals"],
  class_method: ["Class Methods", "#class-methods"],
  vfunc: ["Virtual Methods", "#virtual-methods"],
};

function getChildren(index, dir) {
  const index_html = dir.get_child("index.html").get_uri();
  const symbols = index.symbols;

  const sections = {};
  const subsections = {};

  for (const section in SECTION_TYPES) sections[section] = newListStore();

  for (const symbol of symbols) {
    let location;
    if (sections[symbol.type]) location = sections[symbol.type];
    else if (symbol.type_name) {
      if (!subsections[symbol.type_name]) {
        const new_subsection = {};
        for (const subsection in SUBSECTION_TYPES)
          new_subsection[subsection] = newListStore();
        subsections[symbol.type_name] = new_subsection;
      }
      location = subsections[symbol.type_name][symbol.type];
    }
    if (location)
      location.append(
        new DocumentationPage({
          name: symbol.name,
          search_name: getSearchNameForDocument(symbol, index.meta),
          uri: `${dir.get_uri()}/${getLinkForDocument(symbol)}`,
        }),
      );
  }

  createSubsections(subsections, sections);

  const sections_model = newListStore();
  for (const section in sections) {
    if (sections[section].get_n_items() > 0)
      sections_model.append(
        new DocumentationPage({
          name: SECTION_TYPES[section][0],
          uri: `${index_html}${SECTION_TYPES[section][1]}`,
          children: sections[section],
        }),
      );
  }
  return sections_model;
}

const REQUIRED = ["class", "interface", "record", "domain"];

function createSubsections(subsections, sections) {
  for (const type of REQUIRED) {
    for (const item of sections[type]) {
      const model = newListStore();
      const name = item.name;
      for (const subsection in subsections[name]) {
        if (subsections[name][subsection].get_n_items() > 0)
          model.append(
            new DocumentationPage({
              name: SUBSECTION_TYPES[subsection][0],
              uri: `${item.uri}${SUBSECTION_TYPES[subsection][1]}`,
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
