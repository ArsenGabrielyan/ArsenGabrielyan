import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: "arsengabrielyan.github.io"}
    ]
  }
};

export default nextConfig;
