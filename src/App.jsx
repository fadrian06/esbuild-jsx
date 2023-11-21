import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

export default function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)

  return (
    <>
      <div>
        <a href='https://react.dev' rel='noreferrer' target='_blank'>
          <img alt='React logo' className='logo react' src={reactLogo} />
        </a>
      </div>
      <h1>React</h1>
      <div className='card'>
        <button onClick={incrementCount} type='button'>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test LiveReload
        </p>
      </div>
      <p className='read-the-docs'>Click on React logo to learn more</p>
    </>
  )
}
