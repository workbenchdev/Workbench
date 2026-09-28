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

declare module 'gi://Geoclue?version=2.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Geoclue {
        /**
         * Geoclue-2.0
         */

        export namespace AccuracyLevel {
            export const $gtype: GObject.GType<AccuracyLevel>;
        }

        enum AccuracyLevel {
            NONE,
            COUNTRY,
            CITY,
            NEIGHBORHOOD,
            STREET,
            EXACT,
        }
        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        function client_interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         * @returns The last property id.
         */
        function client_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        function location_interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         * @returns The last property id.
         */
        function location_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        function manager_interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         * @returns The last property id.
         */
        function manager_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

        export namespace ClientProxyCreateFlags {
            export const $gtype: GObject.GType<ClientProxyCreateFlags>;
        }

        enum ClientProxyCreateFlags {
            NONE,
            AUTO_DELETE,
        }
        module ClientProxy {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusProxy.ConstructorProps,
                    Client.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        /**
         * The #GClueClientProxy structure contains only private data and should only be accessed using the provided API.
         */
        class ClientProxy
            extends Gio.DBusProxy
            implements Client, Gio.AsyncInitable<ClientProxy>, Gio.DBusInterface, Gio.Initable
        {
            static $gtype: GObject.GType<ClientProxy>;

            // Constructors

            constructor(properties?: Partial<ClientProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_finish(res: Gio.AsyncResult): ClientProxy;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy;

            static new_for_bus_sync(
                bus_type: Gio.BusType,
                flags: Gio.DBusProxyFlags,
                name: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): ClientProxy;
            // Conflicted with Gio.DBusProxy.new_for_bus_sync

            static new_for_bus_sync(...args: never[]): any;

            static new_sync(
                connection: Gio.DBusConnection,
                flags: Gio.DBusProxyFlags,
                name: string | null,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): ClientProxy;
            // Conflicted with Gio.DBusProxy.new_sync

            static new_sync(...args: never[]): any;

            // Static methods

            /**
             * A utility function to create a #GClueClientProxy without having to deal with
             * a #GClueManager. See also gclue_client_proxy_create_full() which improves
             * resource management.
             *
             * This is identitcal to calling gclue_client_proxy_create_full() without any
             * flags set.
             *
             * See #gclue_client_proxy_create_sync() for the synchronous, blocking version
             * of this function.
             * @param desktop_id The desktop file id (the basename of the desktop file).
             * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the results are ready.
             */
            static create(
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_client_proxy_create().
             * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
             */
            static create_finish(result: Gio.AsyncResult): ClientProxy;
            /**
             * A utility function to create a #GClueClientProxy without having to deal with
             * a #GClueManager.
             *
             * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
             * that the client will be deleted again from the geoclue service when
             * it is destroyed. This flag should be used unless you are doing explicit
             * resource management.
             *
             * See #gclue_client_proxy_create_full_sync() for the synchronous, blocking
             * version of this function.
             * @param desktop_id The desktop file id (the basename of the desktop file).
             * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
             * @param flags #GClueClientProxyCreateFlags to modify the creation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the results are ready.
             */
            static create_full(
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                flags: ClientProxyCreateFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_client_proxy_create_full().
             * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
             */
            static create_full_finish(result: Gio.AsyncResult): ClientProxy;
            /**
             * The synchronous and blocking version of #gclue_client_proxy_create_full().
             *
             * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
             * that the client will be deleted again from the geoclue service when
             * it is destroyed. This flag should be used unless you are doing explicit
             * resource management.
             * @param desktop_id The desktop file id (the basename of the desktop file).
             * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
             * @param flags #GClueClientProxyCreateFlags to modify the creation.
             * @param cancellable A #GCancellable or %NULL.
             */
            static create_full_sync(
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                flags: ClientProxyCreateFlags,
                cancellable?: Gio.Cancellable | null,
            ): ClientProxy;
            /**
             * The synchronous and blocking version of #gclue_client_proxy_create().
             * See also gclue_client_proxy_create_full_sync() which improves resource
             * management.
             *
             * This function is identical to calling gclue_client_proxy_create_full_sync()
             * without any flags set.
             * @param desktop_id The desktop file id (the basename of the desktop file).
             * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
             * @param cancellable A #GCancellable or %NULL.
             */
            static create_sync(
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                cancellable?: Gio.Cancellable | null,
            ): ClientProxy;
            /**
             * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See g_dbus_proxy_new() for more details.
             *
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_proxy_new_finish() to get the result of the operation.
             *
             * See gclue_client_proxy_new_sync() for the synchronous, blocking version of this constructor.
             * @param connection A #GDBusConnection.
             * @param flags Flags from the #GDBusProxyFlags enumeration.
             * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
             * @param object_path An object path.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static ['new'](
                connection: Gio.DBusConnection,
                flags: Gio.DBusProxyFlags,
                name: string | null,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
            ): void;
            // Conflicted with Gio.DBusProxy.new
            static ['new'](...args: never[]): any;
            /**
             * Like gclue_client_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
             *
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_proxy_new_for_bus_finish() to get the result of the operation.
             *
             * See gclue_client_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
             * @param bus_type A #GBusType.
             * @param flags Flags from the #GDBusProxyFlags enumeration.
             * @param name A bus name (well-known or unique).
             * @param object_path An object path.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static new_for_bus(
                bus_type: Gio.BusType,
                flags: Gio.DBusProxyFlags,
                name: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
            ): void;
            // Conflicted with Gio.DBusProxy.new_for_bus
            static new_for_bus(...args: never[]): any;

            // Inherited properties
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get active(): boolean;
            set active(val: boolean);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get desktop_id(): string;
            set desktop_id(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get desktopId(): string;
            set desktopId(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get distance_threshold(): number;
            set distance_threshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get distanceThreshold(): number;
            set distanceThreshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get location(): string;
            set location(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get requested_accuracy_level(): number;
            set requested_accuracy_level(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get requestedAccuracyLevel(): number;
            set requestedAccuracyLevel(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get time_threshold(): number;
            set time_threshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get timeThreshold(): number;
            set timeThreshold(val: number);

            // Inherited methods
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_call_start_finish() to get the result of the operation.
             *
             * See gclue_client_call_start_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_client_call_start().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_start().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_start_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_client_call_start() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_call_stop_finish() to get the result of the operation.
             *
             * See gclue_client_call_stop_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_client_call_stop().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_stop().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_stop_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_client_call_stop() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_start(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_stop(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
             * @param arg_old Argument to pass with the signal.
             * @param arg_new Argument to pass with the signal.
             */
            emit_location_updated(arg_old: string, arg_new: string): void;
            /**
             * Handler for the #GClueClient::handle-start signal.
             * @param invocation
             */
            vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueClient::handle-stop signal.
             * @param invocation
             */
            vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueClient::location-updated signal.
             * @param arg_old
             * @param arg_new
             */
            vfunc_location_updated(arg_old: string, arg_new: string): void;
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
            new_finish(res: Gio.AsyncResult): ClientProxy;
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

        module ClientSkeleton {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                    Client.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps {}
        }

        /**
         * The #GClueClientSkeleton structure contains only private data and should only be accessed using the provided API.
         */
        class ClientSkeleton extends Gio.DBusInterfaceSkeleton implements Client, Gio.DBusInterface {
            static $gtype: GObject.GType<ClientSkeleton>;

            // Constructors

            constructor(properties?: Partial<ClientSkeleton.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ClientSkeleton;

            // Inherited properties
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get active(): boolean;
            set active(val: boolean);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get desktop_id(): string;
            set desktop_id(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get desktopId(): string;
            set desktopId(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get distance_threshold(): number;
            set distance_threshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get distanceThreshold(): number;
            set distanceThreshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get location(): string;
            set location(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get requested_accuracy_level(): number;
            set requested_accuracy_level(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get requestedAccuracyLevel(): number;
            set requestedAccuracyLevel(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get time_threshold(): number;
            set time_threshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get timeThreshold(): number;
            set timeThreshold(val: number);

            // Inherited methods
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_call_start_finish() to get the result of the operation.
             *
             * See gclue_client_call_start_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_client_call_start().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_start().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_start_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_client_call_start() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_call_stop_finish() to get the result of the operation.
             *
             * See gclue_client_call_stop_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_client_call_stop().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_stop().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_stop_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_client_call_stop() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_start(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_stop(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
             * @param arg_old Argument to pass with the signal.
             * @param arg_new Argument to pass with the signal.
             */
            emit_location_updated(arg_old: string, arg_new: string): void;
            /**
             * Handler for the #GClueClient::handle-start signal.
             * @param invocation
             */
            vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueClient::handle-stop signal.
             * @param invocation
             */
            vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueClient::location-updated signal.
             * @param arg_old
             * @param arg_new
             */
            vfunc_location_updated(arg_old: string, arg_new: string): void;
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

        module LocationProxy {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusProxy.ConstructorProps,
                    Location.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        /**
         * The #GClueLocationProxy structure contains only private data and should only be accessed using the provided API.
         */
        class LocationProxy
            extends Gio.DBusProxy
            implements Location, Gio.AsyncInitable<LocationProxy>, Gio.DBusInterface, Gio.Initable
        {
            static $gtype: GObject.GType<LocationProxy>;

            // Constructors

            constructor(properties?: Partial<LocationProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_finish(res: Gio.AsyncResult): LocationProxy;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy;

            static new_for_bus_sync(
                bus_type: Gio.BusType,
                flags: Gio.DBusProxyFlags,
                name: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): LocationProxy;
            // Conflicted with Gio.DBusProxy.new_for_bus_sync

            static new_for_bus_sync(...args: never[]): any;

            static new_sync(
                connection: Gio.DBusConnection,
                flags: Gio.DBusProxyFlags,
                name: string | null,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): LocationProxy;
            // Conflicted with Gio.DBusProxy.new_sync

            static new_sync(...args: never[]): any;

            // Static methods

            /**
             * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See g_dbus_proxy_new() for more details.
             *
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_location_proxy_new_finish() to get the result of the operation.
             *
             * See gclue_location_proxy_new_sync() for the synchronous, blocking version of this constructor.
             * @param connection A #GDBusConnection.
             * @param flags Flags from the #GDBusProxyFlags enumeration.
             * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
             * @param object_path An object path.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static ['new'](
                connection: Gio.DBusConnection,
                flags: Gio.DBusProxyFlags,
                name: string | null,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<LocationProxy> | null,
            ): void;
            // Conflicted with Gio.DBusProxy.new
            static ['new'](...args: never[]): any;
            /**
             * Like gclue_location_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
             *
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_location_proxy_new_for_bus_finish() to get the result of the operation.
             *
             * See gclue_location_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
             * @param bus_type A #GBusType.
             * @param flags Flags from the #GDBusProxyFlags enumeration.
             * @param name A bus name (well-known or unique).
             * @param object_path An object path.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static new_for_bus(
                bus_type: Gio.BusType,
                flags: Gio.DBusProxyFlags,
                name: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<LocationProxy> | null,
            ): void;
            // Conflicted with Gio.DBusProxy.new_for_bus
            static new_for_bus(...args: never[]): any;

            // Inherited properties
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get accuracy(): number;
            set accuracy(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get altitude(): number;
            set altitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get description(): string;
            set description(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get heading(): number;
            set heading(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get longitude(): number;
            set longitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get speed(): number;
            set speed(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get timestamp(): GLib.Variant;
            set timestamp(val: GLib.Variant);

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
            new_finish(res: Gio.AsyncResult): LocationProxy;
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

        module LocationSkeleton {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                    Location.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps {}
        }

        /**
         * The #GClueLocationSkeleton structure contains only private data and should only be accessed using the provided API.
         */
        class LocationSkeleton extends Gio.DBusInterfaceSkeleton implements Location, Gio.DBusInterface {
            static $gtype: GObject.GType<LocationSkeleton>;

            // Constructors

            constructor(properties?: Partial<LocationSkeleton.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): LocationSkeleton;

            // Inherited properties
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get accuracy(): number;
            set accuracy(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get altitude(): number;
            set altitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get description(): string;
            set description(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get heading(): number;
            set heading(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get longitude(): number;
            set longitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get speed(): number;
            set speed(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get timestamp(): GLib.Variant;
            set timestamp(val: GLib.Variant);

            // Inherited methods
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

        module ManagerProxy {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusProxy.ConstructorProps,
                    Manager.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        /**
         * The #GClueManagerProxy structure contains only private data and should only be accessed using the provided API.
         */
        class ManagerProxy
            extends Gio.DBusProxy
            implements Manager, Gio.AsyncInitable<ManagerProxy>, Gio.DBusInterface, Gio.Initable
        {
            static $gtype: GObject.GType<ManagerProxy>;

            // Constructors

            constructor(properties?: Partial<ManagerProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_finish(res: Gio.AsyncResult): ManagerProxy;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;

            static new_for_bus_sync(
                bus_type: Gio.BusType,
                flags: Gio.DBusProxyFlags,
                name: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): ManagerProxy;
            // Conflicted with Gio.DBusProxy.new_for_bus_sync

            static new_for_bus_sync(...args: never[]): any;

            static new_sync(
                connection: Gio.DBusConnection,
                flags: Gio.DBusProxyFlags,
                name: string | null,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): ManagerProxy;
            // Conflicted with Gio.DBusProxy.new_sync

            static new_sync(...args: never[]): any;

            // Static methods

            /**
             * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See g_dbus_proxy_new() for more details.
             *
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_proxy_new_finish() to get the result of the operation.
             *
             * See gclue_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
             * @param connection A #GDBusConnection.
             * @param flags Flags from the #GDBusProxyFlags enumeration.
             * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
             * @param object_path An object path.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static ['new'](
                connection: Gio.DBusConnection,
                flags: Gio.DBusProxyFlags,
                name: string | null,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
            ): void;
            // Conflicted with Gio.DBusProxy.new
            static ['new'](...args: never[]): any;
            /**
             * Like gclue_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
             *
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_proxy_new_for_bus_finish() to get the result of the operation.
             *
             * See gclue_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
             * @param bus_type A #GBusType.
             * @param flags Flags from the #GDBusProxyFlags enumeration.
             * @param name A bus name (well-known or unique).
             * @param object_path An object path.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static new_for_bus(
                bus_type: Gio.BusType,
                flags: Gio.DBusProxyFlags,
                name: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
            ): void;
            // Conflicted with Gio.DBusProxy.new_for_bus
            static new_for_bus(...args: never[]): any;

            // Inherited properties
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get available_accuracy_level(): number;
            set available_accuracy_level(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get availableAccuracyLevel(): number;
            set availableAccuracyLevel(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get in_use(): boolean;
            set in_use(val: boolean);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get inUse(): boolean;
            set inUse(val: boolean);

            // Inherited methods
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_add_agent_finish() to get the result of the operation.
             *
             * See gclue_manager_call_add_agent_sync() for the synchronous, blocking version of this method.
             * @param arg_id Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_add_agent(
                arg_id: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_add_agent().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_add_agent().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_add_agent_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_add_agent() for the asynchronous version of this method.
             * @param arg_id Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_create_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_create_client_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_create_client(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_create_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_create_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_create_client_finish(res: Gio.AsyncResult): [boolean, string];
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_create_client() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_delete_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_delete_client_sync() for the synchronous, blocking version of this method.
             * @param arg_client Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_delete_client(
                arg_client: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_delete_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_delete_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_delete_client_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_delete_client() for the asynchronous version of this method.
             * @param arg_client Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_get_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_get_client_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_manager_call_get_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_get_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_get_client_finish(res: Gio.AsyncResult): [boolean, string];
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_get_client() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             * @param client Parameter to return.
             */
            complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             * @param client Parameter to return.
             */
            complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
            /**
             * Handler for the #GClueManager::handle-add-agent signal.
             * @param invocation
             * @param arg_id
             */
            vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
            /**
             * Handler for the #GClueManager::handle-create-client signal.
             * @param invocation
             */
            vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueManager::handle-delete-client signal.
             * @param invocation
             * @param arg_client
             */
            vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
            /**
             * Handler for the #GClueManager::handle-get-client signal.
             * @param invocation
             */
            vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
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
            new_finish(res: Gio.AsyncResult): ManagerProxy;
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

        module ManagerSkeleton {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                    Manager.ConstructorProps,
                    Gio.DBusInterface.ConstructorProps {}
        }

        /**
         * The #GClueManagerSkeleton structure contains only private data and should only be accessed using the provided API.
         */
        class ManagerSkeleton extends Gio.DBusInterfaceSkeleton implements Manager, Gio.DBusInterface {
            static $gtype: GObject.GType<ManagerSkeleton>;

            // Constructors

            constructor(properties?: Partial<ManagerSkeleton.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ManagerSkeleton;

            // Inherited properties
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get available_accuracy_level(): number;
            set available_accuracy_level(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get availableAccuracyLevel(): number;
            set availableAccuracyLevel(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get in_use(): boolean;
            set in_use(val: boolean);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get inUse(): boolean;
            set inUse(val: boolean);

            // Inherited methods
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_add_agent_finish() to get the result of the operation.
             *
             * See gclue_manager_call_add_agent_sync() for the synchronous, blocking version of this method.
             * @param arg_id Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_add_agent(
                arg_id: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_add_agent().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_add_agent().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_add_agent_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_add_agent() for the asynchronous version of this method.
             * @param arg_id Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_create_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_create_client_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_create_client(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_create_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_create_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_create_client_finish(res: Gio.AsyncResult): [boolean, string];
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_create_client() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_delete_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_delete_client_sync() for the synchronous, blocking version of this method.
             * @param arg_client Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_delete_client(
                arg_client: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_delete_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_delete_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_delete_client_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_delete_client() for the asynchronous version of this method.
             * @param arg_client Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_get_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_get_client_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_manager_call_get_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_get_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_get_client_finish(res: Gio.AsyncResult): [boolean, string];
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_get_client() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             * @param client Parameter to return.
             */
            complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             * @param client Parameter to return.
             */
            complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
            /**
             * Handler for the #GClueManager::handle-add-agent signal.
             * @param invocation
             * @param arg_id
             */
            vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
            /**
             * Handler for the #GClueManager::handle-create-client signal.
             * @param invocation
             */
            vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueManager::handle-delete-client signal.
             * @param invocation
             * @param arg_client
             */
            vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
            /**
             * Handler for the #GClueManager::handle-get-client signal.
             * @param invocation
             */
            vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
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

        module Simple {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
                accuracy_level: AccuracyLevel;
                accuracyLevel: AccuracyLevel;
                client: ClientProxy;
                desktop_id: string;
                desktopId: string;
                distance_threshold: number;
                distanceThreshold: number;
                location: LocationProxy;
                time_threshold: number;
                timeThreshold: number;
            }
        }

        class Simple extends GObject.Object implements Gio.AsyncInitable<Simple> {
            static $gtype: GObject.GType<Simple>;

            // Properties

            /**
             * The requested maximum accuracy level.
             */
            set accuracy_level(val: AccuracyLevel);
            /**
             * The requested maximum accuracy level.
             */
            set accuracyLevel(val: AccuracyLevel);
            /**
             * The client proxy. This is %NULL if `simple` is not using a client proxy
             * (i-e when inside the Flatpak sandbox).
             */
            get client(): ClientProxy;
            /**
             * The Desktop ID of the application.
             */
            set desktop_id(val: string);
            /**
             * The Desktop ID of the application.
             */
            set desktopId(val: string);
            /**
             * The current distance threshold in meters. This value is used by the
             * service when it gets new location info. If the distance moved is
             * below the threshold, it won't emit the LocationUpdated signal.
             *
             * When set to 0 (default), it always emits the signal.
             */
            get distance_threshold(): number;
            /**
             * The current distance threshold in meters. This value is used by the
             * service when it gets new location info. If the distance moved is
             * below the threshold, it won't emit the LocationUpdated signal.
             *
             * When set to 0 (default), it always emits the signal.
             */
            get distanceThreshold(): number;
            /**
             * The current location.
             */
            get location(): LocationProxy;
            /**
             * The current time threshold in seconds. This value is used by the
             * service when it gets new location info. If the time passed is
             * below the threshold, it won't emit the LocationUpdated signal.
             *
             * When set to 0 (default), it always emits the signal.
             */
            get time_threshold(): number;
            /**
             * The current time threshold in seconds. This value is used by the
             * service when it gets new location info. If the time passed is
             * below the threshold, it won't emit the LocationUpdated signal.
             *
             * When set to 0 (default), it always emits the signal.
             */
            get timeThreshold(): number;

            // Constructors

            constructor(properties?: Partial<Simple.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_finish(result: Gio.AsyncResult): Simple;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            static new_sync(
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                cancellable?: Gio.Cancellable | null,
            ): Simple;

            static new_with_thresholds_finish(result: Gio.AsyncResult): Simple;

            static new_with_thresholds_sync(
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                time_threshold: number,
                distance_threshold: number,
                cancellable?: Gio.Cancellable | null,
            ): Simple;

            // Static methods

            /**
             * Asynchronously creates a #GClueSimple instance. Use
             * #gclue_simple_new_finish() to get the created #GClueSimple instance.
             *
             * See #gclue_simple_new_sync() for the synchronous, blocking version
             * of this function.
             * @param desktop_id The desktop file id (the basename of the desktop file).
             * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the results are ready.
             */
            static ['new'](
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Simple> | null,
            ): void;
            /**
             * Asynchronously creates a #GClueSimple instance. Use
             * #gclue_simple_new_with_thresholds_finish() to get the created #GClueSimple instance.
             *
             * See #gclue_simple_new_with_thresholds_sync() for the synchronous,
             * blocking version of this function.
             * @param desktop_id The desktop file id (the basename of the desktop file).
             * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
             * @param time_threshold Time threshold in seconds, 0 for no limit.
             * @param distance_threshold Distance threshold in meters, 0 for no limit.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the results are ready.
             */
            static new_with_thresholds(
                desktop_id: string,
                accuracy_level: AccuracyLevel,
                time_threshold: number,
                distance_threshold: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Simple> | null,
            ): void;

            // Methods

            /**
             * Gets the client proxy, or %NULL if `simple` is not using a client proxy (i-e
             * when inside the Flatpak sandbox).
             * @returns The client object.
             */
            get_client(): ClientProxy | null;
            /**
             * Gets the current location.
             * @returns The last known location as #GClueLocation.
             */
            get_location(): Location | null;

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
            new_finish(res: Gio.AsyncResult): Simple;
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

        type ClientIface = typeof Client;
        type ClientProxyClass = typeof ClientProxy;
        abstract class ClientProxyPrivate {
            static $gtype: GObject.GType<ClientProxyPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ClientSkeletonClass = typeof ClientSkeleton;
        abstract class ClientSkeletonPrivate {
            static $gtype: GObject.GType<ClientSkeletonPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LocationIface = typeof Location;
        type LocationProxyClass = typeof LocationProxy;
        abstract class LocationProxyPrivate {
            static $gtype: GObject.GType<LocationProxyPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LocationSkeletonClass = typeof LocationSkeleton;
        abstract class LocationSkeletonPrivate {
            static $gtype: GObject.GType<LocationSkeletonPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ManagerIface = typeof Manager;
        type ManagerProxyClass = typeof ManagerProxy;
        abstract class ManagerProxyPrivate {
            static $gtype: GObject.GType<ManagerProxyPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ManagerSkeletonClass = typeof ManagerSkeleton;
        abstract class ManagerSkeletonPrivate {
            static $gtype: GObject.GType<ManagerSkeletonPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SimpleClass = typeof Simple;
        abstract class SimplePrivate {
            static $gtype: GObject.GType<SimplePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module Client {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active: boolean;
                desktop_id: string;
                desktopId: string;
                distance_threshold: number;
                distanceThreshold: number;
                location: string;
                requested_accuracy_level: number;
                requestedAccuracyLevel: number;
                time_threshold: number;
                timeThreshold: number;
            }
        }

        export interface ClientNamespace {
            $gtype: GObject.GType<Client>;
            prototype: Client;

            /**
             * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
             */
            interface_info(): Gio.DBusInterfaceInfo;
            /**
             * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
             * The properties are overridden in the order they are defined.
             * @param klass The class structure for a #GObject derived class.
             * @param property_id_begin The property id to assign to the first overridden property.
             */
            override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
        }
        interface Client extends GObject.Object {
            // Properties

            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get active(): boolean;
            set active(val: boolean);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get desktop_id(): string;
            set desktop_id(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get desktopId(): string;
            set desktopId(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get distance_threshold(): number;
            set distance_threshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get distanceThreshold(): number;
            set distanceThreshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get location(): string;
            set location(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get requested_accuracy_level(): number;
            set requested_accuracy_level(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get requestedAccuracyLevel(): number;
            set requestedAccuracyLevel(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get time_threshold(): number;
            set time_threshold(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
             *
             * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
             */
            get timeThreshold(): number;
            set timeThreshold(val: number);

            // Methods

            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_call_start_finish() to get the result of the operation.
             *
             * See gclue_client_call_start_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_client_call_start().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_start().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_start_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_client_call_start() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_client_call_stop_finish() to get the result of the operation.
             *
             * See gclue_client_call_stop_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_client_call_stop().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_stop().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_stop_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_client_call_stop() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_start(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_stop(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
             * @param arg_old Argument to pass with the signal.
             * @param arg_new Argument to pass with the signal.
             */
            emit_location_updated(arg_old: string, arg_new: string): void;

            // Virtual methods

            /**
             * Handler for the #GClueClient::handle-start signal.
             * @param invocation
             */
            vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueClient::handle-stop signal.
             * @param invocation
             */
            vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueClient::location-updated signal.
             * @param arg_old
             * @param arg_new
             */
            vfunc_location_updated(arg_old: string, arg_new: string): void;
        }

        export const Client: ClientNamespace;

        module Location {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                accuracy: number;
                altitude: number;
                description: string;
                heading: number;
                latitude: number;
                longitude: number;
                speed: number;
                timestamp: GLib.Variant;
            }
        }

        export interface LocationNamespace {
            $gtype: GObject.GType<Location>;
            prototype: Location;

            /**
             * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
             */
            interface_info(): Gio.DBusInterfaceInfo;
            /**
             * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
             * The properties are overridden in the order they are defined.
             * @param klass The class structure for a #GObject derived class.
             * @param property_id_begin The property id to assign to the first overridden property.
             */
            override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
        }
        interface Location extends GObject.Object {
            // Properties

            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get accuracy(): number;
            set accuracy(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get altitude(): number;
            set altitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get description(): string;
            set description(val: string);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get heading(): number;
            set heading(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get longitude(): number;
            set longitude(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get speed(): number;
            set speed(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get timestamp(): GLib.Variant;
            set timestamp(val: GLib.Variant);
        }

        export const Location: LocationNamespace;

        module Manager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                available_accuracy_level: number;
                availableAccuracyLevel: number;
                in_use: boolean;
                inUse: boolean;
            }
        }

        export interface ManagerNamespace {
            $gtype: GObject.GType<Manager>;
            prototype: Manager;

            /**
             * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
             */
            interface_info(): Gio.DBusInterfaceInfo;
            /**
             * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
             * The properties are overridden in the order they are defined.
             * @param klass The class structure for a #GObject derived class.
             * @param property_id_begin The property id to assign to the first overridden property.
             */
            override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
        }
        interface Manager extends GObject.Object {
            // Properties

            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get available_accuracy_level(): number;
            set available_accuracy_level(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get availableAccuracyLevel(): number;
            set availableAccuracyLevel(val: number);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get in_use(): boolean;
            set in_use(val: boolean);
            /**
             * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
             *
             * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
             */
            get inUse(): boolean;
            set inUse(val: boolean);

            // Methods

            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_add_agent_finish() to get the result of the operation.
             *
             * See gclue_manager_call_add_agent_sync() for the synchronous, blocking version of this method.
             * @param arg_id Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_add_agent(
                arg_id: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_add_agent().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_add_agent().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_add_agent_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_add_agent() for the asynchronous version of this method.
             * @param arg_id Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_create_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_create_client_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_create_client(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_create_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_create_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_create_client_finish(res: Gio.AsyncResult): [boolean, string];
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_create_client() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_delete_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_delete_client_sync() for the synchronous, blocking version of this method.
             * @param arg_client Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_delete_client(
                arg_client: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an operation started with gclue_manager_call_delete_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_delete_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_delete_client_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_delete_client() for the asynchronous version of this method.
             * @param arg_client Argument to pass with the method invocation.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
             * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
             * You can then call gclue_manager_call_get_client_finish() to get the result of the operation.
             *
             * See gclue_manager_call_get_client_sync() for the synchronous, blocking version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
             */
            call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an operation started with gclue_manager_call_get_client().
             * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_get_client().
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_get_client_finish(res: Gio.AsyncResult): [boolean, string];
            /**
             * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
             *
             * See gclue_manager_call_get_client() for the asynchronous version of this method.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the call succeeded, %FALSE if @error is set.
             */
            call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             * @param client Parameter to return.
             */
            complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             */
            complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
            /**
             * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
             *
             * This method will free `invocation,` you cannot use it afterwards.
             * @param invocation A #GDBusMethodInvocation.
             * @param client Parameter to return.
             */
            complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;

            // Virtual methods

            /**
             * Handler for the #GClueManager::handle-add-agent signal.
             * @param invocation
             * @param arg_id
             */
            vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
            /**
             * Handler for the #GClueManager::handle-create-client signal.
             * @param invocation
             */
            vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the #GClueManager::handle-delete-client signal.
             * @param invocation
             * @param arg_client
             */
            vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
            /**
             * Handler for the #GClueManager::handle-get-client signal.
             * @param invocation
             */
            vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
        }

        export const Manager: ManagerNamespace;

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

    export default Geoclue;
}

declare module 'gi://Geoclue' {
    import Geoclue20 from 'gi://Geoclue?version=2.0';
    export default Geoclue20;
}
// END
