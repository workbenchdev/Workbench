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

declare module 'gi://Shumate?version=1.0' {
    // Module dependencies
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

    export namespace Shumate {
        /**
         * Shumate-1.0
         */

        /**
         * Error codes in the #SHUMATE_FILE_CACHE_ERROR domain.
         */
        class FileCacheError extends GLib.Error {
            static $gtype: GObject.GType<FileCacheError>;

            // Static fields

            /**
             * An unspecified error occurred during the operation.
             */
            static FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets the #ShumateFileCache error quark.
             */
            static quark(): GLib.Quark;
        }

        /**
         * A type of geometry.
         */

        /**
         * A type of geometry.
         */
        export namespace GeometryType {
            export const $gtype: GObject.GType<GeometryType>;
        }

        enum GeometryType {
            /**
             * Unknown geometry type
             */
            UNKNOWN,
            /**
             * A single point
             */
            POINT,
            /**
             * A collection of points
             */
            MULTIPOINT,
            /**
             * A single line
             */
            LINESTRING,
            /**
             * A collection of lines
             */
            MULTILINESTRING,
            /**
             * A single polygon
             */
            POLYGON,
            /**
             * A collection of polygons
             */
            MULTIPOLYGON,
        }
        /**
         * Projections supported by the library.
         */

        /**
         * Projections supported by the library.
         */
        export namespace MapProjection {
            export const $gtype: GObject.GType<MapProjection>;
        }

        enum MapProjection {
            /**
             * Currently the only supported projection
             */
            MERCATOR,
        }
        /**
         * Tile loading state.
         */

        /**
         * Tile loading state.
         */
        export namespace State {
            export const $gtype: GObject.GType<State>;
        }

        enum State {
            /**
             * Initial or undefined state
             */
            NONE,
            /**
             * Tile is loading
             */
            LOADING,
            /**
             * Tile is loaded but not yet displayed
             */
            LOADED,
            /**
             * Tile loading finished. Also used to inform map sources
             *     that tile loading has been cancelled.
             */
            DONE,
        }
        /**
         * Error codes that occurs while parsing the style in [class`VectorRenderer]`.
         */
        class StyleError extends GLib.Error {
            static $gtype: GObject.GType<StyleError>;

            // Static fields

            /**
             * An unspecified error occurred during the operation.
             */
            static FAILED: number;
            /**
             * A JSON node in the style has the wrong type (e.g. an object where there should be an array).
             */
            static MALFORMED_STYLE: number;
            /**
             * An unsupported layer type was encountered.
             */
            static UNSUPPORTED_LAYER: number;
            /**
             * An invalid or unrecognized expression was encountered.
             */
            static INVALID_EXPRESSION: number;
            /**
             * Libshumate was compiled without vector tile support.
             */
            static SUPPORT_OMITTED: number;
            /**
             * An unsupported style spec feature was encountered.
             */
            static UNSUPPORTED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Error codes in the #SHUMATE_TILE_DOWNLOADER_ERROR domain.
         */
        class TileDownloaderError extends GLib.Error {
            static $gtype: GObject.GType<TileDownloaderError>;

            // Static fields

            /**
             * An unspecified error occurred during the operation.
             */
            static FAILED: number;
            /**
             * An unsuccessful HTTP response was received from the server.
             */
            static BAD_RESPONSE: number;
            /**
             * The server could not be reached.
             */
            static COULD_NOT_CONNECT: number;
            /**
             * The provided URL isn't valid
             */
            static MALFORMED_URL: number;
            /**
             * The tile source has been marked as offline.
             */
            static OFFLINE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets the #ShumateTileDownloader error quark.
             */
            static quark(): GLib.Quark;
        }

        /**
         * Units used by the scale.
         */

        /**
         * Units used by the scale.
         */
        export namespace Unit {
            export const $gtype: GObject.GType<Unit>;
        }

        enum Unit {
            /**
             * Both metric and imperial units
             */
            BOTH,
            /**
             * Metric units (meters)
             */
            METRIC,
            /**
             * Imperial units (miles)
             */
            IMPERIAL,
        }
        /**
         * The major version of libshumate (1, if %SHUMATE_VERSION is 1.2.3)
         */
        const MAJOR_VERSION: number;
        /**
         * Maps for Free Relief
         */
        const MAP_SOURCE_MFF_RELIEF: string;
        /**
         * OpenStreetMap Cycle Map
         */
        const MAP_SOURCE_OSM_CYCLE_MAP: string;
        /**
         * OpenStreetMap Mapnik
         */
        const MAP_SOURCE_OSM_MAPNIK: string;
        /**
         * OpenStreetMap Transport Map
         */
        const MAP_SOURCE_OSM_TRANSPORT_MAP: string;
        /**
         * OpenWeatherMap clouds layer
         */
        const MAP_SOURCE_OWM_CLOUDS: string;
        /**
         * OpenWeatherMap precipitation
         */
        const MAP_SOURCE_OWM_PRECIPITATION: string;
        /**
         * OpenWeatherMap sea level pressure
         */
        const MAP_SOURCE_OWM_PRESSURE: string;
        /**
         * OpenWeatherMap temperature
         */
        const MAP_SOURCE_OWM_TEMPERATURE: string;
        /**
         * OpenWeatherMap wind
         */
        const MAP_SOURCE_OWM_WIND: string;
        /**
         * The maximal possible latitude value.
         */
        const MAX_LATITUDE: number;
        /**
         * The maximal possible longitude value.
         */
        const MAX_LONGITUDE: number;
        /**
         * The micro version of libshumate (3, if %SHUMATE_VERSION is 1.2.3)
         */
        const MICRO_VERSION: number;
        /**
         * The minor version of libshumate (2, if %SHUMATE_VERSION is 1.2.3)
         */
        const MINOR_VERSION: number;
        /**
         * The minimal possible latitude value.
         */
        const MIN_LATITUDE: number;
        /**
         * The minimal possible longitude value.
         */
        const MIN_LONGITUDE: number;
        /**
         * Gets the #ShumateFileCache error quark.
         * @returns a #GQuark
         */
        function file_cache_error_quark(): GLib.Quark;
        /**
         * Gets the user agent libshumate will use for all requests.
         *
         * This API is not thread-safe and should only be called from the main thread.
         * @returns the user agent
         */
        function get_user_agent(): string;
        /**
         * Sets the user agent that libshumate uses for all requests.
         *
         * This API is not thread-safe and should only be called from the main thread.
         * @param new_user_agent the new user agent, or %NULL to reset to the default
         */
        function set_user_agent(new_user_agent?: string | null): void;
        function style_error_quark(): GLib.Quark;
        /**
         * Gets the #ShumateTileDownloader error quark.
         * @returns a #GQuark
         */
        function tile_downloader_error_quark(): GLib.Quark;
        interface VectorSpriteFallbackFunc {
            (sprite_sheet: VectorSpriteSheet, name: string, scale: number): VectorSprite | null;
        }
        module Compass {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                viewport: Viewport;
            }
        }

        /**
         * A widget displaying a compass.
         *
         * # CSS nodes
         *
         * ```
         * map-compass
         * ├── revealer
         * ├──── image
         * ```
         *
         * `ShumateCompass` uses a single CSS node with name map-compass. It also uses an
         * image named "map-compass".
         */
        class Compass extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<Compass>;

            // Properties

            /**
             * The viewport to use.
             */
            get viewport(): Viewport;
            set viewport(val: Viewport);

            // Constructors

            constructor(properties?: Partial<Compass.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](viewport?: Viewport | null): Compass;

            // Methods

            /**
             * Gets the viewport used by the compass.
             * @returns The #ShumateViewport used by the compass
             */
            get_viewport(): Viewport | null;
            /**
             * Sets the compass viewport.
             * @param viewport a [class@Viewport]
             */
            set_viewport(viewport?: Viewport | null): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module Coordinate {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps, Location.ConstructorProps {}
        }

        /**
         * A simple object implementing [iface`Location]`.
         */
        class Coordinate extends GObject.InitiallyUnowned implements Location {
            static $gtype: GObject.GType<Coordinate>;

            // Constructors

