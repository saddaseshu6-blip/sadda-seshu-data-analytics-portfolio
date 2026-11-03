# sadda-seshu-data-analytics-portfolio
A professional, responsive Data Analytics Portfolio built with React and Vite, showcasing six project case studies using SQL, Excel, Power BI and Tableau. Features interactive project galleries, technical skills, résumé downloads and professional contact information.

A responsive React portfolio inspired by the supplied dark amber reference design. Includes six project case studies, a portrait, technology filters, project galleries, a local profile FAQ, contact links, reduced-motion support, and PDF/Word résumé downloads.

## Run locally

Install Node.js 22.12 or newer, then open this folder in a terminal:

```sh
npm ci
npm run dev
```

Open the URL printed by Vite (default http://127.0.0.1:5186).

```sh
npm run test
npm run lint
npm run build
npm run preview
```

The `dist` directory contains the ready-to-host static production site. Upload its contents to a static web host. Serve over HTTP/HTTPS; do not double-click index.html with a file:// URL. The relative Vite base supports deployment under a subfolder.

## Deploy to GitHub Pages

Pushing to `main` builds the site and deploys the generated `dist` directory with GitHub Actions. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions** if it is not already selected. The published URL appears in the workflow run and the repository's Pages settings.

## Customize

- `src/profile.js`: profile, education, skills, and project descriptions.
- `src/App.jsx`: page sections, case study dialogs, prepared FAQ answers.
- `src/styles.css`: responsive styles and colours.
- `src/Scene.jsx`: optional Three.js background, with a motion pause button.
- `public/images`: portrait, supplied screenshots, labelled SVG previews.
- `public/resume`: downloadable PDF and Word documents.

This is a static site: email/phone links open the visitor's own apps. The profile guide uses prepared answers and makes no AI/network calls. No backend, API keys, analytics, or contact-form database is included. Fonts and images are bundled locally.

## Project visuals and accuracy

Policy images are the supplied dashboard screenshots. Zomato's visual was recreated using counts from the supplied Excel workbook. IPL and Hospital visuals are labelled report-structure previews, not exported dashboards. Blinkit and Swiggy use labelled SQL workflow illustrations because their datasets were not supplied. See CONTENT-SOURCES.md for details.

Academic scores and certification follow the latest user-provided information and should be checked against original records before publishing. Project experience is presented as portfolio work, not employment. No hiring outcome or ATS score is guaranteed.
