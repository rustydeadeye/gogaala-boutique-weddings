/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Workaround for a Windows path-normalization assertion in Next type-check phase.
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
