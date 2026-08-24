import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: "arsengabrielyan.github.io"}
    ]
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);