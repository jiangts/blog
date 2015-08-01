{:title "ClojureScript Node.js vim repl"
 :layout :post
 :tags  ["ClojureScript"]}

There are lots of great "plug-and-play" setups for ClojureScript in the browser,
like Figwheel and Chestnut. However, getting a good REPL environment for
ClojureScript targeting Node.js seemed quite under-documented. After consulting
numerous resources (many of which, uh, how should I say, may or may not have
been really outdated), here's how I did it:

1. Get a starter ClojureScript Project
```
$ lein new mies replicious
```
2. Follow basic directions in the README.md
  - in particular, run `lein npm install`
  - also just a note: if you try to run `./scripts/repl` as advertised in the
      README it won't work! To fix it, you need to alter the
      `./scripts/repl.clj` file by changing the function call from `(repl/repl*
      ...)` to `(repl/repl ...)`.
3. Include Cemerick's [piggieback](https://github.com/cemerick/piggieback)
  - Add this snippet to your `project.clj`
  ```
:profiles  {:dev  {:dependencies  [[com.cemerick/piggieback "0.2.1"]
                                     [org.clojure/tools.nrepl "0.2.10"]]
                     :repl-options  {:nrepl-middleware  [cemerick.piggieback/wrap-cljs-repl]}}}
  ```
4. In the repl, do the following:
```
$ lein repl
...
user=> (require '[cljs.repl.node :as node])
nil
```
5. In fireplace, run
```
:Piggieback (node/repl-env)
```
6. Try it out!
  - One last roadblock I encountered was the issue described
      [here](https://github.com/tpope/vim-fireplace/issues/220).
  - I fixed it by simply updating to the latest version of fireplace :) (almost
      too easy!).

<hr>

I think this is actually the first time I've successfully gotten fireplace to
connect to a ClojureScript repl. I remember having some trouble connecting
fireplace to the browser repls provided by figwheel/chestnut, so in those
environments, I just live reload stuff and observe the output of the web
console. Fast enough, but I think this will be even better :).



