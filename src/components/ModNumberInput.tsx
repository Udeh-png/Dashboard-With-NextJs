"use client";

import { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

export default function ModNumberInput({
  max = 9,
  name,
}: {
  max?: number;
  name: string;
}) {
  const [inputValue, setInputValue] = useState(0);
  const [shouldFade, setShouldFade] = useState(true);

  function incrementValue() {
    setInputValue((v) => (v < max ? v + 1 : 0));
  }

  function decrementValue() {
    setInputValue((v) => (v > 0 ? v - 1 : max));
  }
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          incrementValue();
        } else if (e.key === "ArrowDown") {
          decrementValue();
        }
      }}
      className="flex flex-col justify-center items-center focus:outline-5 focus:outline-red-500"
      onFocus={() => {
        setShouldFade(false);
      }}
      onBlur={() => {
        setShouldFade(true);
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          incrementValue();
        }}
        className={`${
          shouldFade ? "text-gray-400" : "text-black"
        } transition-colors duration-300`}
      >
        <FaSortUp />
      </button>

      <input
        className="bg-white w-9 h-9 rounded text-center text-xl outline-0"
        type="text"
        name={name}
        max={1}
        inputMode="numeric"
        value={inputValue}
        readOnly
        onKeyDown={(e) => {
          if (
            ["Backspace", "Delete", "Tab", "Escape", "Enter"].includes(e.key)
          ) {
            return;
          }

          // Only allow digits
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
            return;
          }

          setInputValue(() => {
            if (Number(e.key) <= max) {
              return Number(e.key);
            }
            return 0;
          });
        }}
      />

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          decrementValue();
        }}
        className={`${shouldFade ? "text-gray-400" : "text-black"}`}
      >
        <FaSortDown />
      </button>
    </div>
  );
}
