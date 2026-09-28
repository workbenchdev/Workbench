/// <reference path="./gtk-4.0.d.ts" />
/// <reference path="./gsk-4.0.d.ts" />
/// <reference path="./graphene-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GtkSource?version=5' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=4.0';
    import type Gsk from 'gi://Gsk?version=4.0';
    import type Graphene from 'gi://Graphene?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace GtkSource {
        /**
         * GtkSource-5
         */

        export namespace BackgroundPatternType {
            export const $gtype: GObject.GType<BackgroundPatternType>;
        }

        enum BackgroundPatternType {
            /**
             * no pattern
             */
            NONE,
            /**
             * grid pattern
             */
            GRID,
        }

        export namespace BracketMatchType {
            export const $gtype: GObject.GType<BracketMatchType>;
        }

        enum BracketMatchType {
            /**
             * there is no bracket to match.
             */
            NONE,
            /**
             * matching a bracket
             *  failed because the maximum range was reached.
             */
            OUT_OF_RANGE,
            /**
             * a matching bracket was not found.
             */
            NOT_FOUND,
            /**
             * a matching bracket was found.
             */
            FOUND,
        }

        export namespace ChangeCaseType {
            export const $gtype: GObject.GType<ChangeCaseType>;
        }

        enum ChangeCaseType {
            /**
             * change case to lowercase.
             */
            LOWER,
            /**
             * change case to uppercase.
             */
            UPPER,
            /**
             * toggle case of each character.
             */
            TOGGLE,
            /**
             * capitalize each word.
             */
            TITLE,
        }

        export namespace CompletionActivation {
            export const $gtype: GObject.GType<CompletionActivation>;
        }

        enum CompletionActivation {
            NONE,
            INTERACTIVE,
            USER_REQUESTED,
        }

        export namespace CompletionColumn {
            export const $gtype: GObject.GType<CompletionColumn>;
        }

        enum CompletionColumn {
            ICON,
            BEFORE,
            TYPED_TEXT,
            AFTER,
            COMMENT,
            DETAILS,
        }

        export namespace CompressionType {
            export const $gtype: GObject.GType<CompressionType>;
        }

        enum CompressionType {
            /**
             * plain text.
             */
            NONE,
            /**
             * gzip compression.
             */
            GZIP,
        }
        /**
         * An error code used with the %GTK_SOURCE_FILE_LOADER_ERROR domain.
         */
        class FileLoaderError extends GLib.Error {
            static $gtype: GObject.GType<FileLoaderError>;

            // Static fields

            /**
             * The file is too big.
             */
            static TOO_BIG: number;
            /**
             * It is not
             * possible to detect the encoding automatically.
             */
            static ENCODING_AUTO_DETECTION_FAILED: number;
            /**
             * There was an encoding
             * conversion error and it was needed to use a fallback character.
             */
            static CONVERSION_FALLBACK: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * An error code used with the %GTK_SOURCE_FILE_SAVER_ERROR domain.
         */
        class FileSaverError extends GLib.Error {
            static $gtype: GObject.GType<FileSaverError>;

            // Static fields

            /**
             * The buffer contains invalid
             *   characters.
             */
            static INVALID_CHARS: number;
            /**
             * The file is externally
             *   modified.
             */
            static EXTERNALLY_MODIFIED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * The alignment mode of the renderer, when a cell spans multiple lines (due to
         * text wrapping).
         */

        /**
         * The alignment mode of the renderer, when a cell spans multiple lines (due to
         * text wrapping).
         */
        export namespace GutterRendererAlignmentMode {
            export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
        }

        enum GutterRendererAlignmentMode {
            /**
             * The full cell.
             */
            CELL,
            /**
             * The first line.
             */
            FIRST,
            /**
             * The last line.
             */
            LAST,
        }

        export namespace NewlineType {
            export const $gtype: GObject.GType<NewlineType>;
        }

        enum NewlineType {
            /**
             * line feed, used on UNIX.
             */
            LF,
            /**
             * carriage return, used on Mac.
             */
            CR,
            /**
             * carriage return followed by a line feed, used
             *   on Windows.
             */
            CR_LF,
        }

        export namespace SmartHomeEndType {
            export const $gtype: GObject.GType<SmartHomeEndType>;
        }

        enum SmartHomeEndType {
            /**
             * smart-home-end disabled.
             */
            DISABLED,
            /**
             * move to the first/last
             * non-whitespace character on the first press of the HOME/END keys and
             * to the beginning/end of the line on the second press.
             */
            BEFORE,
            /**
             * move to the beginning/end of the
             * line on the first press of the HOME/END keys and to the first/last
             * non-whitespace character on the second press.
             */
            AFTER,
            /**
             * always move to the first/last
             * non-whitespace character when the HOME/END keys are pressed.
             */
            ALWAYS,
        }

        export namespace ViewGutterPosition {
            export const $gtype: GObject.GType<ViewGutterPosition>;
        }

        enum ViewGutterPosition {
            /**
             * the gutter position of the lines
             * renderer
             */
            LINES,
            /**
             * the gutter position of the marks
             * renderer
             */
            MARKS,
        }
        /**
         * Like gtk_source_get_major_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MAJOR_VERSION: number;
        /**
         * Like gtk_source_get_micro_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MICRO_VERSION: number;
        /**
         * Like gtk_source_get_minor_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MINOR_VERSION: number;
        /**
         * Like GTK_SOURCE_CHECK_VERSION, but the check for gtk_source_check_version is
         * at runtime instead of compile time. This is useful for compiling
         * against older versions of GtkSourceView, but using features from newer
         * versions.
         * @param major the major version to check
         * @param minor the minor version to check
         * @param micro the micro version to check
         * @returns %TRUE if the version of the GtkSourceView currently loaded is the same as or newer than the passed-in version.
         */
        function check_version(major: number, minor: number, micro: number): boolean;
        /**
         * Gets all encodings.
         * @returns a list of all #GtkSourceEncoding's. Free with g_slist_free().
         */
        function encoding_get_all(): Encoding[];
        /**
         * Gets the #GtkSourceEncoding for the current locale.
         *
         * See also [func`GLib`.get_charset].
         * @returns the current locale encoding.
         */
        function encoding_get_current(): Encoding;
        /**
         * Gets the list of default candidate encodings to try when loading a file.
         *
         * See [method`FileLoader`.set_candidate_encodings].
         *
         * This function returns a different list depending on the current locale (i.e.
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         * @returns the list of default candidate encodings. Free with g_slist_free().
         */
        function encoding_get_default_candidates(): Encoding[];
        /**
         * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
         * "ISO-8859-1".
         * @param charset a character set.
         * @returns the corresponding #GtkSourceEncoding, or %NULL if not found.
         */
        function encoding_get_from_charset(charset: string): Encoding | null;
        function encoding_get_utf8(): Encoding;
        function file_loader_error_quark(): GLib.Quark;
        function file_saver_error_quark(): GLib.Quark;
        /**
         * Free the resources allocated by GtkSourceView. For example it unrefs the
         * singleton objects.
         *
         * It is not mandatory to call this function, it's just to be friendlier to
         * memory debugging tools. This function is meant to be called at the end of
         * main(). It can be called several times.
         */
        function finalize(): void;
        /**
         * Returns the major version number of the GtkSourceView library.
         * (e.g. in GtkSourceView version 3.20.0 this is 3.)
         *
         * This function is in the library, so it represents the GtkSourceView library
         * your code is running against. Contrast with the #GTK_SOURCE_MAJOR_VERSION
         * macro, which represents the major version of the GtkSourceView headers you
         * have included when compiling your code.
         * @returns the major version number of the GtkSourceView library
         */
        function get_major_version(): number;
        /**
         * Returns the micro version number of the GtkSourceView library.
         * (e.g. in GtkSourceView version 3.20.0 this is 0.)
         *
         * This function is in the library, so it represents the GtkSourceView library
         * your code is running against. Contrast with the #GTK_SOURCE_MICRO_VERSION
         * macro, which represents the micro version of the GtkSourceView headers you
         * have included when compiling your code.
         * @returns the micro version number of the GtkSourceView library
         */
        function get_micro_version(): number;
        /**
         * Returns the minor version number of the GtkSourceView library.
         * (e.g. in GtkSourceView version 3.20.0 this is 20.)
         *
         * This function is in the library, so it represents the GtkSourceView library
         * your code is running against. Contrast with the #GTK_SOURCE_MINOR_VERSION
         * macro, which represents the minor version of the GtkSourceView headers you
         * have included when compiling your code.
         * @returns the minor version number of the GtkSourceView library
         */
        function get_minor_version(): number;
        /**
         * Initializes the GtkSourceView library (e.g. for the internationalization).
         *
         * This function can be called several times, but is meant to be called at the
         * beginning of main(), before any other GtkSourceView function call.
         */
        function init(): void;
        /**
         * Simplified version of [func`scheduler_add_full]`.
         * @param callback the callback to execute
         */
        function scheduler_add(callback: SchedulerCallback): number;
        /**
         * Adds a new callback that will be executed as time permits on the main thread.
         *
         * This is useful when you need to do a lot of background work but want to do
         * it incrementally.
         *
         * `callback` will be provided a deadline that it should complete it's work by
         * (or near) and can be checked using [func`GLib`.get_monotonic_time] for comparison.
         *
         * Use [func`scheduler_remove]` to remove the handler.
         * @param callback the callback to execute
         */
        function scheduler_add_full(callback: SchedulerCallback): number;
        /**
         * Removes a scheduler callback previously registered with
         * [func`scheduler_add]` or [func`scheduler_add_full]`.
         * @param handler_id the handler id
         */
        function scheduler_remove(handler_id: number): void;
        /**
         * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
         *
         * For a regular expression search, use g_regex_escape_string() instead.
         *
         * One possible use case is to take the #GtkTextBuffer's selection and put it in a
         * search entry. The selection can contain tabulations, newlines, etc. So it's
         * better to escape those special characters to better fit in the search entry.
         *
         * See also: [func`utils_unescape_search_text]`.
         *
         * <warning>
         * Warning: the escape and unescape functions are not reciprocal! For example,
         * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> unescape
         * -> search settings -> escape -> search entry. The original search entry text
         * may be modified.
         * </warning>
         * @param text the text to escape.
         * @returns the escaped @text.
         */
        function utils_escape_search_text(text: string): string;
        /**
         * Use this function before [method`SearchSettings`.set_search_text], to
         * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
         * The purpose is to easily write those characters in a search entry.
         *
         * Note that unescaping the search text is not needed for regular expression
         * searches.
         *
         * See also: [func`utils_escape_search_text]`.
         * @param text the text to unescape.
         * @returns the unescaped @text.
         */
        function utils_unescape_search_text(text: string): string;
        interface SchedulerCallback {
            (deadline: number): boolean;
        }
        /**
         * Flags to define the behavior of a [flags`FileSaverFlags]`.
         */

        /**
         * Flags to define the behavior of a [flags`FileSaverFlags]`.
         */
        export namespace FileSaverFlags {
            export const $gtype: GObject.GType<FileSaverFlags>;
        }

        enum FileSaverFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Ignore invalid characters.
             */
            IGNORE_INVALID_CHARS,
            /**
             * Save file despite external modifications.
             */
            IGNORE_MODIFICATION_TIME,
            /**
             * Create a backup before saving the file.
             */
            CREATE_BACKUP,
        }

        export namespace SortFlags {
            export const $gtype: GObject.GType<SortFlags>;
        }

        enum SortFlags {
            /**
             * no flags specified
             */
            NONE,
            /**
             * case sensitive sort
             */
            CASE_SENSITIVE,
            /**
             * sort in reverse order
             */
            REVERSE_ORDER,
            /**
             * remove duplicates
             */
            REMOVE_DUPLICATES,
        }
        /**
         * #GtkSourceSpaceLocationFlags contains flags for white space locations.
         *
         * If a line contains only white spaces (no text), the white spaces match both
         * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
         */

        /**
         * #GtkSourceSpaceLocationFlags contains flags for white space locations.
         *
         * If a line contains only white spaces (no text), the white spaces match both
         * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
         */
        export namespace SpaceLocationFlags {
            export const $gtype: GObject.GType<SpaceLocationFlags>;
        }

        enum SpaceLocationFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Leading white spaces on a line, i.e. the
             *   indentation.
             */
            LEADING,
            /**
             * White spaces inside a line of text.
             */
            INSIDE_TEXT,
            /**
             * Trailing white spaces on a line.
             */
            TRAILING,
            /**
             * White spaces anywhere.
             */
            ALL,
        }
        /**
         * #GtkSourceSpaceTypeFlags contains flags for white space types.
         */

        /**
         * #GtkSourceSpaceTypeFlags contains flags for white space types.
         */
        export namespace SpaceTypeFlags {
            export const $gtype: GObject.GType<SpaceTypeFlags>;
        }

        enum SpaceTypeFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Space character.
             */
            SPACE,
            /**
             * Tab character.
             */
            TAB,
            /**
             * Line break character. If the
             *   #GtkSourceBuffer:implicit-trailing-newline property is %TRUE,
             *   #GtkSourceSpaceDrawer also draws a line break at the end of the buffer.
             */
            NEWLINE,
            /**
             * Non-breaking space character.
             */
            NBSP,
            /**
             * All white spaces.
             */
            ALL,
        }
        module Buffer {
            // Signal callback interfaces

            interface BracketMatched {
                (iter: Gtk.TextIter | null, state: BracketMatchType): void;
            }

            interface CursorMoved {
                (): void;
            }

            interface HighlightUpdated {
                (start: Gtk.TextIter, end: Gtk.TextIter): void;
            }

            interface SourceMarkUpdated {
                (mark: Gtk.TextMark): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gtk.TextBuffer.ConstructorProps {
                highlight_matching_brackets: boolean;
                highlightMatchingBrackets: boolean;
                highlight_syntax: boolean;
                highlightSyntax: boolean;
                implicit_trailing_newline: boolean;
                implicitTrailingNewline: boolean;
                language: Language;
                loading: boolean;
                style_scheme: StyleScheme;
                styleScheme: StyleScheme;
            }
        }

        /**
         * Subclass of [class`Gtk`.TextBuffer].
         *
         * A `GtkSourceBuffer` object is the model for [class`View]` widgets.
         * It extends the [class`Gtk`.TextBuffer] class by adding features useful to display
         * and edit source code such as syntax highlighting and bracket matching.
         *
         * To create a `GtkSourceBuffer` use [ctor`GtkSource`.Buffer.new] or
         * [ctor`GtkSource`.Buffer.new_with_language]. The second form is just a convenience
         * function which allows you to initially set a [class`Language]`. You can also
         * directly create a [class`View]` and get its [class`Buffer]` with
         * [method`Gtk`.TextView.get_buffer].
         *
         * The highlighting is enabled by default, but you can disable it with
         * [method`Buffer`.set_highlight_syntax].
         *
         * # Context Classes:
         *
         * It is possible to retrieve some information from the syntax highlighting
         * engine. The default context classes that are applied to regions of a
         * `GtkSourceBuffer`:
         *
         *  - **comment**: the region delimits a comment;
         *  - **no-spell-check**: the region should not be spell checked;
         *  - **path**: the region delimits a path to a file;
         *  - **string**: the region delimits a string.
         *
         * Custom language definition files can create their own context classes,
         * since the functions like [method`Buffer`.iter_has_context_class] take
         * a string parameter as the context class.
         *
         * `GtkSourceBuffer` provides an API to access the context classes:
         * [method`Buffer`.iter_has_context_class],
         * [method`Buffer`.get_context_classes_at_iter],
         * [method`Buffer`.iter_forward_to_context_class_toggle] and
         * [method`Buffer`.iter_backward_to_context_class_toggle].
         *
         * And the [signal`GtkSource`.Buffer::highlight-updated] signal permits to be notified
         * when a context class region changes.
         *
         * Each context class has also an associated [class`Gtk`.TextTag] with the name
         * `gtksourceview:context-classes:<name>`. For example to
         * retrieve the [class`Gtk`.TextTag] for the string context class, one can write:
         * ```c
         * GtkTextTagTable *tag_table;
         * GtkTextTag *tag;
         *
         * tag_table = gtk_text_buffer_get_tag_table (buffer);
         * tag = gtk_text_tag_table_lookup (tag_table, "gtksourceview:context-classes:string");
         * ```
         *
         * The tag must be used for read-only purposes.
         *
         * Accessing a context class via the associated [class`Gtk`.TextTag] is less
         * convenient than the `GtkSourceBuffer` API, because:
         *
         *  - The tag doesn't always exist, you need to listen to the
         *    [signal`Gtk`.TextTagTable::tag-added] and [signal`Gtk`.TextTagTable::tag-removed] signals.
         *  - Instead of the [signal`GtkSource`.Buffer::highlight-updated] signal, you can listen
         *    to the [signal`Gtk`.TextBuffer::apply-tag] and [signal`Gtk`.TextBuffer::remove-tag] signals.
         *
         * A possible use-case for accessing a context class via the associated
         * [class`Gtk`.TextTag] is to read the region but without adding a hard dependency on the
         * GtkSourceView library (for example for a spell-checking library that wants to
         * read the no-spell-check region).
         */
        class Buffer extends Gtk.TextBuffer {
            static $gtype: GObject.GType<Buffer>;

            // Properties

            /**
             * Whether to highlight matching brackets in the buffer.
             */
            get highlight_matching_brackets(): boolean;
            set highlight_matching_brackets(val: boolean);
            /**
             * Whether to highlight matching brackets in the buffer.
             */
            get highlightMatchingBrackets(): boolean;
            set highlightMatchingBrackets(val: boolean);
            /**
             * Whether to highlight syntax in the buffer.
             */
            get highlight_syntax(): boolean;
            set highlight_syntax(val: boolean);
            /**
             * Whether to highlight syntax in the buffer.
             */
            get highlightSyntax(): boolean;
            set highlightSyntax(val: boolean);
            /**
             * Whether the buffer has an implicit trailing newline. See
             * [method`Buffer`.set_implicit_trailing_newline].
             */
            get implicit_trailing_newline(): boolean;
            set implicit_trailing_newline(val: boolean);
            /**
             * Whether the buffer has an implicit trailing newline. See
             * [method`Buffer`.set_implicit_trailing_newline].
             */
            get implicitTrailingNewline(): boolean;
            set implicitTrailingNewline(val: boolean);
            get language(): Language;
            set language(val: Language);
            /**
             * The "loading" property denotes that a `GtkSourceFileLoader` is
             * currently loading the buffer.
             *
             * Applications may want to use this setting to avoid doing work
             * while the buffer is loading such as spellchecking.
             */
            get loading(): boolean;
            /**
             * Style scheme. It contains styles for syntax highlighting, optionally
             * foreground, background, cursor color, current line color, and matching
             * brackets style.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * Style scheme. It contains styles for syntax highlighting, optionally
             * foreground, background, cursor color, current line color, and matching
             * brackets style.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);

            // Constructors

            constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](table?: Gtk.TextTagTable | null): Buffer;

            static new_with_language(language: Language): Buffer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'bracket-matched',
                callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void,
            ): number;
            connect_after(
                signal: 'bracket-matched',
                callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void,
            ): number;
            emit(signal: 'bracket-matched', iter: Gtk.TextIter | null, state: BracketMatchType): void;
            connect(signal: 'cursor-moved', callback: (_source: this) => void): number;
            connect_after(signal: 'cursor-moved', callback: (_source: this) => void): number;
            emit(signal: 'cursor-moved'): void;
            connect(
                signal: 'highlight-updated',
                callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void,
            ): number;
            connect_after(
                signal: 'highlight-updated',
                callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void,
            ): number;
            emit(signal: 'highlight-updated', start: Gtk.TextIter, end: Gtk.TextIter): void;
            connect(signal: 'source-mark-updated', callback: (_source: this, mark: Gtk.TextMark) => void): number;
            connect_after(signal: 'source-mark-updated', callback: (_source: this, mark: Gtk.TextMark) => void): number;
            emit(signal: 'source-mark-updated', mark: Gtk.TextMark): void;

            // Virtual methods

            vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;

            // Methods

            /**
             * Moves `iter` to the position of the previous [class`Mark]` of the given
             * category.
             *
             * Returns %TRUE if `iter` was moved. If `category` is NULL, the
             * previous source mark can be of any category.
             * @param iter an iterator.
             * @param category category to search for, or %NULL
             * @returns whether `iter` was moved.
             */
            backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];
            /**
             * Changes the case of the text between the specified iterators.
             *
             * Since 5.4, this function will update the position of `start` and
             * `end` to surround the modified text.
             * @param case_type how to change the case.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             */
            change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * Creates a source mark in the `buffer` of category `category`.
             *
             * A source mark is a [class`Gtk`.TextMark] but organized into categories.
             * Depending on the category a pixbuf can be specified that will be displayed
             * along the line of the mark.
             *
             * Like a [class`Gtk`.TextMark], a [class`Mark]` can be anonymous if the
             * passed `name` is %NULL.  Also, the buffer owns the marks so you
             * shouldn't unreference it.
             *
             * Marks always have left gravity and are moved to the beginning of
             * the line when the user deletes the line they were in.
             *
             * Typical uses for a source mark are bookmarks, breakpoints, current
             * executing instruction indication in a source file, etc..
             * @param name the name of the mark, or %NULL.
             * @param category a string defining the mark category.
             * @param where location to place the mark.
             * @returns a new [class@Mark], owned by the buffer.
             */
            create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;
            /**
             * Forces buffer to analyze and highlight the given area synchronously.
             *
             * **Note**:
             *
             * This is a potentially slow operation and should be used only
             * when you need to make sure that some text not currently
             * visible is highlighted, for instance before printing.
             * @param start start of the area to highlight.
             * @param end end of the area to highlight.
             */
            ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * Moves `iter` to the position of the next [class`Mark]` of the given
             * `category`.
             *
             * Returns %TRUE if `iter` was moved. If `category` is NULL, the
             * next source mark can be of any category.
             * @param iter an iterator.
             * @param category category to search for, or %NULL
             * @returns whether `iter` was moved.
             */
            forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];
            /**
             * Get all defined context classes at `iter`.
             *
             * See the [class`Buffer]` description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @returns a new %NULL terminated array of context class names. Use g_strfreev() to free the array if it is no longer needed.
             */
            get_context_classes_at_iter(iter: Gtk.TextIter): string[];
            /**
             * Determines whether bracket match highlighting is activated for the
             * source buffer.
             * @returns %TRUE if the source buffer will highlight matching brackets.
             */
            get_highlight_matching_brackets(): boolean;
            /**
             * Determines whether syntax highlighting is activated in the source
             * buffer.
             * @returns %TRUE if syntax highlighting is enabled, %FALSE otherwise.
             */
            get_highlight_syntax(): boolean;
            get_implicit_trailing_newline(): boolean;
            /**
             * Returns the [class`Language]` associated with the buffer,
             * see [method`Buffer`.set_language].
             *
             * The returned object should not be unreferenced by the user.
             * @returns the [class@Language] associated with the buffer, or %NULL.
             */
            get_language(): Language | null;
            get_loading(): boolean;
            /**
             * Returns the list of marks of the given category at `iter`.
             *
             * If `category` is %NULL it returns all marks at `iter`.
             * @param iter an iterator.
             * @param category category to search for, or %NULL
             * @returns a newly allocated #GSList.
             */
            get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[];
            /**
             * Returns the list of marks of the given category at `line`.
             *
             * If `category` is %NULL, all marks at `line` are returned.
             * @param line a line number.
             * @param category category to search for, or %NULL
             * @returns a newly allocated #GSList.
             */
            get_source_marks_at_line(line: number, category?: string | null): Mark[];
            /**
             * Returns the [class`StyleScheme]` associated with the buffer,
             * see [method`Buffer`.set_style_scheme].
             *
             * The returned object should not be unreferenced by the user.
             * @returns the [class@StyleScheme] associated with the buffer, or %NULL.
             */
            get_style_scheme(): StyleScheme | null;
            /**
             * Moves backward to the next toggle (on or off) of the context class.
             *
             * If no matching context class toggles are found, returns %FALSE, otherwise %TRUE.
             * Does not return toggles located at `iter,` only toggles after `iter`. Sets
             * `iter` to the location of the toggle, or to the end of the buffer if no
             * toggle is found.
             *
             * See the [class`Buffer]` description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @param context_class the context class.
             * @returns whether we found a context class toggle before @iter
             */
            iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
            /**
             * Moves forward to the next toggle (on or off) of the context class.
             *
             * If no matching context class toggles are found, returns %FALSE, otherwise %TRUE.
             * Does not return toggles located at `iter,` only toggles after `iter`. Sets
             * `iter` to the location of the toggle, or to the end of the buffer if no
             * toggle is found.
             *
             * See the [class`Buffer]` description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @param context_class the context class.
             * @returns whether we found a context class toggle after @iter
             */
            iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
            /**
             * Check if the class `context_class` is set on `iter`.
             *
             * See the [class`Buffer]` description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @param context_class class to search for.
             * @returns whether @iter has the context class.
             */
            iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
            /**
             * Joins the lines of text between the specified iterators.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             */
            join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * Remove all marks of `category` between `start` and `end` from the buffer.
             *
             * If `category` is NULL, all marks in the range will be removed.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             * @param category category to search for, or %NULL.
             */
            remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void;
            /**
             * Controls the bracket match highlighting function in the buffer.
             *
             * If activated, when you position your cursor over a bracket character
             * (a parenthesis, a square bracket, etc.) the matching opening or
             * closing bracket character will be highlighted.
             * @param highlight %TRUE if you want matching brackets highlighted.
             */
            set_highlight_matching_brackets(highlight: boolean): void;
            /**
             * Controls whether syntax is highlighted in the buffer.
             *
             * If `highlight` is %TRUE, the text will be highlighted according to the syntax
             * patterns specified in the [class`Language]` set with [method`Buffer`.set_language].
             *
             * If `highlight` is %FALSE, syntax highlighting is disabled and all the
             * [class`Gtk`.TextTag] objects that have been added by the syntax highlighting engine
             * are removed from the buffer.
             * @param highlight %TRUE to enable syntax highlighting, %FALSE to disable it.
             */
            set_highlight_syntax(highlight: boolean): void;
            /**
             * Sets whether the `buffer` has an implicit trailing newline.
             *
             * If an explicit trailing newline is present in a [class`Gtk`.TextBuffer], [class`Gtk`.TextView]
             * shows it as an empty line. This is generally not what the user expects.
             *
             * If `implicit_trailing_newline` is %TRUE (the default value):
             *  - when a [class`FileLoader]` loads the content of a file into the `buffer,`
             *    the trailing newline (if present in the file) is not inserted into the
             *    `buffer`.
             *  - when a [class`FileSaver]` saves the content of the `buffer` into a file, a
             *    trailing newline is added to the file.
             *
             * On the other hand, if `implicit_trailing_newline` is %FALSE, the file's
             * content is not modified when loaded into the `buffer,` and the `buffer'`s
             * content is not modified when saved into a file.
             * @param implicit_trailing_newline the new value.
             */
            set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
            /**
             * Associates a [class`Language]` with the buffer.
             *
             * Note that a [class`Language]` affects not only the syntax highlighting, but
             * also the [context classes](./class.Buffer.html#context-classes). If you want to disable just the
             * syntax highlighting, see [method`Buffer`.set_highlight_syntax].
             *
             * The buffer holds a reference to `language`.
             * @param language a #GtkSourceLanguage to set, or %NULL.
             */
            set_language(language?: Language | null): void;
            /**
             * Sets a [class`StyleScheme]` to be used by the buffer and the view.
             *
             * Note that a [class`StyleScheme]` affects not only the syntax highlighting,
             * but also other [class`View]` features such as highlighting the current line,
             * matching brackets, the line numbers, etc.
             *
             * Instead of setting a %NULL `scheme,` it is better to disable syntax
             * highlighting with [method`Buffer`.set_highlight_syntax], and setting the
             * [class`StyleScheme]` with the "classic" or "tango" ID, because those two
             * style schemes follow more closely the GTK theme (for example for the
             * background color).
             *
             * The buffer holds a reference to `scheme`.
             * @param scheme a #GtkSourceStyleScheme or %NULL.
             */
            set_style_scheme(scheme?: StyleScheme | null): void;
            /**
             * Sort the lines of text between the specified iterators.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             * @param flags #GtkSourceSortFlags specifying how the sort should behave
             * @param column sort considering the text starting at the given column
             */
            sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;
        }

        module Completion {
            // Signal callback interfaces

            interface Hide {
                (): void;
            }

            interface ProviderAdded {
                (provider: CompletionProvider): void;
            }

            interface ProviderRemoved {
                (provider: CompletionProvider): void;
            }

            interface Show {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Gtk.TextView;
                page_size: number;
                pageSize: number;
                remember_info_visibility: boolean;
                rememberInfoVisibility: boolean;
                select_on_show: boolean;
                selectOnShow: boolean;
                show_icons: boolean;
                showIcons: boolean;
                view: View;
            }
        }

        /**
         * Main Completion Object.
         *
         * The completion system helps the user when they writes some text,
         * such as words, command names, functions, and suchlike. Proposals can
         * be shown, to complete the text the user is writing. Each proposal can
         * contain an additional piece of information (for example
         * documentation), that is displayed when the "Details" button is
         * clicked.
         *
         * Proposals are created via a [iface`CompletionProvider]`. There can
         * be for example a provider to complete words (see [class`CompletionWords]`),
         * another provider for the completion of
         * function names, etc. To add a provider, call
         * [method`Completion`.add_provider].
         *
         * The [iface`CompletionProposal]` interface represents a proposal.
         *
         * If a proposal contains extra information (see
         * %GTK_SOURCE_COMPLETION_COLUMN_DETAILS), it will be
         * displayed in a supplemental details window, which appears when
         * the "Details" button is clicked.
         *
         * Each [class`View]` object is associated with a [class`Completion]`
         * instance. This instance can be obtained with
         * [method`View`.get_completion]. The [class`View]` class contains also the
         * [signal`View:`:show-completion] signal.
         *
         * A same [iface`CompletionProvider]` object can be used for several
         * `GtkSourceCompletion`'s.
         */
        class Completion extends GObject.Object {
            static $gtype: GObject.GType<Completion>;

            // Properties

            /**
             * The #GtkTextBuffer for the #GtkSourceCompletion:view.
             * This is a convenience property for providers.
             */
            get buffer(): Gtk.TextView;
            /**
             * The number of rows to display to the user before scrolling.
             */
            get page_size(): number;
            set page_size(val: number);
            /**
             * The number of rows to display to the user before scrolling.
             */
            get pageSize(): number;
            set pageSize(val: number);
            /**
             * Determines whether the visibility of the info window should be saved when the
             * completion is hidden, and restored when the completion is shown again.
             */
            get remember_info_visibility(): boolean;
            set remember_info_visibility(val: boolean);
            /**
             * Determines whether the visibility of the info window should be saved when the
             * completion is hidden, and restored when the completion is shown again.
             */
            get rememberInfoVisibility(): boolean;
            set rememberInfoVisibility(val: boolean);
            /**
             * Determines whether the first proposal should be selected when the completion
             * is first shown.
             */
            get select_on_show(): boolean;
            set select_on_show(val: boolean);
            /**
             * Determines whether the first proposal should be selected when the completion
             * is first shown.
             */
            get selectOnShow(): boolean;
            set selectOnShow(val: boolean);
            /**
             * The "show-icons" property denotes if icons should be displayed within
             * the list of completions presented to the user.
             */
            get show_icons(): boolean;
            set show_icons(val: boolean);
            /**
             * The "show-icons" property denotes if icons should be displayed within
             * the list of completions presented to the user.
             */
            get showIcons(): boolean;
            set showIcons(val: boolean);
            /**
             * The "view" property is the #GtkTextView for which this #GtkSourceCompletion
             * is providing completion features.
             */
            get view(): View;

            // Constructors

            constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'hide', callback: (_source: this) => void): number;
            connect_after(signal: 'hide', callback: (_source: this) => void): number;
            emit(signal: 'hide'): void;
            connect(signal: 'provider-added', callback: (_source: this, provider: CompletionProvider) => void): number;
            connect_after(
                signal: 'provider-added',
                callback: (_source: this, provider: CompletionProvider) => void,
            ): number;
            emit(signal: 'provider-added', provider: CompletionProvider): void;
            connect(
                signal: 'provider-removed',
                callback: (_source: this, provider: CompletionProvider) => void,
            ): number;
            connect_after(
                signal: 'provider-removed',
                callback: (_source: this, provider: CompletionProvider) => void,
            ): number;
            emit(signal: 'provider-removed', provider: CompletionProvider): void;
            connect(signal: 'show', callback: (_source: this) => void): number;
            connect_after(signal: 'show', callback: (_source: this) => void): number;
            emit(signal: 'show'): void;

            // Static methods

            /**
             * This will add `<b>` tags around matched characters in `haystack`
             * based on `casefold_query`.
             * @param haystack the string to be highlighted
             * @param casefold_query the typed-text used to highlight @haystack
             */
            static fuzzy_highlight(haystack: string, casefold_query: string): Pango.AttrList | null;
            /**
             * This helper function can do a fuzzy match for you giving a haystack and
             * casefolded needle.
             *
             * Casefold your needle using [func`GLib`.utf8_casefold] before
             * running the query.
             *
             * Score will be set with the score of the match upon success. Otherwise,
             * it will be set to zero.
             * @param haystack the string to be searched.
             * @param casefold_needle A g_utf8_casefold() version of the needle.
             */
            static fuzzy_match(haystack: string | null, casefold_needle: string): [boolean, number];

            // Methods

            /**
             * Adds a [iface`CompletionProvider]` to the list of providers to be queried
             * for completion results.
             * @param provider a #GtkSourceCompletionProvider
             */
            add_provider(provider: CompletionProvider): void;
            block_interactive(): void;
            /**
             * Gets the connected [class`View]`'s [class`Buffer]`
             * @returns A #GtkSourceBuffer
             */
            get_buffer(): Buffer;
            get_page_size(): number;
            /**
             * Gets the [class`View]` that owns the [class`Completion]`.
             * @returns A #GtkSourceView
             */
            get_view(): View;
            /**
             * Emits the "hide" signal.
             *
             * When the "hide" signal is emitted, the completion window will be
             * dismissed.
             */
            hide(): void;
            /**
             * Removes a [iface`CompletionProvider]` previously added with
             * [method`Completion`.add_provider].
             * @param provider a #GtkSourceCompletionProvider
             */
            remove_provider(provider: CompletionProvider): void;
            set_page_size(page_size: number): void;
            /**
             * Emits the "show" signal.
             *
             * When the "show" signal is emitted, the completion window will be
             * displayed if there are any results available.
             */
            show(): void;
            unblock_interactive(): void;
        }

        module CompletionCell {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                column: CompletionColumn;
                markup: string;
                paintable: Gdk.Paintable;
                text: string;
                widget: Gtk.Widget;
            }
        }

        /**
         * Widget for single cell of completion proposal.
         *
         * The `GtkSourceCompletionCell` widget provides a container to display various
         * types of information with the completion display.
         *
         * Each proposal may consist of multiple cells depending on the complexity of
         * the proposal. For example, programming language proposals may contain a cell
         * for the "left-hand-side" of an operation along with the "typed-text" for a
         * function name and "parameters". They may also optionally set an icon to
         * signify the kind of result.
         *
         * A [iface`CompletionProvider]` should implement the
         * [vfunc`CompletionProvider`.display] virtual function to control
         * how to convert data from their [iface`CompletionProposal]` to content for
         * the `GtkSourceCompletionCell`.
         */
        class CompletionCell extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<CompletionCell>;

            // Properties

            get column(): CompletionColumn;
            get markup(): string;
            set markup(val: string);
            get paintable(): Gdk.Paintable;
            set paintable(val: Gdk.Paintable);
            get text(): string;
            set text(val: string);
            get widget(): Gtk.Widget;
            set widget(val: Gtk.Widget);

            // Constructors

            constructor(properties?: Partial<CompletionCell.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_column(): CompletionColumn;
            /**
             * Gets the child #GtkWidget, if any.
             * @returns a #GtkWidget or %NULL
             */
            get_widget(): Gtk.Widget | null;
            set_gicon(gicon: Gio.Icon): void;
            set_icon_name(icon_name: string): void;
            set_markup(markup: string): void;
            set_paintable(paintable: Gdk.Paintable): void;
            /**
             * Sets the text for the column cell. Use %NULL to unset.
             * @param text the text to set or %NULL
             */
            set_text(text?: string | null): void;
            set_text_with_attributes(text: string, attrs: Pango.AttrList): void;
            set_widget(child: Gtk.Widget): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module CompletionContext {
            // Signal callback interfaces

            interface ProviderModelChanged {
                (provider: CompletionProvider, model?: Gio.ListModel | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps<A extends GObject.Object = GObject.Object>
                extends GObject.Object.ConstructorProps,
                    Gio.ListModel.ConstructorProps {
                busy: boolean;
                completion: Completion;
                empty: boolean;
            }
        }

        /**
         * The context of a completion.
         *
         * `GtkSourceCompletionContext` contains information about an attept to display
         * completion proposals to the user based on typed text in the [class`View]`.
         *
         * When typing, [class`Completion]` may use registered
         * [iface`CompletionProvider]` to determine if there may be results which
         * could be displayed. If so, a `GtkSourceCompletionContext` is created with
         * information that is provided to the [iface`CompletionProvider]` to populate
         * results which might be useful to the user.
         *
         * [iface`CompletionProvider]` are expected to provide [iface`Gio`.ListModel] with
         * [iface`CompletionProposal]` which may be joined together in a list of
         * results for the user. They are also responsible for how the contents are
         * displayed using [class`CompletionCell]` which allows for some level of
         * customization.
         */
        class CompletionContext<A extends GObject.Object = GObject.Object>
            extends GObject.Object
            implements Gio.ListModel<A>
        {
            static $gtype: GObject.GType<CompletionContext>;

            // Properties

            /**
             * The "busy" property is %TRUE while the completion context is
             * populating completion proposals.
             */
            get busy(): boolean;
            /**
             * The "completion" is the #GtkSourceCompletion that was used to create the context.
             */
            get completion(): Completion;
            /**
             * The "empty" property is %TRUE when there are no results.
             *
             * It will be notified when the first result is added or the last
             * result is removed.
             */
            get empty(): boolean;

            // Constructors

            constructor(properties?: Partial<CompletionContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'provider-model-changed',
                callback: (_source: this, provider: CompletionProvider, model: Gio.ListModel | null) => void,
            ): number;
            connect_after(
                signal: 'provider-model-changed',
                callback: (_source: this, provider: CompletionProvider, model: Gio.ListModel | null) => void,
            ): number;
            emit(signal: 'provider-model-changed', provider: CompletionProvider, model?: Gio.ListModel | null): void;

            // Methods

            /**
             * Gets the mode for which the context was activated.
             */
            get_activation(): CompletionActivation;
            /**
             * Gets the bounds for the completion, which is the beginning of the
             * current word (taking break characters into account) to the current
             * insertion cursor.
             *
             * If `begin` is non-%NULL, it will be set to the start position of the
             * current word being completed.
             *
             * If `end` is non-%NULL, it will be set to the insertion cursor for the
             * current word being completed.
             * @returns %TRUE if the marks are still valid and @begin or @end was set.
             */
            get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
            /**
             * Gets the underlying buffer used by the context.
             *
             * This is a convenience function to get the buffer via the #GtkSourceCompletion
             * property.
             * @returns a #GtkTextBuffer or %NULL
             */
            get_buffer(): Buffer | null;
            /**
             * Gets the "busy" property. This is set to %TRUE while the completion
             * context is actively fetching proposals from registered
             * #GtkSourceCompletionProvider's.
             * @returns %TRUE if the context is busy
             */
            get_busy(): boolean;
            /**
             * Gets the #GtkSourceCompletion that created the context.
             * @returns an #GtkSourceCompletion or %NULL
             */
            get_completion(): Completion | null;
            /**
             * Checks if any proposals have been provided to the context.
             *
             * Out of convenience, this function will return %TRUE if `self` is %NULL.
             * @returns %TRUE if there are no proposals in the context
             */
            get_empty(): boolean;
            /**
             * Gets the language of the underlying buffer, if any.
             * @returns a #GtkSourceLanguage or %NULL
             */
            get_language(): Language | null;
            /**
             * Gets the #GListModel associated with the provider.
             *
             * You can connect to #GtkSourceCompletionContext::model-changed to receive
             * notifications about when the model has been replaced by a new model.
             * @param provider a #GtkSourceCompletionProvider
             * @returns a #GListModel or %NULL
             */
            get_proposals_for_provider(provider: CompletionProvider): Gio.ListModel | null;
            /**
             * Gets the text view for the context.
             * @returns a #GtkSourceView or %NULL
             */
            get_view(): View | null;
            /**
             * Gets the word that is being completed up to the position of the insert mark.
             * @returns a string containing the current word
             */
            get_word(): string;
            /**
             * Gets the providers that are associated with the context.
             * @returns a #GListModel of #GtkSourceCompletionProvider
             */
            list_providers(): Gio.ListModel;
            /**
             * This function allows providers to update their results for a context
             * outside of a call to [method`CompletionProvider`.populate_async].
             *
             * This can be used to immediately return results for a provider while it does
             * additional asynchronous work. Doing so will allow the completions to
             * update while the operation is in progress.
             * @param provider an #GtkSourceCompletionProvider
             * @param results a #GListModel or %NULL
             */
            set_proposals_for_provider(provider: CompletionProvider, results?: Gio.ListModel | null): void;

            // Inherited methods
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             * @returns the #GType of the items contained in @list.
             */
            get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             * @returns the number of items in @list.
             */
            get_n_items(): number;
            /**
             * Get the item at `position`.
             *
             * If `position` is greater than the number of items in `list,` %NULL is
             * returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.
             *
             * This function is meant to be used by language bindings in place
             * of g_list_model_get_item().
             *
             * See also: g_list_model_get_n_items()
             * @param position the position of the item to fetch
             * @returns the object at @position.
             */
            get_item(position: number): A | null;
            /**
             * Emits the #GListModel::items-changed signal on `list`.
             *
             * This function should only be called by classes implementing
             * #GListModel. It has to be called after the internal representation
             * of `list` has been updated, because handlers connected to this signal
             * might query the new state of the list.
             *
             * Implementations must only make changes to the model (as visible to
             * its consumer) in places that will not cause problems for that
             * consumer.  For models that are driven directly by a write API (such
             * as #GListStore), changes can be reported in response to uses of that
             * API.  For models that represent remote data, changes should only be
             * made from a fresh mainloop dispatch.  It is particularly not
             * permitted to make changes in response to a call to the #GListModel
             * consumer API.
             *
             * Stated another way: in general, it is assumed that code making a
             * series of accesses to the model via the API, without returning to the
             * mainloop, and without calling other code, will continue to view the
             * same contents of the model.
             * @param position the position at which @list changed
             * @param removed the number of items removed
             * @param added the number of items added
             */
            items_changed(position: number, removed: number, added: number): void;
            /**
             * Get the item at `position`. If `position` is greater than the number of
             * items in `list,` %NULL is returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.  See g_list_model_get_n_items().
             *
             * The same #GObject instance may not appear more than once in a #GListModel.
             * @param position the position of the item to fetch
             */
            vfunc_get_item(position: number): A | null;
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             */
            vfunc_get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             */
            vfunc_get_n_items(): number;
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

        module CompletionSnippets {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProvider.ConstructorProps {
                priority: number;
                title: string;
            }
        }

        /**
         * A [iface`CompletionProvider]` for the completion of snippets.
         *
         * The `GtkSourceCompletionSnippets` is an example of an implementation of
         * the [iface`CompletionProvider]` interface. The proposals are snippets
         * registered with the [class`SnippetManager]`.
         */
        class CompletionSnippets extends GObject.Object implements CompletionProvider {
            static $gtype: GObject.GType<CompletionSnippets>;

            // Properties

            get priority(): number;
            set priority(val: number);
            get title(): string;
            set title(val: string);

            // Constructors

            constructor(properties?: Partial<CompletionSnippets.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CompletionSnippets;

            // Inherited methods
            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            activate(context: CompletionContext, proposal: CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            get_priority(context: CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             * @returns a title for the provider or %NULL
             */
            get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            key_activates(
                context: CompletionContext,
                proposal: CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @returns a #GPtrArray of #GtkSourceCompletionProposal or %NULL.
             */
            list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            populate_async(
                context: CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             * @returns a #GListModel of #GtkSourceCompletionProposal
             */
            populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            refilter(context: CompletionContext, model: Gio.ListModel): void;
            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            vfunc_get_priority(context: CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             */
            vfunc_get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            vfunc_key_activates(
                context: CompletionContext,
                proposal: CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_list_alternates(
                context: CompletionContext,
                proposal: CompletionProposal,
            ): CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            vfunc_populate_async(
                context: CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             */
            vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
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

        module CompletionWords {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProvider.ConstructorProps {
                minimum_word_size: number;
                minimumWordSize: number;
                priority: number;
                proposals_batch_size: number;
                proposalsBatchSize: number;
                scan_batch_size: number;
                scanBatchSize: number;
                title: string;
            }
        }

        /**
         * A [iface`CompletionProvider]` for the completion of words.
         *
         * The `GtkSourceCompletionWords` is an example of an implementation of
         * the [iface`CompletionProvider]` interface. The proposals are words
         * appearing in the registered [class`Gtk`.TextBuffer]s.
         */
        class CompletionWords extends GObject.Object implements CompletionProvider {
            static $gtype: GObject.GType<CompletionWords>;

            // Properties

            get minimum_word_size(): number;
            set minimum_word_size(val: number);
            get minimumWordSize(): number;
            set minimumWordSize(val: number);
            get priority(): number;
            set priority(val: number);
            get proposals_batch_size(): number;
            set proposals_batch_size(val: number);
            get proposalsBatchSize(): number;
            set proposalsBatchSize(val: number);
            get scan_batch_size(): number;
            set scan_batch_size(val: number);
            get scanBatchSize(): number;
            set scanBatchSize(val: number);
            get title(): string;
            set title(val: string);

            // Constructors

            constructor(properties?: Partial<CompletionWords.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](title?: string | null): CompletionWords;

            // Methods

            /**
             * Registers `buffer` in the `words` provider.
             * @param buffer a #GtkTextBuffer
             */
            register(buffer: Gtk.TextBuffer): void;
            /**
             * Unregisters `buffer` from the `words` provider.
             * @param buffer a #GtkTextBuffer
             */
            unregister(buffer: Gtk.TextBuffer): void;

            // Inherited methods
            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            activate(context: CompletionContext, proposal: CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            get_priority(context: CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             * @returns a title for the provider or %NULL
             */
            get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            key_activates(
                context: CompletionContext,
                proposal: CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @returns a #GPtrArray of #GtkSourceCompletionProposal or %NULL.
             */
            list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            populate_async(
                context: CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             * @returns a #GListModel of #GtkSourceCompletionProposal
             */
            populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            refilter(context: CompletionContext, model: Gio.ListModel): void;
            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            vfunc_get_priority(context: CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             */
            vfunc_get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            vfunc_key_activates(
                context: CompletionContext,
                proposal: CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_list_alternates(
                context: CompletionContext,
                proposal: CompletionProposal,
            ): CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            vfunc_populate_async(
                context: CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             */
            vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
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

        module File {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                compression_type: CompressionType;
                compressionType: CompressionType;
                encoding: Encoding;
                location: Gio.File;
                newline_type: NewlineType;
                newlineType: NewlineType;
                read_only: boolean;
                readOnly: boolean;
            }
        }

        /**
         * On-disk representation of a [class`Buffer]`.
         *
         * A `GtkSourceFile` object is the on-disk representation of a [class`Buffer]`.
         * With a `GtkSourceFile`, you can create and configure a [class`FileLoader]`
         * and [class`FileSaver]` which take by default the values of the
         * `GtkSourceFile` properties (except for the file loader which auto-detect some
         * properties). On a successful load or save operation, the `GtkSourceFile`
         * properties are updated. If an operation fails, the `GtkSourceFile` properties
         * have still the previous valid values.
         */
        class File extends GObject.Object {
            static $gtype: GObject.GType<File>;

            // Properties

            /**
             * The compression type.
             */
            get compression_type(): CompressionType;
            /**
             * The compression type.
             */
            get compressionType(): CompressionType;
            /**
             * The character encoding, initially %NULL. After a successful file
             * loading or saving operation, the encoding is non-%NULL.
             */
            get encoding(): Encoding;
            /**
             * The location.
             */
            get location(): Gio.File;
            set location(val: Gio.File);
            /**
             * The line ending type.
             */
            get newline_type(): NewlineType;
            /**
             * The line ending type.
             */
            get newlineType(): NewlineType;
            /**
             * Whether the file is read-only or not. The value of this property is
             * not updated automatically (there is no file monitors).
             */
            get read_only(): boolean;
            /**
             * Whether the file is read-only or not. The value of this property is
             * not updated automatically (there is no file monitors).
             */
            get readOnly(): boolean;

            // Constructors

            constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): File;

            // Methods

            /**
             * Checks synchronously the file on disk, to know whether the file is externally
             * modified, or has been deleted, and whether the file is read-only.
             *
             * #GtkSourceFile doesn't create a [class`Gio`.FileMonitor] to track those properties, so
             * this function needs to be called instead. Creating lots of [class`Gio`.FileMonitor]'s
             * would take lots of resources.
             *
             * Since this function is synchronous, it is advised to call it only on local
             * files. See [method`File`.is_local].
             */
            check_file_on_disk(): void;
            get_compression_type(): CompressionType;
            /**
             * The encoding is initially %NULL. After a successful file loading or saving
             * operation, the encoding is non-%NULL.
             * @returns the character encoding.
             */
            get_encoding(): Encoding;
            get_location(): Gio.File;
            get_newline_type(): NewlineType;
            /**
             * Returns whether the file has been deleted. If the
             * [property`File:`location] is %NULL, returns %FALSE.
             *
             * To have an up-to-date value, you must first call
             * [method`File`.check_file_on_disk].
             * @returns whether the file has been deleted.
             */
            is_deleted(): boolean;
            /**
             * Returns whether the file is externally modified. If the
             * [property`File:`location] is %NULL, returns %FALSE.
             *
             * To have an up-to-date value, you must first call
             * [method`File`.check_file_on_disk].
             * @returns whether the file is externally modified.
             */
            is_externally_modified(): boolean;
            /**
             * Returns whether the file is local. If the [property`File:`location] is %NULL,
             * returns %FALSE.
             * @returns whether the file is local.
             */
            is_local(): boolean;
            /**
             * Returns whether the file is read-only. If the
             * [property`File:`location] is %NULL, returns %FALSE.
             *
             * To have an up-to-date value, you must first call
             * [method`File`.check_file_on_disk].
             * @returns whether the file is read-only.
             */
            is_readonly(): boolean;
            /**
             * Sets the location.
             * @param location the new #GFile, or %NULL.
             */
            set_location(location?: Gio.File | null): void;
        }

        module FileLoader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Buffer;
                file: File;
                input_stream: Gio.InputStream;
                inputStream: Gio.InputStream;
                location: Gio.File;
            }
        }

        /**
         * Load a file into a GtkSourceBuffer.
         *
         * A `GtkSourceFileLoader` object permits to load the contents of a [iface`Gio`.File] or a
         * [class`Gio`.InputStream] into a [class`Buffer]`.
         *
         * A file loader should be used only for one load operation, including errors
         * handling. If an error occurs, you can reconfigure the loader and relaunch the
         * operation with [method`FileLoader`.load_async].
         *
         * Running a `GtkSourceFileLoader` is an undoable action for the
         * [class`Buffer]`.
         *
         * After a file loading, the buffer is reset to the contents provided by the
         * [iface`Gio`.File] or [class`Gio`.InputStream], so the buffer is set as “unmodified”, that is,
         * [method`Gtk`.TextBuffer.set_modified] is called with %FALSE. If the contents isn't
         * saved somewhere (for example if you load from stdin), then you should
         * probably call [method`Gtk`.TextBuffer.set_modified] with %TRUE after calling
         * [method`FileLoader`.load_finish].
         */
        class FileLoader extends GObject.Object {
            static $gtype: GObject.GType<FileLoader>;

            // Properties

            /**
             * The #GtkSourceBuffer to load the contents into. The
             * #GtkSourceFileLoader object has a weak reference to the buffer.
             */
            get buffer(): Buffer;
            /**
             * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
             * reference to the file.
             */
            get file(): File;
            /**
             * The #GInputStream to load. Useful for reading stdin. If this property
             * is set, the #GtkSourceFileLoader:location property is ignored.
             */
            get input_stream(): Gio.InputStream;
            /**
             * The #GInputStream to load. Useful for reading stdin. If this property
             * is set, the #GtkSourceFileLoader:location property is ignored.
             */
            get inputStream(): Gio.InputStream;
            /**
             * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
             * %NULL, by default the location is taken from the #GtkSourceFile at
             * construction time.
             */
            get location(): Gio.File;

            // Constructors

            constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer, file: File): FileLoader;

            static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

            // Methods

            get_buffer(): Buffer;
            get_compression_type(): CompressionType;
            get_encoding(): Encoding;
            get_file(): File;
            get_input_stream(): Gio.InputStream | null;
            get_location(): Gio.File | null;
            get_newline_type(): NewlineType;
            /**
             * Loads asynchronously the file or input stream contents into the [class`Buffer]`.
             *
             * See the [iface`Gio`.AsyncResult] documentation to know how to use this
             * function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with progress information, or %NULL if progress   information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
             */
            load_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                progress_callback_notify?: GLib.DestroyNotify | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a file loading started with [method`FileLoader`.load_async].
             *
             * If the contents has been loaded, the following [class`File]` properties will
             * be updated: the location, the encoding, the newline type and the compression
             * type.
             * @param result a #GAsyncResult.
             * @returns whether the contents has been loaded successfully.
             */
            load_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the candidate encodings for the file loading.
             *
             * The encodings are tried in the same order as the list.
             *
             * For convenience, `candidate_encodings` can contain duplicates. Only the first
             * occurrence of a duplicated encoding is kept in the list.
             *
             * By default the candidate encodings are (in that order in the list):
             *
             * 1. If set, the [class`File]`'s encoding as returned by [method`File`.get_encoding].
             * 2. The default candidates as returned by [func`Encoding`.get_default_candidates].
             * @param candidate_encodings a list of   #GtkSourceEncoding<!-- -->s.
             */
            set_candidate_encodings(candidate_encodings: Encoding[]): void;
        }

        module FileSaver {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Buffer;
                compression_type: CompressionType;
                compressionType: CompressionType;
                encoding: Encoding;
                file: File;
                flags: FileSaverFlags;
                location: Gio.File;
                newline_type: NewlineType;
                newlineType: NewlineType;
            }
        }

        /**
         * Save a [class`Buffer]` into a file.
         *
         * A `GtkSourceFileSaver` object permits to save a [class`Buffer]` into a
         * [iface`Gio`.File].
         *
         * A file saver should be used only for one save operation, including errors
         * handling. If an error occurs, you can reconfigure the saver and relaunch the
         * operation with [method`FileSaver`.save_async].
         */
        class FileSaver extends GObject.Object {
            static $gtype: GObject.GType<FileSaver>;

            // Properties

            /**
             * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
             * weak reference to the buffer.
             */
            get buffer(): Buffer;
            /**
             * The compression type.
             */
            get compression_type(): CompressionType;
            set compression_type(val: CompressionType);
            /**
             * The compression type.
             */
            get compressionType(): CompressionType;
            set compressionType(val: CompressionType);
            /**
             * The file's encoding.
             */
            get encoding(): Encoding;
            set encoding(val: Encoding);
            /**
             * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
             * reference to the file.
             */
            get file(): File;
            /**
             * File saving flags.
             */
            get flags(): FileSaverFlags;
            set flags(val: FileSaverFlags);
            /**
             * The #GFile where to save the buffer. By default the location is taken
             * from the #GtkSourceFile at construction time.
             */
            get location(): Gio.File;
            /**
             * The newline type.
             */
            get newline_type(): NewlineType;
            set newline_type(val: NewlineType);
            /**
             * The newline type.
             */
            get newlineType(): NewlineType;
            set newlineType(val: NewlineType);

            // Constructors

            constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer, file: File): FileSaver;

            static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

            // Methods

            get_buffer(): Buffer;
            get_compression_type(): CompressionType;
            get_encoding(): Encoding;
            get_file(): File;
            get_flags(): FileSaverFlags;
            get_location(): Gio.File;
            get_newline_type(): NewlineType;
            /**
             * Saves asynchronously the buffer into the file.
             *
             * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with progress information, or %NULL if progress   information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
             */
            save_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                progress_callback_notify?: GLib.DestroyNotify | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a file saving started with [method`FileSaver`.save_async].
             *
             * If the file has been saved successfully, the following [class`File]`
             * properties will be updated: the location, the encoding, the newline type and
             * the compression type.
             *
             * Since the 3.20 version, [method`Gtk`.TextBuffer.set_modified] is called with %FALSE
             * if the file has been saved successfully.
             * @param result a #GAsyncResult.
             * @returns whether the file was saved successfully.
             */
            save_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the compression type. By default the compression type is taken from the
             * #GtkSourceFile.
             * @param compression_type the new compression type.
             */
            set_compression_type(compression_type: CompressionType): void;
            /**
             * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
             *
             * By default the encoding is taken from the #GtkSourceFile.
             * @param encoding the new encoding, or %NULL for UTF-8.
             */
            set_encoding(encoding?: Encoding | null): void;
            set_flags(flags: FileSaverFlags): void;
            /**
             * Sets the newline type. By default the newline type is taken from the
             * #GtkSourceFile.
             * @param newline_type the new newline type.
             */
            set_newline_type(newline_type: NewlineType): void;
        }

        module Gutter {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                view: View;
                window_type: Gtk.TextWindowType;
                windowType: Gtk.TextWindowType;
            }
        }

        /**
         * Gutter object for [class`View]`.
         *
         * The `GtkSourceGutter` object represents the left or right gutter of the text
         * view. It is used by [class`View]` to draw the line numbers and
         * [class`Mark]`s that might be present on a line. By packing
         * additional [class`GutterRenderer]` objects in the gutter, you can extend the
         * gutter with your own custom drawings.
         *
         * To get a `GtkSourceGutter`, use the [method`View`.get_gutter] function.
         *
         * The gutter works very much the same way as cells rendered in a [class`Gtk`.TreeView].
         * The concept is similar, with the exception that the gutter does not have an
         * underlying [iface`Gtk`.TreeModel]. The builtin line number renderer is at position
         * %GTK_SOURCE_VIEW_GUTTER_POSITION_LINES (-30) and the marks renderer is at
         * %GTK_SOURCE_VIEW_GUTTER_POSITION_MARKS (-20). The gutter sorts the renderers
         * in ascending order, from left to right. So the marks are displayed on the
         * right of the line numbers.
         */
        class Gutter extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<Gutter>;

            // Properties

            /**
             * The #GtkSourceView of the gutter.
             */
            get view(): View;
            /**
             * The text window type on which the window is placed.
             */
            get window_type(): Gtk.TextWindowType;
            /**
             * The text window type on which the window is placed.
             */
            get windowType(): Gtk.TextWindowType;

            // Constructors

            constructor(properties?: Partial<Gutter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_view(): View;
            /**
             * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
             * claims its ownership. Otherwise just increases renderer's reference count.
             * `renderer` cannot be already inserted to another gutter.
             * @param renderer a gutter renderer (must inherit from #GtkSourceGutterRenderer).
             * @param position the renderer position.
             * @returns %TRUE if operation succeeded. Otherwise %FALSE.
             */
            insert(renderer: GutterRenderer, position: number): boolean;
            remove(renderer: GutterRenderer): void;
            /**
             * Reorders `renderer` in `gutter` to new `position`.
             * @param renderer a #GtkCellRenderer.
             * @param position the new renderer position.
             */
            reorder(renderer: GutterRenderer, position: number): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module GutterLines {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Collected information about visible lines.
         *
         * The `GtkSourceGutterLines` object is used to collect information about
         * visible lines.
         *
         * Use this from your [signal`GutterRenderer:`:query-data] to collect the
         * necessary information on visible lines. Doing so reduces the number of
         * passes through the text btree allowing GtkSourceView to reach more
         * frames-per-second while performing kinetic scrolling.
         */
        class GutterLines extends GObject.Object {
            static $gtype: GObject.GType<GutterLines>;

            // Constructors

            constructor(properties?: Partial<GutterLines.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Adds the class `name` to `line`.
             *
             * `name` will be converted to a [alias`GLib`.Quark] as part of this process. A
             * faster version of this function is available via
             * [method`GutterLines`.add_qclass] for situations where the [alias`GLib`.Quark] is
             * known ahead of time.
             * @param line a line number starting from zero
             * @param name a class name
             */
            add_class(line: number, name: string): void;
            /**
             * Adds the class denoted by `qname` to `line`.
             *
             * You may check if a line has `qname` by calling
             * [method`GutterLines`.has_qclass].
             *
             * You can remove `qname` by calling
             * [method`GutterLines`.remove_qclass].
             * @param line a line number starting from zero
             * @param qname a class name as a #GQuark
             */
            add_qclass(line: number, qname: GLib.Quark): void;
            /**
             * Gets the [class`Gtk`.TextBuffer] that the `GtkSourceGutterLines` represents.
             * @returns a #GtkTextBuffer
             */
            get_buffer(): Gtk.TextBuffer;
            /**
             * Gets the line number (starting from 0) for the first line that is
             * user visible.
             * @returns a line number starting from 0
             */
            get_first(): number;
            /**
             * Gets a #GtkTextIter for the current buffer at `line`
             * @param line the line number
             */
            get_iter_at_line(line: number): Gtk.TextIter;
            /**
             * Gets the line number (starting from 0) for the last line that is
             * user visible.
             * @returns a line number starting from 0
             */
            get_last(): number;
            /**
             * Gets the Y range for a line based on `mode`.
             *
             * The value for `y` is relative to the renderers widget coordinates.
             * @param line a line number starting from zero
             * @param mode a #GtkSourceGutterRendererAlignmentMode
             */
            get_line_yrange(line: number, mode: GutterRendererAlignmentMode): [number, number];
            /**
             * Gets the [class`Gtk`.TextView] that the `GtkSourceGutterLines` represents.
             * @returns a #GtkTextView
             */
            get_view(): Gtk.TextView;
            /**
             * Checks to see if the line has any GQuark classes set. This can be
             * used to help renderer implementations avoid work if nothing has
             * been set on the class.
             * @param line a line contained within @lines
             * @returns %TRUE if any quark was set for the line
             */
            has_any_class(line: number): boolean;
            /**
             * Checks to see if [method`GutterLines`.add_class] was called with
             * the `name` for `line`.
             *
             * A faster version of this function is provided via
             * [method`GutterLines`.has_qclass] for situations where the quark
             * is known ahead of time.
             * @param line a line number starting from zero
             * @param name a class name that may be converted, to a #GQuark
             * @returns %TRUE if @line contains @name
             */
            has_class(line: number, name: string): boolean;
            /**
             * Checks to see if [method`GutterLines`.add_qclass] was called with
             * the quark denoted by `qname` for `line`.
             * @param line a line number starting from zero
             * @param qname a #GQuark containing the class name
             * @returns %TRUE if @line contains @qname
             */
            has_qclass(line: number, qname: GLib.Quark): boolean;
            /**
             * Checks to see if `line` contains the insertion cursor.
             * @param line a line number starting from zero
             * @returns %TRUE if the insertion cursor is on @line
             */
            is_cursor(line: number): boolean;
            /**
             * Checks to see if `line` is marked as prelit. Generally, this means
             * the mouse pointer is over the line within the gutter.
             * @param line a line number starting from zero
             * @returns %TRUE if the line is prelit
             */
            is_prelit(line: number): boolean;
            /**
             * Checks to see if the view had a selection and if that selection overlaps
             * `line` in some way.
             * @param line a line number starting from zero
             * @returns %TRUE if the line contains a selection
             */
            is_selected(line: number): boolean;
            /**
             * Removes the class matching `name` from `line`.
             *
             * A faster version of this function is available via
             * [method`GutterLines`.remove_qclass] for situations where the
             * #GQuark is known ahead of time.
             * @param line a line number starting from zero
             * @param name a class name
             */
            remove_class(line: number, name: string): void;
            /**
             * Reverses a call to [method`GutterLines`.add_qclass] by removing
             * the [alias`GLib`.Quark] matching `qname`.
             * @param line a line number starting from zero
             * @param qname a #GQuark to remove from @line
             */
            remove_qclass(line: number, qname: GLib.Quark): void;
        }

        module GutterRenderer {
            // Signal callback interfaces

            interface Activate {
                (
                    iter: Gtk.TextIter,
                    area: Gdk.Rectangle,
                    button: number,
                    state: Gdk.ModifierType,
                    n_presses: number,
                ): void;
            }

            interface QueryActivatable {
                (iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;
            }

            interface QueryData {
                (object: GObject.Object, p0: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                alignment_mode: GutterRendererAlignmentMode;
                alignmentMode: GutterRendererAlignmentMode;
                lines: GutterLines;
                view: Gtk.TextView;
                xalign: number;
                xpad: number;
                yalign: number;
                ypad: number;
            }
        }

        /**
         * Gutter cell renderer.
         *
         * A `GtkSourceGutterRenderer` represents a column in a [class`Gutter]`. The
         * column contains one cell for each visible line of the [class`Gtk`.TextBuffer]. Due to
         * text wrapping, a cell can thus span multiple lines of the [class`Gtk`.TextView]. In
         * this case, [enum`GutterRendererAlignmentMode]` controls the alignment of
         * the cell.
         *
         * The gutter renderer is a [class`Gtk`.Widget] and is measured using the normal widget
         * measurement facilities. The width of the gutter will be determined by the
         * measurements of the gutter renderers.
         *
         * The width of a gutter renderer generally takes into account the entire text
         * buffer. For instance, to display the line numbers, if the buffer contains 100
         * lines, the gutter renderer will always set its width such as three digits can
         * be printed, even if only the first 20 lines are shown. Another strategy is to
         * take into account only the visible lines.  In this case, only two digits are
         * necessary to display the line numbers of the first 20 lines. To take another
         * example, the gutter renderer for [class`Mark]`s doesn't need to take
         * into account the text buffer to announce its width. It only depends on the
         * icons size displayed in the gutter column.
         *
         * When the available size to render a cell is greater than the required size to
         * render the cell contents, the cell contents can be aligned horizontally and
         * vertically with [method`GutterRenderer`.set_alignment_mode].
         *
         * The cells rendering occurs using [vfunc`Gtk`.Widget.snapshot]. Implementations
         * should use `gtk_source_gutter_renderer_get_lines()` to retrieve information
         * about the lines to be rendered. To help with aligning content which takes
         * into account the padding and alignment of a cell, implementations may call
         * [method`GutterRenderer`.align_cell] for a given line number with the
         * width and height measurement of the content they width to render.
         */
        abstract class GutterRenderer
            extends Gtk.Widget
            implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
        {
            static $gtype: GObject.GType<GutterRenderer>;

            // Properties

            /**
             * The alignment mode of the renderer.
             *
             * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
             * the alignment should work on either the full cell, the first line or the last line.
             */
            get alignment_mode(): GutterRendererAlignmentMode;
            set alignment_mode(val: GutterRendererAlignmentMode);
            /**
             * The alignment mode of the renderer.
             *
             * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
             * the alignment should work on either the full cell, the first line or the last line.
             */
            get alignmentMode(): GutterRendererAlignmentMode;
            set alignmentMode(val: GutterRendererAlignmentMode);
            /**
             * Contains information about the lines to be rendered.
             *
             * It should be used by #GtkSourceGutterRenderer implementations from [vfunc`Gtk`.Widget.snapshot].
             */
            get lines(): GutterLines;
            /**
             * The view on which the renderer is placed.
             */
            get view(): Gtk.TextView;
            /**
             * The horizontal alignment of the renderer.
             *
             * Set to 0 for a left alignment. 1 for a right alignment. And 0.5 for centering the cells.
             * A value lower than 0 doesn't modify the alignment.
             */
            get xalign(): number;
            set xalign(val: number);
            /**
             * The left and right padding of the renderer.
             */
            get xpad(): number;
            set xpad(val: number);
            /**
             * The vertical alignment of the renderer.
             *
             * Set to 0 for a top alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
             * A value lower than 0 doesn't modify the alignment.
             */
            get yalign(): number;
            set yalign(val: number);
            /**
             * The top and bottom padding of the renderer.
             */
            get ypad(): number;
            set ypad(val: number);

            // Constructors

            constructor(properties?: Partial<GutterRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'activate',
                callback: (
                    _source: this,
                    iter: Gtk.TextIter,
                    area: Gdk.Rectangle,
                    button: number,
                    state: Gdk.ModifierType,
                    n_presses: number,
                ) => void,
            ): number;
            connect_after(
                signal: 'activate',
                callback: (
                    _source: this,
                    iter: Gtk.TextIter,
                    area: Gdk.Rectangle,
                    button: number,
                    state: Gdk.ModifierType,
                    n_presses: number,
                ) => void,
            ): number;
            emit(
                signal: 'activate',
                iter: Gtk.TextIter,
                area: Gdk.Rectangle,
                button: number,
                state: Gdk.ModifierType,
                n_presses: number,
            ): void;
            connect(
                signal: 'query-activatable',
                callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean,
            ): number;
            connect_after(
                signal: 'query-activatable',
                callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean,
            ): number;
            emit(signal: 'query-activatable', iter: Gtk.TextIter, area: Gdk.Rectangle): void;
            connect(
                signal: 'query-data',
                callback: (_source: this, object: GObject.Object, p0: number) => void,
            ): number;
            connect_after(
                signal: 'query-data',
                callback: (_source: this, object: GObject.Object, p0: number) => void,
            ): number;
            emit(signal: 'query-data', object: GObject.Object, p0: number): void;

            // Virtual methods

            /**
             * Emits the [signal`GutterRenderer:`:activate] signal of the renderer. This is
             * called from [class`Gutter]` and should never have to be called manually.
             * @param iter a #GtkTextIter at the start of the line where the renderer is activated
             * @param area a #GdkRectangle of the cell area where the renderer is activated
             * @param button the button that was pressed
             * @param state a #GdkModifierType
             * @param n_presses the number of button presses
             */
            vfunc_activate(
                iter: Gtk.TextIter,
                area: Gdk.Rectangle,
                button: number,
                state: Gdk.ModifierType,
                n_presses: number,
            ): void;
            vfunc_begin(lines: GutterLines): void;
            /**
             * This is called when the text buffer changes for `renderer`.
             * @param old_buffer the old #GtkTextBuffer.
             */
            vfunc_change_buffer(old_buffer?: Buffer | null): void;
            /**
             * This is called when the text view changes for `renderer`.
             * @param old_view the old #GtkTextView.
             */
            vfunc_change_view(old_view?: View | null): void;
            vfunc_end(): void;
            /**
             * Get whether the renderer is activatable at the location provided. This is
             * called from [class`Gutter]` to determine whether a renderer is activatable
             * using the mouse pointer.
             * @param iter a #GtkTextIter at the start of the line to be activated
             * @param area a #GdkRectangle of the cell area to be activated
             */
            vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;
            vfunc_query_data(lines: GutterLines, line: number): void;
            vfunc_snapshot_line(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void;

            // Methods

            /**
             * Emits the [signal`GutterRenderer:`:activate] signal of the renderer. This is
             * called from [class`Gutter]` and should never have to be called manually.
             * @param iter a #GtkTextIter at the start of the line where the renderer is activated
             * @param area a #GdkRectangle of the cell area where the renderer is activated
             * @param button the button that was pressed
             * @param state a #GdkModifierType
             * @param n_presses the number of button presses
             */
            activate(
                iter: Gtk.TextIter,
                area: Gdk.Rectangle,
                button: number,
                state: Gdk.ModifierType,
                n_presses: number,
            ): void;
            // Conflicted with Gtk.Widget.activate
            activate(...args: never[]): any;
            /**
             * Locates where to render content that is `width` x `height` based on
             * the renderers alignment and padding.
             *
             * The location will be placed into `x` and `y` and is relative to the
             * renderer's coordinates.
             *
             * It is encouraged that renderers use this function when snappshotting
             * to ensure consistent placement of their contents.
             * @param line the line number for content
             * @param width the width of the content to draw
             * @param height the height of the content to draw
             */
            align_cell(line: number, width: number, height: number): [number, number];
            /**
             * Get the alignment mode.
             *
             * The alignment mode describes the manner in which the
             * renderer is aligned (see [property`GutterRenderer:`xalign] and
             * [property`GutterRenderer:`yalign]).
             * @returns a #GtkSourceGutterRendererAlignmentMode
             */
            get_alignment_mode(): GutterRendererAlignmentMode;
            /**
             * Gets the [class`Buffer]` for which the gutter renderer is drawing.
             * @returns a #GtkTextBuffer or %NULL
             */
            get_buffer(): Buffer | null;
            /**
             * Get the view associated to the gutter renderer
             * @returns a #GtkSourceView
             */
            get_view(): View;
            /**
             * Gets the `xalign` property.
             *
             * This may be used to adjust where within the cell rectangle the renderer will draw.
             */
            get_xalign(): number;
            /**
             * Gets the `xpad` property.
             *
             * This may be used to adjust the cell rectangle that the renderer will use to draw.
             */
            get_xpad(): number;
            /**
             * Gets the `yalign` property.
             *
             * This may be used to adjust where within the cell rectangle the renderer will draw.
             */
            get_yalign(): number;
            /**
             * Gets the `ypad` property.
             *
             * This may be used to adjust the cell rectangle that the renderer will use to draw.
             */
            get_ypad(): number;
            /**
             * Get whether the renderer is activatable at the location provided. This is
             * called from [class`Gutter]` to determine whether a renderer is activatable
             * using the mouse pointer.
             * @param iter a #GtkTextIter at the start of the line to be activated
             * @param area a #GdkRectangle of the cell area to be activated
             * @returns %TRUE if the renderer can be activated, %FALSE otherwise
             */
            query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;
            /**
             * Set the alignment mode. The alignment mode describes the manner in which the
             * renderer is aligned (see [property`GutterRenderer:`xalign] and
             * [property`GutterRenderer:`yalign]).
             * @param mode a #GtkSourceGutterRendererAlignmentMode
             */
            set_alignment_mode(mode: GutterRendererAlignmentMode): void;
            /**
             * Adjusts the `xalign` property.
             *
             * This may be used to adjust where within the cell rectangle the renderer will draw.
             * @param xalign the Y padding for the drawing cell
             */
            set_xalign(xalign: number): void;
            /**
             * Adjusts the `xpad` property.
             *
             * This may be used to adjust the cell rectangle that the renderer will use to draw.
             * @param xpad the Y padding for the drawing cell
             */
            set_xpad(xpad: number): void;
            /**
             * Adjusts the `yalign` property.
             *
             * This may be used to adjust where within the cell rectangle the renderer will draw.
             * @param yalign the Y padding for the drawing cell
             */
            set_yalign(yalign: number): void;
            /**
             * Adjusts the `ypad` property.
             *
             * This may be used to adjust the cell rectangle that the renderer will use to draw.
             * @param ypad the Y padding for the drawing cell
             */
            set_ypad(ypad: number): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module GutterRendererPixbuf {
            // Constructor properties interface

            interface ConstructorProps
                extends GutterRenderer.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                gicon: Gio.Icon;
                icon_name: string;
                iconName: string;
                paintable: Gdk.Paintable;
                pixbuf: GdkPixbuf.Pixbuf;
            }
        }

        /**
         * Renders a pixbuf in the gutter.
         *
         * A `GtkSourceGutterRendererPixbuf` can be used to render an image in a cell of
         * [class`Gutter]`.
         */
        class GutterRendererPixbuf
            extends GutterRenderer
            implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget
        {
            static $gtype: GObject.GType<GutterRendererPixbuf>;

            // Properties

            get gicon(): Gio.Icon;
            set gicon(val: Gio.Icon);
            get icon_name(): string;
            set icon_name(val: string);
            get iconName(): string;
            set iconName(val: string);
            get paintable(): Gdk.Paintable;
            set paintable(val: Gdk.Paintable);
            get pixbuf(): GdkPixbuf.Pixbuf;
            set pixbuf(val: GdkPixbuf.Pixbuf);

            // Constructors

            constructor(properties?: Partial<GutterRendererPixbuf.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GutterRendererPixbuf;

            // Methods

            /**
             * Get the gicon of the renderer
             * @returns a #GIcon
             */
            get_gicon(): Gio.Icon;
            get_icon_name(): string;
            /**
             * Gets a [iface`Gdk`.Paintable] that was set with
             * [method`GutterRendererPixbuf`.set_paintable]
             * @returns a #GdkPaintable or %NULL
             */
            get_paintable(): Gdk.Paintable | null;
            /**
             * Get the pixbuf of the renderer.
             * @returns a #GdkPixbuf
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            /**
             * Allows overlaying a paintable on top of any other image that
             * has been set for the pixbuf. This will be applied when the
             * widget is next snapshot.
             * @param paintable a #GdkPaintable
             */
            overlay_paintable(paintable: Gdk.Paintable): void;
            set_gicon(icon?: Gio.Icon | null): void;
            set_icon_name(icon_name?: string | null): void;
            set_paintable(paintable?: Gdk.Paintable | null): void;
            set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;

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

        module GutterRendererText {
            // Constructor properties interface

            interface ConstructorProps
                extends GutterRenderer.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                markup: string;
                text: string;
            }
        }

        /**
         * Renders text in the gutter.
         *
         * A `GtkSourceGutterRendererText` can be used to render text in a cell of
         * [class`Gutter]`.
         */
        class GutterRendererText extends GutterRenderer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<GutterRendererText>;

            // Properties

            get markup(): string;
            set markup(val: string);
            get text(): string;
            set text(val: string);

            // Constructors

            constructor(properties?: Partial<GutterRendererText.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GutterRendererText;

            // Methods

            /**
             * Measures the text provided using the pango layout used by the
             * #GtkSourceGutterRendererText.
             * @param text the text to measure.
             */
            measure(text: string): [number, number];
            // Conflicted with Gtk.Widget.measure
            measure(...args: never[]): any;
            /**
             * Measures the pango markup provided using the pango layout used by the
             * #GtkSourceGutterRendererText.
             * @param markup the pango markup to measure.
             */
            measure_markup(markup: string): [number, number];
            set_markup(markup: string, length: number): void;
            set_text(text: string, length: number): void;

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

        module Hover {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                hover_delay: number;
                hoverDelay: number;
            }
        }

        /**
         * Interactive tooltips.
         *
         * `GtkSourceHover` allows a [class`View]` to provide contextual information.
         * When enabled, if the user hovers over a word in the text editor, a series
         * of registered [iface`HoverProvider]` can populate a [class`HoverDisplay]`
         * with useful information.
         *
         * To enable call [method`View`.get_hover] and add [iface`HoverProvider]`
         * using [method`Hover`.add_provider]. To disable, remove all registered
         * providers with [method`Hover`.remove_provider].
         *
         * You can change how long to wait to display the interactive tooltip by
         * setting the [property`Hover:`hover-delay] property in milliseconds.
         */
        class Hover extends GObject.Object {
            static $gtype: GObject.GType<Hover>;

            // Properties

            /**
             * Contains the number of milliseconds to delay before showing the hover assistant.
             */
            get hover_delay(): number;
            set hover_delay(val: number);
            /**
             * Contains the number of milliseconds to delay before showing the hover assistant.
             */
            get hoverDelay(): number;
            set hoverDelay(val: number);

            // Constructors

            constructor(properties?: Partial<Hover.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            add_provider(provider: HoverProvider): void;
            remove_provider(provider: HoverProvider): void;
        }

        module HoverContext {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Context for populating [class`HoverDisplay]` contents.
         *
         * `GtkSourceHoverContext` contains information about the request to populate
         * contents for a [class`HoverDisplay]`.
         *
         * It can be used to retrieve the [class`View]`, [class`Buffer]`, and
         * [struct`Gtk`.TextIter] for the regions of text which are being displayed.
         *
         * Use [method`HoverContext`.get_bounds] to get the word that was
         * requested. [method`HoverContext`.get_iter] will get you the location
         * of the pointer when the request was made.
         */
        class HoverContext extends GObject.Object {
            static $gtype: GObject.GType<HoverContext>;

            // Constructors

            constructor(properties?: Partial<HoverContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the current word bounds of the hover.
             *
             * If `begin` is non-%NULL, it will be set to the start position of the
             * current word being hovered.
             *
             * If `end` is non-%NULL, it will be set to the end position for the
             * current word being hovered.
             * @returns %TRUE if the marks are still valid and @begin or @end was set.
             */
            get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
            /**
             * A convenience function to get the buffer.
             * @returns The #GtkSourceBuffer for the view
             */
            get_buffer(): Buffer;
            get_iter(iter: Gtk.TextIter): boolean;
            get_view(): View;
        }

        module HoverDisplay {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {}
        }

        /**
         * Display for interactive tooltips.
         *
         * `GtkSourceHoverDisplay` is a [class`Gtk`.Widget] that may be populated with widgets
         * to be displayed to the user in interactive tooltips. The children widgets
         * are packed vertically using a [class`Gtk`.Box].
         *
         * Implement the [iface`HoverProvider]` interface to be notified of when
         * to populate a `GtkSourceHoverDisplay` on behalf of the user.
         */
        class HoverDisplay extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<HoverDisplay>;

            // Constructors

            constructor(properties?: Partial<HoverDisplay.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            append(child: Gtk.Widget): void;
            insert_after(child: Gtk.Widget, sibling: Gtk.Widget): void;
            // Conflicted with Gtk.Widget.insert_after
            insert_after(...args: never[]): any;
            prepend(child: Gtk.Widget): void;
            remove(child: Gtk.Widget): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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

        module Language {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                hidden: boolean;
                id: string;
                name: string;
                section: string;
            }
        }

        /**
         * Represents a syntax highlighted language.
         *
         * A `GtkSourceLanguage` represents a programming or markup language, affecting
         * syntax highlighting and [context classes](./class.Buffer.html#context-classes).
         *
         * Use [class`LanguageManager]` to obtain a `GtkSourceLanguage` instance, and
         * [method`Buffer`.set_language] to apply it to a [class`Buffer]`.
         */
        class Language extends GObject.Object {
            static $gtype: GObject.GType<Language>;

            // Properties

            get hidden(): boolean;
            get id(): string;
            get name(): string;
            get section(): string;

            // Constructors

            constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the globs associated to this language.
             *
             * This is just an utility wrapper around [method`Language`.get_metadata] to
             * retrieve the "globs" metadata property and split it into an array.
             * @returns a newly-allocated %NULL terminated array containing the globs or %NULL if no globs are found. The returned array must be freed with g_strfreev().
             */
            get_globs(): string[] | null;
            /**
             * Returns whether the language should be hidden from the user.
             * @returns %TRUE if the language should be hidden, %FALSE otherwise.
             */
            get_hidden(): boolean;
            /**
             * Returns the ID of the language.
             *
             * The ID is not locale-dependent.The returned string is owned by `language`
             * and should not be freed or modified.
             * @returns the ID of @language.
             */
            get_id(): string;
            get_metadata(name: string): string | null;
            /**
             * Returns the mime types associated to this language.
             *
             * This is just an utility wrapper around [method`Language`.get_metadata] to
             * retrieve the "mimetypes" metadata property and split it into an
             * array.
             * @returns a newly-allocated %NULL terminated array containing the mime types or %NULL if no mime types are found. The returned array must be freed with g_strfreev().
             */
            get_mime_types(): string[] | null;
            /**
             * Returns the localized name of the language.
             *
             * The returned string is owned by `language` and should not be freed
             * or modified.
             * @returns the name of @language.
             */
            get_name(): string;
            /**
             * Returns the localized section of the language.
             *
             * Each language belong to a section (ex. HTML belongs to the
             * Markup section).
             * The returned string is owned by `language` and should not be freed
             * or modified.
             * @returns the section of @language.
             */
            get_section(): string;
            /**
             * Returns the ID of the style to use if the specified `style_id`
             * is not present in the current style scheme.
             * @param style_id a style ID.
             * @returns the ID of the style to use if the specified @style_id is not present in the current style scheme or %NULL if the style has no fallback defined. The returned string is owned by the @language and must not be modified.
             */
            get_style_fallback(style_id: string): string | null;
            /**
             * Returns the ids of the styles defined by this `language`.
             * @returns a newly-allocated %NULL terminated array containing ids of the styles defined by this @language or %NULL if no style is defined. The returned array must be freed with g_strfreev().
             */
            get_style_ids(): string[] | null;
            /**
             * Returns the name of the style with ID `style_id` defined by this `language`.
             * @param style_id a style ID.
             * @returns the name of the style with ID @style_id defined by this @language or %NULL if the style has no name or there is no style with ID @style_id defined by this @language. The returned string is owned by the @language and must not be modified.
             */
            get_style_name(style_id: string): string | null;
        }

        module LanguageManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                language_ids: string[];
                languageIds: string[];
                search_path: string[];
                searchPath: string[];
            }
        }

        /**
         * Provides access to [class`Language]`s.
         *
         * `GtkSourceLanguageManager` is an object which processes language description
         * files and creates and stores [class`Language]` objects, and provides API to
         * access them.
         *
         * Use [func`LanguageManager`.get_default] to retrieve the default
         * instance of `GtkSourceLanguageManager`, and
         * [method`LanguageManager`.guess_language] to get a [class`Language]` for
         * given file name and content type.
         */
        class LanguageManager extends GObject.Object {
            static $gtype: GObject.GType<LanguageManager>;

            // Properties

            get language_ids(): string[];
            get languageIds(): string[];
            get search_path(): string[];
            set search_path(val: string[]);
            get searchPath(): string[];
            set searchPath(val: string[]);

            // Constructors

            constructor(properties?: Partial<LanguageManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): LanguageManager;

            // Static methods

            /**
             * Returns the default #GtkSourceLanguageManager instance.
             */
            static get_default(): LanguageManager;

            // Methods

            /**
             * Appends `path` to the list of directories where the `manager` looks for
             * language files.
             *
             * See [method`LanguageManager`.set_search_path] for details.
             * @param path a directory or a filename.
             */
            append_search_path(path: string): void;
            /**
             * Gets the [class`Language]` identified by the given `id` in the language
             * manager.
             * @param id a language id.
             * @returns a #GtkSourceLanguage, or %NULL if there is no language identified by the given @id. Return value is owned by @lm and should not be freed.
             */
            get_language(id: string): Language | null;
            /**
             * Returns the ids of the available languages.
             * @returns a %NULL-terminated array of strings containing the ids of the available languages or %NULL if no language is available. The array is sorted alphabetically according to the language name. The array is owned by @lm and must not be modified.
             */
            get_language_ids(): string[] | null;
            /**
             * Gets the list directories where `lm` looks for language files.
             * @returns %NULL-terminated array containing a list of language files directories. The array is owned by @lm and must not be modified.
             */
            get_search_path(): string[];
            /**
             * Picks a [class`Language]` for given file name and content type,
             * according to the information in lang files.
             *
             * Either `filename` or `content_type` may be %NULL. This function can be used as follows:
             *
             * ```c
             * GtkSourceLanguage *lang;
             * GtkSourceLanguageManager *manager;
             * lm = gtk_source_language_manager_get_default ();
             * lang = gtk_source_language_manager_guess_language (manager, filename, NULL);
             * gtk_source_buffer_set_language (buffer, lang);
             * ```
             *
             * or
             *
             * ```c
             * GtkSourceLanguage *lang = NULL;
             * GtkSourceLanguageManager *manager;
             * gboolean result_uncertain;
             * gchar *content_type;
             *
             * content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
             * if (result_uncertain)
             *   {
             *     g_free (content_type);
             *     content_type = NULL;
             *   }
             *
             * manager = gtk_source_language_manager_get_default ();
             * lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
             * gtk_source_buffer_set_language (buffer, lang);
             *
             * g_free (content_type);
             * ```
             *
             * etc. Use [method`Language`.get_mime_types] and [method`Language`.get_globs]
             * if you need full control over file -> language mapping.
             * @param filename a filename in Glib filename encoding, or %NULL.
             * @param content_type a content type (as in GIO API), or %NULL.
             * @returns a #GtkSourceLanguage, or %NULL if there is no suitable language for given @filename and/or @content_type. Return value is owned by @lm and should not be freed.
             */
            guess_language(filename?: string | null, content_type?: string | null): Language | null;
            /**
             * Prepends `path` to the list of directories where the `manager` looks
             * for language files.
             *
             * See [method`LanguageManager`.set_search_path] for details.
             * @param path a directory or a filename.
             */
            prepend_search_path(path: string): void;
            /**
             * Sets the list of directories where the `lm` looks for
             * language files.
             *
             * If `dirs` is %NULL, the search path is reset to default.
             *
             * At the moment this function can be called only before the
             * language files are loaded for the first time. In practice
             * to set a custom search path for a `GtkSourceLanguageManager`,
             * you have to call this function right after creating it.
             *
             * Since GtkSourceView 5.4 this function will allow you to provide
             * paths in the form of "resource:///" URIs to embedded `GResource`s.
             * They must contain the path of a directory within the `GResource`.
             * @param dirs a %NULL-terminated array of   strings or %NULL.
             */
            set_search_path(dirs?: string[] | null): void;
        }

        module Map {
            // Constructor properties interface

            interface ConstructorProps
                extends View.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.AccessibleText.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                font_desc: Pango.FontDescription;
                fontDesc: Pango.FontDescription;
                view: View;
            }
        }

        /**
         * Widget that displays a map for a specific [class`View]`.
         *
         * `GtkSourceMap` is a widget that maps the content of a [class`View]` into
         * a smaller view so the user can have a quick overview of the whole document.
         *
         * This works by connecting a [class`View]` to to the `GtkSourceMap` using
         * the [property`Map:`view] property or [method`Map`.set_view].
         *
         * `GtkSourceMap` is a [class`View]` object. This means that you can add a
         * [class`GutterRenderer]` to a gutter in the same way you would for a
         * [class`View]`. One example might be a [class`GutterRenderer]` that shows
         * which lines have changed in the document.
         *
         * Additionally, it is desirable to match the font of the `GtkSourceMap` and
         * the [class`View]` used for editing. Therefore, [property`Map:`font-desc]
         * should be used to set the target font. You will need to adjust this to the
         * desired font size for the map. A 1pt font generally seems to be an
         * appropriate font size. "Monospace 1" is the default. See
         * [method`Pango`.FontDescription.set_size] for how to alter the size of an existing
         * [struct`Pango`.FontDescription].
         *
         * When FontConfig is available, `GtkSourceMap` will try to use a bundled
         * "block" font to make the map more legible.
         */
        class Map
            extends View
            implements Gtk.Accessible, Gtk.AccessibleText, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable
        {
            static $gtype: GObject.GType<Map>;

            // Properties

            get font_desc(): Pango.FontDescription;
            set font_desc(val: Pango.FontDescription);
            get fontDesc(): Pango.FontDescription;
            set fontDesc(val: Pango.FontDescription);
            get view(): View;
            set view(val: View);

            // Constructors

            constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Map;

            // Methods

            /**
             * Gets the [property`Map:`view] property, which is the view this widget is mapping.
             * @returns a #GtkSourceView or %NULL.
             */
            get_view(): View | null;
            /**
             * Sets the view that `map` will be doing the mapping to.
             * @param view a #GtkSourceView
             */
            set_view(view: View): void;

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

        module Mark {
            // Constructor properties interface

            interface ConstructorProps extends Gtk.TextMark.ConstructorProps {
                category: string;
            }
        }

        /**
         * Mark object for [class`Buffer]`.
         *
         * A `GtkSourceMark` marks a position in the text where you want to display
         * additional info. It is based on [class`Gtk`.TextMark] and thus is still valid after
         * the text has changed though its position may change.
         *
         * `GtkSourceMark`s are organized in categories which you have to set
         * when you create the mark. Each category can have a priority, a pixbuf and
         * other associated attributes. See [method`View`.set_mark_attributes].
         * The pixbuf will be displayed in the margin at the line where the mark
         * residents if the [property`View:`show-line-marks] property is set to %TRUE. If
         * there are multiple marks in the same line, the pixbufs will be drawn on top
         * of each other. The mark with the highest priority will be drawn on top.
         */
        class Mark extends Gtk.TextMark {
            static $gtype: GObject.GType<Mark>;

            // Properties

            /**
             * The category of the `GtkSourceMark`, classifies the mark and controls
             * which pixbuf is used and with which priority it is drawn.
             */
            get category(): string;

            // Constructors

            constructor(properties?: Partial<Mark.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string | null, category: string): Mark;
            // Conflicted with Gtk.TextMark.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Returns the mark category.
             * @returns the category of the #GtkSourceMark.
             */
            get_category(): string;
            /**
             * Returns the next `GtkSourceMark` in the buffer or %NULL if the mark
             * was not added to a buffer.
             *
             *  If there is no next mark, %NULL will be returned.
             *
             * If `category` is %NULL, looks for marks of any category.
             * @param category a string specifying the mark category, or %NULL.
             * @returns the next #GtkSourceMark, or %NULL.
             */
            next(category?: string | null): Mark | null;
            /**
             * Returns the previous `GtkSourceMark` in the buffer or %NULL if the mark
             * was not added to a buffer.
             *
             * If there is no previous mark, %NULL is returned.
             *
             * If `category` is %NULL, looks for marks of any category
             * @param category a string specifying the mark category, or %NULL.
             * @returns the previous #GtkSourceMark, or %NULL.
             */
            prev(category?: string | null): Mark | null;
        }

        module MarkAttributes {
            // Signal callback interfaces

            interface QueryTooltipMarkup {
                (mark: Mark): string;
            }

            interface QueryTooltipText {
                (mark: Mark): string;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                background: Gdk.RGBA;
                gicon: Gio.Icon;
                icon_name: string;
                iconName: string;
                pixbuf: GdkPixbuf.Pixbuf;
            }
        }

        /**
         * The source mark attributes object.
         *
         * `GtkSourceMarkAttributes` is an object specifying attributes used by
         * a [class`View]` to visually show lines marked with [class`Mark]`s
         * of a specific category. It allows you to define a background color of a line,
         * an icon shown in gutter and tooltips.
         *
         * The background color is used as a background of a line where a mark is placed
         * and it can be set with [method`MarkAttributes`.set_background]. To check
         * if any custom background color was defined and what color it is, use
         * [method`MarkAttributes`.get_background].
         *
         * An icon is a graphic element which is shown in the gutter of a view. An
         * example use is showing a red filled circle in a debugger to show that a
         * breakpoint was set in certain line. To get an icon that will be placed in
         * a gutter, first a base for it must be specified and then
         * [method`MarkAttributes`.render_icon] must be called.
         * There are several ways to specify a base for an icon:
         *
         * - [method`MarkAttributes`.set_icon_name]
         * - [method`MarkAttributes`.set_gicon]
         * - [method`MarkAttributes`.set_pixbuf]
         *
         * Using any of the above functions overrides the one used earlier. But note
         * that a getter counterpart of earlier used function can still return some
         * value, but it is just not used when rendering the proper icon.
         *
         * To provide meaningful tooltips for a given mark of a category, you should
         * connect to [signal`MarkAttributes:`:query-tooltip-text] or
         * [signal`MarkAttributes:`:query-tooltip-markup] where the latter
         * takes precedence.
         */
        class MarkAttributes extends GObject.Object {
            static $gtype: GObject.GType<MarkAttributes>;

            // Properties

            /**
             * A color used for background of a line.
             */
            get background(): Gdk.RGBA;
            set background(val: Gdk.RGBA);
            /**
             * A #GIcon that may be a base of a rendered icon.
             */
            get gicon(): Gio.Icon;
            set gicon(val: Gio.Icon);
            /**
             * An icon name that may be a base of a rendered icon.
             */
            get icon_name(): string;
            set icon_name(val: string);
            /**
             * An icon name that may be a base of a rendered icon.
             */
            get iconName(): string;
            set iconName(val: string);
            /**
             * A #GdkPixbuf that may be a base of a rendered icon.
             */
            get pixbuf(): GdkPixbuf.Pixbuf;
            set pixbuf(val: GdkPixbuf.Pixbuf);

            // Constructors

            constructor(properties?: Partial<MarkAttributes.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MarkAttributes;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'query-tooltip-markup', callback: (_source: this, mark: Mark) => string): number;
            connect_after(signal: 'query-tooltip-markup', callback: (_source: this, mark: Mark) => string): number;
            emit(signal: 'query-tooltip-markup', mark: Mark): void;
            connect(signal: 'query-tooltip-text', callback: (_source: this, mark: Mark) => string): number;
            connect_after(signal: 'query-tooltip-text', callback: (_source: this, mark: Mark) => string): number;
            emit(signal: 'query-tooltip-text', mark: Mark): void;

            // Methods

            /**
             * Stores background color in `background`.
             * @returns whether background color for @attributes was set.
             */
            get_background(): [boolean, Gdk.RGBA];
            /**
             * Gets a [iface`Gio`.Icon] to be used as a base for rendered icon.
             *
             * Note that the icon can be %NULL if it wasn't set earlier.
             * @returns An icon. The icon belongs to @attributes and should not be unreffed.
             */
            get_gicon(): Gio.Icon;
            /**
             * Gets a name of an icon to be used as a base for rendered icon.
             *
             * Note that the icon name can be %NULL if it wasn't set earlier.
             * @returns An icon name. The string belongs to @attributes and should not be freed.
             */
            get_icon_name(): string;
            /**
             * Gets a [class`GdkPixbuf`.Pixbuf] to be used as a base for rendered icon.
             *
             * Note that the pixbuf can be %NULL if it wasn't set earlier.
             * @returns A pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            /**
             * Queries for a tooltip by emitting a [signal`MarkAttributes:`:query-tooltip-markup] signal.
             *
             * The tooltip may contain a markup.
             * @param mark a #GtkSourceMark.
             * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
             */
            get_tooltip_markup(mark: Mark): string;
            /**
             * Queries for a tooltip by emitting a [signal`MarkAttributes:`:query-tooltip-text] signal.
             *
             * The tooltip is a plain text.
             * @param mark a #GtkSourceMark.
             * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
             */
            get_tooltip_text(mark: Mark): string;
            /**
             * Renders an icon of given size.
             *
             * The base of the icon is set by the last call to one of:
             *
             * - [method`MarkAttributes`.set_pixbuf]
             * - [method`MarkAttributes`.set_gicon]
             * - [method`MarkAttributes`.set_icon_name]
             *
             * `size` cannot be lower than 1.
             * @param widget widget of which style settings may be used.
             * @param size size of the rendered icon.
             * @returns A #GdkPaintable. The paintable belongs to @attributes and should not be unreffed.
             */
            render_icon(widget: Gtk.Widget, size: number): Gdk.Paintable;
            /**
             * Sets background color to the one given in `background`.
             * @param background a #GdkRGBA.
             */
            set_background(background: Gdk.RGBA): void;
            /**
             * Sets an icon to be used as a base for rendered icon.
             * @param gicon a #GIcon to be used.
             */
            set_gicon(gicon: Gio.Icon): void;
            /**
             * Sets a name of an icon to be used as a base for rendered icon.
             * @param icon_name name of an icon to be used.
             */
            set_icon_name(icon_name: string): void;
            /**
             * Sets a pixbuf to be used as a base for rendered icon.
             * @param pixbuf a #GdkPixbuf to be used.
             */
            set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        }

        module PrintCompositor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                body_font_name: string;
                bodyFontName: string;
                buffer: Buffer;
                footer_font_name: string;
                footerFontName: string;
                header_font_name: string;
                headerFontName: string;
                highlight_syntax: boolean;
                highlightSyntax: boolean;
                line_numbers_font_name: string;
                lineNumbersFontName: string;
                n_pages: number;
                nPages: number;
                print_footer: boolean;
                printFooter: boolean;
                print_header: boolean;
                printHeader: boolean;
                print_line_numbers: number;
                printLineNumbers: number;
                tab_width: number;
                tabWidth: number;
                wrap_mode: Gtk.WrapMode;
                wrapMode: Gtk.WrapMode;
            }
        }

        /**
         * Compose a [class`Buffer]` for printing.
         *
         * The `GtkSourcePrintCompositor` object is used to compose a [class`Buffer]`
         * for printing. You can set various configuration options to customize the
         * printed output. `GtkSourcePrintCompositor` is designed to be used with the
         * high-level printing API of gtk+, i.e. [class`Gtk`.PrintOperation].
         *
         * The margins specified in this object are the layout margins: they define the
         * blank space bordering the printed area of the pages. They must not be
         * confused with the "print margins", i.e. the parts of the page that the
         * printer cannot print on, defined in the [class`Gtk`.PageSetup] objects. If the
         * specified layout margins are smaller than the "print margins", the latter
         * ones are used as a fallback by the `GtkSourcePrintCompositor` object, so that
         * the printed area is not clipped.
         */
        class PrintCompositor extends GObject.Object {
            static $gtype: GObject.GType<PrintCompositor>;

            // Properties

            /**
             * Name of the font used for the text body.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get body_font_name(): string;
            set body_font_name(val: string);
            /**
             * Name of the font used for the text body.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get bodyFontName(): string;
            set bodyFontName(val: string);
            /**
             * The [class`Buffer]` object to print.
             */
            get buffer(): Buffer;
            /**
             * Name of the font used to print page footer.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get footer_font_name(): string;
            set footer_font_name(val: string);
            /**
             * Name of the font used to print page footer.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get footerFontName(): string;
            set footerFontName(val: string);
            /**
             * Name of the font used to print page header.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get header_font_name(): string;
            set header_font_name(val: string);
            /**
             * Name of the font used to print page header.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get headerFontName(): string;
            set headerFontName(val: string);
            /**
             * Whether to print the document with highlighted syntax.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get highlight_syntax(): boolean;
            set highlight_syntax(val: boolean);
            /**
             * Whether to print the document with highlighted syntax.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get highlightSyntax(): boolean;
            set highlightSyntax(val: boolean);
            /**
             * Name of the font used to print line numbers on the left margin.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get line_numbers_font_name(): string;
            set line_numbers_font_name(val: string);
            /**
             * Name of the font used to print line numbers on the left margin.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get lineNumbersFontName(): string;
            set lineNumbersFontName(val: string);
            /**
             * The number of pages in the document or <code>-1</code> if the
             * document has not been completely paginated.
             */
            get n_pages(): number;
            /**
             * The number of pages in the document or <code>-1</code> if the
             * document has not been completely paginated.
             */
            get nPages(): number;
            /**
             * Whether to print a footer in each page.
             *
             * Note that by default the footer format is unspecified, and if it is
             * unspecified the footer will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get print_footer(): boolean;
            set print_footer(val: boolean);
            /**
             * Whether to print a footer in each page.
             *
             * Note that by default the footer format is unspecified, and if it is
             * unspecified the footer will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get printFooter(): boolean;
            set printFooter(val: boolean);
            /**
             * Whether to print a header in each page.
             *
             * Note that by default the header format is unspecified, and if it is
             * unspecified the header will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get print_header(): boolean;
            set print_header(val: boolean);
            /**
             * Whether to print a header in each page.
             *
             * Note that by default the header format is unspecified, and if it is
             * unspecified the header will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get printHeader(): boolean;
            set printHeader(val: boolean);
            /**
             * Interval of printed line numbers.
             *
             * If this property is set to 0 no numbers will be printed.
             * If greater than 0, a number will be printed every "print-line-numbers"
             * lines (i.e. 1 will print all line numbers).
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get print_line_numbers(): number;
            set print_line_numbers(val: number);
            /**
             * Interval of printed line numbers.
             *
             * If this property is set to 0 no numbers will be printed.
             * If greater than 0, a number will be printed every "print-line-numbers"
             * lines (i.e. 1 will print all line numbers).
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get printLineNumbers(): number;
            set printLineNumbers(val: number);
            /**
             * Width of a tab character expressed in spaces.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get tab_width(): number;
            set tab_width(val: number);
            /**
             * Width of a tab character expressed in spaces.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get tabWidth(): number;
            set tabWidth(val: number);
            /**
             * Whether to wrap lines never, at word boundaries, or at character boundaries.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get wrap_mode(): Gtk.WrapMode;
            set wrap_mode(val: Gtk.WrapMode);
            /**
             * Whether to wrap lines never, at word boundaries, or at character boundaries.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the [method`PrintCompositor`.paginate] function.
             */
            get wrapMode(): Gtk.WrapMode;
            set wrapMode(val: Gtk.WrapMode);

            // Constructors

            constructor(properties?: Partial<PrintCompositor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer): PrintCompositor;

            static new_from_view(view: View): PrintCompositor;

            // Methods

            /**
             * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
             *
             * This method has been designed to be called in the handler of the [signal`Gtk`.PrintOperation::draw_page] signal
             * as shown in the following example:
             *
             * ```c
             * // Signal handler for the GtkPrintOperation::draw_page signal
             *
             * static void
             * draw_page (GtkPrintOperation *operation,
             *            GtkPrintContext   *context,
             *            gint               page_nr,
             *            gpointer           user_data)
             * {
             *     GtkSourcePrintCompositor *compositor;
             *
             *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
             *
             *     gtk_source_print_compositor_draw_page (compositor,
             *                                            context,
             *                                            page_nr);
             * }
             * ```
             * @param context the #GtkPrintContext encapsulating the context information that is required when           drawing the page for printing.
             * @param page_nr the number of the page to print.
             */
            draw_page(context: Gtk.PrintContext, page_nr: number): void;
            /**
             * Returns the name of the font used to print the text body.
             *
             * The returned string must be freed with g_free().
             * @returns a new string containing the name of the font used to print the text body.
             */
            get_body_font_name(): string;
            /**
             * Gets the bottom margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the bottom margin.
             */
            get_bottom_margin(unit: Gtk.Unit): number;
            /**
             * Gets the [class`Buffer]` associated with the compositor.
             *
             * The returned object reference is owned by the compositor object and
             * should not be unreferenced.
             * @returns the #GtkSourceBuffer associated with the compositor.
             */
            get_buffer(): Buffer;
            /**
             * Returns the name of the font used to print the page footer.
             *
             * The returned string must be freed with g_free().
             * @returns a new string containing the name of the font used to print the page footer.
             */
            get_footer_font_name(): string;
            /**
             * Returns the name of the font used to print the page header.
             *
             * The returned string must be freed with g_free().
             * @returns a new string containing the name of the font used to print the page header.
             */
            get_header_font_name(): string;
            /**
             * Determines whether the printed text will be highlighted according to the
             * buffer rules.
             *
             * Note that highlighting will happen only if the buffer to print has highlighting activated.
             * @returns %TRUE if the printed output will be highlighted.
             */
            get_highlight_syntax(): boolean;
            /**
             * Gets the left margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the left margin
             */
            get_left_margin(unit: Gtk.Unit): number;
            /**
             * Returns the name of the font used to print line numbers on the left margin.
             *
             * The returned string must be freed with g_free().
             * @returns a new string containing the name of the font used to print line numbers on the left margin.
             */
            get_line_numbers_font_name(): string;
            /**
             * Returns the number of pages in the document or <code>-1</code> if the
             * document has not been completely paginated.
             * @returns the number of pages in the document or <code>-1</code> if the document has not been completely paginated.
             */
            get_n_pages(): number;
            /**
             * Returns the current fraction of the document pagination that has been completed.
             * @returns a fraction from 0.0 to 1.0 inclusive.
             */
            get_pagination_progress(): number;
            /**
             * Determines if a footer is set to be printed for each page.
             *
             * A footer will be printed if this function returns %TRUE
             * **and** some format strings have been specified
             * with [method`PrintCompositor`.set_footer_format].
             * @returns %TRUE if the footer is set to be printed.
             */
            get_print_footer(): boolean;
            /**
             * Determines if a header is set to be printed for each page.
             *
             * A header will be printed if this function returns %TRUE
             * **and** some format strings have been specified
             * with [method`PrintCompositor`.set_header_format].
             * @returns %TRUE if the header is set to be printed.
             */
            get_print_header(): boolean;
            /**
             * Returns the interval used for line number printing.
             *
             * If the value is 0, no line numbers will be printed. The default value is
             * 1 (i.e. numbers printed in all lines).
             * @returns the interval of printed line numbers.
             */
            get_print_line_numbers(): number;
            /**
             * Gets the right margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the right margin.
             */
            get_right_margin(unit: Gtk.Unit): number;
            /**
             * Returns the width of tabulation in characters for printed text.
             * @returns width of tab.
             */
            get_tab_width(): number;
            /**
             * Gets the top margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the top margin.
             */
            get_top_margin(unit: Gtk.Unit): number;
            /**
             * Gets the line wrapping mode for the printed text.
             * @returns the line wrap mode.
             */
            get_wrap_mode(): Gtk.WrapMode;
            /**
             * Specifies a tag whose style should be ignored when compositing the
             * document to the printable page.
             * @param tag a #GtkTextTag
             */
            ignore_tag(tag: Gtk.TextTag): void;
            /**
             * Paginate the document associated with the `compositor`.
             *
             * In order to support non-blocking pagination, document is paginated in small chunks.
             * Each time [method`PrintCompositor`.paginate] is invoked, a chunk of the document
             * is paginated. To paginate the entire document, [method`PrintCompositor`.paginate]
             * must be invoked multiple times.
             * It returns %TRUE if the document has been completely paginated, otherwise it returns %FALSE.
             *
             * This method has been designed to be invoked in the handler of the [signal`Gtk`.PrintOperation::paginate] signal,
             * as shown in the following example:
             *
             * ```c
             * // Signal handler for the GtkPrintOperation::paginate signal
             *
             * static gboolean
             * paginate (GtkPrintOperation *operation,
             *           GtkPrintContext   *context,
             *           gpointer           user_data)
             * {
             *     GtkSourcePrintCompositor *compositor;
             *
             *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
             *
             *     if (gtk_source_print_compositor_paginate (compositor, context))
             *     {
             *         gint n_pages;
             *
             *         n_pages = gtk_source_print_compositor_get_n_pages (compositor);
             *         gtk_print_operation_set_n_pages (operation, n_pages);
             *
             *         return TRUE;
             *     }
             *
             *     return FALSE;
             * }
             * ```
             *
             * If you don't need to do pagination in chunks, you can simply do it all in the
             * [signal`Gtk`.PrintOperation::begin-print] handler, and set the number of pages from there, like
             * in the following example:
             *
             * ```c
             * // Signal handler for the GtkPrintOperation::begin-print signal
             *
             * static void
             * begin_print (GtkPrintOperation *operation,
             *              GtkPrintContext   *context,
             *              gpointer           user_data)
             * {
             *     GtkSourcePrintCompositor *compositor;
             *     gint n_pages;
             *
             *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
             *
             *     while (!gtk_source_print_compositor_paginate (compositor, context));
             *
             *     n_pages = gtk_source_print_compositor_get_n_pages (compositor);
             *     gtk_print_operation_set_n_pages (operation, n_pages);
             * }
             * ```
             * @param context the #GtkPrintContext whose parameters (e.g. paper size, print margins, etc.) are used by the the @compositor to paginate the document.
             * @returns %TRUE if the document has been completely paginated, %FALSE otherwise.
             */
            paginate(context: Gtk.PrintContext): boolean;
            /**
             * Sets the default font for the printed text.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param font_name the name of the default font for the body text.
             */
            set_body_font_name(font_name: string): void;
            /**
             * Sets the bottom margin used by `compositor`.
             * @param margin the new bottom margin in units of @unit.
             * @param unit the units for @margin.
             */
            set_bottom_margin(margin: number, unit: Gtk.Unit): void;
            /**
             * Sets the font for printing the page footer.
             *
             * If %NULL is supplied, the default font (i.e. the one being used for the
             * text) will be used instead.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param font_name the name of the font for the footer text, or %NULL.
             */
            set_footer_font_name(font_name?: string | null): void;
            /**
             * See [method`PrintCompositor`.set_header_format] for more information
             * about the parameters.
             * @param separator %TRUE if you want a separator line to be printed.
             * @param left a format string to print on the left of the footer.
             * @param center a format string to print on the center of the footer.
             * @param right a format string to print on the right of the footer.
             */
            set_footer_format(
                separator: boolean,
                left?: string | null,
                center?: string | null,
                right?: string | null,
            ): void;
            /**
             * Sets the font for printing the page header.
             *
             * If %NULL is supplied, the default font (i.e. the one being used for the
             * text) will be used instead.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param font_name the name of the font for header text, or %NULL.
             */
            set_header_font_name(font_name?: string | null): void;
            /**
             * Sets strftime like header format strings, to be printed on the
             * left, center and right of the top of each page.
             *
             * The strings may include strftime(3) codes which will be expanded at print time.
             * A subset of strftime() codes are accepted, see [method`GLib`.DateTime.format]
             * for more details on the accepted format specifiers.
             * Additionally the following format specifiers are accepted:
             *
             * - #N: the page number
             * - #Q: the page count.
             *
             * `separator` specifies if a solid line should be drawn to separate
             * the header from the document text.
             *
             * If %NULL is given for any of the three arguments, that particular
             * string will not be printed.
             *
             * For the header to be printed, in
             * addition to specifying format strings, you need to enable header
             * printing with [method`PrintCompositor`.set_print_header].
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param separator %TRUE if you want a separator line to be printed.
             * @param left a format string to print on the left of the header.
             * @param center a format string to print on the center of the header.
             * @param right a format string to print on the right of the header.
             */
            set_header_format(
                separator: boolean,
                left?: string | null,
                center?: string | null,
                right?: string | null,
            ): void;
            /**
             * Sets whether the printed text will be highlighted according to the
             * buffer rules.  Both color and font style are applied.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param highlight whether syntax should be highlighted.
             */
            set_highlight_syntax(highlight: boolean): void;
            /**
             * Sets the left margin used by `compositor`.
             * @param margin the new left margin in units of @unit.
             * @param unit the units for @margin.
             */
            set_left_margin(margin: number, unit: Gtk.Unit): void;
            /**
             * Sets the font for printing line numbers on the left margin.
             *
             * If %NULL is supplied, the default font (i.e. the one being used for the
             * text) will be used instead.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param font_name the name of the font for line numbers, or %NULL.
             */
            set_line_numbers_font_name(font_name?: string | null): void;
            /**
             * Sets whether you want to print a footer in each page.
             *
             * The footer consists of three pieces of text and an optional line
             * separator, configurable with
             * [method`PrintCompositor`.set_footer_format].
             *
             * Note that by default the footer format is unspecified, and if it's
             * empty it will not be printed, regardless of this setting.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param print %TRUE if you want the footer to be printed.
             */
            set_print_footer(print: boolean): void;
            /**
             * Sets whether you want to print a header in each page.
             *
             * The header consists of three pieces of text and an optional line
             * separator, configurable with [method`PrintCompositor`.set_header_format].
             *
             * Note that by default the header format is unspecified, and if it's
             * empty it will not be printed, regardless of this setting.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param print %TRUE if you want the header to be printed.
             */
            set_print_header(print: boolean): void;
            /**
             * Sets the interval for printed line numbers.
             *
             * If `interval` is 0 no numbers will be printed. If greater than 0, a number will be
             * printed every `interval` lines (i.e. 1 will print all line numbers).
             *
             * Maximum accepted value for `interval` is 100.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param interval interval for printed line numbers.
             */
            set_print_line_numbers(interval: number): void;
            /**
             * Sets the right margin used by `compositor`.
             * @param margin the new right margin in units of @unit.
             * @param unit the units for @margin.
             */
            set_right_margin(margin: number, unit: Gtk.Unit): void;
            /**
             * Sets the width of tabulation in characters for printed text.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param width width of tab in characters.
             */
            set_tab_width(width: number): void;
            /**
             * Sets the top margin used by `compositor`.
             * @param margin the new top margin in units of @unit
             * @param unit the units for @margin
             */
            set_top_margin(margin: number, unit: Gtk.Unit): void;
            /**
             * Sets the line wrapping mode for the printed text.
             *
             * This function cannot be called anymore after the first call to the
             * [method`PrintCompositor`.paginate] function.
             * @param wrap_mode a #GtkWrapMode.
             */
            set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
        }

        module Region {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Gtk.TextBuffer;
            }
        }

        /**
         * Region utility.
         *
         * A `GtkSourceRegion` permits to store a group of subregions of a
         * [class`Gtk`.TextBuffer]. `GtkSourceRegion` stores the subregions with pairs of
         * [class`Gtk`.TextMark]'s, so the region is still valid after insertions and deletions
         * in the [class`Gtk`.TextBuffer].
         *
         * The [class`Gtk`.TextMark] for the start of a subregion has a left gravity, while the
         * [class`Gtk`.TextMark] for the end of a subregion has a right gravity.
         *
         * The typical use-case of `GtkSourceRegion` is to scan a [class`Gtk`.TextBuffer] chunk by
         * chunk, not the whole buffer at once to not block the user interface. The
         * `GtkSourceRegion` represents in that case the remaining region to scan. You
         * can listen to the [signal`Gtk`.TextBuffer::insert-text] and
         * [signal`Gtk`.TextBuffer::delete-range] signals to update the `GtkSourceRegion`
         * accordingly.
         *
         * To iterate through the subregions, you need to use a [struct`RegionIter]`,
         * for example:
         * ```c
         * GtkSourceRegion *region;
         * GtkSourceRegionIter region_iter;
         *
         * gtk_source_region_get_start_region_iter (region, &region_iter);
         *
         * while (!gtk_source_region_iter_is_end (&region_iter))
         * {
         *         GtkTextIter subregion_start;
         *         GtkTextIter subregion_end;
         *
         *         if (!gtk_source_region_iter_get_subregion (&region_iter,
         *                                                    &subregion_start,
         *                                                    &subregion_end))
         *         {
         *                 break;
         *         }
         *
         *         // Do something useful with the subregion.
         *
         *         gtk_source_region_iter_next (&region_iter);
         * }
         * ```
         */
        class Region extends GObject.Object {
            static $gtype: GObject.GType<Region>;

            // Properties

            /**
             * The [class`Gtk`.TextBuffer]. The #GtkSourceRegion has a weak reference to the
             * buffer.
             */
            get buffer(): Gtk.TextBuffer;

            // Constructors

            constructor(properties?: Partial<Region.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Gtk.TextBuffer): Region;

            // Methods

            /**
             * Adds `region_to_add` to `region`.
             *
             * `region_to_add` is not modified.
             * @param region_to_add the #GtkSourceRegion to add to @region, or %NULL.
             */
            add_region(region_to_add?: Region | null): void;
            /**
             * Adds the subregion delimited by `_start` and `_end` to `region`.
             * @param _start the start of the subregion.
             * @param _end the end of the subregion.
             */
            add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
            /**
             * Gets the `start` and `end` bounds of the `region`.
             * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if the @region is empty.
             */
            get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
            get_buffer(): Gtk.TextBuffer | null;
            /**
             * Initializes a [struct`RegionIter]` to the first subregion of `region`.
             *
             * If `region` is empty, `iter` will be initialized to the end iterator.
             */
            get_start_region_iter(): RegionIter;
            /**
             * Returns the intersection between `region1` and `region2`.
             *
             * `region1` and `region2` are not modified.
             * @param region2 a #GtkSourceRegion, or %NULL.
             * @returns the intersection as a #GtkSourceRegion   object.
             */
            intersect_region(region2?: Region | null): Region | null;
            /**
             * Returns the intersection between `region` and the subregion delimited by
             * `_start` and `_end`.
             *
             * `region` is not modified.
             * @param _start the start of the subregion.
             * @param _end the end of the subregion.
             * @returns the intersection as a new   #GtkSourceRegion.
             */
            intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
            /**
             * Returns whether the `region` is empty.
             *
             * A %NULL `region` is considered empty.
             * @returns whether the @region is empty.
             */
            is_empty(): boolean;
            /**
             * Subtracts `region_to_subtract` from `region`.
             *
             * `region_to_subtract` is not modified.
             * @param region_to_subtract the #GtkSourceRegion to subtract from   @region, or %NULL.
             */
            subtract_region(region_to_subtract?: Region | null): void;
            /**
             * Subtracts the subregion delimited by `_start` and `_end` from `region`.
             * @param _start the start of the subregion.
             * @param _end the end of the subregion.
             */
            subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
            /**
             * Gets a string represention of `region,` for debugging purposes.
             *
             * The returned string contains the character offsets of the subregions. It
             * doesn't include a newline character at the end of the string.
             * @returns a string represention of @region. Free   with g_free() when no longer needed.
             */
            to_string(): string | null;
        }

        module SearchContext {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Buffer;
                highlight: boolean;
                match_style: Style;
                matchStyle: Style;
                occurrences_count: number;
                occurrencesCount: number;
                regex_error: GLib.Error;
                regexError: GLib.Error;
                settings: SearchSettings;
            }
        }

        /**
         * Search context.
         *
         * A `GtkSourceSearchContext` is used for the search and replace in a
         * [class`Buffer]`. The search settings are represented by a
         * [class`SearchSettings]` object. There can be a many-to-many relationship
         * between buffers and search settings, with the search contexts in-between: a
         * search settings object can be shared between several search contexts; and a
         * buffer can contain several search contexts at the same time.
         *
         * The total number of search occurrences can be retrieved with
         * [method`SearchContext`.get_occurrences_count]. To know the position of a
         * certain match, use [method`SearchContext`.get_occurrence_position].
         *
         * The buffer is scanned asynchronously, so it doesn't block the user interface.
         * For each search, the buffer is scanned at most once. After that, navigating
         * through the occurrences doesn't require to re-scan the buffer entirely.
         *
         * To search forward, use [method`SearchContext`.forward] or
         * [method`SearchContext`.forward_async] for the asynchronous version.
         * The backward search is done similarly. To replace a search match, or all
         * matches, use [method`SearchContext`.replace] and
         * [method`SearchContext`.replace_all].
         *
         * The search occurrences are highlighted by default. To disable it, use
         * [method`SearchContext`.set_highlight]. You can enable the search
         * highlighting for several `GtkSourceSearchContext`s attached to the
         * same buffer. Moreover, each of those `GtkSourceSearchContext`s can
         * have a different text style associated. Use
         * [method`SearchContext`.set_match_style] to specify the [class`Style]`
         * to apply on search matches.
         *
         * Note that the [property`SearchContext:`highlight] and
         * [property`SearchContext:`match-style] properties are in the
         * `GtkSourceSearchContext` class, not [class`SearchSettings]`. Appearance
         * settings should be tied to one, and only one buffer, as different buffers can
         * have different style scheme associated (a [class`SearchSettings]` object
         * can be bound indirectly to several buffers).
         *
         * The concept of "current match" doesn't exist yet. A way to highlight
         * differently the current match is to select it.
         *
         * A search occurrence's position doesn't depend on the cursor position or other
         * parameters. Take for instance the buffer "aaaa" with the search text "aa".
         * The two occurrences are at positions [0:2] and [2:4]. If you begin to search
         * at position 1, you will get the occurrence [2:4], not [1:3]. This is a
         * prerequisite for regular expression searches. The pattern ".*" matches the
         * entire line. If the cursor is at the middle of the line, you don't want the
         * rest of the line as the occurrence, you want an entire line. (As a side note,
         * regular expression searches can also match multiple lines.)
         *
         * In the GtkSourceView source code, there is an example of how to use the
         * search and replace API: see the tests/test-search.c file. It is a mini
         * application for the search and replace, with a basic user interface.
         */
        class SearchContext extends GObject.Object {
            static $gtype: GObject.GType<SearchContext>;

            // Properties

            /**
             * The [class`Buffer]` associated to the search context.
             */
            get buffer(): Buffer;
            /**
             * Highlight the search occurrences.
             */
            get highlight(): boolean;
            set highlight(val: boolean);
            /**
             * A [class`Style]`, or %NULL for theme's scheme default style.
             */
            get match_style(): Style;
            set match_style(val: Style);
            /**
             * A [class`Style]`, or %NULL for theme's scheme default style.
             */
            get matchStyle(): Style;
            set matchStyle(val: Style);
            /**
             * The total number of search occurrences. If the search is disabled,
             * the value is 0. If the buffer is not already fully scanned, the value
             * is -1.
             */
            get occurrences_count(): number;
            /**
             * The total number of search occurrences. If the search is disabled,
             * the value is 0. If the buffer is not already fully scanned, the value
             * is -1.
             */
            get occurrencesCount(): number;
            /**
             * If the regex search pattern doesn't follow all the rules, this
             * #GError property will be set. If the pattern is valid, the value is
             * %NULL.
             *
             * Free with [method`GLib`.Error.free].
             */
            get regex_error(): GLib.Error;
            /**
             * If the regex search pattern doesn't follow all the rules, this
             * #GError property will be set. If the pattern is valid, the value is
             * %NULL.
             *
             * Free with [method`GLib`.Error.free].
             */
            get regexError(): GLib.Error;
            /**
             * The [class`SearchSettings]` associated to the search context.
             *
             * This property is construct-only since version 4.0.
             */
            get settings(): SearchSettings;

            // Constructors

            constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer, settings?: SearchSettings | null): SearchContext;

            // Methods

            /**
             * Synchronous backward search.
             *
             * It is recommended to use the asynchronous functions instead, to not block the user interface.
             * However, if you are sure that the `buffer` is small, this function is more convenient to use.
             *
             * If the [property`SearchSettings:`wrap-around] property is %FALSE, this function
             * doesn't try to wrap around.
             *
             * The `has_wrapped_around` out parameter is set independently of whether a match
             * is found. So if this function returns %FALSE, `has_wrapped_around` will have
             * the same value as the [property`SearchSettings:`wrap-around] property.
             * @param iter start of search.
             * @returns whether a match was found.
             */
            backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            /**
             * The asynchronous version of [method`SearchContext`.backward].
             *
             * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. The method takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             * @param callback a #GAsyncReadyCallback to call when the operation is finished.
             */
            backward_async(
                iter: Gtk.TextIter,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a backward search started with
             * [method`SearchContext`.backward_async].
             *
             * See the documentation of [method`SearchContext`.backward] for more
             * details.
             * @param result a #GAsyncResult.
             * @returns whether a match was found.
             */
            backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            /**
             * Synchronous forward search.
             *
             * It is recommended to use the asynchronous functions instead, to not block the user interface.
             * However, if you are sure that the `buffer` is small, this function is more convenient to use.
             *
             * If the [property`SearchSettings:`wrap-around] property is %FALSE, this function
             * doesn't try to wrap around.
             *
             * The `has_wrapped_around` out parameter is set independently of whether a match
             * is found. So if this function returns %FALSE, `has_wrapped_around` will have
             * the same value as the  [property`SearchSettings:`wrap-around] property.
             * @param iter start of search.
             * @returns whether a match was found.
             */
            forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            /**
             * The asynchronous version of [method`SearchContext`.forward].
             *
             * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. The method takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             * @param callback a #GAsyncReadyCallback to call when the operation is finished.
             */
            forward_async(
                iter: Gtk.TextIter,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a forward search started with [method`SearchContext`.forward_async].
             *
             * See the documentation of [method`SearchContext`.forward] for more
             * details.
             * @param result a #GAsyncResult.
             * @returns whether a match was found.
             */
            forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            get_buffer(): Buffer;
            get_highlight(): boolean;
            get_match_style(): Style;
            /**
             * Gets the position of a search occurrence.
             *
             * If the buffer is not already fully scanned, the position may be unknown,
             * and -1 is returned. If 0 is returned, it means that this part of the buffer
             * has already been scanned, and that `match_start` and `match_end` don't delimit an occurrence.
             * @param match_start the start of the occurrence.
             * @param match_end the end of the occurrence.
             * @returns the position of the search occurrence. The first occurrence has the position 1 (not 0). Returns 0 if @match_start and @match_end don't delimit an occurrence. Returns -1 if the position is not yet known.
             */
            get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;
            /**
             * Gets the total number of search occurrences.
             *
             * If the buffer is not already fully scanned, the total number of occurrences is
             * unknown, and -1 is returned.
             * @returns the total number of search occurrences, or -1 if unknown.
             */
            get_occurrences_count(): number;
            /**
             * Regular expression patterns must follow certain rules. If
             * [property`SearchSettings:`search-text] breaks a rule, the error can be
             * retrieved with this function.
             *
             * The error domain is [error`GLib`.RegexError].
             *
             * Free the return value with [method`GLib`.Error.free].
             * @returns the #GError, or %NULL if the   pattern is valid.
             */
            get_regex_error(): GLib.Error | null;
            get_settings(): SearchSettings;
            /**
             * Replaces a search match by another text. If `match_start` and `match_end`
             * doesn't correspond to a search match, %FALSE is returned.
             *
             * `match_start` and `match_end` iters are revalidated to point to the replacement
             * text boundaries.
             *
             * For a regular expression replacement, you can check if `replace` is valid by
             * calling [func`GLib`.Regex.check_replacement]. The `replace` text can contain
             * backreferences.
             * @param match_start the start of the match to replace.
             * @param match_end the end of the match to replace.
             * @param replace the replacement text.
             * @param replace_length the length of @replace in bytes, or -1.
             * @returns whether the match has been replaced.
             */
            replace(
                match_start: Gtk.TextIter,
                match_end: Gtk.TextIter,
                replace: string,
                replace_length: number,
            ): boolean;
            /**
             * Replaces all search matches by another text.
             *
             * It is a synchronous function, so it can block the user interface.
             *
             * For a regular expression replacement, you can check if `replace` is valid by
             * calling [func`GLib`.Regex.check_replacement]. The `replace` text can contain
             * backreferences.
             * @param replace the replacement text.
             * @param replace_length the length of @replace in bytes, or -1.
             * @returns the number of replaced matches.
             */
            replace_all(replace: string, replace_length: number): number;
            /**
             * Enables or disables the search occurrences highlighting.
             * @param highlight the setting.
             */
            set_highlight(highlight: boolean): void;
            /**
             * Set the style to apply on search matches.
             *
             * If `match_style` is %NULL, default theme's scheme 'match-style' will be used.
             * To enable or disable the search highlighting, use [method`SearchContext`.set_highlight].
             * @param match_style a #GtkSourceStyle, or %NULL.
             */
            set_match_style(match_style?: Style | null): void;
        }

        module SearchSettings {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                at_word_boundaries: boolean;
                atWordBoundaries: boolean;
                case_sensitive: boolean;
                caseSensitive: boolean;
                regex_enabled: boolean;
                regexEnabled: boolean;
                search_text: string;
                searchText: string;
                visible_only: boolean;
                visibleOnly: boolean;
                wrap_around: boolean;
                wrapAround: boolean;
            }
        }

        /**
         * Search settings.
         *
         * A `GtkSourceSearchSettings` object represents the settings of a search. The
         * search settings can be associated with one or several
         * [class`SearchContext]`s.
         */
        class SearchSettings extends GObject.Object {
            static $gtype: GObject.GType<SearchSettings>;

            // Properties

            /**
             * If %TRUE, a search match must start and end a word. The match can
             * span multiple words.
             */
            get at_word_boundaries(): boolean;
            set at_word_boundaries(val: boolean);
            /**
             * If %TRUE, a search match must start and end a word. The match can
             * span multiple words.
             */
            get atWordBoundaries(): boolean;
            set atWordBoundaries(val: boolean);
            /**
             * Whether the search is case sensitive.
             */
            get case_sensitive(): boolean;
            set case_sensitive(val: boolean);
            /**
             * Whether the search is case sensitive.
             */
            get caseSensitive(): boolean;
            set caseSensitive(val: boolean);
            /**
             * Search by regular expressions with
             * [property`SearchSettings:`search-text] as the pattern.
             */
            get regex_enabled(): boolean;
            set regex_enabled(val: boolean);
            /**
             * Search by regular expressions with
             * [property`SearchSettings:`search-text] as the pattern.
             */
            get regexEnabled(): boolean;
            set regexEnabled(val: boolean);
            /**
             * A search string, or %NULL if the search is disabled.
             *
             * If the regular expression search is enabled, [property`SearchSettings:`search-text] is
             * the pattern.
             */
            get search_text(): string;
            set search_text(val: string);
            /**
             * A search string, or %NULL if the search is disabled.
             *
             * If the regular expression search is enabled, [property`SearchSettings:`search-text] is
             * the pattern.
             */
            get searchText(): string;
            set searchText(val: string);
            /**
             * Exclude invisible text from the search.
             * A search match may have invisible text interspersed.
             */
            get visible_only(): boolean;
            set visible_only(val: boolean);
            /**
             * Exclude invisible text from the search.
             * A search match may have invisible text interspersed.
             */
            get visibleOnly(): boolean;
            set visibleOnly(val: boolean);
            /**
             * For a forward search, continue at the beginning of the buffer if no
             * search occurrence is found. For a backward search, continue at the
             * end of the buffer.
             */
            get wrap_around(): boolean;
            set wrap_around(val: boolean);
            /**
             * For a forward search, continue at the beginning of the buffer if no
             * search occurrence is found. For a backward search, continue at the
             * end of the buffer.
             */
            get wrapAround(): boolean;
            set wrapAround(val: boolean);

            // Constructors

            constructor(properties?: Partial<SearchSettings.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SearchSettings;

            // Methods

            get_at_word_boundaries(): boolean;
            get_case_sensitive(): boolean;
            get_regex_enabled(): boolean;
            /**
             * Gets the text to search.
             *
             * The return value must not be freed.
             *
             * You may be interested to call [func`utils_escape_search_text]` after
             * this function.
             * @returns the text to search, or %NULL if the search is disabled.
             */
            get_search_text(): string | null;
            get_visible_only(): boolean;
            get_wrap_around(): boolean;
            /**
             * Change whether the search is done at word boundaries.
             *
             * If `at_word_boundaries` is %TRUE, a search match must start and end a word.
             * The match can span multiple words. See also [method`Gtk`.TextIter.starts_word] and
             * [method`Gtk`.TextIter.ends_word].
             * @param at_word_boundaries the setting.
             */
            set_at_word_boundaries(at_word_boundaries: boolean): void;
            /**
             * Enables or disables the case sensitivity for the search.
             * @param case_sensitive the setting.
             */
            set_case_sensitive(case_sensitive: boolean): void;
            /**
             * Enables or disables whether to search by regular expressions.
             *
             * If enabled, the [property`SearchSettings:`search-text] property contains the
             * pattern of the regular expression.
             *
             * [class`SearchContext]` uses #GRegex when regex search is enabled. See the
             * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
             * page in the GLib reference manual.
             * @param regex_enabled the setting.
             */
            set_regex_enabled(regex_enabled: boolean): void;
            /**
             * Sets the text to search.
             *
             * If `search_text` is %NULL or is empty, the search will be disabled. A copy of `search_text`
             * will be made, so you can safely free `search_text` after a call to this function.
             *
             * You may be interested to call [func`utils_unescape_search_text]` before
             * this function.
             * @param search_text the nul-terminated text to search, or %NULL to disable the search.
             */
            set_search_text(search_text?: string | null): void;
            /**
             * Enables or disables whether to exclude invisible text from the search.
             *
             * If enabled, only visible text will be searched.
             * A search match may have invisible text interspersed.
             * @param visible_only the setting.
             */
            set_visible_only(visible_only: boolean): void;
            /**
             * Enables or disables the wrap around search.
             *
             * If `wrap_around` is %TRUE, the forward search continues at the beginning of the buffer
             * if no search occurrences are found. Similarly, the backward search continues to search at
             * the end of the buffer.
             * @param wrap_around the setting.
             */
            set_wrap_around(wrap_around: boolean): void;
        }

        module Snippet {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Gtk.TextBuffer;
                description: string;
                focus_position: number;
                focusPosition: number;
                language_id: string;
                languageId: string;
                name: string;
                trigger: string;
            }
        }

        /**
         * Quick insertion code snippets.
         *
         * The `GtkSourceSnippet` represents a series of chunks that can quickly be
         * inserted into the [class`View]`.
         *
         * Snippets are defined in XML files which are loaded by the
         * [class`SnippetManager]`. Alternatively, applications can create snippets
         * on demand and insert them into the [class`View]` using
         * [method`View`.push_snippet].
         *
         * Snippet chunks can reference other snippet chunks as well as post-process
         * the values from other chunks such as capitalization.
         */
        class Snippet extends GObject.Object {
            static $gtype: GObject.GType<Snippet>;

            // Properties

            get buffer(): Gtk.TextBuffer;
            get description(): string;
            set description(val: string);
            get focus_position(): number;
            get focusPosition(): number;
            get language_id(): string;
            set language_id(val: string);
            get languageId(): string;
            set languageId(val: string);
            get name(): string;
            set name(val: string);
            get trigger(): string;
            set trigger(val: string);

            // Constructors

            constructor(properties?: Partial<Snippet.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](trigger?: string | null, language_id?: string | null): Snippet;

            static new_parsed(text: string): Snippet;

            // Methods

            /**
             * Appends `chunk` to the `snippet`.
             *
             * This may only be called before the snippet has been expanded.
             * @param chunk a #GtkSourceSnippetChunk
             */
            add_chunk(chunk: SnippetChunk): void;
            /**
             * Does a deep copy of the snippet.
             * @returns A new #GtkSourceSnippet
             */
            copy(): Snippet;
            /**
             * Gets the context used for expanding the snippet.
             * @returns an #GtkSourceSnippetContext
             */
            get_context(): SnippetContext | null;
            /**
             * Gets the description for the snippet.
             */
            get_description(): string;
            /**
             * Gets the current focus for the snippet.
             *
             * This is changed as the user tabs through focus locations.
             * @returns The focus position, or -1 if unset.
             */
            get_focus_position(): number;
            /**
             * Gets the language-id used for the source snippet.
             *
             * The language identifier should be one that matches a
             * source language [property`Language:`id] property.
             * @returns the language identifier
             */
            get_language_id(): string;
            /**
             * Gets the number of chunks in the snippet.
             *
             * Note that not all chunks are editable.
             * @returns The number of chunks.
             */
            get_n_chunks(): number;
            /**
             * Gets the name for the snippet.
             */
            get_name(): string;
            /**
             * Gets the chunk at `nth`.
             * @param nth the nth chunk to get
             * @returns an #GtkSourceSnippetChunk
             */
            get_nth_chunk(nth: number): SnippetChunk;
            /**
             * Gets the trigger for the source snippet.
             *
             * A trigger is a word that can be expanded into the full snippet when
             * the user presses Tab.
             * @returns A string or %NULL
             */
            get_trigger(): string | null;
            /**
             * Sets the description for the snippet.
             * @param description the snippet description
             */
            set_description(description: string): void;
            /**
             * Sets the language identifier for the snippet.
             *
             * This should match the [property`Language:`id] identifier.
             * @param language_id the language identifier for the snippet
             */
            set_language_id(language_id: string): void;
            /**
             * Sets the name for the snippet.
             * @param name the snippet name
             */
            set_name(name: string): void;
            /**
             * Sets the trigger for the snippet.
             * @param trigger the trigger word
             */
            set_trigger(trigger: string): void;
        }

        module SnippetChunk {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
                context: SnippetContext;
                focus_position: number;
                focusPosition: number;
                spec: string;
                text: string;
                text_set: boolean;
                textSet: boolean;
                tooltip_text: string;
                tooltipText: string;
            }
        }

        /**
         * A chunk of text within the source snippet.
         *
         * The `GtkSourceSnippetChunk` represents a single chunk of text that
         * may or may not be an edit point within the snippet. Chunks that are
         * an edit point (also called a tab stop) have the
         * [property`SnippetChunk:`focus-position] property set.
         */
        class SnippetChunk extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<SnippetChunk>;

            // Properties

            get context(): SnippetContext;
            set context(val: SnippetContext);
            get focus_position(): number;
            set focus_position(val: number);
            get focusPosition(): number;
            set focusPosition(val: number);
            get spec(): string;
            set spec(val: string);
            get text(): string;
            set text(val: string);
            get text_set(): boolean;
            set text_set(val: boolean);
            get textSet(): boolean;
            set textSet(val: boolean);
            get tooltip_text(): string;
            set tooltip_text(val: string);
            get tooltipText(): string;
            set tooltipText(val: string);

            // Constructors

            constructor(properties?: Partial<SnippetChunk.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SnippetChunk;

            // Methods

            /**
             * Copies the source snippet.
             * @returns A #GtkSourceSnippetChunk
             */
            copy(): SnippetChunk;
            /**
             * Gets the context for the snippet insertion.
             * @returns A #GtkSourceSnippetContext
             */
            get_context(): SnippetContext;
            /**
             * Gets the [property`SnippetChunk:`focus-position].
             *
             * The focus-position is used to determine how many tabs it takes for the
             * snippet to advanced to this chunk.
             *
             * A focus-position of zero will be the last focus position of the snippet
             * and snippet editing ends when it has been reached.
             *
             * A focus-position of -1 means the chunk cannot be focused by the user.
             * @returns the focus-position
             */
            get_focus_position(): number;
            /**
             * Gets the specification for the chunk.
             *
             * The specification is evaluated for variables when other chunks are edited
             * within the snippet context. If the user has changed the text, the
             * [property`SnippetChunk:`text] and [property`SnippetChunk:`text-set] properties
             * are updated.
             * @returns the specification, if any
             */
            get_spec(): string | null;
            /**
             * Gets the [property`SnippetChunk:`text] property.
             *
             * The text property is updated when the user edits the text of the chunk.
             * If it has not been edited, the [property`SnippetChunk:`spec] property is
             * returned.
             * @returns the text of the chunk
             */
            get_text(): string;
            /**
             * Gets the [property`SnippetChunk:`text-set] property.
             *
             * This is typically set when the user has edited a snippet chunk.
             */
            get_text_set(): boolean;
            get_tooltip_text(): string;
            set_context(context: SnippetContext): void;
            /**
             * Sets the [property`SnippetChunk:`focus-position] property.
             *
             * The focus-position is used to determine how many tabs it takes for the
             * snippet to advanced to this chunk.
             *
             * A focus-position of zero will be the last focus position of the snippet
             * and snippet editing ends when it has been reached.
             *
             * A focus-position of -1 means the chunk cannot be focused by the user.
             * @param focus_position the focus-position
             */
            set_focus_position(focus_position: number): void;
            /**
             * Sets the specification for the chunk.
             *
             * The specification is evaluated for variables when other chunks are edited
             * within the snippet context. If the user has changed the text, the
             * [property`SnippetChunk:`text and] [property`SnippetChunk:`text-set] properties
             * are updated.
             * @param spec the new specification for the chunk
             */
            set_spec(spec: string): void;
            /**
             * Sets the text for the snippet chunk.
             *
             * This is usually used by the snippet engine to update the text, but may
             * be useful when creating custom snippets to avoid expansion of any
             * specification.
             * @param text the text of the property
             */
            set_text(text: string): void;
            /**
             * Sets the [property`SnippetChunk:`text-set] property.
             *
             * This is typically set when the user has edited a snippet chunk by the
             * snippet engine.
             * @param text_set the property value
             */
            set_text_set(text_set: boolean): void;
            set_tooltip_text(tooltip_text: string): void;
        }

        module SnippetContext {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Context for expanding [class`SnippetChunk]`.
         *
         * This class is currently used primary as a hashtable. However, the longer
         * term goal is to have it hold onto a `GjsContext` as well as other languages
         * so that [class`SnippetChunk]` can expand themselves by executing
         * script within the context.
         *
         * The [class`Snippet]` will build the context and then expand each of the
         * chunks during the insertion/edit phase.
         */
        class SnippetContext extends GObject.Object {
            static $gtype: GObject.GType<SnippetContext>;

            // Constructors

            constructor(properties?: Partial<SnippetContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SnippetContext;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Methods

            /**
             * Removes all variables from the context.
             */
            clear_variables(): void;
            expand(input: string): string;
            /**
             * Gets the current value for a variable named `key`.
             * @param key the name of the variable
             * @returns the value for the variable, or %NULL
             */
            get_variable(key: string): string | null;
            /**
             * Sets a constatnt within the context.
             *
             * This is similar to a variable set with [method`SnippetContext`.set_variable]
             * but is expected to not change during use of the snippet.
             *
             * Examples would be the date or users name.
             * @param key the constant name
             * @param value the value of the constant
             */
            set_constant(key: string, value: string): void;
            set_line_prefix(line_prefix: string): void;
            set_tab_width(tab_width: number): void;
            set_use_spaces(use_spaces: boolean): void;
            /**
             * Sets a variable within the context.
             *
             * This variable may be overridden by future updates to the
             * context.
             * @param key the variable name
             * @param value the value for the variable
             */
            set_variable(key: string, value: string): void;
        }

        module SnippetManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                search_path: string[];
                searchPath: string[];
            }
        }

        /**
         * Provides access to [class`Snippet]`.
         *
         * `GtkSourceSnippetManager` is an object which processes snippet description
         * files and creates [class`Snippet]` objects.
         *
         * Use [func`SnippetManager`.get_default] to retrieve the default
         * instance of `GtkSourceSnippetManager`.
         *
         * Use [method`SnippetManager`.get_snippet] to retrieve snippets for
         * a given snippets.
         */
        class SnippetManager extends GObject.Object {
            static $gtype: GObject.GType<SnippetManager>;

            // Properties

            /**
             * Contains a list of directories to search for files containing snippets (*.snippets).
             */
            get search_path(): string[];
            set search_path(val: string[]);
            /**
             * Contains a list of directories to search for files containing snippets (*.snippets).
             */
            get searchPath(): string[];
            set searchPath(val: string[]);

            // Constructors

            constructor(properties?: Partial<SnippetManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns the default #GtkSourceSnippetManager instance.
             */
            static get_default(): SnippetManager;

            // Methods

            /**
             * Gets the list directories where `self` looks for snippet files.
             * @returns %NULL-terminated array   containing a list of snippet files directories.   The array is owned by @lm and must not be modified.
             */
            get_search_path(): string[];
            /**
             * Queries the known snippets for the first matching `group,` `language_id,`
             * and/or `trigger`.
             *
             * If `group` or `language_id` are %NULL, they will be ignored.
             * @param group a group name or %NULL
             * @param language_id a #GtkSourceLanguage:id or %NULL
             * @param trigger the trigger for the snippet
             * @returns a #GtkSourceSnippet or %NULL if no   matching snippet was found.
             */
            get_snippet(group: string | null, language_id: string | null, trigger: string): Snippet | null;
            /**
             * Gets a [iface`Gio`.ListModel] of all snippets.
             *
             * This can be used to get an unfiltered list of all of the snippets
             * known to the snippet manager.
             * @returns a [iface@Gio.ListModel] of [class@GtkSource.Snippet]
             */
            list_all(): Gio.ListModel;
            /**
             * List all the known groups within the snippet manager.
             *
             * The result should be freed with g_free(), and the individual strings are
             * owned by `self` and should never be freed by the caller.
             * @returns An array of strings which should be freed with g_free().
             */
            list_groups(): string[];
            /**
             * Queries the known snippets for those matching `group,` `language_id,` and/or
             * `trigger_prefix`.
             *
             * If any of these are %NULL, they will be ignored when filtering the available snippets.
             *
             * The [iface`Gio`.ListModel] only contains information about the available snippets until
             * [method`Gio`.ListModel.get_item] is called for a specific snippet. This helps reduce
             * the number of [class`GObject`.Object]'s that are created at runtime to those needed by
             * the calling application.
             * @param group a group name or %NULL
             * @param language_id a #GtkSourceLanguage:id or %NULL
             * @param trigger_prefix a prefix for a trigger to activate
             * @returns a #GListModel of #GtkSourceSnippet.
             */
            list_matching(
                group?: string | null,
                language_id?: string | null,
                trigger_prefix?: string | null,
            ): Gio.ListModel;
            /**
             * Sets the list of directories in which the `GtkSourceSnippetManager` looks for
             * snippet files.
             *
             * If `dirs` is %NULL, the search path is reset to default.
             *
             * At the moment this function can be called only before the
             * snippet files are loaded for the first time. In practice
             * to set a custom search path for a `GtkSourceSnippetManager`,
             * you have to call this function right after creating it.
             * @param dirs a %NULL-terminated array of   strings or %NULL.
             */
            set_search_path(dirs?: string[] | null): void;
        }

        module SpaceDrawer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                enable_matrix: boolean;
                enableMatrix: boolean;
                matrix: GLib.Variant;
            }
        }

        /**
         * Represent white space characters with symbols.
         *
         * #GtkSourceSpaceDrawer provides a way to visualize white spaces, by drawing
         * symbols.
         *
         * Call [method`View`.get_space_drawer] to get the `GtkSourceSpaceDrawer`
         * instance of a certain [class`View]`.
         *
         * By default, no white spaces are drawn because the
         * [property`SpaceDrawer:`enable-matrix] is %FALSE.
         *
         * To draw white spaces, [method`SpaceDrawer`.set_types_for_locations] can
         * be called to set the [property`SpaceDrawer:`matrix] property (by default all
         * space types are enabled at all locations). Then call
         * [method`SpaceDrawer`.set_enable_matrix].
         *
         * For a finer-grained method, there is also the [class`Tag]`'s
         * [property`Tag:`draw-spaces] property.
         *
         * # Example
         *
         * To draw non-breaking spaces everywhere and draw all types of trailing spaces
         * except newlines:
         * ```c
         * gtk_source_space_drawer_set_types_for_locations (space_drawer,
         *                                                  GTK_SOURCE_SPACE_LOCATION_ALL,
         *                                                  GTK_SOURCE_SPACE_TYPE_NBSP);
         *
         * gtk_source_space_drawer_set_types_for_locations (space_drawer,
         *                                                  GTK_SOURCE_SPACE_LOCATION_TRAILING,
         *                                                  GTK_SOURCE_SPACE_TYPE_ALL &
         *                                                  ~GTK_SOURCE_SPACE_TYPE_NEWLINE);
         *
         * gtk_source_space_drawer_set_enable_matrix (space_drawer, TRUE);
         * ```
         *
         * # Use-case: draw unwanted white spaces
         *
         * A possible use-case is to draw only unwanted white spaces. Examples:
         *
         * - Draw all trailing spaces.
         * - If the indentation and alignment must be done with spaces, draw tabs.
         *
         * And non-breaking spaces can always be drawn, everywhere, to distinguish them
         * from normal spaces.
         */
        class SpaceDrawer extends GObject.Object {
            static $gtype: GObject.GType<SpaceDrawer>;

            // Properties

            /**
             * Whether the [property`SpaceDrawer:`matrix] property is enabled.
             */
            get enable_matrix(): boolean;
            set enable_matrix(val: boolean);
            /**
             * Whether the [property`SpaceDrawer:`matrix] property is enabled.
             */
            get enableMatrix(): boolean;
            set enableMatrix(val: boolean);
            /**
             * The property is a [struct`GLib`.Variant] property to specify where and
             * what kind of white spaces to draw.
             *
             * The [struct`GLib`.Variant] is of type `"au"`, an array of unsigned integers. Each
             * integer is a combination of [flags`SpaceTypeFlags]`. There is one
             * integer for each [flags`SpaceLocationFlags]`, in the same order as
             * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
             * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
             *
             * If the array is shorter than the number of locations, then the value
             * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
             *
             * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.4
             */
            get matrix(): GLib.Variant;
            set matrix(val: GLib.Variant);

            // Constructors

            constructor(properties?: Partial<SpaceDrawer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SpaceDrawer;

            // Methods

            /**
             * Binds the [property`SpaceDrawer:`matrix] property to a [class`Gio`.Settings] key.
             *
             * The [class`Gio`.Settings] key must be of the same type as the
             * [property`SpaceDrawer:`matrix] property, that is, `"au"`.
             *
             * The [method`Gio`.Settings.bind] function cannot be used, because the default GIO
             * mapping functions don't support [struct`GLib`.Variant] properties (maybe it will be
             * supported by a future GIO version, in which case this function can be
             * deprecated).
             * @param settings a #GSettings object.
             * @param key the @settings key to bind.
             * @param flags flags for the binding.
             */
            bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;
            get_enable_matrix(): boolean;
            /**
             * Gets the value of the [property`SpaceDrawer:`matrix] property, as a [struct`GLib`.Variant].
             *
             * An empty array can be returned in case the matrix is a zero matrix.
             *
             * The [method`SpaceDrawer`.get_types_for_locations] function may be more
             * convenient to use.
             * @returns the #GtkSourceSpaceDrawer:matrix value as a new floating #GVariant   instance.
             */
            get_matrix(): GLib.Variant;
            /**
             * If only one location is specified, this function returns what kind of
             * white spaces are drawn at that location.
             *
             * The value is retrieved from the [property`SpaceDrawer:`matrix] property.
             *
             * If several locations are specified, this function returns the logical AND for
             * those locations. Which means that if a certain kind of white space is present
             * in the return value, then that kind of white space is drawn at all the
             * specified `locations`.
             * @param locations one or several #GtkSourceSpaceLocationFlags.
             * @returns a combination of #GtkSourceSpaceTypeFlags.
             */
            get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;
            /**
             * Sets whether the [property`SpaceDrawer:`matrix] property is enabled.
             * @param enable_matrix the new value.
             */
            set_enable_matrix(enable_matrix: boolean): void;
            /**
             * Sets a new value to the [property`SpaceDrawer:`matrix] property, as a [struct`GLib`.Variant].
             *
             * If `matrix` is %NULL, then an empty array is set.
             *
             * If `matrix` is floating, it is consumed.
             *
             * The [method`SpaceDrawer`.set_types_for_locations] function may be more
             * convenient to use.
             * @param matrix the new matrix value, or %NULL.
             */
            set_matrix(matrix?: GLib.Variant | null): void;
            /**
             * Modifies the [property`SpaceDrawer:`matrix] property at the specified
             * `locations`.
             * @param locations one or several #GtkSourceSpaceLocationFlags.
             * @param types a combination of #GtkSourceSpaceTypeFlags.
             */
            set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;
        }

        module Style {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                background: string;
                background_set: boolean;
                backgroundSet: boolean;
                bold: boolean;
                bold_set: boolean;
                boldSet: boolean;
                foreground: string;
                foreground_set: boolean;
                foregroundSet: boolean;
                italic: boolean;
                italic_set: boolean;
                italicSet: boolean;
                line_background: string;
                lineBackground: string;
                line_background_set: boolean;
                lineBackgroundSet: boolean;
                pango_underline: Pango.Underline;
                pangoUnderline: Pango.Underline;
                scale: string;
                scale_set: boolean;
                scaleSet: boolean;
                strikethrough: boolean;
                strikethrough_set: boolean;
                strikethroughSet: boolean;
                underline_color: string;
                underlineColor: string;
                underline_color_set: boolean;
                underlineColorSet: boolean;
                underline_set: boolean;
                underlineSet: boolean;
                weight: Pango.Weight;
                weight_set: boolean;
                weightSet: boolean;
            }
        }

        /**
         * Represents a style.
         *
         * The `GtkSourceStyle` structure is used to describe text attributes
         * which are set when given style is used.
         */
        class Style extends GObject.Object {
            static $gtype: GObject.GType<Style>;

            // Properties

            get background(): string;
            get background_set(): boolean;
            get backgroundSet(): boolean;
            get bold(): boolean;
            get bold_set(): boolean;
            get boldSet(): boolean;
            get foreground(): string;
            get foreground_set(): boolean;
            get foregroundSet(): boolean;
            get italic(): boolean;
            get italic_set(): boolean;
            get italicSet(): boolean;
            get line_background(): string;
            get lineBackground(): string;
            get line_background_set(): boolean;
            get lineBackgroundSet(): boolean;
            get pango_underline(): Pango.Underline;
            get pangoUnderline(): Pango.Underline;
            get scale(): string;
            get scale_set(): boolean;
            get scaleSet(): boolean;
            get strikethrough(): boolean;
            get strikethrough_set(): boolean;
            get strikethroughSet(): boolean;
            get underline_color(): string;
            get underlineColor(): string;
            get underline_color_set(): boolean;
            get underlineColorSet(): boolean;
            get underline_set(): boolean;
            get underlineSet(): boolean;
            get weight(): Pango.Weight;
            get weight_set(): boolean;
            get weightSet(): boolean;

            // Constructors

            constructor(properties?: Partial<Style.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * This function modifies the [class`Gtk`.TextTag] properties that are related to the
             * #GtkSourceStyle properties. Other [class`Gtk`.TextTag] properties are left untouched.
             *
             * If `style` is non-%NULL, applies `style` to `tag`.
             *
             * If `style` is %NULL, the related *-set properties of [class`Gtk`.TextTag] are set to
             * %FALSE.
             * @param tag a #GtkTextTag to apply styles to.
             */
            apply(tag: Gtk.TextTag): void;
            /**
             * Creates a copy of `style,` that is a new #GtkSourceStyle instance which
             * has the same attributes set.
             * @returns copy of @style, call g_object_unref() when you are done with it.
             */
            copy(): Style;
        }

        module StyleScheme {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                description: string;
                filename: string;
                id: string;
                name: string;
            }
        }

        /**
         * Controls the appearance of [class`View]`.
         *
         * #GtkSourceStyleScheme contains all the text styles to be used in
         * [class`View]` and [class`Buffer]`. For instance, it contains text styles
         * for syntax highlighting, it may contain foreground and background color for
         * non-highlighted text, color for the line numbers, current line highlighting,
         * bracket matching, etc.
         *
         * Style schemes are stored in XML files. The format of a scheme file is
         * documented in the [style scheme reference](./style-reference.html).
         *
         * The two style schemes with IDs "classic" and "tango" follow more closely the
         * GTK theme (for example for the background color).
         */
        class StyleScheme extends GObject.Object {
            static $gtype: GObject.GType<StyleScheme>;

            // Properties

            /**
             * Style scheme description, a translatable string to present to the user.
             */
            get description(): string;
            /**
             * Style scheme filename or %NULL.
             */
            get filename(): string;
            /**
             * Style scheme id, a unique string used to identify the style scheme
             * in [class`StyleSchemeManager]`.
             */
            get id(): string;
            /**
             * Style scheme name, a translatable string to present to the user.
             */
            get name(): string;

            // Constructors

            constructor(properties?: Partial<StyleScheme.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_authors(): string[] | null;
            get_description(): string | null;
            get_filename(): string | null;
            get_id(): string;
            /**
             * Gets a metadata property from the style scheme.
             * @param name metadata property name.
             * @returns value of property @name stored in   the metadata of @scheme or %NULL if @scheme does not contain the   specified metadata property.
             */
            get_metadata(name: string): string | null;
            get_name(): string;
            get_style(style_id: string): Style | null;
        }

        module StyleSchemeChooserButton {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Button.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Actionable.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    StyleSchemeChooser.ConstructorProps {}
        }

        /**
         * A button to launch a style scheme selection dialog.
         *
         * The `GtkSourceStyleSchemeChooserButton` is a button which displays
         * the currently selected style scheme and allows to open a style scheme
         * selection dialog to change the style scheme.
         * It is suitable widget for selecting a style scheme in a preference dialog.
         *
         * In `GtkSourceStyleSchemeChooserButton`, a [class`StyleSchemeChooserWidget]`
         * is used to provide a dialog for selecting style schemes.
         */
        class StyleSchemeChooserButton
            extends Gtk.Button
            implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser
        {
            static $gtype: GObject.GType<StyleSchemeChooserButton>;

            // Constructors

            constructor(properties?: Partial<StyleSchemeChooserButton.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): StyleSchemeChooserButton;

            // Inherited properties
            /**
             * The name of the action with which this widget should be associated.
             */
            get action_name(): string;
            set action_name(val: string);
            /**
             * The name of the action with which this widget should be associated.
             */
            get actionName(): string;
            set actionName(val: string);
            /**
             * The target value of the actionable widget's action.
             */
            get action_target(): GLib.Variant;
            set action_target(val: GLib.Variant);
            /**
             * The target value of the actionable widget's action.
             */
            get actionTarget(): GLib.Variant;
            set actionTarget(val: GLib.Variant);
            /**
             * Contains the currently selected style scheme.
             *
             * The property can be set to change the current selection programmatically.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * Contains the currently selected style scheme.
             *
             * The property can be set to change the current selection programmatically.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);
            /**
             * Whether the widget or any of its descendents can accept
             * the input focus.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get can_focus(): boolean;
            set can_focus(val: boolean);
            /**
             * Whether the widget or any of its descendents can accept
             * the input focus.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get canFocus(): boolean;
            set canFocus(val: boolean);
            /**
             * Whether the widget can receive pointer events.
             */
            get can_target(): boolean;
            set can_target(val: boolean);
            /**
             * Whether the widget can receive pointer events.
             */
            get canTarget(): boolean;
            set canTarget(val: boolean);
            /**
             * A list of css classes applied to this widget.
             */
            get css_classes(): string[];
            set css_classes(val: string[]);
            /**
             * A list of css classes applied to this widget.
             */
            get cssClasses(): string[];
            set cssClasses(val: string[]);
            /**
             * The name of this widget in the CSS tree.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get css_name(): string;
            /**
             * The name of this widget in the CSS tree.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get cssName(): string;
            /**
             * The cursor used by `widget`.
             */
            get cursor(): Gdk.Cursor;
            set cursor(val: Gdk.Cursor);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             */
            get focus_on_click(): boolean;
            set focus_on_click(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             */
            get focusOnClick(): boolean;
            set focusOnClick(val: boolean);
            /**
             * Whether this widget itself will accept the input focus.
             */
            get focusable(): boolean;
            set focusable(val: boolean);
            /**
             * How to distribute horizontal space if widget gets extra space.
             */
            get halign(): Gtk.Align;
            set halign(val: Gtk.Align);
            /**
             * Whether the widget is the default widget.
             */
            get has_default(): boolean;
            /**
             * Whether the widget is the default widget.
             */
            get hasDefault(): boolean;
            /**
             * Whether the widget has the input focus.
             */
            get has_focus(): boolean;
            /**
             * Whether the widget has the input focus.
             */
            get hasFocus(): boolean;
            /**
             * Enables or disables the emission of the ::query-tooltip signal on `widget`.
             *
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
             * determine whether it will provide a tooltip or not.
             */
            get has_tooltip(): boolean;
            set has_tooltip(val: boolean);
            /**
             * Enables or disables the emission of the ::query-tooltip signal on `widget`.
             *
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
             * determine whether it will provide a tooltip or not.
             */
            get hasTooltip(): boolean;
            set hasTooltip(val: boolean);
            /**
             * Override for height request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get height_request(): number;
            set height_request(val: number);
            /**
             * Override for height request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get heightRequest(): number;
            set heightRequest(val: number);
            /**
             * Whether to expand horizontally.
             */
            get hexpand(): boolean;
            set hexpand(val: boolean);
            /**
             * Whether to use the `hexpand` property.
             */
            get hexpand_set(): boolean;
            set hexpand_set(val: boolean);
            /**
             * Whether to use the `hexpand` property.
             */
            get hexpandSet(): boolean;
            set hexpandSet(val: boolean);
            /**
             * The `GtkLayoutManager` instance to use to compute the preferred size
             * of the widget, and allocate its children.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get layout_manager(): Gtk.LayoutManager;
            set layout_manager(val: Gtk.LayoutManager);
            /**
             * The `GtkLayoutManager` instance to use to compute the preferred size
             * of the widget, and allocate its children.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get layoutManager(): Gtk.LayoutManager;
            set layoutManager(val: Gtk.LayoutManager);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_bottom(): number;
            set margin_bottom(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginBottom(): number;
            set marginBottom(val: number);
            /**
             * Margin on end of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_end(): number;
            set margin_end(val: number);
            /**
             * Margin on end of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginEnd(): number;
            set marginEnd(val: number);
            /**
             * Margin on start of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_start(): number;
            set margin_start(val: number);
            /**
             * Margin on start of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginStart(): number;
            set marginStart(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_top(): number;
            set margin_top(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginTop(): number;
            set marginTop(val: number);
            /**
             * The name of the widget.
             */
            get name(): string;
            set name(val: string);
            /**
             * The requested opacity of the widget.
             */
            get opacity(): number;
            set opacity(val: number);
            /**
             * How content outside the widget's content area is treated.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get overflow(): Gtk.Overflow;
            set overflow(val: Gtk.Overflow);
            /**
             * The parent widget of this widget.
             */
            get parent(): Gtk.Widget;
            /**
             * Whether the widget will receive the default action when it is focused.
             */
            get receives_default(): boolean;
            set receives_default(val: boolean);
            /**
             * Whether the widget will receive the default action when it is focused.
             */
            get receivesDefault(): boolean;
            set receivesDefault(val: boolean);
            /**
             * The `GtkRoot` widget of the widget tree containing this widget.
             *
             * This will be %NULL if the widget is not contained in a root widget.
             */
            get root(): Gtk.Root;
            /**
             * The scale factor of the widget.
             */
            get scale_factor(): number;
            /**
             * The scale factor of the widget.
             */
            get scaleFactor(): number;
            /**
             * Whether the widget responds to input.
             */
            get sensitive(): boolean;
            set sensitive(val: boolean);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with Pango markup.
             *
             * Also see [method`Gtk`.Tooltip.set_markup].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltip_markup(): string;
            set tooltip_markup(val: string);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with Pango markup.
             *
             * Also see [method`Gtk`.Tooltip.set_markup].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltipMarkup(): string;
            set tooltipMarkup(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see [method`Gtk`.Tooltip.set_text].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltip_text(): string;
            set tooltip_text(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see [method`Gtk`.Tooltip.set_text].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltipText(): string;
            set tooltipText(val: string);
            /**
             * How to distribute vertical space if widget gets extra space.
             */
            get valign(): Gtk.Align;
            set valign(val: Gtk.Align);
            /**
             * Whether to expand vertically.
             */
            get vexpand(): boolean;
            set vexpand(val: boolean);
            /**
             * Whether to use the `vexpand` property.
             */
            get vexpand_set(): boolean;
            set vexpand_set(val: boolean);
            /**
             * Whether to use the `vexpand` property.
             */
            get vexpandSet(): boolean;
            set vexpandSet(val: boolean);
            /**
             * Whether the widget is visible.
             */
            get visible(): boolean;
            set visible(val: boolean);
            /**
             * Override for width request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get width_request(): number;
            set width_request(val: number);
            /**
             * Override for width request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get widthRequest(): number;
            set widthRequest(val: number);

            // Inherited methods
            /**
             * Gets the action name for `actionable`.
             * @returns the action name
             */
            get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             * @returns the current target value
             */
            get_action_target_value(): GLib.Variant | null;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.
             *
             * If `action_name` is %NULL then the widget will be unassociated from
             * any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a `GtkApplicationWindow`.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing [class`ApplicationWindow]` or its associated [class`Application]`,
             * respectively. This is the same form used for actions in the [class`Gio`.Menu]
             * associated with the window.
             * @param action_name an action name
             */
            set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes. First, it is used as the parameter
             * to activation of the action associated with the `GtkActionable` widget.
             * Second, it is used to determine if the widget should be rendered as
             * “active” — the widget is active if the state is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
             * with string state in a typical “radio button” situation. Each button
             * will be associated with the same action, but with a different target
             * value for that action. Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value. Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a [struct@GLib.Variant] to set as the target value
             */
            set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * Sets the action-name and associated string target value of an
             * actionable widget.
             *
             * `detailed_action_name` is a string in the format accepted by
             * [func`Gio`.Action.parse_detailed_name].
             * @param detailed_action_name the detailed action name
             */
            set_detailed_action_name(detailed_action_name: string): void;
            /**
             * Gets the action name for `actionable`.
             */
            vfunc_get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             */
            vfunc_get_action_target_value(): GLib.Variant | null;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.
             *
             * If `action_name` is %NULL then the widget will be unassociated from
             * any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a `GtkApplicationWindow`.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing [class`ApplicationWindow]` or its associated [class`Application]`,
             * respectively. This is the same form used for actions in the [class`Gio`.Menu]
             * associated with the window.
             * @param action_name an action name
             */
            vfunc_set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes. First, it is used as the parameter
             * to activation of the action associated with the `GtkActionable` widget.
             * Second, it is used to determine if the widget should be rendered as
             * “active” — the widget is active if the state is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
             * with string state in a typical “radio button” situation. Each button
             * will be associated with the same action, but with a different target
             * value for that action. Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value. Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a [struct@GLib.Variant] to set as the target value
             */
            vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * Gets the currently-selected scheme.
             * @returns the currently-selected scheme.
             */
            get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            set_style_scheme(scheme: StyleScheme): void;
            /**
             * Gets the currently-selected scheme.
             */
            vfunc_get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            vfunc_set_style_scheme(scheme: StyleScheme): void;
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
            /**
             * Enable or disable an action installed with
             * gtk_widget_class_install_action().
             * @param action_name action name, such as "clipboard.paste"
             * @param enabled whether the action is now enabled
             */
            action_set_enabled(action_name: string, enabled: boolean): void;
            /**
             * For widgets that can be “activated” (buttons, menu items, etc.),
             * this function activates them.
             *
             * The activation will emit the signal set using
             * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
             *
             * Activation is what happens when you press <kbd>Enter</kbd>
             * on a widget during key navigation.
             *
             * If you wish to handle the activation keybinding yourself, it is
             * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
             * created with [ctor`Gtk`.SignalAction.new].
             *
             * If `widget` isn't activatable, the function returns %FALSE.
             * @returns %TRUE if the widget was activatable
             */
            activate(): boolean;
            /**
             * Looks up the action in the action groups associated with
             * `widget` and its ancestors, and activates it.
             *
             * If the action is in an action group added with
             * [method`Gtk`.Widget.insert_action_group], the `name` is expected
             * to be prefixed with the prefix that was used when the group was
             * inserted.
             *
             * The arguments must match the actions expected parameter type,
             * as returned by `g_action_get_parameter_type()`.
             * @param name the name of the action to activate
             * @param args parameters to use
             * @returns %TRUE if the action was activated, %FALSE if the   action does not exist.
             */
            activate_action(name: string, args?: GLib.Variant | null): boolean;
            /**
             * Activates the `default.activate` action from `widget`.
             */
            activate_default(): void;
            /**
             * Adds `controller` to `widget` so that it will receive events.
             *
             * You will usually want to call this function right after
             * creating any kind of [class`Gtk`.EventController].
             * @param controller a `GtkEventController` that hasn't been   added to a widget yet
             */
            add_controller(controller: Gtk.EventController): void;
            /**
             * Adds a style class to `widget`.
             *
             * After calling this function, the widget’s style will match
             * for `css_class,` according to CSS matching rules.
             *
             * Use [method`Gtk`.Widget.remove_css_class] to remove the
             * style again.
             * @param css_class The style class to add to @widget, without   the leading '.' used for notation of style classes
             */
            add_css_class(css_class: string): void;
            /**
             * Adds a widget to the list of mnemonic labels for this widget.
             *
             * See [method`Gtk`.Widget.list_mnemonic_labels]. Note the
             * list of mnemonic labels for the widget is cleared when the
             * widget is destroyed, so the caller must make sure to update
             * its internal state at this point as well.
             * @param label a `GtkWidget` that acts as a mnemonic label for @widget
             */
            add_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Queues an animation frame update and adds a callback to be called
             * before each frame.
             *
             * Until the tick callback is removed, it will be called frequently
             * (usually at the frame rate of the output device or as quickly as
             * the application can be repainted, whichever is slower). For this
             * reason, is most suitable for handling graphics that change every
             * frame or every few frames. The tick callback does not automatically
             * imply a relayout or repaint. If you want a repaint or relayout, and
             * aren’t changing widget properties that would trigger that (for example,
             * changing the text of a `GtkLabel`), then you will have to call
             * [method`Gtk`.Widget.queue_resize] or [method`Gtk`.Widget.queue_draw]
             * yourself.
             *
             * [method`Gdk`.FrameClock.get_frame_time] should generally be used
             * for timing continuous animations and
             * [method`Gdk`.FrameTimings.get_predicted_presentation_time] if you are
             * trying to display isolated frames at particular times.
             *
             * This is a more convenient alternative to connecting directly to the
             * [signal`Gdk`.FrameClock::update] signal of `GdkFrameClock`, since you
             * don't have to worry about when a `GdkFrameClock` is assigned to a widget.
             * @param callback function   to call for updating animations
             * @returns an id for the connection of this callback. Remove the callback   by passing the id returned from this function to   [method@Gtk.Widget.remove_tick_callback]
             */
            add_tick_callback(callback: Gtk.TickCallback): number;
            /**
             * This function is only used by `GtkWidget` subclasses, to
             * assign a size, position and (optionally) baseline to their
             * child widgets.
             *
             * In this function, the allocation and baseline may be adjusted.
             * The given allocation will be forced to be bigger than the
             * widget's minimum size, as well as at least 0×0 in size.
             *
             * For a version that does not take a transform, see
             * [method`Gtk`.Widget.size_allocate].
             * @param width New width of @widget
             * @param height New height of @widget
             * @param baseline New baseline of @widget, or -1
             * @param transform Transformation to be applied to @widget
             */
            allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
            /**
             * Called by widgets as the user moves around the window using
             * keyboard shortcuts.
             *
             * The `direction` argument indicates what kind of motion is taking place (up,
             * down, left, right, tab forward, tab backward).
             *
             * This function calls the [vfunc`Gtk`.Widget.focus] virtual function; widgets
             * can override the virtual function in order to implement appropriate focus
             * behavior.
             *
             * The default `focus()` virtual function for a widget should return `TRUE` if
             * moving in `direction` left the focus on a focusable location inside that
             * widget, and `FALSE` if moving in `direction` moved the focus outside the
             * widget. When returning `TRUE`, widgets normally call [method`Gtk`.Widget.grab_focus]
             * to place the focus accordingly; when returning `FALSE`, they don’t modify
             * the current focus location.
             *
             * This function is used by custom widget implementations; if you're
             * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
             * the focus to a particular widget.
             * @param direction direction of focus movement
             * @returns %TRUE if focus ended up inside @widget
             */
            child_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Computes the bounds for `widget` in the coordinate space of `target`.
             *
             * The bounds of widget are (the bounding box of) the region that it is
             * expected to draw in. See the [coordinate system](coordinates.html)
             * overview to learn more.
             *
             * If the operation is successful, %TRUE is returned. If `widget` has no
             * bounds or the bounds cannot be expressed in `target'`s coordinate space
             * (for example if both widgets are in different windows), %FALSE is
             * returned and `bounds` is set to the zero rectangle.
             *
             * It is valid for `widget` and `target` to be the same widget.
             * @param target the `GtkWidget`
             * @returns %TRUE if the bounds could be computed
             */
            compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
            /**
             * Computes whether a container should give this widget
             * extra space when possible.
             *
             * Containers should check this, rather than looking at
             * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
             *
             * This function already checks whether the widget is visible, so
             * visibility does not need to be checked separately. Non-visible
             * widgets are not expanded.
             *
             * The computed expand value uses either the expand setting explicitly
             * set on the widget itself, or, if none has been explicitly set,
             * the widget may expand if some of its children do.
             * @param orientation expand direction
             * @returns whether widget tree rooted here should be expanded
             */
            compute_expand(orientation: Gtk.Orientation): boolean;
            /**
             * Translates the given `point` in `widget'`s coordinates to coordinates
             * relative to `target’`s coordinate system.
             *
             * In order to perform this operation, both widgets must share a
             * common ancestor.
             * @param target the `GtkWidget` to transform into
             * @param point a point in @widget's coordinate system
             * @returns %TRUE if the point could be determined, %FALSE on failure.   In this case, 0 is stored in @out_point.
             */
            compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
            /**
             * Computes a matrix suitable to describe a transformation from
             * `widget'`s coordinate system into `target'`s coordinate system.
             *
             * The transform can not be computed in certain cases, for example
             * when `widget` and `target` do not share a common ancestor. In that
             * case `out_transform` gets set to the identity matrix.
             *
             * To learn more about widget coordinate systems, see the coordinate
             * system [overview](coordinates.html).
             * @param target the target widget that the matrix will transform to
             * @returns %TRUE if the transform could be computed, %FALSE otherwise
             */
            compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
            /**
             * Tests if the point at (`x,` `y)` is contained in `widget`.
             *
             * The coordinates for (`x,` `y)` must be in widget coordinates, so
             * (0, 0) is assumed to be the top left of `widget'`s content area.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             * @returns %TRUE if @widget contains (@x, @y).
             */
            contains(x: number, y: number): boolean;
            /**
             * Creates a new `PangoContext` with the appropriate font map,
             * font options, font description, and base direction for drawing
             * text for this widget.
             *
             * See also [method`Gtk`.Widget.get_pango_context].
             * @returns the new `PangoContext`
             */
            create_pango_context(): Pango.Context;
            /**
             * Creates a new `PangoLayout` with the appropriate font map,
             * font description, and base direction for drawing text for
             * this widget.
             *
             * If you keep a `PangoLayout` created in this way around,
             * you need to re-create it when the widget `PangoContext`
             * is replaced. This can be tracked by listening to changes
             * of the [property`Gtk`.Widget:root] property on the widget.
             * @param text text to set on the layout
             * @returns the new `PangoLayout`
             */
            create_pango_layout(text?: string | null): Pango.Layout;
            /**
             * Clears the template children for the given widget.
             *
             * This function is the opposite of [method`Gtk`.Widget.init_template], and
             * it is used to clear all the template children from a widget instance.
             * If you bound a template child to a field in the instance structure, or
             * in the instance private data structure, the field will be set to `NULL`
             * after this function returns.
             *
             * You should call this function inside the `GObjectClass.dispose()`
             * implementation of any widget that called `gtk_widget_init_template()`.
             * Typically, you will want to call this function last, right before
             * chaining up to the parent type's dispose implementation, e.g.
             *
             * ```c
             * static void
             * some_widget_dispose (GObject *gobject)
             * {
             *   SomeWidget *self = SOME_WIDGET (gobject);
             *
             *   // Clear the template data for SomeWidget
             *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
             *
             *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
             * }
             * ```
             * @param widget_type the type of the widget to finalize the template for
             */
            dispose_template(widget_type: GObject.GType): void;
            /**
             * Checks to see if a drag movement has passed the GTK drag threshold.
             * @param start_x X coordinate of start of drag
             * @param start_y Y coordinate of start of drag
             * @param current_x current X coordinate
             * @param current_y current Y coordinate
             * @returns %TRUE if the drag threshold has been passed.
             */
            drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
            /**
             * Notifies the user about an input-related error on this widget.
             *
             * If the [property`Gtk`.Settings:gtk-error-bell] setting is %TRUE,
             * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
             *
             * Note that the effect of [method`Gdk`.Surface.beep] can be configured
             * in many ways, depending on the windowing backend and the desktop
             * environment or window manager that is used.
             */
            error_bell(): void;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             *
             * This function is intended to be used when implementing handlers
             * for the `GtkWidget`Class.snapshot() function, and when allocating
             * child widgets in `GtkWidget`Class.size_allocate().
             * @returns the baseline of the @widget, or -1 if none
             */
            get_allocated_baseline(): number;
            /**
             * Returns the height that has currently been allocated to `widget`.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns the height of the @widget
             */
            get_allocated_height(): number;
            /**
             * Returns the width that has currently been allocated to `widget`.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns the width of the @widget
             */
            get_allocated_width(): number;
            /**
             * Retrieves the widget’s allocation.
             *
             * Note, when implementing a layout container: a widget’s allocation
             * will be its “adjusted” allocation, that is, the widget’s parent
             * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
             * and that allocation is then adjusted (to handle margin
             * and alignment for example) before assignment to the widget.
             * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
             * was actually assigned to the widget. The adjusted allocation is
             * guaranteed to be completely contained within the
             * [method`Gtk`.Widget.size_allocate] allocation, however.
             *
             * So a layout container is guaranteed that its children stay inside
             * the assigned bounds, but not that they have exactly the bounds the
             * container assigned.
             */
            get_allocation(): Gtk.Allocation;
            /**
             * Gets the first ancestor of `widget` with type `widget_type`.
             *
             * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
             * gets the first `GtkBox` that’s an ancestor of `widget`. No
             * reference will be added to the returned widget; it should
             * not be unreferenced.
             *
             * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
             * considers `widget` to be an ancestor of itself.
             * @param widget_type ancestor type
             * @returns the ancestor widget
             */
            get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             *
             * This function is intended to be used when implementing handlers
             * for the `GtkWidget`Class.snapshot() function, and when allocating
             * child widgets in `GtkWidget`Class.size_allocate().
             * @returns the baseline of the @widget, or -1 if none
             */
            get_baseline(): number;
            /**
             * Determines whether the input focus can enter `widget` or any
             * of its children.
             *
             * See [method`Gtk`.Widget.set_focusable].
             * @returns %TRUE if the input focus can enter @widget, %FALSE otherwise
             */
            get_can_focus(): boolean;
            /**
             * Queries whether `widget` can be the target of pointer events.
             * @returns %TRUE if @widget can receive pointer events
             */
            get_can_target(): boolean;
            /**
             * Gets the value set with gtk_widget_set_child_visible().
             *
             * If you feel a need to use this function, your code probably
             * needs reorganization.
             *
             * This function is only useful for container implementations
             * and should never be called by an application.
             * @returns %TRUE if the widget is mapped with the parent.
             */
            get_child_visible(): boolean;
            /**
             * Gets the clipboard object for `widget`.
             *
             * This is a utility function to get the clipboard object for the
             * `GdkDisplay` that `widget` is using.
             *
             * Note that this function always works, even when `widget` is not
             * realized yet.
             * @returns the appropriate clipboard object
             */
            get_clipboard(): Gdk.Clipboard;
            /**
             * Gets the current foreground color for the widget’s
             * CSS style.
             *
             * This function should only be used in snapshot
             * implementations that need to do custom
             * drawing with the foreground color.
             */
            get_color(): Gdk.RGBA;
            /**
             * Returns the list of style classes applied to `widget`.
             * @returns a %NULL-terminated list of   css classes currently applied to @widget. The returned   list must freed using g_strfreev().
             */
            get_css_classes(): string[];
            /**
             * Returns the CSS name that is used for `self`.
             * @returns the CSS name
             */
            get_css_name(): string;
            /**
             * Queries the cursor set on `widget`.
             *
             * See [method`Gtk`.Widget.set_cursor] for details.
             * @returns the cursor   currently in use or %NULL if the cursor is inherited
             */
            get_cursor(): Gdk.Cursor | null;
            /**
             * Gets the reading direction for a particular widget.
             *
             * See [method`Gtk`.Widget.set_direction].
             * @returns the reading direction for the widget.
             */
            get_direction(): Gtk.TextDirection;
            /**
             * Get the `GdkDisplay` for the toplevel window associated with
             * this widget.
             *
             * This function can only be called after the widget has been
             * added to a widget hierarchy with a `GtkWindow` at the top.
             *
             * In general, you should only create display specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the `GdkDisplay` for the toplevel   for this widget.
             */
            get_display(): Gdk.Display;
            /**
             * Returns the widget’s first child.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's first child
             */
            get_first_child(): Gtk.Widget | null;
            /**
             * Returns the current focus child of `widget`.
             * @returns The current focus   child of @widget
             */
            get_focus_child(): Gtk.Widget | null;
            /**
             * Returns whether the widget should grab focus when it is clicked
             * with the mouse.
             *
             * See [method`Gtk`.Widget.set_focus_on_click].
             * @returns %TRUE if the widget should grab focus when it is   clicked with the mouse
             */
            get_focus_on_click(): boolean;
            /**
             * Determines whether `widget` can own the input focus.
             *
             * See [method`Gtk`.Widget.set_focusable].
             * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
             */
            get_focusable(): boolean;
            /**
             * Gets the font map of `widget`.
             *
             * See [method`Gtk`.Widget.set_font_map].
             * @returns A `PangoFontMap`
             */
            get_font_map(): Pango.FontMap | null;
            /**
             * Returns the `cairo_font_options_t` of widget.
             *
             * Seee [method`Gtk`.Widget.set_font_options].
             * @returns the `cairo_font_options_t` of widget
             */
            get_font_options(): cairo.FontOptions | null;
            /**
             * Obtains the frame clock for a widget.
             *
             * The frame clock is a global “ticker” that can be used to drive
             * animations and repaints. The most common reason to get the frame
             * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
             * to get a time to use for animating. For example you might record
             * the start of the animation with an initial value from
             * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
             * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
             *
             * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
             * clock, but won’t necessarily repaint any widgets. To repaint a
             * widget, you have to use [method`Gtk`.Widget.queue_draw] which invalidates
             * the widget (thus scheduling it to receive a draw on the next
             * frame). gtk_widget_queue_draw() will also end up requesting a frame
             * on the appropriate frame clock.
             *
             * A widget’s frame clock will not change while the widget is
             * mapped. Reparenting a widget (which implies a temporary unmap) can
             * change the widget’s frame clock.
             *
             * Unrealized widgets do not have a frame clock.
             * @returns a `GdkFrameClock`
             */
            get_frame_clock(): Gdk.FrameClock | null;
            /**
             * Gets the horizontal alignment of `widget`.
             *
             * For backwards compatibility reasons this method will never return
             * one of the baseline alignments, but instead it will convert it to
             * `GTK_ALIGN_FILL` or `GTK_ALIGN_CENTER`.
             *
             * Baselines are not supported for horizontal alignment.
             * @returns the horizontal alignment of @widget
             */
            get_halign(): Gtk.Align;
            /**
             * Returns the current value of the `has-tooltip` property.
             * @returns current value of `has-tooltip` on @widget.
             */
            get_has_tooltip(): boolean;
            /**
             * Returns the content height of the widget.
             *
             * This function returns the height passed to its
             * size-allocate implementation, which is the height you
             * should be using in [vfunc`Gtk`.Widget.snapshot].
             *
             * For pointer events, see [method`Gtk`.Widget.contains].
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns The height of @widget
             */
            get_height(): number;
            /**
             * Gets whether the widget would like any available extra horizontal
             * space.
             *
             * When a user resizes a `GtkWindow`, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Containers should use [method`Gtk`.Widget.compute_expand] rather
             * than this function, to see whether a widget, or any of its children,
             * has the expand flag set. If any child of a widget wants to
             * expand, the parent may ask to expand also.
             *
             * This function only looks at the widget’s own hexpand flag, rather
             * than computing whether the entire widget tree rooted at this widget
             * wants to expand.
             * @returns whether hexpand flag is set
             */
            get_hexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_hexpand() has been used
             * to explicitly set the expand flag on this widget.
             *
             * If [property`Gtk`.Widget:hexpand] property is set, then it
             * overrides any computed expand value based on child widgets.
             * If `hexpand` is not set, then the expand value depends on
             * whether any children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @returns whether hexpand has been explicitly set
             */
            get_hexpand_set(): boolean;
            /**
             * Returns the widget’s last child.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's last child
             */
            get_last_child(): Gtk.Widget | null;
            /**
             * Retrieves the layout manager used by `widget`.
             *
             * See [method`Gtk`.Widget.set_layout_manager].
             * @returns a `GtkLayoutManager`
             */
            get_layout_manager(): Gtk.LayoutManager | null;
            /**
             * Whether the widget is mapped.
             * @returns %TRUE if the widget is mapped, %FALSE otherwise.
             */
            get_mapped(): boolean;
            /**
             * Gets the bottom margin of `widget`.
             * @returns The bottom margin of @widget
             */
            get_margin_bottom(): number;
            /**
             * Gets the end margin of `widget`.
             * @returns The end margin of @widget
             */
            get_margin_end(): number;
            /**
             * Gets the start margin of `widget`.
             * @returns The start margin of @widget
             */
            get_margin_start(): number;
            /**
             * Gets the top margin of `widget`.
             * @returns The top margin of @widget
             */
            get_margin_top(): number;
            /**
             * Retrieves the name of a widget.
             *
             * See [method`Gtk`.Widget.set_name] for the significance of widget names.
             * @returns name of the widget. This string is owned by GTK and   should not be modified or freed
             */
            get_name(): string;
            /**
             * Returns the nearest `GtkNative` ancestor of `widget`.
             *
             * This function will return %NULL if the widget is not
             * contained inside a widget tree with a native ancestor.
             *
             * `GtkNative` widgets will return themselves here.
             * @returns the `GtkNative` ancestor of @widget
             */
            get_native(): Gtk.Native | null;
            /**
             * Returns the widget’s next sibling.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's next sibling
             */
            get_next_sibling(): Gtk.Widget | null;
            /**
             * #Fetches the requested opacity for this widget.
             *
             * See [method`Gtk`.Widget.set_opacity].
             * @returns the requested opacity for this widget.
             */
            get_opacity(): number;
            /**
             * Returns the widget’s overflow value.
             * @returns The widget's overflow.
             */
            get_overflow(): Gtk.Overflow;
            /**
             * Gets a `PangoContext` with the appropriate font map, font description,
             * and base direction for this widget.
             *
             * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
             * this context is owned by the widget (it can be used until the screen
             * for the widget changes or the widget is removed from its toplevel),
             * and will be updated to match any changes to the widget’s attributes.
             * This can be tracked by listening to changes of the
             * [property`Gtk`.Widget:root] property on the widget.
             * @returns the `PangoContext` for the widget.
             */
            get_pango_context(): Pango.Context;
            /**
             * Returns the parent widget of `widget`.
             * @returns the parent widget of @widget
             */
            get_parent(): Gtk.Widget | null;
            /**
             * Retrieves the minimum and natural size of a widget, taking
             * into account the widget’s preference for height-for-width management.
             *
             * This is used to retrieve a suitable size by container widgets which do
             * not impose any restrictions on the child placement. It can be used
             * to deduce toplevel window and menu sizes as well as child widgets in
             * free-form containers such as `GtkFixed`.
             *
             * Handle with care. Note that the natural height of a height-for-width
             * widget will generally be a smaller size than the minimum height, since
             * the required height for the natural width is generally smaller than the
             * required height for the minimum width.
             *
             * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
             */
            get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
            /**
             * Returns the widget’s previous sibling.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's previous sibling
             */
            get_prev_sibling(): Gtk.Widget | null;
            /**
             * Gets the primary clipboard of `widget`.
             *
             * This is a utility function to get the primary clipboard object
             * for the `GdkDisplay` that `widget` is using.
             *
             * Note that this function always works, even when `widget` is not
             * realized yet.
             * @returns the appropriate clipboard object
             */
            get_primary_clipboard(): Gdk.Clipboard;
            /**
             * Determines whether `widget` is realized.
             * @returns %TRUE if @widget is realized, %FALSE otherwise
             */
            get_realized(): boolean;
            /**
             * Determines whether `widget` is always treated as the default widget
             * within its toplevel when it has the focus, even if another widget
             * is the default.
             *
             * See [method`Gtk`.Widget.set_receives_default].
             * @returns %TRUE if @widget acts as the default widget when focused,   %FALSE otherwise
             */
            get_receives_default(): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * Single-child widgets generally propagate the preference of
             * their child, more complex widgets need to request something
             * either in context of their children or in context of their
             * allocation capabilities.
             * @returns The `GtkSizeRequestMode` preferred by @widget.
             */
            get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Returns the `GtkRoot` widget of `widget`.
             *
             * This function will return %NULL if the widget is not contained
             * inside a widget tree with a root widget.
             *
             * `GtkRoot` widgets will return themselves here.
             * @returns the root widget of @widget
             */
            get_root(): Gtk.Root | null;
            /**
             * Retrieves the internal scale factor that maps from window
             * coordinates to the actual device pixels.
             *
             * On traditional systems this is 1, on high density outputs,
             * it can be a higher value (typically 2).
             *
             * See [method`Gdk`.Surface.get_scale_factor].
             * @returns the scale factor for @widget
             */
            get_scale_factor(): number;
            /**
             * Returns the widget’s sensitivity.
             *
             * This function returns the value that has been set using
             * [method`Gtk`.Widget.set_sensitive]).
             *
             * The effective sensitivity of a widget is however determined
             * by both its own and its parent widget’s sensitivity.
             * See [method`Gtk`.Widget.is_sensitive].
             * @returns %TRUE if the widget is sensitive
             */
            get_sensitive(): boolean;
            /**
             * Gets the settings object holding the settings used for this widget.
             *
             * Note that this function can only be called when the `GtkWidget`
             * is attached to a toplevel, since the settings object is specific
             * to a particular `GdkDisplay`. If you want to monitor the widget for
             * changes in its settings, connect to the `notify::display` signal.
             * @returns the relevant `GtkSettings` object
             */
            get_settings(): Gtk.Settings;
            /**
             * Returns the content width or height of the widget.
             *
             * Which dimension is returned depends on `orientation`.
             *
             * This is equivalent to calling [method`Gtk`.Widget.get_width]
             * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
             * for %GTK_ORIENTATION_VERTICAL, but can be used when
             * writing orientation-independent code, such as when
             * implementing [iface`Gtk`.Orientable] widgets.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @param orientation the orientation to query
             * @returns The size of @widget in @orientation.
             */
            get_size(orientation: Gtk.Orientation): number;
            /**
             * Gets the size request that was explicitly set for the widget using
             * gtk_widget_set_size_request().
             *
             * A value of -1 stored in `width` or `height` indicates that that
             * dimension has not been set explicitly and the natural requisition
             * of the widget will be used instead. See
             * [method`Gtk`.Widget.set_size_request]. To get the size a widget will
             * actually request, call [method`Gtk`.Widget.measure] instead of
             * this function.
             */
            get_size_request(): [number, number];
            /**
             * Returns the widget state as a flag set.
             *
             * It is worth mentioning that the effective %GTK_STATE_FLAG_INSENSITIVE
             * state will be returned, that is, also based on parent insensitivity,
             * even if `widget` itself is sensitive.
             *
             * Also note that if you are looking for a way to obtain the
             * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
             * method, you should look at [method`Gtk`.StyleContext.get_state].
             * @returns The state flags for widget
             */
            get_state_flags(): Gtk.StateFlags;
            /**
             * Returns the style context associated to `widget`.
             *
             * The returned object is guaranteed to be the same
             * for the lifetime of `widget`.
             * @returns the widget’s `GtkStyleContext`
             */
            get_style_context(): Gtk.StyleContext;
            /**
             * Fetch an object build from the template XML for `widget_type` in
             * this `widget` instance.
             *
             * This will only report children which were previously declared
             * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
             * variants.
             *
             * This function is only meant to be called for code which is private
             * to the `widget_type` which declared the child and is meant for language
             * bindings which cannot easily make use of the GObject structure offsets.
             * @param widget_type The `GType` to get a template child for
             * @param name The “id” of the child defined in the template XML
             * @returns The object built in the template XML with   the id @name
             */
            get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
            /**
             * Gets the contents of the tooltip for `widget`.
             *
             * If the tooltip has not been set using
             * [method`Gtk`.Widget.set_tooltip_markup], this
             * function returns %NULL.
             * @returns the tooltip text
             */
            get_tooltip_markup(): string | null;
            /**
             * Gets the contents of the tooltip for `widget`.
             *
             * If the `widget'`s tooltip was set using
             * [method`Gtk`.Widget.set_tooltip_markup],
             * this function will return the escaped text.
             * @returns the tooltip text
             */
            get_tooltip_text(): string | null;
            /**
             * Gets the vertical alignment of `widget`.
             * @returns the vertical alignment of @widget
             */
            get_valign(): Gtk.Align;
            /**
             * Gets whether the widget would like any available extra vertical
             * space.
             *
             * See [method`Gtk`.Widget.get_hexpand] for more detail.
             * @returns whether vexpand flag is set
             */
            get_vexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_vexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
             * @returns whether vexpand has been explicitly set
             */
            get_vexpand_set(): boolean;
            /**
             * Determines whether the widget is visible.
             *
             * If you want to take into account whether the widget’s
             * parent is also marked as visible, use
             * [method`Gtk`.Widget.is_visible] instead.
             *
             * This function does not check if the widget is
             * obscured in any way.
             *
             * See [method`Gtk`.Widget.set_visible].
             * @returns %TRUE if the widget is visible
             */
            get_visible(): boolean;
            /**
             * Returns the content width of the widget.
             *
             * This function returns the width passed to its
             * size-allocate implementation, which is the width you
             * should be using in [vfunc`Gtk`.Widget.snapshot].
             *
             * For pointer events, see [method`Gtk`.Widget.contains].
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns The width of @widget
             */
            get_width(): number;
            /**
             * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
             *
             * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
             * implementation cannot transfer the focus to a descendant of `widget`
             * that is focusable, it will not take focus and %FALSE will be returned.
             *
             * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
             * is allowed, should not have an effect, and return %TRUE.
             * @returns %TRUE if focus is now inside @widget.
             */
            grab_focus(): boolean;
            /**
             * Returns whether `css_class` is currently applied to `widget`.
             * @param css_class A style class, without the leading '.'   used for notation of style classes
             * @returns %TRUE if @css_class is currently applied to @widget,   %FALSE otherwise.
             */
            has_css_class(css_class: string): boolean;
            /**
             * Determines if the widget should show a visible indication that
             * it has the global input focus.
             *
             * This is a convenience function that takes into account whether
             * focus indication should currently be shown in the toplevel window
             * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
             * information about focus indication.
             *
             * To find out if the widget has the global input focus, use
             * [method`Gtk`.Widget.has_focus].
             * @returns %TRUE if the widget should display a “focus rectangle”
             */
            has_visible_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show().
             *
             * This is causing the widget to be hidden (invisible to the user).
             */
            hide(): void;
            /**
             * Returns whether the widget is currently being destroyed.
             *
             * This information can sometimes be used to avoid doing
             * unnecessary work.
             * @returns %TRUE if @widget is being destroyed
             */
            in_destruction(): boolean;
            /**
             * Creates and initializes child widgets defined in templates.
             *
             * This function must be called in the instance initializer
             * for any class which assigned itself a template using
             * [method`Gtk`.WidgetClass.set_template].
             *
             * It is important to call this function in the instance initializer
             * of a `GtkWidget` subclass and not in `GObject.constructed()` or
             * `GObject.constructor()` for two reasons:
             *
             *  - derived widgets will assume that the composite widgets
             *    defined by its parent classes have been created in their
             *    relative instance initializers
             *  - when calling `g_object_new()` on a widget with composite templates,
             *    it’s important to build the composite widgets before the construct
             *    properties are set. Properties passed to `g_object_new()` should
             *    take precedence over properties set in the private template XML
             *
             * A good rule of thumb is to call this function as the first thing in
             * an instance initialization function.
             */
            init_template(): void;
            /**
             * Inserts `group` into `widget`.
             *
             * Children of `widget` that implement [iface`Gtk`.Actionable] can
             * then be associated with actions in `group` by setting their
             * “action-name” to `prefix`.`action-name`.
             *
             * Note that inheritance is defined for individual actions. I.e.
             * even if you insert a group with prefix `prefix,` actions with
             * the same prefix will still be inherited from the parent, unless
             * the group contains an action with the same name.
             *
             * If `group` is %NULL, a previously inserted group for `name` is
             * removed from `widget`.
             * @param name the prefix for actions in @group
             * @param group a `GActionGroup`, or %NULL to remove   the previously inserted group for @name
             */
            insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
            /**
             * Inserts `widget` into the child widget list of `parent`.
             *
             * It will be placed after `previous_sibling,` or at the beginning if
             * `previous_sibling` is %NULL.
             *
             * After calling this function, `gtk_widget_get_prev_sibling(widget)`
             * will return `previous_sibling`.
             *
             * If `parent` is already set as the parent widget of `widget,` this
             * function can also be used to reorder `widget` in the child widget
             * list of `parent`.
             *
             * This API is primarily meant for widget implementations; if you are
             * just using a widget, you *must* use its own API for adding children.
             * @param parent the parent `GtkWidget` to insert @widget into
             * @param previous_sibling the new previous sibling of @widget
             */
            insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
            /**
             * Inserts `widget` into the child widget list of `parent`.
             *
             * It will be placed before `next_sibling,` or at the end if
             * `next_sibling` is %NULL.
             *
             * After calling this function, `gtk_widget_get_next_sibling(widget)`
             * will return `next_sibling`.
             *
             * If `parent` is already set as the parent widget of `widget,` this function
             * can also be used to reorder `widget` in the child widget list of `parent`.
             *
             * This API is primarily meant for widget implementations; if you are
             * just using a widget, you *must* use its own API for adding children.
             * @param parent the parent `GtkWidget` to insert @widget into
             * @param next_sibling the new next sibling of @widget
             */
            insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
            /**
             * Determines whether `widget` is somewhere inside `ancestor,`
             * possibly with intermediate containers.
             * @param ancestor another `GtkWidget`
             * @returns %TRUE if @ancestor contains @widget as a child,   grandchild, great grandchild, etc.
             */
            is_ancestor(ancestor: Gtk.Widget): boolean;
            /**
             * Determines whether `widget` can be drawn to.
             *
             * A widget can be drawn if it is mapped and visible.
             * @returns %TRUE if @widget is drawable, %FALSE otherwise
             */
            is_drawable(): boolean;
            /**
             * Determines if the widget is the focus widget within its
             * toplevel.
             *
             * This does not mean that the [property`Gtk`.Widget:has-focus]
             * property is necessarily set; [property`Gtk`.Widget:has-focus]
             * will only be set if the toplevel widget additionally has the
             * global input focus.
             * @returns %TRUE if the widget is the focus widget.
             */
            is_focus(): boolean;
            /**
             * Returns the widget’s effective sensitivity.
             *
             * This means it is sensitive itself and also its
             * parent widget is sensitive.
             * @returns %TRUE if the widget is effectively sensitive
             */
            is_sensitive(): boolean;
            /**
             * Determines whether the widget and all its parents are marked as
             * visible.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See also [method`Gtk`.Widget.get_visible] and
             * [method`Gtk`.Widget.set_visible].
             * @returns %TRUE if the widget and all its parents are visible
             */
            is_visible(): boolean;
            /**
             * Emits the `::keynav-failed` signal on the widget.
             *
             * This function should be called whenever keyboard navigation
             * within a single widget hits a boundary.
             *
             * The return value of this function should be interpreted
             * in a way similar to the return value of
             * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
             * stay in the widget, the failed keyboard  navigation is OK
             * and/or there is nowhere we can/should move the focus to.
             * When %FALSE is returned, the caller should continue with
             * keyboard navigation outside the widget, e.g. by calling
             * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
             *
             * The default [signal`Gtk`.Widget::keynav-failed] handler returns
             * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
             * For the other values of `GtkDirectionType` it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * [method`Gtk`.Widget.error_bell] to notify the user of the
             * failed keyboard navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * [class`Gtk`.Entry] widgets where the user should be able to navigate
             * the entire row with the cursor keys, as e.g. known from user
             * interfaces that require entering license keys.
             * @param direction direction of focus movement
             * @returns %TRUE if stopping keyboard navigation is fine, %FALSE   if the emitting widget should try to handle the keyboard   navigation attempt in its parent container(s).
             */
            keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Returns the widgets for which this widget is the target of a
             * mnemonic.
             *
             * Typically, these widgets will be labels. See, for example,
             * [method`Gtk`.Label.set_mnemonic_widget].
             *
             * The widgets in the list are not individually referenced.
             * If you want to iterate through the list and perform actions
             * involving callbacks that might destroy the widgets, you
             * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
             * first, and then unref all the widgets afterwards.
             * @returns the list   of mnemonic labels; free this list with g_list_free() when you   are done with it.
             */
            list_mnemonic_labels(): Gtk.Widget[];
            /**
             * Causes a widget to be mapped if it isn’t already.
             *
             * This function is only for use in widget implementations.
             */
            map(): void;
            /**
             * Measures `widget` in the orientation `orientation` and for the given `for_size`.
             *
             * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
             * is 300, this functions will compute the minimum and natural width of `widget`
             * if it is allocated at a height of 300 pixels.
             *
             * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
             * a more details on implementing `GtkWidgetClass.measure()`.
             * @param orientation the orientation to measure
             * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
             */
            measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
            /**
             * Emits the ::mnemonic-activate signal.
             *
             * See [signal`Gtk`.Widget::mnemonic-activate].
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             * @returns %TRUE if the signal has been handled
             */
            mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Returns a `GListModel` to track the children of `widget`.
             *
             * Calling this function will enable extra internal bookkeeping
             * to track children and emit signals on the returned listmodel.
             * It may slow down operations a lot.
             *
             * Applications should try hard to avoid calling this function
             * because of the slowdowns.
             * @returns a `GListModel` tracking @widget's children
             */
            observe_children(): Gio.ListModel;
            /**
             * Returns a `GListModel` to track the [class`Gtk`.EventController]s
             * of `widget`.
             *
             * Calling this function will enable extra internal bookkeeping
             * to track controllers and emit signals on the returned listmodel.
             * It may slow down operations a lot.
             *
             * Applications should try hard to avoid calling this function
             * because of the slowdowns.
             * @returns a `GListModel` tracking @widget's controllers
             */
            observe_controllers(): Gio.ListModel;
            /**
             * Finds the descendant of `widget` closest to the point (`x,` `y)`.
             *
             * The point must be given in widget coordinates, so (0, 0) is assumed
             * to be the top left of `widget'`s content area.
             *
             * Usually widgets will return %NULL if the given coordinate is not
             * contained in `widget` checked via [method`Gtk`.Widget.contains].
             * Otherwise they will recursively try to find a child that does
             * not return %NULL. Widgets are however free to customize their
             * picking algorithm.
             *
             * This function is used on the toplevel to determine the widget
             * below the mouse cursor for purposes of hover highlighting and
             * delivering events.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             * @param flags Flags to influence what is picked
             * @returns The widget descendant at   the given point
             */
            pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null;
            /**
             * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
             * function.
             *
             * Use this function instead of [method`Gtk`.Widget.queue_resize]
             * when the `widget'`s size request didn't change but it wants to
             * reposition its contents.
             *
             * An example user of this function is [method`Gtk`.Widget.set_halign].
             *
             * This function is only for use in widget implementations.
             */
            queue_allocate(): void;
            /**
             * Schedules this widget to be redrawn in the paint phase
             * of the current or the next frame.
             *
             * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
             * implementation will be called.
             */
            queue_draw(): void;
            /**
             * Flags a widget to have its size renegotiated.
             *
             * This should be called when a widget for some reason has a new
             * size request. For example, when you change the text in a
             * [class`Gtk`.Label], the label queues a resize to ensure there’s
             * enough space for the new text.
             *
             * Note that you cannot call gtk_widget_queue_resize() on a widget
             * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
             * virtual method. Calls to gtk_widget_queue_resize() from inside
             * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
             *
             * This function is only for use in widget implementations.
             */
            queue_resize(): void;
            /**
             * Creates the GDK resources associated with a widget.
             *
             * Normally realization happens implicitly; if you show a widget
             * and all its parent containers, then the widget will be realized
             * and mapped automatically.
             *
             * Realizing a widget requires all the widget’s parent widgets to be
             * realized; calling this function realizes the widget’s parents
             * in addition to `widget` itself. If a widget is not yet inside a
             * toplevel window when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * [signal`Gtk`.Widget::realize].
             */
            realize(): void;
            /**
             * Removes `controller` from `widget,` so that it doesn't process
             * events anymore.
             *
             * It should not be used again.
             *
             * Widgets will remove all event controllers automatically when they
             * are destroyed, there is normally no need to call this function.
             * @param controller a `GtkEventController`
             */
            remove_controller(controller: Gtk.EventController): void;
            /**
             * Removes a style from `widget`.
             *
             * After this, the style of `widget` will stop matching for `css_class`.
             * @param css_class The style class to remove from @widget, without   the leading '.' used for notation of style classes
             */
            remove_css_class(css_class: string): void;
            /**
             * Removes a widget from the list of mnemonic labels for this widget.
             *
             * See [method`Gtk`.Widget.list_mnemonic_labels]. The widget must
             * have previously been added to the list with
             * [method`Gtk`.Widget.add_mnemonic_label].
             * @param label a `GtkWidget` that was previously set as a mnemonic   label for @widget with [method@Gtk.Widget.add_mnemonic_label]
             */
            remove_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Removes a tick callback previously registered with
             * gtk_widget_add_tick_callback().
             * @param id an id returned by [method@Gtk.Widget.add_tick_callback]
             */
            remove_tick_callback(id: number): void;
            /**
             * Specifies whether the input focus can enter the widget
             * or any of its children.
             *
             * Applications should set `can_focus` to %FALSE to mark a
             * widget as for pointer/touch use only.
             *
             * Note that having `can_focus` be %TRUE is only one of the
             * necessary conditions for being focusable. A widget must
             * also be sensitive and focusable and not have an ancestor
             * that is marked as not can-focus in order to receive input
             * focus.
             *
             * See [method`Gtk`.Widget.grab_focus] for actually setting
             * the input focus on a widget.
             * @param can_focus whether or not the input focus can enter   the widget or any of its children
             */
            set_can_focus(can_focus: boolean): void;
            /**
             * Sets whether `widget` can be the target of pointer events.
             * @param can_target whether this widget should be able to   receive pointer events
             */
            set_can_target(can_target: boolean): void;
            /**
             * Sets whether `widget` should be mapped along with its parent.
             *
             * The child visibility can be set for widget before it is added
             * to a container with [method`Gtk`.Widget.set_parent], to avoid
             * mapping children unnecessary before immediately unmapping them.
             * However it will be reset to its default state of %TRUE when the
             * widget is removed from a container.
             *
             * Note that changing the child visibility of a widget does not
             * queue a resize on the widget. Most of the time, the size of
             * a widget is computed from all visible children, whether or
             * not they are mapped. If this is not the case, the container
             * can queue a resize itself.
             *
             * This function is only useful for container implementations
             * and should never be called by an application.
             * @param child_visible if %TRUE, @widget should be mapped along   with its parent.
             */
            set_child_visible(child_visible: boolean): void;
            /**
             * Clear all style classes applied to `widget`
             * and replace them with `classes`.
             * @param classes %NULL-terminated list of style classes to apply to @widget.
             */
            set_css_classes(classes: string[]): void;
            /**
             * Sets the cursor to be shown when pointer devices point
             * towards `widget`.
             *
             * If the `cursor` is NULL, `widget` will use the cursor
             * inherited from the parent widget.
             * @param cursor the new cursor
             */
            set_cursor(cursor?: Gdk.Cursor | null): void;
            /**
             * Sets a named cursor to be shown when pointer devices point
             * towards `widget`.
             *
             * This is a utility function that creates a cursor via
             * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
             * with [method`Gtk`.Widget.set_cursor]. See those functions for
             * details.
             *
             * On top of that, this function allows `name` to be %NULL, which
             * will do the same as calling [method`Gtk`.Widget.set_cursor]
             * with a %NULL cursor.
             * @param name The name of the cursor
             */
            set_cursor_from_name(name?: string | null): void;
            /**
             * Sets the reading direction on a particular widget.
             *
             * This direction controls the primary direction for widgets
             * containing text, and also the direction in which the children
             * of a container are packed. The ability to set the direction is
             * present in order so that correct localization into languages with
             * right-to-left reading directions can be done. Generally, applications
             * will let the default reading direction present, except for containers
             * where the containers are arranged in an order that is explicitly
             * visual rather than logical (such as buttons for text justification).
             *
             * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
             * set by [func`Gtk`.Widget.set_default_direction] will be used.
             * @param dir the new direction
             */
            set_direction(dir: Gtk.TextDirection): void;
            /**
             * Set `child` as the current focus child of `widget`.
             *
             * This function is only suitable for widget implementations.
             * If you want a certain widget to get the input focus, call
             * [method`Gtk`.Widget.grab_focus] on it.
             * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
             */
            set_focus_child(child?: Gtk.Widget | null): void;
            /**
             * Sets whether the widget should grab focus when it is clicked
             * with the mouse.
             *
             * Making mouse clicks not grab focus is useful in places like
             * toolbars where you don’t want the keyboard focus removed from
             * the main area of the application.
             * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
             */
            set_focus_on_click(focus_on_click: boolean): void;
            /**
             * Specifies whether `widget` can own the input focus.
             *
             * Widget implementations should set `focusable` to %TRUE in
             * their init() function if they want to receive keyboard input.
             *
             * Note that having `focusable` be %TRUE is only one of the
             * necessary conditions for being focusable. A widget must
             * also be sensitive and can-focus and not have an ancestor
             * that is marked as not can-focus in order to receive input
             * focus.
             *
             * See [method`Gtk`.Widget.grab_focus] for actually setting
             * the input focus on a widget.
             * @param focusable whether or not @widget can own the input focus
             */
            set_focusable(focusable: boolean): void;
            /**
             * Sets the font map to use for Pango rendering.
             *
             * The font map is the object that is used to look up fonts.
             * Setting a custom font map can be useful in special situations,
             * e.g. when you need to add application-specific fonts to the set
             * of available fonts.
             *
             * When not set, the widget will inherit the font map from its parent.
             * @param font_map a `PangoFontMap`, or %NULL to unset any   previously set font map
             */
            set_font_map(font_map?: Pango.FontMap | null): void;
            /**
             * Sets the `cairo_font_options_t` used for Pango rendering
             * in this widget.
             *
             * When not set, the default font options for the `GdkDisplay`
             * will be used.
             * @param options a `cairo_font_options_t`   to unset any previously set default font options
             */
            set_font_options(options?: cairo.FontOptions | null): void;
            /**
             * Sets the horizontal alignment of `widget`.
             * @param align the horizontal alignment
             */
            set_halign(align: Gtk.Align): void;
            /**
             * Sets the `has-tooltip` property on `widget` to `has_tooltip`.
             * @param has_tooltip whether or not @widget has a tooltip.
             */
            set_has_tooltip(has_tooltip: boolean): void;
            /**
             * Sets whether the widget would like any available extra horizontal
             * space.
             *
             * When a user resizes a `GtkWindow`, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Call this function to set the expand flag if you would like your
             * widget to become larger horizontally when the window has extra
             * room.
             *
             * By default, widgets automatically expand if any of their children
             * want to expand. (To see if a widget will automatically expand given
             * its current children and state, call [method`Gtk`.Widget.compute_expand].
             * A container can decide how the expandability of children affects the
             * expansion of the container by overriding the compute_expand virtual
             * method on `GtkWidget`.).
             *
             * Setting hexpand explicitly with this function will override the
             * automatic expand behavior.
             *
             * This function forces the widget to expand or not to expand,
             * regardless of children.  The override occurs because
             * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
             * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
             * value to be used, rather than looking at children and widget state.
             * @param expand whether to expand
             */
            set_hexpand(expand: boolean): void;
            /**
             * Sets whether the hexpand flag will be used.
             *
             * The [property`Gtk`.Widget:hexpand-set] property will be set
             * automatically when you call [method`Gtk`.Widget.set_hexpand]
             * to set hexpand, so the most likely reason to use this function
             * would be to unset an explicit expand flag.
             *
             * If hexpand is set, then it overrides any computed
             * expand value based on child widgets. If hexpand is not
             * set, then the expand value depends on whether any
             * children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @param set value for hexpand-set property
             */
            set_hexpand_set(set: boolean): void;
            /**
             * Sets the layout manager delegate instance that provides an
             * implementation for measuring and allocating the children of `widget`.
             * @param layout_manager a `GtkLayoutManager`
             */
            set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
            /**
             * Sets the bottom margin of `widget`.
             * @param margin the bottom margin
             */
            set_margin_bottom(margin: number): void;
            /**
             * Sets the end margin of `widget`.
             * @param margin the end margin
             */
            set_margin_end(margin: number): void;
            /**
             * Sets the start margin of `widget`.
             * @param margin the start margin
             */
            set_margin_start(margin: number): void;
            /**
             * Sets the top margin of `widget`.
             * @param margin the top margin
             */
            set_margin_top(margin: number): void;
            /**
             * Sets a widgets name.
             *
             * Setting a name allows you to refer to the widget from a
             * CSS file. You can apply a style to widgets with a particular name
             * in the CSS file. See the documentation for the CSS syntax (on the
             * same page as the docs for [class`Gtk`.StyleContext].
             *
             * Note that the CSS syntax has certain special characters to delimit
             * and represent elements in a selector (period, #, >, *...), so using
             * these will make your widget impossible to match by name. Any combination
             * of alphanumeric symbols, dashes and underscores will suffice.
             * @param name name for the widget
             */
            set_name(name: string): void;
            /**
             * Request the `widget` to be rendered partially transparent.
             *
             * An opacity of 0 is fully transparent and an opacity of 1
             * is fully opaque.
             *
             * Opacity works on both toplevel widgets and child widgets, although
             * there are some limitations: For toplevel widgets, applying opacity
             * depends on the capabilities of the windowing system. On X11, this
             * has any effect only on X displays with a compositing manager,
             * see gdk_display_is_composited(). On Windows and Wayland it should
             * always work, although setting a window’s opacity after the window
             * has been shown may cause some flicker.
             *
             * Note that the opacity is inherited through inclusion — if you set
             * a toplevel to be partially translucent, all of its content will
             * appear translucent, since it is ultimatively rendered on that
             * toplevel. The opacity value itself is not inherited by child
             * widgets (since that would make widgets deeper in the hierarchy
             * progressively more translucent). As a consequence, [class`Gtk`.Popover]s
             * and other [iface`Gtk`.Native] widgets with their own surface will use their
             * own opacity value, and thus by default appear non-translucent,
             * even if they are attached to a toplevel that is translucent.
             * @param opacity desired opacity, between 0 and 1
             */
            set_opacity(opacity: number): void;
            /**
             * Sets how `widget` treats content that is drawn outside the
             * widget's content area.
             *
             * See the definition of [enum`Gtk`.Overflow] for details.
             *
             * This setting is provided for widget implementations and
             * should not be used by application code.
             *
             * The default value is %GTK_OVERFLOW_VISIBLE.
             * @param overflow desired overflow
             */
            set_overflow(overflow: Gtk.Overflow): void;
            /**
             * Sets `parent` as the parent widget of `widget`.
             *
             * This takes care of details such as updating the state and style
             * of the child to reflect its new location and resizing the parent.
             * The opposite function is [method`Gtk`.Widget.unparent].
             *
             * This function is useful only when implementing subclasses of
             * `GtkWidget`.
             * @param parent parent widget
             */
            set_parent(parent: Gtk.Widget): void;
            /**
             * Specifies whether `widget` will be treated as the default
             * widget within its toplevel when it has the focus, even if
             * another widget is the default.
             * @param receives_default whether or not @widget can be a default widget.
             */
            set_receives_default(receives_default: boolean): void;
            /**
             * Sets the sensitivity of a widget.
             *
             * A widget is sensitive if the user can interact with it.
             * Insensitive widgets are “grayed out” and the user can’t
             * interact with them. Insensitive widgets are known as
             * “inactive”, “disabled”, or “ghosted” in some other toolkits.
             * @param sensitive %TRUE to make the widget sensitive
             */
            set_sensitive(sensitive: boolean): void;
            /**
             * Sets the minimum size of a widget.
             *
             * That is, the widget’s size request will be at least `width`
             * by `height`. You can use this function to force a widget to
             * be larger than it normally would be.
             *
             * In most cases, [method`Gtk`.Window.set_default_size] is a better
             * choice for toplevel windows than this function; setting the default
             * size will still allow users to shrink the window. Setting the size
             * request will force them to leave the window at least as large as
             * the size request.
             *
             * Note the inherent danger of setting any fixed size - themes,
             * translations into other languages, different fonts, and user action
             * can all change the appropriate size for a given widget. So, it's
             * basically impossible to hardcode a size that will always be
             * correct.
             *
             * The size request of a widget is the smallest size a widget can
             * accept while still functioning well and drawing itself correctly.
             * However in some strange cases a widget may be allocated less than
             * its requested size, and in many cases a widget may be allocated more
             * space than it requested.
             *
             * If the size request in a given direction is -1 (unset), then
             * the “natural” size request of the widget will be used instead.
             *
             * The size request set here does not include any margin from the
             * properties
             * [property`Gtk`.Widget:margin-start],
             * [property`Gtk`.Widget:margin-end],
             * [property`Gtk`.Widget:margin-top], and
             * [property`Gtk`.Widget:margin-bottom], but it does include pretty
             * much all other padding or border properties set by any subclass
             * of `GtkWidget`.
             * @param width width @widget should request, or -1 to unset
             * @param height height @widget should request, or -1 to unset
             */
            set_size_request(width: number, height: number): void;
            /**
             * Turns on flag values in the current widget state.
             *
             * Typical widget states are insensitive, prelighted, etc.
             *
             * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
             * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set
             * the widget's direction, use [method`Gtk`.Widget.set_direction].
             *
             * This function is for use in widget implementations.
             * @param flags State flags to turn on
             * @param clear Whether to clear state before turning on @flags
             */
            set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
            /**
             * Sets `markup` as the contents of the tooltip, which is marked
             * up with Pango markup.
             *
             * This function will take care of setting the
             * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
             * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
             *
             * See also [method`Gtk`.Tooltip.set_markup].
             * @param markup the contents of the tooltip for @widget
             */
            set_tooltip_markup(markup?: string | null): void;
            /**
             * Sets `text` as the contents of the tooltip.
             *
             * If `text` contains any markup, it will be escaped.
             *
             * This function will take care of setting
             * [property`Gtk`.Widget:has-tooltip] as a side effect,
             * and of the default handler for the
             * [signal`Gtk`.Widget::query-tooltip] signal.
             *
             * See also [method`Gtk`.Tooltip.set_text].
             * @param text the contents of the tooltip for @widget
             */
            set_tooltip_text(text?: string | null): void;
            /**
             * Sets the vertical alignment of `widget`.
             * @param align the vertical alignment
             */
            set_valign(align: Gtk.Align): void;
            /**
             * Sets whether the widget would like any available extra vertical
             * space.
             *
             * See [method`Gtk`.Widget.set_hexpand] for more detail.
             * @param expand whether to expand
             */
            set_vexpand(expand: boolean): void;
            /**
             * Sets whether the vexpand flag will be used.
             *
             * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
             * @param set value for vexpand-set property
             */
            set_vexpand_set(set: boolean): void;
            /**
             * Sets the visibility state of `widget`.
             *
             * Note that setting this to %TRUE doesn’t mean the widget is
             * actually viewable, see [method`Gtk`.Widget.get_visible].
             * @param visible whether the widget should be shown or not
             */
            set_visible(visible: boolean): void;
            /**
             * Returns whether `widget` should contribute to
             * the measuring and allocation of its parent.
             *
             * This is %FALSE for invisible children, but also
             * for children that have their own surface.
             * @returns %TRUE if child should be included in   measuring and allocating
             */
            should_layout(): boolean;
            /**
             * Flags a widget to be displayed.
             *
             * Any widget that isn’t shown will not appear on the screen.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            show(): void;
            /**
             * Allocates widget with a transformation that translates
             * the origin to the position in `allocation`.
             *
             * This is a simple form of [method`Gtk`.Widget.allocate].
             * @param allocation position and size to be allocated to @widget
             * @param baseline The baseline of the child, or -1
             */
            size_allocate(allocation: Gtk.Allocation, baseline: number): void;
            /**
             * Snapshot the a child of `widget`.
             *
             * When a widget receives a call to the snapshot function,
             * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
             * to all children. This function provides a convenient way
             * of doing this. A widget, when it receives a call to its
             * [vfunc`Gtk`.Widget.snapshot] function, calls
             * gtk_widget_snapshot_child() once for each child, passing in
             * the `snapshot` the widget received.
             *
             * gtk_widget_snapshot_child() takes care of translating the origin of
             * `snapshot,` and deciding whether the child needs to be snapshot.
             *
             * This function does nothing for children that implement `GtkNative`.
             * @param child a child of @widget
             * @param snapshot `GtkSnapshot` as passed to the widget. In particular, no   calls to gtk_snapshot_translate() or other transform calls should   have been made.
             */
            snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
            /**
             * Translate coordinates relative to `src_widget’`s allocation
             * to coordinates relative to `dest_widget’`s allocations.
             *
             * In order to perform this operation, both widget must share
             * a common ancestor.
             * @param dest_widget a `GtkWidget`
             * @param src_x X position relative to @src_widget
             * @param src_y Y position relative to @src_widget
             * @returns %FALSE if @src_widget and @dest_widget have no common   ancestor. In this case, 0 is stored in *@dest_x and *@dest_y.   Otherwise %TRUE.
             */
            translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
            /**
             * Triggers a tooltip query on the display where the toplevel
             * of `widget` is located.
             */
            trigger_tooltip_query(): void;
            /**
             * Causes a widget to be unmapped if it’s currently mapped.
             *
             * This function is only for use in widget implementations.
             */
            unmap(): void;
            /**
             * Dissociate `widget` from its parent.
             *
             * This function is only for use in widget implementations,
             * typically in dispose.
             */
            unparent(): void;
            /**
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget).
             *
             * This function is only useful in widget implementations.
             */
            unrealize(): void;
            /**
             * Turns off flag values for the current widget state.
             *
             * See [method`Gtk`.Widget.set_state_flags].
             *
             * This function is for use in widget implementations.
             * @param flags State flags to turn off
             */
            unset_state_flags(flags: Gtk.StateFlags): void;
            /**
             * Computes whether a container should give this
             *   widget extra space when possible.
             * @param hexpand_p
             * @param vexpand_p
             */
            vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
            /**
             * Tests if the point at (`x,` `y)` is contained in `widget`.
             *
             * The coordinates for (`x,` `y)` must be in widget coordinates, so
             * (0, 0) is assumed to be the top left of `widget'`s content area.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             */
            vfunc_contains(x: number, y: number): boolean;
            /**
             * Vfunc called when the CSS used by widget was changed. Widgets
             *   should then discard their caches that depend on CSS and queue resizes or
             *   redraws accordingly. The default implementation will take care of this for
             *   all the default CSS properties, so implementations must chain up.
             * @param change
             */
            vfunc_css_changed(change: Gtk.CssStyleChange): void;
            /**
             * Signal emitted when the text direction of a
             *   widget changes.
             * @param previous_direction
             */
            vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
            /**
             * Vfunc for gtk_widget_child_focus()
             * @param direction
             */
            vfunc_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * Single-child widgets generally propagate the preference of
             * their child, more complex widgets need to request something
             * either in context of their children or in context of their
             * allocation capabilities.
             */
            vfunc_get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
             *
             * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
             * implementation cannot transfer the focus to a descendant of `widget`
             * that is focusable, it will not take focus and %FALSE will be returned.
             *
             * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
             * is allowed, should not have an effect, and return %TRUE.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show().
             *
             * This is causing the widget to be hidden (invisible to the user).
             */
            vfunc_hide(): void;
            /**
             * Emits the `::keynav-failed` signal on the widget.
             *
             * This function should be called whenever keyboard navigation
             * within a single widget hits a boundary.
             *
             * The return value of this function should be interpreted
             * in a way similar to the return value of
             * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
             * stay in the widget, the failed keyboard  navigation is OK
             * and/or there is nowhere we can/should move the focus to.
             * When %FALSE is returned, the caller should continue with
             * keyboard navigation outside the widget, e.g. by calling
             * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
             *
             * The default [signal`Gtk`.Widget::keynav-failed] handler returns
             * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
             * For the other values of `GtkDirectionType` it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * [method`Gtk`.Widget.error_bell] to notify the user of the
             * failed keyboard navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * [class`Gtk`.Entry] widgets where the user should be able to navigate
             * the entire row with the cursor keys, as e.g. known from user
             * interfaces that require entering license keys.
             * @param direction direction of focus movement
             */
            vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Causes a widget to be mapped if it isn’t already.
             *
             * This function is only for use in widget implementations.
             */
            vfunc_map(): void;
            /**
             * Measures `widget` in the orientation `orientation` and for the given `for_size`.
             *
             * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
             * is 300, this functions will compute the minimum and natural width of `widget`
             * if it is allocated at a height of 300 pixels.
             *
             * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
             * a more details on implementing `GtkWidgetClass.measure()`.
             * @param orientation the orientation to measure
             * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
             */
            vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
            /**
             * Emits the ::mnemonic-activate signal.
             *
             * See [signal`Gtk`.Widget::mnemonic-activate].
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             */
            vfunc_mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Signal emitted when a change of focus is requested
             * @param direction
             */
            vfunc_move_focus(direction: Gtk.DirectionType): void;
            /**
             * Signal emitted when “has-tooltip” is %TRUE and the
             *   hover timeout has expired with the cursor hovering “above”
             *   widget; or emitted when widget got focus in keyboard mode.
             * @param x
             * @param y
             * @param keyboard_tooltip
             * @param tooltip
             */
            vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
            /**
             * Creates the GDK resources associated with a widget.
             *
             * Normally realization happens implicitly; if you show a widget
             * and all its parent containers, then the widget will be realized
             * and mapped automatically.
             *
             * Realizing a widget requires all the widget’s parent widgets to be
             * realized; calling this function realizes the widget’s parents
             * in addition to `widget` itself. If a widget is not yet inside a
             * toplevel window when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * [signal`Gtk`.Widget::realize].
             */
            vfunc_realize(): void;
            /**
             * Called when the widget gets added to a `GtkRoot` widget. Must
             *   chain up
             */
            vfunc_root(): void;
            /**
             * Set `child` as the current focus child of `widget`.
             *
             * This function is only suitable for widget implementations.
             * If you want a certain widget to get the input focus, call
             * [method`Gtk`.Widget.grab_focus] on it.
             * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
             */
            vfunc_set_focus_child(child?: Gtk.Widget | null): void;
            /**
             * Flags a widget to be displayed.
             *
             * Any widget that isn’t shown will not appear on the screen.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            vfunc_show(): void;
            /**
             * Called to set the allocation, if the widget does
             *   not have a layout manager.
             * @param width
             * @param height
             * @param baseline
             */
            vfunc_size_allocate(width: number, height: number, baseline: number): void;
            /**
             * Vfunc called when a new snapshot of the widget has to be taken.
             * @param snapshot
             */
            vfunc_snapshot(snapshot: Gtk.Snapshot): void;
            /**
             * Signal emitted when the widget state changes,
             *   see gtk_widget_get_state_flags().
             * @param previous_state_flags
             */
            vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
            /**
             * Emitted when a system setting was changed. Must chain up.
             * @param settings
             */
            vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
            /**
             * Causes a widget to be unmapped if it’s currently mapped.
             *
             * This function is only for use in widget implementations.
             */
            vfunc_unmap(): void;
            /**
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget).
             *
             * This function is only useful in widget implementations.
             */
            vfunc_unrealize(): void;
            /**
             * Called when the widget is about to be removed from its
             *   `GtkRoot` widget. Must chain up
             */
            vfunc_unroot(): void;
        }

        module StyleSchemeChooserWidget {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    StyleSchemeChooser.ConstructorProps {}
        }

        /**
         * A widget for choosing style schemes.
         *
         * The `GtkSourceStyleSchemeChooserWidget` widget lets the user select a
         * style scheme. By default, the chooser presents a predefined list
         * of style schemes.
         *
         * To change the initially selected style scheme,
         * use [method`StyleSchemeChooser`.set_style_scheme].
         * To get the selected style scheme
         * use [method`StyleSchemeChooser`.get_style_scheme].
         */
        class StyleSchemeChooserWidget
            extends Gtk.Widget
            implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser
        {
            static $gtype: GObject.GType<StyleSchemeChooserWidget>;

            // Constructors

            constructor(properties?: Partial<StyleSchemeChooserWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): StyleSchemeChooserWidget;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);
            /**
             * Contains the currently selected style scheme.
             *
             * The property can be set to change the current selection programmatically.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * Contains the currently selected style scheme.
             *
             * The property can be set to change the current selection programmatically.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
            /**
             * Gets the currently-selected scheme.
             * @returns the currently-selected scheme.
             */
            get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            set_style_scheme(scheme: StyleScheme): void;
            /**
             * Gets the currently-selected scheme.
             */
            vfunc_get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            vfunc_set_style_scheme(scheme: StyleScheme): void;
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

        module StyleSchemeManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                scheme_ids: string[];
                schemeIds: string[];
                search_path: string[];
                searchPath: string[];
            }
        }

        /**
         * Provides access to [class`StyleScheme]`s.
         */
        class StyleSchemeManager extends GObject.Object {
            static $gtype: GObject.GType<StyleSchemeManager>;

            // Properties

            get scheme_ids(): string[];
            get schemeIds(): string[];
            get search_path(): string[];
            set search_path(val: string[]);
            get searchPath(): string[];
            set searchPath(val: string[]);

            // Constructors

            constructor(properties?: Partial<StyleSchemeManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): StyleSchemeManager;

            // Static methods

            /**
             * Returns the default #GtkSourceStyleSchemeManager instance.
             */
            static get_default(): StyleSchemeManager;

            // Methods

            /**
             * Appends `path` to the list of directories where the `manager` looks for
             * style scheme files.
             *
             * See [method`StyleSchemeManager`.set_search_path] for details.
             * @param path a directory or a filename.
             */
            append_search_path(path: string): void;
            /**
             * Mark any currently cached information about the available style schems
             * as invalid.
             *
             * All the available style schemes will be reloaded next time the `manager` is accessed.
             */
            force_rescan(): void;
            /**
             * Looks up style scheme by id.
             * @param scheme_id style scheme id to find.
             * @returns a #GtkSourceStyleScheme object.   The returned value is owned by @manager and must not be unref'ed.
             */
            get_scheme(scheme_id: string): StyleScheme | null;
            /**
             * Returns the ids of the available style schemes.
             * @returns a %NULL-terminated array of strings containing the ids of the available style schemes or %NULL if no style scheme is available. The array is sorted alphabetically according to the scheme name. The array is owned by the @manager and must not be modified.
             */
            get_scheme_ids(): string[] | null;
            /**
             * Returns the current search path for the `manager`.
             *
             * See [method`StyleSchemeManager`.set_search_path] for details.
             * @returns a %NULL-terminated array of string containing the search path. The array is owned by the @manager and must not be modified.
             */
            get_search_path(): string[];
            /**
             * Prepends `path` to the list of directories where the `manager` looks
             * for style scheme files.
             *
             * See [method`StyleSchemeManager`.set_search_path] for details.
             * @param path a directory or a filename.
             */
            prepend_search_path(path: string): void;
            /**
             * Sets the list of directories where the `manager` looks for
             * style scheme files.
             *
             * If `path` is %NULL, the search path is reset to default.
             *
             * Since GtkSourceView 5.16 this function will allow you to provide
             * paths in the form of "resource:///" URIs to embedded `GResource`s.
             * They must contain the path of a directory within the `GResource`.
             * @param path a %NULL-terminated array of   strings or %NULL.
             */
            set_search_path(path?: string[] | null): void;
        }

        module StyleSchemePreview {
            // Signal callback interfaces

            interface Activate {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Actionable.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                scheme: StyleScheme;
                selected: boolean;
            }
        }

        /**
         * A preview widget for [class`StyleScheme]`.
         *
         * This widget provides a convenient [class`Gtk`.Widget] to preview a [class`StyleScheme]`.
         *
         * The [property`StyleSchemePreview:`selected] property can be used to manage
         * the selection state of a single preview widget.
         */
        class StyleSchemePreview
            extends Gtk.Widget
            implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget
        {
            static $gtype: GObject.GType<StyleSchemePreview>;

            // Properties

            get scheme(): StyleScheme;
            get selected(): boolean;
            set selected(val: boolean);

            // Constructors

            constructor(properties?: Partial<StyleSchemePreview.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](scheme: StyleScheme): StyleSchemePreview;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'activate', callback: (_source: this) => void): number;
            connect_after(signal: 'activate', callback: (_source: this) => void): number;
            emit(signal: 'activate'): void;

            // Methods

            /**
             * Gets the #GtkSourceStyleScheme previewed by the widget.
             * @returns a #GtkSourceStyleScheme
             */
            get_scheme(): StyleScheme;
            get_selected(): boolean;
            set_selected(selected: boolean): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);
            /**
             * The name of the action with which this widget should be associated.
             */
            get action_name(): string;
            set action_name(val: string);
            /**
             * The name of the action with which this widget should be associated.
             */
            get actionName(): string;
            set actionName(val: string);
            /**
             * The target value of the actionable widget's action.
             */
            get action_target(): GLib.Variant;
            set action_target(val: GLib.Variant);
            /**
             * The target value of the actionable widget's action.
             */
            get actionTarget(): GLib.Variant;
            set actionTarget(val: GLib.Variant);
            /**
             * Whether the widget or any of its descendents can accept
             * the input focus.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get can_focus(): boolean;
            set can_focus(val: boolean);
            /**
             * Whether the widget or any of its descendents can accept
             * the input focus.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get canFocus(): boolean;
            set canFocus(val: boolean);
            /**
             * Whether the widget can receive pointer events.
             */
            get can_target(): boolean;
            set can_target(val: boolean);
            /**
             * Whether the widget can receive pointer events.
             */
            get canTarget(): boolean;
            set canTarget(val: boolean);
            /**
             * A list of css classes applied to this widget.
             */
            get css_classes(): string[];
            set css_classes(val: string[]);
            /**
             * A list of css classes applied to this widget.
             */
            get cssClasses(): string[];
            set cssClasses(val: string[]);
            /**
             * The name of this widget in the CSS tree.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get css_name(): string;
            /**
             * The name of this widget in the CSS tree.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get cssName(): string;
            /**
             * The cursor used by `widget`.
             */
            get cursor(): Gdk.Cursor;
            set cursor(val: Gdk.Cursor);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             */
            get focus_on_click(): boolean;
            set focus_on_click(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             */
            get focusOnClick(): boolean;
            set focusOnClick(val: boolean);
            /**
             * Whether this widget itself will accept the input focus.
             */
            get focusable(): boolean;
            set focusable(val: boolean);
            /**
             * How to distribute horizontal space if widget gets extra space.
             */
            get halign(): Gtk.Align;
            set halign(val: Gtk.Align);
            /**
             * Whether the widget is the default widget.
             */
            get has_default(): boolean;
            /**
             * Whether the widget is the default widget.
             */
            get hasDefault(): boolean;
            /**
             * Whether the widget has the input focus.
             */
            get has_focus(): boolean;
            /**
             * Whether the widget has the input focus.
             */
            get hasFocus(): boolean;
            /**
             * Enables or disables the emission of the ::query-tooltip signal on `widget`.
             *
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
             * determine whether it will provide a tooltip or not.
             */
            get has_tooltip(): boolean;
            set has_tooltip(val: boolean);
            /**
             * Enables or disables the emission of the ::query-tooltip signal on `widget`.
             *
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
             * determine whether it will provide a tooltip or not.
             */
            get hasTooltip(): boolean;
            set hasTooltip(val: boolean);
            /**
             * Override for height request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get height_request(): number;
            set height_request(val: number);
            /**
             * Override for height request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get heightRequest(): number;
            set heightRequest(val: number);
            /**
             * Whether to expand horizontally.
             */
            get hexpand(): boolean;
            set hexpand(val: boolean);
            /**
             * Whether to use the `hexpand` property.
             */
            get hexpand_set(): boolean;
            set hexpand_set(val: boolean);
            /**
             * Whether to use the `hexpand` property.
             */
            get hexpandSet(): boolean;
            set hexpandSet(val: boolean);
            /**
             * The `GtkLayoutManager` instance to use to compute the preferred size
             * of the widget, and allocate its children.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get layout_manager(): Gtk.LayoutManager;
            set layout_manager(val: Gtk.LayoutManager);
            /**
             * The `GtkLayoutManager` instance to use to compute the preferred size
             * of the widget, and allocate its children.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get layoutManager(): Gtk.LayoutManager;
            set layoutManager(val: Gtk.LayoutManager);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_bottom(): number;
            set margin_bottom(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginBottom(): number;
            set marginBottom(val: number);
            /**
             * Margin on end of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_end(): number;
            set margin_end(val: number);
            /**
             * Margin on end of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginEnd(): number;
            set marginEnd(val: number);
            /**
             * Margin on start of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_start(): number;
            set margin_start(val: number);
            /**
             * Margin on start of widget, horizontally.
             *
             * This property supports left-to-right and right-to-left text
             * directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginStart(): number;
            set marginStart(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get margin_top(): number;
            set margin_top(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * [method`Gtk`.Widget.set_size_request] for example.
             */
            get marginTop(): number;
            set marginTop(val: number);
            /**
             * The name of the widget.
             */
            get name(): string;
            set name(val: string);
            /**
             * The requested opacity of the widget.
             */
            get opacity(): number;
            set opacity(val: number);
            /**
             * How content outside the widget's content area is treated.
             *
             * This property is meant to be set by widget implementations,
             * typically in their instance init function.
             */
            get overflow(): Gtk.Overflow;
            set overflow(val: Gtk.Overflow);
            /**
             * The parent widget of this widget.
             */
            get parent(): Gtk.Widget;
            /**
             * Whether the widget will receive the default action when it is focused.
             */
            get receives_default(): boolean;
            set receives_default(val: boolean);
            /**
             * Whether the widget will receive the default action when it is focused.
             */
            get receivesDefault(): boolean;
            set receivesDefault(val: boolean);
            /**
             * The `GtkRoot` widget of the widget tree containing this widget.
             *
             * This will be %NULL if the widget is not contained in a root widget.
             */
            get root(): Gtk.Root;
            /**
             * The scale factor of the widget.
             */
            get scale_factor(): number;
            /**
             * The scale factor of the widget.
             */
            get scaleFactor(): number;
            /**
             * Whether the widget responds to input.
             */
            get sensitive(): boolean;
            set sensitive(val: boolean);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with Pango markup.
             *
             * Also see [method`Gtk`.Tooltip.set_markup].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltip_markup(): string;
            set tooltip_markup(val: string);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with Pango markup.
             *
             * Also see [method`Gtk`.Tooltip.set_markup].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltipMarkup(): string;
            set tooltipMarkup(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see [method`Gtk`.Tooltip.set_text].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltip_text(): string;
            set tooltip_text(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see [method`Gtk`.Tooltip.set_text].
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL:
             * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
             * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
             * the default signal handler.
             *
             * Note that if both [property`Gtk`.Widget:tooltip-text] and
             * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
             */
            get tooltipText(): string;
            set tooltipText(val: string);
            /**
             * How to distribute vertical space if widget gets extra space.
             */
            get valign(): Gtk.Align;
            set valign(val: Gtk.Align);
            /**
             * Whether to expand vertically.
             */
            get vexpand(): boolean;
            set vexpand(val: boolean);
            /**
             * Whether to use the `vexpand` property.
             */
            get vexpand_set(): boolean;
            set vexpand_set(val: boolean);
            /**
             * Whether to use the `vexpand` property.
             */
            get vexpandSet(): boolean;
            set vexpandSet(val: boolean);
            /**
             * Whether the widget is visible.
             */
            get visible(): boolean;
            set visible(val: boolean);
            /**
             * Override for width request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get width_request(): number;
            set width_request(val: number);
            /**
             * Override for width request of the widget.
             *
             * If this is -1, the natural request will be used.
             */
            get widthRequest(): number;
            set widthRequest(val: number);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the action name for `actionable`.
             * @returns the action name
             */
            get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             * @returns the current target value
             */
            get_action_target_value(): GLib.Variant | null;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.
             *
             * If `action_name` is %NULL then the widget will be unassociated from
             * any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a `GtkApplicationWindow`.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing [class`ApplicationWindow]` or its associated [class`Application]`,
             * respectively. This is the same form used for actions in the [class`Gio`.Menu]
             * associated with the window.
             * @param action_name an action name
             */
            set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes. First, it is used as the parameter
             * to activation of the action associated with the `GtkActionable` widget.
             * Second, it is used to determine if the widget should be rendered as
             * “active” — the widget is active if the state is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
             * with string state in a typical “radio button” situation. Each button
             * will be associated with the same action, but with a different target
             * value for that action. Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value. Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a [struct@GLib.Variant] to set as the target value
             */
            set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * Sets the action-name and associated string target value of an
             * actionable widget.
             *
             * `detailed_action_name` is a string in the format accepted by
             * [func`Gio`.Action.parse_detailed_name].
             * @param detailed_action_name the detailed action name
             */
            set_detailed_action_name(detailed_action_name: string): void;
            /**
             * Gets the action name for `actionable`.
             */
            vfunc_get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             */
            vfunc_get_action_target_value(): GLib.Variant | null;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.
             *
             * If `action_name` is %NULL then the widget will be unassociated from
             * any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a `GtkApplicationWindow`.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing [class`ApplicationWindow]` or its associated [class`Application]`,
             * respectively. This is the same form used for actions in the [class`Gio`.Menu]
             * associated with the window.
             * @param action_name an action name
             */
            vfunc_set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes. First, it is used as the parameter
             * to activation of the action associated with the `GtkActionable` widget.
             * Second, it is used to determine if the widget should be rendered as
             * “active” — the widget is active if the state is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a [iface`Gio`.Action]
             * with string state in a typical “radio button” situation. Each button
             * will be associated with the same action, but with a different target
             * value for that action. Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value. Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a [struct@GLib.Variant] to set as the target value
             */
            vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
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
            /**
             * Enable or disable an action installed with
             * gtk_widget_class_install_action().
             * @param action_name action name, such as "clipboard.paste"
             * @param enabled whether the action is now enabled
             */
            action_set_enabled(action_name: string, enabled: boolean): void;
            /**
             * For widgets that can be “activated” (buttons, menu items, etc.),
             * this function activates them.
             *
             * The activation will emit the signal set using
             * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
             *
             * Activation is what happens when you press <kbd>Enter</kbd>
             * on a widget during key navigation.
             *
             * If you wish to handle the activation keybinding yourself, it is
             * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
             * created with [ctor`Gtk`.SignalAction.new].
             *
             * If `widget` isn't activatable, the function returns %FALSE.
             * @returns %TRUE if the widget was activatable
             */
            activate(): boolean;
            /**
             * Looks up the action in the action groups associated with
             * `widget` and its ancestors, and activates it.
             *
             * If the action is in an action group added with
             * [method`Gtk`.Widget.insert_action_group], the `name` is expected
             * to be prefixed with the prefix that was used when the group was
             * inserted.
             *
             * The arguments must match the actions expected parameter type,
             * as returned by `g_action_get_parameter_type()`.
             * @param name the name of the action to activate
             * @param args parameters to use
             * @returns %TRUE if the action was activated, %FALSE if the   action does not exist.
             */
            activate_action(name: string, args?: GLib.Variant | null): boolean;
            /**
             * Activates the `default.activate` action from `widget`.
             */
            activate_default(): void;
            /**
             * Adds `controller` to `widget` so that it will receive events.
             *
             * You will usually want to call this function right after
             * creating any kind of [class`Gtk`.EventController].
             * @param controller a `GtkEventController` that hasn't been   added to a widget yet
             */
            add_controller(controller: Gtk.EventController): void;
            /**
             * Adds a style class to `widget`.
             *
             * After calling this function, the widget’s style will match
             * for `css_class,` according to CSS matching rules.
             *
             * Use [method`Gtk`.Widget.remove_css_class] to remove the
             * style again.
             * @param css_class The style class to add to @widget, without   the leading '.' used for notation of style classes
             */
            add_css_class(css_class: string): void;
            /**
             * Adds a widget to the list of mnemonic labels for this widget.
             *
             * See [method`Gtk`.Widget.list_mnemonic_labels]. Note the
             * list of mnemonic labels for the widget is cleared when the
             * widget is destroyed, so the caller must make sure to update
             * its internal state at this point as well.
             * @param label a `GtkWidget` that acts as a mnemonic label for @widget
             */
            add_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Queues an animation frame update and adds a callback to be called
             * before each frame.
             *
             * Until the tick callback is removed, it will be called frequently
             * (usually at the frame rate of the output device or as quickly as
             * the application can be repainted, whichever is slower). For this
             * reason, is most suitable for handling graphics that change every
             * frame or every few frames. The tick callback does not automatically
             * imply a relayout or repaint. If you want a repaint or relayout, and
             * aren’t changing widget properties that would trigger that (for example,
             * changing the text of a `GtkLabel`), then you will have to call
             * [method`Gtk`.Widget.queue_resize] or [method`Gtk`.Widget.queue_draw]
             * yourself.
             *
             * [method`Gdk`.FrameClock.get_frame_time] should generally be used
             * for timing continuous animations and
             * [method`Gdk`.FrameTimings.get_predicted_presentation_time] if you are
             * trying to display isolated frames at particular times.
             *
             * This is a more convenient alternative to connecting directly to the
             * [signal`Gdk`.FrameClock::update] signal of `GdkFrameClock`, since you
             * don't have to worry about when a `GdkFrameClock` is assigned to a widget.
             * @param callback function   to call for updating animations
             * @returns an id for the connection of this callback. Remove the callback   by passing the id returned from this function to   [method@Gtk.Widget.remove_tick_callback]
             */
            add_tick_callback(callback: Gtk.TickCallback): number;
            /**
             * This function is only used by `GtkWidget` subclasses, to
             * assign a size, position and (optionally) baseline to their
             * child widgets.
             *
             * In this function, the allocation and baseline may be adjusted.
             * The given allocation will be forced to be bigger than the
             * widget's minimum size, as well as at least 0×0 in size.
             *
             * For a version that does not take a transform, see
             * [method`Gtk`.Widget.size_allocate].
             * @param width New width of @widget
             * @param height New height of @widget
             * @param baseline New baseline of @widget, or -1
             * @param transform Transformation to be applied to @widget
             */
            allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
            /**
             * Called by widgets as the user moves around the window using
             * keyboard shortcuts.
             *
             * The `direction` argument indicates what kind of motion is taking place (up,
             * down, left, right, tab forward, tab backward).
             *
             * This function calls the [vfunc`Gtk`.Widget.focus] virtual function; widgets
             * can override the virtual function in order to implement appropriate focus
             * behavior.
             *
             * The default `focus()` virtual function for a widget should return `TRUE` if
             * moving in `direction` left the focus on a focusable location inside that
             * widget, and `FALSE` if moving in `direction` moved the focus outside the
             * widget. When returning `TRUE`, widgets normally call [method`Gtk`.Widget.grab_focus]
             * to place the focus accordingly; when returning `FALSE`, they don’t modify
             * the current focus location.
             *
             * This function is used by custom widget implementations; if you're
             * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
             * the focus to a particular widget.
             * @param direction direction of focus movement
             * @returns %TRUE if focus ended up inside @widget
             */
            child_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Computes the bounds for `widget` in the coordinate space of `target`.
             *
             * The bounds of widget are (the bounding box of) the region that it is
             * expected to draw in. See the [coordinate system](coordinates.html)
             * overview to learn more.
             *
             * If the operation is successful, %TRUE is returned. If `widget` has no
             * bounds or the bounds cannot be expressed in `target'`s coordinate space
             * (for example if both widgets are in different windows), %FALSE is
             * returned and `bounds` is set to the zero rectangle.
             *
             * It is valid for `widget` and `target` to be the same widget.
             * @param target the `GtkWidget`
             * @returns %TRUE if the bounds could be computed
             */
            compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
            /**
             * Computes whether a container should give this widget
             * extra space when possible.
             *
             * Containers should check this, rather than looking at
             * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
             *
             * This function already checks whether the widget is visible, so
             * visibility does not need to be checked separately. Non-visible
             * widgets are not expanded.
             *
             * The computed expand value uses either the expand setting explicitly
             * set on the widget itself, or, if none has been explicitly set,
             * the widget may expand if some of its children do.
             * @param orientation expand direction
             * @returns whether widget tree rooted here should be expanded
             */
            compute_expand(orientation: Gtk.Orientation): boolean;
            /**
             * Translates the given `point` in `widget'`s coordinates to coordinates
             * relative to `target’`s coordinate system.
             *
             * In order to perform this operation, both widgets must share a
             * common ancestor.
             * @param target the `GtkWidget` to transform into
             * @param point a point in @widget's coordinate system
             * @returns %TRUE if the point could be determined, %FALSE on failure.   In this case, 0 is stored in @out_point.
             */
            compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
            /**
             * Computes a matrix suitable to describe a transformation from
             * `widget'`s coordinate system into `target'`s coordinate system.
             *
             * The transform can not be computed in certain cases, for example
             * when `widget` and `target` do not share a common ancestor. In that
             * case `out_transform` gets set to the identity matrix.
             *
             * To learn more about widget coordinate systems, see the coordinate
             * system [overview](coordinates.html).
             * @param target the target widget that the matrix will transform to
             * @returns %TRUE if the transform could be computed, %FALSE otherwise
             */
            compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
            /**
             * Tests if the point at (`x,` `y)` is contained in `widget`.
             *
             * The coordinates for (`x,` `y)` must be in widget coordinates, so
             * (0, 0) is assumed to be the top left of `widget'`s content area.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             * @returns %TRUE if @widget contains (@x, @y).
             */
            contains(x: number, y: number): boolean;
            /**
             * Creates a new `PangoContext` with the appropriate font map,
             * font options, font description, and base direction for drawing
             * text for this widget.
             *
             * See also [method`Gtk`.Widget.get_pango_context].
             * @returns the new `PangoContext`
             */
            create_pango_context(): Pango.Context;
            /**
             * Creates a new `PangoLayout` with the appropriate font map,
             * font description, and base direction for drawing text for
             * this widget.
             *
             * If you keep a `PangoLayout` created in this way around,
             * you need to re-create it when the widget `PangoContext`
             * is replaced. This can be tracked by listening to changes
             * of the [property`Gtk`.Widget:root] property on the widget.
             * @param text text to set on the layout
             * @returns the new `PangoLayout`
             */
            create_pango_layout(text?: string | null): Pango.Layout;
            /**
             * Clears the template children for the given widget.
             *
             * This function is the opposite of [method`Gtk`.Widget.init_template], and
             * it is used to clear all the template children from a widget instance.
             * If you bound a template child to a field in the instance structure, or
             * in the instance private data structure, the field will be set to `NULL`
             * after this function returns.
             *
             * You should call this function inside the `GObjectClass.dispose()`
             * implementation of any widget that called `gtk_widget_init_template()`.
             * Typically, you will want to call this function last, right before
             * chaining up to the parent type's dispose implementation, e.g.
             *
             * ```c
             * static void
             * some_widget_dispose (GObject *gobject)
             * {
             *   SomeWidget *self = SOME_WIDGET (gobject);
             *
             *   // Clear the template data for SomeWidget
             *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
             *
             *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
             * }
             * ```
             * @param widget_type the type of the widget to finalize the template for
             */
            dispose_template(widget_type: GObject.GType): void;
            /**
             * Checks to see if a drag movement has passed the GTK drag threshold.
             * @param start_x X coordinate of start of drag
             * @param start_y Y coordinate of start of drag
             * @param current_x current X coordinate
             * @param current_y current Y coordinate
             * @returns %TRUE if the drag threshold has been passed.
             */
            drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
            /**
             * Notifies the user about an input-related error on this widget.
             *
             * If the [property`Gtk`.Settings:gtk-error-bell] setting is %TRUE,
             * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
             *
             * Note that the effect of [method`Gdk`.Surface.beep] can be configured
             * in many ways, depending on the windowing backend and the desktop
             * environment or window manager that is used.
             */
            error_bell(): void;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             *
             * This function is intended to be used when implementing handlers
             * for the `GtkWidget`Class.snapshot() function, and when allocating
             * child widgets in `GtkWidget`Class.size_allocate().
             * @returns the baseline of the @widget, or -1 if none
             */
            get_allocated_baseline(): number;
            /**
             * Returns the height that has currently been allocated to `widget`.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns the height of the @widget
             */
            get_allocated_height(): number;
            /**
             * Returns the width that has currently been allocated to `widget`.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns the width of the @widget
             */
            get_allocated_width(): number;
            /**
             * Retrieves the widget’s allocation.
             *
             * Note, when implementing a layout container: a widget’s allocation
             * will be its “adjusted” allocation, that is, the widget’s parent
             * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
             * and that allocation is then adjusted (to handle margin
             * and alignment for example) before assignment to the widget.
             * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
             * was actually assigned to the widget. The adjusted allocation is
             * guaranteed to be completely contained within the
             * [method`Gtk`.Widget.size_allocate] allocation, however.
             *
             * So a layout container is guaranteed that its children stay inside
             * the assigned bounds, but not that they have exactly the bounds the
             * container assigned.
             */
            get_allocation(): Gtk.Allocation;
            /**
             * Gets the first ancestor of `widget` with type `widget_type`.
             *
             * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
             * gets the first `GtkBox` that’s an ancestor of `widget`. No
             * reference will be added to the returned widget; it should
             * not be unreferenced.
             *
             * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
             * considers `widget` to be an ancestor of itself.
             * @param widget_type ancestor type
             * @returns the ancestor widget
             */
            get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             *
             * This function is intended to be used when implementing handlers
             * for the `GtkWidget`Class.snapshot() function, and when allocating
             * child widgets in `GtkWidget`Class.size_allocate().
             * @returns the baseline of the @widget, or -1 if none
             */
            get_baseline(): number;
            /**
             * Determines whether the input focus can enter `widget` or any
             * of its children.
             *
             * See [method`Gtk`.Widget.set_focusable].
             * @returns %TRUE if the input focus can enter @widget, %FALSE otherwise
             */
            get_can_focus(): boolean;
            /**
             * Queries whether `widget` can be the target of pointer events.
             * @returns %TRUE if @widget can receive pointer events
             */
            get_can_target(): boolean;
            /**
             * Gets the value set with gtk_widget_set_child_visible().
             *
             * If you feel a need to use this function, your code probably
             * needs reorganization.
             *
             * This function is only useful for container implementations
             * and should never be called by an application.
             * @returns %TRUE if the widget is mapped with the parent.
             */
            get_child_visible(): boolean;
            /**
             * Gets the clipboard object for `widget`.
             *
             * This is a utility function to get the clipboard object for the
             * `GdkDisplay` that `widget` is using.
             *
             * Note that this function always works, even when `widget` is not
             * realized yet.
             * @returns the appropriate clipboard object
             */
            get_clipboard(): Gdk.Clipboard;
            /**
             * Gets the current foreground color for the widget’s
             * CSS style.
             *
             * This function should only be used in snapshot
             * implementations that need to do custom
             * drawing with the foreground color.
             */
            get_color(): Gdk.RGBA;
            /**
             * Returns the list of style classes applied to `widget`.
             * @returns a %NULL-terminated list of   css classes currently applied to @widget. The returned   list must freed using g_strfreev().
             */
            get_css_classes(): string[];
            /**
             * Returns the CSS name that is used for `self`.
             * @returns the CSS name
             */
            get_css_name(): string;
            /**
             * Queries the cursor set on `widget`.
             *
             * See [method`Gtk`.Widget.set_cursor] for details.
             * @returns the cursor   currently in use or %NULL if the cursor is inherited
             */
            get_cursor(): Gdk.Cursor | null;
            /**
             * Gets the reading direction for a particular widget.
             *
             * See [method`Gtk`.Widget.set_direction].
             * @returns the reading direction for the widget.
             */
            get_direction(): Gtk.TextDirection;
            /**
             * Get the `GdkDisplay` for the toplevel window associated with
             * this widget.
             *
             * This function can only be called after the widget has been
             * added to a widget hierarchy with a `GtkWindow` at the top.
             *
             * In general, you should only create display specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the `GdkDisplay` for the toplevel   for this widget.
             */
            get_display(): Gdk.Display;
            /**
             * Returns the widget’s first child.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's first child
             */
            get_first_child(): Gtk.Widget | null;
            /**
             * Returns the current focus child of `widget`.
             * @returns The current focus   child of @widget
             */
            get_focus_child(): Gtk.Widget | null;
            /**
             * Returns whether the widget should grab focus when it is clicked
             * with the mouse.
             *
             * See [method`Gtk`.Widget.set_focus_on_click].
             * @returns %TRUE if the widget should grab focus when it is   clicked with the mouse
             */
            get_focus_on_click(): boolean;
            /**
             * Determines whether `widget` can own the input focus.
             *
             * See [method`Gtk`.Widget.set_focusable].
             * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
             */
            get_focusable(): boolean;
            /**
             * Gets the font map of `widget`.
             *
             * See [method`Gtk`.Widget.set_font_map].
             * @returns A `PangoFontMap`
             */
            get_font_map(): Pango.FontMap | null;
            /**
             * Returns the `cairo_font_options_t` of widget.
             *
             * Seee [method`Gtk`.Widget.set_font_options].
             * @returns the `cairo_font_options_t` of widget
             */
            get_font_options(): cairo.FontOptions | null;
            /**
             * Obtains the frame clock for a widget.
             *
             * The frame clock is a global “ticker” that can be used to drive
             * animations and repaints. The most common reason to get the frame
             * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
             * to get a time to use for animating. For example you might record
             * the start of the animation with an initial value from
             * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
             * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
             *
             * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
             * clock, but won’t necessarily repaint any widgets. To repaint a
             * widget, you have to use [method`Gtk`.Widget.queue_draw] which invalidates
             * the widget (thus scheduling it to receive a draw on the next
             * frame). gtk_widget_queue_draw() will also end up requesting a frame
             * on the appropriate frame clock.
             *
             * A widget’s frame clock will not change while the widget is
             * mapped. Reparenting a widget (which implies a temporary unmap) can
             * change the widget’s frame clock.
             *
             * Unrealized widgets do not have a frame clock.
             * @returns a `GdkFrameClock`
             */
            get_frame_clock(): Gdk.FrameClock | null;
            /**
             * Gets the horizontal alignment of `widget`.
             *
             * For backwards compatibility reasons this method will never return
             * one of the baseline alignments, but instead it will convert it to
             * `GTK_ALIGN_FILL` or `GTK_ALIGN_CENTER`.
             *
             * Baselines are not supported for horizontal alignment.
             * @returns the horizontal alignment of @widget
             */
            get_halign(): Gtk.Align;
            /**
             * Returns the current value of the `has-tooltip` property.
             * @returns current value of `has-tooltip` on @widget.
             */
            get_has_tooltip(): boolean;
            /**
             * Returns the content height of the widget.
             *
             * This function returns the height passed to its
             * size-allocate implementation, which is the height you
             * should be using in [vfunc`Gtk`.Widget.snapshot].
             *
             * For pointer events, see [method`Gtk`.Widget.contains].
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns The height of @widget
             */
            get_height(): number;
            /**
             * Gets whether the widget would like any available extra horizontal
             * space.
             *
             * When a user resizes a `GtkWindow`, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Containers should use [method`Gtk`.Widget.compute_expand] rather
             * than this function, to see whether a widget, or any of its children,
             * has the expand flag set. If any child of a widget wants to
             * expand, the parent may ask to expand also.
             *
             * This function only looks at the widget’s own hexpand flag, rather
             * than computing whether the entire widget tree rooted at this widget
             * wants to expand.
             * @returns whether hexpand flag is set
             */
            get_hexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_hexpand() has been used
             * to explicitly set the expand flag on this widget.
             *
             * If [property`Gtk`.Widget:hexpand] property is set, then it
             * overrides any computed expand value based on child widgets.
             * If `hexpand` is not set, then the expand value depends on
             * whether any children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @returns whether hexpand has been explicitly set
             */
            get_hexpand_set(): boolean;
            /**
             * Returns the widget’s last child.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's last child
             */
            get_last_child(): Gtk.Widget | null;
            /**
             * Retrieves the layout manager used by `widget`.
             *
             * See [method`Gtk`.Widget.set_layout_manager].
             * @returns a `GtkLayoutManager`
             */
            get_layout_manager(): Gtk.LayoutManager | null;
            /**
             * Whether the widget is mapped.
             * @returns %TRUE if the widget is mapped, %FALSE otherwise.
             */
            get_mapped(): boolean;
            /**
             * Gets the bottom margin of `widget`.
             * @returns The bottom margin of @widget
             */
            get_margin_bottom(): number;
            /**
             * Gets the end margin of `widget`.
             * @returns The end margin of @widget
             */
            get_margin_end(): number;
            /**
             * Gets the start margin of `widget`.
             * @returns The start margin of @widget
             */
            get_margin_start(): number;
            /**
             * Gets the top margin of `widget`.
             * @returns The top margin of @widget
             */
            get_margin_top(): number;
            /**
             * Retrieves the name of a widget.
             *
             * See [method`Gtk`.Widget.set_name] for the significance of widget names.
             * @returns name of the widget. This string is owned by GTK and   should not be modified or freed
             */
            get_name(): string;
            /**
             * Returns the nearest `GtkNative` ancestor of `widget`.
             *
             * This function will return %NULL if the widget is not
             * contained inside a widget tree with a native ancestor.
             *
             * `GtkNative` widgets will return themselves here.
             * @returns the `GtkNative` ancestor of @widget
             */
            get_native(): Gtk.Native | null;
            /**
             * Returns the widget’s next sibling.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's next sibling
             */
            get_next_sibling(): Gtk.Widget | null;
            /**
             * #Fetches the requested opacity for this widget.
             *
             * See [method`Gtk`.Widget.set_opacity].
             * @returns the requested opacity for this widget.
             */
            get_opacity(): number;
            /**
             * Returns the widget’s overflow value.
             * @returns The widget's overflow.
             */
            get_overflow(): Gtk.Overflow;
            /**
             * Gets a `PangoContext` with the appropriate font map, font description,
             * and base direction for this widget.
             *
             * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
             * this context is owned by the widget (it can be used until the screen
             * for the widget changes or the widget is removed from its toplevel),
             * and will be updated to match any changes to the widget’s attributes.
             * This can be tracked by listening to changes of the
             * [property`Gtk`.Widget:root] property on the widget.
             * @returns the `PangoContext` for the widget.
             */
            get_pango_context(): Pango.Context;
            /**
             * Returns the parent widget of `widget`.
             * @returns the parent widget of @widget
             */
            get_parent(): Gtk.Widget | null;
            /**
             * Retrieves the minimum and natural size of a widget, taking
             * into account the widget’s preference for height-for-width management.
             *
             * This is used to retrieve a suitable size by container widgets which do
             * not impose any restrictions on the child placement. It can be used
             * to deduce toplevel window and menu sizes as well as child widgets in
             * free-form containers such as `GtkFixed`.
             *
             * Handle with care. Note that the natural height of a height-for-width
             * widget will generally be a smaller size than the minimum height, since
             * the required height for the natural width is generally smaller than the
             * required height for the minimum width.
             *
             * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
             */
            get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
            /**
             * Returns the widget’s previous sibling.
             *
             * This API is primarily meant for widget implementations.
             * @returns The widget's previous sibling
             */
            get_prev_sibling(): Gtk.Widget | null;
            /**
             * Gets the primary clipboard of `widget`.
             *
             * This is a utility function to get the primary clipboard object
             * for the `GdkDisplay` that `widget` is using.
             *
             * Note that this function always works, even when `widget` is not
             * realized yet.
             * @returns the appropriate clipboard object
             */
            get_primary_clipboard(): Gdk.Clipboard;
            /**
             * Determines whether `widget` is realized.
             * @returns %TRUE if @widget is realized, %FALSE otherwise
             */
            get_realized(): boolean;
            /**
             * Determines whether `widget` is always treated as the default widget
             * within its toplevel when it has the focus, even if another widget
             * is the default.
             *
             * See [method`Gtk`.Widget.set_receives_default].
             * @returns %TRUE if @widget acts as the default widget when focused,   %FALSE otherwise
             */
            get_receives_default(): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * Single-child widgets generally propagate the preference of
             * their child, more complex widgets need to request something
             * either in context of their children or in context of their
             * allocation capabilities.
             * @returns The `GtkSizeRequestMode` preferred by @widget.
             */
            get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Returns the `GtkRoot` widget of `widget`.
             *
             * This function will return %NULL if the widget is not contained
             * inside a widget tree with a root widget.
             *
             * `GtkRoot` widgets will return themselves here.
             * @returns the root widget of @widget
             */
            get_root(): Gtk.Root | null;
            /**
             * Retrieves the internal scale factor that maps from window
             * coordinates to the actual device pixels.
             *
             * On traditional systems this is 1, on high density outputs,
             * it can be a higher value (typically 2).
             *
             * See [method`Gdk`.Surface.get_scale_factor].
             * @returns the scale factor for @widget
             */
            get_scale_factor(): number;
            /**
             * Returns the widget’s sensitivity.
             *
             * This function returns the value that has been set using
             * [method`Gtk`.Widget.set_sensitive]).
             *
             * The effective sensitivity of a widget is however determined
             * by both its own and its parent widget’s sensitivity.
             * See [method`Gtk`.Widget.is_sensitive].
             * @returns %TRUE if the widget is sensitive
             */
            get_sensitive(): boolean;
            /**
             * Gets the settings object holding the settings used for this widget.
             *
             * Note that this function can only be called when the `GtkWidget`
             * is attached to a toplevel, since the settings object is specific
             * to a particular `GdkDisplay`. If you want to monitor the widget for
             * changes in its settings, connect to the `notify::display` signal.
             * @returns the relevant `GtkSettings` object
             */
            get_settings(): Gtk.Settings;
            /**
             * Returns the content width or height of the widget.
             *
             * Which dimension is returned depends on `orientation`.
             *
             * This is equivalent to calling [method`Gtk`.Widget.get_width]
             * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
             * for %GTK_ORIENTATION_VERTICAL, but can be used when
             * writing orientation-independent code, such as when
             * implementing [iface`Gtk`.Orientable] widgets.
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @param orientation the orientation to query
             * @returns The size of @widget in @orientation.
             */
            get_size(orientation: Gtk.Orientation): number;
            /**
             * Gets the size request that was explicitly set for the widget using
             * gtk_widget_set_size_request().
             *
             * A value of -1 stored in `width` or `height` indicates that that
             * dimension has not been set explicitly and the natural requisition
             * of the widget will be used instead. See
             * [method`Gtk`.Widget.set_size_request]. To get the size a widget will
             * actually request, call [method`Gtk`.Widget.measure] instead of
             * this function.
             */
            get_size_request(): [number, number];
            /**
             * Returns the widget state as a flag set.
             *
             * It is worth mentioning that the effective %GTK_STATE_FLAG_INSENSITIVE
             * state will be returned, that is, also based on parent insensitivity,
             * even if `widget` itself is sensitive.
             *
             * Also note that if you are looking for a way to obtain the
             * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
             * method, you should look at [method`Gtk`.StyleContext.get_state].
             * @returns The state flags for widget
             */
            get_state_flags(): Gtk.StateFlags;
            /**
             * Returns the style context associated to `widget`.
             *
             * The returned object is guaranteed to be the same
             * for the lifetime of `widget`.
             * @returns the widget’s `GtkStyleContext`
             */
            get_style_context(): Gtk.StyleContext;
            /**
             * Fetch an object build from the template XML for `widget_type` in
             * this `widget` instance.
             *
             * This will only report children which were previously declared
             * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
             * variants.
             *
             * This function is only meant to be called for code which is private
             * to the `widget_type` which declared the child and is meant for language
             * bindings which cannot easily make use of the GObject structure offsets.
             * @param widget_type The `GType` to get a template child for
             * @param name The “id” of the child defined in the template XML
             * @returns The object built in the template XML with   the id @name
             */
            get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
            /**
             * Gets the contents of the tooltip for `widget`.
             *
             * If the tooltip has not been set using
             * [method`Gtk`.Widget.set_tooltip_markup], this
             * function returns %NULL.
             * @returns the tooltip text
             */
            get_tooltip_markup(): string | null;
            /**
             * Gets the contents of the tooltip for `widget`.
             *
             * If the `widget'`s tooltip was set using
             * [method`Gtk`.Widget.set_tooltip_markup],
             * this function will return the escaped text.
             * @returns the tooltip text
             */
            get_tooltip_text(): string | null;
            /**
             * Gets the vertical alignment of `widget`.
             * @returns the vertical alignment of @widget
             */
            get_valign(): Gtk.Align;
            /**
             * Gets whether the widget would like any available extra vertical
             * space.
             *
             * See [method`Gtk`.Widget.get_hexpand] for more detail.
             * @returns whether vexpand flag is set
             */
            get_vexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_vexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
             * @returns whether vexpand has been explicitly set
             */
            get_vexpand_set(): boolean;
            /**
             * Determines whether the widget is visible.
             *
             * If you want to take into account whether the widget’s
             * parent is also marked as visible, use
             * [method`Gtk`.Widget.is_visible] instead.
             *
             * This function does not check if the widget is
             * obscured in any way.
             *
             * See [method`Gtk`.Widget.set_visible].
             * @returns %TRUE if the widget is visible
             */
            get_visible(): boolean;
            /**
             * Returns the content width of the widget.
             *
             * This function returns the width passed to its
             * size-allocate implementation, which is the width you
             * should be using in [vfunc`Gtk`.Widget.snapshot].
             *
             * For pointer events, see [method`Gtk`.Widget.contains].
             *
             * To learn more about widget sizes, see the coordinate
             * system [overview](coordinates.html).
             * @returns The width of @widget
             */
            get_width(): number;
            /**
             * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
             *
             * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
             * implementation cannot transfer the focus to a descendant of `widget`
             * that is focusable, it will not take focus and %FALSE will be returned.
             *
             * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
             * is allowed, should not have an effect, and return %TRUE.
             * @returns %TRUE if focus is now inside @widget.
             */
            grab_focus(): boolean;
            /**
             * Returns whether `css_class` is currently applied to `widget`.
             * @param css_class A style class, without the leading '.'   used for notation of style classes
             * @returns %TRUE if @css_class is currently applied to @widget,   %FALSE otherwise.
             */
            has_css_class(css_class: string): boolean;
            /**
             * Determines if the widget should show a visible indication that
             * it has the global input focus.
             *
             * This is a convenience function that takes into account whether
             * focus indication should currently be shown in the toplevel window
             * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
             * information about focus indication.
             *
             * To find out if the widget has the global input focus, use
             * [method`Gtk`.Widget.has_focus].
             * @returns %TRUE if the widget should display a “focus rectangle”
             */
            has_visible_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show().
             *
             * This is causing the widget to be hidden (invisible to the user).
             */
            hide(): void;
            /**
             * Returns whether the widget is currently being destroyed.
             *
             * This information can sometimes be used to avoid doing
             * unnecessary work.
             * @returns %TRUE if @widget is being destroyed
             */
            in_destruction(): boolean;
            /**
             * Creates and initializes child widgets defined in templates.
             *
             * This function must be called in the instance initializer
             * for any class which assigned itself a template using
             * [method`Gtk`.WidgetClass.set_template].
             *
             * It is important to call this function in the instance initializer
             * of a `GtkWidget` subclass and not in `GObject.constructed()` or
             * `GObject.constructor()` for two reasons:
             *
             *  - derived widgets will assume that the composite widgets
             *    defined by its parent classes have been created in their
             *    relative instance initializers
             *  - when calling `g_object_new()` on a widget with composite templates,
             *    it’s important to build the composite widgets before the construct
             *    properties are set. Properties passed to `g_object_new()` should
             *    take precedence over properties set in the private template XML
             *
             * A good rule of thumb is to call this function as the first thing in
             * an instance initialization function.
             */
            init_template(): void;
            /**
             * Inserts `group` into `widget`.
             *
             * Children of `widget` that implement [iface`Gtk`.Actionable] can
             * then be associated with actions in `group` by setting their
             * “action-name” to `prefix`.`action-name`.
             *
             * Note that inheritance is defined for individual actions. I.e.
             * even if you insert a group with prefix `prefix,` actions with
             * the same prefix will still be inherited from the parent, unless
             * the group contains an action with the same name.
             *
             * If `group` is %NULL, a previously inserted group for `name` is
             * removed from `widget`.
             * @param name the prefix for actions in @group
             * @param group a `GActionGroup`, or %NULL to remove   the previously inserted group for @name
             */
            insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
            /**
             * Inserts `widget` into the child widget list of `parent`.
             *
             * It will be placed after `previous_sibling,` or at the beginning if
             * `previous_sibling` is %NULL.
             *
             * After calling this function, `gtk_widget_get_prev_sibling(widget)`
             * will return `previous_sibling`.
             *
             * If `parent` is already set as the parent widget of `widget,` this
             * function can also be used to reorder `widget` in the child widget
             * list of `parent`.
             *
             * This API is primarily meant for widget implementations; if you are
             * just using a widget, you *must* use its own API for adding children.
             * @param parent the parent `GtkWidget` to insert @widget into
             * @param previous_sibling the new previous sibling of @widget
             */
            insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
            /**
             * Inserts `widget` into the child widget list of `parent`.
             *
             * It will be placed before `next_sibling,` or at the end if
             * `next_sibling` is %NULL.
             *
             * After calling this function, `gtk_widget_get_next_sibling(widget)`
             * will return `next_sibling`.
             *
             * If `parent` is already set as the parent widget of `widget,` this function
             * can also be used to reorder `widget` in the child widget list of `parent`.
             *
             * This API is primarily meant for widget implementations; if you are
             * just using a widget, you *must* use its own API for adding children.
             * @param parent the parent `GtkWidget` to insert @widget into
             * @param next_sibling the new next sibling of @widget
             */
            insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
            /**
             * Determines whether `widget` is somewhere inside `ancestor,`
             * possibly with intermediate containers.
             * @param ancestor another `GtkWidget`
             * @returns %TRUE if @ancestor contains @widget as a child,   grandchild, great grandchild, etc.
             */
            is_ancestor(ancestor: Gtk.Widget): boolean;
            /**
             * Determines whether `widget` can be drawn to.
             *
             * A widget can be drawn if it is mapped and visible.
             * @returns %TRUE if @widget is drawable, %FALSE otherwise
             */
            is_drawable(): boolean;
            /**
             * Determines if the widget is the focus widget within its
             * toplevel.
             *
             * This does not mean that the [property`Gtk`.Widget:has-focus]
             * property is necessarily set; [property`Gtk`.Widget:has-focus]
             * will only be set if the toplevel widget additionally has the
             * global input focus.
             * @returns %TRUE if the widget is the focus widget.
             */
            is_focus(): boolean;
            /**
             * Returns the widget’s effective sensitivity.
             *
             * This means it is sensitive itself and also its
             * parent widget is sensitive.
             * @returns %TRUE if the widget is effectively sensitive
             */
            is_sensitive(): boolean;
            /**
             * Determines whether the widget and all its parents are marked as
             * visible.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See also [method`Gtk`.Widget.get_visible] and
             * [method`Gtk`.Widget.set_visible].
             * @returns %TRUE if the widget and all its parents are visible
             */
            is_visible(): boolean;
            /**
             * Emits the `::keynav-failed` signal on the widget.
             *
             * This function should be called whenever keyboard navigation
             * within a single widget hits a boundary.
             *
             * The return value of this function should be interpreted
             * in a way similar to the return value of
             * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
             * stay in the widget, the failed keyboard  navigation is OK
             * and/or there is nowhere we can/should move the focus to.
             * When %FALSE is returned, the caller should continue with
             * keyboard navigation outside the widget, e.g. by calling
             * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
             *
             * The default [signal`Gtk`.Widget::keynav-failed] handler returns
             * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
             * For the other values of `GtkDirectionType` it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * [method`Gtk`.Widget.error_bell] to notify the user of the
             * failed keyboard navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * [class`Gtk`.Entry] widgets where the user should be able to navigate
             * the entire row with the cursor keys, as e.g. known from user
             * interfaces that require entering license keys.
             * @param direction direction of focus movement
             * @returns %TRUE if stopping keyboard navigation is fine, %FALSE   if the emitting widget should try to handle the keyboard   navigation attempt in its parent container(s).
             */
            keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Returns the widgets for which this widget is the target of a
             * mnemonic.
             *
             * Typically, these widgets will be labels. See, for example,
             * [method`Gtk`.Label.set_mnemonic_widget].
             *
             * The widgets in the list are not individually referenced.
             * If you want to iterate through the list and perform actions
             * involving callbacks that might destroy the widgets, you
             * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
             * first, and then unref all the widgets afterwards.
             * @returns the list   of mnemonic labels; free this list with g_list_free() when you   are done with it.
             */
            list_mnemonic_labels(): Gtk.Widget[];
            /**
             * Causes a widget to be mapped if it isn’t already.
             *
             * This function is only for use in widget implementations.
             */
            map(): void;
            /**
             * Measures `widget` in the orientation `orientation` and for the given `for_size`.
             *
             * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
             * is 300, this functions will compute the minimum and natural width of `widget`
             * if it is allocated at a height of 300 pixels.
             *
             * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
             * a more details on implementing `GtkWidgetClass.measure()`.
             * @param orientation the orientation to measure
             * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
             */
            measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
            /**
             * Emits the ::mnemonic-activate signal.
             *
             * See [signal`Gtk`.Widget::mnemonic-activate].
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             * @returns %TRUE if the signal has been handled
             */
            mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Returns a `GListModel` to track the children of `widget`.
             *
             * Calling this function will enable extra internal bookkeeping
             * to track children and emit signals on the returned listmodel.
             * It may slow down operations a lot.
             *
             * Applications should try hard to avoid calling this function
             * because of the slowdowns.
             * @returns a `GListModel` tracking @widget's children
             */
            observe_children(): Gio.ListModel;
            /**
             * Returns a `GListModel` to track the [class`Gtk`.EventController]s
             * of `widget`.
             *
             * Calling this function will enable extra internal bookkeeping
             * to track controllers and emit signals on the returned listmodel.
             * It may slow down operations a lot.
             *
             * Applications should try hard to avoid calling this function
             * because of the slowdowns.
             * @returns a `GListModel` tracking @widget's controllers
             */
            observe_controllers(): Gio.ListModel;
            /**
             * Finds the descendant of `widget` closest to the point (`x,` `y)`.
             *
             * The point must be given in widget coordinates, so (0, 0) is assumed
             * to be the top left of `widget'`s content area.
             *
             * Usually widgets will return %NULL if the given coordinate is not
             * contained in `widget` checked via [method`Gtk`.Widget.contains].
             * Otherwise they will recursively try to find a child that does
             * not return %NULL. Widgets are however free to customize their
             * picking algorithm.
             *
             * This function is used on the toplevel to determine the widget
             * below the mouse cursor for purposes of hover highlighting and
             * delivering events.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             * @param flags Flags to influence what is picked
             * @returns The widget descendant at   the given point
             */
            pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null;
            /**
             * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
             * function.
             *
             * Use this function instead of [method`Gtk`.Widget.queue_resize]
             * when the `widget'`s size request didn't change but it wants to
             * reposition its contents.
             *
             * An example user of this function is [method`Gtk`.Widget.set_halign].
             *
             * This function is only for use in widget implementations.
             */
            queue_allocate(): void;
            /**
             * Schedules this widget to be redrawn in the paint phase
             * of the current or the next frame.
             *
             * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
             * implementation will be called.
             */
            queue_draw(): void;
            /**
             * Flags a widget to have its size renegotiated.
             *
             * This should be called when a widget for some reason has a new
             * size request. For example, when you change the text in a
             * [class`Gtk`.Label], the label queues a resize to ensure there’s
             * enough space for the new text.
             *
             * Note that you cannot call gtk_widget_queue_resize() on a widget
             * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
             * virtual method. Calls to gtk_widget_queue_resize() from inside
             * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
             *
             * This function is only for use in widget implementations.
             */
            queue_resize(): void;
            /**
             * Creates the GDK resources associated with a widget.
             *
             * Normally realization happens implicitly; if you show a widget
             * and all its parent containers, then the widget will be realized
             * and mapped automatically.
             *
             * Realizing a widget requires all the widget’s parent widgets to be
             * realized; calling this function realizes the widget’s parents
             * in addition to `widget` itself. If a widget is not yet inside a
             * toplevel window when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * [signal`Gtk`.Widget::realize].
             */
            realize(): void;
            /**
             * Removes `controller` from `widget,` so that it doesn't process
             * events anymore.
             *
             * It should not be used again.
             *
             * Widgets will remove all event controllers automatically when they
             * are destroyed, there is normally no need to call this function.
             * @param controller a `GtkEventController`
             */
            remove_controller(controller: Gtk.EventController): void;
            /**
             * Removes a style from `widget`.
             *
             * After this, the style of `widget` will stop matching for `css_class`.
             * @param css_class The style class to remove from @widget, without   the leading '.' used for notation of style classes
             */
            remove_css_class(css_class: string): void;
            /**
             * Removes a widget from the list of mnemonic labels for this widget.
             *
             * See [method`Gtk`.Widget.list_mnemonic_labels]. The widget must
             * have previously been added to the list with
             * [method`Gtk`.Widget.add_mnemonic_label].
             * @param label a `GtkWidget` that was previously set as a mnemonic   label for @widget with [method@Gtk.Widget.add_mnemonic_label]
             */
            remove_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Removes a tick callback previously registered with
             * gtk_widget_add_tick_callback().
             * @param id an id returned by [method@Gtk.Widget.add_tick_callback]
             */
            remove_tick_callback(id: number): void;
            /**
             * Specifies whether the input focus can enter the widget
             * or any of its children.
             *
             * Applications should set `can_focus` to %FALSE to mark a
             * widget as for pointer/touch use only.
             *
             * Note that having `can_focus` be %TRUE is only one of the
             * necessary conditions for being focusable. A widget must
             * also be sensitive and focusable and not have an ancestor
             * that is marked as not can-focus in order to receive input
             * focus.
             *
             * See [method`Gtk`.Widget.grab_focus] for actually setting
             * the input focus on a widget.
             * @param can_focus whether or not the input focus can enter   the widget or any of its children
             */
            set_can_focus(can_focus: boolean): void;
            /**
             * Sets whether `widget` can be the target of pointer events.
             * @param can_target whether this widget should be able to   receive pointer events
             */
            set_can_target(can_target: boolean): void;
            /**
             * Sets whether `widget` should be mapped along with its parent.
             *
             * The child visibility can be set for widget before it is added
             * to a container with [method`Gtk`.Widget.set_parent], to avoid
             * mapping children unnecessary before immediately unmapping them.
             * However it will be reset to its default state of %TRUE when the
             * widget is removed from a container.
             *
             * Note that changing the child visibility of a widget does not
             * queue a resize on the widget. Most of the time, the size of
             * a widget is computed from all visible children, whether or
             * not they are mapped. If this is not the case, the container
             * can queue a resize itself.
             *
             * This function is only useful for container implementations
             * and should never be called by an application.
             * @param child_visible if %TRUE, @widget should be mapped along   with its parent.
             */
            set_child_visible(child_visible: boolean): void;
            /**
             * Clear all style classes applied to `widget`
             * and replace them with `classes`.
             * @param classes %NULL-terminated list of style classes to apply to @widget.
             */
            set_css_classes(classes: string[]): void;
            /**
             * Sets the cursor to be shown when pointer devices point
             * towards `widget`.
             *
             * If the `cursor` is NULL, `widget` will use the cursor
             * inherited from the parent widget.
             * @param cursor the new cursor
             */
            set_cursor(cursor?: Gdk.Cursor | null): void;
            /**
             * Sets a named cursor to be shown when pointer devices point
             * towards `widget`.
             *
             * This is a utility function that creates a cursor via
             * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
             * with [method`Gtk`.Widget.set_cursor]. See those functions for
             * details.
             *
             * On top of that, this function allows `name` to be %NULL, which
             * will do the same as calling [method`Gtk`.Widget.set_cursor]
             * with a %NULL cursor.
             * @param name The name of the cursor
             */
            set_cursor_from_name(name?: string | null): void;
            /**
             * Sets the reading direction on a particular widget.
             *
             * This direction controls the primary direction for widgets
             * containing text, and also the direction in which the children
             * of a container are packed. The ability to set the direction is
             * present in order so that correct localization into languages with
             * right-to-left reading directions can be done. Generally, applications
             * will let the default reading direction present, except for containers
             * where the containers are arranged in an order that is explicitly
             * visual rather than logical (such as buttons for text justification).
             *
             * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
             * set by [func`Gtk`.Widget.set_default_direction] will be used.
             * @param dir the new direction
             */
            set_direction(dir: Gtk.TextDirection): void;
            /**
             * Set `child` as the current focus child of `widget`.
             *
             * This function is only suitable for widget implementations.
             * If you want a certain widget to get the input focus, call
             * [method`Gtk`.Widget.grab_focus] on it.
             * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
             */
            set_focus_child(child?: Gtk.Widget | null): void;
            /**
             * Sets whether the widget should grab focus when it is clicked
             * with the mouse.
             *
             * Making mouse clicks not grab focus is useful in places like
             * toolbars where you don’t want the keyboard focus removed from
             * the main area of the application.
             * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
             */
            set_focus_on_click(focus_on_click: boolean): void;
            /**
             * Specifies whether `widget` can own the input focus.
             *
             * Widget implementations should set `focusable` to %TRUE in
             * their init() function if they want to receive keyboard input.
             *
             * Note that having `focusable` be %TRUE is only one of the
             * necessary conditions for being focusable. A widget must
             * also be sensitive and can-focus and not have an ancestor
             * that is marked as not can-focus in order to receive input
             * focus.
             *
             * See [method`Gtk`.Widget.grab_focus] for actually setting
             * the input focus on a widget.
             * @param focusable whether or not @widget can own the input focus
             */
            set_focusable(focusable: boolean): void;
            /**
             * Sets the font map to use for Pango rendering.
             *
             * The font map is the object that is used to look up fonts.
             * Setting a custom font map can be useful in special situations,
             * e.g. when you need to add application-specific fonts to the set
             * of available fonts.
             *
             * When not set, the widget will inherit the font map from its parent.
             * @param font_map a `PangoFontMap`, or %NULL to unset any   previously set font map
             */
            set_font_map(font_map?: Pango.FontMap | null): void;
            /**
             * Sets the `cairo_font_options_t` used for Pango rendering
             * in this widget.
             *
             * When not set, the default font options for the `GdkDisplay`
             * will be used.
             * @param options a `cairo_font_options_t`   to unset any previously set default font options
             */
            set_font_options(options?: cairo.FontOptions | null): void;
            /**
             * Sets the horizontal alignment of `widget`.
             * @param align the horizontal alignment
             */
            set_halign(align: Gtk.Align): void;
            /**
             * Sets the `has-tooltip` property on `widget` to `has_tooltip`.
             * @param has_tooltip whether or not @widget has a tooltip.
             */
            set_has_tooltip(has_tooltip: boolean): void;
            /**
             * Sets whether the widget would like any available extra horizontal
             * space.
             *
             * When a user resizes a `GtkWindow`, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Call this function to set the expand flag if you would like your
             * widget to become larger horizontally when the window has extra
             * room.
             *
             * By default, widgets automatically expand if any of their children
             * want to expand. (To see if a widget will automatically expand given
             * its current children and state, call [method`Gtk`.Widget.compute_expand].
             * A container can decide how the expandability of children affects the
             * expansion of the container by overriding the compute_expand virtual
             * method on `GtkWidget`.).
             *
             * Setting hexpand explicitly with this function will override the
             * automatic expand behavior.
             *
             * This function forces the widget to expand or not to expand,
             * regardless of children.  The override occurs because
             * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
             * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
             * value to be used, rather than looking at children and widget state.
             * @param expand whether to expand
             */
            set_hexpand(expand: boolean): void;
            /**
             * Sets whether the hexpand flag will be used.
             *
             * The [property`Gtk`.Widget:hexpand-set] property will be set
             * automatically when you call [method`Gtk`.Widget.set_hexpand]
             * to set hexpand, so the most likely reason to use this function
             * would be to unset an explicit expand flag.
             *
             * If hexpand is set, then it overrides any computed
             * expand value based on child widgets. If hexpand is not
             * set, then the expand value depends on whether any
             * children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @param set value for hexpand-set property
             */
            set_hexpand_set(set: boolean): void;
            /**
             * Sets the layout manager delegate instance that provides an
             * implementation for measuring and allocating the children of `widget`.
             * @param layout_manager a `GtkLayoutManager`
             */
            set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
            /**
             * Sets the bottom margin of `widget`.
             * @param margin the bottom margin
             */
            set_margin_bottom(margin: number): void;
            /**
             * Sets the end margin of `widget`.
             * @param margin the end margin
             */
            set_margin_end(margin: number): void;
            /**
             * Sets the start margin of `widget`.
             * @param margin the start margin
             */
            set_margin_start(margin: number): void;
            /**
             * Sets the top margin of `widget`.
             * @param margin the top margin
             */
            set_margin_top(margin: number): void;
            /**
             * Sets a widgets name.
             *
             * Setting a name allows you to refer to the widget from a
             * CSS file. You can apply a style to widgets with a particular name
             * in the CSS file. See the documentation for the CSS syntax (on the
             * same page as the docs for [class`Gtk`.StyleContext].
             *
             * Note that the CSS syntax has certain special characters to delimit
             * and represent elements in a selector (period, #, >, *...), so using
             * these will make your widget impossible to match by name. Any combination
             * of alphanumeric symbols, dashes and underscores will suffice.
             * @param name name for the widget
             */
            set_name(name: string): void;
            /**
             * Request the `widget` to be rendered partially transparent.
             *
             * An opacity of 0 is fully transparent and an opacity of 1
             * is fully opaque.
             *
             * Opacity works on both toplevel widgets and child widgets, although
             * there are some limitations: For toplevel widgets, applying opacity
             * depends on the capabilities of the windowing system. On X11, this
             * has any effect only on X displays with a compositing manager,
             * see gdk_display_is_composited(). On Windows and Wayland it should
             * always work, although setting a window’s opacity after the window
             * has been shown may cause some flicker.
             *
             * Note that the opacity is inherited through inclusion — if you set
             * a toplevel to be partially translucent, all of its content will
             * appear translucent, since it is ultimatively rendered on that
             * toplevel. The opacity value itself is not inherited by child
             * widgets (since that would make widgets deeper in the hierarchy
             * progressively more translucent). As a consequence, [class`Gtk`.Popover]s
             * and other [iface`Gtk`.Native] widgets with their own surface will use their
             * own opacity value, and thus by default appear non-translucent,
             * even if they are attached to a toplevel that is translucent.
             * @param opacity desired opacity, between 0 and 1
             */
            set_opacity(opacity: number): void;
            /**
             * Sets how `widget` treats content that is drawn outside the
             * widget's content area.
             *
             * See the definition of [enum`Gtk`.Overflow] for details.
             *
             * This setting is provided for widget implementations and
             * should not be used by application code.
             *
             * The default value is %GTK_OVERFLOW_VISIBLE.
             * @param overflow desired overflow
             */
            set_overflow(overflow: Gtk.Overflow): void;
            /**
             * Sets `parent` as the parent widget of `widget`.
             *
             * This takes care of details such as updating the state and style
             * of the child to reflect its new location and resizing the parent.
             * The opposite function is [method`Gtk`.Widget.unparent].
             *
             * This function is useful only when implementing subclasses of
             * `GtkWidget`.
             * @param parent parent widget
             */
            set_parent(parent: Gtk.Widget): void;
            /**
             * Specifies whether `widget` will be treated as the default
             * widget within its toplevel when it has the focus, even if
             * another widget is the default.
             * @param receives_default whether or not @widget can be a default widget.
             */
            set_receives_default(receives_default: boolean): void;
            /**
             * Sets the sensitivity of a widget.
             *
             * A widget is sensitive if the user can interact with it.
             * Insensitive widgets are “grayed out” and the user can’t
             * interact with them. Insensitive widgets are known as
             * “inactive”, “disabled”, or “ghosted” in some other toolkits.
             * @param sensitive %TRUE to make the widget sensitive
             */
            set_sensitive(sensitive: boolean): void;
            /**
             * Sets the minimum size of a widget.
             *
             * That is, the widget’s size request will be at least `width`
             * by `height`. You can use this function to force a widget to
             * be larger than it normally would be.
             *
             * In most cases, [method`Gtk`.Window.set_default_size] is a better
             * choice for toplevel windows than this function; setting the default
             * size will still allow users to shrink the window. Setting the size
             * request will force them to leave the window at least as large as
             * the size request.
             *
             * Note the inherent danger of setting any fixed size - themes,
             * translations into other languages, different fonts, and user action
             * can all change the appropriate size for a given widget. So, it's
             * basically impossible to hardcode a size that will always be
             * correct.
             *
             * The size request of a widget is the smallest size a widget can
             * accept while still functioning well and drawing itself correctly.
             * However in some strange cases a widget may be allocated less than
             * its requested size, and in many cases a widget may be allocated more
             * space than it requested.
             *
             * If the size request in a given direction is -1 (unset), then
             * the “natural” size request of the widget will be used instead.
             *
             * The size request set here does not include any margin from the
             * properties
             * [property`Gtk`.Widget:margin-start],
             * [property`Gtk`.Widget:margin-end],
             * [property`Gtk`.Widget:margin-top], and
             * [property`Gtk`.Widget:margin-bottom], but it does include pretty
             * much all other padding or border properties set by any subclass
             * of `GtkWidget`.
             * @param width width @widget should request, or -1 to unset
             * @param height height @widget should request, or -1 to unset
             */
            set_size_request(width: number, height: number): void;
            /**
             * Turns on flag values in the current widget state.
             *
             * Typical widget states are insensitive, prelighted, etc.
             *
             * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
             * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set
             * the widget's direction, use [method`Gtk`.Widget.set_direction].
             *
             * This function is for use in widget implementations.
             * @param flags State flags to turn on
             * @param clear Whether to clear state before turning on @flags
             */
            set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
            /**
             * Sets `markup` as the contents of the tooltip, which is marked
             * up with Pango markup.
             *
             * This function will take care of setting the
             * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
             * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
             *
             * See also [method`Gtk`.Tooltip.set_markup].
             * @param markup the contents of the tooltip for @widget
             */
            set_tooltip_markup(markup?: string | null): void;
            /**
             * Sets `text` as the contents of the tooltip.
             *
             * If `text` contains any markup, it will be escaped.
             *
             * This function will take care of setting
             * [property`Gtk`.Widget:has-tooltip] as a side effect,
             * and of the default handler for the
             * [signal`Gtk`.Widget::query-tooltip] signal.
             *
             * See also [method`Gtk`.Tooltip.set_text].
             * @param text the contents of the tooltip for @widget
             */
            set_tooltip_text(text?: string | null): void;
            /**
             * Sets the vertical alignment of `widget`.
             * @param align the vertical alignment
             */
            set_valign(align: Gtk.Align): void;
            /**
             * Sets whether the widget would like any available extra vertical
             * space.
             *
             * See [method`Gtk`.Widget.set_hexpand] for more detail.
             * @param expand whether to expand
             */
            set_vexpand(expand: boolean): void;
            /**
             * Sets whether the vexpand flag will be used.
             *
             * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
             * @param set value for vexpand-set property
             */
            set_vexpand_set(set: boolean): void;
            /**
             * Sets the visibility state of `widget`.
             *
             * Note that setting this to %TRUE doesn’t mean the widget is
             * actually viewable, see [method`Gtk`.Widget.get_visible].
             * @param visible whether the widget should be shown or not
             */
            set_visible(visible: boolean): void;
            /**
             * Returns whether `widget` should contribute to
             * the measuring and allocation of its parent.
             *
             * This is %FALSE for invisible children, but also
             * for children that have their own surface.
             * @returns %TRUE if child should be included in   measuring and allocating
             */
            should_layout(): boolean;
            /**
             * Flags a widget to be displayed.
             *
             * Any widget that isn’t shown will not appear on the screen.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            show(): void;
            /**
             * Allocates widget with a transformation that translates
             * the origin to the position in `allocation`.
             *
             * This is a simple form of [method`Gtk`.Widget.allocate].
             * @param allocation position and size to be allocated to @widget
             * @param baseline The baseline of the child, or -1
             */
            size_allocate(allocation: Gtk.Allocation, baseline: number): void;
            /**
             * Snapshot the a child of `widget`.
             *
             * When a widget receives a call to the snapshot function,
             * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
             * to all children. This function provides a convenient way
             * of doing this. A widget, when it receives a call to its
             * [vfunc`Gtk`.Widget.snapshot] function, calls
             * gtk_widget_snapshot_child() once for each child, passing in
             * the `snapshot` the widget received.
             *
             * gtk_widget_snapshot_child() takes care of translating the origin of
             * `snapshot,` and deciding whether the child needs to be snapshot.
             *
             * This function does nothing for children that implement `GtkNative`.
             * @param child a child of @widget
             * @param snapshot `GtkSnapshot` as passed to the widget. In particular, no   calls to gtk_snapshot_translate() or other transform calls should   have been made.
             */
            snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
            /**
             * Translate coordinates relative to `src_widget’`s allocation
             * to coordinates relative to `dest_widget’`s allocations.
             *
             * In order to perform this operation, both widget must share
             * a common ancestor.
             * @param dest_widget a `GtkWidget`
             * @param src_x X position relative to @src_widget
             * @param src_y Y position relative to @src_widget
             * @returns %FALSE if @src_widget and @dest_widget have no common   ancestor. In this case, 0 is stored in *@dest_x and *@dest_y.   Otherwise %TRUE.
             */
            translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
            /**
             * Triggers a tooltip query on the display where the toplevel
             * of `widget` is located.
             */
            trigger_tooltip_query(): void;
            /**
             * Causes a widget to be unmapped if it’s currently mapped.
             *
             * This function is only for use in widget implementations.
             */
            unmap(): void;
            /**
             * Dissociate `widget` from its parent.
             *
             * This function is only for use in widget implementations,
             * typically in dispose.
             */
            unparent(): void;
            /**
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget).
             *
             * This function is only useful in widget implementations.
             */
            unrealize(): void;
            /**
             * Turns off flag values for the current widget state.
             *
             * See [method`Gtk`.Widget.set_state_flags].
             *
             * This function is for use in widget implementations.
             * @param flags State flags to turn off
             */
            unset_state_flags(flags: Gtk.StateFlags): void;
            /**
             * Computes whether a container should give this
             *   widget extra space when possible.
             * @param hexpand_p
             * @param vexpand_p
             */
            vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
            /**
             * Tests if the point at (`x,` `y)` is contained in `widget`.
             *
             * The coordinates for (`x,` `y)` must be in widget coordinates, so
             * (0, 0) is assumed to be the top left of `widget'`s content area.
             * @param x X coordinate to test, relative to @widget's origin
             * @param y Y coordinate to test, relative to @widget's origin
             */
            vfunc_contains(x: number, y: number): boolean;
            /**
             * Vfunc called when the CSS used by widget was changed. Widgets
             *   should then discard their caches that depend on CSS and queue resizes or
             *   redraws accordingly. The default implementation will take care of this for
             *   all the default CSS properties, so implementations must chain up.
             * @param change
             */
            vfunc_css_changed(change: Gtk.CssStyleChange): void;
            /**
             * Signal emitted when the text direction of a
             *   widget changes.
             * @param previous_direction
             */
            vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
            /**
             * Vfunc for gtk_widget_child_focus()
             * @param direction
             */
            vfunc_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * Single-child widgets generally propagate the preference of
             * their child, more complex widgets need to request something
             * either in context of their children or in context of their
             * allocation capabilities.
             */
            vfunc_get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
             *
             * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
             * implementation cannot transfer the focus to a descendant of `widget`
             * that is focusable, it will not take focus and %FALSE will be returned.
             *
             * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
             * is allowed, should not have an effect, and return %TRUE.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show().
             *
             * This is causing the widget to be hidden (invisible to the user).
             */
            vfunc_hide(): void;
            /**
             * Emits the `::keynav-failed` signal on the widget.
             *
             * This function should be called whenever keyboard navigation
             * within a single widget hits a boundary.
             *
             * The return value of this function should be interpreted
             * in a way similar to the return value of
             * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
             * stay in the widget, the failed keyboard  navigation is OK
             * and/or there is nowhere we can/should move the focus to.
             * When %FALSE is returned, the caller should continue with
             * keyboard navigation outside the widget, e.g. by calling
             * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
             *
             * The default [signal`Gtk`.Widget::keynav-failed] handler returns
             * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
             * For the other values of `GtkDirectionType` it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * [method`Gtk`.Widget.error_bell] to notify the user of the
             * failed keyboard navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * [class`Gtk`.Entry] widgets where the user should be able to navigate
             * the entire row with the cursor keys, as e.g. known from user
             * interfaces that require entering license keys.
             * @param direction direction of focus movement
             */
            vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Causes a widget to be mapped if it isn’t already.
             *
             * This function is only for use in widget implementations.
             */
            vfunc_map(): void;
            /**
             * Measures `widget` in the orientation `orientation` and for the given `for_size`.
             *
             * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
             * is 300, this functions will compute the minimum and natural width of `widget`
             * if it is allocated at a height of 300 pixels.
             *
             * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
             * a more details on implementing `GtkWidgetClass.measure()`.
             * @param orientation the orientation to measure
             * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
             */
            vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
            /**
             * Emits the ::mnemonic-activate signal.
             *
             * See [signal`Gtk`.Widget::mnemonic-activate].
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             */
            vfunc_mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Signal emitted when a change of focus is requested
             * @param direction
             */
            vfunc_move_focus(direction: Gtk.DirectionType): void;
            /**
             * Signal emitted when “has-tooltip” is %TRUE and the
             *   hover timeout has expired with the cursor hovering “above”
             *   widget; or emitted when widget got focus in keyboard mode.
             * @param x
             * @param y
             * @param keyboard_tooltip
             * @param tooltip
             */
            vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
            /**
             * Creates the GDK resources associated with a widget.
             *
             * Normally realization happens implicitly; if you show a widget
             * and all its parent containers, then the widget will be realized
             * and mapped automatically.
             *
             * Realizing a widget requires all the widget’s parent widgets to be
             * realized; calling this function realizes the widget’s parents
             * in addition to `widget` itself. If a widget is not yet inside a
             * toplevel window when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * [signal`Gtk`.Widget::realize].
             */
            vfunc_realize(): void;
            /**
             * Called when the widget gets added to a `GtkRoot` widget. Must
             *   chain up
             */
            vfunc_root(): void;
            /**
             * Set `child` as the current focus child of `widget`.
             *
             * This function is only suitable for widget implementations.
             * If you want a certain widget to get the input focus, call
             * [method`Gtk`.Widget.grab_focus] on it.
             * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
             */
            vfunc_set_focus_child(child?: Gtk.Widget | null): void;
            /**
             * Flags a widget to be displayed.
             *
             * Any widget that isn’t shown will not appear on the screen.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            vfunc_show(): void;
            /**
             * Called to set the allocation, if the widget does
             *   not have a layout manager.
             * @param width
             * @param height
             * @param baseline
             */
            vfunc_size_allocate(width: number, height: number, baseline: number): void;
            /**
             * Vfunc called when a new snapshot of the widget has to be taken.
             * @param snapshot
             */
            vfunc_snapshot(snapshot: Gtk.Snapshot): void;
            /**
             * Signal emitted when the widget state changes,
             *   see gtk_widget_get_state_flags().
             * @param previous_state_flags
             */
            vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
            /**
             * Emitted when a system setting was changed. Must chain up.
             * @param settings
             */
            vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
            /**
             * Causes a widget to be unmapped if it’s currently mapped.
             *
             * This function is only for use in widget implementations.
             */
            vfunc_unmap(): void;
            /**
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget).
             *
             * This function is only useful in widget implementations.
             */
            vfunc_unrealize(): void;
            /**
             * Called when the widget is about to be removed from its
             *   `GtkRoot` widget. Must chain up
             */
            vfunc_unroot(): void;
        }

        module Tag {
            // Constructor properties interface

            interface ConstructorProps extends Gtk.TextTag.ConstructorProps {
                draw_spaces: boolean;
                drawSpaces: boolean;
                draw_spaces_set: boolean;
                drawSpacesSet: boolean;
            }
        }

        /**
         * A tag that can be applied to text in a [class`Buffer]`.
         *
         * `GtkSourceTag` is a subclass of [class`Gtk`.TextTag] that adds properties useful for
         * the GtkSourceView library.
         *
         * If, for a certain tag, [class`Gtk`.TextTag] is sufficient, it's better that you create
         * a [class`Gtk`.TextTag], not a [class`Tag]`.
         */
        class Tag extends Gtk.TextTag {
            static $gtype: GObject.GType<Tag>;

            // Properties

            /**
             * Whether to draw white spaces.
             *
             * This property takes precedence over the value defined by the [class`SpaceDrawer]`'s
             * [property`SpaceDrawer:`matrix] property (only where the tag is applied).
             *
             * Setting this property also changes [property`Tag:`draw-spaces-set] to
             * %TRUE.
             */
            get draw_spaces(): boolean;
            set draw_spaces(val: boolean);
            /**
             * Whether to draw white spaces.
             *
             * This property takes precedence over the value defined by the [class`SpaceDrawer]`'s
             * [property`SpaceDrawer:`matrix] property (only where the tag is applied).
             *
             * Setting this property also changes [property`Tag:`draw-spaces-set] to
             * %TRUE.
             */
            get drawSpaces(): boolean;
            set drawSpaces(val: boolean);
            /**
             * Whether the [property`Tag:`draw-spaces] property is set and must be
             * taken into account.
             */
            get draw_spaces_set(): boolean;
            set draw_spaces_set(val: boolean);
            /**
             * Whether the [property`Tag:`draw-spaces] property is set and must be
             * taken into account.
             */
            get drawSpacesSet(): boolean;
            set drawSpacesSet(val: boolean);

            // Constructors

            constructor(properties?: Partial<Tag.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name?: string | null): Tag;
        }

        module View {
            // Signal callback interfaces

            interface ChangeCase {
                (case_type: ChangeCaseType): void;
            }

            interface ChangeNumber {
                (count: number): void;
            }

            interface JoinLines {
                (): void;
            }

            interface LineMarkActivated {
                (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void;
            }

            interface MoveLines {
                (down: boolean): void;
            }

            interface MoveToMatchingBracket {
                (extend_selection: boolean): void;
            }

            interface MoveWords {
                (count: number): void;
            }

            interface PushSnippet {
                (snippet: Snippet, location: Gtk.TextIter): void;
            }

            interface ShowCompletion {
                (): void;
            }

            interface SmartHomeEnd {
                (iter: Gtk.TextIter, count: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.TextView.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.AccessibleText.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                auto_indent: boolean;
                autoIndent: boolean;
                background_pattern: BackgroundPatternType;
                backgroundPattern: BackgroundPatternType;
                completion: Completion;
                enable_snippets: boolean;
                enableSnippets: boolean;
                highlight_current_line: boolean;
                highlightCurrentLine: boolean;
                indent_on_tab: boolean;
                indentOnTab: boolean;
                indent_width: number;
                indentWidth: number;
                indenter: Indenter;
                insert_spaces_instead_of_tabs: boolean;
                insertSpacesInsteadOfTabs: boolean;
                right_margin_position: number;
                rightMarginPosition: number;
                show_line_marks: boolean;
                showLineMarks: boolean;
                show_line_numbers: boolean;
                showLineNumbers: boolean;
                show_right_margin: boolean;
                showRightMargin: boolean;
                smart_backspace: boolean;
                smartBackspace: boolean;
                smart_home_end: SmartHomeEndType;
                smartHomeEnd: SmartHomeEndType;
                space_drawer: SpaceDrawer;
                spaceDrawer: SpaceDrawer;
                tab_width: number;
                tabWidth: number;
            }
        }

        /**
         * Subclass of [class`Gtk`.TextView].
         *
         * `GtkSourceView` is the main class of the GtkSourceView library.
         * Use a [class`Buffer]` to display text with a `GtkSourceView`.
         *
         * This class provides:
         *
         *  - Show the line numbers;
         *  - Show a right margin;
         *  - Highlight the current line;
         *  - Indentation settings;
         *  - Configuration for the Home and End keyboard keys;
         *  - Configure and show line marks;
         *  - And a few other things.
         *
         * An easy way to test all these features is to use the test-widget mini-program
         * provided in the GtkSourceView repository, in the tests/ directory.
         *
         * # GtkSourceView as GtkBuildable
         *
         * The GtkSourceView implementation of the [iface`Gtk`.Buildable] interface exposes the
         * [property`View:`completion] object with the internal-child "completion".
         *
         * An example of a UI definition fragment with GtkSourceView:
         * ```xml
         * <object class="GtkSourceView" id="source_view">
         *   <property name="tab-width">4</property>
         *   <property name="auto-indent">True</property>
         *   <child internal-child="completion">
         *     <object class="GtkSourceCompletion">
         *       <property name="select-on-show">False</property>
         *     </object>
         *   </child>
         * </object>
         * ```
         *
         * # Changing the Font
         *
         * Gtk CSS provides the best way to change the font for a `GtkSourceView` in a
         * manner that allows for components like [class`Map]` to scale the desired
         * font.
         *
         * ```c
         * GtkCssProvider *provider = gtk_css_provider_new ();
         * gtk_css_provider_load_from_data (provider,
         *                                  "textview { font-family: Monospace; font-size: 8pt; }",
         *                                  -1,
         *                                  NULL);
         * gtk_style_context_add_provider (gtk_widget_get_style_context (view),
         *                                 GTK_STYLE_PROVIDER (provider),
         *                                 GTK_STYLE_PROVIDER_PRIORITY_APPLICATION);
         * g_object_unref (provider);
         * ```
         *
         * If you need to adjust the font or size of font within a portion of the
         * document only, you should use a [class`Gtk`.TextTag] with the [property`Gtk`.TextTag:family] or
         * [property`Gtk`.TextTag:scale] set so that the font size may be scaled relative to
         * the default font set in CSS.
         */
        class View
            extends Gtk.TextView
            implements Gtk.Accessible, Gtk.AccessibleText, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable
        {
            static $gtype: GObject.GType<View>;

            // Properties

            get auto_indent(): boolean;
            set auto_indent(val: boolean);
            get autoIndent(): boolean;
            set autoIndent(val: boolean);
            /**
             * Draw a specific background pattern on the view.
             */
            get background_pattern(): BackgroundPatternType;
            set background_pattern(val: BackgroundPatternType);
            /**
             * Draw a specific background pattern on the view.
             */
            get backgroundPattern(): BackgroundPatternType;
            set backgroundPattern(val: BackgroundPatternType);
            /**
             * The completion object associated with the view
             */
            get completion(): Completion;
            /**
             * The property denotes if snippets should be
             * expanded when the user presses Tab after having typed a word
             * matching the snippets found in [class`SnippetManager]`.
             *
             * The user may tab through focus-positions of the snippet if any
             * are available by pressing Tab repeatedly until the desired focus
             * position is selected.
             */
            get enable_snippets(): boolean;
            set enable_snippets(val: boolean);
            /**
             * The property denotes if snippets should be
             * expanded when the user presses Tab after having typed a word
             * matching the snippets found in [class`SnippetManager]`.
             *
             * The user may tab through focus-positions of the snippet if any
             * are available by pressing Tab repeatedly until the desired focus
             * position is selected.
             */
            get enableSnippets(): boolean;
            set enableSnippets(val: boolean);
            get highlight_current_line(): boolean;
            set highlight_current_line(val: boolean);
            get highlightCurrentLine(): boolean;
            set highlightCurrentLine(val: boolean);
            get indent_on_tab(): boolean;
            set indent_on_tab(val: boolean);
            get indentOnTab(): boolean;
            set indentOnTab(val: boolean);
            /**
             * Width of an indentation step expressed in number of spaces.
             */
            get indent_width(): number;
            set indent_width(val: number);
            /**
             * Width of an indentation step expressed in number of spaces.
             */
            get indentWidth(): number;
            set indentWidth(val: number);
            /**
             * The property is a [iface`Indenter]` to use to indent
             * as the user types into the [class`View]`.
             */
            get indenter(): Indenter;
            set indenter(val: Indenter);
            get insert_spaces_instead_of_tabs(): boolean;
            set insert_spaces_instead_of_tabs(val: boolean);
            get insertSpacesInsteadOfTabs(): boolean;
            set insertSpacesInsteadOfTabs(val: boolean);
            /**
             * Position of the right margin.
             */
            get right_margin_position(): number;
            set right_margin_position(val: number);
            /**
             * Position of the right margin.
             */
            get rightMarginPosition(): number;
            set rightMarginPosition(val: number);
            /**
             * Whether to display line mark pixbufs
             */
            get show_line_marks(): boolean;
            set show_line_marks(val: boolean);
            /**
             * Whether to display line mark pixbufs
             */
            get showLineMarks(): boolean;
            set showLineMarks(val: boolean);
            /**
             * Whether to display line numbers
             */
            get show_line_numbers(): boolean;
            set show_line_numbers(val: boolean);
            /**
             * Whether to display line numbers
             */
            get showLineNumbers(): boolean;
            set showLineNumbers(val: boolean);
            /**
             * Whether to display the right margin.
             */
            get show_right_margin(): boolean;
            set show_right_margin(val: boolean);
            /**
             * Whether to display the right margin.
             */
            get showRightMargin(): boolean;
            set showRightMargin(val: boolean);
            /**
             * Whether smart Backspace should be used.
             */
            get smart_backspace(): boolean;
            set smart_backspace(val: boolean);
            /**
             * Whether smart Backspace should be used.
             */
            get smartBackspace(): boolean;
            set smartBackspace(val: boolean);
            /**
             * Set the behavior of the HOME and END keys.
             */
            get smart_home_end(): SmartHomeEndType;
            set smart_home_end(val: SmartHomeEndType);
            /**
             * Set the behavior of the HOME and END keys.
             */
            get smartHomeEnd(): SmartHomeEndType;
            set smartHomeEnd(val: SmartHomeEndType);
            /**
             * The [class`SpaceDrawer]` object associated with the view.4
             */
            get space_drawer(): SpaceDrawer;
            /**
             * The [class`SpaceDrawer]` object associated with the view.4
             */
            get spaceDrawer(): SpaceDrawer;
            /**
             * Width of a tab character expressed in number of spaces.
             */
            get tab_width(): number;
            set tab_width(val: number);
            /**
             * Width of a tab character expressed in number of spaces.
             */
            get tabWidth(): number;
            set tabWidth(val: number);

            // Constructors

            constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): View;

            static new_with_buffer(buffer: Buffer): View;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'change-case', callback: (_source: this, case_type: ChangeCaseType) => void): number;
            connect_after(signal: 'change-case', callback: (_source: this, case_type: ChangeCaseType) => void): number;
            emit(signal: 'change-case', case_type: ChangeCaseType): void;
            connect(signal: 'change-number', callback: (_source: this, count: number) => void): number;
            connect_after(signal: 'change-number', callback: (_source: this, count: number) => void): number;
            emit(signal: 'change-number', count: number): void;
            connect(signal: 'join-lines', callback: (_source: this) => void): number;
            connect_after(signal: 'join-lines', callback: (_source: this) => void): number;
            emit(signal: 'join-lines'): void;
            connect(
                signal: 'line-mark-activated',
                callback: (
                    _source: this,
                    iter: Gtk.TextIter,
                    button: number,
                    state: Gdk.ModifierType,
                    n_presses: number,
                ) => void,
            ): number;
            connect_after(
                signal: 'line-mark-activated',
                callback: (
                    _source: this,
                    iter: Gtk.TextIter,
                    button: number,
                    state: Gdk.ModifierType,
                    n_presses: number,
                ) => void,
            ): number;
            emit(
                signal: 'line-mark-activated',
                iter: Gtk.TextIter,
                button: number,
                state: Gdk.ModifierType,
                n_presses: number,
            ): void;
            connect(signal: 'move-lines', callback: (_source: this, down: boolean) => void): number;
            connect_after(signal: 'move-lines', callback: (_source: this, down: boolean) => void): number;
            emit(signal: 'move-lines', down: boolean): void;
            connect(
                signal: 'move-to-matching-bracket',
                callback: (_source: this, extend_selection: boolean) => void,
            ): number;
            connect_after(
                signal: 'move-to-matching-bracket',
                callback: (_source: this, extend_selection: boolean) => void,
            ): number;
            emit(signal: 'move-to-matching-bracket', extend_selection: boolean): void;
            connect(signal: 'move-words', callback: (_source: this, count: number) => void): number;
            connect_after(signal: 'move-words', callback: (_source: this, count: number) => void): number;
            emit(signal: 'move-words', count: number): void;
            connect(
                signal: 'push-snippet',
                callback: (_source: this, snippet: Snippet, location: Gtk.TextIter) => void,
            ): number;
            connect_after(
                signal: 'push-snippet',
                callback: (_source: this, snippet: Snippet, location: Gtk.TextIter) => void,
            ): number;
            emit(signal: 'push-snippet', snippet: Snippet, location: Gtk.TextIter): void;
            connect(signal: 'show-completion', callback: (_source: this) => void): number;
            connect_after(signal: 'show-completion', callback: (_source: this) => void): number;
            emit(signal: 'show-completion'): void;
            connect(
                signal: 'smart-home-end',
                callback: (_source: this, iter: Gtk.TextIter, count: number) => void,
            ): number;
            connect_after(
                signal: 'smart-home-end',
                callback: (_source: this, iter: Gtk.TextIter, count: number) => void,
            ): number;
            emit(signal: 'smart-home-end', iter: Gtk.TextIter, count: number): void;

            // Virtual methods

            vfunc_line_mark_activated(
                iter: Gtk.TextIter,
                button: number,
                state: Gdk.ModifierType,
                n_presses: number,
            ): void;
            vfunc_move_lines(down: boolean): void;
            vfunc_move_words(step: number): void;
            /**
             * Inserts a new snippet at `location`
             *
             * If another snippet was already active, it will be paused and the new
             * snippet will become active. Once the focus positions of `snippet` have
             * been exhausted, editing will return to the previous snippet.
             * @param snippet a #GtkSourceSnippet
             * @param location a #GtkTextIter or %NULL for the cursor position
             */
            vfunc_push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void;
            vfunc_show_completion(): void;

            // Methods

            /**
             * Returns whether auto-indentation of text is enabled.
             * @returns %TRUE if auto indentation is enabled.
             */
            get_auto_indent(): boolean;
            /**
             * Returns the #GtkSourceBackgroundPatternType specifying if and how
             * the background pattern should be displayed for this `view`.
             * @returns the #GtkSourceBackgroundPatternType.
             */
            get_background_pattern(): BackgroundPatternType;
            /**
             * Gets the [class`Completion]` associated with `view`.
             *
             * The returned object is guaranteed to be the same for the lifetime of `view`.
             * Each `GtkSourceView` object has a different [class`Completion]`.
             * @returns the #GtkSourceCompletion associated with @view.
             */
            get_completion(): Completion;
            /**
             * Gets the [property`View:`enable-snippets] property.
             *
             * If %TRUE, matching snippets found in the [class`SnippetManager]`
             * may be expanded when the user presses Tab after a word in the [class`View]`.
             * @returns %TRUE if enabled
             */
            get_enable_snippets(): boolean;
            /**
             * Returns the [class`Gutter]` object associated with `window_type` for `view`.
             *
             * Only %GTK_TEXT_WINDOW_LEFT and %GTK_TEXT_WINDOW_RIGHT are supported,
             * respectively corresponding to the left and right gutter. The line numbers
             * and mark category icons are rendered in the left gutter.
             * @param window_type the gutter window type.
             * @returns the #GtkSourceGutter.
             */
            get_gutter(window_type: Gtk.TextWindowType): Gutter;
            // Conflicted with Gtk.TextView.get_gutter
            get_gutter(...args: never[]): any;
            /**
             * Returns whether the current line is highlighted.
             * @returns %TRUE if the current line is highlighted.
             */
            get_highlight_current_line(): boolean;
            /**
             * Gets the [class`Hover]` associated with `view`.
             *
             * The returned object is guaranteed to be the same for the lifetime of `view`.
             * Each [class`View]` object has a different [class`Hover]`.
             * @returns a #GtkSourceHover associated with @view.
             */
            get_hover(): Hover;
            /**
             * Returns whether when the tab key is pressed the current selection
             * should get indented instead of replaced with the `\t` character.
             * @returns %TRUE if the selection is indented when tab is pressed.
             */
            get_indent_on_tab(): boolean;
            /**
             * Returns the number of spaces to use for each step of indent.
             *
             * See [method`View`.set_indent_width] for details.
             * @returns indent width.
             */
            get_indent_width(): number;
            /**
             * Gets the [property`View:`indenter] property.
             * @returns a #GtkSourceIndenter or %NULL
             */
            get_indenter(): Indenter | null;
            /**
             * Returns whether when inserting a tabulator character it should
             * be replaced by a group of space characters.
             * @returns %TRUE if spaces are inserted instead of tabs.
             */
            get_insert_spaces_instead_of_tabs(): boolean;
            /**
             * Gets attributes and priority for the `category`.
             * @param category the category.
             * @param priority place where priority of the category will be stored.
             * @returns #GtkSourceMarkAttributes for the @category. The object belongs to @view, so it must not be unreffed.
             */
            get_mark_attributes(category: string, priority: number): MarkAttributes;
            /**
             * Gets the position of the right margin in the given `view`.
             * @returns the position of the right margin.
             */
            get_right_margin_position(): number;
            /**
             * Returns whether line marks are displayed beside the text.
             * @returns %TRUE if the line marks are displayed.
             */
            get_show_line_marks(): boolean;
            /**
             * Returns whether line numbers are displayed beside the text.
             * @returns %TRUE if the line numbers are displayed.
             */
            get_show_line_numbers(): boolean;
            /**
             * Returns whether a right margin is displayed.
             * @returns %TRUE if the right margin is shown.
             */
            get_show_right_margin(): boolean;
            /**
             * Returns %TRUE if pressing the Backspace key will try to delete spaces
             * up to the previous tab stop.
             * @returns %TRUE if smart Backspace handling is enabled.
             */
            get_smart_backspace(): boolean;
            /**
             * Returns a [enum`SmartHomeEndType]` end value specifying
             * how the cursor will move when HOME and END keys are pressed.
             * @returns a #GtkSourceSmartHomeEndType value.
             */
            get_smart_home_end(): SmartHomeEndType;
            /**
             * Gets the [class`SpaceDrawer]` associated with `view`.
             *
             * The returned object is guaranteed to be the same for the lifetime of `view`.
             * Each [class`View]` object has a different [class`SpaceDrawer]`.
             * @returns the #GtkSourceSpaceDrawer associated with @view.
             */
            get_space_drawer(): SpaceDrawer;
            /**
             * Returns the width of tabulation in characters.
             * @returns width of tab.
             */
            get_tab_width(): number;
            /**
             * Determines the visual column at `iter` taking into consideration the
             * [property`View:`tab-width] of `view`.
             * @param iter a position in @view.
             * @returns the visual column at @iter.
             */
            get_visual_column(iter: Gtk.TextIter): number;
            /**
             * Inserts one indentation level at the beginning of the specified lines. The
             * empty lines are not indented.
             * @param start #GtkTextIter of the first line to indent
             * @param end #GtkTextIter of the last line to indent
             */
            indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * Inserts a new snippet at `location`
             *
             * If another snippet was already active, it will be paused and the new
             * snippet will become active. Once the focus positions of `snippet` have
             * been exhausted, editing will return to the previous snippet.
             * @param snippet a #GtkSourceSnippet
             * @param location a #GtkTextIter or %NULL for the cursor position
             */
            push_snippet(snippet: Snippet, location?: Gtk.TextIter | null): void;
            /**
             * If %TRUE auto-indentation of text is enabled.
             *
             * When Enter is pressed to create a new line, the auto-indentation inserts the
             * same indentation as the previous line. This is **not** a
             * "smart indentation" where an indentation level is added or removed depending
             * on the context.
             * @param enable whether to enable auto indentation.
             */
            set_auto_indent(enable: boolean): void;
            /**
             * Set if and how the background pattern should be displayed.
             * @param background_pattern the #GtkSourceBackgroundPatternType.
             */
            set_background_pattern(background_pattern: BackgroundPatternType): void;
            /**
             * Sets the [property`View:`enable-snippets] property.
             *
             * If `enable_snippets` is %TRUE, matching snippets found in the
             * [class`SnippetManager]` may be expanded when the user presses
             * Tab after a word in the [class`View]`.
             * @param enable_snippets if snippets should be enabled
             */
            set_enable_snippets(enable_snippets: boolean): void;
            /**
             * If `highlight` is %TRUE the current line will be highlighted.
             * @param highlight whether to highlight the current line.
             */
            set_highlight_current_line(highlight: boolean): void;
            /**
             * If %TRUE, when the tab key is pressed when several lines are selected, the
             * selected lines are indented of one level instead of being replaced with a `\t`
             * character. Shift+Tab unindents the selection.
             *
             * If the first or last line is not selected completely, it is also indented or
             * unindented.
             *
             * When the selection doesn't span several lines, the tab key always replaces
             * the selection with a normal `\t` character.
             * @param enable whether to indent a block when tab is pressed.
             */
            set_indent_on_tab(enable: boolean): void;
            /**
             * Sets the number of spaces to use for each step of indent when the tab key is
             * pressed.
             *
             * If `width` is -1, the value of the [property`View:`tab-width] property
             * will be used.
             *
             * The [property`View:`indent-width] interacts with the
             * [property`View:`insert-spaces-instead-of-tabs] property and
             * [property`View:`tab-width]. An example will be clearer:
             *
             * If the [property`View:`indent-width] is 4 and [property`View:`tab-width] is 8 and
             * [property`View:`insert-spaces-instead-of-tabs] is %FALSE, then pressing the tab
             * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
             * the tab key a second time will remove the 4 spaces and insert a `\t` character
             * instead (since [property`View:`tab-width] is 8). On the other hand, if
             * [property`View:`insert-spaces-instead-of-tabs] is %TRUE, the second tab key
             * pressed will insert 4 more spaces for a total of 8 spaces in the
             * [class`Gtk`.TextBuffer].
             *
             * The test-widget program (available in the GtkSourceView repository) may be
             * useful to better understand the indentation settings (enable the space
             * drawing!).
             * @param width indent width in characters.
             */
            set_indent_width(width: number): void;
            /**
             * Sets the indenter for `view` to `indenter`.
             *
             * Note that the indenter will not be used unless #GtkSourceView:auto-indent
             * has been set to %TRUE.
             * @param indenter a #GtkSourceIndenter or %NULL
             */
            set_indenter(indenter?: Indenter | null): void;
            /**
             * If %TRUE a tab key pressed is replaced by a group of space characters.
             *
             * Of course it is still possible to insert a real `\t` programmatically with the
             * [class`Gtk`.TextBuffer] API.
             * @param enable whether to insert spaces instead of tabs.
             */
            set_insert_spaces_instead_of_tabs(enable: boolean): void;
            /**
             * Sets attributes and priority for the `category`.
             * @param category the category.
             * @param attributes mark attributes.
             * @param priority priority of the category.
             */
            set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;
            /**
             * Sets the position of the right margin in the given `view`.
             * @param pos the width in characters where to position the right margin.
             */
            set_right_margin_position(pos: number): void;
            /**
             * If %TRUE line marks will be displayed beside the text.
             * @param show whether line marks should be displayed.
             */
            set_show_line_marks(show: boolean): void;
            /**
             * If %TRUE line numbers will be displayed beside the text.
             * @param show whether line numbers should be displayed.
             */
            set_show_line_numbers(show: boolean): void;
            /**
             * If %TRUE a right margin is displayed.
             * @param show whether to show a right margin.
             */
            set_show_right_margin(show: boolean): void;
            /**
             * When set to %TRUE, pressing the Backspace key will try to delete spaces
             * up to the previous tab stop.
             * @param smart_backspace whether to enable smart Backspace handling.
             */
            set_smart_backspace(smart_backspace: boolean): void;
            /**
             * Set the desired movement of the cursor when HOME and END keys
             * are pressed.
             * @param smart_home_end the desired behavior among #GtkSourceSmartHomeEndType.
             */
            set_smart_home_end(smart_home_end: SmartHomeEndType): void;
            /**
             * Sets the width of tabulation in characters.
             *
             * The #GtkTextBuffer still contains `\t` characters,
             * but they can take a different visual width in a [class`View]` widget.
             * @param width width of tab in characters.
             */
            set_tab_width(width: number): void;
            /**
             * Removes one indentation level at the beginning of the
             * specified lines.
             * @param start #GtkTextIter of the first line to indent
             * @param end #GtkTextIter of the last line to indent
             */
            unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

            // Inherited properties
            /**
             * Horizontal `GtkAdjustment` of the scrollable widget.
             *
             * This adjustment is shared between the scrollable widget and its parent.
             */
            get hadjustment(): Gtk.Adjustment;
            set hadjustment(val: Gtk.Adjustment);
            /**
             * Determines when horizontal scrolling should start.
             */
            get hscroll_policy(): Gtk.ScrollablePolicy;
            set hscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines when horizontal scrolling should start.
             */
            get hscrollPolicy(): Gtk.ScrollablePolicy;
            set hscrollPolicy(val: Gtk.ScrollablePolicy);
            /**
             * Vertical `GtkAdjustment` of the scrollable widget.
             *
             * This adjustment is shared between the scrollable widget and its parent.
             */
            get vadjustment(): Gtk.Adjustment;
            set vadjustment(val: Gtk.Adjustment);
            /**
             * Determines when vertical scrolling should start.
             */
            get vscroll_policy(): Gtk.ScrollablePolicy;
            set vscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines when vertical scrolling should start.
             */
            get vscrollPolicy(): Gtk.ScrollablePolicy;
            set vscrollPolicy(val: Gtk.ScrollablePolicy);

            // Inherited methods
            /**
             * Updates the position of the caret.
             *
             * Implementations of the `GtkAccessibleText` interface should call this
             * function every time the caret has moved, in order to notify assistive
             * technologies.
             */
            update_caret_position(): void;
            /**
             * Notifies assistive technologies of a change in contents.
             *
             * Implementations of the `GtkAccessibleText` interface should call this
             * function every time their contents change as the result of an operation,
             * like an insertion or a removal.
             *
             * Note: If the change is a deletion, this function must be called *before*
             * removing the contents, if it is an insertion, it must be called *after*
             * inserting the new contents.
             * @param change the type of change in the contents
             * @param start the starting offset of the change, in characters
             * @param end the end offset of the change, in characters
             */
            update_contents(change: Gtk.AccessibleTextContentChange, start: number, end: number): void;
            /**
             * Updates the boundary of the selection.
             *
             * Implementations of the `GtkAccessibleText` interface should call this
             * function every time the selection has moved, in order to notify assistive
             * technologies.
             */
            update_selection_bound(): void;
            /**
             * Retrieves the text attributes inside the accessible object.
             *
             * Each attribute is composed by:
             *
             * - a range
             * - a name
             * - a value
             *
             * It is left to the implementation to determine the serialization format
             * of the value to a string.
             *
             * GTK provides support for various text attribute names and values, but
             * implementations of this interface are free to add their own attributes.
             *
             * If this function returns true, `n_ranges` will be set to a value
             * greater than or equal to one, `ranges` will be set to a newly
             * allocated array of [struct#Gtk.AccessibleTextRange].
             * @param offset the offset, in characters
             */
            vfunc_get_attributes(
                offset: number,
            ): [boolean, Gtk.AccessibleTextRange[] | null, string[] | null, string[] | null];
            /**
             * Retrieves the position of the caret inside the accessible object.
             */
            vfunc_get_caret_position(): number;
            /**
             * Retrieve the current contents of the accessible object within
             * the given range.
             *
             * If `end` is `G_MAXUINT`, the end of the range is the full content
             * of the accessible object.
             * @param start the beginning of the range, in characters
             * @param end the end of the range, in characters
             */
            vfunc_get_contents(start: number, end: number): GLib.Bytes;
            /**
             * Retrieve the current contents of the accessible object starting
             * from the given offset, and using the given granularity.
             *
             * The `start` and `end` values contain the boundaries of the text.
             * @param offset the offset, in characters
             * @param granularity the granularity of the query
             */
            vfunc_get_contents_at(
                offset: number,
                granularity: Gtk.AccessibleTextGranularity,
            ): [GLib.Bytes, number, number];
            /**
             * Retrieves the default text attributes inside the accessible object.
             *
             * Each attribute is composed by:
             *
             * - a name
             * - a value
             *
             * It is left to the implementation to determine the serialization format
             * of the value to a string.
             *
             * GTK provides support for various text attribute names and values, but
             * implementations of this interface are free to add their own attributes.
             */
            vfunc_get_default_attributes(): [string[] | null, string[] | null];
            /**
             * Obtains the extents of a range of text, in widget coordinates.
             * @param start the start offset, in characters
             * @param end the end offset, in characters, @extents (out caller-allocates): return location for the extents
             * @param extents
             */
            vfunc_get_extents(start: number, end: number, extents: Graphene.Rect): boolean;
            /**
             * Gets the text offset at a given point.
             * @param point a point in widget coordinates of @self
             */
            vfunc_get_offset(point: Graphene.Point): [boolean, number];
            /**
             * Retrieves the selection ranges in the accessible object.
             *
             * If this function returns true, `n_ranges` will be set to a value
             * greater than or equal to one, and `ranges` will be set to a newly
             * allocated array of [struct#Gtk.AccessibleTextRange].
             */
            vfunc_get_selection(): [boolean, Gtk.AccessibleTextRange[] | null];
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable.
             *
             * An example for this would be treeview headers. GTK can use
             * this information to display overlaid graphics, like the
             * overshoot indication, at the right position.
             * @returns %TRUE if @border has been set
             */
            get_border(): [boolean, Gtk.Border];
            /**
             * Retrieves the `GtkAdjustment` used for horizontal scrolling.
             * @returns horizontal `GtkAdjustment`.
             */
            get_hadjustment(): Gtk.Adjustment | null;
            /**
             * Gets the horizontal `GtkScrollablePolicy`.
             * @returns The horizontal `GtkScrollablePolicy`.
             */
            get_hscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Retrieves the `GtkAdjustment` used for vertical scrolling.
             * @returns vertical `GtkAdjustment`.
             */
            get_vadjustment(): Gtk.Adjustment | null;
            /**
             * Gets the vertical `GtkScrollablePolicy`.
             * @returns The vertical `GtkScrollablePolicy`.
             */
            get_vscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Sets the horizontal adjustment of the `GtkScrollable`.
             * @param hadjustment a `GtkAdjustment`
             */
            set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the `GtkScrollablePolicy`.
             *
             * The policy determines whether horizontal scrolling should start
             * below the minimum width or below the natural width.
             * @param policy the horizontal `GtkScrollablePolicy`
             */
            set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
            /**
             * Sets the vertical adjustment of the `GtkScrollable`.
             * @param vadjustment a `GtkAdjustment`
             */
            set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the `GtkScrollablePolicy`.
             *
             * The policy determines whether vertical scrolling should start
             * below the minimum height or below the natural height.
             * @param policy the vertical `GtkScrollablePolicy`
             */
            set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable.
             *
             * An example for this would be treeview headers. GTK can use
             * this information to display overlaid graphics, like the
             * overshoot indication, at the right position.
             */
            vfunc_get_border(): [boolean, Gtk.Border];
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

        module VimIMContext {
            // Signal callback interfaces

            interface Edit {
                (view: View, path?: string | null): void;
            }

            interface ExecuteCommand {
                (command: string): boolean;
            }

            interface FormatText {
                (begin: Gtk.TextIter, end: Gtk.TextIter): void;
            }

            interface Write {
                (view: View, path?: string | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gtk.IMContext.ConstructorProps {
                command_bar_text: string;
                commandBarText: string;
                command_text: string;
                commandText: string;
            }
        }

        /**
         * Vim emulation.
         *
         * The `GtkSourceVimIMContext` is a [class`Gtk`.IMContext] implementation that can
         * be used to provide Vim-like editing controls within a [class`View]`.
         *
         * The `GtkSourceViMIMContext` will process incoming [class`Gdk`.KeyEvent] as the
         * user types. It should be used in conjunction with a [class`Gtk`.EventControllerKey].
         *
         * Various features supported by `GtkSourceVimIMContext` include:
         *
         *  - Normal, Insert, Replace, Visual, and Visual Line modes
         *  - Support for an integrated command bar and current command preview
         *  - Search and replace
         *  - Motions and Text Objects
         *  - History replay
         *  - Jumplists within the current file
         *  - Registers including the system and primary clipboards
         *  - Creation and motion to marks
         *  - Some commonly used Vim commands
         *
         * It is recommended that applications display the contents of
         * [property`VimIMContext:`command-bar-text] and
         * [property`VimIMContext:`command-text] to the user as they represent the
         * command-bar and current command preview found in Vim.
         *
         * `GtkSourceVimIMContext` attempts to work with additional [class`Gtk`.IMContext]
         * implementations such as IBus by querying the [class`Gtk`.TextView] before processing
         * the command in states which support it (notably Insert and Replace modes).
         *
         * ```c
         * GtkEventController *key;
         * GtkIMContext *im_context;
         * GtkWidget *view;
         *
         * view = gtk_source_view_new ();
         * im_context = gtk_source_vim_im_context_new ();
         * key = gtk_event_controller_key_new ();
         *
         * gtk_event_controller_key_set_im_context (GTK_EVENT_CONTROLLER_KEY (key), im_context);
         * gtk_event_controller_set_propagation_phase (key, GTK_PHASE_CAPTURE);
         * gtk_widget_add_controller (view, key);
         * gtk_im_context_set_client_widget (im_context, view);
         *
         * g_object_bind_property (im_context, "command-bar-text", command_bar_label, "label", 0);
         * g_object_bind_property (im_context, "command-text", command_label, "label", 0);
         * ```
         */
        class VimIMContext extends Gtk.IMContext {
            static $gtype: GObject.GType<VimIMContext>;

            // Properties

            get command_bar_text(): string;
            get commandBarText(): string;
            get command_text(): string;
            get commandText(): string;

            // Constructors

            constructor(properties?: Partial<VimIMContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VimIMContext;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'edit', callback: (_source: this, view: View, path: string | null) => void): number;
            connect_after(signal: 'edit', callback: (_source: this, view: View, path: string | null) => void): number;
            emit(signal: 'edit', view: View, path?: string | null): void;
            connect(signal: 'execute-command', callback: (_source: this, command: string) => boolean): number;
            connect_after(signal: 'execute-command', callback: (_source: this, command: string) => boolean): number;
            emit(signal: 'execute-command', command: string): void;
            connect(
                signal: 'format-text',
                callback: (_source: this, begin: Gtk.TextIter, end: Gtk.TextIter) => void,
            ): number;
            connect_after(
                signal: 'format-text',
                callback: (_source: this, begin: Gtk.TextIter, end: Gtk.TextIter) => void,
            ): number;
            emit(signal: 'format-text', begin: Gtk.TextIter, end: Gtk.TextIter): void;
            connect(signal: 'write', callback: (_source: this, view: View, path: string | null) => void): number;
            connect_after(signal: 'write', callback: (_source: this, view: View, path: string | null) => void): number;
            emit(signal: 'write', view: View, path?: string | null): void;

            // Methods

            /**
             * Executes `command` as if it was typed into the command bar by the
             * user except that this does not emit the
             * [signal`VimIMContext:`:execute-command] signal.
             * @param command the command text
             */
            execute_command(command: string): void;
            /**
             * Gets the current command-bar text as it is entered by the user.
             * @returns A string containing the command-bar text
             */
            get_command_bar_text(): string;
            /**
             * Gets the current command text as it is entered by the user.
             * @returns A string containing the command text
             */
            get_command_text(): string;
        }

        type BufferClass = typeof Buffer;
        type CompletionCellClass = typeof CompletionCell;
        type CompletionClass = typeof Completion;
        type CompletionContextClass = typeof CompletionContext;
        type CompletionProposalInterface = typeof CompletionProposal;
        type CompletionProviderInterface = typeof CompletionProvider;
        type CompletionSnippetsClass = typeof CompletionSnippets;
        type CompletionWordsClass = typeof CompletionWords;
        /**
         * Character encoding.
         *
         * The #GtkSourceEncoding boxed type represents a character encoding. It is used
         * for example by #GtkSourceFile. Note that the text in GTK widgets is always
         * encoded in UTF-8.
         */
        abstract class Encoding {
            static $gtype: GObject.GType<Encoding>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets all encodings.
             */
            static get_all(): Encoding[];
            /**
             * Gets the #GtkSourceEncoding for the current locale.
             *
             * See also [func`GLib`.get_charset].
             */
            static get_current(): Encoding;
            /**
             * Gets the list of default candidate encodings to try when loading a file.
             *
             * See [method`FileLoader`.set_candidate_encodings].
             *
             * This function returns a different list depending on the current locale (i.e.
             * language, country and default encoding). The UTF-8 encoding and the current
             * locale encoding are guaranteed to be present in the returned list.
             */
            static get_default_candidates(): Encoding[];
            /**
             * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
             * "ISO-8859-1".
             * @param charset a character set.
             */
            static get_from_charset(charset: string): Encoding | null;
            static get_utf8(): Encoding;

            // Methods

            /**
             * Used by language bindings.
             * @returns a copy of @enc.
             */
            copy(): Encoding;
            /**
             * Used by language bindings.
             */
            free(): void;
            /**
             * Gets the character set of the #GtkSourceEncoding, such as "UTF-8" or
             * "ISO-8859-1".
             * @returns the character set of the #GtkSourceEncoding.
             */
            get_charset(): string;
            /**
             * Gets the name of the #GtkSourceEncoding such as "Unicode" or "Western".
             * @returns the name of the #GtkSourceEncoding.
             */
            get_name(): string;
            to_string(): string;
        }

        type FileClass = typeof File;
        type FileLoaderClass = typeof FileLoader;
        type FileSaverClass = typeof FileSaver;
        type GutterClass = typeof Gutter;
        type GutterLinesClass = typeof GutterLines;
        type GutterRendererClass = typeof GutterRenderer;
        type GutterRendererPixbufClass = typeof GutterRendererPixbuf;
        type GutterRendererTextClass = typeof GutterRendererText;
        type HoverClass = typeof Hover;
        type HoverContextClass = typeof HoverContext;
        type HoverDisplayClass = typeof HoverDisplay;
        type HoverProviderInterface = typeof HoverProvider;
        type IndenterInterface = typeof Indenter;
        type LanguageClass = typeof Language;
        type LanguageManagerClass = typeof LanguageManager;
        type MapClass = typeof Map;
        type MarkAttributesClass = typeof MarkAttributes;
        type MarkClass = typeof Mark;
        type PrintCompositorClass = typeof PrintCompositor;
        type RegionClass = typeof Region;
        /**
         * An opaque datatype.
         *
         * Ignore all its fields and initialize the iter with [method`Region`.get_start_region_iter].
         */
        class RegionIter {
            static $gtype: GObject.GType<RegionIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the subregion at this iterator.
             * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if @iter is the end iterator or if the region is empty.
             */
            get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
            is_end(): boolean;
            /**
             * Moves `iter` to the next subregion.
             * @returns %TRUE if @iter moved and is dereferenceable, or %FALSE if @iter has   been set to the end iterator.
             */
            next(): boolean;
        }

        type SearchContextClass = typeof SearchContext;
        type SearchSettingsClass = typeof SearchSettings;
        type SnippetChunkClass = typeof SnippetChunk;
        type SnippetClass = typeof Snippet;
        type SnippetContextClass = typeof SnippetContext;
        type SnippetManagerClass = typeof SnippetManager;
        type SpaceDrawerClass = typeof SpaceDrawer;
        type StyleClass = typeof Style;
        type StyleSchemeChooserButtonClass = typeof StyleSchemeChooserButton;
        type StyleSchemeChooserInterface = typeof StyleSchemeChooser;
        type StyleSchemeChooserWidgetClass = typeof StyleSchemeChooserWidget;
        type StyleSchemeClass = typeof StyleScheme;
        type StyleSchemeManagerClass = typeof StyleSchemeManager;
        type StyleSchemePreviewClass = typeof StyleSchemePreview;
        type TagClass = typeof Tag;
        type ViewClass = typeof View;
        type VimIMContextClass = typeof VimIMContext;
        module CompletionProposal {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface CompletionProposalNamespace {
            $gtype: GObject.GType<CompletionProposal>;
            prototype: CompletionProposal;
        }
        interface CompletionProposal extends GObject.Object {
            // Methods

            /**
             * Gets the typed-text for the proposal, if supported by the implementation.
             *
             * Implementing this virtual-function is optional, but can be useful to allow
             * external tooling to compare results.
             * @returns a newly allocated string, or %NULL
             */
            get_typed_text(): string | null;

            // Virtual methods

            /**
             * Gets the typed-text for the proposal, if supported by the implementation.
             *
             * Implementing this virtual-function is optional, but can be useful to allow
             * external tooling to compare results.
             */
            vfunc_get_typed_text(): string | null;
        }

        export const CompletionProposal: CompletionProposalNamespace;

        module CompletionProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface CompletionProviderNamespace {
            $gtype: GObject.GType<CompletionProvider>;
            prototype: CompletionProvider;
        }
        interface CompletionProvider extends GObject.Object {
            // Methods

            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            activate(context: CompletionContext, proposal: CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            get_priority(context: CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             * @returns a title for the provider or %NULL
             */
            get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            key_activates(
                context: CompletionContext,
                proposal: CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @returns a #GPtrArray of #GtkSourceCompletionProposal or %NULL.
             */
            list_alternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            populate_async(
                context: CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             * @returns a #GListModel of #GtkSourceCompletionProposal
             */
            populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            refilter(context: CompletionContext, model: Gio.ListModel): void;

            // Virtual methods

            /**
             * This function requests `proposal` to be activated by the
             * #GtkSourceCompletionProvider.
             *
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a #GtkSourceSnippet with
             * edit points the user may cycle through.
             *
             * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;
            /**
             * This function requests that the #GtkSourceCompletionProvider prepares
             * `cell` to display the contents of `proposal`.
             *
             * Based on `cells` column type, you may want to display different information.
             *
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param cell a #GtkSourceCompletionCell
             */
            vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;
            /**
             * This function should return the priority of `self` in `context`.
             *
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             *
             * Higher value indicates higher priority.
             * @param context a #GtkSourceCompletionContext
             */
            vfunc_get_priority(context: CompletionContext): number;
            /**
             * Gets the title of the completion provider, if any.
             *
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-%NULL.
             */
            vfunc_get_title(): string | null;
            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             *
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             *
             * This method will only trigger when text is inserted into the #GtkTextBuffer
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a #GtkTextIter
             * @param ch a #gunichar of the character inserted
             */
            vfunc_is_trigger(iter: Gtk.TextIter, ch: number): boolean;
            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             *
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             * @param keyval a keyval such as [const@Gdk.KEY_period]
             * @param state a #GdkModifierType or 0
             */
            vfunc_key_activates(
                context: CompletionContext,
                proposal: CompletionProposal,
                keyval: number,
                state: Gdk.ModifierType,
            ): boolean;
            /**
             * Providers should return a list of alternates to `proposal` or %NULL if
             * there are no alternates available.
             *
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a #GtkSourceCompletionContext
             * @param proposal a #GtkSourceCompletionProposal
             */
            vfunc_list_alternates(
                context: CompletionContext,
                proposal: CompletionProposal,
            ): CompletionProposal[] | null;
            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             *
             * For providers that would like to populate a [iface`Gio`.ListModel] while those
             * results are displayed to the user,
             * [method`CompletionContext`.set_proposals_for_provider] may be used
             * to reduce latency until the user sees results.
             * @param context a #GtkSourceCompletionContext
             * @param cancellable a #GCancellable or %NULL
             * @param callback a callback to execute upon completion
             */
            vfunc_populate_async(
                context: CompletionContext,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a #GAsyncResult provided to callback
             */
            vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;
            /**
             * This function can be used to filter results previously provided to
             * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
             *
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new [iface`Gio`.ListModel] of results.
             * @param context a #GtkSourceCompletionContext
             * @param model a #GListModel
             */
            vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
        }

        export const CompletionProvider: CompletionProviderNamespace;

        module HoverProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface HoverProviderNamespace {
            $gtype: GObject.GType<HoverProvider>;
            prototype: HoverProvider;
        }
        interface HoverProvider extends GObject.Object {
            // Methods

            populate_async(
                context: HoverContext,
                display: HoverDisplay,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            populate_finish(result: Gio.AsyncResult): boolean;

            // Virtual methods

            vfunc_populate(context: HoverContext, display: HoverDisplay): boolean;
            vfunc_populate_async(
                context: HoverContext,
                display: HoverDisplay,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_populate_finish(result: Gio.AsyncResult): boolean;
        }

        export const HoverProvider: HoverProviderNamespace;

        module Indenter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface IndenterNamespace {
            $gtype: GObject.GType<Indenter>;
            prototype: Indenter;
        }
        interface Indenter extends GObject.Object {
            // Methods

            /**
             * This function should be implemented to alter the indentation of text
             * within the view.
             *
             * `view` is provided so that the indenter may retrieve settings such as indentation and tab widths.
             *
             * `iter` is the location where the indentation was requested. This typically
             * is after having just inserted a newline (\n) character but can be other
             * situations such as a manually requested indentation or reformatting.
             *
             * See [vfunc`GtkSource`.Indenter.is_trigger] for how to trigger indentation on
             * various characters inserted into the buffer.
             *
             * The implementor of this function is expected to keep `iter` valid across
             * calls to the function and should contain the location of the insert mark
             * after calling this function.
             *
             * The default implementation for this virtual function will copy the
             * indentation of the previous line.
             * @param view a #GtkSourceView
             * @param iter the location of the indentation request
             */
            indent(view: View, iter: Gtk.TextIter): Gtk.TextIter;
            /**
             * This function is used to determine if a key pressed should cause the
             * indenter to automatically indent.
             *
             * The default implementation of this virtual method will check to see
             * if `keyval` is [const`Gdk`.KEY_Return] or [const`Gdk`.KEY_KP_Enter] and `state` does
             * not have %GDK_SHIFT_MASK set. This is to allow the user to avoid
             * indentation when Shift+Return is pressed. Other indenters may want
             * to copy this behavior to provide a consistent experience to users.
             * @param view a #GtkSourceView
             * @param location the location where @ch is to be inserted
             * @param state modifier state for the insertion
             * @param keyval the keyval pressed such as [const@Gdk.KEY_Return]
             * @returns %TRUE if indentation should be automatically triggered;   otherwise %FALSE and no indentation will be performed.
             */
            is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;

            // Virtual methods

            /**
             * This function should be implemented to alter the indentation of text
             * within the view.
             *
             * `view` is provided so that the indenter may retrieve settings such as indentation and tab widths.
             *
             * `iter` is the location where the indentation was requested. This typically
             * is after having just inserted a newline (\n) character but can be other
             * situations such as a manually requested indentation or reformatting.
             *
             * See [vfunc`GtkSource`.Indenter.is_trigger] for how to trigger indentation on
             * various characters inserted into the buffer.
             *
             * The implementor of this function is expected to keep `iter` valid across
             * calls to the function and should contain the location of the insert mark
             * after calling this function.
             *
             * The default implementation for this virtual function will copy the
             * indentation of the previous line.
             * @param view a #GtkSourceView
             * @param iter the location of the indentation request
             */
            vfunc_indent(view: View, iter: Gtk.TextIter): Gtk.TextIter;
            /**
             * This function is used to determine if a key pressed should cause the
             * indenter to automatically indent.
             *
             * The default implementation of this virtual method will check to see
             * if `keyval` is [const`Gdk`.KEY_Return] or [const`Gdk`.KEY_KP_Enter] and `state` does
             * not have %GDK_SHIFT_MASK set. This is to allow the user to avoid
             * indentation when Shift+Return is pressed. Other indenters may want
             * to copy this behavior to provide a consistent experience to users.
             * @param view a #GtkSourceView
             * @param location the location where @ch is to be inserted
             * @param state modifier state for the insertion
             * @param keyval the keyval pressed such as [const@Gdk.KEY_Return]
             */
            vfunc_is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;
        }

        export const Indenter: IndenterNamespace;

        module StyleSchemeChooser {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                style_scheme: StyleScheme;
                styleScheme: StyleScheme;
            }
        }

        export interface StyleSchemeChooserNamespace {
            $gtype: GObject.GType<StyleSchemeChooser>;
            prototype: StyleSchemeChooser;
        }
        interface StyleSchemeChooser extends GObject.Object {
            // Properties

            /**
             * Contains the currently selected style scheme.
             *
             * The property can be set to change the current selection programmatically.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * Contains the currently selected style scheme.
             *
             * The property can be set to change the current selection programmatically.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);

            // Methods

            /**
             * Gets the currently-selected scheme.
             * @returns the currently-selected scheme.
             */
            get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            set_style_scheme(scheme: StyleScheme): void;

            // Virtual methods

            /**
             * Gets the currently-selected scheme.
             */
            vfunc_get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            vfunc_set_style_scheme(scheme: StyleScheme): void;
        }

        export const StyleSchemeChooser: StyleSchemeChooserNamespace;

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

    export default GtkSource;
}

declare module 'gi://GtkSource' {
    import GtkSource5 from 'gi://GtkSource?version=5';
    export default GtkSource5;
}
// END
