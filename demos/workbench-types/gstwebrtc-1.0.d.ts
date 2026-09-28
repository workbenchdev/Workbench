/// <reference path="./gstsdp-1.0.d.ts" />
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

declare module 'gi://GstWebRTC?version=1.0' {
    // Module dependencies
    import type GstSdp from 'gi://GstSdp?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstWebRTC {
        /**
         * GstWebRTC-1.0
         */

        /**
         * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
         * for more information.
         */

        /**
         * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
         * for more information.
         */
        export namespace WebRTCBundlePolicy {
            export const $gtype: GObject.GType<WebRTCBundlePolicy>;
        }

        enum WebRTCBundlePolicy {
            /**
             * none
             */
            NONE,
            /**
             * balanced
             */
            BALANCED,
            /**
             * max-compat
             */
            MAX_COMPAT,
            /**
             * max-bundle
             */
            MAX_BUNDLE,
        }

        export namespace WebRTCDTLSSetup {
            export const $gtype: GObject.GType<WebRTCDTLSSetup>;
        }

        enum WebRTCDTLSSetup {
            /**
             * none
             */
            NONE,
            /**
             * actpass
             */
            ACTPASS,
            /**
             * sendonly
             */
            ACTIVE,
            /**
             * recvonly
             */
            PASSIVE,
        }

        export namespace WebRTCDTLSTransportState {
            export const $gtype: GObject.GType<WebRTCDTLSTransportState>;
        }

        enum WebRTCDTLSTransportState {
            /**
             * new
             */
            NEW,
            /**
             * closed
             */
            CLOSED,
            /**
             * failed
             */
            FAILED,
            /**
             * connecting
             */
            CONNECTING,
            /**
             * connected
             */
            CONNECTED,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcdatachannelstate>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcdatachannelstate>
         */
        export namespace WebRTCDataChannelState {
            export const $gtype: GObject.GType<WebRTCDataChannelState>;
        }

        enum WebRTCDataChannelState {
            /**
             * connecting
             */
            CONNECTING,
            /**
             * open
             */
            OPEN,
            /**
             * closing
             */
            CLOSING,
            /**
             * closed
             */
            CLOSED,
        }
        /**
         * See <https://www.w3.org/TR/webrtc/#dom-rtcerrordetailtype> for more information.
         */
        class WebRTCError extends GLib.Error {
            static $gtype: GObject.GType<WebRTCError>;

            // Static fields

            /**
             * data-channel-failure
             */
            static DATA_CHANNEL_FAILURE: number;
            /**
             * dtls-failure
             */
            static DTLS_FAILURE: number;
            /**
             * fingerprint-failure
             */
            static FINGERPRINT_FAILURE: number;
            /**
             * sctp-failure
             */
            static SCTP_FAILURE: number;
            /**
             * sdp-syntax-error
             */
            static SDP_SYNTAX_ERROR: number;
            /**
             * hardware-encoder-not-available
             */
            static HARDWARE_ENCODER_NOT_AVAILABLE: number;
            /**
             * encoder-error
             */
            static ENCODER_ERROR: number;
            /**
             * invalid-state (part of WebIDL specification)
             */
            static INVALID_STATE: number;
            /**
             * GStreamer-specific failure, not matching any other value from the specification
             */
            static INTERNAL_FAILURE: number;
            /**
             * invalid-modification (part of WebIDL specification)
             */
            static INVALID_MODIFICATION: number;
            /**
             * type-error (maps to JavaScript TypeError)
             */
            static TYPE_ERROR: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace WebRTCFECType {
            export const $gtype: GObject.GType<WebRTCFECType>;
        }

        enum WebRTCFECType {
            /**
             * none
             */
            NONE,
            /**
             * ulpfec + red
             */
            ULP_RED,
        }

        export namespace WebRTCICEComponent {
            export const $gtype: GObject.GType<WebRTCICEComponent>;
        }

        enum WebRTCICEComponent {
            /**
             * RTP component
             */
            RTP,
            /**
             * RTCP component
             */
            RTCP,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtciceconnectionstate>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtciceconnectionstate>
         */
        export namespace WebRTCICEConnectionState {
            export const $gtype: GObject.GType<WebRTCICEConnectionState>;
        }

