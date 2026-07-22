# How PlantUp Works

## Market

PlantUp is a **farm-to-table subscription marketplace**: city members join a club, order seasonal produce from local farms at farmer prices, and receive weekly delivery. Farmers manage catalog and payouts; admins moderate the platform.

## Roles

| Role | Capabilities |
|------|----------------|
| **Member (buyer)** | Browse marketplace, cart, checkout, subscription, order history |
| **Farmer** | Farm profile, products, photos, payouts, reviews |
| **Admin** | Users/farms/products/orders moderation, analytics, settings, health |

## Weekly operating model

1. Member holds an active membership → unlocks farmer pricing
2. Orders accumulate until mid-week cut-off (e.g. Wednesday)
3. Platform aggregates farm boxes (Thursday)
4. Delivery by district (Friday) — Prague map UX included
5. Farmers see balances / payouts; platform keeps membership + fee

## Architecture

```
Browser (Vite app)
    ↓ REST / JWT
Express API (server/)
    ↓ Prisma
PostgreSQL
    ↓
Comgate (payments + webhooks)
Cloudinary (images)
```

## Monetization (built-in)

| Stream | Mechanism |
|--------|-----------|
| Membership | 1 / 3 / 12 month plans |
| Order markup | Farmer base price → member price |
| Platform fee | `platformFeeRate` in settings (server-side) |
| Farmer payouts | Balance + payout records |

## Eco positioning

Public brand pledge: **10% of profits invested in tree planting**, plus seasonal / low-waste messaging across the landing (CS/RU/EN).

## Demo package layout

```
PlantUp SaaS For Sale/
├── index.html          # Sales deck
├── demo/               # Screen hub
├── app/                # Built frontend (dist)
├── assets/             # CSS, JS, screenshots
└── docs/               # Product docs
```

## Full source

See the product repository README for local setup (`npm run dev`, `npm run server:dev`, Prisma migrate/seed).
