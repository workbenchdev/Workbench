#!/usr/bin/env gjs

const {Gtk} = imports.gi;
const DatePickerDemo = require('./main.js').DatePickerDemo;

Gtk.init(null);

const app = new DatePickerDemo();
app.present();
Gtk.main();
