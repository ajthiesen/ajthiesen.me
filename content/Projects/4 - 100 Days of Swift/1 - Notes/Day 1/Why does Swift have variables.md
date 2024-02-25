[[ReadItLater]] [[Article]]

# [Why does Swift have variables?](https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-variables)

[Paul Hudson](https://www.hackingwithswift.com/about)    [@twostraws](https://twitter.com/twostraws)    October 25th 2021

*Updated for Xcode 14.2*

Variables allow us to store temporary information in our program, and form a key part of almost every Swift program. Ultimately, your program is going to transform data somehow: maybe you let the user enter in todo list tasks then check them off, maybe you let them roam around a deserted island working for a capitalist raccoon, or maybe you read the device time and display it in a clock. Regardless, you’re taking some sort of data, transforming it somehow, and showing it to the user.

Of course, the “transforming it somehow” is where the real magic comes in, because that’s the part where your brilliant app idea happens. But the process of storing data in memory – holding on to something the user typed, or something you downloaded from the internet – is where variables come in.

Once you create a variable using `var`, you can change it as often as you want without using `var` again. For example:

```
var favoriteShow = "Orange is the New Black"
favoriteShow = "The Good Place"
favoriteShow = "Doctor Who"
```

If it helps, try reading `var` as “create a new variable”. So, the first line above might be read out loud as “create a new variable called `favoriteShow` and give it the value Orange is the New Black.” Lines 2 and 3 don’t have `var` in there, so they modify the existing value rather than creating a new variable.

Now imagine you had `var` on all three lines – you used `var favoriteShow` each time. That wouldn’t make much sense, because you’d be saying “create a new variable called `favoriteShow`” three times over, and the variable is clearly not new after your first attempt. Swift will flag this as an error, which means it won’t let you run your code until you pick a different name for your variables.

That might seem like annoying behavior, but trust me: it’s helpful! Swift wants you to be clear: are you trying to modify an existing variable (if so, remove the `var` the second and subsequent times), or are you trying to create a new variable (in which case, name it something else.)

One last thing: although variables form the core of many Swift programs, you will learn that sometimes they are best avoided. More on that later!

[Sponsor Hacking with Swift and reach the world's largest Swift community!](https://www.hackingwithswift.com/sponsor)