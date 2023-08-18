import Adw from "gi://Adw";
import Gio from "gi://Gio";

const memory_monitor = Gio.MemoryMonitor.dup_default();

const cache = new Map();
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);

memory_monitor.connect("low-memory-warning", (monitor, level) => {
  if (level >= Gio.MemoryMonitorWarningLevel.LOW) {
    // Processes should free up unneeded resources
    console.log("Warning Level: Low");
    drop_caches();
  } else if (level >= Gio.MemoryMonitorWarningLevel.MEDIUM) {
    // Processes should try harder to free up unneeded resources
    console.log("Warning Level: Medium");
  } else if (level >= Gio.MemoryMonitorWarningLevel.CRITICAL) {
    // system will start terminating processes to reclaim memory
    console.log("Warning Level: Critical");
  }
});

function drop_caches() {
  cache.clear();
}
