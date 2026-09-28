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

declare module 'gi://GstMse?version=1.0' {
    // Module dependencies
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstMse {
        /**
         * GstMse-1.0
         */

        /**
         * Reasons for ending a #GstMediaSource using gst_media_source_end_of_stream().
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-endofstreamerror)
         */

        /**
         * Reasons for ending a #GstMediaSource using gst_media_source_end_of_stream().
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-endofstreamerror)
         */
        export namespace MediaSourceEOSError {
            export const $gtype: GObject.GType<MediaSourceEOSError>;
        }

        enum MediaSourceEOSError {
            /**
             * End the stream successfully
             */
            NONE,
            /**
             * End the stream due to a networking error
             */
            NETWORK,
            /**
             * End the stream due to a decoding error
             */
            DECODE,
        }
        /**
         * Any error that can occur within #GstMediaSource or #GstSourceBuffer APIs.
         * These values correspond directly to those in the Web IDL specification.
         *
         * [Specification](https://webidl.spec.whatwg.org/#idl-DOMException-error-names)
         */
        class MediaSourceError extends GLib.Error {
            static $gtype: GObject.GType<MediaSourceError>;

            // Static fields

            static INVALID_STATE: number;
            static TYPE: number;
            static NOT_SUPPORTED: number;
            static NOT_FOUND: number;
            static QUOTA_EXCEEDED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Any error type that can be reported by the Media Source API.
             */
            static quark(): GLib.Quark;
        }

        /**
         * Describes the possible states of the Media Source.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-readystate)
         */

        /**
         * Describes the possible states of the Media Source.
         *
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-readystate)
         */
        export namespace MediaSourceReadyState {
            export const $gtype: GObject.GType<MediaSourceReadyState>;
        }

        enum MediaSourceReadyState {
            /**
             * The #GstMediaSource is not connected to
             * any playback element.
             */
            CLOSED,
            /**
             * The #GstMediaSource is connected to a
             * playback element and ready to append data to its #GstSourceBuffer (s).
             */
            OPEN,
            /**
             * gst_media_source_end_of_stream() has
             * been called on the current #GstMediaSource
             */
            ENDED,
        }
        /**
         * Describes how much information a #GstMseSrc has about the media it is playing
         * back at the current playback #GstMseSrc:position. This type corresponds
         * directly to the ready state of a HTML Media Element and is a separate concept
         * from #GstMediaSourceReadyState.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
         */

        /**
         * Describes how much information a #GstMseSrc has about the media it is playing
         * back at the current playback #GstMseSrc:position. This type corresponds
         * directly to the ready state of a HTML Media Element and is a separate concept
         * from #GstMediaSourceReadyState.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
         */
        export namespace MseSrcReadyState {
            export const $gtype: GObject.GType<MseSrcReadyState>;
        }

        enum MseSrcReadyState {
            /**
             * No information is available about the
             * stream
             */
            NOTHING,
            /**
             * The duration is available and video
             * dimensions are available if the stream contains video
             */
            METADATA,
            /**
             * The current playback position can
             * be presented but future information is not available
             */
            CURRENT_DATA,
            /**
             * There is data for the current
             * position and some amount in the future and any text tracks are ready.
             */
            FUTURE_DATA,
            /**
             * Either there is enough data to
             * play the stream through at the current playback and input rate or the input
             * buffer is full.
             */
            ENOUGH_DATA,
        }
        /**
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-appendmode)
         */

        /**
         * [Specification](https://www.w3.org/TR/media-source-2/#dom-appendmode)
         */
        export namespace SourceBufferAppendMode {
            export const $gtype: GObject.GType<SourceBufferAppendMode>;
        }

        enum SourceBufferAppendMode {
            SEGMENTS,
            SEQUENCE,
        }
        /**
         * Any error type that can be reported by the Media Source API.
         */
        function media_source_error_quark(): GLib.Quark;
        module MediaSource {
            // Signal callback interfaces

            interface OnSourceClose {
                (): void;
            }

            interface OnSourceEnded {
                (): void;
            }

            interface OnSourceOpen {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                active_source_buffers: SourceBufferList;
                activeSourceBuffers: SourceBufferList;
                duration: number;
                position: number;
                ready_state: MediaSourceReadyState;
                readyState: MediaSourceReadyState;
                source_buffers: SourceBufferList;
                sourceBuffers: SourceBufferList;
            }
        }

        /**
         * #GstMediaSource is the entry point into the W3C Media Source API. It offers
         * functionality similar to #GstAppSrc for client-side web or JavaScript
         * applications decoupling the source of media from its processing and playback.
         *
         * To interact with a Media Source, connect it to a #GstMseSrc that is in some
         * #GstPipeline using gst_media_source_attach(). Then create at least one
         * #GstSourceBuffer using gst_media_source_add_source_buffer(). Finally, feed
         * some media data to the Source Buffer(s) using
         * gst_source_buffer_append_buffer() and play the pipeline.
         */
        class MediaSource extends Gst.Object {
            static $gtype: GObject.GType<MediaSource>;

            // Properties

            /**
             * A #GstSourceBufferList of every #GstSourceBuffer in this Media Source that
             * is considered active
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-activesourcebuffers)
             */
            get active_source_buffers(): SourceBufferList;
            /**
             * A #GstSourceBufferList of every #GstSourceBuffer in this Media Source that
             * is considered active
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-activesourcebuffers)
             */
            get activeSourceBuffers(): SourceBufferList;
            /**
             * The Duration of the Media Source as a #GstClockTime
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-duration)
             */
            get duration(): number;
            set duration(val: number);
            /**
             * The position of the player consuming from the Media Source
             */
            get position(): number;
            set position(val: number);
            /**
             * The Ready State of the Media Source
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
             */
            get ready_state(): MediaSourceReadyState;
            /**
             * The Ready State of the Media Source
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
             */
            get readyState(): MediaSourceReadyState;
            /**
             * A #GstSourceBufferList of every #GstSourceBuffer in this Media Source
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
             */
            get source_buffers(): SourceBufferList;
            /**
             * A #GstSourceBufferList of every #GstSourceBuffer in this Media Source
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
             */
            get sourceBuffers(): SourceBufferList;

            // Constructors

            constructor(properties?: Partial<MediaSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MediaSource;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'on-source-close', callback: (_source: this) => void): number;
            connect_after(signal: 'on-source-close', callback: (_source: this) => void): number;
            emit(signal: 'on-source-close'): void;
            connect(signal: 'on-source-ended', callback: (_source: this) => void): number;
            connect_after(signal: 'on-source-ended', callback: (_source: this) => void): number;
            emit(signal: 'on-source-ended'): void;
            connect(signal: 'on-source-open', callback: (_source: this) => void): number;
            connect_after(signal: 'on-source-open', callback: (_source: this) => void): number;
            emit(signal: 'on-source-open'): void;

            // Static methods

            /**
             * Determines whether the current Media Source configuration can process media
             * of the supplied `type`.
             * @param type A MIME type value
             */
            static is_type_supported(type: string): boolean;

            // Methods

            /**
             * Add a #GstSourceBuffer to this #GstMediaSource of the specified media type.
             * The Media Source must be in the #GstMediaSourceReadyState %GST_MEDIA_SOURCE_READY_STATE_OPEN.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-addsourcebuffer)
             * @param type A MIME type describing the format of the incoming media
             * @returns a new #GstSourceBuffer instance on success, otherwise `NULL`
             */
            add_source_buffer(type: string): SourceBuffer;
            /**
             * Associates `self` with `element`.
             * Normally, the Element will be part of a #GstPipeline that plays back the data
             * submitted to the Media Source's Source Buffers.
             *
             * #GstMseSrc is a special source element that is designed to consume media from
             * a #GstMediaSource.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dfn-attaching-to-a-media-element)
             * @param element #GstMseSrc source Element
             */
            attach(element: MseSrc): void;
            /**
             * Clear the live seekable range for `self`. This will inform the component
             * playing this Media Source that there is no seekable time range.
             *
             * If the ready state is not %GST_MEDIA_SOURCE_READY_STATE_OPEN, it will fail
             * and set an error.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-clearliveseekablerange)
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            clear_live_seekable_range(): boolean;
            /**
             * Detaches `self` from any #GstMseSrc element that it may be associated with.
             */
            detach(): void;
            /**
             * Mark `self` as reaching the end of stream, disallowing new data inputs.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-endofstream)
             * @param eos_error The error type, if any
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            end_of_stream(eos_error: MediaSourceEOSError): boolean;
            /**
             * Gets a #GstSourceBufferList containing all the Source Buffers currently
             * associated with this Media Source that are considered "active."
             * For a Source Buffer to be considered active, either its video track is
             * selected, its audio track is enabled, or its text track is visible or hidden.
             * This object will reflect any future changes to the parent Media Source as
             * well.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-activesourcebuffers)
             * @returns a new #GstSourceBufferList instance
             */
            get_active_source_buffers(): SourceBufferList;
            /**
             * Gets the current duration of `self`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-duration)
             * @returns the current duration as a #GstClockTime
             */
            get_duration(): Gst.ClockTime;
            /**
             * Get the live seekable range of `self`. Will fill in the supplied `range` with
             * the current live seekable range.
             */
            get_live_seekable_range(): MediaSourceRange;
            /**
             * Gets the current playback position of the Media Source.
             * @returns the current playback position as a #GstClockTime
             */
            get_position(): Gst.ClockTime;
            /**
             * Gets the current Ready State of the Media Source.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-readystate)
             * @returns the current #GstMediaSourceReadyState value
             */
            get_ready_state(): MediaSourceReadyState;
            /**
             * Gets a #GstSourceBufferList containing all the Source Buffers currently
             * associated with this Media Source. This object will reflect any future
             * changes to the parent Media Source as well.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-sourcebuffers)
             * @returns a #GstSourceBufferList instance
             */
            get_source_buffers(): SourceBufferList;
            /**
             * Remove `buffer` from `self`.
             *
             * `buffer` must have been created as a child of `self` and `self` must be in the
             * #GstMediaSourceReadyState %GST_MEDIA_SOURCE_READY_STATE_OPEN.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-removesourcebuffer)
             * @param buffer #GstSourceBuffer instance
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            remove_source_buffer(buffer: SourceBuffer): boolean;
            /**
             * Sets the duration of `self`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-duration)
             * @param duration The new duration to apply to @self.
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            set_duration(duration: Gst.ClockTime): boolean;
            /**
             * Set the live seekable range for `self`. This range informs the component
             * playing this Media Source what it can allow the user to seek through.
             *
             * If the ready state is not %GST_MEDIA_SOURCE_READY_STATE_OPEN, or the supplied
             * `start` time is later than `end` it will fail and set an error.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-mediasource-setliveseekablerange)
             * @param start The earliest point in the stream considered seekable
             * @param end The latest point in the stream considered seekable
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            set_live_seekable_range(start: Gst.ClockTime, end: Gst.ClockTime): boolean;
        }

        module MseSrc {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.URIHandler.ConstructorProps {
                duration: number;
                n_audio: number;
                nAudio: number;
                n_text: number;
                nText: number;
                n_video: number;
                nVideo: number;
                position: number;
                ready_state: MseSrcReadyState;
                readyState: MseSrcReadyState;
            }
        }

        /**
         * #GstMseSrc is a source Element that interacts with a #GstMediaSource to
         * consume #GstSample<!-- -->s processed by the Media Source and supplies them
         * to the containing #GstPipeline. In the perspective of the Media Source API,
         * this element fulfills the basis of the Media Element's role relating to
         * working with a Media Source. The remaining responsibilities are meant to be
         * fulfilled by the application and #GstPlay can be used to satisfy many of
         * them.
         *
         * Once added to a Pipeline, this element should be attached to a Media Source
         * using gst_media_source_attach().
         */
        class MseSrc extends Gst.Element implements Gst.URIHandler {
            static $gtype: GObject.GType<MseSrc>;

            // Properties

            /**
             * The duration of the stream as a #GstClockTime
             *
             * [Specification](https://html.spec.whatwg.org/multipage/media.html#dom-media-duration)
             */
            get duration(): number;
            set duration(val: number);
            /**
             * The number of audio tracks in the Media Source
             */
            get n_audio(): number;
            /**
             * The number of audio tracks in the Media Source
             */
            get nAudio(): number;
            /**
             * The number of text tracks in the Media Source
             */
            get n_text(): number;
            /**
             * The number of text tracks in the Media Source
             */
            get nText(): number;
            /**
             * The number of video tracks in the Media Source
             */
            get n_video(): number;
            /**
             * The number of video tracks in the Media Source
             */
            get nVideo(): number;
            /**
             * The playback position as a #GstClockTime
             *
             * [Specification](https://html.spec.whatwg.org/multipage/media.html#current-playback-position)
             */
            get position(): number;
            /**
             * The Ready State of this element, describing to what level it can supply
             * content for the current #GstMseSrc:position. This is a separate concept
             * from #GstMediaSource:ready-state: and corresponds to the HTML Media
             * Element's Ready State.
             *
             * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
             */
            get ready_state(): MseSrcReadyState;
            /**
             * The Ready State of this element, describing to what level it can supply
             * content for the current #GstMseSrc:position. This is a separate concept
             * from #GstMediaSource:ready-state: and corresponds to the HTML Media
             * Element's Ready State.
             *
             * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
             */
            get readyState(): MseSrcReadyState;

            // Constructors

            constructor(properties?: Partial<MseSrc.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the duration of `self`.
             *
             * [Specification](https://html.spec.whatwg.org/multipage/media.html#dom-media-duration)
             * @returns The duration of this stream as a #GstClockTime
             */
            get_duration(): Gst.ClockTime;
            get_n_audio(): number;
            get_n_text(): number;
            get_n_video(): number;
            /**
             * Gets the current playback position of `self`.
             *
             * [Specification](https://html.spec.whatwg.org/multipage/media.html#current-playback-position)
             * @returns The playback position of this Element as a #GstClockTime
             */
            get_position(): Gst.ClockTime;
            /**
             * The Ready State of `self,` describing to what level it can supply content for
             * the current #GstMseSrc:position. This is a separate concept from
             * #GstMediaSource:ready-state: and corresponds to the HTML Media Element's
             * Ready State.
             *
             * [Specification](https://html.spec.whatwg.org/multipage/media.html#ready-states)
             * @returns the current #GstMseSrcReadyState
             */
            get_ready_state(): MseSrcReadyState;

            // Inherited methods
            /**
             * Gets the list of protocols supported by `handler`. This list may not be
             * modified.
             * @returns the     supported protocols.  Returns %NULL if the @handler isn't     implemented properly, or the @handler doesn't support any     protocols.
             */
            get_protocols(): string[] | null;
            /**
             * Gets the currently handled URI.
             * @returns the URI currently handled by   the @handler.  Returns %NULL if there are no URI currently   handled. The returned string must be freed with g_free() when no   longer needed.
             */
            get_uri(): string | null;
            /**
             * Gets the type of the given URI handler
             * @returns the #GstURIType of the URI handler. Returns #GST_URI_UNKNOWN if the @handler isn't implemented correctly.
             */
            get_uri_type(): Gst.URIType;
            /**
             * Tries to set the URI of the given handler.
             * @param uri URI to set
             * @returns %TRUE if the URI was set successfully, else %FALSE.
             */
            set_uri(uri: string): boolean;
            /**
             * Gets the currently handled URI.
             */
            vfunc_get_uri(): string | null;
            /**
             * Tries to set the URI of the given handler.
             * @param uri URI to set
             */
            vfunc_set_uri(uri: string): boolean;
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
            // Conflicted with Gst.Object.ref
            ref(...args: never[]): any;
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

        module MseSrcPad {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Pad.ConstructorProps {}
        }

        class MseSrcPad extends Gst.Pad {
            static $gtype: GObject.GType<MseSrcPad>;

            // Constructors

            constructor(properties?: Partial<MseSrcPad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module SourceBuffer {
            // Signal callback interfaces

            interface OnAbort {
                (): void;
            }

            interface OnError {
                (): void;
            }

            interface OnUpdate {
                (): void;
            }

            interface OnUpdateEnd {
                (): void;
            }

            interface OnUpdateStart {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                append_mode: SourceBufferAppendMode;
                appendMode: SourceBufferAppendMode;
                append_window_end: number;
                appendWindowEnd: number;
                append_window_start: number;
                appendWindowStart: number;
                buffered: any[];
                content_type: string;
                contentType: string;
                timestamp_offset: number;
                timestampOffset: number;
                updating: boolean;
            }
        }

        /**
         * The Source Buffer is the primary means of data flow between an application
         * and the Media Source API. It represents a single timeline of media,
         * containing some combination of audio, video, and text tracks.
         * An application is responsible for feeding raw data into the Source Buffer
         * using gst_source_buffer_append_buffer() and the Source Buffer will
         * asynchronously process the data into tracks of time-coded multimedia samples.
         *
         * The application as well as the associated playback component can then select
         * to play media from any subset of tracks across all Source Buffers of a Media
         * Source.
         *
         * A few control points are also provided to customize the behavior.
         *
         *  - #GstSourceBuffer:append-mode controls how timestamps of processed samples are
         *  interpreted. They are either inserted in the timeline directly where the
         *  decoded media states they should, or inserted directly after the previously
         *  encountered sample.
         *
         *  - #GstSourceBuffer:append-window-start / #GstSourceBuffer:append-window-end
         *  control the planned time window where media from appended data can be added
         *  to the current timeline. Any samples outside that range may be ignored.
         *
         *  - #GstSourceBuffer:timestamp-offset is added to the start time of any sample
         *  processed.
         */
        class SourceBuffer extends Gst.Object {
            static $gtype: GObject.GType<SourceBuffer>;

            // Properties

            /**
             * Affects how timestamps of processed media segments are interpreted.
             * In %GST_SOURCE_BUFFER_APPEND_MODE_SEGMENTS, the start timestamp of a
             * processed media segment is used directly along with
             * #GstSourceBuffer:timestamp-offset .
             * In %GST_SOURCE_BUFFER_APPEND_MODE_SEQUENCE, the timestamp of a
             * processed media segment is ignored and replaced with the end time of the
             * most recently appended segment.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
             */
            get append_mode(): SourceBufferAppendMode;
            set append_mode(val: SourceBufferAppendMode);
            /**
             * Affects how timestamps of processed media segments are interpreted.
             * In %GST_SOURCE_BUFFER_APPEND_MODE_SEGMENTS, the start timestamp of a
             * processed media segment is used directly along with
             * #GstSourceBuffer:timestamp-offset .
             * In %GST_SOURCE_BUFFER_APPEND_MODE_SEQUENCE, the timestamp of a
             * processed media segment is ignored and replaced with the end time of the
             * most recently appended segment.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
             */
            get appendMode(): SourceBufferAppendMode;
            set appendMode(val: SourceBufferAppendMode);
            /**
             * Any segments processed which have a start time greater than this value will
             * be ignored by this Source Buffer.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
             */
            get append_window_end(): number;
            /**
             * Any segments processed which have a start time greater than this value will
             * be ignored by this Source Buffer.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
             */
            get appendWindowEnd(): number;
            /**
             * Any segments processed which end before this value will be ignored by this
             * Source Buffer.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
             */
            get append_window_start(): number;
            /**
             * Any segments processed which end before this value will be ignored by this
             * Source Buffer.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
             */
            get appendWindowStart(): number;
            /**
             * The set of Time Intervals that have been loaded into the current Source
             * Buffer
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-buffered)
             */
            get buffered(): any[];
            /**
             * The MIME content-type of the data stream
             */
            get content_type(): string;
            set content_type(val: string);
            /**
             * The MIME content-type of the data stream
             */
            get contentType(): string;
            set contentType(val: string);
            /**
             * The next media segment appended to the current Source Buffer will have its
             * start timestamp increased by this amount.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
             */
            get timestamp_offset(): number;
            set timestamp_offset(val: number);
            /**
             * The next media segment appended to the current Source Buffer will have its
             * start timestamp increased by this amount.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
             */
            get timestampOffset(): number;
            set timestampOffset(val: number);
            /**
             * Whether the current source buffer is still asynchronously processing
             * previously issued commands.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-updating)
             */
            get updating(): boolean;

            // Constructors

            constructor(properties?: Partial<SourceBuffer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'on-abort', callback: (_source: this) => void): number;
            connect_after(signal: 'on-abort', callback: (_source: this) => void): number;
            emit(signal: 'on-abort'): void;
            connect(signal: 'on-error', callback: (_source: this) => void): number;
            connect_after(signal: 'on-error', callback: (_source: this) => void): number;
            emit(signal: 'on-error'): void;
            connect(signal: 'on-update', callback: (_source: this) => void): number;
            connect_after(signal: 'on-update', callback: (_source: this) => void): number;
            emit(signal: 'on-update'): void;
            connect(signal: 'on-update-end', callback: (_source: this) => void): number;
            connect_after(signal: 'on-update-end', callback: (_source: this) => void): number;
            emit(signal: 'on-update-end'): void;
            connect(signal: 'on-update-start', callback: (_source: this) => void): number;
            connect_after(signal: 'on-update-start', callback: (_source: this) => void): number;
            emit(signal: 'on-update-start'): void;

            // Methods

            /**
             * Attempts to end any processing of the currently pending data and reset the
             * media parser.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-abort)
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            abort(): boolean;
            /**
             * Schedules the bytes inside `buf` to be processed by `self`. When it is possible
             * to accept the supplied data, it will be processed asynchronously and fill in
             * the track buffers for playback purposes.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendbuffer)
             * @param buf The media data to append
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            append_buffer(buf: Gst.Buffer): boolean;
            /**
             * Attempts to change the content type of `self` to `type`. Any new data appended
             * to the Source Buffer must be of the supplied `type` afterward.
             * @param type the desired content type
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            change_content_type(type: string): boolean;
            /**
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
             * @returns The current #GstSourceBufferAppendMode
             */
            get_append_mode(): SourceBufferAppendMode;
            /**
             * Returns the current append window end time. Any segment processed that starts
             * after this value will be ignored.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
             * @returns The current Append Window end time as a #GstClockTime
             */
            get_append_window_end(): Gst.ClockTime;
            /**
             * Returns the current append window start time. Any segment processed that ends
             * earlier than this value will be ignored.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
             * @returns The current Append Window start time as a #GstClockTime
             */
            get_append_window_start(): Gst.ClockTime;
            /**
             * Returns a sequence of #GstMediaSourceRange values representing which segments
             * of `self` are buffered in memory.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-buffered)
             * @returns a #GArray of #GstMediaSourceRange values.
             */
            get_buffered(): MediaSourceRange[];
            /**
             * Returns the current content type of `self`.
             * @returns a string representing the content type
             */
            get_content_type(): string;
            /**
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
             * @returns The current timestamp offset as a #GstClockTime
             */
            get_timestamp_offset(): Gst.ClockTime;
            /**
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-updating)
             * @returns Whether @self is currently adding or removing media content.
             */
            get_updating(): boolean;
            /**
             * Attempts to remove any parsed data between `start` and `end` from `self`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-remove)
             * @param start The beginning timestamp of data to remove
             * @param end The end timestamp of data to remove
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            remove(start: Gst.ClockTime, end: Gst.ClockTime): boolean;
            /**
             * Changes the Append Mode of `self`. This influences what timestamps will be
             * assigned to media processed by this Source Buffer. In Segment mode, the
             * timestamps in each segment determine the position of each sample after it
             * is processed. In Sequence mode, the timestamp of each processed sample is
             * generated based on the end of the most recently processed segment.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-mode)
             * @param mode #GstSourceBufferAppendMode the desired Append Mode
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            set_append_mode(mode: SourceBufferAppendMode): boolean;
            /**
             * Modifies the current append window end of `self`. If successful, samples
             * processed after setting this value that start after this point will be
             * ignored.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowend)
             * @param end the append window end
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            set_append_window_end(end: Gst.ClockTime): boolean;
            /**
             * Modifies the current append window start of `self`. If successful, samples
             * processed after setting this value that end before this point will be
             * ignored.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-appendwindowstart)
             * @param start the append window end
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            set_append_window_start(start: Gst.ClockTime): boolean;
            /**
             * Attempt to set the timestamp offset of `self`. Any media processed after this
             * value is set will have this value added to its start time.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebuffer-timestampoffset)
             * @param offset The new timestamp offset
             * @returns `TRUE` on success, `FALSE` otherwise
             */
            set_timestamp_offset(offset: Gst.ClockTime): boolean;
        }

        module SourceBufferList {
            // Signal callback interfaces

            interface OnSourcebufferAdded {
                (): void;
            }

            interface OnSourcebufferRemoved {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                length: number;
            }
        }

        /**
         * The Source Buffer List is a list of #GstSourceBuffer<!-- -->s that can be
         * indexed numerically and monitored for changes. The list itself cannot be
         * modified through this interface, though the Source Buffers it holds can be
         * modified after retrieval.
         *
         * It is used by #GstMediaSource to provide direct access to its child
         * #GstSourceBuffer<!-- -->s through #GstMediaSource:source-buffers as well as
         * informing clients which of the Source Buffers are active through
         * #GstMediaSource:active-source-buffers.
         */
        class SourceBufferList extends Gst.Object {
            static $gtype: GObject.GType<SourceBufferList>;

            // Properties

            /**
             * The number of #GstSourceBuffer<!-- -->s contained by this structure
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebufferlist-length)
             */
            get length(): number;

            // Constructors

            constructor(properties?: Partial<SourceBufferList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'on-sourcebuffer-added', callback: (_source: this) => void): number;
            connect_after(signal: 'on-sourcebuffer-added', callback: (_source: this) => void): number;
            emit(signal: 'on-sourcebuffer-added'): void;
            connect(signal: 'on-sourcebuffer-removed', callback: (_source: this) => void): number;
            connect_after(signal: 'on-sourcebuffer-removed', callback: (_source: this) => void): number;
            emit(signal: 'on-sourcebuffer-removed'): void;

            // Methods

            /**
             * [Specification](https://www.w3.org/TR/media-source-2/#dom-sourcebufferlist-length)
             * @returns The number of #GstSourceBuffer objects in the list
             */
            get_length(): number;
            /**
             * Retrieves the #GstSourceBuffer at `index` from `self`. If `index` is greater than
             * the highest index in the list, it will return `NULL`.
             *
             * [Specification](https://www.w3.org/TR/media-source-2/#dfn-sourcebufferlist-getter)
             * @param index index of requested Source Buffer
             * @returns The requested #GstSourceBuffer or `NULL`
             */
            index(index: number): SourceBuffer | null;
        }

        type MediaSourceClass = typeof MediaSource;
        /**
         * A structure describing a simplified version of the TimeRanges concept in the
         * HTML specification, only representing a single `start` and `end` time.
         *
         * [Specification](https://html.spec.whatwg.org/multipage/media.html#timeranges)
         */
        class MediaSourceRange {
            static $gtype: GObject.GType<MediaSourceRange>;

            // Fields

            start: Gst.ClockTime;
            end: Gst.ClockTime;

            // Constructors

            constructor(
                properties?: Partial<{
                    start: Gst.ClockTime;
                    end: Gst.ClockTime;
                }>,
            );
            _init(...args: any[]): void;
        }

        type MseSrcClass = typeof MseSrc;
        type MseSrcPadClass = typeof MseSrcPad;
        type SourceBufferClass = typeof SourceBuffer;
        class SourceBufferInterval {
            static $gtype: GObject.GType<SourceBufferInterval>;

            // Fields

            start: Gst.ClockTime;
            end: Gst.ClockTime;

            // Constructors

            constructor(
                properties?: Partial<{
                    start: Gst.ClockTime;
                    end: Gst.ClockTime;
                }>,
            );
            _init(...args: any[]): void;
        }

        type SourceBufferListClass = typeof SourceBufferList;
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

    export default GstMse;
}

declare module 'gi://GstMse' {
    import GstMse10 from 'gi://GstMse?version=1.0';
    export default GstMse10;
}
// END
