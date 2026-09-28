/// <reference path="./gstvideo-1.0.d.ts" />
/// <reference path="./gstbase-1.0.d.ts" />
/// <reference path="./gst-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gstgl-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GstGLX11?version=1.0' {
    // Module dependencies
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GstGL from 'gi://GstGL?version=1.0';

    export namespace GstGLX11 {
        /**
         * GstGLX11-1.0
         */

        module GLDisplayX11 {
            // Constructor properties interface

            interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
        }

        /**
         * the contents of a #GstGLDisplayX11 are private and should only be accessed
         * through the provided API
         */
        class GLDisplayX11 extends GstGL.GLDisplay {
            static $gtype: GObject.GType<GLDisplayX11>;

            // Constructors

            constructor(properties?: Partial<GLDisplayX11.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name?: string | null): GLDisplayX11;
            // Conflicted with GstGL.GLDisplay.new

            static ['new'](...args: never[]): any;
        }

        type GLDisplayX11Class = typeof GLDisplayX11;
        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default GstGLX11;
}

declare module 'gi://GstGLX11' {
    import GstGLX1110 from 'gi://GstGLX11?version=1.0';
    export default GstGLX1110;
}
// END
