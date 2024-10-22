import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm' // ES6 modül
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs' // CommonJS modül
    }
  ],
  plugins: [typescript()],
  external: [] // Harici modülleri ekleyebilirsiniz
};
