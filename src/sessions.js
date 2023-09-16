import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { gettext as _ } from "gettext";

import {
  data_dir,
  ensureDir,
  getNowForFilename,
  demos_dir,
  rust_template_dir,
  settings as global_settings,
  encode,
} from "./util.js";

export const sessions_dir = data_dir.get_child("sessions");

export function getSessions() {
  const sessions = [];

  ensureDir(sessions_dir);

  const session = migrateStateToSession();
  if (session) {
    sessions.push(session);
  } else {
    for (const file_info of sessions_dir.enumerate_children(
      "",
      Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
      null,
    )) {
      if (file_info.get_file_type() !== Gio.FileType.DIRECTORY) continue;
      sessions.push(new Session(sessions_dir.get_child(file_info.get_name())));
    }
  }

  return sessions;
}

export function createSession(name = getNowForFilename()) {
  const file = sessions_dir.get_child(name);
  ensureDir(file);
  const session = new Session(file);
  return session;
}

export function createSessionFromDemo(demo) {
  const session = createSession();
  const demo_dir = demos_dir.get_child(demo.name);

  copy_directory(demo_dir, session);
  copy_directory(rust_template_dir, session);

  const { panels } = demo;
  const { settings } = session;
  settings.set_boolean("show-code", panels.includes("code"));
  settings.set_boolean("show-style", panels.includes("style"));
  settings.set_boolean("show-ui", panels.includes("ui"));
  settings.set_boolean("show-preview", panels.includes("preview"));
  settings.set_int(
    "code-language",
    global_settings.get_int("recent-code-language"),
  );
  settings.set_enum(
    "user-interface-language",
    global_settings.get_enum("recent-user-interface-language"),
  );

  return session;
}

// There is no copy directory function
function copy_directory(source, destination) {
  for (const file_info of source.enumerate_children(
    "",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  )) {
    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) continue;

    const child = source.get_child(file_info.get_name());
    child.copy(
      destination.file.get_child(child.get_basename()),
      Gio.FileCopyFlags.NONE,
      null,
      null,
    );
  }
}

export async function deleteSession(session) {
  // There is no method to recursively delete a folder so we trash instead
  // https://github.com/flatpak/xdg-desktop-portal/issues/630 :/
  // portal.trash_file(file.get_path(), null).catch(logError);
  session.file.trash(null);
}

export async function saveSessionAsProject(session, destination) {
  await destination.make_directory_async(GLib.PRIORITY_DEFAULT, null);

  for await (const file_info of session.file.enumerate_children(
    "",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  )) {
    await session.file.get_child(file_info.get_name()).move_async(
      destination.get_child(file_info.get_name()), // destination
      Gio.FileCopyFlags.BACKUP, // flags
      GLib.PRIORITY_DEFAULT, // priority
      null, // cancellable
      null, // progress_callback
    );
  }

  await session.file.delete_async(GLib.PRIORITY_DEFAULT, null);

  await destination.get_child("README.md").replace_contents_async(
    encode(
      _(`This is a Workbench project.

To open and run this; [install Workbench from Flathub](https://flathub.org/apps/re.sonny.Workbench) and open this project folder with it.`),
    ),
    null, // etag
    false, // make_backup
    Gio.FileCreateFlags.NONE, //flags
    null, // cancellable
  );
}

export class Session {
  settings = null;
  file = null;
  name = null;

  constructor(file) {
    this.name = file.get_basename();
    this.file = file;
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

  is_project() {
    return !this.file.get_parent().equal(sessions_dir);
  }
}

function migrateStateToSession() {
  if (global_settings.get_boolean("migrated")) return;

  const state_files = [
    ["state.blp", "main.blp"],
    ["state.css", "main.css"],
    ["state.js", "main.js"],
    ["state.vala", "main.vala"],
    ["state.rs", "main.rs"],
    ["state.xml", "main.ui"],
  ];

  const found = state_files.find(([file]) =>
    data_dir.get_child(file).query_exists(null),
  );
  if (!found) {
    global_settings.set_boolean("migrated", true);
    return;
  }

  const session = createSession(`${getNowForFilename()} state`);
  for (const state_file of state_files) {
    try {
      data_dir.get_child(state_file[0]).move(
        session.file.get_child(state_file[1]), // destination
        Gio.FileCopyFlags.BACKUP, // flags
        null, // cancellable
        null, // progress_callback
      );
    } catch (err) {
      if (err.code !== GLib.FileError.NOENT) {
        throw err;
      }
    }
  }

  global_settings.set_boolean("migrated", true);

  return session;
}
