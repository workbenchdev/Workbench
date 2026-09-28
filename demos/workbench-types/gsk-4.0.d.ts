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

declare module 'gi://Gsk?version=4.0' {
    // Module dependencies
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

    export namespace Gsk {
        /**
         * Gsk-4.0
         */

        /**
         * The blend modes available for render nodes.
         *
         * The implementation of each blend mode is deferred to the
         * rendering pipeline.
         *
         * See <https://www.w3.org/TR/compositing-1/#blending> for more information
         * on blending and blend modes.
         */

        /**
         * The blend modes available for render nodes.
         *
         * The implementation of each blend mode is deferred to the
         * rendering pipeline.
         *
         * See <https://www.w3.org/TR/compositing-1/#blending> for more information
         * on blending and blend modes.
         */
        export namespace BlendMode {
            export const $gtype: GObject.GType<BlendMode>;
        }

        enum BlendMode {
            /**
             * The default blend mode, which specifies no blending
             */
            DEFAULT,
            /**
             * The source color is multiplied by the destination
             *   and replaces the destination
             */
            MULTIPLY,
            /**
             * Multiplies the complements of the destination and source
             *   color values, then complements the result.
             */
            SCREEN,
            /**
             * Multiplies or screens the colors, depending on the
             *   destination color value. This is the inverse of hard-list
             */
            OVERLAY,
            /**
             * Selects the darker of the destination and source colors
             */
            DARKEN,
            /**
             * Selects the lighter of the destination and source colors
             */
            LIGHTEN,
            /**
             * Brightens the destination color to reflect the source color
             */
            COLOR_DODGE,
            /**
             * Darkens the destination color to reflect the source color
             */
            COLOR_BURN,
            /**
             * Multiplies or screens the colors, depending on the source color value
             */
            HARD_LIGHT,
            /**
             * Darkens or lightens the colors, depending on the source color value
             */
            SOFT_LIGHT,
            /**
             * Subtracts the darker of the two constituent colors from the lighter color
             */
            DIFFERENCE,
            /**
             * Produces an effect similar to that of the difference mode but lower in contrast
             */
            EXCLUSION,
            /**
             * Creates a color with the hue and saturation of the source color and the luminosity of the destination color
             */
            COLOR,
            /**
             * Creates a color with the hue of the source color and the saturation and luminosity of the destination color
             */
            HUE,
            /**
             * Creates a color with the saturation of the source color and the hue and luminosity of the destination color
             */
            SATURATION,
            /**
             * Creates a color with the luminosity of the source color and the hue and saturation of the destination color
             */
            LUMINOSITY,
        }
        /**
         * The corner indices used by `GskRoundedRect`.
         */

        /**
         * The corner indices used by `GskRoundedRect`.
         */
        export namespace Corner {
            export const $gtype: GObject.GType<Corner>;
        }

        enum Corner {
            /**
             * The top left corner
             */
            TOP_LEFT,
            /**
             * The top right corner
             */
            TOP_RIGHT,
            /**
             * The bottom right corner
             */
            BOTTOM_RIGHT,
            /**
             * The bottom left corner
             */
            BOTTOM_LEFT,
        }
        /**
         * `GskFillRule` is used to select how paths are filled.
         *
         * Whether or not a point is included in the fill is determined by taking
         * a ray from that point to infinity and looking at intersections with the
         * path. The ray can be in any direction, as long as it doesn't pass through
         * the end point of a segment or have a tricky intersection such as
         * intersecting tangent to the path.
         *
         * (Note that filling is not actually implemented in this way. This
         * is just a description of the rule that is applied.)
         *
         * New entries may be added in future versions.
         */

        /**
         * `GskFillRule` is used to select how paths are filled.
         *
         * Whether or not a point is included in the fill is determined by taking
         * a ray from that point to infinity and looking at intersections with the
         * path. The ray can be in any direction, as long as it doesn't pass through
         * the end point of a segment or have a tricky intersection such as
         * intersecting tangent to the path.
         *
         * (Note that filling is not actually implemented in this way. This
         * is just a description of the rule that is applied.)
         *
         * New entries may be added in future versions.
         */
        export namespace FillRule {
            export const $gtype: GObject.GType<FillRule>;
        }

        enum FillRule {
            /**
             * If the path crosses the ray from
             *   left-to-right, counts +1. If the path crosses the ray
             *   from right to left, counts -1. (Left and right are determined
             *   from the perspective of looking along the ray from the starting
             *   point.) If the total count is non-zero, the point will be filled.
             */
            WINDING,
            /**
             * Counts the total number of
             *   intersections, without regard to the orientation of the contour. If
             *   the total number of intersections is odd, the point will be
             *   filled.
             */
            EVEN_ODD,
        }
        /**
         * This defines the types of the uniforms that `GskGLShaders`
         * declare.
         *
         * It defines both what the type is called in the GLSL shader
         * code, and what the corresponding C type is on the Gtk side.
         */

        /**
         * This defines the types of the uniforms that `GskGLShaders`
         * declare.
         *
         * It defines both what the type is called in the GLSL shader
         * code, and what the corresponding C type is on the Gtk side.
         */
        export namespace GLUniformType {
            export const $gtype: GObject.GType<GLUniformType>;
        }

        enum GLUniformType {
            /**
             * No type, used for uninitialized or unspecified values.
             */
            NONE,
            /**
             * A float uniform
             */
            FLOAT,
            /**
             * A GLSL int / gint32 uniform
             */
            INT,
            /**
             * A GLSL uint / guint32 uniform
             */
            UINT,
            /**
             * A GLSL bool / gboolean uniform
             */
            BOOL,
            /**
             * A GLSL vec2 / graphene_vec2_t uniform
             */
            VEC2,
            /**
             * A GLSL vec3 / graphene_vec3_t uniform
             */
            VEC3,
            /**
             * A GLSL vec4 / graphene_vec4_t uniform
             */
            VEC4,
        }
        /**
         * Specifies how to render the start and end points of contours or
         * dashes when stroking.
         *
         * The default line cap style is `GSK_LINE_CAP_BUTT`.
         *
         * New entries may be added in future versions.
         *
         * <figure>
         *   <picture>
         *     <source srcset="caps-dark.png" media="(prefers-color-scheme: dark)">
         *     <img alt="Line Cap Styles" src="caps-light.png">
         *   </picture>
         *   <figcaption>GSK_LINE_CAP_BUTT, GSK_LINE_CAP_ROUND, GSK_LINE_CAP_SQUARE</figcaption>
         * </figure>
         */

        /**
         * Specifies how to render the start and end points of contours or
         * dashes when stroking.
         *
         * The default line cap style is `GSK_LINE_CAP_BUTT`.
         *
         * New entries may be added in future versions.
         *
         * <figure>
         *   <picture>
         *     <source srcset="caps-dark.png" media="(prefers-color-scheme: dark)">
         *     <img alt="Line Cap Styles" src="caps-light.png">
         *   </picture>
         *   <figcaption>GSK_LINE_CAP_BUTT, GSK_LINE_CAP_ROUND, GSK_LINE_CAP_SQUARE</figcaption>
         * </figure>
         */
        export namespace LineCap {
            export const $gtype: GObject.GType<LineCap>;
        }

        enum LineCap {
            /**
             * Start and stop the line exactly at the start
             *   and end point
             */
            BUTT,
            /**
             * Use a round ending, the center of the circle
             *   is the start or end point
             */
            ROUND,
            /**
             * use squared ending, the center of the square
             *   is the start or end point
             */
            SQUARE,
        }
        /**
         * Specifies how to render the junction of two lines when stroking.
         *
         * The default line join style is `GSK_LINE_JOIN_MITER`.
         *
         * New entries may be added in future versions.
         *
         * <figure>
         *   <picture>
         *     <source srcset="join-dark.png" media="(prefers-color-scheme: dark)">
         *     <img alt="Line Join Styles" src="join-light.png">
         *   </picture>
         *   <figcaption>GSK_LINE_JOINT_MITER, GSK_LINE_JOINT_ROUND, GSK_LINE_JOIN_BEVEL</figcaption>
         * </figure>
         */

        /**
         * Specifies how to render the junction of two lines when stroking.
         *
         * The default line join style is `GSK_LINE_JOIN_MITER`.
         *
         * New entries may be added in future versions.
         *
         * <figure>
         *   <picture>
         *     <source srcset="join-dark.png" media="(prefers-color-scheme: dark)">
         *     <img alt="Line Join Styles" src="join-light.png">
         *   </picture>
         *   <figcaption>GSK_LINE_JOINT_MITER, GSK_LINE_JOINT_ROUND, GSK_LINE_JOIN_BEVEL</figcaption>
         * </figure>
         */
        export namespace LineJoin {
            export const $gtype: GObject.GType<LineJoin>;
        }

        enum LineJoin {
            /**
             * Use a sharp angled corner
             */
            MITER,
            /**
             * Use a round join, the center of the circle is
             *   the join point
             */
            ROUND,
            /**
             * use a cut-off join, the join is cut off at half
             *   the line width from the joint point
             */
            BEVEL,
        }
        /**
         * The mask modes available for mask nodes.
         */

        /**
         * The mask modes available for mask nodes.
         */
        export namespace MaskMode {
            export const $gtype: GObject.GType<MaskMode>;
        }

        enum MaskMode {
            /**
             * Use the alpha channel of the mask
             */
            ALPHA,
            /**
             * Use the inverted alpha channel of the mask
             */
            INVERTED_ALPHA,
            /**
             * Use the luminance of the mask,
             *     multiplied by mask alpha
             */
            LUMINANCE,
            /**
             * Use the inverted luminance of the mask,
             *     multiplied by mask alpha
             */
            INVERTED_LUMINANCE,
        }
        /**
         * The values of the `GskPathDirection` enum are used to pick one
         * of the four tangents at a given point on the path.
         *
         * Note that the directions for `GSK_PATH_FROM_START/``GSK_PATH_TO_END` and
         * `GSK_PATH_TO_START/``GSK_PATH_FROM_END` will coincide for smooth points.
         * Only sharp turns will exhibit four different directions.
         *
         * <picture>
         *   <source srcset="directions-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Path Tangents" src="directions-light.png">
         * </picture>
         */

        /**
         * The values of the `GskPathDirection` enum are used to pick one
         * of the four tangents at a given point on the path.
         *
         * Note that the directions for `GSK_PATH_FROM_START/``GSK_PATH_TO_END` and
         * `GSK_PATH_TO_START/``GSK_PATH_FROM_END` will coincide for smooth points.
         * Only sharp turns will exhibit four different directions.
         *
         * <picture>
         *   <source srcset="directions-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Path Tangents" src="directions-light.png">
         * </picture>
         */
        export namespace PathDirection {
            export const $gtype: GObject.GType<PathDirection>;
        }

        enum PathDirection {
            /**
             * The tangent in path direction of the incoming side
             *   of the path
             */
            FROM_START,
            /**
             * The tangent against path direction of the incoming side
             *   of the path
             */
            TO_START,
            /**
             * The tangent in path direction of the outgoing side
             *   of the path
             */
            TO_END,
            /**
             * The tangent against path direction of the outgoing
             *   side of the path
             */
            FROM_END,
        }
        /**
         * Path operations are used to describe the segments of a `GskPath`.
         *
         * More values may be added in the future.
         */

        /**
         * Path operations are used to describe the segments of a `GskPath`.
         *
         * More values may be added in the future.
         */
        export namespace PathOperation {
            export const $gtype: GObject.GType<PathOperation>;
        }

        enum PathOperation {
            /**
             * A move-to operation, with 1 point describing the target point.
             */
            MOVE,
            /**
             * A close operation ending the current contour with a line back
             *   to the starting point. Two points describe the start and end of the line.
             */
            CLOSE,
            /**
             * A line-to operation, with 2 points describing the start and
             *   end point of a straight line.
             */
            LINE,
            /**
             * A curve-to operation describing a quadratic Bézier curve
             *   with 3 points describing the start point, the control point and the end
             *   point of the curve.
             */
            QUAD,
            /**
             * A curve-to operation describing a cubic Bézier curve with 4
             *   points describing the start point, the two control points and the end point
             *   of the curve.
             */
            CUBIC,
            /**
             * A rational quadratic Bézier curve with 3 points describing
             *   the start point, control point and end point of the curve. A weight for the
             *   curve will be passed, too.
             */
            CONIC,
        }
        /**
         * The type of a node determines what the node is rendering.
         */

        /**
         * The type of a node determines what the node is rendering.
         */
        export namespace RenderNodeType {
            export const $gtype: GObject.GType<RenderNodeType>;
        }

