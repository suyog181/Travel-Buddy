# FranchiseOps Supply OS

A static product-scope prototype for a B2B franchise inventory, replenishment, inter-franchise stock exchange, and managed delivery platform.

The application is positioned for chemical/franchise-based B2B suppliers that sell cleaning chemicals, janitorial supplies, office supplies, PPE, equipment, spare parts, dispensers, customer-specific bundles, and other facility products to large companies, offices, commercial buildings, schools, hospitals, hotels, and enterprise clients.

## Product scope

FranchiseOps Supply OS helps franchise owners:

- See inventory across warehouses, stores, vans, branches, and field teams.
- Classify products by category instead of treating the platform as chemical-only.
- Identify low, excess, near-expiry, slow-moving, and blocked stock.
- Request, buy, transfer, or sell stock through private workflows with verified franchisees, partners, and sellers.
- Recommend sourcing options using urgency, price, distance, availability, trust badges, product category, delivery feasibility, and contract constraints.
- Manage B2B customer accounts, recurring orders, contract pricing, quotes, invoices, and delivery schedules.
- Forecast future demand and recommend safety stock by product, warehouse, customer, and route.
- Plan white-glove delivery routes and track delivery proof, customer acceptance, returns, claims, and disputes.
- Track P&L by franchise, customer, product category, product, route, warehouse, sales rep, order, and white-glove service.

## Franchise hierarchy

The application models:

1. Parent company / franchisor
2. Regional master franchise
3. Local franchise owner
4. Warehouse
5. Store / branch
6. Sales representative
7. Delivery driver
8. Customer account
9. Customer location / site

## Product categories

Every product belongs to one of these categories:

- Cleaning Chemical
- Janitorial Consumable
- Office Supply
- PPE / Safety Product
- Equipment
- Spare Part
- Dispenser / Fixture
- Customer Bundle / Kit
- Other Facility Supply

Category-specific fields and badges are applied only where relevant, so non-chemical products do not require chemical compliance badges.

## View the application

This prototype is a static web app made from `index.html`, `styles.css`, and `app.js`. On an iPad or any device where you cannot run a local server, use one of the hosted preview options below.

### Option A: GitHub Pages preview

This repo includes a GitHub Actions workflow that can publish the app as a static GitHub Pages site.

1. Push this branch to GitHub.
2. In the GitHub repo, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Open **Actions → Publish static preview** and run it, or push to `main`, `master`, or `work`.
5. Open the deployment URL shown in the workflow summary. It will look like `https://<owner>.github.io/<repo>/`.

### Option B: Netlify Drop

1. Download the repo as a ZIP file and unzip it.
2. Open <https://app.netlify.com/drop>.
3. Upload the folder that contains `index.html`.
4. Open the generated Netlify URL from your iPad.

### Option C: Vercel import

1. Push the repo to GitHub.
2. Import the repo in Vercel as a static project.
3. Use the default settings; no build command is required.
4. Open the generated Vercel URL from your iPad.

### Option D: Local computer preview

If you do have access to a computer with Python installed, run:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173> on that same computer.

## Use notifications and linked change review

Use the pull request as the central place to get notified and visualize every change:

1. Open the pull request for this branch.
2. Click **Subscribe** or enable notifications for the PR so GitHub alerts you when new commits, comments, checks, or deployments are added.
3. Open the PR **Files changed** tab to see every file changed in this prototype.
4. Open the PR **Checks** tab to see whether the GitHub Pages deployment workflow passed.
5. Open the deployment link from the workflow summary to visualize the live application.
6. Use review comments on specific lines to link feedback directly to the related change.

## Development commands

The project has lightweight npm scripts for environments that support a terminal:

```bash
npm run check
npm run serve
```

`npm run check` validates the JavaScript syntax. `npm run serve` starts the same static server as the direct Python command.
