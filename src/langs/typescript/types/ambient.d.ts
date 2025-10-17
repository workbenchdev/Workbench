/// <reference path="../template/gi-types/index.d.ts" />

import Adw from "gi://Adw";
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

declare global {
  const workbench: {
    window: Adw.ApplicationWindow;
    application: Adw.Application;
    builder: Gtk.Builder;
    template: string;
    resolve(path: string): string;
    preview(object: Gtk.Widget): void;
    build(params: Record<string, Function | GObject.Object>): void;
  };
}
