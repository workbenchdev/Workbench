import { escapeXML, escapeXMLText, SaxLtx } from "./lib/ltx.js";

// adapted from ltx.stringify to work without Elemen and ignore whitespace
// and mixed content in order to use the same algo as blueprint-compiler xml_emitter.py
export function format(str, indent = 2) {
  const p = new SaxLtx();
  if (typeof indent === "number") indent = " ".repeat(indent);

  let level = 0;

  let s = '<?xml version="1.0" encoding="UTF-8"?>';

  let start_element = false;
  let needs_newline = false;

  function _indent() {
    s += "\n" + indent.repeat(level);
  }

  p.on("startElement", (name, attrs) => {
    _indent();

    s += `<${name}`;

    for (const k in attrs) {
      const v = attrs[k];
      s += ` ${k}="${escapeXML(v)}"`;
    }

    level++;
    start_element = true;
    needs_newline = false;
  });
  p.on("endElement", (name, self_closing) => {
    level--;

    if (needs_newline) {
      _indent();
    }

    if (self_closing) {
      s += "/>";
    } else {
      s += `</${name}>`;
    }

    start_element = false;
    needs_newline = true;
  });
  p.on("text", (str) => {
    if (start_element) {
      s += ">";
    }

    str = str.trim();
    if (!str) return;

    s += escapeXMLText(str);
    needs_newline = false;
    start_element = false;
  });
  p.on("error", (err) => {
    throw err;
  });

  p.write(str);

  return s;
}
