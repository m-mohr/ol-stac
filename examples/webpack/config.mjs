import CopyPlugin from 'copy-webpack-plugin';
import ExampleBuilder from './example-builder.js';
import TerserPlugin from 'terser-webpack-plugin';
import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const src = path.join(dirname(fileURLToPath(import.meta.url)), '..');
const root = path.join(src, '..');

export default {
  context: src,
  target: ['browserslist'],
  entry: () => {
    const entry = {};
    fs.readdirSync(src)
      .filter((name) => /^(?!index).*\.html$/.test(name))
      .map((name) => name.replace(/\.html$/, ''))
      .forEach((example) => {
        entry[example] = `./${example}.js`;
      });
    return entry;
  },
  stats: 'minimal',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    runtimeChunk: {
      name: 'common',
    },
    splitChunks: {
      name: 'common',
      chunks: 'initial',
      minChunks: 2,
    },
  },
  plugins: [
    new ExampleBuilder({
      templates: path.join(src, 'templates'),
      common: 'common',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(root, 'site', 'src', 'theme'),
          to: 'theme',
        },
        {from: 'resources', to: 'resources'},
        {from: 'index.html', to: 'index.html'},
        {from: 'index.js', to: 'index.js'},
      ],
    }),
  ],
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.join(root, 'build', 'examples'),
  },
  resolve: {
    fallback: {
      fs: false,
      http: false,
      https: false,
    },
  },
};
