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

declare module 'gi://GdkWayland?version=4.0' {
    // Module dependencies
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

    export namespace GdkWayland {
        /**
         * GdkWayland-4.0
         */

        interface WaylandToplevelExported {
            (toplevel: WaylandToplevel, handle: string): void;
        }
        module WaylandDevice {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Device.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkDevice`.
         *
         * Beyond the regular [class`Gdk`.Device] API, the Wayland implementation
         * provides access to Wayland objects such as the `wl_seat` with
         * [method`GdkWayland`.WaylandDevice.get_wl_seat], the `wl_keyboard` with
         * [method`GdkWayland`.WaylandDevice.get_wl_keyboard] and the `wl_pointer` with
         * [method`GdkWayland`.WaylandDevice.get_wl_pointer].
         */
        class WaylandDevice extends Gdk.Device {
            static $gtype: GObject.GType<WaylandDevice>;

            // Constructors

            constructor(properties?: Partial<WaylandDevice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the `/dev/input/event*` path of this device.
             *
             * For `GdkDevice`s that possibly coalesce multiple hardware
             * devices (eg. mouse, keyboard, touch,...), this function
             * will return %NULL.
             *
             * This is most notably implemented for devices of type
             * %GDK_SOURCE_PEN, %GDK_SOURCE_TABLET_PAD.
             * @returns the `/dev/input/event*`   path of this device
             */
            get_node_path(): string | null;
            /**
             * Returns the `xkb_keymap` of a `GdkDevice`.
             * @returns a `struct xkb_keymap`
             */
            get_xkb_keymap(): any | null;
        }

        module WaylandDisplay {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Display.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkDisplay`.
         *
         * Beyond the regular [class`Gdk`.Display] API, the Wayland implementation
         * provides access to Wayland objects such as the `wl_display` with
         * [method`GdkWayland`.WaylandDisplay.get_wl_display], the `wl_compositor` with
         * [method`GdkWayland`.WaylandDisplay.get_wl_compositor].
         *
         * You can find out what Wayland globals are supported by a display
         * with [method`GdkWayland`.WaylandDisplay.query_registry].
         */
        class WaylandDisplay extends Gdk.Display {
            static $gtype: GObject.GType<WaylandDisplay>;

            // Constructors

            constructor(properties?: Partial<WaylandDisplay.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves the EGL display connection object for the given GDK display.
             * @returns the EGL display
             */
            get_egl_display(): any | null;
            /**
             * Gets the startup notification ID for a Wayland display, or %NULL
             * if no ID has been defined.
             * @returns the startup notification ID for @display
             */
            get_startup_notification_id(): string | null;
            /**
             * Returns %TRUE if the interface was found in the display
             * `wl_registry.global` handler.
             * @param global global interface to query in the registry
             * @returns %TRUE if the global is offered by the compositor
             */
            query_registry(global: string): boolean;
            /**
             * Sets the cursor theme for the given `display`.
             * @param name the new cursor theme
             * @param size the size to use for cursors
             */
            set_cursor_theme(name: string, size: number): void;
            /**
             * Sets the startup notification ID for a display.
             *
             * This is usually taken from the value of the `DESKTOP_STARTUP_ID`
             * environment variable, but in some cases (such as the application not
             * being launched using exec()) it can come from other sources.
             *
             * The startup ID is also what is used to signal that the startup is
             * complete (for example, when opening a window or when calling
             * [method`Gdk`.Display.notify_startup_complete]).
             * @param startup_id the startup notification ID (must be valid utf8)
             */
            set_startup_notification_id(startup_id: string): void;
        }

        module WaylandGLContext {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkGLContext`.
         */
        class WaylandGLContext extends Gdk.GLContext {
            static $gtype: GObject.GType<WaylandGLContext>;

            // Constructors

            constructor(properties?: Partial<WaylandGLContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WaylandMonitor {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Monitor.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkMonitor`.
         *
         * Beyond the [class`Gdk`.Monitor] API, the Wayland implementation
         * offers access to the Wayland `wl_output` object with
         * [method`GdkWayland`.WaylandMonitor.get_wl_output].
         */
        class WaylandMonitor extends Gdk.Monitor {
            static $gtype: GObject.GType<WaylandMonitor>;

            // Constructors

