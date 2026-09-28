/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GDesktopEnums?version=3.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace GDesktopEnums {
        /**
         * GDesktopEnums-3.0
         */

        export namespace AccentColor {
            export const $gtype: GObject.GType<AccentColor>;
        }

        enum AccentColor {
            BLUE,
            TEAL,
            GREEN,
            YELLOW,
            ORANGE,
            RED,
            PINK,
            PURPLE,
            SLATE,
        }

        export namespace BackgroundShading {
            export const $gtype: GObject.GType<BackgroundShading>;
        }

        enum BackgroundShading {
            SOLID,
            VERTICAL,
            HORIZONTAL,
        }

        export namespace BackgroundStyle {
            export const $gtype: GObject.GType<BackgroundStyle>;
        }

        enum BackgroundStyle {
            NONE,
            WALLPAPER,
            CENTERED,
            SCALED,
            STRETCHED,
            ZOOM,
            SPANNED,
        }

        export namespace ClockFormat {
            export const $gtype: GObject.GType<ClockFormat>;
        }

        enum ClockFormat {
            '24H',
            '12H',
        }

        export namespace ColorScheme {
            export const $gtype: GObject.GType<ColorScheme>;
        }

        enum ColorScheme {
            DEFAULT,
            PREFER_DARK,
            PREFER_LIGHT,
        }

        export namespace DeviceSendEvents {
            export const $gtype: GObject.GType<DeviceSendEvents>;
        }

        enum DeviceSendEvents {
            ENABLED,
            DISABLED,
            DISABLED_ON_EXTERNAL_MOUSE,
        }

        export namespace FocusMode {
            export const $gtype: GObject.GType<FocusMode>;
        }

        enum FocusMode {
            CLICK,
            SLOPPY,
            MOUSE,
        }

        export namespace FocusNewWindows {
            export const $gtype: GObject.GType<FocusNewWindows>;
        }

        enum FocusNewWindows {
            SMART,
            STRICT,
        }

        export namespace FontAntialiasingMode {
            export const $gtype: GObject.GType<FontAntialiasingMode>;
        }

        enum FontAntialiasingMode {
            NONE,
            GRAYSCALE,
            RGBA,
        }

        export namespace FontHinting {
            export const $gtype: GObject.GType<FontHinting>;
        }

        enum FontHinting {
            NONE,
            SLIGHT,
            MEDIUM,
            FULL,
        }

        export namespace FontRendering {
            export const $gtype: GObject.GType<FontRendering>;
        }

        enum FontRendering {
            AUTOMATIC,
            MANUAL,
        }

        export namespace FontRgbaOrder {
            export const $gtype: GObject.GType<FontRgbaOrder>;
        }

        enum FontRgbaOrder {
            RGBA,
            RGB,
            BGR,
            VRGB,
            VBGR,
        }

        export namespace LocationAccuracyLevel {
            export const $gtype: GObject.GType<LocationAccuracyLevel>;
        }

        enum LocationAccuracyLevel {
            COUNTRY,
            CITY,
            NEIGHBORHOOD,
            STREET,
            EXACT,
        }

        export namespace MagnifierCaretTrackingMode {
            export const $gtype: GObject.GType<MagnifierCaretTrackingMode>;
        }

        enum MagnifierCaretTrackingMode {
            NONE,
            CENTERED,
            PROPORTIONAL,
            PUSH,
        }

        export namespace MagnifierFocusTrackingMode {
            export const $gtype: GObject.GType<MagnifierFocusTrackingMode>;
        }

        enum MagnifierFocusTrackingMode {
            NONE,
            CENTERED,
            PROPORTIONAL,
            PUSH,
        }

        export namespace MagnifierMouseTrackingMode {
            export const $gtype: GObject.GType<MagnifierMouseTrackingMode>;
        }

        enum MagnifierMouseTrackingMode {
            NONE,
            CENTERED,
            PROPORTIONAL,
            PUSH,
        }

        export namespace MagnifierScreenPosition {
            export const $gtype: GObject.GType<MagnifierScreenPosition>;
        }

        enum MagnifierScreenPosition {
            NONE,
            FULL_SCREEN,
            TOP_HALF,
            BOTTOM_HALF,
            LEFT_HALF,
            RIGHT_HALF,
        }

        export namespace MouseDwellDirection {
            export const $gtype: GObject.GType<MouseDwellDirection>;
        }

        enum MouseDwellDirection {
            LEFT,
            RIGHT,
            UP,
            DOWN,
        }

        export namespace MouseDwellMode {
            export const $gtype: GObject.GType<MouseDwellMode>;
        }

        enum MouseDwellMode {
            WINDOW,
            GESTURE,
        }

        export namespace PadButtonAction {
            export const $gtype: GObject.GType<PadButtonAction>;
        }

        enum PadButtonAction {
            NONE,
            HELP,
            SWITCH_MONITOR,
            KEYBINDING,
        }

        export namespace PointerAccelProfile {
            export const $gtype: GObject.GType<PointerAccelProfile>;
        }

        enum PointerAccelProfile {
            DEFAULT,
            FLAT,
            ADAPTIVE,
        }

        export namespace PointingStickScrollMethod {
            export const $gtype: GObject.GType<PointingStickScrollMethod>;
        }

        enum PointingStickScrollMethod {
            DEFAULT,
            NONE,
            ON_BUTTON_DOWN,
        }

        export namespace ProxyMode {
            export const $gtype: GObject.GType<ProxyMode>;
        }

        enum ProxyMode {
            NONE,
            MANUAL,
            AUTO,
        }

        export namespace ScreensaverMode {
            export const $gtype: GObject.GType<ScreensaverMode>;
        }

        enum ScreensaverMode {
            BLANK_ONLY,
            RANDOM,
            SINGLE,
        }

        export namespace StylusButtonAction {
            export const $gtype: GObject.GType<StylusButtonAction>;
        }

        enum StylusButtonAction {
            DEFAULT,
            MIDDLE,
            RIGHT,
            BACK,
            FORWARD,
            SWITCH_MONITOR,
            KEYBINDING,
        }

        export namespace TabletMapping {
            export const $gtype: GObject.GType<TabletMapping>;
        }

        enum TabletMapping {
            ABSOLUTE,
            RELATIVE,
        }

        export namespace TitlebarAction {
            export const $gtype: GObject.GType<TitlebarAction>;
        }

        enum TitlebarAction {
            TOGGLE_SHADE,
            TOGGLE_MAXIMIZE,
            TOGGLE_MAXIMIZE_HORIZONTALLY,
            TOGGLE_MAXIMIZE_VERTICALLY,
            MINIMIZE,
            NONE,
            LOWER,
            MENU,
        }

        export namespace ToolbarIconSize {
            export const $gtype: GObject.GType<ToolbarIconSize>;
        }

        enum ToolbarIconSize {
            SMALL,
            LARGE,
        }

        export namespace ToolbarStyle {
            export const $gtype: GObject.GType<ToolbarStyle>;
        }

        enum ToolbarStyle {
            BOTH,
            BOTH_HORIZ,
            ICONS,
            TEXT,
        }

        export namespace TouchpadClickMethod {
            export const $gtype: GObject.GType<TouchpadClickMethod>;
        }

        enum TouchpadClickMethod {
            DEFAULT,
            NONE,
            AREAS,
            FINGERS,
        }

        export namespace TouchpadHandedness {
            export const $gtype: GObject.GType<TouchpadHandedness>;
        }

        enum TouchpadHandedness {
            RIGHT,
            LEFT,
            MOUSE,
        }

        export namespace TouchpadTapButtonMap {
            export const $gtype: GObject.GType<TouchpadTapButtonMap>;
        }

        enum TouchpadTapButtonMap {
            DEFAULT,
            LRM,
            LMR,
        }

        export namespace UsbProtection {
            export const $gtype: GObject.GType<UsbProtection>;
        }

        enum UsbProtection {
            LOCKSCREEN,
            ALWAYS,
        }

        export namespace VisualBellType {
            export const $gtype: GObject.GType<VisualBellType>;
        }

        enum VisualBellType {
            FULLSCREEN_FLASH,
            FRAME_FLASH,
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

    export default GDesktopEnums;
}

declare module 'gi://GDesktopEnums' {
    import GDesktopEnums30 from 'gi://GDesktopEnums?version=3.0';
    export default GDesktopEnums30;
}
// END
