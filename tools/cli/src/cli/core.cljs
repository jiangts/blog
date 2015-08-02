(ns cli.core
  (:require [cljs-time.core :as t]
            [clojure.string :as string]))

(enable-console-print!)

(def fs (js/require "fs-extra"))
(.readdirSync fs "..")

(defn- today-str []
  (let [today (t/today)] 
    (string/join
      "-"  
      (map #(% today) [t/year t/month t/day]))))

(today-str)

(defn -main  [& args]
  (println "Hello World")
  (println "Today is" (today-str)))

(set! *main-cli-fn* -main)

