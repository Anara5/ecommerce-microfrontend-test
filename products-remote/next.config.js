const packageJson = require('./package.json');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = packageJson.dependencies;

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {  
    config.plugins.push(
      new NextFederationPlugin({
        name: 'productsRemote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './index': './src/pages/index',
        },
        shared: {
          react: { singleton: true, requiredVersion: deps.react },
          'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
          tailwindcss: { singleton: true, eager: true, requiredVersion: false },
          'postcss-loader': { singleton: true, eager: true, requiredVersion: false },
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
