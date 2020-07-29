const path = require('path');

module.exports = {
  presets: [
    "@babel/env",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver", {
        "alias": {
          '/@/': './src/',
        },
        "extensions": [".js", ".vue", ".ts"]
      }
    ]
  ]
}
