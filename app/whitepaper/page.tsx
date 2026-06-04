"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhitepaperPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "68px", color: "var(--black)" }}>
      {/* Header Section */}
      <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--black)", background: "var(--bg)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 className="heading-editorial" style={{ fontSize: "clamp(3rem, 8vw, 5rem)", marginBottom: "2rem", lineHeight: 1 }}>
            $KDAT WHITEPAPER V1.0
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.6, color: "var(--mid)" }}>
            A comprehensive overview of the Kindardent utility token ecosystem, tokenomics, governance framework, and initial distribution mechanics.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4rem" }}>
          
          {/* Executive Summary */}
          <article>
            <h2 className="heading-condensed" style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--black)", paddingBottom: "0.5rem" }}>
              01. EXECUTIVE SUMMARY
            </h2>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                Kindardent ($KDAT) is the native utility and governance token of the Kindard ecosystem. We are bridging the gap between high-end physical streetwear and immutable digital identity. By decentralizing ownership of limited physical drops, we empower our community to act as core stakeholders in the brand's aesthetic direction and financial success.
              </p>
              <p>
                The $KDAT token is deployed as an ERC-20 smart contract on the Ethereum Mainnet, ensuring global accessibility, deep liquidity, and cryptographic security.
              </p>
            </div>
          </article>

          {/* Tokenomics */}
          <article>
            <h2 className="heading-condensed" style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--black)", paddingBottom: "0.5rem" }}>
              02. TOKENOMICS & DISTRIBUTION
            </h2>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                <strong>Total Supply:</strong> 1,000,000,000 $KDAT (Fixed, non-mintable)
              </p>
              <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><strong>Public Sale (IPO/IDO):</strong> 40% (400,000,000 $KDAT) — Unlocked at TGE.</li>
                <li><strong>Ecosystem Rewards & Staking:</strong> 30% (300,000,000 $KDAT) — Vested linearly over 36 months.</li>
                <li><strong>Treasury & Liquidity:</strong> 15% (150,000,000 $KDAT) — Reserved for DEX liquidity and protocol operations.</li>
                <li><strong>Core Contributors:</strong> 15% (150,000,000 $KDAT) — Locked for 12 months, followed by a 24-month linear vesting schedule.</li>
              </ul>
            </div>
          </article>

          {/* Utility */}
          <article>
            <h2 className="heading-condensed" style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--black)", paddingBottom: "0.5rem" }}>
              03. ECOSYSTEM UTILITY
            </h2>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                <strong>Exclusive Access (Token-Gating):</strong> Physical garments and digital collectibles released via Kindardent will feature token-gated early access windows. Holding a minimum threshold of $KDAT grants whitelist status for hyper-limited drops.
              </p>
              <p>
                <strong>Revenue Distribution (Staking):</strong> 20% of net profits generated from physical garment sales on <a href="https://kindard.com" target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>kindard.com</a> are programmatically routed to the $KDAT staking contract. Users who lock their tokens will yield a proportionate share of this revenue in ETH/USDC.
              </p>
              <p>
                <strong>Decentralized Governance:</strong> $KDAT acts as a voting module. Token holders will submit and vote on proposals dictating future collection themes, collaborations, and treasury allocation.
              </p>
            </div>
          </article>

          {/* IPO Proof & Legal */}
          <article style={{ background: "#1C1C1C", color: "#F9F6F0", padding: "2rem" }}>
            <h2 className="heading-condensed" style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#F9F6F0" }}>
              04. IPO PROOF & LEGAL DISCLAIMER
            </h2>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "1rem", opacity: 0.8 }}>
              <p>
                <strong>INITIAL PUBLIC OFFERING (TOKEN GENERATION EVENT) DISCLOSURE</strong>
              </p>
              <p>
                The $KDAT token is classified as a cryptographic utility token designed exclusively for use within the Kindardent ecosystem. The acquisition of $KDAT during the Initial Public Offering (IPO) / Initial DEX Offering (IDO) does not constitute an investment contract, equity ownership, or security under the purview of the Securities Act of 1933 or any respective regulatory framework in your jurisdiction.
              </p>
              <p>
                By interacting with the $KDAT smart contract, buyers acknowledge that digital assets are highly volatile and inherently risky. Buyers assume full financial responsibility for their participation. Kindardent LLC disclaims all liability for capital loss, smart contract exploits, or regulatory shifts that may affect the token's operational capacity. 
              </p>
              <p>
                The token generation event operates on a transparent, audited ERC-20 framework. Proof of reserves and the cryptographic hash of the Genesis block allocation will be published upon the successful deployment of the primary contract. The distribution mechanics are strictly enforced by the immutable logic of the Ethereum Virtual Machine (EVM).
              </p>
              <p style={{ marginTop: "1rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                END OF REGULATORY ADDENDUM.
              </p>
            </div>
          </article>

          {/* Footer CTA */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link 
              href="/buy"
              className="btn btn-primary"
              style={{ padding: "1rem 3rem", fontSize: "1rem", background: "var(--accent)", color: "var(--black)", textDecoration: "none", display: "inline-block" }}
            >
              PARTICIPATE IN THE $KDAT SALE
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
