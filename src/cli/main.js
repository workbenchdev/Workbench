/* eslint-disable no-restricted-globals */
// G_MESSAGES_DEBUG=re.sonny.Workbench.cli ./src/cli.js blueprint

import "../init.js";

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import GObject from "gi://GObject";
import Shumate from "gi://Shumate";
import WebKit from "gi://WebKit";

import { parse } from "../langs/xml/xml.js";
import { LSPError, diagnostic_severities } from "../lsp/LSP.js";

import {
  createLSPClient,
  languages,
  getLanguage,
  PYTHON_LSP_CONFIG,
} from "../common.js";
import lint, { waitForDiagnostics } from "./lint.js";
import format, { formatting } from "./format.js";

GObject.type_ensure(Shumate.SimpleMap);
GObject.type_ensure(WebKit.WebView);

export async function main([action, ...args]) {
  const current_dir = Gio.File.new_for_path(GLib.get_current_dir());

  if (action === "ci") {
    const filenames = args;
    const success = await ci({ filenames, current_dir });
    return success ? 0 : 1;
  }

  const [language_id, ...filenames] = args;
  const lang = languages.find((language) => language.id === language_id);
  if (!lang) {
    printerr(`Unknown language "${language_id}"`);
    return 1;
  }

  if (lang.id === "vala") {
    const api_file = (
      GLib.getenv("FLATPAK_ID")
        ? Gio.File.new_for_path(pkg.pkgdatadir)
        : current_dir.resolve_relative_path("src/langs/vala")
    ).get_child("workbench.vala");
    api_file.copy(
      current_dir.get_child("workbench.vala"),
      Gio.FileCopyFlags.OVERWRITE,
      null,
      null,
    );
  }

  const lspc = createLSPClient({
    lang,
    root_uri: current_dir.get_uri(),
  });
  lspc._start_process();
  await lspc._initialize();

  if (lang.id === "python") {
    await lspc._request("workspace/didChangeConfiguration", {
      settings: PYTHON_LSP_CONFIG,
    });
  }

  let success = false;

  if (action === "lint") {
    success = await lint({ filenames, lang, lspc, ci: false });
  } else if (action === "check") {
    success = await lint({ filenames, lang, lspc, ci: true });
  } else if (action === "format") {
    success = await format({ filenames, lang, lspc });
  } else {
    printerr(`Unknown action "${action}"}`);
  }

  return success ? 0 : 1;
}

const application = new Adw.Application();
const window = new Adw.ApplicationWindow();

function createLSPClients({ root_uri }) {
  return Object.fromEntries(
    ["javascript", "blueprint", "css", "vala", "rust", "python"].map((id) => {
      const lang = languages.find((language) => language.id === id);
      const lspc = createLSPClient({
        lang,
        root_uri,
      });
      lspc._start_process();
      return [id, lspc];
    }),
  );
}

async function checkFile({ lspc, file, lang, uri }) {
  const [contents] = await file.load_contents_async(null);
  const text = new TextDecoder().decode(contents);
  const buffer = new Gtk.TextBuffer({ text });

  const buffer_tmp = new Gtk.TextBuffer({ text: buffer.text });
  await formatting({ buffer: buffer_tmp, uri, lang, lspc });

  if (buffer_tmp.text === buffer.text) {
    print(`  ✅ checks`);
    return true;
  } else {
    printerr(
      `  ❌ formatting differs - open and run ${file
        .get_parent()
        .get_basename()} with Workbench to fix`,
    );
    return false;
  }
}

