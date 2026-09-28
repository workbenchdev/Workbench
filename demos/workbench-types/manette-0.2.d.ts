/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gudev-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Manette?version=0.2' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GUdev from 'gi://GUdev?version=1.0';

    export namespace Manette {
        /**
         * Manette-0.2
         */

        /**
         * Specifies the type of the event.
         */

        /**
         * Specifies the type of the event.
         */
        export namespace EventType {
            export const $gtype: GObject.GType<EventType>;
        }

        enum EventType {
            /**
             * a special code to indicate a null event
             */
            EVENT_NOTHING,
            /**
             * a button has been pressed
             */
            EVENT_BUTTON_PRESS,
            /**
             * a button has been released
             */
            EVENT_BUTTON_RELEASE,
            /**
             * an absolute axis has been moved
             */
            EVENT_ABSOLUTE,
            /**
             * a hat axis has been moved
             */
            EVENT_HAT,
        }
        function get_resource(): Gio.Resource;
        module Device {
            // Signal callback interfaces

            interface AbsoluteAxisEvent {
                (event: Event): void;
            }

            interface ButtonPressEvent {
                (event: Event): void;
            }

            interface ButtonReleaseEvent {
                (event: Event): void;
            }

            interface Disconnected {
                (): void;
            }

            interface Event {
                (event: Event): void;
            }

            interface HatAxisEvent {
                (event: Event): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'absolute-axis-event', callback: (_source: this, event: Event) => void): number;
            connect_after(signal: 'absolute-axis-event', callback: (_source: this, event: Event) => void): number;
            emit(signal: 'absolute-axis-event', event: Event): void;
            connect(signal: 'button-press-event', callback: (_source: this, event: Event) => void): number;
            connect_after(signal: 'button-press-event', callback: (_source: this, event: Event) => void): number;
            emit(signal: 'button-press-event', event: Event): void;
            connect(signal: 'button-release-event', callback: (_source: this, event: Event) => void): number;
            connect_after(signal: 'button-release-event', callback: (_source: this, event: Event) => void): number;
            emit(signal: 'button-release-event', event: Event): void;
            connect(signal: 'disconnected', callback: (_source: this) => void): number;
            connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
            emit(signal: 'disconnected'): void;
            connect(signal: 'event', callback: (_source: this, event: Event) => void): number;
            connect_after(signal: 'event', callback: (_source: this, event: Event) => void): number;
            emit(signal: 'event', event: Event): void;
            connect(signal: 'hat-axis-event', callback: (_source: this, event: Event) => void): number;
            connect_after(signal: 'hat-axis-event', callback: (_source: this, event: Event) => void): number;
            emit(signal: 'hat-axis-event', event: Event): void;

            // Methods

            /**
             * Gets the identifier used by SDL mappings to discriminate game controller
             * devices.
             * @returns the identifier used by SDL mappings
             */
            get_guid(): string;
            /**
             * Gets the user mapping for `self,` or default mapping if there isn't any. Can
             * return %NULL if there's no mapping.
             * @returns the mapping for @self
             */
            get_mapping(): string | null;
            /**
             * Gets the device's name.
             * @returns the name of @self, do not modify it or free it
             */
            get_name(): string;
            /**
             * Gets whether the device has the given input. If the input is present it means
             * that the device can send events for it regardless of whether the device is
             * mapped or not.
             * @param type the input type
             * @param code the input code
             * @returns whether the device has the given input
             */
            has_input(type: number, code: number): boolean;
            /**
             * Gets whether `self` supports rumble.
             * @returns whether @self supports rumble
             */
            has_rumble(): boolean;
            /**
             * Gets whether `self` has a user mapping.
             * @returns whether @self has a user mapping
             */
            has_user_mapping(): boolean;
            /**
             * Removes the user mapping for `self`.
             */
            remove_user_mapping(): void;
            /**
             * Make `self` rumble during `milliseconds` milliseconds, with the heavy and light
             * motors rumbling at their respectively defined magnitudes.
             *
             * The duration cannot exceed 32767 milliseconds.
             * @param strong_magnitude the magnitude for the heavy motor
             * @param weak_magnitude the magnitude for the light motor
             * @param milliseconds the rumble effect play time in milliseconds
             * @returns whether the rumble effect was played
             */
            rumble(strong_magnitude: number, weak_magnitude: number, milliseconds: number): boolean;
            /**
             * Saves `mapping_string` as the user mapping for `self`.
             * @param mapping_string the mapping string
             */
            save_user_mapping(mapping_string: string): void;
        }

        module Monitor {
            // Signal callback interfaces

            interface DeviceConnected {
                (device: Device): void;
            }

            interface DeviceDisconnected {
                (device: Device): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Monitor extends GObject.Object {
            static $gtype: GObject.GType<Monitor>;

            // Constructors

            constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Monitor;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-connected', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-connected', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-connected', device: Device): void;
            connect(signal: 'device-disconnected', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-disconnected', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-disconnected', device: Device): void;

            // Methods

            /**
             * Creates a new #ManetteMonitorIter iterating on `self`.
             * @returns a new #ManetteMonitorIter iterating on @self
             */
            iterate(): MonitorIter;
        }

        type DeviceClass = typeof Device;
        type MonitorClass = typeof Monitor;
        abstract class MonitorIter {
            static $gtype: GObject.GType<MonitorIter>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the next device from the device monitor iterator.
             * @returns whether the next device was retrieved, if not, the end was reached
             */
            next(): [boolean, Device | null];
        }

        class Event {
            static $gtype: GObject.GType<Event>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the axis of `self,` if any.
             * @returns whether the axis was retrieved
             */
            get_absolute(): [boolean, number, number];
            /**
             * Gets the button of `self,` if any.
             * @returns whether the button was retrieved
             */
            get_button(): [boolean, number];
            /**
             * Gets the #ManetteDevice associated with the `self`.
             * @returns the #ManetteDevice associated with the @self
             */
            get_device(): Device;
            /**
             * Gets the event type of `self`.
             * @returns the event type of @self
             */
            get_event_type(): EventType;
            /**
             * Gets the hardware code of `self`.
             * @returns the hardware code of @self
             */
            get_hardware_code(): number;
            /**
             * Gets the hardware index of `self`.
             * @returns the hardware index of @self
             */
            get_hardware_index(): number;
            /**
             * Gets the hardware type of `self`.
             * @returns the hardware type of @self
             */
            get_hardware_type(): number;
            /**
             * Gets the hardware value of `self`.
             * @returns the hardware value of @self
             */
            get_hardware_value(): number;
            /**
             * Gets the hat of `self,` if any.
             * @returns whether the hat was retrieved
             */
            get_hat(): [boolean, number, number];
            /**
             * Gets the timestamp of when `self` was received by the input driver that takes
             * care of its device. Use this timestamp to ensure external factors such as
             * synchronous disk writes don't influence your timing computations.
             * @returns the timestamp of when @self was received by the input driver
             */
            get_time(): number;
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

    export default Manette;
}

declare module 'gi://Manette' {
    import Manette02 from 'gi://Manette?version=0.2';
    export default Manette02;
}
// END
