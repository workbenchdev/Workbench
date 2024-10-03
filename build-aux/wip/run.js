#!/usr/bin/env -S gjs -m

import Gio from "gi://Gio";
import { exit, programArgs, programInvocationName } from "system";
import GLib from "gi://GLib";
import minimist from "./minimist.js";

// export G_MESSAGES_DEBUG=Gjs-Console && ./run.js

Gio._promisify(
  Gio.File.prototype,
  "load_contents_async",
  "load_contents_finish",
);

Gio._promisify(
  Gio.Subprocess.prototype,
  "wait_check_async",
  "wait_check_finish",
);

// const path = GLib.get_current_dir();
const path = "/home/sonny/Projects/Workbench";
console.debug(programInvocationName, programArgs);
const argv = minimist(programArgs, { boolean: true });
console.debug(argv);

const [manifest_path] = argv._;
if (!manifest_path) {
  // eslint-disable-next-line no-restricted-globals
  print(`${programInvocationName} [--verbose] [--debug] MANIFEST`);
  exit(0);
}

const home = GLib.get_home_dir();

const manifest_file = Gio.File.new_for_path(manifest_path);
const [contents] = await manifest_file.load_contents_async(null);
const manifest = JSON.parse(new TextDecoder().decode(contents));

// console.log(JSON.parse(manifest));

const flatpak_id = manifest.id;
// We assume the last module is the app itself
const app_module = manifest.modules.at(-1);

function exists(path) {
  const result = Gio.File.new_for_path(path).query_exists(null);
  console.debug(`${path} ${result ? "exists" : "non existant"}`);
  return result;
}

if (!exists(`${path}/.flatpak/repo`)) {
  const { runtime, sdk } = manifest;
  const runtime_version = manifest["runtime-version"];
  // initializes repo
  await run([
    "flatpak",
    "build-init",
    `${path}/.flatpak/repo`,
    flatpak_id,
    sdk,
    runtime,
    runtime_version,
  ]);
}

const prefix = [
  "flatpak-builder",
  "--ccache",
  "--force-clean",
  "--disable-updates",
];
const suffix = [
  `--state-dir=${path}/.flatpak/flatpak-builder`,
  `--stop-at=${app_module.name}`,
  `${path}/.flatpak/repo`,
  Gio.File.new_for_path(path).get_relative_path(manifest_file),
];

// de-initializes
async function downloadSources() {
  await run([...prefix, "--download-only", ...suffix]);
}

// de-initializes
async function buildModules() {
  await run([
    ...prefix,
    "--disable-download",
    "--build-only",
    "--keep-build-dirs",
    ...suffix,
  ]);
}

if (!exists(`${path}/.flatpak/flatpak-builder`)) {
  await downloadSources();
  await buildModules();
}

// builds workbench
if (!exists(`${path}/_build`)) {
  await buildCommand([
    "meson",
    "--prefix",
    "/app",
    "_build",
    "-Dprofile=development",
  ]);
}

await buildCommand(["meson", "install", "-C", "_build"]);
// await buildCommand([
//   `troll/gjspack/bin/gjspack`,
//   `--appid=${flatpak_id}`,
//   "--prefix=/re/sonny/Workbench",
//   `--project-root=.`,
//   `--resource-root=./src`,
//   "--blueprint-compiler=/app/bin/blueprint-compiler",
//   "--no-executable",
//   `${path}/src/main.js`,
//   `/app/share/${flatpak_id}.src.gresource`,
// ]);

// starts workbench
await runCommand([manifest.command]);

