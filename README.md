**Live site:** https://csci-426-f1-setups.vercel.app/

# Pitwall Setups

A responsive React website that explains how Formula 1 teams set up a car for different circuits.
Built for CSCI426 Advanced Web Programming, Project Phase 1.

## Pages
- **Home** – interactive wing-level slider showing the downforce vs. top speed trade-off
- **Setups** (features) – searchable, filterable list of circuits plus a setup glossary
- **Setup detail** (dynamic page, `/setups/:id`) – full setup sheet for each circuit
- **About** and **Contact** (form with validation)

## Setup
```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build in /build
```

## Deploy
- **GitHub Pages:** `npm run deploy` (uses `gh-pages`), then enable Pages on the `gh-pages` branch.
- **Netlify / Vercel:** import the repo; build command `npm run build`, output `build`.

## Screenshots
Add screenshots of Home, Setups and a Setup detail page to `/screenshots` and link them here.

## Credits
Fonts: Barlow and Barlow Condensed (Google Fonts). Setup values are illustrative examples. No templates were used.

## Project structure
```
src/
├── Assets/        pitwall-mark.svg
├── Components/    Navbar.jsx, Footer.jsx, TrackItem.jsx
├── Pages/         Home, Setups, SetupDetail, About, Contact (.jsx)
├── Styles/        Navbar.css, footer.css, Track.css, Setups.css, styles.css
├── App.js  App.css  App.test.js
└── index.js  index.css  logo.svg  reportWebVitals.js  setupTests.js
```
