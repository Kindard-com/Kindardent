import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const emptyModule = path.join(dirname, "lib/empty-module.js");

const nextConfig: NextConfig = {
  // Webpack (dev/build --webpack): mark optional wagmi peers as externals
  webpack: (config) => {
    config.externals.push(
      "pino-pretty",
      "lokijs",
      "encoding",
      "accounts",
      "porto",
      "porto/internal"
    );
    return config;
  },
  // Turbopack (default next build): alias optional peers to an empty stub
  turbopack: {
    resolveAlias: {
      accounts: emptyModule,
      porto: emptyModule,
      "porto/internal": emptyModule,
    },
  },
};

export default withPayload(nextConfig);
