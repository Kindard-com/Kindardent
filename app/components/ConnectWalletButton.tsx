"use client";

import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

type Props = {
  label?: string;
  className?: string;
};

/** Reliable connect control using AppKit hooks (fallback if web component clicks fail). */
export default function ConnectWalletButton({
  label = "Connect Wallet",
  className,
}: Props) {
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();

  const short =
    address && address.length > 10
      ? `${address.slice(0, 6)}…${address.slice(-4)}`
      : null;

  return (
    <button
      type="button"
      className={className}
      onClick={() => open()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        border: "1px solid #1C1C1C",
        background: isConnected ? "#1C1C1C" : "#2563EB",
        color: "#FFFFFF",
        padding: "0.55rem 1rem",
        fontSize: "0.65rem",
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-condensed, sans-serif)",
      }}
      aria-label={isConnected ? "Open wallet account" : "Connect wallet"}
    >
      {isConnected && short ? short : label}
    </button>
  );
}
