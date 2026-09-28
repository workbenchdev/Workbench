/// <reference path="./gstbase-1.0.d.ts" />
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

declare module 'gi://GstAnalytics?version=1.0' {
    // Module dependencies
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstAnalytics {
        /**
         * GstAnalytics-1.0
         */

        /**
         * Passes to functions asking for a relation span when the span is
         * infinite.
         */
        const INF_RELATION_SPAN: number;
        /**
         * A wildcard matching any type of analysis
         */
        const MTD_TYPE_ANY: number;
        /**
         * Attach a analysis-results-meta-relation  meta (#GstAnalyticsRelationMeta)to `buffer`.
         *
         * A #GstAnalyticsRelationMeta is a metadata describing relation between other
         * analysis meta. It's more efficient to use #gst_buffer_add_analytics_relation_meta_full
         * and providing the maximum number of analysis meta that will attached to a buffer.
         * @param buffer a #GstBuffer
         * @returns Newly attached #GstAnalyticsRelationMeta
         */
        function buffer_add_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
        /**
         * Attache a analysis-results relation-meta (#GstAnalyticsRelationMeta) to `buffer`.
         *
         * A #GstAnalyticsRelationMeta is a metadata describing relation between other
         * analysis meta.
         * @param buffer a #GstBuffer
         * @param init_params Initialization parameters
         * @returns Newly attached #GstAnalyticsRelationMeta
         */
        function buffer_add_analytics_relation_meta_full(
            buffer: Gst.Buffer,
            init_params: RelationMetaInitParams,
        ): RelationMeta | null;
        /**
         * Retrives the meta or %NULL if it doesn't exist
         * @param buffer a #GstBuffer
         * @returns The #GstAnalyticsRelationMeta if there is one
         */
        function buffer_get_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
        /**
         * Get an id identifying #GstAnalyticsMtd type.
         * @returns opaque id of #GstAnalyticsMtd type
         */
        function cls_mtd_get_mtd_type(): MtdType;
        /**
         * Gets the string version of the name of this type of analytics data
         * @param type The type of analytics data
         * @returns the name
         */
        function mtd_type_get_name(type: MtdType): string;
        /**
         * Get an id that represent object-detection metadata type
         * @returns Opaque id of the #GstAnalyticsMtd type
         */
        function od_mtd_get_mtd_type(): MtdType;
        /**
         * Get number of relatable meta attached to instance
         * @param instance Instance of #GstAnalyticsRelationMeta
         * @returns Number of analysis-meta attached to this  instance.
         */
        function relation_get_length(instance: RelationMeta): number;
        function relation_meta_api_get_type(): GObject.GType;
        function tracking_mtd_get_mtd_type(): MtdType;

        export namespace RelTypes {
            export const $gtype: GObject.GType<RelTypes>;
        }

        enum RelTypes {
            /**
             * No relation
             */
            NONE,
            /**
             * First analysis-meta is part of second analysis-meta
             */
            IS_PART_OF,
            /**
             * First analysis-meta contain second analysis-meta.
             */
            CONTAIN,
            RELATE_TO,
            /**
             * reserved
             */
            LAST,
            /**
             * Only use for criteria.
             */
            ANY,
        }
        /**
         * Handle containing data required to use gst_analytics_cls_mtd APIs. This type
         * is generally expected to be allocated on the stack.
         */
        class ClsMtd {
            static $gtype: GObject.GType<ClsMtd>;

            // Fields

            id: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Get an id identifying #GstAnalyticsMtd type.
             */
            static get_mtd_type(): MtdType;

            // Methods

            get_index_by_quark(quark: GLib.Quark): number;
            get_length(): number;
            /**
             * Get confidence level for class at `index`
             * @param index Object class index
             * @returns confidence level for @index, <0.0 if the call failed.
             */
            get_level(index: number): number;
            get_quark(index: number): GLib.Quark;
        }

        /**
         * Handle containing data required to use gst_analytics_mtd API. This type
         * is generally expected to be allocated on the stack.
         */
        class Mtd {
            static $gtype: GObject.GType<Mtd>;

            // Fields

            id: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets the string version of the name of this type of analytics data
             * @param type The type of analytics data
             */
            static type_get_name(type: MtdType): string;

            // Methods

            /**
             * Get instance id
             * @returns Id of @instance
             */
            get_id(): number;
            get_mtd_type(): MtdType;
            /**
             * Get instance size
             * @returns Size (in bytes) of this instance or 0 on failure.
             */
            get_size(): number;
        }

        /**
         * This structure must be provided when registering a new type of Mtd. It must
         * have a static lifetime (never be freed).
         */
        class MtdImpl {
            static $gtype: GObject.GType<MtdImpl>;

            // Fields

            name: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Handle containing data required to use gst_analytics_od_mtd APIs. This type
         * is generally expected to be allocated on the stack.
         */
        class ODMtd {
            static $gtype: GObject.GType<ODMtd>;

            // Fields

            id: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Get an id that represent object-detection metadata type
             */
            static get_mtd_type(): MtdType;

            // Methods

            /**
             * Retrieve location confidence level.
             * @returns TRUE on success, otherwise FALSE.
             */
            get_confidence_lvl(): [boolean, number];
            /**
             * Retrieve location and location confidence level.
             * @returns TRUE on success, otherwise FALSE.
             */
            get_location(): [boolean, number, number, number, number, number];
            /**
             * Quark of the class of object associated with this location.
             * @returns Quark different from on success and 0 on failure.
             */
            get_obj_type(): GLib.Quark;
        }

        /**
         * An opaque #GstMeta that can be used to hold various types of results
         * from analysis processes.
         *
         * The content should be accessed through the API.
         */
        abstract class RelationMeta {
            static $gtype: GObject.GType<RelationMeta>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Add analytic classification metadata to `instance`.
             * @param confidence_levels confidence levels
             * @param class_quarks labels of this    classification. Order define index, quark, labels relation. This array    need to exist as long has this classification meta exist.
             * @returns Added successfully
             */
            add_cls_mtd(confidence_levels: number[], class_quarks: GLib.Quark[]): [boolean, ClsMtd];
            add_od_mtd(
                type: GLib.Quark,
                x: number,
                y: number,
                w: number,
                h: number,
                loc_conf_lvl: number,
            ): [boolean, ODMtd | null];
            /**
             * Add analytic classification metadata to `instance`.
             * @param confidence_level confidence levels
             * @param class_quark labels of this    classification. Order define index, quark, labels relation. This array    need to exist as long has this classification meta exist.
             * @returns Added successfully
             */
            add_one_cls_mtd(confidence_level: number, class_quark: GLib.Quark): [boolean, ClsMtd];
            add_tracking_mtd(tracking_id: number, tracking_first_seen: Gst.ClockTime): [boolean, TrackingMtd];
            /**
             * Verify existence of relation(s) between `an_meta_first_d` and
             * `an_meta_second_id` according to relation condition `cond_types`. It optionally
             * also return a shortest path of relations ( compliant with `cond_types)`
             * between `an_meta_first_id` and `an_meta_second_id`.
             * @param an_meta_first_id First analysis-meta
             * @param an_meta_second_id Second analysis-meta
             * @param max_relation_span Maximum number of relation between @an_meta_first_id and    @an_meta_second_id.    A value of 1 mean only only consider direct relation.
             * @param cond_types condition on relation types.
             * @returns TRUE if a relation between exit between @an_meta_first_id and  @an_meta_second_id, otherwise FALSE.
             */
            exist(
                an_meta_first_id: number,
                an_meta_second_id: number,
                max_relation_span: number,
                cond_types: RelTypes,
            ): [boolean, number[] | null];
            /**
             * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
             * otherwise this method return FALSE and `rlt` is invalid.
             * @param an_meta_id Id of #GstAnalyticsClsMtd instance to retrieve
             * @returns TRUE if successful.
             */
            get_cls_mtd(an_meta_id: number): [boolean, ClsMtd];
            get_direct_related(
                an_meta_id: number,
                relation_type: RelTypes,
                type: MtdType,
                state: any,
                rlt_mtd: Mtd,
            ): [boolean, any];
            /**
             * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
             * otherwise this method return FALSE and `rlt` is invalid.
             * @param an_meta_id Id of GstAnalyticsMtd instance to retrieve
             * @param type Filter on a specific type of analysis, use  %GST_ANALYTICS_MTD_TYPE_ANY to match any type
             * @returns TRUE if successful.
             */
            get_mtd(an_meta_id: number, type: MtdType): [boolean, Mtd];
            /**
             * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
             * otherwise this method return FALSE and `rlt` is invalid.
             * @param an_meta_id Id of #GstAnalyticsODMtd instance to retrieve
             * @returns TRUE if successful.
             */
            get_od_mtd(an_meta_id: number): [boolean, ODMtd];
            /**
             * Get relations between first and second analysis-meta.
             * Ids (`an_meta_first_id` and `an_meta_second_id)` must be from a call to
             * `gst_analytics_mtd_get_id` (handle).
             * @param an_meta_first_id Id of first analysis-meta
             * @param an_meta_second_id Id of second  analysis-meta
             * @returns relation description between first and second analysis-meta.
             */
            get_relation(an_meta_first_id: number, an_meta_second_id: number): RelTypes;
            /**
             * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
             * otherwise this method return FALSE and `rlt` is invalid.
             * @param an_meta_id Id of GstAnalyticsMtd instance to retrieve
             * @returns TRUE if successful.
             */
            get_tracking_mtd(an_meta_id: number): [boolean, TrackingMtd];
            iterate(state: any | null, type: MtdType, rlt_mtd: Mtd): boolean;
            /**
             * Sets the relation (#GstAnalyticsRelTypes) between `an_meta_first` and
             *    `an_meta_second`.
             * Ids must have been obtained a call to
             *    `gst_analytics_mtd_get_id(`handle).
             * @param type a #GstAnalyticsRelTypes defining relation between two analysis-meta
             * @param an_meta_first_id first meta id
             * @param an_meta_second_id second meta id
             * @returns TRUE on success and FALSE on failure.
             */
            set_relation(type: RelTypes, an_meta_first_id: number, an_meta_second_id: number): boolean;
        }

        /**
         * GstAnalyticsRelationMeta initialization parameters.
         */
        class RelationMetaInitParams {
            static $gtype: GObject.GType<RelationMetaInitParams>;

            // Fields

            initial_relation_order: number;
            initial_buf_size: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    initial_relation_order: number;
                    initial_buf_size: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Store information on results of object tracking
         */
        class TrackingMtd {
            static $gtype: GObject.GType<TrackingMtd>;

            // Fields

            id: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_mtd_type(): MtdType;

            // Methods

            /**
             * Retrieve tracking information.
             * @returns Successfully retrieved info.
             */
            get_info(): [boolean, number, Gst.ClockTime, Gst.ClockTime, boolean];
            set_lost(): boolean;
            update_last_seen(last_seen: Gst.ClockTime): boolean;
        }

        type MtdType = never;
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

    export default GstAnalytics;
}

declare module 'gi://GstAnalytics' {
    import GstAnalytics10 from 'gi://GstAnalytics?version=1.0';
    export default GstAnalytics10;
}
// END
