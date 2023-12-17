// Inspired by
// https://gitlab.gnome.org/GNOME/gnome-builder/-/blob/cbcf02bf9ac957a004fa32a17a7586f32e899a48/src/libide/code/ide-buffer-manager.c#L899
export function applyTextEdits(text_edits, buffer) {
  buffer.begin_user_action();

  // Stage TextMarks
  for (const text_edit of text_edits) {
    prepareTextEdit(text_edit, buffer);
  }

  // Perform the edits
  for (const text_edit of text_edits) {
    applyTextEdit(text_edit, buffer);
  }

  buffer.end_user_action();
}

function prepareTextEdit(text_edit, buffer) {
  const {
    range: { start, end },
  } = text_edit;
  const [, start_iter] = buffer.get_iter_at_line_offset(
    start.line,
    start.character,
  );
  const [, end_iter] = buffer.get_iter_at_line_offset(end.line, end.character);

  const begin_mark = buffer.create_mark(
    null, // name
    start_iter, // where
    true, // left gravity
  );
  const end_mark = buffer.create_mark(
    null, // name
    end_iter, // where
    false, // left gravity
  );

  text_edit.begin_mark = begin_mark;
  text_edit.end_mark = end_mark;
}

function applyTextEdit(text_edit, buffer) {
  const { newText, begin_mark, end_mark } = text_edit;

  let start_iter = buffer.get_iter_at_mark(begin_mark);
  const end_iter = buffer.get_iter_at_mark(end_mark);

  buffer.delete(start_iter, end_iter);

  start_iter = buffer.get_iter_at_mark(begin_mark);
  buffer.insert(start_iter, newText, -1);

  buffer.delete_mark(begin_mark);
  buffer.delete_mark(end_mark);
}
