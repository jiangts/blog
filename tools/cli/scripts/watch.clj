(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'cli.core
   :output-to "out/cli.js"
   :output-dir "out"
   :target :nodejs})
