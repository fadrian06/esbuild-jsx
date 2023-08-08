import esbuild from 'esbuild'

const context = await esbuild.context({
	entryPoints: ['src/index.jsx'],
	format: 'esm',
	jsx: 'automatic',
	outfile: 'public/dist/bundle.js',
	bundle: true,
	loader: {
		'.svg': 'dataurl'
	},
	define: {
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
