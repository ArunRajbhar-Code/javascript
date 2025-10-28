import React, { useState } from "react";

function Counter() {
  const but = ["red", "white", "orange", "green"];
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");
  function addone() {
    setCounter(counter + 1);
  }
  function subone() {
    if (counter < 0) {
    }
    setCounter(counter - 1);
  }
  function changeColor(color1) {
    setColor(color1);
  }
  return (
    <div
      className="w-full h-screen flex flex-col justify-between items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-green-500">{counter}</h1>
        <div className="flex gap-2">
          <button
            onClick={addone}
            className="rounded bg-gray-300 px-2 py-1  text-green-500"
          >
            Add
          </button>
          <button
            onClick={subone}
            className="rounded bg-gray-300 px-2 py-1  text-red-600"
          >
            Sub
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/2 text-black gap-1 bg-gray-100 rounded-xl">
        {but.map((button1, index) => (
          <button
            onClick={() => changeColor(button1)}
            key={index}
            className="px-2 py-1 rounded-2xl w-20"
            style={{ backgroundColor: button1 }}
          >
            {button1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Counter;
