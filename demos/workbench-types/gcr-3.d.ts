/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gck-1.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Gcr?version=3' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type Gck from 'gi://Gck?version=1';

    export namespace Gcr {
        /**
         * Gcr-3
         */

        /**
         * The status of a built certificate chain. Will be set to
         * %GCR_CERTIFICATE_CHAIN_UNKNOWN for certificate chains that have not been
         * built.
         */

        /**
         * The status of a built certificate chain. Will be set to
         * %GCR_CERTIFICATE_CHAIN_UNKNOWN for certificate chains that have not been
         * built.
         */
        export namespace CertificateChainStatus {
            export const $gtype: GObject.GType<CertificateChainStatus>;
        }

        enum CertificateChainStatus {
            /**
             * The certificate chain's status is unknown.
             * When a chain is not yet built it has this status. If a chain is modified after
             * being built, it has this status.
             */
            UNKNOWN,
            /**
             * A full chain could not be loaded. The
             * chain does not end with a self-signed certificate, a trusted anchor, or a
             * pinned certificate.
             */
            INCOMPLETE,
            /**
             * The certificate chain contains a revoked
             * or otherwise explicitly distrusted certificate. The entire chain should
             * be distrusted.
             */
            DISTRUSTED,
            /**
             * The chain ends with a self-signed
             * certificate. No trust anchor was found.
             */
            SELFSIGNED,
            /**
             * The chain represents a pinned certificate. A
             * pinned certificate is an exception which trusts a given certificate
             * explicitly for a purpose and communication with a certain peer.
             */
            PINNED,
            /**
             * The chain ends with an anchored
             * certificate. The anchored certificate is not necessarily self-signed.
             */
            ANCHORED,
        }
        /**
         * The format of a certificate request. Currently only PKCS#10 is supported.
         */

        /**
         * The format of a certificate request. Currently only PKCS#10 is supported.
         */
        export namespace CertificateRequestFormat {
            export const $gtype: GObject.GType<CertificateRequestFormat>;
        }

        enum CertificateRequestFormat {
            /**
             * certificate request is in PKCS#10 format
             */
            CERTIFICATE_REQUEST_PKCS10,
        }
        /**
         * Values responding to error codes for parsing and serializing data.
         */

        /**
         * Values responding to error codes for parsing and serializing data.
         */
        export namespace DataError {
            export const $gtype: GObject.GType<DataError>;
        }

        enum DataError {
            /**
             * Failed to parse or serialize the data
             */
            FAILURE,
            /**
             * The data was unrecognized or unsupported
             */
            UNRECOGNIZED,
            /**
             * The operation was cancelled
             */
            CANCELLED,
            /**
             * The data was encrypted or locked and could not be unlocked.
             */
            LOCKED,
        }
        /**
         * The various format identifiers.
         */

        /**
         * The various format identifiers.
         */
        export namespace DataFormat {
            export const $gtype: GObject.GType<DataFormat>;
        }

        enum DataFormat {
            /**
             * Represents all the formats, when enabling or disabling
             */
            ALL,
            /**
             * Not a valid format
             */
            INVALID,
            /**
             * DER encoded private key
             */
            DER_PRIVATE_KEY,
            /**
             * DER encoded RSA private key
             */
            DER_PRIVATE_KEY_RSA,
            /**
             * DER encoded DSA private key
             */
            DER_PRIVATE_KEY_DSA,
            /**
             * DER encoded EC private key
             */
            DER_PRIVATE_KEY_EC,
            /**
             * DER encoded SubjectPublicKeyInfo
             */
            DER_SUBJECT_PUBLIC_KEY,
            /**
             * DER encoded X.509 certificate
             */
            DER_CERTIFICATE_X509,
            /**
             * DER encoded PKCS#7 container file which can contain certificates
             */
            DER_PKCS7,
            /**
             * DER encoded PKCS#8 file which can contain a key
             */
            DER_PKCS8,
            /**
             * Unencrypted DER encoded PKCS#8 file which can contain a key
             */
            DER_PKCS8_PLAIN,
            /**
             * Encrypted DER encoded PKCS#8 file which can contain a key
             */
            DER_PKCS8_ENCRYPTED,
            /**
             * DER encoded PKCS#10 certificate request file
             */
            DER_PKCS10,
            /**
             * DER encoded SPKAC as generated by HTML5 keygen element
             */
            DER_SPKAC,
            /**
             * OpenSSL style SPKAC data
             */
            BASE64_SPKAC,
            /**
             * DER encoded PKCS#12 file which can contain certificates and/or keys
             */
            DER_PKCS12,
            /**
             * OpenSSH v1 or v2 public key
             */
            OPENSSH_PUBLIC,
            /**
             * OpenPGP key packet(s)
             */
            OPENPGP_PACKET,
            /**
             * OpenPGP public or private key armor encoded data
             */
            OPENPGP_ARMOR,
            /**
             * An OpenSSL style PEM file with unspecified contents
             */
            PEM,
            /**
             * An OpenSSL style PEM file with a private RSA key
             */
            PEM_PRIVATE_KEY_RSA,
            /**
             * An OpenSSL style PEM file with a private DSA key
             */
            PEM_PRIVATE_KEY_DSA,
            /**
             * An OpenSSL style PEM file with an X.509 certificate
             */
            PEM_CERTIFICATE_X509,
            /**
             * An OpenSSL style PEM file containing PKCS#7
             */
            PEM_PKCS7,
            /**
             * Unencrypted OpenSSL style PEM file containing PKCS#8
             */
            PEM_PKCS8_PLAIN,
            /**
             * Encrypted OpenSSL style PEM file containing PKCS#8
             */
            PEM_PKCS8_ENCRYPTED,
            /**
             * An OpenSSL style PEM file containing PKCS#12
             */
            PEM_PKCS12,
            /**
             * An OpenSSL style PEM file with a private key
             */
            PEM_PRIVATE_KEY,
            /**
             * An OpenSSL style PEM file containing PKCS#10
             */
            PEM_PKCS10,
            /**
             * An OpenSSL style PEM file with a private EC key
             */
            PEM_PRIVATE_KEY_EC,
            /**
             * An OpenSSL style PEM file containing a SubjectPublicKeyInfo
             */
            PEM_PUBLIC_KEY,
        }
        /**
         * Various replies returned by [method`Prompt`.confirm] and friends.
         */

        /**
         * Various replies returned by [method`Prompt`.confirm] and friends.
         */
        export namespace PromptReply {
            export const $gtype: GObject.GType<PromptReply>;
        }

        enum PromptReply {
            /**
             * the prompt was cancelled
             */
            CANCEL,
            /**
             * the user replied with 'ok'
             */
            CONTINUE,
        }
        /**
         * No error returned by the #GcrSystemPrompt is suitable for display or
         * to the user.
         *
         * If the system prompter can only show one prompt at a time, and there is
         * already a prompt being displayed, and the timeout waiting to open the
         * prompt expires, then %GCR_SYSTEM_PROMPT_IN_PROGRESS is returned.
         */

        /**
         * No error returned by the #GcrSystemPrompt is suitable for display or
         * to the user.
         *
         * If the system prompter can only show one prompt at a time, and there is
         * already a prompt being displayed, and the timeout waiting to open the
         * prompt expires, then %GCR_SYSTEM_PROMPT_IN_PROGRESS is returned.
         */
        export namespace SystemPromptError {
            export const $gtype: GObject.GType<SystemPromptError>;
        }

        enum SystemPromptError {
            /**
             * another prompt is already in progress
             */
            SYSTEM_PROMPT_IN_PROGRESS,
        }
        /**
         * The mode for the system prompter. Most system prompters can only show
         * one prompt at a time and would use the %GCR_SYSTEM_PROMPTER_SINGLE mode.
         */

        /**
         * The mode for the system prompter. Most system prompters can only show
         * one prompt at a time and would use the %GCR_SYSTEM_PROMPTER_SINGLE mode.
         */
        export namespace SystemPrompterMode {
            export const $gtype: GObject.GType<SystemPrompterMode>;
        }

        enum SystemPrompterMode {
            /**
             * only one prompt shown at a time
             */
            SINGLE,
            /**
             * more than one prompt shown at a time
             */
            MULTIPLE,
        }
        const ICON_CERTIFICATE: string;
        const ICON_GNUPG: string;
        const ICON_HOME_DIRECTORY: string;
        const ICON_KEY: string;
        const ICON_KEY_PAIR: string;
        const ICON_PASSWORD: string;
        const ICON_SMART_CARD: string;
        /**
         * The major version number of the Gcr library.
         */
        const MAJOR_VERSION: number;
        /**
         * The micro version number of the Gcr library.
         */
        const MICRO_VERSION: number;
        /**
         * The minor version number of the Gcr library.
         */
        const MINOR_VERSION: number;
        /**
         * The purpose used to verify the client certificate in a TLS connection.
         */
        const PURPOSE_CLIENT_AUTH: string;
        /**
         * The purpose used to verify certificate used for the signature on signed code.
         */
        const PURPOSE_CODE_SIGNING: string;
        /**
         * The purpose used to verify certificates that are used in email communication
         * such as S/MIME.
         */
        const PURPOSE_EMAIL: string;
        /**
         * The purpose used to verify the server certificate in a TLS connection. This
         * is the most common purpose in use.
         */
        const PURPOSE_SERVER_AUTH: string;
        /**
         * The current secret exchange protocol. Key agreement is done using DH with the
         * 1536 bit IKE parameter group. Keys are derived using SHA256 with HKDF. The
         * transport encryption is done with 128 bit AES.
         */
        const SECRET_EXCHANGE_PROTOCOL_1: string;
        const UNLOCK_OPTION_ALWAYS: string;
        const UNLOCK_OPTION_IDLE: string;
        const UNLOCK_OPTION_SESSION: string;
        const UNLOCK_OPTION_TIMEOUT: string;
        /**
         * Compare one certificate against another. If the certificates are equal
         * then zero is returned. If one certificate is %NULL or not a certificate,
         * then a non-zero value is returned.
         *
         * The return value is useful in a stable sort, but has no user logical
         * meaning.
         * @param first the certificate to compare
         * @param other the certificate to compare against
         * @returns zero if the certificates match, non-zero otherwise.
         */
        function certificate_compare(first?: Comparable | null, other?: Comparable | null): number;
        function data_error_get_domain(): GLib.Quark;
        /**
         * Create a key fingerprint for a certificate, public key or private key.
         * Note that this is not a fingerprint of certificate data, which you would
         * use gcr_certificate_get_fingerprint() for.
         * @param attrs attributes for key or certificate
         * @param checksum_type the type of fingerprint to create
         * @returns the          fingerprint or %NULL if the input was invalid.
         */
        function fingerprint_from_attributes(
            attrs: Gck.Attributes,
            checksum_type: GLib.ChecksumType,
        ): Uint8Array | null;
        /**
         * Create a key fingerprint for a DER encoded subjectPublicKeyInfo. The
         * fingerprint is created so that it will be identical for a key and its
         * corresponding certificate.
         *
         * Note that in the case of certificates this is not a fingerprint of the
         * actual certificate data, but rather of the public key contained in a
         * certificate.
         * @param key_info DER encoded subjectPublicKeyInfo structure
         * @param checksum_type the type of fingerprint to create
         * @returns the          fingerprint or %NULL if the input was invalid.
         */
        function fingerprint_from_subject_public_key_info(
            key_info: Uint8Array | string,
            checksum_type: GLib.ChecksumType,
        ): Uint8Array | null;
        /**
         * Get an appropriate icon for the token
         * @param token_info the token info
         * @returns the icon
         */
        function icon_for_token(token_info: Gck.TokenInfo): Gio.Icon;
        /**
         * Create a set of importers which can import this parsed item.
         * The parsed item is represented by the state of the GcrParser at the
         * time of calling this method.
         * @param parsed a parser with a parsed item to import
         * @returns a list of importers          which can import the parsed item, which should be freed with          g_object_unref(), or %NULL if no types of importers can be created
         */
        function importer_create_for_parsed(parsed: Parsed): Importer[];
        /**
         * Queues an additional item to be imported in all compattible importers
         * in the set. The parsed item is represented by the state of the #GcrParser
         * at the time of calling this method.
         *
         * If the parsed item is incompatible with an importer, then that the item
         * will not be queued on that importer.
         * @param importers a set of importers
         * @param parsed a parsed item
         * @returns a new set of importers          that queued the item, which should be freed with gck_list_unref_free()
         */
        function importer_queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[];
        /**
         * Register an importer to handle parsed items that match the given attributes.
         *
         * If `attrs` are a floating reference, then it is consumed.
         * @param importer_type the GType of the importer being registered
         * @param attrs the attributes that this importer is compatible with
         */
        function importer_register(importer_type: GObject.GType, attrs: Gck.Attributes): void;
        /**
         * Register built-in PKCS#11 and GnuPG importers.
         */
        function importer_register_well_known(): void;
        /**
         * Disconnect the mock prompter
         */
        function mock_prompter_disconnect(): void;
        /**
         * Queue an expected response on the mock prompter.
         *
         * Expects any prompt, and closes the prompt when it gets it.
         */
        function mock_prompter_expect_close(): void;
        /**
         * Queue an expected response on the mock prompter.
         *
         * Expects a confirmation prompt, and then cancels that prompt.
         */
        function mock_prompter_expect_confirm_cancel(): void;
        /**
         * Queue an expected response on the mock prompter.
         *
         * Expects a password prompt, and then cancels that prompt.
         */
        function mock_prompter_expect_password_cancel(): void;
        /**
         * Get the delay in milliseconds before the mock prompter completes
         * an expected prompt.
         * @returns the delay
         */
        function mock_prompter_get_delay_msec(): number;
        /**
         * Check if the mock prompter is expecting a response. This will be %TRUE
         * when one of the <literal>gcr_mock_prompter_expect_xxx<!-- -->()</literal>
         * functions have been used to queue an expected prompt, but that prompt
         * response has not be 'used' yet.
         * @returns whether expecting a prompt
         */
        function mock_prompter_is_expecting(): boolean;
        /**
         * Check if the mock prompter is showing any prompts.
         * @returns whether prompting
         */
        function mock_prompter_is_prompting(): boolean;
        /**
         * Set the delay in milliseconds before the mock prompter completes
         * an expected prompt.
         * @param delay_msec prompt response delay in milliseconds
         */
        function mock_prompter_set_delay_msec(delay_msec: number): void;
        /**
         * Start the mock prompter. This is often used from the
         * <literal>setup<!-- -->()</literal> function of tests.
         *
         * Starts the mock prompter in an additional thread. Use the returned DBus bus
         * name with gcr_system_prompt_open_for_prompter() to connect to this prompter.
         * @returns the bus name that the mock prompter is listening on
         */
        function mock_prompter_start(): string;
        /**
         * Stop the mock prompter. This is often used from the
         * <literal>teardown<!-- -->()</literal> function of tests.
         */
        function mock_prompter_stop(): void;
        /**
         * Unreferences a parsed item which was referenced with gcr_parsed_ref()
         * @param parsed a parsed item
         */
        function parsed_unref(parsed?: any | null): void;
        /**
         * Add a #GckModule to the list of PKCS#11 modules that are used by the
         * GCR library.
         *
         * It is not normally necessary to call this function. The available
         * PKCS#11 modules installed on the system are automatically loaded
         * by the GCR library.
         * @param module a #GckModule
         */
        function pkcs11_add_module(module: Gck.Module): void;
        /**
         * Initialize a PKCS#11 module and add it to the modules that are
         * used by the GCR library. Note that is an error to initialize the same
         * PKCS#11 module twice.
         *
         * It is not normally necessary to call this function. The available
         * PKCS#11 modules installed on the system are automatically loaded
         * by the GCR library.
         * @param module_path the full file path of the PKCS#11 module
         * @param unused unused
         * @returns whether the module was sucessfully added.
         */
        function pkcs11_add_module_from_file(module_path: string, unused?: any | null): boolean;
        /**
         * List all the PKCS#11 modules that are used by the GCR library.
         * Each module is a [class`Gck`.Module] object.
         *
         * An empty list of modules will be returned if [func`pkcs1`1_set_modules],
         * or [func`pkcs1`1_initialize] has not yet run.
         *
         * When done with the list, free it with gck_list_unref_free().
         * @returns a newly allocated list          of #GckModule objects
         */
        function pkcs11_get_modules(): Gck.Module[];
        /**
         * List all the PKCS#11 slots that are used by the GCR library for lookup
         * of trust assertions. Each slot is a [class`Gck`.Slot] object.
         *
         * This will return an empty list if the [func`pkcs1`1_initialize] function has
         * not yet been called.
         * @returns a list of #GckSlot          objects to use for lookup of trust, or the empty list if not          initialized or no appropriate trust stores could be found.
         */
        function pkcs11_get_trust_lookup_slots(): Gck.Slot[];
        /**
         * Get the PKCS#11 URIs that are used to identify which slots to use for
         * lookup trust assertions.
         * @returns the uri which identifies trust storage slot
         */
        function pkcs11_get_trust_lookup_uris(): string[] | null;
        /**
         * Selects an appropriate PKCS#11 slot to store trust assertions. The slot
         * to use is normally configured automatically by the system.
         *
         * This will only return a valid result after the [func`pkcs1`1_initialize]
         * method has been called.
         *
         * When done with the #GckSlot, use g_object_unref() to release it.
         * @returns the #GckSlot to use for trust          assertions, or null if not initialized or no appropriate          trust store could be found.
         */
        function pkcs11_get_trust_store_slot(): Gck.Slot | null;
        /**
         * Get the PKCS#11 URI that is used to identify which slot to use for
         * storing trust storage.
         * @returns the uri which identifies trust storage slot
         */
        function pkcs11_get_trust_store_uri(): string | null;
        /**
         * Asynchronously initialize the registered PKCS#11 modules.
         * @param cancellable optional cancellable used to cancel the operation
         * @returns whether the operation was successful or not.
         */
        function pkcs11_initialize(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously initialize the registered PKCS#11 modules.
         * @param cancellable optional cancellable used to cancel the operation
         */
        function pkcs11_initialize_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously initialize the registered PKCS#11 modules.
         * @param cancellable optional cancellable used to cancel the operation
         * @param callback callback which will be called when the operation completes
         */
        function pkcs11_initialize_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null,
        ): void;
        /**
         * Asynchronously initialize the registered PKCS#11 modules.
         * @param cancellable optional cancellable used to cancel the operation
         * @param callback callback which will be called when the operation completes
         */
        function pkcs11_initialize_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null,
        ): Promise<boolean> | void;
        /**
         * Complete the asynchronous operation to initialize the registered PKCS#11
         * modules.
         * @param result the asynchronous result
         * @returns whether the operation was successful or not.
         */
        function pkcs11_initialize_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the list of PKCS#11 modules that are used by the GCR library.
         * Each module in the list is a [class`Gck`.Module] object.
         *
         * It is not normally necessary to call this function. The available
         * PKCS#11 modules installed on the system are automatically loaded
         * by the GCR library.
         * @param modules a list of PKCS#11 modules
         */
        function pkcs11_set_modules(modules: Gck.Module[]): void;
        /**
         * Set the PKCS#11 URIs that are used to identify which slots to use for
         * lookup of trust assertions.
         *
         * It is not normally necessary to call this function. The relevant
         * PKCS#11 slots are automatically configured by the GCR library.
         * @param pkcs11_uris the uris which identifies trust lookup slots
         */
        function pkcs11_set_trust_lookup_uris(pkcs11_uris?: string | null): void;
        /**
         * Set the PKCS#11 URI that is used to identify which slot to use for
         * storing trust assertions.
         *
         * It is not normally necessary to call this function. The relevant
         * PKCS#11 slot is automatically configured by the GCR library.
         * @param pkcs11_uri the uri which identifies trust storage slot
         */
        function pkcs11_set_trust_store_uri(pkcs11_uri?: string | null): void;
        /**
         * Add a pinned `certificate` for connections to `peer` for `purpose`. A pinned
         * certificate overrides all other certificate verification and should be
         * used with care.
         *
         * If the same pinned certificate already exists, then this operation
         * does not add another, and succeeds without error.
         *
         * This call may block, see gcr_trust_add_pinned_certificate_async() for the
         * non-blocking version.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         * @returns %TRUE if the pinned certificate is recorded successfully
         */
        function trust_add_pinned_certificate(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Add a pinned certificate for communication with `peer` for `purpose`. A pinned
         * certificate overrides all other certificate verification and should be used
         * with care.
         *
         * If the same pinned certificate already exists, then this operation
         * does not add another, and succeeds without error.
         *
         * When the operation is finished, callback will be called. You can then call
         * [func`Gcr`.trust_add_pinned_certificate_finish] to get the result of the
         * operation.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         */
        function trust_add_pinned_certificate_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Add a pinned certificate for communication with `peer` for `purpose`. A pinned
         * certificate overrides all other certificate verification and should be used
         * with care.
         *
         * If the same pinned certificate already exists, then this operation
         * does not add another, and succeeds without error.
         *
         * When the operation is finished, callback will be called. You can then call
         * [func`Gcr`.trust_add_pinned_certificate_finish] to get the result of the
         * operation.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_add_pinned_certificate_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Certificate> | null,
        ): void;
        /**
         * Add a pinned certificate for communication with `peer` for `purpose`. A pinned
         * certificate overrides all other certificate verification and should be used
         * with care.
         *
         * If the same pinned certificate already exists, then this operation
         * does not add another, and succeeds without error.
         *
         * When the operation is finished, callback will be called. You can then call
         * [func`Gcr`.trust_add_pinned_certificate_finish] to get the result of the
         * operation.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_add_pinned_certificate_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Certificate> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes an asynchronous operation started by
         * gcr_trust_add_pinned_certificate_async().
         * @param result the #GAsyncResult passed to the callback
         * @returns %TRUE if the pinned certificate is recorded successfully
         */
        function trust_add_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
        /**
         * Check if the `certificate` is a trust anchor for the given `purpose`. A trust
         * anchor is used to verify the signatures on other certificates when verifying
         * a certificate chain. Also known as a trusted certificate authority.
         *
         * This call may block, see [func`Gcr`.trust_is_certificate_anchored_async] for
         * the non-blocking version.
         *
         * In the case of an error, %FALSE is also returned. Check `error` to detect
         * if an error occurred.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param cancellable a #GCancellable
         * @returns %TRUE if the certificate is a trust anchor
         */
        function trust_is_certificate_anchored(
            certificate: Certificate,
            purpose: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Check if the `certificate` is a trust anchor for the given `purpose`. A trust
         * anchor is used to verify the signatures on other certificates when verifying
         * a certificate chain. Also known as a trusted certificate authority.
         *
         * When the operation is finished, callback will be called. You can then call
         * gcr_trust_is_certificate_anchored_finish() to get the result of the operation.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param cancellable a #GCancellable
         */
        function trust_is_certificate_anchored_async(
            certificate: Certificate,
            purpose: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Check if the `certificate` is a trust anchor for the given `purpose`. A trust
         * anchor is used to verify the signatures on other certificates when verifying
         * a certificate chain. Also known as a trusted certificate authority.
         *
         * When the operation is finished, callback will be called. You can then call
         * gcr_trust_is_certificate_anchored_finish() to get the result of the operation.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_is_certificate_anchored_async(
            certificate: Certificate,
            purpose: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Certificate> | null,
        ): void;
        /**
         * Check if the `certificate` is a trust anchor for the given `purpose`. A trust
         * anchor is used to verify the signatures on other certificates when verifying
         * a certificate chain. Also known as a trusted certificate authority.
         *
         * When the operation is finished, callback will be called. You can then call
         * gcr_trust_is_certificate_anchored_finish() to get the result of the operation.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_is_certificate_anchored_async(
            certificate: Certificate,
            purpose: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Certificate> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes an asynchronous operation started by
         * gcr_trust_is_certificate_anchored_async().
         *
         * In the case of an error, %FALSE is also returned. Check `error` to detect
         * if an error occurred.
         * @param result the #GAsyncResult passed to the callback
         * @returns %TRUE if the certificate is a trust anchor
         */
        function trust_is_certificate_anchored_finish(result: Gio.AsyncResult): boolean;
        /**
         * Check if `certificate` is pinned for `purpose` to communicate with `peer`.
         * A pinned certificate overrides all other certificate verification.
         *
         * This call may block, see gcr_trust_is_certificate_pinned_async() for the
         * non-blocking version.
         *
         * In the case of an error, %FALSE is also returned. Check `error` to detect
         * if an error occurred.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param peer the peer for this pinned
         * @param cancellable a #GCancellable
         * @returns %TRUE if the certificate is pinned for the host and purpose
         */
        function trust_is_certificate_pinned(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Check if `certificate` is pinned for `purpose` to communicate with `peer`. A
         * pinned certificate overrides all other certificate verification.
         *
         * When the operation is finished, callback will be called. You can then call
         * [func`Gcr`.trust_is_certificate_pinned_finish] to get the result of the
         * operation.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param peer the peer for this pinned
         * @param cancellable a #GCancellable
         */
        function trust_is_certificate_pinned_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Check if `certificate` is pinned for `purpose` to communicate with `peer`. A
         * pinned certificate overrides all other certificate verification.
         *
         * When the operation is finished, callback will be called. You can then call
         * [func`Gcr`.trust_is_certificate_pinned_finish] to get the result of the
         * operation.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param peer the peer for this pinned
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_is_certificate_pinned_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Certificate> | null,
        ): void;
        /**
         * Check if `certificate` is pinned for `purpose` to communicate with `peer`. A
         * pinned certificate overrides all other certificate verification.
         *
         * When the operation is finished, callback will be called. You can then call
         * [func`Gcr`.trust_is_certificate_pinned_finish] to get the result of the
         * operation.
         * @param certificate a #GcrCertificate to check
         * @param purpose the purpose string
         * @param peer the peer for this pinned
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_is_certificate_pinned_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Certificate> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes an asynchronous operation started by
         * gcr_trust_is_certificate_pinned_async().
         *
         * In the case of an error, %FALSE is also returned. Check `error` to detect
         * if an error occurred.
         * @param result the #GAsyncResult passed to the callback
         * @returns %TRUE if the certificate is pinned.
         */
        function trust_is_certificate_pinned_finish(result: Gio.AsyncResult): boolean;
        /**
         * Remove a pinned certificate for communication with `peer` for `purpose`.
         *
         * If the same pinned certificate does not exist, or was already removed,
         * then this operation succeeds without error.
         *
         * This call may block, see gcr_trust_remove_pinned_certificate_async() for the
         * non-blocking version.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         * @returns %TRUE if the pinned certificate no longer exists
         */
        function trust_remove_pinned_certificate(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Remove a pinned certificate for communication with `peer` for `purpose`.
         *
         * If the same pinned certificate does not exist, or was already removed,
         * then this operation succeeds without error.
         *
         * When the operation is finished, callback will be called. You can then call
         * gcr_trust_remove_pinned_certificate_finish() to get the result of the
         * operation.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         */
        function trust_remove_pinned_certificate_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Remove a pinned certificate for communication with `peer` for `purpose`.
         *
         * If the same pinned certificate does not exist, or was already removed,
         * then this operation succeeds without error.
         *
         * When the operation is finished, callback will be called. You can then call
         * gcr_trust_remove_pinned_certificate_finish() to get the result of the
         * operation.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_remove_pinned_certificate_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Certificate> | null,
        ): void;
        /**
         * Remove a pinned certificate for communication with `peer` for `purpose`.
         *
         * If the same pinned certificate does not exist, or was already removed,
         * then this operation succeeds without error.
         *
         * When the operation is finished, callback will be called. You can then call
         * gcr_trust_remove_pinned_certificate_finish() to get the result of the
         * operation.
         * @param certificate a #GcrCertificate
         * @param purpose the purpose string
         * @param peer the peer for this pinned certificate
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        function trust_remove_pinned_certificate_async(
            certificate: Certificate,
            purpose: string,
            peer: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Certificate> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes an asynchronous operation started by
         * gcr_trust_remove_pinned_certificate_async().
         * @param result the #GAsyncResult passed to the callback
         * @returns %TRUE if the pinned certificate no longer exists
         */
        function trust_remove_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
        interface FilterCollectionFunc<A = GObject.Object> {
            (object: A): boolean;
        }
        /**
         * Flags to be used with the gcr_certificate_chain_build() operation.
         */

        /**
         * Flags to be used with the gcr_certificate_chain_build() operation.
         */
        export namespace CertificateChainFlags {
            export const $gtype: GObject.GType<CertificateChainFlags>;
        }

        enum CertificateChainFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * If this flag is specified then no
             * lookups for anchors or pinned certificates are done, and the resulting chain
             * will be neither anchored or pinned. Additionally no missing certificate
             * authorities are looked up in PKCS#11.
             */
            NO_LOOKUPS,
        }

        export namespace ColumnFlags {
            export const $gtype: GObject.GType<ColumnFlags>;
        }

        enum ColumnFlags {
            NONE,
            HIDDEN,
            SORTABLE,
        }
        module CertificateChain {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                length: number;
            }
        }

        /**
         * Represents a chain of certificates, normally used to
         * validate the trust in a certificate. An X.509 certificate chain has one
         * endpoint certificate (the one for which trust is being verified) and then
         * in turn the certificate that issued each previous certificate in the chain.
         *
         * This functionality is for building of certificate chains not for validating
         * them. Use your favorite crypto library to validate trust in a certificate
         * chain once its built.
         *
         * The order of certificates in the chain should be first the endpoint
         * certificates and then the signing certificates.
         *
         * Create a new certificate chain with [ctor`CertificateChain`.new] and then
         * add the certificates with [method`CertificateChain`.add].
         *
         * You can then use [method`CertificateChain`.build] to build the remainder of
         * the chain. This will lookup missing certificates in PKCS#11 modules and
         * also check that each certificate in the chain is the signer of the previous
         * one. If a trust anchor, pinned certificate, or self-signed certificate is
         * found, then the chain is considered built. Any extra certificates are
         * removed from the chain.
         *
         * Once the certificate chain has been built, you can access its status
         * through [method`CertificateChain`.get_status]. The status signifies whether
         * the chain is anchored on a trust root, self-signed, incomplete etc. See
         * [enum`CertificateChainStatus]` for information on the various statuses.
         *
         * It's important to understand that the building of a certificate chain is
         * merely the first step towards verifying trust in a certificate.
         */
        class CertificateChain extends GObject.Object {
            static $gtype: GObject.GType<CertificateChain>;

            // Properties

            /**
             * The length of the certificate chain.
             */
            get length(): number;

            // Constructors

            constructor(properties?: Partial<CertificateChain.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CertificateChain;

            // Methods

            /**
             * Add `certificate` to the chain. The order of certificates in the chain are
             * important. The first certificate should be the endpoint certificate, and
             * then come the signers (certificate authorities) each in turn. If a root
             * certificate authority is present, it should come last.
             *
             * Adding a certificate an already built chain (see
             * gcr_certificate_chain_build()) resets the type of the certificate chain
             * to %GCR_CERTIFICATE_CHAIN_UNKNOWN
             * @param certificate a #GcrCertificate to add to the chain
             */
            add(certificate: Certificate): void;
            /**
             * Complete a certificate chain. Once a certificate chain has been built
             * its status can be examined.
             *
             * This operation will lookup missing certificates in PKCS#11
             * modules and also that each certificate in the chain is the signer of the
             * previous one. If a trust anchor, pinned certificate, or self-signed certificate
             * is found, then the chain is considered built. Any extra certificates are
             * removed from the chain.
             *
             * It's important to understand that building of a certificate chain does not
             * constitute verifying that chain. This is merely the first step towards
             * trust verification.
             *
             * The `purpose` is a string like %GCR_PURPOSE_CLIENT_AUTH and is the purpose
             * for which the certificate chain will be used. Trust anchors are looked up
             * for this purpose. This argument is required.
             *
             * The `peer` is usually the host name of the peer whith which this certificate
             * chain is being used. It is used to look up pinned certificates that have
             * been stored for this peer. If %NULL then no pinned certificates will
             * be considered.
             *
             * If the %GCR_CERTIFICATE_CHAIN_NO_LOOKUPS flag is specified then no
             * lookups for anchors or pinned certificates are done, and the resulting chain
             * will be neither anchored or pinned. Additionally no missing certificate
             * authorities are looked up in PKCS#11
             *
             * This call will block, see gcr_certificate_chain_build_async() for the
             * asynchronous version.
             * @param purpose the purpose the certificate chain will be used for
             * @param peer the peer the certificate chain will be used with, or %NULL
             * @param flags chain completion flags
             * @param cancellable a #GCancellable or %NULL
             * @returns whether the operation completed successfully
             */
            build(
                purpose: string,
                peer: string | null,
                flags: CertificateChainFlags,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Complete a certificate chain. Once a certificate chain has been built
             * its status can be examined.
             *
             * This will lookup missing certificates in PKCS#11
             * modules and also that each certificate in the chain is the signer of the
             * previous one. If a trust anchor, pinned certificate, or self-signed certificate
             * is found, then the chain is considered built. Any extra certificates are
             * removed from the chain.
             *
             * It's important to understand that building of a certificate chain does not
             * constitute verifying that chain. This is merely the first step towards
             * trust verification.
             *
             * The `purpose` is a string like %GCR_PURPOSE_CLIENT_AUTH and is the purpose
             * for which the certificate chain will be used. Trust anchors are looked up
             * for this purpose. This argument is required.
             *
             * The `peer` is usually the host name of the peer whith which this certificate
             * chain is being used. It is used to look up pinned certificates that have
             * been stored for this peer. If %NULL then no pinned certificates will
             * be considered.
             *
             * If the %GCR_CERTIFICATE_CHAIN_NO_LOOKUPS flag is specified then no
             * lookups for anchors or pinned certificates are done, and the resulting chain
             * will be neither anchored or pinned. Additionally no missing certificate
             * authorities are looked up in PKCS#11
             *
             * When the operation is finished, `callback` will be called. You can then call
             * gcr_certificate_chain_build_finish() to get the result of the operation.
             * @param purpose the purpose the certificate chain will be used for
             * @param peer the peer the certificate chain will be used with, or %NULL
             * @param flags chain completion flags
             * @param cancellable a #GCancellable or %NULL
             * @param callback this will be called when the operation completes.
             */
            build_async(
                purpose: string,
                peer: string | null,
                flags: CertificateChainFlags,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous operation started by
             * gcr_certificate_chain_build_async().
             * @param result the #GAsyncResult passed to the callback
             * @returns whether the operation succeeded
             */
            build_finish(result: Gio.AsyncResult): boolean;
            /**
             * If the certificate chain has been built and is of status
             * %GCR_CERTIFICATE_CHAIN_ANCHORED, then this will return the anchor
             * certificate that was found. This is not necessarily a root certificate
             * authority. If an intermediate certificate authority in the chain was
             * found to be anchored, then that certificate will be returned.
             *
             * If an anchor is returned it does not mean that the certificate chain has
             * been verified, but merely that an anchor has been found.
             * @returns the anchor certificate, or %NULL if not anchored.
             */
            get_anchor(): Certificate;
            /**
             * Get a certificate in the chain. It is an error to call this function
             * with an invalid index.
             * @param index index of the certificate to get
             * @returns the certificate
             */
            get_certificate(index: number): Certificate;
            /**
             * Get the endpoint certificate in the chain. This is always the first
             * certificate in the chain. The endpoint certificate cannot be anchored.
             * @returns the endpoint certificate, or %NULL if the chain          is empty
             */
            get_endpoint(): Certificate;
            /**
             * Get the length of the certificate chain.
             * @returns the length of the certificate chain
             */
            get_length(): number;
            /**
             * Get the status of a certificate chain. If the certificate chain has not
             * been built, then the status will be %GCR_CERTIFICATE_CHAIN_UNKNOWN.
             *
             * A status of %GCR_CERTIFICATE_CHAIN_ANCHORED does not mean that the
             * certificate chain has been verified, but merely that an anchor has been
             * found.
             * @returns the status of the certificate chain.
             */
            get_status(): CertificateChainStatus;
        }

        module CertificateRequest {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                private_key: Gck.Object;
                privateKey: Gck.Object;
            }
        }

        /**
         * An object that allows creation of certificate requests. A certificate
         * request is sent to a certificate authority to request an X.509 certificate.
         *
         * Use [func`CertificateRequest`.prepare] to create a blank certificate
         * request for a given private key. Set the common name on the certificate
         * request with [method`CertificateRequest`.set_cn], and then sign the request
         * with [method`CertificateRequest`.complete_async].
         */
        class CertificateRequest extends GObject.Object {
            static $gtype: GObject.GType<CertificateRequest>;

            // Properties

            /**
             * The private key that this certificate request is for.
             */
            get private_key(): Gck.Object;
            /**
             * The private key that this certificate request is for.
             */
            get privateKey(): Gck.Object;

            // Constructors

            constructor(properties?: Partial<CertificateRequest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Check whether [class`CertificateRequest]` is capable of creating a request
             * for the given `private_key`.
             * @param private_key a private key
             * @param cancellable cancellation object
             */
            static capable(private_key: Gck.Object, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously check whether [class`CertificateRequest]` is capable of
             * creating a request for the given `private_key`.
             * @param private_key a private key
             * @param cancellable cancellation object
             * @param callback will be called when the operation completes
             */
            static capable_async(
                private_key: Gck.Object,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<CertificateRequest> | null,
            ): void;
            /**
             * Get the result for asynchronously check whether [class`CertificateRequest]` is
             * capable of creating a request for the given `private_key`.
             * @param result asynchronous result
             */
            static capable_finish(result: Gio.AsyncResult): boolean;
            /**
             * Create a new certificate request, in the given format for the private key.
             * @param format the format for the certificate request
             * @param private_key the private key the the certificate is being requested for
             */
            static prepare(format: CertificateRequestFormat, private_key: Gck.Object): CertificateRequest;

            // Methods

            /**
             * Complete and sign a certificate request, so that it can be encoded
             * and sent to a certificate authority.
             *
             * This call may block as it signs the request using the private key.
             * @param cancellable a cancellation object
             * @returns whether certificate request was successfully completed or not
             */
            complete(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously complete and sign a certificate request, so that it can
             * be encoded and sent to a certificate authority.
             *
             * This call will return immediately and complete later.
             * @param cancellable a cancellation object
             * @param callback called when the operation completes
             */
            complete_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finish an asynchronous operation to complete and sign a certificate
             * request.
             * @param result result of the asynchronous operation
             * @returns whether certificate request was successfully completed or not
             */
            complete_finish(result: Gio.AsyncResult): boolean;
            /**
             * Encode the certificate request. It must have been completed with
             * [method`CertificateRequest`.complete] or
             * [method`CertificateRequest`.complete_async].
             *
             * If `textual` is %FALSE, the output is a DER encoded certificate request.
             *
             * If `textual` is %TRUE, the output is encoded as text. For PKCS#10 requests
             * this is done using the OpenSSL style PEM encoding.
             * @param textual whether to encode output as text
             * @returns the encoded certificate request
             */
            encode(textual: boolean): Uint8Array;
            /**
             * Get the format of this certificate request.
             * @returns the format
             */
            get_format(): CertificateRequestFormat;
            /**
             * Get the private key this certificate request is for.
             * @returns the private key,
             */
            get_private_key(): Gck.Object;
            /**
             * Set the common name encoded in the certificate request.
             * @param cn common name to set on the request
             */
            set_cn(cn: string): void;
        }

        module FilterCollection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Collection.ConstructorProps {
                underlying: Collection;
            }
        }

        /**
         * A collection which filters a [iface`Collection]`.
         *
         * An implementation of [iface`Collection]` which filters objects from another
         * underlying collection. Use [ctor`FilterCollection`.new_with_callback]
         * to create a new filter collection.
         *
         * The callback will determine the criteria for whether an object shows through
         * the filter or not.
         */
        class FilterCollection extends GObject.Object implements Collection {
            static $gtype: GObject.GType<FilterCollection>;

            // Properties

            get underlying(): Collection;

            // Constructors

            constructor(properties?: Partial<FilterCollection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_with_callback(underlying: Collection, callback?: FilterCollectionFunc | null): FilterCollection;

            // Methods

            /**
             * Get the collection that is being filtered by this filter collection.
             * @returns the underlying collection
             */
            get_underlying(): Collection;
            /**
             * Refilter all objects in the underlying collection. Call this function if
             * the filter callback function changes its filtering criteria.
             */
            refilter(): void;
            /**
             * Set the callback used to filter the objects in the underlying collection.
             * The callback should return %TRUE if an object should appear in the
             * filtered collection.
             *
             * If a %NULL callback is set, then all underlynig objects will appear in the
             * filtered collection.
             *
             * This will refilter the collection.
             * @param callback function to call for each object
             */
            set_callback(callback?: FilterCollectionFunc | null): void;

            // Inherited methods
            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             * @returns whether the collection contains this object
             */
            contains(object: GObject.Object): boolean;
            /**
             * Emit the #GcrCollection::added signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was added
             */
            emit_added(object: GObject.Object): void;
            /**
             * Emit the #GcrCollection::removed signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was removed
             */
            emit_removed(object: GObject.Object): void;
            /**
             * Get the number of objects in this collection.
             * @returns The number of objects.
             */
            get_length(): number;
            /**
             * Get a list of the objects in this collection.
             * @returns a list of the objects          in this collection, which should be freed with g_list_free()
             */
            get_objects(): GObject.Object[];
            vfunc_added(object: GObject.Object): void;
            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             */
            vfunc_contains(object: GObject.Object): boolean;
            /**
             * Get the number of objects in this collection.
             */
            vfunc_get_length(): number;
            /**
             * Get a list of the objects in this collection.
             */
            vfunc_get_objects(): GObject.Object[];
            vfunc_removed(object: GObject.Object): void;
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

        module Parser {
            // Signal callback interfaces

            interface Authenticate {
                (count: number): boolean;
            }

            interface Parsed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                parsed_attributes: Gck.Attributes;
                parsedAttributes: Gck.Attributes;
                parsed_description: string;
                parsedDescription: string;
                parsed_label: string;
                parsedLabel: string;
            }
        }

        /**
         * A parser for parsing various types of files or data.
         *
         * A `GcrParser` can parse various certificate and key files such as OpenSSL
         * PEM files, DER encoded certifictes, PKCS#8 keys and so on. Each various
         * format is identified by a value in the [enum`DataFormat]` enumeration.
         *
         * In order to parse data, a new parser is created with gcr_parser_new() and
         * then the [signal`Parser:`:authenticate] and [signal`Parser:`:parsed] signals
         * should be connected to. Data is then fed to the parser via
         * [method`Parser`.parse_data] or [method`Parser`.parse_stream].
         *
         * During the [signal`Parser:`:parsed] signal the attributes that make up the
         * currently parsed item can be retrieved using the
         * [method`Parser`.get_parsed_attributes] function.
         */
        class Parser extends GObject.Object {
            static $gtype: GObject.GType<Parser>;

            // Properties

            /**
             * Get the attributes that make up the currently parsed item. This is
             * generally only valid during a #GcrParser::parsed signal.
             */
            get parsed_attributes(): Gck.Attributes;
            /**
             * Get the attributes that make up the currently parsed item. This is
             * generally only valid during a #GcrParser::parsed signal.
             */
            get parsedAttributes(): Gck.Attributes;
            /**
             * The description of the type of the currently parsed item. This is generally
             * only valid during a #GcrParser::parsed signal.
             */
            get parsed_description(): string;
            /**
             * The description of the type of the currently parsed item. This is generally
             * only valid during a #GcrParser::parsed signal.
             */
            get parsedDescription(): string;
            /**
             * The label of the currently parsed item. This is generally
             * only valid during a #GcrParser::parsed signal.
             */
            get parsed_label(): string;
            /**
             * The label of the currently parsed item. This is generally
             * only valid during a #GcrParser::parsed signal.
             */
            get parsedLabel(): string;

            // Constructors

            constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Parser;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'authenticate', callback: (_source: this, count: number) => boolean): number;
            connect_after(signal: 'authenticate', callback: (_source: this, count: number) => boolean): number;
            emit(signal: 'authenticate', count: number): void;
            connect(signal: 'parsed', callback: (_source: this) => void): number;
            connect_after(signal: 'parsed', callback: (_source: this) => void): number;
            emit(signal: 'parsed'): void;

            // Virtual methods

            /**
             * The default handler for the authenticate signal.
             * @param count
             */
            vfunc_authenticate(count: number): boolean;
            /**
             * The default handler for the parsed signal.
             */
            vfunc_parsed(): void;

            // Methods

            /**
             * Add a password to the set of passwords to try when parsing locked or encrypted
             * items. This is usually called from the #GcrParser::authenticate signal.
             * @param password a password to try
             */
            add_password(password?: string | null): void;
            /**
             * Disable parsing of the given format. Use %GCR_FORMAT_ALL to disable all the formats.
             * @param format The format identifier
             */
            format_disable(format: DataFormat): void;
            /**
             * Enable parsing of the given format. Use %GCR_FORMAT_ALL to enable all the formats.
             * @param format The format identifier
             */
            format_enable(format: DataFormat): void;
            /**
             * Check whether the given format is supported by the parser.
             * @param format The format identifier
             * @returns Whether the format is supported.
             */
            format_supported(format: DataFormat): boolean;
            /**
             * Get the filename of the parser item.
             * @returns the filename set on the parser, or %NULL
             */
            get_filename(): string;
            /**
             * Get the currently parsed item
             * @returns the currently parsed item
             */
            get_parsed(): Parsed;
            /**
             * Get the attributes which make up the currently parsed item. This is generally
             * only valid during the #GcrParser::parsed signal.
             * @returns the attributes for the current item,          which are owned by the parser and should not be freed
             */
            get_parsed_attributes(): Gck.Attributes | null;
            /**
             * Get the raw data block that represents this parsed object. This is only
             * valid during the #GcrParser::parsed signal.
             * @returns the raw data          block of the currently parsed item; the value is owned by the parser          and should not be freed
             */
            get_parsed_block(): Uint8Array | null;
            /**
             * Get the raw data block that represents this parsed object. This is only
             * valid during the #GcrParser::parsed signal.
             * @returns the raw data block of the currently parsed item
             */
            get_parsed_bytes(): GLib.Bytes;
            /**
             * Get a description for the type of the currently parsed item. This is generally
             * only valid during the #GcrParser::parsed signal.
             * @returns the description for the current item; this is owned by          the parser and should not be freed
             */
            get_parsed_description(): string | null;
            /**
             * Get the format of the raw data block that represents this parsed object.
             * This corresponds with the data returned from gcr_parser_get_parsed_block().
             *
             * This is only valid during the #GcrParser::parsed signal.
             * @returns the data format of the currently parsed item
             */
            get_parsed_format(): DataFormat;
            /**
             * Get the label of the currently parsed item. This is generally only valid
             * during the #GcrParser::parsed signal.
             * @returns the label of the currently parsed item. The value is          owned by the parser and should not be freed.
             */
            get_parsed_label(): string | null;
            /**
             * Parse the data. The #GcrParser::parsed and #GcrParser::authenticate signals
             * may fire during the parsing.
             * @param data the data to parse
             * @returns Whether the data was parsed successfully or not.
             */
            parse_bytes(data: GLib.Bytes | Uint8Array): boolean;
            /**
             * Parse the data. The #GcrParser::parsed and #GcrParser::authenticate signals
             * may fire during the parsing.
             *
             * A copy of the data will be made. Use gcr_parser_parse_bytes() to avoid this.
             * @param data the data to parse
             * @returns Whether the data was parsed successfully or not.
             */
            parse_data(data: Uint8Array | string): boolean;
            /**
             * Parse items from the data in a #GInputStream. This function may block while
             * reading from the input stream. Use gcr_parser_parse_stream_async() for
             * a non-blocking variant.
             *
             * The #GcrParser::parsed and #GcrParser::authenticate signals
             * may fire during the parsing.
             * @param input The input stream
             * @param cancellable An optional cancellation object
             * @returns Whether the parsing completed successfully or not.
             */
            parse_stream(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Parse items from the data in a #GInputStream. This function completes
             * asyncronously and doesn't block.
             *
             * The #GcrParser::parsed and #GcrParser::authenticate signals
             * may fire during the parsing.
             * @param input The input stream
             * @param cancellable An optional cancellation object
             * @param callback Called when the operation result is ready.
             */
            parse_stream_async(
                input: Gio.InputStream,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to parse a stream.
             * @param result The operation result
             * @returns Whether the parsing completed successfully or not.
             */
            parse_stream_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the filename of the parser item.
             * @param filename a string of the filename of the parser item
             */
            set_filename(filename?: string | null): void;
        }

        module Pkcs11Certificate {
            // Constructor properties interface

            interface ConstructorProps
                extends Gck.Object.ConstructorProps,
                    Certificate.ConstructorProps,
                    Comparable.ConstructorProps {
                attributes: Gck.Attributes;
            }
        }

        /**
         * A certificate loaded from a PKCS#11 storage.
         * It is also a valid [class`Gck`.Object] and can be used as such.
         *
         * Use gcr_pkcs11_certificate_lookup_issuer() to lookup the issuer of a given
         * certificate in the PKCS#11 store.
         *
         * Various common PKCS#11 certificate attributes are automatically loaded and
         * are available via gcr_pkcs11_certificate_get_attributes().
         */
        class Pkcs11Certificate extends Gck.Object implements Certificate, Comparable {
            static $gtype: GObject.GType<Pkcs11Certificate>;

            // Properties

            /**
             * Automatically loaded attributes for this certificate.
             */
            get attributes(): Gck.Attributes;

            // Constructors

            constructor(properties?: Partial<Pkcs11Certificate.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Lookup a the issuer of a `certificate` in the PKCS#11 storage. The
             * lookup is done using the issuer DN of the certificate. No certificate chain
             * verification is done. Use a crypto library to make trust decisions.
             *
             * This call may block, see gcr_pkcs11_certificate_lookup_issuer() for the
             * non-blocking version.
             *
             * Will return %NULL if no issuer certificate is found. Use `error` to determine
             * if an error occurred.
             * @param certificate a #GcrCertificate
             * @param cancellable a #GCancellable
             */
            static lookup_issuer(certificate: Certificate, cancellable?: Gio.Cancellable | null): Certificate;
            /**
             * Lookup a the issuer of a `certificate` in the PKCS#11 storage. The
             * lookup is done using the issuer DN of the certificate. No certificate chain
             * verification is done. Use a crypto library to make trust decisions.
             *
             * When the operation is finished, callback will be called. You can then call
             * gcr_pkcs11_certificate_lookup_issuer_finish() to get the result of the
             * operation.
             * @param certificate a #GcrCertificate
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback to call when the operation completes
             */
            static lookup_issuer_async(
                certificate: Certificate,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Pkcs11Certificate> | null,
            ): void;
            /**
             * Finishes an asynchronous operation started by
             * gcr_pkcs11_certificate_lookup_issuer_async().
             *
             * Will return %NULL if no issuer certificate is found. Use `error` to determine
             * if an error occurred.
             * @param result the #GAsyncResult passed to the callback
             */
            static lookup_issuer_finish(result: Gio.AsyncResult): Certificate;

            // Methods

            /**
             * Access the automatically loaded attributes for this certificate.
             * @returns the certificate attributes
             */
            get_attributes(): Gck.Attributes;

            // Inherited properties
            /**
             * A readable description for this certificate
             */
            get description(): string;
            /**
             * The expiry date of the certificate
             */
            get expiry(): GLib.Date;
            /**
             * An icon representing the certificate
             */
            get icon(): Gio.Icon;
            /**
             * Common name part of the certificate issuer
             */
            get issuer(): string;
            /**
             * A readable label for this certificate.
             */
            get label(): string;
            /**
             * GLib markup to describe the certificate
             */
            get markup(): string;
            /**
             * Common name part of the certificate subject
             */
            get subject(): string;

            // Inherited methods
            /**
             * Get the basic constraints for the certificate if present. If %FALSE is
             * returned then no basic constraints are present and the `is_ca` and
             * `path_len` arguments are not changed.
             * @returns whether basic constraints are present or not
             */
            get_basic_constraints(): [boolean, boolean, number];
            /**
             * Gets the raw DER data for an X.509 certificate.
             * @returns raw DER data of the X.509 certificate
             */
            get_der_data(): Uint8Array;
            /**
             * Get the expiry date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated expiry date of this certificate.
             */
            get_expiry_date(): GLib.Date;
            /**
             * Calculate the fingerprint for this certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns the raw binary fingerprint
             */
            get_fingerprint(type: GLib.ChecksumType): Uint8Array;
            /**
             * Calculate the fingerprint for this certificate, and return it
             * as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns an allocated hex string which contains the fingerprint.
             */
            get_fingerprint_hex(type: GLib.ChecksumType): string;
            /**
             * Get the issued date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated issued date of this certificate.
             */
            get_issued_date(): GLib.Date;
            /**
             * Get the common name of the issuer of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer CN, or %NULL if no issuer CN present.
             */
            get_issuer_cn(): string;
            /**
             * Get the full issuer DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer DN of the certificate.
             */
            get_issuer_dn(): string;
            /**
             * Get a name to represent the issuer of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated issuer name, or %NULL if no issuer name
             */
            get_issuer_name(): string;
            /**
             * Get a part of the DN of the issuer of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the issuer DN, or %NULL if no          such part is present
             */
            get_issuer_part(part: string): string | null;
            /**
             * Get the raw DER data for the issuer DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw issuer
             */
            get_issuer_raw(): Uint8Array;
            /**
             * Get the key size in bits of the public key represented
             * by this certificate.
             * @returns The key size of the certificate.
             */
            get_key_size(): number;
            /**
             * Calculate a GMarkup string for displaying this certificate.
             * @returns the markup string
             */
            get_markup_text(): string;
            /**
             * Get the raw binary serial number of the certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns the raw binary serial number.
             */
            get_serial_number(): Uint8Array;
            /**
             * Get the serial number of the certificate as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns an allocated string containing the serial number as hex.
             */
            get_serial_number_hex(): string;
            /**
             * Get the common name of the subject of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject CN, or %NULL if no subject CN present.
             */
            get_subject_cn(): string;
            /**
             * Get the full subject DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject DN of the certificate.
             */
            get_subject_dn(): string;
            /**
             * Get a name to represent the subject of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated subject name, or %NULL if no subject name
             */
            get_subject_name(): string;
            /**
             * Get a part of the DN of the subject of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the subject DN, or %NULL if no          such part is present.
             */
            get_subject_part(part: string): string | null;
            /**
             * Get the raw DER data for the subject DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw subject
             */
            get_subject_raw(): Uint8Array;
            /**
             * Check if `issuer` could be the issuer of this certificate. This is done by
             * comparing the relevant subject and issuer fields. No signature check is
             * done. Proper verification of certificates must be done via a crypto
             * library.
             * @param issuer a possible issuer #GcrCertificate
             * @returns whether @issuer could be the issuer of the certificate.
             */
            is_issuer(issuer: Certificate): boolean;
            /**
             * Implementers of the #GcrCertificate mixin should call this function to notify
             * when the certificate has changed to emit notifications on the various
             * properties.
             */
            mixin_emit_notify(): void;
            /**
             * Gets the raw DER data for an X.509 certificate.
             */
            vfunc_get_der_data(): Uint8Array;
            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             * @returns Zero if the two objects represent the same thing, non-zero if not.
             */
            compare(other?: Comparable | null): number;
            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             */
            vfunc_compare(other?: Comparable | null): number;
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
            // Conflicted with Gck.Object.get_data
            get_data(...args: never[]): any;
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
            // Conflicted with Gck.Object.set
            set(...args: never[]): any;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module SecretExchange {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                protocol: string;
            }
        }

        /**
         * Allows exchange of secrets between two processes on the same system without
         * exposing those secrets to things like loggers, non-pageable memory etc.
         *
         * This does not protect against active attacks like MITM attacks.
         *
         * Each side creates a secret exchange object, and one of the sides calls
         * [method`SecretExchange`.begin]. This creates a string, which should be passed
         * to the other side. Each side passes the strings it receives into
         * [method`SecretExchange`.receive].
         *
         * In order to send a reply (either with or without a secret) use
         * [method`SecretExchange`.send]. A side must have successfully called
         * [method`SecretExchange`.receive] before it can use
         * [method`SecretExchange`.send].
         *
         * The secret exchange objects can be used for multiple iterations of the
         * conversation, or for just one request/reply. The only limitation being that
         * the initial request cannot contain a secret.
         *
         * Caveat: Information about the approximate length (rounded up to the nearest
         * 16 bytes) may be leaked. If this is considered inacceptable, do not use
         * [class`SecretExchange]`.
         */
        class SecretExchange extends GObject.Object {
            static $gtype: GObject.GType<SecretExchange>;

            // Properties

            /**
             * The protocol being used for the exchange.
             *
             * Will be %NULL if no protocol was specified when creating this object,
             * and either [method`SecretExchange`.begin] or [method`SecretExchange`.receive]
             * have not been called successfully.
             */
            get protocol(): string;

            // Constructors

            constructor(properties?: Partial<SecretExchange.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](protocol?: string | null): SecretExchange;

            // Virtual methods

            vfunc_derive_transport_key(peer: number, n_peer: number): boolean;
            vfunc_generate_exchange_key(scheme: string, public_key: number, n_public_key: number): boolean;

            // Methods

            /**
             * Begin the secret exchange. The resulting string should be sent to the other
             * side of the exchange. The other side should use [method`SecretExchange`.receive]
             * to process the string.
             * @returns A newly allocated string to be sent to the other     side of the secret exchange
             */
            begin(): string;
            /**
             * Will return %NULL if no protocol was specified, and either
             * [method`SecretExchange`.begin] or [method`SecretExchange`.receive] have not
             * been called successfully.
             * @returns the protocol or %NULL
             */
            get_protocol(): string;
            /**
             * Returns the last secret received. If no secret has yet been received this
             * will return %NULL. The string is owned by the #GcrSecretExchange object
             * and will be valid until the next time that gcr_secret_exchange_receive()
             * is called on this object, or the object is destroyed.
             *
             * Depending on the secret passed into the other side of the secret exchange,
             * the result may be a binary string. It does however have a null terminator,
             * so if you're certain that it is does not contain arbitrary binary data,
             * it can be used as a string.
             * @returns the last secret received
             */
            get_secret(): string[];
            /**
             * Receive a string from the other side of secret exchange. This string will
             * have been created by [method`SecretExchange`.begin] or
             * [method`SecretExchange`.send].
             *
             * After this call completes successfully the value returned from
             * gcr_secret_exchange_get_secret() will have changed.
             * @param exchange the string received
             * @returns whether the string was successfully parsed and received
             */
            receive(exchange: string): boolean;
            /**
             * Send a reply to the other side of the secret exchange, optionally sending a
             * secret.
             *
             * [method`SecretExchange`.receive] must have been successfully called at least
             * once on this object. In other words this object must have received data
             * from the other side of the secret exchange, before we can send a secret.
             * @param secret optionally, a secret to send to the other side
             * @param secret_len length of @secret, or -1 if null terminated
             * @returns a newly allocated string to be sent to the other     side of the secret exchange
             */
            send(secret: string | null, secret_len: number): string;
        }

        module SimpleCertificate {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Certificate.ConstructorProps,
                    Comparable.ConstructorProps {}
        }

        /**
         * An implementation of [iface`Certificate]` which loads a certificate from DER
         * data already located in memory.
         *
         * To create an object, use the [ctor`SimpleCertificate`.new] or
         * [ctor`SimpleCertificate`.new_static] functions.
         */
        class SimpleCertificate extends GObject.Object implements Certificate, Comparable {
            static $gtype: GObject.GType<SimpleCertificate>;

            // Constructors

            constructor(properties?: Partial<SimpleCertificate.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](data: Uint8Array | string): SimpleCertificate;

            // Inherited properties
            /**
             * A readable description for this certificate
             */
            get description(): string;
            /**
             * The expiry date of the certificate
             */
            get expiry(): GLib.Date;
            /**
             * An icon representing the certificate
             */
            get icon(): Gio.Icon;
            /**
             * Common name part of the certificate issuer
             */
            get issuer(): string;
            /**
             * A readable label for this certificate.
             */
            get label(): string;
            /**
             * GLib markup to describe the certificate
             */
            get markup(): string;
            /**
             * Common name part of the certificate subject
             */
            get subject(): string;

            // Inherited methods
            /**
             * Get the basic constraints for the certificate if present. If %FALSE is
             * returned then no basic constraints are present and the `is_ca` and
             * `path_len` arguments are not changed.
             * @returns whether basic constraints are present or not
             */
            get_basic_constraints(): [boolean, boolean, number];
            /**
             * Gets the raw DER data for an X.509 certificate.
             * @returns raw DER data of the X.509 certificate
             */
            get_der_data(): Uint8Array;
            /**
             * Get the expiry date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated expiry date of this certificate.
             */
            get_expiry_date(): GLib.Date;
            /**
             * Calculate the fingerprint for this certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns the raw binary fingerprint
             */
            get_fingerprint(type: GLib.ChecksumType): Uint8Array;
            /**
             * Calculate the fingerprint for this certificate, and return it
             * as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns an allocated hex string which contains the fingerprint.
             */
            get_fingerprint_hex(type: GLib.ChecksumType): string;
            /**
             * Get the issued date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated issued date of this certificate.
             */
            get_issued_date(): GLib.Date;
            /**
             * Get the common name of the issuer of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer CN, or %NULL if no issuer CN present.
             */
            get_issuer_cn(): string;
            /**
             * Get the full issuer DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer DN of the certificate.
             */
            get_issuer_dn(): string;
            /**
             * Get a name to represent the issuer of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated issuer name, or %NULL if no issuer name
             */
            get_issuer_name(): string;
            /**
             * Get a part of the DN of the issuer of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the issuer DN, or %NULL if no          such part is present
             */
            get_issuer_part(part: string): string | null;
            /**
             * Get the raw DER data for the issuer DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw issuer
             */
            get_issuer_raw(): Uint8Array;
            /**
             * Get the key size in bits of the public key represented
             * by this certificate.
             * @returns The key size of the certificate.
             */
            get_key_size(): number;
            /**
             * Calculate a GMarkup string for displaying this certificate.
             * @returns the markup string
             */
            get_markup_text(): string;
            /**
             * Get the raw binary serial number of the certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns the raw binary serial number.
             */
            get_serial_number(): Uint8Array;
            /**
             * Get the serial number of the certificate as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns an allocated string containing the serial number as hex.
             */
            get_serial_number_hex(): string;
            /**
             * Get the common name of the subject of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject CN, or %NULL if no subject CN present.
             */
            get_subject_cn(): string;
            /**
             * Get the full subject DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject DN of the certificate.
             */
            get_subject_dn(): string;
            /**
             * Get a name to represent the subject of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated subject name, or %NULL if no subject name
             */
            get_subject_name(): string;
            /**
             * Get a part of the DN of the subject of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the subject DN, or %NULL if no          such part is present.
             */
            get_subject_part(part: string): string | null;
            /**
             * Get the raw DER data for the subject DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw subject
             */
            get_subject_raw(): Uint8Array;
            /**
             * Check if `issuer` could be the issuer of this certificate. This is done by
             * comparing the relevant subject and issuer fields. No signature check is
             * done. Proper verification of certificates must be done via a crypto
             * library.
             * @param issuer a possible issuer #GcrCertificate
             * @returns whether @issuer could be the issuer of the certificate.
             */
            is_issuer(issuer: Certificate): boolean;
            /**
             * Implementers of the #GcrCertificate mixin should call this function to notify
             * when the certificate has changed to emit notifications on the various
             * properties.
             */
            mixin_emit_notify(): void;
            /**
             * Gets the raw DER data for an X.509 certificate.
             */
            vfunc_get_der_data(): Uint8Array;
            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             * @returns Zero if the two objects represent the same thing, non-zero if not.
             */
            compare(other?: Comparable | null): number;
            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             */
            vfunc_compare(other?: Comparable | null): number;
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

        module SimpleCollection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Collection.ConstructorProps {}
        }

        /**
         * A simple implementation of [iface`Collection]`, which you can add and remove
         * objects from.
         *
         * You can use [method`SimpleCollection`.add] to add objects, and
         * [method`SimpleCollection`.remove] to remove them again.
         */
        class SimpleCollection extends GObject.Object implements Collection {
            static $gtype: GObject.GType<SimpleCollection>;

            // Constructors

            constructor(properties?: Partial<SimpleCollection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SimpleCollection;

            // Methods

            /**
             * Add an object to this collection
             * @param object The object to add
             */
            add(object: GObject.Object): void;
            /**
             * Remove an object from the collection.
             * @param object The object to remove from the collection
             */
            remove(object: GObject.Object): void;

            // Inherited methods
            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             * @returns whether the collection contains this object
             */
            contains(object: GObject.Object): boolean;
            /**
             * Emit the #GcrCollection::added signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was added
             */
            emit_added(object: GObject.Object): void;
            /**
             * Emit the #GcrCollection::removed signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was removed
             */
            emit_removed(object: GObject.Object): void;
            /**
             * Get the number of objects in this collection.
             * @returns The number of objects.
             */
            get_length(): number;
            /**
             * Get a list of the objects in this collection.
             * @returns a list of the objects          in this collection, which should be freed with g_list_free()
             */
            get_objects(): GObject.Object[];
            vfunc_added(object: GObject.Object): void;
            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             */
            vfunc_contains(object: GObject.Object): boolean;
            /**
             * Get the number of objects in this collection.
             */
            vfunc_get_length(): number;
            /**
             * Get a list of the objects in this collection.
             */
            vfunc_get_objects(): GObject.Object[];
            vfunc_removed(object: GObject.Object): void;
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

        module SshAskpass {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                interaction: Gio.TlsInteraction;
            }
        }

        /**
         * When used as the setup function while spawning an ssh command like ssh-add
         * or ssh, this allows callbacks for passwords on the provided interaction.
         */
        class SshAskpass extends GObject.Object {
            static $gtype: GObject.GType<SshAskpass>;

            // Properties

            /**
             * The interaction used to prompt for passwords.
             */
            get interaction(): Gio.TlsInteraction;

            // Constructors

            constructor(properties?: Partial<SshAskpass.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](interaction: Gio.TlsInteraction): SshAskpass;

            // Static methods

            /**
             * Use this function as a callback setup function passed to g_spawn_sync(),
             * g_spawn_async(), g_spawn_async_with_pipes().
             * @param askpass a #GcrSshAskpass object
             */
            static child_setup(askpass?: any | null): void;

            // Methods

            /**
             * Get the interaction associated with this object.
             * @returns the interaction
             */
            get_interaction(): Gio.TlsInteraction;
        }

        module SystemPrompt {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Prompt.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                bus_name: string;
                busName: string;
                secret_exchange: SecretExchange;
                secretExchange: SecretExchange;
                timeout_seconds: number;
                timeoutSeconds: number;
            }
        }

        /**
         * A [iface`Prompt]` implementation which calls to the system prompter to
         * display prompts in a system modal fashion.
         *
         * Since the system prompter usually only displays one prompt at a time, you
         * may have to wait for the prompt to be displayed. Use [func`SystemPrompt`.open]
         * or a related function to open a prompt. Since this can take a long time, you
         * should always check that the prompt is still needed after it is opened. A
         * previous prompt may have already provided the information needed and you
         * may no longer need to prompt.
         *
         * Use [method`SystemPrompt`.close] to close the prompt when you're done with it.
         */
        class SystemPrompt extends GObject.Object implements Prompt, Gio.AsyncInitable<SystemPrompt>, Gio.Initable {
            static $gtype: GObject.GType<SystemPrompt>;

            // Properties

            /**
             * The DBus bus name of the prompter to use for prompting, or %NULL
             * for the default prompter.
             */
            get bus_name(): string;
            /**
             * The DBus bus name of the prompter to use for prompting, or %NULL
             * for the default prompter.
             */
            get busName(): string;
            /**
             * The #GcrSecretExchange to use when transferring passwords. A default
             * secret exchange will be used if this is not set.
             */
            get secret_exchange(): SecretExchange;
            set secret_exchange(val: SecretExchange);
            /**
             * The #GcrSecretExchange to use when transferring passwords. A default
             * secret exchange will be used if this is not set.
             */
            get secretExchange(): SecretExchange;
            set secretExchange(val: SecretExchange);
            /**
             * The timeout in seconds to wait when opening the prompt.
             */
            set timeout_seconds(val: number);
            /**
             * The timeout in seconds to wait when opening the prompt.
             */
            set timeoutSeconds(val: number);

            // Constructors

            constructor(properties?: Partial<SystemPrompt.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static error_get_domain(): GLib.Quark;
            /**
             * Opens a system prompt with the default prompter.
             *
             * Most system prompters only allow showing one prompt at a time, and if
             * another prompt is shown then this method will block for up to
             * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
             * will block indefinitely until the prompt can be opened. If `timeout_seconds`
             * expires, then this function will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
             * error.
             * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
             * @param cancellable optional cancellation object
             */
            static open(timeout_seconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt;
            /**
             * Asynchronously open a system prompt with the default system prompter.
             *
             * Most system prompters only allow showing one prompt at a time, and if
             * another prompt is shown then this method will block for up to
             * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
             * will block indefinitely until the prompt can be opened. If `timeout_seconds`
             * expires, then this operation will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
             * error.
             * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static open_async(
                timeout_seconds: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<SystemPrompt> | null,
            ): void;
            /**
             * Complete an operation to asynchronously open a system prompt.
             * @param result the asynchronous result
             */
            static open_finish(result: Gio.AsyncResult): SystemPrompt;
            /**
             * Opens a system prompt. If prompter_name is %NULL, then the default
             * system prompter is used.
             *
             * Most system prompters only allow showing one prompt at a time, and if
             * another prompt is shown then this method will block for up to
             * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
             * will block indefinitely until the prompt can be opened. If `timeout_seconds`
             * expires, then this function will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
             * error.
             * @param prompter_name the prompter dbus name
             * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
             * @param cancellable optional cancellation object
             */
            static open_for_prompter(
                prompter_name: string | null,
                timeout_seconds: number,
                cancellable?: Gio.Cancellable | null,
            ): SystemPrompt;
            /**
             * Opens a system prompt asynchronously. If prompter_name is %NULL, then the
             * default system prompter is used.
             *
             * Most system prompters only allow showing one prompt at a time, and if
             * another prompt is shown then this method will block for up to
             * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
             * will block indefinitely until the prompt can be opened. If `timeout_seconds`
             * expires, then this operation will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
             * error.
             * @param prompter_name the prompter D-Bus name
             * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            static open_for_prompter_async(
                prompter_name: string | null,
                timeout_seconds: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<SystemPrompt> | null,
            ): void;

            // Methods

            /**
             * Close this prompt. After calling this function, no further prompts will
             * succeed on this object. The prompt object is not unreferenced by this
             * function, and you must unreference it once done.
             *
             * This call may block, use the gcr_system_prompt_close_async() to perform
             * this action indefinitely.
             *
             * Whether or not this function returns %TRUE, the system prompt object is
             * still closed and may not be further used.
             * @param cancellable an optional cancellation object
             * @returns whether close was cleanly completed
             */
            close(cancellable?: Gio.Cancellable | null): boolean;
            // Conflicted with Gcr.Prompt.close
            close(...args: never[]): any;
            /**
             * Close this prompt asynchronously. After calling this function, no further
             * methods may be called on this object. The prompt object is not unreferenced
             * by this function, and you must unreference it once done.
             *
             * This call returns immediately and completes asynchronously.
             * @param cancellable an optional cancellation object
             * @param callback called when the operation completes
             */
            close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete operation to close this prompt.
             *
             * Whether or not this function returns %TRUE, the system prompt object is
             * still closed and may not be further used.
             * @param result asynchronous operation result
             * @returns whether close was cleanly completed
             */
            close_finish(result: Gio.AsyncResult): boolean;
            /**
             * Get the current [class`SecretExchange]` used to transfer secrets in this prompt.
             * @returns the secret exchange
             */
            get_secret_exchange(): SecretExchange;

            // Inherited properties
            /**
             * The string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             *
             * In X11, this will be a stringified version of the XWindow handle; in
             * Wayland this is the result of an export using the XDG foreign
             * protocol.
             */
            get caller_window(): string;
            set caller_window(val: string);
            /**
             * The string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             *
             * In X11, this will be a stringified version of the XWindow handle; in
             * Wayland this is the result of an export using the XDG foreign
             * protocol.
             */
            get callerWindow(): string;
            set callerWindow(val: string);
            /**
             * The label for the cancel button in the prompt.
             */
            get cancel_label(): string;
            set cancel_label(val: string);
            /**
             * The label for the cancel button in the prompt.
             */
            get cancelLabel(): string;
            set cancelLabel(val: string);
            /**
             * Whether the additional choice is chosen or not.
             *
             * The additional choice would have been setup using #GcrPrompt:choice-label.
             */
            get choice_chosen(): boolean;
            set choice_chosen(val: boolean);
            /**
             * Whether the additional choice is chosen or not.
             *
             * The additional choice would have been setup using #GcrPrompt:choice-label.
             */
            get choiceChosen(): boolean;
            set choiceChosen(val: boolean);
            /**
             * The label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * If %NULL, then no additional choice is displayed.
             *
             * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
             */
            get choice_label(): string;
            set choice_label(val: string);
            /**
             * The label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * If %NULL, then no additional choice is displayed.
             *
             * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
             */
            get choiceLabel(): string;
            set choiceLabel(val: string);
            /**
             * The label for the continue button in the prompt.
             */
            get continue_label(): string;
            set continue_label(val: string);
            /**
             * The label for the continue button in the prompt.
             */
            get continueLabel(): string;
            set continueLabel(val: string);
            /**
             * The detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * The prompt message should contain relevant information.
             */
            get description(): string;
            set description(val: string);
            /**
             * The prompt message for the user.
             *
             * A prompt implementation should always display this message.
             */
            get message(): string;
            set message(val: string);
            /**
             * Whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             */
            get password_new(): boolean;
            set password_new(val: boolean);
            /**
             * Whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             */
            get passwordNew(): boolean;
            set passwordNew(val: boolean);
            /**
             * Indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             */
            get password_strength(): number;
            /**
             * Indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             */
            get passwordStrength(): number;
            /**
             * The title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * #GcrPrompt:message should contain relevant information.
             */
            get title(): string;
            set title(val: string);
            /**
             * A prompt warning displayed on the prompt, or %NULL for no warning.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             */
            get warning(): string;
            set warning(val: string);

            // Inherited methods
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this function to
             * represent the question correctly.
             *
             * This method will block until the a response is returned from the prompter.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the reply from the prompt
             */
            confirm(cancellable?: Gio.Cancellable | null): PromptReply;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this method to
             * represent the question correctly.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an operation to prompt for confirmation.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             * @returns the reply from the prompt
             */
            confirm_finish(result: Gio.AsyncResult): PromptReply;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this function to
             * represent the question correctly.
             *
             * This method will block until the a response is returned from the prompter
             * and will run a main loop similar to a `gtk_dialog_run()`. The application
             * will remain responsive but care must be taken to handle reentrancy issues.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the reply from the prompt
             */
            confirm_run(cancellable?: Gio.Cancellable | null): PromptReply;
            /**
             * Get the string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             * @returns a newly allocated string containing the string          handle of the window.
             */
            get_caller_window(): string;
            /**
             * Get the label for the cancel button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
             * from the prompt.
             * @returns a newly allocated string containing the label
             */
            get_cancel_label(): string;
            /**
             * Get whether the additional choice was chosen or not.
             *
             * The additional choice would have been setup using
             * gcr_prompt_set_choice_label().
             * @returns whether chosen
             */
            get_choice_chosen(): boolean;
            /**
             * Get the label for the additional choice.
             *
             * This will be %NULL if no additional choice is being displayed.
             * @returns a newly allocated string containing the additional          choice or %NULL
             */
            get_choice_label(): string;
            /**
             * Get the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
             * from the prompt.
             * @returns a newly allocated string containing the label
             */
            get_continue_label(): string;
            /**
             * Get the detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * The prompt message should contain relevant information.
             * @returns a newly allocated string containing the detailed          description of the prompt
             */
            get_description(): string;
            /**
             * Gets the prompt message for the user.
             *
             * A prompt implementation should always display this message.
             * @returns a newly allocated string containing the detailed          description of the prompt
             */
            get_message(): string;
            /**
             * Get whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             * @returns whether in new password mode or not
             */
            get_password_new(): boolean;
            /**
             * Get indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             * @returns zero if the password is empty, greater than zero if not
             */
            get_password_strength(): number;
            /**
             * Gets the title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * prompt message should contain relevant information.
             * @returns a newly allocated string containing the prompt          title.
             */
            get_title(): string;
            /**
             * Get a prompt warning displayed on the prompt.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             *
             * If this string is %NULL then no warning is displayed.
             * @returns a newly allocated string containing the prompt          warning, or %NULL if no warning
             */
            get_warning(): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will block until the a response is returned from the prompter.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the password owned by the prompt, or %NULL
             */
            password(cancellable?: Gio.Cancellable | null): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an operation to prompt for a password.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             * @returns the password owned by the prompt, or %NULL
             */
            password_finish(result: Gio.AsyncResult): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will block until the a response is returned from the prompter
             * and will run a main loop similar to a gtk_dialog_run(). The application
             * will remain responsive but care must be taken to handle reentrancy issues.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the password owned by the prompt, or %NULL
             */
            password_run(cancellable?: Gio.Cancellable | null): string;
            /**
             * Reset the contents and properties of the prompt.
             */
            reset(): void;
            /**
             * Set the string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             * @param window_id the window id
             */
            set_caller_window(window_id: string): void;
            /**
             * Set the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
             * from the prompt.
             * @param cancel_label the label
             */
            set_cancel_label(cancel_label: string): void;
            /**
             * Set whether the additional choice is chosen or not.
             *
             * The additional choice should be set up using gcr_prompt_set_choice_label().
             * @param chosen whether chosen
             */
            set_choice_chosen(chosen: boolean): void;
            /**
             * Set the label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * The initial value of the choice can be set with the
             * gcr_prompt_set_choice_label() method.
             *
             * If this is %NULL, then no additional choice is being displayed.
             * @param choice_label the additional choice or %NULL
             */
            set_choice_label(choice_label?: string | null): void;
            /**
             * Set the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
             * from the prompt.
             * @param continue_label the label
             */
            set_continue_label(continue_label: string): void;
            /**
             * Set the detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * Use gcr_prompt_set_message() to set a general message containing relevant
             * information.
             * @param description the detailed description
             */
            set_description(description: string): void;
            /**
             * Sets the prompt message for the user.
             *
             * A prompt implementation should always display this message.
             * @param message the prompt message
             */
            set_message(message: string): void;
            /**
             * Set whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             * @param new_password whether in new password mode or not
             */
            set_password_new(new_password: boolean): void;
            /**
             * Sets the title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * prompt message should contain relevant information.
             * @param title the prompt title
             */
            set_title(title: string): void;
            /**
             * Set a prompt warning displayed on the prompt.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             *
             * If this string is %NULL then no warning is displayed.
             * @param warning the warning or %NULL
             */
            set_warning(warning?: string | null): void;
            /**
             * close a prompt
             */
            vfunc_prompt_close(): void;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this method to
             * represent the question correctly.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_prompt_confirm_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to prompt for confirmation.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             */
            vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_prompt_password_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to prompt for a password.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             */
            vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
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
            new_finish(res: Gio.AsyncResult): SystemPrompt;
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

        module SystemPrompter {
            // Signal callback interfaces

            interface NewPrompt {
                (): Prompt;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                prompt_type: GObject.GType;
                promptType: GObject.GType;
                prompting: boolean;
            }
        }

        /**
         * A prompter used by implementations of system prompts.
         *
         * This is a D-Bus service which is rarely implemented. Use [class`SystemPrompt]`
         * to display system prompts.
         *
         * The system prompter service responds to D-Bus requests to create system
         * prompts and creates #GcrPrompt type objects to display those prompts.
         *
         * Pass the GType of the implementation of [iface`Prompt]` to
         * [ctor`SystemPrompter`.new].
         */
        class SystemPrompter extends GObject.Object {
            static $gtype: GObject.GType<SystemPrompter>;

            // Properties

            /**
             * The #GType for prompts created by this prompter. This must be a
             * #GcrPrompt implementation.
             */
            get prompt_type(): GObject.GType;
            /**
             * The #GType for prompts created by this prompter. This must be a
             * #GcrPrompt implementation.
             */
            get promptType(): GObject.GType;
            /**
             * Whether the prompter is prompting or not.
             */
            get prompting(): boolean;

            // Constructors

            constructor(properties?: Partial<SystemPrompter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](mode: SystemPrompterMode, prompt_type: GObject.GType): SystemPrompter;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'new-prompt', callback: (_source: this) => Prompt): number;
            connect_after(signal: 'new-prompt', callback: (_source: this) => Prompt): number;
            emit(signal: 'new-prompt'): void;

            // Methods

            /**
             * Get the mode for this prompter.
             *
             * Most system prompters only display one prompt at a time and therefore
             * return %GCR_SYSTEM_PROMPTER_SINGLE.
             * @returns the prompter mode
             */
            get_mode(): SystemPrompterMode;
            /**
             * Get the #GType for prompts created by this prompter.
             *
             * The returned #GType will be a #GcrPrompt implementation.
             * @returns the prompt #GType
             */
            get_prompt_type(): GObject.GType;
            /**
             * Get whether prompting or not.
             * @returns whether prompting or not
             */
            get_prompting(): boolean;
            /**
             * Register this system prompter on the DBus `connection`.
             *
             * This makes the prompter available for clients to call. The prompter will
             * remain registered until gcr_system_prompter_unregister() is called, or the
             * prompter is unreferenced.
             * @param connection a DBus connection
             */
            register(connection: Gio.DBusConnection): void;
            /**
             * Unregister this system prompter on the DBus `connection`.
             *
             * The prompter must have previously been registered with gcr_system_prompter_register().
             *
             * If `wait` is set then this function will wait until all prompts have been closed
             * or cancelled. This is usually only used by tests.
             * @param wait whether to wait for closing prompts
             */
            unregister(wait: boolean): void;
        }

        module UnionCollection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Collection.ConstructorProps {}
        }

        /**
         * An implementation of #GcrCollection, which combines the objects in
         * other [iface`Collection]`s. Use [method`UnionCollection`.add] to add and
         * [method`UnionCollection`.remove] to remove them.
         */
        class UnionCollection extends GObject.Object implements Collection {
            static $gtype: GObject.GType<UnionCollection>;

            // Constructors

            constructor(properties?: Partial<UnionCollection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): UnionCollection;

            // Methods

            /**
             * Add objects from this collection to the union
             * @param collection The collection whose objects to add
             */
            add(collection: Collection): void;
            /**
             * Get the collections that have been added to this union.
             * @returns collections          added to the union
             */
            elements(): Collection[];
            /**
             * Check whether the collection is present in the union.
             * @param collection the collection to check
             * @returns whether present or not
             */
            have(collection: Collection): boolean;
            /**
             * Remove an object from the collection.
             * @param collection The collection whose objects to remove
             */
            remove(collection: Collection): void;
            /**
             * Return the number of collections in this union. This does not reflect
             * the number of objects in the combined collection.
             * @returns number of collections inlcuded
             */
            size(): number;
            /**
             * Add objects from this collection to the union. Do not add an additional
             * reference to the collection.
             * @param collection The collection whose objects to add
             */
            take(collection: Collection): void;

            // Inherited methods
            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             * @returns whether the collection contains this object
             */
            contains(object: GObject.Object): boolean;
            /**
             * Emit the #GcrCollection::added signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was added
             */
            emit_added(object: GObject.Object): void;
            /**
             * Emit the #GcrCollection::removed signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was removed
             */
            emit_removed(object: GObject.Object): void;
            /**
             * Get the number of objects in this collection.
             * @returns The number of objects.
             */
            get_length(): number;
            /**
             * Get a list of the objects in this collection.
             * @returns a list of the objects          in this collection, which should be freed with g_list_free()
             */
            get_objects(): GObject.Object[];
            vfunc_added(object: GObject.Object): void;
            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             */
            vfunc_contains(object: GObject.Object): boolean;
            /**
             * Get the number of objects in this collection.
             */
            vfunc_get_length(): number;
            /**
             * Get a list of the objects in this collection.
             */
            vfunc_get_objects(): GObject.Object[];
            vfunc_removed(object: GObject.Object): void;
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

        type CertificateChainClass = typeof CertificateChain;
        abstract class CertificateChainPrivate {
            static $gtype: GObject.GType<CertificateChainPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CertificateIface = typeof Certificate;
        type CertificateRequestClass = typeof CertificateRequest;
        type CollectionIface = typeof Collection;
        class Column {
            static $gtype: GObject.GType<Column>;

            // Fields

            property_name: string;
            property_type: GObject.GType;
            column_type: GObject.GType;
            label: string;
            flags: ColumnFlags;
            transformer: GObject.ValueTransform;
            user_data: any;

            // Constructors

            _init(...args: any[]): void;
        }

        type ComparableIface = typeof Comparable;
        type FilterCollectionClass = typeof FilterCollection;
        abstract class FilterCollectionPrivate {
            static $gtype: GObject.GType<FilterCollectionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ImportInteractionIface = typeof ImportInteraction;
        type ImporterIface = typeof Importer;
        /**
         * A parsed item parsed by a #GcrParser.
         */
        abstract class Parsed {
            static $gtype: GObject.GType<Parsed>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Unreferences a parsed item which was referenced with gcr_parsed_ref()
             * @param parsed a parsed item
             */
            static unref(parsed?: any | null): void;

            // Methods

            /**
             * Get the attributes which make up the parsed item.
             * @returns the attributes for the item; these          are owned by the parsed item and should not be freed
             */
            get_attributes(): Gck.Attributes | null;
            /**
             * Get the raw data block for the parsed item.
             * @returns the raw data of the parsed item, or %NULL
             */
            get_bytes(): GLib.Bytes;
            /**
             * Get the raw data block for the parsed item.
             * @returns the raw data of          the parsed item, or %NULL
             */
            get_data(): Uint8Array | null;
            /**
             * Get the descirption for a parsed item.
             * @returns the description
             */
            get_description(): string | null;
            /**
             * Get the filename of the parsed item.
             * @returns the filename of          the parsed item, or %NULL
             */
            get_filename(): string;
            /**
             * Get the format of the parsed item.
             * @returns the data format of the item
             */
            get_format(): DataFormat;
            /**
             * Get the label for the parsed item.
             * @returns the label for the item
             */
            get_label(): string | null;
            /**
             * Add a reference to a parsed item. An item may not be shared across threads
             * until it has been referenced at least once.
             * @returns the parsed item
             */
            ref(): Parsed;
        }

        type ParserClass = typeof Parser;
        abstract class ParserPrivate {
            static $gtype: GObject.GType<ParserPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type Pkcs11CertificateClass = typeof Pkcs11Certificate;
        abstract class Pkcs11CertificatePrivate {
            static $gtype: GObject.GType<Pkcs11CertificatePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PromptIface = typeof Prompt;
        type SecretExchangeClass = typeof SecretExchange;
        abstract class SecretExchangePrivate {
            static $gtype: GObject.GType<SecretExchangePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SimpleCertificateClass = typeof SimpleCertificate;
        abstract class SimpleCertificatePrivate {
            static $gtype: GObject.GType<SimpleCertificatePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SimpleCollectionClass = typeof SimpleCollection;
        abstract class SimpleCollectionPrivate {
            static $gtype: GObject.GType<SimpleCollectionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SshAskpassClass = typeof SshAskpass;
        type SystemPromptClass = typeof SystemPrompt;
        abstract class SystemPromptPrivate {
            static $gtype: GObject.GType<SystemPromptPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SystemPrompterClass = typeof SystemPrompter;
        abstract class SystemPrompterPrivate {
            static $gtype: GObject.GType<SystemPrompterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UnionCollectionClass = typeof UnionCollection;
        abstract class UnionCollectionPrivate {
            static $gtype: GObject.GType<UnionCollectionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module Certificate {
            // Constructor properties interface

            interface ConstructorProps extends Comparable.ConstructorProps {
                description: string;
                expiry: GLib.Date;
                icon: Gio.Icon;
                issuer: string;
                label: string;
                markup: string;
                subject: string;
            }
        }

        export interface CertificateNamespace {
            $gtype: GObject.GType<Certificate>;
            prototype: Certificate;

            /**
             * Compare one certificate against another. If the certificates are equal
             * then zero is returned. If one certificate is %NULL or not a certificate,
             * then a non-zero value is returned.
             *
             * The return value is useful in a stable sort, but has no user logical
             * meaning.
             * @param first the certificate to compare
             * @param other the certificate to compare against
             */
            compare(first?: Comparable | null, other?: Comparable | null): number;
        }
        interface Certificate extends Comparable {
            // Properties

            /**
             * A readable description for this certificate
             */
            get description(): string;
            /**
             * The expiry date of the certificate
             */
            get expiry(): GLib.Date;
            /**
             * An icon representing the certificate
             */
            get icon(): Gio.Icon;
            /**
             * Common name part of the certificate issuer
             */
            get issuer(): string;
            /**
             * A readable label for this certificate.
             */
            get label(): string;
            /**
             * GLib markup to describe the certificate
             */
            get markup(): string;
            /**
             * Common name part of the certificate subject
             */
            get subject(): string;

            // Methods

            /**
             * Get the basic constraints for the certificate if present. If %FALSE is
             * returned then no basic constraints are present and the `is_ca` and
             * `path_len` arguments are not changed.
             * @returns whether basic constraints are present or not
             */
            get_basic_constraints(): [boolean, boolean, number];
            /**
             * Gets the raw DER data for an X.509 certificate.
             * @returns raw DER data of the X.509 certificate
             */
            get_der_data(): Uint8Array;
            /**
             * Get the expiry date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated expiry date of this certificate.
             */
            get_expiry_date(): GLib.Date;
            /**
             * Calculate the fingerprint for this certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns the raw binary fingerprint
             */
            get_fingerprint(type: GLib.ChecksumType): Uint8Array;
            /**
             * Calculate the fingerprint for this certificate, and return it
             * as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @param type the type of algorithm for the fingerprint.
             * @returns an allocated hex string which contains the fingerprint.
             */
            get_fingerprint_hex(type: GLib.ChecksumType): string;
            /**
             * Get the issued date of this certificate.
             *
             * The #GDate returned should be freed by the caller using
             * g_date_free() when no longer required.
             * @returns An allocated issued date of this certificate.
             */
            get_issued_date(): GLib.Date;
            /**
             * Get the common name of the issuer of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer CN, or %NULL if no issuer CN present.
             */
            get_issuer_cn(): string;
            /**
             * Get the full issuer DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated issuer DN of the certificate.
             */
            get_issuer_dn(): string;
            /**
             * Get a name to represent the issuer of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated issuer name, or %NULL if no issuer name
             */
            get_issuer_name(): string;
            /**
             * Get a part of the DN of the issuer of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the issuer DN, or %NULL if no          such part is present
             */
            get_issuer_part(part: string): string | null;
            /**
             * Get the raw DER data for the issuer DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw issuer
             */
            get_issuer_raw(): Uint8Array;
            /**
             * Get the key size in bits of the public key represented
             * by this certificate.
             * @returns The key size of the certificate.
             */
            get_key_size(): number;
            /**
             * Calculate a GMarkup string for displaying this certificate.
             * @returns the markup string
             */
            get_markup_text(): string;
            /**
             * Get the raw binary serial number of the certificate.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns the raw binary serial number.
             */
            get_serial_number(): Uint8Array;
            /**
             * Get the serial number of the certificate as a hex string.
             *
             * The caller should free the returned data using g_free() when
             * it is no longer required.
             * @returns an allocated string containing the serial number as hex.
             */
            get_serial_number_hex(): string;
            /**
             * Get the common name of the subject of this certificate.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject CN, or %NULL if no subject CN present.
             */
            get_subject_cn(): string;
            /**
             * Get the full subject DN of the certificate as a (mostly)
             * readable string.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @returns The allocated subject DN of the certificate.
             */
            get_subject_dn(): string;
            /**
             * Get a name to represent the subject of this certificate.
             *
             * This will try to lookup the common name, orianizational unit,
             * organization in that order.
             * @returns the allocated subject name, or %NULL if no subject name
             */
            get_subject_name(): string;
            /**
             * Get a part of the DN of the subject of this certificate.
             *
             * Examples of a `part` might be the 'OU' (organizational unit)
             * or the 'CN' (common name). Only the value of that part
             * of the DN is returned.
             *
             * The string returned should be freed by the caller when no longer
             * required.
             * @param part a DN type string or OID.
             * @returns the allocated part of the subject DN, or %NULL if no          such part is present.
             */
            get_subject_part(part: string): string | null;
            /**
             * Get the raw DER data for the subject DN of the certificate.
             *
             * The data should be freed by using g_free() when no longer required.
             * @returns allocated memory containing          the raw subject
             */
            get_subject_raw(): Uint8Array;
            /**
             * Check if `issuer` could be the issuer of this certificate. This is done by
             * comparing the relevant subject and issuer fields. No signature check is
             * done. Proper verification of certificates must be done via a crypto
             * library.
             * @param issuer a possible issuer #GcrCertificate
             * @returns whether @issuer could be the issuer of the certificate.
             */
            is_issuer(issuer: Certificate): boolean;
            /**
             * Implementers of the #GcrCertificate mixin should call this function to notify
             * when the certificate has changed to emit notifications on the various
             * properties.
             */
            mixin_emit_notify(): void;

            // Virtual methods

            /**
             * Gets the raw DER data for an X.509 certificate.
             */
            vfunc_get_der_data(): Uint8Array;
        }

        export const Certificate: CertificateNamespace;

        module Collection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface CollectionNamespace {
            $gtype: GObject.GType<Collection>;
            prototype: Collection;
        }
        interface Collection extends GObject.Object {
            // Methods

            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             * @returns whether the collection contains this object
             */
            contains(object: GObject.Object): boolean;
            /**
             * Emit the #GcrCollection::added signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was added
             */
            emit_added(object: GObject.Object): void;
            /**
             * Emit the #GcrCollection::removed signal for the given object. This function
             * is used by implementors of this interface.
             * @param object The object that was removed
             */
            emit_removed(object: GObject.Object): void;
            /**
             * Get the number of objects in this collection.
             * @returns The number of objects.
             */
            get_length(): number;
            /**
             * Get a list of the objects in this collection.
             * @returns a list of the objects          in this collection, which should be freed with g_list_free()
             */
            get_objects(): GObject.Object[];

            // Virtual methods

            vfunc_added(object: GObject.Object): void;
            /**
             * Check whether the collection contains an object or not.
             * @param object object to check
             */
            vfunc_contains(object: GObject.Object): boolean;
            /**
             * Get the number of objects in this collection.
             */
            vfunc_get_length(): number;
            /**
             * Get a list of the objects in this collection.
             */
            vfunc_get_objects(): GObject.Object[];
            vfunc_removed(object: GObject.Object): void;
        }

        export const Collection: CollectionNamespace;

        module Comparable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface ComparableNamespace {
            $gtype: GObject.GType<Comparable>;
            prototype: Comparable;
        }
        interface Comparable extends GObject.Object {
            // Methods

            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             * @returns Zero if the two objects represent the same thing, non-zero if not.
             */
            compare(other?: Comparable | null): number;

            // Virtual methods

            /**
             * Compare whether two objects represent the same thing. The return value can
             * also be used to sort the objects.
             * @param other Another comparable object
             */
            vfunc_compare(other?: Comparable | null): number;
        }

        export const Comparable: ComparableNamespace;

        module ImportInteraction {
            // Constructor properties interface

            interface ConstructorProps extends Gio.TlsInteraction.ConstructorProps {}
        }

        export interface ImportInteractionNamespace {
            $gtype: GObject.GType<ImportInteraction>;
            prototype: ImportInteraction;
        }
        interface ImportInteraction extends Gio.TlsInteraction {
            // Methods

            /**
             * Supplement attributes before import. This means prompting the user for
             * things like labels and the like. The needed attributes will have been passed
             * to gcr_import_interaction_supplement_prep().
             *
             * This method prompts the user and fills in the attributes. If the user or
             * cancellable cancels the operation the error should be set with %G_IO_ERROR_CANCELLED.
             * @param builder supplemented attributes
             * @param cancellable optional cancellable object
             * @returns %G_TLS_INTERACTION_HANDLED if successful or %G_TLS_INTERACTION_FAILED
             */
            supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult;
            /**
             * Asynchronously supplement attributes before import. This means prompting the
             * user for things like labels and the like. The needed attributes will have
             * been passed to gcr_import_interaction_supplement_prep().
             *
             * This method prompts the user and fills in the attributes.
             * @param builder supplemented attributes
             * @param cancellable optional cancellable object
             * @param callback called when the operation completes
             */
            supplement_async(
                builder: Gck.Builder,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete operation to asynchronously supplement attributes before import.
             *
             * If the user or cancellable cancels the operation the error should be set
             * with %G_IO_ERROR_CANCELLED.
             * @param result the asynchronous result
             * @returns %G_TLS_INTERACTION_HANDLED if successful or %G_TLS_INTERACTION_FAILED
             */
            supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
            /**
             * Prepare for supplementing the given attributes before import. This means
             * prompting the user for things like labels and the like. The attributes
             * will contain attributes for values that the importer needs, either empty
             * or prefilled with suggested values.
             *
             * This method does not prompt the user, but rather just prepares the
             * interaction that these are the attributes that are needed.
             * @param builder attributes to supplement
             */
            supplement_prep(builder: Gck.Builder): void;

            // Virtual methods

            /**
             * Supplement attributes before import. This means prompting the user for
             * things like labels and the like. The needed attributes will have been passed
             * to gcr_import_interaction_supplement_prep().
             *
             * This method prompts the user and fills in the attributes. If the user or
             * cancellable cancels the operation the error should be set with %G_IO_ERROR_CANCELLED.
             * @param builder supplemented attributes
             * @param cancellable optional cancellable object
             */
            vfunc_supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult;
            /**
             * Asynchronously supplement attributes before import. This means prompting the
             * user for things like labels and the like. The needed attributes will have
             * been passed to gcr_import_interaction_supplement_prep().
             *
             * This method prompts the user and fills in the attributes.
             * @param builder supplemented attributes
             * @param cancellable optional cancellable object
             * @param callback called when the operation completes
             */
            vfunc_supplement_async(
                builder: Gck.Builder,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete operation to asynchronously supplement attributes before import.
             *
             * If the user or cancellable cancels the operation the error should be set
             * with %G_IO_ERROR_CANCELLED.
             * @param result the asynchronous result
             */
            vfunc_supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
            /**
             * Prepare for supplementing the given attributes before import. This means
             * prompting the user for things like labels and the like. The attributes
             * will contain attributes for values that the importer needs, either empty
             * or prefilled with suggested values.
             *
             * This method does not prompt the user, but rather just prepares the
             * interaction that these are the attributes that are needed.
             * @param builder attributes to supplement
             */
            vfunc_supplement_prep(builder: Gck.Builder): void;
        }

        export const ImportInteraction: ImportInteractionNamespace;

        module Importer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                icon: Gio.Icon;
                interaction: Gio.TlsInteraction;
                label: string;
                uri: string;
            }
        }

        export interface ImporterNamespace {
            $gtype: GObject.GType<Importer>;
            prototype: Importer;

            /**
             * Create a set of importers which can import this parsed item.
             * The parsed item is represented by the state of the GcrParser at the
             * time of calling this method.
             * @param parsed a parser with a parsed item to import
             */
            create_for_parsed(parsed: Parsed): Importer[];
            /**
             * Queues an additional item to be imported in all compattible importers
             * in the set. The parsed item is represented by the state of the #GcrParser
             * at the time of calling this method.
             *
             * If the parsed item is incompatible with an importer, then that the item
             * will not be queued on that importer.
             * @param importers a set of importers
             * @param parsed a parsed item
             */
            queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[];
            /**
             * Register an importer to handle parsed items that match the given attributes.
             *
             * If `attrs` are a floating reference, then it is consumed.
             * @param importer_type the GType of the importer being registered
             * @param attrs the attributes that this importer is compatible with
             */
            register(importer_type: GObject.GType, attrs: Gck.Attributes): void;
            /**
             * Register built-in PKCS#11 and GnuPG importers.
             */
            register_well_known(): void;
        }
        interface Importer extends GObject.Object {
            // Properties

            /**
             * The icon for the importer.
             */
            get icon(): Gio.Icon;
            /**
             * The interaction for the importer.
             */
            get interaction(): Gio.TlsInteraction;
            set interaction(val: Gio.TlsInteraction);
            /**
             * The label for the importer.
             */
            get label(): string;
            /**
             * The URI of the location imported to.
             */
            get uri(): string;

            // Methods

            /**
             * Get the interaction used to prompt the user when needed by this
             * importer.
             * @returns the interaction or %NULL
             */
            get_interaction(): Gio.TlsInteraction | null;
            /**
             * Import the queued items in the importer. This call will block
             * until the operation completes.
             * @param cancellable a #GCancellable, or %NULL
             * @returns whether the items were imported successfully or not
             */
            ['import'](cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Import the queued items in the importer. This function returns immediately
             * and completes asynchronously.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback called when the operation completes
             */
            import_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an asynchronous operation to import queued items.
             * @param result an asynchronous result
             * @returns whether the import succeeded or failed
             */
            import_finish(result: Gio.AsyncResult): boolean;
            /**
             * Queues an additional item to be imported. The parsed item is represented
             * by the state of the [class`Parser]` at the time of calling this method.
             *
             * If the parsed item is incompatible with the importer, then this will
             * fail and the item will not be queued.
             * @param parsed a parsed item to import
             * @returns whether the item was queued or not
             */
            queue_for_parsed(parsed: Parsed): boolean;
            /**
             * Set the interaction used to prompt the user when needed by this
             * importer.
             * @param interaction the interaction used by the importer
             */
            set_interaction(interaction: Gio.TlsInteraction): void;

            // Virtual methods

            /**
             * Import the queued items in the importer. This function returns immediately
             * and completes asynchronously.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback called when the operation completes
             */
            vfunc_import_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an asynchronous operation to import queued items.
             * @param result an asynchronous result
             */
            vfunc_import_finish(result: Gio.AsyncResult): boolean;
            /**
             * optional implementation of [method`Importer`.import]
             * @param cancellable
             */
            vfunc_import_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Queues an additional item to be imported. The parsed item is represented
             * by the state of the [class`Parser]` at the time of calling this method.
             *
             * If the parsed item is incompatible with the importer, then this will
             * fail and the item will not be queued.
             * @param parsed a parsed item to import
             */
            vfunc_queue_for_parsed(parsed: Parsed): boolean;
        }

        export const Importer: ImporterNamespace;

        module Prompt {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                caller_window: string;
                callerWindow: string;
                cancel_label: string;
                cancelLabel: string;
                choice_chosen: boolean;
                choiceChosen: boolean;
                choice_label: string;
                choiceLabel: string;
                continue_label: string;
                continueLabel: string;
                description: string;
                message: string;
                password_new: boolean;
                passwordNew: boolean;
                password_strength: number;
                passwordStrength: number;
                title: string;
                warning: string;
            }
        }

        export interface PromptNamespace {
            $gtype: GObject.GType<Prompt>;
            prototype: Prompt;
        }
        interface Prompt extends GObject.Object {
            // Properties

            /**
             * The string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             *
             * In X11, this will be a stringified version of the XWindow handle; in
             * Wayland this is the result of an export using the XDG foreign
             * protocol.
             */
            get caller_window(): string;
            set caller_window(val: string);
            /**
             * The string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             *
             * In X11, this will be a stringified version of the XWindow handle; in
             * Wayland this is the result of an export using the XDG foreign
             * protocol.
             */
            get callerWindow(): string;
            set callerWindow(val: string);
            /**
             * The label for the cancel button in the prompt.
             */
            get cancel_label(): string;
            set cancel_label(val: string);
            /**
             * The label for the cancel button in the prompt.
             */
            get cancelLabel(): string;
            set cancelLabel(val: string);
            /**
             * Whether the additional choice is chosen or not.
             *
             * The additional choice would have been setup using #GcrPrompt:choice-label.
             */
            get choice_chosen(): boolean;
            set choice_chosen(val: boolean);
            /**
             * Whether the additional choice is chosen or not.
             *
             * The additional choice would have been setup using #GcrPrompt:choice-label.
             */
            get choiceChosen(): boolean;
            set choiceChosen(val: boolean);
            /**
             * The label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * If %NULL, then no additional choice is displayed.
             *
             * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
             */
            get choice_label(): string;
            set choice_label(val: string);
            /**
             * The label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * If %NULL, then no additional choice is displayed.
             *
             * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
             */
            get choiceLabel(): string;
            set choiceLabel(val: string);
            /**
             * The label for the continue button in the prompt.
             */
            get continue_label(): string;
            set continue_label(val: string);
            /**
             * The label for the continue button in the prompt.
             */
            get continueLabel(): string;
            set continueLabel(val: string);
            /**
             * The detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * The prompt message should contain relevant information.
             */
            get description(): string;
            set description(val: string);
            /**
             * The prompt message for the user.
             *
             * A prompt implementation should always display this message.
             */
            get message(): string;
            set message(val: string);
            /**
             * Whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             */
            get password_new(): boolean;
            set password_new(val: boolean);
            /**
             * Whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             */
            get passwordNew(): boolean;
            set passwordNew(val: boolean);
            /**
             * Indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             */
            get password_strength(): number;
            /**
             * Indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             */
            get passwordStrength(): number;
            /**
             * The title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * #GcrPrompt:message should contain relevant information.
             */
            get title(): string;
            set title(val: string);
            /**
             * A prompt warning displayed on the prompt, or %NULL for no warning.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             */
            get warning(): string;
            set warning(val: string);

            // Methods

            /**
             * Closes the prompt so that in can no longer be used to prompt. The various
             * prompt methods will return results as if the user dismissed the prompt.
             *
             * The prompt may also be closed by the implementor of the prompt object.
             *
             * This emits the [signal`Prompt:`:prompt-close] signal on the prompt object.
             */
            close(): void;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this function to
             * represent the question correctly.
             *
             * This method will block until the a response is returned from the prompter.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the reply from the prompt
             */
            confirm(cancellable?: Gio.Cancellable | null): PromptReply;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this method to
             * represent the question correctly.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an operation to prompt for confirmation.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             * @returns the reply from the prompt
             */
            confirm_finish(result: Gio.AsyncResult): PromptReply;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this function to
             * represent the question correctly.
             *
             * This method will block until the a response is returned from the prompter
             * and will run a main loop similar to a `gtk_dialog_run()`. The application
             * will remain responsive but care must be taken to handle reentrancy issues.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the reply from the prompt
             */
            confirm_run(cancellable?: Gio.Cancellable | null): PromptReply;
            /**
             * Get the string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             * @returns a newly allocated string containing the string          handle of the window.
             */
            get_caller_window(): string;
            /**
             * Get the label for the cancel button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
             * from the prompt.
             * @returns a newly allocated string containing the label
             */
            get_cancel_label(): string;
            /**
             * Get whether the additional choice was chosen or not.
             *
             * The additional choice would have been setup using
             * gcr_prompt_set_choice_label().
             * @returns whether chosen
             */
            get_choice_chosen(): boolean;
            /**
             * Get the label for the additional choice.
             *
             * This will be %NULL if no additional choice is being displayed.
             * @returns a newly allocated string containing the additional          choice or %NULL
             */
            get_choice_label(): string;
            /**
             * Get the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
             * from the prompt.
             * @returns a newly allocated string containing the label
             */
            get_continue_label(): string;
            /**
             * Get the detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * The prompt message should contain relevant information.
             * @returns a newly allocated string containing the detailed          description of the prompt
             */
            get_description(): string;
            /**
             * Gets the prompt message for the user.
             *
             * A prompt implementation should always display this message.
             * @returns a newly allocated string containing the detailed          description of the prompt
             */
            get_message(): string;
            /**
             * Get whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             * @returns whether in new password mode or not
             */
            get_password_new(): boolean;
            /**
             * Get indication of the password strength.
             *
             * Prompts will return a zero value if the password is empty, and a value
             * greater than zero if the password has any characters.
             *
             * This is only valid after a successful prompt for a password.
             * @returns zero if the password is empty, greater than zero if not
             */
            get_password_strength(): number;
            /**
             * Gets the title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * prompt message should contain relevant information.
             * @returns a newly allocated string containing the prompt          title.
             */
            get_title(): string;
            /**
             * Get a prompt warning displayed on the prompt.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             *
             * If this string is %NULL then no warning is displayed.
             * @returns a newly allocated string containing the prompt          warning, or %NULL if no warning
             */
            get_warning(): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will block until the a response is returned from the prompter.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the password owned by the prompt, or %NULL
             */
            password(cancellable?: Gio.Cancellable | null): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Complete an operation to prompt for a password.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             * @returns the password owned by the prompt, or %NULL
             */
            password_finish(result: Gio.AsyncResult): string;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will block until the a response is returned from the prompter
             * and will run a main loop similar to a gtk_dialog_run(). The application
             * will remain responsive but care must be taken to handle reentrancy issues.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param cancellable optional cancellation object
             * @returns the password owned by the prompt, or %NULL
             */
            password_run(cancellable?: Gio.Cancellable | null): string;
            /**
             * Reset the contents and properties of the prompt.
             */
            reset(): void;
            /**
             * Set the string handle of the caller's window.
             *
             * The caller window indicates to the prompt which window is prompting the
             * user. The prompt may choose to ignore this information or use it in whatever
             * way it sees fit.
             * @param window_id the window id
             */
            set_caller_window(window_id: string): void;
            /**
             * Set the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
             * from the prompt.
             * @param cancel_label the label
             */
            set_cancel_label(cancel_label: string): void;
            /**
             * Set whether the additional choice is chosen or not.
             *
             * The additional choice should be set up using gcr_prompt_set_choice_label().
             * @param chosen whether chosen
             */
            set_choice_chosen(chosen: boolean): void;
            /**
             * Set the label for the additional choice.
             *
             * If this is a non-%NULL value then an additional boolean choice will be
             * displayed by the prompt allowing the user to select or deselect it.
             *
             * The initial value of the choice can be set with the
             * gcr_prompt_set_choice_label() method.
             *
             * If this is %NULL, then no additional choice is being displayed.
             * @param choice_label the additional choice or %NULL
             */
            set_choice_label(choice_label?: string | null): void;
            /**
             * Set the label for the continue button.
             *
             * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
             * from the prompt.
             * @param continue_label the label
             */
            set_continue_label(continue_label: string): void;
            /**
             * Set the detailed description of the prompt.
             *
             * A prompt implementation may choose not to display this detailed description.
             * Use gcr_prompt_set_message() to set a general message containing relevant
             * information.
             * @param description the detailed description
             */
            set_description(description: string): void;
            /**
             * Sets the prompt message for the user.
             *
             * A prompt implementation should always display this message.
             * @param message the prompt message
             */
            set_message(message: string): void;
            /**
             * Set whether the prompt will prompt for a new password.
             *
             * This will cause the prompt implementation to ask the user to confirm the
             * password and/or display other relevant user interface for creating a new
             * password.
             * @param new_password whether in new password mode or not
             */
            set_password_new(new_password: boolean): void;
            /**
             * Sets the title of the prompt.
             *
             * A prompt implementation may choose not to display the prompt title. The
             * prompt message should contain relevant information.
             * @param title the prompt title
             */
            set_title(title: string): void;
            /**
             * Set a prompt warning displayed on the prompt.
             *
             * This is a warning like "The password is incorrect." usually displayed to the
             * user about a previous 'unsuccessful' prompt.
             *
             * If this string is %NULL then no warning is displayed.
             * @param warning the warning or %NULL
             */
            set_warning(warning?: string | null): void;

            // Virtual methods

            /**
             * close a prompt
             */
            vfunc_prompt_close(): void;
            /**
             * Prompts for confirmation asking a cancel/continue style question.
             * Set the various properties on the prompt before calling this method to
             * represent the question correctly.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_prompt_confirm_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to prompt for confirmation.
             *
             * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
             * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
             * an error occurs. Check the `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             */
            vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
            /**
             * Prompts for password. Set the various properties on the prompt before calling
             * this method to explain which password should be entered.
             *
             * This method will return immediately and complete asynchronously.
             * @param cancellable optional cancellation object
             * @param callback called when the operation completes
             */
            vfunc_prompt_password_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Complete an operation to prompt for a password.
             *
             * A password will be returned if the user enters a password successfully.
             * The returned password is valid until the next time a method is called
             * to display another prompt.
             *
             * %NULL will be returned if the user cancels or if an error occurs. Check the
             * `error` argument to tell the difference.
             * @param result asynchronous result passed to callback
             */
            vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
        }

        export const Prompt: PromptNamespace;

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

    export default Gcr;
}

declare module 'gi://Gcr' {
    import Gcr3 from 'gi://Gcr?version=3';
    export default Gcr3;
}
// END
