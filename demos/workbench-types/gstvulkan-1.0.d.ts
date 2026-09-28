/// <reference path="./vulkan-1.0.d.ts" />
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

declare module 'gi://GstVulkan?version=1.0' {
    // Module dependencies
    import type Vulkan from 'gi://Vulkan?version=1.0';
    import type GstVideo from 'gi://GstVideo?version=1.0';
    import type GstBase from 'gi://GstBase?version=1.0';
    import type Gst from 'gi://Gst?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GstVulkan {
        /**
         * GstVulkan-1.0
         */

        export namespace VulkanBarrierFlags {
            export const $gtype: GObject.GType<VulkanBarrierFlags>;
        }

        enum VulkanBarrierFlags {
            NONE,
        }

        export namespace VulkanBarrierType {
            export const $gtype: GObject.GType<VulkanBarrierType>;
        }

        enum VulkanBarrierType {
            /**
             * no barrier type
             */
            NONE,
            TYPE_MEMORY,
            TYPE_BUFFER,
            TYPE_IMAGE,
        }
        class VulkanError extends GLib.Error {
            static $gtype: GObject.GType<VulkanError>;

            // Static fields

            /**
             * undetermined error
             */
            static FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
            /**
             * if `result` indicates an error condition, fills out #GError with details of
             * the error
             * @param result a VkResult
             * @param format the printf-like format to write into the #GError
             * @param ___ arguments for @format
             */
            static to_g_error(result: Vulkan.Result, format: string, ___: any[]): [Vulkan.Result, GLib.Error | null];
        }

        export namespace VulkanFormatScaling {
            export const $gtype: GObject.GType<VulkanFormatScaling>;
        }

        enum VulkanFormatScaling {
            /**
             * [0, 2^n - 1] -> [0.0, 1.0]
             */
            UNORM,
            /**
             * [-2^(n-1), 2^(n-1) - 1] -> [-1.0, 1.0]
             */
            SNORM,
            /**
             * [0, 2^n - 1] -> [0.0, float(2^n - 1)]
             */
            USCALED,
            /**
             * [-2^(n-1), 2^(n-1) - 1] -> [float(-2^(n-1)), float(2^(n-1) - 1)]
             */
            SSCALED,
            /**
             * [0, 2^n - 1] -> [0, 2^n - 1]
             */
            UINT,
            /**
             * [-2^(n-1), 2^(n-1) - 1] -> [-2^(n-1), 2^(n-1) - 1]
             */
            SINT,
            /**
             * `GST_VULKAN_FORMAT_SCALING_UNORM` but the first three components are gamma corrected for the sRGB colour space.
             */
            SRGB,
        }

        export namespace VulkanHandleType {
            export const $gtype: GObject.GType<VulkanHandleType>;
        }

        enum VulkanHandleType {
            /**
             * descripter set layout
             */
            DESCRIPTOR_SET_LAYOUT,
            /**
             * pipeline layout
             */
            PIPELINE_LAYOUT,
            /**
             * pipeline
             */
            PIPELINE,
            /**
             * render pass
             */
            RENDER_PASS,
            /**
             * sampler
             */
            SAMPLER,
            /**
             * framebuffer
             */
            FRAMEBUFFER,
            /**
             * shader
             */
            SHADER,
            /**
             * video session
             */
            VIDEO_SESSION,
            /**
             * video session parameters
             */
            VIDEO_SESSION_PARAMETERS,
            /**
             * sampler with YCBCR conversion
             */
            SAMPLER_YCBCR_CONVERSION,
        }
        /**
         * The type of video operation.
         */

        /**
         * The type of video operation.
         */
        export namespace VulkanVideoOperation {
            export const $gtype: GObject.GType<VulkanVideoOperation>;
        }

        enum VulkanVideoOperation {
            /**
             * decode operation
             */
            DECODE,
            /**
             * encode operation
             */
            ENCODE,
            /**
             * unknown
             */
            UNKNOWN,
        }
        class VulkanWindowError extends GLib.Error {
            static $gtype: GObject.GType<VulkanWindowError>;

            // Static fields

