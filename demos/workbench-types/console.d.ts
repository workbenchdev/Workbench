declare module 'console' {
    /**
     * @param logDomain the GLib log domain this Console should print
     *   with. Defaults to 'Gjs-Console'.
     */
    export function setConsoleLogDomain(logDomain: string): void;

    /**
     * @param logDomain the GLib log domain this Console should print
     *   with. Defaults to 'Gjs-Console'.
     */
    export function getConsoleLogDomain(): string;

    export const DEFAULT_LOG_DOMAIN: string;

    const Console: {
        setConsoleLogDomain: typeof setConsoleLogDomain;
        getConsoleLogDomain: typeof getConsoleLogDomain;
        DEFAULT_LOG_DOMAIN: typeof DEFAULT_LOG_DOMAIN;
    };

    export default Console;
}
