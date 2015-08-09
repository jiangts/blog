(ns yang.trie
  (:gen-class))

(defn add-to-trie [trie x]
  (assoc-in trie x (merge (get-in trie x) 
                          {:val x :terminal true})))

(defn in-trie? [trie x]
  "Returns true if x exists in the trie"
  (:terminal (get-in trie x) false))

(defn has-prefix? [trie prefix]
  "Returns whether the prefix exists in the trie"
  (->> prefix
       (get-in trie)
       nil?
       not))

(defn prefix-matches [trie prefix]
  "Returns a list of all words in the trie with the prefix"
  (->> prefix
       (get-in trie)
       (tree-seq map? vals)
       (map :val)
       (remove nil?)))

(defn build-trie [coll]
  "Builds a trie over the values in the specified seq coll"
  (reduce add-to-trie {} coll))
