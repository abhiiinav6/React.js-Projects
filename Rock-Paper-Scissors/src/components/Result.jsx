import React from "react";
import Button from "./Button";

function Result({ winner, userChoice, computerChoice, setHide }) {
  
  const playAgainHandler = () => {
    setHide(false);
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-16 mt-16">
        <div
          className={`h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer ${
            userChoice === "PAPER"
              ? "border-blue-700"
              : userChoice === "SCISSOR"
              ? "border-yellow-400"
              : "border-red-600"
          } shadow-slate-500 shadow-2xl`}
        >
          <img
            src={`/images/icon-${
              userChoice === "PAPER"
                ? "paper"
                : userChoice === "ROCK"
                ? "rock"
                : "scissors"
            }.svg`}
            alt=""
          />
        </div>
        <div
          className={`h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer ${
            computerChoice === "PAPER"
              ? "border-blue-700"
              : computerChoice === "SCISSOR"
              ? "border-yellow-400"
              : "border-red-600"
          }`}
        >
          <img
            src={`/images/icon-${
              computerChoice === "PAPER"
                ? "paper"
                : computerChoice === "ROCK"
                ? "rock"
                : "scissors"
            }.svg`}
            alt=""
          />
        </div>
      </div>
      <h1 className="text-white text-center text-4xl mt-16 font-bold">
        {winner === 1 ? "YOU WON" : winner === 0 ? "YOU LOSE" : "DRAW"}
      </h1>
      <Button
        onclick={playAgainHandler}
        text="PLAY AGAIN"
        className="bg-white text-black w-3/5 border-none h-12 text-xl font-medium lg:w-1/5 md:2/5"
      />
    </div>
  );
}

export default Result;
