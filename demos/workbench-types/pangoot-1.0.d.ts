/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./pangofc-1.0.d.ts" />
/// <reference path="./fontconfig-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
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

declare module 'gi://PangoOT?version=1.0' {
    // Module dependencies
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type PangoFc from 'gi://PangoFc?version=1.0';
    import type fontconfig from 'gi://fontconfig?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace PangoOT {
        /**
         * PangoOT-1.0
         */

        /**
         * The PangoOTTableType enumeration values are used to
         * identify the various OpenType tables in the
         * pango_ot_info_… functions.
         */

        /**
         * The PangoOTTableType enumeration values are used to
         * identify the various OpenType tables in the
         * pango_ot_info_… functions.
         */
        export namespace TableType {
            export const $gtype: GObject.GType<TableType>;
        }

        enum TableType {
            /**
             * The GSUB table.
             */
            GSUB,
            /**
             * The GPOS table.
             */
            GPOS,
        }
        /**
         * This is used as the property bit in pango_ot_ruleset_add_feature() when a
         * feature should be applied to all glyphs.
         */
        const ALL_GLYPHS: number;
        /**
         * This is used as the language index in pango_ot_info_find_feature() when
         * the default language system of the script is desired.
         *
         * It is also returned by pango_ot_info_find_language() if the requested language
         * is not found, or the requested language tag was PANGO_OT_TAG_DEFAULT_LANGUAGE.
         * The end result is that one can always call pango_ot_tag_from_language()
         * followed by pango_ot_info_find_language() and pass the result to
         * pango_ot_info_find_feature() without having to worry about falling back to
         * default language system explicitly.
         */
        const DEFAULT_LANGUAGE: number;
        /**
         * This is used as a feature index that represent no feature, that is, should be
         * skipped.  It may be returned as feature index by pango_ot_info_find_feature()
         * if the feature is not found, and pango_ot_ruleset_add_feature() function
         * automatically skips this value, so no special handling is required by the user.
         */
        const NO_FEATURE: number;
        /**
         * This is used as a script index that represent no script, that is, when the
         * requested script was not found, and a default ('DFLT') script was not found
         * either.  It may be returned as script index by pango_ot_info_find_script()
         * if the script or a default script are not found, all other functions
         * taking a script index essentially return if the input script index is
         * this value, so no special handling is required by the user.
         */
        const NO_SCRIPT: number;
        /**
         * Finds the OpenType language-system tag best describing `language`.
         * @param language A `PangoLanguage`
         * @returns `PangoOTTag` best matching @language or %PANGO_OT_TAG_DEFAULT_LANGUAGE if none found or if @language is %NULL.
         */
        function tag_from_language(language?: Pango.Language | null): Tag;
        /**
         * Finds the OpenType script tag corresponding to `script`.
         *
         * The %PANGO_SCRIPT_COMMON, %PANGO_SCRIPT_INHERITED, and
         * %PANGO_SCRIPT_UNKNOWN scripts are mapped to the OpenType
         * 'DFLT' script tag that is also defined as
         * %PANGO_OT_TAG_DEFAULT_SCRIPT.
         *
         * Note that multiple `PangoScript` values may map to the same
         * OpenType script tag.  In particular, %PANGO_SCRIPT_HIRAGANA
         * and %PANGO_SCRIPT_KATAKANA both map to the OT tag 'kana'.
         * @param script A `PangoScript`
         * @returns `PangoOTTag` corresponding to @script or %PANGO_OT_TAG_DEFAULT_SCRIPT if none found.
         */
        function tag_from_script(script: Pango.Script): Tag;
        /**
         * Finds a `PangoLanguage` corresponding to `language_tag`.
         * @param language_tag A `PangoOTTag` OpenType language-system tag
         * @returns `PangoLanguage` best matching @language_tag or `PangoLanguage` corresponding to the string "xx" if none found.
         */
        function tag_to_language(language_tag: Tag): Pango.Language;
        /**
         * Finds the `PangoScript` corresponding to `script_tag`.
         *
         * The 'DFLT' script tag is mapped to %PANGO_SCRIPT_COMMON.
         *
         * Note that an OpenType script tag may correspond to multiple
         * `PangoScript` values.  In such cases, the `PangoScript` value
         * with the smallest value is returned.
         * In particular, %PANGO_SCRIPT_HIRAGANA
         * and %PANGO_SCRIPT_KATAKANA both map to the OT tag 'kana'.
         * This function will return %PANGO_SCRIPT_HIRAGANA for
         * 'kana'.
         * @param script_tag A `PangoOTTag` OpenType script tag
         * @returns `PangoScript` corresponding to @script_tag or %PANGO_SCRIPT_UNKNOWN if none found.
         */
        function tag_to_script(script_tag: Tag): Pango.Script;
        module Info {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Info extends GObject.Object {
            static $gtype: GObject.GType<Info>;

