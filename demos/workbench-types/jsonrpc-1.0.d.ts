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

declare module 'gi://Jsonrpc?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Jsonrpc {
        /**
         * Jsonrpc-1.0
         */

        export namespace ClientError {
            export const $gtype: GObject.GType<ClientError>;
        }

        enum ClientError {
            PARSE_ERROR,
            INVALID_REQUEST,
            METHOD_NOT_FOUND,
            INVALID_PARAMS,
            INTERNAL_ERROR,
        }
        /**
         * jsonrpc-glib major version component (e.g. 1 if %JSONRPC_VERSION is 1.2.3)
         */
        const MAJOR_VERSION: number;
        /**
         * jsonrpc-glib micro version component (e.g. 3 if %JSONRPC_VERSION is 1.2.3)
         */
        const MICRO_VERSION: number;
        /**
         * jsonrpc-glib minor version component (e.g. 2 if %JSONRPC_VERSION is 1.2.3)
         */
        const MINOR_VERSION: number;
        /**
         * jsonrpc-glib version, encoded as a string, useful for printing and
         * concatenation.
         */
        const VERSION_S: string;
        interface ServerHandler {
            (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void;
        }
        module Client {
            // Signal callback interfaces

            interface Failed {
                (): void;
            }

            interface HandleCall {
                (method: string, id: GLib.Variant, params?: GLib.Variant | null): boolean;
            }

            interface Notification {
                (method: string, params?: GLib.Variant | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                io_stream: Gio.IOStream;
                ioStream: Gio.IOStream;
                use_gvariant: boolean;
                useGvariant: boolean;
            }
        }

        /**
         * A client for JSON-RPC communication
         *
         * The #JsonrpcClient class provides a convenient API to coordinate with a
         * JSON-RPC server. You can provide the underlying [class`Gio`.IOStream] to communicate
         * with allowing you to control the negotiation of how you setup your
         * communications channel. One such method might be to use a [class`Gio`.Subprocess] and
         * communicate over stdin and stdout.
         *
         * Because JSON-RPC allows for out-of-band notifications from the server to
         * the client, it is important that the consumer of this API calls
         * [method`Client`.close] or [method`Client`.close_async] when they no longer
         * need the client. This is because #JsonrpcClient contains an asynchronous
         * read-loop to process incoming messages. Until [method`Client`.close] or
         * [method`Client`.close_async] have been called, this read loop will prevent
         * the object from finalizing (being freed).
         *
         * To make an RPC call, use [method`Client`.call] or
         * [method`Client`.call_async] and provide the method name and the parameters
         * as a [struct`GLib`.Variant] for call.
         *
         * It is a programming error to mix synchronous and asynchronous API calls
         * of the #JsonrpcClient class.
         *
         * For synchronous calls, #JsonrpcClient will use the thread-default
         * [struct`GLib`.MainContext]. If you have special needs here ensure you've set the context
         * before calling into any #JsonrpcClient API.
         */
        class Client extends GObject.Object {
            static $gtype: GObject.GType<Client>;

            // Properties

            /**
             * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
             * with a JSON-RPC peer.
             */
            set io_stream(val: Gio.IOStream);
            /**
             * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
             * with a JSON-RPC peer.
             */
            set ioStream(val: Gio.IOStream);
            /**
             * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
             * communicate with the peer instead of JSON. You should only set this
             * if you know the peer is also a Jsonrpc-GLib based client.
             *
             * Setting this property allows the peers to communicate using GVariant
             * instead of JSON. This means that we can access the messages without
             * expensive memory allocations and parsing costs associated with JSON.
             * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
             */
            get use_gvariant(): boolean;
            set use_gvariant(val: boolean);
            /**
             * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
             * communicate with the peer instead of JSON. You should only set this
             * if you know the peer is also a Jsonrpc-GLib based client.
             *
             * Setting this property allows the peers to communicate using GVariant
             * instead of JSON. This means that we can access the messages without
             * expensive memory allocations and parsing costs associated with JSON.
             * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
             */
            get useGvariant(): boolean;
            set useGvariant(val: boolean);

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](io_stream: Gio.IOStream): Client;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'failed', callback: (_source: this) => void): number;
            connect_after(signal: 'failed', callback: (_source: this) => void): number;
            emit(signal: 'failed'): void;
            connect(
                signal: 'handle-call',
                callback: (_source: this, method: string, id: GLib.Variant, params: GLib.Variant | null) => boolean,
            ): number;
            connect_after(
                signal: 'handle-call',
                callback: (_source: this, method: string, id: GLib.Variant, params: GLib.Variant | null) => boolean,
            ): number;
            emit(signal: 'handle-call', method: string, id: GLib.Variant, params?: GLib.Variant | null): void;
            connect(
                signal: 'notification',
                callback: (_source: this, method: string, params: GLib.Variant | null) => void,
            ): number;
            connect_after(
                signal: 'notification',
                callback: (_source: this, method: string, params: GLib.Variant | null) => void,
            ): number;
            emit(signal: 'notification', method: string, params?: GLib.Variant | null): void;

            // Static methods

            static error_quark(): GLib.Quark;

            // Virtual methods

            vfunc_failed(): void;
            vfunc_handle_call(method: string, id: GLib.Variant, params: GLib.Variant): boolean;
            vfunc_notification(method_name: string, params: GLib.Variant): void;

            // Methods

            /**
             * Synchronously calls `method` with `params` on the remote peer.
             *
             * once a reply has been received, or failure, this function will return.
             * If successful, `return_value` will be set with the reslut field of
             * the response.
             *
             * If `params` is floating then this function consumes the reference.
             * @param method The name of the method to call
             * @param params A [struct@GLib.Variant] of parameters or %NULL
             * @param cancellable A #GCancellable or %NULL
             * @returns %TRUE on success; otherwise %FALSE and @error is set.
             */
            call(
                method: string,
                params?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.Variant | null];
            /**
             * Asynchronously calls `method` with `params` on the remote peer.
             *
             * Upon completion or failure, `callback` is executed and it should
             * call [method`Client`.call_finish] to complete the request and release
             * any memory held.
             *
             * If `params` is floating, the floating reference is consumed.
             * @param method The name of the method to call
             * @param params A [struct@GLib.Variant] of parameters or %NULL
             * @param cancellable A #GCancellable or %NULL
             * @param callback a callback to executed upon completion
             */
            call_async(
                method: string,
                params?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous call to [method`Client`.call_async].
             * @param result A #GAsyncResult provided to the callback in [method@Client.call_async]
             * @returns %TRUE if successful and @return_value is set, otherwise %FALSE and @error is set.
             */
            call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
            /**
             * Asynchronously calls `method` with `params` on the remote peer.
             *
             * Upon completion or failure, `callback` is executed and it should
             * call [method`Client`.call_finish] to complete the request and release
             * any memory held.
             *
             * This function is similar to [method`Client`.call_async] except that
             * it allows the caller to get the id of the command which might be useful
             * in systems where you can cancel the operation (such as the Language
             * Server Protocol).
             *
             * If `params` is floating, the floating reference is consumed.
             * @param method The name of the method to call
             * @param params A [struct@GLib.Variant] of parameters or %NULL
             * @param cancellable A #GCancellable or %NULL
             * @param callback Callback to executed upon completion
             */
            call_with_id_async(
                method: string,
                params?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): GLib.Variant | null;
            /**
             * Closes the underlying streams and cancels any inflight operations of the
             * #JsonrpcClient.
             *
             * This is important to call when you are done with the
             * client so that any outstanding operations that have caused `self` to
             * hold additional references are cancelled.
             *
             * Failure to call this method results in a leak of #JsonrpcClient.
             * @param cancellable
             * @returns %TRUE if successful; otherwise %FALSE and @error is set.
             */
            close(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronous version of [method`Client`.close].
             *
             * Currently this operation is implemented synchronously, but in the future may
             * be converted to using asynchronous operations.
             * @param cancellable
             * @param callback
             */
            close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Completes an asynchronous request of [method`Client`.close_async].
             * @param result
             * @returns %TRUE if successful; otherwise %FALSE and @error is set.
             */
            close_finish(result: Gio.AsyncResult): boolean;
            /**
             * Gets the [property`Client:`use-gvariant] property.
             *
             * Indicates if [struct`GLib`.Variant] is being used to communicate with the peer.
             * @returns %TRUE if [struct@GLib.Variant] is being used; otherwise %FALSE.
             */
            get_use_gvariant(): boolean;
            /**
             * Synchronous variant of [method`Client`.reply_async].
             *
             * If `id` or `result` are floating, there floating references are consumed.
             * @param id The id of the message to reply
             * @param result The return value or %NULL
             * @param cancellable A #GCancellable, or %NULL
             */
            reply(id: GLib.Variant, result?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;
            reply_async(
                id: GLib.Variant,
                result: GLib.Variant,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously replies to the peer, sending a JSON-RPC error message.
             *
             * Call [method`Client`.reply_error_finish] to get the result of this operation.
             *
             * If `id` is floating, it's floating reference is consumed.
             * @param id A [struct@GLib.Variant] containing the call id
             * @param code The error code
             * @param message An optional error message
             * @param cancellable A #GCancellable, or %NULL
             * @param callback A #GAsyncReadyCallback or %NULL
             */
            reply_error_async(
                id: GLib.Variant,
                code: number,
                message?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            reply_error_finish(result: Gio.AsyncResult): boolean;
            /**
             * Completes an asynchronous request to [method`Client`.reply_async].
             * @param result A #GAsyncResult
             * @returns %TRUE if successful; otherwise %FALSE and @error is set.
             */
            reply_finish(result: Gio.AsyncResult): boolean;
            /**
             * Synchronously calls `method` with `params` on the remote peer.
             *
             * This function will not wait or expect a reply from the peer.
             *
             * If `params` is floating then the reference is consumed.
             * @param method The name of the method to call
             * @param params A [struct@GLib.Variant] of parameters or %NULL
             * @param cancellable A #GCancellable or %NULL
             * @returns %TRUE on success; otherwise %FALSE and @error is set.
             */
            send_notification(
                method: string,
                params?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously calls `method` with `params` on the remote peer.
             *
             * This function will not wait or expect a reply from the peer.
             *
             * This function is useful when the caller wants to be notified that
             * the bytes have been delivered to the underlying stream. This does
             * not indicate that the peer has received them.
             *
             * If `params` is floating then the reference is consumed.
             * @param method The name of the method to call
             * @param params A [struct@GLib.Variant] of parameters or %NULL
             * @param cancellable A #GCancellable or %NULL
             * @param callback
             */
            send_notification_async(
                method: string,
                params?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous call to [method`Client`.send_notification_async].
             *
             * Successful completion of this function only indicates that the request
             * has been written to the underlying buffer, not that the peer has received
             * the notification.
             * @param result
             * @returns %TRUE if the bytes have been flushed to the [class@Gio.IOStream]; otherwise   %FALSE and @error is set.
             */
            send_notification_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the [property`Client:`use-gvariant] property.
             *
             * This function sets if [struct`GLib`.Variant] should be used to communicate with the
             * peer. Doing so can allow for more efficient communication by avoiding
             * expensive parsing overhead and memory allocations. However, it requires
             * that the peer also supports [struct`GLib`.Variant] encoding.
             * @param use_gvariant If [struct@GLib.Variant] should be used
             */
            set_use_gvariant(use_gvariant: boolean): void;
            /**
             * This function requests that client start processing incoming
             * messages from the peer.
             */
            start_listening(): void;
        }

        module InputStream {
            // Constructor properties interface

            interface ConstructorProps extends Gio.DataInputStream.ConstructorProps, Gio.Seekable.ConstructorProps {}
        }

        class InputStream extends Gio.DataInputStream implements Gio.Seekable {
            static $gtype: GObject.GType<InputStream>;

            // Constructors

            constructor(properties?: Partial<InputStream.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](base_stream: Gio.InputStream): InputStream;

            // Methods

            read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean;
            read_message_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean;

            // Inherited methods
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

        module OutputStream {
            // Constructor properties interface

            interface ConstructorProps extends Gio.DataOutputStream.ConstructorProps, Gio.Seekable.ConstructorProps {
                use_gvariant: boolean;
                useGvariant: boolean;
            }
        }

        class OutputStream extends Gio.DataOutputStream implements Gio.Seekable {
            static $gtype: GObject.GType<OutputStream>;

            // Properties

            get use_gvariant(): boolean;
            set use_gvariant(val: boolean);
            get useGvariant(): boolean;
            set useGvariant(val: boolean);

            // Constructors

            constructor(properties?: Partial<OutputStream.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](base_stream: Gio.OutputStream): OutputStream;

            // Methods

            get_use_gvariant(): boolean;
            set_use_gvariant(use_gvariant: boolean): void;
            /**
             * Synchronously sends a message to the peer.
             *
             * This operation will complete once the message has been buffered. There
             * is no guarantee the peer received it.
             * @param message a #GVariant
             * @param cancellable a #GCancellable or %NULL
             */
            write_message(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously sends a message to the peer.
             *
             * This asynchronous operation will complete once the message has
             * been buffered, and there is no guarantee the peer received it.
             * @param message a #GVariant
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback or %NULL
             */
            write_message_async(
                message: GLib.Variant,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            write_message_finish(result: Gio.AsyncResult): boolean;

            // Inherited methods
            /**
             * Tests if the stream supports the #GSeekableIface.
             * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
             */
            can_seek(): boolean;
            /**
             * Tests if the length of the stream can be adjusted with
             * g_seekable_truncate().
             * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
             */
            can_truncate(): boolean;
            /**
             * Seeks in the stream by the given `offset,` modified by `type`.
             *
             * Attempting to seek past the end of the stream will have different
             * results depending on if the stream is fixed-sized or resizable.  If
             * the stream is resizable then seeking past the end and then writing
             * will result in zeros filling the empty space.  Seeking past the end
             * of a resizable stream and reading will result in EOF.  Seeking past
             * the end of a fixed-sized stream will fail.
             *
             * Any operation that would result in a negative offset will fail.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param offset a #goffset.
             * @param type a #GSeekType.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
             */
            seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Tells the current position within the stream.
             * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
             */
            tell(): number;
            /**
             * Sets the length of the stream to `offset`. If the stream was previously
             * larger than `offset,` the extra data is discarded. If the stream was
             * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             * @param offset new length for @seekable, in bytes.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
             */
            truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Tests if the stream supports the #GSeekableIface.
             */
            vfunc_can_seek(): boolean;
            /**
             * Tests if the length of the stream can be adjusted with
             * g_seekable_truncate().
             */
            vfunc_can_truncate(): boolean;
            /**
             * Seeks in the stream by the given `offset,` modified by `type`.
             *
             * Attempting to seek past the end of the stream will have different
             * results depending on if the stream is fixed-sized or resizable.  If
             * the stream is resizable then seeking past the end and then writing
             * will result in zeros filling the empty space.  Seeking past the end
             * of a resizable stream and reading will result in EOF.  Seeking past
             * the end of a fixed-sized stream will fail.
             *
             * Any operation that would result in a negative offset will fail.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param offset a #goffset.
             * @param type a #GSeekType.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Tells the current position within the stream.
             */
            vfunc_tell(): number;
            /**
             * Sets the length of the stream to `offset`. If the stream was previously
             * larger than `offset,` the extra data is discarded. If the stream was
             * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             * @param offset new length for @seekable, in bytes.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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

        module Server {
            // Signal callback interfaces

            interface ClientAccepted {
                (client: Client): void;
            }

            interface ClientClosed {
                (client: Client): void;
            }

            interface HandleCall {
                (client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean;
            }

            interface Notification {
                (client: Client, method: string, id: GLib.Variant): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A server for JSON-RPC communication
         *
         * The #JsonrpcServer class can help you implement a JSON-RPC server. You can
         * accept connections and then communicate with clients using the
         * [class`Client]` API.
         */
        class Server extends GObject.Object {
            static $gtype: GObject.GType<Server>;

            // Constructors

            constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Server;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'client-accepted', callback: (_source: this, client: Client) => void): number;
            connect_after(signal: 'client-accepted', callback: (_source: this, client: Client) => void): number;
            emit(signal: 'client-accepted', client: Client): void;
            connect(signal: 'client-closed', callback: (_source: this, client: Client) => void): number;
            connect_after(signal: 'client-closed', callback: (_source: this, client: Client) => void): number;
            emit(signal: 'client-closed', client: Client): void;
            connect(
                signal: 'handle-call',
                callback: (
                    _source: this,
                    client: Client,
                    method: string,
                    id: GLib.Variant,
                    params: GLib.Variant,
                ) => boolean,
            ): number;
            connect_after(
                signal: 'handle-call',
                callback: (
                    _source: this,
                    client: Client,
                    method: string,
                    id: GLib.Variant,
                    params: GLib.Variant,
                ) => boolean,
            ): number;
            emit(signal: 'handle-call', client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void;
            connect(
                signal: 'notification',
                callback: (_source: this, client: Client, method: string, id: GLib.Variant) => void,
            ): number;
            connect_after(
                signal: 'notification',
                callback: (_source: this, client: Client, method: string, id: GLib.Variant) => void,
            ): number;
            emit(signal: 'notification', client: Client, method: string, id: GLib.Variant): void;

            // Virtual methods

            vfunc_client_accepted(client: Client): void;
            vfunc_client_closed(client: Client): void;
            vfunc_handle_call(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean;
            vfunc_notification(client: Client, method: string, params: GLib.Variant): void;

            // Methods

            /**
             * This function accepts `io_stream` as a new client to the #JsonrpcServer
             * by wrapping it in a #JsonrpcClient and starting the message accept
             * loop.
             * @param io_stream A #GIOStream
             */
            accept_io_stream(io_stream: Gio.IOStream): void;
            /**
             * Adds a new handler that will be dispatched when a matching `method` arrives.
             * @param method A method to handle
             * @param handler A handler to   execute when an incoming method matches @methods
             * @returns A handler id that can be used to remove the handler with   [method@Server.remove_handler].
             */
            add_handler(method: string, handler: ServerHandler): number;
            /**
             * Calls `foreach_func` for every client connected.
             * @param foreach_func A callback for each client
             */
            foreach(foreach_func: GLib.Func): void;
            /**
             * Removes a handler that was previously registered with [method`Server`.add_handler].
             * @param handler_id A handler returned from [method@Server.add_handler]
             */
            remove_handler(handler_id: number): void;
        }

        type ClientClass = typeof Client;
        type InputStreamClass = typeof InputStream;
        class MessageAny {
            static $gtype: GObject.GType<MessageAny>;

            // Fields

            magic: MessageMagic;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessageGetBoolean {
            static $gtype: GObject.GType<MessageGetBoolean>;

            // Fields

            magic: MessageMagic;
            valptr: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    valptr: boolean;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessageGetDict {
            static $gtype: GObject.GType<MessageGetDict>;

            // Fields

            magic: MessageMagic;

            // Constructors

            _init(...args: any[]): void;
        }

        class MessageGetDouble {
            static $gtype: GObject.GType<MessageGetDouble>;

            // Fields

            magic: MessageMagic;
            valptr: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    valptr: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessageGetInt32 {
            static $gtype: GObject.GType<MessageGetInt32>;

            // Fields

            magic: MessageMagic;
            valptr: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    valptr: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessageGetInt64 {
            static $gtype: GObject.GType<MessageGetInt64>;

            // Fields

            magic: MessageMagic;
            valptr: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    valptr: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessageGetIter {
            static $gtype: GObject.GType<MessageGetIter>;

            // Fields

            magic: MessageMagic;

            // Constructors

            _init(...args: any[]): void;
        }

        class MessageGetString {
            static $gtype: GObject.GType<MessageGetString>;

            // Fields

            magic: MessageMagic;
            valptr: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    valptr: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessageGetStrv {
            static $gtype: GObject.GType<MessageGetStrv>;

            // Fields

            magic: MessageMagic;
            valptr: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    valptr: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessageGetVariant {
            static $gtype: GObject.GType<MessageGetVariant>;

            // Fields

            magic: MessageMagic;

            // Constructors

            _init(...args: any[]): void;
        }

        class MessageMagic {
            static $gtype: GObject.GType<MessageMagic>;

            // Fields

            bytes: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    bytes: number[];
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessagePutBoolean {
            static $gtype: GObject.GType<MessagePutBoolean>;

            // Fields

            magic: MessageMagic;
            val: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    val: boolean;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessagePutDouble {
            static $gtype: GObject.GType<MessagePutDouble>;

            // Fields

            magic: MessageMagic;
            val: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    val: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessagePutInt32 {
            static $gtype: GObject.GType<MessagePutInt32>;

            // Fields

            magic: MessageMagic;
            val: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    val: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessagePutInt64 {
            static $gtype: GObject.GType<MessagePutInt64>;

            // Fields

            magic: MessageMagic;
            val: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    val: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessagePutString {
            static $gtype: GObject.GType<MessagePutString>;

            // Fields

            magic: MessageMagic;
            val: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    val: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessagePutStrv {
            static $gtype: GObject.GType<MessagePutStrv>;

            // Fields

            magic: MessageMagic;
            val: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    magic: MessageMagic;
                    val: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MessagePutVariant {
            static $gtype: GObject.GType<MessagePutVariant>;

            // Fields

            magic: MessageMagic;

            // Constructors

            _init(...args: any[]): void;
        }

        type OutputStreamClass = typeof OutputStream;
        type ServerClass = typeof Server;
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

    export default Jsonrpc;
}

declare module 'gi://Jsonrpc' {
    import Jsonrpc10 from 'gi://Jsonrpc?version=1.0';
    export default Jsonrpc10;
}
// END
