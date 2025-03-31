/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/test-next",
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