            constructor(properties?: Partial<WaylandMonitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WaylandPopup {
            // Constructor properties interface

            interface ConstructorProps extends WaylandSurface.ConstructorProps, Gdk.Popup.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkPopup`.
         */
        class WaylandPopup extends WaylandSurface implements Gdk.Popup {
            static $gtype: GObject.GType<WaylandPopup>;

            // Constructors

            constructor(properties?: Partial<WaylandPopup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited properties
            /**
             * Whether to hide on outside clicks.
             */
            get autohide(): boolean;
            /**
             * The parent surface.
             */
            get parent(): Gdk.Surface;
            /**
             * The mouse pointer for the `GdkSurface`.
             */
            get cursor(): Gdk.Cursor;
            set cursor(val: Gdk.Cursor);
            /**
             * The `GdkDisplay` connection of the surface.
             */
            get display(): Gdk.Display;
            /**
             * The `GdkFrameClock` of the surface.
             */
            get frame_clock(): Gdk.FrameClock;
            /**
             * The `GdkFrameClock` of the surface.
             */
            get frameClock(): Gdk.FrameClock;
            /**
             * The height of the surface, in pixels.
             */
            get height(): number;
            /**
             * Whether the surface is mapped.
             */
            get mapped(): boolean;
            /**
             * The scale of the surface.
             */
            get scale(): number;
            /**
             * The scale factor of the surface.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            get scale_factor(): number;
            /**
             * The scale factor of the surface.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            get scaleFactor(): number;
            /**
             * The width of the surface in pixels.
             */
            get width(): number;

            // Inherited methods
            /**
             * Returns whether this popup is set to hide on outside clicks.
             * @returns %TRUE if @popup will autohide
             */
            get_autohide(): boolean;
            /**
             * Returns the parent surface of a popup.
             * @returns the parent surface
             */
            get_parent(): Gdk.Surface | null;
            /**
             * Obtains the position of the popup relative to its parent.
             * @returns the X coordinate of @popup position
             */
            get_position_x(): number;
            /**
             * Obtains the position of the popup relative to its parent.
             * @returns the Y coordinate of @popup position
             */
            get_position_y(): number;
            /**
             * Gets the current popup rectangle anchor.
             *
             * The value returned may change after calling [method`Gdk`.Popup.present],
             * or after the [signal`Gdk`.Surface::layout] signal is emitted.
             * @returns the current rectangle anchor value of @popup
             */
            get_rect_anchor(): Gdk.Gravity;
            /**
             * Gets the current popup surface anchor.
             *
             * The value returned may change after calling [method`Gdk`.Popup.present],
             * or after the [signal`Gdk`.Surface::layout] signal is emitted.
             * @returns the current surface anchor value of @popup
             */
            get_surface_anchor(): Gdk.Gravity;
            /**
             * Present `popup` after having processed the `GdkPopupLayout` rules.
             *
             * If the popup was previously not showing, it will be shown,
             * otherwise it will change position according to `layout`.
             *
             * After calling this function, the result should be handled in response
             * to the [signal`Gdk`.Surface::layout] signal being emitted. The resulting
             * popup position can be queried using [method`Gdk`.Popup.get_position_x],
             * [method`Gdk`.Popup.get_position_y], and the resulting size will be sent as
             * parameters in the layout signal. Use [method`Gdk`.Popup.get_rect_anchor]
             * and [method`Gdk`.Popup.get_surface_anchor] to get the resulting anchors.
             *
             * Presenting may fail, for example if the `popup` is set to autohide
             * and is immediately hidden upon being presented. If presenting failed,
             * the [signal`Gdk`.Surface::layout] signal will not me emitted.
             * @param width the unconstrained popup width to layout
             * @param height the unconstrained popup height to layout
             * @param layout the `GdkPopupLayout` object used to layout
             * @returns %FALSE if it failed to be presented, otherwise %TRUE.
             */
            present(width: number, height: number, layout: Gdk.PopupLayout): boolean;
            /**
             * Emits a short beep associated to `surface`.
             *
             * If the display of `surface` does not support per-surface beeps,
             * emits a short beep on the display just as [method`Gdk`.Display.beep].
             */
            beep(): void;
            /**
             * Creates a new `GdkCairoContext` for rendering on `surface`.
             * @returns the newly created `GdkCairoContext`
             */
            create_cairo_context(): Gdk.CairoContext;
            /**
             * Creates a new `GdkGLContext` for the `GdkSurface`.
             *
             * The context is disconnected from any particular surface or surface.
             * If the creation of the `GdkGLContext` failed, `error` will be set.
             * Before using the returned `GdkGLContext`, you will need to
             * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
             * @returns the newly created `GdkGLContext`
             */
            create_gl_context(): Gdk.GLContext;
            /**
             * Create a new Cairo surface that is as compatible as possible with the
             * given `surface`.
             *
             * For example the new surface will have the same fallback resolution
             * and font options as `surface`. Generally, the new surface will also
             * use the same backend as `surface,` unless that is not possible for
             * some reason. The type of the returned surface may be examined with
             * cairo_surface_get_type().
             *
             * Initially the surface contents are all 0 (transparent if contents
             * have transparency, black otherwise.)
             *
             * This function always returns a valid pointer, but it will return a
             * pointer to a “nil” surface if `other` is already in an error state
             * or any other error occurs.
             * @param content the content for the new surface
             * @param width width of the new surface
             * @param height height of the new surface
             * @returns a pointer to the newly allocated surface. The caller   owns the surface and should call cairo_surface_destroy() when done   with it.
             */
            create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;
            /**
             * Sets an error and returns %NULL.
             * @returns %NULL
             */
            create_vulkan_context(): Gdk.VulkanContext;
            /**
             * Destroys the window system resources associated with `surface` and
             * decrements `surface'`s reference count.
             *
             * The window system resources for all children of `surface` are also
             * destroyed, but the children’s reference counts are not decremented.
             *
             * Note that a surface will not be destroyed automatically when its
             * reference count reaches zero. You must call this function yourself
             * before that happens.
             */
            destroy(): void;
            /**
             * Retrieves a `GdkCursor` pointer for the cursor currently set on the
             * `GdkSurface`.
             *
             * If the return value is %NULL then there is no custom cursor set on
             * the surface, and it is using the cursor for its parent surface.
             *
             * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
             * @returns a `GdkCursor`
             */
            get_cursor(): Gdk.Cursor | null;
            /**
             * Retrieves a `GdkCursor` pointer for the `device` currently set on the
             * specified `GdkSurface`.
             *
             * If the return value is %NULL then there is no custom cursor set on the
             * specified surface, and it is using the cursor for its parent surface.
             *
             * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
             * @param device a pointer `GdkDevice`
             * @returns a `GdkCursor`
             */
            get_device_cursor(device: Gdk.Device): Gdk.Cursor | null;
            /**
             * Obtains the current device position and modifier state.
             *
             * The position is given in coordinates relative to the upper
             * left corner of `surface`.
             * @param device pointer `GdkDevice` to query to
             * @returns %TRUE if the device is over the surface
             */
            get_device_position(device: Gdk.Device): [boolean, number, number, Gdk.ModifierType | null];
            /**
             * Gets the `GdkDisplay` associated with a `GdkSurface`.
             * @returns the `GdkDisplay` associated with @surface
             */
            get_display(): Gdk.Display;
            /**
             * Gets the frame clock for the surface.
             *
             * The frame clock for a surface never changes unless the surface is
             * reparented to a new toplevel surface.
             * @returns the frame clock
             */
            get_frame_clock(): Gdk.FrameClock;
            /**
             * Returns the height of the given `surface`.
             *
             * Surface size is reported in ”application pixels”, not
             * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
             * @returns The height of @surface
             */
            get_height(): number;
            /**
             * Checks whether the surface has been mapped.
             *
             * A surface is mapped with [method`Gdk`.Toplevel.present]
             * or [method`Gdk`.Popup.present].
             * @returns %TRUE if the surface is mapped
             */
            get_mapped(): boolean;
            /**
             * Returns the internal scale that maps from surface coordinates
             * to the actual device pixels.
             *
             * When the scale is bigger than 1, the windowing system prefers to get
             * buffers with a resolution that is bigger than the surface size (e.g.
             * to show the surface on a high-resolution display, or in a magnifier).
             *
             * Compare with [method`Gdk`.Surface.get_scale_factor], which returns the
             * next larger integer.
             *
             * The scale may change during the lifetime of the surface.
             * @returns the scale
             */
            get_scale(): number;
            /**
             * Returns the internal scale factor that maps from surface coordinates
             * to the actual device pixels.
             *
             * On traditional systems this is 1, but on very high density outputs
             * this can be a higher value (often 2). A higher value means that drawing
             * is automatically scaled up to a higher resolution, so any code doing
             * drawing will automatically look nicer. However, if you are supplying
             * pixel-based data the scale value can be used to determine whether to
             * use a pixel resource with higher resolution data.
             *
             * The scale factor may change during the lifetime of the surface.
             * @returns the scale factor
             */
            get_scale_factor(): number;
            /**
             * Returns the width of the given `surface`.
             *
             * Surface size is reported in ”application pixels”, not
             * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
             * @returns The width of @surface
             */
            get_width(): number;
            /**
             * Hide the surface.
             *
             * For toplevel surfaces, withdraws them, so they will no longer be
             * known to the window manager; for all surfaces, unmaps them, so
             * they won’t be displayed. Normally done automatically as
             * part of [gtk_widget_hide()](../gtk4/method.Widget.hide.html).
             */
            hide(): void;
            /**
             * Check to see if a surface is destroyed.
             * @returns %TRUE if the surface is destroyed
             */
            is_destroyed(): boolean;
            /**
             * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
             * to be scheduled.
             *
             * This function is useful for implementations that track invalid
             * regions on their own.
             */
            queue_render(): void;
            /**
             * Request a layout phase from the surface's frame clock.
             *
             * See [method`Gdk`.FrameClock.request_phase].
             */
            request_layout(): void;
            /**
             * Sets the default mouse pointer for a `GdkSurface`.
             *
             * Passing %NULL for the `cursor` argument means that `surface` will use
             * the cursor of its parent surface. Most surfaces should use this default.
             * Note that `cursor` must be for the same display as `surface`.
             *
             * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
             * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
             * @param cursor a `GdkCursor`
             */
            set_cursor(cursor?: Gdk.Cursor | null): void;
            /**
             * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
             *
             * Passing %NULL for the `cursor` argument means that `surface` will use the
             * cursor of its parent surface. Most surfaces should use this default.
             *
             * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
             * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
             * @param device a pointer `GdkDevice`
             * @param cursor a `GdkCursor`
             */
            set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void;
            /**
             * Apply the region to the surface for the purpose of event
             * handling.
             *
             * Mouse events which happen while the pointer position corresponds
             * to an unset bit in the mask will be passed on the surface below
             * `surface`.
             *
             * An input region is typically used with RGBA surfaces. The alpha
             * channel of the surface defines which pixels are invisible and
             * allows for nicely antialiased borders, and the input region
             * controls where the surface is “clickable”.
             *
             * Use [method`Gdk`.Display.supports_input_shapes] to find out if
             * a particular backend supports input regions.
             * @param region region of surface to be reactive
             */
            set_input_region(region: cairo.Region): void;
            /**
             * Marks a region of the `GdkSurface` as opaque.
             *
             * For optimisation purposes, compositing window managers may
             * like to not draw obscured regions of surfaces, or turn off blending
             * during for these regions. With RGB windows with no transparency,
             * this is just the shape of the window, but with ARGB32 windows, the
             * compositor does not know what regions of the window are transparent
             * or not.
             *
             * This function only works for toplevel surfaces.
             *
             * GTK will update this property automatically if the `surface` background
             * is opaque, as we know where the opaque regions are. If your surface
             * background is not opaque, please update this property in your
             * [GtkWidgetClass.css_changed](../gtk4/vfunc.Widget.css_changed.html) handler.
             * @param region a region, or %NULL to make the entire   surface opaque
             */
            set_opaque_region(region?: cairo.Region | null): void;
            /**
             * Translates coordinates between two surfaces.
             *
             * Note that this only works if `to` and `from` are popups or
             * transient-for to the same toplevel (directly or indirectly).
             * @param to the target surface
             * @param x coordinates to translate
             * @param y coordinates to translate
             * @returns %TRUE if the coordinates were successfully translated
             */
            translate_coordinates(to: Gdk.Surface, x: number, y: number): [boolean, number, number];
        }

        module WaylandSeat {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Seat.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkSeat`.
         *
         * Beyond the regular [class`Gdk`.Seat] API, the Wayland implementation
         * provides access to the Wayland `wl_seat` object with
         * [method`GdkWayland`.WaylandSeat.get_wl_seat].
         */
        class WaylandSeat extends Gdk.Seat {
            static $gtype: GObject.GType<WaylandSeat>;

            // Constructors

            constructor(properties?: Partial<WaylandSeat.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WaylandSurface {
            // Constructor properties interface

            interface ConstructorProps extends Gdk.Surface.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkSurface`.
         *
         * Beyond the [class`Gdk`.Surface] API, the Wayland implementation offers
         * access to the Wayland `wl_surface` object with
         * [method`GdkWayland`.WaylandSurface.get_wl_surface].
         */
        class WaylandSurface extends Gdk.Surface {
            static $gtype: GObject.GType<WaylandSurface>;

            // Constructors

            constructor(properties?: Partial<WaylandSurface.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WaylandToplevel {
            // Constructor properties interface

            interface ConstructorProps extends WaylandSurface.ConstructorProps, Gdk.Toplevel.ConstructorProps {}
        }

        /**
         * The Wayland implementation of `GdkToplevel`.
         *
         * Beyond the [iface`Gdk`.Toplevel] API, the Wayland implementation
         * has API to set up cross-process parent-child relationships between
         * surfaces with [method`GdkWayland`.WaylandToplevel.export_handle] and
         * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
         */
        class WaylandToplevel extends WaylandSurface implements Gdk.Toplevel {
            static $gtype: GObject.GType<WaylandToplevel>;

            // Constructors

            constructor(properties?: Partial<WaylandToplevel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Destroy a handle that was obtained with gdk_wayland_toplevel_export_handle().
             *
             * Note that this API depends on an unstable Wayland protocol,
             * and thus may require changes in the future.
             * @param handle the handle to drop
             */
            drop_exported_handle(handle: string): void;
            /**
             * Asynchronously obtains a handle for a surface that can be passed
             * to other processes.
             *
             * When the handle has been obtained, `callback` will be called.
             *
             * It is an error to call this function on a surface that is already
             * exported.
             *
             * When the handle is no longer needed, [method`GdkWayland`.WaylandToplevel.unexport_handle]
             * should be called to clean up resources.
             *
             * The main purpose for obtaining a handle is to mark a surface
             * from another surface as transient for this one, see
             * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
             *
             * Before 4.12, this API could not safely be used multiple times,
             * since there was no reference counting for handles. Starting with
             * 4.12, every call to this function obtains a new handle, and every
             * call to [method`GdkWayland`.WaylandToplevel.drop_exported_handle] drops
             * just the handle that it is given.
             *
             * Note that this API depends on an unstable Wayland protocol,
             * and thus may require changes in the future.
             * @param callback callback to call with the handle
             * @returns %TRUE if the handle has been requested, %FALSE if   an error occurred.
             */
            export_handle(callback: WaylandToplevelExported): boolean;
            /**
             * Sets the application id on a `GdkToplevel`.
             * @param application_id the application id for the @toplevel
             */
            set_application_id(application_id: string): void;
            /**
             * Marks `toplevel` as transient for the surface to which the given
             * `parent_handle_str` refers.
             *
             * Typically, the handle will originate from a
             * [method`GdkWayland`.WaylandToplevel.export_handle] call in another process.
             *
             * Note that this API depends on an unstable Wayland protocol,
             * and thus may require changes in the future.
             * @param parent_handle_str an exported handle for a surface
             * @returns %TRUE if the surface has been marked as transient,   %FALSE if an error occurred.
             */
            set_transient_for_exported(parent_handle_str: string): boolean;
            /**
             * Destroys the handle that was obtained with
             * gdk_wayland_toplevel_export_handle().
             *
             * It is an error to call this function on a surface that
             * does not have a handle.
             *
             * Since 4.12, this function does nothing. Use
             * [method`GdkWayland`.WaylandToplevel.drop_exported_handle] instead to drop a
             * handle that was obtained with [method`GdkWayland`.WaylandToplevel.export_handle].
             *
             * Note that this API depends on an unstable Wayland protocol,
             * and thus may require changes in the future.
             */
            unexport_handle(): void;

            // Inherited properties
            /**
             * Whether the window manager should add decorations.
             */
            get decorated(): boolean;
            set decorated(val: boolean);
            /**
             * Whether the window manager should allow to close the surface.
             */
            get deletable(): boolean;
            set deletable(val: boolean);
            /**
             * The fullscreen mode of the surface.
             */
            get fullscreen_mode(): Gdk.FullscreenMode;
            set fullscreen_mode(val: Gdk.FullscreenMode);
            /**
             * The fullscreen mode of the surface.
             */
            get fullscreenMode(): Gdk.FullscreenMode;
            set fullscreenMode(val: Gdk.FullscreenMode);
            /**
             * A list of textures to use as icon.
             */
            get icon_list(): any;
            set icon_list(val: any);
            /**
             * A list of textures to use as icon.
             */
            get iconList(): any;
            set iconList(val: any);
            /**
             * Whether the surface is modal.
             */
            get modal(): boolean;
            set modal(val: boolean);
            /**
             * Whether the surface should inhibit keyboard shortcuts.
             */
            get shortcuts_inhibited(): boolean;
            /**
             * Whether the surface should inhibit keyboard shortcuts.
             */
            get shortcutsInhibited(): boolean;
            /**
             * The startup ID of the surface.
             *
             * See [class`Gdk`.AppLaunchContext] for more information about
             * startup feedback.
             */
            get startup_id(): string;
            set startup_id(val: string);
            /**
             * The startup ID of the surface.
             *
             * See [class`Gdk`.AppLaunchContext] for more information about
             * startup feedback.
             */
            get startupId(): string;
            set startupId(val: string);
            /**
             * The state of the toplevel.
             */
            get state(): Gdk.ToplevelState;
            /**
             * The title of the surface.
             */
            get title(): string;
            set title(val: string);
            /**
             * The transient parent of the surface.
             */
            get transient_for(): Gdk.Surface;
            set transient_for(val: Gdk.Surface);
            /**
             * The transient parent of the surface.
             */
            get transientFor(): Gdk.Surface;
            set transientFor(val: Gdk.Surface);
            /**
             * The mouse pointer for the `GdkSurface`.
             */
            get cursor(): Gdk.Cursor;
            set cursor(val: Gdk.Cursor);
            /**
             * The `GdkDisplay` connection of the surface.
             */
            get display(): Gdk.Display;
            /**
             * The `GdkFrameClock` of the surface.
             */
            get frame_clock(): Gdk.FrameClock;
            /**
             * The `GdkFrameClock` of the surface.
             */
            get frameClock(): Gdk.FrameClock;
            /**
             * The height of the surface, in pixels.
             */
            get height(): number;
            /**
             * Whether the surface is mapped.
             */
            get mapped(): boolean;
            /**
             * The scale of the surface.
             */
            get scale(): number;
            /**
             * The scale factor of the surface.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            get scale_factor(): number;
            /**
             * The scale factor of the surface.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            get scaleFactor(): number;
            /**
             * The width of the surface in pixels.
             */
            get width(): number;

            // Inherited methods
            /**
             * Begins an interactive move operation.
             *
             * You might use this function to implement draggable titlebars.
             * @param device the device used for the operation
             * @param button the button being used to drag, or 0 for a keyboard-initiated drag
             * @param x surface X coordinate of mouse click that began the drag
             * @param y surface Y coordinate of mouse click that began the drag
             * @param timestamp timestamp of mouse click that began the drag (use   [method@Gdk.Event.get_time])
             */
            begin_move(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void;
            /**
             * Begins an interactive resize operation.
             *
             * You might use this function to implement a “window resize grip.”
             * @param edge the edge or corner from which the drag is started
             * @param device the device used for the operation
             * @param button the button being used to drag, or 0 for a keyboard-initiated drag
             * @param x surface X coordinate of mouse click that began the drag
             * @param y surface Y coordinate of mouse click that began the drag
             * @param timestamp timestamp of mouse click that began the drag (use   [method@Gdk.Event.get_time])
             */
            begin_resize(
                edge: Gdk.SurfaceEdge,
                device: Gdk.Device | null,
                button: number,
                x: number,
                y: number,
                timestamp: number,
            ): void;
            /**
             * Sets keyboard focus to `surface`.
             *
             * In most cases, [gtk_window_present_with_time()](../gtk4/method.Window.present_with_time.html)
             * should be used on a [GtkWindow](../gtk4/class.Window.html), rather than
             * calling this function.
             * @param timestamp timestamp of the event triggering the surface focus
             */
            focus(timestamp: number): void;
            /**
             * Gets the bitwise or of the currently active surface state flags,
             * from the `GdkToplevelState` enumeration.
             * @returns surface state bitfield
             */
            get_state(): Gdk.ToplevelState;
            /**
             * Requests that the `toplevel` inhibit the system shortcuts.
             *
             * This is asking the desktop environment/windowing system to let all
             * keyboard events reach the surface, as long as it is focused, instead
             * of triggering system actions.
             *
             * If granted, the rerouting remains active until the default shortcuts
             * processing is restored with [method`Gdk`.Toplevel.restore_system_shortcuts],
             * or the request is revoked by the desktop environment, windowing system
             * or the user.
             *
             * A typical use case for this API is remote desktop or virtual machine
             * viewers which need to inhibit the default system keyboard shortcuts
             * so that the remote session or virtual host gets those instead of the
             * local environment.
             *
             * The windowing system or desktop environment may ask the user to grant
             * or deny the request or even choose to ignore the request entirely.
             *
             * The caller can be notified whenever the request is granted or revoked
             * by listening to the [property`Gdk`.Toplevel:shortcuts-inhibited] property.
             * @param event the `GdkEvent` that is triggering the inhibit   request, or %NULL if none is available
             */
            inhibit_system_shortcuts(event?: Gdk.Event | null): void;
            /**
             * Asks to lower the `toplevel` below other windows.
             *
             * The windowing system may choose to ignore the request.
             * @returns %TRUE if the surface was lowered
             */
            lower(): boolean;
            /**
             * Asks to minimize the `toplevel`.
             *
             * The windowing system may choose to ignore the request.
             * @returns %TRUE if the surface was minimized
             */
            minimize(): boolean;
            /**
             * Present `toplevel` after having processed the `GdkToplevelLayout` rules.
             *
             * If the toplevel was previously not showing, it will be showed,
             * otherwise it will change layout according to `layout`.
             *
             * GDK may emit the [signal`Gdk`.Toplevel::compute-size] signal to let
             * the user of this toplevel compute the preferred size of the toplevel
             * surface.
             *
             * Presenting is asynchronous and the specified layout parameters are not
             * guaranteed to be respected.
             * @param layout the `GdkToplevelLayout` object used to layout
             */
            present(layout: Gdk.ToplevelLayout): void;
            /**
             * Restore default system keyboard shortcuts which were previously
             * inhibited.
             *
             * This undoes the effect of [method`Gdk`.Toplevel.inhibit_system_shortcuts].
             */
            restore_system_shortcuts(): void;
            /**
             * Sets the toplevel to be decorated.
             *
             * Setting `decorated` to %FALSE hints the desktop environment
             * that the surface has its own, client-side decorations and
             * does not need to have window decorations added.
             * @param decorated %TRUE to request decorations
             */
            set_decorated(decorated: boolean): void;
            /**
             * Sets the toplevel to be deletable.
             *
             * Setting `deletable` to %TRUE hints the desktop environment
             * that it should offer the user a way to close the surface.
             * @param deletable %TRUE to request a delete button
             */
            set_deletable(deletable: boolean): void;
            /**
             * Sets a list of icons for the surface.
             *
             * One of these will be used to represent the surface in iconic form.
             * The icon may be shown in window lists or task bars. Which icon
             * size is shown depends on the window manager. The window manager
             * can scale the icon but setting several size icons can give better
             * image quality.
             *
             * Note that some platforms don't support surface icons.
             * @param surfaces A list of textures to use as icon, of different sizes
             */
            set_icon_list(surfaces: Gdk.Texture[]): void;
            /**
             * Sets the toplevel to be modal.
             *
             * The application can use this hint to tell the
             * window manager that a certain surface has modal
             * behaviour. The window manager can use this information
             * to handle modal surfaces in a special way.
             *
             * You should only use this on surfaces for which you have
             * previously called [method`Gdk`.Toplevel.set_transient_for].
             * @param modal %TRUE if the surface is modal, %FALSE otherwise.
             */
            set_modal(modal: boolean): void;
            /**
             * Sets the startup notification ID.
             *
             * When using GTK, typically you should use
             * [gtk_window_set_startup_id()](../gtk4/method.Window.set_startup_id.html)
             * instead of this low-level function.
             * @param startup_id a string with startup-notification identifier
             */
            set_startup_id(startup_id: string): void;
            /**
             * Sets the title of a toplevel surface.
             *
             * The title maybe be displayed in the titlebar,
             * in lists of windows, etc.
             * @param title title of @surface
             */
            set_title(title: string): void;
            /**
             * Sets a transient-for parent.
             *
             * Indicates to the window manager that `surface` is a transient
             * dialog associated with the application surface `parent`. This
             * allows the window manager to do things like center `surface`
             * on `parent` and keep `surface` above `parent`.
             *
             * See [gtk_window_set_transient_for()](../gtk4/method.Window.set_transient_for.html)
             * if you’re using [GtkWindow](../gtk4/class.Window.html).
             * @param parent another toplevel `GdkSurface`
             */
            set_transient_for(parent: Gdk.Surface): void;
            /**
             * Asks the windowing system to show the window menu.
             *
             * The window menu is the menu shown when right-clicking the titlebar
             * on traditional windows managed by the window manager. This is useful
             * for windows using client-side decorations, activating it with a
             * right-click on the window decorations.
             * @param event a `GdkEvent` to show the menu for
             * @returns %TRUE if the window menu was shown and %FALSE otherwise.
             */
            show_window_menu(event: Gdk.Event): boolean;
            /**
             * Returns whether the desktop environment supports
             * tiled window states.
             * @returns %TRUE if the desktop environment supports tiled window states
             */
            supports_edge_constraints(): boolean;
            /**
             * Performs a title bar gesture.
             * @param gesture a `GdkTitlebarGesture`
             * @returns whether the gesture was performed
             */
            titlebar_gesture(gesture: Gdk.TitlebarGesture): boolean;
            /**
             * Emits a short beep associated to `surface`.
             *
             * If the display of `surface` does not support per-surface beeps,
             * emits a short beep on the display just as [method`Gdk`.Display.beep].
             */
            beep(): void;
            /**
             * Creates a new `GdkCairoContext` for rendering on `surface`.
             * @returns the newly created `GdkCairoContext`
             */
            create_cairo_context(): Gdk.CairoContext;
            /**
             * Creates a new `GdkGLContext` for the `GdkSurface`.
             *
             * The context is disconnected from any particular surface or surface.
             * If the creation of the `GdkGLContext` failed, `error` will be set.
             * Before using the returned `GdkGLContext`, you will need to
             * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
             * @returns the newly created `GdkGLContext`
             */
            create_gl_context(): Gdk.GLContext;
            /**
             * Create a new Cairo surface that is as compatible as possible with the
             * given `surface`.
             *
             * For example the new surface will have the same fallback resolution
             * and font options as `surface`. Generally, the new surface will also
             * use the same backend as `surface,` unless that is not possible for
             * some reason. The type of the returned surface may be examined with
             * cairo_surface_get_type().
             *
             * Initially the surface contents are all 0 (transparent if contents
             * have transparency, black otherwise.)
             *
             * This function always returns a valid pointer, but it will return a
             * pointer to a “nil” surface if `other` is already in an error state
             * or any other error occurs.
             * @param content the content for the new surface
             * @param width width of the new surface
             * @param height height of the new surface
             * @returns a pointer to the newly allocated surface. The caller   owns the surface and should call cairo_surface_destroy() when done   with it.
             */
            create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;
            /**
             * Sets an error and returns %NULL.
             * @returns %NULL
             */
            create_vulkan_context(): Gdk.VulkanContext;
            /**
             * Destroys the window system resources associated with `surface` and
             * decrements `surface'`s reference count.
             *
             * The window system resources for all children of `surface` are also
             * destroyed, but the children’s reference counts are not decremented.
             *
             * Note that a surface will not be destroyed automatically when its
             * reference count reaches zero. You must call this function yourself
             * before that happens.
             */
            destroy(): void;
            /**
             * Retrieves a `GdkCursor` pointer for the cursor currently set on the
             * `GdkSurface`.
             *
             * If the return value is %NULL then there is no custom cursor set on
             * the surface, and it is using the cursor for its parent surface.
             *
             * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
             * @returns a `GdkCursor`
             */
            get_cursor(): Gdk.Cursor | null;
            /**
             * Retrieves a `GdkCursor` pointer for the `device` currently set on the
             * specified `GdkSurface`.
             *
             * If the return value is %NULL then there is no custom cursor set on the
             * specified surface, and it is using the cursor for its parent surface.
             *
             * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
             * @param device a pointer `GdkDevice`
             * @returns a `GdkCursor`
             */
            get_device_cursor(device: Gdk.Device): Gdk.Cursor | null;
            /**
             * Obtains the current device position and modifier state.
             *
             * The position is given in coordinates relative to the upper
             * left corner of `surface`.
             * @param device pointer `GdkDevice` to query to
             * @returns %TRUE if the device is over the surface
             */
            get_device_position(device: Gdk.Device): [boolean, number, number, Gdk.ModifierType | null];
            /**
             * Gets the `GdkDisplay` associated with a `GdkSurface`.
             * @returns the `GdkDisplay` associated with @surface
             */
            get_display(): Gdk.Display;
            /**
             * Gets the frame clock for the surface.
             *
             * The frame clock for a surface never changes unless the surface is
             * reparented to a new toplevel surface.
             * @returns the frame clock
             */
            get_frame_clock(): Gdk.FrameClock;
            /**
             * Returns the height of the given `surface`.
             *
             * Surface size is reported in ”application pixels”, not
             * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
             * @returns The height of @surface
             */
            get_height(): number;
            /**
             * Checks whether the surface has been mapped.
             *
             * A surface is mapped with [method`Gdk`.Toplevel.present]
             * or [method`Gdk`.Popup.present].
             * @returns %TRUE if the surface is mapped
             */
            get_mapped(): boolean;
            /**
             * Returns the internal scale that maps from surface coordinates
             * to the actual device pixels.
             *
             * When the scale is bigger than 1, the windowing system prefers to get
             * buffers with a resolution that is bigger than the surface size (e.g.
             * to show the surface on a high-resolution display, or in a magnifier).
             *
             * Compare with [method`Gdk`.Surface.get_scale_factor], which returns the
             * next larger integer.
             *
             * The scale may change during the lifetime of the surface.
             * @returns the scale
             */
            get_scale(): number;
            /**
             * Returns the internal scale factor that maps from surface coordinates
             * to the actual device pixels.
             *
             * On traditional systems this is 1, but on very high density outputs
             * this can be a higher value (often 2). A higher value means that drawing
             * is automatically scaled up to a higher resolution, so any code doing
             * drawing will automatically look nicer. However, if you are supplying
             * pixel-based data the scale value can be used to determine whether to
             * use a pixel resource with higher resolution data.
             *
             * The scale factor may change during the lifetime of the surface.
             * @returns the scale factor
             */
            get_scale_factor(): number;
            /**
             * Returns the width of the given `surface`.
             *
             * Surface size is reported in ”application pixels”, not
             * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
             * @returns The width of @surface
             */
            get_width(): number;
            /**
             * Hide the surface.
             *
             * For toplevel surfaces, withdraws them, so they will no longer be
             * known to the window manager; for all surfaces, unmaps them, so
             * they won’t be displayed. Normally done automatically as
             * part of [gtk_widget_hide()](../gtk4/method.Widget.hide.html).
             */
            hide(): void;
            /**
             * Check to see if a surface is destroyed.
             * @returns %TRUE if the surface is destroyed
             */
            is_destroyed(): boolean;
            /**
             * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
             * to be scheduled.
             *
             * This function is useful for implementations that track invalid
             * regions on their own.
             */
            queue_render(): void;
            /**
             * Request a layout phase from the surface's frame clock.
             *
             * See [method`Gdk`.FrameClock.request_phase].
             */
            request_layout(): void;
            /**
             * Sets the default mouse pointer for a `GdkSurface`.
             *
             * Passing %NULL for the `cursor` argument means that `surface` will use
             * the cursor of its parent surface. Most surfaces should use this default.
             * Note that `cursor` must be for the same display as `surface`.
             *
             * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
             * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
             * @param cursor a `GdkCursor`
             */
            set_cursor(cursor?: Gdk.Cursor | null): void;
            /**
             * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
             *
             * Passing %NULL for the `cursor` argument means that `surface` will use the
             * cursor of its parent surface. Most surfaces should use this default.
             *
             * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
             * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
             * @param device a pointer `GdkDevice`
             * @param cursor a `GdkCursor`
             */
            set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void;
            /**
             * Apply the region to the surface for the purpose of event
             * handling.
             *
             * Mouse events which happen while the pointer position corresponds
             * to an unset bit in the mask will be passed on the surface below
             * `surface`.
             *
             * An input region is typically used with RGBA surfaces. The alpha
             * channel of the surface defines which pixels are invisible and
             * allows for nicely antialiased borders, and the input region
             * controls where the surface is “clickable”.
             *
             * Use [method`Gdk`.Display.supports_input_shapes] to find out if
             * a particular backend supports input regions.
             * @param region region of surface to be reactive
             */
            set_input_region(region: cairo.Region): void;
            /**
             * Marks a region of the `GdkSurface` as opaque.
             *
             * For optimisation purposes, compositing window managers may
             * like to not draw obscured regions of surfaces, or turn off blending
             * during for these regions. With RGB windows with no transparency,
             * this is just the shape of the window, but with ARGB32 windows, the
             * compositor does not know what regions of the window are transparent
             * or not.
             *
             * This function only works for toplevel surfaces.
             *
             * GTK will update this property automatically if the `surface` background
             * is opaque, as we know where the opaque regions are. If your surface
             * background is not opaque, please update this property in your
             * [GtkWidgetClass.css_changed](../gtk4/vfunc.Widget.css_changed.html) handler.
             * @param region a region, or %NULL to make the entire   surface opaque
             */
            set_opaque_region(region?: cairo.Region | null): void;
            /**
             * Translates coordinates between two surfaces.
             *
             * Note that this only works if `to` and `from` are popups or
             * transient-for to the same toplevel (directly or indirectly).
             * @param to the target surface
             * @param x coordinates to translate
             * @param y coordinates to translate
             * @returns %TRUE if the coordinates were successfully translated
             */
            translate_coordinates(to: Gdk.Surface, x: number, y: number): [boolean, number, number];
        }

        type WaylandDeviceClass = typeof WaylandDevice;
        type WaylandDisplayClass = typeof WaylandDisplay;
        type WaylandGLContextClass = typeof WaylandGLContext;
        type WaylandMonitorClass = typeof WaylandMonitor;
        type WaylandSeatClass = typeof WaylandSeat;
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

    export default GdkWayland;
}

declare module 'gi://GdkWayland' {
    import GdkWayland40 from 'gi://GdkWayland?version=4.0';
    export default GdkWayland40;
}
// END
