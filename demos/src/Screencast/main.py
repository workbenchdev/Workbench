import gi

gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
from gi.repository import Gst, Xdp, XdpGtk4
import workbench
import sys

Gst.init(None)

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)
output = workbench.builder.get_object("output")
button = workbench.builder.get_object("button")


def on_session_start(session, result):
    success = session.start_finish(result)
    if not success:
        print("Could not start session")
        return

    pw_remote = session.open_pipewire_remote()

    # Create the pipeline
    pipeline = Gst.Pipeline()

    # Create elements
    source = Gst.ElementFactory.make("pipewiresrc", "source")
    queue = Gst.ElementFactory.make("queue", "queue")  # add a queue element
    paintable_sink = Gst.ElementFactory.make(
        "gtk4paintablesink",
        "paintable_sink",
    )
    glsinkbin = Gst.ElementFactory.make("glsinkbin", "glsinkbin")

    # Set up and Link Pipeline
    source.set_property(
        "fd", pw_remote
    )  # pw_remote is the file descriptor obtained from libportal

    # Obtain the node id from the screencast session
    streams = session.get_streams()

    # Assuming there's only one stream for simplicity
    node_id = streams[0][0]
    if not node_id:
        print("No available node id", file=sys.stderr)
        return

    # Set the path property of pipewiresrc
    source.set_property("path", node_id)

    glsinkbin.set_property("sink", paintable_sink)

    pipeline.add(source)
    pipeline.add(queue)
    pipeline.add(glsinkbin)
    source.link(queue)
    queue.link(glsinkbin)

    paintable = paintable_sink.get_property("paintable")
    output.set_paintable(paintable)

    # Start the pipeline
    pipeline.set_state(Gst.State.PLAYING)

    # Handle cleanup on application exit
    output.connect("destroy", lambda _: pipeline.set_state(Gst.State.NONE))


def on_screencast_session_create(portal, result):
    session = portal.create_screencast_session_finish(result)
    if not session:
        print("Permission denied")
        return

    session.start(parent, None, on_session_start)


def start_screencast_session():
    portal.create_screencast_session(
        Xdp.OutputType.MONITOR,
        Xdp.ScreencastFlags.NONE,
        Xdp.CursorMode.EMBEDDED,
        Xdp.PersistMode.TRANSIENT,
        None,
        None,
        on_screencast_session_create,
    )


button.connect("clicked", lambda _: start_screencast_session())
