/// <reference path="./gdkpixbuf-2.0.d.ts" />
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

declare module 'gi://Notify?version=0.7' {
    // Module dependencies
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Notify {
        /**
         * Notify-0.7
         */

        /**
         * The reason for which the notification has been closed.
         */

        /**
         * The reason for which the notification has been closed.
         */
        export namespace ClosedReason {
            export const $gtype: GObject.GType<ClosedReason>;
        }

        enum ClosedReason {
            /**
             * Notification not closed.
             */
            UNSET,
            /**
             * Timeout has expired.
             */
            EXPIRED,
            /**
             * It has been dismissed by the user.
             */
            DISMISSED,
            /**
             * It has been closed by a call to
             *   [method`NotifyNotification`.close].
             */
            API_REQUEST,
            /**
             * Closed by undefined/reserved reasons.
             */
            UNDEFIEND,
        }
        /**
         * The urgency level of the notification.
         */

        /**
         * The urgency level of the notification.
         */
        export namespace Urgency {
            export const $gtype: GObject.GType<Urgency>;
        }

        enum Urgency {
            /**
             * Low urgency. Used for unimportant notifications.
             */
            LOW,
            /**
             * Normal urgency. Used for most standard notifications.
             */
            NORMAL,
            /**
             * Critical urgency. Used for very important notifications.
             */
            CRITICAL,
        }
        /**
         * The default expiration time on a notification.
         */
        const EXPIRES_DEFAULT: number;
        /**
         * The notification never expires.
         *
         * It stays open until closed by the calling API or the user.
         */
        const EXPIRES_NEVER: number;
        /**
         * Adwaita major version component (e.g. 1 if the version is 1.2.3).
         */
        const VERSION_MAJOR: number;
        /**
         * Adwaita micro version component (e.g. 3 if the version is 1.2.3).
         */
        const VERSION_MICRO: number;
        /**
         * Adwaita minor version component (e.g. 2 if the version is 1.2.3).
         */
        const VERSION_MINOR: number;
        /**
         * Gets the application icon registered.
         * @returns The registered application icon, set via [func@set_app_icon].
         */
        function get_app_icon(): string;
        /**
         * Gets the application name registered.
         * @returns The registered application name, passed to [func@init].
         */
        function get_app_name(): string;
        /**
         * Queries the server capabilities.
         *
         * Synchronously queries the server for its capabilities and returns them in a
         * list.
         * @returns a list of server capability strings.
         */
        function get_server_caps(): string[];
        /**
         * Queries the server for information.
         *
         * Synchronously queries the server for its information, specifically, the name,
         * vendor, server version, and the version of the notifications specification
         * that it is compliant with.
         * @returns %TRUE if successful, and the variables passed will be set, %FALSE   on error. The returned strings must be freed with g_free
         */
        function get_server_info(): [boolean, string, string, string, string];
        /**
         * Initialized libnotify. This must be called before any other functions.
         *
         * Starting from 0.8, if the provided `app_name` is %NULL, libnotify will
         * try to figure it out from the running application.
         * Before it was not allowed, and was causing libnotify not to be initialized.
         * @param app_name The name of the application initializing libnotify.
         * @returns %TRUE if successful, or %FALSE on error.
         */
        function init(app_name?: string | null): boolean;
        /**
         * Gets whether or not libnotify is initialized.
         * @returns %TRUE if libnotify is initialized, or %FALSE otherwise.
         */
        function is_initted(): boolean;
        /**
         * Sets the application icon.
         * @param app_icon The optional icon theme icon name or filename.
         */
        function set_app_icon(app_icon?: string | null): void;
        /**
         * Sets the application name.
         * @param app_name The name of the application
         */
        function set_app_name(app_name: string): void;
        /**
         * Uninitializes libnotify.
         *
         * This should be called when the program no longer needs libnotify for
         * the rest of its lifecycle, typically just before exitting.
         */
        function uninit(): void;
        interface ActionCallback {
            (notification: Notification, action: string): void;
        }
        module Notification {
            // Signal callback interfaces

            interface Closed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                app_icon: string;
                appIcon: string;
                app_name: string;
                appName: string;
                body: string;
                closed_reason: number;
                closedReason: number;
                icon_name: string;
                iconName: string;
                id: number;
                summary: string;
            }
        }

        /**
         * A passive pop-up notification.
         *
         * #NotifyNotification represents a passive pop-up notification. It can
         * contain summary text, body text, and an icon, as well as hints specifying
         * how the notification should be presented. The notification is rendered
         * by a notification daemon, and may present the notification in any number
         * of ways. As such, there is a clear separation of content and presentation,
         * and this API enforces that.
         */
        class Notification extends GObject.Object {
            static $gtype: GObject.GType<Notification>;

            // Properties

            /**
             * The icon of the application for the notification.
             */
            get app_icon(): string;
            set app_icon(val: string);
            /**
             * The icon of the application for the notification.
             */
            get appIcon(): string;
            set appIcon(val: string);
            /**
             * The name of the application for the notification.
             */
            get app_name(): string;
            set app_name(val: string);
            /**
             * The name of the application for the notification.
             */
            get appName(): string;
            set appName(val: string);
            /**
             * The body of the notification.
             */
            get body(): string;
            set body(val: string);
            /**
             * The closed reason of the notification.
             *
             * See [signal`Notification:`:closed].
             */
            get closed_reason(): number;
            /**
             * The closed reason of the notification.
             *
             * See [signal`Notification:`:closed].
             */
            get closedReason(): number;
            /**
             * The icon-name of the icon to be displayed on the notification.
             */
            get icon_name(): string;
            set icon_name(val: string);
            /**
             * The icon-name of the icon to be displayed on the notification.
             */
            get iconName(): string;
            set iconName(val: string);
            /**
             * The Id of the notification.
             */
            get id(): number;
            set id(val: number);
            /**
             * The summary of the notification.
             */
            get summary(): string;
            set summary(val: string);

