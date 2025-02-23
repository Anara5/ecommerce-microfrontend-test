const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;

module.exports = {
  webpack: (config: { plugins: any[]; }, { isServer }: any) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          productsRemote: 'productsRemote@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          basketRemote: 'basketRemote@http://localhost:3002/remoteEntry.js',
        },
        exposes: {
          './store': './redux/store',
        },
        shared: {
          react: { singleton: true, eager: false, requiredVersion: false },
          'react-dom': { singleton: true, eager: false, requiredVersion: false },
          tailwindcss: { singleton: true, eager: true, requiredVersion: false },
          'postcss-loader': { singleton: true, eager: true, requiredVersion: false },
          'react-redux': { singleton: true, requiredVersion: false },
          '@reduxjs/toolkit': { singleton: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};
