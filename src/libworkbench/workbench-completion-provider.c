// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#include <gio/gio.h>
#include <gtksourceview/gtksource.h>

#include "libworkbench-enums.h"
#include "workbench-completion-provider.h"
#include "workbench-completion-request.h"


/**
 * WorkbenchCompletionProvider:
 *
 * A base class for completion providers in Workbench.
 */

static void gtk_source_completion_provider_iface_init (GtkSourceCompletionProviderInterface *iface);

G_DEFINE_TYPE_WITH_CODE (WorkbenchCompletionProvider, workbench_completion_provider, G_TYPE_OBJECT,
                         G_IMPLEMENT_INTERFACE (GTK_SOURCE_TYPE_COMPLETION_PROVIDER, gtk_source_completion_provider_iface_init));

enum {
  COMPLETION_REQUEST,
  N_SIGNALS
};

static guint signals[N_SIGNALS] = { 0, };

/**
 * WorkbenchCompletionProviderClass:
 * @completion_request: the class closure for #WorkbenchCompletionProvider::completion-request
 *
 * The virtual function table for `WorkbenchCompletionProvider`.
 */
static void
workbench_completion_provider_real_completion_request (WorkbenchCompletionProvider *self,
                                                       WorkbenchCompletionRequest  *request)
{
  g_assert (WORKBENCH_IS_COMPLETION_PROVIDER (self));
  g_assert (WORKBENCH_IS_COMPLETION_REQUEST (request));

  if (!g_signal_has_handler_pending (self, signals [COMPLETION_REQUEST], 0, TRUE))
    {
      static gboolean warned = FALSE;

      if (warned)
        {
          g_warning ("Your provider does not implement 'completion_request()' "
                     "and has no handlers connected to 'completion-provider'.");
          warned = TRUE;
        }

      workbench_completion_request_state_changed (request,
                                                  WORKBENCH_REQUEST_STATE_CANCELLED);
    }
}

/*
 * GtkSourceCompletionProvider
 */
static GListModel *
workbench_completion_provider_populate (GtkSourceCompletionProvider  *provider,
                                        GtkSourceCompletionContext   *context,
                                        GError                      **error)
{
  WorkbenchCompletionProvider *self = WORKBENCH_COMPLETION_PROVIDER (provider);
  g_autoptr (GListModel) request = NULL;

  g_assert (WORKBENCH_IS_COMPLETION_PROVIDER (self));

  request = g_object_new (WORKBENCH_TYPE_COMPLETION_REQUEST,
                          "provider", provider,
                          "context",  context,
                          NULL);
  g_signal_emit (G_OBJECT (self), signals [COMPLETION_REQUEST], 0, request);

  return g_steal_pointer (&request);
}

static void
on_request_state (WorkbenchCompletionRequest *request,
                  GParamSpec                 *pspec,
                  GTask                      *task)
{
  if (g_task_return_error_if_cancelled (task))
    return;

  switch (workbench_completion_request_get_state (request))
    {
    case WORKBENCH_REQUEST_STATE_UNKNOWN:
    case WORKBENCH_REQUEST_STATE_CANCELLED:
      g_task_return_new_error (task,
                               G_IO_ERROR,
                               G_IO_ERROR_CANCELLED,
                               "Operation cancelled");
      break;

    case WORKBENCH_REQUEST_STATE_COMPLETE:
      g_task_return_pointer (task, g_object_ref (request), g_object_unref);
      break;
    }
}

static void
workbench_completion_provider_populate_async (GtkSourceCompletionProvider *provider,
                                              GtkSourceCompletionContext  *context,
                                              GCancellable                *cancellable,
                                              GAsyncReadyCallback          callback,
                                              gpointer                     user_data)
{
  WorkbenchCompletionProvider *self = WORKBENCH_COMPLETION_PROVIDER (provider);
  g_autoptr (WorkbenchCompletionRequest) request = NULL;
  g_autoptr (GTask) task = NULL;

  g_assert (WORKBENCH_IS_COMPLETION_PROVIDER (self));

  request = g_object_new (WORKBENCH_TYPE_COMPLETION_REQUEST,
                          "provider",    provider,
                          "context",     context,
                          "cancellable", cancellable,
                          NULL);

  /* The request object holds the reference to the task, since it is guaranteed
   * to emit `notify::complete` before finalization.
   */
  task = g_task_new (self, cancellable, callback, user_data);
  g_task_set_source_tag (task, workbench_completion_provider_populate_async);
  g_object_set_data_full (G_OBJECT (request),
                          "workbench-request-task",
                          g_object_ref (task),
                          g_object_unref);
  g_signal_connect_object (request,
                           "notify::state",
                           G_CALLBACK (on_request_state),
                           task, 0);

  g_signal_emit (G_OBJECT (self), signals [COMPLETION_REQUEST], 0, request);
}

static void
gtk_source_completion_provider_iface_init (GtkSourceCompletionProviderInterface *iface)
{
  iface->populate = workbench_completion_provider_populate;
  iface->populate_async = workbench_completion_provider_populate_async;
}


/*
 * GObject
 */
static void
workbench_completion_provider_class_init (WorkbenchCompletionProviderClass *klass)
{
  klass->completion_request = workbench_completion_provider_real_completion_request;

  /**
   * WorkbenchCompletionProvider::completion-request:
   * @provider: a `WorkbenchCompletionProvider`
   * @request: a `WorkbenchCompletionRequest`
   *
   * Emitted when a request is made for completion proposals.
   *
   * This is emitted in place of [vfunc@GtkSource.CompletionProvider.populate]
   * (both synchronous and asynchronous), with a request object that allows
   * handlers to negotiate the completion of asynchronous requests manually.
   */
  signals [COMPLETION_REQUEST] =
    g_signal_new ("completion-request",
                  G_TYPE_FROM_CLASS (klass),
                  G_SIGNAL_RUN_LAST,
                  G_STRUCT_OFFSET (WorkbenchCompletionProviderClass, completion_request),
                  NULL, NULL,
                  g_cclosure_marshal_VOID__OBJECT,
                  G_TYPE_NONE,
                  1,
                  WORKBENCH_TYPE_COMPLETION_REQUEST);
  g_signal_set_va_marshaller (signals [COMPLETION_REQUEST],
                              G_TYPE_FROM_CLASS (klass),
                              g_cclosure_marshal_VOID__OBJECTv);
}

static void
workbench_completion_provider_init (WorkbenchCompletionProvider *adapter)
{
}
