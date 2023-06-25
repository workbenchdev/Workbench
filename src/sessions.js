import Gio from "gi://Gio";

import { data_dir, ensureDir, getNowForFilename, demos_dir } from "./util.js";

export const sessions_dir = data_dir.get_child("sessions");

export function getSessions() {
  const sessions = [];

  ensureDir(sessions_dir);

  for (const file_info of sessions_dir.enumerate_children(
    "",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  )) {
    if (file_info.get_file_type() !== Gio.FileType.DIRECTORY) continue;
    sessions.push(new Session(file_info.get_name()));
  }

  return sessions;
}

export function createSession() {
  const name = getNowForFilename();
  const session = new Session(name);
  ensureDir(session.file);
  return session;
}

export function createSessionFromDemo(demo_name) {
  const session = createSession();

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
      session.file.get_child(child.get_basename()),
      Gio.FileCopyFlags.NONE,
      null,
      null,
    );
  }

  return session;
}

export async function deleteSession(session) {
  // There is no method to recursively delete a folder so we trash instead
  // https://github.com/flatpak/xdg-desktop-portal/issues/630 :/
  // portal.trash_file(file.get_path(), null).catch(logError);
  session.file.trash(null);
}

class Session {
  settings = null;
  file = null;

  constructor(name) {
    this.file = sessions_dir.get_child(name);
    const backend = Gio.keyfile_settings_backend_new(
      this.file.get_child("settings").get_path(),
      "/",
      null,
    );
    this.settings = new Gio.Settings({
      backend,
      schema_id: `${pkg.name}.Session`,
      path: "/re/sonny/Workbench/",
    });
  }
}