        enum RenderNodeType {
            /**
             * Error type. No node will ever have this type.
             */
            NOT_A_RENDER_NODE,
            /**
             * A node containing a stack of children
             */
            CONTAINER_NODE,
            /**
             * A node drawing a `cairo_surface_t`
             */
            CAIRO_NODE,
            /**
             * A node drawing a single color rectangle
             */
            COLOR_NODE,
            /**
             * A node drawing a linear gradient
             */
            LINEAR_GRADIENT_NODE,
            /**
             * A node drawing a repeating linear gradient
             */
            REPEATING_LINEAR_GRADIENT_NODE,
            /**
             * A node drawing a radial gradient
             */
            RADIAL_GRADIENT_NODE,
            /**
             * A node drawing a repeating radial gradient
             */
            REPEATING_RADIAL_GRADIENT_NODE,
            /**
             * A node drawing a conic gradient
             */
            CONIC_GRADIENT_NODE,
            /**
             * A node stroking a border around an area
             */
            BORDER_NODE,
            /**
             * A node drawing a `GdkTexture`
             */
            TEXTURE_NODE,
            /**
             * A node drawing an inset shadow
             */
            INSET_SHADOW_NODE,
            /**
             * A node drawing an outset shadow
             */
            OUTSET_SHADOW_NODE,
            /**
             * A node that renders its child after applying a matrix transform
             */
            TRANSFORM_NODE,
            /**
             * A node that changes the opacity of its child
             */
            OPACITY_NODE,
            /**
             * A node that applies a color matrix to every pixel
             */
            COLOR_MATRIX_NODE,
            /**
             * A node that repeats the child's contents
             */
            REPEAT_NODE,
            /**
             * A node that clips its child to a rectangular area
             */
            CLIP_NODE,
            /**
             * A node that clips its child to a rounded rectangle
             */
            ROUNDED_CLIP_NODE,
            /**
             * A node that draws a shadow below its child
             */
            SHADOW_NODE,
            /**
             * A node that blends two children together
             */
            BLEND_NODE,
            /**
             * A node that cross-fades between two children
             */
            CROSS_FADE_NODE,
            /**
             * A node containing a glyph string
             */
            TEXT_NODE,
            /**
             * A node that applies a blur
             */
            BLUR_NODE,
            /**
             * Debug information that does not affect the rendering
             */
            DEBUG_NODE,
            /**
             * A node that uses OpenGL fragment shaders to render
             */
            GL_SHADER_NODE,
            /**
             * A node drawing a `GdkTexture` scaled and filtered.
             */
            TEXTURE_SCALE_NODE,
            /**
             * A node that masks one child with another.
             */
            MASK_NODE,
            /**
             * A node that fills a path.
             */
            FILL_NODE,
            /**
             * A node that strokes a path.
             */
            STROKE_NODE,
            /**
             * A node that possibly redirects part of the scene graph to a subsurface.
             */
            SUBSURFACE_NODE,
        }
        /**
         * The filters used when scaling texture data.
         *
         * The actual implementation of each filter is deferred to the
         * rendering pipeline.
         */

        /**
         * The filters used when scaling texture data.
         *
         * The actual implementation of each filter is deferred to the
         * rendering pipeline.
         */
        export namespace ScalingFilter {
            export const $gtype: GObject.GType<ScalingFilter>;
        }

        enum ScalingFilter {
            /**
             * linear interpolation filter
             */
            LINEAR,
            /**
             * nearest neighbor interpolation filter
             */
            NEAREST,
            /**
             * linear interpolation along each axis,
             *   plus mipmap generation, with linear interpolation along the mipmap
             *   levels
             */
            TRILINEAR,
        }
        /**
         * Errors that can happen during (de)serialization.
         */
        class SerializationError extends GLib.Error {
            static $gtype: GObject.GType<SerializationError>;

            // Static fields

            /**
             * The format can not be identified
             */
            static UNSUPPORTED_FORMAT: number;
            /**
             * The version of the data is not
             *   understood
             */
            static UNSUPPORTED_VERSION: number;
            /**
             * The given data may not exist in
             *   a proper serialization
             */
            static INVALID_DATA: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Registers an error quark for [class`Gsk`.RenderNode] errors.
             */
            static quark(): GLib.Quark;
        }

        /**
         * The categories of matrices relevant for GSK and GTK.
         *
         * Note that any category includes matrices of all later categories.
         * So if you want to for example check if a matrix is a 2D matrix,
         * `category >= GSK_TRANSFORM_CATEGORY_2D` is the way to do this.
         *
         * Also keep in mind that rounding errors may cause matrices to not
         * conform to their categories. Otherwise, matrix operations done via
         * multiplication will not worsen categories. So for the matrix
         * multiplication `C = A * B`, `category(C) = MIN (category(A), category(B))`.
         */

        /**
         * The categories of matrices relevant for GSK and GTK.
         *
         * Note that any category includes matrices of all later categories.
         * So if you want to for example check if a matrix is a 2D matrix,
         * `category >= GSK_TRANSFORM_CATEGORY_2D` is the way to do this.
         *
         * Also keep in mind that rounding errors may cause matrices to not
         * conform to their categories. Otherwise, matrix operations done via
         * multiplication will not worsen categories. So for the matrix
         * multiplication `C = A * B`, `category(C) = MIN (category(A), category(B))`.
         */
        export namespace TransformCategory {
            export const $gtype: GObject.GType<TransformCategory>;
        }

        enum TransformCategory {
            /**
             * The category of the matrix has not been
             *   determined.
             */
            UNKNOWN,
            /**
             * Analyzing the matrix concluded that it does
             *   not fit in any other category.
             */
            ANY,
            /**
             * The matrix is a 3D matrix. This means that
             *   the w column (the last column) has the values (0, 0, 0, 1).
             */
            '3D',
            /**
             * The matrix is a 2D matrix. This is equivalent
             *   to graphene_matrix_is_2d() returning %TRUE. In particular, this
             *   means that Cairo can deal with the matrix.
             */
            '2D',
            /**
             * The matrix is a combination of 2D scale
             *   and 2D translation operations. In particular, this means that any
             *   rectangle can be transformed exactly using this matrix.
             */
            '2D_AFFINE',
            /**
             * The matrix is a 2D translation.
             */
            '2D_TRANSLATE',
            /**
             * The matrix is the identity matrix.
             */
            IDENTITY,
        }
        /**
         * This is a convenience function that constructs a `GskPath`
         * from a serialized form.
         *
         * The string is expected to be in (a superset of)
         * [SVG path syntax](https://www.w3.org/TR/SVG11/paths.html#PathData),
         * as e.g. produced by [method`Gsk`.Path.to_string].
         *
         * A high-level summary of the syntax:
         *
         * - `M x y` Move to `(x, y)`
         * - `L x y` Add a line from the current point to `(x, y)`
         * - `Q x1 y1 x2 y2` Add a quadratic Bézier from the current point to `(x2, y2)`, with control point `(x1, y1)`
         * - `C x1 y1 x2 y2 x3 y3` Add a cubic Bézier from the current point to `(x3, y3)`, with control points `(x1, y1)` and `(x2, y2)`
         * - `Z` Close the contour by drawing a line back to the start point
         * - `H x` Add a horizontal line from the current point to the given x value
         * - `V y` Add a vertical line from the current point to the given y value
         * - `T x2 y2` Add a quadratic Bézier, using the reflection of the previous segments' control point as control point
         * - `S x2 y2 x3 y3` Add a cubic Bézier, using the reflection of the previous segments' second control point as first control point
         * - `A rx ry r l s x y` Add an elliptical arc from the current point to `(x, y)` with radii rx and ry. See the SVG documentation for how the other parameters influence the arc.
         * - `O x1 y1 x2 y2 w` Add a rational quadratic Bézier from the current point to `(x2, y2)` with control point `(x1, y1)` and weight `w`.
         *
         * All the commands have lowercase variants that interpret coordinates
         * relative to the current point.
         *
         * The `O` command is an extension that is not supported in SVG.
         * @param string a string
         * @returns a new `GskPath`, or `NULL` if @string could not be parsed
         */
        function path_parse(string: string): Path | null;
        /**
         * Registers an error quark for [class`Gsk`.RenderNode] errors.
         * @returns the error quark
         */
        function serialization_error_quark(): GLib.Quark;
        /**
         * Checks if 2 strokes are identical.
         * @param stroke1 the first `GskStroke`
         * @param stroke2 the second `GskStroke`
         * @returns `TRUE` if the 2 strokes are equal, `FALSE` otherwise
         */
        function stroke_equal(stroke1?: any | null, stroke2?: any | null): boolean;
        /**
         * Parses the given `string` into a transform and puts it in
         * `out_transform`.
         *
         * Strings printed via [method`Gsk`.Transform.to_string]
         * can be read in again successfully using this function.
         *
         * If `string` does not describe a valid transform, %FALSE is
         * returned and %NULL is put in `out_transform`.
         * @param string the string to parse
         * @returns %TRUE if @string described a valid transform.
         */
        function transform_parse(string: string): [boolean, Transform];
        /**
         * Retrieves the `GskRenderNode` stored inside the given `value`, and acquires
         * a reference to it.
         * @param value a [struct@GObject.Value] initialized with type `GSK_TYPE_RENDER_NODE`
         * @returns a `GskRenderNode`
         */
        function value_dup_render_node(value: GObject.Value | any): RenderNode | null;
        /**
         * Retrieves the `GskRenderNode` stored inside the given `value`.
         * @param value a `GValue` initialized with type `GSK_TYPE_RENDER_NODE`
         * @returns a `GskRenderNode`
         */
        function value_get_render_node(value: GObject.Value | any): RenderNode | null;
        /**
         * Stores the given `GskRenderNode` inside `value`.
         *
         * The [struct`GObject`.Value] will acquire a reference to the `node`.
         * @param value a [struct@GObject.Value] initialized with type `GSK_TYPE_RENDER_NODE`
         * @param node a `GskRenderNode`
         */
        function value_set_render_node(value: GObject.Value | any, node: RenderNode): void;
        /**
         * Stores the given `GskRenderNode` inside `value`.
         *
         * This function transfers the ownership of the `node` to the `GValue`.
         * @param value a [struct@GObject.Value] initialized with type `GSK_TYPE_RENDER_NODE`
         * @param node a `GskRenderNode`
         */
        function value_take_render_node(value: GObject.Value | any, node?: RenderNode | null): void;
        interface ParseErrorFunc {
            (start: ParseLocation, end: ParseLocation, error: GLib.Error): void;
        }
        interface PathForeachFunc {
            (op: PathOperation, pts: Graphene.Point, n_pts: number, weight: number): boolean;
        }
        /**
         * Flags that can be passed to gsk_path_foreach() to influence what
         * kinds of operations the path is decomposed into.
         *
         * By default, [method`Gsk`.Path.foreach] will only emit a path with all
         * operations flattened to straight lines to allow for maximum compatibility.
         * The only operations emitted will be `GSK_PATH_MOVE`, `GSK_PATH_LINE` and
         * `GSK_PATH_CLOSE`.
         */

        /**
         * Flags that can be passed to gsk_path_foreach() to influence what
         * kinds of operations the path is decomposed into.
         *
         * By default, [method`Gsk`.Path.foreach] will only emit a path with all
         * operations flattened to straight lines to allow for maximum compatibility.
         * The only operations emitted will be `GSK_PATH_MOVE`, `GSK_PATH_LINE` and
         * `GSK_PATH_CLOSE`.
         */
        export namespace PathForeachFlags {
            export const $gtype: GObject.GType<PathForeachFlags>;
        }

        enum PathForeachFlags {
            /**
             * The default behavior, only allow lines.
             */
            ONLY_LINES,
            /**
             * Allow emission of `GSK_PATH_QUAD` operations
             */
            QUAD,
            /**
             * Allow emission of `GSK_PATH_CUBIC` operations.
             */
            CUBIC,
            /**
             * Allow emission of `GSK_PATH_CONIC` operations.
             */
            CONIC,
        }
        /**
         * A render node applying a blending function between its two child nodes.
         */
        class BlendNode extends RenderNode {
            static $gtype: GObject.GType<BlendNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode;

            // Methods

            /**
             * Retrieves the blend mode used by `node`.
             * @returns the blend mode
             */
            get_blend_mode(): BlendMode;
            /**
             * Retrieves the bottom `GskRenderNode` child of the `node`.
             * @returns the bottom child node
             */
            get_bottom_child(): RenderNode;
            /**
             * Retrieves the top `GskRenderNode` child of the `node`.
             * @returns the top child node
             */
            get_top_child(): RenderNode;
        }

        /**
         * A render node applying a blur effect to its single child.
         */
        class BlurNode extends RenderNode {
            static $gtype: GObject.GType<BlurNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, radius: number): BlurNode;

            // Methods

            /**
             * Retrieves the child `GskRenderNode` of the blur `node`.
             * @returns the blurred child node
             */
            get_child(): RenderNode;
            /**
             * Retrieves the blur radius of the `node`.
             * @returns the blur radius
             */
            get_radius(): number;
        }

        /**
         * A render node for a border.
         */
        class BorderNode extends RenderNode {
            static $gtype: GObject.GType<BorderNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode;

            // Methods

            /**
             * Retrieves the colors of the border.
             * @returns an array of 4 `GdkRGBA` structs     for the top, right, bottom and left color of the border
             */
            get_colors(): Gdk.RGBA;
            /**
             * Retrieves the outline of the border.
             * @returns the outline of the border
             */
            get_outline(): RoundedRect;
            /**
             * Retrieves the stroke widths of the border.
             * @returns an array of 4 floats   for the top, right, bottom and left stroke width of the border,   respectively
             */
            get_widths(): number[];
        }

        module BroadwayRenderer {
            // Constructor properties interface

            interface ConstructorProps extends Renderer.ConstructorProps {}
        }

        /**
         * A Broadway based renderer.
         *
         * See [class`Gsk`.Renderer].
         */
        class BroadwayRenderer extends Renderer {
            static $gtype: GObject.GType<BroadwayRenderer>;

            // Constructors

            constructor(properties?: Partial<BroadwayRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): BroadwayRenderer;
        }

        /**
         * A render node for a Cairo surface.
         */
        class CairoNode extends RenderNode {
            static $gtype: GObject.GType<CairoNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](bounds: Graphene.Rect): CairoNode;

            // Methods

