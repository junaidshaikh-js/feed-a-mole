# Frontend Masters - Bootcamp

This project is a part of [Frontend Masters Bootcamp](https://frontendmasters.com/bootcamp/).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![preview of project](./preview.png)

### Links

- [Github repo](https://github.com/junaidshaikh-js/feed-a-mole)
- [View live](https://junaidshaikh-js.github.io/feed-a-mole/)

## My process

### Built with

- Semantic HTML5 markup
- [Sass](https://sass-lang.com/) - CSS extension language
- CSS Flexbox
- JavaScript

### What I learned

I learned lot of new things while doing this project. First of all, for the first time I did use Sass. Sass allow you to nest CSS which makes the code more manageable. Look at the example of nesting below -

```css
.worm-box {
  width: 1660px;

  .worm-container {
    overflow: hidden;
    transition: width 0.5s ease-in-out;

    .worm {
      width: 1660px;
    }
  }
}
```

One more feature of Sass I used is mixins. Let's talk about JavaScript. In this project, I learned various things regarding DOM manipulation, how to track time and various DOM properties. Till now I had never understood the `event.target` property, but in this project, the idea got cleared and hopefully I will never forget it. One new thing I learned is to use `requestAnimationFrame()` instead of `setInterval()`. It has several advantages over `setInterval()`. I had given a link in the resource section to learn more about it.

### Useful resources

- [Basics of Sass](https://sass-lang.com/guide) - This covers all the basics of Sass you need to get started with.
- [MDN article on requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) - MDN articles are always great. Read this one if you want to know more about how to use `requestAnimationFrame()`

## Author

- Linkedin - [@junaidshaikhjs](https://www.linkedin.com/in/junaidshaikhjs/)
- Twitter - [@junaidshaikh_js](https://twitter.com/junaidshaikh_js)
