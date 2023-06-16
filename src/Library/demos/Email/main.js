import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const button = workbench.builder.get_object("button");
const entry = workbench.builder.get_object("entry");

Gio._promisify(Xdp.Portal.prototype, "compose_email", "compose_email_finish");

//E-Mail Validator
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function sendEmail() {
  const email = entry.get_text();
  if (isValidEmail(email)) {
    const success = await portal.compose_email(
      parent,
      [email], //address
      null, //cc
      null, //bcc
      "Email from Workbench", //subject
      "Hello World!", //message
      null, //attachments
      Xdp.EmailFlags.NONE,
      null,
    );

    if (success) {
      console.log("Success");
    } else {
      console.log("Failure, verify that you have a email application.");
    }
  } else {
    console.log("Invalid email address");
    return;
  }
}

button.connect("clicked", () => {
  sendEmail().catch(logError);
});
