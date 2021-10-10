/* eslint-disable no-undef */

const { override, addWebpackPlugin } = require('customize-cra');
const { InjectManifest } = require('workbox-webpack-plugin');
module.exports = (webpack, ...args) => {
   // remove GenerateSW plugin
   webpack.plugins.pop();

   return override(
      addWebpackPlugin(
         new InjectManifest({
            swSrc: './src/custom-serviceWorker.js',
            swDest: './service-worker.js',
         }),
      ),
   )(webpack, ...args);
};
