---
publish: true
author: Andrew Thiesen
creation date: Friday 25 Aug 2023-13:31:57
modification date: Tuesday 5th 05 Sep 2023-13:42:41
published: "true"
tags:
  - Obsidian
  - system
  - template
  - thermos
"date created:": Friday, August 25th 2023, 1:31:57 pm
"date modified:": Thursday, September 7th 2023, 5:14:23 am
---
# Introduction

The [[Core Plugin(s)]] in [[Obsidian]] called the [[unique note creator]] allows you to create a basic [[Unique Note Template]] based on simple criteria in the configuration from the [[Obsidian]] [[GUI]].

For example, if you create a new note at 09:45 on Jan 1st, 2024, Unique note creator creates a note with `202401010945` as its name. If a note with the same name exists, the new note uses the next available timestamp. [Source](https://help.obsidian.md/Plugins/Unique+note+creator)

This is a great tool in [[Obsidian]], but it has drawbacks. Using this [[system]] ends up generating a series of [[note(s) or Zettel(s)]] that end up looking like this:

![[Captured with CleanShot on 20230905 @ 13.05.14 of Unique note creator - AFS - Obsidian v1.4.5 - Obsidian AJ Thiesen.png]]

## My System

I have discovered, (through significant) trial and error, that this [[system]] does not really work for ***me***. I have been experimenting with the [[Core Plugin(s)]] to figure out a better [[system]], and believe I have found a workable answer.

After working with the above [[system]] to create a [[Unique Note]], I found that attempting to work with this [[system]] was prohibitive in linking my [[note(s)/Zettel(s)]] in a way that was meaningful for *me*.

### Unique Note Creator Configuration and Template

I am using the [[Unique Note Creator Configuration and Template]] and [[Daily Note]] [[Core Plugin(s)]] from [[Obsidian]]. I started by configuring the [[Unique Note Creator Configuration and Template]] from the [[Obsidian]] [[Core Plugin(s)]].

![[Captured with CleanShot on 20230905 @ 13.19.39 of Unique note creator - AFS - Obsidian v1.4.5 - Obsidian AJ Thiesen.png]]

1. The `New File Location` I have elected to use is the default `/` or [[root]] of my [[Obsidian]] instance. I want *every* [[Unique Note]] to continually default to this directory. 
2. My `Template File Location` is a directory called `Templates` under `/` where my [[Unique Note Template]] can "live".
3. Note the [[Date Format]] in the above screenshot. It's *only* an `X`. The `X` in the above screenshot represents the [[Unix Timestamp]] from the [momentjs.com](https://momentjs.com/docs/#/displaying/unix-timestamp-milliseconds/) documentation which is used in the [[Obsidian]] core functionality.

### Extending the Unique Note Template with *Templater*

This however, is only the first part of my [[Unique Note]] system. I am ***also*** leveraging the [[file property]] [[Core Plugin(s)]] to add additional metadata to each [[Unique Note]]. This additional [[metadata]] is then used for advanced [[analytics]] with the [[Dataview]] [[Community Plugin(s)]].

You can add a [[file property]] to a [[note(s)/Zettel(s)]] through multiple options which are documented [here](https://help.obsidian.md/Editing+and+formatting/Properties). 

In addition to the [[Unique Note Template]] from the [[Core Plugin(s)]], I am also leveraging the [[Templater]] plug-in from the [[Community Plugin(s)]]. This allows me to inject *human readable* dates into my [[note(s)/Zettel(s)]] as well as the [[Unix Timestamp]].

#### Adding *Templater* to the [[Unique Note Template]]
1. Ensure that you have the the [[Community Plugin(s)]] feature enabled in [[Obsidian]].
2. Install the [[Templater]] plug-in.
3. Enable the [[Templater]] plug-in.

That's it! Kind of. I am using some very basic [[Templater commands]], I copy and pasted the [[Templater commands]] from the *Templater* documentation [here](https://silentvoid13.github.io/Templater/). 

Inside of my `/Templates` directory, I created a new file called [[Unique Note Template]]. At the top of this file, I added all of the [[file property]] that I wanted. 

[[Obsidian]] displays your [[file property]] in a nice pretty format, as the below image shows.

![[Captured with CleanShot on 20230905 @ 14.57.06 of Daily Note Template - AFS - Obsidian v1.4.5 - Obsidian AJ Thiesen.png]]

In this note, I am displaying the [[file property]] in [[yaml]] format, which is supported by [[Obsidian]]. 

1. Property - Name: Author and my name.
```yaml
author: Andrew Thiesen (me)
```

A [[Unique Note]] can be anything. A passing thought, something that I read, that I want to revisit, later, a dream, a piece of code, etc. For the most part however, they will be a cone , and as such I will be the primary author. *IF* it some other piece of data or writing, I will insert the appropriate Author's name here.

2. Property - Creation Date
```yaml
creation date: Friday 25th 25 Aug 2023-13:31:57
```

Remember how I mention trial and error, earlier? This is the trial and error that I was talking about. **Without** the [[Templater]] [[Community Plugin(s)]], I was not able to get the following code to work correctly:

```javascript
Friday 25th 25 Aug 2023-13:31:57
```

and I couldn't figure out why!

I re-installed the [[Templater]] [[Community Plugin(s)]], *THEN* added that line of [[Javascript]] to my [[file property]] field(s).

Even though I was not *using* [[Templater]] specifically, to create my [[Unique Note Template]], I still wanted to *call* the [[Javascript]] command(S) that relies on the [[Templater]] [[Community Plugin(s)]] to be present. Once, I realized that, it was simply a matter of determining the [[syntax]] of the [momentjs.com](https://momentjs.com/docs/#/displaying/format/) string of [[tokens]] to establish ***my*** preferred date style.

In this case,

```javascript
dddd Do DD MMM YYYY-HH:mm:ss
```

becomes: Tuesday 05 Sep 2023-07:02:19.

3. Property - Modification Date
```yaml
modification date: Tuesday 05 Sep 2023-19:48:51
```

The Modification Date [[file property]] and the Creation Date [[file property]] *act* similarly, but function differently.

I want to be able to track when a [[note(s)/Zettel(s)]] is modified. So, when a [[note(s)/Zettel(s)]] **is** updated, changed, modified, you will see the corresponding date to the change in the Creation Date [[file property]], like below:

![[Captured with CleanShot on 20230905 @ 15.24.39 of Unique Note Creator Configuration and Template - AFS - Obsidian v1.4.5 - Obsidian AJ Thiesen.png]]

> [!warning]
> If you choose to replicate this process, be aware that the [[file property]] Create Date and Modification Date **will be the same** for newly created files, *until* the file is actually modified. 
> 
> Similar to below.
> 
> ![[Captured with CleanShot on 20230905 @ 15.27.35 of 1693912967 - AFS - Obsidian v1.4.5 - Obsidian AJ Thiesen.png]]

4. Property - Publish
```yaml
publish : true OR false
```

The [[Publish]] [[file property]] is distinct in its functionality. When you invoke the `Publish` command for [[Obsidian]], it presents a list of files and folder which you can mark for Publishing, or skip, and they will not be published to your public [[Obsidian]].  

The [[Publish]] [[file property]] marks a file as hidden, in the [[Publish]] menu. 

For example, the below file is marked with `false` in the [[Publish]] [[file property]].

![[Captured with CleanShot on 20230905 @ 19.05.34 of 1693955038 - AFS - Obsidian v1.4.5 - Obsidian AJ Thiesen.png]]

When I invoke the [[Publish]] command, the file is not listed, at all:

![[Captured with CleanShot on 20230905 @ 19.08.27 of Unique Note Creator Configuration and Template - AFS - Obsidian v1.4.5 - Obsidian AJ Thiesen.png]]

> [!tip]
> The [[Publish]] [[file property]] will prevent you from *accidentally* publishing a private file. However, depending on your [[Daily Note Template]] or [[Unique Note Template]] you will need to change this manually every time you [[Publish]] or set your [[Publish]] [[file property]] to either `true` or `false` depending on your preference(s).

5. Property - Tags
The final [[file property]] that I have templates in every [[note(s)/Zettel(s)]] is `Tags`.
```yaml
tags : test
```

The [[Tag(s)]] [[file property]] is used to categorize my [[note(s)/Zettel(s)]] via a "standard" `#` [[Tag(s)]] methodology. You can read more about my [[Tag(s) structure]] in [[Obsidian and Writing/1 - Notes/Structuring Obsidian]].

### Bringing It All Together

If you made it this far, THANK YOU! I know that the wall of text you just read was dense and in-depth. 

My "[[automation]]"s with [[Obsidian]] are probably not the most [[efficient]] or glamorous, but they achieve the [[goal(s)]] that ***I*** have outlined for myself and for how I use [[Obsidian]].

I encourage you to dig into the various [[Core Plugin(s)]] and [[Community Plugin(s)]] that are available to use in [[Obsidian]], especially [[Templater]], whose functions I have barely scratched the surface of.

Again, Thank You!
