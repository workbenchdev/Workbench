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

declare module 'gi://GstRtp?version=1.0' {
    // Module dependencies
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstRtp {
        /**
         * GstRtp-1.0
         */

        /**
         * Different types of feedback messages.
         */

        /**
         * Different types of feedback messages.
         */
        export namespace RTCPFBType {
            export const $gtype: GObject.GType<RTCPFBType>;
        }

        enum RTCPFBType {
            /**
             * Invalid type
             */
            FB_TYPE_INVALID,
            /**
             * Generic NACK
             */
            RTPFB_TYPE_NACK,
            /**
             * Temporary Maximum Media Stream Bit Rate Request
             */
            RTPFB_TYPE_TMMBR,
            /**
             * Temporary Maximum Media Stream Bit Rate
             *    Notification
             */
            RTPFB_TYPE_TMMBN,
            /**
             * Request an SR packet for early
             *    synchronization
             */
            RTPFB_TYPE_RTCP_SR_REQ,
            RTPFB_TYPE_TWCC,
            /**
             * Picture Loss Indication
             */
            PSFB_TYPE_PLI,
            /**
             * Slice Loss Indication
             */
            PSFB_TYPE_SLI,
            /**
             * Reference Picture Selection Indication
             */
            PSFB_TYPE_RPSI,
            /**
             * Application layer Feedback
             */
            PSFB_TYPE_AFB,
            /**
             * Full Intra Request Command
             */
            PSFB_TYPE_FIR,
            /**
             * Temporal-Spatial Trade-off Request
             */
            PSFB_TYPE_TSTR,
            /**
             * Temporal-Spatial Trade-off Notification
             */
            PSFB_TYPE_TSTN,
            /**
             * Video Back Channel Message
             */
            PSFB_TYPE_VBCN,
        }
        /**
         * Different types of SDES content.
         */

        /**
         * Different types of SDES content.
         */
        export namespace RTCPSDESType {
            export const $gtype: GObject.GType<RTCPSDESType>;
        }

        enum RTCPSDESType {
            /**
             * Invalid SDES entry
             */
            INVALID,
            /**
             * End of SDES list
             */
            END,
            /**
             * Canonical name
             */
            CNAME,
            /**
             * User name
             */
            NAME,
            /**
             * User's electronic mail address
             */
            EMAIL,
            /**
             * User's phone number
             */
            PHONE,
            /**
             * Geographic user location
             */
            LOC,
            /**
             * Name of application or tool
             */
            TOOL,
            /**
             * Notice about the source
             */
            NOTE,
            /**
             * Private extensions
             */
            PRIV,
            /**
             * H.323 callable address
             */
            H323_CADDR,
            /**
             * Application Specific Identifier (RFC6776)
             */
            APSI,
            /**
             * Reporting Group Identifier (RFC8861)
             */
            RGRP,
            /**
             * RtpStreamId SDES item (RFC8852).
             */
            RTP_STREAM_ID,
            /**
             * RepairedRtpStreamId SDES item (RFC8852).
             */
            REPAIRED_RTP_STREAM_ID,
            /**
             * CLUE CaptId (RFC8849)
             */
            CCID,
            /**
             * MID SDES item (RFC8843).
             */
            MID,
        }
        /**
         * Different RTCP packet types.
         */

        /**
         * Different RTCP packet types.
         */
        export namespace RTCPType {
            export const $gtype: GObject.GType<RTCPType>;
        }

        enum RTCPType {
            /**
             * Invalid type
             */
            INVALID,
            /**
             * Sender report
             */
            SR,
            /**
             * Receiver report
             */
            RR,
            /**
             * Source description
             */
            SDES,
            /**
             * Goodbye
             */
            BYE,
            /**
             * Application defined
             */
            APP,
            /**
             * Transport layer feedback.
             */
            RTPFB,
            /**
             * Payload-specific feedback.
             */
            PSFB,
            /**
             * Extended report.
             */
            XR,
        }
        /**
         * Types of RTCP Extended Reports, those are defined in RFC 3611 and other RFCs
         * according to the [IANA registry](https://www.iana.org/assignments/rtcp-xr-block-types/rtcp-xr-block-types.xhtml).
         */

        /**
         * Types of RTCP Extended Reports, those are defined in RFC 3611 and other RFCs
         * according to the [IANA registry](https://www.iana.org/assignments/rtcp-xr-block-types/rtcp-xr-block-types.xhtml).
         */
        export namespace RTCPXRType {
            export const $gtype: GObject.GType<RTCPXRType>;
        }

        enum RTCPXRType {
            /**
             * Invalid XR Report Block
             */
            INVALID,
            /**
             * Loss RLE Report Block
             */
            LRLE,
            /**
             * Duplicate RLE Report Block
             */
            DRLE,
            /**
             * Packet Receipt Times Report Block
             */
            PRT,
            /**
             * Receiver Reference Time Report Block
             */
            RRT,
            /**
             * Delay since the last Receiver Report
             */
            DLRR,
            /**
             * Statistics Summary Report Block
             */
            SSUMM,
            /**
             * VoIP Metrics Report Block
             */
            VOIP_METRICS,
        }
        /**
         * Standard predefined fixed payload types.
         *
         * The official list is at:
         * http://www.iana.org/assignments/rtp-parameters
         *
         * Audio:
         * reserved: 19
         * unassigned: 20-23,
         *
         * Video:
         * unassigned: 24, 27, 29, 30, 35-71, 77-95
         * Reserved for RTCP conflict avoidance: 72-76
         */
        /**
         * Standard predefined fixed payload types.
         *
         * The official list is at:
         * http://www.iana.org/assignments/rtp-parameters
         *
         * Audio:
         * reserved: 19
         * unassigned: 20-23,
         *
         * Video:
         * unassigned: 24, 27, 29, 30, 35-71, 77-95
         * Reserved for RTCP conflict avoidance: 72-76
         */
        class RTPPayload {
            static $gtype: GObject.GType<RTPPayload>;

            // Static fields

            /**
             * ITU-T G.711. mu-law audio (RFC 3551)
             */
            static PCMU: number;
            /**
             * RFC 3551 says reserved
             */
            static '1016': number;
            /**
             * RFC 3551 says reserved
             */
            static G721: number;
            /**
             * GSM audio
             */
            static GSM: number;
            /**
             * ITU G.723.1 audio
             */
            static G723: number;
            /**
             * IMA ADPCM wave type (RFC 3551)
             */
            static DVI4_8000: number;
            /**
             * IMA ADPCM wave type (RFC 3551)
             */
            static DVI4_16000: number;
            /**
             * experimental linear predictive encoding
             */
            static LPC: number;
            /**
             * ITU-T G.711 A-law audio (RFC 3551)
             */
            static PCMA: number;
            /**
             * ITU-T G.722 (RFC 3551)
             */
            static G722: number;
            /**
             * stereo PCM
             */
            static L16_STEREO: number;
            /**
             * mono PCM
             */
            static L16_MONO: number;
            /**
             * EIA & TIA standard IS-733
             */
            static QCELP: number;
            /**
             * Comfort Noise (RFC 3389)
             */
            static CN: number;
            /**
             * Audio MPEG 1-3.
             */
            static MPA: number;
            /**
             * ITU-T G.728 Speech coder (RFC 3551)
             */
            static G728: number;
            /**
             * IMA ADPCM wave type (RFC 3551)
             */
            static DVI4_11025: number;
            /**
             * IMA ADPCM wave type (RFC 3551)
             */
            static DVI4_22050: number;
            /**
             * ITU-T G.729 Speech coder (RFC 3551)
             */
            static G729: number;
            /**
             * See RFC 2029
             */
            static CELLB: number;
            /**
             * ISO Standards 10918-1 and 10918-2 (RFC 2435)
             */
            static JPEG: number;
            /**
             * nv encoding by Ron Frederick
             */
            static NV: number;
            /**
             * ITU-T Recommendation H.261 (RFC 2032)
             */
            static H261: number;
            /**
             * Video MPEG 1 & 2 (RFC 2250)
             */
            static MPV: number;
            /**
             * MPEG-2 transport stream (RFC 2250)
             */
            static MP2T: number;
            /**
             * Video H263 (RFC 2190)
             */
            static H263: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The transfer profile to use.
         */

        /**
         * The transfer profile to use.
         */
        export namespace RTPProfile {
            export const $gtype: GObject.GType<RTPProfile>;
        }

        enum RTPProfile {
            /**
             * invalid profile
             */
            UNKNOWN,
            /**
             * the Audio/Visual profile (RFC 3551)
             */
            AVP,
            /**
             * the secure Audio/Visual profile (RFC 3711)
             */
            SAVP,
            /**
             * the Audio/Visual profile with feedback (RFC 4585)
             */
            AVPF,
            /**
             * the secure Audio/Visual profile with feedback (RFC 5124)
             */
            SAVPF,
        }
        /**
         * The maximum amount of SSRCs in a BYE packet.
         */
        const RTCP_MAX_BYE_SSRC_COUNT: number;
        /**
         * The maximum amount of Receiver report blocks in RR and SR messages.
         */
        const RTCP_MAX_RB_COUNT: number;
        /**
         * The maximum text length for an SDES item.
         */
        const RTCP_MAX_SDES: number;
        /**
         * The maximum amount of SDES items.
         */
        const RTCP_MAX_SDES_ITEM_COUNT: number;
        /**
         * Mask for version and packet type pair allowing reduced size
         * packets, basically it accepts other types than RR and SR
         */
        const RTCP_REDUCED_SIZE_VALID_MASK: number;
        /**
         * Mask for version, padding bit and packet type pair
         */
        const RTCP_VALID_MASK: number;
        /**
         * Valid value for the first two bytes of an RTCP packet after applying
         * #GST_RTCP_VALID_MASK to them.
         */
        const RTCP_VALID_VALUE: number;
        /**
         * The supported RTCP version 2.
         */
        const RTCP_VERSION: number;
        const RTP_HDREXT_BASE: string;
        /**
         * Constant string used in element classification to signal that this element
         * is a RTP header extension.
         */
        const RTP_HDREXT_ELEMENT_CLASS: string;
        const RTP_HDREXT_NTP_56: string;
        const RTP_HDREXT_NTP_56_SIZE: number;
        const RTP_HDREXT_NTP_64: string;
        const RTP_HDREXT_NTP_64_SIZE: number;
        const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string;
        const RTP_PAYLOAD_1016_STRING: string;
        const RTP_PAYLOAD_CELLB_STRING: string;
        const RTP_PAYLOAD_CN_STRING: string;
        const RTP_PAYLOAD_DVI4_11025_STRING: string;
        const RTP_PAYLOAD_DVI4_16000_STRING: string;
        const RTP_PAYLOAD_DVI4_22050_STRING: string;
        const RTP_PAYLOAD_DVI4_8000_STRING: string;
        const RTP_PAYLOAD_DYNAMIC_STRING: string;
        const RTP_PAYLOAD_G721_STRING: string;
        const RTP_PAYLOAD_G722_STRING: string;
        const RTP_PAYLOAD_G723_53: number;
        const RTP_PAYLOAD_G723_53_STRING: string;
        const RTP_PAYLOAD_G723_63: number;
        const RTP_PAYLOAD_G723_63_STRING: string;
        const RTP_PAYLOAD_G723_STRING: string;
        const RTP_PAYLOAD_G728_STRING: string;
        const RTP_PAYLOAD_G729_STRING: string;
        const RTP_PAYLOAD_GSM_STRING: string;
        const RTP_PAYLOAD_H261_STRING: string;
        const RTP_PAYLOAD_H263_STRING: string;
        const RTP_PAYLOAD_JPEG_STRING: string;
        const RTP_PAYLOAD_L16_MONO_STRING: string;
        const RTP_PAYLOAD_L16_STEREO_STRING: string;
        const RTP_PAYLOAD_LPC_STRING: string;
        const RTP_PAYLOAD_MP2T_STRING: string;
        const RTP_PAYLOAD_MPA_STRING: string;
        const RTP_PAYLOAD_MPV_STRING: string;
        const RTP_PAYLOAD_NV_STRING: string;
        const RTP_PAYLOAD_PCMA_STRING: string;
        const RTP_PAYLOAD_PCMU_STRING: string;
        const RTP_PAYLOAD_QCELP_STRING: string;
        const RTP_PAYLOAD_TS41: number;
        const RTP_PAYLOAD_TS41_STRING: string;
        const RTP_PAYLOAD_TS48: number;
        const RTP_PAYLOAD_TS48_STRING: string;
        const RTP_SOURCE_META_MAX_CSRC_COUNT: number;
        /**
         * The supported RTP version 2.
         */
        const RTP_VERSION: number;
        /**
         * Attaches RTP source information to `buffer`.
         * @param buffer a #GstBuffer
         * @param ssrc pointer to the SSRC
         * @param csrc pointer to the CSRCs
         * @returns the #GstRTPSourceMeta on @buffer.
         */
        function buffer_add_rtp_source_meta(
            buffer: Gst.Buffer,
            ssrc?: number | null,
            csrc?: number[] | null,
        ): RTPSourceMeta;
        /**
         * Find the #GstRTPSourceMeta on `buffer`.
         * @param buffer a #GstBuffer
         * @returns the #GstRTPSourceMeta or %NULL when there is no such metadata on @buffer.
         */
        function buffer_get_rtp_source_meta(buffer: Gst.Buffer): RTPSourceMeta | null;
        /**
         * Open `buffer` for reading or writing, depending on `flags`. The resulting RTCP
         * buffer state is stored in `rtcp`.
         * @param buffer a buffer with an RTCP packet
         * @param flags flags for the mapping
         * @param rtcp resulting #GstRTCPBuffer
         */
        function rtcp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
        /**
         * Create a new buffer for constructing RTCP packets. The packet will have a
         * maximum size of `mtu`.
         * @param mtu the maximum mtu size.
         * @returns A newly allocated buffer.
         */
        function rtcp_buffer_new(mtu: number): Gst.Buffer;
        /**
         * Create a new buffer and set the data to a copy of `len`
         * bytes of `data` and the size to `len`. The data will be freed when the buffer
         * is freed.
         * @param data data for the new buffer
         * @returns A newly allocated buffer with a copy of @data and of size @len.
         */
        function rtcp_buffer_new_copy_data(data: Uint8Array | string): Gst.Buffer;
        /**
         * Create a new buffer and set the data and size of the buffer to `data` and `len`
         * respectively. `data` will be freed when the buffer is unreffed, so this
         * function transfers ownership of `data` to the new buffer.
         * @param data data for the new buffer
         * @returns A newly allocated buffer with @data and of size @len.
         */
        function rtcp_buffer_new_take_data(data: Uint8Array | string): Gst.Buffer;
        /**
         * Check if the data pointed to by `buffer` is a valid RTCP packet using
         * gst_rtcp_buffer_validate_data().
         * @param buffer the buffer to validate
         * @returns TRUE if @buffer is a valid RTCP packet.
         */
        function rtcp_buffer_validate(buffer: Gst.Buffer): boolean;
        /**
         * Check if the `data` and `size` point to the data of a valid compound,
         * non-reduced size RTCP packet.
         * Use this function to validate a packet before using the other functions in
         * this module.
         * @param data the data to validate
         * @returns TRUE if the data points to a valid RTCP packet.
         */
        function rtcp_buffer_validate_data(data: Uint8Array | string): boolean;
        /**
         * Check if the `data` and `size` point to the data of a valid RTCP packet.
         * Use this function to validate a packet before using the other functions in
         * this module.
         *
         * This function is updated to support reduced size rtcp packets according to
         * RFC 5506 and will validate full compound RTCP packets as well as reduced
         * size RTCP packets.
         * @param data the data to validate
         * @returns TRUE if the data points to a valid RTCP packet.
         */
        function rtcp_buffer_validate_data_reduced(data: Uint8Array | string): boolean;
        /**
         * Check if the data pointed to by `buffer` is a valid RTCP packet using
         * gst_rtcp_buffer_validate_reduced().
         * @param buffer the buffer to validate
         * @returns TRUE if @buffer is a valid RTCP packet.
         */
        function rtcp_buffer_validate_reduced(buffer: Gst.Buffer): boolean;
        /**
         * Converts an NTP time to UNIX nanoseconds. `ntptime` can typically be
         * the NTP time of an SR RTCP message and contains, in the upper 32 bits, the
         * number of seconds since 1900 and, in the lower 32 bits, the fractional
         * seconds. The resulting value will be the number of nanoseconds since 1970.
         * @param ntptime an NTP timestamp
         * @returns the UNIX time for @ntptime in nanoseconds.
         */
        function rtcp_ntp_to_unix(ntptime: number): number;
        /**
         * Convert `name` into a `GstRTCPSDESType`. `name` is typically a key in a
         * #GstStructure containing SDES items.
         * @param name a SDES name
         * @returns the #GstRTCPSDESType for @name or #GST_RTCP_SDES_PRIV when @name is a private sdes item.
         */
        function rtcp_sdes_name_to_type(name: string): RTCPSDESType;
        /**
         * Converts `type` to the string equivalent. The string is typically used as a
         * key in a #GstStructure containing SDES items.
         * @param type a #GstRTCPSDESType
         * @returns the string equivalent of @type
         */
        function rtcp_sdes_type_to_name(type: RTCPSDESType): string;
        /**
         * Converts a UNIX timestamp in nanoseconds to an NTP time. The caller should
         * pass a value with nanoseconds since 1970. The NTP time will, in the upper
         * 32 bits, contain the number of seconds since 1900 and, in the lower 32
         * bits, the fractional seconds. The resulting value can be used as an ntptime
         * for constructing SR RTCP packets.
         * @param unixtime an UNIX timestamp in nanoseconds
         * @returns the NTP time for @unixtime.
         */
        function rtcp_unix_to_ntp(unixtime: number): number;
        /**
         * Allocate enough data in `buffer` to hold an RTP packet with `csrc_count` CSRCs,
         * a payload length of `payload_len` and padding of `pad_len`.
         * `buffer` must be writable and all previous memory in `buffer` will be freed.
         * If `pad_len` is >0, the padding bit will be set. All other RTP header fields
         * will be set to 0/FALSE.
         * @param buffer a #GstBuffer
         * @param payload_len the length of the payload
         * @param pad_len the amount of padding
         * @param csrc_count the number of CSRC entries
         */
        function rtp_buffer_allocate_data(
            buffer: Gst.Buffer,
            payload_len: number,
            pad_len: number,
            csrc_count: number,
        ): void;
        /**
         * Calculate the header length of an RTP packet with `csrc_count` CSRC entries.
         * An RTP packet can have at most 15 CSRC entries.
         * @param csrc_count the number of CSRC entries
         * @returns The length of an RTP header with @csrc_count CSRC entries.
         */
        function rtp_buffer_calc_header_len(csrc_count: number): number;
        /**
         * Calculate the total length of an RTP packet with a payload size of `payload_len,`
         * a padding of `pad_len` and a `csrc_count` CSRC entries.
         * @param payload_len the length of the payload
         * @param pad_len the amount of padding
         * @param csrc_count the number of CSRC entries
         * @returns The total length of an RTP header with given parameters.
         */
        function rtp_buffer_calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
        /**
         * Calculate the length of the payload of an RTP packet with size `packet_len,`
         * a padding of `pad_len` and a `csrc_count` CSRC entries.
         * @param packet_len the length of the total RTP packet
         * @param pad_len the amount of padding
         * @param csrc_count the number of CSRC entries
         * @returns The length of the payload of an RTP packet  with given parameters.
         */
        function rtp_buffer_calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
        /**
         * Compare two sequence numbers, taking care of wraparounds. This function
         * returns the difference between `seqnum1` and `seqnum2`.
         * @param seqnum1 a sequence number
         * @param seqnum2 a sequence number
         * @returns a negative value if @seqnum1 is bigger than @seqnum2, 0 if they are equal or a positive value if @seqnum1 is smaller than @segnum2.
         */
        function rtp_buffer_compare_seqnum(seqnum1: number, seqnum2: number): number;
        /**
         * Get the default clock-rate for the static payload type `payload_type`.
         * @param payload_type the static payload type
         * @returns the default clock rate or -1 if the payload type is not static or the clock-rate is undefined.
         */
        function rtp_buffer_default_clock_rate(payload_type: number): number;
        /**
         * Update the `exttimestamp` field with the extended timestamp of `timestamp`
         * For the first call of the method, `exttimestamp` should point to a location
         * with a value of -1.
         *
         * This function is able to handle both forward and backward timestamps taking
         * into account:
         *   - timestamp wraparound making sure that the returned value is properly increased.
         *   - timestamp unwraparound making sure that the returned value is properly decreased.
         * @param exttimestamp a previous extended timestamp
         * @param timestamp a new timestamp
         * @returns The extended timestamp of @timestamp or 0 if the result can't go anywhere backwards.
         */
        function rtp_buffer_ext_timestamp(exttimestamp: number, timestamp: number): [number, number];
        /**
         * Similar to gst_rtp_buffer_get_extension_onebyte_header, but working
         * on the #GBytes you get from gst_rtp_buffer_get_extension_bytes.
         * Parses RFC 5285 style header extensions with a one byte header. It will
         * return the nth extension with the requested id.
         * @param bytes #GBytes
         * @param bit_pattern The bit-pattern. Anything but 0xBEDE is rejected.
         * @param id The ID of the header extension to be read (between 1 and 14).
         * @param nth Read the nth extension packet with the requested ID
         * @returns TRUE if @bytes had the requested header extension
         */
        function rtp_buffer_get_extension_onebyte_header_from_bytes(
            bytes: GLib.Bytes | Uint8Array,
            bit_pattern: number,
            id: number,
            nth: number,
        ): [boolean, Uint8Array];
        /**
         * Map the contents of `buffer` into `rtp`.
         * @param buffer a #GstBuffer
         * @param flags #GstMapFlags
         * @returns %TRUE if @buffer could be mapped.
         */
        function rtp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
        /**
         * Allocate a new #GstBuffer with enough data to hold an RTP packet with
         * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
         * All other RTP header fields will be set to 0/FALSE.
         * @param payload_len the length of the payload
         * @param pad_len the amount of padding
         * @param csrc_count the number of CSRC entries
         * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
         */
        function rtp_buffer_new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
        /**
         * Create a new #GstBuffer that can hold an RTP packet that is exactly
         * `packet_len` long. The length of the payload depends on `pad_len` and
         * `csrc_count` and can be calculated with gst_rtp_buffer_calc_payload_len().
         * All RTP header fields will be set to 0/FALSE.
         * @param packet_len the total length of the packet
         * @param pad_len the amount of padding
         * @param csrc_count the number of CSRC entries
         * @returns A newly allocated buffer that can hold an RTP packet of @packet_len.
         */
        function rtp_buffer_new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
        /**
         * Create a new buffer and set the data to a copy of `len`
         * bytes of `data` and the size to `len`. The data will be freed when the buffer
         * is freed.
         * @param data data for the new   buffer
         * @returns A newly allocated buffer with a copy of @data and of size @len.
         */
        function rtp_buffer_new_copy_data(data: Uint8Array | string): Gst.Buffer;
        /**
         * Create a new buffer and set the data and size of the buffer to `data` and `len`
         * respectively. `data` will be freed when the buffer is unreffed, so this
         * function transfers ownership of `data` to the new buffer.
         * @param data data for the new buffer
         * @returns A newly allocated buffer with @data and of size @len.
         */
        function rtp_buffer_new_take_data(data: Uint8Array | string): Gst.Buffer;
        /**
         * Retrieve all the factories of the currently registered RTP header
         * extensions.  Call gst_element_factory_create() with each factory to create
         * the associated #GstRTPHeaderExtension.
         * @returns a #GList of     #GstElementFactory's. Use gst_plugin_feature_list_free() after use
         */
        function rtp_get_header_extension_list(): Gst.ElementFactory[];
        /**
         * Reads the NTP time from the `size` NTP-56 extension bytes in `data` and store the
         * result in `ntptime`.
         * @param data the data to read from
         * @returns %TRUE on success.
         */
        function rtp_hdrext_get_ntp_56(data: Uint8Array | string): [boolean, number];
        /**
         * Reads the NTP time from the `size` NTP-64 extension bytes in `data` and store the
         * result in `ntptime`.
         * @param data the data to read from
         * @returns %TRUE on success.
         */
        function rtp_hdrext_get_ntp_64(data: Uint8Array | string): [boolean, number];
        /**
         * Writes the NTP time in `ntptime` to the format required for the NTP-56 header
         * extension. `data` must hold at least #GST_RTP_HDREXT_NTP_56_SIZE bytes.
         * @param data the data to write to
         * @param size the size of @data
         * @param ntptime the NTP time
         * @returns %TRUE on success.
         */
        function rtp_hdrext_set_ntp_56(data: any | null, size: number, ntptime: number): boolean;
        /**
         * Writes the NTP time in `ntptime` to the format required for the NTP-64 header
         * extension. `data` must hold at least #GST_RTP_HDREXT_NTP_64_SIZE bytes.
         * @param data the data to write to
         * @param size the size of @data
         * @param ntptime the NTP time
         * @returns %TRUE on success.
         */
        function rtp_hdrext_set_ntp_64(data: any | null, size: number, ntptime: number): boolean;
        /**
         * Get the #GstRTPPayloadInfo for `media` and `encoding_name`. This function is
         * mostly used to get the default clock-rate and bandwidth for dynamic payload
         * types specified with `media` and `encoding` name.
         *
         * The search for `encoding_name` will be performed in a case insensitive way.
         * @param media the media to find
         * @param encoding_name the encoding name to find
         * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
         */
        function rtp_payload_info_for_name(media: string, encoding_name: string): RTPPayloadInfo | null;
        /**
         * Get the #GstRTPPayloadInfo for `payload_type`. This function is
         * mostly used to get the default clock-rate and bandwidth for static payload
         * types specified with `payload_type`.
         * @param payload_type the payload_type to find
         * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
         */
        function rtp_payload_info_for_pt(payload_type: number): RTPPayloadInfo | null;
        function rtp_source_meta_api_get_type(): GObject.GType;
        function rtp_source_meta_get_info(): Gst.MetaInfo;
        /**
         * Additional RTP buffer flags. These flags can potentially be used on any
         * buffers carrying RTP packets.
         *
         * Note that these are only valid for #GstCaps of type: application/x-rtp (x-rtcp).
         * They can conflict with other extended buffer flags.
         */

        /**
         * Additional RTP buffer flags. These flags can potentially be used on any
         * buffers carrying RTP packets.
         *
         * Note that these are only valid for #GstCaps of type: application/x-rtp (x-rtcp).
         * They can conflict with other extended buffer flags.
         */
        export namespace RTPBufferFlags {
            export const $gtype: GObject.GType<RTPBufferFlags>;
        }

        enum RTPBufferFlags {
            /**
             * The #GstBuffer was once wrapped
             *           in a retransmitted packet as specified by RFC 4588.
             */
            RETRANSMISSION,
            /**
             * The packet represents redundant RTP packet.
             *           The flag is used in gstrtpstorage to be able to hold the packetback
             *           and use it only for recovery from packet loss.
             *           Since: 1.14
             */
            REDUNDANT,
            /**
             * Offset to define more flags.
             */
            LAST,
        }
        /**
         * Additional mapping flags for gst_rtp_buffer_map().
         */

        /**
         * Additional mapping flags for gst_rtp_buffer_map().
         */
        export namespace RTPBufferMapFlags {
            export const $gtype: GObject.GType<RTPBufferMapFlags>;
        }

        enum RTPBufferMapFlags {
            /**
             * Skip mapping and validation of RTP
             *           padding and RTP pad count when present. Useful for buffers where
             *           the padding may be encrypted.
             */
            SKIP_PADDING,
            /**
             * Offset to define more flags
             */
            LAST,
        }
        /**
         * Direction to which to apply the RTP Header Extension
         */

        /**
         * Direction to which to apply the RTP Header Extension
         */
        export namespace RTPHeaderExtensionDirection {
            export const $gtype: GObject.GType<RTPHeaderExtensionDirection>;
        }

        enum RTPHeaderExtensionDirection {
            /**
             * Neither send nor
             * receive RTP Header Extensions
             */
            INACTIVE,
            /**
             * Only send RTP Header
             * Extensions `GST_RTP_HEADER_EXTENSION_DIRECTION_RECVONLY:` Only
             * receive RTP Header Extensions
             */
            SENDONLY,
            RECVONLY,
            /**
             * Send and receive RTP
             * Header Extensions ext
             */
            SENDRECV,
            /**
             * RTP header extension
             * direction is inherited from the stream
             */
            INHERITED,
        }
        /**
         * Flags that apply to a RTP Audio/Video header extension.
         */

        /**
         * Flags that apply to a RTP Audio/Video header extension.
         */
        export namespace RTPHeaderExtensionFlags {
            export const $gtype: GObject.GType<RTPHeaderExtensionFlags>;
        }

        enum RTPHeaderExtensionFlags {
            /**
             * The one byte rtp extension header.
             *              1-16 data bytes per extension with a maximum of
             *              14 extension ids in total.
             */
            ONE_BYTE,
            /**
             * The two byte rtp extension header.
             *              256 data bytes per extension with a maximum of 255 (or 256
             *              including appbits) extensions in total.
             */
            TWO_BYTE,
        }
        module RTPBaseAudioPayload {
            // Constructor properties interface

            interface ConstructorProps extends RTPBasePayload.ConstructorProps {
                buffer_list: boolean;
                bufferList: boolean;
            }
        }

        /**
         * Provides a base class for audio RTP payloaders for frame or sample based
         * audio codecs (constant bitrate)
         *
         * This class derives from GstRTPBasePayload. It can be used for payloading
         * audio codecs. It will only work with constant bitrate codecs. It supports
         * both frame based and sample based codecs. It takes care of packing up the
         * audio data into RTP packets and filling up the headers accordingly. The
         * payloading is done based on the maximum MTU (mtu) and the maximum time per
         * packet (max-ptime). The general idea is to divide large data buffers into
         * smaller RTP packets. The RTP packet size is the minimum of either the MTU,
         * max-ptime (if set) or available data. The RTP packet size is always larger or
         * equal to min-ptime (if set). If min-ptime is not set, any residual data is
         * sent in a last RTP packet. In the case of frame based codecs, the resulting
         * RTP packets always contain full frames.
         *
         * ## Usage
         *
         * To use this base class, your child element needs to call either
         * gst_rtp_base_audio_payload_set_frame_based() or
         * gst_rtp_base_audio_payload_set_sample_based(). This is usually done in the
         * element's `_init()` function. Then, the child element must call either
         * gst_rtp_base_audio_payload_set_frame_options(),
         * gst_rtp_base_audio_payload_set_sample_options() or
         * gst_rtp_base_audio_payload_set_samplebits_options. Since
         * GstRTPBaseAudioPayload derives from GstRTPBasePayload, the child element
         * must set any variables or call/override any functions required by that base
         * class. The child element does not need to override any other functions
         * specific to GstRTPBaseAudioPayload.
         */
        class RTPBaseAudioPayload extends RTPBasePayload {
            static $gtype: GObject.GType<RTPBaseAudioPayload>;

            // Properties

            get buffer_list(): boolean;
            set buffer_list(val: boolean);
            get bufferList(): boolean;
            set bufferList(val: boolean);

            // Fields

            payload: RTPBasePayload;
            base_ts: Gst.ClockTime;
            frame_size: number;
            frame_duration: number;
            sample_size: number;

            // Constructors

            constructor(properties?: Partial<RTPBaseAudioPayload.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Create an RTP buffer and store `payload_len` bytes of the adapter as the
             * payload. Set the timestamp on the new buffer to `timestamp` before pushing
             * the buffer downstream.
             *
             * If `payload_len` is -1, all pending bytes will be flushed. If `timestamp` is
             * -1, the timestamp will be calculated automatically.
             * @param payload_len length of payload
             * @param timestamp a #GstClockTime
             * @returns a #GstFlowReturn
             */
            flush(payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn;
            /**
             * Gets the internal adapter used by the depayloader.
             * @returns a #GstAdapter.
             */
            get_adapter(): GstBase.Adapter;
            /**
             * Create an RTP buffer and store `payload_len` bytes of `data` as the
             * payload. Set the timestamp on the new buffer to `timestamp` before pushing
             * the buffer downstream.
             * @param data data to set as payload
             * @param timestamp a #GstClockTime
             * @returns a #GstFlowReturn
             */
            push(data: Uint8Array | string, timestamp: Gst.ClockTime): Gst.FlowReturn;
            // Conflicted with GstRtp.RTPBasePayload.push
            push(...args: never[]): any;
            /**
             * Tells #GstRTPBaseAudioPayload that the child element is for a frame based
             * audio codec
             */
            set_frame_based(): void;
            /**
             * Sets the options for frame based audio codecs.
             * @param frame_duration The duraction of an audio frame in milliseconds.
             * @param frame_size The size of an audio frame in bytes.
             */
            set_frame_options(frame_duration: number, frame_size: number): void;
            /**
             * Tells #GstRTPBaseAudioPayload that the child element is for a sample based
             * audio codec
             */
            set_sample_based(): void;
            /**
             * Sets the options for sample based audio codecs.
             * @param sample_size Size per sample in bytes.
             */
            set_sample_options(sample_size: number): void;
            /**
             * Sets the options for sample based audio codecs.
             * @param sample_size Size per sample in bits.
             */
            set_samplebits_options(sample_size: number): void;
        }

        module RTPBaseDepayload {
            // Signal callback interfaces

            interface AddExtension {
                (ext: RTPHeaderExtension): void;
            }

            interface ClearExtensions {
                (): void;
            }

            interface RequestExtension {
                (ext_id: number, ext_uri?: string | null): RTPHeaderExtension | null;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps {
                auto_header_extension: boolean;
                autoHeaderExtension: boolean;
                extensions: Gst.ValueArray;
                max_reorder: number;
                maxReorder: number;
                source_info: boolean;
                sourceInfo: boolean;
                stats: Gst.Structure;
            }
        }

        /**
         * Provides a base class for RTP depayloaders
         *
         * In order to handle RTP header extensions correctly if the
         * depayloader aggregates multiple RTP packet payloads into one output
         * buffer this class provides the function
         * gst_rtp_base_depayload_set_aggregate_hdrext_enabled(). If the
         * aggregation is enabled the virtual functions
         * `GstRTPBaseDepayload`.process or
         * `GstRTPBaseDepayload`.process_rtp_packet must tell the base class
         * what happens to the current RTP packet. By default the base class
         * assumes that the packet payload is used with the next output
         * buffer.
         *
         * If the RTP packet will not be used with an output buffer
         * gst_rtp_base_depayload_dropped() must be called. A typical
         * situation would be if we are waiting for a keyframe.
         *
         * If the RTP packet will be used but not with the current output
         * buffer but with the next one gst_rtp_base_depayload_delayed() must
         * be called. This may happen if the current RTP packet signals the
         * start of a new output buffer and the currently processed output
         * buffer will be pushed first. The undelay happens implicitly once
         * the current buffer has been pushed or
         * gst_rtp_base_depayload_flush() has been called.
         *
         * If gst_rtp_base_depayload_flush() is called all RTP packets that
         * have not been dropped since the last output buffer are dropped,
         * e.g. if an output buffer is discarded due to malformed data. This
         * may or may not include the current RTP packet depending on the 2nd
         * parameter `keep_current`.
         *
         * Be aware that in case gst_rtp_base_depayload_push_list() is used
         * each buffer will see the same list of RTP header extensions.
         */
        abstract class RTPBaseDepayload extends Gst.Element {
            static $gtype: GObject.GType<RTPBaseDepayload>;

            // Properties

            /**
             * If enabled, the depayloader will automatically try to enable all the
             * RTP header extensions provided in the sink caps, saving the application
             * the need to handle these extensions manually using the
             * GstRTPBaseDepayload::request-extension: signal.
             */
            get auto_header_extension(): boolean;
            set auto_header_extension(val: boolean);
            /**
             * If enabled, the depayloader will automatically try to enable all the
             * RTP header extensions provided in the sink caps, saving the application
             * the need to handle these extensions manually using the
             * GstRTPBaseDepayload::request-extension: signal.
             */
            get autoHeaderExtension(): boolean;
            set autoHeaderExtension(val: boolean);
            /**
             * A list of already enabled RTP header extensions. This may be useful for finding
             * out which extensions are already enabled (with add-extension signal) and picking a non-conflicting
             * ID for a new extension that needs to be added on top of the existing ones.
             *
             * Note that the value returned by reading this property is not dynamically updated when the set of
             * enabled extensions changes by any of existing action signals. Rather, it represents the current state
             * at the time the property is read.
             *
             * Dynamic updates of this property can be received by subscribing to its corresponding "notify" signal, i.e.
             * "notify::extensions".
             */
            get extensions(): Gst.ValueArray;
            /**
             * Max seqnum reorder before the sender is assumed to have restarted.
             *
             * When max-reorder is set to 0 all reordered/duplicate packets are
             * considered coming from a restarted sender.
             */
            get max_reorder(): number;
            set max_reorder(val: number);
            /**
             * Max seqnum reorder before the sender is assumed to have restarted.
             *
             * When max-reorder is set to 0 all reordered/duplicate packets are
             * considered coming from a restarted sender.
             */
            get maxReorder(): number;
            set maxReorder(val: number);
            /**
             * Add RTP source information found in RTP header as meta to output buffer.
             */
            get source_info(): boolean;
            set source_info(val: boolean);
            /**
             * Add RTP source information found in RTP header as meta to output buffer.
             */
            get sourceInfo(): boolean;
            set sourceInfo(val: boolean);
            /**
             * Various depayloader statistics retrieved atomically (and are therefore
             * synchroized with each other). This property return a GstStructure named
             * application/x-rtp-depayload-stats containing the following fields relating to
             * the last processed buffer and current state of the stream being depayloaded:
             *
             *   * `clock-rate`: #G_TYPE_UINT, clock-rate of the stream
             *   * `npt-start`: #G_TYPE_UINT64, time of playback start
             *   * `npt-stop`: #G_TYPE_UINT64, time of playback stop
             *   * `play-speed`: #G_TYPE_DOUBLE, the playback speed
             *   * `play-scale`: #G_TYPE_DOUBLE, the playback scale
             *   * `running-time-dts`: #G_TYPE_UINT64, the last running-time of the
             *      last DTS
             *   * `running-time-pts`: #G_TYPE_UINT64, the last running-time of the
             *      last PTS
             *   * `seqnum`: #G_TYPE_UINT, the last seen seqnum
             *   * `timestamp`: #G_TYPE_UINT, the last seen RTP timestamp
             */
            get stats(): Gst.Structure;

            // Fields

            sinkpad: Gst.Pad;
            srcpad: Gst.Pad;
            clock_rate: number;
            need_newsegment: boolean;

            // Constructors

            constructor(properties?: Partial<RTPBaseDepayload.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'add-extension', callback: (_source: this, ext: RTPHeaderExtension) => void): number;
            connect_after(signal: 'add-extension', callback: (_source: this, ext: RTPHeaderExtension) => void): number;
            emit(signal: 'add-extension', ext: RTPHeaderExtension): void;
            connect(signal: 'clear-extensions', callback: (_source: this) => void): number;
            connect_after(signal: 'clear-extensions', callback: (_source: this) => void): number;
            emit(signal: 'clear-extensions'): void;
            connect(
                signal: 'request-extension',
                callback: (_source: this, ext_id: number, ext_uri: string | null) => RTPHeaderExtension | null,
            ): number;
            connect_after(
                signal: 'request-extension',
                callback: (_source: this, ext_id: number, ext_uri: string | null) => RTPHeaderExtension | null,
            ): number;
            emit(signal: 'request-extension', ext_id: number, ext_uri?: string | null): void;

            // Virtual methods

            /**
             * custom event handling
             * @param event
             */
            vfunc_handle_event(event: Gst.Event): boolean;
            /**
             * signal the depayloader about packet loss
             * @param event
             */
            vfunc_packet_lost(event: Gst.Event): boolean;
            /**
             * process incoming rtp packets. Subclass must implement either
             *   this method or `process_rtp_packet` to process incoming rtp packets.
             *   If the child returns a buffer without a valid timestamp, the timestamp
             *   of the provided buffer will be applied to the result buffer and the
             *   buffer will be pushed. If this function returns %NULL, nothing is pushed.
             * @param _in
             */
            vfunc_process(_in: Gst.Buffer): Gst.Buffer;
            /**
             * Same as the process virtual function, but slightly more
             * efficient, since it is passed the rtp buffer structure that has already
             * been mapped (with GST_MAP_READ) by the base class and thus does not have
             * to be mapped again by the subclass. Can be used by the subclass to process
             * incoming rtp packets. If the subclass returns a buffer without a valid
             * timestamp, the timestamp of the input buffer will be applied to the result
             * buffer and the output buffer will be pushed out. If this function returns
             * %NULL, nothing is pushed out. Since: 1.6.
             * @param rtp_buffer
             */
            vfunc_process_rtp_packet(rtp_buffer: RTPBuffer): Gst.Buffer;
            /**
             * configure the depayloader
             * @param caps
             */
            vfunc_set_caps(caps: Gst.Caps): boolean;

            // Methods

            /**
             * Called from `GstRTPBaseDepayload`.process or
             * `GstRTPBaseDepayload`.process_rtp_packet when the depayloader needs
             * to keep the current input RTP header for use with the next output
             * buffer.
             *
             * The delayed buffer will remain until the end of processing the
             * current output buffer and then enqueued for processing with the
             * next output buffer.
             *
             * A typical use-case is when the depayloader implementation will
             * start a new output buffer for the current input RTP buffer but push
             * the current output buffer first.
             *
             * Must be called with the stream lock held.
             */
            delayed(): void;
            /**
             * Called from `GstRTPBaseDepayload`.process or
             * `GstRTPBaseDepayload`.process_rtp_packet if the depayloader does not
             * use the current buffer for the output buffer. This will either drop
             * the delayed buffer or the last buffer from the header extension
             * cache.
             *
             * A typical use-case is when the depayloader implementation is
             * dropping an input RTP buffer while waiting for the first keyframe.
             *
             * Must be called with the stream lock held.
             */
            dropped(): void;
            /**
             * If `GstRTPBaseDepayload`.process or
             * `GstRTPBaseDepayload`.process_rtp_packet drop an output buffer this
             * function tells the base class to flush header extension cache as
             * well.
             *
             * This will not drop an input RTP header marked as delayed from
             * gst_rtp_base_depayload_delayed().
             *
             * If `keep_current` is %TRUE the current input RTP header will be kept
             * and enqueued after flushing the previous input RTP headers.
             *
             * A typical use-case for `keep_current` is when the depayloader
             * implementation invalidates the current output buffer and starts a
             * new one with the current RTP input buffer.
             *
             * Must be called with the stream lock held.
             * @param keep_current if the current RTP buffer shall be kept
             */
            flush(keep_current: boolean): void;
            /**
             * Queries whether header extensions will be aggregated per depayloaded buffers.
             * @returns %TRUE if aggregate-header-extension is enabled.
             */
            is_aggregate_hdrext_enabled(): boolean;
            /**
             * Queries whether #GstRTPSourceMeta will be added to depayloaded buffers.
             * @returns %TRUE if source-info is enabled.
             */
            is_source_info_enabled(): boolean;
            /**
             * Push `out_buf` to the peer of `filter`. This function takes ownership of
             * `out_buf`.
             *
             * This function will by default apply the last incoming timestamp on
             * the outgoing buffer when it didn't have a timestamp already.
             * @param out_buf a #GstBuffer
             * @returns a #GstFlowReturn.
             */
            push(out_buf: Gst.Buffer): Gst.FlowReturn;
            /**
             * Push `out_list` to the peer of `filter`. This function takes ownership of
             * `out_list`.
             * @param out_list a #GstBufferList
             * @returns a #GstFlowReturn.
             */
            push_list(out_list: Gst.BufferList): Gst.FlowReturn;
            /**
             * Enable or disable aggregating header extensions.
             * @param enable whether to aggregate header extensions per output buffer
             */
            set_aggregate_hdrext_enabled(enable: boolean): void;
            /**
             * Enable or disable adding #GstRTPSourceMeta to depayloaded buffers.
             * @param enable whether to add meta about RTP sources to buffer
             */
            set_source_info_enabled(enable: boolean): void;
        }

        module RTPBasePayload {
            // Signal callback interfaces

            interface AddExtension {
                (ext: RTPHeaderExtension): void;
            }

            interface ClearExtensions {
                (): void;
            }

            interface RequestExtension {
                (ext_id: number, ext_uri: string): RTPHeaderExtension | null;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps {
                auto_header_extension: boolean;
                autoHeaderExtension: boolean;
                extensions: Gst.ValueArray;
                max_ptime: number;
                maxPtime: number;
                min_ptime: number;
                minPtime: number;
                mtu: number;
                onvif_no_rate_control: boolean;
                onvifNoRateControl: boolean;
                perfect_rtptime: boolean;
                perfectRtptime: boolean;
                pt: number;
                ptime_multiple: number;
                ptimeMultiple: number;
                scale_rtptime: boolean;
                scaleRtptime: boolean;
                seqnum: number;
                seqnum_offset: number;
                seqnumOffset: number;
                source_info: boolean;
                sourceInfo: boolean;
                ssrc: number;
                stats: Gst.Structure;
                timestamp: number;
                timestamp_offset: number;
                timestampOffset: number;
            }
        }

        /**
         * Provides a base class for RTP payloaders
         */
        abstract class RTPBasePayload extends Gst.Element {
            static $gtype: GObject.GType<RTPBasePayload>;

            // Properties

            /**
             * If enabled, the payloader will automatically try to enable all the
             * RTP header extensions provided in the src caps, saving the application
             * the need to handle these extensions manually using the
             * GstRTPBasePayload::request-extension: signal.
             */
            get auto_header_extension(): boolean;
            set auto_header_extension(val: boolean);
            /**
             * If enabled, the payloader will automatically try to enable all the
             * RTP header extensions provided in the src caps, saving the application
             * the need to handle these extensions manually using the
             * GstRTPBasePayload::request-extension: signal.
             */
            get autoHeaderExtension(): boolean;
            set autoHeaderExtension(val: boolean);
            /**
             * A list of already enabled RTP header extensions. This may be useful for finding
             * out which extensions are already enabled (with add-extension signal) and picking a non-conflicting
             * ID for a new extension that needs to be added on top of the existing ones.
             *
             * Note that the value returned by reading this property is not dynamically updated when the set of
             * enabled extensions changes by any of existing action signals. Rather, it represents the current state
             * at the time the property is read.
             *
             * Dynamic updates of this property can be received by subscribing to its corresponding "notify" signal, i.e.
             * "notify::extensions".
             */
            get extensions(): Gst.ValueArray;
            get max_ptime(): number;
            set max_ptime(val: number);
            get maxPtime(): number;
            set maxPtime(val: number);
            /**
             * Minimum duration of the packet data in ns (can't go above MTU)
             */
            get min_ptime(): number;
            set min_ptime(val: number);
            /**
             * Minimum duration of the packet data in ns (can't go above MTU)
             */
            get minPtime(): number;
            set minPtime(val: number);
            get mtu(): number;
            set mtu(val: number);
            /**
             * Make the payloader timestamp packets according to the Rate-Control=no
             * behaviour specified in the ONVIF replay spec.
             */
            get onvif_no_rate_control(): boolean;
            set onvif_no_rate_control(val: boolean);
            /**
             * Make the payloader timestamp packets according to the Rate-Control=no
             * behaviour specified in the ONVIF replay spec.
             */
            get onvifNoRateControl(): boolean;
            set onvifNoRateControl(val: boolean);
            /**
             * Try to use the offset fields to generate perfect RTP timestamps. When this
             * option is disabled, RTP timestamps are generated from GST_BUFFER_PTS of
             * each payloaded buffer. The PTSes of buffers may not necessarily increment
             * with the amount of data in each input buffer, consider e.g. the case where
             * the buffer arrives from a network which means that the PTS is unrelated to
             * the amount of data. Because the RTP timestamps are generated from
             * GST_BUFFER_PTS this can result in RTP timestamps that also don't increment
             * with the amount of data in the payloaded packet. To circumvent this it is
             * possible to set the perfect rtptime option enabled. When this option is
             * enabled the payloader will increment the RTP timestamps based on
             * GST_BUFFER_OFFSET which relates to the amount of data in each packet
             * rather than the GST_BUFFER_PTS of each buffer and therefore the RTP
             * timestamps will more closely correlate with the amount of data in each
             * buffer. Currently GstRTPBasePayload is limited to handling perfect RTP
             * timestamps for audio streams.
             */
            get perfect_rtptime(): boolean;
            set perfect_rtptime(val: boolean);
            /**
             * Try to use the offset fields to generate perfect RTP timestamps. When this
             * option is disabled, RTP timestamps are generated from GST_BUFFER_PTS of
             * each payloaded buffer. The PTSes of buffers may not necessarily increment
             * with the amount of data in each input buffer, consider e.g. the case where
             * the buffer arrives from a network which means that the PTS is unrelated to
             * the amount of data. Because the RTP timestamps are generated from
             * GST_BUFFER_PTS this can result in RTP timestamps that also don't increment
             * with the amount of data in the payloaded packet. To circumvent this it is
             * possible to set the perfect rtptime option enabled. When this option is
             * enabled the payloader will increment the RTP timestamps based on
             * GST_BUFFER_OFFSET which relates to the amount of data in each packet
             * rather than the GST_BUFFER_PTS of each buffer and therefore the RTP
             * timestamps will more closely correlate with the amount of data in each
             * buffer. Currently GstRTPBasePayload is limited to handling perfect RTP
             * timestamps for audio streams.
             */
            get perfectRtptime(): boolean;
            set perfectRtptime(val: boolean);
            get pt(): number;
            set pt(val: number);
            /**
             * Force buffers to be multiples of this duration in ns (0 disables)
             */
            get ptime_multiple(): number;
            set ptime_multiple(val: number);
            /**
             * Force buffers to be multiples of this duration in ns (0 disables)
             */
            get ptimeMultiple(): number;
            set ptimeMultiple(val: number);
            /**
             * Make the RTP packets' timestamps be scaled with the segment's rate
             * (corresponding to RTSP speed parameter). Disabling this property means
             * the timestamps will not be affected by the set delivery speed (RTSP speed).
             *
             * Example: A server wants to allow streaming a recorded video in double
             * speed but still have the timestamps correspond to the position in the
             * video. This is achieved by the client setting RTSP Speed to 2 while the
             * server has this property disabled.
             */
            get scale_rtptime(): boolean;
            set scale_rtptime(val: boolean);
            /**
             * Make the RTP packets' timestamps be scaled with the segment's rate
             * (corresponding to RTSP speed parameter). Disabling this property means
             * the timestamps will not be affected by the set delivery speed (RTSP speed).
             *
             * Example: A server wants to allow streaming a recorded video in double
             * speed but still have the timestamps correspond to the position in the
             * video. This is achieved by the client setting RTSP Speed to 2 while the
             * server has this property disabled.
             */
            get scaleRtptime(): boolean;
            set scaleRtptime(val: boolean);
            get seqnum(): number;
            get seqnum_offset(): number;
            set seqnum_offset(val: number);
            get seqnumOffset(): number;
            set seqnumOffset(val: number);
            /**
             * Enable writing the CSRC field in allocated RTP header based on RTP source
             * information found in the input buffer's #GstRTPSourceMeta.
             */
            get source_info(): boolean;
            set source_info(val: boolean);
            /**
             * Enable writing the CSRC field in allocated RTP header based on RTP source
             * information found in the input buffer's #GstRTPSourceMeta.
             */
            get sourceInfo(): boolean;
            set sourceInfo(val: boolean);
            get ssrc(): number;
            set ssrc(val: number);
            /**
             * Various payloader statistics retrieved atomically (and are therefore
             * synchroized with each other), these can be used e.g. to generate an
             * RTP-Info header. This property return a GstStructure named
             * application/x-rtp-payload-stats containing the following fields relating to
             * the last processed buffer and current state of the stream being payloaded:
             *
             *   * `clock-rate` :#G_TYPE_UINT, clock-rate of the stream
             *   * `running-time` :#G_TYPE_UINT64, running time
             *   * `seqnum` :#G_TYPE_UINT, sequence number, same as #GstRTPBasePayload:seqnum
             *   * `timestamp` :#G_TYPE_UINT, RTP timestamp, same as #GstRTPBasePayload:timestamp
             *   * `ssrc` :#G_TYPE_UINT, The SSRC in use
             *   * `pt` :#G_TYPE_UINT, The Payload type in use, same as #GstRTPBasePayload:pt
             *   * `seqnum-offset` :#G_TYPE_UINT, The current offset added to the seqnum
             *   * `timestamp-offset` :#G_TYPE_UINT, The current offset added to the timestamp
             */
            get stats(): Gst.Structure;
            get timestamp(): number;
            get timestamp_offset(): number;
            set timestamp_offset(val: number);
            get timestampOffset(): number;
            set timestampOffset(val: number);

            // Fields

            element: Gst.Element;

            // Constructors

            constructor(properties?: Partial<RTPBasePayload.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'add-extension', callback: (_source: this, ext: RTPHeaderExtension) => void): number;
            connect_after(signal: 'add-extension', callback: (_source: this, ext: RTPHeaderExtension) => void): number;
            emit(signal: 'add-extension', ext: RTPHeaderExtension): void;
            connect(signal: 'clear-extensions', callback: (_source: this) => void): number;
            connect_after(signal: 'clear-extensions', callback: (_source: this) => void): number;
            emit(signal: 'clear-extensions'): void;
            connect(
                signal: 'request-extension',
                callback: (_source: this, ext_id: number, ext_uri: string) => RTPHeaderExtension | null,
            ): number;
            connect_after(
                signal: 'request-extension',
                callback: (_source: this, ext_id: number, ext_uri: string) => RTPHeaderExtension | null,
            ): number;
            emit(signal: 'request-extension', ext_id: number, ext_uri: string): void;

            // Virtual methods

            /**
             * get desired caps
             * @param pad
             * @param filter
             */
            vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps;
            /**
             * process data
             * @param buffer
             */
            vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
            /**
             * custom query handling
             * @param pad
             * @param query
             */
            vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean;
            // Conflicted with Gst.Element.vfunc_query
            vfunc_query(...args: never[]): any;
            /**
             * configure the payloader
             * @param caps
             */
            vfunc_set_caps(caps: Gst.Caps): boolean;
            /**
             * custom event handling on the sinkpad
             * @param event
             */
            vfunc_sink_event(event: Gst.Event): boolean;
            /**
             * custom event handling on the srcpad
             * @param event
             */
            vfunc_src_event(event: Gst.Event): boolean;

            // Methods

            /**
             * Allocate a new #GstBuffer with enough data to hold an RTP packet with
             * minimum `csrc_count` CSRCs, a payload length of `payload_len` and padding of
             * `pad_len`. If `payload` has #GstRTPBasePayload:source-info %TRUE additional
             * CSRCs may be allocated and filled with RTP source information.
             * @param payload_len the length of the payload
             * @param pad_len the amount of padding
             * @param csrc_count the minimum number of CSRC entries
             * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
             */
            allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
            /**
             * Count the total number of RTP sources found in the meta of `buffer,` which
             * will be automically added by gst_rtp_base_payload_allocate_output_buffer().
             * If #GstRTPBasePayload:source-info is %FALSE the count will be 0.
             * @param buffer a #GstBuffer, typically the buffer to payload
             * @returns The number of sources.
             */
            get_source_count(buffer: Gst.Buffer): number;
            /**
             * Check if the packet with `size` and `duration` would exceed the configured
             * maximum size.
             * @param size the size of the packet
             * @param duration the duration of the packet
             * @returns %TRUE if the packet of @size and @duration would exceed the configured MTU or max_ptime.
             */
            is_filled(size: number, duration: Gst.ClockTime): boolean;
            /**
             * Queries whether the payloader will add contributing sources (CSRCs) to the
             * RTP header from #GstRTPSourceMeta.
             * @returns %TRUE if source-info is enabled.
             */
            is_source_info_enabled(): boolean;
            /**
             * Push `buffer` to the peer element of the payloader. The SSRC, payload type,
             * seqnum and timestamp of the RTP buffer will be updated first.
             *
             * This function takes ownership of `buffer`.
             * @param buffer a #GstBuffer
             * @returns a #GstFlowReturn.
             */
            push(buffer: Gst.Buffer): Gst.FlowReturn;
            /**
             * Push `list` to the peer element of the payloader. The SSRC, payload type,
             * seqnum and timestamp of the RTP buffer will be updated first.
             *
             * This function takes ownership of `list`.
             * @param list a #GstBufferList
             * @returns a #GstFlowReturn.
             */
            push_list(list: Gst.BufferList): Gst.FlowReturn;
            /**
             * Set the rtp options of the payloader. These options will be set in the caps
             * of the payloader. Subclasses must call this method before calling
             * gst_rtp_base_payload_push() or gst_rtp_base_payload_set_outcaps().
             * @param media the media type (typically "audio" or "video")
             * @param dynamic if the payload type is dynamic
             * @param encoding_name the encoding name
             * @param clock_rate the clock rate of the media
             */
            set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void;
            /**
             * Configure the output caps with the optional fields.
             * @param s a #GstStructure with the caps fields
             * @returns %TRUE if the caps could be set.
             */
            set_outcaps_structure(s?: Gst.Structure | null): boolean;
            /**
             * Enable or disable adding contributing sources to RTP packets from
             * #GstRTPSourceMeta.
             * @param enable whether to add contributing sources to RTP packets
             */
            set_source_info_enabled(enable: boolean): void;
        }

        module RTPHeaderExtension {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps {}
        }

        /**
         * Instance struct for a RTP Audio/Video header extension.
         */
        abstract class RTPHeaderExtension extends Gst.Element {
            static $gtype: GObject.GType<RTPHeaderExtension>;

            // Constructors

            constructor(properties?: Partial<RTPHeaderExtension.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static create_from_uri(uri: string): RTPHeaderExtension | null;
            static set_uri(uri: string): void;

            // Virtual methods

            /**
             * This is used to know how much data a certain header extension will need for
             * both allocating the resulting data, and deciding how much payload data can
             * be generated.
             *
             * Implementations should return as accurate a value as is possible using the
             * information given in the input `buffer`.
             * @param input_meta a #GstBuffer
             */
            vfunc_get_max_size(input_meta: Gst.Buffer): number;
            /**
             * retrieve the supported flags
             */
            vfunc_get_supported_flags(): RTPHeaderExtensionFlags;
            /**
             * Read the RTP header extension from `data`.
             * @param read_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
             * @param data location to read the rtp header extension from
             * @param buffer a #GstBuffer to modify if necessary
             */
            vfunc_read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array | string, buffer: Gst.Buffer): boolean;
            /**
             * set the necessary attributes that may be signaled e.g. with
             *     an SDP.
             * @param direction
             * @param attributes
             */
            vfunc_set_attributes(direction: RTPHeaderExtensionDirection, attributes: string): boolean;
            /**
             * gst_rtp_header_extension_set_id() must have been called with a valid
             * extension id that is contained in these caps.
             *
             * The only current known caps format is based on the SDP standard as produced
             * by gst_sdp_media_attributes_to_caps().
             * @param caps writable #GstCaps to modify
             */
            vfunc_set_caps_from_attributes(caps: Gst.Caps): boolean;
            /**
             * Passes RTP payloader's sink (i.e. not payloaded) `caps` to the header
             * extension.
             * @param caps sink #GstCaps
             */
            vfunc_set_non_rtp_sink_caps(caps: Gst.Caps): boolean;
            /**
             * Updates depayloader src caps based on the information received in RTP header.
             * `caps` must be writable as this function may modify them.
             * @param caps src #GstCaps to modify
             */
            vfunc_update_non_rtp_src_caps(caps: Gst.Caps): boolean;
            /**
             * Writes the RTP header extension to `data` using information available from
             * the `input_meta`.  `data` will be sized to be at least the value returned
             * from gst_rtp_header_extension_get_max_size().
             * @param input_meta the input #GstBuffer to read information from if necessary
             * @param write_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
             * @param output output RTP #GstBuffer
             * @param data location to write the rtp header extension into
             */
            vfunc_write(
                input_meta: Gst.Buffer,
                write_flags: RTPHeaderExtensionFlags,
                output: Gst.Buffer,
                data: Uint8Array | string,
            ): number;

            // Methods

            /**
             * Retrieve the direction
             * @returns The direction
             */
            get_direction(): RTPHeaderExtensionDirection;
            get_id(): number;
            /**
             * This is used to know how much data a certain header extension will need for
             * both allocating the resulting data, and deciding how much payload data can
             * be generated.
             *
             * Implementations should return as accurate a value as is possible using the
             * information given in the input `buffer`.
             * @param input_meta a #GstBuffer
             * @returns the maximum size of the data written by this extension
             */
            get_max_size(input_meta: Gst.Buffer): number;
            get_sdp_caps_field_name(): string;
            get_supported_flags(): RTPHeaderExtensionFlags;
            get_uri(): string | null;
            /**
             * Read the RTP header extension from `data`.
             * @param read_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
             * @param data location to read the rtp header extension from
             * @param buffer a #GstBuffer to modify if necessary
             * @returns whether the extension could be read from @data
             */
            read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array | string, buffer: Gst.Buffer): boolean;
            /**
             * gst_rtp_header_extension_set_id() must have been called with a valid
             * extension id that is contained in these caps.
             *
             * The only current known caps format is based on the SDP standard as produced
             * by gst_sdp_media_attributes_to_caps().
             * @param caps the #GstCaps to configure this extension with
             * @returns whether the @caps could be successfully set on @ext.
             */
            set_attributes_from_caps(caps: Gst.Caps): boolean;
            /**
             * gst_rtp_header_extension_set_id() must have been called with a valid
             * extension id that is contained in these caps.
             *
             * The only current known caps format is based on the SDP standard as produced
             * by gst_sdp_media_attributes_to_caps().
             * @param caps writable #GstCaps to modify
             * @returns whether the configured attributes on @ext can successfully be set on 	@caps
             */
            set_caps_from_attributes(caps: Gst.Caps): boolean;
            /**
             * Helper implementation for GstRTPExtensionClass::set_caps_from_attributes
             * that sets the `ext` uri on caps with the specified extension id as required
             * for sdp #GstCaps.
             *
             * Requires that the extension does not have any attributes or direction
             * advertised in `caps`.
             * @param caps #GstCaps to write fields into
             * @param attributes
             * @returns whether the @ext attributes could be set on @caps.
             */
            set_caps_from_attributes_helper(caps: Gst.Caps, attributes: string): boolean;
            /**
             * Set the direction that this header extension should be used in.
             * If #GST_RTP_HEADER_EXTENSION_DIRECTION_INHERITED is included, the
             * direction will not be included in the caps (as it shouldn't be in the
             * extmap line in the SDP).
             * @param direction The direction
             */
            set_direction(direction: RTPHeaderExtensionDirection): void;
            /**
             * sets the RTP extension id on `ext`
             * @param ext_id The id of this extension
             */
            set_id(ext_id: number): void;
            /**
             * Passes RTP payloader's sink (i.e. not payloaded) `caps` to the header
             * extension.
             * @param caps sink #GstCaps
             * @returns Whether @caps could be read successfully
             */
            set_non_rtp_sink_caps(caps: Gst.Caps): boolean;
            /**
             * Call this function in a subclass from #GstRTPHeaderExtensionClass::read to
             * tell the depayloader whether the data just parsed from RTP packet require
             * updating its src (non-RTP) caps. If `state` is TRUE, #GstRTPBaseDepayload will
             * eventually invoke gst_rtp_header_extension_update_non_rtp_src_caps() to
             * have the caps update applied. Applying the update also flips the internal
             * "wants update" flag back to FALSE.
             * @param state TRUE if caps update is needed
             */
            set_wants_update_non_rtp_src_caps(state: boolean): void;
            /**
             * Updates depayloader src caps based on the information received in RTP header.
             * `caps` must be writable as this function may modify them.
             * @param caps src #GstCaps to modify
             * @returns whether @caps were modified successfully
             */
            update_non_rtp_src_caps(caps: Gst.Caps): boolean;
            /**
             * Call this function after gst_rtp_header_extension_read() to check if
             * the depayloader's src caps need updating with data received in the last RTP
             * packet.
             * @returns Whether @ext wants to update depayloader's src caps.
             */
            wants_update_non_rtp_src_caps(): boolean;
            /**
             * Writes the RTP header extension to `data` using information available from
             * the `input_meta`.  `data` will be sized to be at least the value returned
             * from gst_rtp_header_extension_get_max_size().
             * @param input_meta the input #GstBuffer to read information from if necessary
             * @param write_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
             * @param output output RTP #GstBuffer
             * @param data location to write the rtp header extension into
             * @returns the size of the data written, < 0 on failure
             */
            write(
                input_meta: Gst.Buffer,
                write_flags: RTPHeaderExtensionFlags,
                output: Gst.Buffer,
                data: Uint8Array | string,
            ): number;
        }

        /**
         * Note: The API in this module is not yet declared stable.
         *
         * The GstRTPCBuffer helper functions makes it easy to parse and create regular
         * #GstBuffer objects that contain compound RTCP packets. These buffers are typically
         * of 'application/x-rtcp' #GstCaps.
         *
         * An RTCP buffer consists of 1 or more #GstRTCPPacket structures that you can
         * retrieve with gst_rtcp_buffer_get_first_packet(). #GstRTCPPacket acts as a pointer
         * into the RTCP buffer; you can move to the next packet with
         * gst_rtcp_packet_move_to_next().
         */
        class RTCPBuffer {
            static $gtype: GObject.GType<RTCPBuffer>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Open `buffer` for reading or writing, depending on `flags`. The resulting RTCP
             * buffer state is stored in `rtcp`.
             * @param buffer a buffer with an RTCP packet
             * @param flags flags for the mapping
             * @param rtcp resulting #GstRTCPBuffer
             */
            static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
            /**
             * Create a new buffer for constructing RTCP packets. The packet will have a
             * maximum size of `mtu`.
             * @param mtu the maximum mtu size.
             */
            static ['new'](mtu: number): Gst.Buffer;
            /**
             * Create a new buffer and set the data to a copy of `len`
             * bytes of `data` and the size to `len`. The data will be freed when the buffer
             * is freed.
             * @param data data for the new buffer
             */
            static new_copy_data(data: Uint8Array | string): Gst.Buffer;
            /**
             * Create a new buffer and set the data and size of the buffer to `data` and `len`
             * respectively. `data` will be freed when the buffer is unreffed, so this
             * function transfers ownership of `data` to the new buffer.
             * @param data data for the new buffer
             */
            static new_take_data(data: Uint8Array | string): Gst.Buffer;
            /**
             * Check if the data pointed to by `buffer` is a valid RTCP packet using
             * gst_rtcp_buffer_validate_data().
             * @param buffer the buffer to validate
             */
            static validate(buffer: Gst.Buffer): boolean;
            /**
             * Check if the `data` and `size` point to the data of a valid compound,
             * non-reduced size RTCP packet.
             * Use this function to validate a packet before using the other functions in
             * this module.
             * @param data the data to validate
             */
            static validate_data(data: Uint8Array | string): boolean;
            /**
             * Check if the `data` and `size` point to the data of a valid RTCP packet.
             * Use this function to validate a packet before using the other functions in
             * this module.
             *
             * This function is updated to support reduced size rtcp packets according to
             * RFC 5506 and will validate full compound RTCP packets as well as reduced
             * size RTCP packets.
             * @param data the data to validate
             */
            static validate_data_reduced(data: Uint8Array | string): boolean;
            /**
             * Check if the data pointed to by `buffer` is a valid RTCP packet using
             * gst_rtcp_buffer_validate_reduced().
             * @param buffer the buffer to validate
             */
            static validate_reduced(buffer: Gst.Buffer): boolean;

            // Methods

            /**
             * Add a new packet of `type` to `rtcp`. `packet` will point to the newly created
             * packet.
             * @param type the #GstRTCPType of the new packet
             * @param packet pointer to new packet
             * @returns %TRUE if the packet could be created. This function returns %FALSE if the max mtu is exceeded for the buffer.
             */
            add_packet(type: RTCPType, packet: RTCPPacket): boolean;
            /**
             * Initialize a new #GstRTCPPacket pointer that points to the first packet in
             * `rtcp`.
             * @param packet a #GstRTCPPacket
             * @returns TRUE if the packet existed in @rtcp.
             */
            get_first_packet(packet: RTCPPacket): boolean;
            /**
             * Get the number of RTCP packets in `rtcp`.
             * @returns the number of RTCP packets in @rtcp.
             */
            get_packet_count(): number;
            /**
             * Finish `rtcp` after being constructed. This function is usually called
             * after gst_rtcp_buffer_map() and after adding the RTCP items to the new buffer.
             *
             * The function adjusts the size of `rtcp` with the total length of all the
             * added packets.
             */
            unmap(): boolean;
        }

        /**
         * Data structure that points to a packet at `offset` in `buffer`.
         * The size of the structure is made public to allow stack allocations.
         */
        class RTCPPacket {
            static $gtype: GObject.GType<RTCPPacket>;

            // Fields

            offset: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Add profile-specific extension `data` to `packet`. If `packet` already
             * contains profile-specific extension `data` will be appended to the existing
             * extension.
             * @param data profile-specific data
             * @returns %TRUE if the profile specific extension data was added.
             */
            add_profile_specific_ext(data: Uint8Array | string): boolean;
            /**
             * Add a new report block to `packet` with the given values.
             * @param ssrc data source being reported
             * @param fractionlost fraction lost since last SR/RR
             * @param packetslost the cumululative number of packets lost
             * @param exthighestseq the extended last sequence number received
             * @param jitter the interarrival jitter
             * @param lsr the last SR packet from this source
             * @param dlsr the delay since last SR packet
             * @returns %TRUE if the packet was created. This function can return %FALSE if the max MTU is exceeded or the number of report blocks is greater than #GST_RTCP_MAX_RB_COUNT.
             */
            add_rb(
                ssrc: number,
                fractionlost: number,
                packetslost: number,
                exthighestseq: number,
                jitter: number,
                lsr: number,
                dlsr: number,
            ): boolean;
            /**
             * Get the application-dependent data attached to a RTPFB or PSFB `packet`.
             * @returns A pointer to the data
             */
            app_get_data(): number;
            /**
             * Get the length of the application-dependent data attached to an APP
             * `packet`.
             * @returns The length of data in 32-bit words.
             */
            app_get_data_length(): number;
            /**
             * Get the name field of the APP `packet`.
             * @returns The 4-byte name field, not zero-terminated.
             */
            app_get_name(): string;
            /**
             * Get the SSRC/CSRC field of the APP `packet`.
             * @returns The SSRC/CSRC.
             */
            app_get_ssrc(): number;
            /**
             * Get the subtype field of the APP `packet`.
             * @returns The subtype.
             */
            app_get_subtype(): number;
            /**
             * Set the length of the application-dependent data attached to an APP
             * `packet`.
             * @param wordlen Length of the data in 32-bit words
             * @returns %TRUE if there was enough space in the packet to add this much data.
             */
            app_set_data_length(wordlen: number): boolean;
            /**
             * Set the name field of the APP `packet`.
             * @param name 4-byte ASCII name
             */
            app_set_name(name: string): void;
            /**
             * Set the SSRC/CSRC field of the APP `packet`.
             * @param ssrc SSRC/CSRC of the packet
             */
            app_set_ssrc(ssrc: number): void;
            /**
             * Set the subtype field of the APP `packet`.
             * @param subtype subtype of the packet
             */
            app_set_subtype(subtype: number): void;
            /**
             * Add `ssrc` to the BYE `packet`.
             * @param ssrc an SSRC to add
             * @returns %TRUE if the ssrc was added. This function can return %FALSE if the max MTU is exceeded or the number of sources blocks is greater than #GST_RTCP_MAX_BYE_SSRC_COUNT.
             */
            bye_add_ssrc(ssrc: number): boolean;
            /**
             * Adds `len` SSRCs in `ssrc` to BYE `packet`.
             * @param ssrc an array of SSRCs to add
             * @returns %TRUE if the all the SSRCs were added. This function can return %FALSE if the max MTU is exceeded or the number of sources blocks is greater than #GST_RTCP_MAX_BYE_SSRC_COUNT.
             */
            bye_add_ssrcs(ssrc: number[]): boolean;
            /**
             * Get the `nth` SSRC of the BYE `packet`.
             * @param nth the nth SSRC to get
             * @returns The @nth SSRC of @packet.
             */
            bye_get_nth_ssrc(nth: number): number;
            /**
             * Get the reason in `packet`.
             * @returns The reason for the BYE @packet or NULL if the packet did not contain a reason string. The string must be freed with g_free() after usage.
             */
            bye_get_reason(): string | null;
            /**
             * Get the length of the reason string.
             * @returns The length of the reason string or 0 when there is no reason string present.
             */
            bye_get_reason_len(): number;
            /**
             * Get the number of SSRC fields in `packet`.
             * @returns The number of SSRC fields in @packet.
             */
            bye_get_ssrc_count(): number;
            /**
             * Set the reason string to `reason` in `packet`.
             * @param reason a reason string
             * @returns TRUE if the string could be set.
             */
            bye_set_reason(reason: string): boolean;
            /**
             * The profile-specific extension data is copied into a new allocated
             * memory area `data`. This must be freed with g_free() after usage.
             * @returns %TRUE if there was valid data.
             */
            copy_profile_specific_ext(): [boolean, Uint8Array];
            /**
             * Get the Feedback Control Information attached to a RTPFB or PSFB `packet`.
             * @returns a pointer to the FCI
             */
            fb_get_fci(): number;
            /**
             * Get the length of the Feedback Control Information attached to a
             * RTPFB or PSFB `packet`.
             * @returns The length of the FCI in 32-bit words.
             */
            fb_get_fci_length(): number;
            /**
             * Get the media SSRC field of the RTPFB or PSFB `packet`.
             * @returns the media SSRC.
             */
            fb_get_media_ssrc(): number;
            /**
             * Get the sender SSRC field of the RTPFB or PSFB `packet`.
             * @returns the sender SSRC.
             */
            fb_get_sender_ssrc(): number;
            /**
             * Get the feedback message type of the FB `packet`.
             * @returns The feedback message type.
             */
            fb_get_type(): RTCPFBType;
            /**
             * Set the length of the Feedback Control Information attached to a
             * RTPFB or PSFB `packet`.
             * @param wordlen Length of the FCI in 32-bit words
             * @returns %TRUE if there was enough space in the packet to add this much FCI
             */
            fb_set_fci_length(wordlen: number): boolean;
            /**
             * Set the media SSRC field of the RTPFB or PSFB `packet`.
             * @param ssrc a media SSRC
             */
            fb_set_media_ssrc(ssrc: number): void;
            /**
             * Set the sender SSRC field of the RTPFB or PSFB `packet`.
             * @param ssrc a sender SSRC
             */
            fb_set_sender_ssrc(ssrc: number): void;
            /**
             * Set the feedback message type of the FB `packet`.
             * @param type the #GstRTCPFBType to set
             */
            fb_set_type(type: RTCPFBType): void;
            /**
             * Get the count field in `packet`.
             * @returns The count field in @packet or -1 if @packet does not point to a valid packet.
             */
            get_count(): number;
            /**
             * Get the length field of `packet`. This is the length of the packet in
             * 32-bit words minus one.
             * @returns The length field of @packet.
             */
            get_length(): number;
            /**
             * Get the packet padding of the packet pointed to by `packet`.
             * @returns If the packet has the padding bit set.
             */
            get_padding(): boolean;
            get_profile_specific_ext(): [boolean, Uint8Array];
            get_profile_specific_ext_length(): number;
            /**
             * Parse the values of the `nth` report block in `packet` and store the result in
             * the values.
             * @param nth the nth report block in @packet
             */
            get_rb(nth: number): [number, number, number, number, number, number, number];
            /**
             * Get the number of report blocks in `packet`.
             * @returns The number of report blocks in @packet.
             */
            get_rb_count(): number;
            /**
             * Get the packet type of the packet pointed to by `packet`.
             * @returns The packet type or GST_RTCP_TYPE_INVALID when @packet is not pointing to a valid packet.
             */
            get_type(): RTCPType;
            /**
             * Move the packet pointer `packet` to the next packet in the payload.
             * Use gst_rtcp_buffer_get_first_packet() to initialize `packet`.
             * @returns TRUE if @packet is pointing to a valid packet after calling this function.
             */
            move_to_next(): boolean;
            /**
             * Removes the packet pointed to by `packet` and moves pointer to the next one
             * @returns TRUE if @packet is pointing to a valid packet after calling this function.
             */
            remove(): boolean;
            /**
             * Get the ssrc field of the RR `packet`.
             * @returns the ssrc.
             */
            rr_get_ssrc(): number;
            /**
             * Set the ssrc field of the RR `packet`.
             * @param ssrc the SSRC to set
             */
            rr_set_ssrc(ssrc: number): void;
            /**
             * Add a new SDES entry to the current item in `packet`.
             * @param type the #GstRTCPSDESType of the SDES entry
             * @param data the data
             * @returns %TRUE if the item could be added, %FALSE if the MTU has been reached.
             */
            sdes_add_entry(type: RTCPSDESType, data: Uint8Array | string): boolean;
            /**
             * Add a new SDES item for `ssrc` to `packet`.
             * @param ssrc the SSRC of the new item to add
             * @returns %TRUE if the item could be added, %FALSE if the maximum amount of items has been exceeded for the SDES packet or the MTU has been reached.
             */
            sdes_add_item(ssrc: number): boolean;
            /**
             * This function is like gst_rtcp_packet_sdes_get_entry() but it returns a
             * null-terminated copy of the data instead. use g_free() after usage.
             * @param type result of the entry type
             * @returns %TRUE if there was valid data.
             */
            sdes_copy_entry(type: RTCPSDESType): [boolean, Uint8Array];
            /**
             * Move to the first SDES entry in the current item.
             * @returns %TRUE if there was a first entry.
             */
            sdes_first_entry(): boolean;
            /**
             * Move to the first SDES item in `packet`.
             * @returns TRUE if there was a first item.
             */
            sdes_first_item(): boolean;
            /**
             * Get the data of the current SDES item entry. `type` (when not NULL) will
             * contain the type of the entry. `data` (when not NULL) will point to `len`
             * bytes.
             *
             * When `type` refers to a text item, `data` will point to a UTF8 string. Note
             * that this UTF8 string is NOT null-terminated. Use
             * gst_rtcp_packet_sdes_copy_entry() to get a null-terminated copy of the entry.
             * @param type result of the entry type
             * @returns %TRUE if there was valid data.
             */
            sdes_get_entry(type: RTCPSDESType): [boolean, Uint8Array];
            /**
             * Get the number of items in the SDES packet `packet`.
             * @returns The number of items in @packet.
             */
            sdes_get_item_count(): number;
            /**
             * Get the SSRC of the current SDES item.
             * @returns the SSRC of the current item.
             */
            sdes_get_ssrc(): number;
            /**
             * Move to the next SDES entry in the current item.
             * @returns %TRUE if there was a next entry.
             */
            sdes_next_entry(): boolean;
            /**
             * Move to the next SDES item in `packet`.
             * @returns TRUE if there was a next item.
             */
            sdes_next_item(): boolean;
            /**
             * Set the `nth` new report block in `packet` with the given values.
             *
             * Note: Not implemented.
             * @param nth the nth report block to set
             * @param ssrc data source being reported
             * @param fractionlost fraction lost since last SR/RR
             * @param packetslost the cumululative number of packets lost
             * @param exthighestseq the extended last sequence number received
             * @param jitter the interarrival jitter
             * @param lsr the last SR packet from this source
             * @param dlsr the delay since last SR packet
             */
            set_rb(
                nth: number,
                ssrc: number,
                fractionlost: number,
                packetslost: number,
                exthighestseq: number,
                jitter: number,
                lsr: number,
                dlsr: number,
            ): void;
            /**
             * Parse the SR sender info and store the values.
             */
            sr_get_sender_info(): [number, number, number, number, number];
            /**
             * Set the given values in the SR packet `packet`.
             * @param ssrc the SSRC
             * @param ntptime the NTP time
             * @param rtptime the RTP time
             * @param packet_count the packet count
             * @param octet_count the octet count
             */
            sr_set_sender_info(
                ssrc: number,
                ntptime: number,
                rtptime: number,
                packet_count: number,
                octet_count: number,
            ): void;
            /**
             * Move to the first extended report block in XR `packet`.
             * @returns TRUE if there was a first extended report block.
             */
            xr_first_rb(): boolean;
            xr_get_block_length(): number;
            /**
             * Get the extended report block type of the XR `packet`.
             * @returns The extended report block type.
             */
            xr_get_block_type(): RTCPXRType;
            /**
             * Parse the extended report block for DLRR report block type.
             * @param nth the index of sub-block to retrieve.
             * @param ssrc the SSRC of the receiver.
             * @param last_rr the last receiver reference timestamp of @ssrc.
             * @param delay the delay since @last_rr.
             * @returns %TRUE if the report block is correctly parsed.
             */
            xr_get_dlrr_block(nth: number, ssrc: number, last_rr: number, delay: number): boolean;
            /**
             * Retrieve the packet receipt time of `seq` which ranges in [begin_seq, end_seq).
             * @param seq the sequence to retrieve the time.
             * @param receipt_time the packet receipt time of @seq.
             * @returns %TRUE if the report block returns the receipt time correctly.
             */
            xr_get_prt_by_seq(seq: number, receipt_time: number): boolean;
            /**
             * Parse the Packet Recept Times Report Block from a XR `packet`
             * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
             * @param thinning the amount of thinning performed on the sequence number space.
             * @param begin_seq the first sequence number that this block reports on.
             * @param end_seq the last sequence number that this block reports on plus one.
             * @returns %TRUE if the report block is correctly parsed.
             */
            xr_get_prt_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number): boolean;
            /**
             * Parse the extended report block for Loss RLE and Duplicated LRE block type.
             * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
             * @param thinning the amount of thinning performed on the sequence number space.
             * @param begin_seq the first sequence number that this block reports on.
             * @param end_seq the last sequence number that this block reports on plus one.
             * @param chunk_count the number of chunks calculated by block length.
             * @returns %TRUE if the report block is correctly parsed.
             */
            xr_get_rle_info(
                ssrc: number,
                thinning: number,
                begin_seq: number,
                end_seq: number,
                chunk_count: number,
            ): boolean;
            /**
             * Retrieve actual chunk data.
             * @param nth the index of chunk to retrieve.
             * @param chunk the @nth chunk.
             * @returns %TRUE if the report block returns chunk correctly.
             */
            xr_get_rle_nth_chunk(nth: number, chunk: number): boolean;
            xr_get_rrt(timestamp: number): boolean;
            /**
             * Get the ssrc field of the XR `packet`.
             * @returns the ssrc.
             */
            xr_get_ssrc(): number;
            /**
             * Extract a basic information from static summary report block of XR `packet`.
             * @param ssrc the SSRC of the source.
             * @param begin_seq the first sequence number that this block reports on.
             * @param end_seq the last sequence number that this block reports on plus one.
             * @returns %TRUE if the report block is correctly parsed.
             */
            xr_get_summary_info(ssrc: number, begin_seq: number, end_seq: number): boolean;
            /**
             * Extract jitter information from the statistics summary. If the jitter flag in
             * a block header is set as zero, all of jitters will be zero.
             * @param min_jitter the minimum relative transit time between two sequences.
             * @param max_jitter the maximum relative transit time between two sequences.
             * @param mean_jitter the mean relative transit time between two sequences.
             * @param dev_jitter the standard deviation of the relative transit time between two sequences.
             * @returns %TRUE if the report block is correctly parsed.
             */
            xr_get_summary_jitter(
                min_jitter: number,
                max_jitter: number,
                mean_jitter: number,
                dev_jitter: number,
            ): boolean;
            /**
             * Get the number of lost or duplicate packets. If the flag in a block header
             * is set as zero, `lost_packets` or `dup_packets` will be zero.
             * @param lost_packets the number of lost packets between begin_seq and end_seq.
             * @param dup_packets the number of duplicate packets between begin_seq and end_seq.
             * @returns %TRUE if the report block is correctly parsed.
             */
            xr_get_summary_pkt(lost_packets: number, dup_packets: number): boolean;
            /**
             * Extract the value of ttl for ipv4, or hop limit for ipv6.
             * @param is_ipv4 the flag to indicate that the return values are ipv4 ttl or ipv6 hop limits.
             * @param min_ttl the minimum TTL or Hop Limit value of data packets between two sequences.
             * @param max_ttl the maximum TTL or Hop Limit value of data packets between two sequences.
             * @param mean_ttl the mean TTL or Hop Limit value of data packets between two sequences.
             * @param dev_ttl the standard deviation of the TTL or Hop Limit value of data packets between two sequences.
             * @returns %TRUE if the report block is correctly parsed.
             */
            xr_get_summary_ttl(
                is_ipv4: boolean,
                min_ttl: number,
                max_ttl: number,
                mean_ttl: number,
                dev_ttl: number,
            ): boolean;
            xr_get_voip_burst_metrics(
                burst_density: number,
                gap_density: number,
                burst_duration: number,
                gap_duration: number,
            ): boolean;
            xr_get_voip_configuration_params(gmin: number, rx_config: number): boolean;
            xr_get_voip_delay_metrics(roundtrip_delay: number, end_system_delay: number): boolean;
            xr_get_voip_jitter_buffer_params(jb_nominal: number, jb_maximum: number, jb_abs_max: number): boolean;
            xr_get_voip_metrics_ssrc(ssrc: number): boolean;
            xr_get_voip_packet_metrics(loss_rate: number, discard_rate: number): boolean;
            xr_get_voip_quality_metrics(
                r_factor: number,
                ext_r_factor: number,
                mos_lq: number,
                mos_cq: number,
            ): boolean;
            xr_get_voip_signal_metrics(signal_level: number, noise_level: number, rerl: number, gmin: number): boolean;
            /**
             * Move to the next extended report block in XR `packet`.
             * @returns TRUE if there was a next extended report block.
             */
            xr_next_rb(): boolean;
        }

        type RTPBaseAudioPayloadClass = typeof RTPBaseAudioPayload;
        abstract class RTPBaseAudioPayloadPrivate {
            static $gtype: GObject.GType<RTPBaseAudioPayloadPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RTPBaseDepayloadClass = typeof RTPBaseDepayload;
        abstract class RTPBaseDepayloadPrivate {
            static $gtype: GObject.GType<RTPBaseDepayloadPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RTPBasePayloadClass = typeof RTPBasePayload;
        abstract class RTPBasePayloadPrivate {
            static $gtype: GObject.GType<RTPBasePayloadPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The GstRTPBuffer helper functions makes it easy to parse and create regular
         * #GstBuffer objects that contain RTP payloads. These buffers are typically of
         * 'application/x-rtp' #GstCaps.
         */
        class RTPBuffer {
            static $gtype: GObject.GType<RTPBuffer>;

            // Fields

            state: number;
            data: any[];
            size: number[];

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Allocate enough data in `buffer` to hold an RTP packet with `csrc_count` CSRCs,
             * a payload length of `payload_len` and padding of `pad_len`.
             * `buffer` must be writable and all previous memory in `buffer` will be freed.
             * If `pad_len` is >0, the padding bit will be set. All other RTP header fields
             * will be set to 0/FALSE.
             * @param buffer a #GstBuffer
             * @param payload_len the length of the payload
             * @param pad_len the amount of padding
             * @param csrc_count the number of CSRC entries
             */
            static allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void;
            /**
             * Calculate the header length of an RTP packet with `csrc_count` CSRC entries.
             * An RTP packet can have at most 15 CSRC entries.
             * @param csrc_count the number of CSRC entries
             */
            static calc_header_len(csrc_count: number): number;
            /**
             * Calculate the total length of an RTP packet with a payload size of `payload_len,`
             * a padding of `pad_len` and a `csrc_count` CSRC entries.
             * @param payload_len the length of the payload
             * @param pad_len the amount of padding
             * @param csrc_count the number of CSRC entries
             */
            static calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
            /**
             * Calculate the length of the payload of an RTP packet with size `packet_len,`
             * a padding of `pad_len` and a `csrc_count` CSRC entries.
             * @param packet_len the length of the total RTP packet
             * @param pad_len the amount of padding
             * @param csrc_count the number of CSRC entries
             */
            static calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
            /**
             * Compare two sequence numbers, taking care of wraparounds. This function
             * returns the difference between `seqnum1` and `seqnum2`.
             * @param seqnum1 a sequence number
             * @param seqnum2 a sequence number
             */
            static compare_seqnum(seqnum1: number, seqnum2: number): number;
            /**
             * Get the default clock-rate for the static payload type `payload_type`.
             * @param payload_type the static payload type
             */
            static default_clock_rate(payload_type: number): number;
            /**
             * Update the `exttimestamp` field with the extended timestamp of `timestamp`
             * For the first call of the method, `exttimestamp` should point to a location
             * with a value of -1.
             *
             * This function is able to handle both forward and backward timestamps taking
             * into account:
             *   - timestamp wraparound making sure that the returned value is properly increased.
             *   - timestamp unwraparound making sure that the returned value is properly decreased.
             * @param exttimestamp a previous extended timestamp
             * @param timestamp a new timestamp
             */
            static ext_timestamp(exttimestamp: number, timestamp: number): [number, number];
            /**
             * Similar to gst_rtp_buffer_get_extension_onebyte_header, but working
             * on the #GBytes you get from gst_rtp_buffer_get_extension_bytes.
             * Parses RFC 5285 style header extensions with a one byte header. It will
             * return the nth extension with the requested id.
             * @param bytes #GBytes
             * @param bit_pattern The bit-pattern. Anything but 0xBEDE is rejected.
             * @param id The ID of the header extension to be read (between 1 and 14).
             * @param nth Read the nth extension packet with the requested ID
             */
            static get_extension_onebyte_header_from_bytes(
                bytes: GLib.Bytes | Uint8Array,
                bit_pattern: number,
                id: number,
                nth: number,
            ): [boolean, Uint8Array];
            /**
             * Map the contents of `buffer` into `rtp`.
             * @param buffer a #GstBuffer
             * @param flags #GstMapFlags
             */
            static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
            /**
             * Allocate a new #GstBuffer with enough data to hold an RTP packet with
             * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
             * All other RTP header fields will be set to 0/FALSE.
             * @param payload_len the length of the payload
             * @param pad_len the amount of padding
             * @param csrc_count the number of CSRC entries
             */
            static new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
            /**
             * Create a new #GstBuffer that can hold an RTP packet that is exactly
             * `packet_len` long. The length of the payload depends on `pad_len` and
             * `csrc_count` and can be calculated with gst_rtp_buffer_calc_payload_len().
             * All RTP header fields will be set to 0/FALSE.
             * @param packet_len the total length of the packet
             * @param pad_len the amount of padding
             * @param csrc_count the number of CSRC entries
             */
            static new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
            /**
             * Create a new buffer and set the data to a copy of `len`
             * bytes of `data` and the size to `len`. The data will be freed when the buffer
             * is freed.
             * @param data data for the new   buffer
             */
            static new_copy_data(data: Uint8Array | string): Gst.Buffer;
            /**
             * Create a new buffer and set the data and size of the buffer to `data` and `len`
             * respectively. `data` will be freed when the buffer is unreffed, so this
             * function transfers ownership of `data` to the new buffer.
             * @param data data for the new buffer
             */
            static new_take_data(data: Uint8Array | string): Gst.Buffer;

            // Methods

            /**
             * Adds a RFC 5285 header extension with a one byte header to the end of the
             * RTP header. If there is already a RFC 5285 header extension with a one byte
             * header, the new extension will be appended.
             * It will not work if there is already a header extension that does not follow
             * the mechanism described in RFC 5285 or if there is a header extension with
             * a two bytes header as described in RFC 5285. In that case, use
             * gst_rtp_buffer_add_extension_twobytes_header()
             * @param id The ID of the header extension (between 1 and 14).
             * @param data location for data
             * @returns %TRUE if header extension could be added
             */
            add_extension_onebyte_header(id: number, data: Uint8Array | string): boolean;
            /**
             * Adds a RFC 5285 header extension with a two bytes header to the end of the
             * RTP header. If there is already a RFC 5285 header extension with a two bytes
             * header, the new extension will be appended.
             * It will not work if there is already a header extension that does not follow
             * the mechanism described in RFC 5285 or if there is a header extension with
             * a one byte header as described in RFC 5285. In that case, use
             * gst_rtp_buffer_add_extension_onebyte_header()
             * @param appbits Application specific bits
             * @param id The ID of the header extension
             * @param data location for data
             * @returns %TRUE if header extension could be added
             */
            add_extension_twobytes_header(appbits: number, id: number, data: Uint8Array | string): boolean;
            /**
             * Get the CSRC at index `idx` in `buffer`.
             * @param idx the index of the CSRC to get
             * @returns the CSRC at index @idx in host order.
             */
            get_csrc(idx: number): number;
            /**
             * Get the CSRC count of the RTP packet in `buffer`.
             * @returns the CSRC count of @buffer.
             */
            get_csrc_count(): number;
            /**
             * Check if the extension bit is set on the RTP packet in `buffer`.
             * @returns TRUE if @buffer has the extension bit set.
             */
            get_extension(): boolean;
            /**
             * Similar to gst_rtp_buffer_get_extension_data, but more suitable for language
             * bindings usage. `bits` will contain the extension 16 bits of custom data and
             * the extension data (not including the extension header) is placed in a new
             * #GBytes structure.
             *
             * If `rtp` did not contain an extension, this function will return %NULL, with
             * `bits` unchanged. If there is an extension header but no extension data then
             * an empty #GBytes will be returned.
             * @returns A new #GBytes if an extension header was present and %NULL otherwise.
             */
            get_extension_data(): [GLib.Bytes | null, number];
            /**
             * Parses RFC 5285 style header extensions with a one byte header. It will
             * return the nth extension with the requested id.
             * @param id The ID of the header extension to be read (between 1 and 14).
             * @param nth Read the nth extension packet with the requested ID
             * @returns TRUE if @buffer had the requested header extension
             */
            get_extension_onebyte_header(id: number, nth: number): [boolean, Uint8Array | null];
            /**
             * Parses RFC 5285 style header extensions with a two bytes header. It will
             * return the nth extension with the requested id.
             * @param id The ID of the header extension to be read (between 1 and 14).
             * @param nth Read the nth extension packet with the requested ID
             * @returns TRUE if @buffer had the requested header extension
             */
            get_extension_twobytes_header(id: number, nth: number): [boolean, number, Uint8Array | null];
            /**
             * Return the total length of the header in `buffer`. This include the length of
             * the fixed header, the CSRC list and the extension header.
             * @returns The total length of the header in @buffer.
             */
            get_header_len(): number;
            /**
             * Check if the marker bit is set on the RTP packet in `buffer`.
             * @returns TRUE if @buffer has the marker bit set.
             */
            get_marker(): boolean;
            /**
             * Return the total length of the packet in `buffer`.
             * @returns The total length of the packet in @buffer.
             */
            get_packet_len(): number;
            /**
             * Check if the padding bit is set on the RTP packet in `buffer`.
             * @returns TRUE if @buffer has the padding bit set.
             */
            get_padding(): boolean;
            /**
             * Create a buffer of the payload of the RTP packet in `buffer`. This function
             * will internally create a subbuffer of `buffer` so that a memcpy can be
             * avoided.
             * @returns A new buffer with the data of the payload.
             */
            get_payload_buffer(): Gst.Buffer;
            /**
             * Similar to gst_rtp_buffer_get_payload, but more suitable for language
             * bindings usage. The return value is a pointer to a #GBytes structure
             * containing the payload data in `rtp`.
             * @returns A new #GBytes containing the payload data in @rtp.
             */
            get_payload(): GLib.Bytes | null;
            /**
             * Get the length of the payload of the RTP packet in `buffer`.
             * @returns The length of the payload in @buffer.
             */
            get_payload_len(): number;
            /**
             * Create a subbuffer of the payload of the RTP packet in `buffer`. `offset` bytes
             * are skipped in the payload and the subbuffer will be of size `len`.
             * If `len` is -1 the total payload starting from `offset` is subbuffered.
             * @param offset the offset in the payload
             * @param len the length in the payload
             * @returns A new buffer with the specified data of the payload.
             */
            get_payload_subbuffer(offset: number, len: number): Gst.Buffer;
            /**
             * Get the payload type of the RTP packet in `buffer`.
             * @returns The payload type.
             */
            get_payload_type(): number;
            /**
             * Get the sequence number of the RTP packet in `buffer`.
             * @returns The sequence number in host order.
             */
            get_seq(): number;
            /**
             * Get the SSRC of the RTP packet in `buffer`.
             * @returns the SSRC of @buffer in host order.
             */
            get_ssrc(): number;
            /**
             * Get the timestamp of the RTP packet in `buffer`.
             * @returns The timestamp in host order.
             */
            get_timestamp(): number;
            /**
             * Get the version number of the RTP packet in `buffer`.
             * @returns The version of @buffer.
             */
            get_version(): number;
            /**
             * Set the amount of padding in the RTP packet in `buffer` to
             * `len`. If `len` is 0, the padding is removed.
             *
             * NOTE: This function does not work correctly.
             * @param len the new amount of padding
             */
            pad_to(len: number): void;
            /**
             * Unsets the extension bit of the RTP buffer and removes the extension header
             * and data.
             *
             * If the RTP buffer has no header extension data, the action has no effect.
             * The RTP buffer must be mapped READWRITE only once and the underlying
             * GstBuffer must be writable.
             */
            remove_extension_data(): void;
            /**
             * Modify the CSRC at index `idx` in `buffer` to `csrc`.
             * @param idx the CSRC index to set
             * @param csrc the CSRC in host order to set at @idx
             */
            set_csrc(idx: number, csrc: number): void;
            /**
             * Set the extension bit on the RTP packet in `buffer` to `extension`.
             * @param extension the new extension
             */
            set_extension(extension: boolean): void;
            /**
             * Set the extension bit of the rtp buffer and fill in the `bits` and `length` of the
             * extension header. If the existing extension data is not large enough, it will
             * be made larger.
             *
             * Will also shorten the extension data from 1.20.
             * @param bits the bits specific for the extension
             * @param length the length that counts the number of 32-bit words in the extension, excluding the extension header ( therefore zero is a valid length)
             * @returns True if done.
             */
            set_extension_data(bits: number, length: number): boolean;
            /**
             * Set the marker bit on the RTP packet in `buffer` to `marker`.
             * @param marker the new marker
             */
            set_marker(marker: boolean): void;
            /**
             * Set the total `rtp` size to `len`. The data in the buffer will be made
             * larger if needed. Any padding will be removed from the packet.
             * @param len the new packet length
             */
            set_packet_len(len: number): void;
            /**
             * Set the padding bit on the RTP packet in `buffer` to `padding`.
             * @param padding the new padding
             */
            set_padding(padding: boolean): void;
            /**
             * Set the payload type of the RTP packet in `buffer` to `payload_type`.
             * @param payload_type the new type
             */
            set_payload_type(payload_type: number): void;
            /**
             * Set the sequence number of the RTP packet in `buffer` to `seq`.
             * @param seq the new sequence number
             */
            set_seq(seq: number): void;
            /**
             * Set the SSRC on the RTP packet in `buffer` to `ssrc`.
             * @param ssrc the new SSRC
             */
            set_ssrc(ssrc: number): void;
            /**
             * Set the timestamp of the RTP packet in `buffer` to `timestamp`.
             * @param timestamp the new timestamp
             */
            set_timestamp(timestamp: number): void;
            /**
             * Set the version of the RTP packet in `buffer` to `version`.
             * @param version the new version
             */
            set_version(version: number): void;
            /**
             * Unmap `rtp` previously mapped with gst_rtp_buffer_map().
             */
            unmap(): void;
        }

        type RTPHeaderExtensionClass = typeof RTPHeaderExtension;
        /**
         * Structure holding default payload type information.
         */
        class RTPPayloadInfo {
            static $gtype: GObject.GType<RTPPayloadInfo>;

            // Fields

            payload_type: number;
            media: string;
            encoding_name: string;
            clock_rate: number;
            encoding_parameters: string;
            bitrate: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    payload_type: number;
                    media: string;
                    encoding_name: string;
                    clock_rate: number;
                    encoding_parameters: string;
                    bitrate: number;
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Get the #GstRTPPayloadInfo for `media` and `encoding_name`. This function is
             * mostly used to get the default clock-rate and bandwidth for dynamic payload
             * types specified with `media` and `encoding` name.
             *
             * The search for `encoding_name` will be performed in a case insensitive way.
             * @param media the media to find
             * @param encoding_name the encoding name to find
             */
            static for_name(media: string, encoding_name: string): RTPPayloadInfo | null;
            /**
             * Get the #GstRTPPayloadInfo for `payload_type`. This function is
             * mostly used to get the default clock-rate and bandwidth for static payload
             * types specified with `payload_type`.
             * @param payload_type the payload_type to find
             */
            static for_pt(payload_type: number): RTPPayloadInfo | null;
        }

        /**
         * Meta describing the source(s) of the buffer.
         */
        class RTPSourceMeta {
            static $gtype: GObject.GType<RTPSourceMeta>;

            // Fields

            ssrc: number;
            ssrc_valid: boolean;
            csrc: number[];
            csrc_count: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;

            // Methods

            /**
             * Appends `csrc` to the list of contributing sources in `meta`.
             * @param csrc the csrcs to append
             * @returns %TRUE if all elements in @csrc was added, %FALSE otherwise.
             */
            append_csrc(csrc: number[]): boolean;
            /**
             * Count the total number of RTP sources found in `meta,` both SSRC and CSRC.
             * @returns The number of RTP sources
             */
            get_source_count(): number;
            /**
             * Sets `ssrc` in `meta`. If `ssrc` is %NULL the ssrc of `meta` will be unset.
             * @param ssrc pointer to the SSRC
             * @returns %TRUE on success, %FALSE otherwise.
             */
            set_ssrc(ssrc?: number | null): boolean;
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

    export default GstRtp;
}

declare module 'gi://GstRtp' {
    import GstRtp10 from 'gi://GstRtp?version=1.0';
    export default GstRtp10;
}
// END
