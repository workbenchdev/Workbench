/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./javascriptcore-6.0.d.ts" />
/// <reference path="./gtk-4.0.d.ts" />
/// <reference path="./gsk-4.0.d.ts" />
/// <reference path="./graphene-1.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://WebKitWebProcessExtension?version=6.0' {
    // Module dependencies
    import type Soup from 'gi://Soup?version=3.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type JavaScriptCore from 'gi://JavaScriptCore?version=6.0';
    import type Gtk from 'gi://Gtk?version=4.0';
    import type Gsk from 'gi://Gsk?version=4.0';
    import type Graphene from 'gi://Graphene?version=1.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace WebKitWebProcessExtension {
        /**
         * WebKitWebProcessExtension-6.0
         */

        /**
         * Enum values used to denote the various levels of console messages.
         */

        /**
         * Enum values used to denote the various levels of console messages.
         */
        export namespace ConsoleMessageLevel {
            export const $gtype: GObject.GType<ConsoleMessageLevel>;
        }

        enum ConsoleMessageLevel {
            /**
             * Information message.
             */
            INFO,
            /**
             * Log message.
             */
            LOG,
            /**
             * Warning message.
             */
            WARNING,
            /**
             * Error message.
             */
            ERROR,
            /**
             * Debug message.
             */
            DEBUG,
        }
        /**
         * Enum values used to denote the various sources of console messages.
         */

        /**
         * Enum values used to denote the various sources of console messages.
         */
        export namespace ConsoleMessageSource {
            export const $gtype: GObject.GType<ConsoleMessageSource>;
        }

        enum ConsoleMessageSource {
            /**
             * Message produced by JavaScript.
             */
            JAVASCRIPT,
            /**
             * Network messages.
             */
            NETWORK,
            /**
             * Messages produced by console API.
             */
            CONSOLE_API,
            /**
             * Security messages.
             */
            SECURITY,
            /**
             * Other messages.
             */
            OTHER,
        }
        /**
         * Enum values used to denote the stock actions for
         * #WebKitContextMenuItem<!-- -->s
         */

        /**
         * Enum values used to denote the stock actions for
         * #WebKitContextMenuItem<!-- -->s
         */
        export namespace ContextMenuAction {
            export const $gtype: GObject.GType<ContextMenuAction>;
        }

        enum ContextMenuAction {
            /**
             * No action, used by separator menu items.
             */
            NO_ACTION,
            /**
             * Open current link.
             */
            OPEN_LINK,
            /**
             * Open current link in a new window.
             */
            OPEN_LINK_IN_NEW_WINDOW,
            /**
             * Download link destination.
             */
            DOWNLOAD_LINK_TO_DISK,
            /**
             * Copy link location to the clipboard.
             */
            COPY_LINK_TO_CLIPBOARD,
            /**
             * Open current image in a new window.
             */
            OPEN_IMAGE_IN_NEW_WINDOW,
            /**
             * Download current image.
             */
            DOWNLOAD_IMAGE_TO_DISK,
            /**
             * Copy current image to the clipboard.
             */
            COPY_IMAGE_TO_CLIPBOARD,
            /**
             * Copy current image location to the clipboard.
             */
            COPY_IMAGE_URL_TO_CLIPBOARD,
            /**
             * Open current frame in a new window.
             */
            OPEN_FRAME_IN_NEW_WINDOW,
            /**
             * Load the previous history item.
             */
            GO_BACK,
            /**
             * Load the next history item.
             */
            GO_FORWARD,
            /**
             * Stop any ongoing loading operation.
             */
            STOP,
            /**
             * Reload the contents of current view.
             */
            RELOAD,
            /**
             * Copy current selection the clipboard.
             */
            COPY,
            /**
             * Cut current selection to the clipboard.
             */
            CUT,
            /**
             * Paste clipboard contents.
             */
            PASTE,
            /**
             * Delete current selection.
             */
            DELETE,
            /**
             * Select all text.
             */
            SELECT_ALL,
            /**
             * Input methods menu.
             */
            INPUT_METHODS,
            /**
             * Unicode menu.
             */
            UNICODE,
            /**
             * A proposed replacement for a misspelled word.
             */
            SPELLING_GUESS,
            /**
             * An indicator that spellchecking found no proposed replacements.
             */
            NO_GUESSES_FOUND,
            /**
             * Causes the spellchecker to ignore the word for this session.
             */
            IGNORE_SPELLING,
            /**
             * Causes the spellchecker to add the word to the dictionary.
             */
            LEARN_SPELLING,
            /**
             * Ignore grammar.
             */
            IGNORE_GRAMMAR,
            /**
             * Font options menu.
             */
            FONT_MENU,
            /**
             * Bold.
             */
            BOLD,
            /**
             * Italic.
             */
            ITALIC,
            /**
             * Underline.
             */
            UNDERLINE,
            /**
             * Outline.
             */
            OUTLINE,
            /**
             * Open current element in the inspector.
             */
            INSPECT_ELEMENT,
            /**
             * Open current video element in a new window.
             */
            OPEN_VIDEO_IN_NEW_WINDOW,
            /**
             * Open current audio element in a new window.
             */
            OPEN_AUDIO_IN_NEW_WINDOW,
            /**
             * Copy video link location in to the clipboard.
             */
            COPY_VIDEO_LINK_TO_CLIPBOARD,
            /**
             * Copy audio link location in to the clipboard.
             */
            COPY_AUDIO_LINK_TO_CLIPBOARD,
            /**
             * Enable or disable media controls.
             */
            TOGGLE_MEDIA_CONTROLS,
            /**
             * Enable or disable media loop.
             */
            TOGGLE_MEDIA_LOOP,
            /**
             * Show current video element in fullscreen mode.
             */
            ENTER_VIDEO_FULLSCREEN,
            /**
             * Play current media element.
             */
            MEDIA_PLAY,
            /**
             * Pause current media element.
             */
            MEDIA_PAUSE,
            /**
             * Mute current media element.
             */
            MEDIA_MUTE,
            /**
             * Download video to disk. Since 2.2
             */
            DOWNLOAD_VIDEO_TO_DISK,
            /**
             * Download audio to disk. Since 2.2
             */
            DOWNLOAD_AUDIO_TO_DISK,
            /**
             * Insert an emoji. Since 2.26
             */
            INSERT_EMOJI,
            /**
             * Paste clipboard contents as plain text. Since 2.30
             */
            PASTE_AS_PLAIN_TEXT,
            /**
             * Custom action defined by applications.
             */
            CUSTOM,
        }
        /**
         * Enum values used to denote errors happening when sending user messages.
         */

        /**
         * Enum values used to denote errors happening when sending user messages.
         */
        export namespace UserMessageError {
            export const $gtype: GObject.GType<UserMessageError>;
        }

        enum UserMessageError {
            /**
             * The message was not handled by the receiver.
             */
            USER_MESSAGE_UNHANDLED_MESSAGE,
        }
        interface WebProcessExtensionInitializeFunction {
            (extension: WebProcessExtension): void;
        }
        interface WebProcessExtensionInitializeWithUserDataFunction {
            (extension: WebProcessExtension, user_data: GLib.Variant): void;
        }
        /**
         * Enum values with flags representing the context of a #WebKitHitTestResult.
         */

        /**
         * Enum values with flags representing the context of a #WebKitHitTestResult.
         */
        export namespace HitTestResultContext {
            export const $gtype: GObject.GType<HitTestResultContext>;
        }

        enum HitTestResultContext {
            /**
             * anywhere in the document.
             */
            DOCUMENT,
            /**
             * a hyperlink element.
             */
            LINK,
            /**
             * an image element.
             */
            IMAGE,
            /**
             * a video or audio element.
             */
            MEDIA,
            /**
             * an editable element
             */
            EDITABLE,
            /**
             * a scrollbar element.
             */
            SCROLLBAR,
            /**
             * a selected element. Since 2.8
             */
            SELECTION,
        }
        module ContextMenu {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Represents the context menu in a #WebKitWebView.
         *
         * #WebKitContextMenu represents a context menu containing
         * #WebKitContextMenuItem<!-- -->s in a #WebKitWebView.
         *
         * When a #WebKitWebView is about to display the context menu, it
         * emits the #WebKitWebView::context-menu signal, which has the
         * #WebKitContextMenu as an argument. You can modify it, adding new
         * submenus that you can create with webkit_context_menu_new(), adding
         * new #WebKitContextMenuItem<!-- -->s with
         * webkit_context_menu_prepend(), webkit_context_menu_append() or
         * webkit_context_menu_insert(), maybe after having removed the
         * existing ones with webkit_context_menu_remove_all().
         */
        class ContextMenu extends GObject.Object {
            static $gtype: GObject.GType<ContextMenu>;

            // Constructors

            constructor(properties?: Partial<ContextMenu.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ContextMenu;

            static new_with_items(items: ContextMenuItem[]): ContextMenu;

            // Methods

            /**
             * Adds `item` at the end of the `menu`.
             * @param item the #WebKitContextMenuItem to add
             */
            append(item: ContextMenuItem): void;
            /**
             * Gets the first item in the `menu`.
             * @returns the first #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
             */
            first(): ContextMenuItem;
            /**
             * Gets the #GdkEvent that triggered the context menu. This function only returns a valid
             * #GdkEvent when called for a #WebKitContextMenu passed to #WebKitWebView::context-menu
             * signal; in all other cases, %NULL is returned.
             *
             * The returned #GdkEvent is expected to be one of the following types:
             * <itemizedlist>
             * <listitem><para>
             * a #GdkEventButton of type %GDK_BUTTON_PRESS when the context menu was triggered with mouse.
             * </para></listitem>
             * <listitem><para>
             * a #GdkEventKey of type %GDK_KEY_PRESS if the keyboard was used to show the menu.
             * </para></listitem>
             * <listitem><para>
             * a generic #GdkEvent of type %GDK_NOTHING when the #GtkWidget::popup-menu signal was used to show the context menu.
             * </para></listitem>
             * </itemizedlist>
             * @returns the menu event or %NULL.
             */
            get_event(): Gdk.Event;
            /**
             * Gets the item at the given position in the `menu`.
             * @param position the position of the item, counting from 0
             * @returns the #WebKitContextMenuItem at position @position in @menu,    or %NULL if the position is off the end of the @menu.
             */
            get_item_at_position(position: number): ContextMenuItem;
            /**
             * Returns the item list of `menu`.
             * @returns a #GList of    #WebKitContextMenuItem<!-- -->s
             */
            get_items(): ContextMenuItem[];
            /**
             * Gets the length of the `menu`.
             * @returns the number of #WebKitContextMenuItem<!-- -->s in @menu
             */
            get_n_items(): number;
            /**
             * Gets the user data of `menu`.
             *
             * This function can be used from the UI Process to get user data previously set
             * from the Web Process with webkit_context_menu_set_user_data().
             * @returns the user data of @menu, or %NULL if @menu doesn't have user data
             */
            get_user_data(): GLib.Variant;
            /**
             * Inserts `item` into the `menu` at the given position.
             *
             * If `position` is negative, or is larger than the number of items
             * in the #WebKitContextMenu, the item is added on to the end of
             * the `menu`. The first position is 0.
             * @param item the #WebKitContextMenuItem to add
             * @param position the position to insert the item
             */
            insert(item: ContextMenuItem, position: number): void;
            /**
             * Gets the last item in the `menu`.
             * @returns the last #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
             */
            last(): ContextMenuItem;
            /**
             * Moves `item` to the given position in the `menu`.
             *
             * If `position` is negative, or is larger than the number of items
             * in the #WebKitContextMenu, the item is added on to the end of
             * the `menu`.
             * The first position is 0.
             * @param item the #WebKitContextMenuItem to add
             * @param position the new position to move the item
             */
            move_item(item: ContextMenuItem, position: number): void;
            /**
             * Adds `item` at the beginning of the `menu`.
             * @param item the #WebKitContextMenuItem to add
             */
            prepend(item: ContextMenuItem): void;
            /**
             * Removes `item` from the `menu`.
             *
             * See also webkit_context_menu_remove_all() to remove all items.
             * @param item the #WebKitContextMenuItem to remove
             */
            remove(item: ContextMenuItem): void;
            /**
             * Removes all items of the `menu`.
             */
            remove_all(): void;
            /**
             * Sets user data to `menu`.
             *
             * This function can be used from a Web Process extension to set user data
             * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
             * If the `user_data` #GVariant is floating, it is consumed.
             * @param user_data a #GVariant
             */
            set_user_data(user_data: GLib.Variant): void;
        }

        module ContextMenuItem {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
        }

        /**
         * One item of a #WebKitContextMenu.
         *
         * The #WebKitContextMenu is composed of #WebKitContextMenuItem<!--
         * -->s. These items can be created from a #GtkAction, from a
         * #WebKitContextMenuAction or from a #WebKitContextMenuAction and a
         * label. These #WebKitContextMenuAction<!-- -->s denote stock actions
         * for the items. You can also create separators and submenus.
         */
        class ContextMenuItem extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<ContextMenuItem>;

            // Constructors

            constructor(properties?: Partial<ContextMenuItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem;

            static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;

            static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;

            static new_separator(): ContextMenuItem;

            static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;

            // Methods

            /**
             * Gets the action associated to `item` as a #GAction.
             * @returns the #GAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
             */
            get_gaction(): Gio.Action;
            /**
             * Gets the #WebKitContextMenuAction of `item`.
             *
             * If the #WebKitContextMenuItem was not
             * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
             * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
             * will be returned.
             * @returns the #WebKitContextMenuAction of @item
             */
            get_stock_action(): ContextMenuAction;
            /**
             * Gets the submenu of `item`.
             * @returns the #WebKitContextMenu representing the submenu of    @item or %NULL if @item doesn't have a submenu.
             */
            get_submenu(): ContextMenu;
            /**
             * Checks whether `item` is a separator.
             * @returns %TRUE is @item is a separator or %FALSE otherwise
             */
            is_separator(): boolean;
            /**
             * Sets or replaces the `item` submenu.
             *
             * If `submenu` is %NULL the current
             * submenu of `item` is removed.
             * @param submenu a #WebKitContextMenu
             */
            set_submenu(submenu?: ContextMenu | null): void;
        }

        module Frame {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A web page frame.
         *
         * Each `WebKitWebPage` has at least one main frame, and can have any number
         * of subframes.
         */
        class Frame extends GObject.Object {
            static $gtype: GObject.GType<Frame>;

            // Constructors

            constructor(properties?: Partial<Frame.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the process-unique identifier of this #WebKitFrame. No other
             * frame in the same web process will have the same ID; however, frames
             * in other web processes may.
             * @returns the identifier of @frame
             */
            get_id(): number;
            /**
             * Get the JavaScript execution context of `frame`. Use this function to bridge
             * between the WebKit and JavaScriptCore APIs.
             * @returns the #JSCContext for the JavaScript execution context of @frame.
             */
            get_js_context(): JavaScriptCore.Context;
            /**
             * Get the JavaScript execution context of `frame` for the given #WebKitScriptWorld.
             * @param world a #WebKitScriptWorld
             * @returns the #JSCContext for the JavaScript execution context of @frame for @world.
             */
            get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context;
            /**
             * Gets the current active URI of `frame`.
             * @returns the current active URI of @frame or %NULL if nothing has been    loaded yet.
             */
            get_uri(): string;
            /**
             * Gets whether `frame` is the main frame of a #WebKitWebPage
             * @returns %TRUE if @frame is a main frame or %FALSE otherwise
             */
            is_main_frame(): boolean;
        }

        module HitTestResult {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                context: number;
                image_uri: string;
                imageUri: string;
                link_label: string;
                linkLabel: string;
                link_title: string;
                linkTitle: string;
                link_uri: string;
                linkUri: string;
                media_uri: string;
                mediaUri: string;
            }
        }

        /**
         * Result of a Hit Test.
         *
         * A Hit Test is an operation to get context information about a given
         * point in a #WebKitWebView. #WebKitHitTestResult represents the
         * result of a Hit Test. It provides context information about what is
         * at the coordinates of the Hit Test, such as if there's a link,
         * an image or a media.
         *
         * You can get the context of the HitTestResult with
         * webkit_hit_test_result_get_context() that returns a bitmask of
         * #WebKitHitTestResultContext flags. You can also use
         * webkit_hit_test_result_context_is_link(), webkit_hit_test_result_context_is_image() and
         * webkit_hit_test_result_context_is_media() to determine whether there's
         * a link, image or a media element at the coordinates of the Hit Test.
         * Note that it's possible that several #WebKitHitTestResultContext flags
         * are active at the same time, for example if there's a link containing an image.
         *
         * When the mouse is moved over a #WebKitWebView a Hit Test is performed
         * for the mouse coordinates and #WebKitWebView::mouse-target-changed
         * signal is emitted with a #WebKitHitTestResult.
         */
        class HitTestResult extends GObject.Object {
            static $gtype: GObject.GType<HitTestResult>;

            // Properties

            /**
             * Bitmask of #WebKitHitTestResultContext flags representing
             * the context of the #WebKitHitTestResult.
             */
            get context(): number;
            /**
             * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
             * is present in #WebKitHitTestResult:context
             */
            get image_uri(): string;
            /**
             * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
             * is present in #WebKitHitTestResult:context
             */
            get imageUri(): string;
            /**
             * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
             * is present in #WebKitHitTestResult:context
             */
            get link_label(): string;
            /**
             * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
             * is present in #WebKitHitTestResult:context
             */
            get linkLabel(): string;
            /**
             * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
             * is present in #WebKitHitTestResult:context
             */
            get link_title(): string;
            /**
             * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
             * is present in #WebKitHitTestResult:context
             */
            get linkTitle(): string;
            /**
             * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
             * is present in #WebKitHitTestResult:context
             */
            get link_uri(): string;
            /**
             * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
             * is present in #WebKitHitTestResult:context
             */
            get linkUri(): string;
            /**
             * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
             * is present in #WebKitHitTestResult:context
             */
            get media_uri(): string;
            /**
             * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
             * is present in #WebKitHitTestResult:context
             */
            get mediaUri(): string;

            // Constructors

            constructor(properties?: Partial<HitTestResult.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
             * #WebKitHitTestResult:context.
             * @returns %TRUE if there's an editable element at the coordinates of the @hit_test_result,    or %FALSE otherwise
             */
            context_is_editable(): boolean;
            /**
             * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
             * #WebKitHitTestResult:context.
             * @returns %TRUE if there's an image element in the coordinates of the Hit Test,    or %FALSE otherwise
             */
            context_is_image(): boolean;
            /**
             * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
             * #WebKitHitTestResult:context.
             * @returns %TRUE if there's a link element in the coordinates of the Hit Test,    or %FALSE otherwise
             */
            context_is_link(): boolean;
            /**
             * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
             * #WebKitHitTestResult:context.
             * @returns %TRUE if there's a media element in the coordinates of the Hit Test,    or %FALSE otherwise
             */
            context_is_media(): boolean;
            /**
             * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
             * #WebKitHitTestResult:context.
             * @returns %TRUE if there's a scrollbar element at the coordinates of the @hit_test_result,    or %FALSE otherwise
             */
            context_is_scrollbar(): boolean;
            /**
             * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
             * #WebKitHitTestResult:context.
             * @returns %TRUE if there's a selected element at the coordinates of the @hit_test_result,    or %FALSE otherwise
             */
            context_is_selection(): boolean;
            /**
             * Gets the value of the #WebKitHitTestResult:context property.
             * @returns a bitmask of #WebKitHitTestResultContext flags
             */
            get_context(): number;
            /**
             * Gets the value of the #WebKitHitTestResult:image-uri property.
             * @returns the URI of the image element in the coordinates of the Hit Test,    or %NULL if there isn't an image element in @hit_test_result context
             */
            get_image_uri(): string;
            /**
             * Gets the value of the #WebKitHitTestResult:link-label property.
             * @returns the label of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a label
             */
            get_link_label(): string;
            /**
             * Gets the value of the #WebKitHitTestResult:link-title property.
             * @returns the title of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a title
             */
            get_link_title(): string;
            /**
             * Gets the value of the #WebKitHitTestResult:link-uri property.
             * @returns the URI of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context
             */
            get_link_uri(): string;
            /**
             * Gets the value of the #WebKitHitTestResult:media-uri property.
             * @returns the URI of the media element in the coordinates of the Hit Test,    or %NULL if there isn't a media element in @hit_test_result context
             */
            get_media_uri(): string;
        }

        module ScriptWorld {
            // Signal callback interfaces

            interface WindowObjectCleared {
                (page: WebPage, frame: Frame): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class ScriptWorld extends GObject.Object {
            static $gtype: GObject.GType<ScriptWorld>;

            // Constructors

            constructor(properties?: Partial<ScriptWorld.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ScriptWorld;

            static new_with_name(name: string): ScriptWorld;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'window-object-cleared',
                callback: (_source: this, page: WebPage, frame: Frame) => void,
            ): number;
            connect_after(
                signal: 'window-object-cleared',
                callback: (_source: this, page: WebPage, frame: Frame) => void,
            ): number;
            emit(signal: 'window-object-cleared', page: WebPage, frame: Frame): void;

            // Static methods

            /**
             * Get the default #WebKitScriptWorld. This is the normal script world
             * where all scripts are executed by default.
             * You can get the JavaScript execution context of a #WebKitScriptWorld
             * for a given #WebKitFrame with webkit_frame_get_javascript_context_for_script_world().
             */
            static get_default(): ScriptWorld;

            // Methods

            /**
             * Get the name of a #WebKitScriptWorld.
             * @returns the name of @world
             */
            get_name(): string;
        }

        module URIRequest {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                uri: string;
            }
        }

        /**
         * Represents a URI request.
         *
         * A #WebKitURIRequest can be created with a URI using the
         * webkit_uri_request_new() method, and you can get the URI of an
         * existing request with the webkit_uri_request_get_uri() one.
         */
        class URIRequest extends GObject.Object {
            static $gtype: GObject.GType<URIRequest>;

            // Properties

            /**
             * The URI to which the request will be made.
             */
            get uri(): string;
            set uri(val: string);

            // Constructors

            constructor(properties?: Partial<URIRequest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](uri: string): URIRequest;

            // Methods

            /**
             * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
             * @returns a #SoupMessageHeaders with the HTTP headers of @request    or %NULL if @request is not an HTTP request.
             */
            get_http_headers(): Soup.MessageHeaders;
            /**
             * Get the HTTP method of the #WebKitURIRequest.
             * @returns the HTTP method of the #WebKitURIRequest or %NULL if @request is not    an HTTP request.
             */
            get_http_method(): string;
            /**
             * Obtains the request URI.
             * @returns request URI, as a string.
             */
            get_uri(): string;
            /**
             * Set the URI of `request`
             * @param uri an URI
             */
            set_uri(uri: string): void;
        }

        module URIResponse {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                content_length: number;
                contentLength: number;
                http_headers: Soup.MessageHeaders;
                httpHeaders: Soup.MessageHeaders;
                mime_type: string;
                mimeType: string;
                status_code: number;
                statusCode: number;
                suggested_filename: string;
                suggestedFilename: string;
                uri: string;
            }
        }

        /**
         * Represents an URI response.
         *
         * A #WebKitURIResponse contains information such as the URI, the
         * status code, the content length, the mime type, the HTTP status or
         * the suggested filename.
         */
        class URIResponse extends GObject.Object {
            static $gtype: GObject.GType<URIResponse>;

            // Properties

            /**
             * The expected content length of the response.
             */
            get content_length(): number;
            /**
             * The expected content length of the response.
             */
            get contentLength(): number;
            /**
             * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
             */
            get http_headers(): Soup.MessageHeaders;
            /**
             * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
             */
            get httpHeaders(): Soup.MessageHeaders;
            /**
             * The MIME type of the response.
             */
            get mime_type(): string;
            /**
             * The MIME type of the response.
             */
            get mimeType(): string;
            /**
             * The status code of the response as returned by the server.
             */
            get status_code(): number;
            /**
             * The status code of the response as returned by the server.
             */
            get statusCode(): number;
            /**
             * The suggested filename for the URI response.
             */
            get suggested_filename(): string;
            /**
             * The suggested filename for the URI response.
             */
            get suggestedFilename(): string;
            /**
             * The URI for which the response was made.
             */
            get uri(): string;

            // Constructors

            constructor(properties?: Partial<URIResponse.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the expected content length of the #WebKitURIResponse.
             *
             * It can be 0 if the server provided an incorrect or missing Content-Length.
             * @returns the expected content length of @response.
             */
            get_content_length(): number;
            /**
             * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
             * @returns a #SoupMessageHeaders with the HTTP headers of @response    or %NULL if @response is not an HTTP response.
             */
            get_http_headers(): Soup.MessageHeaders;
            /**
             * Gets the MIME type of the response.
             * @returns MIME type, as a string.
             */
            get_mime_type(): string;
            /**
             * Get the status code of the #WebKitURIResponse.
             *
             * Get the status code of the #WebKitURIResponse as returned by
             * the server. It will normally be a #SoupKnownStatusCode, for
             * example %SOUP_STATUS_OK, though the server can respond with any
             * unsigned integer.
             * @returns the status code of @response
             */
            get_status_code(): number;
            /**
             * Get the suggested filename for `response`.
             *
             * Get the suggested filename for `response,` as specified by
             * the 'Content-Disposition' HTTP header, or %NULL if it's not
             * present.
             * @returns the suggested filename or %NULL if    the 'Content-Disposition' HTTP header is not present.
             */
            get_suggested_filename(): string;
            /**
             * Gets the URI which resulted in the response.
             * @returns response URI, as a string.
             */
            get_uri(): string;
        }

        module UserMessage {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
                fd_list: Gio.UnixFDList;
                fdList: Gio.UnixFDList;
                name: string;
                parameters: GLib.Variant;
            }
        }

        /**
         * Message that can be sent between the UI process and web process extensions.
         *
         * A WebKitUserMessage is a message that can be used for the communication between the UI process
         * and web process extensions. A WebKitUserMessage always has a name, and it can also include parameters and
         * UNIX file descriptors. Messages can be sent from a #WebKitWebContext to all web process extensions,
         * from a web process extension to its corresponding #WebKitWebContext, and from a #WebKitWebView to its
         * corresponding #WebKitWebPage (and vice versa). One to one messages can be replied to directly with
         * webkit_user_message_send_reply().
         */
        class UserMessage extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<UserMessage>;

            // Properties

            /**
             * The UNIX file descriptors of the user message.
             */
            get fd_list(): Gio.UnixFDList;
            /**
             * The UNIX file descriptors of the user message.
             */
            get fdList(): Gio.UnixFDList;
            /**
             * The name of the user message.
             */
            get name(): string;
            /**
             * The parameters of the user message as a #GVariant, or %NULL
             * if the message doesn't include parameters. Note that only complete types are
             * allowed.
             */
            get parameters(): GLib.Variant;

            // Constructors

            constructor(properties?: Partial<UserMessage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, parameters?: GLib.Variant | null): UserMessage;

            static new_with_fd_list(
                name: string,
                parameters?: GLib.Variant | null,
                fd_list?: Gio.UnixFDList | null,
            ): UserMessage;

            // Static methods

            /**
             * Gets the quark for the domain of user message errors.
             */
            static error_quark(): GLib.Quark;

            // Methods

            /**
             * Get the `message` list of file descritpor.
             * @returns the message list of file descriptors
             */
            get_fd_list(): Gio.UnixFDList | null;
            /**
             * Get the `message` name.
             * @returns the message name
             */
            get_name(): string;
            /**
             * Get the `message` parameters.
             * @returns the message parameters
             */
            get_parameters(): GLib.Variant | null;
            /**
             * Send a reply to an user message.
             *
             * If `reply` is floating, it's consumed.
             * You can only send a reply to a #WebKitUserMessage that has been
             * received.
             * @param reply a #WebKitUserMessage to send as reply
             */
            send_reply(reply: UserMessage): void;
        }

        module WebEditor {
            // Signal callback interfaces

            interface SelectionChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Access to editing capabilities of a #WebKitWebPage.
         *
         * The WebKitWebEditor provides access to various editing capabilities of
         * a #WebKitWebPage such as a possibility to react to the current selection in
         * #WebKitWebPage.
         */
        class WebEditor extends GObject.Object {
            static $gtype: GObject.GType<WebEditor>;

            // Constructors

            constructor(properties?: Partial<WebEditor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'selection-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;
            emit(signal: 'selection-changed'): void;

            // Methods

            /**
             * Gets the #WebKitWebPage that is associated with the #WebKitWebEditor.
             * @returns the associated #WebKitWebPage
             */
            get_page(): WebPage;
        }

        module WebFormManager {
            // Signal callback interfaces

            interface FormControlsAssociated {
                (frame: Frame, elements: JavaScriptCore.Value[]): void;
            }

            interface WillSendSubmitEvent {
                (form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame): void;
            }

            interface WillSubmitForm {
                (form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Form manager of a #WebKitWebPage in a #WebKitScriptWorld
         */
        class WebFormManager extends GObject.Object {
            static $gtype: GObject.GType<WebFormManager>;

            // Constructors

            constructor(properties?: Partial<WebFormManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'form-controls-associated',
                callback: (_source: this, frame: Frame, elements: JavaScriptCore.Value[]) => void,
            ): number;
            connect_after(
                signal: 'form-controls-associated',
                callback: (_source: this, frame: Frame, elements: JavaScriptCore.Value[]) => void,
            ): number;
            emit(signal: 'form-controls-associated', frame: Frame, elements: JavaScriptCore.Value[]): void;
            connect(
                signal: 'will-send-submit-event',
                callback: (_source: this, form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame) => void,
            ): number;
            connect_after(
                signal: 'will-send-submit-event',
                callback: (_source: this, form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame) => void,
            ): number;
            emit(
                signal: 'will-send-submit-event',
                form: JavaScriptCore.Value,
                source_frame: Frame,
                target_frame: Frame,
            ): void;
            connect(
                signal: 'will-submit-form',
                callback: (_source: this, form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame) => void,
            ): number;
            connect_after(
                signal: 'will-submit-form',
                callback: (_source: this, form: JavaScriptCore.Value, source_frame: Frame, target_frame: Frame) => void,
            ): number;
            emit(
                signal: 'will-submit-form',
                form: JavaScriptCore.Value,
                source_frame: Frame,
                target_frame: Frame,
            ): void;

            // Static methods

            /**
             * Set the value of an HTML input element as if it had been edited by
             * the user, triggering a change event, and set it as filled automatically.
             * If `element` is not an HTML input element this function does nothing.
             * @param element a #JSCValue
             * @param value the text to set
             */
            static input_element_auto_fill(element: JavaScriptCore.Value, value: string): void;
            /**
             * Get whether `element` is an HTML input element that has been filled automatically.
             * @param element a #JSCValue
             */
            static input_element_is_auto_filled(element: JavaScriptCore.Value): boolean;
            /**
             * Get whether `element` is an HTML text input element that has been edited by a user action.
             * @param element a #JSCValue
             */
            static input_element_is_user_edited(element: JavaScriptCore.Value): boolean;
        }

        module WebHitTestResult {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Result of a Hit Test (Web Process Extensions).
         *
         * WebKitWebHitTestResult extends #WebKitHitTestResult to provide information
         * about the #WebKitDOMNode in the coordinates of the Hit Test.
         */
        class WebHitTestResult extends GObject.Object {
            static $gtype: GObject.GType<WebHitTestResult>;

            // Constructors

            constructor(properties?: Partial<WebHitTestResult.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Check whether there is an editable element at the hit test position.
             *
             * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
             * the context flags.
             * @returns %TRUE if the hit test covers an editable element or %FALSE otherwise.
             */
            context_is_editable(): boolean;
            /**
             * Check whether there is an image element at the hit test position.
             *
             * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
             * the context flags.
             * @returns %TRUE if the hit test covers an image element or %FALSE otherwise.
             */
            context_is_image(): boolean;
            /**
             * Check whether there is a link element at the hit test position.
             *
             * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
             * the context flags.
             * @returns %TRUE if the hit test covers a link element or %FALSE otherwise.
             */
            context_is_link(): boolean;
            /**
             * Check whether there is a media element at the hit test position.
             *
             * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
             * the context flags.
             * @returns %TRUE if the hit test covers a media element or %FALSE otherwise.
             */
            context_is_media(): boolean;
            /**
             * Check whether there is a scrollbar at the hit test position.
             *
             * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
             * the context flags.
             * @returns %TRUE if the hit test covers a scrollbar or %FALSE otherwise.
             */
            context_is_scrollbar(): boolean;
            /**
             * Check whether there is a selected element at the hit test position.
             *
             * Checks whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
             * the context flags.
             * @returns %TRUE if the hit test covers a selected element or %FALSE otherwise.
             */
            context_is_selection(): boolean;
            /**
             * Gets the the context flags for the hit test result.
             * @returns a bitmask of #WebKitHitTestResultContext flags
             */
            get_context(): number;
            /**
             * Obtains the URI associated with the image element at the hit test position.
             * @returns the URI of the image element, or %NULL if the hit test does not cover an image element.
             */
            get_image_uri(): string;
            /**
             * Get the #JSCValue for the DOM node in `world` at the coordinates of the Hit Test.
             * @param world a #WebKitScriptWorld, or %NULL to use the default
             * @returns a #JSCValue for the DOM node, or %NULL
             */
            get_js_node(world?: ScriptWorld | null): JavaScriptCore.Value | null;
            /**
             * Obtains the label associated with the link element at the hit test position.
             * @returns the label of the link element, or %NULL if the hit test does not cover a link element    or the link element does not have a label.
             */
            get_link_label(): string;
            /**
             * Obtains the title associated with the link element at the hit test position.
             * @returns the title of the link element, or %NULL if the hit test does not cover a link element    or the link element does not have a title.
             */
            get_link_title(): string;
            /**
             * Obtains the URI associated with the link element at the hit test position.
             * @returns the URI of the link element, or %NULL if the hit test does not cover a link element.
             */
            get_link_uri(): string;
            /**
             * Obtains the URI associated with the media element at the hit test position.
             * @returns the URI of the media element, or %NULL if the hit test does not cover a media element.
             */
            get_media_uri(): string;
        }

        module WebPage {
            // Signal callback interfaces

            interface ConsoleMessageSent {
                (console_message: ConsoleMessage): void;
            }

            interface ContextMenu {
                (context_menu: ContextMenu, hit_test_result: WebHitTestResult): boolean;
            }

            interface DocumentLoaded {
                (): void;
            }

            interface SendRequest {
                (request: URIRequest, redirected_response: URIResponse): boolean;
            }

            interface UserMessageReceived {
                (message: UserMessage): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                uri: string;
            }
        }

        /**
         * A loaded web page.
         */
        class WebPage extends GObject.Object {
            static $gtype: GObject.GType<WebPage>;

            // Properties

            /**
             * The current active URI of the #WebKitWebPage.
             */
            get uri(): string;

            // Constructors

            constructor(properties?: Partial<WebPage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'console-message-sent',
                callback: (_source: this, console_message: ConsoleMessage) => void,
            ): number;
            connect_after(
                signal: 'console-message-sent',
                callback: (_source: this, console_message: ConsoleMessage) => void,
            ): number;
            emit(signal: 'console-message-sent', console_message: ConsoleMessage): void;
            connect(
                signal: 'context-menu',
                callback: (_source: this, context_menu: ContextMenu, hit_test_result: WebHitTestResult) => boolean,
            ): number;
            connect_after(
                signal: 'context-menu',
                callback: (_source: this, context_menu: ContextMenu, hit_test_result: WebHitTestResult) => boolean,
            ): number;
            emit(signal: 'context-menu', context_menu: ContextMenu, hit_test_result: WebHitTestResult): void;
            connect(signal: 'document-loaded', callback: (_source: this) => void): number;
            connect_after(signal: 'document-loaded', callback: (_source: this) => void): number;
            emit(signal: 'document-loaded'): void;
            connect(
                signal: 'send-request',
                callback: (_source: this, request: URIRequest, redirected_response: URIResponse) => boolean,
            ): number;
            connect_after(
                signal: 'send-request',
                callback: (_source: this, request: URIRequest, redirected_response: URIResponse) => boolean,
            ): number;
            emit(signal: 'send-request', request: URIRequest, redirected_response: URIResponse): void;
            connect(
                signal: 'user-message-received',
                callback: (_source: this, message: UserMessage) => boolean,
            ): number;
            connect_after(
                signal: 'user-message-received',
                callback: (_source: this, message: UserMessage) => boolean,
            ): number;
            emit(signal: 'user-message-received', message: UserMessage): void;

            // Methods

            /**
             * Gets the #WebKitWebEditor of a #WebKitWebPage.
             * @returns the #WebKitWebEditor
             */
            get_editor(): WebEditor;
            /**
             * Get the #WebKitWebFormManager of `web_page` in `world`.
             * @param world a #WebKitScriptWorld
             * @returns a #WebKitWebFormManager
             */
            get_form_manager(world?: ScriptWorld | null): WebFormManager;
            /**
             * Get the identifier of the #WebKitWebPage
             * @returns the identifier of @web_page
             */
            get_id(): number;
            /**
             * Returns the main frame of a #WebKitWebPage.
             * @returns the #WebKitFrame that is the main frame of @web_page
             */
            get_main_frame(): Frame;
            /**
             * Returns the current active URI of `web_page`.
             *
             * You can monitor the active URI by connecting to the notify::uri
             * signal of `web_page`.
             * @returns the current active URI of @web_view or %NULL if nothing has been    loaded yet.
             */
            get_uri(): string;
            /**
             * Send `message` to the #WebKitWebView corresponding to `web_page`. If `message` is floating, it's consumed.
             *
             * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `callback`.
             * When the operation is finished, `callback` will be called. You can then call
             * webkit_web_page_send_message_to_view_finish() to get the message reply.
             * @param message a #WebKitUserMessage
             * @param cancellable a #GCancellable or %NULL to ignore
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL
             */
            send_message_to_view(
                message: UserMessage,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finish an asynchronous operation started with webkit_web_page_send_message_to_view().
             * @param result a #GAsyncResult
             * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
             */
            send_message_to_view_finish(result: Gio.AsyncResult): UserMessage;
        }

        module WebProcessExtension {
            // Signal callback interfaces

            interface PageCreated {
                (web_page: WebPage): void;
            }

            interface UserMessageReceived {
                (message: UserMessage): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Represents an extension of the web process.
         *
         * WebKitWebProcessExtension is a loadable module for the web process. It allows you to execute code in the
         * web process and being able to use the DOM API, to change any request or to inject custom
         * JavaScript code, for example.
         *
         * To create a WebKitWebProcessExtension you should write a module with an initialization function that could
         * be either webkit_web_process_extension_initialize() with prototype #WebKitWebProcessExtensionInitializeFunction or
         * webkit_web_process_extension_initialize_with_user_data() with prototype #WebKitWebProcessExtensionInitializeWithUserDataFunction.
         * This function has to be public and it has to use the #G_MODULE_EXPORT macro. It is called when the
         * web process is initialized.
         *
         * ```c
         * static void
         * web_page_created_callback (WebKitWebProcessExtension *extension,
         *                            WebKitWebPage             *web_page,
         *                            gpointer                   user_data)
         * {
         *     g_print ("Page %d created for %s\n",
         *              webkit_web_page_get_id (web_page),
         *              webkit_web_page_get_uri (web_page));
         * }
         *
         * G_MODULE_EXPORT void
         * webkit_web_process_extension_initialize (WebKitWebProcessExtension *extension)
         * {
         *     g_signal_connect (extension, "page-created",
         *                       G_CALLBACK (web_page_created_callback),
         *                       NULL);
         * }
         * ```
         *
         * The previous piece of code shows a trivial example of an extension that notifies when
         * a #WebKitWebPage is created.
         *
         * WebKit has to know where it can find the created WebKitWebProcessExtension. To do so you
         * should use the webkit_web_context_set_web_extensions_directory() function. The signal
         * #WebKitWebContext::initialize-web-extensions is the recommended place to call it.
         *
         * To provide the initialization data used by the webkit_web_process_extension_initialize_with_user_data()
         * function, you have to call webkit_web_context_set_web_extensions_initialization_user_data() with
         * the desired data as parameter. You can see an example of this in the following piece of code:
         *
         * ```c
         * #define WEB_EXTENSIONS_DIRECTORY // ...
         *
         * static void
         * initialize_web_extensions (WebKitWebContext *context,
         *                            gpointer          user_data)
         * {
         *   // Web Extensions get a different ID for each Web Process
         *   static guint32 unique_id = 0;
         *
         *   webkit_web_context_set_web_extensions_directory (
         *      context, WEB_EXTENSIONS_DIRECTORY);
         *   webkit_web_context_set_web_extensions_initialization_user_data (
         *      context, g_variant_new_uint32 (unique_id++));
         * }
         *
         * int main (int argc, char **argv)
         * {
         *   g_signal_connect (webkit_web_context_get_default (),
         *                    "initialize-web-extensions",
         *                     G_CALLBACK (initialize_web_extensions),
         *                     NULL);
         *
         *   GtkWidget *view = webkit_web_view_new ();
         *
         *   // ...
         * }
         * ```
         */
        class WebProcessExtension extends GObject.Object {
            static $gtype: GObject.GType<WebProcessExtension>;

            // Constructors

            constructor(properties?: Partial<WebProcessExtension.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'page-created', callback: (_source: this, web_page: WebPage) => void): number;
            connect_after(signal: 'page-created', callback: (_source: this, web_page: WebPage) => void): number;
            emit(signal: 'page-created', web_page: WebPage): void;
            connect(signal: 'user-message-received', callback: (_source: this, message: UserMessage) => void): number;
            connect_after(
                signal: 'user-message-received',
                callback: (_source: this, message: UserMessage) => void,
            ): number;
            emit(signal: 'user-message-received', message: UserMessage): void;

            // Methods

            /**
             * Get the web page of the given `page_id`.
             * @param page_id the identifier of the #WebKitWebPage to get
             * @returns the #WebKitWebPage for the given @page_id, or %NULL if the    identifier doesn't correspond to an existing web page.
             */
            get_page(page_id: number): WebPage;
            /**
             * Send `message` to the #WebKitWebContext corresponding to `extension`. If `message` is floating, it's consumed.
             *
             * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `calback`.
             * When the operation is finished, `callback` will be called. You can then call
             * webkit_web_process_extension_send_message_to_context_finish() to get the message reply.
             * @param message a #WebKitUserMessage
             * @param cancellable a #GCancellable or %NULL to ignore
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL
             */
            send_message_to_context(
                message: UserMessage,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finish an asynchronous operation started with webkit_web_process_extension_send_message_to_context().
             * @param result a #GAsyncResult
             * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
             */
            send_message_to_context_finish(result: Gio.AsyncResult): UserMessage;
        }

        abstract class ConsoleMessage {
            static $gtype: GObject.GType<ConsoleMessage>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Make a copy of `console_message`.
             * @returns A copy of passed in #WebKitConsoleMessage
             */
            copy(): ConsoleMessage;
            /**
             * Free the #WebKitConsoleMessage
             */
            free(): void;
            /**
             * Gets the log level of a #WebKitConsoleMessage
             * @returns a #WebKitConsoleMessageLevel indicating the log level of @console_message
             */
            get_level(): ConsoleMessageLevel;
            /**
             * Gets the line number of a #WebKitConsoleMessage
             * @returns the line number of @console_message
             */
            get_line(): number;
            /**
             * Gets the source of a #WebKitConsoleMessage
             * @returns a #WebKitConsoleMessageSource indicating the source of @console_message
             */
            get_source(): ConsoleMessageSource;
            /**
             * Gets the source identifier of a #WebKitConsoleMessage
             * @returns the source identifier of @console_message
             */
            get_source_id(): string;
            /**
             * Gets the text message of a #WebKitConsoleMessage
             * @returns the text message of @console_message
             */
            get_text(): string;
        }

        type ContextMenuClass = typeof ContextMenu;
        type ContextMenuItemClass = typeof ContextMenuItem;
        type FrameClass = typeof Frame;
        type HitTestResultClass = typeof HitTestResult;
        type ScriptWorldClass = typeof ScriptWorld;
        type URIRequestClass = typeof URIRequest;
        type URIResponseClass = typeof URIResponse;
        type UserMessageClass = typeof UserMessage;
        type WebEditorClass = typeof WebEditor;
        type WebFormManagerClass = typeof WebFormManager;
        type WebHitTestResultClass = typeof WebHitTestResult;
        type WebPageClass = typeof WebPage;
        type WebProcessExtensionClass = typeof WebProcessExtension;
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

    export default WebKitWebProcessExtension;
}

declare module 'gi://WebKitWebProcessExtension' {
    import WebKitWebProcessExtension60 from 'gi://WebKitWebProcessExtension?version=6.0';
    export default WebKitWebProcessExtension60;
}
// END
