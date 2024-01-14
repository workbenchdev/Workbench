import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { gettext as _ } from "gettext";

import {
  data_dir,
  ensureDir,
  getNowForFilename,
  demos_dir,
  settings as global_settings,
  encode,
  settings,
  copyDirectory,
} from "./util.js";
import { languages } from "./common.js";

export const sessions_dir = data_dir.get_child("sessions");

export function getSessions() {
  const files = new Map();

  // Sessions
  ensureDir(sessions_dir);
  for (const file_info of sessions_dir.enumerate_children(
    "",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  )) {
    if (file_info.get_file_type() !== Gio.FileType.DIRECTORY) continue;
    const file = sessions_dir.get_child(file_info.get_name());
    files.set(file.get_path(), file);
  }

  // Projects
  const recent_projects = settings.get_strv("recent-projects");
  for (const path of recent_projects) {
    const file = Gio.File.new_for_path(path);
    if (
      file.query_file_type(Gio.FileQueryInfoFlags.NONE, null) !==
      Gio.FileType.DIRECTORY
    ) {
      removeFromRecentProjects();
      continue;
    }
    files.set(file.get_path(), file);
  }

  return [...files.values()].map((file) => new Session(file));
}

function createSession() {
  const id = getNowForFilename();
  const file = sessions_dir.get_child(id);
  ensureDir(file);
  const session = new Session(file);
  return session;
}

export function createSessionFromDemo(demo) {
  const { name, panels } = demo;

  const session = createSession();
  const demo_dir = demos_dir.get_child(name);

  const { file, settings } = session;
  copyDirectory(demo_dir, file);

  settings.set_string("name", name);
  settings.set_boolean("show-code", panels.includes("code"));
  settings.set_boolean("show-style", panels.includes("style"));
  settings.set_boolean("show-ui", panels.includes("ui"));
  settings.set_boolean("show-preview", panels.includes("preview"));
  settings.set_int(
    "code-language",
    global_settings.get_int("recent-code-language"),
  );

  return session;
}

export async function deleteSession(session) {
  // There is no method to recursively delete a folder so we trash instead
  // https://github.com/flatpak/xdg-desktop-portal/issues/630 :/
  // portal.trash_file(file.get_path(), null).catch(console.error);
  session.file.trash(null);
}

export async function saveSessionAsProject(session, destination) {
  session.settings.set_string("name", destination.get_basename());

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
  file = null;
  settings = null;
  id = Math.random().toString().substring(2);

  constructor(file) {
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

  get name() {
    return this.settings.get_string("name") || this.file.get_basename();
  }

  isProject() {
    return !this.file.get_parent().equal(sessions_dir);
  }

  getCodeLanguage() {
    const code_languge = this.settings.get_int("code-language");
    return languages.find((lang) => lang.index === code_languge);
  }
}

export function addToRecentProjects(path) {
  const recent_projects = new Set(settings.get_strv("recent-projects"));
  recent_projects.add(path);
  settings.set_strv("recent-projects", [...recent_projects]);
}

export function removeFromRecentProjects(path) {
  const recent_projects = new Set(settings.get_strv("recent-projects"));
  recent_projects.delete(path);
  settings.set_strv("recent-projects", [...recent_projects]);
}
