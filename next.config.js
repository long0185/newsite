const path = require("path");
const publicpath = path.resolve(__dirname, "public");
module.exports = {
  // assetPrefix: ".",
  images: {
    loader: "akamai",
    path: "/",
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
