// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // This enables static export
  images: {
    unoptimized: true,     // Required for static export
  },
  trailingSlash: true,     // Optional but recommended
};

export default nextConfig;