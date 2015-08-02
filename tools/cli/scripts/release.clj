(require '[cljs.build.api :as b])

(println "Building ...")

(let [start (System/nanoTime)]
  (b/build "src"
    {:output-to "release/cli.js"
     :output-dir "release"
     :optimizations :advanced
     :target :nodejs
     :verbose true
     :externs ["externs.js"]})
  (println "... done. Elapsed" (/ (- (System/nanoTime) start) 1e9) "seconds"))