        enum WebRTCICEConnectionState {
            /**
             * new
             */
            NEW,
            /**
             * checking
             */
            CHECKING,
            /**
             * connected
             */
            CONNECTED,
            /**
             * completed
             */
            COMPLETED,
            /**
             * failed
             */
            FAILED,
            /**
             * disconnected
             */
            DISCONNECTED,
            /**
             * closed
             */
            CLOSED,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcicegatheringstate>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcicegatheringstate>
         */
        export namespace WebRTCICEGatheringState {
            export const $gtype: GObject.GType<WebRTCICEGatheringState>;
        }

        enum WebRTCICEGatheringState {
            /**
             * new
             */
            NEW,
            /**
             * gathering
             */
            GATHERING,
            /**
             * complete
             */
            COMPLETE,
        }

        export namespace WebRTCICERole {
            export const $gtype: GObject.GType<WebRTCICERole>;
        }

        enum WebRTCICERole {
            /**
             * controlled
             */
            CONTROLLED,
            /**
             * controlling
             */
            CONTROLLING,
        }
        /**
         * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
         * for more information.
         */

        /**
         * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
         * for more information.
         */
        export namespace WebRTCICETransportPolicy {
            export const $gtype: GObject.GType<WebRTCICETransportPolicy>;
        }

        enum WebRTCICETransportPolicy {
            /**
             * all
             */
            ALL,
            /**
             * relay
             */
            RELAY,
        }
        /**
         * https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-kind
         */

        /**
         * https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-kind
         */
        export namespace WebRTCKind {
            export const $gtype: GObject.GType<WebRTCKind>;
        }

        enum WebRTCKind {
            /**
             * Kind has not yet been set
             */
            UNKNOWN,
            /**
             * Kind is audio
             */
            AUDIO,
            /**
             * Kind is audio
             */
            VIDEO,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectionstate>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectionstate>
         */
        export namespace WebRTCPeerConnectionState {
            export const $gtype: GObject.GType<WebRTCPeerConnectionState>;
        }

        enum WebRTCPeerConnectionState {
            /**
             * new
             */
            NEW,
            /**
             * connecting
             */
            CONNECTING,
            /**
             * connected
             */
            CONNECTED,
            /**
             * disconnected
             */
            DISCONNECTED,
            /**
             * failed
             */
            FAILED,
            /**
             * closed
             */
            CLOSED,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcprioritytype>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcprioritytype>
         */
        export namespace WebRTCPriorityType {
            export const $gtype: GObject.GType<WebRTCPriorityType>;
        }

        enum WebRTCPriorityType {
            /**
             * very-low
             */
            VERY_LOW,
            /**
             * low
             */
            LOW,
            /**
             * medium
             */
            MEDIUM,
            /**
             * high
             */
            HIGH,
        }

        export namespace WebRTCRTPTransceiverDirection {
            export const $gtype: GObject.GType<WebRTCRTPTransceiverDirection>;
        }

        enum WebRTCRTPTransceiverDirection {
            /**
             * none
             */
            NONE,
            /**
             * inactive
             */
            INACTIVE,
            /**
             * sendonly
             */
            SENDONLY,
            /**
             * recvonly
             */
            RECVONLY,
            /**
             * sendrecv
             */
            SENDRECV,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcsctptransportstate>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcsctptransportstate>
         */
        export namespace WebRTCSCTPTransportState {
            export const $gtype: GObject.GType<WebRTCSCTPTransportState>;
        }

        enum WebRTCSCTPTransportState {
            /**
             * new
             */
            NEW,
            /**
             * connecting
             */
            CONNECTING,
            /**
             * connected
             */
            CONNECTED,
            /**
             * closed
             */
            CLOSED,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#rtcsdptype>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#rtcsdptype>
         */
        export namespace WebRTCSDPType {
            export const $gtype: GObject.GType<WebRTCSDPType>;
        }

        enum WebRTCSDPType {
            /**
             * offer
             */
            OFFER,
            /**
             * pranswer
             */
            PRANSWER,
            /**
             * answer
             */
            ANSWER,
            /**
             * rollback
             */
            ROLLBACK,
        }
        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcsignalingstate>
         */

