(ns cli.core
  (:require [cljs-time.core :as t]))

(enable-console-print!)

(def fs (js/require "fs-extra"))
(.readdirSync fs ".")

(defn -main  [& args]
  (println "Hello again"))

(set! *main-cli-fn* -main)

;(cljs-time/date-time 1986 10 14 4 3 27 456)
