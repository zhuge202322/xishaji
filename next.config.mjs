/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    localPatterns: [
      {
        pathname: "/images/**"
      },
      {
        pathname: "/uploads/**"
      }
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;
