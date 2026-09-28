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

declare module 'gi://Tsparql?version=3.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Tsparql {
        /**
         * Tsparql-3.0
         */

        /**
         * Flags affecting deserialization from a RDF data format.
         */

        /**
         * Flags affecting deserialization from a RDF data format.
         */
        export namespace DeserializeFlags {
            export const $gtype: GObject.GType<DeserializeFlags>;
        }

        enum DeserializeFlags {
            /**
             * No flags.
             */
            NONE,
        }
        /**
         * Notifier event types.
         */

        /**
         * Notifier event types.
         */
        export namespace NotifierEventType {
            export const $gtype: GObject.GType<NotifierEventType>;
        }

        enum NotifierEventType {
            /**
             * An element was created.
             */
            CREATE,
            /**
             * An element was deleted.
             */
            DELETE,
            /**
             * An element was updated.
             */
            UPDATE,
        }
        /**
         * Describes a RDF format to be used in data exchange.
         */

        /**
         * Describes a RDF format to be used in data exchange.
         */
        export namespace RdfFormat {
            export const $gtype: GObject.GType<RdfFormat>;
        }

        enum RdfFormat {
            /**
             * Turtle format
             *   ([http://www.w3.org/ns/formats/Turtle](http://www.w3.org/ns/formats/Turtle))
             */
            TURTLE,
            /**
             * Trig format
             *   ([http://www.w3.org/ns/formats/Trig](http://www.w3.org/ns/formats/Trig))
             */
            TRIG,
            /**
             * JSON-LD format
             *   ([http://www.w3.org/ns/formats/JSON-LD](http://www.w3.org/ns/formats/JSON-LD)).
             *   This value was added in version 3.5.
             */
            JSON_LD,
            /**
             * The total number of RDF formats
             */
            LAST,
        }
        /**
         * Flags affecting serialization into a RDF data format.
         */

        /**
         * Flags affecting serialization into a RDF data format.
         */
        export namespace SerializeFlags {
            export const $gtype: GObject.GType<SerializeFlags>;
        }

        enum SerializeFlags {
            /**
             * No flags.
             */
            NONE,
        }
        /**
         * Error domain for Tracker Sparql. Errors in this domain will be from the
         * [error`SparqlError]` enumeration. See [struct`GLib`.Error] for more information on error
         * domains.
         */
        class SparqlError extends GLib.Error {
            static $gtype: GObject.GType<SparqlError>;

            // Static fields

            /**
             * Subject is not in the domain of a property or
             *                             trying to set multiple values for a single valued
             *                             property.
             */
            static CONSTRAINT: number;
            /**
             * Internal error.
             */
            static INTERNAL: number;
            /**
             * There was no disk space available to perform the request.
             */
            static NO_SPACE: number;
            /**
             * The specified ontology wasn't found.
             */
            static ONTOLOGY_NOT_FOUND: number;
            /**
             * Problem encountered while opening the database.
             */
            static OPEN_ERROR: number;
            /**
             * Error parsing the SPARQL string.
             */
            static PARSE: number;
            /**
             * Problem while executing the query.
             */
            static QUERY_FAILED: number;
            /**
             * Type constraint failed when trying to insert data.
             */
            static TYPE: number;
            /**
             * Unknown class.
             */
            static UNKNOWN_CLASS: number;
            /**
             * Unknown graph.
             */
            static UNKNOWN_GRAPH: number;
            /**
             * Unknown property.
             */
            static UNKNOWN_PROPERTY: number;
            /**
             * Unsupported feature or method.
             */
            static UNSUPPORTED: number;
            /**
             * The ontology doesn't contain nrl:lastModified header
             */
            static MISSING_LAST_MODIFIED_HEADER: number;
            /**
             * The property is not completely defined.
             */
            static INCOMPLETE_PROPERTY_DEFINITION: number;
            /**
             * A soft/hard corruption was found in the database during operation.
             *   If this error is obtained during regular operations with an existing [class`SparqlConnection]`,
             *   the corruption was newly found. This event will be persistently recorded so that the
             *   [func`SparqlConnection`.new_async] constructor (or its synchronous variant) will
             *   perform database repair attempts. If this error is obtained during one of those constructors, the
             *   database could not be repaired automatically and data loss is unavoidable. It is left to the discretion
             *   of the API user to set up the appropriate fallbacks in this situation, to replace the
             *   database and recover from the error. See [ctor`SparqlConnection`.new] documentation
             *   for more information on corruption handling.
             */
            static CORRUPT: number;
            /**
             * The total number of error codes.
             */
            static LAST: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Enumeration with the possible types of the cursor's cells
         */

        /**
         * Enumeration with the possible types of the cursor's cells
         */
        export namespace SparqlValueType {
            export const $gtype: GObject.GType<SparqlValueType>;
        }

        enum SparqlValueType {
            /**
             * Unbound value type
             */
            UNBOUND,
            /**
             * Uri value type, rdfs:Resource
             */
            URI,
            /**
             * String value type, xsd:string or rdf:langString
             */
            STRING,
            /**
             * Integer value type, xsd:integer
             */
            INTEGER,
            /**
             * Double value type, xsd:double
             */
            DOUBLE,
            /**
             * Datetime value type, xsd:dateTime
             */
            DATETIME,
            /**
             * Blank node value type
             */
            BLANK_NODE,
            /**
             * Boolean value type, xsd:boolean
             */
            BOOLEAN,
        }
        /**
         * The major version of the Tracker library.
         *
         * Like #tracker_major_version, but intended to be used at application compile time.
         */
        const MAJOR_VERSION: number;
        /**
         * The micro version of the Tracker library.
         *
         * Like #tracker_micro_version, but intended to be used at application compile time.
         */
        const MICRO_VERSION: number;
        /**
         * The minor version of the Tracker library.
         *
         * Like #tracker_minor_version, but intended to be used at application compile time.
         */
        const MINOR_VERSION: number;
        /**
         * The Prefix of the DC (Dublin Core) namespace
         */
        const PREFIX_DC: string;
        /**
         * The Prefix of the MFO namespace
         */
        const PREFIX_MFO: string;
        /**
         * The Prefix of the NAO namespace
         */
        const PREFIX_NAO: string;
        /**
         * The Prefix of the NCO namespace
         */
        const PREFIX_NCO: string;
        /**
         * The Prefix of the NFO namespace
         */
        const PREFIX_NFO: string;
        /**
         * The Prefix of the NIE namespace
         */
        const PREFIX_NIE: string;
        /**
         * The Prefix of the RDF namespace
         */
        const PREFIX_NMM: string;
        /**
         * The Prefix of the NRL namespace
         */
        const PREFIX_NRL: string;
        /**
         * The Prefix of the Osinfo namespace
         */
        const PREFIX_OSINFO: string;
        /**
         * The Prefix of the RDF namespace
         */
        const PREFIX_RDF: string;
        /**
         * The Prefix of the RDFS namespace
         */
        const PREFIX_RDFS: string;
        /**
         * The Prefix of the SLO namespace
         */
        const PREFIX_SLO: string;
        /**
         * The Prefix of the Tracker namespace
         */
        const PREFIX_TRACKER: string;
        /**
         * The Prefix of the XSD namespace
         */
        const PREFIX_XSD: string;
        /**
         * Checks that the Tracker library in use is compatible with the given version.
         *
         * Generally you would pass in the constants
         * [const`MAJOR_VERSION]`, [const`MINOR_VERSION]`, [const`MICRO_VERSION]`
         * as the three arguments to this function; that produces
         * a check that the library in use is compatible with
         * the version of Tracker the application or module was compiled
         * against.
         *
         * Compatibility is defined by two things: first the version
         * of the running library is newer than the version
         * `required_major`.`required_minor`.`required_micro`. Second
         * the running library must be binary compatible with the
         * version `required_major`.`required_minor`.`required_micro`
         * (same major version.)
         * @param required_major the required major version.
         * @param required_minor the required minor version.
         * @param required_micro the required micro version.
         * @returns %NULL if the Tracker library is compatible with the   given version, or a string describing the version mismatch.
         */
        function check_version(required_major: number, required_minor: number, required_micro: number): string;
        function sparql_error_quark(): GLib.Quark;
        /**
         * Escapes `literal` so it is suitable for insertion in
         * SPARQL queries as string literals.
         *
         * Manual construction of query strings based user input is best
         * avoided at all cost, use of #TrackerSparqlStatement is recommended
         * instead.
         * @param literal a string to escape
         * @returns the escaped string
         */
        function sparql_escape_string(literal: string): string;
        /**
         * Escapes a string for use as a URI.
         * @param uri a string to be escaped, following the tracker sparql rules
         * @returns a newly-allocated string holding the result.
         */
        function sparql_escape_uri(uri: string): string;
        /**
         * Returns a path to the built-in Nepomuk ontologies.
         * @returns a #GFile instance.
         */
        function sparql_get_ontology_nepomuk(): Gio.File;
        /**
         * Creates a fresh UUID-based URN.
         * @returns A newly generated UUID URN.
         */
        function sparql_get_uuid_urn(): string;
        /**
         * Connection flags to modify #TrackerSparqlConnection behavior.
         */

        /**
         * Connection flags to modify #TrackerSparqlConnection behavior.
         */
        export namespace SparqlConnectionFlags {
            export const $gtype: GObject.GType<SparqlConnectionFlags>;
        }

        enum SparqlConnectionFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Connection is readonly.
             */
            READONLY,
            /**
             * Word stemming is applied to FTS search terms.
             */
            FTS_ENABLE_STEMMER,
            /**
             * Unaccenting is applied to FTS search terms.
             */
            FTS_ENABLE_UNACCENT,
            /**
             * FTS Search terms are filtered through a stop word list. This flag is deprecated since Tracker 3.6, and will do nothing.
             */
            FTS_ENABLE_STOP_WORDS,
            /**
             * Ignore numbers in FTS search terms.
             */
            FTS_IGNORE_NUMBERS,
            /**
             * Treat blank nodes as specified in
             *   SPARQL 1.1 syntax. Namely, they cannot be used as URIs. This flag is available since Tracker 3.3.
             */
            ANONYMOUS_BNODES,
        }
        module Batch {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connection: SparqlConnection;
            }
        }

        /**
         * `TrackerBatch` executes a series of SPARQL updates and RDF data
         * insertions within a transaction.
         *
         * A batch is created with [method`SparqlConnection`.create_batch].
         * To add resources use [method`Batch`.add_resource],
         * [method`Batch`.add_sparql] or [method`Batch`.add_statement].
         *
         * When a batch is ready for execution, use [method`Batch`.execute]
         * or [method`Batch`.execute_async]. The batch is executed as a single
         * transaction, it will succeed or fail entirely.
         *
         * This object has a single use, after the batch is executed it can
         * only be finished and freed.
         *
         * The mapping of blank node labels is global in a `TrackerBatch`,
         * referencing the same blank node label in different operations in
         * a batch will resolve to the same resource.
         */
        abstract class Batch extends GObject.Object {
            static $gtype: GObject.GType<Batch>;

            // Properties

            /**
             * The [class`SparqlConnection]` the batch belongs to.
             */
            get connection(): SparqlConnection;

            // Constructors

            constructor(properties?: Partial<Batch.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Inserts the RDF data contained in `stream` as part of `batch`.
             *
             * The RDF data will be inserted in the given `default_graph` if one is provided,
             * or the anonymous graph if `default_graph` is %NULL. Any RDF data that has a
             * graph specified (e.g. using the `GRAPH` clause in the Trig format) will
             * be inserted in the specified graph instead of `default_graph`.
             *
             * The `flags` argument is reserved for future expansions, currently
             * %TRACKER_DESERIALIZE_FLAGS_NONE must be passed.
             * @param flags Deserialization flags
             * @param format RDF format of data in stream
             * @param default_graph Default graph that will receive the RDF data
             * @param stream Input stream with RDF data
             */
            add_rdf(flags: DeserializeFlags, format: RdfFormat, default_graph: string, stream: Gio.InputStream): void;
            /**
             * Adds the RDF represented by `resource` to `batch`.
             * @param graph RDF graph to insert the resource to
             * @param resource A [class@Resource]
             */
            add_resource(graph: string | null, resource: Resource): void;
            /**
             * Adds an SPARQL update string to `batch`.
             * @param sparql A SPARQL update string
             */
            add_sparql(sparql: string): void;
            /**
             * Adds a [class`SparqlStatement]` containing an SPARQL update. The statement will
             * be executed once in the batch, with the values bound as specified by `variable_names`
             * and `values`.
             *
             * For example, for a statement that has a single `~name` parameter,
             * it could be given a value for execution with the given code:
             *
             * ```c
             * const char *names = { "name" };
             * const GValue values[G_N_ELEMENTS (names)] = { 0, };
             *
             * g_value_init (&values[0], G_TYPE_STRING);
             * g_value_set_string (&values[0], "John Smith");
             * tracker_batch_add_statementv (batch, stmt,
             *                               G_N_ELEMENTS (names),
             *                               names, values);
             * ```
             * ```python
             * batch.add_statement(stmt, ['name'], ['John Smith']);
             * ```
             * ```js
             * batch.add_statement(stmt, ['name'], ['John Smith']);
             * ```
             *
             * A [class`SparqlStatement]` may be used on multiple [method`Batch`.add_statement]
             * calls with the same or different values, on the same or different `TrackerBatch`
             * objects.
             *
             * This function should only be called on [class`SparqlStatement]` objects
             * obtained through [method`SparqlConnection`.update_statement] or
             * update statements loaded through [method`SparqlConnection`.load_statement_from_gresource].
             * @param stmt A [class@SparqlStatement] containing a SPARQL update
             * @param variable_names The names of each bound parameter
             * @param values The values of each bound parameter
             */
            add_statement(stmt: SparqlStatement, variable_names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Executes the batch. This operations happens synchronously.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns %TRUE of there were no errors, %FALSE otherwise
             */
            execute(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Executes the batch. This operation happens asynchronously, when
             * finished `callback` will be executed.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the operation started with [method`Batch`.execute_async].
             * @param res A [type@Gio.AsyncResult] with the result of the operation
             * @returns %TRUE of there were no errors, %FALSE otherwise
             */
            execute_finish(res: Gio.AsyncResult): boolean;
            /**
             * Returns the [class`SparqlConnection]` that this batch was created
             * from.
             * @returns The SPARQL connection of this batch.
             */
            get_connection(): SparqlConnection;
        }

        module Endpoint {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                allowed_graphs: string[];
                allowedGraphs: string[];
                allowed_services: string[];
                allowedServices: string[];
                readonly: boolean;
                sparql_connection: SparqlConnection;
                sparqlConnection: SparqlConnection;
            }
        }

        /**
         * `TrackerEndpoint` is a helper object to make RDF triple stores represented
         * by a [class`SparqlConnection]` publicly available to other processes/hosts.
         *
         * This is a base abstract object, see [class`EndpointDBus]` to make
         * RDF triple stores available to other processes in the same machine, and
         * [class`EndpointHttp]` to make it available to other hosts in the
         * network.
         *
         * When the RDF triple store represented by a [class`SparqlConnection]`
         * is made public this way, other peers may connect to the database using
         * [ctor`SparqlConnection`.bus_new] or [ctor`SparqlConnection`.remote_new]
         * to access this endpoint exclusively, or they may use the `SERVICE <uri> { ... }` SPARQL
         * syntax from their own [class`SparqlConnection]`s to expand their data set.
         *
         * By default, and as long as the underlying [class`SparqlConnection]`
         * allows SPARQL updates and RDF graph changes, endpoints will allow updates
         * and modifications to happen through them. Use [method`Endpoint`.set_readonly]
         * to change this behavior.
         *
         * By default, endpoints allow access to every RDF graph in the triple store
         * and further external SPARQL endpoints to the queries performed on it. Use
         * [method`Endpoint`.set_allowed_graphs] and
         * [method`Endpoint`.set_allowed_services] to change this behavior. Users do
         * not typically need to do this for D-Bus endpoints, as these do already have a layer
         * of protection with the Tracker portal. This is the mechanism used by the portal
         * itself. This access control API may not interoperate with other SPARQL endpoint
         * implementations than Tracker.
         */
        abstract class Endpoint extends GObject.Object {
            static $gtype: GObject.GType<Endpoint>;

            // Properties

            /**
             * RDF graphs that are allowed to be accessed
             * through queries to this endpoint. See
             * tracker_endpoint_set_allowed_graphs().
             */
            get allowed_graphs(): string[];
            set allowed_graphs(val: string[]);
            /**
             * RDF graphs that are allowed to be accessed
             * through queries to this endpoint. See
             * tracker_endpoint_set_allowed_graphs().
             */
            get allowedGraphs(): string[];
            set allowedGraphs(val: string[]);
            /**
             * External SPARQL endpoints that are allowed to be
             * accessed through queries to this endpint. See
             * tracker_endpoint_set_allowed_services().
             */
            get allowed_services(): string[];
            set allowed_services(val: string[]);
            /**
             * External SPARQL endpoints that are allowed to be
             * accessed through queries to this endpint. See
             * tracker_endpoint_set_allowed_services().
             */
            get allowedServices(): string[];
            set allowedServices(val: string[]);
            /**
             * Whether the endpoint allows SPARQL updates or not. See
             * tracker_endpoint_set_readonly().
             */
            get readonly(): boolean;
            set readonly(val: boolean);
            /**
             * The [class`SparqlConnection]` being proxied by this endpoint.
             */
            get sparql_connection(): SparqlConnection;
            /**
             * The [class`SparqlConnection]` being proxied by this endpoint.
             */
            get sparqlConnection(): SparqlConnection;

            // Constructors

            constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the list of RDF graphs that the endpoint allows
             * access for.
             * @returns The list of allowed RDF graphs
             */
            get_allowed_graphs(): string[];
            /**
             * Returns the list of external SPARQL endpoints that are
             * allowed to be accessed through this endpoint.
             * @returns The list of allowed services
             */
            get_allowed_services(): string[];
            /**
             * Returns whether the endpoint is readonly, thus SPARQL update
             * queries are disallowed.
             * @returns %TRUE if the endpoint is readonly
             */
            get_readonly(): boolean;
            /**
             * Returns the [class`SparqlConnection]` that this endpoint proxies
             * to a wider audience.
             * @returns The proxied SPARQL connection
             */
            get_sparql_connection(): SparqlConnection;
            /**
             * Sets the list of RDF graphs that this endpoint will allow access
             * for. Any explicit (e.g. `GRAPH` keyword) or implicit (e.g. through the
             * default anonymous graph) access to RDF graphs unespecified in this
             * list in SPARQL queries will be seen as if those graphs did not exist, or
             * (equivalently) had an empty set. Changes to these graphs through SPARQL
             * updates will also be disallowed.
             *
             * If `graphs` is %NULL, access will be allowed to every RDF graph stored
             * in the endpoint, this is the default behavior. If you want to forbid access
             * to all RDF graphs, use an empty list.
             *
             * The empty string (`""`) is allowed as a special value, to allow access
             * to the stock anonymous graph. All graph names are otherwise dependent
             * on the endpoint and its contained data.
             * @param graphs List of allowed graphs, or %NULL to allow all graphs
             */
            set_allowed_graphs(graphs: string): void;
            /**
             * Sets the list of external SPARQL endpoints that this endpoint
             * will allow access for. Access through the `SERVICE` SPARQL syntax
             * will fail for services not specified in this list.
             *
             * If `services` is %NULL, access will be allowed to every external endpoint,
             * this is the default behavior. If you want to forbid access to all
             * external SPARQL endpoints, use an empty list.
             *
             * This affects both remote SPARQL endpoints accessed through HTTP,
             * and external SPARQL endpoints offered through D-Bus. For the latter,
             * the following syntax is allowed to describe them as an URI:
             *
             * `DBUS_URI = 'dbus:' [ ('system' | 'session') ':' ]? dbus-name [ ':' object-path ]?`
             *
             * If the system/session part is omitted, it will default to the session
             * bus. If the object path is omitted, the `/org/freedesktop/Tracker3/Endpoint`
             * [class`EndpointDBus]` default will be assumed.
             * @param services List of allowed services, or %NULL to allow all services
             */
            set_allowed_services(services: string): void;
            /**
             * Sets whether the endpoint will be readonly. Readonly endpoints
             * will not allow SPARQL update queries. The underlying
             * [class`SparqlConnection]` may be readonly of its own, this
             * method does not change its behavior in any way.
             * @param readonly Whether the endpoint will be readonly
             */
            set_readonly(readonly: boolean): void;
        }

        module EndpointDBus {
            // Signal callback interfaces

            interface BlockCall {
                (object: string): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends Endpoint.ConstructorProps, Gio.Initable.ConstructorProps {
                dbus_connection: Gio.DBusConnection;
                dbusConnection: Gio.DBusConnection;
                object_path: string;
                objectPath: string;
            }
        }

        /**
         * `TrackerEndpointDBus` makes the RDF data in a [class`SparqlConnection]`
         * accessible to other processes via DBus.
         *
         * This object is a [class`Endpoint]` subclass that exports
         * a [class`SparqlConnection]` so its RDF data is accessible to other
         * processes through the given [class`Gio`.DBusConnection].
         *
         * ```c
         * // This process already has org.example.Endpoint bus name
         * endpoint = tracker_endpoint_dbus_new (sparql_connection,
         *                                       dbus_connection,
         *                                       NULL,
         *                                       NULL,
         *                                       &error);
         *
         * // From another process
         * connection = tracker_sparql_connection_bus_new ("org.example.Endpoint",
         *                                                 NULL,
         *                                                 dbus_connection,
         *                                                 &error);
         * ```
         *
         * The `TrackerEndpointDBus` will manage a DBus object at the given path
         * with the `org.freedesktop.Tracker3.Endpoint` interface, if no path is
         * given the object will be at the default `/org/freedesktop/Tracker3/Endpoint`
         * location.
         *
         * Access to D-Bus endpoints may be managed via the
         * [signal`EndpointDBus:`:block-call] signal, the boolean
         * return value expressing whether the request is blocked or not.
         * Inspection of the requester address is left up to the user. The
         * default value allows all requests independently of their provenance.
         *
         * However, moderating access to D-Bus interfaces is typically not necessary
         * in user code, as access to public D-Bus endpoints will be transparently
         * managed through the Tracker portal service for applications sandboxed
         * via XDG portals. These already have access to D-Bus SPARQL endpoints and
         * their data naturally filtered as defined in the application manifest.
         *
         * A `TrackerEndpointDBus` may be created on a different thread/main
         * context from the one that created [class`SparqlConnection]`.
         */
        class EndpointDBus extends Endpoint implements Gio.Initable {
            static $gtype: GObject.GType<EndpointDBus>;

            // Properties

            /**
             * The [class`Gio`.DBusConnection] where the connection is proxied through.
             */
            get dbus_connection(): Gio.DBusConnection;
            /**
             * The [class`Gio`.DBusConnection] where the connection is proxied through.
             */
            get dbusConnection(): Gio.DBusConnection;
            /**
             * The DBus object path that this endpoint manages.
             */
            get object_path(): string;
            /**
             * The DBus object path that this endpoint manages.
             */
            get objectPath(): string;

            // Constructors

            constructor(properties?: Partial<EndpointDBus.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                sparql_connection: SparqlConnection,
                dbus_connection: Gio.DBusConnection,
                object_path?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): EndpointDBus;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'block-call', callback: (_source: this, object: string) => boolean): number;
            connect_after(signal: 'block-call', callback: (_source: this, object: string) => boolean): number;
            emit(signal: 'block-call', object: string): void;

            // Inherited methods
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

        module EndpointHttp {
            // Signal callback interfaces

            interface BlockRemoteAddress {
                (address: Gio.SocketAddress): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends Endpoint.ConstructorProps, Gio.Initable.ConstructorProps {
                http_certificate: Gio.TlsCertificate;
                httpCertificate: Gio.TlsCertificate;
                http_port: number;
                httpPort: number;
            }
        }

        /**
         * `TrackerEndpointHttp` makes the RDF data in a [class`SparqlConnection]`
         * accessible to other hosts via HTTP.
         *
         * This object is a [class`Endpoint]` subclass that exports
         * a [class`SparqlConnection]` so its RDF data is accessible via HTTP
         * requests on the given port. This endpoint implementation is compliant
         * with the [SPARQL protocol specifications](https://www.w3.org/TR/2013/REC-sparql11-protocol-20130321/)
         * and may interoperate with other implementations.
         *
         * ```c
         * // This host has "example.local" hostname
         * endpoint = tracker_endpoint_http_new (sparql_connection,
         *                                       8080,
         *                                       tls_certificate,
         *                                       NULL,
         *                                       &error);
         *
         * // From another host
         * connection = tracker_sparql_connection_remote_new ("http://example.local:8080/sparql");
         * ```
         *
         * Access to HTTP endpoints may be managed via the
         * [signal`EndpointHttp:`:block-remote-address] signal, the boolean
         * return value expressing whether the connection is blocked or not.
         * Inspection of the requester address is left up to the user. The
         * default value allows all requests independently of their provenance,
         * users are encouraged to add a handler.
         *
         * If the provided [class`Gio`.TlsCertificate] is %NULL, the endpoint will allow
         * plain HTTP connections. Users are encouraged to provide a certificate
         * in order to use HTTPS.
         *
         * As a security measure, and in compliance specifications,
         * the HTTP endpoint does not handle database updates or modifications in any
         * way. The database content is considered to be entirely managed by the
         * process that creates the HTTP endpoint and owns the [class`SparqlConnection]`.
         *
         * A `TrackerEndpointHttp` may be created on a different thread/main
         * context from the one that created [class`SparqlConnection]`.
         */
        class EndpointHttp extends Endpoint implements Gio.Initable {
            static $gtype: GObject.GType<EndpointHttp>;

            // Properties

            /**
             * [class`Gio`.TlsCertificate] to encrypt the communication.
             */
            get http_certificate(): Gio.TlsCertificate;
            /**
             * [class`Gio`.TlsCertificate] to encrypt the communication.
             */
            get httpCertificate(): Gio.TlsCertificate;
            /**
             * HTTP port used to listen requests.
             */
            get http_port(): number;
            /**
             * HTTP port used to listen requests.
             */
            get httpPort(): number;

            // Constructors

            constructor(properties?: Partial<EndpointHttp.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                sparql_connection: SparqlConnection,
                port: number,
                certificate?: Gio.TlsCertificate | null,
                cancellable?: Gio.Cancellable | null,
            ): EndpointHttp;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'block-remote-address',
                callback: (_source: this, address: Gio.SocketAddress) => boolean,
            ): number;
            connect_after(
                signal: 'block-remote-address',
                callback: (_source: this, address: Gio.SocketAddress) => boolean,
            ): number;
            emit(signal: 'block-remote-address', address: Gio.SocketAddress): void;

            // Inherited methods
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

        module NamespaceManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * `TrackerNamespaceManager` object represents a mapping between namespaces and
         * their shortened prefixes.
         *
         * This object keeps track of namespaces, and allows you to assign
         * short prefixes for them to avoid frequent use of full namespace IRIs. The syntax
         * used is that of [Compact URIs (CURIEs)](https://www.w3.org/TR/2010/NOTE-curie-20101216).
         *
         * Usually you will want to use a namespace manager obtained through
         * [method`SparqlConnection`.get_namespace_manager] from the
         * [class`SparqlConnection]` that manages the RDF data, as that will
         * contain all prefixes and namespaces that are pre-defined by its ontology.
         */
        class NamespaceManager extends GObject.Object {
            static $gtype: GObject.GType<NamespaceManager>;

            // Constructors

            constructor(properties?: Partial<NamespaceManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): NamespaceManager;

            // Static methods

            /**
             * Returns the global `TrackerNamespaceManager` that contains a set of well-known
             * namespaces and prefixes, such as `rdf:`, `rdfs:`, `nie:`, `tracker:`, etc.
             *
             * Note that the list of prefixes and namespaces is hardcoded in
             * libtracker-sparql. It may not correspond with the installed set of
             * ontologies, if they have been modified since they were installed.
             */
            static get_default(): NamespaceManager;

            // Methods

            /**
             * Adds `prefix` as the recognised abbreviaton of `namespace`.
             *
             * Only one prefix is allowed for a given namespace, and all prefixes must
             * be unique.
             *
             * Since 3.3, The `TrackerNamespaceManager` instances obtained through
             * [method`SparqlConnection`.get_namespace_manager] are "sealed",
             * this API call should not performed on those.
             * @param prefix a short, unique prefix to identify @namespace
             * @param ns the URL of the given namespace
             */
            add_prefix(prefix: string, ns: string): void;
            /**
             * If `uri` begins with one of the namespaces known to this
             * `TrackerNamespaceManager`, then the return value will be the
             * compressed URI. Otherwise, %NULL will be returned.
             * @param uri a URI or compact URI
             * @returns (nullable): the compressed URI
             */
            compress_uri(uri: string): string;
            /**
             * If `compact_uri` begins with one of the prefixes known to this
             * `TrackerNamespaceManager`, then the return value will be the
             * expanded URI. Otherwise, a copy of `compact_uri` will be returned.
             * @param compact_uri a URI or compact URI
             * @returns The possibly expanded URI in a newly-allocated string.
             */
            expand_uri(compact_uri: string): string;
            /**
             * Calls `func` for each known prefix / URI pair.
             * @param func the function to call for each prefix / URI pair
             */
            foreach(func: GLib.HFunc): void;
            /**
             * Returns whether `prefix` is known.
             * @param prefix a string
             * @returns %TRUE if the `TrackerNamespaceManager` knows about @prefix, %FALSE otherwise
             */
            has_prefix(prefix: string): boolean;
            /**
             * Looks up the namespace URI corresponding to `prefix,` or %NULL if the prefix
             * is not known.
             * @param prefix a string
             * @returns a string owned by the `TrackerNamespaceManager`, or %NULL
             */
            lookup_prefix(prefix: string): string | null;
            /**
             * Writes out all namespaces as ``prefix`` statements in
             * the [Turtle](https://www.w3.org/TR/turtle/) RDF format.
             * @returns a newly-allocated string
             */
            print_turtle(): string;
        }

        module Notifier {
            // Signal callback interfaces

            interface Events {
                (service: string, graph: string, events: NotifierEvent[]): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connection: SparqlConnection;
            }
        }

        /**
         * `TrackerNotifier` allows receiving notification on changes
         * in the data stored by a [class`SparqlConnection]`.
         *
         * This object may be created through [method`SparqlConnection`.create_notifier],
         * events can then be listened for by connecting to the
         * [signal`Notifier:`:events] signal.
         *
         * Not every change is notified, only RDF resources with a
         * class that has the [nrl:notify](nrl-ontology.html#nrl:notify)
         * property defined by the ontology will be notified upon changes.
         *
         * Database changes are communicated through [struct`NotifierEvent]` events on
         * individual graph/resource pairs. The event type obtained through
         * [method`NotifierEvent`.get_event_type] will determine the type of event.
         * Insertion of new resources is notified through
         * %TRACKER_NOTIFIER_EVENT_CREATE events, deletion of
         * resources is notified through %TRACKER_NOTIFIER_EVENT_DELETE
         * events, and changes on any property of the resource is notified
         * through %TRACKER_NOTIFIER_EVENT_UPDATE events.
         *
         * The events happen in reaction to database changes, after a `TrackerNotifier`
         * received an event of type %TRACKER_NOTIFIER_EVENT_DELETE, the resource will
         * not exist anymore and only the information in the [struct`NotifierEvent]`
         * will remain.
         *
         * Similarly, when receiving an event of type %TRACKER_NOTIFIER_EVENT_UPDATE,
         * the resource will have already changed, so the data previous to the update is
         * no longer available.
         *
         * The [signal`Notifier:`:events] signal is emitted in the thread-default
         * main context of the thread where the `TrackerNotifier` instance was created.
         */
        class Notifier extends GObject.Object {
            static $gtype: GObject.GType<Notifier>;

            // Properties

            /**
             * SPARQL connection to listen to.
             */
            get connection(): SparqlConnection;

            // Constructors

            constructor(properties?: Partial<Notifier.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'events',
                callback: (_source: this, service: string, graph: string, events: NotifierEvent[]) => void,
            ): number;
            connect_after(
                signal: 'events',
                callback: (_source: this, service: string, graph: string, events: NotifierEvent[]) => void,
            ): number;
            emit(signal: 'events', service: string, graph: string, events: NotifierEvent[]): void;

            // Methods

            /**
             * Listens to notification events from a remote DBus SPARQL endpoint.
             *
             * If `connection` refers to a message bus (system/session), `service` must refer
             * to a D-Bus name (either unique or well-known). If `connection` is a non-message
             * bus (e.g. a peer-to-peer D-Bus connection) the `service` argument may be %NULL.
             *
             * If the `object_path` argument is %NULL, the default
             * `/org/freedesktop/Tracker3/Endpoint` path will be
             * used. If `graph` is %NULL, all graphs will be listened for.
             *
             * The signal subscription can be removed with
             * [method`Notifier`.signal_unsubscribe].
             *
             * Note that this call is not necessary to receive notifications on
             * a connection obtained through [ctor`SparqlConnection`.bus_new],
             * only to listen to update notifications from additional DBus endpoints.
             * @param connection A [class@Gio.DBusConnection]
             * @param service DBus service name to subscribe to events for, or %NULL
             * @param object_path DBus object path to subscribe to events for, or %NULL
             * @param graph Graph to listen events for, or %NULL
             * @returns An ID for this subscription
             */
            signal_subscribe(
                connection: Gio.DBusConnection,
                service?: string | null,
                object_path?: string | null,
                graph?: string | null,
            ): number;
            /**
             * Undoes a signal subscription done through [method`Notifier`.signal_subscribe].
             *
             * The `handler_id` argument was previously obtained during signal subscription creation.
             * @param handler_id A signal subscription handler ID
             */
            signal_unsubscribe(handler_id: number): void;
        }

        module Resource {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                identifier: string;
            }
        }

        /**
         * `TrackerResource` is an in-memory representation of RDF data about a given resource.
         *
         * This object keeps track of a set of properties for a given resource, and can
         * also link to other `TrackerResource` objects to form trees or graphs of RDF
         * data. See [method`Resource`.set_relation] and [method`Resource`.set_uri]
         * on how to link a `TrackerResource` to other RDF data.
         *
         * `TrackerResource` may also hold data about literal values, added through
         * the specialized [method`Resource`.set_int64], [method`Resource`.set_string],
         * etc family of functions, or the generic [method`Resource`.set_gvalue] method.
         *
         * Since RDF properties may be multi-valued, for every `set` call there exists
         * another `add` call (e.g. [method`Resource`.add_int64], [method`Resource`.add_string]
         * and so on). The `set` methods do also reset any previously value the
         * property might hold for the given resource.
         *
         * Resources may have an IRI set at creation through [ctor`Resource`.new],
         * or set afterwards through [method`Resource`.set_identifier]. Resources
         * without a name will represent a blank node, and will be dealt with as such
         * during database insertions.
         *
         * `TrackerResource` performs no validation on the data being coherent as per
         * any ontology. Errors will be found out at the time of using the TrackerResource
         * for e.g. database updates.
         *
         * Once the RDF data is built in memory, the (tree of) `TrackerResource` may be
         * converted to a RDF format through [method`Resource`.print_rdf], or
         * directly inserted into a database through [method`Batch`.add_resource]
         * or [method`SparqlConnection`.update_resource].
         */
        class Resource extends GObject.Object {
            static $gtype: GObject.GType<Resource>;

            // Properties

            /**
             * The URI identifier for this class, or %NULL for a
             * blank node.
             */
            get identifier(): string;
            set identifier(val: string);

            // Constructors

            constructor(properties?: Partial<Resource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](identifier?: string | null): Resource;

            // Static methods

            /**
             * Deserializes a `TrackerResource` previously serialized with
             * [method`Resource`.serialize]. It is implied that both ends
             * use a common [class`NamespaceManager]`.
             * @param variant a [type@GLib.Variant]
             */
            static deserialize(variant: GLib.Variant): Resource | null;

            // Methods

            /**
             * Adds a boolean property. Previous values for the same property are kept.
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method corresponds to [xsd:boolean](xsd-ontology.html#xsd:boolean).
             * @param property_uri A string identifying the property to modify
             * @param value The property boolean value
             */
            add_boolean(property_uri: string, value: boolean): void;
            /**
             * Adds a date property as a [type`GLib`.DateTime]. Previous values for the
             * same property are kept.
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method corresponds to [xsd:date](xsd-ontology.html#xsd:date) and
             * [xsd:dateTime](xsd-ontology.html#xsd:dateTime).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            add_datetime(property_uri: string, value: GLib.DateTime): void;
            /**
             * Adds a numeric property with double precision. Previous values for the same property are kept.
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method corresponds to [xsd:double](xsd-ontology.html#xsd:double).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            add_double(property_uri: string, value: number): void;
            /**
             * Add `value` to the list of values for given property.
             *
             * You can pass any kind of [struct`GObject`.Value] for `value,` but serialization functions will
             * normally only be able to serialize URIs/relationships and fundamental value
             * types (string, int, etc.).
             * @param property_uri a string identifying the property to set
             * @param value an initialised [struct@GObject.Value]
             */
            add_gvalue(property_uri: string, value: GObject.Value | any): void;
            /**
             * Adds a numeric property with integer precision. Previous values for the same property are kept.
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            add_int(property_uri: string, value: number): void;
            /**
             * Adds a numeric property with 64-bit integer precision. Previous values for the same property are kept.
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            add_int64(property_uri: string, value: number): void;
            /**
             * Adds a resource property as a `TrackerResource`. Previous values for the same property are kept.
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
             * that points to a non-literal class (i.e. a subclass of
             * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
             *
             * This method produces similar RDF to [method`Resource`.add_uri],
             * although in this function the URI will depend on the identifier
             * set on `resource`.
             * @param property_uri a string identifying the property to modify
             * @param resource the property object
             */
            add_relation(property_uri: string, resource: Resource): void;
            /**
             * Adds a string property. Previous values for the same property are kept.
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method corresponds to [xsd:string](xsd-ontology.html#xsd:string).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            add_string(property_uri: string, value: string): void;
            /**
             * Adds a resource property as a `TrackerResource`. Previous values for the same property are kept.
             * Takes ownership on the given `resource`.
             *
             * This method is meant to RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
             * that points to a non-literal class (i.e. a subclass of
             * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
             *
             * This function produces similar RDF to [method`Resource`.add_uri],
             * although in this function the URI will depend on the identifier
             * set on `resource`. This function takes ownership of `resource`.
             * @param property_uri a string identifying the property to modify
             * @param resource the property object
             */
            add_take_relation(property_uri: string, resource: Resource): void;
            /**
             * Adds a resource property as an URI string. Previous values for the same property are kept.
             *
             * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
             * that points to a non-literal class (i.e. a subclass of
             * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
             *
             * This method is meant for RDF properties allowing multiple values, see
             * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
             *
             * This function produces similar RDF to [method`Resource`.add_relation], although
             * it requires that the URI is previously known.
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            add_uri(property_uri: string, value: string): void;
            /**
             * Returns the first boolean object previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first boolean object
             */
            get_first_boolean(property_uri: string): boolean;
            /**
             * Returns the first [type`GLib`.DateTime] previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first GDateTime object
             */
            get_first_datetime(property_uri: string): GLib.DateTime | null;
            /**
             * Returns the first double object previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first double object
             */
            get_first_double(property_uri: string): number;
            /**
             * Returns the first integer object previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first integer object
             */
            get_first_int(property_uri: string): number;
            /**
             * Returns the first integer object previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first integer object
             */
            get_first_int64(property_uri: string): number;
            /**
             * Returns the first resource object previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first resource object
             */
            get_first_relation(property_uri: string): Resource | null;
            /**
             * Returns the first string object previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first string object
             */
            get_first_string(property_uri: string): string | null;
            /**
             * Returns the first resource object previously assigned to a property.
             * @param property_uri a string identifying the property to look up
             * @returns the first resource object as an URI.
             */
            get_first_uri(property_uri: string): string | null;
            /**
             * Returns the identifier of a resource.
             *
             * If the identifier was set to NULL, the identifier returned will be a locally
             * unique SPARQL blank node identifier, such as `_:123`.
             * @returns a string owned by the resource
             */
            get_identifier(): string | null;
            /**
             * Gets the list of properties defined in `resource`
             * @returns The list of properties.
             */
            get_properties(): string[];
            /**
             * Returns whether the prior values for this property would be deleted
             * in the SPARQL issued by `resource`.
             * @param property_uri a string identifying the property to query
             * @returns #TRUE if the property would be overwritten
             */
            get_property_overwrite(property_uri: string): boolean;
            /**
             * Returns the list of all known values of the given property.
             * @param property_uri a string identifying the property to look up
             * @returns a [struct@GLib.List] of   [struct@GObject.Value] instances. The list should be freed with [func@GLib.List.free]
             */
            get_values(property_uri: string): GObject.Value[] | null;
            /**
             * A helper function that compares a `TrackerResource` by its identifier
             * string.
             * @param identifier a string identifying the resource
             * @returns an integer less than, equal to, or greater than zero, if the          resource identifier is <, == or > than @identifier
             */
            identifier_compare_func(identifier: string): number;
            /**
             * Serialize all the information in `resource` as a JSON-LD document.
             *
             * See <http://www.jsonld.org/> for more information on the JSON-LD
             * serialization format.
             *
             * The `namespaces` object is used to expand any compact URI values. In most
             * cases you should pass the one returned by [method`SparqlConnection`.get_namespace_manager]
             * from the connection that is the intended recipient of this data.
             * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
             * @returns a newly-allocated string containing JSON-LD data.
             */
            print_jsonld(namespaces?: NamespaceManager | null): string;
            /**
             * Serialize all the information in `resource` into the selected RDF format.
             *
             * The `namespaces` object is used to expand any compact URI values. In most
             * cases you should pass the one returned by [method`SparqlConnection`.get_namespace_manager]
             * from the connection that is the intended recipient of this data.
             * @param namespaces a set of prefixed URLs
             * @param format RDF format of the printed string
             * @param graph target graph of the resource RDF, or %NULL for the default graph
             * @returns a newly-allocated string containing RDF data in the requested format.
             */
            print_rdf(namespaces: NamespaceManager, format: RdfFormat, graph?: string | null): string;
            /**
             * Generates a SPARQL command to update a database with the information
             * stored in `resource`.
             *
             * The `namespaces` object is used to expand any compact URI values. In most
             * cases you should pass the one returned by [method`SparqlConnection`.get_namespace_manager]
             * from the connection that is the intended recipient of this data.
             * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
             * @param graph_id the URN of the graph the data should be added to,     or %NULL
             * @returns a newly-allocated string containing a SPARQL update command.
             */
            print_sparql_update(namespaces?: NamespaceManager | null, graph_id?: string | null): string;
            /**
             * Serialize all the information in `resource` as a Turtle document.
             *
             * The generated Turtle should correspond to this standard:
             * <https://www.w3.org/TR/2014/REC-turtle-20140225/>
             *
             * The `namespaces` object is used to expand any compact URI values. In most
             * cases you should pass the one returned by [method`SparqlConnection`.get_namespace_manager]
             * from the connection that is the intended recipient of this data.
             * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
             * @returns a newly-allocated string
             */
            print_turtle(namespaces?: NamespaceManager | null): string;
            /**
             * Serializes a `TrackerResource` to a [type`GLib`.Variant] in a lossless way.
             * All child resources are subsequently serialized. It is implied
             * that both ends use a common [class`NamespaceManager]`.
             * @returns A variant describing the resource,          the reference is floating.
             */
            serialize(): GLib.Variant | null;
            /**
             * Sets a boolean property. Replaces any previous value.
             *
             * This method corresponds to [xsd:boolean](xsd-ontology.html#xsd:boolean).
             * @param property_uri A string identifying the property to modify
             * @param value The property boolean value
             */
            set_boolean(property_uri: string, value: boolean): void;
            /**
             * Sets a date property as a [type`GLib`.DateTime]. Replaces any previous value.
             *
             * This method corresponds to [xsd:date](xsd-ontology.html#xsd:date) and
             * [xsd:dateTime](xsd-ontology.html#xsd:dateTime).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            set_datetime(property_uri: string, value: GLib.DateTime): void;
            /**
             * Sets a numeric property with double precision. Replaces any previous value.
             *
             * This method corresponds to [xsd:double](xsd-ontology.html#xsd:double).
             * @param property_uri A string identifying the property to modify
             * @param value The property object
             */
            set_double(property_uri: string, value: number): void;
            /**
             * Replace any previously existing value for `property_uri` with `value`.
             *
             * When serialising to SPARQL, any properties that were set with this function
             * will get a corresponding DELETE statement to remove any existing values in
             * the database.
             *
             * You can pass any kind of [struct`GObject`.Value] for `value,` but serialization functions will
             * normally only be able to serialize URIs/relationships and fundamental value
             * types (string, int, etc.).
             * @param property_uri a string identifying the property to set
             * @param value an initialised [struct@GObject.Value]
             */
            set_gvalue(property_uri: string, value: GObject.Value | any): void;
            /**
             * Changes the identifier of a `TrackerResource`. The identifier should be a
             * URI or compact URI, but this is not necessarily enforced. Invalid
             * identifiers may cause errors when serializing the resource or trying to
             * insert the results in a database.
             *
             * If the identifier is set to %NULL, a SPARQL blank node identifier such as
             * `_:123` is assigned to the resource.
             * @param identifier a string identifying the resource
             */
            set_identifier(identifier?: string | null): void;
            /**
             * Sets a numeric property with integer precision. Replaces any previous value.
             *
             * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
             * @param property_uri A string identifying the property to modify
             * @param value The property object
             */
            set_int(property_uri: string, value: number): void;
            /**
             * Sets a numeric property with 64-bit integer precision. Replaces any previous value.
             *
             * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            set_int64(property_uri: string, value: number): void;
            /**
             * Sets a resource property as a `TrackerResource`. Replaces any previous value.
             *
             * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
             * that points to a non-literal class (i.e. a subclass of
             * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
             *
             * This function produces similar RDF to [method`Resource`.set_uri],
             * although in this function the URI will depend on the identifier
             * set on `resource`.
             * @param property_uri a string identifying the property to modify
             * @param resource the property object
             */
            set_relation(property_uri: string, resource: Resource): void;
            /**
             * Sets a string property. Replaces any previous value.
             *
             * This method corresponds to [xsd:string](xsd-ontology.html#xsd:string).
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            set_string(property_uri: string, value: string): void;
            /**
             * Sets a resource property as a `TrackerResource`. Replaces any previous value.
             * Takes ownership on the given `resource`.
             *
             * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
             * that points to a non-literal class (i.e. a subclass of
             * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
             *
             * This function produces similar RDF to [method`Resource`.set_uri],
             * although in this function the URI will depend on the identifier
             * set on `resource`.
             * @param property_uri a string identifying the property to modify
             * @param resource the property object
             */
            set_take_relation(property_uri: string, resource: Resource): void;
            /**
             * Sets a resource property as an URI string. Replaces any previous value.
             *
             * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
             * that points to a non-literal class (i.e. a subclass of
             * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
             *
             * This function produces similar RDF to [method`Resource`.set_relation], although
             * it requires that the URI is previously known.
             * @param property_uri a string identifying the property to modify
             * @param value the property object
             */
            set_uri(property_uri: string, value: string): void;
        }

        module SparqlConnection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * `TrackerSparqlConnection` holds a connection to a RDF triple store.
         *
         * This triple store may be of three types:
         *
         *  - Local to the process, created through [ctor`SparqlConnection`.new].
         *  - A HTTP SPARQL endpoint over the network, created through
         *    [ctor`SparqlConnection`.remote_new]
         *  - A DBus SPARQL endpoint owned by another process in the same machine, created
         *    through [ctor`SparqlConnection`.bus_new]
         *
         * When creating a local triple store, it is required to give details about its
         * structure. This is done by passing a location to an ontology, see more
         * on how are [ontologies defined](ontologies.html). A local database may be
         * stored in a filesystem location, or it may reside in memory.
         *
         * A `TrackerSparqlConnection` is private to the calling process, it can be
         * exposed to other hosts/processes via a [class`Endpoint]`, see
         * [ctor`EndpointDBus`.new] and [ctor`EndpointHttp`.new].
         *
         * When issuing SPARQL queries and updates, it is recommended that these are
         * created through [class`SparqlStatement]` to avoid the SPARQL
         * injection class of bugs, see [method`SparqlConnection`.query_statement]
         * and [method`SparqlConnection`.update_statement]. For SPARQL updates
         * it is also possible to use a "builder" approach to generate RDF data, see
         * [class`Resource]`. It is also possible to create [class`SparqlStatement]`
         * objects for SPARQL queries and updates from SPARQL strings embedded in a
         * [struct`Gio`.Resource], see [method`SparqlConnection`.load_statement_from_gresource].
         *
         * To get the best performance, it is recommended that SPARQL updates are clustered
         * through [class`Batch]`.
         *
         * `TrackerSparqlConnection` also offers a number of methods for the simple cases,
         * [method`SparqlConnection`.query] may be used when there is a SPARQL
         * query string directly available, and the [method`SparqlConnection`.update]
         * family of functions may be used for one-off updates. All functions have asynchronous
         * variants.
         *
         * When a SPARQL query is executed, a [class`SparqlCursor]` will be obtained
         * to iterate over the query results.
         *
         * Depending on the ontology definition, `TrackerSparqlConnection` may emit
         * notifications whenever resources of certain types get insert, modified or
         * deleted from the triple store (see [nrl:notify](nrl-ontology.html#nrl:notify).
         * These notifications can be handled via a [class`Notifier]` obtained with
         * [method`SparqlConnection`.create_notifier].
         *
         * After done with a connection, it is recommended to call [method`SparqlConnection`.close]
         * or [method`SparqlConnection`.close_async] explicitly to cleanly close the
         * connection and prevent consistency checks on future runs. The triple store
         * connection will be implicitly closed when the `TrackerSparqlConnection` object
         * is disposed.
         *
         * A `TrackerSparqlConnection` may be used from multiple threads, asynchronous
         * updates are executed sequentially on arrival order, asynchronous
         * queries are dispatched in a thread pool.
         *
         * If you ever have the need to procedurally compose SPARQL query strings, consider
         * the use of [func`sparql_escape_string]` for literal strings and
         * the [func`sparql_escape_uri]` family of functions for URIs.
         */
        abstract class SparqlConnection extends GObject.Object {
            static $gtype: GObject.GType<SparqlConnection>;

            // Constructors

            constructor(properties?: Partial<SparqlConnection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static bus_new(
                service_name: string,
                object_path?: string | null,
                dbus_connection?: Gio.DBusConnection | null,
            ): SparqlConnection;

            static bus_new_finish(result: Gio.AsyncResult): SparqlConnection;

            static ['new'](
                flags: SparqlConnectionFlags,
                store?: Gio.File | null,
                ontology?: Gio.File | null,
                cancellable?: Gio.Cancellable | null,
            ): SparqlConnection;

            static new_finish(result: Gio.AsyncResult): SparqlConnection;

            static remote_new(uri_base: string): SparqlConnection;

            // Static methods

            /**
             * Connects asynchronously to a database owned by another process on the
             * local machine via DBus.
             * @param service_name The name of the D-Bus service to connect to.
             * @param object_path The path to the object, or %NULL to use the default.
             * @param dbus_connection The [class@Gio.DBusConnection] to use, or %NULL to use the session bus
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            static bus_new_async(
                service_name: string,
                object_path?: string | null,
                dbus_connection?: Gio.DBusConnection | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<SparqlConnection> | null,
            ): void;
            /**
             * Creates or opens a process-local database asynchronously.
             *
             * See [ctor`SparqlConnection`.new] for more information.
             * @param flags Connection flags to define the SPARQL connection behavior
             * @param store The directory that contains the database as a [iface@Gio.File], or %NULL
             * @param ontology The directory that contains the database schemas as a [iface@Gio.File], or %NULL
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            static new_async(
                flags: SparqlConnectionFlags,
                store?: Gio.File | null,
                ontology?: Gio.File | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<SparqlConnection> | null,
            ): void;

            // Methods

            /**
             * Closes a SPARQL connection.
             *
             * No other API calls than g_object_unref() should happen after this call.
             *
             * This call is blocking. All pending updates will be flushed, and the
             * store databases will be closed orderly. All ongoing SELECT queries
             * will be cancelled. Notifiers will no longer emit events.
             */
            close(): void;
            /**
             * Closes a SPARQL connection asynchronously.
             *
             * No other API calls than g_object_unref() should happen after this call.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the operation started with [method`SparqlConnection`.close_async].
             * @param res A [type@Gio.AsyncResult] with the result of the operation
             * @returns %FALSE if some error occurred, %TRUE otherwise
             */
            close_finish(res: Gio.AsyncResult): boolean;
            /**
             * Creates a new [class`Batch]` to store and execute SPARQL updates.
             *
             * If the connection is readonly or cannot issue SPARQL updates, %NULL will be returned.
             * @returns (nullable): A new [class@Batch]
             */
            create_batch(): Batch;
            /**
             * Creates a new [class`Notifier]` to receive notifications about changes in `connection`.
             *
             * See [class`Notifier]` documentation for information about how to use this
             * object.
             *
             * Connections to HTTP endpoints will return %NULL.
             * @returns A newly created notifier.
             */
            create_notifier(): Notifier | null;
            /**
             * Loads the RDF data contained in `stream` into the given `connection`.
             *
             * This is an asynchronous operation, `callback` will be invoked when the
             * data has been fully inserted to `connection`.
             *
             * The RDF data will be inserted in the given `default_graph` if one is provided,
             * or the anonymous graph if `default_graph` is %NULL. Any RDF data that has a
             * graph specified (e.g. using the `GRAPH` clause in the Trig format) will
             * be inserted in the specified graph instead of `default_graph`.
             *
             * The `flags` argument is reserved for future expansions, currently
             * %TRACKER_DESERIALIZE_FLAGS_NONE must be passed.
             * @param flags Deserialization flags
             * @param format RDF format of data in stream
             * @param default_graph Default graph that will receive the RDF data
             * @param stream Input stream with RDF data
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            deserialize_async(
                flags: DeserializeFlags,
                format: RdfFormat,
                default_graph: string,
                stream: Gio.InputStream,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with [method`SparqlConnection`.deserialize_async].
             * @param result A [type@Gio.AsyncResult] with the result of the operation
             * @returns %TRUE if all data was inserted successfully.
             */
            deserialize_finish(result: Gio.AsyncResult): boolean;
            /**
             * Returns a [class`NamespaceManager]` that contains all
             * prefixes in the ontology of `connection`.
             * @returns a [class@NamespaceManager] with the prefixes of @connection.
             */
            get_namespace_manager(): NamespaceManager;
            /**
             * Prepares a [class`SparqlStatement]` for the SPARQL contained as a [struct`Gio`.Resource]
             * file at `resource_path`.
             *
             * SPARQL Query files typically have the .rq extension. This will use
             * [method`SparqlConnection`.query_statement] or [method`SparqlConnection`.update_statement]
             * underneath to indistinctly return SPARQL query or update statements.
             * @param resource_path The resource path of the file to parse.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns A prepared statement
             */
            load_statement_from_gresource(
                resource_path: string,
                cancellable?: Gio.Cancellable | null,
            ): SparqlStatement | null;
            /**
             * Maps a `TrackerSparqlConnection` onto another through a `private:`handle_name`` URI.
             *
             * This can be accessed via the SERVICE SPARQL syntax in
             * queries from `connection`. E.g.:
             *
             * ```c
             * tracker_sparql_connection_map_connection (connection,
             *                                           "other-connection",
             *                                           other_connection);
             * ```
             *
             * ```sparql
             * SELECT ?u {
             *   SERVICE <private:other-connection> {
             *     ?u a rdfs:Resource
             *   }
             * }
             * ```
             *
             * This is useful to interrelate data from multiple
             * `TrackerSparqlConnection` instances maintained by the same process,
             * without creating a public endpoint for `service_connection`.
             *
             * `connection` may only be a `TrackerSparqlConnection` created via
             * [ctor`SparqlConnection`.new] and [func`SparqlConnection`.new_async].
             * @param handle_name Handle name for @service_connection
             * @param service_connection a `TrackerSparqlConnection` to use from @connection
             */
            map_connection(handle_name: string, service_connection: SparqlConnection): void;
            /**
             * Executes a SPARQL query on `connection`.
             *
             * This method is synchronous and will block until the query
             * is executed. See [method`SparqlConnection`.query_async]
             * for an asynchronous variant.
             *
             * If the query is partially built from user input or other
             * untrusted sources, special care is required about possible
             * SPARQL injection. In order to avoid it entirely, it is recommended
             * to use [class`SparqlStatement]`. The function
             * [func`sparql_escape_string]` exists as a last resort,
             * but its use is not recommended.
             * @param sparql String containing the SPARQL query
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns a [class@SparqlCursor] with the results.
             */
            query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor;
            /**
             * Executes asynchronously a SPARQL query on `connection`
             *
             * If the query is partially built from user input or other
             * untrusted sources, special care is required about possible
             * SPARQL injection. In order to avoid it entirely, it is recommended
             * to use [class`SparqlStatement]`. The function
             * [func`sparql_escape_string]` exists as a last resort,
             * but its use is not recommended.
             * @param sparql String containing the SPARQL query
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            query_async(
                sparql: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with [method`SparqlConnection`.query_async].
             * @param res A [type@Gio.AsyncResult] with the result of the operation
             * @returns a [class@SparqlCursor] with the results.
             */
            query_finish(res: Gio.AsyncResult): SparqlCursor;
            /**
             * Prepares the given `SELECT`/`ASK`/`DESCRIBE`/`CONSTRUCT` SPARQL query as a
             * [class`SparqlStatement]`.
             *
             * This prepared statement can be executed through [method`SparqlStatement`.execute]
             * or [method`SparqlStatement`.serialize_async] families of functions.
             * @param sparql The SPARQL query
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns A prepared statement
             */
            query_statement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null;
            /**
             * Serializes a `DESCRIBE` or `CONSTRUCT` query into the specified RDF format.
             *
             * This is an asynchronous operation, `callback` will be invoked when
             * the data is available for reading.
             *
             * The SPARQL endpoint may not support the specified format, in that case
             * an error will be raised.
             *
             * The `flags` argument is reserved for future expansions, currently
             * %TRACKER_SERIALIZE_FLAGS_NONE must be passed.
             * @param flags Serialization flags
             * @param format Output RDF format
             * @param query SPARQL query
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            serialize_async(
                flags: SerializeFlags,
                format: RdfFormat,
                query: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with [method`SparqlConnection`.serialize_async].
             * @param result A [type@Gio.AsyncResult] with the result of the operation
             * @returns A [class@Gio.InputStream] to read RDF content.
             */
            serialize_finish(result: Gio.AsyncResult): Gio.InputStream;
            /**
             * Executes a SPARQL update on `connection`.
             *
             * This method is synchronous and will block until the update
             * is finished. See [method`SparqlConnection`.update_async]
             * for an asynchronous variant.
             *
             * It is recommented to consider the usage of [class`Batch]`
             * to cluster database updates. Frequent isolated SPARQL updates
             * through this method will have a degraded performance in comparison.
             *
             * If the query is partially built from user input or other
             * untrusted sources, special care is required about possible
             * SPARQL injection. In order to avoid it entirely, it is recommended
             * to use [class`SparqlStatement]`, or to build the SPARQL
             * input through [class`Resource]`. The function
             * [func`sparql_escape_string]` exists as a last resort,
             * but its use is not recommended.
             * @param sparql String containing the SPARQL update query
             * @param cancellable Optional [type@Gio.Cancellable]
             */
            update(sparql: string, cancellable?: Gio.Cancellable | null): void;
            /**
             * Executes asynchronously an array of SPARQL updates. All updates in the
             * array are handled within a single transaction.
             *
             * If the query is partially built from user input or other
             * untrusted sources, special care is required about possible
             * SPARQL injection. In order to avoid it entirely, it is recommended
             * to use [class`SparqlStatement]`, or to build the SPARQL
             * input through [class`Resource]`. The function
             * [func`sparql_escape_string]` exists as a last resort,
             * but its use is not recommended.
             * @param sparql An array of strings containing the SPARQL update queries
             * @param sparql_length The amount of strings you pass as @sparql
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            update_array_async(
                sparql: string,
                sparql_length: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with [method`SparqlConnection`.update_array_async].
             * @param res A [type@Gio.AsyncResult] with the result of the operation
             * @returns #TRUE if there were no errors.
             */
            update_array_finish(res: Gio.AsyncResult): boolean;
            /**
             * Executes asynchronously a SPARQL update.
             *
             * It is recommented to consider the usage of [class`Batch]`
             * to cluster database updates. Frequent isolated SPARQL updates
             * through this method will have a degraded performance in comparison.
             *
             * If the query is partially built from user input or other
             * untrusted sources, special care is required about possible
             * SPARQL injection. In order to avoid it entirely, it is recommended
             * to use [class`SparqlStatement]`, or to build the SPARQL
             * input through [class`Resource]`. The function
             * [func`sparql_escape_string]` exists as a last resort,
             * but its use is not recommended.
             * @param sparql String containing the SPARQL update query
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            update_async(
                sparql: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Executes a SPARQL update and returns the names of the generated blank nodes.
             *
             * This method is synchronous and will block until the update
             * is finished. See [method`SparqlConnection`.update_blank_async]
             * for an asynchronous variant.
             *
             * The `sparql` query should be built with [class`Resource]`, or
             * its parts correctly escaped using [func`sparql_escape_string]`,
             * otherwise SPARQL injection is possible.
             *
             * The format string of the `GVariant` is `aaa{ss}` (an array of an array
             * of dictionaries). The first array represents each INSERT that may exist in
             * the SPARQL string. The second array represents each new node for a given
             * WHERE clause. The last array holds a string pair with the blank node name
             * (e.g. `foo` for the blank node `_:foo`) and the URN that was generated for
             * it. For most updates the first two outer arrays will only contain one item.
             * @param sparql String containing the SPARQL update query
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns a [type@GLib.Variant] with the generated URNs.
             */
            update_blank(sparql: string, cancellable?: Gio.Cancellable | null): GLib.Variant;
            /**
             * Executes asynchronously a SPARQL update and returns the names of the generated blank nodes.
             *
             * See the [method`SparqlConnection`.update_blank] documentation to
             * learn the differences with [method`SparqlConnection`.update].
             * @param sparql String containing the SPARQL update query
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            update_blank_async(
                sparql: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with [method`SparqlConnection`.update_blank_async].
             *
             * This method returns the URNs of the generated nodes, if any. See the
             * [method`SparqlConnection`.update_blank] documentation for the interpretation
             * of the returned [type`GLib`.Variant].
             * @param res A [type@Gio.AsyncResult] with the result of the operation
             * @returns a [type@GLib.Variant] with the generated URNs.
             */
            update_blank_finish(res: Gio.AsyncResult): GLib.Variant;
            /**
             * Finishes the operation started with [method`SparqlConnection`.update_async].
             * @param res A [type@Gio.AsyncResult] with the result of the operation
             */
            update_finish(res: Gio.AsyncResult): void;
            /**
             * Inserts a resource as described by `resource` on the given `graph`.
             *
             * This method is synchronous and will block until the update
             * is finished. See [method`SparqlConnection`.update_resource_async]
             * for an asynchronous variant.
             *
             * It is recommented to consider the usage of [class`Batch]`
             * to cluster database updates. Frequent isolated SPARQL updates
             * through this method will have a degraded performance in comparison.
             * @param graph RDF graph where the resource should be inserted/updated, or %NULL for the default graph
             * @param resource A [class@Resource]
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns #TRUE if there were no errors.
             */
            update_resource(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Inserts asynchronously a resource as described by `resource` on the given `graph`.
             *
             * It is recommented to consider the usage of [class`Batch]`
             * to cluster database updates. Frequent isolated SPARQL updates
             * through this method will have a degraded performance in comparison.
             * @param graph RDF graph where the resource should be inserted/updated, or %NULL for the default graph
             * @param resource A [class@Resource]
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback User-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            update_resource_async(
                graph: string | null,
                resource: Resource,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with [method`SparqlConnection`.update_resource_async].
             * @param res A [type@Gio.AsyncResult] with the result of the operation
             * @returns #TRUE if there were no errors.
             */
            update_resource_finish(res: Gio.AsyncResult): boolean;
            /**
             * Prepares the given `INSERT`/`DELETE` SPARQL as a [class`SparqlStatement]`.
             *
             * This prepared statement can be executed through
             * the [method`SparqlStatement`.update] family of functions.
             * @param sparql The SPARQL update
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns A prepared statement
             */
            update_statement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null;
        }

        module SparqlCursor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connection: SparqlConnection;
                n_columns: number;
                nColumns: number;
            }
        }

        /**
         * `TrackerSparqlCursor` provides the methods to iterate the results of a SPARQL query.
         *
         * Cursors are obtained through e.g. [method`SparqlStatement`.execute]
         * or [method`SparqlConnection`.query] after the SPARQL query has been
         * executed.
         *
         * When created, a cursor does not point to any element, [method`SparqlCursor`.next]
         * is necessary to iterate one by one to the first (and following) results.
         * When the cursor iterated across all rows in the result set, [method`SparqlCursor`.next]
         * will return %FALSE with no error set.
         *
         * On each row, it is possible to extract the result values through the
         * [method`SparqlCursor`.get_integer], [method`SparqlCursor`.get_string], etc... family
         * of methods. The column index of those functions starts at 0. The number of columns is
         * dependent on the SPARQL query issued, but may be checked at runtime through the
         * [method`SparqlCursor`.get_n_columns] method.
         *
         * After a cursor is iterated, it is recommended to call [method`SparqlCursor`.close]
         * explicitly to free up resources for other users of the same [class`SparqlConnection]`,
         * this is especially important in garbage collected languages. These resources
         * will be also implicitly freed on cursor object finalization.
         *
         * It is possible to use a given `TrackerSparqlCursor` in other threads than
         * the one it was created from. It must be however used from just one thread
         * at any given time.
         */
        abstract class SparqlCursor extends GObject.Object {
            static $gtype: GObject.GType<SparqlCursor>;

            // Properties

            /**
             * The [class`SparqlConnection]` used to retrieve the results.
             */
            get connection(): SparqlConnection;
            /**
             * Number of columns available in the result set.
             */
            get n_columns(): number;
            /**
             * Number of columns available in the result set.
             */
            get nColumns(): number;

            // Constructors

            constructor(properties?: Partial<SparqlCursor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Closes the cursor. The object can only be freed after this call.
             */
            close(): void;
            /**
             * Retrieve a boolean for the current row in `column`.
             *
             * If the row/column do not have a boolean value, the result is
             * undefined, see [method`SparqlCursor`.get_value_type].
             * @param column column number to retrieve (first one is 0)
             * @returns a boolean value.
             */
            get_boolean(column: number): boolean;
            /**
             * Returns the [class`SparqlConnection]` associated with this
             * `TrackerSparqlCursor`.
             * @returns the cursor [class@SparqlConnection]. The returned object must not be unreferenced by the caller.
             */
            get_connection(): SparqlConnection;
            /**
             * Retrieves a [type`GLib`.DateTime] pointer for the current row in `column`.
             * @param column Column number to retrieve (first one is 0)
             * @returns [type@GLib.DateTime] object, or %NULL if the given column does not   contain a [xsd:date](xsd-ontology.html#xsd:date) or [xsd:dateTime](xsd-ontology.html#xsd:dateTime).
             */
            get_datetime(column: number): GLib.DateTime | null;
            /**
             * Retrieve a double for the current row in `column`.
             *
             * If the row/column do not have a integer or double value, the result is
             * undefined, see [method`SparqlCursor`.get_value_type].
             * @param column column number to retrieve (first one is 0)
             * @returns a double value.
             */
            get_double(column: number): number;
            /**
             * Retrieve an integer for the current row in `column`.
             *
             * If the row/column do not have an integer value, the result is
             * undefined, see [method`SparqlCursor`.get_value_type].
             * @param column column number to retrieve (first one is 0)
             * @returns a 64-bit integer value.
             */
            get_integer(column: number): number;
            /**
             * Retrieves a string representation of the data in the current
             * row in `column`. If the string has language information (i.e. it is
             * a `rdf:langString`](rdf-ontology.html#rdf:langString)), the language
             * tag will be returned in the location provided through `langtag`. This
             * language tag will typically be in a format conforming
             * [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646.html).
             * @param column column number to retrieve
             * @returns a string which must not be freed. %NULL is returned if the column is not in the `[0, n_columns]` range, or if the row/column refer to a nullable optional value in the result set.
             */
            get_langstring(column: number): [string | null, string, number];
            /**
             * Retrieves the number of columns available in the result set.
             *
             * This method should only be called after a successful
             * [method`SparqlCursor`.next], otherwise its return value
             * will be undefined.
             * @returns The number of columns returned in the result set.
             */
            get_n_columns(): number;
            /**
             * Retrieves a string representation of the data in the current
             * row in `column`.
             *
             * Any type may be converted to a string. If the value is not bound
             * (See [method`SparqlCursor`.is_bound]) this method will return %NULL.
             * @param column column number to retrieve (first one is 0)
             * @returns a string which must not be freed. %NULL is returned if the column is not in the `[0, n_columns]` range, or if the row/column refer to a nullable optional value in the result set.
             */
            get_string(column: number): [string | null, number];
            /**
             * Returns the data type bound to the current row and the given `column`.
             *
             * If the column is unbound, the value will be %TRACKER_SPARQL_VALUE_TYPE_UNBOUND.
             * See also [method`SparqlCursor`.is_bound].
             *
             * Values of type #TRACKER_SPARQL_VALUE_TYPE_RESOURCE and
             * #TRACKER_SPARQL_VALUE_TYPE_BLANK_NODE can be considered equivalent, the
             * difference is the resource being referenced as a named IRI or a blank
             * node.
             *
             * All other [enum`SparqlValueType]` value types refer to literal values.
             * @param column column number to retrieve (first one is 0)
             * @returns a [enum@SparqlValueType] expressing the content type of   the given column for the current row.
             */
            get_value_type(column: number): SparqlValueType;
            /**
             * Retrieves the name of the given `column`.
             *
             * This name will be defined at the SPARQL query, either
             * implicitly from the names of the variables returned in
             * the resultset, or explicitly through the `AS ?var` SPARQL
             * syntax.
             * @param column column number to retrieve (first one is 0)
             * @returns The name of the given column.
             */
            get_variable_name(column: number): string | null;
            /**
             * Returns whether the given `column` has a bound value in the current row.
             *
             * This may not be the case through e.g. the `OPTIONAL { }` SPARQL syntax.
             * @param column column number to retrieve (first one is 0)
             * @returns a %TRUE or %FALSE.
             */
            is_bound(column: number): boolean;
            /**
             * Iterates the cursor to the next result.
             *
             * If the cursor was not started, it will point to the first result after
             * this call. This operation is completely synchronous and it may block,
             * see [method`SparqlCursor`.next_async] for an asynchronous variant.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns %FALSE if there are no more results or if an error is found, otherwise %TRUE.
             */
            next(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Iterates the cursor asyncronously to the next result.
             *
             * If the cursor was not started, it will point to the first result after
             * this operation completes.
             *
             * In the period between this call and the corresponding
             * [method`SparqlCursor`.next_finish] call, the other cursor methods
             * should not be used, nor their results trusted. The cursor should only
             * be iterated once at a time.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback user-defined [type@Gio.AsyncReadyCallback] to be called when            asynchronous operation is finished.
             */
            next_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the asynchronous iteration to the next result started with
             * [method`SparqlCursor`.next_async].
             * @param res a [type@Gio.AsyncResult] with the result of the operation
             * @returns %FALSE if there are no more results or if an error is found, otherwise %TRUE.
             */
            next_finish(res: Gio.AsyncResult): boolean;
            /**
             * Resets the iterator to point back to the first result.
             */
            rewind(): void;
        }

        module SparqlStatement {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connection: SparqlConnection;
                sparql: string;
            }
        }

        /**
         * `TrackerSparqlStatement` represents a prepared statement for a SPARQL query.
         *
         * The SPARQL query will be internally compiled into the format that is most
         * optimal to execute the query many times. For connections created
         * through [ctor`SparqlConnection`.new] that will be a
         * SQLite compiled statement.
         *
         * The SPARQL query may contain parameterized variables expressed via the
         * `~` prefix in the SPARQL syntax (e.g. `~var`), these may happen anywhere
         * in the SPARQL where a literal or variable would typically happen. These
         * parameterized variables may be mapped to arbitrary values prior to
         * execution. The `TrackerSparqlStatement` may be reused for future
         * queries with different values.
         *
         * The argument bindings may be changed through the [method`SparqlStatement`.bind_int],
         * [method`SparqlStatement`.bind_int], etc... family of functions. Those functions
         * receive a `name` argument corresponding for the variable name in the SPARQL query
         * (eg. `"var"` for `~var`) and a value to map the variable to.
         *
         * Once all arguments have a value, the query may be executed through
         * [method`SparqlStatement`.execute_async] or [method`SparqlStatement`.execute].
         *
         * It is possible to use any `TrackerSparqlStatement` from other threads than
         * the one it was created from. However, binding values and executing the
         * statement must only happen from one thread at a time. It is possible to reuse
         * the `TrackerSparqlStatement` right after [method`SparqlStatement`.execute_async]
         * was called, there is no need to wait for [method`SparqlStatement`.execute_finish].
         *
         * In some circumstances, it is possible that the query needs to be recompiled
         * from the SPARQL source. This will happen transparently.
         */
        abstract class SparqlStatement extends GObject.Object {
            static $gtype: GObject.GType<SparqlStatement>;

            // Properties

            /**
             * The [class`SparqlConnection]` the statement was created for.
             */
            get connection(): SparqlConnection;
            /**
             * SPARQL query stored in this statement.
             */
            get sparql(): string;

            // Constructors

            constructor(properties?: Partial<SparqlStatement.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Binds the boolean `value` to the parameterized variable given by `name`.
             * @param name variable name
             * @param value value
             */
            bind_boolean(name: string, value: boolean): void;
            /**
             * Binds the [type`GLib`.DateTime] `value` to the parameterized variable given by `name`.
             * @param name variable name
             * @param value value
             */
            bind_datetime(name: string, value: GLib.DateTime): void;
            /**
             * Binds the double `value` to the parameterized variable given by `name`.
             * @param name variable name
             * @param value value
             */
            bind_double(name: string, value: number): void;
            /**
             * Binds the integer `value` to the parameterized variable given by `name`.
             * @param name variable name
             * @param value value
             */
            bind_int(name: string, value: number): void;
            /**
             * Binds the `value` to the parameterized variable given by `name,` tagged
             * with the language defined by `langtag`. The language tag should follow
             * [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646.html). The parameter
             * will be represented as a [`rdf:langString`](rdf-ontology.html#rdf:langString).
             * @param name variable name
             * @param value value
             * @param langtag language tag
             */
            bind_langstring(name: string, value: string, langtag: string): void;
            /**
             * Binds the string `value` to the parameterized variable given by `name`.
             * @param name variable name
             * @param value value
             */
            bind_string(name: string, value: string): void;
            /**
             * Clears all bindings.
             */
            clear_bindings(): void;
            /**
             * Executes the `SELECT` or `ASK` SPARQL query with the currently bound values.
             *
             * This function also works for `DESCRIBE` and `CONSTRUCT` queries that
             * retrieve data from the triple store. These query forms that return
             * RDF data are however more useful together with [method`SparqlStatement`.serialize_async].
             *
             * This function should only be called on `TrackerSparqlStatement` objects
             * obtained through [method`SparqlConnection`.query_statement] or
             * SELECT/CONSTRUCT/DESCRIBE statements loaded through
             * [method`SparqlConnection`.load_statement_from_gresource].
             * An error will be raised if this method is called on a `INSERT` or `DELETE`
             * SPARQL query.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns A `TrackerSparqlCursor` with the query results.
             */
            execute(cancellable?: Gio.Cancellable | null): SparqlCursor;
            /**
             * Executes asynchronously the `SELECT` or `ASK` SPARQL query with the currently bound values.
             *
             * This function also works for `DESCRIBE` and `CONSTRUCT` queries that
             * retrieve data from the triple store. These query forms that return
             * RDF data are however more useful together with [method`SparqlStatement`.serialize_async].
             *
             * This function should only be called on `TrackerSparqlStatement` objects
             * obtained through [method`SparqlConnection`.query_statement] or
             * SELECT/CONSTRUCT/DESCRIBE statements loaded through
             * [method`SparqlConnection`.load_statement_from_gresource].
             * An error will be raised if this method is called on a `INSERT` or `DELETE`
             * SPARQL query.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback user-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the asynchronous operation started through
             * [method`SparqlStatement`.execute_async].
             * @param res a [type@Gio.AsyncResult] with the result of the operation
             * @returns A `TrackerSparqlCursor` with the query results.
             */
            execute_finish(res: Gio.AsyncResult): SparqlCursor;
            /**
             * Returns the [class`SparqlConnection]` that this statement was created for.
             * @returns The SPARQL connection of this statement.
             */
            get_connection(): SparqlConnection;
            /**
             * Returns the SPARQL string that this prepared statement holds.
             * @returns The contained SPARQL query
             */
            get_sparql(): string;
            /**
             * Serializes a `DESCRIBE` or `CONSTRUCT` query into the given RDF `format`.
             *
             * The query `stmt` was created from must be either a `DESCRIBE` or `CONSTRUCT`
             * query, an error will be raised otherwise.
             *
             * This is an asynchronous operation, `callback` will be invoked when the
             * data is available for reading.
             *
             * The SPARQL endpoint may not support the specified format, in that case
             * an error will be raised.
             *
             * The `flags` argument is reserved for future expansions, currently
             * #TRACKER_SERIALIZE_FLAGS_NONE must be passed.
             * @param flags serialization flags
             * @param format RDF format of the serialized data
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback user-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            serialize_async(
                flags: SerializeFlags,
                format: RdfFormat,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the asynchronous operation started through
             * [method`SparqlStatement`.serialize_async].
             * @param result a [type@Gio.AsyncResult] with the result of the operation
             * @returns a [class@Gio.InputStream] to read RDF content.
             */
            serialize_finish(result: Gio.AsyncResult): Gio.InputStream;
            /**
             * Executes the `INSERT`/`DELETE` SPARQL query series with the currently bound values.
             *
             * This function should only be called on `TrackerSparqlStatement` objects
             * obtained through [method`SparqlConnection`.update_statement] or
             * `INSERT`/`DELETE` statements loaded through
             * [method`SparqlConnection`.load_statement_from_gresource].
             * An error will be raised if this method is called on
             * `SELECT`/`ASK`/`DESCRIBE`/`CONSTRUCT` SPARQL queries.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @returns %TRUE if the update finished with no errors, %FALSE otherwise
             */
            update(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Executes asynchronously the `INSERT`/`DELETE` SPARQL query series with the currently bound values.
             *
             * This function should only be called on `TrackerSparqlStatement` objects
             * obtained through [method`SparqlConnection`.update_statement] or
             * `INSERT`/`DELETE` statements loaded through
             * [method`SparqlConnection`.load_statement_from_gresource].
             * An error will be raised if this method is called on
             * `SELECT`/`ASK`/`DESCRIBE`/`CONSTRUCT` SPARQL queries.
             * @param cancellable Optional [type@Gio.Cancellable]
             * @param callback user-defined [type@Gio.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
             */
            update_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the asynchronous update started through
             * [method`SparqlStatement`.update_async].
             * @param result a [type@Gio.AsyncResult] with the result of the operation
             * @returns %TRUE if the update finished with no errors, %FALSE otherwise
             */
            update_finish(result: Gio.AsyncResult): boolean;
        }

        type BatchClass = typeof Batch;
        type EndpointClass = typeof Endpoint;
        type NamespaceManagerClass = typeof NamespaceManager;
        type NotifierClass = typeof Notifier;
        /**
         * The <structname>TrackerNotifierEvent</structname> struct represents a
         * change event in the stored data.
         */
        abstract class NotifierEvent {
            static $gtype: GObject.GType<NotifierEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the event type.
             * @returns The event type
             */
            get_event_type(): NotifierEventType;
            /**
             * Returns the tracker:id of the element being notified upon. This is a #gint64
             * which is used as efficient internal identifier for the resource.
             * @returns the resource ID
             */
            get_id(): number;
            /**
             * Returns the Uniform Resource Name of the element. This is Tracker's
             * public identifier for the resource.
             *
             * This URN is an unique string identifier for the resource being
             * notified upon, typically of the form `urn:uuid:...`.
             * @returns The element URN
             */
            get_urn(): string;
        }

        type ResourceClass = typeof Resource;
        type SparqlConnectionClass = typeof SparqlConnection;
        type SparqlCursorClass = typeof SparqlCursor;
        type SparqlStatementClass = typeof SparqlStatement;
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

    export default Tsparql;
}

declare module 'gi://Tsparql' {
    import Tsparql30 from 'gi://Tsparql?version=3.0';
    export default Tsparql30;
}
// END
