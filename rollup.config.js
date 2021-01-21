import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: "src/index.ts",
  output: [{
     file: 'dist/index.js',
     format: 'cjs',
     sourceMap: true
  }
],
  sourceMap: true,
  plugins: [
      commonjs(),
      typescript()
  ]
}
