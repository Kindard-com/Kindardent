import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding", "accounts", "porto", "porto/internal");
    return config;
  },
};

export default nextConfig;
