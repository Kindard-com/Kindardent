import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding", "accounts", "porto", "porto/internal");
    return config;
  },
};

export default withPayload(nextConfig);
