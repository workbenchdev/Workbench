/// <reference path="./gstvideo-1.0.d.ts" />
/// <reference path="./gstbase-1.0.d.ts" />
/// <reference path="./gst-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gstgl-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GstGLEGL?version=1.0' {
    // Module dependencies
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GstGL from 'gi://GstGL?version=1.0';

    export namespace GstGLEGL {
        /**
         * GstGLEGL-1.0
         */

        const GL_DISPLAY_EGL_NAME: string;
        /**
         * The name of the GL Memory EGL allocator
         */
        const GL_MEMORY_EGL_ALLOCATOR_NAME: string;
        function egl_get_error_string(err: number): string;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data
         * is passed as RGBA data. Shaders later take this "RGBA" data and
         * convert it from its true format (described by in_info) to actual
         * RGBA output. For example, with I420, three EGL images are created,
         * one for each `plane,` each EGL image with a single-channel R format.
         * With NV12, two EGL images are created, one with R format, one
         * with RG format etc.
         * @param context a #GstGLContext (must be an EGL context)
         * @param dmabuf the DMA-Buf file descriptor
         * @param in_info the #GstVideoInfo in @dmabuf
         * @param plane the plane in @in_info to create and #GstEGLImage for
         * @param offset the byte-offset in the data
         * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
         */
        function egl_image_from_dmabuf(
            context: GstGL.GLContext,
            dmabuf: number,
            in_info: GstVideo.VideoInfo,
            plane: number,
            offset: number,
        ): EGLImage | null;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data
         * is passed directly as the format described in in_info. This is
         * useful if the hardware is capable of performing color space conversions
         * internally. The appropriate DRM format is picked, and the EGL image
         * is created with this DRM format.
         *
         * Another notable difference to gst_egl_image_from_dmabuf()
         * is that this function creates one EGL image for all planes, not one for
         * a single plane.
         * @param context a #GstGLContext (must be an EGL context)
         * @param fd Array of DMABuf file descriptors
         * @param offset Array of offsets, relative to the DMABuf
         * @param in_info the #GstVideoInfo
         * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
         */
        function egl_image_from_dmabuf_direct(
            context: GstGL.GLContext,
            fd: number,
            offset: number,
            in_info: GstVideo.VideoInfo,
        ): EGLImage | null;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data
         * is passed directly as the format described in `in_info`. This is
         * useful if the hardware is capable of performing color space conversions
         * internally. The appropriate DRM format is picked, and the EGL image
         * is created with this DRM format.
         *
         * Another notable difference to gst_egl_image_from_dmabuf()
         * is that this function creates one EGL image for all planes, not one for
         * a single plane.
         * @param context a #GstGLContext (must be an EGL context)
         * @param fd Array of DMABuf file descriptors
         * @param offset Array of offsets, relative to the DMABuf
         * @param in_info the #GstVideoInfo
         * @param target GL texture target this GstEGLImage is intended for
         * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
         */
        function egl_image_from_dmabuf_direct_target(
            context: GstGL.GLContext,
            fd: number,
            offset: number,
            in_info: GstVideo.VideoInfo,
            target: GstGL.GLTextureTarget,
        ): EGLImage | null;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data is passed
         * directly as the format described in `in_info`. This is useful if the hardware
         * is capable of performing color space conversions internally.
         *
         * Another notable difference to gst_egl_image_from_dmabuf() is that this
         * function creates one EGL image for all planes, not one for a single plane.
         * @param context a #GstGLContext (must be an EGL context)
         * @param n_planes number of planes (obtained from a #GstVideoMeta)
         * @param fd Array of DMABuf file descriptors
         * @param offset Array of offsets, relative to the DMABuf
         * @param in_info_dma the #GstVideoInfoDmaDrm
         * @param target GL texture target this GstEGLImage is intended for
         * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
         */
        function egl_image_from_dmabuf_direct_target_with_dma_drm(
            context: GstGL.GLContext,
            n_planes: number,
            fd: number,
            offset: number,
            in_info_dma: GstVideo.VideoInfoDmaDrm,
            target: GstGL.GLTextureTarget,
        ): EGLImage | null;
        function egl_image_from_texture(
            context: GstGL.GLContext,
            gl_mem: GstGL.GLMemory,
            attribs: never,
        ): EGLImage | null;
        /**
         * Initializes the GL Memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLMemoryEGL operation.
         */
        function gl_memory_egl_init_once(): void;
        function is_gl_memory_egl(mem: Gst.Memory): boolean;
        interface EGLImageDestroyNotify {
            (image: EGLImage, data?: any | null): void;
        }
        module GLDisplayEGL {
            // Constructor properties interface

            interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
        }

        /**
         * the contents of a #GstGLDisplayEGL are private and should only be accessed
         * through the provided API
         */
        class GLDisplayEGL extends GstGL.GLDisplay {
            static $gtype: GObject.GType<GLDisplayEGL>;

            // Constructors

            constructor(properties?: Partial<GLDisplayEGL.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GLDisplayEGL;

            static new_surfaceless(): GLDisplayEGL;

            static new_with_egl_display(display?: any | null): GLDisplayEGL;

            // Static methods

            /**
             * Creates a EGL display connection from a native Display.
             *
             * This function will return the same value for multiple calls with the same
             * `display`.
             * @param display an existing #GstGLDisplay
             */
            static from_gl_display(display: GstGL.GLDisplay): GLDisplayEGL | null;
            /**
             * Attempts to create a new `EGLDisplay` from `display`.  If `type` is
             * %GST_GL_DISPLAY_TYPE_ANY or %GST_GL_DISPLAY_TYPE_EGL_SURFACELESS, then
             * `display` must be 0. `type` must not be %GST_GL_DISPLAY_TYPE_NONE.
             * @param type a #GstGLDisplayType
             * @param display pointer to a display (or 0)
             */
            static get_from_native(type: GstGL.GLDisplayType, display: never): any | null;
        }

        module GLDisplayEGLDevice {
            // Constructor properties interface

            interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
        }

        /**
         * the contents of a #GstGLDisplayEGLDevice are private and should only be accessed
         * through the provided API
         */
        class GLDisplayEGLDevice extends GstGL.GLDisplay {
            static $gtype: GObject.GType<GLDisplayEGLDevice>;

            // Fields

            device: any;

            // Constructors

            constructor(properties?: Partial<GLDisplayEGLDevice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](device_index: number): GLDisplayEGLDevice;
            // Conflicted with GstGL.GLDisplay.new

            static ['new'](...args: never[]): any;

            static new_with_egl_device(device?: any | null): GLDisplayEGLDevice;
        }

        module GLMemoryEGLAllocator {
            // Constructor properties interface

            interface ConstructorProps extends GstGL.GLMemoryAllocator.ConstructorProps {}
        }

        /**
         * Opaque #GstGLMemoryEGLAllocator struct
         */
        class GLMemoryEGLAllocator extends GstGL.GLMemoryAllocator {
            static $gtype: GObject.GType<GLMemoryEGLAllocator>;

            // Constructors

            constructor(properties?: Partial<GLMemoryEGLAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        /**
         * #GstEGLImage represents and holds an `EGLImage` handle.
         *
         * A #GstEGLImage can be created from a dmabuf with gst_egl_image_from_dmabuf(),
         * or gst_egl_image_from_dmabuf_direct(), or #GstGLMemoryEGL provides a
         * #GstAllocator to allocate `EGLImage`'s bound to and OpenGL texture.
         */
        class EGLImage {
            static $gtype: GObject.GType<EGLImage>;

            // Constructors

            constructor(
                context: GstGL.GLContext,
                image: any | null,
                format: GstGL.GLFormat,
                user_data: any | null,
                user_data_destroy: EGLImageDestroyNotify,
            );
            _init(...args: any[]): void;

            static new_wrapped(
                context: GstGL.GLContext,
                image: any | null,
                format: GstGL.GLFormat,
                user_data: any | null,
                user_data_destroy: EGLImageDestroyNotify,
            ): EGLImage;

            // Static methods

            /**
             * Creates an EGL image that imports the dmabuf FD. The dmabuf data
             * is passed as RGBA data. Shaders later take this "RGBA" data and
             * convert it from its true format (described by in_info) to actual
             * RGBA output. For example, with I420, three EGL images are created,
             * one for each `plane,` each EGL image with a single-channel R format.
             * With NV12, two EGL images are created, one with R format, one
             * with RG format etc.
             * @param context a #GstGLContext (must be an EGL context)
             * @param dmabuf the DMA-Buf file descriptor
             * @param in_info the #GstVideoInfo in @dmabuf
             * @param plane the plane in @in_info to create and #GstEGLImage for
             * @param offset the byte-offset in the data
             */
            static from_dmabuf(
                context: GstGL.GLContext,
                dmabuf: number,
                in_info: GstVideo.VideoInfo,
                plane: number,
                offset: number,
            ): EGLImage | null;
            /**
             * Creates an EGL image that imports the dmabuf FD. The dmabuf data
             * is passed directly as the format described in in_info. This is
             * useful if the hardware is capable of performing color space conversions
             * internally. The appropriate DRM format is picked, and the EGL image
             * is created with this DRM format.
             *
             * Another notable difference to gst_egl_image_from_dmabuf()
             * is that this function creates one EGL image for all planes, not one for
             * a single plane.
             * @param context a #GstGLContext (must be an EGL context)
             * @param fd Array of DMABuf file descriptors
             * @param offset Array of offsets, relative to the DMABuf
             * @param in_info the #GstVideoInfo
             */
            static from_dmabuf_direct(
                context: GstGL.GLContext,
                fd: number,
                offset: number,
                in_info: GstVideo.VideoInfo,
            ): EGLImage | null;
            /**
             * Creates an EGL image that imports the dmabuf FD. The dmabuf data
             * is passed directly as the format described in `in_info`. This is
             * useful if the hardware is capable of performing color space conversions
             * internally. The appropriate DRM format is picked, and the EGL image
             * is created with this DRM format.
             *
             * Another notable difference to gst_egl_image_from_dmabuf()
             * is that this function creates one EGL image for all planes, not one for
             * a single plane.
             * @param context a #GstGLContext (must be an EGL context)
             * @param fd Array of DMABuf file descriptors
             * @param offset Array of offsets, relative to the DMABuf
             * @param in_info the #GstVideoInfo
             * @param target GL texture target this GstEGLImage is intended for
             */
            static from_dmabuf_direct_target(
                context: GstGL.GLContext,
                fd: number,
                offset: number,
                in_info: GstVideo.VideoInfo,
                target: GstGL.GLTextureTarget,
            ): EGLImage | null;
            /**
             * Creates an EGL image that imports the dmabuf FD. The dmabuf data is passed
             * directly as the format described in `in_info`. This is useful if the hardware
             * is capable of performing color space conversions internally.
             *
             * Another notable difference to gst_egl_image_from_dmabuf() is that this
             * function creates one EGL image for all planes, not one for a single plane.
             * @param context a #GstGLContext (must be an EGL context)
             * @param n_planes number of planes (obtained from a #GstVideoMeta)
             * @param fd Array of DMABuf file descriptors
             * @param offset Array of offsets, relative to the DMABuf
             * @param in_info_dma the #GstVideoInfoDmaDrm
             * @param target GL texture target this GstEGLImage is intended for
             */
            static from_dmabuf_direct_target_with_dma_drm(
                context: GstGL.GLContext,
                n_planes: number,
                fd: number,
                offset: number,
                in_info_dma: GstVideo.VideoInfoDmaDrm,
                target: GstGL.GLTextureTarget,
            ): EGLImage | null;
            static from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: never): EGLImage | null;

            // Methods

            export_dmabuf(fd: number, stride: number, offset: number): boolean;
            get_image(): any | null;
        }

        type GLDisplayEGLClass = typeof GLDisplayEGL;
        type GLDisplayEGLDeviceClass = typeof GLDisplayEGLDevice;
        /**
         * #GstGLMemoryEGL is created or wrapped through gst_gl_base_memory_alloc()
         * with #GstGLVideoAllocationParams.
         */
        class GLMemoryEGL {
            static $gtype: GObject.GType<GLMemoryEGL>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Initializes the GL Memory allocator. It is safe to call this function
             * multiple times.  This must be called before any other GstGLMemoryEGL operation.
             */
            static init_once(): void;

            // Methods

            get_display(): any | null;
            get_image(): any | null;
        }

        type GLMemoryEGLAllocatorClass = typeof GLMemoryEGLAllocator;
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

    export default GstGLEGL;
}

declare module 'gi://GstGLEGL' {
    import GstGLEGL10 from 'gi://GstGLEGL?version=1.0';
    export default GstGLEGL10;
}
// END
