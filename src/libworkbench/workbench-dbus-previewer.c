// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#include <gio/gio.h>
#include <gtk/gtk.h>
#include <adwaita.h>

#include "workbench-dbus-previewer.h"

#define DBUS_INTERFACE "re.sonny.Workbench.Previewer"

#define DEFAULT_WINDOW_WIDTH  600
#define DEFAULT_WINDOW_HEIGHT 480


/**
 * WorkbenchDBusPreviewer:
 *
 * A base class for previewers on D-Bus.
 */
typedef struct
{
  GDBusInterfaceSkeleton  parent_instance;

  AdwStyleManager        *style_manager;
  AdwColorScheme          color_scheme;
  GtkBuilder             *builder;
  GtkCssProvider         *css;
  GError                 *css_error;
  GtkWidget              *target;
  GtkWindow              *window;
  unsigned int            inspector : 1;
  unsigned int            visible : 1;

  /* D-Bus */
  GHashTable             *actions;
  unsigned int            actions_id;
  GHashTable             *cache;
  GHashTable             *pending;
  unsigned int            flush_id;
} WorkbenchDBusPreviewerPrivate;

static void   g_action_group_iface_init (GActionGroupInterface *iface);
static void   g_action_map_iface_init   (GActionMapInterface   *iface);

G_DEFINE_TYPE_WITH_CODE (WorkbenchDBusPreviewer, workbench_dbus_previewer, G_TYPE_DBUS_INTERFACE_SKELETON,
                         G_ADD_PRIVATE (WorkbenchDBusPreviewer)
                         G_IMPLEMENT_INTERFACE (G_TYPE_ACTION_GROUP, g_action_group_iface_init)
                         G_IMPLEMENT_INTERFACE (G_TYPE_ACTION_MAP, g_action_map_iface_init));

enum {
  PROP_0,
  PROP_BUILDER,
  PROP_COLOR_SCHEME,
  PROP_INSPECTOR,
  PROP_VISIBLE,
  PROP_WINDOW,
  N_PROPERTIES,
};

static GParamSpec *properties[N_PROPERTIES] = { NULL, };


/*
 * re.sonny.Workbench.Previewer Interface
 */
static GDBusInterfaceInfo *previewer_iface_info = NULL;
static GDBusNodeInfo      *previewer_node_info = NULL;
static const char          previewer_node_xml[] =
  "<node>"
  "  <interface name=\"re.sonny.Workbench.Previewer\">"
  "    <method name=\"Present\">"
  "      <arg type=\"i\" name=\"width\" direction=\"in\"/>"
  "      <arg type=\"i\" name=\"height\" direction=\"in\"/>"
  "    </method>"
  "    <method name=\"Run\">"
  "      <arg type=\"s\" name=\"path\" direction=\"in\"/>"
  "      <arg type=\"a{sv}\" name=\"options\" direction=\"in\"/>"
  "    </method>"
  "    <method name=\"Screenshot\">"
  "      <arg type=\"s\" name=\"path\" direction=\"in\"/>"
  "    </method>"
  "    <method name=\"UpdateCss\">"
  "      <arg type=\"s\" name=\"content\" direction=\"in\"/>"
  "    </method>"
  "    <method name=\"UpdateUi\">"
  "      <arg type=\"s\" name=\"content\" direction=\"in\"/>"
  "      <arg type=\"s\" name=\"target_id\" direction=\"in\"/>"
  "      <arg type=\"s\" name=\"original_id\" direction=\"in\"/>"
  "    </method>"
  "    <signal name=\"CssParserError\">"
  "      <arg type=\"s\" name=\"message\"/>"
  "      <arg type=\"i\" name=\"start_line\"/>"
  "      <arg type=\"i\" name=\"start_char\"/>"
  "      <arg type=\"i\" name=\"end_line\"/>"
  "      <arg type=\"i\" name=\"end_char\"/>"
  "    </signal>"
  "    <property type=\"i\" name=\"ColorScheme\" access=\"readwrite\"/>"
  "    <property type=\"b\" name=\"Inspector\" access=\"readwrite\"/>"
  "    <property type=\"b\" name=\"Visible\" access=\"readwrite\"/>"
  "  </interface>"
  "</node>";


/*
 * D-Bus Helpers
 */
static gboolean
flush_idle (gpointer data)
{
  g_dbus_interface_skeleton_flush (G_DBUS_INTERFACE_SKELETON (data));

  return G_SOURCE_REMOVE;
}

static void
on_close_request (GtkWindow              *window,
                  WorkbenchDBusPreviewer *self)
{
  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (GTK_IS_WINDOW (window));

  workbench_dbus_previewer_set_visible (self, FALSE);
  workbench_dbus_previewer_set_window (self, NULL);
}

static void
on_parsing_error (GtkCssProvider         *provider,
                  GtkCssSection          *section,
                  GError                 *error,
                  WorkbenchDBusPreviewer *self)
{
  GDBusInterfaceSkeleton *skeleton = G_DBUS_INTERFACE_SKELETON (self);
  g_autolist (GDBusConnection) connections = NULL;
  g_autoptr (GVariant) parameters = NULL;
  const char *object_path;
  GtkCssLocation *start = NULL;
  GtkCssLocation *end = NULL;

  g_assert (GTK_IS_CSS_PROVIDER (provider));
  g_assert (section != NULL);
  g_assert (error != NULL);
  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));

  parameters = g_variant_new ("(siiii)",
                              error->message,
                              start->lines,
                              start->chars,
                              end->lines,
                              end->chars);
  g_variant_ref_sink (parameters);

  /* Emit "CssParserError" on each connection */
  connections = g_dbus_interface_skeleton_get_connections (skeleton);
  object_path = g_dbus_interface_skeleton_get_object_path (skeleton);

  for (const GList *iter = connections; iter; iter = iter->next)
    {
      g_autoptr (GError) warning = NULL;

      g_dbus_connection_emit_signal (G_DBUS_CONNECTION (iter->data),
                                     NULL,
                                     object_path,
                                     previewer_iface_info->name,
                                     "CssParserError",
                                     parameters,
                                     &error);

      if (error != NULL)
        g_warning ("%s(): %s", G_STRFUNC, warning->message);
    }
}

