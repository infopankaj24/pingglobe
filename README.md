# PingGlobe IT Consulting — Website

Plain HTML/CSS/JS, no build step. Files:
- `index.html` — page content (hero, services, process, why-us, testimonials, FAQ, contact)
- `style.css` — all styling
- `script.js` — nav toggle, hero ping animation, contact form

## Before going live
1. **Contact details** — replace the placeholder email (`hello@pingglobe.example`), phone number (`+91 00000 00000`), and WhatsApp number (`910000000000` in the `wa.me` link near the bottom of `index.html`).
2. **Contact form** — it currently opens the visitor's email client (`mailto:`). For a proper inbox form that doesn't rely on the visitor having an email client configured, wire it to a free service like Formspree or Web3Forms and swap the fetch code into `script.js`.
3. **Trust strip** — swap the vendor names in `index.html` (`.trust-items`) if you don't want to reference specific partner brands.
4. **Testimonials** — the three quotes in `index.html` are placeholders; replace with real client feedback before launch, or remove the section.
5. **FAQ** — edit or add `<details class="faq-item">` blocks in `index.html`; no JS required, they work natively.

## Deploy (Cloudflare Pages + GitHub)
1. Push this folder to a new GitHub repository.
2. In Cloudflare → Workers & Pages → Create → Pages → connect the repo.
3. Framework preset: **None**. Build command: empty. Output directory: `/`.
4. Deploy, then add your custom domain under the Pages project's **Custom domains** tab.

See Claude's chat response for the full step-by-step walkthrough, including DNS and going live.
