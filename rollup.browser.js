import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
//import minify from 'rollup-plugin-babel-minify'

export default [
  {
    input: 'lib/SaUniqueId.browser.js',
    output: {
      name: 'Sa',
      file: 'lib/browser.min.js',
      format: 'iife',
      sourcemap: false,
    },
    plugins: [
      resolve({ browser: true }),
      commonjs()/*,
      minify({
        comments: false,
      }),*/
    ],
  },
]
