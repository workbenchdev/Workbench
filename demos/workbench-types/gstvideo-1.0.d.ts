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

declare module 'gi://GstVideo?version=1.0' {
    // Module dependencies
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstVideo {
        /**
         * GstVideo-1.0
         */

        /**
         * Location of a `GstAncillaryMeta`.
         */

        /**
         * Location of a `GstAncillaryMeta`.
         */
        export namespace AncillaryMetaField {
            export const $gtype: GObject.GType<AncillaryMetaField>;
        }

        enum AncillaryMetaField {
            /**
             * Progressive or no field specified (default)
             */
            PROGRESSIVE,
            /**
             * Interlaced first field
             */
            INTERLACED_FIRST,
            /**
             * Interlaced second field
             */
            INTERLACED_SECOND,
        }
        /**
         * An enumeration indicating whether an element implements color balancing
         * operations in software or in dedicated hardware. In general, dedicated
         * hardware implementations (such as those provided by xvimagesink) are
         * preferred.
         */

        /**
         * An enumeration indicating whether an element implements color balancing
         * operations in software or in dedicated hardware. In general, dedicated
         * hardware implementations (such as those provided by xvimagesink) are
         * preferred.
         */
        export namespace ColorBalanceType {
            export const $gtype: GObject.GType<ColorBalanceType>;
        }

        enum ColorBalanceType {
            /**
             * Color balance is implemented with dedicated
             *         hardware.
             */
            HARDWARE,
            /**
             * Color balance is implemented via software
             *         processing.
             */
            SOFTWARE,
        }
        /**
         * A set of commands that may be issued to an element providing the
         * #GstNavigation interface. The available commands can be queried via
         * the gst_navigation_query_new_commands() query.
         *
         * For convenience in handling DVD navigation, the MENU commands are aliased as:
         *    GST_NAVIGATION_COMMAND_DVD_MENU            = `GST_NAVIGATION_COMMAND_MENU1`
         *    GST_NAVIGATION_COMMAND_DVD_TITLE_MENU      = `GST_NAVIGATION_COMMAND_MENU2`
         *    GST_NAVIGATION_COMMAND_DVD_ROOT_MENU       = `GST_NAVIGATION_COMMAND_MENU3`
         *    GST_NAVIGATION_COMMAND_DVD_SUBPICTURE_MENU = `GST_NAVIGATION_COMMAND_MENU4`
         *    GST_NAVIGATION_COMMAND_DVD_AUDIO_MENU      = `GST_NAVIGATION_COMMAND_MENU5`
         *    GST_NAVIGATION_COMMAND_DVD_ANGLE_MENU      = `GST_NAVIGATION_COMMAND_MENU6`
         *    GST_NAVIGATION_COMMAND_DVD_CHAPTER_MENU    = `GST_NAVIGATION_COMMAND_MENU7`
         */

        /**
         * A set of commands that may be issued to an element providing the
         * #GstNavigation interface. The available commands can be queried via
         * the gst_navigation_query_new_commands() query.
         *
         * For convenience in handling DVD navigation, the MENU commands are aliased as:
         *    GST_NAVIGATION_COMMAND_DVD_MENU            = `GST_NAVIGATION_COMMAND_MENU1`
         *    GST_NAVIGATION_COMMAND_DVD_TITLE_MENU      = `GST_NAVIGATION_COMMAND_MENU2`
         *    GST_NAVIGATION_COMMAND_DVD_ROOT_MENU       = `GST_NAVIGATION_COMMAND_MENU3`
         *    GST_NAVIGATION_COMMAND_DVD_SUBPICTURE_MENU = `GST_NAVIGATION_COMMAND_MENU4`
         *    GST_NAVIGATION_COMMAND_DVD_AUDIO_MENU      = `GST_NAVIGATION_COMMAND_MENU5`
         *    GST_NAVIGATION_COMMAND_DVD_ANGLE_MENU      = `GST_NAVIGATION_COMMAND_MENU6`
         *    GST_NAVIGATION_COMMAND_DVD_CHAPTER_MENU    = `GST_NAVIGATION_COMMAND_MENU7`
         */
        export namespace NavigationCommand {
            export const $gtype: GObject.GType<NavigationCommand>;
        }

        enum NavigationCommand {
            /**
             * An invalid command entry
             */
            INVALID,
            /**
             * Execute navigation menu command 1. For DVD,
             * this enters the DVD root menu, or exits back to the title from the menu.
             */
            MENU1,
            /**
             * Execute navigation menu command 2. For DVD,
             * this jumps to the DVD title menu.
             */
            MENU2,
            /**
             * Execute navigation menu command 3. For DVD,
             * this jumps into the DVD root menu.
             */
            MENU3,
            /**
             * Execute navigation menu command 4. For DVD,
             * this jumps to the Subpicture menu.
             */
            MENU4,
            /**
             * Execute navigation menu command 5. For DVD,
             * the jumps to the audio menu.
             */
            MENU5,
            /**
             * Execute navigation menu command 6. For DVD,
             * this jumps to the angles menu.
             */
            MENU6,
            /**
             * Execute navigation menu command 7. For DVD,
             * this jumps to the chapter menu.
             */
            MENU7,
            /**
             * Select the next button to the left in a menu,
             * if such a button exists.
             */
            LEFT,
            /**
             * Select the next button to the right in a menu,
             * if such a button exists.
             */
            RIGHT,
            /**
             * Select the button above the current one in a
             * menu, if such a button exists.
             */
            UP,
            /**
             * Select the button below the current one in a
             * menu, if such a button exists.
             */
            DOWN,
            /**
             * Activate (click) the currently selected
             * button in a menu, if such a button exists.
             */
            ACTIVATE,
            /**
             * Switch to the previous angle in a
             * multiangle feature.
             */
            PREV_ANGLE,
            /**
             * Switch to the next angle in a multiangle
             * feature.
             */
            NEXT_ANGLE,
        }
        /**
         * Enum values for the various events that an element implementing the
         * GstNavigation interface might send up the pipeline. Touch events have been
         * inspired by the libinput API, and have the same meaning here.
         */

        /**
         * Enum values for the various events that an element implementing the
         * GstNavigation interface might send up the pipeline. Touch events have been
         * inspired by the libinput API, and have the same meaning here.
         */
        export namespace NavigationEventType {
            export const $gtype: GObject.GType<NavigationEventType>;
        }

        enum NavigationEventType {
            /**
             * Returned from
             * gst_navigation_event_get_type() when the passed event is not a navigation event.
             */
            INVALID,
            /**
             * A key press event. Use
             * gst_navigation_event_parse_key_event() to extract the details from the event.
             */
            KEY_PRESS,
            /**
             * A key release event. Use
             * gst_navigation_event_parse_key_event() to extract the details from the event.
             */
            KEY_RELEASE,
            /**
             * A mouse button press event. Use
             * gst_navigation_event_parse_mouse_button_event() to extract the details from the
             * event.
             */
            MOUSE_BUTTON_PRESS,
            /**
             * A mouse button release event. Use
             * gst_navigation_event_parse_mouse_button_event() to extract the details from the
             * event.
             */
            MOUSE_BUTTON_RELEASE,
            /**
             * A mouse movement event. Use
             * gst_navigation_event_parse_mouse_move_event() to extract the details from the
             * event.
             */
            MOUSE_MOVE,
            /**
             * A navigation command event. Use
             * gst_navigation_event_parse_command() to extract the details from the event.
             */
            COMMAND,
            /**
             * A mouse scroll event. Use gst_navigation_event_parse_mouse_scroll_event()
             * to extract the details from the event.
             */
            MOUSE_SCROLL,
            /**
             * An event describing a new touch point, which will be assigned an identifier
             * that is unique to it for the duration of its movement on the screen.
             * Use gst_navigation_event_parse_touch_event() to extract the details
             * from the event.
             */
            TOUCH_DOWN,
            /**
             * An event describing the movement of an active touch point across
             * the screen. Use gst_navigation_event_parse_touch_event() to extract
             * the details from the event.
             */
            TOUCH_MOTION,
            /**
             * An event describing a removed touch point. After this event,
             * its identifier may be reused for any new touch points.
             * Use gst_navigation_event_parse_touch_up_event() to extract the details
             * from the event.
             */
            TOUCH_UP,
            /**
             * An event signaling the end of a sequence of simultaneous touch events.
             */
            TOUCH_FRAME,
            /**
             * An event cancelling all currently active touch points.
             */
            TOUCH_CANCEL,
        }
        /**
         * A set of notifications that may be received on the bus when navigation
         * related status changes.
         */

        /**
         * A set of notifications that may be received on the bus when navigation
         * related status changes.
         */
        export namespace NavigationMessageType {
            export const $gtype: GObject.GType<NavigationMessageType>;
        }

        enum NavigationMessageType {
            /**
             * Returned from
             * gst_navigation_message_get_type() when the passed message is not a
             * navigation message.
             */
            INVALID,
            /**
             * Sent when the mouse moves over or leaves a
             * clickable region of the output, such as a DVD menu button.
             */
            MOUSE_OVER,
            /**
             * Sent when the set of available commands
             * changes and should re-queried by interested applications.
             */
            COMMANDS_CHANGED,
            /**
             * Sent when display angles in a multi-angle
             * feature (such as a multiangle DVD) change - either angles have appeared or
             * disappeared.
             */
            ANGLES_CHANGED,
            /**
             * Sent when a navigation event was not handled
             * by any element in the pipeline (Since: 1.6)
             */
            EVENT,
        }
        /**
         * Types of navigation interface queries.
         */

        /**
         * Types of navigation interface queries.
         */
        export namespace NavigationQueryType {
            export const $gtype: GObject.GType<NavigationQueryType>;
        }

        enum NavigationQueryType {
            /**
             * invalid query
             */
            INVALID,
            /**
             * command query
             */
            COMMANDS,
            /**
             * viewing angle query
             */
            ANGLES,
        }
        /**
         * Enumeration of the different standards that may apply to AFD data:
         *
         * 0) ETSI/DVB:
         * https://www.etsi.org/deliver/etsi_ts/101100_101199/101154/02.01.01_60/ts_101154v020101p.pdf
         *
         * 1) ATSC A/53:
         * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
         *
         * 2) SMPTE ST2016-1:
         */

        /**
         * Enumeration of the different standards that may apply to AFD data:
         *
         * 0) ETSI/DVB:
         * https://www.etsi.org/deliver/etsi_ts/101100_101199/101154/02.01.01_60/ts_101154v020101p.pdf
         *
         * 1) ATSC A/53:
         * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
         *
         * 2) SMPTE ST2016-1:
         */
        export namespace VideoAFDSpec {
            export const $gtype: GObject.GType<VideoAFDSpec>;
        }

        enum VideoAFDSpec {
            /**
             * AFD value is from DVB/ETSI standard
             */
            DVB_ETSI,
            /**
             * AFD value is from ATSC A/53 standard
             */
            ATSC_A53,
            SMPTE_ST2016_1,
        }
        /**
         * Enumeration of the various values for Active Format Description (AFD)
         *
         * AFD should be included in video user data whenever the rectangular
         * picture area containing useful information does not extend to the full height or width of the coded
         * frame. AFD data may also be included in user data when the rectangular picture area containing
         * useful information extends to the full height and width of the coded frame.
         *
         * For details, see Table 6.14 Active Format in:
         *
         * ATSC Digital Television Standard:
         * Part 4 – MPEG-2 Video System Characteristics
         *
         * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
         *
         * and Active Format Description in Complete list of AFD codes
         *
         * https://en.wikipedia.org/wiki/Active_Format_Description#Complete_list_of_AFD_codes
         *
         * and SMPTE ST2016-1
         *
         * Notes:
         *
         * 1) AFD 0 is undefined for ATSC and SMPTE ST2016-1, indicating that AFD data is not available:
         * If Bar Data is not present, AFD '0000' indicates that exact information
         * is not available and the active image should be assumed to be the same as the coded frame. AFD '0000'.
         * AFD '0000' accompanied by Bar Data signals that the active image’s aspect ratio is narrower than 16:9,
         * but is not 4:3 or 14:9. As the exact aspect ratio cannot be conveyed by AFD alone, wherever possible,
         * AFD ‘0000’ should be accompanied by Bar Data to define the exact vertical or horizontal extent
         * of the active image.
         * 2) AFD 0 is reserved for DVB/ETSI
         * 3) values 1, 5, 6, 7, and 12 are reserved for both ATSC and DVB/ETSI
         * 4) values 2 and 3 are not recommended for ATSC, but are valid for DVB/ETSI
         */

        /**
         * Enumeration of the various values for Active Format Description (AFD)
         *
         * AFD should be included in video user data whenever the rectangular
         * picture area containing useful information does not extend to the full height or width of the coded
         * frame. AFD data may also be included in user data when the rectangular picture area containing
         * useful information extends to the full height and width of the coded frame.
         *
         * For details, see Table 6.14 Active Format in:
         *
         * ATSC Digital Television Standard:
         * Part 4 – MPEG-2 Video System Characteristics
         *
         * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
         *
         * and Active Format Description in Complete list of AFD codes
         *
         * https://en.wikipedia.org/wiki/Active_Format_Description#Complete_list_of_AFD_codes
         *
         * and SMPTE ST2016-1
         *
         * Notes:
         *
         * 1) AFD 0 is undefined for ATSC and SMPTE ST2016-1, indicating that AFD data is not available:
         * If Bar Data is not present, AFD '0000' indicates that exact information
         * is not available and the active image should be assumed to be the same as the coded frame. AFD '0000'.
         * AFD '0000' accompanied by Bar Data signals that the active image’s aspect ratio is narrower than 16:9,
         * but is not 4:3 or 14:9. As the exact aspect ratio cannot be conveyed by AFD alone, wherever possible,
         * AFD ‘0000’ should be accompanied by Bar Data to define the exact vertical or horizontal extent
         * of the active image.
         * 2) AFD 0 is reserved for DVB/ETSI
         * 3) values 1, 5, 6, 7, and 12 are reserved for both ATSC and DVB/ETSI
         * 4) values 2 and 3 are not recommended for ATSC, but are valid for DVB/ETSI
         */
        export namespace VideoAFDValue {
            export const $gtype: GObject.GType<VideoAFDValue>;
        }

        enum VideoAFDValue {
            /**
             * Unavailable (see note 0 below).
             */
            UNAVAILABLE,
            /**
             * For 4:3 coded frame, letterbox 16:9 image,
             *      at top of the coded frame. For 16:9 coded frame, full frame 16:9 image,
             *      the same as the coded frame.
             */
            '16_9_TOP_ALIGNED',
            /**
             * For 4:3 coded frame, letterbox 14:9 image,
             *      at top of the coded frame. For 16:9 coded frame, pillarbox 14:9 image,
             *      horizontally centered in the coded frame.
             */
            '14_9_TOP_ALIGNED',
            /**
             * For 4:3 coded frame, letterbox image with an aspect ratio
             *      greater than 16:9, vertically centered in the coded frame. For 16:9 coded frame,
             *      letterbox image with an aspect ratio greater than 16:9.
             */
            GREATER_THAN_16_9,
            /**
             * For 4:3 coded frame, full frame 4:3 image,
             *      the same as the coded frame. For 16:9 coded frame, full frame 16:9 image, the same as
             *      the coded frame.
             */
            '4_3_FULL_16_9_FULL',
            /**
             * For 4:3 coded frame, full frame 4:3 image, the same as
             *      the coded frame. For 16:9 coded frame, pillarbox 4:3 image, horizontally centered in the
             *      coded frame.
             */
            '4_3_FULL_4_3_PILLAR',
            /**
             * For 4:3 coded frame, letterbox 16:9 image, vertically centered in
             *      the coded frame with all image areas protected. For 16:9 coded frame, full frame 16:9 image,
             *      with all image areas protected.
             */
            '16_9_LETTER_16_9_FULL',
            /**
             * For 4:3 coded frame, letterbox 14:9 image, vertically centered in
             *      the coded frame. For 16:9 coded frame, pillarbox 14:9 image, horizontally centered in the
             *      coded frame.
             */
            '14_9_LETTER_14_9_PILLAR',
            /**
             * For 4:3 coded frame, full frame 4:3 image, with alternative 14:9
             *      center. For 16:9 coded frame, pillarbox 4:3 image, with alternative 14:9 center.
             */
            '4_3_FULL_14_9_CENTER',
            /**
             * For 4:3 coded frame, letterbox 16:9 image, with alternative 14:9
             *      center. For 16:9 coded frame, full frame 16:9 image, with alternative 14:9 center.
             */
            '16_9_LETTER_14_9_CENTER',
            /**
             * For 4:3 coded frame, letterbox 16:9 image, with alternative 4:3
             *      center. For 16:9 coded frame, full frame 16:9 image, with alternative 4:3 center.
             */
            '16_9_LETTER_4_3_CENTER',
        }
        /**
         * Different alpha modes.
         */

        /**
         * Different alpha modes.
         */
        export namespace VideoAlphaMode {
            export const $gtype: GObject.GType<VideoAlphaMode>;
        }

        enum VideoAlphaMode {
            /**
             * When input and output have alpha, it will be copied.
             *         When the input has no alpha, alpha will be set to
             *         #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE
             */
            COPY,
            /**
             * set all alpha to
             *    #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE
             */
            SET,
            /**
             * multiply all alpha with
             *         #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE.
             *         When the input format has no alpha but the output format has, the
             *         alpha value will be set to #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE
             */
            MULT,
        }

        export namespace VideoAncillaryDID {
            export const $gtype: GObject.GType<VideoAncillaryDID>;
        }

        enum VideoAncillaryDID {
            UNDEFINED,
            DELETION,
            HANC_3G_AUDIO_DATA_FIRST,
            HANC_3G_AUDIO_DATA_LAST,
            HANC_HDTV_AUDIO_DATA_FIRST,
            HANC_HDTV_AUDIO_DATA_LAST,
            HANC_SDTV_AUDIO_DATA_1_FIRST,
            HANC_SDTV_AUDIO_DATA_1_LAST,
            CAMERA_POSITION,
            HANC_ERROR_DETECTION,
            HANC_SDTV_AUDIO_DATA_2_FIRST,
            HANC_SDTV_AUDIO_DATA_2_LAST,
        }
        /**
         * Some know types of Ancillary Data identifiers.
         */

        /**
         * Some know types of Ancillary Data identifiers.
         */
        export namespace VideoAncillaryDID16 {
            export const $gtype: GObject.GType<VideoAncillaryDID16>;
        }

        enum VideoAncillaryDID16 {
            /**
             * CEA 708 Ancillary data according to SMPTE 334
             */
            S334_EIA_708,
            /**
             * CEA 608 Ancillary data according to SMPTE 334
             */
            S334_EIA_608,
            /**
             * AFD/Bar Ancillary data according to SMPTE 2016-3 (Since: 1.18)
             */
            S2016_3_AFD_BAR,
        }
        /**
         * The various known types of Closed Caption (CC).
         */

        /**
         * The various known types of Closed Caption (CC).
         */
        export namespace VideoCaptionType {
            export const $gtype: GObject.GType<VideoCaptionType>;
        }

        enum VideoCaptionType {
            /**
             * Unknown type of CC
             */
            UNKNOWN,
            /**
             * CEA-608 as byte pairs. Note that
             *      this format is not recommended since is does not specify to
             *      which field the caption comes from and therefore assumes
             *      it comes from the first field (and that there is no information
             *      on the second field). Use `GST_VIDEO_CAPTION_TYPE_CEA7`08_RAW
             *      if you wish to store CEA-608 from two fields and prefix each byte pair
             *      with 0xFC for the first field and 0xFD for the second field.
             */
            CEA608_RAW,
            /**
             * CEA-608 as byte triplets as defined
             *      in SMPTE S334-1 Annex A. The second and third byte of the byte triplet
             *      is the raw CEA608 data, the first byte is a bitfield: The top/7th bit is
             *      0 for the second field, 1 for the first field, bit 6 and 5 are 0 and
             *      bits 4 to 0 are a 5 bit unsigned integer that represents the line
             *      offset relative to the base-line of the original image format (line 9
             *      for 525-line field 1, line 272 for 525-line field 2, line 5 for
             *      625-line field 1 and line 318 for 625-line field 2).
             */
            CEA608_S334_1A,
            /**
             * CEA-708 as cc_data byte triplets. They
             *      can also contain 608-in-708 and the first byte of each triplet has to
             *      be inspected for detecting the type.
             */
            CEA708_RAW,
            /**
             * CEA-708 (and optionally CEA-608) in
             *      a CDP (Caption Distribution Packet) defined by SMPTE S-334-2.
             *      Contains the whole CDP (starting with 0x9669).
             */
            CEA708_CDP,
        }
        /**
         * Different subsampling and upsampling methods
         */

        /**
         * Different subsampling and upsampling methods
         */
        export namespace VideoChromaMethod {
            export const $gtype: GObject.GType<VideoChromaMethod>;
        }

        enum VideoChromaMethod {
            /**
             * Duplicates the chroma samples when
             *    upsampling and drops when subsampling
             */
            NEAREST,
            /**
             * Uses linear interpolation to reconstruct
             *    missing chroma and averaging to subsample
             */
            LINEAR,
        }
        /**
         * Different chroma downsampling and upsampling modes
         */

        /**
         * Different chroma downsampling and upsampling modes
         */
        export namespace VideoChromaMode {
            export const $gtype: GObject.GType<VideoChromaMode>;
        }

        enum VideoChromaMode {
            /**
             * do full chroma up and down sampling
             */
            FULL,
            /**
             * only perform chroma upsampling
             */
            UPSAMPLE_ONLY,
            /**
             * only perform chroma downsampling
             */
            DOWNSAMPLE_ONLY,
            /**
             * disable chroma resampling
             */
            NONE,
        }
        /**
         * The color matrix is used to convert between Y'PbPr and
         * non-linear RGB (R'G'B')
         */

        /**
         * The color matrix is used to convert between Y'PbPr and
         * non-linear RGB (R'G'B')
         */
        export namespace VideoColorMatrix {
            export const $gtype: GObject.GType<VideoColorMatrix>;
        }

        enum VideoColorMatrix {
            /**
             * unknown matrix
             */
            UNKNOWN,
            /**
             * identity matrix. Order of coefficients is
             * actually GBR, also IEC 61966-2-1 (sRGB)
             */
            RGB,
            /**
             * FCC Title 47 Code of Federal Regulations 73.682 (a)(20)
             */
            FCC,
            /**
             * ITU-R BT.709 color matrix, also ITU-R BT1361
             * / IEC 61966-2-4 xvYCC709 / SMPTE RP177 Annex B
             */
            BT709,
            /**
             * ITU-R BT.601 color matrix, also SMPTE170M / ITU-R BT1358 525 / ITU-R BT1700 NTSC
             */
            BT601,
            /**
             * SMPTE 240M color matrix
             */
            SMPTE240M,
            /**
             * ITU-R BT.2020 color matrix. Since: 1.6
             */
            BT2020,
        }
        /**
         * The color primaries define the how to transform linear RGB values to and from
         * the CIE XYZ colorspace.
         */

        /**
         * The color primaries define the how to transform linear RGB values to and from
         * the CIE XYZ colorspace.
         */
        export namespace VideoColorPrimaries {
            export const $gtype: GObject.GType<VideoColorPrimaries>;
        }

        enum VideoColorPrimaries {
            /**
             * unknown color primaries
             */
            UNKNOWN,
            /**
             * BT709 primaries, also ITU-R BT1361 / IEC
             * 61966-2-4 / SMPTE RP177 Annex B
             */
            BT709,
            /**
             * BT470M primaries, also FCC Title 47 Code
             * of Federal Regulations 73.682 (a)(20)
             */
            BT470M,
            /**
             * BT470BG primaries, also ITU-R BT601-6
             * 625 / ITU-R BT1358 625 / ITU-R BT1700 625 PAL & SECAM
             */
            BT470BG,
            /**
             * SMPTE170M primaries, also ITU-R
             * BT601-6 525 / ITU-R BT1358 525 / ITU-R BT1700 NTSC
             */
            SMPTE170M,
            /**
             * SMPTE240M primaries
             */
            SMPTE240M,
            /**
             * Generic film (colour filters using
             * Illuminant C)
             */
            FILM,
            /**
             * ITU-R BT2020 primaries. Since: 1.6
             */
            BT2020,
            /**
             * Adobe RGB primaries. Since: 1.8
             */
            ADOBERGB,
            /**
             * SMPTE ST 428 primaries (CIE 1931
             * XYZ). Since: 1.16
             */
            SMPTEST428,
            /**
             * SMPTE RP 431 primaries (ST 431-2
             * (2011) / DCI P3). Since: 1.16
             */
            SMPTERP431,
            /**
             * SMPTE EG 432 primaries (ST 432-1
             * (2010) / P3 D65). Since: 1.16
             */
            SMPTEEG432,
            /**
             * EBU 3213 primaries (JEDEC P22
             * phosphors). Since: 1.16
             */
            EBU3213,
        }
        /**
         * Possible color range values. These constants are defined for 8 bit color
         * values and can be scaled for other bit depths.
         */

        /**
         * Possible color range values. These constants are defined for 8 bit color
         * values and can be scaled for other bit depths.
         */
        export namespace VideoColorRange {
            export const $gtype: GObject.GType<VideoColorRange>;
        }

        enum VideoColorRange {
            /**
             * unknown range
             */
            UNKNOWN,
            /**
             * [0..255] for 8 bit components
             */
            '0_255',
            /**
             * [16..235] for 8 bit components. Chroma has
             *                 [16..240] range.
             */
            '16_235',
        }
        /**
         * Different dithering methods to use.
         */

        /**
         * Different dithering methods to use.
         */
        export namespace VideoDitherMethod {
            export const $gtype: GObject.GType<VideoDitherMethod>;
        }

        enum VideoDitherMethod {
            /**
             * no dithering
             */
            NONE,
            /**
             * propagate rounding errors downwards
             */
            VERTERR,
            /**
             * Dither with floyd-steinberg error diffusion
             */
            FLOYD_STEINBERG,
            /**
             * Dither with Sierra Lite error diffusion
             */
            SIERRA_LITE,
            /**
             * ordered dither using a bayer pattern
             */
            BAYER,
        }
        /**
         * Field order of interlaced content. This is only valid for
         * interlace-mode=interleaved and not interlace-mode=mixed. In the case of
         * mixed or GST_VIDEO_FIELD_ORDER_UNKOWN, the field order is signalled via
         * buffer flags.
         */

        /**
         * Field order of interlaced content. This is only valid for
         * interlace-mode=interleaved and not interlace-mode=mixed. In the case of
         * mixed or GST_VIDEO_FIELD_ORDER_UNKOWN, the field order is signalled via
         * buffer flags.
         */
        export namespace VideoFieldOrder {
            export const $gtype: GObject.GType<VideoFieldOrder>;
        }

        enum VideoFieldOrder {
            /**
             * unknown field order for interlaced content.
             *     The actual field order is signalled via buffer flags.
             */
            UNKNOWN,
            /**
             * top field is first
             */
            TOP_FIELD_FIRST,
            /**
             * bottom field is first
             */
            BOTTOM_FIELD_FIRST,
        }
        /**
         * Enum value describing the most common video formats.
         *
         * See the [GStreamer raw video format design document](https://gstreamer.freedesktop.org/documentation/additional/design/mediatype-video-raw.html#formats)
         * for details about the layout and packing of these formats in memory.
         */

        /**
         * Enum value describing the most common video formats.
         *
         * See the [GStreamer raw video format design document](https://gstreamer.freedesktop.org/documentation/additional/design/mediatype-video-raw.html#formats)
         * for details about the layout and packing of these formats in memory.
         */
        export namespace VideoFormat {
            export const $gtype: GObject.GType<VideoFormat>;
        }

        enum VideoFormat {
            /**
             * Unknown or unset video format id
             */
            UNKNOWN,
            /**
             * Encoded video format. Only ever use that in caps for
             *                            special video formats in combination with non-system
             *                            memory GstCapsFeatures where it does not make sense
             *                            to specify a real video format.
             */
            ENCODED,
            /**
             * planar 4:2:0 YUV
             */
            I420,
            /**
             * planar 4:2:0 YVU (like I420 but UV planes swapped)
             */
            YV12,
            /**
             * packed 4:2:2 YUV (Y0-U0-Y1-V0 Y2-U2-Y3-V2 Y4 ...)
             */
            YUY2,
            /**
             * packed 4:2:2 YUV (U0-Y0-V0-Y1 U2-Y2-V2-Y3 U4 ...)
             */
            UYVY,
            /**
             * packed 4:4:4 YUV with alpha channel (A0-Y0-U0-V0 ...)
             */
            AYUV,
            /**
             * sparse rgb packed into 32 bit, space last
             */
            RGBX,
            /**
             * sparse reverse rgb packed into 32 bit, space last
             */
            BGRX,
            /**
             * sparse rgb packed into 32 bit, space first
             */
            XRGB,
            /**
             * sparse reverse rgb packed into 32 bit, space first
             */
            XBGR,
            /**
             * rgb with alpha channel last
             */
            RGBA,
            /**
             * reverse rgb with alpha channel last
             */
            BGRA,
            /**
             * rgb with alpha channel first
             */
            ARGB,
            /**
             * reverse rgb with alpha channel first
             */
            ABGR,
            /**
             * RGB packed into 24 bits without padding (`R-G-B-R-G-B`)
             */
            RGB,
            /**
             * reverse RGB packed into 24 bits without padding (`B-G-R-B-G-R`)
             */
            BGR,
            /**
             * planar 4:1:1 YUV
             */
            Y41B,
            /**
             * planar 4:2:2 YUV
             */
            Y42B,
            /**
             * packed 4:2:2 YUV (Y0-V0-Y1-U0 Y2-V2-Y3-U2 Y4 ...)
             */
            YVYU,
            /**
             * planar 4:4:4 YUV
             */
            Y444,
            /**
             * packed 4:2:2 10-bit YUV, complex format
             */
            V210,
            /**
             * packed 4:2:2 16-bit YUV, Y0-U0-Y1-V1 order
             */
            V216,
            /**
             * planar 4:2:0 YUV with interleaved UV plane
             */
            NV12,
            /**
             * planar 4:2:0 YUV with interleaved VU plane
             */
            NV21,
            /**
             * 8-bit grayscale
             */
            GRAY8,
            /**
             * 16-bit grayscale, most significant byte first
             */
            GRAY16_BE,
            /**
             * 16-bit grayscale, least significant byte first
             */
            GRAY16_LE,
            /**
             * packed 4:4:4 YUV (Y-U-V ...)
             */
            V308,
            /**
             * rgb 5-6-5 bits per component
             */
            RGB16,
            /**
             * reverse rgb 5-6-5 bits per component
             */
            BGR16,
            /**
             * rgb 5-5-5 bits per component
             */
            RGB15,
            /**
             * reverse rgb 5-5-5 bits per component
             */
            BGR15,
            /**
             * packed 10-bit 4:2:2 YUV (U0-Y0-V0-Y1 U2-Y2-V2-Y3 U4 ...)
             */
            UYVP,
            /**
             * planar 4:4:2:0 AYUV
             */
            A420,
            /**
             * 8-bit paletted RGB
             */
            RGB8P,
            /**
             * planar 4:1:0 YUV
             */
            YUV9,
            /**
             * planar 4:1:0 YUV (like YUV9 but UV planes swapped)
             */
            YVU9,
            /**
             * packed 4:1:1 YUV (Cb-Y0-Y1-Cr-Y2-Y3 ...)
             */
            IYU1,
            /**
             * rgb with alpha channel first, 16 bits (native endianness) per channel
             */
            ARGB64,
            /**
             * packed 4:4:4 YUV with alpha channel, 16 bits (native endianness) per channel (A0-Y0-U0-V0 ...)
             */
            AYUV64,
            /**
             * packed 4:4:4 RGB, 10 bits per channel
             */
            R210,
            /**
             * planar 4:2:0 YUV, 10 bits per channel
             */
            I420_10BE,
            /**
             * planar 4:2:0 YUV, 10 bits per channel
             */
            I420_10LE,
            /**
             * planar 4:2:2 YUV, 10 bits per channel
             */
            I422_10BE,
            /**
             * planar 4:2:2 YUV, 10 bits per channel
             */
            I422_10LE,
            /**
             * planar 4:4:4 YUV, 10 bits per channel (Since: 1.2)
             */
            Y444_10BE,
            /**
             * planar 4:4:4 YUV, 10 bits per channel (Since: 1.2)
             */
            Y444_10LE,
            /**
             * planar 4:4:4 RGB, 8 bits per channel (Since: 1.2)
             */
            GBR,
            /**
             * planar 4:4:4 RGB, 10 bits per channel (Since: 1.2)
             */
            GBR_10BE,
            /**
             * planar 4:4:4 RGB, 10 bits per channel (Since: 1.2)
             */
            GBR_10LE,
            /**
             * planar 4:2:2 YUV with interleaved UV plane (Since: 1.2)
             */
            NV16,
            /**
             * planar 4:4:4 YUV with interleaved UV plane (Since: 1.2)
             */
            NV24,
            /**
             * NV12 with 64x32 tiling in zigzag pattern (Since: 1.4)
             */
            NV12_64Z32,
            /**
             * planar 4:4:2:0 YUV, 10 bits per channel (Since: 1.6)
             */
            A420_10BE,
            /**
             * planar 4:4:2:0 YUV, 10 bits per channel (Since: 1.6)
             */
            A420_10LE,
            /**
             * planar 4:4:2:2 YUV, 10 bits per channel (Since: 1.6)
             */
            A422_10BE,
            /**
             * planar 4:4:2:2 YUV, 10 bits per channel (Since: 1.6)
             */
            A422_10LE,
            /**
             * planar 4:4:4:4 YUV, 10 bits per channel (Since: 1.6)
             */
            A444_10BE,
            /**
             * planar 4:4:4:4 YUV, 10 bits per channel (Since: 1.6)
             */
            A444_10LE,
            /**
             * planar 4:2:2 YUV with interleaved VU plane (Since: 1.6)
             */
            NV61,
            /**
             * planar 4:2:0 YUV with interleaved UV plane, 10 bits per channel (Since: 1.10)
             */
            P010_10BE,
            /**
             * planar 4:2:0 YUV with interleaved UV plane, 10 bits per channel (Since: 1.10)
             */
            P010_10LE,
            /**
             * packed 4:4:4 YUV (U-Y-V ...) (Since: 1.10)
             */
            IYU2,
            /**
             * packed 4:2:2 YUV (V0-Y0-U0-Y1 V2-Y2-U2-Y3 V4 ...)
             */
            VYUY,
            /**
             * planar 4:4:4:4 ARGB, 8 bits per channel (Since: 1.12)
             */
            GBRA,
            /**
             * planar 4:4:4:4 ARGB, 10 bits per channel (Since: 1.12)
             */
            GBRA_10BE,
            /**
             * planar 4:4:4:4 ARGB, 10 bits per channel (Since: 1.12)
             */
            GBRA_10LE,
            /**
             * planar 4:4:4 RGB, 12 bits per channel (Since: 1.12)
             */
            GBR_12BE,
            /**
             * planar 4:4:4 RGB, 12 bits per channel (Since: 1.12)
             */
            GBR_12LE,
            /**
             * planar 4:4:4:4 ARGB, 12 bits per channel (Since: 1.12)
             */
            GBRA_12BE,
            /**
             * planar 4:4:4:4 ARGB, 12 bits per channel (Since: 1.12)
             */
            GBRA_12LE,
            /**
             * planar 4:2:0 YUV, 12 bits per channel (Since: 1.12)
             */
            I420_12BE,
            /**
             * planar 4:2:0 YUV, 12 bits per channel (Since: 1.12)
             */
            I420_12LE,
            /**
             * planar 4:2:2 YUV, 12 bits per channel (Since: 1.12)
             */
            I422_12BE,
            /**
             * planar 4:2:2 YUV, 12 bits per channel (Since: 1.12)
             */
            I422_12LE,
            /**
             * planar 4:4:4 YUV, 12 bits per channel (Since: 1.12)
             */
            Y444_12BE,
            /**
             * planar 4:4:4 YUV, 12 bits per channel (Since: 1.12)
             */
            Y444_12LE,
            /**
             * 10-bit grayscale, packed into 32bit words (2 bits padding) (Since: 1.14)
             */
            GRAY10_LE32,
            /**
             * 10-bit variant of `GST_VIDEO_FORMAT_NV1`2, packed into 32bit words (MSB 2 bits padding) (Since: 1.14)
             */
            NV12_10LE32,
            /**
             * 10-bit variant of `GST_VIDEO_FORMAT_NV1`6, packed into 32bit words (MSB 2 bits padding) (Since: 1.14)
             */
            NV16_10LE32,
            /**
             * Fully packed variant of NV12_10LE32 (Since: 1.16)
             */
            NV12_10LE40,
            /**
             * packed 4:2:2 YUV, 10 bits per channel (Since: 1.16)
             */
            Y210,
            /**
             * packed 4:4:4 YUV, 10 bits per channel(A-V-Y-U...) (Since: 1.16)
             */
            Y410,
            /**
             * packed 4:4:4 YUV with alpha channel (V0-U0-Y0-A0...) (Since: 1.16)
             */
            VUYA,
            /**
             * packed 4:4:4 RGB with alpha channel(B-G-R-A), 10 bits for R/G/B channel and MSB 2 bits for alpha channel (Since: 1.16)
             */
            BGR10A2_LE,
            /**
             * packed 4:4:4 RGB with alpha channel(R-G-B-A), 10 bits for R/G/B channel and MSB 2 bits for alpha channel (Since: 1.18)
             */
            RGB10A2_LE,
            /**
             * planar 4:4:4 YUV, 16 bits per channel (Since: 1.18)
             */
            Y444_16BE,
            /**
             * planar 4:4:4 YUV, 16 bits per channel (Since: 1.18)
             */
            Y444_16LE,
            /**
             * planar 4:2:0 YUV with interleaved UV plane, 16 bits per channel (Since: 1.18)
             */
            P016_BE,
            /**
             * planar 4:2:0 YUV with interleaved UV plane, 16 bits per channel (Since: 1.18)
             */
            P016_LE,
            /**
             * planar 4:2:0 YUV with interleaved UV plane, 12 bits per channel (Since: 1.18)
             */
            P012_BE,
            /**
             * planar 4:2:0 YUV with interleaved UV plane, 12 bits per channel (Since: 1.18)
             */
            P012_LE,
            /**
             * packed 4:2:2 YUV, 12 bits per channel (Y-U-Y-V) (Since: 1.18)
             */
            Y212_BE,
            /**
             * packed 4:2:2 YUV, 12 bits per channel (Y-U-Y-V) (Since: 1.18)
             */
            Y212_LE,
            /**
             * packed 4:4:4:4 YUV, 12 bits per channel(U-Y-V-A...) (Since: 1.18)
             */
            Y412_BE,
            /**
             * packed 4:4:4:4 YUV, 12 bits per channel(U-Y-V-A...) (Since: 1.18)
             */
            Y412_LE,
            /**
             * NV12 with 4x4 tiles in linear order.
             */
            NV12_4L4,
            /**
             * NV12 with 32x32 tiles in linear order.
             */
            NV12_32L32,
            /**
             * Planar 4:4:4 RGB, R-G-B order
             */
            RGBP,
            /**
             * Planar 4:4:4 RGB, B-G-R order
             */
            BGRP,
            /**
             * Planar 4:2:0 YUV with interleaved UV plane with alpha as
             * 3rd plane.
             */
            AV12,
            /**
             * RGB with alpha channel first, 16 bits (little endian)
             * per channel.
             */
            ARGB64_LE,
            /**
             * RGB with alpha channel first, 16 bits (big endian)
             * per channel.
             */
            ARGB64_BE,
            /**
             * RGB with alpha channel last, 16 bits (little endian)
             * per channel.
             */
            RGBA64_LE,
            /**
             * RGB with alpha channel last, 16 bits (big endian)
             * per channel.
             */
            RGBA64_BE,
            /**
             * Reverse RGB with alpha channel last, 16 bits (little endian)
             * per channel.
             */
            BGRA64_LE,
            /**
             * Reverse RGB with alpha channel last, 16 bits (big endian)
             * per channel.
             */
            BGRA64_BE,
            /**
             * Reverse RGB with alpha channel first, 16 bits (little endian)
             * per channel.
             */
            ABGR64_LE,
            /**
             * Reverse RGB with alpha channel first, 16 bits (big endian)
             * per channel.
             */
            ABGR64_BE,
            /**
             * NV12 with 16x32 Y tiles and 16x16 UV tiles.
             */
            NV12_16L32S,
            /**
             * NV12 with 8x128 tiles in linear order.
             */
            NV12_8L128,
            /**
             * NV12 10bit big endian with 8x128 tiles in linear order.
             */
            NV12_10BE_8L128,
            /**
             * `GST_VIDEO_FORMAT_NV1`2_10LE40 with 4x4 pixels tiles (5 bytes
             *  per tile row). This format is produced by Verisilicon/Hantro decoders.
             */
            NV12_10LE40_4L4,
            /**
             * `GST_VIDEO_FORMAT_DMA_DRM` represent the DMA DRM special format. It's
             * only used with memory:DMABuf #GstCapsFeatures, where an extra
             * parameter (drm-format) is required to define the image format and
             * its memory layout.
             */
            DMA_DRM,
            /**
             * Mediatek 10bit NV12 little endian with 16x32 tiles in linear order, tile 2
             * bits.
             */
            MT2110T,
            /**
             * Mediatek 10bit NV12 little endian with 16x32 tiles in linear order, raster
             * 2 bits.
             */
            MT2110R,
            /**
             * planar 4:4:2:2 YUV, 8 bits per channel
             */
            A422,
            /**
             * planar 4:4:4:4 YUV, 8 bits per channel
             */
            A444,
            /**
             * planar 4:4:4:4 YUV, 12 bits per channel
             */
            A444_12LE,
            /**
             * planar 4:4:4:4 YUV, 12 bits per channel
             */
            A444_12BE,
            /**
             * planar 4:4:2:2 YUV, 12 bits per channel
             */
            A422_12LE,
            /**
             * planar 4:4:2:2 YUV, 12 bits per channel
             */
            A422_12BE,
            /**
             * planar 4:4:2:0 YUV, 12 bits per channel
             */
            A420_12LE,
            /**
             * planar 4:4:2:0 YUV, 12 bits per channel
             */
            A420_12BE,
            /**
             * planar 4:4:4:4 YUV, 16 bits per channel
             */
            A444_16LE,
            /**
             * planar 4:4:4:4 YUV, 16 bits per channel
             */
            A444_16BE,
            /**
             * planar 4:4:2:2 YUV, 16 bits per channel
             */
            A422_16LE,
            /**
             * planar 4:4:2:2 YUV, 16 bits per channel
             */
            A422_16BE,
            /**
             * planar 4:4:2:0 YUV, 16 bits per channel
             */
            A420_16LE,
            /**
             * planar 4:4:2:0 YUV, 16 bits per channel
             */
            A420_16BE,
            /**
             * planar 4:4:4 RGB, 16 bits per channel
             */
            GBR_16LE,
            /**
             * planar 4:4:4 RGB, 16 bits per channel
             */
            GBR_16BE,
            /**
             * packed RGB with alpha, 8 bits per channel
             */
            RBGA,
        }
        /**
         * The orientation of the GL texture.
         */

        /**
         * The orientation of the GL texture.
         */
        export namespace VideoGLTextureOrientation {
            export const $gtype: GObject.GType<VideoGLTextureOrientation>;
        }

        enum VideoGLTextureOrientation {
            /**
             * Top line first in memory, left row first
             */
            NORMAL_Y_NORMAL,
            /**
             * Bottom line first in memory, left row first
             */
            NORMAL_Y_FLIP,
            /**
             * Top line first in memory, right row first
             */
            FLIP_Y_NORMAL,
            /**
             * Bottom line first in memory, right row first
             */
            FLIP_Y_FLIP,
        }
        /**
         * The GL texture type.
         */

        /**
         * The GL texture type.
         */
        export namespace VideoGLTextureType {
            export const $gtype: GObject.GType<VideoGLTextureType>;
        }

        enum VideoGLTextureType {
            /**
             * Luminance texture, GL_LUMINANCE
             */
            LUMINANCE,
            /**
             * Luminance-alpha texture, GL_LUMINANCE_ALPHA
             */
            LUMINANCE_ALPHA,
            /**
             * RGB 565 texture, GL_RGB
             */
            RGB16,
            /**
             * RGB texture, GL_RGB
             */
            RGB,
            /**
             * RGBA texture, GL_RGBA
             */
            RGBA,
            /**
             * R texture, GL_RED_EXT
             */
            R,
            /**
             * RG texture, GL_RG_EXT
             */
            RG,
        }

        export namespace VideoGammaMode {
            export const $gtype: GObject.GType<VideoGammaMode>;
        }

        enum VideoGammaMode {
            /**
             * disable gamma handling
             */
            NONE,
            /**
             * convert between input and output gamma
             * Different gamma conversion modes
             */
            REMAP,
        }
        /**
         * The possible values of the #GstVideoInterlaceMode describing the interlace
         * mode of the stream.
         */

        /**
         * The possible values of the #GstVideoInterlaceMode describing the interlace
         * mode of the stream.
         */
        export namespace VideoInterlaceMode {
            export const $gtype: GObject.GType<VideoInterlaceMode>;
        }

        enum VideoInterlaceMode {
            /**
             * all frames are progressive
             */
            PROGRESSIVE,
            /**
             * 2 fields are interleaved in one video
             *     frame. Extra buffer flags describe the field order.
             */
            INTERLEAVED,
            /**
             * frames contains both interlaced and
             *     progressive video, the buffer flags describe the frame and fields.
             */
            MIXED,
            /**
             * 2 fields are stored in one buffer, use the
             *     frame ID to get access to the required field. For multiview (the
             *     'views' property > 1) the fields of view N can be found at frame ID
             *     (N * 2) and (N * 2) + 1.
             *     Each field has only half the amount of lines as noted in the
             *     height property. This mode requires multiple GstVideoMeta metadata
             *     to describe the fields.
             */
            FIELDS,
            /**
             * 1 field is stored in one buffer,
             *     `GST_VIDEO_BUFFER_FLAG_TF` or `GST_VIDEO_BUFFER_FLAG_BF` indicates if
             *     the buffer is carrying the top or bottom field, respectively. The top and
             *     bottom buffers must alternate in the pipeline, with this mode
             *     (Since: 1.16).
             */
            ALTERNATE,
        }
        /**
         * Different color matrix conversion modes
         */

        /**
         * Different color matrix conversion modes
         */
        export namespace VideoMatrixMode {
            export const $gtype: GObject.GType<VideoMatrixMode>;
        }

        enum VideoMatrixMode {
            /**
             * do conversion between color matrices
             */
            FULL,
            /**
             * use the input color matrix to convert
             *   to and from R'G'B
             */
            INPUT_ONLY,
            /**
             * use the output color matrix to convert
             *   to and from R'G'B
             */
            OUTPUT_ONLY,
            /**
             * disable color matrix conversion.
             */
            NONE,
        }
        /**
         * #GstVideoMultiviewFramePacking represents the subset of #GstVideoMultiviewMode
         * values that can be applied to any video frame without needing extra metadata.
         * It can be used by elements that provide a property to override the
         * multiview interpretation of a video stream when the video doesn't contain
         * any markers.
         *
         * This enum is used (for example) on playbin, to re-interpret a played
         * video stream as a stereoscopic video. The individual enum values are
         * equivalent to and have the same value as the matching #GstVideoMultiviewMode.
         */

        /**
         * #GstVideoMultiviewFramePacking represents the subset of #GstVideoMultiviewMode
         * values that can be applied to any video frame without needing extra metadata.
         * It can be used by elements that provide a property to override the
         * multiview interpretation of a video stream when the video doesn't contain
         * any markers.
         *
         * This enum is used (for example) on playbin, to re-interpret a played
         * video stream as a stereoscopic video. The individual enum values are
         * equivalent to and have the same value as the matching #GstVideoMultiviewMode.
         */
        export namespace VideoMultiviewFramePacking {
            export const $gtype: GObject.GType<VideoMultiviewFramePacking>;
        }

        enum VideoMultiviewFramePacking {
            /**
             * A special value indicating
             * no frame packing info.
             */
            NONE,
            /**
             * All frames are monoscopic.
             */
            MONO,
            /**
             * All frames represent a left-eye view.
             */
            LEFT,
            /**
             * All frames represent a right-eye view.
             */
            RIGHT,
            /**
             * Left and right eye views are
             * provided in the left and right half of the frame respectively.
             */
            SIDE_BY_SIDE,
            /**
             * Left and right eye
             * views are provided in the left and right half of the frame, but
             * have been sampled using quincunx method, with half-pixel offset
             * between the 2 views.
             */
            SIDE_BY_SIDE_QUINCUNX,
            /**
             * Alternating vertical
             * columns of pixels represent the left and right eye view respectively.
             */
            COLUMN_INTERLEAVED,
            /**
             * Alternating horizontal
             * rows of pixels represent the left and right eye view respectively.
             */
            ROW_INTERLEAVED,
            /**
             * The top half of the frame
             * contains the left eye, and the bottom half the right eye.
             */
            TOP_BOTTOM,
            /**
             * Pixels are arranged with
             * alternating pixels representing left and right eye views in a
             * checkerboard fashion.
             */
            CHECKERBOARD,
        }
        /**
         * All possible stereoscopic 3D and multiview representations.
         * In conjunction with #GstVideoMultiviewFlags, describes how
         * multiview content is being transported in the stream.
         */

        /**
         * All possible stereoscopic 3D and multiview representations.
         * In conjunction with #GstVideoMultiviewFlags, describes how
         * multiview content is being transported in the stream.
         */
        export namespace VideoMultiviewMode {
            export const $gtype: GObject.GType<VideoMultiviewMode>;
        }

        enum VideoMultiviewMode {
            /**
             * A special value indicating
             * no multiview information. Used in GstVideoInfo and other places to
             * indicate that no specific multiview handling has been requested or
             * provided. This value is never carried on caps.
             */
            NONE,
            /**
             * All frames are monoscopic.
             */
            MONO,
            /**
             * All frames represent a left-eye view.
             */
            LEFT,
            /**
             * All frames represent a right-eye view.
             */
            RIGHT,
            /**
             * Left and right eye views are
             * provided in the left and right half of the frame respectively.
             */
            SIDE_BY_SIDE,
            /**
             * Left and right eye
             * views are provided in the left and right half of the frame, but
             * have been sampled using quincunx method, with half-pixel offset
             * between the 2 views.
             */
            SIDE_BY_SIDE_QUINCUNX,
            /**
             * Alternating vertical
             * columns of pixels represent the left and right eye view respectively.
             */
            COLUMN_INTERLEAVED,
            /**
             * Alternating horizontal
             * rows of pixels represent the left and right eye view respectively.
             */
            ROW_INTERLEAVED,
            /**
             * The top half of the frame
             * contains the left eye, and the bottom half the right eye.
             */
            TOP_BOTTOM,
            /**
             * Pixels are arranged with
             * alternating pixels representing left and right eye views in a
             * checkerboard fashion.
             */
            CHECKERBOARD,
            /**
             * Left and right eye views
             * are provided in separate frames alternately.
             */
            FRAME_BY_FRAME,
            /**
             * Multiple
             * independent views are provided in separate frames in sequence.
             * This method only applies to raw video buffers at the moment.
             * Specific view identification is via the `GstVideoMultiviewMeta`
             * and #GstVideoMeta(s) on raw video buffers.
             */
            MULTIVIEW_FRAME_BY_FRAME,
            /**
             * Multiple views are
             * provided as separate #GstMemory framebuffers attached to each
             * #GstBuffer, described by the `GstVideoMultiviewMeta`
             * and #GstVideoMeta(s)
             */
            SEPARATED,
        }
        /**
         * The different video orientation methods.
         */
        /**
         * The different video orientation methods.
         */
        class VideoOrientationMethod {
            static $gtype: GObject.GType<VideoOrientationMethod>;

            // Static fields

            /**
             * Identity (no rotation)
             */
            static IDENTITY: number;
            /**
             * Rotate clockwise 90 degrees
             */
            static '90R': number;
            /**
             * Rotate 180 degrees
             */
            static '180': number;
            /**
             * Rotate counter-clockwise 90 degrees
             */
            static '90L': number;
            /**
             * Flip horizontally
             */
            static HORIZ: number;
            /**
             * Flip vertically
             */
            static VERT: number;
            /**
             * Flip across upper left/lower right diagonal
             */
            static UL_LR: number;
            /**
             * Flip across upper right/lower left diagonal
             */
            static UR_LL: number;
            /**
             * Select flip method based on image-orientation tag
             */
            static AUTO: number;
            /**
             * Current status depends on plugin internal setup
             */
            static CUSTOM: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Different primaries conversion modes
         */

        /**
         * Different primaries conversion modes
         */
        export namespace VideoPrimariesMode {
            export const $gtype: GObject.GType<VideoPrimariesMode>;
        }

        enum VideoPrimariesMode {
            /**
             * disable conversion between primaries
             */
            NONE,
            /**
             * do conversion between primaries only
             *   when it can be merged with color matrix conversion.
             */
            MERGE_ONLY,
            /**
             * fast conversion between primaries
             */
            FAST,
        }
        /**
         * Different subsampling and upsampling methods
         */

        /**
         * Different subsampling and upsampling methods
         */
        export namespace VideoResamplerMethod {
            export const $gtype: GObject.GType<VideoResamplerMethod>;
        }

        enum VideoResamplerMethod {
            /**
             * Duplicates the samples when
             *    upsampling and drops when downsampling
             */
            NEAREST,
            /**
             * Uses linear interpolation to reconstruct
             *    missing samples and averaging to downsample
             */
            LINEAR,
            /**
             * Uses cubic interpolation
             */
            CUBIC,
            /**
             * Uses sinc interpolation
             */
            SINC,
            /**
             * Uses lanczos interpolation
             */
            LANCZOS,
        }
        /**
         * Enum value describing the available tiling modes.
         */

        /**
         * Enum value describing the available tiling modes.
         */
        export namespace VideoTileMode {
            export const $gtype: GObject.GType<VideoTileMode>;
        }

        enum VideoTileMode {
            /**
             * Unknown or unset tile mode
             */
            UNKNOWN,
            /**
             * Every four adjacent blocks - two
             *    horizontally and two vertically are grouped together and are located
             *    in memory in Z or flipped Z order. In case of odd rows, the last row
             *    of blocks is arranged in linear order.
             */
            ZFLIPZ_2X2,
            /**
             * Tiles are in row order.
             */
            LINEAR,
        }
        /**
         * Enum value describing the most common tiling types.
         */

        /**
         * Enum value describing the most common tiling types.
         */
        export namespace VideoTileType {
            export const $gtype: GObject.GType<VideoTileType>;
        }

        enum VideoTileType {
            /**
             * Tiles are indexed. Use
             *   gst_video_tile_get_index () to retrieve the tile at the requested
             *   coordinates.
             */
            INDEXED,
        }
        /**
         * The video transfer function defines the formula for converting between
         * non-linear RGB (R'G'B') and linear RGB
         */

        /**
         * The video transfer function defines the formula for converting between
         * non-linear RGB (R'G'B') and linear RGB
         */
        export namespace VideoTransferFunction {
            export const $gtype: GObject.GType<VideoTransferFunction>;
        }

        enum VideoTransferFunction {
            /**
             * unknown transfer function
             */
            UNKNOWN,
            /**
             * linear RGB, gamma 1.0 curve
             */
            GAMMA10,
            /**
             * Gamma 1.8 curve
             */
            GAMMA18,
            /**
             * Gamma 2.0 curve
             */
            GAMMA20,
            /**
             * Gamma 2.2 curve
             */
            GAMMA22,
            /**
             * Gamma 2.2 curve with a linear segment in the lower
             *                           range, also ITU-R BT470M / ITU-R BT1700 625 PAL &
             *                           SECAM / ITU-R BT1361
             */
            BT709,
            /**
             * Gamma 2.2 curve with a linear segment in the
             *                               lower range
             */
            SMPTE240M,
            /**
             * Gamma 2.4 curve with a linear segment in the lower
             *                          range. IEC 61966-2-1 (sRGB or sYCC)
             */
            SRGB,
            /**
             * Gamma 2.8 curve, also ITU-R BT470BG
             */
            GAMMA28,
            /**
             * Logarithmic transfer characteristic
             *                             100:1 range
             */
            LOG100,
            /**
             * Logarithmic transfer characteristic
             *                             316.22777:1 range (100 * sqrt(10) : 1)
             */
            LOG316,
            /**
             * Gamma 2.2 curve with a linear segment in the lower
             *                                range. Used for BT.2020 with 12 bits per
             *                                component. Since: 1.6
             */
            BT2020_12,
            /**
             * Gamma 2.19921875. Since: 1.8
             */
            ADOBERGB,
            /**
             * Rec. ITU-R BT.2020-2 with 10 bits per component.
             *                                (functionally the same as the values
             *                                GST_VIDEO_TRANSFER_BT709 and GST_VIDEO_TRANSFER_BT601).
             *                                Since: 1.18
             */
            BT2020_10,
            /**
             * SMPTE ST 2084 for 10, 12, 14, and 16-bit systems.
             *                                Known as perceptual quantization (PQ)
             *                                Since: 1.18
             */
            SMPTE2084,
            /**
             * Association of Radio Industries and Businesses (ARIB)
             *                                   STD-B67 and Rec. ITU-R BT.2100-1 hybrid loggamma (HLG) system
             *                                   Since: 1.18
             */
            ARIB_STD_B67,
            /**
             * also known as SMPTE170M / ITU-R BT1358 525 or 625 / ITU-R BT1700 NTSC
             */
            BT601,
        }
        /**
         * Return values for #GstVideoVBIParser
         */

        /**
         * Return values for #GstVideoVBIParser
         */
        export namespace VideoVBIParserResult {
            export const $gtype: GObject.GType<VideoVBIParserResult>;
        }

        enum VideoVBIParserResult {
            /**
             * No line were provided, or no more Ancillary data was found.
             */
            DONE,
            /**
             * A #GstVideoAncillary was found.
             */
            OK,
            /**
             * An error occurred
             */
            ERROR,
        }
        const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string;
        /**
         * A bufferpool option to enable extra padding. When a bufferpool supports this
         * option, gst_buffer_pool_config_set_video_alignment() can be called.
         *
         * When this option is enabled on the bufferpool,
         * #GST_BUFFER_POOL_OPTION_VIDEO_META should also be enabled.
         */
        const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string;
        /**
         * An option that can be activated on a bufferpool to request gl texture upload
         * meta on buffers from the pool.
         *
         * When this option is enabled on the bufferpool,
         * `GST_BUFFER_POOL_OPTION_VIDEO_META` should also be enabled.
         */
        const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string;
        /**
         * An option that can be activated on bufferpool to request video metadata
         * on buffers from the pool.
         */
        const BUFFER_POOL_OPTION_VIDEO_META: string;
        /**
         * Name of the caps feature indicating that the stream is interlaced.
         *
         * Currently it is only used for video with 'interlace-mode=alternate'
         * to ensure backwards compatibility for this new mode.
         * In this mode each buffer carries a single field of interlaced video.
         * `GST_VIDEO_BUFFER_FLAG_TOP_FIELD` and `GST_VIDEO_BUFFER_FLAG_BOTTOM_FIELD`
         * indicate whether the buffer carries a top or bottom field. The order of
         * buffers/fields in the stream and the timestamps on the buffers indicate the
         * temporal order of the fields.
         * Top and bottom fields are expected to alternate in this mode.
         * The frame rate in the caps still signals the frame rate, so the notional field
         * rate will be twice the frame rate from the caps
         * (see `GST_VIDEO_INFO_FIELD_RATE_N)`.
         */
        const CAPS_FEATURE_FORMAT_INTERLACED: string;
        const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string;
        const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string;
        const CAPS_FEATURE_META_GST_VIDEO_META: string;
        const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string;
        /**
         * This metadata stays relevant as long as video colorspace is unchanged.
         */
        const META_TAG_VIDEO_COLORSPACE_STR: string;
        /**
         * This metadata stays relevant as long as video orientation is unchanged.
         */
        const META_TAG_VIDEO_ORIENTATION_STR: string;
        /**
         * This metadata stays relevant as long as video size is unchanged.
         */
        const META_TAG_VIDEO_SIZE_STR: string;
        /**
         * This metadata is relevant for video streams.
         */
        const META_TAG_VIDEO_STR: string;
        const VIDEO_COLORIMETRY_BT2020: string;
        const VIDEO_COLORIMETRY_BT2020_10: string;
        const VIDEO_COLORIMETRY_BT2100_HLG: string;
        const VIDEO_COLORIMETRY_BT2100_PQ: string;
        const VIDEO_COLORIMETRY_BT601: string;
        const VIDEO_COLORIMETRY_BT709: string;
        const VIDEO_COLORIMETRY_SMPTE240M: string;
        const VIDEO_COLORIMETRY_SRGB: string;
        const VIDEO_COMP_A: number;
        const VIDEO_COMP_B: number;
        const VIDEO_COMP_G: number;
        const VIDEO_COMP_INDEX: number;
        const VIDEO_COMP_PALETTE: number;
        const VIDEO_COMP_R: number;
        const VIDEO_COMP_U: number;
        const VIDEO_COMP_V: number;
        const VIDEO_COMP_Y: number;
        /**
         * #GstVideoAlphaMode, the alpha mode to use.
         * Default is #GST_VIDEO_ALPHA_MODE_COPY.
         */
        const VIDEO_CONVERTER_OPT_ALPHA_MODE: string;
        /**
         * #G_TYPE_DOUBLE, the alpha color value to use.
         * Default to 1.0
         */
        const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string;
        /**
         * #G_TYPE_BOOLEAN, whether gst_video_converter_frame() will return immediately
         * without waiting for the conversion to complete.  A subsequent
         * gst_video_converter_frame_finish() must be performed to ensure completion of the
         * conversion before subsequent use.  Default %FALSE
         */
        const VIDEO_CONVERTER_OPT_ASYNC_TASKS: string;
        /**
         * #G_TYPE_UINT, the border color to use if #GST_VIDEO_CONVERTER_OPT_FILL_BORDER
         * is set to %TRUE. The color is in ARGB format.
         * Default 0xff000000
         */
        const VIDEO_CONVERTER_OPT_BORDER_ARGB: string;
        /**
         * #GstVideoChromaMode, set the chroma resample mode subsampled
         * formats. Default is #GST_VIDEO_CHROMA_MODE_FULL.
         */
        const VIDEO_CONVERTER_OPT_CHROMA_MODE: string;
        /**
         * #GstVideoChromaMethod, The resampler method to use for
         * chroma resampling. Other options for the resampler can be used, see
         * the #GstVideoResampler. Default is #GST_VIDEO_RESAMPLER_METHOD_LINEAR
         */
        const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string;
        /**
         * #G_TYPE_INT, height in the destination frame, default destination height
         */
        const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string;
        /**
         * #G_TYPE_INT, width in the destination frame, default destination width
         */
        const VIDEO_CONVERTER_OPT_DEST_WIDTH: string;
        /**
         * #G_TYPE_INT, x position in the destination frame, default 0
         */
        const VIDEO_CONVERTER_OPT_DEST_X: string;
        /**
         * #G_TYPE_INT, y position in the destination frame, default 0
         */
        const VIDEO_CONVERTER_OPT_DEST_Y: string;
        /**
         * #GstVideoDitherMethod, The dither method to use when
         * changing bit depth.
         * Default is #GST_VIDEO_DITHER_BAYER.
         */
        const VIDEO_CONVERTER_OPT_DITHER_METHOD: string;
        /**
         * #G_TYPE_UINT, The quantization amount to dither to. Components will be
         * quantized to multiples of this value.
         * Default is 1
         */
        const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string;
        /**
         * #G_TYPE_BOOLEAN, if the destination rectangle does not fill the complete
         * destination image, render a border with
         * #GST_VIDEO_CONVERTER_OPT_BORDER_ARGB. Otherwise the unusded pixels in the
         * destination are untouched. Default %TRUE.
         */
        const VIDEO_CONVERTER_OPT_FILL_BORDER: string;
        /**
         * #GstVideoGammaMode, set the gamma mode.
         * Default is #GST_VIDEO_GAMMA_MODE_NONE.
         */
        const VIDEO_CONVERTER_OPT_GAMMA_MODE: string;
        /**
         * #GstVideoMatrixMode, set the color matrix conversion mode for
         * converting between Y'PbPr and non-linear RGB (R'G'B').
         * Default is #GST_VIDEO_MATRIX_MODE_FULL.
         */
        const VIDEO_CONVERTER_OPT_MATRIX_MODE: string;
        /**
         * #GstVideoPrimariesMode, set the primaries conversion mode.
         * Default is #GST_VIDEO_PRIMARIES_MODE_NONE.
         */
        const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string;
        /**
         * #GstVideoResamplerMethod, The resampler method to use for
         * resampling. Other options for the resampler can be used, see
         * the #GstVideoResampler. Default is #GST_VIDEO_RESAMPLER_METHOD_CUBIC
         */
        const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string;
        /**
         * #G_TYPE_UINT, The number of taps for the resampler.
         * Default is 0: let the resampler choose a good value.
         */
        const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string;
        /**
         * #G_TYPE_INT, source height to convert, default source height
         */
        const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string;
        /**
         * #G_TYPE_INT, source width to convert, default source width
         */
        const VIDEO_CONVERTER_OPT_SRC_WIDTH: string;
        /**
         * #G_TYPE_INT, source x position to start conversion, default 0
         */
        const VIDEO_CONVERTER_OPT_SRC_X: string;
        /**
         * #G_TYPE_INT, source y position to start conversion, default 0
         */
        const VIDEO_CONVERTER_OPT_SRC_Y: string;
        /**
         * #G_TYPE_UINT, maximum number of threads to use. Default 1, 0 for the number
         * of cores.
         */
        const VIDEO_CONVERTER_OPT_THREADS: string;
        /**
         * Default maximum number of errors tolerated before signaling error.
         */
        const VIDEO_DECODER_MAX_ERRORS: number;
        /**
         * The name of the templates for the sink pad.
         */
        const VIDEO_DECODER_SINK_NAME: string;
        /**
         * The name of the templates for the source pad.
         */
        const VIDEO_DECODER_SRC_NAME: string;
        /**
         * Generic caps string for video wit DMABuf(GST_CAPS_FEATURE_MEMORY_DMABUF)
         * feature, for use in pad templates. As drm-format is supposed to be defined
         * at run-time it's not predefined here.
         */
        const VIDEO_DMA_DRM_CAPS_MAKE: string;
        /**
         * The name of the templates for the sink pad.
         */
        const VIDEO_ENCODER_SINK_NAME: string;
        /**
         * The name of the templates for the source pad.
         */
        const VIDEO_ENCODER_SRC_NAME: string;
        /**
         * List of all video formats, for use in template caps strings.
         *
         * Formats are sorted by decreasing "quality", using these criteria by priority:
         *   - number of components
         *   - depth
         *   - subsampling factor of the width
         *   - subsampling factor of the height
         *   - number of planes
         *   - native endianness preferred
         *   - pixel stride
         *   - poffset
         *   - prefer non-complex formats
         *   - prefer YUV formats over RGB ones
         *   - prefer I420 over YV12
         *   - format name
         */
        const VIDEO_FORMATS_ALL: string;
        /**
         * Declare all video formats as a string.
         *
         * Formats are sorted by decreasing "quality", using these criteria by priority:
         *   - number of components
         *   - depth
         *   - subsampling factor of the width
         *   - subsampling factor of the height
         *   - number of planes
         *   - native endianness preferred
         *   - pixel stride
         *   - poffset
         *   - prefer non-complex formats
         *   - prefer YUV formats over RGB ones
         *   - prefer I420 over YV12
         *   - format name
         */
        const VIDEO_FORMATS_ALL_STR: string;
        /**
         * This is similar to %GST_VIDEO_FORMATS_ALL but includes formats like DMA_DRM
         * that do not have a software converter. This should be used for passthrough
         * template caps.
         */
        const VIDEO_FORMATS_ANY: string;
        /**
         * This is similar to %GST_VIDEO_FORMATS_ALL_STR but includes formats like
         * DMA_DRM for which no software converter exists. This should be used for
         * passthrough template caps.
         */
        const VIDEO_FORMATS_ANY_STR: string;
        const VIDEO_FPS_RANGE: string;
        const VIDEO_MAX_COMPONENTS: number;
        const VIDEO_MAX_PLANES: number;
        /**
         * G_TYPE_DOUBLE, B parameter of the cubic filter. The B
         * parameter controls the bluriness. Values between 0.0 and
         * 2.0 are accepted. 1/3 is the default.
         *
         * Below are some values of popular filters:
         *                    B       C
         * Hermite           0.0     0.0
         * Spline            1.0     0.0
         * Catmull-Rom       0.0     1/2
         * Mitchell          1/3     1/3
         * Robidoux          0.3782  0.3109
         * Robidoux
         *  Sharp            0.2620  0.3690
         * Robidoux
         *  Soft             0.6796  0.1602
         */
        const VIDEO_RESAMPLER_OPT_CUBIC_B: string;
        /**
         * G_TYPE_DOUBLE, C parameter of the cubic filter. The C
         * parameter controls the Keys alpha value. Values between 0.0 and
         * 2.0 are accepted. 1/3 is the default.
         *
         * See #GST_VIDEO_RESAMPLER_OPT_CUBIC_B for some more common values
         */
        const VIDEO_RESAMPLER_OPT_CUBIC_C: string;
        /**
         * G_TYPE_DOUBLE, specifies the size of filter envelope for
         * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
         * 1.0 and 5.0. 2.0 is the default.
         */
        const VIDEO_RESAMPLER_OPT_ENVELOPE: string;
        /**
         * G_TYPE_INT, limits the maximum number of taps to use.
         * 16 is the default.
         */
        const VIDEO_RESAMPLER_OPT_MAX_TAPS: string;
        /**
         * G_TYPE_DOUBLE, specifies sharpening of the filter for
         * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
         * 0.0 and 1.0. 0.0 is the default.
         */
        const VIDEO_RESAMPLER_OPT_SHARPEN: string;
        /**
         * G_TYPE_DOUBLE, specifies sharpness of the filter for
         * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
         * 0.5 and 1.5. 1.0 is the default.
         */
        const VIDEO_RESAMPLER_OPT_SHARPNESS: string;
        /**
         * #GstVideoDitherMethod, The dither method to use for propagating
         * quatization errors.
         */
        const VIDEO_SCALER_OPT_DITHER_METHOD: string;
        const VIDEO_SIZE_RANGE: string;
        const VIDEO_TILE_TYPE_MASK: number;
        const VIDEO_TILE_TYPE_SHIFT: number;
        const VIDEO_TILE_X_TILES_MASK: number;
        const VIDEO_TILE_Y_TILES_SHIFT: number;
        function ancillary_meta_api_get_type(): GObject.GType;
        function ancillary_meta_get_info(): Gst.MetaInfo;
        /**
         * Adds a new #GstAncillaryMeta to the `buffer`. The caller is responsible for setting the appropriate
         * fields.
         * @param buffer A #GstBuffer
         * @returns A new #GstAncillaryMeta, or %NULL if an error happened.
         */
        function buffer_add_ancillary_meta(buffer: Gst.Buffer): AncillaryMeta;
        /**
         * Attaches #GstVideoAFDMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param field 0 for progressive or field 1 and 1 for field 2
         * @param spec #GstVideoAFDSpec that applies to AFD value
         * @param afd #GstVideoAFDValue AFD enumeration
         * @returns the #GstVideoAFDMeta on @buffer.
         */
        function buffer_add_video_afd_meta(
            buffer: Gst.Buffer,
            field: number,
            spec: VideoAFDSpec,
            afd: VideoAFDValue,
        ): VideoAFDMeta;
        /**
         * Attaches GstVideoAffineTransformationMeta metadata to `buffer` with
         * the given parameters.
         * @param buffer a #GstBuffer
         * @returns the #GstVideoAffineTransformationMeta on @buffer.
         */
        function buffer_add_video_affine_transformation_meta(buffer: Gst.Buffer): VideoAffineTransformationMeta;
        /**
         * Attaches #GstVideoBarMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param field 0 for progressive or field 1 and 1 for field 2
         * @param is_letterbox if true then bar data specifies letterbox, otherwise pillarbox
         * @param bar_data1 If @is_letterbox is true, then the value specifies the      last line of a horizontal letterbox bar area at top of reconstructed frame.      Otherwise, it specifies the last horizontal luminance sample of a vertical pillarbox      bar area at the left side of the reconstructed frame
         * @param bar_data2 If @is_letterbox is true, then the value specifies the      first line of a horizontal letterbox bar area at bottom of reconstructed frame.      Otherwise, it specifies the first horizontal      luminance sample of a vertical pillarbox bar area at the right side of the reconstructed frame.
         * @returns the #GstVideoBarMeta on @buffer. See Table 6.11 Bar Data Syntax https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
         */
        function buffer_add_video_bar_meta(
            buffer: Gst.Buffer,
            field: number,
            is_letterbox: boolean,
            bar_data1: number,
            bar_data2: number,
        ): VideoBarMeta;
        /**
         * Attaches #GstVideoCaptionMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param caption_type The type of Closed Caption to add
         * @param data The Closed Caption data
         * @returns the #GstVideoCaptionMeta on @buffer.
         */
        function buffer_add_video_caption_meta(
            buffer: Gst.Buffer,
            caption_type: VideoCaptionType,
            data: Uint8Array | string,
        ): VideoCaptionMeta;
        /**
         * Attaches a #GstVideoCodecAlphaMeta metadata to `buffer` with
         * the given alpha buffer.
         * @param buffer a #GstBuffer
         * @param alpha_buffer a #GstBuffer
         * @returns the #GstVideoCodecAlphaMeta on @buffer.
         */
        function buffer_add_video_codec_alpha_meta(buffer: Gst.Buffer, alpha_buffer: Gst.Buffer): VideoCodecAlphaMeta;
        /**
         * Attaches GstVideoGLTextureUploadMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param texture_orientation the #GstVideoGLTextureOrientation
         * @param n_textures the number of textures
         * @param texture_type array of #GstVideoGLTextureType
         * @param upload the function to upload the buffer to a specific texture ID
         * @param user_data_copy function to copy @user_data
         * @param user_data_free function to free @user_data
         * @returns the #GstVideoGLTextureUploadMeta on @buffer.
         */
        function buffer_add_video_gl_texture_upload_meta(
            buffer: Gst.Buffer,
            texture_orientation: VideoGLTextureOrientation,
            n_textures: number,
            texture_type: VideoGLTextureType,
            upload: VideoGLTextureUpload,
            user_data_copy: GObject.BoxedCopyFunc,
            user_data_free: GObject.BoxedFreeFunc,
        ): VideoGLTextureUploadMeta;
        /**
         * Attaches GstVideoMeta metadata to `buffer` with the given parameters and the
         * default offsets and strides for `format` and `width` x `height`.
         *
         * This function calculates the default offsets and strides and then calls
         * gst_buffer_add_video_meta_full() with them.
         * @param buffer a #GstBuffer
         * @param flags #GstVideoFrameFlags
         * @param format a #GstVideoFormat
         * @param width the width
         * @param height the height
         * @returns the #GstVideoMeta on @buffer.
         */
        function buffer_add_video_meta(
            buffer: Gst.Buffer,
            flags: VideoFrameFlags,
            format: VideoFormat,
            width: number,
            height: number,
        ): VideoMeta;
        /**
         * Attaches GstVideoMeta metadata to `buffer` with the given parameters.
         * @param buffer a #GstBuffer
         * @param flags #GstVideoFrameFlags
         * @param format a #GstVideoFormat
         * @param width the width
         * @param height the height
         * @param n_planes number of planes
         * @param offset offset of each plane
         * @param stride stride of each plane
         * @returns the #GstVideoMeta on @buffer.
         */
        function buffer_add_video_meta_full(
            buffer: Gst.Buffer,
            flags: VideoFrameFlags,
            format: VideoFormat,
            width: number,
            height: number,
            n_planes: number,
            offset: number[],
            stride: number[],
        ): VideoMeta;
        /**
         * Sets an overlay composition on a buffer. The buffer will obtain its own
         * reference to the composition, meaning this function does not take ownership
         * of `comp`.
         * @param buf a #GstBuffer
         * @param comp a #GstVideoOverlayComposition
         * @returns a #GstVideoOverlayCompositionMeta
         */
        function buffer_add_video_overlay_composition_meta(
            buf: Gst.Buffer,
            comp?: VideoOverlayComposition | null,
        ): VideoOverlayCompositionMeta;
        /**
         * Attaches #GstVideoRegionOfInterestMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param roi_type Type of the region of interest (e.g. "face")
         * @param x X position
         * @param y Y position
         * @param w width
         * @param h height
         * @returns the #GstVideoRegionOfInterestMeta on @buffer.
         */
        function buffer_add_video_region_of_interest_meta(
            buffer: Gst.Buffer,
            roi_type: string,
            x: number,
            y: number,
            w: number,
            h: number,
        ): VideoRegionOfInterestMeta;
        /**
         * Attaches #GstVideoRegionOfInterestMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param roi_type Type of the region of interest (e.g. "face")
         * @param x X position
         * @param y Y position
         * @param w width
         * @param h height
         * @returns the #GstVideoRegionOfInterestMeta on @buffer.
         */
        function buffer_add_video_region_of_interest_meta_id(
            buffer: Gst.Buffer,
            roi_type: GLib.Quark,
            x: number,
            y: number,
            w: number,
            h: number,
        ): VideoRegionOfInterestMeta;
        /**
         * Attaches #GstVideoSEIUserDataUnregisteredMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param uuid User Data Unregistered UUID
         * @param data SEI User Data Unregistered buffer
         * @param size size of the data buffer
         * @returns the #GstVideoSEIUserDataUnregisteredMeta on @buffer.
         */
        function buffer_add_video_sei_user_data_unregistered_meta(
            buffer: Gst.Buffer,
            uuid: number,
            data: number,
            size: number,
        ): VideoSEIUserDataUnregisteredMeta;
        /**
         * Attaches #GstVideoTimeCodeMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param tc a #GstVideoTimeCode
         * @returns the #GstVideoTimeCodeMeta on @buffer, or (since 1.16) %NULL if the timecode was invalid.
         */
        function buffer_add_video_time_code_meta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null;
        /**
         * Attaches #GstVideoTimeCodeMeta metadata to `buffer` with the given
         * parameters.
         * @param buffer a #GstBuffer
         * @param fps_n framerate numerator
         * @param fps_d framerate denominator
         * @param latest_daily_jam a #GDateTime for the latest daily jam
         * @param flags a #GstVideoTimeCodeFlags
         * @param hours hours since the daily jam
         * @param minutes minutes since the daily jam
         * @param seconds seconds since the daily jam
         * @param frames frames since the daily jam
         * @param field_count fields since the daily jam
         * @returns the #GstVideoTimeCodeMeta on @buffer, or (since 1.16) %NULL if the timecode was invalid.
         */
        function buffer_add_video_time_code_meta_full(
            buffer: Gst.Buffer,
            fps_n: number,
            fps_d: number,
            latest_daily_jam: GLib.DateTime,
            flags: VideoTimeCodeFlags,
            hours: number,
            minutes: number,
            seconds: number,
            frames: number,
            field_count: number,
        ): VideoTimeCodeMeta | null;
        /**
         * Find the #GstVideoMeta on `buffer` with the lowest `id`.
         *
         * Buffers can contain multiple #GstVideoMeta metadata items when dealing with
         * multiview buffers.
         * @param buffer a #GstBuffer
         * @returns the #GstVideoMeta with lowest id (usually 0) or %NULL when there is no such metadata on @buffer.
         */
        function buffer_get_video_meta(buffer: Gst.Buffer): VideoMeta | null;
        /**
         * Find the #GstVideoMeta on `buffer` with the given `id`.
         *
         * Buffers can contain multiple #GstVideoMeta metadata items when dealing with
         * multiview buffers.
         * @param buffer a #GstBuffer
         * @param id a metadata id
         * @returns the #GstVideoMeta with @id or %NULL when there is no such metadata on @buffer.
         */
        function buffer_get_video_meta_id(buffer: Gst.Buffer, id: number): VideoMeta | null;
        /**
         * Find the #GstVideoRegionOfInterestMeta on `buffer` with the given `id`.
         *
         * Buffers can contain multiple #GstVideoRegionOfInterestMeta metadata items if
         * multiple regions of interests are marked on a frame.
         * @param buffer a #GstBuffer
         * @param id a metadata id
         * @returns the #GstVideoRegionOfInterestMeta with @id or %NULL when there is no such metadata on @buffer.
         */
        function buffer_get_video_region_of_interest_meta_id(
            buffer: Gst.Buffer,
            id: number,
        ): VideoRegionOfInterestMeta | null;
        /**
         * Get the video alignment from the bufferpool configuration `config` in
         * in `align`
         * @param config a #GstStructure
         * @param align a #GstVideoAlignment
         * @returns %TRUE if @config could be parsed correctly.
         */
        function buffer_pool_config_get_video_alignment(config: Gst.Structure, align: VideoAlignment): boolean;
        /**
         * Set the video alignment in `align` to the bufferpool configuration
         * `config`
         * @param config a #GstStructure
         * @param align a #GstVideoAlignment
         */
        function buffer_pool_config_set_video_alignment(config: Gst.Structure, align: VideoAlignment): void;
        /**
         * Convenience function to check if the given message is a
         * "prepare-window-handle" message from a #GstVideoOverlay.
         * @param msg a #GstMessage
         * @returns whether @msg is a "prepare-window-handle" message
         */
        function is_video_overlay_prepare_window_handle_message(msg: Gst.Message): boolean;
        /**
         * Try to retrieve x and y coordinates of a #GstNavigation event.
         * @param event The #GstEvent to inspect.
         * @returns A boolean indicating success.
         */
        function navigation_event_get_coordinates(event: Gst.Event): [boolean, number, number];
        /**
         * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
         * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
         * @param event A #GstEvent to inspect.
         */
        function navigation_event_get_type(event: Gst.Event): NavigationEventType;
        /**
         * Create a new navigation event given navigation command..
         * @param command The navigation command to use.
         * @returns a new #GstEvent
         */
        function navigation_event_new_command(command: NavigationCommand): Gst.Event;
        /**
         * Create a new navigation event for the given key press.
         * @param key A string identifying the key press.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_key_press(key: string, state: NavigationModifierType): Gst.Event;
        /**
         * Create a new navigation event for the given key release.
         * @param key A string identifying the released key.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_key_release(key: string, state: NavigationModifierType): Gst.Event;
        /**
         * Create a new navigation event for the given key mouse button press.
         * @param button The number of the pressed mouse button.
         * @param x The x coordinate of the mouse cursor.
         * @param y The y coordinate of the mouse cursor.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_mouse_button_press(
            button: number,
            x: number,
            y: number,
            state: NavigationModifierType,
        ): Gst.Event;
        /**
         * Create a new navigation event for the given key mouse button release.
         * @param button The number of the released mouse button.
         * @param x The x coordinate of the mouse cursor.
         * @param y The y coordinate of the mouse cursor.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_mouse_button_release(
            button: number,
            x: number,
            y: number,
            state: NavigationModifierType,
        ): Gst.Event;
        /**
         * Create a new navigation event for the new mouse location.
         * @param x The x coordinate of the mouse cursor.
         * @param y The y coordinate of the mouse cursor.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_mouse_move(x: number, y: number, state: NavigationModifierType): Gst.Event;
        /**
         * Create a new navigation event for the mouse scroll.
         * @param x The x coordinate of the mouse cursor.
         * @param y The y coordinate of the mouse cursor.
         * @param delta_x The x component of the scroll movement.
         * @param delta_y The y component of the scroll movement.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_mouse_scroll(
            x: number,
            y: number,
            delta_x: number,
            delta_y: number,
            state: NavigationModifierType,
        ): Gst.Event;
        /**
         * Create a new navigation event signalling that all currently active touch
         * points are cancelled and should be discarded. For example, under Wayland
         * this event might be sent when a swipe passes the threshold to be recognized
         * as a gesture by the compositor.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_touch_cancel(state: NavigationModifierType): Gst.Event;
        /**
         * Create a new navigation event for an added touch point.
         * @param identifier A number uniquely identifying this touch point. It must stay    unique to this touch point at least until an up event is sent for    the same identifier, or all touch points are cancelled.
         * @param x The x coordinate of the new touch point.
         * @param y The y coordinate of the new touch point.
         * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_touch_down(
            identifier: number,
            x: number,
            y: number,
            pressure: number,
            state: NavigationModifierType,
        ): Gst.Event;
        /**
         * Create a new navigation event signalling the end of a touch frame. Touch
         * frames signal that all previous down, motion and up events not followed by
         * another touch frame event already should be considered simultaneous.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_touch_frame(state: NavigationModifierType): Gst.Event;
        /**
         * Create a new navigation event for a moved touch point.
         * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous touch_start event.
         * @param x The x coordinate of the touch point.
         * @param y The y coordinate of the touch point.
         * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_touch_motion(
            identifier: number,
            x: number,
            y: number,
            pressure: number,
            state: NavigationModifierType,
        ): Gst.Event;
        /**
         * Create a new navigation event for a removed touch point.
         * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous down event, but can be reused    after sending this event.
         * @param x The x coordinate of the touch point.
         * @param y The y coordinate of the touch point.
         * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
         * @returns a new #GstEvent
         */
        function navigation_event_new_touch_up(
            identifier: number,
            x: number,
            y: number,
            state: NavigationModifierType,
        ): Gst.Event;
        /**
         * Inspect a #GstNavigation command event and retrieve the enum value of the
         * associated command.
         * @param event A #GstEvent to inspect.
         * @returns TRUE if the navigation command could be extracted, otherwise FALSE.
         */
        function navigation_event_parse_command(event: Gst.Event): [boolean, NavigationCommand | null];
        /**
         * Note: Modifier keys (as defined in #GstNavigationModifierType)
         * [press](GST_NAVIGATION_EVENT_KEY_PRESS) and
         * [release](GST_NAVIGATION_KEY_PRESS) events are generated even if those states are
         * present on all other related events
         * @param event A #GstEvent to inspect.
         */
        function navigation_event_parse_key_event(event: Gst.Event): [boolean, string];
        function navigation_event_parse_modifier_state(event: Gst.Event, state: NavigationModifierType): boolean;
        /**
         * Retrieve the details of either a #GstNavigation mouse button press event or
         * a mouse button release event. Determine which type the event is using
         * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
         * @param event A #GstEvent to inspect.
         * @returns TRUE if the button number and both coordinates could be extracted,     otherwise FALSE.
         */
        function navigation_event_parse_mouse_button_event(event: Gst.Event): [boolean, number, number, number];
        /**
         * Inspect a #GstNavigation mouse movement event and extract the coordinates
         * of the event.
         * @param event A #GstEvent to inspect.
         * @returns TRUE if both coordinates could be extracted, otherwise FALSE.
         */
        function navigation_event_parse_mouse_move_event(event: Gst.Event): [boolean, number, number];
        /**
         * Inspect a #GstNavigation mouse scroll event and extract the coordinates
         * of the event.
         * @param event A #GstEvent to inspect.
         * @returns TRUE if all coordinates could be extracted, otherwise FALSE.
         */
        function navigation_event_parse_mouse_scroll_event(event: Gst.Event): [boolean, number, number, number, number];
        /**
         * Retrieve the details of a #GstNavigation touch-down or touch-motion event.
         * Determine which type the event is using gst_navigation_event_get_type()
         * to retrieve the #GstNavigationEventType.
         * @param event A #GstEvent to inspect.
         * @returns TRUE if all details could be extracted, otherwise FALSE.
         */
        function navigation_event_parse_touch_event(event: Gst.Event): [boolean, number, number, number, number];
        /**
         * Retrieve the details of a #GstNavigation touch-up event.
         * @param event A #GstEvent to inspect.
         * @returns TRUE if all details could be extracted, otherwise FALSE.
         */
        function navigation_event_parse_touch_up_event(event: Gst.Event): [boolean, number, number, number];
        /**
         * Try to set x and y coordinates on a #GstNavigation event. The event must
         * be writable.
         * @param event The #GstEvent to modify.
         * @param x The x coordinate to set.
         * @param y The y coordinate to set.
         * @returns A boolean indicating success.
         */
        function navigation_event_set_coordinates(event: Gst.Event, x: number, y: number): boolean;
        /**
         * Check a bus message to see if it is a #GstNavigation event, and return
         * the #GstNavigationMessageType identifying the type of the message if so.
         * @param message A #GstMessage to inspect.
         * @returns The type of the #GstMessage, or #GST_NAVIGATION_MESSAGE_INVALID if the message is not a #GstNavigation notification.
         */
        function navigation_message_get_type(message: Gst.Message): NavigationMessageType;
        /**
         * Creates a new #GstNavigation message with type
         * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
         * that the current angle, or current number of angles available in a
         * multiangle video has changed.
         * @param src A #GstObject to set as source of the new message.
         * @param cur_angle The currently selected angle.
         * @param n_angles The number of viewing angles now available.
         * @returns The new #GstMessage.
         */
        function navigation_message_new_angles_changed(
            src: Gst.Object,
            cur_angle: number,
            n_angles: number,
        ): Gst.Message;
        /**
         * Creates a new #GstNavigation message with type
         * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
         * @param src A #GstObject to set as source of the new message.
         * @returns The new #GstMessage.
         */
        function navigation_message_new_commands_changed(src: Gst.Object): Gst.Message;
        /**
         * Creates a new #GstNavigation message with type
         * #GST_NAVIGATION_MESSAGE_EVENT.
         * @param src A #GstObject to set as source of the new message.
         * @param event A navigation #GstEvent
         * @returns The new #GstMessage.
         */
        function navigation_message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message;
        /**
         * Creates a new #GstNavigation message with type
         * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
         * @param src A #GstObject to set as source of the new message.
         * @param active %TRUE if the mouse has entered a clickable area of the display. %FALSE if it over a non-clickable area.
         * @returns The new #GstMessage.
         */
        function navigation_message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message;
        /**
         * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
         * and extract the `cur_angle` and `n_angles` parameters.
         * @param message A #GstMessage to inspect.
         * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
         */
        function navigation_message_parse_angles_changed(message: Gst.Message): [boolean, number, number];
        /**
         * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
         * and extract contained #GstEvent. The caller must unref the `event` when done
         * with it.
         * @param message A #GstMessage to inspect.
         * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
         */
        function navigation_message_parse_event(message: Gst.Message): [boolean, Gst.Event | null];
        /**
         * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
         * and extract the active/inactive flag. If the mouse over event is marked
         * active, it indicates that the mouse is over a clickable area.
         * @param message A #GstMessage to inspect.
         * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
         */
        function navigation_message_parse_mouse_over(message: Gst.Message): [boolean, boolean];
        /**
         * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
         * it if it is a #GstNavigation query.
         * @param query The query to inspect
         * @returns The #GstNavigationQueryType of the query, or #GST_NAVIGATION_QUERY_INVALID
         */
        function navigation_query_get_type(query: Gst.Query): NavigationQueryType;
        /**
         * Create a new #GstNavigation angles query. When executed, it will
         * query the pipeline for the set of currently available angles, which may be
         * greater than one in a multiangle video.
         * @returns The new query.
         */
        function navigation_query_new_angles(): Gst.Query;
        /**
         * Create a new #GstNavigation commands query. When executed, it will
         * query the pipeline for the set of currently available commands.
         * @returns The new query.
         */
        function navigation_query_new_commands(): Gst.Query;
        /**
         * Parse the current angle number in the #GstNavigation angles `query` into the
         * #guint pointed to by the `cur_angle` variable, and the number of available
         * angles into the #guint pointed to by the `n_angles` variable.
         * @param query a #GstQuery
         * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
         */
        function navigation_query_parse_angles(query: Gst.Query): [boolean, number, number];
        /**
         * Parse the number of commands in the #GstNavigation commands `query`.
         * @param query a #GstQuery
         * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
         */
        function navigation_query_parse_commands_length(query: Gst.Query): [boolean, number];
        /**
         * Parse the #GstNavigation command query and retrieve the `nth` command from
         * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
         * set to #GST_NAVIGATION_COMMAND_INVALID.
         * @param query a #GstQuery
         * @param nth the nth command to retrieve.
         * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
         */
        function navigation_query_parse_commands_nth(
            query: Gst.Query,
            nth: number,
        ): [boolean, NavigationCommand | null];
        /**
         * Set the #GstNavigation angles query result field in `query`.
         * @param query a #GstQuery
         * @param cur_angle the current viewing angle to set.
         * @param n_angles the number of viewing angles to set.
         */
        function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
        /**
         * Set the #GstNavigation command query result fields in `query`. The number
         * of commands passed must be equal to `n_commands`.
         * @param query a #GstQuery
         * @param cmds An array containing @n_cmds     @GstNavigationCommand values.
         */
        function navigation_query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void;
        function video_afd_meta_api_get_type(): GObject.GType;
        function video_afd_meta_get_info(): Gst.MetaInfo;
        function video_affine_transformation_meta_api_get_type(): GObject.GType;
        function video_affine_transformation_meta_get_info(): Gst.MetaInfo;
        function video_bar_meta_api_get_type(): GObject.GType;
        function video_bar_meta_get_info(): Gst.MetaInfo;
        /**
         * Lets you blend the `src` image into the `dest` image
         * @param dest The #GstVideoFrame where to blend @src in
         * @param src the #GstVideoFrame that we want to blend into
         * @param x The x offset in pixel where the @src image should be blended
         * @param y the y offset in pixel where the @src image should be blended
         * @param global_alpha the global_alpha each per-pixel alpha value is multiplied                with
         */
        function video_blend(dest: VideoFrame, src: VideoFrame, x: number, y: number, global_alpha: number): boolean;
        /**
         * Scales a buffer containing RGBA (or AYUV) video. This is an internal
         * helper function which is used to scale subtitle overlays, and may be
         * deprecated in the near future. Use #GstVideoScaler to scale video buffers
         * instead.
         * @param src the #GstVideoInfo describing the video data in @src_buffer
         * @param src_buffer the source buffer containing video pixels to scale
         * @param dest_height the height in pixels to scale the video data in @src_buffer to
         * @param dest_width the width in pixels to scale the video data in @src_buffer to
         */
        function video_blend_scale_linear_RGBA(
            src: VideoInfo,
            src_buffer: Gst.Buffer,
            dest_height: number,
            dest_width: number,
        ): [VideoInfo, Gst.Buffer];
        /**
         * Given the Pixel Aspect Ratio and size of an input video frame, and the
         * pixel aspect ratio of the intended display device, calculates the actual
         * display ratio the video will be rendered with.
         * @param video_width Width of the video frame in pixels
         * @param video_height Height of the video frame in pixels
         * @param video_par_n Numerator of the pixel aspect ratio of the input video.
         * @param video_par_d Denominator of the pixel aspect ratio of the input video.
         * @param display_par_n Numerator of the pixel aspect ratio of the display device
         * @param display_par_d Denominator of the pixel aspect ratio of the display device
         * @returns A boolean indicating success and a calculated Display Ratio in the dar_n and dar_d parameters. The return value is FALSE in the case of integer overflow or other error.
         */
        function video_calculate_display_ratio(
            video_width: number,
            video_height: number,
            video_par_n: number,
            video_par_d: number,
            display_par_n: number,
            display_par_d: number,
        ): [boolean, number, number];
        function video_caption_meta_api_get_type(): GObject.GType;
        function video_caption_meta_get_info(): Gst.MetaInfo;
        /**
         * Parses fixed Closed Caption #GstCaps and returns the corresponding caption
         * type, or %GST_VIDEO_CAPTION_TYPE_UNKNOWN.
         * @param caps Fixed #GstCaps to parse
         * @returns #GstVideoCaptionType.
         */
        function video_caption_type_from_caps(caps: Gst.Caps): VideoCaptionType;
        /**
         * Creates new caps corresponding to `type`.
         * @param type #GstVideoCaptionType
         * @returns new #GstCaps
         */
        function video_caption_type_to_caps(type: VideoCaptionType): Gst.Caps;
        /**
         * Takes `src` rectangle and position it at the center of `dst` rectangle with or
         * without `scaling`. It handles clipping if the `src` rectangle is bigger than
         * the `dst` one and `scaling` is set to FALSE.
         * @param src a pointer to #GstVideoRectangle describing the source area
         * @param dst a pointer to #GstVideoRectangle describing the destination area
         * @param scaling a #gboolean indicating if scaling should be applied or not
         */
        function video_center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): VideoRectangle;
        /**
         * Convert `s` to a #GstVideoChromaSite
         * @param s a chromasite string
         * @returns a #GstVideoChromaSite or %GST_VIDEO_CHROMA_SITE_UNKNOWN when @s does not contain a valid chroma description.
         */
        function video_chroma_from_string(s: string): VideoChromaSite;
        /**
         * Perform resampling of `width` chroma pixels in `lines`.
         * @param resample a #GstVideoChromaResample
         * @param lines pixel lines
         * @param width the number of pixels on one line
         */
        function video_chroma_resample(resample: VideoChromaResample, lines: any | null, width: number): void;
        /**
         * Convert `s` to a #GstVideoChromaSite
         * @param s a chromasite string
         * @returns a #GstVideoChromaSite or %GST_VIDEO_CHROMA_SITE_UNKNOWN when @s does not contain a valid chroma-site description.
         */
        function video_chroma_site_from_string(s: string): VideoChromaSite;
        /**
         * Converts `site` to its string representation.
         * @param site a #GstVideoChromaSite
         * @returns a string representation of @site          or %NULL if @site contains undefined value or          is equal to %GST_VIDEO_CHROMA_SITE_UNKNOWN
         */
        function video_chroma_site_to_string(site: VideoChromaSite): string | null;
        /**
         * Converts `site` to its string representation.
         * @param site a #GstVideoChromaSite
         * @returns a string describing @site.
         */
        function video_chroma_to_string(site: VideoChromaSite): string;
        function video_codec_alpha_meta_api_get_type(): GObject.GType;
        function video_codec_alpha_meta_get_info(): Gst.MetaInfo;
        /**
         * Converts the `value` to the #GstVideoColorMatrix
         * The matrix coefficients (MatrixCoefficients) value is
         * defined by "ISO/IEC 23001-8 Section 7.3 Table 4"
         * and "ITU-T H.273 Table 4".
         * "H.264 Table E-5" and "H.265 Table E.5" share the identical values.
         * @param value a ITU-T H.273 matrix coefficients value
         * @returns the matched #GstVideoColorMatrix
         */
        function video_color_matrix_from_iso(value: number): VideoColorMatrix;
        /**
         * Get the coefficients used to convert between Y'PbPr and R'G'B' using `matrix`.
         *
         * When:
         *
         *
         * ```
         *   0.0 <= [Y',R',G',B'] <= 1.0)
         *   (-0.5 <= [Pb,Pr] <= 0.5)
         * ```
         *
         *
         * the general conversion is given by:
         *
         *
         * ```
         *   Y' = Kr*R' + (1-Kr-Kb)*G' + Kb*B'
         *   Pb = (B'-Y')/(2*(1-Kb))
         *   Pr = (R'-Y')/(2*(1-Kr))
         * ```
         *
         *
         * and the other way around:
         *
         *
         * ```
         *   R' = Y' + Cr*2*(1-Kr)
         *   G' = Y' - Cb*2*(1-Kb)*Kb/(1-Kr-Kb) - Cr*2*(1-Kr)*Kr/(1-Kr-Kb)
         *   B' = Y' + Cb*2*(1-Kb)
         * ```
         *
         * @param matrix a #GstVideoColorMatrix
         * @returns TRUE if @matrix was a YUV color format and @Kr and @Kb contain valid    values.
         */
        function video_color_matrix_get_Kr_Kb(matrix: VideoColorMatrix): [boolean, number, number];
        /**
         * Converts #GstVideoColorMatrix to the "matrix coefficients"
         * (MatrixCoefficients) value defined by "ISO/IEC 23001-8 Section 7.3 Table 4"
         * and "ITU-T H.273 Table 4".
         * "H.264 Table E-5" and "H.265 Table E.5" share the identical values.
         * @param matrix a #GstVideoColorMatrix
         * @returns The value of ISO/IEC 23001-8 matrix coefficients.
         */
        function video_color_matrix_to_iso(matrix: VideoColorMatrix): number;
        /**
         * Converts the `value` to the #GstVideoColorPrimaries
         * The colour primaries (ColourPrimaries) value is
         * defined by "ISO/IEC 23001-8 Section 7.1 Table 2" and "ITU-T H.273 Table 2".
         * "H.264 Table E-3" and "H.265 Table E.3" share the identical values.
         * @param value a ITU-T H.273 colour primaries value
         * @returns the matched #GstVideoColorPrimaries
         */
        function video_color_primaries_from_iso(value: number): VideoColorPrimaries;
        /**
         * Get information about the chromaticity coordinates of `primaries`.
         * @param primaries a #GstVideoColorPrimaries
         * @returns a #GstVideoColorPrimariesInfo for @primaries.
         */
        function video_color_primaries_get_info(primaries: VideoColorPrimaries): VideoColorPrimariesInfo;
        /**
         * Checks whether `primaries` and `other` are functionally equivalent
         * @param primaries a #GstVideoColorPrimaries
         * @param other another #GstVideoColorPrimaries
         * @returns TRUE if @primaries and @other can be considered equivalent.
         */
        function video_color_primaries_is_equivalent(
            primaries: VideoColorPrimaries,
            other: VideoColorPrimaries,
        ): boolean;
        /**
         * Converts #GstVideoColorPrimaries to the "colour primaries" (ColourPrimaries)
         * value defined by "ISO/IEC 23001-8 Section 7.1 Table 2"
         * and "ITU-T H.273 Table 2".
         * "H.264 Table E-3" and "H.265 Table E.3" share the identical values.
         * @param primaries a #GstVideoColorPrimaries
         * @returns The value of ISO/IEC 23001-8 colour primaries.
         */
        function video_color_primaries_to_iso(primaries: VideoColorPrimaries): number;
        /**
         * Compute the offset and scale values for each component of `info`. For each
         * component, (c[i] - offset[i]) / scale[i] will scale the component c[i] to the
         * range [0.0 .. 1.0].
         *
         * The reverse operation (c[i] * scale[i]) + offset[i] can be used to convert
         * the component values in range [0.0 .. 1.0] back to their representation in
         * `info` and `range`.
         * @param range a #GstVideoColorRange
         * @param info a #GstVideoFormatInfo
         */
        function video_color_range_offsets(range: VideoColorRange, info: VideoFormatInfo): [number[], number[]];
        function video_color_transfer_decode(func: VideoTransferFunction, val: number): number;
        function video_color_transfer_encode(func: VideoTransferFunction, val: number): number;
        /**
         * Converts a raw video buffer into the specified output caps.
         *
         * The output caps can be any raw video formats or any image formats (jpeg, png, ...).
         *
         * The width, height and pixel-aspect-ratio can also be specified in the output caps.
         * @param sample a #GstSample
         * @param to_caps the #GstCaps to convert to
         * @param timeout the maximum amount of time allowed for the processing.
         * @returns The converted #GstSample, or %NULL if an error happened (in which case @err will point to the #GError).
         */
        function video_convert_sample(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample | null;
        /**
         * Converts a raw video buffer into the specified output caps.
         *
         * The output caps can be any raw video formats or any image formats (jpeg, png, ...).
         *
         * The width, height and pixel-aspect-ratio can also be specified in the output caps.
         *
         * `callback` will be called after conversion, when an error occurred or if conversion didn't
         * finish after `timeout`. `callback` will always be called from the thread default
         * %GMainContext, see g_main_context_get_thread_default(). If GLib before 2.22 is used,
         * this will always be the global default main context.
         *
         * `destroy_notify` will be called after the callback was called and `user_data` is not needed
         * anymore.
         * @param sample a #GstSample
         * @param to_caps the #GstCaps to convert to
         * @param timeout the maximum amount of time allowed for the processing.
         * @param callback %GstVideoConvertSampleCallback that will be called after conversion.
         */
        function video_convert_sample_async(
            sample: Gst.Sample,
            to_caps: Gst.Caps,
            timeout: Gst.ClockTime,
            callback: VideoConvertSampleCallback,
        ): void;
        function video_crop_meta_api_get_type(): GObject.GType;
        function video_crop_meta_get_info(): Gst.MetaInfo;
        /**
         * Converting the video format into dma drm fourcc. If no
         * matching fourcc found, then DRM_FORMAT_INVALID is returned.
         * @param format a #GstVideoFormat
         * @returns the DRM_FORMAT_* corresponding to the @format.
         */
        function video_dma_drm_fourcc_from_format(format: VideoFormat): number;
        /**
         * Convert the `format_str` string into the drm fourcc value. The `modifier` is
         * also parsed if we want. Please note that the `format_str` should follow the
         * fourcc:modifier kind style, such as NV12:0x0100000000000002
         * @param format_str a drm format string
         * @returns The drm fourcc value or DRM_FORMAT_INVALID if @format_str is invalid.
         */
        function video_dma_drm_fourcc_from_string(format_str: string): [number, number];
        /**
         * Converting a dma drm fourcc into the video format. If no matching
         * video format found, then GST_VIDEO_FORMAT_UNKNOWN is returned.
         * @param fourcc the dma drm value.
         * @returns the GST_VIDEO_FORMAT_* corresponding to the @fourcc.
         */
        function video_dma_drm_fourcc_to_format(fourcc: number): VideoFormat;
        /**
         * Returns a string containing drm kind format, such as
         * NV12:0x0100000000000002, or NULL otherwise.
         * @param fourcc a drm fourcc value.
         * @param modifier the associated modifier value.
         * @returns the drm kind string composed   of to @fourcc and @modifier.
         */
        function video_dma_drm_fourcc_to_string(fourcc: number, modifier: number): string | null;
        /**
         * Checks if an event is a force key unit event. Returns true for both upstream
         * and downstream force key unit events.
         * @param event A #GstEvent to check
         * @returns %TRUE if the event is a valid force key unit event
         */
        function video_event_is_force_key_unit(event: Gst.Event): boolean;
        /**
         * Creates a new downstream force key unit event. A downstream force key unit
         * event can be sent down the pipeline to request downstream elements to produce
         * a key unit. A downstream force key unit event must also be sent when handling
         * an upstream force key unit event to notify downstream that the latter has been
         * handled.
         *
         * To parse an event created by gst_video_event_new_downstream_force_key_unit() use
         * gst_video_event_parse_downstream_force_key_unit().
         * @param timestamp the timestamp of the buffer that starts a new key unit
         * @param stream_time the stream_time of the buffer that starts a new key unit
         * @param running_time the running_time of the buffer that starts a new key unit
         * @param all_headers %TRUE to produce headers when starting a new key unit
         * @param count integer that can be used to number key units
         * @returns The new GstEvent
         */
        function video_event_new_downstream_force_key_unit(
            timestamp: Gst.ClockTime,
            stream_time: Gst.ClockTime,
            running_time: Gst.ClockTime,
            all_headers: boolean,
            count: number,
        ): Gst.Event;
        /**
         * Creates a new Still Frame event. If `in_still` is %TRUE, then the event
         * represents the start of a still frame sequence. If it is %FALSE, then
         * the event ends a still frame sequence.
         *
         * To parse an event created by gst_video_event_new_still_frame() use
         * gst_video_event_parse_still_frame().
         * @param in_still boolean value for the still-frame state of the event.
         * @returns The new GstEvent
         */
        function video_event_new_still_frame(in_still: boolean): Gst.Event;
        /**
         * Creates a new upstream force key unit event. An upstream force key unit event
         * can be sent to request upstream elements to produce a key unit.
         *
         * `running_time` can be set to request a new key unit at a specific
         * running_time. If set to GST_CLOCK_TIME_NONE, upstream elements will produce a
         * new key unit as soon as possible.
         *
         * To parse an event created by gst_video_event_new_downstream_force_key_unit() use
         * gst_video_event_parse_downstream_force_key_unit().
         * @param running_time the running_time at which a new key unit should be produced
         * @param all_headers %TRUE to produce headers when starting a new key unit
         * @param count integer that can be used to number key units
         * @returns The new GstEvent
         */
        function video_event_new_upstream_force_key_unit(
            running_time: Gst.ClockTime,
            all_headers: boolean,
            count: number,
        ): Gst.Event;
        /**
         * Get timestamp, stream-time, running-time, all-headers and count in the force
         * key unit event. See gst_video_event_new_downstream_force_key_unit() for a
         * full description of the downstream force key unit event.
         *
         * `running_time` will be adjusted for any pad offsets of pads it was passing through.
         * @param event A #GstEvent to parse
         * @returns %TRUE if the event is a valid downstream force key unit event.
         */
        function video_event_parse_downstream_force_key_unit(
            event: Gst.Event,
        ): [boolean, Gst.ClockTime, Gst.ClockTime, Gst.ClockTime, boolean, number];
        /**
         * Parse a #GstEvent, identify if it is a Still Frame event, and
         * return the still-frame state from the event if it is.
         * If the event represents the start of a still frame, the in_still
         * variable will be set to TRUE, otherwise FALSE. It is OK to pass NULL for the
         * in_still variable order to just check whether the event is a valid still-frame
         * event.
         *
         * Create a still frame event using gst_video_event_new_still_frame()
         * @param event A #GstEvent to parse
         * @returns %TRUE if the event is a valid still-frame event. %FALSE if not
         */
        function video_event_parse_still_frame(event: Gst.Event): [boolean, boolean];
        /**
         * Get running-time, all-headers and count in the force key unit event. See
         * gst_video_event_new_upstream_force_key_unit() for a full description of the
         * upstream force key unit event.
         *
         * Create an upstream force key unit event using  gst_video_event_new_upstream_force_key_unit()
         *
         * `running_time` will be adjusted for any pad offsets of pads it was passing through.
         * @param event A #GstEvent to parse
         * @returns %TRUE if the event is a valid upstream force-key-unit event. %FALSE if not
         */
        function video_event_parse_upstream_force_key_unit(event: Gst.Event): [boolean, Gst.ClockTime, boolean, number];
        /**
         * Convert `order` to a #GstVideoFieldOrder
         * @param order a field order
         * @returns the #GstVideoFieldOrder of @order or    #GST_VIDEO_FIELD_ORDER_UNKNOWN when @order is not a valid    string representation for a #GstVideoFieldOrder.
         */
        function video_field_order_from_string(order: string): VideoFieldOrder;
        /**
         * Convert `order` to its string representation.
         * @param order a #GstVideoFieldOrder
         * @returns @order as a string.
         */
        function video_field_order_to_string(order: VideoFieldOrder): string;
        /**
         * Converts a FOURCC value into the corresponding #GstVideoFormat.
         * If the FOURCC cannot be represented by #GstVideoFormat,
         * #GST_VIDEO_FORMAT_UNKNOWN is returned.
         * @param fourcc a FOURCC value representing raw YUV video
         * @returns the #GstVideoFormat describing the FOURCC value
         */
        function video_format_from_fourcc(fourcc: number): VideoFormat;
        /**
         * Find the #GstVideoFormat for the given parameters.
         * @param depth the amount of bits used for a pixel
         * @param bpp the amount of bits used to store a pixel. This value is bigger than   @depth
         * @param endianness the endianness of the masks, #G_LITTLE_ENDIAN or #G_BIG_ENDIAN
         * @param red_mask the red mask
         * @param green_mask the green mask
         * @param blue_mask the blue mask
         * @param alpha_mask the alpha mask, or 0 if no alpha mask
         * @returns a #GstVideoFormat or GST_VIDEO_FORMAT_UNKNOWN when the parameters to not specify a known format.
         */
        function video_format_from_masks(
            depth: number,
            bpp: number,
            endianness: number,
            red_mask: number,
            green_mask: number,
            blue_mask: number,
            alpha_mask: number,
        ): VideoFormat;
        /**
         * Convert the `format` string to its #GstVideoFormat.
         * @param format a format string
         * @returns the #GstVideoFormat for @format or GST_VIDEO_FORMAT_UNKNOWN when the string is not a known format.
         */
        function video_format_from_string(format: string): VideoFormat;
        /**
         * Get the #GstVideoFormatInfo for `format`
         * @param format a #GstVideoFormat
         * @returns The #GstVideoFormatInfo for @format.
         */
        function video_format_get_info(format: VideoFormat): VideoFormatInfo;
        /**
         * Get the default palette of `format`. This the palette used in the pack
         * function for paletted formats.
         * @param format a #GstVideoFormat
         * @returns the default palette of @format or %NULL when @format does not have a palette.
         */
        function video_format_get_palette(format: VideoFormat): [any | null, number];
        /**
         * Converts a #GstVideoFormat value into the corresponding FOURCC.  Only
         * a few YUV formats have corresponding FOURCC values.  If `format` has
         * no corresponding FOURCC value, 0 is returned.
         * @param format a #GstVideoFormat video format
         * @returns the FOURCC corresponding to @format
         */
        function video_format_to_fourcc(format: VideoFormat): number;
        /**
         * Returns a string containing a descriptive name for
         * the #GstVideoFormat if there is one, or NULL otherwise.
         * @param format a #GstVideoFormat video format
         * @returns the name corresponding to @format
         */
        function video_format_to_string(format: VideoFormat): string;
        /**
         * Return all the raw video formats supported by GStreamer including
         * special opaque formats such as %GST_VIDEO_FORMAT_DMA_DRM for which
         * no software conversion exists. This should be use for passthrough
         * template cpas.
         * @returns an array of #GstVideoFormat
         */
        function video_formats_any(): VideoFormat[];
        /**
         * Return all the raw video formats supported by GStreamer.
         * @returns an array of #GstVideoFormat
         */
        function video_formats_raw(): VideoFormat[];
        /**
         * Use `info` and `buffer` to fill in the values of `frame`. `frame` is usually
         * allocated on the stack, and you will pass the address to the #GstVideoFrame
         * structure allocated on the stack; gst_video_frame_map() will then fill in
         * the structures with the various video-specific information you need to access
         * the pixels of the video buffer. You can then use accessor macros such as
         * GST_VIDEO_FRAME_COMP_DATA(), GST_VIDEO_FRAME_PLANE_DATA(),
         * GST_VIDEO_FRAME_COMP_STRIDE(), GST_VIDEO_FRAME_PLANE_STRIDE() etc.
         * to get to the pixels.
         *
         *
         * ```c
         *   GstVideoFrame vframe;
         *   ...
         *   // set RGB pixels to black one at a time
         *   if (gst_video_frame_map (&vframe, video_info, video_buffer, GST_MAP_WRITE)) {
         *     guint8 *pixels = GST_VIDEO_FRAME_PLANE_DATA (vframe, 0);
         *     guint stride = GST_VIDEO_FRAME_PLANE_STRIDE (vframe, 0);
         *     guint pixel_stride = GST_VIDEO_FRAME_COMP_PSTRIDE (vframe, 0);
         *
         *     for (h = 0; h < height; ++h) {
         *       for (w = 0; w < width; ++w) {
         *         guint8 *pixel = pixels + h * stride + w * pixel_stride;
         *
         *         memset (pixel, 0, pixel_stride);
         *       }
         *     }
         *
         *     gst_video_frame_unmap (&vframe);
         *   }
         *   ...
         * ```
         *
         *
         * All video planes of `buffer` will be mapped and the pointers will be set in
         * `frame->`data.
         *
         * The purpose of this function is to make it easy for you to get to the video
         * pixels in a generic way, without you having to worry too much about details
         * such as whether the video data is allocated in one contiguous memory chunk
         * or multiple memory chunks (e.g. one for each plane); or if custom strides
         * and custom plane offsets are used or not (as signalled by GstVideoMeta on
         * each buffer). This function will just fill the #GstVideoFrame structure
         * with the right values and if you use the accessor macros everything will
         * just work and you can access the data easily. It also maps the underlying
         * memory chunks for you.
         * @param info a #GstVideoInfo
         * @param buffer the buffer to map
         * @param flags #GstMapFlags
         * @returns %TRUE on success.
         */
        function video_frame_map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, VideoFrame];
        /**
         * Use `info` and `buffer` to fill in the values of `frame` with the video frame
         * information of frame `id`.
         *
         * When `id` is -1, the default frame is mapped. When `id` != -1, this function
         * will return %FALSE when there is no GstVideoMeta with that id.
         *
         * All video planes of `buffer` will be mapped and the pointers will be set in
         * `frame->`data.
         * @param info a #GstVideoInfo
         * @param buffer the buffer to map
         * @param id the frame id to map
         * @param flags #GstMapFlags
         * @returns %TRUE on success.
         */
        function video_frame_map_id(
            info: VideoInfo,
            buffer: Gst.Buffer,
            id: number,
            flags: Gst.MapFlags,
        ): [boolean, VideoFrame];
        function video_gl_texture_upload_meta_api_get_type(): GObject.GType;
        function video_gl_texture_upload_meta_get_info(): Gst.MetaInfo;
        /**
         * Given the nominal duration of one video frame,
         * this function will check some standard framerates for
         * a close match (within 0.1%) and return one if possible,
         *
         * It will calculate an arbitrary framerate if no close
         * match was found, and return %FALSE.
         *
         * It returns %FALSE if a duration of 0 is passed.
         * @param duration Nominal duration of one frame
         * @returns %TRUE if a close "standard" framerate was recognised, and %FALSE otherwise.
         */
        function video_guess_framerate(duration: Gst.ClockTime): [boolean, number, number];
        /**
         * Parse `caps` and update `info`. Please note that the `caps` should be
         * a dma drm caps. The gst_video_is_dma_drm_caps() can be used to verify
         * it before calling this function.
         * @param caps a #GstCaps
         * @returns TRUE if @caps could be parsed
         */
        function video_info_dma_drm_from_caps(caps: Gst.Caps): [boolean, VideoInfoDmaDrm];
        /**
         * Fills `drm_info` if `info'`s format has a valid drm format and `modifier` is also
         * valid
         * @param info a #GstVideoInfo
         * @param modifier the associated modifier value.
         * @returns %TRUE if @drm_info is filled correctly.
         */
        function video_info_dma_drm_from_video_info(info: VideoInfo, modifier: number): [boolean, VideoInfoDmaDrm];
        /**
         * Initialize `drm_info` with default values.
         */
        function video_info_dma_drm_init(): VideoInfoDmaDrm;
        /**
         * Parse `caps` and update `info`.
         * @param caps a #GstCaps
         * @returns TRUE if @caps could be parsed
         */
        function video_info_from_caps(caps: Gst.Caps): [boolean, VideoInfo];
        /**
         * Initialize `info` with default values.
         */
        function video_info_init(): VideoInfo;
        /**
         * Convert `mode` to a #GstVideoInterlaceMode
         * @param mode a mode
         * @returns the #GstVideoInterlaceMode of @mode or    #GST_VIDEO_INTERLACE_MODE_PROGRESSIVE when @mode is not a valid    string representation for a #GstVideoInterlaceMode.
         */
        function video_interlace_mode_from_string(mode: string): VideoInterlaceMode;
        /**
         * Convert `mode` to its string representation.
         * @param mode a #GstVideoInterlaceMode
         * @returns @mode as a string.
         */
        function video_interlace_mode_to_string(mode: VideoInterlaceMode): string;
        /**
         * Given a frame's dimensions and pixel aspect ratio, this function will
         * calculate the frame's aspect ratio and compare it against a set of
         * common well-known "standard" aspect ratios.
         * @param width Width of the video frame
         * @param height Height of the video frame
         * @param par_n Pixel aspect ratio numerator
         * @param par_d Pixel aspect ratio denominator
         * @returns %TRUE if a known "standard" aspect ratio was recognised, and %FALSE otherwise.
         */
        function video_is_common_aspect_ratio(width: number, height: number, par_n: number, par_d: number): boolean;
        /**
         * Check whether the `caps` is a dma drm kind caps. Please note that
         * the caps should be fixed.
         * @param caps a #GstCaps
         * @returns %TRUE if the caps is a dma drm caps.
         */
        function video_is_dma_drm_caps(caps: Gst.Caps): boolean;
        /**
         * Return a generic raw video caps for formats defined in `formats`.
         * If `formats` is %NULL returns a caps for all the supported raw video formats,
         * see gst_video_formats_raw().
         * @param formats an array of raw #GstVideoFormat, or %NULL
         * @returns a video @GstCaps
         */
        function video_make_raw_caps(formats?: VideoFormat[] | null): Gst.Caps;
        /**
         * Return a generic raw video caps for formats defined in `formats` with features
         * `features`.
         * If `formats` is %NULL returns a caps for all the supported video formats,
         * see gst_video_formats_raw().
         * @param formats an array of raw #GstVideoFormat, or %NULL
         * @param features the #GstCapsFeatures to set on the caps
         * @returns a video @GstCaps
         */
        function video_make_raw_caps_with_features(
            formats?: VideoFormat[] | null,
            features?: Gst.CapsFeatures | null,
        ): Gst.Caps;
        /**
         * Extract #GstVideoMasteringDisplayInfo from `mastering`
         * @param mastering a #GstStructure representing #GstVideoMasteringDisplayInfo
         * @returns %TRUE if @minfo was filled with @mastering
         */
        function video_mastering_display_info_from_string(mastering: string): [boolean, VideoMasteringDisplayInfo];
        function video_meta_api_get_type(): GObject.GType;
        function video_meta_get_info(): Gst.MetaInfo;
        /**
         * Get the #GQuark for the "gst-video-scale" metadata transform operation.
         * @returns a #GQuark
         */
        function video_meta_transform_scale_get_quark(): GLib.Quark;
        function video_multiview_get_doubled_height_modes(): unknown;
        function video_multiview_get_doubled_size_modes(): unknown;
        function video_multiview_get_doubled_width_modes(): unknown;
        function video_multiview_get_mono_modes(): unknown;
        function video_multiview_get_unpacked_modes(): unknown;
        function video_multiview_guess_half_aspect(
            mv_mode: VideoMultiviewMode,
            width: number,
            height: number,
            par_n: number,
            par_d: number,
        ): boolean;
        function video_multiview_mode_from_caps_string(caps_mview_mode: string): VideoMultiviewMode;
        /**
         * Given a #GstVideoMultiviewMode returns the multiview-mode caps string
         * for insertion into a caps structure
         * @param mview_mode A #GstVideoMultiviewMode value
         * @returns The caps string representation of the mode, or NULL if invalid.
         */
        function video_multiview_mode_to_caps_string(mview_mode: VideoMultiviewMode): string | null;
        /**
         * Utility function that transforms the width/height/PAR
         * and multiview mode and flags of a #GstVideoInfo into
         * the requested mode.
         * @param info A #GstVideoInfo structure to operate on
         * @param out_mview_mode A #GstVideoMultiviewMode value
         * @param out_mview_flags A set of #GstVideoMultiviewFlags
         */
        function video_multiview_video_info_change_mode(
            info: VideoInfo,
            out_mview_mode: VideoMultiviewMode,
            out_mview_flags: VideoMultiviewFlags,
        ): void;
        /**
         * Parses the "image-orientation" tag and transforms it into the
         * #GstVideoOrientationMethod enum.
         * @param taglist A #GstTagList
         * @returns TRUE if there was a valid "image-orientation" tag in the taglist.
         */
        function video_orientation_from_tag(taglist: Gst.TagList): [boolean, VideoOrientationMethod];
        function video_overlay_composition_meta_api_get_type(): GObject.GType;
        function video_overlay_composition_meta_get_info(): Gst.MetaInfo;
        /**
         * This helper shall be used by classes implementing the #GstVideoOverlay
         * interface that want the render rectangle to be controllable using
         * properties. This helper will install "render-rectangle" property into the
         * class.
         * @param oclass The class on which the properties will be installed
         * @param last_prop_id The first free property ID to use
         */
        function video_overlay_install_properties(oclass: typeof GObject.Object, last_prop_id: number): void;
        /**
         * This helper shall be used by classes implementing the #GstVideoOverlay
         * interface that want the render rectangle to be controllable using
         * properties. This helper will parse and set the render rectangle calling
         * gst_video_overlay_set_render_rectangle().
         * @param object The instance on which the property is set
         * @param last_prop_id The highest property ID.
         * @param property_id The property ID
         * @param value The #GValue to be set
         * @returns %TRUE if the @property_id matches the GstVideoOverlay property
         */
        function video_overlay_set_property(
            object: GObject.Object,
            last_prop_id: number,
            property_id: number,
            value: GObject.Value | any,
        ): boolean;
        function video_region_of_interest_meta_api_get_type(): GObject.GType;
        function video_region_of_interest_meta_get_info(): Gst.MetaInfo;
        function video_sei_user_data_unregistered_meta_api_get_type(): GObject.GType;
        function video_sei_user_data_unregistered_meta_get_info(): Gst.MetaInfo;
        /**
         * Parses and returns the Precision Time Stamp (ST 0604) from the SEI User Data Unregistered buffer
         * @param user_data a #GstVideoSEIUserDataUnregisteredMeta
         * @returns True if data is a Precision Time Stamp and it was parsed correctly
         */
        function video_sei_user_data_unregistered_parse_precision_time_stamp(
            user_data: VideoSEIUserDataUnregisteredMeta,
        ): [boolean, number, number];
        /**
         * Get the tile index of the tile at coordinates `x` and `y` in the tiled
         * image of `x_tiles` by `y_tiles`.
         *
         * Use this method when `mode` is of type %GST_VIDEO_TILE_TYPE_INDEXED.
         * @param mode a #GstVideoTileMode
         * @param x x coordinate
         * @param y y coordinate
         * @param x_tiles number of horizintal tiles
         * @param y_tiles number of vertical tiles
         * @returns the index of the tile at @x and @y in the tiled image of   @x_tiles by @y_tiles.
         */
        function video_tile_get_index(
            mode: VideoTileMode,
            x: number,
            y: number,
            x_tiles: number,
            y_tiles: number,
        ): number;
        function video_time_code_meta_api_get_type(): GObject.GType;
        function video_time_code_meta_get_info(): Gst.MetaInfo;
        /**
         * Convert `val` to its gamma decoded value. This is the inverse operation of
         * gst_video_color_transfer_encode().
         *
         * For a non-linear value L' in the range [0..1], conversion to the linear
         * L is in general performed with a power function like:
         *
         *
         * ```
         *    L = L' ^ gamma
         * ```
         *
         *
         * Depending on `func,` different formulas might be applied. Some formulas
         * encode a linear segment in the lower range.
         * @param func a #GstVideoTransferFunction
         * @param val a value
         * @returns the gamma decoded value of @val
         */
        function video_transfer_function_decode(func: VideoTransferFunction, val: number): number;
        /**
         * Convert `val` to its gamma encoded value.
         *
         * For a linear value L in the range [0..1], conversion to the non-linear
         * (gamma encoded) L' is in general performed with a power function like:
         *
         *
         * ```
         *    L' = L ^ (1 / gamma)
         * ```
         *
         *
         * Depending on `func,` different formulas might be applied. Some formulas
         * encode a linear segment in the lower range.
         * @param func a #GstVideoTransferFunction
         * @param val a value
         * @returns the gamma encoded value of @val
         */
        function video_transfer_function_encode(func: VideoTransferFunction, val: number): number;
        /**
         * Converts the `value` to the #GstVideoTransferFunction
         * The transfer characteristics (TransferCharacteristics) value is
         * defined by "ISO/IEC 23001-8 Section 7.2 Table 3"
         * and "ITU-T H.273 Table 3".
         * "H.264 Table E-4" and "H.265 Table E.4" share the identical values.
         * @param value a ITU-T H.273 transfer characteristics value
         * @returns the matched #GstVideoTransferFunction
         */
        function video_transfer_function_from_iso(value: number): VideoTransferFunction;
        /**
         * Returns whether `from_func` and `to_func` are equivalent. There are cases
         * (e.g. BT601, BT709, and BT2020_10) where several functions are functionally
         * identical. In these cases, when doing conversion, we should consider them
         * as equivalent. Also, BT2020_12 is the same as the aforementioned three for
         * less than 12 bits per pixel.
         * @param from_func #GstVideoTransferFunction to convert from
         * @param from_bpp bits per pixel to convert from
         * @param to_func #GstVideoTransferFunction to convert into
         * @param to_bpp bits per pixel to convert into
         * @returns TRUE if @from_func and @to_func can be considered equivalent.
         */
        function video_transfer_function_is_equivalent(
            from_func: VideoTransferFunction,
            from_bpp: number,
            to_func: VideoTransferFunction,
            to_bpp: number,
        ): boolean;
        /**
         * Converts #GstVideoTransferFunction to the "transfer characteristics"
         * (TransferCharacteristics) value defined by "ISO/IEC 23001-8 Section 7.2 Table 3"
         * and "ITU-T H.273 Table 3".
         * "H.264 Table E-4" and "H.265 Table E.4" share the identical values.
         * @param func a #GstVideoTransferFunction
         * @returns The value of ISO/IEC 23001-8 transfer characteristics.
         */
        function video_transfer_function_to_iso(func: VideoTransferFunction): number;
        interface VideoAffineTransformationGetMatrix {
            (meta: VideoAffineTransformationMeta, matrix: number): boolean;
        }
        interface VideoConvertSampleCallback {
            (sample: Gst.Sample, error: GLib.Error): void;
        }
        interface VideoFormatPack {
            (
                info: VideoFormatInfo,
                flags: VideoPackFlags,
                src: any | null,
                sstride: number,
                data: any | null,
                stride: number,
                chroma_site: VideoChromaSite,
                y: number,
                width: number,
            ): void;
        }
        interface VideoFormatUnpack {
            (
                info: VideoFormatInfo,
                flags: VideoPackFlags,
                dest: any | null,
                data: any | null,
                stride: number,
                x: number,
                y: number,
                width: number,
            ): void;
        }
        interface VideoGLTextureUpload {
            (meta: VideoGLTextureUploadMeta, texture_id: number): boolean;
        }
        /**
         * Flags to indicate the state of modifier keys and mouse buttons
         * in events.
         *
         * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
         * Apple, CapsLock or ShiftLock.
         */

        /**
         * Flags to indicate the state of modifier keys and mouse buttons
         * in events.
         *
         * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
         * Apple, CapsLock or ShiftLock.
         */
        export namespace NavigationModifierType {
            export const $gtype: GObject.GType<NavigationModifierType>;
        }

        enum NavigationModifierType {
            NONE,
            /**
             * the Shift key.
             */
            SHIFT_MASK,
            LOCK_MASK,
            /**
             * the Control key.
             */
            CONTROL_MASK,
            /**
             * the third modifier key
             */
            MOD1_MASK,
            /**
             * the fourth modifier key
             */
            MOD2_MASK,
            /**
             * the fifth modifier key
             */
            MOD3_MASK,
            /**
             * the sixth modifier key
             */
            MOD4_MASK,
            /**
             * the seventh modifier key
             */
            MOD5_MASK,
            /**
             * the first mouse button (usually the left button).
             */
            BUTTON1_MASK,
            /**
             * the second mouse button (usually the right button).
             */
            BUTTON2_MASK,
            /**
             * the third mouse button (usually the mouse wheel button or middle button).
             */
            BUTTON3_MASK,
            /**
             * the fourth mouse button (typically the "Back" button).
             */
            BUTTON4_MASK,
            /**
             * the fifth mouse button (typically the "forward" button).
             */
            BUTTON5_MASK,
            /**
             * the Super modifier
             */
            SUPER_MASK,
            /**
             * the Hyper modifier
             */
            HYPER_MASK,
            /**
             * the Meta modifier
             */
            META_MASK,
            /**
             * A mask covering all entries in #GdkModifierType.
             */
            MASK,
        }
        /**
         * Additional video buffer flags. These flags can potentially be used on any
         * buffers carrying closed caption data, or video data - even encoded data.
         *
         * Note that these are only valid for #GstCaps of type: video/... and caption/...
         * They can conflict with other extended buffer flags.
         */

        /**
         * Additional video buffer flags. These flags can potentially be used on any
         * buffers carrying closed caption data, or video data - even encoded data.
         *
         * Note that these are only valid for #GstCaps of type: video/... and caption/...
         * They can conflict with other extended buffer flags.
         */
        export namespace VideoBufferFlags {
            export const $gtype: GObject.GType<VideoBufferFlags>;
        }

        enum VideoBufferFlags {
            /**
             * If the #GstBuffer is interlaced. In mixed
             *                                     interlace-mode, this flags specifies if the frame is
             *                                     interlaced or progressive.
             */
            INTERLACED,
            /**
             * If the #GstBuffer is interlaced, then the first field
             *                                     in the video frame is the top field.  If unset, the
             *                                     bottom field is first.
             */
            TFF,
            /**
             * If the #GstBuffer is interlaced, then the first field
             *                                     (as defined by the %GST_VIDEO_BUFFER_FLAG_TFF flag setting)
             *                                     is repeated.
             */
            RFF,
            /**
             * If the #GstBuffer is interlaced, then only the
             *                                     first field (as defined by the %GST_VIDEO_BUFFER_FLAG_TFF
             *                                     flag setting) is to be displayed (Since: 1.16).
             */
            ONEFIELD,
            /**
             * The #GstBuffer contains one or more specific views,
             *                                     such as left or right eye view. This flags is set on
             *                                     any buffer that contains non-mono content - even for
             *                                     streams that contain only a single viewpoint. In mixed
             *                                     mono / non-mono streams, the absence of the flag marks
             *                                     mono buffers.
             */
            MULTIPLE_VIEW,
            /**
             * When conveying stereo/multiview content with
             *                                     frame-by-frame methods, this flag marks the first buffer
             *                                      in a bundle of frames that belong together.
             */
            FIRST_IN_BUNDLE,
            /**
             * The video frame has the top field only. This is the
             *                                     same as GST_VIDEO_BUFFER_FLAG_TFF |
             *                                     GST_VIDEO_BUFFER_FLAG_ONEFIELD (Since: 1.16).
             *                                     Use GST_VIDEO_BUFFER_IS_TOP_FIELD() to check for this flag.
             */
            TOP_FIELD,
            /**
             * The video frame has the bottom field only. This is
             *                                     the same as GST_VIDEO_BUFFER_FLAG_ONEFIELD
             *                                     (GST_VIDEO_BUFFER_FLAG_TFF flag unset) (Since: 1.16).
             *                                     Use GST_VIDEO_BUFFER_IS_BOTTOM_FIELD() to check for this flag.
             */
            BOTTOM_FIELD,
            /**
             * The #GstBuffer contains the end of a video field or frame
             *                                     boundary such as the last subframe or packet (Since: 1.18).
             */
            MARKER,
            /**
             * Offset to define more flags
             */
            LAST,
        }
        /**
         * Extra flags that influence the result from gst_video_chroma_resample_new().
         */

        /**
         * Extra flags that influence the result from gst_video_chroma_resample_new().
         */
        export namespace VideoChromaFlags {
            export const $gtype: GObject.GType<VideoChromaFlags>;
        }

        enum VideoChromaFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * the input is interlaced
             */
            INTERLACED,
        }
        /**
         * Various Chroma sitings.
         */

