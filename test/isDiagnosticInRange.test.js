import "gi://Gtk?version=4.0";

import tst, { assert } from "../src/troll/tst/tst.js";

import { isDiagnosticInRange } from "../src/WorkbenchHoverProvider.js";

const test = tst("isDiagnosticInRange");

test("in range", () => {
  assert.equal(
    isDiagnosticInRange(
      {
        range: {
          start: {
            line: 5,
            character: 10,
          },
          end: {
            line: 5,
            character: 14,
          },
        },
      },
      {
        line: 5,
        character: 12,
      }
    ),
    true
  );
});

test("same line", () => {
  assert.equal(
    isDiagnosticInRange(
      {
        range: {
          start: {
            line: 5,
            character: 10,
          },
          end: {
            line: 5,
            character: 14,
          },
        },
      },
      {
        line: 5,
        character: 15,
      }
    ),
    true
  );
});

test("between lines", () => {
  assert.equal(
    isDiagnosticInRange(
      {
        range: {
          start: {
            line: 2,
            character: 10,
          },
          end: {
            line: 4,
            character: 14,
          },
        },
      },
      {
        line: 3,
        character: 9,
      }
    ),
    true
  );
});

test("not in range", () => {
  assert.equal(
    isDiagnosticInRange(
      {
        range: {
          start: {
            line: 7,
            character: 33,
          },
          end: {
            line: 7,
            character: 42,
          },
        },
      },
      {
        line: 5,
        character: 12,
      }
    ),
    false
  );
});

export default test;
