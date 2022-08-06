import React from "react";

function Button({ text, className, onclick }) {
  return (
    <div
      className={`w-full flex justify-center my-16 lg:my-16`}
      onClick={onclick}
    >
      <div
        className={`w-32 aspect-auto border-2 text-white rounded-md p-2 cursor-pointer flex items-center justify-center ${className}`}
      >
        {text}
      </div>
    </div>
  );
}

export default Button;
