import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Adw from "gi://Adw";
import WebKit from "gi://WebKit";

import { decode } from "./util.js";
import resource from "./DocumentationViewer.blp";

export default function DocumentationViewer({ application }) {
  const builder = Gtk.Builder.new_from_resource(resource);

  const window = builder.get_object("documentation_viewer");
  const webview = builder.get_object("webview");
  const listbox = builder.get_object("listbox");
  const search_bar = builder.get_object("search_bar");
  const button_sidebar = builder.get_object("button_sidebar");
  const button_search = builder.get_object("button_search");
  const search_entry = builder.get_object("search_entry");
  const button_back = builder.get_object("button_back");
  const button_forward = builder.get_object("button_forward");

  const base_path = Gio.File.new_for_path("/app/share/doc");
  webview.load_uri(
    base_path.resolve_relative_path("gtk4/index.html").get_uri(),
  );
  let loaded = false;

  webview.connect("load-changed", (self, load_event) => {
    updateButtons();

    if (load_event === WebKit.LoadEvent.FINISHED) {
      loaded = true;
      button_sidebar.active = false;
    } else {
      loaded = false;
    }
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

  button_sidebar.connect("toggled", () => {
    if (loaded) {
      if (button_sidebar.active) disableDocSidebar(webview);
      else enableDocSidebar(webview);
    }
  });

  button_sidebar.connect("toggled", () => {
    if (loaded) {
      if (button_sidebar.active) disableDocSidebar(webview);
      else enableDocSidebar(webview);
    }
  });

  search_entry.connect("search-changed", () => {
    listbox.invalidate_filter();
  });

  search_bar.bind_property(
    "search-mode-enabled",
    button_search,
    "active",
    GObject.BindingFlags.BIDIRECTIONAL,
  );

  button_search.connect("toggled", () => {
    if (button_search.active) button_sidebar.active = true;
  });

  listbox.set_sort_func(sort);
  listbox.invalidate_sort();
  listbox.set_filter_func(filter);
  getDocs(base_path)
    .then((docs) => {
      for (const doc of docs) {
        const row = new Adw.ActionRow({
          title: doc.title,
        });
        row.uri = doc.uri;
        row.add_suffix(new Gtk.Image({ icon_name: "go-next-symbolic" }));
        listbox.append(row);
      }
      listbox.connect("row-selected", (self, row) => {
        webview.load_uri(row.uri);
      });
    })
    .catch(logError);

  function sort(row1, row2) {
    return row1.title > row2.title;
  }

  function filter(row) {
    const re = new RegExp(search_entry.text, "i");
    return re.test(row.title);
  }

  const action_documentation = new Gio.SimpleAction({
    name: "documentation",
    parameter_type: null,
  });
  action_documentation.connect("activate", () => {
    window.present();
  });
  application.add_action(action_documentation);
}

async function getDocs(base_path) {
  const docs = [];
  const dirs = await list(base_path);
  for (const dir of dirs) {
    try {
      const index = await readDocIndex(base_path, dir);
      const namespace = `${index["meta"]["ns"]}-${index["meta"]["version"]}`;
      const uri = base_path.get_child(dir).get_child("index.html").get_uri();
      docs.push({
        title: namespace,
        uri: uri,
      });
    } catch (e) {
      // Ignore the error if the dir does not contain index.json
      if (!e.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) logError(e);
    }
  }

  return docs;
}

async function readDocIndex(base_path, dir) {
  const file = base_path.get_child(dir).get_child("index.json");
  const [json] = await file.load_contents_async(null);
  return JSON.parse(decode(json));
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
  } catch (e) {
    logError(e);
  }
}

async function enableDocSidebar(webview) {
  try {
    const script = `window.document.querySelector("nav").style.display = "block"`;
    await webview.evaluate_javascript(script, -1, null, null, null);
  } catch (e) {
    logError(e);
  }
}