            /**
             * Creates a Cairo context for drawing using the surface associated
             * to the render node.
             *
             * If no surface exists yet, a surface will be created optimized for
             * rendering to `renderer`.
             * @returns a Cairo context used for drawing; use   cairo_destroy() when done drawing
             */
            get_draw_context(): cairo.Context;
            /**
             * Retrieves the Cairo surface used by the render node.
             * @returns a Cairo surface
             */
            get_surface(): cairo.Surface;
        }

        module CairoRenderer {
            // Constructor properties interface

            interface ConstructorProps extends Renderer.ConstructorProps {}
        }

        /**
         * A GSK renderer that is using cairo.
         *
         * Since it is using cairo, this renderer cannot support
         * 3D transformations.
         */
        class CairoRenderer extends Renderer {
            static $gtype: GObject.GType<CairoRenderer>;

            // Constructors

            constructor(properties?: Partial<CairoRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CairoRenderer;
        }

        /**
         * A render node applying a rectangular clip to its single child node.
         */
        class ClipNode extends RenderNode {
            static $gtype: GObject.GType<ClipNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, clip: Graphene.Rect): ClipNode;

            // Methods

            /**
             * Gets the child node that is getting clipped by the given `node`.
             * @returns The child that is getting clipped
             */
            get_child(): RenderNode;
            /**
             * Retrieves the clip rectangle for `node`.
             * @returns a clip rectangle
             */
            get_clip(): Graphene.Rect;
        }

        /**
         * A render node controlling the color matrix of its single child node.
         */
        class ColorMatrixNode extends RenderNode {
            static $gtype: GObject.GType<ColorMatrixNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                child: RenderNode,
                color_matrix: Graphene.Matrix,
                color_offset: Graphene.Vec4,
            ): ColorMatrixNode;

            // Methods

            /**
             * Gets the child node that is getting its colors modified by the given `node`.
             * @returns The child that is getting its colors modified
             */
            get_child(): RenderNode;
            /**
             * Retrieves the color matrix used by the `node`.
             * @returns a 4x4 color matrix
             */
            get_color_matrix(): Graphene.Matrix;
            /**
             * Retrieves the color offset used by the `node`.
             * @returns a color vector
             */
            get_color_offset(): Graphene.Vec4;
        }

        /**
         * A render node for a solid color.
         */
        class ColorNode extends RenderNode {
            static $gtype: GObject.GType<ColorNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode;

            // Methods

            /**
             * Retrieves the color of the given `node`.
             *
             * The value returned by this function will not be correct
             * if the render node was created for a non-sRGB color.
             * @returns the color of the node
             */
            get_color(): Gdk.RGBA;
        }

        /**
         * A render node for a conic gradient.
         */
        class ConicGradientNode extends RenderNode {
            static $gtype: GObject.GType<ConicGradientNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                bounds: Graphene.Rect,
                center: Graphene.Point,
                rotation: number,
                color_stops: ColorStop[],
            ): ConicGradientNode;

            // Methods

            /**
             * Retrieves the angle for the gradient in radians, normalized in [0, 2 * PI].
             *
             * The angle is starting at the top and going clockwise, as expressed
             * in the css specification:
             *
             *     angle = 90 - gsk_conic_gradient_node_get_rotation()
             * @returns the angle for the gradient
             */
            get_angle(): number;
            /**
             * Retrieves the center pointer for the gradient.
             * @returns the center point for the gradient
             */
            get_center(): Graphene.Point;
            /**
             * Retrieves the color stops in the gradient.
             * @returns the color stops in the gradient
             */
            get_color_stops(): ColorStop[];
            /**
             * Retrieves the number of color stops in the gradient.
             * @returns the number of color stops
             */
            get_n_color_stops(): number;
            /**
             * Retrieves the rotation for the gradient in degrees.
             * @returns the rotation for the gradient
             */
            get_rotation(): number;
        }

        /**
         * A render node that can contain other render nodes.
         */
        class ContainerNode extends RenderNode {
            static $gtype: GObject.GType<ContainerNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](children: RenderNode[]): ContainerNode;

            // Methods

            /**
             * Gets one of the children of `container`.
             * @param idx the position of the child to get
             * @returns the @idx'th child of @container
             */
            get_child(idx: number): RenderNode;
            /**
             * Retrieves the number of direct children of `node`.
             * @returns the number of children of the `GskRenderNode`
             */
            get_n_children(): number;
        }

        /**
         * A render node cross fading between two child nodes.
         */
        class CrossFadeNode extends RenderNode {
            static $gtype: GObject.GType<CrossFadeNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](start: RenderNode, end: RenderNode, progress: number): CrossFadeNode;

            // Methods

            /**
             * Retrieves the child `GskRenderNode` at the end of the cross-fade.
             * @returns a `GskRenderNode`
             */
            get_end_child(): RenderNode;
            /**
             * Retrieves the progress value of the cross fade.
             * @returns the progress value, between 0 and 1
             */
            get_progress(): number;
            /**
             * Retrieves the child `GskRenderNode` at the beginning of the cross-fade.
             * @returns a `GskRenderNode`
             */
            get_start_child(): RenderNode;
        }

        /**
         * A render node that emits a debugging message when drawing its
         * child node.
         */
        class DebugNode extends RenderNode {
            static $gtype: GObject.GType<DebugNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, message: string): DebugNode;

            // Methods

            /**
             * Gets the child node that is getting drawn by the given `node`.
             * @returns the child `GskRenderNode`
             */
            get_child(): RenderNode;
            /**
             * Gets the debug message that was set on this node
             * @returns The debug message
             */
            get_message(): string;
        }

        /**
         * A render node filling the area given by [struct`Gsk`.Path]
         * and [enum`Gsk`.FillRule] with the child node.
         */
        class FillNode extends RenderNode {
            static $gtype: GObject.GType<FillNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, path: Path, fill_rule: FillRule): FillNode;

            // Methods

            /**
             * Gets the child node that is getting drawn by the given `node`.
             * @returns The child that is getting drawn
             */
            get_child(): RenderNode;
            /**
             * Retrieves the fill rule used to determine how the path is filled.
             * @returns a `GskFillRule`
             */
            get_fill_rule(): FillRule;
            /**
             * Retrieves the path used to describe the area filled with the contents of
             * the `node`.
             * @returns a `GskPath`
             */
            get_path(): Path;
        }

        module GLRenderer {
            // Constructor properties interface

            interface ConstructorProps extends Renderer.ConstructorProps {}
        }

        /**
         * A GL based renderer.
         *
         * See [class`Gsk`.Renderer].
         */
        class GLRenderer extends Renderer {
            static $gtype: GObject.GType<GLRenderer>;

            // Constructors

            constructor(properties?: Partial<GLRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GLRenderer;
        }

        module GLShader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                resource: string;
                source: GLib.Bytes;
            }
        }

        /**
         * A `GskGLShader` is a snippet of GLSL that is meant to run in the
         * fragment shader of the rendering pipeline.
         *
         * A fragment shader gets the coordinates being rendered as input and
         * produces the pixel values for that particular pixel. Additionally,
         * the shader can declare a set of other input arguments, called
         * uniforms (as they are uniform over all the calls to your shader in
         * each instance of use). A shader can also receive up to 4
         * textures that it can use as input when producing the pixel data.
         *
         * `GskGLShader` is usually used with gtk_snapshot_push_gl_shader()
         * to produce a [class`Gsk`.GLShaderNode] in the rendering hierarchy,
         * and then its input textures are constructed by rendering the child
         * nodes to textures before rendering the shader node itself. (You can
         * pass texture nodes as children if you want to directly use a texture
         * as input).
         *
         * The actual shader code is GLSL code that gets combined with
         * some other code into the fragment shader. Since the exact
         * capabilities of the GPU driver differs between different OpenGL
         * drivers and hardware, GTK adds some defines that you can use
         * to ensure your GLSL code runs on as many drivers as it can.
         *
         * If the OpenGL driver is GLES, then the shader language version
         * is set to 100, and GSK_GLES will be defined in the shader.
         *
         * Otherwise, if the OpenGL driver does not support the 3.2 core profile,
         * then the shader will run with language version 110 for GL2 and 130 for GL3,
         * and GSK_LEGACY will be defined in the shader.
         *
         * If the OpenGL driver supports the 3.2 code profile, it will be used,
         * the shader language version is set to 150, and GSK_GL3 will be defined
         * in the shader.
         *
         * The main function the shader must implement is:
         *
         * ```glsl
         *  void mainImage(out vec4 fragColor,
         *                 in vec2 fragCoord,
         *                 in vec2 resolution,
         *                 in vec2 uv)
         * ```
         *
         * Where the input `fragCoord` is the coordinate of the pixel we're
         * currently rendering, relative to the boundary rectangle that was
         * specified in the `GskGLShaderNode`, and `resolution` is the width and
         * height of that rectangle. This is in the typical GTK coordinate
         * system with the origin in the top left. `uv` contains the u and v
         * coordinates that can be used to index a texture at the
         * corresponding point. These coordinates are in the [0..1]x[0..1]
         * region, with 0, 0 being in the lower left corder (which is typical
         * for OpenGL).
         *
         * The output `fragColor` should be a RGBA color (with
         * premultiplied alpha) that will be used as the output for the
         * specified pixel location. Note that this output will be
         * automatically clipped to the clip region of the glshader node.
         *
         * In addition to the function arguments the shader can define
         * up to 4 uniforms for textures which must be called u_textureN
         * (i.e. u_texture1 to u_texture4) as well as any custom uniforms
         * you want of types int, uint, bool, float, vec2, vec3 or vec4.
         *
         * All textures sources contain premultiplied alpha colors, but if some
         * there are outer sources of colors there is a gsk_premultiply() helper
         * to compute premultiplication when needed.
         *
         * Note that GTK parses the uniform declarations, so each uniform has to
         * be on a line by itself with no other code, like so:
         *
         * ```glsl
         * uniform float u_time;
         * uniform vec3 u_color;
         * uniform sampler2D u_texture1;
         * uniform sampler2D u_texture2;
         * ```
         *
         * GTK uses the "gsk" namespace in the symbols it uses in the
         * shader, so your code should not use any symbols with the prefix gsk
         * or GSK. There are some helper functions declared that you can use:
         *
         * ```glsl
         * vec4 GskTexture(sampler2D sampler, vec2 texCoords);
         * ```
         *
         * This samples a texture (e.g. u_texture1) at the specified
         * coordinates, and contains some helper ifdefs to ensure that
         * it works on all OpenGL versions.
         *
         * You can compile the shader yourself using [method`Gsk`.GLShader.compile],
         * otherwise the GSK renderer will do it when it handling the glshader
         * node. If errors occurs, the returned `error` will include the glsl
         * sources, so you can see what GSK was passing to the compiler. You
         * can also set GSK_DEBUG=shaders in the environment to see the sources
         * and other relevant information about all shaders that GSK is handling.
         *
         * # An example shader
         *
         * ```glsl
         * uniform float position;
         * uniform sampler2D u_texture1;
         * uniform sampler2D u_texture2;
         *
         * void mainImage(out vec4 fragColor,
         *                in vec2 fragCoord,
         *                in vec2 resolution,
         *                in vec2 uv) {
         *   vec4 source1 = GskTexture(u_texture1, uv);
         *   vec4 source2 = GskTexture(u_texture2, uv);
         *
         *   fragColor = position * source1 + (1.0 - position) * source2;
         * }
         * ```
         *
         * # Deprecation
         *
         * This feature was deprecated in GTK 4.16 after the new rendering infrastructure
         * introduced in 4.14 did not support it.
         * The lack of Vulkan integration would have made it a very hard feature to support.
         *
         * If you want to use OpenGL directly, you should look at [GtkGLArea](../gtk4/class.GLArea.html)
         * which uses a different approach and is still well supported.
         */
        class GLShader extends GObject.Object {
            static $gtype: GObject.GType<GLShader>;

            // Properties

            /**
             * Resource containing the source code for the shader.
             *
             * If the shader source is not coming from a resource, this
             * will be %NULL.
             */
            get resource(): string;
            /**
             * The source code for the shader, as a `GBytes`.
             */
            get source(): GLib.Bytes;

            // Constructors

            constructor(properties?: Partial<GLShader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_bytes(sourcecode: GLib.Bytes | Uint8Array): GLShader;

            static new_from_resource(resource_path: string): GLShader;

            // Methods

            /**
             * Tries to compile the `shader` for the given `renderer`.
             *
             * If there is a problem, this function returns %FALSE and reports
             * an error. You should use this function before relying on the shader
             * for rendering and use a fallback with a simpler shader or without
             * shaders if it fails.
             *
             * Note that this will modify the rendering state (for example
             * change the current GL context) and requires the renderer to be
             * set up. This means that the widget has to be realized. Commonly you
             * want to call this from the realize signal of a widget, or during
             * widget snapshot.
             * @param renderer a `GskRenderer`
             * @returns %TRUE on success, %FALSE if an error occurred
             */
            compile(renderer: Renderer): boolean;
            /**
             * Looks for a uniform by the name `name,` and returns the index
             * of the uniform, or -1 if it was not found.
             * @param name uniform name
             * @returns The index of the uniform, or -1
             */
            find_uniform_by_name(name: string): number;
            /**
             * Gets the value of the uniform `idx` in the `args` block.
             *
             * The uniform must be of bool type.
             * @param args uniform arguments
             * @param idx index of the uniform
             * @returns The value
             */
            get_arg_bool(args: GLib.Bytes | Uint8Array, idx: number): boolean;
            /**
             * Gets the value of the uniform `idx` in the `args` block.
             *
             * The uniform must be of float type.
             * @param args uniform arguments
             * @param idx index of the uniform
             * @returns The value
             */
            get_arg_float(args: GLib.Bytes | Uint8Array, idx: number): number;
            /**
             * Gets the value of the uniform `idx` in the `args` block.
             *
             * The uniform must be of int type.
             * @param args uniform arguments
             * @param idx index of the uniform
             * @returns The value
             */
            get_arg_int(args: GLib.Bytes | Uint8Array, idx: number): number;
            /**
             * Gets the value of the uniform `idx` in the `args` block.
             *
             * The uniform must be of uint type.
             * @param args uniform arguments
             * @param idx index of the uniform
             * @returns The value
             */
            get_arg_uint(args: GLib.Bytes | Uint8Array, idx: number): number;
            /**
             * Gets the value of the uniform `idx` in the `args` block.
             *
             * The uniform must be of vec2 type.
             * @param args uniform arguments
             * @param idx index of the uniform
             * @param out_value location to store the uniform value in
             */
            get_arg_vec2(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec2): void;
            /**
             * Gets the value of the uniform `idx` in the `args` block.
             *
             * The uniform must be of vec3 type.
             * @param args uniform arguments
             * @param idx index of the uniform
             * @param out_value location to store the uniform value in
             */
            get_arg_vec3(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec3): void;
            /**
             * Gets the value of the uniform `idx` in the `args` block.
             *
             * The uniform must be of vec4 type.
             * @param args uniform arguments
             * @param idx index of the uniform
             * @param out_value location to store set the uniform value in
             */
            get_arg_vec4(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec4): void;
            /**
             * Get the size of the data block used to specify arguments for this shader.
             * @returns The size of the data block
             */
            get_args_size(): number;
            /**
             * Returns the number of textures that the shader requires.
             *
             * This can be used to check that the a passed shader works
             * in your usecase. It is determined by looking at the highest
             * u_textureN value that the shader defines.
             * @returns The number of texture inputs required by @shader
             */
            get_n_textures(): number;
            /**
             * Get the number of declared uniforms for this shader.
             * @returns The number of declared uniforms
             */
            get_n_uniforms(): number;
            /**
             * Gets the resource path for the GLSL sourcecode being used
             * to render this shader.
             * @returns The resource path for the shader
             */
            get_resource(): string | null;
            /**
             * Gets the GLSL sourcecode being used to render this shader.
             * @returns The source code for the shader
             */
            get_source(): GLib.Bytes;
            /**
             * Get the name of the declared uniform for this shader at index `idx`.
             * @param idx index of the uniform
             * @returns The name of the declared uniform
             */
            get_uniform_name(idx: number): string;
            /**
             * Get the offset into the data block where data for this uniforms is stored.
             * @param idx index of the uniform
             * @returns The data offset
             */
            get_uniform_offset(idx: number): number;
            /**
             * Get the type of the declared uniform for this shader at index `idx`.
             * @param idx index of the uniform
             * @returns The type of the declared uniform
             */
            get_uniform_type(idx: number): GLUniformType;
        }

        /**
         * A render node using a GL shader when drawing its children nodes.
         */
        class GLShaderNode extends RenderNode {
            static $gtype: GObject.GType<GLShaderNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                shader: GLShader,
                bounds: Graphene.Rect,
                args: GLib.Bytes | Uint8Array,
                children?: RenderNode[] | null,
            ): GLShaderNode;

            // Methods

            /**
             * Gets args for the node.
             * @returns A `GBytes` with the uniform arguments
             */
            get_args(): GLib.Bytes;
            /**
             * Gets one of the children.
             * @param idx the position of the child to get
             * @returns the @idx'th child of @node
             */
            get_child(idx: number): RenderNode;
            /**
             * Returns the number of children
             * @returns The number of children
             */
            get_n_children(): number;
            /**
             * Gets shader code for the node.
             * @returns the `GskGLShader` shader
             */
            get_shader(): GLShader;
        }

        /**
         * A render node for an inset shadow.
         */
        class InsetShadowNode extends RenderNode {
            static $gtype: GObject.GType<InsetShadowNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                outline: RoundedRect,
                color: Gdk.RGBA,
                dx: number,
                dy: number,
                spread: number,
                blur_radius: number,
            ): InsetShadowNode;

            // Methods

            /**
             * Retrieves the blur radius to apply to the shadow.
             * @returns the blur radius, in pixels
             */
            get_blur_radius(): number;
            /**
             * Retrieves the color of the inset shadow.
             *
             * The value returned by this function will not be correct
             * if the render node was created for a non-sRGB color.
             * @returns the color of the shadow
             */
            get_color(): Gdk.RGBA;
            /**
             * Retrieves the horizontal offset of the inset shadow.
             * @returns an offset, in pixels
             */
            get_dx(): number;
            /**
             * Retrieves the vertical offset of the inset shadow.
             * @returns an offset, in pixels
             */
            get_dy(): number;
            /**
             * Retrieves the outline rectangle of the inset shadow.
             * @returns a rounded rectangle
             */
            get_outline(): RoundedRect;
            /**
             * Retrieves how much the shadow spreads inwards.
             * @returns the size of the shadow, in pixels
             */
            get_spread(): number;
        }

        /**
         * A render node for a linear gradient.
         */
        class LinearGradientNode extends RenderNode {
            static $gtype: GObject.GType<LinearGradientNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                bounds: Graphene.Rect,
                start: Graphene.Point,
                end: Graphene.Point,
                color_stops: ColorStop[],
            ): LinearGradientNode;

            // Methods

            /**
             * Retrieves the color stops in the gradient.
             * @returns the color stops in the gradient
             */
            get_color_stops(): ColorStop[];
            /**
             * Retrieves the final point of the linear gradient.
             * @returns the final point
             */
            get_end(): Graphene.Point;
            /**
             * Retrieves the number of color stops in the gradient.
             * @returns the number of color stops
             */
            get_n_color_stops(): number;
            /**
             * Retrieves the initial point of the linear gradient.
             * @returns the initial point
             */
            get_start(): Graphene.Point;
        }

        /**
         * A render node masking one child node with another.
         */
        class MaskNode extends RenderNode {
            static $gtype: GObject.GType<MaskNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](source: RenderNode, mask: RenderNode, mask_mode: MaskMode): MaskNode;

            // Methods

            /**
             * Retrieves the mask `GskRenderNode` child of the `node`.
             * @returns the mask child node
             */
            get_mask(): RenderNode;
            /**
             * Retrieves the mask mode used by `node`.
             * @returns the mask mode
             */
            get_mask_mode(): MaskMode;
            /**
             * Retrieves the source `GskRenderNode` child of the `node`.
             * @returns the source child node
             */
            get_source(): RenderNode;
        }

        module NglRenderer {
            // Constructor properties interface

            interface ConstructorProps extends Renderer.ConstructorProps {}
        }

        /**
         * A GL based renderer.
         *
         * See [class`Gsk`.Renderer].
         */
        class NglRenderer extends Renderer {
            static $gtype: GObject.GType<NglRenderer>;

            // Constructors

            constructor(properties?: Partial<NglRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): NglRenderer;
        }

        /**
         * A render node controlling the opacity of its single child node.
         */
        class OpacityNode extends RenderNode {
            static $gtype: GObject.GType<OpacityNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, opacity: number): OpacityNode;

            // Methods

            /**
             * Gets the child node that is getting opacityed by the given `node`.
             * @returns The child that is getting opacityed
             */
            get_child(): RenderNode;
            /**
             * Gets the transparency factor for an opacity node.
             * @returns the opacity factor
             */
            get_opacity(): number;
        }

        /**
         * A render node for an outset shadow.
         */
        class OutsetShadowNode extends RenderNode {
            static $gtype: GObject.GType<OutsetShadowNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                outline: RoundedRect,
                color: Gdk.RGBA,
                dx: number,
                dy: number,
                spread: number,
                blur_radius: number,
            ): OutsetShadowNode;

            // Methods

            /**
             * Retrieves the blur radius of the shadow.
             * @returns the blur radius, in pixels
             */
            get_blur_radius(): number;
            /**
             * Retrieves the color of the outset shadow.
             *
             * The value returned by this function will not be correct
             * if the render node was created for a non-sRGB color.
             * @returns a color
             */
            get_color(): Gdk.RGBA;
            /**
             * Retrieves the horizontal offset of the outset shadow.
             * @returns an offset, in pixels
             */
            get_dx(): number;
            /**
             * Retrieves the vertical offset of the outset shadow.
             * @returns an offset, in pixels
             */
            get_dy(): number;
            /**
             * Retrieves the outline rectangle of the outset shadow.
             * @returns a rounded rectangle
             */
            get_outline(): RoundedRect;
            /**
             * Retrieves how much the shadow spreads outwards.
             * @returns the size of the shadow, in pixels
             */
            get_spread(): number;
        }

        /**
         * A render node for a radial gradient.
         */
        class RadialGradientNode extends RenderNode {
            static $gtype: GObject.GType<RadialGradientNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                bounds: Graphene.Rect,
                center: Graphene.Point,
                hradius: number,
                vradius: number,
                start: number,
                end: number,
                color_stops: ColorStop[],
            ): RadialGradientNode;

            // Methods

            /**
             * Retrieves the center pointer for the gradient.
             * @returns the center point for the gradient
             */
            get_center(): Graphene.Point;
            /**
             * Retrieves the color stops in the gradient.
             * @returns the color stops in the gradient
             */
            get_color_stops(): ColorStop[];
            /**
             * Retrieves the end value for the gradient.
             * @returns the end value for the gradient
             */
            get_end(): number;
            /**
             * Retrieves the horizontal radius for the gradient.
             * @returns the horizontal radius for the gradient
             */
            get_hradius(): number;
            /**
             * Retrieves the number of color stops in the gradient.
             * @returns the number of color stops
             */
            get_n_color_stops(): number;
            /**
             * Retrieves the start value for the gradient.
             * @returns the start value for the gradient
             */
            get_start(): number;
            /**
             * Retrieves the vertical radius for the gradient.
             * @returns the vertical radius for the gradient
             */
            get_vradius(): number;
        }

        /**
         * `GskRenderNode` is the basic block in a scene graph to be
         * rendered using [class`Gsk`.Renderer].
         *
         * Each node has a parent, except the top-level node; each node may have
         * children nodes.
         *
         * Each node has an associated drawing surface, which has the size of
         * the rectangle set when creating it.
         *
         * Render nodes are meant to be transient; once they have been associated
         * to a [class`Gsk`.Renderer] it's safe to release any reference you have on
         * them. All [class`Gsk`.RenderNode]s are immutable, you can only specify their
         * properties during construction.
         */
        abstract class RenderNode {
            static $gtype: GObject.GType<RenderNode>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Loads data previously created via [method`Gsk`.RenderNode.serialize].
             *
             * For a discussion of the supported format, see that function.
             * @param bytes the bytes containing the data
             * @param error_func Callback on parsing errors
             */
            static deserialize(bytes: GLib.Bytes | Uint8Array, error_func?: ParseErrorFunc | null): RenderNode | null;

            // Methods

            /**
             * Draw the contents of `node` to the given cairo context.
             *
             * Typically, you'll use this function to implement fallback rendering
             * of `GskRenderNode`s on an intermediate Cairo context, instead of using
             * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
             *
             * For advanced nodes that cannot be supported using Cairo, in particular
             * for nodes doing 3D operations, this function may fail.
             * @param cr cairo context to draw to
             */
            draw(cr: cairo.Context): void;
            /**
             * Retrieves the boundaries of the `node`.
             *
             * The node will not draw outside of its boundaries.
             */
            get_bounds(): Graphene.Rect;
            /**
             * Returns the type of the `node`.
             * @returns the type of the `GskRenderNode`
             */
            get_node_type(): RenderNodeType;
            /**
             * Gets an opaque rectangle inside the node that GTK can determine to
             * be fully opaque.
             *
             * There is no guarantee that this is indeed the largest opaque rectangle or
             * that regions outside the rectangle are not opaque. This function is a best
             * effort with that goal.
             *
             * The rectangle will be fully contained in the bounds of the node.
             * @returns %TRUE if part or all of the rendernode is opaque, %FALSE if no   opaque region could be found.
             */
            get_opaque_rect(): [boolean, Graphene.Rect];
            /**
             * Acquires a reference on the given `GskRenderNode`.
             * @returns the `GskRenderNode` with an additional reference
             */
            ref(): RenderNode;
            /**
             * Serializes the `node` for later deserialization via
             * gsk_render_node_deserialize(). No guarantees are made about the format
             * used other than that the same version of GTK will be able to deserialize
             * the result of a call to gsk_render_node_serialize() and
             * gsk_render_node_deserialize() will correctly reject files it cannot open
             * that were created with previous versions of GTK.
             *
             * The intended use of this functions is testing, benchmarking and debugging.
             * The format is not meant as a permanent storage format.
             * @returns a `GBytes` representing the node.
             */
            serialize(): GLib.Bytes;
            /**
             * Releases a reference on the given `GskRenderNode`.
             *
             * If the reference was the last, the resources associated to the `node` are
             * freed.
             */
            unref(): void;
            /**
             * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
             * followed by [func`GLib`.file_set_contents].
             *
             * See those two functions for details on the arguments.
             *
             * It is mostly intended for use inside a debugger to quickly dump a render
             * node to a file for later inspection.
             * @param filename the file to save it to.
             * @returns %TRUE if saving was successful
             */
            write_to_file(filename: string): boolean;
        }

        module Renderer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                realized: boolean;
                surface: Gdk.Surface;
            }
        }

        /**
         * `GskRenderer` is a class that renders a scene graph defined via a
         * tree of [class`Gsk`.RenderNode] instances.
         *
         * Typically you will use a `GskRenderer` instance to repeatedly call
         * [method`Gsk`.Renderer.render] to update the contents of its associated
         * [class`Gdk`.Surface].
         *
         * It is necessary to realize a `GskRenderer` instance using
         * [method`Gsk`.Renderer.realize] before calling [method`Gsk`.Renderer.render],
         * in order to create the appropriate windowing system resources needed
         * to render the scene.
         */
        abstract class Renderer extends GObject.Object {
            static $gtype: GObject.GType<Renderer>;

            // Properties

            /**
             * Whether the renderer has been associated with a surface or draw context.
             */
            get realized(): boolean;
            /**
             * The surface associated with renderer.
             */
            get surface(): Gdk.Surface;

            // Constructors

            constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_surface(surface: Gdk.Surface): Renderer;

            // Methods

            /**
             * Retrieves the `GdkSurface` set using gsk_enderer_realize().
             *
             * If the renderer has not been realized yet, %NULL will be returned.
             * @returns a `GdkSurface`
             */
            get_surface(): Gdk.Surface | null;
            /**
             * Checks whether the `renderer` is realized or not.
             * @returns %TRUE if the `GskRenderer` was realized, and %FALSE otherwise
             */
            is_realized(): boolean;
            /**
             * Creates the resources needed by the `renderer` to render the scene
             * graph.
             *
             * Since GTK 4.6, the surface may be `NULL`, which allows using
             * renderers without having to create a surface.
             * Since GTK 4.14, it is recommended to use [method`Gsk`.Renderer.realize_for_display]
             * instead.
             *
             * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
             * destroying the renderer.
             * @param surface the `GdkSurface` renderer will be used on
             * @returns Whether the renderer was successfully realized
             */
            realize(surface?: Gdk.Surface | null): boolean;
            /**
             * Creates the resources needed by the `renderer` to render the scene
             * graph.
             *
             * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize] before
             * destroying the renderer.
             * @param display the `GdkDisplay` renderer will be used on
             * @returns Whether the renderer was successfully realized
             */
            realize_for_display(display: Gdk.Display): boolean;
            /**
             * Renders the scene graph, described by a tree of `GskRenderNode` instances
             * to the renderer's surface,  ensuring that the given `region` gets redrawn.
             *
             * If the renderer has no associated surface, this function does nothing.
             *
             * Renderers must ensure that changes of the contents given by the `root`
             * node as well as the area given by `region` are redrawn. They are however
             * free to not redraw any pixel outside of `region` if they can guarantee that
             * it didn't change.
             *
             * The `renderer` will acquire a reference on the `GskRenderNode` tree while
             * the rendering is in progress.
             * @param root a `GskRenderNode`
             * @param region the `cairo_region_t` that must be redrawn or %NULL   for the whole window
             */
            render(root: RenderNode, region?: cairo.Region | null): void;
            /**
             * Renders the scene graph, described by a tree of `GskRenderNode` instances,
             * to a `GdkTexture`.
             *
             * The `renderer` will acquire a reference on the `GskRenderNode` tree while
             * the rendering is in progress.
             *
             * If you want to apply any transformations to `root,` you should put it into a
             * transform node and pass that node instead.
             * @param root a `GskRenderNode`
             * @param viewport the section to draw or %NULL to use @root's bounds
             * @returns a `GdkTexture` with the rendered contents of @root.
             */
            render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture;
            /**
             * Releases all the resources created by gsk_renderer_realize().
             */
            unrealize(): void;
        }

        /**
         * A render node repeating its single child node.
         */
        class RepeatNode extends RenderNode {
            static $gtype: GObject.GType<RepeatNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null): RepeatNode;

            // Methods

            /**
             * Retrieves the child of `node`.
             * @returns a `GskRenderNode`
             */
            get_child(): RenderNode;
            /**
             * Retrieves the bounding rectangle of the child of `node`.
             * @returns a bounding rectangle
             */
            get_child_bounds(): Graphene.Rect;
        }

        /**
         * A render node for a repeating linear gradient.
         */
        class RepeatingLinearGradientNode extends RenderNode {
            static $gtype: GObject.GType<RepeatingLinearGradientNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                bounds: Graphene.Rect,
                start: Graphene.Point,
                end: Graphene.Point,
                color_stops: ColorStop[],
            ): RepeatingLinearGradientNode;
        }

        /**
         * A render node for a repeating radial gradient.
         */
        class RepeatingRadialGradientNode extends RenderNode {
            static $gtype: GObject.GType<RepeatingRadialGradientNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                bounds: Graphene.Rect,
                center: Graphene.Point,
                hradius: number,
                vradius: number,
                start: number,
                end: number,
                color_stops: ColorStop[],
            ): RepeatingRadialGradientNode;
        }

        /**
         * A render node applying a rounded rectangle clip to its single child.
         */
        class RoundedClipNode extends RenderNode {
            static $gtype: GObject.GType<RoundedClipNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, clip: RoundedRect): RoundedClipNode;

            // Methods

            /**
             * Gets the child node that is getting clipped by the given `node`.
             * @returns The child that is getting clipped
             */
            get_child(): RenderNode;
            /**
             * Retrieves the rounded rectangle used to clip the contents of the `node`.
             * @returns a rounded rectangle
             */
            get_clip(): RoundedRect;
        }

        /**
         * A render node drawing one or more shadows behind its single child node.
         */
        class ShadowNode extends RenderNode {
            static $gtype: GObject.GType<ShadowNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, shadows: Shadow[]): ShadowNode;

            // Methods

            /**
             * Retrieves the child `GskRenderNode` of the shadow `node`.
             * @returns the child render node
             */
            get_child(): RenderNode;
            /**
             * Retrieves the number of shadows in the `node`.
             * @returns the number of shadows.
             */
            get_n_shadows(): number;
            /**
             * Retrieves the shadow data at the given index `i`.
             * @param i the given index
             * @returns the shadow data
             */
            get_shadow(i: number): Shadow;
        }

        /**
         * A render node that will fill the area determined by stroking the the given
         * [struct`Gsk`.Path] using the [struct`Gsk`.Stroke] attributes.
         */
        class StrokeNode extends RenderNode {
            static $gtype: GObject.GType<StrokeNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, path: Path, stroke: Stroke): StrokeNode;

            // Methods

            /**
             * Gets the child node that is getting drawn by the given `node`.
             * @returns The child that is getting drawn
             */
            get_child(): RenderNode;
            /**
             * Retrieves the path that will be stroked with the contents of
             * the `node`.
             * @returns a #GskPath
             */
            get_path(): Path;
            /**
             * Retrieves the stroke attributes used in this `node`.
             * @returns a #GskStroke
             */
            get_stroke(): Stroke;
        }

        /**
         * A render node that potentially diverts a part of the scene graph to a subsurface.
         */
        class SubsurfaceNode extends RenderNode {
            static $gtype: GObject.GType<SubsurfaceNode>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the child node that is getting drawn by the given `node`.
             * @returns the child `GskRenderNode`
             */
            get_child(): RenderNode;
        }

        /**
         * A render node drawing a set of glyphs.
         */
        class TextNode extends RenderNode {
            static $gtype: GObject.GType<TextNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](
                font: Pango.Font,
                glyphs: Pango.GlyphString,
                color: Gdk.RGBA,
                offset: Graphene.Point,
            ): TextNode;

            // Methods

            /**
             * Retrieves the color used by the text `node`.
             *
             * The value returned by this function will not be correct
             * if the render node was created for a non-sRGB color.
             * @returns the text color
             */
            get_color(): Gdk.RGBA;
            /**
             * Returns the font used by the text `node`.
             * @returns the font
             */
            get_font(): Pango.Font;
            /**
             * Retrieves the glyph information in the `node`.
             * @returns the glyph information
             */
            get_glyphs(): Pango.GlyphInfo[];
            /**
             * Retrieves the number of glyphs in the text node.
             * @returns the number of glyphs
             */
            get_num_glyphs(): number;
            /**
             * Retrieves the offset applied to the text.
             * @returns a point with the horizontal and vertical offsets
             */
            get_offset(): Graphene.Point;
            /**
             * Checks whether the text `node` has color glyphs.
             * @returns %TRUE if the text node has color glyphs
             */
            has_color_glyphs(): boolean;
        }

        /**
         * A render node for a `GdkTexture`.
         */
        class TextureNode extends RenderNode {
            static $gtype: GObject.GType<TextureNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode;

            // Methods

            /**
             * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
             * @returns the `GdkTexture`
             */
            get_texture(): Gdk.Texture;
        }

        /**
         * A render node for a `GdkTexture`.
         */
        class TextureScaleNode extends RenderNode {
            static $gtype: GObject.GType<TextureScaleNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](texture: Gdk.Texture, bounds: Graphene.Rect, filter: ScalingFilter): TextureScaleNode;

            // Methods

            /**
             * Retrieves the `GskScalingFilter` used when creating this `GskRenderNode`.
             * @returns the `GskScalingFilter`
             */
            get_filter(): ScalingFilter;
            /**
             * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
             * @returns the `GdkTexture`
             */
            get_texture(): Gdk.Texture;
        }

        /**
         * A render node applying a `GskTransform` to its single child node.
         */
        class TransformNode extends RenderNode {
            static $gtype: GObject.GType<TransformNode>;

            // Constructors

            _init(...args: any[]): void;

            static ['new'](child: RenderNode, transform: Transform): TransformNode;

            // Methods

            /**
             * Gets the child node that is getting transformed by the given `node`.
             * @returns The child that is getting transformed
             */
            get_child(): RenderNode;
            /**
             * Retrieves the `GskTransform` used by the `node`.
             * @returns a `GskTransform`
             */
            get_transform(): Transform;
        }

        module VulkanRenderer {
            // Constructor properties interface

            interface ConstructorProps extends Renderer.ConstructorProps {}
        }

        /**
         * A GSK renderer that is using Vulkan.
         *
         * This renderer will fail to realize if Vulkan is not supported.
         */
        class VulkanRenderer extends Renderer {
            static $gtype: GObject.GType<VulkanRenderer>;

            // Constructors

            constructor(properties?: Partial<VulkanRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VulkanRenderer;
        }

        type BroadwayRendererClass = typeof BroadwayRenderer;
        type CairoRendererClass = typeof CairoRenderer;
        /**
         * A color stop in a gradient node.
         */
        class ColorStop {
            static $gtype: GObject.GType<ColorStop>;

            // Fields

            offset: number;
            color: Gdk.RGBA;

            // Constructors

            constructor(
                properties?: Partial<{
                    offset: number;
                    color: Gdk.RGBA;
                }>,
            );
            _init(...args: any[]): void;
        }

        type GLRendererClass = typeof GLRenderer;
        type GLShaderClass = typeof GLShader;
        /**
         * A location in a parse buffer.
         */
        class ParseLocation {
            static $gtype: GObject.GType<ParseLocation>;

            // Fields

            bytes: number;
            chars: number;
            lines: number;
            line_bytes: number;
            line_chars: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    bytes: number;
                    chars: number;
                    lines: number;
                    line_bytes: number;
                    line_chars: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * A `GskPath` describes lines and curves that are more complex
         * than simple rectangles.
         *
         * Paths can used for rendering (filling or stroking) and for animations
         * (e.g. as trajectories).
         *
         * `GskPath` is an immutable, opaque, reference-counted struct.
         * After creation, you cannot change the types it represents. Instead,
         * new `GskPath` objects have to be created. The [struct`Gsk`.PathBuilder]
         * structure is meant to help in this endeavor.
         *
         * Conceptually, a path consists of zero or more contours (continuous, connected
         * curves), each of which may or may not be closed. Contours are typically
         * constructed from Bézier segments.
         *
         * <picture>
         *   <source srcset="path-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="A Path" src="path-light.png">
         * </picture>
         */
        abstract class Path {
            static $gtype: GObject.GType<Path>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * This is a convenience function that constructs a `GskPath`
             * from a serialized form.
             *
             * The string is expected to be in (a superset of)
             * [SVG path syntax](https://www.w3.org/TR/SVG11/paths.html#PathData),
             * as e.g. produced by [method`Gsk`.Path.to_string].
             *
             * A high-level summary of the syntax:
             *
             * - `M x y` Move to `(x, y)`
             * - `L x y` Add a line from the current point to `(x, y)`
             * - `Q x1 y1 x2 y2` Add a quadratic Bézier from the current point to `(x2, y2)`, with control point `(x1, y1)`
             * - `C x1 y1 x2 y2 x3 y3` Add a cubic Bézier from the current point to `(x3, y3)`, with control points `(x1, y1)` and `(x2, y2)`
             * - `Z` Close the contour by drawing a line back to the start point
             * - `H x` Add a horizontal line from the current point to the given x value
             * - `V y` Add a vertical line from the current point to the given y value
             * - `T x2 y2` Add a quadratic Bézier, using the reflection of the previous segments' control point as control point
             * - `S x2 y2 x3 y3` Add a cubic Bézier, using the reflection of the previous segments' second control point as first control point
             * - `A rx ry r l s x y` Add an elliptical arc from the current point to `(x, y)` with radii rx and ry. See the SVG documentation for how the other parameters influence the arc.
             * - `O x1 y1 x2 y2 w` Add a rational quadratic Bézier from the current point to `(x2, y2)` with control point `(x1, y1)` and weight `w`.
             *
             * All the commands have lowercase variants that interpret coordinates
             * relative to the current point.
             *
             * The `O` command is an extension that is not supported in SVG.
             * @param string a string
             */
            static parse(string: string): Path | null;

            // Methods

            /**
             * Calls `func` for every operation of the path.
             *
             * Note that this may only approximate `self,` because paths can contain
             * optimizations for various specialized contours, and depending on the
             * `flags,` the path may be decomposed into simpler curves than the ones
             * that it contained originally.
             *
             * This function serves two purposes:
             *
             * - When the `flags` allow everything, it provides access to the raw,
             *   unmodified data of the path.
             * - When the `flags` disallow certain operations, it provides
             *   an approximation of the path using just the allowed operations.
             * @param flags flags to pass to the foreach function. See [flags@Gsk.PathForeachFlags]   for details about flags
             * @param func the function to call for operations
             * @returns `FALSE` if @func returned FALSE`, `TRUE` otherwise.
             */
            foreach(flags: PathForeachFlags, func: PathForeachFunc): boolean;
            /**
             * Computes the bounds of the given path.
             *
             * The returned bounds may be larger than necessary, because this
             * function aims to be fast, not accurate. The bounds are guaranteed
             * to contain the path.
             *
             * It is possible that the returned rectangle has 0 width and/or height.
             * This can happen when the path only describes a point or an
             * axis-aligned line.
             *
             * If the path is empty, `FALSE` is returned and `bounds` are set to
             * graphene_rect_zero(). This is different from the case where the path
             * is a single point at the origin, where the `bounds` will also be set to
             * the zero rectangle but `TRUE` will be returned.
             * @returns `TRUE` if the path has bounds, `FALSE` if the path is known   to be empty and have no bounds.
             */
            get_bounds(): [boolean, Graphene.Rect];
            /**
             * Computes the closest point on the path to the given point
             * and sets the `result` to it.
             *
             * If there is no point closer than the given threshold,
             * `FALSE` is returned.
             * @param point the point
             * @param threshold maximum allowed distance
             * @returns `TRUE` if @point was set to the closest point   on @self, `FALSE` if no point is closer than @threshold
             */
            get_closest_point(point: Graphene.Point, threshold: number): [boolean, PathPoint, number];
            /**
             * Gets the end point of the path.
             *
             * An empty path has no points, so `FALSE`
             * is returned in this case.
             * @returns `TRUE` if @result was filled
             */
            get_end_point(): [boolean, PathPoint];
            /**
             * Gets the start point of the path.
             *
             * An empty path has no points, so `FALSE`
             * is returned in this case.
             * @returns `TRUE` if @result was filled
             */
            get_start_point(): [boolean, PathPoint];
            /**
             * Computes the bounds for stroking the given path with the
             * parameters in `stroke`.
             *
             * The returned bounds may be larger than necessary, because this
             * function aims to be fast, not accurate. The bounds are guaranteed
             * to contain the area affected by the stroke, including protrusions
             * like miters.
             * @param stroke stroke parameters
             * @returns `TRUE` if the path has bounds, `FALSE` if the path is known   to be empty and have no bounds.
             */
            get_stroke_bounds(stroke: Stroke): [boolean, Graphene.Rect];
            /**
             * Returns whether the given point is inside the area
             * that would be affected if the path was filled according
             * to `fill_rule`.
             *
             * Note that this function assumes that filling a contour
             * implicitly closes it.
             * @param point the point to test
             * @param fill_rule the fill rule to follow
             * @returns `TRUE` if @point is inside
             */
            in_fill(point: Graphene.Point, fill_rule: FillRule): boolean;
            /**
             * Returns if the path represents a single closed
             * contour.
             * @returns `TRUE` if the path is closed
             */
            is_closed(): boolean;
            /**
             * Checks if the path is empty, i.e. contains no lines or curves.
             * @returns `TRUE` if the path is empty
             */
            is_empty(): boolean;
            /**
             * Converts `self` into a human-readable string representation suitable
             * for printing.
             *
             * The string is compatible with (a superset of)
             * [SVG path syntax](https://www.w3.org/TR/SVG11/paths.html#PathData),
             * see [func`Gsk`.Path.parse] for a summary of the syntax.
             * @param string The string to print into
             */
            print(string: GLib.String): void;
            /**
             * Increases the reference count of a `GskPath` by one.
             * @returns the passed in `GskPath`.
             */
            ref(): Path;
            /**
             * Appends the given `path` to the given cairo context for drawing
             * with Cairo.
             *
             * This may cause some suboptimal conversions to be performed as
             * Cairo does not support all features of `GskPath`.
             *
             * This function does not clear the existing Cairo path. Call
             * cairo_new_path() if you want this.
             * @param cr a cairo context
             */
            to_cairo(cr: cairo.Context): void;
            /**
             * Converts the path into a string that is suitable for printing.
             *
             * You can use this function in a debugger to get a quick overview
             * of the path.
             *
             * This is a wrapper around [method`Gsk`.Path.print], see that function
             * for details.
             * @returns A new string for @self
             */
            to_string(): string;
            /**
             * Decreases the reference count of a `GskPath` by one.
             *
             * If the resulting reference count is zero, frees the path.
             */
            unref(): void;
        }

        /**
         * `GskPathBuilder` is an auxiliary object for constructing
         * `GskPath` objects.
         *
         * A path is constructed like this:
         *
         *
         * ```c
         * GskPath *
         * construct_path (void)
         * {
         *   GskPathBuilder *builder;
         *
         *   builder = gsk_path_builder_new ();
         *
         *   // add contours to the path here
         *
         *   return gsk_path_builder_free_to_path (builder);
         * ```
         *
         *
         * Adding contours to the path can be done in two ways.
         * The easiest option is to use the `gsk_path_builder_add_*` group
         * of functions that add predefined contours to the current path,
         * either common shapes like [method`Gsk`.PathBuilder.add_circle]
         * or by adding from other paths like [method`Gsk`.PathBuilder.add_path].
         *
         * The `gsk_path_builder_add_*` methods always add complete contours,
         * and do not use or modify the current point.
         *
         * The other option is to define each line and curve manually with
         * the `gsk_path_builder_*_to` group of functions. You start with
         * a call to [method`Gsk`.PathBuilder.move_to] to set the starting point
         * and then use multiple calls to any of the drawing functions to
         * move the pen along the plane. Once you are done, you can call
         * [method`Gsk`.PathBuilder.close] to close the path by connecting it
         * back with a line to the starting point.
         *
         * This is similar to how paths are drawn in Cairo.
         *
         * Note that `GskPathBuilder` will reduce the degree of added Bézier
         * curves as much as possible, to simplify rendering.
         */
        class PathBuilder {
            static $gtype: GObject.GType<PathBuilder>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): PathBuilder;

            // Methods

            /**
             * Adds a Cairo path to the builder.
             *
             * You can use cairo_copy_path() to access the path
             * from a Cairo context.
             * @param path a path
             */
            add_cairo_path(path: cairo.Path): void;
            /**
             * Adds a circle with the `center` and `radius`.
             *
             * The path is going around the circle in clockwise direction.
             *
             * If `radius` is zero, the contour will be a closed point.
             * @param center the center of the circle
             * @param radius the radius of the circle
             */
            add_circle(center: Graphene.Point, radius: number): void;
            /**
             * Adds the outlines for the glyphs in `layout` to the builder.
             * @param layout the pango layout to add
             */
            add_layout(layout: Pango.Layout): void;
            /**
             * Appends all of `path` to the builder.
             * @param path the path to append
             */
            add_path(path: Path): void;
            /**
             * Adds `rect` as a new contour to the path built by the builder.
             *
             * The path is going around the rectangle in clockwise direction.
             *
             * If the the width or height are 0, the path will be a closed
             * horizontal or vertical line. If both are 0, it'll be a closed dot.
             * @param rect The rectangle to create a path for
             */
            add_rect(rect: Graphene.Rect): void;
            /**
             * Appends all of `path` to the builder, in reverse order.
             * @param path the path to append
             */
            add_reverse_path(path: Path): void;
            /**
             * Adds `rect` as a new contour to the path built in `self`.
             *
             * The path is going around the rectangle in clockwise direction.
             * @param rect the rounded rect
             */
            add_rounded_rect(rect: RoundedRect): void;
            /**
             * Adds to `self` the segment of `path` from `start` to `end`.
             *
             * If `start` is equal to or after `end,` the path will first add the
             * segment from `start` to the end of the path, and then add the segment
             * from the beginning to `end`. If the path is closed, these segments
             * will be connected.
             *
             * Note that this method always adds a path with the given start point
             * and end point. To add a closed path, use [method`Gsk`.PathBuilder.add_path].
             * @param path the `GskPath` to take the segment to
             * @param start the point on @path to start at
             * @param end the point on @path to end at
             */
            add_segment(path: Path, start: PathPoint, end: PathPoint): void;
            /**
             * Adds an elliptical arc from the current point to `x2`, `y2`
             * with `x1`, `y1` determining the tangent directions.
             *
             * After this, `x2`, `y2` will be the new current point.
             *
             * Note: Two points and their tangents do not determine
             * a unique ellipse, so GSK just picks one. If you need more
             * precise control, use [method`Gsk`.PathBuilder.conic_to]
             * or [method`Gsk`.PathBuilder.svg_arc_to].
             *
             * <picture>
             *   <source srcset="arc-dark.png" media="(prefers-color-scheme: dark)">
             *   <img alt="Arc To" src="arc-light.png">
             * </picture>
             * @param x1 x coordinate of first control point
             * @param y1 y coordinate of first control point
             * @param x2 x coordinate of second control point
             * @param y2 y coordinate of second control point
             */
            arc_to(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Ends the current contour with a line back to the start point.
             *
             * Note that this is different from calling [method`Gsk`.PathBuilder.line_to]
             * with the start point in that the contour will be closed. A closed
             * contour behaves differently from an open one. When stroking, its
             * start and end point are considered connected, so they will be
             * joined via the line join, and not ended with line caps.
             */
            close(): void;
            /**
             * Adds a [conic curve](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline)
             * from the current point to `x2`, `y2` with the given `weight` and `x1`, `y1` as the
             * control point.
             *
             * The weight determines how strongly the curve is pulled towards the control point.
             * A conic with weight 1 is identical to a quadratic Bézier curve with the same points.
             *
             * Conic curves can be used to draw ellipses and circles. They are also known as
             * rational quadratic Bézier curves.
             *
             * After this, `x2`, `y2` will be the new current point.
             *
             * <picture>
             *   <source srcset="conic-dark.png" media="(prefers-color-scheme: dark)">
             *   <img alt="Conic To" src="conic-light.png">
             * </picture>
             * @param x1 x coordinate of control point
             * @param y1 y coordinate of control point
             * @param x2 x coordinate of the end of the curve
             * @param y2 y coordinate of the end of the curve
             * @param weight weight of the control point, must be greater than zero
             */
            conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void;
            /**
             * Adds a [cubic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
             * from the current point to `x3`, `y3` with `x1`, `y1` and `x2`, `y2` as the control
             * points.
             *
             * After this, `x3`, `y3` will be the new current point.
             *
             * <picture>
             *   <source srcset="cubic-dark.png" media="(prefers-color-scheme: dark)">
             *   <img alt="Cubic To" src="cubic-light.png">
             * </picture>
             * @param x1 x coordinate of first control point
             * @param y1 y coordinate of first control point
             * @param x2 x coordinate of second control point
             * @param y2 y coordinate of second control point
             * @param x3 x coordinate of the end of the curve
             * @param y3 y coordinate of the end of the curve
             */
            cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            /**
             * Gets the current point.
             *
             * The current point is used for relative drawing commands and
             * updated after every operation.
             *
             * When the builder is created, the default current point is set
             * to `0, 0`. Note that this is different from cairo, which starts
             * out without a current point.
             * @returns The current point
             */
            get_current_point(): Graphene.Point;
            /**
             * Implements arc-to according to the HTML Canvas spec.
             *
             * A convenience function that implements the
             * [HTML arc_to](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-arcto-dev)
             * functionality.
             *
             * After this, the current point will be the point where
             * the circle with the given radius touches the line from
             * `x1`, `y1` to `x2`, `y2`.
             * @param x1 X coordinate of first control point
             * @param y1 Y coordinate of first control point
             * @param x2 X coordinate of second control point
             * @param y2 Y coordinate of second control point
             * @param radius Radius of the circle
             */
            html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void;
            /**
             * Draws a line from the current point to `x,` `y` and makes it
             * the new current point.
             *
             * <picture>
             *   <source srcset="line-dark.png" media="(prefers-color-scheme: dark)">
             *   <img alt="Line To" src="line-light.png">
             * </picture>
             * @param x x coordinate
             * @param y y coordinate
             */
            line_to(x: number, y: number): void;
            /**
             * Starts a new contour by placing the pen at `x,` `y`.
             *
             * If this function is called twice in succession, the first
             * call will result in a contour made up of a single point.
             * The second call will start a new contour.
             * @param x x coordinate
             * @param y y coordinate
             */
            move_to(x: number, y: number): void;
            /**
             * Adds a [quadratic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
             * from the current point to `x2`, `y2` with `x1`, `y1` as the control point.
             *
             * After this, `x2`, `y2` will be the new current point.
             *
             * <picture>
             *   <source srcset="quad-dark.png" media="(prefers-color-scheme: dark)">
             *   <img alt="Quad To" src="quad-light.png">
             * </picture>
             * @param x1 x coordinate of control point
             * @param y1 y coordinate of control point
             * @param x2 x coordinate of the end of the curve
             * @param y2 y coordinate of the end of the curve
             */
            quad_to(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Acquires a reference on the given builder.
             *
             * This function is intended primarily for language bindings.
             * `GskPathBuilder` objects should not be kept around.
             * @returns the given `GskPathBuilder` with   its reference count increased
             */
            ref(): PathBuilder;
            /**
             * Adds an elliptical arc from the current point to `x2`, `y2`
             * with `x1`, `y1` determining the tangent directions.
             *
             * All coordinates are given relative to the current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.arc_to].
             * @param x1 x coordinate of first control point
             * @param y1 y coordinate of first control point
             * @param x2 x coordinate of second control point
             * @param y2 y coordinate of second control point
             */
            rel_arc_to(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Adds a [conic curve](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline)
             * from the current point to `x2`, `y2` with the given `weight` and `x1`, `y1` as the
             * control point.
             *
             * All coordinates are given relative to the current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.conic_to].
             * @param x1 x offset of control point
             * @param y1 y offset of control point
             * @param x2 x offset of the end of the curve
             * @param y2 y offset of the end of the curve
             * @param weight weight of the curve, must be greater than zero
             */
            rel_conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void;
            /**
             * Adds a [cubic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
             * from the current point to `x3`, `y3` with `x1`, `y1` and `x2`, `y2` as the control
             * points.
             *
             * All coordinates are given relative to the current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.cubic_to].
             * @param x1 x offset of first control point
             * @param y1 y offset of first control point
             * @param x2 x offset of second control point
             * @param y2 y offset of second control point
             * @param x3 x offset of the end of the curve
             * @param y3 y offset of the end of the curve
             */
            rel_cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
            /**
             * Implements arc-to according to the HTML Canvas spec.
             *
             * All coordinates are given relative to the current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.html_arc_to].
             * @param x1 X coordinate of first control point
             * @param y1 Y coordinate of first control point
             * @param x2 X coordinate of second control point
             * @param y2 Y coordinate of second control point
             * @param radius Radius of the circle
             */
            rel_html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void;
            /**
             * Draws a line from the current point to a point offset from it
             * by `x,` `y` and makes it the new current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.line_to].
             * @param x x offset
             * @param y y offset
             */
            rel_line_to(x: number, y: number): void;
            /**
             * Starts a new contour by placing the pen at `x,` `y`
             * relative to the current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.move_to].
             * @param x x offset
             * @param y y offset
             */
            rel_move_to(x: number, y: number): void;
            /**
             * Adds a [quadratic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
             * from the current point to `x2`, `y2` with `x1`, `y1` the control point.
             *
             * All coordinates are given relative to the current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.quad_to].
             * @param x1 x offset of control point
             * @param y1 y offset of control point
             * @param x2 x offset of the end of the curve
             * @param y2 y offset of the end of the curve
             */
            rel_quad_to(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Implements arc-to according to the SVG spec.
             *
             * All coordinates are given relative to the current point.
             *
             * This is the relative version of [method`Gsk`.PathBuilder.svg_arc_to].
             * @param rx X radius
             * @param ry Y radius
             * @param x_axis_rotation the rotation of the ellipsis
             * @param large_arc whether to add the large arc
             * @param positive_sweep whether to sweep in the positive direction
             * @param x the X coordinate of the endpoint
             * @param y the Y coordinate of the endpoint
             */
            rel_svg_arc_to(
                rx: number,
                ry: number,
                x_axis_rotation: number,
                large_arc: boolean,
                positive_sweep: boolean,
                x: number,
                y: number,
            ): void;
            /**
             * Implements arc-to according to the SVG spec.
             *
             * A convenience function that implements the
             * [SVG arc_to](https://www.w3.org/TR/SVG11/paths.html#PathDataEllipticalArcCommands)
             * functionality.
             *
             * After this, `x,` `y` will be the new current point.
             * @param rx X radius
             * @param ry Y radius
             * @param x_axis_rotation the rotation of the ellipsis
             * @param large_arc whether to add the large arc
             * @param positive_sweep whether to sweep in the positive direction
             * @param x the X coordinate of the endpoint
             * @param y the Y coordinate of the endpoint
             */
            svg_arc_to(
                rx: number,
                ry: number,
                x_axis_rotation: number,
                large_arc: boolean,
                positive_sweep: boolean,
                x: number,
                y: number,
            ): void;
            /**
             * Creates a new `GskPath` from the given builder.
             *
             * The given `GskPathBuilder` is reset once this function returns;
             * you cannot call this function multiple times on the same builder
             * instance.
             *
             * This function is intended primarily for language bindings.
             * C code should use [method`Gsk`.PathBuilder.free_to_path].
             * @returns the newly created `GskPath`   with all the contours added to the builder
             */
            to_path(): Path;
            /**
             * Releases a reference on the given builder.
             */
            unref(): void;
        }

        /**
         * `GskPathMeasure` is an object that allows measurements
         * on `GskPath`s such as determining the length of the path.
         *
         * Many measuring operations require sampling the path length
         * at intermediate points. Therefore, a `GskPathMeasure` has
         * a tolerance that determines what precision is required
         * for such approximations.
         *
         * A `GskPathMeasure` struct is a reference counted struct
         * and should be treated as opaque.
         */
        class PathMeasure {
            static $gtype: GObject.GType<PathMeasure>;

            // Constructors

            constructor(path: Path);
            _init(...args: any[]): void;

            static ['new'](path: Path): PathMeasure;

            static new_with_tolerance(path: Path, tolerance: number): PathMeasure;

            // Methods

            /**
             * Gets the length of the path being measured.
             *
             * The length is cached, so this function does not do any work.
             * @returns The length of the path measured by @self
             */
            get_length(): number;
            /**
             * Returns the path that the measure was created for.
             * @returns the path of @self
             */
            get_path(): Path;
            /**
             * Sets `result` to the point at the given distance into the path.
             *
             * An empty path has no points, so `FALSE` is returned in that case.
             * @param distance the distance
             * @returns `TRUE` if @result was set
             */
            get_point(distance: number): [boolean, PathPoint];
            /**
             * Returns the tolerance that the measure was created with.
             * @returns the tolerance of @self
             */
            get_tolerance(): number;
            /**
             * Increases the reference count of a `GskPathMeasure` by one.
             * @returns the passed in `GskPathMeasure`.
             */
            ref(): PathMeasure;
            /**
             * Decreases the reference count of a `GskPathMeasure` by one.
             *
             * If the resulting reference count is zero, frees the object.
             */
            unref(): void;
        }

        /**
         * `GskPathPoint` is an opaque type representing a point on a path.
         *
         * It can be queried for properties of the path at that point, such as
         * its tangent or its curvature.
         *
         * To obtain a `GskPathPoint`, use [method`Gsk`.Path.get_closest_point],
         * [method`Gsk`.Path.get_start_point], [method`Gsk`.Path.get_end_point]
         * or [method`Gsk`.PathMeasure.get_point].
         *
         * Note that `GskPathPoint` structs are meant to be stack-allocated,
         * and don't hold a reference to the path object they are obtained from.
         * It is the callers responsibility to keep a reference to the path
         * as long as the `GskPathPoint` is used.
         */
        class PathPoint {
            static $gtype: GObject.GType<PathPoint>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns whether `point1` is before or after `point2`.
             * @param point2 another `GskPathPoint`
             * @returns -1 if @point1 is before @point2,   1 if @point1 is after @point2,   0 if they are equal
             */
            compare(point2: PathPoint): number;
            /**
             * Copies a path point.
             * @returns the copied point
             */
            copy(): PathPoint;
            /**
             * Returns whether the two path points refer to the same
             * location on all paths.
             *
             * Note that the start- and endpoint of a closed contour
             * will compare nonequal according to this definition.
             * Use [method`Gsk`.Path.is_closed] to find out if the
             * start- and endpoint of a concrete path refer to the
             * same location.
             * @param point2 another `GskPathPoint`
             * @returns `TRUE` if @point1 and @point2 are equal
             */
            equal(point2: PathPoint): boolean;
            /**
             * Frees a path point copied by [method`Gsk`.PathPoint.copy].
             */
            free(): void;
            /**
             * Calculates the curvature of the path at the point.
             *
             * Optionally, returns the center of the osculating circle as well.
             * The curvature is the inverse of the radius of the osculating circle.
             *
             * Lines have a curvature of zero (indicating an osculating circle of
             * infinite radius. In this case, the `center` is not modified.
             *
             * Circles with a radius of zero have `INFINITY` as curvature
             *
             * Note that certain points on a path may not have a single curvature,
             * such as sharp turns. At such points, there are two curvatures --
             * the (limit of) the curvature of the path going into the point,
             * and the (limit of) the curvature of the path coming out of it.
             * The `direction` argument lets you choose which one to get.
             *
             * <picture>
             *   <source srcset="curvature-dark.png" media="(prefers-color-scheme: dark)">
             *   <img alt="Osculating circle" src="curvature-light.png">
             * </picture>
             * @param path the path that @point is on
             * @param direction the direction for which to return the curvature
             * @returns The curvature of the path at the given point
             */
            get_curvature(path: Path, direction: PathDirection): [number, Graphene.Point | null];
            /**
             * Returns the distance from the beginning of the path
             * to `point`.
             * @param measure a `GskPathMeasure` for the path
             * @returns the distance of @point
             */
            get_distance(measure: PathMeasure): number;
            /**
             * Gets the position of the point.
             * @param path the path that @point is on
             */
            get_position(path: Path): Graphene.Point;
            /**
             * Gets the direction of the tangent at a given point.
             *
             * This is a convenience variant of [method`Gsk`.PathPoint.get_tangent]
             * that returns the angle between the tangent and the X axis. The angle
             * can e.g. be used in
             * [gtk_snapshot_rotate()](../gtk4/method.Snapshot.rotate.html).
             * @param path the path that @point is on
             * @param direction the direction for which to return the rotation
             * @returns the angle between the tangent and the X axis, in degrees
             */
            get_rotation(path: Path, direction: PathDirection): number;
            /**
             * Gets the tangent of the path at the point.
             *
             * Note that certain points on a path may not have a single
             * tangent, such as sharp turns. At such points, there are
             * two tangents -- the direction of the path going into the
             * point, and the direction coming out of it. The `direction`
             * argument lets you choose which one to get.
             *
             * If the path is just a single point (e.g. a circle with
             * radius zero), then `tangent` is set to `0, 0`.
             *
             * If you want to orient something in the direction of the
             * path, [method`Gsk`.PathPoint.get_rotation] may be more
             * convenient to use.
             * @param path the path that @point is on
             * @param direction the direction for which to return the tangent
             */
            get_tangent(path: Path, direction: PathDirection): Graphene.Vec2;
        }

        type RendererClass = typeof Renderer;
        /**
         * A rectangular region with rounded corners.
         *
         * Application code should normalize rectangles using
         * [method`Gsk`.RoundedRect.normalize]; this function will ensure that
         * the bounds of the rectangle are normalized and ensure that the corner
         * values are positive and the corners do not overlap.
         *
         * All functions taking a `GskRoundedRect` as an argument will internally
         * operate on a normalized copy; all functions returning a `GskRoundedRect`
         * will always return a normalized one.
         *
         * The algorithm used for normalizing corner sizes is described in
         * [the CSS specification](https://drafts.csswg.org/css-backgrounds-3/#border-radius).
         */
        class RoundedRect {
            static $gtype: GObject.GType<RoundedRect>;

            // Fields

            bounds: Graphene.Rect;
            corner: Graphene.Size[];

            // Constructors

            constructor(
                properties?: Partial<{
                    bounds: Graphene.Rect;
                    corner: Graphene.Size[];
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Checks if the given `point` is inside the rounded rectangle.
             * @param point the point to check
             * @returns %TRUE if the @point is inside the rounded rectangle
             */
            contains_point(point: Graphene.Point): boolean;
            /**
             * Checks if the given `rect` is contained inside the rounded rectangle.
             * @param rect the rectangle to check
             * @returns %TRUE if the @rect is fully contained inside the rounded rectangle
             */
            contains_rect(rect: Graphene.Rect): boolean;
            /**
             * Initializes the given `GskRoundedRect` with the given values.
             *
             * This function will implicitly normalize the `GskRoundedRect`
             * before returning.
             * @param bounds a `graphene_rect_t` describing the bounds
             * @param top_left the rounding radius of the top left corner
             * @param top_right the rounding radius of the top right corner
             * @param bottom_right the rounding radius of the bottom right corner
             * @param bottom_left the rounding radius of the bottom left corner
             * @returns the initialized rectangle
             */
            init(
                bounds: Graphene.Rect,
                top_left: Graphene.Size,
                top_right: Graphene.Size,
                bottom_right: Graphene.Size,
                bottom_left: Graphene.Size,
            ): RoundedRect;
            /**
             * Initializes `self` using the given `src` rectangle.
             *
             * This function will not normalize the `GskRoundedRect`,
             * so make sure the source is normalized.
             * @param src a `GskRoundedRect`
             * @returns the initialized rectangle
             */
            init_copy(src: RoundedRect): RoundedRect;
            /**
             * Initializes `self` to the given `bounds` and sets the radius
             * of all four corners to `radius`.
             * @param bounds a `graphene_rect_t`
             * @param radius the border radius
             * @returns the initialized rectangle
             */
            init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect;
            /**
             * Checks if part of the given `rect` is contained inside the rounded rectangle.
             * @param rect the rectangle to check
             * @returns %TRUE if the @rect intersects with the rounded rectangle
             */
            intersects_rect(rect: Graphene.Rect): boolean;
            /**
             * Checks if all corners of `self` are right angles and the
             * rectangle covers all of its bounds.
             *
             * This information can be used to decide if [ctor`Gsk`.ClipNode.new]
             * or [ctor`Gsk`.RoundedClipNode.new] should be called.
             * @returns %TRUE if the rectangle is rectilinear
             */
            is_rectilinear(): boolean;
            /**
             * Normalizes the passed rectangle.
             *
             * This function will ensure that the bounds of the rectangle
             * are normalized and ensure that the corner values are positive
             * and the corners do not overlap.
             * @returns the normalized rectangle
             */
            normalize(): RoundedRect;
            /**
             * Offsets the bound's origin by `dx` and `dy`.
             *
             * The size and corners of the rectangle are unchanged.
             * @param dx the horizontal offset
             * @param dy the vertical offset
             * @returns the offset rectangle
             */
            offset(dx: number, dy: number): RoundedRect;
            /**
             * Shrinks (or grows) the given rectangle by moving the 4 sides
             * according to the offsets given.
             *
             * The corner radii will be changed in a way that tries to keep
             * the center of the corner circle intact. This emulates CSS behavior.
             *
             * This function also works for growing rectangles if you pass
             * negative values for the `top,` `right,` `bottom` or `left`.
             * @param top How far to move the top side downwards
             * @param right How far to move the right side to the left
             * @param bottom How far to move the bottom side upwards
             * @param left How far to move the left side to the right
             * @returns the resized `GskRoundedRect`
             */
            shrink(top: number, right: number, bottom: number, left: number): RoundedRect;
        }

        /**
         * An object to build the uniforms data for a `GskGLShader`.
         */
        class ShaderArgsBuilder {
            static $gtype: GObject.GType<ShaderArgsBuilder>;

            // Constructors

            constructor(shader: GLShader, initial_values?: GLib.Bytes | null);
            _init(...args: any[]): void;

            static ['new'](shader: GLShader, initial_values?: GLib.Bytes | null): ShaderArgsBuilder;

            // Methods

            /**
             * Increases the reference count of a `GskShaderArgsBuilder` by one.
             * @returns the passed in `GskShaderArgsBuilder`
             */
            ref(): ShaderArgsBuilder;
            /**
             * Sets the value of the uniform `idx`.
             *
             * The uniform must be of bool type.
             * @param idx index of the uniform
             * @param value value to set the uniform to
             */
            set_bool(idx: number, value: boolean): void;
            /**
             * Sets the value of the uniform `idx`.
             *
             * The uniform must be of float type.
             * @param idx index of the uniform
             * @param value value to set the uniform to
             */
            set_float(idx: number, value: number): void;
            /**
             * Sets the value of the uniform `idx`.
             *
             * The uniform must be of int type.
             * @param idx index of the uniform
             * @param value value to set the uniform to
             */
            set_int(idx: number, value: number): void;
            /**
             * Sets the value of the uniform `idx`.
             *
             * The uniform must be of uint type.
             * @param idx index of the uniform
             * @param value value to set the uniform to
             */
            set_uint(idx: number, value: number): void;
            /**
             * Sets the value of the uniform `idx`.
             *
             * The uniform must be of vec2 type.
             * @param idx index of the uniform
             * @param value value to set the uniform too
             */
            set_vec2(idx: number, value: Graphene.Vec2): void;
            /**
             * Sets the value of the uniform `idx`.
             *
             * The uniform must be of vec3 type.
             * @param idx index of the uniform
             * @param value value to set the uniform too
             */
            set_vec3(idx: number, value: Graphene.Vec3): void;
            /**
             * Sets the value of the uniform `idx`.
             *
             * The uniform must be of vec4 type.
             * @param idx index of the uniform
             * @param value value to set the uniform too
             */
            set_vec4(idx: number, value: Graphene.Vec4): void;
            /**
             * Creates a new `GBytes` args from the current state of the
             * given `builder`.
             *
             * Any uniforms of the shader that have not been explicitly set on
             * the `builder` are zero-initialized.
             *
             * The given `GskShaderArgsBuilder` is reset once this function returns;
             * you cannot call this function multiple times on the same `builder` instance.
             *
             * This function is intended primarily for bindings. C code should use
             * [method`Gsk`.ShaderArgsBuilder.free_to_args].
             * @returns the newly allocated buffer with   all the args added to @builder
             */
            to_args(): GLib.Bytes;
            /**
             * Decreases the reference count of a `GskShaderArgBuilder` by one.
             *
             * If the resulting reference count is zero, frees the builder.
             */
            unref(): void;
        }

        /**
         * The shadow parameters in a shadow node.
         */
        class Shadow {
            static $gtype: GObject.GType<Shadow>;

            // Fields

            color: Gdk.RGBA;
            dx: number;
            dy: number;
            radius: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    color: Gdk.RGBA;
                    dx: number;
                    dy: number;
                    radius: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * A `GskStroke` struct collects the parameters that influence
         * the operation of stroking a path.
         */
        class Stroke {
            static $gtype: GObject.GType<Stroke>;

            // Constructors

            constructor(line_width: number);
            _init(...args: any[]): void;

            static ['new'](line_width: number): Stroke;

            // Static methods

            /**
             * Checks if 2 strokes are identical.
             * @param stroke1 the first `GskStroke`
             * @param stroke2 the second `GskStroke`
             */
            static equal(stroke1?: any | null, stroke2?: any | null): boolean;

            // Methods

            /**
             * Creates a copy of the given `other` stroke.
             * @returns a new `GskStroke`. Use [method@Gsk.Stroke.free] to free it
             */
            copy(): Stroke;
            /**
             * Frees a `GskStroke`.
             */
            free(): void;
            /**
             * Gets the dash array in use or `NULL` if dashing is disabled.
             * @returns The dash array or `NULL` if the dash array is empty.
             */
            get_dash(): number[] | null;
            /**
             * Returns the dash_offset of a `GskStroke`.
             * @returns the dash_offset
             */
            get_dash_offset(): number;
            /**
             * Gets the line cap used.
             *
             * See [enum`Gsk`.LineCap] for details.
             * @returns The line cap
             */
            get_line_cap(): LineCap;
            /**
             * Gets the line join used.
             *
             * See [enum`Gsk`.LineJoin] for details.
             * @returns The line join
             */
            get_line_join(): LineJoin;
            /**
             * Gets the line width used.
             * @returns The line width
             */
            get_line_width(): number;
            /**
             * Returns the miter limit of a `GskStroke`.
             * @returns the miter limit
             */
            get_miter_limit(): number;
            /**
             * Sets the dash pattern to use by this stroke.
             *
             * A dash pattern is specified by an array of alternating non-negative
             * values. Each value provides the length of alternate "on" and "off"
             * portions of the stroke.
             *
             * Each "on" segment will have caps applied as if the segment were a
             * separate contour. In particular, it is valid to use an "on" length
             * of 0 with `GSK_LINE_CAP_ROUND` or `GSK_LINE_CAP_SQUARE` to draw dots
             * or squares along a path.
             *
             * If `n_dash` is 0, if all elements in `dash` are 0, or if there are
             * negative values in `dash,` then dashing is disabled.
             *
             * If `n_dash` is 1, an alternating "on" and "off" pattern with the
             * single dash length provided is assumed.
             *
             * If `n_dash` is uneven, the dash array will be used with the first
             * element in `dash` defining an "on" or "off" in alternating passes
             * through the array.
             *
             * You can specify a starting offset into the dash with
             * [method`Gsk`.Stroke.set_dash_offset].
             * @param dash the array of dashes
             */
            set_dash(dash?: number[] | null): void;
            /**
             * Sets the offset into the dash pattern where dashing should begin.
             *
             * This is an offset into the length of the path, not an index into
             * the array values of the dash array.
             *
             * See [method`Gsk`.Stroke.set_dash] for more details on dashing.
             * @param offset offset into the dash pattern
             */
            set_dash_offset(offset: number): void;
            /**
             * Sets the line cap to be used when stroking.
             *
             * See [enum`Gsk`.LineCap] for details.
             * @param line_cap the `GskLineCap`
             */
            set_line_cap(line_cap: LineCap): void;
            /**
             * Sets the line join to be used when stroking.
             *
             * See [enum`Gsk`.LineJoin] for details.
             * @param line_join The line join to use
             */
            set_line_join(line_join: LineJoin): void;
            /**
             * Sets the line width to be used when stroking.
             *
             * The line width must be > 0.
             * @param line_width width of the line in pixels
             */
            set_line_width(line_width: number): void;
            /**
             * Sets the limit for the distance from the corner where sharp
             * turns of joins get cut off.
             *
             * The miter limit is in units of line width and must be non-negative.
             *
             * For joins of type `GSK_LINE_JOIN_MITER` that exceed the miter
             * limit, the join gets rendered as if it was of type
             * `GSK_LINE_JOIN_BEVEL`.
             * @param limit the miter limit
             */
            set_miter_limit(limit: number): void;
            /**
             * A helper function that sets the stroke parameters
             * of `cr` from the values found in `self`.
             * @param cr the cairo context to configure
             */
            to_cairo(cr: cairo.Context): void;
        }

        /**
         * `GskTransform` is an object to describe transform matrices.
         *
         * Unlike `graphene_matrix_t`, `GskTransform` retains the steps in how
         * a transform was constructed, and allows inspecting them. It is modeled
         * after the way CSS describes transforms.
         *
         * `GskTransform` objects are immutable and cannot be changed after creation.
         * This means code can safely expose them as properties of objects without
         * having to worry about others changing them.
         */
        class Transform {
            static $gtype: GObject.GType<Transform>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): Transform;

            // Static methods

            /**
             * Parses the given `string` into a transform and puts it in
             * `out_transform`.
             *
             * Strings printed via [method`Gsk`.Transform.to_string]
             * can be read in again successfully using this function.
             *
             * If `string` does not describe a valid transform, %FALSE is
             * returned and %NULL is put in `out_transform`.
             * @param string the string to parse
             */
            static parse(string: string): [boolean, Transform];

            // Methods

            /**
             * Checks two transforms for equality.
             * @param second the second transform
             * @returns %TRUE if the two transforms perform the same operation
             */
            equal(second?: Transform | null): boolean;
            /**
             * Returns the category this transform belongs to.
             * @returns The category of the transform
             */
            get_category(): TransformCategory;
            /**
             * Inverts the given transform.
             *
             * If `self` is not invertible, %NULL is returned.
             * Note that inverting %NULL also returns %NULL, which is
             * the correct inverse of %NULL. If you need to differentiate
             * between those cases, you should check `self` is not %NULL
             * before calling this function.
             *
             * This function consumes `self`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @returns The inverted transform
             */
            invert(): Transform | null;
            /**
             * Multiplies `next` with the given `matrix`.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param matrix the matrix to multiply @next with
             * @returns The new transform
             */
            matrix(matrix: Graphene.Matrix): Transform;
            /**
             * Applies a perspective projection transform.
             *
             * This transform scales points in X and Y based on their Z value,
             * scaling points with positive Z values away from the origin, and
             * those with negative Z values towards the origin. Points
             * on the z=0 plane are unchanged.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param depth distance of the z=0 plane. Lower values give a more   flattened pyramid and therefore a more pronounced   perspective effect.
             * @returns The new transform
             */
            perspective(depth: number): Transform;
            /**
             * Converts `self` into a human-readable string representation suitable
             * for printing.
             *
             * The result of this function can later be parsed with
             * [func`Gsk`.Transform.parse].
             * @param string The string to print into
             */
            print(string: GLib.String): void;
            /**
             * Acquires a reference on the given `GskTransform`.
             * @returns the `GskTransform` with an additional reference
             */
            ref(): Transform | null;
            /**
             * Rotates `next` `angle` degrees in 2D - or in 3D-speak, around the Z axis.
             * The rotation happens around the origin point of (0, 0).
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param angle the rotation angle, in degrees (clockwise)
             * @returns The new transform
             */
            rotate(angle: number): Transform | null;
            /**
             * Rotates `next` `angle` degrees around `axis`.
             *
             * For a rotation in 2D space, use [method`Gsk`.Transform.rotate]
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param angle the rotation angle, in degrees (clockwise)
             * @param axis The rotation axis
             * @returns The new transform
             */
            rotate_3d(angle: number, axis: Graphene.Vec3): Transform | null;
            /**
             * Scales `next` in 2-dimensional space by the given factors.
             *
             * Use [method`Gsk`.Transform.scale_3d] to scale in all 3 dimensions.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param factor_x scaling factor on the X axis
             * @param factor_y scaling factor on the Y axis
             * @returns The new transform
             */
            scale(factor_x: number, factor_y: number): Transform | null;
            /**
             * Scales `next` by the given factors.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param factor_x scaling factor on the X axis
             * @param factor_y scaling factor on the Y axis
             * @param factor_z scaling factor on the Z axis
             * @returns The new transform
             */
            scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform | null;
            /**
             * Applies a skew transform.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param skew_x skew factor, in degrees, on the X axis
             * @param skew_y skew factor, in degrees, on the Y axis
             * @returns The new transform
             */
            skew(skew_x: number, skew_y: number): Transform | null;
            /**
             * Converts a `GskTransform` to a 2D transformation matrix.
             *
             * `self` must be a 2D transformation. If you are not
             * sure, use gsk_transform_get_category() >=
             * %GSK_TRANSFORM_CATEGORY_2D to check.
             *
             * The returned values have the following layout:
             *
             * ```
             *   | xx yx |   |  a  b  0 |
             *   | xy yy | = |  c  d  0 |
             *   | dx dy |   | tx ty  1 |
             * ```
             *
             * This function can be used to convert between a `GskTransform`
             * and a matrix type from other 2D drawing libraries, in particular
             * Cairo.
             */
            to_2d(): [number, number, number, number, number, number];
            /**
             * Converts a `GskTransform` to 2D transformation factors.
             *
             * To recreate an equivalent transform from the factors returned
             * by this function, use
             *
             *     gsk_transform_skew (
             *         gsk_transform_scale (
             *             gsk_transform_rotate (
             *                 gsk_transform_translate (NULL, &GRAPHENE_POINT_T (dx, dy)),
             *                 angle),
             *             scale_x, scale_y),
             *         skew_x, skew_y)
             *
             * `self` must be a 2D transformation. If you are not sure, use
             *
             *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D
             *
             * to check.
             */
            to_2d_components(): [number, number, number, number, number, number, number];
            /**
             * Converts a `GskTransform` to 2D affine transformation factors.
             *
             * To recreate an equivalent transform from the factors returned
             * by this function, use
             *
             *     gsk_transform_scale (gsk_transform_translate (NULL,
             *                                                   &GRAPHENE_POINT_T (dx, dy)),
             *                          sx, sy)
             *
             * `self` must be a 2D affine transformation. If you are not
             * sure, use
             *
             *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_AFFINE
             *
             * to check.
             */
            to_affine(): [number, number, number, number];
            /**
             * Computes the actual value of `self` and stores it in `out_matrix`.
             *
             * The previous value of `out_matrix` will be ignored.
             */
            to_matrix(): Graphene.Matrix;
            /**
             * Converts a matrix into a string that is suitable for printing.
             *
             * The resulting string can be parsed with [func`Gsk`.Transform.parse].
             *
             * This is a wrapper around [method`Gsk`.Transform.print].
             * @returns A new string for @self
             */
            to_string(): string;
            /**
             * Converts a `GskTransform` to a translation operation.
             *
             * `self` must be a 2D transformation. If you are not
             * sure, use
             *
             *     gsk_transform_get_category() >= %GSK_TRANSFORM_CATEGORY_2D_TRANSLATE
             *
             * to check.
             */
            to_translate(): [number, number];
            /**
             * Applies all the operations from `other` to `next`.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param other Transform to apply
             * @returns The new transform
             */
            transform(other?: Transform | null): Transform | null;
            /**
             * Transforms a `graphene_rect_t` using the given transform `self`.
             *
             * The result is the bounding box containing the coplanar quad.
             * @param rect a `graphene_rect_t`
             */
            transform_bounds(rect: Graphene.Rect): Graphene.Rect;
            /**
             * Transforms a `graphene_point_t` using the given transform `self`.
             * @param point a `graphene_point_t`
             */
            transform_point(point: Graphene.Point): Graphene.Point;
            /**
             * Translates `next` in 2-dimensional space by `point`.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param point the point to translate the transform by
             * @returns The new transform
             */
            translate(point: Graphene.Point): Transform | null;
            /**
             * Translates `next` by `point`.
             *
             * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
             * if you want to keep it around.
             * @param point the point to translate the transform by
             * @returns The new transform
             */
            translate_3d(point: Graphene.Point3D): Transform | null;
            /**
             * Releases a reference on the given `GskTransform`.
             *
             * If the reference was the last, the resources associated to the `self` are
             * freed.
             */
            unref(): void;
        }

        type VulkanRendererClass = typeof VulkanRenderer;
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

    export default Gsk;
}

declare module 'gi://Gsk' {
    import Gsk40 from 'gi://Gsk?version=4.0';
    export default Gsk40;
}
// END
