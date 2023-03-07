import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json' assert { type: 'json' };
import commonjs from '@rollup/plugin-commonjs';

export default [
  // browser-friendly UMD build
  {
    input: 'src/Timestamp.js',
    output: {
      name: 'badger-timestamp',
      file: pkg.browser,
      format: 'umd',
      exports: 'named',
      plugins: [terser()]
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/Timestamp.js',
    plugins: [
      nodeResolve(),
      commonjs(),
    ],
    external: [
      "@abw/badger-utils"
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        plugins: [terser()]
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        exports: 'named',
        plugins: [terser()]
      }
    ]
  }
];
