// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cli.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
cli.core.fs = require("fs-extra");
cli.core.fs.readdirSync(".");

//# sourceMappingURL=core.js.map