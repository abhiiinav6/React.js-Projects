import { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import Main from './components/Main'
import RuleButton from './components/RuleButton'


function App() {
  return (
    <div className="App w-full h-screen">
      <Header />
      <Main />
      <RuleButton/>
    </div>
  )
}

export default App
