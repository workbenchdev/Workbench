const Adw = imports.gi.Adw;

const banner = workbench.builder.get_object("banner");
const overlay = workbench.builder.get_object("overlay");

function alert() {
  const toast = new Adw.Toast({
    title: "Troubleshoot successful!",
    timeout: 3,
  });

  overlay.add_toast(toast);
}

// signal called when banner button is clicked
banner.connect("button-clicked", alert);
