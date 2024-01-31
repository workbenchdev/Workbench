#pragma once

#include <adwaita.h>

#include <gtk/gtk.h>

G_BEGIN_DECLS

#define WORKBENCH_TYPE_PREVIEW_WINDOW (workbench_preview_window_get_type())

G_DECLARE_FINAL_TYPE (WorkbenchPreviewWindow, workbench_preview_window, WORKBENCH, PREVIEW_WINDOW, AdwWindow)

AdwWindow *workbench_preview_window_new (void) G_GNUC_WARN_UNUSED_RESULT;

GtkWidget *workbench_preview_window_get_content (WorkbenchPreviewWindow *self);
void       workbench_preview_window_set_content (WorkbenchPreviewWindow *self,
                                                 GtkWidget      *content);

G_END_DECLS