/*
 * GDBusInterfaceVTable
 */
static void
workbench_dbus_previewer_method_call (GDBusConnection       *connection,
                                      const char            *sender,
                                      const char            *object_path,
                                      const char            *interface_name,
                                      const char            *method_name,
                                      GVariant              *parameters,
                                      GDBusMethodInvocation *invocation,
                                      void                  *user_data)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (user_data);
  WorkbenchDBusPreviewerClass *klass = WORKBENCH_DBUS_PREVIEWER_GET_CLASS (self);

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (method_name != NULL);

  if (g_str_equal (method_name, "Present"))
    {
      int32_t width = -1;
      int32_t height = -1;

      g_variant_get (parameters, "(ii)", &width, &height);
      klass->present (self, width, height);

      g_dbus_method_invocation_return_value (invocation, NULL);
    }
  else if (g_str_equal (method_name, "Run"))
    {
      const char *path = NULL;
      g_autoptr (GVariant) options = NULL;
      GError *error = NULL;

      g_variant_get (parameters, "(@a{sv}&s)", &path, &options);

      klass->run (self, path, options, &error);

      if (error != NULL)
        g_dbus_method_invocation_return_gerror (invocation, error);
      else
        g_dbus_method_invocation_return_value (invocation, NULL);
    }
  else if (g_str_equal (method_name, "Screenshot"))
    {
      const char *path = NULL;
      GError *error = NULL;

      g_variant_get (parameters, "(&s)", &path);

      klass->screenshot (self, path, &error);

      if (error != NULL)
        g_dbus_method_invocation_return_gerror (invocation, error);
      else
        g_dbus_method_invocation_return_value (invocation, NULL);
    }
  else if (g_str_equal (method_name, "UpdateCss"))
    {
      const char *content = NULL;
      GError *error = NULL;

      g_variant_get (parameters, "(&s)", &content);

      klass->update_css (self, content, &error);

      if (error != NULL)
        g_dbus_method_invocation_return_gerror (invocation, error);
      else
        g_dbus_method_invocation_return_value (invocation, NULL);
    }
  else if (g_str_equal (method_name, "UpdateUi"))
    {
      const char *content = NULL;
      const char *target_id = NULL;
      const char *original_id = NULL;
      GError *error = NULL;

      g_variant_get (parameters, "(&s&s&s)",
                     &content, &target_id, &original_id);

      klass->update_ui (self, content, target_id, original_id, &error);

      if (error != NULL)
        g_dbus_method_invocation_return_gerror (invocation, error);
      else
        g_dbus_method_invocation_return_value (invocation, NULL);
    }
  else
    {
      g_dbus_method_invocation_return_error (invocation,
                                             G_DBUS_ERROR,
                                             G_DBUS_ERROR_UNKNOWN_METHOD,
                                             "Unknown method %s on %s",
                                             method_name,
                                             interface_name);
    }
}

static GVariant *
workbench_dbus_previewer_property_get (GDBusConnection  *connection,
                                       const char       *sender,
                                       const char       *object_path,
                                       const char       *interface_name,
                                       const char       *property_name,
                                       GError          **error,
                                       void             *user_data)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (user_data);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GVariant *value = NULL;

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (property_name != NULL);

  if ((value = g_hash_table_lookup (priv->cache, property_name)) != NULL)
    return g_variant_ref (value);

  g_set_error (error,
               G_DBUS_ERROR,
               G_DBUS_ERROR_FAILED,
               "Failed to read %s property on %s",
               property_name,
               interface_name);

  return NULL;
}

static gboolean
workbench_dbus_previewer_property_set (GDBusConnection  *connection,
                                       const char       *sender,
                                       const char       *object_path,
                                       const char       *interface_name,
                                       const char       *property_name,
                                       GVariant         *value,
                                       GError          **error,
                                       void             *user_data)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (user_data);

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (property_name != NULL);

  if (g_str_equal (property_name, "ColorScheme"))
    {
      AdwColorScheme color_scheme = ADW_COLOR_SCHEME_DEFAULT;

      color_scheme = g_variant_get_int32 (value);
      workbench_dbus_previewer_set_color_scheme (self, color_scheme);
    }
  else if (g_str_equal (property_name, "Visible"))
    {
      gboolean visible = FALSE;

      visible = g_variant_get_boolean (value);
      workbench_dbus_previewer_set_visible (self, visible);
    }
  else
    {
      g_set_error (error,
                   G_DBUS_ERROR,
                   G_DBUS_ERROR_UNKNOWN_PROPERTY,
                   "Unknown property %s on %s",
                   property_name,
                   interface_name);
      return FALSE;
    }

  return TRUE;
}

static const GDBusInterfaceVTable iface_vtable = {
  workbench_dbus_previewer_method_call,
  workbench_dbus_previewer_property_get,
  workbench_dbus_previewer_property_set,
};


/*
 * GDBusInterfaceSkeleton
 */
