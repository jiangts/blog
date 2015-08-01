(ns cli.core)

(enable-console-print!)

(def fs (js/require "fs-extra"))
(.readdirSync fs ".")

(defn -main  [& args]
  (println "Hello again"))

(set! *main-cli-fn* -main)
