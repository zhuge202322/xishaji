/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
