let FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY=true;
if (typeof process !== 'undefined') {
	({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env);
	isTTY = process.stdout && process.stdout.isTTY;
}

const $ = {
	enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== 'dumb' && (
		FORCE_COLOR != null && FORCE_COLOR !== '0' || isTTY
	),

	// modifiers
	reset: init(0, 0),
	bold: init(1, 22),
	dim: init(2, 22),
	italic: init(3, 23),
	underline: init(4, 24),
	inverse: init(7, 27),
	hidden: init(8, 28),
	strikethrough: init(9, 29),

	// colors
	black: init(30, 39),
	red: init(31, 39),
	green: init(32, 39),
	yellow: init(33, 39),
	blue: init(34, 39),
	magenta: init(35, 39),
	cyan: init(36, 39),
	white: init(37, 39),
	gray: init(90, 39),
	grey: init(90, 39),

	// background colors
	bgBlack: init(40, 49),
	bgRed: init(41, 49),
	bgGreen: init(42, 49),
	bgYellow: init(43, 49),
	bgBlue: init(44, 49),
	bgMagenta: init(45, 49),
	bgCyan: init(46, 49),
	bgWhite: init(47, 49)
};

function run(arr, str) {
	let i=0, tmp, beg='', end='';
	for (; i < arr.length; i++) {
		tmp = arr[i];
		beg += tmp.open;
		end += tmp.close;
		if (!!~str.indexOf(tmp.close)) {
			str = str.replace(tmp.rgx, tmp.close + tmp.open);
		}
	}
	return beg + str + end;
}

function chain(has, keys) {
	let ctx = { has, keys };

	ctx.reset = $.reset.bind(ctx);
	ctx.bold = $.bold.bind(ctx);
	ctx.dim = $.dim.bind(ctx);
	ctx.italic = $.italic.bind(ctx);
	ctx.underline = $.underline.bind(ctx);
	ctx.inverse = $.inverse.bind(ctx);
	ctx.hidden = $.hidden.bind(ctx);
	ctx.strikethrough = $.strikethrough.bind(ctx);

	ctx.black = $.black.bind(ctx);
	ctx.red = $.red.bind(ctx);
	ctx.green = $.green.bind(ctx);
	ctx.yellow = $.yellow.bind(ctx);
	ctx.blue = $.blue.bind(ctx);
	ctx.magenta = $.magenta.bind(ctx);
	ctx.cyan = $.cyan.bind(ctx);
	ctx.white = $.white.bind(ctx);
	ctx.gray = $.gray.bind(ctx);
	ctx.grey = $.grey.bind(ctx);

	ctx.bgBlack = $.bgBlack.bind(ctx);
	ctx.bgRed = $.bgRed.bind(ctx);
	ctx.bgGreen = $.bgGreen.bind(ctx);
	ctx.bgYellow = $.bgYellow.bind(ctx);
	ctx.bgBlue = $.bgBlue.bind(ctx);
	ctx.bgMagenta = $.bgMagenta.bind(ctx);
	ctx.bgCyan = $.bgCyan.bind(ctx);
	ctx.bgWhite = $.bgWhite.bind(ctx);

	return ctx;
}

function init(open, close) {
	let blk = {
		open: `\x1b[${open}m`,
		close: `\x1b[${close}m`,
		rgx: new RegExp(`\\x1b\\[${close}m`, 'g')
	};
	return function (txt) {
		if (this !== void 0 && this.has !== void 0) {
			!!~this.has.indexOf(open) || (this.has.push(open),this.keys.push(blk));
			return txt === void 0 ? this : $.enabled ? run(this.keys, txt+'') : txt+'';
		}
		return txt === void 0 ? chain([open], [blk]) : $.enabled ? run([blk], txt+'') : txt+'';
	};
}

function Diff() {}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{
      newPos: -1,
      components: []
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Main worker method. checks all permutations of a given edit length for acceptance.


    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath = void 0;

        var addPath = bestPath[diagonalPath - 1],
            removePath = bestPath[diagonalPath + 1],
            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

        if (addPath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = addPath && addPath.newPos + 1 < newLen,
            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the new string is the farthest from the origin
        // and does not pass the bounds of the diff graph


        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self.pushComponent(basePath.components, undefined, true);
        } else {
          basePath = addPath; // No need to clone, we've pulled it from the list

          basePath.newPos++;
          self.pushComponent(basePath.components, true, undefined);
        }

        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
        } else {
          // Otherwise track this path as a potential candidate and continue.
          bestPath[diagonalPath] = basePath;
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          // This should not happen, but we want to be safe.

          /* istanbul ignore next */
          if (editLength > maxEditLength) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },
  pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];

    if (last && last.added === added && last.removed === removed) {
      // We need to clone here as the component clone operation is just
      // as shallow array clone
      components[components.length - 1] = {
        count: last.count + 1,
        added: added,
        removed: removed
      };
    } else {
      components.push({
        count: 1,
        added: added,
        removed: removed
      });
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        newPos = basePath.newPos,
        oldPos = newPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.components.push({
        count: commonCount
      });
    }

    basePath.newPos = newPos;
    return oldPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split('');
  },
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, components, newString, oldString, useLongestToken) {
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var lastComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }

  return components;
}

