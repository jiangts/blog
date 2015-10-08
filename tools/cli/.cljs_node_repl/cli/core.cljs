(ns cli.core
  (:require [cljs-time.core :as t]
            [clojure.string :as string]))

(enable-console-print!)

(def fs (js/require "fs-extra"))
(def program (js/require "commander"))
;(-> fs (.readdirSync ".."))

(defn- today [& args]
  ((apply juxt args) (t/today)))

(defn- today-str []
  (string/join "-" (today t/year t/month t/day)))

(today-str)

(defn -main  [& args]
  (println "Hello World")
  (println "Today is" (today-str))
  (-> program
      (.version "0.0.1")
      (.option "-p, --peppers" "Add Peppers")
      (.parse (.-argv js/process))))



(set! *main-cli-fn* -main)

