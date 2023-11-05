import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

Gio._promisify(Xdp.Portal.prototype, "compose_email", "compose_email_finish");

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const button = workbench.builder.get_object("button");
const entry = workbench.builder.get_object("entry");

async function onClicked() {
  const email_address = entry.get_text();

  const success = await portal.compose_email(
    parent,
    [email_address], // addresses
    null, // cc
    null, // bcc
    "Email from Workbench", // subject
    "Hello World!", // body
    null, // attachments
    Xdp.EmailFlags.NONE, // flags
    null, // cancellable
  );

  if (success) {
    console.log("Success");
  } else {
    console.log("Failure, verify that you have an email application.");
  }
}

button.connect("clicked", () => {
  onClicked().catch(console.error);
});
