/// <reference path="./gtksource-5.d.ts" />
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

declare module 'gi://Spelling?version=1' {
    // Module dependencies
    import type GtkSource from 'gi://GtkSource?version=5';
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

    export namespace Spelling {
        /**
         * Spelling-1
         */

        /**
         * Call this function before using any other libspelling functions in your
         * applications. It will initialize everything needed to operate the library.
         */
        function init(): void;
        module Checker {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                language: string;
                provider: Provider;
            }
        }

        /**
         * `SpellingChecker` is the core class of libspelling. It provides high-level
         * APIs for spellchecking.
         */
        class Checker extends GObject.Object {
            static $gtype: GObject.GType<Checker>;

            // Properties

            /**
             * The "language" to use when checking words with the configured
             * `SpellingProvider`. For example, `en_US`.
             */
            get language(): string;
            set language(val: string);
            /**
             * The "provider" property contains the provider that is providing
             * information to the spell checker.
             *
             * Currently, only Enchant is supported, and requires using the
             * `SpellingEnchantProvider`. Setting this to %NULL will get
             * the default provider.
             */
            get provider(): Provider;

            // Constructors

            constructor(properties?: Partial<Checker.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](provider: Provider, language: string): Checker;

            // Static methods

            /**
             * Gets a default `SpellingChecker` using the default provider and language.
             */
            static get_default(): Checker;

            // Methods

            /**
             * Adds `word` to the active dictionary.
             * @param word a word to be added
             */
            add_word(word: string): void;
            /**
             * Checks if the active dictionary contains `word`.
             * @param word a word to be checked
             * @param word_len length of the word, in bytes
             * @returns %TRUE if the dictionary contains the word
             */
            check_word(word: string, word_len: number): boolean;
            /**
             * Gets the extra word characters of the active dictionary.
             * @returns extra word characters
             */
            get_extra_word_chars(): string;
            /**
             * Gets the language being used by the spell checker.
             * @returns a string describing the current language.
             */
            get_language(): string | null;
            /**
             * Gets the spell provider used by the spell checker.
             *
             * Currently, only Enchant-2 is supported.
             * @returns a `SpellingProvider`
             */
            get_provider(): Provider;
            /**
             * Requests the active dictionary to ignore `word`.
             * @param word a word to be ignored
             */
            ignore_word(word: string): void;
            /**
             * Retrieves a list of possible corrections for `word`.
             * @param word a word to be checked
             * @returns A list of possible corrections, or %NULL.
             */
            list_corrections(word: string): string[] | null;
            /**
             * Sets the language code to use when communicating with the provider,
             * such as `en_US`.
             * @param language the language to use
             */
            set_language(language: string): void;
        }

