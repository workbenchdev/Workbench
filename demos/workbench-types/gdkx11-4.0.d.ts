/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
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

declare module 'gi://GdkX11?version=4.0' {
    // Module dependencies
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace GdkX11 {
        /**
         * GdkX11-4.0
         */

        export namespace X11DeviceType {
            export const $gtype: GObject.GType<X11DeviceType>;
        }

        enum X11DeviceType {
            LOGICAL,
            PHYSICAL,
            FLOATING,
        }
        /**
         * Returns the device ID as seen by XInput2.
         * @param device a `GdkDevice`
         * @returns the XInput2 device ID
         */
        function x11_device_get_id(device: X11DeviceXI2): number;
        /**
         * Returns the `GdkDevice` that wraps the given device ID.
         * @param device_manager a `GdkDeviceManager`
         * @param device_id a device ID, as understood by the XInput2 protocol
         * @returns The   `GdkDevice` wrapping the device ID, or %NULL if the given ID   doesn’t currently represent a device.
         */
        function x11_device_manager_lookup(device_manager: X11DeviceManagerXI2, device_id: number): X11DeviceXI2 | null;
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
         * Routine to get the current X server time stamp.
         * @param surface a `GdkSurface`, used for communication   with the server. The surface must have `GDK_PROPERTY_CHANGE_MASK` in   its events mask or a hang will result.
         * @returns the time stamp
         */
        function x11_get_server_time(surface: X11Surface): number;
        /**
         * Returns the X atom for a `GdkDisplay` corresponding to `atom_name`.
         * This function caches the result, so if called repeatedly it is much
         * faster than XInternAtom(), which is a round trip to the server each time.
         * @param display a `GdkDisplay`
         * @param atom_name a string
         * @returns a X atom for a `GdkDisplay`
         */
        function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
        /**
         * Returns the name of an X atom for its display. This
         * function is meant mainly for debugging, so for convenience, unlike
         * XAtomName() and the result doesn’t need to
         * be freed.
         * @param display the `GdkDisplay` where @xatom is defined
         * @param xatom an X atom
         * @returns name of the X atom; this string is owned by GDK,   so it shouldn’t be modified or freed.
         */
        function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
        /**
         * Find the `GdkDisplay` corresponding to `xdisplay,` if any exists.
         * @param xdisplay a pointer to an X Display
         * @returns the `GdkDisplay`, if found, otherwise %NULL.
         */
        function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
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

        module X11DeviceManagerXI2 {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display: Gdk.Display;
                major: number;
                minor: number;
                opcode: number;
            }
        }

        class X11DeviceManagerXI2 extends GObject.Object {
            static $gtype: GObject.GType<X11DeviceManagerXI2>;

            // Properties

            get display(): Gdk.Display;
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
            // Signal callback interfaces

            interface Xevent {
                (xevent?: any | null): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gdk.Display.ConstructorProps {}
        }

        class X11Display extends Gdk.Display {
            static $gtype: GObject.GType<X11Display>;

            // Constructors

            constructor(properties?: Partial<X11Display.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'xevent', callback: (_source: this, xevent: any | null) => boolean): number;
            connect_after(signal: 'xevent', callback: (_source: this, xevent: any | null) => boolean): number;
            emit(signal: 'xevent', xevent?: any | null): void;

            // Static methods

            /**
             * Tries to open a new display to the X server given by
             * `display_name`. If opening the display fails, %NULL is
             * returned.
             * @param display_name name of the X display.   See the XOpenDisplay() for details.
             */
            static open(display_name?: string | null): Gdk.Display | null;
            /**
             * Sets the program class.
             *
             * The X11 backend uses the program class to set the class name part
             * of the `WM_CLASS` property on toplevel windows; see the ICCCM.
             * @param display a `GdkDisplay`
             * @param program_class a string
             */
            static set_program_class(display: Gdk.Display, program_class: string): void;

            // Methods

