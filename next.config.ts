import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => [
    {
      source: "/home",
      destination: "/api/redirect",
    },
  ],
};

export default nextConfig;
