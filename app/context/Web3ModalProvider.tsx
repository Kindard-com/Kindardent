"use client";

import React, { ReactNode } from "react";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, base } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

export const projectId =
  process.env.NEXT_PUBLIC_REOWN_PROJECT_ID ||
  "059a8d474461767b617acb5f307cb128";

const queryClient = new QueryClient();

const networks = [mainnet, arbitrum, base] as const;

const wagmiAdapter = new WagmiAdapter({
  networks: [...networks],
  projectId,
  ssr: true,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (typeof window !== "undefined"
    ? window.location.origin
    : "https://kindardent.com");

const metadata = {
  name: "Kindard Kids",
  description: "Kindard Kids $KDAT Token Sale",
  url: siteUrl,
  icons: [`${siteUrl}/favicon.ico`],
};

createAppKit({
  adapters: [wagmiAdapter],
  networks: [...networks],
  projectId,
  metadata,
  features: {
    analytics: true,
    email: false,
    socials: false,
  },
  allowUnsupportedChain: true,
  themeMode: "light",
  themeVariables: {
    "--w3m-accent": "#2563EB",
    "--w3m-border-radius-master": "1px",
  },
});

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
