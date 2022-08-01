import React from "react";

function Button({ text }) {
  return (
    <div
      className="w-full flex justify-center my-16 lg:my-32"
    >
      <div className="w-32 aspect-auto border-2 text-center text-white rounded-md p-2 cursor-pointer">
        {text}
      </div>
    </div>
  );
}

export default Button;
