/// <reference path="./gstvideo-1.0.d.ts" />
/// <reference path="./gstbase-1.0.d.ts" />
/// <reference path="./gst-1.0.d.ts" />
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

declare module 'gi://GstGL?version=1.0' {
    // Module dependencies
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstGL {
        /**
         * GstGL-1.0
         */

        class GLBaseMemoryError extends GLib.Error {
            static $gtype: GObject.GType<GLBaseMemoryError>;

            // Static fields

            /**
             * generic failure
             */
            static FAILED: number;
            /**
             * the implementation is too old and doesn't
             *                                     implement enough features
             */
            static OLD_LIBS: number;
            /**
             * a resource could not be found
             */
            static RESOURCE_UNAVAILABLE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace GLConfigCaveat {
            export const $gtype: GObject.GType<GLConfigCaveat>;
        }

        enum GLConfigCaveat {
            /**
             * none
             */
            NONE,
            /**
             * slow
             */
            SLOW,
            /**
             * non-conformant
             */
            NON_CONFORMANT,
        }
        /**
         * OpenGL context errors.
         */
        class GLContextError extends GLib.Error {
            static $gtype: GObject.GType<GLContextError>;

            // Static fields

            /**
             * Failed for an unspecified reason
             */
            static FAILED: number;
            /**
             * The configuration requested is not correct
             */
            static WRONG_CONFIG: number;
            /**
             * The OpenGL API requested is not correct
             */
            static WRONG_API: number;
            /**
             * The OpenGL libraries are too old
             */
            static OLD_LIBS: number;
            /**
             * glXCreateContext (or similar) failed
             */
            static CREATE_CONTEXT: number;
            /**
             * A resource is not available
             */
            static RESOURCE_UNAVAILABLE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace GLFormat {
            export const $gtype: GObject.GType<GLFormat>;
        }

        enum GLFormat {
            /**
             * Single component replicated across R, G, and B textures
             *                    components
             */
            LUMINANCE,
            /**
             * Single component stored in the A texture component
             */
            ALPHA,
            /**
             * Combination of #GST_GL_LUMINANCE and #GST_GL_ALPHA
             */
            LUMINANCE_ALPHA,
            /**
             * Single component stored in the R texture component
             */
            RED,
            /**
             * Single 8-bit component stored in the R texture component
             */
            R8,
            /**
             * Two components stored in the R and G texture components
             */
            RG,
            /**
             * Two 8-bit components stored in the R and G texture components
             */
            RG8,
            /**
             * Three components stored in the R, G, and B texture components
             */
            RGB,
            /**
             * Three 8-bit components stored in the R, G, and B
             *               texture components
             */
            RGB8,
            /**
             * Three components of bit depth 5, 6 and 5 stored in the R, G,
             *                 and B texture components respectively.
             */
            RGB565,
            /**
             * Three 16-bit components stored in the R, G, and B
             *               texture components
             */
            RGB16,
            /**
             * Four components stored in the R, G, B, and A texture
             *               components respectively.
             */
            RGBA,
            /**
             * Four 8-bit components stored in the R, G, B, and A texture
             *                components respectively.
             */
            RGBA8,
            /**
             * Four 16-bit components stored in the R, G, B, and A texture
             *                components respectively.
             */
            RGBA16,
            /**
             * A single 16-bit component for depth information.
             */
            DEPTH_COMPONENT16,
            /**
             * A 24-bit component for depth information and
             *                           a 8-bit component for stencil informat.
             */
            DEPTH24_STENCIL8,
            RGB10_A2,
            /**
             * Single 16-bit component stored in the R texture component
             */
            R16,
            /**
             * Two 16-bit components stored in the R and G texture components
             */
            RG16,
        }

        export namespace GLQueryType {
            export const $gtype: GObject.GType<GLQueryType>;
        }

        enum GLQueryType {
            /**
             * no query
             */
            NONE,
            /**
             * query the time elapsed
             */
            TIME_ELAPSED,
            /**
             * query the current time
             */
            TIMESTAMP,
        }
        /**
         * Compilation stage that caused an error
         */
        class GLSLError extends GLib.Error {
            static $gtype: GObject.GType<GLSLError>;

            // Static fields

            /**
             * Compilation error occurred
             */
            static COMPILE: number;
            /**
             * Link error occurred
             */
            static LINK: number;
            /**
             * General program error occurred
             */
            static PROGRAM: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * GLSL version list
         */
        /**
         * GLSL version list
         */
        class GLSLVersion {
            static $gtype: GObject.GType<GLSLVersion>;

            // Static fields

            /**
             * no version
             */
            static NONE: number;
            /**
             * version 100 (only valid for ES)
             */
            static '100': number;
            /**
             * version 110 (only valid for compatibility desktop GL)
             */
            static '110': number;
            /**
             * version 120 (only valid for compatibility desktop GL)
             */
            static '120': number;
            /**
             * version 130 (only valid for compatibility desktop GL)
             */
            static '130': number;
            /**
             * version 140 (only valid for compatibility desktop GL)
             */
            static '140': number;
            /**
             * version 150 (valid for compatibility/core desktop GL)
             */
            static '150': number;
            /**
             * version 300 (only valid for ES)
             */
            static '300': number;
            /**
             * version 310 (only valid for ES)
             */
            static '310': number;
            /**
             * version 320 (only valid for ES)
             */
            static '320': number;
            /**
             * version 330 (valid for compatibility/core desktop GL)
             */
            static '330': number;
            /**
             * version 400 (valid for compatibility/core desktop GL)
             */
            static '400': number;
            /**
             * version 410 (valid for compatibility/core desktop GL)
             */
            static '410': number;
            /**
             * version 420 (valid for compatibility/core desktop GL)
             */
            static '420': number;
            /**
             * version 430 (valid for compatibility/core desktop GL)
             */
            static '430': number;
            /**
             * version 440 (valid for compatibility/core desktop GL)
             */
            static '440': number;
            /**
             * version 450 (valid for compatibility/core desktop GL)
             */
            static '450': number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Output anaglyph type to generate when downmixing to mono
         */

        /**
         * Output anaglyph type to generate when downmixing to mono
         */
        export namespace GLStereoDownmix {
            export const $gtype: GObject.GType<GLStereoDownmix>;
        }

        enum GLStereoDownmix {
            /**
             * Dubois optimised Green-Magenta anaglyph
             */
            GREEN_MAGENTA_DUBOIS,
            /**
             * Dubois optimised Red-Cyan anaglyph
             */
            RED_CYAN_DUBOIS,
            /**
             * Dubois optimised Amber-Blue anaglyph
             */
            AMBER_BLUE_DUBOIS,
        }
        /**
         * The OpenGL texture target that an OpenGL texture can be bound to.  The
         * gst_gl_value_set_texture_target_from_mask(),
         * gst_gl_value_get_texture_target_mask(), and
         * gst_gl_value_set_texture_target() functions can be used for handling texture
         * targets with #GValue's when e.g. dealing with #GstCaps.
         */

        /**
         * The OpenGL texture target that an OpenGL texture can be bound to.  The
         * gst_gl_value_set_texture_target_from_mask(),
         * gst_gl_value_get_texture_target_mask(), and
         * gst_gl_value_set_texture_target() functions can be used for handling texture
         * targets with #GValue's when e.g. dealing with #GstCaps.
         */
        export namespace GLTextureTarget {
            export const $gtype: GObject.GType<GLTextureTarget>;
        }

        enum GLTextureTarget {
            /**
             * no texture target
             */
            NONE,
            /**
             * 2D texture target (`GL_TEXTURE_2D`)
             */
            '2D',
            /**
             * rectangle texture target
             *     (`GL_TEXTURE_RECTANGLE`)
             */
            RECTANGLE,
            /**
             * external oes texture target
             *     (`GL_TEXTURE_EXTERNAL_OES`)
             */
            EXTERNAL_OES,
        }

        export namespace GLUploadReturn {
            export const $gtype: GObject.GType<GLUploadReturn>;
        }

        enum GLUploadReturn {
            /**
             * No further processing required
             */
            DONE,
            /**
             * An unspecified error occurred
             */
            ERROR,
            /**
             * The configuration is unsupported.
             */
            UNSUPPORTED,
            /**
             * This element requires a reconfiguration.
             */
            RECONFIGURE,
            /**
             * private return value.
             */
            UNSHARED_GL_CONTEXT,
        }
        class GLWindowError extends GLib.Error {
            static $gtype: GObject.GType<GLWindowError>;

            // Static fields

            /**
             * failed for a unspecified reason
             */
            static FAILED: number;
            /**
             * the implementation is too old
             */
            static OLD_LIBS: number;
            /**
             * no such resource was found
             */
            static RESOURCE_UNAVAILABLE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * An option that can be activated on bufferpools to request OpenGL
         * synchronization metadata on buffers from the pool.
         */
        const BUFFER_POOL_OPTION_GL_SYNC_META: string;
        /**
         * String used for %GST_GL_TEXTURE_TARGET_2D as a #GstBufferPool pool option
         */
        const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string;
        /**
         * String used for %GST_GL_TEXTURE_TARGET_EXTERNAL_OES as a #GstBufferPool pool option
         */
        const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string;
        /**
         * String used for %GST_GL_TEXTURE_TARGET_RECTANGLE as a #GstBufferPool pool option
         */
        const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string;
        /**
         * Name of the caps feature indicating the use of GL buffers
         */
        const CAPS_FEATURE_MEMORY_GL_BUFFER: string;
        /**
         * Name of the caps feature for indicating the use of #GstGLMemory
         */
        const CAPS_FEATURE_MEMORY_GL_MEMORY: string;
        /**
         * GL Allocation flag indicating that the implementation should allocate the
         * necessary resources.
         */
        const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number;
        /**
         * GL allocation flag indicating the allocation of a GL buffer.
         */
        const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number;
        /**
         * Values >= than #GST_GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER can be used for
         * user-defined purposes.
         */
        const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number;
        /**
         * GL allocation flag indicating the allocation of 2D video frames
         */
        const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number;
        /**
         * GL Allocation flag for using the provided GPU handle as storage.
         */
        const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number;
        /**
         * GL Allocation flag for using the provided system memory data as storage.
         */
        const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number;
        /**
         * The name for %GST_GL_API_GLES1 used in various places
         */
        const GL_API_GLES1_NAME: string;
        /**
         * The name for %GST_GL_API_GLES2 used in various places
         */
        const GL_API_GLES2_NAME: string;
        /**
         * The name for %GST_GL_API_OPENGL3 used in various places
         */
        const GL_API_OPENGL3_NAME: string;
        /**
         * The name for %GST_GL_API_OPENGL used in various places
         */
        const GL_API_OPENGL_NAME: string;
        /**
         * The name of the GL buffer allocator
         */
        const GL_BASE_MEMORY_ALLOCATOR_NAME: string;
        /**
         * The name of the GL buffer allocator
         */
        const GL_BUFFER_ALLOCATOR_NAME: string;
        /**
         * The currently supported formats that can be converted
         */
        const GL_COLOR_CONVERT_FORMATS: string;
        /**
         * The currently supported #GstCaps that can be converted
         */
        const GL_COLOR_CONVERT_VIDEO_CAPS: string;
        /**
         * The canonical name of a #GstStructure that contains a configuration for a
         * #GstGLContext.
         */
        const GL_CONFIG_STRUCTURE_NAME: string;
        const GL_CONTEXT_TYPE_CGL: string;
        const GL_CONTEXT_TYPE_EAGL: string;
        const GL_CONTEXT_TYPE_EGL: string;
        const GL_CONTEXT_TYPE_GLX: string;
        const GL_CONTEXT_TYPE_WGL: string;
        /**
         * The name used in #GstContext queries for requesting a #GstGLDisplay
         */
        const GL_DISPLAY_CONTEXT_TYPE: string;
        /**
         * The name of the GL memory allocator
         */
        const GL_MEMORY_ALLOCATOR_NAME: string;
        /**
         * The name of the GL Memory PBO allocator
         */
        const GL_MEMORY_PBO_ALLOCATOR_NAME: string;
        /**
         * List of video formats that are supported by #GstGLMemory
         */
        const GL_MEMORY_VIDEO_FORMATS_STR: string;
        /**
         * The name of the GL renderbuffer allocator
         */
        const GL_RENDERBUFFER_ALLOCATOR_NAME: string;
        /**
         * String used for %GST_GL_TEXTURE_TARGET_2D in things like caps values
         */
        const GL_TEXTURE_TARGET_2D_STR: string;
        /**
         * String used for %GST_GL_TEXTURE_TARGET_EXTERNAL_OES in things like caps values
         */
        const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string;
        /**
         * String used for %GST_GL_TEXTURE_TARGET_RECTANGLE in things like caps values
         */
        const GL_TEXTURE_TARGET_RECTANGLE_STR: string;
        /**
         * Flag indicating that we should map the GL object instead of to system memory.
         *
         * Combining #GST_MAP_GL with #GST_MAP_WRITE has the same semantics as though
         * you are writing to OpenGL. Conversely, combining #GST_MAP_GL with
         * #GST_MAP_READ has the same semantics as though you are reading from OpenGL.
         */
        const MAP_GL: number;
        function buffer_add_gl_sync_meta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta;
        function buffer_add_gl_sync_meta_full(context: GLContext, buffer: Gst.Buffer, data?: any | null): GLSyncMeta;
        function buffer_pool_config_get_gl_allocation_params(config: Gst.Structure): GLAllocationParams | null;
        /**
         * See gst_buffer_pool_config_set_gl_min_free_queue_size().
         * @param config a buffer pool config
         * @returns then number of buffers configured the free queue
         */
        function buffer_pool_config_get_gl_min_free_queue_size(config: Gst.Structure): number;
        /**
         * Sets `params` on `config`
         * @param config a buffer pool config
         * @param params a #GstGLAllocationParams
         */
        function buffer_pool_config_set_gl_allocation_params(
            config: Gst.Structure,
            params?: GLAllocationParams | null,
        ): void;
        /**
         * Instructs the #GstGLBufferPool to keep `queue_size` amount of buffers around
         * before allowing them for reuse.
         *
         * This is helpful to allow GPU processing to complete before the CPU
         * operations on the same buffer could start.  Particularly useful when
         * uploading or downloading data to/from the GPU.
         *
         * A value of 0 disabled this functionality.
         *
         * This value must be less than the configured maximum amount of buffers for
         * this `config`.
         * @param config a buffer pool config
         * @param queue_size the number of buffers
         */
        function buffer_pool_config_set_gl_min_free_queue_size(config: Gst.Structure, queue_size: number): void;
        function context_get_gl_display(context: Gst.Context): [boolean, GLDisplay | null];
        /**
         * Sets `display` on `context`
         * @param context a #GstContext
         * @param display resulting #GstGLDisplay
         */
        function context_set_gl_display(context: Gst.Context, display?: GLDisplay | null): void;
        function gl_api_from_string(api_s: string): GLAPI;
        function gl_api_to_string(api: GLAPI): string;
        function gl_base_memory_alloc(
            allocator: GLBaseMemoryAllocator,
            params: GLAllocationParams,
        ): GLBaseMemory | null;
        function gl_base_memory_error_quark(): GLib.Quark;
        /**
         * Initializes the GL Base Memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLBaseMemory operation.
         */
        function gl_base_memory_init_once(): void;
        /**
         * Initializes the GL Buffer allocator. It is safe to call this function
         * multiple times.  This must be called before any other #GstGLBuffer operation.
         */
        function gl_buffer_init_once(): void;
        function gl_check_extension(name: string, ext: string): boolean;
        function gl_config_caveat_to_string(caveat: GLConfigCaveat): string | null;
        function gl_config_surface_type_to_string(surface_type: GLConfigSurfaceType): string | null;
        function gl_context_error_quark(): GLib.Quark;
        function gl_element_propagate_display_context(element: Gst.Element, display: GLDisplay): void;
        /**
         * Perform the steps necessary for retrieving a #GstGLDisplay and (optionally)
         * an application provided #GstGLContext from the surrounding elements or from
         * the application using the #GstContext mechanism.
         *
         * If the contents of `display_ptr` or `other_context_ptr` are not %NULL, then no
         * #GstContext query is necessary for #GstGLDisplay or #GstGLContext retrieval
         * or is performed.
         *
         * This performs #GstContext queries (if necessary) for a winsys display
         * connection with %GST_GL_DISPLAY_CONTEXT_TYPE, "gst.x11.display.handle", and
         * "GstWaylandDisplayHandleContextType" stopping after the first successful
         * retrieval.
         *
         * This also performs a #GstContext query (if necessary) for an optional
         * application provided #GstGLContext using the name "gst.gl.app_context".
         * The returned #GstGLContext will be shared with a GStreamer created OpenGL context.
         * @param element the #GstElement running the query
         * @param display_ptr the resulting #GstGLDisplay
         * @param other_context_ptr the resulting #GstGLContext
         * @returns whether a #GstGLDisplay exists in @display_ptr
         */
        function gl_ensure_element_data(
            element: Gst.Element,
            display_ptr: GLDisplay,
            other_context_ptr: GLContext,
        ): [boolean, GLDisplay, GLContext];
        function gl_format_from_video_info(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat;
        function gl_format_is_supported(context: GLContext, format: GLFormat): boolean;
        function gl_format_n_components(gl_format: GLFormat): number;
        /**
         * Get the unsized format and type from `format` for usage in glReadPixels,
         * glTex{Sub}Image*, glTexImage* and similar functions.
         * @param format the sized internal #GstGLFormat
         */
        function gl_format_type_from_sized_gl_format(format: GLFormat): [GLFormat, number];
        function gl_format_type_n_bytes(format: number, type: number): number;
        /**
         * Retrieves the stored 4x4 affine transformation matrix stored in `meta` in
         * NDC coordinates. if `meta` is NULL, an identity matrix is returned.
         *
         * NDC is a left-handed coordinate system
         * - x - [-1, 1] - +ve X moves right
         * - y - [-1, 1] - +ve Y moves up
         * - z - [-1, 1] - +ve Z moves into
         * @param meta a #GstVideoAffineTransformationMeta
         */
        function gl_get_affine_transformation_meta_as_ndc(
            meta: GstVideo.VideoAffineTransformationMeta | null,
        ): number[];
        /**
         * Retrieve the size in bytes of a video plane of data with a certain alignment
         * @param info a #GstVideoInfo
         * @param align a #GstVideoAlignment or %NULL
         * @param plane plane number in @info to retrieve the data size of
         */
        function gl_get_plane_data_size(
            info: GstVideo.VideoInfo,
            align: GstVideo.VideoAlignment,
            plane: number,
        ): number;
        function gl_get_plane_start(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number;
        function gl_handle_context_query(
            element: Gst.Element,
            query: Gst.Query,
            display?: GLDisplay | null,
            context?: GLContext | null,
            other_context?: GLContext | null,
        ): boolean;
        /**
         * Helper function for implementing #GstElementClass.set_context() in
         * OpenGL capable elements.
         *
         * Retrieve's the #GstGLDisplay or #GstGLContext in `context` and places the
         * result in `display` or `other_context` respectively.
         * @param element a #GstElement
         * @param context a #GstContext
         * @returns whether the @display or @other_context could be set successfully
         */
        function gl_handle_set_context(element: Gst.Element, context: Gst.Context): [boolean, GLDisplay, GLContext];
        /**
         * Initializes the GL Base Texture allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLMemory operation.
         */
        function gl_memory_init_once(): void;
        function gl_memory_pbo_init_once(): void;
        /**
         * Multiplies two 4x4 matrices, `a` and `b,` and stores the result, a
         * 2-dimensional array of #gfloat, in `result`.
         * @param a a 2-dimensional 4x4 array of #gfloat
         * @param b another 2-dimensional 4x4 array of #gfloat
         */
        function gl_multiply_matrix4(a: number[], b: number[]): number[];
        function gl_platform_from_string(platform_s: string): GLPlatform;
        function gl_platform_to_string(platform: GLPlatform): string;
        /**
         * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
         * #GstPads in `element` of `direction` for the local OpenGL context used by
         * GStreamer elements.
         * @param element a #GstElement to query from
         * @param direction the #GstPadDirection to query
         * @param context_ptr location containing the current and/or resulting                      #GstGLContext
         * @returns whether @context_ptr contains a #GstGLContext
         */
        function gl_query_local_gl_context(
            element: Gst.Element,
            direction: Gst.PadDirection,
            context_ptr: GLContext,
        ): [boolean, GLContext];
        /**
         * Initializes the GL Base Texture allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLRenderbuffer operation.
         */
        function gl_renderbuffer_init_once(): void;
        /**
         * Set the 4x4 affine transformation matrix stored in `meta` from the
         * NDC coordinates in `matrix`.
         * @param meta a #GstVideoAffineTransformationMeta
         * @param matrix a 4x4 matrix
         */
        function gl_set_affine_transformation_meta_from_ndc(
            meta: GstVideo.VideoAffineTransformationMeta,
            matrix: number[],
        ): void;
        function gl_sized_gl_format_from_gl_format_type(context: GLContext, format: number, type: number): number;
        function gl_stereo_downmix_mode_get_type(): GObject.GType;
        /**
         * Given `swizzle,` produce `inversion` such that:
         *
         * `swizzle[``inversion[`i]] == identity[i] where:
         * - identity = {0, 1, 2,...}
         * - unset fields are marked by -1
         * @param swizzle input swizzle
         */
        function gl_swizzle_invert(swizzle: number[]): number[];
        function gl_sync_meta_api_get_type(): GObject.GType;
        function gl_sync_meta_get_info(): Gst.MetaInfo;
        function gl_texture_target_from_gl(target: number): GLTextureTarget;
        function gl_texture_target_from_string(str: string): GLTextureTarget;
        function gl_texture_target_to_buffer_pool_option(target: GLTextureTarget): string | null;
        function gl_texture_target_to_gl(target: GLTextureTarget): number;
        function gl_texture_target_to_string(target: GLTextureTarget): string | null;
        /**
         * See gst_gl_value_set_texture_target_from_mask() for what entails a mask
         * @param value an initialized #GValue of type G_TYPE_STRING
         * @returns the mask of #GstGLTextureTarget's in @value or     %GST_GL_TEXTURE_TARGET_NONE on failure
         */
        function gl_value_get_texture_target_mask(value: GObject.Value | any): GLTextureTarget;
        function gl_value_set_texture_target(value: GObject.Value | any, target: GLTextureTarget): boolean;
        /**
         * A mask is a bitwise OR of (1 << target) where target is a valid
         * #GstGLTextureTarget
         * @param value an uninitialized #GValue
         * @param target_mask a bitwise mask of #GstGLTextureTarget's
         * @returns whether the @target_mask could be set on @value
         */
        function gl_value_set_texture_target_from_mask(
            value: GObject.Value | any,
            target_mask: GLTextureTarget,
        ): boolean;
        function gl_version_to_glsl_version(gl_api: GLAPI, maj: number, min: number): GLSLVersion;
        /**
         * Calculates the swizzle indices for `video_format` and `gl_format` in order to
         * access a texture such that accessing a texel from a texture through the swizzle
         * index produces values in the order (R, G, B, A) or (Y, U, V, A).
         *
         * For multi-planer formats, the swizzle index uses the same component order (RGBA/YUVA)
         * and should be applied after combining multiple planes into a single rgba/yuva value.
         * e.g. sampling from a NV12 format would have Y from one texture and UV from
         * another texture into a (Y, U, V) value.  Add an Aplha component and then
         * perform swizzling.  Sampling from NV21 would produce (Y, V, U) which is then
         * swizzled to (Y, U, V).
         * @param video_format the #GstVideoFormat in use
         * @returns whether valid swizzle indices could be found
         */
        function gl_video_format_swizzle(video_format: GstVideo.VideoFormat): [boolean, number[]];
        function gl_window_error_quark(): GLib.Quark;
        function glsl_error_quark(): GLib.Quark;
        function glsl_profile_from_string(string: string): GLSLProfile;
        function glsl_profile_to_string(profile: GLSLProfile): string | null;
        /**
         * Note: this function first searches the first 1 kilobytes for a `#version`
         * preprocessor directive and then executes gst_glsl_version_profile_from_string().
         * @param s string to search for a valid `#version` string
         * @returns TRUE if a valid `#version` string was found, FALSE otherwise
         */
        function glsl_string_get_version_profile(s: string): [boolean, GLSLVersion, GLSLProfile];
        function glsl_version_from_string(string: string): GLSLVersion;
        /**
         * Note: this function expects either a `#version` GLSL preprocesser directive
         * or a valid GLSL version and/or profile.
         * @param string a valid GLSL `#version` string
         * @returns TRUE if a valid `#version` string was found, FALSE otherwise
         */
        function glsl_version_profile_from_string(string: string): [boolean, GLSLVersion, GLSLProfile];
        function glsl_version_profile_to_string(version: GLSLVersion, profile: GLSLProfile): string | null;
        function glsl_version_to_string(version: GLSLVersion): string | null;
        function is_gl_base_memory(mem: Gst.Memory): boolean;
        function is_gl_buffer(mem: Gst.Memory): boolean;
        function is_gl_memory(mem: Gst.Memory): boolean;
        function is_gl_memory_pbo(mem: Gst.Memory): boolean;
        function is_gl_renderbuffer(mem: Gst.Memory): boolean;
        interface GLAllocationParamsCopyFunc {
            (src: GLAllocationParams, dest: GLAllocationParams): void;
        }
        interface GLAllocationParamsFreeFunc {
            (params?: any | null): void;
        }
        interface GLAsyncDebugLogGetMessage {
            (): string;
        }
        interface GLBaseMemoryAllocatorAllocFunction {
            (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
        }
        interface GLBaseMemoryAllocatorCopyFunction {
            (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory | null;
        }
        interface GLBaseMemoryAllocatorCreateFunction {
            (mem: GLBaseMemory): boolean;
        }
        interface GLBaseMemoryAllocatorDestroyFunction {
            (mem: GLBaseMemory): void;
        }
        interface GLBaseMemoryAllocatorMapFunction {
            (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): any | null;
        }
        interface GLBaseMemoryAllocatorUnmapFunction {
            (mem: GLBaseMemory, info: Gst.MapInfo): void;
        }
        interface GLContextThreadFunc {
            (context: GLContext, data?: any | null): void;
        }
        interface GLFilterRenderFunc {
            (filter: GLFilter, in_tex: GLMemory): boolean;
        }
        interface GLFramebufferFunc {
            (stuff?: any | null): boolean;
        }
        interface GLWindowCB {
            (data?: any | null): void;
        }
        interface GLWindowResizeCB {
            (data: any | null, width: number, height: number): void;
        }

        export namespace GLAPI {
            export const $gtype: GObject.GType<GLAPI>;
        }

        enum GLAPI {
            /**
             * no API
             */
            NONE,
            /**
             * Desktop OpenGL up to and including 3.1.  The
             *                    compatibility profile when the OpenGL version is >= 3.2
             */
            OPENGL,
            /**
             * Desktop OpenGL >= 3.2 core profile
             */
            OPENGL3,
            /**
             * OpenGL ES 1.x
             */
            GLES1,
            /**
             * OpenGL ES 2.x and 3.x
             */
            GLES2,
            /**
             * Any OpenGL API
             */
            ANY,
        }

        export namespace GLBaseMemoryTransfer {
            export const $gtype: GObject.GType<GLBaseMemoryTransfer>;
        }

        enum GLBaseMemoryTransfer {
            /**
             * the texture needs downloading
             *                                             to the data pointer
             */
            DOWNLOAD,
            /**
             * the data pointer needs uploading
             *                                             to the texture
             */
            UPLOAD,
        }

        export namespace GLConfigSurfaceType {
            export const $gtype: GObject.GType<GLConfigSurfaceType>;
        }

        enum GLConfigSurfaceType {
            /**
             * none
             */
            NONE,
            /**
             * window
             */
            WINDOW,
            /**
             * pbuffer
             */
            PBUFFER,
            /**
             * pixmap
             */
            PIXMAP,
        }

        export namespace GLDisplayType {
            export const $gtype: GObject.GType<GLDisplayType>;
        }

        enum GLDisplayType {
            /**
             * no display type
             */
            NONE,
            /**
             * X11 display
             */
            X11,
            /**
             * Wayland display
             */
            WAYLAND,
            /**
             * Cocoa display
             */
            COCOA,
            /**
             * Win32 display
             */
            WIN32,
            /**
             * Dispmanx display
             */
            DISPMANX,
            /**
             * EGL display
             */
            EGL,
            /**
             * Vivante Framebuffer display
             */
            VIV_FB,
            /**
             * Mesa3D GBM display
             */
            GBM,
            /**
             * EGLDevice display.
             */
            EGL_DEVICE,
            /**
             * EAGL display.
             */
            EAGL,
            /**
             * WinRT display.
             */
            WINRT,
            /**
             * Android display.
             */
            ANDROID,
            /**
             * Mesa3D surfaceless display using the EGL_PLATFORM_SURFACELESS_MESA
             * extension.
             */
            EGL_SURFACELESS,
            /**
             * any display type
             */
            ANY,
        }

        export namespace GLPlatform {
            export const $gtype: GObject.GType<GLPlatform>;
        }

        enum GLPlatform {
            /**
             * no platform
             */
            NONE,
            /**
             * the EGL platform used primarily with the X11, wayland
             *                      and android window systems as well as on embedded Linux
             */
            EGL,
            /**
             * the GLX platform used primarily with the X11 window system
             */
            GLX,
            /**
             * the WGL platform used primarily on Windows
             */
            WGL,
            /**
             * the CGL platform used primarily on OS X
             */
            CGL,
            /**
             * the EAGL platform used primarily on iOS
             */
            EAGL,
            /**
             * any OpenGL platform
             */
            ANY,
        }
        /**
         * GLSL profiles
         */

        /**
         * GLSL profiles
         */
        export namespace GLSLProfile {
            export const $gtype: GObject.GType<GLSLProfile>;
        }

        enum GLSLProfile {
            /**
             * no profile supported/available
             */
            NONE,
            /**
             * OpenGL|ES profile
             */
            ES,
            /**
             * OpenGL core profile
             */
            CORE,
            /**
             * OpenGL compatibility profile
             */
            COMPATIBILITY,
            /**
             * any OpenGL/OpenGL|ES profile
             */
            ANY,
        }
        module GLBaseFilter {
            // Constructor properties interface

            interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {
                context: GLContext;
            }
        }

        /**
         * #GstGLBaseFilter handles the nitty gritty details of retrieving an OpenGL
         * context.  It also provided some wrappers around #GstBaseTransform's
         * `start()`, `stop()` and `set_caps()` virtual methods that ensure an OpenGL
         * context is available and current in the calling thread.
         */
        class GLBaseFilter extends GstBase.BaseTransform {
            static $gtype: GObject.GType<GLBaseFilter>;

            // Properties

            get context(): GLContext;

            // Fields

            display: GLDisplay;

            // Constructors

            constructor(properties?: Partial<GLBaseFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * called in the GL thread when caps are set on `filter`.
             *               Note: this will also be called when changing OpenGL contexts
             *               where #GstBaseTransform::set_caps may not.
             * @param incaps
             * @param outcaps
             */
            vfunc_gl_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
            /**
             * called in the GL thread to setup the element GL state.
             */
            vfunc_gl_start(): boolean;
            /**
             * called in the GL thread to setup the element GL state.
             */
            vfunc_gl_stop(): void;

            // Methods

            find_gl_context(): boolean;
            get_gl_context(): GLContext | null;
        }

        module GLBaseMemoryAllocator {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
        }

        /**
         * Opaque #GstGLBaseMemoryAllocator struct
         */
        abstract class GLBaseMemoryAllocator extends Gst.Allocator {
            static $gtype: GObject.GType<GLBaseMemoryAllocator>;

            // Constructors

            constructor(properties?: Partial<GLBaseMemoryAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * a #GstGLBaseMemoryAllocatorAllocFunction
             * @param params the #GstGLAllocationParams to allocate the memory with
             */
            vfunc_alloc(params: GLAllocationParams): GLBaseMemory | null;
            // Conflicted with Gst.Allocator.vfunc_alloc
            vfunc_alloc(...args: never[]): any;
        }

        module GLBaseMixer {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoAggregator.ConstructorProps {
                context: GLContext;
            }
        }

        /**
         * #GstGLBaseMixer handles the nitty gritty details of retrieving an OpenGL
         * context.  It provides some virtual methods to know when the OpenGL context
         * is available and is not available within this element.
         */
        abstract class GLBaseMixer extends GstVideo.VideoAggregator {
            static $gtype: GObject.GType<GLBaseMixer>;

            // Properties

            /**
             * The #GstGLContext in use by this #GstGLBaseMixer
             */
            get context(): GLContext;

            // Fields

            display: GLDisplay;

            // Constructors

            constructor(properties?: Partial<GLBaseMixer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * called in the GL thread to setup the element GL state.
             */
            vfunc_gl_start(): boolean;
            /**
             * called in the GL thread to setup the element GL state.
             */
            vfunc_gl_stop(): void;

            // Methods

            get_gl_context(): GLContext | null;
        }

        module GLBaseMixerPad {
            // Constructor properties interface

            interface ConstructorProps extends GstVideo.VideoAggregatorPad.ConstructorProps {}
        }

        class GLBaseMixerPad extends GstVideo.VideoAggregatorPad {
            static $gtype: GObject.GType<GLBaseMixerPad>;

            // Constructors

            constructor(properties?: Partial<GLBaseMixerPad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module GLBaseSrc {
            // Constructor properties interface

            interface ConstructorProps extends GstBase.PushSrc.ConstructorProps {
                timestamp_offset: number;
                timestampOffset: number;
            }
        }

        /**
         * #GstGLBaseSrc handles the nitty gritty details of retrieving an OpenGL
         * context. It also provided some wrappers around #GstBaseSrc's `start()` and
         * `stop()` virtual methods that ensure an OpenGL context is available and
         * current in the calling thread.
         */
        abstract class GLBaseSrc extends GstBase.PushSrc {
            static $gtype: GObject.GType<GLBaseSrc>;

            // Properties

            get timestamp_offset(): number;
            set timestamp_offset(val: number);
            get timestampOffset(): number;
            set timestampOffset(val: number);

            // Fields

            display: GLDisplay;
            context: GLContext;
            running_time: Gst.ClockTime;

            // Constructors

            constructor(properties?: Partial<GLBaseSrc.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * called in the GL thread to fill the current video texture.
             * @param mem
             */
            vfunc_fill_gl_memory(mem: GLMemory): boolean;
            /**
             * called in the GL thread to setup the element GL state.
             */
            vfunc_gl_start(): boolean;
            /**
             * called in the GL thread to setup the element GL state.
             */
            vfunc_gl_stop(): void;
        }

        module GLBufferAllocator {
            // Constructor properties interface

            interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
        }

        /**
         * Opaque #GstGLBufferAllocator struct
         */
        class GLBufferAllocator extends GLBaseMemoryAllocator {
            static $gtype: GObject.GType<GLBufferAllocator>;

            // Constructors

            constructor(properties?: Partial<GLBufferAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module GLBufferPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
        }

        /**
         * a #GstGLBufferPool is an object that allocates buffers with #GstGLBaseMemory
         *
         * A #GstGLBufferPool is created with gst_gl_buffer_pool_new()
         *
         * #GstGLBufferPool implements the VideoMeta buffer pool option
         * %GST_BUFFER_POOL_OPTION_VIDEO_META, the VideoAligment buffer pool option
         * %GST_BUFFER_POOL_OPTION_VIDEO_ALIGNMENT as well as the OpenGL specific
         * %GST_BUFFER_POOL_OPTION_GL_SYNC_META buffer pool option.
         */
        class GLBufferPool extends Gst.BufferPool {
            static $gtype: GObject.GType<GLBufferPool>;

            // Fields

            bufferpool: Gst.BufferPool;
            context: GLContext;

            // Constructors

            constructor(properties?: Partial<GLBufferPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext): GLBufferPool;
            // Conflicted with Gst.BufferPool.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * The returned #GstGLAllocationParams will by %NULL before the first successful
             * call to gst_buffer_pool_set_config().  Subsequent successful calls to
             * gst_buffer_pool_set_config() will cause this function to return a new
             * #GstGLAllocationParams which may or may not contain the same information.
             * @returns a copy of the #GstGLAllocationParams being used by the @pool
             */
            get_gl_allocation_params(): GLAllocationParams | null;
        }

        module GLColorConvert {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * #GstGLColorConvert is an object that converts between color spaces and/or
         * formats using OpenGL Shaders.
         *
         * A #GstGLColorConvert can be created with gst_gl_color_convert_new(), the
         * configuration negotiated with gst_gl_color_convert_transform_caps() and the
         * conversion performed with gst_gl_color_convert_perform().
         *
         * The glcolorconvertelement provides a GStreamer element that uses
         * #GstGLColorConvert to convert between video formats and color spaces.
         */
        class GLColorConvert extends Gst.Object {
            static $gtype: GObject.GType<GLColorConvert>;

            // Constructors

            constructor(properties?: Partial<GLColorConvert.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext): GLColorConvert;

            // Static methods

            /**
             * Provides an implementation of #GstBaseTransformClass.fixate_caps()
             * @param context a #GstGLContext to use for transforming @caps
             * @param direction a #GstPadDirection
             * @param caps the #GstCaps of @direction
             * @param other the #GstCaps to fixate
             */
            static fixate_caps(
                context: GLContext,
                direction: Gst.PadDirection,
                caps: Gst.Caps,
                other: Gst.Caps,
            ): Gst.Caps;
            static swizzle_shader_string(context: GLContext): string;
            /**
             * Provides an implementation of #GstBaseTransformClass.transform_caps()
             * @param context a #GstGLContext to use for transforming @caps
             * @param direction a #GstPadDirection
             * @param caps the #GstCaps to transform
             * @param filter a set of filter #GstCaps
             */
            static transform_caps(
                context: GLContext,
                direction: Gst.PadDirection,
                caps: Gst.Caps,
                filter: Gst.Caps,
            ): Gst.Caps;
            /**
             * The returned glsl function has declaration:
             *
             * `vec3 yuv_to_rgb (vec3 rgb, vec3 offset, vec3 ycoeff, vec3 ucoeff, vec3 vcoeff);`
             *
             * The Y component is placed in the 0th index of the returned value, The U component in the
             * 1st, and the V component in the 2nd.  offset, ycoeff, ucoeff, and vcoeff are the
             * specific coefficients and offset used for the conversion.
             * @param context a #GstGLContext
             */
            static yuv_to_rgb_shader_string(context: GLContext): string;

            // Methods

            /**
             * Provides an implementation of #GstBaseTransformClass.decide_allocation()
             * @param query a completed ALLOCATION #GstQuery
             * @returns whether the allocation parameters were successfully chosen
             */
            decide_allocation(query: Gst.Query): boolean;
            /**
             * Converts the data contained by `inbuf` using the formats specified by the
             * #GstCaps passed to gst_gl_color_convert_set_caps()
             * @param inbuf the #GstGLMemory filled #GstBuffer to convert
             * @returns a converted #GstBuffer or %NULL
             */
            perform(inbuf: Gst.Buffer): Gst.Buffer | null;
            /**
             * Initializes `convert` with the information required for conversion.
             * @param in_caps input #GstCaps
             * @param out_caps output #GstCaps
             */
            set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
        }

        module GLContext {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * #GstGLContext wraps an OpenGL context object in a uniform API.  As a result
         * of the limitation on OpenGL context, this object is not thread safe unless
         * specified and must only be activated in a single thread.
         *
         * Environment variables:
         * - `GST_GL_API`: select which OpenGL API to create and OpenGL context for.
         *                 Depending on the platform, the available values are
         *                 'opengl', 'opengl3' (core profile), and 'gles2'.  See the
         *                 the #GstGLAPI enumeration for more details.
         * - `GST_GL_PLATFORM`: select which OpenGL platform to create an OpenGL
         *                      context with.  Depending on the platform and the
         *                      dependencies available build-time, the available values
         *                      are, 'glx', 'egl', 'cgl', 'wgl', and 'eagl'
         * - `GST_GL_CONFIG`: select the configuration used for creating the OpenGL
         *                    context and OpenGL surface.  Written out as a GstStructure
         *                    that has been serialized to string.  e.g.
         *                    `GST_GL_CONFIG="gst-gl-context-config,red-size=8,green-size=8,blue-size=8,alpha-size=8,depth-size=16"`.
         *                    Not all platforms will support the same level of
         *                    functionality.
         */
        abstract class GLContext extends Gst.Object {
            static $gtype: GObject.GType<GLContext>;

            // Constructors

            constructor(properties?: Partial<GLContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](display: GLDisplay): GLContext;

            static new_wrapped(
                display: GLDisplay,
                handle: never,
                context_type: GLPlatform,
                available_apis: GLAPI,
            ): GLContext;

            // Static methods

            /**
             * A default implementation of the various GetProcAddress functions that looks
             * for `name` in the OpenGL shared libraries or in the current process.
             *
             * See also: gst_gl_context_get_proc_address()
             * @param gl_api a #GstGLAPI
             * @param name then function to get the address of
             */
            static default_get_proc_address(gl_api: GLAPI, name: string): any | null;
            /**
             * See also gst_gl_context_activate().
             */
            static get_current(): GLContext | null;
            /**
             * If an error occurs, `major` and `minor` are not modified and %GST_GL_API_NONE is
             * returned.
             * @param platform the #GstGLPlatform to retrieve the API for
             */
            static get_current_gl_api(platform: GLPlatform): [GLAPI, number, number];
            static get_current_gl_context(context_type: GLPlatform): never | null;
            /**
             * Attempts to use the `context_type` specific GetProcAddress implementations
             * to retrieve `name`.
             *
             * See also gst_gl_context_get_proc_address().
             * @param context_type a #GstGLPlatform
             * @param gl_api a #GstGLAPI
             * @param name the name of the function to retrieve
             */
            static get_proc_address_with_platform(context_type: GLPlatform, gl_api: GLAPI, name: string): any | null;

            // Virtual methods

            /**
             * (De)activate the OpenGL context represented by this `context`.
             *
             * In OpenGL terms, calls eglMakeCurrent or similar with this context and the
             * currently set window.  See gst_gl_context_set_window() for details.
             * @param activate %TRUE to activate, %FALSE to deactivate
             */
            vfunc_activate(activate: boolean): boolean;
            /**
             * Check for an OpenGL `feature` being supported.
             *
             * Note: Most features require that the context be created before it is
             * possible to determine their existence and so will fail if that is not the
             * case.
             * @param feature a platform specific feature
             */
            vfunc_check_feature(feature: string): boolean;
            /**
             * choose a format for the framebuffer
             */
            vfunc_choose_format(): boolean;
            /**
             * create the OpenGL context
             * @param gl_api
             * @param other_context
             */
            vfunc_create_context(gl_api: GLAPI, other_context: GLContext): boolean;
            /**
             * destroy the OpenGL context
             */
            vfunc_destroy_context(): void;
            /**
             * Retrieve the OpenGL configuration for this context.  The context must
             * have been successfully created for this function to return a valid value.
             *
             * Not all implementations currently support retrieving the config and will
             * return %NULL when not supported.
             */
            vfunc_get_config(): Gst.Structure | null;
            /**
             * Get the currently enabled OpenGL api.
             *
             * The currently available API may be limited by the #GstGLDisplay in use and/or
             * the #GstGLWindow chosen.
             */
            vfunc_get_gl_api(): GLAPI;
            /**
             * Gets the backing OpenGL context used by `context`.
             */
            vfunc_get_gl_context(): never;
            /**
             * Gets the OpenGL platform that used by `context`.
             */
            vfunc_get_gl_platform(): GLPlatform;
            /**
             * Get the version of the OpenGL platform (GLX, EGL, etc) used.  Only valid
             * after a call to gst_gl_context_create().
             */
            vfunc_get_gl_platform_version(): [number, number];
            /**
             * Set the OpenGL configuration for this context.  The context must not
             * have been created for this function to succeed.  Setting a %NULL
             * `config` has the affect of removing any specific configuration request.
             *
             * Not all implementations currently support retrieving the config and this
             * function will return FALSE when not supported.
             *
             * Note that calling this function may cause a subsequent
             * gst_gl_context_create() to fail if `config` could not be matched with
             * the platform-specific configuration.
             *
             * Note that the actual config used may be differ from the requested values.
             * @param gl_config a configuration structure for             configuring the OpenGL context
             */
            vfunc_request_config(gl_config?: Gst.Structure | null): boolean;
            /**
             * Swap the front and back buffers on the window attached to `context`.
             * This will display the frame on the next refresh cycle.
             */
            vfunc_swap_buffers(): void;

            // Methods

            /**
             * (De)activate the OpenGL context represented by this `context`.
             *
             * In OpenGL terms, calls eglMakeCurrent or similar with this context and the
             * currently set window.  See gst_gl_context_set_window() for details.
             * @param activate %TRUE to activate, %FALSE to deactivate
             * @returns Whether the activation succeeded
             */
            activate(activate: boolean): boolean;
            /**
             * Note: This will always fail for two wrapped #GstGLContext's
             * @param other_context another #GstGLContext
             * @returns whether @context and @other_context are able to share OpenGL      resources.
             */
            can_share(other_context: GLContext): boolean;
            /**
             * Check for an OpenGL `feature` being supported.
             *
             * Note: Most features require that the context be created before it is
             * possible to determine their existence and so will fail if that is not the
             * case.
             * @param feature a platform specific feature
             * @returns Whether @feature is supported by @context
             */
            check_feature(feature: string): boolean;
            /**
             * Must be called with `context` current.
             * @param fbo_target the GL value of the framebuffer target, GL_FRAMEBUFFER,              GL_READ_FRAMEBUFFER, GL_DRAW_FRAMEBUFFER
             * @returns whether whether the current framebuffer is complete
             */
            check_framebuffer_status(fbo_target: number): boolean;
            check_gl_version(api: GLAPI, maj: number, min: number): boolean;
            /**
             * Unbind the current framebuffer
             */
            clear_framebuffer(): void;
            /**
             * Clear's the currently set shader from the GL state machine.
             *
             * Note: must be called in the GL thread.
             */
            clear_shader(): void;
            /**
             * Creates an OpenGL context with the specified `other_context` as a context
             * to share shareable OpenGL objects with.  See the OpenGL specification for
             * what is shared between OpenGL contexts.
             *
             * Since 1.20, the configuration can be overriden with the environment variable
             * `GST_GL_CONFIG` which is a stringified #GstStructure as would be returned
             * from gst_gl_context_get_config().  If `GST_GL_CONFIG` is not set, then the
             * config will be chosen from `other_context` by calling
             * gst_gl_context_get_config() on `other_context`.  Otherwise, a default
             * configuration is used.
             *
             * Calling gst_gl_context_request_config()) before calling
             * gst_gl_context_create() will override the config from `other_context` but
             * will not override the `GST_GL_CONFIG` environment variable.
             *
             * If an error occurs, and `error` is not %NULL, then `error` will contain
             * details of the error and %FALSE will be returned.
             *
             * Should only be called once.
             * @param other_context a #GstGLContext to share OpenGL objects with
             * @returns whether the context could successfully be created
             */
            create(other_context?: GLContext | null): boolean;
            /**
             * Destroys an OpenGL context.
             *
             * Should only be called after gst_gl_context_create() has been successfully
             * called for this context.
             */
            destroy(): void;
            /**
             * Fills `context'`s info (version, extensions, vtable, etc) from the GL
             * context in the current thread.  Typically used with wrapped contexts to
             * allow wrapped contexts to be used as regular #GstGLContext's.
             */
            fill_info(): boolean;
            /**
             * Retrieve the OpenGL configuration for this context.  The context must
             * have been successfully created for this function to return a valid value.
             *
             * Not all implementations currently support retrieving the config and will
             * return %NULL when not supported.
             * @returns the configuration chosen for this OpenGL context.
             */
            get_config(): Gst.Structure | null;
            get_display(): GLDisplay;
            /**
             * Get the currently enabled OpenGL api.
             *
             * The currently available API may be limited by the #GstGLDisplay in use and/or
             * the #GstGLWindow chosen.
             * @returns the available OpenGL api
             */
            get_gl_api(): GLAPI;
            /**
             * Gets the backing OpenGL context used by `context`.
             * @returns The platform specific backing OpenGL context
             */
            get_gl_context(): never;
            /**
             * Gets the OpenGL platform that used by `context`.
             * @returns The platform specific backing OpenGL context
             */
            get_gl_platform(): GLPlatform;
            /**
             * Get the version of the OpenGL platform (GLX, EGL, etc) used.  Only valid
             * after a call to gst_gl_context_create().
             */
            get_gl_platform_version(): [number, number];
            /**
             * Returns the OpenGL version implemented by `context`.  See
             * gst_gl_context_get_gl_api() for retrieving the OpenGL api implemented by
             * `context`.
             */
            get_gl_version(): [number, number];
            /**
             * Get a function pointer to a specified opengl function, `name`.  If the the
             * specific function does not exist, NULL is returned instead.
             *
             * Platform specific functions (names starting 'egl', 'glX', 'wgl', etc) can also
             * be retrieved using this method.
             *
             * Note: This function may return valid function pointers that may not be valid
             * to call in `context`.  The caller is responsible for ensuring that the
             * returned function is a valid function to call in `context` by either checking
             * the OpenGL API and version or for an appropriate OpenGL extension.
             *
             * Note: On success, you need to cast the returned function pointer to the
             * correct type to be able to call it correctly.  On 32-bit Windows, this will
             * include the `GSTGLAPI` identifier to use the correct calling convention.
             * e.g.
             *
             *
             * ```c
             * void (GSTGLAPI *PFN_glGetIntegerv) (GLenum name, GLint * ret)
             * ```
             *
             * @param name an opengl function name
             * @returns a function pointer or %NULL
             */
            get_proc_address(name: string): any | null;
            get_thread(): GLib.Thread | null;
            get_window(): GLWindow | null;
            is_shared(): boolean;
            /**
             * Set the OpenGL configuration for this context.  The context must not
             * have been created for this function to succeed.  Setting a %NULL
             * `config` has the affect of removing any specific configuration request.
             *
             * Not all implementations currently support retrieving the config and this
             * function will return FALSE when not supported.
             *
             * Note that calling this function may cause a subsequent
             * gst_gl_context_create() to fail if `config` could not be matched with
             * the platform-specific configuration.
             *
             * Note that the actual config used may be differ from the requested values.
             * @param gl_config a configuration structure for             configuring the OpenGL context
             * @returns whether @gl_config could be successfully set on @context
             */
            request_config(gl_config?: Gst.Structure | null): boolean;
            /**
             * Will internally set `context` as shared with `share`
             * @param share another #GstGLContext
             */
            set_shared_with(share: GLContext): void;
            /**
             * Set's the current window on `context` to `window`.  The window can only be
             * changed before gst_gl_context_create() has been called and the `window` is not
             * already running.
             * @param window a #GstGLWindow
             * @returns Whether the window was successfully updated
             */
            set_window(window: GLWindow): boolean;
            supports_glsl_profile_version(version: GLSLVersion, profile: GLSLProfile): boolean;
            supports_precision(version: GLSLVersion, profile: GLSLProfile): boolean;
            supports_precision_highp(version: GLSLVersion, profile: GLSLProfile): boolean;
            /**
             * Swap the front and back buffers on the window attached to `context`.
             * This will display the frame on the next refresh cycle.
             */
            swap_buffers(): void;
            /**
             * Execute `func` in the OpenGL thread of `context` with `data`
             *
             * MT-safe
             * @param func a #GstGLContextThreadFunc
             */
            thread_add(func: GLContextThreadFunc): void;
        }

        module GLDisplay {
            // Signal callback interfaces

            interface CreateContext {
                (context: GLContext): GLContext | null;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * #GstGLDisplay represents a connection to the underlying windowing system.
         * Elements are required to make use of #GstContext to share and propagate
         * a #GstGLDisplay.
         *
         * There are a number of environment variables that influence the choice of
         * platform and window system specific functionality.
         * - GST_GL_WINDOW influences the window system to use.  Common values are
         *   'x11', 'wayland', 'surfaceless', 'win32' or 'cocoa'.
         * - GST_GL_PLATFORM influences the OpenGL platform to use.  Common values are
         *   'egl', 'glx', 'wgl' or 'cgl'.
         * - GST_GL_API influences the OpenGL API requested by the OpenGL platform.
         *   Common values are 'opengl', 'opengl3' and 'gles2'.
         *
         * > Certain window systems require a special function to be called to
         * > initialize threading support.  As this GStreamer GL library does not preclude
         * > concurrent access to the windowing system, it is strongly advised that
         * > applications ensure that threading support has been initialized before any
         * > other toolkit/library functionality is accessed.  Failure to do so could
         * > result in sudden application abortion during execution.  The most notably
         * > example of such a function is X11's XInitThreads\().
         */
        class GLDisplay extends Gst.Object {
            static $gtype: GObject.GType<GLDisplay>;

            // Constructors

            constructor(properties?: Partial<GLDisplay.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GLDisplay;

            static new_with_type(type: GLDisplayType): GLDisplay;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'create-context',
                callback: (_source: this, context: GLContext) => GLContext | null,
            ): number;
            connect_after(
                signal: 'create-context',
                callback: (_source: this, context: GLContext) => GLContext | null,
            ): number;
            emit(signal: 'create-context', context: GLContext): void;

            // Virtual methods

            vfunc_create_window(): GLWindow | null;
            vfunc_get_handle(): never;

            // Methods

            add_context(context: GLContext): boolean;
            /**
             * It requires the display's object lock to be held.
             * @param other_context other #GstGLContext to share resources with.
             * @returns whether a new context could be created.
             */
            create_context(other_context: GLContext | null): [boolean, GLContext];
            create_window(): GLWindow | null;
            /**
             * Ensures that the display has a valid GL context for the current thread. If
             * `context` already contains a valid context, this does nothing.
             * @param other_context other #GstGLContext to share resources with.
             * @param context the resulting #GstGLContext
             * @returns wether @context contains a valid context.
             */
            ensure_context(other_context?: GLContext | null, context?: GLContext | null): [boolean, GLContext | null];
            /**
             * limit the use of OpenGL to the requested `gl_api`.  This is intended to allow
             * application and elements to request a specific set of OpenGL API's based on
             * what they support.  See gst_gl_context_get_gl_api() for the retrieving the
             * API supported by a #GstGLContext.
             * @param gl_api a #GstGLAPI to filter with
             */
            filter_gl_api(gl_api: GLAPI): void;
            /**
             * Execute `compare_func` over the list of windows stored by `display`.  The
             * first argument to `compare_func` is the #GstGLWindow being checked and the
             * second argument is `data`.
             * @param data some data to pass to @compare_func
             * @param compare_func a comparison function to run
             * @returns The first #GstGLWindow that causes a match          from @compare_func
             */
            find_window(data: any | null, compare_func: GLib.CompareFunc): GLWindow | null;
            /**
             * see gst_gl_display_filter_gl_api() for what the returned value represents
             * @returns the #GstGLAPI configured for @display
             */
            get_gl_api(): GLAPI;
            get_gl_api_unlocked(): GLAPI;
            get_gl_context_for_thread(thread: GLib.Thread): GLContext | null;
            get_handle(): never;
            get_handle_type(): GLDisplayType;
            /**
             * Must be called with the object lock held.
             * @param context the #GstGLContext to remove
             */
            remove_context(context: GLContext): void;
            remove_window(window: GLWindow): boolean;
            /**
             * Execute `compare_func` over the list of windows stored by `display`.  The
             * first argument to `compare_func` is the #GstGLWindow being checked and the
             * second argument is `data`.
             * @param data some data to pass to @compare_func
             * @param compare_func a comparison function to run
             * @returns The first #GstGLWindow that causes a match          from @compare_func
             */
            retrieve_window(data: any | null, compare_func: GLib.CompareFunc): GLWindow | null;
        }

        module GLFilter {
            // Constructor properties interface

            interface ConstructorProps extends GLBaseFilter.ConstructorProps {}
        }

        /**
         * #GstGLFilter helps to implement simple OpenGL filter elements taking a
         * single input and producing a single output with a #GstGLFramebuffer
         */
        class GLFilter extends GLBaseFilter {
            static $gtype: GObject.GType<GLFilter>;

            // Fields

            in_texture_target: GLTextureTarget;
            out_texture_target: GLTextureTarget;
            fbo: GLFramebuffer;

            // Constructors

            constructor(properties?: Partial<GLFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static add_rgba_pad_templates(klass: typeof GLFilter): void;

            // Virtual methods

            /**
             * perform operations on the input and output buffers.  In general,
             *          you should avoid using this method if at all possible. One valid
             *          use-case for using this is keeping previous buffers for future calculations.
             *          Note: If `filter` exists, then `filter_texture` is not run
             * @param inbuf
             * @param outbuf
             */
            vfunc_filter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean;
            /**
             * Calls filter_texture vfunc with correctly mapped #GstGLMemorys
             * @param input an input buffer
             * @param output an output buffer
             */
            vfunc_filter_texture(input: GLMemory, output: GLMemory): boolean;
            /**
             * perform initialization when the Framebuffer object is created
             */
            vfunc_init_fbo(): boolean;
            /**
             * mirror from #GstBaseTransform
             * @param incaps
             * @param outcaps
             */
            vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
            /**
             * Perform sub-class specific modifications of the
             *   caps to be processed between upload on input and before download for output.
             * @param direction
             * @param caps
             * @param filter_caps
             */
            vfunc_transform_internal_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps): Gst.Caps;

            // Methods

            /**
             * Render a fullscreen quad using the current GL state.  The only GL state this
             * modifies is the necessary vertex/index buffers and, if necessary, a
             * Vertex Array Object for drawing a fullscreen quad.  Framebuffer state,
             * any shaders, viewport state, etc must be setup by the caller.
             */
            draw_fullscreen_quad(): void;
            /**
             * Calls filter_texture vfunc with correctly mapped #GstGLMemorys
             * @param input an input buffer
             * @param output an output buffer
             * @returns whether the transformation succeeded
             */
            filter_texture(input: Gst.Buffer, output: Gst.Buffer): boolean;
            /**
             * Transforms `input` into `output` using `func` on through FBO.
             * @param input the input texture
             * @param output the output texture
             * @param func the function to transform @input into @output. called with @data
             * @returns the return value of @func
             */
            render_to_target(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean;
            /**
             * Transforms `input` into `output` using `shader` with a FBO.
             *
             * See also: gst_gl_filter_render_to_target()
             * @param input the input texture
             * @param output the output texture
             * @param shader the shader to use.
             */
            render_to_target_with_shader(input: GLMemory, output: GLMemory, shader: GLShader): void;
        }

        module GLFramebuffer {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * A #GstGLFramebuffer represents and holds an OpenGL framebuffer object with
         * it's associated attachments.
         *
         * A #GstGLFramebuffer can be created with gst_gl_framebuffer_new() or
         * gst_gl_framebuffer_new_with_default_depth() and bound with
         * gst_gl_framebuffer_bind().  Other resources can be bound with
         * gst_gl_framebuffer_attach()
         *
         * Note: OpenGL framebuffers are not shareable resources so cannot be used
         * between multiple OpenGL contexts.
         */
        class GLFramebuffer extends Gst.Object {
            static $gtype: GObject.GType<GLFramebuffer>;

            // Constructors

            constructor(properties?: Partial<GLFramebuffer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext): GLFramebuffer;

            static new_with_default_depth(context: GLContext, width: number, height: number): GLFramebuffer;

            // Methods

            /**
             * attach `mem` to `attachment_point`
             *
             * Must be called with the same OpenGL context current that `fb` was created
             * with.
             * @param attachment_point the OpenGL attachment point to bind @mem to
             * @param mem the memory object to bind to @attachment_point
             */
            attach(attachment_point: number, mem: GLBaseMemory): void;
            /**
             * Bind `fb` into the current thread
             *
             * Must be called with the same OpenGL context current that `fb` was created
             * with.
             */
            bind(): void;
            /**
             * Perform the steps necessary to have the output of a glDraw* command in
             * `func` update the contents of `mem`.
             *
             * Note: this function does not map `mem` for writing with OpenGL and that must
             * be done manually by the caller using any of the mapping functions such as
             * gst_memory_map() with the map flags %GST_MAP_WRITE | %GST_MAP_GL.
             *
             * Must be called with the same OpenGL context current that `fb` was created
             * with.
             * @param mem the #GstGLMemory to draw to
             * @param func the function to run
             * @returns the result of executing @func
             */
            draw_to_texture(mem: GLMemory, func: GLFramebufferFunc): boolean;
            /**
             * Retrieve the effective dimensions from the current attachments attached to
             * `fb`.
             */
            get_effective_dimensions(): [number, number];
            get_id(): number;
        }

        module GLMemoryAllocator {
            // Constructor properties interface

            interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
        }

        /**
         * Opaque #GstGLMemoryAllocator struct
         */
        class GLMemoryAllocator extends GLBaseMemoryAllocator {
            static $gtype: GObject.GType<GLMemoryAllocator>;

            // Constructors

            constructor(properties?: Partial<GLMemoryAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static get_default(context: GLContext): GLMemoryAllocator;
        }

        module GLMemoryPBOAllocator {
            // Constructor properties interface

            interface ConstructorProps extends GLMemoryAllocator.ConstructorProps {}
        }

        /**
         * Opaque #GstGLMemoryPBOAllocator struct
         */
        class GLMemoryPBOAllocator extends GLMemoryAllocator {
            static $gtype: GObject.GType<GLMemoryPBOAllocator>;

            // Constructors

            constructor(properties?: Partial<GLMemoryPBOAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module GLMixer {
            // Constructor properties interface

            interface ConstructorProps extends GLBaseMixer.ConstructorProps {}
        }

        /**
         * #GstGLMixer helps implement an element that operates on RGBA textures.
         */
        abstract class GLMixer extends GLBaseMixer {
            static $gtype: GObject.GType<GLMixer>;

            // Constructors

            constructor(properties?: Partial<GLMixer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static add_rgba_pad_templates(): void;

            // Virtual methods

            /**
             * Perform operations on the input buffers to produce an
             * output buffer.
             * @param outbuf
             */
            vfunc_process_buffers(outbuf: Gst.Buffer): boolean;
            /**
             * Perform processing required and call #GstGLMixerClass::process_textures().
             * Intended for use within implementations of
             * #GstGLMixerClass::process_buffers().
             * @param out_tex
             */
            vfunc_process_textures(out_tex: GLMemory): boolean;

            // Methods

            get_framebuffer(): GLFramebuffer;
            /**
             * Perform processing required and call #GstGLMixerClass::process_textures().
             * Intended for use within implementations of
             * #GstGLMixerClass::process_buffers().
             * @param outbuf output @GstBuffer
             * @returns whether processing of textures succeeded
             */
            process_textures(outbuf: Gst.Buffer): boolean;
        }

        module GLMixerPad {
            // Constructor properties interface

            interface ConstructorProps extends GLBaseMixerPad.ConstructorProps {}
        }

        class GLMixerPad extends GLBaseMixerPad {
            static $gtype: GObject.GType<GLMixerPad>;

            // Fields

            current_texture: number;

            // Constructors

            constructor(properties?: Partial<GLMixerPad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module GLOverlayCompositor {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                yinvert: boolean;
            }
        }

        /**
         * Opaque #GstGLOverlayCompositor object
         */
        class GLOverlayCompositor extends Gst.Object {
            static $gtype: GObject.GType<GLOverlayCompositor>;

            // Properties

            get yinvert(): boolean;
            set yinvert(val: boolean);

            // Constructors

            constructor(properties?: Partial<GLOverlayCompositor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext): GLOverlayCompositor;

            // Static methods

            static add_caps(caps: Gst.Caps): Gst.Caps;

            // Methods

            draw_overlays(): void;
            free_overlays(): void;
            upload_overlays(buf: Gst.Buffer): void;
        }

        module GLRenderbufferAllocator {
            // Constructor properties interface

            interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
        }

        /**
         * Opaque #GstGLRenderbufferAllocator struct
         */
        class GLRenderbufferAllocator extends GLBaseMemoryAllocator {
            static $gtype: GObject.GType<GLRenderbufferAllocator>;

            // Constructors

            constructor(properties?: Partial<GLRenderbufferAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module GLSLStage {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * #GstGLSLStage holds and represents a single OpenGL shader stage.
         */
        class GLSLStage extends Gst.Object {
            static $gtype: GObject.GType<GLSLStage>;

            // Constructors

            constructor(properties?: Partial<GLSLStage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext, type: number): GLSLStage;

            static new_default_fragment(context: GLContext): GLSLStage;

            static new_default_vertex(context: GLContext): GLSLStage;

            static new_with_string(
                context: GLContext,
                type: number,
                version: GLSLVersion,
                profile: GLSLProfile,
                str: string,
            ): GLSLStage;

            static new_with_strings(
                context: GLContext,
                type: number,
                version: GLSLVersion,
                profile: GLSLProfile,
                str: string[],
            ): GLSLStage;

            // Methods

            compile(): boolean;
            get_handle(): number;
            get_profile(): GLSLProfile;
            get_shader_type(): number;
            get_version(): GLSLVersion;
            /**
             * Replaces the current shader string with `str`.
             * @param version a #GstGLSLVersion
             * @param profile a #GstGLSLProfile
             * @param str a GLSL shader string
             */
            set_strings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean;
        }

        module GLShader {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                linked: boolean;
            }
        }

        class GLShader extends Gst.Object {
            static $gtype: GObject.GType<GLShader>;

            // Properties

            get linked(): boolean;

            // Fields

            context: GLContext;

            // Constructors

            constructor(properties?: Partial<GLShader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext): GLShader;

            static new_default(context: GLContext): GLShader;

            // Static methods

            static string_fragment_external_oes_get_default(
                context: GLContext,
                version: GLSLVersion,
                profile: GLSLProfile,
            ): string;
            static string_fragment_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
            /**
             * Generates a shader string that defines the precision of float types in
             * GLSL shaders.  This is particularly needed for fragment shaders in a
             * GLSL ES context where there is no default precision specified.
             *
             * Practically, this will return the string 'precision mediump float'
             * or 'precision highp float' depending on if high precision floats are
             * determined to be supported.
             * @param context a #GstGLContext
             * @param version a #GstGLSLVersion
             * @param profile a #GstGLSLProfile
             */
            static string_get_highest_precision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;

            // Methods

            /**
             * Attaches `stage` to `shader`.  `stage` must have been successfully compiled
             * with gst_glsl_stage_compile().
             *
             * Note: must be called in the GL thread
             * @param stage a #GstGLSLStage to attach
             * @returns whether @stage could be attached to @shader
             */
            attach(stage: GLSLStage): boolean;
            /**
             * Attaches `stage` to `shader`.  `stage` must have been successfully compiled
             * with gst_glsl_stage_compile().
             *
             * Note: must be called in the GL thread
             * @param stage a #GstGLSLStage to attach
             * @returns whether @stage could be attached to @shader
             */
            attach_unlocked(stage: GLSLStage): boolean;
            /**
             * Bind attribute `name` to the specified location `index` using
             * `glBindAttributeLocation()`.
             * @param index attribute index to set
             * @param name name of the attribute
             */
            bind_attribute_location(index: number, name: string): void;
            /**
             * Bind attribute `name` to the specified location `index` using
             * `glBindFragDataLocation()`.
             * @param index attribute index to set
             * @param name name of the attribute
             */
            bind_frag_data_location(index: number, name: string): void;
            /**
             * Compiles `stage` and attaches it to `shader`.
             *
             * Note: must be called in the GL thread
             * @param stage a #GstGLSLStage to attach
             * @returns whether @stage could be compiled and attached to @shader
             */
            compile_attach_stage(stage: GLSLStage): boolean;
            /**
             * Detaches `stage` from `shader`.  `stage` must have been successfully attached
             * to `shader` with gst_gl_shader_attach() or gst_gl_shader_attach_unlocked().
             *
             * Note: must be called in the GL thread
             * @param stage a #GstGLSLStage to attach
             */
            detach(stage: GLSLStage): void;
            /**
             * Detaches `stage` from `shader`.  `stage` must have been successfully attached
             * to `shader` with gst_gl_shader_attach() or gst_gl_shader_attach_unlocked().
             *
             * Note: must be called in the GL thread
             * @param stage a #GstGLSLStage to attach
             */
            detach_unlocked(stage: GLSLStage): void;
            get_attribute_location(name: string): number;
            get_program_handle(): number;
            /**
             * Note: must be called in the GL thread
             * @returns whether @shader has been successfully linked
             */
            is_linked(): boolean;
            /**
             * Links the current list of #GstGLSLStage's in `shader`.
             *
             * Note: must be called in the GL thread
             * @returns whether @shader could be linked together.
             */
            link(): boolean;
            /**
             * Releases the shader and stages.
             *
             * Note: must be called in the GL thread
             */
            release(): void;
            /**
             * Releases the shader and stages.
             *
             * Note: must be called in the GL thread
             */
            release_unlocked(): void;
            /**
             * Perform `glUniform1f()` for `name` on `shader`
             * @param name name of the uniform
             * @param value value to set
             */
            set_uniform_1f(name: string, value: number): void;
            /**
             * Perform `glUniform1fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_1fv(name: string, value: number[]): void;
            /**
             * Perform `glUniform1i()` for `name` on `shader`
             * @param name name of the uniform
             * @param value value to set
             */
            set_uniform_1i(name: string, value: number): void;
            /**
             * Perform `glUniform1iv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_1iv(name: string, value: number[]): void;
            /**
             * Perform `glUniform2f()` for `name` on `shader`
             * @param name name of the uniform
             * @param v0 first value to set
             * @param v1 second value to set
             */
            set_uniform_2f(name: string, v0: number, v1: number): void;
            /**
             * Perform `glUniform2fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_2fv(name: string, value: number[]): void;
            /**
             * Perform `glUniform2i()` for `name` on `shader`
             * @param name name of the uniform
             * @param v0 first value to set
             * @param v1 second value to set
             */
            set_uniform_2i(name: string, v0: number, v1: number): void;
            /**
             * Perform `glUniform2iv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_2iv(name: string, value: number[]): void;
            /**
             * Perform `glUniform3f()` for `name` on `shader`
             * @param name name of the uniform
             * @param v0 first value to set
             * @param v1 second value to set
             * @param v2 third value to set
             */
            set_uniform_3f(name: string, v0: number, v1: number, v2: number): void;
            /**
             * Perform `glUniform3fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_3fv(name: string, value: number[]): void;
            /**
             * Perform `glUniform3i()` for `name` on `shader`
             * @param name name of the uniform
             * @param v0 first value to set
             * @param v1 second value to set
             * @param v2 third value to set
             */
            set_uniform_3i(name: string, v0: number, v1: number, v2: number): void;
            /**
             * Perform `glUniform3iv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_3iv(name: string, value: number[]): void;
            /**
             * Perform `glUniform4f()` for `name` on `shader`
             * @param name name of the uniform
             * @param v0 first value to set
             * @param v1 second value to set
             * @param v2 third value to set
             * @param v3 fourth value to set
             */
            set_uniform_4f(name: string, v0: number, v1: number, v2: number, v3: number): void;
            /**
             * Perform `glUniform4fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_4fv(name: string, value: number[]): void;
            /**
             * Perform `glUniform4i()` for `name` on `shader`
             * @param name name of the uniform
             * @param v0 first value to set
             * @param v1 second value to set
             * @param v2 third value to set
             * @param v3 fourth value to set
             */
            set_uniform_4i(name: string, v0: number, v1: number, v2: number, v3: number): void;
            /**
             * Perform `glUniform4iv()` for `name` on `shader`
             * @param name name of the uniform
             * @param value values to set
             */
            set_uniform_4iv(name: string, value: number[]): void;
            /**
             * Perform `glUniformMatrix2fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 2x2 matrices to set
             * @param transpose transpose the matrix
             * @param value matrix to set
             */
            set_uniform_matrix_2fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix2x3fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 2x3 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_2x3fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix2x4fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 2x4 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_2x4fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix3fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 3x3 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_3fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix3x2fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 3x2 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_3x2fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix3x4fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 3x4 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_3x4fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix4fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 4x4 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_4fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix4x2fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 4x2 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_4x2fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Perform `glUniformMatrix4x3fv()` for `name` on `shader`
             * @param name name of the uniform
             * @param count number of 4x3 matrices to set
             * @param transpose transpose the matrix
             * @param value values to set
             */
            set_uniform_matrix_4x3fv(name: string, count: number, transpose: boolean, value: number): void;
            /**
             * Mark's `shader` as being used for the next GL draw command.
             *
             * Note: must be called in the GL thread and `shader` must have been linked.
             */
            use(): void;
        }

        module GLUpload {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * #GstGLUpload is an object that uploads data from system memory into GL textures.
         *
         * A #GstGLUpload can be created with gst_gl_upload_new()
         */
        class GLUpload extends Gst.Object {
            static $gtype: GObject.GType<GLUpload>;

            // Fields

            context: GLContext;

            // Constructors

            constructor(properties?: Partial<GLUpload.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: GLContext): GLUpload;

            // Static methods

            static get_input_template_caps(): Gst.Caps;

            // Methods

            /**
             * Fixate the `othercaps` based on the information of the `caps`.
             * @param direction the pad #GstPadDirection
             * @param caps a #GstCaps as the reference
             * @param othercaps a #GstCaps to fixate
             * @returns the fixated caps
             */
            fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
            get_caps(): [Gst.Caps | null, Gst.Caps | null];
            /**
             * Uploads `buffer` using the transformation specified by
             * gst_gl_upload_set_caps() creating a new #GstBuffer in `outbuf_ptr`.
             * @param buffer input #GstBuffer
             * @returns whether the upload was successful
             */
            perform_with_buffer(buffer: Gst.Buffer): [GLUploadReturn, Gst.Buffer];
            /**
             * Adds the required allocation parameters to support uploading.
             * @param decide_query a #GstQuery from a decide allocation
             * @param query the proposed allocation query
             */
            propose_allocation(decide_query: Gst.Query | null, query: Gst.Query): void;
            /**
             * Initializes `upload` with the information required for upload.
             * @param in_caps input #GstCaps
             * @param out_caps output #GstCaps
             * @returns whether @in_caps and @out_caps could be set on @upload
             */
            set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
            set_context(context: GLContext): void;
            transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
        }

        module GLViewConvert {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                downmix_mode: GLStereoDownmix;
                downmixMode: GLStereoDownmix;
                input_flags_override: GstVideo.VideoMultiviewFlags;
                inputFlagsOverride: GstVideo.VideoMultiviewFlags;
                input_mode_override: GstVideo.VideoMultiviewMode;
                inputModeOverride: GstVideo.VideoMultiviewMode;
                output_flags_override: GstVideo.VideoMultiviewFlags;
                outputFlagsOverride: GstVideo.VideoMultiviewFlags;
                output_mode_override: GstVideo.VideoMultiviewMode;
                outputModeOverride: GstVideo.VideoMultiviewMode;
            }
        }

        /**
         * Convert stereoscopic/multiview video using fragment shaders.
         */
        class GLViewConvert extends Gst.Object {
            static $gtype: GObject.GType<GLViewConvert>;

            // Properties

            get downmix_mode(): GLStereoDownmix;
            set downmix_mode(val: GLStereoDownmix);
            get downmixMode(): GLStereoDownmix;
            set downmixMode(val: GLStereoDownmix);
            get input_flags_override(): GstVideo.VideoMultiviewFlags;
            set input_flags_override(val: GstVideo.VideoMultiviewFlags);
            get inputFlagsOverride(): GstVideo.VideoMultiviewFlags;
            set inputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
            get input_mode_override(): GstVideo.VideoMultiviewMode;
            set input_mode_override(val: GstVideo.VideoMultiviewMode);
            get inputModeOverride(): GstVideo.VideoMultiviewMode;
            set inputModeOverride(val: GstVideo.VideoMultiviewMode);
            get output_flags_override(): GstVideo.VideoMultiviewFlags;
            set output_flags_override(val: GstVideo.VideoMultiviewFlags);
            get outputFlagsOverride(): GstVideo.VideoMultiviewFlags;
            set outputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
            get output_mode_override(): GstVideo.VideoMultiviewMode;
            set output_mode_override(val: GstVideo.VideoMultiviewMode);
            get outputModeOverride(): GstVideo.VideoMultiviewMode;
            set outputModeOverride(val: GstVideo.VideoMultiviewMode);

            // Fields

            object: Gst.Object;
            context: GLContext;
            shader: GLShader;
            from_texture_target: GLTextureTarget;
            to_texture_target: GLTextureTarget;
            caps_passthrough: boolean;
            initted: boolean;
            reconfigure: boolean;
            fbo: GLFramebuffer;

            // Constructors

            constructor(properties?: Partial<GLViewConvert.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GLViewConvert;

            // Methods

            /**
             * Provides an implementation of #GstBaseTransformClass.fixate_caps()
             * @param direction a #GstPadDirection
             * @param caps the #GstCaps of @direction
             * @param othercaps the #GstCaps to fixate
             * @returns the fixated #GstCaps
             */
            fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
            /**
             * Retrieve the processed output buffer placing the output in `outbuf_ptr`.
             * @returns a #GstFlowReturn
             */
            get_output(): [Gst.FlowReturn, Gst.Buffer];
            /**
             * Converts the data contained by `inbuf` using the formats specified by the
             * #GstCaps passed to gst_gl_view_convert_set_caps()
             * @param inbuf the #GstGLMemory filled #GstBuffer to convert
             * @returns a converted #GstBuffer or %NULL
             */
            perform(inbuf: Gst.Buffer): Gst.Buffer | null;
            /**
             * Reset `viewconvert` to the default state.  Further operation will require
             * setting the caps with gst_gl_view_convert_set_caps().
             */
            reset(): void;
            /**
             * Initializes `viewconvert` with the information required for conversion.
             * @param in_caps input #GstCaps
             * @param out_caps output #GstCaps
             */
            set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
            /**
             * Set `context` on `viewconvert`
             * @param context the #GstGLContext to set
             */
            set_context(context: GLContext): void;
            /**
             * Submit `input` to be processed by `viewconvert`
             * @param is_discont true if we have a discontinuity
             * @param input a #GstBuffer
             * @returns a #GstFlowReturn
             */
            submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
            /**
             * Provides an implementation of #GstBaseTransformClass.transform_caps()
             * @param direction a #GstPadDirection
             * @param caps the #GstCaps to transform
             * @param filter a set of filter #GstCaps
             * @returns the converted #GstCaps
             */
            transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
        }

        module GLWindow {
            // Signal callback interfaces

            interface KeyEvent {
                (id: string, key: string): void;
            }

            interface MouseEvent {
                (id: string, button: number, x: number, y: number): void;
            }

            interface ScrollEvent {
                (x: number, y: number, delta_x: number, delta_y: number): void;
            }

            interface WindowHandleChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * GstGLWindow represents a window that elements can render into.  A window can
         * either be a user visible window (onscreen) or hidden (offscreen).
         */
        abstract class GLWindow extends Gst.Object {
            static $gtype: GObject.GType<GLWindow>;

            // Constructors

            constructor(properties?: Partial<GLWindow.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](display: GLDisplay): GLWindow;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'key-event', callback: (_source: this, id: string, key: string) => void): number;
            connect_after(signal: 'key-event', callback: (_source: this, id: string, key: string) => void): number;
            emit(signal: 'key-event', id: string, key: string): void;
            connect(
                signal: 'mouse-event',
                callback: (_source: this, id: string, button: number, x: number, y: number) => void,
            ): number;
            connect_after(
                signal: 'mouse-event',
                callback: (_source: this, id: string, button: number, x: number, y: number) => void,
            ): number;
            emit(signal: 'mouse-event', id: string, button: number, x: number, y: number): void;
            connect(
                signal: 'scroll-event',
                callback: (_source: this, x: number, y: number, delta_x: number, delta_y: number) => void,
            ): number;
            connect_after(
                signal: 'scroll-event',
                callback: (_source: this, x: number, y: number, delta_x: number, delta_y: number) => void,
            ): number;
            emit(signal: 'scroll-event', x: number, y: number, delta_x: number, delta_y: number): void;
            connect(signal: 'window-handle-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'window-handle-changed', callback: (_source: this) => void): number;
            emit(signal: 'window-handle-changed'): void;

            // Virtual methods

            /**
             * close the connection to the display
             */
            vfunc_close(): void;
            /**
             * Checks if `window` controls the GL viewport.
             */
            vfunc_controls_viewport(): boolean;
            /**
             * Redraw the window contents.  Implementations should invoke the draw callback.
             */
            vfunc_draw(): void;
            /**
             * Gets the current windowing system display connection
             */
            vfunc_get_display(): never;
            /**
             * Gets the current window handle that this #GstGLWindow is
             *                     rendering into.  This may return a different value to
             *                     what is passed into `set_window_handle`
             */
            vfunc_get_window_handle(): never;
            /**
             * Tell a `window` that it should handle events from the window system. These
             * events are forwarded upstream as navigation events. In some window systems
             * events are not propagated in the window hierarchy if a client is listening
             * for them. This method allows you to disable events handling completely
             * from the `window`.
             * @param handle_events a #gboolean indicating if events should be handled or not.
             */
            vfunc_handle_events(handle_events: boolean): void;
            /**
             * Query whether `window` has output surface or not
             */
            vfunc_has_output_surface(): boolean;
            /**
             * open the connection to the display
             */
            vfunc_open(): boolean;
            /**
             * Queue resizing of `window`.
             */
            vfunc_queue_resize(): void;
            /**
             * Quit the runloop's execution.
             */
            vfunc_quit(): void;
            /**
             * Start the execution of the runloop.
             */
            vfunc_run(): void;
            /**
             * Invoke `callback` with data on the window thread.  `callback` is guaranteed to
             * have executed when this function returns.
             * @param callback function to invoke
             */
            vfunc_send_message(callback: GLWindowCB): void;
            /**
             * Invoke `callback` with `data` on the window thread.  The callback may not
             * have been executed when this function returns.
             * @param callback function to invoke
             */
            vfunc_send_message_async(callback: GLWindowCB): void;
            /**
             * Set the preferred width and height of the window.  Implementations are free
             * to ignore this information.
             * @param width new preferred width
             * @param height new preferred height
             */
            vfunc_set_preferred_size(width: number, height: number): void;
            /**
             * Tell a `window` that it should render into a specific region of the window
             * according to the #GstVideoOverlay interface.
             * @param x x position
             * @param y y position
             * @param width width
             * @param height height
             */
            vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
            /**
             * Sets the window that this `window` should render into.  Some implementations
             * require this to be called with a valid handle before drawing can commence.
             * @param handle handle to the window
             */
            vfunc_set_window_handle(handle: never): void;
            /**
             * Present the window to the screen.
             */
            vfunc_show(): void;

            // Methods

            /**
             * Checks if `window` controls the GL viewport.
             * @returns %TRUE if @window controls the GL viewport, otherwise %FALSE
             */
            controls_viewport(): boolean;
            /**
             * Redraw the window contents.  Implementations should invoke the draw callback.
             */
            draw(): void;
            get_context(): GLContext;
            get_display(): never;
            get_surface_dimensions(): [number, number];
            get_window_handle(): never;
            /**
             * Tell a `window` that it should handle events from the window system. These
             * events are forwarded upstream as navigation events. In some window systems
             * events are not propagated in the window hierarchy if a client is listening
             * for them. This method allows you to disable events handling completely
             * from the `window`.
             * @param handle_events a #gboolean indicating if events should be handled or not.
             */
            handle_events(handle_events: boolean): void;
            /**
             * Query whether `window` has output surface or not
             * @returns %TRUE if @window has useable output surface
             */
            has_output_surface(): boolean;
            /**
             * Queue resizing of `window`.
             */
            queue_resize(): void;
            /**
             * Quit the runloop's execution.
             */
            quit(): void;
            /**
             * Resize `window` to the given `width` and `height`.
             * @param width new width
             * @param height new height
             */
            resize(width: number, height: number): void;
            /**
             * Start the execution of the runloop.
             */
            run(): void;
            send_key_event(event_type: string, key_str: string): void;
            /**
             * Invoke `callback` with data on the window thread.  `callback` is guaranteed to
             * have executed when this function returns.
             * @param callback function to invoke
             */
            send_message(callback: GLWindowCB): void;
            /**
             * Invoke `callback` with `data` on the window thread.  The callback may not
             * have been executed when this function returns.
             * @param callback function to invoke
             */
            send_message_async(callback: GLWindowCB): void;
            send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
            /**
             * Notify a `window` about a scroll event. A scroll signal holding the event
             * coordinates will be emitted.
             * @param posx x position of the mouse cursor
             * @param posy y position of the mouse cursor
             * @param delta_x the x offset of the scroll event
             * @param delta_y the y offset of the scroll event
             */
            send_scroll_event(posx: number, posy: number, delta_x: number, delta_y: number): void;
            /**
             * Sets the callback called when the window is about to close.
             * @param callback function to invoke
             */
            set_close_callback(callback: GLWindowCB): void;
            /**
             * Sets the draw callback called every time gst_gl_window_draw() is called
             * @param callback function to invoke
             */
            set_draw_callback(callback: GLWindowCB): void;
            /**
             * Set the preferred width and height of the window.  Implementations are free
             * to ignore this information.
             * @param width new preferred width
             * @param height new preferred height
             */
            set_preferred_size(width: number, height: number): void;
            /**
             * Tell a `window` that it should render into a specific region of the window
             * according to the #GstVideoOverlay interface.
             * @param x x position
             * @param y y position
             * @param width width
             * @param height height
             * @returns whether the specified region could be set
             */
            set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
            /**
             * Sets the resize callback called every time a resize of the window occurs.
             * @param callback function to invoke
             */
            set_resize_callback(callback: GLWindowResizeCB): void;
            /**
             * Sets the window that this `window` should render into.  Some implementations
             * require this to be called with a valid handle before drawing can commence.
             * @param handle handle to the window
             */
            set_window_handle(handle: never): void;
            /**
             * Present the window to the screen.
             */
            show(): void;
        }

        class GLAllocationParams {
            static $gtype: GObject.GType<GLAllocationParams>;

            // Fields

            struct_size: number;
            alloc_flags: number;
            alloc_size: number;
            context: GLContext;
            notify: GLib.DestroyNotify;
            user_data: any;
            wrapped_data: any;
            gl_handle: any;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            copy(): GLAllocationParams;
            /**
             * Copies the dynamically allocated data from `src` to `dest`.  Direct subclasses
             * should call this function in their own overridden copy function.
             * @param dest the destination #GstGLAllocationParams
             */
            copy_data(dest: GLAllocationParams): void;
            /**
             * Frees the #GstGLAllocationParams and all associated data.
             */
            free(): void;
            /**
             * Frees the dynamically allocated data in `params`.  Direct subclasses
             * should call this function in their own overridden free function.
             */
            free_data(): void;
        }

        /**
         * #GstGLAsyncDebug an opaque structure and should only be accessed through the
         * provided API.
         */
        class GLAsyncDebug {
            static $gtype: GObject.GType<GLAsyncDebug>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Frees `ad`
             */
            free(): void;
            /**
             * freeze the debug output.  While frozen, any call to
             * gst_gl_async_debug_output_log_msg() will not output any messages but
             * subsequent calls to gst_gl_async_debug_store_log_msg() will overwrite previous
             * messages.
             */
            freeze(): void;
            /**
             * Initialize `ad`.  Intended for use with #GstGLAsyncDebug's that are embedded
             * in other structs.
             */
            init(): void;
            /**
             * Outputs a previously stored debug message.
             */
            output_log_msg(): void;
            /**
             * unfreeze the debug output.  See gst_gl_async_debug_freeze() for what freezing means
             */
            thaw(): void;
            /**
             * Unset any dynamically allocated data.  Intended for use with
             * #GstGLAsyncDebug's that are embedded in other structs.
             */
            unset(): void;
        }

        type GLBaseFilterClass = typeof GLBaseFilter;
        abstract class GLBaseFilterPrivate {
            static $gtype: GObject.GType<GLBaseFilterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * GstGLBaseMemory is a #GstMemory subclass providing the basis of support
         * for the mapping of GL buffers.
         *
         * Data is uploaded or downloaded from the GPU as is necessary.
         */
        class GLBaseMemory {
            static $gtype: GObject.GType<GLBaseMemory>;

            // Fields

            context: GLContext;
            map_flags: Gst.MapFlags;
            map_count: number;
            gl_map_count: number;
            data: any;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
            /**
             * Initializes the GL Base Memory allocator. It is safe to call this function
             * multiple times.  This must be called before any other GstGLBaseMemory operation.
             */
            static init_once(): void;

            // Methods

            /**
             * Note: only intended for subclass usage to allocate the system memory buffer
             * on demand.  If there is already a non-NULL data pointer in `gl_mem->`data,
             * then this function imply returns TRUE.
             * @returns whether the system memory could be allocated
             */
            alloc_data(): boolean;
            /**
             * Initializes `mem` with the required parameters
             * @param allocator the #GstAllocator to initialize with
             * @param parent the parent #GstMemory to initialize with
             * @param context the #GstGLContext to initialize with
             * @param params the @GstAllocationParams to initialize with
             * @param size the number of bytes to be allocated
             * @param user_data user data to call @notify with
             * @param notify a #GDestroyNotify
             */
            init(
                allocator: Gst.Allocator,
                parent: Gst.Memory | null,
                context: GLContext,
                params: Gst.AllocationParams | null,
                size: number,
                user_data?: any | null,
                notify?: GLib.DestroyNotify | null,
            ): void;
            memcpy(dest: GLBaseMemory, offset: number, size: number): boolean;
        }

        type GLBaseMemoryAllocatorClass = typeof GLBaseMemoryAllocator;
        type GLBaseMixerClass = typeof GLBaseMixer;
        type GLBaseMixerPadClass = typeof GLBaseMixerPad;
        abstract class GLBaseMixerPrivate {
            static $gtype: GObject.GType<GLBaseMixerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLBaseSrcClass = typeof GLBaseSrc;
        abstract class GLBaseSrcPrivate {
            static $gtype: GObject.GType<GLBaseSrcPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * GstGLBuffer is a #GstMemory subclass providing support for the mapping of
         * GL buffers.
         *
         * Data is uploaded or downloaded from the GPU as is necessary.
         */
        class GLBuffer {
            static $gtype: GObject.GType<GLBuffer>;

            // Fields

            id: number;
            target: number;
            usage_hints: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Initializes the GL Buffer allocator. It is safe to call this function
             * multiple times.  This must be called before any other #GstGLBuffer operation.
             */
            static init_once(): void;
        }

        class GLBufferAllocationParams {
            static $gtype: GObject.GType<GLBufferAllocationParams>;

            // Fields

            gl_target: number;
            gl_usage: number;

            // Constructors

            constructor(
                context: GLContext,
                alloc_size: number,
                alloc_params: Gst.AllocationParams | null,
                gl_target: number,
                gl_usage: number,
            );
            _init(...args: any[]): void;

            static ['new'](
                context: GLContext,
                alloc_size: number,
                alloc_params: Gst.AllocationParams | null,
                gl_target: number,
                gl_usage: number,
            ): GLBufferAllocationParams;
        }

        type GLBufferAllocatorClass = typeof GLBufferAllocator;
        type GLBufferPoolClass = typeof GLBufferPool;
        abstract class GLBufferPoolPrivate {
            static $gtype: GObject.GType<GLBufferPoolPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLColorConvertClass = typeof GLColorConvert;
        abstract class GLColorConvertPrivate {
            static $gtype: GObject.GType<GLColorConvertPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLContextClass = typeof GLContext;
        abstract class GLContextPrivate {
            static $gtype: GObject.GType<GLContextPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLDisplayClass = typeof GLDisplay;
        abstract class GLDisplayPrivate {
            static $gtype: GObject.GType<GLDisplayPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLFilterClass = typeof GLFilter;
        type GLFramebufferClass = typeof GLFramebuffer;
        abstract class GLFramebufferPrivate {
            static $gtype: GObject.GType<GLFramebufferPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Structure containing function pointers to OpenGL functions.
         *
         * Each field is named exactly the same as the OpenGL function without the
         * `gl` prefix.
         */
        abstract class GLFuncs {
            static $gtype: GObject.GType<GLFuncs>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * GstGLMemory is a #GstGLBaseMemory subclass providing support for the mapping of
         * OpenGL textures.
         *
         * #GstGLMemory is created or wrapped through gst_gl_base_memory_alloc()
         * with #GstGLVideoAllocationParams.
         *
         * Data is uploaded or downloaded from the GPU as is necessary.
         *
         * The #GstCaps that is used for #GstGLMemory based buffers should contain
         * the %GST_CAPS_FEATURE_MEMORY_GL_MEMORY as a #GstCapsFeatures and should
         * contain a 'texture-target' field with one of the #GstGLTextureTarget values
         * as a string, i.e. some combination of 'texture-target=(string){2D,
         * rectangle, external-oes}'.
         */
        class GLMemory {
            static $gtype: GObject.GType<GLMemory>;

            // Fields

            tex_id: number;
            tex_target: GLTextureTarget;
            tex_format: GLFormat;
            valign: GstVideo.VideoAlignment;
            plane: number;
            tex_scaling: number[];
            texture_wrapped: boolean;
            unpack_length: number;
            tex_width: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Initializes the GL Base Texture allocator. It is safe to call this function
             * multiple times.  This must be called before any other GstGLMemory operation.
             */
            static init_once(): void;

            // Methods

            /**
             * Copies `gl_mem` into the texture specified by `tex_id`.  The format of `tex_id`
             * is specified by `tex_format,` `width` and `height`.
             * @param tex_id OpenGL texture id
             * @param target the #GstGLTextureTarget
             * @param tex_format the #GstGLFormat
             * @param width width of @tex_id
             * @param height height of @tex_id
             * @returns Whether the copy succeeded
             */
            copy_into(
                tex_id: number,
                target: GLTextureTarget,
                tex_format: GLFormat,
                width: number,
                height: number,
            ): boolean;
            /**
             * Copies the texture in #GstGLMemory into the texture specified by `tex_id,`
             * `out_target,` `out_tex_format,` `out_width` and `out_height`.
             * @param tex_id the destination texture id
             * @param out_target the destination #GstGLTextureTarget
             * @param out_tex_format the destination #GstGLFormat
             * @param out_width the destination width
             * @param out_height the destination height
             * @returns whether the copy succeeded.
             */
            copy_teximage(
                tex_id: number,
                out_target: GLTextureTarget,
                out_tex_format: GLFormat,
                out_width: number,
                out_height: number,
            ): boolean;
            get_texture_format(): GLFormat;
            get_texture_height(): number;
            get_texture_id(): number;
            get_texture_target(): GLTextureTarget;
            get_texture_width(): number;
            /**
             * Initializes `mem` with the required parameters.  `info` is assumed to have
             * already have been modified with gst_video_info_align().
             * @param allocator the #GstAllocator to initialize with
             * @param parent the parent #GstMemory to initialize with
             * @param context the #GstGLContext to initialize with
             * @param target the #GstGLTextureTarget for this #GstGLMemory
             * @param tex_format the #GstGLFormat for this #GstGLMemory
             * @param params the @GstAllocationParams to initialize with
             * @param info the #GstVideoInfo for this #GstGLMemory
             * @param plane the plane number (starting from 0) for this #GstGLMemory
             * @param valign optional #GstVideoAlignment parameters
             * @param user_data user data to call @notify with
             * @param notify a #GDestroyNotify
             */
            init(
                allocator: Gst.Allocator,
                parent: Gst.Memory | null,
                context: GLContext,
                target: GLTextureTarget,
                tex_format: GLFormat,
                params: Gst.AllocationParams | null,
                info: GstVideo.VideoInfo,
                plane: number,
                valign?: GstVideo.VideoAlignment | null,
                user_data?: any | null,
                notify?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Reads the texture in #GstGLMemory into `write_pointer` if no buffer is bound
             * to `GL_PIXEL_PACK_BUFFER`.  Otherwise `write_pointer` is the byte offset into
             * the currently bound `GL_PIXEL_PACK_BUFFER` buffer to store the result of
             * glReadPixels.  See the OpenGL specification for glReadPixels for more
             * details.
             * @param write_pointer the data pointer to pass to glReadPixels
             * @returns whether theread operation succeeded
             */
            read_pixels(write_pointer?: any | null): boolean;
            /**
             * Reads the texture in `read_pointer` into `gl_mem`.
             *
             * See gst_gl_memory_read_pixels() for what `read_pointer` signifies.
             * @param read_pointer the data pointer to pass to glTexSubImage
             */
            texsubimage(read_pointer?: any | null): void;
        }

        type GLMemoryAllocatorClass = typeof GLMemoryAllocator;
        /**
         * #GstGLMemoryPBO is created or wrapped through gst_gl_base_memory_alloc()
         * with #GstGLVideoAllocationParams.
         *
         * Data is uploaded or downloaded from the GPU as is necessary.
         */
        class GLMemoryPBO {
            static $gtype: GObject.GType<GLMemoryPBO>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static init_once(): void;

            // Methods

            /**
             * Copies `gl_mem` into the texture specified by `tex_id`.  The format of `tex_id`
             * is specified by `tex_format,` `width` and `height`.
             *
             * If `respecify` is %TRUE, then the copy is performed in terms of the texture
             * data.  This is useful for splitting RGBA textures into RG or R textures or
             * vice versa. The requirement for this to succeed is that the backing texture
             * data must be the same size, i.e. say a RGBA8 texture is converted into a RG8
             * texture, then the RG texture must have twice as many pixels available for
             * output as the RGBA texture.
             *
             * Otherwise, if `respecify` is %FALSE, then the copy is performed per texel
             * using glCopyTexImage.  See the OpenGL specification for details on the
             * mappings between texture formats.
             * @param tex_id the destination texture id
             * @param target the destination #GstGLTextureTarget
             * @param tex_format the destination #GstGLFormat
             * @param width width of @tex_id
             * @param height height of @tex_id
             * @param stride stride of the backing texture data
             * @param respecify whether to copy the data or copy per texel
             * @returns Whether the copy succeeded
             */
            copy_into_texture(
                tex_id: number,
                target: GLTextureTarget,
                tex_format: GLFormat,
                width: number,
                height: number,
                stride: number,
                respecify: boolean,
            ): boolean;
            /**
             * Transfer the texture data from the texture into the PBO if necessary.
             */
            download_transfer(): void;
            /**
             * Transfer the texture data from the PBO into the texture if necessary.
             */
            upload_transfer(): void;
        }

        type GLMemoryPBOAllocatorClass = typeof GLMemoryPBOAllocator;
        type GLMixerClass = typeof GLMixer;
        type GLMixerPadClass = typeof GLMixerPad;
        abstract class GLMixerPrivate {
            static $gtype: GObject.GType<GLMixerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLOverlayCompositorClass = typeof GLOverlayCompositor;
        /**
         * A #GstGLQuery represents and holds an OpenGL query object.  Various types of
         * queries can be run or counters retrieved.
         */
        class GLQuery {
            static $gtype: GObject.GType<GLQuery>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
             * #GstPads in `element` of `direction` for the local OpenGL context used by
             * GStreamer elements.
             * @param element a #GstElement to query from
             * @param direction the #GstPadDirection to query
             * @param context_ptr location containing the current and/or resulting                      #GstGLContext
             */
            static local_gl_context(
                element: Gst.Element,
                direction: Gst.PadDirection,
                context_ptr: GLContext,
            ): [boolean, GLContext];

            // Methods

            /**
             * Record the result of a counter
             */
            counter(): void;
            /**
             * End counting the query
             */
            end(): void;
            /**
             * Frees a #GstGLQuery
             */
            free(): void;
            init(context: GLContext, query_type: GLQueryType): void;
            result(): number;
            /**
             * Start counting the query
             */
            start(): void;
            /**
             * Free any dynamically allocated resources
             */
            unset(): void;
        }

        /**
         * GstGLRenderbuffer is a #GstGLBaseMemory subclass providing support for
         * OpenGL renderbuffers.
         *
         * #GstGLRenderbuffer is created or wrapped through gst_gl_base_memory_alloc()
         * with #GstGLRenderbufferAllocationParams.
         */
        class GLRenderbuffer {
            static $gtype: GObject.GType<GLRenderbuffer>;

            // Fields

            renderbuffer_id: number;
            renderbuffer_format: GLFormat;
            width: number;
            height: number;
            renderbuffer_wrapped: boolean;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Initializes the GL Base Texture allocator. It is safe to call this function
             * multiple times.  This must be called before any other GstGLRenderbuffer operation.
             */
            static init_once(): void;

            // Methods

            get_format(): GLFormat;
            get_height(): number;
            get_id(): number;
            get_width(): number;
        }

        /**
         * Allocation parameters
         */
        class GLRenderbufferAllocationParams {
            static $gtype: GObject.GType<GLRenderbufferAllocationParams>;

            // Fields

            renderbuffer_format: GLFormat;
            width: number;
            height: number;

            // Constructors

            constructor(
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                renderbuffer_format: GLFormat,
                width: number,
                height: number,
            );
            _init(...args: any[]): void;

            static ['new'](
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                renderbuffer_format: GLFormat,
                width: number,
                height: number,
            ): GLRenderbufferAllocationParams;

            static new_wrapped(
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                renderbuffer_format: GLFormat,
                width: number,
                height: number,
                gl_handle?: any | null,
                user_data?: any | null,
                notify?: GLib.DestroyNotify | null,
            ): GLRenderbufferAllocationParams;
        }

        type GLRenderbufferAllocatorClass = typeof GLRenderbufferAllocator;
        type GLSLStageClass = typeof GLSLStage;
        abstract class GLSLStagePrivate {
            static $gtype: GObject.GType<GLSLStagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLShaderClass = typeof GLShader;
        abstract class GLShaderPrivate {
            static $gtype: GObject.GType<GLShaderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * #GstGLSyncMeta provides the ability to synchronize the OpenGL command stream
         * with the CPU or with other OpenGL contexts.
         */
        class GLSyncMeta {
            static $gtype: GObject.GType<GLSyncMeta>;

            // Fields

            context: GLContext;
            data: any;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static get_info(): Gst.MetaInfo;

            // Methods

            /**
             * Set a sync point to possibly wait on at a later time.
             * @param context a #GstGLContext
             */
            set_sync_point(context: GLContext): void;
            /**
             * Insert a wait into `context'`s command stream ensuring all previous OpenGL
             * commands before `sync_meta` have completed.
             * @param context a #GstGLContext
             */
            wait(context: GLContext): void;
            /**
             * Perform a wait so that the sync point has passed from the CPU's perspective
             * What that means, is that all GL operations changing CPU-visible data before
             * the sync point are now visible.
             * @param context a #GstGLContext
             */
            wait_cpu(context: GLContext): void;
        }

        type GLUploadClass = typeof GLUpload;
        abstract class GLUploadPrivate {
            static $gtype: GObject.GType<GLUploadPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class GLVideoAllocationParams {
            static $gtype: GObject.GType<GLVideoAllocationParams>;

            // Fields

            plane: number;
            valign: GstVideo.VideoAlignment;
            target: GLTextureTarget;
            tex_format: GLFormat;

            // Constructors

            constructor(
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                v_info: GstVideo.VideoInfo,
                plane: number,
                valign: GstVideo.VideoAlignment | null,
                target: GLTextureTarget,
                tex_format: GLFormat,
            );
            _init(...args: any[]): void;

            static ['new'](
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                v_info: GstVideo.VideoInfo,
                plane: number,
                valign: GstVideo.VideoAlignment | null,
                target: GLTextureTarget,
                tex_format: GLFormat,
            ): GLVideoAllocationParams;

            static new_wrapped_data(
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                v_info: GstVideo.VideoInfo,
                plane: number,
                valign: GstVideo.VideoAlignment | null,
                target: GLTextureTarget,
                tex_format: GLFormat,
                wrapped_data?: any | null,
                user_data?: any | null,
                notify?: GLib.DestroyNotify | null,
            ): GLVideoAllocationParams;

            static new_wrapped_gl_handle(
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                v_info: GstVideo.VideoInfo,
                plane: number,
                valign: GstVideo.VideoAlignment | null,
                target: GLTextureTarget,
                tex_format: GLFormat,
                gl_handle?: any | null,
                user_data?: any | null,
                notify?: GLib.DestroyNotify | null,
            ): GLVideoAllocationParams;

            static new_wrapped_texture(
                context: GLContext,
                alloc_params: Gst.AllocationParams | null,
                v_info: GstVideo.VideoInfo,
                plane: number,
                valign: GstVideo.VideoAlignment | null,
                target: GLTextureTarget,
                tex_format: GLFormat,
                tex_id: number,
                user_data?: any | null,
                notify?: GLib.DestroyNotify | null,
            ): GLVideoAllocationParams;

            // Methods

            /**
             * Copy and set any dynamically allocated resources in `dest_vid`.  Intended
             * for subclass usage only to chain up at the end of a subclass copy function.
             * @param dest_vid destination #GstGLVideoAllocationParams to copy into
             */
            copy_data(dest_vid: GLVideoAllocationParams): void;
            /**
             * Unset and free any dynamically allocated resources.  Intended for subclass
             * usage only to chain up at the end of a subclass free function.
             */
            free_data(): void;
        }

        type GLViewConvertClass = typeof GLViewConvert;
        abstract class GLViewConvertPrivate {
            static $gtype: GObject.GType<GLViewConvertPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GLWindowClass = typeof GLWindow;
        abstract class GLWindowPrivate {
            static $gtype: GObject.GType<GLWindowPrivate>;

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

    export default GstGL;
}

declare module 'gi://GstGL' {
    import GstGL10 from 'gi://GstGL?version=1.0';
    export default GstGL10;
}
// END
