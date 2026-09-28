/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GObject?version=2.0' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';

    export namespace GObject {
        // A few things here are inspired by gi.ts
        // See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/lib/src/generators/dts/gobject.ts
        // Copyright Evan Welsh

        // __type__ forces all GTypes to not match structurally.
        export type GType<T = unknown> = {
            __type__(arg: never): T;
            name: string;
        };

        // Extra interfaces used to help define GObject classes in js; these
        // aren't part of gi.
        export interface SignalDefinition {
            flags?: SignalFlags;
            accumulator: number;
            return_type?: GType;
            param_types?: GType[];
        }

        export interface MetaInfo<Props, Interfaces, Sigs> {
            GTypeName?: string;
            GTypeFlags?: TypeFlags;
            Properties?: Props;
            Signals?: Sigs;
            Implements?: Interfaces;
            CssName?: string;
            Template?: Uint8Array | GLib.Bytes | string;
            Children?: string[];
            InternalChildren?: string[];
        }

        // Correctly types interface checks.
        export function type_is_a<T extends Object>(obj: Object, is_a_type: { $gtype: GType<T> }): obj is T;

        export class Interface<T = unknown> {
            static _classInit: (cls: any) => any;
            __name__: string;
            _construct: (params: any, ...otherArgs: any[]) => any;
            _init: (params: any) => void;
            $gtype?: GType<T>;
        }

        /**
         * Use this to signify a function that must be overridden in an
         * implementation of the interface.
         */
        export class NotImplementedError extends Error {
            get name(): 'NotImplementedError';
        }

        export const __gtkCssName__: unique symbol;
        export const __gtkTemplate__: unique symbol;
        export const __gtkChildren__: unique symbol;
        export const __gtkInternalChildren__: unique symbol;

        // Expose GObject static properties for ES6 classes

        export const GTypeName: unique symbol;
        export const requires: unique symbol;
        export const interfaces: unique symbol;
        export const properties: unique symbol;
        export const signals: unique symbol;

        export let gtypeNameBasedOnJSPath: boolean;

        export let TYPE_BOOLEAN: GType<boolean>;
        export let Boolean: BooleanConstructor;

        export let TYPE_ENUM: GType<number>;
        export let TYPE_FLAGS: GType<number>;

        export let TYPE_DOUBLE: GType<number>;
        export let Double: NumberConstructor;

        export let TYPE_STRING: GType<string>;
        export let String: StringConstructor;

        export let TYPE_NONE: GType<undefined>;
        export let TYPE_POINTER: GType<undefined>;
        export let TYPE_BOXED: GType<unknown>;
        export let TYPE_PARAM: GType<unknown>;
        export let TYPE_INTERFACE: GType<unknown>;
        export let TYPE_OBJECT: GType<object>;
        export let TYPE_JSOBJECT: GType<Object>;
        export let TYPE_VARIANT: GType<GLib.Variant>;
        export let TYPE_INT: GType<number>;
        export let TYPE_UINT: GType<number>;
        export let TYPE_INT64: GType<number>;
        export let TYPE_UINT64: GType<number>;

        // fake enum for signal accumulators, keep in sync with gi/object.c
        export enum AccumulatorType {
            NONE = 0,
            FIRST_WINS = 1,
            TRUE_HANDLED = 2,
        }

        // A simple workaround if you have a class with .connect, .disconnect or .emit
        // methods (such as Gio.Socket.connect or NMClient.Device.disconnect)
        // The original g_signal_* functions are not introspectable anyway, because
        // we need our own handling of signal argument marshalling
        export function signal_connect(object: Object, name: string, handler: (...args: any[]) => any): number;
        export function signal_connect_after(object: Object, name: string, handler: (...args: any[]) => any): number;
        export function signal_emit_by_name(object: Object, name: string, ...args: any[]): void;

        /**
         * Finds the first signal handler that matches certain selection criteria.
         * The criteria are passed as properties of a match object.
         * The match object has to be non-empty for successful matches.
         * If no handler was found, a falsy value is returned.
         *
         * @param instance the instance owning the signal handler to be found.
         * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
         * @param match.signalId signal the handler has to be connected to.
         * @param match.detail signal detail the handler has to be connected to.
         * @param match.func the callback function the handler will invoke.
         * @returns A valid non-0 signal handler ID for a successful match.
         */
        export function signal_handler_find(
            instance: Object,
            match: { signalId: string; detail: string; func: (...args: any[]) => any },
        ): number | bigint | object | null;

        /**
         * Blocks all handlers on an instance that match certain selection criteria.
         * The criteria are passed as properties of a match object.
         * The match object has to have at least `func` for successful matches.
         * If no handlers were found, 0 is returned, the number of blocked handlers
         * otherwise.
         *
         * @param instance the instance owning the signal handler to be found.
         * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
         * @param match.signalId signal the handler has to be connected to.
         * @param match.detail signal detail the handler has to be connected to.
         * @param match.func the callback function the handler will invoke.
         * @returns The number of handlers that matched.
         */
        export function signal_handlers_block_matched(
            instance: Object,
            match: { signalId: string; detail: string; func: (...args: any[]) => any },
        ): number;

        /**
         * Disconnects all handlers on an instance that match certain selection
         * criteria.
         * The criteria are passed as properties of a match object.
         * The match object has to have at least `func` for successful matches.
         * If no handlers were found, 0 is returned, the number of disconnected
         * handlers otherwise.
         *
         * @param instance the instance owning the signal handler
         *   to be found.
         * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
         * @param match.signalId signal the handler has to be connected to.
         * @param match.detail signal detail the handler has to be connected to.
         * @param match.func the callback function the handler will invoke.
         * @returns The number of handlers that matched.
         */
        export function signal_handlers_unblock_matched(
            instance: Object,
            match: { signalId: string; detail: string; func: (...args: any[]) => any },
        ): number;

        /**
         * Disconnects all handlers on an instance that match certain selection
         * criteria.
         * The criteria are passed as properties of a match object.
         * The match object has to have at least `func` for successful matches.
         * If no handlers were found, 0 is returned, the number of disconnected
         * handlers otherwise.
         *
         * @param instance the instance owning the signal handler
         *   to be found.
         * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
         * @param match.signalId signal the handler has to be connected to.
         * @param match.detail signal detail the handler has to be connected to.
         * @param match.func the callback function the handler will invoke.
         * @returns The number of handlers that matched.
         */
        export function signal_handlers_disconnect_matched(
            instance: Object,
            match: { signalId: string; detail: string; func: (...args: any[]) => any },
        ): number;

        // Also match the macros used in C APIs, even though they're not introspected

        /**
         * Blocks all handlers on an instance that match `func`.
         *
         * @param instance the instance to block handlers from.
         * @param func the callback function the handler will invoke.
         * @returns The number of handlers that matched.
         */
        export function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): number;

        /**
         * Unblocks all handlers on an instance that match `func`.
         *
         * @function
         * @param instance the instance to unblock handlers from.
         * @param func the callback function the handler will invoke.
         * @returns The number of handlers that matched.
         */
        export function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): number;

        /**
         * Disconnects all handlers on an instance that match `func`.
         *
         * @param instance the instance to remove handlers from.
         * @param func the callback function the handler will invoke.
         * @returns The number of handlers that matched.
         */
        export function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): number;
        export function signal_handlers_disconnect_by_data(): void;

        export type Property<K extends ParamSpec> = K extends ParamSpec<infer T> ? T : any;

        // TODO: What about the generated class Closure
        export type TClosure<R = any, P = any> = (...args: P[]) => R;

        type ObjectConstructor = { new (...args: any[]): Object };

        export function registerClass<
            T extends ObjectConstructor,
            Props extends { [key: string]: ParamSpec },
            Interfaces extends { $gtype: GType }[],
            Sigs extends {
                [key: string]: {
                    param_types?: readonly GType[];
                    [key: string]: any;
                };
            },
        >(options: MetaInfo<Props, Interfaces, Sigs>, cls: T): T;

        export function registerClass<T extends ObjectConstructor>(cls: T): T;

        /**
         * GObject-2.0
         */

        /**
         * Mask containing the bits of #GParamSpec.flags which are reserved for GLib.
         */
        const PARAM_MASK: number;
        /**
         * #GParamFlags value alias for %G_PARAM_STATIC_NAME | %G_PARAM_STATIC_NICK | %G_PARAM_STATIC_BLURB.
         *
         * It is recommended to use this for all properties by default, as it allows for
         * internal performance improvements in GObject.
         *
         * It is very rare that a property would have a dynamically constructed name,
         * nickname or blurb.
         *
         * Since 2.13.0
         */
        const PARAM_STATIC_STRINGS: number;
        /**
         * Minimum shift count to be used for user defined flags, to be stored in
         * #GParamSpec.flags. The maximum allowed is 10.
         */
        const PARAM_USER_SHIFT: number;
        /**
         * A mask for all #GSignalFlags bits.
         */
        const SIGNAL_FLAGS_MASK: number;
        /**
         * A mask for all #GSignalMatchType bits.
         */
        const SIGNAL_MATCH_MASK: number;
        /**
         * A bit in the type number that's supposed to be left untouched.
         */
        const TYPE_FLAG_RESERVED_ID_BIT: Type;
        /**
         * An integer constant that represents the number of identifiers reserved
         * for types that are assigned at compile-time.
         */
        const TYPE_FUNDAMENTAL_MAX: number;
        /**
         * Shift value used in converting numbers to type IDs.
         */
        const TYPE_FUNDAMENTAL_SHIFT: number;
        /**
         * First fundamental type number to create a new fundamental type id with
         * G_TYPE_MAKE_FUNDAMENTAL() reserved for BSE.
         */
        const TYPE_RESERVED_BSE_FIRST: number;
        /**
         * Last fundamental type number reserved for BSE.
         */
        const TYPE_RESERVED_BSE_LAST: number;
        /**
         * First fundamental type number to create a new fundamental type id with
         * G_TYPE_MAKE_FUNDAMENTAL() reserved for GLib.
         */
        const TYPE_RESERVED_GLIB_FIRST: number;
        /**
         * Last fundamental type number reserved for GLib.
         */
        const TYPE_RESERVED_GLIB_LAST: number;
        /**
         * First available fundamental type number to create new fundamental
         * type id with G_TYPE_MAKE_FUNDAMENTAL().
         */
        const TYPE_RESERVED_USER_FIRST: number;
        /**
         * The maximal number of #GTypeCValues which can be collected for a
         * single #GValue.
         */
        const VALUE_COLLECT_FORMAT_MAX_LENGTH: number;
        /**
         * For string values, indicates that the string contained is canonical and will
         * exist for the duration of the process. See g_value_set_interned_string().
         */
        const VALUE_INTERNED_STRING: number;
        /**
         * If passed to G_VALUE_COLLECT(), allocated data won't be copied
         * but used verbatim. This does not affect ref-counted types like
         * objects. This does not affect usage of g_value_copy(), the data will
         * be copied if it is not ref-counted.
         */
        const VALUE_NOCOPY_CONTENTS: number;
        /**
         * Provide a copy of a boxed structure `src_boxed` which is of type `boxed_type`.
         * @param boxed_type The type of @src_boxed.
         * @param src_boxed The boxed structure to be copied.
         * @returns The newly created copy of the boxed    structure.
         */
        function boxed_copy(boxed_type: GType, src_boxed: any): any;
        /**
         * Free the boxed structure `boxed` which is of type `boxed_type`.
         * @param boxed_type The type of @boxed.
         * @param boxed The boxed structure to be freed.
         */
        function boxed_free(boxed_type: GType, boxed: any): void;
        /**
         * This function creates a new %G_TYPE_BOXED derived type id for a new
         * boxed type with name `name`.
         *
         * Boxed type handling functions have to be provided to copy and free
         * opaque boxed structures of this type.
         *
         * For the general case, it is recommended to use G_DEFINE_BOXED_TYPE()
         * instead of calling g_boxed_type_register_static() directly. The macro
         * will create the appropriate `*_get_type()` function for the boxed type.
         * @param name Name of the new boxed type.
         * @param boxed_copy Boxed structure copy function.
         * @param boxed_free Boxed structure free function.
         * @returns New %G_TYPE_BOXED derived type id for @name.
         */
        function boxed_type_register_static(name: string, boxed_copy: BoxedCopyFunc, boxed_free: BoxedFreeFunc): GType;
        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take two boxed pointers as arguments and return a boolean.  If you
         * have such a signal, you will probably also need to use an
         * accumulator, such as g_signal_accumulator_true_handled().
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_BOOLEAN__BOXED_BOXED(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take a flags type as an argument and return a boolean.  If you have
         * such a signal, you will probably also need to use an accumulator,
         * such as g_signal_accumulator_true_handled().
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_BOOLEAN__FLAGS(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take a #GObject and a pointer and produce a string.  It is highly
         * unlikely that your signal handler fits this description.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_STRING__OBJECT_POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * boolean argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__BOOLEAN(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument which is any boxed pointer type.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__BOXED(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * character argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__CHAR(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with one
         * double-precision floating point argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__DOUBLE(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument with an enumerated type.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__ENUM(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument with a flags types.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__FLAGS(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with one
         * single-precision floating point argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__FLOAT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * integer argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__INT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with with a single
         * long integer argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__LONG(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * #GObject argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__OBJECT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument of type #GParamSpec.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__PARAM(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single raw
         * pointer argument type.
         *
         * If it is possible, it is better to use one of the more specific
         * functions such as g_cclosure_marshal_VOID__OBJECT() or
         * g_cclosure_marshal_VOID__OBJECT().
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single string
         * argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__STRING(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * unsigned character argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__UCHAR(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with with a single
         * unsigned integer argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__UINT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with an unsigned int
         * and a pointer as arguments.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__UINT_POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * unsigned long integer argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__ULONG(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * #GVariant argument.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__VARIANT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with no arguments.
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_VOID__VOID(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A generic marshaller function implemented via
         * [libffi](http://sourceware.org/libffi/).
         *
         * Normally this function is not passed explicitly to g_signal_new(),
         * but used automatically by GLib when specifying a %NULL marshaller.
         * @param closure A #GClosure.
         * @param return_gvalue A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the @param_values array.
         * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
         */
        function cclosure_marshal_generic(
            closure: Closure,
            return_gvalue: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * Disconnects a handler from `instance` so it will not be called during
         * any future or currently ongoing emissions of the signal it has been
         * connected to. The `handler_id_ptr` is then set to zero, which is never a valid handler ID value (see g_signal_connect()).
         *
         * If the handler ID is 0 then this function does nothing.
         *
         * There is also a macro version of this function so that the code
         * will be inlined.
         * @param handler_id_ptr A pointer to a handler ID (of type #gulong) of the handler to be disconnected.
         * @param instance The instance to remove the signal handler from.   This pointer may be %NULL or invalid, if the handler ID is zero.
         */
        function clear_signal_handler(handler_id_ptr: number, instance: Object): void;
        /**
         * This function is meant to be called from the `complete_type_info`
         * function of a #GTypePlugin implementation, as in the following
         * example:
         *
         *
         * ```c
         * static void
         * my_enum_complete_type_info (GTypePlugin     *plugin,
         *                             GType            g_type,
         *                             GTypeInfo       *info,
         *                             GTypeValueTable *value_table)
         * {
         *   static const GEnumValue values[] = {
         *     { MY_ENUM_FOO, "MY_ENUM_FOO", "foo" },
         *     { MY_ENUM_BAR, "MY_ENUM_BAR", "bar" },
         *     { 0, NULL, NULL }
         *   };
         *
         *   g_enum_complete_type_info (type, info, values);
         * }
         * ```
         *
         * @param g_enum_type the type identifier of the type being completed
         * @param const_values An array of #GEnumValue structs for the possible  enumeration values. The array is terminated by a struct with all  members being 0.
         */
        function enum_complete_type_info(g_enum_type: GType, const_values: EnumValue): TypeInfo;
        /**
         * Returns the #GEnumValue for a value.
         * @param enum_class a #GEnumClass
         * @param value the value to look up
         * @returns the #GEnumValue for @value, or %NULL          if @value is not a member of the enumeration
         */
        function enum_get_value(enum_class: EnumClass, value: number): EnumValue | null;
        /**
         * Looks up a #GEnumValue by name.
         * @param enum_class a #GEnumClass
         * @param name the name to look up
         * @returns the #GEnumValue with name @name,          or %NULL if the enumeration doesn't have a member          with that name
         */
        function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue | null;
        /**
         * Looks up a #GEnumValue by nickname.
         * @param enum_class a #GEnumClass
         * @param nick the nickname to look up
         * @returns the #GEnumValue with nickname @nick,          or %NULL if the enumeration doesn't have a member          with that nickname
         */
        function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue | null;
        /**
         * Registers a new static enumeration type with the name `name`.
         *
         * It is normally more convenient to let [glib-mkenums][glib-mkenums],
         * generate a my_enum_get_type() function from a usual C enumeration
         * definition  than to write one yourself using g_enum_register_static().
         * @param name A nul-terminated string used as the name of the new type.
         * @param const_static_values An array of #GEnumValue structs for the possible  enumeration values. The array is terminated by a struct with all  members being 0. GObject keeps a reference to the data, so it cannot  be stack-allocated.
         * @returns The new type identifier.
         */
        function enum_register_static(name: string, const_static_values: EnumValue): GType;
        /**
         * Pretty-prints `value` in the form of the enum’s name.
         *
         * This is intended to be used for debugging purposes. The format of the output
         * may change in the future.
         * @param g_enum_type the type identifier of a #GEnumClass type
         * @param value the value
         * @returns a newly-allocated text string
         */
        function enum_to_string(g_enum_type: GType, value: number): string;
        /**
         * This function is meant to be called from the complete_type_info()
         * function of a #GTypePlugin implementation, see the example for
         * g_enum_complete_type_info() above.
         * @param g_flags_type the type identifier of the type being completed
         * @param const_values An array of #GFlagsValue structs for the possible  enumeration values. The array is terminated by a struct with all  members being 0.
         */
        function flags_complete_type_info(g_flags_type: GType, const_values: FlagsValue): TypeInfo;
        /**
         * Returns the first #GFlagsValue which is set in `value`.
         * @param flags_class a #GFlagsClass
         * @param value the value
         * @returns the first #GFlagsValue which is set in          @value, or %NULL if none is set
         */
        function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue | null;
        /**
         * Looks up a #GFlagsValue by name.
         * @param flags_class a #GFlagsClass
         * @param name the name to look up
         * @returns the #GFlagsValue with name @name,          or %NULL if there is no flag with that name
         */
        function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue | null;
        /**
         * Looks up a #GFlagsValue by nickname.
         * @param flags_class a #GFlagsClass
         * @param nick the nickname to look up
         * @returns the #GFlagsValue with nickname @nick,          or %NULL if there is no flag with that nickname
         */
        function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue | null;
        /**
         * Registers a new static flags type with the name `name`.
         *
         * It is normally more convenient to let [glib-mkenums][glib-mkenums]
         * generate a my_flags_get_type() function from a usual C enumeration
         * definition than to write one yourself using g_flags_register_static().
         * @param name A nul-terminated string used as the name of the new type.
         * @param const_static_values An array of #GFlagsValue structs for the possible  flags values. The array is terminated by a struct with all members being 0.  GObject keeps a reference to the data, so it cannot be stack-allocated.
         * @returns The new type identifier.
         */
        function flags_register_static(name: string, const_static_values: FlagsValue): GType;
        /**
         * Pretty-prints `value` in the form of the flag names separated by ` | ` and
         * sorted. Any extra bits will be shown at the end as a hexadecimal number.
         *
         * This is intended to be used for debugging purposes. The format of the output
         * may change in the future.
         * @param flags_type the type identifier of a #GFlagsClass type
         * @param value the value
         * @returns a newly-allocated text string
         */
        function flags_to_string(flags_type: GType, value: number): string;
        function gtype_get_type(): GType;
        /**
         * Creates a new #GParamSpecBoolean instance specifying a %G_TYPE_BOOLEAN
         * property. In many cases, it may be more appropriate to use an enum with
         * g_param_spec_enum(), both to improve code clarity by using explicitly named
         * values, and to allow for more values to be added in future without breaking
         * API.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_boolean(
            name: string,
            nick: string | null,
            blurb: string | null,
            default_value: boolean,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_BOXED
         * derived property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param boxed_type %G_TYPE_BOXED derived type of this property
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_boxed(
            name: string,
            nick: string | null,
            blurb: string | null,
            boxed_type: GType,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecChar instance specifying a %G_TYPE_CHAR property.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_char(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecDouble instance specifying a %G_TYPE_DOUBLE
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_double(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecEnum instance specifying a %G_TYPE_ENUM
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param enum_type a #GType derived from %G_TYPE_ENUM
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_enum(
            name: string,
            nick: string | null,
            blurb: string | null,
            enum_type: GType,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecFlags instance specifying a %G_TYPE_FLAGS
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param flags_type a #GType derived from %G_TYPE_FLAGS
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_flags(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags_type: GType,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecFloat instance specifying a %G_TYPE_FLOAT property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_float(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecGType instance specifying a
         * %G_TYPE_GTYPE property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param is_a_type a #GType whose subtypes are allowed as values  of the property (use %G_TYPE_NONE for any type)
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_gtype(
            name: string,
            nick: string | null,
            blurb: string | null,
            is_a_type: GType,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecInt instance specifying a %G_TYPE_INT property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_int(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecInt64 instance specifying a %G_TYPE_INT64 property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_int64(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecLong instance specifying a %G_TYPE_LONG property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_long(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_OBJECT
         * derived property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param object_type %G_TYPE_OBJECT derived type of this property
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_object(
            name: string,
            nick: string | null,
            blurb: string | null,
            object_type: GType,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecParam instance specifying a %G_TYPE_PARAM
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param param_type a #GType derived from %G_TYPE_PARAM
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_param(
            name: string,
            nick: string | null,
            blurb: string | null,
            param_type: GType,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecPointer instance specifying a pointer property.
         * Where possible, it is better to use g_param_spec_object() or
         * g_param_spec_boxed() to expose memory management information.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_pointer(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecString instance.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_string(
            name: string,
            nick: string | null,
            blurb: string | null,
            default_value: string | null,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUChar instance specifying a %G_TYPE_UCHAR property.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_uchar(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUInt instance specifying a %G_TYPE_UINT property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_uint(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUInt64 instance specifying a %G_TYPE_UINT64
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_uint64(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecULong instance specifying a %G_TYPE_ULONG
         * property.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param minimum minimum value for the property specified
         * @param maximum maximum value for the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_ulong(
            name: string,
            nick: string | null,
            blurb: string | null,
            minimum: number,
            maximum: number,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecUnichar instance specifying a %G_TYPE_UINT
         * property. #GValue structures for this property can be accessed with
         * g_value_set_uint() and g_value_get_uint().
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param default_value default value for the property specified
         * @param flags flags for the property specified
         * @returns a newly created parameter specification
         */
        function param_spec_unichar(
            name: string,
            nick: string | null,
            blurb: string | null,
            default_value: number,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Creates a new #GParamSpecVariant instance specifying a #GVariant
         * property.
         *
         * If `default_value` is floating, it is consumed.
         *
         * See g_param_spec_internal() for details on property names.
         * @param name canonical name of the property specified
         * @param nick nick name for the property specified
         * @param blurb description of the property specified
         * @param type a #GVariantType
         * @param default_value a #GVariant of type @type to                 use as the default value, or %NULL
         * @param flags flags for the property specified
         * @returns the newly created #GParamSpec
         */
        function param_spec_variant(
            name: string,
            nick: string | null,
            blurb: string | null,
            type: GLib.VariantType,
            default_value: GLib.Variant | null,
            flags: ParamFlags,
        ): ParamSpec;
        /**
         * Registers `name` as the name of a new static type derived
         * from %G_TYPE_PARAM.
         *
         * The type system uses the information contained in the #GParamSpecTypeInfo
         * structure pointed to by `info` to manage the #GParamSpec type and its
         * instances.
         * @param name 0-terminated string used as the name of the new #GParamSpec type.
         * @param pspec_info The #GParamSpecTypeInfo for this #GParamSpec type.
         * @returns The new type identifier.
         */
        function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): GType;
        /**
         * Transforms `src_value` into `dest_value` if possible, and then
         * validates `dest_value,` in order for it to conform to `pspec`.  If
         * `strict_validation` is %TRUE this function will only succeed if the
         * transformed `dest_value` complied to `pspec` without modifications.
         *
         * See also g_value_type_transformable(), g_value_transform() and
         * g_param_value_validate().
         * @param pspec a valid #GParamSpec
         * @param src_value source #GValue
         * @param dest_value destination #GValue of correct type for @pspec
         * @param strict_validation %TRUE requires @dest_value to conform to @pspec without modifications
         * @returns %TRUE if transformation and validation were successful,  %FALSE otherwise and @dest_value is left untouched.
         */
        function param_value_convert(
            pspec: ParamSpec,
            src_value: Value | any,
            dest_value: Value | any,
            strict_validation: boolean,
        ): boolean;
        /**
         * Checks whether `value` contains the default value as specified in `pspec`.
         * @param pspec a valid #GParamSpec
         * @param value a #GValue of correct type for @pspec
         * @returns whether @value contains the canonical default for this @pspec
         */
        function param_value_defaults(pspec: ParamSpec, value: Value | any): boolean;
        /**
         * Return whether the contents of `value` comply with the specifications
         * set out by `pspec`.
         * @param pspec a valid #GParamSpec
         * @param value a #GValue of correct type for @pspec
         * @returns whether the contents of @value comply with the specifications   set out by @pspec.
         */
        function param_value_is_valid(pspec: ParamSpec, value: Value | any): boolean;
        /**
         * Sets `value` to its default value as specified in `pspec`.
         * @param pspec a valid #GParamSpec
         * @param value a #GValue of correct type for @pspec; since 2.64, you   can also pass an empty #GValue, initialized with %G_VALUE_INIT
         */
        function param_value_set_default(pspec: ParamSpec, value: Value | any): void;
        /**
         * Ensures that the contents of `value` comply with the specifications
         * set out by `pspec`. For example, a #GParamSpecInt might require
         * that integers stored in `value` may not be smaller than -42 and not be
         * greater than +42. If `value` contains an integer outside of this range,
         * it is modified accordingly, so the resulting value will fit into the
         * range -42 .. +42.
         * @param pspec a valid #GParamSpec
         * @param value a #GValue of correct type for @pspec
         * @returns whether modifying @value was necessary to ensure validity
         */
        function param_value_validate(pspec: ParamSpec, value: Value | any): boolean;
        /**
         * Compares `value1` with `value2` according to `pspec,` and return -1, 0 or +1,
         * if `value1` is found to be less than, equal to or greater than `value2`,
         * respectively.
         * @param pspec a valid #GParamSpec
         * @param value1 a #GValue of correct type for @pspec
         * @param value2 a #GValue of correct type for @pspec
         * @returns -1, 0 or +1, for a less than, equal to or greater than result
         */
        function param_values_cmp(pspec: ParamSpec, value1: Value | any, value2: Value | any): number;
        /**
         * Creates a new %G_TYPE_POINTER derived type id for a new
         * pointer type with name `name`.
         * @param name the name of the new pointer type.
         * @returns a new %G_TYPE_POINTER derived type id for @name.
         */
        function pointer_type_register_static(name: string): GType;
        /**
         * A predefined #GSignalAccumulator for signals intended to be used as a
         * hook for application code to provide a particular value.  Usually
         * only one such value is desired and multiple handlers for the same
         * signal don't make much sense (except for the case of the default
         * handler defined in the class structure, in which case you will
         * usually want the signal connection to override the class handler).
         *
         * This accumulator will use the return value from the first signal
         * handler that is run as the return value for the signal and not run
         * any further handlers (ie: the first handler "wins").
         * @param ihint standard #GSignalAccumulator parameter
         * @param return_accu standard #GSignalAccumulator parameter
         * @param handler_return standard #GSignalAccumulator parameter
         * @param dummy standard #GSignalAccumulator parameter
         * @returns standard #GSignalAccumulator result
         */
        function signal_accumulator_first_wins(
            ihint: SignalInvocationHint,
            return_accu: Value | any,
            handler_return: Value | any,
            dummy?: any | null,
        ): boolean;
        /**
         * A predefined #GSignalAccumulator for signals that return a
         * boolean values. The behavior that this accumulator gives is
         * that a return of %TRUE stops the signal emission: no further
         * callbacks will be invoked, while a return of %FALSE allows
         * the emission to continue. The idea here is that a %TRUE return
         * indicates that the callback handled the signal, and no further
         * handling is needed.
         * @param ihint standard #GSignalAccumulator parameter
         * @param return_accu standard #GSignalAccumulator parameter
         * @param handler_return standard #GSignalAccumulator parameter
         * @param dummy standard #GSignalAccumulator parameter
         * @returns standard #GSignalAccumulator result
         */
        function signal_accumulator_true_handled(
            ihint: SignalInvocationHint,
            return_accu: Value | any,
            handler_return: Value | any,
            dummy?: any | null,
        ): boolean;
        /**
         * Adds an emission hook for a signal, which will get called for any emission
         * of that signal, independent of the instance. This is possible only
         * for signals which don't have %G_SIGNAL_NO_HOOKS flag set.
         * @param signal_id the signal identifier, as returned by g_signal_lookup().
         * @param detail the detail on which to call the hook.
         * @param hook_func a #GSignalEmissionHook function.
         * @param data_destroy a #GDestroyNotify for @hook_data.
         * @returns the hook id, for later use with g_signal_remove_emission_hook().
         */
        function signal_add_emission_hook(
            signal_id: number,
            detail: GLib.Quark,
            hook_func: SignalEmissionHook,
            data_destroy?: GLib.DestroyNotify | null,
        ): number;
        /**
         * Calls the original class closure of a signal. This function should only
         * be called from an overridden class closure; see
         * g_signal_override_class_closure() and
         * g_signal_override_class_handler().
         * @param instance_and_params the argument list of the signal emission.  The first element in the array is a #GValue for the instance the signal  is being emitted on. The rest are any arguments to be passed to the signal.
         * @param return_value Location for the return value.
         */
        function signal_chain_from_overridden(instance_and_params: (Value | any)[], return_value: Value | any): void;
        /**
         * Connects a closure to a signal for a particular object.
         *
         * If `closure` is a floating reference (see g_closure_sink()), this function
         * takes ownership of `closure`.
         *
         * This function cannot fail. If the given signal doesn’t exist, a critical
         * warning is emitted.
         * @param instance the instance to connect to.
         * @param detailed_signal a string of the form "signal-name::detail".
         * @param closure the closure to connect.
         * @param after whether the handler should be called before or after the  default handler of the signal.
         * @returns the handler ID (always greater than 0)
         */
        function signal_connect_closure(
            instance: Object,
            detailed_signal: string,
            closure: Closure,
            after: boolean,
        ): number;
        /**
         * Connects a closure to a signal for a particular object.
         *
         * If `closure` is a floating reference (see g_closure_sink()), this function
         * takes ownership of `closure`.
         *
         * This function cannot fail. If the given signal doesn’t exist, a critical
         * warning is emitted.
         * @param instance the instance to connect to.
         * @param signal_id the id of the signal.
         * @param detail the detail.
         * @param closure the closure to connect.
         * @param after whether the handler should be called before or after the  default handler of the signal.
         * @returns the handler ID (always greater than 0)
         */
        function signal_connect_closure_by_id(
            instance: Object,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure,
            after: boolean,
        ): number;
        /**
         * Emits a signal. Signal emission is done synchronously.
         * The method will only return control after all handlers are called or signal emission was stopped.
         *
         * Note that g_signal_emitv() doesn't change `return_value` if no handlers are
         * connected, in contrast to g_signal_emit() and g_signal_emit_valist().
         * @param instance_and_params argument list for the signal emission.  The first element in the array is a #GValue for the instance the signal  is being emitted on. The rest are any arguments to be passed to the signal.
         * @param signal_id the signal id
         * @param detail the detail
         * @param return_value Location to store the return value of the signal emission. This must be provided if the specified signal returns a value, but may be ignored otherwise.
         */
        function signal_emitv(
            instance_and_params: (Value | any)[],
            signal_id: number,
            detail: GLib.Quark,
            return_value?: Value | any,
        ): unknown;
        /**
         * Returns the invocation hint of the innermost signal emission of instance.
         * @param instance the instance to query
         * @returns the invocation hint of the innermost     signal emission, or %NULL if not found.
         */
        function signal_get_invocation_hint(instance: Object): SignalInvocationHint | null;
        /**
         * Blocks a handler of an instance so it will not be called during any
         * signal emissions unless it is unblocked again. Thus "blocking" a
         * signal handler means to temporarily deactivate it, a signal handler
         * has to be unblocked exactly the same amount of times it has been
         * blocked before to become active again.
         *
         * The `handler_id` has to be a valid signal handler id, connected to a
         * signal of `instance`.
         * @param instance The instance to block the signal handler of.
         * @param handler_id Handler id of the handler to be blocked.
         */
        function signal_handler_block(instance: Object, handler_id: number): void;
        /**
         * Disconnects a handler from an instance so it will not be called during
         * any future or currently ongoing emissions of the signal it has been
         * connected to. The `handler_id` becomes invalid and may be reused.
         *
         * The `handler_id` has to be a valid signal handler id, connected to a
         * signal of `instance`.
         * @param instance The instance to remove the signal handler from.
         * @param handler_id Handler id of the handler to be disconnected.
         */
        function signal_handler_disconnect(instance: Object, handler_id: number): void;
        /**
         * Returns whether `handler_id` is the ID of a handler connected to `instance`.
         * @param instance The instance where a signal handler is sought.
         * @param handler_id the handler ID.
         * @returns whether @handler_id identifies a handler connected to @instance.
         */
        function signal_handler_is_connected(instance: Object, handler_id: number): boolean;
        /**
         * Undoes the effect of a previous g_signal_handler_block() call.  A
         * blocked handler is skipped during signal emissions and will not be
         * invoked, unblocking it (for exactly the amount of times it has been
         * blocked before) reverts its "blocked" state, so the handler will be
         * recognized by the signal system and is called upon future or
         * currently ongoing signal emissions (since the order in which
         * handlers are called during signal emissions is deterministic,
         * whether the unblocked handler in question is called as part of a
         * currently ongoing emission depends on how far that emission has
         * proceeded yet).
         *
         * The `handler_id` has to be a valid id of a signal handler that is
         * connected to a signal of `instance` and is currently blocked.
         * @param instance The instance to unblock the signal handler of.
         * @param handler_id Handler id of the handler to be unblocked.
         */
        function signal_handler_unblock(instance: Object, handler_id: number): void;
        /**
         * Blocks all handlers on an instance that match a certain selection criteria.
         *
         * The criteria mask is passed as a combination of #GSignalMatchType flags, and
         * the criteria values are passed as arguments. A handler must match on all
         * flags set in `mask` to be blocked (i.e. the match is conjunctive).
         *
         * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
         * %G_SIGNAL_MATCH_FUNC
         * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
         * If no handlers were found, 0 is returned, the number of blocked handlers
         * otherwise.
         *
         * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
         * @param instance The instance to block handlers from.
         * @param mask Mask indicating which of @signal_id, @detail, @closure, @func  and/or @data the handlers have to match.
         * @param signal_id Signal the handlers have to be connected to.
         * @param detail Signal detail the handlers have to be connected to.
         * @param closure The closure the handlers will invoke.
         * @param func The C closure callback of the handlers (useless for non-C closures).
         * @param data The closure data of the handlers' closures.
         * @returns The number of handlers that matched.
         */
        function signal_handlers_block_matched(
            instance: Object,
            mask: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure?: Closure | null,
            func?: any | null,
            data?: any | null,
        ): number;
        /**
         * Destroy all signal handlers of a type instance. This function is
         * an implementation detail of the #GObject dispose implementation,
         * and should not be used outside of the type system.
         * @param instance The instance whose signal handlers are destroyed
         */
        function signal_handlers_destroy(instance: Object): void;
        /**
         * Disconnects all handlers on an instance that match a certain
         * selection criteria.
         *
         * The criteria mask is passed as a combination of #GSignalMatchType flags, and
         * the criteria values are passed as arguments. A handler must match on all
         * flags set in `mask` to be disconnected (i.e. the match is conjunctive).
         *
         * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
         * %G_SIGNAL_MATCH_FUNC or
         * %G_SIGNAL_MATCH_DATA match flags is required for successful
         * matches.  If no handlers were found, 0 is returned, the number of
         * disconnected handlers otherwise.
         *
         * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
         * @param instance The instance to remove handlers from.
         * @param mask Mask indicating which of @signal_id, @detail, @closure, @func  and/or @data the handlers have to match.
         * @param signal_id Signal the handlers have to be connected to.
         * @param detail Signal detail the handlers have to be connected to.
         * @param closure The closure the handlers will invoke.
         * @param func The C closure callback of the handlers (useless for non-C closures).
         * @param data The closure data of the handlers' closures.
         * @returns The number of handlers that matched.
         */
        function signal_handlers_disconnect_matched(
            instance: Object,
            mask: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure?: Closure | null,
            func?: any | null,
            data?: any | null,
        ): number;
        /**
         * Unblocks all handlers on an instance that match a certain selection
         * criteria.
         *
         * The criteria mask is passed as a combination of #GSignalMatchType flags, and
         * the criteria values are passed as arguments. A handler must match on all
         * flags set in `mask` to be unblocked (i.e. the match is conjunctive).
         *
         * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
         * %G_SIGNAL_MATCH_FUNC
         * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
         * If no handlers were found, 0 is returned, the number of unblocked handlers
         * otherwise. The match criteria should not apply to any handlers that are
         * not currently blocked.
         *
         * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
         * @param instance The instance to unblock handlers from.
         * @param mask Mask indicating which of @signal_id, @detail, @closure, @func  and/or @data the handlers have to match.
         * @param signal_id Signal the handlers have to be connected to.
         * @param detail Signal detail the handlers have to be connected to.
         * @param closure The closure the handlers will invoke.
         * @param func The C closure callback of the handlers (useless for non-C closures).
         * @param data The closure data of the handlers' closures.
         * @returns The number of handlers that matched.
         */
        function signal_handlers_unblock_matched(
            instance: Object,
            mask: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure?: Closure | null,
            func?: any | null,
            data?: any | null,
        ): number;
        /**
         * Returns whether there are any handlers connected to `instance` for the
         * given signal id and detail.
         *
         * If `detail` is 0 then it will only match handlers that were connected
         * without detail.  If `detail` is non-zero then it will match handlers
         * connected both without detail and with the given detail.  This is
         * consistent with how a signal emitted with `detail` would be delivered
         * to those handlers.
         *
         * Since 2.46 this also checks for a non-default class closure being
         * installed, as this is basically always what you want.
         *
         * One example of when you might use this is when the arguments to the
         * signal are difficult to compute. A class implementor may opt to not
         * emit the signal if no one is attached anyway, thus saving the cost
         * of building the arguments.
         * @param instance the object whose signal handlers are sought.
         * @param signal_id the signal id.
         * @param detail the detail.
         * @param may_be_blocked whether blocked handlers should count as match.
         * @returns %TRUE if a handler is connected to the signal, %FALSE          otherwise.
         */
        function signal_has_handler_pending(
            instance: Object,
            signal_id: number,
            detail: GLib.Quark,
            may_be_blocked: boolean,
        ): boolean;
        /**
         * Validate a signal name. This can be useful for dynamically-generated signals
         * which need to be validated at run-time before actually trying to create them.
         *
         * See [func`GObject`.signal_new] for details of the rules for valid names.
         * The rules for signal names are the same as those for property names.
         * @param name the canonical name of the signal
         * @returns %TRUE if @name is a valid signal name, %FALSE otherwise.
         */
        function signal_is_valid_name(name: string): boolean;
        /**
         * Lists the signals by id that a certain instance or interface type
         * created. Further information about the signals can be acquired through
         * g_signal_query().
         * @param itype Instance or interface type.
         * @returns Newly allocated array of signal IDs.
         */
        function signal_list_ids(itype: GType): number[];
        /**
         * Given the name of the signal and the type of object it connects to, gets
         * the signal's identifying integer. Emitting the signal by number is
         * somewhat faster than using the name each time.
         *
         * Also tries the ancestors of the given type.
         *
         * The type class passed as `itype` must already have been instantiated (for
         * example, using g_type_class_ref()) for this function to work, as signals are
         * always installed during class initialization.
         *
         * See g_signal_new() for details on allowed signal names.
         * @param name the signal's name.
         * @param itype the type that the signal operates on.
         * @returns the signal's identifying number, or 0 if no signal was found.
         */
        function signal_lookup(name: string, itype: GType): number;
        /**
         * Given the signal's identifier, finds its name.
         *
         * Two different signals may have the same name, if they have differing types.
         * @param signal_id the signal's identifying number.
         * @returns the signal name, or %NULL if the signal number was invalid.
         */
        function signal_name(signal_id: number): string | null;
        /**
         * Overrides the class closure (i.e. the default handler) for the given signal
         * for emissions on instances of `instance_type`. `instance_type` must be derived
         * from the type to which the signal belongs.
         *
         * See g_signal_chain_from_overridden() and
         * g_signal_chain_from_overridden_handler() for how to chain up to the
         * parent class closure from inside the overridden one.
         * @param signal_id the signal id
         * @param instance_type the instance type on which to override the class closure  for the signal.
         * @param class_closure the closure.
         */
        function signal_override_class_closure(signal_id: number, instance_type: GType, class_closure: Closure): void;
        /**
         * Overrides the class closure (i.e. the default handler) for the
         * given signal for emissions on instances of `instance_type` with
         * callback `class_handler`. `instance_type` must be derived from the
         * type to which the signal belongs.
         *
         * See g_signal_chain_from_overridden() and
         * g_signal_chain_from_overridden_handler() for how to chain up to the
         * parent class closure from inside the overridden one.
         * @param signal_name the name for the signal
         * @param instance_type the instance type on which to override the class handler  for the signal.
         * @param class_handler the handler.
         */
        function signal_override_class_handler(
            signal_name: string,
            instance_type: GType,
            class_handler: Callback,
        ): void;
        /**
         * Internal function to parse a signal name into its `signal_id`
         * and `detail` quark.
         * @param detailed_signal a string of the form "signal-name::detail".
         * @param itype The interface/instance type that introduced "signal-name".
         * @param force_detail_quark %TRUE forces creation of a #GQuark for the detail.
         * @returns Whether the signal name could successfully be parsed and @signal_id_p and @detail_p contain valid return values.
         */
        function signal_parse_name(
            detailed_signal: string,
            itype: GType,
            force_detail_quark: boolean,
        ): [boolean, number, GLib.Quark];
        /**
         * Queries the signal system for in-depth information about a
         * specific signal. This function will fill in a user-provided
         * structure to hold signal-specific information. If an invalid
         * signal id is passed in, the `signal_id` member of the #GSignalQuery
         * is 0. All members filled into the #GSignalQuery structure should
         * be considered constant and have to be left untouched.
         * @param signal_id The signal id of the signal to query information for.
         */
        function signal_query(signal_id: number): SignalQuery;
        /**
         * Deletes an emission hook.
         * @param signal_id the id of the signal
         * @param hook_id the id of the emission hook, as returned by  g_signal_add_emission_hook()
         */
        function signal_remove_emission_hook(signal_id: number, hook_id: number): void;
        /**
         * Stops a signal's current emission.
         *
         * This will prevent the default method from running, if the signal was
         * %G_SIGNAL_RUN_LAST and you connected normally (i.e. without the "after"
         * flag).
         *
         * Prints a warning if used on a signal which isn't being emitted.
         * @param instance the object whose signal handlers you wish to stop.
         * @param signal_id the signal identifier, as returned by g_signal_lookup().
         * @param detail the detail which the signal was emitted with.
         */
        function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void;
        /**
         * Stops a signal's current emission.
         *
         * This is just like g_signal_stop_emission() except it will look up the
         * signal id for you.
         * @param instance the object whose signal handlers you wish to stop.
         * @param detailed_signal a string of the form "signal-name::detail".
         */
        function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void;
        /**
         * Creates a new closure which invokes the function found at the offset
         * `struct_offset` in the class structure of the interface or classed type
         * identified by `itype`.
         * @param itype the #GType identifier of an interface or classed type
         * @param struct_offset the offset of the member function of @itype's class  structure which is to be invoked by the new closure
         * @returns a floating reference to a new #GCClosure
         */
        function signal_type_cclosure_new(itype: GType, struct_offset: number): Closure;
        /**
         * Set the callback for a source as a #GClosure.
         *
         * If the source is not one of the standard GLib types, the `closure_callback`
         * and `closure_marshal` fields of the #GSourceFuncs structure must have been
         * filled in with pointers to appropriate functions.
         * @param source the source
         * @param closure a #GClosure
         */
        function source_set_closure(source: GLib.Source, closure: Closure): void;
        /**
         * Sets a dummy callback for `source`. The callback will do nothing, and
         * if the source expects a #gboolean return value, it will return %TRUE.
         * (If the source expects any other type of return value, it will return
         * a 0/%NULL value; whatever g_value_init() initializes a #GValue to for
         * that type.)
         *
         * If the source is not one of the standard GLib types, the
         * `closure_callback` and `closure_marshal` fields of the #GSourceFuncs
         * structure must have been filled in with pointers to appropriate
         * functions.
         * @param source the source
         */
        function source_set_dummy_callback(source: GLib.Source): void;
        /**
         * Return a newly allocated string, which describes the contents of a
         * #GValue.  The main purpose of this function is to describe #GValue
         * contents for debugging output, the way in which the contents are
         * described may change between different GLib versions.
         * @param value #GValue which contents are to be described.
         * @returns Newly allocated string.
         */
        function strdup_value_contents(value: Value | any): string;
        /**
         * Registers a private class structure for a classed type;
         * when the class is allocated, the private structures for
         * the class and all of its parent types are allocated
         * sequentially in the same memory block as the public
         * structures, and are zero-filled.
         *
         * This function should be called in the
         * type's get_type() function after the type is registered.
         * The private structure can be retrieved using the
         * G_TYPE_CLASS_GET_PRIVATE() macro.
         * @param class_type GType of a classed type
         * @param private_size size of private structure
         */
        function type_add_class_private(class_type: GType, private_size: number): void;
        function type_add_instance_private(class_type: GType, private_size: number): number;
        /**
         * Adds `interface_type` to the dynamic `instance_type`. The information
         * contained in the #GTypePlugin structure pointed to by `plugin`
         * is used to manage the relationship.
         * @param instance_type #GType value of an instantiatable type
         * @param interface_type #GType value of an interface type
         * @param plugin #GTypePlugin structure to retrieve the #GInterfaceInfo from
         */
        function type_add_interface_dynamic(instance_type: GType, interface_type: GType, plugin: TypePlugin): void;
        /**
         * Adds `interface_type` to the static `instance_type`.
         * The information contained in the #GInterfaceInfo structure
         * pointed to by `info` is used to manage the relationship.
         * @param instance_type #GType value of an instantiatable type
         * @param interface_type #GType value of an interface type
         * @param info #GInterfaceInfo structure for this        (@instance_type, @interface_type) combination
         */
        function type_add_interface_static(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
        function type_check_class_is_a(g_class: TypeClass, is_a_type: GType): boolean;
        /**
         * Private helper function to aid implementation of the
         * G_TYPE_CHECK_INSTANCE() macro.
         * @param instance a valid #GTypeInstance structure
         * @returns %TRUE if @instance is valid, %FALSE otherwise
         */
        function type_check_instance(instance: TypeInstance): boolean;
        function type_check_instance_is_a(instance: TypeInstance, iface_type: GType): boolean;
        function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: GType): boolean;
        function type_check_is_value_type(type: GType): boolean;
        function type_check_value(value: Value | any): boolean;
        function type_check_value_holds(value: Value | any, type: GType): boolean;
        /**
         * Return a newly allocated and 0-terminated array of type IDs, listing
         * the child types of `type`.
         * @param type the parent type
         * @returns Newly allocated     and 0-terminated array of child types, free with g_free()
         */
        function type_children(type: GType): GType[];
        function type_class_adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
        /**
         * This function is essentially the same as g_type_class_ref(),
         * except that the classes reference count isn't incremented.
         * As a consequence, this function may return %NULL if the class
         * of the type passed in does not currently exist (hasn't been
         * referenced before).
         * @param type type ID of a classed type
         * @returns the #GTypeClass     structure for the given type ID or %NULL if the class does not     currently exist
         */
        function type_class_peek(type: GType): TypeClass;
        /**
         * A more efficient version of g_type_class_peek() which works only for
         * static types.
         * @param type type ID of a classed type
         * @returns the #GTypeClass     structure for the given type ID or %NULL if the class does not     currently exist or is dynamically loaded
         */
        function type_class_peek_static(type: GType): TypeClass;
        /**
         * Increments the reference count of the class structure belonging to
         * `type`. This function will demand-create the class if it doesn't
         * exist already.
         * @param type type ID of a classed type
         * @returns the #GTypeClass     structure for the given type ID
         */
        function type_class_ref(type: GType): TypeClass;
        /**
         * If the interface type `g_type` is currently in use, returns its
         * default interface vtable.
         * @param g_type an interface type
         * @returns the default     vtable for the interface, or %NULL if the type is not currently     in use
         */
        function type_default_interface_peek(g_type: GType): TypeInterface;
        /**
         * Increments the reference count for the interface type `g_type,`
         * and returns the default interface vtable for the type.
         *
         * If the type is not currently in use, then the default vtable
         * for the type will be created and initialized by calling
         * the base interface init and default vtable init functions for
         * the type (the `base_init` and `class_init` members of #GTypeInfo).
         * Calling g_type_default_interface_ref() is useful when you
         * want to make sure that signals and properties for an interface
         * have been installed.
         * @param g_type an interface type
         * @returns the default     vtable for the interface; call g_type_default_interface_unref()     when you are done using the interface.
         */
        function type_default_interface_ref(g_type: GType): TypeInterface;
        /**
         * Decrements the reference count for the type corresponding to the
         * interface default vtable `g_iface`. If the type is dynamic, then
         * when no one is using the interface and all references have
         * been released, the finalize function for the interface's default
         * vtable (the `class_finalize` member of #GTypeInfo) will be called.
         * @param g_iface the default vtable     structure for an interface, as returned by g_type_default_interface_ref()
         */
        function type_default_interface_unref(g_iface: TypeInterface): void;
        /**
         * Returns the length of the ancestry of the passed in type. This
         * includes the type itself, so that e.g. a fundamental type has depth 1.
         * @param type a #GType
         * @returns the depth of @type
         */
        function type_depth(type: GType): number;
        /**
         * Ensures that the indicated `type` has been registered with the
         * type system, and its _class_init() method has been run.
         *
         * In theory, simply calling the type's _get_type() method (or using
         * the corresponding macro) is supposed take care of this. However,
         * _get_type() methods are often marked %G_GNUC_CONST for performance
         * reasons, even though this is technically incorrect (since
         * %G_GNUC_CONST requires that the function not have side effects,
         * which _get_type() methods do on the first call). As a result, if
         * you write a bare call to a _get_type() macro, it may get optimized
         * out by the compiler. Using g_type_ensure() guarantees that the
         * type's _get_type() method is called.
         * @param type a #GType
         */
        function type_ensure(type: GType): void;
        /**
         * Frees an instance of a type, returning it to the instance pool for
         * the type, if there is one.
         *
         * Like g_type_create_instance(), this function is reserved for
         * implementors of fundamental types.
         * @param instance an instance of a type
         */
        function type_free_instance(instance: TypeInstance): void;
        /**
         * Look up the type ID from a given type name, returning 0 if no type
         * has been registered under this name (this is the preferred method
         * to find out by name whether a specific type has been registered
         * yet).
         * @param name type name to look up
         * @returns corresponding type ID or 0
         */
        function type_from_name(name: string): GType;
        /**
         * Internal function, used to extract the fundamental type ID portion.
         * Use G_TYPE_FUNDAMENTAL() instead.
         * @param type_id valid type ID
         * @returns fundamental type ID
         */
        function type_fundamental(type_id: GType): GType;
        /**
         * Returns the next free fundamental type id which can be used to
         * register a new fundamental type with g_type_register_fundamental().
         * The returned type ID represents the highest currently registered
         * fundamental type identifier.
         * @returns the next available fundamental type ID to be registered,     or 0 if the type system ran out of fundamental type IDs
         */
        function type_fundamental_next(): GType;
        /**
         * Returns the number of instances allocated of the particular type;
         * this is only available if GLib is built with debugging support and
         * the `instance-count` debug flag is set (by setting the `GOBJECT_DEBUG`
         * variable to include `instance-count`).
         * @param type a #GType
         * @returns the number of instances allocated of the given type;   if instance counts are not available, returns 0.
         */
        function type_get_instance_count(type: GType): number;
        /**
         * Returns the #GTypePlugin structure for `type`.
         * @param type #GType to retrieve the plugin for
         * @returns the corresponding plugin     if @type is a dynamic type, %NULL otherwise
         */
        function type_get_plugin(type: GType): TypePlugin;
        /**
         * Obtains data which has previously been attached to `type`
         * with g_type_set_qdata().
         *
         * Note that this does not take subtyping into account; data
         * attached to one type with g_type_set_qdata() cannot
         * be retrieved from a subtype using g_type_get_qdata().
         * @param type a #GType
         * @param quark a #GQuark id to identify the data
         * @returns the data, or %NULL if no data was found
         */
        function type_get_qdata(type: GType, quark: GLib.Quark): any | null;
        /**
         * Returns an opaque serial number that represents the state of the set
         * of registered types. Any time a type is registered this serial changes,
         * which means you can cache information based on type lookups (such as
         * g_type_from_name()) and know if the cache is still valid at a later
         * time by comparing the current serial with the one at the type lookup.
         * @returns An unsigned int, representing the state of type registrations
         */
        function type_get_type_registration_serial(): number;
        /**
         * This function used to initialise the type system.  Since GLib 2.36,
         * the type system is initialised automatically and this function does
         * nothing.
         */
        function type_init(): void;
        /**
         * This function used to initialise the type system with debugging
         * flags.  Since GLib 2.36, the type system is initialised automatically
         * and this function does nothing.
         *
         * If you need to enable debugging features, use the `GOBJECT_DEBUG`
         * environment variable.
         * @param debug_flags bitwise combination of #GTypeDebugFlags values for     debugging purposes
         */
        function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;
        /**
         * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
         * This means that any type implementing `interface_type` must also implement
         * `prerequisite_type`. Prerequisites can be thought of as an alternative to
         * interface derivation (which GType doesn't support). An interface can have
         * at most one instantiatable prerequisite type.
         * @param interface_type #GType value of an interface type
         * @param prerequisite_type #GType value of an interface or instantiatable type
         */
        function type_interface_add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
        /**
         * Returns the #GTypePlugin structure for the dynamic interface
         * `interface_type` which has been added to `instance_type,` or %NULL
         * if `interface_type` has not been added to `instance_type` or does
         * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
         * @param instance_type #GType of an instantiatable type
         * @param interface_type #GType of an interface type
         * @returns the #GTypePlugin for the dynamic     interface @interface_type of @instance_type
         */
        function type_interface_get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
        /**
         * Returns the most specific instantiatable prerequisite of an
         * interface type. If the interface type has no instantiatable
         * prerequisite, %G_TYPE_INVALID is returned.
         *
         * See g_type_interface_add_prerequisite() for more information
         * about prerequisites.
         * @param interface_type an interface type
         * @returns the instantiatable prerequisite type or %G_TYPE_INVALID if none
         */
        function type_interface_instantiatable_prerequisite(interface_type: GType): GType;
        /**
         * Returns the #GTypeInterface structure of an interface to which the
         * passed in class conforms.
         * @param instance_class a #GTypeClass structure
         * @param iface_type an interface ID which this class conforms to
         * @returns the #GTypeInterface     structure of @iface_type if implemented by @instance_class, %NULL     otherwise
         */
        function type_interface_peek(instance_class: TypeClass, iface_type: GType): TypeInterface;
        /**
         * Returns the prerequisites of an interfaces type.
         * @param interface_type an interface type
         * @returns a     newly-allocated zero-terminated array of #GType containing     the prerequisites of @interface_type
         */
        function type_interface_prerequisites(interface_type: GType): GType[];
        /**
         * Return a newly allocated and 0-terminated array of type IDs, listing
         * the interface types that `type` conforms to.
         * @param type the type to list interface types for
         * @returns Newly allocated     and 0-terminated array of interface types, free with g_free()
         */
        function type_interfaces(type: GType): GType[];
        /**
         * If `is_a_type` is a derivable type, check whether `type` is a
         * descendant of `is_a_type`. If `is_a_type` is an interface, check
         * whether `type` conforms to it.
         * @param type type to check ancestry for
         * @param is_a_type possible ancestor of @type or interface that @type     could conform to
         * @returns %TRUE if @type is a @is_a_type
         */
        function type_is_a(type: GType, is_a_type: GType): boolean;
        /**
         * Get the unique name that is assigned to a type ID.  Note that this
         * function (like all other GType API) cannot cope with invalid type
         * IDs. %G_TYPE_INVALID may be passed to this function, as may be any
         * other validly registered type ID, but randomized type IDs should
         * not be passed in and will most likely lead to a crash.
         * @param type type to return name for
         * @returns static type name or %NULL
         */
        function type_name(type: GType): string | null;
        function type_name_from_class(g_class: TypeClass): string;
        function type_name_from_instance(instance: TypeInstance): string;
        /**
         * Given a `leaf_type` and a `root_type` which is contained in its
         * ancestry, return the type that `root_type` is the immediate parent
         * of. In other words, this function determines the type that is
         * derived directly from `root_type` which is also a base class of
         * `leaf_type`.  Given a root type and a leaf type, this function can
         * be used to determine the types and order in which the leaf type is
         * descended from the root type.
         * @param leaf_type descendant of @root_type and the type to be returned
         * @param root_type immediate parent of the returned type
         * @returns immediate child of @root_type and ancestor of @leaf_type
         */
        function type_next_base(leaf_type: GType, root_type: GType): GType;
        /**
         * Return the direct parent type of the passed in type. If the passed
         * in type has no parent, i.e. is a fundamental type, 0 is returned.
         * @param type the derived type
         * @returns the parent type
         */
        function type_parent(type: GType): GType;
        /**
         * Get the corresponding quark of the type IDs name.
         * @param type type to return quark of type name for
         * @returns the type names quark or 0
         */
        function type_qname(type: GType): GLib.Quark;
        /**
         * Queries the type system for information about a specific type.
         *
         * This function will fill in a user-provided structure to hold
         * type-specific information. If an invalid #GType is passed in, the
         * `type` member of the #GTypeQuery is 0. All members filled into the
         * #GTypeQuery structure should be considered constant and have to be
         * left untouched.
         *
         * Since GLib 2.78, this function allows queries on dynamic types. Previously
         * it only supported static types.
         * @param type #GType of a static, classed type
         */
        function type_query(type: GType): TypeQuery;
        /**
         * Registers `type_name` as the name of a new dynamic type derived from
         * `parent_type`.  The type system uses the information contained in the
         * #GTypePlugin structure pointed to by `plugin` to manage the type and its
         * instances (if not abstract).  The value of `flags` determines the nature
         * (e.g. abstract or not) of the type.
         * @param parent_type type from which this type will be derived
         * @param type_name 0-terminated string used as the name of the new type
         * @param plugin #GTypePlugin structure to retrieve the #GTypeInfo from
         * @param flags bitwise combination of #GTypeFlags values
         * @returns the new type identifier or %G_TYPE_INVALID if registration failed
         */
        function type_register_dynamic(
            parent_type: GType,
            type_name: string,
            plugin: TypePlugin,
            flags: TypeFlags,
        ): GType;
        /**
         * Registers `type_id` as the predefined identifier and `type_name` as the
         * name of a fundamental type. If `type_id` is already registered, or a
         * type named `type_name` is already registered, the behaviour is undefined.
         * The type system uses the information contained in the #GTypeInfo structure
         * pointed to by `info` and the #GTypeFundamentalInfo structure pointed to by
         * `finfo` to manage the type and its instances. The value of `flags` determines
         * additional characteristics of the fundamental type.
         * @param type_id a predefined type identifier
         * @param type_name 0-terminated string used as the name of the new type
         * @param info #GTypeInfo structure for this type
         * @param finfo #GTypeFundamentalInfo structure for this type
         * @param flags bitwise combination of #GTypeFlags values
         * @returns the predefined type identifier
         */
        function type_register_fundamental(
            type_id: GType,
            type_name: string,
            info: TypeInfo,
            finfo: TypeFundamentalInfo,
            flags: TypeFlags,
        ): GType;
        /**
         * Registers `type_name` as the name of a new static type derived from
         * `parent_type`. The type system uses the information contained in the
         * #GTypeInfo structure pointed to by `info` to manage the type and its
         * instances (if not abstract). The value of `flags` determines the nature
         * (e.g. abstract or not) of the type.
         * @param parent_type type from which this type will be derived
         * @param type_name 0-terminated string used as the name of the new type
         * @param info #GTypeInfo structure for this type
         * @param flags bitwise combination of #GTypeFlags values
         * @returns the new type identifier
         */
        function type_register_static(parent_type: GType, type_name: string, info: TypeInfo, flags: TypeFlags): GType;
        /**
         * Attaches arbitrary data to a type.
         * @param type a #GType
         * @param quark a #GQuark id to identify the data
         * @param data the data
         */
        function type_set_qdata(type: GType, quark: GLib.Quark, data?: any | null): void;
        function type_test_flags(type: GType, flags: number): boolean;
        /**
         * Returns whether a #GValue of type `src_type` can be copied into
         * a #GValue of type `dest_type`.
         * @param src_type source type to be copied.
         * @param dest_type destination type for copying.
         * @returns %TRUE if g_value_copy() is possible with @src_type and @dest_type.
         */
        function value_type_compatible(src_type: GType, dest_type: GType): boolean;
        /**
         * Check whether g_value_transform() is able to transform values
         * of type `src_type` into values of type `dest_type`. Note that for
         * the types to be transformable, they must be compatible or a
         * transformation function must be registered.
         * @param src_type Source type.
         * @param dest_type Target type.
         * @returns %TRUE if the transformation is possible, %FALSE otherwise.
         */
        function value_type_transformable(src_type: GType, dest_type: GType): boolean;
        function variant_get_gtype(): GType;
        interface BaseFinalizeFunc {
            (g_class: TypeClass): void;
        }
        interface BaseInitFunc {
            (g_class: TypeClass): void;
        }
        interface BindingTransformFunc {
            (binding: Binding, from_value: Value | any, to_value: Value | any): boolean;
        }
        interface BoxedCopyFunc {
            (boxed: any): any;
        }
        interface BoxedFreeFunc {
            (boxed: any): void;
        }
        interface Callback {
            (): void;
        }
        interface ClassFinalizeFunc {
            (g_class: TypeClass, class_data?: any | null): void;
        }
        interface ClassInitFunc {
            (g_class: TypeClass, class_data?: any | null): void;
        }
        interface ClosureMarshal {
            (
                closure: Closure,
                return_value: Value | null,
                param_values: (Value | any)[],
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
        }
        interface ClosureNotify {
            (data: any | null, closure: Closure): void;
        }
        interface InstanceInitFunc {
            (instance: TypeInstance, g_class: TypeClass): void;
        }
        interface InterfaceFinalizeFunc {
            (g_iface: TypeInterface, iface_data?: any | null): void;
        }
        interface InterfaceInitFunc {
            (g_iface: TypeInterface, iface_data?: any | null): void;
        }
        interface ObjectFinalizeFunc<A = Object> {
            (object: A): void;
        }
        interface ObjectGetPropertyFunc<A = Object> {
            (object: A, property_id: number, value: Value | any, pspec: ParamSpec): void;
        }
        interface ObjectSetPropertyFunc<A = Object> {
            (object: A, property_id: number, value: Value | any, pspec: ParamSpec): void;
        }
        interface SignalAccumulator {
            (
                ihint: SignalInvocationHint,
                return_accu: Value | any,
                handler_return: Value | any,
                data?: any | null,
            ): boolean;
        }
        interface SignalEmissionHook {
            (ihint: SignalInvocationHint, param_values: (Value | any)[], data?: any | null): boolean;
        }
        interface ToggleNotify<A = Object> {
            (data: any | null, object: A, is_last_ref: boolean): void;
        }
        interface TypeClassCacheFunc {
            (cache_data: any | null, g_class: TypeClass): boolean;
        }
        interface TypeInterfaceCheckFunc {
            (check_data: any | null, g_iface: TypeInterface): void;
        }
        interface TypePluginCompleteInterfaceInfo {
            (plugin: TypePlugin, instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
        }
        interface TypePluginCompleteTypeInfo {
            (plugin: TypePlugin, g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
        }
        interface TypePluginUnuse {
            (plugin: TypePlugin): void;
        }
        interface TypePluginUse {
            (plugin: TypePlugin): void;
        }
        interface TypeValueCollectFunc {
            (value: Value | any, collect_values: TypeCValue[], collect_flags: number): string | null;
        }
        interface TypeValueCopyFunc {
            (src_value: Value | any): void;
        }
        interface TypeValueFreeFunc {
            (value: Value | any): void;
        }
        interface TypeValueInitFunc {
            (value: Value | any): void;
        }
        interface TypeValueLCopyFunc {
            (value: Value | any, collect_values: TypeCValue[], collect_flags: number): string | null;
        }
        interface TypeValuePeekPointerFunc {
            (value: Value | any): any | null;
        }
        interface ValueTransform {
            (src_value: Value | any, dest_value: Value | any): void;
        }
        interface WeakNotify<A = Object> {
            (data: any | null, where_the_object_was: A): void;
        }
        type Array = object | null;
        type BookmarkFile = object | null;
        type ByteArray = object | null;
        type Bytes = object | null;
        type Checksum = object | null;
        type Date = object | null;
        type DateTime = object | null;
        type Dir = object | null;
        type Error = object | null;
        type HashTable = object | null;
        type Hmac = object | null;
        type IOChannel = object | null;
        type KeyFile = object | null;
        type MainContext = object | null;
        type MainLoop = object | null;
        type MappedFile = object | null;
        type MarkupParseContext = object | null;
        type MatchInfo = object | null;
        type OptionGroup = object | null;
        type PatternSpec = object | null;
        type PollFD = object | null;
        type PtrArray = object | null;
        type Rand = object | null;
        type Regex = object | null;
        type Source = object | null;
        type String = object | null;
        type Strv = object | null;
        type StrvBuilder = object | null;
        type Thread = object | null;
        type TimeZone = object | null;
        type Tree = object | null;
        type Uri = object | null;
        type VariantBuilder = object | null;
        type VariantDict = object | null;
        type VariantType = object | null;
        /**
         * Flags to be passed to g_object_bind_property() or
         * g_object_bind_property_full().
         *
         * This enumeration can be extended at later date.
         */

        /**
         * Flags to be passed to g_object_bind_property() or
         * g_object_bind_property_full().
         *
         * This enumeration can be extended at later date.
         */
        export namespace BindingFlags {
            export const $gtype: GType<BindingFlags>;
        }

        enum BindingFlags {
            /**
             * The default binding; if the source property
             *   changes, the target property is updated with its value.
             */
            DEFAULT,
            /**
             * Bidirectional binding; if either the
             *   property of the source or the property of the target changes,
             *   the other is updated.
             */
            BIDIRECTIONAL,
            /**
             * Synchronize the values of the source and
             *   target properties when creating the binding; the direction of
             *   the synchronization is always from the source to the target.
             */
            SYNC_CREATE,
            /**
             * If the two properties being bound are
             *   booleans, setting one to %TRUE will result in the other being
             *   set to %FALSE and vice versa. This flag will only work for
             *   boolean properties, and cannot be used when passing custom
             *   transformation functions to g_object_bind_property_full().
             */
            INVERT_BOOLEAN,
        }
        /**
         * The connection flags are used to specify the behaviour of a signal's
         * connection.
         */

        /**
         * The connection flags are used to specify the behaviour of a signal's
         * connection.
         */
        export namespace ConnectFlags {
            export const $gtype: GType<ConnectFlags>;
        }

        enum ConnectFlags {
            /**
             * Default behaviour (no special flags). Since: 2.74
             */
            DEFAULT,
            /**
             * If set, the handler should be called after the
             *  default handler of the signal. Normally, the handler is called before
             *  the default handler.
             */
            AFTER,
            /**
             * If set, the instance and data should be swapped when
             *  calling the handler; see g_signal_connect_swapped() for an example.
             */
            SWAPPED,
        }

        export namespace IOCondition {
            export const $gtype: GType<IOCondition>;
        }

        enum IOCondition {
            IN,
            OUT,
            PRI,
            ERR,
            HUP,
            NVAL,
        }
        /**
         * Through the #GParamFlags flag values, certain aspects of parameters
         * can be configured.
         *
         * See also: %G_PARAM_STATIC_STRINGS
         */

        /**
         * Through the #GParamFlags flag values, certain aspects of parameters
         * can be configured.
         *
         * See also: %G_PARAM_STATIC_STRINGS
         */
        export namespace ParamFlags {
            export const $gtype: GType<ParamFlags>;
        }

        enum ParamFlags {
            /**
             * the parameter is readable
             */
            READABLE,
            /**
             * the parameter is writable
             */
            WRITABLE,
            /**
             * alias for %G_PARAM_READABLE | %G_PARAM_WRITABLE
             */
            READWRITE,
            /**
             * the parameter will be set upon object construction
             */
            CONSTRUCT,
            /**
             * the parameter can only be set upon object construction
             */
            CONSTRUCT_ONLY,
            /**
             * upon parameter conversion (see g_param_value_convert())
             *  strict validation is not required
             */
            LAX_VALIDATION,
            /**
             * the string used as name when constructing the
             *  parameter is guaranteed to remain valid and
             *  unmodified for the lifetime of the parameter.
             *  Since 2.8
             */
            STATIC_NAME,
            /**
             * internal
             */
            PRIVATE,
            /**
             * the string used as nick when constructing the
             *  parameter is guaranteed to remain valid and
             *  unmmodified for the lifetime of the parameter.
             *  Since 2.8
             */
            STATIC_NICK,
            /**
             * the string used as blurb when constructing the
             *  parameter is guaranteed to remain valid and
             *  unmodified for the lifetime of the parameter.
             *  Since 2.8
             */
            STATIC_BLURB,
            /**
             * calls to g_object_set_property() for this
             *   property will not automatically result in a "notify" signal being
             *   emitted: the implementation must call g_object_notify() themselves
             *   in case the property actually changes.  Since: 2.42.
             */
            EXPLICIT_NOTIFY,
            /**
             * the parameter is deprecated and will be removed
             *  in a future version. A warning will be generated if it is used
             *  while running with G_ENABLE_DIAGNOSTIC=1.
             *  Since 2.26
             */
            DEPRECATED,
        }
        /**
         * The signal flags are used to specify a signal's behaviour.
         */

        /**
         * The signal flags are used to specify a signal's behaviour.
         */
        export namespace SignalFlags {
            export const $gtype: GType<SignalFlags>;
        }

        enum SignalFlags {
            /**
             * Invoke the object method handler in the first emission stage.
             */
            RUN_FIRST,
            /**
             * Invoke the object method handler in the third emission stage.
             */
            RUN_LAST,
            /**
             * Invoke the object method handler in the last emission stage.
             */
            RUN_CLEANUP,
            /**
             * Signals being emitted for an object while currently being in
             *  emission for this very object will not be emitted recursively,
             *  but instead cause the first emission to be restarted.
             */
            NO_RECURSE,
            /**
             * This signal supports "::detail" appendices to the signal name
             *  upon handler connections and emissions.
             */
            DETAILED,
            /**
             * Action signals are signals that may freely be emitted on alive
             *  objects from user code via g_signal_emit() and friends, without
             *  the need of being embedded into extra code that performs pre or
             *  post emission adjustments on the object. They can also be thought
             *  of as object methods which can be called generically by
             *  third-party code.
             */
            ACTION,
            /**
             * No emissions hooks are supported for this signal.
             */
            NO_HOOKS,
            /**
             * Varargs signal emission will always collect the
             *   arguments, even if there are no signal handlers connected.  Since 2.30.
             */
            MUST_COLLECT,
            /**
             * The signal is deprecated and will be removed
             *   in a future version. A warning will be generated if it is connected while
             *   running with G_ENABLE_DIAGNOSTIC=1.  Since 2.32.
             */
            DEPRECATED,
            /**
             * Only used in #GSignalAccumulator accumulator
             *   functions for the #GSignalInvocationHint::run_type field to mark the first
             *   call to the accumulator function for a signal emission.  Since 2.68.
             */
            ACCUMULATOR_FIRST_RUN,
        }
        /**
         * The match types specify what g_signal_handlers_block_matched(),
         * g_signal_handlers_unblock_matched() and g_signal_handlers_disconnect_matched()
         * match signals by.
         */

        /**
         * The match types specify what g_signal_handlers_block_matched(),
         * g_signal_handlers_unblock_matched() and g_signal_handlers_disconnect_matched()
         * match signals by.
         */
        export namespace SignalMatchType {
            export const $gtype: GType<SignalMatchType>;
        }

        enum SignalMatchType {
            /**
             * The signal id must be equal.
             */
            ID,
            /**
             * The signal detail must be equal.
             */
            DETAIL,
            /**
             * The closure must be the same.
             */
            CLOSURE,
            /**
             * The C closure callback must be the same.
             */
            FUNC,
            /**
             * The closure data must be the same.
             */
            DATA,
            /**
             * Only unblocked signals may be matched.
             */
            UNBLOCKED,
        }
        /**
         * These flags used to be passed to g_type_init_with_debug_flags() which
         * is now deprecated.
         *
         * If you need to enable debugging features, use the `GOBJECT_DEBUG`
         * environment variable.
         */

        /**
         * These flags used to be passed to g_type_init_with_debug_flags() which
         * is now deprecated.
         *
         * If you need to enable debugging features, use the `GOBJECT_DEBUG`
         * environment variable.
         */
        export namespace TypeDebugFlags {
            export const $gtype: GType<TypeDebugFlags>;
        }

        enum TypeDebugFlags {
            /**
             * Print no messages
             */
            NONE,
            /**
             * Print messages about object bookkeeping
             */
            OBJECTS,
            /**
             * Print messages about signal emissions
             */
            SIGNALS,
            /**
             * Keep a count of instances of each type
             */
            INSTANCE_COUNT,
            /**
             * Mask covering all debug flags
             */
            MASK,
        }
        /**
         * Bit masks used to check or determine characteristics of a type.
         */

        /**
         * Bit masks used to check or determine characteristics of a type.
         */
        export namespace TypeFlags {
            export const $gtype: GType<TypeFlags>;
        }

        enum TypeFlags {
            /**
             * No special flags. Since: 2.74
             */
            NONE,
            /**
             * Indicates an abstract type. No instances can be
             *  created for an abstract type
             */
            ABSTRACT,
            /**
             * Indicates an abstract value type, i.e. a type
             *  that introduces a value table, but can't be used for
             *  g_value_init()
             */
            VALUE_ABSTRACT,
            /**
             * Indicates a final type. A final type is a non-derivable
             *  leaf node in a deep derivable type hierarchy tree. Since: 2.70
             */
            FINAL,
            /**
             * The type is deprecated and may be removed in a
             *  future version. A warning will be emitted if it is instantiated while
             *  running with `G_ENABLE_DIAGNOSTIC=1`. Since 2.76
             */
            DEPRECATED,
        }
        /**
         * Bit masks used to check or determine specific characteristics of a
         * fundamental type.
         */

        /**
         * Bit masks used to check or determine specific characteristics of a
         * fundamental type.
         */
        export namespace TypeFundamentalFlags {
            export const $gtype: GType<TypeFundamentalFlags>;
        }

        enum TypeFundamentalFlags {
            /**
             * Indicates a classed type
             */
            CLASSED,
            /**
             * Indicates an instantiatable type (implies classed)
             */
            INSTANTIATABLE,
            /**
             * Indicates a flat derivable type
             */
            DERIVABLE,
            /**
             * Indicates a deep derivable type (implies derivable)
             */
            DEEP_DERIVABLE,
        }
        module Binding {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                flags: BindingFlags;
                source: Object;
                source_property: string;
                sourceProperty: string;
                target: Object;
                target_property: string;
                targetProperty: string;
            }
        }

        /**
         * `GObject` instance (or source) and another property on another `GObject`
         * instance (or target).
         *
         * Whenever the source property changes, the same value is applied to the
         * target property; for instance, the following binding:
         *
         * ```c
         *   g_object_bind_property (object1, "property-a",
         *                           object2, "property-b",
         *                           G_BINDING_DEFAULT);
         * ```
         *
         * will cause the property named "property-b" of `object2` to be updated
         * every time [method`GObject`.set] or the specific accessor changes the value of
         * the property "property-a" of `object1`.
         *
         * It is possible to create a bidirectional binding between two properties
         * of two `GObject` instances, so that if either property changes, the
         * other is updated as well, for instance:
         *
         * ```c
         *   g_object_bind_property (object1, "property-a",
         *                           object2, "property-b",
         *                           G_BINDING_BIDIRECTIONAL);
         * ```
         *
         * will keep the two properties in sync.
         *
         * It is also possible to set a custom transformation function (in both
         * directions, in case of a bidirectional binding) to apply a custom
         * transformation from the source value to the target value before
         * applying it; for instance, the following binding:
         *
         * ```c
         *   g_object_bind_property_full (adjustment1, "value",
         *                                adjustment2, "value",
         *                                G_BINDING_BIDIRECTIONAL,
         *                                celsius_to_fahrenheit,
         *                                fahrenheit_to_celsius,
         *                                NULL, NULL);
         * ```
         *
         * will keep the "value" property of the two adjustments in sync; the
         * `celsius_to_fahrenheit` function will be called whenever the "value"
         * property of `adjustment1` changes and will transform the current value
         * of the property before applying it to the "value" property of `adjustment2`.
         *
         * Vice versa, the `fahrenheit_to_celsius` function will be called whenever
         * the "value" property of `adjustment2` changes, and will transform the
         * current value of the property before applying it to the "value" property
         * of `adjustment1`.
         *
         * Note that #GBinding does not resolve cycles by itself; a cycle like
         *
         * ```
         *   object1:propertyA -> object2:propertyB
         *   object2:propertyB -> object3:propertyC
         *   object3:propertyC -> object1:propertyA
         * ```
         *
         * might lead to an infinite loop. The loop, in this particular case,
         * can be avoided if the objects emit the `GObject::notify` signal only
         * if the value has effectively been changed. A binding is implemented
         * using the `GObject::notify` signal, so it is susceptible to all the
         * various ways of blocking a signal emission, like [func`GObject`.signal_stop_emission]
         * or [func`GObject`.signal_handler_block].
         *
         * A binding will be severed, and the resources it allocates freed, whenever
         * either one of the `GObject` instances it refers to are finalized, or when
         * the #GBinding instance loses its last reference.
         *
         * Bindings for languages with garbage collection can use
         * [method`GObject`.Binding.unbind] to explicitly release a binding between the source
         * and target properties, instead of relying on the last reference on the
         * binding, source, and target instances to drop.
         */
        class Binding extends Object {
            static $gtype: GType<Binding>;

            // Properties

            /**
             * Flags to be used to control the #GBinding
             */
            get flags(): BindingFlags;
            /**
             * The #GObject that should be used as the source of the binding
             */
            get source(): Object;
            /**
             * The name of the property of #GBinding:source that should be used
             * as the source of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            get source_property(): string;
            /**
             * The name of the property of #GBinding:source that should be used
             * as the source of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            get sourceProperty(): string;
            /**
             * The #GObject that should be used as the target of the binding
             */
            get target(): Object;
            /**
             * The name of the property of #GBinding:target that should be used
             * as the target of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            get target_property(): string;
            /**
             * The name of the property of #GBinding:target that should be used
             * as the target of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            get targetProperty(): string;

            // Constructors

            constructor(properties?: Partial<Binding.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves the #GObject instance used as the source of the binding.
             *
             * A #GBinding can outlive the source #GObject as the binding does not hold a
             * strong reference to the source. If the source is destroyed before the
             * binding then this function will return %NULL.
             * @returns the source #GObject, or %NULL if the     source does not exist any more.
             */
            dup_source<T = Object>(): T;
            /**
             * Retrieves the #GObject instance used as the target of the binding.
             *
             * A #GBinding can outlive the target #GObject as the binding does not hold a
             * strong reference to the target. If the target is destroyed before the
             * binding then this function will return %NULL.
             * @returns the target #GObject, or %NULL if the     target does not exist any more.
             */
            dup_target<T = Object>(): T;
            /**
             * Retrieves the flags passed when constructing the #GBinding.
             * @returns the #GBindingFlags used by the #GBinding
             */
            get_flags(): BindingFlags;
            /**
             * Retrieves the #GObject instance used as the source of the binding.
             *
             * A #GBinding can outlive the source #GObject as the binding does not hold a
             * strong reference to the source. If the source is destroyed before the
             * binding then this function will return %NULL.
             *
             * Use g_binding_dup_source() if the source or binding are used from different
             * threads as otherwise the pointer returned from this function might become
             * invalid if the source is finalized from another thread in the meantime.
             * @returns the source #GObject, or %NULL if the     source does not exist any more.
             */
            get_source<T = Object>(): T;
            /**
             * Retrieves the name of the property of #GBinding:source used as the source
             * of the binding.
             * @returns the name of the source property
             */
            get_source_property(): string;
            /**
             * Retrieves the #GObject instance used as the target of the binding.
             *
             * A #GBinding can outlive the target #GObject as the binding does not hold a
             * strong reference to the target. If the target is destroyed before the
             * binding then this function will return %NULL.
             *
             * Use g_binding_dup_target() if the target or binding are used from different
             * threads as otherwise the pointer returned from this function might become
             * invalid if the target is finalized from another thread in the meantime.
             * @returns the target #GObject, or %NULL if the     target does not exist any more.
             */
            get_target<T = Object>(): T;
            /**
             * Retrieves the name of the property of #GBinding:target used as the target
             * of the binding.
             * @returns the name of the target property
             */
            get_target_property(): string;
            /**
             * Explicitly releases the binding between the source and the target
             * property expressed by `binding`.
             *
             * This function will release the reference that is being held on
             * the `binding` instance if the binding is still bound; if you want to hold on
             * to the #GBinding instance after calling g_binding_unbind(), you will need
             * to hold a reference to it.
             *
             * Note however that this function does not take ownership of `binding,` it
             * only unrefs the reference that was initially created by
             * g_object_bind_property() and is owned by the binding.
             */
            unbind(): void;
        }

        module BindingGroup {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                source: Object;
            }
        }

        /**
         * `GBindingGroup` can be used to bind multiple properties
         * from an object collectively.
         *
         * Use the various methods to bind properties from a single source
         * object to multiple destination objects. Properties can be bound
         * bidirectionally and are connected when the source object is set
         * with [method`GObject`.BindingGroup.set_source].
         */
        class BindingGroup extends Object {
            static $gtype: GType<BindingGroup>;

            // Properties

            /**
             * The source object used for binding properties.
             */
            get source(): Object;
            set source(val: Object);

            // Constructors

            constructor(properties?: Partial<BindingGroup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): BindingGroup;

            // Methods

            /**
             * Creates a binding between `source_property` on the source object
             * and `target_property` on `target`. Whenever the `source_property`
             * is changed the `target_property` is updated using the same value.
             * The binding flag %G_BINDING_SYNC_CREATE is automatically specified.
             *
             * See g_object_bind_property() for more information.
             * @param source_property the property on the source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags the flags used to create the #GBinding
             */
            bind(source_property: string, target: Object, target_property: string, flags: BindingFlags): void;
            /**
             * Creates a binding between `source_property` on the source object and
             * `target_property` on `target,` allowing you to set the transformation
             * functions to be used by the binding. The binding flag
             * %G_BINDING_SYNC_CREATE is automatically specified.
             *
             * See g_object_bind_property_full() for more information.
             * @param source_property the property on the source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags the flags used to create the #GBinding
             * @param transform_to the transformation function     from the source object to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the source object, or %NULL to use the default
             */
            bind_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to?: BindingTransformFunc | null,
                transform_from?: BindingTransformFunc | null,
            ): void;
            /**
             * Creates a binding between `source_property` on the source object and
             * `target_property` on `target,` allowing you to set the transformation
             * functions to be used by the binding. The binding flag
             * %G_BINDING_SYNC_CREATE is automatically specified.
             *
             * This function is the language bindings friendly version of
             * g_binding_group_bind_property_full(), using #GClosures
             * instead of function pointers.
             *
             * See g_object_bind_property_with_closures() for more information.
             * @param source_property the property on the source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags the flags used to create the #GBinding
             * @param transform_to a #GClosure wrapping the     transformation function from the source object to the @target,     or %NULL to use the default
             * @param transform_from a #GClosure wrapping the     transformation function from the @target to the source object,     or %NULL to use the default
             */
            bind_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to?: Closure | null,
                transform_from?: Closure | null,
            ): void;
            /**
             * Gets the source object used for binding properties.
             * @returns a #GObject or %NULL.
             */
            dup_source<T = Object>(): T;
            /**
             * Sets `source` as the source object used for creating property
             * bindings. If there is already a source object all bindings from it
             * will be removed.
             *
             * Note that all properties that have been bound must exist on `source`.
             * @param source the source #GObject,   or %NULL to clear it
             */
            set_source(source?: Object | null): void;
        }

        module InitiallyUnowned {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * A type for objects that have an initially floating reference.
         *
         * All the fields in the `GInitiallyUnowned` structure are private to the
         * implementation and should never be accessed directly.
         */
        class InitiallyUnowned extends Object {
            static $gtype: GType<InitiallyUnowned>;

            // Constructors

            constructor(properties?: Partial<InitiallyUnowned.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module Object {
            // Signal callback interfaces

            interface Notify {
                (pspec: ParamSpec): void;
            }

            // Constructor properties interface

            interface ConstructorProps {}
        }

        /**
         * The base object type.
         *
         * `GObject` is the fundamental type providing the common attributes and
         * methods for all object types in GTK, Pango and other libraries
         * based on GObject. The `GObject` class provides methods for object
         * construction and destruction, property access methods, and signal
         * support. Signals are described in detail [here][gobject-Signals].
         *
         * For a tutorial on implementing a new `GObject` class, see [How to define and
         * implement a new GObject](tutorial.html#how-to-define-and-implement-a-new-gobject).
         * For a list of naming conventions for GObjects and their methods, see the
         * [GType conventions](concepts.html#conventions). For the high-level concepts
         * behind GObject, read
         * [Instantiatable classed types: Objects](concepts.html#instantiatable-classed-types-objects).
         *
         * Since GLib 2.72, all `GObject`s are guaranteed to be aligned to at least the
         * alignment of the largest basic GLib type (typically this is `guint64` or
         * `gdouble`). If you need larger alignment for an element in a `GObject`, you
         * should allocate it on the heap (aligned), or arrange for your `GObject` to be
         * appropriately padded. This guarantee applies to the `GObject` (or derived)
         * struct, the `GObjectClass` (or derived) struct, and any private data allocated
         * by `G_ADD_PRIVATE()`.
         */
        class Object {
            static $gtype: GType<Object>;

            // Constructors

            _init(...args: any[]): void;

            static newv(object_type: GType, parameters: Parameter[]): Object;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'notify', callback: (_source: this, pspec: ParamSpec) => void): number;
            connect_after(signal: 'notify', callback: (_source: this, pspec: ParamSpec) => void): number;
            emit(signal: 'notify', pspec: ParamSpec): void;

            // Static methods

            static compat_control(what: number, data?: any | null): number;
            /**
             * Find the #GParamSpec with the given name for an
             * interface. Generally, the interface vtable passed in as `g_iface`
             * will be the default vtable from g_type_default_interface_ref(), or,
             * if you know the interface has already been loaded,
             * g_type_default_interface_peek().
             * @param g_iface any interface vtable for the  interface, or the default vtable for the interface
             * @param property_name name of a property to look up.
             */
            static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec;
            /**
             * Add a property to an interface; this is only useful for interfaces
             * that are added to GObject-derived types. Adding a property to an
             * interface forces all objects classes with that interface to have a
             * compatible property. The compatible property could be a newly
             * created #GParamSpec, but normally
             * g_object_class_override_property() will be used so that the object
             * class only needs to provide an implementation and inherits the
             * property description, default value, bounds, and so forth from the
             * interface property.
             *
             * This function is meant to be called from the interface's default
             * vtable initialization function (the `class_init` member of
             * #GTypeInfo.) It must not be called after after `class_init` has
             * been called for any object types implementing this interface.
             *
             * If `pspec` is a floating reference, it will be consumed.
             * @param g_iface any interface vtable for the    interface, or the default  vtable for the interface.
             * @param pspec the #GParamSpec for the new property
             */
            static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void;
            /**
             * Lists the properties of an interface.Generally, the interface
             * vtable passed in as `g_iface` will be the default vtable from
             * g_type_default_interface_ref(), or, if you know the interface has
             * already been loaded, g_type_default_interface_peek().
             * @param g_iface any interface vtable for the  interface, or the default vtable for the interface
             */
            static interface_list_properties(g_iface: TypeInterface): ParamSpec[];
            static find_property(property_name: string): ParamSpec;
            static install_properties(pspecs: ParamSpec[]): void;
            static install_property(property_id: number, pspec: ParamSpec): void;
            static list_properties(): ParamSpec[];
            static override_property(property_id: number, name: string): void;
            static _classInit(klass: any): any;

            // Virtual methods

            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: Value | any, pspec: ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: Value | any, pspec: ParamSpec): void;

            // Methods

            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
            ): Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to?: BindingTransformFunc | null,
                transform_from?: BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): Binding;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * This function is the language bindings friendly version of
             * g_object_bind_property_full(), using #GClosures instead of
             * function pointers.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to a #GClosure wrapping the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from a #GClosure wrapping the transformation function     from the @target to the @source, or %NULL to use the default
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to: Closure,
                transform_from: Closure,
            ): Binding;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: Closure): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        /**
         * `GParamSpec` encapsulates the metadata required to specify parameters, such as `GObject` properties.
         *
         * ## Parameter names
         *
         * A property name consists of one or more segments consisting of ASCII letters
         * and digits, separated by either the `-` or `_` character. The first
         * character of a property name must be a letter. These are the same rules as
         * for signal naming (see [func`GObject`.signal_new]).
         *
         * When creating and looking up a `GParamSpec`, either separator can be
         * used, but they cannot be mixed. Using `-` is considerably more
         * efficient, and is the ‘canonical form’. Using `_` is discouraged.
         */
        abstract class ParamSpec<A = unknown> {
            static $gtype: GType<ParamSpec>;

            // Fields

            name: string;
            flags: ParamFlags;
            value_type: GType;
            owner_type: GType;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Validate a property name for a #GParamSpec. This can be useful for
             * dynamically-generated properties which need to be validated at run-time
             * before actually trying to create them.
             *
             * See [canonical parameter names][class`GObject`.ParamSpec#parameter-names]
             * for details of the rules for valid names.
             * @param name the canonical name of the property
             */
            static is_valid_name(name: string): boolean;
            static ['char'](
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static uchar(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static int(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static uint(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static long(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static ulong(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static int64(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static uint64(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static float(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static ['boolean'](
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                defaultValue: boolean,
            ): ParamSpec<boolean>;
            static ['enum']<T>(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                enumType: GType<T> | { $gtype: GType<T> },
                defaultValue: any,
            ): ParamSpec<T>;
            static double(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                minimum: number,
                maximum: number,
                defaultValue: number,
            ): ParamSpec<number>;
            static string(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                defaultValue: string,
            ): ParamSpec<string>;
            static boxed<T>(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                boxedType: GType<T> | { $gtype: GType<T> },
            ): ParamSpec<T>;
            static object<T>(
                name: string,
                nick: string,
                blurb: string,
                flags: string,
                objectType: GType<T> | { $gtype: GType<T> },
            ): ParamSpec<T>;
            static param(
                name: string,
                nick: string,
                blurb: string,
                flags: ParamFlags | number,
                paramType: any,
            ): ParamSpec;
            static jsobject<T>(name: string, nick: string, blurb: string, flags: any): ParamSpec<T>;

            // Virtual methods

            /**
             * The instance finalization function (optional), should chain
             *  up to the finalize method of the parent class.
             */
            vfunc_finalize(): void;
            /**
             * Checks if contents of `value` comply with the specifications
             *   set out by this type, without modifying the value. This vfunc is optional.
             *   If it isn't set, GObject will use `value_validate`. Since 2.74
             * @param value
             */
            vfunc_value_is_valid(value: Value | any): boolean;
            /**
             * Resets a `value` to the default value for this type
             *  (recommended, the default is g_value_reset()), see
             *  g_param_value_set_default().
             * @param value
             */
            vfunc_value_set_default(value: Value | any): void;
            /**
             * Ensures that the contents of `value` comply with the
             *  specifications set out by this type (optional), see
             *  g_param_value_validate().
             * @param value
             */
            vfunc_value_validate(value: Value | any): boolean;
            /**
             * Compares `value1` with `value2` according to this type
             *  (recommended, the default is memcmp()), see g_param_values_cmp().
             * @param value1
             * @param value2
             */
            vfunc_values_cmp(value1: Value | any, value2: Value | any): number;

            // Methods

            /**
             * Get the short description of a #GParamSpec.
             * @returns the short description of @pspec.
             */
            get_blurb(): string | null;
            /**
             * Gets the default value of `pspec` as a pointer to a #GValue.
             *
             * The #GValue will remain valid for the life of `pspec`.
             * @returns a pointer to a #GValue which must not be modified
             */
            get_default_value(): unknown;
            /**
             * Get the name of a #GParamSpec.
             *
             * The name is always an "interned" string (as per g_intern_string()).
             * This allows for pointer-value comparisons.
             * @returns the name of @pspec.
             */
            get_name(): string;
            /**
             * Gets the GQuark for the name.
             * @returns the GQuark for @pspec->name.
             */
            get_name_quark(): GLib.Quark;
            /**
             * Get the nickname of a #GParamSpec.
             * @returns the nickname of @pspec.
             */
            get_nick(): string;
            /**
             * Gets back user data pointers stored via g_param_spec_set_qdata().
             * @param quark a #GQuark, naming the user data pointer
             * @returns the user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * If the paramspec redirects operations to another paramspec,
             * returns that paramspec. Redirect is used typically for
             * providing a new implementation of a property in a derived
             * type while preserving all the properties from the parent
             * type. Redirection is established by creating a property
             * of type #GParamSpecOverride. See g_object_class_override_property()
             * for an example of the use of this capability.
             * @returns paramspec to which requests on this          paramspec should be redirected, or %NULL if none.
             */
            get_redirect_target(): ParamSpec | null;
            /**
             * Sets an opaque, named pointer on a #GParamSpec. The name is
             * specified through a #GQuark (retrieved e.g. via
             * g_quark_from_static_string()), and the pointer can be gotten back
             * from the `pspec` with g_param_spec_get_qdata().  Setting a
             * previously set user data pointer, overrides (frees) the old pointer
             * set, using %NULL as pointer essentially removes the data stored.
             * @param quark a #GQuark, naming the user data pointer
             * @param data an opaque user data pointer
             */
            set_qdata(quark: GLib.Quark, data?: any | null): void;
            /**
             * The initial reference count of a newly created #GParamSpec is 1,
             * even though no one has explicitly called g_param_spec_ref() on it
             * yet. So the initial reference count is flagged as "floating", until
             * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
             * (pspec);` in sequence on it, taking over the initial
             * reference count (thus ending up with a `pspec` that has a reference
             * count of 1 still, but is not flagged "floating" anymore).
             */
            sink(): void;
            /**
             * Gets back user data pointers stored via g_param_spec_set_qdata()
             * and removes the `data` from `pspec` without invoking its destroy()
             * function (if any was set).  Usually, calling this function is only
             * required to update user data pointers with a destroy notifier.
             * @param quark a #GQuark, naming the user data pointer
             * @returns the user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            override(name: string, oclass: Object | Function | GType): void;
        }

        module SignalGroup {
            // Signal callback interfaces

            interface Bind {
                (instance: Object): void;
            }

            interface Unbind {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                target: Object;
                target_type: GType;
                targetType: GType;
            }
        }

        /**
         * `GSignalGroup` manages a collection of signals on a `GObject`.
         *
         * `GSignalGroup` simplifies the process of connecting  many signals to a `GObject`
         * as a group. As such there is no API to disconnect a signal from the group.
         *
         * In particular, this allows you to:
         *
         *  - Change the target instance, which automatically causes disconnection
         *    of the signals from the old instance and connecting to the new instance.
         *  - Block and unblock signals as a group
         *  - Ensuring that blocked state transfers across target instances.
         *
         * One place you might want to use such a structure is with `GtkTextView` and
         * `GtkTextBuffer`. Often times, you'll need to connect to many signals on
         * `GtkTextBuffer` from a `GtkTextView` subclass. This allows you to create a
         * signal group during instance construction, simply bind the
         * `GtkTextView:buffer` property to `GSignalGroup:target` and connect
         * all the signals you need. When the `GtkTextView:buffer` property changes
         * all of the signals will be transitioned correctly.
         */
        class SignalGroup extends Object {
            static $gtype: GType<SignalGroup>;

            // Properties

            /**
             * The target instance used when connecting signals.
             */
            get target(): Object;
            set target(val: Object);
            /**
             * The #GType of the target property.
             */
            get target_type(): GType;
            /**
             * The #GType of the target property.
             */
            get targetType(): GType;

            // Constructors

            constructor(properties?: Partial<SignalGroup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](target_type: GType): SignalGroup;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'bind', callback: (_source: this, instance: Object) => void): number;
            connect_after(signal: 'bind', callback: (_source: this, instance: Object) => void): number;
            emit(signal: 'bind', instance: Object): void;
            connect(signal: 'unbind', callback: (_source: this) => void): number;
            connect_after(signal: 'unbind', callback: (_source: this) => void): number;
            emit(signal: 'unbind'): void;

            // Methods

            /**
             * Blocks all signal handlers managed by `self` so they will not
             * be called during any signal emissions. Must be unblocked exactly
             * the same number of times it has been blocked to become active again.
             *
             * This blocked state will be kept across changes of the target instance.
             */
            block(): void;
            /**
             * Connects `closure` to the signal `detailed_signal` on #GSignalGroup:target.
             *
             * You cannot connect a signal handler after #GSignalGroup:target has been set.
             * @param detailed_signal a string of the form `signal-name` with optional `::signal-detail`
             * @param closure the closure to connect.
             * @param after whether the handler should be called before or after the  default handler of the signal.
             */
            connect_closure(detailed_signal: string, closure: Closure, after: boolean): void;
            /**
             * Connects `c_handler` to the signal `detailed_signal`
             * on the target instance of `self`.
             *
             * You cannot connect a signal handler after #GSignalGroup:target has been set.
             * @param detailed_signal a string of the form "signal-name::detail"
             * @param c_handler the #GCallback to connect
             * @param notify function to be called when disposing of @self
             * @param flags the flags used to create the signal connection
             */
            connect_data(
                detailed_signal: string,
                c_handler: Callback,
                notify: ClosureNotify,
                flags: ConnectFlags,
            ): void;
            /**
             * Connects `c_handler` to the signal `detailed_signal`
             * on the target instance of `self`.
             *
             * The instance on which the signal is emitted and `data`
             * will be swapped when calling `c_handler`.
             *
             * You cannot connect a signal handler after #GSignalGroup:target has been set.
             * @param detailed_signal a string of the form "signal-name::detail"
             * @param c_handler the #GCallback to connect
             */
            connect_swapped(detailed_signal: string, c_handler: Callback): void;
            /**
             * Gets the target instance used when connecting signals.
             * @returns The target instance
             */
            dup_target<T = Object>(): T;
            /**
             * Sets the target instance used when connecting signals. Any signal
             * that has been registered with g_signal_group_connect_object() or
             * similar functions will be connected to this object.
             *
             * If the target instance was previously set, signals will be
             * disconnected from that object prior to connecting to `target`.
             * @param target The target instance used     when connecting signals.
             */
            set_target(target?: Object | null): void;
            /**
             * Unblocks all signal handlers managed by `self` so they will be
             * called again during any signal emissions unless it is blocked
             * again. Must be unblocked exactly the same number of times it
             * has been blocked to become active again.
             */
            unblock(): void;
        }

        module TypeModule {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps, TypePlugin.ConstructorProps {}
        }

        /**
         * `GTypeModule` provides a simple implementation of the `GTypePlugin`
         * interface.
         *
         * The model of `GTypeModule` is a dynamically loaded module which
         * implements some number of types and interface implementations.
         *
         * When the module is loaded, it registers its types and interfaces
         * using [method`GObject`.TypeModule.register_type] and
         * [method`GObject`.TypeModule.add_interface].
         * As long as any instances of these types and interface implementations
         * are in use, the module is kept loaded. When the types and interfaces
         * are gone, the module may be unloaded. If the types and interfaces
         * become used again, the module will be reloaded. Note that the last
         * reference cannot be released from within the module code, since that
         * would lead to the caller's code being unloaded before `g_object_unref()`
         * returns to it.
         *
         * Keeping track of whether the module should be loaded or not is done by
         * using a use count - it starts at zero, and whenever it is greater than
         * zero, the module is loaded. The use count is maintained internally by
         * the type system, but also can be explicitly controlled by
         * [method`GObject`.TypeModule.use] and [method`GObject`.TypeModule.unuse].
         * Typically, when loading a module for the first type, `g_type_module_use()`
         * will be used to load it so that it can initialize its types. At some later
         * point, when the module no longer needs to be loaded except for the type
         * implementations it contains, `g_type_module_unuse()` is called.
         *
         * `GTypeModule` does not actually provide any implementation of module
         * loading and unloading. To create a particular module type you must
         * derive from `GTypeModule` and implement the load and unload functions
         * in `GTypeModuleClass`.
         */
        abstract class TypeModule extends Object implements TypePlugin {
            static $gtype: GType<TypeModule>;

            // Fields

            use_count: number;
            type_infos: any[];
            interface_infos: any[];
            name: string;

            // Constructors

            constructor(properties?: Partial<TypeModule.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * loads the module and registers one or more types using
             *  g_type_module_register_type().
             */
            vfunc_load(): boolean;
            /**
             * unloads the module
             */
            vfunc_unload(): void;

            // Methods

            /**
             * Registers an additional interface for a type, whose interface lives
             * in the given type plugin. If the interface was already registered
             * for the type in this plugin, nothing will be done.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module` is %NULL this will call g_type_add_interface_static()
             * instead. This can be used when making a static build of the module.
             * @param instance_type type to which to add the interface.
             * @param interface_type interface type to add
             * @param interface_info type information structure
             */
            add_interface(instance_type: GType, interface_type: GType, interface_info: InterfaceInfo): void;
            /**
             * Looks up or registers an enumeration that is implemented with a particular
             * type plugin. If a type with name `type_name` was previously registered,
             * the #GType identifier for the type is returned, otherwise the type
             * is newly registered, and the resulting #GType identifier returned.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module` is %NULL this will call g_type_register_static()
             * instead. This can be used when making a static build of the module.
             * @param name name for the type
             * @param const_static_values an array of #GEnumValue structs for the                       possible enumeration values. The array is                       terminated by a struct with all members being                       0.
             * @returns the new or existing type ID
             */
            register_enum(name: string, const_static_values: EnumValue): GType;
            /**
             * Looks up or registers a flags type that is implemented with a particular
             * type plugin. If a type with name `type_name` was previously registered,
             * the #GType identifier for the type is returned, otherwise the type
             * is newly registered, and the resulting #GType identifier returned.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module` is %NULL this will call g_type_register_static()
             * instead. This can be used when making a static build of the module.
             * @param name name for the type
             * @param const_static_values an array of #GFlagsValue structs for the                       possible flags values. The array is                       terminated by a struct with all members being                       0.
             * @returns the new or existing type ID
             */
            register_flags(name: string, const_static_values: FlagsValue): GType;
            /**
             * Looks up or registers a type that is implemented with a particular
             * type plugin. If a type with name `type_name` was previously registered,
             * the #GType identifier for the type is returned, otherwise the type
             * is newly registered, and the resulting #GType identifier returned.
             *
             * When reregistering a type (typically because a module is unloaded
             * then reloaded, and reinitialized), `module` and `parent_type` must
             * be the same as they were previously.
             *
             * As long as any instances of the type exist, the type plugin will
             * not be unloaded.
             *
             * Since 2.56 if `module` is %NULL this will call g_type_register_static()
             * instead. This can be used when making a static build of the module.
             * @param parent_type the type for the parent class
             * @param type_name name for the type
             * @param type_info type information structure
             * @param flags flags field providing details about the type
             * @returns the new or existing type ID
             */
            register_type(parent_type: GType, type_name: string, type_info: TypeInfo, flags: TypeFlags): GType;
            /**
             * Sets the name for a #GTypeModule
             * @param name a human-readable name to use in error messages.
             */
            set_name(name: string): void;
            /**
             * Decreases the use count of a #GTypeModule by one. If the
             * result is zero, the module will be unloaded. (However, the
             * #GTypeModule will not be freed, and types associated with the
             * #GTypeModule are not unregistered. Once a #GTypeModule is
             * initialized, it must exist forever.)
             */
            unuse(): void;
            /**
             * Increases the use count of a #GTypeModule by one. If the
             * use count was zero before, the plugin will be loaded.
             * If loading the plugin fails, the use count is reset to
             * its prior value.
             * @returns %FALSE if the plugin needed to be loaded and  loading the plugin failed.
             */
            use(): boolean;
            // Conflicted with GObject.TypePlugin.use
            use(...args: never[]): any;

            // Inherited methods
            /**
             * Calls the `complete_interface_info` function from the
             * #GTypePluginClass of `plugin`. There should be no need to use this
             * function outside of the GObject type system itself.
             * @param instance_type the #GType of an instantiatable type to which the interface  is added
             * @param interface_type the #GType of the interface whose info is completed
             * @param info the #GInterfaceInfo to fill in
             */
            complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
            /**
             * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
             * There should be no need to use this function outside of the GObject
             * type system itself.
             * @param g_type the #GType whose info is completed
             * @param info the #GTypeInfo struct to fill in
             * @param value_table the #GTypeValueTable to fill in
             */
            complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
            ): Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: Object,
                target_property: string,
                flags: BindingFlags,
                transform_to?: BindingTransformFunc | null,
                transform_from?: BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: Value | any, pspec: ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: Value | any, pspec: ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        /**
         * A #GCClosure is a specialization of #GClosure for C function callbacks.
         */
        class CClosure {
            static $gtype: GType<CClosure>;

            // Fields

            callback: any;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * A #GClosureMarshal function for use with signals with handlers that
             * take two boxed pointers as arguments and return a boolean.  If you
             * have such a signal, you will probably also need to use an
             * accumulator, such as g_signal_accumulator_true_handled().
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_BOOLEAN__BOXED_BOXED(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with handlers that
             * take a flags type as an argument and return a boolean.  If you have
             * such a signal, you will probably also need to use an accumulator,
             * such as g_signal_accumulator_true_handled().
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_BOOLEAN__FLAGS(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with handlers that
             * take a #GObject and a pointer and produce a string.  It is highly
             * unlikely that your signal handler fits this description.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_STRING__OBJECT_POINTER(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * boolean argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__BOOLEAN(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * argument which is any boxed pointer type.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__BOXED(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * character argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__CHAR(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with one
             * double-precision floating point argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__DOUBLE(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * argument with an enumerated type.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__ENUM(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * argument with a flags types.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__FLAGS(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with one
             * single-precision floating point argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__FLOAT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * integer argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__INT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with with a single
             * long integer argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__LONG(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * #GObject argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__OBJECT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * argument of type #GParamSpec.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__PARAM(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single raw
             * pointer argument type.
             *
             * If it is possible, it is better to use one of the more specific
             * functions such as g_cclosure_marshal_VOID__OBJECT() or
             * g_cclosure_marshal_VOID__OBJECT().
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__POINTER(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single string
             * argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__STRING(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * unsigned character argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__UCHAR(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with with a single
             * unsigned integer argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__UINT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with an unsigned int
             * and a pointer as arguments.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__UINT_POINTER(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * unsigned long integer argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__ULONG(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with a single
             * #GVariant argument.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__VARIANT(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A #GClosureMarshal function for use with signals with no arguments.
             * @param closure A #GClosure.
             * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_VOID__VOID(
                closure: Closure,
                return_value: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
            /**
             * A generic marshaller function implemented via
             * [libffi](http://sourceware.org/libffi/).
             *
             * Normally this function is not passed explicitly to g_signal_new(),
             * but used automatically by GLib when specifying a %NULL marshaller.
             * @param closure A #GClosure.
             * @param return_gvalue A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
             * @param n_param_values The length of the @param_values array.
             * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
             * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
             * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
             */
            static marshal_generic(
                closure: Closure,
                return_gvalue: Value | any,
                n_param_values: number,
                param_values: Value | any,
                invocation_hint?: any | null,
                marshal_data?: any | null,
            ): void;
        }

        class ClosureNotifyData {
            static $gtype: GType<ClosureNotifyData>;

            // Fields

            data: any;
            notify: ClosureNotify;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The class of an enumeration type holds information about its
         * possible values.
         */
        class EnumClass {
            static $gtype: GType<EnumClass>;

            // Fields

            minimum: number;
            maximum: number;
            n_values: number;
            values: EnumValue;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A structure which contains a single enum value, its name, and its
         * nickname.
         */
        class EnumValue {
            static $gtype: GType<EnumValue>;

            // Fields

            value: number;
            value_name: string;
            value_nick: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    value: number;
                    value_name: string;
                    value_nick: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * The class of a flags type holds information about its
         * possible values.
         */
        class FlagsClass {
            static $gtype: GType<FlagsClass>;

            // Fields

            mask: number;
            n_values: number;
            values: FlagsValue;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A structure which contains a single flags value, its name, and its
         * nickname.
         */
        class FlagsValue {
            static $gtype: GType<FlagsValue>;

            // Fields

            value: number;
            value_name: string;
            value_nick: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    value: number;
                    value_name: string;
                    value_nick: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        type InitiallyUnownedClass = typeof InitiallyUnowned;
        /**
         * A structure that provides information to the type system which is
         * used specifically for managing interface types.
         */
        class InterfaceInfo {
            static $gtype: GType<InterfaceInfo>;

            // Fields

            interface_init: InterfaceInitFunc;
            interface_finalize: InterfaceFinalizeFunc;
            interface_data: any;

            // Constructors

            _init(...args: any[]): void;
        }

        type ObjectClass = typeof Object;
        /**
         * The GObjectConstructParam struct is an auxiliary structure used to hand
         * #GParamSpec/#GValue pairs to the `constructor` of a #GObjectClass.
         */
        class ObjectConstructParam {
            static $gtype: GType<ObjectConstructParam>;

            // Fields

            pspec: ParamSpec;

            // Constructors

            _init(...args: any[]): void;
        }

        type ParamSpecClass = typeof ParamSpec;
        /**
         * A #GParamSpecPool maintains a collection of #GParamSpecs which can be
         * quickly accessed by owner and name.
         *
         * The implementation of the #GObject property system uses such a pool to
         * store the #GParamSpecs of the properties all object types.
         */
        abstract class ParamSpecPool {
            static $gtype: GType<ParamSpecPool>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Frees the resources allocated by a #GParamSpecPool.
             */
            free(): void;
            /**
             * Inserts a #GParamSpec in the pool.
             * @param pspec the #GParamSpec to insert
             * @param owner_type a #GType identifying the owner of @pspec
             */
            insert(pspec: ParamSpec, owner_type: GType): void;
            /**
             * Gets an array of all #GParamSpecs owned by `owner_type` in
             * the pool.
             * @param owner_type the owner to look for
             * @returns a newly          allocated array containing pointers to all #GParamSpecs          owned by @owner_type in the pool
             */
            list(owner_type: GType): ParamSpec[];
            /**
             * Gets an #GList of all #GParamSpecs owned by `owner_type` in
             * the pool.
             * @param owner_type the owner to look for
             * @returns a          #GList of all #GParamSpecs owned by @owner_type in          the pool#GParamSpecs.
             */
            list_owned(owner_type: GType): ParamSpec[];
            /**
             * Looks up a #GParamSpec in the pool.
             * @param param_name the name to look for
             * @param owner_type the owner to look for
             * @param walk_ancestors If %TRUE, also try to find a #GParamSpec with @param_name  owned by an ancestor of @owner_type.
             * @returns The found #GParamSpec, or %NULL if no matching #GParamSpec was found.
             */
            lookup(param_name: string, owner_type: GType, walk_ancestors: boolean): ParamSpec | null;
            /**
             * Removes a #GParamSpec from the pool.
             * @param pspec the #GParamSpec to remove
             */
            remove(pspec: ParamSpec): void;
        }

        /**
         * This structure is used to provide the type system with the information
         * required to initialize and destruct (finalize) a parameter's class and
         * instances thereof.
         *
         * The initialized structure is passed to the g_param_type_register_static()
         * The type system will perform a deep copy of this structure, so its memory
         * does not need to be persistent across invocation of
         * g_param_type_register_static().
         */
        class ParamSpecTypeInfo {
            static $gtype: GType<ParamSpecTypeInfo>;

            // Fields

            instance_size: number;
            n_preallocs: number;
            value_type: GType;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The GParameter struct is an auxiliary structure used
         * to hand parameter name/value pairs to g_object_newv().
         */
        class Parameter {
            static $gtype: GType<Parameter>;

            // Fields

            name: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The #GSignalInvocationHint structure is used to pass on additional information
         * to callbacks during a signal emission.
         */
        class SignalInvocationHint {
            static $gtype: GType<SignalInvocationHint>;

            // Fields

            signal_id: number;
            detail: GLib.Quark;
            run_type: SignalFlags;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A structure holding in-depth information for a specific signal.
         *
         * See also: g_signal_query()
         */
        class SignalQuery {
            static $gtype: GType<SignalQuery>;

            // Fields

            signal_id: number;
            signal_name: string;
            itype: GType;
            signal_flags: SignalFlags;
            return_type: GType;
            n_params: number;
            param_types: GType[];

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An opaque structure used as the base of all classes.
         */
        class TypeClass {
            static $gtype: GType<TypeClass>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
            /**
             * This function is essentially the same as g_type_class_ref(),
             * except that the classes reference count isn't incremented.
             * As a consequence, this function may return %NULL if the class
             * of the type passed in does not currently exist (hasn't been
             * referenced before).
             * @param type type ID of a classed type
             */
            static peek(type: GType): TypeClass;
            /**
             * A more efficient version of g_type_class_peek() which works only for
             * static types.
             * @param type type ID of a classed type
             */
            static peek_static(type: GType): TypeClass;
            /**
             * Increments the reference count of the class structure belonging to
             * `type`. This function will demand-create the class if it doesn't
             * exist already.
             * @param type type ID of a classed type
             */
            static ref(type: GType): TypeClass;

            // Methods

            /**
             * Registers a private structure for an instantiatable type.
             *
             * When an object is allocated, the private structures for
             * the type and all of its parent types are allocated
             * sequentially in the same memory block as the public
             * structures, and are zero-filled.
             *
             * Note that the accumulated size of the private structures of
             * a type and all its parent types cannot exceed 64 KiB.
             *
             * This function should be called in the type's class_init() function.
             * The private structure can be retrieved using the
             * G_TYPE_INSTANCE_GET_PRIVATE() macro.
             *
             * The following example shows attaching a private structure
             * MyObjectPrivate to an object MyObject defined in the standard
             * GObject fashion in the type's class_init() function.
             *
             * Note the use of a structure member "priv" to avoid the overhead
             * of repeatedly calling MY_OBJECT_GET_PRIVATE().
             *
             *
             * ```c
             * typedef struct _MyObject        MyObject;
             * typedef struct _MyObjectPrivate MyObjectPrivate;
             *
             * struct _MyObject {
             *  GObject parent;
             *
             *  MyObjectPrivate *priv;
             * };
             *
             * struct _MyObjectPrivate {
             *   int some_field;
             * };
             *
             * static void
             * my_object_class_init (MyObjectClass *klass)
             * {
             *   g_type_class_add_private (klass, sizeof (MyObjectPrivate));
             * }
             *
             * static void
             * my_object_init (MyObject *my_object)
             * {
             *   my_object->priv = G_TYPE_INSTANCE_GET_PRIVATE (my_object,
             *                                                  MY_TYPE_OBJECT,
             *                                                  MyObjectPrivate);
             *   // my_object->priv->some_field will be automatically initialised to 0
             * }
             *
             * static int
             * my_object_get_some_field (MyObject *my_object)
             * {
             *   MyObjectPrivate *priv;
             *
             *   g_return_val_if_fail (MY_IS_OBJECT (my_object), 0);
             *
             *   priv = my_object->priv;
             *
             *   return priv->some_field;
             * }
             * ```
             *
             * @param private_size size of private structure
             */
            add_private(private_size: number): void;
            get_private(private_type: GType): any | null;
            /**
             * This is a convenience function often needed in class initializers.
             * It returns the class structure of the immediate parent type of the
             * class passed in.  Since derived classes hold a reference count on
             * their parent classes as long as they are instantiated, the returned
             * class will always exist.
             *
             * This function is essentially equivalent to:
             * g_type_class_peek (g_type_parent (G_TYPE_FROM_CLASS (g_class)))
             * @returns the parent class     of @g_class
             */
            peek_parent(): TypeClass;
            /**
             * Decrements the reference count of the class structure being passed in.
             * Once the last reference count of a class has been released, classes
             * may be finalized by the type system, so further dereferencing of a
             * class pointer after g_type_class_unref() are invalid.
             */
            unref(): void;
        }

        /**
         * A structure that provides information to the type system which is
         * used specifically for managing fundamental types.
         */
        class TypeFundamentalInfo {
            static $gtype: GType<TypeFundamentalInfo>;

            // Fields

            type_flags: TypeFundamentalFlags;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This structure is used to provide the type system with the information
         * required to initialize and destruct (finalize) a type's class and
         * its instances.
         *
         * The initialized structure is passed to the g_type_register_static() function
         * (or is copied into the provided #GTypeInfo structure in the
         * g_type_plugin_complete_type_info()). The type system will perform a deep
         * copy of this structure, so its memory does not need to be persistent
         * across invocation of g_type_register_static().
         */
        class TypeInfo {
            static $gtype: GType<TypeInfo>;

            // Fields

            class_size: number;
            base_init: BaseInitFunc;
            base_finalize: BaseFinalizeFunc;
            class_init: ClassInitFunc;
            class_finalize: ClassFinalizeFunc;
            class_data: any;
            instance_size: number;
            n_preallocs: number;
            instance_init: InstanceInitFunc;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An opaque structure used as the base of all type instances.
         */
        class TypeInstance {
            static $gtype: GType<TypeInstance>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            get_private(private_type: GType): any | null;
        }

        /**
         * An opaque structure used as the base of all interface types.
         */
        class TypeInterface {
            static $gtype: GType<TypeInterface>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
             * This means that any type implementing `interface_type` must also implement
             * `prerequisite_type`. Prerequisites can be thought of as an alternative to
             * interface derivation (which GType doesn't support). An interface can have
             * at most one instantiatable prerequisite type.
             * @param interface_type #GType value of an interface type
             * @param prerequisite_type #GType value of an interface or instantiatable type
             */
            static add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
            /**
             * Returns the #GTypePlugin structure for the dynamic interface
             * `interface_type` which has been added to `instance_type,` or %NULL
             * if `interface_type` has not been added to `instance_type` or does
             * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
             * @param instance_type #GType of an instantiatable type
             * @param interface_type #GType of an interface type
             */
            static get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
            /**
             * Returns the most specific instantiatable prerequisite of an
             * interface type. If the interface type has no instantiatable
             * prerequisite, %G_TYPE_INVALID is returned.
             *
             * See g_type_interface_add_prerequisite() for more information
             * about prerequisites.
             * @param interface_type an interface type
             */
            static instantiatable_prerequisite(interface_type: GType): GType;
            /**
             * Returns the #GTypeInterface structure of an interface to which the
             * passed in class conforms.
             * @param instance_class a #GTypeClass structure
             * @param iface_type an interface ID which this class conforms to
             */
            static peek(instance_class: TypeClass, iface_type: GType): TypeInterface;
            /**
             * Returns the prerequisites of an interfaces type.
             * @param interface_type an interface type
             */
            static prerequisites(interface_type: GType): GType[];

            // Methods

            /**
             * Returns the corresponding #GTypeInterface structure of the parent type
             * of the instance type to which `g_iface` belongs. This is useful when
             * deriving the implementation of an interface from the parent type and
             * then possibly overriding some methods.
             * @returns the     corresponding #GTypeInterface structure of the parent type of the     instance type to which @g_iface belongs, or %NULL if the parent     type doesn't conform to the interface
             */
            peek_parent(): TypeInterface;
        }

        type TypeModuleClass = typeof TypeModule;
        /**
         * The #GTypePlugin interface is used by the type system in order to handle
         * the lifecycle of dynamically loaded types.
         */
        class TypePluginClass {
            static $gtype: GType<TypePluginClass>;

            // Fields

            use_plugin: TypePluginUse;
            unuse_plugin: TypePluginUnuse;
            complete_type_info: TypePluginCompleteTypeInfo;
            complete_interface_info: TypePluginCompleteInterfaceInfo;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A structure holding information for a specific type.
         *
         * See also: g_type_query()
         */
        class TypeQuery {
            static $gtype: GType<TypeQuery>;

            // Fields

            type: GType;
            type_name: string;
            class_size: number;
            instance_size: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The #GTypeValueTable provides the functions required by the #GValue
         * implementation, to serve as a container for values of a type.
         */
        class TypeValueTable {
            static $gtype: GType<TypeValueTable>;

            // Fields

            value_init: TypeValueInitFunc;
            value_free: TypeValueFreeFunc;
            value_copy: TypeValueCopyFunc;
            value_peek_pointer: TypeValuePeekPointerFunc;
            collect_format: string;
            collect_value: TypeValueCollectFunc;
            lcopy_format: string;
            lcopy_value: TypeValueLCopyFunc;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An opaque structure used to hold different types of values.
         *
         * The data within the structure has protected scope: it is accessible only
         * to functions within a #GTypeValueTable structure, or implementations of
         * the g_value_*() API. That is, code portions which implement new fundamental
         * types.
         *
         * #GValue users cannot make any assumptions about how data is stored
         * within the 2 element `data` union, and the `g_type` member should
         * only be accessed through the G_VALUE_TYPE() macro.
         */
        class Value {
            static $gtype: GType<Value>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns whether a #GValue of type `src_type` can be copied into
             * a #GValue of type `dest_type`.
             * @param src_type source type to be copied.
             * @param dest_type destination type for copying.
             */
            static type_compatible(src_type: GType, dest_type: GType): boolean;
            /**
             * Check whether g_value_transform() is able to transform values
             * of type `src_type` into values of type `dest_type`. Note that for
             * the types to be transformable, they must be compatible or a
             * transformation function must be registered.
             * @param src_type Source type.
             * @param dest_type Target type.
             */
            static type_transformable(src_type: GType, dest_type: GType): boolean;

            // Methods

            /**
             * Copies the value of `src_value` into `dest_value`.
             * @param dest_value An initialized #GValue structure of the same type as @src_value.
             */
            copy(dest_value: Value | any): void;
            /**
             * Get the contents of a %G_TYPE_OBJECT derived #GValue, increasing
             * its reference count. If the contents of the #GValue are %NULL, then
             * %NULL will be returned.
             * @returns object content of @value,          should be unreferenced when no longer needed.
             */
            dup_object<T = Object>(): T;
            /**
             * Get a copy the contents of a %G_TYPE_STRING #GValue.
             * @returns a newly allocated copy of the string content of @value
             */
            dup_string(): string | null;
            /**
             * Get the contents of a variant #GValue, increasing its refcount. The returned
             * #GVariant is never floating.
             * @returns variant contents of @value (may be %NULL);    should be unreffed using g_variant_unref() when no longer needed
             */
            dup_variant(): GLib.Variant | null;
            /**
             * Determines if `value` will fit inside the size of a pointer value.
             * This is an internal function introduced mainly for C marshallers.
             * @returns %TRUE if @value will fit inside a pointer value.
             */
            fits_pointer(): boolean;
            /**
             * Get the contents of a %G_TYPE_BOOLEAN #GValue.
             * @returns boolean contents of @value
             */
            get_boolean(): boolean;
            /**
             * Get the contents of a %G_TYPE_BOXED derived #GValue.
             * @returns boxed contents of @value
             */
            get_boxed(): any | null;
            /**
             * Do not use this function; it is broken on platforms where the %char
             * type is unsigned, such as ARM and PowerPC.  See g_value_get_schar().
             *
             * Get the contents of a %G_TYPE_CHAR #GValue.
             * @returns character contents of @value
             */
            get_char(): number;
            /**
             * Get the contents of a %G_TYPE_DOUBLE #GValue.
             * @returns double contents of @value
             */
            get_double(): number;
            /**
             * Get the contents of a %G_TYPE_ENUM #GValue.
             * @returns enum contents of @value
             */
            get_enum(): number;
            /**
             * Get the contents of a %G_TYPE_FLAGS #GValue.
             * @returns flags contents of @value
             */
            get_flags(): number;
            /**
             * Get the contents of a %G_TYPE_FLOAT #GValue.
             * @returns float contents of @value
             */
            get_float(): number;
            /**
             * Get the contents of a %G_TYPE_GTYPE #GValue.
             * @returns the #GType stored in @value
             */
            get_gtype(): GType;
            /**
             * Get the contents of a %G_TYPE_INT #GValue.
             * @returns integer contents of @value
             */
            get_int(): number;
            /**
             * Get the contents of a %G_TYPE_INT64 #GValue.
             * @returns 64bit integer contents of @value
             */
            get_int64(): number;
            /**
             * Get the contents of a %G_TYPE_LONG #GValue.
             * @returns long integer contents of @value
             */
            get_long(): number;
            /**
             * Get the contents of a %G_TYPE_OBJECT derived #GValue.
             * @returns object contents of @value
             */
            get_object<T = Object>(): T;
            /**
             * Get the contents of a %G_TYPE_PARAM #GValue.
             * @returns #GParamSpec content of @value
             */
            get_param(): ParamSpec;
            /**
             * Get the contents of a pointer #GValue.
             * @returns pointer contents of @value
             */
            get_pointer(): any | null;
            /**
             * Get the contents of a %G_TYPE_CHAR #GValue.
             * @returns signed 8 bit integer contents of @value
             */
            get_schar(): number;
            /**
             * Get the contents of a %G_TYPE_STRING #GValue.
             * @returns string content of @value
             */
            get_string(): string | null;
            /**
             * Get the contents of a %G_TYPE_UCHAR #GValue.
             * @returns unsigned character contents of @value
             */
            get_uchar(): number;
            /**
             * Get the contents of a %G_TYPE_UINT #GValue.
             * @returns unsigned integer contents of @value
             */
            get_uint(): number;
            /**
             * Get the contents of a %G_TYPE_UINT64 #GValue.
             * @returns unsigned 64bit integer contents of @value
             */
            get_uint64(): number;
            /**
             * Get the contents of a %G_TYPE_ULONG #GValue.
             * @returns unsigned long integer contents of @value
             */
            get_ulong(): number;
            /**
             * Get the contents of a variant #GValue.
             * @returns variant contents of @value (may be %NULL)
             */
            get_variant(): GLib.Variant | null;
            /**
             * Initializes `value` with the default value of `type`.
             * @param g_type Type the #GValue should hold values of.
             * @returns the #GValue structure that has been passed in
             */
            init(g_type: GType): unknown;
            /**
             * Initializes and sets `value` from an instantiatable type via the
             * value_table's collect_value() function.
             *
             * Note: The `value` will be initialised with the exact type of
             * `instance`.  If you wish to set the `value'`s type to a different GType
             * (such as a parent class GType), you need to manually call
             * g_value_init() and g_value_set_instance().
             * @param instance the instance
             */
            init_from_instance(instance: TypeInstance): void;
            /**
             * Returns the value contents as pointer. This function asserts that
             * g_value_fits_pointer() returned %TRUE for the passed in value.
             * This is an internal function introduced mainly for C marshallers.
             * @returns the value contents as pointer
             */
            peek_pointer(): any | null;
            /**
             * Clears the current value in `value` and resets it to the default value
             * (as if the value had just been initialized).
             * @returns the #GValue structure that has been passed in
             */
            reset(): unknown;
            /**
             * Set the contents of a %G_TYPE_BOOLEAN #GValue to `v_boolean`.
             * @param v_boolean boolean value to be set
             */
            set_boolean(v_boolean: boolean): void;
            /**
             * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
             * @param v_boxed boxed value to be set
             */
            set_boxed(v_boxed?: any | null): void;
            /**
             * This is an internal function introduced mainly for C marshallers.
             * @param v_boxed duplicated unowned boxed value to be set
             */
            set_boxed_take_ownership(v_boxed?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
             * @param v_char character value to be set
             */
            set_char(v_char: number): void;
            /**
             * Set the contents of a %G_TYPE_DOUBLE #GValue to `v_double`.
             * @param v_double double value to be set
             */
            set_double(v_double: number): void;
            /**
             * Set the contents of a %G_TYPE_ENUM #GValue to `v_enum`.
             * @param v_enum enum value to be set
             */
            set_enum(v_enum: number): void;
            /**
             * Set the contents of a %G_TYPE_FLAGS #GValue to `v_flags`.
             * @param v_flags flags value to be set
             */
            set_flags(v_flags: number): void;
            /**
             * Set the contents of a %G_TYPE_FLOAT #GValue to `v_float`.
             * @param v_float float value to be set
             */
            set_float(v_float: number): void;
            /**
             * Set the contents of a %G_TYPE_GTYPE #GValue to `v_gtype`.
             * @param v_gtype #GType to be set
             */
            set_gtype(v_gtype: GType): void;
            /**
             * Sets `value` from an instantiatable type via the
             * value_table's collect_value() function.
             * @param instance the instance
             */
            set_instance(instance?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_INT #GValue to `v_int`.
             * @param v_int integer value to be set
             */
            set_int(v_int: number): void;
            /**
             * Set the contents of a %G_TYPE_INT64 #GValue to `v_int6`4.
             * @param v_int64 64bit integer value to be set
             */
            set_int64(v_int64: number): void;
            /**
             * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.  The string is
             * assumed to be static and interned (canonical, for example from
             * g_intern_string()), and is thus not duplicated when setting the #GValue.
             * @param v_string static string to be set
             */
            set_interned_string(v_string?: string | null): void;
            /**
             * Set the contents of a %G_TYPE_LONG #GValue to `v_long`.
             * @param v_long long integer value to be set
             */
            set_long(v_long: number): void;
            /**
             * Set the contents of a %G_TYPE_OBJECT derived #GValue to `v_object`.
             *
             * g_value_set_object() increases the reference count of `v_object`
             * (the #GValue holds a reference to `v_object)`.  If you do not wish
             * to increase the reference count of the object (i.e. you wish to
             * pass your current reference to the #GValue because you no longer
             * need it), use g_value_take_object() instead.
             *
             * It is important that your #GValue holds a reference to `v_object` (either its
             * own, or one it has taken) to ensure that the object won't be destroyed while
             * the #GValue still exists).
             * @param v_object object value to be set
             */
            set_object(v_object?: Object | null): void;
            /**
             * Set the contents of a %G_TYPE_PARAM #GValue to `param`.
             * @param param the #GParamSpec to be set
             */
            set_param(param?: ParamSpec | null): void;
            /**
             * Set the contents of a pointer #GValue to `v_pointer`.
             * @param v_pointer pointer value to be set
             */
            set_pointer(v_pointer?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
             * @param v_char signed 8 bit integer to be set
             */
            set_schar(v_char: number): void;
            /**
             * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
             *
             * The boxed value is assumed to be static, and is thus not duplicated
             * when setting the #GValue.
             * @param v_boxed static boxed value to be set
             */
            set_static_boxed(v_boxed?: any | null): void;
            /**
             * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.
             * The string is assumed to be static, and is thus not duplicated
             * when setting the #GValue.
             *
             * If the the string is a canonical string, using g_value_set_interned_string()
             * is more appropriate.
             * @param v_string static string to be set
             */
            set_static_string(v_string?: string | null): void;
            /**
             * Set the contents of a %G_TYPE_STRING #GValue to a copy of `v_string`.
             * @param v_string caller-owned string to be duplicated for the #GValue
             */
            set_string(v_string?: string | null): void;
            /**
             * This is an internal function introduced mainly for C marshallers.
             * @param v_string duplicated unowned string to be set
             */
            set_string_take_ownership(v_string?: string | null): void;
            /**
             * Set the contents of a %G_TYPE_UCHAR #GValue to `v_uchar`.
             * @param v_uchar unsigned character value to be set
             */
            set_uchar(v_uchar: number): void;
            /**
             * Set the contents of a %G_TYPE_UINT #GValue to `v_uint`.
             * @param v_uint unsigned integer value to be set
             */
            set_uint(v_uint: number): void;
            /**
             * Set the contents of a %G_TYPE_UINT64 #GValue to `v_uint6`4.
             * @param v_uint64 unsigned 64bit integer value to be set
             */
            set_uint64(v_uint64: number): void;
            /**
             * Set the contents of a %G_TYPE_ULONG #GValue to `v_ulong`.
             * @param v_ulong unsigned long integer value to be set
             */
            set_ulong(v_ulong: number): void;
            /**
             * Set the contents of a variant #GValue to `variant`.
             * If the variant is floating, it is consumed.
             * @param variant a #GVariant, or %NULL
             */
            set_variant(variant?: GLib.Variant | null): void;
            /**
             * Steal ownership on contents of a %G_TYPE_STRING #GValue.
             * As a result of this operation the value's contents will be reset to %NULL.
             *
             * The purpose of this call is to provide a way to avoid an extra copy
             * when some object have been serialized into string through #GValue API.
             *
             * NOTE: for safety and compatibility purposes, if #GValue contains
             * static string, or an interned one, this function will return a copy
             * of the string. Otherwise the transfer notation would be ambiguous.
             * @returns string content of @value;  Should be freed with g_free() when no longer needed.
             */
            steal_string(): string | null;
            /**
             * Sets the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`
             * and takes over the ownership of the caller’s reference to `v_boxed;`
             * the caller doesn’t have to unref it any more.
             * @param v_boxed duplicated unowned boxed value to be set
             */
            take_boxed(v_boxed?: any | null): void;
            /**
             * Sets the contents of a %G_TYPE_STRING #GValue to `v_string`.
             * @param v_string string to take ownership of
             */
            take_string(v_string?: string | null): void;
            /**
             * Set the contents of a variant #GValue to `variant,` and takes over
             * the ownership of the caller's reference to `variant;`
             * the caller doesn't have to unref it any more (i.e. the reference
             * count of the variant is not increased).
             *
             * If `variant` was floating then its floating reference is converted to
             * a hard reference.
             *
             * If you want the #GValue to hold its own reference to `variant,` use
             * g_value_set_variant() instead.
             *
             * This is an internal function introduced mainly for C marshallers.
             * @param variant a #GVariant, or %NULL
             */
            take_variant(variant?: GLib.Variant | null): void;
            /**
             * Tries to cast the contents of `src_value` into a type appropriate
             * to store in `dest_value,` e.g. to transform a %G_TYPE_INT value
             * into a %G_TYPE_FLOAT value. Performing transformations between
             * value types might incur precision lossage. Especially
             * transformations into strings might reveal seemingly arbitrary
             * results and shouldn't be relied upon for production code (such
             * as rcfile value or object property serialization).
             * @param dest_value Target value.
             * @returns Whether a transformation rule was found and could be applied.  Upon failing transformations, @dest_value is left untouched.
             */
            transform(dest_value: Value | any): boolean;
            /**
             * Clears the current value in `value` (if any) and "unsets" the type,
             * this releases all resources associated with this GValue. An unset
             * value is the same as an uninitialized (zero-filled) #GValue
             * structure.
             */
            unset(): void;
        }

        /**
         * A `GValueArray` is a container structure to hold an array of generic values.
         *
         * The prime purpose of a `GValueArray` is for it to be used as an
         * object property that holds an array of values. A `GValueArray` wraps
         * an array of `GValue` elements in order for it to be used as a boxed
         * type through `G_TYPE_VALUE_ARRAY`.
         *
         * `GValueArray` is deprecated in favour of `GArray` since GLib 2.32.
         * It is possible to create a `GArray` that behaves like a `GValueArray`
         * by using the size of `GValue` as the element size, and by setting
         * [method`GObject`.Value.unset] as the clear function using
         * [func`GLib`.Array.set_clear_func], for instance, the following code:
         *
         * ```c
         *   GValueArray *array = g_value_array_new (10);
         * ```
         *
         * can be replaced by:
         *
         * ```c
         *   GArray *array = g_array_sized_new (FALSE, TRUE, sizeof (GValue), 10);
         *   g_array_set_clear_func (array, (GDestroyNotify) g_value_unset);
         * ```
         */
        class ValueArray {
            static $gtype: GType<ValueArray>;

            // Fields

            n_values: number;

            // Constructors

            constructor(n_prealloced: number);
            _init(...args: any[]): void;

            static ['new'](n_prealloced: number): ValueArray;

            // Methods

            /**
             * Insert a copy of `value` as last element of `value_array`. If `value` is
             * %NULL, an uninitialized value is appended.
             * @param value #GValue to copy into #GValueArray, or %NULL
             * @returns the #GValueArray passed in as @value_array
             */
            append(value?: Value | null): ValueArray;
            /**
             * Construct an exact copy of a #GValueArray by duplicating all its
             * contents.
             * @returns Newly allocated copy of #GValueArray
             */
            copy(): ValueArray;
            /**
             * Return a pointer to the value at `index_` contained in `value_array`.
             * @param index_ index of the value of interest
             * @returns pointer to a value at @index_ in @value_array
             */
            get_nth(index_: number): unknown;
            /**
             * Insert a copy of `value` at specified position into `value_array`. If `value`
             * is %NULL, an uninitialized value is inserted.
             * @param index_ insertion position, must be <= value_array->;n_values
             * @param value #GValue to copy into #GValueArray, or %NULL
             * @returns the #GValueArray passed in as @value_array
             */
            insert(index_: number, value?: Value | null): ValueArray;
            /**
             * Insert a copy of `value` as first element of `value_array`. If `value` is
             * %NULL, an uninitialized value is prepended.
             * @param value #GValue to copy into #GValueArray, or %NULL
             * @returns the #GValueArray passed in as @value_array
             */
            prepend(value?: Value | null): ValueArray;
            /**
             * Remove the value at position `index_` from `value_array`.
             * @param index_ position of value to remove, which must be less than     @value_array->n_values
             * @returns the #GValueArray passed in as @value_array
             */
            remove(index_: number): ValueArray;
            /**
             * Sort `value_array` using `compare_func` to compare the elements according to
             * the semantics of #GCompareFunc.
             *
             * The current implementation uses the same sorting algorithm as standard
             * C qsort() function.
             * @param compare_func function to compare elements
             * @returns the #GValueArray passed in as @value_array
             */
            sort(compare_func: GLib.CompareFunc): ValueArray;
            /**
             * Sort `value_array` using `compare_func` to compare the elements according
             * to the semantics of #GCompareDataFunc.
             *
             * The current implementation uses the same sorting algorithm as standard
             * C qsort() function.
             * @param compare_func function to compare elements
             * @returns the #GValueArray passed in as @value_array
             */
            sort(compare_func: GLib.CompareDataFunc): ValueArray;
        }

        /**
         * A structure containing a weak reference to a #GObject.
         *
         * A `GWeakRef` can either be empty (i.e. point to %NULL), or point to an
         * object for as long as at least one "strong" reference to that object
         * exists. Before the object's #GObjectClass.dispose method is called,
         * every #GWeakRef associated with becomes empty (i.e. points to %NULL).
         *
         * Like #GValue, #GWeakRef can be statically allocated, stack- or
         * heap-allocated, or embedded in larger structures.
         *
         * Unlike g_object_weak_ref() and g_object_add_weak_pointer(), this weak
         * reference is thread-safe: converting a weak pointer to a reference is
         * atomic with respect to invalidation of weak pointers to destroyed
         * objects.
         *
         * If the object's #GObjectClass.dispose method results in additional
         * references to the object being held (‘re-referencing’), any #GWeakRefs taken
         * before it was disposed will continue to point to %NULL.  Any #GWeakRefs taken
         * during disposal and after re-referencing, or after disposal has returned due
         * to the re-referencing, will continue to point to the object until its refcount
         * goes back to zero, at which point they too will be invalidated.
         *
         * It is invalid to take a #GWeakRef on an object during #GObjectClass.dispose
         * without first having or creating a strong reference to the object.
         */
        class WeakRef {
            static $gtype: GType<WeakRef>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A union holding one collected value.
         */
        class TypeCValue {
            static $gtype: GType<TypeCValue>;

            // Fields

            v_int: number;
            v_long: number;
            v_int64: number;
            v_double: number;
            v_pointer: any;

            // Constructors

            constructor(
                properties?: Partial<{
                    v_int: number;
                    v_long: number;
                    v_int64: number;
                    v_double: number;
                    v_pointer: any;
                }>,
            );
            _init(...args: any[]): void;
        }

        class _Value__data__union {
            static $gtype: GType<_Value__data__union>;

            // Fields

            v_int: number;
            v_uint: number;
            v_long: number;
            v_ulong: number;
            v_int64: number;
            v_uint64: number;
            v_float: number;
            v_double: number;
            v_pointer: any;

            // Constructors

            constructor(
                properties?: Partial<{
                    v_int: number;
                    v_uint: number;
                    v_long: number;
                    v_ulong: number;
                    v_int64: number;
                    v_uint64: number;
                    v_float: number;
                    v_double: number;
                    v_pointer: any;
                }>,
            );
            _init(...args: any[]): void;
        }

        module TypePlugin {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        export interface TypePluginNamespace {
            $gtype: GType<TypePlugin>;
            prototype: TypePlugin;
        }
        interface TypePlugin extends Object {
            // Methods

            /**
             * Calls the `complete_interface_info` function from the
             * #GTypePluginClass of `plugin`. There should be no need to use this
             * function outside of the GObject type system itself.
             * @param instance_type the #GType of an instantiatable type to which the interface  is added
             * @param interface_type the #GType of the interface whose info is completed
             * @param info the #GInterfaceInfo to fill in
             */
            complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
            /**
             * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
             * There should be no need to use this function outside of the GObject
             * type system itself.
             * @param g_type the #GType whose info is completed
             * @param info the #GTypeInfo struct to fill in
             * @param value_table the #GTypeValueTable to fill in
             */
            complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
            /**
             * Calls the `unuse_plugin` function from the #GTypePluginClass of
             * `plugin`.  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            unuse(): void;
            /**
             * Calls the `use_plugin` function from the #GTypePluginClass of
             * `plugin`.  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            use(): void;
        }

        export const TypePlugin: TypePluginNamespace;

        type SignalCMarshaller = ClosureMarshal;
        type SignalCVaMarshaller = unknown;
        type Type = number;
        interface SignalMatch {
            // Fields

            signalId: string;
            detail: string;
            func: (...args: any[]) => any;
        }

        type Closure<R = any, P = any> = (...args: P[]) => R;
        function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): void;
        function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): void;
        function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): void;
        function signal_handler_find(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        function signal_handler_find(instance: Object, match: SignalMatch): number;
        function signal_handler_find(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
        function _real_signal_handler_find(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
        function signal_handler_block_matched(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        function signal_handler_block_matched(instance: Object, match: SignalMatch): number;
        function signal_handler_block_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
        function _real_signal_handler_block_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
        function signal_handler_block_disconnect_matched(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        function signal_handler_block_disconnect_matched(instance: Object, match: SignalMatch): number;
        function signal_handler_block_disconnect_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
        function _real_signal_handler_block_disconnect_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
        function signal_handler_block_unblock_matched(
            ...args:
                | [Object, SignalMatch]
                | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
        ): number;
        function signal_handler_block_unblock_matched(instance: Object, match: SignalMatch): number;
        function signal_handler_block_unblock_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
        function _real_signal_handler_block_unblock_matched(
            instance: Object,
            match: SignalMatchType,
            signal_id: number,
            detail: GLib.Quark,
            closure: Closure | null,
            func: object | null,
            object: object | null,
        ): number;
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

    export default GObject;
}

declare module 'gi://GObject' {
    import GObject20 from 'gi://GObject?version=2.0';
    export default GObject20;
}
// END
