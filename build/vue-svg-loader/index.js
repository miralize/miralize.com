// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
const SVGO = require('svgo');
const { getOptions } = require('loader-utils');
const { compile } = require('@vue/compiler-dom');

async function optimizeAndCompileSvg(svgo, content, path) {
  const { data } = await svgo.optimize(content, {
    path,
  });

  const { code } = compile(data, {
    mode: 'module',
  });

  return `${code.replace('export ', '')}\nexport default { render }`;
}

module.exports = function vueSvgLoader(content) {
  const callback = this.async();
  const { svgoConfig } = getOptions(this) || {};
  const svgo = new SVGO(svgoConfig);

  optimizeAndCompileSvg(svgo, content, this.resourcePath)
    .then((component) => callback(null, component))
    .catch(callback);
};
