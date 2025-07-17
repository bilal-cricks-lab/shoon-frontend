const checkEnvVariables = require("./check-env-variables")

// Only check env variables in development to avoid build failures
if (process.env.NODE_ENV === 'development') {
  checkEnvVariables()
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "shoon-backend.onrender.com",
      },
      {
        protocol: "https",
        hostname: "13.62.11.100",
      },
      {
        protocol: "https",
        hostname: "*.amplifyapp.com",
      }
    ],
    domains: [
      'shoon-backend.onrender.com',
      '13.62.11.100',
      'medusa-public-images.s3.eu-west-1.amazonaws.com',
      'medusa-server-testing.s3.amazonaws.com'
    ],
  },
}

module.exports = nextConfig