static void
workbench_dbus_previewer_flush (GDBusInterfaceSkeleton *skeleton)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (skeleton);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  g_autolist (GDBusConnection) connections = NULL;
  g_autoptr (GVariant) parameters = NULL;
  const char *object_path;
  GVariantBuilder changed_properties;
  GVariantBuilder invalidated_properties;
  GHashTableIter pending_properties;
  gpointer key, value;

  /* Sort the pending property changes into "changed" and "invalidated" */
  g_hash_table_iter_init (&pending_properties, priv->pending);
  g_variant_builder_init (&changed_properties, G_VARIANT_TYPE_VARDICT);
  g_variant_builder_init (&invalidated_properties, G_VARIANT_TYPE_STRING_ARRAY);

  while (g_hash_table_iter_next (&pending_properties, &key, &value))
    {
      if (value)
        g_variant_builder_add (&changed_properties, "{sv}", key, value);
      else
        g_variant_builder_add (&invalidated_properties, "s", key);

      g_hash_table_iter_remove (&pending_properties);
    }

  parameters = g_variant_new ("(s@a{sv}@as)",
                              previewer_iface_info->name,
                              g_variant_builder_end (&changed_properties),
                              g_variant_builder_end (&invalidated_properties));
  g_variant_ref_sink (parameters);

  /* Emit "PropertiesChanged" on each connection */
  connections = g_dbus_interface_skeleton_get_connections (skeleton);
  object_path = g_dbus_interface_skeleton_get_object_path (skeleton);

  for (const GList *iter = connections; iter; iter = iter->next)
    {
      g_autoptr (GError) error = NULL;

      g_dbus_connection_emit_signal (G_DBUS_CONNECTION (iter->data),
                                     NULL,
                                     object_path,
                                     "org.freedesktop.DBus.Properties",
                                     "PropertiesChanged",
                                     parameters,
                                     &error);

      if (error != NULL)
        g_debug ("%s(): %s", G_STRFUNC, error->message);
    }

  g_clear_handle_id (&priv->flush_id, g_source_remove);
}

static GVariant *
workbench_dbus_previewer_get_properties (GDBusInterfaceSkeleton *skeleton)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (skeleton);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GVariantBuilder builder;
  GHashTableIter iter;
  gpointer key, value;

  g_variant_builder_init (&builder, G_VARIANT_TYPE_VARDICT);
  g_hash_table_iter_init (&iter, priv->cache);

  while (g_hash_table_iter_next (&iter, &key, &value))
    g_variant_builder_add (&builder, "{sv}", key, value);

  return g_variant_builder_end (&builder);
}

static GDBusInterfaceInfo *
workbench_dbus_previewer_get_info (GDBusInterfaceSkeleton *skeleton)
{
  return previewer_iface_info;
}

static GDBusInterfaceVTable *
workbench_dbus_previewer_get_vtable (GDBusInterfaceSkeleton *skeleton)
{
  return (GDBusInterfaceVTable *)&iface_vtable;
}

/*
 * GActionGroup
 */
static void
workbench_dbus_previewer_activate_action (GActionGroup *action_group,
                                          const char   *action_name,
                                          GVariant     *parameter)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (action_group);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GAction *action;

  if ((action = g_hash_table_lookup (priv->actions, action_name)) != NULL)
    g_action_activate (action, parameter);
}

static void
workbench_dbus_previewer_change_action_state (GActionGroup *action_group,
                                              const char   *action_name,
                                              GVariant     *value)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (action_group);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GAction *action;

  if ((action = g_hash_table_lookup (priv->actions, action_name)) != NULL)
    g_action_change_state (action, value);
}

static char **
workbench_dbus_previewer_list_actions (GActionGroup *action_group)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (action_group);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  g_auto (GStrv) actions = NULL;
  GHashTableIter iter;
  gpointer key;
  unsigned int i = 0;

  actions = g_new0 (char *, g_hash_table_size (priv->actions) + 1);

  g_hash_table_iter_init (&iter, priv->actions);

  while (g_hash_table_iter_next (&iter, &key, NULL))
    actions[i++] = g_strdup (key);

  return g_steal_pointer (&actions);
}

static gboolean
workbench_dbus_previewer_query_action (GActionGroup        *action_group,
                                       const char          *action_name,
                                       gboolean            *enabled,
                                       const GVariantType **parameter_type,
                                       const GVariantType **state_type,
                                       GVariant           **state_hint,
                                       GVariant           **state)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (action_group);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GAction *action;

  if ((action = g_hash_table_lookup (priv->actions, action_name)) == NULL)
    return FALSE;

  if (enabled)
    *enabled = g_action_get_enabled (action);

  if (parameter_type)
    *parameter_type = g_action_get_parameter_type (action);

  if (state_type)
    *state_type = g_action_get_state_type (action);

  if (state_hint)
    *state_hint = g_action_get_state_hint (action);

  if (state)
    *state = g_action_get_state (action);

  return TRUE;
}

static void
g_action_group_iface_init (GActionGroupInterface *iface)
{
  iface->activate_action = workbench_dbus_previewer_activate_action;
  iface->change_action_state = workbench_dbus_previewer_change_action_state;
  iface->list_actions = workbench_dbus_previewer_list_actions;
  iface->query_action = workbench_dbus_previewer_query_action;
}

/*
 * GActionMap
 */
static void
on_action_enabled_changed (GAction      *action,
                           GParamSpec   *pspec,
                           GActionGroup *action_group)
{
  g_action_group_action_enabled_changed (action_group,
                                         g_action_get_name (action),
                                         g_action_get_enabled (action));
}

