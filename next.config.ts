import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn.themouthpieceng.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
