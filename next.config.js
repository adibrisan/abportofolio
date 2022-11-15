/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
