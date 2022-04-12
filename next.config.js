module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/cache');
    }
    return config;
  },
  env: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'localhost:3000'
        : `${process.env.BASE_URL}`,
  },
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
};
