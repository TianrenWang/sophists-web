/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["hips.hearstapps.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
