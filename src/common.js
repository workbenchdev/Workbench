import GLib from "gi://GLib";

import LSPClient from "./lsp/LSPClient.js";

const formatting_options = {
  insertSpaces: true,
  trimTrailingWhitespace: true,
  insertFinalNewline: true,
  trimFinalNewlines: true,
};

// See dropdown_code_lang for index
export const languages = [
  {
    id: "blueprint",
    name: "Blueprint",
    panel: "ui",
    extensions: [".blp"],
    types: [],
    document: null,
    default_file: "main.blp",
    language_server: [["blueprint-compiler", "lsp"]],
    formatting_options: {
      ...formatting_options,
      tabSize: 2,
    },
  },
  {
    id: "xml",
    name: "GTK Builder",
    panel: "ui",
    extensions: [".ui"],
    types: ["application/x-gtk-builder"],
    document: null,
    default_file: "main.ui",
  },
  {
    id: "javascript",
    name: "JavaScript",
    panel: "code",
    extensions: [".js", ".mjs"],
    types: ["text/javascript", "application/javascript"],
    document: null,
    default_file: "main.js",
    index: 0,
    language_server: [
      [
        "biome",
        "lsp-proxy",
        // src/meson.build installs biome.json there
        GLib.getenv("FLATPAK_ID")
          ? `--config-path=${pkg.pkgdatadir}`
          : `--config-path=src/langs/javascript`,
      ],
    ],
    formatting_options: {
      ...formatting_options,
      tabSize: 2,
    },
  },
  {
    id: "css",
    name: "CSS",
    panel: "style",
    extensions: [".css"],
    types: ["text/css"],
    document: null,
    default_file: "main.css",
    language_server: [["gtkcsslanguageserver"]],
    formatting_options: {
      ...formatting_options,
      tabSize: 2,
    },
  },
  {
    id: "vala",
    name: "Vala",
    panel: "code",
    extensions: [".vala"],
    types: ["text/x-vala"],
    document: null,
    default_file: "main.vala",
    index: 1,
    language_server: [["vala-language-server"]],
    formatting_options: {
      ...formatting_options,
      tabSize: 4,
    },
  },
  {
    id: "rust",
    name: "Rust",
    panel: "code",
    extensions: [".rs"],
    types: ["text/x-rust"],
    document: null,
    default_file: "code.rs",
    index: 2,
    language_server: [["rust-analyzer"]],
    formatting_options: {
      ...formatting_options,
      tabSize: 4,
    },
  },
  {
    id: "python",
    name: "Python",
    panel: "code",
    extensions: [".py"],
    types: ["text/x-python"],
    document: null,
    default_file: "main.py",
    index: 3,
    language_server: [
      ["pylsp", "-v"],
      {
        argv: ["ruff-lsp"],
        initializationOptions: {
          settings: {
            args: ["--config", `${pkg.pkgdatadir}/ruff.toml`],
          },
        },
      },
    ],
    formatting_options: {
      ...formatting_options,
      tabSize: 4,
    },
  },
];

export function getLanguage(id) {
  return languages.find(
    (language) => language.id.toLowerCase() === id.toLowerCase(),
  );
}

/**
 * Returns a LSPClient for the given langauge.
 * If multiple are defined, returns an array of LSPClients instead.
 */
export function createLSPClient({ lang, root_uri, quiet = true }) {
  const language_id = lang.id;

  const lspcs = [];

  for (const language_server of lang.language_server) {
    // language_server is either an array (then it's just argv) or an object with more info.
    let argv,
      initializationOptions = undefined;

    if (Array.isArray(language_server)) {
      argv = language_server;
    } else {
      argv = language_server.argv;
      initializationOptions = language_server.initializationOptions;
    }

    const lspc = new LSPClient(argv, {
      rootUri: root_uri,
      languageId: language_id,
      quiet,
      initializationOptions,
    });
    lspc.connect("exit", () => {
      console.debug(`${language_id} language server exit`);
    });
    lspc.connect("output", (_self, message) => {
      console.debug(
        `${language_id} language server OUT:\n${JSON.stringify(message)}`,
      );
    });
    lspc.connect("input", (_self, message) => {
      console.debug(
        `${language_id} language server IN:\n${JSON.stringify(message)}`,
      );
    });
    lspcs.push(lspc);
  }

  // If the language has only one language server, return it
  if (lspcs.length === 1) {
    return lspcs[0];
  }
  return lspcs;
}
