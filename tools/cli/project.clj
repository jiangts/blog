(defproject cli "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308" :classifier "aot"
                  :exclusion [org.clojure/data.json]]
                 [org.clojure/data.json "0.2.6" :classifier "aot"]]
  :plugins  [[lein-npm "0.5.0"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :node-dependencies [[source-map-support "0.3.2"]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  :profiles  {:dev  {:dependencies  [[com.cemerick/piggieback "0.2.1"]
                                     [org.clojure/tools.nrepl "0.2.10"]]
                     :repl-options  {:nrepl-middleware  [cemerick.piggieback/wrap-cljs-repl]}}})
