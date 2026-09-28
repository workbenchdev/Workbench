/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GL?version=1.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace GL {
        /**
         * GL-1.0
         */

        function InitNames(): void;
        class bitfield {
            static $gtype: GObject.GType<bitfield>;

            // Constructors

            _init(...args: any[]): void;
        }

        class charARB {
            static $gtype: GObject.GType<charARB>;

            // Constructors

            _init(...args: any[]): void;
        }

        class clampf {
            static $gtype: GObject.GType<clampf>;

            // Constructors

            _init(...args: any[]): void;
        }

        class __boolean {
            static $gtype: GObject.GType<__boolean>;

            // Constructors

            _init(...args: any[]): void;
        }

        class __enum {
            static $gtype: GObject.GType<__enum>;

            // Constructors

            _init(...args: any[]): void;
        }

        class float {
            static $gtype: GObject.GType<float>;

            // Constructors

            _init(...args: any[]): void;
        }

        class handleARB {
            static $gtype: GObject.GType<handleARB>;

            // Constructors

            _init(...args: any[]): void;
        }

        class int {
            static $gtype: GObject.GType<int>;

            // Constructors

            _init(...args: any[]): void;
        }

        class intptr {
            static $gtype: GObject.GType<intptr>;

            // Constructors

            _init(...args: any[]): void;
        }

        class sizei {
            static $gtype: GObject.GType<sizei>;

            // Constructors

            _init(...args: any[]): void;
        }

        class sizeiptr {
            static $gtype: GObject.GType<sizeiptr>;

            // Constructors

            _init(...args: any[]): void;
        }

        class uint {
            static $gtype: GObject.GType<uint>;

            // Constructors

            _init(...args: any[]): void;
        }

        class __void {
            static $gtype: GObject.GType<__void>;

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

    export default GL;
}

declare module 'gi://GL' {
    import GL10 from 'gi://GL?version=1.0';
    export default GL10;
}
// END
