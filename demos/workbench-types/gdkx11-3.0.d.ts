/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GdkX11?version=3.0' {
    // Module dependencies
    import type xlib from 'gi://xlib?version=2.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';

    export namespace GdkX11 {
        /**
         * GdkX11-3.0
         */

        /**
         * Converts from a #GdkAtom to the X atom for the default GDK display
         * with the same string value.
         * @param atom A #GdkAtom
         * @returns the X atom corresponding to @atom.
         */
        function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom;
        /**
         * Converts from a #GdkAtom to the X atom for a #GdkDisplay
         * with the same string value. The special value %GDK_NONE
         * is converted to %None.
         * @param display A #GdkDisplay
         * @param atom A #GdkAtom, or %GDK_NONE
         * @returns the X atom corresponding to @atom, or %None
         */
        function x11_atom_to_xatom_for_display(display: X11Display, atom: Gdk.Atom): xlib.Atom;
        /**
         * Returns the device ID as seen by XInput2.
         *
         * > If gdk_disable_multidevice() has been called, this function
         * > will respectively return 2/3 for the core pointer and keyboard,
         * > (matching the IDs for the Virtual Core Pointer and Keyboard in
         * > XInput 2), but calling this function on any slave devices (i.e.
         * > those managed via XInput 1.x), will return 0.
         * @param device a #GdkDevice
         * @returns the XInput2 device ID.
         */
        function x11_device_get_id(device: X11DeviceCore): number;
        /**
         * Returns the #GdkDevice that wraps the given device ID.
         * @param device_manager a #GdkDeviceManager
         * @param device_id a device ID, as understood by the XInput2 protocol
         * @returns The #GdkDevice wrapping the device ID,          or %NULL if the given ID doesn’t currently represent a device.
         */
        function x11_device_manager_lookup(
            device_manager: X11DeviceManagerCore,
            device_id: number,
        ): X11DeviceCore | null;
        /**
         * Frees the data returned from gdk_x11_display_string_to_compound_text().
         * @param ctext The pointer stored in @ctext from a call to   gdk_x11_display_string_to_compound_text().
         */
        function x11_free_compound_text(ctext: number): void;
        /**
         * Frees the array of strings created by
         * gdk_x11_display_text_property_to_text_list().
         * @param list the value stored in the @list parameter by   a call to gdk_x11_display_text_property_to_text_list().
         */
        function x11_free_text_list(list: string): void;
        /**
         * Gets the root window of the default screen
         * (see gdk_x11_get_default_screen()).
         * @returns an Xlib Window.
         */
        function x11_get_default_root_xwindow(): xlib.Window;
        /**
         * Gets the default GTK+ screen number.
         * @returns returns the screen number specified by   the --display command line option or the DISPLAY environment   variable when gdk_init() calls XOpenDisplay().
         */
        function x11_get_default_screen(): number;
        /**
         * Gets the default GTK+ display.
         * @returns the Xlib Display* for the display specified in the `--display` command line option or the `DISPLAY` environment variable.
         */
        function x11_get_default_xdisplay(): xlib.Display;
        /**
         * Used with gdk_window_set_background_pattern() to inherit background from
         * parent window. Useful for imitating transparency when compositing is not
         * available. Otherwise behaves like a transparent pattern.
         */
        function x11_get_parent_relative_pattern(): cairo.Pattern;
        /**
         * Routine to get the current X server time stamp.
         * @param window a #GdkWindow, used for communication          with the server.  The window must have          GDK_PROPERTY_CHANGE_MASK in its events mask or a hang will          result.
         * @returns the time stamp.
         */
        function x11_get_server_time(window: X11Window): number;
        /**
         * Returns the X atom for GDK’s default display corresponding to `atom_name`.
         * This function caches the result, so if called repeatedly it is much
         * faster than XInternAtom(), which is a round trip to the server each time.
         * @param atom_name a string
         * @returns a X atom for GDK’s default display.
         */
        function x11_get_xatom_by_name(atom_name: string): xlib.Atom;
        /**
         * Returns the X atom for a #GdkDisplay corresponding to `atom_name`.
         * This function caches the result, so if called repeatedly it is much
         * faster than XInternAtom(), which is a round trip to the server each time.
         * @param display a #GdkDisplay
         * @param atom_name a string
         * @returns a X atom for a #GdkDisplay
         */
        function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
        /**
         * Returns the name of an X atom for GDK’s default display. This
         * function is meant mainly for debugging, so for convenience, unlike
         * XAtomName() and gdk_atom_name(), the result
         * doesn’t need to be freed. Also, this function will never return %NULL,
         * even if `xatom` is invalid.
         * @param xatom an X atom for GDK’s default display
         * @returns name of the X atom; this string is owned by GTK+,   so it shouldn’t be modifed or freed.
         */
        function x11_get_xatom_name(xatom: xlib.Atom): string;
        /**
         * Returns the name of an X atom for its display. This
         * function is meant mainly for debugging, so for convenience, unlike
         * XAtomName() and gdk_atom_name(), the result doesn’t need to
         * be freed.
         * @param display the #GdkDisplay where @xatom is defined
         * @param xatom an X atom
         * @returns name of the X atom; this string is owned by GDK,   so it shouldn’t be modifed or freed.
         */
        function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
        /**
         * Call gdk_x11_display_grab() on the default display.
         * To ungrab the server again, use gdk_x11_ungrab_server().
         *
         * gdk_x11_grab_server()/gdk_x11_ungrab_server() calls can be nested.
         */
        function x11_grab_server(): void;
        /**
         * Find the #GdkDisplay corresponding to `xdisplay,` if any exists.
         * @param xdisplay a pointer to an X Display
         * @returns the #GdkDisplay, if found, otherwise %NULL.
         */
        function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
        /**
         * Registers interest in receiving extension events with type codes
         * between `event_base` and `event_base + n_events - 1`.
         * The registered events must have the window field in the same place
         * as core X events (this is not the case for e.g. XKB extension events).
         *
         * If an event type is registered, events of this type will go through
         * global and window-specific filters (see gdk_window_add_filter()).
         * Unregistered events will only go through global filters.
         * GDK may register the events of some X extensions on its own.
         *
         * This function should only be needed in unusual circumstances, e.g.
         * when filtering XInput extension events on the root window.
         * @param display a #GdkDisplay
         * @param event_base first event type code to register
         * @param n_events number of event type codes to register
         */
        function x11_register_standard_event_type(display: X11Display, event_base: number, n_events: number): void;
        /**
         * Sets the `SM_CLIENT_ID` property on the application’s leader window so that
         * the window manager can save the application’s state using the X11R6 ICCCM
         * session management protocol.
         *
         * See the X Session Management Library documentation for more information on
         * session management and the Inter-Client Communication Conventions Manual
         * @param sm_client_id the client id assigned by the session manager    when the connection was opened, or %NULL to remove the property.
         */
        function x11_set_sm_client_id(sm_client_id?: string | null): void;
        /**
         * Ungrab the default display after it has been grabbed with
         * gdk_x11_grab_server().
         */
        function x11_ungrab_server(): void;
        /**
         * Convert from an X atom for the default display to the corresponding
         * #GdkAtom.
         * @param xatom an X atom for the default GDK display
         * @returns the corresponding G#dkAtom.
         */
        function x11_xatom_to_atom(xatom: xlib.Atom): Gdk.Atom;
        /**
         * Convert from an X atom for a #GdkDisplay to the corresponding
         * #GdkAtom.
         * @param display A #GdkDisplay
         * @param xatom an X atom
         * @returns the corresponding #GdkAtom.
         */
        function x11_xatom_to_atom_for_display(display: X11Display, xatom: xlib.Atom): Gdk.Atom;
        module X11AppLaunchContext {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.AppLaunchContext.ConstructorProps {}
        }

        class X11AppLaunchContext extends Gdk.AppLaunchContext {
            static $gtype: GObject.GType<X11AppLaunchContext>;

            // Constructors

            constructor(properties?: Partial<X11AppLaunchContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11Cursor {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Cursor.ConstructorProps {}
        }

        class X11Cursor extends Gdk.Cursor {
            static $gtype: GObject.GType<X11Cursor>;

            // Constructors

            constructor(properties?: Partial<X11Cursor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the X cursor belonging to a #GdkCursor.
             * @returns an Xlib Cursor.
             */
            get_xcursor(): xlib.Cursor;
            /**
             * Returns the display of a #GdkCursor.
             * @returns an Xlib Display*.
             */
            get_xdisplay(): xlib.Display;
        }

        module X11DeviceCore {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Device.ConstructorProps {}
        }

        class X11DeviceCore extends Gdk.Device {
            static $gtype: GObject.GType<X11DeviceCore>;

            // Constructors

            constructor(properties?: Partial<X11DeviceCore.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11DeviceManagerCore {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.DeviceManager.ConstructorProps {}
        }

        class X11DeviceManagerCore extends Gdk.DeviceManager {
            static $gtype: GObject.GType<X11DeviceManagerCore>;

            // Constructors

            constructor(properties?: Partial<X11DeviceManagerCore.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11DeviceManagerXI2 {
            // Constructor properties interface

            interface ConstructorProps extends X11DeviceManagerCore.ConstructorProps {
                major: number;
                minor: number;
                opcode: number;
            }
        }

        class X11DeviceManagerXI2 extends X11DeviceManagerCore {
            static $gtype: GObject.GType<X11DeviceManagerXI2>;

            // Properties

            get major(): number;
            get minor(): number;
            get opcode(): number;

            // Constructors

            constructor(properties?: Partial<X11DeviceManagerXI2.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11DeviceXI2 {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Device.ConstructorProps {
                device_id: number;
                deviceId: number;
            }
        }

        class X11DeviceXI2 extends Gdk.Device {
            static $gtype: GObject.GType<X11DeviceXI2>;

            // Properties

            get device_id(): number;
            get deviceId(): number;

            // Constructors

            constructor(properties?: Partial<X11DeviceXI2.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11Display {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Display.ConstructorProps {}
        }

        class X11Display extends Gdk.Display {
            static $gtype: GObject.GType<X11Display>;

            // Constructors

            constructor(properties?: Partial<X11Display.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Retrieves the version of the GLX implementation.
             * @param display a #GdkDisplay
             */
            static get_glx_version(display: Gdk.Display): [boolean, number, number];

            // Methods

            /**
             * Pops the error trap pushed by gdk_x11_display_error_trap_push().
             * Will XSync() if necessary and will always block until
             * the error is known to have occurred or not occurred,
             * so the error code can be returned.
             *
             * If you don’t need to use the return value,
             * gdk_x11_display_error_trap_pop_ignored() would be more efficient.
             *
             * See gdk_error_trap_pop() for the all-displays-at-once
             * equivalent.
             * @returns X error code or 0 on success
             */
            error_trap_pop(): number;
            /**
             * Pops the error trap pushed by gdk_x11_display_error_trap_push().
             * Does not block to see if an error occurred; merely records the
             * range of requests to ignore errors for, and ignores those errors
             * if they arrive asynchronously.
             *
             * See gdk_error_trap_pop_ignored() for the all-displays-at-once
             * equivalent.
             */
            error_trap_pop_ignored(): void;
            /**
             * Begins a range of X requests on `display` for which X error events
             * will be ignored. Unignored errors (when no trap is pushed) will abort
             * the application. Use gdk_x11_display_error_trap_pop() or
             * gdk_x11_display_error_trap_pop_ignored()to lift a trap pushed
             * with this function.
             *
             * See also gdk_error_trap_push() to push a trap on all displays.
             */
            error_trap_push(): void;
            /**
             * Gets the startup notification ID for a display.
             * @returns the startup notification ID for @display
             */
            get_startup_notification_id(): string;
            /**
             * Returns the timestamp of the last user interaction on
             * `display`. The timestamp is taken from events caused
             * by user interaction such as key presses or pointer
             * movements. See gdk_x11_window_set_user_time().
             * @returns the timestamp of the last user interaction
             */
            get_user_time(): number;
            /**
             * Returns the X display of a #GdkDisplay.
             * @returns an X display
             */
            get_xdisplay(): xlib.Display;
            /**
             * Call XGrabServer() on `display`.
             * To ungrab the display again, use gdk_x11_display_ungrab().
             *
             * gdk_x11_display_grab()/gdk_x11_display_ungrab() calls can be nested.
             */
            grab(): void;
            /**
             * Sets the cursor theme from which the images for cursor
             * should be taken.
             *
             * If the windowing system supports it, existing cursors created
             * with gdk_cursor_new(), gdk_cursor_new_for_display() and
             * gdk_cursor_new_from_name() are updated to reflect the theme
             * change. Custom cursors constructed with
             * gdk_cursor_new_from_pixbuf() will have to be handled
             * by the application (GTK+ applications can learn about
             * cursor theme changes by listening for change notification
             * for the corresponding #GtkSetting).
             * @param theme the name of the cursor theme to use, or %NULL to unset         a previously set value
             * @param size the cursor size to use, or 0 to keep the previous size
             */
            set_cursor_theme(theme: string | null, size: number): void;
            /**
             * Sets the startup notification ID for a display.
             *
             * This is usually taken from the value of the DESKTOP_STARTUP_ID
             * environment variable, but in some cases (such as the application not
             * being launched using exec()) it can come from other sources.
             *
             * If the ID contains the string "_TIME" then the portion following that
             * string is taken to be the X11 timestamp of the event that triggered
             * the application to be launched and the GDK current event time is set
             * accordingly.
             *
             * The startup ID is also what is used to signal that the startup is
             * complete (for example, when opening a window or when calling
             * gdk_notify_startup_complete()).
             * @param startup_id the startup notification ID (must be valid utf8)
             */
            set_startup_notification_id(startup_id: string): void;
            /**
             * Forces a specific window scale for all windows on this display,
             * instead of using the default or user configured scale. This
             * is can be used to disable scaling support by setting `scale` to
             * 1, or to programmatically set the window scale.
             *
             * Once the scale is set by this call it will not change in response
             * to later user configuration changes.
             * @param scale The new scale value
             */
            set_window_scale(scale: number): void;
            /**
             * Convert a string from the encoding of the current
             * locale into a form suitable for storing in a window property.
             * @param str a nul-terminated string
             * @returns 0 upon success, non-zero upon failure
             */
            string_to_compound_text(str: string): [number, Gdk.Atom, number, Uint8Array];
            /**
             * Convert a text string from the encoding as it is stored
             * in a property into an array of strings in the encoding of
             * the current locale. (The elements of the array represent the
             * nul-separated elements of the original text string.)
             * @param encoding an atom representing the encoding. The most    common values for this are STRING, or COMPOUND_TEXT.    This is value used as the type for the property
             * @param format the format of the property
             * @param text The text data
             * @param length The number of items to transform
             * @param list location to store an  array of strings in    the encoding of the current locale. This array should be    freed using gdk_free_text_list().
             * @returns the number of strings stored in list, or 0,     if the conversion failed
             */
            text_property_to_text_list(
                encoding: Gdk.Atom,
                format: number,
                text: number,
                length: number,
                list: string,
            ): number;
            /**
             * Ungrab `display` after it has been grabbed with
             * gdk_x11_display_grab().
             */
            ungrab(): void;
            /**
             * Converts from UTF-8 to compound text.
             * @param str a UTF-8 string
             * @returns %TRUE if the conversion succeeded,     otherwise %FALSE
             */
            utf8_to_compound_text(str: string): [boolean, Gdk.Atom, number, Uint8Array];
        }

        module X11DisplayManager {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.DisplayManager.ConstructorProps {}
        }

        class X11DisplayManager extends Gdk.DisplayManager {
            static $gtype: GObject.GType<X11DisplayManager>;

            // Constructors

            constructor(properties?: Partial<X11DisplayManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11DragContext {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.DragContext.ConstructorProps {}
        }

        class X11DragContext extends Gdk.DragContext {
            static $gtype: GObject.GType<X11DragContext>;

            // Constructors

            constructor(properties?: Partial<X11DragContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11GLContext {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
        }

        class X11GLContext extends Gdk.GLContext {
            static $gtype: GObject.GType<X11GLContext>;

            // Constructors

            constructor(properties?: Partial<X11GLContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11Keymap {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Keymap.ConstructorProps {}
        }

        class X11Keymap extends Gdk.Keymap {
            static $gtype: GObject.GType<X11Keymap>;

            // Constructors

            constructor(properties?: Partial<X11Keymap.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts the group from the state field sent in an X Key event.
             * This is only needed for code processing raw X events, since #GdkEventKey
             * directly includes an is_modifier field.
             * @param state raw state returned from X
             * @returns the index of the active keyboard group for the event
             */
            get_group_for_state(state: number): number;
            /**
             * Determines whether a particular key code represents a key that
             * is a modifier. That is, it’s a key that normally just affects
             * the keyboard state and the behavior of other keys rather than
             * producing a direct effect itself. This is only needed for code
             * processing raw X events, since #GdkEventKey directly includes
             * an is_modifier field.
             * @param keycode the hardware keycode from a key event
             * @returns %TRUE if the hardware keycode is a modifier key
             */
            key_is_modifier(keycode: number): boolean;
        }

        module X11Monitor {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Monitor.ConstructorProps {}
        }

        class X11Monitor extends Gdk.Monitor {
            static $gtype: GObject.GType<X11Monitor>;

            // Constructors

            constructor(properties?: Partial<X11Monitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static get_output(monitor: Gdk.Monitor): xlib.XID;
        }

        module X11Screen {
            // Signal callback interfaces

            interface WindowManagerChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gdk.Screen.ConstructorProps {}
        }

        class X11Screen extends Gdk.Screen {
            static $gtype: GObject.GType<X11Screen>;

            // Constructors

            constructor(properties?: Partial<X11Screen.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'window-manager-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'window-manager-changed', callback: (_source: this) => void): number;
            emit(signal: 'window-manager-changed'): void;

            // Methods

            /**
             * Returns the current workspace for `screen` when running under a
             * window manager that supports multiple workspaces, as described
             * in the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
             * @returns the current workspace, or 0 if workspaces are not supported
             */
            get_current_desktop(): number;
            /**
             * Gets the XID of the specified output/monitor.
             * If the X server does not support version 1.2 of the RANDR
             * extension, 0 is returned.
             * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
             * @returns the XID of the monitor
             */
            get_monitor_output(monitor_num: number): xlib.XID;
            /**
             * Returns the number of workspaces for `screen` when running under a
             * window manager that supports multiple workspaces, as described
             * in the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
             * @returns the number of workspaces, or 0 if workspaces are not supported
             */
            get_number_of_desktops(): number;
            /**
             * Returns the index of a #GdkScreen.
             * @returns the position of @screen among the screens     of its display
             */
            get_screen_number(): number;
            /**
             * Returns the name of the window manager for `screen`.
             * @returns the name of the window manager screen @screen, or "unknown" if the window manager is unknown. The string is owned by GDK and should not be freed.
             */
            get_window_manager_name(): string;
            /**
             * Returns the screen of a #GdkScreen.
             * @returns an Xlib Screen*
             */
            get_xscreen(): xlib.Screen;
            /**
             * Looks up the #GdkVisual for a particular screen and X Visual ID.
             * @param xvisualid an X Visual ID.
             * @returns the #GdkVisual (owned by the screen   object), or %NULL if the visual ID wasn’t found.
             */
            lookup_visual(xvisualid: xlib.VisualID): X11Visual;
            /**
             * This function is specific to the X11 backend of GDK, and indicates
             * whether the window manager supports a certain hint from the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
             *
             * When using this function, keep in mind that the window manager
             * can change over time; so you shouldn’t use this function in
             * a way that impacts persistent application state. A common bug
             * is that your application can start up before the window manager
             * does when the user logs in, and before the window manager starts
             * gdk_x11_screen_supports_net_wm_hint() will return %FALSE for every property.
             * You can monitor the window_manager_changed signal on #GdkScreen to detect
             * a window manager change.
             * @param property a property atom.
             * @returns %TRUE if the window manager supports @property
             */
            supports_net_wm_hint(property: Gdk.Atom): boolean;
        }

        module X11Visual {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Visual.ConstructorProps {}
        }

        class X11Visual extends Gdk.Visual {
            static $gtype: GObject.GType<X11Visual>;

            // Constructors

            constructor(properties?: Partial<X11Visual.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the X visual belonging to a #GdkVisual.
             * @returns an Xlib Visual*.
             */
            get_xvisual(): xlib.Visual;
        }

        module X11Window {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Window.ConstructorProps {}
        }

        class X11Window extends Gdk.Window {
            static $gtype: GObject.GType<X11Window>;

            // Constructors

            constructor(properties?: Partial<X11Window.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static foreign_new_for_display(display: X11Display, window: xlib.Window): X11Window;

            // Static methods

            /**
             * Looks up the #GdkWindow that wraps the given native window handle.
             * @param display the #GdkDisplay corresponding to the           window handle
             * @param window an Xlib Window
             */
            static lookup_for_display(display: X11Display, window: xlib.Window): X11Window;

            // Methods

            /**
             * Gets the number of the workspace `window` is on.
             * @returns the current workspace of @window
             */
            get_desktop(): number;
            /**
             * Returns the X resource (window) belonging to a #GdkWindow.
             * @returns the ID of @drawable’s X resource.
             */
            get_xid(): xlib.Window;
            /**
             * Moves the window to the correct workspace when running under a
             * window manager that supports multiple workspaces, as described
             * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
             * Will not do anything if the window is already on all workspaces.
             */
            move_to_current_desktop(): void;
            /**
             * Moves the window to the given workspace when running unde a
             * window manager that supports multiple workspaces, as described
             * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
             * @param desktop the number of the workspace to move the window to
             */
            move_to_desktop(desktop: number): void;
            /**
             * This is the same as gdk_window_set_shadow_width() but it only works
             * on GdkX11Window.
             * @param left The left extent
             * @param right The right extent
             * @param top The top extent
             * @param bottom The bottom extent
             */
            set_frame_extents(left: number, right: number, top: number, bottom: number): void;
            /**
             * This function can be used to disable frame synchronization for a window.
             * Normally frame synchronziation will be enabled or disabled based on whether
             * the system has a compositor that supports frame synchronization, but if
             * the window is not directly managed by the window manager, then frame
             * synchronziation may need to be disabled. This is the case for a window
             * embedded via the XEMBED protocol.
             * @param frame_sync_enabled whether frame-synchronization should be enabled
             */
            set_frame_sync_enabled(frame_sync_enabled: boolean): void;
            /**
             * Set a hint for the window manager, requesting that the titlebar
             * should be hidden when the window is maximized.
             *
             * Note that this property is automatically updated by GTK+, so this
             * function should only be used by applications which do not use GTK+
             * to create toplevel windows.
             * @param hide_titlebar_when_maximized whether to hide the titlebar when                                maximized
             */
            set_hide_titlebar_when_maximized(hide_titlebar_when_maximized: boolean): void;
            /**
             * GTK+ applications can request a dark theme variant. In order to
             * make other applications - namely window managers using GTK+ for
             * themeing - aware of this choice, GTK+ uses this function to
             * export the requested theme variant as _GTK_THEME_VARIANT property
             * on toplevel windows.
             *
             * Note that this property is automatically updated by GTK+, so this
             * function should only be used by applications which do not use GTK+
             * to create toplevel windows.
             * @param variant the theme variant to export
             */
            set_theme_variant(variant: string): void;
            /**
             * The application can use this call to update the _NET_WM_USER_TIME
             * property on a toplevel window.  This property stores an Xserver
             * time which represents the time of the last user input event
             * received for this window.  This property may be used by the window
             * manager to alter the focus, stacking, and/or placement behavior of
             * windows when they are mapped depending on whether the new window
             * was created by a user action or is a "pop-up" window activated by a
             * timer or some other event.
             *
             * Note that this property is automatically updated by GDK, so this
             * function should only be used by applications which handle input
             * events bypassing GDK.
             * @param timestamp An XServer timestamp to which the property should be set
             */
            set_user_time(timestamp: number): void;
            /**
             * This function modifies or removes an arbitrary X11 window
             * property of type UTF8_STRING.  If the given `window` is
             * not a toplevel window, it is ignored.
             * @param name Property name, will be interned as an X atom
             * @param value Property value, or %NULL to delete
             */
            set_utf8_property(name: string, value?: string | null): void;
        }

        type X11AppLaunchContextClass = typeof X11AppLaunchContext;
        type X11CursorClass = typeof X11Cursor;
        type X11DeviceCoreClass = typeof X11DeviceCore;
        type X11DeviceManagerCoreClass = typeof X11DeviceManagerCore;
        type X11DeviceManagerXI2Class = typeof X11DeviceManagerXI2;
        type X11DeviceXI2Class = typeof X11DeviceXI2;
        type X11DisplayClass = typeof X11Display;
        type X11DisplayManagerClass = typeof X11DisplayManager;
        type X11DragContextClass = typeof X11DragContext;
        type X11GLContextClass = typeof X11GLContext;
        type X11KeymapClass = typeof X11Keymap;
        type X11MonitorClass = typeof X11Monitor;
        type X11ScreenClass = typeof X11Screen;
        type X11VisualClass = typeof X11Visual;
        type X11WindowClass = typeof X11Window;
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

    export default GdkX11;
}

declare module 'gi://GdkX11' {
    import GdkX1130 from 'gi://GdkX11?version=3.0';
    export default GdkX1130;
}
// END
