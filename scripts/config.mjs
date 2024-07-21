import { readFileSync, existsSync, copyFileSync, writeFileSync } from 'node:fs'
import { parse } from 'dotenv'

/** @type {import('esbuild').BuildOptions} */
export const commonOptions = {
  bundle: true,
  entryPoints: ['src/index.jsx'],
  format: 'esm',
  jsx: 'automatic',
  loader: {
    '.module.css': 'local-css',
    '.svg': 'dataurl'
  },
  outfile: 'public/dist/bundle.js',
  target: ['es2018']
}

if (!existsSync('.env')) {
  copyFileSync('.env.dist', '.env')
}

const env = parse(readFileSync('.env'))
let declarations = ''

for (const variable in env) {
  env[variable] = `"${env[variable]}"`
  declarations += `declare const ${variable}: string\n`
}

writeFileSync('src/env.d.ts', declarations)

export { env }
