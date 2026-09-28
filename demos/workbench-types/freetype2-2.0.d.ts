/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://freetype2?version=2.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace freetype2 {
        /**
         * freetype2-2.0
         */

        class Bitmap {
            static $gtype: GObject.GType<Bitmap>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Face {
            static $gtype: GObject.GType<Face>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Library {
            static $gtype: GObject.GType<Library>;

            // Constructors

            _init(...args: any[]): void;
        }

        type Int32 = number;
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

    export default freetype2;
}

declare module 'gi://freetype2' {
    import Freetype220 from 'gi://freetype2?version=2.0';
    export default Freetype220;
}
// END
