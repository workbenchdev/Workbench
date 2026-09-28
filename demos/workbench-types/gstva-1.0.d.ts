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

declare module 'gi://GstVa?version=1.0' {
    // Module dependencies
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstVa {
        /**
         * GstVa-1.0
         */

        export namespace VaFeature {
            export const $gtype: GObject.GType<VaFeature>;
        }

        enum VaFeature {
            /**
             * The feature is disabled.
             */
            DISABLED,
            /**
             * The feature is enabled.
             */
            ENABLED,
            /**
             * The feature is enabled automatically.
             */
            AUTO,
        }
        /**
         * Types of different VA API implemented drivers. These are the typical and
         * the most widely used VA drivers.
         */

        /**
         * Types of different VA API implemented drivers. These are the typical and
         * the most widely used VA drivers.
         */
        export namespace VaImplementation {
            export const $gtype: GObject.GType<VaImplementation>;
        }

        enum VaImplementation {
            /**
             * The mesa gallium implementation.
             */
            MESA_GALLIUM,
            /**
             * The legacy i965 intel implementation.
             */
            INTEL_I965,
            /**
             * The iHD intel implementation.
             */
            INTEL_IHD,
            /**
             * Other implementation.
             */
            OTHER,
            /**
             * Invalid implementation.
             */
            INVALID,
        }
        const ALLOCATOR_VASURFACE: string;
        const CAPS_FEATURE_MEMORY_VA: string;
        /**
         * Flag indicating that we should map the VASurfaceID instead of to
         * system memory, so users can use libva primitives to operate with
         * that surface.
         */
        const MAP_VA: number;
        const VA_DISPLAY_HANDLE_CONTEXT_TYPE_STR: string;
        /**
         * Video alignment is not handled as expected by VA since it uses
         * opaque surfaces, not directly mappable memory. Still, decoders
         * might need to request bigger surfaces for coded size rather than
         * display sizes. This method will set the coded size to bufferpool's
         * configuration, out of the typical video aligment.
         * @param config the #GstStructure with the pool's configuration.
         * @param align a #GstVideoAlignment
         */
        function buffer_pool_config_set_va_alignment(config: Gst.Structure, align: GstVideo.VideoAlignment): void;
        /**
         * Sets the usage hint for the buffers handled by the buffer pool.
         * @param config the #GstStructure with the pool's configuration.
         * @param usage_hint the VA usage hint for new VASurfaceID.
         * @param use_derived a #GstVaFeature for derived mapping (only used when     VA allocator).
         */
        function buffer_pool_config_set_va_allocation_params(
            config: Gst.Structure,
            usage_hint: number,
            use_derived: VaFeature,
        ): void;
        function context_get_va_display(
            context: Gst.Context,
            type_name: string,
            render_device_path: string,
        ): [boolean, VaDisplay];
        /**
         * Set the `display` in the `context`
         * @param context a #GstContext
         * @param display the #GstVaDisplay we want to set
         */
        function context_set_va_display(context: Gst.Context, display: VaDisplay): void;
        /**
         * Creates a new VASurfaceID with `buffer'`s allocator and attached it
         * to it.
         *
         * *This method is used only by plugin's internal VA decoder.*
         * @param buffer a #GstBuffer
         * @returns %TRUE if the new VASurfaceID is attached to @buffer     correctly; %FALSE, otherwise.
         */
        function va_buffer_create_aux_surface(buffer: Gst.Buffer): boolean;
        function va_buffer_peek_display(buffer: Gst.Buffer): VaDisplay;
        /**
         * Query the specified context type name.
         * @param element a #GstElement
         * @param context_type the #gchar string specify the context type name
         */
        function va_context_query(element: Gst.Element, context_type: string): void;
        /**
         * Get the underlying modifier for specified `format` and `usage_hint`.
         * @param display a #GstVaDisplay
         * @param format a #GstVideoFormat
         * @param usage_hint VA usage hint
         * @returns the underlying modifier.
         */
        function va_dmabuf_get_modifier_for_format(
            display: VaDisplay,
            format: GstVideo.VideoFormat,
            usage_hint: number,
        ): number;
        /**
         * It imports the array of `mem,` representing a single frame, into a
         * VASurfaceID and it's attached into every `mem`.
         * @param display a #GstVaDisplay
         * @param drm_info a #GstVideoInfoDmaDrm
         * @param mem Memories. One     per plane.
         * @param fds array of     DMABuf file descriptors.
         * @param offset array of memory     offsets.
         * @param usage_hint VA usage hint.
         * @returns %TRUE if frame is imported correctly into a VASurfaceID; %FALSE otherwise.
         */
        function va_dmabuf_memories_setup(
            display: VaDisplay,
            drm_info: GstVideo.VideoInfoDmaDrm,
            mem: Gst.Memory[],
            fds: never[],
            offset: number[],
            usage_hint: number,
        ): boolean;
        /**
         * Propagate `display` by posting it as #GstContext in the pipeline's bus.
         * @param element a #GstElement
         * @param display the #GstVaDisplay to propagate
         */
        function va_element_propagate_display_context(element: Gst.Element, display: VaDisplay): void;
        /**
         * Called by the va element to ensure a valid #GstVaDisplay.
         * @param element a #GstElement
         * @param render_device_path the #gchar string of render device path
         * @returns whether a #GstVaDisplay exists in @display_ptr
         */
        function va_ensure_element_data(element: any | null, render_device_path: string): [boolean, VaDisplay];
        /**
         * Used by elements when processing their pad's queries, propagating
         * element's #GstVaDisplay if the processed query requests it.
         * @param element a #GstElement
         * @param query a #GstQuery to query the context
         * @param display a #GstVaDisplay to answer the query
         * @returns whether we can handle the context query successfully
         */
        function va_handle_context_query(element: Gst.Element, query: Gst.Query, display: VaDisplay): boolean;
        /**
         * Called by elements in their #GstElementClass::set_context vmethod.
         * It gets a valid #GstVaDisplay if `context` has it.
         * @param element a #GstElement
         * @param context a #GstContext may contain the display
         * @param render_device_path the #gchar string of render device path
         * @returns whether the @display_ptr could be successfully set to a valid #GstVaDisplay in the @context
         */
        function va_handle_set_context(
            element: Gst.Element,
            context: Gst.Context,
            render_device_path: string,
        ): [boolean, VaDisplay];
        function va_memory_peek_display(mem: Gst.Memory): VaDisplay;
        module VaAllocator {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
        }

        /**
         * There are two types of VA allocators:
         *
         * * #GstVaAllocator
         * * #GstVaDmabufAllocator
         */
        class VaAllocator extends Gst.Allocator {
            static $gtype: GObject.GType<VaAllocator>;

            // Constructors

            constructor(properties?: Partial<VaAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](display: VaDisplay, surface_formats: number[]): VaAllocator;

            // Static methods

            /**
             * Allocate a new VASurfaceID backed #GstMemory.
             * @param allocator a #GstAllocator
             */
            static alloc(allocator: Gst.Allocator): Gst.Memory;
            /**
             * Removes all the memories in `allocator'`s pool.
             * @param allocator a #GstAllocator
             */
            static flush(allocator: Gst.Allocator): void;
            /**
             * Gets current internal configuration of `allocator`.
             * @param allocator a #GstAllocator
             */
            static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfo | null, number, boolean];
            static peek_display(allocator: Gst.Allocator): VaDisplay;
            /**
             * This method will populate `buffer` with pooled VASurfaceID
             * memories. It doesn't allocate new VASurfacesID.
             * @param allocator a #GstAllocator
             * @param buffer an empty #GstBuffer
             */
            static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
            /**
             * Sets the configuration defined by `info,` `usage_hint` and
             * `use_derived` for `allocator,` and it tries the configuration, if
             * `allocator` has not allocated memories yet.
             *
             * If `allocator` has memory allocated already, and frame size and
             * format in `info` are the same as currently configured in `allocator,`
             * the rest of `info` parameters are updated internally.
             * @param allocator a #GstAllocator
             * @param info a #GstVideoInfo
             * @param usage_hint VA usage hint
             * @param feat_use_derived a #GstVaFeature
             */
            static set_format(
                allocator: Gst.Allocator,
                info: GstVideo.VideoInfo,
                usage_hint: number,
                feat_use_derived: VaFeature,
            ): [boolean, GstVideo.VideoInfo];
            /**
             * Populates an empty `buffer` with a VASuface backed #GstMemory.
             * @param allocator a #GstAllocator
             * @param buffer a #GstBuffer
             */
            static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        }