static void
on_action_state_changed (GAction      *action,
                         GParamSpec   *pspec,
                         GActionGroup *action_group)
{
  g_autoptr (GVariant) value = NULL;

  value = g_action_get_state (action);
  g_action_group_action_state_changed (action_group,
                                       g_action_get_name (action),
                                       value);
}

static void
workbench_dbus_previewer_disconnect_action (WorkbenchDBusPreviewer *self,
                                            GAction                *action)
{
  g_signal_handlers_disconnect_by_func (action, on_action_enabled_changed, self);
  g_signal_handlers_disconnect_by_func (action, on_action_state_changed, self);
}

static GAction *
workbench_dbus_previewer_lookup_action (GActionMap *action_map,
                                        const char *action_name)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (action_map);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);

  return g_hash_table_lookup (priv->actions, action_name);
}

static void
workbench_dbus_previewer_add_action (GActionMap *action_map,
                                     GAction    *action)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (action_map);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  const char *action_name;
  GAction *replacing;

  action_name = g_action_get_name (action);

  if ((replacing = g_hash_table_lookup (priv->actions, action_name)) == action)
    return;

  if (replacing != NULL)
    {
      g_action_group_action_removed (G_ACTION_GROUP (action_map), action_name);
      workbench_dbus_previewer_disconnect_action (self, replacing);
    }

  g_signal_connect (action,
                    "notify::enabled",
                    G_CALLBACK (on_action_enabled_changed),
                    action_map);

  if (g_action_get_state_type (action) != NULL)
    g_signal_connect (action,
                      "notify::state",
                      G_CALLBACK (on_action_state_changed),
                      action_map);

  g_hash_table_replace (priv->actions,
                        g_strdup (action_name),
                        g_object_ref (action));
  g_action_group_action_added (G_ACTION_GROUP (action_map), action_name);
}

static void
workbench_dbus_previewer_remove_action (GActionMap *action_map,
                                        const char *action_name)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (action_map);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GAction *action;

  if ((action = g_hash_table_lookup (priv->actions, action_name)) != NULL)
    {
      g_action_group_action_removed (G_ACTION_GROUP (action_map), action_name);
      workbench_dbus_previewer_disconnect_action (self, action);
      g_hash_table_remove (priv->actions, action_name);
    }
}

static void
g_action_map_iface_init (GActionMapInterface *iface)
{
  iface->add_action = workbench_dbus_previewer_add_action;
  iface->lookup_action = workbench_dbus_previewer_lookup_action;
  iface->remove_action = workbench_dbus_previewer_remove_action;
}

/*
 * WorkbenchDBusPreviewer
 */
static GtkWindow *
workbench_dbus_previewer_real_ensure_window (WorkbenchDBusPreviewer *self,
                                             int32_t                 width,
                                             int32_t                 height)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));

  if (priv->window == NULL)
    {
      priv->window = g_object_new (GTK_TYPE_WINDOW,
                                   "default-width",  width,
                                   "default-height", height,
                                   "titlebar",       gtk_header_bar_new (),
                                   NULL);
      g_signal_connect_object (priv->window,
                               "close-request",
                               G_CALLBACK (on_close_request),
                               self, 0);
    }

  return priv->window;
}

static void
workbench_dbus_previewer_real_present (WorkbenchDBusPreviewer *self,
                                       int32_t                 width,
                                       int32_t                 height)
{
  GtkWindow *window = NULL;

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));

  window = workbench_dbus_previewer_real_ensure_window (self, width, height);

  gtk_window_set_default_size (window, width, height);
  gtk_window_present (window);
}

static void
workbench_dbus_previewer_real_run (WorkbenchDBusPreviewer  *self,
                                   const char              *path,
                                   GVariant                *options,
                                   GError                 **error)
{
  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (path != NULL);
  g_assert (g_variant_is_of_type (options, G_VARIANT_TYPE_VARDICT));

  g_critical ("%s does not implement Workbench.DBusPreviewer.run()",
              G_OBJECT_TYPE_NAME (self));
}

static void
workbench_dbus_previewer_real_screenshot (WorkbenchDBusPreviewer  *self,
                                          const char              *path,
                                          GError                 **error)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  g_autoptr (GdkPaintable) paintable = NULL;
  g_autoptr (GskRenderNode) node = NULL;
  g_autoptr (GtkSnapshot) snapshot = NULL;
  g_autoptr (GdkTexture) texture = NULL;
  GskRenderer *renderer = NULL;
  GtkNative *native = NULL;
  GtkAllocation size = { -1, -1 };

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (path != NULL);

  paintable = gtk_widget_paintable_new (priv->target);
  snapshot = gtk_snapshot_new ();

  gtk_widget_get_allocation (priv->target, &size);
  gdk_paintable_snapshot (paintable, snapshot, size.width, size.height);

  if ((node = gtk_snapshot_to_node (snapshot)) == NULL ||
      (native = gtk_widget_get_native (priv->target)) == NULL)
    {
      g_set_error (error,
                   G_IO_ERROR,
                   G_IO_ERROR_FAILED,
                   "Could not get node snapshot (width: %i, height: %i)",
                   size.width, size.height);
      return;
    }

  renderer = gtk_native_get_renderer (native);
  texture = gsk_renderer_render_texture (renderer, node,
                                         &GRAPHENE_RECT_INIT (0.0, 0.0,
                                                             (float)size.width,
                                                             (float)size.height));

  if (!gdk_texture_save_to_png (texture, path))
    {
      g_set_error (error,
                   G_IO_ERROR,
                   G_IO_ERROR_FAILED,
                   "Failed to generate PNG (path: %s)",
                   path);
    }
}