            // Constructors

            constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](summary: string, body?: string | null, icon?: string | null): Notification;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'closed', callback: (_source: this) => void): number;
            connect_after(signal: 'closed', callback: (_source: this) => void): number;
            emit(signal: 'closed'): void;

            // Virtual methods

            vfunc_closed(): void;

            // Methods

            /**
             * Adds an action to a notification.
             *
             * When the action is invoked, the specified callback function will be called,
             * along with the value passed to `user_data`.
             * @param action The action ID.
             * @param label The human-readable action label.
             * @param callback The action's callback function.
             */
            add_action(action: string, label: string, callback: ActionCallback): void;
            /**
             * Clears all actions from the notification.
             */
            clear_actions(): void;
            /**
             * Clears all hints from the notification.
             */
            clear_hints(): void;
            /**
             * Synchronously tells the notification server to hide the notification on the screen.
             * @returns %TRUE on success, or %FALSE on error with @error filled in
             */
            close(): boolean;
            /**
             * Gets the activation token of the notification.
             *
             * If an an action is currently being activated, return the activation token.
             * This function is intended to be used in a [callback`ActionCallback]` to get
             * the activation token for the activated action, if the notification daemon
             * supports it.
             * @returns The current activation token, or %NULL if none
             */
            get_activation_token(): string | null;
            /**
             * Returns the closed reason code for the notification.
             *
             * This is valid only after the [signal`Notification:`:closed] signal is emitted.
             *
             * Since version 0.8.0 the returned value is of type [enum`ClosedReason]`.
             * @returns An integer representing the closed reason code   (Since 0.8.0 it's also a [enum@ClosedReason]).
             */
            get_closed_reason(): number;
            /**
             * Sets the application icon for the notification.
             *
             * If this function is not called or if `app_icon` is %NULL, the application icon
             * will be set from the value set via [func`set_app_icon]`.
             * @param app_icon The optional icon theme icon name or filename.
             */
            set_app_icon(app_icon?: string | null): void;
            /**
             * Sets the application name for the notification.
             *
             * If this function is not called or if `app_name` is %NULL, the application name
             * will be set from the value used in [func`init]` or overridden with
             * [func`set_app_name]`.
             * @param app_name the localised application name
             */
            set_app_name(app_name?: string | null): void;
            /**
             * Sets the category of this notification.
             *
             * This can be used by the notification server to filter or display the data in
             * a certain way.
             * @param category The category.
             */
            set_category(category: string): void;
            /**
             * Sets a hint for `key` with value `value`.
             *
             * If `value` is %NULL, a previously set hint for `key` is unset.
             *
             * If `value` is floating, it is consumed.
             * @param key the hint key
             * @param value the hint value
             */
            set_hint(key: string, value?: GLib.Variant | null): void;
            /**
             * Sets a hint with a byte value.
             * @param key The hint.
             * @param value The hint's value.
             */
            set_hint_byte(key: string, value: number): void;
            /**
             * Sets a hint with a byte array value.
             *
             * The length of `value` must be passed as `len`.
             * @param key The hint.
             * @param value The hint's value.
             */
            set_hint_byte_array(key: string, value: Uint8Array | string): void;
            /**
             * Sets a hint with a double value.
             * @param key The hint.
             * @param value The hint's value.
             */
            set_hint_double(key: string, value: number): void;
            /**
             * Sets a hint with a 32-bit integer value.
             * @param key The hint.
             * @param value The hint's value.
             */
            set_hint_int32(key: string, value: number): void;
            /**
             * Sets a hint with a string value.
             * @param key The hint.
             * @param value The hint's value.
             */
            set_hint_string(key: string, value: string): void;
            /**
             * Sets a hint with an unsigned 32-bit integer value.
             * @param key The hint.
             * @param value The hint's value.
             */
            set_hint_uint32(key: string, value: number): void;
            /**
             * Sets the icon in the notification from a #GdkPixbuf.
             * @param icon The icon.
             */
            set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void;
            /**
             * Sets the image in the notification from a [class`GdkPixbuf`.Pixbuf].
             * @param pixbuf The image.
             */
            set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * Sets the timeout of the notification.
             *
             * To set the default time, pass %NOTIFY_EXPIRES_DEFAULT as `timeout`. To set the
             * notification to never expire, pass %NOTIFY_EXPIRES_NEVER.
             *
             * Note that the timeout may be ignored by the server.
             * @param timeout The timeout in milliseconds.
             */
            set_timeout(timeout: number): void;
            /**
             * Sets the urgency level of this notification.
             * @param urgency The urgency level.
             */
            set_urgency(urgency: Urgency): void;
            /**
             * Tells the notification server to display the notification on the screen.
             * @returns %TRUE if successful. On error, this will return %FALSE and set   @error.
             */
            show(): boolean;
            /**
             * Updates the notification text and icon.
             *
             * This won't send the update out and display it on the screen. For that, you
             * will need to call [method`Notification`.show].
             * @param summary The new required summary text.
             * @param body The optional body text.
             * @param icon The optional icon theme icon name or filename.
             * @returns %TRUE, unless an invalid parameter was passed.
             */
            update(summary: string, body?: string | null, icon?: string | null): boolean;
        }

        type NotificationClass = typeof Notification;
        abstract class NotificationPrivate {
            static $gtype: GObject.GType<NotificationPrivate>;

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

    export default Notify;
}

declare module 'gi://Notify' {
    import Notify07 from 'gi://Notify?version=0.7';
    export default Notify07;
}
// END
