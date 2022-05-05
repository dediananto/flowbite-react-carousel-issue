/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/dashboard",
        destination: "/",
      },
    ];
  },
  env: {
    appName: "e-Library DigitalSkola",
    apiUrl: "https://digitalskola.com/graphql/",
    baseName: "DigitalSkola",
    baseUrl: "https://digitalskola.com/",
  },
};

module.exports = nextConfig;
