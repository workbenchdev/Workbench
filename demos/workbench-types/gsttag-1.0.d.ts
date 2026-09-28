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

declare module 'gi://GstTag?version=1.0' {
    // Module dependencies
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstTag {
        /**
         * GstTag-1.0
         */

        /**
         * Result values from the parse_tag virtual function.
         */

        /**
         * Result values from the parse_tag virtual function.
         */
        export namespace TagDemuxResult {
            export const $gtype: GObject.GType<TagDemuxResult>;
        }

        enum TagDemuxResult {
            /**
             * cannot parse tag, just skip it
             */
            BROKEN_TAG,
            /**
             * call again with less or more data
             */
            AGAIN,
            /**
             * parsed tag successfully
             */
            OK,
        }
        /**
         * Type of image contained in an image tag (specified as "image-type" field in
         * the info structure in the image's #GstSample)
         */

        /**
         * Type of image contained in an image tag (specified as "image-type" field in
         * the info structure in the image's #GstSample)
         */
        export namespace TagImageType {
            export const $gtype: GObject.GType<TagImageType>;
        }

        enum TagImageType {
            /**
             * No image type. Can be used to
             *      tell functions such as gst_tag_image_data_to_image_sample() that no
             *      image type should be set.
             */
            NONE,
            /**
             * Undefined/other image type
             */
            UNDEFINED,
            /**
             * Cover (front)
             */
            FRONT_COVER,
            /**
             * Cover (back)
             */
            BACK_COVER,
            /**
             * Leaflet page
             */
            LEAFLET_PAGE,
            /**
             * Medium (e.g. label side of CD)
             */
            MEDIUM,
            /**
             * Lead artist/lead performer/soloist
             */
            LEAD_ARTIST,
            /**
             * Artist/performer
             */
            ARTIST,
            /**
             * Conductor
             */
            CONDUCTOR,
            /**
             * Band/orchestra
             */
            BAND_ORCHESTRA,
            /**
             * Composer
             */
            COMPOSER,
            /**
             * Lyricist/text writer
             */
            LYRICIST,
            /**
             * Recording location
             */
            RECORDING_LOCATION,
            /**
             * During recording
             */
            DURING_RECORDING,
            /**
             * During performance
             */
            DURING_PERFORMANCE,
            /**
             * Movie/video screen capture
             */
            VIDEO_CAPTURE,
            /**
             * A fish as funny as the ID3v2 spec
             */
            FISH,
            /**
             * Illustration
             */
            ILLUSTRATION,
            /**
             * Band/artist logotype
             */
            BAND_ARTIST_LOGO,
            /**
             * Publisher/studio logotype
             */
            PUBLISHER_STUDIO_LOGO,
        }
        /**
         * AcoustID Fingerprint (Chromaprint)
         */
        const TAG_ACOUSTID_FINGERPRINT: string;
        /**
         * AcoustID Identifier
         */
        const TAG_ACOUSTID_ID: string;
        /**
         * Direction of contrast processing applied when capturing an image. (string)
         *
         * The allowed values are:
         *  "normal"
         *  "soft"
         *  "hard"
         */
        const TAG_CAPTURING_CONTRAST: string;
        /**
         * Digital zoom ratio used when capturing an image. (double)
         */
        const TAG_CAPTURING_DIGITAL_ZOOM_RATIO: string;
        /**
         * Exposure compensation using when capturing an image in EV. (double)
         */
        const TAG_CAPTURING_EXPOSURE_COMPENSATION: string;
        /**
         * Exposure mode used when capturing an image. (string)
         *
         * The allowed values are:
         *   "auto-exposure"
         *   "manual-exposure"
         *   "auto-bracket"
         */
        const TAG_CAPTURING_EXPOSURE_MODE: string;
        /**
         * Type of exposure control used when capturing an image. (string)
         *
         * The allowed values are:
         *   "undefined"
         *   "manual"
         *   "normal" - automatically controlled
         *   "aperture-priority" - user selects aperture value
         *   "shutter-priority" - user selects shutter speed
         *   "creative" - biased towards depth of field
         *   "action" - biased towards fast shutter speed
         *   "portrait" - closeup, leaving background out of focus
         *   "landscape" - landscape photos, background in focus
         */
        const TAG_CAPTURING_EXPOSURE_PROGRAM: string;
        /**
         * If flash was fired during the capture of an image. (boolean)
         *
         * Note that if this tag isn't present, it should not be assumed that
         * the flash did not fire. It should be treated as unknown.
         */
        const TAG_CAPTURING_FLASH_FIRED: string;
        /**
         * The flash mode selected during the capture of an image. (string)
         *
         * The allowed values are:
         *  "auto"
         *  "always"
         *  "never"
         */
        const TAG_CAPTURING_FLASH_MODE: string;
        /**
         * Focal length used when capturing an image, in mm. (double)
         */
        const TAG_CAPTURING_FOCAL_LENGTH: string;
        /**
         * 35 mm equivalent focal length used when capturing an image, in mm. (double)
         */
        const TAG_CAPTURING_FOCAL_LENGTH_35_MM: string;
        /**
         * Focal ratio (f-number) used when capturing an image. (double)
         *
         * The value stored is the denominator of the focal ratio (f-number).
         * For example, if this tag value is 2, the focal ratio is f/2.
         */
        const TAG_CAPTURING_FOCAL_RATIO: string;
        /**
         * Gain adjustment applied to an image. (string)
         *
         * The allowed values are:
         *   "none"
         *   "low-gain-up"
         *   "high-gain-up"
         *   "low-gain-down"
         *   "high-gain-down"
         */
        const TAG_CAPTURING_GAIN_ADJUSTMENT: string;
        /**
         * ISO speed used when capturing an image. (integer)
         */
        const TAG_CAPTURING_ISO_SPEED: string;
        /**
         * Defines the way a camera determines the exposure. (string)
         *
         * The allowed values are:
         *   "unknown"
         *   "average"
         *   "center-weighted-average"
         *   "spot"
         *   "multi-spot"
         *   "pattern"
         *   "partial"
         *   "other"
         */
        const TAG_CAPTURING_METERING_MODE: string;
        /**
         * Direction of saturation processing applied when capturing an image. (string)
         *
         * The allowed values are:
         *  "normal"
         *  "low-saturation"
         *  "high-saturation"
         */
        const TAG_CAPTURING_SATURATION: string;
        /**
         * Scene mode used when capturing an image. (string)
         *
         * The allowed values are:
         *   "standard"
         *   "landscape"
         *   "portrait"
         *   "night-scene"
         */
        const TAG_CAPTURING_SCENE_CAPTURE_TYPE: string;
        /**
         * Direction of sharpness processing applied when capturing an image. (string)
         *
         * The allowed values are:
         *  "normal"
         *  "soft"
         *  "hard"
         */
        const TAG_CAPTURING_SHARPNESS: string;
        /**
         * Shutter speed used when capturing an image, in seconds. (fraction)
         */
        const TAG_CAPTURING_SHUTTER_SPEED: string;
        /**
         * Indicates the source of capture. The device/medium used to do the
         * capture. (string)
         *
         * Allowed values are:
         *   "dsc" (= digital still camera)
         *   "transparent-scanner"
         *   "reflex-scanner"
         *   "other"
         */
        const TAG_CAPTURING_SOURCE: string;
        /**
         * White balance mode used when capturing an image. (string)
         *
         * The allowed values are:
         *   "auto"
         *   "manual"
         *   "daylight"
         *   "cloudy"
         *   "tungsten"
         *   "fluorescent"
         *   "fluorescent h" (newer daylight-calibrated fluorescents)
         *   "flash"
         */
        const TAG_CAPTURING_WHITE_BALANCE: string;
        /**
         * CDDB disc id in its short form (e.g. 'aa063d0f')
         */
        const TAG_CDDA_CDDB_DISCID: string;
        /**
         * CDDB disc id including all details
         */
        const TAG_CDDA_CDDB_DISCID_FULL: string;
        /**
         * Musicbrainz disc id (e.g. 'ahg7JUcfR3vCYBphSDIogOOWrr0-')
         */
        const TAG_CDDA_MUSICBRAINZ_DISCID: string;
        /**
         * Musicbrainz disc id details
         */
        const TAG_CDDA_MUSICBRAINZ_DISCID_FULL: string;
        /**
         * Annodex CMML clip element tag
         */
        const TAG_CMML_CLIP: string;
        /**
         * Annodex CMML head element tag
         */
        const TAG_CMML_HEAD: string;
        /**
         * Annodex CMML stream element tag
         */
        const TAG_CMML_STREAM: string;
        /**
         * ID3V2 header size considered minimum input for some functions such as
         * gst_tag_list_from_id3v2_tag() and gst_tag_get_id3v2_tag_size() for example.
         */
        const TAG_ID3V2_HEADER_SIZE: number;
        /**
         * Media (image/video) intended horizontal pixel density in ppi. (double)
         */
        const TAG_IMAGE_HORIZONTAL_PPI: string;
        /**
         * Media (image/video) intended vertical pixel density in ppi. (double)
         */
        const TAG_IMAGE_VERTICAL_PPI: string;
        /**
         * Musical key in which the sound starts. It is represented as a string
         * with a maximum length of three characters. The ground keys are
         * represented with "A","B","C","D","E", "F" and "G" and halfkeys
         * represented with "b" and "#". Minor is represented as "m" (e.g. "Dbm").
         * Off key is represented with an "o" only.
         * This notation might be extended in the future to support non-minor/major
         * keys.
         */
        const TAG_MUSICAL_KEY: string;
        /**
         * MusicBrainz album artist ID
         */
        const TAG_MUSICBRAINZ_ALBUMARTISTID: string;
        /**
         * MusicBrainz album ID
         */
        const TAG_MUSICBRAINZ_ALBUMID: string;
        /**
         * MusicBrainz artist ID
         */
        const TAG_MUSICBRAINZ_ARTISTID: string;
        /**
         * MusicBrainz Release Group ID
         */
        const TAG_MUSICBRAINZ_RELEASEGROUPID: string;
        /**
         * MusicBrainz Release Track ID
         */
        const TAG_MUSICBRAINZ_RELEASETRACKID: string;
        /**
         * MusicBrainz track ID
         */
        const TAG_MUSICBRAINZ_TRACKID: string;
        /**
         * MusicBrainz track TRM ID
         */
        const TAG_MUSICBRAINZ_TRMID: string;
        /**
         * Check if a given string contains a known ISO 639 language code.
         *
         * This is useful in situations where it's not clear whether a given
         * string is a language code (which should be put into a #GST_TAG_LANGUAGE_CODE
         * tag) or a free-form language name descriptor (which should be put into a
         * #GST_TAG_LANGUAGE_NAME tag instead).
         * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
         * @returns TRUE if the two- or three-letter language code in @lang_code     is a valid ISO-639 language code.
         */
        function tag_check_language_code(lang_code: string): boolean;
        /**
         * Convenience function to read a string with unknown character encoding. If
         * the string is already in UTF-8 encoding, it will be returned right away.
         * If not it tries to detect byte-order-mark for UTF-16/32 cases and use that.
         * Otherwise, the environment will be searched for a number of environment
         * variables (whose names are specified in the NULL-terminated string array
         * `env_vars)` containing a list of character encodings to try/use. If none
         * are specified, the current locale will be tried. If that also doesn't work,
         * WINDOWS-1252/ISO-8859-1 is assumed (which will almost always succeed).
         * @param data string data
         * @param env_vars a NULL-terminated string array of environment variable names, or NULL
         * @returns a newly-allocated string in UTF-8 encoding, or NULL
         */
        function tag_freeform_string_to_utf8(data: number[], env_vars: string[]): string | null;
        /**
         * Looks up the GStreamer tag for a ID3v2 tag.
         * @param id3_tag ID3v2 tag to convert to GStreamer tag
         * @returns The corresponding GStreamer tag or NULL if none exists.
         */
        function tag_from_id3_tag(id3_tag: string): string | null;
        /**
         * Looks up the GStreamer tag for an ID3v2 user tag (e.g. description in
         * TXXX frame or owner in UFID frame).
         * @param type the type of ID3v2 user tag (e.g. "TXXX" or "UDIF")
         * @param id3_user_tag ID3v2 user tag to convert to GStreamer tag
         * @returns The corresponding GStreamer tag or NULL if none exists.
         */
        function tag_from_id3_user_tag(type: string, id3_user_tag: string): string | null;
        /**
         * Looks up the GStreamer tag for a vorbiscomment tag.
         * @param vorbis_tag vorbiscomment tag to convert to GStreamer tag
         * @returns The corresponding GStreamer tag or NULL if none exists.
         */
        function tag_from_vorbis_tag(vorbis_tag: string): string | null;
        /**
         * Determines size of an ID3v2 tag on buffer containing at least ID3v2 header,
         * i.e. at least #GST_TAG_ID3V2_HEADER_SIZE (10) bytes;
         * @param buffer buffer holding ID3v2 tag (or at least the start of one)
         * @returns Size of tag, or 0 if header is invalid or too small.
         */
        function tag_get_id3v2_tag_size(buffer: Gst.Buffer): number;
        /**
         * Returns two-letter ISO-639-1 language code given a three-letter ISO-639-2
         * language code or two-letter ISO-639-1 language code (both are accepted for
         * convenience).
         *
         * Language codes are case-sensitive and expected to be lower case.
         * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
         * @returns two-letter ISO-639-1 language code string that maps to @lang_code,     or NULL if no mapping is known. The returned string must not be     modified or freed.
         */
        function tag_get_language_code_iso_639_1(lang_code: string): string | null;
        /**
         * Returns three-letter ISO-639-2 "bibliographic" language code given a
         * two-letter ISO-639-1 language code or a three-letter ISO-639-2 language
         * code (both are accepted for convenience).
         *
         * The "bibliographic" code is derived from the English name of the language
         * (e.g. "ger" for German instead of "de" or "deu"). In most scenarios, the
         * "terminological" codes are preferred.
         *
         * Language codes are case-sensitive and expected to be lower case.
         * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
         * @returns three-letter ISO-639-2 language code string that maps to @lang_code,     or NULL if no mapping is known. The returned string must not be     modified or freed.
         */
        function tag_get_language_code_iso_639_2B(lang_code: string): string | null;
        /**
         * Returns three-letter ISO-639-2 "terminological" language code given a
         * two-letter ISO-639-1 language code or a three-letter ISO-639-2 language
         * code (both are accepted for convenience).
         *
         * The "terminological" code is derived from the local name of the language
         * (e.g. "deu" for German instead of "ger"). In most scenarios, the
         * "terminological" codes are preferred over the "bibliographic" ones.
         *
         * Language codes are case-sensitive and expected to be lower case.
         * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
         * @returns three-letter ISO-639-2 language code string that maps to @lang_code,     or NULL if no mapping is known. The returned string must not be     modified or freed.
         */
        function tag_get_language_code_iso_639_2T(lang_code: string): string | null;
        /**
         * Returns a list of known language codes (in form of two-letter ISO-639-1
         * codes). This is useful for UIs to build a list of available languages for
         * tagging purposes (e.g. to tag an audio track appropriately in a video or
         * audio editor).
         * @returns NULL-terminated string array with two-letter     language codes. Free with g_strfreev() when no longer needed.
         */
        function tag_get_language_codes(): string[];
        /**
         * Returns the name of the language given an ISO-639 language code as
         * found in a GST_TAG_LANGUAGE_CODE tag. The name will be translated
         * according to the current locale (if the library was built against the
         * iso-codes package, otherwise the English name will be returned).
         *
         * Language codes are case-sensitive and expected to be lower case.
         * @param language_code two or three-letter ISO-639 language code
         * @returns language name in UTF-8 format, or NULL if @language_code could     not be mapped to a language name. The returned string must not be     modified and does not need to freed; it will stay valid until the     application is terminated.
         */
        function tag_get_language_name(language_code: string): string | null;
        /**
         * Get the description of a license, which is a translated description
         * of the license's main features.
         * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
         * @returns the description of the license, or NULL if the license is unknown    or a description is not available.
         */
        function tag_get_license_description(license_ref: string): string | null;
        /**
         * Get the flags of a license, which describe most of the features of
         * a license in their most general form.
         * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
         * @returns the flags of the license, or 0 if the license is unknown
         */
        function tag_get_license_flags(license_ref: string): TagLicenseFlags;
        /**
         * Get the jurisdiction code of a license. This is usually a two-letter
         * ISO 3166-1 alpha-2 code, but there is also the special case of Scotland,
         * for which no code exists and which is thus represented as "scotland".
         *
         * Known jurisdictions: ar, at, au, be, bg, br, ca, ch, cl, cn, co, de,
         * dk, es, fi, fr, hr, hu, il, in, it, jp, kr, mk, mt, mx, my, nl, pe, pl,
         * pt, scotland, se, si, tw, uk, us, za.
         * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
         * @returns the jurisdiction code of the license, or NULL if the license is    unknown or is not specific to a particular jurisdiction.
         */
        function tag_get_license_jurisdiction(license_ref: string): string | null;
        /**
         * Get the nick name of a license, which is a short (untranslated) string
         * such as e.g. "CC BY-NC-ND 2.0 UK".
         * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
         * @returns the nick name of the license, or NULL if the license is unknown
         */
        function tag_get_license_nick(license_ref: string): string | null;
        /**
         * Get the title of a license, which is a short translated description
         * of the license's features (generally not very pretty though).
         * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
         * @returns the title of the license, or NULL if the license is unknown or    no title is available.
         */
        function tag_get_license_title(license_ref: string): string | null;
        /**
         * Get the version of a license.
         * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
         * @returns the version of the license, or NULL if the license is not known or    has no version
         */
        function tag_get_license_version(license_ref: string): string | null;
        /**
         * Returns a list of known license references (in form of URIs). This is
         * useful for UIs to build a list of available licenses for tagging purposes
         * (e.g. to tag an audio track appropriately in a video or audio editor, or
         * an image in a camera application).
         * @returns NULL-terminated array of license strings. Free     with g_strfreev() when no longer needed.
         */
        function tag_get_licenses(): string[];
        /**
         * Gets the number of ID3v1 genres that can be identified. Winamp genres are
         * included.
         * @returns the number of ID3v1 genres that can be identified
         */
        function tag_id3_genre_count(): number;
        /**
         * Gets the ID3v1 genre name for a given ID.
         * @param id ID of genre to query
         * @returns the genre or NULL if no genre is associated with that ID.
         */
        function tag_id3_genre_get(id: number): string | null;
        /**
         * Helper function for tag-reading plugins to create a #GstSample suitable to
         * add to a #GstTagList as an image tag (such as #GST_TAG_IMAGE or
         * #GST_TAG_PREVIEW_IMAGE) from the encoded image data and an (optional) image
         * type.
         *
         * Background: cover art and other images in tags are usually stored as a
         * blob of binary image data, often accompanied by a MIME type or some other
         * content type string (e.g. 'png', 'jpeg', 'jpg'). Sometimes there is also an
         * 'image type' to indicate what kind of image this is (e.g. front cover,
         * back cover, artist, etc.). The image data may also be an URI to the image
         * rather than the image itself.
         *
         * In GStreamer, image tags are #GstSample<!-- -->s containing the raw image
         * data, with the sample caps describing the content type of the image
         * (e.g. image/jpeg, image/png, text/uri-list). The sample info may contain
         * an additional 'image-type' field of #GstTagImageType to describe
         * the type of image (front cover, back cover etc.). #GST_TAG_PREVIEW_IMAGE
         * tags should not carry an image type, their type is already indicated via
         * the special tag name.
         *
         * This function will do various checks and typefind the encoded image
         * data (we can't trust the declared mime type).
         * @param image_data the (encoded) image
         * @param image_type type of the image, or #GST_TAG_IMAGE_TYPE_UNDEFINED. Pass     #GST_TAG_IMAGE_TYPE_NONE if no image type should be set at all (e.g.     for preview images)
         * @returns a newly-allocated image sample for use in tag lists, or NULL
         */
        function tag_image_data_to_image_sample(
            image_data: Uint8Array | string,
            image_type: TagImageType,
        ): Gst.Sample | null;
        /**
         * Adds an image from an ID3 APIC frame (or similar, such as used in FLAC)
         * to the given tag list. Also see gst_tag_image_data_to_image_sample() for
         * more information on image tags in GStreamer.
         * @param tag_list a tag list
         * @param image_data the (encoded) image
         * @param id3_picture_type picture type as per the ID3 (v2.4.0) specification for    the APIC frame (0 = unknown/other)
         * @returns %TRUE if the image was processed, otherwise %FALSE
         */
        function tag_list_add_id3_image(
            tag_list: Gst.TagList,
            image_data: Uint8Array | string,
            id3_picture_type: number,
        ): boolean;
        /**
         * Parses the IFD and IFD tags data contained in the buffer and puts it
         * on a taglist. The base_offset is used to subtract from the offset in
         * the tag entries and be able to get the offset relative to the buffer
         * start
         * @param buffer The exif buffer
         * @param byte_order byte order of the data
         * @param base_offset Offset from the tiff header to this buffer
         * @returns The parsed taglist
         */
        function tag_list_from_exif_buffer(buffer: Gst.Buffer, byte_order: number, base_offset: number): Gst.TagList;
        /**
         * Parses the exif tags starting with a tiff header structure.
         * @param buffer The exif buffer
         * @returns The taglist
         */
        function tag_list_from_exif_buffer_with_tiff_header(buffer: Gst.Buffer): Gst.TagList;
        /**
         * Creates a new tag list that contains the information parsed out of a
         * ID3 tag.
         * @param buffer buffer to convert
         * @returns A new #GstTagList with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
         */
        function tag_list_from_id3v2_tag(buffer: Gst.Buffer): Gst.TagList | null;
        /**
         * Creates a new tag list that contains the information parsed out of a
         * vorbiscomment packet.
         * @param data data to convert
         * @param id_data identification data at start of stream
         * @returns A new #GstTagList with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
         */
        function tag_list_from_vorbiscomment(
            data: Uint8Array | string,
            id_data: Uint8Array | string,
        ): [Gst.TagList | null, string];
        /**
         * Creates a new tag list that contains the information parsed out of a
         * vorbiscomment packet.
         * @param buffer buffer to convert
         * @param id_data identification data at start of stream
         * @returns A new #GstTagList with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
         */
        function tag_list_from_vorbiscomment_buffer(
            buffer: Gst.Buffer,
            id_data: Uint8Array | string,
        ): [Gst.TagList | null, string];
        /**
         * Parse a xmp packet into a taglist.
         * @param buffer buffer
         * @returns new taglist or %NULL, free the list when done
         */
        function tag_list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList | null;
        /**
         * Parses the data containing an ID3v1 tag and returns a #GstTagList from the
         * parsed data.
         * @param data 128 bytes of data containing the ID3v1 tag
         * @returns A new tag list or NULL if the data was not an ID3v1 tag.
         */
        function tag_list_new_from_id3v1(data: Uint8Array | string): Gst.TagList | null;
        /**
         * Formats the tags in taglist on exif format. The resulting buffer contains
         * the tags IFD and is followed by the data pointed by the tag entries.
         * @param taglist The taglist
         * @param byte_order byte order used in writing (G_LITTLE_ENDIAN or G_BIG_ENDIAN)
         * @param base_offset Offset from the tiff header first byte
         * @returns A GstBuffer containing the tag entries followed by the tag data
         */
        function tag_list_to_exif_buffer(taglist: Gst.TagList, byte_order: number, base_offset: number): Gst.Buffer;
        /**
         * Formats the tags in taglist into exif structure, a tiff header
         * is put in the beginning of the buffer.
         * @param taglist The taglist
         * @returns A GstBuffer containing the data
         */
        function tag_list_to_exif_buffer_with_tiff_header(taglist: Gst.TagList): Gst.Buffer;
        /**
         * Creates a new vorbiscomment buffer from a tag list.
         * @param list tag list to convert
         * @param id_data identification data at start of stream
         * @param vendor_string string that describes the vendor string or NULL
         * @returns A new #GstBuffer containing a vorbiscomment buffer with all tags          that could be converted from the given tag list.
         */
        function tag_list_to_vorbiscomment_buffer(
            list: Gst.TagList,
            id_data: Uint8Array | string,
            vendor_string?: string | null,
        ): Gst.Buffer;
        /**
         * Formats a taglist as a xmp packet using only the selected
         * schemas. An empty list (%NULL) means that all schemas should
         * be used
         * @param list tags
         * @param read_only does the container forbid inplace editing
         * @param schemas %NULL terminated array of schemas to be used on serialization
         * @returns new buffer or %NULL, unref the buffer when done
         */
        function tag_list_to_xmp_buffer(list: Gst.TagList, read_only: boolean, schemas: string[]): Gst.Buffer | null;
        /**
         * Convenience function to parse a GST_TAG_EXTENDED_COMMENT string and
         * separate it into its components.
         *
         * If successful, `key,` `lang` and/or `value` will be set to newly allocated
         * strings that you need to free with g_free() when done. `key` and `lang`
         * may also be set to NULL by this function if there is no key or no language
         * code in the extended comment string.
         * @param ext_comment an extended comment string, see #GST_TAG_EXTENDED_COMMENT
         * @param fail_if_no_key whether to fail if strings are not in key=value form
         * @returns TRUE if the string could be parsed, otherwise FALSE
         */
        function tag_parse_extended_comment(
            ext_comment: string,
            fail_if_no_key: boolean,
        ): [boolean, string, string, string];
        /**
         * Registers additional musicbrainz-specific tags with the GStreamer tag
         * system. Plugins and applications that use these tags should call this
         * function before using them. Can be called multiple times.
         */
        function tag_register_musicbrainz_tags(): void;
        /**
         * Looks up the ID3v2 tag for a GStreamer tag.
         * @param gst_tag GStreamer tag to convert to vorbiscomment tag
         * @returns The corresponding ID3v2 tag or NULL if none exists.
         */
        function tag_to_id3_tag(gst_tag: string): string | null;
        /**
         * Creates a new tag list that contains the information parsed out of a
         * vorbiscomment packet.
         * @param list a #GstTagList
         * @param tag a GStreamer tag identifier, such as #GST_TAG_ARTIST
         * @returns A #GList of newly-allocated     key=value strings. Free with g_list_foreach (list, (GFunc) g_free, NULL)     plus g_list_free (list)
         */
        function tag_to_vorbis_comments(list: Gst.TagList, tag: string): string[];
        /**
         * Looks up the vorbiscomment tag for a GStreamer tag.
         * @param gst_tag GStreamer tag to convert to vorbiscomment tag
         * @returns The corresponding vorbiscomment tag or NULL if none exists.
         */
        function tag_to_vorbis_tag(gst_tag: string): string | null;
        /**
         * Gets the list of supported schemas in the xmp lib
         * @returns a %NULL terminated array of strings with the     schema names
         */
        function tag_xmp_list_schemas(): string[];
        /**
         * Convenience function using gst_tag_from_vorbis_tag(), parsing
         * a vorbis comment string into the right type and adding it to the
         * given taglist `list`.
         *
         * Unknown vorbiscomment tags will be added to the tag list in form
         * of a #GST_TAG_EXTENDED_COMMENT.
         * @param list a #GstTagList
         * @param tag a vorbiscomment tag string (key in key=value), must be valid UTF-8
         * @param value a vorbiscomment value string (value in key=value), must be valid UTF-8
         */
        function vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;
        /**
         * See http://creativecommons.org/ns for more information.
         */

        /**
         * See http://creativecommons.org/ns for more information.
         */
        export namespace TagLicenseFlags {
            export const $gtype: GObject.GType<TagLicenseFlags>;
        }

        enum TagLicenseFlags {
            /**
             * making multiple copies
             *     is allowed
             */
            PERMITS_REPRODUCTION,
            /**
             * distribution, public display
             *     and public performance are allowed
             */
            PERMITS_DISTRIBUTION,
            /**
             * distribution of derivative
             *     works is allowed
             */
            PERMITS_DERIVATIVE_WORKS,
            /**
             * commercial derivatives are allowed,
             *     but only non-commercial distribution is allowed
             */
            PERMITS_SHARING,
            /**
             * copyright and license notices
             *     must be kept intact
             */
            REQUIRES_NOTICE,
            /**
             * credit must be given to
             *     copyright holder and/or author
             */
            REQUIRES_ATTRIBUTION,
            /**
             * derivative works must be
             *     licensed under the same terms or compatible terms as the original work
             */
            REQUIRES_SHARE_ALIKE,
            /**
             * source code (the preferred
             *     form for making modifications) must be provided when exercising some
             *     rights granted by the license
             */
            REQUIRES_SOURCE_CODE,
            /**
             * derivative and combined works
             *     must be licensed under specified terms, similar to those of the original
             *     work
             */
            REQUIRES_COPYLEFT,
            /**
             * derivative works must be
             *     licensed under specified terms, with at least the same conditions as
             *     the original work; combinations with the work may be licensed under
             *     different terms
             */
            REQUIRES_LESSER_COPYLEFT,
            /**
             * exercising rights for
             *     commercial purposes is prohibited
             */
            PROHIBITS_COMMERCIAL_USE,
            /**
             * use in a
             *     non-developing country is prohibited
             */
            PROHIBITS_HIGH_INCOME_NATION_USE,
            /**
             * this license was created
             *     by the Creative Commons project
             */
            CREATIVE_COMMONS_LICENSE,
            /**
             * this license was
             *     created by the Free Software Foundation (FSF)
             */
            FREE_SOFTWARE_FOUNDATION_LICENSE,
        }
        module TagDemux {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps {}
        }

        /**
         * Provides a base class for demuxing tags at the beginning or end of a
         * stream and handles things like typefinding, querying, seeking, and
         * different modes of operation (chain-based, pull_range-based, and providing
         * downstream elements with random access if upstream supports that). The tag
         * is stripped from the output, and all offsets are adjusted for the tag
         * sizes, so that to the downstream element the stream will appear as if
         * there was no tag at all. Also, once the tag has been parsed, GstTagDemux
         * will try to determine the media type of the resulting stream and add a
         * source pad with the appropriate caps in order to facilitate auto-plugging.
         *
         * ## Deriving from GstTagDemux
         *
         * Subclasses have to do four things:
         *
         *  * In their base init function, they must add a pad template for the sink
         *    pad to the element class, describing the media type they can parse in
         *    the caps of the pad template.
         *  * In their class init function, they must override
         *    GST_TAG_DEMUX_CLASS(demux_klass)->identify_tag with their own identify
         *    function.
         *  * In their class init function, they must override
         *  GST_TAG_DEMUX_CLASS(demux_klass)->parse_tag with their own parse
         *  function.
         *  * In their class init function, they must also set
         *    GST_TAG_DEMUX_CLASS(demux_klass)->min_start_size and/or
         *  GST_TAG_DEMUX_CLASS(demux_klass)->min_end_size to the minimum size required
         *  for the identify function to decide whether the stream has a supported tag
         *  or not. A class parsing ID3v1 tags, for example, would set min_end_size to
         *  128 bytes.
         */
        abstract class TagDemux extends Gst.Element {
            static $gtype: GObject.GType<TagDemux>;

            // Fields

            element: Gst.Element;

            // Constructors

            constructor(properties?: Partial<TagDemux.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * identify tag and determine the size required to parse the
             * tag. Buffer may be larger than the specified minimum size.
             * Subclassed MUST override this vfunc in their class_init function.
             * @param buffer
             * @param start_tag
             * @param tag_size
             */
            vfunc_identify_tag(buffer: Gst.Buffer, start_tag: boolean, tag_size: number): boolean;
            /**
             * merge start and end tags. Subclasses may want to override this
             * vfunc to allow prioritising of start or end tag according to user
             * preference.  Note that both start_tags and end_tags may be NULL. By default
             * start tags are preferred over end tags.
             * @param start_tags
             * @param end_tags
             */
            vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList;
            /**
             * parse the tag. Buffer will be exactly of the size determined by
             * the identify_tag vfunc before. The parse_tag vfunc may change the size
             * stored in *tag_size and return GST_TAG_DEMUX_RESULT_AGAIN to request a
             * larger or smaller buffer. It is also permitted to adjust the tag_size to a
             * smaller value and then return GST_TAG_DEMUX_RESULT_OK in one go.
             * Subclassed MUST override the parse_tag vfunc in their class_init function.
             * @param buffer
             * @param start_tag
             * @param tag_size
             * @param tags
             */
            vfunc_parse_tag(
                buffer: Gst.Buffer,
                start_tag: boolean,
                tag_size: number,
                tags: Gst.TagList,
            ): TagDemuxResult;
        }

        module TagMux {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.TagSetter.ConstructorProps {}
        }

        /**
         * Provides a base class for adding tags at the beginning or end of a
         * stream.
         *
         * ## Deriving from GstTagMux
         *
         * Subclasses have to do the following things:
         *
         *  * In their base init function, they must add pad templates for the sink
         *    pad and the source pad to the element class, describing the media type
         *    they accept and output in the caps of the pad template.
         *  * In their class init function, they must override the
         *    GST_TAG_MUX_CLASS(mux_klass)->render_start_tag and/or
         *    GST_TAG_MUX_CLASS(mux_klass)->render_end_tag vfuncs and set up a render
         *    function.
         */
        abstract class TagMux extends Gst.Element implements Gst.TagSetter {
            static $gtype: GObject.GType<TagMux>;

            // Fields

            element: Gst.Element;

            // Constructors

            constructor(properties?: Partial<TagMux.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * create a tag buffer to add to the end of the
             *     input stream given a tag list, or NULL
             * @param tag_list
             */
            vfunc_render_end_tag(tag_list: Gst.TagList): Gst.Buffer;
            /**
             * create a tag buffer to add to the beginning of the
             *     input stream given a tag list, or NULL
             * @param tag_list
             */
            vfunc_render_start_tag(tag_list: Gst.TagList): Gst.Buffer;

            // Inherited methods
            /**
             * Adds the given tag / GValue pair on the setter using the given merge mode.
             * @param mode the mode to use
             * @param tag tag to set
             * @param value GValue to set for the tag
             */
            add_tag_value(mode: Gst.TagMergeMode, tag: string, value: GObject.Value | any): void;
            /**
             * Returns the current list of tags the setter uses.  The list should not be
             * modified or freed.
             *
             * This function is not thread-safe.
             * @returns a current snapshot of the          taglist used in the setter or %NULL if none is used.
             */
            get_tag_list(): Gst.TagList | null;
            /**
             * Queries the mode by which tags inside the setter are overwritten by tags
             * from events
             * @returns the merge mode used inside the element.
             */
            get_tag_merge_mode(): Gst.TagMergeMode;
            /**
             * Merges the given list into the setter's list using the given mode.
             * @param list a tag list to merge from
             * @param mode the mode to merge with
             */
            merge_tags(list: Gst.TagList, mode: Gst.TagMergeMode): void;
            /**
             * Reset the internal taglist. Elements should call this from within the
             * state-change handler.
             */
            reset_tags(): void;
            /**
             * Sets the given merge mode that is used for adding tags from events to tags
             * specified by this interface. The default is #GST_TAG_MERGE_KEEP, which keeps
             * the tags set with this interface and discards tags from events.
             * @param mode The mode with which tags are added
             */
            set_tag_merge_mode(mode: Gst.TagMergeMode): void;
            /**
             * Abort the state change of the element. This function is used
             * by elements that do asynchronous state changes and find out
             * something is wrong.
             *
             * This function should be called with the STATE_LOCK held.
             *
             * MT safe.
             */
            abort_state(): void;
            /**
             * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
             * see gst_object_set_parent() for refcounting information.
             *
             * Pads are automatically activated when added in the PAUSED or PLAYING
             * state.
             *
             * The pad and the element should be unlocked when calling this function.
             *
             * This function will emit the #GstElement::pad-added signal on the element.
             * @param pad the #GstPad to add to the element.
             * @returns %TRUE if the pad could be added. This function can fail when a pad with the same name already existed or the pad already had another parent. MT safe.
             */
            add_pad(pad: Gst.Pad): boolean;
            add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number;
            add_property_notify_watch(property_name: string | null, include_value: boolean): number;
            /**
             * Calls `func` from another thread and passes `user_data` to it. This is to be
             * used for cases when a state change has to be performed from a streaming
             * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
             * events.
             *
             * Calling those functions directly from the streaming thread will cause
             * deadlocks in many situations, as they might involve waiting for the
             * streaming thread to shut down from this very streaming thread.
             *
             * MT safe.
             * @param func Function to call asynchronously from another thread
             */
            call_async(func: Gst.ElementCallAsyncFunc): void;
            /**
             * Perform `transition` on `element`.
             *
             * This function must be called with STATE_LOCK held and is mainly used
             * internally.
             * @param transition the requested transition
             * @returns the #GstStateChangeReturn of the state transition.
             */
            change_state(transition: Gst.StateChange): Gst.StateChangeReturn;
            /**
             * Commit the state change of the element and proceed to the next
             * pending state if any. This function is used
             * by elements that do asynchronous state changes.
             * The core will normally call this method automatically when an
             * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
             *
             * If after calling this method the element still has not reached
             * the pending state, the next state change is performed.
             *
             * This method is used internally and should normally not be called by plugins
             * or applications.
             *
             * This function must be called with STATE_LOCK held.
             * @param ret The previous state return value
             * @returns The result of the commit state change. MT safe.
             */
            continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn;
            /**
             * Creates a pad for each pad template that is always available.
             * This function is only useful during object initialization of
             * subclasses of #GstElement.
             */
            create_all_pads(): void;
            /**
             * Creates a stream-id for `element` by combining the upstream information with
             * the `stream_id`.
             *
             * This function generates an unique stream-id by getting the upstream
             * stream-start event stream ID and appending `stream_id` to it. If the element
             * has no sinkpad it will generate an upstream stream-id by doing an URI query
             * on the element and in the worst case just uses a random number. Source
             * elements that don't implement the URI handler interface should ideally
             * generate a unique, deterministic stream-id manually instead.
             *
             * Since stream IDs are sorted alphabetically, any numbers in the stream ID
             * should be printed with a fixed number of characters, preceded by 0's, such as
             * by using the format \%03u instead of \%u.
             * @param stream_id The stream-id
             * @returns A stream-id for @element.
             */
            decorate_stream_id(stream_id: string): string;
            /**
             * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
             * exactly once for each pad that exists at the time of this call, unless
             * one of the calls to `func` returns %FALSE in which case we will stop
             * iterating pads and return early. If new pads are added or pads are removed
             * while pads are being iterated, this will not be taken into account until
             * next time this function is used.
             * @param func function to call for each pad
             * @returns %FALSE if @element had no pads or if one of the calls to @func   returned %FALSE.
             */
            foreach_pad(func: Gst.ElementForeachPadFunc): boolean;
            /**
             * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
             * called exactly once for each sink pad that exists at the time of this call,
             * unless one of the calls to `func` returns %FALSE in which case we will stop
             * iterating pads and return early. If new sink pads are added or sink pads
             * are removed while the sink pads are being iterated, this will not be taken
             * into account until next time this function is used.
             * @param func function to call for each sink pad
             * @returns %FALSE if @element had no sink pads or if one of the calls to @func   returned %FALSE.
             */
            foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean;
            /**
             * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
             * called exactly once for each source pad that exists at the time of this call,
             * unless one of the calls to `func` returns %FALSE in which case we will stop
             * iterating pads and return early. If new source pads are added or source pads
             * are removed while the source pads are being iterated, this will not be taken
             * into account until next time this function is used.
             * @param func function to call for each source pad
             * @returns %FALSE if @element had no source pads or if one of the calls   to @func returned %FALSE.
             */
            foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean;
            /**
             * Returns the base time of the element. The base time is the
             * absolute time of the clock when this element was last put to
             * PLAYING. Subtracting the base time from the clock time gives
             * the running time of the element.
             * @returns the base time of the element. MT safe.
             */
            get_base_time(): Gst.ClockTime;
            /**
             * Returns the bus of the element. Note that only a #GstPipeline will provide a
             * bus for the application.
             * @returns the element's #GstBus. unref after usage. MT safe.
             */
            get_bus(): Gst.Bus | null;
            /**
             * Gets the currently configured clock of the element. This is the clock as was
             * last set with gst_element_set_clock().
             *
             * Elements in a pipeline will only have their clock set when the
             * pipeline is in the PLAYING state.
             * @returns the #GstClock of the element. unref after usage. MT safe.
             */
            get_clock(): Gst.Clock | null;
            /**
             * Looks for an unlinked pad to which the given pad can link. It is not
             * guaranteed that linking the pads will work, though it should work in most
             * cases.
             *
             * This function will first attempt to find a compatible unlinked ALWAYS pad,
             * and if none can be found, it will request a compatible REQUEST pad by looking
             * at the templates of `element`.
             * @param pad the #GstPad to find a compatible one for.
             * @param caps the #GstCaps to use as a filter.
             * @returns the #GstPad to which a link   can be made, or %NULL if one cannot be found. gst_object_unref()   after usage.
             */
            get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null;
            /**
             * Retrieves a pad template from `element` that is compatible with `compattempl`.
             * Pads from compatible templates can be linked together.
             * @param compattempl the #GstPadTemplate to find a compatible     template for
             * @returns a compatible #GstPadTemplate,   or %NULL if none was found. No unreferencing is necessary.
             */
            get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null;
            /**
             * Gets the context with `context_type` set on the element or NULL.
             *
             * MT safe.
             * @param context_type a name of a context to retrieve
             * @returns A #GstContext or NULL
             */
            get_context(context_type: string): Gst.Context | null;
            /**
             * Gets the context with `context_type` set on the element or NULL.
             * @param context_type a name of a context to retrieve
             * @returns A #GstContext or NULL
             */
            get_context_unlocked(context_type: string): Gst.Context | null;
            /**
             * Gets the contexts set on the element.
             *
             * MT safe.
             * @returns List of #GstContext
             */
            get_contexts(): Gst.Context[];
            /**
             * Returns the current clock time of the element, as in, the time of the
             * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
             * @returns the clock time of the element, or GST_CLOCK_TIME_NONE if there is no clock.
             */
            get_current_clock_time(): Gst.ClockTime;
            /**
             * Returns the running time of the element. The running time is the
             * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
             * if the element has no clock, or if its base time has not been set.
             * @returns the running time of the element, or GST_CLOCK_TIME_NONE if the element has no clock or its base time has not been set.
             */
            get_current_running_time(): Gst.ClockTime;
            /**
             * Retrieves the factory that was used to create this element.
             * @returns the #GstElementFactory used for creating this     element or %NULL if element has not been registered (static element). no refcounting is needed.
             */
            get_factory(): Gst.ElementFactory | null;
            /**
             * Get metadata with `key` in `klass`.
             * @param key the key to get
             * @returns the metadata for @key.
             */
            get_metadata(key: string): string;
            /**
             * Retrieves a padtemplate from `element` with the given name.
             * @param name the name of the #GstPadTemplate to get.
             * @returns the #GstPadTemplate with the     given name, or %NULL if none was found. No unreferencing is     necessary.
             */
            get_pad_template(name: string): Gst.PadTemplate | null;
            /**
             * Retrieves a list of the pad templates associated with `element`. The
             * list must not be modified by the calling code.
             * @returns the #GList of     pad templates.
             */
            get_pad_template_list(): Gst.PadTemplate[];
            /**
             * The name of this function is confusing to people learning GStreamer.
             * gst_element_request_pad_simple() aims at making it more explicit it is
             * a simplified gst_element_request_pad().
             * @param name the name of the request #GstPad to retrieve.
             * @returns requested #GstPad if found,     otherwise %NULL.  Release after usage.
             */
            get_request_pad(name: string): Gst.Pad | null;
            /**
             * Returns the start time of the element. The start time is the
             * running time of the clock when this element was last put to PAUSED.
             *
             * Usually the start_time is managed by a toplevel element such as
             * #GstPipeline.
             *
             * MT safe.
             * @returns the start time of the element.
             */
            get_start_time(): Gst.ClockTime;
            /**
             * Gets the state of the element.
             *
             * For elements that performed an ASYNC state change, as reported by
             * gst_element_set_state(), this function will block up to the
             * specified timeout value for the state change to complete.
             * If the element completes the state change or goes into
             * an error, this function returns immediately with a return value of
             * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
             *
             * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
             * returns the current and pending state immediately.
             *
             * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
             * successfully changed its state but is not able to provide data yet.
             * This mostly happens for live sources that only produce data in
             * %GST_STATE_PLAYING. While the state change return is equivalent to
             * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
             * some sink elements might not be able to complete their state change because
             * an element is not producing data to complete the preroll. When setting the
             * element to playing, the preroll will complete and playback will start.
             * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
             * @returns %GST_STATE_CHANGE_SUCCESS if the element has no more pending state          and the last state change succeeded, %GST_STATE_CHANGE_ASYNC if the          element is still performing a state change or          %GST_STATE_CHANGE_FAILURE if the last state change failed. MT safe.
             */
            get_state(timeout: Gst.ClockTime): [Gst.StateChangeReturn, Gst.State | null, Gst.State | null];
            /**
             * Retrieves a pad from `element` by name. This version only retrieves
             * already-existing (i.e. 'static') pads.
             * @param name the name of the static #GstPad to retrieve.
             * @returns the requested #GstPad if     found, otherwise %NULL.  unref after usage. MT safe.
             */
            get_static_pad(name: string): Gst.Pad | null;
            /**
             * Checks if the state of an element is locked.
             * If the state of an element is locked, state changes of the parent don't
             * affect the element.
             * This way you can leave currently unused elements inside bins. Just lock their
             * state before changing the state from #GST_STATE_NULL.
             *
             * MT safe.
             * @returns %TRUE, if the element's state is locked.
             */
            is_locked_state(): boolean;
            /**
             * Retrieves an iterator of `element'`s pads. The iterator should
             * be freed after usage. Also more specialized iterators exists such as
             * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
             *
             * The order of pads returned by the iterator will be the order in which
             * the pads were added to the element.
             * @returns the #GstIterator of #GstPad. MT safe.
             */
            iterate_pads(): Gst.Iterator;
            /**
             * Retrieves an iterator of `element'`s sink pads.
             *
             * The order of pads returned by the iterator will be the order in which
             * the pads were added to the element.
             * @returns the #GstIterator of #GstPad. MT safe.
             */
            iterate_sink_pads(): Gst.Iterator;
            /**
             * Retrieves an iterator of `element'`s source pads.
             *
             * The order of pads returned by the iterator will be the order in which
             * the pads were added to the element.
             * @returns the #GstIterator of #GstPad. MT safe.
             */
            iterate_src_pads(): Gst.Iterator;
            /**
             * Links `src` to `dest`. The link must be from source to
             * destination; the other direction will not be tried. The function looks for
             * existing pads that aren't linked yet. It will request new pads if necessary.
             * Such pads need to be released manually when unlinking.
             * If multiple links are possible, only one is established.
             *
             * Make sure you have added your elements to a bin or pipeline with
             * gst_bin_add() before trying to link them.
             * @param dest the #GstElement containing the destination pad.
             * @returns %TRUE if the elements could be linked, %FALSE otherwise.
             */
            link(dest: Gst.Element): boolean;
            /**
             * Links `src` to `dest` using the given caps as filtercaps.
             * The link must be from source to
             * destination; the other direction will not be tried. The function looks for
             * existing pads that aren't linked yet. It will request new pads if necessary.
             * If multiple links are possible, only one is established.
             *
             * Make sure you have added your elements to a bin or pipeline with
             * gst_bin_add() before trying to link them.
             * @param dest the #GstElement containing the destination pad.
             * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
             * @returns %TRUE if the pads could be linked, %FALSE otherwise.
             */
            link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean;
            /**
             * Links the two named pads of the source and destination elements.
             * Side effect is that if one of the pads has no parent, it becomes a
             * child of the parent of the other element.  If they have different
             * parents, the link fails.
             * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
             * @param dest the #GstElement containing the destination pad.
             * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
             * @returns %TRUE if the pads could be linked, %FALSE otherwise.
             */
            link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean;
            /**
             * Links the two named pads of the source and destination elements. Side effect
             * is that if one of the pads has no parent, it becomes a child of the parent of
             * the other element. If they have different parents, the link fails. If `caps`
             * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
             * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
             * @param dest the #GstElement containing the destination pad.
             * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
             * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
             * @returns %TRUE if the pads could be linked, %FALSE otherwise.
             */
            link_pads_filtered(
                srcpadname: string | null,
                dest: Gst.Element,
                destpadname?: string | null,
                filter?: Gst.Caps | null,
            ): boolean;
            /**
             * Links the two named pads of the source and destination elements.
             * Side effect is that if one of the pads has no parent, it becomes a
             * child of the parent of the other element.  If they have different
             * parents, the link fails.
             *
             * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
             * is the same as calling gst_element_link_pads() and the recommended way of
             * linking pads with safety checks applied.
             *
             * This is a convenience function for gst_pad_link_full().
             * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
             * @param dest the #GstElement containing the destination pad.
             * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
             * @param flags the #GstPadLinkCheck to be performed when linking pads.
             * @returns %TRUE if the pads could be linked, %FALSE otherwise.
             */
            link_pads_full(
                srcpadname: string | null,
                dest: Gst.Element,
                destpadname: string | null,
                flags: Gst.PadLinkCheck,
            ): boolean;
            /**
             * Brings the element to the lost state. The current state of the
             * element is copied to the pending state so that any call to
             * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
             *
             * An ASYNC_START message is posted. If the element was PLAYING, it will
             * go to PAUSED. The element will be restored to its PLAYING state by
             * the parent pipeline when it prerolls again.
             *
             * This is mostly used for elements that lost their preroll buffer
             * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
             * they will go to their pending state again when a new preroll buffer is
             * queued. This function can only be called when the element is currently
             * not in error or an async state change.
             *
             * This function is used internally and should normally not be called from
             * plugins or applications.
             */
            lost_state(): void;
            /**
             * Post an error, warning or info message on the bus from inside an element.
             *
             * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
             * #GST_MESSAGE_INFO.
             *
             * MT safe.
             * @param type the #GstMessageType
             * @param domain the GStreamer GError domain this message belongs to
             * @param code the GError code belonging to the domain
             * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
             * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
             * @param file the source code file where the error was generated
             * @param _function the source code function where the error was generated
             * @param line the source code line where the error was generated
             */
            message_full(
                type: Gst.MessageType,
                domain: GLib.Quark,
                code: number,
                text: string | null,
                debug: string | null,
                file: string,
                _function: string,
                line: number,
            ): void;
            /**
             * Post an error, warning or info message on the bus from inside an element.
             *
             * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
             * #GST_MESSAGE_INFO.
             * @param type the #GstMessageType
             * @param domain the GStreamer GError domain this message belongs to
             * @param code the GError code belonging to the domain
             * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
             * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
             * @param file the source code file where the error was generated
             * @param _function the source code function where the error was generated
             * @param line the source code line where the error was generated
             * @param structure optional details structure
             */
            message_full_with_details(
                type: Gst.MessageType,
                domain: GLib.Quark,
                code: number,
                text: string | null,
                debug: string | null,
                file: string,
                _function: string,
                line: number,
                structure: Gst.Structure,
            ): void;
            /**
             * Use this function to signal that the element does not expect any more pads
             * to show up in the current pipeline. This function should be called whenever
             * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
             * pad templates use this in combination with autopluggers to figure out that
             * the element is done initializing its pads.
             *
             * This function emits the #GstElement::no-more-pads signal.
             *
             * MT safe.
             */
            no_more_pads(): void;
            /**
             * Post a message on the element's #GstBus. This function takes ownership of the
             * message; if you want to access the message after this call, you should add an
             * additional reference before calling.
             * @param message a #GstMessage to post
             * @returns %TRUE if the message was successfully posted. The function returns %FALSE if the element did not have a bus. MT safe.
             */
            post_message(message: Gst.Message): boolean;
            /**
             * Get the clock provided by the given element.
             * > An element is only required to provide a clock in the PAUSED
             * > state. Some elements can provide a clock in other states.
             * @returns the GstClock provided by the element or %NULL if no clock could be provided.  Unref after usage. MT safe.
             */
            provide_clock(): Gst.Clock | null;
            /**
             * Performs a query on the given element.
             *
             * For elements that don't implement a query handler, this function
             * forwards the query to a random srcpad or to the peer of a
             * random linked sinkpad of this element.
             *
             * Please note that some queries might need a running pipeline to work.
             * @param query the #GstQuery.
             * @returns %TRUE if the query could be performed. MT safe.
             */
            query(query: Gst.Query): boolean;
            /**
             * Queries an element to convert `src_val` in `src_format` to `dest_format`.
             * @param src_format a #GstFormat to convert from.
             * @param src_val a value to convert.
             * @param dest_format the #GstFormat to convert to.
             * @returns %TRUE if the query could be performed.
             */
            query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [boolean, number];
            /**
             * Queries an element (usually top-level pipeline or playbin element) for the
             * total stream duration in nanoseconds. This query will only work once the
             * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
             * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
             *
             * If the duration changes for some reason, you will get a DURATION_CHANGED
             * message on the pipeline bus, in which case you should re-query the duration
             * using this function.
             * @param format the #GstFormat requested
             * @returns %TRUE if the query could be performed.
             */
            query_duration(format: Gst.Format): [boolean, number];
            /**
             * Queries an element (usually top-level pipeline or playbin element) for the
             * stream position in nanoseconds. This will be a value between 0 and the
             * stream duration (if the stream duration is known). This query will usually
             * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
             * state). The application will receive an ASYNC_DONE message on the pipeline
             * bus when that is the case.
             *
             * If one repeatedly calls this function one can also create a query and reuse
             * it in gst_element_query().
             * @param format the #GstFormat requested
             * @returns %TRUE if the query could be performed.
             */
            query_position(format: Gst.Format): [boolean, number];
            /**
             * Makes the element free the previously requested pad as obtained
             * with gst_element_request_pad().
             *
             * This does not unref the pad. If the pad was created by using
             * gst_element_request_pad(), gst_element_release_request_pad() needs to be
             * followed by gst_object_unref() to free the `pad`.
             *
             * MT safe.
             * @param pad the #GstPad to release.
             */
            release_request_pad(pad: Gst.Pad): void;
            /**
             * Removes `pad` from `element`. `pad` will be destroyed if it has not been
             * referenced elsewhere using gst_object_unparent().
             *
             * This function is used by plugin developers and should not be used
             * by applications. Pads that were dynamically requested from elements
             * with gst_element_request_pad() should be released with the
             * gst_element_release_request_pad() function instead.
             *
             * Pads are not automatically deactivated so elements should perform the needed
             * steps to deactivate the pad in case this pad is removed in the PAUSED or
             * PLAYING state. See gst_pad_set_active() for more information about
             * deactivating pads.
             *
             * The pad and the element should be unlocked when calling this function.
             *
             * This function will emit the #GstElement::pad-removed signal on the element.
             * @param pad the #GstPad to remove from the element.
             * @returns %TRUE if the pad could be removed. Can return %FALSE if the pad does not belong to the provided element. MT safe.
             */
            remove_pad(pad: Gst.Pad): boolean;
            remove_property_notify_watch(watch_id: number): void;
            /**
             * Retrieves a request pad from the element according to the provided template.
             * Pad templates can be looked up using
             * gst_element_factory_get_static_pad_templates().
             *
             * The pad should be released with gst_element_release_request_pad().
             * @param templ a #GstPadTemplate of which we want a pad of.
             * @param name the name of the request #GstPad to retrieve. Can be %NULL.
             * @param caps the caps of the pad we want to request. Can be %NULL.
             * @returns requested #GstPad if found,     otherwise %NULL.  Release after usage.
             */
            request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null;
            /**
             * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
             * retrieves request pads. The pad should be released with
             * gst_element_release_request_pad().
             *
             * This method is slower than manually getting the pad template and calling
             * gst_element_request_pad() if the pads should have a specific name (e.g.
             * `name` is "src_1" instead of "src_\%u").
             *
             * Note that this function was introduced in GStreamer 1.20 in order to provide
             * a better name to gst_element_get_request_pad(). Prior to 1.20, users
             * should use gst_element_get_request_pad() which provides the same
             * functionality.
             * @param name the name of the request #GstPad to retrieve.
             * @returns requested #GstPad if found,     otherwise %NULL.  Release after usage.
             */
            request_pad_simple(name: string): Gst.Pad | null;
            /**
             * Sends a seek event to an element. See gst_event_new_seek() for the details of
             * the parameters. The seek event is sent to the element using
             * gst_element_send_event().
             *
             * MT safe.
             * @param rate The new playback rate
             * @param format The format of the seek values
             * @param flags The optional seek flags.
             * @param start_type The type and flags for the new start position
             * @param start The value of the new start position
             * @param stop_type The type and flags for the new stop position
             * @param stop The value of the new stop position
             * @returns %TRUE if the event was handled. Flushing seeks will trigger a preroll, which will emit %GST_MESSAGE_ASYNC_DONE.
             */
            seek(
                rate: number,
                format: Gst.Format,
                flags: Gst.SeekFlags,
                start_type: Gst.SeekType,
                start: number,
                stop_type: Gst.SeekType,
                stop: number,
            ): boolean;
            /**
             * Simple API to perform a seek on the given element, meaning it just seeks
             * to the given position relative to the start of the stream. For more complex
             * operations like segment seeks (e.g. for looping) or changing the playback
             * rate or seeking relative to the last configured playback segment you should
             * use gst_element_seek().
             *
             * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
             * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
             * type is certainly not seekable (such as a live stream).
             *
             * Some elements allow for seeking in the READY state, in this
             * case they will store the seek event and execute it when they are put to
             * PAUSED. If the element supports seek in READY, it will always return %TRUE when
             * it receives the event in the READY state.
             * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
             * @param seek_flags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
             * @param seek_pos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
             * @returns %TRUE if the seek operation succeeded. Flushing seeks will trigger a preroll, which will emit %GST_MESSAGE_ASYNC_DONE.
             */
            seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean;
            /**
             * Sends an event to an element. If the element doesn't implement an
             * event handler, the event will be pushed on a random linked sink pad for
             * downstream events or a random linked source pad for upstream events.
             *
             * This function takes ownership of the provided event so you should
             * gst_event_ref() it if you want to reuse the event after this call.
             *
             * MT safe.
             * @param event the #GstEvent to send to the element.
             * @returns %TRUE if the event was handled. Events that trigger a preroll (such as flushing seeks and steps) will emit %GST_MESSAGE_ASYNC_DONE.
             */
            send_event(event: Gst.Event): boolean;
            /**
             * Set the base time of an element. See gst_element_get_base_time().
             *
             * MT safe.
             * @param time the base time to set.
             */
            set_base_time(time: Gst.ClockTime): void;
            /**
             * Sets the bus of the element. Increases the refcount on the bus.
             * For internal use only, unless you're testing elements.
             *
             * MT safe.
             * @param bus the #GstBus to set.
             */
            set_bus(bus?: Gst.Bus | null): void;
            /**
             * Sets the clock for the element. This function increases the
             * refcount on the clock. Any previously set clock on the object
             * is unreffed.
             * @param clock the #GstClock to set for the element.
             * @returns %TRUE if the element accepted the clock. An element can refuse a clock when it, for example, is not able to slave its internal clock to the @clock or when it requires a specific clock to operate. MT safe.
             */
            set_clock(clock?: Gst.Clock | null): boolean;
            /**
             * Sets the context of the element. Increases the refcount of the context.
             *
             * MT safe.
             * @param context the #GstContext to set.
             */
            set_context(context: Gst.Context): void;
            /**
             * Locks the state of an element, so state changes of the parent don't affect
             * this element anymore.
             *
             * Note that this is racy if the state lock of the parent bin is not taken.
             * The parent bin might've just checked the flag in another thread and as the
             * next step proceed to change the child element's state.
             *
             * MT safe.
             * @param locked_state %TRUE to lock the element's state
             * @returns %TRUE if the state was changed, %FALSE if bad parameters were given or the elements state-locking needed no change.
             */
            set_locked_state(locked_state: boolean): boolean;
            /**
             * Set the start time of an element. The start time of the element is the
             * running time of the element when it last went to the PAUSED state. In READY
             * or after a flushing seek, it is set to 0.
             *
             * Toplevel elements like #GstPipeline will manage the start_time and
             * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
             * on such a toplevel element will disable the distribution of the base_time to
             * the children and can be useful if the application manages the base_time
             * itself, for example if you want to synchronize capture from multiple
             * pipelines, and you can also ensure that the pipelines have the same clock.
             *
             * MT safe.
             * @param time the base time to set.
             */
            set_start_time(time: Gst.ClockTime): void;
            /**
             * Sets the state of the element. This function will try to set the
             * requested state by going through all the intermediary states and calling
             * the class's state change function for each.
             *
             * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
             * element will perform the remainder of the state change asynchronously in
             * another thread.
             * An application can use gst_element_get_state() to wait for the completion
             * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
             * %GST_MESSAGE_STATE_CHANGED on the bus.
             *
             * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
             * #GST_STATE_CHANGE_ASYNC.
             * @param state the element's new #GstState.
             * @returns Result of the state change using #GstStateChangeReturn. MT safe.
             */
            set_state(state: Gst.State): Gst.StateChangeReturn;
            /**
             * Tries to change the state of the element to the same as its parent.
             * If this function returns %FALSE, the state of element is undefined.
             * @returns %TRUE, if the element's state could be synced to the parent's state. MT safe.
             */
            sync_state_with_parent(): boolean;
            /**
             * Unlinks all source pads of the source element with all sink pads
             * of the sink element to which they are linked.
             *
             * If the link has been made using gst_element_link(), it could have created an
             * requestpad, which has to be released using gst_element_release_request_pad().
             * @param dest the sink #GstElement to unlink.
             */
            unlink(dest: Gst.Element): void;
            /**
             * Unlinks the two named pads of the source and destination elements.
             *
             * This is a convenience function for gst_pad_unlink().
             * @param srcpadname the name of the #GstPad in source element.
             * @param dest a #GstElement containing the destination pad.
             * @param destpadname the name of the #GstPad in destination element.
             */
            unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void;
            /**
             * Perform `transition` on `element`.
             *
             * This function must be called with STATE_LOCK held and is mainly used
             * internally.
             * @param transition the requested transition
             */
            vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn;
            /**
             * Gets the state of the element.
             *
             * For elements that performed an ASYNC state change, as reported by
             * gst_element_set_state(), this function will block up to the
             * specified timeout value for the state change to complete.
             * If the element completes the state change or goes into
             * an error, this function returns immediately with a return value of
             * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
             *
             * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
             * returns the current and pending state immediately.
             *
             * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
             * successfully changed its state but is not able to provide data yet.
             * This mostly happens for live sources that only produce data in
             * %GST_STATE_PLAYING. While the state change return is equivalent to
             * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
             * some sink elements might not be able to complete their state change because
             * an element is not producing data to complete the preroll. When setting the
             * element to playing, the preroll will complete and playback will start.
             * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
             */
            vfunc_get_state(timeout: Gst.ClockTime): [Gst.StateChangeReturn, Gst.State | null, Gst.State | null];
            /**
             * Use this function to signal that the element does not expect any more pads
             * to show up in the current pipeline. This function should be called whenever
             * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
             * pad templates use this in combination with autopluggers to figure out that
             * the element is done initializing its pads.
             *
             * This function emits the #GstElement::no-more-pads signal.
             *
             * MT safe.
             */
            vfunc_no_more_pads(): void;
            vfunc_pad_added(pad: Gst.Pad): void;
            vfunc_pad_removed(pad: Gst.Pad): void;
            /**
             * Post a message on the element's #GstBus. This function takes ownership of the
             * message; if you want to access the message after this call, you should add an
             * additional reference before calling.
             * @param message a #GstMessage to post
             */
            vfunc_post_message(message: Gst.Message): boolean;
            /**
             * Get the clock provided by the given element.
             * > An element is only required to provide a clock in the PAUSED
             * > state. Some elements can provide a clock in other states.
             */
            vfunc_provide_clock(): Gst.Clock | null;
            /**
             * Performs a query on the given element.
             *
             * For elements that don't implement a query handler, this function
             * forwards the query to a random srcpad or to the peer of a
             * random linked sinkpad of this element.
             *
             * Please note that some queries might need a running pipeline to work.
             * @param query the #GstQuery.
             */
            vfunc_query(query: Gst.Query): boolean;
            /**
             * called when a request pad is to be released
             * @param pad
             */
            vfunc_release_pad(pad: Gst.Pad): void;
            /**
             * Retrieves a request pad from the element according to the provided template.
             * Pad templates can be looked up using
             * gst_element_factory_get_static_pad_templates().
             *
             * The pad should be released with gst_element_release_request_pad().
             * @param templ a #GstPadTemplate of which we want a pad of.
             * @param name the name of the request #GstPad to retrieve. Can be %NULL.
             * @param caps the caps of the pad we want to request. Can be %NULL.
             */
            vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null;
            /**
             * Sends an event to an element. If the element doesn't implement an
             * event handler, the event will be pushed on a random linked sink pad for
             * downstream events or a random linked source pad for upstream events.
             *
             * This function takes ownership of the provided event so you should
             * gst_event_ref() it if you want to reuse the event after this call.
             *
             * MT safe.
             * @param event the #GstEvent to send to the element.
             */
            vfunc_send_event(event: Gst.Event): boolean;
            /**
             * Sets the bus of the element. Increases the refcount on the bus.
             * For internal use only, unless you're testing elements.
             *
             * MT safe.
             * @param bus the #GstBus to set.
             */
            vfunc_set_bus(bus?: Gst.Bus | null): void;
            /**
             * Sets the clock for the element. This function increases the
             * refcount on the clock. Any previously set clock on the object
             * is unreffed.
             * @param clock the #GstClock to set for the element.
             */
            vfunc_set_clock(clock?: Gst.Clock | null): boolean;
            /**
             * Sets the context of the element. Increases the refcount of the context.
             *
             * MT safe.
             * @param context the #GstContext to set.
             */
            vfunc_set_context(context: Gst.Context): void;
            /**
             * Sets the state of the element. This function will try to set the
             * requested state by going through all the intermediary states and calling
             * the class's state change function for each.
             *
             * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
             * element will perform the remainder of the state change asynchronously in
             * another thread.
             * An application can use gst_element_get_state() to wait for the completion
             * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
             * %GST_MESSAGE_STATE_CHANGED on the bus.
             *
             * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
             * #GST_STATE_CHANGE_ASYNC.
             * @param state the element's new #GstState.
             */
            vfunc_set_state(state: Gst.State): Gst.StateChangeReturn;
            /**
             * called immediately after a new state was set.
             * @param oldstate
             * @param newstate
             * @param pending
             */
            vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void;
        }

        type TagDemuxClass = typeof TagDemux;
        abstract class TagDemuxPrivate {
            static $gtype: GObject.GType<TagDemuxPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TagMuxClass = typeof TagMux;
        abstract class TagMuxPrivate {
            static $gtype: GObject.GType<TagMuxPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TagXmpWriterInterface = typeof TagXmpWriter;
        module TagXmpWriter {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Element.ConstructorProps {}
        }

        export interface TagXmpWriterNamespace {
            $gtype: GObject.GType<TagXmpWriter>;
            prototype: TagXmpWriter;
        }
        interface TagXmpWriter extends Gst.Element {
            // Methods

            /**
             * Adds all available XMP schemas to the configuration. Meaning that
             * all will be used.
             */
            add_all_schemas(): void;
            /**
             * Adds `schema` to the list schemas
             * @param schema the schema to be added
             */
            add_schema(schema: string): void;
            /**
             * Checks if `schema` is going to be used
             * @param schema the schema to test
             * @returns %TRUE if it is going to be used
             */
            has_schema(schema: string): boolean;
            /**
             * Removes all schemas from the list of schemas to use. Meaning that no
             * XMP will be generated.
             */
            remove_all_schemas(): void;
            /**
             * Removes a schema from the list of schemas to use. Nothing is done if
             * the schema wasn't in the list
             * @param schema the schema to remove
             */
            remove_schema(schema: string): void;
            tag_list_to_xmp_buffer(taglist: Gst.TagList, read_only: boolean): Gst.Buffer;
        }

        export const TagXmpWriter: TagXmpWriterNamespace;

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

    export default GstTag;
}

declare module 'gi://GstTag' {
    import GstTag10 from 'gi://GstTag?version=1.0';
    export default GstTag10;
}
// END
