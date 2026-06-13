# FinBridge
### Finance Process Orchestration Platform — Concept Prototype

FinBridge is a prototype for a finance process orchestration layer: a "system of systems"
view that monitors the underlying finance systems (ERP, DMS, Treasury, Tax, etc.) and
orchestrates the periodic processes that run across them (monthly / quarterly / annual close),
with role-aware dashboards for every persona involved.

This is an exploratory prototype built on illustrative assumptions, not live data.

## Run Locally
```bash
cd finbridge
python3 -m http.server 8080
# Open: http://localhost:8080
```

## Deploy (GitHub Pages)
Push these files to a public repo, then:
Settings → Pages → Source: Deploy from a branch → main → / (root) → Save.
Live at: https://725ps.github.io/finbridge/

## Structure
```
index.html            App shell, all UI components, styling
js/data.js            The ontology + demo dataset (entities, systems, processes, people)
assets/logos/         Logo assets:
                        finbridge-white.png   FinBridge mark for the dark sidebar
                        finbridge-dark.png    FinBridge mark for light surfaces
                        toyota.png, lexus.png, honda.png, volvo.png,
                        byd.png, stellantis.png   brand marks for entity badges
```
Brand badges load the matching PNG (e.g. toyota.png) and fall back to a colored
initial if the file is missing.

## Notes
- React, ReactDOM, and Babel load from a CDN (unpkg), so an internet connection is required
  and the page transpiles in-browser (~1-2s on first load).
- All data is illustrative and lives in js/data.js.
