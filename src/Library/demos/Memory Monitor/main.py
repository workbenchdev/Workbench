import gi

from gi.repository import Gio

memory_monitor = Gio.MemoryMonitor.dup_default()

cache = {}
cache["a"] = 1
cache["b"] = 2
cache["c"] = 3


def evaluate_memory(monitor, level):
    # Use inequalities for checking as new levels may be added in the future
    if level >= Gio.MemoryMonitorWarningLevel.LOW:
        # Processes should free up unneeded resources
        print("Warning Level: Low")
        drop_caches()
    if level >= Gio.MemoryMonitorWarningLevel.MEDIUM:
        # Processes should try harder to free up unneeded resources
        print("Warning Level: Medium")
    if level >= Gio.MemoryMonitorWarningLevel.CRITICAL:
        # system will start terminating processes to reclaim memory
        print("Warning Level: Critical")


memory_monitor.connect("low-memory-warning", evaluate_memory)


def drop_caches():
    cache.clear()
