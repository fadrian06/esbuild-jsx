import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Live reload (only development)
import './utils/livereload'

const $root = document.querySelector('#root')
if (!$root) {
  throw new Error('Root element not found')
}

createRoot($root).render(<App />)
