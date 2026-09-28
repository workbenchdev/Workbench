/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://DBus?version=1.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace DBus {
        /**
         * DBus-1.0
         */

        export namespace BusType {
            export const $gtype: GObject.GType<BusType>;
        }

        enum BusType {
            SESSION,
            SYSTEM,
            STARTER,
        }
        class Connection {
            static $gtype: GObject.GType<Connection>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Error {
            static $gtype: GObject.GType<Error>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Message {
            static $gtype: GObject.GType<Message>;

            // Constructors

            _init(...args: any[]): void;
        }

        class MessageIter {
            static $gtype: GObject.GType<MessageIter>;

            // Constructors

            _init(...args: any[]): void;
        }

        class PendingCall {
            static $gtype: GObject.GType<PendingCall>;

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

    export default DBus;
}

declare module 'gi://DBus' {
    import DBus10 from 'gi://DBus?version=1.0';
    export default DBus10;
}
// END
