#include <adwaita.h>
#include <gtk/gtk.h>

#include "workbench-preview-window.h"

struct _WorkbenchPreviewWindow
{
  AdwWindow  parent_instance;

  AdwToolbarView *toolbar_view;
};

G_DEFINE_FINAL_TYPE (WorkbenchPreviewWindow, workbench_preview_window, ADW_TYPE_WINDOW)

static void
workbench_preview_window_init (WorkbenchPreviewWindow *self)
{
  gtk_widget_init_template (GTK_WIDGET (self));
}

static void
workbench_preview_window_dispose (GObject *object)
{
  gtk_widget_dispose_template (GTK_WIDGET (object), WORKBENCH_TYPE_PREVIEW_WINDOW);

  G_OBJECT_CLASS (workbench_preview_window_parent_class)->dispose (object);
}

static void
workbench_preview_window_class_init (WorkbenchPreviewWindowClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);
  GtkWidgetClass *widget_class = GTK_WIDGET_CLASS (klass);

  object_class->dispose = workbench_preview_window_dispose;

  gtk_widget_class_set_template_from_resource (widget_class, "/re/sonny/Workbench/libworkbench/workbench-preview-window.ui");
  gtk_widget_class_bind_template_child (widget_class, WorkbenchPreviewWindow, toolbar_view);
}

/**
 * workbench_preview_window_new: (constructor)
 *
 * Returns: (transfer full): Returns a PreviewWindow
 */
WorkbenchPreviewWindow *
workbench_preview_window_new (void)
{
  return g_object_new (WORKBENCH_TYPE_PREVIEW_WINDOW, NULL);
}

/**
 * workbench_preview_window_get_content:
 *
 * Returns: (transfer none)
 */
GtkWidget *
workbench_preview_window_get_content (WorkbenchPreviewWindow *self)
{
  g_return_val_if_fail (WORKBENCH_IS_PREVIEW_WINDOW (self), NULL);

  return adw_toolbar_view_get_content (self->toolbar_view);
}

/**
 * workbench_preview_window_set_content:
 * @content: (transfer full)
 */
void
workbench_preview_window_set_content (WorkbenchPreviewWindow *self,
                                      GtkWidget      *content)
{
  g_return_if_fail (WORKBENCH_IS_PREVIEW_WINDOW (self));

  adw_toolbar_view_set_content (self->toolbar_view, content);
}
