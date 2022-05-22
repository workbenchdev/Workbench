**Logs**

To view all logs, set the following in the file `workbench`

```sh
SHELL=/bin/sh script --flush --quiet --return /var/tmp/workbench --command "G_MESSAGES_DEBUG=\"Gjs-Console Workbench\" re.sonny.Workbench $@"
```

**Blueprint**

You can read Blueprint languge server logs with

```sh
tail -f ~/.var/app/re.sonny.Workbench/data/re.sonny.Workbench/blueprint-logs
```