async function ci({ filenames, current_dir }) {
  for (const filename of filenames) {
    const demo_dir = Gio.File.new_for_path(filename);

    print(`\n📂${demo_dir.get_path()}`);

    const [compatible, required_runtime_version] = isDemoCompatible(demo_dir);
    if (!compatible) {
      print(
        `  ⚠️ skipped - requires runtime version ${required_runtime_version}`,
      );
      continue;
    }

    const lsp_clients = createLSPClients({ root_uri: demo_dir.get_uri() });
    await Promise.all(
      Object.entries(lsp_clients).map(([, lspc]) => {
        return lspc._initialize();
      }),
    );

    let template = null;
    const builder = new Gtk.Builder();
    const blueprint_object_ids = [];
    let xml = null;

    const file_blueprint = demo_dir.get_child("main.blp");
    if (file_blueprint.query_exists(null)) {
      print(`  ${file_blueprint.get_path()}`);
      const uri = file_blueprint.get_uri();
      const languageId = "blueprint";
      let version = 0;

      const [contents] = await file_blueprint.load_contents_async(null);
      const text = new TextDecoder().decode(contents);

      await lsp_clients.blueprint._notify("textDocument/didOpen", {
        textDocument: {
          uri,
          languageId,
          version: version++,
          text,
        },
      });

      const diagnostics = await waitForDiagnostics({
        uri,
        lspc: lsp_clients.blueprint,
      });
      if (diagnostics.length > 0) {
        printerr(serializeDiagnostics({ diagnostics }));
        return false;
      }

      print(`  ✅ lints`);

      ({ xml } = await lsp_clients.blueprint._request(
        "textDocument/x-blueprint-compile",
        {
          textDocument: {
            uri,
          },
        },
      ));

      print(`  ✅ compiles`);

      try {
        await lsp_clients.blueprint._request("x-blueprint/decompile", {
          text: xml,
        });
        print("  ✅ decompiles");
      } catch (err) {
        if (!(err instanceof LSPError)) throw err;
        if (
          ![
            // https://gitlab.gnome.org/jwestman/blueprint-compiler/-/issues/128
            "unsupported XML tag: <condition>",
            // https://gitlab.gnome.org/jwestman/blueprint-compiler/-/issues/139
            "unsupported XML tag: <items>",
          ].includes(err.message)
        ) {
          throw err;
        }
      }

      const checks = await checkFile({
        lspc: lsp_clients.blueprint,
        file: file_blueprint,
        lang: getLanguage("blueprint"),
        uri,
      });
      if (!checks) return false;

      await lsp_clients.blueprint._notify("textDocument/didClose", {
        textDocument: {
          uri,
        },
      });

      const tree = parse(xml);
      const template_el = tree.getChild("template");

      if (template_el) {
        template = tree.toString();
      } else {
        builder.add_from_string(xml, -1);
        print(`  ✅ instantiates`);
        getXMLObjectIds(tree, blueprint_object_ids);
      }
    }

    const file_css = demo_dir.get_child("main.css");
    if (file_css.query_exists(null)) {
      print(`  ${file_css.get_path()}`);

      const uri = file_css.get_uri();
      const languageId = "css";
      let version = 0;

      const [contents] = await file_css.load_contents_async(null);
      const text = new TextDecoder().decode(contents);

      await lsp_clients.css._notify("textDocument/didOpen", {
        textDocument: {
          uri,
          languageId,
          version: version++,
          text,
        },
      });

      const diagnostics = await waitForDiagnostics({
        uri,
        lspc: lsp_clients.css,
      });
      if (diagnostics.length > 0) {
        printerr(serializeDiagnostics({ diagnostics }));
        return false;
      }
      print(`  ✅ lints`);

      const checks = await checkFile({
        lspc: lsp_clients.css,
        file: file_css,
        lang: getLanguage("css"),
        uri,
      });
      if (!checks) return false;

      await lsp_clients.css._notify("textDocument/didClose", {
        textDocument: {
          uri,
        },
      });
    }

    const file_javascript = demo_dir.get_child("main.js");
    if (file_javascript.query_exists(null)) {
      print(`  ${file_javascript.get_path()}`);

      const uri = file_javascript.get_uri();
      const languageId = "javascript";
      let version = 0;

      const [contents] = await file_javascript.load_contents_async(null);
      const text = new TextDecoder().decode(contents);

      await lsp_clients.javascript._notify("textDocument/didOpen", {
        textDocument: {
          uri,
          languageId,
          version: version++,
          text,
        },
      });

      const diagnostics = await waitForDiagnostics({
        uri,
        lspc: lsp_clients.javascript,
      });
      if (diagnostics.length > 0) {
        printerr(serializeDiagnostics({ diagnostics }));
        return false;
      }
      print(`  ✅ lints`);

      const checks = await checkFile({
        lspc: lsp_clients.javascript,
        file: file_javascript,
        lang: getLanguage("javascript"),
        uri,
      });
      if (!checks) return false;

      const js_object_ids = getCodeObjectIds(text);
      for (const object_id of js_object_ids) {
        if (!blueprint_object_ids.includes(object_id)) {
          print(`  ❌ Reference to inexistant object id "${object_id}"`);
          return false;
        }
      }

      globalThis.workbench = {
        window,
        application,
        builder,
        template,
        resolve(path) {
          return demo_dir.resolve_relative_path(path).get_uri();
        },
        preview() {},
      };

      await import(`file://${file_javascript.get_path()}`);
      print("  ✅ runs");

      await lsp_clients.javascript._notify("textDocument/didClose", {
        textDocument: {
          uri,
        },
      });
    }

    const file_vala = demo_dir.get_child("main.vala");
    if (file_vala.query_exists(null)) {
      print(`  ${file_vala.get_path()}`);

      const uri = file_vala.get_uri();
      const languageId = "vala";
      let version = 0;

      const api_file = (
        GLib.getenv("FLATPAK_ID")
          ? Gio.File.new_for_path(`/app/share/${GLib.getenv("FLATPAK_ID")}`)
          : current_dir.resolve_relative_path("src/langs/vala")
      ).get_child("workbench.vala");
      api_file.copy(
        demo_dir.get_child("workbench.vala"),
        Gio.FileCopyFlags.OVERWRITE,
        null,
        null,
      );

      const [contents] = await file_vala.load_contents_async(null);
      const text = new TextDecoder().decode(contents);

      await lsp_clients.vala._notify("textDocument/didOpen", {
        textDocument: {
          uri,
          languageId,
          version: version++,
          text,
        },
      });

      let diagnostics = await waitForDiagnostics({
        uri,
        lspc: lsp_clients.vala,
      });
      // FIXME: deprecated features, no replacement?
      if (demo_dir.get_basename() === "Text Fields") {
        const ignore_for_text_fields = [
          "`Gtk.EntryCompletion' has been deprecated since 4.10",
          "`Gtk.Entry.completion' has been deprecated since 4.10",
          "`Gtk.ListStore' has been deprecated since 4.10",
          "`Gtk.TreeIter' has been deprecated since 4.10",
        ];
        diagnostics = diagnostics.filter((diagnostic) => {
          return !ignore_for_text_fields.includes(diagnostic.message);
        });
        // Gtk.StyleContext class is deprecated but not the following methods
        // gtk_style_context_add_provider_for_display
        // gtk_style_context_remove_provider_for_display
      } else if (demo_dir.get_basename() === "CSS Gradients") {
        diagnostics = diagnostics.filter((diagnostic) => {
          return (
            diagnostic.message !==
            "`Gtk.StyleContext' has been deprecated since 4.10"
          );
        });
      }

      if (diagnostics.length > 0) {
        printerr(serializeDiagnostics({ diagnostics }));
        return false;
      }
      print(`  ✅ lints`);

      const checks = await checkFile({
        lspc: lsp_clients.vala,
        file: file_vala,
        lang: getLanguage("vala"),
        uri,
      });
      if (!checks) return false;

      await lsp_clients.vala._notify("textDocument/didClose", {
        textDocument: {
          uri,
        },
      });
    }

    const file_python = demo_dir.get_child("main.py");
    if (file_python.query_exists(null)) {
      print(`  ${file_python.get_path()}`);

      const uri = file_python.get_uri();
      const languageId = "python";
      let version = 0;

      const [contents] = await file_python.load_contents_async(null);
      const text = new TextDecoder().decode(contents);

      await lsp_clients.python._request("workspace/didChangeConfiguration", {
        settings: PYTHON_LSP_CONFIG,
      });

      await lsp_clients.python._notify("textDocument/didOpen", {
        textDocument: {
          uri,
          languageId,
          version: version++,
          text,
        },
      });

      const diagnostics = await waitForDiagnostics({
        uri,
        lspc: lsp_clients.python,
      });
      if (diagnostics.length > 0) {
        printerr(serializeDiagnostics({ diagnostics }));
        return false;
      }
      print(`  ✅ lints`);

      const checks = await checkFile({
        lspc: lsp_clients.python,
        file: file_python,
        lang: getLanguage("python"),
        uri,
      });
      if (!checks) return false;

      await lsp_clients.python._notify("textDocument/didClose", {
        textDocument: {
          uri,
        },
      });
    }

    const file_rust = demo_dir.get_child("code.rs");
    if (file_rust.query_exists(null)) {
      print(`  ${file_rust.get_path()}`);

      const uri = file_rust.get_uri();
      const languageId = "rust";
      let version = 0;

      const [contents] = await file_rust.load_contents_async(null);
      const text = new TextDecoder().decode(contents);

      await lsp_clients.rust._notify("textDocument/didOpen", {
        textDocument: {
          uri,
          languageId,
          version: version++,
          text,
        },
      });

      // FIXME: rust analyzer doesn't publish diagnostics if there are none
      // probably we should switch to pulling diagnostics but unknown if supported
      // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textDocument_pullDiagnostics

      // const diagnostics = await waitForDiagnostics({
      //   uri,
      //   lspc: lsp_clients.rust,
      // });
      // if (diagnostics.length > 0) {
      //   printerr(serializeDiagnostics({ diagnostics }));
      //   return false;
      // }
      // print(`  ✅ lints`);

      const checks = await checkFile({
        lspc: lsp_clients.rust,
        file: file_rust,
        lang: getLanguage("rust"),
        uri,
      });
      if (!checks) return false;

      await lsp_clients.rust._notify("textDocument/didClose", {
        textDocument: {
          uri,
        },
      });
    }

    await Promise.all(
      Object.entries(lsp_clients).map(([, lspc]) => {
        return lspc.stop();
      }),
    );
  }

  return true;
}

