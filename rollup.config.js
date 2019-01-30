
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import html from 'rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: [
    {
      sourcemap: false,
      format: 'iife',
      name: 'UnoCodeAPP',
      file: 'build/unocode.js'
    }
  ],
  plugins: [
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    html({
      include: '**/*.html'
    }),
    
    sass(),

    // If we're building for production (npm run build
    // instead of npm run dev), transpile and minify
    production && babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['@babel/env', { useBuiltIns: 'usage', modules: false }]],
    }),
    production && terser()
  ]
};