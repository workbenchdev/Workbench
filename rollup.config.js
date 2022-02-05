import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import ignore from "rollup-plugin-ignore"
import nodePolyfills from 'rollup-plugin-node-polyfills';

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
    input: "node_modules/css/index.js",
    output: {
      file: "src/css.js",
    },
    plugins: [ignore(["url", "path", "fs", 'source-map', "source-map-resolve"]), commonjs(), nodeResolve()]
  },

  {
    input: "node_modules/ltx/src/ltx.js",
    output: {
      file: "src/ltx.js",
    },
    plugins: [nodePolyfills(), nodeResolve()]
  },

  {
    input: "node_modules/prettier/esm/standalone.mjs",
    output: {
      file: "src/prettier.js",
    }
  },

  {
    input: "node_modules/prettier/esm/parser-babel.mjs",
    output: {
      file: "src/prettier-babel.js",
    }
  },

  {
    input: "node_modules/prettier/esm/parser-postcss.mjs",
    output: {
      file: "src/prettier-postcss.js",
    }
  }
];
