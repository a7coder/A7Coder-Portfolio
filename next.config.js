/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"]
 },
 i18n: {
  locales: ["en"],
  defaultLocale: "en",
},
}

module.exports = nextConfig
