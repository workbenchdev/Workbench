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

declare module 'gi://Polkit?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Polkit {
        /**
         * Polkit-1.0
         */

        /**
         * Possible error when using PolicyKit.
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * The operation failed.
             */
            static FAILED: number;
            /**
             * The operation was cancelled.
             */
            static CANCELLED: number;
            /**
             * Operation is not supported.
             */
            static NOT_SUPPORTED: number;
            /**
             * Not authorized to perform operation.
             */
            static NOT_AUTHORIZED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Possible implicit authorizations.
         */

        /**
         * Possible implicit authorizations.
         */
        export namespace ImplicitAuthorization {
            export const $gtype: GObject.GType<ImplicitAuthorization>;
        }

        enum ImplicitAuthorization {
            /**
             * Unknown whether the subject is authorized, never returned in any public API.
             */
            UNKNOWN,
            /**
             * Subject is not authorized.
             */
            NOT_AUTHORIZED,
            /**
             * Authentication is required.
             */
            AUTHENTICATION_REQUIRED,
            /**
             * Authentication as an administrator is required.
             */
            ADMINISTRATOR_AUTHENTICATION_REQUIRED,
            /**
             * Authentication is required. If the authorization is obtained, it is retained.
             */
            AUTHENTICATION_REQUIRED_RETAINED,
            /**
             * Authentication as an administrator is required. If the authorization is obtained, it is retained.
             */
            ADMINISTRATOR_AUTHENTICATION_REQUIRED_RETAINED,
            /**
             * The subject is authorized
             */
            AUTHORIZED,
        }
        function error_quark(): GLib.Quark;
        /**
         * Creates an object from `str` that implements the #PolkitIdentity
         * interface.
         * @param str A string obtained from polkit_identity_to_string().
         * @returns A #PolkitIdentity or %NULL if @error is set. Free with g_object_unref().
         */
        function identity_from_string(str: string): Identity | null;
        function implicit_authorization_from_string(string: string): [boolean, ImplicitAuthorization];
        function implicit_authorization_to_string(implicit_authorization: ImplicitAuthorization): string;
        /**
         * Creates an object from `str` that implements the #PolkitSubject
         * interface.
         * @param str A string obtained from polkit_subject_to_string().
         * @returns A #PolkitSubject or %NULL if @error is set. Free with g_object_unref().
         */
        function subject_from_string(str: string): Subject;
        /**
         * Flags describing features supported by the Authority implementation.
         */

        /**
         * Flags describing features supported by the Authority implementation.
         */
        export namespace AuthorityFeatures {
            export const $gtype: GObject.GType<AuthorityFeatures>;
        }

        enum AuthorityFeatures {
            /**
             * No flags set.
             */
            NONE,
            /**
             * The authority supports temporary authorizations
             * that can be obtained through authentication.
             */
            TEMPORARY_AUTHORIZATION,
        }
        /**
         * Possible flags when checking authorizations.
         */

        /**
         * Possible flags when checking authorizations.
         */
        export namespace CheckAuthorizationFlags {
            export const $gtype: GObject.GType<CheckAuthorizationFlags>;
        }

        enum CheckAuthorizationFlags {
            /**
             * No flags set.
             */
            NONE,
            /**
             * If the subject can obtain the authorization
             * through authentication, and an authentication agent is available, then attempt to do so. Note, this
             * means that the method used for checking authorization is likely to block for a long time.
             */
            ALLOW_USER_INTERACTION,
            /**
             * Check access against policy even for root user.
             */
            ALWAYS_CHECK,
        }
        module ActionDescription {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Object used to encapsulate a registered action.
         */
        class ActionDescription extends GObject.Object {
            static $gtype: GObject.GType<ActionDescription>;

            // Constructors

            constructor(properties?: Partial<ActionDescription.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the action id for `action_description`.
             * @returns A string owned by @action_description. Do not free.
             */
            get_action_id(): string;
            /**
             * Get the value of the annotation with `key`.
             * @param key An annotation key.
             * @returns %NULL if there is no annoation with @key, otherwise the annotation value owned by @action_description. Do not free.
             */
            get_annotation(key: string): string | null;
            /**
             * Gets the keys of annotations defined in `action_description`.
             * @returns The annotation keys owned by @action_description. Do not free.
             */
            get_annotation_keys(): string[];
            /**
             * Gets the description used for `action_description`.
             * @returns A string owned by @action_description. Do not free.
             */
            get_description(): string;
            /**
             * Gets the icon name for `action_description,` if any.
             * @returns A string owned by @action_description. Do not free.
             */
            get_icon_name(): string;
            /**
             * Gets the implicit authorization for `action_description` used for
             * subjects in active sessions on a local console.
             * @returns A value from the #PolkitImplicitAuthorization enumeration.
             */
            get_implicit_active(): ImplicitAuthorization;
            /**
             * Gets the implicit authorization for `action_description` used for
             * any subject.
             * @returns A value from the #PolkitImplicitAuthorization enumeration.
             */
            get_implicit_any(): ImplicitAuthorization;
            /**
             * Gets the implicit authorization for `action_description` used for
             * subjects in inactive sessions on a local console.
             * @returns A value from the #PolkitImplicitAuthorization enumeration.
             */
            get_implicit_inactive(): ImplicitAuthorization;
            /**
             * Gets the message used for `action_description`.
             * @returns A string owned by @action_description. Do not free.
             */
            get_message(): string;
            /**
             * Gets the vendor name for `action_description,` if any.
             * @returns A string owned by @action_description. Do not free.
             */
            get_vendor_name(): string;
            /**
             * Gets the vendor URL for `action_description,` if any.
             * @returns A string owned by @action_description. Do not free.
             */
            get_vendor_url(): string;
        }

        module Authority {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface SessionsChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                backend_features: AuthorityFeatures;
                backendFeatures: AuthorityFeatures;
                backend_name: string;
                backendName: string;
                backend_version: string;
                backendVersion: string;
                owner: string;
            }
        }

        /**
         * #PolkitAuthority is used for checking whether a given subject is
         * authorized to perform a given action. Typically privileged system
         * daemons or suid helpers will use this when handling requests from
         * untrusted clients.
         *
         * User sessions can register an authentication agent with the
         * authority. This is used for requests from untrusted clients where
         * system policy requires that the user needs to acknowledge (through
         * proving he is the user or the administrator) a given action. See
         * #PolkitAgentListener and #PolkitAgentSession for details.
         */
        class Authority extends GObject.Object implements Gio.AsyncInitable<Authority>, Gio.Initable {
            static $gtype: GObject.GType<Authority>;

            // Properties

            /**
             * The features of the currently used Authority backend.
             */
            get backend_features(): AuthorityFeatures;
            /**
             * The features of the currently used Authority backend.
             */
            get backendFeatures(): AuthorityFeatures;
            /**
             * The name of the currently used Authority backend.
             */
            get backend_name(): string;
            /**
             * The name of the currently used Authority backend.
             */
            get backendName(): string;
            get backend_version(): string;
            get backendVersion(): string;
            /**
             * The unique name of the owner of the org.freedesktop.PolicyKit1
             * D-Bus service or %NULL if there is no owner. Connect to the
             * #GObject::notify signal to track changes to this property.
             */
            get owner(): string;

            // Constructors

            constructor(properties?: Partial<Authority.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'sessions-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'sessions-changed', callback: (_source: this) => void): number;
            emit(signal: 'sessions-changed'): void;

            // Static methods

            /**
             * (deprecated)
             */
            static get(): Authority;
            /**
             * Asynchronously gets a reference to the authority.
             *
             * This is an asynchronous failable function. When the result is
             * ready, `callback` will be invoked in the <link
             * linkend="g-main-context-push-thread-default">thread-default main
             * loop</link> of the thread you are calling this method from and you
             * can use polkit_authority_get_finish() to get the result. See
             * polkit_authority_get_sync() for the synchronous version.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static get_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Authority> | null,
            ): void;
            /**
             * Finishes an operation started with polkit_authority_get_async().
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_authority_get_async().
             */
            static get_finish(res: Gio.AsyncResult): Authority;
            /**
             * Synchronously gets a reference to the authority.
             *
             * This is a synchronous failable function - the calling thread is
             * blocked until a reply is received. See polkit_authority_get_async()
             * for the asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             */
            static get_sync(cancellable?: Gio.Cancellable | null): Authority;

            // Methods

            /**
             * Asynchronously provide response that `identity` successfully authenticated
             * for the authentication request identified by `cookie`.
             *
             * This function is only used by the privileged bits of an authentication agent.
             * It will fail if the caller is not sufficiently privileged (typically uid 0).
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_authentication_agent_response_finish() to get the
             * result of the operation.
             * @param cookie The cookie passed to the authentication agent from the authority.
             * @param identity The identity that was authenticated.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            authentication_agent_response(
                cookie: string,
                identity: Identity,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes providing response from an authentication agent.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns %TRUE if @authority acknowledged the call, %FALSE if @error is set.
             */
            authentication_agent_response_finish(res: Gio.AsyncResult): boolean;
            /**
             * Provide response that `identity` successfully authenticated for the
             * authentication request identified by `cookie`. See polkit_authority_authentication_agent_response()
             * for limitations on who is allowed is to call this method.
             *
             * The calling thread is blocked until a reply is received. See
             * polkit_authority_authentication_agent_response() for the
             * asynchronous version.
             * @param cookie The cookie passed to the authentication agent from the authority.
             * @param identity The identity that was authenticated.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if @authority acknowledged the call, %FALSE if @error is set.
             */
            authentication_agent_response_sync(
                cookie: string,
                identity: Identity,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously checks if `subject` is authorized to perform the action represented
             * by `action_id`.
             *
             * Note that %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION
             * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
             * the event that triggered the authorization check is stemming from
             * an user action, e.g. the user pressing a button or attaching a
             * device.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_check_authorization_finish() to get the result of
             * the operation.
             *
             * Known keys in `details` include <literal>polkit.message</literal>
             * and <literal>polkit.gettext_domain</literal> that can be used to
             * override the message shown to the user. See the documentation for
             * the <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization">D-Bus method</link> for more details.
             *
             * If `details` is non-empty then the request will fail with
             * #POLKIT_ERROR_FAILED unless the process doing the check itsef is
             * sufficiently authorized (e.g. running as uid 0).
             * @param subject A #PolkitSubject.
             * @param action_id The action to check for.
             * @param details Details about the action or %NULL.
             * @param flags A set of #PolkitCheckAuthorizationFlags.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            check_authorization(
                subject: Subject,
                action_id: string,
                details: Details | null,
                flags: CheckAuthorizationFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes checking if a subject is authorized for an action.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns A #PolkitAuthorizationResult or %NULL if @error is set. Free with g_object_unref().
             */
            check_authorization_finish(res: Gio.AsyncResult): AuthorizationResult;
            /**
             * Checks if `subject` is authorized to perform the action represented
             * by `action_id`.
             *
             * Note that %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION
             * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
             * the event that triggered the authorization check is stemming from
             * an user action, e.g. the user pressing a button or attaching a
             * device.
             *
             * Note the calling thread is blocked until a reply is received. You
             * should therefore <emphasis>NEVER</emphasis> do this from a GUI
             * thread or a daemon service thread when using the
             * %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION flag. This
             * is because it may potentially take minutes (or even hours) for the
             * operation to complete because it involves waiting for the user to
             * authenticate.
             *
             * Known keys in `details` include <literal>polkit.message</literal>
             * and <literal>polkit.gettext_domain</literal> that can be used to
             * override the message shown to the user. See the documentation for
             * the <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization">D-Bus method</link> for more details.
             * @param subject A #PolkitSubject.
             * @param action_id The action to check for.
             * @param details Details about the action or %NULL.
             * @param flags A set of #PolkitCheckAuthorizationFlags.
             * @param cancellable A #GCancellable or %NULL.
             * @returns A #PolkitAuthorizationResult or %NULL if @error is set. Free with g_object_unref().
             */
            check_authorization_sync(
                subject: Subject,
                action_id: string,
                details: Details | null,
                flags: CheckAuthorizationFlags,
                cancellable?: Gio.Cancellable | null,
            ): AuthorizationResult;
            /**
             * Asynchronously retrieves all registered actions.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_authority_enumerate_actions_finish()
             * to get the result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            enumerate_actions(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes retrieving all registered actions.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns A list of #PolkitActionDescription objects or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
             */
            enumerate_actions_finish(res: Gio.AsyncResult): ActionDescription[];
            /**
             * Synchronously retrieves all registered actions - the calling thread
             * is blocked until a reply is received. See
             * polkit_authority_enumerate_actions() for the asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             * @returns A list of #PolkitActionDescription or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
             */
            enumerate_actions_sync(cancellable?: Gio.Cancellable | null): ActionDescription[];
            /**
             * Asynchronously gets all temporary authorizations for `subject`.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_enumerate_temporary_authorizations_finish() to get
             * the result of the operation.
             * @param subject A #PolkitSubject, typically a #PolkitUnixSession.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            enumerate_temporary_authorizations(
                subject: Subject,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes retrieving all registered actions.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns A list of #PolkitTemporaryAuthorization objects or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
             */
            enumerate_temporary_authorizations_finish(res: Gio.AsyncResult): TemporaryAuthorization[];
            /**
             * Synchronousky gets all temporary authorizations for `subject`.
             *
             * The calling thread is blocked until a reply is received. See
             * polkit_authority_enumerate_temporary_authorizations() for the
             * asynchronous version.
             * @param subject A #PolkitSubject, typically a #PolkitUnixSession.
             * @param cancellable A #GCancellable or %NULL.
             * @returns A list of #PolkitTemporaryAuthorization objects or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
             */
            enumerate_temporary_authorizations_sync(
                subject: Subject,
                cancellable?: Gio.Cancellable | null,
            ): TemporaryAuthorization[];
            /**
             * Gets the features supported by the authority backend.
             * @returns Flags from #PolkitAuthorityFeatures.
             */
            get_backend_features(): AuthorityFeatures;
            /**
             * Gets the name of the authority backend.
             * @returns The name of the backend.
             */
            get_backend_name(): string;
            /**
             * Gets the version of the authority backend.
             * @returns The version string for the backend.
             */
            get_backend_version(): string;
            /**
             * The unique name on the system message bus of the owner of the name
             * <literal>org.freedesktop.PolicyKit1</literal> or %NULL if no-one
             * currently owns the name. You may connect to the #GObject::notify
             * signal to track changes to the #PolkitAuthority:owner property.
             * @returns %NULL or a string that should be freed with g_free().
             */
            get_owner(): string | null;
            /**
             * Asynchronously registers an authentication agent.
             *
             * Note that this should be called by the same effective UID which will be
             * the real UID using the #PolkitAgentSession API or otherwise calling
             * polkit_authority_authentication_agent_response().
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_register_authentication_agent_finish() to get the
             * result of the operation.
             * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
             * @param locale The locale of the authentication agent.
             * @param object_path The object path for the authentication agent.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            register_authentication_agent(
                subject: Subject,
                locale: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes registering an authentication agent.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
             */
            register_authentication_agent_finish(res: Gio.AsyncResult): boolean;
            /**
             * Registers an authentication agent.
             *
             * Note that this should be called by the same effective UID which will be
             * the real UID using the #PolkitAgentSession API or otherwise calling
             * polkit_authority_authentication_agent_response().
             *
             * The calling thread is blocked
             * until a reply is received. See
             * polkit_authority_register_authentication_agent() for the
             * asynchronous version.
             * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
             * @param locale The locale of the authentication agent.
             * @param object_path The object path for the authentication agent.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
             */
            register_authentication_agent_sync(
                subject: Subject,
                locale: string,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously registers an authentication agent.
             *
             * Note that this should be called by the same effective UID which will be
             * the real UID using the #PolkitAgentSession API or otherwise calling
             * polkit_authority_authentication_agent_response().
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_register_authentication_agent_with_options_finish() to get the
             * result of the operation.
             * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
             * @param locale The locale of the authentication agent.
             * @param object_path The object path for the authentication agent.
             * @param options A #GVariant with options or %NULL.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            register_authentication_agent_with_options(
                subject: Subject,
                locale: string,
                object_path: string,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes registering an authentication agent.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
             */
            register_authentication_agent_with_options_finish(res: Gio.AsyncResult): boolean;
            /**
             * Registers an authentication agent.
             *
             * Note that this should be called by the same effective UID which will be
             * the real UID using the #PolkitAgentSession API or otherwise calling
             * polkit_authority_authentication_agent_response().
             *
             * The calling thread is blocked
             * until a reply is received. See
             * polkit_authority_register_authentication_agent_with_options() for the
             * asynchronous version.
             * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
             * @param locale The locale of the authentication agent.
             * @param object_path The object path for the authentication agent.
             * @param options A #GVariant with options or %NULL.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
             */
            register_authentication_agent_with_options_sync(
                subject: Subject,
                locale: string,
                object_path: string,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously revoke a temporary authorization.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_revoke_temporary_authorization_by_id_finish() to
             * get the result of the operation.
             * @param id The opaque identifier for the temporary authorization.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            revoke_temporary_authorization_by_id(
                id: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes revoking a temporary authorization by id.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns %TRUE if the temporary authorization was revoked, %FALSE if error is set.
             */
            revoke_temporary_authorization_by_id_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously revokes a temporary authorization.
             *
             * The calling thread is blocked until a reply is received. See
             * polkit_authority_revoke_temporary_authorization_by_id() for the
             * asynchronous version.
             * @param id The opaque identifier for the temporary authorization.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the temporary authorization was revoked, %FALSE if error is set.
             */
            revoke_temporary_authorization_by_id_sync(id: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously revokes all temporary authorizations for `subject`.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_revoke_temporary_authorizations_finish() to get
             * the result of the operation.
             * @param subject The subject to revoke authorizations from, typically a #PolkitUnixSession.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            revoke_temporary_authorizations(
                subject: Subject,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes revoking temporary authorizations.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns %TRUE if all the temporary authorizations was revoked, %FALSE if error is set.
             */
            revoke_temporary_authorizations_finish(res: Gio.AsyncResult): boolean;
            /**
             * Synchronously revokes all temporary authorization from `subject`.
             *
             * The calling thread is blocked until a reply is received. See
             * polkit_authority_revoke_temporary_authorizations() for the
             * asynchronous version.
             * @param subject The subject to revoke authorizations from, typically a #PolkitUnixSession.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the temporary authorization was revoked, %FALSE if error is set.
             */
            revoke_temporary_authorizations_sync(subject: Subject, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously unregisters an authentication agent.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_authority_unregister_authentication_agent_finish() to get
             * the result of the operation.
             * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
             * @param object_path The object path for the authentication agent.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            unregister_authentication_agent(
                subject: Subject,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes unregistering an authentication agent.
             * @param res A #GAsyncResult obtained from the callback.
             * @returns %TRUE if the authentication agent was successfully unregistered, %FALSE if @error is set.
             */
            unregister_authentication_agent_finish(res: Gio.AsyncResult): boolean;
            /**
             * Unregisters an authentication agent. The calling thread is blocked
             * until a reply is received. See
             * polkit_authority_unregister_authentication_agent() for the
             * asynchronous version.
             * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
             * @param object_path The object path for the authentication agent.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the authentication agent was successfully unregistered, %FALSE if @error is set.
             */
            unregister_authentication_agent_sync(
                subject: Subject,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): Authority;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
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

        module AuthorizationResult {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * This class represents the result you get when checking for an authorization.
         */
        class AuthorizationResult extends GObject.Object {
            static $gtype: GObject.GType<AuthorizationResult>;

            // Constructors

            constructor(properties?: Partial<AuthorizationResult.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                is_authorized: boolean,
                is_challenge: boolean,
                details?: Details | null,
            ): AuthorizationResult;

            // Methods

            /**
             * Gets the details about the result.
             * @returns A #PolkitDetails object or %NULL if there are no details. This object is owned by @result and should not be freed by the caller.
             */
            get_details(): Details | null;
            /**
             * Gets whether the authentication request was dismissed / canceled by the user.
             *
             * This method simply reads the value of the key/value pair in `details` with the
             * key <literal>polkit.dismissed</literal>.
             * @returns %TRUE if the authentication request was dismissed, %FALSE otherwise.
             */
            get_dismissed(): boolean;
            /**
             * Gets whether the subject is authorized.
             *
             * If the authorization is temporary, use polkit_authorization_result_get_temporary_authorization_id()
             * to get the opaque identifier for the temporary authorization.
             * @returns Whether the subject is authorized.
             */
            get_is_authorized(): boolean;
            /**
             * Gets whether the subject is authorized if more information is provided.
             * @returns Whether the subject is authorized if more information is provided.
             */
            get_is_challenge(): boolean;
            /**
             * Gets whether authorization is retained if obtained via authentication. This can only be the case
             * if `result` indicates that the subject can obtain authorization after challenge (cf.
             * polkit_authorization_result_get_is_challenge()), e.g. when the subject is not already authorized (cf.
             * polkit_authorization_result_get_is_authorized()).
             *
             * If the subject is already authorized, use polkit_authorization_result_get_temporary_authorization_id()
             * to check if the authorization is temporary.
             *
             * This method simply reads the value of the key/value pair in `details` with the
             * key <literal>polkit.retains_authorization_after_challenge</literal>.
             * @returns %TRUE if the authorization is or will be temporary.
             */
            get_retains_authorization(): boolean;
            /**
             * Gets the opaque temporary authorization id for `result` if `result` indicates the
             * subject is authorized and the authorization is temporary rather than one-shot or
             * permanent.
             *
             * You can use this string together with the result from
             * polkit_authority_enumerate_temporary_authorizations() to get more details
             * about the temporary authorization or polkit_authority_revoke_temporary_authorization_by_id()
             * to revoke the temporary authorization.
             *
             * If the subject is not authorized, use polkit_authorization_result_get_retains_authorization()
             * to check if the authorization will be retained if obtained via authentication.
             *
             * This method simply reads the value of the key/value pair in `details` with the
             * key <literal>polkit.temporary_authorization_id</literal>.
             * @returns The opaque temporary authorization id for    @result or %NULL if not available. Do not free this string, it    is owned by @result.
             */
            get_temporary_authorization_id(): string | null;
        }

        module Details {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * An object used for passing details around.
         */
        class Details extends GObject.Object {
            static $gtype: GObject.GType<Details>;

            // Constructors

            constructor(properties?: Partial<Details.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Details;

            // Methods

            /**
             * Gets a list of all keys on `details`.
             * @returns %NULL if there are no keys otherwise an array of strings that should be freed with g_strfreev().
             */
            get_keys(): string[] | null;
            /**
             * Inserts a copy of `key` and `value` on `details`.
             *
             * If `value` is %NULL, the key will be removed.
             * @param key A key.
             * @param value A value.
             */
            insert(key: string, value?: string | null): void;
            /**
             * Gets the value for `key` on `details`.
             * @param key A key.
             * @returns %NULL if there is no value for @key, otherwise a string owned by @details.
             */
            lookup(key: string): string | null;
        }

        module Permission {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.Permission.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                action_id: string;
                actionId: string;
                subject: Subject;
            }
        }

        /**
         * #PolkitPermission is a #GPermission implementation. It can be used
         * with e.g. #GtkLockButton. See the #GPermission documentation for
         * more information.
         */
        class Permission extends Gio.Permission implements Gio.AsyncInitable<Permission>, Gio.Initable {
            static $gtype: GObject.GType<Permission>;

            // Properties

            /**
             * The action identifier to use for the permission.
             */
            get action_id(): string;
            /**
             * The action identifier to use for the permission.
             */
            get actionId(): string;
            /**
             * The #PolkitSubject to use for the permission. If not set during
             * construction, it will be set to match the current process.
             */
            get subject(): Subject;

            // Constructors

            constructor(properties?: Partial<Permission.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_finish(res: Gio.AsyncResult): Permission;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            static new_sync(
                action_id: string,
                subject?: Subject | null,
                cancellable?: Gio.Cancellable | null,
            ): Permission;

            // Static methods

            /**
             * Creates a #GPermission instance for the PolicyKit action
             * `action_id`.
             *
             * When the operation is finished, `callback` will be invoked. You can
             * then call polkit_permission_new_finish() to get the result of the
             * operation.
             *
             * This is a asynchronous failable constructor. See
             * polkit_permission_new_sync() for the synchronous version.
             * @param action_id The PolicyKit action identifier.
             * @param subject A #PolkitSubject or %NULL for the current process.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
             */
            static ['new'](
                action_id: string,
                subject?: Subject | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Permission> | null,
            ): void;

            // Methods

            /**
             * Gets the PolicyKit action identifier used for `permission`.
             * @returns A string owned by @permission. Do not free.
             */
            get_action_id(): string;
            /**
             * Gets the subject used for `permission`.
             * @returns An object owned by @permission. Do not free.
             */
            get_subject(): Subject;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): Permission;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
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

        module SystemBusName {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Subject.ConstructorProps {
                name: string;
            }
        }

        /**
         * An object that represents a process owning a unique name on the system bus.
         */
        class SystemBusName extends GObject.Object implements Subject {
            static $gtype: GObject.GType<SystemBusName>;

            // Properties

            /**
             * The unique name on the system message bus.
             */
            get name(): string;
            set name(val: string);

            // Constructors

            constructor(properties?: Partial<SystemBusName.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a new #PolkitSystemBusName for `name`.
             * @param name A unique system bus name.
             */
            static ['new'](name: string): Subject;

            // Methods

            /**
             * Gets the unique system bus name for `system_bus_name`.
             * @returns The unique system bus name for @system_bus_name. Do not free, this string is owned by @system_bus_name.
             */
            get_name(): string;
            /**
             * Synchronously gets a #PolkitUnixProcess object for `system_bus_name`
             * - the calling thread is blocked until a reply is received.
             * @param cancellable A #GCancellable or %NULL.
             * @returns A #PolkitUnixProcess object or %NULL if @error is set.
             */
            get_process_sync(cancellable?: Gio.Cancellable | null): Subject | null;
            /**
             * Synchronously gets a #PolkitUnixUser object for `system_bus_name;`
             * the calling thread is blocked until a reply is received.
             * @param cancellable A #GCancellable or %NULL.
             * @returns A #PolkitUnixUser object or %NULL if @error is set.
             */
            get_user_sync(cancellable?: Gio.Cancellable | null): UnixUser | null;
            /**
             * Sets the unique system bus name for `system_bus_name`.
             * @param name A unique system bus name.
             */
            set_name(name: string): void;

            // Inherited methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             * @returns A string representing @subject. Free with g_free().
             */
            to_string(): string;
            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             */
            vfunc_equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             */
            vfunc_exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             */
            vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             */
            vfunc_to_string(): string;
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

        module TemporaryAuthorization {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Object used to describe a temporary authorization.
         */
        class TemporaryAuthorization extends GObject.Object {
            static $gtype: GObject.GType<TemporaryAuthorization>;

            // Constructors

            constructor(properties?: Partial<TemporaryAuthorization.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the action that `authorization` is for.
             * @returns A string owned by @authorization. Do not free.
             */
            get_action_id(): string;
            /**
             * Gets the opaque identifier for `authorization`.
             * @returns A string owned by @authorization. Do not free.
             */
            get_id(): string;
            /**
             * Gets the subject that `authorization` is for.
             * @returns A #PolkitSubject, free with g_object_unref().
             */
            get_subject(): Subject;
            /**
             * Gets the time when `authorization` will expire.
             *
             * (Note that the PolicyKit daemon is using monotonic time internally
             * so the returned value may change if system time changes.)
             * @returns Seconds since the Epoch Jan 1. 1970, 0:00 UTC.
             */
            get_time_expires(): number;
            /**
             * Gets the time when `authorization` was obtained.
             *
             * (Note that the PolicyKit daemon is using monotonic time internally
             * so the returned value may change if system time changes.)
             * @returns Seconds since the Epoch Jan 1. 1970, 0:00 UTC.
             */
            get_time_obtained(): number;
        }

        module UnixGroup {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
                gid: number;
            }
        }

        /**
         * An object representing a group identity on a UNIX system.
         */
        class UnixGroup extends GObject.Object implements Identity {
            static $gtype: GObject.GType<UnixGroup>;

            // Properties

            /**
             * The UNIX group id.
             */
            get gid(): number;
            set gid(val: number);

            // Constructors

            constructor(properties?: Partial<UnixGroup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a new #PolkitUnixGroup object for `gid`.
             * @param gid A UNIX group id.
             */
            static ['new'](gid: number): Identity;
            /**
             * Creates a new #PolkitUnixGroup object for a group with the group name
             * `name`.
             * @param name A UNIX group name.
             */
            static new_for_name(name: string): Identity | null;

            // Methods

            /**
             * Gets the UNIX group id for `group`.
             * @returns A UNIX group id.
             */
            get_gid(): number;
            /**
             * Sets `gid` for `group`.
             * @param gid A UNIX group id.
             */
            set_gid(gid: number): void;

            // Inherited methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             * @returns A string representing @identity. Free with g_free().
             */
            to_string(): string;
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             */
            vfunc_equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             */
            vfunc_to_string(): string;
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

        module UnixNetgroup {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
                name: string;
            }
        }

        /**
         * An object representing a netgroup identity on a UNIX system.
         */
        class UnixNetgroup extends GObject.Object implements Identity {
            static $gtype: GObject.GType<UnixNetgroup>;

            // Properties

            /**
             * The NIS netgroup name.
             */
            get name(): string;
            set name(val: string);

            // Constructors

            constructor(properties?: Partial<UnixNetgroup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a new #PolkitUnixNetgroup object for `name`.
             * @param name A netgroup name.
             */
            static ['new'](name: string): Identity;

            // Methods

            /**
             * Gets the netgroup name for `group`.
             * @returns A netgroup name string.
             */
            get_name(): string;
            /**
             * Sets `name` for `group`.
             * @param name A netgroup name.
             */
            set_name(name: string): void;

            // Inherited methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             * @returns A string representing @identity. Free with g_free().
             */
            to_string(): string;
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             */
            vfunc_equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             */
            vfunc_to_string(): string;
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

        module UnixProcess {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Subject.ConstructorProps {
                gids: any[];
                pid: number;
                pidfd: number;
                pidfd_is_safe: boolean;
                pidfdIsSafe: boolean;
                start_time: number;
                startTime: number;
                uid: number;
            }
        }

        /**
         * An object for representing a UNIX process. In order to be reliable and
         * race-free, this requires support for PID File Descriptors in the kernel,
         * dbus-daemon/broker and systemd. With this functionality, we can reliably
         * track processes without risking PID reuse and race conditions, and compare
         * them.
         *
         * NOTE: If PID FDs are not available, this object will fall back to using
         * PIDs, and this designed is now known broken; a mechanism to exploit a delay
         * in start time in the Linux kernel was identified.  Avoid
         * calling polkit_subject_equal() to compare two processes.
         *
         * To uniquely identify processes, both the process id and the start
         * time of the process (a monotonic increasing value representing the
         * time since the kernel was started) is used.
         *
         * NOTE: This object stores, and provides access to, the real UID of the
         * process.  That value can change over time (with set*uid*(2) and exec*(2)).
         * Checks whether an operation is allowed need to take care to use the UID
         * value as of the time when the operation was made (or, following the open()
         * privilege check model, when the connection making the operation possible
         * was initiated).  That is usually done by initializing this with
         * polkit_unix_process_new_for_owner() with trusted data.
         */
        class UnixProcess extends GObject.Object implements Subject {
            static $gtype: GObject.GType<UnixProcess>;

            // Properties

            /**
             * The UNIX group ids of the process.
             */
            get gids(): any[];
            set gids(val: any[]);
            /**
             * The UNIX process id.
             */
            get pid(): number;
            set pid(val: number);
            /**
             * The UNIX process id file descriptor.
             */
            get pidfd(): number;
            set pidfd(val: number);
            get pidfd_is_safe(): boolean;
            get pidfdIsSafe(): boolean;
            /**
             * The start time of the process.
             */
            get start_time(): number;
            set start_time(val: number);
            /**
             * The start time of the process.
             */
            get startTime(): number;
            set startTime(val: number);
            /**
             * The UNIX user id of the process or -1 if unknown.
             *
             * Note that this is the real user-id, not the effective user-id.
             */
            get uid(): number;
            set uid(val: number);

            // Constructors

            constructor(properties?: Partial<UnixProcess.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a new #PolkitUnixProcess for `pid`.
             *
             * The uid and start time of the process will be looked up in using
             * e.g. the <filename>/proc</filename> filesystem depending on the
             * platform in use.
             * @param pid The process id.
             */
            static ['new'](pid: number): Subject;
            /**
             * Creates a new #PolkitUnixProcess object for `pid,` `start_time` and `uid`.
             * @param pid The process id.
             * @param start_time The start time for @pid or 0 to look it up in e.g. <filename>/proc</filename>.
             * @param uid The (real, not effective) uid of the owner of @pid or -1 to look it up in e.g. <filename>/proc</filename>.
             */
            static new_for_owner(pid: number, start_time: number, uid: number): Subject;
            /**
             * Creates a new #PolkitUnixProcess object for `pid` and `start_time`.
             *
             * The uid of the process will be looked up in using e.g. the
             * <filename>/proc</filename> filesystem depending on the platform in
             * use.
             * @param pid The process id.
             * @param start_time The start time for @pid.
             */
            static new_full(pid: number, start_time: number): Subject;
            /**
             * Creates a new #PolkitUnixProcess object for `pidfd` and `uid`.
             * @param pidfd The process id file descriptor.
             * @param uid The (real, not effective) uid of the owner of @pid or -1 to look it up in e.g. <filename>/proc</filename>.
             * @param gids The (real, not effective) gids of the owner of @pid or %NULL.
             */
            static new_pidfd(pidfd: number, uid: number, gids?: number[] | null): Subject;

            // Methods

            /**
             * Gets the group ids for `process`. Note that this is the real group-ids,
             * not the effective group-ids.
             * @returns a #GArray          of #gid_t containing the group ids for @process or NULL if unknown,          as a new reference to the array, caller must deref it when done.
             */
            get_gids(): any[][] | null;
            /**
             * (deprecated)
             */
            get_owner(): number;
            /**
             * Gets the process id for `process`.
             * @returns The process id for @process.
             */
            get_pid(): number;
            /**
             * Gets the process id file descriptor for `process`.
             * @returns The process id file descriptor for @process.
             */
            get_pidfd(): number;
            /**
             * Checks if the process id file descriptor for `process` is safe
             * or if it was opened locally and thus vulnerable to reuse.
             * @returns TRUE or FALSE.
             */
            get_pidfd_is_safe(): boolean;
            /**
             * Gets the start time of `process`.
             * @returns The start time of @process.
             */
            get_start_time(): number;
            /**
             * Gets the user id for `process`. Note that this is the real user-id,
             * not the effective user-id.
             *
             * NOTE: The UID may change over time, so the returned value may not match the
             * current state of the underlying process; or the UID may have been set by
             * polkit_unix_process_new_for_owner() or polkit_unix_process_set_uid(),
             * in which case it may not correspond to the actual UID of the referenced
             * process at all (at any point in time).
             * @returns The user id for @process or -1 if unknown.
             */
            get_uid(): number;
            /**
             * Sets the (real, not effective) group ids for `process`.
             * @param gids A #GList of #gid_t containing the group        ids to set for @process or NULL to unset them.        A reference to @gids is taken.
             */
            set_gids(gids: any[][]): void;
            /**
             * Sets `pid` for `process`.
             * @param pid A process id.
             */
            set_pid(pid: number): void;
            /**
             * Sets `pidfd` for `process`.
             * @param pidfd A process id file descriptor.
             */
            set_pidfd(pidfd: number): void;
            /**
             * Set the start time of `process`.
             * @param start_time The start time for @pid.
             */
            set_start_time(start_time: number): void;
            /**
             * Sets the (real, not effective) user id for `process`.
             * @param uid The user id to set for @process or -1 to unset it.
             */
            set_uid(uid: number): void;

            // Inherited methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             * @returns A string representing @subject. Free with g_free().
             */
            to_string(): string;
            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             */
            vfunc_equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             */
            vfunc_exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             */
            vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             */
            vfunc_to_string(): string;
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

        module UnixSession {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps,
                    Subject.ConstructorProps {
                pid: number;
                session_id: string;
                sessionId: string;
            }
        }

        /**
         * An object that represents an user session.
         *
         * The session id is an opaque string obtained from ConsoleKit.
         */
        class UnixSession extends GObject.Object implements Gio.AsyncInitable<UnixSession>, Gio.Initable, Subject {
            static $gtype: GObject.GType<UnixSession>;

            // Properties

            /**
             * The UNIX process id to look up the session.
             */
            set pid(val: number);
            /**
             * The UNIX session id.
             */
            get session_id(): string;
            set session_id(val: string);
            /**
             * The UNIX session id.
             */
            get sessionId(): string;
            set sessionId(val: string);

            // Constructors

            constructor(properties?: Partial<UnixSession.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a new #PolkitUnixSession for `session_id`.
             * @param session_id The session id.
             */
            static ['new'](session_id: string): Subject;
            /**
             * Asynchronously creates a new #PolkitUnixSession object for the
             * process with process id `pid`.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call
             * polkit_unix_session_new_for_process_finish() to get the result of
             * the operation.
             *
             * This method constructs the object asynchronously, for the synchronous and blocking version
             * use polkit_unix_session_new_for_process_sync().
             * @param pid The process id of the process to get the session for.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            static new_for_process(
                pid: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<UnixSession> | null,
            ): void;
            /**
             * Finishes constructing a #PolkitSubject for a process id.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_unix_session_new_for_process().
             */
            static new_for_process_finish(res: Gio.AsyncResult): Subject | null;
            /**
             * Creates a new #PolkitUnixSession for the process with process id `pid`.
             *
             * This is a synchronous call - the calling thread is blocked until a
             * reply is received. For the asynchronous version, see
             * polkit_unix_session_new_for_process().
             * @param pid The process id of the process to get the session for.
             * @param cancellable A #GCancellable or %NULL.
             */
            static new_for_process_sync(pid: number, cancellable?: Gio.Cancellable | null): Subject | null;

            // Methods

            /**
             * Gets the session id for `session`.
             * @returns The session id for @session. Do not free this string, it is owned by @session.
             */
            get_session_id(): string;
            /**
             * Sets the session id for `session` to `session_id`.
             * @param session_id The session id.
             */
            set_session_id(session_id: string): void;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): UnixSession;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
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
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             * @returns A string representing @subject. Free with g_free().
             */
            to_string(): string;
            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             */
            vfunc_equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             */
            vfunc_exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             */
            vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             */
            vfunc_to_string(): string;
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

        module UnixUser {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
                uid: number;
            }
        }

        /**
         * An object representing a user identity on a UNIX system.
         */
        class UnixUser extends GObject.Object implements Identity {
            static $gtype: GObject.GType<UnixUser>;

            // Properties

            /**
             * The UNIX user id.
             */
            get uid(): number;
            set uid(val: number);

            // Constructors

            constructor(properties?: Partial<UnixUser.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Creates a new #PolkitUnixUser object for `uid`.
             * @param uid A UNIX user id.
             */
            static ['new'](uid: number): Identity;
            /**
             * Creates a new #PolkitUnixUser object for a user with the user name
             * `name`.
             * @param name A UNIX user name.
             */
            static new_for_name(name: string): Identity | null;

            // Methods

            /**
             * Get the user's name.
             * @returns User name string or %NULL if user uid not found.
             */
            get_name(): string | null;
            /**
             * Gets the UNIX user id for `user`.
             * @returns A UNIX user id.
             */
            get_uid(): number;
            /**
             * Sets `uid` for `user`.
             * @param uid A UNIX user id.
             */
            set_uid(uid: number): void;

            // Inherited methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             * @returns A string representing @identity. Free with g_free().
             */
            to_string(): string;
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             */
            vfunc_equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             */
            vfunc_to_string(): string;
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

        type ActionDescriptionClass = typeof ActionDescription;
        type AuthorityClass = typeof Authority;
        type AuthorizationResultClass = typeof AuthorizationResult;
        type DetailsClass = typeof Details;
        type IdentityIface = typeof Identity;
        type SubjectIface = typeof Subject;
        type SystemBusNameClass = typeof SystemBusName;
        type TemporaryAuthorizationClass = typeof TemporaryAuthorization;
        type UnixGroupClass = typeof UnixGroup;
        type UnixNetgroupClass = typeof UnixNetgroup;
        type UnixProcessClass = typeof UnixProcess;
        type UnixSessionClass = typeof UnixSession;
        type UnixUserClass = typeof UnixUser;
        module Identity {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface IdentityNamespace {
            $gtype: GObject.GType<Identity>;
            prototype: Identity;

            /**
             * Creates an object from `str` that implements the #PolkitIdentity
             * interface.
             * @param str A string obtained from polkit_identity_to_string().
             */
            from_string(str: string): Identity | null;
        }
        interface Identity extends GObject.Object {
            // Methods

            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             * @returns A string representing @identity. Free with g_free().
             */
            to_string(): string;

            // Virtual methods

            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitIdentity.
             */
            vfunc_equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             */
            vfunc_to_string(): string;
        }

        export const Identity: IdentityNamespace;

        module Subject {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface SubjectNamespace {
            $gtype: GObject.GType<Subject>;
            prototype: Subject;

            /**
             * Creates an object from `str` that implements the #PolkitSubject
             * interface.
             * @param str A string obtained from polkit_subject_to_string().
             */
            from_string(str: string): Subject;
        }
        interface Subject extends GObject.Object {
            // Methods

            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
             */
            equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
             */
            exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             * @returns A hash code.
             */
            hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             * @returns A string representing @subject. Free with g_free().
             */
            to_string(): string;

            // Virtual methods

            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             * @param b A #PolkitSubject.
             */
            vfunc_equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             */
            vfunc_exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             * @param cancellable A #GCancellable or %NULL.
             */
            vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             */
            vfunc_to_string(): string;
        }

        export const Subject: SubjectNamespace;

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

    export default Polkit;
}

declare module 'gi://Polkit' {
    import Polkit10 from 'gi://Polkit?version=1.0';
    export default Polkit10;
}
// END
