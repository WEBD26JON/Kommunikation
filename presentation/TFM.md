# Presentation Engine v2

Minimal image-first presentation environment using HTML, CSS and JavaScript.

## Configuration

Edit `js/slides.js`.

The theme is configured once for the entire presentation:

```js
const presentation = {
    title: "Presentation",
    theme: "light",
    slides: [...]
};
```

Supported themes:

- `light`
- `dark`

## Slide content

```js
{
    image: "images/my-slide.png",
    title: "My title",
    caption: "Optional supporting text.",
    footer: "Optional footer.",
    fit: "contain"
}
```

`image` may be a local path or an external URL.

`fit` may be `contain` or `cover`.

## Controls

- Right Arrow / Page Down — next slide
- Left Arrow / Page Up — previous slide
- Home — first slide
- End — last slide

Every time a slide is entered, its timer resets to `00:00`.

## Deployment

This is a static site. Copy the project directory to a web server and point nginx/Apache at it. No backend or build step is required.
