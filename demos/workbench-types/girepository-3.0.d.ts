/// <reference path="./gio-2.0.d.ts" />
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

declare module 'gi://GIRepository?version=3.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GIRepository {
        /**
         * GIRepository-3.0
         */

        /**
         * The type of array in a [class`GIRepository`.TypeInfo].
         */

        /**
         * The type of array in a [class`GIRepository`.TypeInfo].
         */
        export namespace ArrayType {
            export const $gtype: GObject.GType<ArrayType>;
        }

        enum ArrayType {
            /**
             * a C array, `char[]` for instance
             */
            C,
            /**
             * a [type`GLib`.Array] array
             */
            ARRAY,
            /**
             * a [type`GLib`.PtrArray] array
             */
            PTR_ARRAY,
            /**
             * a [type`GLib`.ByteArray] array
             */
            BYTE_ARRAY,
        }
        /**
         * The direction of a [class`GIRepository`.ArgInfo].
         */

        /**
         * The direction of a [class`GIRepository`.ArgInfo].
         */
        export namespace Direction {
            export const $gtype: GObject.GType<Direction>;
        }

        enum Direction {
            /**
             * ‘in’ argument.
             */
            IN,
            /**
             * ‘out’ argument.
             */
            OUT,
            /**
             * ‘in and out’ argument.
             */
            INOUT,
        }
        /**
         * An error occurring while invoking a function via
         * [method`GIRepository`.FunctionInfo.invoke].
         */
        class InvokeError extends GLib.Error {
            static $gtype: GObject.GType<InvokeError>;

            // Static fields

            /**
             * invocation failed, unknown error.
             */
            static FAILED: number;
            /**
             * symbol couldn’t be found in any of the
             *   libraries associated with the typelib of the function.
             */
            static SYMBOL_NOT_FOUND: number;
            /**
             * the arguments provided didn’t match
             *   the expected arguments for the function’s type signature.
             */
            static ARGUMENT_MISMATCH: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * An error code used with `GI_REPOSITORY_ERROR` in a [type`GLib`.Error]
         * returned from a [class`GIRepository`.Repository] routine.
         */

        /**
         * An error code used with `GI_REPOSITORY_ERROR` in a [type`GLib`.Error]
         * returned from a [class`GIRepository`.Repository] routine.
         */
        export namespace RepositoryError {
            export const $gtype: GObject.GType<RepositoryError>;
        }

        enum RepositoryError {
            /**
             * the typelib could not be found.
             */
            TYPELIB_NOT_FOUND,
            /**
             * the namespace does not match the
             *   requested namespace.
             */
            NAMESPACE_MISMATCH,
            /**
             * the version of the
             *   typelib does not match the requested version.
             */
            NAMESPACE_VERSION_CONFLICT,
            /**
             * the library used by the typelib
             *   could not be found.
             */
            LIBRARY_NOT_FOUND,
        }
        /**
         * Scope type of a [class`GIRepository`.ArgInfo] representing callback,
         * determines how the callback is invoked and is used to decided when the invoke
         * structs can be freed.
         */

        /**
         * Scope type of a [class`GIRepository`.ArgInfo] representing callback,
         * determines how the callback is invoked and is used to decided when the invoke
         * structs can be freed.
         */
        export namespace ScopeType {
            export const $gtype: GObject.GType<ScopeType>;
        }

        enum ScopeType {
            /**
             * The argument is not of callback type.
             */
            INVALID,
            /**
             * The callback and associated `user_data` is only
             *   used during the call to this function.
             */
            CALL,
            /**
             * The callback and associated `user_data` is
             *   only used until the callback is invoked, and the callback.
             *   is invoked always exactly once.
             */
            ASYNC,
            /**
             * The callback and associated
             *   `user_data` is used until the caller is notified via the
             *   [type`GLib`.DestroyNotify].
             */
            NOTIFIED,
            /**
             * The callback and associated `user_data` is
             *   used until the process terminates
             */
            FOREVER,
        }
        /**
         * `GITransfer` specifies who’s responsible for freeing the resources after an
         * ownership transfer is complete.
         *
         * The transfer is the exchange of data between two parts, from the callee to
         * the caller.
         *
         * The callee is either a function/method/signal or an object/interface where a
         * property is defined. The caller is the side accessing a property or calling a
         * function.
         *
         * In the case of a containing type such as a list, an array or a hash table the
         * container itself is specified differently from the items within the
         * container. Each container is freed differently, check the documentation for
         * the types themselves for information on how to free them.
         */

        /**
         * `GITransfer` specifies who’s responsible for freeing the resources after an
         * ownership transfer is complete.
         *
         * The transfer is the exchange of data between two parts, from the callee to
         * the caller.
         *
         * The callee is either a function/method/signal or an object/interface where a
         * property is defined. The caller is the side accessing a property or calling a
         * function.
         *
         * In the case of a containing type such as a list, an array or a hash table the
         * container itself is specified differently from the items within the
         * container. Each container is freed differently, check the documentation for
         * the types themselves for information on how to free them.
         */
        export namespace Transfer {
            export const $gtype: GObject.GType<Transfer>;
        }

        enum Transfer {
            /**
             * Transfer nothing from the callee (function or the type
             *   instance the property belongs to) to the caller. The callee retains the
             *   ownership of the transfer and the caller doesn’t need to do anything to
             *   free up the resources of this transfer.
             */
            NOTHING,
            /**
             * Transfer the container (list, array, hash table) from
             *   the callee to the caller. The callee retains the ownership of the
             *   individual items in the container and the caller has to free up the
             *   container resources ([func`GLib`.List.free],
             *   [func`GLib`.HashTable.destroy], etc) of this transfer.
             */
            CONTAINER,
            /**
             * Transfer everything, e.g. the container and its
             *   contents from the callee to the caller. This is the case when the callee
             *   creates a copy of all the data it returns. The caller is responsible for
             *   cleaning up the container and item resources of this transfer.
             */
            EVERYTHING,
        }
        /**
         * The type tag of a [class`GIRepository`.TypeInfo].
         */

        /**
         * The type tag of a [class`GIRepository`.TypeInfo].
         */
        export namespace TypeTag {
            export const $gtype: GObject.GType<TypeTag>;
        }

        enum TypeTag {
            /**
             * void
             */
            VOID,
            /**
             * boolean
             */
            BOOLEAN,
            /**
             * 8-bit signed integer
             */
            INT8,
            /**
             * 8-bit unsigned integer
             */
            UINT8,
            /**
             * 16-bit signed integer
             */
            INT16,
            /**
             * 16-bit unsigned integer
             */
            UINT16,
            /**
             * 32-bit signed integer
             */
            INT32,
            /**
             * 32-bit unsigned integer
             */
            UINT32,
            /**
             * 64-bit signed integer
             */
            INT64,
            /**
             * 64-bit unsigned integer
             */
            UINT64,
            /**
             * float
             */
            FLOAT,
            /**
             * double floating point
             */
            DOUBLE,
            /**
             * a [type`GObject`.Type]
             */
            GTYPE,
            /**
             * a UTF-8 encoded string
             */
            UTF8,
            /**
             * a filename, encoded in the same encoding
             *   as the native filesystem is using.
             */
            FILENAME,
            /**
             * an array
             */
            ARRAY,
            /**
             * an extended interface object
             */
            INTERFACE,
            /**
             * a [type`GLib`.List]
             */
            GLIST,
            /**
             * a [type`GLib`.SList]
             */
            GSLIST,
            /**
             * a [type`GLib`.HashTable]
             */
            GHASH,
            /**
             * a [type`GLib`.Error]
             */
            ERROR,
            /**
             * Unicode character
             */
            UNICHAR,
        }
        /**
         * Number of entries in [enum`GIRepository`.TypeTag].
         */
        const TYPE_TAG_N_TYPES: number;
        /**
         * Get the error quark which represents [type`GIRepository`.InvokeError].
         * @returns error quark
         */
        function invoke_error_quark(): GLib.Quark;
        /**
         * Convert a data pointer from a GLib data structure to a
         * [type`GIRepository`.Argument].
         *
         * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
         * [type`GLib`.HashTable], all store data pointers.
         *
         * In the case where the list or hash table is storing single types rather than
         * structs, these data pointers may have values stuffed into them via macros
         * such as `GPOINTER_TO_INT`.
         *
         * Use this function to ensure that all values are correctly extracted from
         * stuffed pointers, regardless of the machine’s architecture or endianness.
         *
         * This function fills in the appropriate field of `arg` with the value extracted
         * from `hash_pointer,` depending on `storage_type`.
         * @param storage_type a [type@GIRepository.TypeTag] obtained from   [method@GIRepository.TypeInfo.get_storage_type]
         * @param hash_pointer a pointer, such as a [struct@GLib.HashTable] data pointer
         */
        function type_tag_argument_from_hash_pointer(storage_type: TypeTag, hash_pointer: any | null): Argument;
        /**
         * Convert a [type`GIRepository`.Argument] to data pointer for use in a GLib
         * data structure.
         *
         * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
         * [type`GLib`.HashTable], all store data pointers.
         *
         * In the case where the list or hash table is storing single types rather than
         * structs, these data pointers may have values stuffed into them via macros
         * such as `GPOINTER_TO_INT`.
         *
         * Use this function to ensure that all values are correctly stuffed into
         * pointers, regardless of the machine’s architecture or endianness.
         *
         * This function returns a pointer stuffed with the appropriate field of `arg,`
         * depending on `storage_type`.
         * @param storage_type a [type@GIRepository.TypeTag] obtained from   [method@GIRepository.TypeInfo.get_storage_type]
         * @param arg a [type@GIRepository.Argument] with the value to stuff into a pointer
         * @returns A stuffed pointer, that can be stored in a [struct@GLib.HashTable],   for example
         */
        function type_tag_hash_pointer_from_argument(storage_type: TypeTag, arg: Argument): any | null;
        /**
         * Obtain a string representation of `type`
         * @param type the type_tag
         * @returns the string
         */
        function type_tag_to_string(type: TypeTag): string;
        /**
         * Flags for a [class`GIRepository`.FieldInfo].
         */

        /**
         * Flags for a [class`GIRepository`.FieldInfo].
         */
        export namespace FieldInfoFlags {
            export const $gtype: GObject.GType<FieldInfoFlags>;
        }

        enum FieldInfoFlags {
            /**
             * field is readable.
             */
            READABLE,
            /**
             * field is writable.
             */
            WRITABLE,
        }
        /**
         * Flags for a [class`GIRepository`.FunctionInfo] struct.
         */

        /**
         * Flags for a [class`GIRepository`.FunctionInfo] struct.
         */
        export namespace FunctionInfoFlags {
            export const $gtype: GObject.GType<FunctionInfoFlags>;
        }

        enum FunctionInfoFlags {
            /**
             * is a method.
             */
            IS_METHOD,
            /**
             * is a constructor.
             */
            IS_CONSTRUCTOR,
            /**
             * is a getter of a [class`GIRepository`.PropertyInfo].
             */
            IS_GETTER,
            /**
             * is a setter of a [class`GIRepository`.PropertyInfo].
             */
            IS_SETTER,
            /**
             * represents a virtual function.
             */
            WRAPS_VFUNC,
            IS_ASYNC,
        }
        /**
         * Flags that control how a typelib is loaded.
         */

        /**
         * Flags that control how a typelib is loaded.
         */
        export namespace RepositoryLoadFlags {
            export const $gtype: GObject.GType<RepositoryLoadFlags>;
        }

        enum RepositoryLoadFlags {
            /**
             * No flags set.
             */
            NONE,
            /**
             * Lazily load the typelib.
             */
            LAZY,
        }
        /**
         * Flags of a [class`GIRepository`.VFuncInfo] struct.
         */

        /**
         * Flags of a [class`GIRepository`.VFuncInfo] struct.
         */
        export namespace VFuncInfoFlags {
            export const $gtype: GObject.GType<VFuncInfoFlags>;
        }

        enum VFuncInfoFlags {
            /**
             * chains up to the parent type
             */
            CHAIN_UP,
            /**
             * overrides
             */
            OVERRIDE,
            /**
             * does not override
             */
            NOT_OVERRIDE,
        }
        /**
         * `GIArgInfo` represents an argument of a callable.
         *
         * An argument is always part of a [class`GIRepository`.CallableInfo].
         */
        class ArgInfo extends BaseInfo {
            static $gtype: GObject.GType<ArgInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the index of the user data argument. This is only valid
             * for arguments which are callbacks.
             * @returns `TRUE` if the argument has a user data argument
             */
            get_closure_index(): [boolean, number];
            /**
             * Obtains the index of the [type`GLib`.DestroyNotify] argument. This is only
             * valid for arguments which are callbacks.
             * @returns `TRUE` if the argument has a [type@GLib.DestroyNotify] argument
             */
            get_destroy_index(): [boolean, number];
            /**
             * Obtain the direction of the argument. Check [type`GIRepository`.Direction]
             * for possible direction values.
             * @returns The direction
             */
            get_direction(): Direction;
            /**
             * Obtain the ownership transfer for this argument.
             * [type`GIRepository`.Transfer] contains a list of possible values.
             * @returns The transfer
             */
            get_ownership_transfer(): Transfer;
            /**
             * Obtain the scope type for this argument.
             *
             * The scope type explains how a callback is going to be invoked, most
             * importantly when the resources required to invoke it can be freed.
             *
             * [type`GIRepository`.ScopeType] contains a list of possible values.
             * @returns The scope type
             */
            get_scope(): ScopeType;
            /**
             * Obtain the type information for `info`.
             * @returns The [class@GIRepository.TypeInfo] holding the type   information for @info, free it with [method@GIRepository.BaseInfo.unref]   when done
             */
            get_type_info(): TypeInfo;
            /**
             * Obtain if the argument is a pointer to a struct or object that will
             * receive an output of a function.
             *
             * The default assumption for `GI_DIRECTION_OUT` arguments which have allocation
             * is that the callee allocates; if this is `TRUE`, then the caller must
             * allocate.
             * @returns `TRUE` if caller is required to have allocated the argument
             */
            is_caller_allocates(): boolean;
            /**
             * Obtain if the argument is optional.
             *
             * For ‘out’ arguments this means that you can pass `NULL` in order to ignore
             * the result.
             * @returns `TRUE` if it is an optional argument
             */
            is_optional(): boolean;
            /**
             * Obtain if the argument is a return value. It can either be a
             * parameter or a return value.
             * @returns `TRUE` if it is a return value
             */
            is_return_value(): boolean;
            /**
             * Obtain if an argument is only useful in C.
             * @returns `TRUE` if argument is only useful in C.
             */
            is_skip(): boolean;
            /**
             * Obtain information about a the type of given argument `info;` this
             * function is a variant of [method`GIRepository`.ArgInfo.get_type_info] designed
             * for stack allocation.
             *
             * The initialized `type` must not be referenced after `info` is deallocated.
             *
             * Once you are done with `type,` it must be cleared using
             * [method`GIRepository`.BaseInfo.clear].
             */
            load_type_info(): TypeInfo;
            /**
             * Obtain if the type of the argument includes the possibility of `NULL`.
             *
             * For ‘in’ values this means that `NULL` is a valid value.  For ‘out’
             * values, this means that `NULL` may be returned.
             *
             * See also [method`GIRepository`.ArgInfo.is_optional].
             * @returns `TRUE` if the value may be `NULL`
             */
            may_be_null(): boolean;
        }

        /**
         * `GIBaseInfo` is the common base struct of all other Info structs
         * accessible through the [class`GIRepository`.Repository] API.
         *
         * All info structures can be cast to a `GIBaseInfo`, for instance:
         *
         * ```c
         *    GIFunctionInfo *function_info = …;
         *    GIBaseInfo *info = (GIBaseInfo *) function_info;
         * ```
         *
         * Most [class`GIRepository`.Repository] APIs returning a `GIBaseInfo` are
         * actually creating a new struct; in other words,
         * [method`GIRepository`.BaseInfo.unref] has to be called when done accessing the
         * data.
         *
         * `GIBaseInfo` structuress are normally accessed by calling either
         * [method`GIRepository`.Repository.find_by_name],
         * [method`GIRepository`.Repository.find_by_gtype] or
         * [method`GIRepository`.get_info].
         *
         * ```c
         * GIBaseInfo *button_info =
         *   gi_repository_find_by_name (NULL, "Gtk", "Button");
         *
         * // use button_info…
         *
         * gi_base_info_unref (button_info);
         * ```
         */
        abstract class BaseInfo {
            static $gtype: GObject.GType<BaseInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Clears memory allocated internally by a stack-allocated
             * [type`GIRepository`.BaseInfo].
             *
             * This does not deallocate the [type`GIRepository`.BaseInfo] struct itself. It
             * does clear the struct to zero so that calling this function subsequent times
             * on the same struct is a no-op.
             *
             * This must only be called on stack-allocated [type`GIRepository`.BaseInfo]s.
             * Use [method`GIRepository`.BaseInfo.unref] for heap-allocated ones.
             */
            clear(): void;
            /**
             * Compare two `GIBaseInfo`s.
             *
             * Using pointer comparison is not practical since many functions return
             * different instances of `GIBaseInfo` that refers to the same part of the
             * TypeLib; use this function instead to do `GIBaseInfo` comparisons.
             * @param info2 a #GIBaseInfo
             * @returns `TRUE` if and only if @info1 equals @info2.
             */
            equal(info2: BaseInfo): boolean;
            /**
             * Retrieve an arbitrary attribute associated with this node.
             * @param name a freeform string naming an attribute
             * @returns The value of the attribute, or `NULL` if no such   attribute exists
             */
            get_attribute(name: string): string | null;
            /**
             * Obtain the container of the `info`.
             *
             * The container is the parent `GIBaseInfo`. For instance, the parent of a
             * [class`GIRepository`.FunctionInfo] is an [class`GIRepository`.ObjectInfo] or
             * [class`GIRepository`.InterfaceInfo].
             * @returns the container
             */
            get_container(): BaseInfo;
            /**
             * Obtain the name of the `info`.
             *
             * What the name represents depends on the type of the
             * `info`. For instance for [class`GIRepository`.FunctionInfo] it is the name of
             * the function.
             * @returns the name of @info or `NULL` if it lacks a name.
             */
            get_name(): string | null;
            /**
             * Obtain the namespace of `info`.
             * @returns the namespace
             */
            get_namespace(): string;
            /**
             * Obtain the typelib this `info` belongs to
             * @returns the typelib
             */
            get_typelib(): Typelib;
            /**
             * Obtain whether the `info` is represents a metadata which is
             * deprecated.
             * @returns `TRUE` if deprecated
             */
            is_deprecated(): boolean;
            /**
             * Iterate over all attributes associated with this node.
             *
             * The iterator structure is typically stack allocated, and must have its first
             * member initialized to `NULL`.  Attributes are arbitrary namespaced key–value
             * pairs which can be attached to almost any item.  They are intended for use
             * by software higher in the toolchain than bindings, and are distinct from
             * normal GIR annotations.
             *
             * Both the `name` and `value` should be treated as constants
             * and must not be freed.
             *
             * ```c
             * void
             * print_attributes (GIBaseInfo *info)
             * {
             *   GIAttributeIter iter = GI_ATTRIBUTE_ITER_INIT;
             *   const char *name;
             *   const char *value;
             *   while (gi_base_info_iterate_attributes (info, &iter, &name, &value))
             *     {
             *       g_print ("attribute name: %s value: %s", name, value);
             *     }
             * }
             * ```
             * @param iterator a [type@GIRepository.AttributeIter] structure, must be   initialized; see below
             * @returns `TRUE` if there are more attributes
             */
            iterate_attributes(iterator: AttributeIter): [boolean, AttributeIter, string, string];
            /**
             * Increases the reference count of `info`.
             * @returns the same @info.
             */
            ref(): BaseInfo;
            /**
             * Decreases the reference count of `info`. When its reference count
             * drops to 0, the info is freed.
             *
             * This must not be called on stack-allocated [type`GIRepository`.BaseInfo]s —
             * use [method`GIRepository`.BaseInfo.clear] for that.
             */
            unref(): void;
        }

        /**
         * `GICallableInfo` represents an entity which is callable.
         *
         * Examples of callable are:
         *
         *  - functions ([class`GIRepository`.FunctionInfo])
         *  - virtual functions ([class`GIRepository`.VFuncInfo])
         *  - callbacks ([class`GIRepository`.CallbackInfo]).
         *
         * A callable has a list of arguments ([class`GIRepository`.ArgInfo]), a return
         * type, direction and a flag which decides if it returns `NULL`.
         */
        abstract class CallableInfo extends BaseInfo {
            static $gtype: GObject.GType<CallableInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Whether the callable can throw a [type`GLib`.Error]
             * @returns `TRUE` if this `GICallableInfo` can throw a [type@GLib.Error]
             */
            can_throw_gerror(): boolean;
            /**
             * Obtain information about a particular argument of this callable.
             * @param n the argument index to fetch
             * @returns the [class@GIRepository.ArgInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_arg(n: number): ArgInfo;
            /**
             * Gets the callable info for the callable's asynchronous version
             * @returns a [class@GIRepository.CallableInfo] for the   async function or `NULL` if not defined.
             */
            get_async_function(): CallableInfo | null;
            /**
             * See whether the caller owns the return value of this callable.
             *
             * [type`GIRepository`.Transfer] contains a list of possible transfer values.
             * @returns the transfer mode for the return value of the callable
             */
            get_caller_owns(): Transfer;
            /**
             * Gets the info for an async function's corresponding finish function
             * @returns a [class@GIRepository.CallableInfo] for the   finish function or `NULL` if not defined.
             */
            get_finish_function(): CallableInfo | null;
            /**
             * Obtains the ownership transfer for the instance argument.
             *
             * [type`GIRepository`.Transfer] contains a list of possible transfer values.
             * @returns the transfer mode of the instance argument
             */
            get_instance_ownership_transfer(): Transfer;
            /**
             * Obtain the number of arguments (both ‘in’ and ‘out’) for this callable.
             * @returns The number of arguments this callable expects.
             */
            get_n_args(): number;
            /**
             * Retrieve an arbitrary attribute associated with the return value.
             * @param name a freeform string naming an attribute
             * @returns The value of the attribute, or `NULL` if no such   attribute exists
             */
            get_return_attribute(name: string): string | null;
            /**
             * Obtain the return type of a callable item as a [class`GIRepository`.TypeInfo].
             *
             * If the callable doesn’t return anything, a [class`GIRepository`.TypeInfo] of
             * type [enum`GIRepository`.TypeTag.VOID] will be returned.
             * @returns the [class@GIRepository.TypeInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_return_type(): TypeInfo;
            /**
             * Gets the callable info for the callable's synchronous version
             * @returns a [class@GIRepository.CallableInfo] for the   sync function or `NULL` if not defined.
             */
            get_sync_function(): CallableInfo | null;
            /**
             * Invoke the given `GICallableInfo` by calling the given `function` pointer.
             *
             * The set of arguments passed to `function` will be constructed according to the
             * introspected type of the `GICallableInfo`, using `in_args,` `out_args`
             * and `error`.
             * @param _function function pointer to call
             * @param in_args array of ‘in’ arguments
             * @param out_args array of ‘out’ arguments allocated by   the caller, to be populated with outputted values
             * @returns `TRUE` if the callable was executed successfully and didn’t throw   a [type@GLib.Error]; `FALSE` if @error is set
             */
            invoke(_function: any | null, in_args: Argument[], out_args: Argument[]): [boolean, Argument];
            /**
             * Gets whether a callable is ‘async’. Async callables have a
             * [type`Gio`.AsyncReadyCallback] parameter and user data.
             * @returns true if the callable is async
             */
            is_async(): boolean;
            /**
             * Determines if the callable info is a method.
             *
             * For [class`GIRepository`.VFuncInfo]s, [class`GIRepository`.CallbackInfo]s, and
             * [class`GIRepository`.SignalInfo]s, this is always true. Otherwise, this looks
             * at the `GI_FUNCTION_IS_METHOD` flag on the [class`GIRepository`.FunctionInfo].
             *
             * Concretely, this function returns whether
             * [method`GIRepository`.CallableInfo.get_n_args] matches the number of arguments
             * in the raw C method. For methods, there is one more C argument than is
             * exposed by introspection: the `self` or `this` object.
             * @returns `TRUE` if @info is a method, `FALSE` otherwise
             */
            is_method(): boolean;
            /**
             * Iterate over all attributes associated with the return value.
             *
             * The iterator structure is typically stack allocated, and must have its
             * first member initialized to `NULL`.
             *
             * Both the `name` and `value` should be treated as constants
             * and must not be freed.
             *
             * See [method`GIRepository`.BaseInfo.iterate_attributes] for an example of how
             * to use a similar API.
             * @param iterator a [type@GIRepository.AttributeIter] structure, must be   initialized; see below
             * @returns `TRUE` if there are more attributes
             */
            iterate_return_attributes(iterator: AttributeIter): [boolean, AttributeIter, string, string];
            /**
             * Obtain information about a particular argument of this callable; this
             * function is a variant of [method`GIRepository`.CallableInfo.get_arg] designed
             * for stack allocation.
             *
             * The initialized `arg` must not be referenced after `info` is deallocated.
             *
             * Once you are done with `arg,` it must be cleared using
             * [method`GIRepository`.BaseInfo.clear].
             * @param n the argument index to fetch
             */
            load_arg(n: number): ArgInfo;
            /**
             * Obtain information about a return value of callable; this
             * function is a variant of [method`GIRepository`.CallableInfo.get_return_type]
             * designed for stack allocation.
             *
             * The initialized `type` must not be referenced after `info` is deallocated.
             *
             * Once you are done with `type,` it must be cleared using
             * [method`GIRepository`.BaseInfo.clear].
             */
            load_return_type(): TypeInfo;
            /**
             * See if a callable could return `NULL`.
             * @returns `TRUE` if callable could return `NULL`
             */
            may_return_null(): boolean;
            /**
             * See if a callable’s return value is only useful in C.
             * @returns `TRUE` if return value is only useful in C.
             */
            skip_return(): boolean;
        }

        /**
         * `GICallbackInfo` represents a callback.
         */
        class CallbackInfo extends CallableInfo {
            static $gtype: GObject.GType<CallbackInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * `GIConstantInfo` represents a constant.
         *
         * A constant has a type associated – which can be obtained by calling
         * [method`GIRepository`.ConstantInfo.get_type_info] – and a value – which can be
         * obtained by calling [method`GIRepository`.ConstantInfo.get_value].
         */
        class ConstantInfo extends BaseInfo {
            static $gtype: GObject.GType<ConstantInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the type of the constant as a [class`GIRepository`.TypeInfo].
             * @returns The [class@GIRepository.TypeInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_type_info(): TypeInfo;
        }

        /**
         * A `GIEnumInfo` represents an enumeration.
         *
         * The `GIEnumInfo` contains a set of values (each a
         * [class`GIRepository`.ValueInfo]) and a type.
         *
         * The [class`GIRepository`.ValueInfo] for a value is fetched by calling
         * [method`GIRepository`.EnumInfo.get_value] on a `GIEnumInfo`.
         */
        class EnumInfo extends RegisteredTypeInfo {
            static $gtype: GObject.GType<EnumInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the string form of the quark for the error domain associated with
             * this enum, if any.
             * @returns the string form of the error domain   associated with this enum, or `NULL`.
             */
            get_error_domain(): string | null;
            /**
             * Obtain an enum type method at index `n`.
             * @param n index of method to get
             * @returns the [class@GIRepository.FunctionInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_method(n: number): FunctionInfo;
            /**
             * Obtain the number of methods that this enum type has.
             * @returns number of methods
             */
            get_n_methods(): number;
            /**
             * Obtain the number of values this enumeration contains.
             * @returns the number of enumeration values
             */
            get_n_values(): number;
            /**
             * Obtain the tag of the type used for the enum in the C ABI. This will
             * will be a signed or unsigned integral type.
             *
             * Note that in the current implementation the width of the type is
             * computed correctly, but the signed or unsigned nature of the type
             * may not match the sign of the type used by the C compiler.
             * @returns the storage type for the enumeration
             */
            get_storage_type(): TypeTag;
            /**
             * Obtain a value for this enumeration.
             * @param n index of value to fetch
             * @returns the enumeration value, free the struct with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_value(n: number): ValueInfo;
        }

        /**
         * A `GIFieldInfo` struct represents a field of a struct, union, or object.
         *
         * The `GIFieldInfo` is fetched by calling
         * [method`GIRepository`.StructInfo.get_field],
         * [method`GIRepository`.UnionInfo.get_field] or
         * [method`GIRepository`.ObjectInfo.get_field].
         *
         * A field has a size, type and a struct offset associated and a set of flags,
         * which are currently `GI_FIELD_IS_READABLE` or `GI_FIELD_IS_WRITABLE`.
         *
         * See also: [type`GIRepository`.StructInfo], [type`GIRepository`.UnionInfo],
         * [type`GIRepository`.ObjectInfo]
         */
        class FieldInfo extends BaseInfo {
            static $gtype: GObject.GType<FieldInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the flags for this `GIFieldInfo`. See
             * [flags`GIRepository`.FieldInfoFlags] for possible flag values.
             * @returns the flags
             */
            get_flags(): FieldInfoFlags;
            /**
             * Obtain the offset of the field member, in bytes. This is relative
             * to the beginning of the struct or union.
             * @returns the field offset, in bytes
             */
            get_offset(): number;
            /**
             * Obtain the size of the field member, in bits. This is how
             * much space you need to allocate to store the field.
             * @returns the field size, in bits
             */
            get_size(): number;
            /**
             * Obtain the type of a field as a [type`GIRepository`.TypeInfo].
             * @returns the [type@GIRepository.TypeInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_type_info(): TypeInfo;
        }

        /**
         * A `GIFlagsInfo` represents an enumeration which defines flag values
         * (independently set bits).
         *
         * The `GIFlagsInfo` contains a set of values (each a
         * [class`GIRepository`.ValueInfo]) and a type.
         *
         * The [class`GIRepository`.ValueInfo] for a value is fetched by calling
         * [method`GIRepository`.EnumInfo.get_value] on a `GIFlagsInfo`.
         */
        class FlagsInfo extends EnumInfo {
            static $gtype: GObject.GType<FlagsInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * `GIFunctionInfo` represents a function, method or constructor.
         *
         * To find out what kind of entity a `GIFunctionInfo` represents, call
         * [method`GIRepository`.FunctionInfo.get_flags].
         *
         * See also [class`GIRepository`.CallableInfo] for information on how to retrieve
         * arguments and other metadata.
         */
        class FunctionInfo extends CallableInfo {
            static $gtype: GObject.GType<FunctionInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the [type`GIRepository`.FunctionInfoFlags] for the `info`.
             * @returns the flags
             */
            get_flags(): FunctionInfoFlags;
            /**
             * Obtain the property associated with this `GIFunctionInfo`.
             *
             * Only `GIFunctionInfo`s with the flag `GI_FUNCTION_IS_GETTER` or
             * `GI_FUNCTION_IS_SETTER` have a property set. For other cases,
             * `NULL` will be returned.
             * @returns The property or `NULL` if not set. Free   it with [method@GIRepository.BaseInfo.unref] when done.
             */
            get_property(): PropertyInfo | null;
            /**
             * Obtain the symbol of the function.
             *
             * The symbol is the name of the exported function, suitable to be used as an
             * argument to [method`GModule`.Module.symbol].
             * @returns the symbol
             */
            get_symbol(): string;
            /**
             * Obtain the virtual function associated with this `GIFunctionInfo`.
             *
             * Only `GIFunctionInfo`s with the flag `GI_FUNCTION_WRAPS_VFUNC` have
             * a virtual function set. For other cases, `NULL` will be returned.
             * @returns The virtual function or `NULL` if not   set. Free it by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_vfunc(): VFuncInfo | null;
        }

        /**
         * `GIInterfaceInfo` represents a `GInterface` type.
         *
         * A `GInterface` has methods, fields, properties, signals,
         * interfaces, constants, virtual functions and prerequisites.
         */
        class InterfaceInfo extends RegisteredTypeInfo {
            static $gtype: GObject.GType<InterfaceInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain a method of the interface type given a `name`.
             *
             * `NULL` will be returned if there’s no method available with that name.
             * @param name name of method to obtain
             * @returns The [class@GIRepository.FunctionInfo] or   `NULL` if none found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
             */
            find_method(name: string): FunctionInfo | null;
            /**
             * Obtain a signal of the interface type given a `name`.
             *
             * `NULL` will be returned if there’s no signal available with that name.
             * @param name name of signal to find
             * @returns The [class@GIRepository.SignalInfo] or   `NULL` if none found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
             */
            find_signal(name: string): SignalInfo | null;
            /**
             * Locate a virtual function slot with name `name`.
             *
             * See the documentation for [method`GIRepository`.ObjectInfo.find_vfunc] for
             * more information on virtuals.
             * @param name The name of a virtual function to find.
             * @returns The [class@GIRepository.VFuncInfo], or   `NULL` if none found. Free it with [method@GIRepository.BaseInfo.unref]   when done.
             */
            find_vfunc(name: string): VFuncInfo | null;
            /**
             * Obtain an interface type constant at index `n`.
             * @param n index of constant to get
             * @returns The [class@GIRepository.ConstantInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_constant(n: number): ConstantInfo;
            /**
             * Returns the layout C structure associated with this `GInterface`.
             * @returns The [class@GIRepository.StructInfo] or   `NULL` if unknown. Free it with [method@GIRepository.BaseInfo.unref] when   done.
             */
            get_iface_struct(): StructInfo | null;
            /**
             * Obtain an interface type method at index `n`.
             * @param n index of method to get
             * @returns The [class@GIRepository.FunctionInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_method(n: number): FunctionInfo;
            /**
             * Obtain the number of constants that this interface type has.
             * @returns number of constants
             */
            get_n_constants(): number;
            /**
             * Obtain the number of methods that this interface type has.
             * @returns number of methods
             */
            get_n_methods(): number;
            /**
             * Obtain the number of prerequisites for this interface type.
             *
             * A prerequisite is another interface that needs to be implemented for
             * interface, similar to a base class for [class`GObject`.Object]s.
             * @returns number of prerequisites
             */
            get_n_prerequisites(): number;
            /**
             * Obtain the number of properties that this interface type has.
             * @returns number of properties
             */
            get_n_properties(): number;
            /**
             * Obtain the number of signals that this interface type has.
             * @returns number of signals
             */
            get_n_signals(): number;
            /**
             * Obtain the number of virtual functions that this interface type has.
             * @returns number of virtual functions
             */
            get_n_vfuncs(): number;
            /**
             * Obtain an interface type’s prerequisite at index `n`.
             * @param n index of prerequisite to get
             * @returns The prerequisite as a [class@GIRepository.BaseInfo].   Free the struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_prerequisite(n: number): BaseInfo;
            /**
             * Obtain an interface type property at index `n`.
             * @param n index of property to get
             * @returns The [class@GIRepository.PropertyInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_property(n: number): PropertyInfo;
            /**
             * Obtain an interface type signal at index `n`.
             * @param n index of signal to get
             * @returns The [class@GIRepository.SignalInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_signal(n: number): SignalInfo;
            /**
             * Obtain an interface type virtual function at index `n`.
             * @param n index of virtual function to get
             * @returns the [class@GIRepository.VFuncInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_vfunc(n: number): VFuncInfo;
        }

        /**
         * `GIObjectInfo` represents a classed type.
         *
         * Classed types in [type`GObject`.Type] inherit from
         * [type`GObject`.TypeInstance]; the most common type is [class`GObject`.Object].
         *
         * A `GIObjectInfo` doesn’t represent a specific instance of a classed type,
         * instead this represent the object type (i.e. the class).
         *
         * A `GIObjectInfo` has methods, fields, properties, signals, interfaces,
         * constants and virtual functions.
         */
        class ObjectInfo extends RegisteredTypeInfo {
            static $gtype: GObject.GType<ObjectInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain a method of the object type given a `name`.
             *
             * `NULL` will be returned if there’s no method available with that name.
             * @param name name of method to obtain
             * @returns The [class@GIRepository.FunctionInfo],   or `NULL` if no method could be found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
             */
            find_method(name: string): FunctionInfo | null;
            /**
             * Obtain a method of the object given a `name,` searching both the
             * object `info` and any interfaces it implements.
             *
             * `NULL` will be returned if there’s no method available with that name.
             *
             * Note that this function does *not* search parent classes; you will have
             * to chain up if that’s desired.
             * @param name name of method to obtain
             * @returns The [class@GIRepository.FunctionInfo],   or `NULL` if none was found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
             */
            find_method_using_interfaces(name: string): [FunctionInfo | null, BaseInfo | null];
            /**
             * Obtain a signal of the object type given a `name`.
             *
             * `NULL` will be returned if there’s no signal available with that name.
             * @param name name of signal
             * @returns The [class@GIRepository.SignalInfo],   or `NULL` if no signal could be found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
             */
            find_signal(name: string): SignalInfo | null;
            /**
             * Locate a virtual function slot with name `name`.
             *
             * Note that the namespace for virtuals is distinct from that of methods; there
             * may or may not be a concrete method associated for a virtual. If there is
             * one, it may be retrieved using [method`GIRepository`.VFuncInfo.get_invoker],
             * otherwise that method will return `NULL`.
             *
             * See the documentation for [method`GIRepository`.VFuncInfo.get_invoker] for
             * more information on invoking virtuals.
             * @param name the name of a virtual function to find.
             * @returns The [class@GIRepository.VFuncInfo], or   `NULL` if none is found. Free it with [method@GIRepository.BaseInfo.unref]   when done.
             */
            find_vfunc(name: string): VFuncInfo | null;
            /**
             * Locate a virtual function slot with name `name,` searching both the object
             * `info` and any interfaces it implements.
             *
             * `NULL` will be returned if there’s no vfunc available with that name.
             *
             * Note that the namespace for virtuals is distinct from that of methods; there
             * may or may not be a concrete method associated for a virtual. If there is
             * one, it may be retrieved using [method`GIRepository`.VFuncInfo.get_invoker],
             * otherwise that method will return `NULL`.
             *
             * Note that this function does *not* search parent classes; you will have
             * to chain up if that’s desired.
             * @param name name of vfunc to obtain
             * @returns The [class@GIRepository.VFuncInfo],   or `NULL` if none was found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
             */
            find_vfunc_using_interfaces(name: string): [VFuncInfo | null, BaseInfo | null];
            /**
             * Obtain if the object type is an abstract type, i.e. if it cannot be
             * instantiated.
             * @returns `TRUE` if the object type is abstract
             */
            get_abstract(): boolean;
            /**
             * Every [class`GObject`.Object] has two structures; an instance structure and a
             * class structure.  This function returns the metadata for the class structure.
             * @returns The [class@GIRepository.StructInfo] or   `NULL` if it’s unknown. Free with [method@GIRepository.BaseInfo.unref] when   done.
             */
            get_class_struct(): StructInfo | null;
            /**
             * Obtain an object type constant at index `n`.
             * @param n index of constant to get
             * @returns The [class@GIRepository.ConstantInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_constant(n: number): ConstantInfo;
            /**
             * Obtain an object type field at index `n`.
             * @param n index of field to get
             * @returns The [class@GIRepository.FieldInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_field(n: number): FieldInfo;
            /**
             * Checks whether the object type is a final type, i.e. if it cannot
             * be derived.
             * @returns `TRUE` if the object type is final
             */
            get_final(): boolean;
            /**
             * Obtain if the object type is of a fundamental type which is not
             * `G_TYPE_OBJECT`.
             *
             * This is mostly for supporting `GstMiniObject`.
             * @returns `TRUE` if the object type is a fundamental type
             */
            get_fundamental(): boolean;
            /**
             * Obtain the symbol name of the function that should be called to convert
             * an object instance pointer of this object type to a [type`GObject`.Value].
             *
             * It’s mainly used for fundamental types. The type signature for the symbol
             * is [type`GIRepository`.ObjectInfoGetValueFunction]. To fetch the function
             * pointer see [method`GIRepository`.ObjectInfo.get_get_value_function_pointer].
             * @returns the symbol, or `NULL` if the object type has no   get-value function
             */
            get_get_value_function_name(): string | null;
            /**
             * Obtain an object type interface at index `n`.
             * @param n index of interface to get
             * @returns The [class@GIRepository.InterfaceInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_interface(n: number): InterfaceInfo;
            /**
             * Obtain an object type method at index `n`.
             * @param n index of method to get
             * @returns The [class@GIRepository.FunctionInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_method(n: number): FunctionInfo;
            /**
             * Obtain the number of constants that this object type has.
             * @returns number of constants
             */
            get_n_constants(): number;
            /**
             * Obtain the number of fields that this object type has.
             * @returns number of fields
             */
            get_n_fields(): number;
            /**
             * Obtain the number of interfaces that this object type has.
             * @returns number of interfaces
             */
            get_n_interfaces(): number;
            /**
             * Obtain the number of methods that this object type has.
             * @returns number of methods
             */
            get_n_methods(): number;
            /**
             * Obtain the number of properties that this object type has.
             * @returns number of properties
             */
            get_n_properties(): number;
            /**
             * Obtain the number of signals that this object type has.
             * @returns number of signals
             */
            get_n_signals(): number;
            /**
             * Obtain the number of virtual functions that this object type has.
             * @returns number of virtual functions
             */
            get_n_vfuncs(): number;
            /**
             * Obtain the parent of the object type.
             * @returns The `GIObjectInfo`. Free the struct by   calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_parent(): ObjectInfo | null;
            /**
             * Obtain an object type property at index `n`.
             * @param n index of property to get
             * @returns The [class@GIRepository.PropertyInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_property(n: number): PropertyInfo;
            /**
             * Obtain the symbol name of the function that should be called to ref this
             * object type.
             *
             * It’s mainly used for fundamental types. The type signature for
             * the symbol is [type`GIRepository`.ObjectInfoRefFunction]. To fetch the
             * function pointer see
             * [method`GIRepository`.ObjectInfo.get_ref_function_pointer].
             * @returns the symbol, or `NULL` if the object type has no ref   function
             */
            get_ref_function_name(): string | null;
            /**
             * Obtain the symbol name of the function that should be called to set a
             * [type`GObject`.Value], given an object instance pointer of this object type.
             *
             * It’s mainly used for fundamental types. The type signature for the symbol
             * is [type`GIRepository`.ObjectInfoSetValueFunction]. To fetch the function
             * pointer see [method`GIRepository`.ObjectInfo.get_set_value_function_pointer].
             * @returns the symbol, or `NULL` if the object type has no   set-value function
             */
            get_set_value_function_name(): string | null;
            /**
             * Obtain an object type signal at index `n`.
             * @param n index of signal to get
             * @returns The [class@GIRepository.SignalInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_signal(n: number): SignalInfo;
            /**
             * Obtain the name of the function which, when called, will return the
             * [type`GObject`.Type] for this object type.
             * @returns the type init function name
             */
            get_type_init_function_name(): string;
            // Conflicted with GIRepository.RegisteredTypeInfo.get_type_init_function_name
            get_type_init_function_name(...args: never[]): any;
            /**
             * Obtain the name of the object’s class/type.
             * @returns name of the object’s type
             */
            get_type_name(): string;
            // Conflicted with GIRepository.RegisteredTypeInfo.get_type_name
            get_type_name(...args: never[]): any;
            /**
             * Obtain the symbol name of the function that should be called to unref this
             * object type.
             *
             * It’s mainly used for fundamental types. The type signature for the symbol is
             * [type`GIRepository`.ObjectInfoUnrefFunction]. To fetch the function pointer
             * see [method`GIRepository`.ObjectInfo.get_unref_function_pointer].
             * @returns the symbol, or `NULL` if the object type has no unref   function
             */
            get_unref_function_name(): string | null;
            /**
             * Obtain an object type virtual function at index `n`.
             * @param n index of virtual function to get
             * @returns The [class@GIRepository.VFuncInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
             */
            get_vfunc(n: number): VFuncInfo;
        }

        /**
         * `GIPropertyInfo` represents a property in a [class`GObject`.Object].
         *
         * A property belongs to either a [class`GIRepository`.ObjectInfo] or a
         * [class`GIRepository`.InterfaceInfo].
         */
        class PropertyInfo extends BaseInfo {
            static $gtype: GObject.GType<PropertyInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the flags for this property info.
             *
             * See [type`GObject`.ParamFlags] for more information about possible flag
             * values.
             * @returns the flags
             */
            get_flags(): GObject.ParamFlags;
            /**
             * Obtains the getter function associated with this `GIPropertyInfo`.
             *
             * The setter is only available for `G_PARAM_READABLE` properties.
             * @returns The function info, or `NULL` if not set.   Free it with [method@GIRepository.BaseInfo.unref] when done.
             */
            get_getter(): FunctionInfo | null;
            /**
             * Obtain the ownership transfer for this property.
             *
             * See [type`GIRepository`.Transfer] for more information about transfer values.
             * @returns the transfer
             */
            get_ownership_transfer(): Transfer;
            /**
             * Obtains the setter function associated with this `GIPropertyInfo`.
             *
             * The setter is only available for `G_PARAM_WRITABLE` properties that
             * are also not `G_PARAM_CONSTRUCT_ONLY`.
             * @returns The function info, or `NULL` if not set.   Free it with [method@GIRepository.BaseInfo.unref] when done.
             */
            get_setter(): FunctionInfo | null;
            /**
             * Obtain the type information for the property `info`.
             * @returns The [class@GIRepository.TypeInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_type_info(): TypeInfo;
        }

        /**
         * `GIRegisteredTypeInfo` represents an entity with a [type`GObject`.Type]
         * associated.
         *
         * Could be either a [class`GIRepository`.EnumInfo],
         * [class`GIRepository`.InterfaceInfo], [class`GIRepository`.ObjectInfo],
         * [class`GIRepository`.StructInfo] or a [class`GIRepository`.UnionInfo].
         *
         * A registered type info struct has a name and a type function.
         *
         * To get the name call [method`GIRepository`.RegisteredTypeInfo.get_type_name].
         * Most users want to call [method`GIRepository`.RegisteredTypeInfo.get_g_type]
         * and don’t worry about the rest of the details.
         *
         * If the registered type is a subtype of `G_TYPE_BOXED`,
         * [method`GIRepository`.RegisteredTypeInfo.is_boxed] will return true, and
         * [method`GIRepository`.RegisteredTypeInfo.get_type_name] is guaranteed to
         * return a non-`NULL` value. This is relevant for the
         * [class`GIRepository`.StructInfo] and [class`GIRepository`.UnionInfo]
         * subclasses.
         */
        abstract class RegisteredTypeInfo extends BaseInfo {
            static $gtype: GObject.GType<RegisteredTypeInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the [type`GObject`.Type] for this registered type.
             *
             * If there is no type information associated with `info,` or the shared library
             * which provides the `type_init` function for `info` cannot be called, then
             * `G_TYPE_NONE` is returned.
             * @returns the [type@GObject.Type], or `G_TYPE_NONE` if unknown
             */
            get_g_type(): GObject.GType;
            /**
             * Obtain the type init function for `info`.
             *
             * The type init function is the function which will register the
             * [type`GObject`.Type] within the GObject type system. Usually this is not
             * called by language bindings or applications — use
             * [method`GIRepository`.RegisteredTypeInfo.get_g_type] directly instead.
             * @returns the symbol name of the type init function, suitable for   passing into [method@GModule.Module.symbol], or `NULL` if unknown
             */
            get_type_init_function_name(): string | null;
            /**
             * Obtain the type name of the struct within the GObject type system.
             *
             * This type can be passed to [func`GObject`.type_name] to get a
             * [type`GObject`.Type].
             * @returns the type name, or `NULL` if unknown
             */
            get_type_name(): string | null;
            /**
             * Get whether the registered type is a boxed type.
             *
             * A boxed type is a subtype of the fundamental `G_TYPE_BOXED` type.
             * It’s a type which has registered a [type`GObject`.Type], and which has
             * associated copy and free functions.
             *
             * Most boxed types are `struct`s; some are `union`s; and it’s possible for a
             * boxed type to be neither, but that is currently unsupported by
             * libgirepository. It’s also possible for a `struct` or `union` to have
             * associated copy and/or free functions *without* being a boxed type, by virtue
             * of not having registered a [type`GObject`.Type].
             *
             * This function will return false for [type`GObject`.Type]s which are not boxed,
             * such as classes or interfaces. It will also return false for the `struct`s
             * associated with a class or interface, which return true from
             * [method`GIRepository`.StructInfo.is_gtype_struct].
             * @returns true if @info is a boxed type
             */
            is_boxed(): boolean;
        }

        module Repository {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * `GIRepository` is used to manage repositories of namespaces. Namespaces
         * are represented on disk by type libraries (`.typelib` files).
         *
         * The individual pieces of API within a type library are represented by
         * subclasses of [class`GIRepository`.BaseInfo]. These can be found using
         * methods like [method`GIRepository`.Repository.find_by_name] or
         * [method`GIRepository`.Repository.get_info].
         *
         * You are responsible for ensuring that the lifetime of the
         * [class`GIRepository`.Repository] exceeds that of the lifetime of any of its
         * [class`GIRepository`.BaseInfo]s. This cannot be guaranteed by using internal
         * references within libgirepository as that would affect performance.
         *
         * ### Discovery of type libraries
         *
         * `GIRepository` will typically look for a `girepository-1.0` directory
         * under the library directory used when compiling gobject-introspection. On a
         * standard Linux system this will end up being `/usr/lib/girepository-1.0`.
         *
         * It is possible to control the search paths programmatically, using
         * [method`GIRepository`.Repository.prepend_search_path]. It is also possible to
         * modify the search paths by using the `GI_TYPELIB_PATH` environment variable.
         * The environment variable takes precedence over the default search path
         * and the [method`GIRepository`.Repository.prepend_search_path] calls.
         *
         * ### Namespace ordering
         *
         * In situations where namespaces may be searched in order, or returned in a
         * list, the namespaces will be returned in alphabetical order, with all fully
         * loaded namespaces being returned before any lazily loaded ones (those loaded
         * with `GI_REPOSITORY_LOAD_FLAG_LAZY`). This allows for deterministic and
         * reproducible results.
         *
         * Similarly, if a symbol (such as a `GType` or error domain) is being searched
         * for in the set of loaded namespaces, the namespaces will be searched in that
         * order. In particular, this means that a symbol which exists in two namespaces
         * will always be returned from the alphabetically-higher namespace. This should
         * only happen in the case of `Gio` and `GioUnix`/`GioWin32`, which all refer to
         * the same `.so` file and expose overlapping sets of symbols. Symbols should
         * always end up being resolved to `GioUnix` or `GioWin32` if they are platform
         * dependent, rather than `Gio` itself.
         */
        class Repository extends GObject.Object {
            static $gtype: GObject.GType<Repository>;

            // Constructors

            constructor(properties?: Partial<Repository.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Repository;

            // Static methods

            /**
             * Dump the introspection data from the types specified in `input_filename` to
             * `output_filename`.
             *
             * The input file should be a
             * UTF-8 Unix-line-ending text file, with each line containing either
             * `get-type:` followed by the name of a [type`GObject`.Type] `_get_type`
             * function, or `error-quark:` followed by the name of an error quark function.
             * No extra whitespace is allowed.
             *
             * This function will overwrite the contents of the output file.
             * @param input_filename Input filename (for example `input.txt`)
             * @param output_filename Output filename (for example `output.xml`)
             */
            static dump(input_filename: string, output_filename: string): boolean;
            static error_quark(): GLib.Quark;
            /**
             * Obtain the option group for girepository.
             *
             * It’s used by the dumper and for programs that want to provide introspection
             * information
             */
            static get_option_group(): GLib.OptionGroup;

            // Methods

            /**
             * Obtain an unordered list of versions (either currently loaded or
             * available) for `namespace_` in this `repository`.
             *
             * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
             * counted in `n_versions_out`.
             * @param namespace_ GI namespace, e.g. `Gtk`
             * @returns the array of versions.
             */
            enumerate_versions(namespace_: string): string[];
            /**
             * Searches for the enum type corresponding to the given [type`GLib`.Error]
             * domain.
             *
             * Before calling this function for a particular namespace, you must call
             * [method`GIRepository`.Repository.require] to load the namespace, or otherwise
             * ensure the namespace has already been loaded.
             * @param domain a [type@GLib.Error] domain
             * @returns [class@GIRepository.EnumInfo]   representing metadata about @domain’s enum type, or `NULL` if none found
             */
            find_by_error_domain(domain: GLib.Quark): EnumInfo | null;
            /**
             * Searches all loaded namespaces for a particular [type`GObject`.Type].
             *
             * Note that in order to locate the metadata, the namespace corresponding to
             * the type must first have been loaded.  There is currently no
             * mechanism for determining the namespace which corresponds to an
             * arbitrary [type`GObject`.Type] — thus, this function will operate most
             * reliably when you know the [type`GObject`.Type] is from a loaded namespace.
             * @param gtype [type@GObject.Type] to search for
             * @returns [class@GIRepository.BaseInfo]   representing metadata about @type, or `NULL` if none found
             */
            find_by_gtype(gtype: GObject.GType): BaseInfo | null;
            /**
             * Searches for a particular entry in a namespace.
             *
             * Before calling this function for a particular namespace, you must call
             * [method`GIRepository`.Repository.require] to load the namespace, or otherwise
             * ensure the namespace has already been loaded.
             * @param namespace_ Namespace which will be searched
             * @param name Entry name to find
             * @returns [class@GIRepository.BaseInfo]   representing metadata about @name, or `NULL` if none found
             */
            find_by_name(namespace_: string, name: string): BaseInfo | null;
            /**
             * This function returns the ‘C prefix’, or the C level namespace
             * associated with the given introspection namespace.
             *
             * Each C symbol starts with this prefix, as well each [type`GObject`.Type] in
             * the library.
             *
             * Note: The namespace must have already been loaded using a function
             * such as [method`GIRepository`.Repository.require] before calling this
             * function.
             * @param namespace_ Namespace to inspect
             * @returns C namespace prefix, or `NULL` if none associated
             */
            get_c_prefix(namespace_: string): string | null;
            /**
             * Retrieves all (transitive) versioned dependencies for
             * `namespace_`.
             *
             * The returned strings are of the form `namespace-version`.
             *
             * Note: `namespace_` must have already been loaded using a function
             * such as [method`GIRepository`.Repository.require] before calling this
             * function.
             *
             * To get only the immediate dependencies for `namespace_,` use
             * [method`GIRepository`.Repository.get_immediate_dependencies].
             *
             * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
             * counted in `n_dependencies_out`.
             * @param namespace_ Namespace of interest
             * @returns String array of   all versioned dependencies
             */
            get_dependencies(namespace_: string): string[];
            /**
             * Return an array of the immediate versioned dependencies for `namespace_`.
             * Returned strings are of the form `namespace-version`.
             *
             * Note: `namespace_` must have already been loaded using a function
             * such as [method`GIRepository`.Repository.require] before calling this
             * function.
             *
             * To get the transitive closure of dependencies for `namespace_,` use
             * [method`GIRepository`.Repository.get_dependencies].
             *
             * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
             * counted in `n_dependencies_out`.
             * @param namespace_ Namespace of interest
             * @returns String array of   immediate versioned dependencies
             */
            get_immediate_dependencies(namespace_: string): string[];
            /**
             * This function returns a particular metadata entry in the
             * given namespace `namespace_`.
             *
             * The namespace must have already been loaded before calling this function.
             * See [method`GIRepository`.Repository.get_n_infos] to find the maximum number
             * of entries. It is an error to pass an invalid `idx` to this function.
             * @param namespace_ Namespace to inspect
             * @param idx 0-based offset into namespace metadata for entry
             * @returns [class@GIRepository.BaseInfo]   containing metadata
             */
            get_info(namespace_: string, idx: number): BaseInfo;
            /**
             * Returns the current search path [class`GIRepository`.Repository] will use when
             * loading shared libraries referenced by imported namespaces.
             *
             * The list is internal to [class`GIRepository`.Repository] and should not be
             * freed, nor should its string elements.
             *
             * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
             * counted in `n_paths_out`.
             * @returns list of search paths, most   important first
             */
            get_library_path(): string[];
            /**
             * Return the list of currently loaded namespaces.
             *
             * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
             * counted in `n_namespaces_out`.
             * @returns list of namespaces
             */
            get_loaded_namespaces(): string[];
            /**
             * This function returns the number of metadata entries in
             * given namespace `namespace_`.
             *
             * The namespace must have already been loaded before calling this function.
             * @param namespace_ Namespace to inspect
             * @returns number of metadata entries
             */
            get_n_infos(namespace_: string): number;
            /**
             * Look up the implemented interfaces for `gtype`.
             *
             * This function cannot fail per se; but for a totally ‘unknown’
             * [type`GObject`.Type], it may return 0 implemented interfaces.
             *
             * The semantics of this function are designed for a dynamic binding,
             * where in certain cases (such as a function which returns an
             * interface which may have ‘hidden’ implementation classes), not all
             * data may be statically known, and will have to be determined from
             * the [type`GObject`.Type] of the object.  An example is
             * [func`Gio`.File.new_for_path] returning a concrete class of
             * `GLocalFile`, which is a [type`GObject`.Type] we see at runtime, but
             * not statically.
             * @param gtype a [type@GObject.Type] whose fundamental type is `G_TYPE_OBJECT`
             */
            get_object_gtype_interfaces(gtype: GObject.GType): InterfaceInfo[];
            /**
             * Returns the current search path [class`GIRepository`.Repository] will use when
             * loading typelib files.
             *
             * The list is internal to [class`GIRepository`.Repository] and should not be
             * freed, nor should its string elements.
             *
             * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
             * counted in `n_paths_out`.
             * @returns list of search paths, most   important first
             */
            get_search_path(): string[];
            /**
             * This function returns an array of paths to the
             * shared C libraries associated with the given namespace `namespace_`.
             *
             * There may be no shared library path associated, in which case this
             * function will return `NULL`.
             *
             * Note: The namespace must have already been loaded using a function
             * such as [method`GIRepository`.Repository.require] before calling this
             * function.
             *
             * The list is internal to [class`GIRepository`.Repository] and should not be
             * freed, nor should its string elements.
             *
             * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
             * counted in `out_n_elements`.
             * @param namespace_ Namespace to inspect
             * @returns Array of   paths to shared libraries, or `NULL` if none are associated
             */
            get_shared_libraries(namespace_: string): string[] | null;
            /**
             * If namespace `namespace_` is loaded, return the full path to the
             * .typelib file it was loaded from.
             *
             * If the typelib for namespace `namespace_` was included in a shared library,
             * return the special string `<builtin>`.
             * @param namespace_ GI namespace to use, e.g. `Gtk`
             * @returns Filesystem path (or `<builtin>`) if   successful, `NULL` if namespace is not loaded
             */
            get_typelib_path(namespace_: string): string | null;
            /**
             * This function returns the loaded version associated with the given
             * namespace `namespace_`.
             *
             * Note: The namespace must have already been loaded using a function
             * such as [method`GIRepository`.Repository.require] before calling this
             * function.
             * @param namespace_ Namespace to inspect
             * @returns Loaded version
             */
            get_version(namespace_: string): string;
            /**
             * Check whether a particular namespace (and optionally, a specific
             * version thereof) is currently loaded.
             *
             * This function is likely to only be useful in unusual circumstances; in order
             * to act upon metadata in the namespace, you should call
             * [method`GIRepository`.Repository.require] instead which will ensure the
             * namespace is loaded, and return as quickly as this function will if it has
             * already been loaded.
             * @param namespace_ Namespace of interest
             * @param version Required version, may be `NULL` for latest
             * @returns `TRUE` if namespace-version is loaded, `FALSE` otherwise
             */
            is_registered(namespace_: string, version?: string | null): boolean;
            /**
             * Load the given `typelib` into the repository.
             * @param typelib the typelib to load
             * @param flags flags affecting the loading operation
             * @returns namespace of the loaded typelib
             */
            load_typelib(typelib: Typelib, flags: RepositoryLoadFlags): string;
            /**
             * Prepends `directory` to the search path that is used to
             * search shared libraries referenced by imported namespaces.
             *
             * Multiple calls to this function all contribute to the final
             * list of paths.
             *
             * The list of paths is unique to `repository`. When a typelib is loaded by the
             * repository, the list of paths from the `repository` at that instant is used
             * by the typelib for loading its modules.
             *
             * If the library is not found in the directories configured
             * in this way, loading will fall back to the system library
             * path (i.e. `LD_LIBRARY_PATH` and `DT_RPATH` in ELF systems).
             * See the documentation of your dynamic linker for full details.
             * @param directory a single directory to scan for shared libraries
             */
            prepend_library_path(directory: string): void;
            /**
             * Prepends `directory` to the typelib search path.
             *
             * See also: gi_repository_get_search_path().
             * @param directory directory name to prepend to the typelib   search path
             */
            prepend_search_path(directory: string): void;
            /**
             * Force the namespace `namespace_` to be loaded if it isn’t already.
             *
             * If `namespace_` is not loaded, this function will search for a
             * `.typelib` file using the repository search path.  In addition, a
             * version `version` of namespace may be specified.  If `version` is
             * not specified, the latest will be used.
             * @param namespace_ GI namespace to use, e.g. `Gtk`
             * @param version Version of namespace, may be `NULL` for latest
             * @param flags Set of [flags@GIRepository.RepositoryLoadFlags], may be 0
             * @returns a pointer to the [type@GIRepository.Typelib] if   successful, `NULL` otherwise
             */
            require(namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib;
            /**
             * Force the namespace `namespace_` to be loaded if it isn’t already.
             *
             * If `namespace_` is not loaded, this function will search for a
             * `.typelib` file within the private directory only. In addition, a
             * version `version` of namespace should be specified.  If `version` is
             * not specified, the latest will be used.
             * @param typelib_dir Private directory where to find the requested   typelib
             * @param namespace_ GI namespace to use, e.g. `Gtk`
             * @param version Version of namespace, may be `NULL` for latest
             * @param flags Set of [flags@GIRepository.RepositoryLoadFlags], may be 0
             * @returns a pointer to the [type@GIRepository.Typelib] if   successful, `NULL` otherwise
             */
            require_private(
                typelib_dir: string,
                namespace_: string,
                version: string | null,
                flags: RepositoryLoadFlags,
            ): Typelib;
        }

        /**
         * `GISignalInfo` represents a signal.
         *
         * It’s a sub-struct of [class`GIRepository`.CallableInfo] and contains a set of
         * flags and a class closure.
         *
         * See [class`GIRepository`.CallableInfo] for information on how to retrieve
         * arguments and other metadata from the signal.
         */
        class SignalInfo extends CallableInfo {
            static $gtype: GObject.GType<SignalInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the class closure for this signal if one is set.
             *
             * The class closure is a virtual function on the type that the signal belongs
             * to. If the signal lacks a closure, `NULL` will be returned.
             * @returns the class closure, or `NULL` if none is   set
             */
            get_class_closure(): VFuncInfo | null;
            /**
             * Obtain the flags for this signal info.
             *
             * See [flags`GObject`.SignalFlags] for more information about possible flag
             * values.
             * @returns the flags
             */
            get_flags(): GObject.SignalFlags;
            /**
             * Obtain if the returning `TRUE` in the signal handler will stop the emission
             * of the signal.
             * @returns `TRUE` if returning `TRUE` stops the signal emission
             */
            true_stops_emit(): boolean;
        }

        /**
         * `GIStructInfo` represents a generic C structure type.
         *
         * A structure has methods and fields.
         */
        class StructInfo extends RegisteredTypeInfo {
            static $gtype: GObject.GType<StructInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the type information for field named `name`.
             * @param name a field name
             * @returns The [class@GIRepository.FieldInfo], or   `NULL` if not found. Free it with [method@GIRepository.BaseInfo.unref] when   done.
             */
            find_field(name: string): FieldInfo | null;
            /**
             * Obtain the type information for method named `name`.
             * @param name a method name
             * @returns The [class@GIRepository.FunctionInfo],   or `NULL` if none was found. Free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            find_method(name: string): FunctionInfo | null;
            /**
             * Obtain the required alignment of the structure.
             * @returns required alignment, in bytes
             */
            get_alignment(): number;
            /**
             * Retrieves the name of the copy function for `info,` if any is set.
             * @returns the name of the copy function, or `NULL`   if the structure has no copy function
             */
            get_copy_function_name(): string | null;
            /**
             * Obtain the type information for field with specified index.
             * @param n a field index
             * @returns The [class@GIRepository.FieldInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_field(n: number): FieldInfo;
            /**
             * Retrieves the name of the free function for `info,` if any is set.
             * @returns the name of the free function, or `NULL`   if the structure has no free function
             */
            get_free_function_name(): string | null;
            /**
             * Obtain the type information for method with specified index.
             * @param n a method index
             * @returns The [class@GIRepository.FunctionInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_method(n: number): FunctionInfo;
            /**
             * Obtain the number of fields this structure has.
             * @returns number of fields
             */
            get_n_fields(): number;
            /**
             * Obtain the number of methods this structure has.
             * @returns number of methods
             */
            get_n_methods(): number;
            /**
             * Obtain the total size of the structure.
             * @returns size of the structure, in bytes
             */
            get_size(): number;
            /**
             * Gets whether the structure is foreign, i.e. if it’s expected to be overridden
             * by a native language binding instead of relying of introspected bindings.
             * @returns `TRUE` if the structure is foreign
             */
            is_foreign(): boolean;
            /**
             * Return true if this structure represents the ‘class structure’ for some
             * [class`GObject`.Object] or `GInterface`.
             *
             * This function is mainly useful to hide this kind of structure from generated
             * public APIs.
             * @returns `TRUE` if this is a class struct, `FALSE` otherwise
             */
            is_gtype_struct(): boolean;
        }

        /**
         * `GITypeInfo` represents a type, including information about direction and
         * transfer.
         *
         * You can retrieve a type info from an argument (see
         * [class`GIRepository`.ArgInfo]), a function’s return value (see
         * [class`GIRepository`.FunctionInfo]), a field (see
         * [class`GIRepository`.FieldInfo]), a property (see
         * [class`GIRepository`.PropertyInfo]), a constant (see
         * [class`GIRepository`.ConstantInfo]) or for a union discriminator (see
         * [class`GIRepository`.UnionInfo]).
         *
         * A type can either be a of a basic type which is a standard C primitive
         * type or an interface type. For interface types you need to call
         * [method`GIRepository`.TypeInfo.get_interface] to get a reference to the base
         * info for that interface.
         */
        class TypeInfo extends BaseInfo {
            static $gtype: GObject.GType<TypeInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Convert a data pointer from a GLib data structure to a
             * [type`GIRepository`.Argument].
             *
             * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
             * [type`GLib`.HashTable], all store data pointers.
             *
             * In the case where the list or hash table is storing single types rather than
             * structs, these data pointers may have values stuffed into them via macros
             * such as `GPOINTER_TO_INT`.
             *
             * Use this function to ensure that all values are correctly extracted from
             * stuffed pointers, regardless of the machine’s architecture or endianness.
             *
             * This function fills in the appropriate field of `arg` with the value extracted
             * from `hash_pointer,` depending on the storage type of `info`.
             * @param hash_pointer a pointer, such as a [struct@GLib.HashTable] data pointer
             */
            argument_from_hash_pointer(hash_pointer: any | null): Argument;
            /**
             * Obtain the fixed array size of the type, in number of elements (not bytes).
             *
             * The type tag must be a `GI_TYPE_TAG_ARRAY` with a fixed size, or `FALSE` will
             * be returned.
             * @returns `TRUE` if the type is an array and has a fixed size
             */
            get_array_fixed_size(): [boolean, number];
            /**
             * Obtain the position of the argument which gives the array length of the type.
             *
             * The type tag must be a `GI_TYPE_TAG_ARRAY` with a length argument, or `FALSE`
             * will be returned.
             * @returns `TRUE` if the type is an array and has a length argument
             */
            get_array_length_index(): [boolean, number];
            /**
             * Obtain the array type for this type.
             *
             * See [enum`GIRepository`.ArrayType] for a list of possible values.
             *
             * It is an error to call this on an `info` which is not an array type. Use
             * [method`GIRepository`.TypeInfo.get_tag] to check.
             * @returns the array type
             */
            get_array_type(): ArrayType;
            /**
             * For types which have `GI_TYPE_TAG_INTERFACE` such as [class`GObject`.Object]s
             * and boxed values, this function returns full information about the referenced
             * type.
             *
             * You can then inspect the type of the returned [class`GIRepository`.BaseInfo]
             * to further query whether it is a concrete [class`GObject`.Object], an
             * interface, a structure, etc., using the type checking macros like
             * [func`GIRepository`.IS_OBJECT_INFO], or raw [type`GObject`.Type]s with
             * [func`GObject`.TYPE_FROM_INSTANCE].
             * @returns The [class@GIRepository.BaseInfo], or   `NULL`. Free it with gi_base_info_unref() when done.
             */
            get_interface(): BaseInfo | null;
            /**
             * Obtain the parameter type `n,` or `NULL` if the type is not an array.
             * @param n index of the parameter
             * @returns the param type info, or `NULL` if the   type is not an array
             */
            get_param_type(n: number): TypeInfo | null;
            /**
             * Obtain the type tag corresponding to the underlying storage type in C for
             * the type.
             *
             * See [type`GIRepository`.TypeTag] for a list of type tags.
             * @returns the type tag
             */
            get_storage_type(): TypeTag;
            /**
             * Obtain the type tag for the type.
             *
             * See [type`GIRepository`.TypeTag] for a list of type tags.
             * @returns the type tag
             */
            get_tag(): TypeTag;
            /**
             * Convert a [type`GIRepository`.Argument] to data pointer for use in a GLib
             * data structure.
             *
             * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
             * [type`GLib`.HashTable], all store data pointers.
             *
             * In the case where the list or hash table is storing single types rather than
             * structs, these data pointers may have values stuffed into them via macros
             * such as `GPOINTER_TO_INT`.
             *
             * Use this function to ensure that all values are correctly stuffed into
             * pointers, regardless of the machine’s architecture or endianness.
             *
             * This function returns a pointer stuffed with the appropriate field of `arg,`
             * depending on the storage type of `info`.
             * @param arg a [struct@GIRepository.Argument] with the value to stuff into a pointer
             * @returns A stuffed pointer, that can be stored in a [struct@GLib.HashTable],   for example
             */
            hash_pointer_from_argument(arg: Argument): any | null;
            /**
             * Obtain if the type is passed as a reference.
             *
             * Note that the types of `GI_DIRECTION_OUT` and `GI_DIRECTION_INOUT` parameters
             * will only be pointers if the underlying type being transferred is a pointer
             * (i.e. only if the type of the C function’s formal parameter is a pointer to a
             * pointer).
             * @returns `TRUE` if it is a pointer
             */
            is_pointer(): boolean;
            /**
             * Obtain if the last element of the array is `NULL`.
             *
             * The type tag must be a `GI_TYPE_TAG_ARRAY` or `FALSE` will be returned.
             * @returns `TRUE` if zero terminated
             */
            is_zero_terminated(): boolean;
        }

        /**
         * `GIUnionInfo` represents a union type.
         *
         * A union has methods and fields.  Unions can optionally have a
         * discriminator, which is a field deciding what type of real union
         * fields is valid for specified instance.
         */
        class UnionInfo extends RegisteredTypeInfo {
            static $gtype: GObject.GType<UnionInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the type information for the method named `name`.
             * @param name a method name
             * @returns The [type@GIRepository.FunctionInfo], or   `NULL` if none was found. Free it with [method@GIRepository.BaseInfo.unref]   when done.
             */
            find_method(name: string): FunctionInfo | null;
            /**
             * Obtain the required alignment of the union.
             * @returns required alignment, in bytes
             */
            get_alignment(): number;
            /**
             * Retrieves the name of the copy function for `info,` if any is set.
             * @returns the name of the copy function, or `NULL`   if none is set
             */
            get_copy_function_name(): string | null;
            /**
             * Obtain the discriminator value assigned for n-th union field, i.e. the n-th
             * union field is the active one if the discriminator contains this
             * constant.
             *
             * If the union is not discriminated, `NULL` is returned.
             * @param n a union field index
             * @returns The [type@GIRepository.ConstantInfo], or   `NULL` if the union is not discriminated. Free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_discriminator(n: number): ConstantInfo | null;
            /**
             * Obtain the offset of the discriminator field within the structure.
             *
             * The union must be discriminated, or `FALSE` will be returned.
             * @returns `TRUE` if the union is discriminated
             */
            get_discriminator_offset(): [boolean, number];
            /**
             * Obtain the type information of the union discriminator.
             * @returns the [type@GIRepository.TypeInfo], or   `NULL` if the union is not discriminated. Free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_discriminator_type(): TypeInfo | null;
            /**
             * Obtain the type information for the field with the specified index.
             * @param n a field index
             * @returns the [type@GIRepository.FieldInfo], free it with   [method@GIRepository.BaseInfo.unref] when done.
             */
            get_field(n: number): FieldInfo;
            /**
             * Retrieves the name of the free function for `info,` if any is set.
             * @returns the name of the free function, or `NULL`   if none is set
             */
            get_free_function_name(): string | null;
            /**
             * Obtain the type information for the method with the specified index.
             * @param n a method index
             * @returns the [type@GIRepository.FunctionInfo], free it   with [method@GIRepository.BaseInfo.unref] when done.
             */
            get_method(n: number): FunctionInfo;
            /**
             * Obtain the number of fields this union has.
             * @returns number of fields
             */
            get_n_fields(): number;
            /**
             * Obtain the number of methods this union has.
             * @returns number of methods
             */
            get_n_methods(): number;
            /**
             * Obtain the total size of the union.
             * @returns size of the union, in bytes
             */
            get_size(): number;
            /**
             * Return `TRUE` if this union contains a discriminator field.
             * @returns `TRUE` if this is a discriminated union, `FALSE` otherwise
             */
            is_discriminated(): boolean;
        }

        /**
         * `GIUnresolvedInfo` represents an unresolved symbol.
         */
        class UnresolvedInfo extends BaseInfo {
            static $gtype: GObject.GType<UnresolvedInfo>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * `GIVFuncInfo` represents a virtual function.
         *
         * A virtual function is a callable object that belongs to either a
         * [type`GIRepository`.ObjectInfo] or a [type`GIRepository`.InterfaceInfo].
         */
        class VFuncInfo extends CallableInfo {
            static $gtype: GObject.GType<VFuncInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Looks up where the implementation for `info` is inside the type struct of
             * `implementor_gtype`.
             * @param implementor_gtype [type@GObject.Type] implementing this virtual function
             * @returns address to a function
             */
            get_address(implementor_gtype: GObject.GType): any | null;
            /**
             * Obtain the flags for this virtual function info.
             *
             * See [flags`GIRepository`.VFuncInfoFlags] for more information about possible
             * flag values.
             * @returns the flags
             */
            get_flags(): VFuncInfoFlags;
            /**
             * If this virtual function has an associated invoker method, this
             * method will return it.  An invoker method is a C entry point.
             *
             * Not all virtuals will have invokers.
             * @returns The [type@GIRepository.FunctionInfo] or   `NULL` if none is set. Free it with [method@GIRepository.BaseInfo.unref]   when done.
             */
            get_invoker(): FunctionInfo | null;
            /**
             * Obtain the offset of the function pointer in the class struct.
             *
             * The value `0xFFFF` indicates that the struct offset is unknown.
             * @returns the struct offset or `0xFFFF` if it’s unknown
             */
            get_offset(): number;
            /**
             * Obtain the signal for the virtual function if one is set.
             *
             * The signal comes from the object or interface to which
             * this virtual function belongs.
             * @returns the signal, or `NULL` if none is set
             */
            get_signal(): SignalInfo | null;
        }

        /**
         * A `GIValueInfo` represents a value in an enumeration.
         *
         * The `GIValueInfo` is fetched by calling
         * [method`GIRepository`.EnumInfo.get_value] on a [class`GIRepository`.EnumInfo].
         */
        class ValueInfo extends BaseInfo {
            static $gtype: GObject.GType<ValueInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Obtain the enumeration value of the `GIValueInfo`.
             * @returns the enumeration value. This will always be representable   as a 32-bit signed or unsigned value. The use of `int64_t` as the   return type is to allow both.
             */
            get_value(): number;
        }

        /**
         * An opaque structure used to iterate over attributes
         * in a [class`GIRepository`.BaseInfo] struct.
         */
        class AttributeIter {
            static $gtype: GObject.GType<AttributeIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;
        }

        type BaseInfoClass = typeof BaseInfo;
        class BaseInfoStack {
            static $gtype: GObject.GType<BaseInfoStack>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RepositoryClass = typeof Repository;
        /**
         * `GITypelib` represents a loaded `.typelib` file, which contains a description
         * of a single module’s API.
         */
        class Typelib {
            static $gtype: GObject.GType<Typelib>;

            // Constructors

            constructor(bytes: GLib.Bytes | Uint8Array);
            _init(...args: any[]): void;

            static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Typelib;

            // Methods

            /**
             * Get the name of the namespace represented by `typelib`.
             * @returns name of the namespace represented by @typelib
             */
            get_namespace(): string;
            /**
             * Increment the reference count of a [type`GIRepository`.Typelib].
             * @returns the same @typelib pointer
             */
            ref(): Typelib;
            /**
             * Loads a symbol from a `GITypelib`.
             * @param symbol_name name of symbol to be loaded
             * @returns `TRUE` on success
             */
            symbol(symbol_name: string): [boolean, any];
            /**
             * Decrement the reference count of a [type`GIRepository`.Typelib].
             *
             * Once the reference count reaches zero, the typelib is freed.
             */
            unref(): void;
        }

        /**
         * Stores an argument of varying type.
         */
        class Argument {
            static $gtype: GObject.GType<Argument>;

            // Fields

            v_boolean: boolean;
            v_int8: number;
            v_uint8: number;
            v_int16: number;
            v_uint16: number;
            v_int32: number;
            v_uint32: number;
            v_int64: number;
            v_uint64: number;
            v_float: number;
            v_double: number;
            v_short: number;
            v_ushort: number;
            v_int: number;
            v_uint: number;
            v_long: number;
            v_ulong: number;
            v_ssize: number;
            v_size: number;
            v_string: string;
            v_pointer: any;

            // Constructors

            constructor(
                properties?: Partial<{
                    v_boolean: boolean;
                    v_int8: number;
                    v_uint8: number;
                    v_int16: number;
                    v_uint16: number;
                    v_int32: number;
                    v_uint32: number;
                    v_int64: number;
                    v_uint64: number;
                    v_float: number;
                    v_double: number;
                    v_short: number;
                    v_ushort: number;
                    v_int: number;
                    v_uint: number;
                    v_long: number;
                    v_ulong: number;
                    v_ssize: number;
                    v_size: number;
                    v_string: string;
                    v_pointer: any;
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

    export default GIRepository;
}

declare module 'gi://GIRepository' {
    import GIRepository30 from 'gi://GIRepository?version=3.0';
    export default GIRepository30;
}
// END
