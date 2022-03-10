module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/cache");
    }
    return config;
  },
  env: {
    BASE_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `${process.env.VERCEL_URL}`,
  },
  images: {
    domains: ["media.graphcms.com"],
  },
};
