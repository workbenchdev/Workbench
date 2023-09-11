// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#pragma once

#if !defined (WORKBENCH_INSIDE) && !defined (WORKBENCH_COMPILATION)
# error "Only <workbench.h> can be included directly."
#endif

#include <gio/gio.h>
#include <gtksourceview/gtksource.h>

#include "workbench-completion-request.h"

G_BEGIN_DECLS

#define WORKBENCH_TYPE_COMPLETION_PROVIDER (workbench_completion_provider_get_type())

G_DECLARE_DERIVABLE_TYPE (WorkbenchCompletionProvider, workbench_completion_provider, WORKBENCH, COMPLETION_PROVIDER, GObject)

struct _WorkbenchCompletionProviderClass
{
  GObjectClass   parent_class;

  /* signal closures */
  void           (*completion_request) (WorkbenchCompletionProvider *self,
                                        WorkbenchCompletionRequest  *request);

  /*< private >*/
  gpointer       padding[8];
};

G_END_DECLS
