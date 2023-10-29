#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var breakpoint = (Adw.Breakpoint) workbench.builder.get_object ("breakpoint");

  breakpoint.apply.connect (() => message ("Breakpoint Applied"));
  breakpoint.unapply.connect (() => message ("Breakpoint Unapplied"));
}
