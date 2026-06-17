/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern, smaller formats (AVIF first, WebP fallback) for the
    // large project screenshots.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
