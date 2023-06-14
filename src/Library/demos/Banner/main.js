import Adw from "gi://Adw";

const banner = workbench.builder.get_object("banner");
const overlay = workbench.builder.get_object("overlay");
const button_show_banner = workbench.builder.get_object("button_show_banner");

function alert() {
  const toast = new Adw.Toast({
    title: "Troubleshoot successful!",
    timeout: 3,
  });

  overlay.add_toast(toast);
}

banner.connect("button-clicked", () => {
  alert();
  banner.revealed = false;
});

button_show_banner.connect("clicked", () => {
  banner.revealed = true;
});
