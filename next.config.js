/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co", "storage.googleapis.com"],
  },
}

module.exports = nextConfig
