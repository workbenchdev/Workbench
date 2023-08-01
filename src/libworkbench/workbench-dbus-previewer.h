// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#pragma once

#if !defined (WORKBENCH_INSIDE) && !defined (WORKBENCH_COMPILATION)
# error "Only <workbench.h> can be included directly."
#endif

#include <adwaita.h>

G_BEGIN_DECLS

#define WORKBENCH_TYPE_DBUS_PREVIEWER (workbench_dbus_previewer_get_type())

WORKBENCH_EXPORT
G_DECLARE_DERIVABLE_TYPE (WorkbenchDBusPreviewer, workbench_dbus_previewer, WORKBENCH, DBUS_PREVIEWER, GDBusInterfaceSkeleton)

struct _WorkbenchDBusPreviewerClass
{
  GDBusInterfaceSkeletonClass   parent_class;

  /* virtual functions */
  void                          (*present)    (WorkbenchDBusPreviewer  *previewer,
                                               int32_t                  width,
                                               int32_t                  height);
  void                          (*run)        (WorkbenchDBusPreviewer  *previewer,
                                               const char              *path,
                                               GVariant                *options,
                                               GError                 **error);
  void                          (*screenshot) (WorkbenchDBusPreviewer  *previewer,
                                               const char              *path,
                                               GError                 **error);
  void                          (*update_css) (WorkbenchDBusPreviewer  *previewer,
                                               const char              *css,
                                               GError                 **error);
  void                          (*update_ui)  (WorkbenchDBusPreviewer  *previewer,
                                               const char              *content,
                                               const char              *target_id,
                                               const char              *original_id,
                                               GError                 **error);

  /*< private >*/
  gpointer                      padding[8];
};

WORKBENCH_EXPORT
GtkBuilder     * workbench_dbus_previewer_get_builder      (WorkbenchDBusPreviewer *previewer);
WORKBENCH_EXPORT
void             workbench_dbus_previewer_set_builder      (WorkbenchDBusPreviewer *previewer,
                                                            GtkBuilder             *builder);
WORKBENCH_EXPORT
AdwColorScheme   workbench_dbus_previewer_get_color_scheme (WorkbenchDBusPreviewer *previewer);
WORKBENCH_EXPORT
void             workbench_dbus_previewer_set_color_scheme (WorkbenchDBusPreviewer *previewer,
                                                            AdwColorScheme          color_scheme);
WORKBENCH_EXPORT
gboolean         workbench_dbus_previewer_get_inspector    (WorkbenchDBusPreviewer *previewer);
WORKBENCH_EXPORT
void             workbench_dbus_previewer_set_inspector    (WorkbenchDBusPreviewer *previewer,
                                                            gboolean                enabled);
WORKBENCH_EXPORT
gboolean         workbench_dbus_previewer_get_visible      (WorkbenchDBusPreviewer *previewer);
WORKBENCH_EXPORT
void             workbench_dbus_previewer_set_visible      (WorkbenchDBusPreviewer *previewer,
                                                            gboolean                visible);
WORKBENCH_EXPORT
GtkWindow      * workbench_dbus_previewer_get_window       (WorkbenchDBusPreviewer *previewer);
WORKBENCH_EXPORT
void             workbench_dbus_previewer_set_window       (WorkbenchDBusPreviewer *previewer,
                                                            GtkWindow              *window);

G_END_DECLS
