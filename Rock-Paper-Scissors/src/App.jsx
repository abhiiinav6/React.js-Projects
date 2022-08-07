import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import RuleButton from "./components/RuleButton";
import Rules from "./components/Rules";

function App() {
  
  return (
    <div className="App w-full h-screen">
      {/* <Header score={score} /> */}
      <Main setScoreFn={setScoreFn}/>
      <RuleButton />
      <Rules />
    </div>
  );
}

export default App;
