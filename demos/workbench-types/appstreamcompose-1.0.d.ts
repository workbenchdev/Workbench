/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./appstream-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AppStreamCompose?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type AppStream from 'gi://AppStream?version=1.0';

    export namespace AppStreamCompose {
        /**
         * AppStreamCompose-1.0
         */

        /**
         * A drawing error.
         */
        class CanvasError extends GLib.Error {
            static $gtype: GObject.GType<CanvasError>;

            // Static fields

            /**
             * Generic failure.
             */
            static FAILED: number;
            /**
             * Drawing operation failed.
             */
            static DRAWING: number;
            /**
             * Issue with font or font selection.
             */
            static FONT: number;
            /**
             * The requested action was not supported.
             */
            static UNSUPPORTED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * A metadata composition error.
         */
        class ComposeError extends GLib.Error {
            static $gtype: GObject.GType<ComposeError>;

            // Static fields

            /**
             * Generic failure.
             */
            static FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Designated state for an icon of a given size.
         */

        /**
         * Designated state for an icon of a given size.
         */
        export namespace IconState {
            export const $gtype: GObject.GType<IconState>;
        }

        enum IconState {
            /**
             * Ignore icons of this size.
             */
            IGNORED,
            /**
             * Create cache for the icon, and provide remote link as well.
             */
            CACHED_REMOTE,
            /**
             * Set if the icon should be stored in an icon tarball and be cached locally.
             */
            CACHED_ONLY,
            /**
             * Set if this icon should be stored remotely and fetched on demand.
             */
            REMOTE_ONLY,
        }
        /**
         * An image processing error.
         */
        class ImageError extends GLib.Error {
            static $gtype: GObject.GType<ImageError>;

            // Static fields

            /**
             * Generic failure.
             */
            static FAILED: number;
            /**
             * The graphic type is not supported.
             */
            static UNSUPPORTED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * File format of an image.
         */

        /**
         * File format of an image.
         */
        export namespace ImageFormat {
            export const $gtype: GObject.GType<ImageFormat>;
        }

        enum ImageFormat {
            /**
             * Unknown image format.
             */
            UNKNOWN,
            /**
             * PNG format
             */
            PNG,
            /**
             * JPEG format
             */
            JPEG,
            /**
             * GIF format
             */
            GIF,
            /**
             * SVG format
             */
            SVG,
            /**
             * Compressed SVG format
             */
            SVGZ,
            /**
             * WebP format
             */
            WEBP,
            /**
             * AVIF format
             */
            AVIF,
            /**
             * XPM format
             */
            XPM,
        }
        /**
         * Builds a global component ID from a component-id
         * and a (usually MD5) checksum generated from the component data.
         *
         * The global-id is used as a global, unique identifier for a component.
         * (while the component-ID is local, e.g. for one source).
         * Its primary usecase is to identify a media directory on the filesystem which is
         * associated with this component.
         * @param component_id an AppStream component ID.
         * @param checksum a MD5 hashsum as string generated from the component's combined metadata.
         */
        function build_component_global_id(component_id: string, checksum: string): string;
        function canvas_error_quark(): GLib.Quark;
        function compose_error_quark(): GLib.Quark;
        /**
         * Generate a filename from a web-URL that can be used to store the
         * file on disk after download.
         * @param url The URL to extract a filename from.
         */
        function filename_from_url(url: string): string;
        /**
         * Register a new hint tag. If a previous tag with the given name
         * already existed, the existing tag will not be replaced unless
         * `overrideExisting` is set to %TRUE.
         * Please be careful when overriding tags! Tag severities can not
         * be lowered by overriding a tag.
         * @param tag the tag-ID to add
         * @param severity the tag severity as #AsIssueSeverity
         * @param explanation the tag explanatory message
         * @param overrideExisting whether an existing tag should be replaced
         * @returns %TRUE if the tag was registered and did not exist previously.
         */
        function globals_add_hint_tag(
            tag: string,
            severity: AppStream.IssueSeverity,
            explanation: string,
            overrideExisting: boolean,
        ): boolean;
        /**
         * Clear all global state and restore defaults.
         */
        function globals_clear(): void;
        /**
         * Get path to the "ffprobe" binary we should use.
         */
        function globals_get_ffprobe_binary(): string;
        /**
         * Retrieve all hint tags that we know.
         * @returns A list of valid hint tags. Free with %g_strfreev
         */
        function globals_get_hint_tags(): string[];
        /**
         * Get path to the "optipng" binary we should use.
         */
        function globals_get_optipng_binary(): string;
        /**
         * Get temporary directory used by appstream-compose.
         */
        function globals_get_tmp_dir(): string;
        /**
         * Get temporary directory used by appstream-compose
         * and try to create it if it does not exist.
         */
        function globals_get_tmp_dir_create(): string;
        /**
         * Get whether images should be optimized using optipng.
         */
        function globals_get_use_optipng(): boolean;
        /**
         * Retrieve the explanation template of the given hint tag.
         * @param tag
         * @returns An explanation template, or %NULL if the tag was not found.
         */
        function globals_hint_tag_explanation(tag: string): string;
        /**
         * Retrieve the severity of the given hint tag.
         * @param tag
         * @returns An #AsIssueSeverity or %AS_ISSUE_SEVERITY_UNKNOWN if the tag did not exist          or has an unknown severity.
         */
        function globals_hint_tag_severity(tag: string): AppStream.IssueSeverity;
        /**
         * Set path to the "ffprobe" binary we should use.
         * @param path
         */
        function globals_set_ffprobe_binary(path: string): void;
        /**
         * Set path to the "optipng" binary we should use.
         * @param path
         */
        function globals_set_optipng_binary(path: string): void;
        /**
         * Set temporary directory used by appstream-compose.
         * @param path
         */
        function globals_set_tmp_dir(path: string): void;
        /**
         * Set whether images should be optimized using optipng.
         * @param enabled
         */
        function globals_set_use_optipng(enabled: boolean): void;
        /**
         * Converts the text representation to an enumerated value.
         * @param state_str the string.
         * @returns a #AscIconState
         */
        function icon_state_from_string(state_str: string): IconState;
        /**
         * Converts the enumerated value to an text representation.
         * @param istate the #AscIconState.
         * @returns string version of @istate
         */
        function icon_state_to_string(istate: IconState): string;
        function image_error_quark(): GLib.Quark;
        /**
         * Returns the image format type based on the given file's filename.
         * @param fname the filename.
         * @returns a #AscImageFormat or %ASC_IMAGE_FORMAT_UNKNOWN for unknown
         */
        function image_format_from_filename(fname: string): ImageFormat;
        /**
         * Converts the text representation to an enumerated value.
         * @param str the string.
         * @returns a #AscImageFormat or %ASC_IMAGE_FORMAT_UNKNOWN for unknown
         */
        function image_format_from_string(str: string): ImageFormat;
        /**
         * Converts the enumerated value to an text representation.
         * @param format the %AscImageFormat.
         * @returns string version of @format
         */
        function image_format_to_string(format: ImageFormat): string;
        /**
         * Optimizes a PNG graphic for size with optipng, if its binary
         * is available and this feature is enabled.
         * @param fname Filename of the PNG image to optimize.
         */
        function optimize_png(fname: string): boolean;
        function pixbuf_blur(src: GdkPixbuf.Pixbuf, radius: number, iterations: number): void;
        function pixbuf_sharpen(src: GdkPixbuf.Pixbuf, radius: number, amount: number): void;
        interface CheckMetadataEarlyFn {
            (cres: Result, unit: Unit): void;
        }

        export namespace ComposeFlags {
            export const $gtype: GObject.GType<ComposeFlags>;
        }

        enum ComposeFlags {
            NONE,
            USE_THREADS,
            ALLOW_NET,
            VALIDATE,
            STORE_SCREENSHOTS,
            ALLOW_SCREENCASTS,
            PROCESS_FONTS,
            PROCESS_TRANSLATIONS,
            IGNORE_ICONS,
            PROCESS_UNPAIRED_DESKTOP,
            PROPAGATE_CUSTOM,
            PROPAGATE_ARTIFACTS,
            NO_FINAL_CHECK,
            NO_PARTIAL_URLS,
        }
        /**
         * The flags used for loading images.
         */

        /**
         * The flags used for loading images.
         */
        export namespace ImageLoadFlags {
            export const $gtype: GObject.GType<ImageLoadFlags>;
        }

        enum ImageLoadFlags {
            /**
             * No special flags set
             */
            NONE,
            /**
             * Sharpen the resulting image
             */
            SHARPEN,
            /**
             * Allow loading of unsupported image types.
             */
            ALLOW_UNSUPPORTED,
            /**
             * Always resize the source image to the perfect size
             */
            ALWAYS_RESIZE,
        }
        /**
         * The flags used for saving images.
         */

        /**
         * The flags used for saving images.
         */
        export namespace ImageSaveFlags {
            export const $gtype: GObject.GType<ImageSaveFlags>;
        }

        enum ImageSaveFlags {
            /**
             * No special flags set
             */
            NONE,
            /**
             * Optimize generated PNG for size
             */
            OPTIMIZE,
            /**
             * Pad with alpha to 16:9 aspect
             */
            PAD_16_9,
            /**
             * Sharpen the image to clarify detail
             */
            SHARPEN,
            /**
             * Blur the image to clear detail
             */
            BLUR,
        }
        module Canvas {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Canvas extends GObject.Object {
            static $gtype: GObject.GType<Canvas>;

            // Constructors

            constructor(properties?: Partial<Canvas.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](width: number, height: number): Canvas;

            // Methods

            /**
             * Gets the canvas height.
             */
            get_height(): number;
            /**
             * Gets the canvas width.
             */
            get_width(): number;
            /**
             * Render an SVG graphic from the SVG data provided.
             * @param stream SVG data input stream.
             */
            render_svg(stream: Gio.InputStream): boolean;
            /**
             * Save canvas to PNG file.
             * @param fname Filename to save to.
             */
            save_png(fname: string): boolean;
        }

        module Compose {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Compose extends GObject.Object {
            static $gtype: GObject.GType<Compose>;

            // Constructors

            constructor(properties?: Partial<Compose.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Compose;

            // Methods

            /**
             * Adds a component ID to the allowlist. If the list is not empty, only
             * components in the list will be added to the metadata output.
             * @param component_id The component-id to whitelist
             */
            add_allowed_cid(component_id: string): void;
            /**
             * Add a key to the allowlist that is used to filter custom tag values.
             * @param key_id the custom key to add to the allowed list.
             */
            add_custom_allowed(key_id: string): void;
            /**
             * Add compose flags.
             * @param flags The compose flags to add.
             */
            add_flags(flags: ComposeFlags): void;
            /**
             * Add an #AscUnit as data source for metadata processing.
             * @param unit The #AscUnit to add
             */
            add_unit(unit: Unit): void;
            /**
             * Get the results components extracted in the last data processing run.
             * @returns The components
             */
            fetch_components(): AppStream.Component[];
            /**
             * Perform final validation of generated data for the specified
             * result container.
             * @param result the #AscResult to finalize
             */
            finalize_result(result: Result): void;
            /**
             * Perform final validation of generated data.
             * Calling this function is not necessary, unless the final check was explicitly
             * disabled using the %ASC_COMPOSE_FLAG_NO_FINAL_CHECK flag.
             */
            finalize_results(): void;
            /**
             * Get the CA file used to verify peers with, or %NULL for default.
             */
            get_cainfo(): string;
            /**
             * Get the data result directory.
             */
            get_data_result_dir(): string;
            /**
             * Get the flags controlling compose behavior.
             */
            get_flags(): ComposeFlags;
            /**
             * get the format type we are generating.
             */
            get_format(): AppStream.FormatKind;
            /**
             * Get hints report output directory.
             */
            get_hints_result_dir(): string;
            /**
             * Get the policy for how icons should be distributed to
             * any AppStream clients.
             * @returns an #AscIconPolicy
             */
            get_icon_policy(): IconPolicy;
            /**
             * Get the icon result directory.
             */
            get_icons_result_dir(): string;
            /**
             * Get the unit we use for locale processing
             * @returns The unit used for locale processing, or %NULL for default.
             */
            get_locale_unit(): Unit | null;
            /**
             * Get the maximum size a screenshot video or image can have.
             * A size < 0 may be returned for no limit, setting a limit of 0
             * will disable screenshots.
             */
            get_max_screenshot_size(): number;
            /**
             * Get the media base URL to be used for the generated data,
             * or %NULL if no media is cached.
             */
            get_media_baseurl(): string;
            /**
             * Get the media result directory, that can be served on a webserver.
             */
            get_media_result_dir(): string;
            /**
             * Get the metadata origin field.
             */
            get_origin(): string;
            /**
             * Get the directory prefix used for processing.
             */
            get_prefix(): string;
            /**
             * Get the results of the last processing run.
             * @returns The results
             */
            get_results(): Result[];
            /**
             * Check if the last run generated any errors (which will cause metadata to be ignored).
             * @returns %TRUE if we had errors.
             */
            has_errors(): boolean;
            /**
             * Remove a key from the allowlist used to filter the `<custom/>` tag entries.
             * @param key_id the custom key to drop from the allowed list.
             */
            remove_custom_allowed(key_id: string): void;
            /**
             * Remove compose flags.
             * @param flags The compose flags to remove.
             */
            remove_flags(flags: ComposeFlags): void;
            /**
             * Reset the results, units and run-specific settings so the
             * instance can be reused for another metadata generation run.
             */
            reset(): void;
            /**
             * Process the registered units and generate catalog metadata from
             * found components.
             * @param cancellable a #GCancellable.
             * @returns The results, or %NULL on error
             */
            run(cancellable?: Gio.Cancellable | null): Result[];
            /**
             * Set a CA file holding one or more certificates to verify peers with
             * for download operations performed by this #AscCompose.
             * @param cainfo a valid file path
             */
            set_cainfo(cainfo: string): void;
            /**
             * Set an custom callback to be run when most of the metadata has been loaded,
             * but no expensive operations (like downloads or icon rendering) have been done yet.
             * This can be used to ignore unwanted components early on.
             *
             * The callback function may be called from any thread, so it needs to ensure thread safety on its own.
             * @param func the #AscCheckMetainfoLoadResultFn function to be called
             */
            set_check_metadata_early_func(func: CheckMetadataEarlyFn): void;
            /**
             * Set an output location where generated metadata should be saved.
             * If this is set to %NULL, no metadata will be saved.
             * @param dir the metadata save location.
             */
            set_data_result_dir(dir: string): void;
            /**
             * Set compose flags bitfield that controls the enabled features
             * for this #AscCompose.
             * @param flags The compose flags bitfield.
             */
            set_flags(flags: ComposeFlags): void;
            /**
             * Set the format kind of the catalog metadata that we should generate.
             * @param kind The format, e.g. %AS_FORMAT_KIND_XML
             */
            set_format(kind: AppStream.FormatKind): void;
            /**
             * Set an output location for HTML reports of issues generated
             * during a compose run.
             * @param dir the hints data directory.
             */
            set_hints_result_dir(dir: string): void;
            /**
             * Set an icon policy object, overriding the existing one.
             * @param policy an #AscIconPolicy instance
             */
            set_icon_policy(policy: IconPolicy): void;
            /**
             * Set an output location where plain icons for the processed metadata
             * are stored.
             * @param dir the icon storage location.
             */
            set_icons_result_dir(dir: string): void;
            /**
             * Set a specific unit that is used for fetching locale information.
             * This may be useful in case a special language pack layout is used,
             * but is generally not necessary to be set explicitly, as locale
             * will be found in the unit where the metadata is by default.
             * @param locale_unit the unit used for locale processing.
             */
            set_locale_unit(locale_unit: Unit): void;
            /**
             * Set the maximum size a screenshot video or image can have.
             * A size < 0 may be set to allow unlimited sizes, setting a limit of 0
             * will disable screenshot caching entirely.
             * @param size_bytes maximum size of a screenshot image or video in bytes
             */
            set_max_screenshot_size(size_bytes: number): void;
            /**
             * Set the media base URL for the generated metadata. Can be %NULL if no media
             * should be cached and the original URLs should be kept.
             * @param url the media base URL.
             */
            set_media_baseurl(url?: string | null): void;
            /**
             * Set an output location to store media (screenshots, icons, ...) that
             * will be served on a webserver via the URL set as media baseurl.
             * @param dir the media storage location.
             */
            set_media_result_dir(dir: string): void;
            /**
             * Set the metadata origin field (e.g. "debian" or "flathub")
             * @param origin the origin.
             */
            set_origin(origin: string): void;
            /**
             * Set the directory prefix the to-be-processed units are using.
             * @param prefix a directory prefix, e.g. "/usr"
             */
            set_prefix(prefix: string): void;
        }

        module DirectoryUnit {
            // Constructor properties interface

            interface ConstructorProps extends Unit.ConstructorProps {}
        }

        class DirectoryUnit extends Unit {
            static $gtype: GObject.GType<DirectoryUnit>;

            // Constructors

            constructor(properties?: Partial<DirectoryUnit.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](root_dir: string): DirectoryUnit;
            // Conflicted with AppStreamCompose.Unit.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Get the root directory path for this unit.
             */
            get_root(): string;
            /**
             * Sets the root directory path for this unit.
             * @param root_dir Absolute directory path
             */
            set_root(root_dir: string): void;
        }

        module Hint {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Hint extends GObject.Object {
            static $gtype: GObject.GType<Hint>;

            // Constructors

            constructor(properties?: Partial<Hint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Hint;

            static new_for_tag(tag: string): Hint;

            // Methods

            /**
             * Add a replacement variable for the explanation text.
             * @param var_name Name of the variable to be replaced.
             * @param text Replacement for the variable name.
             */
            add_explanation_var(var_name: string, text: string): void;
            /**
             * Formats the explanation template to return a human-redable issue hint
             * explanation, with all placeholder variables replaced.
             * @returns Explanation text for this hint, with variables replaced.
             */
            format_explanation(): string;
            /**
             * Gets the explanation template for this hint.
             */
            get_explanation_template(): string;
            /**
             * Returns a list with the flattened key/value pairs for this hint.
             * Values are located in uneven list entries, following their keys in even list entries.
             * @returns A flattened #GPtrArray with the key/value pairs.
             */
            get_explanation_vars_list(): string[];
            /**
             * Gets the issue severity of this hint.
             */
            get_severity(): AppStream.IssueSeverity;
            /**
             * Gets the unique tag for the type of this hint.
             */
            get_tag(): string;
            is_error(): boolean;
            /**
             * Check if this hint is valid (it requires at least a tag and a severity
             * in order to be considered valid).
             * @returns %TRUE if this hint is valid.
             */
            is_valid(): boolean;
            /**
             * Sets the explanation template for this hint.
             * @param explanation_tmpl
             */
            set_explanation_template(explanation_tmpl: string): void;
            /**
             * Sets the issue severity of this hint.
             * @param severity
             */
            set_severity(severity: AppStream.IssueSeverity): void;
            /**
             * Sets the unique tag for the type of this hint.
             * @param tag
             */
            set_tag(tag: string): void;
        }

        module IconPolicy {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class IconPolicy extends GObject.Object {
            static $gtype: GObject.GType<IconPolicy>;

            // Constructors

            constructor(properties?: Partial<IconPolicy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): IconPolicy;

            // Methods

            /**
             * Loads the icon policy from a textual representation.
             * @param serialized_policy A policy string as returned by %asc_icon_policy_to_string
             */
            from_string(serialized_policy: string): boolean;
            /**
             * Sets a designated state for an icon of the given size.
             * @param icon_size the size of the icon to set policy for (e.g. 64 for 64x64px icons)
             * @param icon_scale the icon scale factor, e.g. 1
             * @param state the designated #AscIconState
             */
            set_policy(icon_size: number, icon_scale: number, state: IconState): void;
            /**
             * Converts the current icon policy into a textual representation.
             * @returns The icon policy serialized into a string. Free with g_free()
             */
            to_string(): string;
        }

        module Image {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Image extends GObject.Object {
            static $gtype: GObject.GType<Image>;

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Image;

            static new_from_data(
                data: any | null,
                len: number,
                dest_size: number,
                compressed: boolean,
                flags: ImageLoadFlags,
            ): Image;

            static new_from_file(fname: string, dest_size: number, flags: ImageLoadFlags): Image;

            // Static methods

            /**
             * Get a set of image format names we can currently read
             * (via GdkPixbuf).
             */
            static supported_format_names(): GLib.HashTable<any, any>;

            // Methods

            /**
             * Gets the image height.
             */
            get_height(): number;
            /**
             * Gets the image pixbuf if set.
             * @returns the #GdkPixbuf, or %NULL
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            /**
             * Gets the image width.
             */
            get_width(): number;
            /**
             * Reads an image from a file.
             * @param filename filename to read from
             * @param dest_size The size of the constructed pixbuf, or 0 for the native size
             * @param src_size_min The smallest source size allowed, or 0 for none
             * @param flags a #AscImageLoadFlags, e.g. %ASC_IMAGE_LOAD_FLAG_NONE
             * @returns %TRUE for success
             */
            load_filename(filename: string, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean;
            /**
             * Saves the image to a file.
             * @param filename filename to write to
             * @param width target width, or 0 for default
             * @param height target height, or 0 for default
             * @param flags some #AscImageSaveFlags values, e.g. %ASC_IMAGE_SAVE_FLAG_PAD_16_9
             * @returns %TRUE for success
             */
            save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean;
            /**
             * Resamples a pixbuf to a specific size.
             * @param width target width, or 0 for default
             * @param height target height, or 0 for default
             * @param flags some #AscImageSaveFlags values, e.g. %ASC_IMAGE_SAVE_FLAG_PAD_16_9
             * @returns A #GdkPixbuf of the specified size
             */
            save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf;
            /**
             * Scale the image to the given size.
             * @param new_width The new width.
             * @param new_height the new height.
             */
            scale(new_width: number, new_height: number): void;
            /**
             * Scale the image to fir in a square with the given edge length,
             * and keep its aspect ratio.
             * @param size the maximum edge length.
             */
            scale_to_fit(size: number): void;
            /**
             * Scale the image to the given height, preserving
             * its aspect ratio.
             * @param new_height the new height.
             */
            scale_to_height(new_height: number): void;
            /**
             * Scale the image to the given width, preserving
             * its aspect ratio.
             * @param new_width The new width.
             */
            scale_to_width(new_width: number): void;
            /**
             * Sets the image pixbuf.
             * @param pixbuf the #GdkPixbuf, or %NULL
             */
            set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        }

        module Result {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Result extends GObject.Object {
            static $gtype: GObject.GType<Result>;

            // Constructors

            constructor(properties?: Partial<Result.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Result;

            // Methods

            /**
             * Add component to the results set.
             * @param cpt The #AsComponent to add.
             * @param bytes Source data used to generate the GCID hash, or %NULL if nonexistent.
             * @returns %TRUE on success.
             */
            add_component(cpt: AppStream.Component, bytes: GLib.Bytes | Uint8Array): boolean;
            /**
             * Add component to the results set, using string data.
             * @param cpt The #AsComponent to add.
             * @param data Source data used to generate the GCID hash, or %NULL if nonexistent.
             * @returns %TRUE on success.
             */
            add_component_with_string(cpt: AppStream.Component, data: string): boolean;
            /**
             * Add an issue hint for a component.
             * @param component_id The component-ID of the affected #AsComponent
             * @param tag AppStream Compose Issue hint tag
             * @param kv List of key-value pairs for replacement variables.
             * @returns %TRUE if the added hint did not cause the component to be invalidated.
             */
            add_hint_by_cid(component_id: string, tag: string, kv: string): boolean;
            /**
             * Add an issue hint for a component.
             * @param cpt The affected #AsComponent
             * @param tag AppStream Compose Issue hint tag
             * @param kv List of key-value pairs for replacement variables.
             * @returns %TRUE if the added hint did not cause the component to be invalidated.
             */
            add_hint(cpt: AppStream.Component, tag: string, kv: string): boolean;
            components_count(): number;
            /**
             * Gets all components this #AsResult instance contains.
             * @returns An array of #AsComponent
             */
            fetch_components(): AppStream.Component[];
            /**
             * Get a list of all hints for all components that are registered with this result.
             * @returns An array of #AscHint
             */
            fetch_hints_all(): Hint[];
            /**
             * Retrieve the global component-ID string for the given component-ID,
             * as long as component with the given ID is registered with this #AscResult.
             * Otherwise, %NULL is returned.
             * @param cid Component ID to look for.
             */
            gcid_for_cid(cid: string): string;
            gcid_for_component(cpt: AppStream.Component): string;
            /**
             * Gets the ID name of the bundle (a package / Flatpak / any entity containing metadata)
             * that these these results are generated for.
             */
            get_bundle_id(): string;
            /**
             * Gets the bundle kind these results are for.
             */
            get_bundle_kind(): AppStream.BundleKind;
            /**
             * Gets the component by its component-id-
             * @param cid Component ID to look for.
             * @returns An #AsComponent
             */
            get_component(cid: string): AppStream.Component;
            /**
             * Retrieve a list of all global component-IDs that this result knows of.
             * @returns An array of global component IDs. Free with %g_free
             */
            get_component_gcids(): string[];
            /**
             * Gets list of component-IDs which do have issue hints associated with them.
             * @returns An array of component-IDs. Free container with %g_free
             */
            get_component_ids_with_hints(): string[];
            /**
             * Gets hints for a component with the given component-id.
             * @param cid Component ID to look for.
             * @returns An array of #AscHint or %NULL
             */
            get_hints(cid: string): Hint[];
            /**
             * Test if a hint tag is associated with a given component in this result.
             * @param cpt the #AsComponent to check
             * @param tag the hint tag to check for
             * @returns %TRUE if a hint with this tag exists for the selected component.
             */
            has_hint(cpt: AppStream.Component, tag: string): boolean;
            hints_count(): number;
            /**
             * Check if an #AsComponent was set to be ignored in this result
             * (usually due to errors).
             * @param cpt the component to check for.
             * @returns %TRUE if the component is ignored.
             */
            is_ignored(cpt: AppStream.Component): boolean;
            /**
             * Remove a component from the results set.
             * @param cpt The #AsComponent to remove.
             * @returns %TRUE if the component was found and removed.
             */
            remove_component(cpt: AppStream.Component): boolean;
            /**
             * Remove a component from the results set.
             * @param cid a component-ID
             * @returns %TRUE if the component was found and removed.
             */
            remove_component_by_id(cid: string): boolean;
            /**
             * Remove a component from the results set.
             * @param cpt The #AsComponent to remove.
             * @param remove_gcid %TRUE if global component ID should be unregistered as well.
             * @returns %TRUE if the component was found and removed.
             */
            remove_component_full(cpt: AppStream.Component, remove_gcid: boolean): boolean;
            /**
             * Remove all hints that we have associated with the selected component-ID.
             * @param cid The component ID
             */
            remove_hints_for_cid(cid: string): void;
            /**
             * Sets the name of the bundle these results are for.
             * @param id The new ID.
             */
            set_bundle_id(id: string): void;
            /**
             * Sets the kind of the bundle these results are for.
             * @param kind
             */
            set_bundle_kind(kind: AppStream.BundleKind): void;
            unit_ignored(): boolean;
            /**
             * Update the global component ID for the given component.
             * @param cpt The #AsComponent to edit.
             * @param bytes The data to include in the global component ID, or %NULL
             * @returns %TRUE if the component existed and was updated.
             */
            update_component_gcid(cpt: AppStream.Component, bytes?: GLib.Bytes | null): boolean;
            /**
             * Update the global component ID for the given component.
             * This is a convenience method for %asc_result_update_component_gcid
             * @param cpt The #AsComponent to edit.
             * @param data The data as string to include in the global component ID, or %NULL
             * @returns %TRUE if the component existed and was updated.
             */
            update_component_gcid_with_string(cpt: AppStream.Component, data?: string | null): boolean;
        }

        module Unit {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Unit extends GObject.Object {
            static $gtype: GObject.GType<Unit>;

            // Constructors

            constructor(properties?: Partial<Unit.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Unit;

            // Virtual methods

            /**
             * Close this unit, possibly freeing its resources. Calls to read_data() or
             * get_contents() may not produce results until open() is called again.
             */
            vfunc_close(): void;
            /**
             * Returns %TRUE if the directory exists and files in it are readable.
             * @param dirname The directory name to check.
             */
            vfunc_dir_exists(dirname: string): boolean;
            /**
             * Returns %TRUE if the filename exists and is readable using %asc_unit_read_data.
             * @param filename The filename to check.
             */
            vfunc_file_exists(filename: string): boolean;
            /**
             * Open this unit, populating its content listing.
             */
            vfunc_open(): boolean;
            /**
             * Read the contents of the selected file into memory and return them.
             * @param filename The file to read data for.
             */
            vfunc_read_data(filename: string): GLib.Bytes;

            // Methods

            /**
             * Add a path to the list of relevant directories.
             * A unit may only read data in paths that were previously
             * registered as relevant.
             * @param path path to be considered relevant
             */
            add_relevant_path(path: string): void;
            /**
             * Close this unit, possibly freeing its resources. Calls to read_data() or
             * get_contents() may not produce results until open() is called again.
             */
            close(): void;
            /**
             * Returns %TRUE if the directory exists and files in it are readable.
             * @param dirname The directory name to check.
             */
            dir_exists(dirname: string): boolean;
            /**
             * Returns %TRUE if the filename exists and is readable using %asc_unit_read_data.
             * @param filename The filename to check.
             */
            file_exists(filename: string): boolean;
            /**
             * Gets the ID name of the bundle (a package / Flatpak / any entity containing metadata)
             * that this unit represents.
             */
            get_bundle_id(): string;
            /**
             * Gets the ID name of the bundle, normalized to be safe to use
             * in filenames. This may *not* be the same name as set via asc_unit_get_bundle_id()
             */
            get_bundle_id_safe(): string;
            /**
             * Gets the bundle kind of this unit.
             */
            get_bundle_kind(): AppStream.BundleKind;
            /**
             * Get a list of all files contained by this unit.
             * @returns A file listing
             */
            get_contents(): string[];
            /**
             * Get a list of paths that are relevant for data processing.
             * @returns A list of paths
             */
            get_relevant_paths(): string[];
            /**
             * Get user-defined data. This is a helper
             * function for bindings.
             */
            get_user_data(): any | null;
            /**
             * Open this unit, populating its content listing.
             */
            open(): boolean;
            /**
             * Read the contents of the selected file into memory and return them.
             * @param filename The file to read data for.
             */
            read_data(filename: string): GLib.Bytes;
            /**
             * Sets the ID of the bundle represented by this unit.
             * @param id The new ID.
             */
            set_bundle_id(id: string): void;
            /**
             * Sets the kind of the bundle this unit represents.
             * @param kind
             */
            set_bundle_kind(kind: AppStream.BundleKind): void;
            /**
             * Set list of files this unit contains.
             * @param contents A list of files contained by this unit.
             */
            set_contents(contents: string[]): void;
            /**
             * Assign user-defined data to this object. This is a helper
             * function for bindings.
             * @param user_data the user data
             */
            set_user_data(user_data?: any | null): void;
        }

        type CanvasClass = typeof Canvas;
        type ComposeClass = typeof Compose;
        type DirectoryUnitClass = typeof DirectoryUnit;
        type HintClass = typeof Hint;
        type IconPolicyClass = typeof IconPolicy;
        /**
         * A #AscIconPolicyIter structure represents an iterator that can be used
         * to iterate over the icon sizes / policy entries of an #AscIconPolicy.
         * #AscIconPolicyIter structures are typically allocated on the stack and
         * then initialized with asc_icon_policy_iter_init().
         */
        class IconPolicyIter {
            static $gtype: GObject.GType<IconPolicyIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Methods

            /**
             * Initializes a policy iterator for the policy entry list and associates it
             * it with `ipolicy`.
             * The #AscIconPolicyIter structure is typically allocated on the stack
             * and does not need to be freed explicitly.
             * @param ipolicy an #AscIconPolicy
             */
            init(ipolicy: IconPolicy): void;
            /**
             * Returns the current icon policy entry and advances the iterator.
             * Example:
             *
             * ```c
             * AscIconPolicyIter iter;
             * guint icon_size;
             * guint icon_scale;
             * AscIconState istate;
             *
             * asc_icon_policy_iter_init (&iter, ipolicy);
             * while (asc_icon_policy_iter_next (&iter, &icon_size, &icon_scale, &istate)) {
             *     // do something with the icon entry data
             * }
             * ```
             *
             * @returns %FALSE if the last entry has been reached.
             */
            next(): [boolean, number, number, IconState | null];
        }

        type ImageClass = typeof Image;
        type ResultClass = typeof Result;
        type UnitClass = typeof Unit;
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

    export default AppStreamCompose;
}

declare module 'gi://AppStreamCompose' {
    import AppStreamCompose10 from 'gi://AppStreamCompose?version=1.0';
    export default AppStreamCompose10;
}
// END
