{:title "ClojureScript JavaScript Interop"
 :layout :post 
 :tags ["ClojureScript"]}

If you've tried ClojureScript, chances are you've had to figure out how to
interop with JavaScript. And chances are, after a quick Google search you found
[Rafal's comprehensive guide](http://www.spacjer.com/blog/2014/09/12/clojurescript-javascript-interop/).

This post will cover my favorite tool when dealing with JS interop that isn't
covered in Rafal's post: the threading macro `->`.

As a bonus it'll also cover my preferred interop syntax as well as a link to an
additional nifty (yet possibly over-eager) JS interop library.

### The Threading Macro

Usually, you read Clojure code "inside out". The threading macro re-orders the
the form to read left-to-right... like JavaScript does!

Suppose you need to integrate the [chosen](http://harvesthq.github.io/chosen/)
jquery plugin into your ClojureScript to have nicer looking select elements:

    $(".chosen-select").chosen({disable_search_threshold: 10});

You could write

    (.chosen (js/$ ".chosen-select") #js {"disable_search_threshold" 10})

Or, with the threading macro, you can write

    (-> (js/$ ".chosen-select") (.chosen #js {"disable_search_threshold" 10}))

To me, that reads far, far clearer and a lot more like the original code.
Everything appears in the same order as the original JavaScript.

<hr>

### Preferred Interop Syntax

[Rafal's guide](http://www.spacjer.com/blog/2014/09/12/clojurescript-javascript-interop/)
gives you a lot of options on how to do interop which be a little overwhelming.
In this section I'll give a consistent interop solution that is my current
preferred method. My goal is to make the interop as readable as possible while
doing its best to follow an idiomatic Clojure style.

Without further ado, let's look at the interop operations you need to do: (the
examples are taken from Rafal).

#### Creating Objects

Use the trailing dot syntax.

    (def t1 (js/MyType.)) ;; namespace.t1 = new MyType;
    (def t2 (js/MyComplexType. "Bob")) ;; namespace.t2 = new MyComplexType("Bob");

#### Invoking Methods

My choice here is debatable, but I prefer the code reading in the same order as
JavaScript for most method invocation.

    (-> js/window .hello) ;; window.hello();

In this case it would obviously be more idiomatic to make the function the first
item in the s-exp, but again, having to constantly switch *how you read the code*
is annoying.

Suppose you are integrating the chosen jquery component, and on the first line
you use the threading macro (reading ltr) and the next line you're calling a
function in idiomatic Clojure (reading rtl) and on the next line you again use
the threading macro (ltr again!). In my experience that's quite dizzying, so
I'll recommend sticking to the threading macro here unless you just have a
random one-off line of interop.

#### Accessing Properties

You should be familiar with the `aget` and `..` syntax because you'll see them
in the wild, but my recommendation is... to again use the threading macro!

    (-> js/object .-prop1 .-prop2 .-prop3) ;; object.prop1.prop2.prop3;

The next best option is `aget`, which you'll need to use if you want dynamically
property access. Do it like so:

    (aget js/object "prop1" "prop2" "prop3") ;; object["prop1"]["prop2"]["prop3"];

#### Assignment

Now we enter the brutal, mutable world where anything goes. Use `set!`.

    (set! (-> my-type .-name) "Andy") ;; namespace.my_type.name = "Andy";

#### Arrays

Your only choice here is to use `aget`.

    (aget js/globalArray 0) ;; globalArray[0]
    (-> (-> js/document 
            (.querySelectorAll ".list-item")) 
        (aget 1)) ;; document.querySelectorAll(".list-item")[1];

Maybe the second example is a little over-kill with threading macro happiness,
but I really find it more readable when your head is in JS-land.

#### Nested Scopes

Your only choice is to use the non-idiomatic dot-syntax.

    (def m1 (js/Microsoft.Maps.Themes.BingTheme.)) ;; new Microsoft.Maps.Themes.BingTheme;

#### Converting Data

Just use `clj->js` and `js->clj`. These are super simple and I'll direct you to
Rafal for these. Only thing I would add is to use `#js` reader macro if you're
doing a super quick and dirty flat map or array.

<hr>

### Other Resources

If you look online, you might also encounter the 
[purnam library](http://purnam.github.io/purnam/).
I've looked at it and used it a little bit, and I think it's really convenient.
However, I think it's a little too eager to replace existing cljs-js interop
that is already very readable (especially when you use the threading macro!)
making you have to learn a whole new interop syntax. 

Essentially, I'm not terribly excited about purnam core, but the other
namespaces contain things that could be very useful.

In the future, I'll write [a post](/pages/todo.html#cljs externs) about calling
external JavaScript from ClojureScript when using the Google Closure compiler on
advanced optimizations via an externs file. As a bonus, I'll also cover how to
call ClojureScript from JavaScript using metadata.

