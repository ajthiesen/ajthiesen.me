[[ReadItLater]] [[Article]]

# [Building GPT-3 applications — beyond the prompt - Data Science at Microsoft - Medium](https://medium.com/data-science-at-microsoft/building-gpt-3-applications-beyond-the-prompt-504140835560)

A DALL-E 2 rendering curated by the author for the prompt “a cat performing a brain dump, digital art.”

Large Language Models (LLMs), notably [OpenAI’s GPT-3](https://platform.openai.com/docs/models/gpt-3), have been growing in popularity with both academics and industry practitioners. With the recent release of [ChatGPT](https://openai.com/blog/chatgpt/), built on top of a variation of GPT-3, these models have even reached considerable fame amid the general public: [Everybody seems to be talking about it](https://www.bing.com/news/search?q=chatgpt)! It is then perhaps a good time to learn about both *why* and *how* to apply them in data science and software development, among other fields.

As the title of this article implies, I intend to go deeper than much of the existing learning content, drawing from my own direct experience in developing a couple GPT-3–based solutions to address what data scientists or software engineers eager to use GPT-3 should know to succeed.

There are several aspects of why one would want to use LLMs such as GPT-3 to build applications. The obvious one is what already impresses people: One can get incredibly good text generated from the simple input of some instructions or prefixes (the so-called *prompt*). Yet, on closer inspection, this is not actually that important here.

After all, we have had great language models that perform various impressive tasks (such as language translation) for a few years now, particularly after the creation of the [transformer architecture](https://arxiv.org/abs/1706.03762). What, in my view, distinguishes GPT-3 and similar pre-trained prompt-based models is their *reusability and flexibility*. Without any adjustment or fine-tuning, one can very easily integrate GPT-3 in any Internet-connected software application and apply it to many different domains and purposes just by tweaking some intuitive input parameters.

This brings exciting possibilities to any aspect of programming, such as those used in data science or software engineering. **Just as you can leverage simple programming building blocks (e.g., libraries) to quickly assemble applications, now you can do the same with powerful AI models like GPT-3.** For lack of a better term, I call this **AI-Centered Software Engineering**. In this tutorial, I show you *why this approach is powerful* and *how to leverage this power* in your own data science and general programming work, using GPT-3 specifically, though many of the principles would still hold for similar prompt-based models.

Please note that GPT-3 is, in reality, a family of models derived from the “[original GPT-3](https://arxiv.org/abs/2005.14165).” There are now variants (and subvariants) that bring different properties, such as being lighter (curie or babbage), responding better to instructions ([InstructGPT](https://openai.com/blog/instruction-following/)), specializing in program generation and comprehension ([Codex](https://platform.openai.com/docs/models/codex)), or being an overall better version (GPT-3.5). The now very popular ChatGPT system (and underlying model) is close to InstructGPT [according to OpenAI](https://openai.com/blog/chatgpt/), but at the time of writing there are few additional technical details and no API to leverage it yet. In this article, I employ GPT-3.5 specifically for the experiments and demonstrations, simply because it is currently the most powerful one that can be accessed via an API. However, the general principles and strategies we shall see are common to the whole family, thus for simplicity I refer simply to “GPT-3” without further qualifications throughout the tutorial. For the detailed distinction between the existing variants, please consult [OpenAI’s documentation in this regard](https://platform.openai.com/docs/model-index-for-researchers) and each variant’s specific documentation.

I begin by examining why exactly GPT-3 is a good AI-infused building block, and what one can do with it. Then, to make the discussion concrete, I introduce a working example — the Braindump application — to guide us through the remainder of the text, including methodological and technical aspects, with accompanying executable code, available at [https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump)!

**If you are in a rush to get up and running**, you can jump straight into the main Jupyter notebook, [/notebooks/study\_1.ipynb](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/blob/main/notebooks/study_1.ipynb), which demonstrates some of the key ideas described in this article, with code that can be directly reused to implement your own studies — but don’t forget to come back here later!

## Prerequisites for the tutorial

Before proceeding, ensure you have the following:

-   [**OpenAI API Key**](https://openai.com/api/) **or** [**Azure OpenAI Service API Key**](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/)**.** This is what provides access to GPT-3 models. Once you have your key, never share it with others — should someone use the API for non-compliant or even illegal purposes, remember that this would be traced back to you, not the original perpetrator!
-   **Python.** We’ll do everything using the Python language. The easiest way to get it, together with important data science libraries and tools, is to simply install the popular [Anaconda Python distribution](https://www.anaconda.com/).
-   **Jupyter Notebooks.** As we’ll see, it is recommended that you begin prototyping here. Jupyter is included in the Anaconda distribution.
-   [**The OpenAI Python Library**](https://github.com/openai/openai-python)**.** This is the easiest way to call the OpenAI API. It works with both the original and the Azure offers.
-   [**Streamlit**](https://streamlit.io/) **or** [**Gradio**](https://gradio.app/) **(or similar).** For a well-rounded prototype, we’ll need a proper user interface, which these tools can provide with ease.
-   My source code, written specifically for this tutorial, which contains all the details and can work as a starting point for your own projects: [https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump)

## Why pre-trained prompt-based models?

But wait! We *already have* reusable Machine Learning tools, right? True — however, when it comes to reusability, two factors must be considered:

-   **How easy they are to reuse.** For example, [scikit-learn](https://scikit-learn.org/stable/index.html) is a great framework for Machine Learning, but it is designed for you to train your own models first. So, while the tooling itself is great and reusable, the resulting models are typically not (unless you happen to be in a very similar situation to that of a previously trained model, of course).
-   **How flexible this reuse can be.** Other tools, like [SpaCy](https://spacy.io/), go a step further and provide pre-trained neural network models for a variety of NLP tasks. However, those are very specific tasks, so if you have a different use case, you can’t reuse them.

GPT-3 takes both criteria to a new level with so-called **prompt engineering**. To begin with, there’s no need to train GPT-3, it is *pre-trained*, and it can be used as is. **The way to use it couldn’t be simpler: You tell it, in plain English, what you want** (the **prompt**), and then it gives you that! Even if you do not provide explicit instructions, GPT-3 will generate a sensible output — it is, in effect, just finding the best **completion** to the input text.

There are other interesting technical capabilities being added over time, such as [*insertion* and *edition* modes](https://openai.com/blog/gpt-3-edit-insert/) instead of *completion*, but in this tutorial I focus on the core functionalities and methods.

GPT-3 is also incredibly flexible: It can handle virtually any topic and many different types of tasks. It can create arbitrary prose as shown in the image above, but also perform language translation, programming, and text classification, to name just a few.

This means that in just a couple of minutes you can get amazing results, in vastly different tasks, just by playing with the model. This, in turn, implies that you can try many, many ideas very quickly, thereby accelerating to a new order of magnitude the speed with which you can build a working prototype, and eventually a complete application! Data scientists, in particular, who traditionally use highly specialized tools for different tasks (such as sentiment analysis or data augmentation) now have an option to save much of that time through a common prompt-based solution. Furthermore, in the specific case of OpenAI models, they are **accessible through an API**, instead of relying on local processing, which is convenient.

Nevertheless, a GPT-3–based solution is not trivial to build. Contrary to what many GPT-3 demos seem to suggest, it might actually be counterproductive (or impossible) to try to solve your entire problem in a single model call. In reality, most applications — even simple ones — will need several subcomponents to work as intended, and each of these can often themselves be implemented with GPT-3 in various ways. Thus, problem decomposition can play an important role, which is another reason for seeing GPT-3 and related models as *productivity boosters* rather than as human replacements.

## Working example: Braindump

We’ll see how all this is possible through a concrete example: We’ll build a [Natural Language Understanding (NLU)](https://medium.com/data-science-at-microsoft/natural-language-understanding-whats-the-purpose-of-meaning-part-1-of-2-18a370a763) tool to allow the quick extraction, storage, and retrieval of various miscellaneous pieces of personal information, like shopping or to-do lists, phone numbers, email addresses, names, trivia, reminders, random ideas, and so on. No need to find the right form or press the right buttons for each kind: Just type what is in your mind and the application properly classifies, slices, and stores it. Hence, I call it **Braindump**.

I’ve often missed such a tool to make my brain lighter by expelling such trivialities from its neurons, without ending up with endless notes or specialized apps everywhere. In this article, we’ll go through the reasoning and some pieces of the actual program as necessary to demonstrate the approach. But all the source code for this example is available, and you may find it useful to have it in hand to perform your own practical experiments.

## Specification

In essence, the specification for this system is as follows. Because the objective is to extract information and make it searchable, we can begin by defining the columns of a table that will contain the extracted information, as follows:

-   **Category**: The general category to which the information belongs (e.g., “Work”, “Health”, “Travel”).
-   **Type**: The nature of the information stored (e.g., emails, phone numbers, prices, reminders).
-   **People**: Names of people or organizations involved in the extraction.
-   **Key**: The main object to which we are assigning some value. It is more free form than the former fields.
-   **Value:** The specific entry associated with the key — also more free-form than the other fields.

To make this more concrete, let us provide some examples of inputs and the expected outputs:

We would then obtain the following table:

Note that we did not say anything about which categories or types, or how to break the sentence in the various pieces of information. All of that is to be done by our system, with the help of GPT-3. Once that is in place, we can filter it in any way we like, and also search for specific terms. The search itself will be helped by GPT-3 as well, which I explain later. Ultimately, we get an application that looks like this:

## Development process

It is very easy to get some *interesting* results from GPT-3 with almost no effort, but *good* results *do* require work. Thus, despite the temptation to jump straight into writing prompts to GPT-3, remember Hamlet:

> “Though this be madness, yet there is method in it.”

We’ll achieve better results by adopting some simple structuring practices to support our hacking, and have even more fun this way. In this section we review them to prepare ourselves for the later step-by-step construction of the Braindump application.

## Proofs-of-concept

In data science, it is typically a good idea to work on a proof-of-concept (POC) before committing to a complete product or solution. The reason is simple: It is not always clear whether a certain technique can help in the solution of a problem of interest because it is often, to a large extent, an empirical matter. POCs are thus used to demonstrate powerful concepts quickly and at very low cost, which, if successful, can justify further investments.

This is particularly relevant for GPT-3–based solutions because GPT-3 is a nascent foundational technology, and as such it is not fully clear how best to leverage it. In practice, thus, it is a good idea to start by producing POCs to investigate the extent to which an idea can be supported by GPT-3. Therefore, in this tutorial we develop the working example as a POC as well — I want to prove the concept to you, the reader!

Once you have a successful POC built on top of GPT-3, you may very well decide to optimize it (e.g., via fine-tuning) or reimplement it by using other more complex (but perhaps not-so-reusable) technologies. The point here is simply that you can get very far, very fast, with minimal effort by leveraging flexible pretrained models like GPT-3. Whether that’s enough to get one to production is a different matter that I do not explore deeply in this article.

## Development phases

The following diagram shows the main phases of the proposed approach. Note, in particular, the importance of iteration. As one advances through the POC construction, various aspects become clearer, including how to best leverage the language model.

## Phase 1: Developing your intuition in the Playground

OpenAI has a very interesting web-based tool, called [Playground](https://beta.openai.com/playground), which allows one to quickly input prompts and get results. Playing in the Playground is a first step toward creating some intuition regarding the problem at hand.

In the screenshot above, the first paragraph is the prompt and the second one (highlighted in green) is the prediction. The main model parameters can be easily changed in the toolbar on the right. Typically, you’d want some sensible — albeit admittedly imperfect — output at this point, which would suggest that further work is warranted.

## Phase 2: Specification

A specification defines what is to be built, not how to build it. Ideally, we would like to have a complete and correct specification from the start, but unfortunately this clarity seldom comes at first — and much less when creating LLM-based prototypes. Hence, while we need a (simple) specification to begin, we must understand that this specification will evolve because:

-   Sometimes the motivation for a POC is an incipient insight that must, due to its extreme immaturity, be worked out gradually into more well-formed propositions.
-   During prompt engineering, as we assess the powers of the language model, we may determine that certain things work better or worse than initially expected. Thus, we may wish to adjust what we aim to build.
-   During concrete experiments, with real examples, we may realize that we forgot important elements that are not being properly captured. For instance, perhaps we realize there’s a new column we could add to our table schema that would make the extracted information more useful.
-   As we explore and refine the prompts and resulting application, we may get fresh ideas that allow us to improve on our original specification.

This is also why in the process diagram above I have emphasized the iterative nature of various steps, including the specification itself. Note that because we are building a simple prototype, the cost in changing the specification is small. In fact, it is expected and much easier to refine it at the prototype stage rather than when it is a deployed product with many users!

## Phase 3: Engineering your prompts in Jupyter

Once you decide that you want to tackle the problem, you can move to prompt engineering. Finding good prompts is not trivial, so is worth being systematic about it, gradually trying out possibilities. To experiment with prompt variations, different examples, and auxiliary architectural elements, I recommend working with a sequence of Jupyter notebooks. You begin by a first study, learn something, *leave it there*, then start a second study, learn something, *leave it there,* and so on. Note that at each step you leave something behind, so that you can go back and see what results you were getting in the past and make sure you are actually making progress as you go. We’ll examine an actual prompt engineering example shortly.

## Phase 4: Making it usable through Streamlit, Gradio, or similar

After you are satisfied with the results, you may wish to make the technology quickly available to potential early users, which will:

-   Clearly demonstrate the value of your technology for stakeholders.
-   Provide an opportunity to obtain feedback from these users, helping to further improve on it.

These users will likely not be familiar with Python programming, so it is useful to have an application that exposes the functionality in an easy-to-use manner. Moreover, even for programmers, an actual application can be good because it allows one to try the solution on one’s daily work, as one would with any other application, thus perhaps bringing further ideas and inspiration.

To do so, you don’t need to spend a lot of time. There are tools that allow you to create the prototype’s user interface in a very easy and convenient way. For this article, we shall employ [Streamlit](https://streamlit.io/).

## Phase 5: Ship the POC or begin productionizing

After sufficient iterations, you may decide that the technology is ready to be used as is. Sometimes you just want a good POC to demonstrate a concept to certain people, for example potential customers of more customized solutions. Or you may, instead, decide that the prototype should evolve into a full-fledged product, and use your POC to convince other stakeholders that the investment is worth it. I’ll not address this phase in this article, but only gloss over a couple of topics that might be of interest at such a point.

## Development cycle with multiple stakeholders (optional)

If you are working alone, or perhaps only occasionally nagging your spouse or significant other to show how cool you are, the notion of a development cycle beyond some lone program iterations might be pointless. However, as soon as you have a proper business stakeholder beyond yourself, a simple methodology can help. Here’s a simple version of what I recommend, leveraging elements from scrum methodology and my own work style for prototype development:

-   **Time-boxed:** Work on time-boxed sprints. For example, sprints of two weeks. This forces participants to plan for work that can be demonstrated at regular intervals. For a prototype, regular and quick results are key, as they will typically be used to justify longer and more expensive investments.
-   **Review and planning:** At the beginning of each sprint, hold a review and planning meeting in which: 1.) The technical lead demonstrates what was done and what is now possible with the tool, preferably using concrete examples; and 2.) The business stakeholders provide feedback regarding what was demonstrated and provide further business problems for the technical team to work on during the next sprint.
-   **Assisted operation:** A key purpose of a prototype is to be tested by the intended users. Unfortunately, by their nature, prototypes can be clumsy or hard to use. Therefore, during any sprint, consider hosting an *assisted operation* session, in which one or more business users bring problems and the technical person helps them solve the problem with the tool as it stands.
-   **Deployment:** Eventually, if you are on the right track, you’ll probably note that your users want to use the tool without assistance. They’ll love it and they don’t care that it is not really ready! Use this force in your favor: Make the tool provisionally available somewhere, and keep observing how it is used, as well as collecting direct feedback.

## Step-by-step Braindump implementation

Now that we’ve established how to organize our main activities, let’s demonstrate the process in practice and dive into the actual implementation for our working example. We assume that the playground stage has already been accomplished, and we have decided to proceed with the POC development. **To best follow the tutorial in this section, it is advisable to download the source code or have the GitHub repository open, right at hand to check details we leave out of the text.** Different people have different skills, thus in this text we cover only the main points, leaving each reader free to dive deeper into the code only when necessary.

Please note as well that GPT-3 output is non-deterministic to varying degrees (controlled, notably, by the *temperature* parameter). Hence, while the whole tutorial is reproducible and the overall phenomena should be equivalent, some details might be different in your new executions.

## Specification

Earlier we saw the sketch of the final specification for the Braindump application, so I won’t repeat it here. I’ve put it there to allow readers to quickly understand *what we are going to build.* However, as mentioned before, in reality a POC specification is often something that we build gradually over time. For our working example, the initial specification was simpler than where we ultimately landed. Initially, I had specified a table with only three columns instead of the five:

-   **Category**: The general category to which the information belongs (e.g., “Work”, “Health”, “Travel”).
-   **Key**: The main object to which we are assigning some value. It is more free form than the former fields.
-   **Value:** the specific entry associated with the key — also more free-form than the other fields.

We’ll see how and why we decided to add more fields (namely, “Type” and “People”) during the prompt engineering process.

## User tasks decomposition

Once we have a tentative high-level specification, we can further decompose it into the user tasks that need to be accomplished, and how GPT-3 could help with each one. For us, there are two such tasks:

-   **Extracting facts from Natural Language and adding them to a database:** GPT-3 can be used to convert NL utterances to well-formed tuples with factual information.
-   **Search the database using keywords:** GPT-3 can augment the search terms with synonyms and other related terms.

## Prompt engineering

As we saw, one of the most critical novelties that GPT-3 and similar models bring is the *prompt*, which inputs both instructions and content to the model. This is how a single pretrained model can be used in vastly different use cases, and therefore it is no surprise that writing good prompts is important — a task better known as **prompt engineering**. However, prompt engineering is not only about writing a good prompt in one go! It requires, at a minimum: 1.) An appropriate language processing architecture to deal with prompt composition and, later, model output interpretation; and 2.) A gradual refinement of the prompts, carefully examining the results to iteratively improve them.

## Language processing architecture

Much of what we read online about GPT-3 and similar methods talks only about the prompt. That’s a significant oversight because a lot is needed to get good results *beyond* the prompt*.* For this tutorial, we’ll use the simplest possible architecture that still gives us the necessary control: Besides the model itself, we’ll have a **pre-** and a **post-processor**.

These processors can begin as simple auxiliary functions in a Jupyter notebook, and eventually they can be moved to their own classes to better structure the system.

## Iterative prompt development

Although most of what we read about prompts implies that they must be written as readable English, actually a good prompt *can* be text that looks like gibberish to a human reader, a curious phenomenon that is of interest to [current research](https://aclanthology.org/2022.naacl-main.266/). **Nevertheless, here we shall consider only prompts written in readable English**. Manual prompt engineering in this way proceeds in cycles: Write a prompt, test it with the available data (or just a couple of manual inputs), examine the mistakes, fix the prompt to account for those mistakes, and repeat. Occasionally, we’ll have reason to tweak the specification itself too, as our explorations bring more clarity about the true tasks we want to perform.

In my experience, this simple procedure can lead us quite far. Of course, some corner cases will probably remain, but remember that at this point perfection is not the goal; rather, we want something that is sufficiently powerful to demonstrate that it is worthwhile to invest further resources in the solution — **we are proving the concept**! But it is also possible that your specific problem might be simply too hard for this method, so if you don’t get some interesting results in your first iterations, perhaps you should consider using another technique rather than GPT-3.

Recall that we have two user tasks for our working example here, *fact extraction* and *search*. Let us thus explore prompts for both. Below I highlight the main points, and the complete executable exploration can be found in the [/notebooks/study\_1.ipynb](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/blob/main/notebooks/study_1.ipynb) notebook file in the repository. Besides the experiments described here, the notebook also contains various auxiliary functions, for example this one, which wraps the calls to the OpenAI API:

def gpt3\_complete(prompt, engine='text-davinci-003', temperature=0.1,   
                  max\_tokens=200, top\_p=1.0, frequency\_penalty=0.0,   
                  presence\_penalty=0.0, stop=None, echo=False):

    response = openai.Completion.create(  
      engine=engine,  
      prompt=prompt,  
      temperature=temperature,  
      max\_tokens=max\_tokens,  
      top\_p=top\_p,  
      frequency\_penalty=frequency\_penalty,  
      presence\_penalty=presence\_penalty,  
      stop=stop,  
      echo=echo  
    )

    completion = response\['choices'\]\[0\]\['text'\]

    return completion

And this one that processes the string output by the model into an actual data structure that we can use in the application:

def string\_to\_tuples(s):  
    """"  
    Converts a string that looks like a tuple to an actual Python tuple.  
    """  
    return \[eval(s.strip()) for s in extract\_lines\_from\_result(s)\]

I highly recommend having this notebook open so you can follow the rest of this section (conveniently, you can see it rendered directly on GitHub, without having to download it).

## Prompts for user task: Fact extraction

Even the first prompt of an experienced prompt engineer contains some significant structure. However, it is instructive here to consider a very simple prompt first:

\# Extraction prompt 1, given user input x  
f"""  
Extract pieces of information, like phone numbers, email addresses, names,   
trivia, reminders, etc.  
Input: {x}  
"""

There are some obvious problems here: The word “Output” is useless, there’s no mention of categories, and the “extracted” facts are either trivial, missing important parts, or plainly wrong! We gave too little information about what we want, so the model is excessively unconstrained. Further, how can we possibly parse the result? There’s no contract or well-defined format. We begin to fix these issues in the second prompt:

\# Extraction prompt 2, given user input x  
f"""  
Extract pieces of personal information, like phone numbers, email   
addresses,names, trivia, reminders, etc., as tuples with the following   
format: (Category, Key, Value)  
Input: {x}  
"""

That’s better, though various problems appear: The useless “Output:” prefix remains; in the second input the facts are separated by commas, where we’d prefer one per line instead; also in the second input, the category misses the point — yes, we are talking about the boss’s interests, but the main theme was supposed to be work; in the last input, a kind of “header” also appears, which is unnecessary. At this point, we would have several options. We could, for instance, explicitly ask for the removal of the prefix. If you can successfully get away with an abstract problem formulation, avoiding examples might prevent you from introducing biases through them. However, it is often the case that by testing and playing with your system, you realize that **mistakes are being made in certain well-defined cases, so the addition of related examples can help you gradually correct those** without overcomplicating the problem description. We’ll do that in the next prompt:

\# Extraction prompt 3, given user input x  
f"""  
Extract pieces of personal information, like phone numbers, email   
addresses, names, trivia, reminders, etc., as tuples with the following   
format: (Category, Key, Value)

Example input: "Mom's phone number is 555-555-5555"  
Example output: ("Family", "mom's phone number", "555-555-5555")

Input: {x}  
Output:   
"""

We can now see a number of improvements: Fact strings are consistently quoted; multiple facts are put one per line; the information recorded is more detailed overall; and the “Sales” category sounds more appropriate than the more general “Email” we had before. It is hard to understand why the model did that, but perhaps the “Family” example given in the prompt turned its attention in the right direction (e.g., don’t focus on the data type when attributing a category), and the example key (“mom’s phone number”) demonstrated the right amount of detail, aligning results with our own intuition. **Leveraging one’s intuition, just like one would if talking to another person, can often help.** This might be surprising at first, but it is surely what we would expect from a *natural* language model — being *natural* means using our everyday communication tricks, notably our linguistic intuition.

There are, however, still some oddities. In the second example, the boss’s preferences are awkwardly given as a Boolean list; in the last example, it would be better to break “yoga, ballet, ??” into separate facts; and the categories all sound rather random. To address these points, in the next prompt we introduce a multi-fact example, an additional assumption regarding multiple facts, and a constraint on the valid categories. The latter is achieved by using some dynamic prompt structure: When we build the application, we will allow the user to select the categories, which are then written in the prompt (just like the user input to be interpreted), thus making it customizable. **Dynamic user- or data-dependent constraints provide an effective way to generalize a prompt and connect it to the rest of the application, while making it robust too.**

\# Extraction prompt 4, given user input x and valid categories  
f"""  
Extract pieces of personal information, like phone numbers, email   
addresses, names, trivia, reminders, etc., as tuples with the following   
format: (Category, Key, Value)  
Assume everything mentioned refers to the same thing. Constraints:  
  - Allowed Categories: {', '.join(categories)}

Example input: "Mom's phone number is 555-555-5555"  
Example output: ("Family", "mom's phone number", "555-555-5555")

Example input: "Need to do: lab work, ultrasound, buy aspirin"  
Example output:   
("Health", "to do", "lab work")  
("Health", "to do", "ultrasound")  
("Health", "buy", "aspirin") 

Input: {x}  
Output:   
"""

This is better: The categories comply with our constraints and the last example was broken into various facts. However, we note that the category “Hobbies” is misleading, particularly because nothing is said of the receipts! The pediatrician one is also terser than we want now. Perhaps our schema (Category, Key, Value) is just too poor to properly absorb the necessary information — so it might be time to refine our specification. In fact, note that we often talk about *people* or organizations (the boss, the pediatrician, the gym) and the *type* of information being recorded is also important (emails, receipts, doubts). Interestingly, these are reasonably commonplace kinds of data, thus GPT-3 should handle them easily, which means that we would not be making the problem any harder — we’d just get more detailed information for free. In this way, we add the *Type* and *People* fields and adapt the prompt as follows:

\# Extraction prompt 5, given user input x and valid categories  
f"""  
Extract pieces of personal information, like phone numbers, email   
addresses, names, trivia, reminders, etc., as tuples with the following   
format: (Category, Type, People, Key, Value)  
Assume everything mentioned refers to the same thing. Constraints:  
  - Allowed Categories: {', '.join(categories)}  
  - Allowed Types: "List", "Email", "Phone", "Address", "Document",   
    "Pendency", "Price", "Reminder", "Note", "Doubt", "Wish", "Other"  
  - People contain the name or description of the people or organizations   
    concerned, or is empty if no person or organization is mentioned.

  Example input: "Mom's phone number is 555-555-5555"  
Example output: ("Family", "Phone", "mom", "mom's number", "555-555-5555")

Example input: "email of the building administration = adm@example.com"  
Example output: ("Work", "Email", "building administration",   
                 "email", "adm@example.com")

Example input: "Need to do: lab work, ultrasound, buy aspirin"  
Example output:   
("Health", "List", "", "to do", "lab work")  
("Health", "List", "", "to do", "ultrasound")  
("Shopping", "List", "", "aspirin", "buy") 

Input: {x}  
Output:   
"""

This is almost perfect. Except for the last example, the people and organizations involved are exactly as desired, and the level of detail is fine. But the last one is indeed a mess, mixing up categories, types, and how keys and values are used. What happened? It looks like the model is occasionally a bit too inventive regarding how it handles multiple facts outputs. **In such cases, before changing the prompt, we can simply change a model parameter that controls how “creative” GPT-3 gets, the *temperature* parameter.** In this instance, after reducing the temperature from 0.5 to 0.1 we got a more sensible result:

Now everything looks right. In the accompanying Jupyter notebook you can inspect the results for other examples too. Suffice it to say here that we now have a satisfactory prompt and can move to the next user task. Nevertheless, you can also continue the exercise, for instance by:

-   Adding various new examples, rerunning the experiments, and tweaking the prompts and model parameters as appropriate. This is just a tutorial written on weekends, not a commercial product, so it is likely that I missed some important cases!
-   Picking a specific category or type of fact that you want to be really good at and optimizing everything to that end. For example, perhaps instead of a general fact database, you’d rather have one specializing in shopping. Increasing the focus often helps in getting better results, because it reduces uncertainty, allows more corner cases to be properly worked out, and perhaps leverages domains in which the model is naturally better.
-   Learning about [other model parameters in the official documentation](https://beta.openai.com/docs/api-reference/completions/create) and experimenting with them. The [OpenAI Playground](https://beta.openai.com/playground) is also a great way to explore the effects of the various parameters available.

## Prompts for user task: Search

Search is a very complex problem (e.g., see recent articles from [Data Science at Microsoft](https://medium.com/data-science-at-microsoft) on [search ranking](https://medium.com/data-science-at-microsoft/search-and-ranking-for-information-retrieval-ir-5f9ca52dd056) and [search engine creation](https://medium.com/data-science-at-microsoft/creating-your-first-search-engine-from-scratch-81f850c760d4)), so we’ll not tackle it in its generality here. Rather, we’ll implement a simple search procedure and use GPT-3 to make it more powerful. Our procedure consists of looking for any of the keywords that the user queried. If a fact in the database contains one of them, it is returned. In this crude form, the search is very ineffective. If one queries for “injection” but there are only facts about “shot,” however, we’d miss important results. GPT-3 can help us here by augmenting the search terms, notably by including synonyms, so that a query for “injection” does return results containing only “shot.”

Even such a simple strategy has its nuances. Do we want to augment *all* words in the query? Probably not, as stop words, for example, can be safely removed. So, we have two sub-tasks that GPT-3 can help us with:

-   Extract the main terms from a query.
-   Augment the main terms with related ones.

Just as with the previous user task, finding good prompts for the search task requires iterative work. However, since I have already demonstrated that workflow above, for the present task I simply present the final prompts and some example results. For term extraction:

\# Query terms extraction prompt, given user query  
f"""  
Extract the main entities (one per line, without bullets) in the following   
sentence: "{query}"  
"""

And for data augmentation:

\# Data augmentation prompt, given a term  
f"""  
List some synonyms for the following term: "{term}"  
Synonyms (one synonym per line):  
"""

For our specific use case, we could also try to solve both sub-problems in a single prompt, but I’ve opted to separate them for the sake of illustrating how such things can be composed. Besides, it can always be the case that some of these tasks work better independently, and it is good to be aware of that for later optimization.

It is interesting to note that this augmentation prompt is in some sense doing the opposite of the ones we defined earlier, because previously we were *extracting* *information* present in the data, whereas now we are *introducing new information* to complement the data. This shows some of the versatility of LLMs, and the advantage of having a vast knowledge base baked into the model itself. It is up to us to be creative and leverage these qualities in different — and innovative — ways!

From here, we need only some auxiliary functions to wire the search together: Get a user input, extract its main terms, augment them, and then search a dataframe for them. I will not detail this here, but all the code is available in the notebook for your review and reuse.

## Application development

Now that we have good prompts for our tasks, we can put everything together in a usable application. It is wise to divide the work here into two major parts:

-   **The engine:** A Python library that encapsulates the main functions required to make the application work. Classes and methods here are to abstract the calls to GPT-3 so that users of the library don’t need to be aware of them at all.
-   **The user interface:** This exposes the underlying engine to the user, taking commands and presenting results.

These pieces interact to provide the overall user experience. Beyond traditional usability concerns, AI-based applications bring at least one new important challenge: AI models are by their nature imprecise, and it can be difficult to automatically detect incorrect outputs. So how can we be sure that the result really is what the user asked? And what do we do when the result fails, as it eventually most certainly will? Research on how to address this is ongoing, but a simple strategy might be enough for POC scenarios: **For each output, make sure it is easy for the user to inspect it, and that there’s a way to undo it and try again if the user finds it necessary.**

## The engine

It is relatively easy to build the engine. We need mainly to adapt the functions that were successful during our Jupyter experiments and add a complementary software structure around them to build a Python module. Note that we should not just copy and paste those functions. At this point, it is a good idea to introduce some proper software engineering practices: create classes with well-defined responsibilities, add convenience methods, and so on. This will provide a sound basis upon which to continue developing the technology and make its eventual productization easier.

Note that once you have a first engine, you can use it at least in two ways: as the foundation of your graphical application, but also as a library to make further experiments in Jupyter notebooks possible and easier (because most of the necessary functions will now be conveniently encapsulated). Thus, you may iterate the engine based on results from both sources.

For our working example, we’ll organize the engine’s implementation as follows:

-   Facts are stored in a CSV file and are manipulated by the application as a Pandas dataframe. This is merely to keep things simple of course — in a production version, a database engine could be better ([SQLite](https://docs.python.org/3/library/sqlite3.html) might be a good choice).
-   The engine contains methods to support a workflow that allows the user to examine the fact extraction before accepting it ([BraindumpEngine](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/blob/b2d1642d187d394786920b95486b016be824712b/src/engine.py#L7) class).
-   A preprocessor provides the mechanisms to build prompts for GPT-3 ([BraindumpPreprocessor](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/blob/b2d1642d187d394786920b95486b016be824712b/src/engine.py#L256) class).
-   A postprocessor provides the mechanisms to interpret GPT-3’s outputs ([BraindumpPostoprocessor](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/blob/b2d1642d187d394786920b95486b016be824712b/src/engine.py#L309) class).
-   Unit tests should be in place, particularly to check the quality of the information extraction.

The complete code for the engine is available at the [/src/engine.py](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/blob/main/src/engine.py) file. Data manipulation is straightforward, but the other points deserve to be further explored here.

***Workflow***

The main job of the engine is to coordinate the user’s workflow as he or she interacts with the application to provide key functionalities:

-   Allow the user to search a database with keywords.
-   Allow the user to insert new facts into the database using NL utterances.
-   Optionally, allow the user to manually check how GPT-3 interpreted the NL utterances, and either *commit* or *cancel* the data insertion.

In general, the engine should provide all the conveniences for guiding the application through the processes we need to support, including those that are specific to AI-based tools.

***Preprocessor***

The preprocessor provides the mechanisms to transform user utterances into appropriate prompts. In general, that might include:

-   Inserting a user NL utterance (e.g., the facts we are allowing the users to type).
-   Inserting dynamic user choices (e.g., specific categories chosen by the user).
-   Inserting table or document schemas of specific files into the prompt text, so that the prompt can leverage them.

In Braindump, we leverage only the first two.

***Postprocessor***

The postprocessor is responsible for parsing GPT-3’s response and performing any necessary additional computation. In general, that might include:

-   Breaking lines, trimming text, and normalizing capitalization, among other simple text transformations.
-   Instantiating appropriate data structures that can be more easily manipulated later by the system.
-   Checking for invalid elements (e.g., an invalid category).
-   Checking for offensive or illegal content. Remember that LLMs have been trained with vast amounts of rather arbitrary Internet content, which means they also carry information that users can find objectionable. Some platforms (such as the [Azure OpenAI Service offering](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/)) already support filtering those at the API call level.
-   If a program is being generated (e.g., as can be easily done with the [Codex](https://openai.com/blog/openai-codex/) version of GPT-3), applying appropriate program repair transformations as needed.
-   Checking for dangerous outputs. For example, if you are generating programs, it might be a good idea to ensure they cannot harm a user’s computer.

In Braindump, we apply only the first two.

***Testing***

Just as with any other software, LLM-based tools should also have automated tests. In addition to the general software engineering aspects regarding testing, we can add the following specific considerations:

-   The underlying model is expected to evolve over time. Though this typically means that the model gets better, it might also mean that prompts that worked well before stop working as well. Hence, it’s important to include tests to also guard against this expected behavioral change. In fact, as I write these lines, I’m wondering and fearing what the rumored upcoming GPT-4 model will do to my tutorial!
-   Different model outputs might be equally suitable as ground truth. In Braindump, for instance, it matters little if the model writes “buy” instead of “purchase” regarding a shopping list item. Hence, special matching operators can be used when writing tests, to make tests more resilient to such innocuous perturbations.

Testing technology for NLP systems is an area of growing interest and importance (for example, see [Beyond Accuracy: Behavioral Testing of NLP Models with CheckList](https://aclanthology.org/2020.acl-main.442/)). Here in Braindump we keep it very simple, but it surely could be made more sophisticated. Perhaps you can develop your own ideas in this regard! You can examine the example tests in the [/tests/](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/tree/main/tests) folder and use those as the starting point for more complex techniques.

## The user interface

As mentioned earlier, we’ll employ [Streamlit](https://streamlit.io/) to build the UI. While Streamlit is neither very flexible nor the most exquisite, it *is* very easy and quick to use. In a POC, the objective is to get something usable as quickly as possible, and that’s what Streamlit and similar frameworks (such as [Gradio](https://gradio.app/)) are designed for.

A Streamlit app is just a simple Python file that renders elements mostly in the order in which they appear in the program. Therefore, it is very easy to understand and get started. I will not cover the details here, but you can review the [/src/app.py](https://github.com/paulosalem/gpt3-poc-tutorial-with-braindump/blob/main/src/app.py) file. Instead, let us look at a simple snippet of app.py:

\# A snipped from app.py, "(...)" comments denote omitted segments. 

import streamlit as st  
\# (...)  
def app():  
    # (...)  
    # Setup the engine  
    @st.cache(allow\_output\_mutation=True)  
    def create\_engine():  
        return BraindumpEngine(default\_categories=default\_categories)  
    engine = create\_engine()   

      st.title("Braindump")  
    st.write("A simple app to dump your facts, reminders,   
              purchases needs, prices, notes, etc., into a database   
              and query them later.")

      # (...)

            df\_results = engine.query(query,   
                                categories=categories\_filter,  
                                entry\_types=entry\_types\_filter,   
                                people=people\_filter)  
\# (...)

if \_\_name\_\_ == '\_\_main\_\_':  
    app()

In this script, we see that:

-   All the application UI is built inside the app() function, which is called as the entry point for the file. Every interaction of the user causes this function to be called again, re-rendering the UI with the latest changes. Though not very flexible, this is simple, quick, and easy to understand.
-   The engine is instantiated and preserved in a cache, so that it does not get recreated at each page rendering.
-   To write UI elements, like title and text, we have special methods from Streamlit, such as st.title() and st.write(). There’s good [online documentation](https://docs.streamlit.io/library/api-reference) regarding these.
-   The engine methods are called to support user tasks, such as engine.query().

The rest of the script contains some decision logic, as well as other UI-related and engine calls. It provides the means by which the user can:

-   Add new facts through a simple input text field.
-   Optionally, check how the fact is interpreted by GPT-3 *before* committing it to the database.
-   Search for stored facts, using keywords and filters (for Category, Type, and People).
-   Specify various technical parameters related to GPT-3 itself (e.g., the API key and the temperature parameter).

In the end, we get a Web application that looks like this in the *Search facts* tab:

In the *Add facts* tab, we get the following:

Notice that in this example we asked the application to display the interpretation of the user input so that the user can manually inspect it and decide whether to keep or not the interpretation (important elements for this are highlighted). As we mentioned before, this is one simple approach to deal with the inherent uncertainty of the current generation of LLM models.

After running the app.py as I have written it, try changing some of the contents of app.py to see how simple it is. You will be building your own UIs in no time at all.

## Beyond the prototype

We did it! Braindump works, and whatever you are trying to build might work just as well if you follow the process and tips above! Of course, I’m not saying the results are perfect, or even shippable as a product. Rather, our objective here is to demonstrate the potential for a product and generate excitement in our audience — which can then motivate and justify further investments (or falsify the initial intuition, freeing your time for the next hypothesis to test!). When you are ready to go further, here are some methods you can try.

For GPT-3 and similar LLMs specifically:

-   **Fine-tuning:** The convenience and agility of having a pre-trained model is enormous, because we don’t have to think about training data at all. However, results often *can* be substantially improved if we fine-tune GPT-3 with our own customized data. OpenAI has [a guide](https://beta.openai.com/docs/guides/fine-tuning) on how to do that.
-   **Divide-and-conquer the prompt:** Owing to the underlying transformer architecture, GPT-3 and similar models have a limit in the size of the prompts they accept. This means that for some use cases the prompt might be too small. For example, to summarize a long text, we can’t just input it in the prompt, because it won’t fit. So, it might be necessary to break such inputs into smaller chunks, process each individually, and combine the results.
-   **Alternative models:** LLMs are not all the same, not even in the GPT-3 family. OpenAI offers large models (e.g., text-davinci-003) and not-so-large models (e.g., text-curie-001), which allows one to trade off quality for speed and price. It also offers models for specific tasks, notably [Codex](https://openai.com/blog/openai-codex/) (e.g., code-davinci-002) for program generation and understanding.
-   **Out-of-domain check**: Some user inputs might make no sense to the application. Instead of giving a strange interpretation, it might be better simply to ignore such inputs. To handle these cases, a specific domain classification model can be used, which can be prototyped with GPT-3 as well.
-   **Stateful prompts:** One may wish to maintain some form of context in the prompt, so that GPT-3 can know where in a conversation or transaction it currently stands. At each step of the interaction, this context would be updated, thereby keeping the model’s answers current. This would be useful, for instance, for a chat bot implementation.
-   **Where to learn more**: The OpenAI [documentation](https://beta.openai.com/docs/introduction) and [blog](https://openai.com/blog/) are very well written and informative, and thus an excellent source of further learning. The recently released [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/) also brings relevant [documentation](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview).

For the problem formulation:

-   **Refine the problem**: In Braindump, we established a very simple database schema, starting with three columns, and later expanding to five. In reality, though, we’d probably need more. For example, if we are adding reminder facts, it would be very useful to have a datetime column so that the application engine could actually remind us at the appropriate moment! In general, besides making the application more useful, being more specific also helps the model deal with ambiguities.
-   **Select subproblems:** Sometimes you’ll notice that your solution works well for certain subproblems and not others. You may thus wish to consider refocusing your solution only on those cases in which your technology excels. For example, perhaps your Braindump version deals well with financial facts but not as well with travel facts, so you may consider turning your technology into a financial tool rather than a general tool. Some domains are naturally very structured and precise, which could help in working with them.

## Conclusion

Hopefully, by now I have convinced you that:

-   Large Language Models like GPT-3 offer a novel way to quickly and cheaply produce amazing results.
-   POCs are worth building to explore GPT-3–based solutions.
-   Building such a GPT-3–based solution is not just a matter of writing a clever prompt. Just as with any other type of software development, prompt development also benefits greatly from appropriate methods and has its own good practices.

These points have two important implications. First, it seems that we suddenly have a fresh opportunity to increase software engineering and data science productivity, which is a perennial and tricky problem. Thus, far from making programmers or data scientists obsolete, such technology actually depends on proper engineering and makes their time more valuable. Second, concepts that were previously technically unrealistic or too costly might now have a chance to move forward, and the first step is to protype them. What dormant ideas should we wake up? What entirely novel proposals should we pursue?

Braindump, our working example, is a [Natural Language Understanding (NLU)](https://medium.com/data-science-at-microsoft/natural-language-understanding-whats-the-purpose-of-meaning-part-1-of-2-18a370a763) application: It extracts meaning from the given text and makes it available in a suitable manner to users. This is a sensible use of GPT-3, but note that it should not limit your imagination! As I emphasized in the beginning, there are many other tasks that GPT-3 can handle, including programming (preferably through its [Codex](https://openai.com/blog/openai-codex/) version), program comprehension (e.g., finding bugs), creative text generation (e.g., for marketing), data augmentation (e.g., beyond synonyms, creating texts similar to the given ones, for model training) and text classification (e.g., for sentiment analysis). A convenient way to think about it is this: Would you be able to ask a human to do something for you and give the result back in written form? If so, there’s a good chance you can ask GPT-3 to do the same to some extent, and through a POC you can determine how good or bad GPT-3 is at doing the task.

There are also other aspects of POCs that are worth exploring. Because they are cheap, they can be built in parallel by different teams to tackle many different business problems, thus increasing the chance that *some* actually good idea comes out of such an effort in a short amount of time. Furthermore, they can be a good way to leverage the creativity of a team beyond their day-to-day jobs. The annual [Microsoft Global Hackathon](https://news.microsoft.com/life/hackathon/) is a great example of how to promote that. Finally, they might actually become usable faster than you think, either for your personal needs, or for early users who just can’t wait for the final product. Don’t be surprised to see your hacky prototype being used with real customers.

Indeed, a proof-of-concept fully achieves its goal when it becomes a *proof-of-value* (POV). That is to say, when it is used not only to make people *imagine* valuable results, but actually *produce* them, for instance to a paying customer. Getting there is not just a matter of technology. It requires significant business insight to properly guide the technical developments and apply them to the right problems. This is also why I emphasized early in the text the importance of having business stakeholders involved whenever possible. Even a crude prototype can create value if business stakeholders can apply it, which can be done very early through what I called *assisted operation* sessions. You may be surprised with the quick wins you’ll find if you try it — I certainly was.

Customers and other business stakeholders are also great sources of inspiration for problems to tackle. Most people have both small and big problems in their daily workflow, and no doubt a couple of them can be handled with the AI technology we saw. But to do that, one must first discover that the problem is there, so it is fruitful to keep collaborating with others and understanding their needs.

It is true, of course, that GPT-3 will often fail as well. Even when it works most of the time, it might occasionally fail, which we saw as an important challenge for user interaction. And even if it does not fail, it might present other difficulties, such as excessive latency, or relatively high API cost. However, consider this: If you were given a magic wand, would you really be stopped by the occasional misfired spell, or the fact that the spell takes two seconds to materialize? Or would you leverage it as much as possible, to see how far you can go, and maybe turn that lead into gold? That is, in essence, the question we currently face with this technology, though I’m confident no sorcery is involved.

I believe we are just scratching the surface of what these AI-infused building blocks will allow us to create. This article presented one specific approach, inspired by some of what I gradually derived from my own experience in a number of projects. The future is sure to bring even more possibilities, and to fully leverage them an open mind to new ways of building software — patterns, processes, tools, best practices — will be necessary.

## Acknowledgments

I’d like to thank everyone with whom I have had the pleasure of building proofs-of-concept at all companies where I’ve worked. More recently, with the availability of GPT-3, special thanks to Mei-Yu Hwang are in order for her constant support and insights. I also profited from conversations and work with Thomas Pan, Ming Wu, Raga Venkatesan, Rajkiran Panuganti, Matheus Camasmie Pavan, and other Microsoft colleagues to develop the ideas shared here. Finally, I used [https://excalidraw.com/](https://excalidraw.com/) to create most of the diagrams shown (thanks to Caroline Santos Marques Da Silva for presenting this tool to me).

*Paulo Salem is a winner of Microsoft’s internal CTO Codex Innovation Challenge (2021/2022). He is on* [*LinkedIn*](https://www.linkedin.com/in/paulosalem) *and* [*paulosalem.com*](https://paulosalem.com/)*.*