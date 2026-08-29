# PingGlobe IT Consulting — Website

Plain HTML/CSS/JS, no build step. Files:
- `index.html` — page content
- `style.css` — all styling
- `script.js` — nav toggle, hero ping animation, contact form

## Before going live
1. Replace the placeholder email (`hello@pingglobe.example`) and phone number in `index.html`.
2. The contact form currently opens the visitor's email client (`mailto:`). For a proper inbox form, wire it to a free service like Formspree or Web3Forms — swap the code in `script.js`.
3. Swap the trust-strip vendor names in `index.html` if you don't want to reference specific partner brands.

## Deploy (Cloudflare Pages + GitHub)
See the step-by-step guide from Claude, or:
1. Push this folder to a new GitHub repository.
2. In Cloudflare → Workers & Pages → Create → Pages → connect the repo.
3. Framework preset: **None**. Build command: empty. Output directory: `/`.
4. Deploy, then add your custom domain under the Pages project's **Custom domains** tab.
