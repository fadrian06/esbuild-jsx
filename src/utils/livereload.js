if (isDevelopment) {
	const getRandomString = () => Math.random().toString(36).slice(2)

	new EventSource('/esbuild').addEventListener('change', (event) => {
		const { data } = event
		const files = JSON.parse(data)
		const { added, removed, updated } = files

		if (!(added.length || removed.length) && updated.length >= 1) {
			const links = document.querySelectorAll('link')
			for (let index = 0; index < links.length; index += 1) {
				const link = links[index]
				const url = new URL(link.href)

				if (url.host === location.host && url.pathname === updated[0]) {
					const next = link.cloneNode()

					if (!(next instanceof HTMLLinkElement)) {
						return
					}

					next.href = `${updated[0]}?${getRandomString()}`
					next.onload = () => {
						link.remove()
					}

					const parent = link.parentNode

					if (!parent) {
						return
					}

					parent.insertBefore(next, link.nextSibling)
					return
				}
			}
		}

		location.reload()
	})
}
