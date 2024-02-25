[[ReadItLater]] [[Article]]

# [How to Become an iOS Developer in 2021](https://www.hackingwithswift.com/articles/230/how-to-become-an-ios-developer)

The skills, resources, and networking that will get you to your goal

In this article I want to walk you through what I think it takes to become an iOS developer in 2021. I’m aiming this squarely at two groups of people: absolute beginners to Swift – folks who have never built anything for iOS before – and also so-called false beginners, who are folks who might have tried to learn Swift before but never really reached their goal of getting a full-time job.

Regardless of what level you are right now, the goal here is the same: getting you in the right position to apply for a junior iOS developer role at a company.

We’re going to look at the skills you should be learning, the courses you can take, how to get connected to the community, common mistakes folks make, and more, and best of all everything I’ll talk about will be completely free so you won’t need a penny to follow along.

Seriously, too many people think spending a ton of money is the fast track to reaching their dream job, when really the most important things are determination and willpower. And here’s a hint for you: if you’re already thinking you want to skip ahead in this article, maybe you should consider working on your willpower!

There are 7 sections to this article:

1.  Core skills you absolutely need to know to get a job.
2.  Extension skills that are nice to have – the ones that will set you apart from the pack, if you have the time to learn them
3.  Common mistakes people make when they are trying to learn.
4.  Resources you can use to learn Swift that are completely free.
5.  How you can connect to the iOS development community.
6.  An idea of how long it will take to reach your goal.
7.  Preparing to apply for your first job

-   This article is also available as a video if you prefer. The content is the same, so use whichever is easiest for you.

