# Kindardent

Premium kids streetwear meets Web3 — Next.js storefront for Kindard Kids and the `$KDAT` token.

**Repo:** https://github.com/Kindard-com/Kindardent  
**Demo gallery:** [docs/index.html](docs/index.html) · photos & video below

---

## Photos & video

### Homepage
![Kindardent homepage](docs/demo/home.png)

### Connect Wallet — Reown AppKit SDK
![Connect Wallet modal](docs/demo/wallet-modal.png)

### Buy / Invest ($KDAT)
![Buy $KDAT](docs/demo/buy-kdat.png)

### Profile
![Profile wallet gate](docs/demo/profile.png)

### Stores
![Stores](docs/demo/stores.png)

### Walkthrough video

https://github.com/Kindard-com/Kindardent/raw/cursor/test-docs-public-ac77/docs/demo/kindardent-demo.mp4

[▶ Download / play demo video (MP4)](docs/demo/kindardent-demo.mp4)

<video src="docs/demo/kindardent-demo.mp4" controls width="100%"></video>

---

## Languages

The storefront supports **5 languages** with locale-prefixed URLs:

| Code | Language | Example |
|------|----------|---------|
| `en` | English | `/en/buy` |
| `de` | Deutsch | `/de/buy` |
| `fr` | Français | `/fr/buy` |
| `nl` | Nederlands | `/nl/buy` |
| `es` | Español | `/es/buy` |

Visiting `/` redirects to the best match from your browser language (or cookie). Use the **language selector** in the site header to switch.

Translation files: [`messages/`](messages/) · routing: [`middleware.ts`](middleware.ts)

---

## Production deploy (kindardent.com)

### Environment (required)

```bash
cp .env.example .env.local
```

Set on your host (Vercel, VPS, etc.):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://kindardent.com` |
| `PAYLOAD_SECRET` | Long random string (required) |
| `DATABASE_URL` / `DATABASE_AUTH_TOKEN` | Turso libSQL for Payload CMS |
| `TURSO_DATABASE_URL` / `TURSO_AUTH_TOKEN` | Profile API (can match DATABASE_*) |
| `NEXT_PUBLIC_REOWN_PROJECT_ID` | Reown Cloud — allowlist `kindardent.com` |

### Start commands

```bash
npm ci
npm run build
npm run start
```

Dev server: `npm run dev` → [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

### Payload CMS

- **Admin panel:** `https://kindardent.com/admin`
- **API:** `https://kindardent.com/api/*`
- Bootstrap admin locally only: set `ADMIN_EMAIL` / `ADMIN_PASSWORD`, then run `node --import tsx scripts/seedAdmin.ts` ( `/api/seed` is disabled in production)

---

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Custom CSS + Tailwind 4
- **Web3 SDK:** [Wagmi](https://wagmi.sh/) + [Reown AppKit](https://reown.com/appkit)
- **Database:** [Turso](https://turso.tech/) (libSQL) for wallet-linked profiles
- **CMS:** Payload 3 (optional admin)

---

## Install & run

### Prerequisites
- Node.js 18+
- npm

### Clone
```bash
git clone https://github.com/Kindard-com/Kindardent.git
cd Kindardent
```

### Configure environment
```bash
cp .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `TURSO_DATABASE_URL` | Turso libSQL URL |
| `TURSO_AUTH_TOKEN` | Turso auth token |
| `NEXT_PUBLIC_REOWN_PROJECT_ID` | Reown Cloud project ID (optional) |
| `PAYLOAD_SECRET` | Payload CMS secret |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Local admin seed only |

Never commit `.env.local` or real secrets.

### Install & start
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Key routes

| Path | Description |
|---|---|
| `/` | Commerce hero + new arrivals |
| `/buy` | `$KDAT` swap UI + wallet connect |
| `/profile` | Wallet-gated profile (Turso) |
| `/whitepaper` | Tokenomics |
| `/stores` | Flagship store index |
| `/stores/[city]` | Per-city store page |

---

## GitHub Pages

Enable **Settings → Pages → Source: GitHub Actions**. The `Deploy GitHub Pages` workflow publishes [`docs/`](docs/) (gallery + screenshots + video).

Until Pages is enabled, open [`docs/index.html`](docs/index.html) in the repo or browse images under [`docs/demo/`](docs/demo/).

---

## Smart contracts

`$KDAT` swap UI is prototype mode. Wallet connect and native ETH balance reads work; on-chain swap needs the final contract address.
