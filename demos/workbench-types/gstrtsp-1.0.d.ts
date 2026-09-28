/// <reference path="./gstsdp-1.0.d.ts" />
/// <reference path="./gst-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gstbase-1.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GstRtsp?version=1.0' {
    // Module dependencies
    import type GstSdp from 'gi://GstSdp?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gio from 'gi://Gio?version=2.0';

    export namespace GstRtsp {
        /**
         * GstRtsp-1.0
         */

        /**
         * Authentication methods, ordered by strength
         */

        /**
         * Authentication methods, ordered by strength
         */
        export namespace RTSPAuthMethod {
            export const $gtype: GObject.GType<RTSPAuthMethod>;
        }

        enum RTSPAuthMethod {
            /**
             * no authentication
             */
            NONE,
            /**
             * basic authentication
             */
            BASIC,
            /**
             * digest authentication
             */
            DIGEST,
        }
        /**
         * The possible network families.
         */

        /**
         * The possible network families.
         */
        export namespace RTSPFamily {
            export const $gtype: GObject.GType<RTSPFamily>;
        }

        enum RTSPFamily {
            /**
             * unknown network family
             */
            NONE,
            /**
             * internet
             */
            INET,
            /**
             * internet V6
             */
            INET6,
        }
        /**
         * Enumeration of rtsp header fields
         */

        /**
         * Enumeration of rtsp header fields
         */
        export namespace RTSPHeaderField {
            export const $gtype: GObject.GType<RTSPHeaderField>;
        }

        enum RTSPHeaderField {
            INVALID,
            ACCEPT,
            ACCEPT_ENCODING,
            ACCEPT_LANGUAGE,
            ALLOW,
            AUTHORIZATION,
            BANDWIDTH,
            BLOCKSIZE,
            CACHE_CONTROL,
            CONFERENCE,
            CONNECTION,
            CONTENT_BASE,
            CONTENT_ENCODING,
            CONTENT_LANGUAGE,
            CONTENT_LENGTH,
            CONTENT_LOCATION,
            CONTENT_TYPE,
            CSEQ,
            DATE,
            EXPIRES,
            FROM,
            IF_MODIFIED_SINCE,
            LAST_MODIFIED,
            PROXY_AUTHENTICATE,
            PROXY_REQUIRE,
            PUBLIC,
            RANGE,
            REFERER,
            REQUIRE,
            RETRY_AFTER,
            RTP_INFO,
            SCALE,
            SESSION,
            SERVER,
            SPEED,
            TRANSPORT,
            UNSUPPORTED,
            USER_AGENT,
            VIA,
            WWW_AUTHENTICATE,
            CLIENT_CHALLENGE,
            REAL_CHALLENGE1,
            REAL_CHALLENGE2,
            REAL_CHALLENGE3,
            SUBSCRIBE,
            ALERT,
            CLIENT_ID,
            COMPANY_ID,
            GUID,
            REGION_DATA,
            MAX_ASM_WIDTH,
            LANGUAGE,
            PLAYER_START_TIME,
            LOCATION,
            ETAG,
            IF_MATCH,
            ACCEPT_CHARSET,
            SUPPORTED,
            VARY,
            X_ACCELERATE_STREAMING,
            X_ACCEPT_AUTHENT,
            X_ACCEPT_PROXY_AUTHENT,
            X_BROADCAST_ID,
            X_BURST_STREAMING,
            X_NOTICE,
            X_PLAYER_LAG_TIME,
            X_PLAYLIST,
            X_PLAYLIST_CHANGE_NOTICE,
            X_PLAYLIST_GEN_ID,
            X_PLAYLIST_SEEK_ID,
            X_PROXY_CLIENT_AGENT,
            X_PROXY_CLIENT_VERB,
            X_RECEDING_PLAYLISTCHANGE,
            X_RTP_INFO,
            X_STARTUPPROFILE,
            TIMESTAMP,
            AUTHENTICATION_INFO,
            HOST,
            PRAGMA,
            X_SERVER_IP_ADDRESS,
            X_SESSIONCOOKIE,
            RTCP_INTERVAL,
            KEYMGMT,
            PIPELINED_REQUESTS,
            MEDIA_PROPERTIES,
            SEEK_STYLE,
            ACCEPT_RANGES,
            FRAMES,
            RATE_CONTROL,
            LAST,
        }
        /**
         * The type of a message.
         */

        /**
         * The type of a message.
         */
        export namespace RTSPMsgType {
            export const $gtype: GObject.GType<RTSPMsgType>;
        }

        enum RTSPMsgType {
            /**
             * invalid message type
             */
            INVALID,
            /**
             * RTSP request message
             */
            REQUEST,
            /**
             * RTSP response message
             */
            RESPONSE,
            /**
             * HTTP request message.
             */
            HTTP_REQUEST,
            /**
             * HTTP response message.
             */
            HTTP_RESPONSE,
            /**
             * data message
             */
            DATA,
        }
        /**
         * Different possible time range units.
         */

        /**
         * Different possible time range units.
         */
        export namespace RTSPRangeUnit {
            export const $gtype: GObject.GType<RTSPRangeUnit>;
        }

        enum RTSPRangeUnit {
            /**
             * SMPTE timecode
             */
            SMPTE,
            /**
             * 29.97 frames per second
             */
            SMPTE_30_DROP,
            /**
             * 25 frames per second
             */
            SMPTE_25,
            /**
             * Normal play time
             */
            NPT,
            /**
             * Absolute time expressed as ISO 8601 timestamps
             */
            CLOCK,
        }
        /**
         * Result codes from the RTSP functions.
         */

        /**
         * Result codes from the RTSP functions.
         */
        export namespace RTSPResult {
            export const $gtype: GObject.GType<RTSPResult>;
        }

        enum RTSPResult {
            /**
             * no error
             */
            OK,
            /**
             * RTSP request is successful, but was redirected.
             */
            OK_REDIRECT,
            /**
             * some unspecified error occurred
             */
            ERROR,
            /**
             * invalid arguments were provided to a function
             */
            EINVAL,
            /**
             * an operation was canceled
             */
            EINTR,
            /**
             * no memory was available for the operation
             */
            ENOMEM,
            /**
             * a host resolve error occurred
             */
            ERESOLV,
            /**
             * function not implemented
             */
            ENOTIMPL,
            /**
             * a system error occurred, errno contains more details
             */
            ESYS,
            /**
             * a parsing error occurred
             */
            EPARSE,
            /**
             * windows networking could not start
             */
            EWSASTART,
            /**
             * windows networking stack has wrong version
             */
            EWSAVERSION,
            /**
             * end-of-file was reached
             */
            EEOF,
            /**
             * a network problem occurred, h_errno contains more details
             */
            ENET,
            /**
             * the host is not an IP host
             */
            ENOTIP,
            /**
             * a timeout occurred
             */
            ETIMEOUT,
            /**
             * the tunnel GET request has been performed
             */
            ETGET,
            /**
             * the tunnel POST request has been performed
             */
            ETPOST,
            /**
             * last error
             */
            ELAST,
        }
        /**
         * The different RTSP states.
         */

        /**
         * The different RTSP states.
         */
        export namespace RTSPState {
            export const $gtype: GObject.GType<RTSPState>;
        }

        enum RTSPState {
            /**
             * invalid state
             */
            INVALID,
            /**
             * initializing
             */
            INIT,
            /**
             * ready for operation
             */
            READY,
            /**
             * seeking in progress
             */
            SEEKING,
            /**
             * playing
             */
            PLAYING,
            /**
             * recording
             */
            RECORDING,
        }
        /**
         * Enumeration of rtsp status codes
         */

        /**
         * Enumeration of rtsp status codes
         */
        export namespace RTSPStatusCode {
            export const $gtype: GObject.GType<RTSPStatusCode>;
        }

        enum RTSPStatusCode {
            INVALID,
            CONTINUE,
            OK,
            CREATED,
            LOW_ON_STORAGE,
            MULTIPLE_CHOICES,
            MOVED_PERMANENTLY,
            MOVE_TEMPORARILY,
            SEE_OTHER,
            NOT_MODIFIED,
            USE_PROXY,
            /**
             * RTSP request is temporarily redirected
             */
            REDIRECT_TEMPORARILY,
            /**
             * RTSP request is permanently redirected
             */
            REDIRECT_PERMANENTLY,
            BAD_REQUEST,
            UNAUTHORIZED,
            PAYMENT_REQUIRED,
            FORBIDDEN,
            NOT_FOUND,
            METHOD_NOT_ALLOWED,
            NOT_ACCEPTABLE,
            PROXY_AUTH_REQUIRED,
            REQUEST_TIMEOUT,
            GONE,
            LENGTH_REQUIRED,
            PRECONDITION_FAILED,
            REQUEST_ENTITY_TOO_LARGE,
            REQUEST_URI_TOO_LARGE,
            UNSUPPORTED_MEDIA_TYPE,
            PARAMETER_NOT_UNDERSTOOD,
            CONFERENCE_NOT_FOUND,
            NOT_ENOUGH_BANDWIDTH,
            SESSION_NOT_FOUND,
            METHOD_NOT_VALID_IN_THIS_STATE,
            HEADER_FIELD_NOT_VALID_FOR_RESOURCE,
            INVALID_RANGE,
            PARAMETER_IS_READONLY,
            AGGREGATE_OPERATION_NOT_ALLOWED,
            ONLY_AGGREGATE_OPERATION_ALLOWED,
            UNSUPPORTED_TRANSPORT,
            DESTINATION_UNREACHABLE,
            KEY_MANAGEMENT_FAILURE,
            INTERNAL_SERVER_ERROR,
            NOT_IMPLEMENTED,
            BAD_GATEWAY,
            SERVICE_UNAVAILABLE,
            GATEWAY_TIMEOUT,
            RTSP_VERSION_NOT_SUPPORTED,
            OPTION_NOT_SUPPORTED,
        }
        /**
         * Possible time types.
         */

        /**
         * Possible time types.
         */
        export namespace RTSPTimeType {
            export const $gtype: GObject.GType<RTSPTimeType>;
        }

        enum RTSPTimeType {
            /**
             * seconds
             */
            SECONDS,
            /**
             * now
             */
            NOW,
            /**
             * end
             */
            END,
            /**
             * frames and subframes
             */
            FRAMES,
            /**
             * UTC time
             */
            UTC,
        }
        /**
         * The supported RTSP versions.
         */

        /**
         * The supported RTSP versions.
         */
        export namespace RTSPVersion {
            export const $gtype: GObject.GType<RTSPVersion>;
        }

        enum RTSPVersion {
            /**
             * unknown/invalid version
             */
            INVALID,
            /**
             * version 1.0
             */
            '1_0',
            /**
             * version 1.1.
             */
            '1_1',
            /**
             * version 2.0.
             */
            '2_0',
        }
        /**
         * The default RTSP port to connect to.
         */
        const RTSP_DEFAULT_PORT: number;
        /**
         * Free a %NULL-terminated array of credentials returned from
         * gst_rtsp_message_parse_auth_credentials().
         * @param credentials a %NULL-terminated array of #GstRTSPAuthCredential
         */
        function rtsp_auth_credentials_free(credentials: RTSPAuthCredential): void;
        /**
         * Accept a new connection on `socket` and create a new #GstRTSPConnection for
         * handling communication on new socket.
         * @param socket a socket
         * @param cancellable a #GCancellable to cancel the operation
         * @returns #GST_RTSP_OK when @conn contains a valid connection.
         */
        function rtsp_connection_accept(
            socket: Gio.Socket,
            cancellable?: Gio.Cancellable | null,
        ): [RTSPResult, RTSPConnection | null];
        /**
         * Create a newly allocated #GstRTSPConnection from `url` and store it in `conn`.
         * The connection will not yet attempt to connect to `url,` use
         * gst_rtsp_connection_connect().
         *
         * A copy of `url` will be made.
         * @param url a #GstRTSPUrl
         * @returns #GST_RTSP_OK when @conn contains a valid connection.
         */
        function rtsp_connection_create(url: RTSPUrl): [RTSPResult, RTSPConnection];
        /**
         * Create a new #GstRTSPConnection for handling communication on the existing
         * socket `socket`. The `initial_buffer` contains zero terminated data already
         * read from `socket` which should be used before starting to read new data.
         * @param socket a #GSocket
         * @param ip the IP address of the other end
         * @param port the port used by the other end
         * @param initial_buffer data already read from @fd
         * @returns #GST_RTSP_OK when @conn contains a valid connection.
         */
        function rtsp_connection_create_from_socket(
            socket: Gio.Socket,
            ip: string,
            port: number,
            initial_buffer: string,
        ): [RTSPResult, RTSPConnection | null];
        /**
         * Convert `header` to a #GstRTSPHeaderField.
         * @param header a header string
         * @returns a #GstRTSPHeaderField for @header or #GST_RTSP_HDR_INVALID if the header field is unknown.
         */
        function rtsp_find_header_field(header: string): RTSPHeaderField;
        /**
         * Convert `method` to a #GstRTSPMethod.
         * @param method a method
         * @returns a #GstRTSPMethod for @method or #GST_RTSP_INVALID if the method is unknown.
         */
        function rtsp_find_method(method: string): RTSPMethod;
        /**
         * Calculates the digest auth response from the values given by the server and
         * the username and password. See RFC2069 for details.
         *
         * Currently only supported algorithm "md5".
         * @param algorithm Hash algorithm to use, or %NULL for MD5
         * @param method Request method, e.g. PLAY
         * @param realm Realm
         * @param username Username
         * @param password Password
         * @param uri Original request URI
         * @param nonce Nonce
         * @returns Authentication response or %NULL if unsupported
         */
        function rtsp_generate_digest_auth_response(
            algorithm: string | null,
            method: string,
            realm: string,
            username: string,
            password: string,
            uri: string,
            nonce: string,
        ): string | null;
        /**
         * Calculates the digest auth response from the values given by the server and
         * the md5sum. See RFC2069 for details.
         *
         * This function is useful when the passwords are not stored in clear text,
         * but instead in the same format as the .htdigest file.
         *
         * Currently only supported algorithm "md5".
         * @param algorithm Hash algorithm to use, or %NULL for MD5
         * @param method Request method, e.g. PLAY
         * @param md5 The md5 sum of username:realm:password
         * @param uri Original request URI
         * @param nonce Nonce
         * @returns Authentication response or %NULL if unsupported
         */
        function rtsp_generate_digest_auth_response_from_md5(
            algorithm: string | null,
            method: string,
            md5: string,
            uri: string,
            nonce: string,
        ): string | null;
        /**
         * Check whether `field` may appear multiple times in a message.
         * @param field a #GstRTSPHeaderField
         * @returns %TRUE if multiple headers are allowed.
         */
        function rtsp_header_allow_multiple(field: RTSPHeaderField): boolean;
        /**
         * Convert `field` to a string.
         * @param field a #GstRTSPHeaderField
         * @returns a string representation of @field.
         */
        function rtsp_header_as_text(field: RTSPHeaderField): string | null;
        /**
         * Create a new initialized #GstRTSPMessage. Free with gst_rtsp_message_free().
         * @returns a #GstRTSPResult.
         */
        function rtsp_message_new(): [RTSPResult, RTSPMessage];
        /**
         * Create a new data #GstRTSPMessage with `channel` and store the
         * result message in `msg`. Free with gst_rtsp_message_free().
         * @param channel the channel
         * @returns a #GstRTSPResult.
         */
        function rtsp_message_new_data(channel: number): [RTSPResult, RTSPMessage];
        /**
         * Create a new #GstRTSPMessage with `method` and `uri` and store the result
         * request message in `msg`. Free with gst_rtsp_message_free().
         * @param method the request method to use
         * @param uri the uri of the request
         * @returns a #GstRTSPResult.
         */
        function rtsp_message_new_request(method: RTSPMethod, uri: string): [RTSPResult, RTSPMessage];
        /**
         * Create a new response #GstRTSPMessage with `code` and `reason` and store the
         * result message in `msg`. Free with gst_rtsp_message_free().
         *
         * When `reason` is %NULL, the default reason for `code` will be used.
         *
         * When `request` is not %NULL, the relevant headers will be copied to the new
         * response message.
         * @param code the status code
         * @param reason the status reason or %NULL
         * @param request the request that triggered the response or %NULL
         * @returns a #GstRTSPResult.
         */
        function rtsp_message_new_response(
            code: RTSPStatusCode,
            reason?: string | null,
            request?: RTSPMessage | null,
        ): [RTSPResult, RTSPMessage];
        /**
         * Convert `method` to a string.
         * @param method a #GstRTSPMethod
         * @returns a string representation of @method.
         */
        function rtsp_method_as_text(method: RTSPMethod): string | null;
        /**
         * Convert `options` to a string.
         * @param options one or more #GstRTSPMethod
         * @returns a new string of @options. g_free() after usage.
         */
        function rtsp_options_as_text(options: RTSPMethod): string;
        /**
         * Convert the comma separated list `options` to a #GstRTSPMethod bitwise or
         * of methods. This functions is the reverse of gst_rtsp_options_as_text().
         * @param options a comma separated list of options
         * @returns a #GstRTSPMethod
         */
        function rtsp_options_from_text(options: string): RTSPMethod;
        /**
         * Converts the range in-place between different types of units.
         * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
         * converted as these are only valid for #GST_RTSP_RANGE_NPT.
         * @param range a #GstRTSPTimeRange
         * @param unit the unit to convert the range into
         * @returns %TRUE if the range could be converted
         */
        function rtsp_range_convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
        /**
         * Free the memory allocated by `range`.
         * @param range a #GstRTSPTimeRange
         */
        function rtsp_range_free(range: RTSPTimeRange): void;
        /**
         * Retrieve the minimum and maximum values from `range` converted to
         * #GstClockTime in `min` and `max`.
         *
         * A value of %GST_CLOCK_TIME_NONE will be used to signal #GST_RTSP_TIME_NOW
         * and #GST_RTSP_TIME_END for `min` and `max` respectively.
         *
         * UTC times will be converted to nanoseconds since 1900.
         * @param range a #GstRTSPTimeRange
         * @returns %TRUE on success.
         */
        function rtsp_range_get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];
        /**
         * Parse `rangestr` to a #GstRTSPTimeRange.
         * @param rangestr a range string to parse
         * @returns #GST_RTSP_OK on success.
         */
        function rtsp_range_parse(rangestr: string): [RTSPResult, RTSPTimeRange];
        /**
         * Convert `range` into a string representation.
         * @param range a #GstRTSPTimeRange
         * @returns The string representation of @range. g_free() after usage.
         */
        function rtsp_range_to_string(range: RTSPTimeRange): string;
        /**
         * Convert `code` to a string.
         * @param code a #GstRTSPStatusCode
         * @returns a string representation of @code.
         */
        function rtsp_status_as_text(code: RTSPStatusCode): string;
        /**
         * Convert `result` in a human readable string.
         * @param result a #GstRTSPResult
         * @returns a newly allocated string. g_free() after usage.
         */
        function rtsp_strresult(result: RTSPResult): string;
        /**
         * Get the #GstElement that can handle the buffers transported over `trans`.
         *
         * It is possible that there are several managers available, use `option` to
         * selected one.
         *
         * `manager` will contain an element name or %NULL when no manager is
         * needed/available for `trans`.
         * @param trans a #GstRTSPTransMode
         * @param option option index.
         * @returns #GST_RTSP_OK.
         */
        function rtsp_transport_get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];
        /**
         * Get the mime type of the transport mode `trans`. This mime type is typically
         * used to generate #GstCaps events.
         * @param trans a #GstRTSPTransMode
         * @returns #GST_RTSP_OK.
         */
        function rtsp_transport_get_mime(trans: RTSPTransMode): [RTSPResult, string];
        /**
         * Initialize `transport` so that it can be used.
         * @returns #GST_RTSP_OK.
         */
        function rtsp_transport_init(): [RTSPResult, RTSPTransport];
        /**
         * Allocate a new initialized #GstRTSPTransport. Use gst_rtsp_transport_free()
         * after usage.
         * @returns a #GstRTSPResult.
         */
        function rtsp_transport_new(): [RTSPResult, RTSPTransport];
        /**
         * Parse the RTSP transport string `str` into `transport`.
         * @param str a transport string
         * @returns a #GstRTSPResult.
         */
        function rtsp_transport_parse(str: string): [RTSPResult, RTSPTransport];
        /**
         * Parse the RTSP `urlstr` into a newly allocated #GstRTSPUrl. Free after usage
         * with gst_rtsp_url_free().
         * @param urlstr the url string to parse
         * @returns a #GstRTSPResult.
         */
        function rtsp_url_parse(urlstr: string): [RTSPResult, RTSPUrl | null];
        /**
         * Convert `version` to a string.
         * @param version a #GstRTSPVersion
         * @returns a string representation of @version.
         */
        function rtsp_version_as_text(version: RTSPVersion): string;
        interface RTSPConnectionAcceptCertificateFunc {
            (conn: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
        }
        /**
         * The possible events for the connection.
         */

        /**
         * The possible events for the connection.
         */
        export namespace RTSPEvent {
            export const $gtype: GObject.GType<RTSPEvent>;
        }

        enum RTSPEvent {
            /**
             * connection is readable
             */
            READ,
            /**
             * connection is writable
             */
            WRITE,
        }
        /**
         * The different transport methods.
         */

        /**
         * The different transport methods.
         */
        export namespace RTSPLowerTrans {
            export const $gtype: GObject.GType<RTSPLowerTrans>;
        }

        enum RTSPLowerTrans {
            /**
             * invalid transport flag
             */
            UNKNOWN,
            /**
             * stream data over UDP
             */
            UDP,
            /**
             * stream data over UDP multicast
             */
            UDP_MCAST,
            /**
             * stream data over TCP
             */
            TCP,
            /**
             * stream data tunneled over HTTP.
             */
            HTTP,
            /**
             * encrypt TCP and HTTP with TLS
             */
            TLS,
        }
        /**
         * The different supported RTSP methods.
         */

        /**
         * The different supported RTSP methods.
         */
        export namespace RTSPMethod {
            export const $gtype: GObject.GType<RTSPMethod>;
        }

        enum RTSPMethod {
            /**
             * invalid method
             */
            INVALID,
            /**
             * the DESCRIBE method
             */
            DESCRIBE,
            /**
             * the ANNOUNCE method
             */
            ANNOUNCE,
            /**
             * the GET_PARAMETER method
             */
            GET_PARAMETER,
            /**
             * the OPTIONS method
             */
            OPTIONS,
            /**
             * the PAUSE method
             */
            PAUSE,
            /**
             * the PLAY method
             */
            PLAY,
            /**
             * the RECORD method
             */
            RECORD,
            /**
             * the REDIRECT method
             */
            REDIRECT,
            /**
             * the SETUP method
             */
            SETUP,
            /**
             * the SET_PARAMETER method
             */
            SET_PARAMETER,
            /**
             * the TEARDOWN method
             */
            TEARDOWN,
            /**
             * the GET method (HTTP).
             */
            GET,
            /**
             * the POST method (HTTP).
             */
            POST,
        }
        /**
         * The transfer profile to use.
         */

        /**
         * The transfer profile to use.
         */
        export namespace RTSPProfile {
            export const $gtype: GObject.GType<RTSPProfile>;
        }

        enum RTSPProfile {
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
         * The transfer mode to use.
         */

        /**
         * The transfer mode to use.
         */
        export namespace RTSPTransMode {
            export const $gtype: GObject.GType<RTSPTransMode>;
        }

        enum RTSPTransMode {
            /**
             * invalid tansport mode
             */
            UNKNOWN,
            /**
             * transfer RTP data
             */
            RTP,
            /**
             * transfer RDT (RealMedia) data
             */
            RDT,
        }
        /**
         * RTSP Authentication credentials
         */
        class RTSPAuthCredential {
            static $gtype: GObject.GType<RTSPAuthCredential>;

            // Fields

            scheme: RTSPAuthMethod;
            params: RTSPAuthParam;
            authorization: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * RTSP Authentication parameter
         */
        class RTSPAuthParam {
            static $gtype: GObject.GType<RTSPAuthParam>;

            // Fields

            name: string;
            value: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                    value: string;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            copy(): RTSPAuthParam;
            free(): void;
        }

        /**
         * This object manages the RTSP connection to the server. It provides function
         * to receive and send bytes and messages.
         */
        abstract class RTSPConnection {
            static $gtype: GObject.GType<RTSPConnection>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Accept a new connection on `socket` and create a new #GstRTSPConnection for
             * handling communication on new socket.
             * @param socket a socket
             * @param cancellable a #GCancellable to cancel the operation
             */
            static accept(
                socket: Gio.Socket,
                cancellable?: Gio.Cancellable | null,
            ): [RTSPResult, RTSPConnection | null];
            /**
             * Create a newly allocated #GstRTSPConnection from `url` and store it in `conn`.
             * The connection will not yet attempt to connect to `url,` use
             * gst_rtsp_connection_connect().
             *
             * A copy of `url` will be made.
             * @param url a #GstRTSPUrl
             */
            static create(url: RTSPUrl): [RTSPResult, RTSPConnection];
            /**
             * Create a new #GstRTSPConnection for handling communication on the existing
             * socket `socket`. The `initial_buffer` contains zero terminated data already
             * read from `socket` which should be used before starting to read new data.
             * @param socket a #GSocket
             * @param ip the IP address of the other end
             * @param port the port used by the other end
             * @param initial_buffer data already read from @fd
             */
            static create_from_socket(
                socket: Gio.Socket,
                ip: string,
                port: number,
                initial_buffer: string,
            ): [RTSPResult, RTSPConnection | null];

            // Methods

            /**
             * Add header to be appended to any HTTP request made by connection.
             * If the header already exists then the old header is replaced by the new header.
             *
             * Only applicable in HTTP tunnel mode.
             * @param key HTTP header name
             * @param value HTTP header value
             */
            add_extra_http_request_header(key: string, value: string): void;
            /**
             * Clear the list of authentication directives stored in `conn`.
             */
            clear_auth_params(): void;
            /**
             * Close the connected `conn`. After this call, the connection is in the same
             * state as when it was first created.
             * @returns #GST_RTSP_OK on success.
             */
            close(): RTSPResult;
            /**
             * Attempt to connect to the url of `conn` made with
             * gst_rtsp_connection_create(). If `timeout` is %NULL this function can block
             * forever. If `timeout` contains a valid timeout, this function will return
             * #GST_RTSP_ETIMEOUT after the timeout expired.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param timeout a GTimeVal timeout
             * @returns #GST_RTSP_OK when a connection could be made.
             */
            connect(timeout: GLib.TimeVal): RTSPResult;
            /**
             * Attempt to connect to the url of `conn` made with
             * gst_rtsp_connection_create(). If `timeout` is 0 this function can block
             * forever. If `timeout` contains a valid timeout, this function will return
             * #GST_RTSP_ETIMEOUT after the timeout expired.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param timeout a timeout in microseconds
             * @returns #GST_RTSP_OK when a connection could be made.
             */
            connect_usec(timeout: number): RTSPResult;
            /**
             * Attempt to connect to the url of `conn` made with
             * gst_rtsp_connection_create(). If `timeout` is %NULL this function can block
             * forever. If `timeout` contains a valid timeout, this function will return
             * #GST_RTSP_ETIMEOUT after the timeout expired.  If `conn` is set to tunneled,
             * `response` will contain a response to the tunneling request messages.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param timeout a GTimeVal timeout
             * @param response a #GstRTSPMessage
             * @returns #GST_RTSP_OK when a connection could be made.
             */
            connect_with_response(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult;
            /**
             * Attempt to connect to the url of `conn` made with
             * gst_rtsp_connection_create(). If `timeout` is 0 this function can block
             * forever. If `timeout` contains a valid timeout, this function will return
             * #GST_RTSP_ETIMEOUT after the timeout expired.  If `conn` is set to tunneled,
             * `response` will contain a response to the tunneling request messages.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param timeout a timeout in microseconds
             * @param response a #GstRTSPMessage
             * @returns #GST_RTSP_OK when a connection could be made.
             */
            connect_with_response_usec(timeout: number, response: RTSPMessage): RTSPResult;
            /**
             * If `conn` received the first tunnel connection and `conn2` received
             * the second tunnel connection, link the two connections together so that
             * `conn` manages the tunneled connection.
             *
             * After this call, `conn2` cannot be used anymore and must be freed with
             * gst_rtsp_connection_free().
             *
             * If `conn2` is %NULL then only the base64 decoding context will be setup for
             * `conn`.
             * @param conn2 a #GstRTSPConnection or %NULL
             * @returns return GST_RTSP_OK on success.
             */
            do_tunnel(conn2?: RTSPConnection | null): RTSPResult;
            /**
             * Start or stop the flushing action on `conn`. When flushing, all current
             * and future actions on `conn` will return #GST_RTSP_EINTR until the connection
             * is set to non-flushing mode again.
             * @param flush start or stop the flush
             * @returns #GST_RTSP_OK.
             */
            flush(flush: boolean): RTSPResult;
            /**
             * Close and free `conn`.
             * @returns #GST_RTSP_OK on success.
             */
            free(): RTSPResult;
            /**
             * Get the ignore_x_server_reply value.
             * @returns returns %TRUE if the x-server-ip-address header reply will be          ignored, else returns %FALSE
             */
            get_ignore_x_server_reply(): boolean;
            /**
             * Retrieve the IP address of the other end of `conn`.
             * @returns The IP address as a string. this value remains valid until the connection is closed.
             */
            get_ip(): string;
            /**
             * Get the file descriptor for reading.
             * @returns the file descriptor used for reading or %NULL on error. The file descriptor remains valid until the connection is closed.
             */
            get_read_socket(): Gio.Socket | null;
            get_remember_session_id(): boolean;
            /**
             * Get the TLS connection of `conn`.
             *
             * For client side this will return the #GTlsClientConnection when connected
             * over TLS.
             *
             * For server side connections, this function will create a GTlsServerConnection
             * when called the first time and will return that same connection on subsequent
             * calls. The server is then responsible for configuring the TLS connection.
             * @returns the TLS connection for @conn.
             */
            get_tls(): Gio.TlsConnection;
            /**
             * Gets the anchor certificate authorities database that will be used
             * after a server certificate can't be verified with the default
             * certificate database.
             * @returns the anchor certificate authorities database, or NULL if no database has been previously set. Use g_object_unref() to release the certificate database.
             */
            get_tls_database(): Gio.TlsDatabase | null;
            /**
             * Gets a #GTlsInteraction object to be used when the connection or certificate
             * database need to interact with the user. This will be used to prompt the
             * user for passwords where necessary.
             * @returns a reference on the #GTlsInteraction. Use g_object_unref() to release.
             */
            get_tls_interaction(): Gio.TlsInteraction | null;
            /**
             * Gets the TLS validation flags used to verify the peer certificate
             * when a TLS connection is established.
             *
             * GLib guarantees that if certificate verification fails, at least one error
             * will be set, but it does not guarantee that all possible errors will be
             * set. Accordingly, you may not safely decide to ignore any particular type
             * of error.
             *
             * For example, it would be incorrect to ignore %G_TLS_CERTIFICATE_EXPIRED if
             * you want to allow expired certificates, because this could potentially be
             * the only error flag set even if other problems exist with the certificate.
             * @returns the validation flags.
             */
            get_tls_validation_flags(): Gio.TlsCertificateFlags;
            /**
             * Get the tunnel session id the connection.
             * @returns returns a non-empty string if @conn is being tunneled over HTTP.
             */
            get_tunnelid(): string | null;
            /**
             * Retrieve the URL of the other end of `conn`.
             * @returns The URL. This value remains valid until the connection is freed.
             */
            get_url(): RTSPUrl;
            /**
             * Get the file descriptor for writing.
             * @returns the file descriptor used for writing or NULL on error. The file descriptor remains valid until the connection is closed.
             */
            get_write_socket(): Gio.Socket | null;
            /**
             * Get the tunneling state of the connection.
             * @returns if @conn is using HTTP tunneling.
             */
            is_tunneled(): boolean;
            /**
             * Calculate the next timeout for `conn,` storing the result in `timeout`.
             * @param timeout a timeout
             * @returns #GST_RTSP_OK.
             */
            next_timeout(timeout: GLib.TimeVal): RTSPResult;
            /**
             * Calculate the next timeout for `conn`
             * @returns #the next timeout in microseconds
             */
            next_timeout_usec(): number;
            /**
             * Wait up to the specified `timeout` for the connection to become available for
             * at least one of the operations specified in `events`. When the function returns
             * with #GST_RTSP_OK, `revents` will contain a bitmask of available operations on
             * `conn`.
             *
             * `timeout` can be %NULL, in which case this function might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param events a bitmask of #GstRTSPEvent flags to check
             * @param timeout a timeout
             * @returns #GST_RTSP_OK on success.
             */
            poll(events: RTSPEvent, timeout: GLib.TimeVal): [RTSPResult, RTSPEvent];
            /**
             * Wait up to the specified `timeout` for the connection to become available for
             * at least one of the operations specified in `events`. When the function returns
             * with #GST_RTSP_OK, `revents` will contain a bitmask of available operations on
             * `conn`.
             *
             * `timeout` can be 0, in which case this function might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param events a bitmask of #GstRTSPEvent flags to check
             * @param timeout a timeout in microseconds
             * @returns #GST_RTSP_OK on success.
             */
            poll_usec(events: RTSPEvent, timeout: number): [RTSPResult, RTSPEvent];
            /**
             * Attempt to read `size` bytes into `data` from the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be %NULL, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param data the data to read
             * @param timeout a timeout value or %NULL
             * @returns #GST_RTSP_OK on success.
             */
            read(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;
            /**
             * Attempt to read `size` bytes into `data` from the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be 0, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param data the data to read
             * @param timeout a timeout value in microseconds
             * @returns #GST_RTSP_OK on success.
             */
            read_usec(data: Uint8Array | string, timeout: number): RTSPResult;
            /**
             * Attempt to read into `message` from the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be %NULL, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param message the message to read
             * @param timeout a timeout value or %NULL
             * @returns #GST_RTSP_OK on success.
             */
            receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
            /**
             * Attempt to read into `message` from the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be 0, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param message the message to read
             * @param timeout a timeout value or 0
             * @returns #GST_RTSP_OK on success.
             */
            receive_usec(message: RTSPMessage, timeout: number): RTSPResult;
            /**
             * Reset the timeout of `conn`.
             * @returns #GST_RTSP_OK.
             */
            reset_timeout(): RTSPResult;
            /**
             * Attempt to send `message` to the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be %NULL, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param message the message to send
             * @param timeout a timeout value or %NULL
             * @returns #GST_RTSP_OK on success.
             */
            send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
            /**
             * Attempt to send `messages` to the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be %NULL, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param messages the messages to send
             * @param timeout a timeout value or %NULL
             * @returns #GST_RTSP_OK on success.
             */
            send_messages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult;
            /**
             * Attempt to send `messages` to the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be 0, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param messages the messages to send
             * @param timeout a timeout value in microseconds
             * @returns #GST_RTSP_OK on Since.
             */
            send_messages_usec(messages: RTSPMessage[], timeout: number): RTSPResult;
            /**
             * Attempt to send `message` to the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be 0, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param message the message to send
             * @param timeout a timeout value in microseconds
             * @returns #GST_RTSP_OK on success.
             */
            send_usec(message: RTSPMessage, timeout: number): RTSPResult;
            /**
             * Sets a custom accept-certificate function for checking certificates for
             * validity. This will directly map to #GTlsConnection 's "accept-certificate"
             * signal and be performed after the default checks of #GstRTSPConnection
             * (checking against the #GTlsDatabase with the given #GTlsCertificateFlags)
             * have failed. If no #GTlsDatabase is set on this connection, only `func` will
             * be called.
             * @param func a #GstRTSPConnectionAcceptCertificateFunc to check certificates
             */
            set_accept_certificate_func(func: RTSPConnectionAcceptCertificateFunc): void;
            /**
             * Configure `conn` for authentication mode `method` with `user` and `pass` as the
             * user and password respectively.
             * @param method authentication method
             * @param user the user
             * @param pass the password
             * @returns #GST_RTSP_OK.
             */
            set_auth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult;
            /**
             * Setup `conn` with authentication directives. This is not necessary for
             * methods #GST_RTSP_AUTH_NONE and #GST_RTSP_AUTH_BASIC. For
             * #GST_RTSP_AUTH_DIGEST, directives should be taken from the digest challenge
             * in the WWW-Authenticate response header and can include realm, domain,
             * nonce, opaque, stale, algorithm, qop as per RFC2617.
             * @param param authentication directive
             * @param value value
             */
            set_auth_param(param: string, value: string): void;
            /**
             * Configure `conn` to use the specified Content-Length limit.
             * Both requests and responses are validated. If content-length is
             * exceeded, ENOMEM error will be returned.
             * @param limit Content-Length limit
             */
            set_content_length_limit(limit: number): void;
            /**
             * By setting the HTTP mode to %TRUE the message parsing will support HTTP
             * messages in addition to the RTSP messages. It will also disable the
             * automatic handling of setting up an HTTP tunnel.
             * @param enable %TRUE to enable manual HTTP mode
             */
            set_http_mode(enable: boolean): void;
            /**
             * Set whether to ignore the x-server-ip-address header reply or not. If the
             * header is ignored, the original address will be used instead.
             * @param ignore %TRUE to ignore the x-server-ip-address header reply or %FALSE to          comply with it (%FALSE is the default).
             */
            set_ignore_x_server_reply(ignore: boolean): void;
            /**
             * Set the IP address of the server.
             * @param ip an ip address
             */
            set_ip(ip: string): void;
            /**
             * Set the proxy host and port.
             * @param host the proxy host
             * @param port the proxy port
             * @returns #GST_RTSP_OK.
             */
            set_proxy(host: string, port: number): RTSPResult;
            /**
             * Configure `conn` to use the specified DSCP value.
             * @param qos_dscp DSCP value
             * @returns #GST_RTSP_OK on success.
             */
            set_qos_dscp(qos_dscp: number): RTSPResult;
            /**
             * Sets if the #GstRTSPConnection should remember the session id from the last
             * response received and force it onto any further requests.
             *
             * The default value is %TRUE
             * @param remember %TRUE if the connection should remember the session id
             */
            set_remember_session_id(remember: boolean): void;
            /**
             * Sets the anchor certificate authorities database. This certificate
             * database will be used to verify the server's certificate in case it
             * can't be verified with the default certificate database first.
             * @param database a #GTlsDatabase
             */
            set_tls_database(database?: Gio.TlsDatabase | null): void;
            /**
             * Sets a #GTlsInteraction object to be used when the connection or certificate
             * database need to interact with the user. This will be used to prompt the
             * user for passwords where necessary.
             * @param interaction a #GTlsInteraction
             */
            set_tls_interaction(interaction?: Gio.TlsInteraction | null): void;
            /**
             * Sets the TLS validation flags to be used to verify the peer
             * certificate when a TLS connection is established.
             *
             * GLib guarantees that if certificate verification fails, at least one error
             * will be set, but it does not guarantee that all possible errors will be
             * set. Accordingly, you may not safely decide to ignore any particular type
             * of error.
             *
             * For example, it would be incorrect to mask %G_TLS_CERTIFICATE_EXPIRED if
             * you want to allow expired certificates, because this could potentially be
             * the only error flag set even if other problems exist with the certificate.
             * @param flags the validation flags.
             * @returns TRUE if the validation flags are set correctly, or FALSE if @conn is NULL or is not a TLS connection.
             */
            set_tls_validation_flags(flags: Gio.TlsCertificateFlags): boolean;
            /**
             * Set the HTTP tunneling state of the connection. This must be configured before
             * the `conn` is connected.
             * @param tunneled the new state
             */
            set_tunneled(tunneled: boolean): void;
            /**
             * Attempt to write `size` bytes of `data` to the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be %NULL, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param data the data to write
             * @param timeout a timeout value or %NULL
             * @returns #GST_RTSP_OK on success.
             */
            write(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;
            /**
             * Attempt to write `size` bytes of `data` to the connected `conn,` blocking up to
             * the specified `timeout`. `timeout` can be 0, in which case this function
             * might block forever.
             *
             * This function can be cancelled with gst_rtsp_connection_flush().
             * @param data the data to write
             * @param timeout a timeout value or 0
             * @returns #GST_RTSP_OK on success.
             */
            write_usec(data: Uint8Array | string, timeout: number): RTSPResult;
        }

        type RTSPExtensionInterface = typeof RTSPExtension;
        /**
         * Provides methods for creating and parsing request, response and data messages.
         */
        class RTSPMessage {
            static $gtype: GObject.GType<RTSPMessage>;

            // Fields

            type: RTSPMsgType;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Add a header with key `field` and `value` to `msg`. This function takes a copy
             * of `value`.
             * @param field a #GstRTSPHeaderField
             * @param value the value of the header
             * @returns a #GstRTSPResult.
             */
            add_header(field: RTSPHeaderField, value: string): RTSPResult;
            /**
             * Add a header with key `header` and `value` to `msg`. This function takes a copy
             * of `value`.
             * @param header header string
             * @param value the value of the header
             * @returns a #GstRTSPResult.
             */
            add_header_by_name(header: string, value: string): RTSPResult;
            /**
             * Append the currently configured headers in `msg` to the #GString `str` suitable
             * for transmission.
             * @param str a string
             * @returns #GST_RTSP_OK.
             */
            append_headers(str: GLib.String): RTSPResult;
            /**
             * Allocate a new copy of `msg` and store the result in `copy`. The value in
             * `copy` should be release with gst_rtsp_message_free function.
             * @returns a #GstRTSPResult
             */
            copy(): [RTSPResult, RTSPMessage | null];
            /**
             * Dump the contents of `msg` to stdout.
             * @returns #GST_RTSP_OK.
             */
            dump(): RTSPResult;
            /**
             * Free the memory used by `msg`.
             * @returns a #GstRTSPResult.
             */
            free(): RTSPResult;
            /**
             * Get the body of `msg`. `data` remains valid for as long as `msg` is valid and
             * unchanged.
             *
             * If the message body was set as a #GstBuffer before this will cause the data
             * to be copied and stored in the message. The #GstBuffer will no longer be
             * kept in the message.
             * @returns #GST_RTSP_OK.
             */
            get_body(): [RTSPResult, Uint8Array];
            /**
             * Get the body of `msg`. `buffer` remains valid for as long as `msg` is valid and
             * unchanged.
             *
             * If body data was set from raw memory instead of a #GstBuffer this function
             * will always return %NULL. The caller can check if there is a body buffer by
             * calling gst_rtsp_message_has_body_buffer().
             * @returns #GST_RTSP_OK.
             */
            get_body_buffer(): [RTSPResult, Gst.Buffer];
            /**
             * Get the `indx` header value with key `field` from `msg`. The result in `value`
             * stays valid as long as it remains present in `msg`.
             * @param field a #GstRTSPHeaderField
             * @param indx the index of the header
             * @returns #GST_RTSP_OK when @field was found, #GST_RTSP_ENOTIMPL if the key was not found.
             */
            get_header(field: RTSPHeaderField, indx: number): [RTSPResult, string];
            /**
             * Get the `index` header value with key `header` from `msg`. The result in `value`
             * stays valid as long as it remains present in `msg`.
             * @param header a #GstRTSPHeaderField
             * @param index the index of the header
             * @returns #GST_RTSP_OK when @field was found, #GST_RTSP_ENOTIMPL if the key was not found.
             */
            get_header_by_name(header: string, index: number): [RTSPResult, string];
            /**
             * Get the message type of `msg`.
             * @returns the message type.
             */
            get_type(): RTSPMsgType;
            /**
             * Checks if `msg` has a body and the body is stored as #GstBuffer.
             * @returns %TRUE if @msg has a body and it's stored as #GstBuffer, %FALSE otherwise.
             */
            has_body_buffer(): boolean;
            /**
             * Initialize `msg`. This function is mostly used when `msg` is allocated on the
             * stack. The reverse operation of this is gst_rtsp_message_unset().
             * @returns a #GstRTSPResult.
             */
            init(): RTSPResult;
            /**
             * Initialize a new data #GstRTSPMessage for `channel`.
             * @param channel a channel
             * @returns a #GstRTSPResult.
             */
            init_data(channel: number): RTSPResult;
            /**
             * Initialize `msg` as a request message with `method` and `uri`. To clear `msg`
             * again, use gst_rtsp_message_unset().
             * @param method the request method to use
             * @param uri the uri of the request
             * @returns a #GstRTSPResult.
             */
            init_request(method: RTSPMethod, uri: string): RTSPResult;
            /**
             * Initialize `msg` with `code` and `reason`.
             *
             * When `reason` is %NULL, the default reason for `code` will be used.
             *
             * When `request` is not %NULL, the relevant headers will be copied to the new
             * response message.
             * @param code the status code
             * @param reason the status reason or %NULL
             * @param request the request that triggered the response or %NULL
             * @returns a #GstRTSPResult.
             */
            init_response(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): RTSPResult;
            /**
             * Parses the credentials given in a WWW-Authenticate or Authorization header.
             * @param field a #GstRTSPHeaderField
             * @returns %NULL-terminated array of GstRTSPAuthCredential or %NULL.
             */
            parse_auth_credentials(field: RTSPHeaderField): RTSPAuthCredential[];
            /**
             * Parse the data message `msg` and store the channel in `channel`.
             * @returns a #GstRTSPResult.
             */
            parse_data(): [RTSPResult, number];
            /**
             * Parse the request message `msg` and store the values `method,` `uri` and
             * `version`. The result locations can be %NULL if one is not interested in its
             * value.
             *
             * `uri` remains valid for as long as `msg` is valid and unchanged.
             * @returns a #GstRTSPResult.
             */
            parse_request(): [RTSPResult, RTSPMethod | null, string, RTSPVersion | null];
            /**
             * Parse the response message `msg` and store the values `code,` `reason` and
             * `version`. The result locations can be %NULL if one is not interested in its
             * value.
             *
             * `reason` remains valid for as long as `msg` is valid and unchanged.
             * @returns a #GstRTSPResult.
             */
            parse_response(): [RTSPResult, RTSPStatusCode | null, string, RTSPVersion | null];
            /**
             * Remove the `indx` header with key `field` from `msg`. If `indx` equals -1, all
             * headers will be removed.
             * @param field a #GstRTSPHeaderField
             * @param indx the index of the header
             * @returns a #GstRTSPResult.
             */
            remove_header(field: RTSPHeaderField, indx: number): RTSPResult;
            /**
             * Remove the `index` header with key `header` from `msg`. If `index` equals -1,
             * all matching headers will be removed.
             * @param header the header string
             * @param index the index of the header
             * @returns a #GstRTSPResult
             */
            remove_header_by_name(header: string, index: number): RTSPResult;
            /**
             * Set the body of `msg` to a copy of `data`. Any existing body or body buffer
             * will be replaced by the new body.
             * @param data the data
             * @returns #GST_RTSP_OK.
             */
            set_body(data: Uint8Array | string): RTSPResult;
            /**
             * Set the body of `msg` to `buffer`. Any existing body or body buffer
             * will be replaced by the new body.
             * @param buffer a #GstBuffer
             * @returns #GST_RTSP_OK.
             */
            set_body_buffer(buffer: Gst.Buffer): RTSPResult;
            /**
             * Take the body of `msg` and store it in `data` and `size`. After this method,
             * the body and size of `msg` will be set to %NULL and 0 respectively.
             * @returns #GST_RTSP_OK.
             */
            steal_body(): [RTSPResult, Uint8Array];
            /**
             * Take the body of `msg` and store it in `buffer`. After this method,
             * the body and size of `msg` will be set to %NULL and 0 respectively.
             *
             * If body data was set from raw memory instead of a #GstBuffer this function
             * will always return %NULL. The caller can check if there is a body buffer by
             * calling gst_rtsp_message_has_body_buffer().
             * @returns #GST_RTSP_OK.
             */
            steal_body_buffer(): [RTSPResult, Gst.Buffer];
            /**
             * Set the body of `msg` to `data` and `size`. This method takes ownership of
             * `data`. Any existing body or body buffer will be replaced by the new body.
             * @param data the data
             * @returns #GST_RTSP_OK.
             */
            take_body(data: Uint8Array | string): RTSPResult;
            /**
             * Set the body of `msg` to `buffer`. This method takes ownership of `buffer`.
             * Any existing body or body buffer will be replaced by the new body.
             * @param buffer a #GstBuffer
             * @returns #GST_RTSP_OK.
             */
            take_body_buffer(buffer: Gst.Buffer): RTSPResult;
            /**
             * Add a header with key `field` and `value` to `msg`. This function takes
             * ownership of `value`.
             * @param field a #GstRTSPHeaderField
             * @param value the value of the header
             * @returns a #GstRTSPResult.
             */
            take_header(field: RTSPHeaderField, value: string): RTSPResult;
            /**
             * Add a header with key `header` and `value` to `msg`. This function takes
             * ownership of `value,` but not of `header`.
             * @param header a header string
             * @param value the value of the header
             * @returns a #GstRTSPResult.
             */
            take_header_by_name(header: string, value: string): RTSPResult;
            /**
             * Unset the contents of `msg` so that it becomes an uninitialized
             * #GstRTSPMessage again. This function is mostly used in combination with
             * gst_rtsp_message_init_request(), gst_rtsp_message_init_response() and
             * gst_rtsp_message_init_data() on stack allocated #GstRTSPMessage structures.
             * @returns #GST_RTSP_OK.
             */
            unset(): RTSPResult;
        }

        /**
         * Provides helper functions to deal with time ranges.
         */
        class RTSPRange {
            static $gtype: GObject.GType<RTSPRange>;

            // Fields

            min: number;
            max: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    min: number;
                    max: number;
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Converts the range in-place between different types of units.
             * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
             * converted as these are only valid for #GST_RTSP_RANGE_NPT.
             * @param range a #GstRTSPTimeRange
             * @param unit the unit to convert the range into
             */
            static convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
            /**
             * Free the memory allocated by `range`.
             * @param range a #GstRTSPTimeRange
             */
            static free(range: RTSPTimeRange): void;
            /**
             * Retrieve the minimum and maximum values from `range` converted to
             * #GstClockTime in `min` and `max`.
             *
             * A value of %GST_CLOCK_TIME_NONE will be used to signal #GST_RTSP_TIME_NOW
             * and #GST_RTSP_TIME_END for `min` and `max` respectively.
             *
             * UTC times will be converted to nanoseconds since 1900.
             * @param range a #GstRTSPTimeRange
             */
            static get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];
            /**
             * Parse `rangestr` to a #GstRTSPTimeRange.
             * @param rangestr a range string to parse
             */
            static parse(rangestr: string): [RTSPResult, RTSPTimeRange];
            /**
             * Convert `range` into a string representation.
             * @param range a #GstRTSPTimeRange
             */
            static to_string(range: RTSPTimeRange): string;
        }

        /**
         * A time indication.
         */
        class RTSPTime {
            static $gtype: GObject.GType<RTSPTime>;

            // Fields

            type: RTSPTimeType;
            seconds: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Extra fields for a time indication.
         */
        class RTSPTime2 {
            static $gtype: GObject.GType<RTSPTime2>;

            // Fields

            frames: number;
            year: number;
            month: number;
            day: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    frames: number;
                    year: number;
                    month: number;
                    day: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * A time range.
         */
        class RTSPTimeRange {
            static $gtype: GObject.GType<RTSPTimeRange>;

            // Fields

            unit: RTSPRangeUnit;
            min2: RTSPTime2;
            max2: RTSPTime2;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Provides helper functions to deal with RTSP transport strings.
         */
        class RTSPTransport {
            static $gtype: GObject.GType<RTSPTransport>;

            // Fields

            trans: RTSPTransMode;
            profile: RTSPProfile;
            lower_transport: RTSPLowerTrans;
            destination: string;
            source: string;
            layers: number;
            mode_play: boolean;
            mode_record: boolean;
            append: boolean;
            interleaved: RTSPRange;
            ttl: number;
            port: RTSPRange;
            client_port: RTSPRange;
            server_port: RTSPRange;
            ssrc: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Get the #GstElement that can handle the buffers transported over `trans`.
             *
             * It is possible that there are several managers available, use `option` to
             * selected one.
             *
             * `manager` will contain an element name or %NULL when no manager is
             * needed/available for `trans`.
             * @param trans a #GstRTSPTransMode
             * @param option option index.
             */
            static get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];
            /**
             * Get the mime type of the transport mode `trans`. This mime type is typically
             * used to generate #GstCaps events.
             * @param trans a #GstRTSPTransMode
             */
            static get_mime(trans: RTSPTransMode): [RTSPResult, string];
            /**
             * Initialize `transport` so that it can be used.
             */
            static init(): [RTSPResult, RTSPTransport];
            /**
             * Allocate a new initialized #GstRTSPTransport. Use gst_rtsp_transport_free()
             * after usage.
             */
            static ['new'](): [RTSPResult, RTSPTransport];
            /**
             * Parse the RTSP transport string `str` into `transport`.
             * @param str a transport string
             */
            static parse(str: string): [RTSPResult, RTSPTransport];

            // Methods

            /**
             * Convert `transport` into a string that can be used to signal the transport in
             * an RTSP SETUP response.
             * @returns a string describing the RTSP transport or %NULL when the transport is invalid.
             */
            as_text(): string | null;
            /**
             * Free the memory used by `transport`.
             * @returns #GST_RTSP_OK.
             */
            free(): RTSPResult;
            /**
             * Get the media type of `transport`. This media type is typically
             * used to generate #GstCaps events.
             * @returns #GST_RTSP_OK.
             */
            get_media_type(): [RTSPResult, string];
        }

        /**
         * Provides helper functions to handle RTSP urls.
         */
        class RTSPUrl {
            static $gtype: GObject.GType<RTSPUrl>;

            // Fields

            transports: RTSPLowerTrans;
            family: RTSPFamily;
            user: string;
            passwd: string;
            host: string;
            port: number;
            abspath: string;
            query: string;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Parse the RTSP `urlstr` into a newly allocated #GstRTSPUrl. Free after usage
             * with gst_rtsp_url_free().
             * @param urlstr the url string to parse
             */
            static parse(urlstr: string): [RTSPResult, RTSPUrl | null];

            // Methods

            /**
             * Make a copy of `url`.
             * @returns a copy of @url. Free with gst_rtsp_url_free () after usage.
             */
            copy(): RTSPUrl;
            /**
             * Splits the path of `url` on '/' boundaries, decoding the resulting components,
             *
             * The decoding performed by this routine is "URI decoding", as defined in RFC
             * 3986, commonly known as percent-decoding. For example, a string "foo\%2fbar"
             * will decode to "foo/bar" -- the \%2f being replaced by the corresponding byte
             * with hex value 0x2f. Note that there is no guarantee that the resulting byte
             * sequence is valid in any given encoding. As a special case, \%00 is not
             * unescaped to NUL, as that would prematurely terminate the string.
             *
             * Also note that since paths usually start with a slash, the first component
             * will usually be the empty string.
             * @returns %NULL-terminated array of URL components. Free with g_strfreev() when no longer needed.
             */
            decode_path_components(): string[];
            /**
             * Free the memory used by `url`.
             */
            free(): void;
            /**
             * Get the port number of `url`.
             * @returns #GST_RTSP_OK.
             */
            get_port(): [RTSPResult, number];
            /**
             * Get a newly allocated string describing the request URI for `url`.
             * @returns a string with the request URI. g_free() after usage.
             */
            get_request_uri(): string;
            /**
             * Get a newly allocated string describing the request URI for `url`
             * combined with the control path for `control_path`
             * @param control_path an RTSP aggregate control path
             * @returns a string with the request URI combined with the control path. g_free() after usage.
             */
            get_request_uri_with_control(control_path: string): string;
            /**
             * Set the port number in `url` to `port`.
             * @param port the port
             * @returns #GST_RTSP_OK.
             */
            set_port(port: number): RTSPResult;
        }

        /**
         * Opaque RTSP watch object that can be used for asynchronous RTSP
         * operations.
         */
        abstract class RTSPWatch {
            static $gtype: GObject.GType<RTSPWatch>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Adds a #GstRTSPWatch to a context so that it will be executed within that context.
             * @param context a GMainContext (if NULL, the default context will be used)
             * @returns the ID (greater than 0) for the watch within the GMainContext.
             */
            attach(context?: GLib.MainContext | null): number;
            /**
             * Get the maximum amount of bytes and messages that will be queued in `watch`.
             * See gst_rtsp_watch_set_send_backlog().
             */
            get_send_backlog(): [number, number];
            /**
             * Reset `watch,` this is usually called after gst_rtsp_connection_do_tunnel()
             * when the file descriptors of the connection might have changed.
             */
            reset(): void;
            /**
             * Send a `message` using the connection of the `watch`. If it cannot be sent
             * immediately, it will be queued for transmission in `watch`. The contents of
             * `message` will then be serialized and transmitted when the connection of the
             * `watch` becomes writable. In case the `message` is queued, the ID returned in
             * `id` will be non-zero and used as the ID argument in the message_sent
             * callback.
             * @param message a #GstRTSPMessage
             * @returns #GST_RTSP_OK on success.
             */
            send_message(message: RTSPMessage): [RTSPResult, number];
            /**
             * Sends `messages` using the connection of the `watch`. If they cannot be sent
             * immediately, they will be queued for transmission in `watch`. The contents of
             * `messages` will then be serialized and transmitted when the connection of the
             * `watch` becomes writable. In case the `messages` are queued, the ID returned in
             * `id` will be non-zero and used as the ID argument in the message_sent
             * callback once the last message is sent. The callback will only be called
             * once for the last message.
             * @param messages the messages to send
             * @returns #GST_RTSP_OK on success.
             */
            send_messages(messages: RTSPMessage[]): [RTSPResult, number];
            /**
             * When `flushing` is %TRUE, abort a call to gst_rtsp_watch_wait_backlog()
             * and make sure gst_rtsp_watch_write_data() returns immediately with
             * #GST_RTSP_EINTR. And empty the queue.
             * @param flushing new flushing state
             */
            set_flushing(flushing: boolean): void;
            /**
             * Set the maximum amount of bytes and messages that will be queued in `watch`.
             * When the maximum amounts are exceeded, gst_rtsp_watch_write_data() and
             * gst_rtsp_watch_send_message() will return #GST_RTSP_ENOMEM.
             *
             * A value of 0 for `bytes` or `messages` means no limits.
             * @param bytes maximum bytes
             * @param messages maximum messages
             */
            set_send_backlog(bytes: number, messages: number): void;
            /**
             * Decreases the reference count of `watch` by one. If the resulting reference
             * count is zero the watch and associated memory will be destroyed.
             */
            unref(): void;
            /**
             * Wait until there is place in the backlog queue, `timeout` is reached
             * or `watch` is set to flushing.
             *
             * If `timeout` is %NULL this function can block forever. If `timeout`
             * contains a valid timeout, this function will return %GST_RTSP_ETIMEOUT
             * after the timeout expired.
             *
             * The typically use of this function is when gst_rtsp_watch_write_data
             * returns %GST_RTSP_ENOMEM. The caller then calls this function to wait for
             * free space in the backlog queue and try again.
             * @param timeout a GTimeVal timeout
             * @returns %GST_RTSP_OK when if there is room in queue.          %GST_RTSP_ETIMEOUT when @timeout was reached.          %GST_RTSP_EINTR when @watch is flushing          %GST_RTSP_EINVAL when called with invalid parameters.
             */
            wait_backlog(timeout: GLib.TimeVal): RTSPResult;
            /**
             * Wait until there is place in the backlog queue, `timeout` is reached
             * or `watch` is set to flushing.
             *
             * If `timeout` is 0 this function can block forever. If `timeout`
             * contains a valid timeout, this function will return %GST_RTSP_ETIMEOUT
             * after the timeout expired.
             *
             * The typically use of this function is when gst_rtsp_watch_write_data
             * returns %GST_RTSP_ENOMEM. The caller then calls this function to wait for
             * free space in the backlog queue and try again.
             * @param timeout a timeout in microseconds
             * @returns %GST_RTSP_OK when if there is room in queue.          %GST_RTSP_ETIMEOUT when @timeout was reached.          %GST_RTSP_EINTR when @watch is flushing          %GST_RTSP_EINVAL when called with invalid parameters.
             */
            wait_backlog_usec(timeout: number): RTSPResult;
            /**
             * Write `data` using the connection of the `watch`. If it cannot be sent
             * immediately, it will be queued for transmission in `watch`. The contents of
             * `message` will then be serialized and transmitted when the connection of the
             * `watch` becomes writable. In case the `message` is queued, the ID returned in
             * `id` will be non-zero and used as the ID argument in the message_sent
             * callback.
             *
             * This function will take ownership of `data` and g_free() it after use.
             *
             * If the amount of queued data exceeds the limits set with
             * gst_rtsp_watch_set_send_backlog(), this function will return
             * #GST_RTSP_ENOMEM.
             * @param data the data to queue
             * @returns #GST_RTSP_OK on success. #GST_RTSP_ENOMEM when the backlog limits are reached. #GST_RTSP_EINTR when @watch was flushing.
             */
            write_data(data: Uint8Array | string): [RTSPResult, number];
        }

        /**
         * Callback functions from a #GstRTSPWatch.
         */
        class RTSPWatchFuncs {
            static $gtype: GObject.GType<RTSPWatchFuncs>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;
        }

        module RTSPExtension {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface RTSPExtensionNamespace {
            $gtype: GObject.GType<RTSPExtension>;
            prototype: RTSPExtension;
        }
        interface RTSPExtension extends GObject.Object {
            // Methods

            after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
            before_send(req: RTSPMessage): RTSPResult;
            configure_stream(caps: Gst.Caps): boolean;
            detect_server(resp: RTSPMessage): boolean;
            get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;
            parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;
            receive_request(req: RTSPMessage): RTSPResult;
            send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
            setup_media(media: GstSdp.SDPMedia): RTSPResult;
            stream_select(url: RTSPUrl): RTSPResult;

            // Virtual methods

            vfunc_after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
            vfunc_before_send(req: RTSPMessage): RTSPResult;
            vfunc_configure_stream(caps: Gst.Caps): boolean;
            vfunc_detect_server(resp: RTSPMessage): boolean;
            vfunc_get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;
            vfunc_parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;
            vfunc_receive_request(req: RTSPMessage): RTSPResult;
            vfunc_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
            vfunc_setup_media(media: GstSdp.SDPMedia): RTSPResult;
            vfunc_stream_select(url: RTSPUrl): RTSPResult;
        }

        export const RTSPExtension: RTSPExtensionNamespace;

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

    export default GstRtsp;
}

declare module 'gi://GstRtsp' {
    import GstRtsp10 from 'gi://GstRtsp?version=1.0';
    export default GstRtsp10;
}
// END
