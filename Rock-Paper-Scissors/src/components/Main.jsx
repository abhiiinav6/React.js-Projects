import React, { useState } from "react";
import Header from "./Header";
import Result from "./Result";

function Main() {
  let arr = ["ROCK", "PAPER", "SCISSOR"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [hide, setHide] = useState(false);
  const [result, setResult] = useState(null);

  function userChoiceFun(e) {
    let id = e.target.id;
    setUserChoice(id.toUpperCase());
    setComputerChoice(arr[Math.floor(Math.random() * arr.length)]);
    setResult(getResult(userChoice, computerChoice));
    setHide(true);
  }

  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 10;
    }
    if (userChoice === "ROCK") {
      if (computerChoice === "SCISSOR") {
        return 1;
      } else {
        return 0;
      }
    }
    if (userChoice === "PAPER") {
      if (computerChoice === "ROCK") {
        return 1;
      } else {
        return 0;
      }
    }
    if (userChoice === "SCISSOR") {
      if (computerChoice === "PAPER") {
        return 1;
      } else {
        return 0;
      }
    }
  }
  return hide ? (
    <>
    <Header/>
      <Result
        winner={getResult(userChoice, computerChoice)}
        userChoice={userChoice}
        computerChoice={computerChoice}
        setHide={setHide}
      />
    </>
  ) : (
    <></>
    <div
      className={`flex w-full my-8 mx-auto justify-center items-center mt-32 relative z-10 `}
    >
      <div className="triangle w-full h-3/5 flex items-center flex-col">
        <div className="flex items-center justify-center gap-16 -mt-16 ">
          <div
            className="h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-blue-700  top-6"
            id="PAPER"
            onClick={(e) => userChoiceFun(e)}
          >
            <img src="/images/icon-paper.svg" id="Paper" alt="" />
          </div>
          <div
            className="h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-yellow-400"
            id="SCISSOR"
            onClick={(e) => userChoiceFun(e)}
          >
            <img src="/images/icon-scissors.svg" id="Scissor" alt="" />
          </div>
        </div>

        <div
          className="h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-red-600 mt-8"
          id="ROCK"
          onClick={(e) => userChoiceFun(e)}
        >
          <img src="/images/icon-ROCK.svg" id="Rock" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
