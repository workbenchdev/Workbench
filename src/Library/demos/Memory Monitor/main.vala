#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private HashTable<string, int?> cache;

public void main () {
  cache = new HashTable<string, int?> (string.hash, str_equal);
  cache["a"] = 1;
  cache["b"] = 2;
  cache["c"] = 3;

  var memory_monitor = MemoryMonitor.dup_default ();
  memory_monitor.low_memory_warning.connect ((level) => {
    /*
     * Use inequalities for checking as new levels may be added in the future
     * See https://valadoc.org/gio-2.0/GLib.MemoryMonitorWarningLevel.html
     */
    if (level >= MemoryMonitorWarningLevel.LOW) {
      // Processes should free up unneeded resources
      message ("Warning Level: Low");
      drop_caches ();
    }

    if (level >= MemoryMonitorWarningLevel.MEDIUM) {
      // Processes should try harder to free unneeded resources
      message ("Warning Level: Medium");
    }

    if (level >= MemoryMonitorWarningLevel.CRITICAL) {
      // The system will start terminating processes to reclaim memory
      message ("Warning Level: Critical");
    }
  });
}

private void drop_caches () {
  cache.remove_all ();
}
