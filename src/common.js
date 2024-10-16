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
    // language_server: [
    //   "/home/sonny/Projects/GNOME/blueprint-compiler/blueprint-compiler.py",
    //   "lsp",
    // ],
    language_server: ["blueprint-compiler", "lsp"],
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
    // language_server: ["typescript-language-server", "--stdio"],
    language_server: [
      "biome",
      "lsp-proxy",
      // src/meson.build installs biome.json there
      `--config-path=${pkg.pkgdatadir}`,
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
    language_server: ["gtkcsslanguageserver"],
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
    language_server: ["vala-language-server"],
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
    language_server: ["rust-analyzer"],
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
    language_server: ["pylsp", "-v"],
    formatting_options: {
      ...formatting_options,
      tabSize: 4,
    },
  },
  {
    id: "typescript",
    name: "TypeScript",
    panel: "code",
    extensions: [".ts", ".mts"],
    types: [],
    document: null,
    default_file: "main.ts",
    index: 4,
    language_server: ["typescript-language-server", "--stdio"],
    formatting_options: {
      ...formatting_options,
      tabSize: 2,
    },
  },
];

export function getLanguage(id) {
  return languages.find(
    (language) => language.id.toLowerCase() === id.toLowerCase(),
  );
}

export function createLSPClient({ lang, root_uri, quiet = true }) {
  const language_id = lang.id;

  const lspc = new LSPClient(lang.language_server, {
    rootUri: root_uri,
    languageId: language_id,
    quiet,
  });

  if (quiet === false) {
    lspc.connect("exit", () => {
      console.log(`${language_id} language server exit`);
    });
    lspc.connect("output", (_self, message) => {
      console.log(
        `${language_id} language server OUT:\n${JSON.stringify(
          message,
          null,
          2,
        )}`,
      );
    });
    lspc.connect("input", (_self, message) => {
      console.log(
        `${language_id} language server IN:\n${JSON.stringify(
          message,
          null,
          2,
        )}`,
      );
    });
  }

  return lspc;
}

export const PYTHON_LSP_CONFIG = {
  pylsp: {
    configurationSources: ["ruff"],
    plugins: {
      ruff: {
        enabled: true,
        formatEnabled: true,
        executable: `${pkg.prefix}/bin/ruff`,
        config: `${pkg.pkgdatadir}/ruff.toml`,
      },
    },
  },
};
