import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ignore from "rollup-plugin-ignore";
import nodePolyfills from "rollup-plugin-node-polyfills";

export default [
  {
    input: "src/langs/xml/ltx.js",
    output: {
      file: "src/lib/ltx.js",
    },
    plugins: [nodePolyfills(), commonjs(), nodeResolve()],
  },

  {
    input: "node_modules/prettier/standalone.mjs",
    output: {
      file: "src/lib/prettier.js",
    },
  },

  {
    input: "node_modules/prettier/plugins/babel.mjs",
    output: {
      file: "src/lib/prettier-babel.js",
    },
  },

  {
    input: "node_modules/prettier/plugins/postcss.mjs",
    output: {
      file: "src/lib/prettier-postcss.js",
    },
  },

  {
    input: "node_modules/postcss/lib/postcss.mjs",
    output: {
      file: "src/lib/postcss.js",
    },
    plugins: [
      commonjs(),
      ignore(["picocolors", "source-map-js", "path", "fs", "url"]),
      nodeResolve({ resolveOnly: ["nanoid"] }),
    ],
  },
];
