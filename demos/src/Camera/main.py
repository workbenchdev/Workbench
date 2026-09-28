import gi

gi.require_version("Gst", "1.0")
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


def on_bus_message(_self, message):
    # Check the message type
    message_type = message.type

    # Handle different message types
    match message_type:
        case Gst.MessageType.ERROR:
            error_message = message.parse_error()
            print(error_message[0].message, file=sys.stderr)
        case Gst.MessageType.EOS:
            print("End of stream")


def handle_camera():
    fd_pipewire_remote = portal.open_pipewire_remote_for_camera()
    print("Pipewire remote opened for camera")

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
        "fd", fd_pipewire_remote
    )  # fd_pipewire_remote is the file descriptor obtained from libportal
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

    # Set up the bus
    bus = pipeline.get_bus()
    bus.add_signal_watch()
    bus.connect("message", on_bus_message)


def on_camera_accessed(portal, result):
    success = portal.access_camera_finish(result)
    if not success:
        print("Permission denied")
        return

    handle_camera()


def access_camera():
    if not portal.is_camera_present():
        print("No Camera detected")
        return

    portal.access_camera(parent, Xdp.CameraFlags.NONE, None, on_camera_accessed)


button.connect("clicked", lambda _: access_camera())
