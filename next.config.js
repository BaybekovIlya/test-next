/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/test-next",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;
