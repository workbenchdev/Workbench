/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://xfixes?version=4.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace xfixes {
        /**
         * xfixes-4.0
         */

        class XserverRegion {
            static $gtype: GObject.GType<XserverRegion>;

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

    export default xfixes;
}

declare module 'gi://xfixes' {
    import Xfixes40 from 'gi://xfixes?version=4.0';
    export default Xfixes40;
}
// END
