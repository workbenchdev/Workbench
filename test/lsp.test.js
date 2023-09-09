import "./init.js";

import tst, { assert } from "../troll/tst/tst.js";

import { applyTextEdits } from "../src/langs/blueprint/blueprint.js";

const test = tst("applyTextEdits");

const text = `
  using Gtk 4.0;

  Box subtitle {
    orientation: vertical;
    halign: center;
    margin-bottom: 30;
    Label {
      justify: center;
      cool: "lol";
    }
  }
`.trim();

test("no edits", () => {
  assert.equal(applyTextEdits([], text), text);
});

test("without position changes", () => {
  assert.equal(
    applyTextEdits(
      [
        {
          range: {
            start: {
              line: 3,
              character: 9,
            },
            end: {
              line: 3,
              character: 10,
            },
          },
          newText: "'",
        },
        {
          range: {
            start: {
              line: 3,
              character: 13,
            },
            end: {
              line: 3,
              character: 14,
            },
          },
          newText: "'",
        },
      ],
      `
using Gtk 4.0;

Label {
  label: "lol";
}`.trim(),
    ),
    `
using Gtk 4.0;

Label {
  label: 'lol';
}`.trim(),
  );
});

test.only("with position changes", () => {
  //   console.log(
  //     "\n",
  //     applyTextEdits(
  //       [
  //         {
  //           range: {
  //             start: {
  //               line: 0,
  //               character: 14,
  //             },
  //             end: {
  //               line: 0,
  //               character: 14,
  //             },
  //           },
  //           newText: "\n",
  //         },
  //         {
  //           range: {
  //             start: {
  //               line: 3,
  //               character: 1,
  //             },
  //             end: {
  //               line: 3,
  //               character: 1,
  //             },
  //           },
  //           newText: "\n",
  //         },
  //       ],
  //       `using Gtk 4.0;
  // Label {
  //   label: 'lol';
  // }`,
  //     ),
  //   );

  assert.equal(
    applyTextEdits(
      [
        {
          range: {
            start: {
              line: 0,
              character: 14,
            },
            end: {
              line: 0,
              character: 14,
            },
          },
          newText: "\n",
        },
        {
          range: {
            start: {
              line: 3,
              character: 1,
            },
            end: {
              line: 3,
              character: 1,
            },
          },
          newText: "\n",
        },
      ],
      `using Gtk 4.0;
Label {
  label: 'lol';
}`,
    ),
    `using Gtk 4.0;

Label {
  label: 'lol';

}`, // FIXME the newline should be at the end
  );
});

export default test;
