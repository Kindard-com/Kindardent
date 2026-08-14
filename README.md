# Kindardent

Premium kids streetwear meets Web3 — Next.js storefront for Kindard Kids and the `$KDAT` token.

**Repo:** https://github.com/Kindard-com/Kindardent

---

## Preview

### Homepage
<img src="docs/demo/home.png" alt="Kindardent homepage" width="100%" />

### Connect Wallet (Reown AppKit SDK)
<img src="docs/demo/wallet-modal.png" alt="Connect Wallet modal with MetaMask, WalletConnect, Trust Wallet" width="100%" />

### Buy / Invest ($KDAT)
<img src="docs/demo/buy-kdat.png" alt="$KDAT buy and swap page" width="100%" />

### Profile
<img src="docs/demo/profile.png" alt="Wallet-gated profile page" width="100%" />

### Stores
<img src="docs/demo/stores.png" alt="Stores index page" width="100%" />

### Demo video

<video src="docs/demo/kindardent-demo.mp4" controls width="100%">
  Your browser does not support the video tag.
  <a href="docs/demo/kindardent-demo.mp4">Download the demo video (MP4)</a>
</video>

If the player does not show in your viewer, open the file directly:  
**[▶ Play / download demo video](docs/demo/kindardent-demo.mp4)**

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

Set at least:

| Variable | Purpose |
|---|---|
| `TURSO_DATABASE_URL` | Turso libSQL URL |
| `TURSO_AUTH_TOKEN` | Turso auth token |
| `NEXT_PUBLIC_REOWN_PROJECT_ID` | Reown Cloud project ID (optional; a default is embedded for demos) |
| `PAYLOAD_SECRET` | Payload CMS secret |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Only for local admin seed |

Never commit `.env.local` or real secrets.

### Install & start
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### SDK smoke test (optional)
With the dev server running:
```bash
npx playwright install chromium
node scripts/test-wallet.mjs
```
This clicks **Connect Wallet**, asserts the AppKit modal mounts, and refreshes screenshots under `docs/demo/`.

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

## Media files

All demo assets live in [`docs/demo/`](docs/demo/):

| File | Description |
|---|---|
| `home.png` | Homepage hero |
| `wallet-modal.png` | AppKit Connect Wallet modal |
| `buy-kdat.png` | Invest / swap UI |
| `profile.png` | Profile wallet gate |
| `stores.png` | Stores listing |
| `kindardent-demo.mp4` | Short walkthrough video |

---

## Smart contracts

`$KDAT` swap UI is prototype mode. Wallet connect and native ETH balance reads work; on-chain swap needs the final contract address.