            constructor(properties?: Partial<Coordinate.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Coordinate;

            static new_full(latitude: number, longitude: number): Coordinate;

            // Inherited properties
            /**
             * The latitude coordonate in degrees
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate in degrees
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Calculates the distance in meters between two locations.
             *
             * This function uses the great-circle distance formula, which assumes
             * Earth is a perfect sphere. This limits the accuracy of the result,
             * but is good enough for most purposes.
             * @param other a [iface@Location]
             * @returns the distance in meters between @self and @other
             */
            distance(other: Location): number;
            /**
             * Gets the latitude coordinate in degrees.
             * @returns the latitude coordinate in degrees.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             * @returns the longitude coordinate in degrees.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate in degrees.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module DataSource {
            // Signal callback interfaces

            interface ReceivedData {
                (x: number, y: number, zoom_level: number, bytes: GLib.Bytes | Uint8Array): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                max_zoom_level: number;
                maxZoomLevel: number;
                min_zoom_level: number;
                minZoomLevel: number;
            }
        }

        /**
         * The base class used to retrieve tiles as [struct`GLib`.Bytes].
         */
        abstract class DataSource extends GObject.Object {
            static $gtype: GObject.GType<DataSource>;

            // Properties

            /**
             * The maximum zoom level
             */
            get max_zoom_level(): number;
            set max_zoom_level(val: number);
            /**
             * The maximum zoom level
             */
            get maxZoomLevel(): number;
            set maxZoomLevel(val: number);
            /**
             * The minimum zoom level
             */
            get min_zoom_level(): number;
            set min_zoom_level(val: number);
            /**
             * The minimum zoom level
             */
            get minZoomLevel(): number;
            set minZoomLevel(val: number);

            // Constructors

            constructor(properties?: Partial<DataSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'received-data',
                callback: (_source: this, x: number, y: number, zoom_level: number, bytes: GLib.Bytes) => void,
            ): number;
            connect_after(
                signal: 'received-data',
                callback: (_source: this, x: number, y: number, zoom_level: number, bytes: GLib.Bytes) => void,
            ): number;
            emit(
                signal: 'received-data',
                x: number,
                y: number,
                zoom_level: number,
                bytes: GLib.Bytes | Uint8Array,
            ): void;

            // Virtual methods

            /**
             * Gets the data for the tile at the given coordinates.
             *
             * Some data sources may return data multiple times. For example,
             * [class`TileDownloader]` may return data from a cache, then return updated
             * data from the network. [signal`ShumateDataSource:`:received-data] is emitted
             * each time data is received, then `callback` is called after the last update.
             * @param x the X coordinate to fetch
             * @param y the Y coordinate to fetch
             * @param zoom_level the Z coordinate to fetch
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to execute upon completion
             */
            vfunc_get_tile_data_async(
                x: number,
                y: number,
                zoom_level: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the final result of a request started with
             * shumate_data_source_get_tile_data_async().
             * @param result a #GAsyncResult provided to callback
             */
            vfunc_get_tile_data_finish(result: Gio.AsyncResult): GLib.Bytes | null;
            /**
             * Begins a request for a tile.
             * @param x X coordinate to request
             * @param y Y coordinate to request
             * @param zoom_level zoom level to request
             * @param cancellable for cancelling the request
             */
            vfunc_start_request(
                x: number,
                y: number,
                zoom_level: number,
                cancellable?: Gio.Cancellable | null,
            ): DataSourceRequest;

            // Methods

            /**
             * Gets the data source's maximum zoom level.
             * @returns the maximum zoom level this data source supports
             */
            get_max_zoom_level(): number;
            /**
             * Gets the data source's minimum zoom level.
             * @returns the minimum zoom level this data source supports
             */
            get_min_zoom_level(): number;
            /**
             * Gets the data for the tile at the given coordinates.
             *
             * Some data sources may return data multiple times. For example,
             * [class`TileDownloader]` may return data from a cache, then return updated
             * data from the network. [signal`ShumateDataSource:`:received-data] is emitted
             * each time data is received, then `callback` is called after the last update.
             * @param x the X coordinate to fetch
             * @param y the Y coordinate to fetch
             * @param zoom_level the Z coordinate to fetch
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to execute upon completion
             */
            get_tile_data_async(
                x: number,
                y: number,
                zoom_level: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the final result of a request started with
             * shumate_data_source_get_tile_data_async().
             * @param result a #GAsyncResult provided to callback
             * @returns The requested data, or %NULL if an error occurred
             */
            get_tile_data_finish(result: Gio.AsyncResult): GLib.Bytes | null;
            /**
             * Sets the data source's maximum zoom level.
             * @param zoom_level the maximum zoom level
             */
            set_max_zoom_level(zoom_level: number): void;
            /**
             * Sets the data source's minimum zoom level.
             * @param zoom_level the minimum zoom level
             */
            set_min_zoom_level(zoom_level: number): void;
            /**
             * Begins a request for a tile.
             * @param x X coordinate to request
             * @param y Y coordinate to request
             * @param zoom_level zoom level to request
             * @param cancellable for cancelling the request
             * @returns a [class@DataSourceRequest] object for tracking the request.
             */
            start_request(
                x: number,
                y: number,
                zoom_level: number,
                cancellable?: Gio.Cancellable | null,
            ): DataSourceRequest;
        }

        module DataSourceRequest {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                completed: boolean;
                data: GLib.Bytes;
                error: GLib.Error;
                x: number;
                y: number;
                zoom_level: number;
                zoomLevel: number;
            }
        }

        /**
         * Represents a request to a [class`DataSource]` for a tile.
         *
         * Data sources can return a tile multiple times. For example, a
         * [class`TileDownloader]` may return cached data first, then later return data
         * from a network service when it arrives. This allows the map to be rendered
         * as quickly as possible without waiting for the network unnecessarily.
         *
         * Conventional async/finish method pairs don't support multiple returns.
         * Instead, [method`DataSource`.start_request] is available, which returns a
         * [class`DataSourceRequest]` whose properties, [property`DataSourceRequest:`data]
         * and [property`DataSourceRequest:`error], update as data becomes available.
         * The [signal`GObject`.Object::notify] signal can be used to watch for these
         * changes. When the request is done and no more data will be returned,
         * [property`DataSourceRequest:`completed] is set to %TRUE.
         *
         * [class`DataSource]` implementations can use a subclass of
         * [class`DataSourceRequest]`, but the base class should be sufficient in most
         * cases.
         */
        class DataSourceRequest extends GObject.Object {
            static $gtype: GObject.GType<DataSourceRequest>;

            // Properties

            /**
             * %TRUE if the request has been completed, otherwise %FALSE. A completed
             * request will not receive further updates to either
             * [property`DataSourceRequest:`data] or [property`DataSourceRequest:`error].
             */
            get completed(): boolean;
            /**
             * The most recent data for the tile, if available. If an error is emitted,
             * this will be set to %NULL.
             */
            get data(): GLib.Bytes;
            /**
             * The error that occurred during the request, if any.
             */
            get error(): GLib.Error;
            /**
             * The X coordinate of the requested tile.
             */
            get x(): number;
            /**
             * The Y coordinate of the requested tile.
             */
            get y(): number;
            /**
             * The zoom level of the requested tile.
             */
            get zoom_level(): number;
            /**
             * The zoom level of the requested tile.
             */
            get zoomLevel(): number;

            // Constructors

            constructor(properties?: Partial<DataSourceRequest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](x: number, y: number, zoom_level: number): DataSourceRequest;

            // Methods

            /**
             * Marks the request as complete. No more data or errors may be emitted.
             *
             * This can only be called if data has been emitted. If there is no data,
             * use [method`DataSourceRequest`.emit_error] instead, which will automatically
             * complete the request.
             */
            complete(): void;
            /**
             * Emits tile data as a response to the request. This sets the
             * [property`DataSourceRequest:`data] property.
             *
             * If `complete` is %TRUE, then [property`DataSourceRequest:`completed] is set to
             * %TRUE as well.
             * @param data the data to emit
             * @param complete %TRUE to also complete the request, %FALSE otherwise
             */
            emit_data(data: GLib.Bytes | Uint8Array, complete: boolean): void;
            /**
             * Emits a fatal error in response to the request. This completes the request,
             * so no more data or errors can be emitted after this. Non-fatal errors should
             * not be reported.
             *
             * If [property`DataSourceRequest:`data] was previously set, it will be cleared.
             * @param error an error
             */
            emit_error(error: GLib.Error): void;
            /**
             * Gets the latest data from the request.
             * @returns The latest data, if any.
             */
            get_data(): GLib.Bytes | null;
            // Conflicted with GObject.Object.get_data
            get_data(...args: never[]): any;
            /**
             * Gets the latest error from the request.
             * @returns The latest error, if any.
             */
            get_error(): GLib.Error | null;
            /**
             * Gets the X coordinate of the requested tile.
             * @returns the X coordinate
             */
            get_x(): number;
            /**
             * Gets the Y coordinate of the requested tile.
             * @returns the Y coordinate
             */
            get_y(): number;
            /**
             * Gets the zoom level of the requested tile.
             * @returns the zoom level
             */
            get_zoom_level(): number;
            /**
             * Gets whether the request has been completed. Completed requests will not
             * receive new data or errors.
             * @returns %TRUE if the request is completed, otherwise %FALSE
             */
            is_completed(): boolean;
        }

        module FileCache {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cache_dir: string;
                cacheDir: string;
                cache_key: string;
                cacheKey: string;
                size_limit: number;
                sizeLimit: number;
            }
        }

        /**
         * A cache that stores and retrieves tiles from the file system. It is mainly
         * used by [class`TileDownloader]`, but can also be used by custom data
         * sources.
         *
         * The cache will be filled up to a certain size limit. When this limit is
         * reached, the cache can be purged, and the tiles that are accessed least are
         * deleted.
         *
         * ## ETags
         *
         * The cache can optionally store an ETag string with each tile. This is
         * useful to avoid redownloading old tiles that haven't changed (for example,
         * using the HTTP If-None-Match header).
         */
        class FileCache extends GObject.Object {
            static $gtype: GObject.GType<FileCache>;

            // Properties

            /**
             * The directory where the tile database is stored.
             */
            get cache_dir(): string;
            /**
             * The directory where the tile database is stored.
             */
            get cacheDir(): string;
            /**
             * The key used to store and retrieve tiles from the cache. Different keys
             * can be used to store multiple tilesets in the same cache directory.
             */
            get cache_key(): string;
            /**
             * The key used to store and retrieve tiles from the cache. Different keys
             * can be used to store multiple tilesets in the same cache directory.
             */
            get cacheKey(): string;
            /**
             * The cache size limit in bytes.
             *
             * Note: this new value will not be applied until you call shumate_file_cache_purge()
             */
            get size_limit(): number;
            set size_limit(val: number);
            /**
             * The cache size limit in bytes.
             *
             * Note: this new value will not be applied until you call shumate_file_cache_purge()
             */
            get sizeLimit(): number;
            set sizeLimit(val: number);

            // Constructors

            constructor(properties?: Partial<FileCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_full(size_limit: number, cache_key: string, cache_dir?: string | null): FileCache;

            // Methods

            /**
             * Gets the directory where the cache database is stored.
             * @returns the directory
             */
            get_cache_dir(): string;
            /**
             * Gets the key used to store and retrieve tiles from the cache. Different keys
             * can be used to store multiple tilesets in the same cache directory.
             * @returns the cache key
             */
            get_cache_key(): string;
            /**
             * Gets the cache size limit in bytes.
             * @returns size limit
             */
            get_size_limit(): number;
            /**
             * Gets tile data from the cache, if it is available.
             * @param x the X coordinate of the tile
             * @param y the Y coordinate of the tile
             * @param zoom_level the zoom level of the tile
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to execute upon completion
             */
            get_tile_async(
                x: number,
                y: number,
                zoom_level: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the tile data from a completed shumate_file_cache_get_tile_async()
             * operation.
             *
             * `modtime` will be set to the time the tile was added to the cache, or the
             * latest time it was confirmed to be up to date.
             *
             * `etag` will be set to the data's ETag, if present.
             * @param result a #GAsyncResult provided to callback
             * @returns a #GBytes containing the tile data, or %NULL if the tile was not in the cache or an error occurred
             */
            get_tile_finish(result: Gio.AsyncResult): [GLib.Bytes, string, GLib.DateTime | null];
            /**
             * Marks a tile in the cache as being up to date, without changing its data.
             *
             * For example, a network source might call this function when it gets an HTTP
             * 304 Not Modified response.
             * @param x the X coordinate of the tile
             * @param y the Y coordinate of the tile
             * @param zoom_level the zoom level of the tile
             */
            mark_up_to_date(x: number, y: number, zoom_level: number): void;
            /**
             * Removes less used tiles from the cache, if necessary, until it fits in
             * the size limit.
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to execute upon completion
             */
            purge_cache_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the result of an async operation started using
             * shumate_file_cache_purge_cache_async().
             * @param result a #GAsyncResult provided to callback
             * @returns %TRUE if any tiles were removed, otherwise %FALSE
             */
            purge_cache_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the cache size limit in bytes.
             * @param size_limit the cache limit in bytes
             */
            set_size_limit(size_limit: number): void;
            /**
             * Stores a tile in the cache.
             * @param x the X coordinate of the tile
             * @param y the Y coordinate of the tile
             * @param zoom_level the zoom level of the tile
             * @param bytes a #GBytes
             * @param etag an ETag string, or %NULL
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to execute upon completion
             */
            store_tile_async(
                x: number,
                y: number,
                zoom_level: number,
                bytes: GLib.Bytes | Uint8Array,
                etag?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the success value of a completed shumate_file_cache_store_tile_async()
             * operation.
             * @param result a #GAsyncResult provided to callback
             * @returns %TRUE if the operation was successful, otherwise %FALSE
             */
            store_tile_finish(result: Gio.AsyncResult): boolean;
        }

        module Layer {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                viewport: Viewport;
            }
        }

        /**
         * Every layer (overlay that moves together with the map) has to inherit this
         * class and implement its virtual methods.
         *
         * You can use the same layer to display many types of maps.  In Shumate they
         * are called map sources.  You can change the [property`MapLayer:`map-source]
         * property at any time to replace the current displayed map.
         */
        abstract class Layer extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<Layer>;

            // Properties

            get viewport(): Viewport;

            // Constructors

            constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Returns a string to show in the debug overlay, which can be
             * enabled in the GTK inspector.
             */
            vfunc_get_debug_text(): string | null;

            // Methods

            /**
             * Gets the #ShumateViewport used by this layer.
             * @returns The #ShumateViewport.
             */
            get_viewport(): Viewport;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module License {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                extra_text: string;
                extraText: string;
                xalign: number;
            }
        }

        /**
         * A widget that displays license text.
         */
        class License extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<License>;

            // Properties

            /**
             * Sets additional text to be displayed in the license area.  The map's
             * license will be added below it. Your text can have multiple lines, just use
             * "\n" in between.
             */
            get extra_text(): string;
            set extra_text(val: string);
            /**
             * Sets additional text to be displayed in the license area.  The map's
             * license will be added below it. Your text can have multiple lines, just use
             * "\n" in between.
             */
            get extraText(): string;
            set extraText(val: string);
            /**
             * The license's horizontal alignment
             */
            get xalign(): number;
            set xalign(val: number);

            // Constructors

            constructor(properties?: Partial<License.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): License;

            // Methods

            append_map_source(map_source: MapSource): void;
            /**
             * Gets the additional license text.
             * @returns the additional license text
             */
            get_extra_text(): string;
            /**
             * Get the license's text horizontal alignment.
             * @returns the license's text horizontal alignment.
             */
            get_xalign(): number;
            prepend_map_source(map_source: MapSource): void;
            remove_map_source(map_source: MapSource): void;
            /**
             * Show the additional license text on the map view.  The text will preceed the
             * map's licence when displayed. Use "\n" to separate the lines.
             * @param text the additional license text
             */
            set_extra_text(text: string): void;
            /**
             * Set the license's text horizontal alignment.
             * @param xalign The license's text horizontal alignment
             */
            set_xalign(xalign: number): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module Map {
            // Signal callback interfaces

            interface AnimationCompleted {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                animate_zoom: boolean;
                animateZoom: boolean;
                go_to_duration: number;
                goToDuration: number;
                state: State;
                viewport: Viewport;
                zoom_on_double_click: boolean;
                zoomOnDoubleClick: boolean;
            }
        }

        /**
         * The Map widget is a [class`Gtk`.Widget] that show and allows interaction with
         * the user.
         *
         * This is the base widget and doesn't have advanced features. You can check the
         * [class`Shumate`.SimpleMap] for a ready-to-use widget.
         *
         * By default, a [class`Shumate`.Viewport] is created and can be accessed with
         * [method`Shumate`.Map.get_viewport].
         *
         * Unless created with [ctor`Shumate`.Map.new_simple], the widget doesn't hold any
         * layer and won't show anything. A [class`Shumate`.Layer] can be added or removed
         * using the [method`Shumate`.Map.add_layer] or [method`Shumate`.Map.remove_layer]
         * methods.
         */
        class Map extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<Map>;

            // Properties

            /**
             * Animate zoom change when zooming in/out.
             */
            get animate_zoom(): boolean;
            set animate_zoom(val: boolean);
            /**
             * Animate zoom change when zooming in/out.
             */
            get animateZoom(): boolean;
            set animateZoom(val: boolean);
            /**
             * The duration of an animation when going to a location, in milliseconds.
             * A value of 0 means that the duration is calculated automatically for you.
             *
             * Please note that animation of #shumate_map_ensure_visible also
             * involves a 'go-to' animation.
             */
            get go_to_duration(): number;
            set go_to_duration(val: number);
            /**
             * The duration of an animation when going to a location, in milliseconds.
             * A value of 0 means that the duration is calculated automatically for you.
             *
             * Please note that animation of #shumate_map_ensure_visible also
             * involves a 'go-to' animation.
             */
            get goToDuration(): number;
            set goToDuration(val: number);
            /**
             * The view's global state. Useful to inform using if the view is busy loading
             * tiles or not.
             */
            get state(): State;
            /**
             * The viewport, which contains information about the center, rotation, zoom,
             * etc. of the map.
             */
            get viewport(): Viewport;
            /**
             * Should the view zoom in and recenter when the user double click on the map.
             */
            get zoom_on_double_click(): boolean;
            set zoom_on_double_click(val: boolean);
            /**
             * Should the view zoom in and recenter when the user double click on the map.
             */
            get zoomOnDoubleClick(): boolean;
            set zoomOnDoubleClick(val: boolean);

            // Constructors

            constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Map;

            static new_simple(): Map;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'animation-completed', callback: (_source: this) => void): number;
            connect_after(signal: 'animation-completed', callback: (_source: this) => void): number;
            emit(signal: 'animation-completed'): void;

            // Methods

            /**
             * Adds a new layer to the view
             * @param layer a #ShumateLayer
             */
            add_layer(layer: Layer): void;
            /**
             * Centers the map on these coordinates.
             * @param latitude the longitude to center the map at
             * @param longitude the longitude to center the map at
             */
            center_on(latitude: number, longitude: number): void;
            /**
             * Checks whether the view animates zoom level changes.
             * @returns TRUE if the view animates zooms, FALSE otherwise.
             */
            get_animate_zoom(): boolean;
            /**
             * Get the 'go-to-duration' property.
             * @returns the animation duration when calling [method@Map.go_to],   in milliseconds.
             */
            get_go_to_duration(): number;
            /**
             * Gets the view's state.
             * @returns the state.
             */
            get_state(): State;
            /**
             * Get the #ShumateViewport used by this view.
             * @returns the #ShumateViewport
             */
            get_viewport(): Viewport;
            /**
             * Checks whether the view zooms on double click.
             * @returns TRUE if the view zooms on double click, FALSE otherwise.
             */
            get_zoom_on_double_click(): boolean;
            /**
             * Move from the current position to these coordinates. All tiles in the
             * intermediate view WILL be loaded!
             * @param latitude the longitude to center the map at
             * @param longitude the longitude to center the map at
             */
            go_to(latitude: number, longitude: number): void;
            /**
             * Move from the current position to these coordinates and zoom to the given
             * zoom level. All tiles in the intermediate view WILL be loaded!
             * @param latitude the longitude to center the map at
             * @param longitude the longitude to center the map at
             * @param zoom_level the zoom level to end at
             */
            go_to_full(latitude: number, longitude: number, zoom_level: number): void;
            /**
             * Move from the current position to these coordinates and zoom to the given
             * zoom level. The given duration is used instead of the map's default [property`Map:`go-to-duration].
             * All tiles in the intermediate view WILL be loaded!
             * @param latitude the longitude to center the map at
             * @param longitude the longitude to center the map at
             * @param zoom_level the zoom level to end at
             * @param duration_ms animation duration in milliseconds
             */
            go_to_full_with_duration(
                latitude: number,
                longitude: number,
                zoom_level: number,
                duration_ms: number,
            ): void;
            /**
             * Adds `layer` to `self` above `next_sibling` or, if `next_sibling` is %NULL, at
             * the bottom of the layer list.
             * @param layer a #ShumateLayer
             * @param next_sibling a #ShumateLayer that is a child of @self, or %NULL
             */
            insert_layer_above(layer: Layer, next_sibling?: Layer | null): void;
            /**
             * Adds `layer` to `self` behind `next_sibling` or, if `next_sibling` is %NULL, at
             * the top of the layer list.
             * @param layer a #ShumateLayer
             * @param next_sibling a #ShumateLayer that is a child of @self, or %NULL
             */
            insert_layer_behind(layer: Layer, next_sibling?: Layer | null): void;
            /**
             * Removes the given layer from the view
             * @param layer a #ShumateLayer
             */
            remove_layer(layer: Layer): void;
            /**
             * Should the view animate zoom level changes.
             * @param value a #gboolean
             */
            set_animate_zoom(value: boolean): void;
            /**
             * Set the duration of the transition of [method`Map`.go_to].
             * @param duration the animation duration, in milliseconds
             */
            set_go_to_duration(duration: number): void;
            /**
             * Changes the currently used map source. #g_object_unref() will be called on
             * the previous one.
             *
             * As a side effect, changing the primary map source will also clear all
             * secondary map sources.
             * @param map_source a #ShumateMapSource
             */
            set_map_source(map_source: MapSource): void;
            /**
             * Should the view zoom in and recenter when the user double click on the map.
             * @param value a #gboolean
             */
            set_zoom_on_double_click(value: boolean): void;
            /**
             * Stop the go to animation.  The view will stay where it was when the
             * animation was stopped.
             */
            stop_go_to(): void;
            /**
             * Zooms the map in. If [property`Map:`animate-zoom] is `TRUE`, the change will be animated.
             */
            zoom_in(): void;
            /**
             * Zooms the map out. If [property`Map:`animate-zoom] is `TRUE`, the change will be animated.
             */
            zoom_out(): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module MapLayer {
            // Signal callback interfaces

            interface SymbolClicked {
                (event: SymbolEvent): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Layer.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                map_source: MapSource;
                mapSource: MapSource;
            }
        }

        /**
         * A [class`Shumate`.Layer] implementation that fetches tiles from a [class`Shumate`.MapSource]
         * and draws them as a grid.
         */
        class MapLayer extends Layer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<MapLayer>;

            // Properties

            get map_source(): MapSource;
            get mapSource(): MapSource;

            // Constructors

            constructor(properties?: Partial<MapLayer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](map_source: MapSource, viewport: Viewport): MapLayer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'symbol-clicked', callback: (_source: this, event: SymbolEvent) => void): number;
            connect_after(signal: 'symbol-clicked', callback: (_source: this, event: SymbolEvent) => void): number;
            emit(signal: 'symbol-clicked', event: SymbolEvent): void;

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

