# PlantUp — Product Overview

## Included surfaces

### Public
- Magazine landing (video hero, scroll overlap, Lenis)
- Farm carousel with flip cards
- Membership tiers + eco pledge
- Marketplace with sticky filters
- Farm detail, cart, checkout, Comgate return pages
- i18n: Czech / Russian / English

### Authenticated
- `register.html` — login / register, role switch
- `member-dashboard.html` — profile, orders, subscription
- `farmer-dashboard.html` — farm, products, payouts, reviews
- `admin-dashboard.html` — moderation, analytics, settings

## API surface (source handoff)

Auth, users, farms, products, orders, subscriptions, payments, uploads, admin, settings, `/health`.

## Quality & ops

- Frontend Vitest + backend Node tests
- `npm run verify` gate
- Docs: SECURITY, PRODUCTION, RELEASE_POLICY, OBSERVABILITY, INCIDENT_RUNBOOK

## Screenshot assets

Place refreshed captures in `assets/screenshots/` (mirrored in `docs/screenshots/`):

| File | Screen |
|------|--------|
| `01-homepage.png` | Landing |
| `02-register.png` | Auth |
| `03-member-dashboard.png` | Member |
| `04-farmer-dashboard.png` | Farmer |
| `05-admin-dashboard.png` | Admin |
| `06-checkout.png` | Checkout |
| `07-farm-detail.png` | Farm detail |
| `hero-banner.png` | Deck hero preview |

Current PNGs may be from an earlier BioMarket build — re-capture after UI changes for pitch accuracy.
