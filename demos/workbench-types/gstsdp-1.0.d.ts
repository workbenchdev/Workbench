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

declare module 'gi://GstSdp?version=1.0' {
    // Module dependencies
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstSdp {
        /**
         * GstSdp-1.0
         */

        /**
         * The different cache types
         */

        /**
         * The different cache types
         */
        export namespace MIKEYCacheType {
            export const $gtype: GObject.GType<MIKEYCacheType>;
        }

        enum MIKEYCacheType {
            /**
             * The envelope key MUST NOT be cached
             */
            NONE,
            /**
             * The envelope key MUST be cached
             */
            ALWAYS,
            /**
             * The envelope key MUST be cached, but only
             *                           to be used for the specific CSB.
             */
            FOR_CSB,
        }
        /**
         * The encryption algorithm used to encrypt the Encr data field
         */

        /**
         * The encryption algorithm used to encrypt the Encr data field
         */
        export namespace MIKEYEncAlg {
            export const $gtype: GObject.GType<MIKEYEncAlg>;
        }

        enum MIKEYEncAlg {
            /**
             * no encryption
             */
            NULL,
            /**
             * AES-CM using a 128-bit key
             */
            AES_CM_128,
            /**
             * AES Key Wrap using a 128-bit key
             */
            AES_KW_128,
            /**
             * AES-GCM using a 128-bit key (Since: 1.16)
             */
            AES_GCM_128,
        }
        /**
         * The key validity type
         */

        /**
         * The key validity type
         */
        export namespace MIKEYKVType {
            export const $gtype: GObject.GType<MIKEYKVType>;
        }

        enum MIKEYKVType {
            /**
             * No specific usage rule
             */
            NULL,
            /**
             * The key is associated with the SPI/MKI
             */
            SPI,
            /**
             * The key has a start and expiration time
             */
            INTERVAL,
        }
        /**
         * The type of key.
         */

        /**
         * The type of key.
         */
        export namespace MIKEYKeyDataType {
            export const $gtype: GObject.GType<MIKEYKeyDataType>;
        }

        enum MIKEYKeyDataType {
            /**
             * a TEK Generation Key
             */
            TGK,
            /**
             * Traffic-Encrypting Key
             */
            TEK,
        }
        /**
         * Specifies the authentication algorithm used
         */

        /**
         * Specifies the authentication algorithm used
         */
        export namespace MIKEYMacAlg {
            export const $gtype: GObject.GType<MIKEYMacAlg>;
        }

        enum MIKEYMacAlg {
            /**
             * no authentication
             */
            NULL,
            /**
             * HMAC-SHA-1-160
             */
            HMAC_SHA_1_160,
        }
        /**
         * Specifies the method of uniquely mapping Crypto Sessions to the security
         * protocol sessions.
         */

        /**
         * Specifies the method of uniquely mapping Crypto Sessions to the security
         * protocol sessions.
         */
        export namespace MIKEYMapType {
            export const $gtype: GObject.GType<MIKEYMapType>;
        }

        enum MIKEYMapType {
            /**
             * SRTP
             */
            MIKEY_MAP_TYPE_SRTP,
        }
        /**
         * The PRF function that has been/will be used for key derivation
         */

        /**
         * The PRF function that has been/will be used for key derivation
         */
        export namespace MIKEYPRFFunc {
            export const $gtype: GObject.GType<MIKEYPRFFunc>;
        }

        enum MIKEYPRFFunc {
            /**
             * MIKEY-1 PRF function
             */
            MIKEY_PRF_MIKEY_1,
        }
        /**
         * Different MIKEY Payload types.
         */

        /**
         * Different MIKEY Payload types.
         */
        export namespace MIKEYPayloadType {
            export const $gtype: GObject.GType<MIKEYPayloadType>;
        }

        enum MIKEYPayloadType {
            /**
             * Last payload
             */
            LAST,
            /**
             * Key data transport payload
             */
            KEMAC,
            /**
             * Envelope data payload
             */
            PKE,
            /**
             * DH data payload
             */
            DH,
            /**
             * Signature payload
             */
            SIGN,
            /**
             * Timestamp payload
             */
            T,
            /**
             * ID payload
             */
            ID,
            /**
             * Certificate Payload
             */
            CERT,
            /**
             * Cert hash payload
             */
            CHASH,
            /**
             * Verification message payload
             */
            V,
            /**
             * Security Policy payload
             */
            SP,
            /**
             * RAND payload
             */
            RAND,
            /**
             * Error payload
             */
            ERR,
            /**
             * Key data sub-payload
             */
            KEY_DATA,
            /**
             * General Extension Payload
             */
            GEN_EXT,
        }
        /**
         * Specifies the security protocol
         */

        /**
         * Specifies the security protocol
         */
        export namespace MIKEYSecProto {
            export const $gtype: GObject.GType<MIKEYSecProto>;
        }

        enum MIKEYSecProto {
            /**
             * SRTP
             */
            MIKEY_SEC_PROTO_SRTP,
        }
        /**
         * This policy specifies the parameters for SRTP and SRTCP
         */

        /**
         * This policy specifies the parameters for SRTP and SRTCP
         */
        export namespace MIKEYSecSRTP {
            export const $gtype: GObject.GType<MIKEYSecSRTP>;
        }

        enum MIKEYSecSRTP {
            /**
             * Encryption algorithm
             */
            ENC_ALG,
            /**
             * Session Encr. key length
             */
            ENC_KEY_LEN,
            /**
             * Authentication algorithm
             */
            AUTH_ALG,
            /**
             * Session Auth. key length
             */
            AUTH_KEY_LEN,
            /**
             * Session Salt key length
             */
            SALT_KEY_LEN,
            /**
             * SRTP Pseudo Random Function
             */
            PRF,
            /**
             * Key derivation rate
             */
            KEY_DERIV_RATE,
            /**
             * SRTP encryption off/on, 0 if off, 1 if on
             */
            SRTP_ENC,
            /**
             * SRTCP encryption off/on, 0 if off, 1 if on
             */
            SRTCP_ENC,
            /**
             * sender's FEC order
             */
            FEC_ORDER,
            /**
             * SRTP authentication off/on, 0 if off, 1 if on
             */
            SRTP_AUTH,
            /**
             * Authentication tag length
             */
            AUTH_TAG_LEN,
            /**
             * SRTP prefix length
             */
            SRTP_PREFIX_LEN,
            /**
             * AEAD authentication tag length (Since: 1.16)
             */
            AEAD_AUTH_TAG_LEN,
        }
        /**
         * Specifies the timestamp type.
         */

        /**
         * Specifies the timestamp type.
         */
        export namespace MIKEYTSType {
            export const $gtype: GObject.GType<MIKEYTSType>;
        }

        enum MIKEYTSType {
            /**
             * an NTP time in UTC timezone
             */
            NTP_UTC,
            /**
             * an NTP time
             */
            NTP,
            /**
             * a counter
             */
            COUNTER,
        }
        /**
         * Different MIKEY data types.
         */

        /**
         * Different MIKEY data types.
         */
        export namespace MIKEYType {
            export const $gtype: GObject.GType<MIKEYType>;
        }

        enum MIKEYType {
            /**
             * Invalid type
             */
            INVALID,
            /**
             * Initiator's pre-shared key message
             */
            PSK_INIT,
            /**
             * Verification message of a Pre-shared key message
             */
            PSK_VERIFY,
            /**
             * Initiator's public-key transport message
             */
            PK_INIT,
            /**
             * Verification message of a public-key message
             */
            PK_VERIFY,
            /**
             * Initiator's DH exchange message
             */
            DH_INIT,
            /**
             * Responder's DH exchange message
             */
            DH_RESP,
            /**
             * Error message
             */
            ERROR,
        }
        /**
         * Return values for the SDP functions.
         */

        /**
         * Return values for the SDP functions.
         */
        export namespace SDPResult {
            export const $gtype: GObject.GType<SDPResult>;
        }

        enum SDPResult {
            /**
             * A successful return value
             */
            OK,
            /**
             * a function was given invalid parameters
             */
            EINVAL,
        }
        /**
         * The supported MIKEY version 1.
         */
        const MIKEY_VERSION: number;
        /**
         * The Application-Specific Maximum bandwidth modifier.
         */
        const SDP_BWTYPE_AS: string;
        /**
         * The Conference Total bandwidth modifier.
         */
        const SDP_BWTYPE_CT: string;
        /**
         * The extension prefix bandwidth modifier.
         */
        const SDP_BWTYPE_EXT_PREFIX: string;
        /**
         * RTCP bandwidth allocated to data receivers (RFC 3556).
         */
        const SDP_BWTYPE_RR: string;
        /**
         * RTCP bandwidth allocated to active data senders (RFC 3556).
         */
        const SDP_BWTYPE_RS: string;
        /**
         * Transport Independent Application Specific Maximum bandwidth (RFC 3890).
         */
        const SDP_BWTYPE_TIAS: string;
        /**
         * Check if the given `addr` is a multicast address.
         * @param nettype a network type
         * @param addrtype an address type
         * @param addr an address
         * @returns TRUE when @addr is multicast.
         */
        function sdp_address_is_multicast(nettype: string, addrtype: string, addr: string): boolean;
        /**
         * Makes key management data
         * @param uri a #gchar URI
         * @param base64 a #gchar base64-encoded key data
         * @returns a #gchar key-mgmt data,
         */
        function sdp_make_keymgmt(uri: string, base64: string): string;
        /**
         * Initialize `media` so that its contents are as if it was freshly allocated
         * with gst_sdp_media_new(). This function is mostly used to initialize a media
         * allocated on the stack. gst_sdp_media_uninit() undoes this operation.
         *
         * When this function is invoked on newly allocated data (with malloc or on the
         * stack), its contents should be set to 0 before calling this function.
         * @returns a #GstSDPResult.
         */
        function sdp_media_init(): [SDPResult, SDPMedia];
        /**
         * Allocate a new GstSDPMedia and store the result in `media`.
         * @returns a #GstSDPResult.
         */
        function sdp_media_new(): [SDPResult, SDPMedia];
        /**
         * Mapping of caps to SDP fields:
         *
         * a=rtpmap:(payload) (encoding_name) or (clock_rate)[or (encoding_params)]
         *
         * a=framesize:(payload) (width)-(height)
         *
         * a=fmtp:(payload) (param)[=(value)];...
         *
         * a=rtcp-fb:(payload) (param1) [param2]...
         *
         * a=extmap:(id)[/direction] (extensionname) (extensionattributes)
         * @param caps a #GstCaps
         * @returns a #GstSDPResult.
         */
        function sdp_media_set_media_from_caps(caps: Gst.Caps): [SDPResult, SDPMedia];
        /**
         * Creates a uri from `msg` with the given `scheme`. The uri has the format:
         *
         *  \`scheme:`///[#type=value *[&type=value]]
         *
         *  Where each value is url encoded.
         * @param scheme the uri scheme
         * @param msg the #GstSDPMessage
         * @returns a uri for @msg.
         */
        function sdp_message_as_uri(scheme: string, msg: SDPMessage): string;
        /**
         * Initialize `msg` so that its contents are as if it was freshly allocated
         * with gst_sdp_message_new(). This function is mostly used to initialize a message
         * allocated on the stack. gst_sdp_message_uninit() undoes this operation.
         *
         * When this function is invoked on newly allocated data (with malloc or on the
         * stack), its contents should be set to 0 before calling this function.
         * @returns a #GstSDPResult.
         */
        function sdp_message_init(): [SDPResult, SDPMessage];
        /**
         * Allocate a new GstSDPMessage and store the result in `msg`.
         * @returns a #GstSDPResult.
         */
        function sdp_message_new(): [SDPResult, SDPMessage];
        /**
         * Parse `text` and create a new SDPMessage from these.
         * @param text A dynamically allocated string representing the SDP description
         * @returns a #GstSDPResult.
         */
        function sdp_message_new_from_text(text: string): [SDPResult, SDPMessage];
        /**
         * Parse the contents of `size` bytes pointed to by `data` and store the result in
         * `msg`.
         * @param data the start of the buffer
         * @param msg the result #GstSDPMessage
         * @returns #GST_SDP_OK on success.
         */
        function sdp_message_parse_buffer(data: Uint8Array | string, msg: SDPMessage): SDPResult;
        /**
         * Parse the null-terminated `uri` and store the result in `msg`.
         *
         * The uri should be of the form:
         *
         *  scheme://[address[:ttl=ttl][:noa=noa]]/[sessionname]
         *               [#type=value *[&type=value]]
         *
         *  where value is url encoded. This looslely resembles
         *  http://tools.ietf.org/html/draft-fujikawa-sdp-url-01
         * @param uri the start of the uri
         * @param msg the result #GstSDPMessage
         * @returns #GST_SDP_OK on success.
         */
        function sdp_message_parse_uri(uri: string, msg: SDPMessage): SDPResult;
        abstract class MIKEYDecryptInfo {
            static $gtype: GObject.GType<MIKEYDecryptInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class MIKEYEncryptInfo {
            static $gtype: GObject.GType<MIKEYEncryptInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The Security policy Map item for SRTP
         */
        class MIKEYMapSRTP {
            static $gtype: GObject.GType<MIKEYMapSRTP>;

            // Fields

            policy: number;
            ssrc: number;
            roc: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    policy: number;
                    ssrc: number;
                    roc: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Structure holding the information of the MIKEY message
         */
        class MIKEYMessage {
            static $gtype: GObject.GType<MIKEYMessage>;

            // Fields

            version: number;
            type: MIKEYType;
            V: boolean;
            prf_func: MIKEYPRFFunc;
            CSB_id: number;
            map_type: MIKEYMapType;
            map_info: any[];
            payloads: any[];

            // Constructors

            constructor(
                properties?: Partial<{
                    version: number;
                    type: MIKEYType;
                    V: boolean;
                    prf_func: MIKEYPRFFunc;
                    CSB_id: number;
                    map_type: MIKEYMapType;
                    map_info: any[];
                    payloads: any[];
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): MIKEYMessage;

            static new_from_bytes(bytes: GLib.Bytes | Uint8Array, info: MIKEYDecryptInfo): MIKEYMessage;

            static new_from_caps(caps: Gst.Caps): MIKEYMessage;

            static new_from_data(data: Uint8Array | string, info: MIKEYDecryptInfo): MIKEYMessage;

            // Methods

            /**
             * Add a Crypto policy for SRTP to `msg`.
             * @param policy The security policy applied for the stream with @ssrc
             * @param ssrc the SSRC that must be used for the stream
             * @param roc current rollover counter
             * @returns %TRUE on success
             */
            add_cs_srtp(policy: number, ssrc: number, roc: number): boolean;
            /**
             * Add a new payload to `msg`.
             * @param payload a #GstMIKEYPayload
             * @returns %TRUE on success
             */
            add_payload(payload: MIKEYPayload): boolean;
            /**
             * Add a new PKE payload to `msg` with the given parameters.
             * @param C envelope key cache indicator
             * @param data the encrypted envelope key
             * @returns %TRUE on success
             */
            add_pke(C: MIKEYCacheType, data: Uint8Array | string): boolean;
            /**
             * Add a new RAND payload to `msg` with the given parameters.
             * @param rand random data
             * @returns %TRUE on success
             */
            add_rand(rand: Uint8Array | string): boolean;
            /**
             * Add a new RAND payload to `msg` with `len` random bytes.
             * @param len length
             * @returns %TRUE on success
             */
            add_rand_len(len: number): boolean;
            /**
             * Add a new T payload to `msg` with the given parameters.
             * @param type specifies the timestamp type used
             * @param ts_value The timestamp value of the specified @type
             * @returns %TRUE on success
             */
            add_t(type: MIKEYTSType, ts_value: Uint8Array | string): boolean;
            /**
             * Add a new T payload to `msg` that contains the current time
             * in NTP-UTC format.
             * @returns %TRUE on success
             */
            add_t_now_ntp_utc(): boolean;
            base64_encode(): string;
            /**
             * Find the `nth` occurrence of the payload with `type` in `msg`.
             * @param type a #GstMIKEYPayloadType
             * @param nth payload to find
             * @returns the @nth #GstMIKEYPayload of @type.
             */
            find_payload(type: MIKEYPayloadType, nth: number): MIKEYPayload | null;
            /**
             * Get the policy information of `msg` at `idx`.
             * @param idx an index
             * @returns a #GstMIKEYMapSRTP
             */
            get_cs_srtp(idx: number): MIKEYMapSRTP | null;
            /**
             * Get the number of crypto sessions in `msg`.
             * @returns the number of crypto sessions
             */
            get_n_cs(): number;
            /**
             * Get the number of payloads in `msg`.
             * @returns the number of payloads in @msg
             */
            get_n_payloads(): number;
            /**
             * Get the #GstMIKEYPayload at `idx` in `msg`
             * @param idx an index
             * @returns the #GstMIKEYPayload at @idx. The payload remains valid for as long as it is part of @msg.
             */
            get_payload(idx: number): MIKEYPayload | null;
            /**
             * Insert a Crypto Session map for SRTP in `msg` at `idx`
             *
             * When `idx` is -1, the policy will be appended.
             * @param idx the index to insert at
             * @param map the map info
             * @returns %TRUE on success
             */
            insert_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
            /**
             * Insert the `payload` at index `idx` in `msg`. If `idx` is -1, the payload
             * will be appended to `msg`.
             * @param idx an index
             * @param payload a #GstMIKEYPayload
             * @returns %TRUE on success
             */
            insert_payload(idx: number, payload: MIKEYPayload): boolean;
            /**
             * Remove the SRTP policy at `idx`.
             * @param idx the index to remove
             * @returns %TRUE on success
             */
            remove_cs_srtp(idx: number): boolean;
            /**
             * Remove the payload in `msg` at `idx`
             * @param idx an index
             * @returns %TRUE on success
             */
            remove_payload(idx: number): boolean;
            /**
             * Replace a Crypto Session map for SRTP in `msg` at `idx` with `map`.
             * @param idx the index to insert at
             * @param map the map info
             * @returns %TRUE on success
             */
            replace_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
            /**
             * Replace the payload at `idx` in `msg` with `payload`.
             * @param idx an index
             * @param payload a #GstMIKEYPayload
             * @returns %TRUE on success
             */
            replace_payload(idx: number, payload: MIKEYPayload): boolean;
            /**
             * Set the information in `msg`.
             * @param version a version
             * @param type a #GstMIKEYType
             * @param V verify flag
             * @param prf_func the #GstMIKEYPRFFunc function to use
             * @param CSB_id the Crypto Session Bundle id
             * @param map_type the #GstMIKEYMapType
             * @returns %TRUE on success
             */
            set_info(
                version: number,
                type: MIKEYType,
                V: boolean,
                prf_func: MIKEYPRFFunc,
                CSB_id: number,
                map_type: MIKEYMapType,
            ): boolean;
            /**
             * Convert `msg` to a #GBytes.
             * @param info a #GstMIKEYEncryptInfo
             * @returns a new #GBytes for @msg.
             */
            to_bytes(info: MIKEYEncryptInfo): GLib.Bytes;
            to_caps(caps: Gst.Caps): boolean;
        }

        /**
         * Hold the common fields for all payloads
         */
        class MIKEYPayload {
            static $gtype: GObject.GType<MIKEYPayload>;

            // Fields

            type: MIKEYPayloadType;
            len: number;

            // Constructors

            constructor(type: MIKEYPayloadType);
            _init(...args: any[]): void;

            static ['new'](type: MIKEYPayloadType): MIKEYPayload;

            // Methods

            /**
             * Add a new sub payload to `payload`.
             * @param newpay a #GstMIKEYPayload to add
             * @returns %TRUE on success.
             */
            kemac_add_sub(newpay: MIKEYPayload): boolean;
            /**
             * Get the number of sub payloads of `payload`. `payload` should be of type
             * %GST_MIKEY_PT_KEMAC.
             * @returns the number of sub payloads in @payload
             */
            kemac_get_n_sub(): number;
            /**
             * Get the sub payload of `payload` at `idx`. `payload` should be of type
             * %GST_MIKEY_PT_KEMAC.
             * @param idx an index
             * @returns the #GstMIKEYPayload at @idx.
             */
            kemac_get_sub(idx: number): MIKEYPayload | null;
            /**
             * Remove the sub payload at `idx` in `payload`.
             * @param idx the index to remove
             * @returns %TRUE on success.
             */
            kemac_remove_sub(idx: number): boolean;
            /**
             * Set the KEMAC parameters. `payload` should point to a %GST_MIKEY_PT_KEMAC
             * payload.
             * @param enc_alg the #GstMIKEYEncAlg
             * @param mac_alg a #GstMIKEYMacAlg
             * @returns %TRUE on success
             */
            kemac_set(enc_alg: MIKEYEncAlg, mac_alg: MIKEYMacAlg): boolean;
            /**
             * Set the key validity period in the %GST_MIKEY_PT_KEY_DATA `payload`.
             * @param vf_data the Valid From data
             * @param vt_data the Valid To data
             * @returns %TRUE on success
             */
            key_data_set_interval(vf_data: Uint8Array | string, vt_data: Uint8Array | string): boolean;
            /**
             * Set `key_len` bytes of `key_data` of type `key_type` as the key for the
             * %GST_MIKEY_PT_KEY_DATA `payload`.
             * @param key_type a #GstMIKEYKeyDataType
             * @param key_data the key of type @key_type
             * @returns %TRUE on success
             */
            key_data_set_key(key_type: MIKEYKeyDataType, key_data: Uint8Array | string): boolean;
            /**
             * Set the salt key data. If `salt_len` is 0 and `salt_data` is %NULL, the
             * salt data will be removed.
             * @param salt_data the salt
             * @returns %TRUE on success
             */
            key_data_set_salt(salt_data?: Uint8Array | null): boolean;
            /**
             * Set the SPI/MKI validity in the %GST_MIKEY_PT_KEY_DATA `payload`.
             * @param spi_data the SPI/MKI data
             * @returns %TRUE on success
             */
            key_data_set_spi(spi_data: Uint8Array | string): boolean;
            /**
             * Set the PKE values in `payload`. `payload` must be of type
             * %GST_MIKEY_PT_PKE.
             * @param C envelope key cache indicator
             * @param data the encrypted envelope key
             * @returns %TRUE on success
             */
            pke_set(C: MIKEYCacheType, data: Uint8Array | string): boolean;
            /**
             * Set the random values in a %GST_MIKEY_PT_RAND `payload`.
             * @param rand random values
             * @returns %TRUE on success
             */
            rand_set(rand: Uint8Array | string): boolean;
            /**
             * Add a new parameter to the %GST_MIKEY_PT_SP `payload` with `type,` `len`
             * and `val`.
             * @param type a type
             * @param val @len bytes of data
             * @returns %TRUE on success
             */
            sp_add_param(type: number, val: Uint8Array | string): boolean;
            /**
             * Get the number of security policy parameters in a %GST_MIKEY_PT_SP
             * `payload`.
             * @returns the number of parameters in @payload
             */
            sp_get_n_params(): number;
            /**
             * Get the Security Policy parameter in a %GST_MIKEY_PT_SP `payload`
             * at `idx`.
             * @param idx an index
             * @returns the #GstMIKEYPayloadSPParam at @idx in @payload
             */
            sp_get_param(idx: number): MIKEYPayloadSPParam | null;
            /**
             * Remove the Security Policy parameters from a %GST_MIKEY_PT_SP
             * `payload` at `idx`.
             * @param idx an index
             * @returns %TRUE on success
             */
            sp_remove_param(idx: number): boolean;
            /**
             * Set the Security Policy parameters for `payload`.
             * @param policy the policy number
             * @param proto a #GstMIKEYSecProto
             * @returns %TRUE on success
             */
            sp_set(policy: number, proto: MIKEYSecProto): boolean;
            /**
             * Set the timestamp in a %GST_MIKEY_PT_T `payload`.
             * @param type the #GstMIKEYTSType
             * @param ts_value the timestamp value
             * @returns %TRUE on success
             */
            t_set(type: MIKEYTSType, ts_value: Uint8Array | string): boolean;
        }

        /**
         * A structure holding the KEMAC payload
         */
        class MIKEYPayloadKEMAC {
            static $gtype: GObject.GType<MIKEYPayloadKEMAC>;

            // Fields

            enc_alg: MIKEYEncAlg;
            mac_alg: MIKEYMacAlg;
            subpayloads: any[];

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The Key data payload contains key material. It should be added as sub
         * payload to the KEMAC.
         */
        class MIKEYPayloadKeyData {
            static $gtype: GObject.GType<MIKEYPayloadKeyData>;

            // Fields

            key_type: MIKEYKeyDataType;
            key_len: number;
            key_data: number;
            salt_len: number;
            salt_data: number;
            kv_type: MIKEYKVType;
            kv_len: Uint8Array;
            kv_data: Uint8Array;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The Envelope data payload contains the encrypted envelope key that is
         * used in the public-key transport to protect the data in the Key data
         * transport payload.  The encryption algorithm used is implicit from
         * the certificate/public key used.
         */
        class MIKEYPayloadPKE {
            static $gtype: GObject.GType<MIKEYPayloadPKE>;

            // Fields

            C: MIKEYCacheType;
            data_len: number;
            data: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The RAND payload consists of a (pseudo-)random bit-string
         */
        class MIKEYPayloadRAND {
            static $gtype: GObject.GType<MIKEYPayloadRAND>;

            // Fields

            len: number;
            rand: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The Security Policy payload defines a set of policies that apply to a
         * specific security protocol
         */
        class MIKEYPayloadSP {
            static $gtype: GObject.GType<MIKEYPayloadSP>;

            // Fields

            policy: number;
            proto: MIKEYSecProto;
            params: any[];

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A Type/Length/Value field for security parameters
         */
        class MIKEYPayloadSPParam {
            static $gtype: GObject.GType<MIKEYPayloadSPParam>;

            // Fields

            type: number;
            len: number;
            val: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    type: number;
                    len: number;
                    val: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * The timestamp payload carries the timestamp information
         */
        class MIKEYPayloadT {
            static $gtype: GObject.GType<MIKEYPayloadT>;

            // Fields

            type: MIKEYTSType;
            ts_value: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The contents of the SDP "a=" field which contains a key/value pair.
         */
        class SDPAttribute {
            static $gtype: GObject.GType<SDPAttribute>;

            // Fields

            key: string;
            value: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    key: string;
                    value: string;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Clear the attribute.
             * @returns @GST_SDP_OK.
             */
            clear(): SDPResult;
            /**
             * Set the attribute with `key` and `value`.
             * @param key the key
             * @param value the value
             * @returns @GST_SDP_OK.
             */
            set(key: string, value?: string | null): SDPResult;
        }

        /**
         * The contents of the SDP "b=" field which specifies the proposed bandwidth to
         * be used by the session or media.
         */
        class SDPBandwidth {
            static $gtype: GObject.GType<SDPBandwidth>;

            // Fields

            bwtype: string;
            bandwidth: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    bwtype: string;
                    bandwidth: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Reset the bandwidth information in `bw`.
             * @returns a #GstSDPResult.
             */
            clear(): SDPResult;
            /**
             * Set bandwidth information in `bw`.
             * @param bwtype the bandwidth modifier type
             * @param bandwidth the bandwidth in kilobits per second
             * @returns a #GstSDPResult.
             */
            set(bwtype: string, bandwidth: number): SDPResult;
        }

        /**
         * The contents of the SDP "c=" field which contains connection data.
         */
        class SDPConnection {
            static $gtype: GObject.GType<SDPConnection>;

            // Fields

            nettype: string;
            addrtype: string;
            address: string;
            ttl: number;
            addr_number: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    nettype: string;
                    addrtype: string;
                    address: string;
                    ttl: number;
                    addr_number: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Clear the connection.
             * @returns @GST_SDP_OK.
             */
            clear(): SDPResult;
            /**
             * Set the connection with the given parameters.
             * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
             * @param addrtype the type of address.
             * @param address the address
             * @param ttl the time to live of the address
             * @param addr_number the number of layers
             * @returns @GST_SDP_OK.
             */
            set(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
        }

        /**
         * The contents of the SDP "k=" field which is used to convey encryption
         * keys.
         */
        class SDPKey {
            static $gtype: GObject.GType<SDPKey>;

            // Fields

            type: string;
            data: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    type: string;
                    data: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * The contents of the SDP "m=" field with all related fields.
         */
        class SDPMedia {
            static $gtype: GObject.GType<SDPMedia>;

            // Fields

            media: string;
            port: number;
            num_ports: number;
            proto: string;
            fmts: any[];
            information: string;
            connections: any[];
            bandwidths: any[];
            key: SDPKey;
            attributes: any[];

            // Constructors

            constructor(
                properties?: Partial<{
                    media: string;
                    port: number;
                    num_ports: number;
                    proto: string;
                    fmts: any[];
                    information: string;
                    connections: any[];
                    bandwidths: any[];
                    key: SDPKey;
                    attributes: any[];
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Initialize `media` so that its contents are as if it was freshly allocated
             * with gst_sdp_media_new(). This function is mostly used to initialize a media
             * allocated on the stack. gst_sdp_media_uninit() undoes this operation.
             *
             * When this function is invoked on newly allocated data (with malloc or on the
             * stack), its contents should be set to 0 before calling this function.
             */
            static init(): [SDPResult, SDPMedia];
            /**
             * Allocate a new GstSDPMedia and store the result in `media`.
             */
            static ['new'](): [SDPResult, SDPMedia];
            /**
             * Mapping of caps to SDP fields:
             *
             * a=rtpmap:(payload) (encoding_name) or (clock_rate)[or (encoding_params)]
             *
             * a=framesize:(payload) (width)-(height)
             *
             * a=fmtp:(payload) (param)[=(value)];...
             *
             * a=rtcp-fb:(payload) (param1) [param2]...
             *
             * a=extmap:(id)[/direction] (extensionname) (extensionattributes)
             * @param caps a #GstCaps
             */
            static set_media_from_caps(caps: Gst.Caps): [SDPResult, SDPMedia];

            // Methods

            /**
             * Add the attribute with `key` and `value` to `media`.
             * @param key a key
             * @param value a value
             * @returns #GST_SDP_OK.
             */
            add_attribute(key: string, value?: string | null): SDPResult;
            /**
             * Add the bandwidth information with `bwtype` and `bandwidth` to `media`.
             * @param bwtype the bandwidth modifier type
             * @param bandwidth the bandwidth in kilobits per second
             * @returns #GST_SDP_OK.
             */
            add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
            /**
             * Add the given connection parameters to `media`.
             * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
             * @param addrtype the type of address.
             * @param address the address
             * @param ttl the time to live of the address
             * @param addr_number the number of layers
             * @returns a #GstSDPResult.
             */
            add_connection(
                nettype: string,
                addrtype: string,
                address: string,
                ttl: number,
                addr_number: number,
            ): SDPResult;
            /**
             * Add the format information to `media`.
             * @param format the format
             * @returns #GST_SDP_OK.
             */
            add_format(format: string): SDPResult;
            /**
             * Convert the contents of `media` to a text string.
             * @returns A dynamically allocated string representing the media.
             */
            as_text(): string;
            /**
             * Get the number of attribute fields in `media`.
             * @returns the number of attributes in @media.
             */
            attributes_len(): number;
            /**
             * Mapping of attributes of #GstSDPMedia to #GstCaps
             * @param caps a #GstCaps
             * @returns a #GstSDPResult.
             */
            attributes_to_caps(caps: Gst.Caps): SDPResult;
            /**
             * Get the number of bandwidth fields in `media`.
             * @returns the number of bandwidths in @media.
             */
            bandwidths_len(): number;
            /**
             * Get the number of connection fields in `media`.
             * @returns the number of connections in @media.
             */
            connections_len(): number;
            /**
             * Allocate a new copy of `media` and store the result in `copy`. The value in
             * `copy` should be release with gst_sdp_media_free function.
             * @returns a #GstSDPResult
             */
            copy(): [SDPResult, SDPMedia];
            /**
             * Get the number of formats in `media`.
             * @returns the number of formats in @media.
             */
            formats_len(): number;
            /**
             * Free all resources allocated by `media`. `media` should not be used anymore after
             * this function. This function should be used when `media` was dynamically
             * allocated with gst_sdp_media_new().
             * @returns a #GstSDPResult.
             */
            free(): SDPResult;
            /**
             * Get the attribute at position `idx` in `media`.
             * @param idx an index
             * @returns the #GstSDPAttribute at position @idx.
             */
            get_attribute(idx: number): SDPAttribute;
            /**
             * Get the first attribute value for `key` in `media`.
             * @param key a key
             * @returns the first attribute value for @key.
             */
            get_attribute_val(key: string): string | null;
            /**
             * Get the `nth` attribute value for `key` in `media`.
             * @param key a key
             * @param nth an index
             * @returns the @nth attribute value.
             */
            get_attribute_val_n(key: string, nth: number): string | null;
            /**
             * Get the bandwidth at position `idx` in `media`.
             * @param idx an index
             * @returns the #GstSDPBandwidth at position @idx.
             */
            get_bandwidth(idx: number): SDPBandwidth;
            /**
             * Mapping of caps from SDP fields:
             *
             * a=rtpmap:(payload) (encoding_name)/(clock_rate)[/(encoding_params)]
             *
             * a=framesize:(payload) (width)-(height)
             *
             * a=fmtp:(payload) (param)[=(value)];...
             *
             * Note that the extmap, ssrc and rid attributes are set only by gst_sdp_media_attributes_to_caps().
             * @param pt a payload type
             * @returns a #GstCaps, or %NULL if an error happened
             */
            get_caps_from_media(pt: number): Gst.Caps | null;
            /**
             * Get the connection at position `idx` in `media`.
             * @param idx an index
             * @returns the #GstSDPConnection at position @idx.
             */
            get_connection(idx: number): SDPConnection;
            /**
             * Get the format information at position `idx` in `media`.
             * @param idx an index
             * @returns the format at position @idx.
             */
            get_format(idx: number): string;
            /**
             * Get the information of `media`
             * @returns the information of @media.
             */
            get_information(): string;
            /**
             * Get the encryption information from `media`.
             * @returns a #GstSDPKey.
             */
            get_key(): SDPKey;
            /**
             * Get the media description of `media`.
             * @returns the media description.
             */
            get_media(): string;
            /**
             * Get the number of ports for `media`.
             * @returns the number of ports for @media.
             */
            get_num_ports(): number;
            /**
             * Get the port number for `media`.
             * @returns the port number of @media.
             */
            get_port(): number;
            /**
             * Get the transport protocol of `media`
             * @returns the transport protocol of @media.
             */
            get_proto(): string;
            /**
             * Insert the attribute to `media` at `idx`. When `idx` is -1,
             * the attribute is appended.
             * @param idx an index
             * @param attr a #GstSDPAttribute
             * @returns #GST_SDP_OK.
             */
            insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
            /**
             * Insert the bandwidth information to `media` at `idx`. When `idx` is -1,
             * the bandwidth is appended.
             * @param idx an index
             * @param bw a #GstSDPBandwidth
             * @returns #GST_SDP_OK.
             */
            insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
            /**
             * Insert the connection information to `media` at `idx`. When `idx` is -1,
             * the connection is appended.
             * @param idx an index
             * @param conn a #GstSDPConnection
             * @returns #GST_SDP_OK.
             */
            insert_connection(idx: number, conn: SDPConnection): SDPResult;
            /**
             * Insert the format information to `media` at `idx`. When `idx` is -1,
             * the format is appended.
             * @param idx an index
             * @param format the format
             * @returns #GST_SDP_OK.
             */
            insert_format(idx: number, format: string): SDPResult;
            /**
             * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
             * from a #GstSDPMedia.
             * @returns a #GstSDPResult.
             */
            parse_keymgmt(): [SDPResult, MIKEYMessage];
            /**
             * Remove the attribute in `media` at `idx`.
             * @param idx an index
             * @returns #GST_SDP_OK.
             */
            remove_attribute(idx: number): SDPResult;
            /**
             * Remove the bandwidth information in `media` at `idx`.
             * @param idx an index
             * @returns #GST_SDP_OK.
             */
            remove_bandwidth(idx: number): SDPResult;
            /**
             * Remove the connection information in `media` at `idx`.
             * @param idx an index
             * @returns #GST_SDP_OK.
             */
            remove_connection(idx: number): SDPResult;
            /**
             * Remove the format information in `media` at `idx`.
             * @param idx an index
             * @returns #GST_SDP_OK.
             */
            remove_format(idx: number): SDPResult;
            /**
             * Replace the attribute in `media` at `idx` with `attr`.
             * @param idx an index
             * @param attr a #GstSDPAttribute
             * @returns #GST_SDP_OK.
             */
            replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
            /**
             * Replace the bandwidth information in `media` at `idx` with `bw`.
             * @param idx an index
             * @param bw a #GstSDPBandwidth
             * @returns #GST_SDP_OK.
             */
            replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
            /**
             * Replace the connection information in `media` at `idx` with `conn`.
             * @param idx an index
             * @param conn a #GstSDPConnection
             * @returns #GST_SDP_OK.
             */
            replace_connection(idx: number, conn: SDPConnection): SDPResult;
            /**
             * Replace the format information in `media` at `idx` with `format`.
             * @param idx an index
             * @param format the format
             * @returns #GST_SDP_OK.
             */
            replace_format(idx: number, format: string): SDPResult;
            /**
             * Set the media information of `media` to `information`.
             * @param information the media information
             * @returns #GST_SDP_OK.
             */
            set_information(information: string): SDPResult;
            /**
             * Adds the encryption information to `media`.
             * @param type the encryption type
             * @param data the encryption data
             * @returns a #GstSDPResult.
             */
            set_key(type: string, data: string): SDPResult;
            /**
             * Set the media description of `media` to `med`.
             * @param med the media description
             * @returns #GST_SDP_OK.
             */
            set_media(med: string): SDPResult;
            /**
             * Set the port information in `media`.
             * @param port the port number
             * @param num_ports the number of ports
             * @returns #GST_SDP_OK.
             */
            set_port_info(port: number, num_ports: number): SDPResult;
            /**
             * Set the media transport protocol of `media` to `proto`.
             * @param proto the media transport protocol
             * @returns #GST_SDP_OK.
             */
            set_proto(proto: string): SDPResult;
            /**
             * Free all resources allocated in `media`. `media` should not be used anymore after
             * this function. This function should be used when `media` was allocated on the
             * stack and initialized with gst_sdp_media_init().
             * @returns a #GstSDPResult.
             */
            uninit(): SDPResult;
        }

        /**
         * The GstSDPMessage helper functions makes it easy to parse and create SDP
         * messages.
         */
        class SDPMessage {
            static $gtype: GObject.GType<SDPMessage>;

            // Fields

            version: string;
            origin: SDPOrigin;
            session_name: string;
            information: string;
            uri: string;
            emails: any[];
            phones: any[];
            connection: SDPConnection;
            bandwidths: any[];
            times: any[];
            zones: any[];
            key: SDPKey;
            attributes: any[];
            medias: any[];

            // Constructors

            constructor(
                properties?: Partial<{
                    version: string;
                    origin: SDPOrigin;
                    session_name: string;
                    information: string;
                    uri: string;
                    emails: any[];
                    phones: any[];
                    connection: SDPConnection;
                    bandwidths: any[];
                    times: any[];
                    zones: any[];
                    key: SDPKey;
                    attributes: any[];
                    medias: any[];
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a uri from `msg` with the given `scheme`. The uri has the format:
             *
             *  \`scheme:`///[#type=value *[&type=value]]
             *
             *  Where each value is url encoded.
             * @param scheme the uri scheme
             * @param msg the #GstSDPMessage
             */
            static as_uri(scheme: string, msg: SDPMessage): string;
            /**
             * Initialize `msg` so that its contents are as if it was freshly allocated
             * with gst_sdp_message_new(). This function is mostly used to initialize a message
             * allocated on the stack. gst_sdp_message_uninit() undoes this operation.
             *
             * When this function is invoked on newly allocated data (with malloc or on the
             * stack), its contents should be set to 0 before calling this function.
             */
            static init(): [SDPResult, SDPMessage];
            /**
             * Allocate a new GstSDPMessage and store the result in `msg`.
             */
            static ['new'](): [SDPResult, SDPMessage];
            /**
             * Parse `text` and create a new SDPMessage from these.
             * @param text A dynamically allocated string representing the SDP description
             */
            static new_from_text(text: string): [SDPResult, SDPMessage];
            /**
             * Parse the contents of `size` bytes pointed to by `data` and store the result in
             * `msg`.
             * @param data the start of the buffer
             * @param msg the result #GstSDPMessage
             */
            static parse_buffer(data: Uint8Array | string, msg: SDPMessage): SDPResult;
            /**
             * Parse the null-terminated `uri` and store the result in `msg`.
             *
             * The uri should be of the form:
             *
             *  scheme://[address[:ttl=ttl][:noa=noa]]/[sessionname]
             *               [#type=value *[&type=value]]
             *
             *  where value is url encoded. This looslely resembles
             *  http://tools.ietf.org/html/draft-fujikawa-sdp-url-01
             * @param uri the start of the uri
             * @param msg the result #GstSDPMessage
             */
            static parse_uri(uri: string, msg: SDPMessage): SDPResult;

            // Methods

            /**
             * Add the attribute with `key` and `value` to `msg`.
             * @param key the key
             * @param value the value
             * @returns @GST_SDP_OK.
             */
            add_attribute(key: string, value?: string | null): SDPResult;
            /**
             * Add the specified bandwidth information to `msg`.
             * @param bwtype the bandwidth modifier type
             * @param bandwidth the bandwidth in kilobits per second
             * @returns a #GstSDPResult.
             */
            add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
            /**
             * Add `email` to the list of emails in `msg`.
             * @param email an email
             * @returns a #GstSDPResult.
             */
            add_email(email: string): SDPResult;
            /**
             * Adds `media` to the array of medias in `msg`. This function takes ownership of
             * the contents of `media` so that `media` will have to be reinitialized with
             * gst_sdp_media_init() before it can be used again.
             * @param media a #GstSDPMedia to add
             * @returns a #GstSDPResult.
             */
            add_media(media: SDPMedia): SDPResult;
            /**
             * Add `phone` to the list of phones in `msg`.
             * @param phone a phone
             * @returns a #GstSDPResult.
             */
            add_phone(phone: string): SDPResult;
            /**
             * Add time information `start` and `stop` to `msg`.
             * @param start the start time
             * @param stop the stop time
             * @param repeat the repeat times
             * @returns a #GstSDPResult.
             */
            add_time(start: string, stop: string, repeat: string[]): SDPResult;
            /**
             * Add time zone information to `msg`.
             * @param adj_time the NTP time that a time zone adjustment happens
             * @param typed_time the offset from the time when the session was first scheduled
             * @returns a #GstSDPResult.
             */
            add_zone(adj_time: string, typed_time: string): SDPResult;
            /**
             * Convert the contents of `msg` to a text string.
             * @returns A dynamically allocated string representing the SDP description.
             */
            as_text(): string;
            /**
             * Get the number of attributes in `msg`.
             * @returns the number of attributes in @msg.
             */
            attributes_len(): number;
            /**
             * Mapping of attributes of #GstSDPMessage to #GstCaps
             * @param caps a #GstCaps
             * @returns a #GstSDPResult.
             */
            attributes_to_caps(caps: Gst.Caps): SDPResult;
            /**
             * Get the number of bandwidth information in `msg`.
             * @returns the number of bandwidth information in @msg.
             */
            bandwidths_len(): number;
            /**
             * Allocate a new copy of `msg` and store the result in `copy`. The value in
             * `copy` should be release with gst_sdp_message_free function.
             * @returns a #GstSDPResult
             */
            copy(): [SDPResult, SDPMessage];
            /**
             * Dump the parsed contents of `msg` to stdout.
             * @returns a #GstSDPResult.
             */
            dump(): SDPResult;
            /**
             * Get the number of emails in `msg`.
             * @returns the number of emails in @msg.
             */
            emails_len(): number;
            /**
             * Free all resources allocated by `msg`. `msg` should not be used anymore after
             * this function. This function should be used when `msg` was dynamically
             * allocated with gst_sdp_message_new().
             * @returns a #GstSDPResult.
             */
            free(): SDPResult;
            /**
             * Get the attribute at position `idx` in `msg`.
             * @param idx the index
             * @returns the #GstSDPAttribute at position @idx.
             */
            get_attribute(idx: number): SDPAttribute;
            /**
             * Get the first attribute with key `key` in `msg`.
             * @param key the key
             * @returns the attribute value of the first attribute with @key.
             */
            get_attribute_val(key: string): string | null;
            /**
             * Get the `nth` attribute with key `key` in `msg`.
             * @param key the key
             * @param nth the index
             * @returns the attribute value of the @nth attribute with @key.
             */
            get_attribute_val_n(key: string, nth: number): string | null;
            /**
             * Get the bandwidth at index `idx` from `msg`.
             * @param idx the bandwidth index
             * @returns a #GstSDPBandwidth.
             */
            get_bandwidth(idx: number): SDPBandwidth;
            /**
             * Get the connection of `msg`.
             * @returns a #GstSDPConnection. The result remains valid as long as @msg is valid.
             */
            get_connection(): SDPConnection;
            /**
             * Get the email with number `idx` from `msg`.
             * @param idx an email index
             * @returns the email at position @idx.
             */
            get_email(idx: number): string;
            /**
             * Get the information in `msg`.
             * @returns a #GstSDPResult.
             */
            get_information(): string;
            /**
             * Get the encryption information from `msg`.
             * @returns a #GstSDPKey.
             */
            get_key(): SDPKey;
            /**
             * Get the media description at index `idx` in `msg`.
             * @param idx the index
             * @returns a #GstSDPMedia.
             */
            get_media(idx: number): SDPMedia;
            /**
             * Get the origin of `msg`.
             * @returns a #GstSDPOrigin. The result remains valid as long as @msg is valid.
             */
            get_origin(): SDPOrigin;
            /**
             * Get the phone with number `idx` from `msg`.
             * @param idx a phone index
             * @returns the phone at position @idx.
             */
            get_phone(idx: number): string;
            /**
             * Get the session name in `msg`.
             * @returns a #GstSDPResult.
             */
            get_session_name(): string;
            /**
             * Get time information with index `idx` from `msg`.
             * @param idx the time index
             * @returns a #GstSDPTime.
             */
            get_time(idx: number): SDPTime;
            /**
             * Get the URI in `msg`.
             * @returns a #GstSDPResult.
             */
            get_uri(): string;
            /**
             * Get the version in `msg`.
             * @returns a #GstSDPResult.
             */
            get_version(): string;
            /**
             * Get time zone information with index `idx` from `msg`.
             * @param idx the zone index
             * @returns a #GstSDPZone.
             */
            get_zone(idx: number): SDPZone;
            /**
             * Insert attribute into the array of attributes in `msg`
             * at index `idx`.
             * When -1 is given as `idx,` the attribute is inserted at the end.
             * @param idx an index
             * @param attr a #GstSDPAttribute
             * @returns a #GstSDPResult.
             */
            insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
            /**
             * Insert bandwidth parameters into the array of bandwidths in `msg`
             * at index `idx`.
             * When -1 is given as `idx,` the bandwidth is inserted at the end.
             * @param idx an index
             * @param bw the bandwidth
             * @returns a #GstSDPResult.
             */
            insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
            /**
             * Insert `email` into the array of emails in `msg` at index `idx`.
             * When -1 is given as `idx,` the email is inserted at the end.
             * @param idx an index
             * @param email an email
             * @returns a #GstSDPResult.
             */
            insert_email(idx: number, email: string): SDPResult;
            /**
             * Insert `phone` into the array of phone numbers in `msg` at index `idx`.
             * When -1 is given as `idx,` the phone is inserted at the end.
             * @param idx a phone index
             * @param phone a phone
             * @returns a #GstSDPResult.
             */
            insert_phone(idx: number, phone: string): SDPResult;
            /**
             * Insert time parameters into the array of times in `msg`
             * at index `idx`.
             * When -1 is given as `idx,` the times are inserted at the end.
             * @param idx an index
             * @param t a #GstSDPTime
             * @returns a #GstSDPResult.
             */
            insert_time(idx: number, t: SDPTime): SDPResult;
            /**
             * Insert zone parameters into the array of zones in `msg`
             * at index `idx`.
             * When -1 is given as `idx,` the zone is inserted at the end.
             * @param idx an index
             * @param zone a #GstSDPZone
             * @returns a #GstSDPResult.
             */
            insert_zone(idx: number, zone: SDPZone): SDPResult;
            /**
             * Get the number of media descriptions in `msg`.
             * @returns the number of media descriptions in @msg.
             */
            medias_len(): number;
            /**
             * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
             * from a #GstSDPMessage.
             * @returns a #GstSDPResult.
             */
            parse_keymgmt(): [SDPResult, MIKEYMessage];
            /**
             * Get the number of phones in `msg`.
             * @returns the number of phones in @msg.
             */
            phones_len(): number;
            /**
             * Remove the attribute in `msg` at index `idx`.
             * @param idx the index
             * @returns a #GstSDPResult.
             */
            remove_attribute(idx: number): SDPResult;
            /**
             * Remove the bandwidth information in `msg` at index `idx`.
             * @param idx the bandwidth index
             * @returns a #GstSDPResult.
             */
            remove_bandwidth(idx: number): SDPResult;
            /**
             * Remove the email in `msg` at index `idx`.
             * @param idx an email index
             * @returns a #GstSDPResult.
             */
            remove_email(idx: number): SDPResult;
            /**
             * Remove the media at `idx` from the array of medias in `msg` if found.
             * @param idx the media index
             * @returns #GST_SDP_OK when the specified media is found at @idx and removed, #GST_SDP_EINVAL otherwise.
             */
            remove_media(idx: number): SDPResult;
            /**
             * Remove the phone number in `msg` at index `idx`.
             * @param idx a phone index
             * @returns a #GstSDPResult.
             */
            remove_phone(idx: number): SDPResult;
            /**
             * Remove the time information in `msg` at index `idx`.
             * @param idx the index
             * @returns a #GstSDPResult.
             */
            remove_time(idx: number): SDPResult;
            /**
             * Remove the zone information in `msg` at index `idx`.
             * @param idx the index
             * @returns a #GstSDPResult.
             */
            remove_zone(idx: number): SDPResult;
            /**
             * Replace the attribute in `msg` at index `idx` with `attr`.
             * @param idx the index
             * @param attr a #GstSDPAttribute
             * @returns a #GstSDPResult.
             */
            replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
            /**
             * Replace the bandwidth information in `msg` at index `idx` with `bw`.
             * @param idx the bandwidth index
             * @param bw the bandwidth
             * @returns a #GstSDPResult.
             */
            replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
            /**
             * Replace the email in `msg` at index `idx` with `email`.
             * @param idx an email index
             * @param email an email
             * @returns a #GstSDPResult.
             */
            replace_email(idx: number, email: string): SDPResult;
            /**
             * Replace the phone number in `msg` at index `idx` with `phone`.
             * @param idx a phone index
             * @param phone a phone
             * @returns a #GstSDPResult.
             */
            replace_phone(idx: number, phone: string): SDPResult;
            /**
             * Replace the time information in `msg` at index `idx` with `t`.
             * @param idx the index
             * @param t a #GstSDPTime
             * @returns a #GstSDPResult.
             */
            replace_time(idx: number, t: SDPTime): SDPResult;
            /**
             * Replace the zone information in `msg` at index `idx` with `zone`.
             * @param idx the index
             * @param zone a #GstSDPZone
             * @returns a #GstSDPResult.
             */
            replace_zone(idx: number, zone: SDPZone): SDPResult;
            /**
             * Configure the SDP connection in `msg` with the given parameters.
             * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
             * @param addrtype the type of address.
             * @param address the address
             * @param ttl the time to live of the address
             * @param addr_number the number of layers
             * @returns a #GstSDPResult.
             */
            set_connection(
                nettype: string,
                addrtype: string,
                address: string,
                ttl: number,
                addr_number: number,
            ): SDPResult;
            /**
             * Set the information in `msg`.
             * @param information the information
             * @returns a #GstSDPResult.
             */
            set_information(information: string): SDPResult;
            /**
             * Adds the encryption information to `msg`.
             * @param type the encryption type
             * @param data the encryption data
             * @returns a #GstSDPResult.
             */
            set_key(type: string, data: string): SDPResult;
            /**
             * Configure the SDP origin in `msg` with the given parameters.
             * @param username the user name
             * @param sess_id a session id
             * @param sess_version a session version
             * @param nettype a network type
             * @param addrtype an address type
             * @param addr an address
             * @returns #GST_SDP_OK.
             */
            set_origin(
                username: string,
                sess_id: string,
                sess_version: string,
                nettype: string,
                addrtype: string,
                addr: string,
            ): SDPResult;
            /**
             * Set the session name in `msg`.
             * @param session_name the session name
             * @returns a #GstSDPResult.
             */
            set_session_name(session_name: string): SDPResult;
            /**
             * Set the URI in `msg`.
             * @param uri the URI
             * @returns a #GstSDPResult.
             */
            set_uri(uri: string): SDPResult;
            /**
             * Set the version in `msg`.
             * @param version the version
             * @returns a #GstSDPResult.
             */
            set_version(version: string): SDPResult;
            /**
             * Get the number of time information entries in `msg`.
             * @returns the number of time information entries in @msg.
             */
            times_len(): number;
            /**
             * Free all resources allocated in `msg`. `msg` should not be used anymore after
             * this function. This function should be used when `msg` was allocated on the
             * stack and initialized with gst_sdp_message_init().
             * @returns a #GstSDPResult.
             */
            uninit(): SDPResult;
            /**
             * Get the number of time zone information entries in `msg`.
             * @returns the number of time zone information entries in @msg.
             */
            zones_len(): number;
        }

        /**
         * The contents of the SDP "o=" field which gives the originator of the session
         * (their username and the address of the user's host) plus a session id and
         * session version number.
         */
        class SDPOrigin {
            static $gtype: GObject.GType<SDPOrigin>;

            // Fields

            username: string;
            sess_id: string;
            sess_version: string;
            nettype: string;
            addrtype: string;
            addr: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    username: string;
                    sess_id: string;
                    sess_version: string;
                    nettype: string;
                    addrtype: string;
                    addr: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * The contents of the SDP "t=" field which specify the start and stop times for
         * a conference session.
         */
        class SDPTime {
            static $gtype: GObject.GType<SDPTime>;

            // Fields

            start: string;
            stop: string;
            repeat: any[];

            // Constructors

            constructor(
                properties?: Partial<{
                    start: string;
                    stop: string;
                    repeat: any[];
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Reset the time information in `t`.
             * @returns a #GstSDPResult.
             */
            clear(): SDPResult;
            /**
             * Set time information `start,` `stop` and `repeat` in `t`.
             * @param start the start time
             * @param stop the stop time
             * @param repeat the repeat times
             * @returns a #GstSDPResult.
             */
            set(start: string, stop: string, repeat: string[]): SDPResult;
        }

        /**
         * The contents of the SDP "z=" field which allows the sender to
         * specify a list of time zone adjustments and offsets from the base
         * time.
         */
        class SDPZone {
            static $gtype: GObject.GType<SDPZone>;

            // Fields

            time: string;
            typed_time: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    time: string;
                    typed_time: string;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Reset the zone information in `zone`.
             * @returns a #GstSDPResult.
             */
            clear(): SDPResult;
            /**
             * Set zone information in `zone`.
             * @param adj_time the NTP time that a time zone adjustment happens
             * @param typed_time the offset from the time when the session was first scheduled
             * @returns a #GstSDPResult.
             */
            set(adj_time: string, typed_time: string): SDPResult;
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

    export default GstSdp;
}

declare module 'gi://GstSdp' {
    import GstSdp10 from 'gi://GstSdp?version=1.0';
    export default GstSdp10;
}
// END
