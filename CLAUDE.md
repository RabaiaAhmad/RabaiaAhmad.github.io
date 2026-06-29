# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website (a fork of the `developerFolio` / `masterPortfolio` template), built with Create React App and deployed to GitHub Pages at https://rabaiaahmad.github.io/. All commands below run from the `RabaiaAhmad.github.io/` directory, not the repo root.

## Commands

- `npm start` — run the dev server (CRA, port 3000)
- `npm run build` — production build into `build/`
- `npm test` — run the CRA/Jest test runner (watch mode). Single test: `npm test -- --watchAll=false src/App.test.js` or filter with `npm test -- -t "test name"`
- `npm run deploy` — build then publish `build/` to the `gh-pages` branch (`predeploy` runs the build automatically)
- `node git_data_fetcher.mjs` — regenerate open-source JSON data (see below); run manually, it is **not** wired into any npm script
- Formatting is enforced by a Husky `pre-commit` hook running `lint-staged` (`prettier` on `*.{js,css,md}`, `prettier-package-json` on `*.json`)
- Docker dev: `docker-compose up` serves the dev server on host port **3001**

## Architecture

**Content is data, not code.** `src/portfolio.js` is the single source of truth for all site content — every section (greeting, skills, education, experience, projects, contact, SEO, social links) is a plain JS object exported from here. Components import these objects and render them. The `settings.isSplash` flag in this file changes the routing tree. Editing the site's content/sections almost always means editing `src/portfolio.js`, not the components.

**Rendering layers:**

- `src/index.js` → `src/App.js` wraps everything in styled-components `ThemeProvider` (`chosenTheme` from `src/theme.js`) plus `GlobalStyles` from `src/global.js`.
- `src/containers/Main.js` is the root router. It uses `HashRouter` (so URLs are `/#/route`, required for GitHub Pages). The route tree branches on `settings.isSplash`: with splash enabled, `/` is the splash screen and content lives under `/home`; otherwise `/` is home.
- `src/pages/*` — top-level routed views (home, splash, education, experience, opensource, projects, contact, error404). Each assembles section containers.
- `src/containers/*` — section blocks (greeting, skills, projects, etc.); these read from `portfolio.js`.
- `src/components/*` — reusable presentational pieces (cards, header, footer, buttons, charts).

**Theming:** `src/theme.js` defines several named palettes (blueTheme, brownTheme, purpleTheme, …) and exports `chosenTheme`. Theme values flow through styled-components and are also passed as a `theme` prop down through `Main` → pages → containers. To change the color scheme, change which palette `chosenTheme` points to.

**Open-source data pipeline:** `git_data_fetcher.mjs` is a standalone Node script that queries the GitHub GraphQL API (`api.github.com/graphql`) for PRs, issues, contributed organizations, and pinned projects, then writes the results to `src/shared/opensource/{pull_requests,issues,organizations,projects}.json`. The opensource page/containers read those committed JSON files at build time — they do **not** call GitHub at runtime. The script currently hardcodes `githubConvertedToken` and `githubUserName` placeholders at the top; these must be filled in before running it.

**Static data:** `src/shared/*.json` (contact, experience, and the opensource files above) holds prebuilt data consumed by containers.

## Conventions

- The assets directory is spelled `src/assests/` (note the typo) — fonts under `assests/fonts`, images under `assests/images`, and a vendored Font Awesome set under `assests/font-awesome`. Match the existing spelling when adding imports.
- Each component/container/page lives in its own folder with a co-located `.js` and `.css` (or `.scss`) file of the same name.
- Components are a mix of class and function components (React 16) — follow the style already present in the file you're editing.
