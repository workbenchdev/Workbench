// SPDX-License-Identifier: GPL-3.0-only
// SPDX-FileCopyrightText: Workbench Contributors
// SPDX-FileContributor: Andy Holmes <andyholmes@gnome.org>

#pragma once

#if !defined (WORKBENCH_INSIDE) && !defined (WORKBENCH_COMPILATION)
# error "Only <workbench.h> can be included directly."
#endif

#include <glib.h>

G_BEGIN_DECLS

#ifdef _WORKBENCH_EXTERN
#define WORKBENCH_EXPORT _WORKBENCH_EXTERN
#else
#define WORKBENCH_EXPORT extern
#endif

G_END_DECLS