        module VaDisplay {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                description: string;
                va_display: any;
                vaDisplay: any;
            }
        }

        /**
         * It is a generic wrapper for VADisplay. To create new instances
         * subclasses are required, depending on the display type to use
         * (v.gr. DRM, X11, Wayland, etc.).
         *
         * The purpose of this class is to be shared among pipelines via
         * #GstContext so all the VA processing elements will use the same
         * display entry. Application developers can create their own
         * subclass, based on their display, and shared it via the synced bus
         * message for the application.
         */
        class VaDisplay extends Gst.Object {
            static $gtype: GObject.GType<VaDisplay>;

            // Properties

            get description(): string;
            get va_display(): any;
            get vaDisplay(): any;

            // Constructors

            constructor(properties?: Partial<VaDisplay.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * This is called when the subclass has to create the internal
             * VADisplay.
             */
            vfunc_create_va_display(): any | null;

            // Methods

            check_version(major: number, minor: number): boolean;
            /**
             * Get the the #GstVaImplementation type of `self`.
             * @returns #GstVaImplementation.
             */
            get_implementation(): VaImplementation;
            /**
             * Get the VA display handle of the `self`.
             * @returns the VA display handle.
             */
            get_va_dpy(): any | null;
            /**
             * If the display is set by the user (foreign) it is assumed that the
             * driver is already initialized, thus this function is noop.
             *
             * If the display is opened internally, this function will initialize
             * the driver and it will set driver's message callbacks.
             *
             * NOTE: this function is supposed to be private, only used by
             * GstVaDisplay descendants.
             * @returns %TRUE if the VA driver can be initialized; %FALSE     otherwise
             */
            initialize(): boolean;
        }

        module VaDisplayDrm {
            // Constructor properties interface

            interface ConstructorProps extends VaDisplay.ConstructorProps {
                path: string;
            }
        }

        /**
         * This is a #GstVaDisplay subclass to instantiate with DRM devices.
         */
        class VaDisplayDrm extends VaDisplay {
            static $gtype: GObject.GType<VaDisplayDrm>;

            // Properties

            get path(): string;

            // Constructors

            constructor(properties?: Partial<VaDisplayDrm.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_path(path: string): VaDisplayDrm;
        }

        module VaDisplayWrapped {
            // Constructor properties interface

            interface ConstructorProps extends VaDisplay.ConstructorProps {}
        }

        /**
         * This is a #GstVaDisplay instantiaton subclass for custom created
         * VADisplay, such as X11 or Wayland, wrapping it.
         */
        class VaDisplayWrapped extends VaDisplay {
            static $gtype: GObject.GType<VaDisplayWrapped>;

            // Constructors

            constructor(properties?: Partial<VaDisplayWrapped.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](handle?: any | null): VaDisplayWrapped;
        }

        module VaDmabufAllocator {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
        }

        /**
         * A pooled memory allocator backed by the DMABufs exported from a
         * VASurfaceID. Also it is possible to import DMAbufs into a
         * VASurfaceID.
         */
        class VaDmabufAllocator extends Gst.Allocator {
            static $gtype: GObject.GType<VaDmabufAllocator>;

            // Constructors

            constructor(properties?: Partial<VaDmabufAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](display: VaDisplay): VaDmabufAllocator;

            // Static methods

            /**
             * Removes all the memories in `allocator'`s pool.
             * @param allocator a #GstAllocator
             */
            static flush(allocator: Gst.Allocator): void;
            /**
             * Gets current internal configuration of `allocator`.
             * @param allocator a #GstAllocator
             */
            static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfoDmaDrm | null, number];
            /**
             * This method will populate `buffer` with pooled VASurfaceID/DMABuf
             * memories. It doesn't allocate new VASurfacesID.
             * @param allocator a #GstAllocator
             * @param buffer an empty #GstBuffer
             */
            static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
            /**
             * Sets the configuration defined by `info` and `usage_hint` for
             * `allocator,` and it tries the configuration, if `allocator` has not
             * allocated memories yet.
             *
             * If `allocator` has memory allocated already, and frame size, format
             * and modifier in `info` are the same as currently configured in
             * `allocator,` the rest of `info` parameters are updated internally.
             * @param allocator a #GstAllocator
             * @param usage_hint VA usage hint
             */
            static set_format(allocator: Gst.Allocator, usage_hint: number): [boolean, GstVideo.VideoInfoDmaDrm];
            /**
             * This function creates a new VASurfaceID and exposes its DMABufs,
             * later it populates the `buffer` with those DMABufs.
             * @param allocator a #GstAllocator
             * @param buffer an empty #GstBuffer
             */
            static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        }

        module VaPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
        }

        /**
         * `GstVaPool` is a buffer pool for VA allocators.
         */
        class VaPool extends Gst.BufferPool {
            static $gtype: GObject.GType<VaPool>;

            // Constructors

            constructor(properties?: Partial<VaPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VaPool;

            static new_with_config(
                caps: Gst.Caps,
                min_buffers: number,
                max_buffers: number,
                usage_hint: number,
                use_derived: VaFeature,
                allocator: Gst.Allocator,
                alloc_params: Gst.AllocationParams,
            ): VaPool;

            // Static methods

            /**
             * Helper function to retrieve the VA surface size provided by `pool`.
             * @param pool a #GstBufferPool
             */
            static get_buffer_size(pool: Gst.BufferPool): [boolean, number];
            /**
             * Retuns: %TRUE if `pool` always add #GstVideoMeta to its
             *     buffers. Otherwise, %FALSE.
             * @param pool the #GstBufferPool
             */
            static requires_video_meta(pool: Gst.BufferPool): boolean;
        }

        type VaDisplayClass = typeof VaDisplay;
        type VaDisplayDrmClass = typeof VaDisplayDrm;
        type VaDisplayWrappedClass = typeof VaDisplayWrapped;
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

    export default GstVa;
}

declare module 'gi://GstVa' {
    import GstVa10 from 'gi://GstVa?version=1.0';
    export default GstVa10;
}
// END