        /**
         * Various Chroma sitings.
         */
        export namespace VideoChromaSite {
            export const $gtype: GObject.GType<VideoChromaSite>;
        }

        enum VideoChromaSite {
            /**
             * unknown cositing
             */
            UNKNOWN,
            /**
             * no cositing
             */
            NONE,
            /**
             * chroma is horizontally cosited
             */
            H_COSITED,
            /**
             * chroma is vertically cosited
             */
            V_COSITED,
            /**
             * choma samples are sited on alternate lines
             */
            ALT_LINE,
            /**
             * chroma samples cosited with luma samples
             */
            COSITED,
            /**
             * jpeg style cositing, also for mpeg1 and mjpeg
             */
            JPEG,
            /**
             * mpeg2 style cositing
             */
            MPEG2,
            /**
             * DV style cositing
             */
            DV,
        }
        /**
         * Flags for #GstVideoCodecFrame
         */

        /**
         * Flags for #GstVideoCodecFrame
         */
        export namespace VideoCodecFrameFlags {
            export const $gtype: GObject.GType<VideoCodecFrameFlags>;
        }

        enum VideoCodecFrameFlags {
            /**
             * is the frame only meant to be decoded
             */
            DECODE_ONLY,
            /**
             * is the frame a synchronization point (keyframe)
             */
            SYNC_POINT,
            /**
             * should the output frame be made a keyframe
             */
            FORCE_KEYFRAME,
            /**
             * should the encoder output stream headers
             */
            FORCE_KEYFRAME_HEADERS,
            /**
             * The buffer data is corrupted.
             */
            CORRUPTED,
        }
        /**
         * Flags to be used in combination with gst_video_decoder_request_sync_point().
         * See the function documentation for more details.
         */

