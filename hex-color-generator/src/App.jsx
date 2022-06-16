import { useState } from 'react'
import logo from './logo.svg'
import Layout from "./Layout"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Random Hex Colors</h1>
      <Layout />
    </div>
  )
}

export default App
