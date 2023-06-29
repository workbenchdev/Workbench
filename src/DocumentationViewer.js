import GObject from "gi://GObject"
import Gtk from "gi://Gtk";
import Gio from "gi://Gio"
import GLib from "gi://GLib";
import Adw from "gi://Adw";
import WebKit from "gi://WebKit"

import {decode} from "./util.js"
import resource from "./DocumentationViewer.blp";

export default function DocumentationViewer({
  window: application_window,
  application
  }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("documentation_viewer");

  const container = builder.get_object("webview_container");
  const webview = new WebKit.WebView();
  const listbox = builder.get_object("listbox");

  const button_sidebar = builder.get_object("button_sidebar");
  const button_search = builder.get_object("button_search");
  const search_entry = builder.get_object("search_entry");
  const search_bar = builder.get_object("search_bar");
  const back = builder.get_object("button_back");
  const forward = builder.get_object("button_forward");

  const base_path = "/app/share/doc";

  webview.load_uri(`file://${base_path}/gtk4/index.html`);
  container.child = webview;
  let loaded = false;

  webview.connect("load-changed", (view, load_event) => {
    back.sensitive = webview.can_go_back();
    forward.sensitive = webview.can_go_forward();

    if (load_event === WebKit.LoadEvent.FINISHED) {
      loaded = true;
      button_sidebar.active = false;
    } else {
      loaded = false;
    }
  });

  back.connect("clicked", () => {
    webview.go_back();
  });

  forward.connect("clicked", () => {
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
      for (const doc in docs) {
        const row = new Adw.ActionRow({
          title: doc,
        });
        row.add_suffix(new Gtk.Image({ icon_name: "go-next-symbolic" }));
        listbox.append(row);
      }
      listbox.connect("row-selected", (self, row) => {
        webview.load_uri(docs[row.title]);
      });
      return docs;
    })
    .catch(logError)



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
      const uri = `file://${base_path}/${dir}/index.html`;
      docs[namespace] = uri;
    } catch (e) {
      // Ignore the error if the dir does not contain index.json
      if (!e.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) logError(e);
    }
  }

  return docs;
}

async function readDocIndex(base_path, dir) {
  const file = Gio.File.new_for_path(`${base_path}/${dir}/index.json`);
  const [json] = await file.load_contents_async(null);
  return JSON.parse(decode(json));
}

async function list(dir_path) {
  // List all files in dir_path
  const dir = Gio.File.new_for_path(dir_path);
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

async function disableDocSidebar(webview){
  try{
    const script = `window.document.querySelector("nav").style.display = "none"`;
    await webview.evaluate_javascript(script, -1, null, null, null);
  } catch(e) {
    logError(e);
  }
}

async function enableDocSidebar(webview) {
  try{
    const script = `window.document.querySelector("nav").style.display = "block"`;
    await webview.evaluate_javascript(script, -1, null, null, null);
  } catch(e) {
    logError(e);
  }
}
