// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cli.core');
goog.require('cljs.core');
goog.require('cljs_time.core');
cljs.core.enable_console_print_BANG_.call(null);
cli.core.fs = require("fs-extra");
cli.core.fs.readdirSync(".");
cli.core._main = (function cli$core$_main(){
var argseq__4397__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cli.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4397__auto__);
});

cli.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"Hello again");
});

cli.core._main.cljs$lang$maxFixedArity = (0);

cli.core._main.cljs$lang$applyTo = (function (seq3837){
return cli.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3837));
});
cljs.core._STAR_main_cli_fn_STAR_ = cli.core._main;

//# sourceMappingURL=core.js.map