            // Constructors

            constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns the `PangoOTInfo` structure for the given FreeType font face.
             * @param face a `FT_Face`
             */
            static get(face: freetype2.Face): Info;

            // Methods

            /**
             * Finds the index of a feature.
             *
             * If the feature is not found, sets `feature_index` to PANGO_OT_NO_FEATURE,
             * which is safe to pass to [method`PangoOT`.Ruleset.add_feature] and similar
             * functions.
             *
             * In the future, this may set `feature_index` to an special value that if
             * used in [method`PangoOT`.Ruleset.add_feature] will ask Pango to synthesize
             * the requested feature based on Unicode properties and data. However, this
             * function will still return %FALSE in those cases. So, users may want to
             * ignore the return value of this function in certain cases.
             * @param table_type the table type to obtain information about
             * @param feature_tag the tag of the feature to find
             * @param script_index the index of the script
             * @param language_index the index of the language whose features are searched,   or %PANGO_OT_DEFAULT_LANGUAGE to use the default language of the script
             * @returns %TRUE if the feature was found
             */
            find_feature(
                table_type: TableType,
                feature_tag: Tag,
                script_index: number,
                language_index: number,
            ): [boolean, number];
            /**
             * Finds the index of a language and its required feature index.
             *
             * If the language is not found, sets `language_index` to %PANGO_OT_DEFAULT_LANGUAGE
             * and the required feature of the default language system is returned in
             * required_feature_index. For best compatibility with some fonts, also
             * searches the language system tag 'dflt' before falling back to the default
             * language system, but that is transparent to the user. The user can simply
             * ignore the return value of this function to automatically fall back to the
             * default language system.
             * @param table_type the table type to obtain information about
             * @param script_index the index of the script whose languages are searched
             * @param language_tag the tag of the language to find
             * @returns %TRUE if the language was found
             */
            find_language(table_type: TableType, script_index: number, language_tag: Tag): [boolean, number, number];
            /**
             * Finds the index of a script.
             *
             * If not found, tries to find the 'DFLT' and then 'dflt' scripts and
             * return the index of that in `script_index`. If none of those is found
             * either, %PANGO_OT_NO_SCRIPT is placed in `script_index`.
             *
             * All other functions taking an input script_index parameter know
             * how to handle %PANGO_OT_NO_SCRIPT, so one can ignore the return
             * value of this function completely and proceed, to enjoy the automatic
             * fallback to the 'DFLT'/'dflt' script.
             * @param table_type the table type to obtain information about
             * @param script_tag the tag of the script to find
             * @returns %TRUE if the script was found
             */
            find_script(table_type: TableType, script_tag: Tag): [boolean, number];
            /**
             * Obtains the list of features for the given language of the given script.
             * @param table_type the table type to obtain information about
             * @param tag unused parameter
             * @param script_index the index of the script to obtain information about
             * @param language_index the index of the language to list features for, or   %PANGO_OT_DEFAULT_LANGUAGE, to list features for the default   language of the script
             * @returns a newly-allocated zero-terminated   array containing the tags of the available features
             */
            list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag;
            /**
             * Obtains the list of available languages for a given script.
             * @param table_type the table type to obtain information about
             * @param script_index the index of the script to list languages for
             * @param language_tag unused parameter
             * @returns a newly-allocated zero-terminated   array containing the tags of the available languages
             */
            list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag;
            /**
             * Obtains the list of available scripts.
             * @param table_type the table type to obtain information about
             * @returns a newly-allocated zero-terminated   array containing the tags of the available scripts
             */
            list_scripts(table_type: TableType): Tag;
        }

