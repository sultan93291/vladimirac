import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["vladimirac.softvencefsd.xyz", "www.dashboard.savalogistic.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dashboard.savalogistic.net",
        pathname: "**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);