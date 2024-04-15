var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}

// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active ) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

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
          this.emit("endElement", tagName, true);
        }
      } else {
        this.emit("endElement", tagName, false);
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

export { Element, SaxLtx, escapeXML, escapeXMLText, parse };
