import React from "react";
import "../App.css";

const Word = ({ selectedWord, correctLetters }) => {
  const letters = selectedWord.split("");
  console.log(letters);
  const noBlankSpace = letters.filter((item) => item !== " ");

  console.log(noBlankSpace);

  const enterLetters = letters.map((letter, i) => {
    if (letter === " ") {
      letters.splice(i, 0);
      return <span key={i} className="blankspace"></span>;
    } else {
      return (
        <span className="letter" key={i}>
          {correctLetters.includes(letter) ? letter : ""}
        </span>
      );
    }
  });

  return <div className="word">{enterLetters}</div>;
};

export default Word;
