import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
/*import Figure from "./components/Figure";*/
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import Image from "./components/Image";
import Digits from "./components/Digits";
import { showNotification as show } from "./helpers/helpers";

const words = [
  "luke skywalker",
  "anakin skywalker",
  "fives",
  "rex",
  "obi-wan kenobi",
];

let random = Math.floor(Math.random() * words.length);

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedWord, setSelectedWord] = useState(words[random]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (
        (playable && keyCode >= 65 && keyCode <= 90) ||
        (playable && keyCode === 189)
      ) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((correctLetters) => [...correctLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    //Empty arrays for data
    setCorrectLetters([]);
    setWrongLetters([]);
    random = Math.floor(Math.random() * words.length);
    setSelectedWord(words[random]);
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <div className="image-container">
          <Image wrongLetters={wrongLetters} />
        </div>
        {/*<Figure wrongLetters={wrongLetters} /> */}
        <WrongLetters wrongLetters={wrongLetters} />

        <Word selectedWord={selectedWord} correctLetters={correctLetters} />

        <Digits />
      </div>
      <Notification showNotification={showNotification} />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  );
}

export default App;
