/** @type {import('esbuild').BuildOptions} */
export const commonOptions = {
  entryPoints: ['src/index.jsx'],
  format: 'esm',
  jsx: 'automatic',
  outfile: 'public/dist/bundle.js',
  bundle: true,
  target: ['es2018'],
  loader: {
    '.svg': 'dataurl',
    '.module.css': 'local-css'
  }
}
