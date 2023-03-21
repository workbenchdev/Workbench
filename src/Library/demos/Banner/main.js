import Gtk from "gi://Gtk?version=4.0";
const Adw = imports.gi.Adw;
Gtk.init();

const _bannerBox = workbench.builder.get_object("banner_box");
const _openBanner = workbench.builder.get_object("open_banner");

function adwBanner() {
  // Create a new AdwBanner widget
  const banner = new Adw.Banner({
    button_label: "OK",
    title: "Simple Banner Test",
    revealed: true,
    use_markup: true,
    margin_bottom: 20,
  });

  return banner;
}

const banner = adwBanner();

// Signal to open banner
_openBanner.connect("clicked", () => {
  if (!banner.revealed) {
    banner.revealed = true;
  }
  _bannerBox.prepend(banner);
  _bannerBox.remove(_openBanner);
});

// signal called when banner button is clicked
banner.connect("button-clicked", async (banner) => {
  await banner.set_revealed(false);

  if (!banner.revealed) {
    _bannerBox.remove(banner);
  }

  _bannerBox.append(_openBanner);
});

