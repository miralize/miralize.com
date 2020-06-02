const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV !== 'development') {
      config.plugins.delete('fork-ts-checker');
    }

    // SVG loader will transform imported SVGS to Vue components
    // const svgRule = config.module.rule('svg');
    // svgRule.uses.clear();
    // svgRule
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .end()
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader')
    //   .options({
    //     svgo: {
    //       plugins: [
    //         'prefixIds',
    //         'removeTitle',
    //         'removeDimensions',
    //         'removeDesc',
    //         'removeComments',
    //         'removeDoctype',
    //         { removeViewBox: false },
    //       ],
    //     },
    //   });
  },
  pluginOptions: {
    netlify: {
      port: 8787,
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/vars.scss'),
      ],
    },
  },
};