        module Dictionary {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                code: string;
            }
        }

        /**
         * Abstract base class for spellchecking dictionaries.
         */
        abstract class Dictionary extends GObject.Object {
            static $gtype: GObject.GType<Dictionary>;

            // Properties

            /**
             * The language code, for example `en_US`.
             */
            get code(): string;

            // Constructors

            constructor(properties?: Partial<Dictionary.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Adds `word` to the dictionary.
             * @param word a word to be added
             */
            add_word(word: string): void;
            /**
             * Checks if the dictionary contains `word`.
             * @param word a word to be checked
             * @param word_len length of the word, in bytes
             * @returns %TRUE if the dictionary contains the word
             */
            contains_word(word: string, word_len: number): boolean;
            /**
             * Gets the language code of the dictionary, or %NULL if undefined.
             * @returns the language code of the dictionary
             */
            get_code(): string | null;
            /**
             * Gets the extra word characters of the dictionary.
             * @returns extra word characters
             */
            get_extra_word_chars(): string;
            /**
             * Requests the dictionary to ignore `word`.
             * @param word a word to be ignored
             */
            ignore_word(word: string): void;
            /**
             * Retrieves a list of possible corrections for `word`.
             * @param word a word to be checked
             * @param word_len the length of @word, or -1 if @word is zero-terminated
             * @returns A list of possible corrections, or %NULL.
             */
            list_corrections(word: string, word_len: number): string[] | null;
        }

        module Language {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                code: string;
                group: string;
                name: string;
            }
        }

        /**
         * Represents a spellchecking language.
         */
        class Language extends GObject.Object {
            static $gtype: GObject.GType<Language>;

            // Properties

            /**
             * The language code.
             */
            get code(): string;
            /**
             * A group for sorting, usually the country name.
             */
            get group(): string;
            /**
             * The name of the language.
             */
            get name(): string;

            // Constructors

            constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the code of the language, or %NULL if undefined.
             * @returns the code of the language
             */
            get_code(): string | null;
            /**
             * Gets the group of the language, or %NULL if undefined.
             * @returns the group of the language
             */
            get_group(): string | null;
            /**
             * Gets the name of the language, or %NULL if undefined.
             * @returns the name of the language
             */
            get_name(): string | null;
        }

        module Provider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display_name: string;
                displayName: string;
            }
        }

        /**
         * Abstract base class for spellchecking providers.
         */
        abstract class Provider extends GObject.Object {
            static $gtype: GObject.GType<Provider>;

            // Properties

            /**
             * The display name.
             */
            get display_name(): string;
            /**
             * The display name.
             */
            get displayName(): string;

            // Constructors

            constructor(properties?: Partial<Provider.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets the default spell provider.
             */
            static get_default(): Provider;

            // Methods

            /**
             * Gets the default language code for the detected system locales, or %NULL
             * if the provider doesn't support any of them.
             * @returns the default language code
             */
            get_default_code(): string | null;
            /**
             * Gets the display name of the provider, or %NULL if undefined.
             * @returns the display name of the provider
             */
            get_display_name(): string | null;
            /**
             * Gets a `GListModel` of languages supported by the provider.
             * @returns a `GListModel` of `SpellingLanguage`
             */
            list_languages(): Gio.ListModel;
            /**
             * Gets a `SpellingDictionary` for the requested language, or %NULL
             * if the language is not supported.
             * @param language the language to load such as `en_US`.
             * @returns a `SpellingDictionary` or %NULL
             */
            load_dictionary(language: string): Dictionary | null;
            /**
             * Checks of `language` is supported by the provider.
             * @param language the language such as `en_US`.
             * @returns %TRUE if @language is supported, otherwise %FALSE
             */
            supports_language(language: string): boolean;
        }

        module TextBufferAdapter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.ActionGroup.ConstructorProps {
                buffer: GtkSource.Buffer;
                checker: Checker;
                enabled: boolean;
                language: string;
            }
        }

        /**
         * `SpellingTextBufferAdapter` implements helpers to easily add spellchecking
         * capabilities to a `GtkSourceBuffer`.
         */
        class TextBufferAdapter extends GObject.Object implements Gio.ActionGroup {
            static $gtype: GObject.GType<TextBufferAdapter>;

            // Properties

            /**
             * The [class`GtkSource`.Buffer].
             */
            get buffer(): GtkSource.Buffer;
            /**
             * The [class`Spelling`.Checker].
             */
            get checker(): Checker;
            set checker(val: Checker);
            /**
             * Whether spellcheck is enabled.
             */
            get enabled(): boolean;
            set enabled(val: boolean);
            /**
             * The language code, such as `en_US`.
             */
            get language(): string;
            set language(val: string);

            // Constructors

            constructor(properties?: Partial<TextBufferAdapter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: GtkSource.Buffer, checker: Checker): TextBufferAdapter;

            // Methods

            /**
             * Gets the underlying buffer for the adapter.
             * @returns a `GtkSourceBuffer`
             */
            get_buffer(): GtkSource.Buffer | null;
            /**
             * Gets the checker used by the adapter.
             * @returns a `SpellingChecker` or %NULL
             */
            get_checker(): Checker | null;
            /**
             * Gets if the spellcheck is enabled.
             * @returns %TRUE if enabled
             */
            get_enabled(): boolean;
            /**
             * Gets the checker language.
             * @returns a language code
             */
            get_language(): string | null;
            /**
             * Gets the menu model containing corrections
             * @returns a `GMenuModel`
             */
            get_menu_model(): Gio.MenuModel;
            /**
             * Gets the tag used for potentially misspelled words.
             * @returns a `GtkTextTag` or %NULL
             */
            get_tag(): Gtk.TextTag | null;
            /**
             * Invalidate the spelling engine, to force parsing again.
             *
             * Invalidation is automatically done on [property`GtkSource`.Buffer:loading]
             * change.
             */
            invalidate_all(): void;
            /**
             * Set the [class`Spelling`.Checker] used for spellchecking.
             * @param checker a `SpellingChecker`
             */
            set_checker(checker: Checker): void;
            /**
             * If %TRUE spellcheck is enabled.
             * @param enabled whether the spellcheck is enabled
             */
            set_enabled(enabled: boolean): void;
            /**
             * Sets the language code to use by the checker, such as `en_US`.
             * @param language the language to use
             */
            set_language(language: string): void;
            /**
             * Looks at the current cursor position and updates the list of
             * corrections based on the current word.
             *
             * Use this to force an update immediately rather than after the
             * automatic timeout caused by cursor movements.
             */
            update_corrections(): void;

            // Inherited methods
            /**
             * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            action_added(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param enabled whether the action is now enabled
             */
            action_enabled_changed(action_name: string, enabled: boolean): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            action_removed(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param state the new state of the named action
             */
            action_state_changed(action_name: string, state: GLib.Variant): void;
            /**
             * Activate the named action within `action_group`.
             *
             * If the action is expecting a parameter, then the correct type of
             * parameter must be given as `parameter`.  If the action is expecting no
             * parameters then `parameter` must be `NULL`.  See
             * [method`Gio`.ActionGroup.get_action_parameter_type].
             *
             * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
             * activation over D-Bus, this call may return before the relevant
             * D-Bus traffic has been sent, or any replies have been received. In
             * order to block on such asynchronous activation calls,
             * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
             * depends on the result of the action activation. Without flushing
             * the D-Bus connection, there is no guarantee that the action would
             * have been activated.
             *
             * The following code which runs in a remote app instance, shows an
             * example of a ‘quit’ action being activated on the primary app
             * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
             * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
             * may fail to be activated on the primary instance.
             *
             * ```c
             * // call ‘quit’ action on primary instance
             * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
             *
             * // make sure the action is activated now
             * g_dbus_connection_flush (…);
             *
             * g_debug ("Application has been terminated. Exiting.");
             *
             * exit (0);
             * ```
             * @param action_name the name of the action to activate
             * @param parameter parameters to the activation
             */
            activate_action(action_name: string, parameter?: GLib.Variant | null): void;
            /**
             * Request for the state of the named action within `action_group` to be
             * changed to `value`.
             *
             * The action must be stateful and `value` must be of the correct type.
             * See [method`Gio`.ActionGroup.get_action_state_type].
             *
             * This call merely requests a change.  The action may refuse to change
             * its state or may change its state to something other than `value`.
             * See [method`Gio`.ActionGroup.get_action_state_hint].
             *
             * If the `value` GVariant is floating, it is consumed.
             * @param action_name the name of the action to request the change on
             * @param value the new state
             */
            change_action_state(action_name: string, value: GLib.Variant): void;
            /**
             * Checks if the named action within `action_group` is currently enabled.
             *
             * An action must be enabled in order to be activated or in order to
             * have its state changed from outside callers.
             * @param action_name the name of the action to query
             * @returns whether the action is currently enabled
             */
            get_action_enabled(action_name: string): boolean;
            /**
             * Queries the type of the parameter that must be given when activating
             * the named action within `action_group`.
             *
             * When activating the action using [method`Gio`.ActionGroup.activate_action],
             * the [type`GLib`.Variant] given to that function must be of the type returned
             * by this function.
             *
             * In the case that this function returns `NULL`, you must not give any
             * [type`GLib`.Variant], but `NULL` instead.
             *
             * The parameter type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different parameter type.
             * @param action_name the name of the action to query
             * @returns the parameter type
             */
            get_action_parameter_type(action_name: string): GLib.VariantType | null;
            /**
             * Queries the current state of the named action within `action_group`.
             *
             * If the action is not stateful then `NULL` will be returned.  If the
             * action is stateful then the type of the return value is the type
             * given by [method`Gio`.ActionGroup.get_action_state_type].
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             * @returns the current state of the action
             */
            get_action_state(action_name: string): GLib.Variant | null;
            /**
             * Requests a hint about the valid range of values for the state of the
             * named action within `action_group`.
             *
             * If `NULL` is returned it either means that the action is not stateful
             * or that there is no hint about the valid range of values for the
             * state of the action.
             *
             * If a [type`GLib`.Variant] array is returned then each item in the array is a
             * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
             * returned then the tuple specifies the inclusive lower and upper bound
             * of valid values for the state.
             *
             * In any case, the information is merely a hint.  It may be possible to
             * have a state value outside of the hinted range and setting a value
             * within the range may fail.
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             * @returns the state range hint
             */
            get_action_state_hint(action_name: string): GLib.Variant | null;
            /**
             * Queries the type of the state of the named action within
             * `action_group`.
             *
             * If the action is stateful then this function returns the
             * [type`GLib`.VariantType] of the state.  All calls to
             * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
             * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
             * of the same type.
             *
             * If the action is not stateful then this function will return `NULL`.
             * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
             * and you must not call [method`Gio`.ActionGroup.change_action_state].
             *
             * The state type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different state type.
             * @param action_name the name of the action to query
             * @returns the state type, if the action is stateful
             */
            get_action_state_type(action_name: string): GLib.VariantType | null;
            /**
             * Checks if the named action exists within `action_group`.
             * @param action_name the name of the action to check for
             * @returns whether the named action exists
             */
            has_action(action_name: string): boolean;
            /**
             * Lists the actions contained within `action_group`.
             *
             * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
             * it is no longer required.
             * @returns a `NULL`-terminated array   of the names of the actions in the group
             */
            list_actions(): string[];
            /**
             * Queries all aspects of the named action within an `action_group`.
             *
             * This function acquires the information available from
             * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
             * [method`Gio`.ActionGroup.get_action_parameter_type],
             * [method`Gio`.ActionGroup.get_action_state_type],
             * [method`Gio`.ActionGroup.get_action_state_hint] and
             * [method`Gio`.ActionGroup.get_action_state] with a single function call.
             *
             * This provides two main benefits.
             *
             * The first is the improvement in efficiency that comes with not having
             * to perform repeated lookups of the action in order to discover
             * different things about it.  The second is that implementing
             * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
             * function.
             *
             * The interface provides a default implementation of this function that
             * calls the individual functions, as required, to fetch the
             * information.  The interface also provides default implementations of
             * those functions that call this function.  All implementations,
             * therefore, must override either this function or all of the others.
             *
             * If the action exists, `TRUE` is returned and any of the requested
             * fields (as indicated by having a non-`NULL` reference passed in) are
             * filled.  If the action doesn’t exist, `FALSE` is returned and the
             * fields may or may not have been modified.
             * @param action_name the name of an action in the group
             * @returns `TRUE` if the action exists, else `FALSE`
             */
            query_action(
                action_name: string,
            ): [
                boolean,
                boolean,
                GLib.VariantType | null,
                GLib.VariantType | null,
                GLib.Variant | null,
                GLib.Variant | null,
            ];
            /**
             * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            vfunc_action_added(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param enabled whether the action is now enabled
             */
            vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            vfunc_action_removed(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param state the new state of the named action
             */
            vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
            /**
             * Activate the named action within `action_group`.
             *
             * If the action is expecting a parameter, then the correct type of
             * parameter must be given as `parameter`.  If the action is expecting no
             * parameters then `parameter` must be `NULL`.  See
             * [method`Gio`.ActionGroup.get_action_parameter_type].
             *
             * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
             * activation over D-Bus, this call may return before the relevant
             * D-Bus traffic has been sent, or any replies have been received. In
             * order to block on such asynchronous activation calls,
             * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
             * depends on the result of the action activation. Without flushing
             * the D-Bus connection, there is no guarantee that the action would
             * have been activated.
             *
             * The following code which runs in a remote app instance, shows an
             * example of a ‘quit’ action being activated on the primary app
             * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
             * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
             * may fail to be activated on the primary instance.
             *
             * ```c
             * // call ‘quit’ action on primary instance
             * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
             *
             * // make sure the action is activated now
             * g_dbus_connection_flush (…);
             *
             * g_debug ("Application has been terminated. Exiting.");
             *
             * exit (0);
             * ```
             * @param action_name the name of the action to activate
             * @param parameter parameters to the activation
             */
            vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
            /**
             * Request for the state of the named action within `action_group` to be
             * changed to `value`.
             *
             * The action must be stateful and `value` must be of the correct type.
             * See [method`Gio`.ActionGroup.get_action_state_type].
             *
             * This call merely requests a change.  The action may refuse to change
             * its state or may change its state to something other than `value`.
             * See [method`Gio`.ActionGroup.get_action_state_hint].
             *
             * If the `value` GVariant is floating, it is consumed.
             * @param action_name the name of the action to request the change on
             * @param value the new state
             */
            vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
            /**
             * Checks if the named action within `action_group` is currently enabled.
             *
             * An action must be enabled in order to be activated or in order to
             * have its state changed from outside callers.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_enabled(action_name: string): boolean;
            /**
             * Queries the type of the parameter that must be given when activating
             * the named action within `action_group`.
             *
             * When activating the action using [method`Gio`.ActionGroup.activate_action],
             * the [type`GLib`.Variant] given to that function must be of the type returned
             * by this function.
             *
             * In the case that this function returns `NULL`, you must not give any
             * [type`GLib`.Variant], but `NULL` instead.
             *
             * The parameter type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different parameter type.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
            /**
             * Queries the current state of the named action within `action_group`.
             *
             * If the action is not stateful then `NULL` will be returned.  If the
             * action is stateful then the type of the return value is the type
             * given by [method`Gio`.ActionGroup.get_action_state_type].
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state(action_name: string): GLib.Variant | null;
            /**
             * Requests a hint about the valid range of values for the state of the
             * named action within `action_group`.
             *
             * If `NULL` is returned it either means that the action is not stateful
             * or that there is no hint about the valid range of values for the
             * state of the action.
             *
             * If a [type`GLib`.Variant] array is returned then each item in the array is a
             * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
             * returned then the tuple specifies the inclusive lower and upper bound
             * of valid values for the state.
             *
             * In any case, the information is merely a hint.  It may be possible to
             * have a state value outside of the hinted range and setting a value
             * within the range may fail.
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
            /**
             * Queries the type of the state of the named action within
             * `action_group`.
             *
             * If the action is stateful then this function returns the
             * [type`GLib`.VariantType] of the state.  All calls to
             * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
             * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
             * of the same type.
             *
             * If the action is not stateful then this function will return `NULL`.
             * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
             * and you must not call [method`Gio`.ActionGroup.change_action_state].
             *
             * The state type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different state type.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
            /**
             * Checks if the named action exists within `action_group`.
             * @param action_name the name of the action to check for
             */
            vfunc_has_action(action_name: string): boolean;
            /**
             * Lists the actions contained within `action_group`.
             *
             * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
             * it is no longer required.
             */
            vfunc_list_actions(): string[];
            /**
             * Queries all aspects of the named action within an `action_group`.
             *
             * This function acquires the information available from
             * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
             * [method`Gio`.ActionGroup.get_action_parameter_type],
             * [method`Gio`.ActionGroup.get_action_state_type],
             * [method`Gio`.ActionGroup.get_action_state_hint] and
             * [method`Gio`.ActionGroup.get_action_state] with a single function call.
             *
             * This provides two main benefits.
             *
             * The first is the improvement in efficiency that comes with not having
             * to perform repeated lookups of the action in order to discover
             * different things about it.  The second is that implementing
             * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
             * function.
             *
             * The interface provides a default implementation of this function that
             * calls the individual functions, as required, to fetch the
             * information.  The interface also provides default implementations of
             * those functions that call this function.  All implementations,
             * therefore, must override either this function or all of the others.
             *
             * If the action exists, `TRUE` is returned and any of the requested
             * fields (as indicated by having a non-`NULL` reference passed in) are
             * filled.  If the action doesn’t exist, `FALSE` is returned and the
             * fields may or may not have been modified.
             * @param action_name the name of an action in the group
             */
            vfunc_query_action(
                action_name: string,
            ): [
                boolean,
                boolean,
                GLib.VariantType | null,
                GLib.VariantType | null,
                GLib.Variant | null,
                GLib.Variant | null,
            ];
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

        type CheckerClass = typeof Checker;
        type DictionaryClass = typeof Dictionary;
        type LanguageClass = typeof Language;
        type ProviderClass = typeof Provider;
        type TextBufferAdapterClass = typeof TextBufferAdapter;
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

    export default Spelling;
}

declare module 'gi://Spelling' {
    import Spelling1 from 'gi://Spelling?version=1';
    export default Spelling1;
}
// END
