/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://win32?version=1.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace win32 {
        /**
         * win32-1.0
         */

        class MSG {
            static $gtype: GObject.GType<MSG>;

            // Constructors

            _init(...args: any[]): void;
        }

        type HWND = number;
        type HICON = number;
        type HCURSOR = number;
        type HGDIOBJ = number;
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

    export default win32;
}

declare module 'gi://win32' {
    import Win3210 from 'gi://win32?version=1.0';
    export default Win3210;
}
// END
