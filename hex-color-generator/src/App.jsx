import { useState, useEffect } from 'react'
import Layout from './Layout'
import "./index.css"
function App() {
  const [colorArray, setColorArray] = useState(["#9c5c50", "#70ca3b", "#3e67f0"])
  const randomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  function addingColor() {
    let arr = []
    for (let i = 0; i < 10; i++) {
      let color = randomHexColor()
      arr.push(color)
    }
    setColorArray([...arr])
  }
  useEffect(() => {
    addingColor()
    console.log(colorArray)
  }, [])
  return (
    <div className="App">
      <h1>Random Hex Colors</h1>
      <Layout colorArray={colorArray} />
    </div>
  )
}

export default App
