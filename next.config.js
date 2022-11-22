/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "miro.medium.com",
      "thumbs.dreamstime.com",
    ],
  },
  i18n,
};

module.exports = nextConfig;
