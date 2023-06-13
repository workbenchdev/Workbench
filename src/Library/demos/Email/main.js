import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const button = workbench.builder.get_object("button");

function handleClick() {
  portal.compose_email(
    parent,
    ["sonicworks05@gmail.com"],
    ["sriyanshshivam1@gmail.com"],
    null,
    "Demo Message",
    "Demo Content",
    null,
    Xdp.EmailFlags.NONE,
    null,
    (parent, result) => {
      try {
        portal.compose_email_finish(result);
        log("Email sent");
      } catch (e) {
        logError(e);
      }
    },
  );
}

button.connect("clicked", handleClick);
