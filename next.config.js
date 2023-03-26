/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'rickandmortyapi.com',
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}

module.exports = nextConfig
