import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'legmlweb.blob.core.windows.net',
        // if you want to allow any path, you might do:
        // pathname: '/**'
        // but if you're specifically using /founders/:
        pathname: '/founders/**'
      }
    ]
  }
};

export default nextConfig;
