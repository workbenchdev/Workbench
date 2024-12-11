import GLib from "gi://GLib";

let flatpak_info;
export function getFlatpakInfo() {
  if (flatpak_info) return flatpak_info;
  flatpak_info = new GLib.KeyFile();
  try {
    flatpak_info.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);
  } catch (err) {
    if (!err.matches(GLib.FileError, GLib.FileError.NOENT)) {
      console.error(err);
    }
    return null;
  }
  return flatpak_info;
}

export function getFlatpakId() {
  return getFlatpakInfo().get_string("Application", "name");
}

// https://repology.org/project/flatpak/versions
export function isDeviceInputOverrideAvailable(flatpak_version) {
  flatpak_version ??= getFlatpakInfo().get_string(
    "Instance",
    "flatpak-version",
  );

  // https://github.com/flatpak/flatpak/releases/tag/1.15.6
  return (
    flatpak_version.localeCompare("1.15.6", undefined, {
      numeric: true,
      sensitivity: "base",
    }) > -1
  );
}
