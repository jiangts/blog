{:title "Setting up Octave on Mac OSX"
 :layout :post 
 :tags ["CS229"]}

Wanted to get Octave on my Macintosh because I want to work on CS229
assignments locally (Stanford doesn't give us a license for Matlab, we can only
use it on school computers/via ssh on our clusters).

Turns out Octave installation isn't the easiest thing in the world because it
took more than hitting the first couple of links on Google, so here's a record
of how I did it on Mac OS X Yosemite.

    $ brew install octave --build-from-source --without-java

You need to specify without java flag because (on Yosemite at least) the
homebrew Octave build seems to depend on Java 6 or some weirdness that
the Octave homebrew Github issues page people still haven't figured out.
https://github.com/Homebrew/homebrew-science/issues/1899

I won't be needing Java support from Matlab in this class so it's ok. (shrug)

To get visualization working, follow this blog: http://adampash.com/how-to-install-octave/

Essentially,

    # install octave
    brew install octave --with-x11
    
    # install fltk for gnuplot
    brew install fltk
    
    # install gnuplot (this may be installed as part of octave now)
    brew install gnuplot --with-x11

Evidently, the dude in the blog post suggests getting mactex, but TeX is usually
pretty huge so I said "thanks but no thanks".

Next, make an `.octaverc` file with

    # ~/.octaverc
    setenv ("GNUTERM", "X11")
    
    # below is optional; changes the prompt to two chevron
    # and gets rid of the long Octave x.x.x >> prompt
    PS1('>> ')

You should now be gucci. If you aren't, let me know on [Twitter](https://twitter.com/jiangts).
