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

declare module 'gi://GioUnix?version=2.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GioUnix {
        /**
         * GioUnix-2.0
         */

        /**
         * Extension point for default handler to URI association. See
         * [Extending GIO][extending-gio].
         */
        const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string;
        /**
         * Gets the default application for launching applications
         * using this URI scheme for a particular [iface`Gio`.DesktopAppInfoLookup]
         * implementation.
         *
         * The [iface`Gio`.DesktopAppInfoLookup] interface and this function is used
         * to implement [func`Gio`.AppInfo.get_default_for_uri_scheme] backends
         * in a GIO module. There is no reason for applications to use it
         * directly. Applications should use
         * [func`Gio`.AppInfo.get_default_for_uri_scheme].
         * @param lookup a [iface@Gio.DesktopAppInfoLookup]
         * @param uri_scheme a string containing a URI scheme.
         * @returns [iface@Gio.AppInfo] for given   @uri_scheme or `NULL` on error.
         */
        function desktop_app_info_lookup_get_default_for_uri_scheme(
            lookup: Gio.DesktopAppInfoLookup,
            uri_scheme: string,
        ): Gio.AppInfo | null;
        /**
         * Gets the underlying file descriptor.
         * @param fd_based a #GFileDescriptorBased.
         * @returns The file descriptor
         */
        function file_descriptor_based_get_fd(fd_based: Gio.FileDescriptorBased): number;
        /**
         * Determines if `mount_path` is considered an implementation of the
         * OS. This is primarily used for hiding mountable and mounted volumes
         * that only are used in the OS and has little to no relevance to the
         * casual user.
         * @param mount_path a mount path, e.g. `/media/disk` or `/usr`
         * @returns %TRUE if @mount_path is considered an implementation detail     of the OS.
         */
        function is_mount_path_system_internal(mount_path: string): boolean;
        /**
         * Determines if `device_path` is considered a block device path which is only
         * used in implementation of the OS. This is primarily used for hiding
         * mounted volumes that are intended as APIs for programs to read, and system
         * administrators at a shell; rather than something that should, for example,
         * appear in a GUI. For example, the Linux `/proc` filesystem.
         *
         * The list of device paths considered ‘system’ ones may change over time.
         * @param device_path a device path, e.g. `/dev/loop0` or `nfsd`
         * @returns %TRUE if @device_path is considered an implementation detail of    the OS.
         */
        function is_system_device_path(device_path: string): boolean;
        /**
         * Determines if `fs_type` is considered a type of file system which is only
         * used in implementation of the OS. This is primarily used for hiding
         * mounted volumes that are intended as APIs for programs to read, and system
         * administrators at a shell; rather than something that should, for example,
         * appear in a GUI. For example, the Linux `/proc` filesystem.
         *
         * The list of file system types considered ‘system’ ones may change over time.
         * @param fs_type a file system type, e.g. `procfs` or `tmpfs`
         * @returns %TRUE if @fs_type is considered an implementation detail of the OS.
         */
        function is_system_fs_type(fs_type: string): boolean;
        /**
         * Gets a #GUnixMountEntry for a given mount path. If `time_read`
         * is set, it will be filled with a unix timestamp for checking
         * if the mounts have changed since with g_unix_mount_entries_changed_since().
         *
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         *
         * This will return %NULL if there is no mount point at `mount_path`.
         * @param mount_path path for a possible unix mount.
         * @returns a #GUnixMountEntry.
         */
        function mount_at(mount_path: string): [Gio.UnixMountEntry | null, number];
        /**
         * Compares two unix mounts.
         * @param mount1 first #GUnixMountEntry to compare.
         * @param mount2 second #GUnixMountEntry to compare.
         * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
         */
        function mount_compare(mount1: Gio.UnixMountEntry, mount2: Gio.UnixMountEntry): number;
        /**
         * Makes a copy of `mount_entry`.
         * @param mount_entry a #GUnixMountEntry.
         * @returns a new #GUnixMountEntry
         */
        function mount_copy(mount_entry: Gio.UnixMountEntry): Gio.UnixMountEntry;
        /**
         * Checks if the unix mounts have changed since a given unix time.
         * @param time guint64 to contain a timestamp.
         * @returns %TRUE if the mounts have changed since @time. Since 2.84
         */
        function mount_entries_changed_since(time: number): boolean;
        /**
         * Gets a #GList of #GUnixMountEntry containing the unix mounts.
         * If `time_read` is set, it will be filled with the mount
         * timestamp, allowing for checking if the mounts have changed
         * with g_unix_mount_entries_changed_since().
         * @returns a #GList of the UNIX mounts.
         */
        function mount_entries_get(): [Gio.UnixMountEntry[], number];
        /**
         * Gets an array of [struct`Gio`.UnixMountEntry]s containing the Unix mounts
         * listed in `table_path`.
         *
         * This is a generalized version of g_unix_mount_entries_get(), mainly intended for
         * internal testing use. Note that g_unix_mount_entries_get() may parse multiple
         * hierarchical table files, so this function is not a direct superset of its
         * functionality.
         *
         * If there is an error reading or parsing the file, `NULL` will be returned
         * and both out parameters will be set to `0`.
         * @param table_path path to the mounts table file (for example `/proc/self/mountinfo`)
         * @returns mount   entries, or `NULL` if there was an error loading them
         */
        function mount_entries_get_from_file(table_path: string): [Gio.UnixMountEntry[] | null, number];
        /**
         * Gets a #GUnixMountEntry for a given mount path. If `time_read`
         * is set, it will be filled with a unix timestamp for checking
         * if the mounts have changed since with g_unix_mount_entries_changed_since().
         *
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         *
         * This will return %NULL if there is no mount point at `mount_path`.
         * @param mount_path path for a possible unix mount.
         * @returns a #GUnixMountEntry.
         */
        function mount_entry_at(mount_path: string): [Gio.UnixMountEntry | null, number];
        /**
         * Compares two unix mounts.
         * @param mount1 first #GUnixMountEntry to compare.
         * @param mount2 second #GUnixMountEntry to compare.
         * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
         */
        function mount_entry_compare(mount1: Gio.UnixMountEntry, mount2: Gio.UnixMountEntry): number;
        /**
         * Makes a copy of `mount_entry`.
         * @param mount_entry a #GUnixMountEntry.
         * @returns a new #GUnixMountEntry
         */
        function mount_entry_copy(mount_entry: Gio.UnixMountEntry): Gio.UnixMountEntry;
        /**
         * Gets a #GUnixMountEntry for a given file path. If `time_read`
         * is set, it will be filled with a unix timestamp for checking
         * if the mounts have changed since with g_unix_mount_entries_changed_since().
         *
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         *
         * This will return %NULL if looking up the mount entry fails, if
         * `file_path` doesn’t exist or there is an I/O error.
         * @param file_path file path on some unix mount.
         * @returns a #GUnixMountEntry.
         */
        function mount_entry_for(file_path: string): [Gio.UnixMountEntry | null, number];
        /**
         * Frees a unix mount.
         * @param mount_entry a #GUnixMountEntry.
         */
        function mount_entry_free(mount_entry: Gio.UnixMountEntry): void;
        /**
         * Gets the device path for a unix mount.
         * @param mount_entry a #GUnixMount.
         * @returns a string containing the device path.
         */
        function mount_entry_get_device_path(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets the filesystem type for the unix mount.
         * @param mount_entry a #GUnixMount.
         * @returns a string containing the file system type.
         */
        function mount_entry_get_fs_type(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets the mount path for a unix mount.
         * @param mount_entry input #GUnixMountEntry to get the mount path for.
         * @returns the mount path for @mount_entry.
         */
        function mount_entry_get_mount_path(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets a comma-separated list of mount options for the unix mount. For example,
         * `rw,relatime,seclabel,data=ordered`.
         *
         * This is similar to g_unix_mount_point_get_options(), but it takes
         * a #GUnixMountEntry as an argument.
         * @param mount_entry a #GUnixMountEntry.
         * @returns a string containing the options, or %NULL if not available.
         */
        function mount_entry_get_options(mount_entry: Gio.UnixMountEntry): string | null;
        /**
         * Gets the root of the mount within the filesystem. This is useful e.g. for
         * mounts created by bind operation, or btrfs subvolumes.
         *
         * For example, the root path is equal to "/" for mount created by
         * "mount /dev/sda1 /mnt/foo" and "/bar" for
         * "mount --bind /mnt/foo/bar /mnt/bar".
         * @param mount_entry a #GUnixMountEntry.
         * @returns a string containing the root, or %NULL if not supported.
         */
        function mount_entry_get_root_path(mount_entry: Gio.UnixMountEntry): string | null;
        /**
         * Guesses whether a Unix mount can be ejected.
         * @param mount_entry a #GUnixMountEntry
         * @returns %TRUE if @mount_entry is deemed to be ejectable.
         */
        function mount_entry_guess_can_eject(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Guesses the icon of a Unix mount.
         * @param mount_entry a #GUnixMountEntry
         * @returns a #GIcon
         */
        function mount_entry_guess_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
        /**
         * Guesses the name of a Unix mount.
         * The result is a translated string.
         * @param mount_entry a #GUnixMountEntry
         * @returns A newly allocated string that must     be freed with g_free()
         */
        function mount_entry_guess_name(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Guesses whether a Unix mount should be displayed in the UI.
         * @param mount_entry a #GUnixMountEntry
         * @returns %TRUE if @mount_entry is deemed to be displayable.
         */
        function mount_entry_guess_should_display(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Guesses the symbolic icon of a Unix mount.
         * @param mount_entry a #GUnixMountEntry
         * @returns a #GIcon
         */
        function mount_entry_guess_symbolic_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
        /**
         * Checks if a unix mount is mounted read only.
         * @param mount_entry a #GUnixMount.
         * @returns %TRUE if @mount_entry is read only.
         */
        function mount_entry_is_readonly(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Checks if a Unix mount is a system mount. This is the Boolean OR of
         * g_unix_is_system_fs_type(), g_unix_is_system_device_path() and
         * g_unix_is_mount_path_system_internal() on `mount_entry’`s properties.
         *
         * The definition of what a ‘system’ mount entry is may change over time as new
         * file system types and device paths are ignored.
         * @param mount_entry a #GUnixMount.
         * @returns %TRUE if the unix mount is for a system path.
         */
        function mount_entry_is_system_internal(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Gets a #GUnixMountEntry for a given file path. If `time_read`
         * is set, it will be filled with a unix timestamp for checking
         * if the mounts have changed since with g_unix_mount_entries_changed_since().
         *
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         *
         * This will return %NULL if looking up the mount entry fails, if
         * `file_path` doesn’t exist or there is an I/O error.
         * @param file_path file path on some unix mount.
         * @returns a #GUnixMountEntry.
         */
        function mount_for(file_path: string): [Gio.UnixMountEntry | null, number];
        /**
         * Frees a unix mount.
         * @param mount_entry a #GUnixMountEntry.
         */
        function mount_free(mount_entry: Gio.UnixMountEntry): void;
        /**
         * Gets the device path for a unix mount.
         * @param mount_entry a #GUnixMount.
         * @returns a string containing the device path.
         */
        function mount_get_device_path(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets the filesystem type for the unix mount.
         * @param mount_entry a #GUnixMount.
         * @returns a string containing the file system type.
         */
        function mount_get_fs_type(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets the mount path for a unix mount.
         * @param mount_entry input #GUnixMountEntry to get the mount path for.
         * @returns the mount path for @mount_entry.
         */
        function mount_get_mount_path(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets a comma-separated list of mount options for the unix mount. For example,
         * `rw,relatime,seclabel,data=ordered`.
         *
         * This is similar to g_unix_mount_point_get_options(), but it takes
         * a #GUnixMountEntry as an argument.
         * @param mount_entry a #GUnixMountEntry.
         * @returns a string containing the options, or %NULL if not available.
         */
        function mount_get_options(mount_entry: Gio.UnixMountEntry): string | null;
        /**
         * Gets the root of the mount within the filesystem. This is useful e.g. for
         * mounts created by bind operation, or btrfs subvolumes.
         *
         * For example, the root path is equal to "/" for mount created by
         * "mount /dev/sda1 /mnt/foo" and "/bar" for
         * "mount --bind /mnt/foo/bar /mnt/bar".
         * @param mount_entry a #GUnixMountEntry.
         * @returns a string containing the root, or %NULL if not supported.
         */
        function mount_get_root_path(mount_entry: Gio.UnixMountEntry): string | null;
        /**
         * Guesses whether a Unix mount can be ejected.
         * @param mount_entry a #GUnixMountEntry
         * @returns %TRUE if @mount_entry is deemed to be ejectable.
         */
        function mount_guess_can_eject(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Guesses the icon of a Unix mount.
         * @param mount_entry a #GUnixMountEntry
         * @returns a #GIcon
         */
        function mount_guess_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
        /**
         * Guesses the name of a Unix mount.
         * The result is a translated string.
         * @param mount_entry a #GUnixMountEntry
         * @returns A newly allocated string that must     be freed with g_free()
         */
        function mount_guess_name(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Guesses whether a Unix mount should be displayed in the UI.
         * @param mount_entry a #GUnixMountEntry
         * @returns %TRUE if @mount_entry is deemed to be displayable.
         */
        function mount_guess_should_display(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Guesses the symbolic icon of a Unix mount.
         * @param mount_entry a #GUnixMountEntry
         * @returns a #GIcon
         */
        function mount_guess_symbolic_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
        /**
         * Checks if a unix mount is mounted read only.
         * @param mount_entry a #GUnixMount.
         * @returns %TRUE if @mount_entry is read only.
         */
        function mount_is_readonly(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Checks if a Unix mount is a system mount. This is the Boolean OR of
         * g_unix_is_system_fs_type(), g_unix_is_system_device_path() and
         * g_unix_is_mount_path_system_internal() on `mount_entry’`s properties.
         *
         * The definition of what a ‘system’ mount entry is may change over time as new
         * file system types and device paths are ignored.
         * @param mount_entry a #GUnixMount.
         * @returns %TRUE if the unix mount is for a system path.
         */
        function mount_is_system_internal(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Gets a #GUnixMountPoint for a given mount path. If `time_read` is set, it
         * will be filled with a unix timestamp for checking if the mount points have
         * changed since with g_unix_mount_points_changed_since().
         *
         * If more mount points have the same mount path, the last matching mount point
         * is returned.
         * @param mount_path path for a possible unix mount point.
         * @returns a #GUnixMountPoint, or %NULL if no match is found.
         */
        function mount_point_at(mount_path: string): [Gio.UnixMountPoint | null, number];
        /**
         * Compares two unix mount points.
         * @param mount1 a #GUnixMount.
         * @param mount2 a #GUnixMount.
         * @returns 1, 0 or -1 if @mount1 is greater than, equal to, or less than @mount2, respectively.
         */
        function mount_point_compare(mount1: Gio.UnixMountPoint, mount2: Gio.UnixMountPoint): number;
        /**
         * Makes a copy of `mount_point`.
         * @param mount_point a #GUnixMountPoint.
         * @returns a new #GUnixMountPoint
         */
        function mount_point_copy(mount_point: Gio.UnixMountPoint): Gio.UnixMountPoint;
        /**
         * Frees a unix mount point.
         * @param mount_point unix mount point to free.
         */
        function mount_point_free(mount_point: Gio.UnixMountPoint): void;
        /**
         * Gets the device path for a unix mount point.
         * @param mount_point a #GUnixMountPoint.
         * @returns a string containing the device path.
         */
        function mount_point_get_device_path(mount_point: Gio.UnixMountPoint): string;
        /**
         * Gets the file system type for the mount point.
         * @param mount_point a #GUnixMountPoint.
         * @returns a string containing the file system type.
         */
        function mount_point_get_fs_type(mount_point: Gio.UnixMountPoint): string;
        /**
         * Gets the mount path for a unix mount point.
         * @param mount_point a #GUnixMountPoint.
         * @returns a string containing the mount path.
         */
        function mount_point_get_mount_path(mount_point: Gio.UnixMountPoint): string;
        /**
         * Gets the options for the mount point.
         * @param mount_point a #GUnixMountPoint.
         * @returns a string containing the options.
         */
        function mount_point_get_options(mount_point: Gio.UnixMountPoint): string | null;
        /**
         * Guesses whether a Unix mount point can be ejected.
         * @param mount_point a #GUnixMountPoint
         * @returns %TRUE if @mount_point is deemed to be ejectable.
         */
        function mount_point_guess_can_eject(mount_point: Gio.UnixMountPoint): boolean;
        /**
         * Guesses the icon of a Unix mount point.
         * @param mount_point a #GUnixMountPoint
         * @returns a #GIcon
         */
        function mount_point_guess_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
        /**
         * Guesses the name of a Unix mount point.
         * The result is a translated string.
         * @param mount_point a #GUnixMountPoint
         * @returns A newly allocated string that must     be freed with g_free()
         */
        function mount_point_guess_name(mount_point: Gio.UnixMountPoint): string;
        /**
         * Guesses the symbolic icon of a Unix mount point.
         * @param mount_point a #GUnixMountPoint
         * @returns a #GIcon
         */
        function mount_point_guess_symbolic_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
        /**
         * Checks if a unix mount point is a loopback device.
         * @param mount_point a #GUnixMountPoint.
         * @returns %TRUE if the mount point is a loopback. %FALSE otherwise.
         */
        function mount_point_is_loopback(mount_point: Gio.UnixMountPoint): boolean;
        /**
         * Checks if a unix mount point is read only.
         * @param mount_point a #GUnixMountPoint.
         * @returns %TRUE if a mount point is read only.
         */
        function mount_point_is_readonly(mount_point: Gio.UnixMountPoint): boolean;
        /**
         * Checks if a unix mount point is mountable by the user.
         * @param mount_point a #GUnixMountPoint.
         * @returns %TRUE if the mount point is user mountable.
         */
        function mount_point_is_user_mountable(mount_point: Gio.UnixMountPoint): boolean;
        /**
         * Checks if the unix mount points have changed since a given unix time.
         * @param time guint64 to contain a timestamp.
         * @returns %TRUE if the mount points have changed since @time.
         */
        function mount_points_changed_since(time: number): boolean;
        /**
         * Gets a #GList of #GUnixMountPoint containing the unix mount points.
         * If `time_read` is set, it will be filled with the mount timestamp,
         * allowing for checking if the mounts have changed with
         * g_unix_mount_points_changed_since().
         * @returns a #GList of the UNIX mountpoints.
         */
        function mount_points_get(): [Gio.UnixMountPoint[], number];
        /**
         * Gets an array of [struct`Gio`.UnixMountPoint]s containing the Unix mount
         * points listed in `table_path`.
         *
         * This is a generalized version of g_unix_mount_points_get(), mainly intended
         * for internal testing use. Note that g_unix_mount_points_get() may parse
         * multiple hierarchical table files, so this function is not a direct superset
         * of its functionality.
         *
         * If there is an error reading or parsing the file, `NULL` will be returned
         * and both out parameters will be set to `0`.
         * @param table_path path to the mount points table file (for example `/etc/fstab`)
         * @returns mount   points, or `NULL` if there was an error loading them
         */
        function mount_points_get_from_file(table_path: string): [Gio.UnixMountPoint[] | null, number];
        /**
         * Checks if the unix mounts have changed since a given unix time.
         * @param time guint64 to contain a timestamp.
         * @returns %TRUE if the mounts have changed since @time.
         */
        function mounts_changed_since(time: number): boolean;
        /**
         * Gets a #GList of #GUnixMountEntry containing the unix mounts.
         * If `time_read` is set, it will be filled with the mount
         * timestamp, allowing for checking if the mounts have changed
         * with g_unix_mount_entries_changed_since().
         * @returns a #GList of the UNIX mounts.
         */
        function mounts_get(): [Gio.UnixMountEntry[], number];
        /**
         * Gets an array of [struct`Gio`.UnixMountEntry]s containing the Unix mounts
         * listed in `table_path`.
         *
         * This is a generalized version of g_unix_mount_entries_get(), mainly intended for
         * internal testing use. Note that g_unix_mount_entries_get() may parse multiple
         * hierarchical table files, so this function is not a direct superset of its
         * functionality.
         *
         * If there is an error reading or parsing the file, `NULL` will be returned
         * and both out parameters will be set to `0`.
         * @param table_path path to the mounts table file (for example `/proc/self/mountinfo`)
         * @returns mount   entries, or `NULL` if there was an error loading them
         */
        function mounts_get_from_file(table_path: string): [Gio.UnixMountEntry[] | null, number];
        interface DesktopAppLaunchCallback {
            (appinfo: Gio.DesktopAppInfo, pid: GLib.Pid): void;
        }
        module DesktopAppInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AppInfo.ConstructorProps {
                filename: string;
            }
        }

        /**
         * `GDesktopAppInfo` is an implementation of [iface`Gio`.AppInfo] based on
         * desktop files.
         *
         * Note that `<gio/gdesktopappinfo.h>` belongs to the UNIX-specific
         * GIO interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
         * file or the `GioUnix-2.0` GIR namespace when using it.
         */
        class DesktopAppInfo extends GObject.Object implements Gio.AppInfo {
            static $gtype: GObject.GType<DesktopAppInfo>;

            // Properties

            /**
             * The origin filename of this [class`Gio`.DesktopAppInfo]
             */
            get filename(): string;

            // Constructors

            constructor(properties?: Partial<DesktopAppInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](desktop_id: string): DesktopAppInfo;

            static new_from_filename(filename: string): DesktopAppInfo;

            static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo;

            // Static methods

            /**
             * Gets the user-visible display name of the
             * [‘additional application actions’](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s11.html)
             * specified by `action_name`.
             *
             * This corresponds to the `Name` key within the keyfile group for the
             * action.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param action_name the name of the action as from   [method@Gio.DesktopAppInfo.list_actions]
             */
            static get_action_name(info: Gio.DesktopAppInfo, action_name: string): string;
            /**
             * Looks up a boolean value in the keyfile backing `info`.
             *
             * The `key` is looked up in the `Desktop Entry` group.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param key the key to look up
             */
            static get_boolean(info: Gio.DesktopAppInfo, key: string): boolean;
            /**
             * Gets the categories from the desktop file.
             * @param info a [class@Gio.DesktopAppInfo]
             */
            static get_categories(info: Gio.DesktopAppInfo): string | null;
            /**
             * When `info` was created from a known filename, return it.  In some
             * situations such as a [class`Gio`.DesktopAppInfo] returned from
             * [ctor`Gio`.DesktopAppInfo.new_from_keyfile], this function will return `NULL`.
             * @param info a [class@Gio.DesktopAppInfo]
             */
            static get_filename(info: Gio.DesktopAppInfo): string | null;
            /**
             * Gets the generic name from the desktop file.
             * @param info a [class@Gio.DesktopAppInfo]
             */
            static get_generic_name(info: Gio.DesktopAppInfo): string | null;
            /**
             * Gets all applications that implement `interface`.
             *
             * An application implements an interface if that interface is listed in
             * the `Implements` line of the desktop file of the application.
             * @param _interface the name of the interface
             */
            static get_implementations(_interface: string): Gio.DesktopAppInfo[];
            /**
             * A desktop file is hidden if the
             * [`Hidden` key](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-hidden)
             * in it is set to `True`.
             * @param info a [class@Gio.DesktopAppInfo].
             */
            static get_is_hidden(info: Gio.DesktopAppInfo): boolean;
            /**
             * Gets the keywords from the desktop file.
             * @param info a [class@Gio.DesktopAppInfo]
             */
            static get_keywords(info: Gio.DesktopAppInfo): string[];
            /**
             * Looks up a localized string value in the keyfile backing `info`
             * translated to the current locale.
             *
             * The `key` is looked up in the `Desktop Entry` group.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param key the key to look up
             */
            static get_locale_string(info: Gio.DesktopAppInfo, key: string): string | null;
            /**
             * Gets the value of the
             * [`NoDisplay` key](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-nodisplay)
             *  which helps determine if the application info should be shown in menus. See
             * `G_KEY_FILE_DESKTOP_KEY_NO_DISPLAY` and [method`Gio`.AppInfo.should_show].
             * @param info a [class@Gio.DesktopAppInfo]
             */
            static get_nodisplay(info: Gio.DesktopAppInfo): boolean;
            /**
             * Checks if the application info should be shown in menus that list available
             * applications for a specific name of the desktop, based on the
             * [`OnlyShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-onlyshowin)
             * and [`NotShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-notshowin)
             * keys.
             *
             * `desktop_env` should typically be given as `NULL`, in which case the
             * `XDG_CURRENT_DESKTOP` environment variable is consulted.  If you want
             * to override the default mechanism then you may specify `desktop_env,`
             * but this is not recommended.
             *
             * Note that [method`Gio`.AppInfo.should_show] for `info` will include this check
             * (with `NULL` for `desktop_env)` as well as additional checks.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param desktop_env a string specifying a desktop name
             */
            static get_show_in(info: Gio.DesktopAppInfo, desktop_env?: string | null): boolean;
            /**
             * Retrieves the `StartupWMClass` field from `info`. This represents the
             * `WM_CLASS` property of the main window of the application, if launched
             * through `info`.
             * @param info a [class@Gio.DesktopAppInfo] that supports startup notify
             */
            static get_startup_wm_class(info: Gio.DesktopAppInfo): string | null;
            /**
             * Looks up a string value in the keyfile backing `info`.
             *
             * The `key` is looked up in the `Desktop Entry` group.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param key the key to look up
             */
            static get_string(info: Gio.DesktopAppInfo, key: string): string | null;
            /**
             * Looks up a string list value in the keyfile backing `info`.
             *
             * The `key` is looked up in the `Desktop Entry` group.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param key the key to look up
             */
            static get_string_list(info: Gio.DesktopAppInfo, key: string): string[];
            /**
             * Returns whether `key` exists in the `Desktop Entry` group
             * of the keyfile backing `info`.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param key the key to look up
             */
            static has_key(info: Gio.DesktopAppInfo, key: string): boolean;
            /**
             * Activates the named application action.
             *
             * You may only call this function on action names that were
             * returned from [method`Gio`.DesktopAppInfo.list_actions].
             *
             * Note that if the main entry of the desktop file indicates that the
             * application supports startup notification, and `launch_context` is
             * non-`NULL`, then startup notification will be used when activating the
             * action (and as such, invocation of the action on the receiving side
             * must signal the end of startup notification when it is completed).
             * This is the expected behaviour of applications declaring additional
             * actions, as per the
             * [desktop file specification](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s11.html).
             *
             * As with [method`Gio`.AppInfo.launch] there is no way to detect failures that
             * occur while using this function.
             * @param info a [class@Gio.DesktopAppInfo]
             * @param action_name the name of the action as from   [method@Gio.DesktopAppInfo.list_actions]
             * @param launch_context a [class@Gio.AppLaunchContext]
             */
            static launch_action(
                info: Gio.DesktopAppInfo,
                action_name: string,
                launch_context?: Gio.AppLaunchContext | null,
            ): void;
            /**
             * This function performs the equivalent of [method`Gio`.AppInfo.launch_uris],
             * but is intended primarily for operating system components that
             * launch applications.  Ordinary applications should use
             * [method`Gio`.AppInfo.launch_uris].
             *
             * If the application is launched via GSpawn, then `spawn_flags,` `user_setup`
             * and `user_setup_data` are used for the call to [func`GLib`.spawn_async].
             * Additionally, `pid_callback` (with `pid_callback_data)` will be called to
             * inform about the PID of the created process. See
             * [func`GLib`.spawn_async_with_pipes] for information on certain parameter
             * conditions that can enable an optimized [`posix_spawn()`](man:posix_spawn(3))
             * code path to be used.
             *
             * If application launching occurs via some other mechanism (for example, D-Bus
             * activation) then `spawn_flags,` `user_setup,` `user_setup_data,`
             * `pid_callback` and `pid_callback_data` are ignored.
             * @param appinfo a [class@Gio.DesktopAppInfo]
             * @param uris List of URIs
             * @param launch_context a [class@Gio.AppLaunchContext]
             * @param spawn_flags [flags@GLib.SpawnFlags], used for each process
             * @param user_setup a [callback@GLib.SpawnChildSetupFunc],   used once  for each process.
             * @param pid_callback Callback for child processes
             */
            static launch_uris_as_manager(
                appinfo: Gio.DesktopAppInfo,
                uris: string[],
                launch_context: Gio.AppLaunchContext | null,
                spawn_flags: GLib.SpawnFlags,
                user_setup?: GLib.SpawnChildSetupFunc | null,
                pid_callback?: Gio.DesktopAppLaunchCallback | null,
            ): boolean;
            /**
             * Equivalent to [method`Gio`.DesktopAppInfo.launch_uris_as_manager] but allows
             * you to pass in file descriptors for the stdin, stdout and stderr streams
             * of the launched process.
             *
             * If application launching occurs via some non-spawn mechanism (e.g. D-Bus
             * activation) then `stdin_fd,` `stdout_fd` and `stderr_fd` are ignored.
             * @param appinfo a [class@Gio.DesktopAppInfo]
             * @param uris List of URIs
             * @param launch_context a [class@Gio.AppLaunchContext]
             * @param spawn_flags [flags@GLib.SpawnFlags], used for each process
             * @param user_setup a   [callback@GLib.SpawnChildSetupFunc], used once for each process.
             * @param pid_callback Callback for child processes
             * @param stdin_fd file descriptor to use for child’s stdin, or `-1`
             * @param stdout_fd file descriptor to use for child’s stdout, or `-1`
             * @param stderr_fd file descriptor to use for child’s stderr, or `-1`
             */
            static launch_uris_as_manager_with_fds(
                appinfo: Gio.DesktopAppInfo,
                uris: string[],
                launch_context: Gio.AppLaunchContext | null,
                spawn_flags: GLib.SpawnFlags,
                user_setup: GLib.SpawnChildSetupFunc | null,
                pid_callback: Gio.DesktopAppLaunchCallback | null,
                stdin_fd: number,
                stdout_fd: number,
                stderr_fd: number,
            ): boolean;
            /**
             * Returns the list of
             * [‘additional application actions’](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s11.html)
             * supported on the desktop file, as per the desktop file specification.
             *
             * As per the specification, this is the list of actions that are
             * explicitly listed in the `Actions` key of the `Desktop Entry` group.
             * @param info a [class@Gio.DesktopAppInfo]
             */
            static list_actions(info: Gio.DesktopAppInfo): string[];
            /**
             * Searches desktop files for ones that match `search_string`.
             *
             * The return value is an array of strvs.  Each strv contains a list of
             * applications that matched `search_string` with an equal score.  The
             * outer list is sorted by score so that the first strv contains the
             * best-matching applications, and so on.
             * The algorithm for determining matches is undefined and may change at
             * any time.
             *
             * None of the search results are subjected to the normal validation
             * checks performed by [ctor`Gio`.DesktopAppInfo.new] (for example, checking that
             * the executable referenced by a result exists), and so it is possible for
             * [ctor`Gio`.DesktopAppInfo.new] to return `NULL` when passed an app ID returned
             * by this function. It is expected that calling code will do this when
             * subsequently creating a [class`Gio`.DesktopAppInfo] for each result.
             * @param search_string the search string to use
             */
            static search(search_string: string): string[][];
            /**
             * Sets the name of the desktop that the application is running in.
             *
             * This is used by [method`Gio`.AppInfo.should_show] and
             * [method`Gio`.DesktopAppInfo.get_show_in] to evaluate the
             * [`OnlyShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-onlyshowin)
             * and [`NotShowIn`](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html#key-notshowin)
             * keys.
             *
             * Should be called only once; subsequent calls are ignored.
             * @param desktop_env a string specifying what desktop this is
             */
            static set_desktop_env(desktop_env: string): void;

            // Inherited methods
            /**
             * Adds a content type to the application information to indicate the
             * application is capable of opening files with the given content type.
             * @param content_type a string.
             * @returns `TRUE` on success, `FALSE` on error.
             */
            add_supports_type(content_type: string): boolean;
            /**
             * Obtains the information whether the [iface`Gio`.AppInfo] can be deleted.
             * See [method`Gio`.AppInfo.delete].
             * @returns `TRUE` if @appinfo can be deleted
             */
            can_delete(): boolean;
            /**
             * Checks if a supported content type can be removed from an application.
             * @returns `TRUE` if it is possible to remove supported content types from a   given @appinfo, `FALSE` if not.
             */
            can_remove_supports_type(): boolean;
            /**
             * Tries to delete a [iface`Gio`.AppInfo].
             *
             * On some platforms, there may be a difference between user-defined
             * [iface`Gio`.AppInfo]s which can be deleted, and system-wide ones which cannot.
             * See [method`Gio`.AppInfo.can_delete].
             * @returns `TRUE` if @appinfo has been deleted
             */
            ['delete'](): boolean;
            /**
             * Creates a duplicate of a [iface`Gio`.AppInfo].
             * @returns a duplicate of @appinfo.
             */
            dup(): Gio.AppInfo;
            /**
             * Checks if two [iface`Gio`.AppInfo]s are equal.
             *
             * Note that the check *may not* compare each individual field, and only does
             * an identity check. In case detecting changes in the contents is needed,
             * program code must additionally compare relevant fields.
             * @param appinfo2 the second [iface@Gio.AppInfo].
             * @returns `TRUE` if @appinfo1 is equal to @appinfo2. `FALSE` otherwise.
             */
            equal(appinfo2: Gio.AppInfo): boolean;
            /**
             * Gets the commandline with which the application will be
             * started.
             * @returns a string containing the @appinfo’s   commandline, or `NULL` if this information is not available
             */
            get_commandline(): string | null;
            /**
             * Gets a human-readable description of an installed application.
             * @returns a string containing a description of the application @appinfo, or `NULL` if none.
             */
            get_description(): string | null;
            /**
             * Gets the display name of the application. The display name is often more
             * descriptive to the user than the name itself.
             * @returns the display name of the application for @appinfo, or the name if no display name is available.
             */
            get_display_name(): string;
            /**
             * Gets the executable’s name for the installed application.
             *
             * This is intended to be used for debugging or labelling what program is going
             * to be run. To launch the executable, use [method`Gio`.AppInfo.launch] and related
             * functions, rather than spawning the return value from this function.
             * @returns a string containing the @appinfo’s application binaries name
             */
            get_executable(): string;
            /**
             * Gets the icon for the application.
             * @returns the default [iface@Gio.Icon] for   @appinfo or `NULL` if there is no default icon.
             */
            get_icon(): Gio.Icon | null;
            /**
             * Gets the ID of an application. An id is a string that identifies the
             * application. The exact format of the id is platform dependent. For instance,
             * on Unix this is the desktop file id from the xdg menu specification.
             *
             * Note that the returned ID may be `NULL`, depending on how the `appinfo` has
             * been constructed.
             * @returns a string containing the application’s ID.
             */
            get_id(): string | null;
            /**
             * Gets the installed name of the application.
             * @returns the name of the application for @appinfo.
             */
            get_name(): string;
            /**
             * Retrieves the list of content types that `app_info` claims to support.
             * If this information is not provided by the environment, this function
             * will return `NULL`.
             *
             * This function does not take in consideration associations added with
             * [method`Gio`.AppInfo.add_supports_type], but only those exported directly by
             * the application.
             * @returns a list of content types.
             */
            get_supported_types(): string[];
            /**
             * Launches the application. Passes `files` to the launched application
             * as arguments, using the optional `context` to get information
             * about the details of the launcher (like what screen it is on).
             * On error, `error` will be set accordingly.
             *
             * To launch the application without arguments pass a `NULL` `files` list.
             *
             * Note that even if the launch is successful the application launched
             * can fail to start if it runs into problems during startup. There is
             * no way to detect this.
             *
             * Some URIs can be changed when passed through a GFile (for instance
             * unsupported URIs with strange formats like mailto:), so if you have
             * a textual URI you want to pass in as argument, consider using
             * [method`Gio`.AppInfo.launch_uris] instead.
             *
             * The launched application inherits the environment of the launching
             * process, but it can be modified with [method`Gio`.AppLaunchContext.setenv]
             * and [method`Gio`.AppLaunchContext.unsetenv].
             *
             * On UNIX, this function sets the `GIO_LAUNCHED_DESKTOP_FILE`
             * environment variable with the path of the launched desktop file and
             * `GIO_LAUNCHED_DESKTOP_FILE_PID` to the process id of the launched
             * process. This can be used to ignore `GIO_LAUNCHED_DESKTOP_FILE`,
             * should it be inherited by further processes. The `DISPLAY`,
             * `XDG_ACTIVATION_TOKEN` and `DESKTOP_STARTUP_ID` environment
             * variables are also set, based on information provided in `context`.
             * @param files a list of [iface@Gio.File] objects
             * @param context the launch context
             * @returns `TRUE` on successful launch, `FALSE` otherwise.
             */
            launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean;
            /**
             * Launches the application. This passes the `uris` to the launched application
             * as arguments, using the optional `context` to get information
             * about the details of the launcher (like what screen it is on).
             * On error, `error` will be set accordingly. If the application only supports
             * one URI per invocation as part of their command-line, multiple instances
             * of the application will be spawned.
             *
             * To launch the application without arguments pass a `NULL` `uris` list.
             *
             * Note that even if the launch is successful the application launched
             * can fail to start if it runs into problems during startup. There is
             * no way to detect this.
             * @param uris a list of URIs to launch.
             * @param context the launch context
             * @returns `TRUE` on successful launch, `FALSE` otherwise.
             */
            launch_uris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean;
            /**
             * Async version of [method`Gio`.AppInfo.launch_uris].
             *
             * The `callback` is invoked immediately after the application launch, but it
             * waits for activation in case of D-Bus–activated applications and also provides
             * extended error information for sandboxed applications, see notes for
             * [func`Gio`.AppInfo.launch_default_for_uri_async].
             * @param uris a list of URIs to launch.
             * @param context the launch context
             * @param cancellable a [class@Gio.Cancellable]
             * @param callback a [type@Gio.AsyncReadyCallback] to call   when the request is done
             */
            launch_uris_async(
                uris?: string[] | null,
                context?: Gio.AppLaunchContext | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a [method`Gio`.AppInfo.launch_uris_async] operation.
             * @param result the async result
             * @returns `TRUE` on successful launch, `FALSE` otherwise.
             */
            launch_uris_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes a supported type from an application, if possible.
             * @param content_type a string.
             * @returns `TRUE` on success, `FALSE` on error.
             */
            remove_supports_type(content_type: string): boolean;
            /**
             * Sets the application as the default handler for the given file extension.
             * @param extension a string containing the file extension (without   the dot).
             * @returns `TRUE` on success, `FALSE` on error.
             */
            set_as_default_for_extension(extension: string): boolean;
            /**
             * Sets the application as the default handler for a given type.
             * @param content_type the content type.
             * @returns `TRUE` on success, `FALSE` on error.
             */
            set_as_default_for_type(content_type: string): boolean;
            /**
             * Sets the application as the last used application for a given type. This
             * will make the application appear as first in the list returned by
             * [func`Gio`.AppInfo.get_recommended_for_type], regardless of the default
             * application for that content type.
             * @param content_type the content type.
             * @returns `TRUE` on success, `FALSE` on error.
             */
            set_as_last_used_for_type(content_type: string): boolean;
            /**
             * Checks if the application info should be shown in menus that
             * list available applications.
             * @returns `TRUE` if the @appinfo should be shown, `FALSE` otherwise.
             */
            should_show(): boolean;
            /**
             * Checks if the application accepts files as arguments.
             * @returns `TRUE` if the @appinfo supports files.
             */
            supports_files(): boolean;
            /**
             * Checks if the application supports reading files and directories from URIs.
             * @returns `TRUE` if the @appinfo supports URIs.
             */
            supports_uris(): boolean;
            /**
             * Adds a content type to the application information to indicate the
             * application is capable of opening files with the given content type.
             * @param content_type a string.
             */
            vfunc_add_supports_type(content_type: string): boolean;
            /**
             * Obtains the information whether the [iface`Gio`.AppInfo] can be deleted.
             * See [method`Gio`.AppInfo.delete].
             */
            vfunc_can_delete(): boolean;
            /**
             * Checks if a supported content type can be removed from an application.
             */
            vfunc_can_remove_supports_type(): boolean;
            /**
             * Tries to delete a [iface`Gio`.AppInfo].
             *
             * On some platforms, there may be a difference between user-defined
             * [iface`Gio`.AppInfo]s which can be deleted, and system-wide ones which cannot.
             * See [method`Gio`.AppInfo.can_delete].
             */
            vfunc_do_delete(): boolean;
            /**
             * Creates a duplicate of a [iface`Gio`.AppInfo].
             */
            vfunc_dup(): Gio.AppInfo;
            /**
             * Checks if two [iface`Gio`.AppInfo]s are equal.
             *
             * Note that the check *may not* compare each individual field, and only does
             * an identity check. In case detecting changes in the contents is needed,
             * program code must additionally compare relevant fields.
             * @param appinfo2 the second [iface@Gio.AppInfo].
             */
            vfunc_equal(appinfo2: Gio.AppInfo): boolean;
            /**
             * Gets the commandline with which the application will be
             * started.
             */
            vfunc_get_commandline(): string | null;
            /**
             * Gets a human-readable description of an installed application.
             */
            vfunc_get_description(): string | null;
            /**
             * Gets the display name of the application. The display name is often more
             * descriptive to the user than the name itself.
             */
            vfunc_get_display_name(): string;
            /**
             * Gets the executable’s name for the installed application.
             *
             * This is intended to be used for debugging or labelling what program is going
             * to be run. To launch the executable, use [method`Gio`.AppInfo.launch] and related
             * functions, rather than spawning the return value from this function.
             */
            vfunc_get_executable(): string;
            /**
             * Gets the icon for the application.
             */
            vfunc_get_icon(): Gio.Icon | null;
            /**
             * Gets the ID of an application. An id is a string that identifies the
             * application. The exact format of the id is platform dependent. For instance,
             * on Unix this is the desktop file id from the xdg menu specification.
             *
             * Note that the returned ID may be `NULL`, depending on how the `appinfo` has
             * been constructed.
             */
            vfunc_get_id(): string | null;
            /**
             * Gets the installed name of the application.
             */
            vfunc_get_name(): string;
            /**
             * Retrieves the list of content types that `app_info` claims to support.
             * If this information is not provided by the environment, this function
             * will return `NULL`.
             *
             * This function does not take in consideration associations added with
             * [method`Gio`.AppInfo.add_supports_type], but only those exported directly by
             * the application.
             */
            vfunc_get_supported_types(): string[];
            /**
             * Launches the application. Passes `files` to the launched application
             * as arguments, using the optional `context` to get information
             * about the details of the launcher (like what screen it is on).
             * On error, `error` will be set accordingly.
             *
             * To launch the application without arguments pass a `NULL` `files` list.
             *
             * Note that even if the launch is successful the application launched
             * can fail to start if it runs into problems during startup. There is
             * no way to detect this.
             *
             * Some URIs can be changed when passed through a GFile (for instance
             * unsupported URIs with strange formats like mailto:), so if you have
             * a textual URI you want to pass in as argument, consider using
             * [method`Gio`.AppInfo.launch_uris] instead.
             *
             * The launched application inherits the environment of the launching
             * process, but it can be modified with [method`Gio`.AppLaunchContext.setenv]
             * and [method`Gio`.AppLaunchContext.unsetenv].
             *
             * On UNIX, this function sets the `GIO_LAUNCHED_DESKTOP_FILE`
             * environment variable with the path of the launched desktop file and
             * `GIO_LAUNCHED_DESKTOP_FILE_PID` to the process id of the launched
             * process. This can be used to ignore `GIO_LAUNCHED_DESKTOP_FILE`,
             * should it be inherited by further processes. The `DISPLAY`,
             * `XDG_ACTIVATION_TOKEN` and `DESKTOP_STARTUP_ID` environment
             * variables are also set, based on information provided in `context`.
             * @param files a list of [iface@Gio.File] objects
             * @param context the launch context
             */
            vfunc_launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean;
            /**
             * Launches the application. This passes the `uris` to the launched application
             * as arguments, using the optional `context` to get information
             * about the details of the launcher (like what screen it is on).
             * On error, `error` will be set accordingly. If the application only supports
             * one URI per invocation as part of their command-line, multiple instances
             * of the application will be spawned.
             *
             * To launch the application without arguments pass a `NULL` `uris` list.
             *
             * Note that even if the launch is successful the application launched
             * can fail to start if it runs into problems during startup. There is
             * no way to detect this.
             * @param uris a list of URIs to launch.
             * @param context the launch context
             */
            vfunc_launch_uris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean;
            /**
             * Async version of [method`Gio`.AppInfo.launch_uris].
             *
             * The `callback` is invoked immediately after the application launch, but it
             * waits for activation in case of D-Bus–activated applications and also provides
             * extended error information for sandboxed applications, see notes for
             * [func`Gio`.AppInfo.launch_default_for_uri_async].
             * @param uris a list of URIs to launch.
             * @param context the launch context
             * @param cancellable a [class@Gio.Cancellable]
             * @param callback a [type@Gio.AsyncReadyCallback] to call   when the request is done
             */
            vfunc_launch_uris_async(
                uris?: string[] | null,
                context?: Gio.AppLaunchContext | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a [method`Gio`.AppInfo.launch_uris_async] operation.
             * @param result the async result
             */
            vfunc_launch_uris_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes a supported type from an application, if possible.
             * @param content_type a string.
             */
            vfunc_remove_supports_type(content_type: string): boolean;
            /**
             * Sets the application as the default handler for the given file extension.
             * @param extension a string containing the file extension (without   the dot).
             */
            vfunc_set_as_default_for_extension(extension: string): boolean;
            /**
             * Sets the application as the default handler for a given type.
             * @param content_type the content type.
             */
            vfunc_set_as_default_for_type(content_type: string): boolean;
            /**
             * Sets the application as the last used application for a given type. This
             * will make the application appear as first in the list returned by
             * [func`Gio`.AppInfo.get_recommended_for_type], regardless of the default
             * application for that content type.
             * @param content_type the content type.
             */
            vfunc_set_as_last_used_for_type(content_type: string): boolean;
            /**
             * Checks if the application info should be shown in menus that
             * list available applications.
             */
            vfunc_should_show(): boolean;
            /**
             * Checks if the application accepts files as arguments.
             */
            vfunc_supports_files(): boolean;
            /**
             * Checks if the application supports reading files and directories from URIs.
             */
            vfunc_supports_uris(): boolean;
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
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
            ): GObject.Binding;
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
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
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
            getv(names: string[], values: (GObject.Value | any)[]): void;
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
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
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
            ref_sink(): GObject.Object;
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
            watch_closure(closure: GObject.Closure): void;
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
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
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
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
            vfunc_notify(pspec: GObject.ParamSpec): void;
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
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module FDMessage {
            // Constructor properties interface

            interface ConstructorProps extends Gio.SocketControlMessage.ConstructorProps {
                fd_list: Gio.UnixFDList;
                fdList: Gio.UnixFDList;
            }
        }

        /**
         * This [class`Gio`.SocketControlMessage] contains a [class`Gio`.UnixFDList].
         * It may be sent using [method`Gio`.Socket.send_message] and received using
         * [method`Gio`.Socket.receive_message] over UNIX sockets (ie: sockets in the
         * `G_SOCKET_FAMILY_UNIX` family). The file descriptors are copied
         * between processes by the kernel.
         *
         * For an easier way to send and receive file descriptors over
         * stream-oriented UNIX sockets, see [method`Gio`.UnixConnection.send_fd] and
         * [method`Gio`.UnixConnection.receive_fd].
         *
         * Note that `<gio/gunixfdmessage.h>` belongs to the UNIX-specific GIO
         * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
         * file or the `GioUnix-2.0` GIR namespace when using it.
         */
        class FDMessage extends Gio.SocketControlMessage {
            static $gtype: GObject.GType<FDMessage>;

            // Properties

            /**
             * The [class`Gio`.UnixFDList] object to send with the message.
             */
            get fd_list(): Gio.UnixFDList;
            /**
             * The [class`Gio`.UnixFDList] object to send with the message.
             */
            get fdList(): Gio.UnixFDList;

            // Constructors

            constructor(properties?: Partial<FDMessage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): FDMessage;

            static new_with_fd_list(fd_list: Gio.UnixFDList): FDMessage;

            // Static methods

            /**
             * Adds a file descriptor to `message`.
             *
             * The file descriptor is duplicated using dup(). You keep your copy
             * of the descriptor and the copy contained in `message` will be closed
             * when `message` is finalized.
             *
             * A possible cause of failure is exceeding the per-process or
             * system-wide file descriptor limit.
             * @param message a #GUnixFDMessage
             * @param fd a valid open file descriptor
             */
            static append_fd(message: Gio.UnixFDMessage, fd: number): boolean;
            /**
             * Gets the #GUnixFDList contained in `message`.  This function does not
             * return a reference to the caller, but the returned list is valid for
             * the lifetime of `message`.
             * @param message a #GUnixFDMessage
             */
            static get_fd_list(message: Gio.UnixFDMessage): Gio.UnixFDList;
            /**
             * Returns the array of file descriptors that is contained in this
             * object.
             *
             * After this call, the descriptors are no longer contained in
             * `message`. Further calls will return an empty list (unless more
             * descriptors have been added).
             *
             * The return result of this function must be freed with g_free().
             * The caller is also responsible for closing all of the file
             * descriptors.
             *
             * If `length` is non-%NULL then it is set to the number of file
             * descriptors in the returned array. The returned array is also
             * terminated with -1.
             *
             * This function never returns %NULL. In case there are no file
             * descriptors contained in `message,` an empty array is returned.
             * @param message a #GUnixFDMessage
             */
            static steal_fds(message: Gio.UnixFDMessage): number[];
        }

        module InputStream {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.InputStream.ConstructorProps,
                    Gio.PollableInputStream.ConstructorProps,
                    FileDescriptorBased.ConstructorProps {
                close_fd: boolean;
                closeFd: boolean;
                fd: number;
            }
        }

        /**
         * `GUnixInputStream` implements [class`Gio`.InputStream] for reading from a UNIX
         * file descriptor, including asynchronous operations. (If the file
         * descriptor refers to a socket or pipe, this will use `poll()` to do
         * asynchronous I/O. If it refers to a regular file, it will fall back
         * to doing asynchronous I/O in another thread.)
         *
         * Note that `<gio/gunixinputstream.h>` belongs to the UNIX-specific GIO
         * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config
         * file or the `GioUnix-2.0` GIR namespace when using it.
         */
        class InputStream extends Gio.InputStream implements Gio.PollableInputStream, FileDescriptorBased {
            static $gtype: GObject.GType<InputStream>;

            // Properties

            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            get close_fd(): boolean;
            set close_fd(val: boolean);
            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            get closeFd(): boolean;
            set closeFd(val: boolean);
            /**
             * The file descriptor that the stream reads from.
             */
            get fd(): number;

            // Constructors

            constructor(properties?: Partial<InputStream.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](fd: number, close_fd: boolean): InputStream;

            // Static methods

            /**
             * Returns whether the file descriptor of `stream` will be
             * closed when the stream is closed.
             * @param stream a #GUnixInputStream
             */
            static get_close_fd(stream: Gio.UnixInputStream): boolean;
            /**
             * Return the UNIX file descriptor that the stream reads from.
             * @param stream a #GUnixInputStream
             */
            static get_fd(stream: Gio.UnixInputStream): number;
            /**
             * Sets whether the file descriptor of `stream` shall be closed
             * when the stream is closed.
             * @param stream a #GUnixInputStream
             * @param close_fd %TRUE to close the file descriptor when done
             */
            static set_close_fd(stream: Gio.UnixInputStream, close_fd: boolean): void;

            // Inherited methods
            /**
             * Checks if `stream` is actually pollable. Some classes may implement
             * #GPollableInputStream but have only certain instances of that class
             * be pollable. If this method returns %FALSE, then the behavior of
             * other #GPollableInputStream methods is undefined.
             *
             * For any given stream, the value returned by this method is constant;
             * a stream cannot switch from pollable to non-pollable or vice versa.
             * @returns %TRUE if @stream is pollable, %FALSE if not.
             */
            can_poll(): boolean;
            /**
             * Creates a #GSource that triggers when `stream` can be read, or
             * `cancellable` is triggered or an error occurs. The callback on the
             * source is of the #GPollableSourceFunc type.
             *
             * As with g_pollable_input_stream_is_readable(), it is possible that
             * the stream may not actually be readable even after the source
             * triggers, so you should use g_pollable_input_stream_read_nonblocking()
             * rather than g_input_stream_read() from the callback.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             * @returns a new #GSource
             */
            create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
            /**
             * Checks if `stream` can be read.
             *
             * Note that some stream types may not be able to implement this 100%
             * reliably, and it is possible that a call to g_input_stream_read()
             * after this returns %TRUE would still block. To guarantee
             * non-blocking behavior, you should always use
             * g_pollable_input_stream_read_nonblocking(), which will return a
             * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @returns %TRUE if @stream is readable, %FALSE if not. If an error   has occurred on @stream, this will result in   g_pollable_input_stream_is_readable() returning %TRUE, and the   next attempt to read will return the error.
             */
            is_readable(): boolean;
            /**
             * Attempts to read up to `count` bytes from `stream` into `buffer,` as
             * with g_input_stream_read(). If `stream` is not currently readable,
             * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
             * use g_pollable_input_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is readable.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             * @returns the number of bytes read, or -1 on error (including   %G_IO_ERROR_WOULD_BLOCK).
             */
            read_nonblocking(cancellable?: Gio.Cancellable | null): [number, Uint8Array];
            /**
             * Checks if `stream` is actually pollable. Some classes may implement
             * #GPollableInputStream but have only certain instances of that class
             * be pollable. If this method returns %FALSE, then the behavior of
             * other #GPollableInputStream methods is undefined.
             *
             * For any given stream, the value returned by this method is constant;
             * a stream cannot switch from pollable to non-pollable or vice versa.
             */
            vfunc_can_poll(): boolean;
            /**
             * Creates a #GSource that triggers when `stream` can be read, or
             * `cancellable` is triggered or an error occurs. The callback on the
             * source is of the #GPollableSourceFunc type.
             *
             * As with g_pollable_input_stream_is_readable(), it is possible that
             * the stream may not actually be readable even after the source
             * triggers, so you should use g_pollable_input_stream_read_nonblocking()
             * rather than g_input_stream_read() from the callback.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
            /**
             * Checks if `stream` can be read.
             *
             * Note that some stream types may not be able to implement this 100%
             * reliably, and it is possible that a call to g_input_stream_read()
             * after this returns %TRUE would still block. To guarantee
             * non-blocking behavior, you should always use
             * g_pollable_input_stream_read_nonblocking(), which will return a
             * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             */
            vfunc_is_readable(): boolean;
            /**
             * Attempts to read up to `count` bytes from `stream` into `buffer,` as
             * with g_input_stream_read(). If `stream` is not currently readable,
             * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
             * use g_pollable_input_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is readable.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             */
            vfunc_read_nonblocking(): [number, Uint8Array | null];
            /**
             * Clears the pending flag on `stream`.
             */
            clear_pending(): void;
            /**
             * Closes the stream, releasing resources related to it.
             *
             * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
             * Closing a stream multiple times will not return an error.
             *
             * Streams will be automatically closed when the last reference
             * is dropped, but you might want to call this function to make sure
             * resources are released as early as possible.
             *
             * Some streams might keep the backing store of the stream (e.g. a file descriptor)
             * open after the stream is closed. See the documentation for the individual
             * stream for details.
             *
             * On failure the first error that happened will be reported, but the close
             * operation will finish as much as possible. A stream that failed to
             * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
             * is important to check and report the error to the user.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * Cancelling a close will still leave the stream closed, but some streams
             * can use a faster close that doesn't block to e.g. check errors.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE on success, %FALSE on failure
             */
            close(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Requests an asynchronous closes of the stream, releasing resources related to it.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_close_finish() to get the result of the
             * operation.
             *
             * For behaviour details see g_input_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional cancellable object
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            close_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
             * @param result a #GAsyncResult.
             * @returns %TRUE if the stream was closed successfully.
             */
            close_finish(result: Gio.AsyncResult): boolean;
            /**
             * Checks if an input stream has pending actions.
             * @returns %TRUE if @stream has pending actions.
             */
            has_pending(): boolean;
            /**
             * Checks if an input stream is closed.
             * @returns %TRUE if the stream is closed.
             */
            is_closed(): boolean;
            /**
             * Tries to read `count` bytes from the stream into the buffer starting at
             * `buffer`. Will block during this read.
             *
             * If count is zero returns zero and does nothing. A value of `count`
             * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer is returned.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
             * at any position, and this function doesn't nul-terminate the `buffer`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * On error -1 is returned and `error` is set accordingly.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns Number of bytes read, or -1 on error, or 0 on end of file.
             */
            read(cancellable?: Gio.Cancellable | null): [number, Uint8Array];
            /**
             * Tries to read `count` bytes from the stream into the buffer starting at
             * `buffer`. Will block during this read.
             *
             * This function is similar to g_input_stream_read(), except it tries to
             * read as many bytes as requested, only stopping on an error or end of stream.
             *
             * On a successful read of `count` bytes, or if we reached the end of the
             * stream,  %TRUE is returned, and `bytes_read` is set to the number of bytes
             * read into `buffer`.
             *
             * If there is an error during the operation %FALSE is returned and `error`
             * is set to indicate the error status.
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_read` will be set to the number of bytes that were successfully
             * read before the error was encountered.  This functionality is only
             * available from C.  If you need it from another language then you must
             * write your own loop around g_input_stream_read().
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE on success, %FALSE if there was an error
             */
            read_all(cancellable?: Gio.Cancellable | null): [boolean, Uint8Array, number];
            /**
             * Request an asynchronous read of `count` bytes from the stream into the
             * buffer starting at `buffer`.
             *
             * This is the asynchronous equivalent of [method`InputStream`.read_all].
             *
             * Call [method`InputStream`.read_all_finish] to collect the result.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_all_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Uint8Array;
            /**
             * Finishes an asynchronous stream read operation started with
             * [method`InputStream`.read_all_async].
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_read` will be set to the number of bytes that were successfully
             * read before the error was encountered.  This functionality is only
             * available from C.  If you need it from another language then you must
             * write your own loop around g_input_stream_read_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE if there was an error
             */
            read_all_finish(result: Gio.AsyncResult): [boolean, number];
            /**
             * Request an asynchronous read of `count` bytes from the stream into the buffer
             * starting at `buffer`. When the operation is finished `callback` will be called.
             * You can then call g_input_stream_read_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed on `stream,` and will
             * result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer will be passed to the
             * callback. It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to read
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value) will
             * be executed before an outstanding request with lower priority. Default
             * priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Uint8Array;
            /**
             * Like g_input_stream_read(), this tries to read `count` bytes from
             * the stream in a blocking fashion. However, rather than reading into
             * a user-supplied buffer, this will create a new #GBytes containing
             * the data that was read. This may be easier to use from language
             * bindings.
             *
             * If count is zero, returns a zero-length #GBytes and does nothing. A
             * value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, a new #GBytes is returned. It is not an error if the
             * size of this object is not the same as the requested size, as it
             * can happen e.g. near the end of a file. A zero-length #GBytes is
             * returned on end of file (or if `count` is zero), but never
             * otherwise.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * On error %NULL is returned and `error` is set accordingly.
             * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns a new #GBytes, or %NULL on error
             */
            read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes;
            /**
             * Request an asynchronous read of `count` bytes from the stream into a
             * new #GBytes. When the operation is finished `callback` will be
             * called. You can then call g_input_stream_read_bytes_finish() to get the
             * result of the operation.
             *
             * During an async request no other sync and async calls are allowed
             * on `stream,` and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the new #GBytes will be passed to the callback. It is
             * not an error if this is smaller than the requested size, as it can
             * happen e.g. near the end of a file, but generally we try to read as
             * many bytes as requested. Zero is returned on end of file (or if
             * `count` is zero), but never otherwise.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param count the number of bytes that will be read from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_bytes_async(
                count: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous stream read-into-#GBytes operation.
             * @param result a #GAsyncResult.
             * @returns the newly-allocated #GBytes, or %NULL on error
             */
            read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes;
            /**
             * Finishes an asynchronous stream read operation.
             * @param result a #GAsyncResult.
             * @returns number of bytes read in, or -1 on error, or 0 on end of file.
             */
            read_finish(result: Gio.AsyncResult): number;
            /**
             * Sets `stream` to have actions pending. If the pending flag is
             * already set or `stream` is closed, it will return %FALSE and set
             * `error`.
             * @returns %TRUE if pending was previously unset and is now set.
             */
            set_pending(): boolean;
            /**
             * Tries to skip `count` bytes from the stream. Will block during the operation.
             *
             * This is identical to g_input_stream_read(), from a behaviour standpoint,
             * but the bytes that are skipped are not returned to the user. Some
             * streams have an implementation that is more efficient than reading the data.
             *
             * This function is optional for inherited classes, as the default implementation
             * emulates it using read.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             * @param count the number of bytes that will be skipped from the stream
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns Number of bytes skipped, or -1 on error
             */
            skip(count: number, cancellable?: Gio.Cancellable | null): number;
            /**
             * Request an asynchronous skip of `count` bytes from the stream.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_skip_finish() to get the result
             * of the operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes skipped will be passed to the callback.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to skip
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero), but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value)
             * will be executed before an outstanding request with lower priority.
             * Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to
             * implement asynchronicity, so they are optional for inheriting classes.
             * However, if you override one, you must override all.
             * @param count the number of bytes that will be skipped from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            skip_async(
                count: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stream skip operation.
             * @param result a #GAsyncResult.
             * @returns the size of the bytes skipped, or `-1` on error.
             */
            skip_finish(result: Gio.AsyncResult): number;
            /**
             * Requests an asynchronous closes of the stream, releasing resources related to it.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_close_finish() to get the result of the
             * operation.
             *
             * For behaviour details see g_input_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional cancellable object
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_close_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
             * @param result a #GAsyncResult.
             */
            vfunc_close_finish(result: Gio.AsyncResult): boolean;
            vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Request an asynchronous read of `count` bytes from the stream into the buffer
             * starting at `buffer`. When the operation is finished `callback` will be called.
             * You can then call g_input_stream_read_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed on `stream,` and will
             * result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer will be passed to the
             * callback. It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to read
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value) will
             * be executed before an outstanding request with lower priority. Default
             * priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_read_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Uint8Array | null;
            /**
             * Finishes an asynchronous stream read operation.
             * @param result a #GAsyncResult.
             */
            vfunc_read_finish(result: Gio.AsyncResult): number;
            vfunc_read_fn(buffer: any | null, count: number, cancellable?: Gio.Cancellable | null): number;
            /**
             * Tries to skip `count` bytes from the stream. Will block during the operation.
             *
             * This is identical to g_input_stream_read(), from a behaviour standpoint,
             * but the bytes that are skipped are not returned to the user. Some
             * streams have an implementation that is more efficient than reading the data.
             *
             * This function is optional for inherited classes, as the default implementation
             * emulates it using read.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             * @param count the number of bytes that will be skipped from the stream
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number;
            /**
             * Request an asynchronous skip of `count` bytes from the stream.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_skip_finish() to get the result
             * of the operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes skipped will be passed to the callback.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to skip
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero), but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value)
             * will be executed before an outstanding request with lower priority.
             * Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to
             * implement asynchronicity, so they are optional for inheriting classes.
             * However, if you override one, you must override all.
             * @param count the number of bytes that will be skipped from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_skip_async(
                count: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stream skip operation.
             * @param result a #GAsyncResult.
             */
            vfunc_skip_finish(result: Gio.AsyncResult): number;
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
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
            ): GObject.Binding;
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
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
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
            getv(names: string[], values: (GObject.Value | any)[]): void;
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
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
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
            ref_sink(): GObject.Object;
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
            watch_closure(closure: GObject.Closure): void;
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
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
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
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
            vfunc_notify(pspec: GObject.ParamSpec): void;
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
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module MountMonitor {
            // Signal callback interfaces

            interface MountpointsChanged {
                (): void;
            }

            interface MountsChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Watches #GUnixMounts for changes.
         */
        class MountMonitor extends GObject.Object {
            static $gtype: GObject.GType<MountMonitor>;

            // Constructors

            constructor(properties?: Partial<MountMonitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MountMonitor;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'mountpoints-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'mountpoints-changed', callback: (_source: this) => void): number;
            emit(signal: 'mountpoints-changed'): void;
            connect(signal: 'mounts-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'mounts-changed', callback: (_source: this) => void): number;
            emit(signal: 'mounts-changed'): void;

            // Static methods

            /**
             * Gets the #GUnixMountMonitor for the current thread-default main
             * context.
             *
             * The mount monitor can be used to monitor for changes to the list of
             * mounted filesystems as well as the list of mount points (ie: fstab
             * entries).
             *
             * You must only call g_object_unref() on the return value from under
             * the same main context as you called this function.
             */
            static get(): Gio.UnixMountMonitor;
            /**
             * This function does nothing.
             *
             * Before 2.44, this was a partially-effective way of controlling the
             * rate at which events would be reported under some uncommon
             * circumstances.  Since `mount_monitor` is a singleton, it also meant
             * that calling this function would have side effects for other users of
             * the monitor.
             * @param mount_monitor a #GUnixMountMonitor
             * @param limit_msec a integer with the limit in milliseconds to     poll for changes.
             */
            static set_rate_limit(mount_monitor: Gio.UnixMountMonitor, limit_msec: number): void;
        }

        module OutputStream {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.OutputStream.ConstructorProps,
                    Gio.PollableOutputStream.ConstructorProps,
                    FileDescriptorBased.ConstructorProps {
                close_fd: boolean;
                closeFd: boolean;
                fd: number;
            }
        }

        /**
         * `GUnixOutputStream` implements [class`Gio`.OutputStream] for writing to a UNIX
         * file descriptor, including asynchronous operations. (If the file
         * descriptor refers to a socket or pipe, this will use `poll()` to do
         * asynchronous I/O. If it refers to a regular file, it will fall back
         * to doing asynchronous I/O in another thread.)
         *
         * Note that `<gio/gunixoutputstream.h>` belongs to the UNIX-specific GIO
         * interfaces, thus you have to use the `gio-unix-2.0.pc` pkg-config file
         * file or the `GioUnix-2.0` GIR namespace when using it.
         */
        class OutputStream extends Gio.OutputStream implements Gio.PollableOutputStream, FileDescriptorBased {
            static $gtype: GObject.GType<OutputStream>;

            // Properties

            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            get close_fd(): boolean;
            set close_fd(val: boolean);
            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            get closeFd(): boolean;
            set closeFd(val: boolean);
            /**
             * The file descriptor that the stream writes to.
             */
            get fd(): number;

            // Constructors

            constructor(properties?: Partial<OutputStream.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](fd: number, close_fd: boolean): OutputStream;

            // Static methods

            /**
             * Returns whether the file descriptor of `stream` will be
             * closed when the stream is closed.
             * @param stream a #GUnixOutputStream
             */
            static get_close_fd(stream: Gio.UnixOutputStream): boolean;
            /**
             * Return the UNIX file descriptor that the stream writes to.
             * @param stream a #GUnixOutputStream
             */
            static get_fd(stream: Gio.UnixOutputStream): number;
            /**
             * Sets whether the file descriptor of `stream` shall be closed
             * when the stream is closed.
             * @param stream a #GUnixOutputStream
             * @param close_fd %TRUE to close the file descriptor when done
             */
            static set_close_fd(stream: Gio.UnixOutputStream, close_fd: boolean): void;

            // Inherited methods
            /**
             * Checks if `stream` is actually pollable. Some classes may implement
             * #GPollableOutputStream but have only certain instances of that
             * class be pollable. If this method returns %FALSE, then the behavior
             * of other #GPollableOutputStream methods is undefined.
             *
             * For any given stream, the value returned by this method is constant;
             * a stream cannot switch from pollable to non-pollable or vice versa.
             * @returns %TRUE if @stream is pollable, %FALSE if not.
             */
            can_poll(): boolean;
            /**
             * Creates a #GSource that triggers when `stream` can be written, or
             * `cancellable` is triggered or an error occurs. The callback on the
             * source is of the #GPollableSourceFunc type.
             *
             * As with g_pollable_output_stream_is_writable(), it is possible that
             * the stream may not actually be writable even after the source
             * triggers, so you should use g_pollable_output_stream_write_nonblocking()
             * rather than g_output_stream_write() from the callback.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             * @returns a new #GSource
             */
            create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
            /**
             * Checks if `stream` can be written.
             *
             * Note that some stream types may not be able to implement this 100%
             * reliably, and it is possible that a call to g_output_stream_write()
             * after this returns %TRUE would still block. To guarantee
             * non-blocking behavior, you should always use
             * g_pollable_output_stream_write_nonblocking(), which will return a
             * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             * @returns %TRUE if @stream is writable, %FALSE if not. If an error   has occurred on @stream, this will result in   g_pollable_output_stream_is_writable() returning %TRUE, and the   next attempt to write will return the error.
             */
            is_writable(): boolean;
            /**
             * Attempts to write up to `count` bytes from `buffer` to `stream,` as
             * with g_output_stream_write(). If `stream` is not currently writable,
             * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
             * use g_pollable_output_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is writable.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * Also note that if %G_IO_ERROR_WOULD_BLOCK is returned some underlying
             * transports like D/TLS require that you re-send the same `buffer` and
             * `count` in the next write call.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             * @param buffer a buffer to write     data from
             * @param cancellable a #GCancellable, or %NULL
             * @returns the number of bytes written, or -1 on error (including   %G_IO_ERROR_WOULD_BLOCK).
             */
            write_nonblocking(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): number;
            /**
             * Attempts to write the bytes contained in the `n_vectors` `vectors` to `stream,`
             * as with g_output_stream_writev(). If `stream` is not currently writable,
             * this will immediately return %`G_POLLABLE_RETURN_WOULD_BLOCK,` and you can
             * use g_pollable_output_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is writable. `error` will *not* be
             * set in that case.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * Also note that if %G_POLLABLE_RETURN_WOULD_BLOCK is returned some underlying
             * transports like D/TLS require that you re-send the same `vectors` and
             * `n_vectors` in the next write call.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             * @param vectors the buffer containing the #GOutputVectors to write.
             * @param cancellable a #GCancellable, or %NULL
             * @returns %@G_POLLABLE_RETURN_OK on success, %G_POLLABLE_RETURN_WOULD_BLOCK if the stream is not currently writable (and @error is *not* set), or %G_POLLABLE_RETURN_FAILED if there was an error in which case @error will be set.
             */
            writev_nonblocking(
                vectors: Gio.OutputVector[],
                cancellable?: Gio.Cancellable | null,
            ): [Gio.PollableReturn, number];
            /**
             * Checks if `stream` is actually pollable. Some classes may implement
             * #GPollableOutputStream but have only certain instances of that
             * class be pollable. If this method returns %FALSE, then the behavior
             * of other #GPollableOutputStream methods is undefined.
             *
             * For any given stream, the value returned by this method is constant;
             * a stream cannot switch from pollable to non-pollable or vice versa.
             */
            vfunc_can_poll(): boolean;
            /**
             * Creates a #GSource that triggers when `stream` can be written, or
             * `cancellable` is triggered or an error occurs. The callback on the
             * source is of the #GPollableSourceFunc type.
             *
             * As with g_pollable_output_stream_is_writable(), it is possible that
             * the stream may not actually be writable even after the source
             * triggers, so you should use g_pollable_output_stream_write_nonblocking()
             * rather than g_output_stream_write() from the callback.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
            /**
             * Checks if `stream` can be written.
             *
             * Note that some stream types may not be able to implement this 100%
             * reliably, and it is possible that a call to g_output_stream_write()
             * after this returns %TRUE would still block. To guarantee
             * non-blocking behavior, you should always use
             * g_pollable_output_stream_write_nonblocking(), which will return a
             * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             */
            vfunc_is_writable(): boolean;
            /**
             * Attempts to write up to `count` bytes from `buffer` to `stream,` as
             * with g_output_stream_write(). If `stream` is not currently writable,
             * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
             * use g_pollable_output_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is writable.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * Also note that if %G_IO_ERROR_WOULD_BLOCK is returned some underlying
             * transports like D/TLS require that you re-send the same `buffer` and
             * `count` in the next write call.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             * @param buffer a buffer to write     data from
             */
            vfunc_write_nonblocking(buffer?: Uint8Array | null): number;
            /**
             * Attempts to write the bytes contained in the `n_vectors` `vectors` to `stream,`
             * as with g_output_stream_writev(). If `stream` is not currently writable,
             * this will immediately return %`G_POLLABLE_RETURN_WOULD_BLOCK,` and you can
             * use g_pollable_output_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is writable. `error` will *not* be
             * set in that case.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * Also note that if %G_POLLABLE_RETURN_WOULD_BLOCK is returned some underlying
             * transports like D/TLS require that you re-send the same `vectors` and
             * `n_vectors` in the next write call.
             *
             * The behaviour of this method is undefined if
             * g_pollable_output_stream_can_poll() returns %FALSE for `stream`.
             * @param vectors the buffer containing the #GOutputVectors to write.
             */
            vfunc_writev_nonblocking(vectors: Gio.OutputVector[]): [Gio.PollableReturn, number];
            /**
             * Clears the pending flag on `stream`.
             */
            clear_pending(): void;
            /**
             * Closes the stream, releasing resources related to it.
             *
             * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
             * Closing a stream multiple times will not return an error.
             *
             * Closing a stream will automatically flush any outstanding buffers in the
             * stream.
             *
             * Streams will be automatically closed when the last reference
             * is dropped, but you might want to call this function to make sure
             * resources are released as early as possible.
             *
             * Some streams might keep the backing store of the stream (e.g. a file descriptor)
             * open after the stream is closed. See the documentation for the individual
             * stream for details.
             *
             * On failure the first error that happened will be reported, but the close
             * operation will finish as much as possible. A stream that failed to
             * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
             * is important to check and report the error to the user, otherwise
             * there might be a loss of data as all data might not be written.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * Cancelling a close will still leave the stream closed, but there some streams
             * can use a faster close that doesn't block to e.g. check errors. On
             * cancellation (as with any error) there is no guarantee that all written
             * data will reach the target.
             * @param cancellable optional cancellable object
             * @returns %TRUE on success, %FALSE on failure
             */
            close(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Requests an asynchronous close of the stream, releasing resources
             * related to it. When the operation is finished `callback` will be
             * called. You can then call g_output_stream_close_finish() to get
             * the result of the operation.
             *
             * For behaviour details see g_output_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads
             * to implement asynchronicity, so they are optional for inheriting
             * classes. However, if you override one you must override all.
             * @param io_priority the io priority of the request.
             * @param cancellable optional cancellable object
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            close_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Closes an output stream.
             * @param result a #GAsyncResult.
             * @returns %TRUE if stream was successfully closed, %FALSE otherwise.
             */
            close_finish(result: Gio.AsyncResult): boolean;
            /**
             * Forces a write of all user-space buffered data for the given
             * `stream`. Will block during the operation. Closing the stream will
             * implicitly cause a flush.
             *
             * This function is optional for inherited classes.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional cancellable object
             * @returns %TRUE on success, %FALSE on error
             */
            flush(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Forces an asynchronous write of all user-space buffered data for
             * the given `stream`.
             * For behaviour details see g_output_stream_flush().
             *
             * When the operation is finished `callback` will be
             * called. You can then call g_output_stream_flush_finish() to get the
             * result of the operation.
             * @param io_priority the io priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            flush_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes flushing an output stream.
             * @param result a GAsyncResult.
             * @returns %TRUE if flush operation succeeded, %FALSE otherwise.
             */
            flush_finish(result: Gio.AsyncResult): boolean;
            /**
             * Checks if an output stream has pending actions.
             * @returns %TRUE if @stream has pending actions.
             */
            has_pending(): boolean;
            /**
             * Checks if an output stream has already been closed.
             * @returns %TRUE if @stream is closed. %FALSE otherwise.
             */
            is_closed(): boolean;
            /**
             * Checks if an output stream is being closed. This can be
             * used inside e.g. a flush implementation to see if the
             * flush (or other i/o operation) is called from within
             * the closing operation.
             * @returns %TRUE if @stream is being closed. %FALSE otherwise.
             */
            is_closing(): boolean;
            /**
             * Sets `stream` to have actions pending. If the pending flag is
             * already set or `stream` is closed, it will return %FALSE and set
             * `error`.
             * @returns %TRUE if pending was previously unset and is now set.
             */
            set_pending(): boolean;
            /**
             * Splices an input stream into an output stream.
             * @param source a #GInputStream.
             * @param flags a set of #GOutputStreamSpliceFlags.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns a #gssize containing the size of the data spliced, or     -1 if an error occurred. Note that if the number of bytes     spliced is greater than %G_MAXSSIZE, then that will be     returned, and there is no way to determine the actual number     of bytes spliced.
             */
            splice(
                source: Gio.InputStream,
                flags: Gio.OutputStreamSpliceFlags,
                cancellable?: Gio.Cancellable | null,
            ): number;
            /**
             * Splices a stream asynchronously.
             * When the operation is finished `callback` will be called.
             * You can then call g_output_stream_splice_finish() to get the
             * result of the operation.
             *
             * For the synchronous, blocking version of this function, see
             * g_output_stream_splice().
             * @param source a #GInputStream.
             * @param flags a set of #GOutputStreamSpliceFlags.
             * @param io_priority the io priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            splice_async(
                source: Gio.InputStream,
                flags: Gio.OutputStreamSpliceFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous stream splice operation.
             * @param result a #GAsyncResult.
             * @returns a #gssize of the number of bytes spliced. Note that if the     number of bytes spliced is greater than %G_MAXSSIZE, then that     will be returned, and there is no way to determine the actual     number of bytes spliced.
             */
            splice_finish(result: Gio.AsyncResult): number;
            /**
             * Tries to write `count` bytes from `buffer` into the stream. Will block
             * during the operation.
             *
             * If count is 0, returns 0 and does nothing. A value of `count`
             * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes written to the stream is returned.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. on a partial I/O error, or if there is not enough
             * storage in the stream. All writes block until at least one byte
             * is written or an error occurs; 0 is never returned (unless
             * `count` is 0).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * On error -1 is returned and `error` is set accordingly.
             * @param buffer the buffer containing the data to write.
             * @param cancellable optional cancellable object
             * @returns Number of bytes written, or -1 on error
             */
            write(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): number;
            /**
             * Tries to write `count` bytes from `buffer` into the stream. Will block
             * during the operation.
             *
             * This function is similar to g_output_stream_write(), except it tries to
             * write as many bytes as requested, only stopping on an error.
             *
             * On a successful write of `count` bytes, %TRUE is returned, and `bytes_written`
             * is set to `count`.
             *
             * If there is an error during the operation %FALSE is returned and `error`
             * is set to indicate the error status.
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_written` will be set to the number of bytes that were
             * successfully written before the error was encountered.  This
             * functionality is only available from C.  If you need it from another
             * language then you must write your own loop around
             * g_output_stream_write().
             * @param buffer the buffer containing the data to write.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE on success, %FALSE if there was an error
             */
            write_all(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Request an asynchronous write of `count` bytes from `buffer` into
             * the stream. When the operation is finished `callback` will be called.
             * You can then call g_output_stream_write_all_finish() to get the result of the
             * operation.
             *
             * This is the asynchronous version of g_output_stream_write_all().
             *
             * Call g_output_stream_write_all_finish() to collect the result.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             *
             * Note that no copy of `buffer` will be made, so it must stay valid
             * until `callback` is called.
             * @param buffer the buffer containing the data to write
             * @param io_priority the io priority of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            write_all_async(
                buffer: Uint8Array | string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous stream write operation started with
             * g_output_stream_write_all_async().
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_written` will be set to the number of bytes that were
             * successfully written before the error was encountered.  This
             * functionality is only available from C.  If you need it from another
             * language then you must write your own loop around
             * g_output_stream_write_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE if there was an error
             */
            write_all_finish(result: Gio.AsyncResult): [boolean, number];
            /**
             * Request an asynchronous write of `count` bytes from `buffer` into
             * the stream. When the operation is finished `callback` will be called.
             * You can then call g_output_stream_write_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes written will be passed to the
             * `callback`. It is not an error if this is not the same as the
             * requested size, as it can happen e.g. on a partial I/O error,
             * but generally we try to write as many bytes as requested.
             *
             * You are guaranteed that this method will never fail with
             * %G_IO_ERROR_WOULD_BLOCK - if `stream` can't accept more data, the
             * method will just wait until this changes.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads
             * to implement asynchronicity, so they are optional for inheriting
             * classes. However, if you override one you must override all.
             *
             * For the synchronous, blocking version of this function, see
             * g_output_stream_write().
             *
             * Note that no copy of `buffer` will be made, so it must stay valid
             * until `callback` is called. See g_output_stream_write_bytes_async()
             * for a #GBytes version that will automatically hold a reference to
             * the contents (without copying) for the duration of the call.
             * @param buffer the buffer containing the data to write.
             * @param io_priority the io priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            write_async(
                buffer: Uint8Array | string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * A wrapper function for g_output_stream_write() which takes a
             * #GBytes as input.  This can be more convenient for use by language
             * bindings or in other cases where the refcounted nature of #GBytes
             * is helpful over a bare pointer interface.
             *
             * However, note that this function may still perform partial writes,
             * just like g_output_stream_write().  If that occurs, to continue
             * writing, you will need to create a new #GBytes containing just the
             * remaining bytes, using g_bytes_new_from_bytes(). Passing the same
             * #GBytes instance multiple times potentially can result in duplicated
             * data in the output stream.
             * @param bytes the #GBytes to write
             * @param cancellable optional cancellable object
             * @returns Number of bytes written, or -1 on error
             */
            write_bytes(bytes: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): number;
            /**
             * This function is similar to g_output_stream_write_async(), but
             * takes a #GBytes as input.  Due to the refcounted nature of #GBytes,
             * this allows the stream to avoid taking a copy of the data.
             *
             * However, note that this function may still perform partial writes,
             * just like g_output_stream_write_async(). If that occurs, to continue
             * writing, you will need to create a new #GBytes containing just the
             * remaining bytes, using g_bytes_new_from_bytes(). Passing the same
             * #GBytes instance multiple times potentially can result in duplicated
             * data in the output stream.
             *
             * For the synchronous, blocking version of this function, see
             * g_output_stream_write_bytes().
             * @param bytes The bytes to write
             * @param io_priority the io priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            write_bytes_async(
                bytes: GLib.Bytes | Uint8Array,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stream write-from-#GBytes operation.
             * @param result a #GAsyncResult.
             * @returns a #gssize containing the number of bytes written to the stream.
             */
            write_bytes_finish(result: Gio.AsyncResult): number;
            /**
             * Finishes a stream write operation.
             * @param result a #GAsyncResult.
             * @returns a #gssize containing the number of bytes written to the stream.
             */
            write_finish(result: Gio.AsyncResult): number;
            /**
             * Tries to write the bytes contained in the `n_vectors` `vectors` into the
             * stream. Will block during the operation.
             *
             * If `n_vectors` is 0 or the sum of all bytes in `vectors` is 0, returns 0 and
             * does nothing.
             *
             * On success, the number of bytes written to the stream is returned.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. on a partial I/O error, or if there is not enough
             * storage in the stream. All writes block until at least one byte
             * is written or an error occurs; 0 is never returned (unless
             * `n_vectors` is 0 or the sum of all bytes in `vectors` is 0).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * Some implementations of g_output_stream_writev() may have limitations on the
             * aggregate buffer size, and will return %G_IO_ERROR_INVALID_ARGUMENT if these
             * are exceeded. For example, when writing to a local file on UNIX platforms,
             * the aggregate buffer size must not exceed %G_MAXSSIZE bytes.
             * @param vectors the buffer containing the #GOutputVectors to write.
             * @param cancellable optional cancellable object
             * @returns %TRUE on success, %FALSE if there was an error
             */
            writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Tries to write the bytes contained in the `n_vectors` `vectors` into the
             * stream. Will block during the operation.
             *
             * This function is similar to g_output_stream_writev(), except it tries to
             * write as many bytes as requested, only stopping on an error.
             *
             * On a successful write of all `n_vectors` vectors, %TRUE is returned, and
             * `bytes_written` is set to the sum of all the sizes of `vectors`.
             *
             * If there is an error during the operation %FALSE is returned and `error`
             * is set to indicate the error status.
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_written` will be set to the number of bytes that were
             * successfully written before the error was encountered.  This
             * functionality is only available from C. If you need it from another
             * language then you must write your own loop around
             * g_output_stream_write().
             *
             * The content of the individual elements of `vectors` might be changed by this
             * function.
             * @param vectors the buffer containing the #GOutputVectors to write.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE on success, %FALSE if there was an error
             */
            writev_all(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Request an asynchronous write of the bytes contained in the `n_vectors` `vectors` into
             * the stream. When the operation is finished `callback` will be called.
             * You can then call g_output_stream_writev_all_finish() to get the result of the
             * operation.
             *
             * This is the asynchronous version of g_output_stream_writev_all().
             *
             * Call g_output_stream_writev_all_finish() to collect the result.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             *
             * Note that no copy of `vectors` will be made, so it must stay valid
             * until `callback` is called. The content of the individual elements
             * of `vectors` might be changed by this function.
             * @param vectors the buffer containing the #GOutputVectors to write.
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            writev_all_async(
                vectors: Gio.OutputVector[],
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous stream write operation started with
             * g_output_stream_writev_all_async().
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_written` will be set to the number of bytes that were
             * successfully written before the error was encountered.  This
             * functionality is only available from C.  If you need it from another
             * language then you must write your own loop around
             * g_output_stream_writev_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE if there was an error
             */
            writev_all_finish(result: Gio.AsyncResult): [boolean, number];
            /**
             * Request an asynchronous write of the bytes contained in `n_vectors` `vectors` into
             * the stream. When the operation is finished `callback` will be called.
             * You can then call g_output_stream_writev_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * On success, the number of bytes written will be passed to the
             * `callback`. It is not an error if this is not the same as the
             * requested size, as it can happen e.g. on a partial I/O error,
             * but generally we try to write as many bytes as requested.
             *
             * You are guaranteed that this method will never fail with
             * %G_IO_ERROR_WOULD_BLOCK — if `stream` can't accept more data, the
             * method will just wait until this changes.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads
             * to implement asynchronicity, so they are optional for inheriting
             * classes. However, if you override one you must override all.
             *
             * For the synchronous, blocking version of this function, see
             * g_output_stream_writev().
             *
             * Note that no copy of `vectors` will be made, so it must stay valid
             * until `callback` is called.
             * @param vectors the buffer containing the #GOutputVectors to write.
             * @param io_priority the I/O priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            writev_async(
                vectors: Gio.OutputVector[],
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stream writev operation.
             * @param result a #GAsyncResult.
             * @returns %TRUE on success, %FALSE if there was an error
             */
            writev_finish(result: Gio.AsyncResult): [boolean, number];
            /**
             * Requests an asynchronous close of the stream, releasing resources
             * related to it. When the operation is finished `callback` will be
             * called. You can then call g_output_stream_close_finish() to get
             * the result of the operation.
             *
             * For behaviour details see g_output_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads
             * to implement asynchronicity, so they are optional for inheriting
             * classes. However, if you override one you must override all.
             * @param io_priority the io priority of the request.
             * @param cancellable optional cancellable object
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_close_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Closes an output stream.
             * @param result a #GAsyncResult.
             */
            vfunc_close_finish(result: Gio.AsyncResult): boolean;
            vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Forces a write of all user-space buffered data for the given
             * `stream`. Will block during the operation. Closing the stream will
             * implicitly cause a flush.
             *
             * This function is optional for inherited classes.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * @param cancellable optional cancellable object
             */
            vfunc_flush(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Forces an asynchronous write of all user-space buffered data for
             * the given `stream`.
             * For behaviour details see g_output_stream_flush().
             *
             * When the operation is finished `callback` will be
             * called. You can then call g_output_stream_flush_finish() to get the
             * result of the operation.
             * @param io_priority the io priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_flush_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes flushing an output stream.
             * @param result a GAsyncResult.
             */
            vfunc_flush_finish(result: Gio.AsyncResult): boolean;
            /**
             * Splices an input stream into an output stream.
             * @param source a #GInputStream.
             * @param flags a set of #GOutputStreamSpliceFlags.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_splice(
                source: Gio.InputStream,
                flags: Gio.OutputStreamSpliceFlags,
                cancellable?: Gio.Cancellable | null,
            ): number;
            /**
             * Splices a stream asynchronously.
             * When the operation is finished `callback` will be called.
             * You can then call g_output_stream_splice_finish() to get the
             * result of the operation.
             *
             * For the synchronous, blocking version of this function, see
             * g_output_stream_splice().
             * @param source a #GInputStream.
             * @param flags a set of #GOutputStreamSpliceFlags.
             * @param io_priority the io priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_splice_async(
                source: Gio.InputStream,
                flags: Gio.OutputStreamSpliceFlags,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous stream splice operation.
             * @param result a #GAsyncResult.
             */
            vfunc_splice_finish(result: Gio.AsyncResult): number;
            /**
             * Request an asynchronous write of `count` bytes from `buffer` into
             * the stream. When the operation is finished `callback` will be called.
             * You can then call g_output_stream_write_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes written will be passed to the
             * `callback`. It is not an error if this is not the same as the
             * requested size, as it can happen e.g. on a partial I/O error,
             * but generally we try to write as many bytes as requested.
             *
             * You are guaranteed that this method will never fail with
             * %G_IO_ERROR_WOULD_BLOCK - if `stream` can't accept more data, the
             * method will just wait until this changes.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads
             * to implement asynchronicity, so they are optional for inheriting
             * classes. However, if you override one you must override all.
             *
             * For the synchronous, blocking version of this function, see
             * g_output_stream_write().
             *
             * Note that no copy of `buffer` will be made, so it must stay valid
             * until `callback` is called. See g_output_stream_write_bytes_async()
             * for a #GBytes version that will automatically hold a reference to
             * the contents (without copying) for the duration of the call.
             * @param buffer the buffer containing the data to write.
             * @param io_priority the io priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            vfunc_write_async(
                buffer: Uint8Array | null,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stream write operation.
             * @param result a #GAsyncResult.
             */
            vfunc_write_finish(result: Gio.AsyncResult): number;
            /**
             * Tries to write `count` bytes from `buffer` into the stream. Will block
             * during the operation.
             *
             * If count is 0, returns 0 and does nothing. A value of `count`
             * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes written to the stream is returned.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. on a partial I/O error, or if there is not enough
             * storage in the stream. All writes block until at least one byte
             * is written or an error occurs; 0 is never returned (unless
             * `count` is 0).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * On error -1 is returned and `error` is set accordingly.
             * @param buffer the buffer containing the data to write.
             * @param cancellable optional cancellable object
             */
            vfunc_write_fn(buffer?: Uint8Array | null, cancellable?: Gio.Cancellable | null): number;
            /**
             * Request an asynchronous write of the bytes contained in `n_vectors` `vectors` into
             * the stream. When the operation is finished `callback` will be called.
             * You can then call g_output_stream_writev_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * On success, the number of bytes written will be passed to the
             * `callback`. It is not an error if this is not the same as the
             * requested size, as it can happen e.g. on a partial I/O error,
             * but generally we try to write as many bytes as requested.
             *
             * You are guaranteed that this method will never fail with
             * %G_IO_ERROR_WOULD_BLOCK — if `stream` can't accept more data, the
             * method will just wait until this changes.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads
             * to implement asynchronicity, so they are optional for inheriting
             * classes. However, if you override one you must override all.
             *
             * For the synchronous, blocking version of this function, see
             * g_output_stream_writev().
             *
             * Note that no copy of `vectors` will be made, so it must stay valid
             * until `callback` is called.
             * @param vectors the buffer containing the #GOutputVectors to write.
             * @param io_priority the I/O priority of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            vfunc_writev_async(
                vectors: Gio.OutputVector[],
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stream writev operation.
             * @param result a #GAsyncResult.
             */
            vfunc_writev_finish(result: Gio.AsyncResult): [boolean, number];
            /**
             * Tries to write the bytes contained in the `n_vectors` `vectors` into the
             * stream. Will block during the operation.
             *
             * If `n_vectors` is 0 or the sum of all bytes in `vectors` is 0, returns 0 and
             * does nothing.
             *
             * On success, the number of bytes written to the stream is returned.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. on a partial I/O error, or if there is not enough
             * storage in the stream. All writes block until at least one byte
             * is written or an error occurs; 0 is never returned (unless
             * `n_vectors` is 0 or the sum of all bytes in `vectors` is 0).
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * Some implementations of g_output_stream_writev() may have limitations on the
             * aggregate buffer size, and will return %G_IO_ERROR_INVALID_ARGUMENT if these
             * are exceeded. For example, when writing to a local file on UNIX platforms,
             * the aggregate buffer size must not exceed %G_MAXSSIZE bytes.
             * @param vectors the buffer containing the #GOutputVectors to write.
             * @param cancellable optional cancellable object
             */
            vfunc_writev_fn(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [boolean, number];
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
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
            ): GObject.Binding;
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
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
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
            getv(names: string[], values: (GObject.Value | any)[]): void;
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
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
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
            ref_sink(): GObject.Object;
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
            watch_closure(closure: GObject.Closure): void;
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
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
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
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
            vfunc_notify(pspec: GObject.ParamSpec): void;
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
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        type DesktopAppInfoClass = typeof DesktopAppInfo;
        type DesktopAppInfoLookupIface = typeof DesktopAppInfoLookup;
        type FDMessageClass = typeof FDMessage;
        abstract class FDMessagePrivate {
            static $gtype: GObject.GType<FDMessagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FileDescriptorBasedIface = typeof FileDescriptorBased;
        type InputStreamClass = typeof InputStream;
        abstract class InputStreamPrivate {
            static $gtype: GObject.GType<InputStreamPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Defines a Unix mount entry (e.g. `/media/cdrom`).
         * This corresponds roughly to a mtab entry.
         */
        abstract class MountEntry {
            static $gtype: GObject.GType<MountEntry>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets a #GUnixMountEntry for a given mount path. If `time_read`
             * is set, it will be filled with a unix timestamp for checking
             * if the mounts have changed since with g_unix_mount_entries_changed_since().
             *
             * If more mounts have the same mount path, the last matching mount
             * is returned.
             *
             * This will return %NULL if there is no mount point at `mount_path`.
             * @param mount_path path for a possible unix mount.
             */
            static at(mount_path: string): [Gio.UnixMountEntry | null, number];
            /**
             * Compares two unix mounts.
             * @param mount1 first #GUnixMountEntry to compare.
             * @param mount2 second #GUnixMountEntry to compare.
             */
            static compare(mount1: Gio.UnixMountEntry, mount2: Gio.UnixMountEntry): number;
            /**
             * Makes a copy of `mount_entry`.
             * @param mount_entry a #GUnixMountEntry.
             */
            static copy(mount_entry: Gio.UnixMountEntry): Gio.UnixMountEntry;
            /**
             * Gets a #GUnixMountEntry for a given file path. If `time_read`
             * is set, it will be filled with a unix timestamp for checking
             * if the mounts have changed since with g_unix_mount_entries_changed_since().
             *
             * If more mounts have the same mount path, the last matching mount
             * is returned.
             *
             * This will return %NULL if looking up the mount entry fails, if
             * `file_path` doesn’t exist or there is an I/O error.
             * @param file_path file path on some unix mount.
             */
            static ['for'](file_path: string): [Gio.UnixMountEntry | null, number];
            /**
             * Frees a unix mount.
             * @param mount_entry a #GUnixMountEntry.
             */
            static free(mount_entry: Gio.UnixMountEntry): void;
            /**
             * Gets the device path for a unix mount.
             * @param mount_entry a #GUnixMount.
             */
            static get_device_path(mount_entry: Gio.UnixMountEntry): string;
            /**
             * Gets the filesystem type for the unix mount.
             * @param mount_entry a #GUnixMount.
             */
            static get_fs_type(mount_entry: Gio.UnixMountEntry): string;
            /**
             * Gets the mount path for a unix mount.
             * @param mount_entry input #GUnixMountEntry to get the mount path for.
             */
            static get_mount_path(mount_entry: Gio.UnixMountEntry): string;
            /**
             * Gets a comma-separated list of mount options for the unix mount. For example,
             * `rw,relatime,seclabel,data=ordered`.
             *
             * This is similar to g_unix_mount_point_get_options(), but it takes
             * a #GUnixMountEntry as an argument.
             * @param mount_entry a #GUnixMountEntry.
             */
            static get_options(mount_entry: Gio.UnixMountEntry): string | null;
            /**
             * Gets the root of the mount within the filesystem. This is useful e.g. for
             * mounts created by bind operation, or btrfs subvolumes.
             *
             * For example, the root path is equal to "/" for mount created by
             * "mount /dev/sda1 /mnt/foo" and "/bar" for
             * "mount --bind /mnt/foo/bar /mnt/bar".
             * @param mount_entry a #GUnixMountEntry.
             */
            static get_root_path(mount_entry: Gio.UnixMountEntry): string | null;
            /**
             * Guesses whether a Unix mount can be ejected.
             * @param mount_entry a #GUnixMountEntry
             */
            static guess_can_eject(mount_entry: Gio.UnixMountEntry): boolean;
            /**
             * Guesses the icon of a Unix mount.
             * @param mount_entry a #GUnixMountEntry
             */
            static guess_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
            /**
             * Guesses the name of a Unix mount.
             * The result is a translated string.
             * @param mount_entry a #GUnixMountEntry
             */
            static guess_name(mount_entry: Gio.UnixMountEntry): string;
            /**
             * Guesses whether a Unix mount should be displayed in the UI.
             * @param mount_entry a #GUnixMountEntry
             */
            static guess_should_display(mount_entry: Gio.UnixMountEntry): boolean;
            /**
             * Guesses the symbolic icon of a Unix mount.
             * @param mount_entry a #GUnixMountEntry
             */
            static guess_symbolic_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
            /**
             * Checks if a unix mount is mounted read only.
             * @param mount_entry a #GUnixMount.
             */
            static is_readonly(mount_entry: Gio.UnixMountEntry): boolean;
            /**
             * Checks if a Unix mount is a system mount. This is the Boolean OR of
             * g_unix_is_system_fs_type(), g_unix_is_system_device_path() and
             * g_unix_is_mount_path_system_internal() on `mount_entry’`s properties.
             *
             * The definition of what a ‘system’ mount entry is may change over time as new
             * file system types and device paths are ignored.
             * @param mount_entry a #GUnixMount.
             */
            static is_system_internal(mount_entry: Gio.UnixMountEntry): boolean;
        }

        type MountMonitorClass = typeof MountMonitor;
        /**
         * Defines a Unix mount point (e.g. `/dev`).
         * This corresponds roughly to a fstab entry.
         */
        abstract class MountPoint {
            static $gtype: GObject.GType<MountPoint>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets a #GUnixMountPoint for a given mount path. If `time_read` is set, it
             * will be filled with a unix timestamp for checking if the mount points have
             * changed since with g_unix_mount_points_changed_since().
             *
             * If more mount points have the same mount path, the last matching mount point
             * is returned.
             * @param mount_path path for a possible unix mount point.
             */
            static at(mount_path: string): [Gio.UnixMountPoint | null, number];
            /**
             * Compares two unix mount points.
             * @param mount1 a #GUnixMount.
             * @param mount2 a #GUnixMount.
             */
            static compare(mount1: Gio.UnixMountPoint, mount2: Gio.UnixMountPoint): number;
            /**
             * Makes a copy of `mount_point`.
             * @param mount_point a #GUnixMountPoint.
             */
            static copy(mount_point: Gio.UnixMountPoint): Gio.UnixMountPoint;
            /**
             * Frees a unix mount point.
             * @param mount_point unix mount point to free.
             */
            static free(mount_point: Gio.UnixMountPoint): void;
            /**
             * Gets the device path for a unix mount point.
             * @param mount_point a #GUnixMountPoint.
             */
            static get_device_path(mount_point: Gio.UnixMountPoint): string;
            /**
             * Gets the file system type for the mount point.
             * @param mount_point a #GUnixMountPoint.
             */
            static get_fs_type(mount_point: Gio.UnixMountPoint): string;
            /**
             * Gets the mount path for a unix mount point.
             * @param mount_point a #GUnixMountPoint.
             */
            static get_mount_path(mount_point: Gio.UnixMountPoint): string;
            /**
             * Gets the options for the mount point.
             * @param mount_point a #GUnixMountPoint.
             */
            static get_options(mount_point: Gio.UnixMountPoint): string | null;
            /**
             * Guesses whether a Unix mount point can be ejected.
             * @param mount_point a #GUnixMountPoint
             */
            static guess_can_eject(mount_point: Gio.UnixMountPoint): boolean;
            /**
             * Guesses the icon of a Unix mount point.
             * @param mount_point a #GUnixMountPoint
             */
            static guess_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
            /**
             * Guesses the name of a Unix mount point.
             * The result is a translated string.
             * @param mount_point a #GUnixMountPoint
             */
            static guess_name(mount_point: Gio.UnixMountPoint): string;
            /**
             * Guesses the symbolic icon of a Unix mount point.
             * @param mount_point a #GUnixMountPoint
             */
            static guess_symbolic_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
            /**
             * Checks if a unix mount point is a loopback device.
             * @param mount_point a #GUnixMountPoint.
             */
            static is_loopback(mount_point: Gio.UnixMountPoint): boolean;
            /**
             * Checks if a unix mount point is read only.
             * @param mount_point a #GUnixMountPoint.
             */
            static is_readonly(mount_point: Gio.UnixMountPoint): boolean;
            /**
             * Checks if a unix mount point is mountable by the user.
             * @param mount_point a #GUnixMountPoint.
             */
            static is_user_mountable(mount_point: Gio.UnixMountPoint): boolean;
        }

        type OutputStreamClass = typeof OutputStream;
        abstract class OutputStreamPrivate {
            static $gtype: GObject.GType<OutputStreamPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module DesktopAppInfoLookup {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DesktopAppInfoLookupNamespace {
            $gtype: GObject.GType<DesktopAppInfoLookup>;
            prototype: DesktopAppInfoLookup;

            /**
             * Gets the default application for launching applications
             * using this URI scheme for a particular [iface`Gio`.DesktopAppInfoLookup]
             * implementation.
             *
             * The [iface`Gio`.DesktopAppInfoLookup] interface and this function is used
             * to implement [func`Gio`.AppInfo.get_default_for_uri_scheme] backends
             * in a GIO module. There is no reason for applications to use it
             * directly. Applications should use
             * [func`Gio`.AppInfo.get_default_for_uri_scheme].
             * @param lookup a [iface@Gio.DesktopAppInfoLookup]
             * @param uri_scheme a string containing a URI scheme.
             */
            get_default_for_uri_scheme(lookup: Gio.DesktopAppInfoLookup, uri_scheme: string): Gio.AppInfo | null;
        }
        interface DesktopAppInfoLookup extends GObject.Object {}

        export const DesktopAppInfoLookup: DesktopAppInfoLookupNamespace;

        module FileDescriptorBased {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface FileDescriptorBasedNamespace {
            $gtype: GObject.GType<FileDescriptorBased>;
            prototype: FileDescriptorBased;

            /**
             * Gets the underlying file descriptor.
             * @param fd_based a #GFileDescriptorBased.
             */
            get_fd(fd_based: Gio.FileDescriptorBased): number;
        }
        interface FileDescriptorBased extends GObject.Object {}

        export const FileDescriptorBased: FileDescriptorBasedNamespace;

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

    export default GioUnix;
}

declare module 'gi://GioUnix' {
    import GioUnix20 from 'gi://GioUnix?version=2.0';
    export default GioUnix20;
}
// END
