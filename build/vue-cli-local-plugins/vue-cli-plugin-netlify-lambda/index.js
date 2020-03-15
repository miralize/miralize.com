const { fork } = require('child_process');
const lambdaBuild = require('netlify-lambda/lib/build');

module.exports = (api, projectOptions) => {
  const { build, serve } = api.service.commands;
  const buildFn = build.fn;
  const serveFn = serve.fn;
  const netlifyConfig = (
    projectOptions.pluginOptions
    && projectOptions.pluginOptions.netlify
  ) || {};
  const { webpackConfig } = netlifyConfig;
  const directory = netlifyConfig.directory || 'src/lambda';
  const port = netlifyConfig.port || 9000;

  build.fn = async (...args) => {
    try {
      const [res, stats] = await Promise.all([
        buildFn(...args),
        lambdaBuild.run('src/lambda', webpackConfig),
      ]);
      console.log(stats.toString({ color: true }));
      return res;
    } catch (err) {
      console.error(err);
      process.exit(1);
      return null;
    }
  };

  serve.fn = (...args) => {
    const { devServer } = api.service.projectOptions;
    if (!devServer.proxy) {
      devServer.proxy = {};
    }

    devServer.proxy['/.netlify/functions'] = {
      target: `http://localhost:${port}`,
      pathRewrite: {
        '^/\\.netlify/functions': '',
      },
    };

    fork(require.resolve('netlify-lambda'), [
      'serve',
      ...(directory ? [directory] : []),
      ...(port ? ['-p', port] : []),
      ...(webpackConfig ? ['-c', webpackConfig] : []),
    ]);
    return serveFn(...args);
  };
};
