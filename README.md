# Kindardent.com 

Premium Kids Streetwear meets Web3. The official e-commerce frontend for Kindardent and the $KDAT token.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** Custom Vanilla CSS / Tailwind (Stark Brutalist Aesthetic)
- **Web3 Integration:** [Wagmi](https://wagmi.sh/) + [Reown AppKit](https://reown.com/appkit)
- **Database:** [Turso](https://turso.tech/) (libSQL / Edge SQLite) for User Profiles

---

## 🚀 How to Install & Run Locally

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Git**

### 2. Clone the Repository
```bash
git clone https://github.com/Kindard-com/Kindardent.git
cd Kindardent
```

### 3. Install Dependencies
Run the following command to install all required packages (Next.js, Wagmi, Turso client, etc.):
```bash
npm install
```
*(Note: If you encounter peer dependency warnings related to Wagmi/AppKit, they are safe to ignore for local development).*

### 4. Database Configuration (Turso)
The project is currently configured to connect to a Turso libSQL database for the `/profile` dashboard.
- The connection URL and Auth Token are located in `lib/turso.ts`.
- If you are setting up a *new* database, you will need to replace the `url` and `authToken` in that file with your own Turso credentials.

### 5. Start the Development Server
Start the local server (using the custom webpack flag required for our Web3 setup):
```bash
npm run dev
```

### 6. View the App
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

---

## 📁 Key Features & Directory Structure

- **`/app/page.tsx`**: The main landing page with the hero commerce section.
- **`/app/buy/page.tsx`**: The $KDAT token swap interface.
- **`/app/profile/page.tsx`**: Web3 User Dashboard. Connects your Ethereum wallet to Turso to save your Avatar, Banner, and Display Name.
- **`/app/whitepaper/page.tsx`**: $KDAT Tokenomics and Legal disclosures.
- **`/lib/turso.ts`**: Database connection initialization.

## 🔗 Smart Contracts
*(Note: The $KDAT smart contract integration is currently in prototype mode. Web3 UI components are active and reading real native ETH balances, but token swaps require the final deployed contract address).*
