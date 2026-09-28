/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GLibUnix?version=2.0' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';

    export namespace GLibUnix {
        /**
         * GLibUnix-2.0
         */

        /**
         * Mnemonic constants for the ends of a Unix pipe.
         */

        /**
         * Mnemonic constants for the ends of a Unix pipe.
         */
        export namespace PipeEnd {
            export const $gtype: GObject.GType<PipeEnd>;
        }

        enum PipeEnd {
            /**
             * The readable file descriptor 0
             */
            READ,
            /**
             * The writable file descriptor 1
             */
            WRITE,
        }
        function closefrom(lowfd: number): number;
        function error_quark(): GLib.Quark;
        function fd_add_full(
            priority: number,
            fd: number,
            condition: GLib.IOCondition,
            _function: GLib.UnixFDSourceFunc,
        ): number;
        function fd_source_new(fd: number, condition: GLib.IOCondition): GLib.Source;
        function fdwalk_set_cloexec(lowfd: number): number;
        function get_passwd_entry(user_name: string): any | null;
        function open_pipe(fds: number, flags: number): boolean;
        function set_fd_nonblocking(fd: number, nonblock: boolean): boolean;
        function signal_add_full(priority: number, signum: number, handler: GLib.SourceFunc): number;
        function signal_source_new(signum: number): GLib.Source;
        interface FDSourceFunc {
            (fd: number, condition: GLib.IOCondition): boolean;
        }
        /**
         * A Unix pipe. The advantage of this type over `int[2]` is that it can
         * be closed automatically when it goes out of scope, using `g_auto(GUnixPipe)`,
         * on compilers that support that feature.
         */
        class Pipe {
            static $gtype: GObject.GType<Pipe>;

            // Fields

            fds: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    fds: number[];
                }>,
            );
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

    export default GLibUnix;
}

declare module 'gi://GLibUnix' {
    import GLibUnix20 from 'gi://GLibUnix?version=2.0';
    export default GLibUnix20;
}
// END