static void
workbench_dbus_previewer_real_update_css (WorkbenchDBusPreviewer  *self,
                                          const char              *css,
                                          GError                 **error)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GdkDisplay *display = NULL;

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (css != NULL);

  display = gdk_display_get_default ();

  if (priv->css != NULL)
    {
      gtk_style_context_remove_provider_for_display (display,
                                                     GTK_STYLE_PROVIDER (priv->css));
      g_clear_object (&priv->css);
      g_clear_error (&priv->css_error);
    }

  priv->css = gtk_css_provider_new ();
  g_signal_connect_object (G_OBJECT (priv->css),
                           "parsing-error",
                           G_CALLBACK (on_parsing_error),
                           self, 0);

  gtk_css_provider_load_from_data (priv->css, css, -1);

  if (priv->css_error != NULL)
    {
      *error = g_steal_pointer (&priv->css_error);
      return;
    }

  gtk_style_context_add_provider_for_display (display,
                                              GTK_STYLE_PROVIDER (priv->css),
                                              GTK_STYLE_PROVIDER_PRIORITY_APPLICATION);
}

static void
workbench_dbus_previewer_real_update_ui (WorkbenchDBusPreviewer  *self,
                                         const char              *content,
                                         const char              *target_id,
                                         const char              *original_id,
                                         GError                 **error)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  GObject *target = NULL;
  GtkWidget *child = NULL;

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));
  g_assert (content != NULL);
  g_assert (target_id != NULL);
  g_assert (original_id != NULL);

  g_clear_object (&priv->builder);
  priv->builder = gtk_builder_new ();

  if (!gtk_builder_add_from_string (priv->builder, content, -1, error))
    return;

  if ((target = gtk_builder_get_object (priv->builder, target_id)) == NULL)
    {
      g_set_error (error,
                   GTK_BUILDER_ERROR,
                   GTK_BUILDER_ERROR_INVALID_ID,
                   "Widget with target_id='%s' could not be found",
                   target_id);
      return;
    }

  priv->target = (GtkWidget *)target;

  if (*original_id != '\0')
    gtk_builder_expose_object(priv->builder, original_id, target);

  if (!GTK_IS_ROOT (target))
    {
      GtkWindow *window = NULL;

      window = workbench_dbus_previewer_real_ensure_window (self,
                                                            DEFAULT_WINDOW_WIDTH,
                                                            DEFAULT_WINDOW_HEIGHT);
      gtk_window_set_child (window, GTK_WIDGET (target));
      return;
    }

  /* If the target is a new window type, set it directly */
  if (priv->window == NULL ||
      G_TYPE_FROM_INSTANCE (priv->window) != G_TYPE_FROM_INSTANCE (target))
    {
      workbench_dbus_previewer_set_window (self, GTK_WINDOW (target));
      return;
    }

  if (ADW_IS_WINDOW (target))
    {
      child = adw_window_get_content (ADW_WINDOW (target));
      adw_window_set_content (ADW_WINDOW (target), NULL);
      adw_window_set_content (ADW_WINDOW (priv->window), child);
    }
  else if (ADW_IS_APPLICATION_WINDOW (target))
    {
      child = adw_application_window_get_content (ADW_APPLICATION_WINDOW (target));
      adw_application_window_set_content (ADW_APPLICATION_WINDOW (target), NULL);
      adw_application_window_set_content (ADW_APPLICATION_WINDOW (priv->window), child);
    }
  else if (GTK_IS_WINDOW (target))
    {
      child = gtk_window_get_child (GTK_WINDOW (target));
      gtk_window_set_child (GTK_WINDOW (target), NULL);
      gtk_window_set_child (GTK_WINDOW (priv->window), child);
    }
  else
    {
      g_set_error (error,
                   GTK_BUILDER_ERROR,
                   GTK_BUILDER_ERROR_INVALID_ID,
                   "Widget with target_id='%s' is not a supported window type",
                   target_id);
      return;
    }

  /* Toplevel windows returned by these functions will stay around
   * until the user explicitly destroys them with gtk_window_destroy().
   *
   * See: https://docs.gtk.org/gtk4/class.Builder.html
   */
  if (GTK_IS_WINDOW (target))
    gtk_window_destroy (GTK_WINDOW (target));
}

/*
 * GObject
 */
static void
workbench_dbus_previewer_constructed (GObject *object)
{
  /* WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (object); */

  G_OBJECT_CLASS (workbench_dbus_previewer_parent_class)->constructed (object);
}

static void
workbench_dbus_previewer_dispose (GObject *object)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (object);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);

  if (priv->window != NULL)
    {
      g_signal_handlers_disconnect_by_data (priv->window, self);
      g_clear_pointer (&priv->window, gtk_window_destroy);
    }

  g_clear_object (&priv->builder);
  g_clear_object (&priv->css);
  g_clear_error (&priv->css_error);
  g_clear_handle_id (&priv->flush_id, g_source_remove);

  G_OBJECT_CLASS (workbench_dbus_previewer_parent_class)->dispose (object);
}

static void
workbench_dbus_previewer_finalize (GObject *object)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (object);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);

  g_clear_pointer (&priv->actions, g_hash_table_unref);
  g_clear_pointer (&priv->cache, g_hash_table_unref);
  g_clear_pointer (&priv->pending, g_hash_table_unref);

  G_OBJECT_CLASS (workbench_dbus_previewer_parent_class)->finalize (object);
}

