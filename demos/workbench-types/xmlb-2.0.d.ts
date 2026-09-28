/// <reference path="./gio-2.0.d.ts" />
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

declare module 'gi://Xmlb?version=2.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Xmlb {
        /**
         * Xmlb-2.0
         */

        export namespace OpcodeKind {
            export const $gtype: GObject.GType<OpcodeKind>;
        }

        enum OpcodeKind {
            /**
             * Unknown opcode
             */
            UNKNOWN,
            /**
             * A literal integer value
             */
            INTEGER,
            /**
             * A literal text value
             */
            TEXT,
            /**
             * An operator
             */
            FUNCTION,
            BOUND_UNSET,
            /**
             * A bound integer value
             */
            BOUND_INTEGER,
            /**
             * A bound text value
             */
            BOUND_TEXT,
            /**
             * An indexed text value
             */
            INDEXED_TEXT,
            BOOLEAN,
            /**
             * An bound indexed text value
             */
            BOUND_INDEXED_TEXT,
        }
        /**
         * The compile-time major version
         */
        const MAJOR_VERSION: number;
        /**
         * The compile-time micro version
         */
        const MICRO_VERSION: number;
        /**
         * The compile-time minor version
         */
        const MINOR_VERSION: number;
        /**
         * Converts a string to an opcode kind.
         * @param str a string, e.g. `FUNC`
         * @returns a #XbOpcodeKind, e.g. %XB_OPCODE_KIND_TEXT
         */
        function opcode_kind_from_string(str: string): OpcodeKind;
        /**
         * Converts the opcode kind to a string.
         * @param kind a #XbOpcodeKind, e.g. %XB_OPCODE_KIND_FUNCTION
         * @returns opcode kind, e.g. `FUNC`
         */
        function opcode_kind_to_string(kind: OpcodeKind): string;
        /**
         * Escapes XPath control sequences such as newlines, tabs, and forward slashes.
         * @param str string, e.g. `app/org.gnome.ghex/x86_64/stable`
         * @returns new string that is safe to use for queries
         */
        function string_escape(str: string): string;
        /**
         * Gets the XMLb installed runtime version.
         * @returns a version number, e.g. "0.3.19"
         */
        function version_string(): string;
        interface BuilderFixupFunc {
            (self: BuilderFixup, bn: BuilderNode): boolean;
        }
        interface BuilderNodeSortFunc {
            (bn1: BuilderNode, bn2: BuilderNode): number;
        }
        interface BuilderNodeTraverseFunc {
            (bn: BuilderNode): boolean;
        }
        interface BuilderSourceNodeFunc {
            (self: BuilderSource, bn: BuilderNode): boolean;
        }
        interface MachineMethodFunc {
            (self: Machine, stack: Stack, result_unused: boolean, exec_data?: any | null): boolean;
        }
        interface MachineOpcodeFixupFunc {
            (self: Machine, opcodes: Stack): boolean;
        }
        interface MachineTextHandlerFunc {
            (self: Machine, opcodes: Stack, text: string, handled: boolean): boolean;
        }
        interface NodeTransmogrifyFunc {
            (self: Node): boolean;
        }
        /**
         * The flags for converting to XML.
         */

        /**
         * The flags for converting to XML.
         */
        export namespace BuilderCompileFlags {
            export const $gtype: GObject.GType<BuilderCompileFlags>;
        }

        enum BuilderCompileFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Only load native languages
             */
            NATIVE_LANGS,
            /**
             * Ignore invalid files without an error
             */
            IGNORE_INVALID,
            /**
             * Only store a single language
             */
            SINGLE_LANG,
            /**
             * Watch the XMLB file for changes
             */
            WATCH_BLOB,
            /**
             * Ignore the cache GUID value
             */
            IGNORE_GUID,
            /**
             * Require at most one root node
             */
            SINGLE_ROOT,
        }
        /**
         * The flags used when building a node.
         */

        /**
         * The flags used when building a node.
         */
        export namespace BuilderNodeFlags {
            export const $gtype: GObject.GType<BuilderNodeFlags>;
        }

        enum BuilderNodeFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Do not include this node in the silo
             */
            IGNORE,
            /**
             * Assume the node CDATA is already valid
             */
            LITERAL_TEXT,
            /**
             * If the node has leading text
             */
            HAS_TEXT,
            /**
             * If the node has trailing text
             */
            HAS_TAIL,
            /**
             * Tokenize and fold text to ASCII (Since: 0.3.1)
             */
            TOKENIZE_TEXT,
            /**
             * Strip leading and trailing spaces from text (Since:
             * 0.3.4)
             */
            STRIP_TEXT,
        }
        /**
         * The flags for converting to XML.
         */

        /**
         * The flags for converting to XML.
         */
        export namespace BuilderSourceFlags {
            export const $gtype: GObject.GType<BuilderSourceFlags>;
        }

        enum BuilderSourceFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Do not attempt to repair XML whitespace
             */
            LITERAL_TEXT,
            /**
             * Watch the source file for changes
             */
            WATCH_FILE,
            /**
             * Watch the directory containing the source file for
             * changes (for example, if watching all the sources in a directory — this allows the file monitors
             * to be shared)
             */
            WATCH_DIRECTORY,
        }
        /**
         * The flags to control the amount of debugging is generated.
         */

        /**
         * The flags to control the amount of debugging is generated.
         */
        export namespace MachineDebugFlags {
            export const $gtype: GObject.GType<MachineDebugFlags>;
        }

        enum MachineDebugFlags {
            /**
             * No debug flags to use
             */
            NONE,
            /**
             * Show the stack addition and removal
             */
            SHOW_STACK,
            /**
             * Show the XPath predicate parsing
             */
            SHOW_PARSING,
            /**
             * Show the optimizer operation
             */
            SHOW_OPTIMIZER,
            /**
             * Show the query slow paths
             */
            SHOW_SLOW_PATH,
        }
        /**
         * The flags to control the parsing behaviour.
         */

        /**
         * The flags to control the parsing behaviour.
         */
        export namespace MachineParseFlags {
            export const $gtype: GObject.GType<MachineParseFlags>;
        }

        enum MachineParseFlags {
            /**
             * No flags set
             */
            NONE,
            /**
             * Run an optimization pass on the predicate
             */
            OPTIMIZE,
        }
        /**
         * The flags for converting to XML.
         */

        /**
         * The flags for converting to XML.
         */
        export namespace NodeExportFlags {
            export const $gtype: GObject.GType<NodeExportFlags>;
        }

        enum NodeExportFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Add an XML header to the data
             */
            ADD_HEADER,
            /**
             * Split up children with a newline
             */
            FORMAT_MULTILINE,
            /**
             * Indent the XML by child depth
             */
            FORMAT_INDENT,
            /**
             * Include the siblings when converting
             */
            INCLUDE_SIBLINGS,
            /**
             * Only export the children of the node
             */
            ONLY_CHILDREN,
            /**
             * If node has no children, collapse open and close
             * tags
             */
            COLLAPSE_EMPTY,
        }
        /**
         * The opcode flags. The values have been carefully chosen so that a simple
         * bitmask can be done to know how to compare for equality.
         *
         * function─┐ ┌─string
         * bound──┐ │ │ ┌──integer
         * token┐ │ │ │ │
         *  X X X X X X X
         *        8 4 2 1
         */

        /**
         * The opcode flags. The values have been carefully chosen so that a simple
         * bitmask can be done to know how to compare for equality.
         *
         * function─┐ ┌─string
         * bound──┐ │ │ ┌──integer
         * token┐ │ │ │ │
         *  X X X X X X X
         *        8 4 2 1
         */
        export namespace OpcodeFlags {
            export const $gtype: GObject.GType<OpcodeFlags>;
        }

        enum OpcodeFlags {
            UNKNOWN,
            /**
             * Integer value set
             */
            INTEGER,
            /**
             * Text value set
             */
            TEXT,
            /**
             * An operator
             */
            FUNCTION,
            /**
             * A bound value, assigned later
             */
            BOUND,
            BOOLEAN,
            /**
             * Tokenized text
             */
            TOKENIZED,
        }
        /**
         * The flags used for queries.
         */

        /**
         * The flags used for queries.
         */
        export namespace QueryFlags {
            export const $gtype: GObject.GType<QueryFlags>;
        }

        enum QueryFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Optimize the query when possible
             */
            OPTIMIZE,
            /**
             * Use the indexed parameters
             */
            USE_INDEXES,
            /**
             * Reverse the results order
             */
            REVERSE,
            /**
             * Always cache the #XbNode objects
             */
            FORCE_NODE_CACHE,
        }
        /**
         * The flags for loading a silo.
         */

        /**
         * The flags for loading a silo.
         */
        export namespace SiloLoadFlags {
            export const $gtype: GObject.GType<SiloLoadFlags>;
        }

        enum SiloLoadFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * No not check header signature
             */
            NO_MAGIC,
            /**
             * Watch the XMLB file for changes
             */
            WATCH_BLOB,
        }
        /**
         * The flags used when profiling a silo.
         */

        /**
         * The flags used when profiling a silo.
         */
        export namespace SiloProfileFlags {
            export const $gtype: GObject.GType<SiloProfileFlags>;
        }

        enum SiloProfileFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Output profiling as debug
             */
            DEBUG,
            /**
             * Save profiling in an appended string
             */
            APPEND,
            /**
             * Save XPATH queries
             */
            XPATH,
            /**
             * Output the machine optimizer as debug
             */
            OPTIMIZER,
        }
        module Builder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Builder extends GObject.Object {
            static $gtype: GObject.GType<Builder>;

            // Constructors

            constructor(properties?: Partial<Builder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Builder;

            // Methods

            /**
             * Adds a function that will get run on every #XbBuilderNode compile creates
             * for the silo. This is run after all the #XbBuilderSource fixups have been
             * run.
             * @param fixup a #XbBuilderFixup
             */
            add_fixup(fixup: BuilderFixup): void;
            /**
             * Adds a locale to the builder. Locales added first will be prioritised over
             * locales added later.
             * @param locale a locale, e.g. "en_US"
             */
            add_locale(locale: string): void;
            /**
             * Adds the GUID to the internal correctness hash.
             * @param guid any text, typcically a filename or GUID
             */
            append_guid(guid: string): void;
            /**
             * Compiles a #XbSilo.
             * @param flags some #XbBuilderCompileFlags, e.g. %XB_BUILDER_SOURCE_FLAG_LITERAL_TEXT
             * @param cancellable a #GCancellable, or %NULL
             * @returns a #XbSilo, or %NULL for error
             */
            compile(flags: BuilderCompileFlags, cancellable?: Gio.Cancellable | null): Silo;
            /**
             * Ensures `file` is up to date, and returns a compiled #XbSilo.
             *
             * If `silo` is being used by a query (e.g. in another thread) then all node
             * data is immediately invalid.
             *
             * The returned #XbSilo will use the thread-default main context at the time of
             * calling this function for its future signal emissions.
             * @param file a #GFile
             * @param flags some #XbBuilderCompileFlags, e.g. %XB_BUILDER_COMPILE_FLAG_IGNORE_INVALID
             * @param cancellable a #GCancellable, or %NULL
             * @returns a #XbSilo, or %NULL for error
             */
            ensure(file: Gio.File, flags: BuilderCompileFlags, cancellable?: Gio.Cancellable | null): Silo;
            /**
             * Adds a node tree to the builder.
             *
             * If you are manually adding dynamic data sourced from a non-static source then you MUST use
             * xb_builder_append_guid() with the appropriate GUID value, e.g. the file name and mtime.
             *
             * If no appropriate value is available, the caller can use something like:
             *
             *     g_autofree gchar *tmp = xb_builder_node_export(bn, XB_NODE_EXPORT_FLAG_NONE, NULL);
             *     xb_builder_append_guid(builder, tmp);
             *
             * Failure to include an appropriate GUID value would allow an out-of-data silo to be used.
             * @param bn a #XbBuilderNode
             */
            import_node(bn: BuilderNode): void;
            /**
             * Adds a #XbBuilderSource to the #XbBuilder.
             * @param source a #XbBuilderSource
             */
            import_source(source: BuilderSource): void;
            /**
             * Enables or disables the collection of profiling data.
             * @param profile_flags some #XbSiloProfileFlags, e.g. %XB_SILO_PROFILE_FLAG_DEBUG
             */
            set_profile_flags(profile_flags: SiloProfileFlags): void;
        }

        module BuilderFixup {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BuilderFixup extends GObject.Object {
            static $gtype: GObject.GType<BuilderFixup>;

            // Constructors

            constructor(properties?: Partial<BuilderFixup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, func: BuilderFixupFunc): BuilderFixup;

            // Methods

            /**
             * Gets the maximum depth used for this fixup, if each node is being visited.
             * @returns integer, or -1 if unset
             */
            get_max_depth(): number;
            /**
             * Sets the maximum depth used for this fixup. Use a `max_depth` of 0 to only
             * visit the root node.
             *
             * Setting a maximum depth may increase performance considerably if using
             * fixup functions on large and deeply nested XML files.
             * @param max_depth integer, -1 for "all"
             */
            set_max_depth(max_depth: number): void;
        }

        module BuilderNode {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BuilderNode extends GObject.Object {
            static $gtype: GObject.GType<BuilderNode>;

            // Constructors

            constructor(properties?: Partial<BuilderNode.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](element: string): BuilderNode;

            // Methods

            /**
             * Adds a child builder node.
             * @param child A XbBuilderNode
             */
            add_child(child: BuilderNode): void;
            /**
             * Adds a flag to the builder node.
             * @param flag a #XbBuilderNodeFlags
             */
            add_flag(flag: BuilderNodeFlags): void;
            /**
             * Adds a token to the builder node.
             * @param token a new token
             */
            add_token(token: string): void;
            /**
             * Gets the depth of the node tree, where 0 is the root node.
             */
            depth(): number;
            /**
             * Exports the node to XML.
             * @param flags some #XbNodeExportFlags, e.g. #XB_NODE_EXPORT_FLAG_NONE
             * @returns XML data, or %NULL for an error
             */
            ['export'](flags: NodeExportFlags): string;
            /**
             * Gets an attribute from the builder node.
             * @param name attribute name, e.g. `type`
             * @returns string, or %NULL if unset
             */
            get_attr(name: string): string;
            /**
             * Gets an attribute from the builder node.
             * @param name attribute name, e.g. `priority`
             * @returns integer, or 0 if unset
             */
            get_attr_as_uint(name: string): number;
            /**
             * Finds a child builder node by the element name, and optionally text value.
             * @param element An element name, e.g. "url"
             * @param text node text, e.g. "gimp.desktop"
             * @returns a new #XbBuilderNode, or %NULL if not found
             */
            get_child(element: string, text?: string | null): BuilderNode;
            /**
             * Gets the children of the builder node.
             * @returns children
             */
            get_children(): BuilderNode[];
            /**
             * Gets the element from the builder node.
             * @returns string, or %NULL if unset
             */
            get_element(): string;
            /**
             * Gets the first child of the builder node.
             * @returns a #XbBuilderNode, or %NULL
             */
            get_first_child(): BuilderNode;
            /**
             * Gets the last child of the builder node.
             * @returns a #XbBuilderNode, or %NULL
             */
            get_last_child(): BuilderNode;
            /**
             * Gets the parent node for the current node.
             * @returns a new #XbBuilderNode, or %NULL no parent exists.
             */
            get_parent(): BuilderNode;
            /**
             * Gets the tail from the builder node.
             * @returns string, or %NULL if unset
             */
            get_tail(): string;
            /**
             * Gets the text from the builder node.
             * @returns string, or %NULL if unset
             */
            get_text(): string;
            /**
             * Gets the text from the builder node.
             * @returns integer, or 0 if unset
             */
            get_text_as_uint(): number;
            /**
             * Gets the tokens of the builder node.
             * @returns tokens
             */
            get_tokens(): string[] | null;
            /**
             * Checks a flag on the builder node.
             * @param flag a #XbBuilderNodeFlags
             * @returns %TRUE if @flag is set
             */
            has_flag(flag: BuilderNodeFlags): boolean;
            /**
             * Removes an attribute from the builder node.
             * @param name attribute name, e.g. `type`
             */
            remove_attr(name: string): void;
            /**
             * Removes a child builder node.
             * @param child A XbBuilderNode
             */
            remove_child(child: BuilderNode): void;
            /**
             * Adds an attribute to the builder node.
             * @param name attribute name, e.g. `type`
             * @param value attribute value, e.g. `desktop`
             */
            set_attr(name: string, value: string): void;
            /**
             * Sets the element name on the builder node.
             * @param element a string element
             */
            set_element(element: string): void;
            /**
             * Sets the tail on the builder node.
             * @param tail a string
             * @param tail_len length of @tail, or -1 if @tail is NUL terminated
             */
            set_tail(tail: string | null, tail_len: number): void;
            /**
             * Sets the text on the builder node.
             * @param text a string
             * @param text_len length of @text, or -1 if @text is NUL terminated
             */
            set_text(text: string | null, text_len: number): void;
            /**
             * Sorts the node children using a custom sort function.
             * @param func a #XbBuilderNodeSortFunc
             */
            sort_children(func: BuilderNodeSortFunc): void;
            /**
             * Tokenize text added with xb_builder_node_set_text().
             *
             * When searching, libxmlb often has to tokenize strings before they can be
             * compared. This is done in the "fast path" and makes searching for non-ASCII
             * text much slower.
             *
             * Adding the tokens to the deduplicated string table allows much faster
             * searching at the expense of a ~5% size increase of the silo.
             *
             * This function adds all valid UTF-8 and ASCII search words generated from
             * the value of xb_builder_node_set_text().
             *
             * The transliteration locale (e.g. `en_GB`) is read from the `xml:lang`
             * node attribute if set.
             */
            tokenize_text(): void;
            /**
             * Traverses a tree starting from `self`. It calls the given function for each
             * node visited.
             *
             * The traversal can be halted at any point by returning TRUE from `func`.
             * @param order a #GTraverseType, e.g. %G_PRE_ORDER
             * @param flags a #GTraverseFlags, e.g. %G_TRAVERSE_ALL
             * @param max_depth the maximum depth of the traversal, or -1 for no limit
             * @param func a #XbBuilderNodeTraverseFunc
             */
            traverse(
                order: GLib.TraverseType,
                flags: GLib.TraverseFlags,
                max_depth: number,
                func: BuilderNodeTraverseFunc,
            ): void;
            /**
             * Unlinks a #XbBuilderNode from a tree, resulting in two separate trees.
             *
             * This should not be used from the function called by xb_builder_node_traverse()
             * otherwise the entire tree will not be traversed.
             *
             * Instead use xb_builder_node_add_flag(bn,XB_BUILDER_NODE_FLAG_IGNORE);
             */
            unlink(): void;
        }

        module BuilderSource {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BuilderSource extends GObject.Object {
            static $gtype: GObject.GType<BuilderSource>;

            // Constructors

            constructor(properties?: Partial<BuilderSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): BuilderSource;

            // Methods

            /**
             * Adds a function that will get run on every #XbBuilderNode compile creates
             * with this source.
             * @param fixup a #XbBuilderFixup
             */
            add_fixup(fixup: BuilderFixup): void;
            /**
             * Loads XML data and begins to build a #XbSilo.
             * @param bytes a #GBytes
             * @param flags some #XbBuilderSourceFlags, e.g. %XB_BUILDER_SOURCE_FLAG_LITERAL_TEXT
             * @returns %TRUE for success
             */
            load_bytes(bytes: GLib.Bytes | Uint8Array, flags: BuilderSourceFlags): boolean;
            /**
             * Loads an optionally compressed XML file to build a #XbSilo.
             * @param file a #GFile
             * @param flags some #XbBuilderSourceFlags, e.g. %XB_BUILDER_SOURCE_FLAG_LITERAL_TEXT
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE for success
             */
            load_file(file: Gio.File, flags: BuilderSourceFlags, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Loads XML data and begins to build a #XbSilo.
             * @param xml XML data
             * @param flags some #XbBuilderSourceFlags, e.g. %XB_BUILDER_SOURCE_FLAG_LITERAL_TEXT
             * @returns %TRUE for success
             */
            load_xml(xml: string, flags: BuilderSourceFlags): boolean;
            /**
             * Sets an optional information metadata node on the root node.
             * @param info a #XbBuilderNode
             */
            set_info(info?: BuilderNode | null): void;
            /**
             * Sets an optional prefix on the root node. This makes any nodes added
             * using this source reside under a common shared parent node.
             * @param prefix an XPath prefix, e.g. `installed`
             */
            set_prefix(prefix?: string | null): void;
        }

        module BuilderSourceCtx {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BuilderSourceCtx extends GObject.Object {
            static $gtype: GObject.GType<BuilderSourceCtx>;

            // Constructors

            constructor(properties?: Partial<BuilderSourceCtx.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the data currently being processed.
             *
             * If the #XbBuilderSourceCtx is backed by a file, the returned #GBytes may be
             * memory-mapped, and the backing file must not be modified until the #GBytes is
             * destroyed.
             * @param cancellable a #GCancellable, or %NULL
             * @returns a #GBytes
             */
            get_bytes(cancellable?: Gio.Cancellable | null): GLib.Bytes;
            /**
             * Returns the basename of the file currently being processed.
             * @returns a basename, or %NULL if unset
             */
            get_filename(): string | null;
            /**
             * Returns the input stream currently being processed.
             * @returns a #GInputStream
             */
            get_stream(): Gio.InputStream;
        }

        module Machine {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Machine extends GObject.Object {
            static $gtype: GObject.GType<Machine>;

            // Constructors

            constructor(properties?: Partial<Machine.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Machine;

            // Methods

            /**
             * Adds a new function to the virtual machine. Registered functions can then be
             * used as methods.
             *
             * The `method_cb` must not modify the stack it’s passed unless it’s going to
             * succeed. In particular, if a method call is not optimisable, it must not
             * modify the stack it’s passed.
             *
             * You need to add a custom function using xb_machine_add_method() before using
             * methods that may reference it, for example xb_machine_add_opcode_fixup().
             * @param name function name, e.g. `contains`
             * @param n_opcodes minimum number of opcodes required on the stack
             * @param method_cb function to call
             */
            add_method(name: string, n_opcodes: number, method_cb: MachineMethodFunc): void;
            /**
             * Adds an opcode fixup. Fixups can be used to optimize the stack of opcodes or
             * to add support for a nonstandard feature, for instance supporting missing
             * attributes to functions.
             * @param opcodes_sig signature, e.g. `INTE,TEXT`
             * @param fixup_cb callback
             */
            add_opcode_fixup(opcodes_sig: string, fixup_cb: MachineOpcodeFixupFunc): void;
            /**
             * Adds a new operator to the virtual machine. Operators can then be used
             * instead of explicit methods like `eq()`.
             *
             * You need to add a custom operator using xb_machine_add_operator() before
             * using xb_machine_parse(). Common operators like `<=` and `=` are built-in
             * and do not have to be added manually.
             * @param str operator string, e.g. `==`
             * @param name function name, e.g. `contains`
             */
            add_operator(str: string, name: string): void;
            /**
             * Adds a text handler. This allows the virtual machine to support nonstandard
             * encoding or shorthand mnemonics for standard functions.
             * @param handler_cb callback
             */
            add_text_handler(handler_cb: MachineTextHandlerFunc): void;
            /**
             * Gets the maximum stack size used for the machine.
             * @returns integer
             */
            get_stack_size(): number;
            /**
             * Initialises a stack allocated #XbOpcode for a registered function.
             * Some standard functions are registered by default, for instance `eq` or `ge`.
             * Other functions have to be added using xb_machine_add_method().
             * @param func_name function name, e.g. `eq`
             * @returns %TRUE if the function was found and the opcode initialised, %FALSE    otherwise
             */
            opcode_func_init(func_name: string): [boolean, Opcode];
            /**
             * Parses an XPath predicate. Not all of XPath 1.0 or XPath 1.0 is supported,
             * and new functions and mnemonics can be added using xb_machine_add_method()
             * and xb_machine_add_text_handler().
             * @param text predicate to parse, e.g. `contains(text(),'xyx')`
             * @param text_len length of @text, or -1 if @text is `NUL` terminated
             * @returns opcodes, or %NULL on error
             */
            parse(text: string, text_len: number): Stack;
            /**
             * Parses an XPath predicate. Not all of XPath 1.0 or XPath 1.0 is supported,
             * and new functions and mnemonics can be added using xb_machine_add_method()
             * and xb_machine_add_text_handler().
             * @param text predicate to parse, e.g. `contains(text(),'xyx')`
             * @param text_len length of @text, or -1 if @text is `NUL` terminated
             * @param flags #XbMachineParseFlags, e.g. %XB_MACHINE_PARSE_FLAG_OPTIMIZE
             * @returns opcodes, or %NULL on error
             */
            parse_full(text: string, text_len: number, flags: MachineParseFlags): Stack;
            /**
             * Runs a set of opcodes on the virtual machine.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbMachine.
             * @param opcodes a #XbStack of opcodes
             * @param exec_data per-run user data that is passed to all the #XbMachineMethodFunc functions
             * @returns a new #XbOpcode, or %NULL
             */
            run(opcodes: Stack, exec_data?: any | null): [boolean, boolean];
            /**
             * Runs a set of opcodes on the virtual machine, using the bound values given in
             * `bindings` to substitute for bound opcodes.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbMachine.
             * @param opcodes a #XbStack of opcodes
             * @param bindings values bound to opcodes of type     %XB_OPCODE_KIND_BOUND_INTEGER or %XB_OPCODE_KIND_BOUND_TEXT, or %NULL if     the query doesn’t need any bound values
             * @param exec_data per-run user data that is passed to all the #XbMachineMethodFunc functions
             * @returns a new #XbOpcode, or %NULL
             */
            run_with_bindings(
                opcodes: Stack,
                bindings: ValueBindings | null,
                exec_data?: any | null,
            ): [boolean, boolean];
            /**
             * Sets the debug level of the virtual machine.
             * @param flags #XbMachineDebugFlags, e.g. %XB_MACHINE_DEBUG_FLAG_SHOW_STACK
             */
            set_debug_flags(flags: MachineDebugFlags): void;
            /**
             * Sets the maximum stack size used for the machine.
             *
             * The stack size will be affective for new jobs started with xb_machine_run()
             * and xb_machine_parse().
             * @param stack_size integer
             */
            set_stack_size(stack_size: number): void;
            /**
             * Pops an opcode from the stack.
             * @param stack a #XbStack
             * @returns %TRUE if popping succeeded, %FALSE if the stack was empty already
             */
            stack_pop(stack: Stack): [boolean, Opcode | null];
            /**
             * Pushes a new empty opcode onto the end of the stack. A pointer to the opcode
             * is returned in `opcode_out` so that the caller can initialise it.
             *
             * If the stack reaches its maximum size, %G_IO_ERROR_NO_SPACE will be returned.
             * @param stack a #XbStack
             * @returns %TRUE if a new empty opcode was returned, or %FALSE if the stack has    reached its maximum size
             */
            stack_push(stack: Stack): [boolean, Opcode | null];
            /**
             * Adds an integer literal to the stack.
             *
             * Errors are as for xb_machine_stack_push().
             * @param stack a #XbStack
             * @param val integer literal
             * @returns %TRUE on success, %FALSE otherwise
             */
            stack_push_integer(stack: Stack, val: number): boolean;
            /**
             * Adds a text literal to the stack, copying `str`.
             *
             * Errors are as for xb_machine_stack_push().
             * @param stack a #XbStack
             * @param str text literal
             * @returns %TRUE on success, %FALSE otherwise
             */
            stack_push_text(stack: Stack, str: string): boolean;
            /**
             * Adds static text literal to the stack.
             *
             * Errors are as for xb_machine_stack_push().
             * @param stack a #XbStack
             * @param str text literal
             * @returns %TRUE on success, %FALSE otherwise
             */
            stack_push_text_static(stack: Stack, str: string): boolean;
            /**
             * Adds a stolen text literal to the stack.
             *
             * Errors are as for xb_machine_stack_push().
             * @param stack a #XbStack
             * @param str text literal
             * @returns %TRUE on success, %FALSE otherwise
             */
            stack_push_text_steal(stack: Stack, str: string): boolean;
        }

        module Node {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Node extends GObject.Object {
            static $gtype: GObject.GType<Node>;

            // Constructors

            constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Exports the node back to XML.
             * @param flags some #XbNodeExportFlags, e.g. #XB_NODE_EXPORT_FLAG_NONE
             * @returns XML data, or %NULL for an error
             */
            ['export'](flags: NodeExportFlags): string;
            /**
             * Gets some attribute text data for a specific node.
             * @param name an attribute name, e.g. "type"
             * @returns a string, or %NULL for unset
             */
            get_attr(name: string): string;
            /**
             * Gets some attribute text data for a specific node.
             * @param name an attribute name, e.g. `type`
             * @returns a guint64, or %G_MAXUINT64 if unfound
             */
            get_attr_as_uint(name: string): number;
            /**
             * Gets the first child node for the current node.
             * @returns a #XbNode, or %NULL
             */
            get_child(): Node;
            /**
             * Gets all the children for the current node.
             * @returns an array of children
             */
            get_children(): Node[];
            /**
             * Gets any data that has been set on the node using xb_node_set_data().
             *
             * This will only work across queries to the associated silo if the silo has
             * its #XbSilo:enable-node-cache property set to %TRUE. Otherwise a new #XbNode
             * may be constructed for future queries which return the same element as a
             * result.
             * @param key a string key, e.g. `fwupd::RemoteId`
             * @returns a #GBytes, or %NULL if not found
             */
            get_data(key: string): GLib.Bytes;
            // Conflicted with GObject.Object.get_data
            get_data(...args: never[]): any;
            /**
             * Gets the depth of the node to a root.
             * @returns a integer, where 0 is the root node itself.
             */
            get_depth(): number;
            /**
             * Gets the element name for a specific node.
             * @returns a string, or %NULL for the root node
             */
            get_element(): string;
            /**
             * Gets the next sibling node for the current node.
             * @returns a #XbNode, or %NULL
             */
            get_next(): Node;
            /**
             * Gets the parent node for the current node.
             * @returns a #XbNode, or %NULL
             */
            get_parent(): Node;
            /**
             * Gets the root node for the node.
             * @returns a #XbNode, or %NULL
             */
            get_root(): Node;
            /**
             * Gets the #XbSilo for the node.
             * @returns a #XbSilo
             */
            get_silo(): Silo;
            /**
             * Gets the tail data for a specific node.
             * @returns a string, or %NULL for unset
             */
            get_tail(): string;
            /**
             * Gets the text data for a specific node.
             * @returns a string, or %NULL for unset
             */
            get_text(): string;
            /**
             * Gets some attribute text data for a specific node.
             * @returns a guint64, or %G_MAXUINT64 if unfound
             */
            get_text_as_uint(): number;
            /**
             * Searches the silo using an XPath query, returning up to `limit` results.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param xpath an XPath, e.g. `id[abe.desktop]`
             * @param limit maximum number of results to return, or 0 for "all"
             * @returns results, or %NULL if unfound
             */
            query(xpath: string, limit: number): Node[];
            /**
             * Searches the node using an XPath query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @param name an attribute name, e.g. `type`
             * @returns a string, or %NULL if unfound
             */
            query_attr(xpath: string, name: string): string;
            /**
             * Searches the node using an XPath query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @param name an attribute name, e.g. `type`
             * @returns a #guint64, or %G_MAXUINT64 if unfound
             */
            query_attr_as_uint(xpath: string, name: string): number;
            /**
             * Searches the node using an XPath query, returning an XML string of the
             * result and any children.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @returns a string, or %NULL if unfound
             */
            query_export(xpath: string): string;
            /**
             * Searches the node using an XPath query, returning up to one result.
             *
             * Please note: Only a tiny subset of XPath 1.0 is supported.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @returns a #XbNode, or %NULL if unfound
             */
            query_first(xpath: string): Node;
            /**
             * Searches the silo using a prepared query, returning up to one result. To
             * search using a query with bound values, use
             * xb_node_query_first_with_context().
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param query an #XbQuery
             * @returns a #XbNode, or %NULL if unfound
             */
            query_first_full(query: Query): Node;
            /**
             * Searches the silo using a prepared query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param query an #XbQuery
             * @param context context including values bound to opcodes of type     %XB_OPCODE_KIND_BOUND_INTEGER or %XB_OPCODE_KIND_BOUND_TEXT, or %NULL if     the query doesn’t need any context
             * @returns a #XbNode, or %NULL if unfound
             */
            query_first_with_context(query: Query, context?: QueryContext | null): Node;
            /**
             * Searches the silo using a prepared query. To search using a query with
             * bound values, use xb_node_query_with_context().
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param query an #XbQuery
             * @returns results, or %NULL if unfound
             */
            query_full(query: Query): Node[];
            /**
             * Searches the node using an XPath query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @returns a string, or %NULL if unfound
             */
            query_text(xpath: string): string;
            /**
             * Searches the node using an XPath query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @returns a #guint64, or %G_MAXUINT64 if unfound
             */
            query_text_as_uint(xpath: string): number;
            /**
             * Searches the silo using a prepared query, substituting values from the
             * bindings in `context` for bound opcodes as needed.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param query an #XbQuery
             * @param context context including values bound to opcodes of type     %XB_OPCODE_KIND_BOUND_INTEGER or %XB_OPCODE_KIND_BOUND_TEXT, or %NULL if     the query doesn’t need any context
             * @returns results, or %NULL if unfound
             */
            query_with_context(query: Query, context?: QueryContext | null): Node[];
            /**
             * Sets some data on the node which can be retrieved using xb_node_get_data().
             *
             * This will only work across queries to the associated silo if the silo has
             * its #XbSilo:enable-node-cache property set to %TRUE. Otherwise a new #XbNode
             * may be constructed for future queries which return the same element as a
             * result.
             * @param key a string key, e.g. `fwupd::RemoteId`
             * @param data a #GBytes
             */
            set_data(key: string, data: GLib.Bytes | Uint8Array): void;
            // Conflicted with GObject.Object.set_data
            set_data(...args: never[]): any;
            /**
             * Traverses a tree starting from `self`. It calls the given functions for each
             * node visited. This allows transmogrification of the source, for instance
             * converting the XML description to PangoMarkup or even something completely
             * different like markdown.
             *
             * The traversal can be halted at any point by returning TRUE from `func`.
             * @param func_text (allow-none): a #XbBuilderNodeTraverseFunc
             * @param func_tail (allow-none): a #XbBuilderNodeTraverseFunc
             * @returns %TRUE if all nodes were visited
             */
            transmogrify(func_text: NodeTransmogrifyFunc, func_tail: NodeTransmogrifyFunc): boolean;
        }

        module Query {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Query extends GObject.Object {
            static $gtype: GObject.GType<Query>;

            // Constructors

            constructor(properties?: Partial<Query.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](silo: Silo, xpath: string): Query;

            static new_full(silo: Silo, xpath: string, flags: QueryFlags): Query;

            // Methods

            /**
             * Assigns a string to a bound value specified using `?`.
             * @param idx an integer index
             * @param str string to assign to the bound variable
             * @returns %TRUE if the @idx existed
             */
            bind_str(idx: number, str: string): boolean;
            /**
             * Assigns a string to a bound value specified using `?`.
             * @param idx an integer index
             * @param val value to assign to the bound variable
             * @returns %TRUE if the @idx existed
             */
            bind_val(idx: number, val: number): boolean;
            /**
             * Gets the flags used for this query.
             * @returns #XbQueryFlags, default %XB_QUERY_FLAG_NONE
             */
            get_flags(): QueryFlags;
            /**
             * Gets the results limit on this query, where 0 is 'all'.
             * @returns integer, default 0
             */
            get_limit(): number;
            /**
             * Gets the XPath string that created the query.
             * @returns string
             */
            get_xpath(): string;
            /**
             * Sets the flags to use for this query.
             * @param flags a #XbQueryFlags, e.g. %XB_QUERY_FLAG_USE_INDEXES
             */
            set_flags(flags: QueryFlags): void;
            /**
             * Sets the results limit on this query, where 0 is 'all'.
             * @param limit integer
             */
            set_limit(limit: number): void;
        }

        module Silo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                enable_node_cache: boolean;
                enableNodeCache: boolean;
                guid: string;
                valid: boolean;
            }
        }

        class Silo extends GObject.Object {
            static $gtype: GObject.GType<Silo>;

            // Properties

            /**
             * Whether to cache all #XbNode instances ever constructed in a single
             * cache in the #XbSilo, so that the same #XbNode instance is always
             * returned in query results for a given XPath. This is a form of
             * memoisation, and allows xb_node_get_data() and xb_node_set_data() to
             * be used.
             *
             * This is enabled by default to preserve compatibility with older
             * versions of libxmlb, but most clients will want to disable it. It
             * adds a large memory overhead (no #XbNode is ever finalised) but
             * achieves moderately low hit rates for typical XML parsing workloads
             * where most nodes are accessed only once or twice as they are
             * processed and then processing moves on to other nodes.
             *
             * This property can only be changed before the #XbSilo is passed
             * between threads. Changing it is not thread-safe.
             */
            get enable_node_cache(): boolean;
            set enable_node_cache(val: boolean);
            /**
             * Whether to cache all #XbNode instances ever constructed in a single
             * cache in the #XbSilo, so that the same #XbNode instance is always
             * returned in query results for a given XPath. This is a form of
             * memoisation, and allows xb_node_get_data() and xb_node_set_data() to
             * be used.
             *
             * This is enabled by default to preserve compatibility with older
             * versions of libxmlb, but most clients will want to disable it. It
             * adds a large memory overhead (no #XbNode is ever finalised) but
             * achieves moderately low hit rates for typical XML parsing workloads
             * where most nodes are accessed only once or twice as they are
             * processed and then processing moves on to other nodes.
             *
             * This property can only be changed before the #XbSilo is passed
             * between threads. Changing it is not thread-safe.
             */
            get enableNodeCache(): boolean;
            set enableNodeCache(val: boolean);
            get guid(): string;
            set guid(val: string);
            get valid(): boolean;

            // Constructors

            constructor(properties?: Partial<Silo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Silo;

            static new_from_xml(xml: string): Silo;

            // Methods

            /**
             * Exports the silo back to XML.
             * @param flags some #XbNodeExportFlags, e.g. #XB_NODE_EXPORT_FLAG_NONE
             * @returns XML data, or %NULL for an error
             */
            ['export'](flags: NodeExportFlags): string;
            /**
             * Exports the silo back to an XML file.
             * @param file a #GFile
             * @param flags some #XbNodeExportFlags, e.g. #XB_NODE_EXPORT_FLAG_NONE
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE on success
             */
            export_file(file: Gio.File, flags: NodeExportFlags, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets the backing object that created the blob.
             *
             * You should never *ever* modify this data.
             * @returns A #GBytes, or %NULL if never set
             */
            get_bytes(): GLib.Bytes;
            /**
             * Get #XbSilo:enable-node-cache.
             */
            get_enable_node_cache(): boolean;
            /**
             * Gets the GUID used to identify this silo.
             * @returns a string, otherwise %NULL
             */
            get_guid(): string;
            /**
             * Returns the profiling data. This will only return profiling text if
             * xb_silo_set_profile_flags() was used with %XB_SILO_PROFILE_FLAG_APPEND.
             * @returns text profiling data
             */
            get_profile_string(): string;
            /**
             * Gets the root node for the silo. (MIGHT BE MORE).
             * @returns A #XbNode, or %NULL for an error
             */
            get_root(): Node;
            /**
             * Gets the number of nodes in the silo.
             * @returns a integer, or 0 is an empty blob
             */
            get_size(): number;
            /**
             * Invalidates a silo. Future calls xb_silo_is_valid() will return %FALSE.
             */
            invalidate(): void;
            /**
             * Checks is the silo is valid. The usual reason the silo is invalidated is
             * when the backing mmapped file has changed, or one of the imported files have
             * been modified.
             * @returns %TRUE if valid
             */
            is_valid(): boolean;
            /**
             * Loads a silo from memory location.
             * @param blob a #GBytes
             * @param flags #XbSiloLoadFlags, e.g. %XB_SILO_LOAD_FLAG_NONE
             * @returns %TRUE for success, otherwise @error is set.
             */
            load_from_bytes(blob: GLib.Bytes | Uint8Array, flags: SiloLoadFlags): boolean;
            /**
             * Loads a silo from file.
             * @param file a #GFile
             * @param flags #XbSiloLoadFlags, e.g. %XB_SILO_LOAD_FLAG_NONE
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE for success, otherwise @error is set.
             */
            load_from_file(file: Gio.File, flags: SiloLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Create an #XbQuery from the given `xpath` XPath string, or return it from the
             * query cache in the #XbSilo.
             *
             * `xpath` must be valid: it is a programmer error if creating the query fails
             * (i.e. if xb_query_new() returns an error).
             *
             * This function is thread-safe.
             * @param xpath an XPath query string
             * @returns an #XbQuery representing @xpath
             */
            lookup_query(xpath: string): Query;
            /**
             * Searches the silo using an XPath query, returning up to `limit` results.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param xpath an XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @param limit maximum number of results to return, or 0 for "all"
             * @returns results, or %NULL if unfound
             */
            query(xpath: string, limit: number): Node[];
            /**
             * Adds the `attr()` or `text()` results of a query to the index.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @param attr Attribute name, e.g. `type`, or NULL
             * @returns %TRUE for success
             */
            query_build_index(xpath: string, attr?: string | null): boolean;
            /**
             * Searches the silo using an XPath query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a tiny subset of XPath 1.0 is supported.
             * @param xpath An XPath, e.g. `/components/component[@type=desktop]/id[abe.desktop]`
             * @returns a #XbNode, or %NULL if unfound
             */
            query_first(xpath: string): Node;
            /**
             * Searches the silo using an XPath query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a tiny subset of XPath 1.0 is supported.
             * @param query an #XbQuery
             * @returns a #XbNode, or %NULL if unfound
             */
            query_first_full(query: Query): Node;
            /**
             * Searches the silo using an XPath query, returning up to one result.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a tiny subset of XPath 1.0 is supported.
             * @param query an #XbQuery
             * @param context context including values bound to opcodes of type     %XB_OPCODE_KIND_BOUND_INTEGER or %XB_OPCODE_KIND_BOUND_TEXT, or %NULL if     the query doesn’t need any context
             * @returns a #XbNode, or %NULL if unfound
             */
            query_first_with_context(query: Query, context?: QueryContext | null): Node;
            /**
             * Searches the silo using an XPath query.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param query an #XbQuery
             * @returns results, or %NULL if unfound
             */
            query_full(query: Query): Node[];
            /**
             * Searches the silo using an XPath query.
             *
             * It is safe to call this function from a different thread to the one that
             * created the #XbSilo.
             *
             * Please note: Only a subset of XPath is supported.
             * @param query an #XbQuery
             * @param context context including values bound to opcodes of type     %XB_OPCODE_KIND_BOUND_INTEGER or %XB_OPCODE_KIND_BOUND_TEXT, or %NULL if     the query doesn’t need any context
             * @returns results, or %NULL if unfound
             */
            query_with_context(query: Query, context?: QueryContext | null): Node[];
            /**
             * Saves a silo to a file.
             * @param file a #GFile
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE for success, otherwise @error is set.
             */
            save_to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set #XbSilo:enable-node-cache.
             *
             * This is not thread-safe, and can only be called before the #XbSilo is passed
             * between threads.
             * @param enable_node_cache %TRUE to enable the node cache, %FALSE otherwise
             */
            set_enable_node_cache(enable_node_cache: boolean): void;
            /**
             * Enables or disables the collection of profiling data.
             * @param profile_flags some #XbSiloProfileFlags, e.g. %XB_SILO_PROFILE_FLAG_DEBUG
             */
            set_profile_flags(profile_flags: SiloProfileFlags): void;
            /**
             * Converts the silo to an internal string representation. This is only
             * really useful for debugging #XbSilo itself.
             * @returns A string, or %NULL for an error
             */
            to_string(): string;
            /**
             * Adds a file monitor to the silo. If the file or directory for `file` changes
             * then the silo will be invalidated.
             *
             * The monitor will internally use the #GMainContext which was the thread
             * default when the #XbSilo was created, so that #GMainContext must be iterated
             * for monitoring to work.
             * @param file a #GFile
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE for success, otherwise @error is set.
             */
            watch_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
        }

        type BuilderClass = typeof Builder;
        type BuilderFixupClass = typeof BuilderFixup;
        type BuilderNodeClass = typeof BuilderNode;
        type BuilderSourceClass = typeof BuilderSource;
        type BuilderSourceCtxClass = typeof BuilderSourceCtx;
        type MachineClass = typeof Machine;
        /**
         * A #XbNodeAttrIter structure represents an iterator that can be used
         * to iterate over the attributes of a #XbNode. #XbNodeAttrIter
         * structures are typically allocated on the stack and then initialized
         * with xb_node_attr_iter_init().
         *
         * The iteration order of a #XbNodeAttrIter is not defined.
         */
        class NodeAttrIter {
            static $gtype: GObject.GType<NodeAttrIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Methods

            /**
             * Initializes a name/value pair iterator for the node attributes
             * and associates it with `self`.
             * The #XbNodeAttrIter structure is typically allocated on the stack
             * and does not need to be freed explicitly.
             * @param self a #XbNode
             */
            init(self: Node): void;
            /**
             * Returns the current attribute name and value and advances the iterator.
             * Example:
             *
             * ```c
             * XbNodeAttrIter iter;
             * const gchar *attr_name, *attr_value;
             *
             * xb_node_attr_iter_init (&iter, node);
             * while (xb_node_attr_iter_next (&iter, &attr_name, &attr_value)) {
             *     // use attr_name and attr_value; no need to free them
             * }
             * ```
             *
             * @returns %TRUE if there are more attributes.
             */
            next(): [boolean, string, string];
        }

        /**
         * A #XbNodeChildIter structure represents an iterator that can be used
         * to iterate over the children of a #XbNode. #XbNodeChildIter
         * structures are typically allocated on the stack and then initialized
         * with xb_node_child_iter_init().
         */
        class NodeChildIter {
            static $gtype: GObject.GType<NodeChildIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Methods

            /**
             * Initializes a child iterator for the node's children and associates
             * it with `self`.
             * The #XbNodeChildIter structure is typically allocated on the stack
             * and does not need to be freed explicitly.
             * @param self a #XbNode
             */
            init(self: Node): void;
            /**
             * Returns the current child and advances the iterator.
             * The retrieved #XbNode child needs to be dereferenced with g_object_unref().
             * Example:
             *
             * ```c
             * XbNodeChildIter iter;
             * g_autoptr(XbNode) child = NULL;
             *
             * xb_node_child_iter_init (&iter, node);
             * while (xb_node_child_iter_next (&iter, &child)) {
             *     // do something with the node child
             *     g_clear_pointer (&child, g_object_unref);
             * }
             * ```
             *
             * @returns %FALSE if the last child has been reached.
             */
            next(): [boolean, Node | null];
        }

        type NodeClass = typeof Node;
        abstract class Opcode {
            static $gtype: GObject.GType<Opcode>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Converts a string to an opcode kind.
             * @param str a string, e.g. `FUNC`
             */
            static kind_from_string(str: string): OpcodeKind;
            /**
             * Converts the opcode kind to a string.
             * @param kind a #XbOpcodeKind, e.g. %XB_OPCODE_KIND_FUNCTION
             */
            static kind_to_string(kind: OpcodeKind): string;

            // Methods

            /**
             * Checks if the opcode can be compared using the string value.
             * @returns #%TRUE if this opcode can be compared as an string
             */
            cmp_str(): boolean;
            /**
             * Checks if the opcode can be compared using the integer value.
             * @returns #%TRUE if this opcode can be compared as an integer
             */
            cmp_val(): boolean;
            /**
             * Initialises a stack allocated #XbOpcode to contain a specific function.
             * Custom functions can be registered using xb_machine_add_func() and retrieved
             * using xb_machine_opcode_func_new().
             * @param func a function index
             */
            func_init(func: number): void;
            /**
             * Gets the opcode kind.
             * @returns a #XbOpcodeKind, e.g. %XB_OPCODE_KIND_INTEGER
             */
            get_kind(): OpcodeKind;
            /**
             * Gets the string value stored on the opcode.
             * @returns a string, or %NULL if unset
             */
            get_str(): string;
            /**
             * Gets the integer value stored in the opcode. This may be a function ID,
             * a index into the string table or a literal integer.
             * @returns value, or 0 for unset.
             */
            get_val(): number;
            /**
             * Initialises a stack allocated #XbOpcode to contain an integer literal.
             * @param val a integer value
             */
            integer_init(val: number): void;
            /**
             * Initialises a stack allocated #XbOpcode to contain a text literal.
             * The `str` argument is copied internally and is not tied to the lifecycle of
             * the #XbOpcode.
             * @param str a string
             */
            text_init(str: string): void;
            /**
             * Initialises a stack allocated #XbOpcode to contain a text literal, where
             * `str` is either static text or will outlive the #XbOpcode lifecycle.
             * @param str a string
             */
            text_init_static(str: string): void;
            /**
             * Initialises a stack allocated #XbOpcode to contain a text literal, stealing
             * the `str`. Once the opcode is finalized g_free() will be called on `str`.
             * @param str a string
             */
            text_init_steal(str: string): void;
            /**
             * Returns a string representing the specific opcode.
             * @returns text
             */
            to_string(): string;
        }

        type QueryClass = typeof Query;
        /**
         * An opaque struct which contains context for executing a query in, such as the
         * number of results to return, or values to bind to query placeholders.
         */
        class QueryContext {
            static $gtype: GObject.GType<QueryContext>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Methods

            /**
             * Clear an #XbQueryContext, freeing any allocated memory it points to.
             *
             * After this function has been called, the contents of the #XbQueryContext are
             * undefined, and it’s only safe to call xb_query_context_init() on it.
             */
            clear(): void;
            /**
             * Copy `self` into a new heap-allocated #XbQueryContext instance.
             * @returns a copy of @self
             */
            copy(): QueryContext;
            /**
             * Free a heap-allocated #XbQueryContext instance. This should be used on
             * #XbQueryContext instances created with xb_query_context_copy().
             *
             * For stack-allocated instances, xb_query_context_clear() should be used
             * instead.
             */
            free(): void;
            /**
             * Get the #XbValueBindings for this query context.
             * @returns bindings
             */
            get_bindings(): ValueBindings;
            /**
             * Get the flags set on the context. See xb_query_context_set_flags().
             * @returns query flags
             */
            get_flags(): QueryFlags;
            /**
             * Get the limit on the number of query results. See
             * xb_query_context_set_limit().
             * @returns limit on results, or `0` if unlimited
             */
            get_limit(): number;
            /**
             * Initialise a stack-allocated #XbQueryContext struct so it can be used.
             *
             * Stack-allocated #XbQueryContext instances should be freed once finished
             * with, using xb_query_context_clear() (or `g_auto(XbQueryContext)`, which is
             * equivalent).
             */
            init(): void;
            /**
             * Set flags which affect the behaviour of the query.
             * @param flags query flags, or %XB_QUERY_FLAG_NONE for none
             */
            set_flags(flags: QueryFlags): void;
            /**
             * Set the limit on the number of results to return from the query.
             * @param limit number of query results to return, or `0` for unlimited
             */
            set_limit(limit: number): void;
        }

        type SiloClass = typeof Silo;
        abstract class Stack {
            static $gtype: GObject.GType<Stack>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Pops an opcode off the stack.
             * @returns %TRUE if popping succeeded, %FALSE if the stack was empty already
             */
            pop(): [boolean, Opcode | null];
            /**
             * Pushes a new empty opcode onto the end of the stack. A pointer to the opcode
             * is returned in `opcode_out` so that the caller can initialise it. This must be
             * done before the stack is next used as, for performance reasons, the newly
             * pushed opcode is not zero-initialised.
             * @returns %TRUE if a new empty opcode was returned, or %FALSE if the stack has    reached its maximum size
             */
            push(): [boolean, Opcode | null];
            /**
             * Returns a string representing a stack.
             * @returns text
             */
            to_string(): string;
        }

        /**
         * An opaque struct which contains values bound to a query.
         */
        class ValueBindings {
            static $gtype: GObject.GType<ValueBindings>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Methods

            /**
             * Bind `str` to `idx` in the value bindings.
             *
             * This will overwrite any previous binding at `idx`. It will take ownership of
             * `str,` and an appropriate `destroy_func` must be provided to free `str` once the
             * binding is no longer needed. `destroy_func` will be called exactly once at
             * some point before the #XbValueBindings is cleared or freed.
             * @param idx 0-based index to bind to
             * @param str a string to bind to @idx
             * @param destroy_func function to free @str
             */
            bind_str(idx: number, str: string, destroy_func?: GLib.DestroyNotify | null): void;
            /**
             * Bind `val` to `idx` in the value bindings.
             *
             * This will overwrite any previous binding at `idx`.
             * @param idx 0-based index to bind to
             * @param val an integer to bind to @idx
             */
            bind_val(idx: number, val: number): void;
            /**
             * Clear an #XbValueBindings, freeing any allocated memory it points to.
             *
             * After this function has been called, the contents of the #XbValueBindings are
             * undefined, and it’s only safe to call xb_value_bindings_init() on it.
             */
            clear(): void;
            /**
             * Copy `self` into a new heap-allocated #XbValueBindings instance.
             * @returns a copy of @self
             */
            copy(): ValueBindings;
            /**
             * Copies the value bound at `idx` on `self` to `dest_idx` on `dest`. If no value is
             * bound at `idx,` `dest` is not modified and %FALSE is returned.
             *
             * `dest` must be initialised. If a binding already exists at `dest_idx,` it will
             * be overwritten.
             * @param idx 0-based index to look up the binding from in @self
             * @param dest an #XbValueBindings to copy to
             * @param dest_idx 0-based index to copy the binding to in @dest
             * @returns %TRUE if @idx was bound, %FALSE otherwise
             */
            copy_binding(idx: number, dest: ValueBindings, dest_idx: number): boolean;
            /**
             * Free a heap-allocated #XbValueBindings instance. This should be used on
             * #XbValueBindings instances created with xb_value_bindings_copy().
             *
             * For stack-allocated instances, xb_value_bindings_clear() should be used
             * instead.
             */
            free(): void;
            /**
             * Initialise a stack-allocated #XbValueBindings struct so it can be used.
             *
             * Stack-allocated #XbValueBindings instances should be freed once finished
             * with, using xb_value_bindings_clear() (or `g_auto(XbValueBindings)`, which is
             * equivalent).
             */
            init(): void;
            /**
             * Check whether a value has been bound to the given index using (for example)
             * xb_value_bindings_bind_str().
             * @param idx 0-based index of the binding to check
             * @returns %TRUE if a value is bound to @idx, %FALSE otherwise
             */
            is_bound(idx: number): boolean;
            /**
             * Initialises an #XbOpcode with the value bound to `idx,` if a value is bound.
             * If no value is bound, `opcode_out` is not touched and %FALSE is returned.
             *
             * `opcode_out` is initialised to point to the data inside the #XbValueBindings,
             * so must have a shorter lifetime than the #XbValueBindings. It will be of kind
             * %XB_OPCODE_KIND_BOUND_TEXT or %XB_OPCODE_KIND_BOUND_INTEGER.
             * @param idx 0-based index to look up the binding from
             * @returns %TRUE if @idx was bound, %FALSE otherwise
             */
            lookup_opcode(idx: number): [boolean, Opcode];
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

    export default Xmlb;
}

declare module 'gi://Xmlb' {
    import Xmlb20 from 'gi://Xmlb?version=2.0';
    export default Xmlb20;
}
// END
