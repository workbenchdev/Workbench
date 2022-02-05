import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import ignore from "rollup-plugin-ignore"
import nodePolyfills from 'rollup-plugin-node-polyfills';
import json from '@rollup/plugin-json';

export default [
  {
    input: "node_modules/uvu/dist/index.mjs",
    output: {
      file: "test/uvu.js",
    },
    plugins: [nodeResolve()],
  },

  {
    input: "node_modules/uvu/assert/index.mjs",
    output: {
      file: "test/assert.js",
    },
    plugins: [nodeResolve()],
  },

  {
    input: "node_modules/ltx/src/ltx.js",
    output: {
      file: "src/lib/ltx.js",
    },
    plugins: [nodePolyfills()]
  },

  {
    input: "node_modules/prettier/esm/standalone.mjs",
    output: {
      file: "src/lib/prettier.js",
    }
  },

  {
    input: "node_modules/prettier/esm/parser-babel.mjs",
    output: {
      file: "src/lib/prettier-babel.js",
    }
  },

  {
    input: "node_modules/prettier/esm/parser-postcss.mjs",
    output: {
      file: "src/lib/prettier-postcss.js",
    }
  },

  {
    input: "node_modules/@prettier/plugin-xml/dist/plugin.js",
    output: {
      file: "src/lib/prettier-xml.js",
    },
    plugins: [commonjs(), json(), ignore(["fs"]), nodeResolve({browser: true})]
  },

  {
    input: "node_modules/postcss/lib/postcss.mjs",
    output: {
      file: "src/lib/postcss.js",
    },
    plugins: [commonjs(), ignore(["picocolors", "source-map-js", "path", "fs", "url"]), nodeResolve({resolveOnly: ['nanoid']})]
  },
];
