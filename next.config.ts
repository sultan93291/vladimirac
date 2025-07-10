import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Your existing config
const nextConfig: NextConfig = {
  images: {
    domains: ["vladimirac.softvencefsd.xyz"],
  },
};

// Wrap with next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Export the enhanced config
export default withNextIntl(nextConfig);