function clonePath(path) {
  return {
    newPos: path.newPos,
    components: path.components.slice(0)
  };
}

var characterDiff = new Diff();
function diffChars(oldStr, newStr, options) {
  return characterDiff.diff(oldStr, newStr, options);
}

//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF

var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();

wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

var lineDiff = new Diff();

lineDiff.tokenize = function (value) {
  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

var sentenceDiff = new Diff();

sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

var cssDiff = new Diff();

cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;

jsonDiff.castInput = function (value) {
  var _this$options = this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
    return typeof v === 'undefined' ? undefinedReplacement : v;
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
};
// object that is already on the "stack" of items being processed. Accepts an optional replacer

function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (_typeof(obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}

var arrayDiff = new Diff();

arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};

function diffArrays(oldArr, newArr, callback) {
  return arrayDiff.diff(oldArr, newArr, callback);
}

const colors = {
	'--': $.red,
	'··': $.grey,
	'++': $.green,
};

const TITLE = $.dim().italic;
const TAB=$.dim('→'), SPACE=$.dim('·'), NL=$.dim('↵');
const LOG = (sym, str) => colors[sym](sym + PRETTY(str)) + '\n';
const LINE = (num, x) => $.dim('L' + String(num).padStart(x, '0') + ' ');
const PRETTY = str => str.replace(/[ ]/g, SPACE).replace(/\t/g, TAB).replace(/(\r?\n)/g, NL);

function line(obj, prev, pad) {
	let char = obj.removed ? '--' : obj.added ? '++' : '··';
	let arr = obj.value.replace(/\r?\n$/, '').split('\n');
	let i=0, tmp, out='';

	if (obj.added) out += colors[char]().underline(TITLE('Expected:')) + '\n';
	else if (obj.removed) out += colors[char]().underline(TITLE('Actual:')) + '\n';

	for (; i < arr.length; i++) {
		tmp = arr[i];
		if (tmp != null) {
			if (prev) out += LINE(prev + i, pad);
			out += LOG(char, tmp || '\n');
		}
	}

	return out;
}

// TODO: want better diffing
//~> complex items bail outright
function arrays(input, expect) {
	let arr = diffArrays(input, expect);
	let i=0, j=0, k=0, tmp, val, char, isObj, str;
	let out = LOG('··', '[');

	for (; i < arr.length; i++) {
		char = (tmp = arr[i]).removed ? '--' : tmp.added ? '++' : '··';

		if (tmp.added) {
			out += colors[char]().underline(TITLE('Expected:')) + '\n';
		} else if (tmp.removed) {
			out += colors[char]().underline(TITLE('Actual:')) + '\n';
		}

		for (j=0; j < tmp.value.length; j++) {
			isObj = (tmp.value[j] && typeof tmp.value[j] === 'object');
			val = stringify(tmp.value[j]).split(/\r?\n/g);
			for (k=0; k < val.length;) {
				str = '  ' + val[k++] + (isObj ? '' : ',');
				if (isObj && k === val.length && (j + 1) < tmp.value.length) str += ',';
				out += LOG(char, str);
			}
		}
	}

	return out + LOG('··', ']');
}

function lines(input, expect, linenum = 0) {
	let i=0, tmp, output='';
	let arr = diffLines(input, expect);
	let pad = String(expect.split(/\r?\n/g).length - linenum).length;

	for (; i < arr.length; i++) {
		output += line(tmp = arr[i], linenum, pad);
		if (linenum && !tmp.removed) linenum += tmp.count;
	}

	return output;
}

function chars(input, expect) {
	let arr = diffChars(input, expect);
	let i=0, output='', tmp;

	let l1 = input.length;
	let l2 = expect.length;

	let p1 = PRETTY(input);
	let p2 = PRETTY(expect);

	tmp = arr[i];

	if (l1 === l2) ; else if (tmp.removed && arr[i + 1]) {
		let del = tmp.count - arr[i + 1].count;
		if (del == 0) ; else if (del > 0) {
			expect = ' '.repeat(del) + expect;
			p2 = ' '.repeat(del) + p2;
			l2 += del;
		} else if (del < 0) {
			input = ' '.repeat(-del) + input;
			p1 = ' '.repeat(-del) + p1;
			l1 += -del;
		}
	}

	output += direct(p1, p2, l1, l2);

	if (l1 === l2) {
		for (tmp='  '; i < l1; i++) {
			tmp += input[i] === expect[i] ? ' ' : '^';
		}
	} else {
		for (tmp='  '; i < arr.length; i++) {
			tmp += ((arr[i].added || arr[i].removed) ? '^' : ' ').repeat(Math.max(arr[i].count, 0));
			if (i + 1 < arr.length && ((arr[i].added && arr[i+1].removed) || (arr[i].removed && arr[i+1].added))) {
				arr[i + 1].count -= arr[i].count;
			}
		}
	}

	return output + $.red(tmp);
}

function direct(input, expect, lenA = String(input).length, lenB = String(expect).length) {
	let gutter = 4;
	let lenC = Math.max(lenA, lenB);
	let typeA=typeof input, typeB=typeof expect;

	if (typeA !== typeB) {
		gutter = 2;

		let delA = gutter + lenC - lenA;
		let delB = gutter + lenC - lenB;

		input += ' '.repeat(delA) + $.dim(`[${typeA}]`);
		expect += ' '.repeat(delB) + $.dim(`[${typeB}]`);

		lenA += delA + typeA.length + 2;
		lenB += delB + typeB.length + 2;
		lenC = Math.max(lenA, lenB);
	}

	let output = colors['++']('++' + expect + ' '.repeat(gutter + lenC - lenB) + TITLE('(Expected)')) + '\n';
	return output + colors['--']('--' + input + ' '.repeat(gutter + lenC - lenA) + TITLE('(Actual)')) + '\n';
}

function sort(input, expect) {
	var k, i=0, tmp, isArr = Array.isArray(input);
	var keys=[], out=isArr ? Array(input.length) : {};

	if (isArr) {
		for (i=0; i < out.length; i++) {
			tmp = input[i];
			if (!tmp || typeof tmp !== 'object') out[i] = tmp;
			else out[i] = sort(tmp, expect[i]); // might not be right
		}
	} else {
		for (k in expect)
			keys.push(k);

		for (; i < keys.length; i++) {
			if (Object.prototype.hasOwnProperty.call(input, k = keys[i])) {
				if (!(tmp = input[k]) || typeof tmp !== 'object') out[k] = tmp;
				else out[k] = sort(tmp, expect[k]);
			}
		}

		for (k in input) {
			if (!out.hasOwnProperty(k)) {
				out[k] = input[k]; // expect didnt have
			}
		}
	}

	return out;
}

function circular() {
	var cache = new Set;
	return function print(key, val) {
		if (val === void 0) return '[__VOID__]';
		if (typeof val === 'number' && val !== val) return '[__NAN__]';
		if (!val || typeof val !== 'object') return val;
		if (cache.has(val)) return '[Circular]';
		cache.add(val); return val;
	}
}

function stringify(input) {
	return JSON.stringify(input, circular(), 2).replace(/"\[__NAN__\]"/g, 'NaN').replace(/"\[__VOID__\]"/g, 'undefined');
}

function compare(input, expect) {
	if (Array.isArray(expect) && Array.isArray(input)) return arrays(input, expect);
	if (expect instanceof RegExp) return chars(''+input, ''+expect);

	let isA = input && typeof input == 'object';
	let isB = expect && typeof expect == 'object';

	if (isA && isB) input = sort(input, expect);
	if (isB) expect = stringify(expect);
	if (isA) input = stringify(input);

	if (expect && typeof expect == 'object') {
		input = stringify(sort(input, expect));
		expect = stringify(expect);
	}

	isA = typeof input == 'string';
	isB = typeof expect == 'string';

	if (isA && /\r?\n/.test(input)) return lines(input, ''+expect);
	if (isB && /\r?\n/.test(expect)) return lines(''+input, expect);
	if (isA && isB) return chars(input, expect);

	return direct(input, expect);
}

let isCLI = false, isNode = false;
let hrtime = (now = Date.now()) => () => (Date.now() - now).toFixed(2) + 'ms';
let write = console.log;

const into = (ctx, key) => (name, handler) => ctx[key].push({ name, handler });
const context = (state) => ({ tests:[], before:[], after:[], bEach:[], aEach:[], only:[], skips:0, state });
const milli = arr => (arr[0]*1e3 + arr[1]/1e6).toFixed(2) + 'ms';
const hook = (ctx, key) => handler => ctx[key].push(handler);

if (isNode = typeof process < 'u' && typeof process.stdout < 'u') {
	// globalThis polyfill; Node < 12
	if (typeof globalThis !== 'object') {
		Object.defineProperty(global, 'globalThis', {
			get: function () { return this }
		});
	}

	let rgx = /(\.bin[\\+\/]uvu$|uvu[\\+\/]bin\.js)/i;
	isCLI = process.argv.some(x => rgx.test(x));

	// attach node-specific utils
	write = x => process.stdout.write(x);
	hrtime = (now = process.hrtime()) => () => milli(process.hrtime(now));
} else if (typeof performance < 'u') {
	hrtime = (now = performance.now()) => () => (performance.now() - now).toFixed(2) + 'ms';
}

globalThis.UVU_QUEUE = globalThis.UVU_QUEUE || [];
isCLI || UVU_QUEUE.push([null]);

const QUOTE = $.dim('"'), GUTTER = '\n        ';
const FAIL = $.red('✘ '), PASS = $.gray('• ');
const IGNORE = /^\s*at.*(?:\(|\s)(?:node|(internal\/[\w/]*))/;
const FAILURE = $.bold().bgRed(' FAIL ');
const FILE = $.bold().underline().white;
const SUITE = $.bgWhite().bold;

function stack(stack, idx) {
	let i=0, line, out='';
	let arr = stack.substring(idx).replace(/\\/g, '/').split('\n');
	for (; i < arr.length; i++) {
		line = arr[i].trim();
		if (line.length && !IGNORE.test(line)) {
			out += '\n    ' + line;
		}
	}
	return $.grey(out) + '\n';
}

function format(name, err, suite = '') {
	let { details, operator='' } = err;
	let idx = err.stack && err.stack.indexOf('\n');
	if (err.name.startsWith('AssertionError') && !operator.includes('not')) details = compare(err.actual, err.expected); // TODO?
	let str = '  ' + FAILURE + (suite ? $.red(SUITE(` ${suite} `)) : '') + ' ' + QUOTE + $.red().bold(name) + QUOTE;
	str += '\n    ' + err.message + (operator ? $.italic().dim(`  (${operator})`) : '') + '\n';
	if (details) str += GUTTER + details.split('\n').join(GUTTER);
	if (!!~idx) str += stack(err.stack, idx);
	return str + '\n';
}

async function runner(ctx, name) {
	let { only, tests, before, after, bEach, aEach, state } = ctx;
	let hook, test, arr = only.length ? only : tests;
	let num=0, errors='', total=arr.length;

	try {
		if (name) write(SUITE($.black(` ${name} `)) + ' ');
		for (hook of before) await hook(state);

		for (test of arr) {
			state.__test__ = test.name;
			try {
				for (hook of bEach) await hook(state);
				await test.handler(state);
				for (hook of aEach) await hook(state);
				write(PASS);
				num++;
			} catch (err) {
				for (hook of aEach) await hook(state);
				if (errors.length) errors += '\n';
				errors += format(test.name, err, name);
				write(FAIL);
			}
		}
	} finally {
		state.__test__ = '';
		for (hook of after) await hook(state);
		let msg = `  (${num} / ${total})\n`;
		let skipped = (only.length ? tests.length : 0) + ctx.skips;
		write(errors.length ? $.red(msg) : $.green(msg));
		return [errors || true, num, skipped, total];
	}
}

let timer;
function defer() {
	clearTimeout(timer);
	timer = setTimeout(exec);
}

function setup(ctx, name = '') {
	ctx.state.__test__ = '';
	ctx.state.__suite__ = name;
	const test = into(ctx, 'tests');
	test.before = hook(ctx, 'before');
	test.before.each = hook(ctx, 'bEach');
	test.after = hook(ctx, 'after');
	test.after.each = hook(ctx, 'aEach');
	test.only = into(ctx, 'only');
	test.skip = () => { ctx.skips++; };
	test.run = () => {
		let copy = { ...ctx };
		let run = runner.bind(0, copy, name);
		Object.assign(ctx, context(copy.state));
		UVU_QUEUE[globalThis.UVU_INDEX || 0].push(run);
		isCLI || defer();
	};
	return test;
}

const suite = (name = '', state = {}) => setup(context(state), name);
const test = suite();

async function exec(bail) {
	let timer = hrtime();
	let done=0, total=0, skips=0, code=0;

	for (let group of UVU_QUEUE) {
		if (total) write('\n');

		let name = group.shift();
		if (name != null) write(FILE(name) + '\n');

		for (let test of group) {
			let [errs, ran, skip, max] = await test();
			total += max; done += ran; skips += skip;
			if (errs.length) {
				write('\n' + errs + '\n'); code=1;
				if (bail) return isNode && process.exit(1);
			}
		}
	}

	write('\n  Total:     ' + total);
	write((code ? $.red : $.green)('\n  Passed:    ' + done));
	write('\n  Skipped:   ' + (skips ? $.yellow(skips) : skips));
	write('\n  Duration:  ' + timer() + '\n\n');

	if (isNode) process.exitCode = code;
}

export { exec, suite, test };
