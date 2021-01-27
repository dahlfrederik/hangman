import React from "react";

const Digits = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="digit">
      <h2>
        You can chose between the following keys, use your keyboard to input
      </h2>
      {letters.map((letter) => (
        <li key={letter}>{letter}</li>
      ))}
    </div>
  );
};

export default Digits;
