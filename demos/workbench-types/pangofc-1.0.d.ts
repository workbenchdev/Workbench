/// <reference path="./fontconfig-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://PangoFc?version=1.0' {
    // Module dependencies
    import type fontconfig from 'gi://fontconfig?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace PangoFc {
        /**
         * PangoFc-1.0
         */

        /**
         * Fontconfig property that Pango reads from font
         * patterns to populate list of OpenType features
         * to be enabled for the font by default.
         *
         * The property will have a number of string elements,
         * each of which is the OpenType feature tag of one feature
         * to enable.
         *
         * This is equivalent to FC_FONT_FEATURES in versions of
         * fontconfig that have that.
         */
        const FONT_FEATURES: string;
        /**
         * Fontconfig property that Pango reads from font
         * patterns to populate list of OpenType font variations
         * to be used for a font.
         *
         * The property will have a string elements, each of which
         * a comma-separated list of OpenType axis setting of the
         * form AXIS=VALUE.
         *
         * This is equivalent to FC_FONT_VARIATIONS in versions of
         * fontconfig that have that.
         */
        const FONT_VARIATIONS: string;
        /**
         * Fontconfig property that Pango sets on any
         * fontconfig pattern it passes to fontconfig
         * if a `PangoGravity` other than %PANGO_GRAVITY_SOUTH
         * is desired.
         *
         * The property will have a `PangoGravity` value as a string,
         * like "east". This can be used to write fontconfig configuration
         * rules to choose different fonts for horizontal and vertical
         * writing directions.
         */
        const GRAVITY: string;
        /**
         * Fontconfig property that Pango sets on any
         * fontconfig pattern it passes to fontconfig.
         *
         * The property will have a string equal to what
         * g_get_prgname() returns. This can be used to write
         * fontconfig configuration rules that only affect
         * certain applications.
         *
         * This is equivalent to FC_PRGNAME in versions of
         * fontconfig that have that.
         */
        const PRGNAME: string;
        /**
         * Fontconfig property that Pango sets on any
         * fontconfig pattern it passes to fontconfig.
         *
         * The property will have an integer value equal to what
         * [func`Pango`.version] returns. This can be used to write
         * fontconfig configuration rules that only affect certain
         * pango versions (or only pango-using applications, or only
         * non-pango-using applications).
         */
        const VERSION: string;
        interface SubstituteFunc {
            (pattern: fontconfig.Pattern, data?: any | null): void;
        }
        module Decoder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * `PangoFcDecoder` is a virtual base class that implementations will
         * inherit from.
         *
         * It's the interface that is used to define a custom encoding for a font.
         * These objects are created in your code from a function callback that was
         * originally registered with [method`PangoFc`.FontMap.add_decoder_find_func].
         * Pango requires information about the supported charset for a font as well
         * as the individual character to glyph conversions. Pango gets that
         * information via the #get_charset and #get_glyph callbacks into your
         * object implementation.
         */
        abstract class Decoder extends GObject.Object {
            static $gtype: GObject.GType<Decoder>;

            // Constructors

            constructor(properties?: Partial<Decoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Generates an `FcCharSet` of supported characters for the `fcfont`
             * given.
             *
             * The returned `FcCharSet` will be a reference to an
             * internal value stored by the `PangoFcDecoder` and must not
             * be modified or freed.
             * @param fcfont the `PangoFcFont` to query.
             */
            vfunc_get_charset(fcfont: Font): fontconfig.CharSet;
            /**
             * Generates a `PangoGlyph` for the given Unicode point using the
             * custom decoder.
             *
             * For complex scripts where there can be multiple
             * glyphs for a single character, the decoder will return whatever
             * glyph is most convenient for it. (Usually whatever glyph is directly
             * in the fonts character map table.)
             * @param fcfont a `PangoFcFont` to query.
             * @param wc the Unicode code point to convert to a single `PangoGlyph`.
             */
            vfunc_get_glyph(fcfont: Font, wc: number): Pango.Glyph;

            // Methods

            /**
             * Generates an `FcCharSet` of supported characters for the `fcfont`
             * given.
             *
             * The returned `FcCharSet` will be a reference to an
             * internal value stored by the `PangoFcDecoder` and must not
             * be modified or freed.
             * @param fcfont the `PangoFcFont` to query.
             * @returns the `FcCharset` for @fcfont; must not   be modified or freed.
             */
            get_charset(fcfont: Font): fontconfig.CharSet;
            /**
             * Generates a `PangoGlyph` for the given Unicode point using the
             * custom decoder.
             *
             * For complex scripts where there can be multiple
             * glyphs for a single character, the decoder will return whatever
             * glyph is most convenient for it. (Usually whatever glyph is directly
             * in the fonts character map table.)
             * @param fcfont a `PangoFcFont` to query.
             * @param wc the Unicode code point to convert to a single `PangoGlyph`.
             * @returns the glyph index, or 0 if the glyph isn't covered by the font.
             */
            get_glyph(fcfont: Font, wc: number): Pango.Glyph;
        }

        module Font {
            // Constructor properties interface

            interface ConstructorProps extends Pango.Font.ConstructorProps {
                fontmap: FontMap;
                pattern: any;
            }
        }

        /**
         * `PangoFcFont` is a base class for font implementations
         * using the Fontconfig and FreeType libraries.
         *
         * It is used in onjunction with [class`PangoFc`.FontMap].
         * When deriving from this class, you need to implement all
         * of its virtual functions other than shutdown() along with
         * the get_glyph_extents() virtual function from `PangoFont`.
         */
        abstract class Font extends Pango.Font {
            static $gtype: GObject.GType<Font>;

            // Properties

            /**
             * The PangoFc font map this font is associated with.
             */
            get fontmap(): FontMap;
            set fontmap(val: FontMap);
            /**
             * The fontconfig pattern for this font.
             */
            get pattern(): any;

            // Fields

            priv: any;
            matrix: Pango.Matrix;
            metrics_by_lang: any[];
            is_hinted: number;
            is_transformed: number;

            // Constructors

            constructor(properties?: Partial<Font.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a `PangoFontDescription` that matches the specified
             * Fontconfig pattern as closely as possible.
             *
             * Many possible Fontconfig pattern values, such as %FC_RASTERIZER
             * or %FC_DPI, don't make sense in the context of `PangoFontDescription`,
             * so will be ignored.
             * @param pattern a `FcPattern`
             * @param include_size if %TRUE, the pattern will include the size from   the @pattern; otherwise the resulting pattern will be unsized.   (only %FC_SIZE is examined, not %FC_PIXEL_SIZE)
             */
            static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription;

            // Methods

            /**
             * Gets the glyph index for a given Unicode character
             * for `font`.
             *
             * If you only want to determine whether the font has
             * the glyph, use [method`PangoFc`.Font.has_char].
             * @param wc Unicode character to look up
             * @returns the glyph index, or 0, if the Unicode   character doesn't exist in the font.
             */
            get_glyph(wc: number): number;
            /**
             * Returns the languages that are supported by `font`.
             *
             * This corresponds to the FC_LANG member of the FcPattern.
             *
             * The returned array is only valid as long as the font
             * and its fontmap are valid.
             * @returns a   %NULL-terminated array of `PangoLanguage`*
             */
            get_languages(): Pango.Language[] | null;
            /**
             * Returns the index of a glyph suitable for drawing `wc`
             * as an unknown character.
             *
             * Use PANGO_GET_UNKNOWN_GLYPH() instead.
             * @param wc the Unicode character for which a glyph is needed.
             * @returns a glyph index into @font.
             */
            get_unknown_glyph(wc: number): Pango.Glyph;
            /**
             * Determines whether `font` has a glyph for the codepoint `wc`.
             * @param wc Unicode codepoint to look up
             * @returns %TRUE if @font has the requested codepoint.
             */
            has_char(wc: number): boolean;
            /**
             * This function used to adjust each adjacent pair of glyphs
             * in `glyphs` according to kerning information in `font`.
             *
             * Since 1.44, it does nothing.
             * @param glyphs a `PangoGlyphString`
             */
            kern_glyphs(glyphs: Pango.GlyphString): void;
            /**
             * Releases a font previously obtained with
             * [method`PangoFc`.Font.lock_face].
             */
            unlock_face(): void;
        }

        module FontMap {
            // Constructor properties interface

            interface ConstructorProps<A extends GObject.Object = GObject.Object>
                extends Pango.FontMap.ConstructorProps,
                    Gio.ListModel.ConstructorProps {}
        }

        /**
         * `PangoFcFontMap` is a base class for font map implementations using the
         * Fontconfig and FreeType libraries.
         *
         * It is used in the Xft and FreeType backends shipped with Pango,
         * but can also be used when creating new backends. Any backend
         * deriving from this base class will take advantage of the wide
         * range of shapers implemented using FreeType that come with Pango.
         */
        abstract class FontMap<A extends GObject.Object = GObject.Object>
            extends Pango.FontMap
            implements Gio.ListModel<A>
        {
            static $gtype: GObject.GType<FontMap>;

            // Constructors

            constructor(properties?: Partial<FontMap.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Clear all cached information and fontsets for this font map.
             *
             * This should be called whenever there is a change in the
             * output of the default_substitute() virtual function of the
             * font map, or if fontconfig has been reinitialized to new
             * configuration.
             */
            cache_clear(): void;
            /**
             * Informs font map that the fontconfig configuration (i.e., FcConfig
             * object) used by this font map has changed.
             *
             * This currently calls [method`PangoFc`.FontMap.cache_clear] which
             * ensures that list of fonts, etc will be regenerated using the
             * updated configuration.
             */
            config_changed(): void;
            /**
             * Creates a new context for this fontmap.
             *
             * This function is intended only for backend implementations deriving
             * from `PangoFcFontMap`; it is possible that a backend will store
             * additional information needed for correct operation on the `PangoContext`
             * after calling this function.
             * @returns a new `PangoContext`
             */
            create_context(): Pango.Context;
            /**
             * Finds the decoder to use for `pattern`.
             *
             * Decoders can be added to a font map using
             * [method`PangoFc`.FontMap.add_decoder_find_func].
             * @param pattern The `FcPattern` to find the decoder for.
             * @returns a newly created `PangoFcDecoder`   object or %NULL if no decoder is set for @pattern.
             */
            find_decoder(pattern: fontconfig.Pattern): Decoder | null;
            /**
             * Sets a function that will be called to do final configuration
             * substitution on a `FcPattern` before it is used to load
             * the font.
             *
             * This function can be used to do things like set
             * hinting and antialiasing options.
             * @param func function to call to to do final config tweaking on `FcPattern` objects
             */
            set_default_substitute(func: SubstituteFunc): void;
            /**
             * Clears all cached information for the fontmap and marks
             * all fonts open for the fontmap as dead.
             *
             * See the shutdown() virtual function of `PangoFcFont`.
             *
             * This function might be used by a backend when the underlying
             * windowing system for the font map exits. This function is only
             * intended to be called only for backend implementations deriving
             * from `PangoFcFontMap`.
             */
            shutdown(): void;
            /**
             * Call this function any time the results of the default
             * substitution function set with
             * [method`PangoFc`.FontMap.set_default_substitute] change.
             *
             * That is, if your substitution function will return different
             * results for the same input pattern, you must call this function.
             */
            substitute_changed(): void;

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

        type DecoderClass = typeof Decoder;
        type FontClass = typeof Font;
        type FontMapClass = typeof FontMap;
        abstract class FontMapPrivate {
            static $gtype: GObject.GType<FontMapPrivate>;

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

    export default PangoFc;
}

declare module 'gi://PangoFc' {
    import PangoFc10 from 'gi://PangoFc?version=1.0';
    export default PangoFc10;
}
// END
