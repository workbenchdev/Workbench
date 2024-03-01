// elint-disable-next-line import/named
import {
  escapeXML,
  escapeXMLText,
  SaxLtx,
  parse,
  Element,
  createElement,
} from "../../lib/ltx.js";

// adapted from ltx.stringify to work without Element and ignore whitespace
// and mixed content in order to use the same algo as blueprint-compiler xml_emitter.py
function format(str, indent = 2) {
  const p = new SaxLtx();
  if (typeof indent === "number") indent = " ".repeat(indent);

  let level = 0;
  let current_tag;
  let needs_newline = false;
  let s = '<?xml version="1.0" encoding="UTF-8"?>';

  function _indent() {
    s += "\n" + indent.repeat(level);
  }

  p.on("startElement", (name, attrs) => {
    // console.debug("startElement", name, attrs);
    current_tag = name;
    _indent();

    s += `<${name}`;

    for (const k in attrs) {
      const v = attrs[k];
      s += ` ${k}="${escapeXML(v)}"`;
    }

    level++;
    needs_newline = false;
  });
  p.on("endElement", (name, self_closing) => {
    // console.debug("endElement", name, self_closing);
    if (current_tag && name !== current_tag) {
      throw new Error("Invalid XML document");
    }

    level--;

    if (needs_newline) {
      _indent();
    }

    if (self_closing) {
      s += "/>";
    } else {
      if (current_tag) {
        s += ">";
      }

      s += `</${name}>`;
    }

    current_tag = null;
    needs_newline = true;
  });
  p.on("text", (str) => {
    // console.debug("text", str);
    if (current_tag) {
      s += ">";
      current_tag = null;
    }

    str = str.trim();
    if (!str) return;

    s += escapeXMLText(str);
    needs_newline = false;
  });

  p.write(str);

  if (level !== 0) {
    throw new Error("Invalid XML document");
  }

  return s;
}

export { parse, Element, format, createElement };
