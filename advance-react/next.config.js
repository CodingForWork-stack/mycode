// next.config.js
const withPreact = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.dev) {
        config.resolve.alias = {
          ...config.resolve.alias,
          react: 'preact/compat', // Use Preact's React compatibility layer
          'react-dom/test-utils': 'preact/test-utils', // Use Preact's test utilities
          'react-dom': 'preact/compat', // Replace ReactDOM with Preact's version
        };
      }
      return config;
    },
  });
};

module.exports = withPreact({
  reactStrictMode: true, // Keep React strict mode enabled
  swcMinify: true, // Keep SWC minification enabled
});

