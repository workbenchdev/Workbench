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
  decode,
} from "./util.js";
import { languages } from "./common.js";
import { createElement as xml } from "./langs/xml/xml.js";

export const sessions_dir = data_dir.get_child("sessions");

export async function getSessions() {
  const files = new Map();

  // Sessions
  ensureDir(sessions_dir);
  const enumerator = await sessions_dir.enumerate_children_async(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );
  for await (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;
    if (file_info.get_file_type() !== Gio.FileType.DIRECTORY) continue;
    const file = enumerator.get_child(file_info);
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
      removeFromRecentProjects(path);
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

export async function createSessionFromDemo(demo) {
  const { name, panels } = demo;

  const session = createSession();
  const demo_dir = demos_dir.get_child(name);

  const { file, settings } = session;
  await copyDirectory(demo_dir, file);

  settings.delay();
  settings.set_string("name", name);
  settings.set_boolean("show-code", panels.includes("code"));
  settings.set_boolean("show-style", panels.includes("style"));
  settings.set_boolean("show-ui", panels.includes("ui"));
  settings.set_boolean("show-preview", panels.includes("preview"));
  settings.set_int(
    "code-language",
    global_settings.get_int("recent-code-language"),
  );
  settings.apply();

  return session;
}

export async function deleteSession(session) {
  // There is no method to recursively delete a folder so we trash instead
  // https://github.com/flatpak/xdg-desktop-portal/issues/630 :/
  // portal.trash_file(file.get_path(), null).catch(console.error);
  try {
    session.file.trash(null);
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
      throw err;
    }
  }
}

export async function saveSessionAsProject(session, destination) {
  session.settings.set_string("name", destination.get_basename());

  await destination.make_directory_async(GLib.PRIORITY_DEFAULT, null);

  const enumerator = await session.file.enumerate_children_async(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );
  for await (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;
    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) continue;
    const file = enumerator.get_child(file_info);

    await file.move_async(
      destination.get_child(file.get_basename()), // destination
      Gio.FileCopyFlags.BACKUP, // flags
      GLib.PRIORITY_DEFAULT, // priority
      null, // cancellable
      null, // progress_callback
    );
  }

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

  await session.file.delete_async(GLib.PRIORITY_DEFAULT, null);
}

export class Session {
  file = null;
  settings = null;
  resource = null;
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

  async load() {
    const resource = await buildGresourceIcons(this.file);
    if (!resource) return;
    this.resource = resource;
    this.resource._register();
  }

  async unload() {
    this.resource?._unregister();
    this.resource = null;
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

async function buildGresourceIcons(file) {
  const dir = file.get_child("icons");
  let enumerator;

  try {
    enumerator = await dir.enumerate_children_async(
      `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
      Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
      GLib.PRIORITY_DEFAULT,
      null,
    );
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) {
      throw err;
    }
    return;
  }

  const files = [];
  for await (const file_info of enumerator) {
    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) continue;
    if (file_info.get_is_hidden()) return;

    const child = enumerator.get_child(file_info);
    files.push(child);
  }

  if (files.length < 1) return;

  const prefix = "/re/sonny/Workbench/icons/scalable/actions/";
  const root = xml(
    "gresources",
    {},
    xml(
      "gresource",
      { prefix },
      files.map((file) => xml("file", {}, file.get_basename())),
    ),
  );
  const gresource_xml = `<?xml version="1.0" encoding="UTF-8" ?>${root.toString()}`;

  const [file_xml] = Gio.File.new_tmp("workbench-XXXXXX.gresource.xml");
  file_xml.replace_contents(
    gresource_xml, // contents
    null, // etag
    false, // make_backup
    Gio.FileCreateFlags.NONE, // flags
    null,
  );

  const [file_gresource] = Gio.File.new_tmp("workbench-XXXXXX.gresource");

  const [, stdout, stderr, status] = GLib.spawn_command_line_sync(
    `glib-compile-resources --target="${file_gresource.get_path()}" --sourcedir="${dir.get_path()}" "${file_xml.get_path()}"`,
  );
  console.debug(stdout);
  if (status !== 0) {
    throw new Error(decode(stderr));
  }

  const resource = Gio.resource_load(file_gresource.get_path());
  return resource;
}
