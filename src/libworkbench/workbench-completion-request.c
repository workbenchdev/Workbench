// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#include <gio/gio.h>
#include <gtksourceview/gtksource.h>

#include "libworkbench-enums.h"
#include "workbench-completion-request.h"


/**
 * WorkbenchCompletionRequest:
 *
 * A helper object for [iface@GtkSource.CompletionProvider].
 *
 * A `WorkbenchCompletionRequest` instance represents an asynchronous request
 * for completion suggestions. Specifically, it is an object that can be used
 * to implement [vfunc@GtkSource.CompletionProvider.populate_async] with more
 * flexibility for introspected languages.
 *
 * Requests are created to populate completion proposals for emissions of
 * [signal@Workbench.CompletionProvider::completion-request]. Handlers should
 * call [method@Workbench.CompletionRequest.add] and
 * [method@Workbench.CompletionRequest.splice] to compose the response, then
 * set [property@Workbench.CompletionRequest:complete] to %TRUE.
 */

struct _WorkbenchCompletionRequest
{
  GObject                      parent_instance;

  GPtrArray                   *items;

  GCancellable                *cancellable;
  GtkSourceCompletionContext  *context;
  GtkSourceCompletionProvider *provider;
  WorkbenchRequestState        state;
};

static void   g_list_model_iface_init (GListModelInterface *iface);

G_DEFINE_TYPE_WITH_CODE (WorkbenchCompletionRequest, workbench_completion_request, G_TYPE_OBJECT,
                         G_IMPLEMENT_INTERFACE (G_TYPE_LIST_MODEL, g_list_model_iface_init))

enum {
  PROP_0,
  PROP_CANCELLABLE,
  PROP_CONTEXT,
  PROP_ITEM_TYPE,
  PROP_N_ITEMS,
  PROP_PROVIDER,
  PROP_STATE,
  N_PROPERTIES,
};

static GParamSpec *properties[N_PROPERTIES] = { 0, };


/*
 * GListModel
 */
static gpointer
workbench_completion_request_get_item (GListModel   *model,
                                       unsigned int  position)
{
  WorkbenchCompletionRequest *self = WORKBENCH_COMPLETION_REQUEST (model);

  g_assert (WORKBENCH_IS_COMPLETION_REQUEST (self));

  if G_UNLIKELY (position >= self->items->len)
    return NULL;

  return g_object_ref (g_ptr_array_index (self->items, position));
}

static GType
workbench_completion_request_get_item_type (GListModel *model)
{
  return GTK_SOURCE_TYPE_COMPLETION_PROPOSAL;
}

static unsigned int
workbench_completion_request_get_n_items (GListModel *model)
{
  WorkbenchCompletionRequest *self = WORKBENCH_COMPLETION_REQUEST (model);

  g_assert (WORKBENCH_IS_COMPLETION_REQUEST (self));

  return self->items->len;
}

static void
g_list_model_iface_init (GListModelInterface *iface)
{
  iface->get_item = workbench_completion_request_get_item;
  iface->get_item_type = workbench_completion_request_get_item_type;
  iface->get_n_items = workbench_completion_request_get_n_items;
}

/*
 * GObject
 */
static void
workbench_completion_request_dispose (GObject *object)
{
  WorkbenchCompletionRequest *self = WORKBENCH_COMPLETION_REQUEST (object);

  /* Ensure the request is finished */
  workbench_completion_request_state_changed (self,
                                              WORKBENCH_REQUEST_STATE_CANCELLED);

  G_OBJECT_CLASS (workbench_completion_request_parent_class)->dispose (object);
}

static void
workbench_completion_request_finalize (GObject *object)
{
  WorkbenchCompletionRequest *self = WORKBENCH_COMPLETION_REQUEST (object);

  g_clear_object (&self->cancellable);
  g_clear_object (&self->context);
  g_clear_object (&self->provider);
  g_clear_pointer (&self->items, g_ptr_array_unref);

  G_OBJECT_CLASS (workbench_completion_request_parent_class)->finalize (object);
}

static void
workbench_completion_request_get_property (GObject    *object,
                                           guint       prop_id,
                                           GValue     *value,
                                           GParamSpec *pspec)
{
  WorkbenchCompletionRequest *self = WORKBENCH_COMPLETION_REQUEST (object);
  GListModel *list = G_LIST_MODEL (object);

  switch (prop_id)
    {
    case PROP_CANCELLABLE:
      g_value_set_object (value, self->cancellable);
      break;

    case PROP_CONTEXT:
      g_value_set_object (value, self->context);
      break;

    case PROP_ITEM_TYPE:
      g_value_set_gtype (value, g_list_model_get_item_type (list));
      break;

    case PROP_N_ITEMS:
      g_value_set_uint (value, g_list_model_get_n_items (list));
      break;

    case PROP_PROVIDER:
      g_value_set_object (value, self->provider);
      break;

    case PROP_STATE:
      g_value_set_enum (value, self->state);
      break;

    default:
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, prop_id, pspec);
    }
}

