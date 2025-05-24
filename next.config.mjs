/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "workoscdn.com",
      },
    ],
  },
};

export default nextConfig;
