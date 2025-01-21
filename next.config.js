/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  basePath: '',
  output: 'export', // Static HTML export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
