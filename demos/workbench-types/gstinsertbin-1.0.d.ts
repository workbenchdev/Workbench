/// <reference path="./gst-1.0.d.ts" />
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

declare module 'gi://GstInsertBin?version=1.0' {
    // Module dependencies
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstInsertBin {
        /**
         * GstInsertBin-1.0
         */

        interface InsertBinCallback {
            (insertbin: InsertBin, element: Gst.Element, success: boolean): void;
        }
        module InsertBin {
            // Signal callback interfaces

            interface Append {
                (callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
            }

            interface InsertAfter {
                (sibling: Gst.Element, callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
            }

            interface InsertBefore {
                (sibling: Gst.Element, callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
            }

            interface Prepend {
                (callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
            }

            interface Remove {
                (callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Bin.ConstructorProps, Gst.ChildProxy.ConstructorProps {}
        }

        /**
         * This element is a #GstBin that has a single source and sink pad. It allows
         * the user (the application) to easily add and remove filter-like element
         * (that has a single source and sink pad), to the pipeline while it is running.
         * It features a fully asynchronous API inspired by GLib's GAsyncResult based
         * APIs.
         *
         * Each operation (addition or removal) can take a callback, this callback
         * is guaranteed to be called. Unlike GIO, there is no guarantee about where
         * this callback will be called from, it could be called before the action
         * returns or it could be called later from another thread. The signature of
         * this callback GstInsertBinCallback().
         *
         * Apart from the library API, since 1.24 insertbin can also be found in the
         * registry:
         *
         * ``` C
         *   GstElement *pipeline, *insertbin, *videoflip;
         *
         *   gst_init (NULL, NULL);
         *   pipeline =
         *       gst_parse_launch ("videotestsrc ! insertbin name=i ! autovideosink",
         *       NULL);
         *
         *   ...
         *
         *   insertbin = gst_bin_get_by_name (GST_BIN (pipeline), "i");
         *   videoflip = gst_element_factory_make ("videoflip", NULL);
         *
         *   ...
         *
         *   g_object_set (videoflip, "method", 1, NULL);
         *   g_signal_emit_by_name (insertbin, "append", videoflip, NULL, NULL);
         *
         *   ...
         * ```
         */
        class InsertBin extends Gst.Bin implements Gst.ChildProxy {
            static $gtype: GObject.GType<InsertBin>;

            // Constructors

            constructor(properties?: Partial<InsertBin.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name?: string | null): InsertBin;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'append',
                callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void,
            ): number;
            connect_after(
                signal: 'append',
                callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void,
            ): number;
            emit(signal: 'append', callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
            connect(
                signal: 'insert-after',
                callback: (
                    _source: this,
                    sibling: Gst.Element,
                    callback: Gst.Element,
                    user_data: any | null,
                    user_data2: any | null,
                ) => void,
            ): number;
            connect_after(
                signal: 'insert-after',
                callback: (
                    _source: this,
                    sibling: Gst.Element,
                    callback: Gst.Element,
                    user_data: any | null,
                    user_data2: any | null,
                ) => void,
            ): number;
            emit(
                signal: 'insert-after',
                sibling: Gst.Element,
                callback: Gst.Element,
                user_data?: any | null,
                user_data2?: any | null,
            ): void;
            connect(
                signal: 'insert-before',
                callback: (
                    _source: this,
                    sibling: Gst.Element,
                    callback: Gst.Element,
                    user_data: any | null,
                    user_data2: any | null,
                ) => void,
            ): number;
            connect_after(
                signal: 'insert-before',
                callback: (
                    _source: this,
                    sibling: Gst.Element,
                    callback: Gst.Element,
                    user_data: any | null,
                    user_data2: any | null,
                ) => void,
            ): number;
            emit(
                signal: 'insert-before',
                sibling: Gst.Element,
                callback: Gst.Element,
                user_data?: any | null,
                user_data2?: any | null,
            ): void;
            connect(
                signal: 'prepend',
                callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void,
            ): number;
            connect_after(
                signal: 'prepend',
                callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void,
            ): number;
            emit(signal: 'prepend', callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;
            connect(
                signal: 'remove',
                callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void,
            ): number;
            connect_after(
                signal: 'remove',
                callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void,
            ): number;
            emit(signal: 'remove', callback: Gst.Element, user_data?: any | null, user_data2?: any | null): void;

            // Methods

            /**
             * This action signal adds the filter like element after any other element
             * in the bin.
             *
             * Same as the #GstInsertBin::append signal.
             * @param element the #GstElement to add
             * @param callback the callback to call when the element has been  added or not, or %NULL
             */
            append(element: Gst.Element, callback: InsertBinCallback): void;
            /**
             * This action signal adds the filter like element after the `sibling`
             * element in the bin.
             *
             * Same as the #GstInsertBin::insert-after signal.
             * @param element the #GstElement to add
             * @param sibling the #GstElement to add @element after
             * @param callback the callback to call when the element has been  added or not, or %NULL
             */
            insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
            /**
             * This action signal adds the filter like element before the `sibling`
             * element in the bin.
             *
             * Same as the #GstInsertBin::insert-before signal.
             * @param element the #GstElement to add
             * @param sibling the #GstElement to add @element before
             * @param callback the callback to call when the element has been  added or not, or %NULL
             */
            insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
            /**
             * This action signal adds the filter like element before any other element
             * in the bin.
             *
             * Same as the #GstInsertBin::prepend signal.
             * @param element the #GstElement to add
             * @param callback the callback to call when the element has been  added or not, or %NULL
             */
            prepend(element: Gst.Element, callback: InsertBinCallback): void;
            /**
             * This action signal removed the filter like element from the bin.
             *
             * Same as the #GstInsertBin::remove signal.
             * @param element the #GstElement to remove
             * @param callback the callback to call when the element has been  removed or not, or %NULL
             */
            remove(element: Gst.Element, callback: InsertBinCallback): void;
            // Conflicted with Gst.Bin.remove
            remove(...args: never[]): any;

            // Inherited methods
            /**
             * Emits the #GstChildProxy::child-added signal.
             * @param child the newly added child
             * @param name the name of the new child
             */
            child_added(child: GObject.Object, name: string): void;
            /**
             * Emits the #GstChildProxy::child-removed signal.
             * @param child the removed child
             * @param name the name of the old child
             */
            child_removed(child: GObject.Object, name: string): void;
            /**
             * Fetches a child by its number.
             * @param index the child's position in the child list
             * @returns the child object or %NULL if     not found (index too high).
             */
            get_child_by_index<T = GObject.Object>(index: number): T;
            /**
             * Looks up a child element by the given name.
             *
             * This virtual method has a default implementation that uses #GstObject
             * together with gst_object_get_name(). If the interface is to be used with
             * #GObjects, this methods needs to be overridden.
             * @param name the child's name
             * @returns the child object or %NULL if     not found.
             */
            get_child_by_name<T = GObject.Object>(name: string): T;
            /**
             * Looks up a child element by the given full-path name.
             *
             * Similar to gst_child_proxy_get_child_by_name(), this method
             * searches and returns a child given a name. The difference is that
             * this method allows a hierarchical path in the form of
             * child1::child2::child3. In the later example this method would
             * return a reference to child3, if found. The name should be made of
             * element names only and should not contain any property names.
             * @param name the full-path child's name
             * @returns the child object or %NULL if     not found.
             */
            get_child_by_name_recurse<T = GObject.Object>(name: string): T;
            /**
             * Gets the number of child objects this parent contains.
             * @returns the number of child objects
             */
            get_children_count(): number;
            /**
             * Gets a single property using the GstChildProxy mechanism.
             * You are responsible for freeing it by calling g_value_unset()
             * @param name name of the property
             */
            get_property(name: string): unknown;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Looks up which object and #GParamSpec would be effected by the given `name`.
             * @param name name of the property to look up
             * @returns %TRUE if @target and @pspec could be found. %FALSE otherwise. In that case the values for @pspec and @target are not modified. Unref @target after usage. For plain #GObject @target is the same as @object.
             */
            lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
            /**
             * Sets a single property using the GstChildProxy mechanism.
             * @param name name of the property to set
             * @param value new #GValue for the property
             */
            set_property(name: string, value: GObject.Value | any): void;
            // Conflicted with GObject.Object.set_property
            set_property(...args: never[]): any;
            /**
             * Emits the #GstChildProxy::child-added signal.
             * @param child the newly added child
             * @param name the name of the new child
             */
            vfunc_child_added(child: GObject.Object, name: string): void;
            /**
             * Emits the #GstChildProxy::child-removed signal.
             * @param child the removed child
             * @param name the name of the old child
             */
            vfunc_child_removed(child: GObject.Object, name: string): void;
            /**
             * Fetches a child by its number.
             * @param index the child's position in the child list
             */
            vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
            /**
             * Looks up a child element by the given name.
             *
             * This virtual method has a default implementation that uses #GstObject
             * together with gst_object_get_name(). If the interface is to be used with
             * #GObjects, this methods needs to be overridden.
             * @param name the child's name
             */
            vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
            /**
             * Gets the number of child objects this parent contains.
             */
            vfunc_get_children_count(): number;
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

        type InsertBinClass = typeof InsertBin;
        abstract class InsertBinPrivate {
            static $gtype: GObject.GType<InsertBinPrivate>;

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

    export default GstInsertBin;
}

declare module 'gi://GstInsertBin' {
    import GstInsertBin10 from 'gi://GstInsertBin?version=1.0';
    export default GstInsertBin10;
}
// END
