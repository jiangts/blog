{:title "Clojure Recursive Backtracking"
 :layout :post 
 :tags ["Clojure"]}

I recently shadowed an interview with the following interview question:

Suppose you are given a vector of strings, such as
```clojure
["t*itt*r" "*s" "*wesome"]
```
a "bag o' characters", such as
```clojure
[\a \b \c \d \e \f \g \h \i \j \k \l \m \n \o \p \q \r \s \t \u \v \w \x \y \z]
```
and a list of valid words, such as the ones found in `/usr/dict/words`.

Your task is to find **all** the ways to replace the `*` characters (in the
vector of strings) with ones from the bag o' characters to create valid words.
Each character in the "bag" can only be used once.

<hr>

**Before you continue**: try solving this on your own (even though I've given
away that it's backtracking recursion)! It's a cute little
problem. Also, the rest of the post is written with the assumption that you've
given the problem some thought, so...

<hr>

### Journey to a Solution

Upon hearing this problem and trying to solve it during the interview, I was
dismayed to realize that I essentially forgot recursive backtracking from fall
quarter of freshman year and had to re-work it out afterwards. In particular, I
thought during the interview that the recursive function needed to be able to
"undo" state.

Anyways, upon hearing the problem, I decided to implement a solution in Clojure,
because

1. I'm trying to learn this language
2. It seemed like a great tool to solve this type of problem cleanly

So, I went back to my desk and fired up a new Clojure project and tried to work
it out.

<hr>

The first thing I did was generate a trie from the words for fast prefix
checking as that'll obviously prune the possibilities down quite a bit. This
wasn't really in the scope of the interview so I just found an implementation of
building tries on [StackOverflow][1].
[1]: stackoverflow.com/questions/1452680/clojure-how-to-generate-a-trie

```clojure
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
```

And to actually build the trie:
```clojure
(defn build-lexicon [file]
  (-> file
      slurp
      string/split-lines
      trie/build-trie)) ; so readable!

(defonce lexicon (build-lexicon "/usr/share/dict/words"))
```

Now it's time to start recursive backtracking to find all the solutions (if
any). On my first pass at a Clojure solution, I made a couple of bad decisions
and made my life difficult.

The problems were two-fold. First of all, I got the wrong idea by choosing the
wrong data structure.
**This was a huge lesson learned: choosing the right data structure, especially in Clojure, is absolutely critical.**
When people say that programming Clojure will
make you a better programmer in general, I think this is one of the things
they're referring to. Clojure really makes you realize that in order to keep your life simple and sane, 
it's generally the case that **data is more important than functions**.
That's because coaxing data back and forth between formats due to poor data
structure choice is annoying, introduces a ton of opportunities for bugs,
and is not even core to the algorithmic complexity of the problem.

Secondly, I really wasn't familiar enough with the Clojure control structures
and data manipulation functions. So I had to spend a lot of time surfing the docs 
to try to figure out how to shovel my data around to do what I wanted.

So what was my not-so-bright data structure? I thought it would be
convenient to immediately decimate all the `*` characters by splitting each
string in the vector by `*`. In code,
```clojure
(map #(string/split % #"\*") words)
;=> (["t" "itt" "r"] ["" "s"] ["" "wesome"])
```
However, as a beginner in Clojure, dealing with the vectors nested in the list
gave me a lot of headaches. Even worse, I also didn't actually know
exactly what `string/split` did, so when I toiled my way to a first solution
and tried to test a case with adjacent `*`'s, the output was literally just wrong.

Let's see how bad this was. First, consider the final function I wrote that does the
recursive backtracking.

```clojure
(defn solve [words chars-remaining]
  "words: vector of strings
  chars-remaining: map from characters to frequencies"
  (if (solved? words)
    (apply println words)
    (doseq [ch (keys chars-remaining)] ;the side effect is the possible println in the recursion
      (if (is-prefix? words ch)
        (solve (replace-char words ch)
               (remove-char chars-remaining ch))))))
```

We see that we need:

1. `solved`: a fn to check if the words vector has been solved (updated such that each string it contains is a valid word)
2. `is-prefix?`: a fn to check if inserting a character at the next available `*` results in a valid prefix
3. `replace-char`: a fn to actually insert a character at the next available `*`
4. `remove-char`: a fn to remove a char from the frequency map of remaining characters

Besides the fact that it took me awhile to figure out that all I needed for
backtracking recursion was the above logical structure (no undo necessary)
the hardest part of using the string split data-structure was implementing
functions 2 and 3.

