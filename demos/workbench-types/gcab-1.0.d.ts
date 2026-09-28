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

declare module 'gi://GCab?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GCab {
        /**
         * GCab-1.0
         */

        /**
         * Compression used by the #GCabFolder.
         */

        /**
         * Compression used by the #GCabFolder.
         */
        export namespace Compression {
            export const $gtype: GObject.GType<Compression>;
        }

        enum Compression {
            /**
             * No compression.
             */
            NONE,
            /**
             * MSZIP compression.
             */
            MSZIP,
            /**
             * QUANTUM compression (unsupported).
             */
            QUANTUM,
            /**
             * LZX compression (only decompression supported).
             */
            LZX,
            /**
             * compression value mask.
             */
            MASK,
        }
        /**
         * The various errors triggered by the GCab functions.
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * The given file is not of Cabinet format.
             */
            static FORMAT: number;
            /**
             * General function failure.
             */
            static FAILED: number;
            /**
             * Action or format is not supported
             */
            static NOT_SUPPORTED: number;
            /**
             * Data stream was invalid
             */
            static INVALID_DATA: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * Attributes associated with the #GCabFile.
         */

        /**
         * Attributes associated with the #GCabFile.
         */
        export namespace FileAttribute {
            export const $gtype: GObject.GType<FileAttribute>;
        }

        enum FileAttribute {
            /**
             * file is read-only
             */
            RDONLY,
            /**
             * file is hidden
             */
            HIDDEN,
            /**
             * file is a system file
             */
            SYSTEM,
            /**
             * file modified since last backup
             */
            ARCH,
            /**
             * run after extraction
             */
            EXEC,
            /**
             * name contains UTF
             */
            NAME_IS_UTF,
        }
        function error_quark(): GLib.Quark;
        interface FileCallback {
            (file: File): boolean;
        }
        module Cabinet {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                reserved: Uint8Array;
                signature: Uint8Array;
            }
        }

        /**
         * An opaque object holding a Cabinet file reference.
         */
        class Cabinet extends GObject.Object {
            static $gtype: GObject.GType<Cabinet>;

            // Properties

            get reserved(): Uint8Array;
            set reserved(val: Uint8Array);
            get signature(): Uint8Array;
            set signature(val: Uint8Array);

            // Constructors

            constructor(properties?: Partial<Cabinet.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Cabinet;

            // Methods

            /**
             * Adds a compression kind to the allow-list. By default, GCab will use all decompression support
             * compiled in at build time. Once this function has been called only specific compression kinds
             * will be used in functions like gcab_cabinet_load().
             * @param compression a #GCabCompression kind, e.g. %GCAB_COMPRESSION_MSZIP
             */
            add_allowed_compression(compression: Compression): void;
            /**
             * Add `folder` to `cabinet`.
             * @param folder a #GCabFolder
             * @returns %TRUE on success.
             */
            add_folder(folder: Folder): boolean;
            /**
             * Extract files to given path.
             *
             * If `path` is NULL then the files are decompressed to memory blobs stored on
             * each #GCabFile.
             * @param path the path to extract files
             * @param file_callback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
             * @param progress_callback a progress callback
             * @param cancellable optional #GCancellable object,     %NULL to ignore
             * @returns %TRUE on success.
             */
            extract(
                path?: Gio.File | null,
                file_callback?: FileCallback | null,
                progress_callback?: Gio.FileProgressCallback | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Extract files to given path.
             * @param path the path to extract files
             * @param file_callback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
             * @param cancellable optional #GCancellable object,     %NULL to ignore
             * @returns %TRUE on success.
             */
            extract_simple(
                path: Gio.File,
                file_callback?: FileCallback | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Get the Cabinet folders within the `cabinet`.
             * Note that Cabinet folders are not like filesystem path, they are
             * group of files sharing some layout parameters.
             * @returns an array of #GCabFolder
             */
            get_folders(): Folder[];
            /**
             * Lookup the cabinet authenticode signature if any.
             * @param cancellable optional #GCancellable object,     %NULL to ignore
             * @returns the array containing the PKCS#7 signed data or %NULL on error.
             */
            get_signature(cancellable?: Gio.Cancellable | null): Uint8Array;
            /**
             * Get the size of the compressed cabinet file.
             * @returns size in bytes
             */
            get_size(): number;
            /**
             * Load a cabinet archive.
             * @param stream a #GInputStream
             * @param cancellable optional #GCancellable object,     %NULL to ignore
             * @returns %TRUE on success
             */
            load(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
             * @param stream a #GOutputStream also #GSeekable
             * @param file_callback report current file being saved
             * @param progress_callback report saving progress
             * @param cancellable optional #GCancellable object,     %NULL to ignore
             * @returns %TRUE on success.
             */
            write(
                stream: Gio.OutputStream,
                file_callback?: FileCallback | null,
                progress_callback?: Gio.FileProgressCallback | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
             * @param stream a #GOutputStream also #GSeekable
             * @param file_callback report current file being saved
             * @param cancellable optional #GCancellable object,     %NULL to ignore
             * @returns %TRUE on success.
             */
            write_simple(
                stream: Gio.OutputStream,
                file_callback?: FileCallback | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
        }

        module File {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                bytes: GLib.Bytes;
                file: Gio.File;
                name: string;
            }
        }

        /**
         * An opaque object, referencing a file in a Cabinet.
         */
        class File extends GObject.Object {
            static $gtype: GObject.GType<File>;

            // Properties

            get bytes(): GLib.Bytes;
            set bytes(val: GLib.Bytes);
            get file(): Gio.File;
            set file(val: Gio.File);
            get name(): string;
            set name(val: string);

            // Constructors

            constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_with_bytes(name: string, bytes: GLib.Bytes | Uint8Array): File;

            static new_with_file(name: string, file: Gio.File): File;

            // Methods

            /**
             * Get the file attributes.
             * @returns the cabinet file attributes
             */
            get_attributes(): number;
            /**
             * Get the #GFile associated with `file`. This will only be non-%NULL if the
             * #GCabFile has been created using gcab_file_new_with_bytes().
             * @returns the associated #GBytes or %NULL
             */
            get_bytes(): GLib.Bytes;
            /**
             * Get the file date, in `result`.
             * @param result a #GTimeVal to return date
             * @returns %TRUE if @tv was set
             */
            get_date(result: GLib.TimeVal): boolean;
            /**
             * Gets the file date and returns it as a #GDateTime..
             * @returns file date, or NULL if unknown.
             */
            get_date_time(): GLib.DateTime;
            /**
             * Get the file name to use for extraction, or %NULL.
             * @returns a file name
             */
            get_extract_name(): string | null;
            /**
             * If the cabinet is being created, get the #GFile associated with
             * `file`. This must be an exisiting file that can be read, in order to
             * be added to the archive during cabinet creation.
             *
             * If `file` is from an existing cabinet, the fuction will return
             * %NULL.
             * @returns the associated #GFile or %NULL
             */
            get_file(): Gio.File;
            /**
             * Get the file name within the cabinet.
             * @returns the cabinet file name
             */
            get_name(): string;
            /**
             * Get the file size.
             * @returns the cabinet file size
             */
            get_size(): number;
            /**
             * Set the file attributes.
             * @param attr the attributes, e.g. %GCAB_FILE_ATTRIBUTE_RDONLY
             */
            set_attributes(attr: number): void;
            /**
             * Replace the #GBytes associated with `self`.
             * This is most usefule when the #GCabFile has been created using
             * gcab_file_new_with_bytes() and the data needs to be modified.
             * @param bytes a #GBytes
             */
            set_bytes(bytes: GLib.Bytes | Uint8Array): void;
            /**
             * Sets the file modification date, instead of the value provided by the GFile.
             * @param tv a #GTimeVal
             */
            set_date(tv: GLib.TimeVal): void;
            /**
             * Sets the file modification date (instead of the date provided by the GFile)
             * @param dt a #GDateTime
             */
            set_date_time(dt: GLib.DateTime): void;
            /**
             * Sets the file name to use for extraction, instead of the name
             * provided by the Cabinet.
             * @param name a file name or %NULL
             */
            set_extract_name(name?: string | null): void;
        }

        module Folder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                compression: Compression;
                comptype: number;
                reserved: Uint8Array;
            }
        }

        /**
         * An opaque object, referencing a folder in a Cabinet.
         */
        class Folder extends GObject.Object {
            static $gtype: GObject.GType<Folder>;

            // Properties

            get compression(): Compression;
            get comptype(): number;
            get reserved(): Uint8Array;
            set reserved(val: Uint8Array);

            // Constructors

            constructor(properties?: Partial<Folder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](comptype: number): Folder;

            // Methods

            /**
             * Add `file` to the #GCabFolder.
             * @param cabfile file to be added
             * @param recurse whether to recurse through subdirectories
             * @param cancellable optional #GCancellable object,     %NULL to ignore
             * @returns %TRUE on succes
             */
            add_file(cabfile: File, recurse: boolean, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Returns the compression used in this folder.
             * @returns a #GCabCompression, e.g. %GCAB_COMPRESSION_MSZIP
             */
            get_comptype(): number;
            /**
             * Gets a specific #GCabFile files contained in the `cabfolder`.
             * @param name a file name
             * @returns A #GCabFile, or %NULL if not found
             */
            get_file_by_name(name: string): File;
            /**
             * Get the list of #GCabFile files contained in the `cabfolder`.
             * @returns list of files
             */
            get_files(): File[];
            /**
             * Get the number of files in this `folder`.
             * @returns a #guint
             */
            get_nfiles(): number;
        }

        type CabinetClass = typeof Cabinet;
        type FileClass = typeof File;
        type FolderClass = typeof Folder;
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

    export default GCab;
}

declare module 'gi://GCab' {
    import GCab10 from 'gi://GCab?version=1.0';
    export default GCab10;
}
// END
