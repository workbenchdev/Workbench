import { EventEmitter } from 'events';

const escapeXMLTable = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function escapeXMLReplace(match) {
  return escapeXMLTable[match];
}

const unescapeXMLTable = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
};

function unescapeXMLReplace(match) {
  if (match[1] === "#") {
    const num =
      match[2] === "x"
        ? parseInt(match.slice(3), 16)
        : parseInt(match.slice(2), 10);
    // https://www.w3.org/TR/xml/#NT-Char defines legal XML characters:
    // #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
    if (
      num === 0x9 ||
      num === 0xa ||
      num === 0xd ||
      (num >= 0x20 && num <= 0xd7ff) ||
      (num >= 0xe000 && num <= 0xfffd) ||
      (num >= 0x10000 && num <= 0x10ffff)
    ) {
      return String.fromCodePoint(num);
    }
    throw new Error("Illegal XML character 0x" + num.toString(16));
  }
  if (unescapeXMLTable[match]) {
    return unescapeXMLTable[match] || match;
  }
  throw new Error("Illegal XML entity " + match);
}

function escapeXML(s) {
  return s.replace(/["&'<>]/g, escapeXMLReplace);
}

function unescapeXML(s) {
  let result = "";
  let start = -1;
  let end = -1;
  let previous = 0;
  while (
    (start = s.indexOf("&", previous)) !== -1 &&
    (end = s.indexOf(";", start + 1)) !== -1
  ) {
    result =
      result +
      s.slice(previous, start) +
      unescapeXMLReplace(s.slice(start, end + 1));
    previous = end + 1;
  }

  // shortcut if loop never entered:
  // return the original string without creating new objects
  if (previous === 0) return s;

  // push the remaining characters
  result = result + s.substring(previous);

  return result;
}

function escapeXMLText(s) {
  return s.replace(/[&<>]/g, escapeXMLReplace);
}

function unescapeXMLText(s) {
  return s.replace(/&(amp|#38|lt|#60|gt|#62);/g, unescapeXMLReplace);
}

/**
 * Element
 *
 * Attributes are in the element.attrs object. Children is a list of
 * either other Elements or Strings for text content.
 **/
class Element {
  constructor(name, attrs) {
    this.name = name;
    this.parent = null;
    this.children = [];
    this.attrs = {};
    this.setAttrs(attrs);
  }

  /* Accessors */

  /**
   * if (element.is('message', 'jabber:client')) ...
   **/
  is(name, xmlns) {
    return this.getName() === name && (!xmlns || this.getNS() === xmlns);
  }

  /* without prefix */
  getName() {
    const idx = this.name.indexOf(":");
    return idx >= 0 ? this.name.slice(idx + 1) : this.name;
  }

  /**
   * retrieves the namespace of the current element, upwards recursively
   **/
  getNS() {
    const idx = this.name.indexOf(":");
    if (idx >= 0) {
      const prefix = this.name.slice(0, idx);
      return this.findNS(prefix);
    }
    return this.findNS();
  }

  /**
   * find the namespace to the given prefix, upwards recursively
   **/
  findNS(prefix) {
    if (!prefix) {
      /* default namespace */
      if (this.attrs.xmlns) {
        return this.attrs.xmlns;
      } else if (this.parent) {
        return this.parent.findNS();
      }
    } else {
      /* prefixed namespace */
      const attr = "xmlns:" + prefix;
      if (this.attrs[attr]) {
        return this.attrs[attr];
      } else if (this.parent) {
        return this.parent.findNS(prefix);
      }
    }
  }

  /**
   * Recursiverly gets all xmlns defined, in the form of {url:prefix}
   **/
  getXmlns() {
    let namespaces = {};

    if (this.parent) {
      namespaces = this.parent.getXmlns();
    }

    for (const attr in this.attrs) {
      const m = attr.match("xmlns:?(.*)");
      // eslint-disable-next-line  no-prototype-builtins
      if (this.attrs.hasOwnProperty(attr) && m) {
        namespaces[this.attrs[attr]] = m[1];
      }
    }
    return namespaces;
  }

  setAttrs(attrs) {
    if (typeof attrs === "string") {
      this.attrs.xmlns = attrs;
    } else if (attrs) {
      Object.assign(this.attrs, attrs);
    }
  }

  /**
   * xmlns can be null, returns the matching attribute.
   **/
  getAttr(name, xmlns) {
    if (!xmlns) {
      return this.attrs[name];
    }

    const namespaces = this.getXmlns();

    if (!namespaces[xmlns]) {
      return null;
    }

    return this.attrs[[namespaces[xmlns], name].join(":")];
  }

  /**
   * xmlns can be null
   **/
  getChild(name, xmlns) {
    return this.getChildren(name, xmlns)[0];
  }

  /**
   * xmlns can be null
   **/
  getChildren(name, xmlns) {
    const result = [];
    for (const child of this.children) {
      if (
        child.getName &&
        child.getName() === name &&
        (!xmlns || child.getNS() === xmlns)
      ) {
        result.push(child);
      }
    }
    return result;
  }

  /**
   * xmlns and recursive can be null
   **/
  getChildByAttr(attr, val, xmlns, recursive) {
    return this.getChildrenByAttr(attr, val, xmlns, recursive)[0];
  }

  /**
   * xmlns and recursive can be null
   **/
  getChildrenByAttr(attr, val, xmlns, recursive) {
    let result = [];
    for (const child of this.children) {
      if (
        child.attrs &&
        child.attrs[attr] === val &&
        (!xmlns || child.getNS() === xmlns)
      ) {
        result.push(child);
      }
      if (recursive && child.getChildrenByAttr) {
        result.push(child.getChildrenByAttr(attr, val, xmlns, true));
      }
    }
    if (recursive) {
      result = result.flat();
    }
    return result;
  }

  getChildrenByFilter(filter, recursive) {
    let result = [];
    for (const child of this.children) {
      if (filter(child)) {
        result.push(child);
      }
      if (recursive && child.getChildrenByFilter) {
        result.push(child.getChildrenByFilter(filter, true));
      }
    }
    if (recursive) {
      result = result.flat();
    }
    return result;
  }

  getText() {
    let text = "";
    for (const child of this.children) {
      if (typeof child === "string" || typeof child === "number") {
        text += child;
      }
    }
    return text;
  }

  getChildText(name, xmlns) {
    const child = this.getChild(name, xmlns);
    return child ? child.getText() : null;
  }

  /**
   * Return all direct descendents that are Elements.
   * This differs from `getChildren` in that it will exclude text nodes,
   * processing instructions, etc.
   */
  getChildElements() {
    return this.getChildrenByFilter((child) => {
      return child instanceof Element;
    });
  }

  /* Builder */

  /** returns uppermost parent */
  root() {
    if (this.parent) {
      return this.parent.root();
    }
    return this;
  }

  /** just parent or itself */
  up() {
    if (this.parent) {
      return this.parent;
    }
    return this;
  }

  /** create child node and return it */
  c(name, attrs) {
    return this.cnode(new Element(name, attrs));
  }

  cnode(child) {
    this.children.push(child);
    if (typeof child === "object") {
      child.parent = this;
    }
    return child;
  }

  append(...nodes) {
    for (const node of nodes) {
      this.children.push(node);
      if (typeof node === "object") {
        node.parent = this;
      }
    }
  }

  prepend(...nodes) {
    for (const node of nodes) {
      this.children.unshift(node);
      if (typeof node === "object") {
        node.parent = this;
      }
    }
  }

  /** add text node and return element */
  t(text) {
    this.children.push(text);
    return this;
  }

  /* Manipulation */

  /**
   * Either:
   *   el.remove(childEl)
   *   el.remove('author', 'urn:...')
   */
  remove(el, xmlns) {
    const filter =
      typeof el === "string"
        ? (child) => {
            /* 1st parameter is tag name */
            return !(child.is && child.is(el, xmlns));
          }
        : (child) => {
            /* 1st parameter is element */
            return child !== el;
          };

    this.children = this.children.filter(filter);

    return this;
  }

  text(val) {
    if (val && this.children.length === 1) {
      this.children[0] = val;
      return this;
    }
    return this.getText();
  }

  attr(attr, val) {
    if (typeof val !== "undefined" || val === null) {
      if (!this.attrs) {
        this.attrs = {};
      }
      this.attrs[attr] = val;
      return this;
    }
    return this.attrs[attr];
  }

  /* Serialization */

  toString() {
    let s = "";
    this.write((c) => {
      s += c;
    });
    return s;
  }

  _addChildren(writer) {
    writer(">");
    for (const child of this.children) {
      /* Skip null/undefined */
      if (child != null) {
        if (child.write) {
          child.write(writer);
        } else if (typeof child === "string") {
          writer(escapeXMLText(child));
        } else if (child.toString) {
          writer(escapeXMLText(child.toString(10)));
        }
      }
    }
    writer("</");
    writer(this.name);
    writer(">");
  }

  write(writer) {
    writer("<");
    writer(this.name);
    for (const k in this.attrs) {
      const v = this.attrs[k];
      // === null || undefined
      if (v != null) {
        writer(" ");
        writer(k);
        writer('="');
        writer(escapeXML(typeof v === "string" ? v : v.toString(10)));
        writer('"');
      }
    }
    if (this.children.length === 0) {
      writer("/>");
    } else {
      this._addChildren(writer);
    }
  }
}

Element.prototype.tree = Element.prototype.root;

const STATE_TEXT = 0;
const STATE_IGNORE_COMMENT = 1;
const STATE_IGNORE_INSTRUCTION = 2;
const STATE_TAG_NAME = 3;
const STATE_TAG = 4;
const STATE_ATTR_NAME = 5;
const STATE_ATTR_EQ = 6;
const STATE_ATTR_QUOT = 7;
const STATE_ATTR_VALUE = 8;
const STATE_CDATA = 9;
const STATE_IGNORE_CDATA = 10;

class SaxLtx extends EventEmitter {
  constructor() {
    super();
    let state = STATE_TEXT;
    let remainder;
    let parseRemainder;
    let tagName;
    let attrs;
    let endTag;
    let selfClosing;
    let attrQuote;
    let attrQuoteChar;
    let recordStart = 0;
    let attrName;

    this._handleTagOpening = function _handleTagOpening(
      endTag,
      tagName,
      attrs
    ) {
      if (!endTag) {
        this.emit("startElement", tagName, attrs);
        if (selfClosing) {
          this.emit("endElement", tagName);
        }
      } else {
        this.emit("endElement", tagName);
      }
    };

    this.write = function write(data) {
      if (typeof data !== "string") {
        data = data.toString();
      }
      let pos = 0;

      /* Anything from previous write()? */
      if (remainder) {
        data = remainder + data;
        pos += !parseRemainder ? remainder.length : 0;
        parseRemainder = false;
        remainder = null;
      }

      function endRecording() {
        if (typeof recordStart === "number") {
          const recorded = data.slice(recordStart, pos);
          recordStart = undefined;
          return recorded;
        }
      }

      for (; pos < data.length; pos++) {
        switch (state) {
          case STATE_TEXT: {
            // if we're looping through text, fast-forward using indexOf to
            // the next '<' character
            const lt = data.indexOf("<", pos);
            if (lt !== -1 && pos !== lt) {
              pos = lt;
            }

            break;
          }
          case STATE_ATTR_VALUE: {
            // if we're looping through an attribute, fast-forward using
            // indexOf to the next end quote character
            const quot = data.indexOf(attrQuoteChar, pos);
            if (quot !== -1) {
              pos = quot;
            }

            break;
          }
          case STATE_IGNORE_COMMENT: {
            // if we're looping through a comment, fast-forward using
            // indexOf to the first end-comment character
            const endcomment = data.indexOf("-->", pos);
            if (endcomment !== -1) {
              pos = endcomment + 2; // target the '>' character
            }

            break;
          }
          case STATE_IGNORE_CDATA: {
            // if we're looping through a CDATA, fast-forward using
            // indexOf to the first end-CDATA character ]]>
            const endCDATA = data.indexOf("]]>", pos);
            if (endCDATA !== -1) {
              pos = endCDATA + 2; // target the '>' character
            }

            break;
          }
          // No default
        }

        const c = data.charCodeAt(pos);
        switch (state) {
          case STATE_TEXT:
            if (c === 60 /* < */) {
              const text = endRecording();
              if (text) {
                this.emit("text", unescapeXML(text));
              }
              state = STATE_TAG_NAME;
              recordStart = pos + 1;
              attrs = {};
            }
            break;
          case STATE_CDATA:
            if (c === 93 /* ] */) {
              if (data.substr(pos + 1, 2) === "]>") {
                const cData = endRecording();
                if (cData) {
                  this.emit("text", cData);
                }
                state = STATE_TEXT;
              } else if (data.length < pos + 2) {
                parseRemainder = true;
                pos = data.length;
              }
            }
            break;
          case STATE_TAG_NAME:
            if (c === 47 /* / */ && recordStart === pos) {
              recordStart = pos + 1;
              endTag = true;
            } else if (c === 33 /* ! */) {
              if (data.substr(pos + 1, 7) === "[CDATA[") {
                recordStart = pos + 8;
                state = STATE_CDATA;
              } else if (
                data.length < pos + 8 &&
                "[CDATA[".startsWith(data.slice(pos + 1))
              ) {
                // We potentially have CDATA, but the chunk is ending; stop here and let the next write() decide
                parseRemainder = true;
                pos = data.length;
              } else {
                recordStart = undefined;
                state = STATE_IGNORE_COMMENT;
              }
            } else if (c === 63 /* ? */) {
              recordStart = undefined;
              state = STATE_IGNORE_INSTRUCTION;
            } else if (c <= 32 || c === 47 /* / */ || c === 62 /* > */) {
              tagName = endRecording();
              pos--;
              state = STATE_TAG;
            }
            break;
          case STATE_IGNORE_COMMENT:
            if (c === 62 /* > */) {
              const prevFirst = data.charCodeAt(pos - 1);
              const prevSecond = data.charCodeAt(pos - 2);
              if (
                (prevFirst === 45 /* - */ && prevSecond === 45) /* - */ ||
                (prevFirst === 93 /* ] */ && prevSecond === 93) /* ] */
              ) {
                state = STATE_TEXT;
              }
            }
            break;
          case STATE_IGNORE_INSTRUCTION:
            if (c === 62 /* > */) {
              const prev = data.charCodeAt(pos - 1);
              if (prev === 63 /* ? */) {
                state = STATE_TEXT;
              }
            }
            break;
          case STATE_TAG:
            if (c === 62 /* > */) {
              this._handleTagOpening(endTag, tagName, attrs);
              tagName = undefined;
              attrs = undefined;
              endTag = undefined;
              selfClosing = undefined;
              state = STATE_TEXT;
              recordStart = pos + 1;
            } else if (c === 47 /* / */) {
              selfClosing = true;
            } else if (c > 32) {
              recordStart = pos;
              state = STATE_ATTR_NAME;
            }
            break;
          case STATE_ATTR_NAME:
            if (c <= 32 || c === 61 /* = */) {
              attrName = endRecording();
              pos--;
              state = STATE_ATTR_EQ;
            }
            break;
          case STATE_ATTR_EQ:
            if (c === 61 /* = */) {
              state = STATE_ATTR_QUOT;
            }
            break;
          case STATE_ATTR_QUOT:
            if (c === 34 /* " */ || c === 39 /* ' */) {
              attrQuote = c;
              attrQuoteChar = c === 34 ? '"' : "'";
              state = STATE_ATTR_VALUE;
              recordStart = pos + 1;
            }
            break;
          case STATE_ATTR_VALUE:
            if (c === attrQuote) {
              const value = unescapeXML(endRecording());
              attrs[attrName] = value;
              attrName = undefined;
              state = STATE_TAG;
            }
            break;
        }
      }

      if (typeof recordStart === "number" && recordStart <= data.length) {
        remainder = data.slice(recordStart);
        recordStart = 0;
      }
    };
  }

  end(data) {
    if (data) {
      this.write(data);
    }

    /* Uh, yeah */
    this.write = function write() {};
  }
}

class Parser extends EventEmitter {
  constructor(options) {
    super();

    const ParserInterface = (this.Parser =
      (options && options.Parser) || this.DefaultParser);
    const ElementInterface = (this.Element =
      (options && options.Element) || this.DefaultElement);

    this.parser = new ParserInterface();

    let el;
    this.parser.on("startElement", (name, attrs) => {
      const child = new ElementInterface(name, attrs);
      el = !el ? child : el.cnode(child);
    });
    this.parser.on("endElement", (name) => {
      if (!el) ; else if (name === el.name) {
        if (el.parent) {
          el = el.parent;
        } else if (!this.tree) {
          this.tree = el;
          el = undefined;
        }
      }
    });
    this.parser.on("text", (str) => {
      if (el) {
        el.t(str);
      }
    });
    this.parser.on("error", (e) => {
      this.error = e;
      this.emit("error", e);
    });
  }

  write(data) {
    this.parser.write(data);
  }

  end(data) {
    this.parser.end(data);

    if (!this.error) {
      if (this.tree) {
        this.emit("tree", this.tree);
      } else {
        this.emit("error", new Error("Incomplete document"));
      }
    }
  }
}

Parser.prototype.DefaultParser = SaxLtx;
Parser.prototype.DefaultElement = Element;

function parse(data, options) {
  const p = typeof options === "function" ? new options() : new Parser(options);

  let result = null;
  let error = null;

  p.on("tree", (tree) => {
    result = tree;
  });
  p.on("error", (e) => {
    error = e;
  });

  p.write(data);
  p.end();

  if (error) {
    throw error;
  } else {
    return result;
  }
}

function nameEqual(a, b) {
  return a.name === b.name;
}

function attrsEqual(a, b) {
  const { attrs } = a;
  const keys = Object.keys(attrs);
  const { length } = keys;
  if (length !== Object.keys(b.attrs).length) return false;
  for (let i = 0, l = length; i < l; i++) {
    const key = keys[i];
    const value = attrs[key];
    // === null || undefined
    if (value == null || b.attrs[key] == null) {
      if (value !== b.attrs[key]) return false;
    } else if (value.toString() !== b.attrs[key].toString()) {
      return false;
    }
  }
  return true;
}

function childrenEqual(a, b) {
  const { children } = a;
  const { length } = children;
  if (length !== b.children.length) return false;
  for (let i = 0, l = length; i < l; i++) {
    const child = children[i];
    if (typeof child === "string") {
      if (child !== b.children[i]) return false;
    } else {
      if (!equal(child, b.children[i])) return false;
    }
  }
  return true;
}

function equal(a, b) {
  if (!nameEqual(a, b)) return false;
  if (!attrsEqual(a, b)) return false;
  if (!childrenEqual(a, b)) return false;
  return true;
}

function append(el, child) {
  if (Array.isArray(child)) {
    for (const c of child) append(el, c);
    return;
  }

  if (child === "" || child == null || child === true || child === false) {
    return;
  }

  el.cnode(child);
}

/**
 * JSX compatible API, use this function as pragma
 * https://facebook.github.io/jsx/
 *
 * @param  {string} name  name of the element
 * @param  {object} attrs object of attribute key/value pairs
 * @return {Element}      Element
 */
function createElement(name, attrs, ...children) {
  if (typeof attrs === "object" && attrs !== null) {
    // __self and __source are added by babel in development
    // https://github.com/facebook/react/pull/4596
    // https://babeljs.io/docs/en/babel-preset-react#development
    // https://babeljs.io/docs/en/babel-plugin-transform-react-jsx-source
    delete attrs.__source;
    delete attrs.__self;

    for (const [key, value] of Object.entries(attrs)) {
      if (value == null) delete attrs[key];
      else attrs[key] = value.toString(10);
    }
  }

  const el = new Element(name, attrs);

  for (const child of children) {
    append(el, child);
  }

  return el;
}

function tagString(literals, ...substitutions) {
  let str = "";

  for (let i = 0; i < substitutions.length; i++) {
    str += literals[i];
    str += escapeXML(substitutions[i]);
  }
  str += literals[literals.length - 1];

  return str;
}

function tag(...args) {
  return parse(tagString(...args));
}

function isNode(el) {
  return el instanceof Element || typeof el === "string";
}

function isElement(el) {
  return el instanceof Element;
}

function isText(el) {
  return typeof el === "string";
}

function clone(el) {
  if (typeof el !== "object") return el;
  const copy = new el.constructor(el.name, el.attrs);
  for (let i = 0; i < el.children.length; i++) {
    const child = el.children[i];
    copy.cnode(clone(child));
  }
  return copy;
}

function stringify(el, indent, level) {
  if (typeof indent === "number") indent = " ".repeat(indent);
  if (!level) level = 1;
  let s = `<${el.name}`;

  for (const k in el.attrs) {
    const v = el.attrs[k];
    // === null || undefined
    if (v != null) {
      s += ` ${k}="${escapeXML(typeof v === "string" ? v : v.toString(10))}"`;
    }
  }

  if (el.children.length > 0) {
    s += ">";
    for (const child of el.children) {
      if (child == null) continue;
      if (indent) s += "\n" + indent.repeat(level);
      s +=
        typeof child === "string"
          ? escapeXMLText(child)
          : stringify(child, indent, level + 1);
    }
    if (indent) s += "\n" + indent.repeat(level - 1);
    s += `</${el.name}>`;
  } else {
    s += "/>";
  }

  return s;
}

function JSONify(el) {
  if (typeof el !== "object") return el;
  return {
    name: el.name,
    attrs: el.attrs,
    children: el.children.map(JSONify),
  };
}

export { Element, JSONify, Parser, attrsEqual, childrenEqual, clone, createElement, equal, escapeXML, escapeXMLText, isElement, isNode, isText, nameEqual, parse, stringify, tag, tagString, unescapeXML, unescapeXMLText };
