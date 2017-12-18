![CloudBerry Lab](/logo.png)

# CloudBerry Lab Knowledge Base

Welcome to CloudBerry Lab knowledge base (available (here)[http://kb.cloudberrylab.com])! Help us build reliable product! This knowledge base contains the most frequent issues related to all CloudBerry products (Backup, Explorer, Drive).

## How to contribute

Fork the project and make changes as follows:

* `images` - create subfolder `kb<number>` and place all your images.
* `content` - create file with `kb<number>.md` and place your content. Check previous KB to get list of required fields. Essentially the following fields required:

## An article structure

Your article should have the following minimal structure:

```
---
title      : `<KB title>`
description: `<Short description>`
keywords   : `<List of keywords>`
kbid       : `<KB number>`
weight     : `<KB number for sort>`
date       : `<Date of creation: YYYY-MM-DD>`
updated_at : `<Date of update: YYYY-MM-DD>`
author     : `<Author>`
---

## Problem

Problem details.

## Resolution

How to address the problem.

```

Article (`.md` file) structure follows Markdown syntax and you are free to use anything from the following list:

### Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

### Emphasis

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

### Lists

```
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

### Links

```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

### Images

Here's our logo (hover to see the title text):

Inline-style:

```
![alt text](/logo.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: /logo.png "Logo Title Text 2"
```


### Code and Syntax Highlighting

```
<pre class="language-your-language"><code>
Your content
in multiple
lines
goes inside.
</code>
</pre>
```

### Inline Highlighting

```
<code class="language-your-language">Your content</code>
```


Check the table with available languages:

![CloudBerry Lab](/prism-languages.png)


### Tables

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Alternatively you can do HTML with Symantec-UI tables (since we have this framework in the KB web).
```

### Blockquotes

```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

### Inline HTML
```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

### Horizontal Rule
```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

### Line Breaks
```
Just empty line.
```

### YouTube Videos
```
Inline HTML!
```

Kudos https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
