import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "aaip.palmtech.com.au",
          },
        ],
        destination: "https://aaip.electricsheep.au/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.aaip.palmtech.com.au",
          },
        ],
        destination: "https://aaip.electricsheep.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
