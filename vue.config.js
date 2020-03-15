const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    // when file not specified try to load vue files 1st
    config.resolve.extensions.prepend('.vue');

    // SVG loader will transform imported SVGS to Vue components
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            'prefixIds',
            'removeTitle',
            'removeDimensions',
            'removeDesc',
            'removeComments',
            'removeDoctype',
            { removeViewBox: false },
          ],
        },
      });
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
