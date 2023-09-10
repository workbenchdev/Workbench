// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#pragma once

#if !defined (WORKBENCH_INSIDE) && !defined (WORKBENCH_COMPILATION)
# error "Only <workbench.h> can be included directly."
#endif

#include <gio/gio.h>
#include <gtksourceview/gtksource.h>

G_BEGIN_DECLS

/**
 * WorkbenchRequestState:
 * @WORKBENCH_REQUEST_STATE_UNKNOWN: the request state is unknown
 * @WORKBENCH_REQUEST_STATE_CANCELLED: the request was cancelled
 * @WORKBENCH_REQUEST_STATE_COMPLETE: the request is complete
 *
 * Enumeration of request states.
 */
typedef enum
{
  WORKBENCH_REQUEST_STATE_UNKNOWN,
  WORKBENCH_REQUEST_STATE_CANCELLED,
  WORKBENCH_REQUEST_STATE_COMPLETE,
} WorkbenchRequestState;


#define WORKBENCH_TYPE_COMPLETION_REQUEST (workbench_completion_request_get_type())

G_DECLARE_FINAL_TYPE (WorkbenchCompletionRequest, workbench_completion_request, WORKBENCH, COMPLETION_REQUEST, GObject)

GCancellable                * workbench_completion_request_get_cancellable (WorkbenchCompletionRequest  *request);
GtkSourceCompletionContext  * workbench_completion_request_get_context     (WorkbenchCompletionRequest  *request);
GtkSourceCompletionProvider * workbench_completion_request_get_provider    (WorkbenchCompletionRequest  *request);
WorkbenchRequestState         workbench_completion_request_get_state       (WorkbenchCompletionRequest  *request);
void                          workbench_completion_request_add             (WorkbenchCompletionRequest  *request,
                                                                            GtkSourceCompletionProposal *proposal);
void                          workbench_completion_request_splice          (WorkbenchCompletionRequest  *request,
                                                                            unsigned int                 position,
                                                                            unsigned int                 n_removals,
                                                                            gpointer                    *additions,
                                                                            unsigned int                 n_additions);
void                          workbench_completion_request_state_changed   (WorkbenchCompletionRequest  *request,
                                                                            WorkbenchRequestState        state);

G_END_DECLS
