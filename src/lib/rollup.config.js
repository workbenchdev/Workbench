import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ignore from "rollup-plugin-ignore";
import nodePolyfills from "rollup-plugin-node-polyfills";

export default [
  {
    input: "../langs/xml/ltx.js",
    output: {
      file: "ltx.js",
    },
    plugins: [nodePolyfills(), commonjs(), nodeResolve()],
  },

  {
    input: "../../node_modules/prettier/standalone.mjs",
    output: {
      file: "prettier.js",
    },
  },

  {
    input: "../../node_modules/prettier/plugins/babel.mjs",
    output: {
      file: "prettier-babel.js",
    },
  },

  {
    input: "../../node_modules/prettier/plugins/estree.mjs",
    output: {
      file: "prettier-estree.js",
    },
  },

  {
    input: "../../node_modules/prettier/plugins/postcss.mjs",
    output: {
      file: "prettier-postcss.js",
    },
  },

  {
    input: "../../node_modules/postcss/lib/postcss.mjs",
    output: {
      file: "postcss.js",
    },
    plugins: [
      commonjs(),
      ignore(["picocolors", "source-map-js", "path", "fs", "url"]),
      nodeResolve({ resolveOnly: ["nanoid"] }),
    ],
  },
];
