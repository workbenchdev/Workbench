/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://xrandr?version=1.3' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace xrandr {
        /**
         * xrandr-1.3
         */

        class ScreenSize {
            static $gtype: GObject.GType<ScreenSize>;

            // Constructors

            _init(...args: any[]): void;
        }

        class ScreenChangeNotifyEvent {
            static $gtype: GObject.GType<ScreenChangeNotifyEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        class NotifyEvent {
            static $gtype: GObject.GType<NotifyEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        class ScreenResources {
            static $gtype: GObject.GType<ScreenResources>;

            // Constructors

            _init(...args: any[]): void;
        }

        class OutputChangeNotifyEvent {
            static $gtype: GObject.GType<OutputChangeNotifyEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        class CrtcChangeNotifyEvent {
            static $gtype: GObject.GType<CrtcChangeNotifyEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        class OutputPropertyNotifyEvent {
            static $gtype: GObject.GType<OutputPropertyNotifyEvent>;

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

    export default xrandr;
}

declare module 'gi://xrandr' {
    import Xrandr13 from 'gi://xrandr?version=1.3';
    export default Xrandr13;
}
// END
