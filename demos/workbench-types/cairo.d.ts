declare module 'cairo' {
    // Cairo 1.0
    import type Cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';

    namespace giCairo {
        // Add overrides here
        // See
        // - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/cairo.md
        // - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairoModule.js
        // - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairo.js
        // - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/cairo-context.cpp

        // START Re-exported enums, copied from cairo-1.0.d.ts
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

        // END Re-exported enums, copied from cairo-1.0.d.ts

        export class Context extends Cairo.Context {
            constructor(surface: Surface);

            arc(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
            arcNegative(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
            curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            clip(): void;
            clipPreserve(): void;
            clipExtents(): [number, number, number, number];
            closePath(): void;
            copyPage(): void;
            deviceToUser(x: number, y: number): [number, number];
            deviceToUserDistance(x: number, y: number): [number, number];
            fill(): void;
            fillPreserve(): void;
            fillExtents(): [number, number, number, number];
            getAntialias(): Antialias;
            getCurrentPoint(): [number, number];
            getDashCount(): number;
            getFillRule(): FillRule;
            getLineCap(): LineCap;
            getLineJoin(): LineJoin;
            getLineWidth(): number;
            getMiterLimit(): number;
            getOperator(): Operator;
            getTolerance(): number;
            hasCurrentPoint(): boolean;
            identityMatrix(): void;
            inFill(x: number, y: number): boolean;
            inStroke(x: number, y: number): boolean;
            lineTo(x: number, y: number): void;
            moveTo(x: number, y: number): void;
            newPath(): void;
            newSubPath(): void;
            paint(): void;
            paintWithAlpha(alpha: number): void;
            pathExtents(): [number, number, number, number];
            popGroup(): Pattern;
            popGroupToSource(): void;
            pushGroup(): void;
            pushGroupWithContent(content: Content): void;
            rectangle(x: number, y: number, width: number, height: number): void;
            relCurveTo(dx1: number, dy1: number, dx2: number, dy2: number, dx3: number, dy3: number): void;
            relLineTo(dx: number, dy: number): void;
            relMoveTo(dx: number, dy: number): void;
            resetClip(): void;
            restore(): void;
            rotate(angle: number): void;
            save(): void;
            scale(sx: number, sy: number): void;
            selectFontFace(family: string, slant: number, weight: number): void;
            setAntialias(antialias: Antialias): void;
            setDash(dashes: number[], offset: number): void;
            setFontSize(size: number): void;
            setFillRule(fillRule: FillRule): void;
            setLineCap(lineCap: LineCap): void;
            setLineJoin(lineJoin: LineJoin): void;
            setLineWidth(width: number): void;
            setMiterLimit(limit: number): void;
            setOperator(op: Operator): void;
            setSource(pattern: Pattern): void;
            setSourceRGB(red: number, green: number, blue: number): void;
            setSourceRGBA(red: number, green: number, blue: number, alpha: number): void;
            setSourceSurface(surface: Surface, x: number, y: number): void;
            setTolerance(tolerance: number): void;
            showPage(): void;
            showText(utf8: string): void;
            stroke(): void;
            strokePreserve(): void;
            strokeExtents(): [number, number, number, number];
            textExtents(utf8: string): TextExtents;
            translate(tx: number, ty: number): void;
            userToDevice(x: number, y: number): [number, number];
            userToDeviceDistance(x: number, y: number): [number, number];
        }

        export abstract class Surface extends Cairo.Surface {
            // TODO
        }

        export class ImageSurface extends Surface {
            constructor(format: Format, width: number, height: number);

            static createFromPNG(filename: string): ImageSurface;

            // TODO
        }

        export class PDFSurface extends Surface {
            constructor(filename: string, width: number, height: number);

            // TODO
        }

        export class PSSurface extends Surface {
            constructor(filename: string, width: number, height: number);

            // TODO
        }

        export class SVGSurface extends Surface {
            constructor(filename: string, width: number, height: number);

            // TODO
        }

        export class Pattern extends Cairo.Pattern {
            // TODO
        }

        export class Gradient extends Pattern {
            // TODO
        }

        export class LinearGradient extends Gradient {
            // TODO
        }

        export class RadialGradient extends Gradient {
            // TODO
        }

        export class SurfacePattern extends Pattern {
            // TODO
        }

        export class SolidPattern extends Pattern {
            // TODO
        }

        export class Path extends Cairo.Path {
            // TODO
        }

        export interface TextExtents {
            xBearing: number;
            yBearing: number;
            width: number;
            height: number;
            xAdvance: number;
            yAdvance: number;
        }
    }

    export default giCairo;
}
