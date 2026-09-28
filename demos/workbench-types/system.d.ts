/// <reference path="./gobject-2.0.d.ts" />

declare module 'system' {
    import type GObject from 'gi://GObject?version=2.0';

    /**
     * This property contains the name of the script as it was invoked from the command
     * line. In C and other languages, this information is contained in the first element of
     * the platform's equivalent of argv, but GJS's ARGV only contains the
     * subsequent command-line arguments. In other words, `ARGV[0]` in GJS is the same as `argv[1]` in C.
     * @version Gjs 1.68
     */
    export const programInvocationName: string;

    /**
     * This property contains version information about GJS.
     */
    export const version: number;

    /**
     * The full path of the executed program.
     * @version Gjs 1.68
     */
    export const programPath: string | null;

    /**
     * A list of arguments passed to the current process.
     * This is effectively an alias for the global `ARGV`, which is misleading in that
     * it is not equivalent to the platform'`s` argv.
     * @version Gjs 1.68
     */
    export const programArgs: string[];

    /**
     * Return the memory address of any object as a string.
     * This is the address of memory being managed by the JavaScript engine, which may
     * represent a wrapper around memory elsewhere.
     * **Caution**, don't use this as a unique identifier!
     * JavaScript's garbage collector can move objects around in memory, or
     * deduplicate identical objects, so this value may change during the execution
     * of a program.
     * @param o Any Object
     * @returns A hexadecimal string (e.g. `0xb4f170f0`)
     */
    export function addressOf(o: object): string;

    /**
     * Return the memory address of any GObject as a string.
     * See also {@link addressOf}
     * @param o Any {@link GObject.Object}-derived instance
     * @returns A hexadecimal string (e.g. `0xb4f170f0`)
     * @version Gjs 1.58
     */
    export function addressOfGObject(o: GObject.Object): string;

    /**
     * Inserts a breakpoint instruction into the code.
     * **Warning**: Using this function in code run outside of GDB will abort the process.
     * With `System.breakpoint()` calls in your code, a GJS program can be debugged by
     * running it in GDB:
     * ```bash
     * gdb --args gjs script.js
     * ```
     * Once GDB has started, you can start the program with run. When the debugger
     * hits a breakpoint it will pause execution of the process and return to the
     * prompt. You can then use the standard `backtrace` command to print a C++ stack
     * trace, or use `call gjs_dumpstack()` to print a JavaScript stack trace:
     * ```bash
     * (gdb) run
     * tarting program: /usr/bin/gjs -m script.js
     * ...
     * Thread 1 "gjs" received signal SIGTRAP, Trace/breakpoint trap.
     * (gdb) call gjs_dumpstack()
     * == Stack trace for context 0x5555555b7180 ==
     * #0   555555640548 i   file:///path/to/script.js:4 (394b8c3cc060 @ 12)
     * #1   5555556404c8 i   file:///path/to/script.js:7 (394b8c3cc0b0 @ 6)
     * #2   7fffffffd3a0 b   self-hosted:2408 (394b8c3a9650 @ 753)
     * #3   5555556403e8 i   self-hosted:2355 (394b8c3a9600 @ 375)
     * (gdb)
     * ```
     * To continue executing the program, you can use the `continue` (or `cont`) to
     * resume the process and debug further.
     * Remember that if you run the program outside of GDB, it will abort at the
     * breakpoint, so make sure to remove any calls to `System.breakpoint()` when
     * you're done debugging.
     */
    export function breakpoint(): void;

    /**
     * Clears the timezone cache.
     * This is a workaround for SpiderMonkey Bug [#1004706](https://bugzilla.mozilla.org/show_bug.cgi?id=1004706).
     */
    export function clearDateCaches(): void;

    /** Runs the garbage collector */
    export function gc(): void;

    /**
     * Return the reference count of any GObject-derived type. When an object's
     * reference count is zero, it is cleaned up and erased from memory.
     * @param o A {@link GObject.Object}
     */
    export function refcount(o: GObject.Object): number;
    /**
     * See also: The [heapgraph](https://gitlab.gnome.org/GNOME/gjs/blob/HEAD/tools/heapgraph.md) utility in the GJS repository.
     * Dump a representation of internal heap memory. If `path` is not given, GJS will
     * write the contents to `stdout`.
     * @param path  Optional file path
     */
    export function dumpHeap(path?: string): void;

    /**
     * Dump internal garbage collector statistics. If `path` is not given, GJS will
     * write the contents to `stdout`.
     * @param path Optional file path
     * @version Gjs 1.70
     * @example Output:
     * ```json
     * {
     *   "gcBytes": 794624,
     *   "gcMaxBytes": 4294967295,
     *   "mallocBytes": 224459,
     *   "gcIsHighFrequencyMode": true,
     *   "gcNumber": 1,
     *   "majorGCCount": 1,
     *   "minorGCCount": 1,
     *   "sliceCount": 1,
     *   "zone": {
     *     "gcBytes": 323584,
     *     "gcTriggerBytes": 42467328,
     *     "gcAllocTrigger": 36097228.8,
     *     "mallocBytes": 120432,
     *     "mallocTriggerBytes": 59768832,
     *     "gcNumber": 1
     *   }
     * }
     * ```
     *
     */
    export function dumpMemoryInfo(path?: string): void;

    /**
     * This works the same as C's exit() function; exits the program, passing a
     * certain error code to the shell. The shell expects the error code to be zero if
     * there was no error, or non-zero (any value you please) to indicate an error.
     *
     * This value is used by other tools such as `make`; if `make` calls a program that
     * returns a non-zero error code, then `make` aborts the build.
     * @param code An exit code
     */
    export function exit(code: number): never;

    /**
     * The System module provides common low-level facilities such as access to
     * process arguments and exit(), as well as a number of useful functions and
     * properties for debugging.
     *
     * Note that the majority of the functions and properties in this module should not
     * be used in normal operation of a GJS application.
     */
    const System: {
        programInvocationName: typeof programInvocationName;
        version: typeof version;
        programPath: typeof programPath;
        programArgs: typeof programArgs;
        addressOf: typeof addressOf;
        addressOfGObject: typeof addressOfGObject;
        breakpoint: typeof breakpoint;
        clearDateCaches: typeof clearDateCaches;
        gc: typeof gc;
        refcount: typeof refcount;
        dumpHeap: typeof dumpHeap;
        dumpMemoryInfo: typeof dumpMemoryInfo;
        exit: typeof exit;
    };

    export default System;
}
