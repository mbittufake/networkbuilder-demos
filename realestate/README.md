# Estate — Static HTMX Real Estate Demo

A fully working real estate website demo to show clients. It's **100% static** — no server, no database — so it runs on **GitHub Pages**, Netlify, or even by double-clicking `index.html`.

The UI is driven by **HTMX** (declarative `hx-get` / `hx-post` / `hx-target` attributes, zero full page reloads). Since there's no backend, a tiny client-side layer in `js/estate.js` intercepts htmx's requests and serves the HTML partials from embedded data — the markup and behavior are identical to what a real server would produce.

## Run it locally

Any static server works:

```bash
python3 -m http.server 3000     # then open http://localhost:3000
# or: npx serve .
# or: just open index.html in a browser
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages → Source**, choose **Deploy from a branch**, pick `main` + root `/`.
3. Visit `https://<your-username>.github.io/<repo>/`.

No build step, no environment variables, no API keys.

## What's included

- **Home** (`index.html`) — hero, quick search (sends filters to the listings page), featured homes loaded live via HTMX, neighbourhood deep-links.
- **Listings** (`listings.html`) — live search (debounced), advanced filters (listing, type, BHK, city, possession, price range, amenities, featured only), sort, and "Load More" pagination. Filters deep-link via URL params (`?city=Pune&type=villa&minPrice=50L&maxPrice=1Cr`).
- **Property details** (`property.html`) — dynamic page that loads full details, gallery, specs, amenities, agent card and a **site-visit booking form** via HTMX.
- **Contact** (`contact.html`) — enquiry form posted via HTMX; every submission is logged as a lead.
- **Admin Panel** (`admin.html`) — a full multi-page dashboard with a sidebar: **Dashboard** (stats, hot clients, recent activity), **Property List** (search/filter/edit/delete), **Add Property**, **Enquiries**, **Site Visits**, **Clients** (CRM with add/edit/delete and hot/active/cold status), **Analytics** (12-month lead/visit charts, listings by city & type, client pipeline), **Employees** (team management) and **Settings**. Every page ships with demo data so nothing is ever empty. Password: `admin123`.

## How the data layer works

| File | Purpose |
| --- | --- |
| `data/properties.js` | The 20 demo listings (embedded as a JS object — no fetch needed) |
| `js/util.js` | Formatting helpers (prices, EMI, escaping) |
| `js/cards.js` | HTML partials for property cards, result lists, property pages |
| `js/admin.js` | HTML partials for the admin panel (dashboard, properties, clients, leads) |
| `js/estate.js` | The client-side "server": routes htmx requests, applies filters, saves data, intercepts XHR |
| `images/p/` | All property photos bundled locally so images always load |

Admin edits and new leads are saved to the browser's `localStorage`, so changes survive page refreshes (they're per-browser). Use **↺ Reset Demo** in the admin to restore the original 20 properties and clear leads.

## Demo tips for showing a client

1. Open `/admin.html`, sign in with `admin123`.
2. Submit the contact form on `/contact.html`, then open **Leads** in the admin — it appears instantly.
3. On a property page, book a site visit, then check the dashboard's "Recent Leads".
4. Add or delete a property in the admin, then refresh the home page — the grid updates.

## Tests

```bash
npm test   # runs tests/estate.test.js — verifies filtering, search, partials, login, CRUD and leads
```