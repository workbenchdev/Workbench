/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://CudaGst?version=1.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace CudaGst {
        /**
         * CudaGst-1.0
         */

        export namespace GLDeviceList {
            export const $gtype: GObject.GType<GLDeviceList>;
        }

        enum GLDeviceList {
            GL_DEVICE_LIST_ALL,
        }

        export namespace address_mode {
            export const $gtype: GObject.GType<address_mode>;
        }

        enum address_mode {
            WRAP,
            CLAMP,
            MIRROR,
            BORDER,
        }

        export namespace array_format {
            export const $gtype: GObject.GType<array_format>;
        }

        enum array_format {
            INT8,
            INT16,
        }

        export namespace device_attribute {
            export const $gtype: GObject.GType<device_attribute>;
        }

        enum device_attribute {
            TEXTURE_ALIGNMENT,
            UNIFIED_ADDRESSING,
            COMPUTE_CAPABILITY_MAJOR,
            COMPUTE_CAPABILITY_MINOR,
            VIRTUAL_MEMORY_MANAGEMENT_SUPPORTED,
            HANDLE_TYPE_POSIX_FILE_DESCRIPTOR_SUPPORTED,
            HANDLE_TYPE_WIN32_HANDLE_SUPPORTED,
            HANDLE_TYPE_WIN32_KMT_HANDLE_SUPPORTED,
        }

        export namespace event_flags {
            export const $gtype: GObject.GType<event_flags>;
        }

        enum event_flags {
            DEFAULT,
            BLOCKING_SYNC,
            DISABLE_TIMING,
            INTERPROCESS,
        }

        export namespace filter_mode {
            export const $gtype: GObject.GType<filter_mode>;
        }

        enum filter_mode {
            POINT,
            LINEAR,
        }

        export namespace graphicsMapResourceFlags {
            export const $gtype: GObject.GType<graphicsMapResourceFlags>;
        }

        enum graphicsMapResourceFlags {
            NONE,
            READ_ONLY,
            WRITE_DISCARD,
        }

        export namespace graphicsRegisterFlags {
            export const $gtype: GObject.GType<graphicsRegisterFlags>;
        }

        enum graphicsRegisterFlags {
            NONE,
            READ_ONLY,
            WRITE_DISCARD,
            SURFACE_LOAD_STORE,
            TEXTURE_GATHER,
        }

        export namespace ipcMem_flags {
            export const $gtype: GObject.GType<ipcMem_flags>;
        }

        enum ipcMem_flags {
            IPC_MEM_LAZY_ENABLE_PEER_ACCESS,
        }

        export namespace memAccess_flags {
            export const $gtype: GObject.GType<memAccess_flags>;
        }

        enum memAccess_flags {
            NONE,
            READ,
            READWRITE,
            MAX,
        }

        export namespace memAllocationGranularity_flags {
            export const $gtype: GObject.GType<memAllocationGranularity_flags>;
        }

        enum memAllocationGranularity_flags {
            MINIMUM,
            RECOMMENDED,
        }

        export namespace memAllocationHandleType {
            export const $gtype: GObject.GType<memAllocationHandleType>;
        }

        enum memAllocationHandleType {
            NONE,
            POSIX_FILE_DESCRIPTOR,
            WIN32,
            WIN32_KMT,
            MAX,
        }

        export namespace memAllocationType {
            export const $gtype: GObject.GType<memAllocationType>;
        }

        enum memAllocationType {
            INVALID,
            PINNED,
            MAX,
        }

        export namespace memLocationType {
            export const $gtype: GObject.GType<memLocationType>;
        }

        enum memLocationType {
            INVALID,
            DEVICE,
            MAX,
        }

        export namespace memorytype {
            export const $gtype: GObject.GType<memorytype>;
        }

        enum memorytype {
            HOST,
            DEVICE,
            ARRAY,
            UNIFIED,
        }

        export namespace resourceViewFormat {
            export const $gtype: GObject.GType<resourceViewFormat>;
        }

        enum resourceViewFormat {
            RES_VIEW_FORMAT_NONE,
        }

        export namespace resourcetype {
            export const $gtype: GObject.GType<resourcetype>;
        }

        enum resourcetype {
            ARRAY,
            MIPMAPPED_ARRAY,
            LINEAR,
            PITCH2D,
        }

        export namespace result {
            export const $gtype: GObject.GType<result>;
        }

        enum result {
            SUCCESS,
            ERROR_NO_DEVICE,
            ERROR_ALREADY_MAPPED,
            ERROR_NOT_SUPPORTED,
        }

        export namespace stream_flags {
            export const $gtype: GObject.GType<stream_flags>;
        }

        enum stream_flags {
            DEFAULT,
            NON_BLOCKING,
        }
        const IPC_HANDLE_SIZE: number;
        const TRSF_READ_AS_INTEGER: number;
        const VERSION: number;
        class DA_MEMCPY2D {
            static $gtype: GObject.GType<DA_MEMCPY2D>;

            // Fields

            srcXInBytes: number;
            srcY: number;
            srcMemoryType: memorytype;
            srcHost: any;
            srcDevice: deviceptr;
            srcArray: array;
            srcPitch: number;
            dstXInBytes: number;
            dstY: number;
            dstMemoryType: memorytype;
            dstHost: any;
            dstDevice: deviceptr;
            dstArray: array;
            dstPitch: number;
            WidthInBytes: number;
            Height: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class DA_RESOURCE_DESC {
            static $gtype: GObject.GType<DA_RESOURCE_DESC>;

            // Fields

            resType: resourcetype;
            flags: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class DA_RESOURCE_VIEW_DESC {
            static $gtype: GObject.GType<DA_RESOURCE_VIEW_DESC>;

            // Fields

            format: resourceViewFormat;
            width: number;
            height: number;
            depth: number;
            firstMipmapLevel: number;
            lastMipmapLevel: number;
            firstLayer: number;
            lastLayer: number;
            reserved: number[];

            // Constructors

            _init(...args: any[]): void;
        }

        class DA_TEXTURE_DESC {
            static $gtype: GObject.GType<DA_TEXTURE_DESC>;

            // Fields

            addressMode: address_mode[];
            filterMode: filter_mode;
            flags: number;
            maxAnisotropy: number;
            mipmapFilterMode: filter_mode;
            mipmapLevelBias: number;
            minMipmapLevelClamp: number;
            maxMipmapLevelClamp: number;
            borderColor: number[];
            reserved: number[];

            // Constructors

            _init(...args: any[]): void;
        }

        class ipcEventHandle {
            static $gtype: GObject.GType<ipcEventHandle>;

            // Fields

            reserved: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    reserved: number[];
                }>,
            );
            _init(...args: any[]): void;
        }

        class ipcMemHandle {
            static $gtype: GObject.GType<ipcMemHandle>;

            // Fields

            reserved: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    reserved: number[];
                }>,
            );
            _init(...args: any[]): void;
        }

        class memAccessDesc {
            static $gtype: GObject.GType<memAccessDesc>;

            // Fields

            flags: memAccess_flags;

            // Constructors

            _init(...args: any[]): void;
        }

        class memAllocationProp {
            static $gtype: GObject.GType<memAllocationProp>;

            // Fields

            type: memAllocationType;
            requestedHandleTypes: memAllocationHandleType;
            win32HandleMetaData: any;
            allocFlags: memAllocationPropAllocFlags;

            // Constructors

            _init(...args: any[]): void;
        }

        class memAllocationPropAllocFlags {
            static $gtype: GObject.GType<memAllocationPropAllocFlags>;

            // Fields

            compressionType: number;
            gpuDirectRDMACapable: number;
            usage: number;
            reserved: Uint8Array;

            // Constructors

            constructor(
                properties?: Partial<{
                    compressionType: number;
                    gpuDirectRDMACapable: number;
                    usage: number;
                    reserved: Uint8Array;
                }>,
            );
            _init(...args: any[]): void;
        }

        class memLocation {
            static $gtype: GObject.GType<memLocation>;

            // Fields

            type: memLocationType;
            id: number;

            // Constructors

            _init(...args: any[]): void;
        }

        type array = any;
        type context = any;
        type device = number;
        type deviceptr = never;
        type event = any;
        type __function = any;
        type graphicsResource = any;
        type mipmappedArray = any;
        type module = any;
        type stream = any;
        type texObject = number;
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

    export default CudaGst;
}

declare module 'gi://CudaGst' {
    import CudaGst10 from 'gi://CudaGst?version=1.0';
    export default CudaGst10;
}
// END
