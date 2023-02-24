using Gtk 4.0;
using Adw 1;

Adw.StatusPage {
  title: "Switch";
  description: _("A simple on/off control");

  Box {
    orientation: vertical;

    Box {
      orientation: vertical;
      halign: center;

      Switch switch_on {
      margin-bottom: 10;
      }
    }
    Label label_on {
    label: "On";
    margin-bottom: 40;
    }

    Box {
     orientation: vertical;
     halign: center;

     Switch switch_off {
     margin-bottom: 10;
     }
    }

    Label label_off {
    label: "Off";
    margin-bottom: 40;
    }

    Box {
     orientation: vertical;
     halign: center;

     Switch Disabled_Switch {
     margin-bottom: 10;
     sensitive: false;
     }
    }

    Label Disabled {
    label: "Disabled";
    margin-bottom: 40;
    }

    LinkButton{
    label: "Tutorial";
    uri: "https://developer.gnome.org/documentation/tutorials/beginners/components/switch.html";
    }

    LinkButton{
    label: "API Reference";
    uri: "https://docs.gtk.org/gtk4/class.Switch.html";
    }

    LinkButton{
    label: "Human Interface Guidelines";
    uri: "https://developer.gnome.org/hig/patterns/controls/switches.html";
    }



  }
})