            /**
             * failed
             */
            static FAILED: number;
            /**
             * old libraries
             */
            static OLD_LIBS: number;
            /**
             * resource unavailable
             */
            static RESOURCE_UNAVAILABLE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string;
        const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string;
        const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string;
        const VULKAN_DEVICE_CONTEXT_TYPE_STR: string;
        const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string;
        const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string;
        const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string;
        const VULKAN_MAX_COMPONENTS: number;
        const VULKAN_MEMORY_ALLOCATOR_NAME: string;
        const VULKAN_QUEUE_CONTEXT_TYPE_STR: string;
        const VULKAN_SWAPPER_VIDEO_FORMATS: string;
        function context_get_vulkan_device(context: Gst.Context, device: VulkanDevice): boolean;
        function context_get_vulkan_display(context: Gst.Context, display: VulkanDisplay): boolean;
        function context_get_vulkan_instance(context: Gst.Context, instance: VulkanInstance): boolean;
        function context_get_vulkan_queue(context: Gst.Context, queue: VulkanQueue): boolean;
        /**
         * Sets `device` on `context`
         * @param context a #GstContext
         * @param device a #GstVulkanDevice
         */
        function context_set_vulkan_device(context: Gst.Context, device: VulkanDevice): void;
        /**
         * Sets `display` on `context`
         * @param context a #GstContext
         * @param display a #GstVulkanDisplay
         */
        function context_set_vulkan_display(context: Gst.Context, display: VulkanDisplay): void;
        /**
         * Sets `instance` on `context`
         * @param context a #GstContext
         * @param instance a #GstVulkanInstance
         */
        function context_set_vulkan_instance(context: Gst.Context, instance: VulkanInstance): void;
        /**
         * Sets `queue` on `context`
         * @param context a #GstContext
         * @param queue a #GstVulkanQueue
         */
        function context_set_vulkan_queue(context: Gst.Context, queue: VulkanQueue): void;
        function is_vulkan_buffer_memory(mem: Gst.Memory): boolean;
        function is_vulkan_image_memory(mem: Gst.Memory): boolean;
        function is_vulkan_memory(mem: Gst.Memory): boolean;
        /**
         * Allocate a new #GstVulkanBufferMemory.
         * @param device a #GstVulkanDevice
         * @param size size of the new buffer
         * @param usage buffer usage flags
         * @param mem_prop_flags memory properties flags for the backing memory
         * @returns a #GstMemory object backed by a vulkan buffer          backed by vulkan device memory
         */
        function vulkan_buffer_memory_alloc(
            device: VulkanDevice,
            size: number,
            usage: Vulkan.BufferUsageFlags,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        /**
         * Allocate a new #GstVulkanBufferMemory.
         * @param device a #GstVulkanDevice
         * @param buffer_info the VkBufferCreateInfo structure
         * @param mem_prop_flags memory properties flags for the backing memory
         * @returns a #GstMemory object backed by a vulkan buffer          backed by vulkan device memory
         */
        function vulkan_buffer_memory_alloc_with_buffer_info(
            device: VulkanDevice,
            buffer_info: Vulkan.BufferCreateInfo,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        /**
         * Initializes the Vulkan buffer memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
         */
        function vulkan_buffer_memory_init_once(): void;
        /**
         * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
         * @param device a #GstVulkanDevice
         * @param buffer a `VkBuffer`
         * @param usage usage flags of @buffer
         * @param user_data user data to call @notify with
         * @param notify a #GDestroyNotify called when @buffer is no longer in use
         * @returns a #GstMemory object backed by a vulkan device memory
         */
        function vulkan_buffer_memory_wrapped(
            device: VulkanDevice,
            buffer: Vulkan.Buffer,
            usage: Vulkan.BufferUsageFlags,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): Gst.Memory;
        function vulkan_create_shader(device: VulkanDevice, code: string, size: number): VulkanHandle;
        function vulkan_display_type_to_extension_string(type: VulkanDisplayType): string | null;
        /**
         * Perform the steps necessary for retrieving a #GstVulkanInstance and
         * (optionally) an #GstVulkanDisplay from the surrounding elements or from
         * the application using the #GstContext mechanism.
         *
         * If the contents of `display_ptr` or `instance_ptr` are not %NULL, then no
         * #GstContext query is necessary and no #GstVulkanInstance or #GstVulkanDisplay
         * retrieval is performed.
         * @param element a #GstElement
         * @param display_ptr the resulting #GstVulkanDisplay
         * @param instance_ptr the resulting #GstVulkanInstance
         * @returns whether a #GstVulkanInstance exists in @instance_ptr and if          @display_ptr is not %NULL, whether a #GstVulkanDisplay exists in          @display_ptr
         */
        function vulkan_ensure_element_data(
            element: Gst.Element,
            display_ptr: VulkanDisplay | null,
            instance_ptr: VulkanInstance,
        ): [boolean, VulkanDisplay | null, VulkanInstance];
        function vulkan_error_quark(): GLib.Quark;
        function vulkan_format_get_aspect(format: Vulkan.Format): number;
        function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo | null;
        function vulkan_format_to_video_format(vk_format: Vulkan.Format): GstVideo.VideoFormat;
        function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView;
        /**
         * Create a new #GstVulkanImageView with a specific `create_info`.
         * @param image a #GstVulkanImageMemory
         * @param create_info a VkImageViewCreateInfo
         * @returns a #GstVulkanImageView for @image matching the                           original layout and format of @image
         */
        function vulkan_get_or_create_image_view_with_info(
            image: VulkanImageMemory,
            create_info?: Vulkan.ImageViewCreateInfo | null,
        ): VulkanImageView;
        /**
         * Performs the steps necessary for executing a context query including
         * posting a message for the application to respond.
         * @param element a #GstElement
         * @param context_type the context type to query for
         */
        function vulkan_global_context_query(element: Gst.Element, context_type: string): void;
        function vulkan_handle_context_query(
            element: Gst.Element,
            query: Gst.Query,
            display?: VulkanDisplay | null,
            instance?: VulkanInstance | null,
            device?: VulkanDevice | null,
        ): boolean;
        /**
         * Helper function for implementing #GstElementClass.set_context() in
         * Vulkan capable elements.
         *
         * Retrieve's the #GstVulkanDisplay or #GstVulkanInstance in `context` and places
         * the result in `display` or `instance` respectively.
         * @param element a #GstElement
         * @param context a #GstContext
         * @param display location of a #GstVulkanDisplay
         * @param instance location of a #GstVulkanInstance
         * @returns whether the @display or @instance could be set successfully
         */
        function vulkan_handle_set_context(
            element: Gst.Element,
            context: Gst.Context,
            display: VulkanDisplay | null,
            instance: VulkanInstance,
        ): [boolean, VulkanDisplay | null, VulkanInstance];
        /**
         * Allocated a new #GstVulkanImageMemory.
         * @param device a #GstVulkanDevice
         * @param format the VkFormat for the new image
         * @param width width for the new image
         * @param height height for the new image
         * @param tiling tiling for the new image
         * @param usage usage flags for the new image
         * @param mem_prop_flags VkDeviceMemory property flags for the new image
         * @returns a #GstMemory object backed by a vulkan device memory
         */
        function vulkan_image_memory_alloc(
            device: VulkanDevice,
            format: Vulkan.Format,
            width: number,
            height: number,
            tiling: Vulkan.ImageTiling,
            usage: Vulkan.ImageUsageFlags,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        function vulkan_image_memory_alloc_with_image_info(
            device: VulkanDevice,
            image_info: Vulkan.ImageCreateInfo,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        /**
         * Initializes the Vulkan image memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
         */
        function vulkan_image_memory_init_once(): void;
        function vulkan_image_memory_wrapped(
            device: VulkanDevice,
            image: Vulkan.Image,
            format: Vulkan.Format,
            width: number,
            height: number,
            tiling: Vulkan.ImageTiling,
            usage: Vulkan.ImageUsageFlags,
            user_data?: any | null,
        ): Gst.Memory;
        /**
         * Performs the steps necessary for executing a context query between only
         * other elements in the pipeline
         * @param element a #GstElement
         * @param context_type the context type to query for
         */
        function vulkan_local_context_query(element: Gst.Element, context_type: string): Gst.Query;
        /**
         * Allocated a new #GstVulkanMemory.
         * @param device a #GstVulkanDevice
         * @param memory_type_index the Vulkan memory type index
         * @param params a #GstAllocationParams
         * @param size the size to allocate
         * @param mem_prop_flags
         * @returns a #GstMemory object backed by a vulkan device memory
         */
        function vulkan_memory_alloc(
            device: VulkanDevice,
            memory_type_index: number,
            params: Gst.AllocationParams,
            size: number,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        function vulkan_memory_find_memory_type_index_with_requirements(
            device: VulkanDevice,
            req: Vulkan.MemoryRequirements,
            properties: Vulkan.MemoryPropertyFlags,
        ): [boolean, number];
        function vulkan_memory_heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
        /**
         * Initializes the Vulkan memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other #GstVulkanMemory operation.
         */
        function vulkan_memory_init_once(): void;
        function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
        function vulkan_present_mode_to_string(present_mode: Vulkan.PresentModeKHR): string;
        function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean;
        function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string;
        /**
         * A #GstVulkanTrashNotify implementation for unreffing a #GstMiniObject when the
         * associated #GstVulkanFence is signalled
         * @param device the #GstVulkanDevice
         * @param user_data the #GstMiniObject
         */
        function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
        /**
         * A #GstVulkanTrashNotify implementation for unreffing a #GstObject when the
         * associated #GstVulkanFence is signalled
         * @param device the #GstVulkanDevice
         * @param user_data the #GstMiniObject
         */
        function vulkan_trash_object_unref(device: VulkanDevice, user_data?: any | null): void;
        function vulkan_window_error_quark(): GLib.Quark;
        interface VulkanDeviceForEachQueueFunc {
            (device: VulkanDevice, queue: VulkanQueue): boolean;
        }
        interface VulkanHandleDestroyNotify {
            (handle: VulkanHandle): void;
        }
        interface VulkanImageMemoryFindViewFunc {
            (view: VulkanImageView): boolean;
        }
        interface VulkanTrashListAdd {
            (trash_list: VulkanTrashList, trash: VulkanTrash): boolean;
        }
        interface VulkanTrashListGC {
            (trash_list: VulkanTrashList): void;
        }
        interface VulkanTrashListWait {
            (trash_list: VulkanTrashList, timeout: number): boolean;
        }
        interface VulkanTrashNotify {
            (device: VulkanDevice): void;
        }

        export namespace VulkanDisplayType {
            export const $gtype: GObject.GType<VulkanDisplayType>;
        }

        enum VulkanDisplayType {
            /**
             * no display
             */
            NONE,
            /**
             * XCB display
             */
            XCB,
            /**
             * wayland display
             */
            WAYLAND,
            /**
             * cocoa display for macOS
             */
            COCOA,
            /**
             * ios display
             */
            IOS,
            /**
             * win32 display
             */
            WIN32,
            ANDROID,
            /**
             * any display type
             */
            ANY,
        }

        export namespace VulkanFormatFlags {
            export const $gtype: GObject.GType<VulkanFormatFlags>;
        }

        enum VulkanFormatFlags {
            /**
             * is a YUV format
             */
            YUV,
            /**
             * is a RGB format
             */
            RGB,
            /**
             * has an alpha channel
             */
            ALPHA,
            /**
             * data is stored in little-endiate byte order
             */
            LE,
            /**
             * data is stored complex and cannot be read/write only using the information in the #GstVulkanFormatInfo
             */
            COMPLEX,
        }
        module VulkanBufferMemoryAllocator {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
        }

        /**
         * Opaque #GstVulkanBufferMemoryAllocator struct
         */
        class VulkanBufferMemoryAllocator extends Gst.Allocator {
            static $gtype: GObject.GType<VulkanBufferMemoryAllocator>;

            // Constructors

            constructor(properties?: Partial<VulkanBufferMemoryAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module VulkanBufferPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
        }

        /**
         * Opaque #GstVulkanBufferPool struct
         */
        class VulkanBufferPool extends Gst.BufferPool {
            static $gtype: GObject.GType<VulkanBufferPool>;

            // Fields

            bufferpool: Gst.BufferPool;
            device: VulkanDevice;

            // Constructors

            constructor(properties?: Partial<VulkanBufferPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](device: VulkanDevice): VulkanBufferPool;
            // Conflicted with Gst.BufferPool.new

            static ['new'](...args: never[]): any;

            // Static methods

            /**
             * Sets the `usage` of the buffers to setup.
             * @param config the #GstStructure with the pool's configuration.
             * @param usage The Vulkan buffer usage flags.
             * @param mem_properties
             */
            static config_set_allocation_params(
                config: Gst.Structure,
                usage: Vulkan.BufferUsageFlags,
                mem_properties: Vulkan.MemoryPropertyFlags,
            ): void;
        }

        module VulkanCommandPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        class VulkanCommandPool extends Gst.Object {
            static $gtype: GObject.GType<VulkanCommandPool>;

            // Fields

            queue: VulkanQueue;

            // Constructors

            constructor(properties?: Partial<VulkanCommandPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            create(): VulkanCommandBuffer;
            get_queue(): VulkanQueue;
            /**
             * This should be called to ensure no other thread will attempt to access
             * the pool's internal resources.  Any modification of any of the allocated
             * #GstVulkanCommandBuffer's need to be encapsulated in a
             * gst_vulkan_command_pool_lock()/gst_vulkan_command_pool_unlock() pair to meet
             * the Vulkan API requirements that host access to the command pool is
             * externally synchronised.
             */
            lock(): void;
            /**
             * See the documentation for gst_vulkan_command_pool_lock() for when you would
             * need to use this function.
             */
            unlock(): void;
        }

        module VulkanDecoder {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        class VulkanDecoder extends Gst.Object {
            static $gtype: GObject.GType<VulkanDecoder>;

            // Fields

            queue: VulkanQueue;
            codec: number;
            dedicated_dpb: boolean;
            layered_dpb: boolean;

            // Constructors

            constructor(properties?: Partial<VulkanDecoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Appends slices's `data` bitstream into `pic` internal input buffer.
             * @param pic a #GstVulkanDecoderPicture
             * @param data slice's bitstream data
             * @param size the size of @data
             * @param add_startcode whether add start code
             * @returns whether the slice @data were added.
             */
            append_slice(pic: VulkanDecoderPicture, data: number, size: number, add_startcode: boolean): boolean;
            /**
             * Gets the Vulkan decoding capabilities of the current video session.
             * @returns whether the capabilities were fetched correctly.
             */
            caps(): [boolean, VulkanVideoCapabilities];
            /**
             * Instantiates an internal Vulkan image pool for driver decoders whose output
             * buffers cannot be used as DPB buffers.
             * @param caps the #GstCaps of the DP
             * @returns whether the pool was created.
             */
            create_dpb_pool(caps: Gst.Caps): boolean;
            /**
             * Decodes `pic`.
             * @param pic a #GstVulkanDecoderPicture
             * @returns whether @pic was decoded correctly. It might fill @error.
             */
            decode(pic: VulkanDecoderPicture): boolean;
            /**
             * Initializes the decoder at driver level and set its DPB slots to the inactive
             * state.
             * @returns whether flush was successful
             */
            flush(): boolean;
            is_started(): boolean;
            /**
             * Creates a #GstVulkanImageView for `buf` for decoding, with the internal Ycbcr
             * sampler, if available.
             * @param buf a #GstBuffer
             * @param is_out if @buf is for output or for DPB
             * @returns the #GstVulkanImageView.
             */
            picture_create_view(buf: Gst.Buffer, is_out: boolean): VulkanImageView | null;
            /**
             * Initializes `pic` with `out` as output buffer.
             * @param pic a #GstVulkanDecoderPicture
             * @param out the #GstBuffer to use as output
             * @returns whether @pic was initialized.
             */
            picture_init(pic: VulkanDecoderPicture, out: Gst.Buffer): boolean;
            profile_caps(): Gst.Caps;
            /**
             * It creates a Vulkan video session for the given `profile`. If an error occurs,
             * `error` is filled.
             * @param profile a #GstVulkanVideoProfile
             * @returns whether the video decoder has started correctly.
             */
            start(profile: VulkanVideoProfile): boolean;
            /**
             * Destroys the video session created at gst_vulkan_decoder_start() and clean up
             * the internal objects.
             * @returns whether the decoder stopped correctly.
             */
            stop(): boolean;
            /**
             * Update the internal codec parameters for the current video session.
             * @param params a GstVulkanDecoderParameters union
             * @returns whether the @params were updated internally. It might fill @error.
             */
            update_video_session_parameters(params: VulkanDecoderParameters): boolean;
            /**
             * Update the internal Ycbcr sampler for the output images.
             * @param range whether color components are encoded using the full range of     numerical values or whether values are reserved for headroom and foot     room.
             * @param xloc x location of downsampled chroma component samples relative to the luma     samples.
             * @param yloc y location of downsampled chroma component samples relative to the luma     samples.
             * @returns whether the sampler was updated.
             */
            update_ycbcr_sampler(
                range: Vulkan.SamplerYcbcrRange,
                xloc: Vulkan.ChromaLocation,
                yloc: Vulkan.ChromaLocation,
            ): boolean;
            /**
             * Waits indefinitely for decoding fences to signal, and queries the operation
             * result if available.
             * @returns whether the wait succeeded in waiting for all the fences to be     freed.
             */
            wait(): boolean;
        }

        module VulkanDescriptorCache {
            // Constructor properties interface

            interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
        }

        class VulkanDescriptorCache extends VulkanHandlePool {
            static $gtype: GObject.GType<VulkanDescriptorCache>;

            // Fields

            pool: VulkanDescriptorPool;

            // Constructors

            constructor(properties?: Partial<VulkanDescriptorCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](pool: VulkanDescriptorPool, layouts: VulkanHandle[]): VulkanDescriptorCache;

            // Methods

            acquire(): VulkanDescriptorSet;
            // Conflicted with GstVulkan.VulkanHandlePool.acquire
            acquire(...args: never[]): any;
        }

        module VulkanDescriptorPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        class VulkanDescriptorPool extends Gst.Object {
            static $gtype: GObject.GType<VulkanDescriptorPool>;

            // Fields

            device: VulkanDevice;

            // Constructors

            constructor(properties?: Partial<VulkanDescriptorPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_wrapped(
                device: VulkanDevice,
                pool: Vulkan.DescriptorPool,
                max_sets: number,
            ): VulkanDescriptorPool;

            // Methods

            create(layouts: VulkanHandle[]): VulkanDescriptorSet;
            get_device(): VulkanDevice;
            get_max_sets(): number;
        }

        module VulkanDevice {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                instance: VulkanInstance;
                physical_device: VulkanPhysicalDevice;
                physicalDevice: VulkanPhysicalDevice;
            }
        }

        class VulkanDevice extends Gst.Object {
            static $gtype: GObject.GType<VulkanDevice>;

            // Properties

            get instance(): VulkanInstance;
            get physical_device(): VulkanPhysicalDevice;
            get physicalDevice(): VulkanPhysicalDevice;

            // Constructors

            constructor(properties?: Partial<VulkanDevice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](physical_device: VulkanPhysicalDevice): VulkanDevice;

            static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice;

            // Static methods

            /**
             * If a #GstVulkanDevice is requested in `query,` sets `device` as the reply.
             *
             * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
             * for a #GstVulkanDevice.
             * @param element a #GstElement
             * @param query a #GstQuery of type #GST_QUERY_CONTEXT
             * @param device the #GstVulkanDevice
             */
            static handle_context_query(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean;
            /**
             * Attempt to retrieve a #GstVulkanDevice using #GST_QUERY_CONTEXT from the
             * surrounding elements of `element`.
             * @param element a #GstElement
             * @param device a #GstVulkanDevice
             */
            static run_context_query(element: Gst.Element, device: VulkanDevice): [boolean, VulkanDevice];

            // Methods

            create_fence(): VulkanFence | null;
            /**
             * Disable an Vulkan extension by `name`.  Disabling an extension will only have
             * an effect before the call to gst_vulkan_device_open().
             * @param name extension name to enable
             * @returns whether the Vulkan extension could be disabled.
             */
            disable_extension(name: string): boolean;
            /**
             * Enable an Vulkan extension by `name`.  Enabling an extension will
             * only have an effect before the call to gst_vulkan_device_open().
             * @param name extension name to enable
             * @returns whether the Vulkan extension could be enabled.
             */
            enable_extension(name: string): boolean;
            /**
             * Enable an Vulkan layer by `name`.  Enabling a layer will
             * only have an effect before the call to gst_vulkan_device_open().
             * @param name layer name to enable
             * @returns whether the Vulkan layer could be enabled.
             */
            enable_layer(name: string): boolean;
            /**
             * Iterate over each queue family available on #GstVulkanDevice
             * @param func a #GstVulkanDeviceForEachQueueFunc to run for each #GstVulkanQueue
             */
            foreach_queue(func: VulkanDeviceForEachQueueFunc): void;
            get_instance(): VulkanInstance | null;
            /**
             * Performs `vkGetDeviceProcAddr()` with `device` and `name`
             * @param name name of the function to retrieve
             * @returns the function pointer for @name or %NULL
             */
            get_proc_address(name: string): any | null;
            get_queue(queue_family: number, queue_i: number): VulkanQueue;
            is_extension_enabled(name: string): boolean;
            is_layer_enabled(name: string): boolean;
            /**
             * Attempts to create the internal `VkDevice` object.
             * @returns whether a vulkan device could be created
             */
            open(): boolean;
            queue_family_indices(): number[];
            /**
             * Select a compatible queue from the `device` supporting the `expected_flags`.
             * @param expected_flags a VkQueueFlagBits
             * @returns a #GstVulkanQueue for @queue matching the                           @expected_flags
             */
            select_queue(expected_flags: Vulkan.QueueFlagBits): VulkanQueue;
        }

        module VulkanDisplay {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        /**
         * The contents of a #GstVulkanDisplay are private and should only be accessed
         * through the provided API
         */
        class VulkanDisplay extends Gst.Object {
            static $gtype: GObject.GType<VulkanDisplay>;

            // Constructors

            constructor(properties?: Partial<VulkanDisplay.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](instance: VulkanInstance): VulkanDisplay;

            static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay;

            // Static methods

            /**
             * This function will read the `GST_VULKAN_WINDOW` environment variable for
             * a user choice or choose the first supported implementation.
             *
             * gst_vulkan_instance_fill_info() must have been called prior to this function.
             * @param instance a #GstVulkanInstance
             */
            static choose_type(instance: VulkanInstance): VulkanDisplayType;
            /**
             * If a #GstVulkanDisplay is requested in `query,` sets `device` as the reply.
             *
             * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
             * for a #GstVulkanDisplay.
             * @param element a #GstElement
             * @param query a #GstQuery of type #GST_QUERY_CONTEXT
             * @param display the #GstVulkanDisplay
             */
            static handle_context_query(
                element: Gst.Element,
                query: Gst.Query,
                display?: VulkanDisplay | null,
            ): boolean;
            /**
             * Attempt to retrieve a #GstVulkanDisplay using #GST_QUERY_CONTEXT from the
             * surrounding elements of `element`.
             * @param element a #GstElement
             * @param display a #GstVulkanDisplay
             */
            static run_context_query(element: Gst.Element, display: VulkanDisplay): [boolean, VulkanDisplay];

            // Virtual methods

            /**
             * create a window
             */
            vfunc_create_window(): VulkanWindow | null;
            /**
             * get the native handle to the display
             */
            vfunc_get_handle(): any | null;

            // Methods

            create_window(): VulkanWindow | null;
            /**
             * Execute `compare_func` over the list of windows stored by `display`.  The
             * first argument to `compare_func` is the #GstVulkanWindow being checked and the
             * second argument is `data`.
             * @param data some data to pass to @compare_func
             * @param compare_func a comparison function to run
             * @returns The first #GstVulkanWindow that                                      @compare_func matches, or %NULL
             */
            find_window(data: any | null, compare_func: GLib.CompareFunc): VulkanWindow | null;
            get_handle(): any | null;
            get_handle_type(): VulkanDisplayType;
            remove_window(window: VulkanWindow): boolean;
        }

        module VulkanFenceCache {
            // Constructor properties interface

            interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
        }

        class VulkanFenceCache extends VulkanHandlePool {
            static $gtype: GObject.GType<VulkanFenceCache>;

            // Constructors

            constructor(properties?: Partial<VulkanFenceCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](device: VulkanDevice): VulkanFenceCache;
        }

        module VulkanFullScreenQuad {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        class VulkanFullScreenQuad extends Gst.Object {
            static $gtype: GObject.GType<VulkanFullScreenQuad>;

            // Fields

            queue: VulkanQueue;
            descriptor_cache: VulkanDescriptorCache;
            cmd_pool: VulkanCommandPool;
            trash_list: VulkanTrashList;

            // Constructors

            constructor(properties?: Partial<VulkanFullScreenQuad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](queue: VulkanQueue): VulkanFullScreenQuad;

            // Methods

            /**
             * Helper function for creation and submission of a command buffer that draws
             * a full screen quad.  If you need to add other things to the command buffer,
             * create the command buffer manually and call
             * gst_vulkan_full_screen_quad_prepare_draw(),
             * gst_vulkan_full_screen_quad_fill_command_buffer() and
             * gst_vulkan_full_screen_quad_submit() instead.
             * @returns whether the draw was successful
             */
            draw(): boolean;
            /**
             * Enables blending of the input image to the output image.
             *
             * See also: gst_vulkan_full_screen_quad_set_blend_operation() and
             * gst_vulkan_full_screen_quad_set_blend_factors().
             * @param enable_blend whether to enable blending
             */
            enable_blend(enable_blend: boolean): void;
            enable_clear(enable_clear: boolean): void;
            fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
            get_last_fence(): VulkanFence;
            prepare_draw(fence: VulkanFence): boolean;
            /**
             * You need to enable blend with gst_vulkan_full_screen_quad_enable_blend().
             *
             * See also: gst_vulkan_full_screen_quad_set_blend_operation().
             * @param src_blend_factor the `VkBlendFactor` for the source image for the colour                    components (RGB)
             * @param dst_blend_factor the `VkBlendFactor` for the destination image for the                    colour components (RGB)
             * @param src_alpha_blend_factor the `VkBlendFactor` for the source image for the                          alpha component.
             * @param dst_alpha_blend_factor the `VkBlendFactor` for the destination image for                          the alpha component.
             */
            set_blend_factors(
                src_blend_factor: Vulkan.BlendFactor,
                dst_blend_factor: Vulkan.BlendFactor,
                src_alpha_blend_factor: Vulkan.BlendFactor,
                dst_alpha_blend_factor: Vulkan.BlendFactor,
            ): void;
            /**
             * You need to enable blend with gst_vulkan_full_screen_quad_enable_blend().
             *
             * See also: gst_vulkan_full_screen_quad_set_blend_factors().
             * @param colour_blend_op the `VkBlendOp` to use for blending colour (RGB) values
             * @param alpha_blend_op the `VkBlendOp` to use for blending alpha values
             */
            set_blend_operation(colour_blend_op: Vulkan.BlendOp, alpha_blend_op: Vulkan.BlendOp): void;
            /**
             * See also gst_vulkan_full_screen_quad_set_vertex_buffer()
             * @param indices the index data.  Must be a #GstVulkanBufferMemory
             * @param n_indices number of indices in @indices
             * @returns whether the index data could be set
             */
            set_index_buffer(indices: Gst.Memory, n_indices: number): boolean;
            set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean;
            set_input_buffer(buffer: Gst.Buffer): boolean;
            set_output_buffer(buffer: Gst.Buffer): boolean;
            set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean;
            set_uniform_buffer(uniforms: Gst.Memory): boolean;
            set_vertex_buffer(vertices: Gst.Memory): boolean;
            submit(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
        }

        module VulkanHandlePool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        abstract class VulkanHandlePool extends Gst.Object {
            static $gtype: GObject.GType<VulkanHandlePool>;

            // Fields

            device: VulkanDevice;
            outstanding: any[];
            available: any[];

            // Constructors

            constructor(properties?: Partial<VulkanHandlePool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * acquire a handle for usage
             */
            vfunc_acquire(): any | null;
            /**
             * allocate a new handle
             */
            vfunc_alloc(): any | null;
            /**
             * free a handle
             * @param handle
             */
            vfunc_free(handle?: any | null): void;
            /**
             * release a handle for possible reuse at the next call to `acquire`
             * @param handle
             */
            vfunc_release(handle?: any | null): void;

            // Methods

            acquire(): any | null;
            alloc(): any | null;
            release(handle?: any | null): void;
        }

        module VulkanImageBufferPool {
            // Constructor properties interface

            interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
        }

        class VulkanImageBufferPool extends Gst.BufferPool {
            static $gtype: GObject.GType<VulkanImageBufferPool>;

            // Fields

            bufferpool: Gst.BufferPool;
            device: VulkanDevice;

            // Constructors

            constructor(properties?: Partial<VulkanImageBufferPool.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](device: VulkanDevice): VulkanImageBufferPool;
            // Conflicted with Gst.BufferPool.new

            static ['new'](...args: never[]): any;

            // Static methods

            /**
             * Sets the `usage` and `mem_properties` of the images to setup.
             * @param config the #GstStructure with the pool's configuration.
             * @param usage The Vulkan image usage flags.
             * @param mem_properties Vulkan memory property flags.
             * @param initial_layout Initial Vulkan image layout.
             * @param initial_access Access flags for the layout transition if @initial_layout is not VK_IMAGE_LAYOUT_UNDEFINED or VK_IMAGE_LAYOUT_PREINITIALIZED.
             */
            static config_set_allocation_params(
                config: Gst.Structure,
                usage: Vulkan.ImageUsageFlags,
                mem_properties: Vulkan.MemoryPropertyFlags,
                initial_layout: Vulkan.ImageLayout,
                initial_access: number,
            ): void;
            /**
             * Decode `caps` are used when the buffers are going to be used either as decoded
             * dest or DPB images.
             * @param config the #GstStructure with the pool's configuration.
             * @param caps Upstream decode caps.
             */
            static config_set_decode_caps(config: Gst.Structure, caps: Gst.Caps): void;
        }

        module VulkanImageMemoryAllocator {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
        }

        /**
         * Opaque #GstVulkanImageMemoryAllocator struct
         */
        class VulkanImageMemoryAllocator extends Gst.Allocator {
            static $gtype: GObject.GType<VulkanImageMemoryAllocator>;

            // Constructors

            constructor(properties?: Partial<VulkanImageMemoryAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module VulkanInstance {
            // Signal callback interfaces

            interface CreateDevice {
                (): VulkanDevice;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                requested_api_major: number;
                requestedApiMajor: number;
                requested_api_minor: number;
                requestedApiMinor: number;
            }
        }

        class VulkanInstance extends Gst.Object {
            static $gtype: GObject.GType<VulkanInstance>;

            // Properties

            get requested_api_major(): number;
            set requested_api_major(val: number);
            get requestedApiMajor(): number;
            set requestedApiMajor(val: number);
            get requested_api_minor(): number;
            set requested_api_minor(val: number);
            get requestedApiMinor(): number;
            set requestedApiMinor(val: number);

            // Fields

            n_physical_devices: number;

            // Constructors

            constructor(properties?: Partial<VulkanInstance.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VulkanInstance;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'create-device', callback: (_source: this) => VulkanDevice): number;
            connect_after(signal: 'create-device', callback: (_source: this) => VulkanDevice): number;
            emit(signal: 'create-device'): void;

            // Static methods

            /**
             * If a #GstVulkanInstance is requested in `query,` sets `instance` as the reply.
             *
             * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
             * for a #GstVulkanInstance.
             * @param element a #GstElement
             * @param query a #GstQuery of type #GST_QUERY_CONTEXT
             * @param instance the #GstVulkanInstance
             */
            static handle_context_query(
                element: Gst.Element,
                query: Gst.Query,
                instance?: VulkanInstance | null,
            ): boolean;
            /**
             * Attempt to retrieve a #GstVulkanInstance using #GST_QUERY_CONTEXT from the
             * surrounding elements of `element`.
             * @param element a #GstElement
             * @param instance a #GstVulkanInstance
             */
            static run_context_query(element: Gst.Element, instance: VulkanInstance): [boolean, VulkanInstance];

            // Methods

            /**
             * Check if the configured vulkan instance supports the specified version.
             * Will not work prior to opening the instance with gst_vulkan_instance_open().
             * If a specific version is requested, the `patch` level is ignored.
             * @param major major version
             * @param minor minor version
             * @param patch patch version
             * @returns whether @instance is at least the requested version.
             */
            check_version(major: number, minor: number, patch: number): boolean;
            create_device(): VulkanDevice;
            /**
             * Disable an Vulkan extension by `name`.  Disabling an extension will only have
             * an effect before the call to gst_vulkan_instance_open().
             * @param name extension name to enable
             * @returns whether the Vulkan extension could be disabled.
             */
            disable_extension(name: string): boolean;
            /**
             * Enable an Vulkan extension by `name`.  Extensions cannot be enabled until
             * gst_vulkan_instance_fill_info() has been called.  Enabling an extension will
             * only have an effect before the call to gst_vulkan_instance_open().
             * @param name extension name to enable
             * @returns whether the Vulkan extension could be enabled.
             */
            enable_extension(name: string): boolean;
            /**
             * Enable an Vulkan layer by `name`.  Layer cannot be enabled until
             * gst_vulkan_instance_fill_info() has been called.  Enabling a layer will
             * only have an effect before the call to gst_vulkan_instance_open().
             * @param name layer name to enable
             * @returns whether the Vulkan layer could be enabled.
             */
            enable_layer(name: string): boolean;
            /**
             * Retrieve as much information about the available Vulkan instance without
             * actually creating an Vulkan instance.  Will not do anything while `instance`
             * is open.
             * @returns whether the instance information could be retrieved
             */
            fill_info(): boolean;
            /**
             * Retrieves information about an extension.
             *
             * Will not find any extensions before gst_vulkan_instance_fill_info() has been
             * called.
             * @param name the layer name to look for
             * @returns whether extension @name is available
             */
            get_extension_info(name: string): [boolean, number];
            /**
             * Retrieves information about a layer.
             *
             * Will not find any layers before gst_vulkan_instance_fill_info() has been
             * called.
             * @param name the layer name to look for
             * @returns whether layer @name is available
             */
            get_layer_info(name: string): [boolean, string, number, number];
            /**
             * Performs `vkGetInstanceProcAddr()` with `instance` and `name`
             * @param name name of the function to retrieve
             * @returns the function pointer for @name or %NULL
             */
            get_proc_address(name: string): any | null;
            /**
             * Retrieve the vulkan instance configured version.  Only returns the supported
             * API version by the instance without taking into account the requested API
             * version.  This means gst_vulkan_instance_check_version() will return
             * different values if a specific version has been requested (which is the
             * default) than a version check that is performed manually by retrieving the
             * version with this function.
             */
            get_version(): [number, number, number];
            is_extension_enabled(name: string): boolean;
            is_layer_enabled(name: string): boolean;
            open(): boolean;
        }

        module VulkanMemoryAllocator {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
        }

        /**
         * Opaque #GstVulkanMemoryAllocator struct
         */
        class VulkanMemoryAllocator extends Gst.Allocator {
            static $gtype: GObject.GType<VulkanMemoryAllocator>;

            // Constructors

            constructor(properties?: Partial<VulkanMemoryAllocator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module VulkanOperation {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                command_pool: VulkanCommandPool;
                commandPool: VulkanCommandPool;
            }
        }

        /**
         * When using the operation `cmd_buf,` you should lock it using
         * gst_vulkan_command_buffer_lock(), but you have to unlock it, with
         * gst_vulkan_command_buffer_unlock(), when calling any of #GstVulkanOperation
         * methods.
         */
        class VulkanOperation extends Gst.Object {
            static $gtype: GObject.GType<VulkanOperation>;

            // Properties

            get command_pool(): VulkanCommandPool;
            get commandPool(): VulkanCommandPool;

            // Constructors

            constructor(properties?: Partial<VulkanOperation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cmd_pool: VulkanCommandPool): VulkanOperation;

            // Methods

            /**
             * Add `frame` as an operation dependency by adding the timeline semaphores in
             * each memory of `frame` into either the wait semaphore array. The signal array
             * hold the same semaphores but increasing their current value.
             * @param frame a Vulkan Image #GstBuffer
             * @param wait_stage pipeline stage to wait (VkPipelineStageFlags or   VkPipelineStageFlags2)
             * @param signal_stage pipeline stage to signal (VkPipelineStageFlags or   VkPipelineStageFlags2)
             * @returns whether the @frame was added as dependency.
             */
            add_dependency_frame(frame: Gst.Buffer, wait_stage: number, signal_stage: number): boolean;
            /**
             * See also: gst_vulkan_operation_update_frame()
             *
             * Adds an image memory barrier per memory in `frame` with its future state. And
             * it updates the `frame` barrier state by calling internally
             * gst_vulkan_operation_update_frame().
             * @param frame a Vulkan Image #GstBuffer
             * @param dst_stage destination pipeline stage (VkPipelineStageFlags or   VkPipelineStageFlags2)
             * @param new_access the new access flags (VkAccessFlags2 or VkAccessFlags)
             * @param new_layout the new VkImageLayout
             * @param new_queue destination #GstVulkanQueue for a transfer of @frame   ownership
             * @returns whether the @frame barriers were appended
             */
            add_frame_barrier(
                frame: Gst.Buffer,
                dst_stage: number,
                new_access: number,
                new_layout: Vulkan.ImageLayout,
                new_queue?: VulkanQueue | null,
            ): boolean;
            /**
             * See also: gst_vulkan_operation_end() and gst_vulkan_operation_reset()
             *
             * Attempts to set the operation ready to work. It instantiates the common
             * command buffer in `self` and calls vkBeginCommandBuffer.
             *
             * After calling this function you can register commands in the command buffer,
             * and finally call gst_vulkan_operation_end(). gst_vulkan_operation_reset() is
             * called internally if something failed.
             * @returns whether the operation started. It might fill @error.
             */
            begin(): boolean;
            /**
             * Begins a query operation in the current command buffer.
             * @param id
             * @returns whether the begin command was set
             */
            begin_query(id: number): boolean;
            /**
             * Discards barriers, and all the semaphore arrays populated by
             * gst_vulkan_operation_add_dependency_frame().
             */
            discard_dependencies(): void;
            /**
             * Tries to enable the query pool for the current operation.
             * @param query_type the VkQueryType to enable
             * @param n_queries number of queries to enable
             * @param pnext the structure pointer to use as pNext
             * @returns whether the query pool was enabled. It might populate @error in case    of error.
             */
            enable_query(query_type: number, n_queries: number, pnext?: any | null): boolean;
            /**
             * See also: gst_vulkan_operation_begin() and gst_vulkan_operation_reset()
             *
             * It calls vkEndCommandBuffer, and later either vkQueueSubmit or
             * vkQueueSubmit2KHR filling up the semaphores from images declared as
             * dependencies.
             *
             * You have called gst_vulkan_operation_begin() before.
             * gst_vulkan_operation_reset() is called internally if something fails
             * @returns whether the operation failed. It might fill @error.
             */
            end(): boolean;
            /**
             * Ends a query operation in the current command buffer.
             * @param id
             * @returns whether the end command was set
             */
            end_query(id: number): boolean;
            /**
             * Gets the latest operation results of all the queries in `data`. API users have
             * to parse the binary array of `data` according of their needs (usually is a
             * guint32 array of size of n_query).
             *
             * Don't free `data`.
             * @returns whether a status was fetched. If not, it might populate @error
             */
            get_query(): [boolean, any];
            /**
             * It's a wrapper to vkCmdPipelineBarrier2{KHR} if it's available.
             * @param dependency_info a pointer to VkDependencyInfo
             * @returns %TRUE if vkCmdPipelineBarrier2{KHR} it's available. %FALSE,   otherwise.
             */
            pipeline_barrier2(dependency_info?: any | null): boolean;
            /**
             * Resets the operation to a clean state.
             */
            reset(): void;
            /**
             * Add or update the internal list of the future state of `frame`. This state
             * will be set after gst_vulkan_operation_end().
             *
             * This method is useful when new barriers are added to the array without using
             * gst_vulkan_operation_add_frame_barrier().
             * @param frame a #GstBuffer to update after submit
             * @param dst_stage destination pipeline stage (VkPipelineStageFlags or   VkPipelineStageFlags2)
             * @param new_access the new access flags (VkAccessFlags2 or VkAccessFlags)
             * @param new_layout the new VkImageLayout
             * @param new_queue destination #GstVulkanQueue for a transfer of @frame   ownership
             */
            update_frame(
                frame: Gst.Buffer,
                dst_stage: number,
                new_access: number,
                new_layout: Vulkan.ImageLayout,
                new_queue?: VulkanQueue | null,
            ): void;
            use_sync2(): boolean;
            /**
             * Waits for the operation's fence to signal.
             * @returns whether the operation succeed.
             */
            wait(): boolean;
        }

        module VulkanPhysicalDevice {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                device_index: number;
                deviceIndex: number;
                instance: VulkanInstance;
                name: string;
            }
        }

        class VulkanPhysicalDevice extends Gst.Object {
            static $gtype: GObject.GType<VulkanPhysicalDevice>;

            // Properties

            get device_index(): number;
            get deviceIndex(): number;
            get instance(): VulkanInstance;
            get name(): string;

            // Fields

            n_queue_families: number;
            queue_family_ops: VulkanQueueFamilyOps;

            // Constructors

            constructor(properties?: Partial<VulkanPhysicalDevice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](instance: VulkanInstance, device_index: number): VulkanPhysicalDevice;

            // Static methods

            static type_to_string(type: Vulkan.PhysicalDeviceType): string;

            // Methods

            /**
             * Retrieves information about a device extension.
             *
             * Will not find any extensions before gst_vulkan_instance_fill_info() has been
             * called.
             * @param name the extension name to look for
             * @returns whether extension @name is available
             */
            get_extension_info(name: string): [boolean, number];
            get_instance(): VulkanInstance;
            /**
             * Retrieves information about a layer.
             *
             * Will not find any layers before gst_vulkan_instance_fill_info() has been
             * called.
             * @param name the layer name to look for
             * @returns whether layer @name is available
             */
            get_layer_info(name: string): [boolean, string, number, number];
        }

        module VulkanQueue {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {}
        }

        class VulkanQueue extends Gst.Object {
            static $gtype: GObject.GType<VulkanQueue>;

            // Fields

            device: VulkanDevice;
            family: number;
            index: number;

            // Constructors

            constructor(properties?: Partial<VulkanQueue.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static flags_to_string(queue_bits: Vulkan.QueueFlags): string;
            /**
             * If a #GstVulkanQueue is requested in `query,` sets `queue` as the reply.
             *
             * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
             * for a #GstVulkanQueue.
             * @param element a #GstElement
             * @param query a #GstQuery of type #GST_QUERY_CONTEXT
             * @param queue the #GstVulkanQueue
             */
            static handle_context_query(element: Gst.Element, query: Gst.Query, queue?: VulkanQueue | null): boolean;
            /**
             * Attempt to retrieve a #GstVulkanQueue using #GST_QUERY_CONTEXT from the
             * surrounding elements of `element`.
             * @param element a #GstElement
             * @param queue a #GstVulkanQueue
             */
            static run_context_query(element: Gst.Element, queue: VulkanQueue): [boolean, VulkanQueue];

            // Methods

            create_command_pool(): VulkanCommandPool;
            /**
             * Creates a #GstVulkanDecoder object if `codec` decoding is supported by `queue`
             * @param codec the VkVideoCodecOperationFlagBitsKHR to decode
             * @returns the #GstVulkanDecoder object
             */
            create_decoder(codec: number): VulkanDecoder | null;
            get_device(): VulkanDevice | null;
            /**
             * Locks the queue for command submission using `vkQueueSubmit()` to meet the
             * Vulkan requirements for externally synchronised resources.
             */
            submit_lock(): void;
            /**
             * Unlocks the queue for command submission using `vkQueueSubmit()`.
             *
             * See gst_vulkan_queue_submit_lock() for details on when this call is needed.
             */
            submit_unlock(): void;
        }

        module VulkanSwapper {
            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                force_aspect_ratio: boolean;
                forceAspectRatio: boolean;
                pixel_aspect_ratio: Gst.Fraction;
                pixelAspectRatio: Gst.Fraction;
            }
        }

        class VulkanSwapper extends Gst.Object {
            static $gtype: GObject.GType<VulkanSwapper>;

            // Properties

            get force_aspect_ratio(): boolean;
            set force_aspect_ratio(val: boolean);
            get forceAspectRatio(): boolean;
            set forceAspectRatio(val: boolean);
            get pixel_aspect_ratio(): Gst.Fraction;
            set pixel_aspect_ratio(val: Gst.Fraction);
            get pixelAspectRatio(): Gst.Fraction;
            set pixelAspectRatio(val: Gst.Fraction);

            // Fields

            device: VulkanDevice;
            window: VulkanWindow;
            queue: VulkanQueue;
            cmd_pool: VulkanCommandPool;

            // Constructors

            constructor(properties?: Partial<VulkanSwapper.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](device: VulkanDevice, window: VulkanWindow): VulkanSwapper;

            // Methods

            choose_queue(available_queue: VulkanQueue): boolean;
            get_supported_caps(): Gst.Caps;
            get_surface_rectangles(): [
                GstVideo.VideoRectangle | null,
                GstVideo.VideoRectangle | null,
                GstVideo.VideoRectangle | null,
            ];
            render_buffer(buffer: Gst.Buffer): boolean;
            set_caps(caps: Gst.Caps): boolean;
        }

        module VulkanTrashFenceList {
            // Constructor properties interface

            interface ConstructorProps extends VulkanTrashList.ConstructorProps {}
        }

        class VulkanTrashFenceList extends VulkanTrashList {
            static $gtype: GObject.GType<VulkanTrashFenceList>;

            // Constructors

            constructor(properties?: Partial<VulkanTrashFenceList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VulkanTrashFenceList;
        }

        module VulkanTrashList {
            // Constructor properties interface

            interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
        }

        class VulkanTrashList extends VulkanHandlePool {
            static $gtype: GObject.GType<VulkanTrashList>;

            // Constructors

            constructor(properties?: Partial<VulkanTrashList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * the #GstVulkanTrashListAdd functions
             * @param trash the #GstVulkanTrash to add to @trash_list
             */
            vfunc_add_func(trash: VulkanTrash): boolean;
            /**
             * the #GstVulkanTrashListGC function
             */
            vfunc_gc_func(): void;
            /**
             * the #GstVulkanTrashListWait function
             * @param timeout the timeout in ns to wait
             */
            vfunc_wait_func(timeout: number): boolean;

            // Methods

            acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
            // Conflicted with GstVulkan.VulkanHandlePool.acquire
            acquire(...args: never[]): any;
            add(trash: VulkanTrash): boolean;
            /**
             * Remove any stored #GstVulkanTrash objects that have had their associated
             * #GstVulkanFence signalled.
             */
            gc(): void;
            wait(timeout: number): boolean;
        }

        module VulkanVideoFilter {
            // Constructor properties interface

            interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {}
        }

        class VulkanVideoFilter extends GstBase.BaseTransform {
            static $gtype: GObject.GType<VulkanVideoFilter>;

            // Fields

            instance: VulkanInstance;
            device: VulkanDevice;
            queue: VulkanQueue;

            // Constructors

            constructor(properties?: Partial<VulkanVideoFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module VulkanWindow {
            // Signal callback interfaces

            interface Close {
                (): boolean;
            }

            interface Draw {
                (): void;
            }

            interface KeyEvent {
                (id: string, key: string): void;
            }

            interface MouseEvent {
                (id: string, button: number, x: number, y: number): void;
            }

            interface Resize {
                (object: number, p0: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gst.Object.ConstructorProps {
                display: VulkanDisplay;
            }
        }

        /**
         * #GstVulkanWindow is an opaque struct and should only be accessed through the
         * provided api.
         */
        abstract class VulkanWindow extends Gst.Object {
            static $gtype: GObject.GType<VulkanWindow>;

            // Properties

            get display(): VulkanDisplay;

            // Constructors

            constructor(properties?: Partial<VulkanWindow.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](display: VulkanDisplay): VulkanWindow;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'close', callback: (_source: this) => boolean): number;
            connect_after(signal: 'close', callback: (_source: this) => boolean): number;
            emit(signal: 'close'): void;
            connect(signal: 'draw', callback: (_source: this) => void): number;
            connect_after(signal: 'draw', callback: (_source: this) => void): number;
            emit(signal: 'draw'): void;
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
            connect(signal: 'resize', callback: (_source: this, object: number, p0: number) => void): number;
            connect_after(signal: 'resize', callback: (_source: this, object: number, p0: number) => void): number;
            emit(signal: 'resize', object: number, p0: number): void;

            // Virtual methods

            /**
             * Attempt to close the window.
             */
            vfunc_close(): void;
            /**
             * retrieve whether this window supports presentation
             * @param device a #GstVulkanDevice
             * @param queue_family_idx the queue family
             */
            vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
            /**
             * retrieve the current size of the window
             */
            vfunc_get_surface_dimensions(): [number, number];
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
             * open the connection to the display
             */
            vfunc_open(): boolean;
            /**
             * set the external window handle to render into
             * @param handle
             */
            vfunc_set_window_handle(handle: never): void;

            // Methods

            /**
             * Attempt to close the window.
             */
            close(): void;
            get_display(): VulkanDisplay;
            get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
            get_surface_dimensions(): [number, number];
            /**
             * Tell a `window` that it should handle events from the window system. These
             * events are forwarded upstream as navigation events. In some window systems
             * events are not propagated in the window hierarchy if a client is listening
             * for them. This method allows you to disable events handling completely
             * from the `window`.
             * @param handle_events a #gboolean indicating if events should be handled or not.
             */
            handle_events(handle_events: boolean): void;
            open(): boolean;
            /**
             * Ask the `window` to redraw its contents
             */
            redraw(): void;
            /**
             * Resize the output surface.
             *
             * Currently intended for subclasses to update internal state.
             * @param width the new width
             * @param height the new height
             */
            resize(width: number, height: number): void;
            send_key_event(event_type: string, key_str: string): void;
            send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
            set_window_handle(handle: never): void;
        }

        class VulkanBarrierBufferInfo {
            static $gtype: GObject.GType<VulkanBarrierBufferInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanBarrierImageInfo {
            static $gtype: GObject.GType<VulkanBarrierImageInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanBarrierMemoryInfo {
            static $gtype: GObject.GType<VulkanBarrierMemoryInfo>;

            // Fields

            type: VulkanBarrierType;
            flags: VulkanBarrierFlags;
            queue: VulkanQueue;
            pipeline_stages: number;
            access_flags: number;
            semaphore_value: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanBufferMemory {
            static $gtype: GObject.GType<VulkanBufferMemory>;

            // Fields

            device: VulkanDevice;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Allocate a new #GstVulkanBufferMemory.
             * @param device a #GstVulkanDevice
             * @param size size of the new buffer
             * @param usage buffer usage flags
             * @param mem_prop_flags memory properties flags for the backing memory
             */
            static alloc(
                device: VulkanDevice,
                size: number,
                usage: Vulkan.BufferUsageFlags,
                mem_prop_flags: Vulkan.MemoryPropertyFlags,
            ): Gst.Memory;
            /**
             * Allocate a new #GstVulkanBufferMemory.
             * @param device a #GstVulkanDevice
             * @param buffer_info the VkBufferCreateInfo structure
             * @param mem_prop_flags memory properties flags for the backing memory
             */
            static alloc_with_buffer_info(
                device: VulkanDevice,
                buffer_info: Vulkan.BufferCreateInfo,
                mem_prop_flags: Vulkan.MemoryPropertyFlags,
            ): Gst.Memory;
            /**
             * Initializes the Vulkan buffer memory allocator. It is safe to call this function
             * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
             */
            static init_once(): void;
            /**
             * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
             * @param device a #GstVulkanDevice
             * @param buffer a `VkBuffer`
             * @param usage usage flags of @buffer
             * @param user_data user data to call @notify with
             * @param notify a #GDestroyNotify called when @buffer is no longer in use
             */
            static wrapped(
                device: VulkanDevice,
                buffer: Vulkan.Buffer,
                usage: Vulkan.BufferUsageFlags,
                user_data?: any | null,
                notify?: GLib.DestroyNotify | null,
            ): Gst.Memory;
        }

        type VulkanBufferMemoryAllocatorClass = typeof VulkanBufferMemoryAllocator;
        type VulkanBufferPoolClass = typeof VulkanBufferPool;
        abstract class VulkanBufferPoolPrivate {
            static $gtype: GObject.GType<VulkanBufferPoolPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanCommandBuffer {
            static $gtype: GObject.GType<VulkanCommandBuffer>;

            // Fields

            pool: VulkanCommandPool;

            // Constructors

            constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);
            _init(...args: any[]): void;

            static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;
        }

        type VulkanCommandPoolClass = typeof VulkanCommandPool;
        abstract class VulkanCommandPoolPrivate {
            static $gtype: GObject.GType<VulkanCommandPoolPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanDecoderClass = typeof VulkanDecoder;
        /**
         * It contains the whole state for decoding a single picture.
         */
        class VulkanDecoderPicture {
            static $gtype: GObject.GType<VulkanDecoderPicture>;

            // Fields

            slice_offs: any[];

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Releases the internal resource of `pic`.
             */
            release(): void;
        }

        abstract class VulkanDecoderPrivate {
            static $gtype: GObject.GType<VulkanDecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanDescriptorCacheClass = typeof VulkanDescriptorCache;
        abstract class VulkanDescriptorCachePrivate {
            static $gtype: GObject.GType<VulkanDescriptorCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanDescriptorPoolClass = typeof VulkanDescriptorPool;
        abstract class VulkanDescriptorPoolPrivate {
            static $gtype: GObject.GType<VulkanDescriptorPoolPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanDescriptorSet {
            static $gtype: GObject.GType<VulkanDescriptorSet>;

            // Fields

            pool: VulkanDescriptorPool;
            cache: VulkanDescriptorCache;
            n_layouts: number;

            // Constructors

            constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, layouts: VulkanHandle[]);
            _init(...args: any[]): void;

            static new_wrapped(
                pool: VulkanDescriptorPool,
                set: Vulkan.DescriptorSet,
                layouts: VulkanHandle[],
            ): VulkanDescriptorSet;
        }

        type VulkanDeviceClass = typeof VulkanDevice;
        abstract class VulkanDevicePrivate {
            static $gtype: GObject.GType<VulkanDevicePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanDisplayClass = typeof VulkanDisplay;
        abstract class VulkanDisplayPrivate {
            static $gtype: GObject.GType<VulkanDisplayPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanFence {
            static $gtype: GObject.GType<VulkanFence>;

            // Fields

            device: VulkanDevice;
            cache: VulkanFenceCache;

            // Constructors

            constructor(device: VulkanDevice);
            _init(...args: any[]): void;

            static ['new'](device: VulkanDevice): VulkanFence;

            static new_always_signalled(device: VulkanDevice): VulkanFence;

            // Methods

            is_signaled(): boolean;
            reset(): void;
        }

        type VulkanFenceCacheClass = typeof VulkanFenceCache;
        class VulkanFormatInfo {
            static $gtype: GObject.GType<VulkanFormatInfo>;

            // Fields

            name: string;
            scaling: VulkanFormatScaling;
            flags: VulkanFormatFlags;
            bits: number;
            n_components: number;
            shift: Uint8Array;
            depth: Uint8Array;
            pixel_stride: Uint8Array;
            n_planes: number;
            plane: Uint8Array;
            poffset: Uint8Array;
            w_sub: Uint8Array;
            h_sub: Uint8Array;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanFullScreenQuadClass = typeof VulkanFullScreenQuad;
        abstract class VulkanFullScreenQuadPrivate {
            static $gtype: GObject.GType<VulkanFullScreenQuadPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Holds information about a vulkan non dispatchable handle that only has
         * a vulkan device as a parent and no specific host synchronisation
         * requirements.  Command buffers have extra requirements that are serviced by
         * more specific implementations (#GstVulkanCommandBuffer, #GstVulkanCommandPool).
         */
        class VulkanHandle {
            static $gtype: GObject.GType<VulkanHandle>;

            // Fields

            device: VulkanDevice;
            type: VulkanHandleType;
            handle: VulkanHandleTypedef;
            notify: VulkanHandleDestroyNotify;
            user_data: any;

            // Constructors

            constructor(
                device: VulkanDevice,
                type: VulkanHandleType,
                handle: VulkanHandleTypedef,
                notify: VulkanHandleDestroyNotify,
            );
            _init(...args: any[]): void;

            static new_wrapped(
                device: VulkanDevice,
                type: VulkanHandleType,
                handle: VulkanHandleTypedef,
                notify: VulkanHandleDestroyNotify,
            ): VulkanHandle;

            // Static methods

            static context_query(
                element: Gst.Element,
                query: Gst.Query,
                display?: VulkanDisplay | null,
                instance?: VulkanInstance | null,
                device?: VulkanDevice | null,
            ): boolean;
            /**
             * Helper function for implementing #GstElementClass.set_context() in
             * Vulkan capable elements.
             *
             * Retrieve's the #GstVulkanDisplay or #GstVulkanInstance in `context` and places
             * the result in `display` or `instance` respectively.
             * @param element a #GstElement
             * @param context a #GstContext
             * @param display location of a #GstVulkanDisplay
             * @param instance location of a #GstVulkanInstance
             */
            static set_context(
                element: Gst.Element,
                context: Gst.Context,
                display: VulkanDisplay | null,
                instance: VulkanInstance,
            ): [boolean, VulkanDisplay | null, VulkanInstance];

            // Methods

            /**
             * Frees the descriptor set layout in `handle`
             * @param user_data callback user data
             */
            free_descriptor_set_layout(user_data?: any | null): void;
            /**
             * Frees the framebuffer in `handle`
             * @param user_data callback user data
             */
            free_framebuffer(user_data?: any | null): void;
            /**
             * Frees the pipeline in `handle`
             * @param user_data callback user data
             */
            free_pipeline(user_data?: any | null): void;
            /**
             * Frees the pipeline layout in `handle`
             * @param user_data callback user data
             */
            free_pipeline_layout(user_data?: any | null): void;
            /**
             * Frees the render pass in `handle`
             * @param user_data callback user data
             */
            free_render_pass(user_data?: any | null): void;
            /**
             * Frees the sampler in `handle`
             * @param user_data callback user data
             */
            free_sampler(user_data?: any | null): void;
            /**
             * Frees the shader in `handle`
             * @param user_data callback user data
             */
            free_shader(user_data?: any | null): void;
        }

        type VulkanHandlePoolClass = typeof VulkanHandlePool;
        type VulkanImageBufferPoolClass = typeof VulkanImageBufferPool;
        abstract class VulkanImageBufferPoolPrivate {
            static $gtype: GObject.GType<VulkanImageBufferPoolPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanImageMemory {
            static $gtype: GObject.GType<VulkanImageMemory>;

            // Fields

            device: VulkanDevice;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Allocated a new #GstVulkanImageMemory.
             * @param device a #GstVulkanDevice
             * @param format the VkFormat for the new image
             * @param width width for the new image
             * @param height height for the new image
             * @param tiling tiling for the new image
             * @param usage usage flags for the new image
             * @param mem_prop_flags VkDeviceMemory property flags for the new image
             */
            static alloc(
                device: VulkanDevice,
                format: Vulkan.Format,
                width: number,
                height: number,
                tiling: Vulkan.ImageTiling,
                usage: Vulkan.ImageUsageFlags,
                mem_prop_flags: Vulkan.MemoryPropertyFlags,
            ): Gst.Memory;
            static alloc_with_image_info(
                device: VulkanDevice,
                image_info: Vulkan.ImageCreateInfo,
                mem_prop_flags: Vulkan.MemoryPropertyFlags,
            ): Gst.Memory;
            /**
             * Initializes the Vulkan image memory allocator. It is safe to call this function
             * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
             */
            static init_once(): void;
            static wrapped(
                device: VulkanDevice,
                image: Vulkan.Image,
                format: Vulkan.Format,
                width: number,
                height: number,
                tiling: Vulkan.ImageTiling,
                usage: Vulkan.ImageUsageFlags,
                user_data?: any | null,
            ): Gst.Memory;

            // Methods

            add_view(view: VulkanImageView): void;
            find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView | null;
            get_height(): number;
            get_width(): number;
            init(
                allocator: Gst.Allocator,
                parent: Gst.Memory,
                device: VulkanDevice,
                format: Vulkan.Format,
                usage: Vulkan.ImageUsageFlags,
                initial_layout: Vulkan.ImageLayout,
                params: Gst.AllocationParams,
                size: number,
                user_data?: any | null,
            ): boolean;
        }

        type VulkanImageMemoryAllocatorClass = typeof VulkanImageMemoryAllocator;
        class VulkanImageView {
            static $gtype: GObject.GType<VulkanImageView>;

            // Fields

            device: VulkanDevice;

            // Constructors

            constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);
            _init(...args: any[]): void;

            static ['new'](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;
        }

        type VulkanInstanceClass = typeof VulkanInstance;
        abstract class VulkanInstancePrivate {
            static $gtype: GObject.GType<VulkanInstancePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanMemory {
            static $gtype: GObject.GType<VulkanMemory>;

            // Fields

            device: VulkanDevice;
            map_count: number;
            mapping: any;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Allocated a new #GstVulkanMemory.
             * @param device a #GstVulkanDevice
             * @param memory_type_index the Vulkan memory type index
             * @param params a #GstAllocationParams
             * @param size the size to allocate
             * @param mem_prop_flags
             */
            static alloc(
                device: VulkanDevice,
                memory_type_index: number,
                params: Gst.AllocationParams,
                size: number,
                mem_prop_flags: Vulkan.MemoryPropertyFlags,
            ): Gst.Memory;
            static find_memory_type_index_with_requirements(
                device: VulkanDevice,
                req: Vulkan.MemoryRequirements,
                properties: Vulkan.MemoryPropertyFlags,
            ): [boolean, number];
            static heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
            /**
             * Initializes the Vulkan memory allocator. It is safe to call this function
             * multiple times.  This must be called before any other #GstVulkanMemory operation.
             */
            static init_once(): void;
            static property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
        }

        type VulkanMemoryAllocatorClass = typeof VulkanMemoryAllocator;
        type VulkanOperationClass = typeof VulkanOperation;
        abstract class VulkanOperationPrivate {
            static $gtype: GObject.GType<VulkanOperationPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanPhysicalDeviceClass = typeof VulkanPhysicalDevice;
        abstract class VulkanPhysicalDevicePrivate {
            static $gtype: GObject.GType<VulkanPhysicalDevicePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanQueueClass = typeof VulkanQueue;
        class VulkanQueueFamilyOps {
            static $gtype: GObject.GType<VulkanQueueFamilyOps>;

            // Fields

            video: number;
            query: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    video: number;
                    query: boolean;
                }>,
            );
            _init(...args: any[]): void;
        }

        abstract class VulkanQueuePrivate {
            static $gtype: GObject.GType<VulkanQueuePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanSwapperClass = typeof VulkanSwapper;
        abstract class VulkanSwapperPrivate {
            static $gtype: GObject.GType<VulkanSwapperPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VulkanTrash {
            static $gtype: GObject.GType<VulkanTrash>;

            // Fields

            cache: VulkanTrashList;
            notify: VulkanTrashNotify;
            user_data: any;

            // Constructors

            constructor(fence: VulkanFence, notify: VulkanTrashNotify);
            _init(...args: any[]): void;

            static ['new'](fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;

            static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;

            // Static methods

            /**
             * A #GstVulkanTrashNotify implementation for unreffing a #GstMiniObject when the
             * associated #GstVulkanFence is signalled
             * @param device the #GstVulkanDevice
             * @param user_data the #GstMiniObject
             */
            static mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
            /**
             * A #GstVulkanTrashNotify implementation for unreffing a #GstObject when the
             * associated #GstVulkanFence is signalled
             * @param device the #GstVulkanDevice
             * @param user_data the #GstMiniObject
             */
            static object_unref(device: VulkanDevice, user_data?: any | null): void;
        }

        type VulkanTrashFenceListClass = typeof VulkanTrashFenceList;
        type VulkanTrashListClass = typeof VulkanTrashList;
        class VulkanVideoCapabilities {
            static $gtype: GObject.GType<VulkanVideoCapabilities>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanVideoFilterClass = typeof VulkanVideoFilter;
        class VulkanVideoProfile {
            static $gtype: GObject.GType<VulkanVideoProfile>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            is_equal(b: VulkanVideoProfile): boolean;
        }

        type VulkanWindowClass = typeof VulkanWindow;
        abstract class VulkanWindowPrivate {
            static $gtype: GObject.GType<VulkanWindowPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Codec specific parameters.
         */
        class VulkanDecoderParameters {
            static $gtype: GObject.GType<VulkanDecoderParameters>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VulkanHandleTypedef = number;
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

    export default GstVulkan;
}

declare module 'gi://GstVulkan' {
    import GstVulkan10 from 'gi://GstVulkan?version=1.0';
    export default GstVulkan10;
}
// END