static void
workbench_dbus_previewer_get_property (GObject    *object,
                                       guint       prop_id,
                                       GValue     *value,
                                       GParamSpec *pspec)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (object);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);

  switch (prop_id)
    {
    case PROP_BUILDER:
      g_value_set_object (value, priv->builder);
      break;

    case PROP_COLOR_SCHEME:
      g_value_set_enum (value, priv->color_scheme);
      break;

    case PROP_VISIBLE:
      g_value_set_boolean (value, priv->visible);
      break;

    case PROP_WINDOW:
      g_value_set_object (value, priv->window);
      break;

    default:
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, prop_id, pspec);
    }
}

static void
workbench_dbus_previewer_set_property (GObject      *object,
                                       guint         prop_id,
                                       const GValue *value,
                                       GParamSpec   *pspec)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (object);

  switch (prop_id)
    {
    case PROP_BUILDER:
      workbench_dbus_previewer_set_builder (self, g_value_get_object (value));
      break;

    case PROP_COLOR_SCHEME:
      workbench_dbus_previewer_set_color_scheme (self, g_value_get_enum (value));
      break;

    case PROP_VISIBLE:
      workbench_dbus_previewer_set_visible (self, g_value_get_boolean (value));
      break;

    case PROP_WINDOW:
      workbench_dbus_previewer_set_window (self, g_value_get_object (value));
      break;

    default:
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, prop_id, pspec);
    }
}

static void
workbench_dbus_previewer_notify (GObject    *object,
                                 GParamSpec *pspec)
{
  WorkbenchDBusPreviewer *self = WORKBENCH_DBUS_PREVIEWER (object);
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);
  g_autoptr (GVariant) value = NULL;
  const char *name = NULL;

  g_assert (WORKBENCH_IS_DBUS_PREVIEWER (self));

  name = g_param_spec_get_name (pspec);

  if (g_str_equal (name, "color-scheme"))
    {
      name = "ColorScheme";
      value = g_variant_new_int32 (priv->color_scheme);
    }
  else if (g_str_equal (name, "inspector"))
    {
      name = "Inspector";
      value = g_variant_new_boolean (priv->inspector);
    }
  else if (g_str_equal (name, "visible"))
    {
      name = "Visible";
      value = g_variant_new_boolean (priv->visible);
    }
  else
    {
      // Not a D-Bus property
      return;
    }

  g_hash_table_replace (priv->cache,
                        g_strdup (name),
                        g_variant_ref_sink (value));
  g_hash_table_replace (priv->pending,
                        g_strdup (name),
                        g_variant_ref_sink (value));

  if (priv->flush_id == 0)
    priv->flush_id = g_idle_add (flush_idle, self);
}

