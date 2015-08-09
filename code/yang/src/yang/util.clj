(ns yang.util)

(defn char-range [start end]
  (map char (range (int start)
                   (inc (int end)))))

(defn substring? [st sub]
  (not= (.indexOf st sub) -1)) ;know your Java strings!

(defn indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))
