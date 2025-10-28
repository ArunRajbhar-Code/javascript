import React, { useState, useCallback, useEffect, useRef } from "react";

function Password() {
  const [range1, setRange] = useState(8);
  const [number, setNumber] = useState(false);
  const [charater, setCharacter] = useState(false);
  const [password, setPassword] = useState();
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (range1) {
      str += "1234567890";
    }
    if (charater) {
      str += "@#$%^&*()_+[]{}|/?";
    }
    for (let index = 1; index <= range1; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [range1, number, charater, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [range1, number, charater, passwordGenerator]);
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center gap-10">
      <h1 className="text-center bg-black text-white font-bold text-2xl">
        Password Generator
      </h1>
      <div className="bg-gray-900 w-1/2 h-1/4 rounded-2xl">
        <div className="w-full h-1/2 ">
          <div className="p-4 flex justify-around gap-0">
            <input
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              className="w-1/2 bg-white rounded-2xl "
            />
            <button
              className="bg-black text-gray-900 px-2 py-1 font-bold rounded-2xl"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center">
          <div className="px-2 flex justify-between items-center gap-2">
            <input
              type="range"
              min={6}
              max={20}
              value={range1}
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
            <div>Length(1)</div>
            <input
              type="checkbox"
              id="c1"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label id="l1">Numbers</label>
            <input
              type="checkbox"
              id="c2"
              defaultChecked={charater}
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label id="l2">Spacial Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
