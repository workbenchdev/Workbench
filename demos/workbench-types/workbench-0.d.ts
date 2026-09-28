/// <reference path="./gtksource-5.d.ts" />
/// <reference path="./gtk-4.0.d.ts" />
/// <reference path="./gsk-4.0.d.ts" />
/// <reference path="./graphene-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Workbench?version=0' {
    // Module dependencies
    import type GtkSource from 'gi://GtkSource?version=5';
    import type Gtk from 'gi://Gtk?version=4.0';
    import type Gsk from 'gi://Gsk?version=4.0';
    import type Graphene from 'gi://Graphene?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace Workbench {
        /**
         * Workbench-0
         */

        /**
         * Enumeration of request states.
         */

        /**
         * Enumeration of request states.
         */
        export namespace RequestState {
            export const $gtype: GObject.GType<RequestState>;
        }

        enum RequestState {
            /**
             * the request state is unknown
             */
            UNKNOWN,
            /**
             * the request was cancelled
             */
            CANCELLED,
            /**
             * the request is complete
             */
            COMPLETE,
        }
        module CompletionProvider {
            // Signal callback interfaces

            interface CompletionRequest {
                (request: CompletionRequest): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    GtkSource.CompletionProvider.ConstructorProps {}
        }

        /**
         * A base class for completion providers in Workbench.
         */
        class CompletionProvider extends GObject.Object implements GtkSource.CompletionProvider {
            static $gtype: GObject.GType<CompletionProvider>;

            // Constructors

            constructor(properties?: Partial<CompletionProvider.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'completion-request',
                callback: (_source: this, request: CompletionRequest) => void,
            ): number;
            connect_after(
                signal: 'completion-request',
                callback: (_source: this, request: CompletionRequest) => void,
            ): number;
            emit(signal: 'completion-request', request: CompletionRequest): void;

            // Virtual methods

            /**
             * the class closure for #WorkbenchCompletionProvider::completion-request
             * @param request
             */
            vfunc_completion_request(request: CompletionRequest): void;

            // Inherited methods
            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            activate(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            display(
                context: GtkSource.CompletionContext,
                proposal: GtkSource.CompletionProposal,
                cell: GtkSource.CompletionCell,
            ): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            get_priority(context: GtkSource.CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             * @returns a title for the provider or %NULL
             */
            get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            key_activates(
                context: GtkSource.CompletionContext,
                proposal: GtkSource.CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @returns a #GPtrArray of #GtkSourceCompletionProposal or %NULL.
             */
            list_alternates(
                context: GtkSource.CompletionContext,
                proposal: GtkSource.CompletionProposal,
            ): GtkSource.CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            populate_async(
                context: GtkSource.CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             * @returns a #GListModel of #GtkSourceCompletionProposal
             */
            populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            refilter(context: GtkSource.CompletionContext, model: Gio.ListModel): void;
            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_activate(context: GtkSource.CompletionContext, proposal: GtkSource.CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            vfunc_display(
                context: GtkSource.CompletionContext,
                proposal: GtkSource.CompletionProposal,
                cell: GtkSource.CompletionCell,
            ): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            vfunc_get_priority(context: GtkSource.CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             */
            vfunc_get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            vfunc_key_activates(
                context: GtkSource.CompletionContext,
                proposal: GtkSource.CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_list_alternates(
                context: GtkSource.CompletionContext,
                proposal: GtkSource.CompletionProposal,
            ): GtkSource.CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            vfunc_populate_async(
                context: GtkSource.CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             */
            vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            vfunc_refilter(context: GtkSource.CompletionContext, model: Gio.ListModel): void;
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

        module CompletionRequest {
            // Constructor properties interface

            interface ConstructorProps<A extends GObject.Object = GObject.Object>
                extends GObject.Object.ConstructorProps,
                    Gio.ListModel.ConstructorProps {
                cancellable: Gio.Cancellable;
                context: GtkSource.CompletionContext;
                item_type: GObject.GType;
                itemType: GObject.GType;
                n_items: number;
                nItems: number;
                provider: GtkSource.CompletionProvider;
                state: RequestState;
            }
        }

        /**
         * A helper object for [iface`GtkSource`.CompletionProvider].
         *
         * A `WorkbenchCompletionRequest` instance represents an asynchronous request
         * for completion suggestions. Specifically, it is an object that can be used
         * to implement [vfunc`GtkSource`.CompletionProvider.populate_async] with more
         * flexibility for introspected languages.
         *
         * Requests are created to populate completion proposals for emissions of
         * [signal`Workbench`.CompletionProvider::completion-request]. Handlers should
         * call [method`Workbench`.CompletionRequest.add] and
         * [method`Workbench`.CompletionRequest.splice] to compose the response, then
         * set [property`Workbench`.CompletionRequest:complete] to %TRUE.
         */
        class CompletionRequest<A extends GObject.Object = GObject.Object>
            extends GObject.Object
            implements Gio.ListModel<A>
        {
            static $gtype: GObject.GType<CompletionRequest>;

            // Properties

            get cancellable(): Gio.Cancellable;
            /**
             * The [class`GtkSource`.CompletionContext] of the request.
             */
            get context(): GtkSource.CompletionContext;
            /**
             * The [class`GtkSource`.CompletionProposal] type.
             */
            get item_type(): GObject.GType;
            /**
             * The [class`GtkSource`.CompletionProposal] type.
             */
            get itemType(): GObject.GType;
            /**
             * The current number of proposals.
             */
            get n_items(): number;
            /**
             * The current number of proposals.
             */
            get nItems(): number;
            /**
             * The [iface`GtkSource`.CompletionProvider] of the request.
             */
            get provider(): GtkSource.CompletionProvider;
            /**
             * The state of the request.
             *
             * Handlers of the request should update the state of the request by calling
             * [method`Workbench`.CompletionRequest.state_changed].
             *
             * If a handler does not change the state, the value is guaranteed to change
             * to `WORKBENCH_REQUEST_STATE_CANCELLED` before finalization.
             */
            get state(): RequestState;

            // Constructors

            constructor(properties?: Partial<CompletionRequest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Add a [class`GObject`.Object] to `request`.
             * @param proposal a `GtkSourceCompletionProposal`
             */
            add(proposal: GtkSource.CompletionProposal): void;
            /**
             * Get the cancellable for the request.
             * @returns a `GCancellable`
             */
            get_cancellable(): Gio.Cancellable | null;
            /**
             * Get the completion context for the request.
             * @returns a `GtkSourceCompletionContext`
             */
            get_context(): GtkSource.CompletionContext | null;
            /**
             * Get the completion provider for the request.
             * @returns a `GtkSourceCompletionProvider`
             */
            get_provider(): GtkSource.CompletionProvider | null;
            /**
             * Get the state of the request.
             * @returns a `WorkbenchRequestState`
             */
            get_state(): RequestState;
            /**
             * Changes `request` by removing `n_removals` items and adding `n_additions`.
             *
             * The combined value of `position` and `n_removals` must be less than or equal
             * to the length of the list at the time this function is called.
             * @param position the position at which to make the change
             * @param n_removals the number of items to remove
             * @param additions the items to add
             */
            splice(position: number, n_removals: number, additions: GtkSource.CompletionProposal[]): void;
            /**
             * Update the state of the request.
             *
             * If `state` is `WORKBENCH_REQUEST_STATE_CANCELLED`, this will also call
             * [method`Gio`.Cancellable.cancel] on the request's cancellable object.
             * @param state a `WorkbenchRequestState`
             */
            state_changed(state: RequestState): void;

            // Inherited methods
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             * @returns the #GType of the items contained in @list.
             */
            get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             * @returns the number of items in @list.
             */
            get_n_items(): number;
            /**
             * Get the item at `position`.
             *
             * If `position` is greater than the number of items in `list,` %NULL is
             * returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.
             *
             * This function is meant to be used by language bindings in place
             * of g_list_model_get_item().
             *
             * See also: g_list_model_get_n_items()
             * @param position the position of the item to fetch
             * @returns the object at @position.
             */
            get_item(position: number): A | null;
            /**
             * Emits the #GListModel::items-changed signal on `list`.
             *
             * This function should only be called by classes implementing
             * #GListModel. It has to be called after the internal representation
             * of `list` has been updated, because handlers connected to this signal
             * might query the new state of the list.
             *
             * Implementations must only make changes to the model (as visible to
             * its consumer) in places that will not cause problems for that
             * consumer.  For models that are driven directly by a write API (such
             * as #GListStore), changes can be reported in response to uses of that
             * API.  For models that represent remote data, changes should only be
             * made from a fresh mainloop dispatch.  It is particularly not
             * permitted to make changes in response to a call to the #GListModel
             * consumer API.
             *
             * Stated another way: in general, it is assumed that code making a
             * series of accesses to the model via the API, without returning to the
             * mainloop, and without calling other code, will continue to view the
             * same contents of the model.
             * @param position the position at which @list changed
             * @param removed the number of items removed
             * @param added the number of items added
             */
            items_changed(position: number, removed: number, added: number): void;
            /**
             * Get the item at `position`. If `position` is greater than the number of
             * items in `list,` %NULL is returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.  See g_list_model_get_n_items().
             *
             * The same #GObject instance may not appear more than once in a #GListModel.
             * @param position the position of the item to fetch
             */
            vfunc_get_item(position: number): A | null;
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             */
            vfunc_get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             */
            vfunc_get_n_items(): number;
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

        module PreviewWindow {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Window.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    Gtk.Native.ConstructorProps,
                    Gtk.Root.ConstructorProps,
                    Gtk.ShortcutManager.ConstructorProps {}
        }

        class PreviewWindow
            extends Gtk.Window
            implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager
        {
            static $gtype: GObject.GType<PreviewWindow>;

            // Constructors

            constructor(properties?: Partial<PreviewWindow.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): PreviewWindow;

            // Methods

            get_content(): Gtk.Widget;
            set_content(content: Gtk.Widget): void;

            // Inherited properties
            /**
             * Whether the widget or any of its descendents can accept
             * the input focus.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get can_focus(): boolean;
            set can_focus(val: boolean);
            /**
             * Whether the widget or any of its descendents can accept
             * the input focus.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get canFocus(): boolean;
            set canFocus(val: boolean);
            /**
             * Whether the widget can receive pointer events.
             */
            get can_target(): boolean;
            set can_target(val: boolean);
            /**
             * Whether the widget can receive pointer events.
             */
            get canTarget(): boolean;
            set canTarget(val: boolean);
            /**
             * A list of css classes applied to this widget.
             */
            get css_classes(): string[];
            set css_classes(val: string[]);
            /**
             * A list of css classes applied to this widget.
             */
            get cssClasses(): string[];
            set cssClasses(val: string[]);
            /**
             * The name of this widget in the CSS tree.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get css_name(): string;
            /**
             * The name of this widget in the CSS tree.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get cssName(): string;
            /**
             * The cursor used by `widget`.
             */
            get cursor(): Gdk.Cursor;
            set cursor(val: Gdk.Cursor);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             */
            get focus_on_click(): boolean;
            set focus_on_click(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             */
            get focusOnClick(): boolean;
            set focusOnClick(val: boolean);
            /**
             * Whether this widget itself will accept the input focus.
             */
            get focusable(): boolean;
            set focusable(val: boolean);
            /**
             * How to distribute horizontal space if widget gets extra space.
             */
            get halign(): Gtk.Align;
            set halign(val: Gtk.Align);
            /**
             * Whether the widget is the default widget.
             */
            get has_default(): boolean;
            /**
             * Whether the widget is the default widget.
             */
            get hasDefault(): boolean;
            /**
             * Whether the widget has the input focus.
             */
            get has_focus(): boolean;
            /**
             * Whether the widget has the input focus.
             */
            get hasFocus(): boolean;
            /**
             * Enables or disables the emission of the ::query-tooltip signal on `widget`.
             *
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
             * determine whether it will provide a tooltip or not.
             */
            get has_tooltip(): boolean;
            set has_tooltip(val: boolean);
            /**
             * Enables or disables the emission of the ::query-tooltip signal on `widget`.
             *
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
             * determine whether it will provide a tooltip or not.
             */
            get hasTooltip(): boolean;
            set hasTooltip(val: boolean);
            /**
             * Override for height request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get height_request(): number;
            set height_request(val: number);
            /**
             * Override for height request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get heightRequest(): number;
            set heightRequest(val: number);
            /**
             * Whether to expand horizontally.
             */
            get hexpand(): boolean;
            set hexpand(val: boolean);
            /**
             * Whether to use the `hexpand` property.
             */
            get hexpand_set(): boolean;
            set hexpand_set(val: boolean);
            /**
             * Whether to use the `hexpand` property.
             */
            get hexpandSet(): boolean;
            set hexpandSet(val: boolean);
            /**
             * The `GtkLayoutManager` instance to use to compute the preferred size
             * of the widget, and allocate its children.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get layout_manager(): Gtk.LayoutManager;
            set layout_manager(val: Gtk.LayoutManager);
            /**
             * The `GtkLayoutManager` instance to use to compute the preferred size
             * of the widget, and allocate its children.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get layoutManager(): Gtk.LayoutManager;
            set layoutManager(val: Gtk.LayoutManager);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_bottom(): number;
            set margin_bottom(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginBottom(): number;
            set marginBottom(val: number);
            /**
             * Margin on end of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_end(): number;
            set margin_end(val: number);
            /**
             * Margin on end of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginEnd(): number;
            set marginEnd(val: number);
            /**
             * Margin on start of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_start(): number;
            set margin_start(val: number);
            /**
             * Margin on start of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginStart(): number;
            set marginStart(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_top(): number;
            set margin_top(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginTop(): number;
            set marginTop(val: number);
            /**
             * The name of the widget.
             */
            get name(): string;
            set name(val: string);
            /**
             * The requested opacity of the widget.
             */
            get opacity(): number;
            set opacity(val: number);
            /**
             * How content outside the widget's content area is treated.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get overflow(): Gtk.Overflow;
            set overflow(val: Gtk.Overflow);
            /**
             * The parent widget of this widget.
             */
            get parent(): Gtk.Widget;
            /**
             * Whether the widget will receive the default action when it is focused.
             */
            get receives_default(): boolean;
            set receives_default(val: boolean);
            /**
             * Whether the widget will receive the default action when it is focused.
             */
            get receivesDefault(): boolean;
            set receivesDefault(val: boolean);
            /**
             * The `GtkRoot` widget of the widget tree containing this widget.
             *
             * This will be %NULL if the widget is not contained in a root widget.
             */
            get root(): Gtk.Root;
            /**
             * The scale factor of the widget.
             */
            get scale_factor(): number;
            /**
             * The scale factor of the widget.
             */
            get scaleFactor(): number;
            /**
             * Whether the widget responds to input.
             */
            get sensitive(): boolean;
            set sensitive(val: boolean);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with Pango markup.
             *
             * Also see [method`Gtk`.Tooltip.set_markup].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltip_markup(): string;
            set tooltip_markup(val: string);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with Pango markup.
             *
             * Also see [method`Gtk`.Tooltip.set_markup].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltipMarkup(): string;
            set tooltipMarkup(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see [method`Gtk`.Tooltip.set_text].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltip_text(): string;
            set tooltip_text(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see [method`Gtk`.Tooltip.set_text].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltipText(): string;
            set tooltipText(val: string);
            /**
             * How to distribute vertical space if widget gets extra space.
             */
            get valign(): Gtk.Align;
            set valign(val: Gtk.Align);
            /**
             * Whether to expand vertically.
             */
            get vexpand(): boolean;
            set vexpand(val: boolean);
            /**
             * Whether to use the `vexpand` property.
             */
            get vexpand_set(): boolean;
            set vexpand_set(val: boolean);
            /**
             * Whether to use the `vexpand` property.
             */
            get vexpandSet(): boolean;
            set vexpandSet(val: boolean);
            /**
             * Whether the widget is visible.
             */
            get visible(): boolean;
            set visible(val: boolean);
            /**
             * Override for width request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get width_request(): number;
            set width_request(val: number);
            /**
             * Override for width request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get widthRequest(): number;
            set widthRequest(val: number);

            // Inherited methods
            /**
             * Returns the renderer that is used for this `GtkNative`.
             * @returns the renderer for @self
             */
            get_renderer(): Gsk.Renderer | null;
            /**
             * Returns the surface of this `GtkNative`.
             * @returns the surface of @self
             */
            get_surface(): Gdk.Surface | null;
            /**
             * Retrieves the surface transform of `self`.
             *
             * This is the translation from `self'`s surface coordinates into
             * `self'`s widget coordinates.
             */
            get_surface_transform(): [number, number];
            /**
             * Realizes a `GtkNative`.
             *
             * This should only be used by subclasses.
             */
            realize(): void;
            /**
             * Unrealizes a `GtkNative`.
             *
             * This should only be used by subclasses.
             */
            unrealize(): void;
            /**
             * Returns the display that this `GtkRoot` is on.
             * @returns the display of @root
             */
            get_display(): Gdk.Display;
            /**
             * Retrieves the current focused widget within the root.
             *
             * Note that this is the widget that would have the focus
             * if the root is active; if the root is not focused then
             * `gtk_widget_has_focus (widget)` will be %FALSE for the
             * widget.
             * @returns the currently focused widget
             */
            get_focus(): Gtk.Widget | null;
            /**
             * If `focus` is not the current focus widget, and is focusable, sets
             * it as the focus widget for the root.
             *
             * If `focus` is %NULL, unsets the focus widget for the root.
             *
             * To set the focus to a particular widget in the root, it is usually
             * more convenient to use [method`Gtk`.Widget.grab_focus] instead of
             * this function.
             * @param focus widget to be the new focus widget, or %NULL    to unset the focus widget
             */
            set_focus(focus?: Gtk.Widget | null): void;
            /**
             * Add a `GtkShortcutController` to be managed.
             * @param controller
             */
            vfunc_add_controller(controller: Gtk.ShortcutController): void;
            /**
             * Remove a `GtkShortcutController` that had previously
             *   been added
             * @param controller
             */
            vfunc_remove_controller(controller: Gtk.ShortcutController): void;
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
            /**
             * Enable or disable an action installed with
             * gtk_widget_class_install_action().
             * @param action_name action name, such as "clipboard.paste"
             * @param enabled whether the action is now enabled
             */
            action_set_enabled(action_name: string, enabled: boolean): void;
            /**
             * For widgets that can be “activated” (buttons, menu items, etc.),
             * this function activates them.
             *
             * The activation will emit the signal set using
             * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
             *
             * Activation is what happens when you press <kbd>Enter</kbd>
             * on a widget during key navigation.
             *
             * If you wish to handle the activation keybinding yourself, it is
             * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
             * created with [ctor`Gtk`.SignalAction.new].
             *
             * If `widget` isn't activatable, the function returns %FALSE.
             * @returns %TRUE if the widget was activatable
             */
            activate(): boolean;
            /**
             * Looks up the action in the action groups associated with
             * `widget` and its ancestors, and activates it.
             *
             * If the action is in an action group added with
             * [method`Gtk`.Widget.insert_action_group], the `name` is expected
             * to be prefixed with the prefix that was used when the group was
             * inserted.
             *
             * The arguments must match the actions expected parameter type,
             * as returned by `g_action_get_parameter_type()`.
             * @param name the name of the action to activate
             * @param args parameters to use
             * @returns %TRUE if the action was activated, %FALSE if the   action does not exist.
             */
            activate_action(name: string, args?: GLib.Variant | null): boolean;
            /**
             * Activates the `default.activate` action from `widget`.
             */
            activate_default(): void;
            /**
             * Adds `controller` to `widget` so that it will receive events.
             *
             * You will usually want to call this function right after
             * creating any kind of [class`Gtk`.EventController].
             * @param controller a `GtkEventController` that hasn't been   added to a widget yet
             */
            add_controller(controller: Gtk.EventController): void;
            /**
             * Adds a style class to `widget`.
             *
             * After calling this function, the widget’s style will match
             * for `css_class,` according to CSS matching rules.
             *
             * Use [method`Gtk`.Widget.remove_css_class] to remove the
             * style again.
             * @param css_class The style class to add to @widget, without   the leading '.' used for notation of style classes
             */
            add_css_class(css_class: string): void;
            /**
             * Adds a widget to the list of mnemonic labels for this widget.
             *
             * See [method`Gtk`.Widget.list_mnemonic_labels]. Note the
             * list of mnemonic labels for the widget is cleared when the
             * widget is destroyed, so the caller must make sure to update
             * its internal state at this point as well.
             * @param label a `GtkWidget` that acts as a mnemonic label for @widget
             */
            add_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Queues an animation frame update and adds a callback to be called
             * before each frame.
             *
             * Until the tick callback is removed, it will be called frequently
             * (usually at the frame rate of the output device or as quickly as
             * the application can be repainted, whichever is slower). For this
             * reason, is most suitable for handling graphics that change every
             * frame or every few frames. The tick callback does not automatically
             * imply a relayout or repaint. If you want a repaint or relayout, and
             * aren’t changing widget properties that would trigger that (for example,
             * changing the text of a `GtkLabel`), then you will have to call
             * [method`Gtk`.Widget.queue_resize] or [method`Gtk`.Widget.queue_draw]
             * yourself.
             *
             * [method`Gdk`.FrameClock.get_frame_time] should generally be used
             * for timing continuous animations and
             * [method`Gdk`.FrameTimings.get_predicted_presentation_time] if you are
             * trying to display isolated frames at particular times.
             *
             * This is a more convenient alternative to connecting directly to the
             * [signal`Gdk`.FrameClock::update] signal of `GdkFrameClock`, since you
             * don't have to worry about when a `GdkFrameClock` is assigned to a widget.
             * @param callback function   to call for updating animations
             * @returns an id for the connection of this callback. Remove the callback   by passing the id returned from this function to   [method@Gtk.Widget.remove_tick_callback]
             */
            add_tick_callback(callback: Gtk.TickCallback): number;
            /**
             * This function is only used by `GtkWidget` subclasses, to
             * assign a size, position and (optionally) baseline to their
             * child widgets.
             *
             * In this function, the allocation and baseline may be adjusted.
             * The given allocation will be forced to be bigger than the
             * widget's minimum size, as well as at least 0×0 in size.
             *
             * For a version that does not take a transform, see
             * [method`Gtk`.Widget.size_allocate].
             * @param width New width of @widget
             * @param height New height of @widget
             * @param baseline New baseline of @widget, or -1
             * @param transform Transformation to be applied to @widget
             */
            allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
            /**
             * Called by widgets as the user moves around the window using
             * keyboard shortcuts.
             *
             * The `direction` argument indicates what kind of motion is taking place (up,
             * down, left, right, tab forward, tab backward).
             *
             * This function calls the [vfunc`Gtk`.Widget.focus] virtual function; widgets
             * can override the virtual function in order to implement appropriate focus
             * behavior.
             *
             * The default `focus()` virtual function for a widget should return `TRUE` if
             * moving in `direction` left the focus on a focusable location inside that
             * widget, and `FALSE` if moving in `direction` moved the focus outside the
             * widget. When returning `TRUE`, widgets normally call [method`Gtk`.Widget.grab_focus]
             * to place the focus accordingly; when returning `FALSE`, they don’t modify
             * the current focus location.
             *
             * This function is used by custom widget implementations; if you're
             * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
             * the focus to a particular widget.
             * @param direction direction of focus movement
             * @returns %TRUE if focus ended up inside @widget
             */
            child_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Computes the bounds for `widget` in the coordinate space of `target`.
             *
             * The bounds of widget are (the bounding box of) the region that it is
             * expected to draw in. See the [coordinate system](coordinates.html)
             * overview to learn more.
             *
             * If the operation is successful, %TRUE is returned. If `widget` has no
             * bounds or the bounds cannot be expressed in `target'`s coordinate space
             * (for example if both widgets are in different windows), %FALSE is
             * returned and `bounds` is set to the zero rectangle.
             *
             * It is valid for `widget` and `target` to be the same widget.
             * @param target the `GtkWidget`
             * @returns %TRUE if the bounds could be computed
             */
            compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
            /**
             * Computes whether a container should give this widget
             * extra space when possible.
             *
             * Containers should check this, rather than looking at
             * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
             *
             * This function already checks whether the widget is visible, so
             * visibility does not need to be checked separately. Non-visible
             * widgets are not expanded.
             *
             * The computed expand value uses either the expand setting explicitly
             * set on the widget itself, or, if none has been explicitly set,
             * the widget may expand if some of its children do.
             * @param orientation expand direction
             * @returns whether widget tree rooted here should be expanded
             */
            compute_expand(orientation: Gtk.Orientation): boolean;
            /**
             * Translates the given `point` in `widget'`s coordinates to coordinates
             * relative to `target’`s coordinate system.
             *
             * In order to perform this operation, both widgets must share a
             * common ancestor.
             * @param target the `GtkWidget` to transform into
             * @param point a point in @widget's coordinate system
             * @returns %TRUE if the point could be determined, %FALSE on failure.   In this case, 0 is stored in @out_point.
             */
            compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
            /**
             * Computes a matrix suitable to describe a transformation from
             * `widget'`s coordinate system into `target'`s coordinate system.
             *
             * The transform can not be computed in certain cases, for example
             * when `widget` and `target` do not share a common ancestor. In that
             * case `out_transform` gets set to the identity matrix.
             *
             * To learn more about widget coordinate systems, see the coordinate
             * system [overview](coordinates.html).
             * @param target the target widget that the matrix will transform to
             * @returns %TRUE if the transform could be computed, %FALSE otherwise
             */
            compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
            /**
             * Tests if the point at (`x,` `y)` is contained in `widget`.
             *
             * The coordinates for (`x,` `y)` must be in widget coordinates, so
             * (0, 0) is assumed to be the top left of `widget'`s content area.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             * @returns %TRUE if @widget contains (@x, @y).
             */
            contains(x: number, y: number): boolean;
            /**
             * Creates a new `PangoContext` with the appropriate font map,
             * font options, font description, and base direction for drawing
             * text for this widget.
             *
             * See also [method`Gtk`.Widget.get_pango_context].
             * @returns the new `PangoContext`
             */
            create_pango_context(): Pango.Context;
            /**
             * Creates a new `PangoLayout` with the appropriate font map,
             * font description, and base direction for drawing text for
             * this widget.
             *
             * If you keep a `PangoLayout` created in this way around,
             * you need to re-create it when the widget `PangoContext`
             * is replaced. This can be tracked by listening to changes
             * of the [property`Gtk`.Widget:root] property on the widget.
             * @param text text to set on the layout
             * @returns the new `PangoLayout`
             */
            create_pango_layout(text?: string | null): Pango.Layout;
            /**
             * Clears the template children for the given widget.
             *
             * This function is the opposite of [method`Gtk`.Widget.init_template], and
             * it is used to clear all the template children from a widget instance.
             * If you bound a template child to a field in the instance structure, or
             * in the instance private data structure, the field will be set to `NULL`
             * after this function returns.
             *
             * You should call this function inside the `GObjectClass.dispose()`
             * implementation of any widget that called `gtk_widget_init_template()`.
             * Typically, you will want to call this function last, right before
             * chaining up to the parent type's dispose implementation, e.g.
             *
             * ```c
             * static void
             * some_widget_dispose (GObject *gobject)
             * {
             *   SomeWidget *self = SOME_WIDGET (gobject);
             *
             *   // Clear the template data for SomeWidget
             *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
             *
             *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
             * }
             * ```
             * @param widget_type the type of the widget to finalize the template for
             */
            dispose_template(widget_type: GObject.GType): void;
            /**
             * Checks to see if a drag movement has passed the GTK drag threshold.
             * @param start_x X coordinate of start of drag
             * @param start_y Y coordinate of start of drag
             * @param current_x current X coordinate
             * @param current_y current Y coordinate
             * @returns %TRUE if the drag threshold has been passed.
             */
            drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
            /**
             * Notifies the user about an input-related error on this widget.
             *
             * If the [property`Gtk`.Settings:gtk-error-bell] setting is %TRUE,
             * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
             *
             * Note that the effect of [method`Gdk`.Surface.beep] can be configured
             * in many ways, depending on the windowing backend and the desktop
             * environment or window manager that is used.
             */
            error_bell(): void;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             *
             * This function is intended to be used when implementing handlers
             * for the `GtkWidget`Class.snapshot() function, and when allocating
             * child widgets in `GtkWidget`Class.size_allocate().
             * @returns the baseline of the @widget, or -1 if none
             */
            get_allocated_baseline(): number;
            /**
             * Returns the height that has currently been allocated to `widget`.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns the height of the @widget
             */
            get_allocated_height(): number;
            /**
             * Returns the width that has currently been allocated to `widget`.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns the width of the @widget
             */
            get_allocated_width(): number;
            /**
             * Retrieves the widget’s allocation.
             *
             * Note, when implementing a layout container: a widget’s allocation
             * will be its “adjusted” allocation, that is, the widget’s parent
             * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
             * and that allocation is then adjusted (to handle margin
             * and alignment for example) before assignment to the widget.
             * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
             * was actually assigned to the widget. The adjusted allocation is
             * guaranteed to be completely contained within the
             * [method`Gtk`.Widget.size_allocate] allocation, however.
             *
             * So a layout container is guaranteed that its children stay inside
             * the assigned bounds, but not that they have exactly the bounds the
             * container assigned.
             */
            get_allocation(): Gtk.Allocation;
            /**
             * Gets the first ancestor of `widget` with type `widget_type`.
             *
             * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
             * gets the first `GtkBox` that’s an ancestor of `widget`. No
             * reference will be added to the returned widget; it should
             * not be unreferenced.
             *
             * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
             * considers `widget` to be an ancestor of itself.
             * @param widget_type ancestor type
             * @returns the ancestor widget
             */
            get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             *
             * This function is intended to be used when implementing handlers
             * for the `GtkWidget`Class.snapshot() function, and when allocating
             * child widgets in `GtkWidget`Class.size_allocate().
             * @returns the baseline of the @widget, or -1 if none
             */
            get_baseline(): number;
            /**
             * Determines whether the input focus can enter `widget` or any
             * of its children.
             *
             * See [method`Gtk`.Widget.set_focusable].
             * @returns %TRUE if the input focus can enter @widget, %FALSE otherwise
             */
            get_can_focus(): boolean;
            /**
             * Queries whether `widget` can be the target of pointer events.
             * @returns %TRUE if @widget can receive pointer events
             */
            get_can_target(): boolean;
            /**
             * Gets the value set with gtk_widget_set_child_visible().
             *
             * If you feel a need to use this function, your code probably
             * needs reorganization.
             *
             * This function is only useful for container implementations
             * and should never be called by an application.
             * @returns %TRUE if the widget is mapped with the parent.
             */
            get_child_visible(): boolean;
            /**
             * Gets the clipboard object for `widget`.
             *
             * This is a utility function to get the clipboard object for the
             * `GdkDisplay` that `widget` is using.
             *
             * Note that this function always works, even when `widget` is not
             * realized yet.
             * @returns the appropriate clipboard object
             */
            get_clipboard(): Gdk.Clipboard;
            /**
             * Gets the current foreground color for the widget’s
             * CSS style.
             *
             * This function should only be used in snapshot
             * implementations that need to do custom
             * drawing with the foreground color.
             */
            get_color(): Gdk.RGBA;
            /**
             * Returns the list of style classes applied to `widget`.
             * @returns a %NULL-terminated list of   css classes currently applied to @widget. The returned   list must freed using g_strfreev().
             */
            get_css_classes(): string[];
            /**
             * Returns the CSS name that is used for `self`.
             * @returns the CSS name
             */
            get_css_name(): string;
            /**
             * Queries the cursor set on `widget`.
             *
             * See [method`Gtk`.Widget.set_cursor] for details.
             * @returns the cursor   currently in use or %NULL if the cursor is inherited
             */
            get_cursor(): Gdk.Cursor | null;
            /**
             * Gets the reading direction for a particular widget.
             *
             * See [method`Gtk`.Widget.set_direction].
             * @returns the reading direction for the widget.
             */
            get_direction(): Gtk.TextDirection;
            /**
             * Returns the widget’s first child.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's first child
             */
            get_first_child(): Gtk.Widget | null;
            /**
             * Returns the current focus child of `widget`.
             * @returns The current focus   child of @widget
             */
            get_focus_child(): Gtk.Widget | null;
            /**
             * Returns whether the widget should grab focus when it is clicked
             * with the mouse.
             *
             * See [method`Gtk`.Widget.set_focus_on_click].
             * @returns %TRUE if the widget should grab focus when it is   clicked with the mouse
             */
            get_focus_on_click(): boolean;
            /**
             * Determines whether `widget` can own the input focus.
             *
             * See [method`Gtk`.Widget.set_focusable].
             * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
             */
            get_focusable(): boolean;
            /**
             * Gets the font map of `widget`.
             *
             * See [method`Gtk`.Widget.set_font_map].
             * @returns A `PangoFontMap`
             */
            get_font_map(): Pango.FontMap | null;
            /**
             * Returns the `cairo_font_options_t` of widget.
             *
             * Seee [method`Gtk`.Widget.set_font_options].
             * @returns the `cairo_font_options_t` of widget
             */
            get_font_options(): cairo.FontOptions | null;
            /**
             * Obtains the frame clock for a widget.
             *
             * The frame clock is a global “ticker” that can be used to drive
             * animations and repaints. The most common reason to get the frame
             * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
             * to get a time to use for animating. For example you might record
             * the start of the animation with an initial value from
             * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
             * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
             *
             * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
             * clock, but won’t necessarily repaint any widgets. To repaint a
             * widget, you have to use [method`Gtk`.Widget.queue_draw] which invalidates
             * the widget (thus scheduling it to receive a draw on the next
             * frame). gtk_widget_queue_draw() will also end up requesting a frame
             * on the appropriate frame clock.
             *
             * A widget’s frame clock will not change while the widget is
             * mapped. Reparenting a widget (which implies a temporary unmap) can
             * change the widget’s frame clock.
             *
             * Unrealized widgets do not have a frame clock.
             * @returns a `GdkFrameClock`
             */
            get_frame_clock(): Gdk.FrameClock | null;
            /**
             * Gets the horizontal alignment of `widget`.
             *
             * For backwards compatibility reasons this method will never return
             * one of the baseline alignments, but instead it will convert it to
             * `GTK_ALIGN_FILL` or `GTK_ALIGN_CENTER`.
             *
             * Baselines are not supported for horizontal alignment.
             * @returns the horizontal alignment of @widget
             */
            get_halign(): Gtk.Align;
            /**
             * Returns the current value of the `has-tooltip` property.
             * @returns current value of `has-tooltip` on @widget.
             */
            get_has_tooltip(): boolean;
            /**
             * Returns the content height of the widget.
             *
             * This function returns the height passed to its
             * size-allocate implementation, which is the height you
             * should be using in [vfunc`Gtk`.Widget.snapshot].
             *
             * For pointer events, see [method`Gtk`.Widget.contains].
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns The height of @widget
             */
            get_height(): number;
            /**
             * Gets whether the widget would like any available extra horizontal
             * space.
             *
             * When a user resizes a `GtkWindow`, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Containers should use [method`Gtk`.Widget.compute_expand] rather
             * than this function, to see whether a widget, or any of its children,
             * has the expand flag set. If any child of a widget wants to
             * expand, the parent may ask to expand also.
             *
             * This function only looks at the widget’s own hexpand flag, rather
             * than computing whether the entire widget tree rooted at this widget
             * wants to expand.
             * @returns whether hexpand flag is set
             */
            get_hexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_hexpand() has been used
             * to explicitly set the expand flag on this widget.
             *
             * If [property`Gtk`.Widget:hexpand] property is set, then it
             * overrides any computed expand value based on child widgets.
             * If `hexpand` is not set, then the expand value depends on
             * whether any children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @returns whether hexpand has been explicitly set
             */
            get_hexpand_set(): boolean;
            /**
             * Returns the widget’s last child.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's last child
             */
            get_last_child(): Gtk.Widget | null;
            /**
             * Retrieves the layout manager used by `widget`.
             *
             * See [method`Gtk`.Widget.set_layout_manager].
             * @returns a `GtkLayoutManager`
             */
            get_layout_manager(): Gtk.LayoutManager | null;
            /**
             * Whether the widget is mapped.
             * @returns %TRUE if the widget is mapped, %FALSE otherwise.
             */
            get_mapped(): boolean;
            /**
             * Gets the bottom margin of `widget`.
             * @returns The bottom margin of @widget
             */
            get_margin_bottom(): number;
            /**
             * Gets the end margin of `widget`.
             * @returns The end margin of @widget
             */
            get_margin_end(): number;
            /**
             * Gets the start margin of `widget`.
             * @returns The start margin of @widget
             */
            get_margin_start(): number;
            /**
             * Gets the top margin of `widget`.
             * @returns The top margin of @widget
             */
            get_margin_top(): number;
            /**
             * Retrieves the name of a widget.
             *
             * See [method`Gtk`.Widget.set_name] for the significance of widget names.
             * @returns name of the widget. This string is owned by GTK and   should not be modified or freed
             */
            get_name(): string;
            /**
             * Returns the nearest `GtkNative` ancestor of `widget`.
             *
             * This function will return %NULL if the widget is not
             * contained inside a widget tree with a native ancestor.
             *
             * `GtkNative` widgets will return themselves here.
             * @returns the `GtkNative` ancestor of @widget
             */
            get_native(): Gtk.Native | null;
            /**
             * Returns the widget’s next sibling.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's next sibling
             */
            get_next_sibling(): Gtk.Widget | null;
            /**
             * #Fetches the requested opacity for this widget.
             *
             * See [method`Gtk`.Widget.set_opacity].
             * @returns the requested opacity for this widget.
             */
            get_opacity(): number;
            /**
             * Returns the widget’s overflow value.
             * @returns The widget's overflow.
             */
            get_overflow(): Gtk.Overflow;
            /**
             * Gets a `PangoContext` with the appropriate font map, font description,
             * and base direction for this widget.
             *
             * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
             * this context is owned by the widget (it can be used until the screen
             * for the widget changes or the widget is removed from its toplevel),
             * and will be updated to match any changes to the widget’s attributes.
             * This can be tracked by listening to changes of the
             * [property`Gtk`.Widget:root] property on the widget.
             * @returns the `PangoContext` for the widget.
             */
            get_pango_context(): Pango.Context;
            /**
             * Returns the parent widget of `widget`.
             * @returns the parent widget of @widget
             */
            get_parent(): Gtk.Widget | null;
            /**
             * Retrieves the minimum and natural size of a widget, taking
             * into account the widget’s preference for height-for-width management.
             *
             * This is used to retrieve a suitable size by container widgets which do
             * not impose any restrictions on the child placement. It can be used
             * to deduce toplevel window and menu sizes as well as child widgets in
             * free-form containers such as `GtkFixed`.
             *
             * Handle with care. Note that the natural height of a height-for-width
             * widget will generally be a smaller size than the minimum height, since
             * the required height for the natural width is generally smaller than the
             * required height for the minimum width.
             *
             * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
             */
            get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
            /**
             * Returns the widget’s previous sibling.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's previous sibling
             */
            get_prev_sibling(): Gtk.Widget | null;
            /**
             * Gets the primary clipboard of `widget`.
             *
             * This is a utility function to get the primary clipboard object
             * for the `GdkDisplay` that `widget` is using.
             *
             * Note that this function always works, even when `widget` is not
             * realized yet.
             * @returns the appropriate clipboard object
             */
            get_primary_clipboard(): Gdk.Clipboard;
            /**
             * Determines whether `widget` is realized.
             * @returns %TRUE if @widget is realized, %FALSE otherwise
             */
            get_realized(): boolean;
            /**
             * Determines whether `widget` is always treated as the default widget
             * within its toplevel when it has the focus, even if another widget
             * is the default.
             *
             * See [method`Gtk`.Widget.set_receives_default].
             * @returns %TRUE if @widget acts as the default widget when focused,   %FALSE otherwise
             */
            get_receives_default(): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * Single-child widgets generally propagate the preference of
             * their child, more complex widgets need to request something
             * either in context of their children or in context of their
             * allocation capabilities.
             * @returns The `GtkSizeRequestMode` preferred by @widget.
             */
            get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Returns the `GtkRoot` widget of `widget`.
             *
             * This function will return %NULL if the widget is not contained
             * inside a widget tree with a root widget.
             *
             * `GtkRoot` widgets will return themselves here.
             * @returns the root widget of @widget
             */
            get_root(): Gtk.Root | null;
            /**
             * Retrieves the internal scale factor that maps from window
             * coordinates to the actual device pixels.
             *
             * On traditional systems this is 1, on high density outputs,
             * it can be a higher value (typically 2).
             *
             * See [method`Gdk`.Surface.get_scale_factor].
             * @returns the scale factor for @widget
             */
            get_scale_factor(): number;
            /**
             * Returns the widget’s sensitivity.
             *
             * This function returns the value that has been set using
             * [method`Gtk`.Widget.set_sensitive]).
             *
             * The effective sensitivity of a widget is however determined
             * by both its own and its parent widget’s sensitivity.
             * See [method`Gtk`.Widget.is_sensitive].
             * @returns %TRUE if the widget is sensitive
             */
            get_sensitive(): boolean;
            /**
             * Gets the settings object holding the settings used for this widget.
             *
             * Note that this function can only be called when the `GtkWidget`
             * is attached to a toplevel, since the settings object is specific
             * to a particular `GdkDisplay`. If you want to monitor the widget for
             * changes in its settings, connect to the `notify::display` signal.
             * @returns the relevant `GtkSettings` object
             */
            get_settings(): Gtk.Settings;
            /**
             * Returns the content width or height of the widget.
             *
             * Which dimension is returned depends on `orientation`.
             *
             * This is equivalent to calling [method`Gtk`.Widget.get_width]
             * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
             * for %GTK_ORIENTATION_VERTICAL, but can be used when
             * writing orientation-independent code, such as when
             * implementing [iface`Gtk`.Orientable] widgets.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @param orientation the orientation to query
             * @returns The size of @widget in @orientation.
             */
            get_size(orientation: Gtk.Orientation): number;
            /**
             * Gets the size request that was explicitly set for the widget using
             * gtk_widget_set_size_request().
             *
             * A value of -1 stored in `width` or `height` indicates that that
             * dimension has not been set explicitly and the natural requisition
             * of the widget will be used instead. See
             * [method`Gtk`.Widget.set_size_request]. To get the size a widget will
             * actually request, call [method`Gtk`.Widget.measure] instead of
             * this function.
             */
            get_size_request(): [number, number];
            /**
             * Returns the widget state as a flag set.
             *
             * It is worth mentioning that the effective %GTK_STATE_FLAG_INSENSITIVE
             * state will be returned, that is, also based on parent insensitivity,
             * even if `widget` itself is sensitive.
             *
             * Also note that if you are looking for a way to obtain the
             * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
             * method, you should look at [method`Gtk`.StyleContext.get_state].
             * @returns The state flags for widget
             */
            get_state_flags(): Gtk.StateFlags;
            /**
             * Returns the style context associated to `widget`.
             *
             * The returned object is guaranteed to be the same
             * for the lifetime of `widget`.
             * @returns the widget’s `GtkStyleContext`
             */
            get_style_context(): Gtk.StyleContext;
            /**
             * Fetch an object build from the template XML for `widget_type` in
             * this `widget` instance.
             *
             * This will only report children which were previously declared
             * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
             * variants.
             *
             * This function is only meant to be called for code which is private
             * to the `widget_type` which declared the child and is meant for language
             * bindings which cannot easily make use of the GObject structure offsets.
             * @param widget_type The `GType` to get a template child for
             * @param name The “id” of the child defined in the template XML
             * @returns The object built in the template XML with   the id @name
             */
            get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
            /**
             * Gets the contents of the tooltip for `widget`.
             *
             * If the tooltip has not been set using
             * [method`Gtk`.Widget.set_tooltip_markup], this
             * function returns %NULL.
             * @returns the tooltip text
             */
            get_tooltip_markup(): string | null;
            /**
             * Gets the contents of the tooltip for `widget`.
             *
             * If the `widget'`s tooltip was set using
             * [method`Gtk`.Widget.set_tooltip_markup],
             * this function will return the escaped text.
             * @returns the tooltip text
             */
            get_tooltip_text(): string | null;
            /**
             * Gets the vertical alignment of `widget`.
             * @returns the vertical alignment of @widget
             */
            get_valign(): Gtk.Align;
            /**
             * Gets whether the widget would like any available extra vertical
             * space.
             *
             * See [method`Gtk`.Widget.get_hexpand] for more detail.
             * @returns whether vexpand flag is set
             */
            get_vexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_vexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
             * @returns whether vexpand has been explicitly set
             */
            get_vexpand_set(): boolean;
            /**
             * Determines whether the widget is visible.
             *
             * If you want to take into account whether the widget’s
             * parent is also marked as visible, use
             * [method`Gtk`.Widget.is_visible] instead.
             *
             * This function does not check if the widget is
             * obscured in any way.
             *
             * See [method`Gtk`.Widget.set_visible].
             * @returns %TRUE if the widget is visible
             */
            get_visible(): boolean;
            /**
             * Returns the content width of the widget.
             *
             * This function returns the width passed to its
             * size-allocate implementation, which is the width you
             * should be using in [vfunc`Gtk`.Widget.snapshot].
             *
             * For pointer events, see [method`Gtk`.Widget.contains].
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns The width of @widget
             */
            get_width(): number;
            /**
             * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
             *
             * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
             * implementation cannot transfer the focus to a descendant of `widget`
             * that is focusable, it will not take focus and %FALSE will be returned.
             *
             * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
             * is allowed, should not have an effect, and return %TRUE.
             * @returns %TRUE if focus is now inside @widget.
             */
            grab_focus(): boolean;
            /**
             * Returns whether `css_class` is currently applied to `widget`.
             * @param css_class A style class, without the leading '.'   used for notation of style classes
             * @returns %TRUE if @css_class is currently applied to @widget,   %FALSE otherwise.
             */
            has_css_class(css_class: string): boolean;
            /**
             * Determines if the widget should show a visible indication that
             * it has the global input focus.
             *
             * This is a convenience function that takes into account whether
             * focus indication should currently be shown in the toplevel window
             * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
             * information about focus indication.
             *
             * To find out if the widget has the global input focus, use
             * [method`Gtk`.Widget.has_focus].
             * @returns %TRUE if the widget should display a “focus rectangle”
             */
            has_visible_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show().
             *
             * This is causing the widget to be hidden (invisible to the user).
             */
            hide(): void;
            /**
             * Returns whether the widget is currently being destroyed.
             *
             * This information can sometimes be used to avoid doing
             * unnecessary work.
             * @returns %TRUE if @widget is being destroyed
             */
            in_destruction(): boolean;
            /**
             * Creates and initializes child widgets defined in templates.
             *
             * This function must be called in the instance initializer
             * for any class which assigned itself a template using
             * [method`Gtk`.WidgetClass.set_template].
             *
             * It is important to call this function in the instance initializer
             * of a `GtkWidget` subclass and not in `GObject.constructed()` or
             * `GObject.constructor()` for two reasons:
             *
             *  - derived widgets will assume that the composite widgets
             *    defined by its parent classes have been created in their
             *    relative instance initializers
             *  - when calling `g_object_new()` on a widget with composite templates,
             *    it’s important to build the composite widgets before the construct
             *    properties are set. Properties passed to `g_object_new()` should
             *    take precedence over properties set in the private template XML
             *
             * A good rule of thumb is to call this function as the first thing in
             * an instance initialization function.
             */
            init_template(): void;
            /**
             * Inserts `group` into `widget`.
             *
             * Children of `widget` that implement [iface`Gtk`.Actionable] can
             * then be associated with actions in `group` by setting their
             * “action-name” to `prefix`.`action-name`.
             *
             * Note that inheritance is defined for individual actions. I.e.
             * even if you insert a group with prefix `prefix,` actions with
             * the same prefix will still be inherited from the parent, unless
             * the group contains an action with the same name.
             *
             * If `group` is %NULL, a previously inserted group for `name` is
             * removed from `widget`.
             * @param name the prefix for actions in @group
             * @param group a `GActionGroup`, or %NULL to remove   the previously inserted group for @name
             */
            insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
            /**
             * Inserts `widget` into the child widget list of `parent`.
             *
             * It will be placed after `previous_sibling,` or at the beginning if
             * `previous_sibling` is %NULL.
             *
             * After calling this function, `gtk_widget_get_prev_sibling(widget)`
             * will return `previous_sibling`.
             *
             * If `parent` is already set as the parent widget of `widget,` this
             * function can also be used to reorder `widget` in the child widget
             * list of `parent`.
             *
             * This API is primarily meant for widget implementations; if you are
             * just using a widget, you *must* use its own API for adding children.
             * @param parent the parent `GtkWidget` to insert @widget into
             * @param previous_sibling the new previous sibling of @widget
             */
            insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
            /**
             * Inserts `widget` into the child widget list of `parent`.
             *
             * It will be placed before `next_sibling,` or at the end if
             * `next_sibling` is %NULL.
             *
             * After calling this function, `gtk_widget_get_next_sibling(widget)`
             * will return `next_sibling`.
             *
             * If `parent` is already set as the parent widget of `widget,` this function
             * can also be used to reorder `widget` in the child widget list of `parent`.
             *
             * This API is primarily meant for widget implementations; if you are
             * just using a widget, you *must* use its own API for adding children.
             * @param parent the parent `GtkWidget` to insert @widget into
             * @param next_sibling the new next sibling of @widget
             */
            insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
            /**
             * Determines whether `widget` is somewhere inside `ancestor,`
             * possibly with intermediate containers.
             * @param ancestor another `GtkWidget`
             * @returns %TRUE if @ancestor contains @widget as a child,   grandchild, great grandchild, etc.
             */
            is_ancestor(ancestor: Gtk.Widget): boolean;
            /**
             * Determines whether `widget` can be drawn to.
             *
             * A widget can be drawn if it is mapped and visible.
             * @returns %TRUE if @widget is drawable, %FALSE otherwise
             */
            is_drawable(): boolean;
            /**
             * Determines if the widget is the focus widget within its
             * toplevel.
             *
             * This does not mean that the [property`Gtk`.Widget:has-focus]
             * property is necessarily set; [property`Gtk`.Widget:has-focus]
             * will only be set if the toplevel widget additionally has the
             * global input focus.
             * @returns %TRUE if the widget is the focus widget.
             */
            is_focus(): boolean;
            /**
             * Returns the widget’s effective sensitivity.
             *
             * This means it is sensitive itself and also its
             * parent widget is sensitive.
             * @returns %TRUE if the widget is effectively sensitive
             */
            is_sensitive(): boolean;
            /**
             * Determines whether the widget and all its parents are marked as
             * visible.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See also [method`Gtk`.Widget.get_visible] and
             * [method`Gtk`.Widget.set_visible].
             * @returns %TRUE if the widget and all its parents are visible
             */
            is_visible(): boolean;
            /**
             * Emits the `::keynav-failed` signal on the widget.
             *
             * This function should be called whenever keyboard navigation
             * within a single widget hits a boundary.
             *
             * The return value of this function should be interpreted
             * in a way similar to the return value of
             * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
             * stay in the widget, the failed keyboard  navigation is OK
             * and/or there is nowhere we can/should move the focus to.
             * When %FALSE is returned, the caller should continue with
             * keyboard navigation outside the widget, e.g. by calling
             * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
             *
             * The default [signal`Gtk`.Widget::keynav-failed] handler returns
             * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
             * For the other values of `GtkDirectionType` it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * [method`Gtk`.Widget.error_bell] to notify the user of the
             * failed keyboard navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * [class`Gtk`.Entry] widgets where the user should be able to navigate
             * the entire row with the cursor keys, as e.g. known from user
             * interfaces that require entering license keys.
             * @param direction direction of focus movement
             * @returns %TRUE if stopping keyboard navigation is fine, %FALSE   if the emitting widget should try to handle the keyboard   navigation attempt in its parent container(s).
             */
            keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Returns the widgets for which this widget is the target of a
             * mnemonic.
             *
             * Typically, these widgets will be labels. See, for example,
             * [method`Gtk`.Label.set_mnemonic_widget].
             *
             * The widgets in the list are not individually referenced.
             * If you want to iterate through the list and perform actions
             * involving callbacks that might destroy the widgets, you
             * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
             * first, and then unref all the widgets afterwards.
             * @returns the list   of mnemonic labels; free this list with g_list_free() when you   are done with it.
             */
            list_mnemonic_labels(): Gtk.Widget[];
            /**
             * Causes a widget to be mapped if it isn’t already.
             *
             * This function is only for use in widget implementations.
             */
            map(): void;
            /**
             * Measures `widget` in the orientation `orientation` and for the given `for_size`.
             *
             * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
             * is 300, this functions will compute the minimum and natural width of `widget`
             * if it is allocated at a height of 300 pixels.
             *
             * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
             * a more details on implementing `GtkWidgetClass.measure()`.
             * @param orientation the orientation to measure
             * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
             */
            measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
            /**
             * Emits the ::mnemonic-activate signal.
             *
             * See [signal`Gtk`.Widget::mnemonic-activate].
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             * @returns %TRUE if the signal has been handled
             */
            mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Returns a `GListModel` to track the children of `widget`.
             *
             * Calling this function will enable extra internal bookkeeping
             * to track children and emit signals on the returned listmodel.
             * It may slow down operations a lot.
             *
             * Applications should try hard to avoid calling this function
             * because of the slowdowns.
             * @returns a `GListModel` tracking @widget's children
             */
            observe_children(): Gio.ListModel;
            /**
             * Returns a `GListModel` to track the [class`Gtk`.EventController]s
             * of `widget`.
             *
             * Calling this function will enable extra internal bookkeeping
             * to track controllers and emit signals on the returned listmodel.
             * It may slow down operations a lot.
             *
             * Applications should try hard to avoid calling this function
             * because of the slowdowns.
             * @returns a `GListModel` tracking @widget's controllers
             */
            observe_controllers(): Gio.ListModel;
            /**
             * Finds the descendant of `widget` closest to the point (`x,` `y)`.
             *
             * The point must be given in widget coordinates, so (0, 0) is assumed
             * to be the top left of `widget'`s content area.
             *
             * Usually widgets will return %NULL if the given coordinate is not
             * contained in `widget` checked via [method`Gtk`.Widget.contains].
             * Otherwise they will recursively try to find a child that does
             * not return %NULL. Widgets are however free to customize their
             * picking algorithm.
             *
             * This function is used on the toplevel to determine the widget
             * below the mouse cursor for purposes of hover highlighting and
             * delivering events.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             * @param flags Flags to influence what is picked
             * @returns The widget descendant at   the given point
             */
            pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null;
            /**
             * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
             * function.
             *
             * Use this function instead of [method`Gtk`.Widget.queue_resize]
             * when the `widget'`s size request didn't change but it wants to
             * reposition its contents.
             *
             * An example user of this function is [method`Gtk`.Widget.set_halign].
             *
             * This function is only for use in widget implementations.
             */
            queue_allocate(): void;
            /**
             * Schedules this widget to be redrawn in the paint phase
             * of the current or the next frame.
             *
             * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
             * implementation will be called.
             */
            queue_draw(): void;
            /**
             * Flags a widget to have its size renegotiated.
             *
             * This should be called when a widget for some reason has a new
             * size request. For example, when you change the text in a
             * [class`Gtk`.Label], the label queues a resize to ensure there’s
             * enough space for the new text.
             *
             * Note that you cannot call gtk_widget_queue_resize() on a widget
             * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
             * virtual method. Calls to gtk_widget_queue_resize() from inside
             * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
             *
             * This function is only for use in widget implementations.
             */
            queue_resize(): void;
            /**
             * Removes `controller` from `widget,` so that it doesn't process
             * events anymore.
             *
             * It should not be used again.
             *
             * Widgets will remove all event controllers automatically when they
             * are destroyed, there is normally no need to call this function.
             * @param controller a `GtkEventController`
             */
            remove_controller(controller: Gtk.EventController): void;
            /**
             * Removes a style from `widget`.
             *
             * After this, the style of `widget` will stop matching for `css_class`.
             * @param css_class The style class to remove from @widget, without   the leading '.' used for notation of style classes
             */
            remove_css_class(css_class: string): void;
            /**
             * Removes a widget from the list of mnemonic labels for this widget.
             *
             * See [method`Gtk`.Widget.list_mnemonic_labels]. The widget must
             * have previously been added to the list with
             * [method`Gtk`.Widget.add_mnemonic_label].
             * @param label a `GtkWidget` that was previously set as a mnemonic   label for @widget with [method@Gtk.Widget.add_mnemonic_label]
             */
            remove_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Removes a tick callback previously registered with
             * gtk_widget_add_tick_callback().
             * @param id an id returned by [method@Gtk.Widget.add_tick_callback]
             */
            remove_tick_callback(id: number): void;
            /**
             * Specifies whether the input focus can enter the widget
             * or any of its children.
             *
             * Applications should set `can_focus` to %FALSE to mark a
             * widget as for pointer/touch use only.
             *
             * Note that having `can_focus` be %TRUE is only one of the
             * necessary conditions for being focusable. A widget must
             * also be sensitive and focusable and not have an ancestor
             * that is marked as not can-focus in order to receive input
             * focus.
             *
             * See [method`Gtk`.Widget.grab_focus] for actually setting
             * the input focus on a widget.
             * @param can_focus whether or not the input focus can enter   the widget or any of its children
             */
            set_can_focus(can_focus: boolean): void;
            /**
             * Sets whether `widget` can be the target of pointer events.
             * @param can_target whether this widget should be able to   receive pointer events
             */
            set_can_target(can_target: boolean): void;
            /**
             * Sets whether `widget` should be mapped along with its parent.
             *
             * The child visibility can be set for widget before it is added
             * to a container with [method`Gtk`.Widget.set_parent], to avoid
             * mapping children unnecessary before immediately unmapping them.
             * However it will be reset to its default state of %TRUE when the
             * widget is removed from a container.
             *
             * Note that changing the child visibility of a widget does not
             * queue a resize on the widget. Most of the time, the size of
             * a widget is computed from all visible children, whether or
             * not they are mapped. If this is not the case, the container
             * can queue a resize itself.
             *
             * This function is only useful for container implementations
             * and should never be called by an application.
             * @param child_visible if %TRUE, @widget should be mapped along   with its parent.
             */
            set_child_visible(child_visible: boolean): void;
            /**
             * Clear all style classes applied to `widget`
             * and replace them with `classes`.
             * @param classes %NULL-terminated list of style classes to apply to @widget.
             */
            set_css_classes(classes: string[]): void;
            /**
             * Sets the cursor to be shown when pointer devices point
             * towards `widget`.
             *
             * If the `cursor` is NULL, `widget` will use the cursor
             * inherited from the parent widget.
             * @param cursor the new cursor
             */
            set_cursor(cursor?: Gdk.Cursor | null): void;
            /**
             * Sets a named cursor to be shown when pointer devices point
             * towards `widget`.
             *
             * This is a utility function that creates a cursor via
             * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
             * with [method`Gtk`.Widget.set_cursor]. See those functions for
             * details.
             *
             * On top of that, this function allows `name` to be %NULL, which
             * will do the same as calling [method`Gtk`.Widget.set_cursor]
             * with a %NULL cursor.
             * @param name The name of the cursor
             */
            set_cursor_from_name(name?: string | null): void;
            /**
             * Sets the reading direction on a particular widget.
             *
             * This direction controls the primary direction for widgets
             * containing text, and also the direction in which the children
             * of a container are packed. The ability to set the direction is
             * present in order so that correct localization into languages with
             * right-to-left reading directions can be done. Generally, applications
             * will let the default reading direction present, except for containers
             * where the containers are arranged in an order that is explicitly
             * visual rather than logical (such as buttons for text justification).
             *
             * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
             * set by [func`Gtk`.Widget.set_default_direction] will be used.
             * @param dir the new direction
             */
            set_direction(dir: Gtk.TextDirection): void;
            /**
             * Set `child` as the current focus child of `widget`.
             *
             * This function is only suitable for widget implementations.
             * If you want a certain widget to get the input focus, call
             * [method`Gtk`.Widget.grab_focus] on it.
             * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
             */
            set_focus_child(child?: Gtk.Widget | null): void;
            /**
             * Sets whether the widget should grab focus when it is clicked
             * with the mouse.
             *
             * Making mouse clicks not grab focus is useful in places like
             * toolbars where you don’t want the keyboard focus removed from
             * the main area of the application.
             * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
             */
            set_focus_on_click(focus_on_click: boolean): void;
            /**
             * Specifies whether `widget` can own the input focus.
             *
             * Widget implementations should set `focusable` to %TRUE in
             * their init() function if they want to receive keyboard input.
             *
             * Note that having `focusable` be %TRUE is only one of the
             * necessary conditions for being focusable. A widget must
             * also be sensitive and can-focus and not have an ancestor
             * that is marked as not can-focus in order to receive input
             * focus.
             *
             * See [method`Gtk`.Widget.grab_focus] for actually setting
             * the input focus on a widget.
             * @param focusable whether or not @widget can own the input focus
             */
            set_focusable(focusable: boolean): void;
            /**
             * Sets the font map to use for Pango rendering.
             *
             * The font map is the object that is used to look up fonts.
             * Setting a custom font map can be useful in special situations,
             * e.g. when you need to add application-specific fonts to the set
             * of available fonts.
             *
             * When not set, the widget will inherit the font map from its parent.
             * @param font_map a `PangoFontMap`, or %NULL to unset any   previously set font map
             */
            set_font_map(font_map?: Pango.FontMap | null): void;
            /**
             * Sets the `cairo_font_options_t` used for Pango rendering
             * in this widget.
             *
             * When not set, the default font options for the `GdkDisplay`
             * will be used.
             * @param options a `cairo_font_options_t`   to unset any previously set default font options
             */
            set_font_options(options?: cairo.FontOptions | null): void;
            /**
             * Sets the horizontal alignment of `widget`.
             * @param align the horizontal alignment
             */
            set_halign(align: Gtk.Align): void;
            /**
             * Sets the `has-tooltip` property on `widget` to `has_tooltip`.
             * @param has_tooltip whether or not @widget has a tooltip.
             */
            set_has_tooltip(has_tooltip: boolean): void;
            /**
             * Sets whether the widget would like any available extra horizontal
             * space.
             *
             * When a user resizes a `GtkWindow`, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Call this function to set the expand flag if you would like your
             * widget to become larger horizontally when the window has extra
             * room.
             *
             * By default, widgets automatically expand if any of their children
             * want to expand. (To see if a widget will automatically expand given
             * its current children and state, call [method`Gtk`.Widget.compute_expand].
             * A container can decide how the expandability of children affects the
             * expansion of the container by overriding the compute_expand virtual
             * method on `GtkWidget`.).
             *
             * Setting hexpand explicitly with this function will override the
             * automatic expand behavior.
             *
             * This function forces the widget to expand or not to expand,
             * regardless of children.  The override occurs because
             * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
             * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
             * value to be used, rather than looking at children and widget state.
             * @param expand whether to expand
             */
            set_hexpand(expand: boolean): void;
            /**
             * Sets whether the hexpand flag will be used.
             *
             * The [property`Gtk`.Widget:hexpand-set] property will be set
             * automatically when you call [method`Gtk`.Widget.set_hexpand]
             * to set hexpand, so the most likely reason to use this function
             * would be to unset an explicit expand flag.
             *
             * If hexpand is set, then it overrides any computed
             * expand value based on child widgets. If hexpand is not
             * set, then the expand value depends on whether any
             * children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @param set value for hexpand-set property
             */
            set_hexpand_set(set: boolean): void;
            /**
             * Sets the layout manager delegate instance that provides an
             * implementation for measuring and allocating the children of `widget`.
             * @param layout_manager a `GtkLayoutManager`
             */
            set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
            /**
             * Sets the bottom margin of `widget`.
             * @param margin the bottom margin
             */
            set_margin_bottom(margin: number): void;
            /**
             * Sets the end margin of `widget`.
             * @param margin the end margin
             */
            set_margin_end(margin: number): void;
            /**
             * Sets the start margin of `widget`.
             * @param margin the start margin
             */
            set_margin_start(margin: number): void;
            /**
             * Sets the top margin of `widget`.
             * @param margin the top margin
             */
            set_margin_top(margin: number): void;
            /**
             * Sets a widgets name.
             *
             * Setting a name allows you to refer to the widget from a
             * CSS file. You can apply a style to widgets with a particular name
             * in the CSS file. See the documentation for the CSS syntax (on the
             * same page as the docs for [class`Gtk`.StyleContext].
             *
             * Note that the CSS syntax has certain special characters to delimit
             * and represent elements in a selector (period, #, >, *...), so using
             * these will make your widget impossible to match by name. Any combination
             * of alphanumeric symbols, dashes and underscores will suffice.
             * @param name name for the widget
             */
            set_name(name: string): void;
            /**
             * Request the `widget` to be rendered partially transparent.
             *
             * An opacity of 0 is fully transparent and an opacity of 1
             * is fully opaque.
             *
             * Opacity works on both toplevel widgets and child widgets, although
             * there are some limitations: For toplevel widgets, applying opacity
             * depends on the capabilities of the windowing system. On X11, this
             * has any effect only on X displays with a compositing manager,
             * see gdk_display_is_composited(). On Windows and Wayland it should
             * always work, although setting a window’s opacity after the window
             * has been shown may cause some flicker.
             *
             * Note that the opacity is inherited through inclusion — if you set
             * a toplevel to be partially translucent, all of its content will
             * appear translucent, since it is ultimatively rendered on that
             * toplevel. The opacity value itself is not inherited by child
             * widgets (since that would make widgets deeper in the hierarchy
             * progressively more translucent). As a consequence, [class`Gtk`.Popover]s
             * and other [iface`Gtk`.Native] widgets with their own surface will use their
             * own opacity value, and thus by default appear non-translucent,
             * even if they are attached to a toplevel that is translucent.
             * @param opacity desired opacity, between 0 and 1
             */
            set_opacity(opacity: number): void;
            /**
             * Sets how `widget` treats content that is drawn outside the
             * widget's content area.
             *
             * See the definition of [enum`Gtk`.Overflow] for details.
             *
             * This setting is provided for widget implementations and
             * should not be used by application code.
             *
             * The default value is %GTK_OVERFLOW_VISIBLE.
             * @param overflow desired overflow
             */
            set_overflow(overflow: Gtk.Overflow): void;
            /**
             * Sets `parent` as the parent widget of `widget`.
             *
             * This takes care of details such as updating the state and style
             * of the child to reflect its new location and resizing the parent.
             * The opposite function is [method`Gtk`.Widget.unparent].
             *
             * This function is useful only when implementing subclasses of
             * `GtkWidget`.
             * @param parent parent widget
             */
            set_parent(parent: Gtk.Widget): void;
            /**
             * Specifies whether `widget` will be treated as the default
             * widget within its toplevel when it has the focus, even if
             * another widget is the default.
             * @param receives_default whether or not @widget can be a default widget.
             */
            set_receives_default(receives_default: boolean): void;
            /**
             * Sets the sensitivity of a widget.
             *
             * A widget is sensitive if the user can interact with it.
             * Insensitive widgets are “grayed out” and the user can’t
             * interact with them. Insensitive widgets are known as
             * “inactive”, “disabled”, or “ghosted” in some other toolkits.
             * @param sensitive %TRUE to make the widget sensitive
             */
            set_sensitive(sensitive: boolean): void;
            /**
             * Sets the minimum size of a widget.
             *
             * That is, the widget’s size request will be at least `width`
             * by `height`. You can use this function to force a widget to
             * be larger than it normally would be.
             *
             * In most cases, [method`Gtk`.Window.set_default_size] is a better
             * choice for toplevel windows than this function; setting the default
             * size will still allow users to shrink the window. Setting the size
             * request will force them to leave the window at least as large as
             * the size request.
             *
             * Note the inherent danger of setting any fixed size - themes,
             * translations into other languages, different fonts, and user action
             * can all change the appropriate size for a given widget. So, it's
             * basically impossible to hardcode a size that will always be
             * correct.
             *
             * The size request of a widget is the smallest size a widget can
             * accept while still functioning well and drawing itself correctly.
             * However in some strange cases a widget may be allocated less than
             * its requested size, and in many cases a widget may be allocated more
             * space than it requested.
             *
             * If the size request in a given direction is -1 (unset), then
             * the “natural” size request of the widget will be used instead.
             *
             * The size request set here does not include any margin from the
             * properties
             * [property`Gtk`.Widget:margin-start],
             * [property`Gtk`.Widget:margin-end],
             * [property`Gtk`.Widget:margin-top], and
             * [property`Gtk`.Widget:margin-bottom], but it does include pretty
             * much all other padding or border properties set by any subclass
             * of `GtkWidget`.
             * @param width width @widget should request, or -1 to unset
             * @param height height @widget should request, or -1 to unset
             */
            set_size_request(width: number, height: number): void;
            /**
             * Turns on flag values in the current widget state.
             *
             * Typical widget states are insensitive, prelighted, etc.
             *
             * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
             * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set
             * the widget's direction, use [method`Gtk`.Widget.set_direction].
             *
             * This function is for use in widget implementations.
             * @param flags State flags to turn on
             * @param clear Whether to clear state before turning on @flags
             */
            set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
            /**
             * Sets `markup` as the contents of the tooltip, which is marked
             * up with Pango markup.
             *
             * This function will take care of setting the
             * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
             * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
             *
             * See also [method`Gtk`.Tooltip.set_markup].
             * @param markup the contents of the tooltip for @widget
             */
            set_tooltip_markup(markup?: string | null): void;
            /**
             * Sets `text` as the contents of the tooltip.
             *
             * If `text` contains any markup, it will be escaped.
             *
             * This function will take care of setting
             * [property`Gtk`.Widget:has-tooltip] as a side effect,
             * and of the default handler for the
             * [signal`Gtk`.Widget::query-tooltip] signal.
             *
             * See also [method`Gtk`.Tooltip.set_text].
             * @param text the contents of the tooltip for @widget
             */
            set_tooltip_text(text?: string | null): void;
            /**
             * Sets the vertical alignment of `widget`.
             * @param align the vertical alignment
             */
            set_valign(align: Gtk.Align): void;
            /**
             * Sets whether the widget would like any available extra vertical
             * space.
             *
             * See [method`Gtk`.Widget.set_hexpand] for more detail.
             * @param expand whether to expand
             */
            set_vexpand(expand: boolean): void;
            /**
             * Sets whether the vexpand flag will be used.
             *
             * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
             * @param set value for vexpand-set property
             */
            set_vexpand_set(set: boolean): void;
            /**
             * Sets the visibility state of `widget`.
             *
             * Note that setting this to %TRUE doesn’t mean the widget is
             * actually viewable, see [method`Gtk`.Widget.get_visible].
             * @param visible whether the widget should be shown or not
             */
            set_visible(visible: boolean): void;
            /**
             * Returns whether `widget` should contribute to
             * the measuring and allocation of its parent.
             *
             * This is %FALSE for invisible children, but also
             * for children that have their own surface.
             * @returns %TRUE if child should be included in   measuring and allocating
             */
            should_layout(): boolean;
            /**
             * Flags a widget to be displayed.
             *
             * Any widget that isn’t shown will not appear on the screen.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            show(): void;
            /**
             * Allocates widget with a transformation that translates
             * the origin to the position in `allocation`.
             *
             * This is a simple form of [method`Gtk`.Widget.allocate].
             * @param allocation position and size to be allocated to @widget
             * @param baseline The baseline of the child, or -1
             */
            size_allocate(allocation: Gtk.Allocation, baseline: number): void;
            /**
             * Snapshot the a child of `widget`.
             *
             * When a widget receives a call to the snapshot function,
             * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
             * to all children. This function provides a convenient way
             * of doing this. A widget, when it receives a call to its
             * [vfunc`Gtk`.Widget.snapshot] function, calls
             * gtk_widget_snapshot_child() once for each child, passing in
             * the `snapshot` the widget received.
             *
             * gtk_widget_snapshot_child() takes care of translating the origin of
             * `snapshot,` and deciding whether the child needs to be snapshot.
             *
             * This function does nothing for children that implement `GtkNative`.
             * @param child a child of @widget
             * @param snapshot `GtkSnapshot` as passed to the widget. In particular, no   calls to gtk_snapshot_translate() or other transform calls should   have been made.
             */
            snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
            /**
             * Translate coordinates relative to `src_widget’`s allocation
             * to coordinates relative to `dest_widget’`s allocations.
             *
             * In order to perform this operation, both widget must share
             * a common ancestor.
             * @param dest_widget a `GtkWidget`
             * @param src_x X position relative to @src_widget
             * @param src_y Y position relative to @src_widget
             * @returns %FALSE if @src_widget and @dest_widget have no common   ancestor. In this case, 0 is stored in *@dest_x and *@dest_y.   Otherwise %TRUE.
             */
            translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
            /**
             * Triggers a tooltip query on the display where the toplevel
             * of `widget` is located.
             */
            trigger_tooltip_query(): void;
            /**
             * Causes a widget to be unmapped if it’s currently mapped.
             *
             * This function is only for use in widget implementations.
             */
            unmap(): void;
            /**
             * Dissociate `widget` from its parent.
             *
             * This function is only for use in widget implementations,
             * typically in dispose.
             */
            unparent(): void;
            /**
             * Turns off flag values for the current widget state.
             *
             * See [method`Gtk`.Widget.set_state_flags].
             *
             * This function is for use in widget implementations.
             * @param flags State flags to turn off
             */
            unset_state_flags(flags: Gtk.StateFlags): void;
            /**
             * Computes whether a container should give this
             *   widget extra space when possible.
             * @param hexpand_p
             * @param vexpand_p
             */
            vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
            /**
             * Tests if the point at (`x,` `y)` is contained in `widget`.
             *
             * The coordinates for (`x,` `y)` must be in widget coordinates, so
             * (0, 0) is assumed to be the top left of `widget'`s content area.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             */
            vfunc_contains(x: number, y: number): boolean;
            /**
             * Vfunc called when the CSS used by widget was changed. Widgets
             *   should then discard their caches that depend on CSS and queue resizes or
             *   redraws accordingly. The default implementation will take care of this for
             *   all the default CSS properties, so implementations must chain up.
             * @param change
             */
            vfunc_css_changed(change: Gtk.CssStyleChange): void;
            /**
             * Signal emitted when the text direction of a
             *   widget changes.
             * @param previous_direction
             */
            vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
            /**
             * Vfunc for gtk_widget_child_focus()
             * @param direction
             */
            vfunc_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * Single-child widgets generally propagate the preference of
             * their child, more complex widgets need to request something
             * either in context of their children or in context of their
             * allocation capabilities.
             */
            vfunc_get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
             *
             * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
             * implementation cannot transfer the focus to a descendant of `widget`
             * that is focusable, it will not take focus and %FALSE will be returned.
             *
             * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
             * is allowed, should not have an effect, and return %TRUE.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show().
             *
             * This is causing the widget to be hidden (invisible to the user).
             */
            vfunc_hide(): void;
            /**
             * Emits the `::keynav-failed` signal on the widget.
             *
             * This function should be called whenever keyboard navigation
             * within a single widget hits a boundary.
             *
             * The return value of this function should be interpreted
             * in a way similar to the return value of
             * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
             * stay in the widget, the failed keyboard  navigation is OK
             * and/or there is nowhere we can/should move the focus to.
             * When %FALSE is returned, the caller should continue with
             * keyboard navigation outside the widget, e.g. by calling
             * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
             *
             * The default [signal`Gtk`.Widget::keynav-failed] handler returns
             * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
             * For the other values of `GtkDirectionType` it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * [method`Gtk`.Widget.error_bell] to notify the user of the
             * failed keyboard navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * [class`Gtk`.Entry] widgets where the user should be able to navigate
             * the entire row with the cursor keys, as e.g. known from user
             * interfaces that require entering license keys.
             * @param direction direction of focus movement
             */
            vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Causes a widget to be mapped if it isn’t already.
             *
             * This function is only for use in widget implementations.
             */
            vfunc_map(): void;
            /**
             * Measures `widget` in the orientation `orientation` and for the given `for_size`.
             *
             * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
             * is 300, this functions will compute the minimum and natural width of `widget`
             * if it is allocated at a height of 300 pixels.
             *
             * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
             * a more details on implementing `GtkWidgetClass.measure()`.
             * @param orientation the orientation to measure
             * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
             */
            vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
            /**
             * Emits the ::mnemonic-activate signal.
             *
             * See [signal`Gtk`.Widget::mnemonic-activate].
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             */
            vfunc_mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Signal emitted when a change of focus is requested
             * @param direction
             */
            vfunc_move_focus(direction: Gtk.DirectionType): void;
            /**
             * Signal emitted when “has-tooltip” is %TRUE and the
             *   hover timeout has expired with the cursor hovering “above”
             *   widget; or emitted when widget got focus in keyboard mode.
             * @param x
             * @param y
             * @param keyboard_tooltip
             * @param tooltip
             */
            vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
            /**
             * Creates the GDK resources associated with a widget.
             *
             * Normally realization happens implicitly; if you show a widget
             * and all its parent containers, then the widget will be realized
             * and mapped automatically.
             *
             * Realizing a widget requires all the widget’s parent widgets to be
             * realized; calling this function realizes the widget’s parents
             * in addition to `widget` itself. If a widget is not yet inside a
             * toplevel window when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * [signal`Gtk`.Widget::realize].
             */
            vfunc_realize(): void;
            /**
             * Called when the widget gets added to a `GtkRoot` widget. Must
             *   chain up
             */
            vfunc_root(): void;
            /**
             * Set `child` as the current focus child of `widget`.
             *
             * This function is only suitable for widget implementations.
             * If you want a certain widget to get the input focus, call
             * [method`Gtk`.Widget.grab_focus] on it.
             * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
             */
            vfunc_set_focus_child(child?: Gtk.Widget | null): void;
            /**
             * Flags a widget to be displayed.
             *
             * Any widget that isn’t shown will not appear on the screen.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            vfunc_show(): void;
            /**
             * Called to set the allocation, if the widget does
             *   not have a layout manager.
             * @param width
             * @param height
             * @param baseline
             */
            vfunc_size_allocate(width: number, height: number, baseline: number): void;
            /**
             * Vfunc called when a new snapshot of the widget has to be taken.
             * @param snapshot
             */
            vfunc_snapshot(snapshot: Gtk.Snapshot): void;
            /**
             * Signal emitted when the widget state changes,
             *   see gtk_widget_get_state_flags().
             * @param previous_state_flags
             */
            vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
            /**
             * Emitted when a system setting was changed. Must chain up.
             * @param settings
             */
            vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
            /**
             * Causes a widget to be unmapped if it’s currently mapped.
             *
             * This function is only for use in widget implementations.
             */
            vfunc_unmap(): void;
            /**
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget).
             *
             * This function is only useful in widget implementations.
             */
            vfunc_unrealize(): void;
            /**
             * Called when the widget is about to be removed from its
             *   `GtkRoot` widget. Must chain up
             */
            vfunc_unroot(): void;
        }

        type CompletionProviderClass = typeof CompletionProvider;
        type CompletionRequestClass = typeof CompletionRequest;
        type PreviewWindowClass = typeof PreviewWindow;
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

    export default Workbench;
}

declare module 'gi://Workbench' {
    import Workbench0 from 'gi://Workbench?version=0';
    export default Workbench0;
}
// END
