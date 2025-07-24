// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  
// };

// export default nextConfig;

// part2 attempt
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true, // Temporary measure
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   }
// }

// module.exports = nextConfig
module.exports = {
  typescript: {
    ignoreBuildErrors: false, // Re-enable type checking
  },
  eslint: {
    ignoreDuringBuilds: false, // Re-enable linting
  }
}