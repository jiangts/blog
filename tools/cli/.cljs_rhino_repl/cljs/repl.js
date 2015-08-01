// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3623_3635 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3624_3636 = null;
var count__3625_3637 = (0);
var i__3626_3638 = (0);
while(true){
if((i__3626_3638 < count__3625_3637)){
var f_3639 = cljs.core._nth.call(null,chunk__3624_3636,i__3626_3638);
cljs.core.println.call(null,"  ",f_3639);

var G__3640 = seq__3623_3635;
var G__3641 = chunk__3624_3636;
var G__3642 = count__3625_3637;
var G__3643 = (i__3626_3638 + (1));
seq__3623_3635 = G__3640;
chunk__3624_3636 = G__3641;
count__3625_3637 = G__3642;
i__3626_3638 = G__3643;
continue;
} else {
var temp__4425__auto___3644 = cljs.core.seq.call(null,seq__3623_3635);
if(temp__4425__auto___3644){
var seq__3623_3645__$1 = temp__4425__auto___3644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3623_3645__$1)){
var c__4254__auto___3646 = cljs.core.chunk_first.call(null,seq__3623_3645__$1);
var G__3647 = cljs.core.chunk_rest.call(null,seq__3623_3645__$1);
var G__3648 = c__4254__auto___3646;
var G__3649 = cljs.core.count.call(null,c__4254__auto___3646);
var G__3650 = (0);
seq__3623_3635 = G__3647;
chunk__3624_3636 = G__3648;
count__3625_3637 = G__3649;
i__3626_3638 = G__3650;
continue;
} else {
var f_3651 = cljs.core.first.call(null,seq__3623_3645__$1);
cljs.core.println.call(null,"  ",f_3651);

var G__3652 = cljs.core.next.call(null,seq__3623_3645__$1);
var G__3653 = null;
var G__3654 = (0);
var G__3655 = (0);
seq__3623_3635 = G__3652;
chunk__3624_3636 = G__3653;
count__3625_3637 = G__3654;
i__3626_3638 = G__3655;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__3885__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3885__auto__)){
return or__3885__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3628 = null;
var count__3629 = (0);
var i__3630 = (0);
while(true){
if((i__3630 < count__3629)){
var vec__3631 = cljs.core._nth.call(null,chunk__3628,i__3630);
var name = cljs.core.nth.call(null,vec__3631,(0),null);
var map__3632 = cljs.core.nth.call(null,vec__3631,(1),null);
var map__3632__$1 = ((cljs.core.seq_QMARK_.call(null,map__3632))?cljs.core.apply.call(null,cljs.core.hash_map,map__3632):map__3632);
var doc = cljs.core.get.call(null,map__3632__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__3632__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__3656 = seq__3627;
var G__3657 = chunk__3628;
var G__3658 = count__3629;
var G__3659 = (i__3630 + (1));
seq__3627 = G__3656;
chunk__3628 = G__3657;
count__3629 = G__3658;
i__3630 = G__3659;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__3627);
if(temp__4425__auto__){
var seq__3627__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3627__$1)){
var c__4254__auto__ = cljs.core.chunk_first.call(null,seq__3627__$1);
var G__3660 = cljs.core.chunk_rest.call(null,seq__3627__$1);
var G__3661 = c__4254__auto__;
var G__3662 = cljs.core.count.call(null,c__4254__auto__);
var G__3663 = (0);
seq__3627 = G__3660;
chunk__3628 = G__3661;
count__3629 = G__3662;
i__3630 = G__3663;
continue;
} else {
var vec__3633 = cljs.core.first.call(null,seq__3627__$1);
var name = cljs.core.nth.call(null,vec__3633,(0),null);
var map__3634 = cljs.core.nth.call(null,vec__3633,(1),null);
var map__3634__$1 = ((cljs.core.seq_QMARK_.call(null,map__3634))?cljs.core.apply.call(null,cljs.core.hash_map,map__3634):map__3634);
var doc = cljs.core.get.call(null,map__3634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__3634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__3664 = cljs.core.next.call(null,seq__3627__$1);
var G__3665 = null;
var G__3666 = (0);
var G__3667 = (0);
seq__3627 = G__3664;
chunk__3628 = G__3665;
count__3629 = G__3666;
i__3630 = G__3667;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map