import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

const formatting_options = {
  insertSpaces: true,
  trimTrailingWhitespace: true,
  insertFinalNewline: true,
  trimFinalNewlines: true,
};

export const languages = [
  {
    id: "vala",
    content_type: "text/x-vala",
    language_server: ["vala-language-server"],
    formatting_options: {
      ...formatting_options,
      tabSize: 4,
    },
  },
  {
    id: "javascript",
    content_type: "text/javascript",
    language_server: [
      "biome",
      "lsp-proxy",
      // src/meson.build installs biome.json there
      `--config-path=${GLib.build_filenamev([pkg.pkgdatadir])}`,
    ],
    formatting_options: {
      ...formatting_options,
      tabSize: 2,
    },
  },
  {
    id: "css",
    content_type: "text/css",
    language_server: ["gtkcsslanguageserver"],
    formatting_options: {
      ...formatting_options,
      tabSize: 2,
    },
  },
  {
    id: "blueprint",
    content_type: "text/x-blueprint",
    language_server: ["blueprint-compiler", "lsp"],
    formatting_options: {
      ...formatting_options,
      tabSize: 2,
    },
  },
];

export async function openFiles({ filenames, lang, lspc }) {
  const documents = [];

  for await (const filename of filenames) {
    const file = Gio.File.new_for_path(filename);
    const [contents] = await file.load_contents_async(null);
    const text = new TextDecoder().decode(contents);
    const buffer = new Gtk.TextBuffer({ text });

    const uri = file.get_uri();
    const languageId = lang.id;
    let version = 0;

    await lspc._notify("textDocument/didOpen", {
      textDocument: {
        uri,
        languageId,
        version: version++,
        text: buffer.text,
      },
    });
    documents.push({ file, filename, uri, buffer });
  }

  return documents;
}
