{:title "New Blog"
 :layout :post 
 :tags []}

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

<hr>

### Customizing the template

I'm a huge fan of David Nolen's talks and his [blog](http://swannodette.github.io), and having found another Cryogen [user](http://blog.jethrokuan.com/) 
who was uh, heavily inspired by (stole?) his template, I decided to give it a go as well. The template looks super simple, which is fitting for any Clojurist :).

The main hurdle I came across was when dealing with Selmer for the first time. Essentially, the issue is that the "tags" button should only be 
highlighted when the url is "/blog/tags.html", and I didn't know how to get the current URL.

After fumbling around for a bit, (ok, like 40 minutes), I finally decided to "be brave" (translate: not be a noob) and 
[dig the source](https://github.com/cryogen-project/cryogen-core/blob/master/src/cryogen_core/compiler.clj) to find what 
parameters where exactly being passed to the template. And there it was, `uri` (doh!).

So it turns out things are pretty simple. God bless open source :).

<hr>

### Complaints about Cryogen

It appears that the markdown parser doesn't support the full markdown specification. For example, the horizontal lines had to be created with
`<hr>` rather than `---`. Not a huge deal, but not so nice.

Also, creating a new theme was a bit weird as the structure doesn't follow the provided theme structures. 
(to make a new theme I need to have a `dosynctemplates` folder in addition to a `dosync` folder?).

I'll try to submit some pull requests at some point if time permits...

But otherwise, a pleasant experience.

<hr>

Depending on how life goes, hopefully we'll be seeing more posts on coding, math, life at Stanford etc. in the future!

