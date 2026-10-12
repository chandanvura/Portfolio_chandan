# Sri Chandan Vura — Interactive Engineering Portfolio

Live site: **https://chandanvura.github.io/Portfolio_chandan/**

The October 2026 portfolio is a static, responsive engineering showcase for Java backend, DevOps/Platform and SRE roles.

## What's on the site

- Interactive CSS 3D engineering visualization
- PayGuard Engineering Lab (illustrative browser simulation, **not real payment processing**)
- Deep case studies for PayGuard, JobRadar and KubeShift
- Recruiter focus switcher: Java Backend / DevOps & Platform / SRE
- Engineering evidence wall with source links and caveats
- Keyboard command palette (`Ctrl/⌘ + K`)
- Recruiter quick view, contacts and downloadable PDF résumé

## Hosting and development

**The deployed homepage is the self-contained root `index.html`.** It embeds its CSS, JavaScript, SVG favicon and PDF résumé; there is no build step, Node dependency, API or environment configuration. Open it in a browser or serve the repository with:

```bash
python3 -m http.server 8080
```

If using GitHub Pages, publish from the existing repository's `main` branch at the root (unless a Pages Actions workflow is configured).

The previous `style.css`, `script.js` and `favicon.svg` may remain in the repository for reference; the current root homepage does not import them.

## Accuracy and verification

The Engineering Lab walks through *simulated* PayGuard scenarios and does not call a payment service. The independent projects link to public repositories and documentation. Professional Sony work is resume-documented; proprietary employer systems are not publicly verifiable. Any hosted monitoring evidence is dated rather than a live availability guarantee.

The approved release passed a local Chromium responsive and interaction suite at 22 screen widths (280–1920px). External links, host availability and real-device behavior may change after release.

## Rollback

Pre-upgrade branch: [`backup/pre-3d-upgrade-2026-10-12`](https://github.com/chandanvura/Portfolio_chandan/tree/backup/pre-3d-upgrade-2026-10-12)

Pre-upgrade commit: `959c3015042ea4b7aa467fc450eba4fcaedd301c`.

To restore, revert the homepage deployment commit or restore `index.html` from the backup; avoid overwriting unrelated newer changes.