        /**
         * See <http://w3c.github.io/webrtc-pc/#dom-rtcsignalingstate>
         */
        export namespace WebRTCSignalingState {
            export const $gtype: GObject.GType<WebRTCSignalingState>;
        }

        enum WebRTCSignalingState {
            /**
             * stable
             */
            STABLE,
            /**
             * closed
             */
            CLOSED,
            /**
             * have-local-offer
             */
            HAVE_LOCAL_OFFER,
            /**
             * have-remote-offer
             */
            HAVE_REMOTE_OFFER,
            /**
             * have-local-pranswer
             */
            HAVE_LOCAL_PRANSWER,
            /**
             * have-remote-pranswer
             */
            HAVE_REMOTE_PRANSWER,
        }
        /**
         * See <https://w3c.github.io/webrtc-stats/#dom-rtcstatstype>
         */

        /**
         * See <https://w3c.github.io/webrtc-stats/#dom-rtcstatstype>
         */
        export namespace WebRTCStatsType {
            export const $gtype: GObject.GType<WebRTCStatsType>;
        }

        enum WebRTCStatsType {
            /**
             * codec
             */
            CODEC,
            /**
             * inbound-rtp
             */
            INBOUND_RTP,
            /**
             * outbound-rtp
             */
            OUTBOUND_RTP,
            /**
             * remote-inbound-rtp
             */
            REMOTE_INBOUND_RTP,
            /**
             * remote-outbound-rtp
             */
            REMOTE_OUTBOUND_RTP,
            /**
             * csrc
             */
            CSRC,
            /**
             * peer-connection
             */
            PEER_CONNECTION,
            /**
             * data-channel
             */
            DATA_CHANNEL,
            /**
             * stream
             */
            STREAM,
            /**
             * transport
             */
            TRANSPORT,
            /**
             * candidate-pair
             */
            CANDIDATE_PAIR,
            /**
             * local-candidate
             */
            LOCAL_CANDIDATE,
            /**
             * remote-candidate
             */
            REMOTE_CANDIDATE,
            /**
             * certificate
             */
            CERTIFICATE,
        }
        function webrtc_error_quark(): GLib.Quark;
        function webrtc_sdp_type_to_string(type: WebRTCSDPType): string;
        interface WebRTCICEOnCandidateFunc {
            (ice: WebRTCICE, stream_id: number, candidate: string): void;
        }
        module WebRTCDTLSTransport {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                certificate: string;
                client: boolean;
                remote_certificate: string;
                remoteCertificate: string;
                session_id: number;
                sessionId: number;
                state: WebRTCDTLSTransportState;
                transport: WebRTCICETransport;
            }
        }

        class WebRTCDTLSTransport extends Gst.Object {
            static $gtype: GObject.GType<WebRTCDTLSTransport>;

            // Properties

            get certificate(): string;
            set certificate(val: string);
            get client(): boolean;
            set client(val: boolean);
            get remote_certificate(): string;
            get remoteCertificate(): string;
            get session_id(): number;
            get sessionId(): number;
            get state(): WebRTCDTLSTransportState;
            get transport(): WebRTCICETransport;

            // Constructors

