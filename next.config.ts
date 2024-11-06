import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dam.nowoptics.net",
      },
    ],
  },
};

export default nextConfig;
