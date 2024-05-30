import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";

import {
  data_dir,
  ensureDir,
  getNowForFilename,
  demos_dir,
  settings as global_settings,
  settings,
  copyDirectory,
  decode,
  removeDirectory,
} from "./util.js";
import { languages } from "./common.js";
import { createElement as xml } from "./langs/xml/xml.js";

export const sessions_dir = data_dir.get_child("sessions");

const icon_theme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default());

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

  await createSessionFiles(file);

  return session;
}

export async function deleteSession(session) {
  return removeDirectory(session.file);
}

export async function saveSessionAsProject(session, destination) {
  session.settings.set_string("name", destination.get_basename());

  await copyDirectory(session.file, destination);
  await createSessionFiles(destination);
  await deleteSession(session).catch(console.error);
}

export class Session {
  file = null;
  settings = null;
  id = Math.random().toString().substring(2);
  resource_icons = null;
  resource_icons_file = null;

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
    await this.loadIcons();
  }

  async loadIcons() {
    await this.unloadIcons();
    const resource_icons_file = await buildGResourceIcons(this.file);
    if (!resource_icons_file) return;
    this.resource_icons_file = resource_icons_file;
    this.resource_icons = Gio.resource_load(resource_icons_file.get_path());
    this.resource_icons._register();

    // Reload icons see https://github.com/sonnyp/gtk-resource-icons
    const resource_paths = new Set(icon_theme.resource_path);
    resource_paths.add("/re/sonny/Workbench/icons/");
    icon_theme.set_resource_path([...resource_paths]);
  }

  async unloadIcons() {
    this.resource_icons?._unregister();
    this.resource_icons = null;
  }

  async unload() {
    await this.unloadIcons();
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

async function buildGResourceIcons(file) {
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

  const file_xml = file.get_child("icons.gresource.xml");
  const file_gresource = file.get_child("icons.gresource");

  file_xml.replace_contents(
    gresource_xml, // contents
    null, // etag
    false, // make_backup
    Gio.FileCreateFlags.NONE, // flags
    null,
  );

  const [, stdout, stderr, status] = GLib.spawn_command_line_sync(
    `glib-compile-resources --target="${file_gresource.get_path()}" --sourcedir="${dir.get_path()}" "${file_xml.get_path()}"`,
  );
  console.debug(stdout);
  if (status !== 0) {
    throw new Error(decode(stderr));
  }

  return file_gresource;
}

async function createIconsDirectory(file) {
  try {
    await file
      .get_child("icons")
      .make_directory_async(GLib.PRIORITY_DEFAULT, null);
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
      throw err;
    }
  }
}

async function createREADMEFile(file) {
  await Gio.File.new_for_path(pkg.pkgdatadir)
    .get_child("project-readme.md")
    .copy_async(
      file.get_child("README.md"), // destination
      Gio.FileCopyFlags.OVERWRITE, // flags
      GLib.PRIORITY_DEFAULT, // priority
      null, // cancellable
      null, // progress_callback
    );
}

async function createSessionFiles(file) {
  return Promise.all([createIconsDirectory(file), createREADMEFile(file)]);
}
