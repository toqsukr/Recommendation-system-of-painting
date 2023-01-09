const withPWA = require("next-pwa")({
  dest: 'public',
  disable: process.env.NODE_ENV === "development",
})

const runtimeCaching = require("next-pwa/cache");

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  },
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  images: {
    formats: ["image/webp"]
  }
});


module.exports = nextConfig;
