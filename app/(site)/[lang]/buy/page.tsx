"use client";

import { useState } from "react";
import Image from "next/image";
import ConnectWalletButton from "@/app/components/ConnectWalletButton";
import { useI18n } from "@/app/context/I18nProvider";

export default function BuyKdatPage() {
  const [ethAmount, setEthAmount] = useState("");
  const { t } = useI18n();

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "68px" }}>
      {/* Hero Section */}
      <section style={{ padding: "6rem 1.5rem 4rem 1.5rem", borderBottom: "1px solid var(--black)", background: "var(--bg)", color: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "3rem", position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <Image 
              src="/kdt.svg" 
              alt="$KDAT Logo" 
              width={240} 
              height={240} 
              style={{ marginBottom: "2rem" }} 
            />
            <h1 className="heading-editorial" style={{ fontSize: "clamp(3rem, 8vw, 5rem)", marginBottom: "1rem", lineHeight: 1 }}>
              {t.buy.title}
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", fontWeight: 300, color: "var(--mid)" }}>
              {t.buy.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Split Content: Why Invest + Swap Interface */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
          
          {/* Why Invest Content */}
          <div>
            <h2 className="heading-condensed" style={{ fontSize: "2rem", marginBottom: "2rem", color: "var(--black)" }}>{t.buy.whyInvest}</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <article>
                <h3 className="heading-condensed" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>01. EXCLUSIVE ACCESS</h3>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, lineHeight: 1.6, color: "var(--mid)" }}>
                  Holders of $KDAT gain priority access to limited edition Kindardent physical drops, early product releases, and exclusive VIP events worldwide.
                </p>
              </article>
              
              <article>
                <h3 className="heading-condensed" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>02. REVENUE SHARING</h3>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, lineHeight: 1.6, color: "var(--mid)" }}>
                  A portion of all secondary market sales of our digital wearables is distributed back to $KDAT token holders via our smart contract staking protocol.
                </p>
              </article>
              
              <article>
                <h3 className="heading-condensed" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>03. GOVERNANCE</h3>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, lineHeight: 1.6, color: "var(--mid)" }}>
                  Your $KDAT is your voting power. Propose and vote on the creative direction of upcoming Kindardent collections.
                </p>
              </article>
            </div>
          </div>

          {/* Swap Interface */}
          <div style={{ background: "var(--white)", padding: "2rem", border: "1px solid var(--black)", boxShadow: "8px 8px 0px rgba(0,0,0,1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
              <h2 className="heading-condensed" style={{ fontSize: "1.5rem", margin: 0, color: "var(--black)" }}>{t.buy.swapTitle}</h2>
              <ConnectWalletButton label={t.nav.connectWallet} />
            </div>
            
            <div style={{ background: "#EFEBE1", padding: "1rem", border: "1px solid var(--black)", marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-condensed)", fontWeight: 700, marginBottom: "0.5rem", color: "var(--black)", letterSpacing: "0.05em" }}>YOU PAY (ETH)</label>
              <input 
                type="number" 
                placeholder="0.0" 
                value={ethAmount}
                onChange={(e) => setEthAmount(e.target.value)}
                style={{ width: "100%", background: "transparent", border: "none", fontSize: "2rem", outline: "none", color: "var(--black)", fontFamily: "var(--font-body)", fontWeight: 300 }}
              />
            </div>

            <div style={{ textAlign: "center", margin: "1rem 0" }}>
              <span style={{ fontSize: "1.5rem", color: "var(--black)" }}>↓</span>
            </div>

            <div style={{ background: "#EFEBE1", padding: "1rem", border: "1px solid var(--black)", marginBottom: "2rem" }}>
              <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-condensed)", fontWeight: 700, marginBottom: "0.5rem", color: "var(--black)", letterSpacing: "0.05em" }}>YOU RECEIVE ($KDAT)</label>
              <input 
                type="text" 
                readOnly 
                value={ethAmount ? (Number(ethAmount) * 250000).toLocaleString() : "0.0"}
                style={{ width: "100%", background: "transparent", border: "none", fontSize: "2rem", outline: "none", color: "var(--mid)", fontFamily: "var(--font-body)", fontWeight: 300 }}
              />
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: "100%", padding: "1rem", fontSize: "1rem", display: "block", textAlign: "center" }}
              onClick={() => {
                alert("This is a Web3 frontend mockup for the $KDAT token sale. The Ethereum smart contracts are not yet deployed.");
              }}
            >
              {t.buy.confirmSwap}
            </button>
            <p style={{ textAlign: "center", fontSize: "0.75rem", marginTop: "1rem", color: "var(--mid)" }}>
              {t.buy.walletHint}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
