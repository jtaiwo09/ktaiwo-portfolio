# Project screenshots

Drop project screenshots in this folder, then point each case study at its image.

## How to add a screenshot

1. Save the image here using the project's slug as the filename, e.g.:
   - `gosource.png`
   - `relay-pilot.png`
   - `resolve.png`
   - `cititasker.png`
   - `spleet.png`
2. Open `src/data/projects.ts` and add an `image` field to that project:

   ```ts
   {
     slug: "gosource",
     name: "GoSource",
     // ...
     image: "/images/gosource.png",
   }
   ```

Until an `image` is set, the site renders an on-brand placeholder card automatically — so it always looks complete.

## Recommended specs

- **Aspect ratio:** 16:10 (matches the browser frame). e.g. 1600×1000px.
- **Format:** PNG or WebP. Keep each under ~400KB if possible.
- **Content:** the most impressive, recognizable screen of each product. A clean, populated dashboard beats a login page.
- For auth-gated dashboards (GoSource, Resolve), use a screen you're cleared to show, or blur any sensitive/customer data first.
