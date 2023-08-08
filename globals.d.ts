declare module '*.svg' {
	const content: `data:image/svg+xml,${string}`
	export default content
}

declare let isDevelopment: boolean
declare interface LiveReloadChangeEvent {
	added: string[]
	removed: string[]
	updated: string[]
}
