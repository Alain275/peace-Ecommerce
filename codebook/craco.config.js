const path = require('path');

module.exports = {
  
  //When CRACO isn’t picking up some postcss configuration, you  inline them into this  craco.config.js file.
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