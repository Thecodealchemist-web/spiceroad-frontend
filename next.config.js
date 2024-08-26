const { withNextVideo } = require('next-video/process')

const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const { hostname } = require('os')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "spiceroad.s3.eu-north-1.amazonaws.com"
      }
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = withNextVideo(nextConfig)