function buildCommand(argv) {
  let PATH =
    "/app/bin:/app/bin:/app/bin:/usr/bin:${home}/.var/app/com.visualstudio.code/data/node_modules/bin:/app/bin:/usr/bin";
  const append_path = manifest["build-options"]?.["append-path"];
  if (append_path) PATH += `:${append_path}`;

  let LD_LIBRARY_PATH = "/app/lib:/app/lib";
  const append_ld_library_path =
    manifest["build-options"]?.["append-ls-library-path"];
  if (append_ld_library_path) LD_LIBRARY_PATH += `:${append_ld_library_path}`;

  const PKG_CONFIG_PATH =
    "/usr/local/lib64/pkgconfig:/usr/local/lib/pkgconfig:/usr/local/share/pkgconfig:/usr/lib64/pkgconfig:/usr/lib/pkgconfig:/usr/share/pkgconfig:/app/lib/pkgconfig:/app/share/pkgconfig:/usr/lib/pkgconfig:/usr/share/pkgconfig";

  return run([
    "flatpak",
    "build",
    "--share=network",
    `--filesystem=${path}`,
    `--filesystem=${path}/.flatpak/repo`,
    `--env=PATH=${PATH}`,
    `--env=LD_LIBRARY_PATH=${LD_LIBRARY_PATH}`,
    `--env=PKG_CONFIG_PATH=${PKG_CONFIG_PATH}`,
    `--filesystem=${path}/_build`,
    `${path}/.flatpak/repo`,
    ...argv,
  ]);
}

async function runCommand(argv) {
  await exec(
    [
      "flatpak",
      "build",
      "--with-appdir",
      "--allow=devel",
      `--bind-mount=/run/user/1000/doc=/run/user/1000/doc/by-app/${flatpak_id}`,
      ...manifest["finish-args"],

      // Non default permissions
      // see Permissions.js
      // consider getting installed overrides instead
      "--share=network",
      "--socket=pulseaudio",
      "--device=input",

      "--talk-name=org.freedesktop.portal.*",
      "--talk-name=org.a11y.Bus",
      "--bind-mount=/run/flatpak/at-spi-bus=/run/user/1000/at-spi/bus",
      "--env=AT_SPI_BUS_ADDRESS=unix:path=/run/flatpak/at-spi-bus",
      ...getHostEnv(),
      "--bind-mount=/run/host/fonts=/usr/share/fonts",
      "--bind-mount=/run/host/fonts-cache=/usr/lib/fontconfig/cache",
      `--filesystem=${home}/.local/share/fonts:ro`,
      `--filesystem=${home}/.cache/fontconfig:ro`,
      `--bind-mount=/run/host/user-fonts-cache=${home}/.cache/fontconfig`,
      `--bind-mount=/run/host/font-dirs.xml=${home}/.cache/font-dirs.xml`,
      `${path}/.flatpak/repo`,
      ...argv,
    ],
    { verbose: true },
  );
}

function getHostEnv() {
  // https://github.com/bilelmoussaoui/flatpak-vscode/blob/6424e7d8f53924faa33c9043153e08b0aedf6225/src/utils.ts#L88
  const forwarded_env_keys = [
    "COLORTERM",
    "DESKTOP_SESSION",
    "LANG",
    "WAYLAND_DISPLAY",
    "XDG_CURRENT_DESKTOP",
    "XDG_SEAT",
    "XDG_SESSION_DESKTOP",
    "XDG_SESSION_ID",
    "XDG_SESSION_TYPE",
    "XDG_VTNR",
    "AT_SPI_BUS_ADDRESS",
  ];

  const env_vars = [];
  forwarded_env_keys.forEach((key) => {
    const value = GLib.getenv(key);
    if (value === undefined) env_vars.push(key + "=" + value);
  });

  return env_vars;
}

async function run(_) {
  return exec(_, { verbose: argv.verbose });
}

async function exec(argv, { cancellable = null /*, verbose = false*/ }) {
  argv = argv.map((arg) => {
    return arg.toString();
  });

  console.debug(`$ ${argv}`);

  let cancelId = 0;

  // meson uses stdout for logs
  // const flags = verbose
  //   ? Gio.SubprocessFlags.NONE
  //   : Gio.SubprocessFlags.STDOUT_SILENCE;

  const flags = Gio.SubprocessFlags.NONE;

  const proc = new Gio.Subprocess({
    argv,
    flags,
  });
  proc.init(cancellable);

  if (cancellable instanceof Gio.Cancellable)
    cancelId = cancellable.connect(() => proc.force_exit());

  try {
    const success = await proc.wait_check_async(null);

    if (!success) {
      const status = proc.get_exit_status();
      throw new Gio.IOErrorEnum({
        code: Gio.IOErrorEnum.FAILED,
        message: `Command '${argv}' failed with exit code ${status}`,
      });
    }
  } catch (err) {
    console.debug(err);
    exit(1);
  } finally {
    if (cancelId > 0) cancellable.disconnect(cancelId);
  }
}
