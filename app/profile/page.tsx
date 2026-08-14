"use client";

import { useState, useEffect, useCallback } from "react";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";
import Link from "next/link";
import ConnectWalletButton from "../components/ConnectWalletButton";

// Convert a File to a base64 data URL
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}

export default function ProfilePage() {
  const { address, isConnected } = useAccount();
  const { data: balanceData } = useBalance({ address });

  const [avatar, setAvatar] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load profile from DB when wallet connects
  const loadProfile = useCallback(async () => {
    if (!address) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/profile?wallet=${address}`);
      const data = await res.json();
      if (data.profile) {
        setDisplayName(data.profile.display_name || "");
        setEmail(data.profile.email || "");
        setAvatar(data.profile.avatar_data || "");
        setBanner(data.profile.banner_data || "");
      }
    } catch (e) {
      console.error("Failed to load profile", e);
    } finally {
      setLoading(false);
    }
  }, [address]);

  useEffect(() => {
    if (isConnected && address) {
      loadProfile();
    }
  }, [isConnected, address, loadProfile]);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (base64: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setter(base64);
    }
  };

  const handleSave = async () => {
    if (!address) return;
    setSaving(true);
    try {
      await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wallet: address,
          display_name: displayName,
          email,
          avatar_data: avatar,
          banner_data: banner,
        }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      console.error("Failed to save profile", e);
    } finally {
      setSaving(false);
    }
  };

  // ── Not connected gate ──────────────────────────────────────
  if (!isConnected) {
    return (
      <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "68px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <h1 className="heading-editorial" style={{ fontSize: "clamp(2rem,6vw,4rem)", marginBottom: "1.5rem" }}>
            CONNECT YOUR WALLET
          </h1>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--mid)", marginBottom: "2rem", fontSize: "1rem" }}>
            Your profile is linked to your Ethereum wallet address.<br />Connect to access your dashboard.
          </p>
          <ConnectWalletButton />
        </div>
      </main>
    );
  }

  // ── Loading state ───────────────────────────────────────────
  if (loading) {
    return (
      <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "68px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Loading profile…</p>
      </main>
    );
  }

  // ── Profile page ────────────────────────────────────────────
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "300px",
          paddingTop: "68px",
          background: banner
            ? `url(${banner}) center/cover no-repeat`
            : "#BFBAB0",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
          <label style={{ cursor: "pointer", background: "var(--white)", border: "1px solid var(--black)", padding: "0.5rem 1rem", fontSize: "0.75rem", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--black)" }}>
            Upload Banner
            <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleImageUpload(e, setBanner)} />
          </label>
        </div>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Avatar + Name row */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5rem", marginTop: "-60px", marginBottom: "3rem", position: "relative", zIndex: 10 }}>
          {/* Avatar */}
          <div style={{
            position: "relative", width: "120px", height: "120px", borderRadius: "50%",
            background: avatar ? `url(${avatar}) center/cover` : "var(--white)",
            border: "3px solid var(--white)", outline: "1px solid var(--black)",
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            {!avatar && <span style={{ fontSize: "2.5rem", color: "var(--mid)" }}>?</span>}
            <label style={{ position: "absolute", inset: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.45)", opacity: 0, transition: "opacity 0.2s" }} className="avatar-overlay">
              <span style={{ color: "#fff", fontSize: "0.65rem", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Upload</span>
              <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleImageUpload(e, setAvatar)} />
            </label>
          </div>

          {/* Name + address */}
          <div style={{ paddingBottom: "0.75rem" }}>
            <h1 className="heading-editorial" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", margin: 0, lineHeight: 1 }}>
              {displayName || "Anonymous"}
            </h1>
            <p style={{ fontFamily: "monospace", color: "var(--mid)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
              {address?.substring(0, 8)}…{address?.substring(address.length - 6)}
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", paddingBottom: "5rem" }}>

          {/* Identity Settings */}
          <section style={{ border: "1px solid var(--black)", background: "var(--white)", padding: "2rem", boxShadow: "4px 4px 0 rgba(0,0,0,1)" }}>
            <h2 className="heading-condensed" style={{ fontSize: "1.25rem", borderBottom: "1px solid var(--black)", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
              IDENTITY SETTINGS
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.4rem", color: "var(--mid)" }}>Display Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  style={{ width: "100%", border: "1px solid var(--black)", background: "var(--bg)", padding: "0.75rem", fontFamily: "var(--font-body)", outline: "none", color: "var(--black)" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.4rem", color: "var(--mid)" }}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "100%", border: "1px solid var(--black)", background: "var(--bg)", padding: "0.75rem", fontFamily: "var(--font-body)", outline: "none", color: "var(--black)" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.4rem", color: "var(--mid)" }}>Connected Wallet</label>
                <div style={{ width: "100%", border: "1px solid var(--black)", background: "#EFEBE1", padding: "0.75rem", fontFamily: "monospace", fontSize: "0.78rem", color: "var(--black)", wordBreak: "break-all" }}>
                  {address}
                </div>
              </div>

              <button
                onClick={handleSave}
                disabled={saving}
                style={{ background: saved ? "#3a6b3a" : "var(--black)", color: "var(--white)", padding: "0.85rem", border: "none", cursor: saving ? "not-allowed" : "pointer", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.85rem", transition: "background 0.3s" }}
              >
                {saving ? "Saving…" : saved ? "✓ Saved!" : "Save Changes"}
              </button>
            </div>
          </section>

          {/* Investment Stats */}
          <section style={{ border: "1px solid var(--black)", background: "var(--white)", padding: "2rem", boxShadow: "4px 4px 0 rgba(0,0,0,1)" }}>
            <h2 className="heading-condensed" style={{ fontSize: "1.25rem", borderBottom: "1px solid var(--black)", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
              INVESTMENT STATS
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <span style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--mid)", marginBottom: "0.25rem" }}>Wallet Balance</span>
                <span className="heading-editorial" style={{ fontSize: "3rem", color: "var(--black)", lineHeight: 1 }}>
                  {balanceData
                    ? Number(formatEther(balanceData.value)).toFixed(4)
                    : "0.0000"}
                  <span style={{ fontSize: "1rem", marginLeft: "0.4rem", fontFamily: "var(--font-condensed)", fontWeight: 400 }}>
                    {balanceData?.symbol ?? "ETH"}
                  </span>
                </span>
              </div>

              <div>
                <span style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--mid)", marginBottom: "0.25rem" }}>Total $KDAT Held</span>
                <span className="heading-editorial" style={{ fontSize: "3rem", color: "var(--black)", lineHeight: 1 }}>
                  250,000
                  <span style={{ fontSize: "1rem", marginLeft: "0.4rem", fontFamily: "var(--font-condensed)", fontWeight: 400 }}>$KDAT</span>
                </span>
              </div>

              <Link
                href="/buy"
                style={{ background: "var(--black)", color: "var(--white)", padding: "0.85rem 1.25rem", textDecoration: "none", fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.85rem", textAlign: "center", display: "block", marginTop: "auto" }}
              >
                Invest More →
              </Link>
            </div>
          </section>

        </div>
      </div>

      <style>{`
        .avatar-overlay:hover { opacity: 1 !important; }
      `}</style>
    </main>
  );
}
