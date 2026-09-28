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

declare module 'gi://GUdev?version=1.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace GUdev {
        /**
         * GUdev-1.0
         */

        /**
         * Enumeration used to specify a the type of a device.
         */

        /**
         * Enumeration used to specify a the type of a device.
         */
        export namespace DeviceType {
            export const $gtype: GObject.GType<DeviceType>;
        }

        enum DeviceType {
            /**
             * Device does not have a device file.
             */
            NONE,
            /**
             * Device is a block device.
             */
            BLOCK,
            /**
             * Device is a character device.
             */
            CHAR,
        }
        module Client {
            // Signal callback interfaces

            interface Uevent {
                (action: string, device: Device): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                subsystems: string[];
            }
        }

        /**
         * #GUdevClient is used to query information about devices on a Linux
         * system from the Linux kernel and the udev device
         * manager.
         *
         * Device information is retrieved from the kernel (through the
         * <literal>sysfs</literal> filesystem) and the udev daemon (through a
         * <literal>tmpfs</literal> filesystem) and presented through
         * #GUdevDevice objects. This means that no blocking IO ever happens
         * (in both cases, we are essentially just reading data from kernel
         * memory) and as such there are no asynchronous versions of the
         * provided methods.
         *
         * To get #GUdevDevice objects, use
         * g_udev_client_query_by_subsystem(),
         * g_udev_client_query_by_device_number(),
         * g_udev_client_query_by_device_file(),
         * g_udev_client_query_by_sysfs_path(),
         * g_udev_client_query_by_subsystem_and_name()
         * or the #GUdevEnumerator type.
         *
         * To listen to uevents, connect to the #GUdevClient::uevent signal.
         */
        class Client extends GObject.Object {
            static $gtype: GObject.GType<Client>;

            // Properties

            /**
             * The subsystems to listen for uevents on.
             *
             * To listen for only a specific DEVTYPE for a given SUBSYSTEM, use
             * "subsystem/devtype". For example, to only listen for uevents
             * where SUBSYSTEM is usb and DEVTYPE is usb_interface, use
             * "usb/usb_interface".
             *
             * If this property is %NULL, then no events will be reported. If
             * it's the empty array, events from all subsystems will be
             * reported.
             */
            get subsystems(): string[];

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](subsystems?: string[] | null): Client;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'uevent', callback: (_source: this, action: string, device: Device) => void): number;
            connect_after(signal: 'uevent', callback: (_source: this, action: string, device: Device) => void): number;
            emit(signal: 'uevent', action: string, device: Device): void;

            // Virtual methods

            /**
             * Signal class handler for the #GUdevClient::uevent signal.
             * @param action
             * @param device
             */
            vfunc_uevent(action: string, device: Device): void;

            // Methods

            /**
             * Looks up a device for a device file.
             * @param device_file A device file.
             * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
             */
            query_by_device_file(device_file: string): Device | null;
            /**
             * Looks up a device for a type and device number.
             * @param type A value from the #GUdevDeviceType enumeration.
             * @param number A device number.
             * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
             */
            query_by_device_number(type: DeviceType, number: DeviceNumber): Device | null;
            /**
             * Gets all devices belonging to `subsystem`.
             * @param subsystem The subsystem to get devices for or %NULL to get all devices.
             * @returns A list of #GUdevDevice objects. The caller should free the result by using g_object_unref() on each element in the list and then g_list_free() on the list.
             */
            query_by_subsystem(subsystem?: string | null): Device[] | null;
            /**
             * Looks up a device for a subsystem and name.
             * @param subsystem A subsystem name.
             * @param name The name of the device.
             * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
             */
            query_by_subsystem_and_name(subsystem: string, name: string): Device | null;
            /**
             * Looks up a device for a sysfs path.
             * @param sysfs_path A sysfs path.
             * @returns A #GUdevDevice object or %NULL if the device was not found. Free with g_object_unref().
             */
            query_by_sysfs_path(sysfs_path: string): Device | null;
        }

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * The #GUdevDevice class is used to get information about a specific
         * device. Note that you cannot instantiate a #GUdevDevice object
         * yourself. Instead you must use #GUdevClient to obtain #GUdevDevice
         * objects.
         *
         * To get basic information about a device, use
         * g_udev_device_get_subsystem(), g_udev_device_get_devtype(),
         * g_udev_device_get_name(), g_udev_device_get_number(),
         * g_udev_device_get_sysfs_path(), g_udev_device_get_driver(),
         * g_udev_device_get_action(), g_udev_device_get_seqnum(),
         * g_udev_device_get_device_type(), g_udev_device_get_device_number(),
         * g_udev_device_get_device_file(),
         * g_udev_device_get_device_file_symlinks().
         *
         * To navigate the device tree, use g_udev_device_get_parent() and
         * g_udev_device_get_parent_with_subsystem().
         *
         * To access udev properties for the device, use
         * g_udev_device_get_property_keys(),
         * g_udev_device_has_property(),
         * g_udev_device_get_property(),
         * g_udev_device_get_property_as_int(),
         * g_udev_device_get_property_as_uint64(),
         * g_udev_device_get_property_as_double(),
         * g_udev_device_get_property_as_boolean() and
         * g_udev_device_get_property_as_strv().
         *
         * To access sysfs attributes for the device, use
         * g_udev_device_get_sysfs_attr_keys(),
         * g_udev_device_has_sysfs_attr(),
         * g_udev_device_get_sysfs_attr(),
         * g_udev_device_get_sysfs_attr_as_int(),
         * g_udev_device_get_sysfs_attr_as_uint64(),
         * g_udev_device_get_sysfs_attr_as_double(),
         * g_udev_device_get_sysfs_attr_as_boolean() and
         * g_udev_device_get_sysfs_attr_as_strv().
         *
         * Note that all getters on #GUdevDevice are non-reffing – returned
         * values are owned by the object, should not be freed and are only
         * valid as long as the object is alive.
         *
         * By design, #GUdevDevice will not react to changes for a device – it
         * only contains a snapshot of information when the #GUdevDevice
         * object was created. To work with changes, you typically connect to
         * the #GUdevClient::uevent signal on a #GUdevClient and get a new
         * #GUdevDevice whenever an event happens.
         */
        class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the most recent action (e.g. "add", "remove", "change", etc.) for `device`.
             * @returns An action string.
             */
            get_action(): string;
            /**
             * Gets all current tags for `device`.
             *
             * https://www.freedesktop.org/software/systemd/man/udev_device_has_current_tag.html
             * @returns A %NULL terminated string array of current tags. This array is owned by @device and should not be freed by the caller.
             */
            get_current_tags(): string[];
            /**
             * Gets the device file for `device`.
             * @returns The device file for @device or %NULL if no device file exists.
             */
            get_device_file(): string | null;
            /**
             * Gets a list of symlinks (in <literal>/dev</literal>) that points to
             * the device file for `device`.
             * @returns A %NULL terminated string array of symlinks. This array is owned by @device and should not be freed by the caller.
             */
            get_device_file_symlinks(): string[];
            /**
             * Gets the device number, if any, for `device`.
             * @returns The device number for @device or 0 if unknown.
             */
            get_device_number(): DeviceNumber;
            /**
             * Gets the type of the device file, if any, for `device`.
             * @returns The device number for @device or #G_UDEV_DEVICE_TYPE_NONE if the device does not have a device file.
             */
            get_device_type(): DeviceType;
            /**
             * Gets the device type for `device`.
             * @returns The devtype for @device.
             */
            get_devtype(): string;
            /**
             * Gets the name of the driver used for `device`.
             * @returns The name of the driver for @device or %NULL if unknown.
             */
            get_driver(): string | null;
            /**
             * Gets whether `device` has been initialized.
             * @returns Whether @device has been initialized.
             */
            get_is_initialized(): boolean;
            /**
             * Gets the name of `device,` e.g. "sda3".
             * @returns The name of @device.
             */
            get_name(): string;
            /**
             * Gets the number of `device,` e.g. "3" if g_udev_device_get_name() returns "sda3".
             * @returns The number of @device.
             */
            get_number(): string;
            /**
             * Gets the immediate parent of `device,` if any.
             * @returns A #GUdevDevice or %NULL if @device has no parent. Free with g_object_unref().
             */
            get_parent(): Device | null;
            /**
             * Walks up the chain of parents of `device` and returns the first
             * device encountered where `subsystem` and `devtype` matches, if any.
             * @param subsystem The subsystem of the parent to get.
             * @param devtype The devtype of the parent to get or %NULL.
             * @returns A #GUdevDevice or %NULL if @device has no parent with @subsystem and @devtype. Free with g_object_unref().
             */
            get_parent_with_subsystem(subsystem: string, devtype?: string | null): Device | null;
            /**
             * Look up the value for `key` on `device`.
             * @param key Name of property.
             * @returns The value for @key or %NULL if @key doesn't exist on @device. Do not free this string, it is owned by @device.
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Look up the value for `key` on `device` and convert it to an
             * boolean. This is done by doing a case-insensitive string comparison
             * on the string value against "1" and "true".
             * @param key Name of property.
             * @returns The value for @key or %FALSE if @key doesn't exist or isn't a #gboolean.
             */
            get_property_as_boolean(key: string): boolean;
            /**
             * Look up the value for `key` on `device` and convert it to a double
             * precision floating point number using g_ascii_strtod().
             * @param key Name of property.
             * @returns The value for @key or 0.0 if @key doesn't exist or isn't a #gdouble.
             */
            get_property_as_double(key: string): number;
            /**
             * Look up the value for `key` on `device` and convert it to an integer
             * using strtol().
             * @param key Name of property.
             * @returns The value for @key or 0 if @key doesn't exist or isn't an integer.
             */
            get_property_as_int(key: string): number;
            /**
             * Look up the value for `key` on `device` and return the result of
             * splitting it into non-empty tokens split at white space (only space
             * (' '), form-feed ('\f'), newline ('\n'), carriage return ('\r'),
             * horizontal tab ('\t'), and vertical tab ('\v') are considered; the
             * locale is not taken into account).
             * @param key Name of property.
             * @returns The value of @key on @device split into tokens or %NULL if @key doesn't exist. This array is owned by @device and should not be freed by the caller.
             */
            get_property_as_strv(key: string): string[] | null;
            /**
             * Look up the value for `key` on `device` and convert it to an unsigned
             * 64-bit integer using g_ascii_strtoull().
             * @param key Name of property.
             * @returns The value  for @key or 0 if @key doesn't  exist or isn't a #guint64.
             */
            get_property_as_uint64(key: string): number;
            /**
             * Gets all keys for properties on `device`.
             * @returns A %NULL terminated string array of property keys. This array is owned by @device and should not be freed by the caller.
             */
            get_property_keys(): string[];
            /**
             * Gets the most recent sequence number for `device`.
             * @returns A sequence number.
             */
            get_seqnum(): number;
            /**
             * Gets the subsystem for `device`.
             * @returns The subsystem for @device.
             */
            get_subsystem(): string;
            /**
             * Look up the sysfs attribute with `name` on `device`. The retrieved value
             * is cached in the device. Repeated calls will return the same value and
             * not open the attribute again, unless updated through one of the
             * "uncached" functions.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or %NULL if there is no such attribute. Do not free this string, it is owned by @device.
             */
            get_sysfs_attr(name: string): string | null;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to an
             * boolean. This is done by doing a case-insensitive string comparison
             * on the string value against "1", "true", "Y" and "y". The retrieved value is
             * cached in the device. Repeated calls will return the same value and
             * not open the attribute again, unless updated through one of the
             * "uncached" functions.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or %FALSE if there is no such attribute.
             */
            get_sysfs_attr_as_boolean(name: string): boolean;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to an
             * boolean. This is done by doing a case-insensitive string comparison
             * on the string value against "1", "true", "Y" and "y". This function does
             * blocking I/O, and updates the sysfs attributes cache.
             *
             * Before version 238 the uncached getters would not strip trailing newlines.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or %FALSE if there is no such attribute.
             */
            get_sysfs_attr_as_boolean_uncached(name: string): boolean;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to a double
             * precision floating point number using g_ascii_strtod(). The retrieved value is cached
             * in the device. Repeated calls will return the same value and not open the
             * attribute again, unless updated through one of the "uncached" functions.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or 0.0 if there is no such attribute.
             */
            get_sysfs_attr_as_double(name: string): number;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to a double
             * precision floating point number using g_ascii_strtod(). This function does blocking
             * I/O, and updates the sysfs attributes cache.
             *
             * Before version 238 the uncached getters would not strip trailing newlines.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or 0.0 if there is no such attribute.
             */
            get_sysfs_attr_as_double_uncached(name: string): number;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to an integer
             * using strtol(). The retrieved value is cached in the device. Repeated calls
             * will return the same value and not open the attribute again, unless updated
             * through one of the "uncached" functions.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or 0 if there is no such attribute.
             */
            get_sysfs_attr_as_int(name: string): number;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to an integer
             * using strtol(). This function does blocking I/O, and updates the sysfs
             * attributes cache.
             *
             * Before version 238 the uncached getters would not strip trailing newlines.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or 0 if there is no such attribute.
             */
            get_sysfs_attr_as_int_uncached(name: string): number;
            /**
             * Look up the sysfs attribute with `name` on `device` and return the result of
             * splitting it into non-empty tokens split at white space (only space (' '),
             * form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal
             * tab ('\t'), and vertical tab ('\v') are considered; the locale is
             * not taken into account).
             *
             * The retrieved value is cached in the device. Repeated calls will return
             * the same value and not open the attribute again, unless updated through
             * one of the "uncached" functions.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute split into tokens or %NULL if there is no such attribute. This array is owned by @device and should not be freed by the caller.
             */
            get_sysfs_attr_as_strv(name: string): string[] | null;
            /**
             * Look up the sysfs attribute with `name` on `device` and return the result of
             * splitting it into non-empty tokens split at white space (only space (' '),
             * form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal
             * tab ('\t'), and vertical tab ('\v') are considered; the locale is
             * not taken into account).
             *
             * This function does blocking I/O, and updates the sysfs attributes cache.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute split into tokens or %NULL if there is no such attribute. This array is owned by @device and should not be freed by the caller. Before version 238 the uncached getters would not strip trailing newlines.
             */
            get_sysfs_attr_as_strv_uncached(name: string): string[] | null;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to an unsigned
             * 64-bit integer using g_ascii_strtoull(). The retrieved value is cached in the
             * device. Repeated calls will return the same value and not open the attribute
             * again, unless updated through one of the "uncached" functions.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or 0 if there is no such attribute.
             */
            get_sysfs_attr_as_uint64(name: string): number;
            /**
             * Look up the sysfs attribute with `name` on `device` and convert it to an unsigned
             * 64-bit integer using g_ascii_strtoull(). This function does blocking I/O, and
             * updates the sysfs attributes cache.
             *
             * Before version 238 the uncached getters would not strip trailing newlines.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or 0 if there is no such attribute.
             */
            get_sysfs_attr_as_uint64_uncached(name: string): number;
            /**
             * Gets all keys for sysfs attributes on `device`.
             * @returns A %NULL terminated string array of sysfs attribute keys. This array is owned by @device and should not be freed by the caller.
             */
            get_sysfs_attr_keys(): string[];
            /**
             * Look up the sysfs attribute with `name` on `device`. This function does
             * blocking I/O, and updates the sysfs attributes cache.
             *
             * Before version 238 the uncached getters would not strip trailing newlines.
             * @param name Name of the sysfs attribute.
             * @returns The value of the sysfs attribute or %NULL if there is no such attribute. Do not free this string, it is owned by @device.
             */
            get_sysfs_attr_uncached(name: string): string | null;
            /**
             * Gets the sysfs path for `device`.
             * @returns The sysfs path for @device.
             */
            get_sysfs_path(): string;
            /**
             * Gets all tags for `device`.
             * @returns A %NULL terminated string array of tags. This array is owned by @device and should not be freed by the caller.
             */
            get_tags(): string[];
            /**
             * Gets number of micro-seconds since `device` was initialized.
             *
             * This only works for devices with properties in the udev
             * database. All other devices return 0.
             * @returns Number of micro-seconds since @device was initialized or 0 if unknown.
             */
            get_usec_since_initialized(): number;
            /**
             * Check if a the property with the given key exists.
             * @param key Name of property.
             * @returns %TRUE only if the value for @key exist.
             */
            has_property(key: string): boolean;
            /**
             * Check if a the sysfs attribute with the given key exists. The
             * retrieved value is cached in the device. Repeated calls will
             * return the same result and not check for the presence of the
             * attribute again, unless updated through one of the "uncached"
             * functions.
             * @param key Name of sysfs attribute.
             * @returns %TRUE only if the value for @key exist.
             */
            has_sysfs_attr(key: string): boolean;
            /**
             * Check if a the sysfs attribute with the given key exists. The
             * retrieved value is cached in the device. Repeated calls will
             * return the same result and not check for the presence of the
             * attribute again, unless updated through one of the "uncached"
             * functions.
             * @param key Name of sysfs attribute.
             * @returns %TRUE only if the value for @key exist.
             */
            has_sysfs_attr_uncached(key: string): boolean;
        }

        module Enumerator {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                client: Client;
            }
        }

        /**
         * #GUdevEnumerator is used to lookup and sort devices.
         */
        class Enumerator extends GObject.Object {
            static $gtype: GObject.GType<Enumerator>;

            // Properties

            /**
             * The #GUdevClient to enumerate devices from.
             */
            get client(): Client;

            // Constructors

            constructor(properties?: Partial<Enumerator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](client: Client): Enumerator;

            // Methods

            /**
             * All returned devices will be initialized.
             * @returns The passed in @enumerator.
             */
            add_match_is_initialized(): Enumerator;
            /**
             * All returned devices will match the given `name`.
             * @param name Wildcard filter for kernel name e.g. "sda*".
             * @returns The passed in @enumerator.
             */
            add_match_name(name: string): Enumerator;
            /**
             * All returned devices will have a property matching the given `name` and `value`.
             * @param name Wildcard filter for property name.
             * @param value Wildcard filter for property value.
             * @returns The passed in @enumerator.
             */
            add_match_property(name: string, value: string): Enumerator;
            /**
             * All returned devices will match the given `subsystem`.
             * @param subsystem Wildcard for subsystem name e.g. 'scsi' or 'a*'.
             * @returns The passed in @enumerator.
             */
            add_match_subsystem(subsystem: string): Enumerator;
            /**
             * All returned devices will have a sysfs attribute matching the given `name` and `value`.
             * @param name Wildcard filter for sysfs attribute key.
             * @param value Wildcard filter for sysfs attribute value.
             * @returns The passed in @enumerator.
             */
            add_match_sysfs_attr(name: string, value: string): Enumerator;
            /**
             * All returned devices will match the given `tag`.
             * @param tag A udev tag e.g. "udev-acl".
             * @returns The passed in @enumerator.
             */
            add_match_tag(tag: string): Enumerator;
            /**
             * All returned devices will not match the given `subsystem`.
             * @param subsystem Wildcard for subsystem name e.g. 'scsi' or 'a*'.
             * @returns The passed in @enumerator.
             */
            add_nomatch_subsystem(subsystem: string): Enumerator;
            /**
             * All returned devices will not have a sysfs attribute matching the given `name` and `value`.
             * @param name Wildcard filter for sysfs attribute key.
             * @param value Wildcard filter for sysfs attribute value.
             * @returns The passed in @enumerator.
             */
            add_nomatch_sysfs_attr(name: string, value: string): Enumerator;
            /**
             * Add a device to the list of devices, to retrieve it back sorted in dependency order.
             * @param sysfs_path A sysfs path, e.g. "/sys/devices/pci0000:00/0000:00:1f.2/host0/target0:0:0/0:0:0:0/block/sda"
             * @returns The passed in @enumerator.
             */
            add_sysfs_path(sysfs_path: string): Enumerator;
            /**
             * Executes the query in `enumerator`.
             * @returns A list of #GUdevDevice objects. The caller should free the result by using g_object_unref() on each element in the list and then g_list_free() on the list.
             */
            execute(): Device[];
        }

        type ClientClass = typeof Client;
        abstract class ClientPrivate {
            static $gtype: GObject.GType<ClientPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceClass = typeof Device;
        abstract class DevicePrivate {
            static $gtype: GObject.GType<DevicePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type EnumeratorClass = typeof Enumerator;
        abstract class EnumeratorPrivate {
            static $gtype: GObject.GType<EnumeratorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceNumber = number;
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

    export default GUdev;
}

declare module 'gi://GUdev' {
    import GUdev10 from 'gi://GUdev?version=1.0';
    export default GUdev10;
}
// END
