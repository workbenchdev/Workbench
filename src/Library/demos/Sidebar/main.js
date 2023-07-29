import Adw from "gi://Adw";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

const listbox = workbench.builder.get_object("listbox");
const base_path = Gio.File.new_for_path("/app/share/doc");
const stack = workbench.builder.get_object("stack");

const dir_list = Gtk.DirectoryList.new("", null);
const list_view = workbench.builder.get_object("list_view");

dir_list.connect("notify::loading", () => {
  populateList().catch(logError);
});

let dir;
listbox.connect("row-selected", (self, row) => {
  dir = base_path.resolve_relative_path(row.dir);
  dir_list.file = dir;
  stack.visible_child = list_view;
});

async function populateList() {
  const string_list = new Gtk.StringList();
  const enumerator = await dir.enumerate_children_async(
    "standard::name",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  for await (const info of enumerator) {
    string_list.append(info.get_name());
  }

  const model = new Gtk.SingleSelection({ model: string_list });
  list_view.model = model;
}

getDocs(base_path)
  .then((docs) => {
    for (const doc of docs) {
      const row = new Adw.ActionRow({
        title: doc.title,
      });
      row.uri = doc.uri;
      row.dir = doc.dir;
      row.add_suffix(new Gtk.Image({ icon_name: "go-next-symbolic" }));
      listbox.append(row);
    }
  })
  .catch(logError);

async function getDocs(base_path) {
  const docs = [];
  const dirs = await list(base_path);

  for (const dir of dirs) {
    const results = await Promise.allSettled([
      readDocIndexJSON(base_path, dir),
      readDocIndexHTML(base_path, dir),
    ]);
    const fulfilled = results.find((result) => result.status === "fulfilled");
    if (!fulfilled) continue;

    const title = fulfilled.value;
    const uri = base_path.get_child(dir).get_child("index.html").get_uri();

    docs.push({
      title,
      uri,
      dir,
    });
  }

  return docs;
}

async function readDocIndexJSON(base_path, dir) {
  const file = base_path.get_child(dir).get_child("index.json");
  const [data] = await file.load_contents_async(null);
  const json = JSON.parse(decode(data));
  return `${json["meta"]["ns"]}-${json["meta"]["version"]}`;
}

async function readDocIndexHTML(base_path, dir) {
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

function decode(data) {
  if (data instanceof GLib.Bytes) {
    data = data.toArray();
  }
  return new TextDecoder().decode(data);
}
