import type { UserConfig } from 'vite';
const svgPlugin = require('vite-plugin-svg');

const path = require('path');

const config: UserConfig = {
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },
  plugins: [
    svgPlugin()
  ]
};

export default config;
