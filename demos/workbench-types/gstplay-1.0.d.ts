/// <reference path="./gstvideo-1.0.d.ts" />
/// <reference path="./gstbase-1.0.d.ts" />
/// <reference path="./gst-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gsttag-1.0.d.ts" />
/// <reference path="./gstpbutils-1.0.d.ts" />
/// <reference path="./gstaudio-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GstPlay?version=1.0' {
    // Module dependencies
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GstTag from 'gi://GstTag?version=1.0';
    import type GstPbutils from 'gi://GstPbutils?version=1.0';
    import type GstAudio from 'gi://GstAudio?version=1.0';

    export namespace GstPlay {
        /**
         * GstPlay-1.0
         */

        export namespace PlayColorBalanceType {
            export const $gtype: GObject.GType<PlayColorBalanceType>;
        }

        enum PlayColorBalanceType {
            /**
             * hue or color balance.
             */
            HUE,
            /**
             * brightness or black level.
             */
            BRIGHTNESS,
            /**
             * color saturation or chroma
             * gain.
             */
            SATURATION,
            /**
             * contrast or luma gain.
             */
            CONTRAST,
        }
        class PlayError extends GLib.Error {
            static $gtype: GObject.GType<PlayError>;

            // Static fields

            /**
             * generic error.
             */
            static FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets a string representing the given error.
             * @param error a #GstPlayError
             */
            static get_name(error: PlayError): string;
            static quark(): GLib.Quark;
        }

        export namespace PlayMessage {
            export const $gtype: GObject.GType<PlayMessage>;
        }

        enum PlayMessage {
            /**
             * Source element was initalized for set URI
             */
            URI_LOADED,
            /**
             * Sink position changed
             */
            POSITION_UPDATED,
            /**
             * Duration of stream changed
             */
            DURATION_CHANGED,
            /**
             * State changed, see #GstPlayState
             */
            STATE_CHANGED,
            /**
             * Pipeline is in buffering state, message contains the percentage value of the decoding buffer
             */
            BUFFERING,
            /**
             * Sink has received EOS
             */
            END_OF_STREAM,
            /**
             * Message contains an error
             */
            ERROR,
            /**
             * Message contains an error
             */
            WARNING,
            /**
             * Video sink received format in different dimensions than before
             */
            VIDEO_DIMENSIONS_CHANGED,
            /**
             * A media-info property has changed, message contains current #GstPlayMediaInfo
             */
            MEDIA_INFO_UPDATED,
            /**
             * The volume of the audio ouput has changed
             */
            VOLUME_CHANGED,
            /**
             * Audio muting flag has been toggled
             */
            MUTE_CHANGED,
            /**
             * Any pending seeking operation has been completed
             */
            SEEK_DONE,
        }

        export namespace PlaySnapshotFormat {
            export const $gtype: GObject.GType<PlaySnapshotFormat>;
        }

        enum PlaySnapshotFormat {
            /**
             * raw native format.
             */
            RAW_NATIVE,
            /**
             * raw xRGB format.
             */
            RAW_XRGB,
            /**
             * raw BGRx format.
             */
            RAW_BGRX,
            /**
             * jpeg format.
             */
            JPG,
            /**
             * png format.
             */
            PNG,
        }

        export namespace PlayState {
            export const $gtype: GObject.GType<PlayState>;
        }

        enum PlayState {
            /**
             * the play is stopped.
             */
            STOPPED,
            /**
             * the play is buffering.
             */
            BUFFERING,
            /**
             * the play is paused.
             */
            PAUSED,
            /**
             * the play is currently playing a
             * stream.
             */
            PLAYING,
        }
        /**
         * Gets a string representing the given color balance type.
         * @param type a #GstPlayColorBalanceType
         * @returns a string with the name of the color   balance type.
         */
        function play_color_balance_type_get_name(type: PlayColorBalanceType): string;
        /**
         * Gets a string representing the given error.
         * @param error a #GstPlayError
         * @returns a string with the given error.
         */
        function play_error_get_name(error: PlayError): string;
        function play_error_quark(): GLib.Quark;
        function play_message_get_name(message_type: PlayMessage): string;
        /**
         * Parse the given buffering-percent `msg` and extract the corresponding value
         * @param msg A #GstMessage
         */
        function play_message_parse_buffering_percent(msg: Gst.Message): number;
        /**
         * Parse the given duration `msg` and extract the corresponding #GstClockTime
         * @param msg A #GstMessage
         */
        function play_message_parse_duration_updated(msg: Gst.Message): Gst.ClockTime | null;
        /**
         * Parse the given error `msg` and extract the corresponding #GError
         * @param msg A #GstMessage
         */
        function play_message_parse_error(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];
        /**
         * Parse the given `msg` and extract the corresponding media information
         * @param msg A #GstMessage
         */
        function play_message_parse_media_info_updated(msg: Gst.Message): PlayMediaInfo | null;
        /**
         * Parse the given `msg` and extract the corresponding audio muted state
         * @param msg A #GstMessage
         */
        function play_message_parse_muted_changed(msg: Gst.Message): boolean;
        /**
         * Parse the given position `msg` and extract the corresponding #GstClockTime
         * @param msg A #GstMessage
         */
        function play_message_parse_position_updated(msg: Gst.Message): Gst.ClockTime | null;
        /**
         * Parse the given state `msg` and extract the corresponding #GstPlayState
         * @param msg A #GstMessage
         */
        function play_message_parse_state_changed(msg: Gst.Message): PlayState | null;
        /**
         * Parse the given `msg` and extract its #GstPlayMessage type.
         * @param msg A #GstMessage
         */
        function play_message_parse_type(msg: Gst.Message): PlayMessage | null;
        /**
         * Parse the given `msg` and extract the corresponding video dimensions
         * @param msg A #GstMessage
         */
        function play_message_parse_video_dimensions_changed(msg: Gst.Message): [number, number];
        /**
         * Parse the given `msg` and extract the corresponding audio volume
         * @param msg A #GstMessage
         */
        function play_message_parse_volume_changed(msg: Gst.Message): number;
        /**
         * Parse the given error `msg` and extract the corresponding #GError warning
         * @param msg A #GstMessage
         */
        function play_message_parse_warning(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];
        /**
         * Gets a string representing the given state.
         * @param state a #GstPlayState
         * @returns a string with the name of the state.
         */
        function play_state_get_name(state: PlayState): string;
        module Play {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                audio_video_offset: number;
                audioVideoOffset: number;
                current_audio_track: PlayAudioInfo;
                currentAudioTrack: PlayAudioInfo;
                current_subtitle_track: PlaySubtitleInfo;
                currentSubtitleTrack: PlaySubtitleInfo;
                current_video_track: PlayVideoInfo;
                currentVideoTrack: PlayVideoInfo;
                duration: number;
                media_info: PlayMediaInfo;
                mediaInfo: PlayMediaInfo;
                mute: boolean;
                pipeline: Gst.Element;
                position: number;
                rate: number;
                subtitle_video_offset: number;
                subtitleVideoOffset: number;
                suburi: string;
                uri: string;
                video_multiview_flags: GstVideo.VideoMultiviewFlags;
                videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
                video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
                videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
                video_renderer: PlayVideoRenderer;
                videoRenderer: PlayVideoRenderer;
                volume: number;
            }
        }

        /**
         * The goal of the GstPlay library is to ease the integration of multimedia
         * playback features in applications. Thus, if you need to build a media player
         * from the ground-up, GstPlay provides the features you will most likely need.
         *
         * An example player is available in gst-examples/playback/player/gst-play/.
         *
         * Internally the GstPlay makes use of the `playbin3` element. The legacy
         * `playbin2` can be selected if the `GST_PLAY_USE_PLAYBIN3=0` environment
         * variable has been set.
         *
         * **Important note**: If your application relies on the GstBus to get
         * notifications from GstPlay, you need to add some explicit clean-up code in
         * order to prevent the GstPlay object from leaking. See below for the details.
         * If you use the GstPlaySignalAdapter, no special clean-up is required.
         *
         * When the GstPlaySignalAdapter is not used, the GstBus owned by GstPlay should
         * be set to flushing state before any attempt to drop the last reference of the
         * GstPlay object. An example in C:
         *
         * ```c
         * ...
         * GstBus *bus = gst_play_get_message_bus (player);
         * gst_bus_set_flushing (bus, TRUE);
         * gst_object_unref (bus);
         * gst_object_unref (player);
         * ```
         *
         * The messages managed by the player contain a reference to itself, and if the
         * bus watch is just removed together with dropping the player then the bus will
         * simply keep them around forever (and the bus never goes away because the
         * player has a strong reference to it, so there's a reference cycle as long as
         * there are messages). Setting the bus to flushing state forces it to get rid
         * of its queued messages, thus breaking any possible reference cycle.
         */
        class Play extends Gst.Object {
            static $gtype: GObject.GType<Play>;

            // Properties

            get audio_video_offset(): number;
            set audio_video_offset(val: number);
            get audioVideoOffset(): number;
            set audioVideoOffset(val: number);
            get current_audio_track(): PlayAudioInfo;
            get currentAudioTrack(): PlayAudioInfo;
            get current_subtitle_track(): PlaySubtitleInfo;
            get currentSubtitleTrack(): PlaySubtitleInfo;
            get current_video_track(): PlayVideoInfo;
            get currentVideoTrack(): PlayVideoInfo;
            get duration(): number;
            get media_info(): PlayMediaInfo;
            get mediaInfo(): PlayMediaInfo;
            get mute(): boolean;
            set mute(val: boolean);
            get pipeline(): Gst.Element;
            get position(): number;
            get rate(): number;
            set rate(val: number);
            get subtitle_video_offset(): number;
            set subtitle_video_offset(val: number);
            get subtitleVideoOffset(): number;
            set subtitleVideoOffset(val: number);
            get suburi(): string;
            set suburi(val: string);
            get uri(): string;
            set uri(val: string);
            get video_multiview_flags(): GstVideo.VideoMultiviewFlags;
            set video_multiview_flags(val: GstVideo.VideoMultiviewFlags);
            get videoMultiviewFlags(): GstVideo.VideoMultiviewFlags;
            set videoMultiviewFlags(val: GstVideo.VideoMultiviewFlags);
            get video_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
            set video_multiview_mode(val: GstVideo.VideoMultiviewFramePacking);
            get videoMultiviewMode(): GstVideo.VideoMultiviewFramePacking;
            set videoMultiviewMode(val: GstVideo.VideoMultiviewFramePacking);
            get video_renderer(): PlayVideoRenderer;
            set video_renderer(val: PlayVideoRenderer);
            get videoRenderer(): PlayVideoRenderer;
            set videoRenderer(val: PlayVideoRenderer);
            get volume(): number;
            set volume(val: number);

            // Constructors

            constructor(properties?: Partial<Play.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](video_renderer?: PlayVideoRenderer | null): Play;

            // Static methods

            static config_get_pipeline_dump_in_error_details(config: Gst.Structure): boolean;
            static config_get_position_update_interval(config: Gst.Structure): number;
            static config_get_seek_accurate(config: Gst.Structure): boolean;
            /**
             * Return the user agent which has been configured using
             * gst_play_config_set_user_agent() if any.
             * @param config a #GstPlay configuration
             */
            static config_get_user_agent(config: Gst.Structure): string | null;
            /**
             * When enabled, the error message emitted by #GstPlay will include a pipeline
             * dump (in Graphviz DOT format) in the error details #GstStructure. The field
             * name is `pipeline-dump`.
             *
             * This option is disabled by default.
             * @param config a #GstPlay configuration
             * @param value Include pipeline dumps in error details, or not.
             */
            static config_set_pipeline_dump_in_error_details(config: Gst.Structure, value: boolean): void;
            /**
             * Set desired interval in milliseconds between two position-updated messages.
             * Pass 0 to stop updating the position.
             * @param config a #GstPlay configuration
             * @param interval interval in ms
             */
            static config_set_position_update_interval(config: Gst.Structure, interval: number): void;
            /**
             * Enable or disable accurate seeking. When enabled, elements will try harder
             * to seek as accurately as possible to the requested seek position. Generally
             * it will be slower especially for formats that don't have any indexes or
             * timestamp markers in the stream.
             *
             * If accurate seeking is disabled, elements will seek as close as the request
             * position without slowing down seeking too much.
             *
             * Accurate seeking is disabled by default.
             * @param config a #GstPlay configuration
             * @param accurate accurate seek or not
             */
            static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;
            /**
             * Set the user agent to pass to the server if `play` needs to connect
             * to a server during playback. This is typically used when playing HTTP
             * or RTSP streams.
             * @param config a #GstPlay configuration
             * @param agent the string to use as user agent
             */
            static config_set_user_agent(config: Gst.Structure, agent?: string | null): void;
            static get_audio_streams(info: PlayMediaInfo): PlayAudioInfo[];
            static get_subtitle_streams(info: PlayMediaInfo): PlaySubtitleInfo[];
            static get_video_streams(info: PlayMediaInfo): PlayVideoInfo[];
            static is_play_message(msg: Gst.Message): boolean;
            /**
             * Frees a %NULL terminated array of #GstPlayVisualization.
             * @param viss a %NULL terminated array of #GstPlayVisualization to free
             */
            static visualizations_free(viss: PlayVisualization): void;
            static visualizations_get(): PlayVisualization[];

            // Methods

            /**
             * Retrieve the current value of audio-video-offset property
             * @returns The current value of audio-video-offset in nanoseconds
             */
            get_audio_video_offset(): number;
            /**
             * Retrieve the current value of the indicated `type`.
             * @param type #GstPlayColorBalanceType
             * @returns The current value of @type, between [0,1]. In case of   error -1 is returned.
             */
            get_color_balance(type: PlayColorBalanceType): number;
            /**
             * Get a copy of the current configuration of the play. This configuration
             * can either be modified and used for the gst_play_set_config() call
             * or it must be freed after usage.
             * @returns a copy of the current configuration of @play. Use gst_structure_free() after usage or gst_play_set_config().
             */
            get_config(): Gst.Structure;
            /**
             * A Function to get current audio #GstPlayAudioInfo instance.
             * @returns current audio track. The caller should free it with g_object_unref()
             */
            get_current_audio_track(): PlayAudioInfo | null;
            /**
             * A Function to get current subtitle #GstPlaySubtitleInfo instance.
             * @returns current subtitle track. The caller should free it with g_object_unref()
             */
            get_current_subtitle_track(): PlaySubtitleInfo | null;
            /**
             * A Function to get current video #GstPlayVideoInfo instance.
             * @returns current video track. The caller should free it with g_object_unref()
             */
            get_current_video_track(): PlayVideoInfo | null;
            get_current_visualization(): string | null;
            /**
             * Retrieves the duration of the media stream that self represents.
             * @returns the duration of the currently-playing media stream, in nanoseconds.
             */
            get_duration(): Gst.ClockTime;
            /**
             * A Function to get the current media info #GstPlayMediaInfo instance.
             * @returns media info instance. The caller should free it with g_object_unref()
             */
            get_media_info(): PlayMediaInfo | null;
            /**
             * GstPlay API exposes a #GstBus instance which purpose is to provide data
             * structures representing play-internal events in form of #GstMessage<!-- -->s of
             * type GST_MESSAGE_APPLICATION.
             *
             * Each message carries a "play-message" field of type #GstPlayMessage.
             * Further fields of the message data are specific to each possible value of
             * that enumeration.
             *
             * Applications can consume the messages asynchronously within their own
             * event-loop / UI-thread etc. Note that in case the application does not
             * consume the messages, the bus will accumulate these internally and eventually
             * fill memory. To avoid that, the bus has to be set "flushing".
             * @returns The play message bus instance
             */
            get_message_bus(): Gst.Bus;
            /**
             * Retrieve the current value of the indicated `type`.
             * @returns The current value of @type, Default: 0x00000000 "none
             */
            get_multiview_flags(): GstVideo.VideoMultiviewFlags;
            /**
             * Retrieve the current value of the indicated `type`.
             * @returns The current value of @type, Default: -1 "none"
             */
            get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
            get_mute(): boolean;
            get_pipeline(): Gst.Element;
            get_position(): Gst.ClockTime;
            get_rate(): number;
            /**
             * Current subtitle URI
             * @returns URI of the current external subtitle.   g_free() after usage.
             */
            get_subtitle_uri(): string | null;
            /**
             * Retrieve the current value of subtitle-video-offset property
             * @returns The current value of subtitle-video-offset in nanoseconds
             */
            get_subtitle_video_offset(): number;
            /**
             * Gets the URI of the currently-playing stream.
             * @returns a string containing the URI of the currently-playing stream. g_free() after usage.
             */
            get_uri(): string | null;
            /**
             * Get a snapshot of the currently selected video stream, if any. The format can be
             * selected with `format` and optional configuration is possible with `config`.
             * Currently supported settings are:
             * - width, height of type G_TYPE_INT
             * - pixel-aspect-ratio of type GST_TYPE_FRACTION
             *  Except for GST_PLAY_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
             * @param format output format of the video snapshot
             * @param config Additional configuration
             * @returns Current video snapshot sample or %NULL on failure
             */
            get_video_snapshot(format: PlaySnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null;
            /**
             * Returns the current volume level, as a percentage between 0 and 1.
             * @returns the volume as percentage between 0 and 1.
             */
            get_volume(): number;
            /**
             * Checks whether the `play` has color balance support available.
             * @returns %TRUE if @play has color balance support. Otherwise,   %FALSE.
             */
            has_color_balance(): boolean;
            /**
             * Pauses the current stream.
             */
            pause(): void;
            /**
             * Request to play the loaded stream.
             */
            play(): void;
            /**
             * Seeks the currently-playing stream to the absolute `position` time
             * in nanoseconds.
             * @param position position to seek in nanoseconds
             */
            seek(position: Gst.ClockTime): void;
            set_audio_track(stream_index: number): boolean;
            /**
             * Enable or disable the current audio track.
             * @param enabled TRUE or FALSE
             */
            set_audio_track_enabled(enabled: boolean): void;
            /**
             * Sets audio-video-offset property by value of `offset`
             * @param offset #gint64 in nanoseconds
             */
            set_audio_video_offset(offset: number): void;
            /**
             * Sets the current value of the indicated channel `type` to the passed
             * value.
             * @param type #GstPlayColorBalanceType
             * @param value The new value for the @type, ranged [0,1]
             */
            set_color_balance(type: PlayColorBalanceType, value: number): void;
            /**
             * Set the configuration of the play. If the play is already configured, and
             * the configuration hasn't changed, this function will return %TRUE. If the
             * play is not in the GST_PLAY_STATE_STOPPED, this method will return %FALSE
             * and active configuration will remain.
             *
             * `config` is a #GstStructure that contains the configuration parameters for
             * the play.
             *
             * This function takes ownership of `config`.
             * @param config a #GstStructure
             * @returns %TRUE when the configuration could be set.
             */
            set_config(config: Gst.Structure): boolean;
            /**
             * Sets the current value of the indicated mode `type` to the passed
             * value.
             * @param flags The new value for the @type
             */
            set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void;
            /**
             * Sets the current value of the indicated mode `type` to the passed
             * value.
             * @param mode The new value for the @type
             */
            set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void;
            /**
             * %TRUE if the currently-playing stream should be muted.
             * @param val Mute state the should be set
             */
            set_mute(val: boolean): void;
            /**
             * Playback at specified rate
             * @param rate playback rate
             */
            set_rate(rate: number): void;
            set_subtitle_track(stream_index: number): boolean;
            /**
             * Enable or disable the current subtitle track.
             * @param enabled TRUE or FALSE
             */
            set_subtitle_track_enabled(enabled: boolean): void;
            /**
             * Sets the external subtitle URI. This should be combined with a call to
             * gst_play_set_subtitle_track_enabled(`play,` TRUE) so the subtitles are actually
             * rendered.
             * @param uri subtitle URI
             */
            set_subtitle_uri(uri?: string | null): void;
            /**
             * Sets subtitle-video-offset property by value of `offset`
             * @param offset #gint64 in nanoseconds
             */
            set_subtitle_video_offset(offset: number): void;
            /**
             * Sets the next URI to play.
             * @param uri next URI to play.
             */
            set_uri(uri?: string | null): void;
            set_video_track(stream_index: number): boolean;
            /**
             * Enable or disable the current video track.
             * @param enabled TRUE or FALSE
             */
            set_video_track_enabled(enabled: boolean): void;
            set_visualization(name?: string | null): boolean;
            /**
             * Enable or disable the visualization.
             * @param enabled TRUE or FALSE
             */
            set_visualization_enabled(enabled: boolean): void;
            /**
             * Sets the volume level of the stream as a percentage between 0 and 1.
             * @param val the new volume level, as a percentage between 0 and 1
             */
            set_volume(val: number): void;
            /**
             * Stops playing the current stream and resets to the first position
             * in the stream.
             */
            stop(): void;
        }

        module PlayAudioInfo {
            // Constructor properties interface

            interface ConstructorProps extends PlayStreamInfo.ConstructorProps {}
        }

        /**
         * #GstPlayStreamInfo specific to audio streams.
         */
        class PlayAudioInfo extends PlayStreamInfo {
            static $gtype: GObject.GType<PlayAudioInfo>;

            // Constructors

            constructor(properties?: Partial<PlayAudioInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_bitrate(): number;
            get_channels(): number;
            get_language(): string | null;
            get_max_bitrate(): number;
            get_sample_rate(): number;
        }

        module PlayMediaInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Structure containing the media information of a URI.
         */
        class PlayMediaInfo extends GObject.Object {
            static $gtype: GObject.GType<PlayMediaInfo>;

            // Constructors

            constructor(properties?: Partial<PlayMediaInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_audio_streams(): PlayAudioInfo[];
            get_container_format(): string | null;
            get_duration(): Gst.ClockTime;
            /**
             * Function to get the image (or preview-image) stored in taglist.
             * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
             * @returns GstSample or %NULL.
             */
            get_image_sample(): Gst.Sample | null;
            get_number_of_audio_streams(): number;
            get_number_of_streams(): number;
            get_number_of_subtitle_streams(): number;
            get_number_of_video_streams(): number;
            get_stream_list(): PlayStreamInfo[];
            get_subtitle_streams(): PlaySubtitleInfo[];
            get_tags(): Gst.TagList | null;
            get_title(): string | null;
            get_uri(): string;
            get_video_streams(): PlayVideoInfo[];
            is_live(): boolean;
            is_seekable(): boolean;
        }

        module PlaySignalAdapter {
            // Signal callback interfaces

            interface Buffering {
                (object: number): void;
            }

            interface DurationChanged {
                (object: number): void;
            }

            interface EndOfStream {
                (): void;
            }

            interface Error {
                (error: GLib.Error, details?: Gst.Structure | null): void;
            }

            interface MediaInfoUpdated {
                (object: PlayMediaInfo): void;
            }

            interface MuteChanged {
                (object: boolean): void;
            }

            interface PositionUpdated {
                (object: number): void;
            }

            interface SeekDone {
                (object: number): void;
            }

            interface StateChanged {
                (object: PlayState): void;
            }

            interface UriLoaded {
                (object: string): void;
            }

            interface VideoDimensionsChanged {
                (object: number, p0: number): void;
            }

            interface VolumeChanged {
                (object: number): void;
            }

            interface Warning {
                (error: GLib.Error, details?: Gst.Structure | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                play: Play;
            }
        }

        class PlaySignalAdapter extends GObject.Object {
            static $gtype: GObject.GType<PlaySignalAdapter>;

            // Properties

            get play(): Play;

            // Constructors

            constructor(properties?: Partial<PlaySignalAdapter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](play: Play): PlaySignalAdapter;

            static new_sync_emit(play: Play): PlaySignalAdapter;

            static new_with_main_context(play: Play, context: GLib.MainContext): PlaySignalAdapter;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'buffering', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'buffering', callback: (_source: this, object: number) => void): number;
            emit(signal: 'buffering', object: number): void;
            connect(signal: 'duration-changed', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'duration-changed', callback: (_source: this, object: number) => void): number;
            emit(signal: 'duration-changed', object: number): void;
            connect(signal: 'end-of-stream', callback: (_source: this) => void): number;
            connect_after(signal: 'end-of-stream', callback: (_source: this) => void): number;
            emit(signal: 'end-of-stream'): void;
            connect(
                signal: 'error',
                callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void,
            ): number;
            connect_after(
                signal: 'error',
                callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void,
            ): number;
            emit(signal: 'error', error: GLib.Error, details?: Gst.Structure | null): void;
            connect(signal: 'media-info-updated', callback: (_source: this, object: PlayMediaInfo) => void): number;
            connect_after(
                signal: 'media-info-updated',
                callback: (_source: this, object: PlayMediaInfo) => void,
            ): number;
            emit(signal: 'media-info-updated', object: PlayMediaInfo): void;
            connect(signal: 'mute-changed', callback: (_source: this, object: boolean) => void): number;
            connect_after(signal: 'mute-changed', callback: (_source: this, object: boolean) => void): number;
            emit(signal: 'mute-changed', object: boolean): void;
            connect(signal: 'position-updated', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'position-updated', callback: (_source: this, object: number) => void): number;
            emit(signal: 'position-updated', object: number): void;
            connect(signal: 'seek-done', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'seek-done', callback: (_source: this, object: number) => void): number;
            emit(signal: 'seek-done', object: number): void;
            connect(signal: 'state-changed', callback: (_source: this, object: PlayState) => void): number;
            connect_after(signal: 'state-changed', callback: (_source: this, object: PlayState) => void): number;
            emit(signal: 'state-changed', object: PlayState): void;
            connect(signal: 'uri-loaded', callback: (_source: this, object: string) => void): number;
            connect_after(signal: 'uri-loaded', callback: (_source: this, object: string) => void): number;
            emit(signal: 'uri-loaded', object: string): void;
            connect(
                signal: 'video-dimensions-changed',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            connect_after(
                signal: 'video-dimensions-changed',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            emit(signal: 'video-dimensions-changed', object: number, p0: number): void;
            connect(signal: 'volume-changed', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'volume-changed', callback: (_source: this, object: number) => void): number;
            emit(signal: 'volume-changed', object: number): void;
            connect(
                signal: 'warning',
                callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void,
            ): number;
            connect_after(
                signal: 'warning',
                callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void,
            ): number;
            emit(signal: 'warning', error: GLib.Error, details?: Gst.Structure | null): void;

            // Methods

            get_play(): Play;
        }

        module PlayStreamInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Base structure for information concerning a media stream. Depending on
         * the stream type, one can find more media-specific information in
         * #GstPlayVideoInfo, #GstPlayAudioInfo, #GstPlaySubtitleInfo.
         */
        abstract class PlayStreamInfo extends GObject.Object {
            static $gtype: GObject.GType<PlayStreamInfo>;

            // Constructors

            constructor(properties?: Partial<PlayStreamInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_caps(): Gst.Caps | null;
            /**
             * A string describing codec used in #GstPlayStreamInfo.
             * @returns codec string or %NULL on unknown.
             */
            get_codec(): string | null;
            /**
             * Function to get stream index from #GstPlayStreamInfo instance or -1 if
             * unknown.
             * @returns the stream index of this stream.
             */
            get_index(): number;
            /**
             * Function to return human readable name for the stream type
             * of the given `info` (ex: "audio", "video", "subtitle")
             * @returns a human readable name
             */
            get_stream_type(): string;
            get_tags(): Gst.TagList | null;
        }

        module PlaySubtitleInfo {
            // Constructor properties interface

            interface ConstructorProps extends PlayStreamInfo.ConstructorProps {}
        }

        /**
         * #GstPlayStreamInfo specific to subtitle streams.
         */
        class PlaySubtitleInfo extends PlayStreamInfo {
            static $gtype: GObject.GType<PlaySubtitleInfo>;

            // Constructors

            constructor(properties?: Partial<PlaySubtitleInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_language(): string | null;
        }

        module PlayVideoInfo {
            // Constructor properties interface

            interface ConstructorProps extends PlayStreamInfo.ConstructorProps {}
        }

        /**
         * #GstPlayStreamInfo specific to video streams.
         */
        class PlayVideoInfo extends PlayStreamInfo {
            static $gtype: GObject.GType<PlayVideoInfo>;

            // Constructors

            constructor(properties?: Partial<PlayVideoInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_bitrate(): number;
            get_framerate(): [number, number];
            get_height(): number;
            get_max_bitrate(): number;
            /**
             * Returns the pixel aspect ratio in `par_n` and `par_d`
             */
            get_pixel_aspect_ratio(): [number, number];
            get_width(): number;
        }

        module PlayVideoOverlayVideoRenderer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, PlayVideoRenderer.ConstructorProps {
                video_sink: Gst.Element;
                videoSink: Gst.Element;
                window_handle: any;
                windowHandle: any;
            }
        }

        class PlayVideoOverlayVideoRenderer extends GObject.Object implements PlayVideoRenderer {
            static $gtype: GObject.GType<PlayVideoOverlayVideoRenderer>;

            // Properties

            get video_sink(): Gst.Element;
            set video_sink(val: Gst.Element);
            get videoSink(): Gst.Element;
            set videoSink(val: Gst.Element);
            get window_handle(): any;
            set window_handle(val: any);
            get windowHandle(): any;
            set windowHandle(val: any);

            // Constructors

            constructor(properties?: Partial<PlayVideoOverlayVideoRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static ['new'](window_handle?: any | null): PlayVideoRenderer;
            static new_with_sink(window_handle: any | null, video_sink: Gst.Element): PlayVideoRenderer;

            // Methods

            /**
             * Tell an overlay that it has been exposed. This will redraw the current frame
             * in the drawable even if the pipeline is PAUSED.
             */
            expose(): void;
            /**
             * Return the currently configured render rectangle. See gst_play_video_overlay_video_renderer_set_render_rectangle()
             * for details.
             */
            get_render_rectangle(): [number, number, number, number];
            get_window_handle(): any | null;
            /**
             * Configure a subregion as a video target within the window set by
             * gst_play_video_overlay_video_renderer_set_window_handle(). If this is not
             * used or not supported the video will fill the area of the window set as the
             * overlay to 100%. By specifying the rectangle, the video can be overlaid to
             * a specific region of that window only. After setting the new rectangle one
             * should call gst_play_video_overlay_video_renderer_expose() to force a
             * redraw. To unset the region pass -1 for the `width` and `height` parameters.
             *
             * This method is needed for non fullscreen video overlay in UI toolkits that
             * do not support subwindows.
             * @param x the horizontal offset of the render area inside the window
             * @param y the vertical offset of the render area inside the window
             * @param width the width of the render area inside the window
             * @param height the height of the render area inside the window
             */
            set_render_rectangle(x: number, y: number, width: number, height: number): void;
            /**
             * Sets the platform specific window handle into which the video
             * should be rendered
             * @param window_handle handle referencing to the platform specific window
             */
            set_window_handle(window_handle?: any | null): void;

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

        type PlayAudioInfoClass = typeof PlayAudioInfo;
        type PlayClass = typeof Play;
        type PlayMediaInfoClass = typeof PlayMediaInfo;
        type PlaySignalAdapterClass = typeof PlaySignalAdapter;
        type PlayStreamInfoClass = typeof PlayStreamInfo;
        type PlaySubtitleInfoClass = typeof PlaySubtitleInfo;
        type PlayVideoInfoClass = typeof PlayVideoInfo;
        type PlayVideoOverlayVideoRendererClass = typeof PlayVideoOverlayVideoRenderer;
        type PlayVideoRendererInterface = typeof PlayVideoRenderer;
        /**
         * A #GstPlayVisualization descriptor.
         */
        class PlayVisualization {
            static $gtype: GObject.GType<PlayVisualization>;

            // Fields

            name: string;
            description: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                    description: string;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Makes a copy of the #GstPlayVisualization. The result must be
             * freed using gst_play_visualization_free().
             * @returns an allocated copy of @vis.
             */
            copy(): PlayVisualization;
            /**
             * Frees a #GstPlayVisualization.
             */
            free(): void;
        }

        module PlayVideoRenderer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface PlayVideoRendererNamespace {
            $gtype: GObject.GType<PlayVideoRenderer>;
            prototype: PlayVideoRenderer;
        }
        interface PlayVideoRenderer extends GObject.Object {}

        export const PlayVideoRenderer: PlayVideoRendererNamespace;

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

    export default GstPlay;
}

declare module 'gi://GstPlay' {
    import GstPlay10 from 'gi://GstPlay?version=1.0';
    export default GstPlay10;
}
// END
