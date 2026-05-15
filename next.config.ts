import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalaura.shop",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
