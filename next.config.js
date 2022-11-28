/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["en", "ge"],
    defaultLocale: "en"
  }
};

module.exports = nextConfig;
