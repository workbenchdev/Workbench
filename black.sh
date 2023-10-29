#!/usr/bin/env bash
# This is a small wrapper around black - the Python code formatter.
# The script will setup and activate a virtual env in .venv if black is not
# found in PATH.
#
# Still requires Python 3.
set -e

if ! which black &>/dev/null; then
  if [ ! -d ".venv" ]; then
    echo "Note: black was not found on your system. A virtualenv is created in .venv."
    python3 -m venv .venv
  fi
  source .venv/bin/activate
  if ! which black &>/dev/null; then
    pip3 install black
  fi
fi

exec black "$@"
