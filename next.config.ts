import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional, but recommended

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Enable SWC minification and other optimizations
  compiler: {
    removeConsole: false, // Keep console logs for development
  },

  webpack: (config: Configuration, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
    // Production optimizations
    if (!dev && !isServer) {
      if (config.optimization && config.optimization.splitChunks) {
        config.optimization.splitChunks.cacheGroups = {
          default: false,
          vendors: false,
          // example: create a custom cache group
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
        };
      }
    }

    return config;
  },

  // Remove headers for local dev (uncommented for production)
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
