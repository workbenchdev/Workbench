/* eslint-disable no-restricted-globals */
// G_MESSAGES_DEBUG=re.sonny.Workbench.cli ./src/cli.js blueprint

import "../init.js";

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import GObject from "gi://GObject";
import Shumate from "gi://Shumate";
import WebKit from "gi://WebKit";

import { createLSPClient, languages, PYTHON_LSP_CONFIG } from "../common.js";
import lint from "./lint.js";
import format from "./format.js";

import blueprint from "./blueprint.js";
import css from "./css.js";
import javascript from "./javascript.js";
import typescript from "./typescript.js";
import vala from "./vala.js";
import python from "./python.js";
import rust from "./rust.js";
import { Interrupt } from "./util.js";

GObject.type_ensure(Shumate.SimpleMap);
GObject.type_ensure(WebKit.WebView);

export async function main([action, ...args]) {
  const current_dir = Gio.File.new_for_path(GLib.get_current_dir());

  if (action === "ci") {
    const filenames = args;
    try {
      await ci({ filenames });
      return 0;
    } catch (err) {
      if (err instanceof Interrupt) {
        return 1;
      } else {
        throw err;
      }
    }
  }

  const [language_id, ...filenames] = args;
  const lang = languages.find((language) => language.id === language_id);
  if (!lang) {
    printerr(`Unknown language "${language_id}"`);
    return 1;
  }

  if (lang.id === "vala") {
    const file_api = Gio.File.new_for_path(pkg.pkgdatadir).get_child(
      "workbench.vala",
    );
    file_api.copy(
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

  try {
    if (action === "lint") {
      await lint({ filenames, lang, lspc, ci: false });
      return 0;
    } else if (action === "check") {
      await lint({ filenames, lang, lspc, ci: true });
      return 0;
    } else if (action === "format") {
      await format({ filenames, lang, lspc });
      return 0;
    } else {
      printerr(`Unknown action "${action}"}`);
      return 1;
    }
  } catch (err) {
    if (err instanceof Interrupt) {
      return 1;
    } else {
      throw err;
    }
  }
}

const application = new Adw.Application();
const window = new Adw.ApplicationWindow();

function createLSPClients({ root_uri }) {
  return Object.fromEntries(
    [
      "javascript",
      "blueprint",
      "css",
      "vala",
      "rust",
      "python",
      "typescript",
    ].map((id) => {
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

async function ci({ filenames }) {
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
    let builder = null;
    let blueprint_object_ids = null;

    const file_blueprint = demo_dir.get_child("main.blp");
    if (file_blueprint.query_exists(null)) {
      ({ template, builder, blueprint_object_ids } = await blueprint({
        file: file_blueprint,
        lspc: lsp_clients.blueprint,
      }));
    }

    const file_css = demo_dir.get_child("main.css");
    if (file_css.query_exists(null)) {
      await css({ file: file_css, lspc: lsp_clients.css });
    }

    const file_javascript = demo_dir.get_child("main.js");
    if (file_javascript.query_exists(null)) {
      await javascript({
        file: file_javascript,
        lspc: lsp_clients.javascript,
        blueprint_object_ids,
        demo_dir,
        application,
        builder,
        template,
        window,
      });
    }

    const file_typescript = demo_dir.get_child("main.ts");
    if (file_typescript.query_exists(null)) {
      await typescript({
        file: file_typescript,
        lspc: lsp_clients.typescript,
        blueprint_object_ids,
        demo_dir,
        application,
        builder,
        template,
        window,
      });
    }

    const file_vala = demo_dir.get_child("main.vala");
    if (file_vala.query_exists(null)) {
      await vala({ file: file_vala, lspc: lsp_clients.vala, demo_dir });
    }

    const file_python = demo_dir.get_child("main.py");
    if (file_python.query_exists(null)) {
      await python({ file: file_python, lspc: lsp_clients.python });
    }

    const file_rust = demo_dir.get_child("code.rs");
    if (file_rust.query_exists(null)) {
      await rust({ file: file_rust, lspc: lsp_clients.rust });
    }

    await Promise.all(
      Object.entries(lsp_clients).map(([, lspc]) => {
        return lspc.stop();
      }),
    );
  }
}

const key_file = new GLib.KeyFile();
key_file.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);
// runtime/org.gnome.Sdk/x86_64/master
const [, , , runtime_version] = key_file
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
