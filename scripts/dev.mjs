import esbuild from 'esbuild'
import { commonOptions, env } from './config.mjs'

const context = await esbuild.context({
  ...commonOptions,
  define: {
    ...env,
    isDevelopment: 'true'
  },
  sourcemap: 'external'
})

await context.watch()
console.info('Compiled successfully...')
console.info('Watching files...')

const { port } = await context.serve({
  servedir: 'public'
})

console.info(`Dev server on http://localhost:${port}`)
console.info('Live reload enabled + Hot CSS reload!!!')