            /**
             * Pops the error trap pushed by gdk_x11_display_error_trap_push().
             * Will XSync() if necessary and will always block until
             * the error is known to have occurred or not occurred,
             * so the error code can be returned.
             *
             * If you don’t need to use the return value,
             * gdk_x11_display_error_trap_pop_ignored() would be more efficient.
             * @returns X error code or 0 on success
             */
            error_trap_pop(): number;
            /**
             * Pops the error trap pushed by gdk_x11_display_error_trap_push().
             * Does not block to see if an error occurred; merely records the
             * range of requests to ignore errors for, and ignores those errors
             * if they arrive asynchronously.
             */
            error_trap_pop_ignored(): void;
            /**
             * Begins a range of X requests on `display` for which X error events
             * will be ignored. Unignored errors (when no trap is pushed) will abort
             * the application. Use gdk_x11_display_error_trap_pop() or
             * gdk_x11_display_error_trap_pop_ignored()to lift a trap pushed
             * with this function.
             */
            error_trap_push(): void;
            /**
             * Returns the default group leader surface for all toplevel surfaces
             * on `display`. This surface is implicitly created by GDK.
             * See gdk_x11_surface_set_group().
             * @returns The default group leader surface for @display
             */
            get_default_group(): Gdk.Surface;
            /**
             * Retrieves the EGL display connection object for the given GDK display.
             *
             * This function returns `NULL` if GDK is using GLX.
             * @returns the EGL display object
             */
            get_egl_display(): any | null;
            /**
             * Retrieves the version of the EGL implementation.
             * @returns %TRUE if EGL is available
             */
            get_egl_version(): [boolean, number, number];
            /**
             * Retrieves the version of the GLX implementation.
             * @returns %TRUE if GLX is available
             */
            get_glx_version(): [boolean, number, number];
            /**
             * Gets the primary monitor for the display.
             *
             * The primary monitor is considered the monitor where the “main desktop”
             * lives. While normal application surfaces typically allow the window
             * manager to place the surfaces, specialized desktop applications
             * such as panels should place themselves on the primary monitor.
             *
             * If no monitor is the designated primary monitor, any monitor
             * (usually the first) may be returned.
             * @returns the primary monitor, or any monitor if no   primary monitor is configured by the user
             */
            get_primary_monitor(): Gdk.Monitor;
            /**
             * Retrieves the `GdkX11Screen` of the `display`.
             * @returns the `GdkX11Screen`
             */
            get_screen(): X11Screen;
            /**
             * Gets the startup notification ID for a display.
             * @returns the startup notification ID for @display
             */
            get_startup_notification_id(): string;
            // Conflicted with Gdk.Display.get_startup_notification_id
            get_startup_notification_id(...args: never[]): any;
            /**
             * Returns the timestamp of the last user interaction on
             * `display`. The timestamp is taken from events caused
             * by user interaction such as key presses or pointer
             * movements. See gdk_x11_surface_set_user_time().
             * @returns the timestamp of the last user interaction
             */
            get_user_time(): number;
            /**
             * Returns the X cursor belonging to a `GdkCursor`, potentially
             * creating the cursor.
             *
             * Be aware that the returned cursor may not be unique to `cursor`.
             * It may for example be shared with its fallback cursor. On old
             * X servers that don't support the XCursor extension, all cursors
             * may even fall back to a few default cursors.
             * @param cursor a `GdkCursor`
             * @returns an Xlib Cursor.
             */
            get_xcursor(cursor: Gdk.Cursor): xlib.Cursor;
            /**
             * Returns the X display of a `GdkDisplay`.
             * @returns an X display
             */
            get_xdisplay(): xlib.Display;
            /**
             * Returns the root X window used by `GdkDisplay`.
             * @returns an X Window
             */
            get_xrootwindow(): xlib.Window;
            /**
             * Returns the X Screen used by `GdkDisplay`.
             * @returns an X Screen
             */
            get_xscreen(): xlib.Screen;
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
             * with [ctor`Gdk`.Cursor.new_from_name] are updated to reflect the theme
             * change. Custom cursors constructed with [ctor`Gdk`.Cursor.new_from_texture]
             * will have to be handled by the application (GTK applications can learn
             * about cursor theme changes by listening for change notification
             * for the corresponding `GtkSetting`).
             * @param theme the name of the cursor theme to use, or %NULL   to unset a previously set value
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
             * gdk_display_notify_startup_complete()).
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
            set_surface_scale(scale: number): void;
            /**
             * Convert a string from the encoding of the current
             * locale into a form suitable for storing in a window property.
             * @param str a nul-terminated string
             * @returns 0 upon success, non-zero upon failure
             */
            string_to_compound_text(str: string): [number, string, number, Uint8Array];
            /**
             * Convert a text string from the encoding as it is stored
             * in a property into an array of strings in the encoding of
             * the current locale. (The elements of the array represent the
             * nul-separated elements of the original text string.)
             * @param encoding a string representing the encoding. The most   common values for this are "STRING", or "COMPOUND_TEXT".   This is value used as the type for the property
             * @param format the format of the property
             * @param text The text data
             * @param length The number of items to transform
             * @param list location to store an  array of strings in   the encoding of the current locale. This array should be   freed using gdk_x11_free_text_list().
             * @returns the number of strings stored in list, or 0,   if the conversion failed
             */
            text_property_to_text_list(
                encoding: string,
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
             * @returns %TRUE if the conversion succeeded, otherwise %FALSE
             */
            utf8_to_compound_text(str: string): [boolean, string, number, Uint8Array];
        }