void
workbench_dbus_previewer_class_init (WorkbenchDBusPreviewerClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);
  GDBusInterfaceSkeletonClass *skeleton_class = G_DBUS_INTERFACE_SKELETON_CLASS (klass);

  object_class->constructed = workbench_dbus_previewer_constructed;
  object_class->dispose = workbench_dbus_previewer_dispose;
  object_class->finalize = workbench_dbus_previewer_finalize;
  object_class->get_property = workbench_dbus_previewer_get_property;
  object_class->set_property = workbench_dbus_previewer_set_property;
  object_class->notify = workbench_dbus_previewer_notify;

  skeleton_class->get_info = workbench_dbus_previewer_get_info;
  skeleton_class->get_vtable = workbench_dbus_previewer_get_vtable;
  skeleton_class->get_properties = workbench_dbus_previewer_get_properties;
  skeleton_class->flush = workbench_dbus_previewer_flush;

  klass->present = workbench_dbus_previewer_real_present;
  klass->run = workbench_dbus_previewer_real_run;
  klass->screenshot = workbench_dbus_previewer_real_screenshot;
  klass->update_css = workbench_dbus_previewer_real_update_css;
  klass->update_ui = workbench_dbus_previewer_real_update_ui;

  /**
   * WorkbenchDBusPreviewer:builder: (getter get_builder) (setter set_builder)
   *
   * The [class@Gtk.Builder] for the previewer.
   */
  properties[PROP_BUILDER] =
    g_param_spec_object ("builder", NULL, NULL,
                         GTK_TYPE_BUILDER,
                         (G_PARAM_READWRITE |
                          G_PARAM_EXPLICIT_NOTIFY |
                          G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchDBusPreviewer:color-scheme: (getter get_color_scheme) (setter set_color_scheme)
   *
   * The [enum@Adw.ColorScheme] used by the previewer.
   */
  properties[PROP_COLOR_SCHEME] =
    g_param_spec_enum ("color-scheme", NULL, NULL,
                       ADW_TYPE_COLOR_SCHEME,
                       ADW_COLOR_SCHEME_DEFAULT,
                       (G_PARAM_READWRITE |
                        G_PARAM_EXPLICIT_NOTIFY |
                        G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchDBusPreviewer:inspector: (getter get_inspector) (setter set_inspector)
   *
   * Whether the GTK Inspector is open.
   */
  properties[PROP_INSPECTOR] =
    g_param_spec_boolean ("inspector", NULL, NULL,
                          FALSE,
                          (G_PARAM_READWRITE |
                           G_PARAM_EXPLICIT_NOTIFY |
                           G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchDBusPreviewer:visible: (getter get_visible) (setter set_visible)
   *
   * Whether the preview window is open.
   */
  properties[PROP_VISIBLE] =
    g_param_spec_boolean ("visible", NULL, NULL,
                          FALSE,
                          (G_PARAM_READWRITE |
                           G_PARAM_EXPLICIT_NOTIFY |
                           G_PARAM_STATIC_STRINGS));

  /**
   * WorkbenchDBusPreviewer:window: (getter get_window) (setter set_window)
   *
   * The [class@Gtk.Window] for the previewer.
   */
  properties[PROP_WINDOW] =
    g_param_spec_object ("window", NULL, NULL,
                         GTK_TYPE_WINDOW,
                         (G_PARAM_READWRITE |
                          G_PARAM_EXPLICIT_NOTIFY |
                          G_PARAM_STATIC_STRINGS));

  g_object_class_install_properties (object_class, N_PROPERTIES, properties);

  previewer_node_info = g_dbus_node_info_new_for_xml (previewer_node_xml, NULL);
  previewer_iface_info = g_dbus_node_info_lookup_interface (previewer_node_info,
                                                            DBUS_INTERFACE);
  g_dbus_interface_info_cache_build (previewer_iface_info);
}

static void
workbench_dbus_previewer_init (WorkbenchDBusPreviewer *self)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (self);

  priv->actions = g_hash_table_new_full (g_str_hash,
                                         g_str_equal,
                                         g_free,
                                         g_object_unref);

  /* Initialize properties and prepare a cache */
  priv->cache = g_hash_table_new_full (g_str_hash,
                                       g_str_equal,
                                       g_free,
                                       (GDestroyNotify)g_variant_unref);
  priv->pending = g_hash_table_new_full (g_str_hash,
                                         g_str_equal,
                                         g_free,
                                         (GDestroyNotify)g_variant_unref);

  g_hash_table_insert (priv->cache,
                       g_strdup ("ColorScheme"),
                       g_variant_ref_sink (g_variant_new_int32 (0)));
  g_hash_table_insert (priv->cache,
                       g_strdup ("Inspector"),
                       g_variant_ref_sink (g_variant_new_int32 (FALSE)));
  g_hash_table_insert (priv->cache,
                       g_strdup ("Visible"),
                       g_variant_ref_sink (g_variant_new_int32 (FALSE)));

  /* Bind to the global style manager */
  g_object_bind_property (self,                             "color-scheme",
                          adw_style_manager_get_default (), "color-scheme",
                          G_BINDING_SYNC_CREATE);
}

/**
 * workbench_dbus_previewer_get_builder: (get-property builder)
 * @previewer: a `WorkbenchDBusPreviewer`
 *
 * Get the [class@Gtk.Builder] for the preview.
 *
 * Returns: (transfer none) (nullable): a `GtkBuilder`
 */
GtkBuilder *
workbench_dbus_previewer_get_builder (WorkbenchDBusPreviewer *previewer)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_val_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer), NULL);

  return priv->builder;
}

/**
 * workbench_dbus_previewer_set_builder: (set-property builder)
 * @previewer: a `WorkbenchDBusPreviewer`
 * @builder: an `GtkBuilder`
 *
 * Set the [class@Gtk.Builder] for the preview.
 */
void
workbench_dbus_previewer_set_builder (WorkbenchDBusPreviewer *previewer,
                                      GtkBuilder             *builder)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer));
  g_return_if_fail (builder == NULL || GTK_IS_BUILDER (builder));

  if (g_set_object (&priv->builder, builder))
    g_object_notify_by_pspec (G_OBJECT (previewer), properties [PROP_WINDOW]);
}

/**
 * workbench_dbus_previewer_get_color_scheme: (get-property color-scheme)
 * @previewer: a `WorkbenchDBusPreviewer`
 *
 * Get the [enum@Adw.ColorScheme] for the preview.
 *
 * Returns: an `AdwColorScheme`
 */
AdwColorScheme
workbench_dbus_previewer_get_color_scheme (WorkbenchDBusPreviewer *previewer)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_val_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer), ADW_COLOR_SCHEME_DEFAULT);

  return priv->color_scheme;
}

/**
 * workbench_dbus_previewer_set_color_scheme: (set-property color-scheme)
 * @previewer: a `WorkbenchDBusPreviewer`
 * @color_scheme: an `Adw.ColorScheme`
 *
 * Set the [enum@Adw.ColorScheme] for the preview.
 */
void
workbench_dbus_previewer_set_color_scheme (WorkbenchDBusPreviewer *previewer,
                                           AdwColorScheme          color_scheme)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer));

  if (priv->color_scheme != color_scheme)
    {
      priv->color_scheme = color_scheme;
      g_object_notify_by_pspec (G_OBJECT (previewer),
                                properties [PROP_COLOR_SCHEME]);
    }
}

/**
 * workbench_dbus_previewer_get_inspector: (get-property inspector)
 * @previewer: a `WorkbenchDBusPreviewer`
 *
 * Get whether the GTK Inspector is open or closed.
 *
 * Returns: %TRUE if the inspector is open, or %FALSE if closed
 */
gboolean
workbench_dbus_previewer_get_inspector (WorkbenchDBusPreviewer *previewer)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_val_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer), FALSE);

  return priv->inspector;
}

/**
 * workbench_dbus_previewer_set_inspector: (set-property inspector)
 * @previewer: a `WorkbenchDBusPreviewer`
 * @enabled: %TRUE to open the inspector, or %FALSE to close
 *
 * Open or close the GTK Inspector.
 */
void
workbench_dbus_previewer_set_inspector (WorkbenchDBusPreviewer *previewer,
                                        gboolean                enabled)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer));

  enabled = !!enabled;

  if (priv->inspector != enabled)
    {
      priv->inspector = enabled;
      g_object_notify_by_pspec (G_OBJECT (previewer), properties [PROP_INSPECTOR]);
    }

  // TODO: the inspector window is not being tracked, so accept the caller's
  //       assumption its state is not what is
  gtk_window_set_interactive_debugging (enabled);
}

