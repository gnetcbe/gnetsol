/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // ✅ enables static export
  images: {
    unoptimized: true, // required for static export
  },
};

module.exports = nextConfig;
