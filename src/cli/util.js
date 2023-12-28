import GLib from "gi://GLib";

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
      __DEV__
        ? `--config-path=src/langs/javascript`
        : `--config-path=${GLib.build_filenamev([pkg.pkgdatadir])}`,
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

if (__DEV__) {
  languages.forEach((lang) => {
    lang.language_server = ["./build-aux/fun", ...lang.language_server];
  });
}