        module Ruleset {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * The `PangoOTRuleset` structure holds a set of features selected
         * from the tables in an OpenType font.
         *
         * A feature is an operation such as adjusting glyph positioning
         * that should be applied to a text feature such as a certain
         * type of accent.
         *
         * A `PangoOTRuleset` is created with [ctor`PangoOT`.Ruleset.new],
         * features are added to it with [method`PangoOT`.Ruleset.add_feature],
         * then it is applied to a `PangoGlyphString` with
         * [method`PangoOT`.Ruleset.position].
         */
        class Ruleset extends GObject.Object {
            static $gtype: GObject.GType<Ruleset>;

            // Constructors

            constructor(properties?: Partial<Ruleset.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](info: Info): Ruleset;

            static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset;

            static new_from_description(info: Info, desc: RulesetDescription): Ruleset;

            // Static methods

            /**
             * Returns a ruleset for the given OpenType info and ruleset
             * description.
             *
             * Rulesets are created on demand using
             * [ctor`PangoOT`.Ruleset.new_from_description].
             * The returned ruleset should not be modified or destroyed.
             *
             * The static feature map members of `desc` should be alive as
             * long as `info` is.
             * @param info a `PangoOTInfo`
             * @param desc a `PangoOTRulesetDescription`
             */
            static get_for_description(info: Info, desc: RulesetDescription): Ruleset;

            // Methods

            /**
             * Adds a feature to the ruleset.
             * @param table_type the table type to add a feature to
             * @param feature_index the index of the feature to add
             * @param property_bit the property bit to use for this feature. Used to   identify the glyphs that this feature should be applied to, or   %PANGO_OT_ALL_GLYPHS if it should be applied to all glyphs.
             */
            add_feature(table_type: TableType, feature_index: number, property_bit: number): void;
            /**
             * Gets the number of GSUB and GPOS features in the ruleset.
             * @returns Total number of features in the @ruleset
             */
            get_feature_count(): [number, number, number];
            /**
             * This is a convenience function that first tries to find the feature
             * using [method`PangoOT`.Info.find_feature] and the ruleset script and
             * language passed to [ctor`PangoOT`.Ruleset.new_for] and if the feature
             * is found, adds it to the ruleset.
             *
             * If `ruleset` was not created using [ctor`PangoOT`.Ruleset.new_for],
             * this function does nothing.
             * @param table_type the table type to add a feature to
             * @param feature_tag the tag of the feature to add
             * @param property_bit the property bit to use for this feature. Used to   identify the glyphs that this feature should be applied to, or   %PANGO_OT_ALL_GLYPHS if it should be applied to all glyphs.
             * @returns %TRUE if the feature was found and added to ruleset,   %FALSE otherwise
             */
            maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: number): boolean;
            /**
             * This is a convenience function that for each feature in the feature map
             * array `features` converts the feature name to a `PangoOTTag` feature tag
             * using PANGO_OT_TAG_MAKE() and calls [method`PangoOT`.Ruleset.maybe_add_feature]
             * on it.
             * @param table_type the table type to add features to
             * @param features array of feature name and property bits to add
             * @param n_features number of feature records in @features array
             * @returns The number of features in @features that were found   and added to @ruleset
             */
            maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number;
            /**
             * Performs the OpenType GPOS positioning on `buffer` using
             * the features in `ruleset`.
             * @param buffer a `PangoOTBuffer`
             */
            position(buffer: Buffer): void;
            /**
             * Performs the OpenType GSUB substitution on `buffer` using
             * the features in `ruleset`.
             * @param buffer a `PangoOTBuffer`
             */
            substitute(buffer: Buffer): void;
        }

        class Buffer {
            static $gtype: GObject.GType<Buffer>;

            // Constructors

            constructor(font: PangoFc.Font);
            _init(...args: any[]): void;

            static ['new'](font: PangoFc.Font): Buffer;

            // Methods