As an example of how my code looked when using the wrong datastructure, here's
how I tried to do part of fn 3 the first time around. Notice that it doesn't
even look for the first instance of a word that has a `*`. The function's just
trying to replace a `*` with a character:

```clojure
(defn stitch [word-frag ch]
  (if (> (count word-frag) 1)
    (assoc
      (-> word-frag rest vec)
      0
      (str (word-frag 0) ch (word-frag 1) ; absolutely disgusting
    word-frag))))
```

And here's how I tried to do fn 1:
```clojure
(defn solved? [words]
  (reduce (fn [truth [next-word]] ;at least I used destructuring...
              (and (trie/in-trie? lexicon next-word) truth)
          true words)))
```

Look away, look away. These are absolutely disgusting. The usage of the threading
macro (`->`) is pretty cringe-worthy, and the whole thing is a mess. Notice also
that there is a lot of poop shovelling to be done to "clear out" the first two
elements of the word fragment vector and prepend the joined string. (or, as in
my implementation above, chop off the first element and replace the second with
the joined string). The poor data structure choice just makes life so unclean.

The `solved?` function also suffers from the data structure choice. 
As a side note, using `reduce` there works, but is pretty jank.

My first bug-ridden implementation had plenty more atrocities, but to spare you
and to save my face, we'll move on to my second pass solution, which is
quite clean and was quick to write.

<hr>

### The Clean Solution

As discussed, we just need to implement 4 functions to get this algo working.
`solved?`, `is-prefix`, `replace-char`, and `remove-char`. For the clean
solution, I'll just leave the vector of words be, with `*`s and all. Here are
the functions one by one.

1) `solved?`
```clojure
(defn- solved? [words]
  "words: a vector of strings"
  (->> words 
       (map #(trie/in-trie? lexicon %))
       (every? true?)))
```
Wowzers that's so much better! I just map the values of the words to a vector of
booleans, and return true if every value is true!

2) `replace-char` (this is actually required by `is-prefix?` so I'll show it
first)
```clojure
(defn- replace-char [words ch]
  "words: a vector of strings
  ch: a character"
  (if-let [word-idx (find-word-with-missing words)] ; continue when word-idx not nil
    (let [word (nth words word-idx)]
      (assoc words 
             word-idx
             (string/replace-first word "*" ch)))))
```
Here, we get the index of the word with a missing character (using
`find-word-with-missing`, which I'll define below), grab that word from the word
vector, and replace the `*` in that word with `ch` using the built-in
`string/replace-first`. Super simple!

And here's `find-word-with-missing`:
```clojure
(defn- find-word-with-missing [words]
  "words: a vector of strings"
  (->> words
      (util/indices #(util/substring? % "*"))
      first))
```
it simply returns the index of the first word that contains `*` as a substring.
(There are actually 2 additional helper methods used here, which are)
```clojure
; in namespace yang.util

(defn substring? [st sub]
  (not= (.indexOf st sub) -1)) ;know your Java strings!
  
(defn indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))
```

3) `is-prefix?`
```clojure
(defn- is-prefix? [words ch]
  "words: vector of strings
  ch: character"
  (if-let [check-idx (find-word-with-missing words)]
    (let [replaced-char (replace-char words ch)
          check-word (str (nth replaced-char check-idx) "*") ;hack to fix edge case
          prefix (subs check-word 0 (.indexOf check-word "*"))]
      (trie/has-prefix? lexicon prefix))))
```
This one is probably the hairiest function I have, and yet it's still quite
understandable. In words, what it's doing is after you've already replaced the
first `*` with a new character, it figures out if the prefix (a substring from
the beginning of the word up until the next `*` character or the end of the
word) is a prefix in the trie.

In code: first, you grab the index of the first word with a missing character (if such a word exists).
Then, in the `let` form, you bind `replaced-char` to the vector where
you've already inserted the char `ch`. Now, you want to get the right prefix,
which is all the characters from the beginning of the word up to the next `*` or the end of
the word. I solved this problem by just appending a `*` to the end of the word,
so the prefix substring is always correct. Finally, just check if the trie has
that prefix. Voila.

