import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const parent = workbench.window;
const button = workbench.builder.get_object("button");

function handleClick() {
  const dialog = new Adw.AboutWindow({
    transient_for: parent,
    application_name: "Application",
    developer_name: "Developer Name",
    license_type: Gtk.License.GPL_3_0_ONLY,
    version: "1.2.3",
    website: "https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.3",
    application_icon: "application-x-executable",
    issue_url: "https://gitlab.gnome.org/GNOME/libadwaita/-/issues",
    developers: ["Sriyansh Shivam https://linkfree.io/SoNiC-HeRE"],
  });

  dialog.add_acknowledgement_section(_("Support Workbench"), [
    "GitHub https://github.com/sonnyp/Workbench",
  ]);

  dialog.present();
}

button.connect("clicked", handleClick);
