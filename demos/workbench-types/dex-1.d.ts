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

declare module 'gi://Dex?version=1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Dex {
        /**
         * Dex-1
         */

        export namespace BlockKind {
            export const $gtype: GObject.GType<BlockKind>;
        }

        enum BlockKind {
            THEN,
            CATCH,
            FINALLY,
        }
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            static UNKNOWN: number;
            static CHANNEL_CLOSED: number;
            static DEPENDENCY_FAILED: number;
            static FIBER_EXITED: number;
            static NO_FIBER: number;
            static PENDING: number;
            static SEMAPHORE_CLOSED: number;
            static TIMED_OUT: number;
            static TYPE_MISMATCH: number;
            static TYPE_NOT_SUPPORTED: number;
            static FIBER_CANCELLED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace FutureStatus {
            export const $gtype: GObject.GType<FutureStatus>;
        }

        enum FutureStatus {
            PENDING,
            RESOLVED,
            REJECTED,
        }
        /**
         * An asynchronous `pread()` wrapper.
         * @param aio_context
         * @param fd
         * @param offset
         * @returns a future that will resolve when the   read completes or rejects with error.
         */
        function aio_read(aio_context: AioContext, fd: number, offset: number): [Future, Uint8Array];
        /**
         * An asynchronous `pwrite()` wrapper.
         * @param aio_context
         * @param fd
         * @param buffer
         * @param offset
         * @returns a future that will resolve when the   write completes or rejects with error.
         */
        function aio_write(aio_context: AioContext, fd: number, buffer: Uint8Array | string, offset: number): Future;
        /**
         * Wrapper for g_bus_get().
         * @param bus_type
         * @returns a #DexFuture that resolves to a #GDBusConnection   or rejects with error.
         */
        function bus_get(bus_type: Gio.BusType): Future;
        /**
         * Wrapper for g_dbus_connection_call().
         * @param connection
         * @param bus_name
         * @param object_path
         * @param interface_name
         * @param method_name
         * @param parameters
         * @param reply_type
         * @param flags
         * @param timeout_msec
         * @returns a #DexFuture that resolves to a #GVariant   or rejects with error.
         */
        function dbus_connection_call(
            connection: Gio.DBusConnection,
            bus_name: string | null,
            object_path: string,
            interface_name: string,
            method_name: string,
            parameters: GLib.Variant | null,
            reply_type: GLib.VariantType | null,
            flags: Gio.DBusCallFlags,
            timeout_msec: number,
        ): Future;
        /**
         * Wrapper for g_dbus_connection_call_with_unix_fd_list().
         * @param connection
         * @param bus_name
         * @param object_path
         * @param interface_name
         * @param method_name
         * @param parameters
         * @param reply_type
         * @param flags
         * @param timeout_msec
         * @param fd_list a #GUnixFDList
         * @returns a #DexFutureSet that resolves to a #GVariant.   The #DexFuture containing the resulting #GUnixFDList can be retrieved   with dex_future_set_get_future_at() with an index of 1.
         */
        function dbus_connection_call_with_unix_fd_list(
            connection: Gio.DBusConnection,
            bus_name: string | null,
            object_path: string,
            interface_name: string,
            method_name: string,
            parameters: GLib.Variant | null,
            reply_type: GLib.VariantType | null,
            flags: Gio.DBusCallFlags,
            timeout_msec: number,
            fd_list?: Gio.UnixFDList | null,
        ): Future;
        /**
         * Wrapper for g_dbus_connection_send_message_with_reply().
         * @param connection a #GDBusConnection
         * @param message a #GDBusMessage
         * @param flags flags for @message
         * @param timeout_msec timeout in milliseconds, or -1 for default, or %G_MAXINT   for no timeout.
         * @returns a #DexFuture that will resolve to a #GDBusMessage   or reject with failure.
         */
        function dbus_connection_send_message_with_reply(
            connection: Gio.DBusConnection,
            message: Gio.DBusMessage,
            flags: Gio.DBusSendMessageFlags,
            timeout_msec: number,
        ): [Future, number];
        function error_quark(): GLib.Quark;
        /**
         * Asynchronously copies a file and returns a #DexFuture which
         * can be observed for the result.
         * @param source a #GFile
         * @param destination a #GFile
         * @param flags the #GFileCopyFlags
         * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
         * @returns a #DexFuture
         */
        function file_copy(
            source: Gio.File,
            destination: Gio.File,
            flags: Gio.FileCopyFlags,
            io_priority: number,
        ): Future;
        function file_enumerate_children(
            file: Gio.File,
            attributes: string,
            flags: Gio.FileQueryInfoFlags,
            io_priority: number,
        ): Future;
        function file_enumerator_next_files(
            file_enumerator: Gio.FileEnumerator,
            num_files: number,
            io_priority: number,
        ): Future;
        function file_load_contents_bytes(file: Gio.File): Future;
        /**
         * Asynchronously creates a directory and returns #DexFuture which
         * can be observed for the result.
         * @param file a #GFile
         * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
         * @returns a #DexFuture
         */
        function file_make_directory(file: Gio.File, io_priority: number): Future;
        /**
         * Queries to see if `file` exists asynchronously.
         * @param file a #GFile
         * @returns a #DexFuture that will resolve with %TRUE   if the file exists, otherwise reject with error.
         */
        function file_query_exists(file: Gio.File): Future;
        function file_query_info(
            file: Gio.File,
            attributes: string,
            flags: Gio.FileQueryInfoFlags,
            io_priority: number,
        ): Future;
        /**
         * Asynchronously opens a file for reading.
         * @param file a #GFile
         * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
         * @returns a #DexFuture
         */
        function file_read(file: Gio.File, io_priority: number): Future;
        function file_replace(
            file: Gio.File,
            etag: string | null,
            make_backup: boolean,
            flags: Gio.FileCreateFlags,
            io_priority: number,
        ): Future;
        function get_min_stack_size(): number;
        function get_page_size(): number;
        function init(): void;
        function input_stream_close(self: Gio.InputStream, io_priority: number): Future;
        function input_stream_read(self: Gio.InputStream, io_priority: number): [Future, Uint8Array];
        function input_stream_read_bytes(self: Gio.InputStream, count: number, io_priority: number): Future;
        function input_stream_skip(self: Gio.InputStream, count: number, io_priority: number): Future;
        function io_stream_close(io_stream: Gio.IOStream, io_priority: number): Future;
        function output_stream_close(self: Gio.OutputStream, io_priority: number): Future;
        function output_stream_splice(
            output: Gio.OutputStream,
            input: Gio.InputStream,
            flags: Gio.OutputStreamSpliceFlags,
            io_priority: number,
        ): Future;
        function output_stream_write(self: Gio.OutputStream, buffer: Uint8Array | string, io_priority: number): Future;
        function output_stream_write_bytes(
            self: Gio.OutputStream,
            bytes: GLib.Bytes | Uint8Array,
            io_priority: number,
        ): Future;
        function resolver_lookup_by_name(resolver: Gio.Resolver, address: string): Future;
        function socket_client_connect(
            socket_client: Gio.SocketClient,
            socket_connectable: Gio.SocketConnectable,
        ): Future;
        function socket_listener_accept(listener: Gio.SocketListener): Future;
        /**
         * Creates a future that awaits for `subprocess` to complete using
         * g_subprocess_wait_check_async().
         * @param subprocess a #GSubprocess
         * @returns a #DexFuture that will resolve when @subprocess   exits cleanly or reject upon signal or non-successful exit.
         */
        function subprocess_wait_check(subprocess: Gio.Subprocess): Future;
        /**
         * Retrieves the `DexObject` stored inside the given `value`.
         * @param value a `GValue` initialized with type `DEX_TYPE_OBJECT`
         * @returns a `DexObject`
         */
        function value_get_object(value: GObject.Value | any): Object | null;
        /**
         * Stores the given `DexObject` inside `value`.
         *
         * The [struct`GObject`.Value] will acquire a reference to the `object`.
         * @param value a [struct@GObject.Value] initialized with type `DEX_TYPE_OBJECT`
         * @param object a `DexObject` or %NULL
         */
        function value_set_object(value: GObject.Value | any, object?: Object | null): void;
        /**
         * Stores the given `DexObject` inside `value`.
         *
         * This function transfers the ownership of the `object` to the `GValue`.
         * @param value a [struct@GObject.Value] initialized with type `DEX_TYPE_OBJECT`
         * @param object a `DexObject`
         */
        function value_take_object(value: GObject.Value | any, object?: Object | null): void;
        interface FiberFunc {
            (): Future | null;
        }
        interface FutureCallback {
            (future: Future): Future | null;
        }
        interface SchedulerFunc {
            (): void;
        }
        type FileInfoList = object | null;
        type InetAddressList = object | null;
        class AsyncPair extends Future {
            static $gtype: GObject.GType<AsyncPair>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](instance: any | null, info: AsyncPairInfo): AsyncPair;

            // Methods

            /**
             * Gets the cancellable for the async pair.
             *
             * If the DexAsyncPair is discarded by its callers, then it will automatically
             * be cancelled using g_cancellable_cancel().
             * @returns a #GCancellable
             */
            get_cancellable(): Gio.Cancellable;
            return_boolean(value: boolean): void;
            /**
             * Rejects `async_pair` with `error`.
             *
             * This function is meant to be used when manually wrapping
             * various #GAsyncReadyCallback based API.
             *
             * The ownership of `error` is taken when calling this function.
             * @param error a #GError
             */
            return_error(error: GLib.Error): void;
            return_int64(value: number): void;
            /**
             * Resolves `async_pair` with a value of `instance`.
             *
             * This function is meant to be used when manually wrapping
             * various #GAsyncReadyCallback based API.
             *
             * The ownership of `instance` is taken when calling this function.
             * @param instance a #GObject
             */
            return_object(instance: GObject.Object): void;
            /**
             * Resolves `async_pair` with `value`.
             * @param value a string or %NULL
             */
            return_string(value?: string | null): void;
            return_uint64(value: number): void;
            /**
             * Resolves `async_pair` with `variant`.
             * @param variant the variant to resolve with
             */
            return_variant(variant: GLib.Variant): void;
            /**
             * Sets whether or not the future should cancel the async operation when
             * the future is discarded. This happens when no more futures are awaiting
             * the completion of this future.
             * @param cancel_on_discard if the operation should cancel when the future is discarded
             */
            set_cancel_on_discard(cancel_on_discard: boolean): void;
        }

        module AsyncResult {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
        }

        /**
         * `DexAsyncResult` is used to integrate a `DexFuture` with `GAsyncResult`.
         *
         * Use this class when you need to expose the traditional async/finish
         * behavior of `GAsyncResult`.
         */
        class AsyncResult extends GObject.Object implements Gio.AsyncResult {
            static $gtype: GObject.GType<AsyncResult>;

            // Constructors

            constructor(properties?: Partial<AsyncResult.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                source_object?: any | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback | null,
            ): AsyncResult;

            // Methods

            /**
             * Tracks the result of `future` and uses the value to complete `async_result,`
             * eventually calling the registered #GAsyncReadyCallback.
             * @param future a #DexFuture
             */
            ['await'](future: Future): void;
            /**
             * Gets the future for the #DexAsyncResult, or %NULL if a future
             * is not available.
             * @returns a #DexFuture or %NULL
             */
            dup_future(): Future | null;
            get_name(): string;
            propagate_boolean(): boolean;
            propagate_double(): number;
            propagate_int(): number;
            propagate_pointer(): any | null;
            set_name(name: string): void;
            set_priority(priority: number): void;
            set_static_name(name: string): void;

            // Inherited methods
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             * @returns a new reference to the source    object for the @res, or `NULL` if there is none.
             */
            get_source_object<T = GObject.Object>(): T;
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             * @returns the user data for @res.
             */
            get_user_data(): any | null;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             * @returns `TRUE` if @res has the indicated @source_tag, `FALSE` if   not.
             */
            is_tagged(source_tag?: any | null): boolean;
            /**
             * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
             * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
             * `FALSE`.
             *
             * This can be used for legacy error handling in async `*_finish()`
             * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
             * error returns themselves rather than calling into the virtual method.
             * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
             * set by virtual methods should also be extracted by virtual methods,
             * to enable subclasses to chain up correctly.
             * @returns `TRUE` if @error is has been filled in with an error from   @res, `FALSE` if not.
             */
            legacy_propagate_error(): boolean;
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_source_object<T = GObject.Object>(): T;
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_user_data(): any | null;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             */
            vfunc_is_tagged(source_tag?: any | null): boolean;
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

        /**
         * #DexBlock represents a callback closure that can be scheduled to run
         * within a specific #GMainContext.
         *
         * You create these by chaining futures together using dex_future_then(),
         * dex_future_catch(), dex_future_finally() and similar.
         */
        class Block extends Future {
            static $gtype: GObject.GType<Block>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the kind of block.
             *
             * The kind of block relates to what situations the block would be
             * executed such as for handling a future resolution, rejection, or
             * both.
             * @returns a #DexBlockKind
             */
            get_kind(): BlockKind;
            /**
             * Gets the scheduler to use when executing a block.
             * @returns a #DexScheduler
             */
            get_scheduler(): Scheduler;
        }

        /**
         * `DexCancellable` is a simple cancellation primitive which allows
         * for you to create `DexFuture` that will reject upon cancellation.
         *
         * Use this combined with other futures using dex_future_all_race()
         * to create a future that resolves when all other futures complete
         * or `dex_cancellable_cancel()` is called to reject.
         */
        class Cancellable extends Future {
            static $gtype: GObject.GType<Cancellable>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](): Cancellable;

            static new_from_cancellable(cancellable?: Gio.Cancellable | null): Cancellable;

            // Methods

            cancel(): void;
        }

        class Channel extends Object {
            static $gtype: GObject.GType<Channel>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](capacity: number): Channel;

            // Methods

            can_receive(): boolean;
            can_send(): boolean;
            close_receive(): void;
            close_send(): void;
            /**
             * Receives the next item from the channel.
             *
             * The resulting future will resolve or reject when an item is available
             * to the channel or when send side has closed (in that order).
             * @returns a #DexFuture
             */
            receive(): Future;
            /**
             * Will attempt to receive all items in the channel as a #DexResultSet.
             *
             * If the receive side of the channel is closed, then the future will
             * reject with an error.
             *
             * If there are items in the queue, then they will be returned as part
             * of a #DexResultSet containing each of the futures.
             *
             * Otherwise, a #DexFutureSet will be returned which will resolve or
             * reject when the next item is available in the channel (or the send
             * or receive sides are closed).
             * @returns a #DexFuture
             */
            receive_all(): Future;
            /**
             * Queues `future` into the channel.
             *
             * The other end of the channel can receive the future (or a future that will
             * eventually resolve to `future)` using dex_channel_receive().
             *
             * This function returns a #DexFuture that will resolve when the channels
             * capacity is low enough to queue more items.
             *
             * If the send side of the channel is closed, the returned #DexFuture will be
             * rejected with %DEX_ERROR_CHANNEL_CLOSED.
             * @param future a #DexFuture
             * @returns a #DexFuture
             */
            send(future: Future): Future;
        }

        /**
         * #DexDelayed is a future which will resolve or reject the value of another
         * #DexFuture when dex_delayed_release() is called.
         *
         * This allows you to gate the resolution of a future which has already
         * resolved or rejected until a later moment.
         */
        class Delayed extends Future {
            static $gtype: GObject.GType<Delayed>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](future: Future): Delayed;

            // Methods

            /**
             * Retrieves the delayed future provided to dex_delayed_new().
             *
             * This function can only return a #DexFuture before dex_delayed_release()
             * is called. After that, the delayed future is released and this function
             * will return %NULL.
             * @returns a #DexFuture or %NULL
             */
            dup_future(): Future | null;
            release(): void;
        }

        /**
         * #DexFiber is a fiber (or coroutine) which itself is a #DexFuture.
         *
         * When the fiber completes execution it will either resolve or reject the
         * with the result or error.
         *
         * You may treat a #DexFiber like any other #DexFuture which makes it simple
         * to integrate fibers into other processing chains.
         *
         * #DexFiber are provided their own stack seperate from a threads main stack,
         * They are automatically scheduled as necessary.
         *
         * Use dex_await() and similar functions to await the result of another future
         * within the fiber and the fiber will be suspended allowing another fiber to
         * run and/or the rest of the applications main loop.
         *
         * Once a fiber is created, it is pinned to that scheduler. Use
         * dex_scheduler_spawn() to create a fiber on a specific scheduler.
         */
        class Fiber extends Future {
            static $gtype: GObject.GType<Fiber>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * #DexFuture is the base class representing a future which may resolve with
         * a value or reject with error at some point in the future.
         *
         * It is the basis for libdex's concurrency and parallelism model.
         *
         * Use futures to represent work in progress and allow consumers to build
         * robust processing chains up front which will complete or fail as futures
         * resolve or reject.
         *
         * When running on a #DexFiber, you may use dex_await() and similar functions
         * to suspend the current thread and return upon completion of the dependent
         * future.
         */
        class Future extends Object {
            static $gtype: GObject.GType<Future>;

            // Constructors

            _init(...args: any[]): void;

            static all_race(futures: Future[]): Future;

            static all(futures: Future[]): Future;

            static any(futures: Future[]): Future;

            static ['catch'](future: Future, callback: FutureCallback): Future;

            static catch_loop(future: Future, callback: FutureCallback): Future;

            static ['finally'](future: Future, callback: FutureCallback): Future;

            static finally_loop(future: Future, callback: FutureCallback): Future;

            static first(futures: Future[]): Future;

            static new_for_boolean(v_bool: boolean): Future;

            static new_for_double(v_double: number): Future;

            static new_for_errno(errno_: number): Future;

            static new_for_error(error: GLib.Error): Future;

            static new_for_float(v_float: number): Future;

            static new_for_int(v_int: number): Future;

            static new_for_int64(v_int64: number): Future;

            static new_for_object(value: GObject.Object): Future;

            static new_for_pointer(pointer?: any | null): Future;

            static new_for_string(string: string): Future;

            static new_for_uint(v_uint: number): Future;

            static new_for_uint64(v_uint64: number): Future;

            static new_for_value(value: GObject.Value | any): Future;

            static new_infinite(): Future;

            static new_take_object(value?: GObject.Object | null): Future;

            static new_take_string(string: string): Future;

            static then(future: Future, callback: FutureCallback): Future;

            static then_loop(future: Future, callback: FutureCallback): Future;

            // Methods

            /**
             * Suspends the current #DexFiber and resumes when `future` has completed.
             *
             * If `future` is completed when this function is called, the fiber will handle
             * the result immediately.
             *
             * This function may only be called within a #DexFiber. To do otherwise will
             * return %FALSE and `error` set to %DEX_ERROR_NO_FIBER.
             *
             * It is an error to call this function in a way that would cause
             * intermediate code to become invalid when resuming the stack. For example,
             * if a foreach-style function taking a callback was to suspend from the
             * callback, undefined behavior may occur such as thread-local-storage
             * having changed.
             * @returns %TRUE if the future resolved, otherwise %FALSE   and @error is set.
             */
            ['await'](): boolean;
            /**
             * Awaits on `future` and returns the gboolean result.
             *
             * If the result is not a #gboolean, `error` is set.
             * @returns the #gboolean, or %FALSE and @error is set
             */
            await_boolean(): boolean;
            /**
             * Awaits on `future` and returns the %G_TYPE_BOXED based result.
             * @returns the boxed result, or %NULL and @error is set.
             */
            await_boxed(): any | null;
            /**
             * Awaits on `future` and returns the result as an double.
             *
             * The resolved value must be of type %G_TYPE_DOUBLE or `error` is set.
             * @returns an double, or 0 in case of failure and @error is set.
             */
            await_double(): number;
            /**
             * Awaits on `future` and returns the enum result.
             *
             * If the result is not a %G_TYPE_ENUM, `error` is set.
             * @returns the enum or 0 and @error is set.
             */
            await_enum(): number;
            /**
             * Awaits on `future` and returns the resultint file-descriptor.
             *
             * The resolved value must be of type %DEX_TYPE_FD or `error` is set.
             * @returns a valid file descriptor or -1. you may get -1 without   error being set if there was no rejected future.
             */
            await_fd(): number;
            /**
             * Awaits on `future` and returns the flags result.
             *
             * If the result is not a %G_TYPE_FLAGS, `error` is set.
             * @returns the flags or 0 and @error is set.
             */
            await_flags(): number;
            /**
             * Awaits on `future` and returns the result as an float.
             *
             * The resolved value must be of type %G_TYPE_FLOAT or `error` is set.
             * @returns an float, or 0 in case of failure and @error is set.
             */
            await_float(): number;
            /**
             * Awaits on `future` and returns the result as an int.
             *
             * The resolved value must be of type %G_TYPE_INT or `error` is set.
             * @returns an int, or 0 in case of failure and @error is set.
             */
            await_int(): number;
            /**
             * Awaits on `future` and returns the result as an int64.
             *
             * The resolved value must be of type %G_TYPE_INT64 or `error` is set.
             * @returns an int64, or 0 in case of failure and @error is set.
             */
            await_int64(): number;
            /**
             * Awaits on `future` and returns the #GObject-based result.
             * @returns the object, or %NULL and @error is set.
             */
            await_object<T = GObject.Object>(): T;
            /**
             * Calls dex_await() and returns the value of g_value_get_pointer(),
             * otherwise `error` is set if the future rejected.
             * @returns a pointer or %NULL
             */
            await_pointer(): any | null;
            /**
             * Awaits on `future` and returns the string result.
             *
             * If the result is not a %G_TYPE_STRING, `error` is set.
             * @returns the string  or %NULL and @error is set
             */
            await_string(): string | null;
            /**
             * Awaits on `future` and returns the result as an uint.
             *
             * The resolved value must be of type %G_TYPE_UINT or `error` is set.
             * @returns an uint, or 0 in case of failure and @error is set.
             */
            await_uint(): number;
            /**
             * Awaits on `future` and returns the result as an uint64.
             *
             * The resolved value must be of type %G_TYPE_UINT64 or `error` is set.
             * @returns an uint64, or 0 in case of failure and @error is set.
             */
            await_uint64(): number;
            /**
             * Awaits on `future` and returns the %G_TYPE_VARIANT based result.
             * @returns the variant result, or %NULL and @error is set.
             */
            await_variant(): GLib.Variant;
            /**
             * Disowns a future, allowing it to run to completion even though there may
             * be no observer interested in the futures completion or rejection.
             */
            disown(): void;
            get_name(): string;
            get_status(): FutureStatus;
            get_value(): unknown;
            /**
             * This is a convenience function equivalent to calling
             * dex_future_get_status() and checking for %DEX_FUTURE_STATUS_PENDING.
             * @returns %TRUE if the future is still pending; otherwise %FALSE
             */
            is_pending(): boolean;
            /**
             * This is a convenience function equivalent to calling
             * dex_future_get_status() and checking for %DEX_FUTURE_STATUS_REJECTED.
             * @returns %TRUE if the future was rejected with an error; otherwise %FALSE
             */
            is_rejected(): boolean;
            /**
             * This is a convenience function equivalent to calling
             * dex_future_get_status() and checking for %DEX_FUTURE_STATUS_RESOLVED.
             * @returns %TRUE if the future has successfully resolved with a value;   otherwise %FALSE
             */
            is_resolved(): boolean;
        }

        /**
         * #DexFutureSet represents a set of #DexFuture.
         *
         * You may retrieve each underlying #DexFuture using
         * dex_future_set_get_future_at().
         *
         * The #DexFutureStatus of of the #DexFutureSet depends on how the set
         * was created using dex_future_all(), dex_future_any(), and similar mmethods.
         */
        class FutureSet extends Future {
            static $gtype: GObject.GType<FutureSet>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets a #DexFuture that was used to produce the result of `future_set`.
             *
             * Use dex_future_set_get_size() to determine the number of #DexFuture that
             * are contained within the #DexFutureSet.
             * @param position
             * @returns a #DexFuture
             */
            get_future_at(position: number): Future;
            /**
             * Gets the number of futures associated with the #DexFutureSet. You may
             * use dex_future_set_get_future_at() to obtain the individual #DexFuture.
             * @returns the number of #DexFuture in @future_set.
             */
            get_size(): number;
            /**
             * Gets the result from a #DexFuture that is part of the
             * #DexFutureSet.
             * @param position the #DexFuture position within the set
             * @returns a #GValue if successful; otherwise %NULL   and @error is set.
             */
            get_value_at(position: number): unknown;
        }

        /**
         * #DexMainScheduler is the scheduler used on the default thread of an
         * application. It is meant to integrate with your main loop.
         *
         * This scheduler does the bulk of the work in an application.
         *
         * Use #DexThreadPoolScheduler when you want to offload work to a thread
         * and still use future-based programming.
         */
        class MainScheduler extends Scheduler {
            static $gtype: GObject.GType<MainScheduler>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * `DexObject` is the basic building block of types defined within
         * libdex. Futures, Schedulers, and Channels all inherit from DexObject
         * which provides features like thread-safe weak pointers and memory
         * management operations.
         *
         * Objects that are integrating with GIO instead inherit from their
         * natural type in GIO.
         */
        abstract class Object {
            static $gtype: GObject.GType<Object>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Acquires a reference on the given object, and increases its reference count by one.
             * @returns the object with its reference count increased
             */
            ref(): Object;
            /**
             * Releases a reference on the given object, and decreases its reference count by one.
             *
             * If it was the last reference, the resources associated to the instance are freed.
             */
            unref(): void;
        }

        /**
         * #DexPromise is a convenient #DexFuture for prpoagating a result or
         * rejection in appliction and library code.
         *
         * Use this when there is not a more specialized #DexFuture for your needs to
         * propagate a result or rejection to the caller in an asynchronous fashion.
         */
        class Promise extends Future {
            static $gtype: GObject.GType<Promise>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](): Promise;

            static new_cancellable(): Promise;

            // Methods

            /**
             * Gets a #GCancellable that will cancel when the promise has
             * been discarded (and therefore result no longer necessary).
             *
             * This is useful when manually implementing wrappers around various
             * #GAsyncReadyCallback based API.
             *
             * If `promise` was created with dex_promise_new(), then %NULL is returned.
             * @returns a #GCancellable or %NULL
             */
            get_cancellable(): Gio.Cancellable | null;
            /**
             * Marks the promise as rejected, indicating a failure.
             * @param error a #GError
             */
            reject(error: GLib.Error): void;
            /**
             * Sets the result for a #DexPromise.
             * @param value a #GValue containing the resolved value
             */
            resolve(value: GObject.Value | any): void;
            resolve_boolean(value: boolean): void;
            resolve_double(value: number): void;
            resolve_fd(fd: number): void;
            resolve_float(value: number): void;
            resolve_int(value: number): void;
            resolve_int64(value: number): void;
            resolve_long(value: number): void;
            resolve_object(object?: GObject.Object | null): void;
            resolve_string(value: string): void;
            resolve_uint(value: number): void;
            resolve_uint64(value: number): void;
            resolve_ulong(value: number): void;
            /**
             * If `variant` is floating, its reference is consumed.
             * @param variant a #GVariant
             */
            resolve_variant(variant?: GLib.Variant | null): void;
        }

        /**
         * #DexScheduler is the base class used by schedulers.
         *
         * Schedulers are responsible for ensuring asynchronous IO requests and
         * completions are processed. They also schedule closures to be run as part
         * of future result propagation. Additionally, they manage #DexFiber execution
         * and suspension.
         *
         * Specialized schedulers such as #DexThreadPoolScheduler will do this for a
         * number of threads and dispatch new work between them.
         */
        abstract class Scheduler extends Object {
            static $gtype: GObject.GType<Scheduler>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets the default scheduler for the process.
             *
             * The default scheduler executes tasks within the default #GMainContext.
             * Typically that is the main thread of the application.
             */
            static get_default(): Scheduler;
            /**
             * Gets the default scheduler for the thread.
             */
            static get_thread_default(): Scheduler | null;
            /**
             * Gets the thread default scheduler with the reference count incremented.
             */
            static ref_thread_default(): Scheduler | null;

            // Methods

            /**
             * Gets the default main context for a scheduler.
             *
             * This may be a different value depending on the calling thread.
             *
             * For example, calling this on the #DexThreadPoolScheduer from outside
             * a worker thread may result in getting a shared #GMainContext for the
             * process.
             *
             * However, calling from a worker thread may give you a #GMainContext
             * specifically for that thread.
             * @returns a #GMainContext
             */
            get_main_context(): GLib.MainContext;
            /**
             * Queues `func` to run on `scheduler`.
             * @param func the function callback
             */
            push(func: SchedulerFunc): void;
            /**
             * Request `scheduler` to spawn a #DexFiber.
             *
             * The fiber will have its own stack and cooperatively schedules among other
             * fibers sharing the schaeduler.
             *
             * If `stack_size` is 0, it will set to a sensible default. Otherwise, it is
             * rounded up to the nearest page size.
             * @param stack_size stack size in bytes or 0
             * @param func a #DexFiberFunc
             * @returns a #DexFuture that will resolve or reject when   @func completes (or its resulting #DexFuture completes).
             */
            spawn(stack_size: number, func: FiberFunc): Future;
        }

        /**
         * `DexStaticFuture` represents a future that is resolved from the initial
         * state.
         *
         * Use this when you need to create a future for API reasons but already have
         * the value or rejection at that point.
         *
         * #DexStaticFuture is used internally by functions like
         * dex_future_new_for_boolean() and similar.
         */
        class StaticFuture extends Future {
            static $gtype: GObject.GType<StaticFuture>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * #DexThreadPoolScheduler is a #DexScheduler that will dispatch work items
         * and fibers to sub-schedulers on a specific operating system thread.
         *
         * #DexFiber will never migrate from the thread they are created on to reduce
         * chances of safety issues involved in tracking state between CPU.
         *
         * New work items are placed into a global work queue and then dispatched
         * efficiently to a single thread pool worker using a specialized async
         * semaphore. On modern Linux using io_uring, this wakes up a single worker
         * thread and therefore is not subject to "thundering herd" common with
         * global work queues.
         *
         * When a worker creates a new work item, it is placed into a work stealing
         * queue owned by the thread. Other worker threads may steal work items when
         * they have exhausted their own work queue.
         */
        class ThreadPoolScheduler extends Scheduler {
            static $gtype: GObject.GType<ThreadPoolScheduler>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](): ThreadPoolScheduler;

            // Static methods

            /**
             * Gets the default thread pool scheduler for the instance.
             *
             * This function is useful to allow programs and libraries to share
             * an off-main-thread scheduler without having to coordinate on where
             * the scheduler instance is created or owned.
             */
            static get_default(): Scheduler;
        }

        /**
         * #DexTimeout is a #DexFuture that will resolve after the configured
         * period of time.
         */
        class Timeout extends Future {
            static $gtype: GObject.GType<Timeout>;

            // Constructors

            _init(...args: any[]): void;

            static new_deadline(deadline: number): Timeout;

            static new_msec(msec: number): Timeout;

            static new_seconds(seconds: number): Timeout;

            static new_usec(usec: number): Timeout;

            // Methods

            postpone_until(deadline: number): void;
        }

        /**
         * #DexUnixSignal is a #DexFuture that will resolve when a specific unix
         * signal has been received.
         *
         * Use this when you want to handle a signal from your main loop rather than
         * from a resticted operating signal handler.
         *
         * On Linux, this uses a signalfd.
         */
        class UnixSignal extends Future {
            static $gtype: GObject.GType<UnixSignal>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](signum: number): UnixSignal;

            // Methods

            get_signum(): number;
        }

        abstract class AioContext {
            static $gtype: GObject.GType<AioContext>;

            // Constructors

            _init(...args: any[]): void;
        }

        class AsyncPairInfo {
            static $gtype: GObject.GType<AsyncPairInfo>;

            // Fields

            async: any;
            finish: any;
            return_type: GObject.GType;

            // Constructors

            _init(...args: any[]): void;
        }

        type AsyncResultClass = typeof AsyncResult;
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

    export default Dex;
}

declare module 'gi://Dex' {
    import Dex1 from 'gi://Dex?version=1';
    export default Dex1;
}
// END
