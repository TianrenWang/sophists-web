/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["hips.hearstapps.com", "firebasestorage.googleapis.com"],
  },
  async redirects() {
    return [
      {
        source: "/p/:slug",
        destination: "/c/:slug",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
