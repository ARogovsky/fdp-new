/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  productionBrowserSourceMaps: false,
  experimental: {
    modern: true,
  },
  browserslist: [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Edge versions",
    "last 2 Safari versions",
  ],
};

module.exports = nextConfig;
