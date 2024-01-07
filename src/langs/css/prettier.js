#!/usr/bin/env -S gjs -m

// Shim to Node.js prettier CLI for GTKCssLanguageServer
// ./src/langs/css/prettier.js --stdin-filepath src/style.css
// or
// ./troll/gjspack/bin/gjspack src/langs/css/prettier.js src/langs/css && ./src/langs/css/prettier --stdin-filepath src/style.css

import { exit } from "system";
import Gio from "gi://Gio";

import { format } from "../../lib/prettier.js";
import prettier_postcss from "../../lib/prettier-postcss.js";

const idx = ARGV.indexOf("--stdin-filepath");
if (idx < 0) exit(1);
const filename = ARGV[idx + 1];
if (!filename) exit(1);

const file = Gio.File.new_for_path(filename);
const [, contents] = file.load_contents(null);
const text = new TextDecoder().decode(contents);

const formatted = await format(text, {
  parser: "css",
  plugins: [prettier_postcss],
});

// eslint-disable-next-line no-restricted-globals
print(formatted);
