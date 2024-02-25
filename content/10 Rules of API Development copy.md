I ran across this useful/interesting thread in my RSS feed from HN, and thought it was so well written, that I wanted to post it here to remind myself about what I consider to be some of the best "Rules” about API development.

I have added spaces to some portions for clarity, but the rest of the content remains unchanged. 

> I don't know which APIs are best for developer experience, but I can describe what makes some of them harder to use than they could be.
>
> 1. Poor documentation. Good API documentation is clear, concise, descriptive (i.e. doesn't return properties named "data" or "info").
>
>  2. No examples, or terrible examples. The documentation should show clear examples of every function, including the format of the API call, details of the expected return value, and possible errors and what they mean. Examples should be code a developer can run from curl or Postman.
> 
> 3. Examples in obscure languages. It's not possible to cover every language so write the documentation in terms of plain HTTP, then give examples in the most common languages you expect to support. For web APIs those will be PHP, Javascript, Java, C#. API examples written only in Clojure or Elixir make it harder for the majority of developers to start using the API.
> 
> 4. Unclear how to authenticate. Explain the authentication process. APIs usually require some kind of authentication, like a token or shared secret. Explain the authentication requirements with clear examples. If the tokens expire explain that. Give examples that work.
> 
> 5. No easy way to test. If your product offers an API give developers a way to test their integration in a free sandboxed environment. I don't want to have to set up a real paid account to test. I don't want to charge a real credit card to see if that works. I don't want to try potentially dangerous things in a live production environment.
> 
> 6. Over-engineering. Don't add too many options or variations, or return overly-complex responses.
> 
> 7. Too many API calls required. If I want to get a list of users let me get their names and other relevant information in one call. I've seen APIs that will return just a list of user IDs, then require another API call to get the name of each user in that list. This is like selecting all IDs from a database then iterating over them to select each name. Think about how developers will actually use the API, don't make it so atomic that every operation requires multiple high-latency operations, any of which can time out or fail.
> 
> 8. Too much friction to get started. Don't make me sign up for an account or a sales call to get access to the documentation and API sandbox.
> 
> 9. Poor choice of response format. Prefer JSON over XML. Sometimes you need XML but 90% of the APIs I see that return XML could have sent back a text string or simple JSON.
> 
> 10. Breaking changes. Version your API from the start so you can support developers who used a previous version while enhancing the API. An API should not change suddenly in a way that breaks working applications that use it.
> 
	
Sourced from HN, [here](https://news.ycombinator.com/item?id=30547355). #API #dev #technology