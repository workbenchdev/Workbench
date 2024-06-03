// https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#diagnosticSeverity
export const diagnostic_severities = {
  1: "Error",
  2: "Warning",
  3: "Information",
  4: "Hint",
};

export class LSPError extends Error {
  constructor({ message, code, data }) {
    super(message);
    this.name = "LSPError";
    this.code = code;
    this.data = data;
  }
}

export function rangeEquals(start, end) {
  return start.line === end.line && start.character === end.character;
}

export const CompletionItemKind = {
  Text: 1,
  Method: 2,
  Function: 3,
  Constructor: 4,
  Field: 5,
  Variable: 6,
  Class: 7,
  Interface: 8,
  Module: 9,
  Property: 10,
  Unit: 11,
  Value: 12,
  Enum: 13,
  Keyword: 14,
  Snippet: 15,
  Color: 16,
  File: 17,
  Reference: 18,
  Folder: 19,
  EnumMember: 20,
  Constant: 21,
  Struct: 22,
  Event: 23,
  Operator: 24,
  TypeParameter: 25,
};

export const completion_item_kinds = Object.fromEntries(
  Object.entries(CompletionItemKind).map(([key, value]) => {
    return [value, key];
  }),
);
