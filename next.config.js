/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Add any image domains you're using with next/image here
    ],
    unoptimized: process.env.NODE_ENV !== 'production'
  },
  swcMinify: true,
}

module.exports = nextConfig
