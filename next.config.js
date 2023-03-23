/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GET_CHARACTERS: process.env.GET_CHARACTERS,
    GET_LOCATIONS: process.env.GET_LOCATIONS,
    GET_EPISODES: process.env.GET_EPISODES,
  }
}

module.exports = nextConfig
