import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './app/src/index.ts',
  output: {
    format: 'es',
    dir: './dist',
  },
  plugins: [
    json(),
    nodeResolve(),
    commonjs(),
    typescript(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
  ],
};
