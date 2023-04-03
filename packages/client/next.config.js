/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
