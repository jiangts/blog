(ns yang.core
  (:gen-class)
  (:require [clojure.string :as string])
  (:require [yang.trie :as trie]) 
  (:require [yang.util :as util]))

;; ------------
;; Problem
(defn build-lexicon [file]
  (-> file
      slurp
      string/split-lines
      trie/build-trie))

(defonce lexicon (build-lexicon "/usr/share/dict/words"))

(def words ["twi*t**" "i*" "a*es**e"]) ;removed chars: terswom
(def charbag (util/char-range \a \z))

;; ------------
;; Solution. I approached this in a very top-down manner...
(defn- solved? [words]
  "words: vector of strings"
  (->> words 
       (map #(trie/in-trie? lexicon %))
       (every? true?)))

(defn- find-word-with-missing-slow [words]
  "words: vector of strings"
  (->> words
      (util/indices #(util/substring? % "*")) ;hard coding missing char...
      first))

; check clojure docs for cache policies
(def find-word-with-missing 
  (memoize find-word-with-missing-slow))

(defn- replace-char [words ch]
  "words: vector of strings
  ch: character"
  (if-let [word-idx (find-word-with-missing words)]
    (let [word (nth words word-idx)]
      (assoc words 
             word-idx
             (string/replace-first word "*" ch)))))

(defn- is-prefix? [words ch]
  "words: vector of strings
  ch: character"
  (if-let [check-idx (find-word-with-missing words)]
    (let [replaced-char (replace-char words ch)
          check-word (str (nth replaced-char check-idx) "*") ;hack to fix edge case
          prefix (subs check-word 0 (.indexOf check-word "*"))]
      (trie/has-prefix? lexicon prefix))))

(defn- remove-char [chars-remaining ch]
  "chars-remaining: map from characters to frequencies
  ch: character"
  (let [new-map (update-in chars-remaining [ch] dec)]
    (if (zero? (new-map ch))
      (dissoc new-map ch)
      new-map)))

(defn solve [words chars-remaining]
  "words: vector of strings
  chars-remaining: map from characters to frequencies"
  (if (solved? words)
    (apply println words)
    (doseq [ch (keys chars-remaining)] ;the side effect is the possible println in the recursion
      (if (is-prefix? words ch)
        (solve (replace-char words ch)
               (remove-char chars-remaining ch))))))

(defn -main
  [& args]
  (solve words (frequencies charbag)))

