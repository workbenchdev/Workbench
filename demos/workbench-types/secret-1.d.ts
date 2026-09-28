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

declare module 'gi://Secret?version=1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Secret {
        /**
         * Secret-1
         */

        /**
         * Flags which determine which parts of the #SecretBackend are initialized.
         */

        /**
         * Flags which determine which parts of the #SecretBackend are initialized.
         */
        export namespace BackendFlags {
            export const $gtype: GObject.GType<BackendFlags>;
        }

        enum BackendFlags {
            /**
             * no flags for initializing the #SecretBackend
             */
            NONE,
            /**
             * establish a session for transfer of secrets
             *   while initializing the #SecretBackend
             */
            OPEN_SESSION,
            /**
             * load collections while initializing the
             *   #SecretBackend
             */
            LOAD_COLLECTIONS,
        }
        /**
         * Errors returned by the Secret Service.
         *
         * None of the errors are appropriate for display to the user. It is up to the
         * application to handle them appropriately.
         */

        /**
         * Errors returned by the Secret Service.
         *
         * None of the errors are appropriate for display to the user. It is up to the
         * application to handle them appropriately.
         */
        export namespace Error {
            export const $gtype: GObject.GType<Error>;
        }

        enum Error {
            /**
             * received an invalid data or message from the Secret
             *   Service
             */
            PROTOCOL,
            /**
             * the item or collection is locked and the operation
             *   cannot be performed
             */
            IS_LOCKED,
            /**
             * no such item or collection found in the Secret
             *   Service
             */
            NO_SUCH_OBJECT,
            /**
             * a relevant item or collection already exists
             */
            ALREADY_EXISTS,
            /**
             * the file format is not valid
             */
            INVALID_FILE_FORMAT,
            /**
             * the xdg:schema attribute of the table does not match the schema name
             */
            MISMATCHED_SCHEMA,
            /**
             * attribute contained in table not found in corresponding schema
             */
            NO_MATCHING_ATTRIBUTE,
            /**
             * attribute could not be parsed according to its type reported in the table's
             * schema
             */
            WRONG_TYPE,
            /**
             * attribute list passed to secret_attributes_validate has no elements to
             * validate
             */
            EMPTY_TABLE,
        }
        /**
         * The type of an attribute in a [struct`SecretSchema]`.
         *
         * Attributes are stored as strings in the Secret Service, and the attribute
         * types simply define standard ways to store integer and boolean values as
         * strings.
         */

        /**
         * The type of an attribute in a [struct`SecretSchema]`.
         *
         * Attributes are stored as strings in the Secret Service, and the attribute
         * types simply define standard ways to store integer and boolean values as
         * strings.
         */
        export namespace SchemaAttributeType {
            export const $gtype: GObject.GType<SchemaAttributeType>;
        }

        enum SchemaAttributeType {
            /**
             * a utf-8 string attribute
             */
            STRING,
            /**
             * an integer attribute, stored as a decimal
             */
            INTEGER,
            /**
             * a boolean attribute, stored as 'true' or 'false'
             */
            BOOLEAN,
        }
        /**
         * Different types of schemas for storing secrets, intended for use with
         * [func`get_schema]`.
         *
         * ## `SECRET_SCHEMA_NOTE`
         *
         * A predefined schema for personal passwords stored by the user in the
         * password manager. This schema has no attributes, and the items are not
         * meant to be used automatically by applications.
         *
         * When used to search for items using this schema, it will only match
         * items that have the same schema. Items stored via libgnome-keyring with the
         * `GNOME_KEYRING_ITEM_NOTE` item type will match.
         *
         * ## `SECRET_SCHEMA_COMPAT_NETWORK`
         *
         * A predefined schema that is compatible with items stored via the
         * libgnome-keyring 'network password' functions. This is meant to be used by
         * applications migrating from libgnome-keyring which stored their secrets as
         * 'network passwords'. It is not recommended that new code use this schema.
         *
         * When used to search for items using this schema, it will only match
         * items that have the same schema. Items stored via libgnome-keyring with the
         * `GNOME_KEYRING_ITEM_NETWORK_PASSWORD` item type will match.
         *
         * The following attributes exist in the schema:
         *
         * ### Attributes:
         *
         * <table>
         *     <tr>
         *         <td><tt>user</tt>:</td>
         *         <td>The user name (string).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>domain</tt>:</td>
         *         <td>The login domain or realm (string).</td></tr>
         *     <tr>
         *         <td><tt>object</tt>:</td>
         *         <td>The object or path (string).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>protocol</tt>:</td>
         *         <td>The protocol (a string like 'http').</td>
         *     </tr>
         *     <tr>
         *         <td><tt>port</tt>:</td>
         *         <td>The network port (integer).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>server</tt>:</td>
         *         <td>The hostname or server (string).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>authtype</tt>:</td>
         *         <td>The authentication type (string).</td>
         *     </tr>
         * </table>
         */

        /**
         * Different types of schemas for storing secrets, intended for use with
         * [func`get_schema]`.
         *
         * ## `SECRET_SCHEMA_NOTE`
         *
         * A predefined schema for personal passwords stored by the user in the
         * password manager. This schema has no attributes, and the items are not
         * meant to be used automatically by applications.
         *
         * When used to search for items using this schema, it will only match
         * items that have the same schema. Items stored via libgnome-keyring with the
         * `GNOME_KEYRING_ITEM_NOTE` item type will match.
         *
         * ## `SECRET_SCHEMA_COMPAT_NETWORK`
         *
         * A predefined schema that is compatible with items stored via the
         * libgnome-keyring 'network password' functions. This is meant to be used by
         * applications migrating from libgnome-keyring which stored their secrets as
         * 'network passwords'. It is not recommended that new code use this schema.
         *
         * When used to search for items using this schema, it will only match
         * items that have the same schema. Items stored via libgnome-keyring with the
         * `GNOME_KEYRING_ITEM_NETWORK_PASSWORD` item type will match.
         *
         * The following attributes exist in the schema:
         *
         * ### Attributes:
         *
         * <table>
         *     <tr>
         *         <td><tt>user</tt>:</td>
         *         <td>The user name (string).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>domain</tt>:</td>
         *         <td>The login domain or realm (string).</td></tr>
         *     <tr>
         *         <td><tt>object</tt>:</td>
         *         <td>The object or path (string).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>protocol</tt>:</td>
         *         <td>The protocol (a string like 'http').</td>
         *     </tr>
         *     <tr>
         *         <td><tt>port</tt>:</td>
         *         <td>The network port (integer).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>server</tt>:</td>
         *         <td>The hostname or server (string).</td>
         *     </tr>
         *     <tr>
         *         <td><tt>authtype</tt>:</td>
         *         <td>The authentication type (string).</td>
         *     </tr>
         * </table>
         */
        export namespace SchemaType {
            export const $gtype: GObject.GType<SchemaType>;
        }

        enum SchemaType {
            /**
             * Personal passwords
             */
            NOTE,
            /**
             * Network passwords from older
             *    libgnome-keyring storage
             */
            COMPAT_NETWORK,
        }
        /**
         * Extension point for the secret backend.
         */
        const BACKEND_EXTENSION_POINT_NAME: string;
        /**
         * An alias to the default collection.
         *
         * This can be passed to [func`password_store]` [func`Collection`.for_alias].
         */
        const COLLECTION_DEFAULT: string;
        /**
         * An alias to the session collection, which will be cleared when the user ends
         * the session.
         *
         * This can be passed to [func`password_store]`, [func`Collection`.for_alias] or
         * similar functions.
         */
        const COLLECTION_SESSION: string;
        /**
         * The major version of libsecret.
         */
        const MAJOR_VERSION: number;
        /**
         * The micro version of libsecret.
         */
        const MICRO_VERSION: number;
        /**
         * The minor version of libsecret.
         */
        const MINOR_VERSION: number;
        /**
         * Check if attributes are valid according to the provided schema.
         *
         * Verifies schema name if available, attribute names and parsing
         * of attribute values.
         * @param schema the schema for the attributes
         * @param attributes the attributes to be validated
         * @returns whether or not the given attributes table is valid
         */
        function attributes_validate(
            schema: Schema,
            attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        ): boolean;
        /**
         * Get a #SecretBackend instance.
         *
         * If such a backend already exists, then the same backend is returned.
         *
         * If `flags` contains any flags of which parts of the secret backend to
         * ensure are initialized, then those will be initialized before completing.
         *
         * This method will return immediately and complete asynchronously.
         * @param flags flags for which service functionality to ensure is initialized
         * @param cancellable optional cancellation object
         */
        function backend_get(flags: BackendFlags, cancellable?: Gio.Cancellable | null): Promise<Backend>;
        /**
         * Get a #SecretBackend instance.
         *
         * If such a backend already exists, then the same backend is returned.
         *
         * If `flags` contains any flags of which parts of the secret backend to
         * ensure are initialized, then those will be initialized before completing.
         *
         * This method will return immediately and complete asynchronously.
         * @param flags flags for which service functionality to ensure is initialized
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function backend_get(
            flags: BackendFlags,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<BackendFlags> | null,
        ): void;
        /**
         * Get a #SecretBackend instance.
         *
         * If such a backend already exists, then the same backend is returned.
         *
         * If `flags` contains any flags of which parts of the secret backend to
         * ensure are initialized, then those will be initialized before completing.
         *
         * This method will return immediately and complete asynchronously.
         * @param flags flags for which service functionality to ensure is initialized
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function backend_get(
            flags: BackendFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<BackendFlags> | null,
        ): Promise<Backend> | void;
        /**
         * Complete an asynchronous operation to get a #SecretBackend.
         * @param result the asynchronous result passed to the callback
         * @returns a new reference to a #SecretBackend proxy, which   should be released with [method@GObject.Object.unref].
         */
        function backend_get_finish(result: Gio.AsyncResult): Backend;
        /**
         * Get the error quark.
         * @returns the quark
         */
        function error_get_quark(): GLib.Quark;
        /**
         * Get a secret storage schema of the given `type`.
         *
         * C code may access the schemas (such as %SECRET_SCHEMA_NOTE) directly, but
         * language bindings cannot, and must use this accessor.
         * @param type type of schema to get
         * @returns schema type
         */
        function get_schema(type: SchemaType): Schema;
        /**
         * Finish an asynchronous operation to remove passwords from the secret
         * service.
         * @param result the asynchronous result passed to the callback
         * @returns whether any passwords were removed
         */
        function password_clear_finish(result: Gio.AsyncResult): boolean;
        /**
         * Remove unlocked matching passwords from the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * All unlocked items that match the attributes will be deleted.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for the attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         */
        function password_clear(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Remove unlocked matching passwords from the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * All unlocked items that match the attributes will be deleted.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for the attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_clear(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Schema | null> | null,
        ): void;
        /**
         * Remove unlocked matching passwords from the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * All unlocked items that match the attributes will be deleted.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for the attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_clear(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Schema | null> | null,
        ): Promise<boolean> | void;
        /**
         * Remove unlocked matching passwords from the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * All unlocked items that match the attributes will be deleted.
         *
         * This method may block indefinitely and should not be used in user interface
         * threads.
         * @param schema the schema for the attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         * @returns whether any passwords were removed
         */
        function password_clear_sync(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Finish an asynchronous operation to lookup a password in the secret service.
         * @param result the asynchronous result passed to the callback
         * @returns a new password string which should be freed with   [func@password_free] or may be freed with [func@GLib.free] when done
         */
        function password_lookup_finish(result: Gio.AsyncResult): string;
        /**
         * Lookup a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If no secret is found then %NULL is returned.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         */
        function password_lookup(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable?: Gio.Cancellable | null,
        ): Promise<string>;
        /**
         * Lookup a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If no secret is found then %NULL is returned.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_lookup(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Schema | null> | null,
        ): void;
        /**
         * Lookup a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If no secret is found then %NULL is returned.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_lookup(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Schema | null> | null,
        ): Promise<string> | void;
        /**
         * Lookup a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If no secret is found then %NULL is returned.
         *
         * This method may block indefinitely and should not be used in user interface
         * threads.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param cancellable optional cancellation object
         * @returns a new password string which should be freed with   [func@password_free] or may be freed with [func@GLib.free] when done
         */
        function password_lookup_sync(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable?: Gio.Cancellable | null,
        ): string;
        /**
         * Finish an asynchronous operation to search for items in the secret service.
         * @param result the asynchronous result passed to the callback
         * @returns a list of   [iface@Retrievable] containing attributes of the matched items
         */
        function password_search_finish(result: Gio.AsyncResult): Retrievable[];
        /**
         * Search for items in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param flags search option flags
         * @param cancellable optional cancellation object
         */
        function password_search(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable?: Gio.Cancellable | null,
        ): Promise<Retrievable[]>;
        /**
         * Search for items in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param flags search option flags
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_search(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Schema | null> | null,
        ): void;
        /**
         * Search for items in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param flags search option flags
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_search(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Schema | null> | null,
        ): Promise<Retrievable[]> | void;
        /**
         * Search for items in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If no secret is found then %NULL is returned.
         *
         * This method may block indefinitely and should not be used in user interface
         * threads.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param flags search option flags
         * @param cancellable optional cancellation object
         * @returns a list of   [iface@Retrievable] containing attributes of the matched items
         */
        function password_search_sync(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable?: Gio.Cancellable | null,
        ): Retrievable[];
        /**
         * Finish asynchronous operation to store a password in the secret service.
         * @param result the asynchronous result passed to the callback
         * @returns whether the storage was successful or not
         */
        function password_store_finish(result: Gio.AsyncResult): boolean;
        /**
         * Store a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If the attributes match a secret item already stored in the collection, then
         * the item will be updated with these new values.
         *
         * If `collection` is %NULL, then the default collection will be
         * used. Use [const`COLLECTION_SESSION]` to store the password in the session
         * collection, which doesn't get stored across login sessions.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
         * @param label label for the secret
         * @param password the null-terminated password to store
         * @param cancellable optional cancellation object
         */
        function password_store(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string | null,
            label: string,
            password: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Store a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If the attributes match a secret item already stored in the collection, then
         * the item will be updated with these new values.
         *
         * If `collection` is %NULL, then the default collection will be
         * used. Use [const`COLLECTION_SESSION]` to store the password in the session
         * collection, which doesn't get stored across login sessions.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
         * @param label label for the secret
         * @param password the null-terminated password to store
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_store(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string | null,
            label: string,
            password: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Schema | null> | null,
        ): void;
        /**
         * Store a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If the attributes match a secret item already stored in the collection, then
         * the item will be updated with these new values.
         *
         * If `collection` is %NULL, then the default collection will be
         * used. Use [const`COLLECTION_SESSION]` to store the password in the session
         * collection, which doesn't get stored across login sessions.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
         * @param label label for the secret
         * @param password the null-terminated password to store
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_store(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string | null,
            label: string,
            password: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Schema | null> | null,
        ): Promise<boolean> | void;
        /**
         * Store a password in the secret service.
         *
         * This is similar to [func`password_storev]`, but takes a
         * [struct`Value]` as the argument instead of a null-terminated password.
         *
         * This method will return immediately and complete asynchronously.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
         * @param label label for the secret
         * @param value a [struct@Value]
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        function password_store_binary(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string | null,
            label: string,
            value: Value,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Schema | null> | null,
        ): void;
        /**
         * Store a password in the secret service.
         *
         * This is similar to [func`password_storev_sync]`, but takes a [struct`Value]` as
         * the argument instead of a null-terminated passwords.
         *
         * This method may block indefinitely and should not be used in user interface
         * threads.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
         * @param label label for the secret
         * @param value a [struct@Value]
         * @param cancellable optional cancellation object
         * @returns whether the storage was successful or not
         */
        function password_store_binary_sync(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string | null,
            label: string,
            value: Value,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Store a password in the secret service.
         *
         * The `attributes` should be a set of key and value string pairs.
         *
         * If the attributes match a secret item already stored in the collection, then
         * the item will be updated with these new values.
         *
         * If `collection` is %NULL, then the default collection will be
         * used. Use [const`COLLECTION_SESSION]` to store the password in the session
         * collection, which doesn't get stored across login sessions.
         *
         * This method may block indefinitely and should not be used in user interface
         * threads.
         * @param schema the schema for attributes
         * @param attributes the attribute keys and values
         * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
         * @param label label for the secret
         * @param password the null-terminated password to store
         * @param cancellable optional cancellation object
         * @returns whether the storage was successful or not
         */
        function password_store_sync(
            schema: Schema | null,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string | null,
            label: string,
            password: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Clear the memory used by a password.
         * @param password password to clear
         */
        function password_wipe(password?: string | null): void;
        /**
         * Flags for [func`Collection`.create].
         */

        /**
         * Flags for [func`Collection`.create].
         */
        export namespace CollectionCreateFlags {
            export const $gtype: GObject.GType<CollectionCreateFlags>;
        }

        enum CollectionCreateFlags {
            /**
             * no flags
             */
            NONE,
        }
        /**
         * Flags which determine which parts of the #SecretCollection proxy are initialized.
         */

        /**
         * Flags which determine which parts of the #SecretCollection proxy are initialized.
         */
        export namespace CollectionFlags {
            export const $gtype: GObject.GType<CollectionFlags>;
        }

        enum CollectionFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * items have or should be loaded
             */
            LOAD_ITEMS,
        }
        /**
         * Flags for [func`Item`.create].
         */

        /**
         * Flags for [func`Item`.create].
         */
        export namespace ItemCreateFlags {
            export const $gtype: GObject.GType<ItemCreateFlags>;
        }

        enum ItemCreateFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * replace an item with the same attributes.
             */
            REPLACE,
        }
        /**
         * Flags which determine which parts of the #SecretItem proxy are initialized.
         */

        /**
         * Flags which determine which parts of the #SecretItem proxy are initialized.
         */
        export namespace ItemFlags {
            export const $gtype: GObject.GType<ItemFlags>;
        }

        enum ItemFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * a secret has been (or should be) loaded for #SecretItem
             */
            LOAD_SECRET,
        }
        /**
         * Flags for a #SecretSchema definition.
         */

        /**
         * Flags for a #SecretSchema definition.
         */
        export namespace SchemaFlags {
            export const $gtype: GObject.GType<SchemaFlags>;
        }

        enum SchemaFlags {
            /**
             * no flags for the schema
             */
            NONE,
            /**
             * don't match the schema name when looking up or
             *   removing passwords
             */
            DONT_MATCH_NAME,
        }
        /**
         * Various flags to be used with [method`Service`.search] and [method`Service`.search_sync].
         */

        /**
         * Various flags to be used with [method`Service`.search] and [method`Service`.search_sync].
         */
        export namespace SearchFlags {
            export const $gtype: GObject.GType<SearchFlags>;
        }

        enum SearchFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * all the items matching the search will be returned, instead of just the first one
             */
            ALL,
            /**
             * unlock locked items while searching
             */
            UNLOCK,
            /**
             * while searching load secrets for items that are not locked
             */
            LOAD_SECRETS,
        }
        /**
         * Flags which determine which parts of the #SecretService proxy are initialized
         * during a [func`Service`.get] or [func`Service`.open] operation.
         */

        /**
         * Flags which determine which parts of the #SecretService proxy are initialized
         * during a [func`Service`.get] or [func`Service`.open] operation.
         */
        export namespace ServiceFlags {
            export const $gtype: GObject.GType<ServiceFlags>;
        }

        enum ServiceFlags {
            /**
             * no flags for initializing the #SecretService
             */
            NONE,
            /**
             * establish a session for transfer of secrets
             *   while initializing the #SecretService
             */
            OPEN_SESSION,
            /**
             * load collections while initializing the
             *   #SecretService
             */
            LOAD_COLLECTIONS,
        }
        module Collection {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusProxy.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                created: number;
                flags: CollectionFlags;
                label: string;
                locked: boolean;
                modified: number;
                service: Service;
            }
        }

        /**
         * A proxy object representing a collection of secrets in the Secret Service.
         *
         * #SecretCollection represents a collection of secret items stored in the
         * Secret Service.
         *
         * A collection can be in a locked or unlocked state. Use
         * [method`SecretService`.lock] or [method`SecretService`.unlock] to lock or
         * unlock the collection.
         *
         * Use the [property`SecretCollection:`items] property or
         * [method`SecretCollection`.get_items] to lookup the items in the collection.
         * There may not be any items exposed when the collection is locked.
         */
        class Collection
            extends Gio.DBusProxy
            implements Gio.AsyncInitable<Collection>, Gio.DBusInterface, Gio.Initable
        {
            static $gtype: GObject.GType<Collection>;

            // Properties

            /**
             * The date and time (in seconds since the UNIX epoch) that this
             * collection was created.
             */
            get created(): number;
            set created(val: number);
            /**
             * A set of flags describing which parts of the secret collection have
             * been initialized.
             */
            get flags(): CollectionFlags;
            /**
             * The human readable label for the collection.
             *
             * Setting this property will result in the label of the collection being
             * set asynchronously. To properly track the changing of the label use the
             * [method`Collection`.set_label] function.
             */
            get label(): string;
            set label(val: string);
            /**
             * Whether the collection is locked or not.
             *
             * To lock or unlock a collection use the [method`Service`.lock] or
             * [method`Service`.unlock] functions.
             */
            get locked(): boolean;
            /**
             * The date and time (in seconds since the UNIX epoch) that this
             * collection was last modified.
             */
            get modified(): number;
            set modified(val: number);
            /**
             * The [class`Service]` object that this collection is associated with and
             * uses to interact with the actual D-Bus Secret Service.
             */
            get service(): Service;

            // Constructors

            constructor(properties?: Partial<Collection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Create a new collection in the secret service.
             *
             * This method returns immediately and completes asynchronously. The secret
             * service may prompt the user. [method`Service`.prompt] will be used to handle
             * any prompts that are required.
             *
             * An `alias` is a well-known tag for a collection, such as 'default' (ie: the
             * default collection to store items in). This allows other applications to
             * easily identify and share a collection. If you specify an `alias,` and a
             * collection with that alias already exists, then a new collection will not
             * be created. The previous one will be returned instead.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get the
             * default [class`Service]` proxy.
             * @param service a secret service object
             * @param label label for the new collection
             * @param alias alias to assign to the collection
             * @param flags currently unused
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static create(
                service: Service | null,
                label: string,
                alias: string | null,
                flags: CollectionCreateFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Collection> | null,
            ): void;
            /**
             * Finish operation to create a new collection in the secret service.
             * @param result the asynchronous result passed to the callback
             */
            static create_finish(result: Gio.AsyncResult): Collection;
            /**
             * Create a new collection in the secret service.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads. The secret service may prompt the user. [method`Service`.prompt]
             * will be used to handle any prompts that are required.
             *
             * An `alias` is a well-known tag for a collection, such as `default` (ie: the
             * default collection to store items in). This allows other applications to
             * easily identify and share a collection. If you specify an `alias,` and a
             * collection with that alias already exists, then a new collection will not
             * be created. The previous one will be returned instead.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get the
             * default [class`Service]` proxy.
             * @param service a secret service object
             * @param label label for the new collection
             * @param alias alias to assign to the collection
             * @param flags currently unused
             * @param cancellable optional cancellation object
             */
            static create_sync(
                service: Service | null,
                label: string,
                alias: string | null,
                flags: CollectionCreateFlags,
                cancellable?: Gio.Cancellable | null,
            ): Collection;
            /**
             * Lookup which collection is assigned to this alias. Aliases help determine
             * well known collections, such as 'default'.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get the
             * default [class`Service]` proxy.
             *
             * This method will return immediately and complete asynchronously.
             * @param service a secret service object
             * @param alias the alias to lookup
             * @param flags options for the collection initialization
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static for_alias(
                service: Service | null,
                alias: string,
                flags: CollectionFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Collection> | null,
            ): void;
            /**
             * Finish an asynchronous operation to lookup which collection is assigned
             * to an alias.
             * @param result asynchronous result passed to callback
             */
            static for_alias_finish(result: Gio.AsyncResult): Collection | null;
            /**
             * Lookup which collection is assigned to this alias. Aliases help determine
             * well known collections, such as `default`.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get the
             * default [class`Service]` proxy.
             *
             * This method may block and should not be used in user interface threads.
             * @param service a secret service object
             * @param alias the alias to lookup
             * @param flags options for the collection initialization
             * @param cancellable optional cancellation object
             */
            static for_alias_sync(
                service: Service | null,
                alias: string,
                flags: CollectionFlags,
                cancellable?: Gio.Cancellable | null,
            ): Collection | null;

            // Methods

            /**
             * Delete this collection.
             *
             * This method returns immediately and completes asynchronously. The secret
             * service may prompt the user. [method`Service`.prompt] will be used to handle
             * any prompts that show up.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            ['delete'](cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete operation to delete this collection.
             * @param result asynchronous result passed to the callback
             * @returns whether the collection was successfully deleted or not
             */
            delete_finish(result: Gio.AsyncResult): boolean;
            /**
             * Delete this collection.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads. The secret service may prompt the user. [method`Service`.prompt] will
             * be used to handle any prompts that show up.
             * @param cancellable optional cancellation object
             * @returns whether the collection was successfully deleted or not
             */
            delete_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Get the created date and time of the collection.
             *
             * The return value is the number of seconds since the unix epoch, January 1st
             * 1970.
             * @returns the created date and time
             */
            get_created(): number;
            /**
             * Get the flags representing what features of the #SecretCollection proxy
             * have been initialized.
             *
             * Use [method`Collection`.load_items] to initialize further features and change
             * the flags.
             * @returns the flags for features initialized
             */
            get_flags(): CollectionFlags;
            // Conflicted with Gio.DBusProxy.get_flags
            get_flags(...args: never[]): any;
            /**
             * Get the list of items in this collection.
             * @returns a list of items, when   done, the list should be freed with [func@GLib.List.free], and each item   should be released with [method@GObject.Object.unref]
             */
            get_items(): Item[];
            /**
             * Get the label of this collection.
             * @returns the label, which should be freed with   [func@GLib.free]
             */
            get_label(): string;
            /**
             * Get whether the collection is locked or not.
             *
             * Use [method`Service`.lock] or [method`Service`.unlock] to lock or unlock the
             * collection.
             * @returns whether the collection is locked or not
             */
            get_locked(): boolean;
            /**
             * Get the modified date and time of the collection.
             *
             * The return value is the number of seconds since the unix epoch, January 1st
             * 1970.
             * @returns the modified date and time
             */
            get_modified(): number;
            /**
             * Get the Secret Service object that this collection was created with.
             * @returns the Secret Service object
             */
            get_service(): Service;
            /**
             * Ensure that the #SecretCollection proxy has loaded all the items present
             * in the Secret Service.
             *
             * This affects the result of [method`Collection`.get_items].
             *
             * For collections returned from [method`Service`.get_collections] the items will
             * have already been loaded.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            load_items(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an asynchronous operation to ensure that the #SecretCollection proxy
             * has loaded all the items present in the Secret Service.
             * @param result the asynchronous result passed to the callback
             * @returns whether the load was successful or not
             */
            load_items_finish(result: Gio.AsyncResult): boolean;
            /**
             * Ensure that the #SecretCollection proxy has loaded all the items present
             * in the Secret Service. This affects the result of
             * [method`Collection`.get_items].
             *
             * For collections returned from [method`Service`.get_collections] the items
             * will have already been loaded.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param cancellable optional cancellation object
             * @returns whether the load was successful or not
             */
            load_items_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Refresh the properties on this collection. This fires off a request to
             * refresh, and the properties will be updated later.
             *
             * Calling this method is not normally necessary, as the secret service
             * will notify the client when properties change.
             */
            refresh(): void;
            /**
             * Search for items matching the `attributes` in the `collection`.
             * The `attributes` should be a table of string keys and string values.
             *
             * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
             * search will be returned. Otherwise only the first item will be returned.
             * This is almost always the unlocked item that was most recently stored.
             *
             * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
             * if necessary. In either case, locked and unlocked items will match the
             * search and be returned. If the unlock fails, the search does not fail.
             *
             * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items will have
             * their secret values loaded and available via [method`Item`.get_secret].
             *
             * This function returns immediately and completes asynchronously.
             * @param schema the schema for the attributes
             * @param attributes search for items matching these attributes
             * @param flags search option flags
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            search(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                flags: SearchFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to search for items in a collection.
             * @param result asynchronous result passed to callback
             * @returns a list of items that matched the search
             */
            search_finish(result: Gio.AsyncResult): Item[];
            /**
             * Search for items matching the `attributes` in the `collection`.
             * The `attributes` should be a table of string keys and string values.
             *
             * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
             * search will be returned. Otherwise only the first item will be returned.
             * This is almost always the unlocked item that was most recently stored.
             *
             * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
             * if necessary. In either case, locked and unlocked items will match the
             * search and be returned. If the unlock fails, the search does not fail.
             *
             * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items will have
             * their secret values loaded and available via [method`Item`.get_secret].
             *
             * This function may block indefinitely. Use the asynchronous version
             * in user interface threads.
             * @param schema the schema for the attributes
             * @param attributes search for items matching these attributes
             * @param flags search option flags
             * @param cancellable optional cancellation object
             * @returns a list of items that matched the search
             */
            search_sync(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                flags: SearchFlags,
                cancellable?: Gio.Cancellable | null,
            ): Item[];
            /**
             * Set the label of this collection.
             *
             * This function returns immediately and completes asynchronously.
             * @param label a new label
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            set_label(
                label: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to set the label of this collection.
             * @param result asynchronous result passed to callback
             * @returns whether the change was successful or not
             */
            set_label_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set the label of this collection.
             *
             * This function may block indefinitely. Use the asynchronous version
             * in user interface threads.
             * @param label a new label
             * @param cancellable optional cancellation object
             * @returns whether the change was successful or not
             */
            set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean;

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
            new_finish(res: Gio.AsyncResult): Collection;
            // Conflicted with Gio.DBusProxy.new_finish
            new_finish(...args: never[]): any;
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
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
             */
            get_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             * @returns A #GDBusInterfaceInfo. Do not free.
             */
            get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            set_object(object?: Gio.DBusObject | null): void;
            /**
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             */
            vfunc_dup_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             */
            vfunc_get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            vfunc_set_object(object?: Gio.DBusObject | null): void;
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

        module Item {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusProxy.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps,
                    Gio.Initable.ConstructorProps,
                    Retrievable.ConstructorProps {
                flags: ItemFlags;
                locked: boolean;
                service: Service;
            }
        }

        /**
         * A secret item
         *
         * #SecretItem represents a secret item stored in the Secret Service.
         *
         * Each item has a value, represented by a [struct`Value]`, which can be
         * retrieved by [method`Item`.get_secret] or set by [method`Item`.set_secret].
         * The item is only available when the item is not locked.
         *
         * Items can be locked or unlocked using the [method`Service`.lock] or
         * [method`Service`.unlock] functions. The Secret Service may not be able to
         * unlock individual items, and may unlock an entire collection when a single
         * item is unlocked.
         *
         * Each item has a set of attributes, which are used to locate the item later.
         * These are not stored or transferred in a secure manner. Each attribute has
         * a string name and a string value. Use [method`Service`.search] to search for
         * items based on their attributes, and [method`Item`.set_attributes] to change
         * the attributes associated with an item.
         *
         * Items can be created with [func`Item`.create] or [method`Service`.store].
         */
        class Item
            extends Gio.DBusProxy
            implements Gio.AsyncInitable<Item>, Gio.DBusInterface, Gio.Initable, Retrievable
        {
            static $gtype: GObject.GType<Item>;

            // Properties

            /**
             * A set of flags describing which parts of the secret item have
             * been initialized.
             */
            get flags(): ItemFlags;
            /**
             * Whether the item is locked or not.
             *
             * An item may not be independently lockable separate from other items in
             * its collection.
             *
             * To lock or unlock a item use the [method`Service`.lock] or
             * [method`Service`.unlock] functions.
             */
            get locked(): boolean;
            /**
             * The [class`Service]` object that this item is associated with and
             * uses to interact with the actual D-Bus Secret Service.
             */
            get service(): Service;

            // Constructors

            constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Create a new item in the secret service.
             *
             * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
             * service will search for an item matching the `attributes,` and update that item
             * instead of creating a new one.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads. The secret service may prompt the user. [method`Service`.prompt]
             * will be used to handle any prompts that are required.
             * @param collection a secret collection to create this item in
             * @param schema the schema for the attributes
             * @param attributes attributes for the new item
             * @param label label for the new item
             * @param value secret value for the new item
             * @param flags flags for the creation of the new item
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static create(
                collection: Collection,
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                label: string,
                value: Value,
                flags: ItemCreateFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Item> | null,
            ): void;
            /**
             * Finish operation to create a new item in the secret service.
             * @param result the asynchronous result passed to the callback
             */
            static create_finish(result: Gio.AsyncResult): Item;
            /**
             * Create a new item in the secret service.
             *
             * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
             * service will search for an item matching the `attributes,` and update that item
             * instead of creating a new one.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads. The secret service may prompt the user. [method`Service`.prompt]
             * will be used to handle any prompts that are required.
             * @param collection a secret collection to create this item in
             * @param schema the schema for the attributes
             * @param attributes attributes for the new item
             * @param label label for the new item
             * @param value secret value for the new item
             * @param flags flags for the creation of the new item
             * @param cancellable optional cancellation object
             */
            static create_sync(
                collection: Collection,
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                label: string,
                value: Value,
                flags: ItemCreateFlags,
                cancellable?: Gio.Cancellable | null,
            ): Item;
            /**
             * Load the secret values for a secret item stored in the service.
             *
             * The `items` must all have the same [property`Item:`service] property.
             *
             * This function returns immediately and completes asynchronously.
             * @param items the items to retrieve secrets for
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static load_secrets(
                items: Item[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Item> | null,
            ): void;
            /**
             * Complete asynchronous operation to load the secret values for
             * secret items stored in the service.
             *
             * Items that are locked will not have their secrets loaded.
             * @param result asynchronous result passed to callback
             */
            static load_secrets_finish(result: Gio.AsyncResult): boolean;
            /**
             * Load the secret values for a secret item stored in the service.
             *
             * The `items` must all have the same [property`Item:`service] property.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             *
             * Items that are locked will not have their secrets loaded.
             * @param items the items to retrieve secrets for
             * @param cancellable optional cancellation object
             */
            static load_secrets_sync(items: Item[], cancellable?: Gio.Cancellable | null): boolean;

            // Methods

            /**
             * Delete this item.
             *
             * This method returns immediately and completes asynchronously. The secret
             * service may prompt the user. [method`Service`.prompt] will be used to handle
             * any prompts that show up.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            ['delete'](cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete asynchronous operation to delete the secret item.
             * @param result asynchronous result passed to the callback
             * @returns whether the item was successfully deleted or not
             */
            delete_finish(result: Gio.AsyncResult): boolean;
            /**
             * Delete this secret item.
             *
             * This method may block indefinitely and should not be used in user
             * interface threads. The secret service may prompt the user.
             * [method`Service`.prompt] will be used to handle any prompts that show up.
             * @param cancellable optional cancellation object
             * @returns whether the item was successfully deleted or not
             */
            delete_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set the attributes of this item.
             *
             * The `attributes` are a mapping of string keys to string values.
             * Attributes are used to search for items. Attributes are not stored
             * or transferred securely by the secret service.
             *
             * Do not modify the attributes returned by this method. Use
             * [method`Item`.set_attributes] instead.
             * @returns a new reference   to the attributes, which should not be modified, and   released with [func@GLib.HashTable.unref]
             */
            get_attributes(): GLib.HashTable<string, string>;
            /**
             * Get the created date and time of the item.
             *
             * The return value is the number of seconds since the unix epoch, January 1st
             * 1970.
             * @returns the created date and time
             */
            get_created(): number;
            /**
             * Get the flags representing what features of the #SecretItem proxy
             * have been initialized.
             *
             * Use [method`Item`.load_secret] to initialize further features
             * and change the flags.
             * @returns the flags for features initialized
             */
            get_flags(): ItemFlags;
            // Conflicted with Gio.DBusProxy.get_flags
            get_flags(...args: never[]): any;
            /**
             * Get the label of this item.
             * @returns the label, which should be freed with [func@GLib.free]
             */
            get_label(): string;
            /**
             * Get whether the item is locked or not.
             *
             * Depending on the secret service an item may not be able to be locked
             * independently from the collection that it is in.
             * @returns whether the item is locked or not
             */
            get_locked(): boolean;
            /**
             * Get the modified date and time of the item.
             *
             * The return value is the number of seconds since the unix epoch, January 1st
             * 1970.
             * @returns the modified date and time
             */
            get_modified(): number;
            /**
             * Gets the name of the schema that this item was stored with. This is also
             * available at the `xdg:schema` attribute.
             * @returns the schema name
             */
            get_schema_name(): string | null;
            /**
             * Get the secret value of this item.
             *
             * If this item is locked or the secret has not yet been loaded then this will
             * return %NULL.
             *
             * To load the secret call the [method`Item`.load_secret] method.
             * @returns the secret value which should be   released with [method@Value.unref], or %NULL
             */
            get_secret(): Value | null;
            /**
             * Get the Secret Service object that this item was created with.
             * @returns the Secret Service object
             */
            get_service(): Service;
            /**
             * Load the secret value of this item.
             *
             * Each item has a single secret which might be a password or some
             * other secret binary value.
             *
             * This function will fail if the secret item is locked.
             *
             * This function returns immediately and completes asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            load_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete asynchronous operation to load the secret value of this item.
             *
             * The newly loaded secret value can be accessed by calling
             * [method`Item`.get_secret].
             * @param result asynchronous result passed to callback
             * @returns whether the secret item successfully loaded or not
             */
            load_secret_finish(result: Gio.AsyncResult): boolean;
            /**
             * Load the secret value of this item.
             *
             * Each item has a single secret which might be a password or some
             * other secret binary value.
             *
             * This function may block indefinitely. Use the asynchronous version
             * in user interface threads.
             * @param cancellable optional cancellation object
             * @returns whether the secret item successfully loaded or not
             */
            load_secret_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Refresh the properties on this item.
             *
             * This fires off a request to refresh, and the properties will be updated
             * later.
             *
             * Calling this method is not normally necessary, as the secret service
             * will notify the client when properties change.
             */
            refresh(): void;
            /**
             * Set the attributes of this item.
             *
             * The `attributes` are a mapping of string keys to string values.
             * Attributes are used to search for items. Attributes are not stored
             * or transferred securely by the secret service.
             *
             * This function returns immediately and completes asynchronously.
             * @param schema the schema for the attributes
             * @param attributes a new set of attributes
             * @param cancellable optional cancellation object
             * @param callback called when the asynchronous operation completes
             */
            set_attributes(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete operation to set the attributes of this item.
             * @param result asynchronous result passed to the callback
             * @returns whether the change was successful or not
             */
            set_attributes_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set the attributes of this item.
             *
             * The `attributes` are a mapping of string keys to string values.
             * Attributes are used to search for items. Attributes are not stored
             * or transferred securely by the secret service.
             *
             * This function may block indefinitely. Use the asynchronous version
             * in user interface threads.
             * @param schema the schema for the attributes
             * @param attributes a new set of attributes
             * @param cancellable optional cancellation object
             * @returns whether the change was successful or not
             */
            set_attributes_sync(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Set the label of this item.
             *
             * This function returns immediately and completes asynchronously.
             * @param label a new label
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            set_label(
                label: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to set the label of this collection.
             * @param result asynchronous result passed to callback
             * @returns whether the change was successful or not
             */
            set_label_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set the label of this item.
             *
             * This function may block indefinitely. Use the asynchronous version
             * in user interface threads.
             * @param label a new label
             * @param cancellable optional cancellation object
             * @returns whether the change was successful or not
             */
            set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set the secret value of this item.
             *
             * Each item has a single secret which might be a password or some
             * other secret binary value.
             *
             * This function returns immediately and completes asynchronously.
             * @param value a new secret value
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            set_secret(
                value: Value,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to set the secret value of this item.
             * @param result asynchronous result passed to callback
             * @returns whether the change was successful or not
             */
            set_secret_finish(result: Gio.AsyncResult): boolean;
            /**
             * Set the secret value of this item.
             *
             * Each item has a single secret which might be a password or some
             * other secret binary value.
             *
             * This function may block indefinitely. Use the asynchronous version
             * in user interface threads.
             * @param value a new secret value
             * @param cancellable optional cancellation object
             * @returns whether the change was successful or not
             */
            set_secret_sync(value: Value, cancellable?: Gio.Cancellable | null): boolean;

            // Inherited properties
            /**
             * The attributes set on this item.
             *
             * Attributes are used to locate an item. They are not guaranteed to be
             * stored or transferred securely.
             */
            get attributes(): GLib.HashTable<string, string>;
            set attributes(val: GLib.HashTable<string, string>);
            /**
             * The date and time (in seconds since the UNIX epoch) that this
             * item was created.
             */
            get created(): number;
            set created(val: number);
            /**
             * The human readable label for the item.
             */
            get label(): string;
            set label(val: string);
            /**
             * The date and time (in seconds since the UNIX epoch) that this
             * item was last modified.
             */
            get modified(): number;
            set modified(val: number);

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
            new_finish(res: Gio.AsyncResult): Item;
            // Conflicted with Gio.DBusProxy.new_finish
            new_finish(...args: never[]): any;
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
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
             */
            get_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             * @returns A #GDBusInterfaceInfo. Do not free.
             */
            get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            set_object(object?: Gio.DBusObject | null): void;
            /**
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             */
            vfunc_dup_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             */
            vfunc_get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            vfunc_set_object(object?: Gio.DBusObject | null): void;
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
             * Retrieve the secret value of this object.
             *
             * Each retrievable object has a single secret which might be a
             * password or some other secret binary value.
             *
             * This function returns immediately and completes asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete asynchronous operation to retrieve the secret value of this object.
             * @param result asynchronous result passed to callback
             * @returns the secret value which should be   released with [method@Value.unref], or %NULL
             */
            retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
            /**
             * Retrieve the secret value of this object synchronously.
             *
             * Each retrievable object has a single secret which might be a
             * password or some other secret binary value.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param cancellable optional cancellation object
             * @returns the secret value which should be   released with [method@Value.unref], or %NULL
             */
            retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null;
            /**
             * Retrieve the secret value of this object.
             *
             * Each retrievable object has a single secret which might be a
             * password or some other secret binary value.
             *
             * This function returns immediately and completes asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_retrieve_secret(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to retrieve the secret value of this object.
             * @param result asynchronous result passed to callback
             */
            vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
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

        module Prompt {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusProxy.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        /**
         * A prompt in the Service
         *
         * A proxy object representing a prompt that the Secret Service will display
         * to the user.
         *
         * Certain actions on the Secret Service require user prompting to complete,
         * such as creating a collection, or unlocking a collection. When such a prompt
         * is necessary, then a #SecretPrompt object is created by this library, and
         * passed to the [method`Service`.prompt] method. In this way it is handled
         * automatically.
         *
         * In order to customize prompt handling, override the
         * [vfunc`Service`.prompt_async] and [vfunc`Service`.prompt_finish] virtual
         * methods of the [class`Service]` class.
         */
        class Prompt extends Gio.DBusProxy implements Gio.AsyncInitable<Prompt>, Gio.DBusInterface, Gio.Initable {
            static $gtype: GObject.GType<Prompt>;

            // Constructors

            constructor(properties?: Partial<Prompt.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Runs a prompt and performs the prompting.
             *
             * Returns %TRUE if the prompt was completed and not dismissed.
             *
             * If `window_id` is non-null then it is used as an XWindow id on Linux. The API
             * expects this id to be converted to a string using the `%d` printf format. The
             * Secret Service can make its prompt transient for the window with this id. In
             * some Secret Service implementations this is not possible, so the behavior
             * depending on this should degrade gracefully.
             *
             * This method will return immediately and complete asynchronously.
             * @param window_id string form of XWindow id for parent window to be transient for
             * @param return_type the variant type of the prompt result
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            perform(
                window_id: string | null,
                return_type: GLib.VariantType,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to run a prompt and perform the prompting.
             *
             * Returns a variant result if the prompt was completed and not dismissed. The
             * type of result depends on the action the prompt is completing, and is
             * defined in the Secret Service DBus API specification.
             * @param result the asynchronous result passed to the callback
             * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
             */
            perform_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Runs a prompt and performs the prompting.
             *
             * Returns a variant result if the prompt was completed and not dismissed. The
             * type of result depends on the action the prompt is completing, and is defined
             * in the Secret Service DBus API specification.
             *
             * If `window_id` is non-null then it is used as an XWindow id on Linux. The API
             * expects this id to be converted to a string using the `%d` printf format. The
             * Secret Service can make its prompt transient for the window with this id. In
             * some Secret Service implementations this is not possible, so the behavior
             * depending on this should degrade gracefully.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param window_id string form of XWindow id for parent window to be transient for
             * @param cancellable optional cancellation object
             * @param return_type the variant type of the prompt result
             * @returns %NULL if the prompt was dismissed or an error occurred
             */
            perform_sync(
                window_id: string | null,
                cancellable: Gio.Cancellable | null,
                return_type: GLib.VariantType,
            ): GLib.Variant;
            /**
             * Runs a prompt and performs the prompting.
             *
             * Returns a variant result if the prompt was completed and not dismissed. The
             * type of result depends on the action the prompt is completing, and is defined
             * in the Secret Service DBus API specification.
             *
             * If `window_id` is non-null then it is used as an XWindow id on Linux. The API
             * expects this id to be converted to a string using the `%d` printf format. The
             * Secret Service can make its prompt transient for the window with this id. In
             * some Secret Service implementations this is not possible, so the behavior
             * depending on this should degrade gracefully.
             *
             * This runs the dialog in a recursive mainloop. When run from a user interface
             * thread, this means the user interface will remain responsive. Care should be
             * taken that appropriate user interface actions are disabled while running the
             * prompt.
             * @param window_id string form of XWindow id for parent window to be transient for
             * @param cancellable optional cancellation object
             * @param return_type the variant type of the prompt result
             * @returns %NULL if the prompt was dismissed or an error occurred
             */
            run(
                window_id: string | null,
                cancellable: Gio.Cancellable | null,
                return_type: GLib.VariantType,
            ): GLib.Variant;

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
            new_finish(res: Gio.AsyncResult): Prompt;
            // Conflicted with Gio.DBusProxy.new_finish
            new_finish(...args: never[]): any;
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
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
             */
            get_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             * @returns A #GDBusInterfaceInfo. Do not free.
             */
            get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            set_object(object?: Gio.DBusObject | null): void;
            /**
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             */
            vfunc_dup_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             */
            vfunc_get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            vfunc_set_object(object?: Gio.DBusObject | null): void;
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

        module Service {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusProxy.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps,
                    Gio.Initable.ConstructorProps,
                    Backend.ConstructorProps {}
        }

        /**
         * A proxy object representing the Secret Service.
         *
         * A #SecretService object either represents an implementation of the
         * [`org.freedesktop.Secret`](https://specifications.freedesktop.org/secret-service/latest/)
         * D-Bus service or a file that is encrypted using a master secret that was
         * provided by the
         * [secret portal](https://flatpak.github.io/xdg-desktop-portal/docs/doc-org.freedesktop.portal.Secret.html).
         *
         * Normally a single #SecretService object can be shared between multiple
         * callers. The [func`Service`.get] method is used to access this #SecretService
         * object. If a new independent #SecretService object is required, use
         * [func`Service`.open].
         *
         * In order to securely transfer secrets to the Sercret Service, a session
         * is established. This session can be established while initializing a
         * #SecretService object by passing the %SECRET_SERVICE_OPEN_SESSION flag
         * to the [func`Service`.get] or [func`Service`.open] functions. In order to
         * establish a session on an already existing #SecretService, use the
         * [method`Service`.ensure_session] function.
         *
         * To search for items, use the [method`Service`.search] method.
         *
         * Multiple collections can exist in the Secret Service, each of which contains
         * secret items. In order to instantiate [class`Collection]` objects which
         * represent those collections while initializing a #SecretService then pass
         * the %SECRET_SERVICE_LOAD_COLLECTIONS flag to the [func`Service`.get] or
         * [func`Service`.open] functions. In order to establish a session on an already
         * existing #SecretService, use the [method`Service`.load_collections] function.
         * To access the list of collections use [method`Service`.get_collections].
         *
         * Certain actions on the Secret Service require user prompting to complete,
         * such as creating a collection, or unlocking a collection. When such a prompt
         * is necessary, then a [class`Prompt]` object is created by this library, and
         * passed to the [method`Service`.prompt] method. In this way it is handled
         * automatically.
         *
         * In order to customize prompt handling, override the
         * [vfunc`Service`.prompt_async] and [vfunc`Service`.prompt_finish] virtual
         * methods of the #SecretService class.
         */
        class Service
            extends Gio.DBusProxy
            implements Gio.AsyncInitable<Service>, Gio.DBusInterface, Gio.Initable, Backend
        {
            static $gtype: GObject.GType<Service>;

            // Constructors

            constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Disconnect the default #SecretService proxy returned by [func`Service`.get]
             * and [func`Service`.get_sync].
             *
             * It is not necessary to call this function, but you may choose to do so at
             * program exit. It is useful for testing that memory is not leaked.
             *
             * This function is safe to call at any time. But if other objects in this
             * library are still referenced, then this will not result in all memory
             * being freed.
             */
            static disconnect(): void;
            /**
             * Get a #SecretService proxy for the Secret Service.
             *
             * If such a proxy object already exists, then the same proxy is returned.
             *
             * If `flags` contains any flags of which parts of the secret service to
             * ensure are initialized, then those will be initialized before completing.
             *
             * This method will return immediately and complete asynchronously.
             * @param flags flags for which service functionality to ensure is initialized
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static get(
                flags: ServiceFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Service> | null,
            ): void;
            // Conflicted with Secret.Backend.get
            static get(...args: never[]): any;
            /**
             * Complete an asynchronous operation to get a #SecretService proxy for the
             * Secret Service.
             * @param result the asynchronous result passed to the callback
             */
            static get_finish(result: Gio.AsyncResult): Service;
            /**
             * Get a #SecretService proxy for the Secret Service.
             *
             * If such a proxy object already exists, then the same proxy is returned.
             *
             * If `flags` contains any flags of which parts of the secret service to
             * ensure are initialized, then those will be initialized before returning.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param flags flags for which service functionality to ensure is initialized
             * @param cancellable optional cancellation object
             */
            static get_sync(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service;
            /**
             * Create a new #SecretService proxy for the Secret Service.
             *
             * This function is rarely used, see [func`Service`.get] instead.
             *
             * The `service_gtype` argument should be set to %SECRET_TYPE_SERVICE or a the type
             * of a derived class.
             *
             * If `flags` contains any flags of which parts of the secret service to
             * ensure are initialized, then those will be initialized before returning.
             *
             * If `service_bus_name` is %NULL then the default is used.
             *
             * This method will return immediately and complete asynchronously.
             * @param service_gtype the GType of the new secret service
             * @param service_bus_name the D-Bus service name of the secret service
             * @param flags flags for which service functionality to ensure is initialized
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static open(
                service_gtype: GObject.GType,
                service_bus_name: string | null,
                flags: ServiceFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Service> | null,
            ): void;
            /**
             * Complete an asynchronous operation to create a new #SecretService proxy for
             * the Secret Service.
             * @param result the asynchronous result passed to the callback
             */
            static open_finish(result: Gio.AsyncResult): Service;
            /**
             * Create a new #SecretService proxy for the Secret Service.
             *
             * This function is rarely used, see [func`Service`.get_sync] instead.
             *
             * The `service_gtype` argument should be set to %SECRET_TYPE_SERVICE or a the
             * type of a derived class.
             *
             * If `flags` contains any flags of which parts of the secret service to
             * ensure are initialized, then those will be initialized before returning.
             *
             * If `service_bus_name` is %NULL then the default is used.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param service_gtype the GType of the new secret service
             * @param service_bus_name the D-Bus service name of the secret service
             * @param flags flags for which service functionality to ensure is initialized
             * @param cancellable optional cancellation object
             */
            static open_sync(
                service_gtype: GObject.GType,
                service_bus_name: string | null,
                flags: ServiceFlags,
                cancellable?: Gio.Cancellable | null,
            ): Service;

            // Virtual methods

            /**
             * Get the GObject type for collections instantiated by this service.
             *
             * This will always be either [class`Collection]` or derived from it.
             */
            vfunc_get_collection_gtype(): GObject.GType;
            /**
             * Get the GObject type for items instantiated by this service.
             *
             * This will always be either [class`Item]` or derived from it.
             */
            vfunc_get_item_gtype(): GObject.GType;
            /**
             * called to perform asynchronous prompting when necessary
             * @param prompt
             * @param return_type
             * @param cancellable
             * @param callback
             */
            vfunc_prompt_async(
                prompt: Prompt,
                return_type: GLib.VariantType,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to perform prompting for a [class`Prompt]`.
             *
             * Returns a variant result if the prompt was completed and not dismissed. The
             * type of result depends on the action the prompt is completing, and is defined
             * in the Secret Service DBus API specification.
             * @param result the asynchronous result passed to the callback
             */
            vfunc_prompt_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Perform prompting for a [class`Prompt]`.
             *
             * Runs a prompt and performs the prompting. Returns a variant result if the
             * prompt was completed and not dismissed. The type of result depends on the
             * action the prompt is completing, and is defined in the Secret Service DBus
             * API specification.
             *
             * This function is called by other parts of this library to handle prompts
             * for the various actions that can require prompting.
             *
             * Override the #SecretServiceClass [vfunc`Service`.prompt_sync] virtual method
             * to change the behavior of the prompting. The default behavior is to simply
             * run [method`Prompt`.perform_sync] on the prompt with a %NULL `window_id`.
             * @param prompt the prompt
             * @param cancellable optional cancellation object
             * @param return_type the variant type of the prompt result
             */
            vfunc_prompt_sync(
                prompt: Prompt,
                cancellable: Gio.Cancellable | null,
                return_type: GLib.VariantType,
            ): GLib.Variant;

            // Methods

            /**
             * Remove unlocked items which match the attributes from the secret service.
             *
             * The `attributes` should be a set of key and value string pairs.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method will return immediately and complete asynchronously.
             * @param schema the schema for the attributes
             * @param attributes the attribute keys and values
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            clear(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finish asynchronous operation to remove items from the secret
             * service.
             * @param result the asynchronous result passed to the callback
             * @returns whether items were removed or not
             */
            clear_finish(result: Gio.AsyncResult): boolean;
            /**
             * Remove unlocked items which match the attributes from the secret service.
             *
             * The `attributes` should be a set of key and value string pairs.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param schema the schema for the attributes
             * @param attributes the attribute keys and values
             * @param cancellable optional cancellation object
             * @returns whether items were removed or not
             */
            clear_sync(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Create a new item in a secret service collection and return its D-Bus
             * object path.
             *
             * It is often easier to use [func`password_store_sync]` or [func`Item`.create_sync]
             * rather than using this function. Using this method requires that you setup
             * a correct hash table of D-Bus `properties` for the new collection.
             *
             * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
             * service will search for an item matching the `attributes,` and update that item
             * instead of creating a new one.
             *
             * `properties` is a set of properties for the new collection. The keys in the
             * hash table should be interface.property strings like
             * `org.freedesktop.Secret.Item.Label`. The values
             * in the hash table should be [struct`GLib`.Variant] values of the properties.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads. The secret service may prompt the user. [method`Service`.prompt]
             * will be used to handle any prompts that are required.
             * @param collection_path the D-Bus path of the collection in which to create item
             * @param properties hash table of D-Bus properties   for the new collection
             * @param value the secret value to store in the item
             * @param flags flags for the creation of the new item
             * @param cancellable optional cancellation object
             * @returns a new string containing the D-Bus object path   of the item
             */
            create_item_dbus_path_sync(
                collection_path: string,
                properties: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
                value: Value,
                flags: ItemCreateFlags,
                cancellable?: Gio.Cancellable | null,
            ): string;
            /**
             * Decode a [struct`Value]` into [struct`GLib`.Variant] received with the Secret Service
             * DBus API.
             *
             * The [struct`GLib`.Variant] should have a `(oayays)` signature.
             *
             * A session must have already been established by the [class`Service]`, and
             * the encoded secret must be valid for that session.
             * @param value the encoded secret
             * @returns the decoded secret value
             */
            decode_dbus_secret(value: GLib.Variant): Value;
            /**
             * Encodes a [struct`Value]` into [struct`GLib`.Variant] for use with the Secret
             * Service DBus API.
             *
             * The resulting [struct`GLib`.Variant] will have a `(oayays)` signature.
             *
             * A session must have already been established by the [class`Service]`.
             * @param value the secret value
             * @returns the encoded secret
             */
            encode_dbus_secret(value: Value): GLib.Variant;
            /**
             * Ensure that the #SecretService proxy has established a session with the
             * Secret Service.
             *
             * This session is used to transfer secrets.
             *
             * It is not normally necessary to call this method, as the session is
             * established as necessary. You can also pass the %SECRET_SERVICE_OPEN_SESSION
             * to [func`Service`.get] in order to ensure that a session has been established
             * by the time you get the #SecretService proxy.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            ensure_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finish an asynchronous operation to ensure that the #SecretService proxy
             * has established a session with the Secret Service.
             * @param result the asynchronous result passed to the callback
             * @returns whether a session is established or not
             */
            ensure_session_finish(result: Gio.AsyncResult): boolean;
            /**
             * Ensure that the #SecretService proxy has established a session with the
             * Secret Service.
             *
             * This session is used to transfer secrets.
             *
             * It is not normally necessary to call this method, as the session is
             * established as necessary. You can also pass the %SECRET_SERVICE_OPEN_SESSION
             * to [func`Service`.get_sync] in order to ensure that a session has been
             * established by the time you get the #SecretService proxy.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param cancellable optional cancellation object
             * @returns whether a session is established or not
             */
            ensure_session_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Get the GObject type for collections instantiated by this service.
             *
             * This will always be either [class`Collection]` or derived from it.
             * @returns the gobject type for collections
             */
            get_collection_gtype(): GObject.GType;
            /**
             * Get a list of [class`Collection]` objects representing all the collections
             * in the secret service.
             *
             * If the %SECRET_SERVICE_LOAD_COLLECTIONS flag was not specified when
             * initializing #SecretService proxy object, then this method will return
             * %NULL. Use [method`Service`.load_collections] to load the collections.
             * @returns a   list of the collections in the secret service
             */
            get_collections(): Collection[] | null;
            /**
             * Get the flags representing what features of the #SecretService proxy
             * have been initialized.
             *
             * Use [method`Service`.ensure_session] or [method`Service`.load_collections]
             * to initialize further features and change the flags.
             * @returns the flags for features initialized
             */
            get_flags(): ServiceFlags;
            // Conflicted with Gio.DBusProxy.get_flags
            get_flags(...args: never[]): any;
            /**
             * Get the GObject type for items instantiated by this service.
             *
             * This will always be either [class`Item]` or derived from it.
             * @returns the gobject type for items
             */
            get_item_gtype(): GObject.GType;
            /**
             * Get the set of algorithms being used to transfer secrets between this
             * secret service proxy and the Secret Service itself.
             *
             * This will be %NULL if no session has been established. Use
             * [method`Service`.ensure_session] to establish a session.
             * @returns a string representing the algorithms for transferring   secrets
             */
            get_session_algorithms(): string | null;
            /**
             * Get the D-Bus object path of the session object being used to transfer
             * secrets between this secret service proxy and the Secret Service itself.
             *
             * This will be %NULL if no session has been established. Use
             * [method`Service`.ensure_session] to establish a session.
             * @returns a string representing the D-Bus object path of the   session
             */
            get_session_dbus_path(): string | null;
            /**
             * Ensure that the #SecretService proxy has loaded all the collections present
             * in the Secret Service.
             *
             * This affects the result of [method`Service`.get_collections].
             *
             * You can also pass the %SECRET_SERVICE_LOAD_COLLECTIONS to
             * [func`Service`.get_sync] in order to ensure that the collections have been
             * loaded by the time you get the #SecretService proxy.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            load_collections(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an asynchronous operation to ensure that the #SecretService proxy
             * has loaded all the collections present in the Secret Service.
             * @param result the asynchronous result passed to the callback
             * @returns whether the load was successful or not
             */
            load_collections_finish(result: Gio.AsyncResult): boolean;
            /**
             * Ensure that the #SecretService proxy has loaded all the collections present
             * in the Secret Service.
             *
             * This affects the result of [method`Service`.get_collections].
             *
             * You can also pass the %SECRET_SERVICE_LOAD_COLLECTIONS to
             * [func`Service`.get_sync] in order to ensure that the collections have been
             * loaded by the time you get the #SecretService proxy.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param cancellable optional cancellation object
             * @returns whether the load was successful or not
             */
            load_collections_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Lock items or collections in the secret service.
             *
             * The secret service may not be able to lock items individually, and may
             * lock an entire collection instead.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method returns immediately and completes asynchronously. The secret
             * service may prompt the user. [method`Service`.prompt] will be used to handle
             * any prompts that show up.
             * @param objects the items or collections to lock
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            lock(
                objects: Gio.DBusProxy[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to lock items or collections in the secret
             * service.
             *
             * The secret service may not be able to lock items individually, and may
             * lock an entire collection instead.
             * @param result asynchronous result passed to the callback
             * @returns the number of items or collections that were locked
             */
            lock_finish(result: Gio.AsyncResult): [number, Gio.DBusProxy[] | null];
            /**
             * Lock items or collections in the secret service.
             *
             * The secret service may not be able to lock items individually, and may
             * lock an entire collection instead.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method may block indefinitely and should not be used in user
             * interface threads. The secret service may prompt the user.
             * [method`Service`.prompt] will be used to handle any prompts that show up.
             * @param objects the items or collections to lock
             * @param cancellable optional cancellation object
             * @returns the number of items or collections that were locked
             */
            lock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [number, Gio.DBusProxy[] | null];
            /**
             * Lookup a secret value in the secret service.
             *
             * The `attributes` should be a set of key and value string pairs.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method will return immediately and complete asynchronously.
             * @param schema the schema for the attributes
             * @param attributes the attribute keys and values
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            lookup(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finish asynchronous operation to lookup a secret value in the secret service.
             *
             * If no secret is found then %NULL is returned.
             * @param result the asynchronous result passed to the callback
             * @returns a newly allocated [struct@Value], which should be   released with [method@Value.unref], or %NULL if no secret found
             */
            lookup_finish(result: Gio.AsyncResult): Value;
            /**
             * Lookup a secret value in the secret service.
             *
             * The `attributes` should be a set of key and value string pairs.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param schema the schema for the attributes
             * @param attributes the attribute keys and values
             * @param cancellable optional cancellation object
             * @returns a newly allocated [struct@Value], which should be   released with [method@Value.unref], or %NULL if no secret found
             */
            lookup_sync(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
            ): Value;
            /**
             * Perform prompting for a [class`Prompt]`.
             *
             * This function is called by other parts of this library to handle prompts
             * for the various actions that can require prompting.
             *
             * Override the #SecretServiceClass [vfunc`Service`.prompt_async] virtual method
             * to change the behavior of the prompting. The default behavior is to simply
             * run [method`Prompt`.perform] on the prompt.
             * @param prompt the prompt
             * @param return_type the variant type of the prompt result
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            prompt(
                prompt: Prompt,
                return_type?: GLib.VariantType | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to perform prompting for a [class`Prompt]`.
             *
             * Returns a variant result if the prompt was completed and not dismissed. The
             * type of result depends on the action the prompt is completing, and is defined
             * in the Secret Service DBus API specification.
             * @param result the asynchronous result passed to the callback
             * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
             */
            prompt_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Perform prompting for a [class`Prompt]`.
             *
             * Runs a prompt and performs the prompting. Returns a variant result if the
             * prompt was completed and not dismissed. The type of result depends on the
             * action the prompt is completing, and is defined in the Secret Service DBus
             * API specification.
             *
             * This function is called by other parts of this library to handle prompts
             * for the various actions that can require prompting.
             *
             * Override the #SecretServiceClass [vfunc`Service`.prompt_sync] virtual method
             * to change the behavior of the prompting. The default behavior is to simply
             * run [method`Prompt`.perform_sync] on the prompt with a %NULL `window_id`.
             * @param prompt the prompt
             * @param cancellable optional cancellation object
             * @param return_type the variant type of the prompt result
             * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
             */
            prompt_sync(
                prompt: Prompt,
                cancellable: Gio.Cancellable | null,
                return_type: GLib.VariantType,
            ): GLib.Variant;
            /**
             * Search for items matching the `attributes`.
             *
             * All collections are searched. The `attributes` should be a table of string
             * keys and string values.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get
             * the default [class`Service]` proxy.
             *
             * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
             * search will be returned. Otherwise only the first item will be returned.
             * This is almost always the unlocked item that was most recently stored.
             *
             * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
             * if necessary. In either case, locked and unlocked items will match the
             * search and be returned. If the unlock fails, the search does not fail.
             *
             * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items will have
             * their secret values loaded and available via [method`Item`.get_secret].
             *
             * This function returns immediately and completes asynchronously.
             * @param schema the schema for the attributes
             * @param attributes search for items matching these attributes
             * @param flags search option flags
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            search(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                flags: SearchFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to search for items.
             * @param result asynchronous result passed to callback
             * @returns a list of items that matched the search
             */
            search_finish(result: Gio.AsyncResult): Item[];
            /**
             * Search for items matching the `attributes`.
             *
             * All collections are searched. The `attributes` should be a table of string
             * keys and string values.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
             * the default [class`Service]` proxy.
             *
             * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
             * search will be returned. Otherwise only the first item will be returned.
             * This is almost always the unlocked item that was most recently stored.
             *
             * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
             * if necessary. In either case, locked and unlocked items will match the
             * search and be returned. If the unlock fails, the search does not fail.
             *
             * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items' secret
             * values will be loaded for any unlocked items. Loaded item secret values
             * are available via [method`Item`.get_secret]. If the load of a secret values
             * fail, then the
             *
             * This function may block indefinitely. Use the asynchronous version
             * in user interface threads.
             * @param schema the schema for the attributes
             * @param attributes search for items matching these attributes
             * @param flags search option flags
             * @param cancellable optional cancellation object
             * @returns a list of items that matched the search
             */
            search_sync(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                flags: SearchFlags,
                cancellable?: Gio.Cancellable | null,
            ): Item[];
            /**
             * Assign a collection to this alias.
             *
             * Aliases help determine well known collections, such as 'default'.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method will return immediately and complete asynchronously.
             * @param alias the alias to assign the collection to
             * @param collection the collection to assign to the alias
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            set_alias(
                alias: string,
                collection?: Collection | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finish an asynchronous operation to assign a collection to an alias.
             * @param result asynchronous result passed to callback
             * @returns %TRUE if successful
             */
            set_alias_finish(result: Gio.AsyncResult): boolean;
            /**
             * Assign a collection to this alias. Aliases help determine
             * well known collections, such as 'default'.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method may block and should not be used in user interface threads.
             * @param alias the alias to assign the collection to
             * @param collection the collection to assign to the alias
             * @param cancellable optional cancellation object
             * @returns %TRUE if successful
             */
            set_alias_sync(
                alias: string,
                collection?: Collection | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Store a secret value in the secret service.
             *
             * The `attributes` should be a set of key and value string pairs.
             *
             * If the attributes match a secret item already stored in the collection, then
             * the item will be updated with these new values.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get
             * the default [class`Service]` proxy.
             *
             * If `collection` is not specified, then the default collection will be
             * used. Use [const`COLLECTION_SESSION]` to store the password in the session
             * collection, which doesn't get stored across login sessions.
             *
             * This method will return immediately and complete asynchronously.
             * @param schema the schema to use to check attributes
             * @param attributes the attribute keys and values
             * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
             * @param label label for the secret
             * @param value the secret value
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            store(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                collection: string | null,
                label: string,
                value: Value,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finish asynchronous operation to store a secret value in the secret service.
             * @param result the asynchronous result passed to the callback
             * @returns whether the storage was successful or not
             */
            store_finish(result: Gio.AsyncResult): boolean;
            /**
             * Store a secret value in the secret service.
             *
             * The `attributes` should be a set of key and value string pairs.
             *
             * If the attributes match a secret item already stored in the collection, then
             * the item will be updated with these new values.
             *
             * If `collection` is %NULL, then the default collection will be
             * used. Use [const`COLLECTION_SESSION]` to store the password in the session
             * collection, which doesn't get stored across login sessions.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param schema the schema for the attributes
             * @param attributes the attribute keys and values
             * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
             * @param label label for the secret
             * @param value the secret value
             * @param cancellable optional cancellation object
             * @returns whether the storage was successful or not
             */
            store_sync(
                schema: Schema | null,
                attributes: { [key: string]: any } | GLib.HashTable<string, string>,
                collection: string | null,
                label: string,
                value: Value,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Unlock items or collections in the secret service.
             *
             * The secret service may not be able to unlock items individually, and may
             * unlock an entire collection instead.
             *
             * If `service` is %NULL, then [func`Service`.get] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method may block indefinitely and should not be used in user
             * interface threads. The secret service may prompt the user.
             * [method`Service`.prompt] will be used to handle any prompts that show up.
             * @param objects the items or collections to unlock
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            unlock(
                objects: Gio.DBusProxy[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to unlock items or collections in the secret
             * service.
             *
             * The secret service may not be able to unlock items individually, and may
             * unlock an entire collection instead.
             * @param result asynchronous result passed to the callback
             * @returns the number of items or collections that were unlocked
             */
            unlock_finish(result: Gio.AsyncResult): [number, Gio.DBusProxy[] | null];
            /**
             * Unlock items or collections in the secret service.
             *
             * The secret service may not be able to unlock items individually, and may
             * unlock an entire collection instead.
             *
             * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
             * the default [class`Service]` proxy.
             *
             * This method may block indefinitely and should not be used in user
             * interface threads. The secret service may prompt the user.
             * [method`Service`.prompt] will be used to handle any prompts that show up.
             * @param objects the items or collections to unlock
             * @param cancellable optional cancellation object
             * @returns the number of items or collections that were unlocked
             */
            unlock_sync(
                objects: Gio.DBusProxy[],
                cancellable?: Gio.Cancellable | null,
            ): [number, Gio.DBusProxy[] | null];

            // Inherited properties
            /**
             * A set of flags describing which parts of the secret backend have
             * been initialized.
             */
            get flags(): ServiceFlags;

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
            new_finish(res: Gio.AsyncResult): Service;
            // Conflicted with Gio.DBusProxy.new_finish
            new_finish(...args: never[]): any;
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
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
             */
            get_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             * @returns A #GDBusInterfaceInfo. Do not free.
             */
            get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            set_object(object?: Gio.DBusObject | null): void;
            /**
             * Gets the #GDBusObject that `interface_` belongs to, if any.
             */
            vfunc_dup_object(): Gio.DBusObject | null;
            /**
             * Gets D-Bus introspection information for the D-Bus interface
             * implemented by `interface_`.
             */
            vfunc_get_info(): Gio.DBusInterfaceInfo;
            /**
             * Sets the #GDBusObject for `interface_` to `object`.
             *
             * Note that `interface_` will hold a weak reference to `object`.
             * @param object A #GDBusObject or %NULL.
             */
            vfunc_set_object(object?: Gio.DBusObject | null): void;
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
             * implementation of [func`password_clear]`, required
             * @param schema
             * @param attributes
             * @param cancellable
             * @param callback
             */
            vfunc_clear(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_clear_finish]`, required
             * @param result
             */
            vfunc_clear_finish(result: Gio.AsyncResult): boolean;
            /**
             * implementation of reinitialization step in constructor, optional
             * @param flags
             * @param cancellable
             * @param callback
             */
            vfunc_ensure_for_flags(
                flags: BackendFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of reinitialization step in constructor, optional
             * @param result
             */
            vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean;
            /**
             * implementation of [func`password_lookup]`, required
             * @param schema
             * @param attributes
             * @param cancellable
             * @param callback
             */
            vfunc_lookup(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_lookup_finish]`, required
             * @param result
             */
            vfunc_lookup_finish(result: Gio.AsyncResult): Value;
            /**
             * implementation of [func`password_search]`, required
             * @param schema
             * @param attributes
             * @param flags
             * @param cancellable
             * @param callback
             */
            vfunc_search(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                flags: SearchFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_store]`, required
             * @param schema
             * @param attributes
             * @param collection
             * @param label
             * @param value
             * @param cancellable
             * @param callback
             */
            vfunc_store(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                collection: string,
                label: string,
                value: Value,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_store_finish]`, required
             * @param result
             */
            vfunc_store_finish(result: Gio.AsyncResult): boolean;
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

        type BackendInterface = typeof Backend;
        type CollectionClass = typeof Collection;
        abstract class CollectionPrivate {
            static $gtype: GObject.GType<CollectionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ItemClass = typeof Item;
        abstract class ItemPrivate {
            static $gtype: GObject.GType<ItemPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PromptClass = typeof Prompt;
        abstract class PromptPrivate {
            static $gtype: GObject.GType<PromptPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RetrievableInterface = typeof Retrievable;
        /**
         * Represents a set of attributes that are stored with an item.
         *
         * These schemas are used for interoperability between various services storing
         * the same types of items.
         *
         * Each schema has a name like `org.gnome.keyring.NetworkPassword`, and defines a
         * set of attributes, and types (string, integer, boolean) for those attributes.
         *
         * Attributes are stored as strings in the Secret Service, and the attribute types
         * simply define standard ways to store integer and boolean values as strings.
         * Attributes are represented in libsecret via a [struct`GLib`.HashTable] with
         * string keys and values. Even for values that defined as an integer or boolean in
         * the schema, the attribute values in the [struct`GLib`.HashTable] are strings.
         * Boolean values are stored as the strings 'true' and 'false'. Integer values are
         * stored in decimal, with a preceding negative sign for negative integers.
         *
         * Schemas are handled entirely on the client side by this library. The name of the
         * schema is automatically stored as an attribute on the item.
         *
         * Normally when looking up passwords only those with matching schema names are
         * returned. If the schema `flags` contain the `SECRET_SCHEMA_DONT_MATCH_NAME` flag,
         * then lookups will not check that the schema name matches that on the item, only
         * the schema's attributes are matched. This is useful when you are looking up
         * items that are not stored by the libsecret library. Other libraries such as
         * libgnome-keyring don't store the schema name.
         *
         * Additional schemas can be defined via the [struct`Schema]` structure like this:
         *
         * ```c
         * // in a header:
         *
         * const SecretSchema * example_get_schema (void) G_GNUC_CONST;
         *
         * #define EXAMPLE_SCHEMA  example_get_schema ()
         *
         *
         * // in a .c file
         *
         * const SecretSchema *
         * example_get_schema (void)
         * {
         *     static const SecretSchema the_schema = {
         *         "org.example.Password", SECRET_SCHEMA_NONE,
         *         {
         *             {  "number", SECRET_SCHEMA_ATTRIBUTE_INTEGER },
         *             {  "string", SECRET_SCHEMA_ATTRIBUTE_STRING },
         *             {  "even", SECRET_SCHEMA_ATTRIBUTE_BOOLEAN },
         *             {  NULL, 0 },
         *         }
         *     };
         *     return &the_schema;
         * }
         * ```
         */
        class Schema {
            static $gtype: GObject.GType<Schema>;

            // Fields

            name: string;
            flags: SchemaFlags;

            // Constructors

            constructor(name: string, flags: SchemaFlags, ___: any[]);
            _init(...args: any[]): void;

            static ['new'](
                name: string,
                flags: SchemaFlags,
                attribute_names_and_types: { [key: string]: any } | GLib.HashTable<string, SchemaAttributeType>,
            ): Schema;

            // Methods

            /**
             * Adds a reference to the #SecretSchema.
             *
             * It is not normally necessary to call this function from C code, and is
             * mainly present for the sake of bindings. If the `schema` was statically
             * allocated, then this function will copy the schema.
             * @returns the referenced schema, which should be later   unreferenced with [method@Schema.unref]
             */
            ref(): Schema;
            /**
             * Releases a reference to the #SecretSchema.
             *
             * If the last reference is released then the schema will be freed.
             *
             * It is not normally necessary to call this function from C code, and is
             * mainly present for the sake of bindings. It is an error to call this for
             * a `schema` that was statically allocated.
             */
            unref(): void;
        }

        /**
         * An attribute in a #SecretSchema.
         */
        class SchemaAttribute {
            static $gtype: GObject.GType<SchemaAttribute>;

            // Fields

            name: string;
            type: SchemaAttributeType;

            // Constructors

            _init(...args: any[]): void;
        }

        type ServiceClass = typeof Service;
        abstract class ServicePrivate {
            static $gtype: GObject.GType<ServicePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A value containing a secret
         *
         * A #SecretValue contains a password or other secret value.
         *
         * Use [method`Value`.get] to get the actual secret data, such as a password.
         * The secret data is not necessarily null-terminated, unless the content type
         * is "text/plain".
         *
         * Each #SecretValue has a content type. For passwords, this is `text/plain`.
         * Use [method`Value`.get_content_type] to look at the content type.
         *
         * #SecretValue is reference counted and immutable. The secret data is only
         * freed when all references have been released via [method`Value`.unref].
         */
        class Value {
            static $gtype: GObject.GType<Value>;

            // Constructors

            constructor(secret: string, length: number, content_type: string);
            _init(...args: any[]): void;

            static ['new'](secret: string, length: number, content_type: string): Value;

            static new_full(secret: string, length: number, content_type: string): Value;

            // Methods

            /**
             * Get the secret data in the #SecretValue.
             *
             * The value is not necessarily null-terminated unless it was created with
             * [ctor`Value`.new] or a null-terminated string was passed to
             * [ctor`Value`.new_full].
             * @returns the secret data
             */
            get(): Uint8Array;
            /**
             * Get the content type of the secret value, such as
             * `text/plain`.
             * @returns the content type
             */
            get_content_type(): string;
            /**
             * Get the secret data in the #SecretValue if it contains a textual
             * value.
             *
             * The content type must be `text/plain`.
             * @returns the content type
             */
            get_text(): string | null;
            /**
             * Add another reference to the #SecretValue.
             *
             * For each reference [method`Value`.unref] should be called to unreference the
             * value.
             * @returns the value
             */
            ref(): Value;
            /**
             * Unreference a #SecretValue.
             *
             * When the last reference is gone, then the value will be freed.
             */
            unref(): void;
            /**
             * Unreference a #SecretValue and steal the secret data in
             * #SecretValue as nonpageable memory.
             * @param length the length of the secret
             * @returns a new password string stored in nonpageable memory   which must be freed with [func@password_free] when done
             */
            unref_to_password(length: number): [string, number];
        }

        module Backend {
            // Constructor properties interface

            interface ConstructorProps extends Gio.AsyncInitable.ConstructorProps<Backend> {
                flags: ServiceFlags;
            }
        }

        export interface BackendNamespace {
            $gtype: GObject.GType<Backend>;
            prototype: Backend;

            /**
             * Get a #SecretBackend instance.
             *
             * If such a backend already exists, then the same backend is returned.
             *
             * If `flags` contains any flags of which parts of the secret backend to
             * ensure are initialized, then those will be initialized before completing.
             *
             * This method will return immediately and complete asynchronously.
             * @param flags flags for which service functionality to ensure is initialized
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            get(
                flags: BackendFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Backend> | null,
            ): void;
            /**
             * Complete an asynchronous operation to get a #SecretBackend.
             * @param result the asynchronous result passed to the callback
             */
            get_finish(result: Gio.AsyncResult): Backend;
        }
        interface Backend extends Gio.AsyncInitable {
            // Properties

            /**
             * A set of flags describing which parts of the secret backend have
             * been initialized.
             */
            get flags(): ServiceFlags;

            // Virtual methods

            /**
             * implementation of [func`password_clear]`, required
             * @param schema
             * @param attributes
             * @param cancellable
             * @param callback
             */
            vfunc_clear(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_clear_finish]`, required
             * @param result
             */
            vfunc_clear_finish(result: Gio.AsyncResult): boolean;
            /**
             * implementation of reinitialization step in constructor, optional
             * @param flags
             * @param cancellable
             * @param callback
             */
            vfunc_ensure_for_flags(
                flags: BackendFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of reinitialization step in constructor, optional
             * @param result
             */
            vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean;
            /**
             * implementation of [func`password_lookup]`, required
             * @param schema
             * @param attributes
             * @param cancellable
             * @param callback
             */
            vfunc_lookup(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_lookup_finish]`, required
             * @param result
             */
            vfunc_lookup_finish(result: Gio.AsyncResult): Value;
            /**
             * implementation of [func`password_search]`, required
             * @param schema
             * @param attributes
             * @param flags
             * @param cancellable
             * @param callback
             */
            vfunc_search(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                flags: SearchFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_store]`, required
             * @param schema
             * @param attributes
             * @param collection
             * @param label
             * @param value
             * @param cancellable
             * @param callback
             */
            vfunc_store(
                schema: Schema,
                attributes: { [key: string]: any } | GLib.HashTable<any, any>,
                collection: string,
                label: string,
                value: Value,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * implementation of [func`password_store_finish]`, required
             * @param result
             */
            vfunc_store_finish(result: Gio.AsyncResult): boolean;
        }

        export const Backend: BackendNamespace;

        module Retrievable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                attributes: GLib.HashTable<string, string>;
                created: number;
                label: string;
                modified: number;
            }
        }

        export interface RetrievableNamespace {
            $gtype: GObject.GType<Retrievable>;
            prototype: Retrievable;
        }
        interface Retrievable extends GObject.Object {
            // Properties

            /**
             * The attributes set on this item.
             *
             * Attributes are used to locate an item. They are not guaranteed to be
             * stored or transferred securely.
             */
            get attributes(): GLib.HashTable<string, string>;
            set attributes(val: GLib.HashTable<string, string>);
            /**
             * The date and time (in seconds since the UNIX epoch) that this
             * item was created.
             */
            get created(): number;
            set created(val: number);
            /**
             * The human readable label for the item.
             */
            get label(): string;
            set label(val: string);
            /**
             * The date and time (in seconds since the UNIX epoch) that this
             * item was last modified.
             */
            get modified(): number;
            set modified(val: number);

            // Methods

            /**
             * Get the attributes of this object.
             *
             * The attributes are a mapping of string keys to string values.
             * Attributes are used to search for items. Attributes are not stored
             * or transferred securely by the secret service.
             *
             * Do not modify the attribute returned by this method.
             * @returns a new reference   to the attributes, which should not be modified, and   released with [func@GLib.HashTable.unref]
             */
            get_attributes(): GLib.HashTable<string, string>;
            /**
             * Get the created date and time of the object.
             *
             * The return value is the number of seconds since the unix epoch, January 1st
             * 1970.
             * @returns the created date and time
             */
            get_created(): number;
            /**
             * Get the label of this item.
             * @returns the label, which should be freed with [func@GLib.free]
             */
            get_label(): string;
            /**
             * Get the modified date and time of the object.
             *
             * The return value is the number of seconds since the unix epoch, January 1st
             * 1970.
             * @returns the modified date and time
             */
            get_modified(): number;
            /**
             * Retrieve the secret value of this object.
             *
             * Each retrievable object has a single secret which might be a
             * password or some other secret binary value.
             *
             * This function returns immediately and completes asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete asynchronous operation to retrieve the secret value of this object.
             * @param result asynchronous result passed to callback
             * @returns the secret value which should be   released with [method@Value.unref], or %NULL
             */
            retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
            /**
             * Retrieve the secret value of this object synchronously.
             *
             * Each retrievable object has a single secret which might be a
             * password or some other secret binary value.
             *
             * This method may block indefinitely and should not be used in user interface
             * threads.
             * @param cancellable optional cancellation object
             * @returns the secret value which should be   released with [method@Value.unref], or %NULL
             */
            retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null;

            // Virtual methods

            /**
             * Retrieve the secret value of this object.
             *
             * Each retrievable object has a single secret which might be a
             * password or some other secret binary value.
             *
             * This function returns immediately and completes asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_retrieve_secret(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete asynchronous operation to retrieve the secret value of this object.
             * @param result asynchronous result passed to callback
             */
            vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
        }

        export const Retrievable: RetrievableNamespace;

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

    export default Secret;
}

declare module 'gi://Secret' {
    import Secret1 from 'gi://Secret?version=1';
    export default Secret1;
}
// END
