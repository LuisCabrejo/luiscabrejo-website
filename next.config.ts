import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allow production builds to complete even with TypeScript errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'luiscabrejo.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
