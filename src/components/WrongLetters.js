import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      {wrongLetters.length > 0 && <h2>Wrong letters</h2>}
      {wrongLetters
        .map((letter, index) => <span className="wrongLetters" key={index}>{letter}</span>)
        .reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, " ", curr]),
          null
        )}
    </div>
  );
};

export default WrongLetters;