        /**
         * Flags to be used in combination with gst_video_decoder_request_sync_point().
         * See the function documentation for more details.
         */
        export namespace VideoDecoderRequestSyncPointFlags {
            export const $gtype: GObject.GType<VideoDecoderRequestSyncPointFlags>;
        }

        enum VideoDecoderRequestSyncPointFlags {
            /**
             * discard all following
             *     input until the next sync point.
             */
            DISCARD_INPUT,
            /**
             * discard all following
             *     output until the next sync point.
             */
            CORRUPT_OUTPUT,
        }
        /**
         * Extra flags that influence the result from gst_video_chroma_resample_new().
         */

        /**
         * Extra flags that influence the result from gst_video_chroma_resample_new().
         */
        export namespace VideoDitherFlags {
            export const $gtype: GObject.GType<VideoDitherFlags>;
        }

        enum VideoDitherFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * the input is interlaced
             */
            INTERLACED,
            /**
             * quantize values in addition to adding dither.
             */
            QUANTIZE,
        }
        /**
         * Extra video flags
         */

        /**
         * Extra video flags
         */
        export namespace VideoFlags {
            export const $gtype: GObject.GType<VideoFlags>;
        }

        enum VideoFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * a variable fps is selected, fps_n and fps_d
             *     denote the maximum fps of the video
             */
            VARIABLE_FPS,
            /**
             * Each color has been scaled by the alpha
             *     value.
             */
            PREMULTIPLIED_ALPHA,
        }
        /**
         * The different video flags that a format info can have.
         */

        /**
         * The different video flags that a format info can have.
         */
        export namespace VideoFormatFlags {
            export const $gtype: GObject.GType<VideoFormatFlags>;
        }

        enum VideoFormatFlags {
            /**
             * The video format is YUV, components are numbered
             *   0=Y, 1=U, 2=V.
             */
            YUV,
            /**
             * The video format is RGB, components are numbered
             *   0=R, 1=G, 2=B.
             */
            RGB,
            /**
             * The video is gray, there is one gray component
             *   with index 0.
             */
            GRAY,
            /**
             * The video format has an alpha components with
             *   the number 3.
             */
            ALPHA,
            /**
             * The video format has data stored in little
             *   endianness.
             */
            LE,
            /**
             * The video format has a palette. The palette
             *   is stored in the second plane and indexes are stored in the first plane.
             */
            PALETTE,
            /**
             * The video format has a complex layout that
             *   can't be described with the usual information in the #GstVideoFormatInfo.
             */
            COMPLEX,
            /**
             * This format can be used in a
             *   #GstVideoFormatUnpack and #GstVideoFormatPack function.
             */
            UNPACK,
            /**
             * The format is tiled, there is tiling information
             *   in the last plane.
             */
            TILED,
            /**
             * The tile size varies per plane according to the subsampling.
             */
            SUBTILES,
        }
        /**
         * Extra video frame flags
         */

        /**
         * Extra video frame flags
         */
        export namespace VideoFrameFlags {
            export const $gtype: GObject.GType<VideoFrameFlags>;
        }

        enum VideoFrameFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * The video frame is interlaced. In mixed
             *           interlace-mode, this flag specifies if the frame is interlaced or
             *           progressive.
             */
            INTERLACED,
            /**
             * The video frame has the top field first
             */
            TFF,
            /**
             * The video frame has the repeat flag
             */
            RFF,
            /**
             * The video frame has one field
             */
            ONEFIELD,
            /**
             * The video contains one or
             *     more non-mono views
             */
            MULTIPLE_VIEW,
            /**
             * The video frame is the first
             *     in a set of corresponding views provided as sequential frames.
             */
            FIRST_IN_BUNDLE,
            /**
             * The video frame has the top field only. This
             *     is the same as GST_VIDEO_FRAME_FLAG_TFF | GST_VIDEO_FRAME_FLAG_ONEFIELD
             *     (Since: 1.16).
             */
            TOP_FIELD,
            /**
             * The video frame has the bottom field
             *     only. This is the same as GST_VIDEO_FRAME_FLAG_ONEFIELD
             *     (GST_VIDEO_FRAME_FLAG_TFF flag unset) (Since: 1.16).
             */
            BOTTOM_FIELD,
        }
        /**
         * Additional mapping flags for gst_video_frame_map().
         */

        /**
         * Additional mapping flags for gst_video_frame_map().
         */
        export namespace VideoFrameMapFlags {
            export const $gtype: GObject.GType<VideoFrameMapFlags>;
        }

        enum VideoFrameMapFlags {
            /**
             * Don't take another reference of the buffer and store it in
             *                                    the GstVideoFrame. This makes sure that the buffer stays
             *                                    writable while the frame is mapped, but requires that the
             *                                    buffer reference stays valid until the frame is unmapped again.
             */
            NO_REF,
            /**
             * Offset to define more flags
             */
            LAST,
        }
        /**
         * GstVideoMultiviewFlags are used to indicate extra properties of a
         * stereo/multiview stream beyond the frame layout and buffer mapping
         * that is conveyed in the #GstVideoMultiviewMode.
         */

        /**
         * GstVideoMultiviewFlags are used to indicate extra properties of a
         * stereo/multiview stream beyond the frame layout and buffer mapping
         * that is conveyed in the #GstVideoMultiviewMode.
         */
        export namespace VideoMultiviewFlags {
            export const $gtype: GObject.GType<VideoMultiviewFlags>;
        }

        enum VideoMultiviewFlags {
            /**
             * No flags
             */
            NONE,
            /**
             * For stereo streams, the
             *     normal arrangement of left and right views is reversed.
             */
            RIGHT_VIEW_FIRST,
            /**
             * The left view is vertically
             *     mirrored.
             */
            LEFT_FLIPPED,
            /**
             * The left view is horizontally
             *     mirrored.
             */
            LEFT_FLOPPED,
            /**
             * The right view is
             *     vertically mirrored.
             */
            RIGHT_FLIPPED,
            /**
             * The right view is
             *     horizontally mirrored.
             */
            RIGHT_FLOPPED,
            /**
             * For frame-packed
             *     multiview modes, indicates that the individual
             *     views have been encoded with half the true width or height
             *     and should be scaled back up for display. This flag
             *     is used for overriding input layout interpretation
             *     by adjusting pixel-aspect-ratio.
             *     For side-by-side, column interleaved or checkerboard packings, the
             *     pixel width will be doubled. For row interleaved and top-bottom
             *     encodings, pixel height will be doubled.
             */
            HALF_ASPECT,
            /**
             * The video stream contains both
             *     mono and multiview portions, signalled on each buffer by the
             *     absence or presence of the `GST_VIDEO_BUFFER_FLAG_MULTIPLE_VIEW`
             *     buffer flag.
             */
            MIXED_MONO,
        }
        /**
         * Overlay format flags.
         */

        /**
         * Overlay format flags.
         */
        export namespace VideoOverlayFormatFlags {
            export const $gtype: GObject.GType<VideoOverlayFormatFlags>;
        }

        enum VideoOverlayFormatFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * RGB are premultiplied by A/255.
             */
            PREMULTIPLIED_ALPHA,
            /**
             * a global-alpha value != 1 is set.
             */
            GLOBAL_ALPHA,
        }
        /**
         * The different flags that can be used when packing and unpacking.
         */

        /**
         * The different flags that can be used when packing and unpacking.
         */
        export namespace VideoPackFlags {
            export const $gtype: GObject.GType<VideoPackFlags>;
        }

        enum VideoPackFlags {
            /**
             * No flag
             */
            NONE,
            /**
             * When the source has a smaller depth
             *   than the target format, set the least significant bits of the target
             *   to 0. This is likely slightly faster but less accurate. When this flag
             *   is not specified, the most significant bits of the source are duplicated
             *   in the least significant bits of the destination.
             */
            TRUNCATE_RANGE,
            /**
             * The source is interlaced. The unpacked
             *   format will be interlaced as well with each line containing
             *   information from alternating fields. (Since: 1.2)
             */
            INTERLACED,
        }
        /**
         * Different resampler flags.
         */

        /**
         * Different resampler flags.
         */
        export namespace VideoResamplerFlags {
            export const $gtype: GObject.GType<VideoResamplerFlags>;
        }

        enum VideoResamplerFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * when no taps are given, half the
             *              number of calculated taps. This can be used when making scalers
             *              for the different fields of an interlaced picture. Since: 1.10
             */
            HALF_TAPS,
        }
        /**
         * Different scale flags.
         */

        /**
         * Different scale flags.
         */
        export namespace VideoScalerFlags {
            export const $gtype: GObject.GType<VideoScalerFlags>;
        }

        enum VideoScalerFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * Set up a scaler for interlaced content
             */
            INTERLACED,
        }
        /**
         * Flags related to the time code information.
         * For drop frame, only 30000/1001 and 60000/1001 frame rates are supported.
         */

        /**
         * Flags related to the time code information.
         * For drop frame, only 30000/1001 and 60000/1001 frame rates are supported.
         */
        export namespace VideoTimeCodeFlags {
            export const $gtype: GObject.GType<VideoTimeCodeFlags>;
        }

        enum VideoTimeCodeFlags {
            /**
             * No flags
             */
            NONE,
            /**
             * Whether we have drop frame rate
             */
            DROP_FRAME,
            /**
             * Whether we have interlaced video
             */
            INTERLACED,
        }
        module ColorBalanceChannel {
            // Signal callback interfaces

            interface ValueChanged {
                (value: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * The #GstColorBalanceChannel object represents a parameter
         * for modifying the color balance implemented by an element providing the
         * #GstColorBalance interface. For example, Hue or Saturation.
         */
        class ColorBalanceChannel extends GObject.Object {
            static $gtype: GObject.GType<ColorBalanceChannel>;

            // Fields

            label: string;
            min_value: number;
            max_value: number;

            // Constructors

            constructor(properties?: Partial<ColorBalanceChannel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'value-changed', callback: (_source: this, value: number) => void): number;
            connect_after(signal: 'value-changed', callback: (_source: this, value: number) => void): number;
            emit(signal: 'value-changed', value: number): void;

            // Virtual methods

            /**
             * default handler for value changed notification
             * @param value
             */
            vfunc_value_changed(value: number): void;
        }

        module VideoAggregator {
            // Constructor properties interface

            interface ConstructorProps extends GstBase.Aggregator.ConstructorProps {
                force_live: boolean;
                forceLive: boolean;
            }
        }

        /**
         * VideoAggregator can accept AYUV, ARGB and BGRA video streams. For each of the requested
         * sink pads it will compare the incoming geometry and framerate to define the
         * output parameters. Indeed output video frames will have the geometry of the
         * biggest incoming video stream and the framerate of the fastest incoming one.
         *
         * VideoAggregator will do colorspace conversion.
         *
         * Zorder for each input stream can be configured on the
         * #GstVideoAggregatorPad.
         */
        abstract class VideoAggregator extends GstBase.Aggregator {
            static $gtype: GObject.GType<VideoAggregator>;

            // Properties

            /**
             * Causes the element to aggregate on a timeout even when no live source is
             * connected to its sinks. See #GstAggregator:min-upstream-latency for a
             * companion property: in the vast majority of cases where you plan to plug in
             * live sources with a non-zero latency, you should set it to a non-zero value.
             */
            get force_live(): boolean;
            /**
             * Causes the element to aggregate on a timeout even when no live source is
             * connected to its sinks. See #GstAggregator:min-upstream-latency for a
             * companion property: in the vast majority of cases where you plan to plug in
             * live sources with a non-zero latency, you should set it to a non-zero value.
             */
            get forceLive(): boolean;

            // Fields

            aggregator: GstBase.Aggregator;

            // Constructors

            constructor(properties?: Partial<VideoAggregator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Lets subclasses aggregate frames that are ready. Subclasses
             *                            should iterate the GstElement.sinkpads and use the already
             *                            mapped #GstVideoFrame from gst_video_aggregator_pad_get_prepared_frame()
             *                            or directly use the #GstBuffer from gst_video_aggregator_pad_get_current_buffer()
             *                            if it needs to map the buffer in a special way. The result of the
             *                            aggregation should land in `outbuffer`.
             * @param outbuffer
             */
            vfunc_aggregate_frames(outbuffer: Gst.Buffer): Gst.FlowReturn;
            /**
             * Optional.
             *                            Lets subclasses provide a #GstBuffer to be used as `outbuffer` of
             *                            the #aggregate_frames vmethod.
             * @param outbuffer
             */
            vfunc_create_output_buffer(outbuffer: Gst.Buffer): Gst.FlowReturn;
            vfunc_find_best_format(downstream_caps: Gst.Caps, best_info: VideoInfo): boolean;
            /**
             * Optional.
             *                            Lets subclasses update the #GstCaps representing
             *                            the src pad caps before usage.  Return %NULL to indicate failure.
             * @param caps
             */
            vfunc_update_caps(caps: Gst.Caps): Gst.Caps;

            // Methods

            /**
             * The returned #GstTaskPool is used internally for performing parallel
             * video format conversions/scaling/etc during the
             * #GstVideoAggregatorPadClass::prepare_frame_start() process.
             * Subclasses can add their own operation to perform using the returned
             * #GstTaskPool during #GstVideoAggregatorClass::aggregate_frames().
             * @returns the #GstTaskPool that can be used by subclasses     for performing concurrent operations
             */
            get_execution_task_pool(): Gst.TaskPool;
        }

        module VideoAggregatorConvertPad {
            // Constructor properties interface

            interface ConstructorProps extends VideoAggregatorPad.ConstructorProps {
                converter_config: Gst.Structure;
                converterConfig: Gst.Structure;
            }
        }

        /**
         * An implementation of GstPad that can be used with #GstVideoAggregator.
         *
         * See #GstVideoAggregator for more details.
         */
        class VideoAggregatorConvertPad extends VideoAggregatorPad {
            static $gtype: GObject.GType<VideoAggregatorConvertPad>;

            // Properties

            get converter_config(): Gst.Structure;
            set converter_config(val: Gst.Structure);
            get converterConfig(): Gst.Structure;
            set converterConfig(val: Gst.Structure);

            // Constructors

            constructor(properties?: Partial<VideoAggregatorConvertPad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_create_conversion_info(agg: VideoAggregator, conversion_info: VideoInfo): void;

            // Methods

            /**
             * Requests the pad to check and update the converter before the next usage to
             * update for any changes that have happened.
             */
            update_conversion_info(): void;
        }

        module VideoAggregatorPad {
            // Constructor properties interface

            interface ConstructorProps extends GstBase.AggregatorPad.ConstructorProps {
                max_last_buffer_repeat: number;
                maxLastBufferRepeat: number;
                repeat_after_eos: boolean;
                repeatAfterEos: boolean;
                zorder: number;
            }
        }

        class VideoAggregatorPad extends GstBase.AggregatorPad {
            static $gtype: GObject.GType<VideoAggregatorPad>;

            // Properties

            get max_last_buffer_repeat(): number;
            set max_last_buffer_repeat(val: number);
            get maxLastBufferRepeat(): number;
            set maxLastBufferRepeat(val: number);
            get repeat_after_eos(): boolean;
            set repeat_after_eos(val: boolean);
            get repeatAfterEos(): boolean;
            set repeatAfterEos(val: boolean);
            get zorder(): number;
            set zorder(val: number);

            // Constructors

            constructor(properties?: Partial<VideoAggregatorPad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * clean the frame previously prepared in prepare_frame
             * @param videoaggregator
             * @param prepared_frame
             */
            vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void;
            /**
             * Prepare the frame from the pad buffer and sets it to prepared_frame.
             *      Implementations should always return TRUE.  Returning FALSE will cease
             *      iteration over subsequent pads.
             * @param videoaggregator
             * @param buffer
             * @param prepared_frame
             */
            vfunc_prepare_frame(
                videoaggregator: VideoAggregator,
                buffer: Gst.Buffer,
                prepared_frame: VideoFrame,
            ): boolean;
            /**
             * Finish preparing `prepared_frame`.
             *
             * If overriden, `prepare_frame_start` must also be overriden.
             * @param videoaggregator the parent #GstVideoAggregator
             * @param prepared_frame the #GstVideoFrame to prepare into
             */
            vfunc_prepare_frame_finish(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void;
            /**
             * Begin preparing the frame from the pad buffer and sets it to prepared_frame.
             *
             * If overriden, `prepare_frame_finish` must also be overriden.
             * @param videoaggregator the parent #GstVideoAggregator
             * @param buffer the input #GstBuffer to prepare
             * @param prepared_frame the #GstVideoFrame to prepare into
             */
            vfunc_prepare_frame_start(
                videoaggregator: VideoAggregator,
                buffer: Gst.Buffer,
                prepared_frame: VideoFrame,
            ): void;
            /**
             * Called when either the input or output formats
             *                          have changed.
             */
            vfunc_update_conversion_info(): void;

            // Methods

            /**
             * Returns the currently queued buffer that is going to be used
             * for the current output frame.
             *
             * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
             * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
             *
             * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
             * returns.
             * @returns The currently queued buffer
             */
            get_current_buffer(): Gst.Buffer;
            /**
             * Returns the currently prepared video frame that has to be aggregated into
             * the current output frame.
             *
             * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
             * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
             *
             * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
             * returns.
             * @returns The currently prepared video frame
             */
            get_prepared_frame(): VideoFrame;
            /**
             * Checks if the pad currently has a buffer queued that is going to be used
             * for the current output frame.
             *
             * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
             * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
             * @returns %TRUE if the pad has currently a buffer queued
             */
            has_current_buffer(): boolean;
            /**
             * Allows selecting that this pad requires an output format with alpha
             * @param needs_alpha %TRUE if this pad requires alpha output
             */
            set_needs_alpha(needs_alpha: boolean): void;
        }

        module VideoAggregatorParallelConvertPad {
            // Constructor properties interface

            interface ConstructorProps extends VideoAggregatorConvertPad.ConstructorProps {}
        }

        /**
         * An implementation of GstPad that can be used with #GstVideoAggregator.
         *
         * See #GstVideoAggregator for more details.
         */
        class VideoAggregatorParallelConvertPad extends VideoAggregatorConvertPad {
            static $gtype: GObject.GType<VideoAggregatorParallelConvertPad>;

            // Constructors

            constructor(properties?: Partial<VideoAggregatorParallelConvertPad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module VideoBufferPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
        }

        class VideoBufferPool extends Gst.BufferPool {
            static $gtype: GObject.GType<VideoBufferPool>;

            // Fields

            bufferpool: Gst.BufferPool;

            // Constructors

            constructor(properties?: Partial<VideoBufferPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VideoBufferPool;
        }

        module VideoDecoder {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps {
                automatic_request_sync_point_flags: VideoDecoderRequestSyncPointFlags;
                automaticRequestSyncPointFlags: VideoDecoderRequestSyncPointFlags;
                automatic_request_sync_points: boolean;
                automaticRequestSyncPoints: boolean;
                discard_corrupted_frames: boolean;
                discardCorruptedFrames: boolean;
                max_errors: number;
                maxErrors: number;
                min_force_key_unit_interval: number;
                minForceKeyUnitInterval: number;
                qos: boolean;
            }
        }

        /**
         * This base class is for video decoders turning encoded data into raw video
         * frames.
         *
         * The GstVideoDecoder base class and derived subclasses should cooperate as
         * follows:
         *
         * ## Configuration
         *
         *   * Initially, GstVideoDecoder calls `start` when the decoder element
         *     is activated, which allows the subclass to perform any global setup.
         *
         *   * GstVideoDecoder calls `set_format` to inform the subclass of caps
         *     describing input video data that it is about to receive, including
         *     possibly configuration data.
         *     While unlikely, it might be called more than once, if changing input
         *     parameters require reconfiguration.
         *
         *   * Incoming data buffers are processed as needed, described in Data
         *     Processing below.
         *
         *   * GstVideoDecoder calls `stop` at end of all processing.
         *
         * ## Data processing
         *
         *   * The base class gathers input data, and optionally allows subclass
         *     to parse this into subsequently manageable chunks, typically
         *     corresponding to and referred to as 'frames'.
         *
         *   * Each input frame is provided in turn to the subclass' `handle_frame`
         *     callback.
         *   * When the subclass enables the subframe mode with `gst_video_decoder_set_subframe_mode`,
         *     the base class will provide to the subclass the same input frame with
         *     different input buffers to the subclass `handle_frame`
         *     callback. During this call, the subclass needs to take
         *     ownership of the input_buffer as `GstVideoCodecFrame`.input_buffer
         *     will have been changed before the next subframe buffer is received.
         *     The subclass will call `gst_video_decoder_have_last_subframe`
         *     when a new input frame can be created by the base class.
         *     Every subframe will share the same `GstVideoCodecFrame`.output_buffer
         *     to write the decoding result. The subclass is responsible to protect
         *     its access.
         *
         *   * If codec processing results in decoded data, the subclass should call
         *     `gst_video_decoder_finish_frame` to have decoded data pushed
         *     downstream. In subframe mode
         *     the subclass should call `gst_video_decoder_finish_subframe` until the
         *     last subframe where it should call `gst_video_decoder_finish_frame`.
         *     The subclass can detect the last subframe using GST_VIDEO_BUFFER_FLAG_MARKER
         *     on buffers or using its own logic to collect the subframes.
         *     In case of decoding failure, the subclass must call
         *     `gst_video_decoder_drop_frame` or `gst_video_decoder_drop_subframe,`
         *     to allow the base class to do timestamp and offset tracking, and possibly
         *     to requeue the frame for a later attempt in the case of reverse playback.
         *
         * ## Shutdown phase
         *
         *   * The GstVideoDecoder class calls `stop` to inform the subclass that data
         *     parsing will be stopped.
         *
         * ## Additional Notes
         *
         *   * Seeking/Flushing
         *
         *     * When the pipeline is seeked or otherwise flushed, the subclass is
         *       informed via a call to its `reset` callback, with the hard parameter
         *       set to true. This indicates the subclass should drop any internal data
         *       queues and timestamps and prepare for a fresh set of buffers to arrive
         *       for parsing and decoding.
         *
         *   * End Of Stream
         *
         *     * At end-of-stream, the subclass `parse` function may be called some final
         *       times with the at_eos parameter set to true, indicating that the element
         *       should not expect any more data to be arriving, and it should parse and
         *       remaining frames and call gst_video_decoder_have_frame() if possible.
         *
         * The subclass is responsible for providing pad template caps for
         * source and sink pads. The pads need to be named "sink" and "src". It also
         * needs to provide information about the output caps, when they are known.
         * This may be when the base class calls the subclass' `set_format` function,
         * though it might be during decoding, before calling
         * `gst_video_decoder_finish_frame`. This is done via
         * `gst_video_decoder_set_output_state`
         *
         * The subclass is also responsible for providing (presentation) timestamps
         * (likely based on corresponding input ones).  If that is not applicable
         * or possible, the base class provides limited framerate based interpolation.
         *
         * Similarly, the base class provides some limited (legacy) seeking support
         * if specifically requested by the subclass, as full-fledged support
         * should rather be left to upstream demuxer, parser or alike.  This simple
         * approach caters for seeking and duration reporting using estimated input
         * bitrates. To enable it, a subclass should call
         * `gst_video_decoder_set_estimate_rate` to enable handling of incoming
         * byte-streams.
         *
         * The base class provides some support for reverse playback, in particular
         * in case incoming data is not packetized or upstream does not provide
         * fragments on keyframe boundaries.  However, the subclass should then be
         * prepared for the parsing and frame processing stage to occur separately
         * (in normal forward processing, the latter immediately follows the former),
         * The subclass also needs to ensure the parsing stage properly marks
         * keyframes, unless it knows the upstream elements will do so properly for
         * incoming data.
         *
         * The bare minimum that a functional subclass needs to implement is:
         *
         *   * Provide pad templates
         *   * Inform the base class of output caps via
         *      `gst_video_decoder_set_output_state`
         *
         *   * Parse input data, if it is not considered packetized from upstream
         *      Data will be provided to `parse` which should invoke
         *      `gst_video_decoder_add_to_frame` and `gst_video_decoder_have_frame` to
         *      separate the data belonging to each video frame.
         *
         *   * Accept data in `handle_frame` and provide decoded results to
         *      `gst_video_decoder_finish_frame,` or call `gst_video_decoder_drop_frame`.
         */
        abstract class VideoDecoder extends Gst.Element {
            static $gtype: GObject.GType<VideoDecoder>;

            // Properties

            /**
             * GstVideoDecoderRequestSyncPointFlags to use for the automatically
             * requested sync points if `automatic-request-sync-points` is enabled.
             */
            get automatic_request_sync_point_flags(): VideoDecoderRequestSyncPointFlags;
            set automatic_request_sync_point_flags(val: VideoDecoderRequestSyncPointFlags);
            /**
             * GstVideoDecoderRequestSyncPointFlags to use for the automatically
             * requested sync points if `automatic-request-sync-points` is enabled.
             */
            get automaticRequestSyncPointFlags(): VideoDecoderRequestSyncPointFlags;
            set automaticRequestSyncPointFlags(val: VideoDecoderRequestSyncPointFlags);
            /**
             * If set to %TRUE the decoder will automatically request sync points when
             * it seems like a good idea, e.g. if the first frames are not key frames or
             * if packet loss was reported by upstream.
             */
            get automatic_request_sync_points(): boolean;
            set automatic_request_sync_points(val: boolean);
            /**
             * If set to %TRUE the decoder will automatically request sync points when
             * it seems like a good idea, e.g. if the first frames are not key frames or
             * if packet loss was reported by upstream.
             */
            get automaticRequestSyncPoints(): boolean;
            set automaticRequestSyncPoints(val: boolean);
            /**
             * If set to %TRUE the decoder will discard frames that are marked as
             * corrupted instead of outputting them.
             */
            get discard_corrupted_frames(): boolean;
            set discard_corrupted_frames(val: boolean);
            /**
             * If set to %TRUE the decoder will discard frames that are marked as
             * corrupted instead of outputting them.
             */
            get discardCorruptedFrames(): boolean;
            set discardCorruptedFrames(val: boolean);
            /**
             * Maximum number of tolerated consecutive decode errors. See
             * gst_video_decoder_set_max_errors() for more details.
             */
            get max_errors(): number;
            set max_errors(val: number);
            /**
             * Maximum number of tolerated consecutive decode errors. See
             * gst_video_decoder_set_max_errors() for more details.
             */
            get maxErrors(): number;
            set maxErrors(val: number);
            /**
             * Minimum interval between force-key-unit events sent upstream by the
             * decoder. Setting this to 0 will cause every event to be handled, setting
             * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
             *
             * See gst_video_event_new_upstream_force_key_unit() for more details about
             * force-key-unit events.
             */
            get min_force_key_unit_interval(): number;
            set min_force_key_unit_interval(val: number);
            /**
             * Minimum interval between force-key-unit events sent upstream by the
             * decoder. Setting this to 0 will cause every event to be handled, setting
             * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
             *
             * See gst_video_event_new_upstream_force_key_unit() for more details about
             * force-key-unit events.
             */
            get minForceKeyUnitInterval(): number;
            set minForceKeyUnitInterval(val: number);
            /**
             * If set to %TRUE the decoder will handle QoS events received
             * from downstream elements.
             * This includes dropping output frames which are detected as late
             * using the metrics reported by those events.
             */
            get qos(): boolean;
            set qos(val: boolean);

            // Constructors

            constructor(properties?: Partial<VideoDecoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Optional.
             *                  Called when the element changes to GST_STATE_NULL.
             *                  Allows closing external resources.
             */
            vfunc_close(): boolean;
            /**
             * Optional.
             *                     Setup the allocation parameters for allocating output
             *                     buffers. The passed in query contains the result of the
             *                     downstream allocation query.
             *                     Subclasses should chain up to the parent implementation to
             *                     invoke the default handler.
             * @param query
             */
            vfunc_decide_allocation(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Called to request subclass to decode any data it can at this
             *                  point, but that more data may arrive after. (e.g. at segment end).
             *                  Sub-classes should be prepared to handle new data afterward,
             *                  or seamless segment processing will break. Since: 1.6
             */
            vfunc_drain(): Gst.FlowReturn;
            /**
             * Optional.
             *                  Called to request subclass to dispatch any pending remaining
             *                  data at EOS. Sub-classes can refuse to decode new data after.
             */
            vfunc_finish(): Gst.FlowReturn;
            /**
             * Optional.
             *                      Flush all remaining data from the decoder without
             *                      pushing it downstream. Since: 1.2
             */
            vfunc_flush(): boolean;
            /**
             * Optional.
             *                  Allows for a custom sink getcaps implementation.
             *                  If not implemented, default returns
             *                  gst_video_decoder_proxy_getcaps
             *                  applied to sink template caps.
             * @param filter
             */
            vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
            vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn;
            vfunc_handle_missing_data(timestamp: Gst.ClockTime, duration: Gst.ClockTime): boolean;
            /**
             * Negotiate with downstream elements to currently configured #GstVideoCodecState.
             * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
             * negotiate fails.
             */
            vfunc_negotiate(): boolean;
            /**
             * Optional.
             *                  Called when the element changes to GST_STATE_READY.
             *                  Allows opening external resources.
             */
            vfunc_open(): boolean;
            /**
             * Required for non-packetized input.
             *                  Allows chopping incoming data into manageable units (frames)
             *                  for subsequent decoding.
             * @param frame
             * @param adapter
             * @param at_eos
             */
            vfunc_parse(frame: VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn;
            /**
             * Optional.
             *                      Propose buffer allocation parameters for upstream elements.
             *                      Subclasses should chain up to the parent implementation to
             *                      invoke the default handler.
             * @param query
             */
            vfunc_propose_allocation(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Allows subclass (decoder) to perform post-seek semantics reset.
             *                  Deprecated.
             * @param hard
             */
            vfunc_reset(hard: boolean): boolean;
            /**
             * Notifies subclass of incoming data format (caps).
             * @param state
             */
            vfunc_set_format(state: VideoCodecState): boolean;
            /**
             * Optional.
             *                  Event handler on the sink pad. This function should return
             *                  TRUE if the event was handled and should be discarded
             *                  (i.e. not unref'ed).
             *                  Subclasses should chain up to the parent implementation to
             *                  invoke the default handler.
             * @param event
             */
            vfunc_sink_event(event: Gst.Event): boolean;
            /**
             * Optional.
             *                  Query handler on the sink pad. This function should
             *                  return TRUE if the query could be performed. Subclasses
             *                  should chain up to the parent implementation to invoke the
             *                  default handler. Since: 1.4
             * @param query
             */
            vfunc_sink_query(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Event handler on the source pad. This function should return
             *                  TRUE if the event was handled and should be discarded
             *                  (i.e. not unref'ed).
             *                  Subclasses should chain up to the parent implementation to
             *                  invoke the default handler.
             * @param event
             */
            vfunc_src_event(event: Gst.Event): boolean;
            /**
             * Optional.
             *                  Query handler on the source pad. This function should
             *                  return TRUE if the query could be performed. Subclasses
             *                  should chain up to the parent implementation to invoke the
             *                  default handler. Since: 1.4
             * @param query
             */
            vfunc_src_query(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Called when the element starts processing.
             *                  Allows opening external resources.
             */
            vfunc_start(): boolean;
            /**
             * Optional.
             *                  Called when the element stops processing.
             *                  Allows closing external resources.
             */
            vfunc_stop(): boolean;
            /**
             * Optional. Transform the metadata on the input buffer to the
             *                  output buffer. By default this method is copies all meta without
             *                  tags and meta with only the "video" tag. subclasses can
             *                  implement this method and return %TRUE if the metadata is to be
             *                  copied. Since: 1.6
             * @param frame
             * @param meta
             */
            vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean;

            // Methods

            /**
             * Removes next `n_bytes` of input data and adds it to currently parsed frame.
             * @param n_bytes the number of bytes to add
             */
            add_to_frame(n_bytes: number): void;
            /**
             * Helper function that allocates a buffer to hold a video frame for `decoder'`s
             * current #GstVideoCodecState.
             *
             * You should use gst_video_decoder_allocate_output_frame() instead of this
             * function, if possible at all.
             * @returns allocated buffer, or NULL if no buffer could be     allocated (e.g. when downstream is flushing or shutting down)
             */
            allocate_output_buffer(): Gst.Buffer | null;
            /**
             * Helper function that allocates a buffer to hold a video frame for `decoder'`s
             * current #GstVideoCodecState.  Subclass should already have configured video
             * state and set src pad caps.
             *
             * The buffer allocated here is owned by the frame and you should only
             * keep references to the frame, not the buffer.
             * @param frame a #GstVideoCodecFrame
             * @returns %GST_FLOW_OK if an output buffer could be allocated
             */
            allocate_output_frame(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Same as #gst_video_decoder_allocate_output_frame except it allows passing
             * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
             * @param frame a #GstVideoCodecFrame
             * @param params a #GstBufferPoolAcquireParams
             * @returns %GST_FLOW_OK if an output buffer could be allocated
             */
            allocate_output_frame_with_params(
                frame: VideoCodecFrame,
                params: Gst.BufferPoolAcquireParams,
            ): Gst.FlowReturn;
            /**
             * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
             * case and posts a QoS message with the frame's details on the bus.
             * In any case, the frame is considered finished and released.
             * @param frame the #GstVideoCodecFrame to drop
             * @returns a #GstFlowReturn, usually GST_FLOW_OK.
             */
            drop_frame(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Drops input data.
             * The frame is not considered finished until the whole frame
             * is finished or dropped by the subclass.
             * @param frame the #GstVideoCodecFrame
             * @returns a #GstFlowReturn, usually GST_FLOW_OK.
             */
            drop_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * `frame` should have a valid decoded data buffer, whose metadata fields
             * are then appropriately set according to frame data and pushed downstream.
             * If no output data is provided, `frame` is considered skipped.
             * In any case, the frame is considered finished and released.
             *
             * After calling this function the output buffer of the frame is to be
             * considered read-only. This function will also change the metadata
             * of the buffer.
             * @param frame a decoded #GstVideoCodecFrame
             * @returns a #GstFlowReturn resulting from sending data downstream
             */
            finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Indicate that a subframe has been finished to be decoded
             * by the subclass. This method should be called for all subframes
             * except the last subframe where `gst_video_decoder_finish_frame`
             * should be called instead.
             * @param frame the #GstVideoCodecFrame
             * @returns a #GstFlowReturn, usually GST_FLOW_OK.
             */
            finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
             * used by the base class and its `params`.
             *
             * Unref the `allocator` after use it.
             */
            get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
            get_buffer_pool(): Gst.BufferPool | null;
            get_estimate_rate(): number;
            /**
             * Get a pending unfinished #GstVideoCodecFrame
             * @param frame_number system_frame_number of a frame
             * @returns pending unfinished #GstVideoCodecFrame identified by @frame_number.
             */
            get_frame(frame_number: number): VideoCodecFrame | null;
            /**
             * Get all pending unfinished #GstVideoCodecFrame
             * @returns pending unfinished #GstVideoCodecFrame.
             */
            get_frames(): VideoCodecFrame[];
            /**
             * Queries the number of the last subframe received by
             * the decoder baseclass in the `frame`.
             * @param frame the #GstVideoCodecFrame to update
             * @returns the current subframe index received in subframe mode, 1 otherwise.
             */
            get_input_subframe_index(frame: VideoCodecFrame): number;
            /**
             * Query the configured decoder latency. Results will be returned via
             * `min_latency` and `max_latency`.
             */
            get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
            /**
             * Determines maximum possible decoding time for `frame` that will
             * allow it to decode and arrive in time (as determined by QoS events).
             * In particular, a negative result means decoding in time is no longer possible
             * and should therefore occur as soon/skippy as possible.
             * @param frame a #GstVideoCodecFrame
             * @returns max decoding time.
             */
            get_max_decode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
            get_max_errors(): number;
            /**
             * Queries decoder required format handling.
             * @returns %TRUE if required format handling is enabled.
             */
            get_needs_format(): boolean;
            /**
             * Queries if the decoder requires a sync point before it starts outputting
             * data in the beginning.
             * @returns %TRUE if a sync point is required in the beginning.
             */
            get_needs_sync_point(): boolean;
            /**
             * Get the oldest pending unfinished #GstVideoCodecFrame
             * @returns oldest pending unfinished #GstVideoCodecFrame.
             */
            get_oldest_frame(): VideoCodecFrame | null;
            /**
             * Get the #GstVideoCodecState currently describing the output stream.
             * @returns #GstVideoCodecState describing format of video data.
             */
            get_output_state(): VideoCodecState | null;
            /**
             * Queries whether input data is considered packetized or not by the
             * base class.
             * @returns TRUE if input data is considered packetized.
             */
            get_packetized(): boolean;
            /**
             * Returns the number of bytes previously added to the current frame
             * by calling gst_video_decoder_add_to_frame().
             * @returns The number of bytes pending for the current frame
             */
            get_pending_frame_size(): number;
            /**
             * Queries the number of subframes in the frame processed by
             * the decoder baseclass.
             * @param frame the #GstVideoCodecFrame to update
             * @returns the current subframe processed received in subframe mode.
             */
            get_processed_subframe_index(frame: VideoCodecFrame): number;
            get_qos_proportion(): number;
            /**
             * Queries whether input data is considered as subframes or not by the
             * base class. If FALSE, each input buffer will be considered as a full
             * frame.
             * @returns TRUE if input data is considered as sub frames.
             */
            get_subframe_mode(): boolean;
            /**
             * Gathers all data collected for currently parsed frame, gathers corresponding
             * metadata and passes it along for further processing, i.e. `handle_frame`.
             * @returns a #GstFlowReturn
             */
            have_frame(): Gst.FlowReturn;
            /**
             * Indicates that the last subframe has been processed by the decoder
             * in `frame`. This will release the current frame in video decoder
             * allowing to receive new frames from upstream elements. This method
             * must be called in the subclass `handle_frame` callback.
             * @param frame the #GstVideoCodecFrame to update
             * @returns a #GstFlowReturn, usually GST_FLOW_OK.
             */
            have_last_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Sets the audio decoder tags and how they should be merged with any
             * upstream stream tags. This will override any tags previously-set
             * with gst_audio_decoder_merge_tags().
             *
             * Note that this is provided for convenience, and the subclass is
             * not required to use this and can still do tag handling on its own.
             *
             * MT safe.
             * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
             * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
             */
            merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
            /**
             * Negotiate with downstream elements to currently configured #GstVideoCodecState.
             * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
             * negotiate fails.
             * @returns %TRUE if the negotiation succeeded, else %FALSE.
             */
            negotiate(): boolean;
            /**
             * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
             * restricted to resolution/format/... combinations supported by downstream
             * elements.
             * @param caps initial caps
             * @param filter filter caps
             * @returns a #GstCaps owned by caller
             */
            proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
            /**
             * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
             * without any processing other than removing it from list of pending frames,
             * after which it is considered finished and released.
             * @param frame the #GstVideoCodecFrame to release
             */
            release_frame(frame: VideoCodecFrame): void;
            /**
             * Allows the #GstVideoDecoder subclass to request from the base class that
             * a new sync should be requested from upstream, and that `frame` was the frame
             * when the subclass noticed that a new sync point is required. A reason for
             * the subclass to do this could be missing reference frames, for example.
             *
             * The base class will then request a new sync point from upstream as long as
             * the time that passed since the last one is exceeding
             * #GstVideoDecoder:min-force-key-unit-interval.
             *
             * The subclass can signal via `flags` how the frames until the next sync point
             * should be handled:
             *
             *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
             *     all following input frames until the next sync point are discarded.
             *     This can be useful if the lack of a sync point will prevent all further
             *     decoding and the decoder implementation is not very robust in handling
             *     missing references frames.
             *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
             *     then all output frames following `frame` are marked as corrupted via
             *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
             *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
             *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
             *     before calling gst_video_decoder_finish_frame().
             * @param frame a #GstVideoCodecFrame
             * @param flags #GstVideoDecoderRequestSyncPointFlags
             */
            request_sync_point(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void;
            /**
             * Allows baseclass to perform byte to time estimated conversion.
             * @param enabled whether to enable byte to time conversion
             */
            set_estimate_rate(enabled: boolean): void;
            /**
             * Same as #gst_video_decoder_set_output_state() but also allows you to also set
             * the interlacing mode.
             * @param fmt a #GstVideoFormat
             * @param interlace_mode A #GstVideoInterlaceMode
             * @param width The width in pixels
             * @param height The height in pixels
             * @param reference An optional reference #GstVideoCodecState
             * @returns the newly configured output state.
             */
            set_interlaced_output_state(
                fmt: VideoFormat,
                interlace_mode: VideoInterlaceMode,
                width: number,
                height: number,
                reference?: VideoCodecState | null,
            ): VideoCodecState | null;
            /**
             * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder latency
             * is. If the provided values changed from previously provided ones, this will
             * also post a LATENCY message on the bus so the pipeline can reconfigure its
             * global latency.
             * @param min_latency minimum latency
             * @param max_latency maximum latency
             */
            set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
            /**
             * Sets numbers of tolerated decoder errors, where a tolerated one is then only
             * warned about, but more than tolerated will lead to fatal error.  You can set
             * -1 for never returning fatal errors. Default is set to
             * GST_VIDEO_DECODER_MAX_ERRORS.
             *
             * The '-1' option was added in 1.4
             * @param num max tolerated errors
             */
            set_max_errors(num: number): void;
            /**
             * Configures decoder format needs.  If enabled, subclass needs to be
             * negotiated with format caps before it can process any data.  It will then
             * never be handed any data before it has been configured.
             * Otherwise, it might be handed data without having been configured and
             * is then expected being able to do so either by default
             * or based on the input data.
             * @param enabled new state
             */
            set_needs_format(enabled: boolean): void;
            /**
             * Configures whether the decoder requires a sync point before it starts
             * outputting data in the beginning. If enabled, the base class will discard
             * all non-sync point frames in the beginning and after a flush and does not
             * pass it to the subclass.
             *
             * If the first frame is not a sync point, the base class will request a sync
             * point via the force-key-unit event.
             * @param enabled new state
             */
            set_needs_sync_point(enabled: boolean): void;
            /**
             * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
             * as the output state for the decoder.
             * Any previously set output state on `decoder` will be replaced by the newly
             * created one.
             *
             * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
             * or framerate) from an existing #GstVideoCodecState, it can be provided as a
             * `reference`.
             *
             * If the subclass wishes to override some fields from the output state (like
             * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
             *
             * The new output state will only take effect (set on pads and buffers) starting
             * from the next call to #gst_video_decoder_finish_frame().
             * @param fmt a #GstVideoFormat
             * @param width The width in pixels
             * @param height The height in pixels
             * @param reference An optional reference #GstVideoCodecState
             * @returns the newly configured output state.
             */
            set_output_state(
                fmt: VideoFormat,
                width: number,
                height: number,
                reference?: VideoCodecState | null,
            ): VideoCodecState | null;
            /**
             * Allows baseclass to consider input data as packetized or not. If the
             * input is packetized, then the `parse` method will not be called.
             * @param packetized whether the input data should be considered as packetized.
             */
            set_packetized(packetized: boolean): void;
            /**
             * If this is set to TRUE, it informs the base class that the subclass
             * can receive the data at a granularity lower than one frame.
             *
             * Note that in this mode, the subclass has two options. It can either
             * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
             * end of a frame. Or it can operate in such a way that it will decode
             * a single frame at a time. In this second case, every buffer that
             * arrives to the element is considered part of the same frame until
             * gst_video_decoder_finish_frame() is called.
             *
             * In either case, the same #GstVideoCodecFrame will be passed to the
             * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
             * different GstVideoCodecFrame:input_buffer every time until the end of the
             * frame has been signaled using either method.
             * This method must be called during the decoder subclass `set_format` call.
             * @param subframe_mode whether the input data should be considered as subframes.
             */
            set_subframe_mode(subframe_mode: boolean): void;
            /**
             * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
             * to use the default pad query handler to reply to accept-caps queries.
             *
             * By setting this to true it is possible to further customize the default
             * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
             * %GST_PAD_SET_ACCEPT_TEMPLATE
             * @param use if the default pad accept-caps query handling should be used
             */
            set_use_default_pad_acceptcaps(use: boolean): void;
        }

        module VideoEncoder {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.Preset.ConstructorProps {
                min_force_key_unit_interval: number;
                minForceKeyUnitInterval: number;
                qos: boolean;
            }
        }

        /**
         * This base class is for video encoders turning raw video into
         * encoded video data.
         *
         * GstVideoEncoder and subclass should cooperate as follows.
         *
         * ## Configuration
         *
         *   * Initially, GstVideoEncoder calls `start` when the encoder element
         *     is activated, which allows subclass to perform any global setup.
         *   * GstVideoEncoder calls `set_format` to inform subclass of the format
         *     of input video data that it is about to receive.  Subclass should
         *     setup for encoding and configure base class as appropriate
         *     (e.g. latency). While unlikely, it might be called more than once,
         *     if changing input parameters require reconfiguration.  Baseclass
         *     will ensure that processing of current configuration is finished.
         *   * GstVideoEncoder calls `stop` at end of all processing.
         *
         * ## Data processing
         *
         *     * Base class collects input data and metadata into a frame and hands
         *       this to subclass' `handle_frame`.
         *
         *     * If codec processing results in encoded data, subclass should call
         *       `gst_video_encoder_finish_frame` to have encoded data pushed
         *       downstream.
         *
         *     * If implemented, baseclass calls subclass `pre_push` just prior to
         *       pushing to allow subclasses to modify some metadata on the buffer.
         *       If it returns GST_FLOW_OK, the buffer is pushed downstream.
         *
         *     * GstVideoEncoderClass will handle both srcpad and sinkpad events.
         *       Sink events will be passed to subclass if `event` callback has been
         *       provided.
         *
         * ## Shutdown phase
         *
         *   * GstVideoEncoder class calls `stop` to inform the subclass that data
         *     parsing will be stopped.
         *
         * Subclass is responsible for providing pad template caps for
         * source and sink pads. The pads need to be named "sink" and "src". It should
         * also be able to provide fixed src pad caps in `getcaps` by the time it calls
         * `gst_video_encoder_finish_frame`.
         *
         * Things that subclass need to take care of:
         *
         *   * Provide pad templates
         *   * Provide source pad caps before pushing the first buffer
         *   * Accept data in `handle_frame` and provide encoded results to
         *      `gst_video_encoder_finish_frame`.
         *
         *
         * The #GstVideoEncoder:qos property will enable the Quality-of-Service
         * features of the encoder which gather statistics about the real-time
         * performance of the downstream elements. If enabled, subclasses can
         * use gst_video_encoder_get_max_encode_time() to check if input frames
         * are already late and drop them right away to give a chance to the
         * pipeline to catch up.
         */
        abstract class VideoEncoder extends Gst.Element implements Gst.Preset {
            static $gtype: GObject.GType<VideoEncoder>;

            // Properties

            /**
             * Minimum interval between force-keyunit requests in nanoseconds. See
             * gst_video_encoder_set_min_force_key_unit_interval() for more details.
             */
            get min_force_key_unit_interval(): number;
            set min_force_key_unit_interval(val: number);
            /**
             * Minimum interval between force-keyunit requests in nanoseconds. See
             * gst_video_encoder_set_min_force_key_unit_interval() for more details.
             */
            get minForceKeyUnitInterval(): number;
            set minForceKeyUnitInterval(val: number);
            get qos(): boolean;
            set qos(val: boolean);

            // Constructors

            constructor(properties?: Partial<VideoEncoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Optional.
             *                  Called when the element changes to GST_STATE_NULL.
             *                  Allows closing external resources.
             */
            vfunc_close(): boolean;
            /**
             * Optional.
             *                     Setup the allocation parameters for allocating output
             *                     buffers. The passed in query contains the result of the
             *                     downstream allocation query.
             *                     Subclasses should chain up to the parent implementation to
             *                     invoke the default handler.
             * @param query
             */
            vfunc_decide_allocation(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Called to request subclass to dispatch any pending remaining
             *                  data (e.g. at EOS).
             */
            vfunc_finish(): Gst.FlowReturn;
            /**
             * Optional.
             *                      Flush all remaining data from the encoder without
             *                      pushing it downstream. Since: 1.2
             */
            vfunc_flush(): boolean;
            /**
             * Optional.
             *                  Allows for a custom sink getcaps implementation (e.g.
             *                  for multichannel input specification).  If not implemented,
             *                  default returns gst_video_encoder_proxy_getcaps
             *                  applied to sink template caps.
             * @param filter
             */
            vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
            /**
             * Provides input frame to subclass.
             * @param frame
             */
            vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Negotiate with downstream elements to currently configured #GstVideoCodecState.
             * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
             * negotiate fails.
             */
            vfunc_negotiate(): boolean;
            /**
             * Optional.
             *                  Called when the element changes to GST_STATE_READY.
             *                  Allows opening external resources.
             */
            vfunc_open(): boolean;
            /**
             * Optional.
             *                  Allows subclass to push frame downstream in whatever
             *                  shape or form it deems appropriate.  If not provided,
             *                  provided encoded frame data is simply pushed downstream.
             * @param frame
             */
            vfunc_pre_push(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Optional.
             *                      Propose buffer allocation parameters for upstream elements.
             *                      Subclasses should chain up to the parent implementation to
             *                      invoke the default handler.
             * @param query
             */
            vfunc_propose_allocation(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Allows subclass (encoder) to perform post-seek semantics reset.
             *                  Deprecated.
             * @param hard
             */
            vfunc_reset(hard: boolean): boolean;
            /**
             * Optional.
             *                  Notifies subclass of incoming data format.
             *                  GstVideoCodecState fields have already been
             *                  set according to provided caps.
             * @param state
             */
            vfunc_set_format(state: VideoCodecState): boolean;
            /**
             * Optional.
             *                  Event handler on the sink pad. This function should return
             *                  TRUE if the event was handled and should be discarded
             *                  (i.e. not unref'ed).
             *                  Subclasses should chain up to the parent implementation to
             *                  invoke the default handler.
             * @param event
             */
            vfunc_sink_event(event: Gst.Event): boolean;
            /**
             * Optional.
             *                  Query handler on the sink pad. This function should
             *                  return TRUE if the query could be performed. Subclasses
             *                  should chain up to the parent implementation to invoke the
             *                  default handler. Since: 1.4
             * @param query
             */
            vfunc_sink_query(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Event handler on the source pad. This function should return
             *                  TRUE if the event was handled and should be discarded
             *                  (i.e. not unref'ed).
             *                  Subclasses should chain up to the parent implementation to
             *                  invoke the default handler.
             * @param event
             */
            vfunc_src_event(event: Gst.Event): boolean;
            /**
             * Optional.
             *                  Query handler on the source pad. This function should
             *                  return TRUE if the query could be performed. Subclasses
             *                  should chain up to the parent implementation to invoke the
             *                  default handler. Since: 1.4
             * @param query
             */
            vfunc_src_query(query: Gst.Query): boolean;
            /**
             * Optional.
             *                  Called when the element starts processing.
             *                  Allows opening external resources.
             */
            vfunc_start(): boolean;
            /**
             * Optional.
             *                  Called when the element stops processing.
             *                  Allows closing external resources.
             */
            vfunc_stop(): boolean;
            /**
             * Optional. Transform the metadata on the input buffer to the
             *                  output buffer. By default this method is copies all meta without
             *                  tags and meta with only the "video" tag. subclasses can
             *                  implement this method and return %TRUE if the metadata is to be
             *                  copied. Since: 1.6
             * @param frame
             * @param meta
             */
            vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean;

            // Methods

            /**
             * Helper function that allocates a buffer to hold an encoded video frame
             * for `encoder'`s current #GstVideoCodecState.
             * @param size size of the buffer
             * @returns allocated buffer
             */
            allocate_output_buffer(size: number): Gst.Buffer;
            /**
             * Helper function that allocates a buffer to hold an encoded video frame for `encoder'`s
             * current #GstVideoCodecState.  Subclass should already have configured video
             * state and set src pad caps.
             *
             * The buffer allocated here is owned by the frame and you should only
             * keep references to the frame, not the buffer.
             * @param frame a #GstVideoCodecFrame
             * @param size size of the buffer
             * @returns %GST_FLOW_OK if an output buffer could be allocated
             */
            allocate_output_frame(frame: VideoCodecFrame, size: number): Gst.FlowReturn;
            /**
             * `frame` must have a valid encoded data buffer, whose metadata fields
             * are then appropriately set according to frame data or no buffer at
             * all if the frame should be dropped.
             * It is subsequently pushed downstream or provided to `pre_push`.
             * In any case, the frame is considered finished and released.
             *
             * After calling this function the output buffer of the frame is to be
             * considered read-only. This function will also change the metadata
             * of the buffer.
             * @param frame an encoded #GstVideoCodecFrame
             * @returns a #GstFlowReturn resulting from sending data downstream
             */
            finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * If multiple subframes are produced for one input frame then use this method
             * for each subframe, except for the last one. Before calling this function,
             * you need to fill frame->output_buffer with the encoded buffer to push.
             *
             * You must call #gst_video_encoder_finish_frame() for the last sub-frame
             * to tell the encoder that the frame has been fully encoded.
             *
             * This function will change the metadata of `frame` and frame->output_buffer
             * will be pushed downstream.
             * @param frame a #GstVideoCodecFrame being encoded
             * @returns a #GstFlowReturn resulting from pushing the buffer downstream.
             */
            finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
            /**
             * Lets #GstVideoEncoder sub-classes to know the memory `allocator`
             * used by the base class and its `params`.
             *
             * Unref the `allocator` after use it.
             */
            get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
            /**
             * Get a pending unfinished #GstVideoCodecFrame
             * @param frame_number system_frame_number of a frame
             * @returns pending unfinished #GstVideoCodecFrame identified by @frame_number.
             */
            get_frame(frame_number: number): VideoCodecFrame | null;
            /**
             * Get all pending unfinished #GstVideoCodecFrame
             * @returns pending unfinished #GstVideoCodecFrame.
             */
            get_frames(): VideoCodecFrame[];
            /**
             * Query the configured encoding latency. Results will be returned via
             * `min_latency` and `max_latency`.
             */
            get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
            /**
             * Determines maximum possible encoding time for `frame` that will
             * allow it to encode and arrive in time (as determined by QoS events).
             * In particular, a negative result means encoding in time is no longer possible
             * and should therefore occur as soon/skippy as possible.
             *
             * If no QoS events have been received from downstream, or if
             * #GstVideoEncoder:qos is disabled this function returns #G_MAXINT64.
             * @param frame a #GstVideoCodecFrame
             * @returns max decoding time.
             */
            get_max_encode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
            /**
             * Returns the minimum force-keyunit interval, see gst_video_encoder_set_min_force_key_unit_interval()
             * for more details.
             * @returns the minimum force-keyunit interval
             */
            get_min_force_key_unit_interval(): Gst.ClockTime;
            /**
             * Get the oldest unfinished pending #GstVideoCodecFrame
             * @returns oldest unfinished pending #GstVideoCodecFrame
             */
            get_oldest_frame(): VideoCodecFrame | null;
            /**
             * Get the current #GstVideoCodecState
             * @returns #GstVideoCodecState describing format of video data.
             */
            get_output_state(): VideoCodecState | null;
            /**
             * Checks if `encoder` is currently configured to handle Quality-of-Service
             * events from downstream.
             * @returns %TRUE if the encoder is configured to perform Quality-of-Service.
             */
            is_qos_enabled(): boolean;
            /**
             * Sets the video encoder tags and how they should be merged with any
             * upstream stream tags. This will override any tags previously-set
             * with gst_video_encoder_merge_tags().
             *
             * Note that this is provided for convenience, and the subclass is
             * not required to use this and can still do tag handling on its own.
             *
             * MT safe.
             * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
             * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
             */
            merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
            /**
             * Negotiate with downstream elements to currently configured #GstVideoCodecState.
             * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
             * negotiate fails.
             * @returns %TRUE if the negotiation succeeded, else %FALSE.
             */
            negotiate(): boolean;
            /**
             * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
             * restricted to resolution/format/... combinations supported by downstream
             * elements (e.g. muxers).
             * @param caps initial caps
             * @param filter filter caps
             * @returns a #GstCaps owned by caller
             */
            proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
            /**
             * Set the codec headers to be sent downstream whenever requested.
             * @param headers a list of #GstBuffer containing the codec header
             */
            set_headers(headers: Gst.Buffer[]): void;
            /**
             * Informs baseclass of encoding latency. If the provided values changed from
             * previously provided ones, this will also post a LATENCY message on the bus
             * so the pipeline can reconfigure its global latency.
             * @param min_latency minimum latency
             * @param max_latency maximum latency
             */
            set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
            /**
             * Sets the minimum interval for requesting keyframes based on force-keyunit
             * events. Setting this to 0 will allow to handle every event, setting this to
             * %GST_CLOCK_TIME_NONE causes force-keyunit events to be ignored.
             * @param interval minimum interval
             */
            set_min_force_key_unit_interval(interval: Gst.ClockTime): void;
            /**
             * Request minimal value for PTS passed to handle_frame.
             *
             * For streams with reordered frames this can be used to ensure that there
             * is enough time to accommodate first DTS, which may be less than first PTS
             * @param min_pts minimal PTS that will be passed to handle_frame
             */
            set_min_pts(min_pts: Gst.ClockTime): void;
            /**
             * Creates a new #GstVideoCodecState with the specified caps as the output state
             * for the encoder.
             * Any previously set output state on `encoder` will be replaced by the newly
             * created one.
             *
             * The specified `caps` should not contain any resolution, pixel-aspect-ratio,
             * framerate, codec-data, .... Those should be specified instead in the returned
             * #GstVideoCodecState.
             *
             * If the subclass wishes to copy over existing fields (like pixel aspect ratio,
             * or framerate) from an existing #GstVideoCodecState, it can be provided as a
             * `reference`.
             *
             * If the subclass wishes to override some fields from the output state (like
             * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
             *
             * The new output state will only take effect (set on pads and buffers) starting
             * from the next call to #gst_video_encoder_finish_frame().
             * @param caps the #GstCaps to use for the output
             * @param reference An optional reference @GstVideoCodecState
             * @returns the newly configured output state.
             */
            set_output_state(caps: Gst.Caps, reference?: VideoCodecState | null): VideoCodecState | null;
            /**
             * Configures `encoder` to handle Quality-of-Service events from downstream.
             * @param enabled the new qos value.
             */
            set_qos_enabled(enabled: boolean): void;

            // Inherited methods
            /**
             * Delete the given preset.
             * @param name preset name to remove
             * @returns %TRUE for success, %FALSE if e.g. there is no preset with that @name
             */
            delete_preset(name: string): boolean;
            /**
             * Gets the `value` for an existing meta data `tag`. Meta data `tag` names can be
             * something like e.g. "comment". Returned values need to be released when done.
             * @param name preset name
             * @param tag meta data item name
             * @returns %TRUE for success, %FALSE if e.g. there is no preset with that @name or no value for the given @tag
             */
            get_meta(name: string, tag: string): [boolean, string];
            /**
             * Get a copy of preset names as a %NULL terminated string array.
             * @returns list with names, use g_strfreev() after usage.
             */
            get_preset_names(): string[];
            /**
             * Get a the names of the GObject properties that can be used for presets.
             * @returns an   array of property names which should be freed with g_strfreev() after use.
             */
            get_property_names(): string[];
            /**
             * Check if one can add new presets, change existing ones and remove presets.
             * @returns %TRUE if presets are editable or %FALSE if they are static
             */
            is_editable(): boolean;
            /**
             * Load the given preset.
             * @param name preset name to load
             * @returns %TRUE for success, %FALSE if e.g. there is no preset with that @name
             */
            load_preset(name: string): boolean;
            /**
             * Renames a preset. If there is already a preset by the `new_name` it will be
             * overwritten.
             * @param old_name current preset name
             * @param new_name new preset name
             * @returns %TRUE for success, %FALSE if e.g. there is no preset with @old_name
             */
            rename_preset(old_name: string, new_name: string): boolean;
            /**
             * Save the current object settings as a preset under the given name. If there
             * is already a preset by this `name` it will be overwritten.
             * @param name preset name to save
             * @returns %TRUE for success, %FALSE
             */
            save_preset(name: string): boolean;
            /**
             * Sets a new `value` for an existing meta data item or adds a new item. Meta
             * data `tag` names can be something like e.g. "comment". Supplying %NULL for the
             * `value` will unset an existing value.
             * @param name preset name
             * @param tag meta data item name
             * @param value new value
             * @returns %TRUE for success, %FALSE if e.g. there is no preset with that @name
             */
            set_meta(name: string, tag: string, value?: string | null): boolean;
            /**
             * Delete the given preset.
             * @param name preset name to remove
             */
            vfunc_delete_preset(name: string): boolean;
            /**
             * Gets the `value` for an existing meta data `tag`. Meta data `tag` names can be
             * something like e.g. "comment". Returned values need to be released when done.
             * @param name preset name
             * @param tag meta data item name
             */
            vfunc_get_meta(name: string, tag: string): [boolean, string];
            /**
             * Get a copy of preset names as a %NULL terminated string array.
             */
            vfunc_get_preset_names(): string[];
            /**
             * Get a the names of the GObject properties that can be used for presets.
             */
            vfunc_get_property_names(): string[];
            /**
             * Load the given preset.
             * @param name preset name to load
             */
            vfunc_load_preset(name: string): boolean;
            /**
             * Renames a preset. If there is already a preset by the `new_name` it will be
             * overwritten.
             * @param old_name current preset name
             * @param new_name new preset name
             */
            vfunc_rename_preset(old_name: string, new_name: string): boolean;
            /**
             * Save the current object settings as a preset under the given name. If there
             * is already a preset by this `name` it will be overwritten.
             * @param name preset name to save
             */
            vfunc_save_preset(name: string): boolean;
            /**
             * Sets a new `value` for an existing meta data item or adds a new item. Meta
             * data `tag` names can be something like e.g. "comment". Supplying %NULL for the
             * `value` will unset an existing value.
             * @param name preset name
             * @param tag meta data item name
             * @param value new value
             */
            vfunc_set_meta(name: string, tag: string, value?: string | null): boolean;
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

        module VideoFilter {
            // Constructor properties interface

            interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {}
        }

        /**
         * Provides useful functions and a base class for video filters.
         *
         * The videofilter will by default enable QoS on the parent GstBaseTransform
         * to implement frame dropping.
         */
        abstract class VideoFilter extends GstBase.BaseTransform {
            static $gtype: GObject.GType<VideoFilter>;

            // Fields

            element: GstBase.BaseTransform;
            negotiated: boolean;

            // Constructors

            constructor(properties?: Partial<VideoFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * function to be called with the negotiated caps and video infos
             * @param incaps
             * @param in_info
             * @param outcaps
             * @param out_info
             */
            vfunc_set_info(incaps: Gst.Caps, in_info: VideoInfo, outcaps: Gst.Caps, out_info: VideoInfo): boolean;
            /**
             * transform a video frame
             * @param inframe
             * @param outframe
             */
            vfunc_transform_frame(inframe: VideoFrame, outframe: VideoFrame): Gst.FlowReturn;
            /**
             * transform a video frame in place
             * @param frame
             */
            vfunc_transform_frame_ip(frame: VideoFrame): Gst.FlowReturn;
        }

        /**
         * See #GstVideoMultiviewFlags.
         */
        class VideoMultiviewFlagsSet extends Gst.FlagSet {
            static $gtype: GObject.GType<VideoMultiviewFlagsSet>;

            // Constructors

            _init(...args: any[]): void;
        }

        module VideoSink {
            // Constructor properties interface

            interface ConstructorProps extends GstBase.BaseSink.ConstructorProps {
                show_preroll_frame: boolean;
                showPrerollFrame: boolean;
            }
        }

        /**
         * Provides useful functions and a base class for video sinks.
         *
         * GstVideoSink will configure the default base sink to drop frames that
         * arrive later than 20ms as this is considered the default threshold for
         * observing out-of-sync frames.
         */
        class VideoSink extends GstBase.BaseSink {
            static $gtype: GObject.GType<VideoSink>;

            // Properties

            /**
             * Whether to show video frames during preroll. If set to %FALSE, video
             * frames will only be rendered in PLAYING state.
             */
            get show_preroll_frame(): boolean;
            set show_preroll_frame(val: boolean);
            /**
             * Whether to show video frames during preroll. If set to %FALSE, video
             * frames will only be rendered in PLAYING state.
             */
            get showPrerollFrame(): boolean;
            set showPrerollFrame(val: boolean);

            // Fields

            element: GstBase.BaseSink;
            width: number;
            height: number;

            // Constructors

            constructor(properties?: Partial<VideoSink.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): VideoRectangle;

            // Virtual methods

            /**
             * Notifies the subclass of changed #GstVideoInfo.
             * @param caps A #GstCaps.
             * @param info A #GstVideoInfo corresponding to @caps.
             */
            vfunc_set_info(caps: Gst.Caps, info: VideoInfo): boolean;
            /**
             * render a video frame. Maps to #GstBaseSinkClass.render() and
             *     #GstBaseSinkClass.preroll() vfuncs. Rendering during preroll will be
             *     suppressed if the #GstVideoSink:show-preroll-frame property is set to
             *     %FALSE.
             * @param buf
             */
            vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn;
        }

        /**
         * #GstMeta for carrying SMPTE-291M Ancillary data. Note that all the ADF fields
         *    (`DID` to `checksum)` are 10bit values with parity/non-parity high-bits set.
         */
        class AncillaryMeta {
            static $gtype: GObject.GType<AncillaryMeta>;

            // Fields

            field: AncillaryMetaField;
            c_not_y_channel: boolean;
            line: number;
            offset: number;
            DID: number;
            SDID_block_number: number;
            data_count: number;
            data: number;
            checksum: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        type ColorBalanceChannelClass = typeof ColorBalanceChannel;
        type ColorBalanceInterface = typeof ColorBalance;
        type NavigationInterface = typeof Navigation;
        /**
         * Active Format Description (AFD)
         *
         * For details, see Table 6.14 Active Format in:
         *
         * ATSC Digital Television Standard:
         * Part 4 – MPEG-2 Video System Characteristics
         *
         * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
         *
         * and Active Format Description in Complete list of AFD codes
         *
         * https://en.wikipedia.org/wiki/Active_Format_Description#Complete_list_of_AFD_codes
         *
         * and SMPTE ST2016-1
         */
        class VideoAFDMeta {
            static $gtype: GObject.GType<VideoAFDMeta>;

            // Fields

            field: number;
            spec: VideoAFDSpec;
            afd: VideoAFDValue;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        /**
         * Extra buffer metadata for performing an affine transformation using a 4x4
         * matrix. The transformation matrix can be composed with
         * gst_video_affine_transformation_meta_apply_matrix().
         *
         * The vertices operated on are all in the range 0 to 1, not in
         * Normalized Device Coordinates (-1 to +1). Transforming points in this space
         * are assumed to have an origin at (0.5, 0.5, 0.5) in a left-handed coordinate
         * system with the x-axis moving horizontally (positive values to the right),
         * the y-axis moving vertically (positive values up the screen) and the z-axis
         * perpendicular to the screen (positive values into the screen).
         */
        class VideoAffineTransformationMeta {
            static $gtype: GObject.GType<VideoAffineTransformationMeta>;

            // Fields

            matrix: number[];

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;

            // Methods

            /**
             * Apply a transformation using the given 4x4 transformation matrix.
             * Performs the multiplication, meta->matrix X matrix.
             * @param matrix a 4x4 transformation matrix to be applied
             */
            apply_matrix(matrix: number[]): void;
        }

        type VideoAggregatorClass = typeof VideoAggregator;
        type VideoAggregatorConvertPadClass = typeof VideoAggregatorConvertPad;
        abstract class VideoAggregatorConvertPadPrivate {
            static $gtype: GObject.GType<VideoAggregatorConvertPadPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VideoAggregatorPadClass = typeof VideoAggregatorPad;
        abstract class VideoAggregatorPadPrivate {
            static $gtype: GObject.GType<VideoAggregatorPadPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VideoAggregatorParallelConvertPadClass = typeof VideoAggregatorParallelConvertPad;
        abstract class VideoAggregatorPrivate {
            static $gtype: GObject.GType<VideoAggregatorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Extra alignment parameters for the memory of video buffers. This
         * structure is usually used to configure the bufferpool if it supports the
         * #GST_BUFFER_POOL_OPTION_VIDEO_ALIGNMENT.
         */
        class VideoAlignment {
            static $gtype: GObject.GType<VideoAlignment>;

            // Fields

            padding_top: number;
            padding_bottom: number;
            padding_left: number;
            padding_right: number;
            stride_align: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    padding_top: number;
                    padding_bottom: number;
                    padding_left: number;
                    padding_right: number;
                    stride_align: number[];
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Set `align` to its default values with no padding and no alignment.
             */
            reset(): void;
        }

        /**
         * Video Ancillary data, according to SMPTE-291M specification.
         *
         * Note that the contents of the data are always stored as 8bit data (i.e. do not contain
         * the parity check bits).
         */
        class VideoAncillary {
            static $gtype: GObject.GType<VideoAncillary>;

            // Fields

            DID: number;
            SDID_block_number: number;
            data_count: number;
            data: Uint8Array;

            // Constructors

            constructor(
                properties?: Partial<{
                    DID: number;
                    SDID_block_number: number;
                    data_count: number;
                    data: Uint8Array;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Bar data should be included in video user data
         * whenever the rectangular picture area containing useful information
         * does not extend to the full height or width of the coded frame
         * and AFD alone is insufficient to describe the extent of the image.
         *
         * Note: either vertical or horizontal bars are specified, but not both.
         *
         * For more details, see:
         *
         * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
         *
         * and SMPTE ST2016-1
         */
        class VideoBarMeta {
            static $gtype: GObject.GType<VideoBarMeta>;

            // Fields

            field: number;
            is_letterbox: boolean;
            bar_data1: number;
            bar_data2: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        type VideoBufferPoolClass = typeof VideoBufferPool;
        abstract class VideoBufferPoolPrivate {
            static $gtype: GObject.GType<VideoBufferPoolPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Extra buffer metadata providing Closed Caption.
         */
        class VideoCaptionMeta {
            static $gtype: GObject.GType<VideoCaptionMeta>;

            // Fields

            caption_type: VideoCaptionType;
            data: Uint8Array;
            size: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        abstract class VideoChromaResample {
            static $gtype: GObject.GType<VideoChromaResample>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Free `resample`
             */
            free(): void;
            /**
             * The resampler must be fed `n_lines` at a time. The first line should be
             * at `offset`.
             */
            get_info(): [number, number];
        }

        /**
         * This meta is primarily for internal use in GStreamer elements to support
         * VP8/VP9 transparent video stored into WebM or Matroska containers, or
         * transparent static AV1 images. Nothing prevents you from using this meta
         * for custom purposes, but it generally can't be used to easily to add support
         * for alpha channels to CODECs or formats that don't support that out of the
         * box.
         */
        class VideoCodecAlphaMeta {
            static $gtype: GObject.GType<VideoCodecAlphaMeta>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        /**
         * A #GstVideoCodecFrame represents a video frame both in raw and
         * encoded form.
         */
        class VideoCodecFrame {
            static $gtype: GObject.GType<VideoCodecFrame>;

            // Fields

            system_frame_number: number;
            dts: Gst.ClockTime;
            pts: Gst.ClockTime;
            duration: Gst.ClockTime;
            distance_from_sync: number;
            deadline: Gst.ClockTime;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets private data set on the frame by the subclass via
             * gst_video_codec_frame_set_user_data() previously.
             * @returns The previously set user_data
             */
            get_user_data(): any | null;
            /**
             * Increases the refcount of the given frame by one.
             * @returns @buf
             */
            ref(): VideoCodecFrame;
            /**
             * Sets `user_data` on the frame and the #GDestroyNotify that will be called when
             * the frame is freed. Allows to attach private data by the subclass to frames.
             *
             * If a `user_data` was previously set, then the previous set `notify` will be called
             * before the `user_data` is replaced.
             * @param notify a #GDestroyNotify
             */
            set_user_data(notify: GLib.DestroyNotify): void;
            /**
             * Decreases the refcount of the frame. If the refcount reaches 0, the frame
             * will be freed.
             */
            unref(): void;
        }

        /**
         * Structure representing the state of an incoming or outgoing video
         * stream for encoders and decoders.
         *
         * Decoders and encoders will receive such a state through their
         * respective `set_format` vmethods.
         *
         * Decoders and encoders can set the downstream state, by using the
         * gst_video_decoder_set_output_state() or
         * gst_video_encoder_set_output_state() methods.
         */
        class VideoCodecState {
            static $gtype: GObject.GType<VideoCodecState>;

            // Fields

            mastering_display_info: VideoMasteringDisplayInfo;
            content_light_level: VideoContentLightLevel;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Increases the refcount of the given state by one.
             * @returns @buf
             */
            ref(): VideoCodecState;
            /**
             * Decreases the refcount of the state. If the refcount reaches 0, the state
             * will be freed.
             */
            unref(): void;
        }

        /**
         * Structure describing the chromaticity coordinates of an RGB system. These
         * values can be used to construct a matrix to transform RGB to and from the
         * XYZ colorspace.
         */
        class VideoColorPrimariesInfo {
            static $gtype: GObject.GType<VideoColorPrimariesInfo>;

            // Fields

            primaries: VideoColorPrimaries;
            Wx: number;
            Wy: number;
            Rx: number;
            Ry: number;
            Gx: number;
            Gy: number;
            Bx: number;
            By: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Structure describing the color info.
         */
        class VideoColorimetry {
            static $gtype: GObject.GType<VideoColorimetry>;

            // Fields

            range: VideoColorRange;
            matrix: VideoColorMatrix;
            transfer: VideoTransferFunction;
            primaries: VideoColorPrimaries;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Parse the colorimetry string and update `cinfo` with the parsed
             * values.
             * @param color a colorimetry string
             * @returns %TRUE if @color points to valid colorimetry info.
             */
            from_string(color: string): boolean;
            /**
             * Compare the 2 colorimetry sets for equality
             * @param other another #GstVideoColorimetry
             * @returns %TRUE if @cinfo and @other are equal.
             */
            is_equal(other: VideoColorimetry): boolean;
            /**
             * Compare the 2 colorimetry sets for functionally equality
             * @param bitdepth bitdepth of a format associated with @cinfo
             * @param other another #GstVideoColorimetry
             * @param other_bitdepth bitdepth of a format associated with @other
             * @returns %TRUE if @cinfo and @other are equivalent.
             */
            is_equivalent(bitdepth: number, other: VideoColorimetry, other_bitdepth: number): boolean;
            /**
             * Check if the colorimetry information in `info` matches that of the
             * string `color`.
             * @param color a colorimetry string
             * @returns %TRUE if @color conveys the same colorimetry info as the color information in @info.
             */
            matches(color: string): boolean;
            /**
             * Make a string representation of `cinfo`.
             * @returns a string representation of @cinfo or %NULL if all the entries of @cinfo are unknown values.
             */
            to_string(): string | null;
        }

        /**
         * Content light level information specified in CEA-861.3, Appendix A.
         */
        class VideoContentLightLevel {
            static $gtype: GObject.GType<VideoContentLightLevel>;

            // Fields

            max_content_light_level: number;
            max_frame_average_light_level: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    max_content_light_level: number;
                    max_frame_average_light_level: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Parse `caps` and update `linfo`
             * @param caps a #GstCaps
             * @returns %TRUE if @linfo was successfully set to @caps
             */
            add_to_caps(caps: Gst.Caps): boolean;
            /**
             * Parse `caps` and update `linfo`
             * @param caps a #GstCaps
             * @returns if @caps has #GstVideoContentLightLevel and could be parsed
             */
            from_caps(caps: Gst.Caps): boolean;
            /**
             * Parse the value of content-light-level caps field and update `minfo`
             * with the parsed values.
             * @param level a content-light-level string from caps
             * @returns %TRUE if @linfo points to valid #GstVideoContentLightLevel.
             */
            from_string(level: string): boolean;
            /**
             * Initialize `linfo`
             */
            init(): void;
            /**
             * Checks equality between `linfo` and `other`.
             * @param other a #GstVideoContentLightLevel
             * @returns %TRUE if @linfo and @other are equal.
             */
            is_equal(other: VideoContentLightLevel): boolean;
            /**
             * Convert `linfo` to its string representation.
             * @returns a string representation of @linfo.
             */
            to_string(): string;
        }

        abstract class VideoConverter {
            static $gtype: GObject.GType<VideoConverter>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Convert the pixels of `src` into `dest` using `convert`.
             *
             * If #GST_VIDEO_CONVERTER_OPT_ASYNC_TASKS is %TRUE then this function will
             * return immediately and needs to be followed by a call to
             * gst_video_converter_frame_finish().
             * @param src a #GstVideoFrame
             * @param dest a #GstVideoFrame
             */
            frame(src: VideoFrame, dest: VideoFrame): void;
            /**
             * Wait for a previous async conversion performed using
             * gst_video_converter_frame() to complete.
             */
            frame_finish(): void;
            /**
             * Free `convert`
             */
            free(): void;
            /**
             * Get the current configuration of `convert`.
             * @returns a #GstStructure that remains valid for as long as @convert is valid   or until gst_video_converter_set_config() is called.
             */
            get_config(): Gst.Structure;
            /**
             * Retrieve the input format of `convert`.
             * @returns a #GstVideoInfo
             */
            get_in_info(): VideoInfo;
            /**
             * Retrieve the output format of `convert`.
             * @returns a #GstVideoInfo
             */
            get_out_info(): VideoInfo;
            /**
             * Set `config` as extra configuration for `convert`.
             *
             * If the parameters in `config` can not be set exactly, this function returns
             * %FALSE and will try to update as much state as possible. The new state can
             * then be retrieved and refined with gst_video_converter_get_config().
             *
             * Look at the `GST_VIDEO_CONVERTER_OPT_*` fields to check valid configuration
             * option and values.
             * @param config a #GstStructure
             * @returns %TRUE when @config could be set.
             */
            set_config(config: Gst.Structure): boolean;
        }

        /**
         * Extra buffer metadata describing image cropping.
         */
        class VideoCropMeta {
            static $gtype: GObject.GType<VideoCropMeta>;

            // Fields

            x: number;
            y: number;
            width: number;
            height: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        type VideoDecoderClass = typeof VideoDecoder;
        abstract class VideoDecoderPrivate {
            static $gtype: GObject.GType<VideoDecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VideoDirectionInterface = typeof VideoDirection;
        /**
         * GstVideoDither provides implementations of several dithering algorithms
         * that can be applied to lines of video pixels to quantize and dither them.
         */
        abstract class VideoDither {
            static $gtype: GObject.GType<VideoDither>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Free `dither`
             */
            free(): void;
            /**
             * Dither `width` pixels starting from offset `x` in `line` using `dither`.
             *
             * `y` is the line number of `line` in the output image.
             * @param line pointer to the pixels of the line
             * @param x x coordinate
             * @param y y coordinate
             * @param width the width
             */
            line(line: any | null, x: number, y: number, width: number): void;
        }

        type VideoEncoderClass = typeof VideoEncoder;
        abstract class VideoEncoderPrivate {
            static $gtype: GObject.GType<VideoEncoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VideoFilterClass = typeof VideoFilter;
        /**
         * Information for a video format.
         */
        class VideoFormatInfo {
            static $gtype: GObject.GType<VideoFormatInfo>;

            // Fields

            format: VideoFormat;
            name: string;
            description: string;
            flags: VideoFormatFlags;
            bits: number;
            n_components: number;
            shift: number[];
            depth: number[];
            pixel_stride: number[];
            n_planes: number;
            plane: number[];
            poffset: number[];
            w_sub: number[];
            h_sub: number[];
            unpack_format: VideoFormat;
            unpack_func: VideoFormatUnpack;
            pack_lines: number;
            pack_func: VideoFormatPack;
            tile_mode: VideoTileMode;
            tile_ws: number;
            tile_hs: number;
            tile_info: VideoTileInfo[];

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Fill `components` with the number of all the components packed in plane `p`
             * for the format `info`. A value of -1 in `components` indicates that no more
             * components are packed in the plane.
             * @param plane a plane number
             */
            component(plane: number): number;
            /**
             * Extrapolate `plane` stride from the first stride of an image. This helper is
             * useful to support legacy API were only one stride is supported.
             * @param plane a plane number
             * @param stride The fist plane stride
             * @returns The extrapolated stride for @plane
             */
            extrapolate_stride(plane: number, stride: number): number;
        }

        /**
         * A video frame obtained from gst_video_frame_map()
         */
        class VideoFrame {
            static $gtype: GObject.GType<VideoFrame>;

            // Fields

            flags: VideoFrameFlags;
            meta: any;
            id: number;
            data: any[];

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Use `info` and `buffer` to fill in the values of `frame`. `frame` is usually
             * allocated on the stack, and you will pass the address to the #GstVideoFrame
             * structure allocated on the stack; gst_video_frame_map() will then fill in
             * the structures with the various video-specific information you need to access
             * the pixels of the video buffer. You can then use accessor macros such as
             * GST_VIDEO_FRAME_COMP_DATA(), GST_VIDEO_FRAME_PLANE_DATA(),
             * GST_VIDEO_FRAME_COMP_STRIDE(), GST_VIDEO_FRAME_PLANE_STRIDE() etc.
             * to get to the pixels.
             *
             *
             * ```c
             *   GstVideoFrame vframe;
             *   ...
             *   // set RGB pixels to black one at a time
             *   if (gst_video_frame_map (&vframe, video_info, video_buffer, GST_MAP_WRITE)) {
             *     guint8 *pixels = GST_VIDEO_FRAME_PLANE_DATA (vframe, 0);
             *     guint stride = GST_VIDEO_FRAME_PLANE_STRIDE (vframe, 0);
             *     guint pixel_stride = GST_VIDEO_FRAME_COMP_PSTRIDE (vframe, 0);
             *
             *     for (h = 0; h < height; ++h) {
             *       for (w = 0; w < width; ++w) {
             *         guint8 *pixel = pixels + h * stride + w * pixel_stride;
             *
             *         memset (pixel, 0, pixel_stride);
             *       }
             *     }
             *
             *     gst_video_frame_unmap (&vframe);
             *   }
             *   ...
             * ```
             *
             *
             * All video planes of `buffer` will be mapped and the pointers will be set in
             * `frame->`data.
             *
             * The purpose of this function is to make it easy for you to get to the video
             * pixels in a generic way, without you having to worry too much about details
             * such as whether the video data is allocated in one contiguous memory chunk
             * or multiple memory chunks (e.g. one for each plane); or if custom strides
             * and custom plane offsets are used or not (as signalled by GstVideoMeta on
             * each buffer). This function will just fill the #GstVideoFrame structure
             * with the right values and if you use the accessor macros everything will
             * just work and you can access the data easily. It also maps the underlying
             * memory chunks for you.
             * @param info a #GstVideoInfo
             * @param buffer the buffer to map
             * @param flags #GstMapFlags
             */
            static map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, VideoFrame];
            /**
             * Use `info` and `buffer` to fill in the values of `frame` with the video frame
             * information of frame `id`.
             *
             * When `id` is -1, the default frame is mapped. When `id` != -1, this function
             * will return %FALSE when there is no GstVideoMeta with that id.
             *
             * All video planes of `buffer` will be mapped and the pointers will be set in
             * `frame->`data.
             * @param info a #GstVideoInfo
             * @param buffer the buffer to map
             * @param id the frame id to map
             * @param flags #GstMapFlags
             */
            static map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [boolean, VideoFrame];

            // Methods

            /**
             * Copy the contents from `src` to `dest`.
             *
             * Note: Since: 1.18, `dest` dimensions are allowed to be
             * smaller than `src` dimensions.
             * @param src a #GstVideoFrame
             * @returns TRUE if the contents could be copied.
             */
            copy(src: VideoFrame): boolean;
            /**
             * Copy the plane with index `plane` from `src` to `dest`.
             *
             * Note: Since: 1.18, `dest` dimensions are allowed to be
             * smaller than `src` dimensions.
             * @param src a #GstVideoFrame
             * @param plane a plane
             * @returns TRUE if the contents could be copied.
             */
            copy_plane(src: VideoFrame, plane: number): boolean;
            /**
             * Unmap the memory previously mapped with gst_video_frame_map.
             */
            unmap(): void;
        }

        /**
         * Extra buffer metadata for uploading a buffer to an OpenGL texture
         * ID. The caller of gst_video_gl_texture_upload_meta_upload() must
         * have OpenGL set up and call this from a thread where it is valid
         * to upload something to an OpenGL texture.
         */
        class VideoGLTextureUploadMeta {
            static $gtype: GObject.GType<VideoGLTextureUploadMeta>;

            // Fields

            texture_orientation: VideoGLTextureOrientation;
            n_textures: number;
            texture_type: VideoGLTextureType[];

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;

            // Methods

            /**
             * Uploads the buffer which owns the meta to a specific texture ID.
             * @param texture_id the texture IDs to upload to
             * @returns %TRUE if uploading succeeded, %FALSE otherwise.
             */
            upload(texture_id: number): boolean;
        }

        /**
         * Information describing image properties. This information can be filled
         * in from GstCaps with gst_video_info_from_caps(). The information is also used
         * to store the specific video info when mapping a video frame with
         * gst_video_frame_map().
         *
         * Use the provided macros to access the info in this structure.
         */
        class VideoInfo {
            static $gtype: GObject.GType<VideoInfo>;

            // Fields

            interlace_mode: VideoInterlaceMode;
            flags: VideoFlags;
            width: number;
            height: number;
            size: number;
            views: number;
            chroma_site: VideoChromaSite;
            par_n: number;
            par_d: number;
            fps_n: number;
            fps_d: number;
            offset: number[];
            stride: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    interlace_mode: VideoInterlaceMode;
                    flags: VideoFlags;
                    width: number;
                    height: number;
                    size: number;
                    views: number;
                    chroma_site: VideoChromaSite;
                    colorimetry: VideoColorimetry;
                    par_n: number;
                    par_d: number;
                    fps_n: number;
                    fps_d: number;
                    offset: number[];
                    stride: number[];
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): VideoInfo;

            static new_from_caps(caps: Gst.Caps): VideoInfo;

            // Static methods

            /**
             * Parse `caps` and update `info`.
             * @param caps a #GstCaps
             */
            static from_caps(caps: Gst.Caps): [boolean, VideoInfo];
            /**
             * Initialize `info` with default values.
             */
            static init(): VideoInfo;

            // Methods

            /**
             * Adjust the offset and stride fields in `info` so that the padding and
             * stride alignment in `align` is respected.
             *
             * Extra padding will be added to the right side when stride alignment padding
             * is required and `align` will be updated with the new padding values.
             * @param align alignment parameters
             * @returns %FALSE if alignment could not be applied, e.g. because the   size of a frame can't be represented as a 32 bit integer (Since: 1.12)
             */
            align(align: VideoAlignment): boolean;
            /**
             * Extra padding will be added to the right side when stride alignment padding
             * is required and `align` will be updated with the new padding values.
             *
             * This variant of gst_video_info_align() provides the updated size, in bytes,
             * of each video plane after the alignment, including all horizontal and vertical
             * paddings.
             *
             * In case of GST_VIDEO_INTERLACE_MODE_ALTERNATE info, the returned sizes are the
             * ones used to hold a single field, not the full frame.
             * @param align alignment parameters
             * @returns %FALSE if alignment could not be applied, e.g. because the   size of a frame can't be represented as a 32 bit integer
             */
            align_full(align: VideoAlignment): [boolean, number];
            /**
             * Converts among various #GstFormat types.  This function handles
             * GST_FORMAT_BYTES, GST_FORMAT_TIME, and GST_FORMAT_DEFAULT.  For
             * raw video, GST_FORMAT_DEFAULT corresponds to video frames.  This
             * function can be used to handle pad queries of the type GST_QUERY_CONVERT.
             * @param src_format #GstFormat of the @src_value
             * @param src_value value to convert
             * @param dest_format #GstFormat of the @dest_value
             * @returns TRUE if the conversion was successful.
             */
            convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [boolean, number];
            /**
             * Copy a GstVideoInfo structure.
             * @returns a new #GstVideoInfo. free with gst_video_info_free.
             */
            copy(): VideoInfo;
            /**
             * Free a GstVideoInfo structure previously allocated with gst_video_info_new()
             * or gst_video_info_copy().
             */
            free(): void;
            /**
             * Compares two #GstVideoInfo and returns whether they are equal or not
             * @param other a #GstVideoInfo
             * @returns %TRUE if @info and @other are equal, else %FALSE.
             */
            is_equal(other: VideoInfo): boolean;
            /**
             * Set the default info for a video frame of `format` and `width` and `height`.
             *
             * Note: This initializes `info` first, no values are preserved. This function
             * does not set the offsets correctly for interlaced vertically
             * subsampled formats.
             * @param format the format
             * @param width a width
             * @param height a height
             * @returns %FALSE if the returned video info is invalid, e.g. because the   size of a frame can't be represented as a 32 bit integer (Since: 1.12)
             */
            set_format(format: VideoFormat, width: number, height: number): boolean;
            /**
             * Same as #gst_video_info_set_format but also allowing to set the interlaced
             * mode.
             * @param format the format
             * @param mode a #GstVideoInterlaceMode
             * @param width a width
             * @param height a height
             * @returns %FALSE if the returned video info is invalid, e.g. because the   size of a frame can't be represented as a 32 bit integer.
             */
            set_interlaced_format(
                format: VideoFormat,
                mode: VideoInterlaceMode,
                width: number,
                height: number,
            ): boolean;
            /**
             * Convert the values of `info` into a #GstCaps.
             * @returns a new #GstCaps containing the info of @info.
             */
            to_caps(): Gst.Caps;
        }

        /**
         * Information describing a DMABuf image properties. It wraps #GstVideoInfo and
         * adds DRM information such as drm-fourcc and drm-modifier, required for
         * negotiation and mapping.
         */
        class VideoInfoDmaDrm {
            static $gtype: GObject.GType<VideoInfoDmaDrm>;

            // Fields

            drm_fourcc: number;
            drm_modifier: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    vinfo: VideoInfo;
                    drm_fourcc: number;
                    drm_modifier: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): VideoInfoDmaDrm;

            static new_from_caps(caps: Gst.Caps): VideoInfoDmaDrm;

            // Static methods

            /**
             * Parse `caps` and update `info`. Please note that the `caps` should be
             * a dma drm caps. The gst_video_is_dma_drm_caps() can be used to verify
             * it before calling this function.
             * @param caps a #GstCaps
             */
            static from_caps(caps: Gst.Caps): [boolean, VideoInfoDmaDrm];
            /**
             * Fills `drm_info` if `info'`s format has a valid drm format and `modifier` is also
             * valid
             * @param info a #GstVideoInfo
             * @param modifier the associated modifier value.
             */
            static from_video_info(info: VideoInfo, modifier: number): [boolean, VideoInfoDmaDrm];
            /**
             * Initialize `drm_info` with default values.
             */
            static init(): VideoInfoDmaDrm;

            // Methods

            /**
             * Free a #GstVideoInfoDmaDrm structure previously allocated with
             * gst_video_info_dma_drm_new()
             */
            free(): void;
            /**
             * Convert the values of `drm_info` into a #GstCaps. Please note that the
             * `caps` returned will be a dma drm caps which sets format field to DMA_DRM,
             * and contains a new drm-format field. The value of drm-format field is
             * composed of a drm fourcc and a modifier, such as NV12:0x0100000000000002.
             * @returns a new #GstCaps containing the info in @drm_info.
             */
            to_caps(): Gst.Caps | null;
            /**
             * Convert the #GstVideoInfoDmaDrm into a traditional #GstVideoInfo with
             * recognized video format. For DMA kind memory, the non linear DMA format
             * should be recognized as #GST_VIDEO_FORMAT_DMA_DRM. This helper function
             * sets `info'`s video format into the default value according to `drm_info'`s
             * drm_fourcc field.
             * @returns %TRUE if @info is converted correctly.
             */
            to_video_info(): [boolean, VideoInfo];
        }

        /**
         * Mastering display color volume information defined by SMPTE ST 2086
         * (a.k.a static HDR metadata).
         */
        class VideoMasteringDisplayInfo {
            static $gtype: GObject.GType<VideoMasteringDisplayInfo>;

            // Fields

            display_primaries: VideoMasteringDisplayInfoCoordinates[];
            white_point: VideoMasteringDisplayInfoCoordinates;
            max_display_mastering_luminance: number;
            min_display_mastering_luminance: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    display_primaries: VideoMasteringDisplayInfoCoordinates[];
                    white_point: VideoMasteringDisplayInfoCoordinates;
                    max_display_mastering_luminance: number;
                    min_display_mastering_luminance: number;
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Extract #GstVideoMasteringDisplayInfo from `mastering`
             * @param mastering a #GstStructure representing #GstVideoMasteringDisplayInfo
             */
            static from_string(mastering: string): [boolean, VideoMasteringDisplayInfo];

            // Methods

            /**
             * Set string representation of `minfo` to `caps`
             * @param caps a #GstCaps
             * @returns %TRUE if @minfo was successfully set to @caps
             */
            add_to_caps(caps: Gst.Caps): boolean;
            /**
             * Parse `caps` and update `minfo`
             * @param caps a #GstCaps
             * @returns %TRUE if @caps has #GstVideoMasteringDisplayInfo and could be parsed
             */
            from_caps(caps: Gst.Caps): boolean;
            /**
             * Initialize `minfo`
             */
            init(): void;
            /**
             * Checks equality between `minfo` and `other`.
             * @param other a #GstVideoMasteringDisplayInfo
             * @returns %TRUE if @minfo and @other are equal.
             */
            is_equal(other: VideoMasteringDisplayInfo): boolean;
            /**
             * Convert `minfo` to its string representation
             * @returns a string representation of @minfo
             */
            to_string(): string;
        }

        /**
         * Used to represent display_primaries and white_point of
         * #GstVideoMasteringDisplayInfo struct. See #GstVideoMasteringDisplayInfo
         */
        class VideoMasteringDisplayInfoCoordinates {
            static $gtype: GObject.GType<VideoMasteringDisplayInfoCoordinates>;

            // Fields

            x: number;
            y: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Extra buffer metadata describing image properties
         *
         * This meta can also be used by downstream elements to specifiy their
         * buffer layout requirements for upstream. Upstream should try to
         * fit those requirements, if possible, in order to prevent buffer copies.
         *
         * This is done by passing a custom #GstStructure to
         * gst_query_add_allocation_meta() when handling the ALLOCATION query.
         * This structure should be named 'video-meta' and can have the following
         * fields:
         * - padding-top (uint): extra pixels on the top
         * - padding-bottom (uint): extra pixels on the bottom
         * - padding-left (uint): extra pixels on the left side
         * - padding-right (uint): extra pixels on the right side
         * The padding fields have the same semantic as #GstVideoMeta.alignment
         * and so represent the paddings requested on produced video buffers.
         *
         * Since 1.24 it can be serialized using gst_meta_serialize() and
         * gst_meta_deserialize().
         */
        class VideoMeta {
            static $gtype: GObject.GType<VideoMeta>;

            // Fields

            flags: VideoFrameFlags;
            format: VideoFormat;
            id: number;
            width: number;
            height: number;
            n_planes: number;
            offset: number[];
            stride: number[];
            alignment: VideoAlignment;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;

            // Methods

            /**
             * Compute the padded height of each plane from `meta` (padded size
             * divided by stride).
             *
             * It is not valid to call this function with a meta associated to a
             * TILED video format.
             * @returns %TRUE if @meta's alignment is valid and @plane_height has been updated, %FALSE otherwise
             */
            get_plane_height(): [boolean, number[]];
            /**
             * Compute the size, in bytes, of each video plane described in `meta` including
             * any padding and alignment constraint defined in `meta->`alignment.
             * @returns %TRUE if @meta's alignment is valid and @plane_size has been updated, %FALSE otherwise
             */
            get_plane_size(): [boolean, number[]];
            /**
             * Map the video plane with index `plane` in `meta` and return a pointer to the
             * first byte of the plane and the stride of the plane.
             * @param plane a plane
             * @param info a #GstMapInfo
             * @param flags @GstMapFlags
             * @returns TRUE if the map operation was successful.
             */
            map(plane: number, info: Gst.MapInfo, flags: Gst.MapFlags): [boolean, any, number];
            /**
             * Set the alignment of `meta` to `alignment`. This function checks that
             * the paddings defined in `alignment` are compatible with the strides
             * defined in `meta` and will fail to update if they are not.
             * @param alignment a #GstVideoAlignment
             * @returns %TRUE if @alignment's meta has been updated, %FALSE if not
             */
            set_alignment(alignment: VideoAlignment): boolean;
            /**
             * Unmap a previously mapped plane with gst_video_meta_map().
             * @param plane a plane
             * @param info a #GstMapInfo
             * @returns TRUE if the memory was successfully unmapped.
             */
            unmap(plane: number, info: Gst.MapInfo): boolean;
        }

        /**
         * Extra data passed to a video transform #GstMetaTransformFunction such as:
         * "gst-video-scale".
         */
        class VideoMetaTransform {
            static $gtype: GObject.GType<VideoMetaTransform>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Get the #GQuark for the "gst-video-scale" metadata transform operation.
             */
            static scale_get_quark(): GLib.Quark;
        }

        type VideoOrientationInterface = typeof VideoOrientation;
        /**
         * Functions to create and handle overlay compositions on video buffers.
         *
         * An overlay composition describes one or more overlay rectangles to be
         * blended on top of a video buffer.
         *
         * This API serves two main purposes:
         *
         * * it can be used to attach overlay information (subtitles or logos)
         *   to non-raw video buffers such as GL/VAAPI/VDPAU surfaces. The actual
         *   blending of the overlay can then be done by e.g. the video sink that
         *   processes these non-raw buffers.
         *
         * * it can also be used to blend overlay rectangles on top of raw video
         *   buffers, thus consolidating blending functionality for raw video in
         *   one place.
         *
         * Together, this allows existing overlay elements to easily handle raw
         * and non-raw video as input in without major changes (once the overlays
         * have been put into a #GstVideoOverlayComposition object anyway) - for raw
         * video the overlay can just use the blending function to blend the data
         * on top of the video, and for surface buffers it can just attach them to
         * the buffer and let the sink render the overlays.
         */
        class VideoOverlayComposition {
            static $gtype: GObject.GType<VideoOverlayComposition>;

            // Constructors

            constructor(rectangle?: VideoOverlayRectangle | null);
            _init(...args: any[]): void;

            static ['new'](rectangle?: VideoOverlayRectangle | null): VideoOverlayComposition;

            // Methods

            /**
             * Adds an overlay rectangle to an existing overlay composition object. This
             * must be done right after creating the overlay composition.
             * @param rectangle a #GstVideoOverlayRectangle to add to the     composition
             */
            add_rectangle(rectangle: VideoOverlayRectangle): void;
            /**
             * Blends the overlay rectangles in `comp` on top of the raw video data
             * contained in `video_buf`. The data in `video_buf` must be writable and
             * mapped appropriately.
             *
             * Since `video_buf` data is read and will be modified, it ought be
             * mapped with flag GST_MAP_READWRITE.
             * @param video_buf a #GstVideoFrame containing raw video data in a             supported format. It should be mapped using GST_MAP_READWRITE
             */
            blend(video_buf: VideoFrame): boolean;
            /**
             * Makes a copy of `comp` and all contained rectangles, so that it is possible
             * to modify the composition and contained rectangles (e.g. add additional
             * rectangles or change the render co-ordinates or render dimension). The
             * actual overlay pixel data buffers contained in the rectangles are not
             * copied.
             * @returns a new #GstVideoOverlayComposition equivalent     to @comp.
             */
            copy(): VideoOverlayComposition;
            /**
             * Returns the `n-th` #GstVideoOverlayRectangle contained in `comp`.
             * @param n number of the rectangle to get
             * @returns the @n-th rectangle, or NULL if @n is out of     bounds. Will not return a new reference, the caller will need to     obtain her own reference using gst_video_overlay_rectangle_ref()     if needed.
             */
            get_rectangle(n: number): VideoOverlayRectangle | null;
            /**
             * Returns the sequence number of this composition. Sequence numbers are
             * monotonically increasing and unique for overlay compositions and rectangles
             * (meaning there will never be a rectangle with the same sequence number as
             * a composition).
             * @returns the sequence number of @comp
             */
            get_seqnum(): number;
            /**
             * Takes ownership of `comp` and returns a version of `comp` that is writable
             * (i.e. can be modified). Will either return `comp` right away, or create a
             * new writable copy of `comp` and unref `comp` itself. All the contained
             * rectangles will also be copied, but the actual overlay pixel data buffers
             * contained in the rectangles are not copied.
             * @returns a writable #GstVideoOverlayComposition     equivalent to @comp.
             */
            make_writable(): VideoOverlayComposition;
            /**
             * Returns the number of #GstVideoOverlayRectangle<!-- -->s contained in `comp`.
             * @returns the number of rectangles
             */
            n_rectangles(): number;
        }

        /**
         * Extra buffer metadata describing image overlay data.
         */
        class VideoOverlayCompositionMeta {
            static $gtype: GObject.GType<VideoOverlayCompositionMeta>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        type VideoOverlayInterface = typeof VideoOverlay;
        /**
         * An opaque video overlay rectangle object. A rectangle contains a single
         * overlay rectangle which can be added to a composition.
         */
        class VideoOverlayRectangle {
            static $gtype: GObject.GType<VideoOverlayRectangle>;

            // Constructors

            constructor(
                pixels: Gst.Buffer,
                render_x: number,
                render_y: number,
                render_width: number,
                render_height: number,
                flags: VideoOverlayFormatFlags,
            );
            _init(...args: any[]): void;

            static new_raw(
                pixels: Gst.Buffer,
                render_x: number,
                render_y: number,
                render_width: number,
                render_height: number,
                flags: VideoOverlayFormatFlags,
            ): VideoOverlayRectangle;

            // Methods

            /**
             * Makes a copy of `rectangle,` so that it is possible to modify it
             * (e.g. to change the render co-ordinates or render dimension). The
             * actual overlay pixel data buffers contained in the rectangle are not
             * copied.
             * @returns a new #GstVideoOverlayRectangle equivalent     to @rectangle.
             */
            copy(): VideoOverlayRectangle;
            /**
             * Retrieves the flags associated with a #GstVideoOverlayRectangle.
             * This is useful if the caller can handle both premultiplied alpha and
             * non premultiplied alpha, for example. By knowing whether the rectangle
             * uses premultiplied or not, it can request the pixel data in the format
             * it is stored in, to avoid unnecessary conversion.
             * @returns the #GstVideoOverlayFormatFlags associated with the rectangle.
             */
            get_flags(): VideoOverlayFormatFlags;
            /**
             * Retrieves the global-alpha value associated with a #GstVideoOverlayRectangle.
             * @returns the global-alpha value associated with the rectangle.
             */
            get_global_alpha(): number;
            get_pixels_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
            get_pixels_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
            get_pixels_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
            /**
             * Retrieves the pixel data as it is. This is useful if the caller can
             * do the scaling itself when handling the overlaying. The rectangle will
             * need to be scaled to the render dimensions, which can be retrieved using
             * gst_video_overlay_rectangle_get_render_rectangle().
             * @param flags flags.    If a global_alpha value != 1 is set for the rectangle, the caller    should set the #GST_VIDEO_OVERLAY_FORMAT_FLAG_GLOBAL_ALPHA flag    if he wants to apply global-alpha himself. If the flag is not set    global_alpha is applied internally before returning the pixel-data.
             * @returns a #GstBuffer holding the ARGB pixel data with    #GstVideoMeta set. This function does not return a reference, the caller    should obtain a reference of her own with gst_buffer_ref() if needed.
             */
            get_pixels_unscaled_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
            /**
             * Retrieves the pixel data as it is. This is useful if the caller can
             * do the scaling itself when handling the overlaying. The rectangle will
             * need to be scaled to the render dimensions, which can be retrieved using
             * gst_video_overlay_rectangle_get_render_rectangle().
             * @param flags flags.    If a global_alpha value != 1 is set for the rectangle, the caller    should set the #GST_VIDEO_OVERLAY_FORMAT_FLAG_GLOBAL_ALPHA flag    if he wants to apply global-alpha himself. If the flag is not set    global_alpha is applied internally before returning the pixel-data.
             * @returns a #GstBuffer holding the AYUV pixel data with    #GstVideoMeta set. This function does not return a reference, the caller    should obtain a reference of her own with gst_buffer_ref() if needed.
             */
            get_pixels_unscaled_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
            /**
             * Retrieves the pixel data as it is. This is useful if the caller can
             * do the scaling itself when handling the overlaying. The rectangle will
             * need to be scaled to the render dimensions, which can be retrieved using
             * gst_video_overlay_rectangle_get_render_rectangle().
             * @param flags flags.    If a global_alpha value != 1 is set for the rectangle, the caller    should set the #GST_VIDEO_OVERLAY_FORMAT_FLAG_GLOBAL_ALPHA flag    if he wants to apply global-alpha himself. If the flag is not set    global_alpha is applied internally before returning the pixel-data.
             * @returns a #GstBuffer holding the pixel data with    #GstVideoMeta set. This function does not return a reference, the caller    should obtain a reference of her own with gst_buffer_ref() if needed.
             */
            get_pixels_unscaled_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
            /**
             * Retrieves the render position and render dimension of the overlay
             * rectangle on the video.
             * @returns TRUE if valid render dimensions were retrieved.
             */
            get_render_rectangle(): [boolean, number, number, number, number];
            /**
             * Returns the sequence number of this rectangle. Sequence numbers are
             * monotonically increasing and unique for overlay compositions and rectangles
             * (meaning there will never be a rectangle with the same sequence number as
             * a composition).
             *
             * Using the sequence number of a rectangle as an indicator for changed
             * pixel-data of a rectangle is dangereous. Some API calls, like e.g.
             * gst_video_overlay_rectangle_set_global_alpha(), automatically update
             * the per rectangle sequence number, which is misleading for renderers/
             * consumers, that handle global-alpha themselves. For them  the
             * pixel-data returned by gst_video_overlay_rectangle_get_pixels_*()
             * won't be different for different global-alpha values. In this case a
             * renderer could also use the GstBuffer pointers as a hint for changed
             * pixel-data.
             * @returns the sequence number of @rectangle
             */
            get_seqnum(): number;
            /**
             * Sets the global alpha value associated with a #GstVideoOverlayRectangle. Per-
             * pixel alpha values are multiplied with this value. Valid
             * values: 0 <= global_alpha <= 1; 1 to deactivate.
             *
             * `rectangle` must be writable, meaning its refcount must be 1. You can
             * make the rectangles inside a #GstVideoOverlayComposition writable using
             * gst_video_overlay_composition_make_writable() or
             * gst_video_overlay_composition_copy().
             * @param global_alpha Global alpha value (0 to 1.0)
             */
            set_global_alpha(global_alpha: number): void;
            /**
             * Sets the render position and dimensions of the rectangle on the video.
             * This function is mainly for elements that modify the size of the video
             * in some way (e.g. through scaling or cropping) and need to adjust the
             * details of any overlays to match the operation that changed the size.
             *
             * `rectangle` must be writable, meaning its refcount must be 1. You can
             * make the rectangles inside a #GstVideoOverlayComposition writable using
             * gst_video_overlay_composition_make_writable() or
             * gst_video_overlay_composition_copy().
             * @param render_x render X position of rectangle on video
             * @param render_y render Y position of rectangle on video
             * @param render_width render width of rectangle
             * @param render_height render height of rectangle
             */
            set_render_rectangle(render_x: number, render_y: number, render_width: number, render_height: number): void;
        }

        /**
         * Helper structure representing a rectangular area.
         */
        class VideoRectangle {
            static $gtype: GObject.GType<VideoRectangle>;

            // Fields

            x: number;
            y: number;
            w: number;
            h: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                    w: number;
                    h: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * Extra buffer metadata describing an image region of interest
         */
        class VideoRegionOfInterestMeta {
            static $gtype: GObject.GType<VideoRegionOfInterestMeta>;

            // Fields

            roi_type: GLib.Quark;
            id: number;
            parent_id: number;
            x: number;
            y: number;
            w: number;
            h: number;
            params: any[];

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;

            // Methods

            /**
             * Attach element-specific parameters to `meta` meant to be used by downstream
             * elements which may handle this ROI.
             * The name of `s` is used to identify the element these parameters are meant for.
             *
             * This is typically used to tell encoders how they should encode this specific region.
             * For example, a structure named "roi/x264enc" could be used to give the
             * QP offsets this encoder should use when encoding the region described in `meta`.
             * Multiple parameters can be defined for the same meta so different encoders
             * can be supported by cross platform applications).
             * @param s a #GstStructure
             */
            add_param(s: Gst.Structure): void;
            /**
             * Retrieve the parameter for `meta` having `name` as structure name,
             * or %NULL if there is none.
             * @param name a name.
             * @returns a #GstStructure
             */
            get_param(name: string): Gst.Structure | null;
        }

        /**
         * #GstVideoResampler is a structure which holds the information
         * required to perform various kinds of resampling filtering.
         */
        class VideoResampler {
            static $gtype: GObject.GType<VideoResampler>;

            // Fields

            in_size: number;
            out_size: number;
            max_taps: number;
            n_phases: number;
            offset: number;
            phase: number;
            n_taps: number;
            taps: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    in_size: number;
                    out_size: number;
                    max_taps: number;
                    n_phases: number;
                    offset: number;
                    phase: number;
                    n_taps: number;
                    taps: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Clear a previously initialized #GstVideoResampler `resampler`.
             */
            clear(): void;
            init(
                method: VideoResamplerMethod,
                flags: VideoResamplerFlags,
                n_phases: number,
                n_taps: number,
                shift: number,
                in_size: number,
                out_size: number,
                options: Gst.Structure,
            ): boolean;
        }

        /**
         * H.264 H.265 metadata from SEI User Data Unregistered messages
         */
        class VideoSEIUserDataUnregisteredMeta {
            static $gtype: GObject.GType<VideoSEIUserDataUnregisteredMeta>;

            // Fields

            uuid: Uint8Array;
            data: number;
            size: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        /**
         * #GstVideoScaler is a utility object for rescaling and resampling
         * video frames using various interpolation / sampling methods.
         */
        abstract class VideoScaler {
            static $gtype: GObject.GType<VideoScaler>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Scale a rectangle of pixels in `src` with `src_stride` to `dest` with
             * `dest_stride` using the horizontal scaler `hscaler` and the vertical
             * scaler `vscale`.
             *
             * One or both of `hscale` and `vscale` can be NULL to only perform scaling in
             * one dimension or do a copy without scaling.
             *
             * `x` and `y` are the coordinates in the destination image to process.
             * @param vscale a vertical #GstVideoScaler
             * @param format a #GstVideoFormat for @srcs and @dest
             * @param src source pixels
             * @param src_stride source pixels stride
             * @param dest destination pixels
             * @param dest_stride destination pixels stride
             * @param x the horizontal destination offset
             * @param y the vertical destination offset
             * @param width the number of output pixels to scale
             * @param height the number of output lines to scale
             */
            ['2d'](
                vscale: VideoScaler,
                format: VideoFormat,
                src: any | null,
                src_stride: number,
                dest: any | null,
                dest_stride: number,
                x: number,
                y: number,
                width: number,
                height: number,
            ): void;
            /**
             * Free a previously allocated #GstVideoScaler `scale`.
             */
            free(): void;
            /**
             * For a given pixel at `out_offset,` get the first required input pixel at
             * `in_offset` and the `n_taps` filter coefficients.
             *
             * Note that for interlaced content, `in_offset` needs to be incremented with
             * 2 to get the next input line.
             * @param out_offset an output offset
             * @returns an array of @n_tap gdouble values with filter coefficients.
             */
            get_coeff(out_offset: number): [number, number, number];
            /**
             * Get the maximum number of taps for `scale`.
             * @returns the maximum number of taps
             */
            get_max_taps(): number;
            /**
             * Horizontally scale the pixels in `src` to `dest,` starting from `dest_offset`
             * for `width` samples.
             * @param format a #GstVideoFormat for @src and @dest
             * @param src source pixels
             * @param dest destination pixels
             * @param dest_offset the horizontal destination offset
             * @param width the number of pixels to scale
             */
            horizontal(
                format: VideoFormat,
                src: any | null,
                dest: any | null,
                dest_offset: number,
                width: number,
            ): void;
            /**
             * Vertically combine `width` pixels in the lines in `src_lines` to `dest`.
             * `dest` is the location of the target line at `dest_offset` and
             * `srcs` are the input lines for `dest_offset`.
             * @param format a #GstVideoFormat for @srcs and @dest
             * @param src_lines source pixels lines
             * @param dest destination pixels
             * @param dest_offset the vertical destination offset
             * @param width the number of pixels to scale
             */
            vertical(
                format: VideoFormat,
                src_lines: any | null,
                dest: any | null,
                dest_offset: number,
                width: number,
            ): void;
        }

        type VideoSinkClass = typeof VideoSink;
        abstract class VideoSinkPrivate {
            static $gtype: GObject.GType<VideoSinkPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Description of a tile. This structure allow to describe arbitrary tile
         * dimensions and sizes.
         */
        class VideoTileInfo {
            static $gtype: GObject.GType<VideoTileInfo>;

            // Fields

            width: number;
            height: number;
            stride: number;
            size: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    width: number;
                    height: number;
                    stride: number;
                    size: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * `field_count` must be 0 for progressive video and 1 or 2 for interlaced.
         *
         * A representation of a SMPTE time code.
         *
         * `hours` must be positive and less than 24. Will wrap around otherwise.
         * `minutes` and `seconds` must be positive and less than 60.
         * `frames` must be less than or equal to `config`.fps_n / `config`.fps_d
         * These values are *NOT* automatically normalized.
         */
        class VideoTimeCode {
            static $gtype: GObject.GType<VideoTimeCode>;

            // Fields

            hours: number;
            minutes: number;
            seconds: number;
            frames: number;
            field_count: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    config: VideoTimeCodeConfig;
                    hours: number;
                    minutes: number;
                    seconds: number;
                    frames: number;
                    field_count: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](
                fps_n: number,
                fps_d: number,
                latest_daily_jam: GLib.DateTime,
                flags: VideoTimeCodeFlags,
                hours: number,
                minutes: number,
                seconds: number,
                frames: number,
                field_count: number,
            ): VideoTimeCode;

            static new_empty(): VideoTimeCode;

            static new_from_date_time(
                fps_n: number,
                fps_d: number,
                dt: GLib.DateTime,
                flags: VideoTimeCodeFlags,
                field_count: number,
            ): VideoTimeCode;

            static new_from_date_time_full(
                fps_n: number,
                fps_d: number,
                dt: GLib.DateTime,
                flags: VideoTimeCodeFlags,
                field_count: number,
            ): VideoTimeCode;

            static new_from_string(tc_str: string): VideoTimeCode;

            // Methods

            /**
             * Adds or subtracts `frames` amount of frames to `tc`. tc needs to
             * contain valid data, as verified by gst_video_time_code_is_valid().
             * @param frames How many frames to add or subtract
             */
            add_frames(frames: number): void;
            /**
             * This makes a component-wise addition of `tc_inter` to `tc`. For example,
             * adding ("01:02:03:04", "00:01:00:00") will return "01:03:03:04".
             * When it comes to drop-frame timecodes,
             * adding ("00:00:00;00", "00:01:00:00") will return "00:01:00;02"
             * because of drop-frame oddities. However,
             * adding ("00:09:00;02", "00:01:00:00") will return "00:10:00;00"
             * because this time we can have an exact minute.
             * @param tc_inter The #GstVideoTimeCodeInterval to add to @tc. The interval must contain valid values, except that for drop-frame timecode, it may also contain timecodes which would normally be dropped. These are then corrected to the next reasonable timecode.
             * @returns A new #GstVideoTimeCode with @tc_inter added or %NULL   if the interval can't be added.
             */
            add_interval(tc_inter: VideoTimeCodeInterval): VideoTimeCode | null;
            /**
             * Initializes `tc` with empty/zero/NULL values and frees any memory
             * it might currently use.
             */
            clear(): void;
            /**
             * Compares `tc1` and `tc2`. If both have latest daily jam information, it is
             * taken into account. Otherwise, it is assumed that the daily jam of both
             * `tc1` and `tc2` was at the same time. Both time codes must be valid.
             * @param tc2 another valid #GstVideoTimeCode
             * @returns 1 if @tc1 is after @tc2, -1 if @tc1 is before @tc2, 0 otherwise.
             */
            compare(tc2: VideoTimeCode): number;
            copy(): VideoTimeCode;
            frames_since_daily_jam(): number;
            /**
             * Frees `tc`.
             */
            free(): void;
            /**
             * Adds one frame to `tc`.
             */
            increment_frame(): void;
            /**
             * `field_count` is 0 for progressive, 1 or 2 for interlaced.
             * `latest_daiy_jam` reference is stolen from caller.
             *
             * Initializes `tc` with the given values.
             * The values are not checked for being in a valid range. To see if your
             * timecode actually has valid content, use gst_video_time_code_is_valid().
             * @param fps_n Numerator of the frame rate
             * @param fps_d Denominator of the frame rate
             * @param latest_daily_jam The latest daily jam of the #GstVideoTimeCode
             * @param flags #GstVideoTimeCodeFlags
             * @param hours the hours field of #GstVideoTimeCode
             * @param minutes the minutes field of #GstVideoTimeCode
             * @param seconds the seconds field of #GstVideoTimeCode
             * @param frames the frames field of #GstVideoTimeCode
             * @param field_count Interlaced video field count
             */
            init(
                fps_n: number,
                fps_d: number,
                latest_daily_jam: GLib.DateTime | null,
                flags: VideoTimeCodeFlags,
                hours: number,
                minutes: number,
                seconds: number,
                frames: number,
                field_count: number,
            ): void;
            /**
             * The resulting config->latest_daily_jam is set to midnight, and timecode is
             * set to the given time.
             *
             * Will assert on invalid parameters, use gst_video_time_code_init_from_date_time_full()
             * for being able to handle invalid parameters.
             * @param fps_n Numerator of the frame rate
             * @param fps_d Denominator of the frame rate
             * @param dt #GDateTime to convert
             * @param flags #GstVideoTimeCodeFlags
             * @param field_count Interlaced video field count
             */
            init_from_date_time(
                fps_n: number,
                fps_d: number,
                dt: GLib.DateTime,
                flags: VideoTimeCodeFlags,
                field_count: number,
            ): void;
            /**
             * The resulting config->latest_daily_jam is set to
             * midnight, and timecode is set to the given time.
             * @param fps_n Numerator of the frame rate
             * @param fps_d Denominator of the frame rate
             * @param dt #GDateTime to convert
             * @param flags #GstVideoTimeCodeFlags
             * @param field_count Interlaced video field count
             * @returns %TRUE if @tc could be correctly initialized to a valid timecode
             */
            init_from_date_time_full(
                fps_n: number,
                fps_d: number,
                dt: GLib.DateTime,
                flags: VideoTimeCodeFlags,
                field_count: number,
            ): boolean;
            is_valid(): boolean;
            nsec_since_daily_jam(): number;
            /**
             * The `tc`.config->latest_daily_jam is required to be non-NULL.
             * @returns the #GDateTime representation of @tc or %NULL if @tc   has no daily jam.
             */
            to_date_time(): GLib.DateTime | null;
            to_string(): string;
        }

        /**
         * Supported frame rates: 30000/1001, 60000/1001 (both with and without drop
         * frame), and integer frame rates e.g. 25/1, 30/1, 50/1, 60/1.
         *
         * The configuration of the time code.
         */
        class VideoTimeCodeConfig {
            static $gtype: GObject.GType<VideoTimeCodeConfig>;

            // Fields

            fps_n: number;
            fps_d: number;
            flags: VideoTimeCodeFlags;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A representation of a difference between two #GstVideoTimeCode instances.
         * Will not necessarily correspond to a real timecode (e.g. 00:00:10;00)
         */
        class VideoTimeCodeInterval {
            static $gtype: GObject.GType<VideoTimeCodeInterval>;

            // Fields

            hours: number;
            minutes: number;
            seconds: number;
            frames: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    hours: number;
                    minutes: number;
                    seconds: number;
                    frames: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval;

            static new_from_string(tc_inter_str: string): VideoTimeCodeInterval;

            // Methods

            /**
             * Initializes `tc` with empty/zero/NULL values.
             */
            clear(): void;
            copy(): VideoTimeCodeInterval;
            /**
             * Frees `tc`.
             */
            free(): void;
            /**
             * Initializes `tc` with the given values.
             * @param hours the hours field of #GstVideoTimeCodeInterval
             * @param minutes the minutes field of #GstVideoTimeCodeInterval
             * @param seconds the seconds field of #GstVideoTimeCodeInterval
             * @param frames the frames field of #GstVideoTimeCodeInterval
             */
            init(hours: number, minutes: number, seconds: number, frames: number): void;
        }

        /**
         * Extra buffer metadata describing the GstVideoTimeCode of the frame.
         *
         * Each frame is assumed to have its own timecode, i.e. they are not
         * automatically incremented/interpolated.
         */
        class VideoTimeCodeMeta {
            static $gtype: GObject.GType<VideoTimeCodeMeta>;

            // Fields

            tc: VideoTimeCode;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;
        }

        /**
         * An encoder for writing ancillary data to the
         * Vertical Blanking Interval lines of component signals.
         */
        class VideoVBIEncoder {
            static $gtype: GObject.GType<VideoVBIEncoder>;

            // Constructors

            constructor(format: VideoFormat, pixel_width: number);
            _init(...args: any[]): void;

            static ['new'](format: VideoFormat, pixel_width: number): VideoVBIEncoder;

            // Methods

            /**
             * Stores Video Ancillary data, according to SMPTE-291M specification.
             *
             * Note that the contents of the data are always read as 8bit data (i.e. do not contain
             * the parity check bits).
             * @param composite %TRUE if composite ADF should be created, component otherwise
             * @param DID The Data Identifier
             * @param SDID_block_number The Secondary Data Identifier (if type 2) or the Data                     Block Number (if type 1)
             * @param data The user data content of the Ancillary packet.    Does not contain the ADF, DID, SDID nor CS.
             * @returns %TRUE if enough space was left in the current line, %FALSE          otherwise.
             */
            add_ancillary(
                composite: boolean,
                DID: number,
                SDID_block_number: number,
                data: Uint8Array | string,
            ): boolean;
            copy(): VideoVBIEncoder;
            /**
             * Frees the `encoder`.
             */
            free(): void;
            write_line(data: number): void;
        }

        /**
         * A parser for detecting and extracting `GstVideoAncillary` data from
         * Vertical Blanking Interval lines of component signals.
         */
        class VideoVBIParser {
            static $gtype: GObject.GType<VideoVBIParser>;

            // Constructors

            constructor(format: VideoFormat, pixel_width: number);
            _init(...args: any[]): void;

            static ['new'](format: VideoFormat, pixel_width: number): VideoVBIParser;

            // Methods

            /**
             * Provide a new line of data to the `parser`. Call gst_video_vbi_parser_get_ancillary()
             * to get the Ancillary data that might be present on that line.
             * @param data The line of data to parse
             */
            add_line(data: Uint8Array | string): void;
            copy(): VideoVBIParser;
            /**
             * Frees the `parser`.
             */
            free(): void;
            /**
             * Parse the line provided previously by gst_video_vbi_parser_add_line().
             * @returns %GST_VIDEO_VBI_PARSER_RESULT_OK if ancillary data was found and @anc was filled. %GST_VIDEO_VBI_PARSER_RESULT_DONE if there wasn't any data.
             */
            get_ancillary(): [VideoVBIParserResult, VideoAncillary];
        }

        module ColorBalance {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface ColorBalanceNamespace {
            $gtype: GObject.GType<ColorBalance>;
            prototype: ColorBalance;
        }
        interface ColorBalance extends GObject.Object {
            // Methods

            /**
             * Get the #GstColorBalanceType of this implementation.
             * @returns A the #GstColorBalanceType.
             */
            get_balance_type(): ColorBalanceType;
            /**
             * Retrieve the current value of the indicated channel, between min_value
             * and max_value.
             *
             * See Also: The #GstColorBalanceChannel.min_value and
             *         #GstColorBalanceChannel.max_value members of the
             *         #GstColorBalanceChannel object.
             * @param channel A #GstColorBalanceChannel instance
             * @returns The current value of the channel.
             */
            get_value(channel: ColorBalanceChannel): number;
            /**
             * Retrieve a list of the available channels.
             * @returns A          GList containing pointers to #GstColorBalanceChannel          objects. The list is owned by the #GstColorBalance          instance and must not be freed.
             */
            list_channels(): ColorBalanceChannel[];
            /**
             * Sets the current value of the channel to the passed value, which must
             * be between min_value and max_value.
             *
             * See Also: The #GstColorBalanceChannel.min_value and
             *         #GstColorBalanceChannel.max_value members of the
             *         #GstColorBalanceChannel object.
             * @param channel A #GstColorBalanceChannel instance
             * @param value The new value for the channel.
             */
            set_value(channel: ColorBalanceChannel, value: number): void;
            /**
             * A helper function called by implementations of the GstColorBalance
             * interface. It fires the #GstColorBalance::value-changed signal on the
             * instance, and the #GstColorBalanceChannel::value-changed signal on the
             * channel object.
             * @param channel A #GstColorBalanceChannel whose value has changed
             * @param value The new value of the channel
             */
            value_changed(channel: ColorBalanceChannel, value: number): void;

            // Virtual methods

            /**
             * Get the #GstColorBalanceType of this implementation.
             */
            vfunc_get_balance_type(): ColorBalanceType;
            /**
             * Retrieve the current value of the indicated channel, between min_value
             * and max_value.
             *
             * See Also: The #GstColorBalanceChannel.min_value and
             *         #GstColorBalanceChannel.max_value members of the
             *         #GstColorBalanceChannel object.
             * @param channel A #GstColorBalanceChannel instance
             */
            vfunc_get_value(channel: ColorBalanceChannel): number;
            /**
             * Retrieve a list of the available channels.
             */
            vfunc_list_channels(): ColorBalanceChannel[];
            /**
             * Sets the current value of the channel to the passed value, which must
             * be between min_value and max_value.
             *
             * See Also: The #GstColorBalanceChannel.min_value and
             *         #GstColorBalanceChannel.max_value members of the
             *         #GstColorBalanceChannel object.
             * @param channel A #GstColorBalanceChannel instance
             * @param value The new value for the channel.
             */
            vfunc_set_value(channel: ColorBalanceChannel, value: number): void;
            /**
             * A helper function called by implementations of the GstColorBalance
             * interface. It fires the #GstColorBalance::value-changed signal on the
             * instance, and the #GstColorBalanceChannel::value-changed signal on the
             * channel object.
             * @param channel A #GstColorBalanceChannel whose value has changed
             * @param value The new value of the channel
             */
            vfunc_value_changed(channel: ColorBalanceChannel, value: number): void;
        }

        export const ColorBalance: ColorBalanceNamespace;

        module Navigation {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface NavigationNamespace {
            $gtype: GObject.GType<Navigation>;
            prototype: Navigation;

            /**
             * Try to retrieve x and y coordinates of a #GstNavigation event.
             * @param event The #GstEvent to inspect.
             */
            event_get_coordinates(event: Gst.Event): [boolean, number, number];
            /**
             * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
             * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
             * @param event A #GstEvent to inspect.
             */
            event_get_type(event: Gst.Event): NavigationEventType;
            /**
             * Create a new navigation event given navigation command..
             * @param command The navigation command to use.
             */
            event_new_command(command: NavigationCommand): Gst.Event;
            /**
             * Create a new navigation event for the given key press.
             * @param key A string identifying the key press.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_key_press(key: string, state: NavigationModifierType): Gst.Event;
            /**
             * Create a new navigation event for the given key release.
             * @param key A string identifying the released key.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_key_release(key: string, state: NavigationModifierType): Gst.Event;
            /**
             * Create a new navigation event for the given key mouse button press.
             * @param button The number of the pressed mouse button.
             * @param x The x coordinate of the mouse cursor.
             * @param y The y coordinate of the mouse cursor.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_mouse_button_press(
                button: number,
                x: number,
                y: number,
                state: NavigationModifierType,
            ): Gst.Event;
            /**
             * Create a new navigation event for the given key mouse button release.
             * @param button The number of the released mouse button.
             * @param x The x coordinate of the mouse cursor.
             * @param y The y coordinate of the mouse cursor.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_mouse_button_release(
                button: number,
                x: number,
                y: number,
                state: NavigationModifierType,
            ): Gst.Event;
            /**
             * Create a new navigation event for the new mouse location.
             * @param x The x coordinate of the mouse cursor.
             * @param y The y coordinate of the mouse cursor.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_mouse_move(x: number, y: number, state: NavigationModifierType): Gst.Event;
            /**
             * Create a new navigation event for the mouse scroll.
             * @param x The x coordinate of the mouse cursor.
             * @param y The y coordinate of the mouse cursor.
             * @param delta_x The x component of the scroll movement.
             * @param delta_y The y component of the scroll movement.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_mouse_scroll(
                x: number,
                y: number,
                delta_x: number,
                delta_y: number,
                state: NavigationModifierType,
            ): Gst.Event;
            /**
             * Create a new navigation event signalling that all currently active touch
             * points are cancelled and should be discarded. For example, under Wayland
             * this event might be sent when a swipe passes the threshold to be recognized
             * as a gesture by the compositor.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_touch_cancel(state: NavigationModifierType): Gst.Event;
            /**
             * Create a new navigation event for an added touch point.
             * @param identifier A number uniquely identifying this touch point. It must stay    unique to this touch point at least until an up event is sent for    the same identifier, or all touch points are cancelled.
             * @param x The x coordinate of the new touch point.
             * @param y The y coordinate of the new touch point.
             * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_touch_down(
                identifier: number,
                x: number,
                y: number,
                pressure: number,
                state: NavigationModifierType,
            ): Gst.Event;
            /**
             * Create a new navigation event signalling the end of a touch frame. Touch
             * frames signal that all previous down, motion and up events not followed by
             * another touch frame event already should be considered simultaneous.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_touch_frame(state: NavigationModifierType): Gst.Event;
            /**
             * Create a new navigation event for a moved touch point.
             * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous touch_start event.
             * @param x The x coordinate of the touch point.
             * @param y The y coordinate of the touch point.
             * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_touch_motion(
                identifier: number,
                x: number,
                y: number,
                pressure: number,
                state: NavigationModifierType,
            ): Gst.Event;
            /**
             * Create a new navigation event for a removed touch point.
             * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous down event, but can be reused    after sending this event.
             * @param x The x coordinate of the touch point.
             * @param y The y coordinate of the touch point.
             * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
             */
            event_new_touch_up(identifier: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
            /**
             * Inspect a #GstNavigation command event and retrieve the enum value of the
             * associated command.
             * @param event A #GstEvent to inspect.
             */
            event_parse_command(event: Gst.Event): [boolean, NavigationCommand | null];
            /**
             * Note: Modifier keys (as defined in #GstNavigationModifierType)
             * [press](GST_NAVIGATION_EVENT_KEY_PRESS) and
             * [release](GST_NAVIGATION_KEY_PRESS) events are generated even if those states are
             * present on all other related events
             * @param event A #GstEvent to inspect.
             */
            event_parse_key_event(event: Gst.Event): [boolean, string];
            event_parse_modifier_state(event: Gst.Event, state: NavigationModifierType): boolean;
            /**
             * Retrieve the details of either a #GstNavigation mouse button press event or
             * a mouse button release event. Determine which type the event is using
             * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
             * @param event A #GstEvent to inspect.
             */
            event_parse_mouse_button_event(event: Gst.Event): [boolean, number, number, number];
            /**
             * Inspect a #GstNavigation mouse movement event and extract the coordinates
             * of the event.
             * @param event A #GstEvent to inspect.
             */
            event_parse_mouse_move_event(event: Gst.Event): [boolean, number, number];
            /**
             * Inspect a #GstNavigation mouse scroll event and extract the coordinates
             * of the event.
             * @param event A #GstEvent to inspect.
             */
            event_parse_mouse_scroll_event(event: Gst.Event): [boolean, number, number, number, number];
            /**
             * Retrieve the details of a #GstNavigation touch-down or touch-motion event.
             * Determine which type the event is using gst_navigation_event_get_type()
             * to retrieve the #GstNavigationEventType.
             * @param event A #GstEvent to inspect.
             */
            event_parse_touch_event(event: Gst.Event): [boolean, number, number, number, number];
            /**
             * Retrieve the details of a #GstNavigation touch-up event.
             * @param event A #GstEvent to inspect.
             */
            event_parse_touch_up_event(event: Gst.Event): [boolean, number, number, number];
            /**
             * Try to set x and y coordinates on a #GstNavigation event. The event must
             * be writable.
             * @param event The #GstEvent to modify.
             * @param x The x coordinate to set.
             * @param y The y coordinate to set.
             */
            event_set_coordinates(event: Gst.Event, x: number, y: number): boolean;
            /**
             * Check a bus message to see if it is a #GstNavigation event, and return
             * the #GstNavigationMessageType identifying the type of the message if so.
             * @param message A #GstMessage to inspect.
             */
            message_get_type(message: Gst.Message): NavigationMessageType;
            /**
             * Creates a new #GstNavigation message with type
             * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
             * that the current angle, or current number of angles available in a
             * multiangle video has changed.
             * @param src A #GstObject to set as source of the new message.
             * @param cur_angle The currently selected angle.
             * @param n_angles The number of viewing angles now available.
             */
            message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message;
            /**
             * Creates a new #GstNavigation message with type
             * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
             * @param src A #GstObject to set as source of the new message.
             */
            message_new_commands_changed(src: Gst.Object): Gst.Message;
            /**
             * Creates a new #GstNavigation message with type
             * #GST_NAVIGATION_MESSAGE_EVENT.
             * @param src A #GstObject to set as source of the new message.
             * @param event A navigation #GstEvent
             */
            message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message;
            /**
             * Creates a new #GstNavigation message with type
             * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
             * @param src A #GstObject to set as source of the new message.
             * @param active %TRUE if the mouse has entered a clickable area of the display. %FALSE if it over a non-clickable area.
             */
            message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message;
            /**
             * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
             * and extract the `cur_angle` and `n_angles` parameters.
             * @param message A #GstMessage to inspect.
             */
            message_parse_angles_changed(message: Gst.Message): [boolean, number, number];
            /**
             * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
             * and extract contained #GstEvent. The caller must unref the `event` when done
             * with it.
             * @param message A #GstMessage to inspect.
             */
            message_parse_event(message: Gst.Message): [boolean, Gst.Event | null];
            /**
             * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
             * and extract the active/inactive flag. If the mouse over event is marked
             * active, it indicates that the mouse is over a clickable area.
             * @param message A #GstMessage to inspect.
             */
            message_parse_mouse_over(message: Gst.Message): [boolean, boolean];
            /**
             * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
             * it if it is a #GstNavigation query.
             * @param query The query to inspect
             */
            query_get_type(query: Gst.Query): NavigationQueryType;
            /**
             * Create a new #GstNavigation angles query. When executed, it will
             * query the pipeline for the set of currently available angles, which may be
             * greater than one in a multiangle video.
             */
            query_new_angles(): Gst.Query;
            /**
             * Create a new #GstNavigation commands query. When executed, it will
             * query the pipeline for the set of currently available commands.
             */
            query_new_commands(): Gst.Query;
            /**
             * Parse the current angle number in the #GstNavigation angles `query` into the
             * #guint pointed to by the `cur_angle` variable, and the number of available
             * angles into the #guint pointed to by the `n_angles` variable.
             * @param query a #GstQuery
             */
            query_parse_angles(query: Gst.Query): [boolean, number, number];
            /**
             * Parse the number of commands in the #GstNavigation commands `query`.
             * @param query a #GstQuery
             */
            query_parse_commands_length(query: Gst.Query): [boolean, number];
            /**
             * Parse the #GstNavigation command query and retrieve the `nth` command from
             * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
             * set to #GST_NAVIGATION_COMMAND_INVALID.
             * @param query a #GstQuery
             * @param nth the nth command to retrieve.
             */
            query_parse_commands_nth(query: Gst.Query, nth: number): [boolean, NavigationCommand | null];
            /**
             * Set the #GstNavigation angles query result field in `query`.
             * @param query a #GstQuery
             * @param cur_angle the current viewing angle to set.
             * @param n_angles the number of viewing angles to set.
             */
            query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
            /**
             * Set the #GstNavigation command query result fields in `query`. The number
             * of commands passed must be equal to `n_commands`.
             * @param query a #GstQuery
             * @param cmds An array containing @n_cmds     @GstNavigationCommand values.
             */
            query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void;
        }
        interface Navigation extends GObject.Object {
            // Methods

            /**
             * Sends the indicated command to the navigation interface.
             * @param command The command to issue
             */
            send_command(command: NavigationCommand): void;
            send_event(structure: Gst.Structure): void;
            /**
             * Sends an event to the navigation interface.
             * @param event The event to send
             */
            send_event_simple(event: Gst.Event): void;
            send_key_event(event: string, key: string): void;
            /**
             * Sends a mouse event to the navigation interface. Mouse event coordinates
             * are sent relative to the display space of the related output area. This is
             * usually the size in pixels of the window associated with the element
             * implementing the #GstNavigation interface.
             * @param event The type of mouse event, as a text string. Recognised values are "mouse-button-press", "mouse-button-release" and "mouse-move".
             * @param button The button number of the button being pressed or released. Pass 0 for mouse-move events.
             * @param x The x coordinate of the mouse event.
             * @param y The y coordinate of the mouse event.
             */
            send_mouse_event(event: string, button: number, x: number, y: number): void;
            /**
             * Sends a mouse scroll event to the navigation interface. Mouse event coordinates
             * are sent relative to the display space of the related output area. This is
             * usually the size in pixels of the window associated with the element
             * implementing the #GstNavigation interface.
             * @param x The x coordinate of the mouse event.
             * @param y The y coordinate of the mouse event.
             * @param delta_x The delta_x coordinate of the mouse event.
             * @param delta_y The delta_y coordinate of the mouse event.
             */
            send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void;

            // Virtual methods

            /**
             * sending a navigation event.
             * @param structure
             */
            vfunc_send_event(structure: Gst.Structure): void;
            /**
             * Sends an event to the navigation interface.
             * @param event The event to send
             */
            vfunc_send_event_simple(event: Gst.Event): void;
        }

        export const Navigation: NavigationNamespace;

        module VideoDirection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                video_direction: VideoOrientationMethod;
                videoDirection: VideoOrientationMethod;
            }
        }

        export interface VideoDirectionNamespace {
            $gtype: GObject.GType<VideoDirection>;
            prototype: VideoDirection;
        }
        interface VideoDirection extends GObject.Object {
            // Properties

            get video_direction(): VideoOrientationMethod;
            set video_direction(val: VideoOrientationMethod);
            get videoDirection(): VideoOrientationMethod;
            set videoDirection(val: VideoOrientationMethod);
        }

        export const VideoDirection: VideoDirectionNamespace;

        module VideoOrientation {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface VideoOrientationNamespace {
            $gtype: GObject.GType<VideoOrientation>;
            prototype: VideoOrientation;

            /**
             * Parses the "image-orientation" tag and transforms it into the
             * #GstVideoOrientationMethod enum.
             * @param taglist A #GstTagList
             */
            from_tag(taglist: Gst.TagList): [boolean, VideoOrientationMethod];
        }
        interface VideoOrientation extends GObject.Object {
            // Methods

            /**
             * Get the horizontal centering offset from the given object.
             * @returns %TRUE in case the element supports centering
             */
            get_hcenter(): [boolean, number];
            /**
             * Get the horizontal flipping state (%TRUE for flipped) from the given object.
             * @returns %TRUE in case the element supports flipping
             */
            get_hflip(): [boolean, boolean];
            /**
             * Get the vertical centering offset from the given object.
             * @returns %TRUE in case the element supports centering
             */
            get_vcenter(): [boolean, number];
            /**
             * Get the vertical flipping state (%TRUE for flipped) from the given object.
             * @returns %TRUE in case the element supports flipping
             */
            get_vflip(): [boolean, boolean];
            /**
             * Set the horizontal centering offset for the given object.
             * @param center centering offset
             * @returns %TRUE in case the element supports centering
             */
            set_hcenter(center: number): boolean;
            /**
             * Set the horizontal flipping state (%TRUE for flipped) for the given object.
             * @param flip use flipping
             * @returns %TRUE in case the element supports flipping
             */
            set_hflip(flip: boolean): boolean;
            /**
             * Set the vertical centering offset for the given object.
             * @param center centering offset
             * @returns %TRUE in case the element supports centering
             */
            set_vcenter(center: number): boolean;
            /**
             * Set the vertical flipping state (%TRUE for flipped) for the given object.
             * @param flip use flipping
             * @returns %TRUE in case the element supports flipping
             */
            set_vflip(flip: boolean): boolean;

            // Virtual methods

            /**
             * Get the horizontal centering offset from the given object.
             */
            vfunc_get_hcenter(): [boolean, number];
            /**
             * Get the horizontal flipping state (%TRUE for flipped) from the given object.
             */
            vfunc_get_hflip(): [boolean, boolean];
            /**
             * Get the vertical centering offset from the given object.
             */
            vfunc_get_vcenter(): [boolean, number];
            /**
             * Get the vertical flipping state (%TRUE for flipped) from the given object.
             */
            vfunc_get_vflip(): [boolean, boolean];
            /**
             * Set the horizontal centering offset for the given object.
             * @param center centering offset
             */
            vfunc_set_hcenter(center: number): boolean;
            /**
             * Set the horizontal flipping state (%TRUE for flipped) for the given object.
             * @param flip use flipping
             */
            vfunc_set_hflip(flip: boolean): boolean;
            /**
             * Set the vertical centering offset for the given object.
             * @param center centering offset
             */
            vfunc_set_vcenter(center: number): boolean;
            /**
             * Set the vertical flipping state (%TRUE for flipped) for the given object.
             * @param flip use flipping
             */
            vfunc_set_vflip(flip: boolean): boolean;
        }

        export const VideoOrientation: VideoOrientationNamespace;

        module VideoOverlay {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface VideoOverlayNamespace {
            $gtype: GObject.GType<VideoOverlay>;
            prototype: VideoOverlay;

            /**
             * This helper shall be used by classes implementing the #GstVideoOverlay
             * interface that want the render rectangle to be controllable using
             * properties. This helper will install "render-rectangle" property into the
             * class.
             * @param oclass The class on which the properties will be installed
             * @param last_prop_id The first free property ID to use
             */
            install_properties(oclass: typeof GObject.Object, last_prop_id: number): void;
            install_properties(...args: never[]): any;
            /**
             * This helper shall be used by classes implementing the #GstVideoOverlay
             * interface that want the render rectangle to be controllable using
             * properties. This helper will parse and set the render rectangle calling
             * gst_video_overlay_set_render_rectangle().
             * @param object The instance on which the property is set
             * @param last_prop_id The highest property ID.
             * @param property_id The property ID
             * @param value The #GValue to be set
             */
            set_property(
                object: GObject.Object,
                last_prop_id: number,
                property_id: number,
                value: GObject.Value | any,
            ): boolean;
        }
        interface VideoOverlay extends GObject.Object {
            // Methods

            /**
             * Tell an overlay that it has been exposed. This will redraw the current frame
             * in the drawable even if the pipeline is PAUSED.
             */
            expose(): void;
            /**
             * This will post a "have-window-handle" element message on the bus.
             *
             * This function should only be used by video overlay plugin developers.
             * @param handle a platform-specific handle referencing the window
             */
            got_window_handle(handle: never): void;
            /**
             * Tell an overlay that it should handle events from the window system. These
             * events are forwarded upstream as navigation events. In some window system,
             * events are not propagated in the window hierarchy if a client is listening
             * for them. This method allows you to disable events handling completely
             * from the #GstVideoOverlay.
             * @param handle_events a #gboolean indicating if events should be handled or not.
             */
            handle_events(handle_events: boolean): void;
            /**
             * This will post a "prepare-window-handle" element message on the bus
             * to give applications an opportunity to call
             * gst_video_overlay_set_window_handle() before a plugin creates its own
             * window.
             *
             * This function should only be used by video overlay plugin developers.
             */
            prepare_window_handle(): void;
            /**
             * Configure a subregion as a video target within the window set by
             * gst_video_overlay_set_window_handle(). If this is not used or not supported
             * the video will fill the area of the window set as the overlay to 100%.
             * By specifying the rectangle, the video can be overlayed to a specific region
             * of that window only. After setting the new rectangle one should call
             * gst_video_overlay_expose() to force a redraw. To unset the region pass -1 for
             * the `width` and `height` parameters.
             *
             * This method is needed for non fullscreen video overlay in UI toolkits that
             * do not support subwindows.
             * @param x the horizontal offset of the render area inside the window
             * @param y the vertical offset of the render area inside the window
             * @param width the width of the render area inside the window
             * @param height the height of the render area inside the window
             * @returns %FALSE if not supported by the sink.
             */
            set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
            /**
             * This will call the video overlay's set_window_handle method. You
             * should use this method to tell to an overlay to display video output to a
             * specific window (e.g. an XWindow on X11). Passing 0 as the  `handle` will
             * tell the overlay to stop using that window and create an internal one.
             * @param handle a handle referencing the window.
             */
            set_window_handle(handle: never): void;

            // Virtual methods

            /**
             * Tell an overlay that it has been exposed. This will redraw the current frame
             * in the drawable even if the pipeline is PAUSED.
             */
            vfunc_expose(): void;
            /**
             * Tell an overlay that it should handle events from the window system. These
             * events are forwarded upstream as navigation events. In some window system,
             * events are not propagated in the window hierarchy if a client is listening
             * for them. This method allows you to disable events handling completely
             * from the #GstVideoOverlay.
             * @param handle_events a #gboolean indicating if events should be handled or not.
             */
            vfunc_handle_events(handle_events: boolean): void;
            /**
             * virtual method to set the render rectangle
             * @param x
             * @param y
             * @param width
             * @param height
             */
            vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): void;
            /**
             * This will call the video overlay's set_window_handle method. You
             * should use this method to tell to an overlay to display video output to a
             * specific window (e.g. an XWindow on X11). Passing 0 as the  `handle` will
             * tell the overlay to stop using that window and create an internal one.
             * @param handle a handle referencing the window.
             */
            vfunc_set_window_handle(handle: never): void;
        }

        export const VideoOverlay: VideoOverlayNamespace;

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

    export default GstVideo;
}

declare module 'gi://GstVideo' {
    import GstVideo10 from 'gi://GstVideo?version=1.0';
    export default GstVideo10;
}
// END
