// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
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
var seq__1877_1889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1878_1890 = null;
var count__1879_1891 = (0);
var i__1880_1892 = (0);
while(true){
if((i__1880_1892 < count__1879_1891)){
var f_1893 = cljs.core._nth.call(null,chunk__1878_1890,i__1880_1892);
cljs.core.println.call(null,"  ",f_1893);

var G__1894 = seq__1877_1889;
var G__1895 = chunk__1878_1890;
var G__1896 = count__1879_1891;
var G__1897 = (i__1880_1892 + (1));
seq__1877_1889 = G__1894;
chunk__1878_1890 = G__1895;
count__1879_1891 = G__1896;
i__1880_1892 = G__1897;
continue;
} else {
var temp__4425__auto___1898 = cljs.core.seq.call(null,seq__1877_1889);
if(temp__4425__auto___1898){
var seq__1877_1899__$1 = temp__4425__auto___1898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1877_1899__$1)){
var c__4254__auto___1900 = cljs.core.chunk_first.call(null,seq__1877_1899__$1);
var G__1901 = cljs.core.chunk_rest.call(null,seq__1877_1899__$1);
var G__1902 = c__4254__auto___1900;
var G__1903 = cljs.core.count.call(null,c__4254__auto___1900);
var G__1904 = (0);
seq__1877_1889 = G__1901;
chunk__1878_1890 = G__1902;
count__1879_1891 = G__1903;
i__1880_1892 = G__1904;
continue;
} else {
var f_1905 = cljs.core.first.call(null,seq__1877_1899__$1);
cljs.core.println.call(null,"  ",f_1905);

var G__1906 = cljs.core.next.call(null,seq__1877_1899__$1);
var G__1907 = null;
var G__1908 = (0);
var G__1909 = (0);
seq__1877_1889 = G__1906;
chunk__1878_1890 = G__1907;
count__1879_1891 = G__1908;
i__1880_1892 = G__1909;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1910 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3885__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3885__auto__)){
return or__3885__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1910);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1910)))?cljs.core.second.call(null,arglists_1910):arglists_1910));
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
var seq__1881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1882 = null;
var count__1883 = (0);
var i__1884 = (0);
while(true){
if((i__1884 < count__1883)){
var vec__1885 = cljs.core._nth.call(null,chunk__1882,i__1884);
var name = cljs.core.nth.call(null,vec__1885,(0),null);
var map__1886 = cljs.core.nth.call(null,vec__1885,(1),null);
var map__1886__$1 = ((cljs.core.seq_QMARK_.call(null,map__1886))?cljs.core.apply.call(null,cljs.core.hash_map,map__1886):map__1886);
var doc = cljs.core.get.call(null,map__1886__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1886__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1911 = seq__1881;
var G__1912 = chunk__1882;
var G__1913 = count__1883;
var G__1914 = (i__1884 + (1));
seq__1881 = G__1911;
chunk__1882 = G__1912;
count__1883 = G__1913;
i__1884 = G__1914;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1881);
if(temp__4425__auto__){
var seq__1881__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881__$1)){
var c__4254__auto__ = cljs.core.chunk_first.call(null,seq__1881__$1);
var G__1915 = cljs.core.chunk_rest.call(null,seq__1881__$1);
var G__1916 = c__4254__auto__;
var G__1917 = cljs.core.count.call(null,c__4254__auto__);
var G__1918 = (0);
seq__1881 = G__1915;
chunk__1882 = G__1916;
count__1883 = G__1917;
i__1884 = G__1918;
continue;
} else {
var vec__1887 = cljs.core.first.call(null,seq__1881__$1);
var name = cljs.core.nth.call(null,vec__1887,(0),null);
var map__1888 = cljs.core.nth.call(null,vec__1887,(1),null);
var map__1888__$1 = ((cljs.core.seq_QMARK_.call(null,map__1888))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888):map__1888);
var doc = cljs.core.get.call(null,map__1888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1888__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1919 = cljs.core.next.call(null,seq__1881__$1);
var G__1920 = null;
var G__1921 = (0);
var G__1922 = (0);
seq__1881 = G__1919;
chunk__1882 = G__1920;
count__1883 = G__1921;
i__1884 = G__1922;
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