import Gio from "gi://Gio";

import { data_dir, ensureDir, getNowForFilename, demos_dir } from "./util.js";

export const sessions_dir = data_dir.get_child("sessions");

export function getSessions() {
  const sessions = [];

  ensureDir(sessions_dir);

  for (const child of sessions_dir.enumerate_children(
    "",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  )) {
    if (child.get_file_type() !== Gio.FileType.DIRECTORY) continue;

    sessions.push(child);
  }

  return sessions;
}

export function createSession() {
  const file = sessions_dir.get_child(getNowForFilename());
  ensureDir(file);
  return file;
}

export function createSessionFromDemo(demo_name) {
  const file = createSession();

  const demo_dir = demos_dir.get_child(demo_name);
  // There is no copy directory function
  for (const file_info of demo_dir.enumerate_children(
    "",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  )) {
    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) continue;

    const child = demo_dir.get_child(file_info.get_name());
    child.copy(
      file.get_child(child.get_basename()),
      Gio.FileCopyFlags.NONE,
      null,
      null,
    );
  }

  return file;
}
