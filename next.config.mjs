/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "dreambuilders.dk",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "img.freepik.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "i.pinimg.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "mir-s3-cdn-cf.behance.net",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "cdn.dribbble.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
      reactStrictMode: false,
};

export default nextConfig;
