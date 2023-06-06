import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const parent = workbench.window;
const button = workbench.builder.get_object("button");

function handleClick() {
  const dialog = new Adw.AboutWindow({
    transient_for: parent,
    application_name: "Workbench",
    developer_name: "Sonny Piers",
    copyright: "© 2022 Sonny Piers",
    license_type: Gtk.License.GPL_3_0_ONLY,
    version: pkg.version,
    website: "https://workbench.sonny.re",
    application_icon: pkg.name,
    issue_url: "https://github.com/sonnyp/Workbench/issues",
    translator_credits: _("translator-credits"),
    developers: [
      "Sonny Piers https://sonny.re",
      "Lorenz Wildberg https://gitlab.gnome.org/lwildberg",
    ],
    designers: [
      "Sonny Piers https://sonny.re",
      "Tobias Bernard <tbernard@gnome.org>",
    ],
    artists: ["Tobias Bernard <tbernard@gnome.org>"],
  });

  dialog.add_credit_section(_("Contributors"), [
    "Akshay Warrier https://github.com/AkshayWarrier",
    "Ben Foote http://www.bengineeri.ng",
    "Brage Fuglseth https://bragefuglseth.dev",
    "Hari Rana (TheEvilSkeleton) https://theevilskeleton.gitlab.io",
    "Sriyansh Shivam https://linktr.ee/sonic_here",
    "Angelo Verlain https://www.vixalien.com",
    "bazylevnik0 https://github.com/bazylevnik0",
    "Felipe Kinoshita https://mastodon.social/@fkinoshita",
    "Karol Lademan https://github.com/karl0d",
    "Nasah Kuma https://www.mantohnasah.com/",
  ]);

  dialog.present();
}

button.connect("clicked", handleClick);
