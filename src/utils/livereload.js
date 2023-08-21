if (isDevelopment) {
	const getRandomString = () => Math.random().toString(36).slice(2)

	new EventSource('/esbuild').addEventListener('change', ({ data }) => {
		const { added, removed, updated } = JSON.parse(data)

		if (!(added.length || removed.length) && updated.length >= 1) {
			for (const link of Array.from(document.querySelectorAll('link'))) {
				const url = new URL(link.href)

				if (url.host === location.host && url.pathname === updated[0]) {
					const next = link.cloneNode()

					if (next instanceof HTMLLinkElement && link.parentNode) {
						next.href = `${updated[0]}?${getRandomString()}`
						next.onload = () => link.remove()

						link.parentNode.insertBefore(next, link.nextSibling)
					}

					return
				}
			}
		}

		location.reload()
	})
}
