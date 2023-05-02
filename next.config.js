/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
 i18n: {
  locales: ["en"],
  defaultLocale: "en",
},
}

module.exports = nextConfig
