# HRT-B_app

This repository contains a small static website that tracks developments from UN human rights treaty bodies. It provides brief highlights from recent reports and upcoming sessions.

## Previewing the Site

Simply open `index.html` in your browser. Alternatively, you can serve the directory locally using Python:

```bash
python -m http.server
```
Then navigate to `http://localhost:8000` in your browser.

## Development Notes

The site uses Tailwind CSS via a CDN script tag in `index.html`, so there is no build or compilation step.

## Future Plans

Slides may be added using [Reveal.js](https://revealjs.com/) to complement the static content.
