"use client";

import React, { ReactNode } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, arbitrum, base } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

// 1. Get Project ID
export const projectId = '059a8d474461767b617acb5f307cb128';

// 2. Set up QueryClient
const queryClient = new QueryClient();

// 3. Create Wagmi Adapter
const networks = [mainnet, arbitrum, base];
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
});

// 4. Create AppKit configuration
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: 'Kindard Kids',
    description: 'Kindard Kids $KDAT Token Sale',
    url: 'https://kindard.com',
    icons: ['https://kindard.com/favicon.ico']
  },
  features: {
    analytics: true
  },
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#ffffff',
    '--w3m-color-inverse': '#000000',
    '--w3m-border-radius-master': '1px'
  }
});

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
