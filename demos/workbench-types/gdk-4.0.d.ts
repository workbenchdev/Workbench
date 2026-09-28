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

declare module 'gi://Gdk?version=4.0' {
    // Module dependencies
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

    export namespace Gdk {
        /**
         * Gdk-4.0
         */

        /**
         * Defines how device axes are interpreted by GTK.
         *
         * Note that the X and Y axes are not really needed; pointer devices
         * report their location via the x/y members of events regardless. Whether
         * X and Y are present as axes depends on the GDK backend.
         */

        /**
         * Defines how device axes are interpreted by GTK.
         *
         * Note that the X and Y axes are not really needed; pointer devices
         * report their location via the x/y members of events regardless. Whether
         * X and Y are present as axes depends on the GDK backend.
         */
        export namespace AxisUse {
            export const $gtype: GObject.GType<AxisUse>;
        }

        enum AxisUse {
            /**
             * the axis is ignored.
             */
            IGNORE,
            /**
             * the axis is used as the x axis.
             */
            X,
            /**
             * the axis is used as the y axis.
             */
            Y,
            /**
             * the axis is used as the scroll x delta
             */
            DELTA_X,
            /**
             * the axis is used as the scroll y delta
             */
            DELTA_Y,
            /**
             * the axis is used for pressure information.
             */
            PRESSURE,
            /**
             * the axis is used for x tilt information.
             */
            XTILT,
            /**
             * the axis is used for y tilt information.
             */
            YTILT,
            /**
             * the axis is used for wheel information.
             */
            WHEEL,
            /**
             * the axis is used for pen/tablet distance information
             */
            DISTANCE,
            /**
             * the axis is used for pen rotation information
             */
            ROTATION,
            /**
             * the axis is used for pen slider information
             */
            SLIDER,
            /**
             * a constant equal to the numerically highest axis value.
             */
            LAST,
        }
        /**
         * The values of this enumeration describe whether image data uses
         * the full range of 8-bit values.
         *
         * In digital broadcasting, it is common to reserve the lowest and
         * highest values. Typically the allowed values for the narrow range
         * are 16-235 for Y and 16-240 for u,v (when dealing with YUV data).
         */

        /**
         * The values of this enumeration describe whether image data uses
         * the full range of 8-bit values.
         *
         * In digital broadcasting, it is common to reserve the lowest and
         * highest values. Typically the allowed values for the narrow range
         * are 16-235 for Y and 16-240 for u,v (when dealing with YUV data).
         */
        export namespace CicpRange {
            export const $gtype: GObject.GType<CicpRange>;
        }

        enum CicpRange {
            /**
             * The values use the range of 16-235 (for Y) and 16-240 for u and v.
             */
            NARROW,
            /**
             * The values use the full range.
             */
            FULL,
        }
        /**
         * Specifies the crossing mode for enter and leave events.
         */

        /**
         * Specifies the crossing mode for enter and leave events.
         */
        export namespace CrossingMode {
            export const $gtype: GObject.GType<CrossingMode>;
        }

        enum CrossingMode {
            /**
             * crossing because of pointer motion.
             */
            NORMAL,
            /**
             * crossing because a grab is activated.
             */
            GRAB,
            /**
             * crossing because a grab is deactivated.
             */
            UNGRAB,
            /**
             * crossing because a GTK grab is activated.
             */
            GTK_GRAB,
            /**
             * crossing because a GTK grab is deactivated.
             */
            GTK_UNGRAB,
            /**
             * crossing because a GTK widget changed
             *   state (e.g. sensitivity).
             */
            STATE_CHANGED,
            /**
             * crossing because a touch sequence has begun,
             *   this event is synthetic as the pointer might have not left the surface.
             */
            TOUCH_BEGIN,
            /**
             * crossing because a touch sequence has ended,
             *   this event is synthetic as the pointer might have not left the surface.
             */
            TOUCH_END,
            /**
             * crossing because of a device switch (i.e.
             *   a mouse taking control of the pointer after a touch device), this event
             *   is synthetic as the pointer didn’t leave the surface.
             */
            DEVICE_SWITCH,
        }
        /**
         * A pad feature.
         */

        /**
         * A pad feature.
         */
        export namespace DevicePadFeature {
            export const $gtype: GObject.GType<DevicePadFeature>;
        }

        enum DevicePadFeature {
            /**
             * a button
             */
            BUTTON,
            /**
             * a ring-shaped interactive area
             */
            RING,
            /**
             * a straight interactive area
             */
            STRIP,
        }
        /**
         * Indicates the specific type of tool being used being a tablet. Such as an
         * airbrush, pencil, etc.
         */

        /**
         * Indicates the specific type of tool being used being a tablet. Such as an
         * airbrush, pencil, etc.
         */
        export namespace DeviceToolType {
            export const $gtype: GObject.GType<DeviceToolType>;
        }

        enum DeviceToolType {
            /**
             * Tool is of an unknown type.
             */
            UNKNOWN,
            /**
             * Tool is a standard tablet stylus.
             */
            PEN,
            /**
             * Tool is standard tablet eraser.
             */
            ERASER,
            /**
             * Tool is a brush stylus.
             */
            BRUSH,
            /**
             * Tool is a pencil stylus.
             */
            PENCIL,
            /**
             * Tool is an airbrush stylus.
             */
            AIRBRUSH,
            /**
             * Tool is a mouse.
             */
            MOUSE,
            /**
             * Tool is a lens cursor.
             */
            LENS,
        }
        /**
         * Error enumeration for `GdkDmabufTexture`.
         */
        class DmabufError extends GLib.Error {
            static $gtype: GObject.GType<DmabufError>;

            // Static fields

            /**
             * Dmabuf support is not available, because the OS
             *   is not Linux, or it was explicitly disabled at compile- or runtime
             */
            static NOT_AVAILABLE: number;
            /**
             * The requested format is not supported
             */
            static UNSUPPORTED_FORMAT: number;
            /**
             * GTK failed to create the resource for other
             *   reasons
             */
            static CREATION_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Registers an error quark for [class`Gdk`.DmabufTexture] errors.
             */
            static quark(): GLib.Quark;
        }

        /**
         * Used in `GdkDrag` to the reason of a cancelled DND operation.
         */

        /**
         * Used in `GdkDrag` to the reason of a cancelled DND operation.
         */
        export namespace DragCancelReason {
            export const $gtype: GObject.GType<DragCancelReason>;
        }

        enum DragCancelReason {
            /**
             * There is no suitable drop target.
             */
            NO_TARGET,
            /**
             * Drag cancelled by the user
             */
            USER_CANCELLED,
            /**
             * Unspecified error.
             */
            ERROR,
        }
        /**
         * Specifies the type of the event.
         */

        /**
         * Specifies the type of the event.
         */
        export namespace EventType {
            export const $gtype: GObject.GType<EventType>;
        }

        enum EventType {
            /**
             * the window manager has requested that the toplevel surface be
             *   hidden or destroyed, usually when the user clicks on a special icon in the
             *   title bar.
             */
            DELETE,
            /**
             * the pointer (usually a mouse) has moved.
             */
            MOTION_NOTIFY,
            /**
             * a mouse button has been pressed.
             */
            BUTTON_PRESS,
            /**
             * a mouse button has been released.
             */
            BUTTON_RELEASE,
            /**
             * a key has been pressed.
             */
            KEY_PRESS,
            /**
             * a key has been released.
             */
            KEY_RELEASE,
            /**
             * the pointer has entered the surface.
             */
            ENTER_NOTIFY,
            /**
             * the pointer has left the surface.
             */
            LEAVE_NOTIFY,
            /**
             * the keyboard focus has entered or left the surface.
             */
            FOCUS_CHANGE,
            /**
             * an input device has moved into contact with a sensing
             *   surface (e.g. a touchscreen or graphics tablet).
             */
            PROXIMITY_IN,
            /**
             * an input device has moved out of contact with a sensing
             *   surface.
             */
            PROXIMITY_OUT,
            /**
             * the mouse has entered the surface while a drag is in progress.
             */
            DRAG_ENTER,
            /**
             * the mouse has left the surface while a drag is in progress.
             */
            DRAG_LEAVE,
            /**
             * the mouse has moved in the surface while a drag is in
             *   progress.
             */
            DRAG_MOTION,
            /**
             * a drop operation onto the surface has started.
             */
            DROP_START,
            /**
             * the scroll wheel was turned
             */
            SCROLL,
            /**
             * a pointer or keyboard grab was broken.
             */
            GRAB_BROKEN,
            /**
             * A new touch event sequence has just started.
             */
            TOUCH_BEGIN,
            /**
             * A touch event sequence has been updated.
             */
            TOUCH_UPDATE,
            /**
             * A touch event sequence has finished.
             */
            TOUCH_END,
            /**
             * A touch event sequence has been canceled.
             */
            TOUCH_CANCEL,
            /**
             * A touchpad swipe gesture event, the current state
             *   is determined by its phase field.
             */
            TOUCHPAD_SWIPE,
            /**
             * A touchpad pinch gesture event, the current state
             *   is determined by its phase field.
             */
            TOUCHPAD_PINCH,
            /**
             * A tablet pad button press event.
             */
            PAD_BUTTON_PRESS,
            /**
             * A tablet pad button release event.
             */
            PAD_BUTTON_RELEASE,
            /**
             * A tablet pad axis event from a "ring".
             */
            PAD_RING,
            /**
             * A tablet pad axis event from a "strip".
             */
            PAD_STRIP,
            /**
             * A tablet pad group mode change.
             */
            PAD_GROUP_MODE,
            /**
             * A touchpad hold gesture event, the current state is determined by its phase
             * field.
             */
            TOUCHPAD_HOLD,
            /**
             * marks the end of the GdkEventType enumeration.
             */
            EVENT_LAST,
        }
        /**
         * Indicates which monitor a surface should span over when in fullscreen mode.
         */

        /**
         * Indicates which monitor a surface should span over when in fullscreen mode.
         */
        export namespace FullscreenMode {
            export const $gtype: GObject.GType<FullscreenMode>;
        }

        enum FullscreenMode {
            /**
             * Fullscreen on current monitor only.
             */
            CURRENT_MONITOR,
            /**
             * Span across all monitors when fullscreen.
             */
            ALL_MONITORS,
        }
        /**
         * Error enumeration for `GdkGLContext`.
         */
        class GLError extends GLib.Error {
            static $gtype: GObject.GType<GLError>;

            // Static fields

            /**
             * OpenGL support is not available
             */
            static NOT_AVAILABLE: number;
            /**
             * The requested visual format is not supported
             */
            static UNSUPPORTED_FORMAT: number;
            /**
             * The requested profile is not supported
             */
            static UNSUPPORTED_PROFILE: number;
            /**
             * The shader compilation failed
             */
            static COMPILATION_FAILED: number;
            /**
             * The shader linking failed
             */
            static LINK_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Registers an error quark for [class`Gdk`.GLContext] errors.
             */
            static quark(): GLib.Quark;
        }

        /**
         * Defines the reference point of a surface and is used in `GdkPopupLayout`.
         */

        /**
         * Defines the reference point of a surface and is used in `GdkPopupLayout`.
         */
        export namespace Gravity {
            export const $gtype: GObject.GType<Gravity>;
        }

        enum Gravity {
            /**
             * the reference point is at the top left corner.
             */
            NORTH_WEST,
            /**
             * the reference point is in the middle of the top edge.
             */
            NORTH,
            /**
             * the reference point is at the top right corner.
             */
            NORTH_EAST,
            /**
             * the reference point is at the middle of the left edge.
             */
            WEST,
            /**
             * the reference point is at the center of the surface.
             */
            CENTER,
            /**
             * the reference point is at the middle of the right edge.
             */
            EAST,
            /**
             * the reference point is at the lower left corner.
             */
            SOUTH_WEST,
            /**
             * the reference point is at the middle of the lower edge.
             */
            SOUTH,
            /**
             * the reference point is at the lower right corner.
             */
            SOUTH_EAST,
            /**
             * the reference point is at the top left corner of the
             *  surface itself, ignoring window manager decorations.
             */
            STATIC,
        }
        /**
         * An enumeration describing the type of an input device in general terms.
         */

        /**
         * An enumeration describing the type of an input device in general terms.
         */
        export namespace InputSource {
            export const $gtype: GObject.GType<InputSource>;
        }

        enum InputSource {
            /**
             * the device is a mouse. (This will be reported for the core
             *   pointer, even if it is something else, such as a trackball.)
             */
            MOUSE,
            /**
             * the device is a stylus of a graphics tablet or similar device.
             */
            PEN,
            /**
             * the device is a keyboard.
             */
            KEYBOARD,
            /**
             * the device is a direct-input touch device, such
             *   as a touchscreen or tablet
             */
            TOUCHSCREEN,
            /**
             * the device is an indirect touch device, such
             *   as a touchpad
             */
            TOUCHPAD,
            /**
             * the device is a trackpoint
             */
            TRACKPOINT,
            /**
             * the device is a "pad", a collection of buttons,
             *   rings and strips found in drawing tablets
             */
            TABLET_PAD,
        }
        /**
         * Describes how well an event matches a given keyval and modifiers.
         *
         * `GdkKeyMatch` values are returned by [method`Gdk`.KeyEvent.matches].
         */

        /**
         * Describes how well an event matches a given keyval and modifiers.
         *
         * `GdkKeyMatch` values are returned by [method`Gdk`.KeyEvent.matches].
         */
        export namespace KeyMatch {
            export const $gtype: GObject.GType<KeyMatch>;
        }

        enum KeyMatch {
            /**
             * The key event does not match
             */
            NONE,
            /**
             * The key event matches if keyboard state
             *   (specifically, the currently active group) is ignored
             */
            PARTIAL,
            /**
             * The key event matches
             */
            EXACT,
        }
        /**
         * `GdkMemoryFormat` describes formats that image data can have in memory.
         *
         * It describes formats by listing the contents of the memory passed to it.
         * So `GDK_MEMORY_A8R8G8B8` will be 1 byte (8 bits) of alpha, followed by a
         * byte each of red, green and blue. It is not endian-dependent, so
         * `CAIRO_FORMAT_ARGB32` is represented by different `GdkMemoryFormats`
         * on architectures with different endiannesses.
         *
         * Its naming is modelled after
         * [VkFormat](https://www.khronos.org/registry/vulkan/specs/1.0/html/vkspec.html#VkFormat)
         * for details).
         */

        /**
         * `GdkMemoryFormat` describes formats that image data can have in memory.
         *
         * It describes formats by listing the contents of the memory passed to it.
         * So `GDK_MEMORY_A8R8G8B8` will be 1 byte (8 bits) of alpha, followed by a
         * byte each of red, green and blue. It is not endian-dependent, so
         * `CAIRO_FORMAT_ARGB32` is represented by different `GdkMemoryFormats`
         * on architectures with different endiannesses.
         *
         * Its naming is modelled after
         * [VkFormat](https://www.khronos.org/registry/vulkan/specs/1.0/html/vkspec.html#VkFormat)
         * for details).
         */
        export namespace MemoryFormat {
            export const $gtype: GObject.GType<MemoryFormat>;
        }

        enum MemoryFormat {
            /**
             * 4 bytes; for blue, green, red, alpha.
             *   The color values are premultiplied with the alpha value.
             */
            B8G8R8A8_PREMULTIPLIED,
            /**
             * 4 bytes; for alpha, red, green, blue.
             *   The color values are premultiplied with the alpha value.
             */
            A8R8G8B8_PREMULTIPLIED,
            /**
             * 4 bytes; for red, green, blue, alpha
             *   The color values are premultiplied with the alpha value.
             */
            R8G8B8A8_PREMULTIPLIED,
            /**
             * 4 bytes; for blue, green, red, alpha.
             */
            B8G8R8A8,
            /**
             * 4 bytes; for alpha, red, green, blue.
             */
            A8R8G8B8,
            /**
             * 4 bytes; for red, green, blue, alpha.
             */
            R8G8B8A8,
            /**
             * 4 bytes; for alpha, blue, green, red.
             */
            A8B8G8R8,
            /**
             * 3 bytes; for red, green, blue. The data is opaque.
             */
            R8G8B8,
            /**
             * 3 bytes; for blue, green, red. The data is opaque.
             */
            B8G8R8,
            /**
             * 3 guint16 values; for red, green, blue.
             */
            R16G16B16,
            /**
             * 4 guint16 values; for red, green, blue, alpha. The color values are
             * premultiplied with the alpha value.
             */
            R16G16B16A16_PREMULTIPLIED,
            /**
             * 4 guint16 values; for red, green, blue, alpha.
             */
            R16G16B16A16,
            /**
             * 3 half-float values; for red, green, blue. The data is opaque.
             */
            R16G16B16_FLOAT,
            /**
             * 4 half-float values; for red, green, blue and alpha. The color values are
             * premultiplied with the alpha value.
             */
            R16G16B16A16_FLOAT_PREMULTIPLIED,
            /**
             * 4 half-float values; for red, green, blue and alpha.
             */
            R16G16B16A16_FLOAT,
            /**
             * 3 float values; for red, green, blue.
             */
            R32G32B32_FLOAT,
            /**
             * 4 float values; for red, green, blue and alpha. The color values are
             * premultiplied with the alpha value.
             */
            R32G32B32A32_FLOAT_PREMULTIPLIED,
            /**
             * 4 float values; for red, green, blue and alpha.
             */
            R32G32B32A32_FLOAT,
            /**
             * 2 bytes; for grayscale, alpha. The color values are premultiplied with the
             * alpha value.
             */
            G8A8_PREMULTIPLIED,
            /**
             * 2 bytes; for grayscale, alpha.
             */
            G8A8,
            /**
             * One byte; for grayscale. The data is opaque.
             */
            G8,
            /**
             * 2 guint16 values; for grayscale, alpha. The color values are premultiplied
             * with the alpha value.
             */
            G16A16_PREMULTIPLIED,
            /**
             * 2 guint16 values; for grayscale, alpha.
             */
            G16A16,
            /**
             * One guint16 value; for grayscale. The data is opaque.
             */
            G16,
            /**
             * One byte; for alpha.
             */
            A8,
            /**
             * One guint16 value; for alpha.
             */
            A16,
            /**
             * One half-float value; for alpha.
             */
            A16_FLOAT,
            /**
             * One float value; for alpha.
             */
            A32_FLOAT,
            /**
             * 4 bytes; for alpha, blue, green, red, The color values are premultiplied with
             * the alpha value.
             */
            A8B8G8R8_PREMULTIPLIED,
            /**
             * 4 bytes; for blue, green, red, unused.
             */
            B8G8R8X8,
            /**
             * 4 bytes; for unused, red, green, blue.
             */
            X8R8G8B8,
            /**
             * 4 bytes; for red, green, blue, unused.
             */
            R8G8B8X8,
            /**
             * 4 bytes; for unused, blue, green, red.
             */
            X8B8G8R8,
            /**
             * The number of formats. This value will change as
             *   more formats get added, so do not rely on its concrete integer.
             */
            N_FORMATS,
        }
        /**
         * Specifies the kind of crossing for enter and leave events.
         *
         * See the X11 protocol specification of LeaveNotify for
         * full details of crossing event generation.
         */

        /**
         * Specifies the kind of crossing for enter and leave events.
         *
         * See the X11 protocol specification of LeaveNotify for
         * full details of crossing event generation.
         */
        export namespace NotifyType {
            export const $gtype: GObject.GType<NotifyType>;
        }

        enum NotifyType {
            /**
             * the surface is entered from an ancestor or
             *   left towards an ancestor.
             */
            ANCESTOR,
            /**
             * the pointer moves between an ancestor and an
             *   inferior of the surface.
             */
            VIRTUAL,
            /**
             * the surface is entered from an inferior or
             *   left towards an inferior.
             */
            INFERIOR,
            /**
             * the surface is entered from or left towards
             *   a surface which is neither an ancestor nor an inferior.
             */
            NONLINEAR,
            /**
             * the pointer moves between two surfaces
             *   which are not ancestors of each other and the surface is part of
             *   the ancestor chain between one of these surfaces and their least
             *   common ancestor.
             */
            NONLINEAR_VIRTUAL,
            /**
             * an unknown type of enter/leave event occurred.
             */
            UNKNOWN,
        }
        /**
         * Specifies the direction for scroll events.
         */

        /**
         * Specifies the direction for scroll events.
         */
        export namespace ScrollDirection {
            export const $gtype: GObject.GType<ScrollDirection>;
        }

        enum ScrollDirection {
            /**
             * the surface is scrolled up.
             */
            UP,
            /**
             * the surface is scrolled down.
             */
            DOWN,
            /**
             * the surface is scrolled to the left.
             */
            LEFT,
            /**
             * the surface is scrolled to the right.
             */
            RIGHT,
            /**
             * the scrolling is determined by the delta values
             *   in scroll events. See gdk_scroll_event_get_deltas()
             */
            SMOOTH,
        }
        /**
         * Specifies the unit of scroll deltas.
         *
         * When you get %GDK_SCROLL_UNIT_WHEEL, a delta of 1.0 means 1 wheel detent
         * click in the south direction, 2.0 means 2 wheel detent clicks in the south
         * direction... This is the same logic for negative values but in the north
         * direction.
         *
         * If you get %GDK_SCROLL_UNIT_SURFACE, are managing a scrollable view and get a
         * value of 123, you have to scroll 123 surface logical pixels right if it's
         * `delta_x` or down if it's `delta_y`. This is the same logic for negative values
         * but you have to scroll left instead of right if it's `delta_x` and up instead
         * of down if it's `delta_y`.
         *
         * 1 surface logical pixel is equal to 1 real screen pixel multiplied by the
         * final scale factor of your graphical interface (the product of the desktop
         * scale factor and eventually a custom scale factor in your app).
         */

        /**
         * Specifies the unit of scroll deltas.
         *
         * When you get %GDK_SCROLL_UNIT_WHEEL, a delta of 1.0 means 1 wheel detent
         * click in the south direction, 2.0 means 2 wheel detent clicks in the south
         * direction... This is the same logic for negative values but in the north
         * direction.
         *
         * If you get %GDK_SCROLL_UNIT_SURFACE, are managing a scrollable view and get a
         * value of 123, you have to scroll 123 surface logical pixels right if it's
         * `delta_x` or down if it's `delta_y`. This is the same logic for negative values
         * but you have to scroll left instead of right if it's `delta_x` and up instead
         * of down if it's `delta_y`.
         *
         * 1 surface logical pixel is equal to 1 real screen pixel multiplied by the
         * final scale factor of your graphical interface (the product of the desktop
         * scale factor and eventually a custom scale factor in your app).
         */
        export namespace ScrollUnit {
            export const $gtype: GObject.GType<ScrollUnit>;
        }

        enum ScrollUnit {
            /**
             * The delta is in number of wheel clicks.
             */
            WHEEL,
            /**
             * The delta is in surface pixels to scroll directly
             *   on screen.
             */
            SURFACE,
        }
        /**
         * This enumeration describes how the red, green and blue components
         * of physical pixels on an output device are laid out.
         */

        /**
         * This enumeration describes how the red, green and blue components
         * of physical pixels on an output device are laid out.
         */
        export namespace SubpixelLayout {
            export const $gtype: GObject.GType<SubpixelLayout>;
        }

        enum SubpixelLayout {
            /**
             * The layout is not known
             */
            UNKNOWN,
            /**
             * Not organized in this way
             */
            NONE,
            /**
             * The layout is horizontal, the order is RGB
             */
            HORIZONTAL_RGB,
            /**
             * The layout is horizontal, the order is BGR
             */
            HORIZONTAL_BGR,
            /**
             * The layout is vertical, the order is RGB
             */
            VERTICAL_RGB,
            /**
             * The layout is vertical, the order is BGR
             */
            VERTICAL_BGR,
        }
        /**
         * Determines a surface edge or corner.
         */

        /**
         * Determines a surface edge or corner.
         */
        export namespace SurfaceEdge {
            export const $gtype: GObject.GType<SurfaceEdge>;
        }

        enum SurfaceEdge {
            /**
             * the top left corner.
             */
            NORTH_WEST,
            /**
             * the top edge.
             */
            NORTH,
            /**
             * the top right corner.
             */
            NORTH_EAST,
            /**
             * the left edge.
             */
            WEST,
            /**
             * the right edge.
             */
            EAST,
            /**
             * the lower left corner.
             */
            SOUTH_WEST,
            /**
             * the lower edge.
             */
            SOUTH,
            /**
             * the lower right corner.
             */
            SOUTH_EAST,
        }
        /**
         * Possible errors that can be returned by `GdkTexture` constructors.
         */
        class TextureError extends GLib.Error {
            static $gtype: GObject.GType<TextureError>;

            // Static fields

            /**
             * Not enough memory to handle this image
             */
            static TOO_LARGE: number;
            /**
             * The image data appears corrupted
             */
            static CORRUPT_IMAGE: number;
            /**
             * The image contains features
             *   that cannot be loaded
             */
            static UNSUPPORTED_CONTENT: number;
            /**
             * The image format is not supported
             */
            static UNSUPPORTED_FORMAT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Registers an error quark for [class`Gdk`.Texture] errors.
             */
            static quark(): GLib.Quark;
        }

        /**
         * The kind of title bar gesture to emit with
         * [method`Gdk`.Toplevel.titlebar_gesture].
         */

        /**
         * The kind of title bar gesture to emit with
         * [method`Gdk`.Toplevel.titlebar_gesture].
         */
        export namespace TitlebarGesture {
            export const $gtype: GObject.GType<TitlebarGesture>;
        }

        enum TitlebarGesture {
            /**
             * double click gesture
             */
            DOUBLE_CLICK,
            /**
             * right click gesture
             */
            RIGHT_CLICK,
            /**
             * middle click gesture
             */
            MIDDLE_CLICK,
        }
        /**
         * Specifies the current state of a touchpad gesture.
         *
         * All gestures are guaranteed to begin with an event with phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by 0 or several events
         * with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
         *
         * A finished gesture may have 2 possible outcomes, an event with phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
         * considered successful, this should be used as the hint to perform any
         * permanent changes.
         *
         * Cancelled gestures may be so for a variety of reasons, due to hardware
         * or the compositor, or due to the gesture recognition layers hinting the
         * gesture did not finish resolutely (eg. a 3rd finger being added during
         * a pinch gesture). In these cases, the last event will report the phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
         * to undo any visible/permanent changes that were done throughout the
         * progress of the gesture.
         */

        /**
         * Specifies the current state of a touchpad gesture.
         *
         * All gestures are guaranteed to begin with an event with phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by 0 or several events
         * with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
         *
         * A finished gesture may have 2 possible outcomes, an event with phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
         * considered successful, this should be used as the hint to perform any
         * permanent changes.
         *
         * Cancelled gestures may be so for a variety of reasons, due to hardware
         * or the compositor, or due to the gesture recognition layers hinting the
         * gesture did not finish resolutely (eg. a 3rd finger being added during
         * a pinch gesture). In these cases, the last event will report the phase
         * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
         * to undo any visible/permanent changes that were done throughout the
         * progress of the gesture.
         */
        export namespace TouchpadGesturePhase {
            export const $gtype: GObject.GType<TouchpadGesturePhase>;
        }

        enum TouchpadGesturePhase {
            /**
             * The gesture has begun.
             */
            BEGIN,
            /**
             * The gesture has been updated.
             */
            UPDATE,
            /**
             * The gesture was finished, changes
             *   should be permanently applied.
             */
            END,
            /**
             * The gesture was cancelled, all
             *   changes should be undone.
             */
            CANCEL,
        }
        /**
         * Error enumeration for `GdkVulkanContext`.
         */
        class VulkanError extends GLib.Error {
            static $gtype: GObject.GType<VulkanError>;

            // Static fields

            /**
             * Vulkan is not supported on this backend or has not been
             *   compiled in.
             */
            static UNSUPPORTED: number;
            /**
             * Vulkan support is not available on this Surface
             */
            static NOT_AVAILABLE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Registers an error quark for [class`Gdk`.VulkanContext] errors.
             */
            static quark(): GLib.Quark;
        }

        /**
         * Defines all possible DND actions.
         *
         * This can be used in [method`Gdk`.Drop.status] messages when any drop
         * can be accepted or a more specific drop method is not yet known.
         */
        const ACTION_ALL: number;
        /**
         * The middle button.
         */
        const BUTTON_MIDDLE: number;
        /**
         * The primary button. This is typically the left mouse button, or the
         * right button in a left-handed setup.
         */
        const BUTTON_PRIMARY: number;
        /**
         * The secondary button. This is typically the right mouse button, or the
         * left button in a left-handed setup.
         */
        const BUTTON_SECONDARY: number;
        /**
         * Represents the current time, and can be used anywhere a time is expected.
         */
        const CURRENT_TIME: number;
        /**
         * Use this macro as the return value for continuing the propagation of
         * an event handler.
         */
        const EVENT_PROPAGATE: boolean;
        /**
         * Use this macro as the return value for stopping the propagation of
         * an event handler.
         */
        const EVENT_STOP: boolean;
        const KEY_0: number;
        const KEY_1: number;
        const KEY_2: number;
        const KEY_3: number;
        const KEY_3270_AltCursor: number;
        const KEY_3270_Attn: number;
        const KEY_3270_BackTab: number;
        const KEY_3270_ChangeScreen: number;
        const KEY_3270_Copy: number;
        const KEY_3270_CursorBlink: number;
        const KEY_3270_CursorSelect: number;
        const KEY_3270_DeleteWord: number;
        const KEY_3270_Duplicate: number;
        const KEY_3270_Enter: number;
        const KEY_3270_EraseEOF: number;
        const KEY_3270_EraseInput: number;
        const KEY_3270_ExSelect: number;
        const KEY_3270_FieldMark: number;
        const KEY_3270_Ident: number;
        const KEY_3270_Jump: number;
        const KEY_3270_KeyClick: number;
        const KEY_3270_Left2: number;
        const KEY_3270_PA1: number;
        const KEY_3270_PA2: number;
        const KEY_3270_PA3: number;
        const KEY_3270_Play: number;
        const KEY_3270_PrintScreen: number;
        const KEY_3270_Quit: number;
        const KEY_3270_Record: number;
        const KEY_3270_Reset: number;
        const KEY_3270_Right2: number;
        const KEY_3270_Rule: number;
        const KEY_3270_Setup: number;
        const KEY_3270_Test: number;
        const KEY_4: number;
        const KEY_5: number;
        const KEY_6: number;
        const KEY_7: number;
        const KEY_8: number;
        const KEY_9: number;
        const KEY_A: number;
        const KEY_AE: number;
        const KEY_Aacute: number;
        const KEY_Abelowdot: number;
        const KEY_Abreve: number;
        const KEY_Abreveacute: number;
        const KEY_Abrevebelowdot: number;
        const KEY_Abrevegrave: number;
        const KEY_Abrevehook: number;
        const KEY_Abrevetilde: number;
        const KEY_AccessX_Enable: number;
        const KEY_AccessX_Feedback_Enable: number;
        const KEY_Acircumflex: number;
        const KEY_Acircumflexacute: number;
        const KEY_Acircumflexbelowdot: number;
        const KEY_Acircumflexgrave: number;
        const KEY_Acircumflexhook: number;
        const KEY_Acircumflextilde: number;
        const KEY_AddFavorite: number;
        const KEY_Adiaeresis: number;
        const KEY_Agrave: number;
        const KEY_Ahook: number;
        const KEY_Alt_L: number;
        const KEY_Alt_R: number;
        const KEY_Amacron: number;
        const KEY_Aogonek: number;
        const KEY_ApplicationLeft: number;
        const KEY_ApplicationRight: number;
        const KEY_Arabic_0: number;
        const KEY_Arabic_1: number;
        const KEY_Arabic_2: number;
        const KEY_Arabic_3: number;
        const KEY_Arabic_4: number;
        const KEY_Arabic_5: number;
        const KEY_Arabic_6: number;
        const KEY_Arabic_7: number;
        const KEY_Arabic_8: number;
        const KEY_Arabic_9: number;
        const KEY_Arabic_ain: number;
        const KEY_Arabic_alef: number;
        const KEY_Arabic_alefmaksura: number;
        const KEY_Arabic_beh: number;
        const KEY_Arabic_comma: number;
        const KEY_Arabic_dad: number;
        const KEY_Arabic_dal: number;
        const KEY_Arabic_damma: number;
        const KEY_Arabic_dammatan: number;
        const KEY_Arabic_ddal: number;
        const KEY_Arabic_farsi_yeh: number;
        const KEY_Arabic_fatha: number;
        const KEY_Arabic_fathatan: number;
        const KEY_Arabic_feh: number;
        const KEY_Arabic_fullstop: number;
        const KEY_Arabic_gaf: number;
        const KEY_Arabic_ghain: number;
        const KEY_Arabic_ha: number;
        const KEY_Arabic_hah: number;
        const KEY_Arabic_hamza: number;
        const KEY_Arabic_hamza_above: number;
        const KEY_Arabic_hamza_below: number;
        const KEY_Arabic_hamzaonalef: number;
        const KEY_Arabic_hamzaonwaw: number;
        const KEY_Arabic_hamzaonyeh: number;
        const KEY_Arabic_hamzaunderalef: number;
        const KEY_Arabic_heh: number;
        const KEY_Arabic_heh_doachashmee: number;
        const KEY_Arabic_heh_goal: number;
        const KEY_Arabic_jeem: number;
        const KEY_Arabic_jeh: number;
        const KEY_Arabic_kaf: number;
        const KEY_Arabic_kasra: number;
        const KEY_Arabic_kasratan: number;
        const KEY_Arabic_keheh: number;
        const KEY_Arabic_khah: number;
        const KEY_Arabic_lam: number;
        const KEY_Arabic_madda_above: number;
        const KEY_Arabic_maddaonalef: number;
        const KEY_Arabic_meem: number;
        const KEY_Arabic_noon: number;
        const KEY_Arabic_noon_ghunna: number;
        const KEY_Arabic_peh: number;
        const KEY_Arabic_percent: number;
        const KEY_Arabic_qaf: number;
        const KEY_Arabic_question_mark: number;
        const KEY_Arabic_ra: number;
        const KEY_Arabic_rreh: number;
        const KEY_Arabic_sad: number;
        const KEY_Arabic_seen: number;
        const KEY_Arabic_semicolon: number;
        const KEY_Arabic_shadda: number;
        const KEY_Arabic_sheen: number;
        const KEY_Arabic_sukun: number;
        const KEY_Arabic_superscript_alef: number;
        const KEY_Arabic_switch: number;
        const KEY_Arabic_tah: number;
        const KEY_Arabic_tatweel: number;
        const KEY_Arabic_tcheh: number;
        const KEY_Arabic_teh: number;
        const KEY_Arabic_tehmarbuta: number;
        const KEY_Arabic_thal: number;
        const KEY_Arabic_theh: number;
        const KEY_Arabic_tteh: number;
        const KEY_Arabic_veh: number;
        const KEY_Arabic_waw: number;
        const KEY_Arabic_yeh: number;
        const KEY_Arabic_yeh_baree: number;
        const KEY_Arabic_zah: number;
        const KEY_Arabic_zain: number;
        const KEY_Aring: number;
        const KEY_Armenian_AT: number;
        const KEY_Armenian_AYB: number;
        const KEY_Armenian_BEN: number;
        const KEY_Armenian_CHA: number;
        const KEY_Armenian_DA: number;
        const KEY_Armenian_DZA: number;
        const KEY_Armenian_E: number;
        const KEY_Armenian_FE: number;
        const KEY_Armenian_GHAT: number;
        const KEY_Armenian_GIM: number;
        const KEY_Armenian_HI: number;
        const KEY_Armenian_HO: number;
        const KEY_Armenian_INI: number;
        const KEY_Armenian_JE: number;
        const KEY_Armenian_KE: number;
        const KEY_Armenian_KEN: number;
        const KEY_Armenian_KHE: number;
        const KEY_Armenian_LYUN: number;
        const KEY_Armenian_MEN: number;
        const KEY_Armenian_NU: number;
        const KEY_Armenian_O: number;
        const KEY_Armenian_PE: number;
        const KEY_Armenian_PYUR: number;
        const KEY_Armenian_RA: number;
        const KEY_Armenian_RE: number;
        const KEY_Armenian_SE: number;
        const KEY_Armenian_SHA: number;
        const KEY_Armenian_TCHE: number;
        const KEY_Armenian_TO: number;
        const KEY_Armenian_TSA: number;
        const KEY_Armenian_TSO: number;
        const KEY_Armenian_TYUN: number;
        const KEY_Armenian_VEV: number;
        const KEY_Armenian_VO: number;
        const KEY_Armenian_VYUN: number;
        const KEY_Armenian_YECH: number;
        const KEY_Armenian_ZA: number;
        const KEY_Armenian_ZHE: number;
        const KEY_Armenian_accent: number;
        const KEY_Armenian_amanak: number;
        const KEY_Armenian_apostrophe: number;
        const KEY_Armenian_at: number;
        const KEY_Armenian_ayb: number;
        const KEY_Armenian_ben: number;
        const KEY_Armenian_but: number;
        const KEY_Armenian_cha: number;
        const KEY_Armenian_da: number;
        const KEY_Armenian_dza: number;
        const KEY_Armenian_e: number;
        const KEY_Armenian_exclam: number;
        const KEY_Armenian_fe: number;
        const KEY_Armenian_full_stop: number;
        const KEY_Armenian_ghat: number;
        const KEY_Armenian_gim: number;
        const KEY_Armenian_hi: number;
        const KEY_Armenian_ho: number;
        const KEY_Armenian_hyphen: number;
        const KEY_Armenian_ini: number;
        const KEY_Armenian_je: number;
        const KEY_Armenian_ke: number;
        const KEY_Armenian_ken: number;
        const KEY_Armenian_khe: number;
        const KEY_Armenian_ligature_ew: number;
        const KEY_Armenian_lyun: number;
        const KEY_Armenian_men: number;
        const KEY_Armenian_nu: number;
        const KEY_Armenian_o: number;
        const KEY_Armenian_paruyk: number;
        const KEY_Armenian_pe: number;
        const KEY_Armenian_pyur: number;
        const KEY_Armenian_question: number;
        const KEY_Armenian_ra: number;
        const KEY_Armenian_re: number;
        const KEY_Armenian_se: number;
        const KEY_Armenian_separation_mark: number;
        const KEY_Armenian_sha: number;
        const KEY_Armenian_shesht: number;
        const KEY_Armenian_tche: number;
        const KEY_Armenian_to: number;
        const KEY_Armenian_tsa: number;
        const KEY_Armenian_tso: number;
        const KEY_Armenian_tyun: number;
        const KEY_Armenian_verjaket: number;
        const KEY_Armenian_vev: number;
        const KEY_Armenian_vo: number;
        const KEY_Armenian_vyun: number;
        const KEY_Armenian_yech: number;
        const KEY_Armenian_yentamna: number;
        const KEY_Armenian_za: number;
        const KEY_Armenian_zhe: number;
        const KEY_Atilde: number;
        const KEY_AudibleBell_Enable: number;
        const KEY_AudioCycleTrack: number;
        const KEY_AudioForward: number;
        const KEY_AudioLowerVolume: number;
        const KEY_AudioMedia: number;
        const KEY_AudioMicMute: number;
        const KEY_AudioMute: number;
        const KEY_AudioNext: number;
        const KEY_AudioPause: number;
        const KEY_AudioPlay: number;
        const KEY_AudioPreset: number;
        const KEY_AudioPrev: number;
        const KEY_AudioRaiseVolume: number;
        const KEY_AudioRandomPlay: number;
        const KEY_AudioRecord: number;
        const KEY_AudioRepeat: number;
        const KEY_AudioRewind: number;
        const KEY_AudioStop: number;
        const KEY_Away: number;
        const KEY_B: number;
        const KEY_Babovedot: number;
        const KEY_Back: number;
        const KEY_BackForward: number;
        const KEY_BackSpace: number;
        const KEY_Battery: number;
        const KEY_Begin: number;
        const KEY_Blue: number;
        const KEY_Bluetooth: number;
        const KEY_Book: number;
        const KEY_BounceKeys_Enable: number;
        const KEY_Break: number;
        const KEY_BrightnessAdjust: number;
        const KEY_Byelorussian_SHORTU: number;
        const KEY_Byelorussian_shortu: number;
        const KEY_C: number;
        const KEY_CD: number;
        const KEY_CH: number;
        const KEY_C_H: number;
        const KEY_C_h: number;
        const KEY_Cabovedot: number;
        const KEY_Cacute: number;
        const KEY_Calculator: number;
        const KEY_Calendar: number;
        const KEY_Cancel: number;
        const KEY_Caps_Lock: number;
        const KEY_Ccaron: number;
        const KEY_Ccedilla: number;
        const KEY_Ccircumflex: number;
        const KEY_Ch: number;
        const KEY_Clear: number;
        const KEY_ClearGrab: number;
        const KEY_Close: number;
        const KEY_Codeinput: number;
        const KEY_ColonSign: number;
        const KEY_Community: number;
        const KEY_ContrastAdjust: number;
        const KEY_Control_L: number;
        const KEY_Control_R: number;
        const KEY_Copy: number;
        const KEY_CruzeiroSign: number;
        const KEY_Cut: number;
        const KEY_CycleAngle: number;
        const KEY_Cyrillic_A: number;
        const KEY_Cyrillic_BE: number;
        const KEY_Cyrillic_CHE: number;
        const KEY_Cyrillic_CHE_descender: number;
        const KEY_Cyrillic_CHE_vertstroke: number;
        const KEY_Cyrillic_DE: number;
        const KEY_Cyrillic_DZHE: number;
        const KEY_Cyrillic_E: number;
        const KEY_Cyrillic_EF: number;
        const KEY_Cyrillic_EL: number;
        const KEY_Cyrillic_EM: number;
        const KEY_Cyrillic_EN: number;
        const KEY_Cyrillic_EN_descender: number;
        const KEY_Cyrillic_ER: number;
        const KEY_Cyrillic_ES: number;
        const KEY_Cyrillic_GHE: number;
        const KEY_Cyrillic_GHE_bar: number;
        const KEY_Cyrillic_HA: number;
        const KEY_Cyrillic_HARDSIGN: number;
        const KEY_Cyrillic_HA_descender: number;
        const KEY_Cyrillic_I: number;
        const KEY_Cyrillic_IE: number;
        const KEY_Cyrillic_IO: number;
        const KEY_Cyrillic_I_macron: number;
        const KEY_Cyrillic_JE: number;
        const KEY_Cyrillic_KA: number;
        const KEY_Cyrillic_KA_descender: number;
        const KEY_Cyrillic_KA_vertstroke: number;
        const KEY_Cyrillic_LJE: number;
        const KEY_Cyrillic_NJE: number;
        const KEY_Cyrillic_O: number;
        const KEY_Cyrillic_O_bar: number;
        const KEY_Cyrillic_PE: number;
        const KEY_Cyrillic_SCHWA: number;
        const KEY_Cyrillic_SHA: number;
        const KEY_Cyrillic_SHCHA: number;
        const KEY_Cyrillic_SHHA: number;
        const KEY_Cyrillic_SHORTI: number;
        const KEY_Cyrillic_SOFTSIGN: number;
        const KEY_Cyrillic_TE: number;
        const KEY_Cyrillic_TSE: number;
        const KEY_Cyrillic_U: number;
        const KEY_Cyrillic_U_macron: number;
        const KEY_Cyrillic_U_straight: number;
        const KEY_Cyrillic_U_straight_bar: number;
        const KEY_Cyrillic_VE: number;
        const KEY_Cyrillic_YA: number;
        const KEY_Cyrillic_YERU: number;
        const KEY_Cyrillic_YU: number;
        const KEY_Cyrillic_ZE: number;
        const KEY_Cyrillic_ZHE: number;
        const KEY_Cyrillic_ZHE_descender: number;
        const KEY_Cyrillic_a: number;
        const KEY_Cyrillic_be: number;
        const KEY_Cyrillic_che: number;
        const KEY_Cyrillic_che_descender: number;
        const KEY_Cyrillic_che_vertstroke: number;
        const KEY_Cyrillic_de: number;
        const KEY_Cyrillic_dzhe: number;
        const KEY_Cyrillic_e: number;
        const KEY_Cyrillic_ef: number;
        const KEY_Cyrillic_el: number;
        const KEY_Cyrillic_em: number;
        const KEY_Cyrillic_en: number;
        const KEY_Cyrillic_en_descender: number;
        const KEY_Cyrillic_er: number;
        const KEY_Cyrillic_es: number;
        const KEY_Cyrillic_ghe: number;
        const KEY_Cyrillic_ghe_bar: number;
        const KEY_Cyrillic_ha: number;
        const KEY_Cyrillic_ha_descender: number;
        const KEY_Cyrillic_hardsign: number;
        const KEY_Cyrillic_i: number;
        const KEY_Cyrillic_i_macron: number;
        const KEY_Cyrillic_ie: number;
        const KEY_Cyrillic_io: number;
        const KEY_Cyrillic_je: number;
        const KEY_Cyrillic_ka: number;
        const KEY_Cyrillic_ka_descender: number;
        const KEY_Cyrillic_ka_vertstroke: number;
        const KEY_Cyrillic_lje: number;
        const KEY_Cyrillic_nje: number;
        const KEY_Cyrillic_o: number;
        const KEY_Cyrillic_o_bar: number;
        const KEY_Cyrillic_pe: number;
        const KEY_Cyrillic_schwa: number;
        const KEY_Cyrillic_sha: number;
        const KEY_Cyrillic_shcha: number;
        const KEY_Cyrillic_shha: number;
        const KEY_Cyrillic_shorti: number;
        const KEY_Cyrillic_softsign: number;
        const KEY_Cyrillic_te: number;
        const KEY_Cyrillic_tse: number;
        const KEY_Cyrillic_u: number;
        const KEY_Cyrillic_u_macron: number;
        const KEY_Cyrillic_u_straight: number;
        const KEY_Cyrillic_u_straight_bar: number;
        const KEY_Cyrillic_ve: number;
        const KEY_Cyrillic_ya: number;
        const KEY_Cyrillic_yeru: number;
        const KEY_Cyrillic_yu: number;
        const KEY_Cyrillic_ze: number;
        const KEY_Cyrillic_zhe: number;
        const KEY_Cyrillic_zhe_descender: number;
        const KEY_D: number;
        const KEY_DOS: number;
        const KEY_Dabovedot: number;
        const KEY_Dcaron: number;
        const KEY_Delete: number;
        const KEY_Display: number;
        const KEY_Documents: number;
        const KEY_DongSign: number;
        const KEY_Down: number;
        const KEY_Dstroke: number;
        const KEY_E: number;
        const KEY_ENG: number;
        const KEY_ETH: number;
        const KEY_EZH: number;
        const KEY_Eabovedot: number;
        const KEY_Eacute: number;
        const KEY_Ebelowdot: number;
        const KEY_Ecaron: number;
        const KEY_Ecircumflex: number;
        const KEY_Ecircumflexacute: number;
        const KEY_Ecircumflexbelowdot: number;
        const KEY_Ecircumflexgrave: number;
        const KEY_Ecircumflexhook: number;
        const KEY_Ecircumflextilde: number;
        const KEY_EcuSign: number;
        const KEY_Ediaeresis: number;
        const KEY_Egrave: number;
        const KEY_Ehook: number;
        const KEY_Eisu_Shift: number;
        const KEY_Eisu_toggle: number;
        const KEY_Eject: number;
        const KEY_Emacron: number;
        const KEY_End: number;
        const KEY_Eogonek: number;
        const KEY_Escape: number;
        const KEY_Eth: number;
        const KEY_Etilde: number;
        const KEY_EuroSign: number;
        const KEY_Excel: number;
        const KEY_Execute: number;
        const KEY_Explorer: number;
        const KEY_F: number;
        const KEY_F1: number;
        const KEY_F10: number;
        const KEY_F11: number;
        const KEY_F12: number;
        const KEY_F13: number;
        const KEY_F14: number;
        const KEY_F15: number;
        const KEY_F16: number;
        const KEY_F17: number;
        const KEY_F18: number;
        const KEY_F19: number;
        const KEY_F2: number;
        const KEY_F20: number;
        const KEY_F21: number;
        const KEY_F22: number;
        const KEY_F23: number;
        const KEY_F24: number;
        const KEY_F25: number;
        const KEY_F26: number;
        const KEY_F27: number;
        const KEY_F28: number;
        const KEY_F29: number;
        const KEY_F3: number;
        const KEY_F30: number;
        const KEY_F31: number;
        const KEY_F32: number;
        const KEY_F33: number;
        const KEY_F34: number;
        const KEY_F35: number;
        const KEY_F4: number;
        const KEY_F5: number;
        const KEY_F6: number;
        const KEY_F7: number;
        const KEY_F8: number;
        const KEY_F9: number;
        const KEY_FFrancSign: number;
        const KEY_Fabovedot: number;
        const KEY_Farsi_0: number;
        const KEY_Farsi_1: number;
        const KEY_Farsi_2: number;
        const KEY_Farsi_3: number;
        const KEY_Farsi_4: number;
        const KEY_Farsi_5: number;
        const KEY_Farsi_6: number;
        const KEY_Farsi_7: number;
        const KEY_Farsi_8: number;
        const KEY_Farsi_9: number;
        const KEY_Farsi_yeh: number;
        const KEY_Favorites: number;
        const KEY_Finance: number;
        const KEY_Find: number;
        const KEY_First_Virtual_Screen: number;
        const KEY_Forward: number;
        const KEY_FrameBack: number;
        const KEY_FrameForward: number;
        const KEY_G: number;
        const KEY_Gabovedot: number;
        const KEY_Game: number;
        const KEY_Gbreve: number;
        const KEY_Gcaron: number;
        const KEY_Gcedilla: number;
        const KEY_Gcircumflex: number;
        const KEY_Georgian_an: number;
        const KEY_Georgian_ban: number;
        const KEY_Georgian_can: number;
        const KEY_Georgian_char: number;
        const KEY_Georgian_chin: number;
        const KEY_Georgian_cil: number;
        const KEY_Georgian_don: number;
        const KEY_Georgian_en: number;
        const KEY_Georgian_fi: number;
        const KEY_Georgian_gan: number;
        const KEY_Georgian_ghan: number;
        const KEY_Georgian_hae: number;
        const KEY_Georgian_har: number;
        const KEY_Georgian_he: number;
        const KEY_Georgian_hie: number;
        const KEY_Georgian_hoe: number;
        const KEY_Georgian_in: number;
        const KEY_Georgian_jhan: number;
        const KEY_Georgian_jil: number;
        const KEY_Georgian_kan: number;
        const KEY_Georgian_khar: number;
        const KEY_Georgian_las: number;
        const KEY_Georgian_man: number;
        const KEY_Georgian_nar: number;
        const KEY_Georgian_on: number;
        const KEY_Georgian_par: number;
        const KEY_Georgian_phar: number;
        const KEY_Georgian_qar: number;
        const KEY_Georgian_rae: number;
        const KEY_Georgian_san: number;
        const KEY_Georgian_shin: number;
        const KEY_Georgian_tan: number;
        const KEY_Georgian_tar: number;
        const KEY_Georgian_un: number;
        const KEY_Georgian_vin: number;
        const KEY_Georgian_we: number;
        const KEY_Georgian_xan: number;
        const KEY_Georgian_zen: number;
        const KEY_Georgian_zhar: number;
        const KEY_Go: number;
        const KEY_Greek_ALPHA: number;
        const KEY_Greek_ALPHAaccent: number;
        const KEY_Greek_BETA: number;
        const KEY_Greek_CHI: number;
        const KEY_Greek_DELTA: number;
        const KEY_Greek_EPSILON: number;
        const KEY_Greek_EPSILONaccent: number;
        const KEY_Greek_ETA: number;
        const KEY_Greek_ETAaccent: number;
        const KEY_Greek_GAMMA: number;
        const KEY_Greek_IOTA: number;
        const KEY_Greek_IOTAaccent: number;
        const KEY_Greek_IOTAdiaeresis: number;
        const KEY_Greek_IOTAdieresis: number;
        const KEY_Greek_KAPPA: number;
        const KEY_Greek_LAMBDA: number;
        const KEY_Greek_LAMDA: number;
        const KEY_Greek_MU: number;
        const KEY_Greek_NU: number;
        const KEY_Greek_OMEGA: number;
        const KEY_Greek_OMEGAaccent: number;
        const KEY_Greek_OMICRON: number;
        const KEY_Greek_OMICRONaccent: number;
        const KEY_Greek_PHI: number;
        const KEY_Greek_PI: number;
        const KEY_Greek_PSI: number;
        const KEY_Greek_RHO: number;
        const KEY_Greek_SIGMA: number;
        const KEY_Greek_TAU: number;
        const KEY_Greek_THETA: number;
        const KEY_Greek_UPSILON: number;
        const KEY_Greek_UPSILONaccent: number;
        const KEY_Greek_UPSILONdieresis: number;
        const KEY_Greek_XI: number;
        const KEY_Greek_ZETA: number;
        const KEY_Greek_accentdieresis: number;
        const KEY_Greek_alpha: number;
        const KEY_Greek_alphaaccent: number;
        const KEY_Greek_beta: number;
        const KEY_Greek_chi: number;
        const KEY_Greek_delta: number;
        const KEY_Greek_epsilon: number;
        const KEY_Greek_epsilonaccent: number;
        const KEY_Greek_eta: number;
        const KEY_Greek_etaaccent: number;
        const KEY_Greek_finalsmallsigma: number;
        const KEY_Greek_gamma: number;
        const KEY_Greek_horizbar: number;
        const KEY_Greek_iota: number;
        const KEY_Greek_iotaaccent: number;
        const KEY_Greek_iotaaccentdieresis: number;
        const KEY_Greek_iotadieresis: number;
        const KEY_Greek_kappa: number;
        const KEY_Greek_lambda: number;
        const KEY_Greek_lamda: number;
        const KEY_Greek_mu: number;
        const KEY_Greek_nu: number;
        const KEY_Greek_omega: number;
        const KEY_Greek_omegaaccent: number;
        const KEY_Greek_omicron: number;
        const KEY_Greek_omicronaccent: number;
        const KEY_Greek_phi: number;
        const KEY_Greek_pi: number;
        const KEY_Greek_psi: number;
        const KEY_Greek_rho: number;
        const KEY_Greek_sigma: number;
        const KEY_Greek_switch: number;
        const KEY_Greek_tau: number;
        const KEY_Greek_theta: number;
        const KEY_Greek_upsilon: number;
        const KEY_Greek_upsilonaccent: number;
        const KEY_Greek_upsilonaccentdieresis: number;
        const KEY_Greek_upsilondieresis: number;
        const KEY_Greek_xi: number;
        const KEY_Greek_zeta: number;
        const KEY_Green: number;
        const KEY_H: number;
        const KEY_Hangul: number;
        const KEY_Hangul_A: number;
        const KEY_Hangul_AE: number;
        const KEY_Hangul_AraeA: number;
        const KEY_Hangul_AraeAE: number;
        const KEY_Hangul_Banja: number;
        const KEY_Hangul_Cieuc: number;
        const KEY_Hangul_Codeinput: number;
        const KEY_Hangul_Dikeud: number;
        const KEY_Hangul_E: number;
        const KEY_Hangul_EO: number;
        const KEY_Hangul_EU: number;
        const KEY_Hangul_End: number;
        const KEY_Hangul_Hanja: number;
        const KEY_Hangul_Hieuh: number;
        const KEY_Hangul_I: number;
        const KEY_Hangul_Ieung: number;
        const KEY_Hangul_J_Cieuc: number;
        const KEY_Hangul_J_Dikeud: number;
        const KEY_Hangul_J_Hieuh: number;
        const KEY_Hangul_J_Ieung: number;
        const KEY_Hangul_J_Jieuj: number;
        const KEY_Hangul_J_Khieuq: number;
        const KEY_Hangul_J_Kiyeog: number;
        const KEY_Hangul_J_KiyeogSios: number;
        const KEY_Hangul_J_KkogjiDalrinIeung: number;
        const KEY_Hangul_J_Mieum: number;
        const KEY_Hangul_J_Nieun: number;
        const KEY_Hangul_J_NieunHieuh: number;
        const KEY_Hangul_J_NieunJieuj: number;
        const KEY_Hangul_J_PanSios: number;
        const KEY_Hangul_J_Phieuf: number;
        const KEY_Hangul_J_Pieub: number;
        const KEY_Hangul_J_PieubSios: number;
        const KEY_Hangul_J_Rieul: number;
        const KEY_Hangul_J_RieulHieuh: number;
        const KEY_Hangul_J_RieulKiyeog: number;
        const KEY_Hangul_J_RieulMieum: number;
        const KEY_Hangul_J_RieulPhieuf: number;
        const KEY_Hangul_J_RieulPieub: number;
        const KEY_Hangul_J_RieulSios: number;
        const KEY_Hangul_J_RieulTieut: number;
        const KEY_Hangul_J_Sios: number;
        const KEY_Hangul_J_SsangKiyeog: number;
        const KEY_Hangul_J_SsangSios: number;
        const KEY_Hangul_J_Tieut: number;
        const KEY_Hangul_J_YeorinHieuh: number;
        const KEY_Hangul_Jamo: number;
        const KEY_Hangul_Jeonja: number;
        const KEY_Hangul_Jieuj: number;
        const KEY_Hangul_Khieuq: number;
        const KEY_Hangul_Kiyeog: number;
        const KEY_Hangul_KiyeogSios: number;
        const KEY_Hangul_KkogjiDalrinIeung: number;
        const KEY_Hangul_Mieum: number;
        const KEY_Hangul_MultipleCandidate: number;
        const KEY_Hangul_Nieun: number;
        const KEY_Hangul_NieunHieuh: number;
        const KEY_Hangul_NieunJieuj: number;
        const KEY_Hangul_O: number;
        const KEY_Hangul_OE: number;
        const KEY_Hangul_PanSios: number;
        const KEY_Hangul_Phieuf: number;
        const KEY_Hangul_Pieub: number;
        const KEY_Hangul_PieubSios: number;
        const KEY_Hangul_PostHanja: number;
        const KEY_Hangul_PreHanja: number;
        const KEY_Hangul_PreviousCandidate: number;
        const KEY_Hangul_Rieul: number;
        const KEY_Hangul_RieulHieuh: number;
        const KEY_Hangul_RieulKiyeog: number;
        const KEY_Hangul_RieulMieum: number;
        const KEY_Hangul_RieulPhieuf: number;
        const KEY_Hangul_RieulPieub: number;
        const KEY_Hangul_RieulSios: number;
        const KEY_Hangul_RieulTieut: number;
        const KEY_Hangul_RieulYeorinHieuh: number;
        const KEY_Hangul_Romaja: number;
        const KEY_Hangul_SingleCandidate: number;
        const KEY_Hangul_Sios: number;
        const KEY_Hangul_Special: number;
        const KEY_Hangul_SsangDikeud: number;
        const KEY_Hangul_SsangJieuj: number;
        const KEY_Hangul_SsangKiyeog: number;
        const KEY_Hangul_SsangPieub: number;
        const KEY_Hangul_SsangSios: number;
        const KEY_Hangul_Start: number;
        const KEY_Hangul_SunkyeongeumMieum: number;
        const KEY_Hangul_SunkyeongeumPhieuf: number;
        const KEY_Hangul_SunkyeongeumPieub: number;
        const KEY_Hangul_Tieut: number;
        const KEY_Hangul_U: number;
        const KEY_Hangul_WA: number;
        const KEY_Hangul_WAE: number;
        const KEY_Hangul_WE: number;
        const KEY_Hangul_WEO: number;
        const KEY_Hangul_WI: number;
        const KEY_Hangul_YA: number;
        const KEY_Hangul_YAE: number;
        const KEY_Hangul_YE: number;
        const KEY_Hangul_YEO: number;
        const KEY_Hangul_YI: number;
        const KEY_Hangul_YO: number;
        const KEY_Hangul_YU: number;
        const KEY_Hangul_YeorinHieuh: number;
        const KEY_Hangul_switch: number;
        const KEY_Hankaku: number;
        const KEY_Hcircumflex: number;
        const KEY_Hebrew_switch: number;
        const KEY_Help: number;
        const KEY_Henkan: number;
        const KEY_Henkan_Mode: number;
        const KEY_Hibernate: number;
        const KEY_Hiragana: number;
        const KEY_Hiragana_Katakana: number;
        const KEY_History: number;
        const KEY_Home: number;
        const KEY_HomePage: number;
        const KEY_HotLinks: number;
        const KEY_Hstroke: number;
        const KEY_Hyper_L: number;
        const KEY_Hyper_R: number;
        const KEY_I: number;
        const KEY_ISO_Center_Object: number;
        const KEY_ISO_Continuous_Underline: number;
        const KEY_ISO_Discontinuous_Underline: number;
        const KEY_ISO_Emphasize: number;
        const KEY_ISO_Enter: number;
        const KEY_ISO_Fast_Cursor_Down: number;
        const KEY_ISO_Fast_Cursor_Left: number;
        const KEY_ISO_Fast_Cursor_Right: number;
        const KEY_ISO_Fast_Cursor_Up: number;
        const KEY_ISO_First_Group: number;
        const KEY_ISO_First_Group_Lock: number;
        const KEY_ISO_Group_Latch: number;
        const KEY_ISO_Group_Lock: number;
        const KEY_ISO_Group_Shift: number;
        const KEY_ISO_Last_Group: number;
        const KEY_ISO_Last_Group_Lock: number;
        const KEY_ISO_Left_Tab: number;
        const KEY_ISO_Level2_Latch: number;
        const KEY_ISO_Level3_Latch: number;
        const KEY_ISO_Level3_Lock: number;
        const KEY_ISO_Level3_Shift: number;
        const KEY_ISO_Level5_Latch: number;
        const KEY_ISO_Level5_Lock: number;
        const KEY_ISO_Level5_Shift: number;
        const KEY_ISO_Lock: number;
        const KEY_ISO_Move_Line_Down: number;
        const KEY_ISO_Move_Line_Up: number;
        const KEY_ISO_Next_Group: number;
        const KEY_ISO_Next_Group_Lock: number;
        const KEY_ISO_Partial_Line_Down: number;
        const KEY_ISO_Partial_Line_Up: number;
        const KEY_ISO_Partial_Space_Left: number;
        const KEY_ISO_Partial_Space_Right: number;
        const KEY_ISO_Prev_Group: number;
        const KEY_ISO_Prev_Group_Lock: number;
        const KEY_ISO_Release_Both_Margins: number;
        const KEY_ISO_Release_Margin_Left: number;
        const KEY_ISO_Release_Margin_Right: number;
        const KEY_ISO_Set_Margin_Left: number;
        const KEY_ISO_Set_Margin_Right: number;
        const KEY_Iabovedot: number;
        const KEY_Iacute: number;
        const KEY_Ibelowdot: number;
        const KEY_Ibreve: number;
        const KEY_Icircumflex: number;
        const KEY_Idiaeresis: number;
        const KEY_Igrave: number;
        const KEY_Ihook: number;
        const KEY_Imacron: number;
        const KEY_Insert: number;
        const KEY_Iogonek: number;
        const KEY_Itilde: number;
        const KEY_J: number;
        const KEY_Jcircumflex: number;
        const KEY_K: number;
        const KEY_KP_0: number;
        const KEY_KP_1: number;
        const KEY_KP_2: number;
        const KEY_KP_3: number;
        const KEY_KP_4: number;
        const KEY_KP_5: number;
        const KEY_KP_6: number;
        const KEY_KP_7: number;
        const KEY_KP_8: number;
        const KEY_KP_9: number;
        const KEY_KP_Add: number;
        const KEY_KP_Begin: number;
        const KEY_KP_Decimal: number;
        const KEY_KP_Delete: number;
        const KEY_KP_Divide: number;
        const KEY_KP_Down: number;
        const KEY_KP_End: number;
        const KEY_KP_Enter: number;
        const KEY_KP_Equal: number;
        const KEY_KP_F1: number;
        const KEY_KP_F2: number;
        const KEY_KP_F3: number;
        const KEY_KP_F4: number;
        const KEY_KP_Home: number;
        const KEY_KP_Insert: number;
        const KEY_KP_Left: number;
        const KEY_KP_Multiply: number;
        const KEY_KP_Next: number;
        const KEY_KP_Page_Down: number;
        const KEY_KP_Page_Up: number;
        const KEY_KP_Prior: number;
        const KEY_KP_Right: number;
        const KEY_KP_Separator: number;
        const KEY_KP_Space: number;
        const KEY_KP_Subtract: number;
        const KEY_KP_Tab: number;
        const KEY_KP_Up: number;
        const KEY_Kana_Lock: number;
        const KEY_Kana_Shift: number;
        const KEY_Kanji: number;
        const KEY_Kanji_Bangou: number;
        const KEY_Katakana: number;
        const KEY_KbdBrightnessDown: number;
        const KEY_KbdBrightnessUp: number;
        const KEY_KbdLightOnOff: number;
        const KEY_Kcedilla: number;
        const KEY_Keyboard: number;
        const KEY_Korean_Won: number;
        const KEY_L: number;
        const KEY_L1: number;
        const KEY_L10: number;
        const KEY_L2: number;
        const KEY_L3: number;
        const KEY_L4: number;
        const KEY_L5: number;
        const KEY_L6: number;
        const KEY_L7: number;
        const KEY_L8: number;
        const KEY_L9: number;
        const KEY_Lacute: number;
        const KEY_Last_Virtual_Screen: number;
        const KEY_Launch0: number;
        const KEY_Launch1: number;
        const KEY_Launch2: number;
        const KEY_Launch3: number;
        const KEY_Launch4: number;
        const KEY_Launch5: number;
        const KEY_Launch6: number;
        const KEY_Launch7: number;
        const KEY_Launch8: number;
        const KEY_Launch9: number;
        const KEY_LaunchA: number;
        const KEY_LaunchB: number;
        const KEY_LaunchC: number;
        const KEY_LaunchD: number;
        const KEY_LaunchE: number;
        const KEY_LaunchF: number;
        const KEY_Lbelowdot: number;
        const KEY_Lcaron: number;
        const KEY_Lcedilla: number;
        const KEY_Left: number;
        const KEY_LightBulb: number;
        const KEY_Linefeed: number;
        const KEY_LiraSign: number;
        const KEY_LogGrabInfo: number;
        const KEY_LogOff: number;
        const KEY_LogWindowTree: number;
        const KEY_Lstroke: number;
        const KEY_M: number;
        const KEY_Mabovedot: number;
        const KEY_Macedonia_DSE: number;
        const KEY_Macedonia_GJE: number;
        const KEY_Macedonia_KJE: number;
        const KEY_Macedonia_dse: number;
        const KEY_Macedonia_gje: number;
        const KEY_Macedonia_kje: number;
        const KEY_Mae_Koho: number;
        const KEY_Mail: number;
        const KEY_MailForward: number;
        const KEY_Market: number;
        const KEY_Massyo: number;
        const KEY_Meeting: number;
        const KEY_Memo: number;
        const KEY_Menu: number;
        const KEY_MenuKB: number;
        const KEY_MenuPB: number;
        const KEY_Messenger: number;
        const KEY_Meta_L: number;
        const KEY_Meta_R: number;
        const KEY_MillSign: number;
        const KEY_ModeLock: number;
        const KEY_Mode_switch: number;
        const KEY_MonBrightnessDown: number;
        const KEY_MonBrightnessUp: number;
        const KEY_MouseKeys_Accel_Enable: number;
        const KEY_MouseKeys_Enable: number;
        const KEY_Muhenkan: number;
        const KEY_Multi_key: number;
        const KEY_MultipleCandidate: number;
        const KEY_Music: number;
        const KEY_MyComputer: number;
        const KEY_MySites: number;
        const KEY_N: number;
        const KEY_Nacute: number;
        const KEY_NairaSign: number;
        const KEY_Ncaron: number;
        const KEY_Ncedilla: number;
        const KEY_New: number;
        const KEY_NewSheqelSign: number;
        const KEY_News: number;
        const KEY_Next: number;
        const KEY_Next_VMode: number;
        const KEY_Next_Virtual_Screen: number;
        const KEY_Ntilde: number;
        const KEY_Num_Lock: number;
        const KEY_O: number;
        const KEY_OE: number;
        const KEY_Oacute: number;
        const KEY_Obarred: number;
        const KEY_Obelowdot: number;
        const KEY_Ocaron: number;
        const KEY_Ocircumflex: number;
        const KEY_Ocircumflexacute: number;
        const KEY_Ocircumflexbelowdot: number;
        const KEY_Ocircumflexgrave: number;
        const KEY_Ocircumflexhook: number;
        const KEY_Ocircumflextilde: number;
        const KEY_Odiaeresis: number;
        const KEY_Odoubleacute: number;
        const KEY_OfficeHome: number;
        const KEY_Ograve: number;
        const KEY_Ohook: number;
        const KEY_Ohorn: number;
        const KEY_Ohornacute: number;
        const KEY_Ohornbelowdot: number;
        const KEY_Ohorngrave: number;
        const KEY_Ohornhook: number;
        const KEY_Ohorntilde: number;
        const KEY_Omacron: number;
        const KEY_Ooblique: number;
        const KEY_Open: number;
        const KEY_OpenURL: number;
        const KEY_Option: number;
        const KEY_Oslash: number;
        const KEY_Otilde: number;
        const KEY_Overlay1_Enable: number;
        const KEY_Overlay2_Enable: number;
        const KEY_P: number;
        const KEY_Pabovedot: number;
        const KEY_Page_Down: number;
        const KEY_Page_Up: number;
        const KEY_Paste: number;
        const KEY_Pause: number;
        const KEY_PesetaSign: number;
        const KEY_Phone: number;
        const KEY_Pictures: number;
        const KEY_Pointer_Accelerate: number;
        const KEY_Pointer_Button1: number;
        const KEY_Pointer_Button2: number;
        const KEY_Pointer_Button3: number;
        const KEY_Pointer_Button4: number;
        const KEY_Pointer_Button5: number;
        const KEY_Pointer_Button_Dflt: number;
        const KEY_Pointer_DblClick1: number;
        const KEY_Pointer_DblClick2: number;
        const KEY_Pointer_DblClick3: number;
        const KEY_Pointer_DblClick4: number;
        const KEY_Pointer_DblClick5: number;
        const KEY_Pointer_DblClick_Dflt: number;
        const KEY_Pointer_DfltBtnNext: number;
        const KEY_Pointer_DfltBtnPrev: number;
        const KEY_Pointer_Down: number;
        const KEY_Pointer_DownLeft: number;
        const KEY_Pointer_DownRight: number;
        const KEY_Pointer_Drag1: number;
        const KEY_Pointer_Drag2: number;
        const KEY_Pointer_Drag3: number;
        const KEY_Pointer_Drag4: number;
        const KEY_Pointer_Drag5: number;
        const KEY_Pointer_Drag_Dflt: number;
        const KEY_Pointer_EnableKeys: number;
        const KEY_Pointer_Left: number;
        const KEY_Pointer_Right: number;
        const KEY_Pointer_Up: number;
        const KEY_Pointer_UpLeft: number;
        const KEY_Pointer_UpRight: number;
        const KEY_PowerDown: number;
        const KEY_PowerOff: number;
        const KEY_Prev_VMode: number;
        const KEY_Prev_Virtual_Screen: number;
        const KEY_PreviousCandidate: number;
        const KEY_Print: number;
        const KEY_Prior: number;
        const KEY_Q: number;
        const KEY_R: number;
        const KEY_R1: number;
        const KEY_R10: number;
        const KEY_R11: number;
        const KEY_R12: number;
        const KEY_R13: number;
        const KEY_R14: number;
        const KEY_R15: number;
        const KEY_R2: number;
        const KEY_R3: number;
        const KEY_R4: number;
        const KEY_R5: number;
        const KEY_R6: number;
        const KEY_R7: number;
        const KEY_R8: number;
        const KEY_R9: number;
        const KEY_RFKill: number;
        const KEY_Racute: number;
        const KEY_Rcaron: number;
        const KEY_Rcedilla: number;
        const KEY_Red: number;
        const KEY_Redo: number;
        const KEY_Refresh: number;
        const KEY_Reload: number;
        const KEY_RepeatKeys_Enable: number;
        const KEY_Reply: number;
        const KEY_Return: number;
        const KEY_Right: number;
        const KEY_RockerDown: number;
        const KEY_RockerEnter: number;
        const KEY_RockerUp: number;
        const KEY_Romaji: number;
        const KEY_RotateWindows: number;
        const KEY_RotationKB: number;
        const KEY_RotationPB: number;
        const KEY_RupeeSign: number;
        const KEY_S: number;
        const KEY_SCHWA: number;
        const KEY_Sabovedot: number;
        const KEY_Sacute: number;
        const KEY_Save: number;
        const KEY_Scaron: number;
        const KEY_Scedilla: number;
        const KEY_Scircumflex: number;
        const KEY_ScreenSaver: number;
        const KEY_ScrollClick: number;
        const KEY_ScrollDown: number;
        const KEY_ScrollUp: number;
        const KEY_Scroll_Lock: number;
        const KEY_Search: number;
        const KEY_Select: number;
        const KEY_SelectButton: number;
        const KEY_Send: number;
        const KEY_Serbian_DJE: number;
        const KEY_Serbian_DZE: number;
        const KEY_Serbian_JE: number;
        const KEY_Serbian_LJE: number;
        const KEY_Serbian_NJE: number;
        const KEY_Serbian_TSHE: number;
        const KEY_Serbian_dje: number;
        const KEY_Serbian_dze: number;
        const KEY_Serbian_je: number;
        const KEY_Serbian_lje: number;
        const KEY_Serbian_nje: number;
        const KEY_Serbian_tshe: number;
        const KEY_Shift_L: number;
        const KEY_Shift_Lock: number;
        const KEY_Shift_R: number;
        const KEY_Shop: number;
        const KEY_SingleCandidate: number;
        const KEY_Sinh_a: number;
        const KEY_Sinh_aa: number;
        const KEY_Sinh_aa2: number;
        const KEY_Sinh_ae: number;
        const KEY_Sinh_ae2: number;
        const KEY_Sinh_aee: number;
        const KEY_Sinh_aee2: number;
        const KEY_Sinh_ai: number;
        const KEY_Sinh_ai2: number;
        const KEY_Sinh_al: number;
        const KEY_Sinh_au: number;
        const KEY_Sinh_au2: number;
        const KEY_Sinh_ba: number;
        const KEY_Sinh_bha: number;
        const KEY_Sinh_ca: number;
        const KEY_Sinh_cha: number;
        const KEY_Sinh_dda: number;
        const KEY_Sinh_ddha: number;
        const KEY_Sinh_dha: number;
        const KEY_Sinh_dhha: number;
        const KEY_Sinh_e: number;
        const KEY_Sinh_e2: number;
        const KEY_Sinh_ee: number;
        const KEY_Sinh_ee2: number;
        const KEY_Sinh_fa: number;
        const KEY_Sinh_ga: number;
        const KEY_Sinh_gha: number;
        const KEY_Sinh_h2: number;
        const KEY_Sinh_ha: number;
        const KEY_Sinh_i: number;
        const KEY_Sinh_i2: number;
        const KEY_Sinh_ii: number;
        const KEY_Sinh_ii2: number;
        const KEY_Sinh_ja: number;
        const KEY_Sinh_jha: number;
        const KEY_Sinh_jnya: number;
        const KEY_Sinh_ka: number;
        const KEY_Sinh_kha: number;
        const KEY_Sinh_kunddaliya: number;
        const KEY_Sinh_la: number;
        const KEY_Sinh_lla: number;
        const KEY_Sinh_lu: number;
        const KEY_Sinh_lu2: number;
        const KEY_Sinh_luu: number;
        const KEY_Sinh_luu2: number;
        const KEY_Sinh_ma: number;
        const KEY_Sinh_mba: number;
        const KEY_Sinh_na: number;
        const KEY_Sinh_ndda: number;
        const KEY_Sinh_ndha: number;
        const KEY_Sinh_ng: number;
        const KEY_Sinh_ng2: number;
        const KEY_Sinh_nga: number;
        const KEY_Sinh_nja: number;
        const KEY_Sinh_nna: number;
        const KEY_Sinh_nya: number;
        const KEY_Sinh_o: number;
        const KEY_Sinh_o2: number;
        const KEY_Sinh_oo: number;
        const KEY_Sinh_oo2: number;
        const KEY_Sinh_pa: number;
        const KEY_Sinh_pha: number;
        const KEY_Sinh_ra: number;
        const KEY_Sinh_ri: number;
        const KEY_Sinh_rii: number;
        const KEY_Sinh_ru2: number;
        const KEY_Sinh_ruu2: number;
        const KEY_Sinh_sa: number;
        const KEY_Sinh_sha: number;
        const KEY_Sinh_ssha: number;
        const KEY_Sinh_tha: number;
        const KEY_Sinh_thha: number;
        const KEY_Sinh_tta: number;
        const KEY_Sinh_ttha: number;
        const KEY_Sinh_u: number;
        const KEY_Sinh_u2: number;
        const KEY_Sinh_uu: number;
        const KEY_Sinh_uu2: number;
        const KEY_Sinh_va: number;
        const KEY_Sinh_ya: number;
        const KEY_Sleep: number;
        const KEY_SlowKeys_Enable: number;
        const KEY_Spell: number;
        const KEY_SplitScreen: number;
        const KEY_Standby: number;
        const KEY_Start: number;
        const KEY_StickyKeys_Enable: number;
        const KEY_Stop: number;
        const KEY_Subtitle: number;
        const KEY_Super_L: number;
        const KEY_Super_R: number;
        const KEY_Support: number;
        const KEY_Suspend: number;
        const KEY_Switch_VT_1: number;
        const KEY_Switch_VT_10: number;
        const KEY_Switch_VT_11: number;
        const KEY_Switch_VT_12: number;
        const KEY_Switch_VT_2: number;
        const KEY_Switch_VT_3: number;
        const KEY_Switch_VT_4: number;
        const KEY_Switch_VT_5: number;
        const KEY_Switch_VT_6: number;
        const KEY_Switch_VT_7: number;
        const KEY_Switch_VT_8: number;
        const KEY_Switch_VT_9: number;
        const KEY_Sys_Req: number;
        const KEY_T: number;
        const KEY_THORN: number;
        const KEY_Tab: number;
        const KEY_Tabovedot: number;
        const KEY_TaskPane: number;
        const KEY_Tcaron: number;
        const KEY_Tcedilla: number;
        const KEY_Terminal: number;
        const KEY_Terminate_Server: number;
        const KEY_Thai_baht: number;
        const KEY_Thai_bobaimai: number;
        const KEY_Thai_chochan: number;
        const KEY_Thai_chochang: number;
        const KEY_Thai_choching: number;
        const KEY_Thai_chochoe: number;
        const KEY_Thai_dochada: number;
        const KEY_Thai_dodek: number;
        const KEY_Thai_fofa: number;
        const KEY_Thai_fofan: number;
        const KEY_Thai_hohip: number;
        const KEY_Thai_honokhuk: number;
        const KEY_Thai_khokhai: number;
        const KEY_Thai_khokhon: number;
        const KEY_Thai_khokhuat: number;
        const KEY_Thai_khokhwai: number;
        const KEY_Thai_khorakhang: number;
        const KEY_Thai_kokai: number;
        const KEY_Thai_lakkhangyao: number;
        const KEY_Thai_lekchet: number;
        const KEY_Thai_lekha: number;
        const KEY_Thai_lekhok: number;
        const KEY_Thai_lekkao: number;
        const KEY_Thai_leknung: number;
        const KEY_Thai_lekpaet: number;
        const KEY_Thai_leksam: number;
        const KEY_Thai_leksi: number;
        const KEY_Thai_leksong: number;
        const KEY_Thai_leksun: number;
        const KEY_Thai_lochula: number;
        const KEY_Thai_loling: number;
        const KEY_Thai_lu: number;
        const KEY_Thai_maichattawa: number;
        const KEY_Thai_maiek: number;
        const KEY_Thai_maihanakat: number;
        const KEY_Thai_maihanakat_maitho: number;
        const KEY_Thai_maitaikhu: number;
        const KEY_Thai_maitho: number;
        const KEY_Thai_maitri: number;
        const KEY_Thai_maiyamok: number;
        const KEY_Thai_moma: number;
        const KEY_Thai_ngongu: number;
        const KEY_Thai_nikhahit: number;
        const KEY_Thai_nonen: number;
        const KEY_Thai_nonu: number;
        const KEY_Thai_oang: number;
        const KEY_Thai_paiyannoi: number;
        const KEY_Thai_phinthu: number;
        const KEY_Thai_phophan: number;
        const KEY_Thai_phophung: number;
        const KEY_Thai_phosamphao: number;
        const KEY_Thai_popla: number;
        const KEY_Thai_rorua: number;
        const KEY_Thai_ru: number;
        const KEY_Thai_saraa: number;
        const KEY_Thai_saraaa: number;
        const KEY_Thai_saraae: number;
        const KEY_Thai_saraaimaimalai: number;
        const KEY_Thai_saraaimaimuan: number;
        const KEY_Thai_saraam: number;
        const KEY_Thai_sarae: number;
        const KEY_Thai_sarai: number;
        const KEY_Thai_saraii: number;
        const KEY_Thai_sarao: number;
        const KEY_Thai_sarau: number;
        const KEY_Thai_saraue: number;
        const KEY_Thai_sarauee: number;
        const KEY_Thai_sarauu: number;
        const KEY_Thai_sorusi: number;
        const KEY_Thai_sosala: number;
        const KEY_Thai_soso: number;
        const KEY_Thai_sosua: number;
        const KEY_Thai_thanthakhat: number;
        const KEY_Thai_thonangmontho: number;
        const KEY_Thai_thophuthao: number;
        const KEY_Thai_thothahan: number;
        const KEY_Thai_thothan: number;
        const KEY_Thai_thothong: number;
        const KEY_Thai_thothung: number;
        const KEY_Thai_topatak: number;
        const KEY_Thai_totao: number;
        const KEY_Thai_wowaen: number;
        const KEY_Thai_yoyak: number;
        const KEY_Thai_yoying: number;
        const KEY_Thorn: number;
        const KEY_Time: number;
        const KEY_ToDoList: number;
        const KEY_Tools: number;
        const KEY_TopMenu: number;
        const KEY_TouchpadOff: number;
        const KEY_TouchpadOn: number;
        const KEY_TouchpadToggle: number;
        const KEY_Touroku: number;
        const KEY_Travel: number;
        const KEY_Tslash: number;
        const KEY_U: number;
        const KEY_UWB: number;
        const KEY_Uacute: number;
        const KEY_Ubelowdot: number;
        const KEY_Ubreve: number;
        const KEY_Ucircumflex: number;
        const KEY_Udiaeresis: number;
        const KEY_Udoubleacute: number;
        const KEY_Ugrave: number;
        const KEY_Uhook: number;
        const KEY_Uhorn: number;
        const KEY_Uhornacute: number;
        const KEY_Uhornbelowdot: number;
        const KEY_Uhorngrave: number;
        const KEY_Uhornhook: number;
        const KEY_Uhorntilde: number;
        const KEY_Ukrainian_GHE_WITH_UPTURN: number;
        const KEY_Ukrainian_I: number;
        const KEY_Ukrainian_IE: number;
        const KEY_Ukrainian_YI: number;
        const KEY_Ukrainian_ghe_with_upturn: number;
        const KEY_Ukrainian_i: number;
        const KEY_Ukrainian_ie: number;
        const KEY_Ukrainian_yi: number;
        const KEY_Ukranian_I: number;
        const KEY_Ukranian_JE: number;
        const KEY_Ukranian_YI: number;
        const KEY_Ukranian_i: number;
        const KEY_Ukranian_je: number;
        const KEY_Ukranian_yi: number;
        const KEY_Umacron: number;
        const KEY_Undo: number;
        const KEY_Ungrab: number;
        const KEY_Uogonek: number;
        const KEY_Up: number;
        const KEY_Uring: number;
        const KEY_User1KB: number;
        const KEY_User2KB: number;
        const KEY_UserPB: number;
        const KEY_Utilde: number;
        const KEY_V: number;
        const KEY_VendorHome: number;
        const KEY_Video: number;
        const KEY_View: number;
        const KEY_VoidSymbol: number;
        const KEY_W: number;
        const KEY_WLAN: number;
        const KEY_WWAN: number;
        const KEY_WWW: number;
        const KEY_Wacute: number;
        const KEY_WakeUp: number;
        const KEY_Wcircumflex: number;
        const KEY_Wdiaeresis: number;
        const KEY_WebCam: number;
        const KEY_Wgrave: number;
        const KEY_WheelButton: number;
        const KEY_WindowClear: number;
        const KEY_WonSign: number;
        const KEY_Word: number;
        const KEY_X: number;
        const KEY_Xabovedot: number;
        const KEY_Xfer: number;
        const KEY_Y: number;
        const KEY_Yacute: number;
        const KEY_Ybelowdot: number;
        const KEY_Ycircumflex: number;
        const KEY_Ydiaeresis: number;
        const KEY_Yellow: number;
        const KEY_Ygrave: number;
        const KEY_Yhook: number;
        const KEY_Ytilde: number;
        const KEY_Z: number;
        const KEY_Zabovedot: number;
        const KEY_Zacute: number;
        const KEY_Zcaron: number;
        const KEY_Zen_Koho: number;
        const KEY_Zenkaku: number;
        const KEY_Zenkaku_Hankaku: number;
        const KEY_ZoomIn: number;
        const KEY_ZoomOut: number;
        const KEY_Zstroke: number;
        const KEY_a: number;
        const KEY_aacute: number;
        const KEY_abelowdot: number;
        const KEY_abovedot: number;
        const KEY_abreve: number;
        const KEY_abreveacute: number;
        const KEY_abrevebelowdot: number;
        const KEY_abrevegrave: number;
        const KEY_abrevehook: number;
        const KEY_abrevetilde: number;
        const KEY_acircumflex: number;
        const KEY_acircumflexacute: number;
        const KEY_acircumflexbelowdot: number;
        const KEY_acircumflexgrave: number;
        const KEY_acircumflexhook: number;
        const KEY_acircumflextilde: number;
        const KEY_acute: number;
        const KEY_adiaeresis: number;
        const KEY_ae: number;
        const KEY_agrave: number;
        const KEY_ahook: number;
        const KEY_amacron: number;
        const KEY_ampersand: number;
        const KEY_aogonek: number;
        const KEY_apostrophe: number;
        const KEY_approxeq: number;
        const KEY_approximate: number;
        const KEY_aring: number;
        const KEY_asciicircum: number;
        const KEY_asciitilde: number;
        const KEY_asterisk: number;
        const KEY_at: number;
        const KEY_atilde: number;
        const KEY_b: number;
        const KEY_babovedot: number;
        const KEY_backslash: number;
        const KEY_ballotcross: number;
        const KEY_bar: number;
        const KEY_because: number;
        const KEY_blank: number;
        const KEY_botintegral: number;
        const KEY_botleftparens: number;
        const KEY_botleftsqbracket: number;
        const KEY_botleftsummation: number;
        const KEY_botrightparens: number;
        const KEY_botrightsqbracket: number;
        const KEY_botrightsummation: number;
        const KEY_bott: number;
        const KEY_botvertsummationconnector: number;
        const KEY_braceleft: number;
        const KEY_braceright: number;
        const KEY_bracketleft: number;
        const KEY_bracketright: number;
        const KEY_braille_blank: number;
        const KEY_braille_dot_1: number;
        const KEY_braille_dot_10: number;
        const KEY_braille_dot_2: number;
        const KEY_braille_dot_3: number;
        const KEY_braille_dot_4: number;
        const KEY_braille_dot_5: number;
        const KEY_braille_dot_6: number;
        const KEY_braille_dot_7: number;
        const KEY_braille_dot_8: number;
        const KEY_braille_dot_9: number;
        const KEY_braille_dots_1: number;
        const KEY_braille_dots_12: number;
        const KEY_braille_dots_123: number;
        const KEY_braille_dots_1234: number;
        const KEY_braille_dots_12345: number;
        const KEY_braille_dots_123456: number;
        const KEY_braille_dots_1234567: number;
        const KEY_braille_dots_12345678: number;
        const KEY_braille_dots_1234568: number;
        const KEY_braille_dots_123457: number;
        const KEY_braille_dots_1234578: number;
        const KEY_braille_dots_123458: number;
        const KEY_braille_dots_12346: number;
        const KEY_braille_dots_123467: number;
        const KEY_braille_dots_1234678: number;
        const KEY_braille_dots_123468: number;
        const KEY_braille_dots_12347: number;
        const KEY_braille_dots_123478: number;
        const KEY_braille_dots_12348: number;
        const KEY_braille_dots_1235: number;
        const KEY_braille_dots_12356: number;
        const KEY_braille_dots_123567: number;
        const KEY_braille_dots_1235678: number;
        const KEY_braille_dots_123568: number;
        const KEY_braille_dots_12357: number;
        const KEY_braille_dots_123578: number;
        const KEY_braille_dots_12358: number;
        const KEY_braille_dots_1236: number;
        const KEY_braille_dots_12367: number;
        const KEY_braille_dots_123678: number;
        const KEY_braille_dots_12368: number;
        const KEY_braille_dots_1237: number;
        const KEY_braille_dots_12378: number;
        const KEY_braille_dots_1238: number;
        const KEY_braille_dots_124: number;
        const KEY_braille_dots_1245: number;
        const KEY_braille_dots_12456: number;
        const KEY_braille_dots_124567: number;
        const KEY_braille_dots_1245678: number;
        const KEY_braille_dots_124568: number;
        const KEY_braille_dots_12457: number;
        const KEY_braille_dots_124578: number;
        const KEY_braille_dots_12458: number;
        const KEY_braille_dots_1246: number;
        const KEY_braille_dots_12467: number;
        const KEY_braille_dots_124678: number;
        const KEY_braille_dots_12468: number;
        const KEY_braille_dots_1247: number;
        const KEY_braille_dots_12478: number;
        const KEY_braille_dots_1248: number;
        const KEY_braille_dots_125: number;
        const KEY_braille_dots_1256: number;
        const KEY_braille_dots_12567: number;
        const KEY_braille_dots_125678: number;
        const KEY_braille_dots_12568: number;
        const KEY_braille_dots_1257: number;
        const KEY_braille_dots_12578: number;
        const KEY_braille_dots_1258: number;
        const KEY_braille_dots_126: number;
        const KEY_braille_dots_1267: number;
        const KEY_braille_dots_12678: number;
        const KEY_braille_dots_1268: number;
        const KEY_braille_dots_127: number;
        const KEY_braille_dots_1278: number;
        const KEY_braille_dots_128: number;
        const KEY_braille_dots_13: number;
        const KEY_braille_dots_134: number;
        const KEY_braille_dots_1345: number;
        const KEY_braille_dots_13456: number;
        const KEY_braille_dots_134567: number;
        const KEY_braille_dots_1345678: number;
        const KEY_braille_dots_134568: number;
        const KEY_braille_dots_13457: number;
        const KEY_braille_dots_134578: number;
        const KEY_braille_dots_13458: number;
        const KEY_braille_dots_1346: number;
        const KEY_braille_dots_13467: number;
        const KEY_braille_dots_134678: number;
        const KEY_braille_dots_13468: number;
        const KEY_braille_dots_1347: number;
        const KEY_braille_dots_13478: number;
        const KEY_braille_dots_1348: number;
        const KEY_braille_dots_135: number;
        const KEY_braille_dots_1356: number;
        const KEY_braille_dots_13567: number;
        const KEY_braille_dots_135678: number;
        const KEY_braille_dots_13568: number;
        const KEY_braille_dots_1357: number;
        const KEY_braille_dots_13578: number;
        const KEY_braille_dots_1358: number;
        const KEY_braille_dots_136: number;
        const KEY_braille_dots_1367: number;
        const KEY_braille_dots_13678: number;
        const KEY_braille_dots_1368: number;
        const KEY_braille_dots_137: number;
        const KEY_braille_dots_1378: number;
        const KEY_braille_dots_138: number;
        const KEY_braille_dots_14: number;
        const KEY_braille_dots_145: number;
        const KEY_braille_dots_1456: number;
        const KEY_braille_dots_14567: number;
        const KEY_braille_dots_145678: number;
        const KEY_braille_dots_14568: number;
        const KEY_braille_dots_1457: number;
        const KEY_braille_dots_14578: number;
        const KEY_braille_dots_1458: number;
        const KEY_braille_dots_146: number;
        const KEY_braille_dots_1467: number;
        const KEY_braille_dots_14678: number;
        const KEY_braille_dots_1468: number;
        const KEY_braille_dots_147: number;
        const KEY_braille_dots_1478: number;
        const KEY_braille_dots_148: number;
        const KEY_braille_dots_15: number;
        const KEY_braille_dots_156: number;
        const KEY_braille_dots_1567: number;
        const KEY_braille_dots_15678: number;
        const KEY_braille_dots_1568: number;
        const KEY_braille_dots_157: number;
        const KEY_braille_dots_1578: number;
        const KEY_braille_dots_158: number;
        const KEY_braille_dots_16: number;
        const KEY_braille_dots_167: number;
        const KEY_braille_dots_1678: number;
        const KEY_braille_dots_168: number;
        const KEY_braille_dots_17: number;
        const KEY_braille_dots_178: number;
        const KEY_braille_dots_18: number;
        const KEY_braille_dots_2: number;
        const KEY_braille_dots_23: number;
        const KEY_braille_dots_234: number;
        const KEY_braille_dots_2345: number;
        const KEY_braille_dots_23456: number;
        const KEY_braille_dots_234567: number;
        const KEY_braille_dots_2345678: number;
        const KEY_braille_dots_234568: number;
        const KEY_braille_dots_23457: number;
        const KEY_braille_dots_234578: number;
        const KEY_braille_dots_23458: number;
        const KEY_braille_dots_2346: number;
        const KEY_braille_dots_23467: number;
        const KEY_braille_dots_234678: number;
        const KEY_braille_dots_23468: number;
        const KEY_braille_dots_2347: number;
        const KEY_braille_dots_23478: number;
        const KEY_braille_dots_2348: number;
        const KEY_braille_dots_235: number;
        const KEY_braille_dots_2356: number;
        const KEY_braille_dots_23567: number;
        const KEY_braille_dots_235678: number;
        const KEY_braille_dots_23568: number;
        const KEY_braille_dots_2357: number;
        const KEY_braille_dots_23578: number;
        const KEY_braille_dots_2358: number;
        const KEY_braille_dots_236: number;
        const KEY_braille_dots_2367: number;
        const KEY_braille_dots_23678: number;
        const KEY_braille_dots_2368: number;
        const KEY_braille_dots_237: number;
        const KEY_braille_dots_2378: number;
        const KEY_braille_dots_238: number;
        const KEY_braille_dots_24: number;
        const KEY_braille_dots_245: number;
        const KEY_braille_dots_2456: number;
        const KEY_braille_dots_24567: number;
        const KEY_braille_dots_245678: number;
        const KEY_braille_dots_24568: number;
        const KEY_braille_dots_2457: number;
        const KEY_braille_dots_24578: number;
        const KEY_braille_dots_2458: number;
        const KEY_braille_dots_246: number;
        const KEY_braille_dots_2467: number;
        const KEY_braille_dots_24678: number;
        const KEY_braille_dots_2468: number;
        const KEY_braille_dots_247: number;
        const KEY_braille_dots_2478: number;
        const KEY_braille_dots_248: number;
        const KEY_braille_dots_25: number;
        const KEY_braille_dots_256: number;
        const KEY_braille_dots_2567: number;
        const KEY_braille_dots_25678: number;
        const KEY_braille_dots_2568: number;
        const KEY_braille_dots_257: number;
        const KEY_braille_dots_2578: number;
        const KEY_braille_dots_258: number;
        const KEY_braille_dots_26: number;
        const KEY_braille_dots_267: number;
        const KEY_braille_dots_2678: number;
        const KEY_braille_dots_268: number;
        const KEY_braille_dots_27: number;
        const KEY_braille_dots_278: number;
        const KEY_braille_dots_28: number;
        const KEY_braille_dots_3: number;
        const KEY_braille_dots_34: number;
        const KEY_braille_dots_345: number;
        const KEY_braille_dots_3456: number;
        const KEY_braille_dots_34567: number;
        const KEY_braille_dots_345678: number;
        const KEY_braille_dots_34568: number;
        const KEY_braille_dots_3457: number;
        const KEY_braille_dots_34578: number;
        const KEY_braille_dots_3458: number;
        const KEY_braille_dots_346: number;
        const KEY_braille_dots_3467: number;
        const KEY_braille_dots_34678: number;
        const KEY_braille_dots_3468: number;
        const KEY_braille_dots_347: number;
        const KEY_braille_dots_3478: number;
        const KEY_braille_dots_348: number;
        const KEY_braille_dots_35: number;
        const KEY_braille_dots_356: number;
        const KEY_braille_dots_3567: number;
        const KEY_braille_dots_35678: number;
        const KEY_braille_dots_3568: number;
        const KEY_braille_dots_357: number;
        const KEY_braille_dots_3578: number;
        const KEY_braille_dots_358: number;
        const KEY_braille_dots_36: number;
        const KEY_braille_dots_367: number;
        const KEY_braille_dots_3678: number;
        const KEY_braille_dots_368: number;
        const KEY_braille_dots_37: number;
        const KEY_braille_dots_378: number;
        const KEY_braille_dots_38: number;
        const KEY_braille_dots_4: number;
        const KEY_braille_dots_45: number;
        const KEY_braille_dots_456: number;
        const KEY_braille_dots_4567: number;
        const KEY_braille_dots_45678: number;
        const KEY_braille_dots_4568: number;
        const KEY_braille_dots_457: number;
        const KEY_braille_dots_4578: number;
        const KEY_braille_dots_458: number;
        const KEY_braille_dots_46: number;
        const KEY_braille_dots_467: number;
        const KEY_braille_dots_4678: number;
        const KEY_braille_dots_468: number;
        const KEY_braille_dots_47: number;
        const KEY_braille_dots_478: number;
        const KEY_braille_dots_48: number;
        const KEY_braille_dots_5: number;
        const KEY_braille_dots_56: number;
        const KEY_braille_dots_567: number;
        const KEY_braille_dots_5678: number;
        const KEY_braille_dots_568: number;
        const KEY_braille_dots_57: number;
        const KEY_braille_dots_578: number;
        const KEY_braille_dots_58: number;
        const KEY_braille_dots_6: number;
        const KEY_braille_dots_67: number;
        const KEY_braille_dots_678: number;
        const KEY_braille_dots_68: number;
        const KEY_braille_dots_7: number;
        const KEY_braille_dots_78: number;
        const KEY_braille_dots_8: number;
        const KEY_breve: number;
        const KEY_brokenbar: number;
        const KEY_c: number;
        const KEY_c_h: number;
        const KEY_cabovedot: number;
        const KEY_cacute: number;
        const KEY_careof: number;
        const KEY_caret: number;
        const KEY_caron: number;
        const KEY_ccaron: number;
        const KEY_ccedilla: number;
        const KEY_ccircumflex: number;
        const KEY_cedilla: number;
        const KEY_cent: number;
        const KEY_ch: number;
        const KEY_checkerboard: number;
        const KEY_checkmark: number;
        const KEY_circle: number;
        const KEY_club: number;
        const KEY_colon: number;
        const KEY_combining_acute: number;
        const KEY_combining_belowdot: number;
        const KEY_combining_grave: number;
        const KEY_combining_hook: number;
        const KEY_combining_tilde: number;
        const KEY_comma: number;
        const KEY_containsas: number;
        const KEY_copyright: number;
        const KEY_cr: number;
        const KEY_crossinglines: number;
        const KEY_cuberoot: number;
        const KEY_currency: number;
        const KEY_cursor: number;
        const KEY_d: number;
        const KEY_dabovedot: number;
        const KEY_dagger: number;
        const KEY_dcaron: number;
        const KEY_dead_A: number;
        const KEY_dead_E: number;
        const KEY_dead_I: number;
        const KEY_dead_O: number;
        const KEY_dead_SCHWA: number;
        const KEY_dead_U: number;
        const KEY_dead_a: number;
        const KEY_dead_abovecomma: number;
        const KEY_dead_abovedot: number;
        const KEY_dead_abovereversedcomma: number;
        const KEY_dead_abovering: number;
        const KEY_dead_aboveverticalline: number;
        const KEY_dead_acute: number;
        const KEY_dead_belowbreve: number;
        const KEY_dead_belowcircumflex: number;
        const KEY_dead_belowcomma: number;
        const KEY_dead_belowdiaeresis: number;
        const KEY_dead_belowdot: number;
        const KEY_dead_belowmacron: number;
        const KEY_dead_belowring: number;
        const KEY_dead_belowtilde: number;
        const KEY_dead_belowverticalline: number;
        const KEY_dead_breve: number;
        const KEY_dead_capital_schwa: number;
        const KEY_dead_caron: number;
        const KEY_dead_cedilla: number;
        const KEY_dead_circumflex: number;
        const KEY_dead_currency: number;
        const KEY_dead_dasia: number;
        const KEY_dead_diaeresis: number;
        const KEY_dead_doubleacute: number;
        const KEY_dead_doublegrave: number;
        const KEY_dead_e: number;
        const KEY_dead_grave: number;
        const KEY_dead_greek: number;
        const KEY_dead_hamza: number;
        const KEY_dead_hook: number;
        const KEY_dead_horn: number;
        const KEY_dead_i: number;
        const KEY_dead_invertedbreve: number;
        const KEY_dead_iota: number;
        const KEY_dead_longsolidusoverlay: number;
        const KEY_dead_lowline: number;
        const KEY_dead_macron: number;
        const KEY_dead_o: number;
        const KEY_dead_ogonek: number;
        const KEY_dead_perispomeni: number;
        const KEY_dead_psili: number;
        const KEY_dead_schwa: number;
        const KEY_dead_semivoiced_sound: number;
        const KEY_dead_small_schwa: number;
        const KEY_dead_stroke: number;
        const KEY_dead_tilde: number;
        const KEY_dead_u: number;
        const KEY_dead_voiced_sound: number;
        const KEY_decimalpoint: number;
        const KEY_degree: number;
        const KEY_diaeresis: number;
        const KEY_diamond: number;
        const KEY_digitspace: number;
        const KEY_dintegral: number;
        const KEY_division: number;
        const KEY_dollar: number;
        const KEY_doubbaselinedot: number;
        const KEY_doubleacute: number;
        const KEY_doubledagger: number;
        const KEY_doublelowquotemark: number;
        const KEY_downarrow: number;
        const KEY_downcaret: number;
        const KEY_downshoe: number;
        const KEY_downstile: number;
        const KEY_downtack: number;
        const KEY_dstroke: number;
        const KEY_e: number;
        const KEY_eabovedot: number;
        const KEY_eacute: number;
        const KEY_ebelowdot: number;
        const KEY_ecaron: number;
        const KEY_ecircumflex: number;
        const KEY_ecircumflexacute: number;
        const KEY_ecircumflexbelowdot: number;
        const KEY_ecircumflexgrave: number;
        const KEY_ecircumflexhook: number;
        const KEY_ecircumflextilde: number;
        const KEY_ediaeresis: number;
        const KEY_egrave: number;
        const KEY_ehook: number;
        const KEY_eightsubscript: number;
        const KEY_eightsuperior: number;
        const KEY_elementof: number;
        const KEY_ellipsis: number;
        const KEY_em3space: number;
        const KEY_em4space: number;
        const KEY_emacron: number;
        const KEY_emdash: number;
        const KEY_emfilledcircle: number;
        const KEY_emfilledrect: number;
        const KEY_emopencircle: number;
        const KEY_emopenrectangle: number;
        const KEY_emptyset: number;
        const KEY_emspace: number;
        const KEY_endash: number;
        const KEY_enfilledcircbullet: number;
        const KEY_enfilledsqbullet: number;
        const KEY_eng: number;
        const KEY_enopencircbullet: number;
        const KEY_enopensquarebullet: number;
        const KEY_enspace: number;
        const KEY_eogonek: number;
        const KEY_equal: number;
        const KEY_eth: number;
        const KEY_etilde: number;
        const KEY_exclam: number;
        const KEY_exclamdown: number;
        const KEY_ezh: number;
        const KEY_f: number;
        const KEY_fabovedot: number;
        const KEY_femalesymbol: number;
        const KEY_ff: number;
        const KEY_figdash: number;
        const KEY_filledlefttribullet: number;
        const KEY_filledrectbullet: number;
        const KEY_filledrighttribullet: number;
        const KEY_filledtribulletdown: number;
        const KEY_filledtribulletup: number;
        const KEY_fiveeighths: number;
        const KEY_fivesixths: number;
        const KEY_fivesubscript: number;
        const KEY_fivesuperior: number;
        const KEY_fourfifths: number;
        const KEY_foursubscript: number;
        const KEY_foursuperior: number;
        const KEY_fourthroot: number;
        const KEY_function: number;
        const KEY_g: number;
        const KEY_gabovedot: number;
        const KEY_gbreve: number;
        const KEY_gcaron: number;
        const KEY_gcedilla: number;
        const KEY_gcircumflex: number;
        const KEY_grave: number;
        const KEY_greater: number;
        const KEY_greaterthanequal: number;
        const KEY_guillemetleft: number;
        const KEY_guillemetright: number;
        const KEY_guillemotleft: number;
        const KEY_guillemotright: number;
        const KEY_h: number;
        const KEY_hairspace: number;
        const KEY_hcircumflex: number;
        const KEY_heart: number;
        const KEY_hebrew_aleph: number;
        const KEY_hebrew_ayin: number;
        const KEY_hebrew_bet: number;
        const KEY_hebrew_beth: number;
        const KEY_hebrew_chet: number;
        const KEY_hebrew_dalet: number;
        const KEY_hebrew_daleth: number;
        const KEY_hebrew_doublelowline: number;
        const KEY_hebrew_finalkaph: number;
        const KEY_hebrew_finalmem: number;
        const KEY_hebrew_finalnun: number;
        const KEY_hebrew_finalpe: number;
        const KEY_hebrew_finalzade: number;
        const KEY_hebrew_finalzadi: number;
        const KEY_hebrew_gimel: number;
        const KEY_hebrew_gimmel: number;
        const KEY_hebrew_he: number;
        const KEY_hebrew_het: number;
        const KEY_hebrew_kaph: number;
        const KEY_hebrew_kuf: number;
        const KEY_hebrew_lamed: number;
        const KEY_hebrew_mem: number;
        const KEY_hebrew_nun: number;
        const KEY_hebrew_pe: number;
        const KEY_hebrew_qoph: number;
        const KEY_hebrew_resh: number;
        const KEY_hebrew_samech: number;
        const KEY_hebrew_samekh: number;
        const KEY_hebrew_shin: number;
        const KEY_hebrew_taf: number;
        const KEY_hebrew_taw: number;
        const KEY_hebrew_tet: number;
        const KEY_hebrew_teth: number;
        const KEY_hebrew_waw: number;
        const KEY_hebrew_yod: number;
        const KEY_hebrew_zade: number;
        const KEY_hebrew_zadi: number;
        const KEY_hebrew_zain: number;
        const KEY_hebrew_zayin: number;
        const KEY_hexagram: number;
        const KEY_horizconnector: number;
        const KEY_horizlinescan1: number;
        const KEY_horizlinescan3: number;
        const KEY_horizlinescan5: number;
        const KEY_horizlinescan7: number;
        const KEY_horizlinescan9: number;
        const KEY_hstroke: number;
        const KEY_ht: number;
        const KEY_hyphen: number;
        const KEY_i: number;
        const KEY_iTouch: number;
        const KEY_iacute: number;
        const KEY_ibelowdot: number;
        const KEY_ibreve: number;
        const KEY_icircumflex: number;
        const KEY_identical: number;
        const KEY_idiaeresis: number;
        const KEY_idotless: number;
        const KEY_ifonlyif: number;
        const KEY_igrave: number;
        const KEY_ihook: number;
        const KEY_imacron: number;
        const KEY_implies: number;
        const KEY_includedin: number;
        const KEY_includes: number;
        const KEY_infinity: number;
        const KEY_integral: number;
        const KEY_intersection: number;
        const KEY_iogonek: number;
        const KEY_itilde: number;
        const KEY_j: number;
        const KEY_jcircumflex: number;
        const KEY_jot: number;
        const KEY_k: number;
        const KEY_kana_A: number;
        const KEY_kana_CHI: number;
        const KEY_kana_E: number;
        const KEY_kana_FU: number;
        const KEY_kana_HA: number;
        const KEY_kana_HE: number;
        const KEY_kana_HI: number;
        const KEY_kana_HO: number;
        const KEY_kana_HU: number;
        const KEY_kana_I: number;
        const KEY_kana_KA: number;
        const KEY_kana_KE: number;
        const KEY_kana_KI: number;
        const KEY_kana_KO: number;
        const KEY_kana_KU: number;
        const KEY_kana_MA: number;
        const KEY_kana_ME: number;
        const KEY_kana_MI: number;
        const KEY_kana_MO: number;
        const KEY_kana_MU: number;
        const KEY_kana_N: number;
        const KEY_kana_NA: number;
        const KEY_kana_NE: number;
        const KEY_kana_NI: number;
        const KEY_kana_NO: number;
        const KEY_kana_NU: number;
        const KEY_kana_O: number;
        const KEY_kana_RA: number;
        const KEY_kana_RE: number;
        const KEY_kana_RI: number;
        const KEY_kana_RO: number;
        const KEY_kana_RU: number;
        const KEY_kana_SA: number;
        const KEY_kana_SE: number;
        const KEY_kana_SHI: number;
        const KEY_kana_SO: number;
        const KEY_kana_SU: number;
        const KEY_kana_TA: number;
        const KEY_kana_TE: number;
        const KEY_kana_TI: number;
        const KEY_kana_TO: number;
        const KEY_kana_TSU: number;
        const KEY_kana_TU: number;
        const KEY_kana_U: number;
        const KEY_kana_WA: number;
        const KEY_kana_WO: number;
        const KEY_kana_YA: number;
        const KEY_kana_YO: number;
        const KEY_kana_YU: number;
        const KEY_kana_a: number;
        const KEY_kana_closingbracket: number;
        const KEY_kana_comma: number;
        const KEY_kana_conjunctive: number;
        const KEY_kana_e: number;
        const KEY_kana_fullstop: number;
        const KEY_kana_i: number;
        const KEY_kana_middledot: number;
        const KEY_kana_o: number;
        const KEY_kana_openingbracket: number;
        const KEY_kana_switch: number;
        const KEY_kana_tsu: number;
        const KEY_kana_tu: number;
        const KEY_kana_u: number;
        const KEY_kana_ya: number;
        const KEY_kana_yo: number;
        const KEY_kana_yu: number;
        const KEY_kappa: number;
        const KEY_kcedilla: number;
        const KEY_kra: number;
        const KEY_l: number;
        const KEY_lacute: number;
        const KEY_latincross: number;
        const KEY_lbelowdot: number;
        const KEY_lcaron: number;
        const KEY_lcedilla: number;
        const KEY_leftanglebracket: number;
        const KEY_leftarrow: number;
        const KEY_leftcaret: number;
        const KEY_leftdoublequotemark: number;
        const KEY_leftmiddlecurlybrace: number;
        const KEY_leftopentriangle: number;
        const KEY_leftpointer: number;
        const KEY_leftradical: number;
        const KEY_leftshoe: number;
        const KEY_leftsinglequotemark: number;
        const KEY_leftt: number;
        const KEY_lefttack: number;
        const KEY_less: number;
        const KEY_lessthanequal: number;
        const KEY_lf: number;
        const KEY_logicaland: number;
        const KEY_logicalor: number;
        const KEY_lowleftcorner: number;
        const KEY_lowrightcorner: number;
        const KEY_lstroke: number;
        const KEY_m: number;
        const KEY_mabovedot: number;
        const KEY_macron: number;
        const KEY_malesymbol: number;
        const KEY_maltesecross: number;
        const KEY_marker: number;
        const KEY_masculine: number;
        const KEY_minus: number;
        const KEY_minutes: number;
        const KEY_mu: number;
        const KEY_multiply: number;
        const KEY_musicalflat: number;
        const KEY_musicalsharp: number;
        const KEY_n: number;
        const KEY_nabla: number;
        const KEY_nacute: number;
        const KEY_ncaron: number;
        const KEY_ncedilla: number;
        const KEY_ninesubscript: number;
        const KEY_ninesuperior: number;
        const KEY_nl: number;
        const KEY_nobreakspace: number;
        const KEY_notapproxeq: number;
        const KEY_notelementof: number;
        const KEY_notequal: number;
        const KEY_notidentical: number;
        const KEY_notsign: number;
        const KEY_ntilde: number;
        const KEY_numbersign: number;
        const KEY_numerosign: number;
        const KEY_o: number;
        const KEY_oacute: number;
        const KEY_obarred: number;
        const KEY_obelowdot: number;
        const KEY_ocaron: number;
        const KEY_ocircumflex: number;
        const KEY_ocircumflexacute: number;
        const KEY_ocircumflexbelowdot: number;
        const KEY_ocircumflexgrave: number;
        const KEY_ocircumflexhook: number;
        const KEY_ocircumflextilde: number;
        const KEY_odiaeresis: number;
        const KEY_odoubleacute: number;
        const KEY_oe: number;
        const KEY_ogonek: number;
        const KEY_ograve: number;
        const KEY_ohook: number;
        const KEY_ohorn: number;
        const KEY_ohornacute: number;
        const KEY_ohornbelowdot: number;
        const KEY_ohorngrave: number;
        const KEY_ohornhook: number;
        const KEY_ohorntilde: number;
        const KEY_omacron: number;
        const KEY_oneeighth: number;
        const KEY_onefifth: number;
        const KEY_onehalf: number;
        const KEY_onequarter: number;
        const KEY_onesixth: number;
        const KEY_onesubscript: number;
        const KEY_onesuperior: number;
        const KEY_onethird: number;
        const KEY_ooblique: number;
        const KEY_openrectbullet: number;
        const KEY_openstar: number;
        const KEY_opentribulletdown: number;
        const KEY_opentribulletup: number;
        const KEY_ordfeminine: number;
        const KEY_ordmasculine: number;
        const KEY_oslash: number;
        const KEY_otilde: number;
        const KEY_overbar: number;
        const KEY_overline: number;
        const KEY_p: number;
        const KEY_pabovedot: number;
        const KEY_paragraph: number;
        const KEY_parenleft: number;
        const KEY_parenright: number;
        const KEY_partdifferential: number;
        const KEY_partialderivative: number;
        const KEY_percent: number;
        const KEY_period: number;
        const KEY_periodcentered: number;
        const KEY_permille: number;
        const KEY_phonographcopyright: number;
        const KEY_plus: number;
        const KEY_plusminus: number;
        const KEY_prescription: number;
        const KEY_prolongedsound: number;
        const KEY_punctspace: number;
        const KEY_q: number;
        const KEY_quad: number;
        const KEY_question: number;
        const KEY_questiondown: number;
        const KEY_quotedbl: number;
        const KEY_quoteleft: number;
        const KEY_quoteright: number;
        const KEY_r: number;
        const KEY_racute: number;
        const KEY_radical: number;
        const KEY_rcaron: number;
        const KEY_rcedilla: number;
        const KEY_registered: number;
        const KEY_rightanglebracket: number;
        const KEY_rightarrow: number;
        const KEY_rightcaret: number;
        const KEY_rightdoublequotemark: number;
        const KEY_rightmiddlecurlybrace: number;
        const KEY_rightmiddlesummation: number;
        const KEY_rightopentriangle: number;
        const KEY_rightpointer: number;
        const KEY_rightshoe: number;
        const KEY_rightsinglequotemark: number;
        const KEY_rightt: number;
        const KEY_righttack: number;
        const KEY_s: number;
        const KEY_sabovedot: number;
        const KEY_sacute: number;
        const KEY_scaron: number;
        const KEY_scedilla: number;
        const KEY_schwa: number;
        const KEY_scircumflex: number;
        const KEY_script_switch: number;
        const KEY_seconds: number;
        const KEY_section: number;
        const KEY_semicolon: number;
        const KEY_semivoicedsound: number;
        const KEY_seveneighths: number;
        const KEY_sevensubscript: number;
        const KEY_sevensuperior: number;
        const KEY_signaturemark: number;
        const KEY_signifblank: number;
        const KEY_similarequal: number;
        const KEY_singlelowquotemark: number;
        const KEY_sixsubscript: number;
        const KEY_sixsuperior: number;
        const KEY_slash: number;
        const KEY_soliddiamond: number;
        const KEY_space: number;
        const KEY_squareroot: number;
        const KEY_ssharp: number;
        const KEY_sterling: number;
        const KEY_stricteq: number;
        const KEY_t: number;
        const KEY_tabovedot: number;
        const KEY_tcaron: number;
        const KEY_tcedilla: number;
        const KEY_telephone: number;
        const KEY_telephonerecorder: number;
        const KEY_therefore: number;
        const KEY_thinspace: number;
        const KEY_thorn: number;
        const KEY_threeeighths: number;
        const KEY_threefifths: number;
        const KEY_threequarters: number;
        const KEY_threesubscript: number;
        const KEY_threesuperior: number;
        const KEY_tintegral: number;
        const KEY_topintegral: number;
        const KEY_topleftparens: number;
        const KEY_topleftradical: number;
        const KEY_topleftsqbracket: number;
        const KEY_topleftsummation: number;
        const KEY_toprightparens: number;
        const KEY_toprightsqbracket: number;
        const KEY_toprightsummation: number;
        const KEY_topt: number;
        const KEY_topvertsummationconnector: number;
        const KEY_trademark: number;
        const KEY_trademarkincircle: number;
        const KEY_tslash: number;
        const KEY_twofifths: number;
        const KEY_twosubscript: number;
        const KEY_twosuperior: number;
        const KEY_twothirds: number;
        const KEY_u: number;
        const KEY_uacute: number;
        const KEY_ubelowdot: number;
        const KEY_ubreve: number;
        const KEY_ucircumflex: number;
        const KEY_udiaeresis: number;
        const KEY_udoubleacute: number;
        const KEY_ugrave: number;
        const KEY_uhook: number;
        const KEY_uhorn: number;
        const KEY_uhornacute: number;
        const KEY_uhornbelowdot: number;
        const KEY_uhorngrave: number;
        const KEY_uhornhook: number;
        const KEY_uhorntilde: number;
        const KEY_umacron: number;
        const KEY_underbar: number;
        const KEY_underscore: number;
        const KEY_union: number;
        const KEY_uogonek: number;
        const KEY_uparrow: number;
        const KEY_upcaret: number;
        const KEY_upleftcorner: number;
        const KEY_uprightcorner: number;
        const KEY_upshoe: number;
        const KEY_upstile: number;
        const KEY_uptack: number;
        const KEY_uring: number;
        const KEY_utilde: number;
        const KEY_v: number;
        const KEY_variation: number;
        const KEY_vertbar: number;
        const KEY_vertconnector: number;
        const KEY_voicedsound: number;
        const KEY_vt: number;
        const KEY_w: number;
        const KEY_wacute: number;
        const KEY_wcircumflex: number;
        const KEY_wdiaeresis: number;
        const KEY_wgrave: number;
        const KEY_x: number;
        const KEY_xabovedot: number;
        const KEY_y: number;
        const KEY_yacute: number;
        const KEY_ybelowdot: number;
        const KEY_ycircumflex: number;
        const KEY_ydiaeresis: number;
        const KEY_yen: number;
        const KEY_ygrave: number;
        const KEY_yhook: number;
        const KEY_ytilde: number;
        const KEY_z: number;
        const KEY_zabovedot: number;
        const KEY_zacute: number;
        const KEY_zcaron: number;
        const KEY_zerosubscript: number;
        const KEY_zerosuperior: number;
        const KEY_zstroke: number;
        /**
         * A mask covering all entries in `GdkModifierType`.
         */
        const MODIFIER_MASK: number;
        /**
         * This is the priority that the idle handler processing surface updates
         * is given in the main loop.
         */
        const PRIORITY_REDRAW: number;
        /**
         * The main way to not draw GL content in GTK.
         *
         * It takes a render buffer ID (`source_type` == GL_RENDERBUFFER) or a texture
         * id (`source_type` == GL_TEXTURE) and draws it onto `cr` with an OVER operation,
         * respecting the current clip. The top left corner of the rectangle specified
         * by `x,` `y,` `width` and `height` will be drawn at the current (0,0) position of
         * the `cairo_t`.
         *
         * This will work for *all* `cairo_t`, as long as `surface` is realized, but the
         * fallback implementation that reads back the pixels from the buffer may be
         * used in the general case. In the case of direct drawing to a surface with
         * no special effects applied to `cr` it will however use a more efficient
         * approach.
         *
         * For GL_RENDERBUFFER the code will always fall back to software for buffers
         * with alpha components, so make sure you use GL_TEXTURE if using alpha.
         *
         * Calling this may change the current GL context.
         * @param cr a cairo context
         * @param surface The surface we're rendering for (not necessarily into)
         * @param source The GL ID of the source buffer
         * @param source_type The type of the @source
         * @param buffer_scale The scale-factor that the @source buffer is allocated for
         * @param x The source x position in @source to start copying from in GL coordinates
         * @param y The source y position in @source to start copying from in GL coordinates
         * @param width The width of the region to draw
         * @param height The height of the region to draw
         */
        function cairo_draw_from_gl(
            cr: cairo.Context,
            surface: Surface,
            source: number,
            source_type: number,
            buffer_scale: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Adds the given rectangle to the current path of `cr`.
         * @param cr a cairo context
         * @param rectangle a `GdkRectangle`
         */
        function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;
        /**
         * Adds the given region to the current path of `cr`.
         * @param cr a cairo context
         * @param region a `cairo_region_t`
         */
        function cairo_region(cr: cairo.Context, region: cairo.Region): void;
        /**
         * Creates region that covers the area where the given
         * `surface` is more than 50% opaque.
         *
         * This function takes into account device offsets that might be
         * set with cairo_surface_set_device_offset().
         * @param surface a cairo surface
         * @returns A `cairo_region_t`
         */
        function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;
        /**
         * Sets the given pixbuf as the source pattern for `cr`.
         *
         * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
         * so that the origin of `pixbuf` is `pixbuf_x,` `pixbuf_y`.
         * @param cr a cairo context
         * @param pixbuf a `GdkPixbuf`
         * @param pixbuf_x X coordinate of location to place upper left corner of @pixbuf
         * @param pixbuf_y Y coordinate of location to place upper left corner of @pixbuf
         */
        function cairo_set_source_pixbuf(
            cr: cairo.Context,
            pixbuf: GdkPixbuf.Pixbuf,
            pixbuf_x: number,
            pixbuf_y: number,
        ): void;
        /**
         * Sets the specified `GdkRGBA` as the source color of `cr`.
         * @param cr a cairo context
         * @param rgba a `GdkRGBA`
         */
        function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;
        /**
         * Returns the color state object representing the oklab color space.
         *
         * This is a perceptually uniform color state.
         * @returns the color state object for oklab
         */
        function color_state_get_oklab(): ColorState;
        /**
         * Returns the color state object representing the oklch color space.
         *
         * This is the polar variant of oklab, in which the hue is encoded as
         * a polar coordinate.
         * @returns the color state object for oklch
         */
        function color_state_get_oklch(): ColorState;
        /**
         * Returns the color state object representing the linear rec2100 color space.
         *
         * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and a linear
         * transfer function.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/8/0/1.
         *
         * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-linear)
         * for details about this colorstate.
         * @returns the color state object for linearized rec2100
         */
        function color_state_get_rec2100_linear(): ColorState;
        /**
         * Returns the color state object representing the rec2100-pq color space.
         *
         * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and the transfer
         * function defined by SMPTE ST 2084 and BT.2100-2.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/16/0/1.
         *
         * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-pq)
         * for details about this colorstate.
         * @returns the color state object for rec2100-pq
         */
        function color_state_get_rec2100_pq(): ColorState;
        /**
         * Returns the color state object representing the sRGB color space.
         *
         * This color state uses the primaries defined by BT.709-6 and the transfer function
         * defined by IEC 61966-2-1.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/13/0/1.
         *
         * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB)
         * for details about this colorstate.
         * @returns the color state object for sRGB
         */
        function color_state_get_srgb(): ColorState;
        /**
         * Returns the color state object representing the linearized sRGB color space.
         *
         * This color state uses the primaries defined by BT.709-6 and a linear transfer function.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/8/0/1.
         *
         * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB-linear)
         * for details about this colorstate.
         * @returns the color state object for linearized sRGB
         */
        function color_state_get_srgb_linear(): ColorState;
        /**
         * Read content from the given input stream and deserialize it, asynchronously.
         *
         * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
         * indicate a higher priority.
         * @param stream a `GInputStream` to read the serialized content from
         * @param mime_type the mime type to deserialize from
         * @param type the GType to deserialize from
         * @param io_priority the I/O priority of the operation
         * @param cancellable optional `GCancellable` object
         */
        function content_deserialize_async(
            stream: Gio.InputStream,
            mime_type: string,
            type: GObject.GType,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): Promise<[GObject.Value]>;
        /**
         * Read content from the given input stream and deserialize it, asynchronously.
         *
         * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
         * indicate a higher priority.
         * @param stream a `GInputStream` to read the serialized content from
         * @param mime_type the mime type to deserialize from
         * @param type the GType to deserialize from
         * @param io_priority the I/O priority of the operation
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the operation is done
         */
        function content_deserialize_async(
            stream: Gio.InputStream,
            mime_type: string,
            type: GObject.GType,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Gio.InputStream> | null,
        ): void;
        /**
         * Read content from the given input stream and deserialize it, asynchronously.
         *
         * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
         * indicate a higher priority.
         * @param stream a `GInputStream` to read the serialized content from
         * @param mime_type the mime type to deserialize from
         * @param type the GType to deserialize from
         * @param io_priority the I/O priority of the operation
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the operation is done
         */
        function content_deserialize_async(
            stream: Gio.InputStream,
            mime_type: string,
            type: GObject.GType,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gio.InputStream> | null,
        ): Promise<[GObject.Value]> | void;
        /**
         * Finishes a content deserialization operation.
         * @param result the `GAsyncResult`
         * @returns %TRUE if the operation was successful. In this case,   @value is set. %FALSE if an error occurred. In this case,   @error is set
         */
        function content_deserialize_finish(result: Gio.AsyncResult): [boolean, unknown];
        /**
         * Parses the given `string` into `GdkContentFormats` and
         * returns the formats.
         *
         * Strings printed via [method`Gdk`.ContentFormats.to_string]
         * can be read in again successfully using this function.
         *
         * If `string` does not describe valid content formats, %NULL
         * is returned.
         * @param string the string to parse
         * @returns the content formats if @string is valid
         */
        function content_formats_parse(string: string): ContentFormats | null;
        /**
         * Registers a function to deserialize object of a given type.
         * @param mime_type the mime type which the function can deserialize from
         * @param type the type of objects that the function creates
         * @param deserialize the callback
         */
        function content_register_deserializer(
            mime_type: string,
            type: GObject.GType,
            deserialize: ContentDeserializeFunc,
        ): void;
        /**
         * Registers a function to serialize objects of a given type.
         * @param type the type of objects that the function can serialize
         * @param mime_type the mime type to serialize to
         * @param serialize the callback
         */
        function content_register_serializer(
            type: GObject.GType,
            mime_type: string,
            serialize: ContentSerializeFunc,
        ): void;
        /**
         * Serialize content and write it to the given output stream, asynchronously.
         *
         * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
         * indicate a higher priority.
         * @param stream a `GOutputStream` to write the serialized content to
         * @param mime_type the mime type to serialize to
         * @param value the content to serialize
         * @param io_priority the I/O priority of the operation
         * @param cancellable optional `GCancellable` object
         */
        function content_serialize_async(
            stream: Gio.OutputStream,
            mime_type: string,
            value: GObject.Value | any,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Serialize content and write it to the given output stream, asynchronously.
         *
         * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
         * indicate a higher priority.
         * @param stream a `GOutputStream` to write the serialized content to
         * @param mime_type the mime type to serialize to
         * @param value the content to serialize
         * @param io_priority the I/O priority of the operation
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the operation is done
         */
        function content_serialize_async(
            stream: Gio.OutputStream,
            mime_type: string,
            value: GObject.Value | any,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Gio.OutputStream> | null,
        ): void;
        /**
         * Serialize content and write it to the given output stream, asynchronously.
         *
         * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
         * indicate a higher priority.
         * @param stream a `GOutputStream` to write the serialized content to
         * @param mime_type the mime type to serialize to
         * @param value the content to serialize
         * @param io_priority the I/O priority of the operation
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the operation is done
         */
        function content_serialize_async(
            stream: Gio.OutputStream,
            mime_type: string,
            value: GObject.Value | any,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gio.OutputStream> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes a content serialization operation.
         * @param result the `GAsyncResult`
         * @returns %TRUE if the operation was successful, %FALSE if an   error occurred. In this case, @error is set
         */
        function content_serialize_finish(result: Gio.AsyncResult): boolean;
        /**
         * Registers an error quark for [class`Gdk`.DmabufTexture] errors.
         * @returns the error quark
         */
        function dmabuf_error_quark(): GLib.Quark;
        /**
         * Checks if `action` represents a single action or includes
         * multiple actions.
         *
         * When `action` is 0 - ie no action was given, %TRUE
         * is returned.
         * @param action a `GdkDragAction`
         * @returns %TRUE if exactly one action was given
         */
        function drag_action_is_unique(action: DragAction): boolean;
        /**
         * Returns the relative angle from `event1` to `event2`.
         *
         * The relative angle is the angle between the X axis and the line
         * through both events' positions. The rotation direction for positive
         * angles is from the positive X axis towards the positive Y axis.
         *
         * This assumes that both events have X/Y information.
         * If not, this function returns %FALSE.
         * @param event1 first `GdkEvent`
         * @param event2 second `GdkEvent`
         * @returns %TRUE if the angle could be calculated.
         */
        function events_get_angle(event1: Event, event2: Event): [boolean, number];
        /**
         * Returns the point halfway between the events' positions.
         *
         * This assumes that both events have X/Y information.
         * If not, this function returns %FALSE.
         * @param event1 first `GdkEvent`
         * @param event2 second `GdkEvent`
         * @returns %TRUE if the center could be calculated.
         */
        function events_get_center(event1: Event, event2: Event): [boolean, number, number];
        /**
         * Returns the distance between the event locations.
         *
         * This assumes that both events have X/Y information.
         * If not, this function returns %FALSE.
         * @param event1 first `GdkEvent`
         * @param event2 second `GdkEvent`
         * @returns %TRUE if the distance could be calculated.
         */
        function events_get_distance(event1: Event, event2: Event): [boolean, number];
        /**
         * Registers an error quark for [class`Gdk`.GLContext] errors.
         * @returns the error quark
         */
        function gl_error_quark(): GLib.Quark;
        /**
         * Canonicalizes the given mime type and interns the result.
         *
         * If `string` is not a valid mime type, %NULL is returned instead.
         * See RFC 2048 for the syntax if mime types.
         * @param string string of a potential mime type
         * @returns An interned string for the canonicalized   mime type or %NULL if the string wasn't a valid mime type
         */
        function intern_mime_type(string: string): string | null;
        /**
         * Obtains the upper- and lower-case versions of the keyval `symbol`.
         *
         * Examples of keyvals are `GDK_KEY_a`, `GDK_KEY_Enter`, `GDK_KEY_F1`, etc.
         * @param symbol a keyval
         */
        function keyval_convert_case(symbol: number): [number, number];
        /**
         * Converts a key name to a key value.
         *
         * The names are the same as those in the
         * `gdk/gdkkeysyms.h` header file
         * but without the leading “GDK_KEY_”.
         * @param keyval_name a key name
         * @returns the corresponding key value, or %GDK_KEY_VoidSymbol   if the key name is not a valid key
         */
        function keyval_from_name(keyval_name: string): number;
        /**
         * Returns %TRUE if the given key value is in lower case.
         * @param keyval a key value.
         * @returns %TRUE if @keyval is in lower case, or if @keyval is not   subject to case conversion.
         */
        function keyval_is_lower(keyval: number): boolean;
        /**
         * Returns %TRUE if the given key value is in upper case.
         * @param keyval a key value.
         * @returns %TRUE if @keyval is in upper case, or if @keyval is not subject to  case conversion.
         */
        function keyval_is_upper(keyval: number): boolean;
        /**
         * Converts a key value into a symbolic name.
         *
         * The names are the same as those in the
         * `gdk/gdkkeysyms.h` header file
         * but without the leading “GDK_KEY_”.
         * @param keyval a key value
         * @returns a string containing the name   of the key
         */
        function keyval_name(keyval: number): string | null;
        /**
         * Converts a key value to lower case, if applicable.
         * @param keyval a key value.
         * @returns the lower case form of @keyval, or @keyval itself if it is already  in lower case or it is not subject to case conversion.
         */
        function keyval_to_lower(keyval: number): number;
        /**
         * Convert from a GDK key symbol to the corresponding Unicode
         * character.
         *
         * Note that the conversion does not take the current locale
         * into consideration, which might be expected for particular
         * keyvals, such as %GDK_KEY_KP_Decimal.
         * @param keyval a GDK key symbol
         * @returns the corresponding unicode character, or 0 if there   is no corresponding character.
         */
        function keyval_to_unicode(keyval: number): number;
        /**
         * Converts a key value to upper case, if applicable.
         * @param keyval a key value.
         * @returns the upper case form of @keyval, or @keyval itself if it is already   in upper case or it is not subject to case conversion.
         */
        function keyval_to_upper(keyval: number): number;
        /**
         * Returns a paintable that has the given intrinsic size and draws nothing.
         *
         * This is often useful for implementing the
         * [vfunc`Gdk`.Paintable.get_current_image] virtual function
         * when the paintable is in an incomplete state (like a
         * [GtkMediaStream](../gtk4/class.MediaStream.html) before receiving
         * the first frame).
         * @param intrinsic_width The intrinsic width to report. Can be 0 for no width.
         * @param intrinsic_height The intrinsic height to report. Can be 0 for no height.
         * @returns a `GdkPaintable`
         */
        function paintable_new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;
        /**
         * Transfers image data from a `cairo_surface_t` and converts it
         * to a `GdkPixbuf`.
         *
         * This allows you to efficiently read individual pixels from cairo surfaces.
         *
         * This function will create an RGB pixbuf with 8 bits per channel.
         * The pixbuf will contain an alpha channel if the `surface` contains one.
         * @param surface surface to copy from
         * @param src_x Source X coordinate within @surface
         * @param src_y Source Y coordinate within @surface
         * @param width Width in pixels of region to get
         * @param height Height in pixels of region to get
         * @returns A newly-created pixbuf with a   reference count of 1
         */
        function pixbuf_get_from_surface(
            surface: cairo.Surface,
            src_x: number,
            src_y: number,
            width: number,
            height: number,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Creates a new pixbuf from `texture`.
         *
         * This should generally not be used in newly written code as later
         * stages will almost certainly convert the pixbuf back into a texture
         * to draw it on screen.
         * @param texture a `GdkTexture`
         * @returns a new `GdkPixbuf`
         */
        function pixbuf_get_from_texture(texture: Texture): GdkPixbuf.Pixbuf | null;
        /**
         * Sets a list of backends that GDK should try to use.
         *
         * This can be useful if your application does not
         * work with certain GDK backends.
         *
         * By default, GDK tries all included backends.
         *
         * For example:
         *
         * ```c
         * gdk_set_allowed_backends ("wayland,macos,*");
         * ```
         *
         * instructs GDK to try the Wayland backend first, followed by the
         * MacOs backend, and then all others.
         *
         * If the `GDK_BACKEND` environment variable is set, it determines
         * what backends are tried in what order, while still respecting the
         * set of allowed backends that are specified by this function.
         *
         * The possible backend names are:
         *
         *   - `broadway`
         *   - `macos`
         *   - `wayland`.
         *   - `win32`
         *   - `x11`
         *
         * You can also include a `*` in the list to try all remaining backends.
         *
         * This call must happen prior to functions that open a display, such
         * as [func`Gdk`.Display.open], `gtk_init()`, or `gtk_init_check()`
         * in order to take effect.
         * @param backends a comma-separated list of backends
         */
        function set_allowed_backends(backends: string): void;
        /**
         * Registers an error quark for [class`Gdk`.Texture] errors.
         * @returns the error quark
         */
        function texture_error_quark(): GLib.Quark;
        /**
         * Convert from a Unicode character to a key symbol.
         * @param wc a Unicode character
         * @returns the corresponding GDK key symbol, if one exists.   or, if there is no corresponding symbol, wc | 0x01000000
         */
        function unicode_to_keyval(wc: number): number;
        /**
         * Registers an error quark for [class`Gdk`.VulkanContext] errors.
         * @returns the error quark
         */
        function vulkan_error_quark(): GLib.Quark;
        interface ContentDeserializeFunc {
            (deserializer: ContentDeserializer): void;
        }
        interface ContentSerializeFunc {
            (serializer: ContentSerializer): void;
        }
        interface CursorGetTextureCallback {
            (cursor: Cursor, cursor_size: number, scale: number, data?: any | null): Texture | null;
        }
        /**
         * Positioning hints for aligning a surface relative to a rectangle.
         *
         * These hints determine how the surface should be positioned in the case that
         * the surface would fall off-screen if placed in its ideal position.
         *
         * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
         * %GDK_GRAVITY_NORTH_EAST and vice versa if the surface extends beyond the left
         * or right edges of the monitor.
         *
         * If %GDK_ANCHOR_SLIDE_X is set, the surface can be shifted horizontally to fit
         * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the surface can be shrunken
         * horizontally to fit.
         *
         * In general, when multiple flags are set, flipping should take precedence over
         * sliding, which should take precedence over resizing.
         */

        /**
         * Positioning hints for aligning a surface relative to a rectangle.
         *
         * These hints determine how the surface should be positioned in the case that
         * the surface would fall off-screen if placed in its ideal position.
         *
         * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
         * %GDK_GRAVITY_NORTH_EAST and vice versa if the surface extends beyond the left
         * or right edges of the monitor.
         *
         * If %GDK_ANCHOR_SLIDE_X is set, the surface can be shifted horizontally to fit
         * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the surface can be shrunken
         * horizontally to fit.
         *
         * In general, when multiple flags are set, flipping should take precedence over
         * sliding, which should take precedence over resizing.
         */
        export namespace AnchorHints {
            export const $gtype: GObject.GType<AnchorHints>;
        }

        enum AnchorHints {
            /**
             * allow flipping anchors horizontally
             */
            FLIP_X,
            /**
             * allow flipping anchors vertically
             */
            FLIP_Y,
            /**
             * allow sliding surface horizontally
             */
            SLIDE_X,
            /**
             * allow sliding surface vertically
             */
            SLIDE_Y,
            /**
             * allow resizing surface horizontally
             */
            RESIZE_X,
            /**
             * allow resizing surface vertically
             */
            RESIZE_Y,
            /**
             * allow flipping anchors on both axes
             */
            FLIP,
            /**
             * allow sliding surface on both axes
             */
            SLIDE,
            /**
             * allow resizing surface on both axes
             */
            RESIZE,
        }
        /**
         * Flags describing the current capabilities of a device/tool.
         */

        /**
         * Flags describing the current capabilities of a device/tool.
         */
        export namespace AxisFlags {
            export const $gtype: GObject.GType<AxisFlags>;
        }

        enum AxisFlags {
            /**
             * X axis is present
             */
            X,
            /**
             * Y axis is present
             */
            Y,
            /**
             * Scroll X delta axis is present
             */
            DELTA_X,
            /**
             * Scroll Y delta axis is present
             */
            DELTA_Y,
            /**
             * Pressure axis is present
             */
            PRESSURE,
            /**
             * X tilt axis is present
             */
            XTILT,
            /**
             * Y tilt axis is present
             */
            YTILT,
            /**
             * Wheel axis is present
             */
            WHEEL,
            /**
             * Distance axis is present
             */
            DISTANCE,
            /**
             * Z-axis rotation is present
             */
            ROTATION,
            /**
             * Slider axis is present
             */
            SLIDER,
        }
        /**
         * Used in `GdkDrop` and `GdkDrag` to indicate the actions that the
         * destination can and should do with the dropped data.
         */

        /**
         * Used in `GdkDrop` and `GdkDrag` to indicate the actions that the
         * destination can and should do with the dropped data.
         */
        export namespace DragAction {
            export const $gtype: GObject.GType<DragAction>;
        }

        enum DragAction {
            /**
             * Copy the data.
             */
            COPY,
            /**
             * Move the data, i.e. first copy it, then delete
             *   it from the source using the DELETE target of the X selection protocol.
             */
            MOVE,
            /**
             * Add a link to the data. Note that this is only
             *   useful if source and destination agree on what it means, and is not
             *   supported on all platforms.
             */
            LINK,
            /**
             * Ask the user what to do with the data.
             */
            ASK,
        }
        /**
         * Used to represent the different paint clock phases that can be requested.
         *
         * The elements of the enumeration correspond to the signals of `GdkFrameClock`.
         */

        /**
         * Used to represent the different paint clock phases that can be requested.
         *
         * The elements of the enumeration correspond to the signals of `GdkFrameClock`.
         */
        export namespace FrameClockPhase {
            export const $gtype: GObject.GType<FrameClockPhase>;
        }

        enum FrameClockPhase {
            /**
             * no phase
             */
            NONE,
            /**
             * corresponds to GdkFrameClock::flush-events. Should not be handled by applications.
             */
            FLUSH_EVENTS,
            /**
             * corresponds to GdkFrameClock::before-paint. Should not be handled by applications.
             */
            BEFORE_PAINT,
            /**
             * corresponds to GdkFrameClock::update.
             */
            UPDATE,
            /**
             * corresponds to GdkFrameClock::layout. Should not be handled by applications.
             */
            LAYOUT,
            /**
             * corresponds to GdkFrameClock::paint.
             */
            PAINT,
            /**
             * corresponds to GdkFrameClock::resume-events. Should not be handled by applications.
             */
            RESUME_EVENTS,
            /**
             * corresponds to GdkFrameClock::after-paint. Should not be handled by applications.
             */
            AFTER_PAINT,
        }
        /**
         * The list of the different APIs that GdkGLContext can potentially support.
         */

        /**
         * The list of the different APIs that GdkGLContext can potentially support.
         */
        export namespace GLAPI {
            export const $gtype: GObject.GType<GLAPI>;
        }

        enum GLAPI {
            /**
             * The OpenGL API
             */
            GL,
            /**
             * The OpenGL ES API
             */
            GLES,
        }
        /**
         * Flags to indicate the state of modifier keys and mouse buttons
         * in events.
         *
         * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
         * Apple, CapsLock or ShiftLock.
         *
         * Note that GDK may add internal values to events which include values outside
         * of this enumeration. Your code should preserve and ignore them.  You can use
         * %GDK_MODIFIER_MASK to remove all private values.
         */

        /**
         * Flags to indicate the state of modifier keys and mouse buttons
         * in events.
         *
         * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
         * Apple, CapsLock or ShiftLock.
         *
         * Note that GDK may add internal values to events which include values outside
         * of this enumeration. Your code should preserve and ignore them.  You can use
         * %GDK_MODIFIER_MASK to remove all private values.
         */
        export namespace ModifierType {
            export const $gtype: GObject.GType<ModifierType>;
        }

        enum ModifierType {
            /**
             * No modifier.
             */
            NO_MODIFIER_MASK,
            /**
             * the Shift key.
             */
            SHIFT_MASK,
            /**
             * a Lock key (depending on the modifier mapping of the
             *  X server this may either be CapsLock or ShiftLock).
             */
            LOCK_MASK,
            /**
             * the Control key.
             */
            CONTROL_MASK,
            /**
             * the fourth modifier key (it depends on the modifier
             *  mapping of the X server which key is interpreted as this modifier, but
             *  normally it is the Alt key).
             */
            ALT_MASK,
            /**
             * the first mouse button.
             */
            BUTTON1_MASK,
            /**
             * the second mouse button.
             */
            BUTTON2_MASK,
            /**
             * the third mouse button.
             */
            BUTTON3_MASK,
            /**
             * the fourth mouse button.
             */
            BUTTON4_MASK,
            /**
             * the fifth mouse button.
             */
            BUTTON5_MASK,
            /**
             * the Super modifier.
             */
            SUPER_MASK,
            /**
             * the Hyper modifier.
             */
            HYPER_MASK,
            /**
             * the Meta modifier. Maps to Command on macOS.
             */
            META_MASK,
        }
        /**
         * Flags about a paintable object.
         *
         * Implementations use these for optimizations such as caching.
         */

        /**
         * Flags about a paintable object.
         *
         * Implementations use these for optimizations such as caching.
         */
        export namespace PaintableFlags {
            export const $gtype: GObject.GType<PaintableFlags>;
        }

        enum PaintableFlags {
            /**
             * The size is immutable.
             *   The [signal`Gdk`.Paintable::invalidate-size] signal will never be
             *   emitted.
             */
            SIZE,
            /**
             * The content is immutable.
             *   The [signal`Gdk`.Paintable::invalidate-contents] signal will never be
             *   emitted.
             */
            CONTENTS,
        }
        /**
         * Flags describing the seat capabilities.
         */

        /**
         * Flags describing the seat capabilities.
         */
        export namespace SeatCapabilities {
            export const $gtype: GObject.GType<SeatCapabilities>;
        }

        enum SeatCapabilities {
            /**
             * No input capabilities
             */
            NONE,
            /**
             * The seat has a pointer (e.g. mouse)
             */
            POINTER,
            /**
             * The seat has touchscreen(s) attached
             */
            TOUCH,
            /**
             * The seat has drawing tablet(s) attached
             */
            TABLET_STYLUS,
            /**
             * The seat has keyboard(s) attached
             */
            KEYBOARD,
            /**
             * The seat has drawing tablet pad(s) attached
             */
            TABLET_PAD,
            /**
             * The union of all pointing capabilities
             */
            ALL_POINTING,
            /**
             * The union of all capabilities
             */
            ALL,
        }
        /**
         * Specifies the state of a toplevel surface.
         *
         * On platforms that support information about individual edges, the
         * %GDK_TOPLEVEL_STATE_TILED state will be set whenever any of the individual
         * tiled states is set. On platforms that lack that support, the tiled state
         * will give an indication of tiledness without any of the per-edge states
         * being set.
         */

        /**
         * Specifies the state of a toplevel surface.
         *
         * On platforms that support information about individual edges, the
         * %GDK_TOPLEVEL_STATE_TILED state will be set whenever any of the individual
         * tiled states is set. On platforms that lack that support, the tiled state
         * will give an indication of tiledness without any of the per-edge states
         * being set.
         */
        export namespace ToplevelState {
            export const $gtype: GObject.GType<ToplevelState>;
        }

        enum ToplevelState {
            /**
             * the surface is minimized
             */
            MINIMIZED,
            /**
             * the surface is maximized
             */
            MAXIMIZED,
            /**
             * the surface is sticky
             */
            STICKY,
            /**
             * the surface is maximized without decorations
             */
            FULLSCREEN,
            /**
             * the surface is kept above other surfaces
             */
            ABOVE,
            /**
             * the surface is kept below other surfaces
             */
            BELOW,
            /**
             * the surface is presented as focused (with active decorations)
             */
            FOCUSED,
            /**
             * the surface is in a tiled state
             */
            TILED,
            /**
             * whether the top edge is tiled
             */
            TOP_TILED,
            /**
             * whether the top edge is resizable
             */
            TOP_RESIZABLE,
            /**
             * whether the right edge is tiled
             */
            RIGHT_TILED,
            /**
             * whether the right edge is resizable
             */
            RIGHT_RESIZABLE,
            /**
             * whether the bottom edge is tiled
             */
            BOTTOM_TILED,
            /**
             * whether the bottom edge is resizable
             */
            BOTTOM_RESIZABLE,
            /**
             * whether the left edge is tiled
             */
            LEFT_TILED,
            /**
             * whether the left edge is resizable
             */
            LEFT_RESIZABLE,
            /**
             * The surface is not visible to the user.
             */
            SUSPENDED,
        }
        module AppLaunchContext {
            // Constructor properties interface

            interface ConstructorProps extends Gio.AppLaunchContext.ConstructorProps {
                display: Display;
            }
        }

        /**
         * `GdkAppLaunchContext` handles launching an application in a graphical context.
         *
         * It is an implementation of `GAppLaunchContext` that provides startup
         * notification and allows to launch applications on a specific workspace.
         *
         * ## Launching an application
         *
         * ```c
         * GdkAppLaunchContext *context;
         *
         * context = gdk_display_get_app_launch_context (display);
         *
         * gdk_app_launch_context_set_timestamp (gdk_event_get_time (event));
         *
         * if (!g_app_info_launch_default_for_uri ("http://www.gtk.org", context, &error))
         *   g_warning ("Launching failed: %s\n", error->message);
         *
         * g_object_unref (context);
         * ```
         */
        class AppLaunchContext extends Gio.AppLaunchContext {
            static $gtype: GObject.GType<AppLaunchContext>;

            // Properties

            /**
             * The display that the `GdkAppLaunchContext` is on.
             */
            get display(): Display;

            // Constructors

            constructor(properties?: Partial<AppLaunchContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the `GdkDisplay` that `context` is for.
             * @returns the display of @context
             */
            get_display(): Display;
            // Conflicted with Gio.AppLaunchContext.get_display
            get_display(...args: never[]): any;
            /**
             * Sets the workspace on which applications will be launched.
             *
             * This only works when running under a window manager that
             * supports multiple workspaces, as described in the
             * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
             * Specifically this sets the `_NET_WM_DESKTOP` property described
             * in that spec.
             *
             * This only works when using the X11 backend.
             *
             * When the workspace is not specified or `desktop` is set to -1,
             * it is up to the window manager to pick one, typically it will
             * be the current workspace.
             * @param desktop the number of a workspace, or -1
             */
            set_desktop(desktop: number): void;
            /**
             * Sets the icon for applications that are launched with this
             * context.
             *
             * Window Managers can use this information when displaying startup
             * notification.
             *
             * See also [method`Gdk`.AppLaunchContext.set_icon_name].
             * @param icon a `GIcon`
             */
            set_icon(icon?: Gio.Icon | null): void;
            /**
             * Sets the icon for applications that are launched with this context.
             *
             * The `icon_name` will be interpreted in the same way as the Icon field
             * in desktop files. See also [method`Gdk`.AppLaunchContext.set_icon].
             *
             * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
             * If neither `icon` or `icon_name` is set, the icon is taken from either
             * the file that is passed to launched application or from the `GAppInfo`
             * for the launched application itself.
             * @param icon_name an icon name
             */
            set_icon_name(icon_name?: string | null): void;
            /**
             * Sets the timestamp of `context`.
             *
             * The timestamp should ideally be taken from the event that
             * triggered the launch.
             *
             * Window managers can use this information to avoid moving the
             * focus to the newly launched application when the user is busy
             * typing in another window. This is also known as 'focus stealing
             * prevention'.
             * @param timestamp a timestamp
             */
            set_timestamp(timestamp: number): void;
        }

        /**
         * An event related to a button on a pointer device.
         */
        class ButtonEvent extends Event {
            static $gtype: GObject.GType<ButtonEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extract the button number from a button event.
             * @returns the button of @event
             */
            get_button(): number;
        }

        module CairoContext {
            // Constructor properties interface

            interface ConstructorProps extends DrawContext.ConstructorProps {}
        }

        /**
         * `GdkCairoContext` is an object representing the platform-specific
         * draw context.
         *
         * `GdkCairoContext`s are created for a surface using
         * [method`Gdk`.Surface.create_cairo_context], and the context
         * can then be used to draw on that surface.
         */
        abstract class CairoContext extends DrawContext {
            static $gtype: GObject.GType<CairoContext>;

            // Constructors

            constructor(properties?: Partial<CairoContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves a Cairo context to be used to draw on the `GdkSurface`
             * of `context`.
             *
             * A call to [method`Gdk`.DrawContext.begin_frame] with this
             * `context` must have been done or this function will return %NULL.
             *
             * The returned context is guaranteed to be valid until
             * [method`Gdk`.DrawContext.end_frame] is called.
             * @returns a Cairo context   to draw on `GdkSurface
             */
            cairo_create(): cairo.Context | null;
        }

        module CicpParams {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                color_primaries: number;
                colorPrimaries: number;
                matrix_coefficients: number;
                matrixCoefficients: number;
                range: CicpRange;
                transfer_function: number;
                transferFunction: number;
            }
        }

        /**
         * The `GdkCicpParams` struct contains the parameters that define
         * a colorstate according to the ITU-T H.273
         * [specification](https://www.itu.int/rec/T-REC-H.273/en).
         *
         * See the documentation of individual properties for supported values.
         *
         * The 'unspecified' value (2) is not treated in any special way, and
         * must be replaced by a different value before creating a color state.
         *
         * `GdkCicpParams` can be used as a builder object to construct a color
         * state from Cicp data with [method`Gdk`.CicpParams.build_color_state].
         * The function will return an error if the given parameters are not
         * supported.
         *
         * You can obtain a `GdkCicpParams` object from a color state with
         * [method`Gdk`.ColorState.create_cicp_params]. This can be used to
         * create a variant of a color state, by changing just one of the cicp
         * parameters, or just to obtain information about the color state.
         */
        class CicpParams extends GObject.Object {
            static $gtype: GObject.GType<CicpParams>;

            // Properties

            /**
             * The color primaries to use.
             *
             * Supported values:
             *
             * - 1: BT.709 / sRGB
             * - 2: unspecified
             * - 5: PAL
             * - 6,7: BT.601 / NTSC
             * - 9: BT.2020
             * - 12: Display P3
             */
            get color_primaries(): number;
            set color_primaries(val: number);
            /**
             * The color primaries to use.
             *
             * Supported values:
             *
             * - 1: BT.709 / sRGB
             * - 2: unspecified
             * - 5: PAL
             * - 6,7: BT.601 / NTSC
             * - 9: BT.2020
             * - 12: Display P3
             */
            get colorPrimaries(): number;
            set colorPrimaries(val: number);
            /**
             * The matrix coefficients (for YUV to RGB conversion).
             *
             * Supported values:
             *
             * - 0: RGB
             * - 2: unspecified
             */
            get matrix_coefficients(): number;
            set matrix_coefficients(val: number);
            /**
             * The matrix coefficients (for YUV to RGB conversion).
             *
             * Supported values:
             *
             * - 0: RGB
             * - 2: unspecified
             */
            get matrixCoefficients(): number;
            set matrixCoefficients(val: number);
            /**
             * Whether the data is using the full range of values.
             *
             * The range of the data.
             */
            get range(): CicpRange;
            set range(val: CicpRange);
            /**
             * The transfer function to use.
             *
             * Supported values:
             *
             * - 1,6,14,15: BT.709, BT.601, BT.2020
             * - 2: unspecified
             * - 4: gamma 2.2
             * - 5: gamma 2.8
             * - 8: linear
             * - 13: sRGB
             * - 16: BT.2100 PQ
             * - 18: BT.2100 HLG
             */
            get transfer_function(): number;
            set transfer_function(val: number);
            /**
             * The transfer function to use.
             *
             * Supported values:
             *
             * - 1,6,14,15: BT.709, BT.601, BT.2020
             * - 2: unspecified
             * - 4: gamma 2.2
             * - 5: gamma 2.8
             * - 8: linear
             * - 13: sRGB
             * - 16: BT.2100 PQ
             * - 18: BT.2100 HLG
             */
            get transferFunction(): number;
            set transferFunction(val: number);

            // Constructors

            constructor(properties?: Partial<CicpParams.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CicpParams;

            // Methods

            /**
             * Creates a new `GdkColorState` object for the cicp parameters in `self`.
             *
             * Note that this may fail if the cicp parameters in `self` are not
             * supported by GTK. In that case, `NULL` is returned, and `error` is set
             * with an error message that can be presented to the user.
             * @returns A newly allocated `GdkColorState`
             */
            build_color_state(): ColorState | null;
            /**
             * Returns the value of the color-primaries property
             * of `self`.
             * @returns the color-primaries value
             */
            get_color_primaries(): number;
            /**
             * Gets the matrix-coefficients property of `self`.
             * @returns the matrix-coefficients value
             */
            get_matrix_coefficients(): number;
            /**
             * Gets the range property of `self`.
             * @returns the range value
             */
            get_range(): CicpRange;
            /**
             * Gets the transfer-function property of `self`.
             * @returns the transfer-function value
             */
            get_transfer_function(): number;
            /**
             * Sets the color-primaries property of `self`.
             * @param color_primaries the new color primaries value
             */
            set_color_primaries(color_primaries: number): void;
            /**
             * `self` a `GdkCicpParams`
             * Sets the matrix-coefficients property of `self`.
             * @param matrix_coefficients the new matrix-coefficients value
             */
            set_matrix_coefficients(matrix_coefficients: number): void;
            /**
             * Sets the range property of `self`
             * @param range the range value
             */
            set_range(range: CicpRange): void;
            /**
             * Sets the transfer-function property of `self`.
             * @param transfer_function the new transfer-function value
             */
            set_transfer_function(transfer_function: number): void;
        }

        module Clipboard {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                content: ContentProvider;
                display: Display;
                formats: ContentFormats;
                local: boolean;
            }
        }

        /**
         * The `GdkClipboard` object represents data shared between applications or
         * inside an application.
         *
         * To get a `GdkClipboard` object, use [method`Gdk`.Display.get_clipboard] or
         * [method`Gdk`.Display.get_primary_clipboard]. You can find out about the data
         * that is currently available in a clipboard using
         * [method`Gdk`.Clipboard.get_formats].
         *
         * To make text or image data available in a clipboard, use
         * [method`Gdk`.Clipboard.set_text] or [method`Gdk`.Clipboard.set_texture].
         * For other data, you can use [method`Gdk`.Clipboard.set_content], which
         * takes a [class`Gdk`.ContentProvider] object.
         *
         * To read textual or image data from a clipboard, use
         * [method`Gdk`.Clipboard.read_text_async] or
         * [method`Gdk`.Clipboard.read_texture_async]. For other data, use
         * [method`Gdk`.Clipboard.read_async], which provides a `GInputStream` object.
         */
        class Clipboard extends GObject.Object {
            static $gtype: GObject.GType<Clipboard>;

            // Properties

            /**
             * The `GdkContentProvider` or %NULL if the clipboard is empty or contents are
             * provided otherwise.
             */
            get content(): ContentProvider;
            /**
             * The `GdkDisplay` that the clipboard belongs to.
             */
            get display(): Display;
            /**
             * The possible formats that the clipboard can provide its data in.
             */
            get formats(): ContentFormats;
            /**
             * %TRUE if the contents of the clipboard are owned by this process.
             */
            get local(): boolean;

            // Constructors

            constructor(properties?: Partial<Clipboard.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Methods

            /**
             * Returns the `GdkContentProvider` currently set on `clipboard`.
             *
             * If the `clipboard` is empty or its contents are not owned by the
             * current process, %NULL will be returned.
             * @returns The content of a clipboard   if the clipboard does not maintain any content
             */
            get_content(): ContentProvider | null;
            /**
             * Gets the `GdkDisplay` that the clipboard was created for.
             * @returns a `GdkDisplay`
             */
            get_display(): Display;
            /**
             * Gets the formats that the clipboard can provide its current contents in.
             * @returns The formats of the clipboard
             */
            get_formats(): ContentFormats;
            /**
             * Returns if the clipboard is local.
             *
             * A clipboard is considered local if it was last claimed
             * by the running application.
             *
             * Note that [method`Gdk`.Clipboard.get_content] may return %NULL
             * even on a local clipboard. In this case the clipboard is empty.
             * @returns %TRUE if the clipboard is local
             */
            is_local(): boolean;
            /**
             * Asynchronously requests an input stream to read the `clipboard'`s
             * contents from.
             *
             * The clipboard will choose the most suitable mime type from the given list
             * to fulfill the request, preferring the ones listed first.
             * @param mime_types a %NULL-terminated array of mime types to choose from
             * @param io_priority the I/O priority of the request
             * @param cancellable optional `GCancellable` object
             * @param callback callback to call when the request is satisfied
             */
            read_async(
                mime_types: string[],
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous clipboard read.
             *
             * See [method`Gdk`.Clipboard.read_async].
             * @param result a `GAsyncResult`
             * @returns a `GInputStream`
             */
            read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string];
            /**
             * Asynchronously request the `clipboard` contents converted to a string.
             *
             * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
             * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
             * need more control over the operation.
             * @param cancellable optional `GCancellable` object
             * @param callback callback to call when the request is satisfied
             */
            read_text_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes an asynchronous clipboard read.
             *
             * See [method`Gdk`.Clipboard.read_text_async].
             * @param result a `GAsyncResult`
             * @returns a new string
             */
            read_text_finish(result: Gio.AsyncResult): string | null;
            /**
             * Asynchronously request the `clipboard` contents converted to a `GdkPixbuf`.
             *
             * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
             * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
             * need more control over the operation.
             * @param cancellable optional `GCancellable` object, %NULL to ignore.
             * @param callback callback to call when the request is satisfied
             */
            read_texture_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous clipboard read.
             *
             * See [method`Gdk`.Clipboard.read_texture_async].
             * @param result a `GAsyncResult`
             * @returns a new `GdkTexture`
             */
            read_texture_finish(result: Gio.AsyncResult): Texture | null;
            /**
             * Asynchronously request the `clipboard` contents converted to the given
             * `type`.
             *
             * For local clipboard contents that are available in the given `GType`,
             * the value will be copied directly. Otherwise, GDK will try to use
             * [func`content_deserialize_async]` to convert the clipboard's data.
             * @param type a `GType` to read
             * @param io_priority the I/O priority of the request
             * @param cancellable optional `GCancellable` object
             * @param callback callback to call when the request is satisfied
             */
            read_value_async(
                type: GObject.GType,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous clipboard read.
             *
             * See [method`Gdk`.Clipboard.read_value_async].
             * @param result a `GAsyncResult`
             * @returns a `GValue` containing the result.
             */
            read_value_finish(result: Gio.AsyncResult): unknown;
            /**
             * Sets a new content provider on `clipboard`.
             *
             * The clipboard will claim the `GdkDisplay`'s resources and advertise
             * these new contents to other applications.
             *
             * In the rare case of a failure, this function will return %FALSE. The
             * clipboard will then continue reporting its old contents and ignore
             * `provider`.
             *
             * If the contents are read by either an external application or the
             * `clipboard'`s read functions, `clipboard` will select the best format to
             * transfer the contents and then request that format from `provider`.
             * @param provider the new contents of @clipboard   or %NULL to clear the clipboard
             * @returns %TRUE if setting the clipboard succeeded
             */
            set_content(provider?: ContentProvider | null): boolean;
            /**
             * Sets the `clipboard` to contain the given `value`.
             * @param value a `GValue` to set
             */
            set(value: GObject.Value | any): void;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * Asynchronously instructs the `clipboard` to store its contents remotely.
             *
             * If the clipboard is not local, this function does nothing but report success.
             *
             * The purpose of this call is to preserve clipboard contents beyond the
             * lifetime of an application, so this function is typically called on
             * exit. Depending on the platform, the functionality may not be available
             * unless a "clipboard manager" is running.
             *
             * This function is called automatically when a
             * [GtkApplication](../gtk4/class.Application.html)
             * is shut down, so you likely don't need to call it.
             * @param io_priority the I/O priority of the request
             * @param cancellable optional `GCancellable` object
             * @param callback callback to call when the request is satisfied
             */
            store_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous clipboard store.
             *
             * See [method`Gdk`.Clipboard.store_async].
             * @param result a `GAsyncResult`
             * @returns %TRUE if storing was successful.
             */
            store_finish(result: Gio.AsyncResult): boolean;
        }

        module ContentDeserializer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
        }

        /**
         * A `GdkContentDeserializer` is used to deserialize content received via
         * inter-application data transfers.
         *
         * The `GdkContentDeserializer` transforms serialized content that is
         * identified by a mime type into an object identified by a GType.
         *
         * GTK provides serializers and deserializers for common data types
         * such as text, colors, images or file lists. To register your own
         * deserialization functions, use [func`content_register_deserializer]`.
         *
         * Also see [class`Gdk`.ContentSerializer].
         */
        class ContentDeserializer extends GObject.Object implements Gio.AsyncResult {
            static $gtype: GObject.GType<ContentDeserializer>;

            // Constructors

            constructor(properties?: Partial<ContentDeserializer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the cancellable for the current operation.
             *
             * This is the `GCancellable` that was passed to [func`Gdk`.content_deserialize_async].
             * @returns the cancellable for the current operation
             */
            get_cancellable(): Gio.Cancellable | null;
            /**
             * Gets the `GType` to create an instance of.
             * @returns the `GType` for the current operation
             */
            get_gtype(): GObject.GType;
            /**
             * Gets the input stream for the current operation.
             *
             * This is the stream that was passed to [func`Gdk`.content_deserialize_async].
             * @returns the input stream for the current operation
             */
            get_input_stream(): Gio.InputStream;
            /**
             * Gets the mime type to deserialize from.
             * @returns the mime type for the current operation
             */
            get_mime_type(): string;
            /**
             * Gets the I/O priority for the current operation.
             *
             * This is the priority that was passed to [func`Gdk`.content_deserialize_async].
             * @returns the I/O priority for the current operation
             */
            get_priority(): number;
            /**
             * Gets the data that was associated with the current operation.
             *
             * See [method`Gdk`.ContentDeserializer.set_task_data].
             * @returns the task data for @deserializer
             */
            get_task_data(): any | null;
            /**
             * Gets the user data that was passed when the deserializer was registered.
             * @returns the user data for this deserializer
             */
            get_user_data(): any | null;
            /**
             * Gets the `GValue` to store the deserialized object in.
             * @returns the `GValue` for the current operation
             */
            get_value(): unknown;
            /**
             * Indicate that the deserialization has ended with an error.
             *
             * This function consumes `error`.
             * @param error a `GError`
             */
            return_error(error: GLib.Error): void;
            /**
             * Indicate that the deserialization has been successfully completed.
             */
            return_success(): void;
            /**
             * Associate data with the current deserialization operation.
             * @param data data to associate with this operation
             */
            set_task_data(data?: any | null): void;

            // Inherited methods
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             * @returns a new reference to the source    object for the @res, or `NULL` if there is none.
             */
            get_source_object<T = GObject.Object>(): T;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             * @returns `TRUE` if @res has the indicated @source_tag, `FALSE` if   not.
             */
            is_tagged(source_tag?: any | null): boolean;
            /**
             * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
             * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
             * `FALSE`.
             *
             * This can be used for legacy error handling in async `*_finish()`
             * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
             * error returns themselves rather than calling into the virtual method.
             * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
             * set by virtual methods should also be extracted by virtual methods,
             * to enable subclasses to chain up correctly.
             * @returns `TRUE` if @error is has been filled in with an error from   @res, `FALSE` if not.
             */
            legacy_propagate_error(): boolean;
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_source_object<T = GObject.Object>(): T;
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_user_data(): any | null;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             */
            vfunc_is_tagged(source_tag?: any | null): boolean;
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

        module ContentProvider {
            // Signal callback interfaces

            interface ContentChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                formats: ContentFormats;
                storable_formats: ContentFormats;
                storableFormats: ContentFormats;
            }
        }

        /**
         * A `GdkContentProvider` is used to provide content for the clipboard or
         * for drag-and-drop operations in a number of formats.
         *
         * To create a `GdkContentProvider`, use [ctor`Gdk`.ContentProvider.new_for_value]
         * or [ctor`Gdk`.ContentProvider.new_for_bytes].
         *
         * GDK knows how to handle common text and image formats out-of-the-box. See
         * [class`Gdk`.ContentSerializer] and [class`Gdk`.ContentDeserializer] if you want
         * to add support for application-specific data formats.
         */
        class ContentProvider extends GObject.Object {
            static $gtype: GObject.GType<ContentProvider>;

            // Properties

            /**
             * The possible formats that the provider can provide its data in.
             */
            get formats(): ContentFormats;
            /**
             * The subset of formats that clipboard managers should store this provider's data in.
             */
            get storable_formats(): ContentFormats;
            /**
             * The subset of formats that clipboard managers should store this provider's data in.
             */
            get storableFormats(): ContentFormats;

            // Constructors

            constructor(properties?: Partial<ContentProvider.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_bytes(mime_type: string, bytes: GLib.Bytes | Uint8Array): ContentProvider;

            static new_for_value(value: GObject.Value | any): ContentProvider;

            static new_union(providers?: ContentProvider[] | null): ContentProvider;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'content-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'content-changed', callback: (_source: this) => void): number;
            emit(signal: 'content-changed'): void;

            // Virtual methods

            vfunc_attach_clipboard(clipboard: Clipboard): void;
            /**
             * Emits the ::content-changed signal.
             */
            vfunc_content_changed(): void;
            vfunc_detach_clipboard(clipboard: Clipboard): void;
            /**
             * Gets the contents of `provider` stored in `value`.
             *
             * The `value` will have been initialized to the `GType` the value should be
             * provided in. This given `GType` does not need to be listed in the formats
             * returned by [method`Gdk`.ContentProvider.ref_formats]. However, if the
             * given `GType` is not supported, this operation can fail and
             * `G_IO_ERROR_NOT_SUPPORTED` will be reported.
             */
            vfunc_get_value(): [boolean, unknown];
            /**
             * Gets the formats that the provider can provide its current contents in.
             */
            vfunc_ref_formats(): ContentFormats;
            /**
             * Gets the formats that the provider suggests other applications to store
             * the data in.
             *
             * An example of such an application would be a clipboard manager.
             *
             * This can be assumed to be a subset of [method`Gdk`.ContentProvider.ref_formats].
             */
            vfunc_ref_storable_formats(): ContentFormats;
            /**
             * Asynchronously writes the contents of `provider` to `stream` in the given
             * `mime_type`.
             *
             * The given mime type does not need to be listed in the formats returned by
             * [method`Gdk`.ContentProvider.ref_formats]. However, if the given `GType` is
             * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
             *
             * The given `stream` will not be closed.
             * @param mime_type the mime type to provide the data in
             * @param stream the `GOutputStream` to write to
             * @param io_priority I/O priority of the request.
             * @param cancellable optional `GCancellable` object, %NULL to ignore.
             * @param callback callback to call when the request is satisfied
             */
            vfunc_write_mime_type_async(
                mime_type: string,
                stream: Gio.OutputStream,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous write operation.
             *
             * See [method`Gdk`.ContentProvider.write_mime_type_async].
             * @param result a `GAsyncResult`
             */
            vfunc_write_mime_type_finish(result: Gio.AsyncResult): boolean;

            // Methods

            /**
             * Emits the ::content-changed signal.
             */
            content_changed(): void;
            /**
             * Gets the contents of `provider` stored in `value`.
             *
             * The `value` will have been initialized to the `GType` the value should be
             * provided in. This given `GType` does not need to be listed in the formats
             * returned by [method`Gdk`.ContentProvider.ref_formats]. However, if the
             * given `GType` is not supported, this operation can fail and
             * `G_IO_ERROR_NOT_SUPPORTED` will be reported.
             * @returns %TRUE if the value was set successfully. Otherwise   @error will be set to describe the failure.
             */
            get_value(): [boolean, unknown];
            /**
             * Gets the formats that the provider can provide its current contents in.
             * @returns The formats of the provider
             */
            ref_formats(): ContentFormats;
            /**
             * Gets the formats that the provider suggests other applications to store
             * the data in.
             *
             * An example of such an application would be a clipboard manager.
             *
             * This can be assumed to be a subset of [method`Gdk`.ContentProvider.ref_formats].
             * @returns The storable formats of the provider
             */
            ref_storable_formats(): ContentFormats;
            /**
             * Asynchronously writes the contents of `provider` to `stream` in the given
             * `mime_type`.
             *
             * The given mime type does not need to be listed in the formats returned by
             * [method`Gdk`.ContentProvider.ref_formats]. However, if the given `GType` is
             * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
             *
             * The given `stream` will not be closed.
             * @param mime_type the mime type to provide the data in
             * @param stream the `GOutputStream` to write to
             * @param io_priority I/O priority of the request.
             * @param cancellable optional `GCancellable` object, %NULL to ignore.
             * @param callback callback to call when the request is satisfied
             */
            write_mime_type_async(
                mime_type: string,
                stream: Gio.OutputStream,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous write operation.
             *
             * See [method`Gdk`.ContentProvider.write_mime_type_async].
             * @param result a `GAsyncResult`
             * @returns %TRUE if the operation was completed successfully. Otherwise   @error will be set to describe the failure.
             */
            write_mime_type_finish(result: Gio.AsyncResult): boolean;
        }

        module ContentSerializer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
        }

        /**
         * A `GdkContentSerializer` is used to serialize content for
         * inter-application data transfers.
         *
         * The `GdkContentSerializer` transforms an object that is identified
         * by a GType into a serialized form (i.e. a byte stream) that is
         * identified by a mime type.
         *
         * GTK provides serializers and deserializers for common data types
         * such as text, colors, images or file lists. To register your own
         * serialization functions, use [func`Gdk`.content_register_serializer].
         *
         * Also see [class`Gdk`.ContentDeserializer].
         */
        class ContentSerializer extends GObject.Object implements Gio.AsyncResult {
            static $gtype: GObject.GType<ContentSerializer>;

            // Constructors

            constructor(properties?: Partial<ContentSerializer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the cancellable for the current operation.
             *
             * This is the `GCancellable` that was passed to [func`content_serialize_async]`.
             * @returns the cancellable for the current operation
             */
            get_cancellable(): Gio.Cancellable | null;
            /**
             * Gets the `GType` to of the object to serialize.
             * @returns the `GType` for the current operation
             */
            get_gtype(): GObject.GType;
            /**
             * Gets the mime type to serialize to.
             * @returns the mime type for the current operation
             */
            get_mime_type(): string;
            /**
             * Gets the output stream for the current operation.
             *
             * This is the stream that was passed to [func`content_serialize_async]`.
             * @returns the output stream for the current operation
             */
            get_output_stream(): Gio.OutputStream;
            /**
             * Gets the I/O priority for the current operation.
             *
             * This is the priority that was passed to [func`content_serialize_async]`.
             * @returns the I/O priority for the current operation
             */
            get_priority(): number;
            /**
             * Gets the data that was associated with the current operation.
             *
             * See [method`Gdk`.ContentSerializer.set_task_data].
             * @returns the task data for @serializer
             */
            get_task_data(): any | null;
            /**
             * Gets the user data that was passed when the serializer was registered.
             * @returns the user data for this serializer
             */
            get_user_data(): any | null;
            /**
             * Gets the `GValue` to read the object to serialize from.
             * @returns the `GValue` for the current operation
             */
            get_value(): unknown;
            /**
             * Indicate that the serialization has ended with an error.
             *
             * This function consumes `error`.
             * @param error a `GError`
             */
            return_error(error: GLib.Error): void;
            /**
             * Indicate that the serialization has been successfully completed.
             */
            return_success(): void;
            /**
             * Associate data with the current serialization operation.
             * @param data data to associate with this operation
             */
            set_task_data(data?: any | null): void;

            // Inherited methods
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             * @returns a new reference to the source    object for the @res, or `NULL` if there is none.
             */
            get_source_object<T = GObject.Object>(): T;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             * @returns `TRUE` if @res has the indicated @source_tag, `FALSE` if   not.
             */
            is_tagged(source_tag?: any | null): boolean;
            /**
             * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
             * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
             * `FALSE`.
             *
             * This can be used for legacy error handling in async `*_finish()`
             * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
             * error returns themselves rather than calling into the virtual method.
             * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
             * set by virtual methods should also be extracted by virtual methods,
             * to enable subclasses to chain up correctly.
             * @returns `TRUE` if @error is has been filled in with an error from   @res, `FALSE` if not.
             */
            legacy_propagate_error(): boolean;
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_source_object<T = GObject.Object>(): T;
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_user_data(): any | null;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             */
            vfunc_is_tagged(source_tag?: any | null): boolean;
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

        /**
         * An event caused by a pointing device moving between surfaces.
         */
        class CrossingEvent extends Event {
            static $gtype: GObject.GType<CrossingEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts the notify detail from a crossing event.
             * @returns the notify detail of @event
             */
            get_detail(): NotifyType;
            /**
             * Checks if the `event` surface is the focus surface.
             * @returns %TRUE if the surface is the focus surface
             */
            get_focus(): boolean;
            /**
             * Extracts the crossing mode from a crossing event.
             * @returns the mode of @event
             */
            get_mode(): CrossingMode;
        }

        module Cursor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                fallback: Cursor;
                hotspot_x: number;
                hotspotX: number;
                hotspot_y: number;
                hotspotY: number;
                name: string;
                texture: Texture;
            }
        }

        /**
         * `GdkCursor` is used to create and destroy cursors.
         *
         * Cursors are immutable objects, so once you created them, there is no way
         * to modify them later. You should create a new cursor when you want to change
         * something about it.
         *
         * Cursors by themselves are not very interesting: they must be bound to a
         * window for users to see them. This is done with [method`Gdk`.Surface.set_cursor]
         * or [method`Gdk`.Surface.set_device_cursor]. Applications will typically
         * use higher-level GTK functions such as [gtk_widget_set_cursor()](../gtk4/method.Widget.set_cursor.html)
         * instead.
         *
         * Cursors are not bound to a given [class`Gdk`.Display], so they can be shared.
         * However, the appearance of cursors may vary when used on different
         * platforms.
         *
         * ## Named and texture cursors
         *
         * There are multiple ways to create cursors. The platform's own cursors
         * can be created with [ctor`Gdk`.Cursor.new_from_name]. That function lists
         * the commonly available names that are shared with the CSS specification.
         * Other names may be available, depending on the platform in use. On some
         * platforms, what images are used for named cursors may be influenced by
         * the cursor theme.
         *
         * Another option to create a cursor is to use [ctor`Gdk`.Cursor.new_from_texture]
         * and provide an image to use for the cursor.
         *
         * To ease work with unsupported cursors, a fallback cursor can be provided.
         * If a [class`Gdk`.Surface] cannot use a cursor because of the reasons mentioned
         * above, it will try the fallback cursor. Fallback cursors can themselves have
         * fallback cursors again, so it is possible to provide a chain of progressively
         * easier to support cursors. If none of the provided cursors can be supported,
         * the default cursor will be the ultimate fallback.
         */
        class Cursor extends GObject.Object {
            static $gtype: GObject.GType<Cursor>;

            // Properties

            /**
             * Cursor to fall back to if this cursor cannot be displayed.
             */
            get fallback(): Cursor;
            /**
             * X position of the cursor hotspot in the cursor image.
             */
            get hotspot_x(): number;
            /**
             * X position of the cursor hotspot in the cursor image.
             */
            get hotspotX(): number;
            /**
             * Y position of the cursor hotspot in the cursor image.
             */
            get hotspot_y(): number;
            /**
             * Y position of the cursor hotspot in the cursor image.
             */
            get hotspotY(): number;
            /**
             * Name of this this cursor.
             *
             * The name will be %NULL if the cursor was created from a texture.
             */
            get name(): string;
            /**
             * The texture displayed by this cursor.
             *
             * The texture will be %NULL if the cursor was created from a name.
             */
            get texture(): Texture;

            // Constructors

            constructor(properties?: Partial<Cursor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_callback(callback: CursorGetTextureCallback, fallback?: Cursor | null): Cursor;

            static new_from_name(name: string, fallback?: Cursor | null): Cursor;

            static new_from_texture(
                texture: Texture,
                hotspot_x: number,
                hotspot_y: number,
                fallback?: Cursor | null,
            ): Cursor;

            // Methods

            /**
             * Returns the fallback for this `cursor`.
             *
             * The fallback will be used if this cursor is not available on a given
             * `GdkDisplay`. For named cursors, this can happen when using nonstandard
             * names or when using an incomplete cursor theme. For textured cursors,
             * this can happen when the texture is too large or when the `GdkDisplay`
             * it is used on does not support textured cursors.
             * @returns the fallback of the cursor or %NULL   to use the default cursor as fallback
             */
            get_fallback(): Cursor | null;
            /**
             * Returns the horizontal offset of the hotspot.
             *
             * The hotspot indicates the pixel that will be directly above the cursor.
             *
             * Note that named cursors may have a nonzero hotspot, but this function
             * will only return the hotspot position for cursors created with
             * [ctor`Gdk`.Cursor.new_from_texture].
             * @returns the horizontal offset of the hotspot or 0 for named cursors
             */
            get_hotspot_x(): number;
            /**
             * Returns the vertical offset of the hotspot.
             *
             * The hotspot indicates the pixel that will be directly above the cursor.
             *
             * Note that named cursors may have a nonzero hotspot, but this function
             * will only return the hotspot position for cursors created with
             * [ctor`Gdk`.Cursor.new_from_texture].
             * @returns the vertical offset of the hotspot or 0 for named cursors
             */
            get_hotspot_y(): number;
            /**
             * Returns the name of the cursor.
             *
             * If the cursor is not a named cursor, %NULL will be returned.
             * @returns the name of the cursor or %NULL   if it is not a named cursor
             */
            get_name(): string | null;
            /**
             * Returns the texture for the cursor.
             *
             * If the cursor is a named cursor, %NULL will be returned.
             * @returns the texture for cursor or %NULL   if it is a named cursor
             */
            get_texture(): Texture | null;
        }

        /**
         * An event related to drag and drop operations.
         */
        class DNDEvent extends Event {
            static $gtype: GObject.GType<DNDEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the `GdkDrop` object from a DND event.
             * @returns the drop
             */
            get_drop(): Drop | null;
        }

        /**
         * An event related to closing a top-level surface.
         */
        class DeleteEvent extends Event {
            static $gtype: GObject.GType<DeleteEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        module Device {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface ToolChanged {
                (tool: DeviceTool): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                caps_lock_state: boolean;
                capsLockState: boolean;
                direction: Pango.Direction;
                display: Display;
                has_bidi_layouts: boolean;
                hasBidiLayouts: boolean;
                has_cursor: boolean;
                hasCursor: boolean;
                modifier_state: ModifierType;
                modifierState: ModifierType;
                n_axes: number;
                nAxes: number;
                name: string;
                num_lock_state: boolean;
                numLockState: boolean;
                num_touches: number;
                numTouches: number;
                product_id: string;
                productId: string;
                scroll_lock_state: boolean;
                scrollLockState: boolean;
                seat: Seat;
                source: InputSource;
                tool: DeviceTool;
                vendor_id: string;
                vendorId: string;
            }
        }

        /**
         * The `GdkDevice` object represents an input device, such
         * as a keyboard, a mouse, or a touchpad.
         *
         * See the [class`Gdk`.Seat] documentation for more information
         * about the various kinds of devices, and their relationships.
         */
        abstract class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Properties

            /**
             * Whether Caps Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            get caps_lock_state(): boolean;
            /**
             * Whether Caps Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            get capsLockState(): boolean;
            /**
             * The direction of the current layout.
             *
             * This is only relevant for keyboard devices.
             */
            get direction(): Pango.Direction;
            /**
             * The `GdkDisplay` the `GdkDevice` pertains to.
             */
            get display(): Display;
            /**
             * Whether the device has both right-to-left and left-to-right layouts.
             *
             * This is only relevant for keyboard devices.
             */
            get has_bidi_layouts(): boolean;
            /**
             * Whether the device has both right-to-left and left-to-right layouts.
             *
             * This is only relevant for keyboard devices.
             */
            get hasBidiLayouts(): boolean;
            /**
             * Whether the device is represented by a cursor on the screen.
             */
            get has_cursor(): boolean;
            /**
             * Whether the device is represented by a cursor on the screen.
             */
            get hasCursor(): boolean;
            /**
             * The current modifier state of the device.
             *
             * This is only relevant for keyboard devices.
             */
            get modifier_state(): ModifierType;
            /**
             * The current modifier state of the device.
             *
             * This is only relevant for keyboard devices.
             */
            get modifierState(): ModifierType;
            /**
             * Number of axes in the device.
             */
            get n_axes(): number;
            /**
             * Number of axes in the device.
             */
            get nAxes(): number;
            /**
             * The device name.
             */
            get name(): string;
            /**
             * Whether Num Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            get num_lock_state(): boolean;
            /**
             * Whether Num Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            get numLockState(): boolean;
            /**
             * The maximal number of concurrent touches on a touch device.
             *
             * Will be 0 if the device is not a touch device or if the number
             * of touches is unknown.
             */
            get num_touches(): number;
            /**
             * The maximal number of concurrent touches on a touch device.
             *
             * Will be 0 if the device is not a touch device or if the number
             * of touches is unknown.
             */
            get numTouches(): number;
            /**
             * Product ID of this device.
             *
             * See [method`Gdk`.Device.get_product_id].
             */
            get product_id(): string;
            /**
             * Product ID of this device.
             *
             * See [method`Gdk`.Device.get_product_id].
             */
            get productId(): string;
            /**
             * Whether Scroll Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            get scroll_lock_state(): boolean;
            /**
             * Whether Scroll Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            get scrollLockState(): boolean;
            /**
             * `GdkSeat` of this device.
             */
            get seat(): Seat;
            set seat(val: Seat);
            /**
             * Source type for the device.
             */
            get source(): InputSource;
            /**
             * The `GdkDeviceTool` that is currently used with this device.
             */
            get tool(): DeviceTool;
            /**
             * Vendor ID of this device.
             *
             * See [method`Gdk`.Device.get_vendor_id].
             */
            get vendor_id(): string;
            /**
             * Vendor ID of this device.
             *
             * See [method`Gdk`.Device.get_vendor_id].
             */
            get vendorId(): string;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'tool-changed', callback: (_source: this, tool: DeviceTool) => void): number;
            connect_after(signal: 'tool-changed', callback: (_source: this, tool: DeviceTool) => void): number;
            emit(signal: 'tool-changed', tool: DeviceTool): void;

            // Methods

            /**
             * Retrieves whether the Caps Lock modifier of the keyboard is locked.
             *
             * This is only relevant for keyboard devices.
             * @returns %TRUE if Caps Lock is on for @device
             */
            get_caps_lock_state(): boolean;
            /**
             * Retrieves the current tool for `device`.
             * @returns the `GdkDeviceTool`
             */
            get_device_tool(): DeviceTool | null;
            /**
             * Returns the direction of effective layout of the keyboard.
             *
             * This is only relevant for keyboard devices.
             *
             * The direction of a layout is the direction of the majority
             * of its symbols. See [func`Pango`.unichar_direction].
             * @returns %PANGO_DIRECTION_LTR or %PANGO_DIRECTION_RTL   if it can determine the direction. %PANGO_DIRECTION_NEUTRAL   otherwise
             */
            get_direction(): Pango.Direction;
            /**
             * Returns the `GdkDisplay` to which `device` pertains.
             * @returns a `GdkDisplay`
             */
            get_display(): Display;
            /**
             * Determines whether the pointer follows device motion.
             *
             * This is not meaningful for keyboard devices, which
             * don't have a pointer.
             * @returns %TRUE if the pointer follows device motion
             */
            get_has_cursor(): boolean;
            /**
             * Retrieves the current modifier state of the keyboard.
             *
             * This is only relevant for keyboard devices.
             * @returns the current modifier state
             */
            get_modifier_state(): ModifierType;
            /**
             * The name of the device, suitable for showing in a user interface.
             * @returns a name
             */
            get_name(): string;
            /**
             * Retrieves whether the Num Lock modifier of the keyboard is locked.
             *
             * This is only relevant for keyboard devices.
             * @returns %TRUE if Num Lock is on for @device
             */
            get_num_lock_state(): boolean;
            /**
             * Retrieves the number of touch points associated to `device`.
             * @returns the number of touch points
             */
            get_num_touches(): number;
            /**
             * Returns the product ID of this device.
             *
             * This ID is retrieved from the device, and does not change.
             * See [method`Gdk`.Device.get_vendor_id] for more information.
             * @returns the product ID
             */
            get_product_id(): string | null;
            /**
             * Retrieves whether the Scroll Lock modifier of the keyboard is locked.
             *
             * This is only relevant for keyboard devices.
             * @returns %TRUE if Scroll Lock is on for @device
             */
            get_scroll_lock_state(): boolean;
            /**
             * Returns the `GdkSeat` the device belongs to.
             * @returns a `GdkSeat`
             */
            get_seat(): Seat;
            /**
             * Determines the type of the device.
             * @returns a `GdkInputSource`
             */
            get_source(): InputSource;
            /**
             * Obtains the surface underneath `device,` returning the location of the
             * device in `win_x` and `win_y`.
             *
             * Returns %NULL if the surface tree under `device` is not known to GDK
             * (for example, belongs to another application).
             * @returns the `GdkSurface` under the   device position
             */
            get_surface_at_position(): [Surface | null, number, number];
            /**
             * Returns the timestamp of the last activity for this device.
             *
             * In practice, this means the timestamp of the last event that was
             * received from the OS for this device. (GTK may occasionally produce
             * events for a device that are not received from the OS, and will not
             * update the timestamp).
             * @returns the timestamp of the last activity for this device
             */
            get_timestamp(): number;
            /**
             * Returns the vendor ID of this device.
             *
             * This ID is retrieved from the device, and does not change.
             *
             * This function, together with [method`Gdk`.Device.get_product_id],
             * can be used to eg. compose `GSettings` paths to store settings
             * for this device.
             *
             * ```c
             *  static GSettings *
             *  get_device_settings (GdkDevice *device)
             *  {
             *    const char *vendor, *product;
             *    GSettings *settings;
             *    GdkDevice *device;
             *    char *path;
             *
             *    vendor = gdk_device_get_vendor_id (device);
             *    product = gdk_device_get_product_id (device);
             *
             *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
             *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
             *    g_free (path);
             *
             *    return settings;
             *  }
             * ```
             * @returns the vendor ID
             */
            get_vendor_id(): string | null;
        }

        module DeviceTool {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                axes: AxisFlags;
                hardware_id: number;
                hardwareId: number;
                serial: number;
                tool_type: DeviceToolType;
                toolType: DeviceToolType;
            }
        }

        /**
         * A physical tool associated to a `GdkDevice`.
         */
        class DeviceTool extends GObject.Object {
            static $gtype: GObject.GType<DeviceTool>;

            // Properties

            /**
             * The axes of the tool.
             */
            get axes(): AxisFlags;
            /**
             * The hardware ID of the tool.
             */
            get hardware_id(): number;
            /**
             * The hardware ID of the tool.
             */
            get hardwareId(): number;
            /**
             * The serial number of the tool.
             */
            get serial(): number;
            /**
             * The type of the tool.
             */
            get tool_type(): DeviceToolType;
            /**
             * The type of the tool.
             */
            get toolType(): DeviceToolType;

            // Constructors

            constructor(properties?: Partial<DeviceTool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the axes of the tool.
             * @returns the axes of @tool
             */
            get_axes(): AxisFlags;
            /**
             * Gets the hardware ID of this tool, or 0 if it's not known.
             *
             * When non-zero, the identifier is unique for the given tool model,
             * meaning that two identical tools will share the same `hardware_id,`
             * but will have different serial numbers (see
             * [method`Gdk`.DeviceTool.get_serial]).
             *
             * This is a more concrete (and device specific) method to identify
             * a `GdkDeviceTool` than [method`Gdk`.DeviceTool.get_tool_type],
             * as a tablet may support multiple devices with the same
             * `GdkDeviceToolType`, but different hardware identifiers.
             * @returns The hardware identifier of this tool.
             */
            get_hardware_id(): number;
            /**
             * Gets the serial number of this tool.
             *
             * This value can be used to identify a physical tool
             * (eg. a tablet pen) across program executions.
             * @returns The serial ID for this tool
             */
            get_serial(): number;
            /**
             * Gets the `GdkDeviceToolType` of the tool.
             * @returns The physical type for this tool. This can be used to   figure out what sort of pen is being used, such as an airbrush   or a pencil.
             */
            get_tool_type(): DeviceToolType;
        }

        module Display {
            // Signal callback interfaces

            interface Closed {
                (is_error: boolean): void;
            }

            interface Opened {
                (): void;
            }

            interface SeatAdded {
                (seat: Seat): void;
            }

            interface SeatRemoved {
                (seat: Seat): void;
            }

            interface SettingChanged {
                (setting: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                composited: boolean;
                dmabuf_formats: DmabufFormats;
                dmabufFormats: DmabufFormats;
                input_shapes: boolean;
                inputShapes: boolean;
                rgba: boolean;
                shadow_width: boolean;
                shadowWidth: boolean;
            }
        }

        /**
         * `GdkDisplay` objects are the GDK representation of a workstation.
         *
         * Their purpose are two-fold:
         *
         * - To manage and provide information about input devices (pointers, keyboards, etc)
         * - To manage and provide information about output devices (monitors, projectors, etc)
         *
         * Most of the input device handling has been factored out into separate
         * [class`Gdk`.Seat] objects. Every display has a one or more seats, which
         * can be accessed with [method`Gdk`.Display.get_default_seat] and
         * [method`Gdk`.Display.list_seats].
         *
         * Output devices are represented by [class`Gdk`.Monitor] objects, which can
         * be accessed with [method`Gdk`.Display.get_monitor_at_surface] and similar APIs.
         */
        class Display extends GObject.Object {
            static $gtype: GObject.GType<Display>;

            // Properties

            /**
             * %TRUE if the display properly composites the alpha channel.
             */
            get composited(): boolean;
            /**
             * The dma-buf formats that are supported on this display
             */
            get dmabuf_formats(): DmabufFormats;
            /**
             * The dma-buf formats that are supported on this display
             */
            get dmabufFormats(): DmabufFormats;
            /**
             * %TRUE if the display supports input shapes.
             */
            get input_shapes(): boolean;
            /**
             * %TRUE if the display supports input shapes.
             */
            get inputShapes(): boolean;
            /**
             * %TRUE if the display supports an alpha channel.
             */
            get rgba(): boolean;
            /**
             * %TRUE if the display supports extensible frames.
             */
            get shadow_width(): boolean;
            /**
             * %TRUE if the display supports extensible frames.
             */
            get shadowWidth(): boolean;

            // Constructors

            constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'closed', callback: (_source: this, is_error: boolean) => void): number;
            connect_after(signal: 'closed', callback: (_source: this, is_error: boolean) => void): number;
            emit(signal: 'closed', is_error: boolean): void;
            connect(signal: 'opened', callback: (_source: this) => void): number;
            connect_after(signal: 'opened', callback: (_source: this) => void): number;
            emit(signal: 'opened'): void;
            connect(signal: 'seat-added', callback: (_source: this, seat: Seat) => void): number;
            connect_after(signal: 'seat-added', callback: (_source: this, seat: Seat) => void): number;
            emit(signal: 'seat-added', seat: Seat): void;
            connect(signal: 'seat-removed', callback: (_source: this, seat: Seat) => void): number;
            connect_after(signal: 'seat-removed', callback: (_source: this, seat: Seat) => void): number;
            emit(signal: 'seat-removed', seat: Seat): void;
            connect(signal: 'setting-changed', callback: (_source: this, setting: string) => void): number;
            connect_after(signal: 'setting-changed', callback: (_source: this, setting: string) => void): number;
            emit(signal: 'setting-changed', setting: string): void;

            // Static methods

            /**
             * Gets the default `GdkDisplay`.
             *
             * This is a convenience function for:
             *
             *     gdk_display_manager_get_default_display (gdk_display_manager_get ())
             */
            static get_default(): Display | null;
            /**
             * Opens a display.
             *
             * If opening the display fails, `NULL` is returned.
             * @param display_name the name of the display to open
             */
            static open(display_name?: string | null): Display | null;

            // Methods

            /**
             * Emits a short beep on `display`
             */
            beep(): void;
            /**
             * Closes the connection to the windowing system for the given display.
             *
             * This cleans up associated resources.
             */
            close(): void;
            /**
             * Creates a new `GdkGLContext` for the `GdkDisplay`.
             *
             * The context is disconnected from any particular surface or surface
             * and cannot be used to draw to any surface. It can only be used to
             * draw to non-surface framebuffers like textures.
             *
             * If the creation of the `GdkGLContext` failed, `error` will be set.
             * Before using the returned `GdkGLContext`, you will need to
             * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
             * @returns the newly created `GdkGLContext`
             */
            create_gl_context(): GLContext;
            /**
             * Returns %TRUE if there is an ongoing grab on `device` for `display`.
             * @param device a `GdkDevice`
             * @returns %TRUE if there is a grab in effect for @device.
             */
            device_is_grabbed(device: Device): boolean;
            /**
             * Flushes any requests queued for the windowing system.
             *
             * This happens automatically when the main loop blocks waiting for new events,
             * but if your application is drawing without returning control to the main loop,
             * you may need to call this function explicitly. A common case where this function
             * needs to be called is when an application is executing drawing commands
             * from a thread other than the thread where the main loop is running.
             *
             * This is most useful for X11. On windowing systems where requests are
             * handled synchronously, this function will do nothing.
             */
            flush(): void;
            /**
             * Returns a `GdkAppLaunchContext` suitable for launching
             * applications on the given display.
             * @returns a new `GdkAppLaunchContext` for @display
             */
            get_app_launch_context(): AppLaunchContext;
            /**
             * Gets the clipboard used for copy/paste operations.
             * @returns the display's clipboard
             */
            get_clipboard(): Clipboard;
            /**
             * Returns the default `GdkSeat` for this display.
             *
             * Note that a display may not have a seat. In this case,
             * this function will return %NULL.
             * @returns the default seat.
             */
            get_default_seat(): Seat | null;
            /**
             * Returns the dma-buf formats that are supported on this display.
             *
             * GTK may use OpenGL or Vulkan to support some formats.
             * Calling this function will then initialize them if they aren't yet.
             *
             * The formats returned by this function can be used for negotiating
             * buffer formats with producers such as v4l, pipewire or GStreamer.
             *
             * To learn more about dma-bufs, see [class`Gdk`.DmabufTextureBuilder].
             * @returns a `GdkDmabufFormats` object
             */
            get_dmabuf_formats(): DmabufFormats;
            /**
             * Gets the monitor in which the largest area of `surface`
             * resides.
             * @param surface a `GdkSurface`
             * @returns the monitor with the largest   overlap with @surface
             */
            get_monitor_at_surface(surface: Surface): Monitor | null;
            /**
             * Gets the list of monitors associated with this display.
             *
             * Subsequent calls to this function will always return the
             * same list for the same display.
             *
             * You can listen to the GListModel::items-changed signal on
             * this list to monitor changes to the monitor of this display.
             * @returns a `GListModel` of `GdkMonitor`
             */
            get_monitors(): Gio.ListModel;
            /**
             * Gets the name of the display.
             * @returns a string representing the display name. This string is owned   by GDK and should not be modified or freed.
             */
            get_name(): string;
            /**
             * Gets the clipboard used for the primary selection.
             *
             * On backends where the primary clipboard is not supported natively,
             * GDK emulates this clipboard locally.
             * @returns the primary clipboard
             */
            get_primary_clipboard(): Clipboard;
            /**
             * Retrieves a desktop-wide setting such as double-click time
             * for the `display`.
             * @param name the name of the setting
             * @param value location to store the value of the setting
             * @returns %TRUE if the setting existed and a value was stored   in @value, %FALSE otherwise
             */
            get_setting(name: string, value: GObject.Value | any): boolean;
            /**
             * Gets the startup notification ID for a Wayland display, or %NULL
             * if no ID has been defined.
             * @returns the startup notification ID for @display
             */
            get_startup_notification_id(): string | null;
            /**
             * Finds out if the display has been closed.
             * @returns %TRUE if the display is closed.
             */
            is_closed(): boolean;
            /**
             * Returns whether surfaces can reasonably be expected to have
             * their alpha channel drawn correctly on the screen.
             *
             * Check [method`Gdk`.Display.is_rgba] for whether the display
             * supports an alpha channel.
             *
             * On X11 this function returns whether a compositing manager is
             * compositing on `display`.
             *
             * On modern displays, this value is always %TRUE.
             * @returns Whether surfaces with RGBA visuals can reasonably   be expected to have their alpha channels drawn correctly   on the screen.
             */
            is_composited(): boolean;
            /**
             * Returns whether surfaces on this `display` are created with an
             * alpha channel.
             *
             * Even if a %TRUE is returned, it is possible that the
             * surface’s alpha channel won’t be honored when displaying the
             * surface on the screen: in particular, for X an appropriate
             * windowing manager and compositing manager must be running to
             * provide appropriate display. Use [method`Gdk`.Display.is_composited]
             * to check if that is the case.
             *
             * On modern displays, this value is always %TRUE.
             * @returns %TRUE if surfaces are created with an alpha channel or   %FALSE if the display does not support this functionality.
             */
            is_rgba(): boolean;
            /**
             * Returns the list of seats known to `display`.
             * @returns the   list of seats known to the `GdkDisplay`
             */
            list_seats(): Seat[];
            /**
             * Returns the keyvals bound to `keycode`.
             *
             * The Nth `GdkKeymapKey` in `keys` is bound to the Nth keyval in `keyvals`.
             *
             * When a keycode is pressed by the user, the keyval from
             * this list of entries is selected by considering the effective
             * keyboard group and level.
             *
             * Free the returned arrays with g_free().
             * @param keycode a keycode
             * @returns %TRUE if there were any entries
             */
            map_keycode(keycode: number): [boolean, KeymapKey[] | null, number[] | null];
            /**
             * Obtains a list of keycode/group/level combinations that will
             * generate `keyval`.
             *
             * Groups and levels are two kinds of keyboard mode; in general, the level
             * determines whether the top or bottom symbol on a key is used, and the
             * group determines whether the left or right symbol is used.
             *
             * On US keyboards, the shift key changes the keyboard level, and there
             * are no groups. A group switch key might convert a keyboard between
             * Hebrew to English modes, for example.
             *
             * `GdkEventKey` contains a %group field that indicates the active
             * keyboard group. The level is computed from the modifier mask.
             *
             * The returned array should be freed with g_free().
             * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
             * @returns %TRUE if keys were found and returned
             */
            map_keyval(keyval: number): [boolean, KeymapKey[]];
            /**
             * Indicates to the GUI environment that the application has
             * finished loading, using a given identifier.
             *
             * GTK will call this function automatically for [GtkWindow](../gtk4/class.Window.html)
             * with custom startup-notification identifier unless
             * [gtk_window_set_auto_startup_notification()](../gtk4/method.Window.set_auto_startup_notification.html)
             * is called to disable that feature.
             * @param startup_id a startup-notification identifier, for which   notification process should be completed
             */
            notify_startup_complete(startup_id: string): void;
            /**
             * Checks that OpenGL is available for `self` and ensures that it is
             * properly initialized.
             * When this fails, an `error` will be set describing the error and this
             * function returns %FALSE.
             *
             * Note that even if this function succeeds, creating a `GdkGLContext`
             * may still fail.
             *
             * This function is idempotent. Calling it multiple times will just
             * return the same value or error.
             *
             * You never need to call this function, GDK will call it automatically
             * as needed. But you can use it as a check when setting up code that
             * might make use of OpenGL.
             * @returns %TRUE if the display supports OpenGL
             */
            prepare_gl(): boolean;
            /**
             * Adds the given event to the event queue for `display`.
             * @param event a `GdkEvent`
             */
            put_event(event: Event): void;
            /**
             * Returns %TRUE if the display supports input shapes.
             *
             * This means that [method`Gdk`.Surface.set_input_region] can
             * be used to modify the input shape of surfaces on `display`.
             *
             * On modern displays, this value is always %TRUE.
             * @returns %TRUE if surfaces with modified input shape are supported
             */
            supports_input_shapes(): boolean;
            /**
             * Returns whether it's possible for a surface to draw outside of the window area.
             *
             * If %TRUE is returned the application decides if it wants to draw shadows.
             * If %FALSE is returned, the compositor decides if it wants to draw shadows.
             * @returns %TRUE if surfaces can draw shadows or   %FALSE if the display does not support this functionality.
             */
            supports_shadow_width(): boolean;
            /**
             * Flushes any requests queued for the windowing system and waits until all
             * requests have been handled.
             *
             * This is often used for making sure that the display is synchronized
             * with the current state of the program. Calling [method`Gdk`.Display.sync]
             * before [method`GdkX1`1.Display.error_trap_pop] makes sure that any errors
             * generated from earlier requests are handled before the error trap is removed.
             *
             * This is most useful for X11. On windowing systems where requests are
             * handled synchronously, this function will do nothing.
             */
            sync(): void;
            /**
             * Translates the contents of a `GdkEventKey` into a keyval, effective group,
             * and level.
             *
             * Modifiers that affected the translation and are thus unavailable for
             * application use are returned in `consumed_modifiers`.
             *
             * The `effective_group` is the group that was actually used for the
             * translation; some keys such as Enter are not affected by the active
             * keyboard group. The `level` is derived from `state`.
             *
             * `consumed_modifiers` gives modifiers that should be masked out
             * from `state` when comparing this key press to a keyboard shortcut.
             * For instance, on a US keyboard, the `plus` symbol is shifted, so
             * when comparing a key press to a `<Control>plus` accelerator `<Shift>`
             * should be masked out.
             *
             * This function should rarely be needed, since `GdkEventKey` already
             * contains the translated keyval. It is exported for the benefit of
             * virtualized test environments.
             * @param keycode a keycode
             * @param state a modifier state
             * @param group active keyboard group
             * @returns %TRUE if there was a keyval bound to keycode/state/group.
             */
            translate_key(
                keycode: number,
                state: ModifierType,
                group: number,
            ): [boolean, number, number, number, ModifierType | null];
        }

        module DisplayManager {
            // Signal callback interfaces

            interface DisplayOpened {
                (display: Display): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                default_display: Display;
                defaultDisplay: Display;
            }
        }

        /**
         * A singleton object that offers notification when displays appear or
         * disappear.
         *
         * You can use [func`Gdk`.DisplayManager.get] to obtain the `GdkDisplayManager`
         * singleton, but that should be rarely necessary. Typically, initializing
         * GTK opens a display that you can work with without ever accessing the
         * `GdkDisplayManager`.
         *
         * The GDK library can be built with support for multiple backends.
         * The `GdkDisplayManager` object determines which backend is used
         * at runtime.
         *
         * In the rare case that you need to influence which of the backends
         * is being used, you can use [func`Gdk`.set_allowed_backends]. Note
         * that you need to call this function before initializing GTK.
         *
         * ## Backend-specific code
         *
         * When writing backend-specific code that is supposed to work with
         * multiple GDK backends, you have to consider both compile time and
         * runtime. At compile time, use the `GDK_WINDOWING_X11`, `GDK_WINDOWING_WIN32`
         * macros, etc. to find out which backends are present in the GDK library
         * you are building your application against. At runtime, use type-check
         * macros like GDK_IS_X11_DISPLAY() to find out which backend is in use:
         *
         * ```c
         * #ifdef GDK_WINDOWING_X11
         *   if (GDK_IS_X11_DISPLAY (display))
         *     {
         *       // make X11-specific calls here
         *     }
         *   else
         * #endif
         * #ifdef GDK_WINDOWING_MACOS
         *   if (GDK_IS_MACOS_DISPLAY (display))
         *     {
         *       // make Quartz-specific calls here
         *     }
         *   else
         * #endif
         *   g_error ("Unsupported GDK backend");
         * ```
         */
        class DisplayManager extends GObject.Object {
            static $gtype: GObject.GType<DisplayManager>;

            // Properties

            /**
             * The default display.
             */
            get default_display(): Display;
            set default_display(val: Display);
            /**
             * The default display.
             */
            get defaultDisplay(): Display;
            set defaultDisplay(val: Display);

            // Constructors

            constructor(properties?: Partial<DisplayManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'display-opened', callback: (_source: this, display: Display) => void): number;
            connect_after(signal: 'display-opened', callback: (_source: this, display: Display) => void): number;
            emit(signal: 'display-opened', display: Display): void;

            // Static methods

            /**
             * Gets the singleton `GdkDisplayManager` object.
             *
             * When called for the first time, this function consults the
             * `GDK_BACKEND` environment variable to find out which of the
             * supported GDK backends to use (in case GDK has been compiled
             * with multiple backends).
             *
             * Applications can use [func`set_allowed_backends]` to limit what
             * backends will be used.
             */
            static get(): DisplayManager;

            // Methods

            /**
             * Gets the default `GdkDisplay`.
             * @returns a `GdkDisplay`
             */
            get_default_display(): Display | null;
            /**
             * List all currently open displays.
             * @returns a newly   allocated `GSList` of `GdkDisplay` objects
             */
            list_displays(): Display[];
            /**
             * Opens a display.
             * @param name the name of the display to open
             * @returns a `GdkDisplay`, or %NULL   if the display could not be opened
             */
            open_display(name?: string | null): Display | null;
            /**
             * Sets `display` as the default display.
             * @param display a `GdkDisplay`
             */
            set_default_display(display: Display): void;
        }

        module DmabufTexture {
            // Constructor properties interface

            interface ConstructorProps
                extends Texture.ConstructorProps,
                    Paintable.ConstructorProps,
                    Gio.Icon.ConstructorProps,
                    Gio.LoadableIcon.ConstructorProps {}
        }

        /**
         * A `GdkTexture` representing a DMA buffer.
         *
         * To create a `GdkDmabufTexture`, use the auxiliary
         * [class`Gdk`.DmabufTextureBuilder] object.
         *
         * Dma-buf textures can only be created on Linux.
         */
        class DmabufTexture extends Texture implements Paintable, Gio.Icon, Gio.LoadableIcon {
            static $gtype: GObject.GType<DmabufTexture>;

            // Constructors

            constructor(properties?: Partial<DmabufTexture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited methods
            /**
             * Compute a concrete size for the `GdkPaintable`.
             *
             * Applies the sizing algorithm outlined in the
             * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
             * to the given `paintable`. See that link for more details.
             *
             * It is not necessary to call this function when both `specified_width`
             * and `specified_height` are known, but it is useful to call this
             * function in GtkWidget:measure implementations to compute the
             * other dimension when only one dimension is given.
             * @param specified_width the width @paintable could be drawn into or   0.0 if unknown
             * @param specified_height the height @paintable could be drawn into or   0.0 if unknown
             * @param default_width the width @paintable would be drawn into if   no other constraints were given
             * @param default_height the height @paintable would be drawn into if   no other constraints were given
             */
            compute_concrete_size(
                specified_width: number,
                specified_height: number,
                default_width: number,
                default_height: number,
            ): [number, number];
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             * @returns An immutable paintable for the current   contents of @paintable
             */
            get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             * @returns The `GdkPaintableFlags` for this paintable
             */
            get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             * @returns the intrinsic aspect ratio of @paintable or 0 if none.
             */
            get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic height of @paintable or 0 if none.
             */
            get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic width of @paintable or 0 if none.
             */
            get_intrinsic_width(): number;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their contents.
             *
             * Unless the contents are invalidated, implementations must guarantee that
             * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
             * it must not call this function.
             */
            invalidate_contents(): void;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their size.
             *
             * As long as the size is not invalidated, `paintable` must return the same
             * values for its intrinsic width, height and aspect ratio.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
             * it must not call this function.
             */
            invalidate_size(): void;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             */
            vfunc_get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             */
            vfunc_get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             */
            vfunc_get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_width(): number;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             * @returns %TRUE if @icon1 is equal to @icon2. %FALSE otherwise.
             */
            equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             * @returns a #guint containing a hash for the @icon, suitable for   use in a #GHashTable or similar data structure.
             */
            hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
             */
            serialize(): GLib.Variant | null;
            /**
             * Generates a textual representation of `icon` that can be used for
             * serialization such as when passing `icon` to a different process or
             * saving it to persistent storage. Use g_icon_new_for_string() to
             * get `icon` back from the returned string.
             *
             * The encoding of the returned string is proprietary to #GIcon except
             * in the following two cases
             *
             * - If `icon` is a #GFileIcon, the returned string is a native path
             *   (such as `/path/to/my icon.png`) without escaping
             *   if the #GFile for `icon` is a native file.  If the file is not
             *   native, the returned string is the result of g_file_get_uri()
             *   (such as `sftp://path/to/my%20icon.png`).
             *
             * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
             *   the encoding is simply the name (such as `network-server`).
             * @returns An allocated NUL-terminated UTF8 string or %NULL if @icon can't be serialized. Use g_free() to free.
             */
            to_string(): string | null;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             */
            vfunc_equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             */
            vfunc_hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             */
            vfunc_serialize(): GLib.Variant | null;
            /**
             * Serializes the `icon` into string tokens.
             * This is can be invoked when g_icon_new_for_string() is called.
             */
            vfunc_to_tokens(): [boolean, string[], number];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns a #GInputStream to read the icon from.
             */
            load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             * @returns a #GInputStream to read the icon from.
             */
            load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             */
            vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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

        module DmabufTextureBuilder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                color_state: ColorState;
                colorState: ColorState;
                display: Display;
                fourcc: number;
                height: number;
                modifier: number;
                n_planes: number;
                nPlanes: number;
                premultiplied: boolean;
                update_region: cairo.Region;
                updateRegion: cairo.Region;
                update_texture: Texture;
                updateTexture: Texture;
                width: number;
            }
        }

        /**
         * `GdkDmabufTextureBuilder` is a builder used to construct [class`Gdk`.Texture]
         * objects from DMA buffers.
         *
         * DMA buffers are commonly called **_dma-bufs_**.
         *
         * DMA buffers are a feature of the Linux kernel to enable efficient buffer and
         * memory sharing between hardware such as codecs, GPUs, displays, cameras and the
         * kernel drivers controlling them. For example, a decoder may want its output to
         * be directly shared with the display server for rendering without a copy.
         *
         * Any device driver which participates in DMA buffer sharing, can do so as either
         * the exporter or importer of buffers (or both).
         *
         * The memory that is shared via DMA buffers is usually stored in non-system memory
         * (maybe in device's local memory or something else not directly accessible by the
         * CPU), and accessing this memory from the CPU may have higher-than-usual overhead.
         *
         * In particular for graphics data, it is not uncommon that data consists of multiple
         * separate blocks of memory, for example one block for each of the red, green and
         * blue channels. These blocks are called **_planes_**. DMA buffers can have up to
         * four planes. Even if the memory is a single block, the data can be organized in
         * multiple planes, by specifying offsets from the beginning of the data.
         *
         * DMA buffers are exposed to user-space as file descriptors allowing to pass them
         * between processes. If a DMA buffer has multiple planes, there is one file
         * descriptor per plane.
         *
         * The format of the data (for graphics data, essentially its colorspace) is described
         * by a 32-bit integer. These format identifiers are defined in the header file `drm_fourcc.h`
         * and commonly referred to as **_fourcc_** values, since they are identified by 4 ASCII
         * characters. Additionally, each DMA buffer has a **_modifier_**, which is a 64-bit integer
         * that describes driver-specific details of the memory layout, such as tiling or compression.
         *
         * For historical reasons, some producers of dma-bufs don't provide an explicit modifier, but
         * instead return `DMA_FORMAT_MOD_INVALID` to indicate that their modifier is **_implicit_**.
         * GTK tries to accommodate this situation by accepting `DMA_FORMAT_MOD_INVALID` as modifier.
         *
         * The operation of `GdkDmabufTextureBuilder` is quite simple: Create a texture builder,
         * set all the necessary properties, and then call [method`Gdk`.DmabufTextureBuilder.build]
         * to create the new texture.
         *
         * The required properties for a dma-buf texture are
         *
         *  * The width and height in pixels
         *
         *  * The `fourcc` code and `modifier` which identify the format and memory layout of the dma-buf
         *
         *  * The file descriptor, offset and stride for each of the planes
         *
         * `GdkDmabufTextureBuilder` can be used for quick one-shot construction of
         * textures as well as kept around and reused to construct multiple textures.
         *
         * For further information, see
         *
         * * The Linux kernel [documentation](https://docs.kernel.org/driver-api/dma-buf.html)
         *
         * * The header file [drm_fourcc.h](https://gitlab.freedesktop.org/mesa/drm/-/blob/main/include/drm/drm_fourcc.h)
         */
        class DmabufTextureBuilder extends GObject.Object {
            static $gtype: GObject.GType<DmabufTextureBuilder>;

            // Properties

            /**
             * The color state of the texture.
             */
            get color_state(): ColorState;
            set color_state(val: ColorState);
            /**
             * The color state of the texture.
             */
            get colorState(): ColorState;
            set colorState(val: ColorState);
            /**
             * The display that this texture will be used on.
             */
            get display(): Display;
            set display(val: Display);
            /**
             * The format of the texture, as a fourcc value.
             */
            get fourcc(): number;
            set fourcc(val: number);
            /**
             * The height of the texture.
             */
            get height(): number;
            set height(val: number);
            /**
             * The modifier.
             */
            get modifier(): number;
            set modifier(val: number);
            /**
             * The number of planes of the texture.
             *
             * Note that you can set properties for other planes,
             * but they will be ignored when constructing the texture.
             */
            get n_planes(): number;
            set n_planes(val: number);
            /**
             * The number of planes of the texture.
             *
             * Note that you can set properties for other planes,
             * but they will be ignored when constructing the texture.
             */
            get nPlanes(): number;
            set nPlanes(val: number);
            /**
             * Whether the alpha channel is premultiplied into the others.
             *
             * Only relevant if the format has alpha.
             */
            get premultiplied(): boolean;
            set premultiplied(val: boolean);
            /**
             * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
             */
            get update_region(): cairo.Region;
            set update_region(val: cairo.Region);
            /**
             * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
             */
            get updateRegion(): cairo.Region;
            set updateRegion(val: cairo.Region);
            /**
             * The texture [property`Gdk`.DmabufTextureBuilder:update-region] is an update for.
             */
            get update_texture(): Texture;
            set update_texture(val: Texture);
            /**
             * The texture [property`Gdk`.DmabufTextureBuilder:update-region] is an update for.
             */
            get updateTexture(): Texture;
            set updateTexture(val: Texture);
            /**
             * The width of the texture.
             */
            get width(): number;
            set width(val: number);

            // Constructors

            constructor(properties?: Partial<DmabufTextureBuilder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DmabufTextureBuilder;

            // Methods

            /**
             * Builds a new `GdkTexture` with the values set up in the builder.
             *
             * It is a programming error to call this function if any mandatory property has not been set.
             *
             * Not all formats defined in the `drm_fourcc.h` header are supported. You can use
             * [method`Gdk`.Display.get_dmabuf_formats] to get a list of supported formats. If the
             * format is not supported by GTK, %NULL will be returned and `error` will be set.
             *
             * The `destroy` function gets called when the returned texture gets released.
             *
             * It is the responsibility of the caller to keep the file descriptors for the planes
             * open until the created texture is no longer used, and close them afterwards (possibly
             * using the `destroy` notify).
             *
             * It is possible to call this function multiple times to create multiple textures,
             * possibly with changing properties in between.
             * @param destroy destroy function to be called when the texture is   released
             * @param data user data to pass to the destroy function
             * @returns a newly built `GdkTexture` or `NULL`   if the format is not supported
             */
            build(destroy?: GLib.DestroyNotify | null, data?: any | null): Texture | null;
            /**
             * Gets the color state previously set via gdk_dmabuf_texture_builder_set_color_state().
             * @returns the color state
             */
            get_color_state(): ColorState | null;
            /**
             * Returns the display that this texture builder is
             * associated with.
             * @returns the display
             */
            get_display(): Display;
            /**
             * Gets the file descriptor for a plane.
             * @param plane the plane to get the fd for
             * @returns the file descriptor
             */
            get_fd(plane: number): number;
            /**
             * Gets the format previously set via gdk_dmabuf_texture_builder_set_fourcc()
             * or 0 if the format wasn't set.
             *
             * The format is specified as a fourcc code.
             * @returns The format
             */
            get_fourcc(): number;
            /**
             * Gets the height previously set via gdk_dmabuf_texture_builder_set_height() or
             * 0 if the height wasn't set.
             * @returns The height
             */
            get_height(): number;
            /**
             * Gets the modifier value.
             * @returns the modifier
             */
            get_modifier(): number;
            /**
             * Gets the number of planes.
             * @returns The number of planes
             */
            get_n_planes(): number;
            /**
             * Gets the offset value for a plane.
             * @param plane the plane to get the offset for
             * @returns the offset
             */
            get_offset(plane: number): number;
            /**
             * Whether the data is premultiplied.
             * @returns whether the data is premultiplied
             */
            get_premultiplied(): boolean;
            /**
             * Gets the stride value for a plane.
             * @param plane the plane to get the stride for
             * @returns the stride
             */
            get_stride(plane: number): number;
            /**
             * Gets the region previously set via gdk_dmabuf_texture_builder_set_update_region() or
             * %NULL if none was set.
             * @returns The region
             */
            get_update_region(): cairo.Region | null;
            /**
             * Gets the texture previously set via gdk_dmabuf_texture_builder_set_update_texture() or
             * %NULL if none was set.
             * @returns The texture
             */
            get_update_texture(): Texture | null;
            /**
             * Gets the width previously set via gdk_dmabuf_texture_builder_set_width() or
             * 0 if the width wasn't set.
             * @returns The width
             */
            get_width(): number;
            /**
             * Sets the color state for the texture.
             *
             * By default, the colorstate is `NULL`. In that case, GTK will choose the
             * correct colorstate based on the format.
             * If you don't know what colorstates are, this is probably the right thing.
             * @param color_state a `GdkColorState` or `NULL` to unset the colorstate.
             */
            set_color_state(color_state?: ColorState | null): void;
            /**
             * Sets the display that this texture builder is
             * associated with.
             *
             * The display is used to determine the supported
             * dma-buf formats.
             * @param display the display
             */
            set_display(display: Display): void;
            /**
             * Sets the file descriptor for a plane.
             * @param plane the plane to set the fd for
             * @param fd the file descriptor
             */
            set_fd(plane: number, fd: number): void;
            /**
             * Sets the format of the texture.
             *
             * The format is specified as a fourcc code.
             *
             * The format must be set before calling [method`Gdk`.GLTextureBuilder.build].
             * @param fourcc the texture's format or 0 to unset
             */
            set_fourcc(fourcc: number): void;
            /**
             * Sets the height of the texture.
             *
             * The height must be set before calling [method`Gdk`.GLTextureBuilder.build].
             * @param height the texture's height or 0 to unset
             */
            set_height(height: number): void;
            /**
             * Sets the modifier.
             * @param modifier the modifier value
             */
            set_modifier(modifier: number): void;
            /**
             * Sets the number of planes of the texture.
             * @param n_planes the number of planes
             */
            set_n_planes(n_planes: number): void;
            /**
             * Sets the offset for a plane.
             * @param plane the plane to set the offset for
             * @param offset the offset value
             */
            set_offset(plane: number, offset: number): void;
            /**
             * Sets whether the data is premultiplied.
             *
             * Unless otherwise specified, all formats including alpha channels are assumed
             * to be premultiplied.
             * @param premultiplied whether the data is premultiplied
             */
            set_premultiplied(premultiplied: boolean): void;
            /**
             * Sets the stride for a plane.
             *
             * The stride must be set for all planes before calling [method`Gdk`.GLTextureBuilder.build].
             * @param plane the plane to set the stride for
             * @param stride the stride value
             */
            set_stride(plane: number, stride: number): void;
            /**
             * Sets the region to be updated by this texture. Together with
             * [property`Gdk`.DmabufTextureBuilder:update-texture] this describes an
             * update of a previous texture.
             *
             * When rendering animations of large textures, it is possible that
             * consecutive textures are only updating contents in parts of the texture.
             * It is then possible to describe this update via these two properties,
             * so that GTK can avoid rerendering parts that did not change.
             *
             * An example would be a screen recording where only the mouse pointer moves.
             * @param region the region to update
             */
            set_update_region(region?: cairo.Region | null): void;
            /**
             * Sets the texture to be updated by this texture. See
             * [method`Gdk`.DmabufTextureBuilder.set_update_region] for an explanation.
             * @param texture the texture to update
             */
            set_update_texture(texture?: Texture | null): void;
            /**
             * Sets the width of the texture.
             *
             * The width must be set before calling [method`Gdk`.GLTextureBuilder.build].
             * @param width The texture's width or 0 to unset
             */
            set_width(width: number): void;
        }

        module Drag {
            // Signal callback interfaces

            interface Cancel {
                (reason: DragCancelReason): void;
            }

            interface DndFinished {
                (): void;
            }

            interface DropPerformed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                actions: DragAction;
                content: ContentProvider;
                device: Device;
                display: Display;
                formats: ContentFormats;
                selected_action: DragAction;
                selectedAction: DragAction;
                surface: Surface;
            }
        }

        /**
         * The `GdkDrag` object represents the source of an ongoing DND operation.
         *
         * A `GdkDrag` is created when a drag is started, and stays alive for duration of
         * the DND operation. After a drag has been started with [func`Gdk`.Drag.begin],
         * the caller gets informed about the status of the ongoing drag operation
         * with signals on the `GdkDrag` object.
         *
         * GTK provides a higher level abstraction based on top of these functions,
         * and so they are not normally needed in GTK applications. See the
         * "Drag and Drop" section of the GTK documentation for more information.
         */
        abstract class Drag extends GObject.Object {
            static $gtype: GObject.GType<Drag>;

            // Properties

            /**
             * The possible actions of this drag.
             */
            get actions(): DragAction;
            set actions(val: DragAction);
            /**
             * The `GdkContentProvider`.
             */
            get content(): ContentProvider;
            /**
             * The `GdkDevice` that is performing the drag.
             */
            get device(): Device;
            /**
             * The `GdkDisplay` that the drag belongs to.
             */
            get display(): Display;
            /**
             * The possible formats that the drag can provide its data in.
             */
            get formats(): ContentFormats;
            /**
             * The currently selected action of the drag.
             */
            get selected_action(): DragAction;
            set selected_action(val: DragAction);
            /**
             * The currently selected action of the drag.
             */
            get selectedAction(): DragAction;
            set selectedAction(val: DragAction);
            /**
             * The surface where the drag originates.
             */
            get surface(): Surface;

            // Constructors

            constructor(properties?: Partial<Drag.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cancel', callback: (_source: this, reason: DragCancelReason) => void): number;
            connect_after(signal: 'cancel', callback: (_source: this, reason: DragCancelReason) => void): number;
            emit(signal: 'cancel', reason: DragCancelReason): void;
            connect(signal: 'dnd-finished', callback: (_source: this) => void): number;
            connect_after(signal: 'dnd-finished', callback: (_source: this) => void): number;
            emit(signal: 'dnd-finished'): void;
            connect(signal: 'drop-performed', callback: (_source: this) => void): number;
            connect_after(signal: 'drop-performed', callback: (_source: this) => void): number;
            emit(signal: 'drop-performed'): void;

            // Static methods

            /**
             * Starts a drag and creates a new drag context for it.
             *
             * This function is called by the drag source. After this call, you
             * probably want to set up the drag icon using the surface returned
             * by [method`Gdk`.Drag.get_drag_surface].
             *
             * This function returns a reference to the [class`Gdk`.Drag] object,
             * but GTK keeps its own reference as well, as long as the DND operation
             * is going on.
             *
             * Note: if `actions` include %GDK_ACTION_MOVE, you need to listen for
             * the [signal`Gdk`.Drag::dnd-finished] signal and delete the data at
             * the source if [method`Gdk`.Drag.get_selected_action] returns
             * %GDK_ACTION_MOVE.
             * @param surface the source surface for this drag
             * @param device the device that controls this drag
             * @param content the offered content
             * @param actions the actions supported by this drag
             * @param dx the x offset to @device's position where the drag nominally started
             * @param dy the y offset to @device's position where the drag nominally started
             */
            static begin(
                surface: Surface,
                device: Device,
                content: ContentProvider,
                actions: DragAction,
                dx: number,
                dy: number,
            ): Drag | null;

            // Methods

            /**
             * Informs GDK that the drop ended.
             *
             * Passing %FALSE for `success` may trigger a drag cancellation
             * animation.
             *
             * This function is called by the drag source, and should be the
             * last call before dropping the reference to the `drag`.
             *
             * The `GdkDrag` will only take the first [method`Gdk`.Drag.drop_done]
             * call as effective, if this function is called multiple times,
             * all subsequent calls will be ignored.
             * @param success whether the drag was ultimatively successful
             */
            drop_done(success: boolean): void;
            /**
             * Determines the bitmask of possible actions proposed by the source.
             * @returns the `GdkDragAction` flags
             */
            get_actions(): DragAction;
            /**
             * Returns the `GdkContentProvider` associated to the `GdkDrag` object.
             * @returns The `GdkContentProvider` associated to @drag.
             */
            get_content(): ContentProvider;
            /**
             * Returns the `GdkDevice` associated to the `GdkDrag` object.
             * @returns The `GdkDevice` associated to @drag.
             */
            get_device(): Device;
            /**
             * Gets the `GdkDisplay` that the drag object was created for.
             * @returns a `GdkDisplay`
             */
            get_display(): Display;
            /**
             * Returns the surface on which the drag icon should be rendered
             * during the drag operation.
             *
             * Note that the surface may not be available until the drag operation
             * has begun. GDK will move the surface in accordance with the ongoing
             * drag operation. The surface is owned by `drag` and will be destroyed
             * when the drag operation is over.
             * @returns the drag surface
             */
            get_drag_surface(): Surface | null;
            /**
             * Retrieves the formats supported by this `GdkDrag` object.
             * @returns a `GdkContentFormats`
             */
            get_formats(): ContentFormats;
            /**
             * Determines the action chosen by the drag destination.
             * @returns a `GdkDragAction` value
             */
            get_selected_action(): DragAction;
            /**
             * Returns the `GdkSurface` where the drag originates.
             * @returns The `GdkSurface` where the drag originates
             */
            get_surface(): Surface;
            /**
             * Sets the position of the drag surface that will be kept
             * under the cursor hotspot.
             *
             * Initially, the hotspot is at the top left corner of the drag surface.
             * @param hot_x x coordinate of the drag surface hotspot
             * @param hot_y y coordinate of the drag surface hotspot
             */
            set_hotspot(hot_x: number, hot_y: number): void;
        }

        module DrawContext {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display: Display;
                surface: Surface;
            }
        }

        /**
         * Base class for objects implementing different rendering methods.
         *
         * `GdkDrawContext` is the base object used by contexts implementing different
         * rendering methods, such as [class`Gdk`.CairoContext] or [class`Gdk`.GLContext].
         * It provides shared functionality between those contexts.
         *
         * You will always interact with one of those subclasses.
         *
         * A `GdkDrawContext` is always associated with a single toplevel surface.
         */
        abstract class DrawContext extends GObject.Object {
            static $gtype: GObject.GType<DrawContext>;

            // Properties

            /**
             * The `GdkDisplay` used to create the `GdkDrawContext`.
             */
            get display(): Display;
            /**
             * The `GdkSurface` the context is bound to.
             */
            get surface(): Surface;

            // Constructors

            constructor(properties?: Partial<DrawContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Indicates that you are beginning the process of redrawing `region`
             * on the `context'`s surface.
             *
             * Calling this function begins a drawing operation using `context` on the
             * surface that `context` was created from. The actual requirements and
             * guarantees for the drawing operation vary for different implementations
             * of drawing, so a [class`Gdk`.CairoContext] and a [class`Gdk`.GLContext]
             * need to be treated differently.
             *
             * A call to this function is a requirement for drawing and must be
             * followed by a call to [method`Gdk`.DrawContext.end_frame], which will
             * complete the drawing operation and ensure the contents become visible
             * on screen.
             *
             * Note that the `region` passed to this function is the minimum region that
             * needs to be drawn and depending on implementation, windowing system and
             * hardware in use, it might be necessary to draw a larger region. Drawing
             * implementation must use [method`Gdk`.DrawContext.get_frame_region] to
             * query the region that must be drawn.
             *
             * When using GTK, the widget system automatically places calls to
             * gdk_draw_context_begin_frame() and gdk_draw_context_end_frame() via the
             * use of [GskRenderer](../gsk4/class.Renderer.html)s, so application code
             * does not need to call these functions explicitly.
             * @param region minimum region that should be drawn
             */
            begin_frame(region: cairo.Region): void;
            /**
             * Ends a drawing operation started with gdk_draw_context_begin_frame().
             *
             * This makes the drawing available on screen.
             * See [method`Gdk`.DrawContext.begin_frame] for more details about drawing.
             *
             * When using a [class`Gdk`.GLContext], this function may call `glFlush()`
             * implicitly before returning; it is not recommended to call `glFlush()`
             * explicitly before calling this function.
             */
            end_frame(): void;
            /**
             * Retrieves the `GdkDisplay` the `context` is created for
             * @returns the `GdkDisplay`
             */
            get_display(): Display | null;
            /**
             * Retrieves the region that is currently being repainted.
             *
             * After a call to [method`Gdk`.DrawContext.begin_frame] this function will
             * return a union of the region passed to that function and the area of the
             * surface that the `context` determined needs to be repainted.
             *
             * If `context` is not in between calls to [method`Gdk`.DrawContext.begin_frame]
             * and [method`Gdk`.DrawContext.end_frame], %NULL will be returned.
             * @returns a Cairo region
             */
            get_frame_region(): cairo.Region | null;
            /**
             * Retrieves the surface that `context` is bound to.
             * @returns a `GdkSurface`
             */
            get_surface(): Surface | null;
            /**
             * Returns %TRUE if `context` is in the process of drawing to its surface.
             *
             * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
             * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
             * may be effecting the contents of the `context'`s surface.
             * @returns %TRUE if the context is between [method@Gdk.DrawContext.begin_frame]   and [method@Gdk.DrawContext.end_frame] calls.
             */
            is_in_frame(): boolean;
        }

        module Drop {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                actions: DragAction;
                device: Device;
                display: Display;
                drag: Drag;
                formats: ContentFormats;
                surface: Surface;
            }
        }

        /**
         * The `GdkDrop` object represents the target of an ongoing DND operation.
         *
         * Possible drop sites get informed about the status of the ongoing drag
         * operation with events of type %GDK_DRAG_ENTER, %GDK_DRAG_LEAVE,
         * %GDK_DRAG_MOTION and %GDK_DROP_START. The `GdkDrop` object can be obtained
         * from these [class`Gdk`.Event] types using [method`Gdk`.DNDEvent.get_drop].
         *
         * The actual data transfer is initiated from the target side via an async
         * read, using one of the `GdkDrop` methods for this purpose:
         * [method`Gdk`.Drop.read_async] or [method`Gdk`.Drop.read_value_async].
         *
         * GTK provides a higher level abstraction based on top of these functions,
         * and so they are not normally needed in GTK applications. See the
         * "Drag and Drop" section of the GTK documentation for more information.
         */
        abstract class Drop extends GObject.Object {
            static $gtype: GObject.GType<Drop>;

            // Properties

            /**
             * The possible actions for this drop
             */
            get actions(): DragAction;
            /**
             * The `GdkDevice` performing the drop
             */
            get device(): Device;
            /**
             * The `GdkDisplay` that the drop belongs to.
             */
            get display(): Display;
            /**
             * The `GdkDrag` that initiated this drop
             */
            get drag(): Drag;
            /**
             * The possible formats that the drop can provide its data in.
             */
            get formats(): ContentFormats;
            /**
             * The `GdkSurface` the drop happens on
             */
            get surface(): Surface;

            // Constructors

            constructor(properties?: Partial<Drop.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Ends the drag operation after a drop.
             *
             * The `action` must be a single action selected from the actions
             * available via [method`Gdk`.Drop.get_actions].
             * @param action the action performed by the destination or 0 if the drop failed
             */
            finish(action: DragAction): void;
            /**
             * Returns the possible actions for this `GdkDrop`.
             *
             * If this value contains multiple actions - i.e.
             * [func`Gdk`.DragAction.is_unique] returns %FALSE for the result -
             * [method`Gdk`.Drop.finish] must choose the action to use when
             * accepting the drop. This will only happen if you passed
             * %GDK_ACTION_ASK as one of the possible actions in
             * [method`Gdk`.Drop.status]. %GDK_ACTION_ASK itself will not
             * be included in the actions returned by this function.
             *
             * This value may change over the lifetime of the [class`Gdk`.Drop]
             * both as a response to source side actions as well as to calls to
             * [method`Gdk`.Drop.status] or [method`Gdk`.Drop.finish]. The source
             * side will not change this value anymore once a drop has started.
             * @returns The possible `GdkDragActions`
             */
            get_actions(): DragAction;
            /**
             * Returns the `GdkDevice` performing the drop.
             * @returns The `GdkDevice` performing the drop.
             */
            get_device(): Device;
            /**
             * Gets the `GdkDisplay` that `self` was created for.
             * @returns a `GdkDisplay`
             */
            get_display(): Display;
            /**
             * If this is an in-app drag-and-drop operation, returns the `GdkDrag`
             * that corresponds to this drop.
             *
             * If it is not, %NULL is returned.
             * @returns the corresponding `GdkDrag`
             */
            get_drag(): Drag | null;
            /**
             * Returns the `GdkContentFormats` that the drop offers the data
             * to be read in.
             * @returns The possible `GdkContentFormats`
             */
            get_formats(): ContentFormats;
            /**
             * Returns the `GdkSurface` performing the drop.
             * @returns The `GdkSurface` performing the drop.
             */
            get_surface(): Surface;
            /**
             * Asynchronously read the dropped data from a `GdkDrop`
             * in a format that complies with one of the mime types.
             * @param mime_types pointer to an array of mime types
             * @param io_priority the I/O priority for the read operation
             * @param cancellable optional `GCancellable` object
             * @param callback a `GAsyncReadyCallback` to call when   the request is satisfied
             */
            read_async(
                mime_types: string[],
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an async drop read operation.
             *
             * Note that you must not use blocking read calls on the returned stream
             * in the GTK thread, since some platforms might require communication with
             * GTK to complete the data transfer. You can use async APIs such as
             * g_input_stream_read_bytes_async().
             *
             * See [method`Gdk`.Drop.read_async].
             * @param result a `GAsyncResult`
             * @returns the `GInputStream`
             */
            read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string];
            /**
             * Asynchronously request the drag operation's contents converted
             * to the given `type`.
             *
             * For local drag-and-drop operations that are available in the given
             * `GType`, the value will be copied directly. Otherwise, GDK will
             * try to use [func`Gdk`.content_deserialize_async] to convert the data.
             * @param type a `GType` to read
             * @param io_priority the I/O priority of the request.
             * @param cancellable optional `GCancellable` object, %NULL to ignore.
             * @param callback callback to call when the request is satisfied
             */
            read_value_async(
                type: GObject.GType,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an async drop read.
             *
             * See [method`Gdk`.Drop.read_value_async].
             * @param result a `GAsyncResult`
             * @returns a `GValue` containing the result.
             */
            read_value_finish(result: Gio.AsyncResult): unknown;
            /**
             * Selects all actions that are potentially supported by the destination.
             *
             * When calling this function, do not restrict the passed in actions to
             * the ones provided by [method`Gdk`.Drop.get_actions]. Those actions may
             * change in the future, even depending on the actions you provide here.
             *
             * The `preferred` action is a hint to the drag-and-drop mechanism about which
             * action to use when multiple actions are possible.
             *
             * This function should be called by drag destinations in response to
             * %GDK_DRAG_ENTER or %GDK_DRAG_MOTION events. If the destination does
             * not yet know the exact actions it supports, it should set any possible
             * actions first and then later call this function again.
             * @param actions Supported actions of the destination, or 0 to indicate    that a drop will not be accepted
             * @param preferred A unique action that's a member of @actions indicating the    preferred action
             */
            status(actions: DragAction, preferred: DragAction): void;
        }

        /**
         * `GdkEvent`s are immutable data structures, created by GDK to
         * represent windowing system events.
         *
         * In GTK applications the events are handled automatically by toplevel
         * widgets and passed on to the event controllers of appropriate widgets,
         * so using `GdkEvent` and its related API is rarely needed.
         */
        abstract class Event {
            static $gtype: GObject.GType<Event>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the relative angle from `event1` to `event2`.
             *
             * The relative angle is the angle between the X axis and the line
             * through both events' positions. The rotation direction for positive
             * angles is from the positive X axis towards the positive Y axis.
             *
             * This assumes that both events have X/Y information.
             * If not, this function returns %FALSE.
             * @param event2 second `GdkEvent`
             * @returns %TRUE if the angle could be calculated.
             */
            _get_angle(event2: Event): [boolean, number];
            /**
             * Returns the point halfway between the events' positions.
             *
             * This assumes that both events have X/Y information.
             * If not, this function returns %FALSE.
             * @param event2 second `GdkEvent`
             * @returns %TRUE if the center could be calculated.
             */
            _get_center(event2: Event): [boolean, number, number];
            /**
             * Returns the distance between the event locations.
             *
             * This assumes that both events have X/Y information.
             * If not, this function returns %FALSE.
             * @param event2 second `GdkEvent`
             * @returns %TRUE if the distance could be calculated.
             */
            _get_distance(event2: Event): [boolean, number];
            /**
             * Extracts all axis values from an event.
             *
             * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
             * on the device tool returned by [method`Gdk`.Event.get_device_tool].
             * @returns %TRUE on success, otherwise %FALSE
             */
            get_axes(): [boolean, number[]];
            /**
             * Extract the axis value for a particular axis use from
             * an event structure.
             *
             * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
             * on the device tool returned by [method`Gdk`.Event.get_device_tool].
             * @param axis_use the axis use to look for
             * @returns %TRUE if the specified axis was found, otherwise %FALSE
             */
            get_axis(axis_use: AxisUse): [boolean, number];
            /**
             * Returns the device of an event.
             * @returns a `GdkDevice`
             */
            get_device(): Device | null;
            /**
             * Returns a `GdkDeviceTool` representing the tool that
             * caused the event.
             *
             * If the was not generated by a device that supports
             * different tools (such as a tablet), this function will
             * return %NULL.
             *
             * Note: the `GdkDeviceTool` will be constant during
             * the application lifetime, if settings must be stored
             * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
             * @returns The current device tool
             */
            get_device_tool(): DeviceTool | null;
            /**
             * Retrieves the display associated to the `event`.
             * @returns a `GdkDisplay`
             */
            get_display(): Display | null;
            /**
             * Returns the event sequence to which the event belongs.
             *
             * Related touch events are connected in a sequence. Other
             * events typically don't have event sequence information.
             * @returns the event sequence that the event belongs to
             */
            get_event_sequence(): EventSequence;
            /**
             * Retrieves the type of the event.
             * @returns a `GdkEvent`Type
             */
            get_event_type(): EventType;
            /**
             * Retrieves the history of the device that `event` is for, as a list of
             * time and coordinates.
             *
             * The history includes positions that are not delivered as separate events
             * to the application because they occurred in the same frame as `event`.
             *
             * Note that only motion and scroll events record history, and motion
             * events do it only if one of the mouse buttons is down, or the device
             * has a tool.
             * @returns an   array of time and coordinates
             */
            get_history(): TimeCoord[] | null;
            /**
             * Returns the modifier state field of an event.
             * @returns the modifier state of @event
             */
            get_modifier_state(): ModifierType;
            /**
             * Returns whether this event is an 'emulated' pointer event.
             *
             * Emulated pointer events typically originate from a touch events.
             * @returns %TRUE if this event is emulated
             */
            get_pointer_emulated(): boolean;
            /**
             * Extract the event surface relative x/y coordinates from an event.
             *
             * This position is in [surface coordinates](coordinates.html).
             * @returns whether the positions were set
             */
            get_position(): [boolean, number, number];
            /**
             * Returns the seat that originated the event.
             * @returns a `GdkSeat`.
             */
            get_seat(): Seat | null;
            /**
             * Extracts the surface associated with an event.
             * @returns The `GdkSurface` associated with the event
             */
            get_surface(): Surface | null;
            /**
             * Returns the timestamp of `event`.
             *
             * Not all events have timestamps. In that case, this function
             * returns %GDK_CURRENT_TIME.
             * @returns timestamp field from @event
             */
            get_time(): number;
            /**
             * Increase the ref count of `event`.
             * @returns @event
             */
            ref(): Event;
            /**
             * Returns whether a `GdkEvent` should trigger a context menu,
             * according to platform conventions.
             *
             * The right mouse button typically triggers context menus.
             * On macOS, Control+left mouse button also triggers.
             *
             * This function should always be used instead of simply checking for
             *
             * ```c
             * event->button == GDK_BUTTON_SECONDARY
             * ```
             * @returns %TRUE if the event should trigger a context menu.
             */
            triggers_context_menu(): boolean;
            /**
             * Decrease the ref count of `event`.
             *
             * If the last reference is dropped, the structure is freed.
             */
            unref(): void;
        }

        /**
         * An event related to a keyboard focus change.
         */
        class FocusEvent extends Event {
            static $gtype: GObject.GType<FocusEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts whether this event is about focus entering or
             * leaving the surface.
             * @returns %TRUE of the focus is entering
             */
            get_in(): boolean;
        }

        module FrameClock {
            // Signal callback interfaces

            interface AfterPaint {
                (): void;
            }

            interface BeforePaint {
                (): void;
            }

            interface FlushEvents {
                (): void;
            }

            interface Layout {
                (): void;
            }

            interface Paint {
                (): void;
            }

            interface ResumeEvents {
                (): void;
            }

            interface Update {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A `GdkFrameClock` tells the application when to update and repaint
         * a surface.
         *
         * This may be synced to the vertical refresh rate of the monitor, for example.
         * Even when the frame clock uses a simple timer rather than a hardware-based
         * vertical sync, the frame clock helps because it ensures everything paints at
         * the same time (reducing the total number of frames).
         *
         * The frame clock can also automatically stop painting when it knows the frames
         * will not be visible, or scale back animation framerates.
         *
         * `GdkFrameClock` is designed to be compatible with an OpenGL-based implementation
         * or with mozRequestAnimationFrame in Firefox, for example.
         *
         * A frame clock is idle until someone requests a frame with
         * [method`Gdk`.FrameClock.request_phase]. At some later point that makes sense
         * for the synchronization being implemented, the clock will process a frame and
         * emit signals for each phase that has been requested. (See the signals of the
         * `GdkFrameClock` class for documentation of the phases.
         * %GDK_FRAME_CLOCK_PHASE_UPDATE and the [signal`Gdk`.FrameClock::update] signal
         * are most interesting for application writers, and are used to update the
         * animations, using the frame time given by [method`Gdk`.FrameClock.get_frame_time].
         *
         * The frame time is reported in microseconds and generally in the same
         * timescale as g_get_monotonic_time(), however, it is not the same
         * as g_get_monotonic_time(). The frame time does not advance during
         * the time a frame is being painted, and outside of a frame, an attempt
         * is made so that all calls to [method`Gdk`.FrameClock.get_frame_time] that
         * are called at a “similar” time get the same value. This means that
         * if different animations are timed by looking at the difference in
         * time between an initial value from [method`Gdk`.FrameClock.get_frame_time]
         * and the value inside the [signal`Gdk`.FrameClock::update] signal of the clock,
         * they will stay exactly synchronized.
         */
        abstract class FrameClock extends GObject.Object {
            static $gtype: GObject.GType<FrameClock>;

            // Constructors

            constructor(properties?: Partial<FrameClock.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'after-paint', callback: (_source: this) => void): number;
            connect_after(signal: 'after-paint', callback: (_source: this) => void): number;
            emit(signal: 'after-paint'): void;
            connect(signal: 'before-paint', callback: (_source: this) => void): number;
            connect_after(signal: 'before-paint', callback: (_source: this) => void): number;
            emit(signal: 'before-paint'): void;
            connect(signal: 'flush-events', callback: (_source: this) => void): number;
            connect_after(signal: 'flush-events', callback: (_source: this) => void): number;
            emit(signal: 'flush-events'): void;
            connect(signal: 'layout', callback: (_source: this) => void): number;
            connect_after(signal: 'layout', callback: (_source: this) => void): number;
            emit(signal: 'layout'): void;
            connect(signal: 'paint', callback: (_source: this) => void): number;
            connect_after(signal: 'paint', callback: (_source: this) => void): number;
            emit(signal: 'paint'): void;
            connect(signal: 'resume-events', callback: (_source: this) => void): number;
            connect_after(signal: 'resume-events', callback: (_source: this) => void): number;
            emit(signal: 'resume-events'): void;
            connect(signal: 'update', callback: (_source: this) => void): number;
            connect_after(signal: 'update', callback: (_source: this) => void): number;
            emit(signal: 'update'): void;

            // Methods

            /**
             * Starts updates for an animation.
             *
             * Until a matching call to [method`Gdk`.FrameClock.end_updating] is made,
             * the frame clock will continually request a new frame with the
             * %GDK_FRAME_CLOCK_PHASE_UPDATE phase. This function may be called multiple
             * times and frames will be requested until gdk_frame_clock_end_updating()
             * is called the same number of times.
             */
            begin_updating(): void;
            /**
             * Stops updates for an animation.
             *
             * See the documentation for [method`Gdk`.FrameClock.begin_updating].
             */
            end_updating(): void;
            /**
             * Gets the frame timings for the current frame.
             * @returns the `GdkFrameTimings` for the   frame currently being processed, or even no frame is being   processed, for the previous frame. Before any frames have been   processed, returns %NULL.
             */
            get_current_timings(): FrameTimings | null;
            /**
             * Calculates the current frames-per-second, based on the
             * frame timings of `frame_clock`.
             * @returns the current fps, as a `double`
             */
            get_fps(): number;
            /**
             * `GdkFrameClock` maintains a 64-bit counter that increments for
             * each frame drawn.
             * @returns inside frame processing, the value of the frame counter   for the current frame. Outside of frame processing, the frame   counter for the last frame.
             */
            get_frame_counter(): number;
            /**
             * Gets the time that should currently be used for animations.
             *
             * Inside the processing of a frame, it’s the time used to compute the
             * animation position of everything in a frame. Outside of a frame, it's
             * the time of the conceptual “previous frame,” which may be either
             * the actual previous frame time, or if that’s too old, an updated
             * time.
             * @returns a timestamp in microseconds, in the timescale of  of g_get_monotonic_time().
             */
            get_frame_time(): number;
            /**
             * Returns the frame counter for the oldest frame available in history.
             *
             * `GdkFrameClock` internally keeps a history of `GdkFrameTimings`
             * objects for recent frames that can be retrieved with
             * [method`Gdk`.FrameClock.get_timings]. The set of stored frames
             * is the set from the counter values given by
             * [method`Gdk`.FrameClock.get_history_start] and
             * [method`Gdk`.FrameClock.get_frame_counter], inclusive.
             * @returns the frame counter value for the oldest frame  that is available in the internal frame history of the  `GdkFrameClock`
             */
            get_history_start(): number;
            /**
             * Predicts a presentation time, based on history.
             *
             * Using the frame history stored in the frame clock, finds the last
             * known presentation time and refresh interval, and assuming that
             * presentation times are separated by the refresh interval,
             * predicts a presentation time that is a multiple of the refresh
             * interval after the last presentation time, and later than `base_time`.
             * @param base_time base time for determining a presentaton time
             */
            get_refresh_info(base_time: number): [number, number];
            /**
             * Retrieves a `GdkFrameTimings` object holding timing information
             * for the current frame or a recent frame.
             *
             * The `GdkFrameTimings` object may not yet be complete: see
             * [method`Gdk`.FrameTimings.get_complete] and
             * [method`Gdk`.FrameClock.get_history_start].
             * @param frame_counter the frame counter value identifying the frame to  be received
             * @returns the `GdkFrameTimings` object   for the specified frame, or %NULL if it is not available
             */
            get_timings(frame_counter: number): FrameTimings | null;
            /**
             * Asks the frame clock to run a particular phase.
             *
             * The signal corresponding the requested phase will be emitted the next
             * time the frame clock processes. Multiple calls to
             * gdk_frame_clock_request_phase() will be combined together
             * and only one frame processed. If you are displaying animated
             * content and want to continually request the
             * %GDK_FRAME_CLOCK_PHASE_UPDATE phase for a period of time,
             * you should use [method`Gdk`.FrameClock.begin_updating] instead,
             * since this allows GTK to adjust system parameters to get maximally
             * smooth animations.
             * @param phase the phase that is requested
             */
            request_phase(phase: FrameClockPhase): void;
        }

        module GLContext {
            // Constructor properties interface

            interface ConstructorProps extends DrawContext.ConstructorProps {
                allowed_apis: GLAPI;
                allowedApis: GLAPI;
                api: GLAPI;
                shared_context: GLContext;
                sharedContext: GLContext;
            }
        }

        /**
         * `GdkGLContext` is an object representing a platform-specific
         * OpenGL draw context.
         *
         * `GdkGLContext`s are created for a surface using
         * [method`Gdk`.Surface.create_gl_context], and the context will match
         * the characteristics of the surface.
         *
         * A `GdkGLContext` is not tied to any particular normal framebuffer.
         * For instance, it cannot draw to the surface back buffer. The GDK
         * repaint system is in full control of the painting to that. Instead,
         * you can create render buffers or textures and use [func`cairo_draw_from_gl]`
         * in the draw function of your widget to draw them. Then GDK will handle
         * the integration of your rendering with that of other widgets.
         *
         * Support for `GdkGLContext` is platform-specific and context creation
         * can fail, returning %NULL context.
         *
         * A `GdkGLContext` has to be made "current" in order to start using
         * it, otherwise any OpenGL call will be ignored.
         *
         * ## Creating a new OpenGL context
         *
         * In order to create a new `GdkGLContext` instance you need a `GdkSurface`,
         * which you typically get during the realize call of a widget.
         *
         * A `GdkGLContext` is not realized until either [method`Gdk`.GLContext.make_current]
         * or [method`Gdk`.GLContext.realize] is called. It is possible to specify
         * details of the GL context like the OpenGL version to be used, or whether
         * the GL context should have extra state validation enabled after calling
         * [method`Gdk`.Surface.create_gl_context] by calling [method`Gdk`.GLContext.realize].
         * If the realization fails you have the option to change the settings of
         * the `GdkGLContext` and try again.
         *
         * ## Using a GdkGLContext
         *
         * You will need to make the `GdkGLContext` the current context before issuing
         * OpenGL calls; the system sends OpenGL commands to whichever context is current.
         * It is possible to have multiple contexts, so you always need to ensure that
         * the one which you want to draw with is the current one before issuing commands:
         *
         * ```c
         * gdk_gl_context_make_current (context);
         * ```
         *
         * You can now perform your drawing using OpenGL commands.
         *
         * You can check which `GdkGLContext` is the current one by using
         * [func`Gdk`.GLContext.get_current]; you can also unset any `GdkGLContext`
         * that is currently set by calling [func`Gdk`.GLContext.clear_current].
         */
        abstract class GLContext extends DrawContext {
            static $gtype: GObject.GType<GLContext>;

            // Properties

            /**
             * The allowed APIs.
             */
            get allowed_apis(): GLAPI;
            set allowed_apis(val: GLAPI);
            /**
             * The allowed APIs.
             */
            get allowedApis(): GLAPI;
            set allowedApis(val: GLAPI);
            /**
             * The API currently in use.
             */
            get api(): GLAPI;
            /**
             * Always %NULL
             *
             * As many contexts can share data now and no single shared context exists
             * anymore, this function has been deprecated and now always returns %NULL.
             */
            get shared_context(): GLContext;
            /**
             * Always %NULL
             *
             * As many contexts can share data now and no single shared context exists
             * anymore, this function has been deprecated and now always returns %NULL.
             */
            get sharedContext(): GLContext;

            // Constructors

            constructor(properties?: Partial<GLContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Clears the current `GdkGLContext`.
             *
             * Any OpenGL call after this function returns will be ignored
             * until [method`Gdk`.GLContext.make_current] is called.
             */
            static clear_current(): void;
            /**
             * Retrieves the current `GdkGLContext`.
             */
            static get_current(): GLContext | null;

            // Methods

            /**
             * Gets the allowed APIs set via gdk_gl_context_set_allowed_apis().
             * @returns the allowed APIs
             */
            get_allowed_apis(): GLAPI;
            /**
             * Gets the API currently in use.
             *
             * If the renderer has not been realized yet, 0 is returned.
             * @returns the currently used API
             */
            get_api(): GLAPI;
            /**
             * Retrieves whether the context is doing extra validations and runtime checking.
             *
             * See [method`Gdk`.GLContext.set_debug_enabled].
             * @returns %TRUE if debugging is enabled
             */
            get_debug_enabled(): boolean;
            /**
             * Retrieves the display the `context` is created for
             * @returns a `GdkDisplay`
             */
            get_display(): Display | null;
            /**
             * Retrieves whether the context is forward-compatible.
             *
             * See [method`Gdk`.GLContext.set_forward_compatible].
             * @returns %TRUE if the context should be forward-compatible
             */
            get_forward_compatible(): boolean;
            /**
             * Retrieves required OpenGL version set as a requirement for the `context`
             * realization. It will not change even if a greater OpenGL version is supported
             * and used after the `context` is realized. See
             * [method`Gdk`.GLContext.get_version] for the real version in use.
             *
             * See [method`Gdk`.GLContext.set_required_version].
             */
            get_required_version(): [number, number];
            /**
             * Used to retrieves the `GdkGLContext` that this `context` share data with.
             *
             * As many contexts can share data now and no single shared context exists
             * anymore, this function has been deprecated and now always returns %NULL.
             * @returns %NULL
             */
            get_shared_context(): GLContext | null;
            /**
             * Retrieves the surface used by the `context`.
             * @returns a `GdkSurface`
             */
            get_surface(): Surface | null;
            /**
             * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
             * @returns %TRUE if the `GdkGLContext` is using an OpenGL ES profile; %FALSE if other profile is in use of if the @context has not yet been realized.
             */
            get_use_es(): boolean;
            /**
             * Retrieves the OpenGL version of the `context`.
             *
             * The `context` must be realized prior to calling this function.
             */
            get_version(): [number, number];
            /**
             * Whether the `GdkGLContext` is in legacy mode or not.
             *
             * The `GdkGLContext` must be realized before calling this function.
             *
             * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
             * profile; this profile removes all the OpenGL API that was deprecated
             * prior to the 3.2 version of the specification. If the realization is
             * successful, this function will return %FALSE.
             *
             * If the underlying OpenGL implementation does not support core profiles,
             * GDK will fall back to a pre-3.2 compatibility profile, and this function
             * will return %TRUE.
             *
             * You can use the value returned by this function to decide which kind
             * of OpenGL API to use, or whether to do extension discovery, or what
             * kind of shader programs to load.
             * @returns %TRUE if the GL context is in legacy mode
             */
            is_legacy(): boolean;
            /**
             * Checks if the two GL contexts can share resources.
             *
             * When they can, the texture IDs from `other` can be used in `self`. This
             * is particularly useful when passing `GdkGLTexture` objects between
             * different contexts.
             *
             * Contexts created for the same display with the same properties will
             * always be compatible, even if they are created for different surfaces.
             * For other contexts it depends on the GL backend.
             *
             * Both contexts must be realized for this check to succeed. If either one
             * is not, this function will return %FALSE.
             * @param other the `GdkGLContext` that should be compatible with @self
             * @returns %TRUE if the two GL contexts are compatible.
             */
            is_shared(other: GLContext): boolean;
            /**
             * Makes the `context` the current one.
             */
            make_current(): void;
            /**
             * Realizes the given `GdkGLContext`.
             *
             * It is safe to call this function on a realized `GdkGLContext`.
             * @returns %TRUE if the context is realized
             */
            realize(): boolean;
            /**
             * Sets the allowed APIs. When gdk_gl_context_realize() is called, only the
             * allowed APIs will be tried. If you set this to 0, realizing will always fail.
             *
             * If you set it on a realized context, the property will not have any effect.
             * It is only relevant during gdk_gl_context_realize().
             *
             * By default, all APIs are allowed.
             * @param apis the allowed APIs
             */
            set_allowed_apis(apis: GLAPI): void;
            /**
             * Sets whether the `GdkGLContext` should perform extra validations and
             * runtime checking.
             *
             * This is useful during development, but has additional overhead.
             *
             * The `GdkGLContext` must not be realized or made current prior to
             * calling this function.
             * @param enabled whether to enable debugging in the context
             */
            set_debug_enabled(enabled: boolean): void;
            /**
             * Sets whether the `GdkGLContext` should be forward-compatible.
             *
             * Forward-compatible contexts must not support OpenGL functionality that
             * has been marked as deprecated in the requested version; non-forward
             * compatible contexts, on the other hand, must support both deprecated and
             * non deprecated functionality.
             *
             * The `GdkGLContext` must not be realized or made current prior to calling
             * this function.
             * @param compatible whether the context should be forward-compatible
             */
            set_forward_compatible(compatible: boolean): void;
            /**
             * Sets the major and minor version of OpenGL to request.
             *
             * Setting `major` and `minor` to zero will use the default values.
             *
             * Setting `major` and `minor` lower than the minimum versions required
             * by GTK will result in the context choosing the minimum version.
             *
             * The `context` must not be realized or made current prior to calling
             * this function.
             * @param major the major version to request
             * @param minor the minor version to request
             */
            set_required_version(major: number, minor: number): void;
            /**
             * Requests that GDK create an OpenGL ES context instead of an OpenGL one.
             *
             * Not all platforms support OpenGL ES.
             *
             * The `context` must not have been realized.
             *
             * By default, GDK will attempt to automatically detect whether the
             * underlying GL implementation is OpenGL or OpenGL ES once the `context`
             * is realized.
             *
             * You should check the return value of [method`Gdk`.GLContext.get_use_es]
             * after calling [method`Gdk`.GLContext.realize] to decide whether to use
             * the OpenGL or OpenGL ES API, extensions, or shaders.
             * @param use_es whether the context should use OpenGL ES instead of OpenGL,   or -1 to allow auto-detection
             */
            set_use_es(use_es: number): void;
        }

        module GLTexture {
            // Constructor properties interface

            interface ConstructorProps
                extends Texture.ConstructorProps,
                    Paintable.ConstructorProps,
                    Gio.Icon.ConstructorProps,
                    Gio.LoadableIcon.ConstructorProps {}
        }

        /**
         * A GdkTexture representing a GL texture object.
         */
        class GLTexture extends Texture implements Paintable, Gio.Icon, Gio.LoadableIcon {
            static $gtype: GObject.GType<GLTexture>;

            // Constructors

            constructor(properties?: Partial<GLTexture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext, id: number, width: number, height: number, data?: any | null): GLTexture;

            // Methods

            /**
             * Releases the GL resources held by a `GdkGLTexture`.
             *
             * The texture contents are still available via the
             * [method`Gdk`.Texture.download] function, after this
             * function has been called.
             */
            release(): void;

            // Inherited methods
            /**
             * Compute a concrete size for the `GdkPaintable`.
             *
             * Applies the sizing algorithm outlined in the
             * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
             * to the given `paintable`. See that link for more details.
             *
             * It is not necessary to call this function when both `specified_width`
             * and `specified_height` are known, but it is useful to call this
             * function in GtkWidget:measure implementations to compute the
             * other dimension when only one dimension is given.
             * @param specified_width the width @paintable could be drawn into or   0.0 if unknown
             * @param specified_height the height @paintable could be drawn into or   0.0 if unknown
             * @param default_width the width @paintable would be drawn into if   no other constraints were given
             * @param default_height the height @paintable would be drawn into if   no other constraints were given
             */
            compute_concrete_size(
                specified_width: number,
                specified_height: number,
                default_width: number,
                default_height: number,
            ): [number, number];
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             * @returns An immutable paintable for the current   contents of @paintable
             */
            get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             * @returns The `GdkPaintableFlags` for this paintable
             */
            get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             * @returns the intrinsic aspect ratio of @paintable or 0 if none.
             */
            get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic height of @paintable or 0 if none.
             */
            get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic width of @paintable or 0 if none.
             */
            get_intrinsic_width(): number;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their contents.
             *
             * Unless the contents are invalidated, implementations must guarantee that
             * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
             * it must not call this function.
             */
            invalidate_contents(): void;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their size.
             *
             * As long as the size is not invalidated, `paintable` must return the same
             * values for its intrinsic width, height and aspect ratio.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
             * it must not call this function.
             */
            invalidate_size(): void;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             */
            vfunc_get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             */
            vfunc_get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             */
            vfunc_get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_width(): number;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             * @returns %TRUE if @icon1 is equal to @icon2. %FALSE otherwise.
             */
            equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             * @returns a #guint containing a hash for the @icon, suitable for   use in a #GHashTable or similar data structure.
             */
            hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
             */
            serialize(): GLib.Variant | null;
            /**
             * Generates a textual representation of `icon` that can be used for
             * serialization such as when passing `icon` to a different process or
             * saving it to persistent storage. Use g_icon_new_for_string() to
             * get `icon` back from the returned string.
             *
             * The encoding of the returned string is proprietary to #GIcon except
             * in the following two cases
             *
             * - If `icon` is a #GFileIcon, the returned string is a native path
             *   (such as `/path/to/my icon.png`) without escaping
             *   if the #GFile for `icon` is a native file.  If the file is not
             *   native, the returned string is the result of g_file_get_uri()
             *   (such as `sftp://path/to/my%20icon.png`).
             *
             * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
             *   the encoding is simply the name (such as `network-server`).
             * @returns An allocated NUL-terminated UTF8 string or %NULL if @icon can't be serialized. Use g_free() to free.
             */
            to_string(): string | null;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             */
            vfunc_equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             */
            vfunc_hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             */
            vfunc_serialize(): GLib.Variant | null;
            /**
             * Serializes the `icon` into string tokens.
             * This is can be invoked when g_icon_new_for_string() is called.
             */
            vfunc_to_tokens(): [boolean, string[], number];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns a #GInputStream to read the icon from.
             */
            load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             * @returns a #GInputStream to read the icon from.
             */
            load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             */
            vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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

        module GLTextureBuilder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                color_state: ColorState;
                colorState: ColorState;
                context: GLContext;
                format: MemoryFormat;
                has_mipmap: boolean;
                hasMipmap: boolean;
                height: number;
                id: number;
                sync: any;
                update_region: cairo.Region;
                updateRegion: cairo.Region;
                update_texture: Texture;
                updateTexture: Texture;
                width: number;
            }
        }

        /**
         * `GdkGLTextureBuilder` is a builder used to construct [class`Gdk`.Texture] objects from
         * GL textures.
         *
         * The operation is quite simple: Create a texture builder, set all the necessary
         * properties - keep in mind that the properties [property`Gdk`.GLTextureBuilder:context],
         * [property`Gdk`.GLTextureBuilder:id], [property`Gdk`.GLTextureBuilder:width], and
         * [property`Gdk`.GLTextureBuilder:height] are mandatory - and then call
         * [method`Gdk`.GLTextureBuilder.build] to create the new texture.
         *
         * `GdkGLTextureBuilder` can be used for quick one-shot construction of
         * textures as well as kept around and reused to construct multiple textures.
         */
        class GLTextureBuilder extends GObject.Object {
            static $gtype: GObject.GType<GLTextureBuilder>;

            // Properties

            /**
             * The color state of the texture.
             */
            get color_state(): ColorState;
            set color_state(val: ColorState);
            /**
             * The color state of the texture.
             */
            get colorState(): ColorState;
            set colorState(val: ColorState);
            /**
             * The context owning the texture.
             */
            get context(): GLContext;
            set context(val: GLContext);
            /**
             * The format when downloading the texture.
             */
            get format(): MemoryFormat;
            set format(val: MemoryFormat);
            /**
             * If the texture has a mipmap.
             */
            get has_mipmap(): boolean;
            set has_mipmap(val: boolean);
            /**
             * If the texture has a mipmap.
             */
            get hasMipmap(): boolean;
            set hasMipmap(val: boolean);
            /**
             * The height of the texture.
             */
            get height(): number;
            set height(val: number);
            /**
             * The texture ID to use.
             */
            get id(): number;
            set id(val: number);
            /**
             * An optional `GLSync` object.
             *
             * If this is set, GTK will wait on it before using the texture.
             */
            get sync(): any;
            set sync(val: any);
            /**
             * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
             */
            get update_region(): cairo.Region;
            set update_region(val: cairo.Region);
            /**
             * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
             */
            get updateRegion(): cairo.Region;
            set updateRegion(val: cairo.Region);
            /**
             * The texture [property`Gdk`.GLTextureBuilder:update-region] is an update for.
             */
            get update_texture(): Texture;
            set update_texture(val: Texture);
            /**
             * The texture [property`Gdk`.GLTextureBuilder:update-region] is an update for.
             */
            get updateTexture(): Texture;
            set updateTexture(val: Texture);
            /**
             * The width of the texture.
             */
            get width(): number;
            set width(val: number);

            // Constructors

            constructor(properties?: Partial<GLTextureBuilder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GLTextureBuilder;

            // Methods

            /**
             * Builds a new `GdkTexture` with the values set up in the builder.
             *
             * The `destroy` function gets called when the returned texture gets released;
             * either when the texture is finalized or by an explicit call to
             * [method`Gdk`.GLTexture.release]. It should release all GL resources associated
             * with the texture, such as the [property`Gdk`.GLTextureBuilder:id] and the
             * [property`Gdk`.GLTextureBuilder:sync].
             *
             * Note that it is a programming error to call this function if any mandatory
             * property has not been set.
             *
             * It is possible to call this function multiple times to create multiple textures,
             * possibly with changing properties in between.
             * @param destroy destroy function to be called when the texture is   released
             * @param data user data to pass to the destroy function
             * @returns a newly built `GdkTexture`
             */
            build(destroy?: GLib.DestroyNotify | null, data?: any | null): Texture;
            /**
             * Gets the color state previously set via gdk_gl_texture_builder_set_color_state().
             * @returns the color state
             */
            get_color_state(): ColorState;
            /**
             * Gets the context previously set via gdk_gl_texture_builder_set_context() or
             * %NULL if none was set.
             * @returns The context
             */
            get_context(): GLContext | null;
            /**
             * Gets the format previously set via gdk_gl_texture_builder_set_format().
             * @returns The format
             */
            get_format(): MemoryFormat;
            /**
             * Gets whether the texture has a mipmap.
             * @returns Whether the texture has a mipmap
             */
            get_has_mipmap(): boolean;
            /**
             * Gets the height previously set via gdk_gl_texture_builder_set_height() or
             * 0 if the height wasn't set.
             * @returns The height
             */
            get_height(): number;
            /**
             * Gets the texture id previously set via gdk_gl_texture_builder_set_id() or
             * 0 if the id wasn't set.
             * @returns The id
             */
            get_id(): number;
            /**
             * Gets the `GLsync` previously set via gdk_gl_texture_builder_set_sync().
             * @returns the `GLSync`
             */
            get_sync(): any | null;
            /**
             * Gets the region previously set via gdk_gl_texture_builder_set_update_region() or
             * %NULL if none was set.
             * @returns The region
             */
            get_update_region(): cairo.Region | null;
            /**
             * Gets the texture previously set via gdk_gl_texture_builder_set_update_texture() or
             * %NULL if none was set.
             * @returns The texture
             */
            get_update_texture(): Texture | null;
            /**
             * Gets the width previously set via gdk_gl_texture_builder_set_width() or
             * 0 if the width wasn't set.
             * @returns The width
             */
            get_width(): number;
            /**
             * Sets the color state for the texture.
             *
             * By default, the sRGB colorstate is used. If you don't know what
             * colorstates are, this is probably the right thing.
             * @param color_state a `GdkColorState`
             */
            set_color_state(color_state: ColorState): void;
            /**
             * Sets the context to be used for the texture. This is the context that owns
             * the texture.
             *
             * The context must be set before calling [method`Gdk`.GLTextureBuilder.build].
             * @param context The context the texture belongs to or %NULL to unset
             */
            set_context(context?: GLContext | null): void;
            /**
             * Sets the format of the texture. The default is `GDK_MEMORY_R8G8B8A8_PREMULTIPLIED`.
             *
             * The format is the preferred format the texture data should be downloaded to. The
             * format must be supported by the GL version of [property`Gdk`.GLTextureBuilder:context].
             *
             * GDK's texture download code assumes that the format corresponds to the storage
             * parameters of the GL texture in an obvious way. For example, a format of
             * `GDK_MEMORY_R16G16B16A16_PREMULTIPLIED` is expected to be stored as `GL_RGBA16`
             * texture, and `GDK_MEMORY_G8A8` is expected to be stored as `GL_RG8` texture.
             *
             * Setting the right format is particularly useful when using high bit depth textures
             * to preserve the bit depth, to set the correct value for unpremultiplied textures
             * and to make sure opaque textures are treated as such.
             *
             * Non-RGBA textures need to have swizzling parameters set up properly to be usable
             * in GSK's shaders.
             * @param format The texture's format
             */
            set_format(format: MemoryFormat): void;
            /**
             * Sets whether the texture has a mipmap. This allows the renderer and other users of the
             * generated texture to use a higher quality downscaling.
             *
             * Typically, the `glGenerateMipmap` function is used to generate a mimap.
             * @param has_mipmap Whether the texture has a mipmap
             */
            set_has_mipmap(has_mipmap: boolean): void;
            /**
             * Sets the height of the texture.
             *
             * The height must be set before calling [method`Gdk`.GLTextureBuilder.build].
             * @param height The texture's height or 0 to unset
             */
            set_height(height: number): void;
            /**
             * Sets the texture id of the texture. The texture id must remain unmodified
             * until the texture was finalized. See [method`Gdk`.GLTextureBuilder.build]
             * for a longer discussion.
             *
             * The id must be set before calling [method`Gdk`.GLTextureBuilder.build].
             * @param id The texture id to be used for creating the texture
             */
            set_id(id: number): void;
            /**
             * Sets the GLSync object to use for the texture.
             *
             * GTK will wait on this object before using the created `GdkTexture`.
             *
             * The `destroy` function that is passed to [method`Gdk`.GLTextureBuilder.build]
             * is responsible for freeing the sync object when it is no longer needed.
             * The texture builder does not destroy it and it is the callers
             * responsibility to make sure it doesn't leak.
             * @param sync the GLSync object
             */
            set_sync(sync?: any | null): void;
            /**
             * Sets the region to be updated by this texture. Together with
             * [property`Gdk`.GLTextureBuilder:update-texture] this describes an
             * update of a previous texture.
             *
             * When rendering animations of large textures, it is possible that
             * consecutive textures are only updating contents in parts of the texture.
             * It is then possible to describe this update via these two properties,
             * so that GTK can avoid rerendering parts that did not change.
             *
             * An example would be a screen recording where only the mouse pointer moves.
             * @param region the region to update
             */
            set_update_region(region?: cairo.Region | null): void;
            /**
             * Sets the texture to be updated by this texture. See
             * [method`Gdk`.GLTextureBuilder.set_update_region] for an explanation.
             * @param texture the texture to update
             */
            set_update_texture(texture?: Texture | null): void;
            /**
             * Sets the width of the texture.
             *
             * The width must be set before calling [method`Gdk`.GLTextureBuilder.build].
             * @param width The texture's width or 0 to unset
             */
            set_width(width: number): void;
        }

        /**
         * An event related to a broken windowing system grab.
         */
        class GrabBrokenEvent extends Event {
            static $gtype: GObject.GType<GrabBrokenEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts the grab surface from a grab broken event.
             * @returns the grab surface of @event
             */
            get_grab_surface(): Surface;
            /**
             * Checks whether the grab broken event is for an implicit grab.
             * @returns %TRUE if the an implicit grab was broken
             */
            get_implicit(): boolean;
        }

        /**
         * An event related to a key-based device.
         */
        class KeyEvent extends Event {
            static $gtype: GObject.GType<KeyEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts the consumed modifiers from a key event.
             * @returns the consumed modifiers or @event
             */
            get_consumed_modifiers(): ModifierType;
            /**
             * Extracts the keycode from a key event.
             * @returns the keycode of @event
             */
            get_keycode(): number;
            /**
             * Extracts the keyval from a key event.
             * @returns the keyval of @event
             */
            get_keyval(): number;
            /**
             * Extracts the layout from a key event.
             * @returns the layout of @event
             */
            get_layout(): number;
            /**
             * Extracts the shift level from a key event.
             * @returns the shift level of @event
             */
            get_level(): number;
            /**
             * Gets a keyval and modifier combination that will match
             * the event.
             *
             * See [method`Gdk`.KeyEvent.matches].
             * @returns %TRUE on success
             */
            get_match(): [boolean, number, ModifierType];
            /**
             * Extracts whether the key event is for a modifier key.
             * @returns %TRUE if the @event is for a modifier key
             */
            is_modifier(): boolean;
            /**
             * Matches a key event against a keyval and modifiers.
             *
             * This is typically used to trigger keyboard shortcuts such as Ctrl-C.
             *
             * Partial matches are possible where the combination matches
             * if the currently active group is ignored.
             *
             * Note that we ignore Caps Lock for matching.
             * @param keyval the keyval to match
             * @param modifiers the modifiers to match
             * @returns a `GdkKeyMatch` value describing whether @event matches
             */
            matches(keyval: number, modifiers: ModifierType): KeyMatch;
        }

        module MemoryTexture {
            // Constructor properties interface

            interface ConstructorProps
                extends Texture.ConstructorProps,
                    Paintable.ConstructorProps,
                    Gio.Icon.ConstructorProps,
                    Gio.LoadableIcon.ConstructorProps {}
        }

        /**
         * A `GdkTexture` representing image data in memory.
         */
        class MemoryTexture extends Texture implements Paintable, Gio.Icon, Gio.LoadableIcon {
            static $gtype: GObject.GType<MemoryTexture>;

            // Constructors

            constructor(properties?: Partial<MemoryTexture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                width: number,
                height: number,
                format: MemoryFormat,
                bytes: GLib.Bytes | Uint8Array,
                stride: number,
            ): MemoryTexture;

            // Inherited methods
            /**
             * Compute a concrete size for the `GdkPaintable`.
             *
             * Applies the sizing algorithm outlined in the
             * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
             * to the given `paintable`. See that link for more details.
             *
             * It is not necessary to call this function when both `specified_width`
             * and `specified_height` are known, but it is useful to call this
             * function in GtkWidget:measure implementations to compute the
             * other dimension when only one dimension is given.
             * @param specified_width the width @paintable could be drawn into or   0.0 if unknown
             * @param specified_height the height @paintable could be drawn into or   0.0 if unknown
             * @param default_width the width @paintable would be drawn into if   no other constraints were given
             * @param default_height the height @paintable would be drawn into if   no other constraints were given
             */
            compute_concrete_size(
                specified_width: number,
                specified_height: number,
                default_width: number,
                default_height: number,
            ): [number, number];
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             * @returns An immutable paintable for the current   contents of @paintable
             */
            get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             * @returns The `GdkPaintableFlags` for this paintable
             */
            get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             * @returns the intrinsic aspect ratio of @paintable or 0 if none.
             */
            get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic height of @paintable or 0 if none.
             */
            get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic width of @paintable or 0 if none.
             */
            get_intrinsic_width(): number;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their contents.
             *
             * Unless the contents are invalidated, implementations must guarantee that
             * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
             * it must not call this function.
             */
            invalidate_contents(): void;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their size.
             *
             * As long as the size is not invalidated, `paintable` must return the same
             * values for its intrinsic width, height and aspect ratio.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
             * it must not call this function.
             */
            invalidate_size(): void;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             */
            vfunc_get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             */
            vfunc_get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             */
            vfunc_get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_width(): number;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             * @returns %TRUE if @icon1 is equal to @icon2. %FALSE otherwise.
             */
            equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             * @returns a #guint containing a hash for the @icon, suitable for   use in a #GHashTable or similar data structure.
             */
            hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
             */
            serialize(): GLib.Variant | null;
            /**
             * Generates a textual representation of `icon` that can be used for
             * serialization such as when passing `icon` to a different process or
             * saving it to persistent storage. Use g_icon_new_for_string() to
             * get `icon` back from the returned string.
             *
             * The encoding of the returned string is proprietary to #GIcon except
             * in the following two cases
             *
             * - If `icon` is a #GFileIcon, the returned string is a native path
             *   (such as `/path/to/my icon.png`) without escaping
             *   if the #GFile for `icon` is a native file.  If the file is not
             *   native, the returned string is the result of g_file_get_uri()
             *   (such as `sftp://path/to/my%20icon.png`).
             *
             * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
             *   the encoding is simply the name (such as `network-server`).
             * @returns An allocated NUL-terminated UTF8 string or %NULL if @icon can't be serialized. Use g_free() to free.
             */
            to_string(): string | null;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             */
            vfunc_equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             */
            vfunc_hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             */
            vfunc_serialize(): GLib.Variant | null;
            /**
             * Serializes the `icon` into string tokens.
             * This is can be invoked when g_icon_new_for_string() is called.
             */
            vfunc_to_tokens(): [boolean, string[], number];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns a #GInputStream to read the icon from.
             */
            load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             * @returns a #GInputStream to read the icon from.
             */
            load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             */
            vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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

        module MemoryTextureBuilder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                bytes: GLib.Bytes;
                color_state: ColorState;
                colorState: ColorState;
                format: MemoryFormat;
                height: number;
                stride: number;
                update_region: cairo.Region;
                updateRegion: cairo.Region;
                update_texture: Texture;
                updateTexture: Texture;
                width: number;
            }
        }

        /**
         * `GdkMemoryTextureBuilder` is a builder used to construct [class`Gdk`.Texture] objects
         * from system memory provided via [struct`GLib`.Bytes].
         *
         * The operation is quite simple: Create a texture builder, set all the necessary
         * properties - keep in mind that the properties [property`Gdk`.MemoryTextureBuilder:bytes],
         * [property`Gdk`.MemoryTextureBuilder:stride], [property`Gdk`.MemoryTextureBuilder:width],
         * and [property`Gdk`.MemoryTextureBuilder:height] are mandatory - and then call
         * [method`Gdk`.MemoryTextureBuilder.build] to create the new texture.
         *
         * `GdkMemoryTextureBuilder` can be used for quick one-shot construction of
         * textures as well as kept around and reused to construct multiple textures.
         */
        class MemoryTextureBuilder extends GObject.Object {
            static $gtype: GObject.GType<MemoryTextureBuilder>;

            // Properties

            /**
             * The bytes holding the data.
             */
            get bytes(): GLib.Bytes;
            set bytes(val: GLib.Bytes);
            /**
             * The colorstate describing the data.
             */
            get color_state(): ColorState;
            set color_state(val: ColorState);
            /**
             * The colorstate describing the data.
             */
            get colorState(): ColorState;
            set colorState(val: ColorState);
            /**
             * The format of the data.
             */
            get format(): MemoryFormat;
            set format(val: MemoryFormat);
            /**
             * The height of the texture.
             */
            get height(): number;
            set height(val: number);
            /**
             * The rowstride of the texture.
             *
             * The rowstride is the number of bytes between the first pixel
             * in a row of image data, and the first pixel in the next row.
             */
            get stride(): number;
            set stride(val: number);
            /**
             * The update region for [property`Gdk`.MemoryTextureBuilder:update-texture].
             */
            get update_region(): cairo.Region;
            set update_region(val: cairo.Region);
            /**
             * The update region for [property`Gdk`.MemoryTextureBuilder:update-texture].
             */
            get updateRegion(): cairo.Region;
            set updateRegion(val: cairo.Region);
            /**
             * The texture [property`Gdk`.MemoryTextureBuilder:update-region] is an update for.
             */
            get update_texture(): Texture;
            set update_texture(val: Texture);
            /**
             * The texture [property`Gdk`.MemoryTextureBuilder:update-region] is an update for.
             */
            get updateTexture(): Texture;
            set updateTexture(val: Texture);
            /**
             * The width of the texture.
             */
            get width(): number;
            set width(val: number);

            // Constructors

            constructor(properties?: Partial<MemoryTextureBuilder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MemoryTextureBuilder;

            // Methods

            /**
             * Builds a new `GdkTexture` with the values set up in the builder.
             *
             * Note that it is a programming error to call this function if any mandatory
             * property has not been set.
             *
             * It is possible to call this function multiple times to create multiple textures,
             * possibly with changing properties in between.
             * @returns a newly built `GdkTexture`
             */
            build(): Texture;
            /**
             * Gets the bytes previously set via gdk_memory_texture_builder_set_bytes()
             * or %NULL if none was set.
             * @returns The bytes
             */
            get_bytes(): GLib.Bytes | null;
            /**
             * Gets the colorstate previously set via gdk_memory_texture_builder_set_color_state().
             * @returns The colorstate
             */
            get_color_state(): ColorState;
            /**
             * Gets the format previously set via gdk_memory_texture_builder_set_format().
             * @returns The format
             */
            get_format(): MemoryFormat;
            /**
             * Gets the height previously set via gdk_memory_texture_builder_set_height()
             * or 0 if the height wasn't set.
             * @returns The height
             */
            get_height(): number;
            /**
             * Gets the stride previously set via gdk_memory_texture_builder_set_stride().
             * @returns the stride
             */
            get_stride(): number;
            /**
             * Gets the region previously set via gdk_memory_texture_builder_set_update_region()
             * or %NULL if none was set.
             * @returns The update region
             */
            get_update_region(): cairo.Region | null;
            /**
             * Gets the texture previously set via gdk_memory_texture_builder_set_update_texture()
             * or %NULL if none was set.
             * @returns The update texture
             */
            get_update_texture(): Texture | null;
            /**
             * Gets the width previously set via gdk_memory_texture_builder_set_width()
             * or 0 if the width wasn't set.
             * @returns The width
             */
            get_width(): number;
            /**
             * Sets the data to be shown but the texture.
             *
             * The bytes must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
             * @param bytes The bytes the texture shows or %NULL to unset
             */
            set_bytes(bytes?: GLib.Bytes | null): void;
            /**
             * Sets the colorstate describing the data.
             *
             * By default, the sRGB colorstate is used. If you don't know
             * what colorstates are, this is probably the right thing.
             * @param color_state The colorstate describing the data
             */
            set_color_state(color_state?: ColorState | null): void;
            /**
             * Sets the format of the bytes.
             *
             * The default is `GDK_MEMORY_R8G8B8A8_PREMULTIPLIED`.
             * @param format The texture's format
             */
            set_format(format: MemoryFormat): void;
            /**
             * Sets the height of the texture.
             *
             * The height must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
             * @param height The texture's height or 0 to unset
             */
            set_height(height: number): void;
            /**
             * Sets the rowstride of the bytes used.
             *
             * The rowstride must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
             * @param stride the stride or 0 to unset
             */
            set_stride(stride: number): void;
            /**
             * Sets the region to be updated by this texture.
             *
             * Together with [property`Gdk`.MemoryTextureBuilder:update-texture],
             * this describes an update of a previous texture.
             *
             * When rendering animations of large textures, it is possible that
             * consecutive textures are only updating contents in parts of the texture.
             * It is then possible to describe this update via these two properties,
             * so that GTK can avoid rerendering parts that did not change.
             *
             * An example would be a screen recording where only the mouse pointer moves.
             * @param region the region to update
             */
            set_update_region(region?: cairo.Region | null): void;
            /**
             * Sets the texture to be updated by this texture.
             *
             * See [method`Gdk`.MemoryTextureBuilder.set_update_region] for an explanation.
             * @param texture the texture to update
             */
            set_update_texture(texture?: Texture | null): void;
            /**
             * Sets the width of the texture.
             *
             * The width must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
             * @param width The texture's width or 0 to unset
             */
            set_width(width: number): void;
        }

        module Monitor {
            // Signal callback interfaces

            interface Invalidate {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connector: string;
                description: string;
                display: Display;
                geometry: Rectangle;
                height_mm: number;
                heightMm: number;
                manufacturer: string;
                model: string;
                refresh_rate: number;
                refreshRate: number;
                scale: number;
                scale_factor: number;
                scaleFactor: number;
                subpixel_layout: SubpixelLayout;
                subpixelLayout: SubpixelLayout;
                valid: boolean;
                width_mm: number;
                widthMm: number;
            }
        }

        /**
         * `GdkMonitor` objects represent the individual outputs that are
         * associated with a `GdkDisplay`.
         *
         * `GdkDisplay` keeps a `GListModel` to enumerate and monitor
         * monitors with [method`Gdk`.Display.get_monitors]. You can use
         * [method`Gdk`.Display.get_monitor_at_surface] to find a particular
         * monitor.
         */
        class Monitor extends GObject.Object {
            static $gtype: GObject.GType<Monitor>;

            // Properties

            /**
             * The connector name.
             */
            get connector(): string;
            /**
             * A short description of the monitor, meant for display to the user.
             */
            get description(): string;
            /**
             * The `GdkDisplay` of the monitor.
             */
            get display(): Display;
            /**
             * The geometry of the monitor.
             */
            get geometry(): Rectangle;
            /**
             * The height of the monitor, in millimeters.
             */
            get height_mm(): number;
            /**
             * The height of the monitor, in millimeters.
             */
            get heightMm(): number;
            /**
             * The manufacturer name.
             */
            get manufacturer(): string;
            /**
             * The model name.
             */
            get model(): string;
            /**
             * The refresh rate, in milli-Hertz.
             */
            get refresh_rate(): number;
            /**
             * The refresh rate, in milli-Hertz.
             */
            get refreshRate(): number;
            /**
             * The scale of the monitor.
             */
            get scale(): number;
            /**
             * The scale factor.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            get scale_factor(): number;
            /**
             * The scale factor.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            get scaleFactor(): number;
            /**
             * The subpixel layout.
             */
            get subpixel_layout(): SubpixelLayout;
            /**
             * The subpixel layout.
             */
            get subpixelLayout(): SubpixelLayout;
            /**
             * Whether the object is still valid.
             */
            get valid(): boolean;
            /**
             * The width of the monitor, in millimeters.
             */
            get width_mm(): number;
            /**
             * The width of the monitor, in millimeters.
             */
            get widthMm(): number;

            // Constructors

            constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'invalidate', callback: (_source: this) => void): number;
            connect_after(signal: 'invalidate', callback: (_source: this) => void): number;
            emit(signal: 'invalidate'): void;

            // Methods

            /**
             * Gets the name of the monitor's connector, if available.
             *
             * These are strings such as "eDP-1", or "HDMI-2". They depend
             * on software and hardware configuration, and should not be
             * relied on as stable identifiers of a specific monitor.
             * @returns the name of the connector
             */
            get_connector(): string | null;
            /**
             * Gets a string describing the monitor, if available.
             *
             * This can be used to identify a monitor in the UI.
             * @returns the monitor description
             */
            get_description(): string | null;
            /**
             * Gets the display that this monitor belongs to.
             * @returns the display
             */
            get_display(): Display;
            /**
             * Retrieves the size and position of the monitor within the
             * display coordinate space.
             *
             * The returned geometry is in  ”application pixels”, not in
             * ”device pixels” (see [method`Gdk`.Monitor.get_scale]).
             */
            get_geometry(): Rectangle;
            /**
             * Gets the height in millimeters of the monitor.
             * @returns the physical height of the monitor
             */
            get_height_mm(): number;
            /**
             * Gets the name or PNP ID of the monitor's manufacturer.
             *
             * Note that this value might also vary depending on actual
             * display backend.
             *
             * The PNP ID registry is located at
             * [https://uefi.org/pnp_id_list](https://uefi.org/pnp_id_list).
             * @returns the name of the manufacturer
             */
            get_manufacturer(): string | null;
            /**
             * Gets the string identifying the monitor model, if available.
             * @returns the monitor model
             */
            get_model(): string | null;
            /**
             * Gets the refresh rate of the monitor, if available.
             *
             * The value is in milli-Hertz, so a refresh rate of 60Hz
             * is returned as 60000.
             * @returns the refresh rate in milli-Hertz, or 0
             */
            get_refresh_rate(): number;
            /**
             * Gets the internal scale factor that maps from monitor coordinates
             * to device pixels.
             *
             * This can be used if you want to create pixel based data for a
             * particular monitor, but most of the time you’re drawing to a surface
             * where it is better to use [method`Gdk`.Surface.get_scale] instead.
             * @returns the scale
             */
            get_scale(): number;
            /**
             * Gets the internal scale factor that maps from monitor coordinates
             * to device pixels.
             *
             * On traditional systems this is 1, but on very high density outputs
             * it can be a higher value (often 2).
             *
             * This can be used if you want to create pixel based data for a
             * particular monitor, but most of the time you’re drawing to a surface
             * where it is better to use [method`Gdk`.Surface.get_scale_factor] instead.
             * @returns the scale factor
             */
            get_scale_factor(): number;
            /**
             * Gets information about the layout of red, green and blue
             * primaries for pixels.
             * @returns the subpixel layout
             */
            get_subpixel_layout(): SubpixelLayout;
            /**
             * Gets the width in millimeters of the monitor.
             * @returns the physical width of the monitor
             */
            get_width_mm(): number;
            /**
             * Returns %TRUE if the `monitor` object corresponds to a
             * physical monitor.
             *
             * The `monitor` becomes invalid when the physical monitor
             * is unplugged or removed.
             * @returns %TRUE if the object corresponds to a physical monitor
             */
            is_valid(): boolean;
        }

        /**
         * An event related to a pointer or touch device motion.
         */
        class MotionEvent extends Event {
            static $gtype: GObject.GType<MotionEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An event related to a pad-based device.
         */
        class PadEvent extends Event {
            static $gtype: GObject.GType<PadEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts the information from a pad strip or ring event.
             */
            get_axis_value(): [number, number];
            /**
             * Extracts information about the pressed button from
             * a pad event.
             * @returns the button of @event
             */
            get_button(): number;
            /**
             * Extracts group and mode information from a pad event.
             */
            get_group_mode(): [number, number];
        }

        /**
         * An event related to the proximity of a tool to a device.
         */
        class ProximityEvent extends Event {
            static $gtype: GObject.GType<ProximityEvent>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An event related to a scrolling motion.
         */
        class ScrollEvent extends Event {
            static $gtype: GObject.GType<ScrollEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts the scroll deltas of a scroll event.
             *
             * The deltas will be zero unless the scroll direction
             * is %GDK_SCROLL_SMOOTH.
             *
             * For the representation unit of these deltas, see
             * [method`Gdk`.ScrollEvent.get_unit].
             */
            get_deltas(): [number, number];
            /**
             * Extracts the direction of a scroll event.
             * @returns the scroll direction of @event
             */
            get_direction(): ScrollDirection;
            /**
             * Extracts the scroll delta unit of a scroll event.
             *
             * The unit will always be %GDK_SCROLL_UNIT_WHEEL if the scroll direction is not
             * %GDK_SCROLL_SMOOTH.
             * @returns the scroll unit.
             */
            get_unit(): ScrollUnit;
            /**
             * Check whether a scroll event is a stop scroll event.
             *
             * Scroll sequences with smooth scroll information may provide
             * a stop scroll event once the interaction with the device finishes,
             * e.g. by lifting a finger. This stop scroll event is the signal
             * that a widget may trigger kinetic scrolling based on the current
             * velocity.
             *
             * Stop scroll events always have a delta of 0/0.
             * @returns %TRUE if the event is a scroll stop event
             */
            is_stop(): boolean;
        }

        module Seat {
            // Signal callback interfaces

            interface DeviceAdded {
                (device: Device): void;
            }

            interface DeviceRemoved {
                (device: Device): void;
            }

            interface ToolAdded {
                (tool: DeviceTool): void;
            }

            interface ToolRemoved {
                (tool: DeviceTool): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                display: Display;
            }
        }

        /**
         * The `GdkSeat` object represents a collection of input devices
         * that belong to a user.
         */
        abstract class Seat extends GObject.Object {
            static $gtype: GObject.GType<Seat>;

            // Properties

            /**
             * `GdkDisplay` of this seat.
             */
            get display(): Display;

            // Constructors

            constructor(properties?: Partial<Seat.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-added', device: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-removed', device: Device): void;
            connect(signal: 'tool-added', callback: (_source: this, tool: DeviceTool) => void): number;
            connect_after(signal: 'tool-added', callback: (_source: this, tool: DeviceTool) => void): number;
            emit(signal: 'tool-added', tool: DeviceTool): void;
            connect(signal: 'tool-removed', callback: (_source: this, tool: DeviceTool) => void): number;
            connect_after(signal: 'tool-removed', callback: (_source: this, tool: DeviceTool) => void): number;
            emit(signal: 'tool-removed', tool: DeviceTool): void;

            // Methods

            /**
             * Returns the capabilities this `GdkSeat` currently has.
             * @returns the seat capabilities
             */
            get_capabilities(): SeatCapabilities;
            /**
             * Returns the devices that match the given capabilities.
             * @param capabilities capabilities to get devices for
             * @returns A list   of `GdkDevices`. The list must be freed with g_list_free(),   the elements are owned by GTK and must not be freed.
             */
            get_devices(capabilities: SeatCapabilities): Device[];
            /**
             * Returns the `GdkDisplay` this seat belongs to.
             * @returns a `GdkDisplay`. This object   is owned by GTK and must not be freed.
             */
            get_display(): Display;
            /**
             * Returns the device that routes keyboard events.
             * @returns a `GdkDevice` with keyboard   capabilities. This object is owned by GTK and must not be freed.
             */
            get_keyboard(): Device | null;
            /**
             * Returns the device that routes pointer events.
             * @returns a `GdkDevice` with pointer   capabilities. This object is owned by GTK and must not be freed.
             */
            get_pointer(): Device | null;
            /**
             * Returns all `GdkDeviceTools` that are known to the application.
             * @returns A list of tools. Free with g_list_free().
             */
            get_tools(): DeviceTool[];
        }

        module Snapshot {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Base type for snapshot operations.
         *
         * The subclass of `GdkSnapshot` used by GTK is [GtkSnapshot](../gtk4/class.Snapshot.html).
         */
        abstract class Snapshot extends GObject.Object {
            static $gtype: GObject.GType<Snapshot>;

            // Constructors

            constructor(properties?: Partial<Snapshot.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module Surface {
            // Signal callback interfaces

            interface EnterMonitor {
                (monitor: Monitor): void;
            }

            interface Event {
                (event: Event): boolean;
            }

            interface Layout {
                (width: number, height: number): void;
            }

            interface LeaveMonitor {
                (monitor: Monitor): void;
            }

            interface Render {
                (region: cairo.Region): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cursor: Cursor;
                display: Display;
                frame_clock: FrameClock;
                frameClock: FrameClock;
                height: number;
                mapped: boolean;
                scale: number;
                scale_factor: number;
                scaleFactor: number;
                width: number;
            }
        }

        /**
         * A `GdkSurface` is a rectangular region on the screen.
         *
         * It’s a low-level object, used to implement high-level objects
         * such as [GtkWindow](../gtk4/class.Window.html).
         *
         * The surfaces you see in practice are either [iface`Gdk`.Toplevel] or
         * [iface`Gdk`.Popup], and those interfaces provide much of the required
         * API to interact with these surfaces. Other, more specialized surface
         * types exist, but you will rarely interact with them directly.
         */
        abstract class Surface extends GObject.Object {
            static $gtype: GObject.GType<Surface>;

            // Properties

            /**
             * The mouse pointer for the `GdkSurface`.
             */
            get cursor(): Cursor;
            set cursor(val: Cursor);
            /**
             * The `GdkDisplay` connection of the surface.
             */
            get display(): Display;
            /**
             * The `GdkFrameClock` of the surface.
             */
            get frame_clock(): FrameClock;
            /**
             * The `GdkFrameClock` of the surface.
             */
            get frameClock(): FrameClock;
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

            // Constructors

            constructor(properties?: Partial<Surface.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_popup(parent: Surface, autohide: boolean): Surface;

            static new_toplevel(display: Display): Surface;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'enter-monitor', callback: (_source: this, monitor: Monitor) => void): number;
            connect_after(signal: 'enter-monitor', callback: (_source: this, monitor: Monitor) => void): number;
            emit(signal: 'enter-monitor', monitor: Monitor): void;
            connect(signal: 'event', callback: (_source: this, event: Event) => boolean): number;
            connect_after(signal: 'event', callback: (_source: this, event: Event) => boolean): number;
            emit(signal: 'event', event: Event): void;
            connect(signal: 'layout', callback: (_source: this, width: number, height: number) => void): number;
            connect_after(signal: 'layout', callback: (_source: this, width: number, height: number) => void): number;
            emit(signal: 'layout', width: number, height: number): void;
            connect(signal: 'leave-monitor', callback: (_source: this, monitor: Monitor) => void): number;
            connect_after(signal: 'leave-monitor', callback: (_source: this, monitor: Monitor) => void): number;
            emit(signal: 'leave-monitor', monitor: Monitor): void;
            connect(signal: 'render', callback: (_source: this, region: cairo.Region) => boolean): number;
            connect_after(signal: 'render', callback: (_source: this, region: cairo.Region) => boolean): number;
            emit(signal: 'render', region: cairo.Region): void;

            // Methods

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
            create_cairo_context(): CairoContext;
            /**
             * Creates a new `GdkGLContext` for the `GdkSurface`.
             *
             * The context is disconnected from any particular surface or surface.
             * If the creation of the `GdkGLContext` failed, `error` will be set.
             * Before using the returned `GdkGLContext`, you will need to
             * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
             * @returns the newly created `GdkGLContext`
             */
            create_gl_context(): GLContext;
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
            create_vulkan_context(): VulkanContext;
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
            get_cursor(): Cursor | null;
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
            get_device_cursor(device: Device): Cursor | null;
            /**
             * Obtains the current device position and modifier state.
             *
             * The position is given in coordinates relative to the upper
             * left corner of `surface`.
             * @param device pointer `GdkDevice` to query to
             * @returns %TRUE if the device is over the surface
             */
            get_device_position(device: Device): [boolean, number, number, ModifierType | null];
            /**
             * Gets the `GdkDisplay` associated with a `GdkSurface`.
             * @returns the `GdkDisplay` associated with @surface
             */
            get_display(): Display;
            /**
             * Gets the frame clock for the surface.
             *
             * The frame clock for a surface never changes unless the surface is
             * reparented to a new toplevel surface.
             * @returns the frame clock
             */
            get_frame_clock(): FrameClock;
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
            set_cursor(cursor?: Cursor | null): void;
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
            set_device_cursor(device: Device, cursor: Cursor): void;
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
            translate_coordinates(to: Surface, x: number, y: number): [boolean, number, number];
        }

        module Texture {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Paintable.ConstructorProps,
                    Gio.Icon.ConstructorProps,
                    Gio.LoadableIcon.ConstructorProps {
                color_state: ColorState;
                colorState: ColorState;
                height: number;
                width: number;
            }
        }

        /**
         * `GdkTexture` is the basic element used to refer to pixel data.
         *
         * It is primarily meant for pixel data that will not change over
         * multiple frames, and will be used for a long time.
         *
         * There are various ways to create `GdkTexture` objects from a
         * [class`GdkPixbuf`.Pixbuf], or from bytes stored in memory, a file, or a
         * [struct`Gio`.Resource].
         *
         * The ownership of the pixel data is transferred to the `GdkTexture`
         * instance; you can only make a copy of it, via [method`Gdk`.Texture.download].
         *
         * `GdkTexture` is an immutable object: That means you cannot change
         * anything about it other than increasing the reference count via
         * [method`GObject`.Object.ref], and consequently, it is a threadsafe object.
         *
         * GDK provides a number of threadsafe texture loading functions:
         * [ctor`Gdk`.Texture.new_from_resource],
         * [ctor`Gdk`.Texture.new_from_bytes],
         * [ctor`Gdk`.Texture.new_from_file],
         * [ctor`Gdk`.Texture.new_from_filename],
         * [ctor`Gdk`.Texture.new_for_pixbuf]. Note that these are meant for loading
         * icons and resources that are shipped with the toolkit or application. It
         * is recommended that you use a dedicated image loading framework such as
         * [glycin](https://lib.rs/crates/glycin), if you need to load untrusted image
         * data.
         */
        abstract class Texture extends GObject.Object implements Paintable, Gio.Icon, Gio.LoadableIcon {
            static $gtype: GObject.GType<Texture>;

            // Properties

            /**
             * The color state of the texture.
             */
            get color_state(): ColorState;
            /**
             * The color state of the texture.
             */
            get colorState(): ColorState;
            /**
             * The height of the texture, in pixels.
             */
            get height(): number;
            /**
             * The width of the texture, in pixels.
             */
            get width(): number;

            // Constructors

            constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Texture;

            static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Texture;

            static new_from_file(file: Gio.File): Texture;

            static new_from_filename(path: string): Texture;

            static new_from_resource(resource_path: string): Texture;

            // Methods

            /**
             * Downloads the `texture` into local memory.
             *
             * This may be an expensive operation, as the actual texture data
             * may reside on a GPU or on a remote display server.
             *
             * The data format of the downloaded data is equivalent to
             * %CAIRO_FORMAT_ARGB32, so every downloaded pixel requires
             * 4 bytes of memory.
             *
             * Downloading a texture into a Cairo image surface:
             * ```c
             * surface = cairo_image_surface_create (CAIRO_FORMAT_ARGB32,
             *                                       gdk_texture_get_width (texture),
             *                                       gdk_texture_get_height (texture));
             * gdk_texture_download (texture,
             *                       cairo_image_surface_get_data (surface),
             *                       cairo_image_surface_get_stride (surface));
             * cairo_surface_mark_dirty (surface);
             * ```
             *
             * For more flexible download capabilities, see
             * [struct`Gdk`.TextureDownloader].
             * @param data pointer to enough memory to be filled with the   downloaded data of @texture
             * @param stride rowstride in bytes
             */
            download(data: Uint8Array | string, stride: number): void;
            /**
             * Returns the color state associated with the texture.
             * @returns the color state of the `GdkTexture`
             */
            get_color_state(): ColorState;
            /**
             * Gets the memory format most closely associated with the data of
             * the texture.
             *
             * Note that it may not be an exact match for texture data
             * stored on the GPU or with compression.
             *
             * The format can give an indication about the bit depth and opacity
             * of the texture and is useful to determine the best format for
             * downloading the texture.
             * @returns the preferred format for the texture's data
             */
            get_format(): MemoryFormat;
            /**
             * Returns the height of the `texture,` in pixels.
             * @returns the height of the `GdkTexture`
             */
            get_height(): number;
            /**
             * Returns the width of `texture,` in pixels.
             * @returns the width of the `GdkTexture`
             */
            get_width(): number;
            /**
             * Store the given `texture` to the `filename` as a PNG file.
             *
             * This is a utility function intended for debugging and testing.
             * If you want more control over formats, proper error handling or
             * want to store to a [iface`Gio`.File] or other location, you might want to
             * use [method`Gdk`.Texture.save_to_png_bytes] or look into the
             * gdk-pixbuf library.
             * @param filename the filename to store to
             * @returns %TRUE if saving succeeded, %FALSE on failure.
             */
            save_to_png(filename: string): boolean;
            /**
             * Store the given `texture` in memory as a PNG file.
             *
             * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
             *
             * If you want to serialize a texture, this is a convenient and
             * portable way to do that.
             *
             * If you need more control over the generated image, such as
             * attaching metadata, you should look into an image handling
             * library such as the gdk-pixbuf library.
             *
             * If you are dealing with high dynamic range float data, you
             * might also want to consider [method`Gdk`.Texture.save_to_tiff_bytes]
             * instead.
             * @returns a newly allocated `GBytes` containing PNG data
             */
            save_to_png_bytes(): GLib.Bytes;
            /**
             * Store the given `texture` to the `filename` as a TIFF file.
             *
             * GTK will attempt to store data without loss.
             * @param filename the filename to store to
             * @returns %TRUE if saving succeeded, %FALSE on failure.
             */
            save_to_tiff(filename: string): boolean;
            /**
             * Store the given `texture` in memory as a TIFF file.
             *
             * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
             *
             * This function is intended to store a representation of the
             * texture's data that is as accurate as possible. This is
             * particularly relevant when working with high dynamic range
             * images and floating-point texture data.
             *
             * If that is not your concern and you are interested in a
             * smaller size and a more portable format, you might want to
             * use [method`Gdk`.Texture.save_to_png_bytes].
             * @returns a newly allocated `GBytes` containing TIFF data
             */
            save_to_tiff_bytes(): GLib.Bytes;

            // Inherited methods
            /**
             * Compute a concrete size for the `GdkPaintable`.
             *
             * Applies the sizing algorithm outlined in the
             * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
             * to the given `paintable`. See that link for more details.
             *
             * It is not necessary to call this function when both `specified_width`
             * and `specified_height` are known, but it is useful to call this
             * function in GtkWidget:measure implementations to compute the
             * other dimension when only one dimension is given.
             * @param specified_width the width @paintable could be drawn into or   0.0 if unknown
             * @param specified_height the height @paintable could be drawn into or   0.0 if unknown
             * @param default_width the width @paintable would be drawn into if   no other constraints were given
             * @param default_height the height @paintable would be drawn into if   no other constraints were given
             */
            compute_concrete_size(
                specified_width: number,
                specified_height: number,
                default_width: number,
                default_height: number,
            ): [number, number];
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             * @returns An immutable paintable for the current   contents of @paintable
             */
            get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             * @returns The `GdkPaintableFlags` for this paintable
             */
            get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             * @returns the intrinsic aspect ratio of @paintable or 0 if none.
             */
            get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic height of @paintable or 0 if none.
             */
            get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic width of @paintable or 0 if none.
             */
            get_intrinsic_width(): number;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their contents.
             *
             * Unless the contents are invalidated, implementations must guarantee that
             * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
             * it must not call this function.
             */
            invalidate_contents(): void;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their size.
             *
             * As long as the size is not invalidated, `paintable` must return the same
             * values for its intrinsic width, height and aspect ratio.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
             * it must not call this function.
             */
            invalidate_size(): void;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             */
            vfunc_get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             */
            vfunc_get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             */
            vfunc_get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_width(): number;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             * @returns %TRUE if @icon1 is equal to @icon2. %FALSE otherwise.
             */
            equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             * @returns a #guint containing a hash for the @icon, suitable for   use in a #GHashTable or similar data structure.
             */
            hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
             */
            serialize(): GLib.Variant | null;
            /**
             * Generates a textual representation of `icon` that can be used for
             * serialization such as when passing `icon` to a different process or
             * saving it to persistent storage. Use g_icon_new_for_string() to
             * get `icon` back from the returned string.
             *
             * The encoding of the returned string is proprietary to #GIcon except
             * in the following two cases
             *
             * - If `icon` is a #GFileIcon, the returned string is a native path
             *   (such as `/path/to/my icon.png`) without escaping
             *   if the #GFile for `icon` is a native file.  If the file is not
             *   native, the returned string is the result of g_file_get_uri()
             *   (such as `sftp://path/to/my%20icon.png`).
             *
             * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
             *   the encoding is simply the name (such as `network-server`).
             * @returns An allocated NUL-terminated UTF8 string or %NULL if @icon can't be serialized. Use g_free() to free.
             */
            to_string(): string | null;
            /**
             * Checks if two icons are equal.
             * @param icon2 pointer to the second #GIcon.
             */
            vfunc_equal(icon2?: Gio.Icon | null): boolean;
            /**
             * Gets a hash for an icon.
             */
            vfunc_hash(): number;
            /**
             * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
             * back by calling g_icon_deserialize() on the returned value.
             * As serialization will avoid using raw icon data when possible, it only
             * makes sense to transfer the #GVariant between processes on the same machine,
             * (as opposed to over the network), and within the same file system namespace.
             */
            vfunc_serialize(): GLib.Variant | null;
            /**
             * Serializes the `icon` into string tokens.
             * This is can be invoked when g_icon_new_for_string() is called.
             */
            vfunc_to_tokens(): [boolean, string[], number];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns a #GInputStream to read the icon from.
             */
            load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             * @returns a #GInputStream to read the icon from.
             */
            load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
            /**
             * Loads a loadable icon. For the asynchronous version of this function,
             * see g_loadable_icon_load_async().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
            /**
             * Loads an icon asynchronously. To finish this function, see
             * g_loadable_icon_load_finish(). For the synchronous, blocking
             * version of this function, see g_loadable_icon_load().
             * @param size an integer.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_load_async(
                size: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
             * @param res a #GAsyncResult.
             */
            vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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

        /**
         * An event related to a touch-based device.
         */
        class TouchEvent extends Event {
            static $gtype: GObject.GType<TouchEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts whether a touch event is emulating a pointer event.
             * @returns %TRUE if @event is emulating
             */
            get_emulating_pointer(): boolean;
        }

        /**
         * An event related to a gesture on a touchpad device.
         *
         * Unlike touchscreens, where the windowing system sends basic
         * sequences of begin, update, end events, and leaves gesture
         * recognition to the clients, touchpad gestures are typically
         * processed by the system, resulting in these events.
         */
        class TouchpadEvent extends Event {
            static $gtype: GObject.GType<TouchpadEvent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Extracts delta information from a touchpad event.
             */
            get_deltas(): [number, number];
            /**
             * Extracts the touchpad gesture phase from a touchpad event.
             * @returns the gesture phase of @event
             */
            get_gesture_phase(): TouchpadGesturePhase;
            /**
             * Extracts the number of fingers from a touchpad event.
             * @returns the number of fingers for @event
             */
            get_n_fingers(): number;
            /**
             * Extracts the angle delta from a touchpad pinch event.
             * @returns the angle delta of @event
             */
            get_pinch_angle_delta(): number;
            /**
             * Extracts the scale from a touchpad pinch event.
             * @returns the scale of @event
             */
            get_pinch_scale(): number;
        }

        module VulkanContext {
            // Signal callback interfaces

            interface ImagesUpdated {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends DrawContext.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        /**
         * `GdkVulkanContext` is an object representing the platform-specific
         * Vulkan draw context.
         *
         * `GdkVulkanContext`s are created for a surface using
         * [method`Gdk`.Surface.create_vulkan_context], and the context will match
         * the characteristics of the surface.
         *
         * Support for `GdkVulkanContext` is platform-specific and context creation
         * can fail, returning %NULL context.
         */
        abstract class VulkanContext extends DrawContext implements Gio.Initable {
            static $gtype: GObject.GType<VulkanContext>;

            // Constructors

            constructor(properties?: Partial<VulkanContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'images-updated', callback: (_source: this) => void): number;
            connect_after(signal: 'images-updated', callback: (_source: this) => void): number;
            emit(signal: 'images-updated'): void;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

        type CicpParamsClass = typeof CicpParams;
        /**
         * A `GdkColorState` object provides the information to interpret
         * colors and pixels in a variety of ways.
         *
         * They are also known as
         * [*color spaces*](https://en.wikipedia.org/wiki/Color_space).
         *
         * Crucially, GTK knows how to convert colors from one color
         * state to another.
         *
         * `GdkColorState` objects are immutable and therefore threadsafe.
         */
        abstract class ColorState {
            static $gtype: GObject.GType<ColorState>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns the color state object representing the oklab color space.
             *
             * This is a perceptually uniform color state.
             */
            static get_oklab(): ColorState;
            /**
             * Returns the color state object representing the oklch color space.
             *
             * This is the polar variant of oklab, in which the hue is encoded as
             * a polar coordinate.
             */
            static get_oklch(): ColorState;
            /**
             * Returns the color state object representing the linear rec2100 color space.
             *
             * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and a linear
             * transfer function.
             *
             * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/8/0/1.
             *
             * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-linear)
             * for details about this colorstate.
             */
            static get_rec2100_linear(): ColorState;
            /**
             * Returns the color state object representing the rec2100-pq color space.
             *
             * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and the transfer
             * function defined by SMPTE ST 2084 and BT.2100-2.
             *
             * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/16/0/1.
             *
             * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-pq)
             * for details about this colorstate.
             */
            static get_rec2100_pq(): ColorState;
            /**
             * Returns the color state object representing the sRGB color space.
             *
             * This color state uses the primaries defined by BT.709-6 and the transfer function
             * defined by IEC 61966-2-1.
             *
             * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/13/0/1.
             *
             * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB)
             * for details about this colorstate.
             */
            static get_srgb(): ColorState;
            /**
             * Returns the color state object representing the linearized sRGB color space.
             *
             * This color state uses the primaries defined by BT.709-6 and a linear transfer function.
             *
             * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/8/0/1.
             *
             * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB-linear)
             * for details about this colorstate.
             */
            static get_srgb_linear(): ColorState;

            // Methods

            /**
             * Create a [class`Gdk`.CicpParams] representing the colorstate.
             *
             * It is not guaranteed that every `GdkColorState` can be
             * represented with Cicp parameters. If that is the case,
             * this function returns `NULL`.
             * @returns A new [class@Gdk.CicpParams]
             */
            create_cicp_params(): CicpParams | null;
            /**
             * Compares two `GdkColorStates` for equality.
             *
             * Note that this function is not guaranteed to be perfect and two objects
             * describing the same color state may compare not equal. However, different
             * color states will never compare equal.
             * @param other another `GdkColorStatee`
             * @returns %TRUE if the two color states compare equal
             */
            equal(other: ColorState): boolean;
            /**
             * Increase the reference count of `self`.
             * @returns the object that was passed in
             */
            ref(): ColorState;
            /**
             * Decrease the reference count of `self`.
             *
             * Unless `self` is static, it will be freed
             * when the reference count reaches zero.
             */
            unref(): void;
        }

        /**
         * The `GdkContentFormats` structure is used to advertise and negotiate the
         * format of content.
         *
         * You will encounter `GdkContentFormats` when interacting with objects
         * controlling operations that pass data between different widgets, window
         * or application, like [class`Gdk`.Drag], [class`Gdk`.Drop],
         * [class`Gdk`.Clipboard] or [class`Gdk`.ContentProvider].
         *
         * GDK supports content in 2 forms: `GType` and mime type.
         * Using `GTypes` is meant only for in-process content transfers. Mime types
         * are meant to be used for data passing both in-process and out-of-process.
         * The details of how data is passed is described in the documentation of
         * the actual implementations. To transform between the two forms,
         * [class`Gdk`.ContentSerializer] and [class`Gdk`.ContentDeserializer] are used.
         *
         * A `GdkContentFormats` describes a set of possible formats content can be
         * exchanged in. It is assumed that this set is ordered. `GTypes` are more
         * important than mime types. Order between different `GTypes` or mime types
         * is the order they were added in, most important first. Functions that
         * care about order, such as [method`Gdk`.ContentFormats.union], will describe
         * in their documentation how they interpret that order, though in general the
         * order of the first argument is considered the primary order of the result,
         * followed by the order of further arguments.
         *
         * For debugging purposes, the function [method`Gdk`.ContentFormats.to_string]
         * exists. It will print a comma-separated list of formats from most important
         * to least important.
         *
         * `GdkContentFormats` is an immutable struct. After creation, you cannot change
         * the types it represents. Instead, new `GdkContentFormats` have to be created.
         * The [struct`Gdk`.ContentFormatsBuilder] structure is meant to help in this
         * endeavor.
         */
        class ContentFormats {
            static $gtype: GObject.GType<ContentFormats>;

            // Constructors

            constructor(mime_types?: string[] | null);
            _init(...args: any[]): void;

            static ['new'](mime_types?: string[] | null): ContentFormats;

            static new_for_gtype(type: GObject.GType): ContentFormats;

            // Static methods

            /**
             * Parses the given `string` into `GdkContentFormats` and
             * returns the formats.
             *
             * Strings printed via [method`Gdk`.ContentFormats.to_string]
             * can be read in again successfully using this function.
             *
             * If `string` does not describe valid content formats, %NULL
             * is returned.
             * @param string the string to parse
             */
            static parse(string: string): ContentFormats | null;

            // Methods

            /**
             * Checks if a given `GType` is part of the given `formats`.
             * @param type the `GType` to search for
             * @returns %TRUE if the `GType` was found
             */
            contain_gtype(type: GObject.GType): boolean;
            /**
             * Checks if a given mime type is part of the given `formats`.
             * @param mime_type the mime type to search for
             * @returns %TRUE if the mime_type was found
             */
            contain_mime_type(mime_type: string): boolean;
            /**
             * Gets the `GType`s included in `formats`.
             *
             * Note that `formats` may not contain any `GType`s, in particular when
             * they are empty. In that case %NULL will be returned.
             * @returns %G_TYPE_INVALID-terminated array of types included in @formats
             */
            get_gtypes(): GObject.GType[] | null;
            /**
             * Gets the mime types included in `formats`.
             *
             * Note that `formats` may not contain any mime types, in particular
             * when they are empty. In that case %NULL will be returned.
             * @returns %NULL-terminated array of interned strings of mime types included   in @formats
             */
            get_mime_types(): string[] | null;
            /**
             * Checks if `first` and `second` have any matching formats.
             * @param second the `GdkContentFormats` to intersect with
             * @returns %TRUE if a matching format was found.
             */
            match(second: ContentFormats): boolean;
            /**
             * Finds the first `GType` from `first` that is also contained
             * in `second`.
             *
             * If no matching `GType` is found, %G_TYPE_INVALID is returned.
             * @param second the `GdkContentFormats` to intersect with
             * @returns The first common `GType` or %G_TYPE_INVALID if none.
             */
            match_gtype(second: ContentFormats): GObject.GType;
            /**
             * Finds the first mime type from `first` that is also contained
             * in `second`.
             *
             * If no matching mime type is found, %NULL is returned.
             * @param second the `GdkContentFormats` to intersect with
             * @returns The first common mime type or %NULL if none
             */
            match_mime_type(second: ContentFormats): string | null;
            /**
             * Prints the given `formats` into a string for human consumption.
             *
             * The result of this function can later be parsed with
             * [func`Gdk`.ContentFormats.parse].
             * @param string a `GString` to print into
             */
            print(string: GLib.String): void;
            /**
             * Increases the reference count of a `GdkContentFormats` by one.
             * @returns the passed in `GdkContentFormats`.
             */
            ref(): ContentFormats;
            /**
             * Prints the given `formats` into a human-readable string.
             *
             * The resulting string can be parsed with [func`Gdk`.ContentFormats.parse].
             *
             * This is a small wrapper around [method`Gdk`.ContentFormats.print]
             * to help when debugging.
             * @returns a new string
             */
            to_string(): string;
            /**
             * Append all missing types from `second` to `first,` in the order
             * they had in `second`.
             * @param second the `GdkContentFormats` to merge from
             * @returns a new `GdkContentFormats`
             */
            union(second: ContentFormats): ContentFormats;
            /**
             * Add GTypes for mime types in `formats` for which deserializers are
             * registered.
             * @returns a new `GdkContentFormats`
             */
            union_deserialize_gtypes(): ContentFormats;
            /**
             * Add mime types for GTypes in `formats` for which deserializers are
             * registered.
             * @returns a new `GdkContentFormats`
             */
            union_deserialize_mime_types(): ContentFormats;
            /**
             * Add GTypes for the mime types in `formats` for which serializers are
             * registered.
             * @returns a new `GdkContentFormats`
             */
            union_serialize_gtypes(): ContentFormats;
            /**
             * Add mime types for GTypes in `formats` for which serializers are
             * registered.
             * @returns a new `GdkContentFormats`
             */
            union_serialize_mime_types(): ContentFormats;
            /**
             * Decreases the reference count of a `GdkContentFormats` by one.
             *
             * If the resulting reference count is zero, frees the formats.
             */
            unref(): void;
        }

        /**
         * A `GdkContentFormatsBuilder` is an auxiliary struct used to create
         * new `GdkContentFormats`, and should not be kept around.
         */
        class ContentFormatsBuilder {
            static $gtype: GObject.GType<ContentFormatsBuilder>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ContentFormatsBuilder;

            // Methods

            /**
             * Appends all formats from `formats` to `builder,` skipping those that
             * already exist.
             * @param formats the formats to add
             */
            add_formats(formats: ContentFormats): void;
            /**
             * Appends `type` to `builder` if it has not already been added.
             * @param type a `GType`
             */
            add_gtype(type: GObject.GType): void;
            /**
             * Appends `mime_type` to `builder` if it has not already been added.
             * @param mime_type a mime type
             */
            add_mime_type(mime_type: string): void;
            /**
             * Acquires a reference on the given `builder`.
             *
             * This function is intended primarily for bindings.
             * `GdkContentFormatsBuilder` objects should not be kept around.
             * @returns the given `GdkContentFormatsBuilder`   with its reference count increased
             */
            ref(): ContentFormatsBuilder;
            /**
             * Creates a new `GdkContentFormats` from the given `builder`.
             *
             * The given `GdkContentFormatsBuilder` is reset once this function returns;
             * you cannot call this function multiple times on the same `builder` instance.
             *
             * This function is intended primarily for bindings. C code should use
             * [method`Gdk`.ContentFormatsBuilder.free_to_formats].
             * @returns the newly created `GdkContentFormats`   with all the formats added to @builder
             */
            to_formats(): ContentFormats;
            /**
             * Releases a reference on the given `builder`.
             */
            unref(): void;
        }

        type ContentProviderClass = typeof ContentProvider;
        type DevicePadInterface = typeof DevicePad;
        /**
         * The `GdkDmabufFormats` struct provides information about
         * supported DMA buffer formats.
         *
         * You can query whether a given format is supported with
         * [method`Gdk`.DmabufFormats.contains] and you can iterate
         * over the list of all supported formats with
         * [method`Gdk`.DmabufFormats.get_n_formats] and
         * [method`Gdk`.DmabufFormats.get_format].
         *
         * The list of supported formats is sorted by preference,
         * with the best formats coming first.
         *
         * The list may contains (format, modifier) pairs where the modifier
         * is `DMA_FORMAT_MOD_INVALID`, indicating that **_implicit modifiers_**
         * may be used with this format.
         *
         * See [class`Gdk`.DmabufTextureBuilder] for more information
         * about DMA buffers.
         *
         * Note that DMA buffers only exist on Linux.
         */
        abstract class DmabufFormats {
            static $gtype: GObject.GType<DmabufFormats>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns whether a given format is contained in `formats`.
             * @param fourcc a format code
             * @param modifier a format modifier
             * @returns `TRUE` if the format specified by the arguments   is part of @formats
             */
            contains(fourcc: number, modifier: number): boolean;
            /**
             * Returns whether `formats1` and `formats2` contain the
             * same dmabuf formats, in the same order.
             * @param formats2 another `GdkDmabufFormats`
             * @returns `TRUE` if @formats1 and @formats2 are equal
             */
            equal(formats2?: DmabufFormats | null): boolean;
            /**
             * Gets the fourcc code and modifier for a format
             * that is contained in `formats`.
             * @param idx the index of the format to return
             */
            get_format(idx: number): [number, number];
            /**
             * Returns the number of formats that the `formats` object
             * contains.
             *
             * Note that DMA buffers are a Linux concept, so on other
             * platforms, [method`Gdk`.DmabufFormats.get_n_formats] will
             * always return zero.
             * @returns the number of formats
             */
            get_n_formats(): number;
            /**
             * Increases the reference count of `formats`.
             * @returns the passed-in object
             */
            ref(): DmabufFormats;
            /**
             * Decreases the reference count of `formats`.
             *
             * When the reference count reaches zero,
             * the object is freed.
             */
            unref(): void;
        }

        type DmabufTextureBuilderClass = typeof DmabufTextureBuilder;
        type DmabufTextureClass = typeof DmabufTexture;
        type DragSurfaceInterface = typeof DragSurface;
        /**
         * The `GdkDragSurfaceSize` struct contains information that is useful
         * to compute the size of a drag surface.
         */
        abstract class DragSurfaceSize {
            static $gtype: GObject.GType<DragSurfaceSize>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Sets the size the drag surface prefers to be resized to.
             * @param width the width
             * @param height the height
             */
            set_size(width: number, height: number): void;
        }

        /**
         * `GdkEventSequence` is an opaque type representing a sequence
         * of related touch events.
         */
        abstract class EventSequence {
            static $gtype: GObject.GType<EventSequence>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An opaque type representing a list of files.
         */
        class FileList {
            static $gtype: GObject.GType<FileList>;

            // Constructors

            constructor(files: Gio.File[]);
            _init(...args: any[]): void;

            static new_from_array(files: Gio.File[]): FileList;

            static new_from_list(files: Gio.File[]): FileList;

            // Methods

            /**
             * Retrieves the list of files inside a `GdkFileList`.
             *
             * This function is meant for language bindings.
             * @returns the files inside the list
             */
            get_files(): Gio.File[];
        }

        type FrameClockClass = typeof FrameClock;
        abstract class FrameClockPrivate {
            static $gtype: GObject.GType<FrameClockPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A `GdkFrameTimings` object holds timing information for a single frame
         * of the application’s displays.
         *
         * To retrieve `GdkFrameTimings` objects, use [method`Gdk`.FrameClock.get_timings]
         * or [method`Gdk`.FrameClock.get_current_timings]. The information in
         * `GdkFrameTimings` is useful for precise synchronization of video with
         * the event or audio streams, and for measuring quality metrics for the
         * application’s display, such as latency and jitter.
         */
        abstract class FrameTimings {
            static $gtype: GObject.GType<FrameTimings>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns whether `timings` are complete.
             *
             * The timing information in a `GdkFrameTimings` is filled in
             * incrementally as the frame as drawn and passed off to the
             * window system for processing and display to the user. The
             * accessor functions for `GdkFrameTimings` can return 0 to
             * indicate an unavailable value for two reasons: either because
             * the information is not yet available, or because it isn't
             * available at all.
             *
             * Once this function returns %TRUE for a frame, you can be
             * certain that no further values will become available and be
             * stored in the `GdkFrameTimings`.
             * @returns %TRUE if all information that will be available   for the frame has been filled in.
             */
            get_complete(): boolean;
            /**
             * Gets the frame counter value of the `GdkFrameClock` when
             * this frame was drawn.
             * @returns the frame counter value for this frame
             */
            get_frame_counter(): number;
            /**
             * Returns the frame time for the frame.
             *
             * This is the time value that is typically used to time
             * animations for the frame. See [method`Gdk`.FrameClock.get_frame_time].
             * @returns the frame time for the frame, in the timescale  of g_get_monotonic_time()
             */
            get_frame_time(): number;
            /**
             * Gets the predicted time at which this frame will be displayed.
             *
             * Although no predicted time may be available, if one is available,
             * it will be available while the frame is being generated, in contrast
             * to [method`Gdk`.FrameTimings.get_presentation_time], which is only
             * available after the frame has been presented.
             *
             * In general, if you are simply animating, you should use
             * [method`Gdk`.FrameClock.get_frame_time] rather than this function,
             * but this function is useful for applications that want exact control
             * over latency. For example, a movie player may want this information
             * for Audio/Video synchronization.
             * @returns The predicted time at which the frame will be presented,   in the timescale of g_get_monotonic_time(), or 0 if no predicted   presentation time is available.
             */
            get_predicted_presentation_time(): number;
            /**
             * Reurns the presentation time.
             *
             * This is the time at which the frame became visible to the user.
             * @returns the time the frame was displayed to the user, in the   timescale of g_get_monotonic_time(), or 0 if no presentation   time is available. See [method@Gdk.FrameTimings.get_complete]
             */
            get_presentation_time(): number;
            /**
             * Gets the natural interval between presentation times for
             * the display that this frame was displayed on.
             *
             * Frame presentation usually happens during the “vertical
             * blanking interval”.
             * @returns the refresh interval of the display, in microseconds,   or 0 if the refresh interval is not available.   See [method@Gdk.FrameTimings.get_complete].
             */
            get_refresh_interval(): number;
            /**
             * Increases the reference count of `timings`.
             * @returns @timings
             */
            ref(): FrameTimings;
            /**
             * Decreases the reference count of `timings`.
             *
             * If `timings` is no longer referenced, it will be freed.
             */
            unref(): void;
        }

        type GLTextureBuilderClass = typeof GLTextureBuilder;
        type GLTextureClass = typeof GLTexture;
        /**
         * A `GdkKeymapKey` is a hardware key that can be mapped to a keyval.
         */
        class KeymapKey {
            static $gtype: GObject.GType<KeymapKey>;

            // Fields

            keycode: number;
            group: number;
            level: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    keycode: number;
                    group: number;
                    level: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        type MemoryTextureBuilderClass = typeof MemoryTextureBuilder;
        type MemoryTextureClass = typeof MemoryTexture;
        type MonitorClass = typeof Monitor;
        type PaintableInterface = typeof Paintable;
        type PopupInterface = typeof Popup;
        /**
         * The `GdkPopupLayout` struct contains information that is
         * necessary position a [iface`Gdk`.Popup] relative to its parent.
         *
         * The positioning requires a negotiation with the windowing system,
         * since it depends on external constraints, such as the position of
         * the parent surface, and the screen dimensions.
         *
         * The basic ingredients are a rectangle on the parent surface,
         * and the anchor on both that rectangle and the popup. The anchors
         * specify a side or corner to place next to each other.
         *
         * ![Popup anchors](popup-anchors.png)
         *
         * For cases where placing the anchors next to each other would make
         * the popup extend offscreen, the layout includes some hints for how
         * to resolve this problem. The hints may suggest to flip the anchor
         * position to the other side, or to 'slide' the popup along a side,
         * or to resize it.
         *
         * ![Flipping popups](popup-flip.png)
         *
         * ![Sliding popups](popup-slide.png)
         *
         * These hints may be combined.
         *
         * Ultimatively, it is up to the windowing system to determine the position
         * and size of the popup. You can learn about the result by calling
         * [method`Gdk`.Popup.get_position_x], [method`Gdk`.Popup.get_position_y],
         * [method`Gdk`.Popup.get_rect_anchor] and [method`Gdk`.Popup.get_surface_anchor]
         * after the popup has been presented. This can be used to adjust the rendering.
         * For example, [GtkPopover](../gtk4/class.Popover.html) changes its arrow position
         * accordingly. But you have to be careful avoid changing the size of the popover,
         * or it has to be presented again.
         */
        class PopupLayout {
            static $gtype: GObject.GType<PopupLayout>;

            // Constructors

            constructor(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity);
            _init(...args: any[]): void;

            static ['new'](anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity): PopupLayout;

            // Methods

            /**
             * Makes a copy of `layout`.
             * @returns a copy of @layout.
             */
            copy(): PopupLayout;
            /**
             * Check whether `layout` and `other` has identical layout properties.
             * @param other another `GdkPopupLayout`
             * @returns %TRUE if @layout and @other have identical layout properties,   otherwise %FALSE.
             */
            equal(other: PopupLayout): boolean;
            /**
             * Get the `GdkAnchorHints`.
             * @returns the `GdkAnchorHints`
             */
            get_anchor_hints(): AnchorHints;
            /**
             * Get the anchor rectangle.
             * @returns The anchor rectangle
             */
            get_anchor_rect(): Rectangle;
            /**
             * Retrieves the offset for the anchor rectangle.
             */
            get_offset(): [number, number];
            /**
             * Returns the anchor position on the anchor rectangle.
             * @returns the anchor on the anchor rectangle.
             */
            get_rect_anchor(): Gravity;
            /**
             * Obtains the shadow widths of this layout.
             */
            get_shadow_width(): [number, number, number, number];
            /**
             * Returns the anchor position on the popup surface.
             * @returns the anchor on the popup surface.
             */
            get_surface_anchor(): Gravity;
            /**
             * Increases the reference count of `value`.
             * @returns the same @layout
             */
            ref(): PopupLayout;
            /**
             * Set new anchor hints.
             *
             * The set `anchor_hints` determines how `surface` will be moved
             * if the anchor points cause it to move off-screen. For example,
             * %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
             * %GDK_GRAVITY_NORTH_EAST and vice versa if `surface` extends
             * beyond the left or right edges of the monitor.
             * @param anchor_hints the new `GdkAnchorHints`
             */
            set_anchor_hints(anchor_hints: AnchorHints): void;
            /**
             * Set the anchor rectangle.
             * @param anchor_rect the new anchor rectangle
             */
            set_anchor_rect(anchor_rect: Rectangle): void;
            /**
             * Offset the position of the anchor rectangle with the given delta.
             * @param dx x delta to offset the anchor rectangle with
             * @param dy y delta to offset the anchor rectangle with
             */
            set_offset(dx: number, dy: number): void;
            /**
             * Set the anchor on the anchor rectangle.
             * @param anchor the new rect anchor
             */
            set_rect_anchor(anchor: Gravity): void;
            /**
             * Sets the shadow width of the popup.
             *
             * The shadow width corresponds to the part of the computed
             * surface size that would consist of the shadow margin
             * surrounding the window, would there be any.
             * @param left width of the left part of the shadow
             * @param right width of the right part of the shadow
             * @param top height of the top part of the shadow
             * @param bottom height of the bottom part of the shadow
             */
            set_shadow_width(left: number, right: number, top: number, bottom: number): void;
            /**
             * Set the anchor on the popup surface.
             * @param anchor the new popup surface anchor
             */
            set_surface_anchor(anchor: Gravity): void;
            /**
             * Decreases the reference count of `value`.
             */
            unref(): void;
        }

        /**
         * A `GdkRGBA` is used to represent a color, in a way that is compatible
         * with cairo’s notion of color.
         *
         * `GdkRGBA` is a convenient way to pass colors around. It’s based on
         * cairo’s way to deal with colors and mirrors its behavior. All values
         * are in the range from 0.0 to 1.0 inclusive. So the color
         * (0.0, 0.0, 0.0, 0.0) represents transparent black and
         * (1.0, 1.0, 1.0, 1.0) is opaque white. Other values will
         * be clamped to this range when drawing.
         */
        class RGBA {
            static $gtype: GObject.GType<RGBA>;

            // Fields

            red: number;
            green: number;
            blue: number;
            alpha: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    red: number;
                    green: number;
                    blue: number;
                    alpha: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Makes a copy of a `GdkRGBA`.
             *
             * The result must be freed through [method`Gdk`.RGBA.free].
             * @returns A newly allocated `GdkRGBA`, with the same contents as @rgba
             */
            copy(): RGBA;
            /**
             * Compares two `GdkRGBA` colors.
             * @param p2 another `GdkRGBA`
             * @returns %TRUE if the two colors compare equal
             */
            equal(p2: RGBA): boolean;
            /**
             * Frees a `GdkRGBA`.
             */
            free(): void;
            /**
             * A hash function suitable for using for a hash
             * table that stores `GdkRGBA`s.
             * @returns The hash value for @p
             */
            hash(): number;
            /**
             * Checks if an `rgba` value is transparent.
             *
             * That is, drawing with the value would not produce any change.
             * @returns %TRUE if the @rgba is clear
             */
            is_clear(): boolean;
            /**
             * Checks if an `rgba` value is opaque.
             *
             * That is, drawing with the value will not retain any results
             * from previous contents.
             * @returns %TRUE if the @rgba is opaque
             */
            is_opaque(): boolean;
            /**
             * Parses a textual representation of a color.
             *
             * The string can be either one of:
             *
             * - A standard name (Taken from the CSS specification).
             * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
             *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
             * - A hexadecimal value in the form “\#rgba”, “\#rrggbbaa”,
             *   or ”\#rrrrggggbbbbaaaa”
             * - A RGB color in the form “rgb(r,g,b)” (In this case the color
             *   will have full opacity)
             * - A RGBA color in the form “rgba(r,g,b,a)”
             * - A HSL color in the form "hsl(hue, saturation, lightness)"
             * - A HSLA color in the form "hsla(hue, saturation, lightness, alpha)"
             *
             * Where “r”, “g”, “b” and “a” are respectively the red, green,
             * blue and alpha color values. In the last two cases, “r”, “g”,
             * and “b” are either integers in the range 0 to 255 or percentage
             * values in the range 0% to 100%, and a is a floating point value
             * in the range 0 to 1.
             * @param spec the string specifying the color
             * @returns %TRUE if the parsing succeeded
             */
            parse(spec: string): boolean;
            /**
             * Returns a textual specification of `rgba` in the form
             * `rgb(r,g,b)` or `rgba(r,g,b,a)`, where “r”, “g”, “b” and
             * “a” represent the red, green, blue and alpha values
             * respectively. “r”, “g”, and “b” are represented as integers
             * in the range 0 to 255, and “a” is represented as a floating
             * point value in the range 0 to 1.
             *
             * These string forms are string forms that are supported by
             * the CSS3 colors module, and can be parsed by [method`Gdk`.RGBA.parse].
             *
             * Note that this string representation may lose some precision,
             * since “r”, “g” and “b” are represented as 8-bit integers. If
             * this is a concern, you should use a different representation.
             * @returns A newly allocated text string
             */
            to_string(): string;
        }

        /**
         * A `GdkRectangle` data type for representing rectangles.
         *
         * `GdkRectangle` is identical to `cairo_rectangle_t`. Together with Cairo’s
         * `cairo_region_t` data type, these are the central types for representing
         * sets of pixels.
         *
         * The intersection of two rectangles can be computed with
         * [method`Gdk`.Rectangle.intersect]; to find the union of two rectangles use
         * [method`Gdk`.Rectangle.union].
         *
         * The `cairo_region_t` type provided by Cairo is usually used for managing
         * non-rectangular clipping of graphical operations.
         *
         * The Graphene library has a number of other data types for regions and
         * volumes in 2D and 3D.
         */
        class Rectangle {
            static $gtype: GObject.GType<Rectangle>;

            // Fields

            x: number;
            y: number;
            width: number;
            height: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                    width: number;
                    height: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Returns %TRUE if `rect` contains the point described by `x` and `y`.
             * @param x X coordinate
             * @param y Y coordinate
             * @returns %TRUE if @rect contains the point
             */
            contains_point(x: number, y: number): boolean;
            /**
             * Checks if the two given rectangles are equal.
             * @param rect2 a `GdkRectangle`
             * @returns %TRUE if the rectangles are equal.
             */
            equal(rect2: Rectangle): boolean;
            /**
             * Calculates the intersection of two rectangles.
             *
             * It is allowed for `dest` to be the same as either `src1` or `src2`.
             * If the rectangles do not intersect, `dest’`s width and height is set
             * to 0 and its x and y values are undefined. If you are only interested
             * in whether the rectangles intersect, but not in the intersecting area
             * itself, pass %NULL for `dest`.
             * @param src2 a `GdkRectangle`
             * @returns %TRUE if the rectangles intersect.
             */
            intersect(src2: Rectangle): [boolean, Rectangle | null];
            /**
             * Calculates the union of two rectangles.
             *
             * The union of rectangles `src1` and `src2` is the smallest rectangle which
             * includes both `src1` and `src2` within it. It is allowed for `dest` to be
             * the same as either `src1` or `src2`.
             *
             * Note that this function does not ignore 'empty' rectangles (ie. with
             * zero width or height).
             * @param src2 a `GdkRectangle`
             */
            union(src2: Rectangle): Rectangle;
        }

        type SnapshotClass = typeof Snapshot;
        type SurfaceClass = typeof Surface;
        type TextureClass = typeof Texture;
        /**
         * The `GdkTextureDownloader` is used to download the contents of a
         * [class`Gdk`.Texture].
         *
         * It is intended to be created as a short-term object for a single download,
         * but can be used for multiple downloads of different textures or with different
         * settings.
         *
         * `GdkTextureDownloader` can be used to convert data between different formats.
         * Create a `GdkTexture` for the existing format and then download it in a
         * different format.
         */
        class TextureDownloader {
            static $gtype: GObject.GType<TextureDownloader>;

            // Constructors

            constructor(texture: Texture);
            _init(...args: any[]): void;

            static ['new'](texture: Texture): TextureDownloader;

            // Methods

            /**
             * Creates a copy of the downloader.
             *
             * This function is meant for language bindings.
             * @returns A copy of the downloader
             */
            copy(): TextureDownloader;
            /**
             * Downloads the given texture pixels into a `GBytes`. The rowstride will
             * be stored in the stride value.
             *
             * This function will abort if it tries to download a large texture and
             * fails to allocate memory. If you think that may happen, you should handle
             * memory allocation yourself and use [method`Gdk`.TextureDownloader.download_into]
             * once allocation succeeded.
             * @returns The downloaded pixels
             */
            download_bytes(): [GLib.Bytes, number];
            /**
             * Downloads the `texture` into local memory.
             * @param data pointer to enough memory to be filled with the   downloaded data of the texture
             * @param stride rowstride in bytes
             */
            download_into(data: Uint8Array | string, stride: number): void;
            /**
             * Frees the given downloader and all its associated resources.
             */
            free(): void;
            /**
             * Gets the color state that the data will be downloaded in.
             * @returns The color state of the download
             */
            get_color_state(): ColorState;
            /**
             * Gets the format that the data will be downloaded in.
             * @returns The format of the download
             */
            get_format(): MemoryFormat;
            /**
             * Gets the texture that the downloader will download.
             * @returns The texture to download
             */
            get_texture(): Texture;
            /**
             * Sets the color state the downloader will convert the data to.
             *
             * By default, the sRGB colorstate returned by [func`ColorState`.get_srgb]
             * is used.
             * @param color_state the color state to use
             */
            set_color_state(color_state: ColorState): void;
            /**
             * Sets the format the downloader will download.
             *
             * By default, GDK_MEMORY_DEFAULT is set.
             * @param format the format to use
             */
            set_format(format: MemoryFormat): void;
            /**
             * Changes the texture the downloader will download.
             * @param texture the new texture to download
             */
            set_texture(texture: Texture): void;
        }

        /**
         * A `GdkTimeCoord` stores a single event in a motion history.
         *
         * To check whether an axis is present, check whether the corresponding
         * flag from the [flags`Gdk`.AxisFlags] enumeration is set in the `flags`
         * To access individual axis values, use the values of the values of
         * the [enum`Gdk`.AxisUse] enumerations as indices.
         */
        class TimeCoord {
            static $gtype: GObject.GType<TimeCoord>;

            // Fields

            time: number;
            flags: AxisFlags;
            axes: number[];

            // Constructors

            _init(...args: any[]): void;
        }

        type ToplevelInterface = typeof Toplevel;
        /**
         * The `GdkToplevelLayout` struct contains information that
         * is necessary to present a sovereign window on screen.
         *
         * The `GdkToplevelLayout` struct is necessary for using
         * [method`Gdk`.Toplevel.present].
         *
         * Toplevel surfaces are sovereign windows that can be presented
         * to the user in various states (maximized, on all workspaces,
         * etc).
         */
        class ToplevelLayout {
            static $gtype: GObject.GType<ToplevelLayout>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ToplevelLayout;

            // Methods

            /**
             * Create a new `GdkToplevelLayout` and copy the contents of `layout` into it.
             * @returns a copy of @layout.
             */
            copy(): ToplevelLayout;
            /**
             * Check whether `layout` and `other` has identical layout properties.
             * @param other another `GdkToplevelLayout`
             * @returns %TRUE if @layout and @other have identical layout properties,   otherwise %FALSE.
             */
            equal(other: ToplevelLayout): boolean;
            /**
             * If the layout specifies whether to the toplevel should go fullscreen,
             * the value pointed to by `fullscreen` is set to %TRUE if it should go
             * fullscreen, or %FALSE, if it should go unfullscreen.
             * @returns whether the @layout specifies the fullscreen state for the toplevel
             */
            get_fullscreen(): [boolean, boolean];
            /**
             * Returns the monitor that the layout is fullscreening
             * the surface on.
             * @returns the monitor on which @layout fullscreens
             */
            get_fullscreen_monitor(): Monitor | null;
            /**
             * If the layout specifies whether to the toplevel should go maximized,
             * the value pointed to by `maximized` is set to %TRUE if it should go
             * fullscreen, or %FALSE, if it should go unmaximized.
             * @returns whether the @layout specifies the maximized state for the toplevel
             */
            get_maximized(): [boolean, boolean];
            /**
             * Returns whether the layout should allow the user
             * to resize the surface.
             * @returns %TRUE if the layout is resizable
             */
            get_resizable(): boolean;
            /**
             * Increases the reference count of `layout`.
             * @returns the same @layout
             */
            ref(): ToplevelLayout;
            /**
             * Sets whether the layout should cause the surface
             * to be fullscreen when presented.
             * @param fullscreen %TRUE to fullscreen the surface
             * @param monitor the monitor to fullscreen on
             */
            set_fullscreen(fullscreen: boolean, monitor?: Monitor | null): void;
            /**
             * Sets whether the layout should cause the surface
             * to be maximized when presented.
             * @param maximized %TRUE to maximize
             */
            set_maximized(maximized: boolean): void;
            /**
             * Sets whether the layout should allow the user
             * to resize the surface after it has been presented.
             * @param resizable %TRUE to allow resizing
             */
            set_resizable(resizable: boolean): void;
            /**
             * Decreases the reference count of `layout`.
             */
            unref(): void;
        }

        /**
         * The `GdkToplevelSize` struct contains information that is useful
         * to compute the size of a toplevel.
         */
        abstract class ToplevelSize {
            static $gtype: GObject.GType<ToplevelSize>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves the bounds the toplevel is placed within.
             *
             * The bounds represent the largest size a toplevel may have while still being
             * able to fit within some type of boundary. Depending on the backend, this may
             * be equivalent to the dimensions of the work area or the monitor on which the
             * window is being presented on, or something else that limits the way a
             * toplevel can be presented.
             */
            get_bounds(): [number, number];
            /**
             * Sets the minimum size of the toplevel.
             *
             * The minimum size corresponds to the limitations the toplevel can be shrunk
             * to, without resulting in incorrect painting. A user of a `GdkToplevel` should
             * calculate these given both the existing size, and the bounds retrieved from
             * the `GdkToplevelSize` object.
             *
             * The minimum size should be within the bounds (see
             * [method`Gdk`.ToplevelSize.get_bounds]).
             * @param min_width the minimum width
             * @param min_height the minimum height
             */
            set_min_size(min_width: number, min_height: number): void;
            /**
             * Sets the shadows size of the toplevel.
             *
             * The shadow width corresponds to the part of the computed surface size
             * that would consist of the shadow margin surrounding the window, would
             * there be any.
             *
             * Shadow width should only be set if
             * [method`Gtk`.Display.supports_shadow_width] is %TRUE.
             * @param left width of the left part of the shadow
             * @param right width of the right part of the shadow
             * @param top height of the top part of the shadow
             * @param bottom height of the bottom part of the shadow
             */
            set_shadow_width(left: number, right: number, top: number, bottom: number): void;
            /**
             * Sets the size the toplevel prefers to be resized to.
             *
             * The size should be within the bounds (see
             * [method`Gdk`.ToplevelSize.get_bounds]). The set size should
             * be considered as a hint, and should not be assumed to be
             * respected by the windowing system, or backend.
             * @param width the width
             * @param height the height
             */
            set_size(width: number, height: number): void;
        }

        module DevicePad {
            // Constructor properties interface

            interface ConstructorProps extends Device.ConstructorProps {}
        }

        export interface DevicePadNamespace {
            $gtype: GObject.GType<DevicePad>;
            prototype: DevicePad;
        }
        interface DevicePad extends Device {
            // Methods

            /**
             * Returns the group the given `feature` and `idx` belong to.
             *
             * f the feature or index do not exist in `pad,` -1 is returned.
             * @param feature the feature type to get the group from
             * @param feature_idx the index of the feature to get the group from
             * @returns The group number of the queried pad feature.
             */
            get_feature_group(feature: DevicePadFeature, feature_idx: number): number;
            /**
             * Returns the number of modes that `group` may have.
             * @param group_idx group to get the number of available modes from
             * @returns The number of modes available in @group.
             */
            get_group_n_modes(group_idx: number): number;
            /**
             * Returns the number of features a tablet pad has.
             * @param feature a pad feature
             * @returns The amount of elements of type @feature that this pad has.
             */
            get_n_features(feature: DevicePadFeature): number;
            /**
             * Returns the number of groups this pad device has.
             *
             * Pads have at least one group. A pad group is a subcollection of
             * buttons/strip/rings that is affected collectively by a same
             * current mode.
             * @returns The number of button/ring/strip groups in the pad.
             */
            get_n_groups(): number;
        }

        export const DevicePad: DevicePadNamespace;

        module DragSurface {
            // Constructor properties interface

            interface ConstructorProps extends Surface.ConstructorProps {}
        }

        export interface DragSurfaceNamespace {
            $gtype: GObject.GType<DragSurface>;
            prototype: DragSurface;
        }
        interface DragSurface extends Surface {
            // Methods

            /**
             * Present `drag_surface`.
             * @param width the unconstrained drag_surface width to layout
             * @param height the unconstrained drag_surface height to layout
             * @returns %FALSE if it failed to be presented, otherwise %TRUE.
             */
            present(width: number, height: number): boolean;
        }

        export const DragSurface: DragSurfaceNamespace;

        module Paintable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface PaintableNamespace {
            $gtype: GObject.GType<Paintable>;
            prototype: Paintable;

            /**
             * Returns a paintable that has the given intrinsic size and draws nothing.
             *
             * This is often useful for implementing the
             * [vfunc`Gdk`.Paintable.get_current_image] virtual function
             * when the paintable is in an incomplete state (like a
             * [GtkMediaStream](../gtk4/class.MediaStream.html) before receiving
             * the first frame).
             * @param intrinsic_width The intrinsic width to report. Can be 0 for no width.
             * @param intrinsic_height The intrinsic height to report. Can be 0 for no height.
             */
            new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;
        }
        interface Paintable extends GObject.Object {
            // Methods

            /**
             * Compute a concrete size for the `GdkPaintable`.
             *
             * Applies the sizing algorithm outlined in the
             * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
             * to the given `paintable`. See that link for more details.
             *
             * It is not necessary to call this function when both `specified_width`
             * and `specified_height` are known, but it is useful to call this
             * function in GtkWidget:measure implementations to compute the
             * other dimension when only one dimension is given.
             * @param specified_width the width @paintable could be drawn into or   0.0 if unknown
             * @param specified_height the height @paintable could be drawn into or   0.0 if unknown
             * @param default_width the width @paintable would be drawn into if   no other constraints were given
             * @param default_height the height @paintable would be drawn into if   no other constraints were given
             */
            compute_concrete_size(
                specified_width: number,
                specified_height: number,
                default_width: number,
                default_height: number,
            ): [number, number];
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             * @returns An immutable paintable for the current   contents of @paintable
             */
            get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             * @returns The `GdkPaintableFlags` for this paintable
             */
            get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             * @returns the intrinsic aspect ratio of @paintable or 0 if none.
             */
            get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic height of @paintable or 0 if none.
             */
            get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             * @returns the intrinsic width of @paintable or 0 if none.
             */
            get_intrinsic_width(): number;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their contents.
             *
             * Unless the contents are invalidated, implementations must guarantee that
             * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
             * it must not call this function.
             */
            invalidate_contents(): void;
            /**
             * Called by implementations of `GdkPaintable` to invalidate their size.
             *
             * As long as the size is not invalidated, `paintable` must return the same
             * values for its intrinsic width, height and aspect ratio.
             *
             * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
             * signal.
             *
             * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
             * it must not call this function.
             */
            invalidate_size(): void;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            snapshot(snapshot: Snapshot, width: number, height: number): void;

            // Virtual methods

            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             */
            vfunc_get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             */
            vfunc_get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             */
            vfunc_get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_width(): number;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
        }

        export const Paintable: PaintableNamespace;

        module Popup {
            // Constructor properties interface

            interface ConstructorProps extends Surface.ConstructorProps {
                autohide: boolean;
                parent: Surface;
            }
        }

        export interface PopupNamespace {
            $gtype: GObject.GType<Popup>;
            prototype: Popup;
        }
        interface Popup extends Surface {
            // Properties

            /**
             * Whether to hide on outside clicks.
             */
            get autohide(): boolean;
            /**
             * The parent surface.
             */
            get parent(): Surface;

            // Methods

            /**
             * Returns whether this popup is set to hide on outside clicks.
             * @returns %TRUE if @popup will autohide
             */
            get_autohide(): boolean;
            /**
             * Returns the parent surface of a popup.
             * @returns the parent surface
             */
            get_parent(): Surface | null;
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
            get_rect_anchor(): Gravity;
            /**
             * Gets the current popup surface anchor.
             *
             * The value returned may change after calling [method`Gdk`.Popup.present],
             * or after the [signal`Gdk`.Surface::layout] signal is emitted.
             * @returns the current surface anchor value of @popup
             */
            get_surface_anchor(): Gravity;
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
            present(width: number, height: number, layout: PopupLayout): boolean;
        }

        export const Popup: PopupNamespace;

        module Toplevel {
            // Constructor properties interface

            interface ConstructorProps extends Surface.ConstructorProps {
                decorated: boolean;
                deletable: boolean;
                fullscreen_mode: FullscreenMode;
                fullscreenMode: FullscreenMode;
                icon_list: any;
                iconList: any;
                modal: boolean;
                shortcuts_inhibited: boolean;
                shortcutsInhibited: boolean;
                startup_id: string;
                startupId: string;
                state: ToplevelState;
                title: string;
                transient_for: Surface;
                transientFor: Surface;
            }
        }

        export interface ToplevelNamespace {
            $gtype: GObject.GType<Toplevel>;
            prototype: Toplevel;
        }
        interface Toplevel extends Surface {
            // Properties

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
            get fullscreen_mode(): FullscreenMode;
            set fullscreen_mode(val: FullscreenMode);
            /**
             * The fullscreen mode of the surface.
             */
            get fullscreenMode(): FullscreenMode;
            set fullscreenMode(val: FullscreenMode);
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
            get state(): ToplevelState;
            /**
             * The title of the surface.
             */
            get title(): string;
            set title(val: string);
            /**
             * The transient parent of the surface.
             */
            get transient_for(): Surface;
            set transient_for(val: Surface);
            /**
             * The transient parent of the surface.
             */
            get transientFor(): Surface;
            set transientFor(val: Surface);

            // Methods

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
            begin_move(device: Device, button: number, x: number, y: number, timestamp: number): void;
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
                edge: SurfaceEdge,
                device: Device | null,
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
            get_state(): ToplevelState;
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
            inhibit_system_shortcuts(event?: Event | null): void;
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
            present(layout: ToplevelLayout): void;
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
            set_icon_list(surfaces: Texture[]): void;
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
            set_transient_for(parent: Surface): void;
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
            show_window_menu(event: Event): boolean;
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
            titlebar_gesture(gesture: TitlebarGesture): boolean;
        }

        export const Toplevel: ToplevelNamespace;

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

    export default Gdk;
}

declare module 'gi://Gdk' {
    import Gdk40 from 'gi://Gdk?version=4.0';
    export default Gdk40;
}
// END