        module MapSource {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                id: string;
                license: string;
                license_uri: string;
                licenseUri: string;
                max_zoom_level: number;
                maxZoomLevel: number;
                min_zoom_level: number;
                minZoomLevel: number;
                name: string;
                projection: MapProjection;
                tile_size: number;
                tileSize: number;
            }
        }

        /**
         * The base class for all map sources. Map sources fill [class`Tile]` objects
         * with images from various sources: a web API, for example, or a test pattern
         * generated on demand.
         *
         * The most common map source is [class`RasterRenderer]`, which fetches tiles
         * using a [class`TileDownloader]`.
         */
        abstract class MapSource extends GObject.Object {
            static $gtype: GObject.GType<MapSource>;

            // Properties

            /**
             * The id of the map source
             */
            get id(): string;
            set id(val: string);
            /**
             * The usage license of the map source
             */
            get license(): string;
            set license(val: string);
            /**
             * The usage license's uri for more information
             */
            get license_uri(): string;
            set license_uri(val: string);
            /**
             * The usage license's uri for more information
             */
            get licenseUri(): string;
            set licenseUri(val: string);
            /**
             * The maximum zoom level
             */
            get max_zoom_level(): number;
            set max_zoom_level(val: number);
            /**
             * The maximum zoom level
             */
            get maxZoomLevel(): number;
            set maxZoomLevel(val: number);
            /**
             * The minimum zoom level
             */
            get min_zoom_level(): number;
            set min_zoom_level(val: number);
            /**
             * The minimum zoom level
             */
            get minZoomLevel(): number;
            set minZoomLevel(val: number);
            /**
             * The name of the map source
             */
            get name(): string;
            set name(val: string);
            /**
             * The map projection of the map source
             */
            get projection(): MapProjection;
            set projection(val: MapProjection);
            /**
             * The tile size of the map source
             */
            get tile_size(): number;
            set tile_size(val: number);
            /**
             * The tile size of the map source
             */
            get tileSize(): number;
            set tileSize(val: number);

            // Constructors

