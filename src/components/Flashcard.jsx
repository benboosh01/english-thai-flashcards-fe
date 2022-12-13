import { useState } from "react";

export const Flashcard = ({ phrases }) => {
  const [randomNum, setRandomNum] = useState(0);
  const [showEng, setShowEng] = useState(false);
  const [showThai, setShowThai] = useState(false);

  const generateNumber = () => {
    setShowThai(false);
    setShowEng(false);
    setRandomNum(Math.floor(Math.random() * phrases.length));
  };

  return (
    <section className="flashcard-section">
      {showEng ? (
        <input
          type="button"
          onClick={() => {
            setShowEng(!showEng);
          }}
          value={phrases[randomNum].english}
          className="flashcard"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setShowEng(!showEng);
          }}
          className="flashcard"
        >
          <img
            className="flash-flag"
            src={require("../imgs/002-united-kingdom.png")}
            alt="uk flag"
          />
        </button>
      )}

      {showThai ? (
        <input
          type="button"
          onClick={() => {
            setShowThai(!showThai);
          }}
          value={
            phrases[randomNum].thai_script + " " + phrases[randomNum].thai_latin
          }
          className="flashcard"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setShowThai(!showThai);
          }}
          className="flashcard"
        >
          <img
            className="flash-flag"
            src={require("../imgs/001-thailand.png")}
            alt="thai flag"
          />
        </button>
      )}

      <button onClick={generateNumber} className="app-button">
        Generate New Phrase
      </button>
    </section>
  );
};