4) `remove-char`
```clojure
(defn- remove-char [chars-remaining ch]
  "chars-remaining: a map from characters to frequencies
  ch: a character"
  (let [new-map (update-in chars-remaining [ch] dec)]
    (if (zero? (new-map ch))
      (dissoc new-map ch)
      new-map)))
```
This one just removes a character from the bag by decrementing the value of the
character's key. It also cleans up the map by removing the key if a character's
frequency is 0.

And that's it!

<hr>

Here are the results for a couple of inputs:

```
(def words ["twi*t**" "i*" "a*es**e"])
```
```no-highlight
twinter id amesite
twinter id awesome
twinter if amesite
twinter if awesome
twinter io amesite
twinter is amesite
twinter is awesome
twinter it awesome
twisted if amesite
twisted if awesome
twisted in amesite
twisted in awesome
twisted io amesite
twisted it awesome
twister id amesite
twister id awesome
twister if amesite
twister if awesome
twister in amesite
twister in awesome
twister io amesite
twister it awesome
twistle id amesite
twistle id awesome
twistle if amesite
twistle if awesome
twistle in amesite
twistle in awesome
twistle io amesite
twistle it awesome
twitten id awesome
twitten if awesome
twitten is awesome
twitter id awesome
twitter if awesome
twitter in awesome
twitter is awesome
```

Check out the last entry of that one :). And another example?

```
(def words ["twi****" "i*" "a*es**e"])
```
```no-highlight
twifold ie amesite
twifold in amesite
twifold is amesite
twigful id amesite
twigful id awesome
twigful ie amesite
twigful ie awesome
twigful in amesite
twigful in awesome
twigful io amesite
twigful is amesite
twigful is awesome
twigful it awesome
twiglet id awesome
twiglet if awesome
twiglet in awesome
twiglet is awesome
twindle if amesite
twindle if awesome
twindle io amesite
twindle is amesite
twindle is awesome
twindle it awesome
twingle id amesite
twingle id awesome
twingle if amesite
twingle if awesome
twingle io amesite
twingle is amesite
twingle is awesome
twingle it awesome
twinkle id amesite
twinkle id awesome
twinkle if amesite
twinkle if awesome
twinkle io amesite
twinkle is amesite
twinkle is awesome
twinkle it awesome
twinkly id amesite
twinkly id awesome
twinkly ie amesite
twinkly ie awesome
twinkly if amesite
twinkly if awesome
twinkly io amesite
twinkly is amesite
twinkly is awesome
twinkly it awesome
twinter id awesome
twinter if awesome
twinter is awesome
twiscar id amesite
twiscar id awesome
twiscar ie amesite
twiscar ie awesome
twiscar if amesite
twiscar if awesome
twiscar in amesite
twiscar in awesome
twiscar io amesite
twiscar it awesome
twisted if awesome
twisted in awesome
twister id awesome
twister if awesome
twister in awesome
twistle id awesome
twistle if awesome
twistle in awesome
twitchy id awesome
twitchy ie awesome
twitchy if awesome
twitchy in awesome
twitchy is awesome
```

Yeah, all those 2 letter thingies are in the Unix dictionary.

And note that `twitter` doesn't appear in the second version because we can't repeat usage of `t`'s.

<hr>

Believe it or not, the final code you saw above is nearly what I wrote on the first pass with the 
simpler data structure! I did very little debugging to get my "first-draft" code to 
what you've just seen.

The reason is because the code **just reads declaratively**. Really the only bug I encountered was not installing
the `if-let` forms, because I forgot that `find-word-with-missing` could return `nil`.

And, as a bonus optimization because I'm using Clojure, I memoized (aka cached) the results
to the `find-word-with-missing` function! What the `memoize` builtin function does is 
store a map of your function inputs and saves your function output, so if the function
is computationally expensive or is repeatedly called with the same arguments, it can return
the cached copy of the output! For obvious reasons, you can only `memoize` functions without side effects.

Here's how that looks:
```clojure
(defn- find-word-with-missing-slow [words]
  "words: vector of strings"
  (->> words
      (util/indices #(util/substring? % "*")) ;hard coding missing char...
      first))

; check clojure docs for cache policies
(def find-word-with-missing 
  (memoize find-word-with-missing-slow))
```
Super nice. I wish I had this in all languages.

<hr>

You can find all the code for this on [Github][2].
[2]: https://github.com/jiangts/blog/tree/master/code/yang/

<hr>

### Coming up next

I've also been using the [re-frame](https://github.com/Day8/re-frame)
ClojureScript client-side library and I think it's a fantastic idea, so I should
be writing a post about that in the near future!
