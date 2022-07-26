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
