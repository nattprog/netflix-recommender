# Development Guide

## Helpful vscode extensions:

Install and follow whatever installation instructions provided in the extension

1. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

- Right click on a HTML file and select "Open With Live Sever"

2. [HTML Hints](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)

- Helps with identifying syntax mistakes in html code and CSS (iirc)

## Development Process

### Git and GitHub

- WORK IN YOUR OWN BRANCHES

- Use Github pull requests to submit code

- Pull from main and merge main into your own branch frequently, ESPECIALLY
  before pull requests ### Running and Working on files

- Use the Live Server
  extension to run the page, you will be able to see updates in real time
  (or i
  guess use the default debugging that vscode provides for html, but i dont trust
  it much :| )

- Place new CSS styles in `/css/main.css` - Feel free to add new
  classes or IDs, but please don't touch any of the preexisting ones

## Page Layout

`/main.html` - the HTML, where the structure is declared and classes are assigned

`<template id="movie-template"> . . . </template>` - contains the html layout for each movie card. You may add classes for styling if you like, or use the prexisting classes for styling in `/css/main.css`.

```html
<section class="results" id="search-results">
  <details data-ref="" class="movie">. . .</details>
  <details data-ref="" class="movie">. . .</details>
  <details data-ref="" class="movie">. . .</details>
  . . .
</section>
<!-- - the movie cards will be rendered within the `search-results` section. -->
```

`/css/main.css` - place CSS styling rules here.
