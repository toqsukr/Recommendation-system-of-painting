const withPWA = require("next-pwa")({
  dest: 'public',
  disable: process.env.NODE_ENV === "development",
})

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  images: {
    domains: ["https://api-for-r-sof-p.vercel.app/user/rcmd"],
    formats: ["image/webp"]
  }
});


module.exports = nextConfig;
