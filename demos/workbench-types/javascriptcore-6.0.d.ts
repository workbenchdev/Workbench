/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://JavaScriptCore?version=6.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace JavaScriptCore {
        /**
         * JavaScriptCore-6.0
         */

        /**
         * Enum values to specify a mode to check for syntax errors in jsc_context_check_syntax().
         */

        /**
         * Enum values to specify a mode to check for syntax errors in jsc_context_check_syntax().
         */
        export namespace CheckSyntaxMode {
            export const $gtype: GObject.GType<CheckSyntaxMode>;
        }

        enum CheckSyntaxMode {
            /**
             * mode to check syntax of a script
             */
            SCRIPT,
            /**
             * mode to check syntax of a module
             */
            MODULE,
        }
        /**
         * Enum values to specify the result of jsc_context_check_syntax().
         */

        /**
         * Enum values to specify the result of jsc_context_check_syntax().
         */
        export namespace CheckSyntaxResult {
            export const $gtype: GObject.GType<CheckSyntaxResult>;
        }

        enum CheckSyntaxResult {
            /**
             * no errors
             */
            SUCCESS,
            /**
             * recoverable syntax error
             */
            RECOVERABLE_ERROR,
            /**
             * irrecoverable syntax error
             */
            IRRECOVERABLE_ERROR,
            /**
             * unterminated literal error
             */
            UNTERMINATED_LITERAL_ERROR,
            /**
             * out of memory error
             */
            OUT_OF_MEMORY_ERROR,
            /**
             * stack overflow error
             */
            STACK_OVERFLOW_ERROR,
        }
        /**
         * Enum values for options types.
         */

        /**
         * Enum values for options types.
         */
        export namespace OptionType {
            export const $gtype: GObject.GType<OptionType>;
        }

        enum OptionType {
            /**
             * A #gboolean option type.
             */
            BOOLEAN,
            /**
             * A #gint option type.
             */
            INT,
            /**
             * A #guint option type.
             */
            UINT,
            /**
             * A #gsize options type.
             */
            SIZE,
            /**
             * A #gdouble options type.
             */
            DOUBLE,
            /**
             * A string option type.
             */
            STRING,
            /**
             * A range string option type.
             */
            RANGE_STRING,
        }
        /**
         * Possible types of the elements contained in a typed array.
         */

        /**
         * Possible types of the elements contained in a typed array.
         */
        export namespace TypedArrayType {
            export const $gtype: GObject.GType<TypedArrayType>;
        }

        enum TypedArrayType {
            /**
             * Not a typed array, or type unsupported.
             */
            NONE,
            /**
             * Array elements are 8-bit signed integers (int8_t).
             */
            INT8,
            /**
             * Array elements are 16-bit signed integers (int16_t).
             */
            INT16,
            /**
             * Array elements are 32-bit signed integers (int32_t).
             */
            INT32,
            /**
             * Array elements are 64-bit signed integers (int64_t).
             */
            INT64,
            /**
             * Array elements are 8-bit unsigned integers (uint8_t).
             */
            UINT8,
            /**
             * Array elements are 8-bit unsigned integers (uint8_t).
             */
            UINT8_CLAMPED,
            /**
             * Array elements are 16-bit unsigned integers (uint16_t).
             */
            UINT16,
            /**
             * Array elements are 32-bit unsigned integers (uint32_t).
             */
            UINT32,
            /**
             * Array elements are 64-bit unsigned integers (uint64_t).
             */
            UINT64,
            /**
             * Array elements are 32-bit floating point numbers (float).
             */
            FLOAT32,
            /**
             * Array elements are 64-bit floating point numbers (double).
             */
            FLOAT64,
        }
        /**
         * Like jsc_get_major_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MAJOR_VERSION: number;
        /**
         * Like jsc_get_micro_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MICRO_VERSION: number;
        /**
         * Like jsc_get_minor_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MINOR_VERSION: number;
        /**
         * Allows the DFG JIT to be used if %TRUE.
         * Option type: %JSC_OPTION_BOOLEAN
         * Default value: %TRUE.
         */
        const OPTIONS_USE_DFG: string;
        /**
         * Allows the FTL JIT to be used if %TRUE.
         * Option type: %JSC_OPTION_BOOLEAN
         * Default value: %TRUE.
         */
        const OPTIONS_USE_FTL: string;
        /**
         * Allows the executable pages to be allocated for JIT and thunks if %TRUE.
         * Option type: %JSC_OPTION_BOOLEAN
         * Default value: %TRUE.
         */
        const OPTIONS_USE_JIT: string;
        /**
         * Allows the LLINT to be used if %TRUE.
         * Option type: %JSC_OPTION_BOOLEAN
         * Default value: %TRUE.
         */
        const OPTIONS_USE_LLINT: string;
        /**
         * Returns the major version number of the JavaScriptCore library.
         * (e.g. in JavaScriptCore version 1.8.3 this is 1.)
         *
         * This function is in the library, so it represents the JavaScriptCore library
         * your code is running against. Contrast with the #JSC_MAJOR_VERSION
         * macro, which represents the major version of the JavaScriptCore headers you
         * have included when compiling your code.
         * @returns the major version number of the JavaScriptCore library
         */
        function get_major_version(): number;
        /**
         * Returns the micro version number of the JavaScriptCore library.
         * (e.g. in JavaScriptCore version 1.8.3 this is 3.)
         *
         * This function is in the library, so it represents the JavaScriptCore library
         * your code is running against. Contrast with the #JSC_MICRO_VERSION
         * macro, which represents the micro version of the JavaScriptCore headers you
         * have included when compiling your code.
         * @returns the micro version number of the JavaScriptCore library
         */
        function get_micro_version(): number;
        /**
         * Returns the minor version number of the JavaScriptCore library.
         * (e.g. in JavaScriptCore version 1.8.3 this is 8.)
         *
         * This function is in the library, so it represents the JavaScriptCore library
         * your code is running against. Contrast with the #JSC_MINOR_VERSION
         * macro, which represents the minor version of the JavaScriptCore headers you
         * have included when compiling your code.
         * @returns the minor version number of the JavaScriptCore library
         */
        function get_minor_version(): number;
        /**
         * Iterates all available options calling `function` for each one. Iteration can
         * stop early if `function` returns %FALSE.
         * @param _function a #JSCOptionsFunc callback
         */
        function options_foreach(_function: OptionsFunc): void;
        /**
         * Get `option` as a #gboolean value.
         * @param option the option identifier
         * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
         */
        function options_get_boolean(option: string): [boolean, boolean];
        /**
         * Get `option` as a #gdouble value.
         * @param option the option identifier
         * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
         */
        function options_get_double(option: string): [boolean, number];
        /**
         * Get `option` as a #gint value.
         * @param option the option identifier
         * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
         */
        function options_get_int(option: string): [boolean, number];
        /**
         * Create a #GOptionGroup to handle JSCOptions as command line arguments.
         * The options will be exposed as command line arguments with the form
         * <emphasis>--jsc-&lt;option&gt;=&lt;value&gt;</emphasis>.
         * Each entry in the returned #GOptionGroup is configured to apply the
         * corresponding option during command line parsing. Applications only need to
         * pass the returned group to g_option_context_add_group(), and the rest will
         * be taken care for automatically.
         * @returns a #GOptionGroup for the JSCOptions
         */
        function options_get_option_group(): GLib.OptionGroup;
        /**
         * Get `option` as a range string. The string must be in the
         * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
         * Values between low and high (both included) will be considered in
         * the range, unless <emphasis>!</emphasis> is used to invert the range.
         * @param option the option identifier
         * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
         */
        function options_get_range_string(option: string): [boolean, string];
        /**
         * Get `option` as a #gsize value.
         * @param option the option identifier
         * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
         */
        function options_get_size(option: string): [boolean, number];
        /**
         * Get `option` as a string.
         * @param option the option identifier
         * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
         */
        function options_get_string(option: string): [boolean, string];
        /**
         * Get `option` as a #guint value.
         * @param option the option identifier
         * @returns %TRUE if @value has been set or %FALSE if the option doesn't exist
         */
        function options_get_uint(option: string): [boolean, number];
        /**
         * Set `option` as a #gboolean value.
         * @param option the option identifier
         * @param value the value to set
         * @returns %TRUE if option was correctly set or %FALSE otherwise.
         */
        function options_set_boolean(option: string, value: boolean): boolean;
        /**
         * Set `option` as a #gdouble value.
         * @param option the option identifier
         * @param value the value to set
         * @returns %TRUE if option was correctly set or %FALSE otherwise.
         */
        function options_set_double(option: string, value: number): boolean;
        /**
         * Set `option` as a #gint value.
         * @param option the option identifier
         * @param value the value to set
         * @returns %TRUE if option was correctly set or %FALSE otherwise.
         */
        function options_set_int(option: string, value: number): boolean;
        /**
         * Set `option` as a range string. The string must be in the
         * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
         * Values between low and high (both included) will be considered in
         * the range, unless <emphasis>!</emphasis> is used to invert the range.
         * @param option the option identifier
         * @param value the value to set
         * @returns %TRUE if option was correctly set or %FALSE otherwise.
         */
        function options_set_range_string(option: string, value: string): boolean;
        /**
         * Set `option` as a #gsize value.
         * @param option the option identifier
         * @param value the value to set
         * @returns %TRUE if option was correctly set or %FALSE otherwise.
         */
        function options_set_size(option: string, value: number): boolean;
        /**
         * Set `option` as a string.
         * @param option the option identifier
         * @param value the value to set
         * @returns %TRUE if option was correctly set or %FALSE otherwise.
         */
        function options_set_string(option: string, value: string): boolean;
        /**
         * Set `option` as a #guint value.
         * @param option the option identifier
         * @param value the value to set
         * @returns %TRUE if option was correctly set or %FALSE otherwise.
         */
        function options_set_uint(option: string, value: number): boolean;
        interface ClassDeletePropertyFunction {
            (jsc_class: Class, context: Context, instance: any | null, name: string): boolean;
        }
        interface ClassEnumeratePropertiesFunction {
            (jsc_class: Class, context: Context, instance?: any | null): string[] | null;
        }
        interface ClassGetPropertyFunction {
            (jsc_class: Class, context: Context, instance: any | null, name: string): Value | null;
        }
        interface ClassHasPropertyFunction {
            (jsc_class: Class, context: Context, instance: any | null, name: string): boolean;
        }
        interface ClassSetPropertyFunction {
            (jsc_class: Class, context: Context, instance: any | null, name: string, value: Value): boolean;
        }
        interface ExceptionHandler {
            (context: Context, exception: Exception): void;
        }
        interface OptionsFunc {
            (option: string, type: OptionType, description?: string | null): boolean;
        }
        /**
         * Flags used when defining properties with jsc_value_object_define_property_data() and
         * jsc_value_object_define_property_accessor().
         */

        /**
         * Flags used when defining properties with jsc_value_object_define_property_data() and
         * jsc_value_object_define_property_accessor().
         */
        export namespace ValuePropertyFlags {
            export const $gtype: GObject.GType<ValuePropertyFlags>;
        }

        enum ValuePropertyFlags {
            /**
             * the type of the property descriptor may be changed and the
             *  property may be deleted from the corresponding object.
             */
            CONFIGURABLE,
            /**
             * the property shows up during enumeration of the properties on
             *  the corresponding object.
             */
            ENUMERABLE,
            /**
             * the value associated with the property may be changed with an
             *  assignment operator. This doesn't have any effect when passed to jsc_value_object_define_property_accessor().
             */
            WRITABLE,
        }
        module Class {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                context: Context;
                name: string;
                parent: Class;
            }
        }

        /**
         * A JSSClass represents a custom JavaScript class registered by the user in a #JSCContext.
         * It allows to create new JavaScripts objects whose instances are created by the user using
         * this API.
         * It's possible to add constructors, properties and methods for a JSSClass by providing
         * #GCallback<!-- -->s to implement them.
         */
        class Class extends GObject.Object {
            static $gtype: GObject.GType<Class>;

            // Properties

            /**
             * The #JSCContext in which the class was registered.
             */
            set context(val: Context);
            /**
             * The name of the class.
             */
            get name(): string;
            /**
             * The parent class or %NULL in case of final classes.
             */
            get parent(): Class;

            // Constructors

            constructor(properties?: Partial<Class.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Add a constructor to `jsc_class`. If `name` is %NULL, the class name will be used. When <function>new</function>
             * is used with the constructor or jsc_value_constructor_call() is called, `callback` is invoked receiving
             * a #GPtrArray of #JSCValue<!-- -->s as arguments and `user_data` as the last parameter. When the constructor object
             * is cleared in the #JSCClass context, `destroy_notify` is called with `user_data` as parameter.
             *
             * This function creates the constructor, which needs to be added to an object as a property to be able to use it. Use
             * jsc_context_set_value() to make the constructor available in the global object.
             *
             * Note that the value returned by `callback` is adopted by `jsc_class,` and the #GDestroyNotify passed to
             * jsc_context_register_class() is responsible for disposing of it.
             * @param name the constructor name or %NULL
             * @param callback a #GCallback to be called to create an instance of @jsc_class
             * @param destroy_notify destroy notifier for @user_data
             * @param return_type the #GType of the constructor return value
             * @returns a #JSCValue representing the class constructor.
             */
            add_constructor_variadic(
                name: string | null,
                callback: GObject.Callback,
                destroy_notify: GLib.DestroyNotify | null,
                return_type: GObject.GType,
            ): Value;
            /**
             * Add a constructor to `jsc_class`. If `name` is %NULL, the class name will be used. When <function>new</function>
             * is used with the constructor or jsc_value_constructor_call() is called, `callback` is invoked receiving the
             * parameters and `user_data` as the last parameter. When the constructor object is cleared in the #JSCClass context,
             * `destroy_notify` is called with `user_data` as parameter.
             *
             * This function creates the constructor, which needs to be added to an object as a property to be able to use it. Use
             * jsc_context_set_value() to make the constructor available in the global object.
             *
             * Note that the value returned by `callback` is adopted by `jsc_class,` and the #GDestroyNotify passed to
             * jsc_context_register_class() is responsible for disposing of it.
             * @param name the constructor name or %NULL
             * @param callback a #GCallback to be called to create an instance of @jsc_class
             * @param destroy_notify destroy notifier for @user_data
             * @param return_type the #GType of the constructor return value
             * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
             * @returns a #JSCValue representing the class constructor.
             */
            add_constructor(
                name: string | null,
                callback: GObject.Callback,
                destroy_notify: GLib.DestroyNotify | null,
                return_type: GObject.GType,
                parameter_types?: GObject.GType[] | null,
            ): Value;
            /**
             * Add method with `name` to `jsc_class`. When the method is called by JavaScript or jsc_value_object_invoke_method(),
             * `callback` is called receiving the class instance as first parameter, followed by a #GPtrArray of #JSCValue<!-- -->s
             * with the method arguments and then `user_data` as last parameter. When the method is cleared in the #JSCClass context,
             * `destroy_notify` is called with `user_data` as parameter.
             *
             * Note that the value returned by `callback` must be transfer full. In case of non-refcounted boxed types, you should use
             * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
             * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
             * with jsc_value_new_object() that receives the copy as the instance parameter.
             * @param name the method name
             * @param callback a #GCallback to be called to invoke method @name of @jsc_class
             * @param destroy_notify destroy notifier for @user_data
             * @param return_type the #GType of the method return value, or %G_TYPE_NONE if the method is void.
             */
            add_method_variadic(
                name: string,
                callback: GObject.Callback,
                destroy_notify: GLib.DestroyNotify | null,
                return_type: GObject.GType,
            ): void;
            /**
             * Add method with `name` to `jsc_class`. When the method is called by JavaScript or jsc_value_object_invoke_method(),
             * `callback` is called receiving the class instance as first parameter, followed by the method parameters and then
             * `user_data` as last parameter. When the method is cleared in the #JSCClass context, `destroy_notify` is called with
             * `user_data` as parameter.
             *
             * Note that the value returned by `callback` must be transfer full. In case of non-refcounted boxed types, you should use
             * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
             * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
             * with jsc_value_new_object() that receives the copy as the instance parameter.
             * @param name the method name
             * @param callback a #GCallback to be called to invoke method @name of @jsc_class
             * @param destroy_notify destroy notifier for @user_data
             * @param return_type the #GType of the method return value, or %G_TYPE_NONE if the method is void.
             * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
             */
            add_method(
                name: string,
                callback: GObject.Callback,
                destroy_notify: GLib.DestroyNotify | null,
                return_type: GObject.GType,
                parameter_types?: GObject.GType[] | null,
            ): void;
            /**
             * Add a property with `name` to `jsc_class`. When the property value needs to be getted, `getter` is called
             * receiving the the class instance as first parameter and `user_data` as last parameter. When the property
             * value needs to be set, `setter` is called receiving the the class instance as first parameter, followed
             * by the value to be set and then `user_data` as the last parameter. When the property is cleared in the
             * #JSCClass context, `destroy_notify` is called with `user_data` as parameter.
             *
             * Note that the value returned by `getter` must be transfer full. In case of non-refcounted boxed types, you should use
             * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
             * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
             * with jsc_value_new_object() that receives the copy as the instance parameter.
             * @param name the property name
             * @param property_type the #GType of the property value
             * @param getter a #GCallback to be called to get the property value
             * @param setter a #GCallback to be called to set the property value
             * @param destroy_notify destroy notifier for @user_data
             */
            add_property(
                name: string,
                property_type: GObject.GType,
                getter?: GObject.Callback | null,
                setter?: GObject.Callback | null,
                destroy_notify?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Get the class name of `jsc_class`
             * @returns the name of @jsc_class
             */
            get_name(): string;
            /**
             * Get the parent class of `jsc_class`
             * @returns the parent class of @jsc_class
             */
            get_parent(): Class;
        }

        module Context {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                virtual_machine: VirtualMachine;
                virtualMachine: VirtualMachine;
            }
        }

        /**
         * JSCContext represents a JavaScript execution context, where all operations
         * take place and where the values will be associated.
         *
         * When a new context is created, a global object is allocated and the built-in JavaScript
         * objects (Object, Function, String, Array) are populated. You can execute JavaScript in
         * the context by using jsc_context_evaluate() or jsc_context_evaluate_with_source_uri().
         * It's also possible to register custom objects in the context with jsc_context_register_class().
         */
        class Context extends GObject.Object {
            static $gtype: GObject.GType<Context>;

            // Properties

            /**
             * The #JSCVirtualMachine in which the context was created.
             */
            get virtual_machine(): VirtualMachine;
            /**
             * The #JSCVirtualMachine in which the context was created.
             */
            get virtualMachine(): VirtualMachine;

            // Constructors

            constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Context;

            static new_with_virtual_machine(vm: VirtualMachine): Context;

            // Static methods

            /**
             * Get the #JSCContext that is currently executing a function. This should only be
             * called within a function or method callback, otherwise %NULL will be returned.
             */
            static get_current(): Context | null;

            // Methods

            /**
             * Check the given `code` in `context` for syntax errors. The `line_number` is the starting line number in `uri;`
             * the value is one-based so the first line is 1. `uri` and `line_number` are only used to fill the `exception`.
             * In case of errors `exception` will be set to a new #JSCException with the details. You can pass %NULL to
             * `exception` to ignore the error details.
             * @param code a JavaScript script to check
             * @param length length of @code, or -1 if @code is a nul-terminated string
             * @param mode a #JSCCheckSyntaxMode
             * @param uri the source URI
             * @param line_number the starting line number
             * @returns a #JSCCheckSyntaxResult
             */
            check_syntax(
                code: string,
                length: number,
                mode: CheckSyntaxMode,
                uri: string,
                line_number: number,
            ): [CheckSyntaxResult, Exception | null];
            /**
             * Clear the uncaught exception in `context` if any.
             */
            clear_exception(): void;
            /**
             * Evaluate `code` in `context`.
             * @param code a JavaScript script to evaluate
             * @param length length of @code, or -1 if @code is a nul-terminated string
             * @returns a #JSCValue representing the last value generated by the script.
             */
            evaluate(code: string, length: number): Value;
            /**
             * Evaluate `code` and create an new object where symbols defined in `code` will be added as properties,
             * instead of being added to `context` global object. The new object is returned as `object` parameter.
             * Similar to how jsc_value_new_object() works, if `object_instance` is not %NULL `object_class` must be provided too.
             * The `line_number` is the starting line number in `uri;` the value is one-based so the first line is 1.
             * `uri` and `line_number` will be shown in exceptions and they don't affect the behavior of the script.
             * @param code a JavaScript script to evaluate
             * @param length length of @code, or -1 if @code is a nul-terminated string
             * @param object_instance an object instance
             * @param object_class a #JSCClass or %NULL to use the default
             * @param uri the source URI
             * @param line_number the starting line number
             * @returns a #JSCValue representing the last value generated by the script.
             */
            evaluate_in_object(
                code: string,
                length: number,
                object_instance: any | null,
                object_class: Class | null,
                uri: string,
                line_number: number,
            ): [Value, Value];
            /**
             * Evaluate `code` in `context` using `uri` as the source URI. The `line_number` is the starting line number
             * in `uri;` the value is one-based so the first line is 1. `uri` and `line_number` will be shown in exceptions and
             * they don't affect the behavior of the script.
             * @param code a JavaScript script to evaluate
             * @param length length of @code, or -1 if @code is a nul-terminated string
             * @param uri the source URI
             * @param line_number the starting line number
             * @returns a #JSCValue representing the last value generated by the script.
             */
            evaluate_with_source_uri(code: string, length: number, uri: string, line_number: number): Value;
            /**
             * Get the last unhandled exception thrown in `context` by API functions calls.
             * @returns a #JSCException or %NULL if there isn't any    unhandled exception in the #JSCContext.
             */
            get_exception(): Exception | null;
            /**
             * Get a #JSCValue referencing the `context` global object
             * @returns a #JSCValue
             */
            get_global_object(): Value;
            /**
             * Get a property of `context` global object with `name`.
             * @param name the value name
             * @returns a #JSCValue
             */
            get_value(name: string): Value;
            /**
             * Get the #JSCVirtualMachine where `context` was created.
             * @returns the #JSCVirtualMachine where the #JSCContext was created.
             */
            get_virtual_machine(): VirtualMachine;
            /**
             * Remove the last #JSCExceptionHandler previously pushed to `context` with
             * jsc_context_push_exception_handler().
             */
            pop_exception_handler(): void;
            /**
             * Push an exception handler in `context`. Whenever a JavaScript exception happens in
             * the #JSCContext, the given `handler` will be called. The default #JSCExceptionHandler
             * simply calls jsc_context_throw_exception() to throw the exception to the #JSCContext.
             * If you don't want to catch the exception, but only get notified about it, call
             * jsc_context_throw_exception() in `handler` like the default one does.
             * The last exception handler pushed is the only one used by the #JSCContext, use
             * jsc_context_pop_exception_handler() to remove it and set the previous one. When `handler`
             * is removed from the context, `destroy_notify` i called with `user_data` as parameter.
             * @param handler a #JSCExceptionHandler
             * @param destroy_notify destroy notifier for @user_data
             */
            push_exception_handler(handler: ExceptionHandler, destroy_notify?: GLib.DestroyNotify | null): void;
            /**
             * Register a custom class in `context` using the given `name`. If the new class inherits from
             * another #JSCClass, the parent should be passed as `parent_class,` otherwise %NULL should be
             * used. The optional `vtable` parameter allows to provide a custom implementation for handling
             * the class, for example, to handle external properties not added to the prototype.
             * When an instance of the #JSCClass is cleared in the context, `destroy_notify` is called with
             * the instance as parameter.
             * @param name the class name
             * @param parent_class a #JSCClass or %NULL
             * @param vtable an optional #JSCClassVTable or %NULL
             * @param destroy_notify a destroy notifier for class instances
             * @returns a #JSCClass
             */
            register_class(
                name: string,
                parent_class?: Class | null,
                vtable?: ClassVTable | null,
                destroy_notify?: GLib.DestroyNotify | null,
            ): Class;
            /**
             * Set a property of `context` global object with `name` and `value`.
             * @param name the value name
             * @param value a #JSCValue
             */
            set_value(name: string, value: Value): void;
            /**
             * Throw an exception to `context` using the given error message. The created #JSCException
             * can be retrieved with jsc_context_get_exception().
             * @param error_message an error message
             */
            ['throw'](error_message: string): void;
            /**
             * Throw `exception` to `context`.
             * @param exception a #JSCException
             */
            throw_exception(exception: Exception): void;
            /**
             * Throw an exception to `context` using the given error name and message. The created #JSCException
             * can be retrieved with jsc_context_get_exception().
             * @param error_name the error name
             * @param error_message an error message
             */
            throw_with_name(error_name: string, error_message: string): void;
        }

        module Exception {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * JSCException represents a JavaScript exception.
         */
        class Exception extends GObject.Object {
            static $gtype: GObject.GType<Exception>;

            // Constructors

            constructor(properties?: Partial<Exception.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: Context, message: string): Exception;

            static new_with_name(context: Context, name: string, message: string): Exception;

            // Methods

            /**
             * Get a string with the exception backtrace.
             * @returns the exception backtrace string or %NULL.
             */
            get_backtrace_string(): string | null;
            /**
             * Get the column number at which `exception` happened.
             * @returns the column number of @exception.
             */
            get_column_number(): number;
            /**
             * Get the line number at which `exception` happened.
             * @returns the line number of @exception.
             */
            get_line_number(): number;
            /**
             * Get the error message of `exception`.
             * @returns the @exception error message.
             */
            get_message(): string;
            /**
             * Get the error name of `exception`
             * @returns the @exception error name.
             */
            get_name(): string;
            /**
             * Get the source URI of `exception`.
             * @returns the the source URI of @exception, or %NULL.
             */
            get_source_uri(): string | null;
            /**
             * Return a report message of `exception,` containing all the possible details such us
             * source URI, line, column and backtrace, and formatted to be printed.
             * @returns a new string with the exception report
             */
            report(): string;
            /**
             * Get the string representation of `exception` error.
             * @returns the string representation of @exception.
             */
            to_string(): string;
        }

        module Value {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                context: Context;
            }
        }

        /**
         * JSCValue represents a reference to a value in a #JSCContext. The JSCValue
         * protects the referenced value from being garbage collected.
         */
        class Value extends GObject.Object {
            static $gtype: GObject.GType<Value>;

            // Properties

            /**
             * The #JSCContext in which the value was created.
             */
            get context(): Context;

            // Constructors

            constructor(properties?: Partial<Value.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_array_buffer(
                context: Context,
                data: any | null,
                size: number,
                destroy_notify?: GLib.DestroyNotify | null,
            ): Value;

            static new_array_from_garray(context: Context, array?: Value[] | null): Value;

            static new_array_from_strv(context: Context, strv: string[]): Value;

            static new_boolean(context: Context, value: boolean): Value;

            static new_from_json(context: Context, json: string): Value;

            static new_function_variadic(
                context: Context,
                name: string | null,
                callback: GObject.Callback,
                destroy_notify: GLib.DestroyNotify | null,
                return_type: GObject.GType,
            ): Value;

            static new_function(
                context: Context,
                name: string | null,
                callback: GObject.Callback,
                destroy_notify: GLib.DestroyNotify | null,
                return_type: GObject.GType,
                parameter_types?: GObject.GType[] | null,
            ): Value;

            static new_null(context: Context): Value;

            static new_number(context: Context, number: number): Value;

            static new_object(context: Context, instance?: any | null, jsc_class?: Class | null): Value;

            static new_string(context: Context, string?: string | null): Value;

            static new_string_from_bytes(context: Context, bytes?: GLib.Bytes | null): Value;

            static new_typed_array(context: Context, type: TypedArrayType, length: number): Value;

            static new_undefined(context: Context): Value;

            // Methods

            /**
             * Gets a pointer to memory that contains the array buffer data.
             *
             * Obtains a pointer to the memory region that holds the contents of the
             * %ArrayBuffer; modifications done to the data will be visible to JavaScript
             * code. If `size` is not %NULL, the size in bytes of the memory region
             * will also be stored in the pointed location.
             *
             * Note that the pointer returned by this function is not guaranteed to remain
             * the same after calls to other JSC API functions. If you plan to access the
             * data of the %ArrayBuffer later, you can keep a reference to the `value` and
             * obtain the data pointer at a later point. Keep in mind that if JavaScript
             * code has a chance to run, for example due to main loop events that result
             * in JSC being called, the contents of the memory region might be modified in
             * the meantime. Consider taking a copy of the data and using the copy instead
             * in asynchronous code.
             * @param size location where to store the size of the memory region.
             * @returns pointer to memory.
             */
            array_buffer_get_data(size?: number | null): any | null;
            /**
             * Gets the size in bytes of the array buffer.
             *
             * Obtains the size in bytes of the memory region that holds the contents of
             * an %ArrayBuffer.
             * @returns size, in bytes.
             */
            array_buffer_get_size(): number;
            /**
             * Invoke <function>new</function> with constructor referenced by `value`. If `n_parameters`
             * is 0 no parameters will be passed to the constructor.
             * @param parameters the #JSCValue<!-- -->s to pass as parameters to the constructor, or %NULL
             * @returns a #JSCValue referencing the newly created object instance.
             */
            constructor_call(parameters?: Value[] | null): Value;
            /**
             * Call function referenced by `value,` passing the given `parameters`. If `n_parameters`
             * is 0 no parameters will be passed to the function.
             *
             * This function always returns a #JSCValue, in case of void functions a #JSCValue referencing
             * <function>undefined</function> is returned
             * @param parameters the #JSCValue<!-- -->s to pass as parameters to the function, or %NULL
             * @returns a #JSCValue with the return value of the function.
             */
            function_call(parameters?: Value[] | null): Value;
            /**
             * Get the #JSCContext in which `value` was created.
             * @returns the #JSCValue context.
             */
            get_context(): Context;
            /**
             * Get whether the value referenced by `value` is an array.
             * @returns whether the value is an array.
             */
            is_array(): boolean;
            /**
             * Check whether the `value` is an %ArrayBuffer.
             * @returns whether the value is an %ArrayBuffer
             */
            is_array_buffer(): boolean;
            /**
             * Get whether the value referenced by `value` is a boolean.
             * @returns whether the value is a boolean.
             */
            is_boolean(): boolean;
            /**
             * Get whether the value referenced by `value` is a constructor.
             * @returns whether the value is a constructor.
             */
            is_constructor(): boolean;
            /**
             * Get whether the value referenced by `value` is a function
             * @returns whether the value is a function.
             */
            is_function(): boolean;
            /**
             * Get whether the value referenced by `value` is <function>null</function>.
             * @returns whether the value is null.
             */
            is_null(): boolean;
            /**
             * Get whether the value referenced by `value` is a number.
             * @returns whether the value is a number.
             */
            is_number(): boolean;
            /**
             * Get whether the value referenced by `value` is an object.
             * @returns whether the value is an object.
             */
            is_object(): boolean;
            /**
             * Get whether the value referenced by `value` is a string
             * @returns whether the value is a string
             */
            is_string(): boolean;
            /**
             * Determines whether a value is a typed array.
             * @returns Whether @value is a typed array.
             */
            is_typed_array(): boolean;
            /**
             * Get whether the value referenced by `value` is <function>undefined</function>.
             * @returns whether the value is undefined.
             */
            is_undefined(): boolean;
            /**
             * Create a new typed array value with elements from an array buffer.
             *
             * Create a #JSCValue referencing a new typed array value containing
             * elements of the given `type,` where the elements are stored at the memory
             * region represented by the `array_buffer`.
             *
             * The `type` must *not* be %JSC_TYPED_ARRAY_NONE.
             *
             * The `offset` and `length` parameters can be used to indicate which part of
             * the array buffer can be accessed through the typed array. If both are
             * omitted (passing zero as `offset,` and `-1` as `length)`, the whole
             * `array_buffer` is exposed through the typed array. Omitting the `length`
             * with a non-zero `offset` will expose the remainder of the `array_buffer`
             * starting at the indicated offset.
             * @param type type of array elements.
             * @param offset offset, in bytes.
             * @param length number of array elements, or `-1`.
             * @returns a #JSCValue
             */
            new_typed_array_with_buffer(type: TypedArrayType, offset: number, length: number): Value;
            /**
             * Define or modify a property with `property_name` in object referenced by `value`. When the
             * property value needs to be getted or set, `getter` and `setter` callbacks will be called.
             * When the property is cleared in the #JSCClass context, `destroy_notify` is called with
             * `user_data` as parameter. This is equivalent to JavaScript <function>Object.defineProperty()</function>
             * when used with an accessor descriptor.
             *
             * Note that the value returned by `getter` must be fully transferred. In case of boxed types, you could use
             * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
             * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
             * with jsc_value_new_object() that receives the copy as instance parameter.
             *
             * Note that `getter` and `setter` are called as functions and not methods, so they don't receive an instance as
             * first parameter. Use jsc_class_add_property() if you want to add property accessor invoked as a method.
             * @param property_name the name of the property to define
             * @param flags #JSCValuePropertyFlags
             * @param property_type the #GType of the property
             * @param getter a #GCallback to be called to get the property value
             * @param setter a #GCallback to be called to set the property value
             * @param destroy_notify destroy notifier for @user_data
             */
            object_define_property_accessor(
                property_name: string,
                flags: ValuePropertyFlags,
                property_type: GObject.GType,
                getter?: GObject.Callback | null,
                setter?: GObject.Callback | null,
                destroy_notify?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Define or modify a property with `property_name` in object referenced by `value`. This is equivalent to
             * JavaScript <function>Object.defineProperty()</function> when used with a data descriptor.
             * @param property_name the name of the property to define
             * @param flags #JSCValuePropertyFlags
             * @param property_value the default property value
             */
            object_define_property_data(
                property_name: string,
                flags: ValuePropertyFlags,
                property_value?: Value | null,
            ): void;
            /**
             * Try to delete property with `name` from `value`. This function will return %FALSE if
             * the property was defined without %JSC_VALUE_PROPERTY_CONFIGURABLE flag.
             * @param name the property name
             * @returns %TRUE if the property was deleted, or %FALSE otherwise.
             */
            object_delete_property(name: string): boolean;
            /**
             * Get the list of property names of `value`. Only properties defined with %JSC_VALUE_PROPERTY_ENUMERABLE
             * flag will be collected.
             * @returns a %NULL-terminated array of strings containing the    property names, or %NULL if @value doesn't have enumerable properties.  Use g_strfreev() to free.
             */
            object_enumerate_properties(): string[] | null;
            /**
             * Get property with `name` from `value`.
             * @param name the property name
             * @returns the property #JSCValue.
             */
            object_get_property(name: string): Value;
            /**
             * Get property at `index` from `value`.
             * @param index the property index
             * @returns the property #JSCValue.
             */
            object_get_property_at_index(index: number): Value;
            /**
             * Get whether `value` has property with `name`.
             * @param name the property name
             * @returns %TRUE if @value has a property with @name, or %FALSE otherwise
             */
            object_has_property(name: string): boolean;
            /**
             * Invoke method with `name` on object referenced by `value,` passing the given `parameters`. If
             * `n_parameters` is 0 no parameters will be passed to the method.
             * The object instance will be handled automatically even when the method is a custom one
             * registered with jsc_class_add_method(), so it should never be passed explicitly as parameter
             * of this function.
             *
             * This function always returns a #JSCValue, in case of void methods a #JSCValue referencing
             * <function>undefined</function> is returned.
             * @param name the method name
             * @param parameters the #JSCValue<!-- -->s to pass as parameters to the method, or %NULL
             * @returns a #JSCValue with the return value of the method.
             */
            object_invoke_method(name: string, parameters?: Value[] | null): Value;
            /**
             * Get whether the value referenced by `value` is an instance of class `name`.
             * @param name a class name
             * @returns whether the value is an object instance of class @name.
             */
            object_is_instance_of(name: string): boolean;
            /**
             * Set `property` with `name` on `value`.
             * @param name the property name
             * @param property the #JSCValue to set
             */
            object_set_property(name: string, property: Value): void;
            /**
             * Set `property` at `index` on `value`.
             * @param index the property index
             * @param property the #JSCValue to set
             */
            object_set_property_at_index(index: number, property: Value): void;
            /**
             * Convert `value` to a boolean.
             * @returns a #gboolean result of the conversion.
             */
            to_boolean(): boolean;
            /**
             * Convert `value` to a double.
             * @returns a #gdouble result of the conversion.
             */
            to_double(): number;
            /**
             * Convert `value` to a #gint32.
             * @returns a #gint32 result of the conversion.
             */
            to_int32(): number;
            /**
             * Create a JSON string of `value` serialization. If `indent` is 0, the resulting JSON will
             * not contain newlines. The size of the indent is clamped to 10 spaces.
             * @param indent The number of spaces to indent when nesting.
             * @returns a null-terminated JSON string with serialization of @value
             */
            to_json(indent: number): string;
            /**
             * Convert `value` to a string. Use jsc_value_to_string_as_bytes() instead, if you need to
             * handle strings containing null characters.
             * @returns a null-terminated string result of the conversion.
             */
            to_string(): string;
            /**
             * Convert `value` to a string and return the results as #GBytes. This is needed
             * to handle strings with null characters.
             * @returns a #GBytes with the result of the conversion.
             */
            to_string_as_bytes(): GLib.Bytes;
            /**
             * Obtain the %ArrayBuffer for the memory region of the typed array elements.
             * @returns A #JSCValue
             */
            typed_array_get_buffer(): Value;
            /**
             * Obtains a pointer to the memory region that holds the elements of the typed
             * array; modifications done to them will be visible to JavaScript code. If
             * `length` is not %NULL, the number of elements contained in the typed array
             * are also stored in the pointed location.
             *
             * The returned pointer needs to be casted to the appropriate type (see
             * #JSCTypedArrayType), and has the `offset` over the underlying array
             * buffer data applied—that is, points to the first element of the typed
             * array:
             *
             *
             * ```c
             * if (jsc_value_typed_array_get_type(value) != JSC_TYPED_ARRAY_UINT32)
             *     g_error ("Only arrays of uint32_t are supported");
             *
             * gsize count = 0;
             * uint32_t *elements = jsc_value_typed_array_get_contents (value, &count);
             * for (gsize i = 0; i < count; i++)
             *      g_print ("index %zu, value %" PRIu32 "\n", i, elements[i]);
             * ```
             *
             *
             * Note that the pointer returned by this function is not guaranteed to remain
             * the same after calls to other JSC API functions. See
             * jsc_value_array_buffer_get_data() for details.
             * @returns pointer to memory.
             */
            typed_array_get_data(): [any | null, number];
            /**
             * Gets the number of elements in a typed array.
             * @returns number of elements.
             */
            typed_array_get_length(): number;
            /**
             * Gets the offset over the underlying array buffer data.
             * @returns offset, in bytes.
             */
            typed_array_get_offset(): number;
            /**
             * Gets the size of a typed array.
             * @returns size, in bytes.
             */
            typed_array_get_size(): number;
            /**
             * Gets the type of elements contained in a typed array.
             * @returns type of the elements, or %JSC_TYPED_ARRAY_NONE if @value is not a typed array.
             */
            typed_array_get_type(): TypedArrayType;
        }

        module VirtualMachine {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * JSCVirtualMachine represents a group of JSCContext<!-- -->s. It allows
         * concurrent JavaScript execution by creating a different instance of
         * JSCVirtualMachine in each thread.
         *
         * To create a group of JSCContext<!-- -->s pass the same JSCVirtualMachine
         * instance to every JSCContext constructor.
         */
        class VirtualMachine extends GObject.Object {
            static $gtype: GObject.GType<VirtualMachine>;

            // Constructors

            constructor(properties?: Partial<VirtualMachine.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VirtualMachine;
        }

        module WeakValue {
            // Signal callback interfaces

            interface Cleared {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                value: Value;
            }
        }

        /**
         * JSCWeakValue represents a weak reference to a value in a #JSCContext. It can be used
         * to keep a reference to a JavaScript value without protecting it from being garbage
         * collected and without referencing the #JSCContext either.
         */
        class WeakValue extends GObject.Object {
            static $gtype: GObject.GType<WeakValue>;

            // Properties

            /**
             * The #JSCValue referencing the JavaScript value.
             */
            set value(val: Value);

            // Constructors

            constructor(properties?: Partial<WeakValue.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](value: Value): WeakValue;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cleared', callback: (_source: this) => void): number;
            connect_after(signal: 'cleared', callback: (_source: this) => void): number;
            emit(signal: 'cleared'): void;

            // Methods

            /**
             * Get a #JSCValue referencing the JavaScript value of `weak_value`.
             * @returns a new #JSCValue or %NULL if @weak_value was cleared.
             */
            get_value(): Value;
        }

        type ClassClass = typeof Class;
        /**
         * Virtual table for a JSCClass. This can be optionally used when registering a #JSCClass in a #JSCContext
         * to provide a custom implementation for the class. All virtual functions are optional and can be set to
         * %NULL to fallback to the default implementation.
         */
        class ClassVTable {
            static $gtype: GObject.GType<ClassVTable>;

            // Fields

            get_property: ClassGetPropertyFunction;
            set_property: ClassSetPropertyFunction;
            has_property: ClassHasPropertyFunction;
            delete_property: ClassDeletePropertyFunction;
            enumerate_properties: ClassEnumeratePropertiesFunction;

            // Constructors

            _init(...args: any[]): void;
        }

        type ContextClass = typeof Context;
        type ExceptionClass = typeof Exception;
        type ValueClass = typeof Value;
        type VirtualMachineClass = typeof VirtualMachine;
        type WeakValueClass = typeof WeakValue;
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

    export default JavaScriptCore;
}

declare module 'gi://JavaScriptCore' {
    import JavaScriptCore60 from 'gi://JavaScriptCore?version=6.0';
    export default JavaScriptCore60;
}
// END
