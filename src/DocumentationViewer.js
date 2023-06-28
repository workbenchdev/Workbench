import GObject from "gi://GObject"
import Gtk from "gi://Gtk";
import Gio from "gi://Gio"
import GLib from "gi://GLib";
import Adw from "gi://Adw";
import WebKit from "gi://WebKit"

import resource from "./DocumentationViewer.blp";

Gio._promisify(
  WebKit.WebView.prototype,
  "evaluate_javascript",
  "evaluate_javascript_finish"
);

Gio._promisify(
  Gio.File.prototype,
  "enumerate_children_async",
  "enumerate_children_finish",
);

Gio._promisify(
  Gio.FileEnumerator.prototype,
  "next_files_async",
  "next_files_finish",
);

Gio._promisify(
  Gio.File.prototype,
  "load_contents_async",
  "load_contents_finish",
);

export default function DocumentationViewer({
  window:application_window,
  application
  }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("documentation_viewer");

  const container = builder.get_object("webview_container");
  const webview = new WebKit.WebView();
  const listbox = builder.get_object("listbox");

  const sidebar_button = builder.get_object("sidebar_button");
  const search_button = builder.get_object("search_button");
  const search_entry = builder.get_object("search_entry");
  const search_bar = builder.get_object("search_bar");
  const back = builder.get_object("back");
  const forward = builder.get_object("forward");

  const base_path = "/app/share/doc";

  webview.load_uri(`file://${base_path}/gtk4/index.html`);
  container.child = webview;
  let loaded = false;

  webview.connect("load-changed", (view, load_event) => {
    if (load_event === WebKit.LoadEvent.FINISHED) {
      loaded = true;
      sidebar_button.active = false;
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

  sidebar_button.connect("toggled", () => {
    if (loaded) {
      if (sidebar_button.active) disableDocSidebar(webview);
      else enableDocSidebar(webview);
    }
  });

  sidebar_button.connect("toggled", () => {
    if (loaded) {
      if (sidebar_button.active) disableDocSidebar(webview);
      else enableDocSidebar(webview);
    }
  });

  search_entry.connect("search-changed", () => {
    listbox.invalidate_filter();
  });

  search_bar.bind_property(
    "search-mode-enabled",
    search_button,
    "active",
    GObject.BindingFlags.BIDIRECTIONAL,
  );

  search_button.connect("toggled", () => {
    if (search_button.active) sidebar_button.active = true;
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
      listbox.connect("row-selected", (_, row) => {
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
  application.set_accels_for_action("app.documentation", ["<Control><Shift>D"]);
}

async function getDocs(base_path) {
  try {
    const docs = {};
    const dirs = await list(base_path);

    for (const dir of dirs) {
      try {
        const index = await readDocIndex(base_path, dir);
        const namespace = `${index["meta"]["ns"]}-${index["meta"]["version"]}`;
        const path = `file://${base_path}/${dir}/index.html`;
        docs[namespace] = path;
      } catch (e) {
        // Ignore the error if the dir does not contain index.json
        if (!e.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) logError(e);
      }
    }

    return docs;
  } catch (e) {
    logError(e);
  }
}

async function readDocIndex(base_path, dir) {
  const file = Gio.File.new_for_path(`${base_path}/${dir}/index.json`);
  const [json, _] = await file.load_contents_async(null);
  return JSON.parse(new TextDecoder().decode(json));
}

async function list(dir_path) {
  // List all files in dir_path
  try {
    const dir = Gio.File.new_for_path(dir_path);
    const files = [];
    const enumerator = await dir.enumerate_children_async(
      "standard::name",
      Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
      GLib.PRIORITY_DEFAULT,
      null,
    );
    while (true) {
      const infos = await enumerator.next_files_async(
        10,
        GLib.PRIORITY_DEFAULT,
        null,
      );
      if (infos.length === 0) break;
      for (const info of infos) {
        files.push(info.get_name());
      }
    }
    return files;
  } catch (e) {
    logError(e);
  }
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
