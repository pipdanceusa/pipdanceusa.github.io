# PipDance LLC Website

Static GitHub Pages website for PipDance LLC, an online dance teaching company.

## Source Information

- Legal name from Wyoming Articles of Organization: Pipdance LLC
- Filing date: May 18, 2026
- Original ID: 2026-001980071
- Registered, mailing, and principal office address: 30 N Gould St Ste R, Sheridan, WY 82801
- Public phone requested for the website: +1 (512) 351-5695

Sensitive billing details from the AT&T PDF are intentionally excluded.

The website presents PipDance LLC as an online dance instruction business offering live classes, private coaching,
choreography, and movement fundamentals.

## Local Preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Verify

```bash
node tests/check-site.mjs
```

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Push this folder to the repository's `main` branch.
3. In GitHub, open `Settings` -> `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `main`; `.github/workflows/pages.yml` deploys the site.
