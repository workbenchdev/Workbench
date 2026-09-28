/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://cairo?version=1.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace cairo {
        /**
         * cairo-1.0
         */

        export namespace Status {
            export const $gtype: GObject.GType<Status>;
        }

        enum Status {
            SUCCESS,
            NO_MEMORY,
            INVALID_RESTORE,
            INVALID_POP_GROUP,
            NO_CURRENT_POINT,
            INVALID_MATRIX,
            INVALID_STATUS,
            NULL_POINTER,
            INVALID_STRING,
            INVALID_PATH_DATA,
            READ_ERROR,
            WRITE_ERROR,
            SURFACE_FINISHED,
            SURFACE_TYPE_MISMATCH,
            PATTERN_TYPE_MISMATCH,
            INVALID_CONTENT,
            INVALID_FORMAT,
            INVALID_VISUAL,
            FILE_NOT_FOUND,
            INVALID_DASH,
            INVALID_DSC_COMMENT,
            INVALID_INDEX,
            CLIP_NOT_REPRESENTABLE,
            TEMP_FILE_ERROR,
            INVALID_STRIDE,
            FONT_TYPE_MISMATCH,
            USER_FONT_IMMUTABLE,
            USER_FONT_ERROR,
            NEGATIVE_COUNT,
            INVALID_CLUSTERS,
            INVALID_SLANT,
            INVALID_WEIGHT,
            INVALID_SIZE,
            USER_FONT_NOT_IMPLEMENTED,
            DEVICE_TYPE_MISMATCH,
            DEVICE_ERROR,
            INVALID_MESH_CONSTRUCTION,
            DEVICE_FINISHED,
            JBIG2_GLOBAL_MISSING,
        }

        export namespace Content {
            export const $gtype: GObject.GType<Content>;
        }

        enum Content {
            COLOR,
            ALPHA,
            COLOR_ALPHA,
        }

        export namespace Operator {
            export const $gtype: GObject.GType<Operator>;
        }

        enum Operator {
            CLEAR,
            SOURCE,
            OVER,
            IN,
            OUT,
            ATOP,
            DEST,
            DEST_OVER,
            DEST_IN,
            DEST_OUT,
            DEST_ATOP,
            XOR,
            ADD,
            SATURATE,
            MULTIPLY,
            SCREEN,
            OVERLAY,
            DARKEN,
            LIGHTEN,
            COLOR_DODGE,
            COLOR_BURN,
            HARD_LIGHT,
            SOFT_LIGHT,
            DIFFERENCE,
            EXCLUSION,
            HSL_HUE,
            HSL_SATURATION,
            HSL_COLOR,
            HSL_LUMINOSITY,
        }

        export namespace Antialias {
            export const $gtype: GObject.GType<Antialias>;
        }

        enum Antialias {
            DEFAULT,
            NONE,
            GRAY,
            SUBPIXEL,
            FAST,
            GOOD,
            BEST,
        }

        export namespace FillRule {
            export const $gtype: GObject.GType<FillRule>;
        }

        enum FillRule {
            WINDING,
            EVEN_ODD,
        }

        export namespace LineCap {
            export const $gtype: GObject.GType<LineCap>;
        }

        enum LineCap {
            BUTT,
            ROUND,
            SQUARE,
        }

        export namespace LineJoin {
            export const $gtype: GObject.GType<LineJoin>;
        }

        enum LineJoin {
            MITER,
            ROUND,
            BEVEL,
        }

        export namespace TextClusterFlags {
            export const $gtype: GObject.GType<TextClusterFlags>;
        }

        enum TextClusterFlags {
            BACKWARD,
        }

        export namespace FontSlant {
            export const $gtype: GObject.GType<FontSlant>;
        }

        enum FontSlant {
            NORMAL,
            ITALIC,
            OBLIQUE,
        }

        export namespace FontWeight {
            export const $gtype: GObject.GType<FontWeight>;
        }

        enum FontWeight {
            NORMAL,
            BOLD,
        }

        export namespace SubpixelOrder {
            export const $gtype: GObject.GType<SubpixelOrder>;
        }

        enum SubpixelOrder {
            DEFAULT,
            RGB,
            BGR,
            VRGB,
            VBGR,
        }

        export namespace HintStyle {
            export const $gtype: GObject.GType<HintStyle>;
        }

        enum HintStyle {
            DEFAULT,
            NONE,
            SLIGHT,
            MEDIUM,
            FULL,
        }

        export namespace HintMetrics {
            export const $gtype: GObject.GType<HintMetrics>;
        }

        enum HintMetrics {
            DEFAULT,
            OFF,
            ON,
        }

        export namespace FontType {
            export const $gtype: GObject.GType<FontType>;
        }

        enum FontType {
            TOY,
            FT,
            WIN32,
            QUARTZ,
            USER,
        }

        export namespace PathDataType {
            export const $gtype: GObject.GType<PathDataType>;
        }

        enum PathDataType {
            MOVE_TO,
            LINE_TO,
            CURVE_TO,
            CLOSE_PATH,
        }

        export namespace DeviceType {
            export const $gtype: GObject.GType<DeviceType>;
        }

        enum DeviceType {
            DRM,
            GL,
            SCRIPT,
            XCB,
            XLIB,
            XML,
            COGL,
            WIN32,
            INVALID,
        }

        export namespace SurfaceType {
            export const $gtype: GObject.GType<SurfaceType>;
        }

        enum SurfaceType {
            IMAGE,
            PDF,
            PS,
            XLIB,
            XCB,
            GLITZ,
            QUARTZ,
            WIN32,
            BEOS,
            DIRECTFB,
            SVG,
            OS2,
            WIN32_PRINTING,
            QUARTZ_IMAGE,
            SCRIPT,
            QT,
            RECORDING,
            VG,
            GL,
            DRM,
            TEE,
            XML,
            SKIA,
            SUBSURFACE,
            COGL,
        }

        export namespace Format {
            export const $gtype: GObject.GType<Format>;
        }

        enum Format {
            INVALID,
            ARGB32,
            RGB24,
            A8,
            A1,
            RGB16_565,
            RGB30,
        }

        export namespace PatternType {
            export const $gtype: GObject.GType<PatternType>;
        }

        enum PatternType {
            SOLID,
            SURFACE,
            LINEAR,
            RADIAL,
            MESH,
            RASTER_SOURCE,
        }

        export namespace Extend {
            export const $gtype: GObject.GType<Extend>;
        }

        enum Extend {
            NONE,
            REPEAT,
            REFLECT,
            PAD,
        }

        export namespace Filter {
            export const $gtype: GObject.GType<Filter>;
        }

        enum Filter {
            FAST,
            GOOD,
            BEST,
            NEAREST,
            BILINEAR,
            GAUSSIAN,
        }

        export namespace RegionOverlap {
            export const $gtype: GObject.GType<RegionOverlap>;
        }

        enum RegionOverlap {
            IN,
            OUT,
            PART,
        }
        function image_surface_create(): void;
        class Context {
            static $gtype: GObject.GType<Context>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Device {
            static $gtype: GObject.GType<Device>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Surface {
            static $gtype: GObject.GType<Surface>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Matrix {
            static $gtype: GObject.GType<Matrix>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Pattern {
            static $gtype: GObject.GType<Pattern>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Region {
            static $gtype: GObject.GType<Region>;

            // Constructors

            _init(...args: any[]): void;
        }

        class FontOptions {
            static $gtype: GObject.GType<FontOptions>;

            // Constructors

            _init(...args: any[]): void;
        }

        class FontFace {
            static $gtype: GObject.GType<FontFace>;

            // Constructors

            _init(...args: any[]): void;
        }

        class ScaledFont {
            static $gtype: GObject.GType<ScaledFont>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Path {
            static $gtype: GObject.GType<Path>;

            // Constructors

            _init(...args: any[]): void;
        }

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
        }

        class RectangleInt {
            static $gtype: GObject.GType<RectangleInt>;

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
        }

        class Glyph {
            static $gtype: GObject.GType<Glyph>;

            // Fields

            index: number;
            x: number;
            y: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    index: number;
                    x: number;
                    y: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class TextCluster {
            static $gtype: GObject.GType<TextCluster>;

            // Fields

            num_bytes: number;
            num_glyphs: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    num_bytes: number;
                    num_glyphs: number;
                }>,
            );
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

    export default cairo;
}

declare module 'gi://cairo' {
    import Cairo10 from 'gi://cairo?version=1.0';
    export default Cairo10;
}
// END
