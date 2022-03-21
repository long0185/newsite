const path = require("path");
const publicpath = path.resolve(__dirname, "public");
module.exports = {
  // assetPrefix: ".",
  images: {
    loader: "akamai",
    path: "/",
  },

  async rewrites() {
    return {
      // After checking all Next.js pages (including dynamic routes)
      // and static files we proxy any other requests
      fallback: [
        {
          source: "/web/:slug*",
          destination: "http://www.ga-robot.com:8088/web/:slug*",
        },
      ],
    };
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "components"),
      public: path.resolve(__dirname, "public"),
      assets: path.resolve(__dirname, "public/assets"),
      "@/data/*": ["data/*"],
      "@/layouts/*": ["layouts/*"],
      "@/lib/*": ["lib/*"],
      "@/css/*": ["css/*"],
    };
    return config;
  },
};
