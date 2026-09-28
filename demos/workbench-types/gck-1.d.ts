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

declare module 'gi://Gck?version=1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Gck {
        /**
         * Gck-1
         */

        /**
         * Flags to be used with a [method`Builder`.init_full] and [ctor`Builder`.new].
         */

        /**
         * Flags to be used with a [method`Builder`.init_full] and [ctor`Builder`.new].
         */
        export namespace BuilderFlags {
            export const $gtype: GObject.GType<BuilderFlags>;
        }

        enum BuilderFlags {
            /**
             * no special flags
             */
            NONE,
            /**
             * use non-pageable memory for the values of the attributes
             */
            SECURE_MEMORY,
        }
        /**
         * Various error codes. All the `CKR_XXX` error codes from PKCS#11 are also
         * relevant error codes.
         *
         * Note that errors are returned as [struct`GLib`.Error] structures. The `code`
         * member of the error then contains the raw PKCS#11 `CK_RV` result value.
         */

        /**
         * Various error codes. All the `CKR_XXX` error codes from PKCS#11 are also
         * relevant error codes.
         *
         * Note that errors are returned as [struct`GLib`.Error] structures. The `code`
         * member of the error then contains the raw PKCS#11 `CK_RV` result value.
         */
        export namespace Error {
            export const $gtype: GObject.GType<Error>;
        }

        enum Error {
            /**
             * a result code that signifies there was a problem
             *                            loading a PKCS#11 module, usually a shared library
             */
            PROBLEM,
        }
        /**
         * Various error codes used with PKCS#11 URIs
         */

        /**
         * Various error codes used with PKCS#11 URIs
         */
        export namespace UriError {
            export const $gtype: GObject.GType<UriError>;
        }

        enum UriError {
            /**
             * invalid URI scheme
             */
            BAD_SCHEME,
            /**
             * bad URI encoding
             */
            BAD_ENCODING,
            /**
             * bad URI syntax
             */
            BAD_SYNTAX,
            /**
             * bad URI version component
             */
            BAD_VERSION,
            /**
             * piece of the URI was not found
             */
            NOT_FOUND,
        }
        /**
         * Used as a terminator at the end of variable argument lists.
         */
        const INVALID: number;
        /**
         * The major version number of the Gck library.
         */
        const MAJOR_VERSION: number;
        /**
         * The micro version number of the Gck library.
         */
        const MICRO_VERSION: number;
        /**
         * The minor version number of the Gck library.
         */
        const MINOR_VERSION: number;
        /**
         * The URI will match specific version of modules. To be used as a GckUriFlags argument.
         */
        const URI_FOR_MODULE_WITH_VERSION: number;
        /**
         * The URI will match objects on a specific token. To be used as a GckUriFlags argument.
         */
        const URI_FOR_OBJECT_ON_TOKEN: number;
        /**
         * The token inserted into a device with a specific module.
         */
        const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number;
        /**
         * Custom PKCS#11 errors that originate from the gck library, are
         * based at this error code.
         */
        const VENDOR_CODE: number;
        /**
         * Unreferences a builder. If this was the last reference then the builder
         * is freed.
         *
         * It is an error to use this function on builders that were allocated on the
         * stack.
         * @param builder the builder
         */
        function builder_unref(builder?: any | null): void;
        function error_get_quark(): GLib.Quark;
        function list_get_boxed_type(): GObject.GType;
        /**
         * Get a message for a PKCS#11 return value or error code. Do not
         * pass `CKR_OK` or other non-errors to this function.
         * @param rv The PKCS#11 return value to get a message for.
         * @returns The user readable message.
         */
        function message_from_rv(rv: number): string;
        /**
         * Setup an enumerator for listing matching objects on the modules.
         *
         * This call will not block but will return an enumerator immediately.
         *
         * If the `attrs` [struct`Attributes]` is floating, it is consumed.
         * @param modules The modules
         * @param attrs attributes that the objects must have, or empty for all objects
         * @param session_options Options from GckSessionOptions
         * @returns A new enumerator, which should be released with g_object_unref().
         */
        function modules_enumerate_objects(
            modules: Module[],
            attrs: Attributes,
            session_options: SessionOptions,
        ): Enumerator;
        /**
         * Enumerate objects that match a URI.
         *
         * This call will not block. Use the [class`Enumerator]` functions in order to
         * get at the actual objects that match.
         * @param modules The modules
         * @param uri The URI that the enumerator will match
         * @param session_options Options from GckSessionOptions
         * @returns A new #GckEnumerator, or %NULL if an error occurs.
         */
        function modules_enumerate_uri(modules: Module[], uri: string, session_options: SessionOptions): Enumerator;
        /**
         * Get a list of slots for across all of the modules.
         * @param modules The modules
         * @param token_present Whether to only list slots with token present
         * @returns A list of #GckSlot objects, which should be freed with gck_list_unref_free().
         */
        function modules_get_slots(modules: Module[], token_present: boolean): Slot[];
        /**
         * Load and initialize all the registered modules.
         * @param cancellable optional cancellation object
         * @returns A newly allocated list of #GckModule objects, which should be released with gck_list_unref_free().
         */
        function modules_initialize_registered(cancellable?: Gio.Cancellable | null): Module[];
        /**
         * Load and initialize all the registered modules asynchronously.
         * @param cancellable optional cancellation object
         */
        function modules_initialize_registered_async(cancellable?: Gio.Cancellable | null): Promise<Module[]>;
        /**
         * Load and initialize all the registered modules asynchronously.
         * @param cancellable optional cancellation object
         * @param callback a callback which will be called when the operation completes
         */
        function modules_initialize_registered_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null,
        ): void;
        /**
         * Load and initialize all the registered modules asynchronously.
         * @param cancellable optional cancellation object
         * @param callback a callback which will be called when the operation completes
         */
        function modules_initialize_registered_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null,
        ): Promise<Module[]> | void;
        /**
         * Finishes the asynchronous operation to initialize the registered
         * PKCS#11 modules.
         * @param result the asynchronous result
         * @returns a list of newly initialized #GckModule objects
         */
        function modules_initialize_registered_finish(result: Gio.AsyncResult): Module[];
        /**
         * Find an object that matches a URI.
         *
         * This call can block. Use [func`modules_enumerate_uri]` for a non-blocking
         * version.
         * @param modules The modules
         * @param uri The URI the objects must match
         * @param session_options Options from GckSessionOptions
         * @returns A new #GckObject which should be released with g_object_unref(), or %NULL if no matching object was found.
         */
        function modules_object_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object | null;
        /**
         * Find objects that match a URI.
         *
         * This call can block. Use [func`modules_enumerate_uri]` for a non-blocking
         * version.
         * @param modules The modules
         * @param uri The URI the objects must match
         * @param session_options Options from GckSessionOptions
         * @returns A list of #GckObject which should be released with gck_list_unref_free(), or %NULL if no matching object was found.
         */
        function modules_objects_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object[];
        /**
         * Lookup a token that matches the URI.
         * @param modules The modules
         * @param uri The URI that the token must match
         * @returns A newly allocated #GckSlot or %NULL if no such token was found.
         */
        function modules_token_for_uri(modules: Module[], uri: string): Slot;
        /**
         * Lookup a token that matches the URI.
         * @param modules The modules
         * @param uri The URI that the token must match
         * @returns A list of newly allocated #GckSlot objects. Use gck_list_unref_free() to release the list once you're done with it.
         */
        function modules_tokens_for_uri(modules: Module[], uri: string): Slot[];
        /**
         * Initialize a list of GckObject from raw PKCS#11 handles. The handles argument must contain
         * contiguous CK_OBJECT_HANDLE handles in an array.
         * @param session The session for these objects
         * @param object_handles The raw object handles.
         * @returns The list of #GckObject          objects. You should use gck_list_unref_free() when done with this          list.
         */
        function objects_from_handle_array(session: Session, object_handles: number[]): Object[];
        /**
         * Setup an enumerator for listing matching objects on the slots.
         *
         * If the `match` #GckAttributes is floating, it is consumed.
         *
         * This call will not block but will return an enumerator immediately.
         * @param slots a list of #GckSlot to enumerate objects on.
         * @param match attributes that the objects must match, or empty for all objects
         * @param options options for opening a session
         * @returns a new enumerator
         */
        function slots_enumerate_objects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator;
        /**
         * Build a PKCS#11 URI. The various parts relevant to the flags
         * specified will be used to build the URI.
         * @param uri_data the info to build the URI from.
         * @param flags The context that the URI is for
         * @returns a newly allocated string containing a PKCS#11 URI.
         */
        function uri_build(uri_data: UriData, flags: UriFlags): string;
        function uri_error_get_quark(): GLib.Quark;
        /**
         * Parse a PKCS#11 URI for use in a given context.
         *
         * The result will contain the fields that are relevant for
         * the given context. See #GckUriData  for more info.
         * Other fields will be set to %NULL.
         * @param string the URI to parse.
         * @param flags the context in which the URI will be used.
         * @returns a newly allocated #GckUriData; which should be          freed with gck_uri_data_free()
         */
        function uri_parse(string: string, flags: UriFlags): UriData;
        /**
         * Convert `CK_BBOOL` type memory to a boolean.
         * @param value memory to convert
         * @returns Whether the conversion was successful.
         */
        function value_to_boolean(value: Uint8Array | string): [boolean, boolean];
        /**
         * Convert `CK_ULONG` type memory to a boolean.
         * @param value memory to convert
         * @returns Whether the conversion was successful.
         */
        function value_to_ulong(value: Uint8Array | string): [boolean, number];
        interface Allocator {
            (data: any | null, length: number): any | null;
        }
        /**
         * Options for creating sessions.
         */

        /**
         * Options for creating sessions.
         */
        export namespace SessionOptions {
            export const $gtype: GObject.GType<SessionOptions>;
        }

        enum SessionOptions {
            /**
             * Open session as read only
             */
            READ_ONLY,
            /**
             * Open sessions as read/write
             */
            READ_WRITE,
            /**
             * Login as user on new sessions
             */
            LOGIN_USER,
            /**
             * Authenticate as necessary
             */
            AUTHENTICATE,
        }
        /**
         * Which parts of the PKCS#11 URI will be parsed or formatted. These can be
         * combined.
         */

        /**
         * Which parts of the PKCS#11 URI will be parsed or formatted. These can be
         * combined.
         */
        export namespace UriFlags {
            export const $gtype: GObject.GType<UriFlags>;
        }

        enum UriFlags {
            /**
             * the URI will be used to match objects.
             */
            FOR_OBJECT,
            /**
             * the URI will be used to match tokens.
             */
            FOR_TOKEN,
            /**
             * the URI will be used to match modules.
             */
            FOR_MODULE,
            /**
             * the URI has specific version numbers for module and/or token
             */
            WITH_VERSION,
            /**
             * parse all recognized components of the URI.
             */
            FOR_ANY,
        }
        module Enumerator {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                chained: Enumerator;
                interaction: Gio.TlsInteraction;
            }
        }

        /**
         * Can be used to enumerate through PKCS#11 objects. It will automatically
         * create sessions as necessary.
         *
         * Use [func`modules_enumerate_objects]` or [func`modules_enumerate_uri]` to
         * create an enumerator. To get the objects, use [method`Enumerator`.next] or
         * [method`Enumerator`.next_async] functions.
         */
        class Enumerator extends GObject.Object {
            static $gtype: GObject.GType<Enumerator>;

            // Properties

            /**
             * Chained enumerator, which will be enumerated when this enumerator
             * has enumerated all its objects.
             */
            get chained(): Enumerator;
            set chained(val: Enumerator);
            /**
             * Interaction object used to ask the user for pins when opening
             * sessions. Used if the session_options of the enumerator have
             * %GCK_SESSION_LOGIN_USER
             */
            get interaction(): Gio.TlsInteraction;
            set interaction(val: Gio.TlsInteraction);

            // Constructors

            constructor(properties?: Partial<Enumerator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the enumerator that will be run after all objects from this one
             * are seen.
             * @returns the chained enumerator or %NULL
             */
            get_chained(): Enumerator | null;
            /**
             * Get the interaction used when a pin is needed
             * @returns the interaction or %NULL
             */
            get_interaction(): Gio.TlsInteraction | null;
            /**
             * Get the type of objects created by this enumerator. The type will always
             * either be #GckObject or derived from it.
             * @returns the type of objects created
             */
            get_object_type(): GObject.GType;
            /**
             * Get the next object in the enumerator, or %NULL if there are no more objects.
             *
             * %NULL is also returned if the function fails. Use the `error` to determine
             * whether a failure occurred or not.
             * @param cancellable A #GCancellable or %NULL
             * @returns The next object, which must be released using g_object_unref, or %NULL.
             */
            next(cancellable?: Gio.Cancellable | null): Object | null;
            /**
             * Get the next set of objects from the enumerator. This operation completes
             * asynchronously.The maximum number of objects can be specified with
             * `max_objects`. If -1 is specified, then all the remaining objects will be
             * enumerated.
             * @param max_objects The maximum number of objects to get
             * @param cancellable A #GCancellable or %NULL
             * @param callback Called when the result is ready
             */
            next_async(
                max_objects: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to enumerate next objects.
             *
             * %NULL is also returned if the function fails. Use the `error` to determine
             * whether a failure occurred or not.
             * @param result The result passed to the callback
             * @returns The list of objects, which should be freed with gck_list_unref_free()
             */
            next_finish(result: Gio.AsyncResult): Object[];
            /**
             * Get the next set of objects from the enumerator. The maximum number of
             * objects can be specified with `max_objects`. If -1 is specified, then all
             * the remaining objects will be returned.
             *
             * %NULL is also returned if the function fails. Use the `error` to determine
             * whether a failure occurred or not.
             * @param max_objects The maximum amount of objects to enumerate
             * @param cancellable A #GCancellable or %NULL
             * @returns A list of objects, which should be freed using gck_list_unref_free().
             */
            next_n(max_objects: number, cancellable?: Gio.Cancellable | null): Object[];
            /**
             * Set a chained enumerator that will be run after all objects from this one
             * are seen.
             * @param chained the chained enumerator or %NULL
             */
            set_chained(chained?: Enumerator | null): void;
            /**
             * Set the interaction used when a pin is needed
             * @param interaction the interaction or %NULL
             */
            set_interaction(interaction?: Gio.TlsInteraction | null): void;
            /**
             * Set the type of objects to be created by this enumerator. The type must
             * always be either #GckObject or derived from it.
             *
             * If `attr_types` and `attr_count` are non-NULL and non-zero respectively,
             * then the #GckObjectCache interface is expected to be implemented on the
             * derived class, then the enumerator will retrieve attributes for each object.
             * @param object_type the type of objects to create
             * @param attr_types types of attributes to retrieve for objects
             */
            set_object_type(object_type: GObject.GType, attr_types: number[]): void;
        }

        module Module {
            // Signal callback interfaces

            interface AuthenticateObject {
                (object: Object, label: string, password?: any | null): boolean;
            }

            interface AuthenticateSlot {
                (slot: Slot, string: string, password?: any | null): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                functions: any;
                path: string;
            }
        }

        /**
         * Holds a loaded PKCS#11 module. A PKCS#11 module is a shared library.
         *
         * You can load and initialize a PKCS#11 module with the
         * [func`Module`.initialize] call. If you already have a loaded and
         * initialized module that you'd like to use with the various Gck functions,
         * then you can use [ctor`Module`.new].
         */
        class Module extends GObject.Object {
            static $gtype: GObject.GType<Module>;

            // Properties

            /**
             * The raw PKCS&num;11 function list for the module.
             *
             * This points to a CK_FUNCTION_LIST structure.
             */
            get functions(): any;
            /**
             * The PKCS&num;11 module file path.
             *
             * This may be set to NULL if this object was created from an already
             * initialized module via the gck_module_new() function.
             */
            get path(): string;

            // Constructors

            constructor(properties?: Partial<Module.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'authenticate-object',
                callback: (_source: this, object: Object, label: string, password: any | null) => boolean,
            ): number;
            connect_after(
                signal: 'authenticate-object',
                callback: (_source: this, object: Object, label: string, password: any | null) => boolean,
            ): number;
            emit(signal: 'authenticate-object', object: Object, label: string, password?: any | null): void;
            connect(
                signal: 'authenticate-slot',
                callback: (_source: this, slot: Slot, string: string, password: any | null) => boolean,
            ): number;
            connect_after(
                signal: 'authenticate-slot',
                callback: (_source: this, slot: Slot, string: string, password: any | null) => boolean,
            ): number;
            emit(signal: 'authenticate-slot', slot: Slot, string: string, password?: any | null): void;

            // Static methods

            /**
             * Load and initialize a PKCS#11 module represented by a GckModule object.
             * @param path The file system path to the PKCS#11 module to load.
             * @param cancellable optional cancellation object
             */
            static initialize(path: string, cancellable?: Gio.Cancellable | null): Module;
            /**
             * Asynchronously load and initialize a PKCS#11 module represented by a
             * [class`Module]` object.
             * @param path the file system path to the PKCS#11 module to load
             * @param cancellable optional cancellation object
             * @param callback a callback which will be called when the operation completes
             */
            static initialize_async(
                path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Module> | null,
            ): void;
            /**
             * Finishes the asynchronous initialize operation.
             * @param result the asynchronous result
             */
            static initialize_finish(result: Gio.AsyncResult): Module | null;

            // Virtual methods

            vfunc_authenticate_object(object: Object, label: string, password: string): boolean;
            vfunc_authenticate_slot(slot: Slot, label: string, password: string): boolean;

            // Methods

            /**
             * Checks equality of two modules. Two GckModule objects can point to the same
             * underlying PKCS#11 module.
             * @param module2 a pointer to the second #GckModule
             * @returns %TRUE if module1 and module2 are equal.               %FALSE if either is not a GckModule.
             */
            equal(module2: Module): boolean;
            /**
             * Get the info about a PKCS#11 module.
             * @returns the module info; release this with gck_module_info_free()
             */
            get_info(): ModuleInfo;
            /**
             * Get the file path of this module. This may not be an absolute path, and
             * usually reflects the path passed to [func`Module`.initialize].
             * @returns The path, do not modify or free this value.
             */
            get_path(): string;
            /**
             * Get the GckSlot objects for a given module.
             * @param token_present Whether to limit only to slots with a token present.
             * @returns The possibly empty               list of slots. Release this with gck_list_unref_free().
             */
            get_slots(token_present: boolean): Slot[];
            /**
             * Create a hash value for the GckModule.
             *
             * This function is intended for easily hashing a [class`Module]` to add to
             * a [struct`GLib`.HashTable] or similar data structure.
             * @returns An integer that can be used as a hash value, or 0 if invalid.
             */
            hash(): number;
            /**
             * Check whether the PKCS#11 URI matches the module
             * @param uri the uri to match against the module
             * @returns whether the URI matches or not
             */
            match(uri: UriData): boolean;
        }

        module Object {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                handle: number;
                module: Module;
                session: Session;
            }
        }

        /**
         * Holds a handle to a PKCS11 object such as a key or certificate. Token
         * objects are stored on the token persistently. Others are transient and are
         * called session objects.
         */
        class Object extends GObject.Object {
            static $gtype: GObject.GType<Object>;

            // Properties

            /**
             * The raw PKCS11 handle for this object.
             */
            get handle(): number;
            /**
             * The GckModule that this object belongs to.
             */
            get module(): Module;
            /**
             * The PKCS11 session to make calls on when this object needs to
             * perform operations on itself.
             *
             * If this is NULL then a new session is opened for each operation,
             * such as gck_object_get(), gck_object_set() or gck_object_destroy().
             */
            get session(): Session;

            // Constructors

            constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static from_handle(session: Session, object_handle: number): Object;

            // Methods

            /**
             * Lookup attributes in the cache, or retrieve them from the object if necessary.
             *
             * If `object` is a #GckObjectCache then this will lookup the attributes there
             * first if available, otherwise will read them from the object and update
             * the cache.
             *
             * If `object` is not a #GckObjectCache, then the attributes will simply be
             * read from the object.
             *
             * This may block, use the asynchronous version when this is not desirable
             * @param attr_types the types of attributes to update
             * @param cancellable optional cancellation object
             * @returns the attributes retrieved or %NULL on failure
             */
            cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes;
            /**
             * Lookup attributes in the cache, or retrieve them from the object if necessary.
             *
             * If `object` is a #GckObjectCache then this will lookup the attributes there
             * first if available, otherwise will read them from the object and update
             * the cache.
             *
             * If `object` is not a #GckObjectCache, then the attributes will simply be
             * read from the object.
             *
             * This will return immediately and complete asynchronously
             * @param attr_types the types of attributes to update
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            cache_lookup_async(
                attr_types: number[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to lookup attributes in the cache or retrieve them
             * from the object if necessary.
             * @param result the asynchrounous result passed to the callback
             * @returns the attributes retrieved or %NULL on failure
             */
            cache_lookup_finish(result: Gio.AsyncResult): Attributes;
            /**
             * Destroy a PKCS#11 object, deleting it from storage or the session.
             * This call may block for an indefinite period.
             * @param cancellable Optional cancellable object, or %NULL to ignore.
             * @returns Whether the call was successful or not.
             */
            destroy(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Destroy a PKCS#11 object, deleting it from storage or the session.
             * This call will return immediately and complete asynchronously.
             * @param cancellable Optional cancellable object, or %NULL to ignore.
             * @param callback Callback which is called when operation completes.
             */
            destroy_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Get the status of the operation to destroy a PKCS#11 object, begun with
             * gck_object_destroy_async().
             * @param result The result of the destory operation passed to the callback.
             * @returns Whether the object was destroyed successfully or not.
             */
            destroy_finish(result: Gio.AsyncResult): boolean;
            /**
             * Checks equality of two objects. Two GckObject objects can point to the same
             * underlying PKCS#11 object.
             * @param object2 a pointer to the second #GckObject
             * @returns %TRUE if object1 and object2 are equal.               %FALSE if either is not a GckObject.
             */
            equal(object2: Object): boolean;
            /**
             * Get the specified attributes from the object. The attributes will be cleared
             * of their current values, and new attributes will be stored. The attributes
             * should not be accessed in any way except for referencing and unreferencing
             * them until gck_object_get_finish() is called.
             *
             * This call returns immediately and completes asynchronously.
             * @param attr_types the types of the attributes to get
             * @param cancellable optional cancellation object, or %NULL
             * @param callback A callback which is called when the operation completes.
             */
            get_async(
                attr_types: number[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the data for the specified attribute from the object. For convenience
             * the returned data has a null terminator.
             *
             * This call may block for an indefinite period.
             * @param attr_type The attribute to get data for.
             * @param cancellable A #GCancellable or %NULL
             * @returns the resulting PKCS#11          attribute data, or %NULL if an error occurred
             */
            get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array;
            // Conflicted with GObject.Object.get_data
            get_data(...args: never[]): any;
            /**
             * Get the data for the specified attribute from the object.
             *
             * This call will return immediately and complete asynchronously.
             * @param attr_type The attribute to get data for.
             * @param allocator An allocator with which to allocate memory for the data, or %NULL for default.
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            get_data_async(
                attr_type: number,
                allocator: Allocator,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an operation to get attribute data from
             * an object. For convenience the returned data has an extra null terminator,
             * not included in the returned length.
             * @param result The result passed to the callback.
             * @returns The PKCS#11 attribute data          or %NULL if an error occurred.
             */
            get_data_finish(result: Gio.AsyncResult): Uint8Array;
            /**
             * Get the result of a get operation and return specified attributes from
             * the object.
             *
             * No extra references are added to the returned attributes pointer.
             * @param result The result passed to the callback.
             * @returns The filled in attributes structure if successful or %NULL if not successful.
             */
            get_finish(result: Gio.AsyncResult): Attributes;
            /**
             * Get the specified attributes from the object. This call may
             * block for an indefinite period.
             *
             * No extra references are added to the returned attributes pointer.
             * During this call you may not access the attributes in any way.
             * @param attr_types the types of the attributes to get
             * @param cancellable optional cancellation object, or %NULL
             * @returns a pointer to the filled in attributes if successful,          or %NULL if not
             */
            get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes;
            /**
             * Get the raw PKCS#11 handle of a GckObject.
             * @returns the raw CK_OBJECT_HANDLE object handle
             */
            get_handle(): number;
            /**
             * Get the PKCS#11 module to which this object belongs.
             * @returns the module, which should be unreffed after use
             */
            get_module(): Module;
            /**
             * Get the PKCS#11 session assigned to make calls on when operating
             * on this object.
             *
             * This will only return a session if it was set explitly on this
             * object. By default an object will open and close sessions
             * appropriate for its calls.
             * @returns the assigned session, which must be unreffed after use
             */
            get_session(): Session;
            /**
             * Get an attribute template from the object. The attr_type must be for
             * an attribute which returns a template.
             *
             * This call may block for an indefinite period.
             * @param attr_type The template attribute type.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns the resulting PKCS#11 attribute template, or %NULL          if an error occurred
             */
            get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Attributes;
            /**
             * Get an attribute template from the object. The `attr_type` must be for
             * an attribute which returns a template.
             *
             * This call will return immediately and complete asynchronously.
             * @param attr_type The template attribute type.
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            get_template_async(
                attr_type: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an operation to get attribute template from
             * an object.
             * @param result The result passed to the callback.
             * @returns the resulting PKCS#11 attribute template, or %NULL          if an error occurred
             */
            get_template_finish(result: Gio.AsyncResult): Attributes;
            /**
             * Create a hash value for the GckObject.
             *
             * This function is intended for easily hashing a GckObject to add to
             * a GHashTable or similar data structure.
             * @returns An integer that can be used as a hash value, or 0 if invalid.
             */
            hash(): number;
            /**
             * Set PKCS#11 attributes on an object. This call may block for an indefinite period.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param attrs The attributes to set on the object.
             * @param cancellable Optional cancellable object, or %NULL to ignore.
             * @returns Whether the call was successful or not.
             */
            set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * Set PKCS#11 attributes on an object. This call will return
             * immediately and completes asynchronously.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param attrs The attributes to set on the object.
             * @param cancellable Optional cancellable object, or %NULL to ignore.
             * @param callback Callback which is called when operation completes.
             */
            set_async(
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the status of the operation to set attributes on a PKCS#11 object,
             * begun with gck_object_set_async().
             * @param result The result of the destory operation passed to the callback.
             * @returns Whether the attributes were successfully set on the object or not.
             */
            set_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set an attribute template on the object. The attr_type must be for
             * an attribute which contains a template.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             *
             * This call may block for an indefinite period.
             * @param attr_type The attribute template type.
             * @param attrs The attribute template.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns %TRUE if the operation succeeded.
             */
            set_template(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set an attribute template on the object. The attr_type must be for
             * an attribute which contains a template.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             *
             * This call will return immediately and complete asynchronously.
             * @param attr_type The attribute template type.
             * @param attrs The attribute template.
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            set_template_async(
                attr_type: number,
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an operation to set attribute template on
             * an object.
             * @param result The result passed to the callback.
             * @returns %TRUE if the operation succeeded.
             */
            set_template_finish(result: Gio.AsyncResult): boolean;
        }

        module Password {
            // Constructor properties interface

            interface ConstructorProps extends Gio.TlsPassword.ConstructorProps {
                key: Object;
                module: Module;
                token: Slot;
            }
        }

        /**
         * Represents a password which is requested of the user.
         *
         * This is used in conjuction with [class`Gio`.TlsInteraction]. `GckPassword` is
         * a [class`Gio`.TlsPassword] which contains additional information about which
         * PKCS#11 token or key the password is being requested for.
         */
        class Password extends Gio.TlsPassword {
            static $gtype: GObject.GType<Password>;

            // Properties

            /**
             * The PKCS#11 key that the password is being requested for. If this
             * is set then the GckPassword:token property will be %NULL
             */
            get key(): Object;
            /**
             * The PKCS#11 module that is requesting the password
             */
            get module(): Module;
            /**
             * The PKCS#11 token the password is for, if this is set then
             * the GckPassword:object property will be %NULL
             */
            get token(): Slot;

            // Constructors

            constructor(properties?: Partial<Password.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * If the password request is to unlock a PKCS#11 key, then this is the
             * the object representing that key.
             * @returns the password is for this key, or %NULL if not          being requested for a key; must be unreferenced after use
             */
            get_key(): Object;
            /**
             * Get the PKCS#11 module that is requesting the password.
             * @returns the module that is requesting the password, which          must be unreferenced after use
             */
            get_module(): Module;
            /**
             * If the password request is to unlock a PKCS#11 token, then this is the
             * slot containing that token.
             * @returns the slot that contains the token, or %NULL if not          being requested for a token; must be unreferenced after use
             */
            get_token(): Slot;
        }

        module Session {
            // Signal callback interfaces

            interface DiscardHandle {
                (handle: number): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                app_data: any;
                appData: any;
                handle: number;
                interaction: Gio.TlsInteraction;
                module: Module;
                opening_flags: number;
                openingFlags: number;
                options: SessionOptions;
                slot: Slot;
            }
        }

        /**
         * Represents an open PKCS11 session.
         *
         * Before performing any PKCS11 operations, a session must be opened. This is
         * analogous to an open database handle, or a file handle.
         */
        class Session extends GObject.Object implements Gio.AsyncInitable<Session>, Gio.Initable {
            static $gtype: GObject.GType<Session>;

            // Properties

            /**
             * Raw PKCS#11 application data used to open the PKCS#11 session.
             */
            set app_data(val: any);
            /**
             * Raw PKCS#11 application data used to open the PKCS#11 session.
             */
            set appData(val: any);
            /**
             * The raw CK_SESSION_HANDLE handle of this session.
             */
            get handle(): number;
            /**
             * Interaction object used to ask the user for pins when opening
             * sessions. Used if the session_options of the enumerator have
             * %GCK_SESSION_LOGIN_USER
             */
            get interaction(): Gio.TlsInteraction;
            set interaction(val: Gio.TlsInteraction);
            /**
             * The GckModule that this session is opened on.
             */
            get module(): Module;
            /**
             * Raw PKCS#11 flags used to open the PKCS#11 session.
             */
            set opening_flags(val: number);
            /**
             * Raw PKCS#11 flags used to open the PKCS#11 session.
             */
            set openingFlags(val: number);
            /**
             * The options this session was opened with.
             */
            get options(): SessionOptions;
            /**
             * The GckSlot this session is opened on.
             */
            get slot(): Slot;

            // Constructors

            constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'discard-handle', callback: (_source: this, handle: number) => boolean): number;
            connect_after(signal: 'discard-handle', callback: (_source: this, handle: number) => boolean): number;
            emit(signal: 'discard-handle', handle: number): void;

            // Static methods

            /**
             * Initialize a session object from a raw PKCS#11 session handle.
             * Usually one would use the [method`Slot`.open_session] function to
             * create a session.
             * @param slot The slot which the session belongs to.
             * @param session_handle the raw PKCS#11 handle of the session
             * @param options Session options. Those which are used during opening a session have no effect.
             */
            static from_handle(slot: Slot, session_handle: number, options: SessionOptions): Session;
            /**
             * Open a session on the slot. This call may block for an indefinite period.
             * @param slot the slot to open session on
             * @param options session options
             * @param interaction optional interaction for logins or object authentication
             * @param cancellable optional cancellation object
             */
            static open(
                slot: Slot,
                options: SessionOptions,
                interaction?: Gio.TlsInteraction | null,
                cancellable?: Gio.Cancellable | null,
            ): Session;
            /**
             * Open a session on the slot. This call will return immediately and complete
             * asynchronously.
             * @param slot the slot to open session on
             * @param options session options
             * @param interaction optional interaction for logins or object authentication
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static open_async(
                slot: Slot,
                options: SessionOptions,
                interaction?: Gio.TlsInteraction | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Session> | null,
            ): void;
            /**
             * Get the result of an open session operation.
             * @param result the result passed to the callback
             */
            static open_finish(result: Gio.AsyncResult): Session;

            // Methods

            /**
             * Create a new PKCS#11 object. This call may block for an
             * indefinite period.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param attrs The attributes to create the object with.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns the newly created object or %NULL if an error occurred
             */
            create_object(attrs: Attributes, cancellable?: Gio.Cancellable | null): Object;
            /**
             * Create a new PKCS#11 object. This call will return immediately
             * and complete asynchronously.
             *
             * If `attrs` is a floating reference, it is consumed.
             * @param attrs The attributes to create the object with.
             * @param cancellable Optional cancellation object or %NULL.
             * @param callback Called when the operation completes.
             */
            create_object_async(
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of creating a new PKCS#11 object.
             * @param result The result passed to the callback.
             * @returns the newly created object or %NULL if an error occurred
             */
            create_object_finish(result: Gio.AsyncResult): Object;
            /**
             * Decrypt data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to decrypt with.
             * @param mech_type The mechanism type to use for decryption.
             * @param input data to decrypt
             * @param cancellable Optional cancellation object, or %NULL
             * @returns the data that was decrypted,          or %NULL if an error occured
             */
            decrypt(
                key: Object,
                mech_type: number,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): Uint8Array;
            /**
             * Decrypt data in a mechanism specific manner. This call will
             * return immediately and complete asynchronously.
             * @param key The key to decrypt with.
             * @param mechanism The mechanism type and parameters to use for decryption.
             * @param input data to decrypt
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @param callback Called when the operation completes.
             */
            decrypt_async(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an decryption operation.
             * @param result The result object passed to the callback.
             * @returns the data that was decrypted,          or %NULL if an error occurred
             */
            decrypt_finish(result: Gio.AsyncResult): Uint8Array;
            /**
             * Decrypt data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to decrypt with.
             * @param mechanism The mechanism type and parameters to use for decryption.
             * @param input data to decrypt
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @returns the data that was decrypted,          or %NULL if an error occured
             */
            decrypt_full(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): Uint8Array;
            /**
             * Derive a key from another key. This call may block for an
             * indefinite period.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param base The key to derive from.
             * @param mech_type The mechanism to use for derivation.
             * @param attrs Additional attributes for the derived key.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns the new derived key or %NULL if the operation          failed
             */
            derive_key(
                base: Object,
                mech_type: number,
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
            ): Object;
            /**
             * Derive a key from another key. This call will
             * return immediately and complete asynchronously.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param base The key to derive from.
             * @param mechanism The mechanism to use for derivation.
             * @param attrs Additional attributes for the derived key.
             * @param cancellable Optional cancellation object or %NULL.
             * @param callback Called when the operation completes.
             */
            derive_key_async(
                base: Object,
                mechanism: Mechanism,
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a derive key operation.
             * @param result The async result passed to the callback.
             * @returns the new derived key or %NULL if the operation          failed
             */
            derive_key_finish(result: Gio.AsyncResult): Object;
            /**
             * Derive a key from another key. This call may block for an
             * indefinite period.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param base The key to derive from.
             * @param mechanism The mechanism to use for derivation.
             * @param attrs Additional attributes for the derived key.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns the new derived key or %NULL if the operation          failed
             */
            derive_key_full(
                base: Object,
                mechanism: Mechanism,
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
            ): Object;
            /**
             * Encrypt data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to encrypt with.
             * @param mech_type The mechanism type to use for encryption.
             * @param input the data to encrypt
             * @param cancellable Optional cancellation object, or %NULL
             * @returns the data that was encrypted,          or %NULL if an error occured.
             */
            encrypt(
                key: Object,
                mech_type: number,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): Uint8Array;
            /**
             * Encrypt data in a mechanism specific manner. This call will
             * return immediately and complete asynchronously.
             * @param key The key to encrypt with.
             * @param mechanism The mechanism type and parameters to use for encryption.
             * @param input the data to encrypt
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @param callback Called when the operation completes.
             */
            encrypt_async(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an encryption operation.
             * @param result The result object passed to the callback.
             * @returns the data that was encrypted,          or %NULL if an error occurred.
             */
            encrypt_finish(result: Gio.AsyncResult): Uint8Array;
            /**
             * Encrypt data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to encrypt with.
             * @param mechanism The mechanism type and parameters to use for encryption.
             * @param input the data to encrypt
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @returns the data that was encrypted,          or %NULL if an error occured
             */
            encrypt_full(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): Uint8Array;
            /**
             * Setup an enumerator for listing matching objects available via this session.
             *
             * If `match` is a floating reference, it is consumed.
             *
             * This call will not block but will return an enumerator immediately.
             * @param match attributes that the objects must match, or empty for all objects
             * @returns a new enumerator
             */
            enumerate_objects(match: Attributes): Enumerator;
            /**
             * Find the objects matching the passed attributes. This call may
             * block for an indefinite period.
             *
             * If `match` is a floating reference, it is consumed.
             * @param match the attributes to match against objects
             * @param cancellable optional cancellation object or %NULL
             * @returns a list of          the matching objects, which may be empty
             */
            find_handles(match: Attributes, cancellable?: Gio.Cancellable | null): number[] | null;
            /**
             * Find the objects matching the passed attributes. This call will
             * return immediately and complete asynchronously.
             *
             * If `match` is a floating reference, it is consumed.
             * @param match the attributes to match against the objects
             * @param cancellable optional cancellation object or %NULL
             * @param callback called when the operation completes
             */
            find_handles_async(
                match: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a find handles operation.
             * @param result the asynchronous result
             * @returns an array of          handles that matched, which may be empty, or %NULL on failure
             */
            find_handles_finish(result: Gio.AsyncResult): number[] | null;
            /**
             * Find the objects matching the passed attributes. This call may
             * block for an indefinite period.
             *
             * If `match` is a floating reference, it is consumed.
             * @param match the attributes to match
             * @param cancellable Optional cancellation object or %NULL.
             * @returns a list of the matching          objects, which may be empty
             */
            find_objects(match: Attributes, cancellable?: Gio.Cancellable | null): Object[];
            /**
             * Find the objects matching the passed attributes. This call will
             * return immediately and complete asynchronously.
             *
             * If the `match` #GckAttributes is floating, it is consumed.
             * @param match The attributes to match.
             * @param cancellable Optional cancellation object or %NULL.
             * @param callback Called when the operation completes.
             */
            find_objects_async(
                match: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a find operation.
             * @param result The attributes to match.
             * @returns a list of the matching          objects, which may be empty
             */
            find_objects_finish(result: Gio.AsyncResult): Object[];
            /**
             * Generate a new key pair of public and private keys. This call may block for
             * an indefinite period.
             *
             * If `public_attrs` and/or `private_attrs` is a floating reference, it is
             * consumed.
             * @param mech_type The mechanism type to use for key generation.
             * @param public_attrs Additional attributes for the generated public key.
             * @param private_attrs Additional attributes for the generated private key.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns %TRUE if the operation succeeded.
             */
            generate_key_pair(
                mech_type: number,
                public_attrs: Attributes,
                private_attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Object | null, Object | null];
            /**
             * Generate a new key pair of public and private keys. This call will
             * return immediately and complete asynchronously.
             *
             * If `public_attrs` and/or `private_attrs` is a floating reference, it is
             * consumed.
             * @param mechanism The mechanism to use for key generation.
             * @param public_attrs Additional attributes for the generated public key.
             * @param private_attrs Additional attributes for the generated private key.
             * @param cancellable Optional cancellation object or %NULL.
             * @param callback Called when the operation completes.
             */
            generate_key_pair_async(
                mechanism: Mechanism,
                public_attrs: Attributes,
                private_attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a generate key pair operation.
             * @param result The async result passed to the callback.
             * @returns %TRUE if the operation succeeded.
             */
            generate_key_pair_finish(result: Gio.AsyncResult): [boolean, Object | null, Object | null];
            /**
             * Generate a new key pair of public and private keys. This call may block for an
             * indefinite period.
             *
             * If `public_attrs` and/or `private_attrs` is a floating reference, it is
             * consumed.
             * @param mechanism The mechanism to use for key generation.
             * @param public_attrs Additional attributes for the generated public key.
             * @param private_attrs Additional attributes for the generated private key.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns %TRUE if the operation succeeded.
             */
            generate_key_pair_full(
                mechanism: Mechanism,
                public_attrs: Attributes,
                private_attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Object | null, Object | null];
            /**
             * Get the raw PKCS#11 session handle from a session object.
             * @returns The raw session handle.
             */
            get_handle(): number;
            /**
             * Get information about the session.
             * @returns the session info. Use the gck_session_info_free()          to release when done
             */
            get_info(): SessionInfo;
            /**
             * Get the interaction object set on this session, which is used to prompt
             * for pins and the like.
             * @returns the interaction object, or %NULL
             */
            get_interaction(): Gio.TlsInteraction | null;
            /**
             * Get the PKCS#11 module to which this session belongs.
             * @returns the module, which should be unreffed after use
             */
            get_module(): Module;
            /**
             * Get the options this session was opened with.
             * @returns The session options.
             */
            get_options(): SessionOptions;
            /**
             * Get the PKCS#11 slot to which this session belongs.
             * @returns The slot, which should be unreffed after use.
             */
            get_slot(): Slot;
            /**
             * Get the session state. The state is the various PKCS#11 CKS_XXX flags.
             * @returns the session state
             */
            get_state(): number;
            /**
             * Initialize the user's pin on this slot that this session is opened on.
             * According to the PKCS#11 standards, the session must be logged in with
             * the CKU_SO user type.
             *
             * This call may block for an indefinite period.
             * @param pin the user's PIN, or %NULL for       protected authentication path
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns Whether successful or not.
             */
            init_pin(pin?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initialize the user's pin on this slot that this session is opened on.
             * According to the PKCS#11 standards, the session must be logged in with
             * the `CKU_SO` user type.
             *
             * This call will return immediately and completes asynchronously.
             * @param pin the user's PIN, or %NULL for protected authentication path
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            init_pin_async(
                pin?: Uint8Array | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of initializing a user's PIN.
             * @param result The result passed to the callback.
             * @returns Whether the operation was successful or not.
             */
            init_pin_finish(result: Gio.AsyncResult): boolean;
            /**
             * Login the user on the session. This call may block for
             * an indefinite period.
             * @param user_type The type of login user.
             * @param pin the user's PIN, or %NULL for       protected authentication path
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns Whether successful or not.
             */
            login(user_type: number, pin?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Login the user on the session. This call will return
             * immediately and completes asynchronously.
             * @param user_type The type of login user.
             * @param pin the user's PIN, or %NULL for       protected authentication path
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            login_async(
                user_type: number,
                pin?: Uint8Array | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a login operation.
             * @param result The result passed to the callback.
             * @returns Whether the operation was successful or not.
             */
            login_finish(result: Gio.AsyncResult): boolean;
            /**
             * Login the user on the session requesting the password interactively
             * when necessary. This call may block for an indefinite period.
             * @param user_type the type of login user
             * @param interaction interaction to request PIN when necessary
             * @param cancellable optional cancellation object, or %NULL
             * @returns Whether successful or not.
             */
            login_interactive(
                user_type: number,
                interaction?: Gio.TlsInteraction | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Login the user on the session prompting for passwords interactively when
             * necessary. This call will return immediately and completes asynchronously.
             * @param user_type the type of login user
             * @param interaction interaction to request PIN when necessary
             * @param cancellable optional cancellation object, or %NULL
             * @param callback called when the operation completes
             */
            login_interactive_async(
                user_type: number,
                interaction?: Gio.TlsInteraction | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a login operation.
             * @param result the result passed to the callback
             * @returns Whether the operation was successful or not.
             */
            login_interactive_finish(result: Gio.AsyncResult): boolean;
            /**
             * Log out of the session. This call may block for an indefinite period.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns Whether the logout was successful or not.
             */
            logout(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Log out of the session. This call returns immediately and completes
             * asynchronously.
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            logout_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Get the result of logging out of a session.
             * @param result The result passed to the callback.
             * @returns Whether the logout was successful or not.
             */
            logout_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set the interaction object on this session, which is used to prompt for
             * pins and the like.
             * @param interaction the interaction or %NULL
             */
            set_interaction(interaction?: Gio.TlsInteraction | null): void;
            /**
             * Change the user's pin on this slot that this session is opened on.
             *
             * This call may block for an indefinite period.
             * @param old_pin the user's old PIN, or %NULL           for protected authentication path.
             * @param new_pin the user's new PIN, or %NULL           for protected authentication path
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns Whether successful or not.
             */
            set_pin(
                old_pin?: Uint8Array | null,
                new_pin?: Uint8Array | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Change the user's pin on this slot that this session is opened on.
             *
             * This call will return immediately and completes asynchronously.
             * @param old_pin the user's old PIN, or %NULL           for protected authentication path
             * @param n_old_pin the length of the old PIN
             * @param new_pin the user's new PIN, or %NULL           for protected authentication path
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            set_pin_async(
                old_pin: Uint8Array | null,
                n_old_pin: number,
                new_pin?: Uint8Array | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of changing a user's PIN.
             * @param result The result passed to the callback.
             * @returns Whether the operation was successful or not.
             */
            set_pin_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sign data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to sign with.
             * @param mech_type The mechanism type to use for signing.
             * @param input data to sign
             * @param cancellable Optional cancellation object, or %NULL
             * @returns the data that was signed,          or %NULL if an error occured
             */
            sign(
                key: Object,
                mech_type: number,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): Uint8Array;
            /**
             * Sign data in a mechanism specific manner. This call will
             * return immediately and complete asynchronously.
             * @param key The key to sign with.
             * @param mechanism The mechanism type and parameters to use for signing.
             * @param input data to sign
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @param callback Called when the operation completes.
             */
            sign_async(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an signing operation.
             * @param result The result object passed to the callback.
             * @returns the data that was signed,          or %NULL if an error occurred
             */
            sign_finish(result: Gio.AsyncResult): Uint8Array;
            /**
             * Sign data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to sign with.
             * @param mechanism The mechanism type and parameters to use for signing.
             * @param input data to sign
             * @param n_result location to store the length of the result data
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @returns The data that was signed, or %NULL if an error occured.
             */
            sign_full(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                n_result: number,
                cancellable?: Gio.Cancellable | null,
            ): number;
            /**
             * Unwrap a key from a byte stream. This call may block for an
             * indefinite period.
             *
             * If `attrs` is a floating reference, it is consumed.
             * @param wrapper The key to use for unwrapping.
             * @param mech_type The mechanism to use for unwrapping.
             * @param input the wrapped data as a byte stream
             * @param attrs Additional attributes for the unwrapped key.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns the new unwrapped key or %NULL if the          operation failed
             */
            unwrap_key(
                wrapper: Object,
                mech_type: number,
                input: Uint8Array | string,
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
            ): Object;
            /**
             * Unwrap a key from a byte stream. This call will
             * return immediately and complete asynchronously.
             *
             * If `attrs` is a floating reference, it is consumed.
             * @param wrapper The key to use for unwrapping.
             * @param mechanism The mechanism to use for unwrapping.
             * @param input the wrapped data as a byte stream
             * @param attrs Additional attributes for the unwrapped key.
             * @param cancellable Optional cancellation object or %NULL.
             * @param callback Called when the operation completes.
             */
            unwrap_key_async(
                wrapper: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a unwrap key operation.
             * @param result The async result passed to the callback.
             * @returns the new unwrapped key or %NULL if the operation          failed.
             */
            unwrap_key_finish(result: Gio.AsyncResult): Object;
            /**
             * Unwrap a key from a byte stream. This call may block for an
             * indefinite period.
             *
             * If `attrs` is a floating reference, it is consumed.
             * @param wrapper The key to use for unwrapping.
             * @param mechanism The mechanism to use for unwrapping.
             * @param input the wrapped data as a byte stream
             * @param attrs Additional attributes for the unwrapped key.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns the new unwrapped key or %NULL if the operation          failed
             */
            unwrap_key_full(
                wrapper: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                attrs: Attributes,
                cancellable?: Gio.Cancellable | null,
            ): Object;
            /**
             * Verify data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to verify with.
             * @param mech_type The mechanism type to use for verifying.
             * @param input data to verify
             * @param signature the signature
             * @param cancellable Optional cancellation object, or %NULL
             * @returns %TRUE if the data verified correctly, otherwise a failure or error occurred.
             */
            verify(
                key: Object,
                mech_type: number,
                input: Uint8Array | string,
                signature: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Verify data in a mechanism specific manner. This call returns
             * immediately and completes asynchronously.
             * @param key The key to verify with.
             * @param mechanism The mechanism type and parameters to use for signing.
             * @param input data to verify
             * @param signature the signature
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @param callback Called when the operation completes.
             */
            verify_async(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                signature: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an verify operation.
             * @param result The result object passed to the callback.
             * @returns %TRUE if the data verified correctly, otherwise a failure or error occurred.
             */
            verify_finish(result: Gio.AsyncResult): boolean;
            /**
             * Verify data in a mechanism specific manner. This call may
             * block for an indefinite period.
             * @param key The key to verify with.
             * @param mechanism The mechanism type and parameters to use for signing.
             * @param input data to verify
             * @param signature the signature
             * @param cancellable A GCancellable which can be used to cancel the operation.
             * @returns %TRUE if the data verified correctly, otherwise a failure or error occurred.
             */
            verify_full(
                key: Object,
                mechanism: Mechanism,
                input: Uint8Array | string,
                signature: Uint8Array | string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Wrap a key into a byte stream. This call may block for an
             * indefinite period.
             * @param wrapper The key to use for wrapping.
             * @param mech_type The mechanism type to use for wrapping.
             * @param wrapped The key to wrap.
             * @param cancellable A #GCancellable or %NULL
             * @returns the wrapped data or %NULL          if the operation failed
             */
            wrap_key(
                wrapper: Object,
                mech_type: number,
                wrapped: Object,
                cancellable?: Gio.Cancellable | null,
            ): Uint8Array;
            /**
             * Wrap a key into a byte stream. This call will
             * return immediately and complete asynchronously.
             * @param wrapper The key to use for wrapping.
             * @param mechanism The mechanism to use for wrapping.
             * @param wrapped The key to wrap.
             * @param cancellable Optional cancellation object or %NULL.
             * @param callback Called when the operation completes.
             */
            wrap_key_async(
                wrapper: Object,
                mechanism: Mechanism,
                wrapped: Object,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of a wrap key operation.
             * @param result The async result passed to the callback.
             * @returns the wrapped data or %NULL          if the operation failed
             */
            wrap_key_finish(result: Gio.AsyncResult): Uint8Array;
            /**
             * Wrap a key into a byte stream. This call may block for an
             * indefinite period.
             * @param wrapper The key to use for wrapping.
             * @param mechanism The mechanism to use for wrapping.
             * @param wrapped The key to wrap.
             * @param cancellable Optional cancellation object, or %NULL.
             * @returns the wrapped data or %NULL          if the operation failed
             */
            wrap_key_full(
                wrapper: Object,
                mechanism: Mechanism,
                wrapped: Object,
                cancellable?: Gio.Cancellable | null,
            ): Uint8Array;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): Session;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module Slot {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                handle: number;
                module: Module;
            }
        }

        /**
         * Represents a PKCS#11 slot that can contain a token.
         *
         * A PKCS#11 slot can contain a token. As an example, a slot might be a card
         * reader, and the token the card. If the PKCS#11 module is not a hardware
         * driver, often the slot and token are equivalent.
         */
        class Slot extends GObject.Object {
            static $gtype: GObject.GType<Slot>;

            // Properties

            /**
             * The raw CK_SLOT_ID handle of this slot.
             */
            get handle(): number;
            /**
             * The PKCS11 object that this slot is a part of.
             */
            get module(): Module;

            // Constructors

            constructor(properties?: Partial<Slot.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Create a new GckSlot object for a raw PKCS#11 handle.
             * @param module The module that this slot is on.
             * @param slot_id The raw PKCS#11 handle or slot id of this slot.
             */
            static from_handle(module: Module, slot_id: number): Slot;

            // Methods

            /**
             * Setup an enumerator for listing matching objects on the slot.
             *
             * If the `match` #GckAttributes is floating, it is consumed.
             *
             * This call will not block but will return an enumerator immediately.
             * @param match attributes that the objects must match, or empty for all objects
             * @param options options for opening a session
             * @returns a new enumerator
             */
            enumerate_objects(match: Attributes, options: SessionOptions): Enumerator;
            /**
             * Checks equality of two slots. Two GckSlot objects can point to the same
             * underlying PKCS#11 slot.
             * @param slot2 a pointer to the second #GckSlot
             * @returns %TRUE if slot1 and slot2 are equal.               %FALSE if either is not a GckSlot.
             */
            equal(slot2: Slot): boolean;
            /**
             * Get the raw PKCS#11 handle of a slot.
             * @returns the raw CK_SLOT_ID handle
             */
            get_handle(): number;
            /**
             * Get the information for this slot.
             * @returns the slot information, when done, use gck_slot_info_free()          to release it.
             */
            get_info(): SlotInfo;
            /**
             * Get information for the specified mechanism.
             * @param mech_type The mechanisms type to get info for.
             * @returns the mechanism information, or %NULL if failed; use          gck_mechanism_info_free() when done with it
             */
            get_mechanism_info(mech_type: number): MechanismInfo;
            /**
             * Get the available mechanisms for this slot.
             * @returns a list of the mechanisms          for this slot, which should be freed with g_array_free ()
             */
            get_mechanisms(): number[];
            /**
             * Get the module that this slot is on.
             * @returns The module, you must unreference this after          you're done with it.
             */
            get_module(): Module;
            /**
             * Get the token information for this slot.
             * @returns the token information; when done, use gck_token_info_free()          to release it
             */
            get_token_info(): TokenInfo;
            /**
             * Check if the PKCS11 slot has the given flags.
             * @param flags The flags to check.
             * @returns Whether one or more flags exist.
             */
            has_flags(flags: number): boolean;
            /**
             * Create a hash value for the GckSlot.
             *
             * This function is intended for easily hashing a GckSlot to add to
             * a GHashTable or similar data structure.
             * @returns An integer that can be used as a hash value, or 0 if invalid.
             */
            hash(): number;
            /**
             * Check whether the PKCS#11 URI matches the slot
             * @param uri the uri to match against the slot
             * @returns whether the URI matches or not
             */
            match(uri: UriData): boolean;
            /**
             * Open a session on the slot. If the 'auto reuse' setting is set,
             * then this may be a recycled session with the same flags.
             *
             * This call may block for an indefinite period.
             * @param options The #GckSessionOptions to open a session with.
             * @param cancellable An optional cancellation object, or %NULL.
             * @returns a new session or %NULL if an error occurs
             */
            open_session(options: SessionOptions, cancellable?: Gio.Cancellable | null): Session;
            /**
             * Open a session on the slot. If the 'auto reuse' setting is set,
             * then this may be a recycled session with the same flags.
             *
             * This call will return immediately and complete asynchronously.
             * @param options The options to open the new session with.
             * @param cancellable Optional cancellation object, or %NULL.
             * @param callback Called when the operation completes.
             */
            open_session_async(
                options: SessionOptions,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of an open session operation. If the 'auto reuse' setting is set,
             * then this may be a recycled session with the same flags.
             * @param result The result passed to the callback.
             * @returns the new session or %NULL if an error occurs
             */
            open_session_finish(result: Gio.AsyncResult): Session;
        }

        /**
         * This structure represents a PKCS#11 `CK_ATTRIBUTE`. These attributes contain
         * information about a PKCS#11 object. Use [method`Object`.get] or
         * [method`Object`.set] to set and attributes on an object.
         *
         * Although you are free to allocate a `GckAttribute` in your own code, no
         * functions in this library will operate on such an attribute.
         */
        class Attribute {
            static $gtype: GObject.GType<Attribute>;

            // Fields

            type: number;
            value: Uint8Array;
            length: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    type: number;
                    value: Uint8Array;
                    length: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](attr_type: number, value: number, length: number): Attribute;

            static new_boolean(attr_type: number, value: boolean): Attribute;

            static new_date(attr_type: number, value: GLib.Date): Attribute;

            static new_empty(attr_type: number): Attribute;

            static new_invalid(attr_type: number): Attribute;

            static new_string(attr_type: number, value: string): Attribute;

            static new_ulong(attr_type: number, value: number): Attribute;

            // Methods

            /**
             * Clear allocated memory held by a #GckAttribute.
             *
             * This attribute must have been allocated by a Gck library function, or
             * the results of this method are undefined.
             *
             * The type of the attribute will remain set.
             */
            clear(): void;
            /**
             * Dump the specified attribute using g_printerr().
             */
            dump(): void;
            /**
             * Duplicate the PKCS#11 attribute. All value memory is
             * also copied.
             *
             * The `attr` must have been allocated or initialized by a Gck function or
             * the results of this function are undefined.
             * @returns the duplicated attribute; use gck_attribute_free()          to free it
             */
            dup(): Attribute;
            /**
             * Compare two attributes. Useful with <code>GHashTable</code>.
             * @param attr2 second attribute to compare
             * @returns %TRUE if the attributes are equal.
             */
            equal(attr2: Attribute): boolean;
            /**
             * Free an attribute and its allocated memory. These is usually
             * used with attributes that are allocated by [ctor`Attribute`.new]
             * or a similar function.
             */
            free(): void;
            /**
             * Get the CK_BBOOL of a PKCS#11 attribute. No conversion
             * is performed. It is an error to pass an attribute to this
             * function unless you're know it's supposed to contain a
             * boolean value.
             * @returns The boolean value of the attribute.
             */
            get_boolean(): boolean;
            /**
             * Get the raw value in the attribute.
             *
             * This is useful from scripting languages. C callers will generally
             * access the #GckAttribute struct directly.
             *
             * This function will %NULL if the attribute contains empty or invalid
             * data. The returned data must not be modified and is only valid
             * as long as this `attribute`.
             * @returns the value data or %NULL
             */
            get_data(): Uint8Array;
            /**
             * Get the CK_DATE of a PKCS#11 attribute. No
             * conversion is performed. It is an error to pass an attribute
             * to this function unless you're know it's supposed to contain
             * a value of the right type.
             * @param value The date value to fill in with the parsed date.
             */
            get_date(value: GLib.Date): void;
            /**
             * Get the string value of a PKCS#11 attribute. No
             * conversion is performed. It is an error to pass an attribute
             * to this function unless you're know it's supposed to contain
             * a value of the right type.
             * @returns a null terminated string, to be freed with               g_free(), or %NULL if the value was invalid
             */
            get_string(): string | null;
            /**
             * Get the CK_ULONG value of a PKCS#11 attribute. No
             * conversion is performed. It is an error to pass an attribute
             * to this function unless you're know it's supposed to contain
             * a value of the right type.
             * @returns The ulong value of the attribute.
             */
            get_ulong(): number;
            /**
             * Hash an attribute for use in <code>GHashTable</code> keys.
             * @returns the hash code
             */
            hash(): number;
            /**
             * Initialize a PKCS#11 attribute as a copy of another attribute.
             * This copies the value memory as well.
             *
             * When done with the copied attribute you should use
             * [method`Attribute`.clear] to free the internal memory.
             * @param src An attribute to copy.
             */
            init_copy(src: Attribute): void;
            /**
             * Check if the PKCS#11 attribute represents 'invalid' or 'not found'
             * according to the PKCS#11 spec. That is, having length
             * of (CK_ULONG)-1.
             * @returns Whether the attribute represents invalid or not.
             */
            is_invalid(): boolean;
        }

        /**
         * A set of [struct`Attribute]` structures.
         *
         * These attributes contain information about a PKCS11 object. Use
         * [method`Object`.get] or [method`Object`.set] to set and retrieve attributes on
         * an object.
         */
        class Attributes {
            static $gtype: GObject.GType<Attributes>;

            // Constructors

            constructor(reserved: number);
            _init(...args: any[]): void;

            static ['new'](reserved: number): Attributes;

            // Methods

            /**
             * Get attribute at the specified index in the attribute array.
             *
             * Use [method`Attributes`.count] to determine how many attributes are
             * in the array.
             * @param index The attribute index to retrieve.
             * @returns the specified attribute
             */
            at(index: number): Attribute;
            /**
             * Check whether the attributes contain a certain attribute.
             * @param match The attribute to find
             * @returns %TRUE if the attributes contain the attribute.
             */
            contains(match: Attribute): boolean;
            /**
             * Get the number of attributes in this attribute array.
             * @returns The number of contained attributes.
             */
            count(): number;
            /**
             * Dump the attributes using g_printerr().
             */
            dump(): void;
            /**
             * Find an attribute with the specified type in the array.
             * @param attr_type The type of attribute to find.
             * @returns the first attribute found with the specified type,          or %NULL
             */
            find(attr_type: number): Attribute;
            /**
             * Find an attribute with the specified type in the array.
             *
             * The attribute (if found) must be of the right size to store
             * a boolean value (ie: CK_BBOOL). If the attribute is marked invalid
             * then it will be treated as not found.
             * @param attr_type The type of attribute to find.
             * @returns Whether a value was found or not.
             */
            find_boolean(attr_type: number): [boolean, boolean];
            /**
             * Find an attribute with the specified type in the array.
             *
             * The attribute (if found) must be of the right size to store
             * a date value (ie: CK_DATE). If the attribute is marked invalid
             * then it will be treated as not found.
             * @param attr_type The type of attribute to find.
             * @returns Whether a value was found or not.
             */
            find_date(attr_type: number): [boolean, GLib.Date];
            /**
             * Find an attribute with the specified type in the array.
             *
             * If the attribute is marked invalid then it will be treated as not found.
             * The resulting string will be null-terminated, and must be freed by the caller
             * using g_free().
             * @param attr_type The type of attribute to find.
             * @returns Whether a value was found or not.
             */
            find_string(attr_type: number): [boolean, string];
            /**
             * Find an attribute with the specified type in the array.
             *
             * The attribute (if found) must be of the right size to store
             * a unsigned long value (ie: CK_ULONG). If the attribute is marked invalid
             * then it will be treated as not found.
             * @param attr_type The type of attribute to find.
             * @returns Whether a value was found or not.
             */
            find_ulong(attr_type: number): [boolean, number];
            /**
             * Reference this attributes array.
             * @returns the attributes
             */
            ref(): Attributes;
            /**
             * #GckAttributes uses a floating reference count system. [method`Builder`.end]
             * and [ctor`Attributes`.new_empty] both return floating references.
             *
             * Calling this function on a `GckAttributes` with a floating
             * reference will convert the floating reference into a full reference.
             * Calling this function on a non-floating `GckAttributes` results
             * in an additional normal reference being added.
             *
             * In other words, if the `attrs` is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference.  If the `attrs` is not floating, then this call adds a
             * new normal reference increasing the reference count by one.
             *
             * All Gck library functions that assume ownership of floating references
             * are documented as such. Essentially any Gck function that performs
             * an operation using a #GckAttributes argument rather than operating on the
             * attributes themselves, will accept a floating reference.
             * @returns the referenced attributes
             */
            ref_sink(): Attributes;
            /**
             * Print out attributes to a string in aform that's useful for debugging
             * or logging.
             *
             * The format of the string returned may change in the future.
             * @returns a newly allocated string
             */
            to_string(): string;
            /**
             * Unreference this attribute array.
             *
             * When all outstanding references are gone, the array will be freed.
             */
            unref(): void;
        }

        /**
         * A builder for a set of attributes. Add attributes to a builder, and then use
         * [method`Builder`.end] to get the completed [struct`Attributes]`.
         *
         * The fields of #GckBuilder are private and not to be accessed directly.
         */
        class Builder {
            static $gtype: GObject.GType<Builder>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](flags: BuilderFlags): Builder;

            // Static methods

            /**
             * Unreferences a builder. If this was the last reference then the builder
             * is freed.
             *
             * It is an error to use this function on builders that were allocated on the
             * stack.
             * @param builder the builder
             */
            static unref(builder?: any | null): void;

            // Methods

            /**
             * Add all the `attrs` attributes to the builder. The attributes are added
             * uncondititionally whether or not attributes with the same types already
             * exist in the builder.
             *
             * As an optimization, the attribute memory values are automatically shared
             * between the attributes and the builder.
             * @param attrs the attributes to add
             */
            add_all(attrs: Attributes): void;
            /**
             * Add an attribute to the builder. The attribute is added unconditionally whether
             * or not an attribute with the same type already exists on the builder.
             *
             * The `attr` attribute must have been created or owned by the Gck library.
             * If you call this function on an arbitrary `GckAttribute` that is allocated on
             * the stack or elsewhere, then this will result in undefined behavior.
             *
             * As an optimization, the attribute memory value is automatically shared
             * between the attribute and the builder.
             * @param attr the attribute to add
             */
            add_attribute(attr: Attribute): void;
            /**
             * Add a new attribute to the builder for the boolean `value`.
             * Unconditionally adds a new attribute, even if one with the same `attr_type`
             * already exists.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            add_boolean(attr_type: number, value: boolean): void;
            /**
             * Add a new attribute to the builder with an arbitrary value. Unconditionally
             * adds a new attribute, even if one with the same `attr_type` already exists.
             *
             * The memory in `value` is copied by the builder.
             *
             * %NULL may be specified for the `value` argument, in which case an empty
             * attribute is created. [const`INVALID]` may be specified for the length, in
             * which case an invalid attribute is created in the PKCS#11 style.
             * @param attr_type the new attribute type
             * @param value the new attribute memory
             */
            add_data(attr_type: number, value?: Uint8Array | null): void;
            /**
             * Add a new attribute to the builder for the date `value`.
             * Unconditionally adds a new attribute, even if one with the same `attr_type`
             * already exists.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            add_date(attr_type: number, value: GLib.Date): void;
            /**
             * Add a new attribute to the builder that is empty. Unconditionally
             * adds a new attribute, even if one with the same `attr_type` already exists.
             * @param attr_type the new attribute type
             */
            add_empty(attr_type: number): void;
            /**
             * Add a new attribute to the builder that is invalid in the PKCS#11 sense.
             * Unconditionally adds a new attribute, even if one with the same `attr_type`
             * already exists.
             * @param attr_type the new attribute type
             */
            add_invalid(attr_type: number): void;
            /**
             * Add the attributes with the types in `only_types` from `attrs` to the
             * builder. The attributes are added uncondititionally whether or not
             * attributes with the same types already exist in the builder.
             *
             * ```c
             * // Add the CKA_ID and CKA_CLASS attributes from attrs to builder
             * gulong only[] = { CKA_ID, CKA_CLASS };
             * gck_builder_add_onlyv (builder, attrs, only, 2);
             * ```
             *
             * As an optimization, the attribute memory values are automatically shared
             * between the attributes and the builder.
             * @param attrs the attributes to add
             * @param only_types the types of attributes to add
             */
            add_only(attrs: Attributes, only_types: number[]): void;
            /**
             * Add a new attribute to the builder for the string `value` or %NULL.
             * Unconditionally adds a new attribute, even if one with the same `attr_type`
             * already exists.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            add_string(attr_type: number, value?: string | null): void;
            /**
             * Add a new attribute to the builder for the unsigned long `value`.
             * Unconditionally adds a new attribute, even if one with the same `attr_type`
             * already exists.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            add_ulong(attr_type: number, value: number): void;
            /**
             * Clear the builder and release all allocated memory. The builder may be used
             * again to build another set of attributes after this function call.
             *
             * If memory is shared between this builder and other attributes, then that
             * memory is only freed when both of them are cleared or unreferenced.
             */
            clear(): void;
            /**
             * Make a copy of the builder and its state. The new builder is allocated
             * with [ctor`Builder`.new] and should be freed with gck_builder_unref().
             *
             * Attribute value memory is automatically shared between the two builders,
             * and is only freed when both are gone.
             * @returns the builder copy, which should be freed with          gck_builder_unref().
             */
            copy(): Builder;
            /**
             * Complete the #GckBuilder, and return the attributes contained in the builder.
             * The #GckBuilder will be cleared after this function call, and it is no
             * longer necessary to use [method`Builder`.clear] on it, although it is also
             * permitted. The builder may be used again to build another set of attributes
             * after this function call.
             *
             * The returned set of attributes is floating, and should either be passed to
             * another gck library function which consumes this floating reference, or if
             * you wish to keep these attributes around you should ref them with
             * gck_attributes_ref_sink() and unref them later with gck_attributes_unref().
             * @returns a floating reference to the attributes created          in the builder
             */
            end(): Attributes;
            /**
             * Find an attribute in the builder. Both valid and invalid attributes (in
             * the PKCS#11 sense) are returned. If multiple attributes exist for the given
             * attribute type, then the first one is returned.
             *
             * The returned [struct`Attribute]` is owned by the builder and may not be
             * modified in any way. It is only valid until another attribute is added to or
             * set on the builder, or until the builder is cleared or unreferenced.
             * @param attr_type the type of attribute to find
             * @returns the attribute or %NULL if not found
             */
            find(attr_type: number): Attribute;
            /**
             * Find a boolean attribute in the builder that has the type `attr_type,` is
             * of the correct boolean size, and is not invalid in the PKCS#11 sense.
             * If multiple attributes exist for the given attribute type, then the first\
             * one is returned.
             * @param attr_type the type of attribute to find
             * @returns whether a valid boolean attribute was found
             */
            find_boolean(attr_type: number): [boolean, boolean];
            /**
             * Find a date attribute in the builder that has the type `attr_type,` is of
             * the correct date size, and is not invalid in the PKCS#11 sense.
             * If multiple attributes exist for the given attribute type, then the first
             * one is returned.
             * @param attr_type the type of attribute to find
             * @returns whether a valid date attribute was found
             */
            find_date(attr_type: number): [boolean, GLib.Date];
            /**
             * Find a string attribute in the builder that has the type `attr_type,` has a
             * non %NULL value pointer, and is not invalid in the PKCS#11 sense.
             * If multiple attributes exist for the given attribute type, then the first
             * one is returned.
             * @param attr_type the type of attribute to find
             * @returns whether a valid string attribute was found
             */
            find_string(attr_type: number): [boolean, string];
            /**
             * Find a unsigned long attribute in the builder that has the type `attr_type,`
             * is of the correct unsigned long size, and is not invalid in the PKCS#11 sense.
             * If multiple attributes exist for the given attribute type, then the first
             * one is returned.
             * @param attr_type the type of attribute to find
             * @returns whether a valid unsigned long attribute was found
             */
            find_ulong(attr_type: number): [boolean, number];
            /**
             * Initialize a stack allocated builder, with the default flags.
             *
             * This is equivalent to initializing a builder variable with the
             * %GCK_BUILDER_INIT constant, or setting it to zeroed memory.
             *
             * ```c
             * // Equivalent ways of initializing a GckBuilder
             * GckBuilder builder = GCK_BUILDER_INIT;
             * GckBuilder builder2;
             * GckBuilder builder3;
             *
             * gck_builder_init (&builder2);
             *
             * memset (&builder3, 0, sizeof (builder3));
             * ```
             */
            init(): void;
            /**
             * Initialize a stack allocated builder, with the appropriate flags.
             *
             * If the %GCK_BUILDER_SECURE_MEMORY flag is specified then non-pageable memory
             * will be used for the various values of the attributes in the builder
             * @param flags the flags for the new builder
             */
            init_full(flags: BuilderFlags): void;
            /**
             * Add a reference to a builder that was created with [ctor`Builder`.new]. The
             * builder must later be unreferenced again with gck_builder_unref().
             *
             * It is an error to use this function on builders that were allocated on the
             * stack.
             * @returns the builder
             */
            ref(): Builder;
            /**
             * Set all the `attrs` attributes to the builder. If any attributes with the
             * same types are already present in the builder, then those attributes are
             * changed to the new values.
             *
             * As an optimization, the attribute memory values are automatically shared
             * between the attributes and the builder.
             * @param attrs the attributes to set
             */
            set_all(attrs: Attributes): void;
            /**
             * Set an attribute on the builder for the boolean `value`.
             * If an attribute with `attr_type` already exists in the builder then it is
             * changed to the new value, otherwise an attribute is added.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            set_boolean(attr_type: number, value: boolean): void;
            /**
             * Set a new attribute to the builder with an arbitrary value. If an attribute
             * with `attr_type` already exists in the builder then it is changed to the new
             * value, otherwise an attribute is added.
             *
             * The memory in `value` is copied by the builder.
             *
             * %NULL may be specified for the `value` argument, in which case an empty
             * attribute is created. [const`INVALID]` may be specified for the length, in
             * which case an invalid attribute is created in the PKCS#11 style.
             * @param attr_type the attribute type
             * @param value the new attribute memory
             */
            set_data(attr_type: number, value?: Uint8Array | null): void;
            /**
             * Set an attribute on the builder for the date `value`.
             * If an attribute with `attr_type` already exists in the builder then it is
             * changed to the new value, otherwise an attribute is added.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            set_date(attr_type: number, value: GLib.Date): void;
            /**
             * Set an attribute on the builder that is empty. If an attribute
             * with `attr_type` already exists in the builder then it is changed to the new
             * value, otherwise an attribute is added.
             * @param attr_type the attribute type
             */
            set_empty(attr_type: number): void;
            /**
             * Set an attribute on the builder that is invalid in the PKCS#11 sense.
             * If an attribute with `attr_type` already exists in the builder then it is
             * changed to the new value, otherwise an attribute is added.
             * @param attr_type the attribute type
             */
            set_invalid(attr_type: number): void;
            /**
             * Set an attribute on the builder for the string `value` or %NULL.
             * If an attribute with `attr_type` already exists in the builder then it is
             * changed to the new value, otherwise an attribute is added.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            set_string(attr_type: number, value: string): void;
            /**
             * Set an attribute on the builder for the unsigned long `value`.
             * If an attribute with `attr_type` already exists in the builder then it is
             * changed to the new value, otherwise an attribute is added.
             * @param attr_type the new attribute type
             * @param value the attribute value
             */
            set_ulong(attr_type: number, value: number): void;
            /**
             * Take the attributes that have been built in the #GckBuilder. The builder
             * will no longer contain any attributes after this function call.
             *
             * The returned set of attributes is a full reference, not floating.
             * @returns the stolen attributes, which should be freed with          gck_attributes_unref()
             */
            steal(): Attributes;
            /**
             * Add a new attribute to the builder with an arbitrary value. Unconditionally
             * adds a new attribute, even if one with the same `attr_type` already exists.
             *
             * Ownership of the `value` memory is taken by the builder, may be reallocated,
             * and is eventually freed with g_free(). The memory must have been allocated
             * using the standard GLib memory allocation routines.
             *
             * %NULL may be specified for the `value` argument, in which case an empty
             * attribute is created. [const`INVALID]` may be specified for the length, in
             * which case an invalid attribute is created in the PKCS#11 style.
             * @param attr_type the new attribute type
             * @param value the new         attribute memory
             */
            take_data(attr_type: number, value?: Uint8Array | null): void;
        }

        type EnumeratorClass = typeof Enumerator;
        abstract class EnumeratorPrivate {
            static $gtype: GObject.GType<EnumeratorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Represents a mechanism used with crypto operations.
         */
        class Mechanism {
            static $gtype: GObject.GType<Mechanism>;

            // Fields

            type: number;
            parameter: any;
            n_parameter: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    type: number;
                    parameter: any;
                    n_parameter: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Represents information about a PKCS11 mechanism.
         *
         * This is analogous to a CK_MECHANISM_INFO structure.
         *
         * When you're done with this structure it should be released with
         * gck_mechanism_info_free().
         */
        class MechanismInfo {
            static $gtype: GObject.GType<MechanismInfo>;

            // Fields

            min_key_size: number;
            max_key_size: number;
            flags: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    min_key_size: number;
                    max_key_size: number;
                    flags: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Make a copy of the mechanism info.
             * @returns a newly allocated copy mechanism info
             */
            copy(): MechanismInfo;
            /**
             * Free the GckMechanismInfo and associated resources.
             */
            free(): void;
        }

        type ModuleClass = typeof Module;
        /**
         * Holds information about the PKCS#11 module.
         *
         * This structure corresponds to `CK_MODULE_INFO` in the PKCS#11 standard. The
         * strings are %NULL terminated for easier use.
         *
         * Use gck_module_info_free() to release this structure when done with it.
         */
        class ModuleInfo {
            static $gtype: GObject.GType<ModuleInfo>;

            // Fields

            pkcs11_version_major: number;
            pkcs11_version_minor: number;
            manufacturer_id: string;
            flags: number;
            library_description: string;
            library_version_major: number;
            library_version_minor: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    pkcs11_version_major: number;
                    pkcs11_version_minor: number;
                    manufacturer_id: string;
                    flags: number;
                    library_description: string;
                    library_version_major: number;
                    library_version_minor: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Make a copy of the module info.
             * @returns a newly allocated copy module info
             */
            copy(): ModuleInfo;
            /**
             * Free a GckModuleInfo structure.
             */
            free(): void;
        }

        abstract class ModulePrivate {
            static $gtype: GObject.GType<ModulePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ObjectCacheIface = typeof ObjectCache;
        type ObjectClass = typeof Object;
        abstract class ObjectPrivate {
            static $gtype: GObject.GType<ObjectPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PasswordClass = typeof Password;
        abstract class PasswordPrivate {
            static $gtype: GObject.GType<PasswordPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SessionClass = typeof Session;
        /**
         * Information about the session. This is analogous to a CK_SESSION_INFO structure.
         *
         * When done with this structure, release it using gck_session_info_free().
         */
        class SessionInfo {
            static $gtype: GObject.GType<SessionInfo>;

            // Fields

            slot_id: number;
            state: number;
            flags: number;
            device_error: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    slot_id: number;
                    state: number;
                    flags: number;
                    device_error: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Make a new copy of a session info structure.
             * @returns a new copy of the session info
             */
            copy(): SessionInfo;
            /**
             * Free the GckSessionInfo structure and all associated memory.
             */
            free(): void;
        }

        abstract class SessionPrivate {
            static $gtype: GObject.GType<SessionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SlotClass = typeof Slot;
        /**
         * Represents information about a PKCS11 slot.
         *
         * This is analogous to a CK_SLOT_INFO structure, but the
         * strings are far more usable.
         *
         * When you're done with this structure it should be released with
         * gck_slot_info_free().
         */
        class SlotInfo {
            static $gtype: GObject.GType<SlotInfo>;

            // Fields

            slot_description: string;
            manufacturer_id: string;
            flags: number;
            hardware_version_major: number;
            hardware_version_minor: number;
            firmware_version_major: number;
            firmware_version_minor: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    slot_description: string;
                    manufacturer_id: string;
                    flags: number;
                    hardware_version_major: number;
                    hardware_version_minor: number;
                    firmware_version_major: number;
                    firmware_version_minor: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Make a copy of the slot info.
             * @returns a newly allocated copy slot info
             */
            copy(): SlotInfo;
            /**
             * Free the GckSlotInfo and associated resources.
             */
            free(): void;
        }

        abstract class SlotPrivate {
            static $gtype: GObject.GType<SlotPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Represents information about a PKCS11 token.
         *
         * This is analogous to a CK_TOKEN_INFO structure, but the
         * strings are far more usable.
         *
         * When you're done with this structure it should be released with
         * gck_token_info_free().
         */
        class TokenInfo {
            static $gtype: GObject.GType<TokenInfo>;

            // Fields

            label: string;
            manufacturer_id: string;
            model: string;
            serial_number: string;
            flags: number;
            max_session_count: number;
            session_count: number;
            max_rw_session_count: number;
            rw_session_count: number;
            max_pin_len: number;
            min_pin_len: number;
            total_public_memory: number;
            free_public_memory: number;
            total_private_memory: number;
            free_private_memory: number;
            hardware_version_major: number;
            hardware_version_minor: number;
            firmware_version_major: number;
            firmware_version_minor: number;
            utc_time: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    manufacturer_id: string;
                    model: string;
                    serial_number: string;
                    flags: number;
                    max_session_count: number;
                    session_count: number;
                    max_rw_session_count: number;
                    rw_session_count: number;
                    max_pin_len: number;
                    min_pin_len: number;
                    total_public_memory: number;
                    free_public_memory: number;
                    total_private_memory: number;
                    free_private_memory: number;
                    hardware_version_major: number;
                    hardware_version_minor: number;
                    firmware_version_major: number;
                    firmware_version_minor: number;
                    utc_time: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Make a copy of the token info.
             * @returns a newly allocated copy token info
             */
            copy(): TokenInfo;
            /**
             * Free the GckTokenInfo and associated resources.
             */
            free(): void;
        }

        /**
         * Information about the contents of a PKCS#11 URI. Various fields may be %NULL
         * depending on the context that the URI was parsed for.
         *
         * Since PKCS#11 URIs represent a set which results from the intersections of
         * all of the URI parts, if `any_recognized` is set to %TRUE then usually the URI
         * should be treated as not matching anything.
         */
        class UriData {
            static $gtype: GObject.GType<UriData>;

            // Fields

            any_unrecognized: boolean;
            module_info: ModuleInfo;
            token_info: TokenInfo;

            // Constructors

            constructor(
                properties?: Partial<{
                    any_unrecognized: boolean;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): UriData;

            // Methods

            /**
             * Copy a #GckUriData
             * @returns newly allocated copy of the uri data
             */
            copy(): UriData;
            /**
             * Free a #GckUriData.
             */
            free(): void;
        }

        module ObjectCache {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                attributes: Attributes;
            }
        }

        export interface ObjectCacheNamespace {
            $gtype: GObject.GType<ObjectCache>;
            prototype: ObjectCache;
        }
        interface ObjectCache extends Object {
            // Properties

            /**
             * The attributes cached on this object.
             */
            get attributes(): Attributes;
            set attributes(val: Attributes);

            // Methods

            /**
             * Adds the attributes to the set cached on this object. If an attribute is
             * already present in the cache it will be overridden by this value.
             *
             * This will be done in a thread-safe manner.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param attrs the attributes to cache
             */
            fill(attrs: Attributes): void;
            /**
             * Sets the attributes cached on this object.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param attrs the attributes to set
             */
            set_attributes(attrs?: Attributes | null): void;
            /**
             * Update the object cache with given attributes. If an attribute already
             * exists in the cache, it will be updated, and if it doesn't it will be added.
             *
             * This may block, use the asynchronous version when this is not desirable
             * @param attr_types the types of attributes to update
             * @param cancellable optional cancellation object
             * @returns whether the cache update was successful
             */
            update(attr_types: number[], cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Update the object cache with given attributes. If an attribute already
             * exists in the cache, it will be updated, and if it doesn't it will be added.
             *
             * This call will return immediately and complete asynchronously.
             * @param attr_types the types of attributes to update
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            update_async(
                attr_types: number[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an asynchronous operation to update the object cache with given
             * attributes.
             * @param result the asynchronous result passed to the callback
             * @returns whether the cache update was successful
             */
            update_finish(result: Gio.AsyncResult): boolean;

            // Virtual methods

            /**
             * Adds the attributes to the set cached on this object. If an attribute is
             * already present in the cache it will be overridden by this value.
             *
             * This will be done in a thread-safe manner.
             *
             * If the `attrs` #GckAttributes is floating, it is consumed.
             * @param attrs the attributes to cache
             */
            vfunc_fill(attrs: Attributes): void;
        }

        export const ObjectCache: ObjectCacheNamespace;

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

    export default Gck;
}

declare module 'gi://Gck' {
    import Gck1 from 'gi://Gck?version=1';
    export default Gck1;
}
// END
