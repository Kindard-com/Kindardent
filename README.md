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
