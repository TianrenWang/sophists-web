/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["hips.hearstapps.com"],
  },
};

module.exports = nextConfig;
