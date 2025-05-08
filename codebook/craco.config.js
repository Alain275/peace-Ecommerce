const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss'), 
        require('autoprefixer'),
      ],
    },
  },

  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        assets: path.resolve(__dirname, 'src/assets'),
      };

      webpackConfig.resolve.modules = [
        path.resolve(__dirname, 'src'),
        ...webpackConfig.resolve.modules,
      ];

      webpackConfig.output.publicPath = '/';

      return webpackConfig;
    },
  },
};