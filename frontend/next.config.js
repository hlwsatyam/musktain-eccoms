const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  env: {
    // Your environment variables
  },
 
  images: {
    domains: ['res.cloudinary.com'], // Fixed the typo here
  },
   
};

module.exports = withBundleAnalyzer(nextConfig);
