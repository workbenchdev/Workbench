/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Libproxy?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Libproxy {
        /**
         * Libproxy-1.0
         */

        /**
         * Frees the proxy array returned by `px_proxy_factory_get_proxies` when no
         * longer used.
         *
         * `since` 0.4.16
         * @param proxies a %NULL-terminated array of proxies
         */
        function proxy_factory_free_proxies(proxies: string[]): void;
        class ProxyFactory {
            static $gtype: GObject.GType<ProxyFactory>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ProxyFactory;

            // Static methods

            /**
             * Frees the proxy array returned by `px_proxy_factory_get_proxies` when no
             * longer used.
             *
             * `since` 0.4.16
             * @param proxies a %NULL-terminated array of proxies
             */
            static free_proxies(proxies: string[]): void;

            // Methods

            /**
             * Frees the `pxProxyFactory`.
             */
            free(): void;
            /**
             * Get which proxies to use for the specified `URL`.
             *
             * A %NULL-terminated array of proxy strings is returned.
             * If the first proxy fails, the second should be tried, etc...
             * Don't forget to free the strings/array when you are done.
             * If an unrecoverable error occurs, this function returns %NULL.
             *
             * Regarding performance: this method always blocks and may be called
             * in a separate thread (is thread-safe).  In most cases, the time
             * required to complete this function call is simply the time required
             * to read the configuration (i.e. from gconf, kconfig, etc).
             *
             * In the case of PAC, if no valid PAC is found in the cache (i.e.
             * configuration has changed, cache is invalid, etc), the PAC file is
             * downloaded and inserted into the cache. This is the most expensive
             * operation as the PAC is retrieved over the network. Once a PAC exists
             * in the cache, it is merely a javascript invocation to evaluate the PAC.
             * One should note that DNS can be called from within a PAC during
             * javascript invocation.
             *
             * In the case of WPAD, WPAD is used to automatically locate a PAC on the
             * network.  Currently, we only use DNS for this, but other methods may
             * be implemented in the future.  Once the PAC is located, normal PAC
             * performance (described above) applies.
             *
             * The format of the returned proxy strings are as follows:
             *
             *   - http://[username:password`]`proxy:port
             *
             *   - socks://[username:password`]`proxy:port
             *
             *   - socks5://[username:password`]`proxy:port
             *
             *   - socks4://[username:password`]`proxy:port
             *
             *   - <procotol>://[username:password`]`proxy:port
             *
             *   - direct://
             *
             * Please note that the username and password in the above URLs are optional
             * and should be use to authenticate the connection if present.
             *
             * For SOCKS proxies, when the protocol version is specified (socks4:// or
             * socks5://), it is expected that only this version is used. When only
             * socks:// is set, the client MUST try SOCKS version 5 protocol and, on
             * connection failure, fallback to SOCKS version 4.
             *
             * Other proxying protocols may exist. It is expected that the returned
             * configuration scheme shall match the network service name of the
             * proxy protocol or the service name of the protocol being proxied if the
             * previous does not exist. As an example, on Mac OS X you can configure a
             * RTSP streaming proxy. The expected returned configuration would be:
             *
             *   - rtsp://[username:password`]`proxy:port
             *
             * To free the returned value, call `px_proxy_factory_free_proxies`.
             * @param url Get proxxies for specificed URL
             * @returns a list of proxies
             */
            get_proxies(url: string): string[];
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

    export default Libproxy;
}

declare module 'gi://Libproxy' {
    import Libproxy10 from 'gi://Libproxy?version=1.0';
    export default Libproxy10;
}
// END