static void
workbench_completion_request_set_property (GObject      *object,
                                           guint         prop_id,
                                           const GValue *value,
                                           GParamSpec   *pspec)
{
  WorkbenchCompletionRequest *self = WORKBENCH_COMPLETION_REQUEST (object);

  switch (prop_id)
    {
    case PROP_CANCELLABLE:
      self->cancellable = g_value_dup_object (value);
      break;

    case PROP_CONTEXT:
      self->context = g_value_dup_object (value);
      break;

    case PROP_PROVIDER:
      self->provider = g_value_dup_object (value);
      break;

    default:
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, prop_id, pspec);
    }
}

static void
workbench_completion_request_class_init (WorkbenchCompletionRequestClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);

  object_class->dispose = workbench_completion_request_dispose;
  object_class->finalize = workbench_completion_request_finalize;
  object_class->get_property = workbench_completion_request_get_property;
  object_class->set_property = workbench_completion_request_set_property;

  /**
   * GtkSourceCompletionContext:cancellable: (getter get_cancellable)
   *
   * The [class@Gio.Cancellable] of the request.
   */
  properties [PROP_CANCELLABLE] =
    g_param_spec_object ("cancellable", NULL, NULL,
                         G_TYPE_CANCELLABLE,
                         (G_PARAM_READWRITE |
                          G_PARAM_CONSTRUCT_ONLY |
                          G_PARAM_EXPLICIT_NOTIFY |
                          G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchCompletionRequest:context: (getter get_context)
   *
   * The [class@GtkSource.CompletionContext] of the request.
   */
  properties [PROP_CONTEXT] =
    g_param_spec_object ("context", NULL, NULL,
                         GTK_SOURCE_TYPE_COMPLETION_CONTEXT,
                         (G_PARAM_READWRITE |
                          G_PARAM_CONSTRUCT_ONLY |
                          G_PARAM_EXPLICIT_NOTIFY |
                          G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchCompletionRequest:item-type:
   *
   * The [class@GtkSource.CompletionProposal] type.
   */
  properties [PROP_ITEM_TYPE] =
    g_param_spec_gtype ("item-type", NULL, NULL,
                        GTK_SOURCE_TYPE_COMPLETION_PROPOSAL,
                        (G_PARAM_READABLE |
                         G_PARAM_EXPLICIT_NOTIFY |
                         G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchCompletionRequest:n-items:
   *
   * The current number of proposals.
   */
  properties [PROP_N_ITEMS] =
    g_param_spec_uint ("n-items", NULL, NULL,
                       0, G_MAXUINT32,
                       0,
                       (G_PARAM_READABLE |
                        G_PARAM_EXPLICIT_NOTIFY |
                        G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchCompletionRequest:provider: (getter get_provider)
   *
   * The [iface@GtkSource.CompletionProvider] of the request.
   */
  properties [PROP_PROVIDER] =
    g_param_spec_object ("provider", NULL, NULL,
                         GTK_SOURCE_TYPE_COMPLETION_PROVIDER,
                         (G_PARAM_READWRITE |
                          G_PARAM_CONSTRUCT_ONLY |
                          G_PARAM_EXPLICIT_NOTIFY |
                          G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchCompletionRequest:state: (getter get_state)
   *
   * The state of the request.
   *
   * Handlers of the request should update the state of the request by calling
   * [method@Workbench.CompletionRequest.state_changed].
   *
   * If a handler does not change the state, the value is guaranteed to change
   * to `WORKBENCH_REQUEST_STATE_CANCELLED` before finalization.
   */
  properties [PROP_STATE] =
    g_param_spec_enum ("state", NULL, NULL,
                       WORKBENCH_TYPE_REQUEST_STATE,
                       WORKBENCH_REQUEST_STATE_UNKNOWN,
                       (G_PARAM_READABLE |
                        G_PARAM_EXPLICIT_NOTIFY |
                        G_PARAM_STATIC_STRINGS));

  g_object_class_install_properties (object_class, N_PROPERTIES, properties);
}

static void
workbench_completion_request_init (WorkbenchCompletionRequest *self)
{
  self->items = g_ptr_array_new_with_free_func (g_object_unref);
}

/**
 * workbench_completion_request_get_cancellable: (get-property cancellable)
 *
 * Get the cancellable for the request.
 *
 * Returns: (transfer none) (nullable): a `GCancellable`
 */
GCancellable *
workbench_completion_request_get_cancellable (WorkbenchCompletionRequest *request)
{
  g_return_val_if_fail (WORKBENCH_IS_COMPLETION_REQUEST (request), NULL);

  return request->cancellable;
}

/**
 * workbench_completion_request_get_context: (get-property context)
 *
 * Get the completion context for the request.
 *
 * Returns: (transfer none) (nullable): a `GtkSourceCompletionContext`
 */
GtkSourceCompletionContext *
workbench_completion_request_get_context (WorkbenchCompletionRequest *request)
{
  g_return_val_if_fail (WORKBENCH_IS_COMPLETION_REQUEST (request), NULL);

  return request->context;
}

/**
 * workbench_completion_request_get_provider: (get-property provider)
 *
 * Get the completion provider for the request.
 *
 * Returns: (transfer none) (nullable): a `GtkSourceCompletionProvider`
 */
GtkSourceCompletionProvider *
workbench_completion_request_get_provider (WorkbenchCompletionRequest *request)
{
  g_return_val_if_fail (WORKBENCH_IS_COMPLETION_REQUEST (request), NULL);

  return request->provider;
}

/**
 * workbench_completion_request_get_state: (get-property state)
 *
 * Get the state of the request.
 *
 * Returns: a `WorkbenchRequestState`
 */
WorkbenchRequestState
workbench_completion_request_get_state (WorkbenchCompletionRequest *request)
{
  g_return_val_if_fail (WORKBENCH_IS_COMPLETION_REQUEST (request),
                        WORKBENCH_REQUEST_STATE_UNKNOWN);

  return request->state;
}

/**
 * workbench_completion_request_add:
 * @request: a `WorkbenchCompletionRequest`
 * @proposal: a `GtkSourceCompletionProposal`
 *
 * Add a [class@GObject.Object] to @request.
 */
void
workbench_completion_request_add (WorkbenchCompletionRequest  *request,
                                  GtkSourceCompletionProposal *proposal)
{
  unsigned int position = 0;

  g_return_if_fail (WORKBENCH_IS_COMPLETION_REQUEST (request));
  g_return_if_fail (GTK_SOURCE_IS_COMPLETION_PROPOSAL (proposal));

  position = request->items->len;
  g_ptr_array_add (request->items, g_object_ref (proposal));
  g_list_model_items_changed (G_LIST_MODEL (request), position, 0, 1);
}

/**
 * workbench_completion_request_splice:
 * @request: a `WorkbenchCompletionRequest`
 * @position: the position at which to make the change
 * @n_removals: the number of items to remove
 * @additions: (array length=n_additions) (element-type GtkSource.CompletionProposal): the items to add
 * @n_additions: the number of items to add
 *
 * Changes @request by removing @n_removals items and adding @n_additions.
 *
 * The combined value of @position and @n_removals must be less than or equal
 * to the length of the list at the time this function is called.
 */
void
workbench_completion_request_splice (WorkbenchCompletionRequest *request,
                                     unsigned int                position,
                                     unsigned int                n_removals,
                                     gpointer                   *additions,
                                     unsigned int                n_additions)
{
  g_return_if_fail (WORKBENCH_IS_COMPLETION_REQUEST (request));
  g_return_if_fail (position + n_removals >= position); /* overflow */

  g_ptr_array_remove_range (request->items, position, n_removals);

  for (unsigned int i = 0; i < n_additions; i++)
    {
      g_ptr_array_insert (request->items,
                          position + i,
                          g_object_ref (additions[i]));
    }

  g_list_model_items_changed (G_LIST_MODEL (request),
                              position,
                              n_removals,
                              n_additions);
}

/**
 * workbench_completion_request_state_changed:
 * @request: a `WorkbenchCompletionRequest`
 * @state: a `WorkbenchRequestState`
 *
 * Update the state of the request.
 *
 * If @state is `WORKBENCH_REQUEST_STATE_CANCELLED`, this will also call
 * [method@Gio.Cancellable.cancel] on the request's cancellable object.
 */
void
workbench_completion_request_state_changed (WorkbenchCompletionRequest *request,
                                            WorkbenchRequestState       state)
{
  g_return_if_fail (WORKBENCH_IS_COMPLETION_REQUEST (request));

  if (request->state >= state)
    return;

  if (state == WORKBENCH_REQUEST_STATE_CANCELLED)
    g_cancellable_cancel (request->cancellable);

  request->state = state;
  g_object_notify_by_pspec (G_OBJECT (request), properties [PROP_STATE]);
}