/**
 * workbench_dbus_previewer_get_visible: (get-property visible)
 * @previewer: a `WorkbenchDBusPreviewer`
 *
 * Get whether the preview window is open or closed.
 *
 * Returns: %TRUE if the preview window is open, or %FALSE if closed
 */
gboolean
workbench_dbus_previewer_get_visible (WorkbenchDBusPreviewer *previewer)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_val_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer), FALSE);

  return priv->visible;
}

/**
 * workbench_dbus_previewer_set_visible: (set-property visible)
 * @previewer: a `WorkbenchDBusPreviewer`
 * @visible: %TRUE to open the preview window, or %FALSE to close
 *
 * Open or close the preview window.
 */
void
workbench_dbus_previewer_set_visible (WorkbenchDBusPreviewer *previewer,
                                      gboolean                visible)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);
  WorkbenchDBusPreviewerClass *klass = WORKBENCH_DBUS_PREVIEWER_CLASS (previewer);

  g_return_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer));

  visible = !!visible;

  if (priv->visible != visible)
    {
      if (priv->window != NULL && visible)
        klass->present (previewer, 640, 480);
      else if (priv->window != NULL)
        gtk_window_close (priv->window);

      priv->visible = visible;
      g_object_notify_by_pspec (G_OBJECT (previewer),
                                properties [PROP_VISIBLE]);
    }
}

/**
 * workbench_dbus_previewer_get_window: (get-property window)
 * @previewer: a `WorkbenchDBusPreviewer`
 *
 * Get the [class@Gtk.Window] for the preview.
 *
 * Returns: (transfer none) (not nullable): a `GtkWindow`
 */
GtkWindow *
workbench_dbus_previewer_get_window (WorkbenchDBusPreviewer *previewer)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_val_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer), NULL);

  return priv->window;
}

/**
 * workbench_dbus_previewer_set_window: (set-property window)
 * @previewer: a `WorkbenchDBusPreviewer`
 * @window: an `GtkWindow`
 *
 * Set the [class@Gtk.Window] for the preview.
 */
void
workbench_dbus_previewer_set_window (WorkbenchDBusPreviewer *previewer,
                                     GtkWindow              *window)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);

  g_return_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer));

  if (priv->window == window && window == NULL)
    return;

  if (priv->window != NULL)
    {
      g_signal_handlers_disconnect_by_data (previewer, priv->window);
      g_clear_pointer (&priv->window, gtk_window_destroy);
    }

  if (window != NULL)
    {
      priv->window = g_object_ref (window);
      g_signal_connect_object (priv->window,
                               "close-request",
                               G_CALLBACK (on_close_request),
                               previewer, 0);
    }

  g_object_notify_by_pspec (G_OBJECT (previewer), properties [PROP_WINDOW]);
}

/**
 * workbench_dbus_previewer_export_preview:
 * @previewer: a `WorkbenchDBusPreviewer`
 * @connection: a `GDBusConnection`
 * @object_path: a D-Bus object path
 * @error: (nullable): a `GError`
 *
 * Export the previewer on D-Bus.
 *
 * Returns: %TRUE, or %FALSE with @error set
 */
gboolean
workbench_dbus_previewer_export_preview (WorkbenchDBusPreviewer  *previewer,
                                         GDBusConnection         *connection,
                                         const char              *object_path,
                                         GError                 **error)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);
  GDBusInterfaceSkeleton *iface = G_DBUS_INTERFACE_SKELETON (previewer);
  GActionGroup *action_group = G_ACTION_GROUP (previewer);
  GDBusConnection *exported = NULL;

  g_return_val_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer), FALSE);
  g_return_val_if_fail (G_IS_DBUS_CONNECTION (connection), FALSE);
  g_return_val_if_fail (g_variant_is_object_path (object_path), FALSE);
  g_return_val_if_fail (error == NULL || *error == NULL, FALSE);

  if ((exported = g_dbus_interface_skeleton_get_connection (iface)) == NULL)
    return TRUE;

  priv->actions_id = g_dbus_connection_export_action_group (connection,
                                                            object_path,
                                                            action_group,
                                                            error);

  if (priv->actions_id == 0)
    return FALSE;

  if (!g_dbus_interface_skeleton_export (iface, connection, object_path, error))
    {
      g_dbus_connection_unexport_action_group (connection, priv->actions_id);
      priv->actions_id = 0;
    }

  return TRUE;
}

/**
 * workbench_dbus_previewer_unexport_preview:
 * @previewer: a `WorkbenchDBusPreviewer`
 *
 * Export the previewer on D-Bus.
 *
 * Returns: %TRUE, or %FALSE with @error set
 */
void
workbench_dbus_previewer_unexport_preview (WorkbenchDBusPreviewer *previewer)
{
  WorkbenchDBusPreviewerPrivate *priv = workbench_dbus_previewer_get_instance_private (previewer);
  GDBusInterfaceSkeleton *iface = G_DBUS_INTERFACE_SKELETON (previewer);
  GDBusConnection *exported = NULL;

  g_return_if_fail (WORKBENCH_IS_DBUS_PREVIEWER (previewer));

  if ((exported = g_dbus_interface_skeleton_get_connection (iface)) == NULL)
    return;

  if (priv->actions_id != 0)
    {
      g_dbus_connection_unexport_action_group (exported, priv->actions_id);
      priv->actions_id = 0;
    }

  g_dbus_interface_skeleton_unexport_from_connection (iface, exported);
}
