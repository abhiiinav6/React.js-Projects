import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import RuleButton from "./components/RuleButton";
import Rules from "./components/Rules";

function App() {
  const [score, setScore] = useState(0);
  const setScoreFn = x => {
    console.log(score,x)
    setScore(score=>score+x)
  }
  return (
    <div className="App w-full h-screen">
      <Header score={score} />
      <Main setScoreFn={setScoreFn}/>
      <RuleButton />
      <Rules />
    </div>
  );
}

export default App;
