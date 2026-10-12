# Zilu Zhang — Academic Homepage

Website: https://zzl-2005.github.io/

A personal academic homepage with warm paper colors, a restrained top navigation, a large serif name, a portrait position, and quiet placeholders for future content. It uses plain HTML, CSS, and a small optional navigation script.

## Content and structure

- `index.html`: a short biography, two publication slots, two internship slots, one education slot, and contact links.
- `styles.css`: layout, typography, colors, mobile breakpoints, and print styles.
- `script.js`: highlights the current section and supports the adjacent internship/education columns. All content and links work without JavaScript.
- `assets/fonts/`: locally served Instrument Serif and Instrument Sans fonts, with their SIL Open Font License notices. There is no external font request or font installation.
- `favicon.svg`: personal site icon.
- `about.html`: redirects the previous About URL to the main page.
- `404.html`: recovery link for retired URLs.
- `.nojekyll`: serves the static files directly on GitHub Pages.

The Research interests section and the old projects, grade/ranking highlights, award list, blog files, and automatic homepage-generation workflow have been removed. Empty entries are visibly marked as placeholders, not publication or affiliation claims.

## Updating the homepage

Extend the biography in the hero, replace the monogram portrait with a real photo, and fill the marked publication, internship, and education entries in `index.html`. Publication entries can contain a thumbnail, title, author list, venue, year, summary, and real paper/code links. Internship entries can contain an institution, position, team, and dates.

Commit changes to `main` to publish through the existing GitHub Pages setup. The original website remains recoverable in Git history, before the redesign, at commit `7fd52d1f3cd6a6c123620606151e38741953902f`.