            constructor(properties?: Partial<WebRTCDTLSTransport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WebRTCDataChannel {
            // Signal callback interfaces

            interface Close {
                (): void;
            }

            interface OnBufferedAmountLow {
                (): void;
            }

            interface OnClose {
                (): void;
            }

            interface OnError {
                (error: GLib.Error): void;
            }

            interface OnMessageData {
                (data?: GLib.Bytes | null): void;
            }

            interface OnMessageString {
                (data?: string | null): void;
            }

            interface OnOpen {
                (): void;
            }

            interface SendData {
                (data?: GLib.Bytes | null): void;
            }

            interface SendString {
                (data?: string | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffered_amount: number;
                bufferedAmount: number;
                buffered_amount_low_threshold: number;
                bufferedAmountLowThreshold: number;
                id: number;
                label: string;
                max_packet_lifetime: number;
                maxPacketLifetime: number;
                max_retransmits: number;
                maxRetransmits: number;
                negotiated: boolean;
                ordered: boolean;
                priority: WebRTCPriorityType;
                protocol: string;
                ready_state: WebRTCDataChannelState;
                readyState: WebRTCDataChannelState;
            }
        }

        abstract class WebRTCDataChannel extends GObject.Object {
            static $gtype: GObject.GType<WebRTCDataChannel>;

            // Properties

            get buffered_amount(): number;
            get bufferedAmount(): number;
            get buffered_amount_low_threshold(): number;
            set buffered_amount_low_threshold(val: number);
            get bufferedAmountLowThreshold(): number;
            set bufferedAmountLowThreshold(val: number);
            get id(): number;
            get label(): string;
            get max_packet_lifetime(): number;
            get maxPacketLifetime(): number;
            get max_retransmits(): number;
            get maxRetransmits(): number;
            get negotiated(): boolean;
            get ordered(): boolean;
            get priority(): WebRTCPriorityType;
            get protocol(): string;
            get ready_state(): WebRTCDataChannelState;
            get readyState(): WebRTCDataChannelState;

            // Constructors

            constructor(properties?: Partial<WebRTCDataChannel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'close', callback: (_source: this) => void): number;
            connect_after(signal: 'close', callback: (_source: this) => void): number;
            emit(signal: 'close'): void;
            connect(signal: 'on-buffered-amount-low', callback: (_source: this) => void): number;
            connect_after(signal: 'on-buffered-amount-low', callback: (_source: this) => void): number;
            emit(signal: 'on-buffered-amount-low'): void;
            connect(signal: 'on-close', callback: (_source: this) => void): number;
            connect_after(signal: 'on-close', callback: (_source: this) => void): number;
            emit(signal: 'on-close'): void;
            connect(signal: 'on-error', callback: (_source: this, error: GLib.Error) => void): number;
            connect_after(signal: 'on-error', callback: (_source: this, error: GLib.Error) => void): number;
            emit(signal: 'on-error', error: GLib.Error): void;
            connect(signal: 'on-message-data', callback: (_source: this, data: GLib.Bytes | null) => void): number;
            connect_after(
                signal: 'on-message-data',
                callback: (_source: this, data: GLib.Bytes | null) => void,
            ): number;
            emit(signal: 'on-message-data', data?: GLib.Bytes | null): void;
            connect(signal: 'on-message-string', callback: (_source: this, data: string | null) => void): number;
            connect_after(signal: 'on-message-string', callback: (_source: this, data: string | null) => void): number;
            emit(signal: 'on-message-string', data?: string | null): void;
            connect(signal: 'on-open', callback: (_source: this) => void): number;
            connect_after(signal: 'on-open', callback: (_source: this) => void): number;
            emit(signal: 'on-open'): void;
            connect(signal: 'send-data', callback: (_source: this, data: GLib.Bytes | null) => void): number;
            connect_after(signal: 'send-data', callback: (_source: this, data: GLib.Bytes | null) => void): number;
            emit(signal: 'send-data', data?: GLib.Bytes | null): void;
            connect(signal: 'send-string', callback: (_source: this, data: string | null) => void): number;
            connect_after(signal: 'send-string', callback: (_source: this, data: string | null) => void): number;
            emit(signal: 'send-string', data?: string | null): void;

            // Methods

            /**
             * Close the `channel`.
             */
            close(): void;
            /**
             * Send `data` as a data message over `channel`.
             * @param data a #GBytes or %NULL
             */
            send_data(data?: GLib.Bytes | null): void;
            /**
             * Send `data` as a data message over `channel`.
             * @param data a #GBytes or %NULL
             * @returns TRUE if @channel is open and data could be queued
             */
            send_data_full(data?: GLib.Bytes | null): boolean;
            /**
             * Send `str` as a string message over `channel`.
             * @param str a string or %NULL
             */
            send_string(str?: string | null): void;
            /**
             * Send `str` as a string message over `channel`.
             * @param str a string or %NULL
             * @returns TRUE if @channel is open and data could be queued
             */
            send_string_full(str?: string | null): boolean;
        }

        module WebRTCICE {
            // Signal callback interfaces

            interface AddLocalIpAddress {
                (address: string): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                max_rtp_port: number;
                maxRtpPort: number;
                min_rtp_port: number;
                minRtpPort: number;
            }
        }

        abstract class WebRTCICE extends Gst.Object {
            static $gtype: GObject.GType<WebRTCICE>;

            // Properties

            /**
             * Maximum port for local rtp port range.
             * min-rtp-port must be <= max-rtp-port
             */
            get max_rtp_port(): number;
            set max_rtp_port(val: number);
            /**
             * Maximum port for local rtp port range.
             * min-rtp-port must be <= max-rtp-port
             */
            get maxRtpPort(): number;
            set maxRtpPort(val: number);
            /**
             * Minimum port for local rtp port range.
             * min-rtp-port must be <= max-rtp-port
             */
            get min_rtp_port(): number;
            set min_rtp_port(val: number);
            /**
             * Minimum port for local rtp port range.
             * min-rtp-port must be <= max-rtp-port
             */
            get minRtpPort(): number;
            set minRtpPort(val: number);

            // Fields

            ice_gathering_state: WebRTCICEGatheringState;
            ice_connection_state: WebRTCICEConnectionState;

            // Constructors

            constructor(properties?: Partial<WebRTCICE.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'add-local-ip-address', callback: (_source: this, address: string) => boolean): number;
            connect_after(
                signal: 'add-local-ip-address',
                callback: (_source: this, address: string) => boolean,
            ): number;
            emit(signal: 'add-local-ip-address', address: string): void;

            // Virtual methods

            vfunc_add_candidate(stream: WebRTCICEStream, candidate: string, promise?: Gst.Promise | null): void;
            vfunc_add_stream(session_id: number): WebRTCICEStream | null;
            vfunc_add_turn_server(uri: string): boolean;
            vfunc_find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
            vfunc_gather_candidates(stream: WebRTCICEStream): boolean;
            /**
             * Get HTTP Proxy to be used when connecting to TURN server.
             */
            vfunc_get_http_proxy(): string;
            vfunc_get_is_controller(): boolean;
            vfunc_get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
            vfunc_get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
            vfunc_get_selected_pair(
                stream: WebRTCICEStream,
            ): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
            vfunc_get_stun_server(): string | null;
            vfunc_get_turn_server(): string | null;
            vfunc_set_force_relay(force_relay: boolean): void;
            /**
             * Set HTTP Proxy to be used when connecting to TURN server.
             * @param uri URI of the HTTP proxy of the form   http://[username:password@]hostname[:port][?alpn=<alpn>]
             */
            vfunc_set_http_proxy(uri: string): void;
            vfunc_set_is_controller(controller: boolean): void;
            vfunc_set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
            vfunc_set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
            vfunc_set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
            vfunc_set_stun_server(uri?: string | null): void;
            vfunc_set_tos(stream: WebRTCICEStream, tos: number): void;
            vfunc_set_turn_server(uri?: string | null): void;

            // Methods

            add_candidate(stream: WebRTCICEStream, candidate: string, promise?: Gst.Promise | null): void;
            add_stream(session_id: number): WebRTCICEStream | null;
            add_turn_server(uri: string): boolean;
            find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
            gather_candidates(stream: WebRTCICEStream): boolean;
            get_http_proxy(): string;
            get_is_controller(): boolean;
            get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
            get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
            get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
            get_stun_server(): string | null;
            get_turn_server(): string | null;
            set_force_relay(force_relay: boolean): void;
            /**
             * Set HTTP Proxy to be used when connecting to TURN server.
             * @param uri URI of the HTTP proxy of the form   http://[username:password@]hostname[:port][?alpn=<alpn>]
             */
            set_http_proxy(uri: string): void;
            set_is_controller(controller: boolean): void;
            set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
            set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
            set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
            set_stun_server(uri?: string | null): void;
            set_tos(stream: WebRTCICEStream, tos: number): void;
            set_turn_server(uri?: string | null): void;
        }

        module WebRTCICEStream {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                stream_id: number;
                streamId: number;
            }
        }

        abstract class WebRTCICEStream extends Gst.Object {
            static $gtype: GObject.GType<WebRTCICEStream>;

            // Properties

            get stream_id(): number;
            get streamId(): number;

            // Constructors

            constructor(properties?: Partial<WebRTCICEStream.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
            vfunc_gather_candidates(): boolean;

            // Methods

            find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
            gather_candidates(): boolean;
        }

        module WebRTCICETransport {
            // Signal callback interfaces

            interface OnNewCandidate {
                (object: string): void;
            }

            interface OnSelectedCandidatePairChange {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                component: WebRTCICEComponent;
                gathering_state: WebRTCICEGatheringState;
                gatheringState: WebRTCICEGatheringState;
                state: WebRTCICEConnectionState;
            }
        }

        abstract class WebRTCICETransport extends Gst.Object {
            static $gtype: GObject.GType<WebRTCICETransport>;

            // Properties

            get component(): WebRTCICEComponent;
            get gathering_state(): WebRTCICEGatheringState;
            get gatheringState(): WebRTCICEGatheringState;
            get state(): WebRTCICEConnectionState;

            // Fields

            role: WebRTCICERole;
            src: Gst.Element;
            sink: Gst.Element;

            // Constructors

            constructor(properties?: Partial<WebRTCICETransport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'on-new-candidate', callback: (_source: this, object: string) => void): number;
            connect_after(signal: 'on-new-candidate', callback: (_source: this, object: string) => void): number;
            emit(signal: 'on-new-candidate', object: string): void;
            connect(signal: 'on-selected-candidate-pair-change', callback: (_source: this) => void): number;
            connect_after(signal: 'on-selected-candidate-pair-change', callback: (_source: this) => void): number;
            emit(signal: 'on-selected-candidate-pair-change'): void;

            // Virtual methods

            vfunc_gather_candidates(): boolean;

            // Methods

            connection_state_change(new_state: WebRTCICEConnectionState): void;
            gathering_state_change(new_state: WebRTCICEGatheringState): void;
            new_candidate(stream_id: number, component: WebRTCICEComponent, attr: string): void;
            selected_pair_change(): void;
        }

        module WebRTCRTPReceiver {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                transport: WebRTCDTLSTransport;
            }
        }

        /**
         * An object to track the receiving aspect of the stream
         *
         * Mostly matches the WebRTC RTCRtpReceiver interface.
         */
        class WebRTCRTPReceiver extends Gst.Object {
            static $gtype: GObject.GType<WebRTCRTPReceiver>;

            // Properties

            /**
             * The DTLS transport for this receiver
             */
            get transport(): WebRTCDTLSTransport;

            // Constructors

            constructor(properties?: Partial<WebRTCRTPReceiver.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WebRTCRTPSender {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                priority: WebRTCPriorityType;
                transport: WebRTCDTLSTransport;
            }
        }

        /**
         * An object to track the sending aspect of the stream
         *
         * Mostly matches the WebRTC RTCRtpSender interface.
         */
        class WebRTCRTPSender extends Gst.Object {
            static $gtype: GObject.GType<WebRTCRTPSender>;

            // Properties

            /**
             * The priority from which to set the DSCP field on packets
             */
            get priority(): WebRTCPriorityType;
            set priority(val: WebRTCPriorityType);
            /**
             * The DTLS transport for this sender
             */
            get transport(): WebRTCDTLSTransport;

            // Constructors

            constructor(properties?: Partial<WebRTCRTPSender.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Sets the content of the IPv4 Type of Service (ToS), also known as DSCP
             * (Differentiated Services Code Point).
             * This also sets the Traffic Class field of IPv6.
             * @param priority The priority of this sender
             */
            set_priority(priority: WebRTCPriorityType): void;
        }

        module WebRTCRTPTransceiver {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                codec_preferences: Gst.Caps;
                codecPreferences: Gst.Caps;
                current_direction: WebRTCRTPTransceiverDirection;
                currentDirection: WebRTCRTPTransceiverDirection;
                direction: WebRTCRTPTransceiverDirection;
                kind: WebRTCKind;
                mid: string;
                mlineindex: number;
                receiver: WebRTCRTPReceiver;
                sender: WebRTCRTPSender;
            }
        }

        /**
         * Mostly matches the WebRTC RTCRtpTransceiver interface.
         */
        abstract class WebRTCRTPTransceiver extends Gst.Object {
            static $gtype: GObject.GType<WebRTCRTPTransceiver>;

            // Properties

            /**
             * Caps representing the codec preferences.
             */
            get codec_preferences(): Gst.Caps;
            set codec_preferences(val: Gst.Caps);
            /**
             * Caps representing the codec preferences.
             */
            get codecPreferences(): Gst.Caps;
            set codecPreferences(val: Gst.Caps);
            /**
             * The transceiver's current directionality, or none if the
             * transceiver is stopped or has never participated in an exchange
             * of offers and answers. To change the transceiver's
             * directionality, set the value of the direction property.
             */
            get current_direction(): WebRTCRTPTransceiverDirection;
            /**
             * The transceiver's current directionality, or none if the
             * transceiver is stopped or has never participated in an exchange
             * of offers and answers. To change the transceiver's
             * directionality, set the value of the direction property.
             */
            get currentDirection(): WebRTCRTPTransceiverDirection;
            /**
             * Direction of the transceiver.
             */
            get direction(): WebRTCRTPTransceiverDirection;
            set direction(val: WebRTCRTPTransceiverDirection);
            /**
             * The kind of media this transceiver transports
             */
            get kind(): WebRTCKind;
            /**
             * The media ID of the m-line associated with this transceiver. This
             * association is established, when possible, whenever either a
             * local or remote description is applied. This field is null if
             * neither a local or remote description has been applied, or if its
             * associated m-line is rejected by either a remote offer or any
             * answer.
             */
            get mid(): string;
            get mlineindex(): number;
            get receiver(): WebRTCRTPReceiver;
            get sender(): WebRTCRTPSender;

            // Constructors

            constructor(properties?: Partial<WebRTCRTPTransceiver.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WebRTCSCTPTransport {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                max_channels: number;
                maxChannels: number;
                max_message_size: number;
                maxMessageSize: number;
                state: WebRTCSCTPTransportState;
                transport: WebRTCDTLSTransport;
            }
        }

        abstract class WebRTCSCTPTransport extends Gst.Object {
            static $gtype: GObject.GType<WebRTCSCTPTransport>;

            // Properties

            get max_channels(): number;
            get maxChannels(): number;
            get max_message_size(): number;
            get maxMessageSize(): number;
            get state(): WebRTCSCTPTransportState;
            get transport(): WebRTCDTLSTransport;

            // Constructors

            constructor(properties?: Partial<WebRTCSCTPTransport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        type WebRTCDTLSTransportClass = typeof WebRTCDTLSTransport;
        type WebRTCDataChannelClass = typeof WebRTCDataChannel;
        class WebRTCICECandidateStats {
            static $gtype: GObject.GType<WebRTCICECandidateStats>;

            // Fields

            ipaddr: string;
            port: number;
            stream_id: number;
            type: string;
            proto: string;
            relay_proto: string;
            prio: number;
            url: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    ipaddr: string;
                    port: number;
                    stream_id: number;
                    type: string;
                    proto: string;
                    relay_proto: string;
                    prio: number;
                    url: string;
                    _gst_reserved: any[];
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            copy(): WebRTCICECandidateStats;
            /**
             * Helper function to free #GstWebRTCICECandidateStats
             */
            free(): void;
        }

        type WebRTCICEClass = typeof WebRTCICE;
        type WebRTCICEStreamClass = typeof WebRTCICEStream;
        type WebRTCICETransportClass = typeof WebRTCICETransport;
        type WebRTCRTPReceiverClass = typeof WebRTCRTPReceiver;
        type WebRTCRTPSenderClass = typeof WebRTCRTPSender;
        type WebRTCRTPTransceiverClass = typeof WebRTCRTPTransceiver;
        type WebRTCSCTPTransportClass = typeof WebRTCSCTPTransport;
        /**
         * See <https://www.w3.org/TR/webrtc/#rtcsessiondescription-class>
         */
        class WebRTCSessionDescription {
            static $gtype: GObject.GType<WebRTCSessionDescription>;

            // Fields

            type: WebRTCSDPType;
            sdp: GstSdp.SDPMessage;

            // Constructors

            constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage);
            _init(...args: any[]): void;

            static ['new'](type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription;

            // Methods

            copy(): WebRTCSessionDescription;
            /**
             * Free `desc` and all associated resources
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

    export default GstWebRTC;
}

declare module 'gi://GstWebRTC' {
    import GstWebRTC10 from 'gi://GstWebRTC?version=1.0';
    export default GstWebRTC10;
}
// END
