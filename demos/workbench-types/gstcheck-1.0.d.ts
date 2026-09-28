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

declare module 'gi://GstCheck?version=1.0' {
    // Module dependencies
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstCheck {
        /**
         * GstCheck-1.0
         */

        /**
         * Get one buffer from `pad`. Implemented via buffer probes. This function will
         * block until the pipeline passes a buffer over `pad,` so for robust behavior
         * in unit tests, you need to use check's timeout to fail out in the case that a
         * buffer never arrives.
         *
         * You must have previously called gst_buffer_straw_start_pipeline() on
         * `pipeline` and `pad`.
         * @param bin the pipeline previously started via gst_buffer_straw_start_pipeline()
         * @param pad the pad previously passed to gst_buffer_straw_start_pipeline()
         * @returns the captured #GstBuffer.
         */
        function buffer_straw_get_buffer(bin: Gst.Element, pad: Gst.Pad): Gst.Buffer;
        /**
         * Sets up a pipeline for buffer sucking. This will allow you to call
         * gst_buffer_straw_get_buffer() to access buffers as they pass over `pad`.
         *
         * This function is normally used in unit tests that want to verify that a
         * particular element is outputting correct buffers. For example, you would make
         * a pipeline via gst_parse_launch(), pull out the pad you want to monitor, then
         * call gst_buffer_straw_get_buffer() to get the buffers that pass through `pad`.
         * The pipeline will block until you have sucked off the buffers.
         *
         * This function will set the state of `bin` to PLAYING; to clean up, be sure to
         * call gst_buffer_straw_stop_pipeline().
         *
         * Note that you may not start two buffer straws at the same time. This function
         * is intended for unit tests, not general API use. In fact it calls fail_if
         * from libcheck, so you cannot use it outside unit tests.
         * @param bin the pipeline to run
         * @param pad a pad on an element in @bin
         */
        function buffer_straw_start_pipeline(bin: Gst.Element, pad: Gst.Pad): void;
        /**
         * Set `bin` to #GST_STATE_NULL and release resource allocated in
         * gst_buffer_straw_start_pipeline().
         *
         * You must have previously called gst_buffer_straw_start_pipeline() on
         * `pipeline` and `pad`.
         * @param bin the pipeline previously started via gst_buffer_straw_start_pipeline()
         * @param pad the pad previously passed to gst_buffer_straw_start_pipeline()
         */
        function buffer_straw_stop_pipeline(bin: Gst.Element, pad: Gst.Pad): void;
        /**
         * Verifies that reference values and current values are equals in `list`.
         * @param list A list of GstCheckABIStruct to be verified
         * @param have_abi_sizes Whether there is a reference ABI size already specified, if it is %FALSE and the `GST_ABI` environment variable is set, usable code for @list will be printed.
         */
        function check_abi_list(list: CheckABIStruct, have_abi_sizes: boolean): void;
        /**
         * Compare the buffer contents with `data` and `size`.
         * @param buffer buffer to compare
         * @param data data to compare to
         * @param size size of data to compare
         */
        function check_buffer_data(buffer: Gst.Buffer, data: any | null, size: number): void;
        /**
         * Compare two caps with gst_caps_is_equal and fail unless they are
         * equal.
         * @param caps1 first caps to compare
         * @param caps2 second caps to compare
         */
        function check_caps_equal(caps1: Gst.Caps, caps2: Gst.Caps): void;
        /**
         * A fake chain function that appends the buffer to the internal list of
         * buffers.
         * @param pad
         * @param parent
         * @param buffer
         */
        function check_chain_func(pad: Gst.Pad, parent: Gst.Object, buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Clear all filters added by `gst_check_add_log_filter`.
         *
         * MT safe.
         */
        function check_clear_log_filter(): void;
        /**
         * Unref and remove all buffers that are in the global `buffers` GList,
         * emptying the list.
         */
        function check_drop_buffers(): void;
        /**
         * Create an element using the factory providing the `element_name` and
         * push the `buffer_in` to this element. The element should create one buffer
         * and this will be compared with `buffer_out`. We only check the caps
         * and the data of the buffers. This function unrefs the buffers.
         * @param element_name name of the element that needs to be created
         * @param buffer_in push this buffer to the element
         * @param caps_in the #GstCaps expected of the sinkpad of the element
         * @param buffer_out compare the result with this buffer
         * @param caps_out the #GstCaps expected of the srcpad of the element
         */
        function check_element_push_buffer(
            element_name: string,
            buffer_in: Gst.Buffer,
            caps_in: Gst.Caps,
            buffer_out: Gst.Buffer,
            caps_out: Gst.Caps,
        ): void;
        /**
         * Create an element using the factory providing the `element_name` and push the
         * buffers in `buffer_in` to this element. The element should create the buffers
         * equal to the buffers in `buffer_out`. We only check the size and the data of
         * the buffers. This function unrefs the buffers in the two lists.
         * The last_flow_return parameter indicates the expected flow return value from
         * pushing the final buffer in the list.
         * This can be used to set up a test which pushes some buffers and then an
         * invalid buffer, when the final buffer is expected to fail, for example.
         * @param element_name name of the element that needs to be created
         * @param buffer_in a list of buffers that needs to be  pushed to the element
         * @param caps_in the #GstCaps expected of the sinkpad of the element
         * @param buffer_out a list of buffers that we expect from the element
         * @param caps_out the #GstCaps expected of the srcpad of the element
         * @param last_flow_return the last buffer push needs to give this GstFlowReturn
         */
        function check_element_push_buffer_list(
            element_name: string,
            buffer_in: Gst.Buffer[],
            caps_in: Gst.Caps,
            buffer_out: Gst.Buffer[],
            caps_out: Gst.Caps,
            last_flow_return: Gst.FlowReturn,
        ): void;
        function check_init(argc: number, argv: string): void;
        function check_message_error(
            message: Gst.Message,
            type: Gst.MessageType,
            domain: GLib.Quark,
            code: number,
        ): void;
        /**
         * Unrefs `object_to_unref` and checks that is has properly been
         * destroyed.
         * @param object_to_unref The #GObject to unref
         */
        function check_object_destroyed_on_unref(object_to_unref?: any | null): void;
        /**
         * Remove a filter that has been added by `gst_check_add_log_filter`.
         *
         * MT safe.
         * @param filter Filter returned by @gst_check_add_log_filter
         */
        function check_remove_log_filter(filter: CheckLogFilter): void;
        /**
         * setup an element for a filter test with mysrcpad and mysinkpad
         * @param factory factory
         * @returns a new element
         */
        function check_setup_element(factory: string): Gst.Element;
        /**
         * Push stream-start, caps and segment event, which consist of the minimum
         * required events to allow streaming. Caps is optional to allow raw src
         * testing. If `element` has more than one src or sink pad, use
         * gst_check_setup_events_with_stream_id() instead.
         * @param srcpad The src #GstPad to push on
         * @param element The #GstElement use to create the stream id
         * @param caps #GstCaps in case caps event must be sent
         * @param format The #GstFormat of the default segment to send
         */
        function check_setup_events(
            srcpad: Gst.Pad,
            element: Gst.Element,
            caps: Gst.Caps | null,
            format: Gst.Format,
        ): void;
        /**
         * Push stream-start, caps and segment event, which consist of the minimum
         * required events to allow streaming. Caps is optional to allow raw src
         * testing.
         * @param srcpad The src #GstPad to push on
         * @param element The #GstElement use to create the stream id
         * @param caps #GstCaps in case caps event must be sent
         * @param format The #GstFormat of the default segment to send
         * @param stream_id A unique identifier for the stream
         */
        function check_setup_events_with_stream_id(
            srcpad: Gst.Pad,
            element: Gst.Element,
            caps: Gst.Caps | null,
            format: Gst.Format,
            stream_id: string,
        ): void;
        /**
         * Does the same as #gst_check_setup_sink_pad_by_name with the <emphasis> name </emphasis> parameter equal to "src".
         * @param element element to setup pad on
         * @param tmpl pad template
         * @returns a new pad that can be used to check the output of @element
         */
        function check_setup_sink_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad;
        /**
         * Creates a new sink pad (based on the given `tmpl)` and links it to the given `element` src pad
         * (the pad that matches the given `name)`.
         * You can set event/chain/query functions on this pad to check the output of the `element`.
         * @param element element to setup pad on
         * @param tmpl pad template
         * @param name Name of the @element src pad that will be linked to the sink pad that will be setup
         * @returns a new pad that can be used to check the output of @element
         */
        function check_setup_sink_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad;
        function check_setup_sink_pad_by_name_from_template(
            element: Gst.Element,
            tmpl: Gst.PadTemplate,
            name: string,
        ): Gst.Pad;
        function check_setup_sink_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad;
        /**
         * Does the same as #gst_check_setup_src_pad_by_name with the <emphasis> name </emphasis> parameter equal to "sink".
         * @param element element to setup pad on
         * @param tmpl pad template
         * @returns A new pad that can be used to inject data on @element
         */
        function check_setup_src_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad;
        /**
         * Creates a new src pad (based on the given `tmpl)` and links it to the given `element` sink pad (the pad that matches the given `name)`.
         * Before using the src pad to push data on `element` you need to call #gst_check_setup_events on the created src pad.
         *
         * Example of how to push a buffer on `element:`
         *
         *
         * ```c
         * static GstStaticPadTemplate sinktemplate = GST_STATIC_PAD_TEMPLATE ("sink",
         * GST_PAD_SINK,
         * GST_PAD_ALWAYS,
         * GST_STATIC_CAPS (YOUR_CAPS_TEMPLATE_STRING)
         * );
         * static GstStaticPadTemplate srctemplate = GST_STATIC_PAD_TEMPLATE ("src",
         * GST_PAD_SRC,
         * GST_PAD_ALWAYS,
         * GST_STATIC_CAPS (YOUR_CAPS_TEMPLATE_STRING)
         * );
         *
         * GstElement * element = gst_check_setup_element ("element");
         * GstPad * mysrcpad = gst_check_setup_src_pad (element, &srctemplate);
         * GstPad * mysinkpad = gst_check_setup_sink_pad (element, &sinktemplate);
         *
         * gst_pad_set_active (mysrcpad, TRUE);
         * gst_pad_set_active (mysinkpad, TRUE);
         * fail_unless (gst_element_set_state (element, GST_STATE_PLAYING) == GST_STATE_CHANGE_SUCCESS, "could not set to playing");
         *
         * GstCaps * caps = gst_caps_from_string (YOUR_DESIRED_SINK_CAPS);
         * gst_check_setup_events (mysrcpad, element, caps, GST_FORMAT_TIME);
         * gst_caps_unref (caps);
         *
         * fail_unless (gst_pad_push (mysrcpad, gst_buffer_new_and_alloc(2)) == GST_FLOW_OK);
         * ```
         *
         *
         * For very simple input/output test scenarios checkout #gst_check_element_push_buffer_list and #gst_check_element_push_buffer.
         * @param element element to setup src pad on
         * @param tmpl pad template
         * @param name Name of the @element sink pad that will be linked to the src pad that will be setup
         * @returns A new pad that can be used to inject data on @element
         */
        function check_setup_src_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad;
        function check_setup_src_pad_by_name_from_template(
            element: Gst.Element,
            tmpl: Gst.PadTemplate,
            name: string,
        ): Gst.Pad;
        function check_setup_src_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad;
        function check_teardown_element(element: Gst.Element): void;
        function check_teardown_pad_by_name(element: Gst.Element, name: string): void;
        function check_teardown_sink_pad(element: Gst.Element): void;
        function check_teardown_src_pad(element: Gst.Element): void;
        /**
         * Sets up a data probe on the given pad which will raise assertions if the
         * data flow is inconsistent.
         * @param consist The #GstStreamConsistency handle
         * @param pad The #GstPad on which the dataflow will be checked.
         * @returns %TRUE if the pad was added
         */
        function consistency_checker_add_pad(consist: StreamConsistency, pad: Gst.Pad): boolean;
        /**
         * Frees the allocated data and probes associated with `consist`.
         * @param consist The #GstStreamConsistency to free.
         */
        function consistency_checker_free(consist: StreamConsistency): void;
        /**
         * Reset the stream checker's internal variables.
         * @param consist The #GstStreamConsistency to reset.
         */
        function consistency_checker_reset(consist: StreamConsistency): void;
        /**
         * Stop the running #GstHarnessThread
         *
         * MT safe.
         * @param t a #GstHarnessThread
         */
        function harness_stress_thread_stop(t: HarnessThread): number;
        interface CheckLogFilterFunc {
            (log_domain: string, log_level: GLib.LogLevelFlags, message: string): boolean;
        }
        interface HarnessPrepareBufferFunc {
            (h: Harness, data?: any | null): Gst.Buffer;
        }
        interface HarnessPrepareEventFunc {
            (h: Harness, data?: any | null): Gst.Event;
        }
        module TestClock {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Clock.ConstructorProps {
                clock_type: Gst.ClockType;
                clockType: Gst.ClockType;
                start_time: number;
                startTime: number;
            }
        }

        /**
         * GstTestClock is an implementation of #GstClock which has different
         * behaviour compared to #GstSystemClock. Time for #GstSystemClock advances
         * according to the system time, while time for #GstTestClock changes only
         * when gst_test_clock_set_time() or gst_test_clock_advance_time() are
         * called. #GstTestClock provides unit tests with the possibility to
         * precisely advance the time in a deterministic manner, independent of the
         * system time or any other external factors.
         *
         * ## Advancing the time of a #GstTestClock
         *
         *
         * ```c
         *   #include <gst/gst.h>
         *   #include <gst/check/gsttestclock.h>
         *
         *   GstClock *clock;
         *   GstTestClock *test_clock;
         *
         *   clock = gst_test_clock_new ();
         *   test_clock = GST_TEST_CLOCK (clock);
         *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
         *   gst_test_clock_advance_time ( test_clock, 1 * GST_SECOND);
         *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
         *   g_usleep (10 * G_USEC_PER_SEC);
         *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
         *   gst_test_clock_set_time (test_clock, 42 * GST_SECOND);
         *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
         *   ...
         * ```
         *
         *
         * #GstClock allows for setting up single shot or periodic clock notifications
         * as well as waiting for these notifications synchronously (using
         * gst_clock_id_wait()) or asynchronously (using gst_clock_id_wait_async() or
         * gst_clock_id_wait_async()). This is used by many GStreamer elements,
         * among them #GstBaseSrc and #GstBaseSink.
         *
         * #GstTestClock keeps track of these clock notifications. By calling
         * gst_test_clock_wait_for_next_pending_id() or
         * gst_test_clock_wait_for_multiple_pending_ids() a unit tests may wait for the
         * next one or several clock notifications to be requested. Additionally unit
         * tests may release blocked waits in a controlled fashion by calling
         * gst_test_clock_process_next_clock_id(). This way a unit test can control the
         * inaccuracy (jitter) of clock notifications, since the test can decide to
         * release blocked waits when the clock time has advanced exactly to, or past,
         * the requested clock notification time.
         *
         * There are also interfaces for determining if a notification belongs to a
         * #GstTestClock or not, as well as getting the number of requested clock
         * notifications so far.
         *
         * N.B.: When a unit test waits for a certain amount of clock notifications to
         * be requested in gst_test_clock_wait_for_next_pending_id() or
         * gst_test_clock_wait_for_multiple_pending_ids() then these functions may block
         * for a long time. If they block forever then the expected clock notifications
         * were never requested from #GstTestClock, and so the assumptions in the code
         * of the unit test are wrong. The unit test case runner in gstcheck is
         * expected to catch these cases either by the default test case timeout or the
         * one set for the unit test by calling tcase_set_timeout\(\).
         *
         * The sample code below assumes that the element under test will delay a
         * buffer pushed on the source pad by some latency until it arrives on the sink
         * pad. Moreover it is assumed that the element will at some point call
         * gst_clock_id_wait() to synchronously wait for a specific time. The first
         * buffer sent will arrive exactly on time only delayed by the latency. The
         * second buffer will arrive a little late (7ms) due to simulated jitter in the
         * clock notification.
         *
         * ## Demonstration of how to work with clock notifications and #GstTestClock
         *
         *
         * ```c
         *   #include <gst/gst.h>
         *   #include <gst/check/gstcheck.h>
         *   #include <gst/check/gsttestclock.h>
         *
         *   GstClockTime latency;
         *   GstElement *element;
         *   GstPad *srcpad;
         *   GstClock *clock;
         *   GstTestClock *test_clock;
         *   GstBuffer buf;
         *   GstClockID pending_id;
         *   GstClockID processed_id;
         *
         *   latency = 42 * GST_MSECOND;
         *   element = create_element (latency, ...);
         *   srcpad = get_source_pad (element);
         *
         *   clock = gst_test_clock_new ();
         *   test_clock = GST_TEST_CLOCK (clock);
         *   gst_element_set_clock (element, clock);
         *
         *   GST_INFO ("Set time, create and push the first buffer\n");
         *   gst_test_clock_set_time (test_clock, 0);
         *   buf = create_test_buffer (gst_clock_get_time (clock), ...);
         *   gst_assert_cmpint (gst_pad_push (srcpad, buf), ==, GST_FLOW_OK);
         *
         *   GST_INFO ("Block until element is waiting for a clock notification\n");
         *   gst_test_clock_wait_for_next_pending_id (test_clock, &pending_id);
         *   GST_INFO ("Advance to the requested time of the clock notification\n");
         *   gst_test_clock_advance_time (test_clock, latency);
         *   GST_INFO ("Release the next blocking wait and make sure it is the one from element\n");
         *   processed_id = gst_test_clock_process_next_clock_id (test_clock);
         *   g_assert (processed_id == pending_id);
         *   g_assert_cmpint (GST_CLOCK_ENTRY_STATUS (processed_id), ==, GST_CLOCK_OK);
         *   gst_clock_id_unref (pending_id);
         *   gst_clock_id_unref (processed_id);
         *
         *   GST_INFO ("Validate that element produced an output buffer and check its timestamp\n");
         *   g_assert_cmpint (get_number_of_output_buffer (...), ==, 1);
         *   buf = get_buffer_pushed_by_element (element, ...);
         *   g_assert_cmpint (GST_BUFFER_TIMESTAMP (buf), ==, latency);
         *   gst_buffer_unref (buf);
         *   GST_INFO ("Check that element does not wait for any clock notification\n");
         *   g_assert (!gst_test_clock_peek_next_pending_id (test_clock, NULL));
         *
         *   GST_INFO ("Set time, create and push the second buffer\n");
         *   gst_test_clock_advance_time (test_clock, 10 * GST_SECOND);
         *   buf = create_test_buffer (gst_clock_get_time (clock), ...);
         *   gst_assert_cmpint (gst_pad_push (srcpad, buf), ==, GST_FLOW_OK);
         *
         *   GST_INFO ("Block until element is waiting for a new clock notification\n");
         *   (gst_test_clock_wait_for_next_pending_id (test_clock, &pending_id);
         *   GST_INFO ("Advance past 7ms beyond the requested time of the clock notification\n");
         *   gst_test_clock_advance_time (test_clock, latency + 7 * GST_MSECOND);
         *   GST_INFO ("Release the next blocking wait and make sure it is the one from element\n");
         *   processed_id = gst_test_clock_process_next_clock_id (test_clock);
         *   g_assert (processed_id == pending_id);
         *   g_assert_cmpint (GST_CLOCK_ENTRY_STATUS (processed_id), ==, GST_CLOCK_OK);
         *   gst_clock_id_unref (pending_id);
         *   gst_clock_id_unref (processed_id);
         *
         *   GST_INFO ("Validate that element produced an output buffer and check its timestamp\n");
         *   g_assert_cmpint (get_number_of_output_buffer (...), ==, 1);
         *   buf = get_buffer_pushed_by_element (element, ...);
         *   g_assert_cmpint (GST_BUFFER_TIMESTAMP (buf), ==,
         *       10 * GST_SECOND + latency + 7 * GST_MSECOND);
         *   gst_buffer_unref (buf);
         *   GST_INFO ("Check that element does not wait for any clock notification\n");
         *   g_assert (!gst_test_clock_peek_next_pending_id (test_clock, NULL));
         *   ...
         * ```
         *
         *
         * Since #GstTestClock is only supposed to be used in unit tests it calls
         * g_assert(), g_assert_cmpint() or g_assert_cmpuint() to validate all function
         * arguments. This will highlight any issues with the unit test code itself.
         */
        class TestClock extends Gst.Clock {
            static $gtype: GObject.GType<TestClock>;

            // Properties

            get clock_type(): Gst.ClockType;
            set clock_type(val: Gst.ClockType);
            get clockType(): Gst.ClockType;
            set clockType(val: Gst.ClockType);
            /**
             * When a #GstTestClock is constructed it will have a certain start time set.
             * If the clock was created using gst_test_clock_new_with_start_time() then
             * this property contains the value of the `start_time` argument. If
             * gst_test_clock_new() was called the clock started at time zero, and thus
             * this property contains the value 0.
             */
            get start_time(): number;
            /**
             * When a #GstTestClock is constructed it will have a certain start time set.
             * If the clock was created using gst_test_clock_new_with_start_time() then
             * this property contains the value of the `start_time` argument. If
             * gst_test_clock_new() was called the clock started at time zero, and thus
             * this property contains the value 0.
             */
            get startTime(): number;

            // Constructors

            constructor(properties?: Partial<TestClock.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): TestClock;

            static new_with_start_time(start_time: Gst.ClockTime): TestClock;

            // Static methods

            /**
             * Finds the latest time inside the list.
             *
             * MT safe.
             * @param pending_list List     of of pending #GstClockIDs
             */
            static id_list_get_latest_time(pending_list?: Gst.ClockID[] | null): Gst.ClockTime;

            // Methods

            /**
             * Advances the time of the `test_clock` by the amount given by `delta`. The
             * time of `test_clock` is monotonically increasing, therefore providing a
             * `delta` which is negative or zero is a programming error.
             *
             * MT safe.
             * @param delta a positive #GstClockTimeDiff to be added to the time of the clock
             */
            advance_time(delta: Gst.ClockTimeDiff): void;
            /**
             * A "crank" consists of three steps:
             * 1: Wait for a #GstClockID to be registered with the #GstTestClock.
             * 2: Advance the #GstTestClock to the time the #GstClockID is waiting, unless
             *    the clock time is already passed the clock id (Since: 1.18).
             * 3: Release the #GstClockID wait.
             * A "crank" can be though of as the notion of
             * manually driving the clock forward to its next logical step.
             * @returns %TRUE if the crank was successful, %FALSE otherwise. MT safe.
             */
            crank(): boolean;
            /**
             * Retrieve the requested time for the next pending clock notification.
             *
             * MT safe.
             * @returns a #GstClockTime set to the time of the next pending clock notification. If no clock notifications have been requested %GST_CLOCK_TIME_NONE will be returned.
             */
            get_next_entry_time(): Gst.ClockTime;
            /**
             * Checks whether `test_clock` was requested to provide the clock notification
             * given by `id`.
             *
             * MT safe.
             * @param id a #GstClockID clock notification
             * @returns %TRUE if the clock has been asked to provide the given clock notification, %FALSE otherwise.
             */
            has_id(id: Gst.ClockID): boolean;
            /**
             * Determine the number of pending clock notifications that have been
             * requested from the `test_clock`.
             *
             * MT safe.
             * @returns the number of pending clock notifications.
             */
            peek_id_count(): number;
            /**
             * Determines if the `pending_id` is the next clock notification scheduled to
             * be triggered given the current time of the `test_clock`.
             *
             * MT safe.
             * @returns %TRUE if @pending_id is the next clock notification to be triggered, %FALSE otherwise.
             */
            peek_next_pending_id(): [boolean, Gst.ClockID | null];
            /**
             * Processes and releases the pending ID.
             *
             * MT safe.
             * @param pending_id #GstClockID
             */
            process_id(pending_id: Gst.ClockID): boolean;
            /**
             * Processes and releases the pending IDs in the list.
             *
             * MT safe.
             * @param pending_list List     of pending #GstClockIDs
             */
            process_id_list(pending_list?: Gst.ClockID[] | null): number;
            /**
             * MT safe.
             * @returns a #GstClockID containing the next pending clock notification.
             */
            process_next_clock_id(): Gst.ClockID | null;
            /**
             * Sets the time of `test_clock` to the time given by `new_time`. The time of
             * `test_clock` is monotonically increasing, therefore providing a `new_time`
             * which is earlier or equal to the time of the clock as given by
             * gst_clock_get_time() is a programming error.
             *
             * MT safe.
             * @param new_time a #GstClockTime later than that returned by gst_clock_get_time()
             */
            set_time(new_time: Gst.ClockTime): void;
            /**
             * Blocks until at least `count` clock notifications have been requested from
             * `test_clock,` or the timeout expires.
             *
             * MT safe.
             * @param count the number of pending clock notifications to wait for
             * @param timeout_ms the timeout in milliseconds
             * @returns a @gboolean %TRUE if the waits have been registered, %FALSE if not. (Could be that it timed out waiting or that more waits than waits was found)
             */
            timed_wait_for_multiple_pending_ids(count: number, timeout_ms: number): [boolean, Gst.ClockID[] | null];
            /**
             * Blocks until at least `count` clock notifications have been requested from
             * `test_clock`. There is no timeout for this wait, see the main description of
             * #GstTestClock.
             *
             * MT safe.
             * @param count the number of pending clock notifications to wait for
             */
            wait_for_multiple_pending_ids(count: number): Gst.ClockID[] | null;
            /**
             * Waits until a clock notification is requested from `test_clock`. There is no
             * timeout for this wait, see the main description of #GstTestClock. A reference
             * to the pending clock notification is stored in `pending_id`.
             *
             * MT safe.
             */
            wait_for_next_pending_id(): Gst.ClockID | null;
            /**
             * Blocks until at least `count` clock notifications have been requested from
             * `test_clock`. There is no timeout for this wait, see the main description of
             * #GstTestClock.
             * @param count the number of pending clock notifications to wait for
             */
            wait_for_pending_id_count(count: number): void;
        }

        class CheckABIStruct {
            static $gtype: GObject.GType<CheckABIStruct>;

            // Fields

            name: string;
            size: number;
            abi_size: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                    size: number;
                    abi_size: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Opaque structure containing data about a log filter
         * function.
         */
        abstract class CheckLogFilter {
            static $gtype: GObject.GType<CheckLogFilter>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * #GstHarness is meant to make writing unit test for GStreamer much easier.
         * It can be thought of as a way of treating a #GstElement as a black box,
         * deterministically feeding it data, and controlling what data it outputs.
         *
         * The basic structure of #GstHarness is two "floating" #GstPads that connect
         * to the harnessed #GstElement src and sink #GstPads like so:
         *
         *
         * ```
         *           __________________________
         *  _____   |  _____            _____  |   _____
         * |     |  | |     |          |     | |  |     |
         * | src |--+-| sink|  Element | src |-+--| sink|
         * |_____|  | |_____|          |_____| |  |_____|
         *          |__________________________|
         *
         * ```
         *
         *
         * With this, you can now simulate any environment the #GstElement might find
         * itself in. By specifying the #GstCaps of the harness #GstPads, using
         * functions like gst_harness_set_src_caps() or gst_harness_set_sink_caps_str(),
         * you can test how the #GstElement interacts with different caps sets.
         *
         * Your harnessed #GstElement can of course also be a bin, and using
         * gst_harness_new_parse() supporting standard gst-launch syntax, you can
         * easily test a whole pipeline instead of just one element.
         *
         * You can then go on to push #GstBuffers and #GstEvents on to the srcpad,
         * using functions like gst_harness_push() and gst_harness_push_event(), and
         * then pull them out to examine them with gst_harness_pull() and
         * gst_harness_pull_event().
         *
         * ## A simple buffer-in buffer-out example
         *
         *
         * ```c
         *   #include <gst/gst.h>
         *   #include <gst/check/gstharness.h>
         *   GstHarness *h;
         *   GstBuffer *in_buf;
         *   GstBuffer *out_buf;
         *
         *   // attach the harness to the src and sink pad of GstQueue
         *   h = gst_harness_new ("queue");
         *
         *   // we must specify a caps before pushing buffers
         *   gst_harness_set_src_caps_str (h, "mycaps");
         *
         *   // create a buffer of size 42
         *   in_buf = gst_harness_create_buffer (h, 42);
         *
         *   // push the buffer into the queue
         *   gst_harness_push (h, in_buf);
         *
         *   // pull the buffer from the queue
         *   out_buf = gst_harness_pull (h);
         *
         *   // validate the buffer in is the same as buffer out
         *   fail_unless (in_buf == out_buf);
         *
         *   // cleanup
         *   gst_buffer_unref (out_buf);
         *   gst_harness_teardown (h);
         *
         *   ```
         *
         *
         * Another main feature of the #GstHarness is its integration with the
         * #GstTestClock. Operating the #GstTestClock can be very challenging, but
         * #GstHarness simplifies some of the most desired actions a lot, like wanting
         * to manually advance the clock while at the same time releasing a #GstClockID
         * that is waiting, with functions like gst_harness_crank_single_clock_wait().
         *
         * #GstHarness also supports sub-harnesses, as a way of generating and
         * validating data. A sub-harness is another #GstHarness that is managed by
         * the "parent" harness, and can either be created by using the standard
         * gst_harness_new type functions directly on the (GstHarness *)->src_harness,
         * or using the much more convenient gst_harness_add_src() or
         * gst_harness_add_sink_parse(). If you have a decoder-element you want to test,
         * (like vp8dec) it can be very useful to add a src-harness with both a
         * src-element (videotestsrc) and an encoder (vp8enc) to feed the decoder data
         * with different configurations, by simply doing:
         *
         *
         * ```c
         *   GstHarness * h = gst_harness_new ("vp8dec");
         *   gst_harness_add_src_parse (h, "videotestsrc is-live=1 ! vp8enc", TRUE);
         * ```
         *
         *
         * and then feeding it data with:
         *
         *
         * ```c
         * gst_harness_push_from_src (h);
         * ```
         *
         */
        class Harness {
            static $gtype: GObject.GType<Harness>;

            // Fields

            element: Gst.Element;
            srcpad: Gst.Pad;
            sinkpad: Gst.Pad;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Stop the running #GstHarnessThread
             *
             * MT safe.
             * @param t a #GstHarnessThread
             */
            static stress_thread_stop(t: HarnessThread): number;

            // Methods

            /**
             * Links the specified #GstPad the `GstHarness` srcpad.
             *
             * MT safe.
             * @param sinkpad a #GstPad to link to the harness srcpad
             */
            add_element_sink_pad(sinkpad: Gst.Pad): void;
            /**
             * Links the specified #GstPad the `GstHarness` sinkpad. This can be useful if
             * perhaps the srcpad did not exist at the time of creating the harness,
             * like a demuxer that provides a sometimes-pad after receiving data.
             *
             * MT safe.
             * @param srcpad a #GstPad to link to the harness sinkpad
             */
            add_element_src_pad(srcpad: Gst.Pad): void;
            /**
             * A convenience function to allows you to call gst_pad_add_probe on a
             * #GstPad of a #GstElement that are residing inside the #GstHarness,
             * by using normal gst_pad_add_probe syntax
             *
             * MT safe.
             * @param element_name a #gchar with a #GstElementFactory name
             * @param pad_name a #gchar with the name of the pad to attach the probe to
             * @param mask a #GstPadProbeType (see gst_pad_add_probe)
             * @param callback a #GstPadProbeCallback (see gst_pad_add_probe)
             */
            add_probe(
                element_name: string,
                pad_name: string,
                mask: Gst.PadProbeType,
                callback: Gst.PadProbeCallback,
            ): void;
            /**
             * Add api with params as one of the supported metadata API to propose when
             * receiving an allocation query.
             *
             * MT safe.
             * @param api a metadata API
             * @param params API specific parameters
             */
            add_propose_allocation_meta(api: GObject.GType, params?: Gst.Structure | null): void;
            /**
             * Similar to gst_harness_add_sink_harness, this is a convenience to
             * directly create a sink-harness using the `sink_element_name` name specified.
             *
             * MT safe.
             * @param sink_element_name a #gchar with the name of a #GstElement
             */
            add_sink(sink_element_name: string): void;
            /**
             * Similar to gst_harness_add_src, this allows you to send the data coming out
             * of your harnessed #GstElement to a sink-element, allowing to test different
             * responses the element output might create in sink elements. An example might
             * be an existing sink providing some analytical data on the input it receives that
             * can be useful to your testing. If the goal is to test a sink-element itself,
             * this is better achieved using gst_harness_new directly on the sink.
             *
             * If a sink-harness already exists it will be replaced.
             *
             * MT safe.
             * @param sink_harness a #GstHarness to be added as a sink-harness.
             */
            add_sink_harness(sink_harness: Harness): void;
            /**
             * Similar to gst_harness_add_sink, this allows you to specify a launch-line
             * instead of just an element name. See gst_harness_add_src_parse for details.
             *
             * MT safe.
             * @param launchline a #gchar with the name of a #GstElement
             */
            add_sink_parse(launchline: string): void;
            /**
             * Similar to gst_harness_add_src_harness, this is a convenience to
             * directly create a src-harness using the `src_element_name` name specified.
             *
             * MT safe.
             * @param src_element_name a #gchar with the name of a #GstElement
             * @param has_clock_wait a #gboolean specifying if the #GstElement uses gst_clock_wait_id internally.
             */
            add_src(src_element_name: string, has_clock_wait: boolean): void;
            /**
             * A src-harness is a great way of providing the #GstHarness with data.
             * By adding a src-type #GstElement, it is then easy to use functions like
             * gst_harness_push_from_src or gst_harness_src_crank_and_push_many
             * to provide your harnessed element with input. The `has_clock_wait` variable
             * is a great way to control you src-element with, in that you can have it
             * produce a buffer for you by simply cranking the clock, and not have it
             * spin out of control producing buffers as fast as possible.
             *
             * If a src-harness already exists it will be replaced.
             *
             * MT safe.
             * @param src_harness a #GstHarness to be added as a src-harness.
             * @param has_clock_wait a #gboolean specifying if the #GstElement uses gst_clock_wait_id internally.
             */
            add_src_harness(src_harness: Harness, has_clock_wait: boolean): void;
            /**
             * Similar to gst_harness_add_src, this allows you to specify a launch-line,
             * which can be useful for both having more then one #GstElement acting as your
             * src (Like a src producing raw buffers, and then an encoder, providing encoded
             * data), but also by allowing you to set properties like "is-live" directly on
             * the elements.
             *
             * MT safe.
             * @param launchline a #gchar describing a gst-launch type line
             * @param has_clock_wait a #gboolean specifying if the #GstElement uses gst_clock_wait_id internally.
             */
            add_src_parse(launchline: string, has_clock_wait: boolean): void;
            /**
             * The number of #GstBuffers currently in the #GstHarness sinkpad #GAsyncQueue
             *
             * MT safe.
             * @returns a #guint number of buffers in the queue
             */
            buffers_in_queue(): number;
            /**
             * The total number of #GstBuffers that has arrived on the #GstHarness sinkpad.
             * This number includes buffers that have been dropped as well as buffers
             * that have already been pulled out.
             *
             * MT safe.
             * @returns a #guint number of buffers received
             */
            buffers_received(): number;
            /**
             * Similar to gst_harness_crank_single_clock_wait(), this is the function to use
             * if your harnessed element(s) are using more then one gst_clock_id_wait.
             * Failing to do so can (and will) make it racy which #GstClockID you actually
             * are releasing, where as this function will process all the waits at the
             * same time, ensuring that one thread can't register another wait before
             * both are released.
             *
             * MT safe.
             * @param waits a #guint describing the number of #GstClockIDs to crank
             * @returns a @gboolean %TRUE if the "crank" was successful, %FALSE if not.
             */
            crank_multiple_clock_waits(waits: number): boolean;
            /**
             * A "crank" consists of three steps:
             * 1: Wait for a #GstClockID to be registered with the #GstTestClock.
             * 2: Advance the #GstTestClock to the time the #GstClockID is waiting for.
             * 3: Release the #GstClockID wait.
             * Together, this provides an easy way to not have to think about the details
             * around clocks and time, but still being able to write deterministic tests
             * that are dependent on this. A "crank" can be though of as the notion of
             * manually driving the clock forward to its next logical step.
             *
             * MT safe.
             * @returns a @gboolean %TRUE if the "crank" was successful, %FALSE if not.
             */
            crank_single_clock_wait(): boolean;
            /**
             * Allocates a buffer using a #GstBufferPool if present, or else using the
             * configured #GstAllocator and #GstAllocationParams
             *
             * MT safe.
             * @param size a #gsize specifying the size of the buffer
             * @returns a #GstBuffer of size @size
             */
            create_buffer(size: number): Gst.Buffer;
            /**
             * Allows you to dump the #GstBuffers the #GstHarness sinkpad #GAsyncQueue
             * to a file.
             *
             * MT safe.
             * @param filename a #gchar with a the name of a file
             */
            dump_to_file(filename: string): void;
            /**
             * The number of #GstEvents currently in the #GstHarness sinkpad #GAsyncQueue
             *
             * MT safe.
             * @returns a #guint number of events in the queue
             */
            events_in_queue(): number;
            /**
             * The total number of #GstEvents that has arrived on the #GstHarness sinkpad
             * This number includes events handled by the harness as well as events
             * that have already been pulled out.
             *
             * MT safe.
             * @returns a #guint number of events received
             */
            events_received(): number;
            /**
             * Most useful in conjunction with gst_harness_new_parse, this will scan the
             * #GstElements inside the #GstHarness, and check if any of them matches
             * `element_name`. Typical usecase being that you need to access one of the
             * harnessed elements for properties and/or signals.
             *
             * MT safe.
             * @param element_name a #gchar with a #GstElementFactory name
             * @returns a #GstElement or %NULL if not found
             */
            find_element(element_name: string): Gst.Element | null;
            /**
             * Gets the `allocator` and its `params` that has been decided to use after an
             * allocation query.
             *
             * MT safe.
             */
            get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
            /**
             * Get the timestamp of the last #GstBuffer pushed on the #GstHarness srcpad,
             * typically with gst_harness_push or gst_harness_push_from_src.
             *
             * MT safe.
             * @returns a #GstClockTime with the timestamp or %GST_CLOCK_TIME_NONE if no #GstBuffer has been pushed on the #GstHarness srcpad
             */
            get_last_pushed_timestamp(): Gst.ClockTime;
            /**
             * Get the #GstTestClock. Useful if specific operations on the testclock is
             * needed.
             *
             * MT safe.
             * @returns a #GstTestClock, or %NULL if the testclock is not present.
             */
            get_testclock(): TestClock | null;
            /**
             * This will set the harnessed #GstElement to %GST_STATE_PLAYING.
             * #GstElements without a sink-#GstPad and with the %GST_ELEMENT_FLAG_SOURCE
             * flag set is considered a src #GstElement
             * Non-src #GstElements (like sinks and filters) are automatically set to
             * playing by the #GstHarness, but src #GstElements are not to avoid them
             * starting to produce buffers.
             * Hence, for src #GstElement you must call gst_harness_play() explicitly.
             *
             * MT safe.
             */
            play(): void;
            /**
             * Pulls a #GstBuffer from the #GAsyncQueue on the #GstHarness sinkpad. The pull
             * will timeout in 60 seconds. This is the standard way of getting a buffer
             * from a harnessed #GstElement.
             *
             * MT safe.
             * @returns a #GstBuffer or %NULL if timed out.
             */
            pull(): Gst.Buffer | null;
            /**
             * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness sinkpad.
             * Timeouts after 60 seconds similar to gst_harness_pull.
             *
             * MT safe.
             * @returns a #GstEvent or %NULL if timed out.
             */
            pull_event(): Gst.Event | null;
            /**
             * Pulls a #GstBuffer from the #GAsyncQueue on the #GstHarness sinkpad. The pull
             * will block until an EOS event is received, or timeout in 60 seconds.
             * MT safe.
             * @returns %TRUE on success, %FALSE on timeout.
             */
            pull_until_eos(): [boolean, Gst.Buffer | null];
            /**
             * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness srcpad.
             * Timeouts after 60 seconds similar to gst_harness_pull.
             *
             * MT safe.
             * @returns a #GstEvent or %NULL if timed out.
             */
            pull_upstream_event(): Gst.Event | null;
            /**
             * Pushes a #GstBuffer on the #GstHarness srcpad. The standard way of
             * interacting with an harnessed element.
             *
             * MT safe.
             * @param buffer a #GstBuffer to push
             * @returns a #GstFlowReturn with the result from the push
             */
            push(buffer: Gst.Buffer): Gst.FlowReturn;
            /**
             * Basically a gst_harness_push and a gst_harness_pull in one line. Reflects
             * the fact that you often want to do exactly this in your test: Push one buffer
             * in, and inspect the outcome.
             *
             * MT safe.
             * @param buffer a #GstBuffer to push
             * @returns a #GstBuffer or %NULL if timed out.
             */
            push_and_pull(buffer: Gst.Buffer): Gst.Buffer | null;
            /**
             * Pushes an #GstEvent on the #GstHarness srcpad.
             *
             * MT safe.
             * @param event a #GstEvent to push
             * @returns a #gboolean with the result from the push
             */
            push_event(event: Gst.Event): boolean;
            /**
             * Transfer data from the src-#GstHarness to the main-#GstHarness. It consists
             * of 4 steps:
             * 1: Make sure the src is started. (see: gst_harness_play)
             * 2: Crank the clock (see: gst_harness_crank_single_clock_wait)
             * 3: Pull a #GstBuffer from the src-#GstHarness (see: gst_harness_pull)
             * 4: Push the same #GstBuffer into the main-#GstHarness (see: gst_harness_push)
             *
             * MT safe.
             * @returns a #GstFlowReturn with the result of the push
             */
            push_from_src(): Gst.FlowReturn;
            /**
             * Transfer one #GstBuffer from the main-#GstHarness to the sink-#GstHarness.
             * See gst_harness_push_from_src for details.
             *
             * MT safe.
             * @returns a #GstFlowReturn with the result of the push
             */
            push_to_sink(): Gst.FlowReturn;
            /**
             * Pushes an #GstEvent on the #GstHarness sinkpad.
             *
             * MT safe.
             * @param event a #GstEvent to push
             * @returns a #gboolean with the result from the push
             */
            push_upstream_event(event: Gst.Event): boolean;
            /**
             * Get the min latency reported by any harnessed #GstElement.
             *
             * MT safe.
             * @returns a #GstClockTime with min latency
             */
            query_latency(): Gst.ClockTime;
            /**
             * Setting this will make the harness block in the chain-function, and
             * then release when gst_harness_pull() or gst_harness_try_pull() is called.
             * Can be useful when wanting to control a src-element that is not implementing
             * gst_clock_id_wait() so it can't be controlled by the #GstTestClock, since
             * it otherwise would produce buffers as fast as possible.
             *
             * MT safe.
             */
            set_blocking_push_mode(): void;
            /**
             * Sets the `GstHarness` srcpad and sinkpad caps.
             *
             * MT safe.
             * @param _in a #GstCaps to set on the harness srcpad
             * @param out a #GstCaps to set on the harness sinkpad
             */
            set_caps(_in: Gst.Caps, out: Gst.Caps): void;
            /**
             * Sets the `GstHarness` srcpad and sinkpad caps using strings.
             *
             * MT safe.
             * @param _in a @gchar describing a #GstCaps to set on the harness srcpad
             * @param out a @gchar describing a #GstCaps to set on the harness sinkpad
             */
            set_caps_str(_in: string, out: string): void;
            /**
             * When set to %TRUE, instead of placing the buffers arriving from the harnessed
             * #GstElement inside the sinkpads #GAsyncQueue, they are instead unreffed.
             *
             * MT safe.
             * @param drop_buffers a #gboolean specifying to drop outgoing buffers or not
             */
            set_drop_buffers(drop_buffers: boolean): void;
            /**
             * As a convenience, a src-harness will forward %GST_EVENT_STREAM_START,
             * %GST_EVENT_CAPS and %GST_EVENT_SEGMENT to the main-harness if forwarding
             * is enabled, and forward any sticky-events from the main-harness to
             * the sink-harness. It will also forward the %GST_QUERY_ALLOCATION.
             *
             * If forwarding is disabled, the user will have to either manually push
             * these events from the src-harness using gst_harness_src_push_event(), or
             * create and push them manually. While this will allow full control and
             * inspection of these events, for the most cases having forwarding enabled
             * will be sufficient when writing a test where the src-harness' main function
             * is providing data for the main-harness.
             *
             * Forwarding is enabled by default.
             *
             * MT safe.
             * @param forwarding a #gboolean to enable/disable forwarding
             */
            set_forwarding(forwarding: boolean): void;
            /**
             * Sets the liveness reported by #GstHarness when receiving a latency-query.
             * The default is %TRUE.
             * @param is_live %TRUE for live, %FALSE for non-live
             */
            set_live(is_live: boolean): void;
            /**
             * Sets the `allocator` and `params` to propose when receiving an allocation
             * query.
             *
             * MT safe.
             * @param allocator a #GstAllocator
             * @param params a #GstAllocationParams
             */
            set_propose_allocator(allocator?: Gst.Allocator | null, params?: Gst.AllocationParams | null): void;
            /**
             * Sets the `GstHarness` sinkpad caps.
             *
             * MT safe.
             * @param caps a #GstCaps to set on the harness sinkpad
             */
            set_sink_caps(caps: Gst.Caps): void;
            /**
             * Sets the `GstHarness` sinkpad caps using a string.
             *
             * MT safe.
             * @param str a @gchar describing a #GstCaps to set on the harness sinkpad
             */
            set_sink_caps_str(str: string): void;
            /**
             * Sets the `GstHarness` srcpad caps. This must be done before any buffers
             * can legally be pushed from the harness to the element.
             *
             * MT safe.
             * @param caps a #GstCaps to set on the harness srcpad
             */
            set_src_caps(caps: Gst.Caps): void;
            /**
             * Sets the `GstHarness` srcpad caps using a string. This must be done before
             * any buffers can legally be pushed from the harness to the element.
             *
             * MT safe.
             * @param str a @gchar describing a #GstCaps to set on the harness srcpad
             */
            set_src_caps_str(str: string): void;
            /**
             * Advance the #GstTestClock to a specific time.
             *
             * MT safe.
             * @param time a #GstClockTime to advance the clock to
             * @returns a @gboolean %TRUE if the time could be set. %FALSE if not.
             */
            set_time(time: Gst.ClockTime): boolean;
            /**
             * Sets the min latency reported by #GstHarness when receiving a latency-query
             * @param latency a #GstClockTime specifying the latency
             */
            set_upstream_latency(latency: Gst.ClockTime): void;
            /**
             * Convenience that calls gst_harness_push_to_sink `pushes` number of times.
             * Will abort the pushing if any one push fails.
             *
             * MT safe.
             * @param pushes a #gint with the number of calls to gst_harness_push_to_sink
             * @returns a #GstFlowReturn with the result of the push
             */
            sink_push_many(pushes: number): Gst.FlowReturn;
            /**
             * Transfer data from the src-#GstHarness to the main-#GstHarness. Similar to
             * gst_harness_push_from_src, this variant allows you to specify how many cranks
             * and how many pushes to perform. This can be useful for both moving a lot
             * of data at the same time, as well as cases when one crank does not equal one
             * buffer to push and v.v.
             *
             * MT safe.
             * @param cranks a #gint with the number of calls to gst_harness_crank_single_clock_wait
             * @param pushes a #gint with the number of calls to gst_harness_push
             * @returns a #GstFlowReturn with the result of the push
             */
            src_crank_and_push_many(cranks: number, pushes: number): Gst.FlowReturn;
            /**
             * Similar to what gst_harness_src_push does with #GstBuffers, this transfers
             * a #GstEvent from the src-#GstHarness to the main-#GstHarness. Note that
             * some #GstEvents are being transferred automagically. Look at sink_forward_pad
             * for details.
             *
             * MT safe.
             * @returns a #gboolean with the result of the push
             */
            src_push_event(): boolean;
            /**
             * Pulls all pending data from the harness and returns it as a single buffer.
             * @returns the data as a buffer. Unref with gst_buffer_unref()     when no longer needed.
             */
            take_all_data_as_buffer(): Gst.Buffer;
            /**
             * Pulls all pending data from the harness and returns it as a single #GBytes.
             * @returns a pointer to the data, newly allocated. Free     with g_free() when no longer needed.
             */
            take_all_data(): GLib.Bytes;
            /**
             * Tears down a `GstHarness,` freeing all resources allocated using it.
             *
             * MT safe.
             */
            teardown(): void;
            /**
             * Pulls a #GstBuffer from the #GAsyncQueue on the #GstHarness sinkpad. Unlike
             * gst_harness_pull this will not wait for any buffers if not any are present,
             * and return %NULL straight away.
             *
             * MT safe.
             * @returns a #GstBuffer or %NULL if no buffers are present in the #GAsyncQueue
             */
            try_pull(): Gst.Buffer | null;
            /**
             * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness sinkpad.
             * See gst_harness_try_pull for details.
             *
             * MT safe.
             * @returns a #GstEvent or %NULL if no buffers are present in the #GAsyncQueue
             */
            try_pull_event(): Gst.Event | null;
            /**
             * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness srcpad.
             * See gst_harness_try_pull for details.
             *
             * MT safe.
             * @returns a #GstEvent or %NULL if no buffers are present in the #GAsyncQueue
             */
            try_pull_upstream_event(): Gst.Event | null;
            /**
             * The number of #GstEvents currently in the #GstHarness srcpad #GAsyncQueue
             *
             * MT safe.
             * @returns a #guint number of events in the queue
             */
            upstream_events_in_queue(): number;
            /**
             * The total number of #GstEvents that has arrived on the #GstHarness srcpad
             * This number includes events handled by the harness as well as events
             * that have already been pulled out.
             *
             * MT safe.
             * @returns a #guint number of events received
             */
            upstream_events_received(): number;
            /**
             * Sets the system #GstClock on the `GstHarness` #GstElement
             *
             * MT safe.
             */
            use_systemclock(): void;
            /**
             * Sets the #GstTestClock on the #GstHarness #GstElement
             *
             * MT safe.
             */
            use_testclock(): void;
            /**
             * Waits for `timeout` seconds until `waits` number of #GstClockID waits is
             * registered with the #GstTestClock. Useful for writing deterministic tests,
             * where you want to make sure that an expected number of waits have been
             * reached.
             *
             * MT safe.
             * @param waits a #guint describing the numbers of #GstClockID registered with the #GstTestClock
             * @param timeout a #guint describing how many seconds to wait for @waits to be true
             * @returns a @gboolean %TRUE if the waits have been registered, %FALSE if not. (Could be that it timed out waiting or that more waits than waits was found)
             */
            wait_for_clock_id_waits(waits: number, timeout: number): boolean;
        }

        abstract class HarnessPrivate {
            static $gtype: GObject.GType<HarnessPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Opaque handle representing a GstHarness stress testing thread.
         */
        abstract class HarnessThread {
            static $gtype: GObject.GType<HarnessThread>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Opaque consistency checker handle.
         */
        abstract class StreamConsistency {
            static $gtype: GObject.GType<StreamConsistency>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TestClockClass = typeof TestClock;
        abstract class TestClockPrivate {
            static $gtype: GObject.GType<TestClockPrivate>;

            // Constructors

            _init(...args: any[]): void;
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

    export default GstCheck;
}

declare module 'gi://GstCheck' {
    import GstCheck10 from 'gi://GstCheck?version=1.0';
    export default GstCheck10;
}
// END
