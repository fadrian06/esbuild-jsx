import esbuild from 'esbuild'
import { commonOptions } from './esbuild.config.mjs'

await esbuild.build({
	...commonOptions,
	minify: true,
	define: {
		isDevelopment: 'false'
	}
})

console.info('Compiled successfully')