        module X11Drag {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Drag.ConstructorProps {}
        }

        class X11Drag extends Gdk.Drag {
            static $gtype: GObject.GType<X11Drag>;

            // Constructors

            constructor(properties?: Partial<X11Drag.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module X11GLContext {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
        }

        abstract class X11GLContext extends Gdk.GLContext {
            static $gtype: GObject.GType<X11GLContext>;

            // Constructors

            constructor(properties?: Partial<X11GLContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
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

            // Methods

            /**
             * Returns the XID of the Output corresponding to `monitor`.
             * @returns the XID of @monitor
             */
            get_output(): xlib.XID;
            /**
             * Retrieves the size and position of the “work area” on a monitor
             * within the display coordinate space.
             *
             * The returned geometry is in ”application pixels”, not in ”device pixels”
             * (see [method`Gdk`.Monitor.get_scale_factor]).
             */
            get_workarea(): Gdk.Rectangle;
        }

        module X11Screen {
            // Signal callback interfaces

            interface WindowManagerChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class X11Screen extends GObject.Object {
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
             * Returns the index of a `GdkX11Screen`.
             * @returns the position of @screen among the screens   of its display
             */
            get_screen_number(): number;
            /**
             * Returns the name of the window manager for `screen`.
             * @returns the name of the window manager screen @screen, or "unknown" if the window manager is unknown. The string is owned by GDK and should not be freed.
             */
            get_window_manager_name(): string;
            /**
             * Returns the screen of a `GdkX11Screen`.
             * @returns an Xlib Screen*
             */
            get_xscreen(): xlib.Screen;
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
             * You can monitor the window_manager_changed signal on `GdkX11Screen` to detect
             * a window manager change.
             * @param property_name name of the WM property
             * @returns %TRUE if the window manager supports @property
             */
            supports_net_wm_hint(property_name: string): boolean;
        }

        module X11Surface {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Surface.ConstructorProps {}
        }

        class X11Surface extends Gdk.Surface {
            static $gtype: GObject.GType<X11Surface>;

            // Constructors

            constructor(properties?: Partial<X11Surface.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Looks up the `GdkSurface` that wraps the given native window handle.
             * @param display the `GdkDisplay` corresponding to the   window handle
             * @param window an Xlib Window
             */
            static lookup_for_display(display: X11Display, window: xlib.Window): X11Surface;

            // Methods

            /**
             * Gets the number of the workspace `surface` is on.
             * @returns the current workspace of @surface
             */
            get_desktop(): number;
            /**
             * Returns the group this surface belongs to.
             * @returns The group of this surface;
             */
            get_group(): Gdk.Surface | null;
            /**
             * Returns the X resource (surface) belonging to a `GdkSurface`.
             * @returns the ID of @drawable’s X resource.
             */
            get_xid(): xlib.Window;
            /**
             * Moves the surface to the correct workspace when running under a
             * window manager that supports multiple workspaces, as described
             * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
             * Will not do anything if the surface is already on all workspaces.
             */
            move_to_current_desktop(): void;
            /**
             * Moves the surface to the given workspace when running unde a
             * window manager that supports multiple workspaces, as described
             * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
             * @param desktop the number of the workspace to move the surface to
             */
            move_to_desktop(desktop: number): void;
            /**
             * This function can be used to disable frame synchronization for a surface.
             * Normally frame synchronziation will be enabled or disabled based on whether
             * the system has a compositor that supports frame synchronization, but if
             * the surface is not directly managed by the window manager, then frame
             * synchronziation may need to be disabled. This is the case for a surface
             * embedded via the XEMBED protocol.
             * @param frame_sync_enabled whether frame-synchronization should be enabled
             */
            set_frame_sync_enabled(frame_sync_enabled: boolean): void;
            /**
             * Sets the group leader of `surface` to be `leader`.
             * See the ICCCM for details.
             * @param leader a `GdkSurface`
             */
            set_group(leader: Gdk.Surface): void;
            /**
             * Sets a hint on `surface` that pagers should not
             * display it. See the EWMH for details.
             * @param skips_pager %TRUE to skip pagers
             */
            set_skip_pager_hint(skips_pager: boolean): void;
            /**
             * Sets a hint on `surface` that taskbars should not
             * display it. See the EWMH for details.
             * @param skips_taskbar %TRUE to skip taskbars
             */
            set_skip_taskbar_hint(skips_taskbar: boolean): void;
            /**
             * GTK applications can request a dark theme variant. In order to
             * make other applications - namely window managers using GTK for
             * themeing - aware of this choice, GTK uses this function to
             * export the requested theme variant as _GTK_THEME_VARIANT property
             * on toplevel surfaces.
             *
             * Note that this property is automatically updated by GTK, so this
             * function should only be used by applications which do not use GTK
             * to create toplevel surfaces.
             * @param variant the theme variant to export
             */
            set_theme_variant(variant: string): void;
            /**
             * Sets a hint on `surface` that it needs user attention.
             * See the ICCCM for details.
             * @param urgent %TRUE to indicate urgenct attention needed
             */
            set_urgency_hint(urgent: boolean): void;
            /**
             * The application can use this call to update the _NET_WM_USER_TIME
             * property on a toplevel surface.  This property stores an Xserver
             * time which represents the time of the last user input event
             * received for this surface.  This property may be used by the window
             * manager to alter the focus, stacking, and/or placement behavior of
             * surfaces when they are mapped depending on whether the new surface
             * was created by a user action or is a "pop-up" surface activated by a
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
             * property of type UTF8_STRING.  If the given `surface` is
             * not a toplevel surface, it is ignored.
             * @param name Property name, will be interned as an X atom
             * @param value Property value, or %NULL to delete
             */
            set_utf8_property(name: string, value?: string | null): void;
        }

        type X11AppLaunchContextClass = typeof X11AppLaunchContext;
        type X11DeviceManagerXI2Class = typeof X11DeviceManagerXI2;
        type X11DeviceXI2Class = typeof X11DeviceXI2;
        type X11DisplayClass = typeof X11Display;
        type X11DragClass = typeof X11Drag;
        type X11GLContextClass = typeof X11GLContext;
        type X11MonitorClass = typeof X11Monitor;
        type X11ScreenClass = typeof X11Screen;
        type X11SurfaceClass = typeof X11Surface;
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
    import GdkX1140 from 'gi://GdkX11?version=4.0';
    export default GdkX1140;
}
// END
