import esbuild from 'esbuild'

esbuild
	.build({
		entryPoints: ['src/index.jsx'],
		format: 'esm',
		jsx: 'automatic',
		outfile: 'public/dist/bundle.js',
		bundle: true,
		loader: {
			'.svg': 'dataurl'
		},
		minify: true,
		target: 'es2018'
	})
	.then(() => {
		console.info('Compiled successfully')
	})
	.catch((error) => {
		console.error(error)
	})