            constructor(properties?: Partial<MapSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Asynchronous version of shumate_map_source_fill_tile().
             * @param tile a #ShumateTile
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to execute upon completion
             */
            vfunc_fill_tile_async(
                tile: Tile,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the success value of a completed shumate_map_source_fill_tile_async()
             * operation.
             * @param result a #GAsyncResult provided to callback
             */
            vfunc_fill_tile_finish(result: Gio.AsyncResult): boolean;

            // Methods

            /**
             * Asynchronous version of shumate_map_source_fill_tile().
             * @param tile a #ShumateTile
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to execute upon completion
             */
            fill_tile_async(
                tile: Tile,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the success value of a completed shumate_map_source_fill_tile_async()
             * operation.
             * @param result a #GAsyncResult provided to callback
             * @returns %TRUE if the tile was filled with valid data, otherwise %FALSE
             */
            fill_tile_finish(result: Gio.AsyncResult): boolean;
            /**
             * Gets the number of tiles in a column at this zoom level for this map
             * source.
             * @param zoom_level the zoom level
             * @returns the number of tiles in a column
             */
            get_column_count(zoom_level: number): number;
            /**
             * Gets map source's id.
             * @returns the map source's id.
             */
            get_id(): string;
            /**
             * Gets the latitude corresponding to this y position in the map source's
             * projection.
             * @param zoom_level the zoom level
             * @param y a y position
             * @returns the latitude
             */
            get_latitude(zoom_level: number, y: number): number;
            /**
             * Gets map source's license.
             * @returns the map source's license.
             */
            get_license(): string;
            /**
             * Gets map source's license URI.
             * @returns the map source's license URI.
             */
            get_license_uri(): string;
            /**
             * Gets the longitude corresponding to this x position in the map source's
             * projection.
             * @param zoom_level the zoom level
             * @param x a x position
             * @returns the longitude
             */
            get_longitude(zoom_level: number, x: number): number;
            /**
             * Gets map source's maximum zoom level.
             * @returns the maximum zoom level this map source supports
             */
            get_max_zoom_level(): number;
            /**
             * Gets meters per pixel at the position on the map using this map source's projection.
             * @param zoom_level the zoom level
             * @param latitude a latitude
             * @param longitude a longitude
             * @returns the meters per pixel
             */
            get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number;
            /**
             * Gets map source's minimum zoom level.
             * @returns the miminum zoom level this map source supports
             */
            get_min_zoom_level(): number;
            /**
             * Gets map source's name.
             * @returns the map source's name.
             */
            get_name(): string;
            /**
             * Gets map source's projection.
             * @returns the map source's projection.
             */
            get_projection(): MapProjection;
            /**
             * Gets the number of tiles in a row at this zoom level for this map source.
             * @param zoom_level the zoom level
             * @returns the number of tiles in a row
             */
            get_row_count(zoom_level: number): number;
            /**
             * Gets map source's tile size.
             * @returns the tile's size (width and height) in pixels for this map source
             */
            get_tile_size(): number;
            /**
             * Gets the apparent size of the map tiles at the given fractional zoom level.
             *
             * As the map is zoomed in, a tile gets bigger and bigger until, at the next
             * integer zoom level, it "splits" into four tiles at the next zoom level.
             * Thus, the size increase follows an exponential curve, base 2.
             * @param zoom_level a zoom level
             * @returns the tile's size (width and height) in pixels for this map source at this zoom level
             */
            get_tile_size_at_zoom(zoom_level: number): number;
            /**
             * Gets the x position on the map using this map source's projection.
             * (0, 0) is located at the top left.
             * @param zoom_level the zoom level
             * @param longitude a longitude
             * @returns the x position
             */
            get_x(zoom_level: number, longitude: number): number;
            /**
             * Gets the y position on the map using this map source's projection.
             * (0, 0) is located at the top left.
             * @param zoom_level the zoom level
             * @param latitude a latitude
             * @returns the y position
             */
            get_y(zoom_level: number, latitude: number): number;
            /**
             * Sets the map source's id.
             * @param id an id
             */
            set_id(id: string): void;
            /**
             * Sets the map source's license.
             * @param license the licence
             */
            set_license(license: string): void;
            /**
             * Sets the map source's license URI.
             * @param license_uri the licence URI
             */
            set_license_uri(license_uri: string): void;
            /**
             * Sets the map source's maximum zoom level.
             * @param zoom_level the maximum zoom level
             */
            set_max_zoom_level(zoom_level: number): void;
            /**
             * Sets the map source's minimal zoom level.
             * @param zoom_level the minimal zoom level
             */
            set_min_zoom_level(zoom_level: number): void;
            /**
             * Sets the map source's name.
             * @param name a name
             */
            set_name(name: string): void;
            /**
             * Sets the map source's projection.
             * @param projection a #ShumateMapProjection
             */
            set_projection(projection: MapProjection): void;
            /**
             * Sets the map source's tile size.
             * @param tile_size the tile size
             */
            set_tile_size(tile_size: number): void;
        }

        module MapSourceRegistry {
            // Constructor properties interface

            interface ConstructorProps<A extends GObject.Object = GObject.Object>
                extends GObject.Object.ConstructorProps,
                    Gio.ListModel.ConstructorProps {}
        }

        /**
         * This object allows you to hold [class`MapSource]` instances, you can access a
         * default set of sources with [method`MapSourceRegistry`.populate_defaults].
         *
         * It conveniently implements [iface`Gio`.ListModel] to easily integrate with it.
         */
        class MapSourceRegistry<A extends GObject.Object = GObject.Object>
            extends GObject.Object
            implements Gio.ListModel<A>
        {
            static $gtype: GObject.GType<MapSourceRegistry>;

            // Constructors

            constructor(properties?: Partial<MapSourceRegistry.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MapSourceRegistry;

            static new_with_defaults(): MapSourceRegistry;

            // Methods

            /**
             * Adds the #ShumateMapSource to the #ShumateMapSourceRegistry
             * @param map_source a #ShumateMapSource
             */
            add(map_source: MapSource): void;
            /**
             * Find the #ShumateMapSource with the corresponding id
             * @param id the id of the #ShumateMapSource
             * @returns the #ShumateMapSource or %NULL if no map source has been found
             */
            get_by_id(id: string): MapSource | null;
            /**
             * Populates the #ShumateMapSourceRegistry with a default set of sources.
             */
            populate_defaults(): void;
            /**
             * Removes the corresponding #ShumateMapSource from the registry.
             * If the source doesn't exist in the registry, this function does nothing.
             * @param id a #ShumateMapSource id
             */
            remove(id: string): void;

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

        module Marker {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    Location.ConstructorProps {
                child: Gtk.Widget;
                selectable: boolean;
            }
        }

        /**
         * Markers represent points of interest on a map. Markers need to be
         * placed on a layer (a [class`MarkerLayer]`). Layers have to be added to a
         * [class`Map]` for the markers to show on the map.
         *
         * A marker is nothing more than a regular [class`Gtk`.Widget]. You can draw on
         * it what ever you want. Set the marker's position on the map using
         * [method`Location`.set_location].
         *
         * This is a base class of all markers. A typical usage of a marker is for
         * instance to add a [class`Gtk`.Image] with a pin image and add the
         * [class`Gtk`.GestureClick] controller to listen to click events and show
         * a [class`Gtk`.Popover] with the description of the marker.
         */
        class Marker extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Location {
            static $gtype: GObject.GType<Marker>;

            // Properties

            /**
             * The child widget of the marker
             */
            get child(): Gtk.Widget;
            set child(val: Gtk.Widget);
            /**
             * The selectable state of the marker
             */
            get selectable(): boolean;
            set selectable(val: boolean);

            // Constructors

            constructor(properties?: Partial<Marker.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Marker;

            // Methods

            animate_in(): void;
            animate_in_with_delay(delay: number): void;
            animate_out(): void;
            animate_out_with_delay(delay: number): void;
            /**
             * Retrieves the current child of `marker`.
             * @returns a #GtkWidget.
             */
            get_child(): Gtk.Widget | null;
            get_draggable(): boolean;
            /**
             * Checks whether the marker is selectable.
             * @returns the selectable or not state of the marker.
             */
            get_selectable(): boolean;
            /**
             * Checks whether the marker is selected.
             * @returns %TRUE if the marker is selected, otherwise %FALSE
             */
            is_selected(): boolean;
            /**
             * Sets the child widget of `marker`.
             * @param child a #GtkWidget
             */
            set_child(child?: Gtk.Widget | null): void;
            set_draggable(value: boolean): void;
            /**
             * Sets the marker as selectable or not.
             * @param value the selectable state
             */
            set_selectable(value: boolean): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);
            /**
             * The latitude coordonate in degrees
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate in degrees
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
            /**
             * Calculates the distance in meters between two locations.
             *
             * This function uses the great-circle distance formula, which assumes
             * Earth is a perfect sphere. This limits the accuracy of the result,
             * but is good enough for most purposes.
             * @param other a [iface@Location]
             * @returns the distance in meters between @self and @other
             */
            distance(other: Location): number;
            /**
             * Gets the latitude coordinate in degrees.
             * @returns the latitude coordinate in degrees.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             * @returns the longitude coordinate in degrees.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate in degrees.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module MarkerLayer {
            // Signal callback interfaces

            interface MarkerSelected {
                (marker: Marker): void;
            }

            interface MarkerUnselected {
                (marker: Marker): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Layer.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                selection_mode: Gtk.SelectionMode;
                selectionMode: Gtk.SelectionMode;
            }
        }

        /**
         * Displays markers on the map. It is responsible for positioning markers
         * correctly, marker selections and group marker operations.
         */
        class MarkerLayer extends Layer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<MarkerLayer>;

            // Properties

            /**
             * Determines the type of selection that will be performed.
             */
            get selection_mode(): Gtk.SelectionMode;
            set selection_mode(val: Gtk.SelectionMode);
            /**
             * Determines the type of selection that will be performed.
             */
            get selectionMode(): Gtk.SelectionMode;
            set selectionMode(val: Gtk.SelectionMode);

            // Constructors

            constructor(properties?: Partial<MarkerLayer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](viewport: Viewport): MarkerLayer;

            static new_full(viewport: Viewport, mode: Gtk.SelectionMode): MarkerLayer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'marker-selected', callback: (_source: this, marker: Marker) => void): number;
            connect_after(signal: 'marker-selected', callback: (_source: this, marker: Marker) => void): number;
            emit(signal: 'marker-selected', marker: Marker): void;
            connect(signal: 'marker-unselected', callback: (_source: this, marker: Marker) => void): number;
            connect_after(signal: 'marker-unselected', callback: (_source: this, marker: Marker) => void): number;
            emit(signal: 'marker-unselected', marker: Marker): void;

            // Methods

            /**
             * Adds the marker to the layer.
             * @param marker a [class@Marker]
             */
            add_marker(marker: Marker): void;
            /**
             * Gets a copy of the list of all markers inserted into the layer. You should
             * free the list but not its contents.
             * @returns the list
             */
            get_markers(): Marker[];
            /**
             * Gets a list of selected markers in the layer.
             * @returns the list
             */
            get_selected(): Marker[];
            /**
             * Gets the selection mode of the layer.
             * @returns the selection mode of the layer.
             */
            get_selection_mode(): Gtk.SelectionMode;
            /**
             * Removes all markers from the layer.
             */
            remove_all(): void;
            /**
             * Removes the marker from the layer.
             * @param marker a [class@Marker]
             */
            remove_marker(marker: Marker): void;
            /**
             * Selects all selectable markers in the layer.
             */
            select_all_markers(): void;
            /**
             * Selects a marker in this layer.
             *
             * If [class`MarkerLayer]`:selection-mode is %GTK_SELECTION_SINGLE or
             * %GTK_SELECTION_BROWSE, all other markers will be unselected. If the mode is
             * %GTK_SELECTION_NONE or `marker` is not selectable, nothing will happen.
             * @param marker a [class@Marker] that is a child of @self
             * @returns %TRUE if the marker is now selected, otherwise %FALSE
             */
            select_marker(marker: Marker): boolean;
            /**
             * Sets the selection mode of the layer.
             *
             * NOTE: changing selection mode to %GTK_SELECTION_NONE, %GTK_SELECTION_SINGLE
             * or %GTK_SELECTION_BROWSE will clear all previously selected markers.
             * @param mode a [enum@Gtk.SelectionMode] value
             */
            set_selection_mode(mode: Gtk.SelectionMode): void;
            /**
             * Unselects all markers in the layer.
             */
            unselect_all_markers(): void;
            /**
             * Unselects a marker in this layer.
             *
             * This works even if [class`MarkerLayer]`:selection-mode is
             * %GTK_SELECTION_BROWSE. Browse mode only prevents user interaction, not the
             * program, from unselecting a marker.
             * @param marker a [class@Marker] that is a child of @self
             */
            unselect_marker(marker: Marker): void;

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

        module PathLayer {
            // Constructor properties interface

            interface ConstructorProps
                extends Layer.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                closed: boolean;
                fill: boolean;
                fill_color: Gdk.RGBA;
                fillColor: Gdk.RGBA;
                outline_color: Gdk.RGBA;
                outlineColor: Gdk.RGBA;
                outline_width: number;
                outlineWidth: number;
                stroke: boolean;
                stroke_color: Gdk.RGBA;
                strokeColor: Gdk.RGBA;
                stroke_width: number;
                strokeWidth: number;
            }
        }

        /**
         * A layer displaying line path between inserted [iface`Location]` objects
         *
         * This layer shows a connection between inserted objects implementing the
         * [iface`Location]` interface. This means that both [class`Marker]`
         * objects and [class`Coordinate]` objects can be inserted into the layer.
         * Of course, custom objects implementing the [iface`Location]` interface
         * can be used as well.
         */
        class PathLayer extends Layer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<PathLayer>;

            // Properties

            /**
             * The shape is a closed path
             */
            get closed(): boolean;
            set closed(val: boolean);
            /**
             * The shape should be filled
             */
            get fill(): boolean;
            set fill(val: boolean);
            /**
             * The path's fill color
             */
            get fill_color(): Gdk.RGBA;
            set fill_color(val: Gdk.RGBA);
            /**
             * The path's fill color
             */
            get fillColor(): Gdk.RGBA;
            set fillColor(val: Gdk.RGBA);
            /**
             * The path's outline color
             */
            get outline_color(): Gdk.RGBA;
            set outline_color(val: Gdk.RGBA);
            /**
             * The path's outline color
             */
            get outlineColor(): Gdk.RGBA;
            set outlineColor(val: Gdk.RGBA);
            /**
             * The path's outline width (in pixels)
             */
            get outline_width(): number;
            set outline_width(val: number);
            /**
             * The path's outline width (in pixels)
             */
            get outlineWidth(): number;
            set outlineWidth(val: number);
            /**
             * The shape should be stroked
             */
            get stroke(): boolean;
            set stroke(val: boolean);
            /**
             * The path's stroke color
             */
            get stroke_color(): Gdk.RGBA;
            set stroke_color(val: Gdk.RGBA);
            /**
             * The path's stroke color
             */
            get strokeColor(): Gdk.RGBA;
            set strokeColor(val: Gdk.RGBA);
            /**
             * The path's stroke width (in pixels)
             */
            get stroke_width(): number;
            set stroke_width(val: number);
            /**
             * The path's stroke width (in pixels)
             */
            get strokeWidth(): number;
            set strokeWidth(val: number);

            // Constructors

            constructor(properties?: Partial<PathLayer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](viewport: Viewport): PathLayer;

            // Methods

            /**
             * Adds a [iface`Location]` object to the layer.
             * The node is prepended to the list.
             * @param location a [iface@Location]
             */
            add_node(location: Location): void;
            /**
             * Gets information whether the path is closed.
             * @returns %TRUE when the path is closed, %FALSE otherwise
             */
            get_closed(): boolean;
            /**
             * Returns the list of dash segment lengths.
             * @returns the list
             */
            get_dash(): number[];
            /**
             * Checks whether the path is filled.
             * @returns %TRUE if the path is filled, %FALSE otherwise.
             */
            get_fill(): boolean;
            /**
             * Gets the path's fill color.
             * @returns the path's fill color.
             */
            get_fill_color(): Gdk.RGBA;
            /**
             * Gets a copy of the list of all [iface`Location]` objects inserted into the layer. You should
             * free the list but not its contents.
             * @returns the list
             */
            get_nodes(): Location[];
            /**
             * Gets the path's outline color.
             * @returns the path's outline color.
             */
            get_outline_color(): Gdk.RGBA;
            /**
             * Gets the width of the outline.
             * @returns the width of the outline
             */
            get_outline_width(): number;
            /**
             * Checks whether the path is stroked.
             * @returns %TRUE if the path is stroked, %FALSE otherwise.
             */
            get_stroke(): boolean;
            /**
             * Gets the path's stroke color.
             * @returns the path's stroke color.
             */
            get_stroke_color(): Gdk.RGBA;
            /**
             * Gets the width of the stroke.
             * @returns the width of the stroke
             */
            get_stroke_width(): number;
            /**
             * Inserts a [iface`Location]` object to the specified position.
             * @param location a [iface@Location]
             * @param position position in the list where the [iface@Location] object should be inserted
             */
            insert_node(location: Location, position: number): void;
            /**
             * Removes all [iface`Location]` objects from the layer.
             */
            remove_all(): void;
            /**
             * Removes the [iface`Location]` object from the layer.
             * @param location a [iface@Location]
             */
            remove_node(location: Location): void;
            /**
             * Makes the path closed.
             * @param value %TRUE to make the path closed
             */
            set_closed(value: boolean): void;
            /**
             * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
             * method supports only integer values for segment lengths. The values have to be
             * passed inside the data pointer of the list (using the %GUINT_TO_POINTER conversion)
             *
             * Pass %NULL to use solid line.
             * @param dash_pattern list of integer values representing lengths     of dashes/spaces (see cairo documentation of cairo_set_dash())
             */
            set_dash(dash_pattern: number[]): void;
            /**
             * Sets the path to be filled
             * @param value if the path is filled
             */
            set_fill(value: boolean): void;
            /**
             * Set the path's fill color.
             * @param color The path's fill color or %NULL to reset to the         default color. The color parameter is copied.
             */
            set_fill_color(color?: Gdk.RGBA | null): void;
            /**
             * Set the path's outline color.
             * @param color The path's outline color or %NULL to reset to the         default color. The color parameter is copied.
             */
            set_outline_color(color?: Gdk.RGBA | null): void;
            /**
             * Sets the width of the outline
             * @param value the width of the outline (in pixels)
             */
            set_outline_width(value: number): void;
            /**
             * Sets the path to be stroked
             * @param value if the path is stroked
             */
            set_stroke(value: boolean): void;
            /**
             * Set the path's stroke color.
             * @param color The path's stroke color or %NULL to reset to the         default color. The color parameter is copied.
             */
            set_stroke_color(color?: Gdk.RGBA | null): void;
            /**
             * Sets the width of the stroke
             * @param value the width of the stroke (in pixels)
             */
            set_stroke_width(value: number): void;

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

        module Point {
            // Constructor properties interface

            interface ConstructorProps
                extends Marker.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    Location.ConstructorProps {}
        }

        /**
         * A simple variant of [class`Marker]` showing the location of the point as a
         * circle on the map.
         */
        class Point extends Marker implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Location {
            static $gtype: GObject.GType<Point>;

            // Constructors

            constructor(properties?: Partial<Point.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Point;

            // Inherited properties
            /**
             * The latitude coordonate in degrees
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate in degrees
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Calculates the distance in meters between two locations.
             *
             * This function uses the great-circle distance formula, which assumes
             * Earth is a perfect sphere. This limits the accuracy of the result,
             * but is good enough for most purposes.
             * @param other a [iface@Location]
             * @returns the distance in meters between @self and @other
             */
            distance(other: Location): number;
            /**
             * Gets the latitude coordinate in degrees.
             * @returns the latitude coordinate in degrees.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             * @returns the longitude coordinate in degrees.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate in degrees.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module RasterRenderer {
            // Constructor properties interface

            interface ConstructorProps extends MapSource.ConstructorProps {
                data_source: DataSource;
                dataSource: DataSource;
            }
        }

        class RasterRenderer extends MapSource {
            static $gtype: GObject.GType<RasterRenderer>;

            // Properties

            /**
             * The data source that provides image tiles to display. In most cases,
             * a [class`TileDownloader]` is sufficient.
             */
            get data_source(): DataSource;
            /**
             * The data source that provides image tiles to display. In most cases,
             * a [class`TileDownloader]` is sufficient.
             */
            get dataSource(): DataSource;

            // Constructors

            constructor(properties?: Partial<RasterRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](data_source: DataSource): RasterRenderer;

            static new_from_url(url_template: string): RasterRenderer;

            static new_full(
                id: string,
                name: string,
                license: string,
                license_uri: string,
                min_zoom: number,
                max_zoom: number,
                tile_size: number,
                projection: MapProjection,
                data_source: DataSource,
            ): RasterRenderer;

            static new_full_from_url(
                id: string,
                name: string,
                license: string,
                license_uri: string,
                min_zoom: number,
                max_zoom: number,
                tile_size: number,
                projection: MapProjection,
                url_template: string,
            ): RasterRenderer;
        }

        module Scale {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                max_width: number;
                maxWidth: number;
                unit: Unit;
                viewport: Viewport;
            }
        }

        /**
         * A widget displaying a scale.
         *
         * # CSS nodes
         *
         * ```
         * map-scale
         * ├── label[.metric][.imperial]
         * ```
         *
         * `ShumateScale` uses a single CSS node with name map-scale, it has up to two
         * childs different labels.
         */
        class Scale extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<Scale>;

            // Properties

            /**
             * The size of the map scale on screen in pixels.
             */
            get max_width(): number;
            set max_width(val: number);
            /**
             * The size of the map scale on screen in pixels.
             */
            get maxWidth(): number;
            set maxWidth(val: number);
            /**
             * The scale's units.
             */
            get unit(): Unit;
            set unit(val: Unit);
            /**
             * The viewport to use.
             */
            get viewport(): Viewport;
            set viewport(val: Viewport);

            // Constructors

            constructor(properties?: Partial<Scale.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](viewport?: Viewport | null): Scale;

            // Methods

            /**
             * Gets the maximum scale width.
             * @returns The maximum scale width in pixels.
             */
            get_max_width(): number;
            /**
             * Gets the unit used by the scale.
             * @returns The unit used by the scale
             */
            get_unit(): Unit;
            /**
             * Gets the viewport used by the scale.
             * @returns The #ShumateViewport used by the scale
             */
            get_viewport(): Viewport | null;
            /**
             * Sets the maximum width of the scale on the screen in pixels
             * @param value the number of pixels
             */
            set_max_width(value: number): void;
            /**
             * Sets the scale unit.
             * @param unit a #ShumateUnit
             */
            set_unit(unit: Unit): void;
            /**
             * Sets the scale viewport.
             * @param viewport a #ShumateViewport
             */
            set_viewport(viewport?: Viewport | null): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module SimpleMap {
            // Signal callback interfaces

            interface SymbolClicked {
                (event: SymbolEvent): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                compass: Compass;
                license: License;
                map: Map | any;
                map_source: MapSource;
                mapSource: MapSource;
                scale: Scale;
                show_zoom_buttons: boolean;
                showZoomButtons: boolean;
                viewport: Viewport;
            }
        }

        /**
         * A ready-to-use map [class`Gtk`.Widget].If you want to use your own implementation,
         * you can look at the [class`Shumate`.Map] widget.
         *
         * The simple map contains a zoom widget, a [class`Shumate`.License] at the bottom,
         * a [class`Shumate`.Scale] and a [class`Shumate`.Compass].
         */
        class SimpleMap extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<SimpleMap>;

            // Properties

            get compass(): Compass;
            get license(): License;
            // This accessor conflicts with a property or field in a parent class or interface.
            map: Map | any;
            get map_source(): MapSource;
            set map_source(val: MapSource);
            get mapSource(): MapSource;
            set mapSource(val: MapSource);
            get scale(): Scale;
            get show_zoom_buttons(): boolean;
            set show_zoom_buttons(val: boolean);
            get showZoomButtons(): boolean;
            set showZoomButtons(val: boolean);
            get viewport(): Viewport;

            // Constructors

            constructor(properties?: Partial<SimpleMap.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SimpleMap;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'symbol-clicked', callback: (_source: this, event: SymbolEvent) => void): number;
            connect_after(signal: 'symbol-clicked', callback: (_source: this, event: SymbolEvent) => void): number;
            emit(signal: 'symbol-clicked', event: SymbolEvent): void;

            // Methods

            /**
             * Adds a map layer as an overlay on top of the base map.
             * @param layer a [class@Layer] to add
             */
            add_overlay_layer(layer: Layer): void;
            /**
             * Gets the compass widget for the map.
             * @returns a [class@Compass]
             */
            get_compass(): Compass;
            /**
             * Gets the license widget for the map.
             * @returns a [class@License]
             */
            get_license(): License;
            /**
             * Gets the [class`SimpleMap]`'s underlying [class`Map]`.
             * @returns a [class@Map]
             */
            get_map(): Map;
            /**
             * Gets the map source for the current base layer.
             * @returns a [class@MapSource]
             */
            get_map_source(): MapSource;
            /**
             * Gets the scale widget for the map.
             * @returns a [class@Scale]
             */
            get_scale(): Scale;
            /**
             * Gets whether or not the zoom buttons are shown.
             * @returns %TRUE if the zoom buttons are visible, otherwise %FALSE
             */
            get_show_zoom_buttons(): boolean;
            /**
             * Gets the map's viewport, needed for constructing map layers that will be added
             * to it.
             * @returns a [class@Viewport]
             */
            get_viewport(): Viewport;
            insert_overlay_layer(layer: Layer, idx: number): void;
            /**
             * Removes a layer from the map.
             * @param layer a [class@Layer] that was added to the map previously
             */
            remove_overlay_layer(layer: Layer): void;
            /**
             * Sets the source for the base map.
             * @param map_source a [class@MapSource]
             */
            set_map_source(map_source?: MapSource | null): void;
            /**
             * Sets whether or not the zoom buttons are shown.
             * @param show_zoom_buttons %TRUE to show the zoom buttons, %FALSE to hide them
             */
            set_show_zoom_buttons(show_zoom_buttons: boolean): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module SymbolEvent {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Location.ConstructorProps {
                feature_id: string;
                featureId: string;
                layer: string;
                source_layer: string;
                sourceLayer: string;
            }
        }

        /**
         * An object containing the details of a map feature that has been clicked.
         * It is the argument of the [signal`MapLayer:`:symbol-clicked] and
         * [signal`SimpleMap:`:symbol-clicked] signals.
         *
         * When vector maps are rendered, they may contain labels and icons. When one
         * of these symbols is clicked, these signals are emitted to give the
         * application access to the original location and details of the map feature.
         *
         * [class`SymbolEvent]` implements [iface`Location]` so you can get the latitude
         * and longitude of the feature that was clicked.
         */
        class SymbolEvent extends GObject.Object implements Location {
            static $gtype: GObject.GType<SymbolEvent>;

            // Properties

            /**
             * The ID of the feature that this event pertains to, as it was given in the
             * data source.
             */
            get feature_id(): string;
            /**
             * The ID of the feature that this event pertains to, as it was given in the
             * data source.
             */
            get featureId(): string;
            /**
             * The ID of the style layer of the symbol that this event pertains to.
             */
            get layer(): string;
            /**
             * The ID of the source layer of the symbol that this event pertains to.
             */
            get source_layer(): string;
            /**
             * The ID of the source layer of the symbol that this event pertains to.
             */
            get sourceLayer(): string;

            // Constructors

            constructor(properties?: Partial<SymbolEvent.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the feature ID as specified in the data source. The meaning of the
             * ID, if any, is up to the source.
             *
             * Feature IDs in Mapbox Vector Tile format are integers, but they are
             * formatted as a string here for futureproofing.
             * @returns the feature ID
             */
            get_feature_id(): string;
            /**
             * Gets a list of the keys of the source feature's tags.
             * @returns a list of the tag keys
             */
            get_keys(): string[];
            /**
             * Gets the name of the layer the clicked symbol is in, as named in the vector
             * stylesheet.
             *
             * Note that this is distinct from the name of the layer in the vector tile
             * schema. Some styles have multiple symbol layers derived from the same
             * data source layer.
             * @returns the layer name
             */
            get_layer(): string;
            /**
             * Gets the name of the source layer the clicked feature is in,
             * as named in the vector tile schema.
             * @returns the layer name
             */
            get_source_layer(): string;
            /**
             * Gets a tag from the source feature.
             *
             * The available tags depend on the vector tile schema and the source layer.
             * Check the documentation for the tiles you're using to see what information
             * is available.
             * @param tag_name the tag to get
             * @returns the tag value, formatted as a string
             */
            get_tag(tag_name: string): string;

            // Inherited properties
            /**
             * The latitude coordonate in degrees
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate in degrees
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Calculates the distance in meters between two locations.
             *
             * This function uses the great-circle distance formula, which assumes
             * Earth is a perfect sphere. This limits the accuracy of the result,
             * but is good enough for most purposes.
             * @param other a [iface@Location]
             * @returns the distance in meters between @self and @other
             */
            distance(other: Location): number;
            /**
             * Gets the latitude coordinate in degrees.
             * @returns the latitude coordinate in degrees.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             * @returns the longitude coordinate in degrees.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate in degrees.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module Tile {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                fade_in: boolean;
                fadeIn: boolean;
                paintable: Gdk.Paintable;
                scale_factor: number;
                scaleFactor: number;
                size: number;
                state: State;
                x: number;
                y: number;
                zoom_level: number;
                zoomLevel: number;
            }
        }

        /**
         * An object that represents map tiles. Tiles are loaded by a [class`MapSource]`.
         */
        class Tile extends GObject.Object {
            static $gtype: GObject.GType<Tile>;

            // Properties

            /**
             * Specifies whether the tile should fade in when loading
             */
            get fade_in(): boolean;
            set fade_in(val: boolean);
            /**
             * Specifies whether the tile should fade in when loading
             */
            get fadeIn(): boolean;
            set fadeIn(val: boolean);
            /**
             * The [iface`Gdk`.Paintable] backing the tile
             */
            get paintable(): Gdk.Paintable;
            set paintable(val: Gdk.Paintable);
            /**
             * The scale factor of the widget the tile will be displayed in.
             */
            get scale_factor(): number;
            set scale_factor(val: number);
            /**
             * The scale factor of the widget the tile will be displayed in.
             */
            get scaleFactor(): number;
            set scaleFactor(val: number);
            /**
             * The size of the tile in pixels
             */
            get size(): number;
            set size(val: number);
            /**
             * The state of the tile
             */
            get state(): State;
            set state(val: State);
            /**
             * The x position of the tile
             */
            get x(): number;
            set x(val: number);
            /**
             * The y position of the tile
             */
            get y(): number;
            set y(val: number);
            /**
             * The zoom level of the tile
             */
            get zoom_level(): number;
            set zoom_level(val: number);
            /**
             * The zoom level of the tile
             */
            get zoomLevel(): number;
            set zoomLevel(val: number);

            // Constructors

            constructor(properties?: Partial<Tile.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Tile;

            static new_full(x: number, y: number, size: number, zoom_level: number): Tile;

            // Methods

            /**
             * Checks whether the tile should fade in.
             * @returns the return value determines whether the tile should fade in when loading.
             */
            get_fade_in(): boolean;
            /**
             * Get the [iface`Gdk`.Paintable] representing this tile.
             * @returns A [iface@Gdk.Paintable]
             */
            get_paintable(): Gdk.Paintable | null;
            /**
             * Gets the scale factor of the tile.
             * @returns the scale factor
             */
            get_scale_factor(): number;
            /**
             * Gets the tile's size.
             * @returns the tile's size in pixels
             */
            get_size(): number;
            /**
             * Gets the current state of tile loading.
             * @returns the tile's #ShumateState
             */
            get_state(): State;
            /**
             * Gets the tile's x position.
             * @returns the tile's x position
             */
            get_x(): number;
            /**
             * Gets the tile's y position.
             * @returns the tile's y position
             */
            get_y(): number;
            /**
             * Gets the tile's zoom level.
             * @returns the tile's zoom level
             */
            get_zoom_level(): number;
            /**
             * Sets the flag determining whether the tile should fade in when loading
             * @param fade_in determines whether the tile should fade in when loading
             */
            set_fade_in(fade_in: boolean): void;
            /**
             * Sets the [iface`Gdk`.Paintable] representing this tile.
             * @param paintable a [iface@Gdk.Paintable]
             */
            set_paintable(paintable: Gdk.Paintable): void;
            /**
             * Sets the scale factor of the tile.
             * @param scale_factor the scale factor
             */
            set_scale_factor(scale_factor: number): void;
            /**
             * Sets the tile's size
             * @param size the size in pixels
             */
            set_size(size: number): void;
            /**
             * Sets the tile's #ShumateState
             * @param state a #ShumateState
             */
            set_state(state: State): void;
            /**
             * Sets the tile's x position
             * @param x the position
             */
            set_x(x: number): void;
            /**
             * Sets the tile's y position
             * @param y the position
             */
            set_y(y: number): void;
            /**
             * Sets the tile's zoom level
             * @param zoom_level the zoom level
             */
            set_zoom_level(zoom_level: number): void;
        }

        module TileDownloader {
            // Constructor properties interface

            interface ConstructorProps extends DataSource.ConstructorProps {
                url_template: string;
                urlTemplate: string;
            }
        }

        /**
         * A [class`DataSource]` that asynchronously downloads tiles from an online
         * service using a given template.
         *
         * It contains an internal [class`FileCache]` to cache the tiles on the system.
         */
        class TileDownloader extends DataSource {
            static $gtype: GObject.GType<TileDownloader>;

            // Properties

            /**
             * A template for construting the URL to download a tile from.
             *
             * The template has the following replacements:
             * - "{x}": The X coordinate of the tile
             * - "{y}": The Y coordinate of the tile
             * - "{z}": The zoom level of the tile
             * - "{tmsy}": The inverted Y coordinate (i.e. tile numbering starts with 0 at
             * the bottom, rather than top, of the map)
             */
            get url_template(): string;
            /**
             * A template for construting the URL to download a tile from.
             *
             * The template has the following replacements:
             * - "{x}": The X coordinate of the tile
             * - "{y}": The Y coordinate of the tile
             * - "{z}": The zoom level of the tile
             * - "{tmsy}": The inverted Y coordinate (i.e. tile numbering starts with 0 at
             * the bottom, rather than top, of the map)
             */
            get urlTemplate(): string;

            // Constructors

            constructor(properties?: Partial<TileDownloader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](url_template: string): TileDownloader;
        }

        module VectorReader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Provides low-level access to the contents of a vector tile.
         *
         * To create a new [class`VectorReader]`, use [ctor`VectorReader`.new] and pass
         * the bytes of a vector tile, which you might get from a [class`DataSource]`.
         * Then, use [method`VectorReader`.iterate] to get a [class`VectorReaderIter]`
         * and iterate over the features in the tile. You can create multiple
         * [class`VectorReaderIter]`s from the same [class`VectorReader]`.
         */
        class VectorReader extends GObject.Object {
            static $gtype: GObject.GType<VectorReader>;

            // Constructors

            constructor(properties?: Partial<VectorReader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](bytes: GLib.Bytes | Uint8Array): VectorReader;

            // Methods

            /**
             * Creates a new [class`VectorReaderIter]` for `self`.
             * @returns A new [class@VectorReaderIter]
             */
            iterate(): VectorReaderIter;
        }

        module VectorReaderIter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                reader: VectorReader;
            }
        }

        /**
         * Reads the layers and features of a vector tile.
         *
         * To create a new [class`VectorReaderIter]`, use [method`VectorReader`.iterate].
         *
         * A vector tile consists of named layers, which contain features. Each feature
         * has an ID, a geometry, and a set of key/value tags. The meanings of
         * the IDs and tags depends on the data source that the tile came from. The
         * [OpenMapTiles schema](https://openmaptiles.org/schema/) is a common schema
         * for vector tiles.
         *
         * To read all layers in a tile, use [method`VectorReaderIter`.get_layer_count] and
         * [method`VectorReaderIter`.read_layer]. If you know the name of the layer you
         * want, you can also use [method`VectorReaderIter`.read_layer_by_name].
         * Once the iterator is reading a layer, you can call
         * [method`VectorReaderIter`.next_feature] in a loop to read all the features in
         * the layer.
         *
         * A [class`VectorReaderIter]` is not thread-safe, but iterators created
         * from the same [class`VectorReader]` can be used in different threads.
         *
         * See [the Mapbox Vector Tile specification](https://github.com/mapbox/vector-tile-spec/tree/master/2.1)
         * for more information about the vector tile format.
         */
        class VectorReaderIter extends GObject.Object {
            static $gtype: GObject.GType<VectorReaderIter>;

            // Properties

            get reader(): VectorReader;

            // Constructors

            constructor(properties?: Partial<VectorReaderIter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Determines whether the current feature contains the given point.
             *
             * The point must be specified in tile space. See
             * [method`VectorReaderIter`.get_layer_extent] to get the range of the
             * coordinates.
             *
             * Only polygon or multipolygon features can contain a point. For all
             * other feature types, this function returns %FALSE.
             *
             * If the point is on the border of the polygon, this function may return
             * either %TRUE or %FALSE.
             * @param x
             * @param y
             * @returns %TRUE if the feature contains the point, %FALSE otherwise.
             */
            feature_contains_point(x: number, y: number): boolean;
            /**
             * Gets the geometry type of the current feature.
             * @returns The geometry type of the current feature.
             */
            get_feature_geometry_type(): GeometryType;
            /**
             * Gets the ID of the current feature.
             * @returns The ID of the current feature.
             */
            get_feature_id(): number;
            /**
             * Gets the keys of the tags of the current feature.
             * @returns The keys of the tags of the current feature.
             */
            get_feature_keys(): string[];
            /**
             * Gets the coordinates of the current feature in tile space, if the
             * feature is a single point.
             *
             * See [method`VectorReaderIter`.get_layer_extent] to get the range
             * of the coordinates.
             *
             * It is an error to call this function if the feature is not a single point.
             * Use [method`VectorReaderIter`.get_feature_geometry_type] to check
             * the feature's geometry type.
             * @returns %TRUE if the feature is a point, %FALSE otherwise.
             */
            get_feature_point(): [boolean, number, number];
            /**
             * Gets the value of the tag with the given key.
             * @param key The key of the tag to get.
             * @returns %TRUE if the tag was found, %FALSE otherwise.
             */
            get_feature_tag(key: string): [boolean, unknown];
            /**
             * Gets the number of layers in the vector tile.
             * @returns The number of layers.
             */
            get_layer_count(): number;
            /**
             * Gets the extent for coordinates in the current layer.
             *
             * 0 represents the top and left edges of the tile, and this value
             * represents the bottom and right edges. Feature geometries may extend
             * outside of this range, since tiles often include some margin.
             *
             * Tiles do not contain metadata about the location of the tile within
             * the world, so it is up to the caller to know the tile's coordinates
             * and convert latitude/longitude to tile-space coordinates.
             * @returns The layer's extent
             */
            get_layer_extent(): number;
            /**
             * Gets the number of features in the current layer.
             *
             * You can loop over all features in the current layer by calling
             * [method`VectorReaderIter`.read_feature] with each index from 0 to
             * the feature count, but it might be easier to use
             * [method`VectorReaderIter`.next_feature] instead.
             * @returns The number of features in the current layer.
             */
            get_layer_feature_count(): number;
            /**
             * Gets the name of the current layer.
             * @returns The name of the current layer.
             */
            get_layer_name(): string;
            /**
             * Gets the reader that the iterator is iterating over.
             * @returns The reader that the iterator is iterating over.
             */
            get_reader(): VectorReader;
            /**
             * Advances the iterator to the next feature in the current layer.
             * @returns %TRUE if there is a next feature, %FALSE otherwise.
             */
            next_feature(): boolean;
            /**
             * Moves the iterator to the feature at the given index in the current layer.
             *
             * You can get the number of features in the current layer with
             * [method`VectorReaderIter`.get_layer_feature_count].
             * @param index The index of the feature to read.
             */
            read_feature(index: number): void;
            /**
             * Sets the current layer of the reader to the layer at the given index.
             * @param index The index of the layer to read.
             */
            read_layer(index: number): void;
            /**
             * Moves the iterator to the layer with the given name, if present.
             *
             * If the layer is not found, the current layer will be set to %NULL and the
             * function will return %FALSE. Layers are typically omitted if they are empty,
             * so don't assume that a layer in the schema will always be present.
             *
             * The iterator's current feature will be %NULL after calling this function;
             * use [method`VectorReaderIter`.next_feature] to advance to the first feature
             * in the layer.
             * @param name
             * @returns %TRUE if the layer was found, %FALSE otherwise.
             */
            read_layer_by_name(name: string): boolean;
        }

        module VectorRenderer {
            // Constructor properties interface

            interface ConstructorProps extends MapSource.ConstructorProps, Gio.Initable.ConstructorProps {
                sprite_sheet: VectorSpriteSheet;
                spriteSheet: VectorSpriteSheet;
                style_json: string;
                styleJson: string;
            }
        }

        /**
         * A [class`MapSource]` that renders tiles from a given vector data source.
         */
        class VectorRenderer extends MapSource implements Gio.Initable {
            static $gtype: GObject.GType<VectorRenderer>;

            // Properties

            /**
             * The sprite sheet used to render icons and textures.
             */
            get sprite_sheet(): VectorSpriteSheet;
            set sprite_sheet(val: VectorSpriteSheet);
            /**
             * The sprite sheet used to render icons and textures.
             */
            get spriteSheet(): VectorSpriteSheet;
            set spriteSheet(val: VectorSpriteSheet);
            /**
             * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
             * format.
             *
             * Note that not all features of the specification are supported.
             */
            get style_json(): string;
            /**
             * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
             * format.
             *
             * Note that not all features of the specification are supported.
             */
            get styleJson(): string;

            // Constructors

            constructor(properties?: Partial<VectorRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, style_json: string): VectorRenderer;

            // Static methods

            /**
             * Checks whether libshumate was compiled with vector tile support. If it was
             * not, vector renderers cannot be created or used.
             */
            static is_supported(): boolean;

            // Methods

            /**
             * Gets the sprite sheet used to render icons and textures.
             * @returns the [class@VectorSpriteSheet]
             */
            get_sprite_sheet(): VectorSpriteSheet;
            /**
             * Adds a data source to the renderer.
             *
             * Currently, [class`VectorRenderer]` only supports one data source
             * and throws an error if the style does not contain exactly one
             * data source. However, support for multiple sources may be added
             * in the future, so this method accepts a name parameter. If the
             * name does not match the one expected by the style, this method
             * will have no effect.
             * @param name the name of the data source
             * @param data_source a [class@DataSource]
             */
            set_data_source(name: string, data_source: DataSource): void;
            /**
             * Sets the sprite sheet used to render icons and textures.
             * @param sprites a [class@VectorSpriteSheet]
             */
            set_sprite_sheet(sprites: VectorSpriteSheet): void;
            /**
             * Sets the sprite sheet used by the style JSON to render icons and textures.
             *
             * The existing [property`VectorRenderer:`sprite-sheet] property will be replaced
             * with a new instance of [class`VectorSpriteSheet]`.
             * @param sprites_pixbuf a [class@GdkPixbuf.Pixbuf]
             * @param sprites_json a JSON string
             * @returns whether the sprite sheet was loaded successfully
             */
            set_sprite_sheet_data(sprites_pixbuf: GdkPixbuf.Pixbuf, sprites_json: string): boolean;

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

        module VectorSprite {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gdk.Paintable.ConstructorProps,
                    Gtk.SymbolicPaintable.ConstructorProps {
                height: number;
                scale_factor: number;
                scaleFactor: number;
                source_paintable: Gdk.Paintable;
                sourcePaintable: Gdk.Paintable;
                source_rect: Gdk.Rectangle;
                sourceRect: Gdk.Rectangle;
                width: number;
            }
        }

        /**
         * A sprite used to draw textures or icons.
         *
         * ## Symbolic icons
         *
         * If a sprite is created from a [iface`Gtk`.SymbolicPaintable] source, such
         * as a symbolic icon, then when the sprite is part of a symbol layer it
         * will be drawn using the icon-color property (or the text color, if the
         * sprite is part of a formatted string).
         */
        class VectorSprite extends GObject.Object implements Gdk.Paintable, Gtk.SymbolicPaintable {
            static $gtype: GObject.GType<VectorSprite>;

            // Properties

            /**
             * The height at which the sprite should be drawn, in pixels.
             */
            get height(): number;
            /**
             * The intended scale factor of the sprite.
             */
            get scale_factor(): number;
            /**
             * The intended scale factor of the sprite.
             */
            get scaleFactor(): number;
            /**
             * The [iface`Gdk`.Paintable] used to draw the sprite.
             */
            get source_paintable(): Gdk.Paintable;
            /**
             * The [iface`Gdk`.Paintable] used to draw the sprite.
             */
            get sourcePaintable(): Gdk.Paintable;
            /**
             * The area of the source rectangle to draw, or %NULL to use the entire paintable.
             */
            get source_rect(): Gdk.Rectangle;
            /**
             * The area of the source rectangle to draw, or %NULL to use the entire paintable.
             */
            get sourceRect(): Gdk.Rectangle;
            /**
             * The width at which the sprite should be drawn, in pixels.
             */
            get width(): number;

            // Constructors

            constructor(properties?: Partial<VectorSprite.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](source_paintable: Gdk.Paintable): VectorSprite;

            static new_full(
                source_paintable: Gdk.Paintable,
                width: number,
                height: number,
                scale_factor: number,
                source_rect?: Gdk.Rectangle | null,
            ): VectorSprite;

            // Methods

            /**
             * Gets the height at which the sprite should be drawn.
             * @returns the sprite's height in pixels
             */
            get_height(): number;
            /**
             * Gets the intended scale factor of the sprite.
             * @returns the sprite's scale factor
             */
            get_scale_factor(): number;
            /**
             * Gets the source [iface`Gdk`.Paintable] used to draw the sprite.
             *
             * Note that [class`VectorSprite]` also implements [iface`Gdk`.Paintable].
             * In most cases, you should draw the sprite rather than the original paintable.
             * @returns the source paintable
             */
            get_source_paintable(): Gdk.Paintable;
            /**
             * Gets the source rectangle of the sprite.
             * @returns the sprite's source rectangle, or %NULL if the entire paintable is used
             */
            get_source_rect(): Gdk.Rectangle | null;
            /**
             * Gets the width at which the sprite should be drawn.
             * @returns the sprite's width in pixels
             */
            get_width(): number;

            // Inherited methods
            /**
             * Compute a concrete size for the `GdkPaintable`.
             *
             * Applies the sizing algorithm outlined in the
             * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
             * to the given `paintable`. See that link for more details.
             *
             * It is not necessary to call this function when both `specified_width`
             * and `specified_height` are known, but it is useful to call this
             * function in GtkWidget:measure implementations to compute the
             * other dimension when only one dimension is given.
             * @param specified_width the width @paintable could be drawn into or   0.0 if unknown
             * @param specified_height the height @paintable could be drawn into or   0.0 if unknown
             * @param default_width the width @paintable would be drawn into if   no other constraints were given
             * @param default_height the height @paintable would be drawn into if   no other constraints were given
             */
            compute_concrete_size(
                specified_width: number,
                specified_height: number,
                default_width: number,
                default_height: number,
            ): [number, number];
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             * @returns An immutable paintable for the current   contents of @paintable
             */
            get_current_image(): Gdk.Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             * @returns The `GdkPaintableFlags` for this paintable
             */
            get_flags(): Gdk.PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             * @returns the intrinsic aspect ratio of @paintable or 0 if none.
             */
            get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic height of @paintable or 0 if none.
             */
            get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic width of @paintable or 0 if none.
             */
            get_intrinsic_width(): number;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their contents.
             *
             * Unless the contents are invalidated, implementations must guarantee that
             * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
             * it must not call this function.
             */
            invalidate_contents(): void;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their size.
             *
             * As long as the size is not invalidated, `paintable` must return the same
             * values for its intrinsic width, height and aspect ratio.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
             * it must not call this function.
             */
            invalidate_size(): void;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             */
            vfunc_get_current_image(): Gdk.Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             */
            vfunc_get_flags(): Gdk.PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             */
            vfunc_get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_width(): number;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
            /**
             * Snapshots the paintable with the given colors.
             *
             * If less than 4 colors are provided, GTK will pad the array with default
             * colors.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             * @param colors a pointer to an array of colors
             */
            snapshot_symbolic(snapshot: Gdk.Snapshot, width: number, height: number, colors: Gdk.RGBA[]): void;
            /**
             * Snapshots the paintable with the given colors.
             *
             * If less than 4 colors are provided, GTK will pad the array with default
             * colors.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             * @param colors a pointer to an array of colors
             */
            vfunc_snapshot_symbolic(snapshot: Gdk.Snapshot, width: number, height: number, colors: Gdk.RGBA[]): void;
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

        module VectorSpriteSheet {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A collection of [class`VectorSprite]`s.
         *
         * Sprites are used as icons in symbols or as the pattern for a fill layer.
         *
         * Most MapLibre stylesheets provide their spritesheet as a PNG image and a JSON
         * description of the sprites. This spritesheet can be added using
         * [method`VectorSpriteSheet`.add_page]. Sprites can also be added individually
         * using [method`VectorSpriteSheet`.add_sprite].
         *
         * Some map styles rely on application code to provide some or all of their
         * sprites. This is supported using a fallback function, which can be set using
         * [method`VectorSpriteSheet`.set_fallback]. This function can generate sprites
         * on demand. For example, it could load a symbolic icon from the [class`Gtk`.IconTheme]
         * or render a custom highway shield.
         *
         * ## HiDPI support
         *
         * Map styles should provide a double resolution spritesheet for high DPI
         * displays. That spritesheet can be added as a separate page.
         * The [class`VectorSpriteSheet]` will pick the best sprites for the display's
         * scale factor.
         *
         * If a fallback function is set, it receives the requested scale factor
         * as an argument. It should use this to generate the sprite at the correct size.
         * For example, if the scale factor is 2, the image should be twice as large
         * (but the *sprite's* width and height should be the same).
         *
         * ## Thread Safety
         *
         * [class`VectorSpriteSheet]` is thread safe.
         */
        class VectorSpriteSheet extends GObject.Object {
            static $gtype: GObject.GType<VectorSpriteSheet>;

            // Constructors

            constructor(properties?: Partial<VectorSpriteSheet.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VectorSpriteSheet;

            // Methods

            /**
             * Adds a page to the spritesheet.
             *
             * See <https://maplibre.org/maplibre-gl-js-docs/style-spec/sprite/> for
             * details about the spritesheet format. Most stylesheets provide these files
             * along with the main style JSON.
             *
             * Map styles should provide a double resolution spritesheet for high DPI
             * displays. That spritesheet should be added as its own page, with a
             * `default_scale` of 2.
             * @param texture a [class@Gdk.Texture]
             * @param json a JSON string
             * @param default_scale the default scale factor of the page
             * @returns %TRUE if the page was added successfully, %FALSE otherwise
             */
            add_page(texture: Gdk.Texture, json: string, default_scale: number): boolean;
            /**
             * Adds a sprite to the spritesheet.
             * @param name the name of the sprite
             * @param sprite a [class@VectorSprite]
             */
            add_sprite(name: string, sprite: VectorSprite): void;
            /**
             * Gets a sprite from the spritesheet.
             *
             * The returned sprite might not be at the requested scale factor if an exact
             * match is not found.
             * @param name an icon name
             * @param scale the scale factor of the icon
             * @returns a [class@VectorSprite], or %NULL if the icon does not exist.
             */
            get_sprite(name: string, scale: number): VectorSprite | null;
            /**
             * Sets a fallback function to generate sprites.
             *
             * The fallback function is called when a texture is not found in the sprite
             * sheet. It receives the icon name and scale factor, and should return a
             * [class`VectorSprite]`, or %NULL if the icon could not be generated.
             * It may be called in a different thread, and it may be called multiple times
             * for the same icon name.
             *
             * If a previous fallback function was set, it will be replaced and any sprites
             * it generated will be cleared.
             *
             * `fallback` may be %NULL to clear the fallback function.
             * @param fallback a [callback@ShumateVectorSpriteFallbackFunc] or %NULL
             */
            set_fallback(fallback?: VectorSpriteFallbackFunc | null): void;
        }

        module Viewport {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Location.ConstructorProps {
                max_zoom_level: number;
                maxZoomLevel: number;
                min_zoom_level: number;
                minZoomLevel: number;
                reference_map_source: MapSource;
                referenceMapSource: MapSource;
                rotation: number;
                zoom_level: number;
                zoomLevel: number;
            }
        }

        /**
         * The object holding the coordinate, zoom-level, and rotation state of the current view.
         *
         * As the object implements [iface`Shumate`.Location], the latitude and longitude are
         * accessible via the interface methods.
         */
        class Viewport extends GObject.Object implements Location {
            static $gtype: GObject.GType<Viewport>;

            // Properties

            /**
             * The highest allowed level of zoom of the content.
             */
            get max_zoom_level(): number;
            set max_zoom_level(val: number);
            /**
             * The highest allowed level of zoom of the content.
             */
            get maxZoomLevel(): number;
            set maxZoomLevel(val: number);
            /**
             * The lowest allowed level of zoom of the content.
             */
            get min_zoom_level(): number;
            set min_zoom_level(val: number);
            /**
             * The lowest allowed level of zoom of the content.
             */
            get minZoomLevel(): number;
            set minZoomLevel(val: number);
            /**
             * The reference #ShumateMapSource being displayed
             */
            get reference_map_source(): MapSource;
            set reference_map_source(val: MapSource);
            /**
             * The reference #ShumateMapSource being displayed
             */
            get referenceMapSource(): MapSource;
            set referenceMapSource(val: MapSource);
            /**
             * The rotation of the map view, in radians clockwise from up being due north
             */
            get rotation(): number;
            set rotation(val: number);
            /**
             * The level of zoom of the content.
             */
            get zoom_level(): number;
            set zoom_level(val: number);
            /**
             * The level of zoom of the content.
             */
            get zoomLevel(): number;
            set zoomLevel(val: number);

            // Constructors

            constructor(properties?: Partial<Viewport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Viewport;

            // Methods

            /**
             * Get the maximal zoom level
             * @returns the maximal zoom level
             */
            get_max_zoom_level(): number;
            /**
             * Get the minimal zoom level
             * @returns the minimal zoom level
             */
            get_min_zoom_level(): number;
            /**
             * Get the reference map source
             * @returns the reference #ShumateMapSource or %NULL when none has been set.
             */
            get_reference_map_source(): MapSource | null;
            /**
             * Gets the current rotation
             * @returns the current rotation
             */
            get_rotation(): number;
            /**
             * Get the current zoom level
             * @returns the current zoom level
             */
            get_zoom_level(): number;
            /**
             * Gets the position on `widget` that correspond to the given latitude and
             * longitude.
             * @param widget a #GtkWidget that uses @self as viewport
             * @param latitude the latitude
             * @param longitude the longitude
             */
            location_to_widget_coords(widget: Gtk.Widget, latitude: number, longitude: number): [number, number];
            /**
             * Set the maximal zoom level
             * @param max_zoom_level the maximal zoom level
             */
            set_max_zoom_level(max_zoom_level: number): void;
            /**
             * Set the minimal zoom level
             * @param min_zoom_level the minimal zoom level
             */
            set_min_zoom_level(min_zoom_level: number): void;
            /**
             * Set the reference map source
             * @param map_source a #ShumateMapSource or %NULL to set none.
             */
            set_reference_map_source(map_source?: MapSource | null): void;
            /**
             * Sets the rotation
             * @param rotation the rotation
             */
            set_rotation(rotation: number): void;
            /**
             * Set the zoom level
             * @param zoom_level the zoom level
             */
            set_zoom_level(zoom_level: number): void;
            /**
             * Gets the latitude and longitude corresponding to a position on `widget`.
             * @param widget a #GtkWidget that uses @self as viewport
             * @param x the x coordinate
             * @param y the y coordinate
             */
            widget_coords_to_location(widget: Gtk.Widget, x: number, y: number): [number, number];

            // Inherited properties
            /**
             * The latitude coordonate in degrees
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate in degrees
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Calculates the distance in meters between two locations.
             *
             * This function uses the great-circle distance formula, which assumes
             * Earth is a perfect sphere. This limits the accuracy of the result,
             * but is good enough for most purposes.
             * @param other a [iface@Location]
             * @returns the distance in meters between @self and @other
             */
            distance(other: Location): number;
            /**
             * Gets the latitude coordinate in degrees.
             * @returns the latitude coordinate in degrees.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             * @returns the longitude coordinate in degrees.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate in degrees.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        type CompassClass = typeof Compass;
        type CoordinateClass = typeof Coordinate;
        type DataSourceClass = typeof DataSource;
        type DataSourceRequestClass = typeof DataSourceRequest;
        type FileCacheClass = typeof FileCache;
        type LayerClass = typeof Layer;
        type LicenseClass = typeof License;
        type LocationInterface = typeof Location;
        type MapClass = typeof Map;
        type MapLayerClass = typeof MapLayer;
        type MapSourceClass = typeof MapSource;
        type MapSourceRegistryClass = typeof MapSourceRegistry;
        type MarkerClass = typeof Marker;
        type MarkerLayerClass = typeof MarkerLayer;
        type PathLayerClass = typeof PathLayer;
        type PointClass = typeof Point;
        type RasterRendererClass = typeof RasterRenderer;
        type ScaleClass = typeof Scale;
        type SimpleMapClass = typeof SimpleMap;
        type SymbolEventClass = typeof SymbolEvent;
        type TileClass = typeof Tile;
        type TileDownloaderClass = typeof TileDownloader;
        type VectorReaderClass = typeof VectorReader;
        type VectorReaderIterClass = typeof VectorReaderIter;
        type VectorRendererClass = typeof VectorRenderer;
        type VectorSpriteClass = typeof VectorSprite;
        type VectorSpriteSheetClass = typeof VectorSpriteSheet;
        type ViewportClass = typeof Viewport;
        module Location {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                latitude: number;
                longitude: number;
            }
        }

        export interface LocationNamespace {
            $gtype: GObject.GType<Location>;
            prototype: Location;
        }
        interface Location extends GObject.Object {
            // Properties

            /**
             * The latitude coordonate in degrees
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate in degrees
             */
            get longitude(): number;
            set longitude(val: number);

            // Methods

            /**
             * Calculates the distance in meters between two locations.
             *
             * This function uses the great-circle distance formula, which assumes
             * Earth is a perfect sphere. This limits the accuracy of the result,
             * but is good enough for most purposes.
             * @param other a [iface@Location]
             * @returns the distance in meters between @self and @other
             */
            distance(other: Location): number;
            /**
             * Gets the latitude coordinate in degrees.
             * @returns the latitude coordinate in degrees.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             * @returns the longitude coordinate in degrees.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            set_location(latitude: number, longitude: number): void;

            // Virtual methods

            /**
             * Gets the latitude coordinate in degrees.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate in degrees.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude in degrees
             * @param longitude the longitude in degrees
             */
            vfunc_set_location(latitude: number, longitude: number): void;
        }

        export const Location: LocationNamespace;

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

    export default Shumate;
}

declare module 'gi://Shumate' {
    import Shumate10 from 'gi://Shumate?version=1.0';
    export default Shumate10;
}
// END
