/// <reference path="./gtk-3.0.d.ts" />
/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />
/// <reference path="./gcr-3.d.ts" />
/// <reference path="./gck-1.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GcrUi?version=3' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=3.0';
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Atk from 'gi://Atk?version=1.0';
    import type Gcr from 'gi://Gcr?version=3';
    import type Gck from 'gi://Gck?version=1';

    export namespace GcrUi {
        /**
         * GcrUi-3
         */

        /**
         * If a [class`CollectionModel]` is created with a mode of
         * %GCR_COLLECTION_MODEL_TREE, then any included objects that are themselves a
         * [iface`Gcr`.Collection], will have all child
         * objects include as child rows in a tree form.
         */

        /**
         * If a [class`CollectionModel]` is created with a mode of
         * %GCR_COLLECTION_MODEL_TREE, then any included objects that are themselves a
         * [iface`Gcr`.Collection], will have all child
         * objects include as child rows in a tree form.
         */
        export namespace CollectionModelMode {
            export const $gtype: GObject.GType<CollectionModelMode>;
        }

        enum CollectionModelMode {
            /**
             * only objects in the top collection, no child objects
             */
            LIST,
            /**
             * show objects in the collection, and child objects in a tree form
             */
            TREE,
        }
        /**
         * Create and initialize a renderer for the given attributes and label. These
         * renderers should have been preregistered via gcr_renderer_register().
         * @param label The label for the renderer
         * @param attrs The attributes to render
         * @returns a new renderer, or %NULL if no renderer          matched the attributes; the render should be released with g_object_unref()
         */
        function renderer_create(label: string | null, attrs: Gck.Attributes): Renderer | null;
        /**
         * Register a renderer to be created when matching attributes are passed to
         * gcr_renderer_create().
         * @param renderer_type The renderer class type
         * @param attrs The attributes to match
         */
        function renderer_register(renderer_type: GObject.GType, attrs: Gck.Attributes): void;
        /**
         * Register all the well known renderers for certificates and keys known to the
         * Gcr library.
         */
        function renderer_register_well_known(): void;
        /**
         * Get an implementation of #GcrViewer that supports a view
         * of multiple renderers.
         * @returns a newly allocated #GcrViewer, which should be          released with g_object_unref()
         */
        function viewer_new(): Viewer;
        /**
         * Get an implementation of #GcrViewer that supports a scrolled view
         * of multiple renderers.
         * @returns a #GcrViewer which is also a #GtkWidget
         */
        function viewer_new_scrolled(): Viewer;
        module CertificateRenderer {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gcr.Certificate.ConstructorProps,
                    Gcr.Comparable.ConstructorProps,
                    Renderer.ConstructorProps {
                attributes: Gck.Attributes;
                certificate: Gcr.Certificate;
                label: string;
            }
        }

        /**
         * An implementation of #GcrRenderer which renders certificates.
         */
        class CertificateRenderer extends GObject.Object implements Gcr.Certificate, Gcr.Comparable, Renderer {
            static $gtype: GObject.GType<CertificateRenderer>;

            // Properties

            /**
             * The certificate attributes to display. One of the attributes must be
             * a CKA_VALUE type attribute which contains a DER encoded certificate.
             */
            get attributes(): Gck.Attributes;
            set attributes(val: Gck.Attributes);
            /**
             * The certificate to display. May be %NULL.
             */
            get certificate(): Gcr.Certificate;
            set certificate(val: Gcr.Certificate);
            /**
             * The label to display.
             */
            get label(): string;
            set label(val: string);

            // Constructors

            constructor(properties?: Partial<CertificateRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](certificate: Gcr.Certificate): CertificateRenderer;

            static new_for_attributes(label?: string | null, attrs?: any | null): CertificateRenderer;

            // Methods

            /**
             * Get the certificate displayed in the renderer. If no certificate was
             * explicitly set, then the renderer will return itself since it acts as
             * a valid certificate.
             * @returns The certificate, owned by the renderer.
             */
            get_certificate(): Gcr.Certificate;
            /**
             * Set a certificate to display in the renderer.
             * @param certificate the certificate to display
             */
            set_certificate(certificate?: Gcr.Certificate | null): void;

            // Inherited properties
            /**
             * A readable description for this certificate
             */
            get description(): string;
            /**
             * The expiry date of the certificate
             */
            get expiry(): GLib.Date;
            /**
             * An icon representing the certificate
             */
            get icon(): Gio.Icon;
            /**
             * Common name part of the certificate issuer
             */
            get issuer(): string;
            /**
             * GLib markup to describe the certificate
             */
            get markup(): string;
            /**
             * Common name part of the certificate subject
             */
            get subject(): string;

            // Inherited methods
            /**
             * Get the basic constraints for the certificate if present. If %FALSE is
             * returned then no basic constraints are present and the `is_ca` and
             * `path_len` arguments are not changed.
             * @returns whether basic constraints are present or not
             */
            get_basic_constraints(): [boolean, boolean, number];
            /**
             * Gets the raw DER data for an X.509 certificate.
             * @returns raw DER data of the X.509 certificate
             */
            get_der_data(): Uint8Array;
            /**
             * Get the expiry date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated expiry date of this certificate.
             */
            get_expiry_date(): GLib.Date;
            /**
             * Calculate the fingerprint for this certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns the raw binary fingerprint
             */
            get_fingerprint(type: GLib.ChecksumType): Uint8Array;
            /**
             * Calculate the fingerprint for this certificate, and return it
             * as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns an allocated hex string which contains the fingerprint.
             */
            get_fingerprint_hex(type: GLib.ChecksumType): string;
            /**
             * Get the issued date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated issued date of this certificate.
             */
            get_issued_date(): GLib.Date;
            /**
             * Get the common name of the issuer of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer CN, or %NULL if no issuer CN present.
             */
            get_issuer_cn(): string;
            /**
             * Get the full issuer DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer DN of the certificate.
             */
            get_issuer_dn(): string;
            /**
             * Get a name to represent the issuer of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated issuer name, or %NULL if no issuer name
             */
            get_issuer_name(): string;
            /**
             * Get a part of the DN of the issuer of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the issuer DN, or %NULL if no          such part is present
             */
            get_issuer_part(part: string): string | null;
            /**
             * Get the raw DER data for the issuer DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw issuer
             */
            get_issuer_raw(): Uint8Array;
            /**
             * Get the key size in bits of the public key represented
             * by this certificate.
             * @returns The key size of the certificate.
             */
            get_key_size(): number;
            /**
             * Calculate a GMarkup string for displaying this certificate.
             * @returns the markup string
             */
            get_markup_text(): string;
            /**
             * Get the raw binary serial number of the certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns the raw binary serial number.
             */
            get_serial_number(): Uint8Array;
            /**
             * Get the serial number of the certificate as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns an allocated string containing the serial number as hex.
             */
            get_serial_number_hex(): string;
            /**
             * Get the common name of the subject of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject CN, or %NULL if no subject CN present.
             */
            get_subject_cn(): string;
            /**
             * Get the full subject DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject DN of the certificate.
             */
            get_subject_dn(): string;
            /**
             * Get a name to represent the subject of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated subject name, or %NULL if no subject name
             */
            get_subject_name(): string;
            /**
             * Get a part of the DN of the subject of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the subject DN, or %NULL if no          such part is present.
             */
            get_subject_part(part: string): string | null;
            /**
             * Get the raw DER data for the subject DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw subject
             */
            get_subject_raw(): Uint8Array;
            /**
             * Check if `issuer` could be the issuer of this certificate. This is done by
             * comparing the relevant subject and issuer fields. No signature check is
             * done. Proper verification of certificates must be done via a crypto
             * library.
             * @param issuer a possible issuer #GcrCertificate
             * @returns whether @issuer could be the issuer of the certificate.
             */
            is_issuer(issuer: Gcr.Certificate): boolean;
            /**
             * Implementers of the #GcrCertificate mixin should call this function to notify
             * when the certificate has changed to emit notifications on the various
             * properties.
             */
            mixin_emit_notify(): void;
            /**
             * Gets the raw DER data for an X.509 certificate.
             */
            vfunc_get_der_data(): Uint8Array;
            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             * @returns Zero if the two objects represent the same thing, non-zero if not.
             */
            compare(other?: Gcr.Comparable | null): number;
            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             */
            vfunc_compare(other?: Gcr.Comparable | null): number;
            /**
             * Emit the #GcrRenderer::data-changed signal on the renderer. This is used by
             * renderer implementations.
             */
            emit_data_changed(): void;
            /**
             * Get the PKCS#11 attributes, if any, set for this renderer to display.
             * @returns the attributes, owned by the renderer
             */
            get_attributes(): Gck.Attributes | null;
            /**
             * Called by #GcrViewer when about to display a popup menu for the content
             * displayed by the renderer. The renderer can add a menu item if desired.
             * @param viewer The viewer that is displaying a popup
             * @param menu The popup menu being displayed
             */
            popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            render_view(viewer: Viewer): void;
            /**
             * Set the PKCS#11 attributes for this renderer to display.
             * @param attrs attributes to set
             */
            set_attributes(attrs?: Gck.Attributes | null): void;
            /**
             * signal emitted when data being rendered changes
             */
            vfunc_data_changed(): void;
            /**
             * method invoked to populate a popup menu with additional
             *                  renderer options
             * @param viewer
             * @param menu
             */
            vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            vfunc_render_view(viewer: Viewer): void;
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

        module CertificateWidget {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Bin.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                attributes: Gck.Attributes;
                certificate: Gcr.Certificate;
            }
        }

        /**
         * A widget that can be used to display a certificate.
         *
         * A certificate widget is normally in a collapsed state showing only
         * details, but can be expanded by the user.
         *
         * Use [ctor`CertificateWidget`.new] to create a new certificate widget. Only
         * one certificate can be displayed. It contains a [iface`Viewer]` internally
         * and [class`CertificateRenderer]` is used to render the certificate to the
         * viewer.
         *
         * To show more than one certificate in a view, create the viewer and
         * add renderers to it.
         */
        class CertificateWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<CertificateWidget>;

            // Properties

            get attributes(): Gck.Attributes;
            set attributes(val: Gck.Attributes);
            get certificate(): Gcr.Certificate;
            set certificate(val: Gcr.Certificate);

            // Constructors

            constructor(properties?: Partial<CertificateWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](certificate?: Gcr.Certificate | null): CertificateWidget;

            // Methods

            /**
             * Get the attributes displayed in the widget. The attributes should contain
             * a certificate.
             * @returns the attributes, owned by the widget
             */
            get_attributes(): Gck.Attributes | null;
            /**
             * Get the certificate displayed in the widget.
             * @returns the certificate
             */
            get_certificate(): Gcr.Certificate | null;
            /**
             * Set the attributes displayed in the widget. The attributes should contain
             * a certificate.
             * @param attrs the attributes to display
             */
            set_attributes(attrs?: Gck.Attributes | null): void;
            /**
             * Set the certificate displayed in the widget
             * @param certificate the certificate to display
             */
            set_certificate(certificate?: Gcr.Certificate | null): void;

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

        module CollectionModel {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gtk.TreeModel.ConstructorProps,
                    Gtk.TreeSortable.ConstructorProps {
                collection: Gcr.Collection;
                columns: any;
            }
        }

        /**
         * Ain implementation of a [iface`Gtk`.TreeModel] which contains a row for each
         * object in a [iface`Gcr`.Collection].
         *
         * As objects are added or removed from the collection, rows are added and
         * removed from this model.
         *
         * The row values come from the properties of the objects in the collection. Use
         * [ctor`CollectionModel`.new] to create a new collection model. To have more
         * control over the values use a set of [struct`Gcr`.Column] structures to
         * define the columns. This can be done with [ctor`CollectionModel`.new_full] or
         * [method`CollectionModel`.set_columns].
         *
         * Each row can have a selected state, which is represented by a boolean column.
         * The selected state can be toggled with gcr_collection_model_toggle_selected()
         * or set with gcr_collection_model_set_selected_objects() and retrieved with
         * [method`CollectionModel`.get_selected_objects].
         *
         * To determine which object a row represents and vice versa, use the
         * [method`CollectionModel`.iter_for_object] or
         * [method`CollectionModel`.object_for_iter] functions.
         */
        class CollectionModel extends GObject.Object implements Gtk.TreeModel, Gtk.TreeSortable {
            static $gtype: GObject.GType<CollectionModel>;

            // Properties

            get collection(): Gcr.Collection;
            set collection(val: Gcr.Collection);
            get columns(): any;

            // Constructors

            constructor(properties?: Partial<CollectionModel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Set whether a given row is toggled selected or not.
             * @param iter The row
             * @param selected Whether the row should be selected or not.
             */
            change_selected(iter: Gtk.TreeIter, selected: boolean): void;
            /**
             * Get the column identifier for the column that contains the values
             * of the selected state.
             * @returns The column identifier.
             */
            column_for_selected(): number;
            /**
             * Get the collection which this model represents
             * @returns the collection, owned by the model
             */
            get_collection(): Gcr.Collection;
            /**
             * Get a list of checked/selected objects.
             * @returns a list of selected          objects, which should be freed with g_list_free()
             */
            get_selected_objects(): GObject.Object[];
            /**
             * Check whether a given row has been toggled as selected.
             * @param iter The row
             * @returns Whether the row has been selected.
             */
            is_selected(iter: Gtk.TreeIter): boolean;
            /**
             * Set `iter` to the row for the given object. If the object is not in this
             * model, then %FALSE will be returned.
             * @param object The object
             * @param iter The row for the object
             * @returns %TRUE if the object was present.
             */
            iter_for_object(object: GObject.Object, iter: Gtk.TreeIter): boolean;
            /**
             * Get the object that is represented by the given row in the model.
             * @param iter The row
             * @returns The object, owned by the model.
             */
            object_for_iter<T = GObject.Object>(iter: Gtk.TreeIter): T;
            /**
             * Set the collection which this model represents
             * @param collection the collection or %NULL
             */
            set_collection(collection?: Gcr.Collection | null): void;
            /**
             * Set the checked/selected objects.
             * @param selected a list of objects to select
             */
            set_selected_objects(selected: GObject.Object[]): void;
            /**
             * Toggle the selected state of a given row.
             * @param iter The row
             */
            toggle_selected(iter: Gtk.TreeIter): void;

            // Inherited methods
            /**
             * Creates a new #GtkTreeModel, with `child_model` as the child_model
             * and `root` as the virtual root.
             * @param root A #GtkTreePath or %NULL.
             * @returns A new #GtkTreeModel.
             */
            filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;
            /**
             * Calls func on each node in model in a depth-first fashion.
             *
             * If `func` returns %TRUE, then the tree ceases to be walked,
             * and gtk_tree_model_foreach() returns.
             * @param func a function to be called on each row
             */
            foreach(func: Gtk.TreeModelForeachFunc): void;
            /**
             * Returns the type of the column.
             * @param index_ the column index
             * @returns the type of the column
             */
            get_column_type(index_: number): GObject.GType;
            /**
             * Returns a set of flags supported by this interface.
             *
             * The flags are a bitwise combination of #GtkTreeModelFlags.
             * The flags supported should not change during the lifetime
             * of the `tree_model`.
             * @returns the flags supported by this interface
             */
            get_flags(): Gtk.TreeModelFlags;
            /**
             * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
             * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
             * @param path the #GtkTreePath-struct
             * @returns %TRUE, if @iter was set
             */
            get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
            /**
             * Initializes `iter` with the first iterator in the tree
             * (the one at the path "0") and returns %TRUE. Returns
             * %FALSE if the tree is empty.
             * @returns %TRUE, if @iter was set
             */
            get_iter_first(): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to a valid iterator pointing to `path_string,` if it
             * exists. Otherwise, `iter` is left invalid and %FALSE is returned.
             * @param path_string a string representation of a #GtkTreePath-struct
             * @returns %TRUE, if @iter was set
             */
            get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];
            /**
             * Returns the number of columns supported by `tree_model`.
             * @returns the number of columns
             */
            get_n_columns(): number;
            /**
             * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
             *
             * This path should be freed with gtk_tree_path_free().
             * @param iter the #GtkTreeIter-struct
             * @returns a newly-created #GtkTreePath-struct
             */
            get_path(iter: Gtk.TreeIter): Gtk.TreePath;
            /**
             * Generates a string representation of the iter.
             *
             * This string is a “:” separated list of numbers.
             * For example, “4:10:0:3” would be an acceptable
             * return value for this string.
             * @param iter a #GtkTreeIter-struct
             * @returns a newly-allocated string.     Must be freed with g_free().
             */
            get_string_from_iter(iter: Gtk.TreeIter): string;
            /**
             * Initializes and sets `value` to that at `column`.
             *
             * When done with `value,` g_value_unset() needs to be called
             * to free any allocated memory.
             * @param iter the #GtkTreeIter-struct
             * @param column the column to lookup the value at
             */
            get_value(iter: Gtk.TreeIter, column: number): unknown;
            /**
             * Sets `iter` to point to the first child of `parent`.
             *
             * If `parent` has no children, %FALSE is returned and `iter` is
             * set to be invalid. `parent` will remain a valid node after this
             * function has been called.
             *
             * If `parent` is %NULL returns the first node, equivalent to
             * `gtk_tree_model_get_iter_first (tree_model, iter);`
             * @param parent the #GtkTreeIter-struct, or %NULL
             * @returns %TRUE, if @iter has been set to the first child
             */
            iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
            /**
             * Returns %TRUE if `iter` has children, %FALSE otherwise.
             * @param iter the #GtkTreeIter-struct to test for children
             * @returns %TRUE if @iter has children
             */
            iter_has_child(iter: Gtk.TreeIter): boolean;
            /**
             * Returns the number of children that `iter` has.
             *
             * As a special case, if `iter` is %NULL, then the number
             * of toplevel nodes is returned.
             * @param iter the #GtkTreeIter-struct, or %NULL
             * @returns the number of children of @iter
             */
            iter_n_children(iter?: Gtk.TreeIter | null): number;
            /**
             * Sets `iter` to point to the node following it at the current level.
             *
             * If there is no next `iter,` %FALSE is returned and `iter` is set
             * to be invalid.
             * @param iter the #GtkTreeIter-struct
             * @returns %TRUE if @iter has been changed to the next node
             */
            iter_next(iter: Gtk.TreeIter): boolean;
            /**
             * Sets `iter` to be the child of `parent,` using the given index.
             *
             * The first index is 0. If `n` is too big, or `parent` has no children,
             * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
             * will remain a valid node after this function has been called. As a
             * special case, if `parent` is %NULL, then the `n-th` root node
             * is set.
             * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
             * @param n the index of the desired child
             * @returns %TRUE, if @parent has an @n-th child
             */
            iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to be the parent of `child`.
             *
             * If `child` is at the toplevel, and doesn’t have a parent, then
             * `iter` is set to an invalid iterator and %FALSE is returned.
             * `child` will remain a valid node after this function has been
             * called.
             *
             * `iter` will be initialized before the lookup is performed, so `child`
             * and `iter` cannot point to the same memory location.
             * @param child the #GtkTreeIter-struct
             * @returns %TRUE, if @iter is set to the parent of @child
             */
            iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to point to the previous node at the current level.
             *
             * If there is no previous `iter,` %FALSE is returned and `iter` is
             * set to be invalid.
             * @param iter the #GtkTreeIter-struct
             * @returns %TRUE if @iter has been changed to the previous node
             */
            iter_previous(iter: Gtk.TreeIter): boolean;
            /**
             * Lets the tree ref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons.
             *
             * This function is primarily meant as a way for views to let
             * caching models know when nodes are being displayed (and hence,
             * whether or not to cache that node). Being displayed means a node
             * is in an expanded branch, regardless of whether the node is currently
             * visible in the viewport. For example, a file-system based model
             * would not want to keep the entire file-hierarchy in memory,
             * just the sections that are currently being displayed by
             * every current view.
             *
             * A model should be expected to be able to get an iter independent
             * of its reffed state.
             * @param iter the #GtkTreeIter-struct
             */
            ref_node(iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
             *
             * This should be called by models after a row has been removed.
             * The location pointed to by `path` should be the location that
             * the row previously was at. It may not be a valid location anymore.
             *
             * Nodes that are deleted are not unreffed, this means that any
             * outstanding references on the deleted node should not be released.
             * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
             */
            row_deleted(path: Gtk.TreePath): void;
            /**
             * Emits the #GtkTreeModel::row-has-child-toggled signal on
             * `tree_model`. This should be called by models after the child
             * state of a node changes.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the inserted row
             * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
             */
            row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::rows-reordered signal on `tree_model`.
             *
             * This should be called by models when their rows have been
             * reordered.
             * @param path a #GtkTreePath-struct pointing to the tree node whose children     have been reordered
             * @param iter a valid #GtkTreeIter-struct pointing to the node     whose children have been reordered, or %NULL if the depth     of @path is 0
             * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. @new_order`[newpos] = oldpos`
             */
            rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;
            /**
             * Lets the tree unref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons. For more information on what
             * this means, see gtk_tree_model_ref_node().
             *
             * Please note that nodes that are deleted are not unreffed.
             * @param iter the #GtkTreeIter-struct
             */
            unref_node(iter: Gtk.TreeIter): void;
            /**
             * Returns the type of the column.
             * @param index_ the column index
             */
            vfunc_get_column_type(index_: number): GObject.GType;
            /**
             * Returns a set of flags supported by this interface.
             *
             * The flags are a bitwise combination of #GtkTreeModelFlags.
             * The flags supported should not change during the lifetime
             * of the `tree_model`.
             */
            vfunc_get_flags(): Gtk.TreeModelFlags;
            /**
             * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
             * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
             * @param path the #GtkTreePath-struct
             */
            vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
            /**
             * Returns the number of columns supported by `tree_model`.
             */
            vfunc_get_n_columns(): number;
            /**
             * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
             *
             * This path should be freed with gtk_tree_path_free().
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;
            /**
             * Initializes and sets `value` to that at `column`.
             *
             * When done with `value,` g_value_unset() needs to be called
             * to free any allocated memory.
             * @param iter the #GtkTreeIter-struct
             * @param column the column to lookup the value at
             */
            vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;
            /**
             * Sets `iter` to point to the first child of `parent`.
             *
             * If `parent` has no children, %FALSE is returned and `iter` is
             * set to be invalid. `parent` will remain a valid node after this
             * function has been called.
             *
             * If `parent` is %NULL returns the first node, equivalent to
             * `gtk_tree_model_get_iter_first (tree_model, iter);`
             * @param parent the #GtkTreeIter-struct, or %NULL
             */
            vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
            /**
             * Returns %TRUE if `iter` has children, %FALSE otherwise.
             * @param iter the #GtkTreeIter-struct to test for children
             */
            vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;
            /**
             * Returns the number of children that `iter` has.
             *
             * As a special case, if `iter` is %NULL, then the number
             * of toplevel nodes is returned.
             * @param iter the #GtkTreeIter-struct, or %NULL
             */
            vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;
            /**
             * Sets `iter` to point to the node following it at the current level.
             *
             * If there is no next `iter,` %FALSE is returned and `iter` is set
             * to be invalid.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_iter_next(iter: Gtk.TreeIter): boolean;
            /**
             * Sets `iter` to be the child of `parent,` using the given index.
             *
             * The first index is 0. If `n` is too big, or `parent` has no children,
             * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
             * will remain a valid node after this function has been called. As a
             * special case, if `parent` is %NULL, then the `n-th` root node
             * is set.
             * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
             * @param n the index of the desired child
             */
            vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to be the parent of `child`.
             *
             * If `child` is at the toplevel, and doesn’t have a parent, then
             * `iter` is set to an invalid iterator and %FALSE is returned.
             * `child` will remain a valid node after this function has been
             * called.
             *
             * `iter` will be initialized before the lookup is performed, so `child`
             * and `iter` cannot point to the same memory location.
             * @param child the #GtkTreeIter-struct
             */
            vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to point to the previous node at the current level.
             *
             * If there is no previous `iter,` %FALSE is returned and `iter` is
             * set to be invalid.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_iter_previous(iter: Gtk.TreeIter): boolean;
            /**
             * Lets the tree ref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons.
             *
             * This function is primarily meant as a way for views to let
             * caching models know when nodes are being displayed (and hence,
             * whether or not to cache that node). Being displayed means a node
             * is in an expanded branch, regardless of whether the node is currently
             * visible in the viewport. For example, a file-system based model
             * would not want to keep the entire file-hierarchy in memory,
             * just the sections that are currently being displayed by
             * every current view.
             *
             * A model should be expected to be able to get an iter independent
             * of its reffed state.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_ref_node(iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
             *
             * This should be called by models after a row has been removed.
             * The location pointed to by `path` should be the location that
             * the row previously was at. It may not be a valid location anymore.
             *
             * Nodes that are deleted are not unreffed, this means that any
             * outstanding references on the deleted node should not be released.
             * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
             */
            vfunc_row_deleted(path: Gtk.TreePath): void;
            /**
             * Emits the #GtkTreeModel::row-has-child-toggled signal on
             * `tree_model`. This should be called by models after the child
             * state of a node changes.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the inserted row
             * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
             */
            vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Lets the tree unref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons. For more information on what
             * this means, see gtk_tree_model_ref_node().
             *
             * Please note that nodes that are deleted are not unreffed.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_unref_node(iter: Gtk.TreeIter): void;
            /**
             * Fills in `sort_column_id` and `order` with the current sort column and the
             * order. It returns %TRUE unless the `sort_column_id` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID or
             * %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID.
             * @returns %TRUE if the sort column is not one of the special sort   column ids.
             */
            get_sort_column_id(): [boolean, number, Gtk.SortType];
            /**
             * Returns %TRUE if the model has a default sort function. This is used
             * primarily by GtkTreeViewColumns in order to determine if a model can
             * go back to the default state, or not.
             * @returns %TRUE, if the model has a default sort function
             */
            has_default_sort_func(): boolean;
            /**
             * Sets the default comparison function used when sorting to be `sort_func`.
             * If the current sort column id of `sortable` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, then the model will sort using
             * this function.
             *
             * If `sort_func` is %NULL, then there will be no default comparison function.
             * This means that once the model  has been sorted, it can’t go back to the
             * default state. In this case, when the current sort column id of `sortable`
             * is %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, the model will be unsorted.
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
            /**
             * Sets the current sort column to be `sort_column_id`. The `sortable` will
             * resort itself to reflect this change, after emitting a
             * #GtkTreeSortable::sort-column-changed signal. `sort_column_id` may either be
             * a regular column id, or one of the following special values:
             *
             * - %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: the default sort function
             *   will be used, if it is set
             *
             * - %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: no sorting will occur
             * @param sort_column_id the sort column id to set
             * @param order The sort order of the column
             */
            set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;
            /**
             * Sets the comparison function used when sorting to be `sort_func`. If the
             * current sort column id of `sortable` is the same as `sort_column_id,` then
             * the model will sort using this function.
             * @param sort_column_id the sort column id to set the function for
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            set_sort_func(
                sort_column_id: number,
                sort_func: Gtk.TreeIterCompareFunc,
                destroy?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Emits a #GtkTreeSortable::sort-column-changed signal on `sortable`.
             */
            sort_column_changed(): void;
            /**
             * Fills in `sort_column_id` and `order` with the current sort column and the
             * order. It returns %TRUE unless the `sort_column_id` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID or
             * %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID.
             */
            vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];
            /**
             * Returns %TRUE if the model has a default sort function. This is used
             * primarily by GtkTreeViewColumns in order to determine if a model can
             * go back to the default state, or not.
             */
            vfunc_has_default_sort_func(): boolean;
            /**
             * Sets the default comparison function used when sorting to be `sort_func`.
             * If the current sort column id of `sortable` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, then the model will sort using
             * this function.
             *
             * If `sort_func` is %NULL, then there will be no default comparison function.
             * This means that once the model  has been sorted, it can’t go back to the
             * default state. In this case, when the current sort column id of `sortable`
             * is %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, the model will be unsorted.
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
            /**
             * Sets the current sort column to be `sort_column_id`. The `sortable` will
             * resort itself to reflect this change, after emitting a
             * #GtkTreeSortable::sort-column-changed signal. `sort_column_id` may either be
             * a regular column id, or one of the following special values:
             *
             * - %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: the default sort function
             *   will be used, if it is set
             *
             * - %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: no sorting will occur
             * @param sort_column_id the sort column id to set
             * @param order The sort order of the column
             */
            vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;
            /**
             * Sets the comparison function used when sorting to be `sort_func`. If the
             * current sort column id of `sortable` is the same as `sort_column_id,` then
             * the model will sort using this function.
             * @param sort_column_id the sort column id to set the function for
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            vfunc_set_sort_func(
                sort_column_id: number,
                sort_func: Gtk.TreeIterCompareFunc,
                destroy?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Emits a #GtkTreeSortable::sort-column-changed signal on `sortable`.
             */
            vfunc_sort_column_changed(): void;
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

        module ComboSelector {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.ComboBox.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.CellEditable.ConstructorProps,
                    Gtk.CellLayout.ConstructorProps {
                collection: Gcr.Collection;
            }
        }

        /**
         * A widget that can be used to select a certificate or key. It allows
         * the user to select one object from the selector at a time.
         */
        class ComboSelector
            extends Gtk.ComboBox
            implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout
        {
            static $gtype: GObject.GType<ComboSelector>;

            // Properties

            /**
             * The collection which contains the objects to display in the selector.
             */
            get collection(): Gcr.Collection;

            // Constructors

            constructor(properties?: Partial<ComboSelector.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](collection: Gcr.Collection): ComboSelector;
            // Conflicted with Gtk.ComboBox.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Get the collection that this selector is displaying objects from.
             * @returns The collection, owned by the selector.
             */
            get_collection(): Gcr.Collection;
            /**
             * Get the selected object in the selector, or %NULL if nothing selected.
             * @returns the selected object, owned by the selector, or %NULL
             */
            get_selected<T = GObject.Object>(): T;
            /**
             * Set the currently selected object in the selector, or clear the selection
             * if selected is set to %NULL.
             * @param selected the object to select or %NULL
             */
            set_selected(selected?: GObject.Object | null): void;

            // Inherited properties
            /**
             * Indicates whether editing on the cell has been canceled.
             */
            get editing_canceled(): boolean;
            set editing_canceled(val: boolean);
            /**
             * Indicates whether editing on the cell has been canceled.
             */
            get editingCanceled(): boolean;
            set editingCanceled(val: boolean);
            get app_paintable(): boolean;
            set app_paintable(val: boolean);
            get appPaintable(): boolean;
            set appPaintable(val: boolean);
            get can_default(): boolean;
            set can_default(val: boolean);
            get canDefault(): boolean;
            set canDefault(val: boolean);
            get can_focus(): boolean;
            set can_focus(val: boolean);
            get canFocus(): boolean;
            set canFocus(val: boolean);
            get composite_child(): boolean;
            get compositeChild(): boolean;
            /**
             * Whether the widget is double buffered.
             */
            get double_buffered(): boolean;
            set double_buffered(val: boolean);
            /**
             * Whether the widget is double buffered.
             */
            get doubleBuffered(): boolean;
            set doubleBuffered(val: boolean);
            get events(): Gdk.EventMask;
            set events(val: Gdk.EventMask);
            /**
             * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
             */
            get expand(): boolean;
            set expand(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             *
             * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
             * GtkComboBox) implemented this property individually.
             */
            get focus_on_click(): boolean;
            set focus_on_click(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             *
             * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
             * GtkComboBox) implemented this property individually.
             */
            get focusOnClick(): boolean;
            set focusOnClick(val: boolean);
            /**
             * How to distribute horizontal space if widget gets extra space, see #GtkAlign
             */
            get halign(): Gtk.Align;
            set halign(val: Gtk.Align);
            get has_default(): boolean;
            set has_default(val: boolean);
            get hasDefault(): boolean;
            set hasDefault(val: boolean);
            get has_focus(): boolean;
            set has_focus(val: boolean);
            get hasFocus(): boolean;
            set hasFocus(val: boolean);
            /**
             * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using #GtkWidget::query-tooltip to determine
             * whether it will provide a tooltip or not.
             *
             * Note that setting this property to %TRUE for the first time will change
             * the event masks of the GdkWindows of this widget to include leave-notify
             * and motion-notify events.  This cannot and will not be undone when the
             * property is set to %FALSE again.
             */
            get has_tooltip(): boolean;
            set has_tooltip(val: boolean);
            /**
             * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using #GtkWidget::query-tooltip to determine
             * whether it will provide a tooltip or not.
             *
             * Note that setting this property to %TRUE for the first time will change
             * the event masks of the GdkWindows of this widget to include leave-notify
             * and motion-notify events.  This cannot and will not be undone when the
             * property is set to %FALSE again.
             */
            get hasTooltip(): boolean;
            set hasTooltip(val: boolean);
            get height_request(): number;
            set height_request(val: number);
            get heightRequest(): number;
            set heightRequest(val: number);
            /**
             * Whether to expand horizontally. See gtk_widget_set_hexpand().
             */
            get hexpand(): boolean;
            set hexpand(val: boolean);
            /**
             * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
             */
            get hexpand_set(): boolean;
            set hexpand_set(val: boolean);
            /**
             * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
             */
            get hexpandSet(): boolean;
            set hexpandSet(val: boolean);
            get is_focus(): boolean;
            set is_focus(val: boolean);
            get isFocus(): boolean;
            set isFocus(val: boolean);
            /**
             * Sets all four sides' margin at once. If read, returns max
             * margin on any side.
             */
            get margin(): number;
            set margin(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_bottom(): number;
            set margin_bottom(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginBottom(): number;
            set marginBottom(val: number);
            /**
             * Margin on end of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_end(): number;
            set margin_end(val: number);
            /**
             * Margin on end of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginEnd(): number;
            set marginEnd(val: number);
            /**
             * Margin on left side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_left(): number;
            set margin_left(val: number);
            /**
             * Margin on left side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginLeft(): number;
            set marginLeft(val: number);
            /**
             * Margin on right side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_right(): number;
            set margin_right(val: number);
            /**
             * Margin on right side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginRight(): number;
            set marginRight(val: number);
            /**
             * Margin on start of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_start(): number;
            set margin_start(val: number);
            /**
             * Margin on start of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginStart(): number;
            set marginStart(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_top(): number;
            set margin_top(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginTop(): number;
            set marginTop(val: number);
            get name(): string;
            set name(val: string);
            get no_show_all(): boolean;
            set no_show_all(val: boolean);
            get noShowAll(): boolean;
            set noShowAll(val: boolean);
            /**
             * The requested opacity of the widget. See gtk_widget_set_opacity() for
             * more details about window opacity.
             *
             * Before 3.8 this was only available in GtkWindow
             */
            get opacity(): number;
            set opacity(val: number);
            get parent(): Gtk.Container;
            set parent(val: Gtk.Container);
            get receives_default(): boolean;
            set receives_default(val: boolean);
            get receivesDefault(): boolean;
            set receivesDefault(val: boolean);
            /**
             * The scale factor of the widget. See gtk_widget_get_scale_factor() for
             * more details about widget scaling.
             */
            get scale_factor(): number;
            /**
             * The scale factor of the widget. See gtk_widget_get_scale_factor() for
             * more details about widget scaling.
             */
            get scaleFactor(): number;
            get sensitive(): boolean;
            set sensitive(val: boolean);
            /**
             * The style of the widget, which contains information about how it will look (colors, etc).
             */
            get style(): Gtk.Style;
            set style(val: Gtk.Style);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with the [Pango text markup language][PangoMarkupFormat].
             * Also see gtk_tooltip_set_markup().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltip_markup(): string;
            set tooltip_markup(val: string);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with the [Pango text markup language][PangoMarkupFormat].
             * Also see gtk_tooltip_set_markup().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltipMarkup(): string;
            set tooltipMarkup(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see gtk_tooltip_set_text().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltip_text(): string;
            set tooltip_text(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see gtk_tooltip_set_text().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltipText(): string;
            set tooltipText(val: string);
            /**
             * How to distribute vertical space if widget gets extra space, see #GtkAlign
             */
            get valign(): Gtk.Align;
            set valign(val: Gtk.Align);
            /**
             * Whether to expand vertically. See gtk_widget_set_vexpand().
             */
            get vexpand(): boolean;
            set vexpand(val: boolean);
            /**
             * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
             */
            get vexpand_set(): boolean;
            set vexpand_set(val: boolean);
            /**
             * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
             */
            get vexpandSet(): boolean;
            set vexpandSet(val: boolean);
            get visible(): boolean;
            set visible(val: boolean);
            get width_request(): number;
            set width_request(val: number);
            get widthRequest(): number;
            set widthRequest(val: number);
            /**
             * The widget's window if it is realized, %NULL otherwise.
             */
            get window(): Gdk.Window;

            // Inherited methods
            /**
             * Emits the #GtkCellEditable::editing-done signal.
             */
            editing_done(): void;
            /**
             * Emits the #GtkCellEditable::remove-widget signal.
             */
            remove_widget(): void;
            /**
             * Begins editing on a `cell_editable`.
             *
             * The #GtkCellRenderer for the cell creates and returns a #GtkCellEditable from
             * gtk_cell_renderer_start_editing(), configured for the #GtkCellRenderer type.
             *
             * gtk_cell_editable_start_editing() can then set up `cell_editable` suitably for
             * editing a cell, e.g. making the Esc key emit #GtkCellEditable::editing-done.
             *
             * Note that the `cell_editable` is created on-demand for the current edit; its
             * lifetime is temporary and does not persist across other edits and/or cells.
             * @param event The #GdkEvent that began the editing process, or   %NULL if editing was initiated programmatically
             */
            start_editing(event?: Gdk.Event | null): void;
            /**
             * Emits the #GtkCellEditable::editing-done signal.
             */
            vfunc_editing_done(): void;
            /**
             * Emits the #GtkCellEditable::remove-widget signal.
             */
            vfunc_remove_widget(): void;
            /**
             * Begins editing on a `cell_editable`.
             *
             * The #GtkCellRenderer for the cell creates and returns a #GtkCellEditable from
             * gtk_cell_renderer_start_editing(), configured for the #GtkCellRenderer type.
             *
             * gtk_cell_editable_start_editing() can then set up `cell_editable` suitably for
             * editing a cell, e.g. making the Esc key emit #GtkCellEditable::editing-done.
             *
             * Note that the `cell_editable` is created on-demand for the current edit; its
             * lifetime is temporary and does not persist across other edits and/or cells.
             * @param event The #GdkEvent that began the editing process, or   %NULL if editing was initiated programmatically
             */
            vfunc_start_editing(event?: Gdk.Event | null): void;
            /**
             * Adds an attribute mapping to the list in `cell_layout`.
             *
             * The `column` is the column of the model to get a value from, and the
             * `attribute` is the parameter on `cell` to be set from the value. So for
             * example if column 2 of the model contains strings, you could have the
             * “text” attribute of a #GtkCellRendererText get its values from column 2.
             * @param cell a #GtkCellRenderer
             * @param attribute an attribute on the renderer
             * @param column the column position on the model to get the attribute from
             */
            add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;
            /**
             * Unsets all the mappings on all renderers on `cell_layout` and
             * removes all renderers from `cell_layout`.
             */
            clear(): void;
            /**
             * Clears all existing attributes previously set with
             * gtk_cell_layout_set_attributes().
             * @param cell a #GtkCellRenderer to clear the attribute mapping on
             */
            clear_attributes(cell: Gtk.CellRenderer): void;
            /**
             * Returns the underlying #GtkCellArea which might be `cell_layout`
             * if called on a #GtkCellArea or might be %NULL if no #GtkCellArea
             * is used by `cell_layout`.
             * @returns the cell area used by @cell_layout, or %NULL in case no cell area is used.
             */
            get_area(): Gtk.CellArea | null;
            /**
             * Returns the cell renderers which have been added to `cell_layout`.
             * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with g_list_free()     when no longer needed.
             */
            get_cells(): Gtk.CellRenderer[];
            /**
             * Adds the `cell` to the end of `cell_layout`. If `expand` is %FALSE, then the
             * `cell` is allocated no more space than it needs. Any unused space is
             * divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            pack_end(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Packs the `cell` into the beginning of `cell_layout`. If `expand` is %FALSE,
             * then the `cell` is allocated no more space than it needs. Any unused space
             * is divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            pack_start(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Re-inserts `cell` at `position`.
             *
             * Note that `cell` has already to be packed into `cell_layout`
             * for this to function properly.
             * @param cell a #GtkCellRenderer to reorder
             * @param position new position to insert @cell at
             */
            reorder(cell: Gtk.CellRenderer, position: number): void;
            /**
             * Sets the #GtkCellLayoutDataFunc to use for `cell_layout`.
             *
             * This function is used instead of the standard attributes mapping
             * for setting the column value, and should set the value of `cell_layout’`s
             * cell renderer(s) as appropriate.
             *
             * `func` may be %NULL to remove a previously set function.
             * @param cell a #GtkCellRenderer
             * @param func the #GtkCellLayoutDataFunc to use, or %NULL
             */
            set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;
            /**
             * Adds an attribute mapping to the list in `cell_layout`.
             *
             * The `column` is the column of the model to get a value from, and the
             * `attribute` is the parameter on `cell` to be set from the value. So for
             * example if column 2 of the model contains strings, you could have the
             * “text” attribute of a #GtkCellRendererText get its values from column 2.
             * @param cell a #GtkCellRenderer
             * @param attribute an attribute on the renderer
             * @param column the column position on the model to get the attribute from
             */
            vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;
            /**
             * Unsets all the mappings on all renderers on `cell_layout` and
             * removes all renderers from `cell_layout`.
             */
            vfunc_clear(): void;
            /**
             * Clears all existing attributes previously set with
             * gtk_cell_layout_set_attributes().
             * @param cell a #GtkCellRenderer to clear the attribute mapping on
             */
            vfunc_clear_attributes(cell: Gtk.CellRenderer): void;
            /**
             * Returns the underlying #GtkCellArea which might be `cell_layout`
             * if called on a #GtkCellArea or might be %NULL if no #GtkCellArea
             * is used by `cell_layout`.
             */
            vfunc_get_area(): Gtk.CellArea | null;
            /**
             * Returns the cell renderers which have been added to `cell_layout`.
             */
            vfunc_get_cells(): Gtk.CellRenderer[];
            /**
             * Adds the `cell` to the end of `cell_layout`. If `expand` is %FALSE, then the
             * `cell` is allocated no more space than it needs. Any unused space is
             * divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Packs the `cell` into the beginning of `cell_layout`. If `expand` is %FALSE,
             * then the `cell` is allocated no more space than it needs. Any unused space
             * is divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Re-inserts `cell` at `position`.
             *
             * Note that `cell` has already to be packed into `cell_layout`
             * for this to function properly.
             * @param cell a #GtkCellRenderer to reorder
             * @param position new position to insert @cell at
             */
            vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;
            /**
             * Sets the #GtkCellLayoutDataFunc to use for `cell_layout`.
             *
             * This function is used instead of the standard attributes mapping
             * for setting the column value, and should set the value of `cell_layout’`s
             * cell renderer(s) as appropriate.
             *
             * `func` may be %NULL to remove a previously set function.
             * @param cell a #GtkCellRenderer
             * @param func the #GtkCellLayoutDataFunc to use, or %NULL
             */
            vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;
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
             * For widgets that can be “activated” (buttons, menu items, etc.)
             * this function activates them. Activation is what happens when you
             * press Enter on a widget during key navigation. If `widget` isn't
             * activatable, the function returns %FALSE.
             * @returns %TRUE if the widget was activatable
             */
            activate(): boolean;
            /**
             * Installs an accelerator for this `widget` in `accel_group` that causes
             * `accel_signal` to be emitted if the accelerator is activated.
             * The `accel_group` needs to be added to the widget’s toplevel via
             * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
             * Accelerators added through this function are not user changeable during
             * runtime. If you want to support accelerators that can be changed by the
             * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
             * gtk_menu_item_set_accel_path() instead.
             * @param accel_signal widget signal to emit on accelerator activation
             * @param accel_group accel group for this widget, added to its toplevel
             * @param accel_key GDK keyval of the accelerator
             * @param accel_mods modifier key combination of the accelerator
             * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
             */
            add_accelerator(
                accel_signal: string,
                accel_group: Gtk.AccelGroup,
                accel_key: number,
                accel_mods: Gdk.ModifierType,
                accel_flags: Gtk.AccelFlags,
            ): void;
            /**
             * Adds the device events in the bitfield `events` to the event mask for
             * `widget`. See gtk_widget_set_device_events() for details.
             * @param device a #GdkDevice
             * @param events an event mask, see #GdkEventMask
             */
            add_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
            /**
             * Adds the events in the bitfield `events` to the event mask for
             * `widget`. See gtk_widget_set_events() and the
             * [input handling overview][event-masks] for details.
             * @param events an event mask, see #GdkEventMask
             */
            add_events(events: number): void;
            /**
             * Adds a widget to the list of mnemonic labels for
             * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
             * list of mnemonic labels for the widget is cleared when the
             * widget is destroyed, so the caller must make sure to update
             * its internal state at this point as well, by using a connection
             * to the #GtkWidget::destroy signal or a weak notifier.
             * @param label a #GtkWidget that acts as a mnemonic label for @widget
             */
            add_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Queues an animation frame update and adds a callback to be called
             * before each frame. Until the tick callback is removed, it will be
             * called frequently (usually at the frame rate of the output device
             * or as quickly as the application can be repainted, whichever is
             * slower). For this reason, is most suitable for handling graphics
             * that change every frame or every few frames. The tick callback does
             * not automatically imply a relayout or repaint. If you want a
             * repaint or relayout, and aren’t changing widget properties that
             * would trigger that (for example, changing the text of a #GtkLabel),
             * then you will have to call gtk_widget_queue_resize() or
             * gtk_widget_queue_draw_area() yourself.
             *
             * gdk_frame_clock_get_frame_time() should generally be used for timing
             * continuous animations and
             * gdk_frame_timings_get_predicted_presentation_time() if you are
             * trying to display isolated frames at particular times.
             *
             * This is a more convenient alternative to connecting directly to the
             * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
             * have to worry about when a #GdkFrameClock is assigned to a widget.
             * @param callback function to call for updating animations
             * @returns an id for the connection of this callback. Remove the callback     by passing it to gtk_widget_remove_tick_callback()
             */
            add_tick_callback(callback: Gtk.TickCallback): number;
            /**
             * Determines whether an accelerator that activates the signal
             * identified by `signal_id` can currently be activated.
             * This is done by emitting the #GtkWidget::can-activate-accel
             * signal on `widget;` if the signal isn’t overridden by a
             * handler or in a derived widget, then the default check is
             * that the widget must be sensitive, and the widget and all
             * its ancestors mapped.
             * @param signal_id the ID of a signal installed on @widget
             * @returns %TRUE if the accelerator can be activated.
             */
            can_activate_accel(signal_id: number): boolean;
            /**
             * This function is used by custom widget implementations; if you're
             * writing an app, you’d use gtk_widget_grab_focus() to move the focus
             * to a particular widget, and gtk_container_set_focus_chain() to
             * change the focus tab order. So you may want to investigate those
             * functions instead.
             *
             * gtk_widget_child_focus() is called by containers as the user moves
             * around the window using keyboard shortcuts. `direction` indicates
             * what kind of motion is taking place (up, down, left, right, tab
             * forward, tab backward). gtk_widget_child_focus() emits the
             * #GtkWidget::focus signal; widgets override the default handler
             * for this signal in order to implement appropriate focus behavior.
             *
             * The default ::focus handler for a widget should return %TRUE if
             * moving in `direction` left the focus on a focusable location inside
             * that widget, and %FALSE if moving in `direction` moved the focus
             * outside the widget. If returning %TRUE, widgets normally
             * call gtk_widget_grab_focus() to place the focus accordingly;
             * if returning %FALSE, they don’t modify the current focus location.
             * @param direction direction of focus movement
             * @returns %TRUE if focus ended up inside @widget
             */
            child_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Emits a #GtkWidget::child-notify signal for the
             * [child property][child-properties] `child_property`
             * on `widget`.
             *
             * This is the analogue of g_object_notify() for child properties.
             *
             * Also see gtk_container_child_notify().
             * @param child_property the name of a child property installed on the                  class of @widget’s parent
             */
            child_notify(child_property: string): void;
            // Conflicted with Gtk.Container.child_notify
            child_notify(...args: never[]): any;
            /**
             * Same as gtk_widget_path(), but always uses the name of a widget’s type,
             * never uses a custom name set with gtk_widget_set_name().
             */
            class_path(): [number, string, string];
            /**
             * Computes whether a container should give this widget extra space
             * when possible. Containers should check this, rather than
             * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
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
             * Creates a new #PangoContext with the appropriate font map,
             * font options, font description, and base direction for drawing
             * text for this widget. See also gtk_widget_get_pango_context().
             * @returns the new #PangoContext
             */
            create_pango_context(): Pango.Context;
            /**
             * Creates a new #PangoLayout with the appropriate font map,
             * font description, and base direction for drawing text for
             * this widget.
             *
             * If you keep a #PangoLayout created in this way around, you need
             * to re-create it when the widget #PangoContext is replaced.
             * This can be tracked by using the #GtkWidget::screen-changed signal
             * on the widget.
             * @param text text to set on the layout (can be %NULL)
             * @returns the new #PangoLayout
             */
            create_pango_layout(text?: string | null): Pango.Layout;
            /**
             * Destroys a widget.
             *
             * When a widget is destroyed all references it holds on other objects
             * will be released:
             *
             *  - if the widget is inside a container, it will be removed from its
             *  parent
             *  - if the widget is a container, all its children will be destroyed,
             *  recursively
             *  - if the widget is a top level, it will be removed from the list
             *  of top level widgets that GTK+ maintains internally
             *
             * It's expected that all references held on the widget will also
             * be released; you should connect to the #GtkWidget::destroy signal
             * if you hold a reference to `widget` and you wish to remove it when
             * this function is called. It is not necessary to do so if you are
             * implementing a #GtkContainer, as you'll be able to use the
             * #GtkContainerClass.remove() virtual function for that.
             *
             * It's important to notice that gtk_widget_destroy() will only cause
             * the `widget` to be finalized if no additional references, acquired
             * using g_object_ref(), are held on it. In case additional references
             * are in place, the `widget` will be in an "inert" state after calling
             * this function; `widget` will still point to valid memory, allowing you
             * to release the references you hold, but you may not query the widget's
             * own state.
             *
             * You should typically call this function on top level widgets, and
             * rarely on child widgets.
             *
             * See also: gtk_container_remove()
             */
            destroy(): void;
            /**
             * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
             * %NULL.  It’s intended to be used as a callback connected to the
             * “destroy” signal of a widget. You connect gtk_widget_destroyed()
             * as a signal handler, and pass the address of your widget variable
             * as user data. Then when the widget is destroyed, the variable will
             * be set to %NULL. Useful for example to avoid multiple copies
             * of the same dialog.
             * @param widget_pointer address of a variable that contains @widget
             */
            destroyed(widget_pointer: Gtk.Widget): Gtk.Widget;
            /**
             * Returns %TRUE if `device` has been shadowed by a GTK+
             * device grab on another widget, so it would stop sending
             * events to `widget`. This may be used in the
             * #GtkWidget::grab-notify signal to check for specific
             * devices. See gtk_device_grab_add().
             * @param device a #GdkDevice
             * @returns %TRUE if there is an ongoing grab on @device          by another #GtkWidget than @widget.
             */
            device_is_shadowed(device: Gdk.Device): boolean;
            /**
             * This function is equivalent to gtk_drag_begin_with_coordinates(),
             * passing -1, -1 as coordinates.
             * @param targets The targets (data formats) in which the    source can provide the data
             * @param actions A bitmask of the allowed drag actions for this drag
             * @param button The button the user clicked to start the drag
             * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
             * @returns the context for this drag
             */
            drag_begin(
                targets: Gtk.TargetList,
                actions: Gdk.DragAction,
                button: number,
                event?: Gdk.Event | null,
            ): Gdk.DragContext;
            /**
             * Initiates a drag on the source side. The function only needs to be used
             * when the application is starting drags itself, and is not needed when
             * gtk_drag_source_set() is used.
             *
             * The `event` is used to retrieve the timestamp that will be used internally to
             * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
             * However, you should try to pass a real event in all cases, since that can be
             * used to get information about the drag.
             *
             * Generally there are three cases when you want to start a drag by hand by
             * calling this function:
             *
             * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
             * immediately when the user presses the mouse button.  Pass the `event`
             * that you have in your #GtkWidget::button-press-event handler.
             *
             * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
             * when the mouse moves past a certain threshold distance after a button-press.
             * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
             *
             * 3. During a timeout handler, if you want to start a drag after the mouse
             * button is held down for some time.  Try to save the last event that you got
             * from the mouse, using gdk_event_copy(), and pass it to this function
             * (remember to free the event with gdk_event_free() when you are done).
             * If you really cannot pass a real event, pass %NULL instead.
             * @param targets The targets (data formats) in which the    source can provide the data
             * @param actions A bitmask of the allowed drag actions for this drag
             * @param button The button the user clicked to start the drag
             * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
             * @param x The initial x coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
             * @param y The initial y coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
             * @returns the context for this drag
             */
            drag_begin_with_coordinates(
                targets: Gtk.TargetList,
                actions: Gdk.DragAction,
                button: number,
                event: Gdk.Event | null,
                x: number,
                y: number,
            ): Gdk.DragContext;
            /**
             * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
             * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
             * should trigger the beginning of a drag-and-drop operation.
             * @param start_x X coordinate of start of drag
             * @param start_y Y coordinate of start of drag
             * @param current_x current X coordinate
             * @param current_y current Y coordinate
             * @returns %TRUE if the drag threshold has been passed.
             */
            drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
            /**
             * Add the image targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_image_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_image_targets(): void;
            /**
             * Add the text targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_text_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_text_targets(): void;
            /**
             * Add the URI targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_uri_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_uri_targets(): void;
            /**
             * Looks for a match between the supported targets of `context` and the
             * `dest_target_list,` returning the first matching target, otherwise
             * returning %GDK_NONE. `dest_target_list` should usually be the return
             * value from gtk_drag_dest_get_target_list(), but some widgets may
             * have different valid targets for different parts of the widget; in
             * that case, they will have to implement a drag_motion handler that
             * passes the correct target list to this function.
             * @param context drag context
             * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (@widget).
             * @returns first target that the source offers     and the dest can accept, or %GDK_NONE
             */
            drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom;
            /**
             * Returns the list of targets this widget can accept from
             * drag-and-drop.
             * @returns the #GtkTargetList, or %NULL if none
             */
            drag_dest_get_target_list(): Gtk.TargetList | null;
            /**
             * Returns whether the widget has been configured to always
             * emit #GtkWidget::drag-motion signals.
             * @returns %TRUE if the widget always emits   #GtkWidget::drag-motion events
             */
            drag_dest_get_track_motion(): boolean;
            /**
             * Sets a widget as a potential drop destination, and adds default behaviors.
             *
             * The default behaviors listed in `flags` have an effect similar
             * to installing default handlers for the widget’s drag-and-drop signals
             * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
             * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
             * sufficient to connect to the widget’s #GtkWidget::drag-data-received
             * signal to get primitive, but consistent drag-and-drop support.
             *
             * Things become more complicated when you try to preview the dragged data,
             * as described in the documentation for #GtkWidget::drag-motion. The default
             * behaviors described by `flags` make some assumptions, that can conflict
             * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
             * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
             * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
             * Especially the later is dramatic, when your own #GtkWidget::drag-motion
             * handler calls gtk_drag_get_data() to inspect the dragged data.
             *
             * There’s no way to set a default action here, you can use the
             * #GtkWidget::drag-motion callback for that. Here’s an example which selects
             * the action to use depending on whether the control key is pressed or not:
             *
             * ```c
             * static void
             * drag_motion (GtkWidget *widget,
             *              GdkDragContext *context,
             *              gint x,
             *              gint y,
             *              guint time)
             * {
             *   GdkModifierType mask;
             *
             *   gdk_window_get_pointer (gtk_widget_get_window (widget),
             *                           NULL, NULL, &mask);
             *   if (mask & GDK_CONTROL_MASK)
             *     gdk_drag_status (context, GDK_ACTION_COPY, time);
             *   else
             *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
             * }
             * ```
             *
             * @param flags which types of default drag behavior to use
             * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this @widget will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
             * @param actions a bitmask of possible actions for a drop onto this @widget.
             */
            drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void;
            /**
             * Sets this widget as a proxy for drops to another window.
             * @param proxy_window the window to which to forward drag events
             * @param protocol the drag protocol which the @proxy_window accepts   (You can use gdk_drag_get_protocol() to determine this)
             * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
             */
            drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void;
            /**
             * Sets the target types that this widget can accept from drag-and-drop.
             * The widget must first be made into a drag destination with
             * gtk_drag_dest_set().
             * @param target_list list of droppable targets, or %NULL for none
             */
            drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void;
            /**
             * Tells the widget to emit #GtkWidget::drag-motion and
             * #GtkWidget::drag-leave events regardless of the targets and the
             * %GTK_DEST_DEFAULT_MOTION flag.
             *
             * This may be used when a widget wants to do generic
             * actions regardless of the targets that the source offers.
             * @param track_motion whether to accept all targets
             */
            drag_dest_set_track_motion(track_motion: boolean): void;
            /**
             * Clears information about a drop destination set with
             * gtk_drag_dest_set(). The widget will no longer receive
             * notification of drags.
             */
            drag_dest_unset(): void;
            /**
             * Gets the data associated with a drag. When the data
             * is received or the retrieval fails, GTK+ will emit a
             * #GtkWidget::drag-data-received signal. Failure of the retrieval
             * is indicated by the length field of the `selection_data`
             * signal parameter being negative. However, when gtk_drag_get_data()
             * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
             * then the widget will not receive notification of failed
             * drops.
             * @param context the drag context
             * @param target the target (form of the data) to retrieve
             * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
             */
            drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
            /**
             * Highlights a widget as a currently hovered drop target.
             * To end the highlight, call gtk_drag_unhighlight().
             * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
             */
            drag_highlight(): void;
            /**
             * Add the writable image targets supported by #GtkSelectionData to
             * the target list of the drag source. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_image_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_image_targets(): void;
            /**
             * Add the text targets supported by #GtkSelectionData to
             * the target list of the drag source.  The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_text_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_text_targets(): void;
            /**
             * Add the URI targets supported by #GtkSelectionData to
             * the target list of the drag source.  The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_uri_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_uri_targets(): void;
            /**
             * Gets the list of targets this widget can provide for
             * drag-and-drop.
             * @returns the #GtkTargetList, or %NULL if none
             */
            drag_source_get_target_list(): Gtk.TargetList | null;
            /**
             * Sets up a widget so that GTK+ will start a drag operation when the user
             * clicks and drags on the widget. The widget must have a window.
             * @param start_button_mask the bitmask of buttons that can start the drag
             * @param targets the table of targets     that the drag will support, may be %NULL
             * @param actions the bitmask of possible actions for a drag from this widget
             */
            drag_source_set(
                start_button_mask: Gdk.ModifierType,
                targets: Gtk.TargetEntry[] | null,
                actions: Gdk.DragAction,
            ): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to `icon`. See the docs for #GtkIconTheme for more details.
             * @param icon A #GIcon
             */
            drag_source_set_icon_gicon(icon: Gio.Icon): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to a themed icon. See the docs for #GtkIconTheme for more details.
             * @param icon_name name of icon to use
             */
            drag_source_set_icon_name(icon_name: string): void;
            /**
             * Sets the icon that will be used for drags from a particular widget
             * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
             * release it when it is no longer needed.
             * @param pixbuf the #GdkPixbuf for the drag icon
             */
            drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to a stock icon.
             * @param stock_id the ID of the stock icon to use
             */
            drag_source_set_icon_stock(stock_id: string): void;
            /**
             * Changes the target types that this widget offers for drag-and-drop.
             * The widget must first be made into a drag source with
             * gtk_drag_source_set().
             * @param target_list list of draggable targets, or %NULL for none
             */
            drag_source_set_target_list(target_list?: Gtk.TargetList | null): void;
            /**
             * Undoes the effects of gtk_drag_source_set().
             */
            drag_source_unset(): void;
            /**
             * Removes a highlight set by gtk_drag_highlight() from
             * a widget.
             */
            drag_unhighlight(): void;
            /**
             * Draws `widget` to `cr`. The top left corner of the widget will be
             * drawn to the currently set origin point of `cr`.
             *
             * You should pass a cairo context as `cr` argument that is in an
             * original state. Otherwise the resulting drawing is undefined. For
             * example changing the operator using cairo_set_operator() or the
             * line width using cairo_set_line_width() might have unwanted side
             * effects.
             * You may however change the context’s transform matrix - like with
             * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
             * region with cairo_clip() prior to calling this function. Also, it
             * is fine to modify the context with cairo_save() and
             * cairo_push_group() prior to calling this function.
             *
             * Note that special-purpose widgets may contain special code for
             * rendering to the screen and might appear differently on screen
             * and when rendered using gtk_widget_draw().
             * @param cr a cairo context to draw to
             */
            draw(cr: cairo.Context): void;
            /**
             * Ensures that `widget` has a style (`widget->`style).
             *
             * Not a very useful function; most of the time, if you
             * want the style, the widget is realized, and realized
             * widgets are guaranteed to have a style already.
             */
            ensure_style(): void;
            /**
             * Notifies the user about an input-related error on this widget.
             * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
             * gdk_window_beep(), otherwise it does nothing.
             *
             * Note that the effect of gdk_window_beep() can be configured in many
             * ways, depending on the windowing backend and the desktop environment
             * or window manager that is used.
             */
            error_bell(): void;
            /**
             * Rarely-used function. This function is used to emit
             * the event signals on a widget (those signals should never
             * be emitted without using this function to do so).
             * If you want to synthesize an event though, don’t use this function;
             * instead, use gtk_main_do_event() so the event will behave as if
             * it were in the event queue. Don’t synthesize expose events; instead,
             * use gdk_window_invalidate_rect() to invalidate a region of the
             * window.
             * @param event a #GdkEvent
             * @returns return from the event signal emission (%TRUE if               the event was handled)
             */
            event(event: Gdk.Event): boolean;
            /**
             * Stops emission of #GtkWidget::child-notify signals on `widget`. The
             * signals are queued until gtk_widget_thaw_child_notify() is called
             * on `widget`.
             *
             * This is the analogue of g_object_freeze_notify() for child properties.
             */
            freeze_child_notify(): void;
            /**
             * Returns the accessible object that describes the widget to an
             * assistive technology.
             *
             * If accessibility support is not available, this #AtkObject
             * instance may be a no-op. Likewise, if no class-specific #AtkObject
             * implementation is available for the widget instance in question,
             * it will inherit an #AtkObject implementation from the first ancestor
             * class for which such an implementation is defined.
             *
             * The documentation of the
             * [ATK](http://developer.gnome.org/atk/stable/)
             * library contains more information about accessible objects and their uses.
             * @returns the #AtkObject associated with @widget
             */
            get_accessible(): Atk.Object;
            /**
             * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
             * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
             * ancestry.
             *
             * If no action group was found matching `prefix,` then %NULL is returned.
             * @param prefix The “prefix” of the action group.
             * @returns A #GActionGroup or %NULL.
             */
            get_action_group(prefix: string): Gio.ActionGroup | null;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function, and when allocating child
             * widgets in #GtkWidget::size_allocate.
             * @returns the baseline of the @widget, or -1 if none
             */
            get_allocated_baseline(): number;
            /**
             * Returns the height that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function.
             * @returns the height of the @widget
             */
            get_allocated_height(): number;
            /**
             * Retrieves the widget’s allocated size.
             *
             * This function returns the last values passed to
             * gtk_widget_size_allocate_with_baseline(). The value differs from
             * the size returned in gtk_widget_get_allocation() in that functions
             * like gtk_widget_set_halign() can adjust the allocation, but not
             * the value returned by this function.
             *
             * If a widget is not visible, its allocated size is 0.
             */
            get_allocated_size(): [Gtk.Allocation, number];
            /**
             * Returns the width that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function.
             * @returns the width of the @widget
             */
            get_allocated_width(): number;
            /**
             * Retrieves the widget’s allocation.
             *
             * Note, when implementing a #GtkContainer: a widget’s allocation will
             * be its “adjusted” allocation, that is, the widget’s parent
             * container typically calls gtk_widget_size_allocate() with an
             * allocation, and that allocation is then adjusted (to handle margin
             * and alignment for example) before assignment to the widget.
             * gtk_widget_get_allocation() returns the adjusted allocation that
             * was actually assigned to the widget. The adjusted allocation is
             * guaranteed to be completely contained within the
             * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
             * is guaranteed that its children stay inside the assigned bounds,
             * but not that they have exactly the bounds the container assigned.
             * There is no way to get the original allocation assigned by
             * gtk_widget_size_allocate(), since it isn’t stored; if a container
             * implementation needs that information it will have to track it itself.
             */
            get_allocation(): Gtk.Allocation;
            /**
             * Gets the first ancestor of `widget` with type `widget_type`. For example,
             * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
             * the first #GtkBox that’s an ancestor of `widget`. No reference will be
             * added to the returned widget; it should not be unreferenced. See note
             * about checking for a toplevel #GtkWindow in the docs for
             * gtk_widget_get_toplevel().
             *
             * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
             * considers `widget` to be an ancestor of itself.
             * @param widget_type ancestor type
             * @returns the ancestor widget, or %NULL if not found
             */
            get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
            /**
             * Determines whether the application intends to draw on the widget in
             * an #GtkWidget::draw handler.
             *
             * See gtk_widget_set_app_paintable()
             * @returns %TRUE if the widget is app paintable
             */
            get_app_paintable(): boolean;
            /**
             * Determines whether `widget` can be a default widget. See
             * gtk_widget_set_can_default().
             * @returns %TRUE if @widget can be a default widget, %FALSE otherwise
             */
            get_can_default(): boolean;
            /**
             * Determines whether `widget` can own the input focus. See
             * gtk_widget_set_can_focus().
             * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
             */
            get_can_focus(): boolean;
            /**
             * This function is only for use in widget implementations. Obtains
             * `widget->`requisition, unless someone has forced a particular
             * geometry on the widget (e.g. with gtk_widget_set_size_request()),
             * in which case it returns that geometry instead of the widget's
             * requisition.
             *
             * This function differs from gtk_widget_size_request() in that
             * it retrieves the last size request value from `widget->`requisition,
             * while gtk_widget_size_request() actually calls the "size_request" method
             * on `widget` to compute the size request and fill in `widget->`requisition,
             * and only then returns `widget->`requisition.
             *
             * Because this function does not call the “size_request” method, it
             * can only be used when you know that `widget->`requisition is
             * up-to-date, that is, gtk_widget_size_request() has been called
             * since the last time a resize was queued. In general, only container
             * implementations have this information; applications should use
             * gtk_widget_size_request().
             */
            get_child_requisition(): Gtk.Requisition;
            /**
             * Gets the value set with gtk_widget_set_child_visible().
             * If you feel a need to use this function, your code probably
             * needs reorganization.
             *
             * This function is only useful for container implementations and
             * never should be called by an application.
             * @returns %TRUE if the widget is mapped with the parent.
             */
            get_child_visible(): boolean;
            /**
             * Retrieves the widget’s clip area.
             *
             * The clip area is the area in which all of `widget'`s drawing will
             * happen. Other toolkits call it the bounding box.
             *
             * Historically, in GTK+ the clip area has been equal to the allocation
             * retrieved via gtk_widget_get_allocation().
             */
            get_clip(): Gtk.Allocation;
            /**
             * Returns the clipboard object for the given selection to
             * be used with `widget`. `widget` must have a #GdkDisplay
             * associated with it, so must be attached to a toplevel
             * window.
             * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
             * @returns the appropriate clipboard object. If no             clipboard already exists, a new one will             be created. Once a clipboard object has             been created, it is persistent for all time.
             */
            get_clipboard(selection: Gdk.Atom): Gtk.Clipboard;
            /**
             * Obtains the composite name of a widget.
             * @returns the composite name of @widget, or %NULL if @widget is not   a composite child. The string should be freed when it is no   longer needed.
             */
            get_composite_name(): string;
            /**
             * Returns whether `device` can interact with `widget` and its
             * children. See gtk_widget_set_device_enabled().
             * @param device a #GdkDevice
             * @returns %TRUE is @device is enabled for @widget
             */
            get_device_enabled(device: Gdk.Device): boolean;
            /**
             * Returns the events mask for the widget corresponding to an specific device. These
             * are the events that the widget will receive when `device` operates on it.
             * @param device a #GdkDevice
             * @returns device event mask for @widget
             */
            get_device_events(device: Gdk.Device): Gdk.EventMask;
            /**
             * Gets the reading direction for a particular widget. See
             * gtk_widget_set_direction().
             * @returns the reading direction for the widget.
             */
            get_direction(): Gtk.TextDirection;
            /**
             * Get the #GdkDisplay for the toplevel window associated with
             * this widget. This function can only be called after the widget
             * has been added to a widget hierarchy with a #GtkWindow at the top.
             *
             * In general, you should only create display specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the #GdkDisplay for the toplevel for this widget.
             */
            get_display(): Gdk.Display;
            /**
             * Determines whether the widget is double buffered.
             *
             * See gtk_widget_set_double_buffered()
             * @returns %TRUE if the widget is double buffered
             */
            get_double_buffered(): boolean;
            /**
             * Returns the event mask (see #GdkEventMask) for the widget. These are the
             * events that the widget will receive.
             *
             * Note: Internally, the widget event mask will be the logical OR of the event
             * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
             * event mask necessary to cater for every #GtkEventController created for the
             * widget.
             * @returns event mask for @widget
             */
            get_events(): number;
            /**
             * Returns whether the widget should grab focus when it is clicked with the mouse.
             * See gtk_widget_set_focus_on_click().
             * @returns %TRUE if the widget should grab focus when it is clicked with               the mouse.
             */
            get_focus_on_click(): boolean;
            /**
             * Gets the font map that has been set with gtk_widget_set_font_map().
             * @returns A #PangoFontMap, or %NULL
             */
            get_font_map(): Pango.FontMap | null;
            /**
             * Returns the #cairo_font_options_t used for Pango rendering. When not set,
             * the defaults font options for the #GdkScreen will be used.
             * @returns the #cairo_font_options_t or %NULL if not set
             */
            get_font_options(): cairo.FontOptions | null;
            /**
             * Obtains the frame clock for a widget. The frame clock is a global
             * “ticker” that can be used to drive animations and repaints.  The
             * most common reason to get the frame clock is to call
             * gdk_frame_clock_get_frame_time(), in order to get a time to use for
             * animating. For example you might record the start of the animation
             * with an initial value from gdk_frame_clock_get_frame_time(), and
             * then update the animation by calling
             * gdk_frame_clock_get_frame_time() again during each repaint.
             *
             * gdk_frame_clock_request_phase() will result in a new frame on the
             * clock, but won’t necessarily repaint any widgets. To repaint a
             * widget, you have to use gtk_widget_queue_draw() which invalidates
             * the widget (thus scheduling it to receive a draw on the next
             * frame). gtk_widget_queue_draw() will also end up requesting a frame
             * on the appropriate frame clock.
             *
             * A widget’s frame clock will not change while the widget is
             * mapped. Reparenting a widget (which implies a temporary unmap) can
             * change the widget’s frame clock.
             *
             * Unrealized widgets do not have a frame clock.
             * @returns a #GdkFrameClock, or %NULL if widget is unrealized
             */
            get_frame_clock(): Gdk.FrameClock | null;
            /**
             * Gets the value of the #GtkWidget:halign property.
             *
             * For backwards compatibility reasons this method will never return
             * %GTK_ALIGN_BASELINE, but instead it will convert it to
             * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
             * alignment.
             * @returns the horizontal alignment of @widget
             */
            get_halign(): Gtk.Align;
            /**
             * Returns the current value of the has-tooltip property.  See
             * #GtkWidget:has-tooltip for more information.
             * @returns current value of has-tooltip on @widget.
             */
            get_has_tooltip(): boolean;
            /**
             * Determines whether `widget` has a #GdkWindow of its own. See
             * gtk_widget_set_has_window().
             * @returns %TRUE if @widget has a window, %FALSE otherwise
             */
            get_has_window(): boolean;
            /**
             * Gets whether the widget would like any available extra horizontal
             * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Containers should use gtk_widget_compute_expand() rather than
             * this function, to see whether a widget, or any of its children,
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
             * Gets whether gtk_widget_set_hexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * If hexpand is set, then it overrides any computed
             * expand value based on child widgets. If hexpand is not
             * set, then the expand value depends on whether any
             * children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @returns whether hexpand has been explicitly set
             */
            get_hexpand_set(): boolean;
            /**
             * Whether the widget is mapped.
             * @returns %TRUE if the widget is mapped, %FALSE otherwise.
             */
            get_mapped(): boolean;
            /**
             * Gets the value of the #GtkWidget:margin-bottom property.
             * @returns The bottom margin of @widget
             */
            get_margin_bottom(): number;
            /**
             * Gets the value of the #GtkWidget:margin-end property.
             * @returns The end margin of @widget
             */
            get_margin_end(): number;
            /**
             * Gets the value of the #GtkWidget:margin-left property.
             * @returns The left margin of @widget
             */
            get_margin_left(): number;
            /**
             * Gets the value of the #GtkWidget:margin-right property.
             * @returns The right margin of @widget
             */
            get_margin_right(): number;
            /**
             * Gets the value of the #GtkWidget:margin-start property.
             * @returns The start margin of @widget
             */
            get_margin_start(): number;
            /**
             * Gets the value of the #GtkWidget:margin-top property.
             * @returns The top margin of @widget
             */
            get_margin_top(): number;
            /**
             * Returns the modifier mask the `widget’`s windowing system backend
             * uses for a particular purpose.
             *
             * See gdk_keymap_get_modifier_mask().
             * @param intent the use case for the modifier mask
             * @returns the modifier mask used for @intent.
             */
            get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
            /**
             * Returns the current modifier style for the widget. (As set by
             * gtk_widget_modify_style().) If no style has previously set, a new
             * #GtkRcStyle will be created with all values unset, and set as the
             * modifier style for the widget. If you make changes to this rc
             * style, you must call gtk_widget_modify_style(), passing in the
             * returned rc style, to make sure that your changes take effect.
             *
             * Caution: passing the style back to gtk_widget_modify_style() will
             * normally end up destroying it, because gtk_widget_modify_style() copies
             * the passed-in style and sets the copy as the new modifier style,
             * thus dropping any reference to the old modifier style. Add a reference
             * to the modifier style if you want to keep it alive.
             * @returns the modifier style for the widget.     This rc style is owned by the widget. If you want to keep a     pointer to value this around, you must add a refcount using     g_object_ref().
             */
            get_modifier_style(): Gtk.RcStyle;
            /**
             * Retrieves the name of a widget. See gtk_widget_set_name() for the
             * significance of widget names.
             * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
             */
            get_name(): string;
            /**
             * Returns the current value of the #GtkWidget:no-show-all property,
             * which determines whether calls to gtk_widget_show_all()
             * will affect this widget.
             * @returns the current value of the “no-show-all” property.
             */
            get_no_show_all(): boolean;
            /**
             * Fetches the requested opacity for this widget.
             * See gtk_widget_set_opacity().
             * @returns the requested opacity for this widget.
             */
            get_opacity(): number;
            /**
             * Gets a #PangoContext with the appropriate font map, font description,
             * and base direction for this widget. Unlike the context returned
             * by gtk_widget_create_pango_context(), this context is owned by
             * the widget (it can be used until the screen for the widget changes
             * or the widget is removed from its toplevel), and will be updated to
             * match any changes to the widget’s attributes. This can be tracked
             * by using the #GtkWidget::screen-changed signal on the widget.
             * @returns the #PangoContext for the widget.
             */
            get_pango_context(): Pango.Context;
            /**
             * Returns the parent container of `widget`.
             * @returns the parent container of @widget, or %NULL
             */
            get_parent(): Gtk.Widget | null;
            /**
             * Gets `widget’`s parent window, or %NULL if it does not have one.
             * @returns the parent window of @widget, or %NULL if it does not have a parent window.
             */
            get_parent_window(): Gdk.Window | null;
            /**
             * Returns the #GtkWidgetPath representing `widget,` if the widget
             * is not connected to a toplevel widget, a partial path will be
             * created.
             * @returns The #GtkWidgetPath representing @widget
             */
            get_path(): Gtk.WidgetPath;
            /**
             * Obtains the location of the mouse pointer in widget coordinates.
             * Widget coordinates are a bit odd; for historical reasons, they are
             * defined as `widget->`window coordinates for widgets that return %TRUE for
             * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
             * `widget->`allocation.y otherwise.
             */
            get_pointer(): [number, number];
            /**
             * Retrieves a widget’s initial minimum and natural height.
             *
             * This call is specific to width-for-height requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            get_preferred_height(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
             * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
             * that no baseline is requested for this widget.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
             * and by any #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation, or -1 if none
             */
            get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
            /**
             * Retrieves a widget’s minimum and natural height if it would be given
             * the specified `width`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation
             */
            get_preferred_height_for_width(width: number): [number, number];
            /**
             * Retrieves the minimum and natural size of a widget, taking
             * into account the widget’s preference for height-for-width management.
             *
             * This is used to retrieve a suitable size by container widgets which do
             * not impose any restrictions on the child placement. It can be used
             * to deduce toplevel window and menu sizes as well as child widgets in
             * free-form containers such as GtkLayout.
             *
             * Handle with care. Note that the natural height of a height-for-width
             * widget will generally be a smaller size than the minimum height, since the required
             * height for the natural width is generally smaller than the required height for
             * the minimum width.
             *
             * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
             * baseline alignment.
             */
            get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
            /**
             * Retrieves a widget’s initial minimum and natural width.
             *
             * This call is specific to height-for-width requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            get_preferred_width(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural width if it would be given
             * the specified `height`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param height the height which is available for allocation
             */
            get_preferred_width_for_height(height: number): [number, number];
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
             * See gtk_widget_set_receives_default().
             * @returns %TRUE if @widget acts as the default widget when focused,               %FALSE otherwise
             */
            get_receives_default(): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * #GtkBin widgets generally propagate the preference of
             * their child, container widgets need to request something either in
             * context of their children or in context of their allocation
             * capabilities.
             * @returns The #GtkSizeRequestMode preferred by @widget.
             */
            get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Retrieves the widget’s requisition.
             *
             * This function should only be used by widget implementations in
             * order to figure whether the widget’s requisition has actually
             * changed after some internal state change (so that they can call
             * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
             *
             * Normally, gtk_widget_size_request() should be used.
             */
            get_requisition(): Gtk.Requisition;
            /**
             * Get the root window where this widget is located. This function can
             * only be called after the widget has been added to a widget
             * hierarchy with #GtkWindow at the top.
             *
             * The root window is useful for such purposes as creating a popup
             * #GdkWindow associated with the window. In general, you should only
             * create display specific resources when a widget has been realized,
             * and you should free those resources when the widget is unrealized.
             * @returns the #GdkWindow root window for the toplevel for this widget.
             */
            get_root_window(): Gdk.Window;
            /**
             * Retrieves the internal scale factor that maps from window coordinates
             * to the actual device pixels. On traditional systems this is 1, on
             * high density outputs, it can be a higher value (typically 2).
             *
             * See gdk_window_get_scale_factor().
             * @returns the scale factor for @widget
             */
            get_scale_factor(): number;
            /**
             * Get the #GdkScreen from the toplevel window associated with
             * this widget. This function can only be called after the widget
             * has been added to a widget hierarchy with a #GtkWindow
             * at the top.
             *
             * In general, you should only create screen specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the #GdkScreen for the toplevel for this widget.
             */
            get_screen(): Gdk.Screen;
            /**
             * Returns the widget’s sensitivity (in the sense of returning
             * the value that has been set using gtk_widget_set_sensitive()).
             *
             * The effective sensitivity of a widget is however determined by both its
             * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
             * @returns %TRUE if the widget is sensitive
             */
            get_sensitive(): boolean;
            /**
             * Gets the settings object holding the settings used for this widget.
             *
             * Note that this function can only be called when the #GtkWidget
             * is attached to a toplevel, since the settings object is specific
             * to a particular #GdkScreen.
             * @returns the relevant #GtkSettings object
             */
            get_settings(): Gtk.Settings;
            /**
             * Gets the size request that was explicitly set for the widget using
             * gtk_widget_set_size_request(). A value of -1 stored in `width` or
             * `height` indicates that that dimension has not been set explicitly
             * and the natural requisition of the widget will be used instead. See
             * gtk_widget_set_size_request(). To get the size a widget will
             * actually request, call gtk_widget_get_preferred_size() instead of
             * this function.
             */
            get_size_request(): [number, number];
            /**
             * Returns the widget’s state. See gtk_widget_set_state().
             * @returns the state of @widget.
             */
            get_state(): Gtk.StateType;
            /**
             * Returns the widget state as a flag set. It is worth mentioning
             * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
             * returned, that is, also based on parent insensitivity, even if
             * `widget` itself is sensitive.
             *
             * Also note that if you are looking for a way to obtain the
             * #GtkStateFlags to pass to a #GtkStyleContext method, you
             * should look at gtk_style_context_get_state().
             * @returns The state flags for widget
             */
            get_state_flags(): Gtk.StateFlags;
            /**
             * Simply an accessor function that returns `widget->`style.
             * @returns the widget’s #GtkStyle
             */
            get_style(): Gtk.Style;
            /**
             * Returns the style context associated to `widget`. The returned object is
             * guaranteed to be the same for the lifetime of `widget`.
             * @returns a #GtkStyleContext. This memory is owned by @widget and          must not be freed.
             */
            get_style_context(): Gtk.StyleContext;
            /**
             * Returns %TRUE if `widget` is multiple pointer aware. See
             * gtk_widget_set_support_multidevice() for more information.
             * @returns %TRUE if @widget is multidevice aware.
             */
            get_support_multidevice(): boolean;
            /**
             * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
             *
             * This will only report children which were previously declared with
             * gtk_widget_class_bind_template_child_full() or one of its
             * variants.
             *
             * This function is only meant to be called for code which is private to the `widget_type` which
             * declared the child and is meant for language bindings which cannot easily make use
             * of the GObject structure offsets.
             * @param widget_type The #GType to get a template child for
             * @param name The “id” of the child defined in the template XML
             * @returns The object built in the template XML with the id @name
             */
            get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
            /**
             * Gets the contents of the tooltip for `widget`.
             * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
             */
            get_tooltip_markup(): string | null;
            /**
             * Gets the contents of the tooltip for `widget`.
             * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
             */
            get_tooltip_text(): string | null;
            /**
             * Returns the #GtkWindow of the current tooltip. This can be the
             * GtkWindow created by default, or the custom tooltip window set
             * using gtk_widget_set_tooltip_window().
             * @returns The #GtkWindow of the current tooltip.
             */
            get_tooltip_window(): Gtk.Window;
            /**
             * This function returns the topmost widget in the container hierarchy
             * `widget` is a part of. If `widget` has no parent widgets, it will be
             * returned as the topmost widget. No reference will be added to the
             * returned widget; it should not be unreferenced.
             *
             * Note the difference in behavior vs. gtk_widget_get_ancestor();
             * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
             * would return
             * %NULL if `widget` wasn’t inside a toplevel window, and if the
             * window was inside a #GtkWindow-derived widget which was in turn
             * inside the toplevel #GtkWindow. While the second case may
             * seem unlikely, it actually happens when a #GtkPlug is embedded
             * inside a #GtkSocket within the same application.
             *
             * To reliably find the toplevel #GtkWindow, use
             * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
             * on the result. For instance, to get the title of a widget's toplevel
             * window, one might use:
             *
             * ```c
             * static const char *
             * get_widget_toplevel_title (GtkWidget *widget)
             * {
             *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
             *   if (GTK_IS_WINDOW (toplevel))
             *     {
             *       return gtk_window_get_title (GTK_WINDOW (toplevel));
             *     }
             *
             *   return NULL;
             * }
             * ```
             *
             * @returns the topmost ancestor of @widget, or @widget itself    if there’s no ancestor.
             */
            get_toplevel(): Gtk.Widget;
            /**
             * Gets the value of the #GtkWidget:valign property.
             *
             * For backwards compatibility reasons this method will never return
             * %GTK_ALIGN_BASELINE, but instead it will convert it to
             * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
             * children it must use gtk_widget_get_valign_with_baseline(), or
             * `g_object_get (widget, "valign", &value, NULL)`, which will
             * also report the true value.
             * @returns the vertical alignment of @widget, ignoring baseline alignment
             */
            get_valign(): Gtk.Align;
            /**
             * Gets the value of the #GtkWidget:valign property, including
             * %GTK_ALIGN_BASELINE.
             * @returns the vertical alignment of @widget
             */
            get_valign_with_baseline(): Gtk.Align;
            /**
             * Gets whether the widget would like any available extra vertical
             * space.
             *
             * See gtk_widget_get_hexpand() for more detail.
             * @returns whether vexpand flag is set
             */
            get_vexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_vexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * See gtk_widget_get_hexpand_set() for more detail.
             * @returns whether vexpand has been explicitly set
             */
            get_vexpand_set(): boolean;
            /**
             * Determines whether the widget is visible. If you want to
             * take into account whether the widget’s parent is also marked as
             * visible, use gtk_widget_is_visible() instead.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See gtk_widget_set_visible().
             * @returns %TRUE if the widget is visible
             */
            get_visible(): boolean;
            /**
             * Gets the visual that will be used to render `widget`.
             * @returns the visual for @widget
             */
            get_visual(): Gdk.Visual;
            /**
             * Returns the widget’s window if it is realized, %NULL otherwise
             * @returns @widget’s window.
             */
            get_window(): Gdk.Window | null;
            /**
             * Makes `widget` the current grabbed widget.
             *
             * This means that interaction with other widgets in the same
             * application is blocked and mouse as well as keyboard events
             * are delivered to this widget.
             *
             * If `widget` is not sensitive, it is not set as the current
             * grabbed widget and this function does nothing.
             */
            grab_add(): void;
            /**
             * Causes `widget` to become the default widget. `widget` must be able to be
             * a default widget; typically you would ensure this yourself
             * by calling gtk_widget_set_can_default() with a %TRUE value.
             * The default widget is activated when
             * the user presses Enter in a window. Default widgets must be
             * activatable, that is, gtk_widget_activate() should affect them. Note
             * that #GtkEntry widgets require the “activates-default” property
             * set to %TRUE before they activate the default widget when Enter
             * is pressed and the #GtkEntry is focused.
             */
            grab_default(): void;
            /**
             * Causes `widget` to have the keyboard focus for the #GtkWindow it's
             * inside. `widget` must be a focusable widget, such as a #GtkEntry;
             * something like #GtkFrame won’t work.
             *
             * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
             * gtk_widget_set_can_focus() to modify that flag.
             *
             * The widget also needs to be realized and mapped. This is indicated by the
             * related signals. Grabbing the focus immediately after creating the widget
             * will likely fail and cause critical warnings.
             */
            grab_focus(): void;
            /**
             * Removes the grab from the given widget.
             *
             * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
             *
             * If `widget` does not have the grab, this function does nothing.
             */
            grab_remove(): void;
            /**
             * Determines whether the widget is currently grabbing events, so it
             * is the only widget receiving input events (keyboard and mouse).
             *
             * See also gtk_grab_add().
             * @returns %TRUE if the widget is in the grab_widgets stack
             */
            has_grab(): boolean;
            /**
             * Determines if the widget style has been looked up through the rc mechanism.
             * @returns %TRUE if the widget has been looked up through the rc   mechanism, %FALSE otherwise.
             */
            has_rc_style(): boolean;
            /**
             * Checks whether there is a #GdkScreen is associated with
             * this widget. All toplevel widgets have an associated
             * screen, and all widgets added into a hierarchy with a toplevel
             * window at the top.
             * @returns %TRUE if there is a #GdkScreen associated   with the widget.
             */
            has_screen(): boolean;
            /**
             * Determines if the widget should show a visible indication that
             * it has the global input focus. This is a convenience function for
             * use in ::draw handlers that takes into account whether focus
             * indication should currently be shown in the toplevel window of
             * `widget`. See gtk_window_get_focus_visible() for more information
             * about focus indication.
             *
             * To find out if the widget has the global input focus, use
             * gtk_widget_has_focus().
             * @returns %TRUE if the widget should display a “focus rectangle”
             */
            has_visible_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show(), causing the widget to be
             * hidden (invisible to the user).
             */
            hide(): void;
            /**
             * Utility function; intended to be connected to the #GtkWidget::delete-event
             * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
             * argument, then returns %TRUE. If connected to ::delete-event, the
             * result is that clicking the close button for a window (on the
             * window frame, top right corner usually) will hide but not destroy
             * the window. By default, GTK+ destroys windows when ::delete-event
             * is received.
             * @returns %TRUE
             */
            hide_on_delete(): boolean;
            /**
             * Returns whether the widget is currently being destroyed.
             * This information can sometimes be used to avoid doing
             * unnecessary work.
             * @returns %TRUE if @widget is being destroyed
             */
            in_destruction(): boolean;
            /**
             * Creates and initializes child widgets defined in templates. This
             * function must be called in the instance initializer for any
             * class which assigned itself a template using gtk_widget_class_set_template()
             *
             * It is important to call this function in the instance initializer
             * of a #GtkWidget subclass and not in #GObject.constructed() or
             * #GObject.constructor() for two reasons.
             *
             * One reason is that generally derived widgets will assume that parent
             * class composite widgets have been created in their instance
             * initializers.
             *
             * Another reason is that when calling g_object_new() on a widget with
             * composite templates, it’s important to build the composite widgets
             * before the construct properties are set. Properties passed to g_object_new()
             * should take precedence over properties set in the private template XML.
             */
            init_template(): void;
            /**
             * Sets an input shape for this widget’s GDK window. This allows for
             * windows which react to mouse click in a nonrectangular region, see
             * gdk_window_input_shape_combine_region() for more information.
             * @param region shape to be added, or %NULL to remove an existing shape
             */
            input_shape_combine_region(region?: cairo.Region | null): void;
            /**
             * Inserts `group` into `widget`. Children of `widget` that implement
             * #GtkActionable can then be associated with actions in `group` by
             * setting their “action-name” to
             * `prefix`.`action-name`.
             *
             * If `group` is %NULL, a previously inserted group for `name` is removed
             * from `widget`.
             * @param name the prefix for actions in @group
             * @param group a #GActionGroup, or %NULL
             */
            insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
            /**
             * Computes the intersection of a `widget’`s area and `area,` storing
             * the intersection in `intersection,` and returns %TRUE if there was
             * an intersection.  `intersection` may be %NULL if you’re only
             * interested in whether there was an intersection.
             * @param area a rectangle
             * @returns %TRUE if there was an intersection
             */
            intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
            /**
             * Determines whether `widget` is somewhere inside `ancestor,` possibly with
             * intermediate containers.
             * @param ancestor another #GtkWidget
             * @returns %TRUE if @ancestor contains @widget as a child,    grandchild, great grandchild, etc.
             */
            is_ancestor(ancestor: Gtk.Widget): boolean;
            /**
             * Whether `widget` can rely on having its alpha channel
             * drawn correctly. On X11 this function returns whether a
             * compositing manager is running for `widget’`s screen.
             *
             * Please note that the semantics of this call will change
             * in the future if used on a widget that has a composited
             * window in its hierarchy (as set by gdk_window_set_composited()).
             * @returns %TRUE if the widget can rely on its alpha channel being drawn correctly.
             */
            is_composited(): boolean;
            /**
             * Determines whether `widget` can be drawn to. A widget can be drawn
             * to if it is mapped and visible.
             * @returns %TRUE if @widget is drawable, %FALSE otherwise
             */
            is_drawable(): boolean;
            /**
             * Returns the widget’s effective sensitivity, which means
             * it is sensitive itself and also its parent widget is sensitive
             * @returns %TRUE if the widget is effectively sensitive
             */
            is_sensitive(): boolean;
            /**
             * Determines whether `widget` is a toplevel widget.
             *
             * Currently only #GtkWindow and #GtkInvisible (and out-of-process
             * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
             * widget.
             * @returns %TRUE if @widget is a toplevel, %FALSE otherwise
             */
            is_toplevel(): boolean;
            /**
             * Determines whether the widget and all its parents are marked as
             * visible.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See also gtk_widget_get_visible() and gtk_widget_set_visible()
             * @returns %TRUE if the widget and all its parents are visible
             */
            is_visible(): boolean;
            /**
             * This function should be called whenever keyboard navigation within
             * a single widget hits a boundary. The function emits the
             * #GtkWidget::keynav-failed signal on the widget and its return
             * value should be interpreted in a way similar to the return value of
             * gtk_widget_child_focus():
             *
             * When %TRUE is returned, stay in the widget, the failed keyboard
             * navigation is OK and/or there is nowhere we can/should move the
             * focus to.
             *
             * When %FALSE is returned, the caller should continue with keyboard
             * navigation outside the widget, e.g. by calling
             * gtk_widget_child_focus() on the widget’s toplevel.
             *
             * The default ::keynav-failed handler returns %FALSE for
             * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
             * values of #GtkDirectionType it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * gtk_widget_error_bell() to notify the user of the failed keyboard
             * navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * #GtkEntry widgets where the user should be able to navigate the
             * entire row with the cursor keys, as e.g. known from user interfaces
             * that require entering license keys.
             * @param direction direction of focus movement
             * @returns %TRUE if stopping keyboard navigation is fine, %FALSE               if the emitting widget should try to handle the keyboard               navigation attempt in its parent container(s).
             */
            keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Lists the closures used by `widget` for accelerator group connections
             * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
             * The closures can be used to monitor accelerator changes on `widget,`
             * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
             * #GtkAccelGroup of a closure which can be found out with
             * gtk_accel_group_from_accel_closure().
             * @returns a newly allocated #GList of closures
             */
            list_accel_closures(): GObject.Closure[];
            /**
             * Retrieves a %NULL-terminated array of strings containing the prefixes of
             * #GActionGroup's available to `widget`.
             * @returns a %NULL-terminated array of strings.
             */
            list_action_prefixes(): string[];
            /**
             * Returns a newly allocated list of the widgets, normally labels, for
             * which this widget is the target of a mnemonic (see for example,
             * gtk_label_set_mnemonic_widget()).
             *
             * The widgets in the list are not individually referenced. If you
             * want to iterate through the list and perform actions involving
             * callbacks that might destroy the widgets, you
             * must call `g_list_foreach (result,
             * (GFunc)g_object_ref, NULL)` first, and then unref all the
             * widgets afterwards.
             * @returns the list of  mnemonic labels; free this list  with g_list_free() when you are done with it.
             */
            list_mnemonic_labels(): Gtk.Widget[];
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be mapped if it isn’t already.
             */
            map(): void;
            /**
             * Emits the #GtkWidget::mnemonic-activate signal.
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             * @returns %TRUE if the signal has been handled
             */
            mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Sets the base color for a widget in a particular state.
             * All other style values are left untouched. The base color
             * is the background color used along with the text color
             * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
             * and #GtkTextView. See also gtk_widget_modify_style().
             *
             * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
             * > flag set) draw on their parent container’s window and thus may
             * > not draw any background themselves. This is the case for e.g.
             * > #GtkLabel.
             * >
             * > To modify the background of such widgets, you have to set the
             * > base color on their parent; if you want to set the background
             * > of a rectangular area around a label, try placing the label in
             * > a #GtkEventBox widget and setting the base color on that.
             * @param state the state for which to set the base color
             * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
             */
            modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the background color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             *
             * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
             * > flag set) draw on their parent container’s window and thus may
             * > not draw any background themselves. This is the case for e.g.
             * > #GtkLabel.
             * >
             * > To modify the background of such widgets, you have to set the
             * > background color on their parent; if you want to set the background
             * > of a rectangular area around a label, try placing the label in
             * > a #GtkEventBox widget and setting the background color on that.
             * @param state the state for which to set the background color
             * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
             */
            modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the cursor color to use in a widget, overriding the #GtkWidget
             * cursor-color and secondary-cursor-color
             * style properties.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
             * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
             */
            modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void;
            /**
             * Sets the foreground color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param state the state for which to set the foreground color
             * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
             */
            modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the font to use for a widget.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
             */
            modify_font(font_desc?: Pango.FontDescription | null): void;
            /**
             * Modifies style values on the widget.
             *
             * Modifications made using this technique take precedence over
             * style values set via an RC file, however, they will be overridden
             * if a style is explicitly set on the widget using gtk_widget_set_style().
             * The #GtkRcStyle-struct is designed so each field can either be
             * set or unset, so it is possible, using this function, to modify some
             * style values and leave the others unchanged.
             *
             * Note that modifications made with this function are not cumulative
             * with previous calls to gtk_widget_modify_style() or with such
             * functions as gtk_widget_modify_fg(). If you wish to retain
             * previous values, you must first call gtk_widget_get_modifier_style(),
             * make your modifications to the returned style, then call
             * gtk_widget_modify_style() with that style. On the other hand,
             * if you first call gtk_widget_modify_style(), subsequent calls
             * to such functions gtk_widget_modify_fg() will have a cumulative
             * effect with the initial modifications.
             * @param style the #GtkRcStyle-struct holding the style modifications
             */
            modify_style(style: Gtk.RcStyle): void;
            /**
             * Sets the text color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * The text color is the foreground color used along with the
             * base color (see gtk_widget_modify_base()) for widgets such
             * as #GtkEntry and #GtkTextView.
             * See also gtk_widget_modify_style().
             * @param state the state for which to set the text color
             * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
             */
            modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the background color to use for a widget.
             *
             * All other style values are left untouched.
             * See gtk_widget_override_color().
             * @param state the state for which to set the background color
             * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
             */
            override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void;
            /**
             * Sets the color to use for a widget.
             *
             * All other style values are left untouched.
             *
             * This function does not act recursively. Setting the color of a
             * container does not affect its children. Note that some widgets that
             * you may not think of as containers, for instance #GtkButtons,
             * are actually containers.
             *
             * This API is mostly meant as a quick way for applications to
             * change a widget appearance. If you are developing a widgets
             * library and intend this change to be themeable, it is better
             * done by setting meaningful CSS classes in your
             * widget/container implementation through gtk_style_context_add_class().
             *
             * This way, your widget library can install a #GtkCssProvider
             * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
             * to provide a default styling for those widgets that need so, and
             * this theming may fully overridden by the user’s theme.
             *
             * Note that for complex widgets this may bring in undesired
             * results (such as uniform background color everywhere), in
             * these cases it is better to fully style such widgets through a
             * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
             * priority.
             * @param state the state for which to set the color
             * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
             */
            override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void;
            /**
             * Sets the cursor color to use in a widget, overriding the
             * cursor-color and secondary-cursor-color
             * style properties. All other style values are left untouched.
             * See also gtk_widget_modify_style().
             *
             * Note that the underlying properties have the #GdkColor type,
             * so the alpha value in `primary` and `secondary` will be ignored.
             * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
             * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
             */
            override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void;
            /**
             * Sets the font to use for a widget. All other style values are
             * left untouched. See gtk_widget_override_color().
             * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
             */
            override_font(font_desc?: Pango.FontDescription | null): void;
            /**
             * Sets a symbolic color for a widget.
             *
             * All other style values are left untouched.
             * See gtk_widget_override_color() for overriding the foreground
             * or background color.
             * @param name the name of the symbolic color to modify
             * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
             */
            override_symbolic_color(name: string, color?: Gdk.RGBA | null): void;
            /**
             * Obtains the full path to `widget`. The path is simply the name of a
             * widget and all its parents in the container hierarchy, separated by
             * periods. The name of a widget comes from
             * gtk_widget_get_name(). Paths are used to apply styles to a widget
             * in gtkrc configuration files. Widget names are the type of the
             * widget by default (e.g. “GtkButton”) or can be set to an
             * application-specific value with gtk_widget_set_name(). By setting
             * the name of a widget, you allow users or theme authors to apply
             * styles to that specific widget in their gtkrc
             * file. `path_reversed_p` fills in the path in reverse order,
             * i.e. starting with `widget’`s name instead of starting with the name
             * of `widget’`s outermost ancestor.
             */
            path(): [number, string, string];
            /**
             * This function is only for use in widget implementations.
             *
             * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
             * function. Use this function instead of gtk_widget_queue_resize()
             * when the `widget'`s size request didn't change but it wants to
             * reposition its contents.
             *
             * An example user of this function is gtk_widget_set_halign().
             */
            queue_allocate(): void;
            /**
             * Mark `widget` as needing to recompute its expand flags. Call
             * this function when setting legacy expand child properties
             * on the child of a container.
             *
             * See gtk_widget_compute_expand().
             */
            queue_compute_expand(): void;
            /**
             * Equivalent to calling gtk_widget_queue_draw_area() for the
             * entire area of a widget.
             */
            queue_draw(): void;
            /**
             * Convenience function that calls gtk_widget_queue_draw_region() on
             * the region created from the given coordinates.
             *
             * The region here is specified in widget coordinates.
             * Widget coordinates are a bit odd; for historical reasons, they are
             * defined as `widget->`window coordinates for widgets that return %TRUE for
             * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
             * `widget->`allocation.y otherwise.
             *
             * `width` or `height` may be 0, in this case this function does
             * nothing. Negative values for `width` and `height` are not allowed.
             * @param x x coordinate of upper-left corner of rectangle to redraw
             * @param y y coordinate of upper-left corner of rectangle to redraw
             * @param width width of region to draw
             * @param height height of region to draw
             */
            queue_draw_area(x: number, y: number, width: number, height: number): void;
            /**
             * Invalidates the area of `widget` defined by `region` by calling
             * gdk_window_invalidate_region() on the widget’s window and all its
             * child windows. Once the main loop becomes idle (after the current
             * batch of events has been processed, roughly), the window will
             * receive expose events for the union of all regions that have been
             * invalidated.
             *
             * Normally you would only use this function in widget
             * implementations. You might also use it to schedule a redraw of a
             * #GtkDrawingArea or some portion thereof.
             * @param region region to draw
             */
            queue_draw_region(region: cairo.Region): void;
            /**
             * This function is only for use in widget implementations.
             * Flags a widget to have its size renegotiated; should
             * be called when a widget for some reason has a new size request.
             * For example, when you change the text in a #GtkLabel, #GtkLabel
             * queues a resize to ensure there’s enough space for the new text.
             *
             * Note that you cannot call gtk_widget_queue_resize() on a widget
             * from inside its implementation of the GtkWidgetClass::size_allocate
             * virtual method. Calls to gtk_widget_queue_resize() from inside
             * GtkWidgetClass::size_allocate will be silently ignored.
             */
            queue_resize(): void;
            /**
             * This function works like gtk_widget_queue_resize(),
             * except that the widget is not invalidated.
             */
            queue_resize_no_redraw(): void;
            /**
             * Creates the GDK (windowing system) resources associated with a
             * widget.  For example, `widget->`window will be created when a widget
             * is realized.  Normally realization happens implicitly; if you show
             * a widget and all its parent containers, then the widget will be
             * realized and mapped automatically.
             *
             * Realizing a widget requires all
             * the widget’s parent widgets to be realized; calling
             * gtk_widget_realize() realizes the widget’s parents in addition to
             * `widget` itself. If a widget is not yet inside a toplevel window
             * when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * #GtkWidget::draw. Or simply g_signal_connect () to the
             * #GtkWidget::realize signal.
             */
            realize(): void;
            /**
             * Computes the intersection of a `widget’`s area and `region,` returning
             * the intersection. The result may be empty, use cairo_region_is_empty() to
             * check.
             * @param region a #cairo_region_t, in the same coordinate system as          @widget->allocation. That is, relative to @widget->window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of @widget->window otherwise.
             * @returns A newly allocated region holding the intersection of @widget     and @region.
             */
            region_intersect(region: cairo.Region): cairo.Region;
            /**
             * Registers a #GdkWindow with the widget and sets it up so that
             * the widget receives events for it. Call gtk_widget_unregister_window()
             * when destroying the window.
             *
             * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
             * this up. This is now deprecated and you should use gtk_widget_register_window()
             * instead. Old code will keep working as is, although some new features like
             * transparency might not work perfectly.
             * @param window a #GdkWindow
             */
            register_window(window: Gdk.Window): void;
            /**
             * Removes an accelerator from `widget,` previously installed with
             * gtk_widget_add_accelerator().
             * @param accel_group accel group for this widget
             * @param accel_key GDK keyval of the accelerator
             * @param accel_mods modifier key combination of the accelerator
             * @returns whether an accelerator was installed and could be removed
             */
            remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
            /**
             * Removes a widget from the list of mnemonic labels for
             * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
             * must have previously been added to the list with
             * gtk_widget_add_mnemonic_label().
             * @param label a #GtkWidget that was previously set as a mnemonic label for         @widget with gtk_widget_add_mnemonic_label().
             */
            remove_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Removes a tick callback previously registered with
             * gtk_widget_add_tick_callback().
             * @param id an id returned by gtk_widget_add_tick_callback()
             */
            remove_tick_callback(id: number): void;
            /**
             * A convenience function that uses the theme settings for `widget`
             * to look up `stock_id` and render it to a pixbuf. `stock_id` should
             * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
             * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
             * string that identifies the widget or code doing the rendering, so
             * that theme engines can special-case rendering for that widget or
             * code.
             *
             * The pixels in the returned #GdkPixbuf are shared with the rest of
             * the application and should not be modified. The pixbuf should be
             * freed after use with g_object_unref().
             * @param stock_id a stock ID
             * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
             * @param detail render detail to pass to theme engine
             * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
             */
            render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null;
            /**
             * A convenience function that uses the theme engine and style
             * settings for `widget` to look up `stock_id` and render it to
             * a pixbuf. `stock_id` should be a stock icon ID such as
             * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
             * such as #GTK_ICON_SIZE_MENU.
             *
             * The pixels in the returned #GdkPixbuf are shared with the rest of
             * the application and should not be modified. The pixbuf should be freed
             * after use with g_object_unref().
             * @param stock_id a stock ID
             * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
             * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
             */
            render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
            /**
             * Moves a widget from one #GtkContainer to another, handling reference
             * count issues to avoid destroying the widget.
             * @param new_parent a #GtkContainer to move the widget into
             */
            reparent(new_parent: Gtk.Widget): void;
            /**
             * Reset the styles of `widget` and all descendents, so when
             * they are looked up again, they get the correct values
             * for the currently loaded RC file settings.
             *
             * This function is not useful for applications.
             */
            reset_rc_styles(): void;
            /**
             * Updates the style context of `widget` and all descendants
             * by updating its widget path. #GtkContainers may want
             * to use this on a child when reordering it in a way that a different
             * style might apply to it. See also gtk_container_get_path_for_child().
             */
            reset_style(): void;
            /**
             * Very rarely-used function. This function is used to emit
             * an expose event on a widget. This function is not normally used
             * directly. The only time it is used is when propagating an expose
             * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
             * and that is normally done using gtk_container_propagate_draw().
             *
             * If you want to force an area of a window to be redrawn,
             * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
             * To cause the redraw to be done immediately, follow that call
             * with a call to gdk_window_process_updates().
             * @param event a expose #GdkEvent
             * @returns return from the event signal emission (%TRUE if   the event was handled)
             */
            send_expose(event: Gdk.Event): number;
            /**
             * Sends the focus change `event` to `widget`
             *
             * This function is not meant to be used by applications. The only time it
             * should be used is when it is necessary for a #GtkWidget to assign focus
             * to a widget that is semantically owned by the first widget even though
             * it’s not a direct child - for instance, a search entry in a floating
             * window similar to the quick search in #GtkTreeView.
             *
             * An example of its usage is:
             *
             *
             * ```c
             *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
             *
             *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
             *   fevent->focus_change.in = TRUE;
             *   fevent->focus_change.window = _gtk_widget_get_window (widget);
             *   if (fevent->focus_change.window != NULL)
             *     g_object_ref (fevent->focus_change.window);
             *
             *   gtk_widget_send_focus_change (widget, fevent);
             *
             *   gdk_event_free (event);
             * ```
             *
             * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
             * @returns the return value from the event signal emission: %TRUE   if the event was handled, and %FALSE otherwise
             */
            send_focus_change(event: Gdk.Event): boolean;
            /**
             * Given an accelerator group, `accel_group,` and an accelerator path,
             * `accel_path,` sets up an accelerator in `accel_group` so whenever the
             * key binding that is defined for `accel_path` is pressed, `widget`
             * will be activated.  This removes any accelerators (for any
             * accelerator group) installed by previous calls to
             * gtk_widget_set_accel_path(). Associating accelerators with
             * paths allows them to be modified by the user and the modifications
             * to be saved for future use. (See gtk_accel_map_save().)
             *
             * This function is a low level function that would most likely
             * be used by a menu creation system like #GtkUIManager. If you
             * use #GtkUIManager, setting up accelerator paths will be done
             * automatically.
             *
             * Even when you you aren’t using #GtkUIManager, if you only want to
             * set up accelerators on menu items gtk_menu_item_set_accel_path()
             * provides a somewhat more convenient interface.
             *
             * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
             * pass a static string, you can save some memory by interning it first with
             * g_intern_static_string().
             * @param accel_path path used to look up the accelerator
             * @param accel_group a #GtkAccelGroup.
             */
            set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void;
            /**
             * Sets the widget’s allocation.  This should not be used
             * directly, but from within a widget’s size_allocate method.
             *
             * The allocation set should be the “adjusted” or actual
             * allocation. If you’re implementing a #GtkContainer, you want to use
             * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
             * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
             * allocation inside gtk_widget_size_allocate() to create an adjusted
             * allocation.
             * @param allocation a pointer to a #GtkAllocation to copy from
             */
            set_allocation(allocation: Gtk.Allocation): void;
            /**
             * Sets whether the application intends to draw on the widget in
             * an #GtkWidget::draw handler.
             *
             * This is a hint to the widget and does not affect the behavior of
             * the GTK+ core; many widgets ignore this flag entirely. For widgets
             * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
             * the effect is to suppress default themed drawing of the widget's
             * background. (Children of the widget will still be drawn.) The application
             * is then entirely responsible for drawing the widget background.
             *
             * Note that the background is still drawn when the widget is mapped.
             * @param app_paintable %TRUE if the application will paint on the widget
             */
            set_app_paintable(app_paintable: boolean): void;
            /**
             * Specifies whether `widget` can be a default widget. See
             * gtk_widget_grab_default() for details about the meaning of
             * “default”.
             * @param can_default whether or not @widget can be a default widget.
             */
            set_can_default(can_default: boolean): void;
            /**
             * Specifies whether `widget` can own the input focus. See
             * gtk_widget_grab_focus() for actually setting the input focus on a
             * widget.
             * @param can_focus whether or not @widget can own the input focus.
             */
            set_can_focus(can_focus: boolean): void;
            /**
             * Sets whether `widget` should be mapped along with its when its parent
             * is mapped and `widget` has been shown with gtk_widget_show().
             *
             * The child visibility can be set for widget before it is added to
             * a container with gtk_widget_set_parent(), to avoid mapping
             * children unnecessary before immediately unmapping them. However
             * it will be reset to its default state of %TRUE when the widget
             * is removed from a container.
             *
             * Note that changing the child visibility of a widget does not
             * queue a resize on the widget. Most of the time, the size of
             * a widget is computed from all visible children, whether or
             * not they are mapped. If this is not the case, the container
             * can queue a resize itself.
             *
             * This function is only useful for container implementations and
             * never should be called by an application.
             * @param is_visible if %TRUE, @widget should be mapped along with its parent.
             */
            set_child_visible(is_visible: boolean): void;
            /**
             * Sets the widget’s clip.  This must not be used directly,
             * but from within a widget’s size_allocate method.
             * It must be called after gtk_widget_set_allocation() (or after chaining up
             * to the parent class), because that function resets the clip.
             *
             * The clip set should be the area that `widget` draws on. If `widget` is a
             * #GtkContainer, the area must contain all children's clips.
             *
             * If this function is not called by `widget` during a ::size-allocate handler,
             * the clip will be set to `widget'`s allocation.
             * @param clip a pointer to a #GtkAllocation to copy from
             */
            set_clip(clip: Gtk.Allocation): void;
            /**
             * Sets a widgets composite name. The widget must be
             * a composite child of its parent; see gtk_widget_push_composite_child().
             * @param name the name to set
             */
            set_composite_name(name: string): void;
            /**
             * Enables or disables a #GdkDevice to interact with `widget`
             * and all its children.
             *
             * It does so by descending through the #GdkWindow hierarchy
             * and enabling the same mask that is has for core events
             * (i.e. the one that gdk_window_get_events() returns).
             * @param device a #GdkDevice
             * @param enabled whether to enable the device
             */
            set_device_enabled(device: Gdk.Device, enabled: boolean): void;
            /**
             * Sets the device event mask (see #GdkEventMask) for a widget. The event
             * mask determines which events a widget will receive from `device`. Keep
             * in mind that different widgets have different default event masks, and by
             * changing the event mask you may disrupt a widget’s functionality,
             * so be careful. This function must be called while a widget is
             * unrealized. Consider gtk_widget_add_device_events() for widgets that are
             * already realized, or if you want to preserve the existing event
             * mask. This function can’t be used with windowless widgets (which return
             * %FALSE from gtk_widget_get_has_window());
             * to get events on those widgets, place them inside a #GtkEventBox
             * and receive events on the event box.
             * @param device a #GdkDevice
             * @param events event mask
             */
            set_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
            /**
             * Sets the reading direction on a particular widget. This direction
             * controls the primary direction for widgets containing text,
             * and also the direction in which the children of a container are
             * packed. The ability to set the direction is present in order
             * so that correct localization into languages with right-to-left
             * reading directions can be done. Generally, applications will
             * let the default reading direction present, except for containers
             * where the containers are arranged in an order that is explicitly
             * visual rather than logical (such as buttons for text justification).
             *
             * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
             * set by gtk_widget_set_default_direction() will be used.
             * @param dir the new direction
             */
            set_direction(dir: Gtk.TextDirection): void;
            /**
             * Widgets are double buffered by default; you can use this function
             * to turn off the buffering. “Double buffered” simply means that
             * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
             * automatically around expose events sent to the
             * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
             * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
             * buffer to the screen. The result is that users see the window
             * update in one smooth step, and don’t see individual graphics
             * primitives being rendered.
             *
             * In very simple terms, double buffered widgets don’t flicker,
             * so you would only use this function to turn off double buffering
             * if you had special needs and really knew what you were doing.
             *
             * Note: if you turn off double-buffering, you have to handle
             * expose events, since even the clearing to the background color or
             * pixmap will not happen automatically (as it is done in
             * gdk_window_begin_draw_frame()).
             *
             * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
             * then expose events for double-buffered widgets are culled into a single
             * event to the toplevel GDK window. If you now unset double buffering, you
             * will cause a separate rendering pass for every widget. This will likely
             * cause rendering problems - in particular related to stacking - and usually
             * increases rendering times significantly.
             * @param double_buffered %TRUE to double-buffer a widget
             */
            set_double_buffered(double_buffered: boolean): void;
            /**
             * Sets the event mask (see #GdkEventMask) for a widget. The event
             * mask determines which events a widget will receive. Keep in mind
             * that different widgets have different default event masks, and by
             * changing the event mask you may disrupt a widget’s functionality,
             * so be careful. This function must be called while a widget is
             * unrealized. Consider gtk_widget_add_events() for widgets that are
             * already realized, or if you want to preserve the existing event
             * mask. This function can’t be used with widgets that have no window.
             * (See gtk_widget_get_has_window()).  To get events on those widgets,
             * place them inside a #GtkEventBox and receive events on the event
             * box.
             * @param events event mask
             */
            set_events(events: number): void;
            /**
             * Sets whether the widget should grab focus when it is clicked with the mouse.
             * Making mouse clicks not grab focus is useful in places like toolbars where
             * you don’t want the keyboard focus removed from the main area of the
             * application.
             * @param focus_on_click whether the widget should grab focus when clicked with the mouse
             */
            set_focus_on_click(focus_on_click: boolean): void;
            /**
             * Sets the font map to use for Pango rendering. When not set, the widget
             * will inherit the font map from its parent.
             * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
             */
            set_font_map(font_map?: Pango.FontMap | null): void;
            /**
             * Sets the #cairo_font_options_t used for Pango rendering in this widget.
             * When not set, the default font options for the #GdkScreen will be used.
             * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
             */
            set_font_options(options?: cairo.FontOptions | null): void;
            /**
             * Sets the horizontal alignment of `widget`.
             * See the #GtkWidget:halign property.
             * @param align the horizontal alignment
             */
            set_halign(align: Gtk.Align): void;
            /**
             * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
             * #GtkWidget:has-tooltip for more information.
             * @param has_tooltip whether or not @widget has a tooltip.
             */
            set_has_tooltip(has_tooltip: boolean): void;
            /**
             * Specifies whether `widget` has a #GdkWindow of its own. Note that
             * all realized widgets have a non-%NULL “window” pointer
             * (gtk_widget_get_window() never returns a %NULL window when a widget
             * is realized), but for many of them it’s actually the #GdkWindow of
             * one of its parent widgets. Widgets that do not create a %window for
             * themselves in #GtkWidget::realize must announce this by
             * calling this function with `has_window` = %FALSE.
             *
             * This function should only be called by widget implementations,
             * and they should call it in their init() function.
             * @param has_window whether or not @widget has a window.
             */
            set_has_window(has_window: boolean): void;
            /**
             * Sets whether the widget would like any available extra horizontal
             * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
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
             * its current children and state, call gtk_widget_compute_expand(). A
             * container can decide how the expandability of children affects the
             * expansion of the container by overriding the compute_expand virtual
             * method on #GtkWidget.).
             *
             * Setting hexpand explicitly with this function will override the
             * automatic expand behavior.
             *
             * This function forces the widget to expand or not to expand,
             * regardless of children.  The override occurs because
             * gtk_widget_set_hexpand() sets the hexpand-set property (see
             * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
             * value to be used, rather than looking at children and widget state.
             * @param expand whether to expand
             */
            set_hexpand(expand: boolean): void;
            /**
             * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
             * be used.
             *
             * The hexpand-set property will be set automatically when you call
             * gtk_widget_set_hexpand() to set hexpand, so the most likely
             * reason to use this function would be to unset an explicit expand
             * flag.
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
             * Marks the widget as being mapped.
             *
             * This function should only ever be called in a derived widget's
             * “map” or “unmap” implementation.
             * @param mapped %TRUE to mark the widget as mapped
             */
            set_mapped(mapped: boolean): void;
            /**
             * Sets the bottom margin of `widget`.
             * See the #GtkWidget:margin-bottom property.
             * @param margin the bottom margin
             */
            set_margin_bottom(margin: number): void;
            /**
             * Sets the end margin of `widget`.
             * See the #GtkWidget:margin-end property.
             * @param margin the end margin
             */
            set_margin_end(margin: number): void;
            /**
             * Sets the left margin of `widget`.
             * See the #GtkWidget:margin-left property.
             * @param margin the left margin
             */
            set_margin_left(margin: number): void;
            /**
             * Sets the right margin of `widget`.
             * See the #GtkWidget:margin-right property.
             * @param margin the right margin
             */
            set_margin_right(margin: number): void;
            /**
             * Sets the start margin of `widget`.
             * See the #GtkWidget:margin-start property.
             * @param margin the start margin
             */
            set_margin_start(margin: number): void;
            /**
             * Sets the top margin of `widget`.
             * See the #GtkWidget:margin-top property.
             * @param margin the top margin
             */
            set_margin_top(margin: number): void;
            /**
             * Widgets can be named, which allows you to refer to them from a
             * CSS file. You can apply a style to widgets with a particular name
             * in the CSS file. See the documentation for the CSS syntax (on the
             * same page as the docs for #GtkStyleContext).
             *
             * Note that the CSS syntax has certain special characters to delimit
             * and represent elements in a selector (period, #, >, *...), so using
             * these will make your widget impossible to match by name. Any combination
             * of alphanumeric symbols, dashes and underscores will suffice.
             * @param name name for the widget
             */
            set_name(name: string): void;
            /**
             * Sets the #GtkWidget:no-show-all property, which determines whether
             * calls to gtk_widget_show_all() will affect this widget.
             *
             * This is mostly for use in constructing widget hierarchies with externally
             * controlled visibility, see #GtkUIManager.
             * @param no_show_all the new value for the “no-show-all” property
             */
            set_no_show_all(no_show_all: boolean): void;
            /**
             * Request the `widget` to be rendered partially transparent,
             * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
             * are clamped to the [0,1] range.).
             * This works on both toplevel widget, and child widgets, although there
             * are some limitations:
             *
             * For toplevel widgets this depends on the capabilities of the windowing
             * system. On X11 this has any effect only on X screens with a compositing manager
             * running. See gtk_widget_is_composited(). On Windows it should work
             * always, although setting a window’s opacity after the window has been
             * shown causes it to flicker once on Windows.
             *
             * For child widgets it doesn’t work if any affected widget has a native window, or
             * disables double buffering.
             * @param opacity desired opacity, between 0 and 1
             */
            set_opacity(opacity: number): void;
            /**
             * This function is useful only when implementing subclasses of
             * #GtkContainer.
             * Sets the container as the parent of `widget,` and takes care of
             * some details such as updating the state and style of the child
             * to reflect its new location. The opposite function is
             * gtk_widget_unparent().
             * @param parent parent container
             */
            set_parent(parent: Gtk.Widget): void;
            /**
             * Sets a non default parent window for `widget`.
             *
             * For #GtkWindow classes, setting a `parent_window` effects whether
             * the window is a toplevel window or can be embedded into other
             * widgets.
             *
             * For #GtkWindow classes, this needs to be called before the
             * window is realized.
             * @param parent_window the new parent window.
             */
            set_parent_window(parent_window: Gdk.Window): void;
            /**
             * Marks the widget as being realized. This function must only be
             * called after all #GdkWindows for the `widget` have been created
             * and registered.
             *
             * This function should only ever be called in a derived widget's
             * “realize” or “unrealize” implementation.
             * @param realized %TRUE to mark the widget as realized
             */
            set_realized(realized: boolean): void;
            /**
             * Specifies whether `widget` will be treated as the default widget
             * within its toplevel when it has the focus, even if another widget
             * is the default.
             *
             * See gtk_widget_grab_default() for details about the meaning of
             * “default”.
             * @param receives_default whether or not @widget can be a default widget.
             */
            set_receives_default(receives_default: boolean): void;
            /**
             * Sets whether the entire widget is queued for drawing when its size
             * allocation changes. By default, this setting is %TRUE and
             * the entire widget is redrawn on every size change. If your widget
             * leaves the upper left unchanged when made bigger, turning this
             * setting off will improve performance.
             *
             * Note that for widgets where gtk_widget_get_has_window() is %FALSE
             * setting this flag to %FALSE turns off all allocation on resizing:
             * the widget will not even redraw if its position changes; this is to
             * allow containers that don’t draw anything to avoid excess
             * invalidations. If you set this flag on a widget with no window that
             * does draw on `widget->`window, you are
             * responsible for invalidating both the old and new allocation of the
             * widget when the widget is moved and responsible for invalidating
             * regions newly when the widget increases size.
             * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
             */
            set_redraw_on_allocate(redraw_on_allocate: boolean): void;
            /**
             * Sets the sensitivity of a widget. A widget is sensitive if the user
             * can interact with it. Insensitive widgets are “grayed out” and the
             * user can’t interact with them. Insensitive widgets are known as
             * “inactive”, “disabled”, or “ghosted” in some other toolkits.
             * @param sensitive %TRUE to make the widget sensitive
             */
            set_sensitive(sensitive: boolean): void;
            /**
             * Sets the minimum size of a widget; that is, the widget’s size
             * request will be at least `width` by `height`. You can use this
             * function to force a widget to be larger than it normally would be.
             *
             * In most cases, gtk_window_set_default_size() is a better choice for
             * toplevel windows than this function; setting the default size will
             * still allow users to shrink the window. Setting the size request
             * will force them to leave the window at least as large as the size
             * request. When dealing with window sizes,
             * gtk_window_set_geometry_hints() can be a useful function as well.
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
             * #GtkWidget properties margin-left, margin-right, margin-top, and
             * margin-bottom, but it does include pretty much all other padding
             * or border properties set by any subclass of #GtkWidget.
             * @param width width @widget should request, or -1 to unset
             * @param height height @widget should request, or -1 to unset
             */
            set_size_request(width: number, height: number): void;
            /**
             * This function is for use in widget implementations. Sets the state
             * of a widget (insensitive, prelighted, etc.) Usually you should set
             * the state using wrapper functions such as gtk_widget_set_sensitive().
             * @param state new state for @widget
             */
            set_state(state: Gtk.StateType): void;
            /**
             * This function is for use in widget implementations. Turns on flag
             * values in the current widget state (insensitive, prelighted, etc.).
             *
             * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
             * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
             * direction, use gtk_widget_set_direction().
             *
             * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
             * will be propagated down to all non-internal children if `widget` is a
             * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
             * down to all #GtkContainer children by different means than turning on the
             * state flag down the hierarchy, both gtk_widget_get_state_flags() and
             * gtk_widget_is_sensitive() will make use of these.
             * @param flags State flags to turn on
             * @param clear Whether to clear state before turning on @flags
             */
            set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
            /**
             * Used to set the #GtkStyle for a widget (`widget->`style). Since
             * GTK 3, this function does nothing, the passed in style is ignored.
             * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
             */
            set_style(style?: Gtk.Style | null): void;
            /**
             * Enables or disables multiple pointer awareness. If this setting is %TRUE,
             * `widget` will start receiving multiple, per device enter/leave events. Note
             * that if custom #GdkWindows are created in #GtkWidget::realize,
             * gdk_window_set_support_multidevice() will have to be called manually on them.
             * @param support_multidevice %TRUE to support input from multiple devices.
             */
            set_support_multidevice(support_multidevice: boolean): void;
            /**
             * Sets `markup` as the contents of the tooltip, which is marked up with
             *  the [Pango text markup language][PangoMarkupFormat].
             *
             * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
             * and of the default handler for the #GtkWidget::query-tooltip signal.
             *
             * See also the #GtkWidget:tooltip-markup property and
             * gtk_tooltip_set_markup().
             * @param markup the contents of the tooltip for @widget, or %NULL
             */
            set_tooltip_markup(markup?: string | null): void;
            /**
             * Sets `text` as the contents of the tooltip. This function will take
             * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
             * handler for the #GtkWidget::query-tooltip signal.
             *
             * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
             * @param text the contents of the tooltip for @widget
             */
            set_tooltip_text(text?: string | null): void;
            /**
             * Replaces the default window used for displaying
             * tooltips with `custom_window`. GTK+ will take care of showing and
             * hiding `custom_window` at the right moment, to behave likewise as
             * the default tooltip window. If `custom_window` is %NULL, the default
             * tooltip window will be used.
             * @param custom_window a #GtkWindow, or %NULL
             */
            set_tooltip_window(custom_window?: Gtk.Window | null): void;
            /**
             * Sets the vertical alignment of `widget`.
             * See the #GtkWidget:valign property.
             * @param align the vertical alignment
             */
            set_valign(align: Gtk.Align): void;
            /**
             * Sets whether the widget would like any available extra vertical
             * space.
             *
             * See gtk_widget_set_hexpand() for more detail.
             * @param expand whether to expand
             */
            set_vexpand(expand: boolean): void;
            /**
             * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
             * be used.
             *
             * See gtk_widget_set_hexpand_set() for more detail.
             * @param set value for vexpand-set property
             */
            set_vexpand_set(set: boolean): void;
            /**
             * Sets the visibility state of `widget`. Note that setting this to
             * %TRUE doesn’t mean the widget is actually viewable, see
             * gtk_widget_get_visible().
             *
             * This function simply calls gtk_widget_show() or gtk_widget_hide()
             * but is nicer to use when the visibility of the widget depends on
             * some condition.
             * @param visible whether the widget should be shown or not
             */
            set_visible(visible: boolean): void;
            /**
             * Sets the visual that should be used for by widget and its children for
             * creating #GdkWindows. The visual must be on the same #GdkScreen as
             * returned by gtk_widget_get_screen(), so handling the
             * #GtkWidget::screen-changed signal is necessary.
             *
             * Setting a new `visual` will not cause `widget` to recreate its windows,
             * so you should call this function before `widget` is realized.
             * @param visual visual to be used or %NULL to unset a previous one
             */
            set_visual(visual?: Gdk.Visual | null): void;
            /**
             * Sets a widget’s window. This function should only be used in a
             * widget’s #GtkWidget::realize implementation. The %window passed is
             * usually either new window created with gdk_window_new(), or the
             * window of its parent widget as returned by
             * gtk_widget_get_parent_window().
             *
             * Widgets must indicate whether they will create their own #GdkWindow
             * by calling gtk_widget_set_has_window(). This is usually done in the
             * widget’s init() function.
             *
             * Note that this function does not add any reference to `window`.
             * @param window a #GdkWindow
             */
            set_window(window: Gdk.Window): void;
            /**
             * Sets a shape for this widget’s GDK window. This allows for
             * transparent windows etc., see gdk_window_shape_combine_region()
             * for more information.
             * @param region shape to be added, or %NULL to remove an existing shape
             */
            shape_combine_region(region?: cairo.Region | null): void;
            /**
             * Flags a widget to be displayed. Any widget that isn’t shown will
             * not appear on the screen. If you want to show all the widgets in a
             * container, it’s easier to call gtk_widget_show_all() on the
             * container, instead of individually showing the widgets.
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
             * Recursively shows a widget, and any child widgets (if the widget is
             * a container).
             */
            show_all(): void;
            /**
             * Shows a widget. If the widget is an unmapped toplevel widget
             * (i.e. a #GtkWindow that has not yet been shown), enter the main
             * loop and wait for the window to actually be mapped. Be careful;
             * because the main loop is running, anything can happen during
             * this function.
             */
            show_now(): void;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size
             * and position to their child widgets.
             *
             * In this function, the allocation may be adjusted. It will be forced
             * to a 1x1 minimum size, and the adjust_size_allocation virtual
             * method on the child will be used to adjust the allocation. Standard
             * adjustments include removing the widget’s margins, and applying the
             * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
             *
             * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
             * instead.
             * @param allocation position and size to be allocated to @widget
             */
            size_allocate(allocation: Gtk.Allocation): void;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size,
             * position and (optionally) baseline to their child widgets.
             *
             * In this function, the allocation and baseline may be adjusted. It
             * will be forced to a 1x1 minimum size, and the
             * adjust_size_allocation virtual and adjust_baseline_allocation
             * methods on the child will be used to adjust the allocation and
             * baseline. Standard adjustments include removing the widget's
             * margins, and applying the widget’s #GtkWidget:halign and
             * #GtkWidget:valign properties.
             *
             * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
             * baseline argument is ignored and -1 is used instead.
             * @param allocation position and size to be allocated to @widget
             * @param baseline The baseline of the child, or -1
             */
            size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void;
            /**
             * This function is typically used when implementing a #GtkContainer
             * subclass.  Obtains the preferred size of a widget. The container
             * uses this information to arrange its child widgets and decide what
             * size allocations to give them with gtk_widget_size_allocate().
             *
             * You can also call this function from an application, with some
             * caveats. Most notably, getting a size request requires the widget
             * to be associated with a screen, because font information may be
             * needed. Multihead-aware applications should keep this in mind.
             *
             * Also remember that the size request is not necessarily the size
             * a widget will actually be allocated.
             */
            size_request(): Gtk.Requisition;
            /**
             * This function attaches the widget’s #GtkStyle to the widget's
             * #GdkWindow. It is a replacement for
             *
             *
             * ```
             * widget->style = gtk_style_attach (widget->style, widget->window);
             * ```
             *
             *
             * and should only ever be called in a derived widget’s “realize”
             * implementation which does not chain up to its parent class'
             * “realize” implementation, because one of the parent classes
             * (finally #GtkWidget) would attach the style itself.
             */
            style_attach(): void;
            /**
             * Gets the value of a style property of `widget`.
             * @param property_name the name of a style property
             * @param value location to return the property value
             */
            style_get_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
             * This causes all queued #GtkWidget::child-notify signals on `widget` to be
             * emitted.
             */
            thaw_child_notify(): void;
            /**
             * Translate coordinates relative to `src_widget’`s allocation to coordinates
             * relative to `dest_widget’`s allocations. In order to perform this
             * operation, both widgets must be realized, and must share a common
             * toplevel.
             * @param dest_widget a #GtkWidget
             * @param src_x X position relative to @src_widget
             * @param src_y Y position relative to @src_widget
             * @returns %FALSE if either widget was not realized, or there   was no common ancestor. In this case, nothing is stored in   *@dest_x and *@dest_y. Otherwise %TRUE.
             */
            translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
            /**
             * Triggers a tooltip query on the display where the toplevel of `widget`
             * is located. See gtk_tooltip_trigger_tooltip_query() for more
             * information.
             */
            trigger_tooltip_query(): void;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be unmapped if it’s currently mapped.
             */
            unmap(): void;
            /**
             * This function is only for use in widget implementations.
             * Should be called by implementations of the remove method
             * on #GtkContainer, to dissociate a child from the container.
             */
            unparent(): void;
            /**
             * This function is only useful in widget implementations.
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget, such as `widget->`window).
             */
            unrealize(): void;
            /**
             * Unregisters a #GdkWindow from the widget that was previously set up with
             * gtk_widget_register_window(). You need to call this when the window is
             * no longer used by the widget, such as when you destroy it.
             * @param window a #GdkWindow
             */
            unregister_window(window: Gdk.Window): void;
            /**
             * This function is for use in widget implementations. Turns off flag
             * values for the current widget state (insensitive, prelighted, etc.).
             * See gtk_widget_set_state_flags().
             * @param flags State flags to turn off
             */
            unset_state_flags(flags: Gtk.StateFlags): void;
            vfunc_adjust_baseline_allocation(baseline: number): void;
            vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
            /**
             * Convert an initial size allocation assigned
             *   by a #GtkContainer using gtk_widget_size_allocate(), into an actual
             *   size allocation to be used by the widget. adjust_size_allocation
             *   adjusts to a child widget’s actual allocation
             *   from what a parent container computed for the
             *   child. The adjusted allocation must be entirely within the original
             *   allocation. In any custom implementation, chain up to the default
             *   #GtkWidget implementation of this method, which applies the margin
             *   and alignment properties of #GtkWidget. Chain up
             *   before performing your own adjustments so your
             *   own adjustments remove more allocation after the #GtkWidget base
             *   class has already removed margin and alignment. The natural size
             *   passed in should be adjusted in the same way as the allocated size,
             *   which allows adjustments to perform alignments or other changes
             *   based on natural size.
             * @param orientation
             * @param minimum_size
             * @param natural_size
             * @param allocated_pos
             * @param allocated_size
             */
            vfunc_adjust_size_allocation(
                orientation: Gtk.Orientation,
                minimum_size: number,
                natural_size: number,
                allocated_pos: number,
                allocated_size: number,
            ): void;
            /**
             * Convert an initial size request from a widget's
             *   #GtkSizeRequestMode virtual method implementations into a size request to
             *   be used by parent containers in laying out the widget.
             *   adjust_size_request adjusts from a child widget's
             *   original request to what a parent container should
             *   use for layout. The `for_size` argument will be -1 if the request should
             *   not be for a particular size in the opposing orientation, i.e. if the
             *   request is not height-for-width or width-for-height. If `for_size` is
             *   greater than -1, it is the proposed allocation in the opposing
             *   orientation that we need the request for. Implementations of
             *   adjust_size_request should chain up to the default implementation,
             *   which applies #GtkWidget’s margin properties and imposes any values
             *   from gtk_widget_set_size_request(). Chaining up should be last,
             *   after your subclass adjusts the request, so
             *   #GtkWidget can apply constraints and add the margin properly.
             * @param orientation
             * @param minimum_size
             * @param natural_size
             */
            vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void;
            /**
             * Signal will be emitted when a button
             *   (typically from a mouse) is pressed.
             * @param event
             */
            vfunc_button_press_event(event: Gdk.EventButton): boolean;
            /**
             * Signal will be emitted when a button
             *   (typically from a mouse) is released.
             * @param event
             */
            vfunc_button_release_event(event: Gdk.EventButton): boolean;
            /**
             * Determines whether an accelerator that activates the signal
             * identified by `signal_id` can currently be activated.
             * This is done by emitting the #GtkWidget::can-activate-accel
             * signal on `widget;` if the signal isn’t overridden by a
             * handler or in a derived widget, then the default check is
             * that the widget must be sensitive, and the widget and all
             * its ancestors mapped.
             * @param signal_id the ID of a signal installed on @widget
             */
            vfunc_can_activate_accel(signal_id: number): boolean;
            /**
             * Emits a #GtkWidget::child-notify signal for the
             * [child property][child-properties] `child_property`
             * on `widget`.
             *
             * This is the analogue of g_object_notify() for child properties.
             *
             * Also see gtk_container_child_notify().
             * @param child_property the name of a child property installed on the                  class of @widget’s parent
             */
            vfunc_child_notify(child_property: GObject.ParamSpec): void;
            /**
             * Signal emitted when the composited status of
             *   widgets screen changes. See gdk_screen_is_composited().
             */
            vfunc_composited_changed(): void;
            /**
             * Computes whether a container should give this
             *   widget extra space when possible.
             * @param hexpand_p
             * @param vexpand_p
             */
            vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
            /**
             * Signal will be emitted when the size, position or
             *   stacking of the widget’s window has changed.
             * @param event
             */
            vfunc_configure_event(event: Gdk.EventConfigure): boolean;
            /**
             * Signal emitted when a redirected window belonging to
             *   widget gets drawn into.
             * @param event
             */
            vfunc_damage_event(event: Gdk.EventExpose): boolean;
            /**
             * Signal emitted if a user requests that a toplevel
             *   window is closed.
             * @param event
             */
            vfunc_delete_event(event: Gdk.EventAny): boolean;
            /**
             * Destroys a widget.
             *
             * When a widget is destroyed all references it holds on other objects
             * will be released:
             *
             *  - if the widget is inside a container, it will be removed from its
             *  parent
             *  - if the widget is a container, all its children will be destroyed,
             *  recursively
             *  - if the widget is a top level, it will be removed from the list
             *  of top level widgets that GTK+ maintains internally
             *
             * It's expected that all references held on the widget will also
             * be released; you should connect to the #GtkWidget::destroy signal
             * if you hold a reference to `widget` and you wish to remove it when
             * this function is called. It is not necessary to do so if you are
             * implementing a #GtkContainer, as you'll be able to use the
             * #GtkContainerClass.remove() virtual function for that.
             *
             * It's important to notice that gtk_widget_destroy() will only cause
             * the `widget` to be finalized if no additional references, acquired
             * using g_object_ref(), are held on it. In case additional references
             * are in place, the `widget` will be in an "inert" state after calling
             * this function; `widget` will still point to valid memory, allowing you
             * to release the references you hold, but you may not query the widget's
             * own state.
             *
             * You should typically call this function on top level widgets, and
             * rarely on child widgets.
             *
             * See also: gtk_container_remove()
             */
            vfunc_destroy(): void;
            /**
             * Signal is emitted when a #GdkWindow is destroyed.
             * @param event
             */
            vfunc_destroy_event(event: Gdk.EventAny): boolean;
            /**
             * Signal emitted when the text direction of a
             *   widget changes.
             * @param previous_direction
             */
            vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
            /**
             * Seldomly overidden.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * Signal emitted on the drag source when a drag is
             *   started.
             * @param context
             */
            vfunc_drag_begin(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when a drag
             *   with the action %GDK_ACTION_MOVE is successfully completed.
             * @param context
             */
            vfunc_drag_data_delete(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when the drop
             *   site requests the data which is dragged.
             * @param context
             * @param selection_data
             * @param info
             * @param time_
             */
            vfunc_drag_data_get(
                context: Gdk.DragContext,
                selection_data: Gtk.SelectionData,
                info: number,
                time_: number,
            ): void;
            /**
             * Signal emitted on the drop site when the
             *   dragged data has been received.
             * @param context
             * @param x
             * @param y
             * @param selection_data
             * @param info
             * @param time_
             */
            vfunc_drag_data_received(
                context: Gdk.DragContext,
                x: number,
                y: number,
                selection_data: Gtk.SelectionData,
                info: number,
                time_: number,
            ): void;
            /**
             * Signal emitted on the drop site when the user drops the
             *   data onto the widget.
             * @param context
             * @param x
             * @param y
             * @param time_
             */
            vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
            /**
             * Signal emitted on the drag source when a drag is
             *   finished.
             * @param context
             */
            vfunc_drag_end(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when a drag has
             *   failed.
             * @param context
             * @param result
             */
            vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean;
            /**
             * Signal emitted on the drop site when the cursor leaves
             *   the widget.
             * @param context
             * @param time_
             */
            vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
            /**
             * signal emitted on the drop site when the user moves
             *   the cursor over the widget during a drag.
             * @param context
             * @param x
             * @param y
             * @param time_
             */
            vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
            /**
             * Signal emitted when a widget is supposed to render itself.
             * @param cr
             */
            vfunc_draw(cr: cairo.Context): boolean;
            /**
             * Signal event will be emitted when the pointer
             *   enters the widget’s window.
             * @param event
             */
            vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
            /**
             * Rarely-used function. This function is used to emit
             * the event signals on a widget (those signals should never
             * be emitted without using this function to do so).
             * If you want to synthesize an event though, don’t use this function;
             * instead, use gtk_main_do_event() so the event will behave as if
             * it were in the event queue. Don’t synthesize expose events; instead,
             * use gdk_window_invalidate_rect() to invalidate a region of the
             * window.
             * @param event a #GdkEvent
             */
            vfunc_event(event: Gdk.Event): boolean;
            vfunc_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Signal emitted when the keyboard focus enters the
             * widget’s window.
             * @param event
             */
            vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
            /**
             * Signal emitted when the keyboard focus leaves the
             * widget’s window.
             * @param event
             */
            vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
            /**
             * Returns the accessible object that describes the widget to an
             * assistive technology.
             *
             * If accessibility support is not available, this #AtkObject
             * instance may be a no-op. Likewise, if no class-specific #AtkObject
             * implementation is available for the widget instance in question,
             * it will inherit an #AtkObject implementation from the first ancestor
             * class for which such an implementation is defined.
             *
             * The documentation of the
             * [ATK](http://developer.gnome.org/atk/stable/)
             * library contains more information about accessible objects and their uses.
             */
            vfunc_get_accessible(): Atk.Object;
            /**
             * Retrieves a widget’s initial minimum and natural height.
             *
             * This call is specific to width-for-height requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            vfunc_get_preferred_height(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
             * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
             * that no baseline is requested for this widget.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
             * and by any #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation, or -1 if none
             */
            vfunc_get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
            /**
             * Retrieves a widget’s minimum and natural height if it would be given
             * the specified `width`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation
             */
            vfunc_get_preferred_height_for_width(width: number): [number, number];
            /**
             * Retrieves a widget’s initial minimum and natural width.
             *
             * This call is specific to height-for-width requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            vfunc_get_preferred_width(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural width if it would be given
             * the specified `height`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param height the height which is available for allocation
             */
            vfunc_get_preferred_width_for_height(height: number): [number, number];
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * #GtkBin widgets generally propagate the preference of
             * their child, container widgets need to request something either in
             * context of their children or in context of their allocation
             * capabilities.
             */
            vfunc_get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Signal emitted when a pointer or keyboard grab
             *   on a window belonging to widget gets broken.
             * @param event
             */
            vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
            /**
             * Causes `widget` to have the keyboard focus for the #GtkWindow it's
             * inside. `widget` must be a focusable widget, such as a #GtkEntry;
             * something like #GtkFrame won’t work.
             *
             * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
             * gtk_widget_set_can_focus() to modify that flag.
             *
             * The widget also needs to be realized and mapped. This is indicated by the
             * related signals. Grabbing the focus immediately after creating the widget
             * will likely fail and cause critical warnings.
             */
            vfunc_grab_focus(): void;
            /**
             * Signal emitted when a widget becomes shadowed by a
             *   GTK+ grab (not a pointer or keyboard grab) on another widget, or
             *   when it becomes unshadowed due to a grab being removed.
             * @param was_grabbed
             */
            vfunc_grab_notify(was_grabbed: boolean): void;
            /**
             * Reverses the effects of gtk_widget_show(), causing the widget to be
             * hidden (invisible to the user).
             */
            vfunc_hide(): void;
            /**
             * Signal emitted when the anchored state of a
             *   widget changes.
             * @param previous_toplevel
             */
            vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void;
            /**
             * Signal emitted when a key is pressed.
             * @param event
             */
            vfunc_key_press_event(event: Gdk.EventKey): boolean;
            /**
             * Signal is emitted when a key is released.
             * @param event
             */
            vfunc_key_release_event(event: Gdk.EventKey): boolean;
            /**
             * This function should be called whenever keyboard navigation within
             * a single widget hits a boundary. The function emits the
             * #GtkWidget::keynav-failed signal on the widget and its return
             * value should be interpreted in a way similar to the return value of
             * gtk_widget_child_focus():
             *
             * When %TRUE is returned, stay in the widget, the failed keyboard
             * navigation is OK and/or there is nowhere we can/should move the
             * focus to.
             *
             * When %FALSE is returned, the caller should continue with keyboard
             * navigation outside the widget, e.g. by calling
             * gtk_widget_child_focus() on the widget’s toplevel.
             *
             * The default ::keynav-failed handler returns %FALSE for
             * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
             * values of #GtkDirectionType it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * gtk_widget_error_bell() to notify the user of the failed keyboard
             * navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * #GtkEntry widgets where the user should be able to navigate the
             * entire row with the cursor keys, as e.g. known from user interfaces
             * that require entering license keys.
             * @param direction direction of focus movement
             */
            vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Will be emitted when the pointer leaves the
             *   widget’s window.
             * @param event
             */
            vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be mapped if it isn’t already.
             */
            vfunc_map(): void;
            /**
             * Signal emitted when the widget’s window is mapped.
             * @param event
             */
            vfunc_map_event(event: Gdk.EventAny): boolean;
            /**
             * Emits the #GtkWidget::mnemonic-activate signal.
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             */
            vfunc_mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Signal emitted when the pointer moves over
             *   the widget’s #GdkWindow.
             * @param event
             */
            vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
            /**
             * Signal emitted when a change of focus is requested
             * @param direction
             */
            vfunc_move_focus(direction: Gtk.DirectionType): void;
            /**
             * Signal emitted when a new parent has been set on a
             *   widget.
             * @param previous_parent
             */
            vfunc_parent_set(previous_parent: Gtk.Widget): void;
            /**
             * Signal emitted whenever a widget should pop up a
             *   context menu.
             */
            vfunc_popup_menu(): boolean;
            /**
             * Signal will be emitted when a property on
             *   the widget’s window has been changed or deleted.
             * @param event
             */
            vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
            vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
            vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
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
             * Invalidates the area of `widget` defined by `region` by calling
             * gdk_window_invalidate_region() on the widget’s window and all its
             * child windows. Once the main loop becomes idle (after the current
             * batch of events has been processed, roughly), the window will
             * receive expose events for the union of all regions that have been
             * invalidated.
             *
             * Normally you would only use this function in widget
             * implementations. You might also use it to schedule a redraw of a
             * #GtkDrawingArea or some portion thereof.
             * @param region region to draw
             */
            vfunc_queue_draw_region(region: cairo.Region): void;
            /**
             * Creates the GDK (windowing system) resources associated with a
             * widget.  For example, `widget->`window will be created when a widget
             * is realized.  Normally realization happens implicitly; if you show
             * a widget and all its parent containers, then the widget will be
             * realized and mapped automatically.
             *
             * Realizing a widget requires all
             * the widget’s parent widgets to be realized; calling
             * gtk_widget_realize() realizes the widget’s parents in addition to
             * `widget` itself. If a widget is not yet inside a toplevel window
             * when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * #GtkWidget::draw. Or simply g_signal_connect () to the
             * #GtkWidget::realize signal.
             */
            vfunc_realize(): void;
            /**
             * Signal emitted when the screen of a widget has
             *   changed.
             * @param previous_screen
             */
            vfunc_screen_changed(previous_screen: Gdk.Screen): void;
            /**
             * Signal emitted when a button in the 4 to 7 range is
             *   pressed.
             * @param event
             */
            vfunc_scroll_event(event: Gdk.EventScroll): boolean;
            /**
             * Signal will be emitted when the the
             *   widget’s window has lost ownership of a selection.
             * @param event
             */
            vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
            vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void;
            vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
            vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void;
            /**
             * Signal will be emitted when another
             *   client requests ownership of the selection owned by the widget's
             *   window.
             * @param event
             */
            vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
            /**
             * Flags a widget to be displayed. Any widget that isn’t shown will
             * not appear on the screen. If you want to show all the widgets in a
             * container, it’s easier to call gtk_widget_show_all() on the
             * container, instead of individually showing the widgets.
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
             * Recursively shows a widget, and any child widgets (if the widget is
             * a container).
             */
            vfunc_show_all(): void;
            vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size
             * and position to their child widgets.
             *
             * In this function, the allocation may be adjusted. It will be forced
             * to a 1x1 minimum size, and the adjust_size_allocation virtual
             * method on the child will be used to adjust the allocation. Standard
             * adjustments include removing the widget’s margins, and applying the
             * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
             *
             * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
             * instead.
             * @param allocation position and size to be allocated to @widget
             */
            vfunc_size_allocate(allocation: Gtk.Allocation): void;
            /**
             * Signal emitted when the widget state
             *   changes. Deprecated: 3.0
             * @param previous_state
             */
            vfunc_state_changed(previous_state: Gtk.StateType): void;
            /**
             * Signal emitted when the widget state changes,
             *   see gtk_widget_get_state_flags().
             * @param previous_state_flags
             */
            vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
            /**
             * Signal emitted when a new style has been set on a
             * widget. Deprecated: 3.0
             * @param previous_style
             */
            vfunc_style_set(previous_style: Gtk.Style): void;
            /**
             * Signal emitted when the GtkStyleContext of a widget
             *   is changed.
             */
            vfunc_style_updated(): void;
            /**
             * Signal emitted when a touch event happens
             * @param event
             */
            vfunc_touch_event(event: Gdk.EventTouch): boolean;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be unmapped if it’s currently mapped.
             */
            vfunc_unmap(): void;
            /**
             * Signal will be emitted when the widget’s window is
             *   unmapped.
             * @param event
             */
            vfunc_unmap_event(event: Gdk.EventAny): boolean;
            /**
             * This function is only useful in widget implementations.
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget, such as `widget->`window).
             */
            vfunc_unrealize(): void;
            /**
             * Signal emitted when the widget’s window is
             *   obscured or unobscured.
             * @param event
             */
            vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
            /**
             * Signal emitted when the state of the toplevel
             *   window associated to the widget changes.
             * @param event
             */
            vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
        }

        module FailureRenderer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Renderer.ConstructorProps {
                attributes: Gck.Attributes;
                label: string;
            }
        }

        /**
         * A renderer that can be used for unsupported data.
         */
        class FailureRenderer extends GObject.Object implements Renderer {
            static $gtype: GObject.GType<FailureRenderer>;

            // Properties

            get attributes(): Gck.Attributes;
            set attributes(val: Gck.Attributes);
            get label(): string;
            set label(val: string);

            // Constructors

            constructor(properties?: Partial<FailureRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](label: string | null, error: GLib.Error): FailureRenderer;

            // Static methods

            /**
             * Create a new renderer for unsupported data.
             * @param label the label for the failure
             */
            static new_unsupported(label: string): Renderer;

            // Inherited methods
            /**
             * Emit the #GcrRenderer::data-changed signal on the renderer. This is used by
             * renderer implementations.
             */
            emit_data_changed(): void;
            /**
             * Get the PKCS#11 attributes, if any, set for this renderer to display.
             * @returns the attributes, owned by the renderer
             */
            get_attributes(): Gck.Attributes | null;
            /**
             * Called by #GcrViewer when about to display a popup menu for the content
             * displayed by the renderer. The renderer can add a menu item if desired.
             * @param viewer The viewer that is displaying a popup
             * @param menu The popup menu being displayed
             */
            popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            render_view(viewer: Viewer): void;
            /**
             * Set the PKCS#11 attributes for this renderer to display.
             * @param attrs attributes to set
             */
            set_attributes(attrs?: Gck.Attributes | null): void;
            /**
             * signal emitted when data being rendered changes
             */
            vfunc_data_changed(): void;
            /**
             * method invoked to populate a popup menu with additional
             *                  renderer options
             * @param viewer
             * @param menu
             */
            vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            vfunc_render_view(viewer: Viewer): void;
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

        module ImportButton {
            // Signal callback interfaces

            interface Imported {
                (importer: GObject.Object, error: GLib.Error): void;
            }

            interface Importing {
                (importer: GObject.Object): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Button.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Actionable.ConstructorProps,
                    Gtk.Activatable.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {}
        }

        /**
         * A button which imports keys and certificates.
         *
         * The import button shows a spinner when the button is activated. When more
         * than one importer is available, it shows a drop down to select which to
         * import to.
         */
        class ImportButton
            extends Gtk.Button
            implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
        {
            static $gtype: GObject.GType<ImportButton>;

            // Constructors

            constructor(properties?: Partial<ImportButton.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](label?: string | null): ImportButton;
            // Conflicted with Gtk.Button.new

            static ['new'](...args: never[]): any;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'imported',
                callback: (_source: this, importer: GObject.Object, error: GLib.Error) => void,
            ): number;
            connect_after(
                signal: 'imported',
                callback: (_source: this, importer: GObject.Object, error: GLib.Error) => void,
            ): number;
            emit(signal: 'imported', importer: GObject.Object, error: GLib.Error): void;
            connect(signal: 'importing', callback: (_source: this, importer: GObject.Object) => void): number;
            connect_after(signal: 'importing', callback: (_source: this, importer: GObject.Object) => void): number;
            emit(signal: 'importing', importer: GObject.Object): void;

            // Virtual methods

            /**
             * Emitted when the import completes, or fails.
             * @param importer
             * @param error
             */
            vfunc_imported(importer: Gcr.Importer, error: GLib.Error): void;
            /**
             * Emitted when the import begins.
             * @param importer
             */
            vfunc_importing(importer: Gcr.Importer): void;

            // Methods

            /**
             * Queue an item to import via the button
             * @param parsed a parsed item
             */
            add_parsed(parsed: Gcr.Parsed): void;

            // Inherited properties
            get action_name(): string;
            set action_name(val: string);
            get actionName(): string;
            set actionName(val: string);
            get action_target(): GLib.Variant;
            set action_target(val: GLib.Variant);
            get actionTarget(): GLib.Variant;
            set actionTarget(val: GLib.Variant);
            /**
             * The action that this activatable will activate and receive
             * updates from for various states and possibly appearance.
             *
             * > #GtkActivatable implementors need to handle the this property and
             * > call gtk_activatable_do_set_related_action() when it changes.
             */
            get related_action(): Gtk.Action;
            set related_action(val: Gtk.Action);
            /**
             * The action that this activatable will activate and receive
             * updates from for various states and possibly appearance.
             *
             * > #GtkActivatable implementors need to handle the this property and
             * > call gtk_activatable_do_set_related_action() when it changes.
             */
            get relatedAction(): Gtk.Action;
            set relatedAction(val: Gtk.Action);
            /**
             * Whether this activatable should reset its layout
             * and appearance when setting the related action or when
             * the action changes appearance.
             *
             * See the #GtkAction documentation directly to find which properties
             * should be ignored by the #GtkActivatable when this property is %FALSE.
             *
             * > #GtkActivatable implementors need to handle this property
             * > and call gtk_activatable_sync_action_properties() on the activatable
             * > widget when it changes.
             */
            get use_action_appearance(): boolean;
            set use_action_appearance(val: boolean);
            /**
             * Whether this activatable should reset its layout
             * and appearance when setting the related action or when
             * the action changes appearance.
             *
             * See the #GtkAction documentation directly to find which properties
             * should be ignored by the #GtkActivatable when this property is %FALSE.
             *
             * > #GtkActivatable implementors need to handle this property
             * > and call gtk_activatable_sync_action_properties() on the activatable
             * > widget when it changes.
             */
            get useActionAppearance(): boolean;
            set useActionAppearance(val: boolean);
            get app_paintable(): boolean;
            set app_paintable(val: boolean);
            get appPaintable(): boolean;
            set appPaintable(val: boolean);
            get can_default(): boolean;
            set can_default(val: boolean);
            get canDefault(): boolean;
            set canDefault(val: boolean);
            get can_focus(): boolean;
            set can_focus(val: boolean);
            get canFocus(): boolean;
            set canFocus(val: boolean);
            get composite_child(): boolean;
            get compositeChild(): boolean;
            /**
             * Whether the widget is double buffered.
             */
            get double_buffered(): boolean;
            set double_buffered(val: boolean);
            /**
             * Whether the widget is double buffered.
             */
            get doubleBuffered(): boolean;
            set doubleBuffered(val: boolean);
            get events(): Gdk.EventMask;
            set events(val: Gdk.EventMask);
            /**
             * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
             */
            get expand(): boolean;
            set expand(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             *
             * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
             * GtkComboBox) implemented this property individually.
             */
            get focus_on_click(): boolean;
            set focus_on_click(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             *
             * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
             * GtkComboBox) implemented this property individually.
             */
            get focusOnClick(): boolean;
            set focusOnClick(val: boolean);
            /**
             * How to distribute horizontal space if widget gets extra space, see #GtkAlign
             */
            get halign(): Gtk.Align;
            set halign(val: Gtk.Align);
            get has_default(): boolean;
            set has_default(val: boolean);
            get hasDefault(): boolean;
            set hasDefault(val: boolean);
            get has_focus(): boolean;
            set has_focus(val: boolean);
            get hasFocus(): boolean;
            set hasFocus(val: boolean);
            /**
             * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using #GtkWidget::query-tooltip to determine
             * whether it will provide a tooltip or not.
             *
             * Note that setting this property to %TRUE for the first time will change
             * the event masks of the GdkWindows of this widget to include leave-notify
             * and motion-notify events.  This cannot and will not be undone when the
             * property is set to %FALSE again.
             */
            get has_tooltip(): boolean;
            set has_tooltip(val: boolean);
            /**
             * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using #GtkWidget::query-tooltip to determine
             * whether it will provide a tooltip or not.
             *
             * Note that setting this property to %TRUE for the first time will change
             * the event masks of the GdkWindows of this widget to include leave-notify
             * and motion-notify events.  This cannot and will not be undone when the
             * property is set to %FALSE again.
             */
            get hasTooltip(): boolean;
            set hasTooltip(val: boolean);
            get height_request(): number;
            set height_request(val: number);
            get heightRequest(): number;
            set heightRequest(val: number);
            /**
             * Whether to expand horizontally. See gtk_widget_set_hexpand().
             */
            get hexpand(): boolean;
            set hexpand(val: boolean);
            /**
             * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
             */
            get hexpand_set(): boolean;
            set hexpand_set(val: boolean);
            /**
             * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
             */
            get hexpandSet(): boolean;
            set hexpandSet(val: boolean);
            get is_focus(): boolean;
            set is_focus(val: boolean);
            get isFocus(): boolean;
            set isFocus(val: boolean);
            /**
             * Sets all four sides' margin at once. If read, returns max
             * margin on any side.
             */
            get margin(): number;
            set margin(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_bottom(): number;
            set margin_bottom(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginBottom(): number;
            set marginBottom(val: number);
            /**
             * Margin on end of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_end(): number;
            set margin_end(val: number);
            /**
             * Margin on end of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginEnd(): number;
            set marginEnd(val: number);
            /**
             * Margin on left side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_left(): number;
            set margin_left(val: number);
            /**
             * Margin on left side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginLeft(): number;
            set marginLeft(val: number);
            /**
             * Margin on right side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_right(): number;
            set margin_right(val: number);
            /**
             * Margin on right side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginRight(): number;
            set marginRight(val: number);
            /**
             * Margin on start of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_start(): number;
            set margin_start(val: number);
            /**
             * Margin on start of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginStart(): number;
            set marginStart(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_top(): number;
            set margin_top(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginTop(): number;
            set marginTop(val: number);
            get name(): string;
            set name(val: string);
            get no_show_all(): boolean;
            set no_show_all(val: boolean);
            get noShowAll(): boolean;
            set noShowAll(val: boolean);
            /**
             * The requested opacity of the widget. See gtk_widget_set_opacity() for
             * more details about window opacity.
             *
             * Before 3.8 this was only available in GtkWindow
             */
            get opacity(): number;
            set opacity(val: number);
            get parent(): Gtk.Container;
            set parent(val: Gtk.Container);
            get receives_default(): boolean;
            set receives_default(val: boolean);
            get receivesDefault(): boolean;
            set receivesDefault(val: boolean);
            /**
             * The scale factor of the widget. See gtk_widget_get_scale_factor() for
             * more details about widget scaling.
             */
            get scale_factor(): number;
            /**
             * The scale factor of the widget. See gtk_widget_get_scale_factor() for
             * more details about widget scaling.
             */
            get scaleFactor(): number;
            get sensitive(): boolean;
            set sensitive(val: boolean);
            /**
             * The style of the widget, which contains information about how it will look (colors, etc).
             */
            get style(): Gtk.Style;
            set style(val: Gtk.Style);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with the [Pango text markup language][PangoMarkupFormat].
             * Also see gtk_tooltip_set_markup().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltip_markup(): string;
            set tooltip_markup(val: string);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with the [Pango text markup language][PangoMarkupFormat].
             * Also see gtk_tooltip_set_markup().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltipMarkup(): string;
            set tooltipMarkup(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see gtk_tooltip_set_text().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltip_text(): string;
            set tooltip_text(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see gtk_tooltip_set_text().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltipText(): string;
            set tooltipText(val: string);
            /**
             * How to distribute vertical space if widget gets extra space, see #GtkAlign
             */
            get valign(): Gtk.Align;
            set valign(val: Gtk.Align);
            /**
             * Whether to expand vertically. See gtk_widget_set_vexpand().
             */
            get vexpand(): boolean;
            set vexpand(val: boolean);
            /**
             * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
             */
            get vexpand_set(): boolean;
            set vexpand_set(val: boolean);
            /**
             * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
             */
            get vexpandSet(): boolean;
            set vexpandSet(val: boolean);
            get visible(): boolean;
            set visible(val: boolean);
            get width_request(): number;
            set width_request(val: number);
            get widthRequest(): number;
            set widthRequest(val: number);
            /**
             * The widget's window if it is realized, %NULL otherwise.
             */
            get window(): Gdk.Window;

            // Inherited methods
            /**
             * Gets the action name for `actionable`.
             *
             * See gtk_actionable_set_action_name() for more information.
             * @returns the action name, or %NULL if none is set
             */
            get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             *
             * See gtk_actionable_set_action_target_value() for more information.
             * @returns the current target value
             */
            get_action_target_value(): GLib.Variant;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.  If `action_name` is %NULL then the widget will be
             * unassociated from any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a #GtkApplicationWindow.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing #GtkApplicationWindow or its associated #GtkApplication,
             * respectively.  This is the same form used for actions in the #GMenu
             * associated with the window.
             * @param action_name an action name, or %NULL
             */
            set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes.  First, it is used as the
             * parameter to activation of the action associated with the
             * #GtkActionable widget. Second, it is used to determine if the widget
             * should be rendered as “active” — the widget is active if the state
             * is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a #GAction
             * with string state in a typical “radio button” situation.  Each button
             * will be associated with the same action, but with a different target
             * value for that action.  Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value.  Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a #GVariant to set as the target value, or %NULL
             */
            set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * Sets the action-name and associated string target value of an
             * actionable widget.
             *
             * `detailed_action_name` is a string in the format accepted by
             * g_action_parse_detailed_name().
             *
             * (Note that prior to version 3.22.25,
             * this function is only usable for actions with a simple "s" target, and
             * `detailed_action_name` must be of the form `"action::target"` where
             * `action` is the action name and `target` is the string to use
             * as the target.)
             * @param detailed_action_name the detailed action name
             */
            set_detailed_action_name(detailed_action_name: string): void;
            /**
             * Gets the action name for `actionable`.
             *
             * See gtk_actionable_set_action_name() for more information.
             */
            vfunc_get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             *
             * See gtk_actionable_set_action_target_value() for more information.
             */
            vfunc_get_action_target_value(): GLib.Variant;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.  If `action_name` is %NULL then the widget will be
             * unassociated from any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a #GtkApplicationWindow.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing #GtkApplicationWindow or its associated #GtkApplication,
             * respectively.  This is the same form used for actions in the #GMenu
             * associated with the window.
             * @param action_name an action name, or %NULL
             */
            vfunc_set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes.  First, it is used as the
             * parameter to activation of the action associated with the
             * #GtkActionable widget. Second, it is used to determine if the widget
             * should be rendered as “active” — the widget is active if the state
             * is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a #GAction
             * with string state in a typical “radio button” situation.  Each button
             * will be associated with the same action, but with a different target
             * value for that action.  Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value.  Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a #GVariant to set as the target value, or %NULL
             */
            vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * This is a utility function for #GtkActivatable implementors.
             *
             * When implementing #GtkActivatable you must call this when
             * handling changes of the #GtkActivatable:related-action, and
             * you must also use this to break references in #GObject->dispose().
             *
             * This function adds a reference to the currently set related
             * action for you, it also makes sure the #GtkActivatable->update()
             * method is called when the related #GtkAction properties change
             * and registers to the action’s proxy list.
             *
             * > Be careful to call this before setting the local
             * > copy of the #GtkAction property, since this function uses
             * > gtk_activatable_get_related_action() to retrieve the
             * > previous action.
             * @param action the #GtkAction to set
             */
            do_set_related_action(action: Gtk.Action): void;
            /**
             * Gets the related #GtkAction for `activatable`.
             * @returns the related #GtkAction if one is set.
             */
            get_related_action(): Gtk.Action;
            /**
             * Gets whether this activatable should reset its layout
             * and appearance when setting the related action or when
             * the action changes appearance.
             * @returns whether @activatable uses its actions appearance.
             */
            get_use_action_appearance(): boolean;
            /**
             * Sets the related action on the `activatable` object.
             *
             * > #GtkActivatable implementors need to handle the #GtkActivatable:related-action
             * > property and call gtk_activatable_do_set_related_action() when it changes.
             * @param action the #GtkAction to set
             */
            set_related_action(action: Gtk.Action): void;
            /**
             * Sets whether this activatable should reset its layout and appearance
             * when setting the related action or when the action changes appearance
             *
             * > #GtkActivatable implementors need to handle the
             * > #GtkActivatable:use-action-appearance property and call
             * > gtk_activatable_sync_action_properties() to update `activatable`
             * > if needed.
             * @param use_appearance whether to use the actions appearance
             */
            set_use_action_appearance(use_appearance: boolean): void;
            /**
             * This is called to update the activatable completely, this is called
             * internally when the #GtkActivatable:related-action property is set
             * or unset and by the implementing class when
             * #GtkActivatable:use-action-appearance changes.
             * @param action the related #GtkAction or %NULL
             */
            sync_action_properties(action?: Gtk.Action | null): void;
            /**
             * This is called to update the activatable completely, this is called
             * internally when the #GtkActivatable:related-action property is set
             * or unset and by the implementing class when
             * #GtkActivatable:use-action-appearance changes.
             * @param action the related #GtkAction or %NULL
             */
            vfunc_sync_action_properties(action?: Gtk.Action | null): void;
            /**
             * Called to update the activatable when its related action’s properties change.
             * You must check the #GtkActivatable:use-action-appearance property only apply action
             * properties that are meant to effect the appearance accordingly.
             * @param action
             * @param property_name
             */
            vfunc_update(action: Gtk.Action, property_name: string): void;
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
             * For widgets that can be “activated” (buttons, menu items, etc.)
             * this function activates them. Activation is what happens when you
             * press Enter on a widget during key navigation. If `widget` isn't
             * activatable, the function returns %FALSE.
             * @returns %TRUE if the widget was activatable
             */
            activate(): boolean;
            /**
             * Installs an accelerator for this `widget` in `accel_group` that causes
             * `accel_signal` to be emitted if the accelerator is activated.
             * The `accel_group` needs to be added to the widget’s toplevel via
             * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
             * Accelerators added through this function are not user changeable during
             * runtime. If you want to support accelerators that can be changed by the
             * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
             * gtk_menu_item_set_accel_path() instead.
             * @param accel_signal widget signal to emit on accelerator activation
             * @param accel_group accel group for this widget, added to its toplevel
             * @param accel_key GDK keyval of the accelerator
             * @param accel_mods modifier key combination of the accelerator
             * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
             */
            add_accelerator(
                accel_signal: string,
                accel_group: Gtk.AccelGroup,
                accel_key: number,
                accel_mods: Gdk.ModifierType,
                accel_flags: Gtk.AccelFlags,
            ): void;
            /**
             * Adds the device events in the bitfield `events` to the event mask for
             * `widget`. See gtk_widget_set_device_events() for details.
             * @param device a #GdkDevice
             * @param events an event mask, see #GdkEventMask
             */
            add_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
            /**
             * Adds the events in the bitfield `events` to the event mask for
             * `widget`. See gtk_widget_set_events() and the
             * [input handling overview][event-masks] for details.
             * @param events an event mask, see #GdkEventMask
             */
            add_events(events: number): void;
            /**
             * Adds a widget to the list of mnemonic labels for
             * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
             * list of mnemonic labels for the widget is cleared when the
             * widget is destroyed, so the caller must make sure to update
             * its internal state at this point as well, by using a connection
             * to the #GtkWidget::destroy signal or a weak notifier.
             * @param label a #GtkWidget that acts as a mnemonic label for @widget
             */
            add_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Queues an animation frame update and adds a callback to be called
             * before each frame. Until the tick callback is removed, it will be
             * called frequently (usually at the frame rate of the output device
             * or as quickly as the application can be repainted, whichever is
             * slower). For this reason, is most suitable for handling graphics
             * that change every frame or every few frames. The tick callback does
             * not automatically imply a relayout or repaint. If you want a
             * repaint or relayout, and aren’t changing widget properties that
             * would trigger that (for example, changing the text of a #GtkLabel),
             * then you will have to call gtk_widget_queue_resize() or
             * gtk_widget_queue_draw_area() yourself.
             *
             * gdk_frame_clock_get_frame_time() should generally be used for timing
             * continuous animations and
             * gdk_frame_timings_get_predicted_presentation_time() if you are
             * trying to display isolated frames at particular times.
             *
             * This is a more convenient alternative to connecting directly to the
             * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
             * have to worry about when a #GdkFrameClock is assigned to a widget.
             * @param callback function to call for updating animations
             * @returns an id for the connection of this callback. Remove the callback     by passing it to gtk_widget_remove_tick_callback()
             */
            add_tick_callback(callback: Gtk.TickCallback): number;
            /**
             * Determines whether an accelerator that activates the signal
             * identified by `signal_id` can currently be activated.
             * This is done by emitting the #GtkWidget::can-activate-accel
             * signal on `widget;` if the signal isn’t overridden by a
             * handler or in a derived widget, then the default check is
             * that the widget must be sensitive, and the widget and all
             * its ancestors mapped.
             * @param signal_id the ID of a signal installed on @widget
             * @returns %TRUE if the accelerator can be activated.
             */
            can_activate_accel(signal_id: number): boolean;
            /**
             * This function is used by custom widget implementations; if you're
             * writing an app, you’d use gtk_widget_grab_focus() to move the focus
             * to a particular widget, and gtk_container_set_focus_chain() to
             * change the focus tab order. So you may want to investigate those
             * functions instead.
             *
             * gtk_widget_child_focus() is called by containers as the user moves
             * around the window using keyboard shortcuts. `direction` indicates
             * what kind of motion is taking place (up, down, left, right, tab
             * forward, tab backward). gtk_widget_child_focus() emits the
             * #GtkWidget::focus signal; widgets override the default handler
             * for this signal in order to implement appropriate focus behavior.
             *
             * The default ::focus handler for a widget should return %TRUE if
             * moving in `direction` left the focus on a focusable location inside
             * that widget, and %FALSE if moving in `direction` moved the focus
             * outside the widget. If returning %TRUE, widgets normally
             * call gtk_widget_grab_focus() to place the focus accordingly;
             * if returning %FALSE, they don’t modify the current focus location.
             * @param direction direction of focus movement
             * @returns %TRUE if focus ended up inside @widget
             */
            child_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Emits a #GtkWidget::child-notify signal for the
             * [child property][child-properties] `child_property`
             * on `widget`.
             *
             * This is the analogue of g_object_notify() for child properties.
             *
             * Also see gtk_container_child_notify().
             * @param child_property the name of a child property installed on the                  class of @widget’s parent
             */
            child_notify(child_property: string): void;
            // Conflicted with Gtk.Container.child_notify
            child_notify(...args: never[]): any;
            /**
             * Same as gtk_widget_path(), but always uses the name of a widget’s type,
             * never uses a custom name set with gtk_widget_set_name().
             */
            class_path(): [number, string, string];
            /**
             * Computes whether a container should give this widget extra space
             * when possible. Containers should check this, rather than
             * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
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
             * Creates a new #PangoContext with the appropriate font map,
             * font options, font description, and base direction for drawing
             * text for this widget. See also gtk_widget_get_pango_context().
             * @returns the new #PangoContext
             */
            create_pango_context(): Pango.Context;
            /**
             * Creates a new #PangoLayout with the appropriate font map,
             * font description, and base direction for drawing text for
             * this widget.
             *
             * If you keep a #PangoLayout created in this way around, you need
             * to re-create it when the widget #PangoContext is replaced.
             * This can be tracked by using the #GtkWidget::screen-changed signal
             * on the widget.
             * @param text text to set on the layout (can be %NULL)
             * @returns the new #PangoLayout
             */
            create_pango_layout(text?: string | null): Pango.Layout;
            /**
             * Destroys a widget.
             *
             * When a widget is destroyed all references it holds on other objects
             * will be released:
             *
             *  - if the widget is inside a container, it will be removed from its
             *  parent
             *  - if the widget is a container, all its children will be destroyed,
             *  recursively
             *  - if the widget is a top level, it will be removed from the list
             *  of top level widgets that GTK+ maintains internally
             *
             * It's expected that all references held on the widget will also
             * be released; you should connect to the #GtkWidget::destroy signal
             * if you hold a reference to `widget` and you wish to remove it when
             * this function is called. It is not necessary to do so if you are
             * implementing a #GtkContainer, as you'll be able to use the
             * #GtkContainerClass.remove() virtual function for that.
             *
             * It's important to notice that gtk_widget_destroy() will only cause
             * the `widget` to be finalized if no additional references, acquired
             * using g_object_ref(), are held on it. In case additional references
             * are in place, the `widget` will be in an "inert" state after calling
             * this function; `widget` will still point to valid memory, allowing you
             * to release the references you hold, but you may not query the widget's
             * own state.
             *
             * You should typically call this function on top level widgets, and
             * rarely on child widgets.
             *
             * See also: gtk_container_remove()
             */
            destroy(): void;
            /**
             * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
             * %NULL.  It’s intended to be used as a callback connected to the
             * “destroy” signal of a widget. You connect gtk_widget_destroyed()
             * as a signal handler, and pass the address of your widget variable
             * as user data. Then when the widget is destroyed, the variable will
             * be set to %NULL. Useful for example to avoid multiple copies
             * of the same dialog.
             * @param widget_pointer address of a variable that contains @widget
             */
            destroyed(widget_pointer: Gtk.Widget): Gtk.Widget;
            /**
             * Returns %TRUE if `device` has been shadowed by a GTK+
             * device grab on another widget, so it would stop sending
             * events to `widget`. This may be used in the
             * #GtkWidget::grab-notify signal to check for specific
             * devices. See gtk_device_grab_add().
             * @param device a #GdkDevice
             * @returns %TRUE if there is an ongoing grab on @device          by another #GtkWidget than @widget.
             */
            device_is_shadowed(device: Gdk.Device): boolean;
            /**
             * This function is equivalent to gtk_drag_begin_with_coordinates(),
             * passing -1, -1 as coordinates.
             * @param targets The targets (data formats) in which the    source can provide the data
             * @param actions A bitmask of the allowed drag actions for this drag
             * @param button The button the user clicked to start the drag
             * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
             * @returns the context for this drag
             */
            drag_begin(
                targets: Gtk.TargetList,
                actions: Gdk.DragAction,
                button: number,
                event?: Gdk.Event | null,
            ): Gdk.DragContext;
            /**
             * Initiates a drag on the source side. The function only needs to be used
             * when the application is starting drags itself, and is not needed when
             * gtk_drag_source_set() is used.
             *
             * The `event` is used to retrieve the timestamp that will be used internally to
             * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
             * However, you should try to pass a real event in all cases, since that can be
             * used to get information about the drag.
             *
             * Generally there are three cases when you want to start a drag by hand by
             * calling this function:
             *
             * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
             * immediately when the user presses the mouse button.  Pass the `event`
             * that you have in your #GtkWidget::button-press-event handler.
             *
             * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
             * when the mouse moves past a certain threshold distance after a button-press.
             * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
             *
             * 3. During a timeout handler, if you want to start a drag after the mouse
             * button is held down for some time.  Try to save the last event that you got
             * from the mouse, using gdk_event_copy(), and pass it to this function
             * (remember to free the event with gdk_event_free() when you are done).
             * If you really cannot pass a real event, pass %NULL instead.
             * @param targets The targets (data formats) in which the    source can provide the data
             * @param actions A bitmask of the allowed drag actions for this drag
             * @param button The button the user clicked to start the drag
             * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
             * @param x The initial x coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
             * @param y The initial y coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
             * @returns the context for this drag
             */
            drag_begin_with_coordinates(
                targets: Gtk.TargetList,
                actions: Gdk.DragAction,
                button: number,
                event: Gdk.Event | null,
                x: number,
                y: number,
            ): Gdk.DragContext;
            /**
             * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
             * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
             * should trigger the beginning of a drag-and-drop operation.
             * @param start_x X coordinate of start of drag
             * @param start_y Y coordinate of start of drag
             * @param current_x current X coordinate
             * @param current_y current Y coordinate
             * @returns %TRUE if the drag threshold has been passed.
             */
            drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
            /**
             * Add the image targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_image_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_image_targets(): void;
            /**
             * Add the text targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_text_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_text_targets(): void;
            /**
             * Add the URI targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_uri_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_uri_targets(): void;
            /**
             * Looks for a match between the supported targets of `context` and the
             * `dest_target_list,` returning the first matching target, otherwise
             * returning %GDK_NONE. `dest_target_list` should usually be the return
             * value from gtk_drag_dest_get_target_list(), but some widgets may
             * have different valid targets for different parts of the widget; in
             * that case, they will have to implement a drag_motion handler that
             * passes the correct target list to this function.
             * @param context drag context
             * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (@widget).
             * @returns first target that the source offers     and the dest can accept, or %GDK_NONE
             */
            drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom;
            /**
             * Returns the list of targets this widget can accept from
             * drag-and-drop.
             * @returns the #GtkTargetList, or %NULL if none
             */
            drag_dest_get_target_list(): Gtk.TargetList | null;
            /**
             * Returns whether the widget has been configured to always
             * emit #GtkWidget::drag-motion signals.
             * @returns %TRUE if the widget always emits   #GtkWidget::drag-motion events
             */
            drag_dest_get_track_motion(): boolean;
            /**
             * Sets a widget as a potential drop destination, and adds default behaviors.
             *
             * The default behaviors listed in `flags` have an effect similar
             * to installing default handlers for the widget’s drag-and-drop signals
             * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
             * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
             * sufficient to connect to the widget’s #GtkWidget::drag-data-received
             * signal to get primitive, but consistent drag-and-drop support.
             *
             * Things become more complicated when you try to preview the dragged data,
             * as described in the documentation for #GtkWidget::drag-motion. The default
             * behaviors described by `flags` make some assumptions, that can conflict
             * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
             * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
             * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
             * Especially the later is dramatic, when your own #GtkWidget::drag-motion
             * handler calls gtk_drag_get_data() to inspect the dragged data.
             *
             * There’s no way to set a default action here, you can use the
             * #GtkWidget::drag-motion callback for that. Here’s an example which selects
             * the action to use depending on whether the control key is pressed or not:
             *
             * ```c
             * static void
             * drag_motion (GtkWidget *widget,
             *              GdkDragContext *context,
             *              gint x,
             *              gint y,
             *              guint time)
             * {
             *   GdkModifierType mask;
             *
             *   gdk_window_get_pointer (gtk_widget_get_window (widget),
             *                           NULL, NULL, &mask);
             *   if (mask & GDK_CONTROL_MASK)
             *     gdk_drag_status (context, GDK_ACTION_COPY, time);
             *   else
             *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
             * }
             * ```
             *
             * @param flags which types of default drag behavior to use
             * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this @widget will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
             * @param actions a bitmask of possible actions for a drop onto this @widget.
             */
            drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void;
            /**
             * Sets this widget as a proxy for drops to another window.
             * @param proxy_window the window to which to forward drag events
             * @param protocol the drag protocol which the @proxy_window accepts   (You can use gdk_drag_get_protocol() to determine this)
             * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
             */
            drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void;
            /**
             * Sets the target types that this widget can accept from drag-and-drop.
             * The widget must first be made into a drag destination with
             * gtk_drag_dest_set().
             * @param target_list list of droppable targets, or %NULL for none
             */
            drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void;
            /**
             * Tells the widget to emit #GtkWidget::drag-motion and
             * #GtkWidget::drag-leave events regardless of the targets and the
             * %GTK_DEST_DEFAULT_MOTION flag.
             *
             * This may be used when a widget wants to do generic
             * actions regardless of the targets that the source offers.
             * @param track_motion whether to accept all targets
             */
            drag_dest_set_track_motion(track_motion: boolean): void;
            /**
             * Clears information about a drop destination set with
             * gtk_drag_dest_set(). The widget will no longer receive
             * notification of drags.
             */
            drag_dest_unset(): void;
            /**
             * Gets the data associated with a drag. When the data
             * is received or the retrieval fails, GTK+ will emit a
             * #GtkWidget::drag-data-received signal. Failure of the retrieval
             * is indicated by the length field of the `selection_data`
             * signal parameter being negative. However, when gtk_drag_get_data()
             * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
             * then the widget will not receive notification of failed
             * drops.
             * @param context the drag context
             * @param target the target (form of the data) to retrieve
             * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
             */
            drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
            /**
             * Highlights a widget as a currently hovered drop target.
             * To end the highlight, call gtk_drag_unhighlight().
             * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
             */
            drag_highlight(): void;
            /**
             * Add the writable image targets supported by #GtkSelectionData to
             * the target list of the drag source. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_image_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_image_targets(): void;
            /**
             * Add the text targets supported by #GtkSelectionData to
             * the target list of the drag source.  The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_text_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_text_targets(): void;
            /**
             * Add the URI targets supported by #GtkSelectionData to
             * the target list of the drag source.  The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_uri_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_uri_targets(): void;
            /**
             * Gets the list of targets this widget can provide for
             * drag-and-drop.
             * @returns the #GtkTargetList, or %NULL if none
             */
            drag_source_get_target_list(): Gtk.TargetList | null;
            /**
             * Sets up a widget so that GTK+ will start a drag operation when the user
             * clicks and drags on the widget. The widget must have a window.
             * @param start_button_mask the bitmask of buttons that can start the drag
             * @param targets the table of targets     that the drag will support, may be %NULL
             * @param actions the bitmask of possible actions for a drag from this widget
             */
            drag_source_set(
                start_button_mask: Gdk.ModifierType,
                targets: Gtk.TargetEntry[] | null,
                actions: Gdk.DragAction,
            ): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to `icon`. See the docs for #GtkIconTheme for more details.
             * @param icon A #GIcon
             */
            drag_source_set_icon_gicon(icon: Gio.Icon): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to a themed icon. See the docs for #GtkIconTheme for more details.
             * @param icon_name name of icon to use
             */
            drag_source_set_icon_name(icon_name: string): void;
            /**
             * Sets the icon that will be used for drags from a particular widget
             * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
             * release it when it is no longer needed.
             * @param pixbuf the #GdkPixbuf for the drag icon
             */
            drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to a stock icon.
             * @param stock_id the ID of the stock icon to use
             */
            drag_source_set_icon_stock(stock_id: string): void;
            /**
             * Changes the target types that this widget offers for drag-and-drop.
             * The widget must first be made into a drag source with
             * gtk_drag_source_set().
             * @param target_list list of draggable targets, or %NULL for none
             */
            drag_source_set_target_list(target_list?: Gtk.TargetList | null): void;
            /**
             * Undoes the effects of gtk_drag_source_set().
             */
            drag_source_unset(): void;
            /**
             * Removes a highlight set by gtk_drag_highlight() from
             * a widget.
             */
            drag_unhighlight(): void;
            /**
             * Draws `widget` to `cr`. The top left corner of the widget will be
             * drawn to the currently set origin point of `cr`.
             *
             * You should pass a cairo context as `cr` argument that is in an
             * original state. Otherwise the resulting drawing is undefined. For
             * example changing the operator using cairo_set_operator() or the
             * line width using cairo_set_line_width() might have unwanted side
             * effects.
             * You may however change the context’s transform matrix - like with
             * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
             * region with cairo_clip() prior to calling this function. Also, it
             * is fine to modify the context with cairo_save() and
             * cairo_push_group() prior to calling this function.
             *
             * Note that special-purpose widgets may contain special code for
             * rendering to the screen and might appear differently on screen
             * and when rendered using gtk_widget_draw().
             * @param cr a cairo context to draw to
             */
            draw(cr: cairo.Context): void;
            /**
             * Ensures that `widget` has a style (`widget->`style).
             *
             * Not a very useful function; most of the time, if you
             * want the style, the widget is realized, and realized
             * widgets are guaranteed to have a style already.
             */
            ensure_style(): void;
            /**
             * Notifies the user about an input-related error on this widget.
             * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
             * gdk_window_beep(), otherwise it does nothing.
             *
             * Note that the effect of gdk_window_beep() can be configured in many
             * ways, depending on the windowing backend and the desktop environment
             * or window manager that is used.
             */
            error_bell(): void;
            /**
             * Rarely-used function. This function is used to emit
             * the event signals on a widget (those signals should never
             * be emitted without using this function to do so).
             * If you want to synthesize an event though, don’t use this function;
             * instead, use gtk_main_do_event() so the event will behave as if
             * it were in the event queue. Don’t synthesize expose events; instead,
             * use gdk_window_invalidate_rect() to invalidate a region of the
             * window.
             * @param event a #GdkEvent
             * @returns return from the event signal emission (%TRUE if               the event was handled)
             */
            event(event: Gdk.Event): boolean;
            /**
             * Stops emission of #GtkWidget::child-notify signals on `widget`. The
             * signals are queued until gtk_widget_thaw_child_notify() is called
             * on `widget`.
             *
             * This is the analogue of g_object_freeze_notify() for child properties.
             */
            freeze_child_notify(): void;
            /**
             * Returns the accessible object that describes the widget to an
             * assistive technology.
             *
             * If accessibility support is not available, this #AtkObject
             * instance may be a no-op. Likewise, if no class-specific #AtkObject
             * implementation is available for the widget instance in question,
             * it will inherit an #AtkObject implementation from the first ancestor
             * class for which such an implementation is defined.
             *
             * The documentation of the
             * [ATK](http://developer.gnome.org/atk/stable/)
             * library contains more information about accessible objects and their uses.
             * @returns the #AtkObject associated with @widget
             */
            get_accessible(): Atk.Object;
            /**
             * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
             * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
             * ancestry.
             *
             * If no action group was found matching `prefix,` then %NULL is returned.
             * @param prefix The “prefix” of the action group.
             * @returns A #GActionGroup or %NULL.
             */
            get_action_group(prefix: string): Gio.ActionGroup | null;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function, and when allocating child
             * widgets in #GtkWidget::size_allocate.
             * @returns the baseline of the @widget, or -1 if none
             */
            get_allocated_baseline(): number;
            /**
             * Returns the height that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function.
             * @returns the height of the @widget
             */
            get_allocated_height(): number;
            /**
             * Retrieves the widget’s allocated size.
             *
             * This function returns the last values passed to
             * gtk_widget_size_allocate_with_baseline(). The value differs from
             * the size returned in gtk_widget_get_allocation() in that functions
             * like gtk_widget_set_halign() can adjust the allocation, but not
             * the value returned by this function.
             *
             * If a widget is not visible, its allocated size is 0.
             */
            get_allocated_size(): [Gtk.Allocation, number];
            /**
             * Returns the width that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function.
             * @returns the width of the @widget
             */
            get_allocated_width(): number;
            /**
             * Retrieves the widget’s allocation.
             *
             * Note, when implementing a #GtkContainer: a widget’s allocation will
             * be its “adjusted” allocation, that is, the widget’s parent
             * container typically calls gtk_widget_size_allocate() with an
             * allocation, and that allocation is then adjusted (to handle margin
             * and alignment for example) before assignment to the widget.
             * gtk_widget_get_allocation() returns the adjusted allocation that
             * was actually assigned to the widget. The adjusted allocation is
             * guaranteed to be completely contained within the
             * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
             * is guaranteed that its children stay inside the assigned bounds,
             * but not that they have exactly the bounds the container assigned.
             * There is no way to get the original allocation assigned by
             * gtk_widget_size_allocate(), since it isn’t stored; if a container
             * implementation needs that information it will have to track it itself.
             */
            get_allocation(): Gtk.Allocation;
            /**
             * Gets the first ancestor of `widget` with type `widget_type`. For example,
             * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
             * the first #GtkBox that’s an ancestor of `widget`. No reference will be
             * added to the returned widget; it should not be unreferenced. See note
             * about checking for a toplevel #GtkWindow in the docs for
             * gtk_widget_get_toplevel().
             *
             * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
             * considers `widget` to be an ancestor of itself.
             * @param widget_type ancestor type
             * @returns the ancestor widget, or %NULL if not found
             */
            get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
            /**
             * Determines whether the application intends to draw on the widget in
             * an #GtkWidget::draw handler.
             *
             * See gtk_widget_set_app_paintable()
             * @returns %TRUE if the widget is app paintable
             */
            get_app_paintable(): boolean;
            /**
             * Determines whether `widget` can be a default widget. See
             * gtk_widget_set_can_default().
             * @returns %TRUE if @widget can be a default widget, %FALSE otherwise
             */
            get_can_default(): boolean;
            /**
             * Determines whether `widget` can own the input focus. See
             * gtk_widget_set_can_focus().
             * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
             */
            get_can_focus(): boolean;
            /**
             * This function is only for use in widget implementations. Obtains
             * `widget->`requisition, unless someone has forced a particular
             * geometry on the widget (e.g. with gtk_widget_set_size_request()),
             * in which case it returns that geometry instead of the widget's
             * requisition.
             *
             * This function differs from gtk_widget_size_request() in that
             * it retrieves the last size request value from `widget->`requisition,
             * while gtk_widget_size_request() actually calls the "size_request" method
             * on `widget` to compute the size request and fill in `widget->`requisition,
             * and only then returns `widget->`requisition.
             *
             * Because this function does not call the “size_request” method, it
             * can only be used when you know that `widget->`requisition is
             * up-to-date, that is, gtk_widget_size_request() has been called
             * since the last time a resize was queued. In general, only container
             * implementations have this information; applications should use
             * gtk_widget_size_request().
             */
            get_child_requisition(): Gtk.Requisition;
            /**
             * Gets the value set with gtk_widget_set_child_visible().
             * If you feel a need to use this function, your code probably
             * needs reorganization.
             *
             * This function is only useful for container implementations and
             * never should be called by an application.
             * @returns %TRUE if the widget is mapped with the parent.
             */
            get_child_visible(): boolean;
            /**
             * Retrieves the widget’s clip area.
             *
             * The clip area is the area in which all of `widget'`s drawing will
             * happen. Other toolkits call it the bounding box.
             *
             * Historically, in GTK+ the clip area has been equal to the allocation
             * retrieved via gtk_widget_get_allocation().
             */
            get_clip(): Gtk.Allocation;
            /**
             * Returns the clipboard object for the given selection to
             * be used with `widget`. `widget` must have a #GdkDisplay
             * associated with it, so must be attached to a toplevel
             * window.
             * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
             * @returns the appropriate clipboard object. If no             clipboard already exists, a new one will             be created. Once a clipboard object has             been created, it is persistent for all time.
             */
            get_clipboard(selection: Gdk.Atom): Gtk.Clipboard;
            /**
             * Obtains the composite name of a widget.
             * @returns the composite name of @widget, or %NULL if @widget is not   a composite child. The string should be freed when it is no   longer needed.
             */
            get_composite_name(): string;
            /**
             * Returns whether `device` can interact with `widget` and its
             * children. See gtk_widget_set_device_enabled().
             * @param device a #GdkDevice
             * @returns %TRUE is @device is enabled for @widget
             */
            get_device_enabled(device: Gdk.Device): boolean;
            /**
             * Returns the events mask for the widget corresponding to an specific device. These
             * are the events that the widget will receive when `device` operates on it.
             * @param device a #GdkDevice
             * @returns device event mask for @widget
             */
            get_device_events(device: Gdk.Device): Gdk.EventMask;
            /**
             * Gets the reading direction for a particular widget. See
             * gtk_widget_set_direction().
             * @returns the reading direction for the widget.
             */
            get_direction(): Gtk.TextDirection;
            /**
             * Get the #GdkDisplay for the toplevel window associated with
             * this widget. This function can only be called after the widget
             * has been added to a widget hierarchy with a #GtkWindow at the top.
             *
             * In general, you should only create display specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the #GdkDisplay for the toplevel for this widget.
             */
            get_display(): Gdk.Display;
            /**
             * Determines whether the widget is double buffered.
             *
             * See gtk_widget_set_double_buffered()
             * @returns %TRUE if the widget is double buffered
             */
            get_double_buffered(): boolean;
            /**
             * Returns the event mask (see #GdkEventMask) for the widget. These are the
             * events that the widget will receive.
             *
             * Note: Internally, the widget event mask will be the logical OR of the event
             * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
             * event mask necessary to cater for every #GtkEventController created for the
             * widget.
             * @returns event mask for @widget
             */
            get_events(): number;
            /**
             * Returns whether the widget should grab focus when it is clicked with the mouse.
             * See gtk_widget_set_focus_on_click().
             * @returns %TRUE if the widget should grab focus when it is clicked with               the mouse.
             */
            get_focus_on_click(): boolean;
            /**
             * Gets the font map that has been set with gtk_widget_set_font_map().
             * @returns A #PangoFontMap, or %NULL
             */
            get_font_map(): Pango.FontMap | null;
            /**
             * Returns the #cairo_font_options_t used for Pango rendering. When not set,
             * the defaults font options for the #GdkScreen will be used.
             * @returns the #cairo_font_options_t or %NULL if not set
             */
            get_font_options(): cairo.FontOptions | null;
            /**
             * Obtains the frame clock for a widget. The frame clock is a global
             * “ticker” that can be used to drive animations and repaints.  The
             * most common reason to get the frame clock is to call
             * gdk_frame_clock_get_frame_time(), in order to get a time to use for
             * animating. For example you might record the start of the animation
             * with an initial value from gdk_frame_clock_get_frame_time(), and
             * then update the animation by calling
             * gdk_frame_clock_get_frame_time() again during each repaint.
             *
             * gdk_frame_clock_request_phase() will result in a new frame on the
             * clock, but won’t necessarily repaint any widgets. To repaint a
             * widget, you have to use gtk_widget_queue_draw() which invalidates
             * the widget (thus scheduling it to receive a draw on the next
             * frame). gtk_widget_queue_draw() will also end up requesting a frame
             * on the appropriate frame clock.
             *
             * A widget’s frame clock will not change while the widget is
             * mapped. Reparenting a widget (which implies a temporary unmap) can
             * change the widget’s frame clock.
             *
             * Unrealized widgets do not have a frame clock.
             * @returns a #GdkFrameClock, or %NULL if widget is unrealized
             */
            get_frame_clock(): Gdk.FrameClock | null;
            /**
             * Gets the value of the #GtkWidget:halign property.
             *
             * For backwards compatibility reasons this method will never return
             * %GTK_ALIGN_BASELINE, but instead it will convert it to
             * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
             * alignment.
             * @returns the horizontal alignment of @widget
             */
            get_halign(): Gtk.Align;
            /**
             * Returns the current value of the has-tooltip property.  See
             * #GtkWidget:has-tooltip for more information.
             * @returns current value of has-tooltip on @widget.
             */
            get_has_tooltip(): boolean;
            /**
             * Determines whether `widget` has a #GdkWindow of its own. See
             * gtk_widget_set_has_window().
             * @returns %TRUE if @widget has a window, %FALSE otherwise
             */
            get_has_window(): boolean;
            /**
             * Gets whether the widget would like any available extra horizontal
             * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Containers should use gtk_widget_compute_expand() rather than
             * this function, to see whether a widget, or any of its children,
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
             * Gets whether gtk_widget_set_hexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * If hexpand is set, then it overrides any computed
             * expand value based on child widgets. If hexpand is not
             * set, then the expand value depends on whether any
             * children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @returns whether hexpand has been explicitly set
             */
            get_hexpand_set(): boolean;
            /**
             * Whether the widget is mapped.
             * @returns %TRUE if the widget is mapped, %FALSE otherwise.
             */
            get_mapped(): boolean;
            /**
             * Gets the value of the #GtkWidget:margin-bottom property.
             * @returns The bottom margin of @widget
             */
            get_margin_bottom(): number;
            /**
             * Gets the value of the #GtkWidget:margin-end property.
             * @returns The end margin of @widget
             */
            get_margin_end(): number;
            /**
             * Gets the value of the #GtkWidget:margin-left property.
             * @returns The left margin of @widget
             */
            get_margin_left(): number;
            /**
             * Gets the value of the #GtkWidget:margin-right property.
             * @returns The right margin of @widget
             */
            get_margin_right(): number;
            /**
             * Gets the value of the #GtkWidget:margin-start property.
             * @returns The start margin of @widget
             */
            get_margin_start(): number;
            /**
             * Gets the value of the #GtkWidget:margin-top property.
             * @returns The top margin of @widget
             */
            get_margin_top(): number;
            /**
             * Returns the modifier mask the `widget’`s windowing system backend
             * uses for a particular purpose.
             *
             * See gdk_keymap_get_modifier_mask().
             * @param intent the use case for the modifier mask
             * @returns the modifier mask used for @intent.
             */
            get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
            /**
             * Returns the current modifier style for the widget. (As set by
             * gtk_widget_modify_style().) If no style has previously set, a new
             * #GtkRcStyle will be created with all values unset, and set as the
             * modifier style for the widget. If you make changes to this rc
             * style, you must call gtk_widget_modify_style(), passing in the
             * returned rc style, to make sure that your changes take effect.
             *
             * Caution: passing the style back to gtk_widget_modify_style() will
             * normally end up destroying it, because gtk_widget_modify_style() copies
             * the passed-in style and sets the copy as the new modifier style,
             * thus dropping any reference to the old modifier style. Add a reference
             * to the modifier style if you want to keep it alive.
             * @returns the modifier style for the widget.     This rc style is owned by the widget. If you want to keep a     pointer to value this around, you must add a refcount using     g_object_ref().
             */
            get_modifier_style(): Gtk.RcStyle;
            /**
             * Retrieves the name of a widget. See gtk_widget_set_name() for the
             * significance of widget names.
             * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
             */
            get_name(): string;
            /**
             * Returns the current value of the #GtkWidget:no-show-all property,
             * which determines whether calls to gtk_widget_show_all()
             * will affect this widget.
             * @returns the current value of the “no-show-all” property.
             */
            get_no_show_all(): boolean;
            /**
             * Fetches the requested opacity for this widget.
             * See gtk_widget_set_opacity().
             * @returns the requested opacity for this widget.
             */
            get_opacity(): number;
            /**
             * Gets a #PangoContext with the appropriate font map, font description,
             * and base direction for this widget. Unlike the context returned
             * by gtk_widget_create_pango_context(), this context is owned by
             * the widget (it can be used until the screen for the widget changes
             * or the widget is removed from its toplevel), and will be updated to
             * match any changes to the widget’s attributes. This can be tracked
             * by using the #GtkWidget::screen-changed signal on the widget.
             * @returns the #PangoContext for the widget.
             */
            get_pango_context(): Pango.Context;
            /**
             * Returns the parent container of `widget`.
             * @returns the parent container of @widget, or %NULL
             */
            get_parent(): Gtk.Widget | null;
            /**
             * Gets `widget’`s parent window, or %NULL if it does not have one.
             * @returns the parent window of @widget, or %NULL if it does not have a parent window.
             */
            get_parent_window(): Gdk.Window | null;
            /**
             * Returns the #GtkWidgetPath representing `widget,` if the widget
             * is not connected to a toplevel widget, a partial path will be
             * created.
             * @returns The #GtkWidgetPath representing @widget
             */
            get_path(): Gtk.WidgetPath;
            /**
             * Obtains the location of the mouse pointer in widget coordinates.
             * Widget coordinates are a bit odd; for historical reasons, they are
             * defined as `widget->`window coordinates for widgets that return %TRUE for
             * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
             * `widget->`allocation.y otherwise.
             */
            get_pointer(): [number, number];
            /**
             * Retrieves a widget’s initial minimum and natural height.
             *
             * This call is specific to width-for-height requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            get_preferred_height(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
             * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
             * that no baseline is requested for this widget.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
             * and by any #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation, or -1 if none
             */
            get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
            /**
             * Retrieves a widget’s minimum and natural height if it would be given
             * the specified `width`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation
             */
            get_preferred_height_for_width(width: number): [number, number];
            /**
             * Retrieves the minimum and natural size of a widget, taking
             * into account the widget’s preference for height-for-width management.
             *
             * This is used to retrieve a suitable size by container widgets which do
             * not impose any restrictions on the child placement. It can be used
             * to deduce toplevel window and menu sizes as well as child widgets in
             * free-form containers such as GtkLayout.
             *
             * Handle with care. Note that the natural height of a height-for-width
             * widget will generally be a smaller size than the minimum height, since the required
             * height for the natural width is generally smaller than the required height for
             * the minimum width.
             *
             * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
             * baseline alignment.
             */
            get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
            /**
             * Retrieves a widget’s initial minimum and natural width.
             *
             * This call is specific to height-for-width requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            get_preferred_width(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural width if it would be given
             * the specified `height`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param height the height which is available for allocation
             */
            get_preferred_width_for_height(height: number): [number, number];
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
             * See gtk_widget_set_receives_default().
             * @returns %TRUE if @widget acts as the default widget when focused,               %FALSE otherwise
             */
            get_receives_default(): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * #GtkBin widgets generally propagate the preference of
             * their child, container widgets need to request something either in
             * context of their children or in context of their allocation
             * capabilities.
             * @returns The #GtkSizeRequestMode preferred by @widget.
             */
            get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Retrieves the widget’s requisition.
             *
             * This function should only be used by widget implementations in
             * order to figure whether the widget’s requisition has actually
             * changed after some internal state change (so that they can call
             * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
             *
             * Normally, gtk_widget_size_request() should be used.
             */
            get_requisition(): Gtk.Requisition;
            /**
             * Get the root window where this widget is located. This function can
             * only be called after the widget has been added to a widget
             * hierarchy with #GtkWindow at the top.
             *
             * The root window is useful for such purposes as creating a popup
             * #GdkWindow associated with the window. In general, you should only
             * create display specific resources when a widget has been realized,
             * and you should free those resources when the widget is unrealized.
             * @returns the #GdkWindow root window for the toplevel for this widget.
             */
            get_root_window(): Gdk.Window;
            /**
             * Retrieves the internal scale factor that maps from window coordinates
             * to the actual device pixels. On traditional systems this is 1, on
             * high density outputs, it can be a higher value (typically 2).
             *
             * See gdk_window_get_scale_factor().
             * @returns the scale factor for @widget
             */
            get_scale_factor(): number;
            /**
             * Get the #GdkScreen from the toplevel window associated with
             * this widget. This function can only be called after the widget
             * has been added to a widget hierarchy with a #GtkWindow
             * at the top.
             *
             * In general, you should only create screen specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the #GdkScreen for the toplevel for this widget.
             */
            get_screen(): Gdk.Screen;
            /**
             * Returns the widget’s sensitivity (in the sense of returning
             * the value that has been set using gtk_widget_set_sensitive()).
             *
             * The effective sensitivity of a widget is however determined by both its
             * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
             * @returns %TRUE if the widget is sensitive
             */
            get_sensitive(): boolean;
            /**
             * Gets the settings object holding the settings used for this widget.
             *
             * Note that this function can only be called when the #GtkWidget
             * is attached to a toplevel, since the settings object is specific
             * to a particular #GdkScreen.
             * @returns the relevant #GtkSettings object
             */
            get_settings(): Gtk.Settings;
            /**
             * Gets the size request that was explicitly set for the widget using
             * gtk_widget_set_size_request(). A value of -1 stored in `width` or
             * `height` indicates that that dimension has not been set explicitly
             * and the natural requisition of the widget will be used instead. See
             * gtk_widget_set_size_request(). To get the size a widget will
             * actually request, call gtk_widget_get_preferred_size() instead of
             * this function.
             */
            get_size_request(): [number, number];
            /**
             * Returns the widget’s state. See gtk_widget_set_state().
             * @returns the state of @widget.
             */
            get_state(): Gtk.StateType;
            /**
             * Returns the widget state as a flag set. It is worth mentioning
             * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
             * returned, that is, also based on parent insensitivity, even if
             * `widget` itself is sensitive.
             *
             * Also note that if you are looking for a way to obtain the
             * #GtkStateFlags to pass to a #GtkStyleContext method, you
             * should look at gtk_style_context_get_state().
             * @returns The state flags for widget
             */
            get_state_flags(): Gtk.StateFlags;
            /**
             * Simply an accessor function that returns `widget->`style.
             * @returns the widget’s #GtkStyle
             */
            get_style(): Gtk.Style;
            /**
             * Returns the style context associated to `widget`. The returned object is
             * guaranteed to be the same for the lifetime of `widget`.
             * @returns a #GtkStyleContext. This memory is owned by @widget and          must not be freed.
             */
            get_style_context(): Gtk.StyleContext;
            /**
             * Returns %TRUE if `widget` is multiple pointer aware. See
             * gtk_widget_set_support_multidevice() for more information.
             * @returns %TRUE if @widget is multidevice aware.
             */
            get_support_multidevice(): boolean;
            /**
             * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
             *
             * This will only report children which were previously declared with
             * gtk_widget_class_bind_template_child_full() or one of its
             * variants.
             *
             * This function is only meant to be called for code which is private to the `widget_type` which
             * declared the child and is meant for language bindings which cannot easily make use
             * of the GObject structure offsets.
             * @param widget_type The #GType to get a template child for
             * @param name The “id” of the child defined in the template XML
             * @returns The object built in the template XML with the id @name
             */
            get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
            /**
             * Gets the contents of the tooltip for `widget`.
             * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
             */
            get_tooltip_markup(): string | null;
            /**
             * Gets the contents of the tooltip for `widget`.
             * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
             */
            get_tooltip_text(): string | null;
            /**
             * Returns the #GtkWindow of the current tooltip. This can be the
             * GtkWindow created by default, or the custom tooltip window set
             * using gtk_widget_set_tooltip_window().
             * @returns The #GtkWindow of the current tooltip.
             */
            get_tooltip_window(): Gtk.Window;
            /**
             * This function returns the topmost widget in the container hierarchy
             * `widget` is a part of. If `widget` has no parent widgets, it will be
             * returned as the topmost widget. No reference will be added to the
             * returned widget; it should not be unreferenced.
             *
             * Note the difference in behavior vs. gtk_widget_get_ancestor();
             * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
             * would return
             * %NULL if `widget` wasn’t inside a toplevel window, and if the
             * window was inside a #GtkWindow-derived widget which was in turn
             * inside the toplevel #GtkWindow. While the second case may
             * seem unlikely, it actually happens when a #GtkPlug is embedded
             * inside a #GtkSocket within the same application.
             *
             * To reliably find the toplevel #GtkWindow, use
             * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
             * on the result. For instance, to get the title of a widget's toplevel
             * window, one might use:
             *
             * ```c
             * static const char *
             * get_widget_toplevel_title (GtkWidget *widget)
             * {
             *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
             *   if (GTK_IS_WINDOW (toplevel))
             *     {
             *       return gtk_window_get_title (GTK_WINDOW (toplevel));
             *     }
             *
             *   return NULL;
             * }
             * ```
             *
             * @returns the topmost ancestor of @widget, or @widget itself    if there’s no ancestor.
             */
            get_toplevel(): Gtk.Widget;
            /**
             * Gets the value of the #GtkWidget:valign property.
             *
             * For backwards compatibility reasons this method will never return
             * %GTK_ALIGN_BASELINE, but instead it will convert it to
             * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
             * children it must use gtk_widget_get_valign_with_baseline(), or
             * `g_object_get (widget, "valign", &value, NULL)`, which will
             * also report the true value.
             * @returns the vertical alignment of @widget, ignoring baseline alignment
             */
            get_valign(): Gtk.Align;
            /**
             * Gets the value of the #GtkWidget:valign property, including
             * %GTK_ALIGN_BASELINE.
             * @returns the vertical alignment of @widget
             */
            get_valign_with_baseline(): Gtk.Align;
            /**
             * Gets whether the widget would like any available extra vertical
             * space.
             *
             * See gtk_widget_get_hexpand() for more detail.
             * @returns whether vexpand flag is set
             */
            get_vexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_vexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * See gtk_widget_get_hexpand_set() for more detail.
             * @returns whether vexpand has been explicitly set
             */
            get_vexpand_set(): boolean;
            /**
             * Determines whether the widget is visible. If you want to
             * take into account whether the widget’s parent is also marked as
             * visible, use gtk_widget_is_visible() instead.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See gtk_widget_set_visible().
             * @returns %TRUE if the widget is visible
             */
            get_visible(): boolean;
            /**
             * Gets the visual that will be used to render `widget`.
             * @returns the visual for @widget
             */
            get_visual(): Gdk.Visual;
            /**
             * Returns the widget’s window if it is realized, %NULL otherwise
             * @returns @widget’s window.
             */
            get_window(): Gdk.Window | null;
            /**
             * Makes `widget` the current grabbed widget.
             *
             * This means that interaction with other widgets in the same
             * application is blocked and mouse as well as keyboard events
             * are delivered to this widget.
             *
             * If `widget` is not sensitive, it is not set as the current
             * grabbed widget and this function does nothing.
             */
            grab_add(): void;
            /**
             * Causes `widget` to become the default widget. `widget` must be able to be
             * a default widget; typically you would ensure this yourself
             * by calling gtk_widget_set_can_default() with a %TRUE value.
             * The default widget is activated when
             * the user presses Enter in a window. Default widgets must be
             * activatable, that is, gtk_widget_activate() should affect them. Note
             * that #GtkEntry widgets require the “activates-default” property
             * set to %TRUE before they activate the default widget when Enter
             * is pressed and the #GtkEntry is focused.
             */
            grab_default(): void;
            /**
             * Causes `widget` to have the keyboard focus for the #GtkWindow it's
             * inside. `widget` must be a focusable widget, such as a #GtkEntry;
             * something like #GtkFrame won’t work.
             *
             * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
             * gtk_widget_set_can_focus() to modify that flag.
             *
             * The widget also needs to be realized and mapped. This is indicated by the
             * related signals. Grabbing the focus immediately after creating the widget
             * will likely fail and cause critical warnings.
             */
            grab_focus(): void;
            /**
             * Removes the grab from the given widget.
             *
             * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
             *
             * If `widget` does not have the grab, this function does nothing.
             */
            grab_remove(): void;
            /**
             * Determines whether the widget is currently grabbing events, so it
             * is the only widget receiving input events (keyboard and mouse).
             *
             * See also gtk_grab_add().
             * @returns %TRUE if the widget is in the grab_widgets stack
             */
            has_grab(): boolean;
            /**
             * Determines if the widget style has been looked up through the rc mechanism.
             * @returns %TRUE if the widget has been looked up through the rc   mechanism, %FALSE otherwise.
             */
            has_rc_style(): boolean;
            /**
             * Checks whether there is a #GdkScreen is associated with
             * this widget. All toplevel widgets have an associated
             * screen, and all widgets added into a hierarchy with a toplevel
             * window at the top.
             * @returns %TRUE if there is a #GdkScreen associated   with the widget.
             */
            has_screen(): boolean;
            /**
             * Determines if the widget should show a visible indication that
             * it has the global input focus. This is a convenience function for
             * use in ::draw handlers that takes into account whether focus
             * indication should currently be shown in the toplevel window of
             * `widget`. See gtk_window_get_focus_visible() for more information
             * about focus indication.
             *
             * To find out if the widget has the global input focus, use
             * gtk_widget_has_focus().
             * @returns %TRUE if the widget should display a “focus rectangle”
             */
            has_visible_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show(), causing the widget to be
             * hidden (invisible to the user).
             */
            hide(): void;
            /**
             * Utility function; intended to be connected to the #GtkWidget::delete-event
             * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
             * argument, then returns %TRUE. If connected to ::delete-event, the
             * result is that clicking the close button for a window (on the
             * window frame, top right corner usually) will hide but not destroy
             * the window. By default, GTK+ destroys windows when ::delete-event
             * is received.
             * @returns %TRUE
             */
            hide_on_delete(): boolean;
            /**
             * Returns whether the widget is currently being destroyed.
             * This information can sometimes be used to avoid doing
             * unnecessary work.
             * @returns %TRUE if @widget is being destroyed
             */
            in_destruction(): boolean;
            /**
             * Creates and initializes child widgets defined in templates. This
             * function must be called in the instance initializer for any
             * class which assigned itself a template using gtk_widget_class_set_template()
             *
             * It is important to call this function in the instance initializer
             * of a #GtkWidget subclass and not in #GObject.constructed() or
             * #GObject.constructor() for two reasons.
             *
             * One reason is that generally derived widgets will assume that parent
             * class composite widgets have been created in their instance
             * initializers.
             *
             * Another reason is that when calling g_object_new() on a widget with
             * composite templates, it’s important to build the composite widgets
             * before the construct properties are set. Properties passed to g_object_new()
             * should take precedence over properties set in the private template XML.
             */
            init_template(): void;
            /**
             * Sets an input shape for this widget’s GDK window. This allows for
             * windows which react to mouse click in a nonrectangular region, see
             * gdk_window_input_shape_combine_region() for more information.
             * @param region shape to be added, or %NULL to remove an existing shape
             */
            input_shape_combine_region(region?: cairo.Region | null): void;
            /**
             * Inserts `group` into `widget`. Children of `widget` that implement
             * #GtkActionable can then be associated with actions in `group` by
             * setting their “action-name” to
             * `prefix`.`action-name`.
             *
             * If `group` is %NULL, a previously inserted group for `name` is removed
             * from `widget`.
             * @param name the prefix for actions in @group
             * @param group a #GActionGroup, or %NULL
             */
            insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
            /**
             * Computes the intersection of a `widget’`s area and `area,` storing
             * the intersection in `intersection,` and returns %TRUE if there was
             * an intersection.  `intersection` may be %NULL if you’re only
             * interested in whether there was an intersection.
             * @param area a rectangle
             * @returns %TRUE if there was an intersection
             */
            intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
            /**
             * Determines whether `widget` is somewhere inside `ancestor,` possibly with
             * intermediate containers.
             * @param ancestor another #GtkWidget
             * @returns %TRUE if @ancestor contains @widget as a child,    grandchild, great grandchild, etc.
             */
            is_ancestor(ancestor: Gtk.Widget): boolean;
            /**
             * Whether `widget` can rely on having its alpha channel
             * drawn correctly. On X11 this function returns whether a
             * compositing manager is running for `widget’`s screen.
             *
             * Please note that the semantics of this call will change
             * in the future if used on a widget that has a composited
             * window in its hierarchy (as set by gdk_window_set_composited()).
             * @returns %TRUE if the widget can rely on its alpha channel being drawn correctly.
             */
            is_composited(): boolean;
            /**
             * Determines whether `widget` can be drawn to. A widget can be drawn
             * to if it is mapped and visible.
             * @returns %TRUE if @widget is drawable, %FALSE otherwise
             */
            is_drawable(): boolean;
            /**
             * Returns the widget’s effective sensitivity, which means
             * it is sensitive itself and also its parent widget is sensitive
             * @returns %TRUE if the widget is effectively sensitive
             */
            is_sensitive(): boolean;
            /**
             * Determines whether `widget` is a toplevel widget.
             *
             * Currently only #GtkWindow and #GtkInvisible (and out-of-process
             * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
             * widget.
             * @returns %TRUE if @widget is a toplevel, %FALSE otherwise
             */
            is_toplevel(): boolean;
            /**
             * Determines whether the widget and all its parents are marked as
             * visible.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See also gtk_widget_get_visible() and gtk_widget_set_visible()
             * @returns %TRUE if the widget and all its parents are visible
             */
            is_visible(): boolean;
            /**
             * This function should be called whenever keyboard navigation within
             * a single widget hits a boundary. The function emits the
             * #GtkWidget::keynav-failed signal on the widget and its return
             * value should be interpreted in a way similar to the return value of
             * gtk_widget_child_focus():
             *
             * When %TRUE is returned, stay in the widget, the failed keyboard
             * navigation is OK and/or there is nowhere we can/should move the
             * focus to.
             *
             * When %FALSE is returned, the caller should continue with keyboard
             * navigation outside the widget, e.g. by calling
             * gtk_widget_child_focus() on the widget’s toplevel.
             *
             * The default ::keynav-failed handler returns %FALSE for
             * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
             * values of #GtkDirectionType it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * gtk_widget_error_bell() to notify the user of the failed keyboard
             * navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * #GtkEntry widgets where the user should be able to navigate the
             * entire row with the cursor keys, as e.g. known from user interfaces
             * that require entering license keys.
             * @param direction direction of focus movement
             * @returns %TRUE if stopping keyboard navigation is fine, %FALSE               if the emitting widget should try to handle the keyboard               navigation attempt in its parent container(s).
             */
            keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Lists the closures used by `widget` for accelerator group connections
             * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
             * The closures can be used to monitor accelerator changes on `widget,`
             * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
             * #GtkAccelGroup of a closure which can be found out with
             * gtk_accel_group_from_accel_closure().
             * @returns a newly allocated #GList of closures
             */
            list_accel_closures(): GObject.Closure[];
            /**
             * Retrieves a %NULL-terminated array of strings containing the prefixes of
             * #GActionGroup's available to `widget`.
             * @returns a %NULL-terminated array of strings.
             */
            list_action_prefixes(): string[];
            /**
             * Returns a newly allocated list of the widgets, normally labels, for
             * which this widget is the target of a mnemonic (see for example,
             * gtk_label_set_mnemonic_widget()).
             *
             * The widgets in the list are not individually referenced. If you
             * want to iterate through the list and perform actions involving
             * callbacks that might destroy the widgets, you
             * must call `g_list_foreach (result,
             * (GFunc)g_object_ref, NULL)` first, and then unref all the
             * widgets afterwards.
             * @returns the list of  mnemonic labels; free this list  with g_list_free() when you are done with it.
             */
            list_mnemonic_labels(): Gtk.Widget[];
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be mapped if it isn’t already.
             */
            map(): void;
            /**
             * Emits the #GtkWidget::mnemonic-activate signal.
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             * @returns %TRUE if the signal has been handled
             */
            mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Sets the base color for a widget in a particular state.
             * All other style values are left untouched. The base color
             * is the background color used along with the text color
             * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
             * and #GtkTextView. See also gtk_widget_modify_style().
             *
             * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
             * > flag set) draw on their parent container’s window and thus may
             * > not draw any background themselves. This is the case for e.g.
             * > #GtkLabel.
             * >
             * > To modify the background of such widgets, you have to set the
             * > base color on their parent; if you want to set the background
             * > of a rectangular area around a label, try placing the label in
             * > a #GtkEventBox widget and setting the base color on that.
             * @param state the state for which to set the base color
             * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
             */
            modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the background color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             *
             * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
             * > flag set) draw on their parent container’s window and thus may
             * > not draw any background themselves. This is the case for e.g.
             * > #GtkLabel.
             * >
             * > To modify the background of such widgets, you have to set the
             * > background color on their parent; if you want to set the background
             * > of a rectangular area around a label, try placing the label in
             * > a #GtkEventBox widget and setting the background color on that.
             * @param state the state for which to set the background color
             * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
             */
            modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the cursor color to use in a widget, overriding the #GtkWidget
             * cursor-color and secondary-cursor-color
             * style properties.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
             * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
             */
            modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void;
            /**
             * Sets the foreground color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param state the state for which to set the foreground color
             * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
             */
            modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the font to use for a widget.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
             */
            modify_font(font_desc?: Pango.FontDescription | null): void;
            /**
             * Modifies style values on the widget.
             *
             * Modifications made using this technique take precedence over
             * style values set via an RC file, however, they will be overridden
             * if a style is explicitly set on the widget using gtk_widget_set_style().
             * The #GtkRcStyle-struct is designed so each field can either be
             * set or unset, so it is possible, using this function, to modify some
             * style values and leave the others unchanged.
             *
             * Note that modifications made with this function are not cumulative
             * with previous calls to gtk_widget_modify_style() or with such
             * functions as gtk_widget_modify_fg(). If you wish to retain
             * previous values, you must first call gtk_widget_get_modifier_style(),
             * make your modifications to the returned style, then call
             * gtk_widget_modify_style() with that style. On the other hand,
             * if you first call gtk_widget_modify_style(), subsequent calls
             * to such functions gtk_widget_modify_fg() will have a cumulative
             * effect with the initial modifications.
             * @param style the #GtkRcStyle-struct holding the style modifications
             */
            modify_style(style: Gtk.RcStyle): void;
            /**
             * Sets the text color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * The text color is the foreground color used along with the
             * base color (see gtk_widget_modify_base()) for widgets such
             * as #GtkEntry and #GtkTextView.
             * See also gtk_widget_modify_style().
             * @param state the state for which to set the text color
             * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
             */
            modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void;
            /**
             * Sets the background color to use for a widget.
             *
             * All other style values are left untouched.
             * See gtk_widget_override_color().
             * @param state the state for which to set the background color
             * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
             */
            override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void;
            /**
             * Sets the color to use for a widget.
             *
             * All other style values are left untouched.
             *
             * This function does not act recursively. Setting the color of a
             * container does not affect its children. Note that some widgets that
             * you may not think of as containers, for instance #GtkButtons,
             * are actually containers.
             *
             * This API is mostly meant as a quick way for applications to
             * change a widget appearance. If you are developing a widgets
             * library and intend this change to be themeable, it is better
             * done by setting meaningful CSS classes in your
             * widget/container implementation through gtk_style_context_add_class().
             *
             * This way, your widget library can install a #GtkCssProvider
             * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
             * to provide a default styling for those widgets that need so, and
             * this theming may fully overridden by the user’s theme.
             *
             * Note that for complex widgets this may bring in undesired
             * results (such as uniform background color everywhere), in
             * these cases it is better to fully style such widgets through a
             * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
             * priority.
             * @param state the state for which to set the color
             * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
             */
            override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void;
            /**
             * Sets the cursor color to use in a widget, overriding the
             * cursor-color and secondary-cursor-color
             * style properties. All other style values are left untouched.
             * See also gtk_widget_modify_style().
             *
             * Note that the underlying properties have the #GdkColor type,
             * so the alpha value in `primary` and `secondary` will be ignored.
             * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
             * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
             */
            override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void;
            /**
             * Sets the font to use for a widget. All other style values are
             * left untouched. See gtk_widget_override_color().
             * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
             */
            override_font(font_desc?: Pango.FontDescription | null): void;
            /**
             * Sets a symbolic color for a widget.
             *
             * All other style values are left untouched.
             * See gtk_widget_override_color() for overriding the foreground
             * or background color.
             * @param name the name of the symbolic color to modify
             * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
             */
            override_symbolic_color(name: string, color?: Gdk.RGBA | null): void;
            /**
             * Obtains the full path to `widget`. The path is simply the name of a
             * widget and all its parents in the container hierarchy, separated by
             * periods. The name of a widget comes from
             * gtk_widget_get_name(). Paths are used to apply styles to a widget
             * in gtkrc configuration files. Widget names are the type of the
             * widget by default (e.g. “GtkButton”) or can be set to an
             * application-specific value with gtk_widget_set_name(). By setting
             * the name of a widget, you allow users or theme authors to apply
             * styles to that specific widget in their gtkrc
             * file. `path_reversed_p` fills in the path in reverse order,
             * i.e. starting with `widget’`s name instead of starting with the name
             * of `widget’`s outermost ancestor.
             */
            path(): [number, string, string];
            /**
             * This function is only for use in widget implementations.
             *
             * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
             * function. Use this function instead of gtk_widget_queue_resize()
             * when the `widget'`s size request didn't change but it wants to
             * reposition its contents.
             *
             * An example user of this function is gtk_widget_set_halign().
             */
            queue_allocate(): void;
            /**
             * Mark `widget` as needing to recompute its expand flags. Call
             * this function when setting legacy expand child properties
             * on the child of a container.
             *
             * See gtk_widget_compute_expand().
             */
            queue_compute_expand(): void;
            /**
             * Equivalent to calling gtk_widget_queue_draw_area() for the
             * entire area of a widget.
             */
            queue_draw(): void;
            /**
             * Convenience function that calls gtk_widget_queue_draw_region() on
             * the region created from the given coordinates.
             *
             * The region here is specified in widget coordinates.
             * Widget coordinates are a bit odd; for historical reasons, they are
             * defined as `widget->`window coordinates for widgets that return %TRUE for
             * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
             * `widget->`allocation.y otherwise.
             *
             * `width` or `height` may be 0, in this case this function does
             * nothing. Negative values for `width` and `height` are not allowed.
             * @param x x coordinate of upper-left corner of rectangle to redraw
             * @param y y coordinate of upper-left corner of rectangle to redraw
             * @param width width of region to draw
             * @param height height of region to draw
             */
            queue_draw_area(x: number, y: number, width: number, height: number): void;
            /**
             * Invalidates the area of `widget` defined by `region` by calling
             * gdk_window_invalidate_region() on the widget’s window and all its
             * child windows. Once the main loop becomes idle (after the current
             * batch of events has been processed, roughly), the window will
             * receive expose events for the union of all regions that have been
             * invalidated.
             *
             * Normally you would only use this function in widget
             * implementations. You might also use it to schedule a redraw of a
             * #GtkDrawingArea or some portion thereof.
             * @param region region to draw
             */
            queue_draw_region(region: cairo.Region): void;
            /**
             * This function is only for use in widget implementations.
             * Flags a widget to have its size renegotiated; should
             * be called when a widget for some reason has a new size request.
             * For example, when you change the text in a #GtkLabel, #GtkLabel
             * queues a resize to ensure there’s enough space for the new text.
             *
             * Note that you cannot call gtk_widget_queue_resize() on a widget
             * from inside its implementation of the GtkWidgetClass::size_allocate
             * virtual method. Calls to gtk_widget_queue_resize() from inside
             * GtkWidgetClass::size_allocate will be silently ignored.
             */
            queue_resize(): void;
            /**
             * This function works like gtk_widget_queue_resize(),
             * except that the widget is not invalidated.
             */
            queue_resize_no_redraw(): void;
            /**
             * Creates the GDK (windowing system) resources associated with a
             * widget.  For example, `widget->`window will be created when a widget
             * is realized.  Normally realization happens implicitly; if you show
             * a widget and all its parent containers, then the widget will be
             * realized and mapped automatically.
             *
             * Realizing a widget requires all
             * the widget’s parent widgets to be realized; calling
             * gtk_widget_realize() realizes the widget’s parents in addition to
             * `widget` itself. If a widget is not yet inside a toplevel window
             * when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * #GtkWidget::draw. Or simply g_signal_connect () to the
             * #GtkWidget::realize signal.
             */
            realize(): void;
            /**
             * Computes the intersection of a `widget’`s area and `region,` returning
             * the intersection. The result may be empty, use cairo_region_is_empty() to
             * check.
             * @param region a #cairo_region_t, in the same coordinate system as          @widget->allocation. That is, relative to @widget->window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of @widget->window otherwise.
             * @returns A newly allocated region holding the intersection of @widget     and @region.
             */
            region_intersect(region: cairo.Region): cairo.Region;
            /**
             * Registers a #GdkWindow with the widget and sets it up so that
             * the widget receives events for it. Call gtk_widget_unregister_window()
             * when destroying the window.
             *
             * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
             * this up. This is now deprecated and you should use gtk_widget_register_window()
             * instead. Old code will keep working as is, although some new features like
             * transparency might not work perfectly.
             * @param window a #GdkWindow
             */
            register_window(window: Gdk.Window): void;
            /**
             * Removes an accelerator from `widget,` previously installed with
             * gtk_widget_add_accelerator().
             * @param accel_group accel group for this widget
             * @param accel_key GDK keyval of the accelerator
             * @param accel_mods modifier key combination of the accelerator
             * @returns whether an accelerator was installed and could be removed
             */
            remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
            /**
             * Removes a widget from the list of mnemonic labels for
             * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
             * must have previously been added to the list with
             * gtk_widget_add_mnemonic_label().
             * @param label a #GtkWidget that was previously set as a mnemonic label for         @widget with gtk_widget_add_mnemonic_label().
             */
            remove_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Removes a tick callback previously registered with
             * gtk_widget_add_tick_callback().
             * @param id an id returned by gtk_widget_add_tick_callback()
             */
            remove_tick_callback(id: number): void;
            /**
             * A convenience function that uses the theme settings for `widget`
             * to look up `stock_id` and render it to a pixbuf. `stock_id` should
             * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
             * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
             * string that identifies the widget or code doing the rendering, so
             * that theme engines can special-case rendering for that widget or
             * code.
             *
             * The pixels in the returned #GdkPixbuf are shared with the rest of
             * the application and should not be modified. The pixbuf should be
             * freed after use with g_object_unref().
             * @param stock_id a stock ID
             * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
             * @param detail render detail to pass to theme engine
             * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
             */
            render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null;
            /**
             * A convenience function that uses the theme engine and style
             * settings for `widget` to look up `stock_id` and render it to
             * a pixbuf. `stock_id` should be a stock icon ID such as
             * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
             * such as #GTK_ICON_SIZE_MENU.
             *
             * The pixels in the returned #GdkPixbuf are shared with the rest of
             * the application and should not be modified. The pixbuf should be freed
             * after use with g_object_unref().
             * @param stock_id a stock ID
             * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
             * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
             */
            render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
            /**
             * Moves a widget from one #GtkContainer to another, handling reference
             * count issues to avoid destroying the widget.
             * @param new_parent a #GtkContainer to move the widget into
             */
            reparent(new_parent: Gtk.Widget): void;
            /**
             * Reset the styles of `widget` and all descendents, so when
             * they are looked up again, they get the correct values
             * for the currently loaded RC file settings.
             *
             * This function is not useful for applications.
             */
            reset_rc_styles(): void;
            /**
             * Updates the style context of `widget` and all descendants
             * by updating its widget path. #GtkContainers may want
             * to use this on a child when reordering it in a way that a different
             * style might apply to it. See also gtk_container_get_path_for_child().
             */
            reset_style(): void;
            /**
             * Very rarely-used function. This function is used to emit
             * an expose event on a widget. This function is not normally used
             * directly. The only time it is used is when propagating an expose
             * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
             * and that is normally done using gtk_container_propagate_draw().
             *
             * If you want to force an area of a window to be redrawn,
             * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
             * To cause the redraw to be done immediately, follow that call
             * with a call to gdk_window_process_updates().
             * @param event a expose #GdkEvent
             * @returns return from the event signal emission (%TRUE if   the event was handled)
             */
            send_expose(event: Gdk.Event): number;
            /**
             * Sends the focus change `event` to `widget`
             *
             * This function is not meant to be used by applications. The only time it
             * should be used is when it is necessary for a #GtkWidget to assign focus
             * to a widget that is semantically owned by the first widget even though
             * it’s not a direct child - for instance, a search entry in a floating
             * window similar to the quick search in #GtkTreeView.
             *
             * An example of its usage is:
             *
             *
             * ```c
             *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
             *
             *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
             *   fevent->focus_change.in = TRUE;
             *   fevent->focus_change.window = _gtk_widget_get_window (widget);
             *   if (fevent->focus_change.window != NULL)
             *     g_object_ref (fevent->focus_change.window);
             *
             *   gtk_widget_send_focus_change (widget, fevent);
             *
             *   gdk_event_free (event);
             * ```
             *
             * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
             * @returns the return value from the event signal emission: %TRUE   if the event was handled, and %FALSE otherwise
             */
            send_focus_change(event: Gdk.Event): boolean;
            /**
             * Given an accelerator group, `accel_group,` and an accelerator path,
             * `accel_path,` sets up an accelerator in `accel_group` so whenever the
             * key binding that is defined for `accel_path` is pressed, `widget`
             * will be activated.  This removes any accelerators (for any
             * accelerator group) installed by previous calls to
             * gtk_widget_set_accel_path(). Associating accelerators with
             * paths allows them to be modified by the user and the modifications
             * to be saved for future use. (See gtk_accel_map_save().)
             *
             * This function is a low level function that would most likely
             * be used by a menu creation system like #GtkUIManager. If you
             * use #GtkUIManager, setting up accelerator paths will be done
             * automatically.
             *
             * Even when you you aren’t using #GtkUIManager, if you only want to
             * set up accelerators on menu items gtk_menu_item_set_accel_path()
             * provides a somewhat more convenient interface.
             *
             * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
             * pass a static string, you can save some memory by interning it first with
             * g_intern_static_string().
             * @param accel_path path used to look up the accelerator
             * @param accel_group a #GtkAccelGroup.
             */
            set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void;
            /**
             * Sets the widget’s allocation.  This should not be used
             * directly, but from within a widget’s size_allocate method.
             *
             * The allocation set should be the “adjusted” or actual
             * allocation. If you’re implementing a #GtkContainer, you want to use
             * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
             * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
             * allocation inside gtk_widget_size_allocate() to create an adjusted
             * allocation.
             * @param allocation a pointer to a #GtkAllocation to copy from
             */
            set_allocation(allocation: Gtk.Allocation): void;
            /**
             * Sets whether the application intends to draw on the widget in
             * an #GtkWidget::draw handler.
             *
             * This is a hint to the widget and does not affect the behavior of
             * the GTK+ core; many widgets ignore this flag entirely. For widgets
             * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
             * the effect is to suppress default themed drawing of the widget's
             * background. (Children of the widget will still be drawn.) The application
             * is then entirely responsible for drawing the widget background.
             *
             * Note that the background is still drawn when the widget is mapped.
             * @param app_paintable %TRUE if the application will paint on the widget
             */
            set_app_paintable(app_paintable: boolean): void;
            /**
             * Specifies whether `widget` can be a default widget. See
             * gtk_widget_grab_default() for details about the meaning of
             * “default”.
             * @param can_default whether or not @widget can be a default widget.
             */
            set_can_default(can_default: boolean): void;
            /**
             * Specifies whether `widget` can own the input focus. See
             * gtk_widget_grab_focus() for actually setting the input focus on a
             * widget.
             * @param can_focus whether or not @widget can own the input focus.
             */
            set_can_focus(can_focus: boolean): void;
            /**
             * Sets whether `widget` should be mapped along with its when its parent
             * is mapped and `widget` has been shown with gtk_widget_show().
             *
             * The child visibility can be set for widget before it is added to
             * a container with gtk_widget_set_parent(), to avoid mapping
             * children unnecessary before immediately unmapping them. However
             * it will be reset to its default state of %TRUE when the widget
             * is removed from a container.
             *
             * Note that changing the child visibility of a widget does not
             * queue a resize on the widget. Most of the time, the size of
             * a widget is computed from all visible children, whether or
             * not they are mapped. If this is not the case, the container
             * can queue a resize itself.
             *
             * This function is only useful for container implementations and
             * never should be called by an application.
             * @param is_visible if %TRUE, @widget should be mapped along with its parent.
             */
            set_child_visible(is_visible: boolean): void;
            /**
             * Sets the widget’s clip.  This must not be used directly,
             * but from within a widget’s size_allocate method.
             * It must be called after gtk_widget_set_allocation() (or after chaining up
             * to the parent class), because that function resets the clip.
             *
             * The clip set should be the area that `widget` draws on. If `widget` is a
             * #GtkContainer, the area must contain all children's clips.
             *
             * If this function is not called by `widget` during a ::size-allocate handler,
             * the clip will be set to `widget'`s allocation.
             * @param clip a pointer to a #GtkAllocation to copy from
             */
            set_clip(clip: Gtk.Allocation): void;
            /**
             * Sets a widgets composite name. The widget must be
             * a composite child of its parent; see gtk_widget_push_composite_child().
             * @param name the name to set
             */
            set_composite_name(name: string): void;
            /**
             * Enables or disables a #GdkDevice to interact with `widget`
             * and all its children.
             *
             * It does so by descending through the #GdkWindow hierarchy
             * and enabling the same mask that is has for core events
             * (i.e. the one that gdk_window_get_events() returns).
             * @param device a #GdkDevice
             * @param enabled whether to enable the device
             */
            set_device_enabled(device: Gdk.Device, enabled: boolean): void;
            /**
             * Sets the device event mask (see #GdkEventMask) for a widget. The event
             * mask determines which events a widget will receive from `device`. Keep
             * in mind that different widgets have different default event masks, and by
             * changing the event mask you may disrupt a widget’s functionality,
             * so be careful. This function must be called while a widget is
             * unrealized. Consider gtk_widget_add_device_events() for widgets that are
             * already realized, or if you want to preserve the existing event
             * mask. This function can’t be used with windowless widgets (which return
             * %FALSE from gtk_widget_get_has_window());
             * to get events on those widgets, place them inside a #GtkEventBox
             * and receive events on the event box.
             * @param device a #GdkDevice
             * @param events event mask
             */
            set_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
            /**
             * Sets the reading direction on a particular widget. This direction
             * controls the primary direction for widgets containing text,
             * and also the direction in which the children of a container are
             * packed. The ability to set the direction is present in order
             * so that correct localization into languages with right-to-left
             * reading directions can be done. Generally, applications will
             * let the default reading direction present, except for containers
             * where the containers are arranged in an order that is explicitly
             * visual rather than logical (such as buttons for text justification).
             *
             * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
             * set by gtk_widget_set_default_direction() will be used.
             * @param dir the new direction
             */
            set_direction(dir: Gtk.TextDirection): void;
            /**
             * Widgets are double buffered by default; you can use this function
             * to turn off the buffering. “Double buffered” simply means that
             * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
             * automatically around expose events sent to the
             * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
             * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
             * buffer to the screen. The result is that users see the window
             * update in one smooth step, and don’t see individual graphics
             * primitives being rendered.
             *
             * In very simple terms, double buffered widgets don’t flicker,
             * so you would only use this function to turn off double buffering
             * if you had special needs and really knew what you were doing.
             *
             * Note: if you turn off double-buffering, you have to handle
             * expose events, since even the clearing to the background color or
             * pixmap will not happen automatically (as it is done in
             * gdk_window_begin_draw_frame()).
             *
             * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
             * then expose events for double-buffered widgets are culled into a single
             * event to the toplevel GDK window. If you now unset double buffering, you
             * will cause a separate rendering pass for every widget. This will likely
             * cause rendering problems - in particular related to stacking - and usually
             * increases rendering times significantly.
             * @param double_buffered %TRUE to double-buffer a widget
             */
            set_double_buffered(double_buffered: boolean): void;
            /**
             * Sets the event mask (see #GdkEventMask) for a widget. The event
             * mask determines which events a widget will receive. Keep in mind
             * that different widgets have different default event masks, and by
             * changing the event mask you may disrupt a widget’s functionality,
             * so be careful. This function must be called while a widget is
             * unrealized. Consider gtk_widget_add_events() for widgets that are
             * already realized, or if you want to preserve the existing event
             * mask. This function can’t be used with widgets that have no window.
             * (See gtk_widget_get_has_window()).  To get events on those widgets,
             * place them inside a #GtkEventBox and receive events on the event
             * box.
             * @param events event mask
             */
            set_events(events: number): void;
            /**
             * Sets whether the widget should grab focus when it is clicked with the mouse.
             * Making mouse clicks not grab focus is useful in places like toolbars where
             * you don’t want the keyboard focus removed from the main area of the
             * application.
             * @param focus_on_click whether the widget should grab focus when clicked with the mouse
             */
            set_focus_on_click(focus_on_click: boolean): void;
            /**
             * Sets the font map to use for Pango rendering. When not set, the widget
             * will inherit the font map from its parent.
             * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
             */
            set_font_map(font_map?: Pango.FontMap | null): void;
            /**
             * Sets the #cairo_font_options_t used for Pango rendering in this widget.
             * When not set, the default font options for the #GdkScreen will be used.
             * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
             */
            set_font_options(options?: cairo.FontOptions | null): void;
            /**
             * Sets the horizontal alignment of `widget`.
             * See the #GtkWidget:halign property.
             * @param align the horizontal alignment
             */
            set_halign(align: Gtk.Align): void;
            /**
             * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
             * #GtkWidget:has-tooltip for more information.
             * @param has_tooltip whether or not @widget has a tooltip.
             */
            set_has_tooltip(has_tooltip: boolean): void;
            /**
             * Specifies whether `widget` has a #GdkWindow of its own. Note that
             * all realized widgets have a non-%NULL “window” pointer
             * (gtk_widget_get_window() never returns a %NULL window when a widget
             * is realized), but for many of them it’s actually the #GdkWindow of
             * one of its parent widgets. Widgets that do not create a %window for
             * themselves in #GtkWidget::realize must announce this by
             * calling this function with `has_window` = %FALSE.
             *
             * This function should only be called by widget implementations,
             * and they should call it in their init() function.
             * @param has_window whether or not @widget has a window.
             */
            set_has_window(has_window: boolean): void;
            /**
             * Sets whether the widget would like any available extra horizontal
             * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
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
             * its current children and state, call gtk_widget_compute_expand(). A
             * container can decide how the expandability of children affects the
             * expansion of the container by overriding the compute_expand virtual
             * method on #GtkWidget.).
             *
             * Setting hexpand explicitly with this function will override the
             * automatic expand behavior.
             *
             * This function forces the widget to expand or not to expand,
             * regardless of children.  The override occurs because
             * gtk_widget_set_hexpand() sets the hexpand-set property (see
             * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
             * value to be used, rather than looking at children and widget state.
             * @param expand whether to expand
             */
            set_hexpand(expand: boolean): void;
            /**
             * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
             * be used.
             *
             * The hexpand-set property will be set automatically when you call
             * gtk_widget_set_hexpand() to set hexpand, so the most likely
             * reason to use this function would be to unset an explicit expand
             * flag.
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
             * Marks the widget as being mapped.
             *
             * This function should only ever be called in a derived widget's
             * “map” or “unmap” implementation.
             * @param mapped %TRUE to mark the widget as mapped
             */
            set_mapped(mapped: boolean): void;
            /**
             * Sets the bottom margin of `widget`.
             * See the #GtkWidget:margin-bottom property.
             * @param margin the bottom margin
             */
            set_margin_bottom(margin: number): void;
            /**
             * Sets the end margin of `widget`.
             * See the #GtkWidget:margin-end property.
             * @param margin the end margin
             */
            set_margin_end(margin: number): void;
            /**
             * Sets the left margin of `widget`.
             * See the #GtkWidget:margin-left property.
             * @param margin the left margin
             */
            set_margin_left(margin: number): void;
            /**
             * Sets the right margin of `widget`.
             * See the #GtkWidget:margin-right property.
             * @param margin the right margin
             */
            set_margin_right(margin: number): void;
            /**
             * Sets the start margin of `widget`.
             * See the #GtkWidget:margin-start property.
             * @param margin the start margin
             */
            set_margin_start(margin: number): void;
            /**
             * Sets the top margin of `widget`.
             * See the #GtkWidget:margin-top property.
             * @param margin the top margin
             */
            set_margin_top(margin: number): void;
            /**
             * Widgets can be named, which allows you to refer to them from a
             * CSS file. You can apply a style to widgets with a particular name
             * in the CSS file. See the documentation for the CSS syntax (on the
             * same page as the docs for #GtkStyleContext).
             *
             * Note that the CSS syntax has certain special characters to delimit
             * and represent elements in a selector (period, #, >, *...), so using
             * these will make your widget impossible to match by name. Any combination
             * of alphanumeric symbols, dashes and underscores will suffice.
             * @param name name for the widget
             */
            set_name(name: string): void;
            /**
             * Sets the #GtkWidget:no-show-all property, which determines whether
             * calls to gtk_widget_show_all() will affect this widget.
             *
             * This is mostly for use in constructing widget hierarchies with externally
             * controlled visibility, see #GtkUIManager.
             * @param no_show_all the new value for the “no-show-all” property
             */
            set_no_show_all(no_show_all: boolean): void;
            /**
             * Request the `widget` to be rendered partially transparent,
             * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
             * are clamped to the [0,1] range.).
             * This works on both toplevel widget, and child widgets, although there
             * are some limitations:
             *
             * For toplevel widgets this depends on the capabilities of the windowing
             * system. On X11 this has any effect only on X screens with a compositing manager
             * running. See gtk_widget_is_composited(). On Windows it should work
             * always, although setting a window’s opacity after the window has been
             * shown causes it to flicker once on Windows.
             *
             * For child widgets it doesn’t work if any affected widget has a native window, or
             * disables double buffering.
             * @param opacity desired opacity, between 0 and 1
             */
            set_opacity(opacity: number): void;
            /**
             * This function is useful only when implementing subclasses of
             * #GtkContainer.
             * Sets the container as the parent of `widget,` and takes care of
             * some details such as updating the state and style of the child
             * to reflect its new location. The opposite function is
             * gtk_widget_unparent().
             * @param parent parent container
             */
            set_parent(parent: Gtk.Widget): void;
            /**
             * Sets a non default parent window for `widget`.
             *
             * For #GtkWindow classes, setting a `parent_window` effects whether
             * the window is a toplevel window or can be embedded into other
             * widgets.
             *
             * For #GtkWindow classes, this needs to be called before the
             * window is realized.
             * @param parent_window the new parent window.
             */
            set_parent_window(parent_window: Gdk.Window): void;
            /**
             * Marks the widget as being realized. This function must only be
             * called after all #GdkWindows for the `widget` have been created
             * and registered.
             *
             * This function should only ever be called in a derived widget's
             * “realize” or “unrealize” implementation.
             * @param realized %TRUE to mark the widget as realized
             */
            set_realized(realized: boolean): void;
            /**
             * Specifies whether `widget` will be treated as the default widget
             * within its toplevel when it has the focus, even if another widget
             * is the default.
             *
             * See gtk_widget_grab_default() for details about the meaning of
             * “default”.
             * @param receives_default whether or not @widget can be a default widget.
             */
            set_receives_default(receives_default: boolean): void;
            /**
             * Sets whether the entire widget is queued for drawing when its size
             * allocation changes. By default, this setting is %TRUE and
             * the entire widget is redrawn on every size change. If your widget
             * leaves the upper left unchanged when made bigger, turning this
             * setting off will improve performance.
             *
             * Note that for widgets where gtk_widget_get_has_window() is %FALSE
             * setting this flag to %FALSE turns off all allocation on resizing:
             * the widget will not even redraw if its position changes; this is to
             * allow containers that don’t draw anything to avoid excess
             * invalidations. If you set this flag on a widget with no window that
             * does draw on `widget->`window, you are
             * responsible for invalidating both the old and new allocation of the
             * widget when the widget is moved and responsible for invalidating
             * regions newly when the widget increases size.
             * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
             */
            set_redraw_on_allocate(redraw_on_allocate: boolean): void;
            /**
             * Sets the sensitivity of a widget. A widget is sensitive if the user
             * can interact with it. Insensitive widgets are “grayed out” and the
             * user can’t interact with them. Insensitive widgets are known as
             * “inactive”, “disabled”, or “ghosted” in some other toolkits.
             * @param sensitive %TRUE to make the widget sensitive
             */
            set_sensitive(sensitive: boolean): void;
            /**
             * Sets the minimum size of a widget; that is, the widget’s size
             * request will be at least `width` by `height`. You can use this
             * function to force a widget to be larger than it normally would be.
             *
             * In most cases, gtk_window_set_default_size() is a better choice for
             * toplevel windows than this function; setting the default size will
             * still allow users to shrink the window. Setting the size request
             * will force them to leave the window at least as large as the size
             * request. When dealing with window sizes,
             * gtk_window_set_geometry_hints() can be a useful function as well.
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
             * #GtkWidget properties margin-left, margin-right, margin-top, and
             * margin-bottom, but it does include pretty much all other padding
             * or border properties set by any subclass of #GtkWidget.
             * @param width width @widget should request, or -1 to unset
             * @param height height @widget should request, or -1 to unset
             */
            set_size_request(width: number, height: number): void;
            /**
             * This function is for use in widget implementations. Sets the state
             * of a widget (insensitive, prelighted, etc.) Usually you should set
             * the state using wrapper functions such as gtk_widget_set_sensitive().
             * @param state new state for @widget
             */
            set_state(state: Gtk.StateType): void;
            /**
             * This function is for use in widget implementations. Turns on flag
             * values in the current widget state (insensitive, prelighted, etc.).
             *
             * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
             * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
             * direction, use gtk_widget_set_direction().
             *
             * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
             * will be propagated down to all non-internal children if `widget` is a
             * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
             * down to all #GtkContainer children by different means than turning on the
             * state flag down the hierarchy, both gtk_widget_get_state_flags() and
             * gtk_widget_is_sensitive() will make use of these.
             * @param flags State flags to turn on
             * @param clear Whether to clear state before turning on @flags
             */
            set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
            /**
             * Used to set the #GtkStyle for a widget (`widget->`style). Since
             * GTK 3, this function does nothing, the passed in style is ignored.
             * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
             */
            set_style(style?: Gtk.Style | null): void;
            /**
             * Enables or disables multiple pointer awareness. If this setting is %TRUE,
             * `widget` will start receiving multiple, per device enter/leave events. Note
             * that if custom #GdkWindows are created in #GtkWidget::realize,
             * gdk_window_set_support_multidevice() will have to be called manually on them.
             * @param support_multidevice %TRUE to support input from multiple devices.
             */
            set_support_multidevice(support_multidevice: boolean): void;
            /**
             * Sets `markup` as the contents of the tooltip, which is marked up with
             *  the [Pango text markup language][PangoMarkupFormat].
             *
             * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
             * and of the default handler for the #GtkWidget::query-tooltip signal.
             *
             * See also the #GtkWidget:tooltip-markup property and
             * gtk_tooltip_set_markup().
             * @param markup the contents of the tooltip for @widget, or %NULL
             */
            set_tooltip_markup(markup?: string | null): void;
            /**
             * Sets `text` as the contents of the tooltip. This function will take
             * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
             * handler for the #GtkWidget::query-tooltip signal.
             *
             * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
             * @param text the contents of the tooltip for @widget
             */
            set_tooltip_text(text?: string | null): void;
            /**
             * Replaces the default window used for displaying
             * tooltips with `custom_window`. GTK+ will take care of showing and
             * hiding `custom_window` at the right moment, to behave likewise as
             * the default tooltip window. If `custom_window` is %NULL, the default
             * tooltip window will be used.
             * @param custom_window a #GtkWindow, or %NULL
             */
            set_tooltip_window(custom_window?: Gtk.Window | null): void;
            /**
             * Sets the vertical alignment of `widget`.
             * See the #GtkWidget:valign property.
             * @param align the vertical alignment
             */
            set_valign(align: Gtk.Align): void;
            /**
             * Sets whether the widget would like any available extra vertical
             * space.
             *
             * See gtk_widget_set_hexpand() for more detail.
             * @param expand whether to expand
             */
            set_vexpand(expand: boolean): void;
            /**
             * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
             * be used.
             *
             * See gtk_widget_set_hexpand_set() for more detail.
             * @param set value for vexpand-set property
             */
            set_vexpand_set(set: boolean): void;
            /**
             * Sets the visibility state of `widget`. Note that setting this to
             * %TRUE doesn’t mean the widget is actually viewable, see
             * gtk_widget_get_visible().
             *
             * This function simply calls gtk_widget_show() or gtk_widget_hide()
             * but is nicer to use when the visibility of the widget depends on
             * some condition.
             * @param visible whether the widget should be shown or not
             */
            set_visible(visible: boolean): void;
            /**
             * Sets the visual that should be used for by widget and its children for
             * creating #GdkWindows. The visual must be on the same #GdkScreen as
             * returned by gtk_widget_get_screen(), so handling the
             * #GtkWidget::screen-changed signal is necessary.
             *
             * Setting a new `visual` will not cause `widget` to recreate its windows,
             * so you should call this function before `widget` is realized.
             * @param visual visual to be used or %NULL to unset a previous one
             */
            set_visual(visual?: Gdk.Visual | null): void;
            /**
             * Sets a widget’s window. This function should only be used in a
             * widget’s #GtkWidget::realize implementation. The %window passed is
             * usually either new window created with gdk_window_new(), or the
             * window of its parent widget as returned by
             * gtk_widget_get_parent_window().
             *
             * Widgets must indicate whether they will create their own #GdkWindow
             * by calling gtk_widget_set_has_window(). This is usually done in the
             * widget’s init() function.
             *
             * Note that this function does not add any reference to `window`.
             * @param window a #GdkWindow
             */
            set_window(window: Gdk.Window): void;
            /**
             * Sets a shape for this widget’s GDK window. This allows for
             * transparent windows etc., see gdk_window_shape_combine_region()
             * for more information.
             * @param region shape to be added, or %NULL to remove an existing shape
             */
            shape_combine_region(region?: cairo.Region | null): void;
            /**
             * Flags a widget to be displayed. Any widget that isn’t shown will
             * not appear on the screen. If you want to show all the widgets in a
             * container, it’s easier to call gtk_widget_show_all() on the
             * container, instead of individually showing the widgets.
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
             * Recursively shows a widget, and any child widgets (if the widget is
             * a container).
             */
            show_all(): void;
            /**
             * Shows a widget. If the widget is an unmapped toplevel widget
             * (i.e. a #GtkWindow that has not yet been shown), enter the main
             * loop and wait for the window to actually be mapped. Be careful;
             * because the main loop is running, anything can happen during
             * this function.
             */
            show_now(): void;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size
             * and position to their child widgets.
             *
             * In this function, the allocation may be adjusted. It will be forced
             * to a 1x1 minimum size, and the adjust_size_allocation virtual
             * method on the child will be used to adjust the allocation. Standard
             * adjustments include removing the widget’s margins, and applying the
             * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
             *
             * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
             * instead.
             * @param allocation position and size to be allocated to @widget
             */
            size_allocate(allocation: Gtk.Allocation): void;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size,
             * position and (optionally) baseline to their child widgets.
             *
             * In this function, the allocation and baseline may be adjusted. It
             * will be forced to a 1x1 minimum size, and the
             * adjust_size_allocation virtual and adjust_baseline_allocation
             * methods on the child will be used to adjust the allocation and
             * baseline. Standard adjustments include removing the widget's
             * margins, and applying the widget’s #GtkWidget:halign and
             * #GtkWidget:valign properties.
             *
             * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
             * baseline argument is ignored and -1 is used instead.
             * @param allocation position and size to be allocated to @widget
             * @param baseline The baseline of the child, or -1
             */
            size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void;
            /**
             * This function is typically used when implementing a #GtkContainer
             * subclass.  Obtains the preferred size of a widget. The container
             * uses this information to arrange its child widgets and decide what
             * size allocations to give them with gtk_widget_size_allocate().
             *
             * You can also call this function from an application, with some
             * caveats. Most notably, getting a size request requires the widget
             * to be associated with a screen, because font information may be
             * needed. Multihead-aware applications should keep this in mind.
             *
             * Also remember that the size request is not necessarily the size
             * a widget will actually be allocated.
             */
            size_request(): Gtk.Requisition;
            /**
             * This function attaches the widget’s #GtkStyle to the widget's
             * #GdkWindow. It is a replacement for
             *
             *
             * ```
             * widget->style = gtk_style_attach (widget->style, widget->window);
             * ```
             *
             *
             * and should only ever be called in a derived widget’s “realize”
             * implementation which does not chain up to its parent class'
             * “realize” implementation, because one of the parent classes
             * (finally #GtkWidget) would attach the style itself.
             */
            style_attach(): void;
            /**
             * Gets the value of a style property of `widget`.
             * @param property_name the name of a style property
             * @param value location to return the property value
             */
            style_get_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
             * This causes all queued #GtkWidget::child-notify signals on `widget` to be
             * emitted.
             */
            thaw_child_notify(): void;
            /**
             * Translate coordinates relative to `src_widget’`s allocation to coordinates
             * relative to `dest_widget’`s allocations. In order to perform this
             * operation, both widgets must be realized, and must share a common
             * toplevel.
             * @param dest_widget a #GtkWidget
             * @param src_x X position relative to @src_widget
             * @param src_y Y position relative to @src_widget
             * @returns %FALSE if either widget was not realized, or there   was no common ancestor. In this case, nothing is stored in   *@dest_x and *@dest_y. Otherwise %TRUE.
             */
            translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
            /**
             * Triggers a tooltip query on the display where the toplevel of `widget`
             * is located. See gtk_tooltip_trigger_tooltip_query() for more
             * information.
             */
            trigger_tooltip_query(): void;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be unmapped if it’s currently mapped.
             */
            unmap(): void;
            /**
             * This function is only for use in widget implementations.
             * Should be called by implementations of the remove method
             * on #GtkContainer, to dissociate a child from the container.
             */
            unparent(): void;
            /**
             * This function is only useful in widget implementations.
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget, such as `widget->`window).
             */
            unrealize(): void;
            /**
             * Unregisters a #GdkWindow from the widget that was previously set up with
             * gtk_widget_register_window(). You need to call this when the window is
             * no longer used by the widget, such as when you destroy it.
             * @param window a #GdkWindow
             */
            unregister_window(window: Gdk.Window): void;
            /**
             * This function is for use in widget implementations. Turns off flag
             * values for the current widget state (insensitive, prelighted, etc.).
             * See gtk_widget_set_state_flags().
             * @param flags State flags to turn off
             */
            unset_state_flags(flags: Gtk.StateFlags): void;
            vfunc_adjust_baseline_allocation(baseline: number): void;
            vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
            /**
             * Convert an initial size allocation assigned
             *   by a #GtkContainer using gtk_widget_size_allocate(), into an actual
             *   size allocation to be used by the widget. adjust_size_allocation
             *   adjusts to a child widget’s actual allocation
             *   from what a parent container computed for the
             *   child. The adjusted allocation must be entirely within the original
             *   allocation. In any custom implementation, chain up to the default
             *   #GtkWidget implementation of this method, which applies the margin
             *   and alignment properties of #GtkWidget. Chain up
             *   before performing your own adjustments so your
             *   own adjustments remove more allocation after the #GtkWidget base
             *   class has already removed margin and alignment. The natural size
             *   passed in should be adjusted in the same way as the allocated size,
             *   which allows adjustments to perform alignments or other changes
             *   based on natural size.
             * @param orientation
             * @param minimum_size
             * @param natural_size
             * @param allocated_pos
             * @param allocated_size
             */
            vfunc_adjust_size_allocation(
                orientation: Gtk.Orientation,
                minimum_size: number,
                natural_size: number,
                allocated_pos: number,
                allocated_size: number,
            ): void;
            /**
             * Convert an initial size request from a widget's
             *   #GtkSizeRequestMode virtual method implementations into a size request to
             *   be used by parent containers in laying out the widget.
             *   adjust_size_request adjusts from a child widget's
             *   original request to what a parent container should
             *   use for layout. The `for_size` argument will be -1 if the request should
             *   not be for a particular size in the opposing orientation, i.e. if the
             *   request is not height-for-width or width-for-height. If `for_size` is
             *   greater than -1, it is the proposed allocation in the opposing
             *   orientation that we need the request for. Implementations of
             *   adjust_size_request should chain up to the default implementation,
             *   which applies #GtkWidget’s margin properties and imposes any values
             *   from gtk_widget_set_size_request(). Chaining up should be last,
             *   after your subclass adjusts the request, so
             *   #GtkWidget can apply constraints and add the margin properly.
             * @param orientation
             * @param minimum_size
             * @param natural_size
             */
            vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void;
            /**
             * Signal will be emitted when a button
             *   (typically from a mouse) is pressed.
             * @param event
             */
            vfunc_button_press_event(event: Gdk.EventButton): boolean;
            /**
             * Signal will be emitted when a button
             *   (typically from a mouse) is released.
             * @param event
             */
            vfunc_button_release_event(event: Gdk.EventButton): boolean;
            /**
             * Determines whether an accelerator that activates the signal
             * identified by `signal_id` can currently be activated.
             * This is done by emitting the #GtkWidget::can-activate-accel
             * signal on `widget;` if the signal isn’t overridden by a
             * handler or in a derived widget, then the default check is
             * that the widget must be sensitive, and the widget and all
             * its ancestors mapped.
             * @param signal_id the ID of a signal installed on @widget
             */
            vfunc_can_activate_accel(signal_id: number): boolean;
            /**
             * Emits a #GtkWidget::child-notify signal for the
             * [child property][child-properties] `child_property`
             * on `widget`.
             *
             * This is the analogue of g_object_notify() for child properties.
             *
             * Also see gtk_container_child_notify().
             * @param child_property the name of a child property installed on the                  class of @widget’s parent
             */
            vfunc_child_notify(child_property: GObject.ParamSpec): void;
            /**
             * Signal emitted when the composited status of
             *   widgets screen changes. See gdk_screen_is_composited().
             */
            vfunc_composited_changed(): void;
            /**
             * Computes whether a container should give this
             *   widget extra space when possible.
             * @param hexpand_p
             * @param vexpand_p
             */
            vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
            /**
             * Signal will be emitted when the size, position or
             *   stacking of the widget’s window has changed.
             * @param event
             */
            vfunc_configure_event(event: Gdk.EventConfigure): boolean;
            /**
             * Signal emitted when a redirected window belonging to
             *   widget gets drawn into.
             * @param event
             */
            vfunc_damage_event(event: Gdk.EventExpose): boolean;
            /**
             * Signal emitted if a user requests that a toplevel
             *   window is closed.
             * @param event
             */
            vfunc_delete_event(event: Gdk.EventAny): boolean;
            /**
             * Destroys a widget.
             *
             * When a widget is destroyed all references it holds on other objects
             * will be released:
             *
             *  - if the widget is inside a container, it will be removed from its
             *  parent
             *  - if the widget is a container, all its children will be destroyed,
             *  recursively
             *  - if the widget is a top level, it will be removed from the list
             *  of top level widgets that GTK+ maintains internally
             *
             * It's expected that all references held on the widget will also
             * be released; you should connect to the #GtkWidget::destroy signal
             * if you hold a reference to `widget` and you wish to remove it when
             * this function is called. It is not necessary to do so if you are
             * implementing a #GtkContainer, as you'll be able to use the
             * #GtkContainerClass.remove() virtual function for that.
             *
             * It's important to notice that gtk_widget_destroy() will only cause
             * the `widget` to be finalized if no additional references, acquired
             * using g_object_ref(), are held on it. In case additional references
             * are in place, the `widget` will be in an "inert" state after calling
             * this function; `widget` will still point to valid memory, allowing you
             * to release the references you hold, but you may not query the widget's
             * own state.
             *
             * You should typically call this function on top level widgets, and
             * rarely on child widgets.
             *
             * See also: gtk_container_remove()
             */
            vfunc_destroy(): void;
            /**
             * Signal is emitted when a #GdkWindow is destroyed.
             * @param event
             */
            vfunc_destroy_event(event: Gdk.EventAny): boolean;
            /**
             * Signal emitted when the text direction of a
             *   widget changes.
             * @param previous_direction
             */
            vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
            /**
             * Seldomly overidden.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * Signal emitted on the drag source when a drag is
             *   started.
             * @param context
             */
            vfunc_drag_begin(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when a drag
             *   with the action %GDK_ACTION_MOVE is successfully completed.
             * @param context
             */
            vfunc_drag_data_delete(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when the drop
             *   site requests the data which is dragged.
             * @param context
             * @param selection_data
             * @param info
             * @param time_
             */
            vfunc_drag_data_get(
                context: Gdk.DragContext,
                selection_data: Gtk.SelectionData,
                info: number,
                time_: number,
            ): void;
            /**
             * Signal emitted on the drop site when the
             *   dragged data has been received.
             * @param context
             * @param x
             * @param y
             * @param selection_data
             * @param info
             * @param time_
             */
            vfunc_drag_data_received(
                context: Gdk.DragContext,
                x: number,
                y: number,
                selection_data: Gtk.SelectionData,
                info: number,
                time_: number,
            ): void;
            /**
             * Signal emitted on the drop site when the user drops the
             *   data onto the widget.
             * @param context
             * @param x
             * @param y
             * @param time_
             */
            vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
            /**
             * Signal emitted on the drag source when a drag is
             *   finished.
             * @param context
             */
            vfunc_drag_end(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when a drag has
             *   failed.
             * @param context
             * @param result
             */
            vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean;
            /**
             * Signal emitted on the drop site when the cursor leaves
             *   the widget.
             * @param context
             * @param time_
             */
            vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
            /**
             * signal emitted on the drop site when the user moves
             *   the cursor over the widget during a drag.
             * @param context
             * @param x
             * @param y
             * @param time_
             */
            vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
            /**
             * Signal emitted when a widget is supposed to render itself.
             * @param cr
             */
            vfunc_draw(cr: cairo.Context): boolean;
            /**
             * Signal event will be emitted when the pointer
             *   enters the widget’s window.
             * @param event
             */
            vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
            /**
             * Rarely-used function. This function is used to emit
             * the event signals on a widget (those signals should never
             * be emitted without using this function to do so).
             * If you want to synthesize an event though, don’t use this function;
             * instead, use gtk_main_do_event() so the event will behave as if
             * it were in the event queue. Don’t synthesize expose events; instead,
             * use gdk_window_invalidate_rect() to invalidate a region of the
             * window.
             * @param event a #GdkEvent
             */
            vfunc_event(event: Gdk.Event): boolean;
            vfunc_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Signal emitted when the keyboard focus enters the
             * widget’s window.
             * @param event
             */
            vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
            /**
             * Signal emitted when the keyboard focus leaves the
             * widget’s window.
             * @param event
             */
            vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
            /**
             * Returns the accessible object that describes the widget to an
             * assistive technology.
             *
             * If accessibility support is not available, this #AtkObject
             * instance may be a no-op. Likewise, if no class-specific #AtkObject
             * implementation is available for the widget instance in question,
             * it will inherit an #AtkObject implementation from the first ancestor
             * class for which such an implementation is defined.
             *
             * The documentation of the
             * [ATK](http://developer.gnome.org/atk/stable/)
             * library contains more information about accessible objects and their uses.
             */
            vfunc_get_accessible(): Atk.Object;
            /**
             * Retrieves a widget’s initial minimum and natural height.
             *
             * This call is specific to width-for-height requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            vfunc_get_preferred_height(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
             * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
             * that no baseline is requested for this widget.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
             * and by any #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation, or -1 if none
             */
            vfunc_get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
            /**
             * Retrieves a widget’s minimum and natural height if it would be given
             * the specified `width`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation
             */
            vfunc_get_preferred_height_for_width(width: number): [number, number];
            /**
             * Retrieves a widget’s initial minimum and natural width.
             *
             * This call is specific to height-for-width requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            vfunc_get_preferred_width(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural width if it would be given
             * the specified `height`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param height the height which is available for allocation
             */
            vfunc_get_preferred_width_for_height(height: number): [number, number];
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * #GtkBin widgets generally propagate the preference of
             * their child, container widgets need to request something either in
             * context of their children or in context of their allocation
             * capabilities.
             */
            vfunc_get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Signal emitted when a pointer or keyboard grab
             *   on a window belonging to widget gets broken.
             * @param event
             */
            vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
            /**
             * Causes `widget` to have the keyboard focus for the #GtkWindow it's
             * inside. `widget` must be a focusable widget, such as a #GtkEntry;
             * something like #GtkFrame won’t work.
             *
             * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
             * gtk_widget_set_can_focus() to modify that flag.
             *
             * The widget also needs to be realized and mapped. This is indicated by the
             * related signals. Grabbing the focus immediately after creating the widget
             * will likely fail and cause critical warnings.
             */
            vfunc_grab_focus(): void;
            /**
             * Signal emitted when a widget becomes shadowed by a
             *   GTK+ grab (not a pointer or keyboard grab) on another widget, or
             *   when it becomes unshadowed due to a grab being removed.
             * @param was_grabbed
             */
            vfunc_grab_notify(was_grabbed: boolean): void;
            /**
             * Reverses the effects of gtk_widget_show(), causing the widget to be
             * hidden (invisible to the user).
             */
            vfunc_hide(): void;
            /**
             * Signal emitted when the anchored state of a
             *   widget changes.
             * @param previous_toplevel
             */
            vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void;
            /**
             * Signal emitted when a key is pressed.
             * @param event
             */
            vfunc_key_press_event(event: Gdk.EventKey): boolean;
            /**
             * Signal is emitted when a key is released.
             * @param event
             */
            vfunc_key_release_event(event: Gdk.EventKey): boolean;
            /**
             * This function should be called whenever keyboard navigation within
             * a single widget hits a boundary. The function emits the
             * #GtkWidget::keynav-failed signal on the widget and its return
             * value should be interpreted in a way similar to the return value of
             * gtk_widget_child_focus():
             *
             * When %TRUE is returned, stay in the widget, the failed keyboard
             * navigation is OK and/or there is nowhere we can/should move the
             * focus to.
             *
             * When %FALSE is returned, the caller should continue with keyboard
             * navigation outside the widget, e.g. by calling
             * gtk_widget_child_focus() on the widget’s toplevel.
             *
             * The default ::keynav-failed handler returns %FALSE for
             * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
             * values of #GtkDirectionType it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * gtk_widget_error_bell() to notify the user of the failed keyboard
             * navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * #GtkEntry widgets where the user should be able to navigate the
             * entire row with the cursor keys, as e.g. known from user interfaces
             * that require entering license keys.
             * @param direction direction of focus movement
             */
            vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Will be emitted when the pointer leaves the
             *   widget’s window.
             * @param event
             */
            vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be mapped if it isn’t already.
             */
            vfunc_map(): void;
            /**
             * Signal emitted when the widget’s window is mapped.
             * @param event
             */
            vfunc_map_event(event: Gdk.EventAny): boolean;
            /**
             * Emits the #GtkWidget::mnemonic-activate signal.
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             */
            vfunc_mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Signal emitted when the pointer moves over
             *   the widget’s #GdkWindow.
             * @param event
             */
            vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
            /**
             * Signal emitted when a change of focus is requested
             * @param direction
             */
            vfunc_move_focus(direction: Gtk.DirectionType): void;
            /**
             * Signal emitted when a new parent has been set on a
             *   widget.
             * @param previous_parent
             */
            vfunc_parent_set(previous_parent: Gtk.Widget): void;
            /**
             * Signal emitted whenever a widget should pop up a
             *   context menu.
             */
            vfunc_popup_menu(): boolean;
            /**
             * Signal will be emitted when a property on
             *   the widget’s window has been changed or deleted.
             * @param event
             */
            vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
            vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
            vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
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
             * Invalidates the area of `widget` defined by `region` by calling
             * gdk_window_invalidate_region() on the widget’s window and all its
             * child windows. Once the main loop becomes idle (after the current
             * batch of events has been processed, roughly), the window will
             * receive expose events for the union of all regions that have been
             * invalidated.
             *
             * Normally you would only use this function in widget
             * implementations. You might also use it to schedule a redraw of a
             * #GtkDrawingArea or some portion thereof.
             * @param region region to draw
             */
            vfunc_queue_draw_region(region: cairo.Region): void;
            /**
             * Creates the GDK (windowing system) resources associated with a
             * widget.  For example, `widget->`window will be created when a widget
             * is realized.  Normally realization happens implicitly; if you show
             * a widget and all its parent containers, then the widget will be
             * realized and mapped automatically.
             *
             * Realizing a widget requires all
             * the widget’s parent widgets to be realized; calling
             * gtk_widget_realize() realizes the widget’s parents in addition to
             * `widget` itself. If a widget is not yet inside a toplevel window
             * when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * #GtkWidget::draw. Or simply g_signal_connect () to the
             * #GtkWidget::realize signal.
             */
            vfunc_realize(): void;
            /**
             * Signal emitted when the screen of a widget has
             *   changed.
             * @param previous_screen
             */
            vfunc_screen_changed(previous_screen: Gdk.Screen): void;
            /**
             * Signal emitted when a button in the 4 to 7 range is
             *   pressed.
             * @param event
             */
            vfunc_scroll_event(event: Gdk.EventScroll): boolean;
            /**
             * Signal will be emitted when the the
             *   widget’s window has lost ownership of a selection.
             * @param event
             */
            vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
            vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void;
            vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
            vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void;
            /**
             * Signal will be emitted when another
             *   client requests ownership of the selection owned by the widget's
             *   window.
             * @param event
             */
            vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
            /**
             * Flags a widget to be displayed. Any widget that isn’t shown will
             * not appear on the screen. If you want to show all the widgets in a
             * container, it’s easier to call gtk_widget_show_all() on the
             * container, instead of individually showing the widgets.
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
             * Recursively shows a widget, and any child widgets (if the widget is
             * a container).
             */
            vfunc_show_all(): void;
            vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size
             * and position to their child widgets.
             *
             * In this function, the allocation may be adjusted. It will be forced
             * to a 1x1 minimum size, and the adjust_size_allocation virtual
             * method on the child will be used to adjust the allocation. Standard
             * adjustments include removing the widget’s margins, and applying the
             * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
             *
             * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
             * instead.
             * @param allocation position and size to be allocated to @widget
             */
            vfunc_size_allocate(allocation: Gtk.Allocation): void;
            /**
             * Signal emitted when the widget state
             *   changes. Deprecated: 3.0
             * @param previous_state
             */
            vfunc_state_changed(previous_state: Gtk.StateType): void;
            /**
             * Signal emitted when the widget state changes,
             *   see gtk_widget_get_state_flags().
             * @param previous_state_flags
             */
            vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
            /**
             * Signal emitted when a new style has been set on a
             * widget. Deprecated: 3.0
             * @param previous_style
             */
            vfunc_style_set(previous_style: Gtk.Style): void;
            /**
             * Signal emitted when the GtkStyleContext of a widget
             *   is changed.
             */
            vfunc_style_updated(): void;
            /**
             * Signal emitted when a touch event happens
             * @param event
             */
            vfunc_touch_event(event: Gdk.EventTouch): boolean;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be unmapped if it’s currently mapped.
             */
            vfunc_unmap(): void;
            /**
             * Signal will be emitted when the widget’s window is
             *   unmapped.
             * @param event
             */
            vfunc_unmap_event(event: Gdk.EventAny): boolean;
            /**
             * This function is only useful in widget implementations.
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget, such as `widget->`window).
             */
            vfunc_unrealize(): void;
            /**
             * Signal emitted when the widget’s window is
             *   obscured or unobscured.
             * @param event
             */
            vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
            /**
             * Signal emitted when the state of the toplevel
             *   window associated to the widget changes.
             * @param event
             */
            vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
        }

        module KeyRenderer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Renderer.ConstructorProps {
                object: Gck.Object;
            }
        }

        /**
         * An implementation of #GcrRenderer which renders keys.
         */
        class KeyRenderer extends GObject.Object implements Renderer {
            static $gtype: GObject.GType<KeyRenderer>;

            // Properties

            get object(): Gck.Object;
            set object(val: Gck.Object);

            // Constructors

            constructor(properties?: Partial<KeyRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](label?: string | null, attrs?: Gck.Attributes | null): KeyRenderer;

            // Methods

            /**
             * Get the attributes displayed in the renderer.
             * @returns the attributes, owned by the renderer
             */
            get_attributes(): Gck.Attributes | null;
            /**
             * Get the attributes displayed in the renderer. The attributes should represent
             * either an RSA, DSA, or EC key in PKCS#11 style.
             * @param attrs the attributes to display
             */
            set_attributes(attrs?: Gck.Attributes | null): void;

            // Inherited properties
            /**
             * The attributes to display.
             */
            get attributes(): Gck.Attributes;
            set attributes(val: Gck.Attributes);
            /**
             * The label to display.
             */
            get label(): string;
            set label(val: string);

            // Inherited methods
            /**
             * Emit the #GcrRenderer::data-changed signal on the renderer. This is used by
             * renderer implementations.
             */
            emit_data_changed(): void;
            /**
             * Called by #GcrViewer when about to display a popup menu for the content
             * displayed by the renderer. The renderer can add a menu item if desired.
             * @param viewer The viewer that is displaying a popup
             * @param menu The popup menu being displayed
             */
            popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            render_view(viewer: Viewer): void;
            /**
             * signal emitted when data being rendered changes
             */
            vfunc_data_changed(): void;
            /**
             * method invoked to populate a popup menu with additional
             *                  renderer options
             * @param viewer
             * @param menu
             */
            vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            vfunc_render_view(viewer: Viewer): void;
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

        module KeyWidget {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Bin.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                attributes: Gck.Attributes;
            }
        }

        /**
         * A key widget and renderer
         *
         * A key widget can be used to display a RSA, DSA or EC key. The widget is
         * normally in a collapsed state showing only details, but can be expanded by
         * the user.
         *
         * Use [ctor`KeyWidget`.new] to create a new key widget. Only one key can be
         * displayed. A key widget contains a [iface`Viewer]` internally and
         * [class`KeyRenderer]` is used to render the key to the viewer. To show more
         * than one key in a view, create the viewer and add renderers to it.
         */
        class KeyWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<KeyWidget>;

            // Properties

            get attributes(): Gck.Attributes;
            set attributes(val: Gck.Attributes);

            // Constructors

            constructor(properties?: Partial<KeyWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](attrs?: Gck.Attributes | null): KeyWidget;

            // Methods

            /**
             * Get the attributes displayed in the widget.
             * @returns The attributes, owned by the widget.
             */
            get_attributes(): Gck.Attributes | null;
            /**
             * Get the attributes displayed in the widget. The attributes should represent
             * either an RSA, DSA or EC key in PKCS#11 style.
             * @param attrs the attributes to display
             */
            set_attributes(attrs?: Gck.Attributes | null): void;

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

        module ListSelector {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.TreeView.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                collection: Gcr.Collection;
            }
        }

        /**
         * A selector widget to select 1 or more certificates or keys from a list.
         *
         * Live search is available for quick filtering.
         */
        class ListSelector extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
            static $gtype: GObject.GType<ListSelector>;

            // Properties

            /**
             * The collection which contains the objects to display in the selector.
             */
            get collection(): Gcr.Collection;

            // Constructors

            constructor(properties?: Partial<ListSelector.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](collection: Gcr.Collection): ListSelector;
            // Conflicted with Gtk.TreeView.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Get the collection that this selector is displaying objects from.
             * @returns The collection, owned by the selector.
             */
            get_collection(): Gcr.Collection;
            /**
             * Get a list of selected objects.
             * @returns the list of          selected objects, to be released with g_list_free()
             */
            get_selected(): GObject.Object[];
            /**
             * Select certain objects in the selector.
             * @param selected the list of objects to select
             */
            set_selected(selected: GObject.Object[]): void;

            // Inherited properties
            /**
             * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
             * shared between the scrollable widget and its parent.
             */
            get hadjustment(): Gtk.Adjustment;
            set hadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscroll_policy(): Gtk.ScrollablePolicy;
            set hscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscrollPolicy(): Gtk.ScrollablePolicy;
            set hscrollPolicy(val: Gtk.ScrollablePolicy);
            /**
             * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
             * between the scrollable widget and its parent.
             */
            get vadjustment(): Gtk.Adjustment;
            set vadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscroll_policy(): Gtk.ScrollablePolicy;
            set vscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscrollPolicy(): Gtk.ScrollablePolicy;
            set vscrollPolicy(val: Gtk.ScrollablePolicy);

            // Inherited methods
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             * @returns %TRUE if @border has been set
             */
            get_border(): [boolean, Gtk.Border];
            /**
             * Retrieves the #GtkAdjustment used for horizontal scrolling.
             * @returns horizontal #GtkAdjustment.
             */
            get_hadjustment(): Gtk.Adjustment;
            /**
             * Gets the horizontal #GtkScrollablePolicy.
             * @returns The horizontal #GtkScrollablePolicy.
             */
            get_hscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Retrieves the #GtkAdjustment used for vertical scrolling.
             * @returns vertical #GtkAdjustment.
             */
            get_vadjustment(): Gtk.Adjustment;
            /**
             * Gets the vertical #GtkScrollablePolicy.
             * @returns The vertical #GtkScrollablePolicy.
             */
            get_vscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Sets the horizontal adjustment of the #GtkScrollable.
             * @param hadjustment a #GtkAdjustment
             */
            set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * horizontal scrolling should start below the minimum width or
             * below the natural width.
             * @param policy the horizontal #GtkScrollablePolicy
             */
            set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
            /**
             * Sets the vertical adjustment of the #GtkScrollable.
             * @param vadjustment a #GtkAdjustment
             */
            set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * vertical scrolling should start below the minimum height or
             * below the natural height.
             * @param policy the vertical #GtkScrollablePolicy
             */
            set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             */
            vfunc_get_border(): [boolean, Gtk.Border];
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

        module PromptDialog {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Dialog.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gcr.Prompt.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                choice_visible: boolean;
                choiceVisible: boolean;
                confirm_visible: boolean;
                confirmVisible: boolean;
                password_visible: boolean;
                passwordVisible: boolean;
                warning_visible: boolean;
                warningVisible: boolean;
            }
        }

        /**
         * A [iface`Gcr`.Prompt] implementation which shows a GTK dialog. The dialog
         * will remain visible (but insensitive) between prompts. If the user cancels
         * the dialog between prompts, then the dialog will be hidden.
         */
        class PromptDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gcr.Prompt, Gtk.Buildable {
            static $gtype: GObject.GType<PromptDialog>;

            // Properties

            /**
             * Whether the choice check box is visible or not.
             */
            get choice_visible(): boolean;
            /**
             * Whether the choice check box is visible or not.
             */
            get choiceVisible(): boolean;
            /**
             * Whether the password confirm entry is visible or not.
             */
            get confirm_visible(): boolean;
            /**
             * Whether the password confirm entry is visible or not.
             */
            get confirmVisible(): boolean;
            /**
             * Whether the password entry is visible or not.
             */
            get password_visible(): boolean;
            /**
             * Whether the password entry is visible or not.
             */
            get passwordVisible(): boolean;
            /**
             * Whether the warning label is visible or not.
             */
            get warning_visible(): boolean;
            /**
             * Whether the warning label is visible or not.
             */
            get warningVisible(): boolean;

            // Constructors

            constructor(properties?: Partial<PromptDialog.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited properties
            /**
             * The string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             *
             * In X11, this will be a stringified version of the XWindow handle; in
             * Wayland this is the result of an export using the XDG foreign
             * protocol.
             */
            get caller_window(): string;
            set caller_window(val: string);
            /**
             * The string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             *
             * In X11, this will be a stringified version of the XWindow handle; in
             * Wayland this is the result of an export using the XDG foreign
             * protocol.
             */
            get callerWindow(): string;
            set callerWindow(val: string);
            /**
             * The label for the cancel button in the prompt.
             */
            get cancel_label(): string;
            set cancel_label(val: string);
            /**
             * The label for the cancel button in the prompt.
             */
            get cancelLabel(): string;
            set cancelLabel(val: string);
            /**
             * Whether the additional choice is chosen or not.
             *
             * The additional choice would have been setup using #GcrPrompt:choice-label.
             */
            get choice_chosen(): boolean;
            set choice_chosen(val: boolean);
            /**
             * Whether the additional choice is chosen or not.
             *
             * The additional choice would have been setup using #GcrPrompt:choice-label.
             */
            get choiceChosen(): boolean;
            set choiceChosen(val: boolean);
            /**
             * The label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * If %NULL, then no additional choice is displayed.
             *
             * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
             */
            get choice_label(): string;
            set choice_label(val: string);
            /**
             * The label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * If %NULL, then no additional choice is displayed.
             *
             * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
             */
            get choiceLabel(): string;
            set choiceLabel(val: string);
            /**
             * The label for the continue button in the prompt.
             */
            get continue_label(): string;
            set continue_label(val: string);
            /**
             * The label for the continue button in the prompt.
             */
            get continueLabel(): string;
            set continueLabel(val: string);
            /**
             * The detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * The prompt message should contain relevant information.
             */
            get description(): string;
            set description(val: string);
            /**
             * The prompt message for the user.
             *
             * A prompt implementation should always display this message.
             */
            get message(): string;
            set message(val: string);
            /**
             * Whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             */
            get password_new(): boolean;
            set password_new(val: boolean);
            /**
             * Whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             */
            get passwordNew(): boolean;
            set passwordNew(val: boolean);
            /**
             * Indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             */
            get password_strength(): number;
            /**
             * Indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             */
            get passwordStrength(): number;
            /**
             * The title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * #GcrPrompt:message should contain relevant information.
             */
            get title(): string;
            set title(val: string);
            /**
             * A prompt warning displayed on the prompt, or %NULL for no warning.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             */
            get warning(): string;
            set warning(val: string);

            // Inherited methods
            /**
             * Closes the prompt so that in can no longer be used to prompt. The various
             * prompt methods will return results as if the user dismissed the prompt.
             *
             * The prompt may also be closed by the implementor of the prompt object.
             *
             * This emits the [signal`Prompt:`:prompt-close] signal on the prompt object.
             */
            close(): void;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this function to
             * represent the question correctly.
             *
             * This method will block until the a response is returned from the prompter.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the reply from the prompt
             */
            confirm(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this method to
             * represent the question correctly.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an operation to prompt for confirmation.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             * @returns the reply from the prompt
             */
            confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this function to
             * represent the question correctly.
             *
             * This method will block until the a response is returned from the prompter
             * and will run a main loop similar to a `gtk_dialog_run()`. The application
             * will remain responsive but care must be taken to handle reentrancy issues.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the reply from the prompt
             */
            confirm_run(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
            /**
             * Get the string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             * @returns a newly allocated string containing the string          handle of the window.
             */
            get_caller_window(): string;
            /**
             * Get the label for the cancel button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
             * from the prompt.
             * @returns a newly allocated string containing the label
             */
            get_cancel_label(): string;
            /**
             * Get whether the additional choice was chosen or not.
             *
             * The additional choice would have been setup using
             * gcr_prompt_set_choice_label().
             * @returns whether chosen
             */
            get_choice_chosen(): boolean;
            /**
             * Get the label for the additional choice.
             *
             * This will be %NULL if no additional choice is being displayed.
             * @returns a newly allocated string containing the additional          choice or %NULL
             */
            get_choice_label(): string;
            /**
             * Get the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
             * from the prompt.
             * @returns a newly allocated string containing the label
             */
            get_continue_label(): string;
            /**
             * Get the detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * The prompt message should contain relevant information.
             * @returns a newly allocated string containing the detailed          description of the prompt
             */
            get_description(): string;
            /**
             * Gets the prompt message for the user.
             *
             * A prompt implementation should always display this message.
             * @returns a newly allocated string containing the detailed          description of the prompt
             */
            get_message(): string;
            /**
             * Get whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             * @returns whether in new password mode or not
             */
            get_password_new(): boolean;
            /**
             * Get indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             * @returns zero if the password is empty, greater than zero if not
             */
            get_password_strength(): number;
            /**
             * Gets the title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * prompt message should contain relevant information.
             * @returns a newly allocated string containing the prompt          title.
             */
            get_title(): string;
            // Conflicted with Gtk.Window.get_title
            get_title(...args: never[]): any;
            /**
             * Get a prompt warning displayed on the prompt.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             *
             * If this string is %NULL then no warning is displayed.
             * @returns a newly allocated string containing the prompt          warning, or %NULL if no warning
             */
            get_warning(): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will block until the a response is returned from the prompter.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the password owned by the prompt, or %NULL
             */
            password(cancellable?: Gio.Cancellable | null): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an operation to prompt for a password.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             * @returns the password owned by the prompt, or %NULL
             */
            password_finish(result: Gio.AsyncResult): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will block until the a response is returned from the prompter
             * and will run a main loop similar to a gtk_dialog_run(). The application
             * will remain responsive but care must be taken to handle reentrancy issues.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the password owned by the prompt, or %NULL
             */
            password_run(cancellable?: Gio.Cancellable | null): string;
            /**
             * Reset the contents and properties of the prompt.
             */
            reset(): void;
            /**
             * Set the string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             * @param window_id the window id
             */
            set_caller_window(window_id: string): void;
            /**
             * Set the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
             * from the prompt.
             * @param cancel_label the label
             */
            set_cancel_label(cancel_label: string): void;
            /**
             * Set whether the additional choice is chosen or not.
             *
             * The additional choice should be set up using gcr_prompt_set_choice_label().
             * @param chosen whether chosen
             */
            set_choice_chosen(chosen: boolean): void;
            /**
             * Set the label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * The initial value of the choice can be set with the
             * gcr_prompt_set_choice_label() method.
             *
             * If this is %NULL, then no additional choice is being displayed.
             * @param choice_label the additional choice or %NULL
             */
            set_choice_label(choice_label?: string | null): void;
            /**
             * Set the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
             * from the prompt.
             * @param continue_label the label
             */
            set_continue_label(continue_label: string): void;
            /**
             * Set the detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * Use gcr_prompt_set_message() to set a general message containing relevant
             * information.
             * @param description the detailed description
             */
            set_description(description: string): void;
            /**
             * Sets the prompt message for the user.
             *
             * A prompt implementation should always display this message.
             * @param message the prompt message
             */
            set_message(message: string): void;
            /**
             * Set whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             * @param new_password whether in new password mode or not
             */
            set_password_new(new_password: boolean): void;
            /**
             * Sets the title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * prompt message should contain relevant information.
             * @param title the prompt title
             */
            set_title(title: string): void;
            /**
             * Set a prompt warning displayed on the prompt.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             *
             * If this string is %NULL then no warning is displayed.
             * @param warning the warning or %NULL
             */
            set_warning(warning?: string | null): void;
            /**
             * close a prompt
             */
            vfunc_prompt_close(): void;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this method to
             * represent the question correctly.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_prompt_confirm_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to prompt for confirmation.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             */
            vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_prompt_password_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to prompt for a password.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             */
            vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
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

        module SecureEntryBuffer {
            // Constructor properties interface

            interface ConstructorProps extends Gtk.EntryBuffer.ConstructorProps {}
        }

        /**
         * A [class`Gtk`.EntryBuffer] that uses non-pageable memory.
         *
         * It's good practice to try to keep passwords or sensitive secrets out of
         * pageable memory whenever possible, so that they don't get written to disk.
         *
         * A [class`SecureEntryBuffer]` is a [class`Gtk`.EntryBuffer] to be used with
         * [class`Gtk`.Entry] which uses non-pageable memory to store a password placed
         * in the entry. In order to make any sense at all, the entry must have it's
         * visibility turned off, and just be displaying place holder characters for
         * the text. That is, a password style entry.
         *
         * Use [ctor`Gtk`.Entry.new_with_buffer] or [method`Gtk`.Entry.set_buffer] to set this buffer
         * on an entry.
         */
        class SecureEntryBuffer extends Gtk.EntryBuffer {
            static $gtype: GObject.GType<SecureEntryBuffer>;

            // Constructors

            constructor(properties?: Partial<SecureEntryBuffer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SecureEntryBuffer;
        }

        module TreeSelector {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.TreeView.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                collection: Gcr.Collection;
                columns: any;
            }
        }

        /**
         * A tree selector can be used to select certificates or keys. It allows
         * the user to select multiple objects from a tree.
         */
        class TreeSelector extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
            static $gtype: GObject.GType<TreeSelector>;

            // Properties

            /**
             * The collection which contains the objects to display in the selector.
             */
            get collection(): Gcr.Collection;
            /**
             * The columns to use to display the objects.
             */
            get columns(): any;

            // Constructors

            constructor(properties?: Partial<TreeSelector.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the collection that this selector is displaying objects from.
             * @returns the collection, owned by the selector
             */
            get_collection(): Gcr.Collection;
            /**
             * Get a list of selected objects.
             * @returns the list of selected          objects, to be released with g_list_free()
             */
            get_selected(): GObject.Object[];
            /**
             * Select certain objects in the selector.
             * @param selected the list of objects to select
             */
            set_selected(selected: GObject.Object[]): void;

            // Inherited properties
            /**
             * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
             * shared between the scrollable widget and its parent.
             */
            get hadjustment(): Gtk.Adjustment;
            set hadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscroll_policy(): Gtk.ScrollablePolicy;
            set hscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscrollPolicy(): Gtk.ScrollablePolicy;
            set hscrollPolicy(val: Gtk.ScrollablePolicy);
            /**
             * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
             * between the scrollable widget and its parent.
             */
            get vadjustment(): Gtk.Adjustment;
            set vadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscroll_policy(): Gtk.ScrollablePolicy;
            set vscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscrollPolicy(): Gtk.ScrollablePolicy;
            set vscrollPolicy(val: Gtk.ScrollablePolicy);

            // Inherited methods
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             * @returns %TRUE if @border has been set
             */
            get_border(): [boolean, Gtk.Border];
            /**
             * Retrieves the #GtkAdjustment used for horizontal scrolling.
             * @returns horizontal #GtkAdjustment.
             */
            get_hadjustment(): Gtk.Adjustment;
            /**
             * Gets the horizontal #GtkScrollablePolicy.
             * @returns The horizontal #GtkScrollablePolicy.
             */
            get_hscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Retrieves the #GtkAdjustment used for vertical scrolling.
             * @returns vertical #GtkAdjustment.
             */
            get_vadjustment(): Gtk.Adjustment;
            /**
             * Gets the vertical #GtkScrollablePolicy.
             * @returns The vertical #GtkScrollablePolicy.
             */
            get_vscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Sets the horizontal adjustment of the #GtkScrollable.
             * @param hadjustment a #GtkAdjustment
             */
            set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * horizontal scrolling should start below the minimum width or
             * below the natural width.
             * @param policy the horizontal #GtkScrollablePolicy
             */
            set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
            /**
             * Sets the vertical adjustment of the #GtkScrollable.
             * @param vadjustment a #GtkAdjustment
             */
            set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * vertical scrolling should start below the minimum height or
             * below the natural height.
             * @param policy the vertical #GtkScrollablePolicy
             */
            set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             */
            vfunc_get_border(): [boolean, Gtk.Border];
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

        module UnlockOptionsWidget {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Bin.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                choice: string;
                ttl: number;
            }
        }

        /**
         * This widget displays a set of unlock options for the user to select.
         *
         * The user can choose between keeping caching the unlock indefinitely, or for
         * a given amount of time.
         *
         * Each option has a different name, for example #GCR_UNLOCK_OPTION_ALWAYS. These
         * names are used together with the various functions like
         * [method`UnlockOptionsWidget`.get_choice].
         */
        class UnlockOptionsWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<UnlockOptionsWidget>;

            // Properties

            get choice(): string;
            set choice(val: string);
            get ttl(): number;
            set ttl(val: number);

            // Constructors

            constructor(properties?: Partial<UnlockOptionsWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): UnlockOptionsWidget;

            // Methods

            /**
             * Get the currently selected option, like %GCR_UNLOCK_OPTION_ALWAYS.
             * @returns The currently selected option name.
             */
            get_choice(): string;
            /**
             * Get the label for one of the options. Use an option name like
             * %GCR_UNLOCK_OPTION_ALWAYS.
             * @param option The option name
             * @returns The current label for the option.
             */
            get_label(option: string): string;
            /**
             * Get the sensitivity state for one of the options. Use an option name like
             * %GCR_UNLOCK_OPTION_ALWAYS.
             * @param option The option name
             * @returns Whether the option is sensitive or not.
             */
            get_sensitive(option: string): boolean;
            // Conflicted with Gtk.Widget.get_sensitive
            get_sensitive(...args: never[]): any;
            /**
             * Get the timeout setting set for unlock options that have a timeout.
             * This will also return a valid value if the currently selected option
             * does not have a timeout.
             * @returns The unlock timeout in seconds.
             */
            get_ttl(): number;
            /**
             * Set the currently selected option. Use an option name like
             * %GCR_UNLOCK_OPTION_ALWAYS.
             * @param option The option name
             */
            set_choice(option: string): void;
            /**
             * Set the label for one of the options. Use an option name like
             * %GCR_UNLOCK_OPTION_ALWAYS.
             * @param option The option name
             * @param text The new label
             */
            set_label(option: string, text: string): void;
            /**
             * Set the sensitivity state for one of the options. Use an option name like
             * %GCR_UNLOCK_OPTION_ALWAYS. The reason will be displayed as a tooltip.
             * @param option The option name
             * @param sensitive The sensitivity state.
             * @param reason A user displayable string which contains the reason for the sensitivity.
             */
            set_sensitive(option: string, sensitive: boolean, reason: string): void;
            // Conflicted with Gtk.Widget.set_sensitive
            set_sensitive(...args: never[]): any;
            /**
             * Set the current setting for the timeout. This can be set even when the
             * currently selected option does not have a timeout.
             * @param ttl The timeout to set, in seconds
             */
            set_ttl(ttl: number): void;

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

        module ViewerWidget {
            // Signal callback interfaces

            interface Added {
                (renderer: Renderer, parsed: Gcr.Parsed): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Box.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Orientable.ConstructorProps {
                display_name: string;
                displayName: string;
                parser: Gcr.Parser;
            }
        }

        /**
         * A viewer widget which can display certificates and keys that are
         * located in files.
         */
        class ViewerWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
            static $gtype: GObject.GType<ViewerWidget>;

            // Properties

            /**
             * Display name for data being displayed. This is automatically
             * calculated from a loaded file, or can be explicitly set.
             *
             * Used as a hint when displaying a title for the data, but may be
             * overridden by the parsed data.
             */
            get display_name(): string;
            set display_name(val: string);
            /**
             * Display name for data being displayed. This is automatically
             * calculated from a loaded file, or can be explicitly set.
             *
             * Used as a hint when displaying a title for the data, but may be
             * overridden by the parsed data.
             */
            get displayName(): string;
            set displayName(val: string);
            /**
             * The parser used to parse loaded data into viewable items.
             */
            get parser(): Gcr.Parser;

            // Constructors

            constructor(properties?: Partial<ViewerWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ViewerWidget;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'added', callback: (_source: this, renderer: Renderer, parsed: Gcr.Parsed) => void): number;
            connect_after(
                signal: 'added',
                callback: (_source: this, renderer: Renderer, parsed: Gcr.Parsed) => void,
            ): number;
            emit(signal: 'added', renderer: Renderer, parsed: Gcr.Parsed): void;

            // Methods

            /**
             * Clear the error displayed on the viewer widget.
             */
            clear_error(): void;
            /**
             * Get the display name for data being displayed. This is automatically
             * calculated from a loaded file, or can be explicitly set.
             *
             * Used as a hint when displaying a title for the data, but may be
             * overridden by the parsed data.
             * @returns the display name
             */
            get_display_name(): string;
            /**
             * Get the parser used to parse loaded data into viewable items.
             * @returns the parser
             */
            get_parser(): Gcr.Parser;
            /**
             * Get the viewer used to display the viewable items.
             * @returns the viewer
             */
            get_viewer(): Viewer;
            /**
             * Parse and load some data to be displayed into the viewer widgets. The data
             * may contain multiple parseable items if the format can contain multiple
             * items.
             * @param display_name label for the loaded data
             * @param data data to load
             */
            load_bytes(display_name: string | null, data: GLib.Bytes | Uint8Array): void;
            /**
             * Parse and load some data to be displayed into the viewer widgets. The data
             * may contain multiple parseable items if the format can contain multiple
             * items.
             *
             * This function will copy the data. Use [method`ViewerWidget`.load_bytes] to avoid
             * copying the data.
             * @param display_name label for the loaded data
             * @param data data to load
             */
            load_data(display_name: string | null, data: Uint8Array | string): void;
            /**
             * Display contents of a file in the viewer widget. Multiple files can
             * be loaded.
             * @param file a file to load
             */
            load_file(file: Gio.File): void;
            /**
             * Set the display name for data being displayed. Once explicitly
             * set it will no longer be calculated automatically by loading data.
             *
             * Used as a hint when displaying a title for the data, but may be
             * overridden by the parsed data.
             * @param display_name the display name
             */
            set_display_name(display_name: string): void;
            /**
             * Show an error on the viewer widget. This is displayed on a info bar near
             * the edge of the widget.
             * @param message descriptive error message
             * @param error detailed error
             */
            show_error(message: string, error?: GLib.Error | null): void;

            // Inherited properties
            /**
             * The orientation of the orientable.
             */
            get orientation(): Gtk.Orientation;
            set orientation(val: Gtk.Orientation);

            // Inherited methods
            /**
             * Retrieves the orientation of the `orientable`.
             * @returns the orientation of the @orientable.
             */
            get_orientation(): Gtk.Orientation;
            /**
             * Sets the orientation of the `orientable`.
             * @param orientation the orientable’s new orientation.
             */
            set_orientation(orientation: Gtk.Orientation): void;
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

        type CertificateRendererClass = typeof CertificateRenderer;
        abstract class CertificateRendererPrivate {
            static $gtype: GObject.GType<CertificateRendererPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CertificateWidgetClass = typeof CertificateWidget;
        abstract class CertificateWidgetPrivate {
            static $gtype: GObject.GType<CertificateWidgetPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CollectionModelClass = typeof CollectionModel;
        abstract class CollectionModelPrivate {
            static $gtype: GObject.GType<CollectionModelPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ComboSelectorClass = typeof ComboSelector;
        abstract class ComboSelectorPrivate {
            static $gtype: GObject.GType<ComboSelectorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FailureRendererClass = typeof FailureRenderer;
        abstract class FailureRendererPrivate {
            static $gtype: GObject.GType<FailureRendererPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ImportButtonClass = typeof ImportButton;
        abstract class ImportButtonPrivate {
            static $gtype: GObject.GType<ImportButtonPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type KeyRendererClass = typeof KeyRenderer;
        abstract class KeyRendererPrivate {
            static $gtype: GObject.GType<KeyRendererPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type KeyWidgetClass = typeof KeyWidget;
        abstract class KeyWidgetPrivate {
            static $gtype: GObject.GType<KeyWidgetPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ListSelectorClass = typeof ListSelector;
        abstract class ListSelectorPrivate {
            static $gtype: GObject.GType<ListSelectorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PromptDialogClass = typeof PromptDialog;
        abstract class PromptDialogPrivate {
            static $gtype: GObject.GType<PromptDialogPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RendererIface = typeof Renderer;
        type SecureEntryBufferClass = typeof SecureEntryBuffer;
        abstract class SecureEntryBufferPrivate {
            static $gtype: GObject.GType<SecureEntryBufferPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TreeSelectorClass = typeof TreeSelector;
        abstract class TreeSelectorPrivate {
            static $gtype: GObject.GType<TreeSelectorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UnlockOptionsWidgetClass = typeof UnlockOptionsWidget;
        abstract class UnlockOptionsWidgetPrivate {
            static $gtype: GObject.GType<UnlockOptionsWidgetPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ViewerIface = typeof Viewer;
        type ViewerWidgetClass = typeof ViewerWidget;
        module Renderer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                attributes: Gck.Attributes;
                label: string;
            }
        }

        export interface RendererNamespace {
            $gtype: GObject.GType<Renderer>;
            prototype: Renderer;

            /**
             * Create and initialize a renderer for the given attributes and label. These
             * renderers should have been preregistered via gcr_renderer_register().
             * @param label The label for the renderer
             * @param attrs The attributes to render
             */
            create(label: string | null, attrs: Gck.Attributes): Renderer | null;
            /**
             * Register a renderer to be created when matching attributes are passed to
             * gcr_renderer_create().
             * @param renderer_type The renderer class type
             * @param attrs The attributes to match
             */
            register(renderer_type: GObject.GType, attrs: Gck.Attributes): void;
            /**
             * Register all the well known renderers for certificates and keys known to the
             * Gcr library.
             */
            register_well_known(): void;
        }
        interface Renderer extends GObject.Object {
            // Properties

            /**
             * The attributes to display.
             */
            get attributes(): Gck.Attributes;
            set attributes(val: Gck.Attributes);
            /**
             * The label to display.
             */
            get label(): string;
            set label(val: string);

            // Methods

            /**
             * Emit the #GcrRenderer::data-changed signal on the renderer. This is used by
             * renderer implementations.
             */
            emit_data_changed(): void;
            /**
             * Get the PKCS#11 attributes, if any, set for this renderer to display.
             * @returns the attributes, owned by the renderer
             */
            get_attributes(): Gck.Attributes | null;
            /**
             * Called by #GcrViewer when about to display a popup menu for the content
             * displayed by the renderer. The renderer can add a menu item if desired.
             * @param viewer The viewer that is displaying a popup
             * @param menu The popup menu being displayed
             */
            popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            render_view(viewer: Viewer): void;
            /**
             * Set the PKCS#11 attributes for this renderer to display.
             * @param attrs attributes to set
             */
            set_attributes(attrs?: Gck.Attributes | null): void;

            // Virtual methods

            /**
             * signal emitted when data being rendered changes
             */
            vfunc_data_changed(): void;
            /**
             * method invoked to populate a popup menu with additional
             *                  renderer options
             * @param viewer
             * @param menu
             */
            vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;
            /**
             * Render the contents of the renderer to the given viewer.
             * @param viewer The viewer to render to.
             */
            vfunc_render_view(viewer: Viewer): void;
        }

        export const Renderer: RendererNamespace;

        module Viewer {
            // Constructor properties interface

            interface ConstructorProps extends Gtk.Widget.ConstructorProps {}
        }

        export interface ViewerNamespace {
            $gtype: GObject.GType<Viewer>;
            prototype: Viewer;

            /**
             * Get an implementation of #GcrViewer that supports a view
             * of multiple renderers.
             */
            ['new'](): Viewer;
            /**
             * Get an implementation of #GcrViewer that supports a scrolled view
             * of multiple renderers.
             */
            new_scrolled(): Viewer;
        }
        interface Viewer extends Gtk.Widget {
            // Methods

            /**
             * Add a renderer to this viewer.
             * @param renderer The renderer to add
             */
            add_renderer(renderer: Renderer): void;
            /**
             * Get the number of renderers present in the viewer.
             * @returns The number of renderers.
             */
            count_renderers(): number;
            /**
             * Get a pointer to the renderer at the given index. It is an error to request
             * an index that is out of bounds.
             * @param index_ The index of the renderer to get
             * @returns the render, owned by the viewer
             */
            get_renderer(index_: number): Renderer;
            /**
             * Insert a renderer at a specific point in the viewer
             * @param renderer the renderer to insert
             * @param before the renderer to insert before
             */
            insert_renderer(renderer: Renderer, before?: Renderer | null): void;
            /**
             * Remove a renderer from this viewer.
             * @param renderer The renderer to remove
             */
            remove_renderer(renderer: Renderer): void;

            // Virtual methods

            /**
             * Add a renderer to this viewer.
             * @param renderer The renderer to add
             */
            vfunc_add_renderer(renderer: Renderer): void;
            /**
             * Get the number of renderers present in the viewer.
             */
            vfunc_count_renderers(): number;
            /**
             * Get a pointer to the renderer at the given index. It is an error to request
             * an index that is out of bounds.
             * @param index_ The index of the renderer to get
             */
            vfunc_get_renderer(index_: number): Renderer;
            /**
             * Insert a renderer at a specific point in the viewer
             * @param renderer the renderer to insert
             * @param before the renderer to insert before
             */
            vfunc_insert_renderer(renderer: Renderer, before?: Renderer | null): void;
            /**
             * Remove a renderer from this viewer.
             * @param renderer The renderer to remove
             */
            vfunc_remove_renderer(renderer: Renderer): void;
        }

        export const Viewer: ViewerNamespace;

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

    export default GcrUi;
}

declare module 'gi://GcrUi' {
    import GcrUi3 from 'gi://GcrUi?version=3';
    export default GcrUi3;
}
// END