[Sponsor Hacking with Swift and reach the world's largest Swift community!](https://www.hackingwithswift.com/sponsor)

### What are the core skills you need to be an iOS developer?

What is the absolute minimum set of skills you need to get a job in iOS development? I think there are five things in total:

1.  Swift
2.  SwiftUI
3.  Working with data
4.  Networking
5.  Version control

That’s it. And that list is super short intentionally, for a number of reasons:

1.  The more you learn, the more you realize there is to learn, so it’s easy to spend so much time studying and practicing that you lose sight of the actual goal – you want to get a job as an iOS developer, not just sit around learning new stuff.
2.  It’s almost certain you’ll be joining a team that already has an existing app they want you to help develop, so unless you get extremely lucky they’ll need to teach you a whole lot of stuff regardless – if you try and cram a bunch of extra topics in beforehand there’s a good chance you’re wasting your time.
3.  Two of those five things are really big and really complex, and you can spend months just trying to wrap your head around them without venturing anywhere else.
4.  But most importantly, if you get those five things right you can build a huge range of apps. Sure, your code won’t be perfect but that’s okay – the only way to write great code is to write a whole bunch of bad code first.

Let me break down the five things into smaller chunks.

#### Learning Swift

First on the list of Swift. This is the core programming language from Apple – it has no concept of showing information on an iPhone’s screen, or downloading data from the internet, it’s just a language like JavaScript or Python. You use it to create variables, write functions, and so on; it’s just pure code.

Swift is only a few years old, which means it uses almost every cutting-edge language feature out there. On the one hand this means you get to avoid all the crusty old behaviors that are common in older languages like C++ and Java, but it does also mean it has quite a few more advanced features that might blow your mind at first. And that’s okay: lots of parts of Swift are relatively straightforward, and some parts will take you longer to really figure out, so just take your time and keep at it – you’ll get there!

#### Learning SwiftUI

The second core skill I listed was SwiftUI, which is a framework from Apple that lets us write apps for iOS, macOS, tvOS, and even watchOS using Swift. So, while Swift is the programming language, SwiftUI provides the tools that makes apps – how to show pictures, text, buttons, text boxes, tables of data, and more. Just to be clear, SwiftUI isn’t somehow a replacement for Swift – it’s a framework built on top of Swift that lets us make apps, so you need both Swift and SwiftUI to succeed.

If you thought Swift was new, you ain’t seen nothing yet – as I record this SwiftUI isn’t even two years old! But despite being so new, the iOS community has embraced it wholeheartedly because it’s just so awesome to work with.

Now, Apple has an older framework for building iOS apps called UIKit, and if you ask a bunch of folks whether you should learn SwiftUI first or UIKit first you’ll get a range of answers. In fact, there’s every chance that if you look in the comments for the YouTube video for this article you’ll find a bunch of folks telling me I don’t know what I’m talking about and that UIKit should be a priority.

So, in case you were curious here’s why I think you should focus on SwiftUI as a core skill:

1.  It is significantly easier than UIKit, and I mean *significantly* – it takes maybe a quarter of the code to get the same results that you would get in UIKit, plus you have fewer things to learn along the way. This means you get a lot of momentum because you build things faster, see your results faster, and iterate on those results faster, which is super motivating while you’re learning.
2.  SwiftUI was built for Swift, using language features to help you avoid problems and get maximum performance. For example, if you change some data on one screen of an app, SwiftUI will automatically make sure that new data is updated anywhere else in your app that uses it – you don’t need to write code to keep it all in sync yourself, which is surprisingly complex. In comparison, UIKit was written for Apple’s older language, Objective-C, and as a result has all sorts of quirks and cruft that came about as a result of its age.
3.  SwiftUI works on all of Apple’s platforms, so you can take what you learned on iOS and use it to build a macOS or watchOS app with almost identical code. Sure, some things like the Digital Crown only exist on one device, but the vast majority of what you learn will work everywhere.
4.  But most importantly, SwiftUI is where things are going. If you were applying for a job right now – *today* – then fine you will probably need to know UIKit, but as you’re reading this article it means you’re much earlier in the process. Yes, UIKit is more popular now, but by the time you finish learning 6, 9, or even 12 months from now, SwiftUI will be the dominant UI framework.

Seriously, the world’s biggest companies are choosing SwiftUI, including Apple itself, and when Apple recently launched widgets in iOS 14 they made it a *requirement* that you must use SwiftUI – UIKit just isn’t possible there.

#### Networking and data

The third and fourth skills I mentioned were networking and working with data. Compared to Swift and SwiftUI these are a piece of cake, or at least they are at the level you need to be in order to get a junior iOS developer job.

Networking is the practice of fetching data from the internet, or sending data from the local device to a server somewhere. There are stacks and stacks of ways of doing this, but honestly the absolute least you need to know is how to fetch some JSON from a server.

And that’s where the other core skill comes in: working with data. Again there’s a huge range of ways you can load and save data, but the absolute least you need to be able to do is convert that data you got from a server using your network code into some information your app can show.

So, really the third and fourth core skills go hand in hand: fetch some data from a server, then convert it into information you can show in your app. Some developers joke that this kind of code is half the job of iOS developers, and it’s certainly true that we use these skills a lot.

#### And finally: version control

The last skill isn’t coding at all: it’s version control, using something like Git. Again you really don’t need much here, but it’s important you’re able to publish your code somewhere like GitHub so recruiters are able to see your work publicly.

I don’t think anyone in the world truly understands all of how Git works, but that’s okay – you just need to know enough of the basics to store your data safely, and to be able to work with others.

So, putting those five together there are two massive ones – Swift and SwiftUI – plus three small but important ones. Honestly, if you can just focus on those five things without getting distracted you’ll take massive strides towards your first iOS developer job.

And that’s it: those are the five core skills I think you need to be an iOS developer. There are thousands of people out there who only have those skills, and are able to build and ship fantastic apps on the App Store.

### What next after the core skills?

Once you’ve really gotten to grips with the five core skills, you are absolutely 100% in a position to ship your own apps and work as an indie developer, and also in a position to apply for junior iOS development positions and work for a company should you want to. There are no other special qualifications you need – get those core skills down, and you’re in a good place.

But if you’ve worked your way through those skills and want to go *further*, then there are five extensions skills I would encourage you to learn. These are skills that will take you from your *good* place up to being in a *fantastic* place – you become even more employable, and the range of apps you’re able to build will grow even further.

The skills are:

1.  UIKit
2.  Core Data
3.  Testing
4.  Software architecture
5.  Multithreading

As before, I want to explain each of those in more detail so you can understand why I think they are important – and why I consider them *extension* skills rather than *core* skills.

#### Moving on to UIKit

First, UIKit. This is Apple’s older user interface framework, and has been used for building apps since 2008 – it’s 13 years old as I write this, which in software terms is *old*. But that age doesn’t mean UIKit is bad, and in fact as you become comfortable with the way it works you’ll be surprised by how elegant it can be.

There are lots of things that make UIKit worth learning, including:

-   Hundreds of thousands of apps have already been written in UIKit, so if you’re joining a company with a large, well-established app you will almost certainly need to write UIKit code to maintain that app.
-   UIKit is significantly more powerful than SwiftUI – there are many things you can do in UIKit that aren’t possible in SwiftUI at this time.
-   You can create extraordinarily precise layouts using a technology called Auto Layout.
-   If you hit problems with your code, there are more solutions available in UIKit than SwiftUI, simply because it has been around much longer.

You might think all that makes UIKit sound great, so how come I made it an extension skill rather than a core skill? Well, because UIKit has problems too:

-   Almost everything is harder to do in UIKit than SwiftUI, with some things taking a hundred times as much code if not more. SwiftUI was made specifically for modern iOS development, so it does vast amounts of work for you.
-   Because UIKit wasn’t written for Swift, you’ll find it has many features that you can forget about with SwiftUI – lots of implicitly unwrapped optionals, marking code with a special `@objc` attribute to make it available to UIKit’s Objective-C underbelly, needing to use protocols and delegates to show simple data.
-   Nothing about Auto Layout is “auto” – in fact, if you ever do try to build a complex layout there’s a good chance you might have nightmares about Auto Layout. It’s extremely clever, but it’s also extremely hard in places.

And that’s why I consider UIKit to be an extension skill: it takes significantly more time and effort to learn compared to SwiftUI, which in turn means it takes a great deal more determination – you’ve got to really *want* to learn it, otherwise you’ll get confused, bored, angry, or potentially all three. Sure, SwiftUI doesn’t have all the features of UIKit, but at least you can make quick progress and feel a sense of momentum and success before you move on to UIKit.

#### Tackling Core Data

The second extension skill I mentioned is Core Data, which is Apple’s framework for working with application data. In the core skills section I listed both networking and working with data, and it’s true: with those skills in place you can fetch whatever you want from a server and show it in your app. What Core Data does is go a step further: it allows you to manipulate that data once you have it, for example searching for particular values, sorting the results, and more, all very efficiently. It can also link up very easily to iCloud, meaning that your user’s data gets synchronized across all their devices.

Core Data has a whole bunch of downsides, with the biggest one being that often it just isn’t very pleasant to work with. Core Data is about as old as UIKit, and although it worked great with Objective-C it does *not* feel as comfortable in Swift. It *does* have good integration with SwiftUI, which makes it feel a bit less strange, but it’s still a surprisingly complex topic.

So, why have I listed it as an extension skill? Because like UIKit, Core Data is also extremely popular – hundreds of thousands of apps have been built using it, and it’s used in many companies large and small. Also like UIKit, Core Data is really powerful, and although you could recreate the most important parts of it in your own code, why would you want to?

#### Proving your code works

The third skill on my extension list is *testing*: writing special code that tests your main app code works the way you expect. Tests allow us to be sure our code works correctly, and more importantly allows us to *continue* to be sure our works correctly even after we’ve made significant changes to it – if you change 500 lines of code to implement a new feature and all your tests pass, you’re good to go.

So, testing is important, and will help you write better quality software. Why, then, is it an extension skill rather than a core skill? There are three reasons:

1.  For whatever historical reasons, the iOS community as a whole is terrible at testing. I mean really, really bad – many huge apps have hardly any tests at all, and I’ve lost track of how many senior iOS developers I met who are almost proud they never write tests. No, I don’t understand it either.
2.  When you think about all the remarkable things you can build with Apple’s tools and frameworks, honestly it just doesn’t seem much fun writing tests in comparison. I personally enjoy writing tests in much the same way I enjoy flossing my teeth, but I know many people just don’t find them exciting, particularly on personal projects.
3.  When you’re applying for a job, having knowledge of Swift and Apple’s major frameworks will always be more beneficial than knowledge about writing tests. Companies would much rather you knew how to use SwiftUI, UIKit, or one of the other big hitters, because in comparison testing as a topic is significantly smaller – there aren’t nearly as many things to learn.

So, testing is important, testing matters, and I would love for you to learn how to write great tests. But do it *after* you’ve grasped the basics of building apps – get some success under your belt, feel the sheer excitement of having your app live on the App Store, *then* get to grips with testing.

#### Building smarter

The fourth extension skill I want to talk about is software architecture, which really is about the way we craft our code. When you’re just learning you’re going to write some terrible code – code so bad it probably breaks the Geneva convention. And that’s okay, because that’s how you learn: you don’t start good – you *get* good by being *bad* for a long time, just as LeBron James wasn’t born a champion basketball player.

The point is that you persevere with your bad code, until you learn to do better. And that’s where software architecture comes in: looking at proven techniques for structuring your code to make it easier to read, easier to use, easier to modify, and easier to take care of in the longer term. Sometimes these techniques rely on the way Swift works – language features you can use to write better code. But there are many more techniques that work in any programming language, and we usually call these *design patterns*.

One major point you should start to learn about as part of this skill is how you break up your code. For example, if you’re building one screen in your app you might have a login button, an image gallery, and a list of friends all on that screen. But ideally you make each of those parts separate components – a login button component, an image gallery component, and a friends list component – so you can re-use any of those components in other parts of your app.

Software architecture is much more subjective than the other skills I’ve mentioned so far. For the others – for example, SwiftUI – you can think to yourself, “well, I know how to do X, Y, and Z, so I feel confident I’m a good SwiftUI developer.” Software architecture is a very broad topic and honestly a lot of the time there is no obvious “right” way to solve a problem, so I think the best benchmark for it is this: if you look back on your code from six months ago, or a year ago, or three years ago, etc, do you think “wow, that code is bad!”

Again, writing bad code is okay as long as it’s putting you on the path to writing *better* code. I certainly look back on code I wrote five years ago and grimace in places, because I know more now than I did back then – and that’s a good thing.

#### Adding some concurrency

The final extension skill I want to talk about is multithreading, which in simple terms is the practice of making your code do more than one thing at a time. Multithreading can be a real headache, because it’s hard for our brains to understand – when your code does one thing at a time we can think it through linearly, but when two or three things happen at the same time, potentially overlapping each other, it can really bend your brain.

So, although multithreading is a great thing to have as an extension skill, you need to be careful – your goal ought to be to understand just enough of the concepts and code to make it work well, without going a great deal further. Honestly, a lot of developers think multithreading will make their code run three or four times faster immediately, and in *some* cases it *will*, but it many other cases your code will actually run slower, and now you have all the additional code complexity to deal with.

If you don’t believe me, check out [this quote from David Smith](https://twitter.com/Catfish_Man/status/1081581652147490817?s=20) – he’s one of the Swift team at Apple, and previously spent years working on the very core of Apple’s frameworks:

> My concrete recommendation is: you should really strongly consider not writing async/concurrent code. I know this sounds weird in 2018, but the cost in complexity *and* performance is high.

So: learn a little of how multithreading works in Swift just so you can see you understand the concepts and implementation, but try not to go overboard!

### Common mistakes

At this point I’ve outlined all the core and extension skills I think you need in order to work as a full-time iOS developer. But I also want to talk about some of the most common mistakes folks make while learning, because I see these a *lot* and I know it sets people back.

Just to give you an idea, my site teaching folks Swift has over 700,000 unique visitors every month, serving up over 5,000,000 page views, so I feel pretty comfortable in saying I know the common mistakes folks hit.

There are seven main problems folks hit, and I want to cover them in order. They are:

1.  Memorizing everything
2.  Shiny object syndrome
3.  Lone wolf learning
4.  Using beta software
5.  Relying on Apple’s documentation
6.  Getting lost in Objective-C
7.  Taking shots at other languages

Let’s walk through each of those individually.

#### Stop trying to memorize things

The first and by far the most common problem folks hit is trying to memorize everything – reading through a tutorial and thinking they must remember everything in there by heart. Please, please, please don’t do that: it’s a recipe for disaster, and will suck all your willpower out of you until you never want to program again.

No one memorizes everything. No one even comes *close* to memorizing everything. Even if you just think about the APIs Apple publishes, which are the pieces of code we can use to build our apps, there must be well over a hundred thousand out there. If you restricted that just to the core components of app building, you’re still probably looking at several hundred – all working in a very precise way that requires a lot of learning to utilize.

Instead, what happens is that you learn how to do something new, then promptly forget it. So you look it up and use it again, then promptly forget it. So you look it up a *third* time and use it, and this time you only *mostly* forget it – some parts stick in your brain. This repeats again and again, each time with you having to refer to a tutorial or some other reference guide, until eventually the really core things have stuck in your head to the point where you can do it without referring elsewhere.

If you weren’t already aware, *forgetting* is a key component of learning. Each time you forget something and relearn it, it goes into your brain a bit deeper and a bit more thoroughly. Each time you relearn, your brain makes new connections with other things you learned, helping you understand more about the context of what you’re trying to do. And each time you relearn, you’re making it clear to your brain that this particular topic is worth stashing away in its long-term memory.

But if you set *out* trying to memorize everything, you’re going to have a hard time. Instead, don’t worry about forgetting things: knowing where to look them up is much more important than memorizing the specific Swift code to accomplish something. When you forget something and have to relearn it, I encourage you to think of that as a *good* thing – that information *will* sink in deeper the second, third, and tenth time you learn it, so you’re doing your brain a favor.

#### Skip the shiny

The second most problem I see folks hit is what I call *shiny object syndrome* – they find a tutorial series that works well for them and start making some progress, but after a week or two of that they see some other tutorial series they want to follow and jump ship to that instead. I’ve had folks email me saying they’ve tried four, five, or even *six* different series and are – for some weird reason – finding they aren’t learning anything.

The problem here usually is that large parts of learning anything aren’t exciting. That’s not the fault of the teacher necessarily, it’s just a fact of learning to code – some things give you great results with hardly any work, and other things take a lot more time to understand, don’t yield fancy results, or are just one part of a larger concept.

When you hit these steep learning curves, shiny object syndrome becomes powerful – with so many free tutorials out there you can jump ship to any one of them and start again, and you’ll immediately be back in the shallow part of the pool again, covering easier parts you’ve already learned. But unless the original course chose a particularly weird topic to cover, you’re probably going to have to learn it eventually and you’re just kind of delaying the inevitable.

So, I’m not asking you always to *resist* shiny object syndrome, because I know it’s hard. Instead, at least be conscious of it: when you hit a problem, try asking someone else for help and powering through rather than switching.

#### Don’t be a lone wolf

Speaking of asking someone else, the third problem I see folks hit is when they go all lone wolf with their learning – they have it in their head that they are fully capable of learning to build iOS apps using Swift all by themselves, and don’t need the help of others.

This approach does work for a very small number of people, usually the ones who have extensive experience with other programming languages or platforms. But for the overwhelming majority of people, trying to learn like this is a horrible experience – every mistake or misunderstanding takes five times as long to figure out, it’s extremely easy to lose motivation, and you’re missing out on a whole lot of inspiration from seeing others succeed.

If you’re naturally into this “lone wolf” style of learning, let me encourage you to change: share what you’re learning, find others who are learning too, and get into the habit of asking questions. Not only will you discover there’s a fantastic community of learners who will surround you with support and encouragement, but you’ll also be inspired by their work and in turn inspire *them* with *your* work. Trust me, I’ve seen this happen hundreds of times and it is utterly transformative.

#### Going for the beta

The fourth big problem I see folks hit is when they insist on using beta versions of Apple’s development tools. I get it: every year Apple introduces a new iOS, a new macOS, and more, always delivering exciting new things for us to try. It is totally natural for folks to want to learn the latest, greatest that’s out there, particularly if they know that Swift has a long history of change.

However, folks get into all sorts of problems when they try to learn with beta software:

-   Tutorials haven’t been updated for the beta version, so following their instructions won’t always be possible or might not work correctly.
-   Betas usually have bugs galore, particularly so for the ones released for major iOS updates.
-   Apple’s beta frameworks take time to stabilize, meaning that code working in beta 1 might not exist in beta 3.

So, I know it’s exciting to learn new stuff, and I realize you might think you’re getting ahead of the game with new features, but trust me: it isn’t worth it. Always stick to the latest public releases of Apple’s developer tools, at least until you’re feeling comfortable with them.

#### Relying on the official docs

The fifth big problem folks hit when trying to learn is relying on Apple’s documentation. Apple’s developer publications team works hard to document as much as they can from the company’s huge range of frameworks, but their job for the most part is to write *reference* material – things you read when you’re trying to use a particular piece of their tools, rather than creating a structured course to help you learn to build iOS apps.

I’ve lost track of how many times folks have asked “how can I learn Swift?” only to be answered “just read Apple’s Swift reference guide.” This approach does work for some people, and I know that because it worked for me – I read it cover to cover when Swift was first announced. However, for most people it’s a bit like trying to learn a human language by reading a dictionary: it’s designed to cover everything in the language, rather than teach you the most important parts and how to apply them.

So, if you have extensive experience with other languages you might find reading Apple’s reference guides to be useful, but if you’re just starting out then maybe come back to them after a few months.

#### Getting lost in Objective-C

The sixth big problem folks hit is trying to learn Objective-C. This was Apple’s primary development language before Swift was introduced, and although you’ll find remnants in some old codebases the overwhelming majority of existing code is now Swift, and almost all *new* code is also Swift.

I spent years writing Objective-C before Swift came along and really grew to love it, but it has an extremely steep learning curve compared to Swift and misses out on most of Swift’s important features. I remember when I first tried out the iPhone SDK when Apple announced it, and being horrified by Objective-C because it was entirely unlike anything else I had seen so far.

For a learner, Objective-C and Swift have almost nothing in common. Yes, they both share the same frameworks from Apple, but unless you’re actually planning to work *at* Apple – the only company in the world still producing large amounts of Objective-C – then you should leave Objective-C well alone and focus entirely on Swift.

#### Taking shots at other languages

And the final major mistake I see folks make when learning Swift is to dump on other languages as if they were somehow inferior to Swift. The usual target is JavaScript, but you’ll also see folks take shots at Python, Java, Ruby, Go, and more, and for what? It’s not a competition, folks – those languages don’t have to lose in order for Swift to win.

In fact, Swift and SwiftUI regularly take inspiration from other languages and frameworks – whenever new language features are considered the community looks at similar implementations in Rust, Python, Haskell, and other languages, and SwiftUI itself is hugely inspired by the React framework in JavaScript. So, when I see folks in our community say SwiftUI is JavaScript-free or similar, I just cringe – nothing could be further from the truth.

### Courses and resources

Now for the part most people will care most about: what are the actual resources I think you should use to learn Swift, SwiftUI, and more – to reach your goal of being an iOS development?

There are lots out there, and I really appreciate the fact that the Swift community has such a broad range of people sharing their experience. However, here I’m specifically going to look at resources that are *free* – places where you can go and learn to build fantastic apps without paying a cent.

There are two reasons for this:

-   Some folks believe that the more a Swift course costs the better it must be, so they end up paying eye-watering prices without getting enough benefit from it.
-   Many sites like Udemy rely on selling lots of low-priced courses, confident that if you don’t like one course you’ll just buy a different one. They also have a business model similar to Steam’s – there are sales running all the time, encouraging folks to build up lots of courses they’ll study “one day”.

So, I’m only listing free resources here because I don’t want you to fall into those traps – don’t splash out a hundred bucks or more for your first course, and don’t buy a dozen cheap courses because you think that makes you a developer.

#### Structured tutorials

First, Apple has two major resources that can help you. The first is its [Teaching Code site](https://www.apple.com/uk/education/k12/teaching-code/), which lists student and teacher resources for learning Swift from the absolute basics up to professional certifications. Their curriculum is massive, so it might take you a little while to find the best entry point for you, however once you’re there you’ll find lot of things to explore.

And second, Apple has a series of [SwiftUI tutorials](https://developer.apple.com/tutorials/swiftui/) that walk you through building real apps. These do *not* teach you Swift, though, so you’ll need to follow their Swift-focused curriculum first.

Like I said earlier, Apple also makes a guide specifically for the Swift programming language, but there’s a very good chance it won’t work for you – it’s designed as a reference rather than a structured tutorial, so it’s quite dense reading.

What Apple’s tutorials *don’t* do is try to provide a structured way to learn, and that’s where my own free tutorials come in. I have hundreds of articles and videos about Swift, SwiftUI, UIKit, and more, but there are two in particular I want to recommend: the 100 Days of SwiftUI, and the 100 Days of Swift.

The 100 Days of SwiftUI course takes you through learning the fundamentals of Swift using articles, videos, and interactive tests, then walks you through building over 20 real-world apps using SwiftUI – again all with articles, videos, and interactive tests to help make sure what you’re learning is sinking in. Each tutorial builds on what you already learned, so the learning curve is nice and gradual.

If you’d rather learn UIKit rather than SwiftUI, that’s where the original 100 Days of Swift comes in – it’s a similar idea, but built using UIKit rather than SwiftUI for folks who prefer that path.

#### YouTube and more

There are some fantastic YouTube videos walking you through the fundamentals of SwiftUI, including:

-   [One from Chris Ching](https://www.youtube.com/watch?v=VlhcNR7Qrno) where he walks you through building a slots game from scratch.
-   [One from Mark Moeykens](https://www.youtube.com/watch?v=51xIHDm_BDs) where he explains five SwiftUI concepts everyone should learn when they start programming.
-   And [one from me](https://www.youtube.com/watch?v=aP-SQXTtWhY&t=1606s) where I teach both Swift and SwiftUI at the same time, while taking questions from an audience.

Although they aren’t quite so structured, there are other sites that have high-quality Swift and SwiftUI tutorials, including [BLCKBIRDS](https://blckbirds.com/swiftui-tutorials/), [Ray Wenderlich](https://www.raywenderlich.com/), [Donny Wals](https://www.donnywals.com/), [Antoine van der Lee](https://www.avanderlee.com/), and more – I really encourage folks to visit a range of resources and find what works for them.

#### Learning in an app

If you prefer to learn using apps, there are two I would recommend, both completely free. The first is Apple’s Swift Playgrounds app, which lets you learn Swift right on your iPad or Mac. There are lots of interactive lessons aimed at kids, but there are also some more advanced lessons that will help push your skills further.

The other app is one I make myself, and it’s called Unwrap. Unwrap works on all iPhones and iPads, and lets you learn, review, and practice the fundamentals of Swift using videos, tests, and more. It covers all the fundamentals of Swift, and works great alongside the 100 Days of SwiftUI curriculum.

#### Finding answers

Finally, you’re going to need to learn to find answers online. This might mean going to Stack Overflow, but honestly I hope not because it’s not a terribly pleasant place.

Instead, ask questions on the Hacking with Swift forums, on your favorite Slack group, in the iOS Dev Happy Hour sessions, on Twitter, and more – we are genuinely a very warm, welcoming community with a lot of folks willing to help you reach your goals.

### Connecting to the community

Speaking of our community, I want turn to a really important topic that will help meet folks at a similar position to you, help you you learn more effectively, and help you find job openings too – it’s just a win all around.

The topic is this: connecting to the iOS development community. This means learning where to look for news and interesting ideas, where to go when you want to meet folks and share tips, and helpful places where you can ask questions.

#### Who to follow on Twitter?

Let’s start with the easiest one first, which is using Twitter. Twitter is a really fantastic way to follow things that interest you, and in the case of iOS development there are a handful of folks I would really recommend.

These people tweet about their own work, yes, but the reason I think they are great to follow is because they also tweet a lot about other people’s work too – they will help you see a range of perspectives on a particular topic, and they share all sorts of interesting ideas and things to try.

There are 10 folks I would suggest you follow on Twitter:

1.  [Sean Allen](https://twitter.com/seanallen_dev) spends a lot of his time creating YouTube videos about Swift and iOS development, but he also works super hard to spread the news about things other folks have created – he really does a great job of helping everyone discover something new every week.
2.  [Antoine van der Lee](https://twitter.com/twannl) runs a website dedicated to iOS development at [https://www.avanderlee.com](https://www.avanderlee.com/), but he also shares some great links to useful resources he finds on GitHub, newsletters, and more.
3.  [Novall Khan](https://twitter.com/novallswift) works at Apple, but that doesn’t stop her from making regular videos about what she’s working on, what she’s learning, what she’s having trouble with, and more – she’s really inspiring.
4.  [Steve Troughton-Smith](https://twitter.com/stroughtonsmith) is well known for his earlier work poking around in iOS, but really you should follow him for the fantastic range of links he shares to impressive work. I personally like the way he shares the development progress on his own apps, so you can see them grow from start to finish.
5.  [Kaya Thomas](https://twitter.com/kthomas901/) is one of the most famous indie developers in our community, and has been featured by Apple more times than I can remember. She tweets a lot about her own work and presentations, but also shares links to books she’s learning from, articles she’s read, and more.
6.  [Majid Jabrayilov](https://twitter.com/mecid) writes a fantastic blog about Swift and SwiftUI, but he’s also a tireless promoter of others – if you follow him on Twitter you’ll get idea after idea sent your way from a huge range of sources.
7.  [Donny Wals](https://twitter.com/donnywals) writes a Swift blog, as well as more recently writing books on Combine and Core Data, but on Twitter he also encourages folks to share what they are working on. Even just reading that thread every week will get you stoked with things to try, so you should definitely follow Donny.
8.  [Sommer Panage](https://twitter.com/sommer) works at Apple on the accessibility team, so although she’s somewhat restricted by what she can say she does tweet out lots of first-class tips from herself and others that everyone can use to build better apps.
9.  [Natascha Fadeeva](https://twitter.com/tanaschita) writes a blog about Swift and iOS development, including articles on Core Data, interview questions, and more, but she also tweets about things she’s discovered elsewhere.
10.  And finally [there’s me](https://twitter.com/twostraws). I tweet a lot about all the things I’m working on with Swift, SwiftUI, and more, but also try to share great articles, videos, and apps that others have made – I think it’s one of the most important things I do for the community.

#### Newsletters and beyond

Of course, Twitter isn’t the only place where you can keep up with the community – there are newsletters, Slack groups, Zoom meetups, forums, conferences, and more. I don’t want to bore you too much, so I’m going to list one of each of those here:

-   For newsletters, you can’t go wrong with [iOS Dev Weekly](https://iosdevweekly.com/). As I write this it just passed 500 issues, one every week, so I think that tells you all you need to know about how important it is.
-   If you’d like to post on a web forum, I host one myself at [https://www.hackingwithswift.com/forums](https://www.hackingwithswift.com/forums) – there are lots of categories to choose from, and everyone is welcome to take part regardless of your experience level. Trust me, you are more than welcome to post your beginner questions here!
-   Every month [iOS Dev Happy Hour](https://www.iosdevhappyhour.com/) takes place on a group Zoom call with over 300 people, but the real fun here is the breakout rooms where you get to chat to groups of 6 to 8 people at a time. It’s a lot of fun, and you *will* make friends.
-   Attending conferences has been tricky thanks to the coronavirus pandemic, but Apple’s [WWDC](https://developer.apple.com/wwdc) was a huge hit last year and also had a wide variety of community events taking place alongside. A group of friends and I ran a [GitHub repository](https://github.com/twostraws/wwdc) to help list all the other events, articles, and more that happened – check it out!
-   And finally, if you like to chat on Slack where you can get answers more quickly, you can join the free [Hacking with Swift Slack group](https://www.hackingwithswift.com/slack) and join one of the channels for Swift, SwiftUI, my 100 Days curriculums, and more.

### How long does it take?

This is a question I get asked a *lot*: how long does it take to go from knowing nothing about Swift to being able to get an entry-level iOS developer position.

Obviously the answer is “it depends”, but that would be a cop out here so let me address it in a few different ways.

#### The golden rule: don’t rush

First, what you *cannot* do is rush through several courses at the same time. Remember what I said about shiny object syndrome? Yeah, that – many people really do think they can double up with two courses at the same time, then rush through four, five, or even more hours every day and still end up with a high-quality understanding of the topics they covered.

To be clear, I have seen folks try that so many times and it fails every time. Every single time – it never works, and I see folks say it was because the tutorials were bad, or because Swift was too hard, or for literally any other reason than that they tried to rush through something that was complex.

Literally just today I received an email saying, “Hi Paul! If I spend four or five hours a day studying Swift, how fast can I finish?” And that’s just not how learning works – not learning Swift, not learning to play the piano, not learning to ice skate, or whatever.

Learning Swift is really hard in places, and learning to build apps takes a lot of trial and error, a lot of making mistakes, and a lot of wrong turns. And that’s all okay – it’s better than okay, it’s great! Because each time you try something, each time you make a mistake, and each time you take a wrong turn, you *learn* something along the way and when you finally come to the solution you’ll understand it in much more depth.

So, the TL;DR here is don’t try and rush – take your time, don’t be afraid to explore tangents that come along, don’t be afraid to experiment with your projects, and don’t be afraid to go back to something you learned previously and relearn it as needed.

#### What’s your background?

Second, you should take into account what kind of background you had before you came to Swift. You see, learning to build apps takes a wide variety of skills, and if you’re coming to the table with lots of existing knowledge such as version control, data structures, algorithms, and more, then you have a real head start compared to folks who are coming new to computer science in general alongside to coming fresh to Swift and other Apple frameworks.

So, we could think about a few different places you might be right now:

-   If you have a computer science degree, you will already have covered many of the CS fundamentals required to get moving with Swift. Things like variables, arrays, loops, arrays, sets, functions, OOP, and more will all prove useful in Swift, as well all your work with data structures and algorithms. This could shave 4-6 months off your learning path depending on what subjects you studied, and also give you an advantage when applying for a job at many companies.
-   If you don’t have a CS degree but *did* go to a coding bootcamp, again you will have many of the fundamentals you need to get moving with Swift. This won’t give you the same advantage when applying for a job at those companies, because often they literally expect a degree so they can put a check on their list of arbitrary requirements, but it will still shave maybe three or four months off your learning path.
-   If you don’t have a CS degree and did *not* attend a bootcamp, but you *have* been doing coding your spare time, again that will shave off some time off your learning path – probably two months or so, depending on what language or frameworks you were using.

And what if you have no CS degree, no bootcamp, and no prior coding experience? Then I’d say you’re looking at 9 to 12 months to from nothing to an entry-level job. Yes, that’s potentially a full year of work alongside whatever is your current full-time job, and that’s just to get your first job as an iOS developer.

Is it always a year? No. Like I said, you can shave 1 to 6 months off that if you do have prior experience. If you take the best numbers on both sides – 9 months from nothing to an entry-level job, plus shaving 6 months off for having a CS degree – and that potentially means you could be hirable in just 3 months, which is remarkable.

Now, you might think getting your first job in three months is impossible, but it isn’t. Heck, I met someone who was following my 100 Days of Swift course who get a job *before* they reached day 50 – they had already learned enough about app development in under two months, because they put in the work to make every day count.

So, you don’t need a CS degree, and you don’t need a bootcamp, but you do need to be prepared to work hard.

#### Cut yourself some slack

The third thing I want to address before we move on is to say “it takes as long as it takes.” John Lennon has a fantastic lyric that I love, which is “life is what happens when you’re busy making other plans.”

It’s really fantastic if you have grand plans for learning, and big aspirations for the job you want to have, but sometimes you’re tired, sometimes you’re stressed out, sometimes your roof starts leaking or your dog needs to go to the vet or your kids need extra help with their homework, or whatever, and that’s just life. So, please don’t beat yourself up if you fall behind with your learning schedule, or if you find yourself missing a few days or even a few weeks, and so on – as long as you’re resilient, you’ll get there.

If you work super hard and get a job after 50 days, that’s fantastic – well done! If it takes you 500 days, that’s also fantastic and you should be just as proud. Heck, if it takes you five years I know it’s probably not what you wanted, but the end result is the same and that’s what matters.

### Preparing to apply

Last but not least, if you’re a little further into your iOS learning path and starting to think about getting that first entry-level job, I want to point you to a massive collection of resources I assembled to help you.

On my site you can click Careers > Start Here, or just visit [https://www.hackingwithswift.com/career-guide](https://www.hackingwithswift.com/career-guide) directly. There you’ll find an *epic* collection of resources that will help you no matter where you are, all of which are free:

-   Interactive skill reviews to test your knowledge of core topics.
-   Coding tests that are used around the world in real job interviews.
-   Over 200 commonly used interview questions, along with suggestions for ways you can answer them.
-   Articles covering how to find jobs, how to do your best at interviews, and more.

Just go to the URL and you’ll find links to all that and more in one place.

I also want to point you towards Sean Allen’s series of videos for Swift interview tips – he has a [whole playlist for them](https://www.youtube.com/playlist?list=PL8seg1JPkqgF5wazzCKSq3EEfqt3t8mvA) where you can work through individual discussions such as classes vs structs, functional programming, error handling, and more. None of the videos are super long, but each one is aimed at giving you the skills you need to perform well in an interview scenario.

### Where now?

Okay, so I’ve gone through the core and extension skills you need, common mistakes folks make when learning, what courses you can follow, how to connect to the iOS community, and how to prepare for your job interview – that’s a huge amount to get through, and I hope it’s been useful.

What’s more, I hope I’ve shown you how much is out there that is completely free. Yes, I know the temptation is strong to splash out a hundred bucks or more for a course, but relax – get moving first, find some momentum, and also find someone who teaches Swift in a way that works for you. And then, when you’re in a good place and feel ready, fine: go ahead and spend some money if you want.

Best of luck with your journey!

[Sponsor Hacking with Swift and reach the world's largest Swift community!](https://www.hackingwithswift.com/sponsor)