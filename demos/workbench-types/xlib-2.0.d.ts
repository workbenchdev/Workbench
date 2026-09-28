/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://xlib?version=2.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace xlib {
        /**
         * xlib-2.0
         */

        function open_display(): void;
        class Display {
            static $gtype: GObject.GType<Display>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Screen {
            static $gtype: GObject.GType<Screen>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Visual {
            static $gtype: GObject.GType<Visual>;

            // Constructors

            _init(...args: any[]): void;
        }

        class XConfigureEvent {
            static $gtype: GObject.GType<XConfigureEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        class XImage {
            static $gtype: GObject.GType<XImage>;

            // Constructors

            _init(...args: any[]): void;
        }

        class XFontStruct {
            static $gtype: GObject.GType<XFontStruct>;

            // Constructors

            _init(...args: any[]): void;
        }

        class XTrapezoid {
            static $gtype: GObject.GType<XTrapezoid>;

            // Constructors

            _init(...args: any[]): void;
        }

        class XVisualInfo {
            static $gtype: GObject.GType<XVisualInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        class XWindowAttributes {
            static $gtype: GObject.GType<XWindowAttributes>;

            // Constructors

            _init(...args: any[]): void;
        }

        class XEvent {
            static $gtype: GObject.GType<XEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        type Atom = number;
        type Colormap = number;
        type Cursor = number;
        type Drawable = number;
        type GC = any;
        type KeyCode = number;
        type KeySym = number;
        type Picture = number;
        type Time = number;
        type VisualID = number;
        type Window = number;
        type XID = number;
        type Pixmap = number;
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

    export default xlib;
}

declare module 'gi://xlib' {
    import Xlib20 from 'gi://xlib?version=2.0';
    export default Xlib20;
}
// END
