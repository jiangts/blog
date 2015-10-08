// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cli.core');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cli.core.fs = require("fs-extra");
cli.core.program = require("commander");
cli.core.today = (function cli$core$today(){
var argseq__4397__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cli.core.today.cljs$core$IFn$_invoke$arity$variadic(argseq__4397__auto__);
});

cli.core.today.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.juxt,args).call(null,cljs_time.core.today.call(null));
});

cli.core.today.cljs$lang$maxFixedArity = (0);

cli.core.today.cljs$lang$applyTo = (function (seq3606){
return cli.core.today.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3606));
});
cli.core.today_str = (function cli$core$today_str(){
return clojure.string.join.call(null,"-",cli.core.today.call(null,cljs_time.core.year,cljs_time.core.month,cljs_time.core.day));
});
cli.core.today_str.call(null);
cli.core._main = (function cli$core$_main(){
var argseq__4397__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cli.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4397__auto__);
});

cli.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"Hello World");

cljs.core.println.call(null,"Today is",cli.core.today_str.call(null));

return cli.core.program.version("0.0.1").option("-p, --peppers","Add Peppers").parse(process.argv);
});

cli.core._main.cljs$lang$maxFixedArity = (0);

cli.core._main.cljs$lang$applyTo = (function (seq3607){
return cli.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3607));
});
cljs.core._STAR_main_cli_fn_STAR_ = cli.core._main;

//# sourceMappingURL=core.js.map