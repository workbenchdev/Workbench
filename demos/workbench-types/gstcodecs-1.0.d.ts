/// <reference path="./gstvideo-1.0.d.ts" />
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

declare module 'gi://GstCodecs?version=1.0' {
    // Module dependencies
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstCodecs {
        /**
         * GstCodecs-1.0
         */

        export namespace H264DecoderCompliance {
            export const $gtype: GObject.GType<H264DecoderCompliance>;
        }

        enum H264DecoderCompliance {
            /**
             * The decoder behavior is
             *     automatically choosen.
             */
            AUTO,
            /**
             * The decoder behavior strictly
             *     conforms to the SPEC. All the decoder behaviors conform to the
             *     SPEC, not including any nonstandard behavior which is not
             *     mentioned in the SPEC.
             */
            STRICT,
            /**
             * The decoder behavior normally
             *     conforms to the SPEC. Most behaviors conform to the SPEC but
             *     including some nonstandard features which are widely used or
             *     often used in the industry practice. This meets the request of
             *     real streams and usages, but may not 100% conform to the
             *     SPEC. It has very low risk. E.g., we will output pictures
             *     without waiting DPB being full for the lower latency, which may
             *     cause B frame disorder when there are reference frames with
             *     smaller POC after it in decoder order. And the baseline profile
             *     may be mapped to the constrained-baseline profile, but it may
             *     have problems when a real baseline stream comes with FMO or
             *     ASO.
             */
            NORMAL,
            /**
             * The decoder behavior
             *     flexibly conforms to the SPEC. It uses the nonstandard features
             *     more aggressively in order to get better performance(for
             *     example, lower latency). It may change the result of the
             *     decoder and should be used carefully. Besides including all
             *     risks in *normal* mode, it has more risks, such as frames
             *     disorder when reference frames POC decrease in decoder order.
             */
            FLEXIBLE,
        }

        export namespace H264DpbBumpMode {
            export const $gtype: GObject.GType<H264DpbBumpMode>;
        }

        enum H264DpbBumpMode {
            /**
             * No latency requirement for DBP bumping.
             */
            NORMAL_LATENCY,
            /**
             * Low-latency requirement for DBP bumping.
             */
            LOW_LATENCY,
            /**
             * Very low-latency requirement for DBP bumping.
             */
            VERY_LOW_LATENCY,
        }

        export namespace H264PictureField {
            export const $gtype: GObject.GType<H264PictureField>;
        }

        enum H264PictureField {
            FRAME,
            TOP_FIELD,
            BOTTOM_FIELD,
        }

        export namespace H264PictureReference {
            export const $gtype: GObject.GType<H264PictureReference>;
        }

        enum H264PictureReference {
            /**
             * Not used for reference picture
             */
            NONE,
            /**
             * Used for short-term reference picture
             */
            SHORT_TERM,
            /**
             * Used for long-term reference picture
             */
            LONG_TERM,
        }
        /**
         * Reference modes: Specify the type of inter prediction to be used
         */

        /**
         * Reference modes: Specify the type of inter prediction to be used
         */
        export namespace Vp9ReferenceMode {
            export const $gtype: GObject.GType<Vp9ReferenceMode>;
        }

        enum Vp9ReferenceMode {
            /**
             * Indicates that all the inter blocks use only a single reference frame
             */
            SINGLE_REFERENCE,
            /**
             * Requires all the inter blocks to use compound mode
             */
            COMPOUND_REFERENCE,
            /**
             * Allows each individual inter block to select between single and compound prediction modes
             */
            SELECT,
        }
        /**
         * TxMode: Specifies how the transform size is determined
         */

        /**
         * TxMode: Specifies how the transform size is determined
         */
        export namespace Vp9TxMode {
            export const $gtype: GObject.GType<Vp9TxMode>;
        }

        enum Vp9TxMode {
            /**
             * Only 4x4
             */
            ONLY_4X4,
            /**
             * Allow 8x8
             */
            ALLOW_8X8,
            /**
             * Allow 16x16
             */
            ALLOW_16X16,
            /**
             * Allow 32x32
             */
            ALLOW_32X32,
            /**
             * The choice is specified explicitly for each block
             */
            SELECT,
        }
        /**
         * TxSize: Specifies the transform size
         */

        /**
         * TxSize: Specifies the transform size
         */
        export namespace Vp9TxSize {
            export const $gtype: GObject.GType<Vp9TxSize>;
        }

        enum Vp9TxSize {
            /**
             * 4x4
             */
            '4X4',
            /**
             * 8x8
             */
            '8X8',
            /**
             * 16x16
             */
            '16X16',
            /**
             * 32x32
             */
            '32X32',
        }
        const H264_DPB_MAX_SIZE: number;
        const H265_DPB_MAX_SIZE: number;
        /**
         * Number of contexts when decoding intra_mode
         */
        const VP9_BLOCK_SIZE_GROUPS: number;
        /**
         * Number of values for mv_classO_bit
         */
        const VP9_CLASS0_SIZE: number;
        /**
         * Number of contexts for comp_mode
         */
        const VP9_COMP_MODE_CONTEXTS: number;
        /**
         * Number of contexts for interp_filter
         */
        const VP9_INTERP_FILTER_CONTEXTS: number;
        /**
         * Number of values for inter_mode
         */
        const VP9_INTER_MODES: number;
        /**
         * Number of contexts for inter_mode
         */
        const VP9_INTER_MODE_CONTEXTS: number;
        /**
         * Number of values for intra_mode
         */
        const VP9_INTRA_MODES: number;
        /**
         * Number of contexts for interp_filter
         */
        const VP9_IS_INTER_CONTEXTS: number;
        /**
         * Number of values for mv_class
         */
        const VP9_MV_CLASSES: number;
        /**
         * Number of values that can be decoded for mv_fr
         */
        const VP9_MV_FR_SIZE: number;
        /**
         * Number of values for partition
         */
        const VP9_MV_JOINTS: number;
        /**
         * Maximum number of bits for decoding motion vectors
         */
        const VP9_MV_OFFSET_BITS: number;
        /**
         * Number of contexts when decoding partition
         */
        const VP9_PARTITION_CONTEXTS: number;
        /**
         * Number of values for partition
         */
        const VP9_PARTITION_TYPES: number;
        /**
         * Number of contexts for single_ref and comp_ref
         */
        const VP9_REF_CONTEXTS: number;
        /**
         * Index for loop filter segment feature
         */
        const VP9_SEG_LVL_ALT_L: number;
        /**
         * Index for quantizer segment feature
         */
        const VP9_SEG_LVL_ALT_Q: number;
        /**
         * Number of segment features
         */
        const VP9_SEG_LVL_MAX: number;
        /**
         * Index for reference frame segment feature
         */
        const VP9_SEG_LVL_REF_FRAME: number;
        /**
         * Index for skip segment feature
         */
        const VP9_SEG_SEG_LVL_SKIP: number;
        /**
         * Number of contexts for decoding skip
         */
        const VP9_SKIP_CONTEXTS: number;
        /**
         * Number of contexts for interp_filter
         */
        const VP9_SWITCHABLE_FILTERS: number;
        /**
         * Number of values for tx_mode
         */
        const VP9_TX_MODES: number;
        /**
         * Number of values for tx_size
         */
        const VP9_TX_SIZES: number;
        /**
         * Number of contexts for transform size
         */
        const VP9_TX_SIZE_CONTEXTS: number;
        /**
         * An implementation of "ac_q" function specified in
         * "8.6.1 Dequantization functions"
         * @param qindex the quantizer index
         * @param delta_q_ac a delta_q_ac value
         * @param bit_depth coded bit depth
         * @returns the quantizer value for the ac coefficient
         */
        function vp9_get_ac_quant(qindex: number, delta_q_ac: number, bit_depth: number): number;
        /**
         * An implementation of "dc_q" function specified in
         * "8.6.1 Dequantization functions"
         * @param qindex the quantizer index
         * @param delta_q_dc a delta_q_dc value
         * @param bit_depth coded bit depth
         * @returns the quantizer value for the dc coefficient
         */
        function vp9_get_dc_quant(qindex: number, delta_q_dc: number, bit_depth: number): number;
        /**
         * An implementation of "get_qindex" function specfied in
         * "8.6.1 Dequantization functions"
         * @param segmentation_params a #GstVp9SegmentationParams
         * @param quantization_params a #GstVp9QuantizationParams
         * @param segment_id a segment id
         * @returns the quantizer index
         */
        function vp9_get_qindex(
            segmentation_params: Vp9SegmentationParams,
            quantization_params: Vp9QuantizationParams,
            segment_id: number,
        ): number;
        /**
         * An implementation of "seg_feature_active" function specified in
         * "6.4.9 Segmentation feature active syntax"
         * @param params a #GstVp9SegmentationParams
         * @param segment_id a segment id
         * @param feature a segmentation feature
         * @returns %TRUE if feature is active
         */
        function vp9_seg_feature_active(params: Vp9SegmentationParams, segment_id: number, feature: number): boolean;
        module AV1Decoder {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
        }

        /**
         * The opaque #GstAV1Decoder data structure.
         */
        abstract class AV1Decoder extends GstVideo.VideoDecoder {
            static $gtype: GObject.GType<AV1Decoder>;

            // Constructors

            constructor(properties?: Partial<AV1Decoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Provides the tile data with tile group header and required raw
             * bitstream for subclass to decode it.
             * @param picture a #GstAV1Picture
             * @param tile a #GstAV1Tile
             */
            vfunc_decode_tile(picture: AV1Picture, tile: AV1Tile): Gst.FlowReturn;
            /**
             * Called when need to duplicate an existing #GstAV1Picture. As
             * duplicated key-frame will populate the DPB, this virtual
             * function is not optional.
             * @param frame the current #GstVideoCodecFrame
             * @param picture a #GstAV1Picture
             */
            vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): AV1Picture;
            /**
             * Optional. Called per one #GstAV1Picture to notify subclass to finish
             * decoding process for the #GstAV1Picture
             * @param picture a #GstAV1Picture
             */
            vfunc_end_picture(picture: AV1Picture): Gst.FlowReturn;
            /**
             * Optional. Called by baseclass to query whether delaying output is
             * preferred by subclass or not.
             * @param live whether upstream is live or not
             */
            vfunc_get_preferred_output_delay(live: boolean): number;
            /**
             * Optional. Called whenever new #GstAV1Picture is created.
             * Subclass can set implementation specific user data
             * on the #GstAV1Picture via gst_av1_picture_set_user_data
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstAV1Picture
             */
            vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
            /**
             * Called with a #GstAV1Picture which is required to be outputted.
             * The #GstVideoCodecFrame must be consumed by subclass.
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstAV1Picture
             */
            vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
            /**
             * Optional. Called per one #GstAV1Picture to notify subclass to prepare
             * decoding process for the #GstAV1Picture
             * @param picture a #GstAV1Picture
             * @param dpb a #GstAV1Dpb
             */
            vfunc_start_picture(picture: AV1Picture, dpb: AV1Dpb): Gst.FlowReturn;
        }

        module H264Decoder {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {
                compliance: H264DecoderCompliance;
            }
        }

        /**
         * The opaque #GstH264Decoder data structure.
         */
        abstract class H264Decoder extends GstVideo.VideoDecoder {
            static $gtype: GObject.GType<H264Decoder>;

            // Properties

            /**
             * The compliance controls the behavior of the decoder to handle some
             * subtle cases and contexts, such as the low-latency DPB bumping or
             * mapping the baseline profile as the constrained-baseline profile,
             * etc.
             */
            get compliance(): H264DecoderCompliance;
            set compliance(val: H264DecoderCompliance);

            // Constructors

            constructor(properties?: Partial<H264Decoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Provides per slice data with parsed slice header and required raw bitstream
             * for subclass to decode it. If gst_h264_decoder_set_process_ref_pic_lists()
             * is called with %TRUE by the subclass, `ref_pic_list0` and `ref_pic_list1`
             * are non-%NULL.
             * In case of interlaced stream, `ref_pic_list0` and `ref_pic_list1` will
             * contain only the first field of complementary reference field pair
             * if currently being decoded picture is a frame picture. Subclasses might
             * need to retrive the other field (i.e., the second field) of the picture
             * if needed.
             * @param picture a #GstH264Picture
             * @param slice a #GstH264Slice
             * @param ref_pic_list0 an array of #GstH264Picture pointers
             * @param ref_pic_list1 an array of #GstH264Picture pointers
             */
            vfunc_decode_slice(
                picture: H264Picture,
                slice: H264Slice,
                ref_pic_list0: H264Picture[],
                ref_pic_list1: H264Picture[],
            ): Gst.FlowReturn;
            /**
             * Optional. Called per one #GstH264Picture to notify subclass to finish
             * decoding process for the #GstH264Picture
             * @param picture a #GstH264Picture
             */
            vfunc_end_picture(picture: H264Picture): Gst.FlowReturn;
            /**
             * Optional. Called by baseclass to query whether delaying output is
             * preferred by subclass or not.
             * @param live whether upstream is live or not
             */
            vfunc_get_preferred_output_delay(live: boolean): number;
            /**
             * Called when a new field picture is created for interlaced field picture.
             * Subclass can attach implementation specific user data on `second_field` via
             * gst_h264_picture_set_user_data
             * @param first_field the first field #GstH264Picture already decoded
             * @param second_field a #GstH264Picture for the second field
             */
            vfunc_new_field_picture(first_field: H264Picture, second_field: H264Picture): Gst.FlowReturn;
            /**
             * Optional. Called whenever new #GstH264Picture is created.
             * Subclass can set implementation specific user data
             * on the #GstH264Picture via gst_h264_picture_set_user_data
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstH264Picture
             */
            vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
            /**
             * Called with a #GstH264Picture which is required to be outputted.
             * The #GstVideoCodecFrame must be consumed by subclass.
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstH264Picture
             */
            vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
            /**
             * Optional. Called per one #GstH264Picture to notify subclass to prepare
             * decoding process for the #GstH264Picture
             * @param picture a #GstH264Picture
             * @param slice a #GstH264Slice
             * @param dpb a #GstH264Dpb
             */
            vfunc_start_picture(picture: H264Picture, slice: H264Slice, dpb: H264Dpb): Gst.FlowReturn;

            // Methods

            /**
             * Retrive DPB and return a #GstH264Picture corresponding to
             * the `system_frame_number`
             * @param system_frame_number a target system frame number of #GstH264Picture
             * @returns a #GstH264Picture if successful, or %NULL otherwise
             */
            get_picture(system_frame_number: number): H264Picture | null;
            /**
             * Called to en/disable reference picture modification process.
             * @param process whether subclass is requiring reference picture modification process
             */
            set_process_ref_pic_lists(process: boolean): void;
        }

        module H265Decoder {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
        }

        /**
         * The opaque #GstH265Decoder data structure.
         */
        abstract class H265Decoder extends GstVideo.VideoDecoder {
            static $gtype: GObject.GType<H265Decoder>;

            // Constructors

            constructor(properties?: Partial<H265Decoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Provides per slice data with parsed slice header and required raw bitstream
             * for subclass to decode it. If gst_h265_decoder_set_process_ref_pic_lists()
             * is called with %TRUE by the subclass, `ref_pic_list0` and `ref_pic_list1`
             * are non-%NULL.
             * @param picture a #GstH265Picture
             * @param slice a #GstH265Slice
             * @param ref_pic_list0 an array of #GstH265Picture pointers
             * @param ref_pic_list1 an array of #GstH265Picture pointers
             */
            vfunc_decode_slice(
                picture: H265Picture,
                slice: H265Slice,
                ref_pic_list0: H265Picture[],
                ref_pic_list1: H265Picture[],
            ): Gst.FlowReturn;
            /**
             * Optional. Called per one #GstH265Picture to notify subclass to finish
             * decoding process for the #GstH265Picture
             * @param picture a #GstH265Picture
             */
            vfunc_end_picture(picture: H265Picture): Gst.FlowReturn;
            /**
             * Optional. Called by baseclass to query whether delaying output is
             * preferred by subclass or not.
             * @param live whether upstream is live or not
             */
            vfunc_get_preferred_output_delay(live: boolean): number;
            /**
             * Optional. Called whenever new #GstH265Picture is created.
             * Subclass can set implementation specific user data
             * on the #GstH265Picture via gst_h265_picture_set_user_data
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstH265Picture
             */
            vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
            vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
            /**
             * Optional. Called per one #GstH265Picture to notify subclass to prepare
             * decoding process for the #GstH265Picture
             * @param picture a #GstH265Picture
             * @param slice a #GstH265Slice
             * @param dpb a #GstH265Dpb
             */
            vfunc_start_picture(picture: H265Picture, slice: H265Slice, dpb: H265Dpb): Gst.FlowReturn;

            // Methods

            /**
             * Retrive DPB and return a #GstH265Picture corresponding to
             * the `system_frame_number`
             * @param system_frame_number a target system frame number of #GstH265Picture
             * @returns a #GstH265Picture if successful, or %NULL otherwise
             */
            get_picture(system_frame_number: number): H265Picture | null;
            /**
             * Called to en/disable reference picture modification process.
             * @param process whether subclass is requiring reference picture modification process
             */
            set_process_ref_pic_lists(process: boolean): void;
        }

        module Mpeg2Decoder {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
        }

        /**
         * The opaque #GstMpeg2Decoder data structure.
         */
        abstract class Mpeg2Decoder extends GstVideo.VideoDecoder {
            static $gtype: GObject.GType<Mpeg2Decoder>;

            // Constructors

            constructor(properties?: Partial<Mpeg2Decoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Provides per slice data with parsed slice header and required raw bitstream
             * for subclass to decode it.
             * @param picture a #GstMpeg2Picture
             * @param slice a #GstMpeg2Slice
             */
            vfunc_decode_slice(picture: Mpeg2Picture, slice: Mpeg2Slice): Gst.FlowReturn;
            /**
             * Optional. Called per one #GstMpeg2Picture to notify subclass to finish
             * decoding process for the #GstMpeg2Picture
             * @param picture a #GstMpeg2Picture
             */
            vfunc_end_picture(picture: Mpeg2Picture): Gst.FlowReturn;
            /**
             * Optional. Called by baseclass to query whether delaying output is
             * preferred by subclass or not.
             * @param is_live whether upstream is live or not
             */
            vfunc_get_preferred_output_delay(is_live: boolean): number;
            /**
             * Called when a new field picture is created for interlaced field picture.
             * Subclass can attach implementation specific user data on `second_field` via
             * gst_mpeg2_picture_set_user_data
             * @param first_field the first field #GstMpeg2Picture already decoded
             * @param second_field a #GstMpeg2Picture for the second field
             */
            vfunc_new_field_picture(first_field: Mpeg2Picture, second_field: Mpeg2Picture): Gst.FlowReturn;
            /**
             * Optional. Called whenever new #GstMpeg2Picture is created.
             * Subclass can set implementation specific user data
             * on the #GstMpeg2Picture via gst_mpeg2_picture_set_user_data
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstMpeg2Picture
             */
            vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
            /**
             * Called with a #GstMpeg2Picture which is required to be outputted.
             * The #GstVideoCodecFrame must be consumed by subclass.
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstMpeg2Picture
             */
            vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
            /**
             * Optional. Called per one #GstMpeg2Picture to notify subclass to prepare
             * decoding process for the #GstMpeg2Picture
             * @param picture a #GstMpeg2Picture
             * @param slice a #GstMpeg2Slice
             * @param prev_picture a #GstMpeg2Picture
             * @param next_picture a #GstMpeg2Picture
             */
            vfunc_start_picture(
                picture: Mpeg2Picture,
                slice: Mpeg2Slice,
                prev_picture: Mpeg2Picture,
                next_picture: Mpeg2Picture,
            ): Gst.FlowReturn;
        }

        module Vp8Decoder {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
        }

        /**
         * The opaque #GstVp8Decoder data structure.
         */
        abstract class Vp8Decoder extends GstVideo.VideoDecoder {
            static $gtype: GObject.GType<Vp8Decoder>;

            // Constructors

            constructor(properties?: Partial<Vp8Decoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Optional.
             *                     Called per one #GstVp8Picture to notify subclass to finish
             *                     decoding process for the #GstVp8Picture
             * @param picture
             */
            vfunc_end_picture(picture: Vp8Picture): Gst.FlowReturn;
            /**
             * Optional. Called by baseclass to query whether delaying output is
             * preferred by subclass or not.
             * @param is_live whether upstream is live or not
             */
            vfunc_get_preferred_output_delay(is_live: boolean): number;
            /**
             * Optional.
             *                     Called whenever new #GstVp8Picture is created.
             *                     Subclass can set implementation specific user data
             *                     on the #GstVp8Picture via gst_vp8_picture_set_user_data
             * @param frame
             * @param picture
             */
            vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
            /**
             * Called with a #GstVp8Picture which is required to be outputted.
             *                     Subclass can retrieve parent #GstVideoCodecFrame by using
             *                     gst_video_decoder_get_frame() with system_frame_number
             *                     and the #GstVideoCodecFrame must be consumed by subclass via
             *                     gst_video_decoder_{finish,drop,release}_frame().
             * @param frame
             * @param picture
             */
            vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
            /**
             * Optional.
             *                     Called per one #GstVp8Picture to notify subclass to prepare
             *                     decoding process for the #GstVp8Picture
             * @param picture
             */
            vfunc_start_picture(picture: Vp8Picture): Gst.FlowReturn;
        }

        module Vp9Decoder {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
        }

        /**
         * The opaque #GstVp9Decoder data structure.
         */
        abstract class Vp9Decoder extends GstVideo.VideoDecoder {
            static $gtype: GObject.GType<Vp9Decoder>;

            // Constructors

            constructor(properties?: Partial<Vp9Decoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Called to notify decoding for subclass to decoder given `picture` with
             * given `dpb`
             * @param picture a #GstVp9Picture to decoder
             * @param dpb a #GstVp9Dpb
             */
            vfunc_decode_picture(picture: Vp9Picture, dpb: Vp9Dpb): Gst.FlowReturn;
            /**
             * Optional. Called to duplicate `picture` when show_existing_frame flag is set
             * in the parsed vp9 frame header. Returned #GstVp9Picture from this method
             * should hold already decoded picture data corresponding to the `picture,`
             * since the returned #GstVp9Picture from this method will be passed to
             * the output_picture method immediately without additional decoding process.
             *
             * If this method is not implemented by subclass, baseclass will drop
             * current #GstVideoCodecFrame without additional processing for the current
             * frame.
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstVp9Picture to be duplicated
             */
            vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Vp9Picture | null;
            /**
             * Optional. Called per one #GstVp9Picture to notify subclass to finish
             * decoding process for the #GstVp9Picture
             * @param picture a #GstVp9Picture
             */
            vfunc_end_picture(picture: Vp9Picture): Gst.FlowReturn;
            /**
             * Optional. Retrieve the preferred output delay from child classes.
             * controls how many frames to delay when calling
             * GstVp9DecoderClass::output_picture
             * @param is_live whether upstream is live or not
             */
            vfunc_get_preferred_output_delay(is_live: boolean): number;
            /**
             * Optional. Called whenever new #GstVp9Picture is created.
             * Subclass can set implementation specific user data on the #GstVp9Picture
             * via gst_vp9_picture_set_user_data
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstVp9Picture
             */
            vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
            /**
             * Notifies subclass of video sequence update such as resolution, bitdepth,
             * profile.
             * @param frame_hdr a #GstVp9FrameHeader
             * @param max_dpb_size the size of dpb including preferred output delay   by subclass reported via get_preferred_output_delay method.
             */
            vfunc_new_sequence(frame_hdr: Vp9FrameHeader, max_dpb_size: number): Gst.FlowReturn;
            /**
             * Called to notify `picture` is ready to be outputted.
             * @param frame a #GstVideoCodecFrame
             * @param picture a #GstVp9Picture
             */
            vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
            /**
             * Optional. Called to notify subclass to prepare decoding process for
             * `picture`
             * @param picture a #GstVp9Picture
             */
            vfunc_start_picture(picture: Vp9Picture): Gst.FlowReturn;

            // Methods

            /**
             * Called to set non-keyframe format change awareness
             * @param support whether subclass can support non-keyframe format change
             */
            set_non_keyframe_format_change_support(support: boolean): void;
        }

        type AV1DecoderClass = typeof AV1Decoder;
        abstract class AV1DecoderPrivate {
            static $gtype: GObject.GType<AV1DecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class AV1Dpb {
            static $gtype: GObject.GType<AV1Dpb>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Store the `picture`
             * @param picture a #GstAV1Picture
             */
            add(picture: AV1Picture): void;
            /**
             * Clear all stored #GstAV1Picture
             */
            clear(): void;
            /**
             * Free the `dpb`
             */
            free(): void;
        }

        class AV1Picture {
            static $gtype: GObject.GType<AV1Picture>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): AV1Picture;
        }

        class AV1Tile {
            static $gtype: GObject.GType<AV1Tile>;

            // Constructors

            constructor(
                properties?: Partial<{
                    tile_group: unknown;
                    obu: unknown;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Base struct for coded picture representation
         */
        class CodecPicture {
            static $gtype: GObject.GType<CodecPicture>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets private data set on the picture via
             * gst_codec_picture_set_user_data() previously.
             * @returns The previously set user_data
             */
            get_user_data(): any | null;
            /**
             * Sets `discont_state` to `picture`
             * @param discont_state a #GstVideoCodecState
             */
            set_discont_state(discont_state?: GstVideo.VideoCodecState | null): void;
            /**
             * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
             * the picture is freed.
             *
             * If a `user_data` was previously set, then the previous set `notify` will be called
             * before the `user_data` is replaced.
             * @param notify a #GDestroyNotify
             */
            set_user_data(notify: GLib.DestroyNotify): void;
        }

        type H264DecoderClass = typeof H264Decoder;
        abstract class H264DecoderPrivate {
            static $gtype: GObject.GType<H264DecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class H264Dpb {
            static $gtype: GObject.GType<H264Dpb>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Store the `picture`
             * @param picture a #GstH264Picture
             */
            add(picture: H264Picture): void;
            /**
             * Perform bumping process as defined in C.4.5.3 "Bumping" process.
             * If `drain` is %TRUE, `dpb` will remove a #GstH264Picture from internal array
             * so that returned #GstH264Picture could hold the last reference of it
             * @param drain whether draining or not
             * @returns a #GstH264Picture which is needed to be outputted
             */
            bump(drain: boolean): H264Picture | null;
            /**
             * Clear all stored #GstH264Picture
             */
            clear(): void;
            /**
             * Delete already outputted and not referenced all pictures from dpb
             */
            delete_unused(): void;
            /**
             * Free the `dpb`
             */
            free(): void;
            get_interlaced(): boolean;
            /**
             * Find a long term reference picture which has matching long term picture number
             * @param long_term_pic_num a long term picture number
             * @returns a #GstH264Picture
             */
            get_long_ref_by_long_term_pic_num(long_term_pic_num: number): H264Picture | null;
            /**
             * Find a short term reference picture which has the lowest frame_num_wrap
             * @returns a #GstH264Picture
             */
            get_lowest_frame_num_short_ref(): H264Picture | null;
            get_max_num_frames(): number;
            get_max_num_reorder_frames(): number;
            get_picture(system_frame_number: number): H264Picture | null;
            get_pictures_all(): H264Picture[];
            /**
             * Retrieve all long-term reference pictures from `dpb`. The picture will be
             * appended to the array.
             * @param include_second_field %TRUE if the second field pictures need to be included
             */
            get_pictures_long_term_ref(include_second_field: boolean): H264Picture[];
            /**
             * Retrieve all short-term reference pictures from `dpb`. The picture will be
             * appended to the array.
             * @param include_non_existing %TRUE if non-existing pictures need to be included
             * @param include_second_field %TRUE if the second field pictures need to be included
             */
            get_pictures_short_term_ref(include_non_existing: boolean, include_second_field: boolean): H264Picture[];
            /**
             * Find a short term reference picture which has matching picture number
             * @param pic_num a picture number
             * @returns a #GstH264Picture
             */
            get_short_ref_by_pic_num(pic_num: number): H264Picture | null;
            get_size(): number;
            has_empty_frame_buffer(): boolean;
            /**
             * Mark all pictures are not referenced
             */
            mark_all_non_ref(): void;
            needs_bump(to_insert: H264Picture, latency_mode: H264DpbBumpMode): boolean;
            num_ref_frames(): number;
            set_interlaced(interlaced: boolean): void;
            /**
             * Notify the DPB that `picture` is output directly without storing
             * in the DPB.
             * @param picture a #GstH264Picture of the last output.
             */
            set_last_output(picture: H264Picture): void;
            /**
             * Set the number of maximum allowed frames to store
             * @param max_num_frames the maximum number of picture
             */
            set_max_num_frames(max_num_frames: number): void;
            set_max_num_reorder_frames(max_num_reorder_frames: number): void;
        }

        class H264Picture {
            static $gtype: GObject.GType<H264Picture>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): H264Picture;
        }

        class H264Slice {
            static $gtype: GObject.GType<H264Slice>;

            // Constructors

            constructor(
                properties?: Partial<{
                    header: unknown;
                    nalu: unknown;
                }>,
            );
            _init(...args: any[]): void;
        }

        type H265DecoderClass = typeof H265Decoder;
        abstract class H265DecoderPrivate {
            static $gtype: GObject.GType<H265DecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class H265Dpb {
            static $gtype: GObject.GType<H265Dpb>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Store the `picture` and perform increase pic_latency_cnt as defined in
             * "C.5.2.3 Additional bumping" process
             * @param picture a #GstH265Picture
             */
            add(picture: H265Picture): void;
            /**
             * Perform bumping process as defined in C.5.2.4 "Bumping" process.
             * If `drain` is %TRUE, `dpb` will remove a #GstH265Picture from internal array
             * so that returned #GstH265Picture could hold the last reference of it
             * @param drain whether draining or not
             * @returns a #GstH265Picture which is needed to be outputted
             */
            bump(drain: boolean): H265Picture | null;
            /**
             * Clear all stored #GstH265Picture
             */
            clear(): void;
            /**
             * Delete not needed for output and not referenced all pictures from dpb
             */
            delete_unused(): void;
            /**
             * Free the `dpb`
             */
            free(): void;
            /**
             * Find a long term reference picture which has matching poc
             * @param poc a picture order count
             * @returns a #GstH265Picture
             */
            get_long_ref_by_poc(poc: number): H265Picture | null;
            get_max_num_pics(): number;
            get_picture(system_frame_number: number): H265Picture | null;
            get_pictures_all(): H265Picture[];
            /**
             * Find a short or long term reference picture which has matching poc
             * @param poc a picture order count
             * @returns a #GstH265Picture
             */
            get_ref_by_poc(poc: number): H265Picture | null;
            /**
             * Find a short or long term reference picture which has matching poc_lsb
             * @param poc_lsb a picture order count lsb
             * @returns a #GstH265Picture
             */
            get_ref_by_poc_lsb(poc_lsb: number): H265Picture | null;
            /**
             * Find a short term reference picture which has matching poc
             * @param poc a picture order count
             * @returns a #GstH265Picture
             */
            get_short_ref_by_poc(poc: number): H265Picture | null;
            get_size(): number;
            /**
             * Mark all pictures are not referenced
             */
            mark_all_non_ref(): void;
            needs_bump(
                max_num_reorder_pics: number,
                max_latency_increase: number,
                max_dec_pic_buffering: number,
            ): boolean;
            num_ref_pictures(): number;
            /**
             * Set the number of maximum allowed pictures to store
             * @param max_num_pics the maximum number of picture
             */
            set_max_num_pics(max_num_pics: number): void;
        }

        class H265Picture {
            static $gtype: GObject.GType<H265Picture>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): H265Picture;
        }

        class H265Slice {
            static $gtype: GObject.GType<H265Slice>;

            // Constructors

            constructor(
                properties?: Partial<{
                    header: unknown;
                    nalu: unknown;
                }>,
            );
            _init(...args: any[]): void;
        }

        type Mpeg2DecoderClass = typeof Mpeg2Decoder;
        abstract class Mpeg2DecoderPrivate {
            static $gtype: GObject.GType<Mpeg2DecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class Mpeg2Dpb {
            static $gtype: GObject.GType<Mpeg2Dpb>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Store the `picture`
             * @param picture a #GstMpeg2Picture
             */
            add(picture: Mpeg2Picture): void;
            bump(): Mpeg2Picture | null;
            /**
             * Clear all stored #GstMpeg2Picture
             */
            clear(): void;
            /**
             * Free the `dpb`
             */
            free(): void;
            /**
             * Gets the neighbours #GstMpeg2Picture of `picture` in `dpb`.
             * @param picture current #GstMpeg2Picture
             */
            get_neighbours(picture: Mpeg2Picture): [Mpeg2Picture | null, Mpeg2Picture | null];
            /**
             * Checks if `dbp` has a new picture.
             * @returns #TRUE if @dpb needs to be bumped; otherwise, #FALSE
             */
            need_bump(): boolean;
        }

        class Mpeg2Picture {
            static $gtype: GObject.GType<Mpeg2Picture>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): Mpeg2Picture;
        }

        class Mpeg2Slice {
            static $gtype: GObject.GType<Mpeg2Slice>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;
        }

        type Vp8DecoderClass = typeof Vp8Decoder;
        abstract class Vp8DecoderPrivate {
            static $gtype: GObject.GType<Vp8DecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Vp8Picture {
            static $gtype: GObject.GType<Vp8Picture>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): Vp8Picture;
        }

        type Vp9DecoderClass = typeof Vp9Decoder;
        abstract class Vp9DecoderPrivate {
            static $gtype: GObject.GType<Vp9DecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Stores probabilities updates. This is from the spec
         * and can be used as a binary.
         */
        class Vp9DeltaProbabilities {
            static $gtype: GObject.GType<Vp9DeltaProbabilities>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;
        }

        class Vp9Dpb {
            static $gtype: GObject.GType<Vp9Dpb>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Store the `picture`
             * @param picture a #GstVp9Picture
             */
            add(picture: Vp9Picture): void;
            /**
             * Clear all stored #GstVp9Picture
             */
            clear(): void;
            /**
             * Free the `dpb`
             */
            free(): void;
        }

        class Vp9FrameHeader {
            static $gtype: GObject.GType<Vp9FrameHeader>;

            // Fields

            profile: number;
            bit_depth: number;
            subsampling_x: number;
            subsampling_y: number;
            color_space: number;
            color_range: number;
            show_existing_frame: number;
            frame_to_show_map_idx: number;
            frame_type: number;
            show_frame: number;
            error_resilient_mode: number;
            width: number;
            height: number;
            render_and_frame_size_different: number;
            render_width: number;
            render_height: number;
            intra_only: number;
            reset_frame_context: number;
            refresh_frame_flags: number;
            ref_frame_idx: Uint8Array;
            ref_frame_sign_bias: Uint8Array;
            allow_high_precision_mv: number;
            interpolation_filter: number;
            refresh_frame_context: number;
            frame_parallel_decoding_mode: number;
            frame_context_idx: number;
            loop_filter_params: Vp9LoopFilterParams;
            quantization_params: Vp9QuantizationParams;
            segmentation_params: Vp9SegmentationParams;
            tile_cols_log2: number;
            tile_rows_log2: number;
            header_size_in_bytes: number;
            tx_mode: Vp9TxMode;
            reference_mode: Vp9ReferenceMode;
            lossless_flag: number;
            frame_header_length_in_bytes: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Loop filter params. See "6.2.8 Loop filter params syntax" and
         * "7.2.8 Loop filter semantics".
         *
         * If syntax elements for `update_ref_delta`
         * and/or `loop_filter_mode_deltas` are not present in bitstream,
         * parser will fill `loop_filter_ref_deltas` and `loop_filter_mode_deltas` values
         * by using previously parsed values.
         */
        class Vp9LoopFilterParams {
            static $gtype: GObject.GType<Vp9LoopFilterParams>;

            // Fields

            loop_filter_level: number;
            loop_filter_sharpness: number;
            loop_filter_delta_enabled: number;
            loop_filter_delta_update: number;
            update_ref_delta: Uint8Array;
            loop_filter_ref_deltas: Uint8Array;
            update_mode_delta: Uint8Array;
            loop_filter_mode_deltas: Uint8Array;

            // Constructors

            constructor(
                properties?: Partial<{
                    loop_filter_level: number;
                    loop_filter_sharpness: number;
                    loop_filter_delta_enabled: number;
                    loop_filter_delta_update: number;
                    update_ref_delta: Uint8Array;
                    loop_filter_ref_deltas: Uint8Array;
                    update_mode_delta: Uint8Array;
                    loop_filter_mode_deltas: Uint8Array;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Stores motion vectors probabilities updates. This is from the spec
         * and can be used as a binary.
         */
        class Vp9MvDeltaProbs {
            static $gtype: GObject.GType<Vp9MvDeltaProbs>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;
        }

        class Vp9Picture {
            static $gtype: GObject.GType<Vp9Picture>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): Vp9Picture;
        }

        class Vp9QuantizationParams {
            static $gtype: GObject.GType<Vp9QuantizationParams>;

            // Fields

            base_q_idx: number;
            delta_q_y_dc: number;
            delta_q_uv_dc: number;
            delta_q_uv_ac: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    base_q_idx: number;
                    delta_q_y_dc: number;
                    delta_q_uv_dc: number;
                    delta_q_uv_ac: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * See "6.2.11 Segmentation params syntax" and
         * "7.2.10 Segmentation params syntax". When `segmentation_update_data` is equal
         * to zero, parser will fill `feature_enabled` and by `feature_data`
         * using previously parsed values.
         */
        class Vp9SegmentationParams {
            static $gtype: GObject.GType<Vp9SegmentationParams>;

            // Fields

            segmentation_enabled: number;
            segmentation_update_map: number;
            segmentation_tree_probs: Uint8Array;
            segmentation_pred_prob: Uint8Array;
            segmentation_temporal_update: number;
            segmentation_update_data: number;
            segmentation_abs_or_delta_update: number;
            feature_enabled: Uint8Array;
            feature_data: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    segmentation_enabled: number;
                    segmentation_update_map: number;
                    segmentation_tree_probs: Uint8Array;
                    segmentation_pred_prob: Uint8Array;
                    segmentation_temporal_update: number;
                    segmentation_update_data: number;
                    segmentation_abs_or_delta_update: number;
                    feature_enabled: Uint8Array;
                    feature_data: number[];
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * This object is used to parse VP9 bitstream header.
         */
        class Vp9StatefulParser {
            static $gtype: GObject.GType<Vp9StatefulParser>;

            // Fields

            reference: any[];

            // Constructors

            constructor(
                properties?: Partial<{
                    reference: any[];
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Frees `parser`.
             */
            free(): void;
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

    export default GstCodecs;
}

declare module 'gi://GstCodecs' {
    import GstCodecs10 from 'gi://GstCodecs?version=1.0';
    export default GstCodecs10;
}
// END
