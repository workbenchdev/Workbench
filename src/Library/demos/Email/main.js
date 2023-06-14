import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import Adw from "gi://Adw";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const button = workbench.builder.get_object("button");
const picture = workbench.builder.get_object("picture");

Gio._promisify(Xdp.Portal.prototype, "compose_email", "compose_email_finish");

async function sendEmail() {
  try {
    const result = await portal.compose_email(
      parent,
      ["sonicworks05@gmail.com"],
      ["test@gmail.com"],
      null,
      "Demo Message",
      "Demo Content",
      null,
      Xdp.EmailFlags.NONE,
      null,
    );

    if (result) {
      console.log("Email app opened");
    }
  } catch (err) {
    logError(err);
  }
}

button.connect("clicked", sendEmail);
