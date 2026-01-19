import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
