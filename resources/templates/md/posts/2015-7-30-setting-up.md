{:title "New Blog"
 :layout :post
 :tags  []}

After writing quite a few "private blogs" (translate: journal entries) over the years, I've decided to start a public blog on Github.

I'm using [Cryogen](http://cryogenweb.org/) (rather than Jekyll or Hugo or whatever million other options there are out there) because I fell in love with Clojure. The setup was simple. Just run

    $ lein new cryogen blog
    $ cd blog
    $ lein ring server

This will get you a static site up and running.

Now, instead of following the advice on setting up a Github page on the cryogen docs, I did the following (which I found easier to maintain):

    $ git add .
    $ git commit -m "initial commit" # ensure git knows about your subtree dir
    $ git subtree push --prefix resources/public/blog origin gh-pages

You can also create a little shell script (found [here](https://gist.github.com/cobyism/4730490)) to help you do the deploy to gh-pages process.

    #!/bin/sh
    if [ -z "$1" ]
    then
      echo "Which folder do you want to deploy to GitHub Pages?"
      exit 1
    fi
    git subtree push --prefix $1 origin gh-pages

and in the future you can just run the script and pass in the proper directory!

---

Depending on how life goes, hopefully you'll be seeing more posts on coding, math, life at Stanford etc. in the future!

