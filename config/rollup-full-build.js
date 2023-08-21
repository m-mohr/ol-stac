import commonjs from '@rollup/plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'build/index.js',
  output: {
    name: 'ol_stac',
    format: 'iife',
    exports: 'default',
    file: 'build/full/ol-stac.js',
    sourcemap: true,
  },
  plugins: [
    resolve({moduleDirectories: ['build', 'node_modules']}),
    commonjs(),
    externalGlobals({
      geotiff: 'GeoTIFF',
    }),
    terser(),
  ],
};
