# Playwright Demo Framework

A compact, production-style test automation framework in **Playwright + TypeScript** —
UI tests (Page Object Model) plus API tests, running in CI on every push.

This repo is a **sample of my Test Automation Foundation work**: the kind of
foundation I build for startups in 4–6 weeks — strategy, framework, CI
integration, and handover docs.

## What's inside

```
pages/            Page Objects (selectors + flows live here, not in tests)
tests/ui/         UI specs against the SauceDemo demo store
tests/api/        API specs against the JSONPlaceholder demo API
fixtures/         Centralized test data (users, products)
playwright.config.ts   Parallel runs, retries on CI, HTML report, tracing
.github/workflows/ci.yml   GitHub Actions: install → test → upload report
```

## Design choices

- **Page Object Model** — a UI change means editing one page class, not ten tests.
- **data-test selectors** — resilient locators, no brittle XPath.
- **Separate UI and API suites** — runnable independently (`npm run test:ui`, `npm run test:api`).
- **CI-first** — retries, traces and screenshots on failure, HTML report artifact.

## Run it locally

```bash
npm install
npx playwright install chromium
npm test            # everything
npm run test:ui     # UI only
npm run test:api    # API only
npm run report      # open the HTML report
```

## About

Built by Ruslan Huseynov — Senior SDET (14+ years). I help startups ship with
confidence: [Test Automation Foundation](https://www.linkedin.com/in/ruslan-huseynov-386b07308)
in 4–6 weeks.
