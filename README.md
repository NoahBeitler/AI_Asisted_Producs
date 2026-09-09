# Chabad Student Association at YU

A static website for the Chabad Student Association at Yeshiva University — built as HW1 for
"AI Assisted Development of Products and Services."

## About this repo

This is a **static website**: it's built entirely from `.html`, `.css`, and `.js` files, with
no server, database, user accounts, or stored data. Nothing you do on the site persists between
visits.

The site covers:

- **Home** (`index.html`) — mission overview and highlights
- **About** (`about.html`) — mission, values, and team
- **Events** (`events.html`) — a filterable list of upcoming events (Shabbat, holidays, learning, social)
- **Get Involved** (`get-involved.html`) — ways to participate and contact info

> Note: this is a student class project, not the official page of any real organization.
> Names, contact details, and event listings are illustrative placeholders.

## Viewing the full website

The live site is published with GitHub Pages at:

**https://noahbeitler.github.io/AI_Asisted_Producs/**

## Running it locally

No build step or dependencies are required. From the project folder, either:

- Open `index.html` directly in your browser, or
- Serve it locally so relative links behave the same as on GitHub Pages:

  ```bash
  python3 -m http.server 8000
  ```

  then visit `http://localhost:8000` in your browser.

## Project structure

```
index.html
about.html
events.html
get-involved.html
css/
  styles.css
js/
  main.js
```
