import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const $root = document.querySelector('#root')
if (!$root) {
	throw new Error('Root element not found')
}

createRoot($root).render(<App />)