            /**
             * Appends a glyph to a `PangoOTBuffer`, with `properties` identifying which
             * features should be applied on this glyph.
             *
             * See [method`PangoOT`.Ruleset.add_feature].
             * @param glyph the glyph index to add, like a `PangoGlyph`
             * @param properties the glyph properties
             * @param cluster the cluster that this glyph belongs to
             */
            add_glyph(glyph: number, properties: number, cluster: number): void;
            /**
             * Empties a `PangoOTBuffer`, make it ready to add glyphs to.
             */
            clear(): void;
            /**
             * Destroys a `PangoOTBuffer` and free all associated memory.
             */
            destroy(): void;
            /**
             * Gets the glyph array contained in a `PangoOTBuffer`.
             *
             * The glyphs are owned by the buffer and should not be freed,
             * and are only valid as long as buffer is not modified.
             */
            get_glyphs(): Glyph[] | null;
            /**
             * Exports the glyphs in a `PangoOTBuffer` into a `PangoGlyphString`.
             *
             * This is typically used after the OpenType layout processing
             * is over, to convert the resulting glyphs into a generic Pango
             * glyph string.
             * @param glyphs a `PangoGlyphString`
             */
            output(glyphs: Pango.GlyphString): void;
            /**
             * Sets whether glyphs will be rendered right-to-left.
             *
             * This setting is needed for proper horizontal positioning
             * of right-to-left scripts.
             * @param rtl %TRUE for right-to-left text
             */
            set_rtl(rtl: boolean): void;
            /**
             * Sets whether characters with a mark class should be forced to zero width.
             *
             * This setting is needed for proper positioning of Arabic accents,
             * but will produce incorrect results with standard OpenType Indic
             * fonts.
             * @param zero_width_marks %TRUE if characters with a mark class should   be forced to zero width
             */
            set_zero_width_marks(zero_width_marks: boolean): void;
        }

        /**
         * The `PangoOTFeatureMap` typedef is used to represent an OpenType
         * feature with the property bit associated with it.  The feature tag is
         * represented as a char array instead of a `PangoOTTag` for convenience.
         */
        class FeatureMap {
            static $gtype: GObject.GType<FeatureMap>;

            // Fields

            feature_name: number[];
            property_bit: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    feature_name: number[];
                    property_bit: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * The `PangoOTGlyph` structure represents a single glyph together with
         * information used for OpenType layout processing of the glyph.
         * It contains the following fields.
         */
        class Glyph {
            static $gtype: GObject.GType<Glyph>;

            // Fields

            glyph: number;
            properties: number;
            cluster: number;
            component: number;
            ligID: number;
            internal: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    glyph: number;
                    properties: number;
                    cluster: number;
                    component: number;
                    ligID: number;
                    internal: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * The `PangoOTRuleset` structure holds all the information needed
         * to build a complete `PangoOTRuleset` from an OpenType font.
         * The main use of this struct is to act as the key for a per-font
         * hash of rulesets.  The user populates a ruleset description and
         * gets the ruleset using pango_ot_ruleset_get_for_description()
         * or create a new one using pango_ot_ruleset_new_from_description().
         */
        class RulesetDescription {
            static $gtype: GObject.GType<RulesetDescription>;

            // Fields

            script: Pango.Script;
            static_gsub_features: FeatureMap;
            n_static_gsub_features: number;
            static_gpos_features: FeatureMap;
            n_static_gpos_features: number;
            other_features: FeatureMap;
            n_other_features: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Creates a copy of `desc,` which should be freed with
             * [method`PangoOT`.RulesetDescription.free].
             *
             * Primarily used internally by [func`PangoOT`.Ruleset.get_for_description]
             * to cache rulesets for ruleset descriptions.
             * @returns the newly allocated `PangoOTRulesetDescription`
             */
            copy(): RulesetDescription;
            /**
             * Compares two ruleset descriptions for equality.
             *
             * Two ruleset descriptions are considered equal if the rulesets
             * they describe are provably identical. This means that their
             * script, language, and all feature sets should be equal.
             *
             * For static feature sets, the array addresses are compared directly,
             * while for other features, the list of features is compared one by
             * one.(Two ruleset descriptions may result in identical rulesets
             * being created, but still compare %FALSE.)
             * @param desc2 a ruleset description
             * @returns %TRUE if two ruleset descriptions are identical,   %FALSE otherwise
             */
            equal(desc2: RulesetDescription): boolean;
            /**
             * Frees a ruleset description allocated by
             * pango_ot_ruleset_description_copy().
             */
            free(): void;
            /**
             * Computes a hash of a `PangoOTRulesetDescription` structure suitable
             * to be used, for example, as an argument to g_hash_table_new().
             * @returns the hash value
             */
            hash(): number;
        }

        type Tag = number;
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

    export default PangoOT;
}

declare module 'gi://PangoOT' {
    import PangoOT10 from 'gi://PangoOT?version=1.0';
    export default PangoOT10;
}
// END