function getXMLObjectIds(tree, object_ids) {
  for (const object of tree.getChildren("object")) {
    if (object.attrs.id) object_ids.push(object.attrs.id);
    // <child> or <property name="child">
    for (const child of object.getChildElements()) {
      getXMLObjectIds(child, object_ids);
    }
  }
}

function getCodeObjectIds(text) {
  const object_ids = [];
  for (const match of text.matchAll(/get_object\("(.+)"\)/g)) {
    object_ids.push(match[1]);
  }
  return object_ids;
}

function serializeDiagnostics({ diagnostics }) {
  return (
    diagnostics
      .map(({ severity, range, message }) => {
        return (
          "  ❌ " +
          diagnostic_severities[severity] +
          "  " +
          range.start.line +
          ":" +
          range.start.character +
          "  " +
          message.split("\n")[0]
        );
      })
      .join("\n") + "\n"
  );
}

const keyFile = new GLib.KeyFile();
keyFile.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);
// runtime/org.gnome.Sdk/x86_64/master
const [, , , runtime_version] = keyFile
  .get_string("Application", "runtime")
  .split("/");

function isDemoCompatible(file) {
  let str;
  try {
    str = new TextDecoder().decode(
      file.get_child("main.json").load_contents(null)[1],
    );
  } catch (err) {
    console.warn(err);
    return true;
  }

  const demo = JSON.parse(str);
  demo.name = file.get_basename();

  const demo_runtime_version = demo["runtime-version"];

  if (demo_runtime_version === "master") {
    return [runtime_version === "master", demo_runtime_version];
  } else if (runtime_version === "master") {
    return [true, demo_runtime_version];
  } else if (!demo_runtime_version) {
    return [true, demo_runtime_version];
  }

  return [+runtime_version >= +demo_runtime_version, demo_runtime_version];
}
