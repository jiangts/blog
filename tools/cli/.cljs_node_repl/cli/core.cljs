(ns cli.core)

(enable-console-print!)

(println "Hello world!")

(def fs (js/require "fs-extra"))
(.readdirSync fs ".")
