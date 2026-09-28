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

declare module 'gi://Xdp?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Xdp {
        /**
         * Xdp-1.0
         */

        /**
         * The XdpButtonState enumeration is used to describe
         * the state of buttons.
         */

        /**
         * The XdpButtonState enumeration is used to describe
         * the state of buttons.
         */
        export namespace ButtonState {
            export const $gtype: GObject.GType<ButtonState>;
        }

        enum ButtonState {
            /**
             * the button is down
             */
            RELEASED,
            /**
             * the button is up
             */
            PRESSED,
        }

        export namespace CameraFlags {
            export const $gtype: GObject.GType<CameraFlags>;
        }

        enum CameraFlags {
            NONE,
        }
        /**
         * The `XdpDiscreteAxis` enumeration is used to describe
         * the discrete scroll axes.
         */

        /**
         * The `XdpDiscreteAxis` enumeration is used to describe
         * the discrete scroll axes.
         */
        export namespace DiscreteAxis {
            export const $gtype: GObject.GType<DiscreteAxis>;
        }

        enum DiscreteAxis {
            /**
             * the horizontal scroll axis
             */
            HORIZONTAL_SCROLL,
            /**
             * the horizontal scroll axis
             */
            VERTICAL_SCROLL,
        }

        export namespace EmailFlags {
            export const $gtype: GObject.GType<EmailFlags>;
        }

        enum EmailFlags {
            NONE,
        }
        /**
         * The `XdpKeyState` enumeration is used to describe
         * the state of keys.
         */

        /**
         * The `XdpKeyState` enumeration is used to describe
         * the state of keys.
         */
        export namespace KeyState {
            export const $gtype: GObject.GType<KeyState>;
        }

        enum KeyState {
            /**
             * the key is down
             */
            RELEASED,
            /**
             * the key is up
             */
            PRESSED,
        }
        /**
         * The values of this enum indicate the desired level
         * of accuracy for location information.
         */

        /**
         * The values of this enum indicate the desired level
         * of accuracy for location information.
         */
        export namespace LocationAccuracy {
            export const $gtype: GObject.GType<LocationAccuracy>;
        }

        enum LocationAccuracy {
            /**
             * No particular accuracy
             */
            NONE,
            /**
             * Country-level accuracy
             */
            COUNTRY,
            /**
             * City-level accuracy
             */
            CITY,
            /**
             * Neighborhood-level accuracy
             */
            NEIGHBORHOOD,
            /**
             * Street-level accuracy
             */
            STREET,
            /**
             * Maximum accuracy
             */
            EXACT,
        }

        export namespace LocationMonitorFlags {
            export const $gtype: GObject.GType<LocationMonitorFlags>;
        }

        enum LocationMonitorFlags {
            NONE,
        }
        /**
         * The values of this enum are returned in the [signal`Portal:`:session-state-changed] signal
         * to indicate the current state of the user session.
         */

        /**
         * The values of this enum are returned in the [signal`Portal:`:session-state-changed] signal
         * to indicate the current state of the user session.
         */
        export namespace LoginSessionState {
            export const $gtype: GObject.GType<LoginSessionState>;
        }

        enum LoginSessionState {
            /**
             * the session is running
             */
            RUNNING,
            /**
             * the session is in the query end phase,
             *     during which applications can save their state or inhibit the
             *     session from ending
             */
            QUERY_END,
            /**
             * the session is about to end
             */
            ENDING,
        }

        export namespace NotificationFlags {
            export const $gtype: GObject.GType<NotificationFlags>;
        }

        enum NotificationFlags {
            NONE,
        }
        /**
         * Options for how the screencast session should persist.
         */

        /**
         * Options for how the screencast session should persist.
         */
        export namespace PersistMode {
            export const $gtype: GObject.GType<PersistMode>;
        }

        enum PersistMode {
            /**
             * do not persist
             */
            NONE,
            /**
             * persist as long as the application is alive
             */
            TRANSIENT,
            /**
             * persist until the user revokes this permission
             */
            PERSISTENT,
        }

        export namespace PrintFlags {
            export const $gtype: GObject.GType<PrintFlags>;
        }

        enum PrintFlags {
            NONE,
        }

        export namespace SaveFileFlags {
            export const $gtype: GObject.GType<SaveFileFlags>;
        }

        enum SaveFileFlags {
            NONE,
        }

        export namespace SessionMonitorFlags {
            export const $gtype: GObject.GType<SessionMonitorFlags>;
        }

        enum SessionMonitorFlags {
            NONE,
        }
        /**
         * The state of a session.
         */

        /**
         * The state of a session.
         */
        export namespace SessionState {
            export const $gtype: GObject.GType<SessionState>;
        }

        enum SessionState {
            /**
             * the session has not been started.
             */
            INITIAL,
            /**
             * the session is active.
             */
            ACTIVE,
            /**
             * the session is no longer active.
             */
            CLOSED,
        }
        /**
         * The type of a session.
         */

        /**
         * The type of a session.
         */
        export namespace SessionType {
            export const $gtype: GObject.GType<SessionType>;
        }

        enum SessionType {
            /**
             * a screencast session.
             */
            SCREENCAST,
            /**
             * a remote desktop session.
             */
            REMOTE_DESKTOP,
            /**
             * an input capture session.
             */
            INPUT_CAPTURE,
        }

        export namespace UpdateInstallFlags {
            export const $gtype: GObject.GType<UpdateInstallFlags>;
        }

        enum UpdateInstallFlags {
            NONE,
        }

        export namespace UpdateMonitorFlags {
            export const $gtype: GObject.GType<UpdateMonitorFlags>;
        }

        enum UpdateMonitorFlags {
            NONE,
        }
        /**
         * The values of this enum are returned in the
         * [signal`Portal:`:update-progress] signal to indicate
         * the current progress of an installation.
         */

        /**
         * The values of this enum are returned in the
         * [signal`Portal:`:update-progress] signal to indicate
         * the current progress of an installation.
         */
        export namespace UpdateStatus {
            export const $gtype: GObject.GType<UpdateStatus>;
        }

        enum UpdateStatus {
            /**
             * Installation in progress
             */
            RUNNING,
            /**
             * Nothing to install
             */
            EMPTY,
            /**
             * Installation finished successfully
             */
            DONE,
            /**
             * Installation failed
             */
            FAILED,
        }

        export namespace UserInformationFlags {
            export const $gtype: GObject.GType<UserInformationFlags>;
        }

        enum UserInformationFlags {
            NONE,
        }
        const WALLPAPER_TARGET_BOTH: number;
        /**
         * Options to use when requesting background.
         */

        /**
         * Options to use when requesting background.
         */
        export namespace BackgroundFlags {
            export const $gtype: GObject.GType<BackgroundFlags>;
        }

        enum BackgroundFlags {
            /**
             * No options
             */
            NONE,
            /**
             * Request autostart as well
             */
            AUTOSTART,
            /**
             * Whether the application is D-Bus-activatable
             */
            ACTIVATABLE,
        }
        /**
         * Options for how the cursor is handled.
         */

        /**
         * Options for how the cursor is handled.
         */
        export namespace CursorMode {
            export const $gtype: GObject.GType<CursorMode>;
        }

        enum CursorMode {
            /**
             * no cursor
             */
            HIDDEN,
            /**
             * cursor is embedded on the stream
             */
            EMBEDDED,
            /**
             * cursor is sent as metadata of the stream
             */
            METADATA,
        }
        /**
         * Flags to specify what input devices to control for a remote desktop session.
         */

        /**
         * Flags to specify what input devices to control for a remote desktop session.
         */
        export namespace DeviceType {
            export const $gtype: GObject.GType<DeviceType>;
        }

        enum DeviceType {
            /**
             * no device
             */
            NONE,
            /**
             * control the keyboard.
             */
            KEYBOARD,
            /**
             * control the pointer.
             */
            POINTER,
            /**
             * control the touchscreen.
             */
            TOUCHSCREEN,
        }
        /**
         * Flags that determine what session status changes are inhibited.
         */

        /**
         * Flags that determine what session status changes are inhibited.
         */
        export namespace InhibitFlags {
            export const $gtype: GObject.GType<InhibitFlags>;
        }

        enum InhibitFlags {
            /**
             * Inhibit logout
             */
            LOGOUT,
            /**
             * Inhibit user switching
             */
            USER_SWITCH,
            /**
             * Inhibit suspend
             */
            SUSPEND,
            /**
             * Inhibit the session going idle
             */
            IDLE,
        }
        /**
         * Flags to specify what input device capabilities should be captured
         */

        /**
         * Flags to specify what input device capabilities should be captured
         */
        export namespace InputCapability {
            export const $gtype: GObject.GType<InputCapability>;
        }

        enum InputCapability {
            /**
             * no device
             */
            NONE,
            /**
             * capture the keyboard
             */
            KEYBOARD,
            /**
             * capture pointer events
             */
            POINTER,
            /**
             * capture touchscreen events
             */
            TOUCHSCREEN,
        }
        /**
         * The type of a launcher.
         */

        /**
         * The type of a launcher.
         */
        export namespace LauncherType {
            export const $gtype: GObject.GType<LauncherType>;
        }

        enum LauncherType {
            /**
             * a launcher for a regular application
             */
            APPLICATION,
            /**
             * a launcher for a web app
             */
            WEBAPP,
        }
        /**
         * Options for opening files.
         */

        /**
         * Options for opening files.
         */
        export namespace OpenFileFlags {
            export const $gtype: GObject.GType<OpenFileFlags>;
        }

        enum OpenFileFlags {
            /**
             * No options
             */
            NONE,
            /**
             * Allow selecting multiple files
             */
            MULTIPLE,
        }
        /**
         * Options for opening uris.
         */

        /**
         * Options for opening uris.
         */
        export namespace OpenUriFlags {
            export const $gtype: GObject.GType<OpenUriFlags>;
        }

        enum OpenUriFlags {
            /**
             * No options
             */
            NONE,
            /**
             * Use an application chooser for the given uri
             */
            ASK,
            /**
             * Allow writing to file (if uri points to a local file that is exported in the document portal and app is sandboxed itself)
             */
            WRITABLE,
        }
        /**
         * Flags to specify what kind of sources to offer for a screencast session.
         */

        /**
         * Flags to specify what kind of sources to offer for a screencast session.
         */
        export namespace OutputType {
            export const $gtype: GObject.GType<OutputType>;
        }

        enum OutputType {
            /**
             * do not select any output
             */
            NONE,
            /**
             * allow selecting monitors
             */
            MONITOR,
            /**
             * allow selecting individual application windows
             */
            WINDOW,
            /**
             * allow creating new virtual displays
             */
            VIRTUAL,
        }
        /**
         * Options for starting remote desktop sessions.
         */

        /**
         * Options for starting remote desktop sessions.
         */
        export namespace RemoteDesktopFlags {
            export const $gtype: GObject.GType<RemoteDesktopFlags>;
        }

        enum RemoteDesktopFlags {
            /**
             * No options
             */
            NONE,
            /**
             * allow opening multiple streams
             */
            MULTIPLE,
        }
        /**
         * Options for starting screen casts.
         */

        /**
         * Options for starting screen casts.
         */
        export namespace ScreencastFlags {
            export const $gtype: GObject.GType<ScreencastFlags>;
        }

        enum ScreencastFlags {
            /**
             * No options
             */
            NONE,
            /**
             * allow opening multiple streams
             */
            MULTIPLE,
        }

        export namespace ScreenshotFlags {
            export const $gtype: GObject.GType<ScreenshotFlags>;
        }

        enum ScreenshotFlags {
            NONE,
            INTERACTIVE,
        }
        /**
         * Flags influencing the spawn operation and how the
         * new sandbox is created.
         */

        /**
         * Flags influencing the spawn operation and how the
         * new sandbox is created.
         */
        export namespace SpawnFlags {
            export const $gtype: GObject.GType<SpawnFlags>;
        }

        enum SpawnFlags {
            /**
             * No flags
             */
            NONE,
            /**
             * Clear the environment
             */
            CLEARENV,
            /**
             * Spawn the latest version of the app
             */
            LATEST,
            /**
             * Spawn in a sandbox (equivalent to the --sandbox option of flatpak run)
             */
            SANDBOX,
            /**
             * Spawn without network (equivalent to the --unshare=network option of flatpak run)
             */
            NO_NETWORK,
            /**
             * Kill the sandbox when the caller disappears from the session bus
             */
            WATCH,
        }
        /**
         * The values of this enumeration determine where the wallpaper is being set.
         */

        /**
         * The values of this enumeration determine where the wallpaper is being set.
         */
        export namespace WallpaperFlags {
            export const $gtype: GObject.GType<WallpaperFlags>;
        }

        enum WallpaperFlags {
            /**
             * No flags
             */
            NONE,
            /**
             * Set wallpaper on the desktop background
             */
            BACKGROUND,
            /**
             * Set wallpaper on the lockscreen
             */
            LOCKSCREEN,
            /**
             * Request the preview to be shown
             */
            PREVIEW,
        }
        module InputCapturePointerBarrier {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                id: number;
                is_active: boolean;
                isActive: boolean;
                x1: number;
                x2: number;
                y1: number;
                y2: number;
            }
        }

        /**
         * A representation of a pointer barrier on an [class`InputCaptureZone]`.
         * Barriers can be assigned with
         * [method`InputCaptureSession`.set_pointer_barriers], once the Portal
         * interaction is complete the barrier's "is-active" state indicates whether
         * the barrier is active. Barriers can only be used once, subsequent calls to
         * [method`InputCaptureSession`.set_pointer_barriers] will invalidate all
         * current barriers.
         */
        class InputCapturePointerBarrier extends GObject.Object {
            static $gtype: GObject.GType<InputCapturePointerBarrier>;

            // Properties

            /**
             * The caller-assigned unique id of this barrier
             */
            get id(): number;
            /**
             * A boolean indicating whether this barrier is active. A barrier cannot
             * become active once it failed to apply, barriers that are not active can
             * be thus cleaned up by the caller.
             */
            get is_active(): boolean;
            /**
             * A boolean indicating whether this barrier is active. A barrier cannot
             * become active once it failed to apply, barriers that are not active can
             * be thus cleaned up by the caller.
             */
            get isActive(): boolean;
            /**
             * The pointer barrier x offset in logical pixels
             */
            get x1(): number;
            /**
             * The pointer barrier x offset in logical pixels
             */
            get x2(): number;
            /**
             * The pointer barrier y offset in logical pixels
             */
            get y1(): number;
            /**
             * The pointer barrier y offset in logical pixels
             */
            get y2(): number;

            // Constructors

            constructor(properties?: Partial<InputCapturePointerBarrier.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module InputCaptureSession {
            // Signal callback interfaces

            interface Activated {
                (activation_id: number, options: GLib.Variant): void;
            }

            interface Deactivated {
                (activation_id: number, options: GLib.Variant): void;
            }

            interface Disabled {
                (options: GLib.Variant): void;
            }

            interface ZonesChanged {
                (options: GLib.Variant): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A representation of a long-lived input capture portal interaction.
         *
         * The [class`InputCaptureSession]` object is used to represent portal
         * interactions with the input capture desktop portal that extend over
         * multiple portal calls. Usually a caller creates an input capture session,
         * requests the available zones and sets up pointer barriers on those zones
         * before enabling the session.
         *
         * To find available zones, call [method`InputCaptureSession`.get_zones].
         * These [class`InputCaptureZone]` object represent the accessible desktop area
         * for input capturing. [class`InputCapturePointerBarrier]` objects can be set
         * up on these zones to trigger input capture.
         *
         * The [class`InputCaptureSession]` wraps a [class`Session]` object.
         */
        class InputCaptureSession extends GObject.Object {
            static $gtype: GObject.GType<InputCaptureSession>;

            // Constructors

            constructor(properties?: Partial<InputCaptureSession.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'activated',
                callback: (_source: this, activation_id: number, options: GLib.Variant) => void,
            ): number;
            connect_after(
                signal: 'activated',
                callback: (_source: this, activation_id: number, options: GLib.Variant) => void,
            ): number;
            emit(signal: 'activated', activation_id: number, options: GLib.Variant): void;
            connect(
                signal: 'deactivated',
                callback: (_source: this, activation_id: number, options: GLib.Variant) => void,
            ): number;
            connect_after(
                signal: 'deactivated',
                callback: (_source: this, activation_id: number, options: GLib.Variant) => void,
            ): number;
            emit(signal: 'deactivated', activation_id: number, options: GLib.Variant): void;
            connect(signal: 'disabled', callback: (_source: this, options: GLib.Variant) => void): number;
            connect_after(signal: 'disabled', callback: (_source: this, options: GLib.Variant) => void): number;
            emit(signal: 'disabled', options: GLib.Variant): void;
            connect(signal: 'zones-changed', callback: (_source: this, options: GLib.Variant) => void): number;
            connect_after(signal: 'zones-changed', callback: (_source: this, options: GLib.Variant) => void): number;
            emit(signal: 'zones-changed', options: GLib.Variant): void;

            // Methods

            /**
             * Connect this session to an EIS implementation and return the fd.
             * This fd can be passed into ei_setup_backend_fd(). See the libei
             * documentation for details.
             *
             * This is a sync DBus invocation.
             * @returns a socket to the EIS implementation for this input capture session or a negative errno on failure.
             */
            connect_to_eis(): number;
            /**
             * Disables this input capture session.
             */
            disable(): void;
            /**
             * Enables this input capture session. In the future, this client may receive
             * input events.
             */
            enable(): void;
            /**
             * Return the [class`XdpSession]` for this InputCapture session.
             * @returns a [class@Session] object
             */
            get_session(): Session;
            /**
             * Obtains the current set of [class`InputCaptureZone]` objects.
             *
             * The returned object is valid until the zones are invalidated by the
             * [signal`InputCaptureSession:`:zones-changed] signal.
             *
             * Unless the session is active, this function returns `NULL`.
             * @returns the available zones. The caller must keep a reference to the list or the elements if used outside the immediate scope.
             */
            get_zones(): InputCaptureZone[];
            /**
             * Releases this input capture session without a suggested cursor position.
             * @param activation_id
             */
            release(activation_id: number): void;
            /**
             * Releases this input capture session with a suggested cursor position.
             * Note that the implementation is not required to honour this position.
             * @param activation_id
             * @param cursor_x_position the suggested cursor x position once capture has been released
             * @param cursor_y_position the suggested cursor y position once capture has been released
             */
            release_at(activation_id: number, cursor_x_position: number, cursor_y_position: number): void;
            /**
             * Sets the pointer barriers for this session. When the request is done,
             * `callback` will be called. You can then call
             * [method`InputCaptureSession`.set_pointer_barriers_finish] to
             * get the results. The result of this request is the list of pointer barriers
             * that failed to apply - barriers not present in the returned list are active.
             *
             * Once the pointer barrier is
             * applied (i.e. the reply to the DBus Request has been received), the
             * the [property`InputCapturePointerBarrier:`is-active] property is changed on
             * that barrier. Failed barriers have the property set to a %FALSE value.
             * @param barriers the pointer barriers to apply
             * @param cancellable
             * @param callback
             */
            set_pointer_barriers(
                barriers: InputCapturePointerBarrier[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the set-pointer-barriers request, and returns a GList with the pointer
             * barriers that failed to apply and should be cleaned up by the caller.
             * @param result a [iface@Gio.AsyncResult]
             * @returns a list of failed pointer barriers
             */
            set_pointer_barriers_finish(result: Gio.AsyncResult): InputCapturePointerBarrier[];
        }

        module InputCaptureZone {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                height: number;
                is_valid: boolean;
                isValid: boolean;
                width: number;
                x: number;
                y: number;
                zone_set: number;
                zoneSet: number;
            }
        }

        /**
         * A representation of a zone that supports input capture.
         *
         * The [class`XdpInputCaptureZone]` object is used to represent a zone on the
         * user-visible desktop that may be used to set up
         * [class`XdpInputCapturePointerBarrier]` objects. In most cases, the set of
         * [class`XdpInputCaptureZone]` objects represent the available monitors but the
         * exact implementation is up to the implementation.
         */
        class InputCaptureZone extends GObject.Object {
            static $gtype: GObject.GType<InputCaptureZone>;

            // Properties

            /**
             * The height of this zone in logical pixels
             */
            get height(): number;
            /**
             * A boolean indicating whether this zone is currently valid. Zones are
             * invalidated by the Portal's ZonesChanged signal, see
             * [signal`InputCaptureSession:`:zones-changed].
             *
             * Once invalidated, a Zone can be discarded by the caller, it cannot become
             * valid again.
             */
            get is_valid(): boolean;
            set is_valid(val: boolean);
            /**
             * A boolean indicating whether this zone is currently valid. Zones are
             * invalidated by the Portal's ZonesChanged signal, see
             * [signal`InputCaptureSession:`:zones-changed].
             *
             * Once invalidated, a Zone can be discarded by the caller, it cannot become
             * valid again.
             */
            get isValid(): boolean;
            set isValid(val: boolean);
            /**
             * The width of this zone in logical pixels
             */
            get width(): number;
            /**
             * The x offset of this zone in logical pixels
             */
            get x(): number;
            /**
             * The x offset of this zone in logical pixels
             */
            get y(): number;
            get zone_set(): number;
            get zoneSet(): number;

            // Constructors

            constructor(properties?: Partial<InputCaptureZone.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module Portal {
            // Signal callback interfaces

            interface LocationUpdated {
                (
                    latitude: number,
                    longitude: number,
                    altitude: number,
                    accuracy: number,
                    speed: number,
                    heading: number,
                    description: string,
                    timestamp_s: number,
                    timestamp_ms: number,
                ): void;
            }

            interface NotificationActionInvoked {
                (id: string, action: string, parameter?: GLib.Variant | null): void;
            }

            interface SessionStateChanged {
                (screensaver_active: boolean, session_state: LoginSessionState): void;
            }

            interface SpawnExited {
                (pid: number, exit_status: number): void;
            }

            interface UpdateAvailable {
                (running_commit: string, local_commit: string, remote_commit: string): void;
            }

            interface UpdateProgress {
                (
                    n_ops: number,
                    op: number,
                    progress: number,
                    status: UpdateStatus,
                    error: string,
                    error_message: string,
                ): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        /**
         * Context for portal calls.
         *
         * The XdpPortal object provides the main context object
         * for the portal operations of libportal.
         *
         * Typically, an application will create a single XdpPortal
         * object with [ctor`Portal`.new] and use it throughout its lifetime.
         */
        class Portal extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Portal>;

            // Constructors

            constructor(properties?: Partial<Portal.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static initable_new(): Portal;

            static ['new'](): Portal;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'location-updated',
                callback: (
                    _source: this,
                    latitude: number,
                    longitude: number,
                    altitude: number,
                    accuracy: number,
                    speed: number,
                    heading: number,
                    description: string,
                    timestamp_s: number,
                    timestamp_ms: number,
                ) => void,
            ): number;
            connect_after(
                signal: 'location-updated',
                callback: (
                    _source: this,
                    latitude: number,
                    longitude: number,
                    altitude: number,
                    accuracy: number,
                    speed: number,
                    heading: number,
                    description: string,
                    timestamp_s: number,
                    timestamp_ms: number,
                ) => void,
            ): number;
            emit(
                signal: 'location-updated',
                latitude: number,
                longitude: number,
                altitude: number,
                accuracy: number,
                speed: number,
                heading: number,
                description: string,
                timestamp_s: number,
                timestamp_ms: number,
            ): void;
            connect(
                signal: 'notification-action-invoked',
                callback: (_source: this, id: string, action: string, parameter: GLib.Variant | null) => void,
            ): number;
            connect_after(
                signal: 'notification-action-invoked',
                callback: (_source: this, id: string, action: string, parameter: GLib.Variant | null) => void,
            ): number;
            emit(
                signal: 'notification-action-invoked',
                id: string,
                action: string,
                parameter?: GLib.Variant | null,
            ): void;
            connect(
                signal: 'session-state-changed',
                callback: (_source: this, screensaver_active: boolean, session_state: LoginSessionState) => void,
            ): number;
            connect_after(
                signal: 'session-state-changed',
                callback: (_source: this, screensaver_active: boolean, session_state: LoginSessionState) => void,
            ): number;
            emit(signal: 'session-state-changed', screensaver_active: boolean, session_state: LoginSessionState): void;
            connect(
                signal: 'spawn-exited',
                callback: (_source: this, pid: number, exit_status: number) => void,
            ): number;
            connect_after(
                signal: 'spawn-exited',
                callback: (_source: this, pid: number, exit_status: number) => void,
            ): number;
            emit(signal: 'spawn-exited', pid: number, exit_status: number): void;
            connect(
                signal: 'update-available',
                callback: (_source: this, running_commit: string, local_commit: string, remote_commit: string) => void,
            ): number;
            connect_after(
                signal: 'update-available',
                callback: (_source: this, running_commit: string, local_commit: string, remote_commit: string) => void,
            ): number;
            emit(signal: 'update-available', running_commit: string, local_commit: string, remote_commit: string): void;
            connect(
                signal: 'update-progress',
                callback: (
                    _source: this,
                    n_ops: number,
                    op: number,
                    progress: number,
                    status: UpdateStatus,
                    error: string,
                    error_message: string,
                ) => void,
            ): number;
            connect_after(
                signal: 'update-progress',
                callback: (
                    _source: this,
                    n_ops: number,
                    op: number,
                    progress: number,
                    status: UpdateStatus,
                    error: string,
                    error_message: string,
                ) => void,
            ): number;
            emit(
                signal: 'update-progress',
                n_ops: number,
                op: number,
                progress: number,
                status: UpdateStatus,
                error: string,
                error_message: string,
            ): void;

            // Static methods

            /**
             * Detects if running inside of a Flatpak or WebKit sandbox.
             *
             * See also: [func`Portal`.running_under_sandbox].
             */
            static running_under_flatpak(): boolean;
            /**
             * This function tries to determine if the current process is running under a
             * sandbox that requires the use of portals.
             *
             * If you need to check error conditions see [func`Portal`.running_under_snap].
             *
             * Note that these functions are all cached and will always return the same result.
             */
            static running_under_sandbox(): boolean;
            /**
             * Detects if you are running inside of a Snap sandbox.
             *
             * See also: [func`Portal`.running_under_sandbox].
             */
            static running_under_snap(): boolean;

            // Methods

            /**
             * Request access to a camera.
             *
             * When the request is done, `callback` will be called.
             * You can then call [method`Portal`.access_camera_finish]
             * to get the results.
             * @param parent parent window information
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            access_camera(
                parent: Parent | null,
                flags: CameraFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a camera acess request.
             *
             * Returns the result as a boolean.
             *
             * If the access was granted, you can then call
             * [method`Portal`.open_pipewire_remote_for_camera]
             * to obtain a pipewire remote.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if access to a camera was granted
             */
            access_camera_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sends a desktop notification.
             *
             * The following keys may be present in `notification:`
             *
             * - title `s`: a user-visible string to display as title
             * - body `s`: a user-visible string to display as body
             * - icon `v`: a serialized icon (in the format produced by [method`Gio`.Icon.serialize])
             * - priority `s`: "low", "normal", "high" or "urgent"
             * - default-action `s`: name of an action that
             *     will be activated when the user clicks on the notification
             * - default-action-target `v`: target parameter to send along when
             *     activating the default action.
             * - buttons `aa{sv}`: array of serialized buttons
             *
             * Each serialized button is a dictionary with the following supported keys:
             *
             * - label `s`: user-visible lable for the button. Mandatory
             * - action `s`: name of an action that will be activated when
             *     the user clicks on the button. Mandatory
             * - target `v`: target parameter to send along when activating
             *     the button
             *
             * Actions with a prefix of "app." are assumed to be exported by the
             * application and will be activated via the org.freedesktop.Application
             * interface, others are activated by emitting the
             * [signal`Portal:`:notification-action-invoked] signal.
             *
             * It is the callers responsibility to ensure that the ID is unique
             * among all notifications.
             *
             * To withdraw a notification, use [method`Portal`.remove_notification].
             * @param id unique ID for the notification
             * @param notification a [struct@GLib.Variant] dictionary with the content of the notification
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            add_notification(
                id: string,
                notification: GLib.Variant,
                flags: NotificationFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the notification request.
             *
             * Returns the result as a boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the notification was added
             */
            add_notification_finish(result: Gio.AsyncResult): boolean;
            /**
             * Presents a window that lets the user compose an email,
             * with some pre-filled information.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.compose_email_finish] to get the results.
             * @param parent parent window information
             * @param addresses the email addresses to send to
             * @param cc the email addresses to cc
             * @param bcc the email addresses to bcc
             * @param subject the subject for the email
             * @param body the body for the email
             * @param attachments an array of paths for files to attach
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            compose_email(
                parent: Parent | null,
                addresses: string[] | null,
                cc: string[] | null,
                bcc: string[] | null,
                subject: string | null,
                body: string | null,
                attachments: string[] | null,
                flags: EmailFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the compose-email request.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the request was handled successfully
             */
            compose_email_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a session for input capture
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.create_input_capture_session_finish] to get the results.
             * @param parent parent window information
             * @param capabilities which kinds of capabilities to request
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            create_input_capture_session(
                parent: Parent | null,
                capabilities: InputCapability,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the InputCapture CreateSession request, and returns a
             * [class`InputCaptureSession]`. To get to the [class`Session]` within use
             * xdp_input_capture_session_get_session().
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [class@InputCaptureSession]
             */
            create_input_capture_session_finish(result: Gio.AsyncResult): InputCaptureSession;
            /**
             * Creates a session for remote desktop.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.create_remote_desktop_session_finish] to get the results.
             * @param devices which kinds of input devices to ofer in the new dialog
             * @param outputs which kinds of source to offer in the dialog
             * @param flags options for this call
             * @param cursor_mode the cursor mode of the session
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            create_remote_desktop_session(
                devices: DeviceType,
                outputs: OutputType,
                flags: RemoteDesktopFlags,
                cursor_mode: CursorMode,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the create-remote-desktop request, and returns a [class`Session]`.
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [class@Session]
             */
            create_remote_desktop_session_finish(result: Gio.AsyncResult): Session;
            /**
             * Creates a session for remote desktop.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.create_remote_desktop_session_finish] to get the results.
             * @param devices which kinds of input devices to ofer in the new dialog
             * @param outputs which kinds of source to offer in the dialog
             * @param flags options for this call
             * @param cursor_mode the cursor mode of the session
             * @param persist_mode the persist mode of the session
             * @param restore_token the token of a previous screencast session to restore
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            create_remote_desktop_session_full(
                devices: DeviceType,
                outputs: OutputType,
                flags: RemoteDesktopFlags,
                cursor_mode: CursorMode,
                persist_mode: PersistMode,
                restore_token?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Creates a session for a screencast.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.create_screencast_session_finish] to get the results.
             * @param outputs which kinds of source to offer in the dialog
             * @param flags options for this call
             * @param cursor_mode the cursor mode of the session
             * @param persist_mode the persist mode of the session
             * @param restore_token the token of a previous screencast session to restore
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            create_screencast_session(
                outputs: OutputType,
                flags: ScreencastFlags,
                cursor_mode: CursorMode,
                persist_mode: PersistMode,
                restore_token?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the create-screencast request, and returns a [class`Session]`.
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [class@Session]
             */
            create_screencast_session_finish(result: Gio.AsyncResult): Session;
            /**
             * This function gets the contents of a .desktop file that was previously
             * installed by the dynamic launcher portal.
             *
             * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
             * "." and suffixed with ".desktop".
             * @param desktop_file_id the .desktop file name
             * @returns the contents of the desktop file, or %NULL with   @error set
             */
            dynamic_launcher_get_desktop_entry(desktop_file_id: string): string;
            /**
             * This function gets the icon associated with a .desktop file that was previously
             * installed by the dynamic launcher portal.
             *
             * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
             * "." and suffixed with ".desktop".
             * @param desktop_file_id the .desktop file name
             * @param out_icon_format return location for icon format string, one of "png", "jpeg", "svg"
             * @param out_icon_size return location for icon size
             * @returns the icon in a format recognized by g_icon_deserialize(),   or %NULL with @error set
             */
            dynamic_launcher_get_icon(
                desktop_file_id: string,
                out_icon_format?: string | null,
                out_icon_size?: number | null,
            ): GLib.Variant;
            /**
             * This function completes installation of a launcher so that the icon and name
             * given in previous method calls will show up in the desktop environment's menu.
             *
             * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
             * "." and suffixed with ".desktop".
             *
             * The `desktop_entry` data need not include Icon= or Name= entries since these
             * will be added by the portal, and the Exec= entry will be rewritten to call
             * the application with e.g. "flatpak run" depending on the sandbox status of
             * the app.
             * @param token a token acquired via a [method@Portal.dynamic_launcher_request_install_token] or [method@Portal.dynamic_launcher_prepare_install] call
             * @param desktop_file_id the .desktop file name to be used
             * @param desktop_entry the key-file to be used for the contents of the .desktop file
             * @returns %TRUE if the installation was successful, %FALSE with @error set   otherwise
             */
            dynamic_launcher_install(token: string, desktop_file_id: string, desktop_entry: string): boolean;
            dynamic_launcher_launch(desktop_file_id: string, activation_token: string): boolean;
            /**
             * Presents a dialog to the user so they can confirm they want to install a
             * launcher to their desktop.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.dynamic_launcher_prepare_install_finish] to get the results.
             * @param parent parent window information
             * @param name the name for the launcher
             * @param icon_v a #GBytesIcon as returned by g_icon_serialize(). Must be a png or jpeg no larger than 512x512, or an svg
             * @param launcher_type the type of the launcher
             * @param target the URL if the launcher is for a web app, or %NULL
             * @param editable_name if %TRUE, the user will be able to edit the name of the launcher
             * @param editable_icon if %TRUE, the user will be able to edit the icon of the launcher, if the implementation supports this
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            dynamic_launcher_prepare_install(
                parent: Parent | null,
                name: string,
                icon_v: GLib.Variant,
                launcher_type: LauncherType,
                target: string | null,
                editable_name: boolean,
                editable_icon: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the prepare-install-launcher request, and returns
             * [struct`GLib`.Variant] dictionary with the following information:
             *
             * - name s: the name chosen by the user (or the provided name if the
             *     editable_name option was not set)
             * - token s: a token that can by used in a [method`Portal`.dynamic_launcher_install]
             *     call to complete the installation
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [struct@GLib.Variant] dictionary with launcher   information
             */
            dynamic_launcher_prepare_install_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Requests a token which can be passed to [method`Portal`.dynamic_launcher_install]
             * to complete installation of the launcher without user interaction.
             *
             * This function only works when the caller's app ID is in the allowlist for
             * the portal backend being used. It's intended for software centers such as
             * GNOME Software or KDE Discover.
             * @param name the name for the launcher
             * @param icon_v a #GBytesIcon as returned by g_icon_serialize(). Must be a png or jpeg no larger than 512x512, or an svg
             * @returns a token that can be passed to   [method@Portal.dynamic_launcher_install], or %NULL with @error set
             */
            dynamic_launcher_request_install_token(name: string, icon_v: GLib.Variant): string;
            /**
             * This function uninstalls a launcher that was previously installed using the
             * dynamic launcher portal, resulting in the .desktop file and icon being deleted.
             *
             * The `desktop_file_id` must be prefixed with the caller's app ID followed by a
             * "." and suffixed with ".desktop".
             * @param desktop_file_id the .desktop file name
             * @returns %TRUE if the uninstallation was successful, %FALSE with @error set   otherwise
             */
            dynamic_launcher_uninstall(desktop_file_id: string): boolean;
            /**
             * This function returns an object to access settings exposed through
             * the portal.
             * @returns a [class@Settings] new settings object.
             */
            get_settings(): Settings;
            /**
             * Gets information about the user.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.get_user_information_finish] to get the results.
             * @param parent parent window information
             * @param reason a string that can be shown in the dialog to explain    why the information is needed
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            get_user_information(
                parent: Parent | null,
                reason: string | null,
                flags: UserInformationFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the get-user-information request.
             *
             * Returns the result in the form of a [struct`GLib`.Variant] dictionary
             * containing the following fields:
             *
             * - id `s`: the user ID
             * - name `s`: the users real name
             * - image `s`: the uri of an image file for the users avatar picture
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [struct@GLib.Variant] dictionary with user information
             */
            get_user_information_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Returns whether any camera are present.
             * @returns `TRUE` if the system has cameras
             */
            is_camera_present(): boolean;
            /**
             * Makes `XdpPortal` start monitoring location changes.
             *
             * When the location changes, the [signal`Portal:`:location-updated].
             * signal is emitted.
             *
             * Use [method`Portal`.location_monitor_stop] to stop monitoring.
             *
             * Note that [class`Portal]` only maintains a single location monitor
             * at a time. If you want to change the `distance_threshold,`
             * `time_threshold` or `accuracy` of the current monitor, you
             * first have to call [method`Portal`.location_monitor_stop] to
             * stop monitoring.
             * @param parent a [struct@Parent], or `NULL`
             * @param distance_threshold distance threshold, in meters
             * @param time_threshold time threshold, in seconds
             * @param accuracy desired accuracy
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            location_monitor_start(
                parent: Parent | null,
                distance_threshold: number,
                time_threshold: number,
                accuracy: LocationAccuracy,
                flags: LocationMonitorFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a location-monitor request.
             *
             * Returns result in the form of boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the request succeeded
             */
            location_monitor_start_finish(result: Gio.AsyncResult): boolean;
            /**
             * Stops location monitoring that was started with
             * [method`Portal`.location_monitor_start].
             */
            location_monitor_stop(): void;
            /**
             * Opens the directory containing the file specified by the `uri`.
             *
             * which must be a file: uri pointing to a file that the application has access
             * to.
             * @param parent parent window information
             * @param uri the URI to open
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            open_directory(
                parent: Parent,
                uri: string,
                flags: OpenUriFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the open-directory request.
             *
             * Returns the result in the form of a boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the call succeeded
             */
            open_directory_finish(result: Gio.AsyncResult): boolean;
            /**
             * Asks the user to open one or more files.
             *
             * The format for the `filters` argument is `a(sa(us))`.
             * Each item in the array specifies a single filter to offer to the user.
             * The first string is a user-visible name for the filter. The `a(us)`
             * specifies a list of filter strings, which can be either a glob pattern
             * (indicated by 0) or a mimetype (indicated by 1).
             *
             * Example: `[('Images', [(0, '*.ico'), (1, 'image/png')]), ('Text', [(0, '*.txt')])]`
             *
             * The format for the `choices` argument is `a(ssa(ss)s)`.
             * For each element, the first string is an ID that will be returned
             * with the response, te second string is a user-visible label. The
             * `a(ss)` is the list of choices, each being a is an ID and a
             * user-visible label. The final string is the initial selection,
             * or `""`, to let the portal decide which choice will be initially selected.
             * None of the strings, except for the initial selection, should be empty.
             *
             * As a special case, passing an empty array for the list of choices
             * indicates a boolean choice that is typically displayed as a check
             * button, using `"true"` and `"false"` as the choices.
             *
             * Example: `[('encoding', 'Encoding', [('utf8', 'Unicode (UTF-8)'), ('latin15', 'Western')], 'latin15'), ('reencode', 'Reencode', [], 'false')]`
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.open_file_finish] to get the results.
             * @param parent parent window information
             * @param title title for the file chooser dialog
             * @param filters a [struct@GLib.Variant] describing file filters
             * @param current_filter a [struct@GLib.Variant] describing the current file filter
             * @param choices a [struct@GLib.Variant] describing extra widgets
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            open_file(
                parent: Parent | null,
                title: string,
                filters: GLib.Variant | null,
                current_filter: GLib.Variant | null,
                choices: GLib.Variant | null,
                flags: OpenFileFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the open-file request
             *
             * Returns the result in the form of a [struct`GLib`.Variant] dictionary
             * containing the following fields:
             *
             * - uris `as`: an array of strings containing the uris of selected files
             * - choices `a(ss)`: an array of pairs of strings, the first string being the
             *     ID of a combobox that was passed into this call, the second string
             *     being the selected option.
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [struct@GLib.Variant] dictionary with the results
             */
            open_file_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Opens a file descriptor to the pipewire remote where the camera
             * nodes are available.
             *
             * The file descriptor should be used to create a pw_core object, by using
             * pw_context_connect_fd(). Only the camera nodes will be available from this
             * pipewire node.
             * @returns the file descriptor
             */
            open_pipewire_remote_for_camera(): number;
            /**
             * Opens `uri` with an external handler.
             * @param parent parent window information
             * @param uri the URI to open
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            open_uri(
                parent: Parent,
                uri: string,
                flags: OpenUriFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the open-uri request.
             *
             * Returns the result in the form of a boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the call succeeded
             */
            open_uri_finish(result: Gio.AsyncResult): boolean;
            /**
             * Lets the user pick a color from the screen.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.pick_color_finish] to get the results.
             * @param parent parent window information
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            pick_color(
                parent?: Parent | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a pick-color request.
             *
             * Returns the result in the form of a GVariant of the form (ddd), containing
             * red, green and blue components in the range [0,1].
             * @param result a [iface@Gio.AsyncResult]
             * @returns GVariant containing the color
             */
            pick_color_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Presents a print dialog to the user and returns print settings and page setup.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.prepare_print_finish] to get the results.
             * @param parent parent window information
             * @param title tile for the print dialog
             * @param settings Serialized print settings
             * @param page_setup Serialized page setup
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            prepare_print(
                parent: Parent | null,
                title: string,
                settings: GLib.Variant | null,
                page_setup: GLib.Variant | null,
                flags: PrintFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the prepare-print request.
             *
             * Returns a [struct`GLib`.Variant] dictionary with the following information:
             *
             * - settings `a{sv}`: print settings as set up by the user in the print dialog
             * - page-setup `a{sv}: page setup as set up by the user in the print dialog
             * - token u: a token that can by used in a [method`Portal`.print_file] call to
             *     avoid the print dialog
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [struct@GLib.Variant] dictionary with print information
             */
            prepare_print_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Prints a file.
             *
             * If a valid token is present in the `options,` then this call will print
             * with the settings from the Print call that the token refers to. If
             * no token is present, then a print dialog will be presented to the user.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.print_file_finish] to get the results.
             * @param parent parent window information
             * @param title tile for the print dialog
             * @param token token that was returned by a previous [method@Portal.prepare_print] call, or 0
             * @param file path of the document to print
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            print_file(
                parent: Parent | null,
                title: string,
                token: number,
                file: string,
                flags: PrintFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the print request.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the request was successful
             */
            print_file_finish(result: Gio.AsyncResult): boolean;
            /**
             * Withdraws a desktop notification.
             * @param id the ID of an notification
             */
            remove_notification(id: string): void;
            /**
             * Requests background permissions.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.request_background_finish] to get the results.
             * @param parent parent window information
             * @param reason reason to present to user for request
             * @param commandline command line to autostart
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            request_background(
                parent: Parent | null,
                reason: string | null,
                commandline: string[] | null,
                flags: BackgroundFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the request.
             *
             * Returns `TRUE` if successful.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if successful.
             */
            request_background_finish(result: Gio.AsyncResult): boolean;
            /**
             * Asks the user for a location to save a file.
             *
             * The format for the `filters` argument is the same as for [method`Portal`.open_file].
             *
             * The format for the `choices` argument is the same as for [method`Portal`.open_file].
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.save_file_finish] to get the results.
             * @param parent parent window information
             * @param title title for the file chooser dialog
             * @param current_name suggested filename
             * @param current_folder suggested folder to save the file in
             * @param current_file the current file (when saving an existing file)
             * @param filters a [struct@GLib.Variant] describing file filters
             * @param current_filter a [struct@GLib.Variant] describing the current file filter
             * @param choices a [struct@GLib.Variant] describing extra widgets
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            save_file(
                parent: Parent | null,
                title: string,
                current_name: string | null,
                current_folder: string | null,
                current_file: string | null,
                filters: GLib.Variant | null,
                current_filter: GLib.Variant | null,
                choices: GLib.Variant | null,
                flags: SaveFileFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the save-file request.
             *
             * Returns the result in the form of a [struct`GLib`.Variant] dictionary
             * containing the following fields:
             *
             * - uris `(as)`: an array of strings containing the uri of the selected file
             * - choices `a(ss)`: an array of pairs of strings, the first string being the
             *   ID of a combobox that was passed into this call, the second string
             *   being the selected option.
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [struct@GLib.Variant] dictionary with the results
             */
            save_file_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Asks for a folder as a location to save one or more files.
             *
             * The names of the files will be used as-is and appended to the selected
             * folder's path in the list of returned files. If the selected folder already
             * contains a file with one of the given names, the portal may prompt or take
             * some other action to construct a unique file name and return that instead.
             *
             * The format for the `choices` argument is the same as for [method`Portal`.open_file].
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.save_file_finish] to get the results.
             * @param parent parent window information
             * @param title title for the file chooser dialog
             * @param current_name suggested filename
             * @param current_folder suggested folder to save the file in
             * @param files An array of file names to be saved
             * @param choices a [struct@GLib.Variant] describing extra widgets
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            save_files(
                parent: Parent | null,
                title: string,
                current_name: string | null,
                current_folder: string | null,
                files: GLib.Variant,
                choices: GLib.Variant | null,
                flags: SaveFileFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the save-files request.
             *
             * Returns the result in the form of a [struct`GLib`.Variant] dictionary
             * containing the following fields:
             *
             * - uris `(as)`: an array of strings containing the uri corresponding to each
             *   file passed to the save-files request, in the same order. Note that the
             *   file names may have changed, for example if a file with the same name in
             *   the selected folder already exists.
             * - choices `a(ss)`: an array of pairs of strings, the first string being the
             *   ID of a combobox that was passed into this call, the second string
             *   being the selected option.
             * @param result a [iface@Gio.AsyncResult]
             * @returns a [struct@GLib.Variant] dictionary with the results
             */
            save_files_finish(result: Gio.AsyncResult): GLib.Variant;
            /**
             * Inhibits various session status changes.
             *
             * To obtain an ID that can be used to undo the inhibition, use
             * [method`Portal`.session_inhibit_finish] in the callback.
             *
             * To remove an active inhibitor, call [method`Portal`.session_uninhibit]
             * with the same ID.
             * @param parent parent window information
             * @param reason user-visible reason for the inhibition
             * @param flags information about what to inhibit
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            session_inhibit(
                parent: Parent | null,
                reason: string | null,
                flags: InhibitFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the inhbit request.
             *
             * Returns the ID of the inhibition as a positive integer. The ID can be passed
             * to [method`Portal`.session_uninhibit] to undo the inhibition.
             * @param result a [iface@Gio.AsyncResult]
             * @returns the ID of the inhibition, or -1 if there was an error
             */
            session_inhibit_finish(result: Gio.AsyncResult): number;
            /**
             * This method should be called within one second of
             * receiving a [signal`Portal:`:session-state-changed] signal
             * with the 'Query End' state, to acknowledge that they
             * have handled the state change.
             *
             * Possible ways to handle the state change are either
             * to call [method`Portal`.session_inhibit] to prevent the
             * session from ending, or to save your state and get
             * ready for the session to end.
             */
            session_monitor_query_end_response(): void;
            /**
             * Makes [class`Portal]` start monitoring the login session state.
             *
             * When the state changes, the [signal`Portal:`:session-state-changed]
             * signal is emitted.
             *
             * Use [method`Portal`.session_monitor_stop] to stop monitoring.
             * @param parent a XdpParent, or `NULL`
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            session_monitor_start(
                parent: Parent | null,
                flags: SessionMonitorFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a session-monitor request.
             *
             * Returns the result in the form of boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the request succeeded
             */
            session_monitor_start_finish(result: Gio.AsyncResult): boolean;
            /**
             * Stops session state monitoring that was started with
             * [method`Portal`.session_monitor_start].
             */
            session_monitor_stop(): void;
            /**
             * Removes an inhibitor that was created by a call
             * to [method`Portal`.session_inhibit].
             * @param id unique ID for an active inhibition
             */
            session_uninhibit(id: number): void;
            /**
             * Sets the status information of the application, for when it's running
             * in background.
             * @param status_message status message when running in background
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            set_background_status(
                status_message?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes setting the background status of the application.
             * @param result a [iface@Gio.AsyncResult]
             * @returns %TRUE if successfully set status, %FALSE otherwise
             */
            set_background_status_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets a desktop background image, given by a uri.
             * @param parent parent window information
             * @param uri the URI to use
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            set_wallpaper(
                parent: Parent | null,
                uri: string,
                flags: WallpaperFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the open-uri request.
             *
             * Returns the result in the form of a boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the call succeeded
             */
            set_wallpaper_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a new copy of the applications sandbox, and runs
             * a process in, with the given arguments.
             *
             * The learn when the spawned process exits, connect to the
             * [signal`Portal:`:spawn-exited] signal.
             * @param cwd the cwd for the new process
             * @param argv the argv for the new process
             * @param fds an array of open fds to pass to the new process, or `NULL`
             * @param map_to an array of integers to map the @fds to, or `NULL`. Must be the same     length as @fds
             * @param env an array of KEY=VALUE environment settings, or `NULL`
             * @param flags flags influencing the spawn operation
             * @param sandbox_expose paths to expose rw in the new sandbox, or `NULL`
             * @param sandbox_expose_ro paths to expose ro in the new sandbox, or `NULL`
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            spawn(
                cwd: string,
                argv: string[],
                fds: number[] | null,
                map_to: number[] | null,
                env: string[] | null,
                flags: SpawnFlags,
                sandbox_expose?: string[] | null,
                sandbox_expose_ro?: string[] | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the spawn request.
             *
             * Returns the pid of the newly spawned process.
             * @param result a [iface@Gio.AsyncResult]
             * @returns the pid of the spawned process.
             */
            spawn_finish(result: Gio.AsyncResult): never;
            /**
             * Sends a Unix signal to a process that has been spawned
             * by [method`Portal`.spawn].
             * @param pid the pid of the process to send a signal to
             * @param signal the Unix signal to send (see signal(7))
             * @param to_process_group whether to send the signal to the process     group of the process
             */
            spawn_signal(pid: never, signal: number, to_process_group: boolean): void;
            /**
             * Takes a screenshot.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Portal`.take_screenshot_finish] to get the results.
             * @param parent parent window information
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            take_screenshot(
                parent: Parent | null,
                flags: ScreenshotFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a screenshot request.
             *
             * Returns the result in the form of a URI pointing to an image file.
             * @param result a [iface@Gio.AsyncResult]
             * @returns URI pointing to an image file
             */
            take_screenshot_finish(result: Gio.AsyncResult): string | null;
            /**
             * Sends the file at `path` to the trash can.
             * @param path the path for a local file
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            trash_file(
                path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the trash-file request.
             *
             * Returns the result in the form of a boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the call succeeded
             */
            trash_file_finish(result: Gio.AsyncResult): boolean;
            /**
             * Installs an available software update.
             *
             * This should be called in response to a [signal`Portal:`:update-available]
             * signal.
             *
             * During the update installation, the [signal`Portal:`:update-progress]
             * signal will be emitted to provide progress information.
             * @param parent a [struct@Parent]
             * @param flags options for this call
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            update_install(
                parent: Parent,
                flags: UpdateInstallFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an update-installation request.
             *
             * Returns the result in the form of boolean.
             *
             * Note that the update may not be completely installed
             * by the time this function is called. You need to
             * listen to the [signal`Portal:`:update-progress] signal
             * to learn when the installation is complete.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the update is being installed
             */
            update_install_finish(result: Gio.AsyncResult): boolean;
            /**
             * Makes `XdpPortal` start monitoring for available software updates.
             *
             * When a new update is available, the [signal`Portal:`:update-available].
             * signal is emitted.
             *
             * Use [method`Portal`.update_monitor_stop] to stop monitoring.
             * @param flags options for this cal..
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            update_monitor_start(
                flags: UpdateMonitorFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an update-monitor request.
             *
             * Returns the result in the form of boolean.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the request succeeded
             */
            update_monitor_start_finish(result: Gio.AsyncResult): boolean;
            /**
             * Stops update monitoring that was started with
             * [method`Portal`.update_monitor_start].
             */
            update_monitor_stop(): void;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

        module Session {
            // Signal callback interfaces

            interface Closed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A representation of long-lived screencast portal interactions.
         *
         * The XdpSession object is used to represent portal interactions with the
         * screencast or remote desktop portals that extend over multiple portal calls.
         *
         * To find out what kind of session an XdpSession object represents and whether
         * it is still active, you can use [method`Session`.get_session_type] and
         * [method`Session`.get_session_state].
         *
         * All sessions start in an initial state. They can be made active by calling
         * [method`Session`.start], and ended by calling [method`Session`.close].
         */
        class Session extends GObject.Object {
            static $gtype: GObject.GType<Session>;

            // Constructors

            constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'closed', callback: (_source: this) => void): number;
            connect_after(signal: 'closed', callback: (_source: this) => void): number;
            emit(signal: 'closed'): void;

            // Methods

            /**
             * Closes the session.
             */
            close(): void;
            /**
             * Connect this XdpRemoteDesktopSession to an EIS implementation and return the fd.
             * This fd can be passed into ei_setup_backend_fd(). See the libei
             * documentation for details.
             *
             * This call must be issued before xdp_session_start(). If successful, all input
             * event emulation must be handled via the EIS connection and calls to
             * xdp_session_pointer_motion() etc. are silently ignored.
             * @returns the file descriptor to the EIS implementation
             */
            connect_to_eis(): number;
            /**
             * Obtains the devices that the user selected.
             *
             * Unless the session is active, this function returns `XDP_DEVICE_NONE`.
             * @returns the selected devices
             */
            get_devices(): DeviceType;
            /**
             * Retrieves the effective persist mode of `session`.
             *
             * May only be called after `session` is successfully started, i.e. after
             * [method`Session`.start_finish].
             * @returns the effective persist mode of @session
             */
            get_persist_mode(): PersistMode;
            /**
             * Retrieves the restore token of `session`.
             *
             * A restore token will only be available if `XDP_PERSIST_MODE_TRANSIENT`
             * or `XDP_PERSIST_MODE_PERSISTENT` was passed when creating the screencast
             * session.
             *
             * Remote desktop sessions cannot be restored.
             *
             * May only be called after `session` is successfully started, i.e. after
             * [method`Session`.start_finish].
             * @returns the restore token of @session
             */
            get_restore_token(): string | null;
            /**
             * Obtains information about the state of the session that is represented
             * by `session`.
             * @returns the state of @session
             */
            get_session_state(): SessionState;
            /**
             * Obtains information about the type of session that is represented
             * by `session`.
             * @returns the type of @session
             */
            get_session_type(): SessionType;
            /**
             * Obtains the streams that the user selected.
             *
             * The information in the returned [struct`GLib`.Variant] has the format
             * `a(ua{sv})`. Each item in the array is describing a stream. The first member
             * is the pipewire node ID, the second is a dictionary of stream properties,
             * including:
             *
             * - position, `(ii)`: a tuple consisting of the position `(x, y)` in the compositor
             *     coordinate space. Note that the position may not be equivalent to a
             *     position in a pixel coordinate space. Only available for monitor streams.
             * - size, `(ii)`: a tuple consisting of (width, height). The size represents the size
             *     of the stream as it is displayed in the compositor coordinate space.
             *     Note that this size may not be equivalent to a size in a pixel coordinate
             *     space. The size may differ from the size of the stream.
             *
             * Unless the session is active, this function returns `NULL`.
             * @returns the selected streams
             */
            get_streams(): GLib.Variant;
            /**
             * Changes the state of the key to `state`.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_KEYBOARD` access.
             * @param keysym whether to interpret @key as a keysym instead of a keycode
             * @param key the keysym or keycode to change
             * @param state the new state
             */
            keyboard_key(keysym: boolean, key: number, state: KeyState): void;
            /**
             * Opens a file descriptor to the pipewire remote where the screencast
             * streams are available.
             *
             * The file descriptor should be used to create a pw_remote object, by using
             * pw_remote_connect_fd(). Only the screencast stream nodes will be available
             * from this pipewire node.
             * @returns the file descriptor
             */
            open_pipewire_remote(): number;
            /**
             * The axis movement from a smooth scroll device, such as a touchpad.
             * When applicable, the size of the motion delta should be equivalent to
             * the motion vector of a pointer motion done using the same advice.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_POINTER` access.
             * @param finish whether this is the last in a series of related events
             * @param dx relative axis movement on the X axis
             * @param dy relative axis movement on the Y axis
             */
            pointer_axis(finish: boolean, dx: number, dy: number): void;
            /**
             * The axis movement from a discrete scroll device.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_POINTER` access.
             * @param axis the axis to change
             * @param steps number of steps scrolled
             */
            pointer_axis_discrete(axis: DiscreteAxis, steps: number): void;
            /**
             * Changes the state of the button to `state`.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_POINTER` access.
             * @param button the button
             * @param state the new state
             */
            pointer_button(button: number, state: ButtonState): void;
            /**
             * Moves the pointer from its current position.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_POINTER` access.
             * @param dx relative horizontal movement
             * @param dy relative vertical movement
             */
            pointer_motion(dx: number, dy: number): void;
            /**
             * Moves the pointer to a new position in the given streams logical
             * coordinate space.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_POINTER` access.
             * @param stream the node ID of the pipewire stream the position is relative to
             * @param x new X position
             * @param y new Y position
             */
            pointer_position(stream: number, x: number, y: number): void;
            /**
             * Starts the session.
             *
             * When the request is done, `callback` will be called. You can then
             * call [method`Session`.start_finish] to get the results.
             * @param parent parent window information
             * @param cancellable optional [class@Gio.Cancellable]
             * @param callback a callback to call when the request is done
             */
            start(
                parent?: Parent | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the session-start request.
             * @param result a [iface@Gio.AsyncResult]
             * @returns `TRUE` if the session was started successfully.
             */
            start_finish(result: Gio.AsyncResult): boolean;
            /**
             * Notify about a new touch down event.
             *
             * The `(x, y)` position represents the new touch point position in the streams
             * logical coordinate space.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_TOUCHSCREEN` access.
             * @param stream the node ID of the pipewire stream the position is relative to
             * @param slot touch slot where the touch point appeared
             * @param x new X position
             * @param y new Y position
             */
            touch_down(stream: number, slot: number, x: number, y: number): void;
            /**
             * Notify about a new touch motion event.
             *
             * The `(x, y)` position represents where the touch point position in the
             * streams logical coordinate space moved.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_TOUCHSCREEN` access.
             * @param stream the node ID of the pipewire stream the position is relative to
             * @param slot touch slot that is changing position
             * @param x new X position
             * @param y new Y position
             */
            touch_position(stream: number, slot: number, x: number, y: number): void;
            /**
             * Notify about a new touch up event.
             *
             * May only be called on a remote desktop session
             * with `XDP_DEVICE_TOUCHSCREEN` access.
             * @param slot touch slot that changed
             */
            touch_up(slot: number): void;
        }

        module Settings {
            // Signal callback interfaces

            interface Changed {
                (namespace: string, key: string, value: GLib.Variant): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A representation of the settings exposed by the portal.
         *
         * The [class`Settings]` object is used to access and observe the settings
         * exposed by xdg-desktop-portal.
         *
         * It is obtained from [method`Portal`.get_settings]. Call
         * [method`Settings`.read_value] to read a settings value. Connect to
         * [signal`Settings:`:changed] to observe value changes.
         */
        class Settings extends GObject.Object {
            static $gtype: GObject.GType<Settings>;

            // Constructors

            constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'changed',
                callback: (_source: this, namespace: string, key: string, value: GLib.Variant) => void,
            ): number;
            connect_after(
                signal: 'changed',
                callback: (_source: this, namespace: string, key: string, value: GLib.Variant) => void,
            ): number;
            emit(signal: 'changed', namespace: string, key: string, value: GLib.Variant): void;

            // Methods

            /**
             * Read all the setting values within `namespace`.
             * @param namespaces List of namespaces to filter results by, supports simple globbing explained below.
             * @param cancellable a GCancellable or NULL.
             * @returns a value containing all the values, or %NULL if not found. If @error is not NULL, then the error is returned.
             */
            read_all_values(namespaces: string, cancellable?: Gio.Cancellable | null): GLib.Variant;
            /**
             * Read a setting value as unsigned int within `namespace,` with `key`.
             * @param namespace the namespace of the value.
             * @param key the key of the value.
             * @param cancellable a GCancellable or NULL.
             * @returns the stringint value, or NULL if not found or not the right type. If @error is not NULL, then the error is returned.
             */
            read_string(namespace: string, key: string, cancellable?: Gio.Cancellable | null): string;
            /**
             * Read a setting value as unsigned int within `namespace,` with `key`.
             * @param namespace the namespace of the value.
             * @param key the key of the value.
             * @param cancellable a GCancellable or NULL.
             * @returns the uint value, or 0 if not found or not the right type. If @error is not NULL, then the error is returned.
             */
            read_uint(namespace: string, key: string, cancellable?: Gio.Cancellable | null): number;
            /**
             * Read a setting value within `namespace,` with `key`.
             * @param namespace the namespace of the value.
             * @param key the key of the value.
             * @param cancellable a GCancellable or NULL.
             * @returns the value, or %NULL if not found. If @error is not NULL, then the error is returned.
             */
            read_value(namespace: string, key: string, cancellable?: Gio.Cancellable | null): GLib.Variant;
        }

        type InputCapturePointerBarrierClass = typeof InputCapturePointerBarrier;
        type InputCaptureSessionClass = typeof InputCaptureSession;
        type InputCaptureZoneClass = typeof InputCaptureZone;
        /**
         * Parent window abstraction.
         *
         * The [struct`Parent]` struct provides an abstract way to represent a window,
         * without introducing a dependency on a toolkit library.
         *
         * XdpParent implementations for GTK 3, GTK 4, Qt 5, and Qt 6 are available as
         * separate libraries.
         */
        abstract class Parent {
            static $gtype: GObject.GType<Parent>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Copies `source` into a new [struct`Parent]`.
             * @returns an [struct@Parent] that is a copy of @source
             */
            copy(): Parent;
            /**
             * Frees `parent`.
             */
            free(): void;
        }

        type PortalClass = typeof Portal;
        type SessionClass = typeof Session;
        type SettingsClass = typeof Settings;
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

    export default Xdp;
}

declare module 'gi://Xdp' {
    import Xdp10 from 'gi://Xdp?version=1.0';
    export default Xdp10;
}
// END
