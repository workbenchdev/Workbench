#!/bin/sh

cd $MESON_SOURCE_ROOT/src || exit
find . -path './Library/demos/*' -name '*.blp'
