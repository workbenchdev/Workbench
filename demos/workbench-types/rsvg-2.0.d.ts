/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Rsvg?version=2.0' {
    // Module dependencies
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace Rsvg {
        /**
         * Rsvg-2.0
         */

        /**
         * An enumeration representing possible errors
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * the request failed
             */
            static FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * The error domain for RSVG
             */
            static quark(): GLib.Quark;
        }

        /**
         * Units for the `RsvgLength` struct.  These have the same meaning as [CSS length
         * units](https://www.w3.org/TR/CSS21/syndata.html#length-units).
         *
         * If you test for the values of this enum, please note that librsvg may add other units in the future
         * as its support for CSS improves.  Please make your code handle unknown units gracefully (e.g. with
         * a `default` case in a `switch()` statement).
         */

        /**
         * Units for the `RsvgLength` struct.  These have the same meaning as [CSS length
         * units](https://www.w3.org/TR/CSS21/syndata.html#length-units).
         *
         * If you test for the values of this enum, please note that librsvg may add other units in the future
         * as its support for CSS improves.  Please make your code handle unknown units gracefully (e.g. with
         * a `default` case in a `switch()` statement).
         */
        export namespace Unit {
            export const $gtype: GObject.GType<Unit>;
        }

        enum Unit {
            /**
             * percentage values; where <literal>1.0</literal> means 100%.
             */
            PERCENT,
            /**
             * pixels
             */
            PX,
            /**
             * em, or the current font size
             */
            EM,
            /**
             * x-height of the current font
             */
            EX,
            /**
             * inches
             */
            IN,
            /**
             * centimeters
             */
            CM,
            /**
             * millimeters
             */
            MM,
            /**
             * points, or 1/72 inch
             */
            PT,
            /**
             * picas, or 1/6 inch (12 points)
             */
            PC,
            /**
             * advance measure of a '0' character (depends on the text orientation)
             */
            CH,
        }
        const HAVE_CSS: boolean;
        const HAVE_PIXBUF: number;
        const HAVE_SVGZ: boolean;
        /**
         * This is a C macro that expands to a number with the major version
         * of librsvg against which your program is compiled.
         *
         * For example, for librsvg-2.3.4, the major version is 2.
         *
         * C programs can use this as a compile-time check for the required
         * version, but note that generally it is a better idea to do
         * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
         * in your build scripts.
         *
         * Note: for a run-time check on the version of librsvg that your
         * program is running with (e.g. the version which the linker used for
         * your program), or for programs not written in C, use
         * `rsvg_major_version` instead.
         */
        const MAJOR_VERSION: number;
        /**
         * This is a C macro that expands to a number with the micro version
         * of librsvg against which your program is compiled.
         *
         * For example, for librsvg-2.3.4, the micro version is 4.
         *
         * C programs can use this as a compile-time check for the required
         * version, but note that generally it is a better idea to do
         * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
         * in your build scripts.
         *
         * Note: for a run-time check on the version of librsvg that your
         * program is running with (e.g. the version which the linker used for
         * your program), or for programs not written in C, use
         * `rsvg_micro_version` instead.
         */
        const MICRO_VERSION: number;
        /**
         * This is a C macro that expands to a number with the minor version
         * of librsvg against which your program is compiled.
         *
         * For example, for librsvg-2.3.4, the minor version is 3.
         *
         * C programs can use this as a compile-time check for the required
         * version, but note that generally it is a better idea to do
         * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
         * in your build scripts.
         *
         * Note: for a run-time check on the version of librsvg that your
         * program is running with (e.g. the version which the linker used for
         * your program), or for programs not written in C, use
         * `rsvg_minor_version` instead.
         */
        const MINOR_VERSION: number;
        /**
         * This is a C macro that expands to a string with the version of
         * librsvg against which your program is compiled.
         *
         * For example, for librsvg-2.3.4, this macro expands to
         * `"2.3.4"`.
         *
         * C programs can use this as a compile-time check for the required
         * version, but note that generally it is a better idea to do
         * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
         * in your build scripts.
         *
         * Note: for a run-time check on the version of librsvg that your
         * program is running with (e.g. the version which the linker used for
         * your program), or for programs not written in C, use
         * `rsvg_version` instead.
         */
        const VERSION: string;
        /**
         * This function does nothing.
         */
        function cleanup(): void;
        /**
         * The error domain for RSVG
         * @returns The error domain
         */
        function error_quark(): GLib.Quark;
        /**
         * This function does nothing.
         */
        function init(): void;
        /**
         * Loads a new `GdkPixbuf` from `filename` and returns it.  The caller must
         * assume the reference to the reurned pixbuf. If an error occurred, `error` is
         * set and `NULL` is returned.
         * @param filename A file name
         * @returns A pixbuf, or %NULL on error.
         */
        function pixbuf_from_file(filename: string): GdkPixbuf.Pixbuf | null;
        /**
         * Loads a new `GdkPixbuf` from `filename` and returns it.  This pixbuf is uniformly
         * scaled so that the it fits into a rectangle of size `max_width * max_height`. The
         * caller must assume the reference to the returned pixbuf. If an error occurred,
         * `error` is set and `NULL` is returned.
         * @param filename A file name
         * @param max_width The requested max width
         * @param max_height The requested max height
         * @returns A pixbuf, or %NULL on error.
         */
        function pixbuf_from_file_at_max_size(
            filename: string,
            max_width: number,
            max_height: number,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Loads a new `GdkPixbuf` from `filename` and returns it.  This pixbuf is scaled
         * from the size indicated to the new size indicated by `width` and `height`.  If
         * both of these are -1, then the default size of the image being loaded is
         * used.  The caller must assume the reference to the returned pixbuf. If an
         * error occurred, `error` is set and `NULL` is returned.
         * @param filename A file name
         * @param width The new width, or -1
         * @param height The new height, or -1
         * @returns A pixbuf, or %NULL on error.
         */
        function pixbuf_from_file_at_size(filename: string, width: number, height: number): GdkPixbuf.Pixbuf | null;
        /**
         * Loads a new `GdkPixbuf` from `filename` and returns it.  This pixbuf is scaled
         * from the size indicated by the file by a factor of `x_zoom` and `y_zoom`.  The
         * caller must assume the reference to the returned pixbuf. If an error
         * occurred, `error` is set and `NULL` is returned.
         * @param filename A file name
         * @param x_zoom The horizontal zoom factor
         * @param y_zoom The vertical zoom factor
         * @returns A pixbuf, or %NULL on error.
         */
        function pixbuf_from_file_at_zoom(filename: string, x_zoom: number, y_zoom: number): GdkPixbuf.Pixbuf | null;
        /**
         * Loads a new `GdkPixbuf` from `filename` and returns it.  This pixbuf is scaled
         * from the size indicated by the file by a factor of `x_zoom` and `y_zoom`. If the
         * resulting pixbuf would be larger than max_width/max_heigh it is uniformly scaled
         * down to fit in that rectangle. The caller must assume the reference to the
         * returned pixbuf. If an error occurred, `error` is set and `NULL` is returned.
         * @param filename A file name
         * @param x_zoom The horizontal zoom factor
         * @param y_zoom The vertical zoom factor
         * @param max_width The requested max width
         * @param max_height The requested max height
         * @returns A pixbuf, or %NULL on error.
         */
        function pixbuf_from_file_at_zoom_with_max(
            filename: string,
            x_zoom: number,
            y_zoom: number,
            max_width: number,
            max_height: number,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Do not use this function.  Create an [class`Rsvg`.Handle] and call
         * [method`Rsvg`.Handle.set_dpi] on it instead.
         * @param dpi Dots Per Inch (aka Pixels Per Inch)
         */
        function set_default_dpi(dpi: number): void;
        /**
         * Do not use this function.  Create an [class`Rsvg`.Handle] and call
         * [method`Rsvg`.Handle.set_dpi_x_y] on it instead.
         * @param dpi_x Dots Per Inch (aka Pixels Per Inch)
         * @param dpi_y Dots Per Inch (aka Pixels Per Inch)
         */
        function set_default_dpi_x_y(dpi_x: number, dpi_y: number): void;
        /**
         * This function does nothing.
         */
        function term(): void;
        interface SizeFunc {
            (): void;
        }
        /**
         * Configuration flags for an [class`Rsvg`.Handle].  Note that not all of [class`Rsvg`.Handle]'s
         * constructors let you specify flags.  For this reason, [ctor`Rsvg`.Handle.new_from_gfile_sync]
         * and [ctor`Rsvg`.Handle.new_from_stream_sync] are the preferred ways to create a handle.
         */

        /**
         * Configuration flags for an [class`Rsvg`.Handle].  Note that not all of [class`Rsvg`.Handle]'s
         * constructors let you specify flags.  For this reason, [ctor`Rsvg`.Handle.new_from_gfile_sync]
         * and [ctor`Rsvg`.Handle.new_from_stream_sync] are the preferred ways to create a handle.
         */
        export namespace HandleFlags {
            export const $gtype: GObject.GType<HandleFlags>;
        }

        enum HandleFlags {
            /**
             * No flags are set.
             */
            FLAGS_NONE,
            /**
             * Disable safety limits in the XML parser.  Libxml2 has
             * [several limits](https://gitlab.gnome.org/GNOME/libxml2/blob/master/include/libxml/parserInternals.h)
             * designed to keep malicious XML content from consuming too much memory while parsing.
             * For security reasons, this should only be used for trusted input!  Since: 2.40.3
             */
            FLAG_UNLIMITED,
            /**
             * Use this if the Cairo surface to which you are
             * rendering is a PDF, PostScript, SVG, or Win32 Printing surface.  This will make librsvg
             * and Cairo use the original, compressed data for images in the final output, instead of
             * passing uncompressed images.  For example, this will make the a resulting PDF file
             * smaller and faster.  Please see [the Cairo
             * documentation](https://www.cairographics.org/manual/cairo-cairo-surface-t.html#cairo-surface-set-mime-data)
             * for details.
             */
            FLAG_KEEP_IMAGE_DATA,
        }
        module Handle {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                base_uri: string;
                baseUri: string;
                desc: string;
                dpi_x: number;
                dpiX: number;
                dpi_y: number;
                dpiY: number;
                em: number;
                ex: number;
                flags: HandleFlags;
                height: number;
                metadata: string;
                title: string;
                width: number;
            }
        }

        /**
         * [class`Rsvg`.Handle] loads an SVG document into memory.
         *
         * This is the main entry point into the librsvg library.  An [class`Rsvg`.Handle] is an
         * object that represents SVG data in memory.  Your program creates an
         * [class`Rsvg`.Handle] from an SVG file, or from a memory buffer that contains SVG data,
         * or in the most general form, from a `GInputStream` that will provide SVG data.
         *
         * Librsvg can load SVG images and render them to Cairo surfaces,
         * using a mixture of SVG's [static mode] and [secure static mode].
         * Librsvg does not do animation nor scripting, and can load
         * references to external data only in some situations; see below.
         *
         * Librsvg supports reading [SVG 1.1](https://www.w3.org/TR/SVG11/) data, and is gradually
         * adding support for features in [SVG 2](https://www.w3.org/TR/SVG2/).  Librsvg also
         * supports SVGZ files, which are just an SVG stream compressed with the GZIP algorithm.
         *
         * [static mode]: https://www.w3.org/TR/SVG2/conform.html#static-mode
         * [secure static mode]: https://www.w3.org/TR/SVG2/conform.html#secure-static-mode
         *
         * # The "base file" and resolving references to external files
         *
         * When you load an SVG, librsvg needs to know the location of the "base file"
         * for it.  This is so that librsvg can determine the location of referenced
         * entities.  For example, say you have an SVG in `/foo/bar/foo.svg`
         * and that it has an image element like this:
         *
         * ```
         * <image href="resources/foo.png" .../>
         * ```
         *
         * In this case, librsvg needs to know the location of the toplevel
         * `/foo/bar/foo.svg` so that it can generate the appropriate
         * reference to `/foo/bar/resources/foo.png`.
         *
         * ## Security and locations of referenced files
         *
         * When processing an SVG, librsvg will only load referenced files if they are
         * in the same directory as the base file, or in a subdirectory of it.  That is,
         * if the base file is `/foo/bar/baz.svg`, then librsvg will
         * only try to load referenced files (from SVG's
         * `<image>` element, for example, or from content
         * included through XML entities) if those files are in `/foo/bar/<anything>` or in `/foo/bar/<anything>\/.../<anything>`.
         * This is so that malicious SVG files cannot include files that are in a directory above.
         *
         * The full set of rules for deciding which URLs may be loaded is as follows;
         * they are applied in order.  A referenced URL will not be loaded as soon as
         * one of these rules fails:
         *
         * 1. All `data:` URLs may be loaded.  These are sometimes used
         *    to include raster image data, encoded as base-64, directly in an SVG file.
         *
         * 2. URLs with queries ("?") or fragment identifiers ("#") are not allowed.
         *
         * 3. All URL schemes other than data: in references require a base URL.  For
         *    example, this means that if you load an SVG with
         *    [ctor`Rsvg`.Handle.new_from_data] without calling [method`Rsvg`.Handle.set_base_uri],
         *    then any referenced files will not be allowed (e.g. raster images to be
         *    loaded from other files will not work).
         *
         * 4. If referenced URLs are absolute, rather than relative, then they must
         *    have the same scheme as the base URL.  For example, if the base URL has a
         *    `file` scheme, then all URL references inside the SVG must
         *    also have the `file` scheme, or be relative references which
         *    will be resolved against the base URL.
         *
         * 5. If referenced URLs have a `resource` scheme, that is,
         *    if they are included into your binary program with GLib's resource
         *    mechanism, they are allowed to be loaded (provided that the base URL is
         *    also a `resource`, per the previous rule).
         *
         * 6. Otherwise, non-`file` schemes are not allowed.  For
         *    example, librsvg will not load `http` resources, to keep
         *    malicious SVG data from "phoning home".
         *
         * 7. A relative URL must resolve to the same directory as the base URL, or to
         *    one of its subdirectories.  Librsvg will canonicalize filenames, by
         *    removing ".." path components and resolving symbolic links, to decide whether
         *    files meet these conditions.
         *
         * # Loading an SVG with GIO
         *
         * This is the easiest and most resource-efficient way of loading SVG data into
         * an [class`Rsvg`.Handle].
         *
         * If you have a `GFile` that stands for an SVG file, you can simply call
         * [ctor`Rsvg`.Handle.new_from_gfile_sync] to load an [class`Rsvg`.Handle] from it.
         *
         * Alternatively, if you have a `GInputStream`, you can use
         * [ctor`Rsvg`.Handle.new_from_stream_sync].
         *
         * Both of those methods allow specifying a `GCancellable`, so the loading
         * process can be cancelled from another thread.
         *
         * ## Loading an SVG from memory
         *
         * If you already have SVG data in a byte buffer in memory, you can create a
         * memory input stream with [ctor`Gio`.MemoryInputStream.new_from_data] and feed that
         * to [ctor`Rsvg`.Handle.new_from_stream_sync].
         *
         * Note that in this case, it is important that you specify the base_file for
         * the in-memory SVG data.  Librsvg uses the base_file to resolve links to
         * external content, like raster images.
         *
         * # Loading an SVG without GIO
         *
         * You can load an [class`Rsvg`.Handle] from a simple filename or URI with
         * [ctor`Rsvg`.Handle.new_from_file].  Note that this is a blocking operation; there
         * is no way to cancel it if loading a remote URI takes a long time.  Also, note that
         * this method does not let you specify [flags`Rsvg`.HandleFlags].
         *
         * Otherwise, loading an SVG without GIO is not recommended, since librsvg will
         * need to buffer your entire data internally before actually being able to
         * parse it.  The deprecated way of doing this is by creating a handle with
         * [ctor`Rsvg`.Handle.new] or [ctor`Rsvg`.Handle.new_with_flags], and then using
         * [method`Rsvg`.Handle.write] and [method`Rsvg`.Handle.close] to feed the handle with SVG data.
         * Still, please try to use the GIO stream functions instead.
         *
         * # Resolution of the rendered image (dots per inch, or DPI)
         *
         * SVG images can contain dimensions like "`5cm`" or
         * "`2pt`" that must be converted from physical units into
         * device units.  To do this, librsvg needs to know the actual dots per inch
         * (DPI) of your target device.  You can call [method`Rsvg`.Handle.set_dpi] or
         * [method`Rsvg`.Handle.set_dpi_x_y] on an [class`Rsvg`.Handle] to set the DPI before rendering
         * it.
         *
         * For historical reasons, the default DPI is 90.  Current CSS assumes a default DPI of 96, so
         * you may want to set the DPI of a [class`Rsvg`.Handle] immediately after creating it with
         * [method`Rsvg`.Handle.set_dpi].
         *
         * # Rendering
         *
         * The preferred way to render a whole SVG document is to use
         * [method`Rsvg`.Handle.render_document].  Please see its documentation for
         * details.
         *
         * # API ordering
         *
         * Due to the way the librsvg API evolved over time, an [class`Rsvg`.Handle] object is available
         * for use as soon as it is constructed.  However, not all of its methods can be
         * called at any time.  For example, an [class`Rsvg`.Handle] just constructed with [ctor`Rsvg`.Handle.new]
         * is not loaded yet, and it does not make sense to call [method`Rsvg`.Handle.render_document] on it
         * just at that point.
         *
         * The documentation for the available methods in [class`Rsvg`.Handle] may mention that a particular
         * method is only callable on a "fully loaded handle".  This means either:
         *
         * * The handle was loaded with [method`Rsvg`.Handle.write] and [method`Rsvg`.Handle.close], and
         *   those functions returned no errors.
         *
         * * The handle was loaded with [method`Rsvg`.Handle.read_stream_sync] and that function
         *   returned no errors.
         *
         * Before librsvg 2.46, the library did not fully verify that a handle was in a
         * fully loaded state for the methods that require it.  To preserve
         * compatibility with old code which inadvertently called the API without
         * checking for errors, or which called some methods outside of the expected
         * order, librsvg will just emit a `g_critical()` message in those cases.
         *
         * New methods introduced in librsvg 2.46 and later will check for the correct
         * ordering, and panic if they are called out of order.  This will abort
         * the program as if it had a failed assertion.
         */
        class Handle extends GObject.Object {
            static $gtype: GObject.GType<Handle>;

            // Properties

            /**
             * Base URI, to be used to resolve relative references for resources.  See the section
             * "Security and locations of referenced files" for details.
             */
            get base_uri(): string;
            set base_uri(val: string);
            /**
             * Base URI, to be used to resolve relative references for resources.  See the section
             * "Security and locations of referenced files" for details.
             */
            get baseUri(): string;
            set baseUri(val: string);
            /**
             * SVG's description.
             */
            get desc(): string;
            /**
             * Horizontal resolution in dots per inch.
             *
             * The default is 90.  Note that current CSS assumes a default of 96,
             * so you may want to set it to `96.0` before rendering the handle.
             */
            get dpi_x(): number;
            set dpi_x(val: number);
            /**
             * Horizontal resolution in dots per inch.
             *
             * The default is 90.  Note that current CSS assumes a default of 96,
             * so you may want to set it to `96.0` before rendering the handle.
             */
            get dpiX(): number;
            set dpiX(val: number);
            /**
             * Horizontal resolution in dots per inch.
             *
             * The default is 90.  Note that current CSS assumes a default of 96,
             * so you may want to set it to `96.0` before rendering the handle.
             */
            get dpi_y(): number;
            set dpi_y(val: number);
            /**
             * Horizontal resolution in dots per inch.
             *
             * The default is 90.  Note that current CSS assumes a default of 96,
             * so you may want to set it to `96.0` before rendering the handle.
             */
            get dpiY(): number;
            set dpiY(val: number);
            /**
             * Exact width, in pixels, of the rendered SVG before calling the size callback
             * as specified by [method`Rsvg`.Handle.set_size_callback].
             */
            get em(): number;
            /**
             * Exact height, in pixels, of the rendered SVG before calling the size callback
             * as specified by [method`Rsvg`.Handle.set_size_callback].
             */
            get ex(): number;
            /**
             * Flags from [flags`Rsvg`.HandleFlags].
             */
            get flags(): HandleFlags;
            /**
             * Height, in pixels, of the rendered SVG after calling the size callback
             * as specified by [method`Rsvg`.Handle.set_size_callback].
             */
            get height(): number;
            /**
             * SVG's metadata
             */
            get metadata(): string;
            /**
             * SVG's title.
             */
            get title(): string;
            /**
             * Width, in pixels, of the rendered SVG after calling the size callback
             * as specified by [method`Rsvg`.Handle.set_size_callback].
             */
            get width(): number;

            // Constructors

            constructor(properties?: Partial<Handle.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Handle;

            static new_from_data(data: Uint8Array | string): Handle;

            static new_from_file(filename: string): Handle;

            static new_from_gfile_sync(
                file: Gio.File,
                flags: HandleFlags,
                cancellable?: Gio.Cancellable | null,
            ): Handle;

            static new_from_stream_sync(
                input_stream: Gio.InputStream,
                base_file: Gio.File | null,
                flags: HandleFlags,
                cancellable?: Gio.Cancellable | null,
            ): Handle;

            static new_with_flags(flags: HandleFlags): Handle;

            // Methods

            /**
             * This is used after calling [method`Rsvg`.Handle.write] to indicate that there is no more data
             * to consume, and to start the actual parsing of the SVG document.  The only reason to
             * call this function is if you use use [method`Rsvg`.Handle.write] to feed data into the `handle;`
             * if you use the other methods like [ctor`Rsvg`.Handle.new_from_file] or
             * [method`Rsvg`.Handle.read_stream_sync], then you do not need to call this function.
             *
             * This will return `TRUE` if the loader closed successfully and the
             * SVG data was parsed correctly.  Note that `handle` isn't freed until
             * [method`GObject`.Object.unref] is called.
             * @returns `TRUE` on success, or `FALSE` on error.
             */
            close(): boolean;
            /**
             * Frees `handle`.
             */
            free(): void;
            /**
             * Gets the base uri for this [class`Rsvg`.Handle].
             * @returns the base uri, possibly null
             */
            get_base_uri(): string;
            get_desc(): string | null;
            /**
             * Get the SVG's size. Do not call from within the size_func callback, because
             * an infinite loop will occur.
             *
             * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
             * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
             */
            get_dimensions(): DimensionData;
            /**
             * Get the size of a subelement of the SVG file. Do not call from within the
             * size_func callback, because an infinite loop will occur.
             *
             * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
             * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to use the whole SVG.
             * @returns `TRUE` if the dimensions could be obtained, `FALSE` if there was an error.
             */
            get_dimensions_sub(id?: string | null): [boolean, DimensionData];
            /**
             * Computes the ink rectangle and logical rectangle of a single SVG element.
             *
             * While `rsvg_handle_get_geometry_for_layer` computes the geometry of an SVG element subtree with
             * its transformation matrix, this other function will compute the element's geometry
             * as if it were being rendered under an identity transformation by itself.  That is,
             * the resulting geometry is as if the element got extracted by itself from the SVG.
             *
             * This function is the counterpart to `rsvg_handle_render_element`.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             *
             * The "ink rectangle" is the bounding box that would be painted
             * for fully- stroked and filled elements.
             *
             * The "logical rectangle" just takes into account the unstroked
             * paths and text outlines.
             *
             * Note that these bounds are not minimum bounds; for example,
             * clipping paths are not taken into account.
             *
             * You can pass `NULL` for the `id` if you want to measure all
             * the elements in the SVG, i.e. to measure everything from the
             * root element.
             *
             * This operation is not constant-time, as it involves going through all
             * the child elements.
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to compute the geometry for the whole SVG.
             * @returns `TRUE` if the geometry could be obtained, or `FALSE` on error.  Errors are returned in the @error argument. API ordering: This function must be called on a fully-loaded @handle.  See the section "[API ordering](class.Handle.html#api-ordering)" for details. Panics: this function will panic if the @handle is not fully-loaded.
             */
            get_geometry_for_element(id?: string | null): [boolean, Rectangle | null, Rectangle | null];
            /**
             * Computes the ink rectangle and logical rectangle of an SVG element, or the
             * whole SVG, as if the whole SVG were rendered to a specific viewport.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             *
             * The "ink rectangle" is the bounding box that would be painted
             * for fully-stroked and filled elements.
             *
             * The "logical rectangle" just takes into account the unstroked
             * paths and text outlines.
             *
             * Note that these bounds are not minimum bounds; for example,
             * clipping paths are not taken into account.
             *
             * You can pass `NULL` for the `id` if you want to measure all
             * the elements in the SVG, i.e. to measure everything from the
             * root element.
             *
             * This operation is not constant-time, as it involves going through all
             * the child elements.
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to compute the geometry for the whole SVG.
             * @param viewport Viewport size at which the whole SVG would be fitted.
             * @returns `TRUE` if the geometry could be obtained, or `FALSE` on error.  Errors are returned in the @error argument. API ordering: This function must be called on a fully-loaded @handle.  See the section "[API ordering](class.Handle.html#api-ordering)" for details. Panics: this function will panic if the @handle is not fully-loaded.
             */
            get_geometry_for_layer(
                id: string | null,
                viewport: Rectangle,
            ): [boolean, Rectangle | null, Rectangle | null];
            /**
             * In simple terms, queries the `width`, `height`, and `viewBox` attributes in an SVG document.
             *
             * If you are calling this function to compute a scaling factor to render the SVG,
             * consider simply using [method`Rsvg`.Handle.render_document] instead; it will do the
             * scaling computations automatically.
             *
             * Before librsvg 2.54.0, the `out_has_width` and `out_has_height` arguments would be set to true or false
             * depending on whether the SVG document actually had `width` and `height` attributes, respectively.
             *
             * However, since librsvg 2.54.0, `width` and `height` are now [geometry
             * properties](https://www.w3.org/TR/SVG2/geometry.html) per the SVG2 specification; they
             * are not plain attributes.  SVG2 made it so that the initial value of those properties
             * is `auto`, which is equivalent to specifing a value of `100%`.  In this sense, even SVG
             * documents which lack `width` or `height` attributes semantically have to make them
             * default to `100%`.  This is why since librsvg 2.54.0, `out_has_width` and
             * `out_has_heigth` are always returned as `TRUE`, since with SVG2 all documents *have* a
             * default width and height of `100%`.
             *
             * As an example, the following SVG element has a `width` of 100 pixels and a `height` of 400 pixels, but no `viewBox`.  This
             * function will return those sizes in `out_width` and `out_height`, and set `out_has_viewbox` to `FALSE`.
             *
             * ```
             * <svg xmlns="http://www.w3.org/2000/svg" width="100" height="400">
             * ```
             *
             * Conversely, the following element has a `viewBox`, but no `width` or `height`.  This function will
             * set `out_has_viewbox` to `TRUE`, and it will also set `out_has_width` and `out_has_height` to `TRUE` but
             * return both length values as `100%`.
             *
             * ```
             * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 400">
             * ```
             *
             * Note that the `RsvgLength` return values have `RsvgUnits` in them; you should
             * not assume that they are always in pixels.  For example, the following SVG element
             * will return width and height values whose `units` fields are `RSVG_UNIT_MM`.
             *
             * ```
             * <svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm">
             * ```
             *
             * API ordering: This function must be called on a fully-loaded `handle`.  See
             * the section "[API ordering](class.Handle.html#api-ordering)" for details.
             *
             * Panics: this function will panic if the `handle` is not fully-loaded.
             */
            get_intrinsic_dimensions(): [boolean, Length | null, boolean, Length | null, boolean, Rectangle | null];
            /**
             * Converts an SVG document's intrinsic dimensions to pixels, and returns the result.
             *
             * This function is able to extract the size in pixels from an SVG document if the
             * document has both `width` and `height` attributes
             * with physical units (px, in, cm, mm, pt, pc) or font-based units (em, ex).  For
             * physical units, the dimensions are normalized to pixels using the dots-per-inch (DPI)
             * value set previously with [method`Rsvg`.Handle.set_dpi].  For font-based units, this function
             * uses the computed value of the `font-size` property for the toplevel
             * `<svg>` element.  In those cases, this function returns `TRUE`.
             *
             * For historical reasons, the default DPI is 90.  Current CSS assumes a default DPI of 96, so
             * you may want to set the DPI of a [class`Rsvg`.Handle] immediately after creating it with
             * [method`Rsvg`.Handle.set_dpi].
             *
             * This function is not able to extract the size in pixels directly from the intrinsic
             * dimensions of the SVG document if the `width` or
             * `height` are in percentage units (or if they do not exist, in which
             * case the SVG spec mandates that they default to 100%), as these require a
             * <firstterm>viewport</firstterm> to be resolved to a final size.  In this case, the
             * function returns `FALSE`.
             *
             * For example, the following document fragment has intrinsic dimensions that will resolve
             * to 20x30 pixels.
             *
             * ```
             * <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30"/>
             * ```
             *
             * Similarly, if the DPI is set to 96, this document will resolve to 192×288 pixels (i.e. 96×2 × 96×3).
             *
             * ```
             * <svg xmlns="http://www.w3.org/2000/svg" width="2in" height="3in"/>
             * ```
             *
             * The dimensions of the following documents cannot be resolved to pixels directly, and
             * this function would return `FALSE` for them:
             *
             * ```
             * <!-- Needs a viewport against which to compute the percentages. -->
             * <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"/>
             *
             * <!-- Does not have intrinsic width/height, just a 1:2 aspect ratio which
             *      needs to be fitted within a viewport. -->
             * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"/>
             * ```
             *
             * Instead of querying an SVG document's size, applications are encouraged to render SVG
             * documents to a size chosen by the application, by passing a suitably-sized viewport to
             * [method`Rsvg`.Handle.render_document].
             * @returns `TRUE` if the dimensions could be converted directly to pixels; in this case @out_width and @out_height will be set accordingly.  Note that the dimensions are floating-point numbers, so your application can know the exact size of an SVG document. To get integer dimensions, you should use `ceil()` to round up to the nearest integer (just using `round()`, may may chop off pixels with fractional coverage).  If the dimensions cannot be converted to pixels, returns `FALSE` and puts 0.0 in both @out_width and @out_height.
             */
            get_intrinsic_size_in_pixels(): [boolean, number, number];
            get_metadata(): string | null;
            /**
             * Returns the pixbuf loaded by `handle`.  The pixbuf returned will be reffed, so
             * the caller of this function must assume that ref.
             *
             * API ordering: This function must be called on a fully-loaded `handle`.  See
             * the section "[API ordering](class.Handle.html#api-ordering)" for details.
             *
             * This function depends on the [class`Rsvg`.Handle]'s dots-per-inch value (DPI) to compute the
             * "natural size" of the document in pixels, so you should call [method`Rsvg`.Handle.set_dpi]
             * beforehand.
             * @returns A pixbuf, or %NULL on error during rendering.
             */
            get_pixbuf(): GdkPixbuf.Pixbuf | null;
            /**
             * Returns the pixbuf loaded by `handle`.  The pixbuf returned will be reffed, so
             * the caller of this function must assume that ref.
             *
             * API ordering: This function must be called on a fully-loaded `handle`.  See
             * the section "[API ordering](class.Handle.html#api-ordering)" for details.
             *
             * This function depends on the [class`Rsvg`.Handle]'s dots-per-inch value (DPI) to compute the
             * "natural size" of the document in pixels, so you should call [method`Rsvg`.Handle.set_dpi]
             * beforehand.
             * @returns A pixbuf, or %NULL on error during rendering.
             */
            get_pixbuf_and_error(): GdkPixbuf.Pixbuf | null;
            /**
             * Creates a `GdkPixbuf` the same size as the entire SVG loaded into `handle,` but
             * only renders the sub-element that has the specified `id` (and all its
             * sub-sub-elements recursively).  If `id` is `NULL`, this function renders the
             * whole SVG.
             *
             * This function depends on the [class`Rsvg`.Handle]'s dots-per-inch value (DPI) to compute the
             * "natural size" of the document in pixels, so you should call [method`Rsvg`.Handle.set_dpi]
             * beforehand.
             *
             * If you need to render an image which is only big enough to fit a particular
             * sub-element of the SVG, consider using [method`Rsvg`.Handle.render_element].
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             *
             * API ordering: This function must be called on a fully-loaded `handle`.  See
             * the section "[API ordering](class.Handle.html#api-ordering)" for details.
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to use the whole SVG.
             * @returns a pixbuf, or `NULL` if an error occurs during rendering.
             */
            get_pixbuf_sub(id?: string | null): GdkPixbuf.Pixbuf | null;
            /**
             * Get the position of a subelement of the SVG file. Do not call from within
             * the size_func callback, because an infinite loop will occur.
             *
             * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
             * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to use the whole SVG.
             * @returns `TRUE` if the position could be obtained, `FALSE` if there was an error.
             */
            get_position_sub(id?: string | null): [boolean, PositionData];
            get_title(): string | null;
            /**
             * Checks whether the element `id` exists in the SVG document.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.
             * @returns `TRUE` if @id exists in the SVG document, `FALSE` otherwise.
             */
            has_sub(id: string): boolean;
            /**
             * Do not call this function.  This is intended for librsvg's internal
             * test suite only.
             * @param testing Whether to enable testing mode
             */
            internal_set_testing(testing: boolean): void;
            /**
             * Reads `stream` and writes the data from it to `handle`.
             *
             * Before calling this function, you may need to call [method`Rsvg`.Handle.set_base_uri]
             * or [method`Rsvg`.Handle.set_base_gfile] to set the "base file" for resolving
             * references to external resources.  SVG elements like
             * `<image>` which reference external resources will be
             * resolved relative to the location you specify with those functions.
             *
             * If `cancellable` is not `NULL`, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the
             * operation was cancelled, the error `G_IO_ERROR_CANCELLED` will be
             * returned.
             * @param stream a `GInputStream`
             * @param cancellable a `GCancellable`, or `NULL`
             * @returns `TRUE` if reading @stream succeeded, or `FALSE` otherwise   with @error filled in
             */
            read_stream_sync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Draws a loaded SVG handle to a Cairo context.  Please try to use
             * [method`Rsvg`.Handle.render_document] instead, which allows you to pick the size
             * at which the document will be rendered.
             *
             * Historically this function has picked a size by itself, based on the following rules:
             *
             * * If the SVG document has both `width` and `height`
             *   attributes with physical units (px, in, cm, mm, pt, pc) or font-based units (em,
             *   ex), the function computes the size directly based on the dots-per-inch (DPI) you
             *   have configured with [method`Rsvg`.Handle.set_dpi].  This is the same approach as
             *   [method`Rsvg`.Handle.get_intrinsic_size_in_pixels].
             *
             * * Otherwise, if there is a `viewBox` attribute and both
             *   `width` and `height` are set to
             *   `100%` (or if they don't exist at all and thus default to 100%),
             *   the function uses the width and height of the `viewBox` as a pixel size.  This
             *   produces a rendered document with the correct aspect ratio.
             *
             * * Otherwise, this function computes the extents of every graphical object in the SVG
             *   document to find the total extents.  This is moderately expensive, but no more expensive
             *   than rendering the whole document, for example.
             *
             * * This function cannot deal with percentage-based units for `width`
             *   and `height` because there is no viewport against which they could
             *   be resolved; that is why it will compute the extents of objects in that case.  This
             *   is why we recommend that you use [method`Rsvg`.Handle.render_document] instead, which takes
             *   in a viewport and follows the sizing policy from the web platform.
             *
             * Drawing will occur with respect to the `cr'`s current transformation: for example, if
             * the `cr` has a rotated current transformation matrix, the whole SVG will be rotated in
             * the rendered version.
             *
             * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
             * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
             *
             * Note that `cr` must be a Cairo context that is not in an error state, that is,
             * `cairo_status()` must return `CAIRO_STATUS_SUCCESS` for it.  Cairo can set a
             * context to be in an error state in various situations, for example, if it was
             * passed an invalid matrix or if it was created for an invalid surface.
             * @param cr A Cairo context
             * @returns `TRUE` if drawing succeeded; `FALSE` otherwise.  This function will emit a g_warning() if a rendering error occurs.
             */
            render_cairo(cr: cairo.Context): boolean;
            /**
             * Renders a single SVG element in the same place as for a whole SVG document (a "subset"
             * of the document).  Please try to use [method`Rsvg`.Handle.render_layer] instead, which allows
             * you to pick the size at which the document with the layer will be rendered.
             *
             * This is equivalent to [method`Rsvg`.Handle.render_cairo], but it renders only a single
             * element and its children, as if they composed an individual layer in the SVG.
             *
             * Historically this function has picked a size for the whole document by itself, based
             * on the following rules:
             *
             * * If the SVG document has both `width` and `height`
             *   attributes with physical units (px, in, cm, mm, pt, pc) or font-based units (em,
             *   ex), the function computes the size directly based on the dots-per-inch (DPI) you
             *   have configured with [method`Rsvg`.Handle.set_dpi].  This is the same approach as
             *   [method`Rsvg`.Handle.get_intrinsic_size_in_pixels].
             *
             * * Otherwise, if there is a `viewBox` attribute and both
             *   `width` and `height` are set to
             *   `100%` (or if they don't exist at all and thus default to 100%),
             *   the function uses the width and height of the `viewBox` as a pixel size.  This
             *   produces a rendered document with the correct aspect ratio.
             *
             * * Otherwise, this function computes the extents of every graphical object in the SVG
             *   document to find the total extents.  This is moderately expensive, but no more expensive
             *   than rendering the whole document, for example.
             *
             * * This function cannot deal with percentage-based units for `width`
             *   and `height` because there is no viewport against which they could
             *   be resolved; that is why it will compute the extents of objects in that case.  This
             *   is why we recommend that you use [method`Rsvg`.Handle.render_layer] instead, which takes
             *   in a viewport and follows the sizing policy from the web platform.
             *
             * Drawing will occur with respect to the `cr'`s current transformation: for example, if
             * the `cr` has a rotated current transformation matrix, the whole SVG will be rotated in
             * the rendered version.
             *
             * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
             * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
             *
             * Note that `cr` must be a Cairo context that is not in an error state, that is,
             * `cairo_status()` must return `CAIRO_STATUS_SUCCESS` for it.  Cairo can set a
             * context to be in an error state in various situations, for example, if it was
             * passed an invalid matrix or if it was created for an invalid surface.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             * @param cr A Cairo context
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to render the whole SVG.
             * @returns `TRUE` if drawing succeeded; `FALSE` otherwise.  This function will emit a g_warning() if a rendering error occurs.
             */
            render_cairo_sub(cr: cairo.Context, id?: string | null): boolean;
            /**
             * Renders the whole SVG document fitted to a viewport.
             *
             * The `viewport` gives the position and size at which the whole SVG document will be
             * rendered.  The document is scaled proportionally to fit into this viewport.
             *
             * The `cr` must be in a `CAIRO_STATUS_SUCCESS` state, or this function will not
             * render anything, and instead will return an error.
             * @param cr A Cairo context
             * @param viewport Viewport size at which the whole SVG would be fitted.
             * @returns `TRUE` on success, `FALSE` on error.  Errors are returned in the @error argument. API ordering: This function must be called on a fully-loaded @handle.  See the section "[API ordering](class.Handle.html#api-ordering)" for details. Panics: this function will panic if the @handle is not fully-loaded.
             */
            render_document(cr: cairo.Context, viewport: Rectangle): boolean;
            /**
             * Renders a single SVG element to a given viewport.
             *
             * This function can be used to extract individual element subtrees and render them,
             * scaled to a given `element_viewport`.  This is useful for applications which have
             * reusable objects in an SVG and want to render them individually; for example, an
             * SVG full of icons that are meant to be be rendered independently of each other.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             *
             * You can pass `NULL` for the `id` if you want to render all
             * the elements in the SVG, i.e. to render everything from the
             * root element.
             *
             * The `element_viewport` gives the position and size at which the named element will
             * be rendered.  FIXME: mention proportional scaling.
             * @param cr A Cairo context
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to render the whole SVG document tree.
             * @param element_viewport Viewport size in which to fit the element
             * @returns `TRUE` on success, `FALSE` on error.  Errors are returned in the @error argument. API ordering: This function must be called on a fully-loaded @handle.  See the section "[API ordering](class.Handle.html#api-ordering)" for details. Panics: this function will panic if the @handle is not fully-loaded.
             */
            render_element(cr: cairo.Context, id: string | null, element_viewport: Rectangle): boolean;
            /**
             * Renders a single SVG element in the same place as for a whole SVG document.
             *
             * The `viewport` gives the position and size at which the whole SVG document would be
             * rendered.  The document is scaled proportionally to fit into this viewport; hence the
             * individual layer may be smaller than this.
             *
             * This is equivalent to [method`Rsvg`.Handle.render_document], but it renders only a
             * single element and its children, as if they composed an individual layer in
             * the SVG.  The element is rendered with the same transformation matrix as it
             * has within the whole SVG document.  Applications can use this to re-render a
             * single element and repaint it on top of a previously-rendered document, for
             * example.
             *
             * Element IDs should look like an URL fragment identifier; for example, pass
             * `#foo` (hash `foo`) to get the geometry of the element that
             * has an `id="foo"` attribute.
             *
             * You can pass `NULL` for the `id` if you want to render all
             * the elements in the SVG, i.e. to render everything from the
             * root element.
             * @param cr A Cairo context
             * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to render the whole SVG document tree.
             * @param viewport Viewport size at which the whole SVG would be fitted.
             * @returns `TRUE` on success, `FALSE` on error.  Errors are returned in the @error argument. API ordering: This function must be called on a fully-loaded @handle.  See the section "[API ordering](class.Handle.html#api-ordering)" for details. Panics: this function will panic if the @handle is not fully-loaded.
             */
            render_layer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean;
            /**
             * Set the base URI for `handle` from `file`.
             *
             * Note: This function may only be called before [method`Rsvg`.Handle.write] or
             * [method`Rsvg`.Handle.read_stream_sync] have been called.
             * @param base_file a `GFile`
             */
            set_base_gfile(base_file: Gio.File): void;
            /**
             * Set the base URI for this SVG.
             *
             * Note: This function may only be called before [method`Rsvg`.Handle.write] or
             * [method`Rsvg`.Handle.read_stream_sync] have been called.
             * @param base_uri The base uri
             */
            set_base_uri(base_uri: string): void;
            /**
             * Sets a cancellable object that can be used to interrupt rendering
             * while the handle is being rendered in another thread.  For example,
             * you can set a cancellable from your main thread, spawn a thread to
             * do the rendering, and interrupt the rendering from the main thread
             * by calling g_cancellable_cancel().
             *
             * If rendering is interrupted, the corresponding call to
             * rsvg_handle_render_document() (or any of the other rendering
             * functions) will return an error with domain `G_IO_ERROR`, and code
             * `G_IO_ERROR_CANCELLED`.
             * @param cancellable A [class@Gio.Cancellable] or `NULL`.
             */
            set_cancellable_for_rendering(cancellable?: Gio.Cancellable | null): void;
            /**
             * Sets the DPI at which the `handle` will be rendered. Common values are
             * 75, 90, and 300 DPI.
             *
             * Passing a number <= 0 to `dpi` will reset the DPI to whatever the default
             * value happens to be, but since [id`rsvg_set_default_dpi]` is deprecated, please
             * do not pass values <= 0 to this function.
             * @param dpi Dots Per Inch (i.e. as Pixels Per Inch)
             */
            set_dpi(dpi: number): void;
            /**
             * Sets the DPI at which the `handle` will be rendered. Common values are
             * 75, 90, and 300 DPI.
             *
             * Passing a number <= 0 to `dpi` will reset the DPI to whatever the default
             * value happens to be, but since [id`rsvg_set_default_dpi_x_y]` is deprecated,
             * please do not pass values <= 0 to this function.
             * @param dpi_x Dots Per Inch (i.e. Pixels Per Inch)
             * @param dpi_y Dots Per Inch (i.e. Pixels Per Inch)
             */
            set_dpi_x_y(dpi_x: number, dpi_y: number): void;
            /**
             * Sets the sizing function for the `handle,` which can be used to override the
             * size that librsvg computes for SVG images.  The `size_func` is called from the
             * following functions:
             *
             * * [method`Rsvg`.Handle.get_dimensions]
             * * [method`Rsvg`.Handle.get_dimensions_sub]
             * * [method`Rsvg`.Handle.get_position_sub]
             * * [method`Rsvg`.Handle.render_cairo]
             * * [method`Rsvg`.Handle.render_cairo_sub]
             *
             * Librsvg computes the size of the SVG being rendered, and passes it to the
             * `size_func,` which may then modify these values to set the final size of the
             * generated image.
             * @param size_func A sizing function, or `NULL`
             */
            set_size_callback(size_func?: SizeFunc | null): void;
            /**
             * Sets a CSS stylesheet to use for an SVG document.
             *
             * The `css_len` argument is mandatory; this function will not compute the length
             * of the `css` string.  This is because a provided stylesheet, which the calling
             * program could read from a file, can have nul characters in it.
             *
             * During the CSS cascade, the specified stylesheet will be used with a "User"
             * [origin](https://drafts.csswg.org/css-cascade-3/#cascading-origins).
             *
             * Note that ``import`` rules will not be resolved, except for `data:` URLs.
             * @param css String with CSS data; must be valid UTF-8.
             * @returns `TRUE` on success, `FALSE` on error.  Errors are returned in the @error argument.
             */
            set_stylesheet(css: Uint8Array | string): boolean;
            /**
             * Loads the next `count` bytes of the image.  You can call this function multiple
             * times until the whole document is consumed; then you must call [method`Rsvg`.Handle.close]
             * to actually parse the document.
             *
             * Before calling this function for the first time, you may need to call
             * [method`Rsvg`.Handle.set_base_uri] or [method`Rsvg`.Handle.set_base_gfile] to set the "base
             * file" for resolving references to external resources.  SVG elements like
             * `<image>` which reference external resources will be
             * resolved relative to the location you specify with those functions.
             * @param buf pointer to svg data
             * @returns `TRUE` on success, or `FALSE` on error.
             */
            write(buf: Uint8Array | string): boolean;
        }

        /**
         * Dimensions of an SVG image from [method`Rsvg`.Handle.get_dimensions], or an
         * individual element from [method`Rsvg`.Handle.get_dimensions_sub].  Please see
         * the deprecation documentation for those functions.
         */
        class DimensionData {
            static $gtype: GObject.GType<DimensionData>;

            // Fields

            width: number;
            height: number;
            em: number;
            ex: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    width: number;
                    height: number;
                    em: number;
                    ex: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        type HandleClass = typeof Handle;
        /**
         * `RsvgLength` values are used in [method`Rsvg`.Handle.get_intrinsic_dimensions], for
         * example, to return the CSS length values of the `width` and
         * `height` attributes of an `<svg>` element.
         *
         * This is equivalent to [CSS lengths](https://www.w3.org/TR/CSS21/syndata.html#length-units).
         *
         * It is up to the calling application to convert lengths in non-pixel units
         * (i.e. those where the `unit` field is not `RSVG_UNIT_PX`) into something
         * meaningful to the application.  For example, if your application knows the
         * dots-per-inch (DPI) it is using, it can convert lengths with `unit` in
         * `RSVG_UNIT_IN` or other physical units.
         */
        class Length {
            static $gtype: GObject.GType<Length>;

            // Fields

            length: number;
            unit: Unit;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Position of an SVG fragment from [method`Rsvg`.Handle.get_position_sub].  Please
         * the deprecation documentation for that function.
         */
        class PositionData {
            static $gtype: GObject.GType<PositionData>;

            // Fields

            x: number;
            y: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * A data structure for holding a rectangle.
         */
        class Rectangle {
            static $gtype: GObject.GType<Rectangle>;

            // Fields

            x: number;
            y: number;
            width: number;
            height: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                    width: number;
                    height: number;
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

    export default Rsvg;
}

declare module 'gi://Rsvg' {
    import Rsvg20 from 'gi://Rsvg?version=2.0';
    export default Rsvg20;
}
// END
