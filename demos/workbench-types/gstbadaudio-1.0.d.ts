/// <reference path="./gstbase-1.0.d.ts" />
/// <reference path="./gst-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gstaudio-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GstBadAudio?version=1.0' {
    // Module dependencies
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GstAudio from 'gi://GstAudio?version=1.0';

    export namespace GstBadAudio {
        /**
         * GstBadAudio-1.0
         */

        /**
         * The output mode defines how the output behaves with regards to looping. Either the playback position is
         * moved back to the beginning of the loop, acting like a backwards seek, or it increases steadily, as if
         * loop were "unrolled".
         */

        /**
         * The output mode defines how the output behaves with regards to looping. Either the playback position is
         * moved back to the beginning of the loop, acting like a backwards seek, or it increases steadily, as if
         * loop were "unrolled".
         */
        export namespace NonstreamAudioOutputMode {
            export const $gtype: GObject.GType<NonstreamAudioOutputMode>;
        }

        enum NonstreamAudioOutputMode {
            /**
             * Playback position is moved back to the beginning of the loop
             */
            LOOPING,
            /**
             * Playback position increases steadily, even when looping
             */
            STEADY,
        }
        /**
         * The subsong mode defines how the decoder shall handle subsongs.
         */

        /**
         * The subsong mode defines how the decoder shall handle subsongs.
         */
        export namespace NonstreamAudioSubsongMode {
            export const $gtype: GObject.GType<NonstreamAudioSubsongMode>;
        }

        enum NonstreamAudioSubsongMode {
            /**
             * Only the current subsong is played
             */
            SINGLE,
            /**
             * All subsongs are played (current subsong index is ignored)
             */
            ALL,
            /**
             * Use decoder specific default behavior
             */
            DECODER_DEFAULT,
        }
        /**
         * The name of the template for the sink pad.
         */
        const NONSTREAM_AUDIO_DECODER_SINK_NAME: string;
        /**
         * The name of the template for the source pad.
         */
        const NONSTREAM_AUDIO_DECODER_SRC_NAME: string;
        module NonstreamAudioDecoder {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps {
                current_subsong: number;
                currentSubsong: number;
                num_loops: number;
                numLoops: number;
            }
        }

        /**
         * This base class is for decoders which do not operate on a streaming model.
         * That is: they load the encoded media at once, as part of an initialization,
         * and afterwards can decode samples (sometimes referred to as "rendering the
         * samples").
         *
         * This sets it apart from GstAudioDecoder, which is a base class for
         * streaming audio decoders.
         *
         * The base class is conceptually a mix between decoder and parser. This is
         * unavoidable, since virtually no format that isn't streaming based has a
         * clear distinction between parsing and decoding. As a result, this class
         * also handles seeking.
         *
         * Non-streaming audio formats tend to have some characteristics unknown to
         * more "regular" bitstreams. These include subsongs and looping.
         *
         * Subsongs are a set of songs-within-a-song. An analogy would be a multitrack
         * recording, where each track is its own song. The first subsong is typically
         * the "main" one. Subsongs were popular for video games to enable context-
         * aware music; for example, subsong `#0` would be the "main" song, `#1` would be
         * an alternate song playing when a fight started, `#2` would be heard during
         * conversations etc. The base class is designed to always have at least one
         * subsong. If the subclass doesn't provide any, the base class creates a
         * "pseudo" subsong, which is actually the whole song.
         * Downstream is informed about the subsong using a table of contents (TOC),
         * but only if there are at least 2 subsongs.
         *
         * Looping refers to jumps within the song, typically backwards to the loop
         * start (although bi-directional looping is possible). The loop is defined
         * by a chronological start and end; once the playback position reaches the
         * loop end, it jumps back to the loop start.
         * Depending on the subclass, looping may not be possible at all, or it
         * may only be possible to enable/disable it (that is, either no looping, or
         * an infinite amount of loops), or it may allow for defining a finite number
         * of times the loop is repeated.
         * Looping can affect output in two ways. Either, the playback position is
         * reset to the start of the loop, similar to what happens after a seek event.
         * Or, it is not reset, so the pipeline sees playback steadily moving forwards,
         * the playback position monotonically increasing. However, seeking must
         * always happen within the confines of the defined subsong duration; for
         * example, if a subsong is 2 minutes long, steady playback is at 5 minutes
         * (because infinite looping is enabled), then seeking will still place the
         * position within the 2 minute period.
         * Loop count 0 means no looping. Loop count -1 means infinite looping.
         * Nonzero positive values indicate how often a loop shall occur.
         *
         * If the initial subsong and loop count are set to values the subclass does
         * not support, the subclass has a chance to correct these values.
         * `get_property` then reports the corrected versions.
         *
         * The base class operates as follows:
         * * Unloaded mode
         *   - Initial values are set. If a current subsong has already been
         *     defined (for example over the command line with gst-launch), then
         *     the subsong index is copied over to current_subsong .
         *     Same goes for the num-loops and output-mode properties.
         *     Media is NOT loaded yet.
         *   - Once the sinkpad is activated, the process continues. The sinkpad is
         *     activated in push mode, and the class accumulates the incoming media
         *     data in an adapter inside the sinkpad's chain function until either an
         *     EOS event is received from upstream, or the number of bytes reported
         *     by upstream is reached. Then it loads the media, and starts the decoder
         *     output task.
         *   - If upstream cannot respond to the size query (in bytes) of `load_from_buffer`
         *     fails, an error is reported, and the pipeline stops.
         *   - If there are no errors, `load_from_buffer` is called to load the media. The
         *     subclass must at least call gst_nonstream_audio_decoder_set_output_format()
         *     there, and is free to make use of the initial subsong, output mode, and
         *     position. If the actual output mode or position differs from the initial
         *     value,it must set the initial value to the actual one (for example, if
         *     the actual starting position is always 0, set *initial_position to 0).
         *     If loading is unsuccessful, an error is reported, and the pipeline
         *     stops. Otherwise, the base class calls `get_current_subsong` to retrieve
         *     the actual current subsong, `get_subsong_duration` to report the current
         *     subsong's duration in a duration event and message, and `get_subsong_tags`
         *     to send tags downstream in an event (these functions are optional; if
         *     set to NULL, the associated operation is skipped). Afterwards, the base
         *     class switches to loaded mode, and starts the decoder output task.
         *
         * * Loaded mode</title>
         *   - Inside the decoder output task, the base class repeatedly calls `decode,`
         *     which returns a buffer with decoded, ready-to-play samples. If the
         *     subclass reached the end of playback, `decode` returns FALSE, otherwise
         *     TRUE.
         *   - Upon reaching a loop end, subclass either ignores that, or loops back
         *     to the beginning of the loop. In the latter case, if the output mode is set
         *     to LOOPING, the subclass must call gst_nonstream_audio_decoder_handle_loop()
         *     *after* the playback position moved to the start of the loop. In
         *     STEADY mode, the subclass must *not* call this function.
         *     Since many decoders only provide a callback for when the looping occurs,
         *     and that looping occurs inside the decoding operation itself, the following
         *     mechanism for subclass is suggested: set a flag inside such a callback.
         *     Then, in the next `decode` call, before doing the decoding, check this flag.
         *     If it is set, gst_nonstream_audio_decoder_handle_loop() is called, and the
         *     flag is cleared.
         *     (This function call is necessary in LOOPING mode because it updates the
         *     current segment and makes sure the next buffer that is sent downstream
         *     has its DISCONT flag set.)
         *   - When the current subsong is switched, `set_current_subsong` is called.
         *     If it fails, a warning is reported, and nothing else is done. Otherwise,
         *     it calls `get_subsong_duration` to get the new current subsongs's
         *     duration, `get_subsong_tags` to get its tags, reports a new duration
         *     (i.e. it sends a duration event downstream and generates a duration
         *     message), updates the current segment, and sends the subsong's tags in
         *     an event downstream. (If `set_current_subsong` has been set to NULL by
         *     the subclass, attempts to set a current subsong are ignored; likewise,
         *     if `get_subsong_duration` is NULL, no duration is reported, and if
         *     `get_subsong_tags` is NULL, no tags are sent downstream.)
         *   - When an attempt is made to switch the output mode, it is checked against
         *     the bitmask returned by `get_supported_output_modes`. If the proposed
         *     new output mode is supported, the current segment is updated
         *     (it is open-ended in STEADY mode, and covers the (sub)song length in
         *     LOOPING mode), and the subclass' `set_output_mode` function is called
         *     unless it is set to NULL. Subclasses should reset internal loop counters
         *     in this function.
         *
         * The relationship between (sub)song duration, output mode, and number of loops
         * is defined this way (this is all done by the base class automatically):
         *
         * * Segments have their duration and stop values set to GST_CLOCK_TIME_NONE in
         *   STEADY mode, and to the duration of the (sub)song in LOOPING mode.
         *
         * * The duration that is returned to a DURATION query is always the duration
         *   of the (sub)song, regardless of number of loops or output mode. The same
         *   goes for DURATION messages and tags.
         *
         * * If the number of loops is >0 or -1, durations of TOC entries are set to
         *   the duration of the respective subsong in LOOPING mode and to G_MAXINT64 in
         *   STEADY mode. If the number of loops is 0, entry durations are set to the
         *   subsong duration regardless of the output mode.
         */
        abstract class NonstreamAudioDecoder extends Gst.Element {
            static $gtype: GObject.GType<NonstreamAudioDecoder>;

            // Properties

            get current_subsong(): number;
            set current_subsong(val: number);
            get currentSubsong(): number;
            set currentSubsong(val: number);
            get num_loops(): number;
            set num_loops(val: number);
            get numLoops(): number;
            set numLoops(val: number);

            // Fields

            element: Gst.Element;
            sinkpad: Gst.Pad;
            srcpad: Gst.Pad;
            upstream_size: number;
            loaded_mode: boolean;
            input_data_adapter: GstBase.Adapter;
            subsong_duration: Gst.ClockTime;
            output_format_changed: boolean;
            cur_pos_in_samples: number;
            num_decoded_samples: number;
            discont: boolean;
            allocator: Gst.Allocator;

            // Constructors

            constructor(properties?: Partial<NonstreamAudioDecoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Optional.
             *                              Sets up the allocation parameters for allocating output
             *                              buffers. The passed in query contains the result of the
             *                              downstream allocation query.
             *                              Subclasses should chain up to the parent implementation to
             *                              invoke the default handler.
             * @param query
             */
            vfunc_decide_allocation(query: Gst.Query): boolean;
            /**
             * Always required.
             *                              Allocates an output buffer, fills it with decoded audio samples, and must be passed on to
             *                              *buffer . The number of decoded samples must be passed on to *num_samples.
             *                              If decoding finishes or the decoding is no longer possible (for example, due to an
             *                              unrecoverable error), this function returns FALSE, otherwise TRUE.
             * @param buffer
             * @param num_samples
             */
            vfunc_decode(buffer: Gst.Buffer, num_samples: number): boolean;
            /**
             * Optional.
             *                              Returns the current subsong.
             *                              If the current subsong mode is not GST_NONSTREAM_AUDIO_SUBSONG_MODE_SINGLE, this
             *                              function's return value is undefined.
             *                              If this function is implemented by the subclass,
             *                              `get_num_subsongs` should be implemented as well.
             */
            vfunc_get_current_subsong(): number;
            /**
             * Optional.
             *                              Returns a tag list containing the main song tags, or NULL if there are
             *                              no such tags. Returned tags will be unref'd. Use this vfunc instead of
             *                              manually pushing a tag event downstream to avoid edge cases where not yet
             *                              pushed sticky tag events get overwritten before they are pushed (can for
             *                              example happen with decodebin if tags are pushed downstream before the
             *                              decodebin pads are linked).
             */
            vfunc_get_main_tags(): Gst.TagList;
            /**
             * Optional.
             *                              Returns the number of loops for playback.
             */
            vfunc_get_num_loops(): number;
            /**
             * Optional.
             *                              Returns the number of subsongs available.
             *                              The return values 0 and 1 have a similar, but distinct, meaning.
             *                              If this function returns 0, then this decoder does not support subsongs at all.
             *                              `get_current_subsong` must then also always return 0. In other words, this function
             *                              either never returns 0, or never returns anything else than 0.
             *                              A return value of 1 means that the media contains either only one or no subsongs
             *                              (the entire song is then considered to be one single subsong). 1 also means that only
             *                              this very media has no or just one subsong, and the decoder itself can
             *                              support multiple subsongs.
             */
            vfunc_get_num_subsongs(): number;
            /**
             * Optional.
             *                              Returns the duration of a subsong. Returns GST_CLOCK_TIME_NONE if duration is unknown.
             * @param subsong
             */
            vfunc_get_subsong_duration(subsong: number): Gst.ClockTime;
            /**
             * Optional.
             *                              Returns tags for a subsong, or NULL if there are no tags.
             *                              Returned tags will be unref'd.
             * @param subsong
             */
            vfunc_get_subsong_tags(subsong: number): Gst.TagList;
            /**
             * Always required.
             *                              Returns a bitmask containing the output modes the subclass supports.
             *                              The mask is formed by a bitwise OR combination of integers, which can be calculated
             *                              this way:  1 << GST_NONSTREAM_AUDIO_OUTPUT_MODE_<mode> , where mode is either STEADY or LOOPING
             */
            vfunc_get_supported_output_modes(): number;
            /**
             * Required if loads_from_sinkpad is set to TRUE (the default value).
             *                              Loads the media from the given buffer. The entire media is supplied at once,
             *                              so after this call, loading should be finished. This function
             *                              can also make use of a suggested initial subsong & subsong mode and initial
             *                              playback position (but isn't required to). In case it chooses a different starting
             *                              position, the function must pass this position to *initial_position.
             *                              The subclass does not have to unref the input buffer; the base class does that
             *                              already.
             * @param source_data
             * @param initial_subsong
             * @param initial_subsong_mode
             * @param initial_position
             * @param initial_output_mode
             * @param initial_num_loops
             */
            vfunc_load_from_buffer(
                source_data: Gst.Buffer,
                initial_subsong: number,
                initial_subsong_mode: NonstreamAudioSubsongMode,
                initial_position: Gst.ClockTime,
                initial_output_mode: NonstreamAudioOutputMode,
                initial_num_loops: number,
            ): boolean;
            /**
             * Required if loads_from_sinkpad is set to FALSE.
             *                              Loads the media in a way defined by the custom sink. Data is not supplied;
             *                              the derived class has to handle this on its own. Otherwise, this function is
             *                              identical to `load_from_buffer`.
             * @param initial_subsong
             * @param initial_subsong_mode
             * @param initial_position
             * @param initial_output_mode
             * @param initial_num_loops
             */
            vfunc_load_from_custom(
                initial_subsong: number,
                initial_subsong_mode: NonstreamAudioSubsongMode,
                initial_position: Gst.ClockTime,
                initial_output_mode: NonstreamAudioOutputMode,
                initial_num_loops: number,
            ): boolean;
            vfunc_negotiate(): boolean;
            /**
             * Optional.
             *                              Proposes buffer allocation parameters for upstream elements.
             *                              Subclasses should chain up to the parent implementation to
             *                              invoke the default handler.
             * @param query
             */
            vfunc_propose_allocation(query: Gst.Query): boolean;
            /**
             * Optional.
             *                              Called when a seek event is received by the parent class.
             *                              new_position is a pointer to a GstClockTime integer which
             *                              contains a position relative to the current subsong.
             *                              Minimum is 0, maximum is the subsong length.
             *                              After this function finishes, new_position is set to the
             *                              actual new position (which may differ from the request
             *                              position, depending on the decoder).
             * @param new_position
             */
            vfunc_seek(new_position: Gst.ClockTime): boolean;
            /**
             * Optional.
             *                              Sets the current subsong. This function is allowed to switch to a different
             *                              subsong than the required one, and can optionally make use of the suggested initial
             *                              position. In case it chooses a different starting position, the function must pass
             *                              this position to *initial_position.
             *                              This function switches the subsong mode to GST_NONSTREAM_AUDIO_SUBSONG_MODE_SINGLE
             *                              automatically.
             *                              If this function is implemented by the subclass, `get_current_subsong` and
             *                              `get_num_subsongs` should be implemented as well.
             * @param subsong
             * @param initial_position
             */
            vfunc_set_current_subsong(subsong: number, initial_position: Gst.ClockTime): boolean;
            /**
             * Optional.
             *                              Sets the number of loops for playback. If this is called during playback,
             *                              the subclass must set any internal loop counters to zero. A loop value of -1
             *                              means infinite looping; 0 means no looping; and when the num_loops is greater than 0,
             *                              playback should loop exactly num_loops times. If this function is implemented,
             *                              `get_num_loops` should be implemented as well. The function can ignore the given values
             *                              and choose another; however, `get_num_loops` should return this other value afterwards.
             *                              It is up to the subclass to define where the loop starts and ends. It can mean that only
             *                              a subset at the end or in the middle of a song is repeated, for example.
             *                              If the current subsong mode is GST_NONSTREAM_AUDIO_SUBSONG_MODE_SINGLE, then the subsong
             *                              is repeated this many times. If it is GST_NONSTREAM_AUDIO_SUBSONG_MODE_ALL, then all
             *                              subsongs are repeated this many times. With GST_NONSTREAM_AUDIO_SUBSONG_MODE_DECODER_DEFAULT,
             *                              the behavior is decoder specific.
             * @param num_loops
             */
            vfunc_set_num_loops(num_loops: number): boolean;
            /**
             * Optional.
             *                              Sets the output mode the subclass has to use. Unlike with most other functions, the subclass
             *                              cannot choose a different mode; it must use the requested one.
             *                              If the output mode is set to LOOPING, `gst_nonstream_audio_decoder_handle_loop`
             *                              must be called after playback moved back to the start of a loop.
             * @param mode
             * @param current_position
             */
            vfunc_set_output_mode(mode: NonstreamAudioOutputMode, current_position: Gst.ClockTime): boolean;
            /**
             * Optional.
             *                              Sets the current subsong mode. Since this might influence the current playback position,
             *                              this function must set the initial_position integer argument to a defined value.
             *                              If the playback position is not affected at all, it must be set to GST_CLOCK_TIME_NONE.
             *                              If the subsong is restarted after the mode switch, it is recommended to set the value
             *                              to the position in the playback right after the switch (or 0 if the subsongs are always
             *                              reset back to the beginning).
             * @param mode
             * @param initial_position
             */
            vfunc_set_subsong_mode(mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime): boolean;
            /**
             * Optional.
             *                              Called when a position query is received by the parent class.
             *                              The position that this function returns must be relative to
             *                              the current subsong. Thus, the minimum is 0, and the maximum
             *                              is the subsong length.
             */
            vfunc_tell(): Gst.ClockTime;

            // Methods

            /**
             * Allocates an output buffer with the internally configured buffer pool.
             *
             * This function may only be called from within `load_from_buffer,`
             * `load_from_custom,` and `decode`.
             * @param size Size of the output buffer, in bytes
             * @returns Newly allocated output buffer, or NULL if allocation failed
             */
            allocate_output_buffer(size: number): Gst.Buffer | null;
            /**
             * Gets sample format, sample rate, channel count from the allowed srcpad caps.
             *
             * This is useful for when the subclass wishes to adjust one or more output
             * parameters to whatever downstream is supporting. For example, the output
             * sample rate is often a freely adjustable value in module players.
             *
             * This function tries to find a value inside the srcpad peer's caps for
             * `format,` `sample_rate,` `num_chnanels` . Any of these can be NULL; they
             * (and the corresponding downstream caps) are then skipped while retrieving
             * information. Non-fixated caps are fixated first; the value closest to
             * their present value is then chosen. For example, if the variables pointed
             * to by the arguments are GST_AUDIO_FORMAT_16, 48000 Hz, and 2 channels,
             * and the downstream caps are:
             *
             * "audio/x-raw, format={S16LE,S32LE}, rate=[1,32000], channels=[1,MAX]"
             *
             * Then `format` and `channels` stay the same, while `sample_rate` is set to 32000 Hz.
             * This way, the initial values the the variables pointed to by the arguments
             * are set to can be used as default output values. Note that if no downstream
             * caps can be retrieved, then this function does nothing, therefore it is
             * necessary to ensure that `format,` `sample_rate,` and `channels` have valid
             * initial values.
             *
             * Decoder lock is not held by this function, so it can be called from within
             * any of the class vfuncs.
             * @param format #GstAudioFormat value to fill with a sample format
             * @param sample_rate Integer to fill with a sample rate
             * @param num_channels Integer to fill with a channel count
             */
            get_downstream_info(format: GstAudio.AudioFormat, sample_rate: number, num_channels: number): void;
            /**
             * Reports that a loop has been completed and creates a new appropriate
             * segment for the next loop.
             *
             * `new_position` exists because a loop may not start at the beginning.
             *
             * This function is only useful for subclasses which can be in the
             * GST_NONSTREAM_AUDIO_OUTPUT_MODE_LOOPING output mode, since in the
             * GST_NONSTREAM_AUDIO_OUTPUT_MODE_STEADY output mode, this function
             * does nothing. See #GstNonstreamAudioOutputMode for more details.
             *
             * The subclass calls this during playback when it loops. It produces
             * a new segment with updated base time and internal time values, to allow
             * for seamless looping. It does *not* check the number of elapsed loops;
             * this is up the subclass.
             *
             * Note that if this function is called, then it must be done after the
             * last samples of the loop have been decoded and pushed downstream.
             *
             * This function must be called with the decoder mutex lock held, since it
             * is typically called from within `decode` (which in turn are called with
             * the lock already held).
             * @param new_position
             */
            handle_loop(new_position: Gst.ClockTime): void;
            /**
             * Sets the output caps by means of a GstAudioInfo structure.
             *
             * This must be called latest in the first `decode` call, to ensure src caps are
             * set before decoded samples are sent downstream. Typically, this is called
             * from inside `load_from_buffer` or `load_from_custom`.
             *
             * This function must be called with the decoder mutex lock held, since it
             * is typically called from within the aforementioned vfuncs (which in turn
             * are called with the lock already held).
             * @param audio_info Valid audio info structure containing the output format
             * @returns TRUE if setting the output format succeeded, FALSE otherwise
             */
            set_output_format(audio_info: GstAudio.AudioInfo): boolean;
            /**
             * Convenience function; sets the output caps by means of common parameters.
             *
             * Internally, this fills a GstAudioInfo structure and calls
             * gst_nonstream_audio_decoder_set_output_format().
             * @param sample_rate Output sample rate to use, in Hz
             * @param sample_format Output sample format to use
             * @param num_channels Number of output channels to use
             * @returns TRUE if setting the output format succeeded, FALSE otherwise
             */
            set_output_format_simple(
                sample_rate: number,
                sample_format: GstAudio.AudioFormat,
                num_channels: number,
            ): boolean;
        }

        module PlanarAudioAdapter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * This class is similar to GstAdapter, but it is made to work with
         * non-interleaved (planar) audio buffers. Before using, an audio format
         * must be configured with gst_planar_audio_adapter_configure()
         */
        class PlanarAudioAdapter extends GObject.Object {
            static $gtype: GObject.GType<PlanarAudioAdapter>;

            // Constructors

            constructor(properties?: Partial<PlanarAudioAdapter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): PlanarAudioAdapter;

            // Methods

            /**
             * Gets the maximum amount of samples available, that is it returns the maximum
             * value that can be supplied to gst_planar_audio_adapter_get_buffer() without
             * that function returning %NULL.
             * @returns number of samples available in @adapter
             */
            available(): number;
            /**
             * Removes all buffers from `adapter`.
             */
            clear(): void;
            /**
             * Sets up the `adapter` to handle audio data of the specified audio format.
             * Note that this will internally clear the adapter and re-initialize it.
             * @param info a #GstAudioInfo describing the format of the audio data
             */
            configure(info: GstAudio.AudioInfo): void;
            distance_from_discont(): number;
            /**
             * Get the DTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
             * flag, or GST_CLOCK_TIME_NONE.
             * @returns The DTS at the last discont or GST_CLOCK_TIME_NONE.
             */
            dts_at_discont(): Gst.ClockTime;
            /**
             * Flushes the first `to_flush` samples in the `adapter`. The caller must ensure
             * that at least this many samples are available.
             * @param to_flush the number of samples to flush
             */
            flush(to_flush: number): void;
            /**
             * Returns a #GstBuffer containing the first `nsamples` of the `adapter,` but
             * does not flush them from the adapter.
             * Use gst_planar_audio_adapter_take_buffer() for flushing at the same time.
             *
             * The map `flags` can be used to give an optimization hint to this function.
             * When the requested buffer is meant to be mapped only for reading, it might
             * be possible to avoid copying memory in some cases.
             *
             * Caller owns a reference to the returned buffer. gst_buffer_unref() after
             * usage.
             *
             * Free-function: gst_buffer_unref
             * @param nsamples the number of samples to get
             * @param flags hint the intended use of the returned buffer
             * @returns a #GstBuffer containing the first     @nsamples of the adapter, or %NULL if @nsamples samples are not     available. gst_buffer_unref() when no longer needed.
             */
            get_buffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null;
            /**
             * Get the offset that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
             * flag, or GST_BUFFER_OFFSET_NONE.
             * @returns The offset at the last discont or GST_BUFFER_OFFSET_NONE.
             */
            offset_at_discont(): number;
            /**
             * Get the dts that was before the current sample in the adapter. When
             * `distance` is given, the amount of bytes between the dts and the current
             * position is returned.
             *
             * The dts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
             * the adapter is first created or when it is cleared. This also means that
             * before the first sample with a dts is removed from the adapter, the dts
             * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
             * @returns The previously seen dts.
             */
            prev_dts(): [Gst.ClockTime, number];
            /**
             * Get the offset that was before the current sample in the adapter. When
             * `distance` is given, the amount of samples between the offset and the current
             * position is returned.
             *
             * The offset is reset to GST_BUFFER_OFFSET_NONE and the distance is set to 0
             * when the adapter is first created or when it is cleared. This also means that
             * before the first sample with an offset is removed from the adapter, the
             * offset and distance returned are GST_BUFFER_OFFSET_NONE and 0 respectively.
             * @returns The previous seen offset.
             */
            prev_offset(): [number, number];
            /**
             * Get the pts that was before the current sample in the adapter. When
             * `distance` is given, the amount of samples between the pts and the current
             * position is returned.
             *
             * The pts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
             * the adapter is first created or when it is cleared. This also means that before
             * the first sample with a pts is removed from the adapter, the pts
             * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
             * @returns The previously seen pts.
             */
            prev_pts(): [Gst.ClockTime, number];
            /**
             * Get the PTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
             * flag, or GST_CLOCK_TIME_NONE.
             * @returns The PTS at the last discont or GST_CLOCK_TIME_NONE.
             */
            pts_at_discont(): Gst.ClockTime;
            /**
             * Adds the data from `buf` to the data stored inside `adapter` and takes
             * ownership of the buffer.
             * @param buf a #GstBuffer to queue in the adapter
             */
            push(buf: Gst.Buffer): void;
            /**
             * Returns a #GstBuffer containing the first `nsamples` bytes of the
             * `adapter`. The returned bytes will be flushed from the adapter.
             *
             * See gst_planar_audio_adapter_get_buffer() for more details.
             *
             * Caller owns a reference to the returned buffer. gst_buffer_unref() after
             * usage.
             *
             * Free-function: gst_buffer_unref
             * @param nsamples the number of samples to take
             * @param flags hint the intended use of the returned buffer
             * @returns a #GstBuffer containing the first     @nsamples of the adapter, or %NULL if @nsamples samples are not     available. gst_buffer_unref() when no longer needed.
             */
            take_buffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null;
        }

        type NonstreamAudioDecoderClass = typeof NonstreamAudioDecoder;
        type PlanarAudioAdapterClass = typeof PlanarAudioAdapter;
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

    export default GstBadAudio;
}

declare module 'gi://GstBadAudio' {
    import GstBadAudio10 from 'gi://GstBadAudio?version=1.0';
    export default GstBadAudio10;
}
// END
