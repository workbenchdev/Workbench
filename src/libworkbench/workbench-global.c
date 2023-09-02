// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#include <glib.h>

#include "workbench-global.h"


/*
 * Silenced log messages
 */
struct
{
  const char     *log_domain;
  GLogLevelFlags  log_level;
  const char     *message;
} ignored_messages[] = {
    /* GDK4 */
    {
      "Gdk",
      G_LOG_LEVEL_CRITICAL,
      "gdk_scroll_event_get_direction: assertion 'GDK_IS_EVENT_TYPE (event, GDK_SCROLL)' failed",
    },
    {
      "Gdk",
      G_LOG_LEVEL_CRITICAL,
      "gdk_scroll_event_get_direction: assertion 'GDK_IS_EVENT (event)' failed",
    },

    /* GTK4 */
    {
      "Gtk",
      G_LOG_LEVEL_CRITICAL,
      "Unable to connect to the accessibility bus at 'unix:path=/run/flatpak/at-spi-bus': Could not connect: No such file or directory",
    },

    /* Adwaita */
    {
      "Adwaita",
      G_LOG_LEVEL_WARNING,
      "Using GtkSettings:gtk-application-prefer-dark-theme with libadwaita is unsupported. Please use AdwStyleManager:color-scheme instead.",
    },

    /* GVFS */
    {
      "GVFS",
      G_LOG_LEVEL_WARNING,
      "The peer-to-peer connection failed: Error when getting information for file “/run/user/1000/gvfsd”: No such file or directory. Falling back to the session bus. Your application is probably missing --filesystem=xdg-run/gvfsd privileges.",
    },
};

static inline gboolean
workbench_log_ignore (const char     *log_domain,
                      GLogLevelFlags  log_level,
                      const char     *message)
{
  if G_UNLIKELY (log_domain == NULL || message == NULL)
    return FALSE;

  for (unsigned int i = 0; i < G_N_ELEMENTS (ignored_messages); i++)
    {
      if (ignored_messages[i].log_level == log_level &&
          g_str_equal (ignored_messages[i].log_domain, log_domain) &&
          g_str_equal (ignored_messages[i].message, message))
        return TRUE;
    }

  return FALSE;
}

static GLogWriterOutput
workbench_log_writer (GLogLevelFlags   log_level,
                      const GLogField *fields,
                      gsize            n_fields,
                      gpointer         user_data)
{
  const char *log_domain = NULL;
  const char *message = NULL;

  /* Respect default handling of log levels and domains */
  if (g_log_writer_default_would_drop (log_level, log_domain))
    return G_LOG_WRITER_HANDLED;

  /* Silence specific messages */
  for (gsize i = 0; i < n_fields; i++)
    {
      GLogField field = fields[i];

      if (g_str_equal (field.key, "GLIB_DOMAIN"))
        log_domain = field.value;
      else if (g_str_equal (field.key, "MESSAGE"))
        message = field.value;

      if (log_domain != NULL && message != NULL)
        break;
    }

  if (workbench_log_ignore (log_domain, log_level, message))
    return G_LOG_WRITER_HANDLED;

  return g_log_writer_standard_streams (log_level, fields, n_fields, user_data);
}


/**
 * workbench_init:
 *
 * Initialize the internal library for Workbench.
 */
void
workbench_init (void)
{
  gsize initialized = 0;

  if (g_once_init_enter (&initialized))
    {
      g_log_set_writer_func (workbench_log_writer, NULL, NULL);
      g_once_init_leave (&initialized, TRUE);
    }
}
