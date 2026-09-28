/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://libxml2?version=2.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace libxml2 {
        /**
         * libxml2-2.0
         */

        function dummy(): void;
        class Node {
            static $gtype: GObject.GType<Node>;

            // Constructors

            _init(...args: any[]): void;
        }

        class NodePtr {
            static $gtype: GObject.GType<NodePtr>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Doc {
            static $gtype: GObject.GType<Doc>;

            // Constructors

            _init(...args: any[]): void;
        }

        class DocPtr {
            static $gtype: GObject.GType<DocPtr>;

            // Constructors

            _init(...args: any[]): void;
        }

        class NsPtr {
            static $gtype: GObject.GType<NsPtr>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Char {
            static $gtype: GObject.GType<Char>;

            // Constructors

            _init(...args: any[]): void;
        }

        class TextWriter {
            static $gtype: GObject.GType<TextWriter>;

            // Constructors

            _init(...args: any[]): void;
        }

        class TextReader {
            static $gtype: GObject.GType<TextReader>;

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

    export default libxml2;
}

declare module 'gi://libxml2' {
    import Libxml220 from 'gi://libxml2?version=2.0';
    export default Libxml220;
}
// END
