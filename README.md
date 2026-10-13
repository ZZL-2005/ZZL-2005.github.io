# Zilu Zhang — Academic Homepage

Website: https://zzl-2005.github.io/

A personal academic website with warm paper colors, separate pages, an upright serif name, a portrait position, and quiet placeholders for future content. It uses plain HTML and CSS. Typography uses Lora for page titles and the monogram, with Instrument Sans for the text, section headings, and interface labels.

## Content and structure

- `index.html` (`/`): a short biography, portrait position, links to the three content pages, and contact links.
- `publications/index.html` (`/publications/`): two publication slots.
- `experience/index.html` (`/experience/`): two internship slots and one education slot.
- `blog/index.html` (`/blog/`): a writing archive, currently showing an empty state.
- `styles.css`: layout, typography, colors, mobile breakpoints, and print styles.
- `script.js`: forwards old homepage fragments such as `/#experience` to their new page. Current-page highlighting is written into each page's navigation. All new pages and links work without JavaScript.
- `assets/fonts/`: locally served Lora and Instrument Sans fonts, with their SIL Open Font License notices. There is no external font request or font installation.
- `favicon.svg`: personal site icon.
- `about.html`: redirects the previous About URL to the main page.
- `404.html`: recovery link for retired URLs.
- `.nojekyll`: serves the static files directly on GitHub Pages.

The Research interests section and the old projects, grade/ranking highlights, award list, old blog articles, and automatic homepage-generation workflow have been removed. Empty entries are visibly marked as placeholders. The new Blog page starts with no published articles.

## Updating the homepage

Extend the biography in `index.html`, replace the monogram portrait with a real photo, and fill the marked entries in the Publications and Experience pages. Publication entries can contain a thumbnail, title, author list, venue, year, summary, and real paper/code links. Internship entries can contain an institution, position, team, and dates.

To add a blog post, create its own HTML file or directory under `blog/`, using the same header, footer, root-relative font and stylesheet links. Replace the empty state in `blog/index.html` with a list of real post links, titles, dates, and short descriptions. Set each post's title, description, and canonical URL, and keep Blog marked as the current navigation page. No build tool or package installation is required.

Commit changes to `main` to publish through the existing GitHub Pages setup. The original website remains recoverable in Git history, before the redesign, at commit `7fd52d1f3cd6a6c123620606151e38741953902f`.
