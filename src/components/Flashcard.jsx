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
        <input
          type="button"
          onClick={() => {
            setShowEng(!showEng);
          }}
          value="Show English"
          className="flashcard"
        />
      )}

      {showThai ? (
        <input
          type="button"
          onClick={() => {
            setShowThai(!showThai);
          }}
          value={phrases[randomNum].thai}
          className="flashcard"
        />
      ) : (
        <input
          type="button"
          onClick={() => {
            setShowThai(!showThai);
          }}
          value="Show Thai"
          className="flashcard"
        />
      )}

      <button onClick={generateNumber} className="app-button">
        Generate New Phrase
      </button>
    </section>
  );
};
