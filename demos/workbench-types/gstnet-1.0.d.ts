/// <reference path="./gst-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GstNet?version=1.0' {
    // Module dependencies
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';

    export namespace GstNet {
        /**
         * GstNet-1.0
         */

        /**
         * The size of the packets sent between network clocks.
         */
        const NET_TIME_PACKET_SIZE: number;
        /**
         * PTP clock identification that can be passed to gst_ptp_init() to
         * automatically select one based on the MAC address of interfaces
         */
        const PTP_CLOCK_ID_NONE: number;
        const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string;
        const PTP_STATISTICS_NEW_DOMAIN_FOUND: string;
        const PTP_STATISTICS_PATH_DELAY_MEASURED: string;
        const PTP_STATISTICS_TIME_UPDATED: string;
        /**
         * Attaches `addr` as metadata in a #GstNetAddressMeta to `buffer`.
         * @param buffer a #GstBuffer
         * @param addr a @GSocketAddress to connect to @buffer
         * @returns a #GstNetAddressMeta connected to @buffer
         */
        function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta;
        /**
         * Attaches `message` as metadata in a #GstNetControlMessageMeta to `buffer`.
         * @param buffer a #GstBuffer
         * @param message a @GSocketControlMessage to attach to @buffer
         * @returns a #GstNetControlMessageMeta connected to @buffer
         */
        function buffer_add_net_control_message_meta(
            buffer: Gst.Buffer,
            message: Gio.SocketControlMessage,
        ): NetControlMessageMeta;
        /**
         * Find the #GstNetAddressMeta on `buffer`.
         * @param buffer a #GstBuffer
         * @returns the #GstNetAddressMeta or %NULL when there is no such metadata on @buffer.
         */
        function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta | null;
        function net_address_meta_api_get_type(): GObject.GType;
        function net_address_meta_get_info(): Gst.MetaInfo;
        function net_control_message_meta_api_get_type(): GObject.GType;
        function net_control_message_meta_get_info(): Gst.MetaInfo;
        /**
         * Receives a #GstNetTimePacket over a socket. Handles interrupted system
         * calls, but otherwise returns NULL on error.
         * @param socket socket to receive the time packet on
         * @returns a new #GstNetTimePacket, or NULL on error. Free    with gst_net_time_packet_free() when done.
         */
        function net_time_packet_receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress | null];
        /**
         * Configures IP_TOS value of socket, i.e. sets QoS DSCP.
         * @param socket Socket to configure
         * @param qos_dscp QoS DSCP value
         * @returns TRUE if successful, FALSE in case an error occurred.
         */
        function net_utils_set_socket_tos(socket: Gio.Socket, qos_dscp: number): boolean;
        /**
         * Deinitialize the GStreamer PTP subsystem and stop the PTP clock. If there
         * are any remaining GstPtpClock instances, they won't be further synchronized
         * to the PTP network clock.
         */
        function ptp_deinit(): void;
        /**
         * Initialize the GStreamer PTP subsystem and create a PTP ordinary clock in
         * slave-only mode for all domains on the given `interfaces` with the
         * given `clock_id`.
         *
         * If `clock_id` is %GST_PTP_CLOCK_ID_NONE, a clock id is automatically
         * generated from the MAC address of the first network interface.
         *
         * This function is automatically called by gst_ptp_clock_new() with default
         * parameters if it wasn't called before.
         * @param clock_id PTP clock id of this process' clock or %GST_PTP_CLOCK_ID_NONE
         * @param interfaces network interfaces to run the clock on
         * @returns %TRUE if the GStreamer PTP clock subsystem could be initialized.
         */
        function ptp_init(clock_id: number, interfaces?: string[] | null): boolean;
        /**
         * Initialize the GStreamer PTP subsystem and create a PTP ordinary clock in
         * slave-only mode according to the `config`.
         *
         * `config` is a #GstStructure with the following optional fields:
         * * #guint64 `clock-id`: The clock ID to use for the local clock. If the
         *     clock-id is not provided or %GST_PTP_CLOCK_ID_NONE is provided, a clock
         *     id is automatically generated from the MAC address of the first network
         *     interface.
         * * #GStrv `interfaces`: The interface names to listen on for PTP packets. If
         *     none are provided then all compatible interfaces will be used.
         * * #guint `ttl`: The TTL to use for multicast packets sent out by GStreamer.
         *     This defaults to 1, i.e. packets will not leave the local network.
         *
         * This function is automatically called by gst_ptp_clock_new() with default
         * parameters if it wasn't called before.
         * @param config Configuration for initializing the GStreamer PTP subsystem
         * @returns %TRUE if the GStreamer PTP clock subsystem could be initialized.
         */
        function ptp_init_full(config: Gst.Structure): boolean;
        /**
         * Check if the GStreamer PTP clock subsystem is initialized.
         * @returns %TRUE if the GStreamer PTP clock subsystem is initialized.
         */
        function ptp_is_initialized(): boolean;
        /**
         * Check if PTP clocks are generally supported on this system, and if previous
         * initializations did not fail.
         * @returns %TRUE if PTP clocks are generally supported on this system, and previous initializations did not fail.
         */
        function ptp_is_supported(): boolean;
        /**
         * Installs a new statistics callback for gathering PTP statistics. See
         * GstPtpStatisticsCallback for a list of statistics that are provided.
         * @param callback GstPtpStatisticsCallback to call
         * @returns Id for the callback that can be passed to gst_ptp_statistics_callback_remove()
         */
        function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number;
        /**
         * Removes a PTP statistics callback that was previously added with
         * gst_ptp_statistics_callback_add().
         * @param id Callback id to remove
         */
        function ptp_statistics_callback_remove(id: number): void;
        interface PtpStatisticsCallback {
            (domain: number, stats: Gst.Structure): boolean;
        }
        module NetClientClock {
            // Constructor properties interface

            interface ConstructorProps extends Gst.SystemClock.ConstructorProps {
                address: string;
                base_time: number;
                baseTime: number;
                bus: Gst.Bus;
                internal_clock: Gst.Clock;
                internalClock: Gst.Clock;
                minimum_update_interval: number;
                minimumUpdateInterval: number;
                port: number;
                qos_dscp: number;
                qosDscp: number;
                round_trip_limit: number;
                roundTripLimit: number;
            }
        }

        /**
         * #GstNetClientClock implements a custom #GstClock that synchronizes its time
         * to a remote time provider such as #GstNetTimeProvider. #GstNtpClock
         * implements a #GstClock that synchronizes its time to a remote NTPv4 server.
         *
         * A new clock is created with gst_net_client_clock_new() or
         * gst_ntp_clock_new(), which takes the address and port of the remote time
         * provider along with a name and an initial time.
         *
         * This clock will poll the time provider and will update its calibration
         * parameters based on the local and remote observations.
         *
         * The "round-trip" property limits the maximum round trip packets can take.
         *
         * Various parameters of the clock can be configured with the parent #GstClock
         * "timeout", "window-size" and "window-threshold" object properties.
         *
         * A #GstNetClientClock and #GstNtpClock is typically set on a #GstPipeline with
         * gst_pipeline_use_clock().
         *
         * If you set a #GstBus on the clock via the "bus" object property, it will
         * send `GST_MESSAGE_ELEMENT` messages with an attached #GstStructure containing
         * statistics about clock accuracy and network traffic.
         */
        class NetClientClock extends Gst.SystemClock {
            static $gtype: GObject.GType<NetClientClock>;

            // Properties

            get address(): string;
            set address(val: string);
            get base_time(): number;
            get baseTime(): number;
            get bus(): Gst.Bus;
            set bus(val: Gst.Bus);
            get internal_clock(): Gst.Clock;
            get internalClock(): Gst.Clock;
            get minimum_update_interval(): number;
            set minimum_update_interval(val: number);
            get minimumUpdateInterval(): number;
            set minimumUpdateInterval(val: number);
            get port(): number;
            set port(val: number);
            get qos_dscp(): number;
            set qos_dscp(val: number);
            get qosDscp(): number;
            set qosDscp(val: number);
            get round_trip_limit(): number;
            set round_trip_limit(val: number);
            get roundTripLimit(): number;
            set roundTripLimit(val: number);

            // Fields

            clock: Gst.SystemClock;

            // Constructors

            constructor(properties?: Partial<NetClientClock.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                name: string | null,
                remote_address: string,
                remote_port: number,
                base_time: Gst.ClockTime,
            ): NetClientClock;
        }

        module NetTimeProvider {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                active: boolean;
                address: string;
                clock: Gst.Clock;
                port: number;
                qos_dscp: number;
                qosDscp: number;
            }
        }

        /**
         * This object exposes the time of a #GstClock on the network.
         *
         * A #GstNetTimeProvider is created with gst_net_time_provider_new() which
         * takes a #GstClock, an address and a port number as arguments.
         *
         * After creating the object, a client clock such as #GstNetClientClock can
         * query the exposed clock over the network for its values.
         *
         * The #GstNetTimeProvider typically wraps the clock used by a #GstPipeline.
         */
        class NetTimeProvider extends Gst.Object implements Gio.Initable {
            static $gtype: GObject.GType<NetTimeProvider>;

            // Properties

            get active(): boolean;
            set active(val: boolean);
            get address(): string;
            get clock(): Gst.Clock;
            get port(): number;
            get qos_dscp(): number;
            set qos_dscp(val: number);
            get qosDscp(): number;
            set qosDscp(val: number);

            // Constructors

            constructor(properties?: Partial<NetTimeProvider.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](clock: Gst.Clock, address: string | null, port: number): NetTimeProvider;

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
            // Conflicted with Gst.Object.ref
            ref(...args: never[]): any;
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

        module NtpClock {
            // Constructor properties interface

            interface ConstructorProps extends NetClientClock.ConstructorProps {}
        }

        class NtpClock extends NetClientClock {
            static $gtype: GObject.GType<NtpClock>;

            // Fields

            clock: Gst.SystemClock;

            // Constructors

            constructor(properties?: Partial<NtpClock.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                name: string | null,
                remote_address: string,
                remote_port: number,
                base_time: Gst.ClockTime,
            ): NtpClock;
        }

        module PtpClock {
            // Constructor properties interface

            interface ConstructorProps extends Gst.SystemClock.ConstructorProps {
                domain: number;
                grandmaster_clock_id: number;
                grandmasterClockId: number;
                internal_clock: Gst.Clock;
                internalClock: Gst.Clock;
                master_clock_id: number;
                masterClockId: number;
            }
        }

        /**
         * GstPtpClock implements a PTP (IEEE1588:2008) ordinary clock in slave-only
         * mode, that allows a GStreamer pipeline to synchronize to a PTP network
         * clock in some specific domain.
         *
         * The PTP subsystem can be initialized with gst_ptp_init(), which then starts
         * a helper process to do the actual communication via the PTP ports. This is
         * required as PTP listens on ports < 1024 and thus requires special
         * privileges. Once this helper process is started, the main process will
         * synchronize to all PTP domains that are detected on the selected
         * interfaces.
         *
         * gst_ptp_clock_new() then allows to create a GstClock that provides the PTP
         * time from a master clock inside a specific PTP domain. This clock will only
         * return valid timestamps once the timestamps in the PTP domain are known. To
         * check this, you can use gst_clock_wait_for_sync(), the GstClock::synced
         * signal and gst_clock_is_synced().
         *
         * To gather statistics about the PTP clock synchronization,
         * gst_ptp_statistics_callback_add() can be used. This gives the application
         * the possibility to collect all kinds of statistics from the clock
         * synchronization.
         */
        class PtpClock extends Gst.SystemClock {
            static $gtype: GObject.GType<PtpClock>;

            // Properties

            get domain(): number;
            get grandmaster_clock_id(): number;
            get grandmasterClockId(): number;
            get internal_clock(): Gst.Clock;
            get internalClock(): Gst.Clock;
            get master_clock_id(): number;
            get masterClockId(): number;

            // Fields

            clock: Gst.SystemClock;

            // Constructors

            constructor(properties?: Partial<PtpClock.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, domain: number): PtpClock;
        }

        /**
         * #GstNetAddressMeta can be used to store a network address (a #GSocketAddress)
         * in a #GstBuffer so that it network elements can track the to and from address
         * of the buffer.
         */
        class NetAddressMeta {
            static $gtype: GObject.GType<NetAddressMeta>;

            // Fields

            addr: Gio.SocketAddress;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        type NetClientClockClass = typeof NetClientClock;
        abstract class NetClientClockPrivate {
            static $gtype: GObject.GType<NetClientClockPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * #GstNetControlMessageMeta can be used to store control messages (ancillary
         * data) which was received with or is to be sent alongside the buffer data.
         * When used with socket sinks and sources which understand this meta it allows
         * sending and receiving ancillary data such as unix credentials (See
         * #GUnixCredentialsMessage) and Unix file descriptions (See #GUnixFDMessage).
         */
        class NetControlMessageMeta {
            static $gtype: GObject.GType<NetControlMessageMeta>;

            // Fields

            message: Gio.SocketControlMessage;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        /**
         * Various functions for receiving, sending an serializing #GstNetTimePacket
         * structures.
         */
        class NetTimePacket {
            static $gtype: GObject.GType<NetTimePacket>;

            // Fields

            local_time: Gst.ClockTime;
            remote_time: Gst.ClockTime;

            // Constructors

            constructor(
                properties?: Partial<{
                    local_time: Gst.ClockTime;
                    remote_time: Gst.ClockTime;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](buffer?: Uint8Array | null): NetTimePacket;

            // Static methods

            /**
             * Receives a #GstNetTimePacket over a socket. Handles interrupted system
             * calls, but otherwise returns NULL on error.
             * @param socket socket to receive the time packet on
             */
            static receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress | null];

            // Methods

            /**
             * Make a copy of `packet`.
             * @returns a copy of @packet, free with gst_net_time_packet_free().
             */
            copy(): NetTimePacket;
            /**
             * Free `packet`.
             */
            free(): void;
            /**
             * Sends a #GstNetTimePacket over a socket.
             *
             * MT safe.
             * @param socket socket to send the time packet on
             * @param dest_address address to send the time packet to
             * @returns TRUE if successful, FALSE in case an error occurred.
             */
            send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean;
            /**
             * Serialized a #GstNetTimePacket into a newly-allocated sequence of
             * #GST_NET_TIME_PACKET_SIZE bytes, in network byte order. The value returned is
             * suitable for passing to write(2) or sendto(2) for communication over the
             * network.
             *
             * MT safe. Caller owns return value (g_free to free).
             * @returns A newly allocated sequence of #GST_NET_TIME_PACKET_SIZE bytes.
             */
            serialize(): Uint8Array;
        }

        type NetTimeProviderClass = typeof NetTimeProvider;
        abstract class NetTimeProviderPrivate {
            static $gtype: GObject.GType<NetTimeProviderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type NtpClockClass = typeof NtpClock;
        type PtpClockClass = typeof PtpClock;
        abstract class PtpClockPrivate {
            static $gtype: GObject.GType<PtpClockPrivate>;

            // Constructors

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

    export default GstNet;
}

declare module 'gi://GstNet' {
    import GstNet10 from 'gi://GstNet?version=1.0';
    export default GstNet10;
}
// END
