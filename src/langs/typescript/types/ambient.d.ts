/// <reference path="@pkgdatadir@/langs/typescript/gi-types/adw-1.d.ts" />
/// <reference path="@pkgdatadir@/langs/typescript/gi-types/gtk-4.0.d.ts" />
/// <reference path="@pkgdatadir@/langs/typescript/gi-types/gobject-2.0.d.ts" />

import Gtk from "gi://Gtk?version=4.0";
import Adw from "gi://Adw";
import GObject from "gi://GObject";

declare global {
  // global workbench object
  declare const workbench: {
    window: Adw.ApplicationWindow;
    application: Adw.Application;
    builder: Gtk.Builder;
    template: string;
    resolve(path: string): string;
    preview(object: Gtk.Widget): void;
    build(params: Record<string, Function | GObject.Object>): void;
  };
}
