/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
    formats: ['image/avif', 'image/webp','image/jpg','image/png','image/gif'],
 },
 i18n: {
  locales: ["en"],
  defaultLocale: "en",
},
}

module.exports = nextConfig
