import { terser } from "rollup-plugin-terser";
import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";

const config = (file, format, plugins) => ({
  input: "index.js",
  output: {
    name: "flowtype",
    format,
    file
  },
  plugins
});

export default [
  config("dist/flowtype-es.js", "umd", [buble(), resolve()]),
  config("dist/flowtype-es.min.js", "umd", [buble(), terser(), resolve()])
];
