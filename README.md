# Vanilla Framework

> Warning: this is _not_ a framework. It uses no build step or any framework-specific code. This is just a demonstration og how you can leverage existing vanilla javascript concepts to create a simple framework to go out and build sites with. Because it uses the _langauge itself_, it doesn't need updating and will stay compatible in the future without any maintenance.

## The background

I love javascript frameworks. I've built sites and apps with Vue, Svelte and Astro and loved the DX and end results. But there's one big downside to using any of these technologies for client websites: the javascript-framework space is very volatile right now, and there's a good chance that the stuff you built a few months ago, already needs an overhaul. This actually happened to me twice this year. I'm a developer, not a code babysitter.

When I stumbled across the article [Maintenance is a cost paid](https://htmx.org/essays/no-build-step/#:~:text=Maintenance%20is%20a%20cost%20paid,htmx%20up%2Dto%2Ddate) by one of the creators of HTMX (and also featured on [ThePrimeTime](https://www.youtube.com/watch?v=RuoUa-uGVnU)) it really struck a chord with me. In the article he describes how the HTMX source code is just a single 3500-line javascript file, which is the same file that gets shipped to the browser:

> "The best reason to write a library in plain JavaScript is that it lasts forever. This is arguably JavaScript’s single most underrated feature. While I’m sure there are some corner cases, JavaScript from 1999 that ran in Netscape Navigator will run unaltered, alongside modern code, in Google Chrome downloaded yesterday."

Reading the article and just having gone though two rewrites, I decided to see how far I could come with javascript's built-in features. Why not use ES modules and classes instead of single file components? Leverage native string literals instead of a template language that requires compilation?
