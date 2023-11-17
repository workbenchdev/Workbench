import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

Gio._promisify(Gtk.FileDialog.prototype, "save", "save_finish");
Gio._promisify(
  Gio.File.prototype,
  "replace_contents_async",
  "replace_contents_finish",
);

const button = workbench.builder.get_object("button");

async function saveFile() {
  const dialog = new Gtk.FileDialog({
    initial_name: "Workbench.txt",
  });
  // "dialog.save" returns a Gio.File you can write to
  const file = await dialog.save(workbench.window, null);

  const contents = new TextEncoder().encode("Hello from Workbench!");
  await file.replace_contents_async(
    contents,
    null,
    false,
    Gio.FileCreateFlags.NONE,
    null,
  );

  console.log(`File ${file.get_basename()} saved`);
}

// Handle button click
button.connect("clicked", () => {
  saveFile().catch(console.error);
});
