import Gtk from "gi://Gtk";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import GObject from "gi://GObject";
import Gst from "gi://Gst";
import Gio from "gi://Gio";

Gst.init(null);

Gio._promisify(
  Xdp.Portal.prototype,
  "create_screencast_session",
  "create_screencast_session_finish",
);

Gio._promisify(Xdp.Session.prototype, "start", "start_finish");

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const output = workbench.builder.get_object("output");
const button = workbench.builder.get_object("button");

Gio._promisify(Xdp.Session.prototype, "start", "start_finish");

button.connect("clicked", () => {
  startScreencastSession().catch(logError);
});

async function startScreencastSession() {
  const session = await portal.create_screencast_session(
    Xdp.OutputType.MONITOR,
    Xdp.ScreencastFlags.NONE,
    Xdp.CursorMode.EMBEDDED,
    Xdp.PersistMode.TRANSIENT,
    null,
    null,
  );

  if (!session) {
    console.log("Permission denied");
    return;
  }

  const success = await session.start(parent, null);
  if (!success) {
    console.log("Could not start session");
    return;
  }

  const pw_remote = await session.open_pipewire_remote();

  // Create the pipeline
  const pipeline = new Gst.Pipeline();

  // Create elements
  const source = Gst.ElementFactory.make("pipewiresrc", "source");
  const queue = Gst.ElementFactory.make("queue", "queue"); // add a queue element
  const paintable_sink = Gst.ElementFactory.make(
    "gtk4paintablesink",
    "paintable_sink",
  );
  const glsinkbin = Gst.ElementFactory.make("glsinkbin", "glsinkbin");

  // Set up and Link Pipeline
  source.set_property("fd", pw_remote); // pw_remote is the file descriptor obtained from libportal

  // Obtain the node id from the screencast session
  const streams = session.get_streams().deepUnpack();

  // Assuming there's only one stream for simplicity
  const node_id = streams[0][0];
  if (!node_id) {
    console.error("No available node id");
    return;
  }

  // Set the path property of pipewiresrc
  source.set_property("path", node_id);

  glsinkbin.set_property("sink", paintable_sink);

  pipeline.add(source);
  pipeline.add(queue);
  pipeline.add(glsinkbin);
  source.link(queue);
  queue.link(glsinkbin);

  const paintable = new GObject.Value();
  paintable_sink.get_property("paintable", paintable);
  output.paintable = paintable.get_object();

  // Start the pipeline
  pipeline.set_state(Gst.State.PLAYING);

  // Handle cleanup on application exit
  output.connect("destroy", () => {
    pipeline.set_state(Gst.State.NULL);
  });
}

