import { rangeEquals } from "./lsp/LSP.js";

export function getItersAtRange(buffer, { start, end }) {
  let start_iter;
  let end_iter;

  // Apply the tag on the whole line
  // if diagnostic start and end are equals such as
  // Blueprint-Error 13:12 to 13:12 Could not determine what kind of syntax is meant here
  if (rangeEquals(start, end)) {
    [, start_iter] = buffer.get_iter_at_line(start.line);
    [, end_iter] = buffer.get_iter_at_line(end.line);
    end_iter.forward_to_line_end();
    start_iter.forward_find_char((char) => char !== "", end_iter);
  } else {
    [, start_iter] = buffer.get_iter_at_line_offset(
      start.line,
      start.character
    );
    [, end_iter] = buffer.get_iter_at_line_offset(end.line, end.character);
  }

  return [start_iter, end_iter];
}

export function remove_line_at_cursor(buffer) {
  const start = buffer.get_iter_at_offset(buffer.cursor_position);
  const end = start.copy();
  start.set_line_offset(0);
  end.forward_lines(1);

  if (end.is_end()) {
    if (start.backward_line() && !start.ends_line())
      start.forward_to_line_end();
  }

  buffer.delete(start, end);
}

export function toggle_comment_line_at_cursor(buffer) {
  const line_comment_start = buffer
    .get_language()
    .get_metadata("line-comment-start");
  if (!line_comment_start) return false;

  const start = buffer.get_iter_at_offset(buffer.cursor_position);
  const end = start.copy();

  start.set_line_offset(0);
  if (!end.ends_line()) end.forward_to_line_end();

  const line = buffer.get_slice(start, end, true);
  const reg_exp = new RegExp(`^ *${line_comment_start}`);

  const match = line.match(reg_exp);
  // console.log(match.index);
  if (match) {
    const idx = line.indexOf(line_comment_start);
    buffer.delete(
      buffer.get_iter_at_line_offset(start.get_line(), idx)[1],
      buffer.get_iter_at_line_offset(
        start.get_line(),
        idx + line_comment_start.length
      )[1]
    );
    // line.replace(reg_exp, "");
  } else {
    buffer.insert(start, `${line_comment_start} `, -1);
  }
}
