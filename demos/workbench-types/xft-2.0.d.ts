/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://xft?version=2.0' {
    // Module dependencies
    import type xlib from 'gi://xlib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';

    export namespace xft {
        /**
         * xft-2.0
         */

        function init(): void;
        class Color {
            static $gtype: GObject.GType<Color>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Draw {
            static $gtype: GObject.GType<Draw>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Font {
            static $gtype: GObject.GType<Font>;

            // Constructors

            _init(...args: any[]): void;
        }

        class GlyphSpec {
            static $gtype: GObject.GType<GlyphSpec>;

            // Constructors

            _init(...args: any[]): void;
        }

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

    export default xft;
}

declare module 'gi://xft' {
    import Xft20 from 'gi://xft?version=2.0';
    export default Xft20;
}
// END
