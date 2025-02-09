/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://mongoosejs.com/docs/nextjs.html
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
  // and the following to enable top-level await support for Webpack
};

export default nextConfig;
