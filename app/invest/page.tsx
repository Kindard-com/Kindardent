import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invest in Kindard ($KDAT Token)",
  description: "Participate in the Kindard Kids crypto token sale. Token ticker $KDAT.",
};

export default function InvestPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "var(--black)",
          padding: "clamp(3rem, 8vw, 7rem) 2rem",
          position: "relative",
          borderBottom: "var(--border-width) solid var(--black)",
        }}
        aria-labelledby="invest-heading"
      >
        <p
          className="label-caps"
          style={{
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          INVESTOR RELATIONS
        </p>
        <h1
          id="invest-heading"
          className="heading-condensed"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            color: "var(--white)",
            lineHeight: 0.9,
            maxWidth: "900px",
            marginBottom: "1.5rem"
          }}
        >
          OWN A PIECE OF<br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>KINDARD</span>
        </h1>
        <p style={{ fontWeight: 300, color: "var(--mid)", fontSize: "1.1rem", maxWidth: "600px", lineHeight: 1.6 }}>
          Kindard Kids (Token: <strong>$KDAT</strong>) is launching a Web3 Token Generation Event. We believe our community should share in the value they help create through decentralized ownership.
        </p>
      </section>

      {/* Main Content */}
      <div className="page-body-wide">
        
        <section style={{ marginBottom: "4rem" }}>
          <h2 className="heading-condensed" style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
            The KDAT Advantage
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
            <div>
              <p style={{ fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem", color: "#3a3a3a", marginBottom: "1rem" }}>
                <strong>Why invest in Kindard?</strong> The premium kids' streetwear market is expanding rapidly, and Kindard is perfectly positioned to capture significant market share. We treat kids like cultural participants, offering high-quality, sustainable garments that parents actually want to buy.
              </p>
              <p style={{ fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem", color: "#3a3a3a" }}>
                Our agile corporate structure, combined with transparent manufacturing and an aggressive digital-first expansion strategy, ensures strong long-term growth. We are building a fortress for global scale, delivering robust value to our shareholders while redefining an entire category.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200" 
                alt="Stock market chart representing growth" 
                style={{ width: "100%", height: "auto", border: "var(--border-width) solid var(--black)", display: "block" }} 
              />
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "4rem" }}>
          <h2 className="heading-condensed" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            How to Participate in the $KDAT Token Sale
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {/* Step 1 */}
            <div style={{ padding: "2rem", border: "var(--border-width) solid var(--black)" }}>
              <div style={{ fontSize: "2rem", color: "var(--accent)", marginBottom: "1rem" }} aria-hidden="true">01</div>
              <h3 className="heading-condensed" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Set Up a Web3 Wallet</h3>
              <p style={{ fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.6, color: "#3a3a3a" }}>
                You will need a secure non-custodial EVM wallet like MetaMask, Trust Wallet, or Coinbase Wallet. Ensure you have backed up your seed phrase securely offline before proceeding.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ padding: "2rem", border: "var(--border-width) solid var(--black)", background: "var(--black)", color: "var(--white)" }}>
              <div style={{ fontSize: "2rem", color: "var(--accent)", marginBottom: "1rem" }} aria-hidden="true">02</div>
              <h3 className="heading-condensed" style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--white)" }}>Acquire Funding Currency</h3>
              <p style={{ fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.6, color: "var(--mid)" }}>
                Fund your wallet with a supported cryptocurrency. The $KDAT token sale will accept <strong>ETH and USDC</strong>. Make sure you have enough extra Ethereum to cover the network gas fees.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ padding: "2rem", border: "var(--border-width) solid var(--black)" }}>
              <div style={{ fontSize: "2rem", color: "var(--accent)", marginBottom: "1rem" }} aria-hidden="true">03</div>
              <h3 className="heading-condensed" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Connect & Swap</h3>
              <p style={{ fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.6, color: "#3a3a3a" }}>
                Visit our official minting dApp, click 'Connect Wallet', and swap your ETH/USDC for $KDAT. Tokens will be airdropped to your wallet at the end of the public sale phase.
              </p>
            </div>
          </div>
        </section>

        <section style={{ 
          padding: "3rem", 
          border: "var(--border-width) solid var(--black)", 
          background: "#f0ede8",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}>
          <h2 className="heading-condensed" style={{ fontSize: "1.5rem" }}>
            Investor Resources
          </h2>
          <p style={{ fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.6, color: "#3a3a3a", maxWidth: "600px" }}>
            As a decentralized brand, we maintain full transparency via our smart contracts, corporate governance, and treasury wallets. Read our whitepaper and explore our verified corporate structure below.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/Structure_company" className="btn btn-primary">
              VIEW COMPANY STRUCTURE →
            </Link>
            <a href="mailto:investors@kindard.com" className="btn btn-ghost">
              CONTACT IR TEAM
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
