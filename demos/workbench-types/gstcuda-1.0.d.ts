/// <reference path="./gstvideo-1.0.d.ts" />
/// <reference path="./gstbase-1.0.d.ts" />
/// <reference path="./gst-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gstgl-1.0.d.ts" />
/// <reference path="./cudagst-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GstCuda?version=1.0' {
    // Module dependencies
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GstGL from 'gi://GstGL?version=1.0';
    import type CudaGst from 'gi://CudaGst?version=1.0';

    export namespace GstCuda {
        /**
         * GstCuda-1.0
         */

        export namespace CudaGraphicsResourceType {
            export const $gtype: GObject.GType<CudaGraphicsResourceType>;
        }

        enum CudaGraphicsResourceType {
            NONE,
            GL_BUFFER,
            D3D11_RESOURCE,
        }
        /**
         * CUDA memory allocation method
         */

        /**
         * CUDA memory allocation method
         */
        export namespace CudaMemoryAllocMethod {
            export const $gtype: GObject.GType<CudaMemoryAllocMethod>;
        }

        enum CudaMemoryAllocMethod {
            UNKNOWN,
            /**
             * Memory allocated via cuMemAlloc or cuMemAllocPitch
             */
            MALLOC,
            /**
             * Memory allocated via cuMemCreate and cuMemMap
             */
            MMAP,
        }

        export namespace CudaQuarkId {
            export const $gtype: GObject.GType<CudaQuarkId>;
        }

        enum CudaQuarkId {
            GRAPHICS_RESOURCE,
            MAX,
        }
        /**
         * Name of the caps feature for indicating the use of #GstCudaMemory
         */
        const CAPS_FEATURE_MEMORY_CUDA_MEMORY: string;
        const CUDA_CONTEXT_TYPE: string;
        /**
         * Name of cuda memory type
         */
        const CUDA_MEMORY_TYPE_NAME: string;
        /**
         * Flag indicating that we should map the CUDA device memory
         * instead of to system memory.
         *
         * Combining #GST_MAP_CUDA with #GST_MAP_WRITE has the same semantics as though
         * you are writing to CUDA device/host memory.
         * Conversely, combining #GST_MAP_CUDA with
         * #GST_MAP_READ has the same semantics as though you are reading from
         * CUDA device/host memory
         */
        const MAP_CUDA: number;
        /**
         * Gets configured allocation method
         * @param config a buffer pool config
         */
        function buffer_pool_config_get_cuda_alloc_method(config: Gst.Structure): CudaMemoryAllocMethod;
        function buffer_pool_config_get_cuda_stream(config: Gst.Structure): CudaStream | null;
        /**
         * Sets allocation method
         * @param config a buffer pool config
         * @param method
         */
        function buffer_pool_config_set_cuda_alloc_method(config: Gst.Structure, method: CudaMemoryAllocMethod): void;
        /**
         * Sets `stream` on `config`
         * @param config a buffer pool config
         * @param stream a #GstCudaStream
         */
        function buffer_pool_config_set_cuda_stream(config: Gst.Structure, stream: CudaStream): void;
        function context_new_cuda_context(cuda_ctx: CudaContext): Gst.Context;
        /**
         * Creates new user token value
         * @returns user token value
         */
        function cuda_create_user_token(): number;
        /**
         * Perform the steps necessary for retrieving a #GstCudaContext from the
         * surrounding elements or from the application using the #GstContext mechanism.
         *
         * If the content of `cuda_ctx` is not %NULL, then no #GstContext query is
         * necessary for #GstCudaContext.
         * @param element the #GstElement running the query
         * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
         * @param cuda_ctx the resulting #GstCudaContext
         * @returns whether a #GstCudaContext exists in @cuda_ctx
         */
        function cuda_ensure_element_context(
            element: Gst.Element,
            device_id: number,
            cuda_ctx: CudaContext,
        ): [boolean, CudaContext];
        function cuda_handle_context_query(
            element: Gst.Element,
            query: Gst.Query,
            cuda_ctx?: CudaContext | null,
        ): boolean;
        /**
         * Helper function for implementing #GstElementClass.set_context() in
         * CUDA capable elements.
         *
         * Retrieves the #GstCudaContext in `context` and places the result in `cuda_ctx`.
         * @param element a #GstElement
         * @param context a #GstContext
         * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
         * @param cuda_ctx location of a #GstCudaContext
         * @returns whether the @cuda_ctx could be set successfully
         */
        function cuda_handle_set_context(
            element: Gst.Element,
            context: Gst.Context,
            device_id: number,
            cuda_ctx: CudaContext,
        ): [boolean, CudaContext];
        /**
         * Loads the cuda library
         * @returns %TRUE if the libcuda could be loaded %FALSE otherwise
         */
        function cuda_load_library(): boolean;
        /**
         * Ensures that the #GstCudaAllocator is initialized and ready to be used.
         */
        function cuda_memory_init_once(): void;
        function cuda_nvrtc_compile(source: string): string;
        function cuda_nvrtc_compile_cubin(source: string, device: number): string;
        /**
         * Loads the nvrtc library.
         * @returns %TRUE if the library could be loaded, %FALSE otherwise
         */
        function cuda_nvrtc_load_library(): boolean;
        /**
         * Check if `mem` is a cuda memory
         * @param mem A #GstMemory
         */
        function is_cuda_memory(mem: Gst.Memory): boolean;
        /**
         * CUDA memory transfer flags
         */

        /**
         * CUDA memory transfer flags
         */
        export namespace CudaMemoryTransfer {
            export const $gtype: GObject.GType<CudaMemoryTransfer>;
        }

        enum CudaMemoryTransfer {
            /**
             * the device memory needs downloading to the staging memory
             */
            DOWNLOAD,
            /**
             * the staging memory needs uploading to the device memory
             */
            UPLOAD,
            /**
             * the device memory needs synchronization
             */
            SYNC,
        }
        module CudaAllocator {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
        }

        /**
         * A #GstAllocator subclass for cuda memory
         */
        class CudaAllocator extends Gst.Allocator {
            static $gtype: GObject.GType<CudaAllocator>;

            // Constructors

            constructor(properties?: Partial<CudaAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Controls the active state of `allocator`. Default #GstCudaAllocator is
             * stateless and therefore active state is ignored, but subclass implementation
             * (e.g., #GstCudaPoolAllocator) will require explicit active state control
             * for its internal resource management.
             *
             * This method is conceptually identical to gst_buffer_pool_set_active method.
             * @param active the new active state
             */
            vfunc_set_active(active: boolean): boolean;

            // Methods

            alloc(context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo): Gst.Memory | null;
            // Conflicted with Gst.Allocator.alloc
            alloc(...args: never[]): any;
            /**
             * Allocates a new memory that wraps the given CUDA device memory.
             *
             * `info` must represent actual memory layout, in other words, offset, stride
             * and size fields of `info` should be matched with memory layout of `dev_ptr`
             *
             * By default, wrapped `dev_ptr` will be freed at the time when #GstMemory
             * is freed if `notify` is %NULL. Otherwise, if caller sets `notify,`
             * freeing `dev_ptr` is callers responsibility and default #GstCudaAllocator
             * will not free it.
             * @param context a #GstCudaContext
             * @param stream a #GstCudaStream
             * @param info a #GstVideoInfo
             * @param dev_ptr a CUdeviceptr CUDA device memory
             * @param notify Called with @user_data when the memory is freed
             * @returns a new #GstMemory
             */
            alloc_wrapped(
                context: CudaContext,
                stream: CudaStream | null,
                info: GstVideo.VideoInfo,
                dev_ptr: CudaGst.deviceptr,
                notify?: GLib.DestroyNotify | null,
            ): Gst.Memory;
            /**
             * Controls the active state of `allocator`. Default #GstCudaAllocator is
             * stateless and therefore active state is ignored, but subclass implementation
             * (e.g., #GstCudaPoolAllocator) will require explicit active state control
             * for its internal resource management.
             *
             * This method is conceptually identical to gst_buffer_pool_set_active method.
             * @param active the new active state
             * @returns %TRUE if active state of @allocator was successfully updated.
             */
            set_active(active: boolean): boolean;
            /**
             * Allocates new #GstMemory object with CUDA virtual memory.
             * @param context a #GstCudaContext
             * @param stream a #GstCudaStream
             * @param info a #GstVideoInfo
             * @param prop allocation property
             * @param granularity_flags allocation flags
             * @returns a newly allocated memory object or %NULL if allocation is not supported
             */
            virtual_alloc(
                context: CudaContext,
                stream: CudaStream,
                info: GstVideo.VideoInfo,
                prop: CudaGst.memAllocationProp,
                granularity_flags: CudaGst.memAllocationGranularity_flags,
            ): Gst.Memory | null;
        }

        module CudaBufferPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
        }

        class CudaBufferPool extends Gst.BufferPool {
            static $gtype: GObject.GType<CudaBufferPool>;

            // Fields

            context: CudaContext;

            // Constructors

            constructor(properties?: Partial<CudaBufferPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: CudaContext): CudaBufferPool;
            // Conflicted with Gst.BufferPool.new

            static ['new'](...args: never[]): any;
        }

        module CudaContext {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                cuda_device_id: number;
                cudaDeviceId: number;
                os_handle: boolean;
                osHandle: boolean;
                virtual_memory: boolean;
                virtualMemory: boolean;
            }
        }

        class CudaContext extends Gst.Object {
            static $gtype: GObject.GType<CudaContext>;

            // Properties

            get cuda_device_id(): number;
            get cudaDeviceId(): number;
            /**
             * OS handle supportability in virtual memory management
             */
            get os_handle(): boolean;
            /**
             * OS handle supportability in virtual memory management
             */
            get osHandle(): boolean;
            /**
             * Virtual memory management supportability
             */
            get virtual_memory(): boolean;
            /**
             * Virtual memory management supportability
             */
            get virtualMemory(): boolean;

            // Fields

            object: Gst.Object;

            // Constructors

            constructor(properties?: Partial<CudaContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](device_id: number): CudaContext;

            static new_wrapped(handler: CudaGst.context, device: CudaGst.device): CudaContext;

            // Static methods

            /**
             * Pops the current CUDA context from CPU thread
             * @param cuda_ctx
             */
            static pop(cuda_ctx: CudaGst.context): boolean;

            // Methods

            /**
             * Query whether `ctx` can access any memory which belongs to `peer` directly.
             * @param peer a #GstCudaContext
             * @returns %TRUE if @ctx can access @peer directly
             */
            can_access_peer(peer: CudaContext): boolean;
            /**
             * Get CUDA device context. Caller must not modify and/or destroy
             * returned device context.
             * @returns the `CUcontext` of @ctx
             */
            get_handle(): any | null;
            /**
             * Get required texture alignment by device
             * @returns the `CUcontext` of @ctx
             */
            get_texture_alignment(): number;
            /**
             * Pushes the given `ctx` onto the CPU thread's stack of current contexts.
             * The specified context becomes the CPU thread's current context,
             * so all CUDA functions that operate on the current context are affected.
             * @returns %TRUE if @ctx was pushed without error.
             */
            push(): boolean;
        }

        module CudaPoolAllocator {
            // Constructor properties interface

            interface ConstructorProps extends CudaAllocator.ConstructorProps {}
        }

        /**
         * A #GstCudaAllocator subclass for cuda memory pool
         */
        class CudaPoolAllocator extends CudaAllocator {
            static $gtype: GObject.GType<CudaPoolAllocator>;

            // Fields

            context: CudaContext;

            // Constructors

            constructor(properties?: Partial<CudaPoolAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                context: CudaContext,
                stream: CudaStream | null,
                info: GstVideo.VideoInfo,
            ): CudaPoolAllocator;

            static new_for_virtual_memory(
                context: CudaContext,
                stream: CudaStream | null,
                info: GstVideo.VideoInfo,
                prop: CudaGst.memAllocationProp,
                granularity_flags: CudaGst.memAllocationGranularity_flags,
            ): CudaPoolAllocator;

            // Methods

            /**
             * Acquires a #GstMemory from `allocator`. `memory` should point to a memory
             * location that can hold a pointer to the new #GstMemory.
             * @returns a #GstFlowReturn such as %GST_FLOW_FLUSHING when the allocator is inactive.
             */
            acquire_memory(): [Gst.FlowReturn, Gst.Memory];
        }

        type CudaAllocatorClass = typeof CudaAllocator;
        abstract class CudaAllocatorPrivate {
            static $gtype: GObject.GType<CudaAllocatorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CudaBufferPoolClass = typeof CudaBufferPool;
        abstract class CudaBufferPoolPrivate {
            static $gtype: GObject.GType<CudaBufferPoolPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CudaContextClass = typeof CudaContext;
        abstract class CudaContextPrivate {
            static $gtype: GObject.GType<CudaContextPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class CudaGraphicsResource {
            static $gtype: GObject.GType<CudaGraphicsResource>;

            // Fields

            cuda_context: CudaContext;
            graphics_context: Gst.Object;
            type: CudaGraphicsResourceType;
            resource: CudaGst.graphicsResource;
            flags: CudaGst.graphicsRegisterFlags;
            registered: boolean;
            mapped: boolean;

            // Constructors

            _init(...args: any[]): void;
        }

        class CudaMemory {
            static $gtype: GObject.GType<CudaMemory>;

            // Fields

            context: CudaContext;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Ensures that the #GstCudaAllocator is initialized and ready to be used.
             */
            static init_once(): void;

            // Methods

            /**
             * Exports virtual memory handle to OS specific handle.
             *
             * On Windows, `os_handle` should be pointer to HANDLE (i.e., void **), and
             * pointer to file descriptor (i.e., int *) on Linux.
             *
             * The returned `os_handle` is owned by `mem` and therefore caller shouldn't
             * close the handle.
             * @returns %TRUE if successful
             */
            ['export'](): [boolean, any];
            /**
             * Query allocation method
             */
            get_alloc_method(): CudaMemoryAllocMethod;
            /**
             * Gets CUDA stream object associated with `mem`
             * @returns a #GstCudaStream or %NULL if default CUDA stream is in use
             */
            get_stream(): CudaStream | null;
            /**
             * Creates CUtexObject with given parameters
             * @param plane the plane index
             * @param filter_mode filter mode
             * @returns %TRUE if successful
             */
            get_texture(plane: number, filter_mode: CudaGst.filter_mode): [boolean, CudaGst.texObject];
            /**
             * Gets back user data pointer stored via gst_cuda_memory_set_token_data()
             * @param token an user token
             * @returns user data pointer or %NULL
             */
            get_token_data(token: number): any | null;
            /**
             * Gets user data pointer stored via gst_cuda_allocator_alloc_wrapped()
             * @returns the user data pointer
             */
            get_user_data(): any | null;
            /**
             * Sets an opaque user data on a #GstCudaMemory
             * @param token an user token
             * @param data an user data
             */
            set_token_data(token: number, data?: any | null): void;
            /**
             * Performs synchronization if needed
             */
            sync(): void;
        }

        abstract class CudaMemoryPrivate {
            static $gtype: GObject.GType<CudaMemoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CudaPoolAllocatorClass = typeof CudaPoolAllocator;
        abstract class CudaPoolAllocatorPrivate {
            static $gtype: GObject.GType<CudaPoolAllocatorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class CudaStream {
            static $gtype: GObject.GType<CudaStream>;

            // Fields

            context: CudaContext;

            // Constructors

            constructor(context: CudaContext);
            _init(...args: any[]): void;

            static ['new'](context: CudaContext): CudaStream;

            // Methods

            /**
             * Get CUDA stream handle
             * @returns a `CUstream` handle of @stream or %NULL if @stream is %NULL
             */
            get_handle(): CudaGst.stream;
            /**
             * Increase the reference count of `stream`.
             * @returns @stream
             */
            ref(): CudaStream;
            /**
             * Decrease the reference count of `stream`.
             */
            unref(): void;
        }

        abstract class CudaStreamPrivate {
            static $gtype: GObject.GType<CudaStreamPrivate>;

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

    export default GstCuda;
}

declare module 'gi://GstCuda' {
    import GstCuda10 from 'gi://GstCuda?version=1.0';
    export default GstCuda10;
}
// END
