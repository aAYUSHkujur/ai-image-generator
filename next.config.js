/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "citimagegenerator3c36f7.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
