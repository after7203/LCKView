/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/schedule",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["nng-phinf.pstatic.net", "s-qwer.op.gg"],
  },
};

module.exports = nextConfig;
