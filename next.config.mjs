/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.google.com",
            port: "",
            pathname: "/image/upload/**",
          },
        ],
      },
};

export default nextConfig;
