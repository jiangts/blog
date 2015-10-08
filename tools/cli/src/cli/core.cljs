(ns cli.core
  (:require [cljs-time.core :as t]
            [clojure.string :as string]))

(enable-console-print!)

(def fs (js/require "fs-extra"))
(def program (js/require "commander"))
(def inquirer (js/require "inquirer"))

(defn- today [& args]
  ((apply juxt args) (t/today)))

(defn- today-str []
  (string/join "-" (today t/year t/month t/day)))

(defn- get-options []
  (-> program
      (.version "0.0.1")
      (.option "-p, --peppers" "Add Peppers")
      (.parse (.-argv js/process))))

(def questions [{:type "confirm"
                 :name "toBeDelivered",
                 :message "Is it for a delivery",
                 :default false}])

(defn -main  [& args]
  (get-options)
  (println "Hello World")
  (println "Today is" (today-str))
  (-> inquirer
      (.prompt (clj->js questions) (fn [answers] 
                                     (let [answers (js->clj answers)]
                                       (println answers))))))

(set! *main-cli-fn* -main)

