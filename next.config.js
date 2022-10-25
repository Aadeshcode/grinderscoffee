/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "canotes.s3.ap-south-1.amazonaws.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
