# Zilu Zhang — Academic Homepage

Website: https://zzl-2005.github.io/

A compact academic homepage with an Anthropic-inspired warm ivory palette, charcoal headings, serif body text, and restrained terracotta accents. Built with plain HTML, CSS, and a small optional navigation script, it has no package installation, build step, external fonts, or icon dependencies.

## Content

- `index.html`: name, affiliation, contact details, and visibly marked placeholders for a biography, publications, internships, and education. The previous Research interests section has been removed.
- `styles.css`: typography, colors, layout, mobile breakpoints, and print styles.
- `script.js`: highlights the current section in the navigation. The page works without it.
- `favicon.svg`: site icon.
- `about.html`: redirects the previous About URL to the main page.
- `404.html`: recovery link for retired URLs.
- `.nojekyll`: serves the static files directly on GitHub Pages.

The old project list, grade/ranking highlights, award list, blog post files, and automatic homepage-generation workflow have been removed. The empty entries are placeholders and do not represent publications or affiliations.

## Updating the homepage

Edit `index.html` to add the biography, replace the portrait placeholder with a local photo, and fill the marked publication, internship, and education entries. Internship slots have room for dates, an institution, a position/team, and a short description. Add paper and code links only when their real URLs are available. Keep the title and description up to date.

Commit changes to `main` to publish through the existing GitHub Pages setup. The original website remains recoverable in Git history, before this redesign, at commit `7fd52d1f3cd6a6c123620606151e38741953902f`.
